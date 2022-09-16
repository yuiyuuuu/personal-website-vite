(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) v(h);
  new MutationObserver((h) => {
    for (const g of h)
      if (g.type === "childList")
        for (const c of g.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && v(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(h) {
    const g = {};
    return (
      h.integrity && (g.integrity = h.integrity),
      h.referrerpolicy && (g.referrerPolicy = h.referrerpolicy),
      h.crossorigin === "use-credentials"
        ? (g.credentials = "include")
        : h.crossorigin === "anonymous"
        ? (g.credentials = "omit")
        : (g.credentials = "same-origin"),
      g
    );
  }
  function v(h) {
    if (h.ep) return;
    h.ep = !0;
    const g = p(h);
    fetch(h.href, g);
  }
})();
function bM(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Ef = { exports: {} },
  Fh = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (l, o) {
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = "18.2.0",
      v = Symbol.for("react.element"),
      h = Symbol.for("react.portal"),
      g = Symbol.for("react.fragment"),
      c = Symbol.for("react.strict_mode"),
      x = Symbol.for("react.profiler"),
      b = Symbol.for("react.provider"),
      C = Symbol.for("react.context"),
      A = Symbol.for("react.forward_ref"),
      k = Symbol.for("react.suspense"),
      F = Symbol.for("react.suspense_list"),
      z = Symbol.for("react.memo"),
      $ = Symbol.for("react.lazy"),
      ne = Symbol.for("react.offscreen"),
      Se = Symbol.iterator,
      fe = "@@iterator";
    function X(d) {
      if (d === null || typeof d != "object") return null;
      var S = (Se && d[Se]) || d[fe];
      return typeof S == "function" ? S : null;
    }
    var J = { current: null },
      K = { transition: null },
      Y = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      Fe = { current: null },
      Ee = {},
      Dt = null;
    function Ct(d) {
      Dt = d;
    }
    (Ee.setExtraStackFrame = function (d) {
      Dt = d;
    }),
      (Ee.getCurrentStack = null),
      (Ee.getStackAddendum = function () {
        var d = "";
        Dt && (d += Dt);
        var S = Ee.getCurrentStack;
        return S && (d += S() || ""), d;
      });
    var ct = !1,
      ke = !1,
      $t = !1,
      Ce = !1,
      Me = !1,
      ot = {
        ReactCurrentDispatcher: J,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: Fe,
      };
    (ot.ReactDebugCurrentFrame = Ee), (ot.ReactCurrentActQueue = Y);
    function Ge(d) {
      {
        for (
          var S = arguments.length, w = new Array(S > 1 ? S - 1 : 0), L = 1;
          L < S;
          L++
        )
          w[L - 1] = arguments[L];
        ht("warn", d, w);
      }
    }
    function se(d) {
      {
        for (
          var S = arguments.length, w = new Array(S > 1 ? S - 1 : 0), L = 1;
          L < S;
          L++
        )
          w[L - 1] = arguments[L];
        ht("error", d, w);
      }
    }
    function ht(d, S, w) {
      {
        var L = ot.ReactDebugCurrentFrame,
          I = L.getStackAddendum();
        I !== "" && ((S += "%s"), (w = w.concat([I])));
        var ve = w.map(function (re) {
          return String(re);
        });
        ve.unshift("Warning: " + S),
          Function.prototype.apply.call(console[d], console, ve);
      }
    }
    var on = {};
    function sn(d, S) {
      {
        var w = d.constructor,
          L = (w && (w.displayName || w.name)) || "ReactClass",
          I = L + "." + S;
        if (on[I]) return;
        se(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          S,
          L
        ),
          (on[I] = !0);
      }
    }
    var Qe = {
        isMounted: function (d) {
          return !1;
        },
        enqueueForceUpdate: function (d, S, w) {
          sn(d, "forceUpdate");
        },
        enqueueReplaceState: function (d, S, w, L) {
          sn(d, "replaceState");
        },
        enqueueSetState: function (d, S, w, L) {
          sn(d, "setState");
        },
      },
      Xe = Object.assign,
      gt = {};
    Object.freeze(gt);
    function Wt(d, S, w) {
      (this.props = d),
        (this.context = S),
        (this.refs = gt),
        (this.updater = w || Qe);
    }
    (Wt.prototype.isReactComponent = {}),
      (Wt.prototype.setState = function (d, S) {
        if (typeof d != "object" && typeof d != "function" && d != null)
          throw new Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, d, S, "setState");
      }),
      (Wt.prototype.forceUpdate = function (d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate");
      });
    {
      var Mn = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        },
        wn = function (d, S) {
          Object.defineProperty(Wt.prototype, d, {
            get: function () {
              Ge(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                S[0],
                S[1]
              );
            },
          });
        };
      for (var ga in Mn) Mn.hasOwnProperty(ga) && wn(ga, Mn[ga]);
    }
    function ia() {}
    ia.prototype = Wt.prototype;
    function Kt(d, S, w) {
      (this.props = d),
        (this.context = S),
        (this.refs = gt),
        (this.updater = w || Qe);
    }
    var An = (Kt.prototype = new ia());
    (An.constructor = Kt), Xe(An, Wt.prototype), (An.isPureReactComponent = !0);
    function $n() {
      var d = { current: null };
      return Object.seal(d), d;
    }
    var Yn = Array.isArray;
    function _t(d) {
      return Yn(d);
    }
    function cn(d) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag,
          w = (S && d[Symbol.toStringTag]) || d.constructor.name || "Object";
        return w;
      }
    }
    function Yt(d) {
      try {
        return It(d), !1;
      } catch {
        return !0;
      }
    }
    function It(d) {
      return "" + d;
    }
    function Lt(d) {
      if (Yt(d))
        return (
          se(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            cn(d)
          ),
          It(d)
        );
    }
    function In(d, S, w) {
      var L = d.displayName;
      if (L) return L;
      var I = S.displayName || S.name || "";
      return I !== "" ? w + "(" + I + ")" : w;
    }
    function ua(d) {
      return d.displayName || "Context";
    }
    function Ln(d) {
      if (d == null) return null;
      if (
        (typeof d.tag == "number" &&
          se(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ),
        typeof d == "function")
      )
        return d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case g:
          return "Fragment";
        case h:
          return "Portal";
        case x:
          return "Profiler";
        case c:
          return "StrictMode";
        case k:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case C:
            var S = d;
            return ua(S) + ".Consumer";
          case b:
            var w = d;
            return ua(w._context) + ".Provider";
          case A:
            return In(d, d.render, "ForwardRef");
          case z:
            var L = d.displayName || null;
            return L !== null ? L : Ln(d.type) || "Memo";
          case $: {
            var I = d,
              ve = I._payload,
              re = I._init;
            try {
              return Ln(re(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ba = Object.prototype.hasOwnProperty,
      la = { key: !0, ref: !0, __self: !0, __source: !0 },
      En,
      oa,
      fn;
    fn = {};
    function Pn(d) {
      if (ba.call(d, "ref")) {
        var S = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (S && S.isReactWarning) return !1;
      }
      return d.ref !== void 0;
    }
    function Tt(d) {
      if (ba.call(d, "key")) {
        var S = Object.getOwnPropertyDescriptor(d, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function sa(d, S) {
      var w = function () {
        En ||
          ((En = !0),
          se(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            S
          ));
      };
      (w.isReactWarning = !0),
        Object.defineProperty(d, "key", { get: w, configurable: !0 });
    }
    function Ja(d, S) {
      var w = function () {
        oa ||
          ((oa = !0),
          se(
            "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            S
          ));
      };
      (w.isReactWarning = !0),
        Object.defineProperty(d, "ref", { get: w, configurable: !0 });
    }
    function er(d) {
      if (
        typeof d.ref == "string" &&
        Fe.current &&
        d.__self &&
        Fe.current.stateNode !== d.__self
      ) {
        var S = Ln(Fe.current.type);
        fn[S] ||
          (se(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            S,
            d.ref
          ),
          (fn[S] = !0));
      }
    }
    var q = function (d, S, w, L, I, ve, re) {
      var me = { $$typeof: v, type: d, key: S, ref: w, props: re, _owner: ve };
      return (
        (me._store = {}),
        Object.defineProperty(me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: L,
        }),
        Object.defineProperty(me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I,
        }),
        Object.freeze && (Object.freeze(me.props), Object.freeze(me)),
        me
      );
    };
    function ue(d, S, w) {
      var L,
        I = {},
        ve = null,
        re = null,
        me = null,
        Ue = null;
      if (S != null) {
        Pn(S) && ((re = S.ref), er(S)),
          Tt(S) && (Lt(S.key), (ve = "" + S.key)),
          (me = S.__self === void 0 ? null : S.__self),
          (Ue = S.__source === void 0 ? null : S.__source);
        for (L in S) ba.call(S, L) && !la.hasOwnProperty(L) && (I[L] = S[L]);
      }
      var Ze = arguments.length - 2;
      if (Ze === 1) I.children = w;
      else if (Ze > 1) {
        for (var rt = Array(Ze), it = 0; it < Ze; it++)
          rt[it] = arguments[it + 2];
        Object.freeze && Object.freeze(rt), (I.children = rt);
      }
      if (d && d.defaultProps) {
        var pt = d.defaultProps;
        for (L in pt) I[L] === void 0 && (I[L] = pt[L]);
      }
      if (ve || re) {
        var St =
          typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
        ve && sa(I, St), re && Ja(I, St);
      }
      return q(d, ve, re, me, Ue, Fe.current, I);
    }
    function _e(d, S) {
      var w = q(d.type, S, d.ref, d._self, d._source, d._owner, d.props);
      return w;
    }
    function We(d, S, w) {
      if (d == null)
        throw new Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            "."
        );
      var L,
        I = Xe({}, d.props),
        ve = d.key,
        re = d.ref,
        me = d._self,
        Ue = d._source,
        Ze = d._owner;
      if (S != null) {
        Pn(S) && ((re = S.ref), (Ze = Fe.current)),
          Tt(S) && (Lt(S.key), (ve = "" + S.key));
        var rt;
        d.type && d.type.defaultProps && (rt = d.type.defaultProps);
        for (L in S)
          ba.call(S, L) &&
            !la.hasOwnProperty(L) &&
            (S[L] === void 0 && rt !== void 0 ? (I[L] = rt[L]) : (I[L] = S[L]));
      }
      var it = arguments.length - 2;
      if (it === 1) I.children = w;
      else if (it > 1) {
        for (var pt = Array(it), St = 0; St < it; St++)
          pt[St] = arguments[St + 2];
        I.children = pt;
      }
      return q(d.type, ve, re, me, Ue, Ze, I);
    }
    function Ke(d) {
      return typeof d == "object" && d !== null && d.$$typeof === v;
    }
    var kt = ".",
      Rt = ":";
    function kn(d) {
      var S = /[=:]/g,
        w = { "=": "=0", ":": "=2" },
        L = d.replace(S, function (I) {
          return w[I];
        });
      return "$" + L;
    }
    var at = !1,
      qn = /\/+/g;
    function ft(d) {
      return d.replace(qn, "$&/");
    }
    function dt(d, S) {
      return typeof d == "object" && d !== null && d.key != null
        ? (Lt(d.key), kn("" + d.key))
        : S.toString(36);
    }
    function Na(d, S, w, L, I) {
      var ve = typeof d;
      (ve === "undefined" || ve === "boolean") && (d = null);
      var re = !1;
      if (d === null) re = !0;
      else
        switch (ve) {
          case "string":
          case "number":
            re = !0;
            break;
          case "object":
            switch (d.$$typeof) {
              case v:
              case h:
                re = !0;
            }
        }
      if (re) {
        var me = d,
          Ue = I(me),
          Ze = L === "" ? kt + dt(me, 0) : L;
        if (_t(Ue)) {
          var rt = "";
          Ze != null && (rt = ft(Ze) + "/"),
            Na(Ue, S, rt, "", function (Uf) {
              return Uf;
            });
        } else
          Ue != null &&
            (Ke(Ue) &&
              (Ue.key && (!me || me.key !== Ue.key) && Lt(Ue.key),
              (Ue = _e(
                Ue,
                w +
                  (Ue.key && (!me || me.key !== Ue.key)
                    ? ft("" + Ue.key) + "/"
                    : "") +
                  Ze
              ))),
            S.push(Ue));
        return 1;
      }
      var it,
        pt,
        St = 0,
        Ie = L === "" ? kt : L + Rt;
      if (_t(d))
        for (var Fr = 0; Fr < d.length; Fr++)
          (it = d[Fr]), (pt = Ie + dt(it, Fr)), (St += Na(it, S, w, pt, I));
      else {
        var ru = X(d);
        if (typeof ru == "function") {
          var hl = d;
          ru === hl.entries &&
            (at ||
              Ge(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (at = !0));
          for (var kf = ru.call(hl), rr, ml = 0; !(rr = kf.next()).done; )
            (it = rr.value),
              (pt = Ie + dt(it, ml++)),
              (St += Na(it, S, w, pt, I));
        } else if (ve === "object") {
          var yl = String(d);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (yl === "[object Object]"
                ? "object with keys {" + Object.keys(d).join(", ") + "}"
                : yl) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
      }
      return St;
    }
    function Sa(d, S, w) {
      if (d == null) return d;
      var L = [],
        I = 0;
      return (
        Na(d, L, "", "", function (ve) {
          return S.call(w, ve, I++);
        }),
        L
      );
    }
    function ci(d) {
      var S = 0;
      return (
        Sa(d, function () {
          S++;
        }),
        S
      );
    }
    function Zi(d, S, w) {
      Sa(
        d,
        function () {
          S.apply(this, arguments);
        },
        w
      );
    }
    function tl(d) {
      return (
        Sa(d, function (S) {
          return S;
        }) || []
      );
    }
    function fi(d) {
      if (!Ke(d))
        throw new Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
    function di(d) {
      var S = {
        $$typeof: C,
        _currentValue: d,
        _currentValue2: d,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      S.Provider = { $$typeof: b, _context: S };
      var w = !1,
        L = !1,
        I = !1;
      {
        var ve = { $$typeof: C, _context: S };
        Object.defineProperties(ve, {
          Provider: {
            get: function () {
              return (
                L ||
                  ((L = !0),
                  se(
                    "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                  )),
                S.Provider
              );
            },
            set: function (re) {
              S.Provider = re;
            },
          },
          _currentValue: {
            get: function () {
              return S._currentValue;
            },
            set: function (re) {
              S._currentValue = re;
            },
          },
          _currentValue2: {
            get: function () {
              return S._currentValue2;
            },
            set: function (re) {
              S._currentValue2 = re;
            },
          },
          _threadCount: {
            get: function () {
              return S._threadCount;
            },
            set: function (re) {
              S._threadCount = re;
            },
          },
          Consumer: {
            get: function () {
              return (
                w ||
                  ((w = !0),
                  se(
                    "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                  )),
                S.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return S.displayName;
            },
            set: function (re) {
              I ||
                (Ge(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  re
                ),
                (I = !0));
            },
          },
        }),
          (S.Consumer = ve);
      }
      return (S._currentRenderer = null), (S._currentRenderer2 = null), S;
    }
    var tr = -1,
      Mr = 0,
      wr = 1,
      za = 2;
    function E(d) {
      if (d._status === tr) {
        var S = d._result,
          w = S();
        if (
          (w.then(
            function (ve) {
              if (d._status === Mr || d._status === tr) {
                var re = d;
                (re._status = wr), (re._result = ve);
              }
            },
            function (ve) {
              if (d._status === Mr || d._status === tr) {
                var re = d;
                (re._status = za), (re._result = ve);
              }
            }
          ),
          d._status === tr)
        ) {
          var L = d;
          (L._status = Mr), (L._result = w);
        }
      }
      if (d._status === wr) {
        var I = d._result;
        return (
          I === void 0 &&
            se(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              I
            ),
          "default" in I ||
            se(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              I
            ),
          I.default
        );
      } else throw d._result;
    }
    function V(d) {
      var S = { _status: tr, _result: d },
        w = { $$typeof: $, _payload: S, _init: E };
      {
        var L, I;
        Object.defineProperties(w, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return L;
            },
            set: function (ve) {
              se(
                "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (L = ve),
                Object.defineProperty(w, "defaultProps", { enumerable: !0 });
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return I;
            },
            set: function (ve) {
              se(
                "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (I = ve),
                Object.defineProperty(w, "propTypes", { enumerable: !0 });
            },
          },
        });
      }
      return w;
    }
    function G(d) {
      d != null && d.$$typeof === z
        ? se(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : typeof d != "function"
        ? se(
            "forwardRef requires a render function but was given %s.",
            d === null ? "null" : typeof d
          )
        : d.length !== 0 &&
          d.length !== 2 &&
          se(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            d.length === 1
              ? "Did you forget to use the ref parameter?"
              : "Any additional parameter will be undefined."
          ),
        d != null &&
          (d.defaultProps != null || d.propTypes != null) &&
          se(
            "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
          );
      var S = { $$typeof: A, render: d };
      {
        var w;
        Object.defineProperty(S, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return w;
          },
          set: function (L) {
            (w = L), !d.name && !d.displayName && (d.displayName = L);
          },
        });
      }
      return S;
    }
    var ce;
    ce = Symbol.for("react.module.reference");
    function we(d) {
      return !!(
        typeof d == "string" ||
        typeof d == "function" ||
        d === g ||
        d === x ||
        Me ||
        d === c ||
        d === k ||
        d === F ||
        Ce ||
        d === ne ||
        ct ||
        ke ||
        $t ||
        (typeof d == "object" &&
          d !== null &&
          (d.$$typeof === $ ||
            d.$$typeof === z ||
            d.$$typeof === b ||
            d.$$typeof === C ||
            d.$$typeof === A ||
            d.$$typeof === ce ||
            d.getModuleId !== void 0))
      );
    }
    function $e(d, S) {
      we(d) ||
        se(
          "memo: The first argument must be a component. Instead received: %s",
          d === null ? "null" : typeof d
        );
      var w = { $$typeof: z, type: d, compare: S === void 0 ? null : S };
      {
        var L;
        Object.defineProperty(w, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return L;
          },
          set: function (I) {
            (L = I), !d.name && !d.displayName && (d.displayName = I);
          },
        });
      }
      return w;
    }
    function le() {
      var d = J.current;
      return (
        d === null &&
          se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        d
      );
    }
    function xe(d) {
      var S = le();
      if (d._context !== void 0) {
        var w = d._context;
        w.Consumer === d
          ? se(
              "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
            )
          : w.Provider === d &&
            se(
              "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
            );
      }
      return S.useContext(d);
    }
    function bt(d) {
      var S = le();
      return S.useState(d);
    }
    function nt(d, S, w) {
      var L = le();
      return L.useReducer(d, S, w);
    }
    function Ae(d) {
      var S = le();
      return S.useRef(d);
    }
    function dn(d, S) {
      var w = le();
      return w.useEffect(d, S);
    }
    function Ha(d, S) {
      var w = le();
      return w.useInsertionEffect(d, S);
    }
    function pi(d, S) {
      var w = le();
      return w.useLayoutEffect(d, S);
    }
    function Gn(d, S) {
      var w = le();
      return w.useCallback(d, S);
    }
    function Df(d, S) {
      var w = le();
      return w.useMemo(d, S);
    }
    function _f(d, S, w) {
      var L = le();
      return L.useImperativeHandle(d, S, w);
    }
    function Jo(d, S) {
      {
        var w = le();
        return w.useDebugValue(d, S);
      }
    }
    function Of() {
      var d = le();
      return d.useTransition();
    }
    function nr(d) {
      var S = le();
      return S.useDeferredValue(d);
    }
    function Le() {
      var d = le();
      return d.useId();
    }
    function vi(d, S, w) {
      var L = le();
      return L.useSyncExternalStore(d, S, w);
    }
    var Ar = 0,
      nl,
      al,
      rl,
      il,
      ul,
      ll,
      ol;
    function es() {}
    es.__reactDisabledLog = !0;
    function Mf() {
      {
        if (Ar === 0) {
          (nl = console.log),
            (al = console.info),
            (rl = console.warn),
            (il = console.error),
            (ul = console.group),
            (ll = console.groupCollapsed),
            (ol = console.groupEnd);
          var d = { configurable: !0, enumerable: !0, value: es, writable: !0 };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d,
          });
        }
        Ar++;
      }
    }
    function sl() {
      {
        if ((Ar--, Ar === 0)) {
          var d = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Xe({}, d, { value: nl }),
            info: Xe({}, d, { value: al }),
            warn: Xe({}, d, { value: rl }),
            error: Xe({}, d, { value: il }),
            group: Xe({}, d, { value: ul }),
            groupCollapsed: Xe({}, d, { value: ll }),
            groupEnd: Xe({}, d, { value: ol }),
          });
        }
        Ar < 0 &&
          se(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
      }
    }
    var hi = ot.ReactCurrentDispatcher,
      ca;
    function Lr(d, S, w) {
      {
        if (ca === void 0)
          try {
            throw Error();
          } catch (I) {
            var L = I.stack.trim().match(/\n( *(at )?)/);
            ca = (L && L[1]) || "";
          }
        return (
          `
` +
          ca +
          d
        );
      }
    }
    var kr = !1,
      Ji;
    {
      var cl = typeof WeakMap == "function" ? WeakMap : Map;
      Ji = new cl();
    }
    function ts(d, S) {
      if (!d || kr) return "";
      {
        var w = Ji.get(d);
        if (w !== void 0) return w;
      }
      var L;
      kr = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      (ve = hi.current), (hi.current = null), Mf();
      try {
        if (S) {
          var re = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(re.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(re, []);
            } catch (Ie) {
              L = Ie;
            }
            Reflect.construct(d, [], re);
          } else {
            try {
              re.call();
            } catch (Ie) {
              L = Ie;
            }
            d.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            L = Ie;
          }
          d();
        }
      } catch (Ie) {
        if (Ie && L && typeof Ie.stack == "string") {
          for (
            var me = Ie.stack.split(`
`),
              Ue = L.stack.split(`
`),
              Ze = me.length - 1,
              rt = Ue.length - 1;
            Ze >= 1 && rt >= 0 && me[Ze] !== Ue[rt];

          )
            rt--;
          for (; Ze >= 1 && rt >= 0; Ze--, rt--)
            if (me[Ze] !== Ue[rt]) {
              if (Ze !== 1 || rt !== 1)
                do
                  if ((Ze--, rt--, rt < 0 || me[Ze] !== Ue[rt])) {
                    var it =
                      `
` + me[Ze].replace(" at new ", " at ");
                    return (
                      d.displayName &&
                        it.includes("<anonymous>") &&
                        (it = it.replace("<anonymous>", d.displayName)),
                      typeof d == "function" && Ji.set(d, it),
                      it
                    );
                  }
                while (Ze >= 1 && rt >= 0);
              break;
            }
        }
      } finally {
        (kr = !1), (hi.current = ve), sl(), (Error.prepareStackTrace = I);
      }
      var pt = d ? d.displayName || d.name : "",
        St = pt ? Lr(pt) : "";
      return typeof d == "function" && Ji.set(d, St), St;
    }
    function fl(d, S, w) {
      return ts(d, !1);
    }
    function wf(d) {
      var S = d.prototype;
      return !!(S && S.isReactComponent);
    }
    function Ur(d, S, w) {
      if (d == null) return "";
      if (typeof d == "function") return ts(d, wf(d));
      if (typeof d == "string") return Lr(d);
      switch (d) {
        case k:
          return Lr("Suspense");
        case F:
          return Lr("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case A:
            return fl(d.render);
          case z:
            return Ur(d.type, S, w);
          case $: {
            var L = d,
              I = L._payload,
              ve = L._init;
            try {
              return Ur(ve(I), S, w);
            } catch {}
          }
        }
      return "";
    }
    var ns = {},
      dl = ot.ReactDebugCurrentFrame;
    function eu(d) {
      if (d) {
        var S = d._owner,
          w = Ur(d.type, d._source, S ? S.type : null);
        dl.setExtraStackFrame(w);
      } else dl.setExtraStackFrame(null);
    }
    function as(d, S, w, L, I) {
      {
        var ve = Function.call.bind(ba);
        for (var re in d)
          if (ve(d, re)) {
            var me = void 0;
            try {
              if (typeof d[re] != "function") {
                var Ue = Error(
                  (L || "React class") +
                    ": " +
                    w +
                    " type `" +
                    re +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof d[re] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                throw ((Ue.name = "Invariant Violation"), Ue);
              }
              me = d[re](
                S,
                re,
                L,
                w,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
              );
            } catch (Ze) {
              me = Ze;
            }
            me &&
              !(me instanceof Error) &&
              (eu(I),
              se(
                "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                L || "React class",
                w,
                re,
                typeof me
              ),
              eu(null)),
              me instanceof Error &&
                !(me.message in ns) &&
                ((ns[me.message] = !0),
                eu(I),
                se("Failed %s type: %s", w, me.message),
                eu(null));
          }
      }
    }
    function Ye(d) {
      if (d) {
        var S = d._owner,
          w = Ur(d.type, d._source, S ? S.type : null);
        Ct(w);
      } else Ct(null);
    }
    var pl;
    pl = !1;
    function vl() {
      if (Fe.current) {
        var d = Ln(Fe.current.type);
        if (d)
          return (
            `

Check the render method of \`` +
            d +
            "`."
          );
      }
      return "";
    }
    function Re(d) {
      if (d !== void 0) {
        var S = d.fileName.replace(/^.*[\\\/]/, ""),
          w = d.lineNumber;
        return (
          `

Check your code at ` +
          S +
          ":" +
          w +
          "."
        );
      }
      return "";
    }
    function rs(d) {
      return d != null ? Re(d.__source) : "";
    }
    var pn = {};
    function mi(d) {
      var S = vl();
      if (!S) {
        var w = typeof d == "string" ? d : d.displayName || d.name;
        w &&
          (S =
            `

Check the top-level render call using <` +
            w +
            ">.");
      }
      return S;
    }
    function Nr(d, S) {
      if (!(!d._store || d._store.validated || d.key != null)) {
        d._store.validated = !0;
        var w = mi(S);
        if (!pn[w]) {
          pn[w] = !0;
          var L = "";
          d &&
            d._owner &&
            d._owner !== Fe.current &&
            (L = " It was passed a child from " + Ln(d._owner.type) + "."),
            Ye(d),
            se(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              w,
              L
            ),
            Ye(null);
        }
      }
    }
    function is(d, S) {
      if (typeof d == "object") {
        if (_t(d))
          for (var w = 0; w < d.length; w++) {
            var L = d[w];
            Ke(L) && Nr(L, S);
          }
        else if (Ke(d)) d._store && (d._store.validated = !0);
        else if (d) {
          var I = X(d);
          if (typeof I == "function" && I !== d.entries)
            for (var ve = I.call(d), re; !(re = ve.next()).done; )
              Ke(re.value) && Nr(re.value, S);
        }
      }
    }
    function Pt(d) {
      {
        var S = d.type;
        if (S == null || typeof S == "string") return;
        var w;
        if (typeof S == "function") w = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === A || S.$$typeof === z))
          w = S.propTypes;
        else return;
        if (w) {
          var L = Ln(S);
          as(w, d.props, "prop", L, d);
        } else if (S.PropTypes !== void 0 && !pl) {
          pl = !0;
          var I = Ln(S);
          se(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            I || "Unknown"
          );
        }
        typeof S.getDefaultProps == "function" &&
          !S.getDefaultProps.isReactClassApproved &&
          se(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
          );
      }
    }
    function mt(d) {
      {
        for (var S = Object.keys(d.props), w = 0; w < S.length; w++) {
          var L = S[w];
          if (L !== "children" && L !== "key") {
            Ye(d),
              se(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                L
              ),
              Ye(null);
            break;
          }
        }
        d.ref !== null &&
          (Ye(d),
          se("Invalid attribute `ref` supplied to `React.Fragment`."),
          Ye(null));
      }
    }
    function us(d, S, w) {
      var L = we(d);
      if (!L) {
        var I = "";
        (d === void 0 ||
          (typeof d == "object" &&
            d !== null &&
            Object.keys(d).length === 0)) &&
          (I +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var ve = rs(S);
        ve ? (I += ve) : (I += vl());
        var re;
        d === null
          ? (re = "null")
          : _t(d)
          ? (re = "array")
          : d !== void 0 && d.$$typeof === v
          ? ((re = "<" + (Ln(d.type) || "Unknown") + " />"),
            (I =
              " Did you accidentally export a JSX literal instead of a component?"))
          : (re = typeof d),
          se(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            re,
            I
          );
      }
      var me = ue.apply(this, arguments);
      if (me == null) return me;
      if (L) for (var Ue = 2; Ue < arguments.length; Ue++) is(arguments[Ue], d);
      return d === g ? mt(me) : Pt(me), me;
    }
    var Qn = !1;
    function Un(d) {
      var S = us.bind(null, d);
      return (
        (S.type = d),
        Qn ||
          ((Qn = !0),
          Ge(
            "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
          )),
        Object.defineProperty(S, "type", {
          enumerable: !1,
          get: function () {
            return (
              Ge(
                "Factory.type is deprecated. Access the class directly before passing it to createFactory."
              ),
              Object.defineProperty(this, "type", { value: d }),
              d
            );
          },
        }),
        S
      );
    }
    function Fa(d, S, w) {
      for (var L = We.apply(this, arguments), I = 2; I < arguments.length; I++)
        is(arguments[I], L.type);
      return Pt(L), L;
    }
    function Af(d, S) {
      var w = K.transition;
      K.transition = {};
      var L = K.transition;
      K.transition._updatedFibers = new Set();
      try {
        d();
      } finally {
        if (((K.transition = w), w === null && L._updatedFibers)) {
          var I = L._updatedFibers.size;
          I > 10 &&
            Ge(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ),
            L._updatedFibers.clear();
        }
      }
    }
    var tu = !1,
      yi = null;
    function ls(d) {
      if (yi === null)
        try {
          var S = ("require" + Math.random()).slice(0, 7),
            w = l && l[S];
          yi = w.call(l, "timers").setImmediate;
        } catch {
          yi = function (I) {
            tu === !1 &&
              ((tu = !0),
              typeof MessageChannel > "u" &&
                se(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var ve = new MessageChannel();
            (ve.port1.onmessage = I), ve.port2.postMessage(void 0);
          };
        }
      return yi(d);
    }
    var zr = 0,
      os = !1;
    function Lf(d) {
      {
        var S = zr;
        zr++, Y.current === null && (Y.current = []);
        var w = Y.isBatchingLegacy,
          L;
        try {
          if (
            ((Y.isBatchingLegacy = !0),
            (L = d()),
            !w && Y.didScheduleLegacyUpdate)
          ) {
            var I = Y.current;
            I !== null && ((Y.didScheduleLegacyUpdate = !1), au(I));
          }
        } catch (pt) {
          throw (ar(S), pt);
        } finally {
          Y.isBatchingLegacy = w;
        }
        if (L !== null && typeof L == "object" && typeof L.then == "function") {
          var ve = L,
            re = !1,
            me = {
              then: function (pt, St) {
                (re = !0),
                  ve.then(
                    function (Ie) {
                      ar(S), zr === 0 ? nu(Ie, pt, St) : pt(Ie);
                    },
                    function (Ie) {
                      ar(S), St(Ie);
                    }
                  );
              },
            };
          return (
            !os &&
              typeof Promise < "u" &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  re ||
                    ((os = !0),
                    se(
                      "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                    ));
                }),
            me
          );
        } else {
          var Ue = L;
          if ((ar(S), zr === 0)) {
            var Ze = Y.current;
            Ze !== null && (au(Ze), (Y.current = null));
            var rt = {
              then: function (pt, St) {
                Y.current === null
                  ? ((Y.current = []), nu(Ue, pt, St))
                  : pt(Ue);
              },
            };
            return rt;
          } else {
            var it = {
              then: function (pt, St) {
                pt(Ue);
              },
            };
            return it;
          }
        }
      }
    }
    function ar(d) {
      d !== zr - 1 &&
        se(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ),
        (zr = d);
    }
    function nu(d, S, w) {
      {
        var L = Y.current;
        if (L !== null)
          try {
            au(L),
              ls(function () {
                L.length === 0 ? ((Y.current = null), S(d)) : nu(d, S, w);
              });
          } catch (I) {
            w(I);
          }
        else S(d);
      }
    }
    var Hr = !1;
    function au(d) {
      if (!Hr) {
        Hr = !0;
        var S = 0;
        try {
          for (; S < d.length; S++) {
            var w = d[S];
            do w = w(!0);
            while (w !== null);
          }
          d.length = 0;
        } catch (L) {
          throw ((d = d.slice(S + 1)), L);
        } finally {
          Hr = !1;
        }
      }
    }
    var ss = us,
      cs = Fa,
      fs = Un,
      ds = { map: Sa, forEach: Zi, count: ci, toArray: tl, only: fi };
    (o.Children = ds),
      (o.Component = Wt),
      (o.Fragment = g),
      (o.Profiler = x),
      (o.PureComponent = Kt),
      (o.StrictMode = c),
      (o.Suspense = k),
      (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ot),
      (o.cloneElement = cs),
      (o.createContext = di),
      (o.createElement = ss),
      (o.createFactory = fs),
      (o.createRef = $n),
      (o.forwardRef = G),
      (o.isValidElement = Ke),
      (o.lazy = V),
      (o.memo = $e),
      (o.startTransition = Af),
      (o.unstable_act = Lf),
      (o.useCallback = Gn),
      (o.useContext = xe),
      (o.useDebugValue = Jo),
      (o.useDeferredValue = nr),
      (o.useEffect = dn),
      (o.useId = Le),
      (o.useImperativeHandle = _f),
      (o.useInsertionEffect = Ha),
      (o.useLayoutEffect = pi),
      (o.useMemo = Df),
      (o.useReducer = nt),
      (o.useRef = Ae),
      (o.useState = bt),
      (o.useSyncExternalStore = vi),
      (o.useTransition = Of),
      (o.version = p),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(Fh, Fh.exports);
(function (l) {
  l.exports = Fh.exports;
})(Ef);
const SM = bM(Ef.exports);
var jh = {},
  dE = { exports: {} },
  aa = {},
  pE = { exports: {} },
  vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (l) {
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = !1,
      p = !1,
      v = 5;
    function h(q, ue) {
      var _e = q.length;
      q.push(ue), x(q, ue, _e);
    }
    function g(q) {
      return q.length === 0 ? null : q[0];
    }
    function c(q) {
      if (q.length === 0) return null;
      var ue = q[0],
        _e = q.pop();
      return _e !== ue && ((q[0] = _e), b(q, _e, 0)), ue;
    }
    function x(q, ue, _e) {
      for (var We = _e; We > 0; ) {
        var Ke = (We - 1) >>> 1,
          kt = q[Ke];
        if (C(kt, ue) > 0) (q[Ke] = ue), (q[We] = kt), (We = Ke);
        else return;
      }
    }
    function b(q, ue, _e) {
      for (var We = _e, Ke = q.length, kt = Ke >>> 1; We < kt; ) {
        var Rt = (We + 1) * 2 - 1,
          kn = q[Rt],
          at = Rt + 1,
          qn = q[at];
        if (C(kn, ue) < 0)
          at < Ke && C(qn, kn) < 0
            ? ((q[We] = qn), (q[at] = ue), (We = at))
            : ((q[We] = kn), (q[Rt] = ue), (We = Rt));
        else if (at < Ke && C(qn, ue) < 0)
          (q[We] = qn), (q[at] = ue), (We = at);
        else return;
      }
    }
    function C(q, ue) {
      var _e = q.sortIndex - ue.sortIndex;
      return _e !== 0 ? _e : q.id - ue.id;
    }
    var A = 1,
      k = 2,
      F = 3,
      z = 4,
      $ = 5;
    function ne(q, ue) {}
    var Se =
      typeof performance == "object" && typeof performance.now == "function";
    if (Se) {
      var fe = performance;
      l.unstable_now = function () {
        return fe.now();
      };
    } else {
      var X = Date,
        J = X.now();
      l.unstable_now = function () {
        return X.now() - J;
      };
    }
    var K = 1073741823,
      Y = -1,
      Fe = 250,
      Ee = 5e3,
      Dt = 1e4,
      Ct = K,
      ct = [],
      ke = [],
      $t = 1,
      Ce = null,
      Me = F,
      ot = !1,
      Ge = !1,
      se = !1,
      ht = typeof setTimeout == "function" ? setTimeout : null,
      on = typeof clearTimeout == "function" ? clearTimeout : null,
      sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(q) {
      for (var ue = g(ke); ue !== null; ) {
        if (ue.callback === null) c(ke);
        else if (ue.startTime <= q)
          c(ke), (ue.sortIndex = ue.expirationTime), h(ct, ue);
        else return;
        ue = g(ke);
      }
    }
    function Xe(q) {
      if (((se = !1), Qe(q), !Ge))
        if (g(ct) !== null) (Ge = !0), Pn(gt);
        else {
          var ue = g(ke);
          ue !== null && Tt(Xe, ue.startTime - q);
        }
    }
    function gt(q, ue) {
      (Ge = !1), se && ((se = !1), sa()), (ot = !0);
      var _e = Me;
      try {
        var We;
        if (!p) return Wt(q, ue);
      } finally {
        (Ce = null), (Me = _e), (ot = !1);
      }
    }
    function Wt(q, ue) {
      var _e = ue;
      for (
        Qe(_e), Ce = g(ct);
        Ce !== null && !o && !(Ce.expirationTime > _e && (!q || ua()));

      ) {
        var We = Ce.callback;
        if (typeof We == "function") {
          (Ce.callback = null), (Me = Ce.priorityLevel);
          var Ke = Ce.expirationTime <= _e,
            kt = We(Ke);
          (_e = l.unstable_now()),
            typeof kt == "function"
              ? (Ce.callback = kt)
              : Ce === g(ct) && c(ct),
            Qe(_e);
        } else c(ct);
        Ce = g(ct);
      }
      if (Ce !== null) return !0;
      var Rt = g(ke);
      return Rt !== null && Tt(Xe, Rt.startTime - _e), !1;
    }
    function Mn(q, ue) {
      switch (q) {
        case A:
        case k:
        case F:
        case z:
        case $:
          break;
        default:
          q = F;
      }
      var _e = Me;
      Me = q;
      try {
        return ue();
      } finally {
        Me = _e;
      }
    }
    function wn(q) {
      var ue;
      switch (Me) {
        case A:
        case k:
        case F:
          ue = F;
          break;
        default:
          ue = Me;
          break;
      }
      var _e = Me;
      Me = ue;
      try {
        return q();
      } finally {
        Me = _e;
      }
    }
    function ga(q) {
      var ue = Me;
      return function () {
        var _e = Me;
        Me = ue;
        try {
          return q.apply(this, arguments);
        } finally {
          Me = _e;
        }
      };
    }
    function ia(q, ue, _e) {
      var We = l.unstable_now(),
        Ke;
      if (typeof _e == "object" && _e !== null) {
        var kt = _e.delay;
        typeof kt == "number" && kt > 0 ? (Ke = We + kt) : (Ke = We);
      } else Ke = We;
      var Rt;
      switch (q) {
        case A:
          Rt = Y;
          break;
        case k:
          Rt = Fe;
          break;
        case $:
          Rt = Ct;
          break;
        case z:
          Rt = Dt;
          break;
        case F:
        default:
          Rt = Ee;
          break;
      }
      var kn = Ke + Rt,
        at = {
          id: $t++,
          callback: ue,
          priorityLevel: q,
          startTime: Ke,
          expirationTime: kn,
          sortIndex: -1,
        };
      return (
        Ke > We
          ? ((at.sortIndex = Ke),
            h(ke, at),
            g(ct) === null &&
              at === g(ke) &&
              (se ? sa() : (se = !0), Tt(Xe, Ke - We)))
          : ((at.sortIndex = kn), h(ct, at), !Ge && !ot && ((Ge = !0), Pn(gt))),
        at
      );
    }
    function Kt() {}
    function An() {
      !Ge && !ot && ((Ge = !0), Pn(gt));
    }
    function $n() {
      return g(ct);
    }
    function Yn(q) {
      q.callback = null;
    }
    function _t() {
      return Me;
    }
    var cn = !1,
      Yt = null,
      It = -1,
      Lt = v,
      In = -1;
    function ua() {
      var q = l.unstable_now() - In;
      return !(q < Lt);
    }
    function Ln() {}
    function ba(q) {
      if (q < 0 || q > 125) {
        console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        );
        return;
      }
      q > 0 ? (Lt = Math.floor(1e3 / q)) : (Lt = v);
    }
    var la = function () {
        if (Yt !== null) {
          var q = l.unstable_now();
          In = q;
          var ue = !0,
            _e = !0;
          try {
            _e = Yt(ue, q);
          } finally {
            _e ? En() : ((cn = !1), (Yt = null));
          }
        } else cn = !1;
      },
      En;
    if (typeof sn == "function")
      En = function () {
        sn(la);
      };
    else if (typeof MessageChannel < "u") {
      var oa = new MessageChannel(),
        fn = oa.port2;
      (oa.port1.onmessage = la),
        (En = function () {
          fn.postMessage(null);
        });
    } else
      En = function () {
        ht(la, 0);
      };
    function Pn(q) {
      (Yt = q), cn || ((cn = !0), En());
    }
    function Tt(q, ue) {
      It = ht(function () {
        q(l.unstable_now());
      }, ue);
    }
    function sa() {
      on(It), (It = -1);
    }
    var Ja = Ln,
      er = null;
    (l.unstable_IdlePriority = $),
      (l.unstable_ImmediatePriority = A),
      (l.unstable_LowPriority = z),
      (l.unstable_NormalPriority = F),
      (l.unstable_Profiling = er),
      (l.unstable_UserBlockingPriority = k),
      (l.unstable_cancelCallback = Yn),
      (l.unstable_continueExecution = An),
      (l.unstable_forceFrameRate = ba),
      (l.unstable_getCurrentPriorityLevel = _t),
      (l.unstable_getFirstCallbackNode = $n),
      (l.unstable_next = wn),
      (l.unstable_pauseExecution = Kt),
      (l.unstable_requestPaint = Ja),
      (l.unstable_runWithPriority = Mn),
      (l.unstable_scheduleCallback = ia),
      (l.unstable_shouldYield = ua),
      (l.unstable_wrapCallback = ga),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(vE);
(function (l) {
  l.exports = vE;
})(pE);
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
      "function" &&
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var l = Ef.exports,
    o = pE.exports,
    p = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    v = !1;
  function h(e) {
    v = e;
  }
  function g(e) {
    if (!v) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      x("warn", e, n);
    }
  }
  function c(e) {
    if (!v) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      x("error", e, n);
    }
  }
  function x(e, t, n) {
    {
      var a = p.ReactDebugCurrentFrame,
        r = a.getStackAddendum();
      r !== "" && ((t += "%s"), (n = n.concat([r])));
      var i = n.map(function (u) {
        return String(u);
      });
      i.unshift("Warning: " + t),
        Function.prototype.apply.call(console[e], console, i);
    }
  }
  var b = 0,
    C = 1,
    A = 2,
    k = 3,
    F = 4,
    z = 5,
    $ = 6,
    ne = 7,
    Se = 8,
    fe = 9,
    X = 10,
    J = 11,
    K = 12,
    Y = 13,
    Fe = 14,
    Ee = 15,
    Dt = 16,
    Ct = 17,
    ct = 18,
    ke = 19,
    $t = 21,
    Ce = 22,
    Me = 23,
    ot = 24,
    Ge = 25,
    se = !0,
    ht = !1,
    on = !1,
    sn = !1,
    Qe = !1,
    Xe = !0,
    gt = !1,
    Wt = !1,
    Mn = !0,
    wn = !0,
    ga = !0,
    ia = new Set(),
    Kt = {},
    An = {};
  function $n(e, t) {
    Yn(e, t), Yn(e + "Capture", t);
  }
  function Yn(e, t) {
    Kt[e] &&
      c(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ),
      (Kt[e] = t);
    {
      var n = e.toLowerCase();
      (An[n] = e), e === "onDoubleClick" && (An.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++) ia.add(t[a]);
  }
  var _t =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    cn = Object.prototype.hasOwnProperty;
  function Yt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || "Object";
      return n;
    }
  }
  function It(e) {
    try {
      return Lt(e), !1;
    } catch {
      return !0;
    }
  }
  function Lt(e) {
    return "" + e;
  }
  function In(e, t) {
    if (It(e))
      return (
        c(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
          t,
          Yt(e)
        ),
        Lt(e)
      );
  }
  function ua(e) {
    if (It(e))
      return (
        c(
          "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
          Yt(e)
        ),
        Lt(e)
      );
  }
  function Ln(e, t) {
    if (It(e))
      return (
        c(
          "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
          t,
          Yt(e)
        ),
        Lt(e)
      );
  }
  function ba(e, t) {
    if (It(e))
      return (
        c(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
          t,
          Yt(e)
        ),
        Lt(e)
      );
  }
  function la(e) {
    if (It(e))
      return (
        c(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
          Yt(e)
        ),
        Lt(e)
      );
  }
  function En(e) {
    if (It(e))
      return (
        c(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
          Yt(e)
        ),
        Lt(e)
      );
  }
  var oa = 0,
    fn = 1,
    Pn = 2,
    Tt = 3,
    sa = 4,
    Ja = 5,
    er = 6,
    q =
      ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    ue = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    _e = new RegExp("^[" + q + "][" + ue + "]*$"),
    We = {},
    Ke = {};
  function kt(e) {
    return cn.call(Ke, e)
      ? !0
      : cn.call(We, e)
      ? !1
      : _e.test(e)
      ? ((Ke[e] = !0), !0)
      : ((We[e] = !0), c("Invalid attribute name: `%s`", e), !1);
  }
  function Rt(e, t, n) {
    return t !== null
      ? t.type === oa
      : n
      ? !1
      : e.length > 2 &&
        (e[0] === "o" || e[0] === "O") &&
        (e[1] === "n" || e[1] === "N");
  }
  function kn(e, t, n, a) {
    if (n !== null && n.type === oa) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (a) return !1;
        if (n !== null) return !n.acceptsBooleans;
        var r = e.toLowerCase().slice(0, 5);
        return r !== "data-" && r !== "aria-";
      }
      default:
        return !1;
    }
  }
  function at(e, t, n, a) {
    if (t === null || typeof t > "u" || kn(e, t, n, a)) return !0;
    if (a) return !1;
    if (n !== null)
      switch (n.type) {
        case Tt:
          return !t;
        case sa:
          return t === !1;
        case Ja:
          return isNaN(t);
        case er:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function qn(e) {
    return dt.hasOwnProperty(e) ? dt[e] : null;
  }
  function ft(e, t, n, a, r, i, u) {
    (this.acceptsBooleans = t === Pn || t === Tt || t === sa),
      (this.attributeName = a),
      (this.attributeNamespace = r),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var dt = {},
    Na = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style",
    ];
  Na.forEach(function (e) {
    dt[e] = new ft(e, oa, !1, e, null, !1, !1);
  }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1];
      dt[t] = new ft(t, fn, !1, n, null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      dt[e] = new ft(e, Pn, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      dt[e] = new ft(e, Pn, !1, e, null, !1, !1);
    }),
    [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope",
    ].forEach(function (e) {
      dt[e] = new ft(e, Tt, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      dt[e] = new ft(e, Tt, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      dt[e] = new ft(e, sa, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      dt[e] = new ft(e, er, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      dt[e] = new ft(e, Ja, !1, e.toLowerCase(), null, !1, !1);
    });
  var Sa = /[\-\:]([a-z])/g,
    ci = function (e) {
      return e[1].toUpperCase();
    };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height",
  ].forEach(function (e) {
    var t = e.replace(Sa, ci);
    dt[t] = new ft(t, fn, !1, e, null, !1, !1);
  }),
    [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type",
    ].forEach(function (e) {
      var t = e.replace(Sa, ci);
      dt[t] = new ft(t, fn, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Sa, ci);
      dt[t] = new ft(
        t,
        fn,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      dt[e] = new ft(e, fn, !1, e.toLowerCase(), null, !1, !1);
    });
  var Zi = "xlinkHref";
  (dt[Zi] = new ft(
    "xlinkHref",
    fn,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      dt[e] = new ft(e, fn, !1, e.toLowerCase(), null, !0, !0);
    });
  var tl =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    fi = !1;
  function di(e) {
    !fi &&
      tl.test(e) &&
      ((fi = !0),
      c(
        "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
        JSON.stringify(e)
      ));
  }
  function tr(e, t, n, a) {
    if (a.mustUseProperty) {
      var r = a.propertyName;
      return e[r];
    } else {
      In(n, t), a.sanitizeURL && di("" + n);
      var i = a.attributeName,
        u = null;
      if (a.type === sa) {
        if (e.hasAttribute(i)) {
          var s = e.getAttribute(i);
          return s === "" ? !0 : at(t, n, a, !1) ? s : s === "" + n ? n : s;
        }
      } else if (e.hasAttribute(i)) {
        if (at(t, n, a, !1)) return e.getAttribute(i);
        if (a.type === Tt) return n;
        u = e.getAttribute(i);
      }
      return at(t, n, a, !1) ? (u === null ? n : u) : u === "" + n ? n : u;
    }
  }
  function Mr(e, t, n, a) {
    {
      if (!kt(t)) return;
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
      var r = e.getAttribute(t);
      return In(n, t), r === "" + n ? n : r;
    }
  }
  function wr(e, t, n, a) {
    var r = qn(t);
    if (!Rt(t, r, a)) {
      if ((at(t, n, r, a) && (n = null), a || r === null)) {
        if (kt(t)) {
          var i = t;
          n === null
            ? e.removeAttribute(i)
            : (In(n, t), e.setAttribute(i, "" + n));
        }
        return;
      }
      var u = r.mustUseProperty;
      if (u) {
        var s = r.propertyName;
        if (n === null) {
          var f = r.type;
          e[s] = f === Tt ? !1 : "";
        } else e[s] = n;
        return;
      }
      var m = r.attributeName,
        y = r.attributeNamespace;
      if (n === null) e.removeAttribute(m);
      else {
        var R = r.type,
          T;
        R === Tt || (R === sa && n === !0)
          ? (T = "")
          : (In(n, m), (T = "" + n), r.sanitizeURL && di(T.toString())),
          y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
      }
    }
  }
  var za = Symbol.for("react.element"),
    E = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    ce = Symbol.for("react.profiler"),
    we = Symbol.for("react.provider"),
    $e = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    xe = Symbol.for("react.suspense"),
    bt = Symbol.for("react.suspense_list"),
    nt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    dn = Symbol.for("react.scope"),
    Ha = Symbol.for("react.debug_trace_mode"),
    pi = Symbol.for("react.offscreen"),
    Gn = Symbol.for("react.legacy_hidden"),
    Df = Symbol.for("react.cache"),
    _f = Symbol.for("react.tracing_marker"),
    Jo = Symbol.iterator,
    Of = "@@iterator";
  function nr(e) {
    if (e === null || typeof e != "object") return null;
    var t = (Jo && e[Jo]) || e[Of];
    return typeof t == "function" ? t : null;
  }
  var Le = Object.assign,
    vi = 0,
    Ar,
    nl,
    al,
    rl,
    il,
    ul,
    ll;
  function ol() {}
  ol.__reactDisabledLog = !0;
  function es() {
    {
      if (vi === 0) {
        (Ar = console.log),
          (nl = console.info),
          (al = console.warn),
          (rl = console.error),
          (il = console.group),
          (ul = console.groupCollapsed),
          (ll = console.groupEnd);
        var e = { configurable: !0, enumerable: !0, value: ol, writable: !0 };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e,
        });
      }
      vi++;
    }
  }
  function Mf() {
    {
      if ((vi--, vi === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Le({}, e, { value: Ar }),
          info: Le({}, e, { value: nl }),
          warn: Le({}, e, { value: al }),
          error: Le({}, e, { value: rl }),
          group: Le({}, e, { value: il }),
          groupCollapsed: Le({}, e, { value: ul }),
          groupEnd: Le({}, e, { value: ll }),
        });
      }
      vi < 0 &&
        c(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
  }
  var sl = p.ReactCurrentDispatcher,
    hi;
  function ca(e, t, n) {
    {
      if (hi === void 0)
        try {
          throw Error();
        } catch (r) {
          var a = r.stack.trim().match(/\n( *(at )?)/);
          hi = (a && a[1]) || "";
        }
      return (
        `
` +
        hi +
        e
      );
    }
  }
  var Lr = !1,
    kr;
  {
    var Ji = typeof WeakMap == "function" ? WeakMap : Map;
    kr = new Ji();
  }
  function cl(e, t) {
    if (!e || Lr) return "";
    {
      var n = kr.get(e);
      if (n !== void 0) return n;
    }
    var a;
    Lr = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var i;
    (i = sl.current), (sl.current = null), es();
    try {
      if (t) {
        var u = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(u.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(u, []);
          } catch (M) {
            a = M;
          }
          Reflect.construct(e, [], u);
        } else {
          try {
            u.call();
          } catch (M) {
            a = M;
          }
          e.call(u.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (M) {
          a = M;
        }
        e();
      }
    } catch (M) {
      if (M && a && typeof M.stack == "string") {
        for (
          var s = M.stack.split(`
`),
            f = a.stack.split(`
`),
            m = s.length - 1,
            y = f.length - 1;
          m >= 1 && y >= 0 && s[m] !== f[y];

        )
          y--;
        for (; m >= 1 && y >= 0; m--, y--)
          if (s[m] !== f[y]) {
            if (m !== 1 || y !== 1)
              do
                if ((m--, y--, y < 0 || s[m] !== f[y])) {
                  var R =
                    `
` + s[m].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      R.includes("<anonymous>") &&
                      (R = R.replace("<anonymous>", e.displayName)),
                    typeof e == "function" && kr.set(e, R),
                    R
                  );
                }
              while (m >= 1 && y >= 0);
            break;
          }
      }
    } finally {
      (Lr = !1), (sl.current = i), Mf(), (Error.prepareStackTrace = r);
    }
    var T = e ? e.displayName || e.name : "",
      O = T ? ca(T) : "";
    return typeof e == "function" && kr.set(e, O), O;
  }
  function ts(e, t, n) {
    return cl(e, !0);
  }
  function fl(e, t, n) {
    return cl(e, !1);
  }
  function wf(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ur(e, t, n) {
    if (e == null) return "";
    if (typeof e == "function") return cl(e, wf(e));
    if (typeof e == "string") return ca(e);
    switch (e) {
      case xe:
        return ca("Suspense");
      case bt:
        return ca("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case le:
          return fl(e.render);
        case nt:
          return Ur(e.type, t, n);
        case Ae: {
          var a = e,
            r = a._payload,
            i = a._init;
          try {
            return Ur(i(r), t, n);
          } catch {}
        }
      }
    return "";
  }
  function ns(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case z:
        return ca(e.type);
      case Dt:
        return ca("Lazy");
      case Y:
        return ca("Suspense");
      case ke:
        return ca("SuspenseList");
      case b:
      case A:
      case Ee:
        return fl(e.type);
      case J:
        return fl(e.type.render);
      case C:
        return ts(e.type);
      default:
        return "";
    }
  }
  function dl(e) {
    try {
      var t = "",
        n = e;
      do (t += ns(n)), (n = n.return);
      while (n);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function eu(e, t, n) {
    var a = e.displayName;
    if (a) return a;
    var r = t.displayName || t.name || "";
    return r !== "" ? n + "(" + r + ")" : n;
  }
  function as(e) {
    return e.displayName || "Context";
  }
  function Ye(e) {
    if (e == null) return null;
    if (
      (typeof e.tag == "number" &&
        c(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ),
      typeof e == "function")
    )
      return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case V:
        return "Fragment";
      case E:
        return "Portal";
      case ce:
        return "Profiler";
      case G:
        return "StrictMode";
      case xe:
        return "Suspense";
      case bt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $e:
          var t = e;
          return as(t) + ".Consumer";
        case we:
          var n = e;
          return as(n._context) + ".Provider";
        case le:
          return eu(e, e.render, "ForwardRef");
        case nt:
          var a = e.displayName || null;
          return a !== null ? a : Ye(e.type) || "Memo";
        case Ae: {
          var r = e,
            i = r._payload,
            u = r._init;
          try {
            return Ye(u(i));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function pl(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function vl(e) {
    return e.displayName || "Context";
  }
  function Re(e) {
    var t = e.tag,
      n = e.type;
    switch (t) {
      case ot:
        return "Cache";
      case fe:
        var a = n;
        return vl(a) + ".Consumer";
      case X:
        var r = n;
        return vl(r._context) + ".Provider";
      case ct:
        return "DehydratedFragment";
      case J:
        return pl(n, n.render, "ForwardRef");
      case ne:
        return "Fragment";
      case z:
        return n;
      case F:
        return "Portal";
      case k:
        return "Root";
      case $:
        return "Text";
      case Dt:
        return Ye(n);
      case Se:
        return n === G ? "StrictMode" : "Mode";
      case Ce:
        return "Offscreen";
      case K:
        return "Profiler";
      case $t:
        return "Scope";
      case Y:
        return "Suspense";
      case ke:
        return "SuspenseList";
      case Ge:
        return "TracingMarker";
      case C:
      case b:
      case Ct:
      case A:
      case Fe:
      case Ee:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
        break;
    }
    return null;
  }
  var rs = p.ReactDebugCurrentFrame,
    pn = null,
    mi = !1;
  function Nr() {
    {
      if (pn === null) return null;
      var e = pn._debugOwner;
      if (e !== null && typeof e < "u") return Re(e);
    }
    return null;
  }
  function is() {
    return pn === null ? "" : dl(pn);
  }
  function Pt() {
    (rs.getCurrentStack = null), (pn = null), (mi = !1);
  }
  function mt(e) {
    (rs.getCurrentStack = e === null ? null : is), (pn = e), (mi = !1);
  }
  function us() {
    return pn;
  }
  function Qn(e) {
    mi = e;
  }
  function Un(e) {
    return "" + e;
  }
  function Fa(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return En(e), e;
      default:
        return "";
    }
  }
  var Af = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  };
  function tu(e, t) {
    Af[t.type] ||
      t.onChange ||
      t.onInput ||
      t.readOnly ||
      t.disabled ||
      t.value == null ||
      c(
        "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ),
      t.onChange ||
        t.readOnly ||
        t.disabled ||
        t.checked == null ||
        c(
          "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
        );
  }
  function yi(e) {
    var t = e.type,
      n = e.nodeName;
    return (
      n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    );
  }
  function ls(e) {
    return e._valueTracker;
  }
  function zr(e) {
    e._valueTracker = null;
  }
  function os(e) {
    var t = "";
    return e && (yi(e) ? (t = e.checked ? "true" : "false") : (t = e.value)), t;
  }
  function Lf(e) {
    var t = yi(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    En(e[t]);
    var a = "" + e[t];
    if (
      !(
        e.hasOwnProperty(t) ||
        typeof n > "u" ||
        typeof n.get != "function" ||
        typeof n.set != "function"
      )
    ) {
      var r = n.get,
        i = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (s) {
          En(s), (a = "" + s), i.call(this, s);
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable });
      var u = {
        getValue: function () {
          return a;
        },
        setValue: function (s) {
          En(s), (a = "" + s);
        },
        stopTracking: function () {
          zr(e), delete e[t];
        },
      };
      return u;
    }
  }
  function ar(e) {
    ls(e) || (e._valueTracker = Lf(e));
  }
  function nu(e) {
    if (!e) return !1;
    var t = ls(e);
    if (!t) return !0;
    var n = t.getValue(),
      a = os(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function Hr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var au = !1,
    ss = !1,
    cs = !1,
    fs = !1;
  function ds(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function d(e, t) {
    var n = e,
      a = t.checked,
      r = Le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a != null ? a : n._wrapperState.initialChecked,
      });
    return r;
  }
  function S(e, t) {
    tu("input", t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !ss &&
        (c(
          "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          Nr() || "A component",
          t.type
        ),
        (ss = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !au &&
        (c(
          "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          Nr() || "A component",
          t.type
        ),
        (au = !0));
    var n = e,
      a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Fa(t.value != null ? t.value : a),
      controlled: ds(t),
    };
  }
  function w(e, t) {
    var n = e,
      a = t.checked;
    a != null && wr(n, "checked", a, !1);
  }
  function L(e, t) {
    var n = e;
    {
      var a = ds(t);
      !n._wrapperState.controlled &&
        a &&
        !fs &&
        (c(
          "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
        ),
        (fs = !0)),
        n._wrapperState.controlled &&
          !a &&
          !cs &&
          (c(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
          ),
          (cs = !0));
    }
    w(e, t);
    var r = Fa(t.value),
      i = t.type;
    if (r != null)
      i === "number"
        ? ((r === 0 && n.value === "") || n.value != r) && (n.value = Un(r))
        : n.value !== Un(r) && (n.value = Un(r));
    else if (i === "submit" || i === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? me(n, t.type, r)
      : t.hasOwnProperty("defaultValue") && me(n, t.type, Fa(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked);
  }
  function I(e, t, n) {
    var a = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type,
        i = r === "submit" || r === "reset";
      if (i && (t.value === void 0 || t.value === null)) return;
      var u = Un(a._wrapperState.initialValue);
      n || (u !== a.value && (a.value = u)), (a.defaultValue = u);
    }
    var s = a.name;
    s !== "" && (a.name = ""),
      (a.defaultChecked = !a.defaultChecked),
      (a.defaultChecked = !!a._wrapperState.initialChecked),
      s !== "" && (a.name = s);
  }
  function ve(e, t) {
    var n = e;
    L(n, t), re(n, t);
  }
  function re(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var a = e; a.parentNode; ) a = a.parentNode;
      In(n, "name");
      for (
        var r = a.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
          i = 0;
        i < r.length;
        i++
      ) {
        var u = r[i];
        if (!(u === e || u.form !== e.form)) {
          var s = Zs(u);
          if (!s)
            throw new Error(
              "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
            );
          nu(u), L(u, s);
        }
      }
    }
  }
  function me(e, t, n) {
    (t !== "number" || Hr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = Un(e._wrapperState.initialValue))
        : e.defaultValue !== Un(n) && (e.defaultValue = Un(n)));
  }
  var Ue = !1,
    Ze = !1,
    rt = !1;
  function it(e, t) {
    t.value == null &&
      (typeof t.children == "object" && t.children !== null
        ? l.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == "string" ||
                typeof n == "number" ||
                Ze ||
                ((Ze = !0),
                c(
                  "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                )));
          })
        : t.dangerouslySetInnerHTML != null &&
          (rt ||
            ((rt = !0),
            c(
              "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
            )))),
      t.selected != null &&
        !Ue &&
        (c(
          "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
        ),
        (Ue = !0));
  }
  function pt(e, t) {
    t.value != null && e.setAttribute("value", Un(Fa(t.value)));
  }
  var St = Array.isArray;
  function Ie(e) {
    return St(e);
  }
  var Fr;
  Fr = !1;
  function ru() {
    var e = Nr();
    return e
      ? `

Check the render method of \`` +
          e +
          "`."
      : "";
  }
  var hl = ["value", "defaultValue"];
  function kf(e) {
    {
      tu("select", e);
      for (var t = 0; t < hl.length; t++) {
        var n = hl[t];
        if (e[n] != null) {
          var a = Ie(e[n]);
          e.multiple && !a
            ? c(
                "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                n,
                ru()
              )
            : !e.multiple &&
              a &&
              c(
                "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                n,
                ru()
              );
        }
      }
    }
  }
  function rr(e, t, n, a) {
    var r = e.options;
    if (t) {
      for (var i = n, u = {}, s = 0; s < i.length; s++) u["$" + i[s]] = !0;
      for (var f = 0; f < r.length; f++) {
        var m = u.hasOwnProperty("$" + r[f].value);
        r[f].selected !== m && (r[f].selected = m),
          m && a && (r[f].defaultSelected = !0);
      }
    } else {
      for (var y = Un(Fa(n)), R = null, T = 0; T < r.length; T++) {
        if (r[T].value === y) {
          (r[T].selected = !0), a && (r[T].defaultSelected = !0);
          return;
        }
        R === null && !r[T].disabled && (R = r[T]);
      }
      R !== null && (R.selected = !0);
    }
  }
  function ml(e, t) {
    return Le({}, t, { value: void 0 });
  }
  function yl(e, t) {
    var n = e;
    kf(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Fr &&
        (c(
          "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
        ),
        (Fr = !0));
  }
  function Uf(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null
      ? rr(n, !!t.multiple, a, !1)
      : t.defaultValue != null && rr(n, !!t.multiple, t.defaultValue, !0);
  }
  function rC(e, t) {
    var n = e,
      a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var r = t.value;
    r != null
      ? rr(n, !!t.multiple, r, !1)
      : a !== !!t.multiple &&
        (t.defaultValue != null
          ? rr(n, !!t.multiple, t.defaultValue, !0)
          : rr(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function iC(e, t) {
    var n = e,
      a = t.value;
    a != null && rr(n, !!t.multiple, a, !1);
  }
  var Zh = !1;
  function Nf(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        "`dangerouslySetInnerHTML` does not make sense on <textarea>."
      );
    var a = Le({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: Un(n._wrapperState.initialValue),
    });
    return a;
  }
  function Jh(e, t) {
    var n = e;
    tu("textarea", t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Zh &&
        (c(
          "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          Nr() || "A component"
        ),
        (Zh = !0));
    var a = t.value;
    if (a == null) {
      var r = t.children,
        i = t.defaultValue;
      if (r != null) {
        c(
          "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
        );
        {
          if (i != null)
            throw new Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ie(r)) {
            if (r.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            r = r[0];
          }
          i = r;
        }
      }
      i == null && (i = ""), (a = i);
    }
    n._wrapperState = { initialValue: Fa(a) };
  }
  function em(e, t) {
    var n = e,
      a = Fa(t.value),
      r = Fa(t.defaultValue);
    if (a != null) {
      var i = Un(a);
      i !== n.value && (n.value = i),
        t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
    }
    r != null && (n.defaultValue = Un(r));
  }
  function tm(e, t) {
    var n = e,
      a = n.textContent;
    a === n._wrapperState.initialValue &&
      a !== "" &&
      a !== null &&
      (n.value = a);
  }
  function uC(e, t) {
    em(e, t);
  }
  var ir = "http://www.w3.org/1999/xhtml",
    lC = "http://www.w3.org/1998/Math/MathML",
    zf = "http://www.w3.org/2000/svg";
  function Hf(e) {
    switch (e) {
      case "svg":
        return zf;
      case "math":
        return lC;
      default:
        return ir;
    }
  }
  function Ff(e, t) {
    return e == null || e === ir
      ? Hf(t)
      : e === zf && t === "foreignObject"
      ? ir
      : e;
  }
  var oC = function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, a, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, a, r);
            });
          }
        : e;
    },
    ps,
    nm = oC(function (e, t) {
      if (e.namespaceURI === zf && !("innerHTML" in e)) {
        (ps = ps || document.createElement("div")),
          (ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>");
        for (var n = ps.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }),
    Nn = 1,
    ur = 3,
    Ot = 8,
    lr = 9,
    jf = 11,
    vs = function (e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === ur) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    },
    sC = {
      animation: [
        "animationDelay",
        "animationDirection",
        "animationDuration",
        "animationFillMode",
        "animationIterationCount",
        "animationName",
        "animationPlayState",
        "animationTimingFunction",
      ],
      background: [
        "backgroundAttachment",
        "backgroundClip",
        "backgroundColor",
        "backgroundImage",
        "backgroundOrigin",
        "backgroundPositionX",
        "backgroundPositionY",
        "backgroundRepeat",
        "backgroundSize",
      ],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderTopColor",
        "borderTopStyle",
        "borderTopWidth",
      ],
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth",
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth",
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth",
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor",
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth",
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth",
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius",
      ],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle",
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: [
        "fontFamily",
        "fontFeatureSettings",
        "fontKerning",
        "fontLanguageOverride",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontVariant",
        "fontVariantAlternates",
        "fontVariantCaps",
        "fontVariantEastAsian",
        "fontVariantLigatures",
        "fontVariantNumeric",
        "fontVariantPosition",
        "fontWeight",
        "lineHeight",
      ],
      fontVariant: [
        "fontVariantAlternates",
        "fontVariantCaps",
        "fontVariantEastAsian",
        "fontVariantLigatures",
        "fontVariantNumeric",
        "fontVariantPosition",
      ],
      gap: ["columnGap", "rowGap"],
      grid: [
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows",
      ],
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart",
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows",
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: [
        "maskClip",
        "maskComposite",
        "maskImage",
        "maskMode",
        "maskOrigin",
        "maskPositionX",
        "maskPositionY",
        "maskRepeat",
        "maskSize",
      ],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction",
      ],
      wordWrap: ["overflowWrap"],
    },
    gl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    };
  function cC(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var fC = ["Webkit", "ms", "Moz", "O"];
  Object.keys(gl).forEach(function (e) {
    fC.forEach(function (t) {
      gl[cC(t, e)] = gl[e];
    });
  });
  function Vf(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a
      ? ""
      : !n &&
        typeof t == "number" &&
        t !== 0 &&
        !(gl.hasOwnProperty(e) && gl[e])
      ? t + "px"
      : (ba(t, e), ("" + t).trim());
  }
  var dC = /([A-Z])/g,
    pC = /^ms-/;
  function vC(e) {
    return e.replace(dC, "-$1").toLowerCase().replace(pC, "-ms-");
  }
  var am = function () {};
  {
    var hC = /^(?:webkit|moz|o)[A-Z]/,
      mC = /^-ms-/,
      yC = /-(.)/g,
      rm = /;\s*$/,
      iu = {},
      Bf = {},
      im = !1,
      um = !1,
      gC = function (e) {
        return e.replace(yC, function (t, n) {
          return n.toUpperCase();
        });
      },
      bC = function (e) {
        (iu.hasOwnProperty(e) && iu[e]) ||
          ((iu[e] = !0),
          c(
            "Unsupported style property %s. Did you mean %s?",
            e,
            gC(e.replace(mC, "ms-"))
          ));
      },
      SC = function (e) {
        (iu.hasOwnProperty(e) && iu[e]) ||
          ((iu[e] = !0),
          c(
            "Unsupported vendor-prefixed style property %s. Did you mean %s?",
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ));
      },
      EC = function (e, t) {
        (Bf.hasOwnProperty(t) && Bf[t]) ||
          ((Bf[t] = !0),
          c(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(rm, "")
          ));
      },
      CC = function (e, t) {
        im ||
          ((im = !0),
          c("`NaN` is an invalid value for the `%s` css style property.", e));
      },
      TC = function (e, t) {
        um ||
          ((um = !0),
          c(
            "`Infinity` is an invalid value for the `%s` css style property.",
            e
          ));
      };
    am = function (e, t) {
      e.indexOf("-") > -1 ? bC(e) : hC.test(e) ? SC(e) : rm.test(t) && EC(e, t),
        typeof t == "number" && (isNaN(t) ? CC(e, t) : isFinite(t) || TC(e, t));
    };
  }
  var RC = am;
  function xC(e) {
    {
      var t = "",
        n = "";
      for (var a in e)
        if (!!e.hasOwnProperty(a)) {
          var r = e[a];
          if (r != null) {
            var i = a.indexOf("--") === 0;
            (t += n + (i ? a : vC(a)) + ":"), (t += Vf(a, r, i)), (n = ";");
          }
        }
      return t || null;
    }
  }
  function lm(e, t) {
    var n = e.style;
    for (var a in t)
      if (!!t.hasOwnProperty(a)) {
        var r = a.indexOf("--") === 0;
        r || RC(a, t[a]);
        var i = Vf(a, t[a], r);
        a === "float" && (a = "cssFloat"), r ? n.setProperty(a, i) : (n[a] = i);
      }
  }
  function DC(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function om(e) {
    var t = {};
    for (var n in e)
      for (var a = sC[n] || [n], r = 0; r < a.length; r++) t[a[r]] = n;
    return t;
  }
  function _C(e, t) {
    {
      if (!t) return;
      var n = om(e),
        a = om(t),
        r = {};
      for (var i in n) {
        var u = n[i],
          s = a[i];
        if (s && u !== s) {
          var f = u + "," + s;
          if (r[f]) continue;
          (r[f] = !0),
            c(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              DC(e[u]) ? "Removing" : "Updating",
              u,
              s
            );
        }
      }
    }
  }
  var OC = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    MC = Le({ menuitem: !0 }, OC),
    wC = "__html";
  function $f(e, t) {
    if (!!t) {
      if (MC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(
          e +
            " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
        );
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !(wC in t.dangerouslySetInnerHTML)
        )
          throw new Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
          );
      }
      if (
        (!t.suppressContentEditableWarning &&
          t.contentEditable &&
          t.children != null &&
          c(
            "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
          ),
        t.style != null && typeof t.style != "object")
      )
        throw new Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
    }
  }
  function gi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hs = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan",
    },
    sm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
    },
    uu = {},
    AC = new RegExp("^(aria)-[" + ue + "]*$"),
    LC = new RegExp("^(aria)[A-Z][" + ue + "]*$");
  function kC(e, t) {
    {
      if (cn.call(uu, t) && uu[t]) return !0;
      if (LC.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(),
          a = sm.hasOwnProperty(n) ? n : null;
        if (a == null)
          return (
            c(
              "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
              t
            ),
            (uu[t] = !0),
            !0
          );
        if (t !== a)
          return (
            c("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a),
            (uu[t] = !0),
            !0
          );
      }
      if (AC.test(t)) {
        var r = t.toLowerCase(),
          i = sm.hasOwnProperty(r) ? r : null;
        if (i == null) return (uu[t] = !0), !1;
        if (t !== i)
          return (
            c("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i),
            (uu[t] = !0),
            !0
          );
      }
    }
    return !0;
  }
  function UC(e, t) {
    {
      var n = [];
      for (var a in t) {
        var r = kC(e, a);
        r || n.push(a);
      }
      var i = n
        .map(function (u) {
          return "`" + u + "`";
        })
        .join(", ");
      n.length === 1
        ? c(
            "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
            i,
            e
          )
        : n.length > 1 &&
          c(
            "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
            i,
            e
          );
    }
  }
  function NC(e, t) {
    gi(e, t) || UC(e, t);
  }
  var cm = !1;
  function zC(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select") return;
      t != null &&
        t.value === null &&
        !cm &&
        ((cm = !0),
        e === "select" && t.multiple
          ? c(
              "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
              e
            )
          : c(
              "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
              e
            ));
    }
  }
  var fm = function () {};
  {
    var Cn = {},
      dm = /^on./,
      HC = /^on[^A-Z]/,
      FC = new RegExp("^(aria)-[" + ue + "]*$"),
      jC = new RegExp("^(aria)[A-Z][" + ue + "]*$");
    fm = function (e, t, n, a) {
      if (cn.call(Cn, t) && Cn[t]) return !0;
      var r = t.toLowerCase();
      if (r === "onfocusin" || r === "onfocusout")
        return (
          c(
            "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
          ),
          (Cn[t] = !0),
          !0
        );
      if (a != null) {
        var i = a.registrationNameDependencies,
          u = a.possibleRegistrationNames;
        if (i.hasOwnProperty(t)) return !0;
        var s = u.hasOwnProperty(r) ? u[r] : null;
        if (s != null)
          return (
            c("Invalid event handler property `%s`. Did you mean `%s`?", t, s),
            (Cn[t] = !0),
            !0
          );
        if (dm.test(t))
          return (
            c("Unknown event handler property `%s`. It will be ignored.", t),
            (Cn[t] = !0),
            !0
          );
      } else if (dm.test(t))
        return (
          HC.test(t) &&
            c(
              "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
              t
            ),
          (Cn[t] = !0),
          !0
        );
      if (FC.test(t) || jC.test(t)) return !0;
      if (r === "innerhtml")
        return (
          c(
            "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
          ),
          (Cn[t] = !0),
          !0
        );
      if (r === "aria")
        return (
          c(
            "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
          ),
          (Cn[t] = !0),
          !0
        );
      if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
        return (
          c(
            "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
            typeof n
          ),
          (Cn[t] = !0),
          !0
        );
      if (typeof n == "number" && isNaN(n))
        return (
          c(
            "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
            t
          ),
          (Cn[t] = !0),
          !0
        );
      var f = qn(t),
        m = f !== null && f.type === oa;
      if (hs.hasOwnProperty(r)) {
        var y = hs[r];
        if (y !== t)
          return (
            c("Invalid DOM property `%s`. Did you mean `%s`?", t, y),
            (Cn[t] = !0),
            !0
          );
      } else if (!m && t !== r)
        return (
          c(
            "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
            t,
            r
          ),
          (Cn[t] = !0),
          !0
        );
      return typeof n == "boolean" && kn(t, n, f, !1)
        ? (n
            ? c(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              )
            : c(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ),
          (Cn[t] = !0),
          !0)
        : m
        ? !0
        : kn(t, n, f, !1)
        ? ((Cn[t] = !0), !1)
        : ((n === "false" || n === "true") &&
            f !== null &&
            f.type === Tt &&
            (c(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              n,
              t,
              n === "false"
                ? "The browser will interpret it as a truthy value."
                : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ),
            (Cn[t] = !0)),
          !0);
    };
  }
  var VC = function (e, t, n) {
    {
      var a = [];
      for (var r in t) {
        var i = fm(e, r, t[r], n);
        i || a.push(r);
      }
      var u = a
        .map(function (s) {
          return "`" + s + "`";
        })
        .join(", ");
      a.length === 1
        ? c(
            "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
            u,
            e
          )
        : a.length > 1 &&
          c(
            "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
            u,
            e
          );
    }
  };
  function BC(e, t, n) {
    gi(e, t) || VC(e, t, n);
  }
  var pm = 1,
    Yf = 1 << 1,
    bl = 1 << 2,
    $C = pm | Yf | bl,
    Sl = null;
  function YC(e) {
    Sl !== null &&
      c(
        "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
      ),
      (Sl = e);
  }
  function IC() {
    Sl === null &&
      c(
        "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
      ),
      (Sl = null);
  }
  function PC(e) {
    return e === Sl;
  }
  function If(e) {
    var t = e.target || e.srcElement || window;
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === ur ? t.parentNode : t
    );
  }
  var Pf = null,
    lu = null,
    ou = null;
  function vm(e) {
    var t = qr(e);
    if (!!t) {
      if (typeof Pf != "function")
        throw new Error(
          "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue."
        );
      var n = t.stateNode;
      if (n) {
        var a = Zs(n);
        Pf(t.stateNode, t.type, a);
      }
    }
  }
  function qC(e) {
    Pf = e;
  }
  function hm(e) {
    lu ? (ou ? ou.push(e) : (ou = [e])) : (lu = e);
  }
  function GC() {
    return lu !== null || ou !== null;
  }
  function mm() {
    if (!!lu) {
      var e = lu,
        t = ou;
      if (((lu = null), (ou = null), vm(e), t))
        for (var n = 0; n < t.length; n++) vm(t[n]);
    }
  }
  var ym = function (e, t) {
      return e(t);
    },
    gm = function () {},
    qf = !1;
  function QC() {
    var e = GC();
    e && (gm(), mm());
  }
  function bm(e, t, n) {
    if (qf) return e(t, n);
    qf = !0;
    try {
      return ym(e, t, n);
    } finally {
      (qf = !1), QC();
    }
  }
  function XC(e, t, n) {
    (ym = e), (gm = n);
  }
  function WC(e) {
    return (
      e === "button" || e === "input" || e === "select" || e === "textarea"
    );
  }
  function KC(e, t, n) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        return !!(n.disabled && WC(t));
      default:
        return !1;
    }
  }
  function El(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = Zs(n);
    if (a === null) return null;
    var r = a[t];
    if (KC(t, e.type, a)) return null;
    if (r && typeof r != "function")
      throw new Error(
        "Expected `" +
          t +
          "` listener to be a function, instead got a value of `" +
          typeof r +
          "` type."
      );
    return r;
  }
  var Gf = !1;
  if (_t)
    try {
      var Cl = {};
      Object.defineProperty(Cl, "passive", {
        get: function () {
          Gf = !0;
        },
      }),
        window.addEventListener("test", Cl, Cl),
        window.removeEventListener("test", Cl, Cl);
    } catch {
      Gf = !1;
    }
  function Sm(e, t, n, a, r, i, u, s, f) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (y) {
      this.onError(y);
    }
  }
  var Em = Sm;
  if (
    typeof window < "u" &&
    typeof window.dispatchEvent == "function" &&
    typeof document < "u" &&
    typeof document.createEvent == "function"
  ) {
    var Qf = document.createElement("react");
    Em = function (t, n, a, r, i, u, s, f, m) {
      if (typeof document > "u" || document === null)
        throw new Error(
          "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."
        );
      var y = document.createEvent("Event"),
        R = !1,
        T = !0,
        O = window.event,
        M = Object.getOwnPropertyDescriptor(window, "event");
      function U() {
        Qf.removeEventListener(N, oe, !1),
          typeof window.event < "u" &&
            window.hasOwnProperty("event") &&
            (window.event = O);
      }
      var ee = Array.prototype.slice.call(arguments, 3);
      function oe() {
        (R = !0), U(), n.apply(a, ee), (T = !1);
      }
      var ie,
        He = !1,
        Oe = !1;
      function D(_) {
        if (
          ((ie = _.error),
          (He = !0),
          ie === null && _.colno === 0 && _.lineno === 0 && (Oe = !0),
          _.defaultPrevented && ie != null && typeof ie == "object")
        )
          try {
            ie._suppressLogging = !0;
          } catch {}
      }
      var N = "react-" + (t || "invokeguardedcallback");
      if (
        (window.addEventListener("error", D),
        Qf.addEventListener(N, oe, !1),
        y.initEvent(N, !1, !1),
        Qf.dispatchEvent(y),
        M && Object.defineProperty(window, "event", M),
        R &&
          T &&
          (He
            ? Oe &&
              (ie = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (ie = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(ie)),
        window.removeEventListener("error", D),
        !R)
      )
        return U(), Sm.apply(this, arguments);
    };
  }
  var ZC = Em,
    su = !1,
    ms = null,
    ys = !1,
    Xf = null,
    JC = {
      onError: function (e) {
        (su = !0), (ms = e);
      },
    };
  function Wf(e, t, n, a, r, i, u, s, f) {
    (su = !1), (ms = null), ZC.apply(JC, arguments);
  }
  function e0(e, t, n, a, r, i, u, s, f) {
    if ((Wf.apply(this, arguments), su)) {
      var m = Kf();
      ys || ((ys = !0), (Xf = m));
    }
  }
  function t0() {
    if (ys) {
      var e = Xf;
      throw ((ys = !1), (Xf = null), e);
    }
  }
  function n0() {
    return su;
  }
  function Kf() {
    if (su) {
      var e = ms;
      return (su = !1), (ms = null), e;
    } else
      throw new Error(
        "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  function cu(e) {
    return e._reactInternals;
  }
  function a0(e) {
    return e._reactInternals !== void 0;
  }
  function r0(e, t) {
    e._reactInternals = t;
  }
  var de = 0,
    fu = 1,
    Mt = 2,
    je = 4,
    bi = 16,
    Tl = 32,
    Zf = 64,
    Pe = 128,
    or = 256,
    jr = 512,
    Si = 1024,
    Ea = 2048,
    sr = 4096,
    Ei = 8192,
    gs = 16384,
    i0 = Ea | je | Zf | jr | Si | gs,
    u0 = 32767,
    Rl = 32768,
    Tn = 65536,
    Jf = 131072,
    Cm = 1048576,
    ed = 2097152,
    Ci = 4194304,
    td = 8388608,
    cr = 16777216,
    bs = 33554432,
    nd = je | Si | 0,
    ad = Mt | je | bi | Tl | jr | sr | Ei,
    xl = je | Zf | jr | Ei,
    du = Ea | bi,
    fr = Ci | td | ed,
    l0 = p.ReactCurrentOwner;
  function Ti(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      var a = t;
      do
        (t = a), (t.flags & (Mt | sr)) !== de && (n = t.return), (a = t.return);
      while (a);
    }
    return t.tag === k ? n : null;
  }
  function Tm(e) {
    if (e.tag === Y) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null) return t.dehydrated;
    }
    return null;
  }
  function Rm(e) {
    return e.tag === k ? e.stateNode.containerInfo : null;
  }
  function o0(e) {
    return Ti(e) === e;
  }
  function s0(e) {
    {
      var t = l0.current;
      if (t !== null && t.tag === C) {
        var n = t,
          a = n.stateNode;
        a._warnedAboutRefsInRender ||
          c(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            Re(n) || "A component"
          ),
          (a._warnedAboutRefsInRender = !0);
      }
    }
    var r = cu(e);
    return r ? Ti(r) === r : !1;
  }
  function xm(e) {
    if (Ti(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function Dm(e) {
    var t = e.alternate;
    if (!t) {
      var n = Ti(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        var s = i.return;
        if (s !== null) {
          a = r = s;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (var f = i.child; f; ) {
          if (f === a) return xm(i), e;
          if (f === r) return xm(i), t;
          f = f.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== r.return) (a = i), (r = u);
      else {
        for (var m = !1, y = i.child; y; ) {
          if (y === a) {
            (m = !0), (a = i), (r = u);
            break;
          }
          if (y === r) {
            (m = !0), (r = i), (a = u);
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = u.child; y; ) {
            if (y === a) {
              (m = !0), (a = u), (r = i);
              break;
            }
            if (y === r) {
              (m = !0), (r = u), (a = i);
              break;
            }
            y = y.sibling;
          }
          if (!m)
            throw new Error(
              "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
            );
        }
      }
      if (a.alternate !== r)
        throw new Error(
          "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
        );
    }
    if (a.tag !== k)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function _m(e) {
    var t = Dm(e);
    return t !== null ? Om(t) : null;
  }
  function Om(e) {
    if (e.tag === z || e.tag === $) return e;
    for (var t = e.child; t !== null; ) {
      var n = Om(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  function c0(e) {
    var t = Dm(e);
    return t !== null ? Mm(t) : null;
  }
  function Mm(e) {
    if (e.tag === z || e.tag === $) return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== F) {
        var n = Mm(t);
        if (n !== null) return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var wm = o.unstable_scheduleCallback,
    f0 = o.unstable_cancelCallback,
    d0 = o.unstable_shouldYield,
    p0 = o.unstable_requestPaint,
    qt = o.unstable_now,
    v0 = o.unstable_getCurrentPriorityLevel,
    Ss = o.unstable_ImmediatePriority,
    rd = o.unstable_UserBlockingPriority,
    Ri = o.unstable_NormalPriority,
    h0 = o.unstable_LowPriority,
    id = o.unstable_IdlePriority,
    m0 = o.unstable_yieldValue,
    y0 = o.unstable_setDisableYieldValue,
    pu = null,
    vn = null,
    W = null,
    ja = !1,
    Ca = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function g0(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled) return !0;
    if (!t.supportsFiber)
      return (
        c(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"
        ),
        !0
      );
    try {
      Mn && (e = Le({}, e, { getLaneLabelMap: R0, injectProfilingHooks: T0 })),
        (pu = t.inject(e)),
        (vn = t);
    } catch (n) {
      c("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function b0(e, t) {
    if (vn && typeof vn.onScheduleFiberRoot == "function")
      try {
        vn.onScheduleFiberRoot(pu, e, t);
      } catch (n) {
        ja ||
          ((ja = !0), c("React instrumentation encountered an error: %s", n));
      }
  }
  function S0(e, t) {
    if (vn && typeof vn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Pe) === Pe;
        if (wn) {
          var a;
          switch (t) {
            case Kn:
              a = Ss;
              break;
            case pr:
              a = rd;
              break;
            case vr:
              a = Ri;
              break;
            case _s:
              a = id;
              break;
            default:
              a = Ri;
              break;
          }
          vn.onCommitFiberRoot(pu, e, a, n);
        }
      } catch (r) {
        ja ||
          ((ja = !0), c("React instrumentation encountered an error: %s", r));
      }
  }
  function E0(e) {
    if (vn && typeof vn.onPostCommitFiberRoot == "function")
      try {
        vn.onPostCommitFiberRoot(pu, e);
      } catch (t) {
        ja ||
          ((ja = !0), c("React instrumentation encountered an error: %s", t));
      }
  }
  function C0(e) {
    if (vn && typeof vn.onCommitFiberUnmount == "function")
      try {
        vn.onCommitFiberUnmount(pu, e);
      } catch (t) {
        ja ||
          ((ja = !0), c("React instrumentation encountered an error: %s", t));
      }
  }
  function Gt(e) {
    if (
      (typeof m0 == "function" && (y0(e), h(e)),
      vn && typeof vn.setStrictMode == "function")
    )
      try {
        vn.setStrictMode(pu, e);
      } catch (t) {
        ja ||
          ((ja = !0), c("React instrumentation encountered an error: %s", t));
      }
  }
  function T0(e) {
    W = e;
  }
  function R0() {
    {
      for (var e = new Map(), t = 1, n = 0; n < ld; n++) {
        var a = I0(t);
        e.set(t, a), (t *= 2);
      }
      return e;
    }
  }
  function x0(e) {
    W !== null &&
      typeof W.markCommitStarted == "function" &&
      W.markCommitStarted(e);
  }
  function Am() {
    W !== null &&
      typeof W.markCommitStopped == "function" &&
      W.markCommitStopped();
  }
  function Dl(e) {
    W !== null &&
      typeof W.markComponentRenderStarted == "function" &&
      W.markComponentRenderStarted(e);
  }
  function vu() {
    W !== null &&
      typeof W.markComponentRenderStopped == "function" &&
      W.markComponentRenderStopped();
  }
  function D0(e) {
    W !== null &&
      typeof W.markComponentPassiveEffectMountStarted == "function" &&
      W.markComponentPassiveEffectMountStarted(e);
  }
  function _0() {
    W !== null &&
      typeof W.markComponentPassiveEffectMountStopped == "function" &&
      W.markComponentPassiveEffectMountStopped();
  }
  function O0(e) {
    W !== null &&
      typeof W.markComponentPassiveEffectUnmountStarted == "function" &&
      W.markComponentPassiveEffectUnmountStarted(e);
  }
  function M0() {
    W !== null &&
      typeof W.markComponentPassiveEffectUnmountStopped == "function" &&
      W.markComponentPassiveEffectUnmountStopped();
  }
  function w0(e) {
    W !== null &&
      typeof W.markComponentLayoutEffectMountStarted == "function" &&
      W.markComponentLayoutEffectMountStarted(e);
  }
  function A0() {
    W !== null &&
      typeof W.markComponentLayoutEffectMountStopped == "function" &&
      W.markComponentLayoutEffectMountStopped();
  }
  function Lm(e) {
    W !== null &&
      typeof W.markComponentLayoutEffectUnmountStarted == "function" &&
      W.markComponentLayoutEffectUnmountStarted(e);
  }
  function km() {
    W !== null &&
      typeof W.markComponentLayoutEffectUnmountStopped == "function" &&
      W.markComponentLayoutEffectUnmountStopped();
  }
  function L0(e, t, n) {
    W !== null &&
      typeof W.markComponentErrored == "function" &&
      W.markComponentErrored(e, t, n);
  }
  function k0(e, t, n) {
    W !== null &&
      typeof W.markComponentSuspended == "function" &&
      W.markComponentSuspended(e, t, n);
  }
  function U0(e) {
    W !== null &&
      typeof W.markLayoutEffectsStarted == "function" &&
      W.markLayoutEffectsStarted(e);
  }
  function N0() {
    W !== null &&
      typeof W.markLayoutEffectsStopped == "function" &&
      W.markLayoutEffectsStopped();
  }
  function z0(e) {
    W !== null &&
      typeof W.markPassiveEffectsStarted == "function" &&
      W.markPassiveEffectsStarted(e);
  }
  function H0() {
    W !== null &&
      typeof W.markPassiveEffectsStopped == "function" &&
      W.markPassiveEffectsStopped();
  }
  function Um(e) {
    W !== null &&
      typeof W.markRenderStarted == "function" &&
      W.markRenderStarted(e);
  }
  function F0() {
    W !== null &&
      typeof W.markRenderYielded == "function" &&
      W.markRenderYielded();
  }
  function Nm() {
    W !== null &&
      typeof W.markRenderStopped == "function" &&
      W.markRenderStopped();
  }
  function j0(e) {
    W !== null &&
      typeof W.markRenderScheduled == "function" &&
      W.markRenderScheduled(e);
  }
  function V0(e, t) {
    W !== null &&
      typeof W.markForceUpdateScheduled == "function" &&
      W.markForceUpdateScheduled(e, t);
  }
  function ud(e, t) {
    W !== null &&
      typeof W.markStateUpdateScheduled == "function" &&
      W.markStateUpdateScheduled(e, t);
  }
  var pe = 0,
    Ne = 1,
    Je = 2,
    wt = 8,
    Va = 16,
    zm = Math.clz32 ? Math.clz32 : Y0,
    B0 = Math.log,
    $0 = Math.LN2;
  function Y0(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : (31 - ((B0(t) / $0) | 0)) | 0;
  }
  var ld = 31,
    j = 0,
    Qt = 0,
    ye = 1,
    hu = 2,
    dr = 4,
    xi = 8,
    Ba = 16,
    _l = 32,
    mu = 4194240,
    Ol = 64,
    od = 128,
    sd = 256,
    cd = 512,
    fd = 1024,
    dd = 2048,
    pd = 4096,
    vd = 8192,
    hd = 16384,
    md = 32768,
    yd = 65536,
    gd = 131072,
    bd = 262144,
    Sd = 524288,
    Ed = 1048576,
    Cd = 2097152,
    Es = 130023424,
    yu = 4194304,
    Td = 8388608,
    Rd = 16777216,
    xd = 33554432,
    Dd = 67108864,
    Hm = yu,
    Ml = 134217728,
    Fm = 268435455,
    wl = 268435456,
    Di = 536870912,
    Xn = 1073741824;
  function I0(e) {
    {
      if (e & ye) return "Sync";
      if (e & hu) return "InputContinuousHydration";
      if (e & dr) return "InputContinuous";
      if (e & xi) return "DefaultHydration";
      if (e & Ba) return "Default";
      if (e & _l) return "TransitionHydration";
      if (e & mu) return "Transition";
      if (e & Es) return "Retry";
      if (e & Ml) return "SelectiveHydration";
      if (e & wl) return "IdleHydration";
      if (e & Di) return "Idle";
      if (e & Xn) return "Offscreen";
    }
  }
  var st = -1,
    Cs = Ol,
    Ts = yu;
  function Al(e) {
    switch (_i(e)) {
      case ye:
        return ye;
      case hu:
        return hu;
      case dr:
        return dr;
      case xi:
        return xi;
      case Ba:
        return Ba;
      case _l:
        return _l;
      case Ol:
      case od:
      case sd:
      case cd:
      case fd:
      case dd:
      case pd:
      case vd:
      case hd:
      case md:
      case yd:
      case gd:
      case bd:
      case Sd:
      case Ed:
      case Cd:
        return e & mu;
      case yu:
      case Td:
      case Rd:
      case xd:
      case Dd:
        return e & Es;
      case Ml:
        return Ml;
      case wl:
        return wl;
      case Di:
        return Di;
      case Xn:
        return Xn;
      default:
        return (
          c("Should have found matching lanes. This is a bug in React."), e
        );
    }
  }
  function Rs(e, t) {
    var n = e.pendingLanes;
    if (n === j) return j;
    var a = j,
      r = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & Fm;
    if (u !== j) {
      var s = u & ~r;
      if (s !== j) a = Al(s);
      else {
        var f = u & i;
        f !== j && (a = Al(f));
      }
    } else {
      var m = n & ~r;
      m !== j ? (a = Al(m)) : i !== j && (a = Al(i));
    }
    if (a === j) return j;
    if (t !== j && t !== a && (t & r) === j) {
      var y = _i(a),
        R = _i(t);
      if (y >= R || (y === Ba && (R & mu) !== j)) return t;
    }
    (a & dr) !== j && (a |= n & Ba);
    var T = e.entangledLanes;
    if (T !== j)
      for (var O = e.entanglements, M = a & T; M > 0; ) {
        var U = Oi(M),
          ee = 1 << U;
        (a |= O[U]), (M &= ~ee);
      }
    return a;
  }
  function P0(e, t) {
    for (var n = e.eventTimes, a = st; t > 0; ) {
      var r = Oi(t),
        i = 1 << r,
        u = n[r];
      u > a && (a = u), (t &= ~i);
    }
    return a;
  }
  function q0(e, t) {
    switch (e) {
      case ye:
      case hu:
      case dr:
        return t + 250;
      case xi:
      case Ba:
      case _l:
      case Ol:
      case od:
      case sd:
      case cd:
      case fd:
      case dd:
      case pd:
      case vd:
      case hd:
      case md:
      case yd:
      case gd:
      case bd:
      case Sd:
      case Ed:
      case Cd:
        return t + 5e3;
      case yu:
      case Td:
      case Rd:
      case xd:
      case Dd:
        return st;
      case Ml:
      case wl:
      case Di:
      case Xn:
        return st;
      default:
        return (
          c("Should have found matching lanes. This is a bug in React."), st
        );
    }
  }
  function G0(e, t) {
    for (
      var n = e.pendingLanes,
        a = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        u = n;
      u > 0;

    ) {
      var s = Oi(u),
        f = 1 << s,
        m = i[s];
      m === st
        ? ((f & a) === j || (f & r) !== j) && (i[s] = q0(f, t))
        : m <= t && (e.expiredLanes |= f),
        (u &= ~f);
    }
  }
  function Q0(e) {
    return Al(e.pendingLanes);
  }
  function _d(e) {
    var t = e.pendingLanes & ~Xn;
    return t !== j ? t : t & Xn ? Xn : j;
  }
  function X0(e) {
    return (e & ye) !== j;
  }
  function Od(e) {
    return (e & Fm) !== j;
  }
  function jm(e) {
    return (e & Es) === e;
  }
  function W0(e) {
    var t = ye | dr | Ba;
    return (e & t) === j;
  }
  function K0(e) {
    return (e & mu) === e;
  }
  function xs(e, t) {
    var n = hu | dr | xi | Ba;
    return (t & n) !== j;
  }
  function Z0(e, t) {
    return (t & e.expiredLanes) !== j;
  }
  function Vm(e) {
    return (e & mu) !== j;
  }
  function Bm() {
    var e = Cs;
    return (Cs <<= 1), (Cs & mu) === j && (Cs = Ol), e;
  }
  function J0() {
    var e = Ts;
    return (Ts <<= 1), (Ts & Es) === j && (Ts = yu), e;
  }
  function _i(e) {
    return e & -e;
  }
  function Ll(e) {
    return _i(e);
  }
  function Oi(e) {
    return 31 - zm(e);
  }
  function Md(e) {
    return Oi(e);
  }
  function Wn(e, t) {
    return (e & t) !== j;
  }
  function gu(e, t) {
    return (e & t) === t;
  }
  function De(e, t) {
    return e | t;
  }
  function Ds(e, t) {
    return e & ~t;
  }
  function $m(e, t) {
    return e & t;
  }
  function iA(e) {
    return e;
  }
  function eT(e, t) {
    return e !== Qt && e < t ? e : t;
  }
  function wd(e) {
    for (var t = [], n = 0; n < ld; n++) t.push(e);
    return t;
  }
  function kl(e, t, n) {
    (e.pendingLanes |= t),
      t !== Di && ((e.suspendedLanes = j), (e.pingedLanes = j));
    var a = e.eventTimes,
      r = Md(t);
    a[r] = n;
  }
  function tT(e, t) {
    (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var r = Oi(a),
        i = 1 << r;
      (n[r] = st), (a &= ~i);
    }
  }
  function Ym(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function nT(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = j),
      (e.pingedLanes = j),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t);
    for (
      var a = e.entanglements, r = e.eventTimes, i = e.expirationTimes, u = n;
      u > 0;

    ) {
      var s = Oi(u),
        f = 1 << s;
      (a[s] = j), (r[s] = st), (i[s] = st), (u &= ~f);
    }
  }
  function Ad(e, t) {
    for (var n = (e.entangledLanes |= t), a = e.entanglements, r = n; r; ) {
      var i = Oi(r),
        u = 1 << i;
      (u & t) | (a[i] & t) && (a[i] |= t), (r &= ~u);
    }
  }
  function aT(e, t) {
    var n = _i(t),
      a;
    switch (n) {
      case dr:
        a = hu;
        break;
      case Ba:
        a = xi;
        break;
      case Ol:
      case od:
      case sd:
      case cd:
      case fd:
      case dd:
      case pd:
      case vd:
      case hd:
      case md:
      case yd:
      case gd:
      case bd:
      case Sd:
      case Ed:
      case Cd:
      case yu:
      case Td:
      case Rd:
      case xd:
      case Dd:
        a = _l;
        break;
      case Di:
        a = wl;
        break;
      default:
        a = Qt;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== Qt ? Qt : a;
  }
  function Im(e, t, n) {
    if (!!Ca)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var r = Md(n),
          i = 1 << r,
          u = a[r];
        u.add(t), (n &= ~i);
      }
  }
  function Pm(e, t) {
    if (!!Ca)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var r = Md(t),
          i = 1 << r,
          u = n[r];
        u.size > 0 &&
          (u.forEach(function (s) {
            var f = s.alternate;
            (f === null || !a.has(f)) && a.add(s);
          }),
          u.clear()),
          (t &= ~i);
      }
  }
  function qm(e, t) {
    return null;
  }
  var Kn = ye,
    pr = dr,
    vr = Ba,
    _s = Di,
    Ul = Qt;
  function Ta() {
    return Ul;
  }
  function Xt(e) {
    Ul = e;
  }
  function rT(e, t) {
    var n = Ul;
    try {
      return (Ul = e), t();
    } finally {
      Ul = n;
    }
  }
  function iT(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function uT(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function Ld(e, t) {
    return e !== 0 && e < t;
  }
  function Gm(e) {
    var t = _i(e);
    return Ld(Kn, t) ? (Ld(pr, t) ? (Od(t) ? vr : _s) : pr) : Kn;
  }
  function Os(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var Qm;
  function lT(e) {
    Qm = e;
  }
  function oT(e) {
    Qm(e);
  }
  var kd;
  function sT(e) {
    kd = e;
  }
  var Xm;
  function cT(e) {
    Xm = e;
  }
  var Wm;
  function fT(e) {
    Wm = e;
  }
  var Km;
  function dT(e) {
    Km = e;
  }
  var Ud = !1,
    Ms = [],
    Vr = null,
    Br = null,
    $r = null,
    Nl = new Map(),
    zl = new Map(),
    Yr = [],
    pT = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit",
    ];
  function vT(e) {
    return pT.indexOf(e) > -1;
  }
  function hT(e, t, n, a, r) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [a],
    };
  }
  function Zm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vr = null;
        break;
      case "dragenter":
      case "dragleave":
        Br = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        Nl.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        zl.delete(a);
        break;
      }
    }
  }
  function Hl(e, t, n, a, r, i) {
    if (e === null || e.nativeEvent !== i) {
      var u = hT(t, n, a, r, i);
      if (t !== null) {
        var s = qr(t);
        s !== null && kd(s);
      }
      return u;
    }
    e.eventSystemFlags |= a;
    var f = e.targetContainers;
    return r !== null && f.indexOf(r) === -1 && f.push(r), e;
  }
  function mT(e, t, n, a, r) {
    switch (t) {
      case "focusin": {
        var i = r;
        return (Vr = Hl(Vr, e, t, n, a, i)), !0;
      }
      case "dragenter": {
        var u = r;
        return (Br = Hl(Br, e, t, n, a, u)), !0;
      }
      case "mouseover": {
        var s = r;
        return ($r = Hl($r, e, t, n, a, s)), !0;
      }
      case "pointerover": {
        var f = r,
          m = f.pointerId;
        return Nl.set(m, Hl(Nl.get(m) || null, e, t, n, a, f)), !0;
      }
      case "gotpointercapture": {
        var y = r,
          R = y.pointerId;
        return zl.set(R, Hl(zl.get(R) || null, e, t, n, a, y)), !0;
      }
    }
    return !1;
  }
  function Jm(e) {
    var t = Ai(e.target);
    if (t !== null) {
      var n = Ti(t);
      if (n !== null) {
        var a = n.tag;
        if (a === Y) {
          var r = Tm(n);
          if (r !== null) {
            (e.blockedOn = r),
              Km(e.priority, function () {
                Xm(n);
              });
            return;
          }
        } else if (a === k) {
          var i = n.stateNode;
          if (Os(i)) {
            e.blockedOn = Rm(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function yT(e) {
    for (
      var t = Wm(), n = { blockedOn: null, target: e, priority: t }, a = 0;
      a < Yr.length && Ld(t, Yr[a].priority);
      a++
    );
    Yr.splice(a, 0, n), a === 0 && Jm(n);
  }
  function ws(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        a = Hd(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var r = e.nativeEvent,
          i = new r.constructor(r.type, r);
        YC(i), r.target.dispatchEvent(i), IC();
      } else {
        var u = qr(a);
        return u !== null && kd(u), (e.blockedOn = a), !1;
      }
      t.shift();
    }
    return !0;
  }
  function ey(e, t, n) {
    ws(e) && n.delete(t);
  }
  function gT() {
    (Ud = !1),
      Vr !== null && ws(Vr) && (Vr = null),
      Br !== null && ws(Br) && (Br = null),
      $r !== null && ws($r) && ($r = null),
      Nl.forEach(ey),
      zl.forEach(ey);
  }
  function Fl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ud ||
        ((Ud = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, gT)));
  }
  function jl(e) {
    if (Ms.length > 0) {
      Fl(Ms[0], e);
      for (var t = 1; t < Ms.length; t++) {
        var n = Ms[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Vr !== null && Fl(Vr, e),
      Br !== null && Fl(Br, e),
      $r !== null && Fl($r, e);
    var a = function (s) {
      return Fl(s, e);
    };
    Nl.forEach(a), zl.forEach(a);
    for (var r = 0; r < Yr.length; r++) {
      var i = Yr[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; Yr.length > 0; ) {
      var u = Yr[0];
      if (u.blockedOn !== null) break;
      Jm(u), u.blockedOn === null && Yr.shift();
    }
  }
  var bu = p.ReactCurrentBatchConfig,
    Nd = !0;
  function ty(e) {
    Nd = !!e;
  }
  function bT() {
    return Nd;
  }
  function ST(e, t, n) {
    var a = ny(t),
      r;
    switch (a) {
      case Kn:
        r = ET;
        break;
      case pr:
        r = CT;
        break;
      case vr:
      default:
        r = zd;
        break;
    }
    return r.bind(null, t, n, e);
  }
  function ET(e, t, n, a) {
    var r = Ta(),
      i = bu.transition;
    bu.transition = null;
    try {
      Xt(Kn), zd(e, t, n, a);
    } finally {
      Xt(r), (bu.transition = i);
    }
  }
  function CT(e, t, n, a) {
    var r = Ta(),
      i = bu.transition;
    bu.transition = null;
    try {
      Xt(pr), zd(e, t, n, a);
    } finally {
      Xt(r), (bu.transition = i);
    }
  }
  function zd(e, t, n, a) {
    !Nd || TT(e, t, n, a);
  }
  function TT(e, t, n, a) {
    var r = Hd(e, t, n, a);
    if (r === null) {
      Kd(e, t, a, As, n), Zm(e, a);
      return;
    }
    if (mT(r, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if ((Zm(e, a), t & bl && vT(e))) {
      for (; r !== null; ) {
        var i = qr(r);
        i !== null && oT(i);
        var u = Hd(e, t, n, a);
        if ((u === null && Kd(e, t, a, As, n), u === r)) break;
        r = u;
      }
      r !== null && a.stopPropagation();
      return;
    }
    Kd(e, t, a, null, n);
  }
  var As = null;
  function Hd(e, t, n, a) {
    As = null;
    var r = If(a),
      i = Ai(r);
    if (i !== null) {
      var u = Ti(i);
      if (u === null) i = null;
      else {
        var s = u.tag;
        if (s === Y) {
          var f = Tm(u);
          if (f !== null) return f;
          i = null;
        } else if (s === k) {
          var m = u.stateNode;
          if (Os(m)) return Rm(u);
          i = null;
        } else u !== i && (i = null);
      }
    }
    return (As = i), null;
  }
  function ny(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return Kn;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return pr;
      case "message": {
        var t = v0();
        switch (t) {
          case Ss:
            return Kn;
          case rd:
            return pr;
          case Ri:
          case h0:
            return vr;
          case id:
            return _s;
          default:
            return vr;
        }
      }
      default:
        return vr;
    }
  }
  function RT(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function xT(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function DT(e, t, n, a) {
    return e.addEventListener(t, n, { capture: !0, passive: a }), n;
  }
  function _T(e, t, n, a) {
    return e.addEventListener(t, n, { passive: a }), n;
  }
  var Vl = null,
    Fd = null,
    Bl = null;
  function OT(e) {
    return (Vl = e), (Fd = ry()), !0;
  }
  function MT() {
    (Vl = null), (Fd = null), (Bl = null);
  }
  function ay() {
    if (Bl) return Bl;
    var e,
      t = Fd,
      n = t.length,
      a,
      r = ry(),
      i = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++);
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === r[i - a]; a++);
    var s = a > 1 ? 1 - a : void 0;
    return (Bl = r.slice(e, s)), Bl;
  }
  function ry() {
    return "value" in Vl ? Vl.value : Vl.textContent;
  }
  function Ls(e) {
    var t,
      n = e.keyCode;
    return (
      "charCode" in e
        ? ((t = e.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      t >= 32 || t === 13 ? t : 0
    );
  }
  function ks() {
    return !0;
  }
  function iy() {
    return !1;
  }
  function Zn(e) {
    function t(n, a, r, i, u) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var s in e)
        if (!!e.hasOwnProperty(s)) {
          var f = e[s];
          f ? (this[s] = f(i)) : (this[s] = i[s]);
        }
      var m =
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
      return (
        m ? (this.isDefaultPrevented = ks) : (this.isDefaultPrevented = iy),
        (this.isPropagationStopped = iy),
        this
      );
    }
    return (
      Le(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          !n ||
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ks));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          !n ||
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ks));
        },
        persist: function () {},
        isPersistent: ks,
      }),
      t
    );
  }
  var Su = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    jd = Zn(Su),
    $l = Le({}, Su, { view: 0, detail: 0 }),
    wT = Zn($l),
    Vd,
    Bd,
    Yl;
  function AT(e) {
    e !== Yl &&
      (Yl && e.type === "mousemove"
        ? ((Vd = e.screenX - Yl.screenX), (Bd = e.screenY - Yl.screenY))
        : ((Vd = 0), (Bd = 0)),
      (Yl = e));
  }
  var Us = Le({}, $l, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e ? e.movementX : (AT(e), Vd);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Bd;
      },
    }),
    uy = Zn(Us),
    LT = Le({}, Us, { dataTransfer: 0 }),
    kT = Zn(LT),
    UT = Le({}, $l, { relatedTarget: 0 }),
    $d = Zn(UT),
    NT = Le({}, Su, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zT = Zn(NT),
    HT = Le({}, Su, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    FT = Zn(HT),
    jT = Le({}, Su, { data: 0 }),
    ly = Zn(jT),
    VT = ly,
    BT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $T = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    };
  function YT(e) {
    if (e.key) {
      var t = BT[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    if (e.type === "keypress") {
      var n = Ls(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup"
      ? $T[e.keyCode] || "Unidentified"
      : "";
  }
  var IT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
  function PT(e) {
    var t = this,
      n = t.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var a = IT[e];
    return a ? !!n[a] : !1;
  }
  function Yd(e) {
    return PT;
  }
  var qT = Le({}, $l, {
      key: YT,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      charCode: function (e) {
        return e.type === "keypress" ? Ls(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ls(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    GT = Zn(qT),
    QT = Le({}, Us, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    oy = Zn(QT),
    XT = Le({}, $l, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd,
    }),
    WT = Zn(XT),
    KT = Le({}, Su, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ZT = Zn(KT),
    JT = Le({}, Us, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    eR = Zn(JT),
    tR = [9, 13, 27, 32],
    sy = 229,
    Id = _t && "CompositionEvent" in window,
    Il = null;
  _t && "documentMode" in document && (Il = document.documentMode);
  var nR = _t && "TextEvent" in window && !Il,
    cy = _t && (!Id || (Il && Il > 8 && Il <= 11)),
    fy = 32,
    dy = String.fromCharCode(fy);
  function aR() {
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      $n("onCompositionEnd", [
        "compositionend",
        "focusout",
        "keydown",
        "keypress",
        "keyup",
        "mousedown",
      ]),
      $n("onCompositionStart", [
        "compositionstart",
        "focusout",
        "keydown",
        "keypress",
        "keyup",
        "mousedown",
      ]),
      $n("onCompositionUpdate", [
        "compositionupdate",
        "focusout",
        "keydown",
        "keypress",
        "keyup",
        "mousedown",
      ]);
  }
  var py = !1;
  function rR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function iR(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function uR(e, t) {
    return e === "keydown" && t.keyCode === sy;
  }
  function vy(e, t) {
    switch (e) {
      case "keyup":
        return tR.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== sy;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hy(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function my(e) {
    return e.locale === "ko";
  }
  var Eu = !1;
  function lR(e, t, n, a, r) {
    var i, u;
    if (
      (Id
        ? (i = iR(t))
        : Eu
        ? vy(t, a) && (i = "onCompositionEnd")
        : uR(t, a) && (i = "onCompositionStart"),
      !i)
    )
      return null;
    cy &&
      !my(a) &&
      (!Eu && i === "onCompositionStart"
        ? (Eu = OT(r))
        : i === "onCompositionEnd" && Eu && (u = ay()));
    var s = js(n, i);
    if (s.length > 0) {
      var f = new ly(i, t, null, a, r);
      if ((e.push({ event: f, listeners: s }), u)) f.data = u;
      else {
        var m = hy(a);
        m !== null && (f.data = m);
      }
    }
  }
  function oR(e, t) {
    switch (e) {
      case "compositionend":
        return hy(t);
      case "keypress":
        var n = t.which;
        return n !== fy ? null : ((py = !0), dy);
      case "textInput":
        var a = t.data;
        return a === dy && py ? null : a;
      default:
        return null;
    }
  }
  function sR(e, t) {
    if (Eu) {
      if (e === "compositionend" || (!Id && vy(e, t))) {
        var n = ay();
        return MT(), (Eu = !1), n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!rR(t)) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cy && !my(t) ? null : t.data;
      default:
        return null;
    }
  }
  function cR(e, t, n, a, r) {
    var i;
    if ((nR ? (i = oR(t, a)) : (i = sR(t, a)), !i)) return null;
    var u = js(n, "onBeforeInput");
    if (u.length > 0) {
      var s = new VT("onBeforeInput", "beforeinput", null, a, r);
      e.push({ event: s, listeners: u }), (s.data = i);
    }
  }
  function fR(e, t, n, a, r, i, u) {
    lR(e, t, n, a, r), cR(e, t, n, a, r);
  }
  var dR = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function yy(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dR[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */ function pR(e) {
    if (!_t) return !1;
    var t = "on" + e,
      n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), (n = typeof a[t] == "function");
    }
    return n;
  }
  function vR() {
    $n("onChange", [
      "change",
      "click",
      "focusin",
      "focusout",
      "input",
      "keydown",
      "keyup",
      "selectionchange",
    ]);
  }
  function gy(e, t, n, a) {
    hm(a);
    var r = js(t, "onChange");
    if (r.length > 0) {
      var i = new jd("onChange", "change", null, n, a);
      e.push({ event: i, listeners: r });
    }
  }
  var Pl = null,
    ql = null;
  function hR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || (t === "input" && e.type === "file");
  }
  function mR(e) {
    var t = [];
    gy(t, ql, e, If(e)), bm(yR, t);
  }
  function yR(e) {
    zy(e, 0);
  }
  function Ns(e) {
    var t = _u(e);
    if (nu(t)) return e;
  }
  function gR(e, t) {
    if (e === "change") return t;
  }
  var by = !1;
  _t &&
    (by = pR("input") && (!document.documentMode || document.documentMode > 9));
  function bR(e, t) {
    (Pl = e), (ql = t), Pl.attachEvent("onpropertychange", Ey);
  }
  function Sy() {
    !Pl || (Pl.detachEvent("onpropertychange", Ey), (Pl = null), (ql = null));
  }
  function Ey(e) {
    e.propertyName === "value" && Ns(ql) && mR(e);
  }
  function SR(e, t, n) {
    e === "focusin" ? (Sy(), bR(t, n)) : e === "focusout" && Sy();
  }
  function ER(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ns(ql);
  }
  function CR(e) {
    var t = e.nodeName;
    return (
      t &&
      t.toLowerCase() === "input" &&
      (e.type === "checkbox" || e.type === "radio")
    );
  }
  function TR(e, t) {
    if (e === "click") return Ns(t);
  }
  function RR(e, t) {
    if (e === "input" || e === "change") return Ns(t);
  }
  function xR(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || me(e, "number", e.value);
  }
  function DR(e, t, n, a, r, i, u) {
    var s = n ? _u(n) : window,
      f,
      m;
    if (
      (hR(s)
        ? (f = gR)
        : yy(s)
        ? by
          ? (f = RR)
          : ((f = ER), (m = SR))
        : CR(s) && (f = TR),
      f)
    ) {
      var y = f(t, n);
      if (y) {
        gy(e, y, a, r);
        return;
      }
    }
    m && m(t, s, n), t === "focusout" && xR(s);
  }
  function _R() {
    Yn("onMouseEnter", ["mouseout", "mouseover"]),
      Yn("onMouseLeave", ["mouseout", "mouseover"]),
      Yn("onPointerEnter", ["pointerout", "pointerover"]),
      Yn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function OR(e, t, n, a, r, i, u) {
    var s = t === "mouseover" || t === "pointerover",
      f = t === "mouseout" || t === "pointerout";
    if (s && !PC(a)) {
      var m = a.relatedTarget || a.fromElement;
      if (m && (Ai(m) || lo(m))) return;
    }
    if (!(!f && !s)) {
      var y;
      if (r.window === r) y = r;
      else {
        var R = r.ownerDocument;
        R ? (y = R.defaultView || R.parentWindow) : (y = window);
      }
      var T, O;
      if (f) {
        var M = a.relatedTarget || a.toElement;
        if (((T = n), (O = M ? Ai(M) : null), O !== null)) {
          var U = Ti(O);
          (O !== U || (O.tag !== z && O.tag !== $)) && (O = null);
        }
      } else (T = null), (O = n);
      if (T !== O) {
        var ee = uy,
          oe = "onMouseLeave",
          ie = "onMouseEnter",
          He = "mouse";
        (t === "pointerout" || t === "pointerover") &&
          ((ee = oy),
          (oe = "onPointerLeave"),
          (ie = "onPointerEnter"),
          (He = "pointer"));
        var Oe = T == null ? y : _u(T),
          D = O == null ? y : _u(O),
          N = new ee(oe, He + "leave", T, a, r);
        (N.target = Oe), (N.relatedTarget = D);
        var _ = null,
          B = Ai(r);
        if (B === n) {
          var te = new ee(ie, He + "enter", O, a, r);
          (te.target = D), (te.relatedTarget = Oe), (_ = te);
        }
        ZR(e, N, _, T, O);
      }
    }
  }
  function MR(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Jn = typeof Object.is == "function" ? Object.is : MR;
  function Gl(e, t) {
    if (Jn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      if (!cn.call(t, i) || !Jn(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Cy(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wR(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function Ty(e, t) {
    for (var n = Cy(e), a = 0, r = 0; n; ) {
      if (n.nodeType === ur) {
        if (((r = a + n.textContent.length), a <= t && r >= t))
          return { node: n, offset: t - a };
        a = r;
      }
      n = Cy(wR(n));
    }
  }
  function AR(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0) return null;
    var r = a.anchorNode,
      i = a.anchorOffset,
      u = a.focusNode,
      s = a.focusOffset;
    try {
      r.nodeType, u.nodeType;
    } catch {
      return null;
    }
    return LR(e, r, i, u, s);
  }
  function LR(e, t, n, a, r) {
    var i = 0,
      u = -1,
      s = -1,
      f = 0,
      m = 0,
      y = e,
      R = null;
    e: for (;;) {
      for (
        var T = null;
        y === t && (n === 0 || y.nodeType === ur) && (u = i + n),
          y === a && (r === 0 || y.nodeType === ur) && (s = i + r),
          y.nodeType === ur && (i += y.nodeValue.length),
          (T = y.firstChild) !== null;

      )
        (R = y), (y = T);
      for (;;) {
        if (y === e) break e;
        if (
          (R === t && ++f === n && (u = i),
          R === a && ++m === r && (s = i),
          (T = y.nextSibling) !== null)
        )
          break;
        (y = R), (R = y.parentNode);
      }
      y = T;
    }
    return u === -1 || s === -1 ? null : { start: u, end: s };
  }
  function kR(e, t) {
    var n = e.ownerDocument || document,
      a = (n && n.defaultView) || window;
    if (!!a.getSelection) {
      var r = a.getSelection(),
        i = e.textContent.length,
        u = Math.min(t.start, i),
        s = t.end === void 0 ? u : Math.min(t.end, i);
      if (!r.extend && u > s) {
        var f = s;
        (s = u), (u = f);
      }
      var m = Ty(e, u),
        y = Ty(e, s);
      if (m && y) {
        if (
          r.rangeCount === 1 &&
          r.anchorNode === m.node &&
          r.anchorOffset === m.offset &&
          r.focusNode === y.node &&
          r.focusOffset === y.offset
        )
          return;
        var R = n.createRange();
        R.setStart(m.node, m.offset),
          r.removeAllRanges(),
          u > s
            ? (r.addRange(R), r.extend(y.node, y.offset))
            : (R.setEnd(y.node, y.offset), r.addRange(R));
      }
    }
  }
  function Ry(e) {
    return e && e.nodeType === ur;
  }
  function xy(e, t) {
    return !e || !t
      ? !1
      : e === t
      ? !0
      : Ry(e)
      ? !1
      : Ry(t)
      ? xy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1;
  }
  function UR(e) {
    return e && e.ownerDocument && xy(e.ownerDocument.documentElement, e);
  }
  function NR(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function Dy() {
    for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
      if (NR(t)) e = t.contentWindow;
      else return t;
      t = Hr(e.document);
    }
    return t;
  }
  function Pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function zR() {
    var e = Dy();
    return { focusedElem: e, selectionRange: Pd(e) ? FR(e) : null };
  }
  function HR(e) {
    var t = Dy(),
      n = e.focusedElem,
      a = e.selectionRange;
    if (t !== n && UR(n)) {
      a !== null && Pd(n) && jR(n, a);
      for (var r = [], i = n; (i = i.parentNode); )
        i.nodeType === Nn &&
          r.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      typeof n.focus == "function" && n.focus();
      for (var u = 0; u < r.length; u++) {
        var s = r[u];
        (s.element.scrollLeft = s.left), (s.element.scrollTop = s.top);
      }
    }
  }
  function FR(e) {
    var t;
    return (
      "selectionStart" in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = AR(e)),
      t || { start: 0, end: 0 }
    );
  }
  function jR(e, t) {
    var n = t.start,
      a = t.end;
    a === void 0 && (a = n),
      "selectionStart" in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(a, e.value.length)))
        : kR(e, t);
  }
  var VR = _t && "documentMode" in document && document.documentMode <= 11;
  function BR() {
    $n("onSelect", [
      "focusout",
      "contextmenu",
      "dragend",
      "focusin",
      "keydown",
      "keyup",
      "mousedown",
      "mouseup",
      "selectionchange",
    ]);
  }
  var Cu = null,
    qd = null,
    Ql = null,
    Gd = !1;
  function $R(e) {
    if ("selectionStart" in e && Pd(e))
      return { start: e.selectionStart, end: e.selectionEnd };
    var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
      n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset,
    };
  }
  function YR(e) {
    return e.window === e
      ? e.document
      : e.nodeType === lr
      ? e
      : e.ownerDocument;
  }
  function _y(e, t, n) {
    var a = YR(n);
    if (!(Gd || Cu == null || Cu !== Hr(a))) {
      var r = $R(Cu);
      if (!Ql || !Gl(Ql, r)) {
        Ql = r;
        var i = js(qd, "onSelect");
        if (i.length > 0) {
          var u = new jd("onSelect", "select", null, t, n);
          e.push({ event: u, listeners: i }), (u.target = Cu);
        }
      }
    }
  }
  function IR(e, t, n, a, r, i, u) {
    var s = n ? _u(n) : window;
    switch (t) {
      case "focusin":
        (yy(s) || s.contentEditable === "true") &&
          ((Cu = s), (qd = n), (Ql = null));
        break;
      case "focusout":
        (Cu = null), (qd = null), (Ql = null);
        break;
      case "mousedown":
        Gd = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        (Gd = !1), _y(e, a, r);
        break;
      case "selectionchange":
        if (VR) break;
      case "keydown":
      case "keyup":
        _y(e, a, r);
    }
  }
  function zs(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Tu = {
      animationend: zs("Animation", "AnimationEnd"),
      animationiteration: zs("Animation", "AnimationIteration"),
      animationstart: zs("Animation", "AnimationStart"),
      transitionend: zs("Transition", "TransitionEnd"),
    },
    Qd = {},
    Oy = {};
  _t &&
    ((Oy = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Tu.animationend.animation,
      delete Tu.animationiteration.animation,
      delete Tu.animationstart.animation),
    "TransitionEvent" in window || delete Tu.transitionend.transition);
  function Hs(e) {
    if (Qd[e]) return Qd[e];
    if (!Tu[e]) return e;
    var t = Tu[e];
    for (var n in t) if (t.hasOwnProperty(n) && n in Oy) return (Qd[e] = t[n]);
    return e;
  }
  var My = Hs("animationend"),
    wy = Hs("animationiteration"),
    Ay = Hs("animationstart"),
    Ly = Hs("transitionend"),
    ky = new Map(),
    Uy = [
      "abort",
      "auxClick",
      "cancel",
      "canPlay",
      "canPlayThrough",
      "click",
      "close",
      "contextMenu",
      "copy",
      "cut",
      "drag",
      "dragEnd",
      "dragEnter",
      "dragExit",
      "dragLeave",
      "dragOver",
      "dragStart",
      "drop",
      "durationChange",
      "emptied",
      "encrypted",
      "ended",
      "error",
      "gotPointerCapture",
      "input",
      "invalid",
      "keyDown",
      "keyPress",
      "keyUp",
      "load",
      "loadedData",
      "loadedMetadata",
      "loadStart",
      "lostPointerCapture",
      "mouseDown",
      "mouseMove",
      "mouseOut",
      "mouseOver",
      "mouseUp",
      "paste",
      "pause",
      "play",
      "playing",
      "pointerCancel",
      "pointerDown",
      "pointerMove",
      "pointerOut",
      "pointerOver",
      "pointerUp",
      "progress",
      "rateChange",
      "reset",
      "resize",
      "seeked",
      "seeking",
      "stalled",
      "submit",
      "suspend",
      "timeUpdate",
      "touchCancel",
      "touchEnd",
      "touchStart",
      "volumeChange",
      "scroll",
      "toggle",
      "touchMove",
      "waiting",
      "wheel",
    ];
  function Ir(e, t) {
    ky.set(e, t), $n(t, [e]);
  }
  function PR() {
    for (var e = 0; e < Uy.length; e++) {
      var t = Uy[e],
        n = t.toLowerCase(),
        a = t[0].toUpperCase() + t.slice(1);
      Ir(n, "on" + a);
    }
    Ir(My, "onAnimationEnd"),
      Ir(wy, "onAnimationIteration"),
      Ir(Ay, "onAnimationStart"),
      Ir("dblclick", "onDoubleClick"),
      Ir("focusin", "onFocus"),
      Ir("focusout", "onBlur"),
      Ir(Ly, "onTransitionEnd");
  }
  function qR(e, t, n, a, r, i, u) {
    var s = ky.get(t);
    if (s !== void 0) {
      var f = jd,
        m = t;
      switch (t) {
        case "keypress":
          if (Ls(a) === 0) return;
        case "keydown":
        case "keyup":
          f = GT;
          break;
        case "focusin":
          (m = "focus"), (f = $d);
          break;
        case "focusout":
          (m = "blur"), (f = $d);
          break;
        case "beforeblur":
        case "afterblur":
          f = $d;
          break;
        case "click":
          if (a.button === 2) return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          f = uy;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          f = kT;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          f = WT;
          break;
        case My:
        case wy:
        case Ay:
          f = zT;
          break;
        case Ly:
          f = ZT;
          break;
        case "scroll":
          f = wT;
          break;
        case "wheel":
          f = eR;
          break;
        case "copy":
        case "cut":
        case "paste":
          f = FT;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          f = oy;
          break;
      }
      var y = (i & bl) !== 0;
      {
        var R = !y && t === "scroll",
          T = WR(n, s, a.type, y, R);
        if (T.length > 0) {
          var O = new f(s, m, null, a, r);
          e.push({ event: O, listeners: T });
        }
      }
    }
  }
  PR(), _R(), vR(), BR(), aR();
  function GR(e, t, n, a, r, i, u) {
    qR(e, t, n, a, r, i);
    var s = (i & $C) === 0;
    s &&
      (OR(e, t, n, a, r),
      DR(e, t, n, a, r),
      IR(e, t, n, a, r),
      fR(e, t, n, a, r));
  }
  var Xl = [
      "abort",
      "canplay",
      "canplaythrough",
      "durationchange",
      "emptied",
      "encrypted",
      "ended",
      "error",
      "loadeddata",
      "loadedmetadata",
      "loadstart",
      "pause",
      "play",
      "playing",
      "progress",
      "ratechange",
      "resize",
      "seeked",
      "seeking",
      "stalled",
      "suspend",
      "timeupdate",
      "volumechange",
      "waiting",
    ],
    Xd = new Set(
      ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xl)
    );
  function Ny(e, t, n) {
    var a = e.type || "unknown-event";
    (e.currentTarget = n), e0(a, t, void 0, e), (e.currentTarget = null);
  }
  function QR(e, t, n) {
    var a;
    if (n)
      for (var r = t.length - 1; r >= 0; r--) {
        var i = t[r],
          u = i.instance,
          s = i.currentTarget,
          f = i.listener;
        if (u !== a && e.isPropagationStopped()) return;
        Ny(e, f, s), (a = u);
      }
    else
      for (var m = 0; m < t.length; m++) {
        var y = t[m],
          R = y.instance,
          T = y.currentTarget,
          O = y.listener;
        if (R !== a && e.isPropagationStopped()) return;
        Ny(e, O, T), (a = R);
      }
  }
  function zy(e, t) {
    for (var n = (t & bl) !== 0, a = 0; a < e.length; a++) {
      var r = e[a],
        i = r.event,
        u = r.listeners;
      QR(i, u, n);
    }
    t0();
  }
  function XR(e, t, n, a, r) {
    var i = If(n),
      u = [];
    GR(u, e, a, n, i, t), zy(u, t);
  }
  function vt(e, t) {
    Xd.has(e) ||
      c(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
    var n = !1,
      a = xD(t),
      r = JR(e, n);
    a.has(r) || (Hy(t, e, Yf, n), a.add(r));
  }
  function Wd(e, t, n) {
    Xd.has(e) &&
      !t &&
      c(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
    var a = 0;
    t && (a |= bl), Hy(n, e, a, t);
  }
  var Fs = "_reactListening" + Math.random().toString(36).slice(2);
  function Wl(e) {
    if (!e[Fs]) {
      (e[Fs] = !0),
        ia.forEach(function (n) {
          n !== "selectionchange" && (Xd.has(n) || Wd(n, !1, e), Wd(n, !0, e));
        });
      var t = e.nodeType === lr ? e : e.ownerDocument;
      t !== null && (t[Fs] || ((t[Fs] = !0), Wd("selectionchange", !1, t)));
    }
  }
  function Hy(e, t, n, a, r) {
    var i = ST(e, t, n),
      u = void 0;
    Gf &&
      (t === "touchstart" || t === "touchmove" || t === "wheel") &&
      (u = !0),
      (e = e),
      a
        ? u !== void 0
          ? DT(e, t, i, u)
          : xT(e, t, i)
        : u !== void 0
        ? _T(e, t, i, u)
        : RT(e, t, i);
  }
  function Fy(e, t) {
    return e === t || (e.nodeType === Ot && e.parentNode === t);
  }
  function Kd(e, t, n, a, r) {
    var i = a;
    if ((t & pm) === 0 && (t & Yf) === 0) {
      var u = r;
      if (a !== null) {
        var s = a;
        e: for (;;) {
          if (s === null) return;
          var f = s.tag;
          if (f === k || f === F) {
            var m = s.stateNode.containerInfo;
            if (Fy(m, u)) break;
            if (f === F)
              for (var y = s.return; y !== null; ) {
                var R = y.tag;
                if (R === k || R === F) {
                  var T = y.stateNode.containerInfo;
                  if (Fy(T, u)) return;
                }
                y = y.return;
              }
            for (; m !== null; ) {
              var O = Ai(m);
              if (O === null) return;
              var M = O.tag;
              if (M === z || M === $) {
                s = i = O;
                continue e;
              }
              m = m.parentNode;
            }
          }
          s = s.return;
        }
      }
    }
    bm(function () {
      return XR(e, t, n, i);
    });
  }
  function Kl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function WR(e, t, n, a, r, i) {
    for (
      var u = t !== null ? t + "Capture" : null,
        s = a ? u : t,
        f = [],
        m = e,
        y = null;
      m !== null;

    ) {
      var R = m,
        T = R.stateNode,
        O = R.tag;
      if (O === z && T !== null && ((y = T), s !== null)) {
        var M = El(m, s);
        M != null && f.push(Kl(m, M, y));
      }
      if (r) break;
      m = m.return;
    }
    return f;
  }
  function js(e, t) {
    for (var n = t + "Capture", a = [], r = e; r !== null; ) {
      var i = r,
        u = i.stateNode,
        s = i.tag;
      if (s === z && u !== null) {
        var f = u,
          m = El(r, n);
        m != null && a.unshift(Kl(r, m, f));
        var y = El(r, t);
        y != null && a.push(Kl(r, y, f));
      }
      r = r.return;
    }
    return a;
  }
  function Ru(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== z);
    return e || null;
  }
  function KR(e, t) {
    for (var n = e, a = t, r = 0, i = n; i; i = Ru(i)) r++;
    for (var u = 0, s = a; s; s = Ru(s)) u++;
    for (; r - u > 0; ) (n = Ru(n)), r--;
    for (; u - r > 0; ) (a = Ru(a)), u--;
    for (var f = r; f--; ) {
      if (n === a || (a !== null && n === a.alternate)) return n;
      (n = Ru(n)), (a = Ru(a));
    }
    return null;
  }
  function jy(e, t, n, a, r) {
    for (var i = t._reactName, u = [], s = n; s !== null && s !== a; ) {
      var f = s,
        m = f.alternate,
        y = f.stateNode,
        R = f.tag;
      if (m !== null && m === a) break;
      if (R === z && y !== null) {
        var T = y;
        if (r) {
          var O = El(s, i);
          O != null && u.unshift(Kl(s, O, T));
        } else if (!r) {
          var M = El(s, i);
          M != null && u.push(Kl(s, M, T));
        }
      }
      s = s.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  function ZR(e, t, n, a, r) {
    var i = a && r ? KR(a, r) : null;
    a !== null && jy(e, t, a, i, !1),
      r !== null && n !== null && jy(e, n, r, i, !0);
  }
  function JR(e, t) {
    return e + "__" + (t ? "capture" : "bubble");
  }
  var zn = !1,
    Zl = "dangerouslySetInnerHTML",
    Vs = "suppressContentEditableWarning",
    Pr = "suppressHydrationWarning",
    Vy = "autoFocus",
    Mi = "children",
    wi = "style",
    Bs = "__html",
    Zd,
    $s,
    Jl,
    By,
    Ys,
    $y,
    Yy;
  (Zd = { dialog: !0, webview: !0 }),
    ($s = function (e, t) {
      NC(e, t),
        zC(e, t),
        BC(e, t, {
          registrationNameDependencies: Kt,
          possibleRegistrationNames: An,
        });
    }),
    ($y = _t && !document.documentMode),
    (Jl = function (e, t, n) {
      if (!zn) {
        var a = Is(n),
          r = Is(t);
        r !== a &&
          ((zn = !0),
          c(
            "Prop `%s` did not match. Server: %s Client: %s",
            e,
            JSON.stringify(r),
            JSON.stringify(a)
          ));
      }
    }),
    (By = function (e) {
      if (!zn) {
        zn = !0;
        var t = [];
        e.forEach(function (n) {
          t.push(n);
        }),
          c("Extra attributes from the server: %s", t);
      }
    }),
    (Ys = function (e, t) {
      t === !1
        ? c(
            "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
            e,
            e,
            e
          )
        : c(
            "Expected `%s` listener to be a function, instead got a value of `%s` type.",
            e,
            typeof t
          );
    }),
    (Yy = function (e, t) {
      var n =
        e.namespaceURI === ir
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return (n.innerHTML = t), n.innerHTML;
    });
  var ex = /\r\n?/g,
    tx = /\u0000|\uFFFD/g;
  function Is(e) {
    la(e);
    var t = typeof e == "string" ? e : "" + e;
    return t
      .replace(
        ex,
        `
`
      )
      .replace(tx, "");
  }
  function Ps(e, t, n, a) {
    var r = Is(t),
      i = Is(e);
    if (
      i !== r &&
      (a &&
        (zn ||
          ((zn = !0),
          c('Text content did not match. Server: "%s" Client: "%s"', i, r))),
      n && se)
    )
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function Iy(e) {
    return e.nodeType === lr ? e : e.ownerDocument;
  }
  function nx() {}
  function qs(e) {
    e.onclick = nx;
  }
  function ax(e, t, n, a, r) {
    for (var i in a)
      if (!!a.hasOwnProperty(i)) {
        var u = a[i];
        if (i === wi) u && Object.freeze(u), lm(t, u);
        else if (i === Zl) {
          var s = u ? u[Bs] : void 0;
          s != null && nm(t, s);
        } else if (i === Mi)
          if (typeof u == "string") {
            var f = e !== "textarea" || u !== "";
            f && vs(t, u);
          } else typeof u == "number" && vs(t, "" + u);
        else
          i === Vs ||
            i === Pr ||
            i === Vy ||
            (Kt.hasOwnProperty(i)
              ? u != null &&
                (typeof u != "function" && Ys(i, u),
                i === "onScroll" && vt("scroll", t))
              : u != null && wr(t, i, u, r));
      }
  }
  function rx(e, t, n, a) {
    for (var r = 0; r < t.length; r += 2) {
      var i = t[r],
        u = t[r + 1];
      i === wi
        ? lm(e, u)
        : i === Zl
        ? nm(e, u)
        : i === Mi
        ? vs(e, u)
        : wr(e, i, u, a);
    }
  }
  function ix(e, t, n, a) {
    var r,
      i = Iy(n),
      u,
      s = a;
    if ((s === ir && (s = Hf(e)), s === ir)) {
      if (
        ((r = gi(e, t)),
        !r &&
          e !== e.toLowerCase() &&
          c(
            "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
            e
          ),
        e === "script")
      ) {
        var f = i.createElement("div");
        f.innerHTML = "<script></script>";
        var m = f.firstChild;
        u = f.removeChild(m);
      } else if (typeof t.is == "string") u = i.createElement(e, { is: t.is });
      else if (((u = i.createElement(e)), e === "select")) {
        var y = u;
        t.multiple ? (y.multiple = !0) : t.size && (y.size = t.size);
      }
    } else u = i.createElementNS(s, e);
    return (
      s === ir &&
        !r &&
        Object.prototype.toString.call(u) === "[object HTMLUnknownElement]" &&
        !cn.call(Zd, e) &&
        ((Zd[e] = !0),
        c(
          "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
          e
        )),
      u
    );
  }
  function ux(e, t) {
    return Iy(t).createTextNode(e);
  }
  function lx(e, t, n, a) {
    var r = gi(t, n);
    $s(t, n);
    var i;
    switch (t) {
      case "dialog":
        vt("cancel", e), vt("close", e), (i = n);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e), (i = n);
        break;
      case "video":
      case "audio":
        for (var u = 0; u < Xl.length; u++) vt(Xl[u], e);
        i = n;
        break;
      case "source":
        vt("error", e), (i = n);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e), (i = n);
        break;
      case "details":
        vt("toggle", e), (i = n);
        break;
      case "input":
        S(e, n), (i = d(e, n)), vt("invalid", e);
        break;
      case "option":
        it(e, n), (i = n);
        break;
      case "select":
        yl(e, n), (i = ml(e, n)), vt("invalid", e);
        break;
      case "textarea":
        Jh(e, n), (i = Nf(e, n)), vt("invalid", e);
        break;
      default:
        i = n;
    }
    switch (($f(t, i), ax(t, e, a, i, r), t)) {
      case "input":
        ar(e), I(e, n, !1);
        break;
      case "textarea":
        ar(e), tm(e);
        break;
      case "option":
        pt(e, n);
        break;
      case "select":
        Uf(e, n);
        break;
      default:
        typeof i.onClick == "function" && qs(e);
        break;
    }
  }
  function ox(e, t, n, a, r) {
    $s(t, a);
    var i = null,
      u,
      s;
    switch (t) {
      case "input":
        (u = d(e, n)), (s = d(e, a)), (i = []);
        break;
      case "select":
        (u = ml(e, n)), (s = ml(e, a)), (i = []);
        break;
      case "textarea":
        (u = Nf(e, n)), (s = Nf(e, a)), (i = []);
        break;
      default:
        (u = n),
          (s = a),
          typeof u.onClick != "function" &&
            typeof s.onClick == "function" &&
            qs(e);
        break;
    }
    $f(t, s);
    var f,
      m,
      y = null;
    for (f in u)
      if (!(s.hasOwnProperty(f) || !u.hasOwnProperty(f) || u[f] == null))
        if (f === wi) {
          var R = u[f];
          for (m in R) R.hasOwnProperty(m) && (y || (y = {}), (y[m] = ""));
        } else
          f === Zl ||
            f === Mi ||
            f === Vs ||
            f === Pr ||
            f === Vy ||
            (Kt.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in s) {
      var T = s[f],
        O = u != null ? u[f] : void 0;
      if (!(!s.hasOwnProperty(f) || T === O || (T == null && O == null)))
        if (f === wi)
          if ((T && Object.freeze(T), O)) {
            for (m in O)
              O.hasOwnProperty(m) &&
                (!T || !T.hasOwnProperty(m)) &&
                (y || (y = {}), (y[m] = ""));
            for (m in T)
              T.hasOwnProperty(m) &&
                O[m] !== T[m] &&
                (y || (y = {}), (y[m] = T[m]));
          } else y || (i || (i = []), i.push(f, y)), (y = T);
        else if (f === Zl) {
          var M = T ? T[Bs] : void 0,
            U = O ? O[Bs] : void 0;
          M != null && U !== M && (i = i || []).push(f, M);
        } else
          f === Mi
            ? (typeof T == "string" || typeof T == "number") &&
              (i = i || []).push(f, "" + T)
            : f === Vs ||
              f === Pr ||
              (Kt.hasOwnProperty(f)
                ? (T != null &&
                    (typeof T != "function" && Ys(f, T),
                    f === "onScroll" && vt("scroll", e)),
                  !i && O !== T && (i = []))
                : (i = i || []).push(f, T));
    }
    return y && (_C(y, s[wi]), (i = i || []).push(wi, y)), i;
  }
  function sx(e, t, n, a, r) {
    n === "input" && r.type === "radio" && r.name != null && w(e, r);
    var i = gi(n, a),
      u = gi(n, r);
    switch ((rx(e, t, i, u), n)) {
      case "input":
        L(e, r);
        break;
      case "textarea":
        em(e, r);
        break;
      case "select":
        rC(e, r);
        break;
    }
  }
  function cx(e) {
    {
      var t = e.toLowerCase();
      return (hs.hasOwnProperty(t) && hs[t]) || null;
    }
  }
  function fx(e, t, n, a, r, i, u) {
    var s, f;
    switch (((s = gi(t, n)), $s(t, n), t)) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (var m = 0; m < Xl.length; m++) vt(Xl[m], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        S(e, n), vt("invalid", e);
        break;
      case "option":
        it(e, n);
        break;
      case "select":
        yl(e, n), vt("invalid", e);
        break;
      case "textarea":
        Jh(e, n), vt("invalid", e);
        break;
    }
    $f(t, n);
    {
      f = new Set();
      for (var y = e.attributes, R = 0; R < y.length; R++) {
        var T = y[R].name.toLowerCase();
        switch (T) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(y[R].name);
        }
      }
    }
    var O = null;
    for (var M in n)
      if (!!n.hasOwnProperty(M)) {
        var U = n[M];
        if (M === Mi)
          typeof U == "string"
            ? e.textContent !== U &&
              (n[Pr] !== !0 && Ps(e.textContent, U, i, u), (O = [Mi, U]))
            : typeof U == "number" &&
              e.textContent !== "" + U &&
              (n[Pr] !== !0 && Ps(e.textContent, U, i, u), (O = [Mi, "" + U]));
        else if (Kt.hasOwnProperty(M))
          U != null &&
            (typeof U != "function" && Ys(M, U),
            M === "onScroll" && vt("scroll", e));
        else if (u && !0 && typeof s == "boolean") {
          var ee = void 0,
            oe = s && gt ? null : qn(M);
          if (n[Pr] !== !0) {
            if (
              !(
                M === Vs ||
                M === Pr ||
                M === "value" ||
                M === "checked" ||
                M === "selected"
              )
            ) {
              if (M === Zl) {
                var ie = e.innerHTML,
                  He = U ? U[Bs] : void 0;
                if (He != null) {
                  var Oe = Yy(e, He);
                  Oe !== ie && Jl(M, ie, Oe);
                }
              } else if (M === wi) {
                if ((f.delete(M), $y)) {
                  var D = xC(U);
                  (ee = e.getAttribute("style")), D !== ee && Jl(M, ee, D);
                }
              } else if (s && !gt)
                f.delete(M.toLowerCase()),
                  (ee = Mr(e, M, U)),
                  U !== ee && Jl(M, ee, U);
              else if (!Rt(M, oe, s) && !at(M, U, oe, s)) {
                var N = !1;
                if (oe !== null)
                  f.delete(oe.attributeName), (ee = tr(e, M, U, oe));
                else {
                  var _ = a;
                  if ((_ === ir && (_ = Hf(t)), _ === ir))
                    f.delete(M.toLowerCase());
                  else {
                    var B = cx(M);
                    B !== null && B !== M && ((N = !0), f.delete(B)),
                      f.delete(M);
                  }
                  ee = Mr(e, M, U);
                }
                var te = gt;
                !te && U !== ee && !N && Jl(M, ee, U);
              }
            }
          }
        }
      }
    switch ((u && f.size > 0 && n[Pr] !== !0 && By(f), t)) {
      case "input":
        ar(e), I(e, n, !0);
        break;
      case "textarea":
        ar(e), tm(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && qs(e);
        break;
    }
    return O;
  }
  function dx(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function Jd(e, t) {
    {
      if (zn) return;
      (zn = !0),
        c(
          "Did not expect server HTML to contain a <%s> in <%s>.",
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        );
    }
  }
  function ep(e, t) {
    {
      if (zn) return;
      (zn = !0),
        c(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        );
    }
  }
  function tp(e, t, n) {
    {
      if (zn) return;
      (zn = !0),
        c(
          "Expected server HTML to contain a matching <%s> in <%s>.",
          t,
          e.nodeName.toLowerCase()
        );
    }
  }
  function np(e, t) {
    {
      if (t === "" || zn) return;
      (zn = !0),
        c(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        );
    }
  }
  function px(e, t, n) {
    switch (t) {
      case "input":
        ve(e, n);
        return;
      case "textarea":
        uC(e, n);
        return;
      case "select":
        iC(e, n);
        return;
    }
  }
  var eo = function () {},
    to = function () {};
  {
    var vx = [
        "address",
        "applet",
        "area",
        "article",
        "aside",
        "base",
        "basefont",
        "bgsound",
        "blockquote",
        "body",
        "br",
        "button",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dir",
        "div",
        "dl",
        "dt",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "iframe",
        "img",
        "input",
        "isindex",
        "li",
        "link",
        "listing",
        "main",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "nav",
        "noembed",
        "noframes",
        "noscript",
        "object",
        "ol",
        "p",
        "param",
        "plaintext",
        "pre",
        "script",
        "section",
        "select",
        "source",
        "style",
        "summary",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
        "wbr",
        "xmp",
      ],
      Py = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title",
      ],
      hx = Py.concat(["button"]),
      mx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
      qy = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      };
    to = function (e, t) {
      var n = Le({}, e || qy),
        a = { tag: t };
      return (
        Py.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        hx.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        vx.indexOf(t) !== -1 &&
          t !== "address" &&
          t !== "div" &&
          t !== "p" &&
          ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
        (n.current = a),
        t === "form" && (n.formTag = a),
        t === "a" && (n.aTagInScope = a),
        t === "button" && (n.buttonTagInScope = a),
        t === "nobr" && (n.nobrTagInScope = a),
        t === "p" && (n.pTagInButtonScope = a),
        t === "li" && (n.listItemTagAutoclosing = a),
        (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a),
        n
      );
    };
    var yx = function (e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return (
              e === "th" ||
              e === "td" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "tbody":
          case "thead":
          case "tfoot":
            return (
              e === "tr" || e === "style" || e === "script" || e === "template"
            );
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return (
              e === "caption" ||
              e === "colgroup" ||
              e === "tbody" ||
              e === "tfoot" ||
              e === "thead" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "head":
            return (
              e === "base" ||
              e === "basefont" ||
              e === "bgsound" ||
              e === "link" ||
              e === "meta" ||
              e === "title" ||
              e === "noscript" ||
              e === "noframes" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return (
              t !== "h1" &&
              t !== "h2" &&
              t !== "h3" &&
              t !== "h4" &&
              t !== "h5" &&
              t !== "h6"
            );
          case "rp":
          case "rt":
            return mx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      },
      gx = function (e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      },
      Gy = {};
    eo = function (e, t, n) {
      n = n || qy;
      var a = n.current,
        r = a && a.tag;
      t != null &&
        (e != null &&
          c(
            "validateDOMNesting: when childText is passed, childTag should be null"
          ),
        (e = "#text"));
      var i = yx(e, r) ? null : a,
        u = i ? null : gx(e, n),
        s = i || u;
      if (!!s) {
        var f = s.tag,
          m = !!i + "|" + e + "|" + f;
        if (!Gy[m]) {
          Gy[m] = !0;
          var y = e,
            R = "";
          if (
            (e === "#text"
              ? /\S/.test(t)
                ? (y = "Text nodes")
                : ((y = "Whitespace text nodes"),
                  (R =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (y = "<" + e + ">"),
            i)
          ) {
            var T = "";
            f === "table" &&
              e === "tr" &&
              (T +=
                " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
              c(
                "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
                y,
                f,
                R,
                T
              );
          } else
            c(
              "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
              y,
              f
            );
        }
      }
    };
  }
  var Gs = "suppressHydrationWarning",
    Qs = "$",
    Xs = "/$",
    no = "$?",
    ao = "$!",
    bx = "style",
    ap = null,
    rp = null;
  function Sx(e) {
    var t,
      n,
      a = e.nodeType;
    switch (a) {
      case lr:
      case jf: {
        t = a === lr ? "#document" : "#fragment";
        var r = e.documentElement;
        n = r ? r.namespaceURI : Ff(null, "");
        break;
      }
      default: {
        var i = a === Ot ? e.parentNode : e,
          u = i.namespaceURI || null;
        (t = i.tagName), (n = Ff(u, t));
        break;
      }
    }
    {
      var s = t.toLowerCase(),
        f = to(null, s);
      return { namespace: n, ancestorInfo: f };
    }
  }
  function Ex(e, t, n) {
    {
      var a = e,
        r = Ff(a.namespace, t),
        i = to(a.ancestorInfo, t);
      return { namespace: r, ancestorInfo: i };
    }
  }
  function uA(e) {
    return e;
  }
  function Cx(e) {
    (ap = bT()), (rp = zR());
    var t = null;
    return ty(!1), t;
  }
  function Tx(e) {
    HR(rp), ty(ap), (ap = null), (rp = null);
  }
  function Rx(e, t, n, a, r) {
    var i;
    {
      var u = a;
      if (
        (eo(e, null, u.ancestorInfo),
        typeof t.children == "string" || typeof t.children == "number")
      ) {
        var s = "" + t.children,
          f = to(u.ancestorInfo, e);
        eo(null, s, f);
      }
      i = u.namespace;
    }
    var m = ix(e, t, n, i);
    return uo(r, m), dp(m, t), m;
  }
  function xx(e, t) {
    e.appendChild(t);
  }
  function Dx(e, t, n, a, r) {
    switch ((lx(e, t, n, a), t)) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function _x(e, t, n, a, r, i) {
    {
      var u = i;
      if (
        typeof a.children != typeof n.children &&
        (typeof a.children == "string" || typeof a.children == "number")
      ) {
        var s = "" + a.children,
          f = to(u.ancestorInfo, t);
        eo(null, s, f);
      }
    }
    return ox(e, t, n, a);
  }
  function ip(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  function Ox(e, t, n, a) {
    {
      var r = n;
      eo(null, e, r.ancestorInfo);
    }
    var i = ux(e, t);
    return uo(a, i), i;
  }
  function Mx() {
    var e = window.event;
    return e === void 0 ? vr : ny(e.type);
  }
  var up = typeof setTimeout == "function" ? setTimeout : void 0,
    wx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    lp = -1,
    Qy = typeof Promise == "function" ? Promise : void 0,
    Ax =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qy < "u"
        ? function (e) {
            return Qy.resolve(null).then(e).catch(Lx);
          }
        : up;
  function Lx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function kx(e, t, n, a) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && e.focus();
        return;
      case "img": {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function Ux(e, t, n, a, r, i) {
    sx(e, t, n, a, r), dp(e, r);
  }
  function Xy(e) {
    vs(e, "");
  }
  function Nx(e, t, n) {
    e.nodeValue = n;
  }
  function zx(e, t) {
    e.appendChild(t);
  }
  function Hx(e, t) {
    var n;
    e.nodeType === Ot
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && qs(n);
  }
  function Fx(e, t, n) {
    e.insertBefore(t, n);
  }
  function jx(e, t, n) {
    e.nodeType === Ot ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function Vx(e, t) {
    e.removeChild(t);
  }
  function Bx(e, t) {
    e.nodeType === Ot ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function op(e, t) {
    var n = t,
      a = 0;
    do {
      var r = n.nextSibling;
      if ((e.removeChild(n), r && r.nodeType === Ot)) {
        var i = r.data;
        if (i === Xs)
          if (a === 0) {
            e.removeChild(r), jl(t);
            return;
          } else a--;
        else (i === Qs || i === no || i === ao) && a++;
      }
      n = r;
    } while (n);
    jl(t);
  }
  function $x(e, t) {
    e.nodeType === Ot ? op(e.parentNode, t) : e.nodeType === Nn && op(e, t),
      jl(e);
  }
  function Yx(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function"
      ? t.setProperty("display", "none", "important")
      : (t.display = "none");
  }
  function Ix(e) {
    e.nodeValue = "";
  }
  function Px(e, t) {
    e = e;
    var n = t[bx],
      a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = Vf("display", a);
  }
  function qx(e, t) {
    e.nodeValue = t;
  }
  function Gx(e) {
    e.nodeType === Nn
      ? (e.textContent = "")
      : e.nodeType === lr &&
        e.documentElement &&
        e.removeChild(e.documentElement);
  }
  function Qx(e, t, n) {
    return e.nodeType !== Nn || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e;
  }
  function Xx(e, t) {
    return t === "" || e.nodeType !== ur ? null : e;
  }
  function Wx(e) {
    return e.nodeType !== Ot ? null : e;
  }
  function Wy(e) {
    return e.data === no;
  }
  function sp(e) {
    return e.data === ao;
  }
  function Kx(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      a,
      r;
    return (
      t && ((n = t.dgst), (a = t.msg), (r = t.stck)),
      { message: a, digest: n, stack: r }
    );
  }
  function Zx(e, t) {
    e._reactRetry = t;
  }
  function Ws(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Nn || t === ur) break;
      if (t === Ot) {
        var n = e.data;
        if (n === Qs || n === ao || n === no) break;
        if (n === Xs) return null;
      }
    }
    return e;
  }
  function ro(e) {
    return Ws(e.nextSibling);
  }
  function Jx(e) {
    return Ws(e.firstChild);
  }
  function eD(e) {
    return Ws(e.firstChild);
  }
  function tD(e) {
    return Ws(e.nextSibling);
  }
  function nD(e, t, n, a, r, i, u) {
    uo(i, e), dp(e, n);
    var s;
    {
      var f = r;
      s = f.namespace;
    }
    var m = (i.mode & Ne) !== pe;
    return fx(e, t, n, s, a, m, u);
  }
  function aD(e, t, n, a) {
    return uo(n, e), n.mode & Ne, dx(e, t);
  }
  function rD(e, t) {
    uo(t, e);
  }
  function iD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === Xs) {
          if (n === 0) return ro(t);
          n--;
        } else (a === Qs || a === ao || a === no) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ky(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Ot) {
        var a = t.data;
        if (a === Qs || a === ao || a === no) {
          if (n === 0) return t;
          n--;
        } else a === Xs && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function uD(e) {
    jl(e);
  }
  function lD(e) {
    jl(e);
  }
  function oD(e) {
    return e !== "head" && e !== "body";
  }
  function sD(e, t, n, a) {
    var r = !0;
    Ps(t.nodeValue, n, a, r);
  }
  function cD(e, t, n, a, r, i) {
    if (t[Gs] !== !0) {
      var u = !0;
      Ps(a.nodeValue, r, i, u);
    }
  }
  function fD(e, t) {
    t.nodeType === Nn ? Jd(e, t) : t.nodeType === Ot || ep(e, t);
  }
  function dD(e, t) {
    {
      var n = e.parentNode;
      n !== null &&
        (t.nodeType === Nn ? Jd(n, t) : t.nodeType === Ot || ep(n, t));
    }
  }
  function pD(e, t, n, a, r) {
    (r || t[Gs] !== !0) &&
      (a.nodeType === Nn ? Jd(n, a) : a.nodeType === Ot || ep(n, a));
  }
  function vD(e, t, n) {
    tp(e, t);
  }
  function hD(e, t) {
    np(e, t);
  }
  function mD(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && tp(a, t);
    }
  }
  function yD(e, t) {
    {
      var n = e.parentNode;
      n !== null && np(n, t);
    }
  }
  function gD(e, t, n, a, r, i) {
    (i || t[Gs] !== !0) && tp(n, a);
  }
  function bD(e, t, n, a, r) {
    (r || t[Gs] !== !0) && np(n, a);
  }
  function SD(e) {
    c(
      "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
      e.nodeName.toLowerCase()
    );
  }
  function ED(e) {
    Wl(e);
  }
  var xu = Math.random().toString(36).slice(2),
    Du = "__reactFiber$" + xu,
    cp = "__reactProps$" + xu,
    io = "__reactContainer$" + xu,
    fp = "__reactEvents$" + xu,
    CD = "__reactListeners$" + xu,
    TD = "__reactHandles$" + xu;
  function RD(e) {
    delete e[Du], delete e[cp], delete e[fp], delete e[CD], delete e[TD];
  }
  function uo(e, t) {
    t[Du] = e;
  }
  function Ks(e, t) {
    t[io] = e;
  }
  function Zy(e) {
    e[io] = null;
  }
  function lo(e) {
    return !!e[io];
  }
  function Ai(e) {
    var t = e[Du];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (((t = n[io] || n[Du]), t)) {
        var a = t.alternate;
        if (t.child !== null || (a !== null && a.child !== null))
          for (var r = Ky(e); r !== null; ) {
            var i = r[Du];
            if (i) return i;
            r = Ky(r);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function qr(e) {
    var t = e[Du] || e[io];
    return t && (t.tag === z || t.tag === $ || t.tag === Y || t.tag === k)
      ? t
      : null;
  }
  function _u(e) {
    if (e.tag === z || e.tag === $) return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Zs(e) {
    return e[cp] || null;
  }
  function dp(e, t) {
    e[cp] = t;
  }
  function xD(e) {
    var t = e[fp];
    return t === void 0 && (t = e[fp] = new Set()), t;
  }
  var Jy = {},
    eg = p.ReactDebugCurrentFrame;
  function Js(e) {
    if (e) {
      var t = e._owner,
        n = Ur(e.type, e._source, t ? t.type : null);
      eg.setExtraStackFrame(n);
    } else eg.setExtraStackFrame(null);
  }
  function Ra(e, t, n, a, r) {
    {
      var i = Function.call.bind(cn);
      for (var u in e)
        if (i(e, u)) {
          var s = void 0;
          try {
            if (typeof e[u] != "function") {
              var f = Error(
                (a || "React class") +
                  ": " +
                  n +
                  " type `" +
                  u +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  typeof e[u] +
                  "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ((f.name = "Invariant Violation"), f);
            }
            s = e[u](
              t,
              u,
              a,
              n,
              null,
              "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            );
          } catch (m) {
            s = m;
          }
          s &&
            !(s instanceof Error) &&
            (Js(r),
            c(
              "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
              a || "React class",
              n,
              u,
              typeof s
            ),
            Js(null)),
            s instanceof Error &&
              !(s.message in Jy) &&
              ((Jy[s.message] = !0),
              Js(r),
              c("Failed %s type: %s", n, s.message),
              Js(null));
        }
    }
  }
  var pp = [],
    ec;
  ec = [];
  var hr = -1;
  function Gr(e) {
    return { current: e };
  }
  function hn(e, t) {
    if (hr < 0) {
      c("Unexpected pop.");
      return;
    }
    t !== ec[hr] && c("Unexpected Fiber popped."),
      (e.current = pp[hr]),
      (pp[hr] = null),
      (ec[hr] = null),
      hr--;
  }
  function mn(e, t, n) {
    hr++, (pp[hr] = e.current), (ec[hr] = n), (e.current = t);
  }
  var vp;
  vp = {};
  var ea = {};
  Object.freeze(ea);
  var mr = Gr(ea),
    $a = Gr(!1),
    hp = ea;
  function Ou(e, t, n) {
    return n && Ya(t) ? hp : mr.current;
  }
  function tg(e, t, n) {
    {
      var a = e.stateNode;
      (a.__reactInternalMemoizedUnmaskedChildContext = t),
        (a.__reactInternalMemoizedMaskedChildContext = n);
    }
  }
  function Mu(e, t) {
    {
      var n = e.type,
        a = n.contextTypes;
      if (!a) return ea;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {};
      for (var u in a) i[u] = t[u];
      {
        var s = Re(e) || "Unknown";
        Ra(a, i, "context", s);
      }
      return r && tg(e, t, i), i;
    }
  }
  function tc() {
    return $a.current;
  }
  function Ya(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function nc(e) {
    hn($a, e), hn(mr, e);
  }
  function mp(e) {
    hn($a, e), hn(mr, e);
  }
  function ng(e, t, n) {
    {
      if (mr.current !== ea)
        throw new Error(
          "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
        );
      mn(mr, t, e), mn($a, n, e);
    }
  }
  function ag(e, t, n) {
    {
      var a = e.stateNode,
        r = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var i = Re(e) || "Unknown";
          vp[i] ||
            ((vp[i] = !0),
            c(
              "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
              i,
              i
            ));
        }
        return n;
      }
      var u = a.getChildContext();
      for (var s in u)
        if (!(s in r))
          throw new Error(
            (Re(e) || "Unknown") +
              '.getChildContext(): key "' +
              s +
              '" is not defined in childContextTypes.'
          );
      {
        var f = Re(e) || "Unknown";
        Ra(r, u, "child context", f);
      }
      return Le({}, n, u);
    }
  }
  function ac(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || ea;
      return (hp = mr.current), mn(mr, n, e), mn($a, $a.current, e), !0;
    }
  }
  function rg(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error(
          "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
        );
      if (n) {
        var r = ag(e, t, hp);
        (a.__reactInternalMemoizedMergedChildContext = r),
          hn($a, e),
          hn(mr, e),
          mn(mr, r, e),
          mn($a, n, e);
      } else hn($a, e), mn($a, n, e);
    }
  }
  function DD(e) {
    {
      if (!o0(e) || e.tag !== C)
        throw new Error(
          "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
        );
      var t = e;
      do {
        switch (t.tag) {
          case k:
            return t.stateNode.context;
          case C: {
            var n = t.type;
            if (Ya(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error(
        "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
      );
    }
  }
  var Qr = 0,
    rc = 1,
    yr = null,
    yp = !1,
    gp = !1;
  function ig(e) {
    yr === null ? (yr = [e]) : yr.push(e);
  }
  function _D(e) {
    (yp = !0), ig(e);
  }
  function ug() {
    yp && Xr();
  }
  function Xr() {
    if (!gp && yr !== null) {
      gp = !0;
      var e = 0,
        t = Ta();
      try {
        var n = !0,
          a = yr;
        for (Xt(Kn); e < a.length; e++) {
          var r = a[e];
          do r = r(n);
          while (r !== null);
        }
        (yr = null), (yp = !1);
      } catch (i) {
        throw (yr !== null && (yr = yr.slice(e + 1)), wm(Ss, Xr), i);
      } finally {
        Xt(t), (gp = !1);
      }
    }
    return null;
  }
  var wu = [],
    Au = 0,
    ic = null,
    uc = 0,
    fa = [],
    da = 0,
    Li = null,
    gr = 1,
    br = "";
  function OD(e) {
    return Ui(), (e.flags & Cm) !== de;
  }
  function MD(e) {
    return Ui(), uc;
  }
  function wD() {
    var e = br,
      t = gr,
      n = t & ~AD(t);
    return n.toString(32) + e;
  }
  function ki(e, t) {
    Ui(), (wu[Au++] = uc), (wu[Au++] = ic), (ic = e), (uc = t);
  }
  function lg(e, t, n) {
    Ui(), (fa[da++] = gr), (fa[da++] = br), (fa[da++] = Li), (Li = e);
    var a = gr,
      r = br,
      i = lc(a) - 1,
      u = a & ~(1 << i),
      s = n + 1,
      f = lc(t) + i;
    if (f > 30) {
      var m = i - (i % 5),
        y = (1 << m) - 1,
        R = (u & y).toString(32),
        T = u >> m,
        O = i - m,
        M = lc(t) + O,
        U = s << O,
        ee = U | T,
        oe = R + r;
      (gr = (1 << M) | ee), (br = oe);
    } else {
      var ie = s << i,
        He = ie | u,
        Oe = r;
      (gr = (1 << f) | He), (br = Oe);
    }
  }
  function bp(e) {
    Ui();
    var t = e.return;
    if (t !== null) {
      var n = 1,
        a = 0;
      ki(e, n), lg(e, n, a);
    }
  }
  function lc(e) {
    return 32 - zm(e);
  }
  function AD(e) {
    return 1 << (lc(e) - 1);
  }
  function Sp(e) {
    for (; e === ic; )
      (ic = wu[--Au]), (wu[Au] = null), (uc = wu[--Au]), (wu[Au] = null);
    for (; e === Li; )
      (Li = fa[--da]),
        (fa[da] = null),
        (br = fa[--da]),
        (fa[da] = null),
        (gr = fa[--da]),
        (fa[da] = null);
  }
  function LD() {
    return Ui(), Li !== null ? { id: gr, overflow: br } : null;
  }
  function kD(e, t) {
    Ui(),
      (fa[da++] = gr),
      (fa[da++] = br),
      (fa[da++] = Li),
      (gr = t.id),
      (br = t.overflow),
      (Li = e);
  }
  function Ui() {
    Jt() ||
      c(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
  }
  var Zt = null,
    pa = null,
    xa = !1,
    Ni = !1,
    Wr = null;
  function UD() {
    xa &&
      c(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
  }
  function og() {
    Ni = !0;
  }
  function ND() {
    return Ni;
  }
  function zD(e) {
    var t = e.stateNode.containerInfo;
    return (pa = eD(t)), (Zt = e), (xa = !0), (Wr = null), (Ni = !1), !0;
  }
  function HD(e, t, n) {
    return (
      (pa = tD(t)),
      (Zt = e),
      (xa = !0),
      (Wr = null),
      (Ni = !1),
      n !== null && kD(e, n),
      !0
    );
  }
  function sg(e, t) {
    switch (e.tag) {
      case k: {
        fD(e.stateNode.containerInfo, t);
        break;
      }
      case z: {
        var n = (e.mode & Ne) !== pe;
        pD(e.type, e.memoizedProps, e.stateNode, t, n);
        break;
      }
      case Y: {
        var a = e.memoizedState;
        a.dehydrated !== null && dD(a.dehydrated, t);
        break;
      }
    }
  }
  function cg(e, t) {
    sg(e, t);
    var n = V1();
    (n.stateNode = t), (n.return = e);
    var a = e.deletions;
    a === null ? ((e.deletions = [n]), (e.flags |= bi)) : a.push(n);
  }
  function Ep(e, t) {
    {
      if (Ni) return;
      switch (e.tag) {
        case k: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case z:
              var a = t.type;
              t.pendingProps, vD(n, a);
              break;
            case $:
              var r = t.pendingProps;
              hD(n, r);
              break;
          }
          break;
        }
        case z: {
          var i = e.type,
            u = e.memoizedProps,
            s = e.stateNode;
          switch (t.tag) {
            case z: {
              var f = t.type,
                m = t.pendingProps,
                y = (e.mode & Ne) !== pe;
              gD(i, u, s, f, m, y);
              break;
            }
            case $: {
              var R = t.pendingProps,
                T = (e.mode & Ne) !== pe;
              bD(i, u, s, R, T);
              break;
            }
          }
          break;
        }
        case Y: {
          var O = e.memoizedState,
            M = O.dehydrated;
          if (M !== null)
            switch (t.tag) {
              case z:
                var U = t.type;
                t.pendingProps, mD(M, U);
                break;
              case $:
                var ee = t.pendingProps;
                yD(M, ee);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function fg(e, t) {
    (t.flags = (t.flags & ~sr) | Mt), Ep(e, t);
  }
  function dg(e, t) {
    switch (e.tag) {
      case z: {
        var n = e.type;
        e.pendingProps;
        var a = Qx(t, n);
        return a !== null
          ? ((e.stateNode = a), (Zt = e), (pa = Jx(a)), !0)
          : !1;
      }
      case $: {
        var r = e.pendingProps,
          i = Xx(t, r);
        return i !== null ? ((e.stateNode = i), (Zt = e), (pa = null), !0) : !1;
      }
      case Y: {
        var u = Wx(t);
        if (u !== null) {
          var s = { dehydrated: u, treeContext: LD(), retryLane: Xn };
          e.memoizedState = s;
          var f = B1(u);
          return (f.return = e), (e.child = f), (Zt = e), (pa = null), !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Cp(e) {
    return (e.mode & Ne) !== pe && (e.flags & Pe) === de;
  }
  function Tp(e) {
    throw new Error(
      "Hydration failed because the initial UI does not match what was rendered on the server."
    );
  }
  function Rp(e) {
    if (!!xa) {
      var t = pa;
      if (!t) {
        Cp(e) && (Ep(Zt, e), Tp()), fg(Zt, e), (xa = !1), (Zt = e);
        return;
      }
      var n = t;
      if (!dg(e, t)) {
        Cp(e) && (Ep(Zt, e), Tp()), (t = ro(n));
        var a = Zt;
        if (!t || !dg(e, t)) {
          fg(Zt, e), (xa = !1), (Zt = e);
          return;
        }
        cg(a, n);
      }
    }
  }
  function FD(e, t, n) {
    var a = e.stateNode,
      r = !Ni,
      i = nD(a, e.type, e.memoizedProps, t, n, e, r);
    return (e.updateQueue = i), i !== null;
  }
  function jD(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      a = aD(t, n, e);
    if (a) {
      var r = Zt;
      if (r !== null)
        switch (r.tag) {
          case k: {
            var i = r.stateNode.containerInfo,
              u = (r.mode & Ne) !== pe;
            sD(i, t, n, u);
            break;
          }
          case z: {
            var s = r.type,
              f = r.memoizedProps,
              m = r.stateNode,
              y = (r.mode & Ne) !== pe;
            cD(s, f, m, t, n, y);
            break;
          }
        }
    }
    return a;
  }
  function VD(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
      );
    rD(n, e);
  }
  function BD(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
      );
    return iD(n);
  }
  function pg(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== z && t.tag !== k && t.tag !== Y;

    )
      t = t.return;
    Zt = t;
  }
  function oc(e) {
    if (e !== Zt) return !1;
    if (!xa) return pg(e), (xa = !0), !1;
    if (
      e.tag !== k &&
      (e.tag !== z || (oD(e.type) && !ip(e.type, e.memoizedProps)))
    ) {
      var t = pa;
      if (t)
        if (Cp(e)) vg(e), Tp();
        else for (; t; ) cg(e, t), (t = ro(t));
    }
    return (
      pg(e), e.tag === Y ? (pa = BD(e)) : (pa = Zt ? ro(e.stateNode) : null), !0
    );
  }
  function $D() {
    return xa && pa !== null;
  }
  function vg(e) {
    for (var t = pa; t; ) sg(e, t), (t = ro(t));
  }
  function Lu() {
    (Zt = null), (pa = null), (xa = !1), (Ni = !1);
  }
  function hg() {
    Wr !== null && (sS(Wr), (Wr = null));
  }
  function Jt() {
    return xa;
  }
  function xp(e) {
    Wr === null ? (Wr = [e]) : Wr.push(e);
  }
  var YD = p.ReactCurrentBatchConfig,
    ID = null;
  function PD() {
    return YD.transition;
  }
  var Da = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  };
  {
    var qD = function (e) {
        for (var t = null, n = e; n !== null; )
          n.mode & wt && (t = n), (n = n.return);
        return t;
      },
      zi = function (e) {
        var t = [];
        return (
          e.forEach(function (n) {
            t.push(n);
          }),
          t.sort().join(", ")
        );
      },
      oo = [],
      so = [],
      co = [],
      fo = [],
      po = [],
      vo = [],
      Hi = new Set();
    (Da.recordUnsafeLifecycleWarnings = function (e, t) {
      Hi.has(e.type) ||
        (typeof t.componentWillMount == "function" &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          oo.push(e),
        e.mode & wt &&
          typeof t.UNSAFE_componentWillMount == "function" &&
          so.push(e),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          co.push(e),
        e.mode & wt &&
          typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          fo.push(e),
        typeof t.componentWillUpdate == "function" &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          po.push(e),
        e.mode & wt &&
          typeof t.UNSAFE_componentWillUpdate == "function" &&
          vo.push(e));
    }),
      (Da.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set();
        oo.length > 0 &&
          (oo.forEach(function (T) {
            e.add(Re(T) || "Component"), Hi.add(T.type);
          }),
          (oo = []));
        var t = new Set();
        so.length > 0 &&
          (so.forEach(function (T) {
            t.add(Re(T) || "Component"), Hi.add(T.type);
          }),
          (so = []));
        var n = new Set();
        co.length > 0 &&
          (co.forEach(function (T) {
            n.add(Re(T) || "Component"), Hi.add(T.type);
          }),
          (co = []));
        var a = new Set();
        fo.length > 0 &&
          (fo.forEach(function (T) {
            a.add(Re(T) || "Component"), Hi.add(T.type);
          }),
          (fo = []));
        var r = new Set();
        po.length > 0 &&
          (po.forEach(function (T) {
            r.add(Re(T) || "Component"), Hi.add(T.type);
          }),
          (po = []));
        var i = new Set();
        if (
          (vo.length > 0 &&
            (vo.forEach(function (T) {
              i.add(Re(T) || "Component"), Hi.add(T.type);
            }),
            (vo = [])),
          t.size > 0)
        ) {
          var u = zi(t);
          c(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            u
          );
        }
        if (a.size > 0) {
          var s = zi(a);
          c(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            s
          );
        }
        if (i.size > 0) {
          var f = zi(i);
          c(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            f
          );
        }
        if (e.size > 0) {
          var m = zi(e);
          g(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            m
          );
        }
        if (n.size > 0) {
          var y = zi(n);
          g(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            y
          );
        }
        if (r.size > 0) {
          var R = zi(r);
          g(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            R
          );
        }
      });
    var sc = new Map(),
      mg = new Set();
    (Da.recordLegacyContextWarning = function (e, t) {
      var n = qD(e);
      if (n === null) {
        c(
          "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
        );
        return;
      }
      if (!mg.has(e.type)) {
        var a = sc.get(n);
        (e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == "function")) &&
          (a === void 0 && ((a = []), sc.set(n, a)), a.push(e));
      }
    }),
      (Da.flushLegacyContextWarning = function () {
        sc.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              a = new Set();
            e.forEach(function (i) {
              a.add(Re(i) || "Component"), mg.add(i.type);
            });
            var r = zi(a);
            try {
              mt(n),
                c(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  r
                );
            } finally {
              Pt();
            }
          }
        });
      }),
      (Da.discardPendingWarnings = function () {
        (oo = []),
          (so = []),
          (co = []),
          (fo = []),
          (po = []),
          (vo = []),
          (sc = new Map());
      });
  }
  function _a(e, t) {
    if (e && e.defaultProps) {
      var n = Le({}, t),
        a = e.defaultProps;
      for (var r in a) n[r] === void 0 && (n[r] = a[r]);
      return n;
    }
    return t;
  }
  var Dp = Gr(null),
    _p;
  _p = {};
  var cc = null,
    ku = null,
    Op = null,
    fc = !1;
  function dc() {
    (cc = null), (ku = null), (Op = null), (fc = !1);
  }
  function yg() {
    fc = !0;
  }
  function gg() {
    fc = !1;
  }
  function bg(e, t, n) {
    mn(Dp, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== _p &&
        c(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ),
      (t._currentRenderer = _p);
  }
  function Mp(e, t) {
    var n = Dp.current;
    hn(Dp, t), (e._currentValue = n);
  }
  function wp(e, t, n) {
    for (var a = e; a !== null; ) {
      var r = a.alternate;
      if (
        (gu(a.childLanes, t)
          ? r !== null &&
            !gu(r.childLanes, t) &&
            (r.childLanes = De(r.childLanes, t))
          : ((a.childLanes = De(a.childLanes, t)),
            r !== null && (r.childLanes = De(r.childLanes, t))),
        a === n)
      )
        break;
      a = a.return;
    }
    a !== n &&
      c(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  function GD(e, t, n) {
    QD(e, t, n);
  }
  function QD(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = void 0,
        i = a.dependencies;
      if (i !== null) {
        r = a.child;
        for (var u = i.firstContext; u !== null; ) {
          if (u.context === t) {
            if (a.tag === C) {
              var s = Ll(n),
                f = Sr(st, s);
              f.tag = vc;
              var m = a.updateQueue;
              if (m !== null) {
                var y = m.shared,
                  R = y.pending;
                R === null ? (f.next = f) : ((f.next = R.next), (R.next = f)),
                  (y.pending = f);
              }
            }
            a.lanes = De(a.lanes, n);
            var T = a.alternate;
            T !== null && (T.lanes = De(T.lanes, n)),
              wp(a.return, n, e),
              (i.lanes = De(i.lanes, n));
            break;
          }
          u = u.next;
        }
      } else if (a.tag === X) r = a.type === e.type ? null : a.child;
      else if (a.tag === ct) {
        var O = a.return;
        if (O === null)
          throw new Error(
            "We just came from a parent so we must have had a parent. This is a bug in React."
          );
        O.lanes = De(O.lanes, n);
        var M = O.alternate;
        M !== null && (M.lanes = De(M.lanes, n)), wp(O, n, e), (r = a.sibling);
      } else r = a.child;
      if (r !== null) r.return = a;
      else
        for (r = a; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          var U = r.sibling;
          if (U !== null) {
            (U.return = r.return), (r = U);
            break;
          }
          r = r.return;
        }
      a = r;
    }
  }
  function Uu(e, t) {
    (cc = e), (ku = null), (Op = null);
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (Wn(n.lanes, t) && Oo(), (n.firstContext = null));
    }
  }
  function At(e) {
    fc &&
      c(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    var t = e._currentValue;
    if (Op !== e) {
      var n = { context: e, memoizedValue: t, next: null };
      if (ku === null) {
        if (cc === null)
          throw new Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        (ku = n), (cc.dependencies = { lanes: j, firstContext: n });
      } else ku = ku.next = n;
    }
    return t;
  }
  var Fi = null;
  function Ap(e) {
    Fi === null ? (Fi = [e]) : Fi.push(e);
  }
  function XD() {
    if (Fi !== null) {
      for (var e = 0; e < Fi.length; e++) {
        var t = Fi[e],
          n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var a = n.next,
            r = t.pending;
          if (r !== null) {
            var i = r.next;
            (r.next = a), (n.next = i);
          }
          t.pending = n;
        }
      }
      Fi = null;
    }
  }
  function Sg(e, t, n, a) {
    var r = t.interleaved;
    return (
      r === null ? ((n.next = n), Ap(t)) : ((n.next = r.next), (r.next = n)),
      (t.interleaved = n),
      pc(e, a)
    );
  }
  function WD(e, t, n, a) {
    var r = t.interleaved;
    r === null ? ((n.next = n), Ap(t)) : ((n.next = r.next), (r.next = n)),
      (t.interleaved = n);
  }
  function KD(e, t, n, a) {
    var r = t.interleaved;
    return (
      r === null ? ((n.next = n), Ap(t)) : ((n.next = r.next), (r.next = n)),
      (t.interleaved = n),
      pc(e, a)
    );
  }
  function Hn(e, t) {
    return pc(e, t);
  }
  var ZD = pc;
  function pc(e, t) {
    e.lanes = De(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = De(n.lanes, t)),
      n === null && (e.flags & (Mt | sr)) !== de && ES(e);
    for (var a = e, r = e.return; r !== null; )
      (r.childLanes = De(r.childLanes, t)),
        (n = r.alternate),
        n !== null
          ? (n.childLanes = De(n.childLanes, t))
          : (r.flags & (Mt | sr)) !== de && ES(e),
        (a = r),
        (r = r.return);
    if (a.tag === k) {
      var i = a.stateNode;
      return i;
    } else return null;
  }
  var Eg = 0,
    Cg = 1,
    vc = 2,
    Lp = 3,
    hc = !1,
    kp,
    mc;
  (kp = !1), (mc = null);
  function Up(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: j },
      effects: null,
    };
    e.updateQueue = t;
  }
  function Tg(e, t) {
    var n = t.updateQueue,
      a = e.updateQueue;
    if (n === a) {
      var r = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects,
      };
      t.updateQueue = r;
    }
  }
  function Sr(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Eg,
      payload: null,
      callback: null,
      next: null,
    };
    return n;
  }
  function Kr(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    var r = a.shared;
    if (
      (mc === r &&
        !kp &&
        (c(
          "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."
        ),
        (kp = !0)),
      ZO())
    ) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        ZD(e, n)
      );
    } else return KD(e, r, t, n);
  }
  function yc(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var r = a.shared;
      if (Vm(n)) {
        var i = r.lanes;
        i = $m(i, e.pendingLanes);
        var u = De(i, n);
        (r.lanes = u), Ad(e, u);
      }
    }
  }
  function Np(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null) {
      var r = a.updateQueue;
      if (n === r) {
        var i = null,
          u = null,
          s = n.firstBaseUpdate;
        if (s !== null) {
          var f = s;
          do {
            var m = {
              eventTime: f.eventTime,
              lane: f.lane,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null,
            };
            u === null ? (i = u = m) : ((u.next = m), (u = m)), (f = f.next);
          } while (f !== null);
          u === null ? (i = u = t) : ((u.next = t), (u = t));
        } else i = u = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: u,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n);
        return;
      }
    }
    var y = n.lastBaseUpdate;
    y === null ? (n.firstBaseUpdate = t) : (y.next = t), (n.lastBaseUpdate = t);
  }
  function JD(e, t, n, a, r, i) {
    switch (n.tag) {
      case Cg: {
        var u = n.payload;
        if (typeof u == "function") {
          yg();
          var s = u.call(i, a, r);
          {
            if (e.mode & wt) {
              Gt(!0);
              try {
                u.call(i, a, r);
              } finally {
                Gt(!1);
              }
            }
            gg();
          }
          return s;
        }
        return u;
      }
      case Lp:
        e.flags = (e.flags & ~Tn) | Pe;
      case Eg: {
        var f = n.payload,
          m;
        if (typeof f == "function") {
          yg(), (m = f.call(i, a, r));
          {
            if (e.mode & wt) {
              Gt(!0);
              try {
                f.call(i, a, r);
              } finally {
                Gt(!1);
              }
            }
            gg();
          }
        } else m = f;
        return m == null ? a : Le({}, a, m);
      }
      case vc:
        return (hc = !0), a;
    }
    return a;
  }
  function gc(e, t, n, a) {
    var r = e.updateQueue;
    (hc = !1), (mc = r.shared);
    var i = r.firstBaseUpdate,
      u = r.lastBaseUpdate,
      s = r.shared.pending;
    if (s !== null) {
      r.shared.pending = null;
      var f = s,
        m = f.next;
      (f.next = null), u === null ? (i = m) : (u.next = m), (u = f);
      var y = e.alternate;
      if (y !== null) {
        var R = y.updateQueue,
          T = R.lastBaseUpdate;
        T !== u &&
          (T === null ? (R.firstBaseUpdate = m) : (T.next = m),
          (R.lastBaseUpdate = f));
      }
    }
    if (i !== null) {
      var O = r.baseState,
        M = j,
        U = null,
        ee = null,
        oe = null,
        ie = i;
      do {
        var He = ie.lane,
          Oe = ie.eventTime;
        if (gu(a, He)) {
          if (oe !== null) {
            var N = {
              eventTime: Oe,
              lane: Qt,
              tag: ie.tag,
              payload: ie.payload,
              callback: ie.callback,
              next: null,
            };
            oe = oe.next = N;
          }
          O = JD(e, r, ie, O, t, n);
          var _ = ie.callback;
          if (_ !== null && ie.lane !== Qt) {
            e.flags |= Zf;
            var B = r.effects;
            B === null ? (r.effects = [ie]) : B.push(ie);
          }
        } else {
          var D = {
            eventTime: Oe,
            lane: He,
            tag: ie.tag,
            payload: ie.payload,
            callback: ie.callback,
            next: null,
          };
          oe === null ? ((ee = oe = D), (U = O)) : (oe = oe.next = D),
            (M = De(M, He));
        }
        if (((ie = ie.next), ie === null)) {
          if (((s = r.shared.pending), s === null)) break;
          var te = s,
            Q = te.next;
          (te.next = null),
            (ie = Q),
            (r.lastBaseUpdate = te),
            (r.shared.pending = null);
        }
      } while (!0);
      oe === null && (U = O),
        (r.baseState = U),
        (r.firstBaseUpdate = ee),
        (r.lastBaseUpdate = oe);
      var he = r.shared.interleaved;
      if (he !== null) {
        var be = he;
        do (M = De(M, be.lane)), (be = be.next);
        while (be !== he);
      } else i === null && (r.shared.lanes = j);
      Vo(M), (e.lanes = M), (e.memoizedState = O);
    }
    mc = null;
  }
  function e_(e, t) {
    if (typeof e != "function")
      throw new Error(
        "Invalid argument passed as callback. Expected a function. Instead " +
          ("received: " + e)
      );
    e.call(t);
  }
  function Rg() {
    hc = !1;
  }
  function bc() {
    return hc;
  }
  function xg(e, t, n) {
    var a = t.effects;
    if (((t.effects = null), a !== null))
      for (var r = 0; r < a.length; r++) {
        var i = a[r],
          u = i.callback;
        u !== null && ((i.callback = null), e_(u, n));
      }
  }
  var zp = {},
    Dg = new l.Component().refs,
    Hp,
    Fp,
    jp,
    Vp,
    Bp,
    _g,
    Sc,
    $p,
    Yp,
    Ip;
  {
    (Hp = new Set()),
      (Fp = new Set()),
      (jp = new Set()),
      (Vp = new Set()),
      ($p = new Set()),
      (Bp = new Set()),
      (Yp = new Set()),
      (Ip = new Set());
    var Og = new Set();
    (Sc = function (e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Og.has(n) ||
          (Og.add(n),
          c(
            "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            t,
            e
          ));
      }
    }),
      (_g = function (e, t) {
        if (t === void 0) {
          var n = Ye(e) || "Component";
          Bp.has(n) ||
            (Bp.add(n),
            c(
              "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
              n
            ));
        }
      }),
      Object.defineProperty(zp, "_processChildContext", {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          );
        },
      }),
      Object.freeze(zp);
  }
  function Pp(e, t, n, a) {
    var r = e.memoizedState,
      i = n(a, r);
    {
      if (e.mode & wt) {
        Gt(!0);
        try {
          i = n(a, r);
        } finally {
          Gt(!1);
        }
      }
      _g(t, i);
    }
    var u = i == null ? r : Le({}, r, i);
    if (((e.memoizedState = u), e.lanes === j)) {
      var s = e.updateQueue;
      s.baseState = u;
    }
  }
  var qp = {
    isMounted: s0,
    enqueueSetState: function (e, t, n) {
      var a = cu(e),
        r = Dn(),
        i = ii(a),
        u = Sr(r, i);
      (u.payload = t), n != null && (Sc(n, "setState"), (u.callback = n));
      var s = Kr(a, u, i);
      s !== null && (Bt(s, a, i, r), yc(s, a, i)), ud(a, i);
    },
    enqueueReplaceState: function (e, t, n) {
      var a = cu(e),
        r = Dn(),
        i = ii(a),
        u = Sr(r, i);
      (u.tag = Cg),
        (u.payload = t),
        n != null && (Sc(n, "replaceState"), (u.callback = n));
      var s = Kr(a, u, i);
      s !== null && (Bt(s, a, i, r), yc(s, a, i)), ud(a, i);
    },
    enqueueForceUpdate: function (e, t) {
      var n = cu(e),
        a = Dn(),
        r = ii(n),
        i = Sr(a, r);
      (i.tag = vc), t != null && (Sc(t, "forceUpdate"), (i.callback = t));
      var u = Kr(n, i, r);
      u !== null && (Bt(u, n, r, a), yc(u, n, r)), V0(n, r);
    },
  };
  function Mg(e, t, n, a, r, i, u) {
    var s = e.stateNode;
    if (typeof s.shouldComponentUpdate == "function") {
      var f = s.shouldComponentUpdate(a, i, u);
      {
        if (e.mode & wt) {
          Gt(!0);
          try {
            f = s.shouldComponentUpdate(a, i, u);
          } finally {
            Gt(!1);
          }
        }
        f === void 0 &&
          c(
            "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
            Ye(t) || "Component"
          );
      }
      return f;
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !Gl(n, a) || !Gl(r, i)
      : !0;
  }
  function t_(e, t, n) {
    var a = e.stateNode;
    {
      var r = Ye(t) || "Component",
        i = a.render;
      i ||
        (t.prototype && typeof t.prototype.render == "function"
          ? c(
              "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
              r
            )
          : c(
              "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
              r
            )),
        a.getInitialState &&
          !a.getInitialState.isReactClassApproved &&
          !a.state &&
          c(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            r
          ),
        a.getDefaultProps &&
          !a.getDefaultProps.isReactClassApproved &&
          c(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            r
          ),
        a.propTypes &&
          c(
            "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
            r
          ),
        a.contextType &&
          c(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            r
          ),
        a.contextTypes &&
          c(
            "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
            r
          ),
        t.contextType &&
          t.contextTypes &&
          !Yp.has(t) &&
          (Yp.add(t),
          c(
            "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
            r
          )),
        typeof a.componentShouldUpdate == "function" &&
          c(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            r
          ),
        t.prototype &&
          t.prototype.isPureReactComponent &&
          typeof a.shouldComponentUpdate < "u" &&
          c(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Ye(t) || "A pure component"
          ),
        typeof a.componentDidUnmount == "function" &&
          c(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            r
          ),
        typeof a.componentDidReceiveProps == "function" &&
          c(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            r
          ),
        typeof a.componentWillRecieveProps == "function" &&
          c(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            r
          ),
        typeof a.UNSAFE_componentWillRecieveProps == "function" &&
          c(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            r
          );
      var u = a.props !== n;
      a.props !== void 0 &&
        u &&
        c(
          "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          r,
          r
        ),
        a.defaultProps &&
          c(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            r,
            r
          ),
        typeof a.getSnapshotBeforeUpdate == "function" &&
          typeof a.componentDidUpdate != "function" &&
          !jp.has(t) &&
          (jp.add(t),
          c(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Ye(t)
          )),
        typeof a.getDerivedStateFromProps == "function" &&
          c(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            r
          ),
        typeof a.getDerivedStateFromError == "function" &&
          c(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            r
          ),
        typeof t.getSnapshotBeforeUpdate == "function" &&
          c(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            r
          );
      var s = a.state;
      s &&
        (typeof s != "object" || Ie(s)) &&
        c("%s.state: must be set to an object or null", r),
        typeof a.getChildContext == "function" &&
          typeof t.childContextTypes != "object" &&
          c(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            r
          );
    }
  }
  function wg(e, t) {
    (t.updater = qp),
      (e.stateNode = t),
      r0(t, e),
      (t._reactInternalInstance = zp);
  }
  function Ag(e, t, n) {
    var a = !1,
      r = ea,
      i = ea,
      u = t.contextType;
    if ("contextType" in t) {
      var s =
        u === null ||
        (u !== void 0 && u.$$typeof === $e && u._context === void 0);
      if (!s && !Ip.has(t)) {
        Ip.add(t);
        var f = "";
        u === void 0
          ? (f =
              " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
          : typeof u != "object"
          ? (f = " However, it is set to a " + typeof u + ".")
          : u.$$typeof === we
          ? (f = " Did you accidentally pass the Context.Provider instead?")
          : u._context !== void 0
          ? (f = " Did you accidentally pass the Context.Consumer instead?")
          : (f =
              " However, it is set to an object with keys {" +
              Object.keys(u).join(", ") +
              "}."),
          c(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
            Ye(t) || "Component",
            f
          );
      }
    }
    if (typeof u == "object" && u !== null) i = At(u);
    else {
      r = Ou(e, t, !0);
      var m = t.contextTypes;
      (a = m != null), (i = a ? Mu(e, r) : ea);
    }
    var y = new t(n, i);
    if (e.mode & wt) {
      Gt(!0);
      try {
        y = new t(n, i);
      } finally {
        Gt(!1);
      }
    }
    var R = (e.memoizedState =
      y.state !== null && y.state !== void 0 ? y.state : null);
    wg(e, y);
    {
      if (typeof t.getDerivedStateFromProps == "function" && R === null) {
        var T = Ye(t) || "Component";
        Fp.has(T) ||
          (Fp.add(T),
          c(
            "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
            T,
            y.state === null ? "null" : "undefined",
            T
          ));
      }
      if (
        typeof t.getDerivedStateFromProps == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function"
      ) {
        var O = null,
          M = null,
          U = null;
        if (
          (typeof y.componentWillMount == "function" &&
          y.componentWillMount.__suppressDeprecationWarning !== !0
            ? (O = "componentWillMount")
            : typeof y.UNSAFE_componentWillMount == "function" &&
              (O = "UNSAFE_componentWillMount"),
          typeof y.componentWillReceiveProps == "function" &&
          y.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (M = "componentWillReceiveProps")
            : typeof y.UNSAFE_componentWillReceiveProps == "function" &&
              (M = "UNSAFE_componentWillReceiveProps"),
          typeof y.componentWillUpdate == "function" &&
          y.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (U = "componentWillUpdate")
            : typeof y.UNSAFE_componentWillUpdate == "function" &&
              (U = "UNSAFE_componentWillUpdate"),
          O !== null || M !== null || U !== null)
        ) {
          var ee = Ye(t) || "Component",
            oe =
              typeof t.getDerivedStateFromProps == "function"
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          Vp.has(ee) ||
            (Vp.add(ee),
            c(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              ee,
              oe,
              O !== null
                ? `
  ` + O
                : "",
              M !== null
                ? `
  ` + M
                : "",
              U !== null
                ? `
  ` + U
                : ""
            ));
        }
      }
    }
    return a && tg(e, r, i), y;
  }
  function n_(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == "function" &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (c(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          Re(e) || "Component"
        ),
        qp.enqueueReplaceState(t, t.state, null));
  }
  function Lg(e, t, n, a) {
    var r = t.state;
    if (
      (typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== r)
    ) {
      {
        var i = Re(e) || "Component";
        Hp.has(i) ||
          (Hp.add(i),
          c(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            i
          ));
      }
      qp.enqueueReplaceState(t, t.state, null);
    }
  }
  function Gp(e, t, n, a) {
    t_(e, t, n);
    var r = e.stateNode;
    (r.props = n), (r.state = e.memoizedState), (r.refs = Dg), Up(e);
    var i = t.contextType;
    if (typeof i == "object" && i !== null) r.context = At(i);
    else {
      var u = Ou(e, t, !0);
      r.context = Mu(e, u);
    }
    {
      if (r.state === n) {
        var s = Ye(t) || "Component";
        $p.has(s) ||
          ($p.add(s),
          c(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            s
          ));
      }
      e.mode & wt && Da.recordLegacyContextWarning(e, r),
        Da.recordUnsafeLifecycleWarnings(e, r);
    }
    r.state = e.memoizedState;
    var f = t.getDerivedStateFromProps;
    if (
      (typeof f == "function" && (Pp(e, t, f, n), (r.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != "function" &&
        typeof r.getSnapshotBeforeUpdate != "function" &&
        (typeof r.UNSAFE_componentWillMount == "function" ||
          typeof r.componentWillMount == "function") &&
        (n_(e, r), gc(e, n, r, a), (r.state = e.memoizedState)),
      typeof r.componentDidMount == "function")
    ) {
      var m = je;
      (m |= Ci), (e.mode & Va) !== pe && (m |= cr), (e.flags |= m);
    }
  }
  function a_(e, t, n, a) {
    var r = e.stateNode,
      i = e.memoizedProps;
    r.props = i;
    var u = r.context,
      s = t.contextType,
      f = ea;
    if (typeof s == "object" && s !== null) f = At(s);
    else {
      var m = Ou(e, t, !0);
      f = Mu(e, m);
    }
    var y = t.getDerivedStateFromProps,
      R =
        typeof y == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function";
    !R &&
      (typeof r.UNSAFE_componentWillReceiveProps == "function" ||
        typeof r.componentWillReceiveProps == "function") &&
      (i !== n || u !== f) &&
      Lg(e, r, n, f),
      Rg();
    var T = e.memoizedState,
      O = (r.state = T);
    if (
      (gc(e, n, r, a),
      (O = e.memoizedState),
      i === n && T === O && !tc() && !bc())
    ) {
      if (typeof r.componentDidMount == "function") {
        var M = je;
        (M |= Ci), (e.mode & Va) !== pe && (M |= cr), (e.flags |= M);
      }
      return !1;
    }
    typeof y == "function" && (Pp(e, t, y, n), (O = e.memoizedState));
    var U = bc() || Mg(e, t, i, n, T, O, f);
    if (U) {
      if (
        (!R &&
          (typeof r.UNSAFE_componentWillMount == "function" ||
            typeof r.componentWillMount == "function") &&
          (typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount()),
        typeof r.componentDidMount == "function")
      ) {
        var ee = je;
        (ee |= Ci), (e.mode & Va) !== pe && (ee |= cr), (e.flags |= ee);
      }
    } else {
      if (typeof r.componentDidMount == "function") {
        var oe = je;
        (oe |= Ci), (e.mode & Va) !== pe && (oe |= cr), (e.flags |= oe);
      }
      (e.memoizedProps = n), (e.memoizedState = O);
    }
    return (r.props = n), (r.state = O), (r.context = f), U;
  }
  function r_(e, t, n, a, r) {
    var i = t.stateNode;
    Tg(e, t);
    var u = t.memoizedProps,
      s = t.type === t.elementType ? u : _a(t.type, u);
    i.props = s;
    var f = t.pendingProps,
      m = i.context,
      y = n.contextType,
      R = ea;
    if (typeof y == "object" && y !== null) R = At(y);
    else {
      var T = Ou(t, n, !0);
      R = Mu(t, T);
    }
    var O = n.getDerivedStateFromProps,
      M =
        typeof O == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    !M &&
      (typeof i.UNSAFE_componentWillReceiveProps == "function" ||
        typeof i.componentWillReceiveProps == "function") &&
      (u !== f || m !== R) &&
      Lg(t, i, a, R),
      Rg();
    var U = t.memoizedState,
      ee = (i.state = U);
    if (
      (gc(t, a, i, r),
      (ee = t.memoizedState),
      u === f && U === ee && !tc() && !bc() && !on)
    )
      return (
        typeof i.componentDidUpdate == "function" &&
          (u !== e.memoizedProps || U !== e.memoizedState) &&
          (t.flags |= je),
        typeof i.getSnapshotBeforeUpdate == "function" &&
          (u !== e.memoizedProps || U !== e.memoizedState) &&
          (t.flags |= Si),
        !1
      );
    typeof O == "function" && (Pp(t, n, O, a), (ee = t.memoizedState));
    var oe = bc() || Mg(t, n, s, a, U, ee, R) || on;
    return (
      oe
        ? (!M &&
            (typeof i.UNSAFE_componentWillUpdate == "function" ||
              typeof i.componentWillUpdate == "function") &&
            (typeof i.componentWillUpdate == "function" &&
              i.componentWillUpdate(a, ee, R),
            typeof i.UNSAFE_componentWillUpdate == "function" &&
              i.UNSAFE_componentWillUpdate(a, ee, R)),
          typeof i.componentDidUpdate == "function" && (t.flags |= je),
          typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= Si))
        : (typeof i.componentDidUpdate == "function" &&
            (u !== e.memoizedProps || U !== e.memoizedState) &&
            (t.flags |= je),
          typeof i.getSnapshotBeforeUpdate == "function" &&
            (u !== e.memoizedProps || U !== e.memoizedState) &&
            (t.flags |= Si),
          (t.memoizedProps = a),
          (t.memoizedState = ee)),
      (i.props = a),
      (i.state = ee),
      (i.context = R),
      oe
    );
  }
  var Qp,
    Xp,
    Wp,
    Kp,
    Zp,
    kg = function (e, t) {};
  (Qp = !1),
    (Xp = !1),
    (Wp = {}),
    (Kp = {}),
    (Zp = {}),
    (kg = function (e, t) {
      if (
        !(e === null || typeof e != "object") &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != "object")
          throw new Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        e._store.validated = !0;
        var n = Re(t) || "Component";
        Kp[n] ||
          ((Kp[n] = !0),
          c(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ));
      }
    });
  function ho(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if (
        (e.mode & wt || Wt) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self)
      ) {
        var r = Re(e) || "Component";
        Wp[r] ||
          (c(
            'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            a
          ),
          (Wp[r] = !0));
      }
      if (n._owner) {
        var i = n._owner,
          u;
        if (i) {
          var s = i;
          if (s.tag !== C)
            throw new Error(
              "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref"
            );
          u = s.stateNode;
        }
        if (!u)
          throw new Error(
            "Missing owner for string ref " +
              a +
              ". This error is likely caused by a bug in React. Please file an issue."
          );
        var f = u;
        Ln(a, "ref");
        var m = "" + a;
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === m
        )
          return t.ref;
        var y = function (R) {
          var T = f.refs;
          T === Dg && (T = f.refs = {}), R === null ? delete T[m] : (T[m] = R);
        };
        return (y._stringRef = m), y;
      } else {
        if (typeof a != "string")
          throw new Error(
            "Expected ref to be a function, a string, an object returned by React.createRef(), or null."
          );
        if (!n._owner)
          throw new Error(
            "Element ref was specified as a string (" +
              a +
              `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
          );
      }
    }
    return a;
  }
  function Ec(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error(
      "Objects are not valid as a React child (found: " +
        (n === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : n) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  function Cc(e) {
    {
      var t = Re(e) || "Component";
      if (Zp[t]) return;
      (Zp[t] = !0),
        c(
          "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
        );
    }
  }
  function Ug(e) {
    var t = e._payload,
      n = e._init;
    return n(t);
  }
  function Ng(e) {
    function t(D, N) {
      if (!!e) {
        var _ = D.deletions;
        _ === null ? ((D.deletions = [N]), (D.flags |= bi)) : _.push(N);
      }
    }
    function n(D, N) {
      if (!e) return null;
      for (var _ = N; _ !== null; ) t(D, _), (_ = _.sibling);
      return null;
    }
    function a(D, N) {
      for (var _ = new Map(), B = N; B !== null; )
        B.key !== null ? _.set(B.key, B) : _.set(B.index, B), (B = B.sibling);
      return _;
    }
    function r(D, N) {
      var _ = qi(D, N);
      return (_.index = 0), (_.sibling = null), _;
    }
    function i(D, N, _) {
      if (((D.index = _), !e)) return (D.flags |= Cm), N;
      var B = D.alternate;
      if (B !== null) {
        var te = B.index;
        return te < N ? ((D.flags |= Mt), N) : te;
      } else return (D.flags |= Mt), N;
    }
    function u(D) {
      return e && D.alternate === null && (D.flags |= Mt), D;
    }
    function s(D, N, _, B) {
      if (N === null || N.tag !== $) {
        var te = xh(_, D.mode, B);
        return (te.return = D), te;
      } else {
        var Q = r(N, _);
        return (Q.return = D), Q;
      }
    }
    function f(D, N, _, B) {
      var te = _.type;
      if (te === V) return y(D, N, _.props.children, B, _.key);
      if (
        N !== null &&
        (N.elementType === te ||
          xS(N, _) ||
          (typeof te == "object" &&
            te !== null &&
            te.$$typeof === Ae &&
            Ug(te) === N.type))
      ) {
        var Q = r(N, _.props);
        return (
          (Q.ref = ho(D, N, _)),
          (Q.return = D),
          (Q._debugSource = _._source),
          (Q._debugOwner = _._owner),
          Q
        );
      }
      var he = Rh(_, D.mode, B);
      return (he.ref = ho(D, N, _)), (he.return = D), he;
    }
    function m(D, N, _, B) {
      if (
        N === null ||
        N.tag !== F ||
        N.stateNode.containerInfo !== _.containerInfo ||
        N.stateNode.implementation !== _.implementation
      ) {
        var te = Dh(_, D.mode, B);
        return (te.return = D), te;
      } else {
        var Q = r(N, _.children || []);
        return (Q.return = D), Q;
      }
    }
    function y(D, N, _, B, te) {
      if (N === null || N.tag !== ne) {
        var Q = li(_, D.mode, B, te);
        return (Q.return = D), Q;
      } else {
        var he = r(N, _);
        return (he.return = D), he;
      }
    }
    function R(D, N, _) {
      if ((typeof N == "string" && N !== "") || typeof N == "number") {
        var B = xh("" + N, D.mode, _);
        return (B.return = D), B;
      }
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case za: {
            var te = Rh(N, D.mode, _);
            return (te.ref = ho(D, null, N)), (te.return = D), te;
          }
          case E: {
            var Q = Dh(N, D.mode, _);
            return (Q.return = D), Q;
          }
          case Ae: {
            var he = N._payload,
              be = N._init;
            return R(D, be(he), _);
          }
        }
        if (Ie(N) || nr(N)) {
          var tt = li(N, D.mode, _, null);
          return (tt.return = D), tt;
        }
        Ec(D, N);
      }
      return typeof N == "function" && Cc(D), null;
    }
    function T(D, N, _, B) {
      var te = N !== null ? N.key : null;
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return te !== null ? null : s(D, N, "" + _, B);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case za:
            return _.key === te ? f(D, N, _, B) : null;
          case E:
            return _.key === te ? m(D, N, _, B) : null;
          case Ae: {
            var Q = _._payload,
              he = _._init;
            return T(D, N, he(Q), B);
          }
        }
        if (Ie(_) || nr(_)) return te !== null ? null : y(D, N, _, B, null);
        Ec(D, _);
      }
      return typeof _ == "function" && Cc(D), null;
    }
    function O(D, N, _, B, te) {
      if ((typeof B == "string" && B !== "") || typeof B == "number") {
        var Q = D.get(_) || null;
        return s(N, Q, "" + B, te);
      }
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case za: {
            var he = D.get(B.key === null ? _ : B.key) || null;
            return f(N, he, B, te);
          }
          case E: {
            var be = D.get(B.key === null ? _ : B.key) || null;
            return m(N, be, B, te);
          }
          case Ae:
            var tt = B._payload,
              Ve = B._init;
            return O(D, N, _, Ve(tt), te);
        }
        if (Ie(B) || nr(B)) {
          var xt = D.get(_) || null;
          return y(N, xt, B, te, null);
        }
        Ec(N, B);
      }
      return typeof B == "function" && Cc(N), null;
    }
    function M(D, N, _) {
      {
        if (typeof D != "object" || D === null) return N;
        switch (D.$$typeof) {
          case za:
          case E:
            kg(D, _);
            var B = D.key;
            if (typeof B != "string") break;
            if (N === null) {
              (N = new Set()), N.add(B);
              break;
            }
            if (!N.has(B)) {
              N.add(B);
              break;
            }
            c(
              "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",
              B
            );
            break;
          case Ae:
            var te = D._payload,
              Q = D._init;
            M(Q(te), N, _);
            break;
        }
      }
      return N;
    }
    function U(D, N, _, B) {
      for (var te = null, Q = 0; Q < _.length; Q++) {
        var he = _[Q];
        te = M(he, te, D);
      }
      for (
        var be = null, tt = null, Ve = N, xt = 0, Be = 0, Et = null;
        Ve !== null && Be < _.length;
        Be++
      ) {
        Ve.index > Be ? ((Et = Ve), (Ve = null)) : (Et = Ve.sibling);
        var gn = T(D, Ve, _[Be], B);
        if (gn === null) {
          Ve === null && (Ve = Et);
          break;
        }
        e && Ve && gn.alternate === null && t(D, Ve),
          (xt = i(gn, xt, Be)),
          tt === null ? (be = gn) : (tt.sibling = gn),
          (tt = gn),
          (Ve = Et);
      }
      if (Be === _.length) {
        if ((n(D, Ve), Jt())) {
          var ln = Be;
          ki(D, ln);
        }
        return be;
      }
      if (Ve === null) {
        for (; Be < _.length; Be++) {
          var na = R(D, _[Be], B);
          na !== null &&
            ((xt = i(na, xt, Be)),
            tt === null ? (be = na) : (tt.sibling = na),
            (tt = na));
        }
        if (Jt()) {
          var _n = Be;
          ki(D, _n);
        }
        return be;
      }
      for (var On = a(D, Ve); Be < _.length; Be++) {
        var bn = O(On, D, Be, _[Be], B);
        bn !== null &&
          (e &&
            bn.alternate !== null &&
            On.delete(bn.key === null ? Be : bn.key),
          (xt = i(bn, xt, Be)),
          tt === null ? (be = bn) : (tt.sibling = bn),
          (tt = bn));
      }
      if (
        (e &&
          On.forEach(function (Ku) {
            return t(D, Ku);
          }),
        Jt())
      ) {
        var Dr = Be;
        ki(D, Dr);
      }
      return be;
    }
    function ee(D, N, _, B) {
      var te = nr(_);
      if (typeof te != "function")
        throw new Error(
          "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
        );
      {
        typeof Symbol == "function" &&
          _[Symbol.toStringTag] === "Generator" &&
          (Xp ||
            c(
              "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
            ),
          (Xp = !0)),
          _.entries === te &&
            (Qp ||
              c(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (Qp = !0));
        var Q = te.call(_);
        if (Q)
          for (var he = null, be = Q.next(); !be.done; be = Q.next()) {
            var tt = be.value;
            he = M(tt, he, D);
          }
      }
      var Ve = te.call(_);
      if (Ve == null)
        throw new Error("An iterable object provided no iterator.");
      for (
        var xt = null,
          Be = null,
          Et = N,
          gn = 0,
          ln = 0,
          na = null,
          _n = Ve.next();
        Et !== null && !_n.done;
        ln++, _n = Ve.next()
      ) {
        Et.index > ln ? ((na = Et), (Et = null)) : (na = Et.sibling);
        var On = T(D, Et, _n.value, B);
        if (On === null) {
          Et === null && (Et = na);
          break;
        }
        e && Et && On.alternate === null && t(D, Et),
          (gn = i(On, gn, ln)),
          Be === null ? (xt = On) : (Be.sibling = On),
          (Be = On),
          (Et = na);
      }
      if (_n.done) {
        if ((n(D, Et), Jt())) {
          var bn = ln;
          ki(D, bn);
        }
        return xt;
      }
      if (Et === null) {
        for (; !_n.done; ln++, _n = Ve.next()) {
          var Dr = R(D, _n.value, B);
          Dr !== null &&
            ((gn = i(Dr, gn, ln)),
            Be === null ? (xt = Dr) : (Be.sibling = Dr),
            (Be = Dr));
        }
        if (Jt()) {
          var Ku = ln;
          ki(D, Ku);
        }
        return xt;
      }
      for (var Po = a(D, Et); !_n.done; ln++, _n = Ve.next()) {
        var Ka = O(Po, D, ln, _n.value, B);
        Ka !== null &&
          (e &&
            Ka.alternate !== null &&
            Po.delete(Ka.key === null ? ln : Ka.key),
          (gn = i(Ka, gn, ln)),
          Be === null ? (xt = Ka) : (Be.sibling = Ka),
          (Be = Ka));
      }
      if (
        (e &&
          Po.forEach(function (gM) {
            return t(D, gM);
          }),
        Jt())
      ) {
        var yM = ln;
        ki(D, yM);
      }
      return xt;
    }
    function oe(D, N, _, B) {
      if (N !== null && N.tag === $) {
        n(D, N.sibling);
        var te = r(N, _);
        return (te.return = D), te;
      }
      n(D, N);
      var Q = xh(_, D.mode, B);
      return (Q.return = D), Q;
    }
    function ie(D, N, _, B) {
      for (var te = _.key, Q = N; Q !== null; ) {
        if (Q.key === te) {
          var he = _.type;
          if (he === V) {
            if (Q.tag === ne) {
              n(D, Q.sibling);
              var be = r(Q, _.props.children);
              return (
                (be.return = D),
                (be._debugSource = _._source),
                (be._debugOwner = _._owner),
                be
              );
            }
          } else if (
            Q.elementType === he ||
            xS(Q, _) ||
            (typeof he == "object" &&
              he !== null &&
              he.$$typeof === Ae &&
              Ug(he) === Q.type)
          ) {
            n(D, Q.sibling);
            var tt = r(Q, _.props);
            return (
              (tt.ref = ho(D, Q, _)),
              (tt.return = D),
              (tt._debugSource = _._source),
              (tt._debugOwner = _._owner),
              tt
            );
          }
          n(D, Q);
          break;
        } else t(D, Q);
        Q = Q.sibling;
      }
      if (_.type === V) {
        var Ve = li(_.props.children, D.mode, B, _.key);
        return (Ve.return = D), Ve;
      } else {
        var xt = Rh(_, D.mode, B);
        return (xt.ref = ho(D, N, _)), (xt.return = D), xt;
      }
    }
    function He(D, N, _, B) {
      for (var te = _.key, Q = N; Q !== null; ) {
        if (Q.key === te)
          if (
            Q.tag === F &&
            Q.stateNode.containerInfo === _.containerInfo &&
            Q.stateNode.implementation === _.implementation
          ) {
            n(D, Q.sibling);
            var he = r(Q, _.children || []);
            return (he.return = D), he;
          } else {
            n(D, Q);
            break;
          }
        else t(D, Q);
        Q = Q.sibling;
      }
      var be = Dh(_, D.mode, B);
      return (be.return = D), be;
    }
    function Oe(D, N, _, B) {
      var te =
        typeof _ == "object" && _ !== null && _.type === V && _.key === null;
      if ((te && (_ = _.props.children), typeof _ == "object" && _ !== null)) {
        switch (_.$$typeof) {
          case za:
            return u(ie(D, N, _, B));
          case E:
            return u(He(D, N, _, B));
          case Ae:
            var Q = _._payload,
              he = _._init;
            return Oe(D, N, he(Q), B);
        }
        if (Ie(_)) return U(D, N, _, B);
        if (nr(_)) return ee(D, N, _, B);
        Ec(D, _);
      }
      return (typeof _ == "string" && _ !== "") || typeof _ == "number"
        ? u(oe(D, N, "" + _, B))
        : (typeof _ == "function" && Cc(D), n(D, N));
    }
    return Oe;
  }
  var Nu = Ng(!0),
    zg = Ng(!1);
  function i_(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child,
        a = qi(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        (n = n.sibling),
          (a = a.sibling = qi(n, n.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
  }
  function u_(e, t) {
    for (var n = e.child; n !== null; ) N1(n, t), (n = n.sibling);
  }
  var mo = {},
    Zr = Gr(mo),
    yo = Gr(mo),
    Tc = Gr(mo);
  function Rc(e) {
    if (e === mo)
      throw new Error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      );
    return e;
  }
  function Hg() {
    var e = Rc(Tc.current);
    return e;
  }
  function Jp(e, t) {
    mn(Tc, t, e), mn(yo, e, e), mn(Zr, mo, e);
    var n = Sx(t);
    hn(Zr, e), mn(Zr, n, e);
  }
  function zu(e) {
    hn(Zr, e), hn(yo, e), hn(Tc, e);
  }
  function ev() {
    var e = Rc(Zr.current);
    return e;
  }
  function Fg(e) {
    Rc(Tc.current);
    var t = Rc(Zr.current),
      n = Ex(t, e.type);
    t !== n && (mn(yo, e, e), mn(Zr, n, e));
  }
  function tv(e) {
    yo.current === e && (hn(Zr, e), hn(yo, e));
  }
  var l_ = 0,
    jg = 1,
    Vg = 1,
    go = 2,
    Oa = Gr(l_);
  function nv(e, t) {
    return (e & t) !== 0;
  }
  function Hu(e) {
    return e & jg;
  }
  function av(e, t) {
    return (e & jg) | t;
  }
  function o_(e, t) {
    return e | t;
  }
  function Jr(e, t) {
    mn(Oa, t, e);
  }
  function Fu(e) {
    hn(Oa, e);
  }
  function s_(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function xc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === Y) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || Wy(a) || sp(a)) return t;
        }
      } else if (t.tag === ke && t.memoizedProps.revealOrder !== void 0) {
        var r = (t.flags & Pe) !== de;
        if (r) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Fn = 0,
    Ut = 1,
    Ia = 2,
    Nt = 4,
    en = 8,
    rv = [];
  function iv() {
    for (var e = 0; e < rv.length; e++) {
      var t = rv[e];
      t._workInProgressVersionPrimary = null;
    }
    rv.length = 0;
  }
  function c_(e, t) {
    var n = t._getVersion,
      a = n(t._source);
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, a])
      : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var Z = p.ReactCurrentDispatcher,
    bo = p.ReactCurrentBatchConfig,
    uv,
    ju;
  uv = new Set();
  var ji = j,
    et = null,
    zt = null,
    Ht = null,
    Dc = !1,
    So = !1,
    Eo = 0,
    f_ = 0,
    d_ = 25,
    H = null,
    va = null,
    ei = -1,
    lv = !1;
  function qe() {
    {
      var e = H;
      va === null ? (va = [e]) : va.push(e);
    }
  }
  function P() {
    {
      var e = H;
      va !== null && (ei++, va[ei] !== e && p_(e));
    }
  }
  function Vu(e) {
    e != null &&
      !Ie(e) &&
      c(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        H,
        typeof e
      );
  }
  function p_(e) {
    {
      var t = Re(et);
      if (!uv.has(t) && (uv.add(t), va !== null)) {
        for (var n = "", a = 30, r = 0; r <= ei; r++) {
          for (
            var i = va[r], u = r === ei ? e : i, s = r + 1 + ". " + i;
            s.length < a;

          )
            s += " ";
          (s +=
            u +
            `
`),
            (n += s);
        }
        c(
          `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
          t,
          n
        );
      }
    }
  }
  function yn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function ov(e, t) {
    if (lv) return !1;
    if (t === null)
      return (
        c(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          H
        ),
        !1
      );
    e.length !== t.length &&
      c(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        H,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jn(e[n], t[n])) return !1;
    return !0;
  }
  function Bu(e, t, n, a, r, i) {
    (ji = i),
      (et = t),
      (va = e !== null ? e._debugHookTypes : null),
      (ei = -1),
      (lv = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = j),
      e !== null && e.memoizedState !== null
        ? (Z.current = ob)
        : va !== null
        ? (Z.current = lb)
        : (Z.current = ub);
    var u = n(a, r);
    if (So) {
      var s = 0;
      do {
        if (((So = !1), (Eo = 0), s >= d_))
          throw new Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        (s += 1),
          (lv = !1),
          (zt = null),
          (Ht = null),
          (t.updateQueue = null),
          (ei = -1),
          (Z.current = sb),
          (u = n(a, r));
      } while (So);
    }
    (Z.current = jc), (t._debugHookTypes = va);
    var f = zt !== null && zt.next !== null;
    if (
      ((ji = j),
      (et = null),
      (zt = null),
      (Ht = null),
      (H = null),
      (va = null),
      (ei = -1),
      e !== null &&
        (e.flags & fr) !== (t.flags & fr) &&
        (e.mode & Ne) !== pe &&
        c(
          "Internal React error: Expected static flag was missing. Please notify the React team."
        ),
      (Dc = !1),
      f)
    )
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return u;
  }
  function $u() {
    var e = Eo !== 0;
    return (Eo = 0), e;
  }
  function Bg(e, t, n) {
    (t.updateQueue = e.updateQueue),
      (t.mode & Va) !== pe
        ? (t.flags &= ~(bs | cr | Ea | je))
        : (t.flags &= ~(Ea | je)),
      (e.lanes = Ds(e.lanes, n));
  }
  function $g() {
    if (((Z.current = jc), Dc)) {
      for (var e = et.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Dc = !1;
    }
    (ji = j),
      (et = null),
      (zt = null),
      (Ht = null),
      (va = null),
      (ei = -1),
      (H = null),
      (tb = !1),
      (So = !1),
      (Eo = 0);
  }
  function Pa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (et.memoizedState = Ht = e) : (Ht = Ht.next = e), Ht;
  }
  function ha() {
    var e;
    if (zt === null) {
      var t = et.alternate;
      t !== null ? (e = t.memoizedState) : (e = null);
    } else e = zt.next;
    var n;
    if ((Ht === null ? (n = et.memoizedState) : (n = Ht.next), n !== null))
      (Ht = n), (n = Ht.next), (zt = e);
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      zt = e;
      var a = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null,
      };
      Ht === null ? (et.memoizedState = Ht = a) : (Ht = Ht.next = a);
    }
    return Ht;
  }
  function Yg() {
    return { lastEffect: null, stores: null };
  }
  function sv(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cv(e, t, n) {
    var a = Pa(),
      r;
    n !== void 0 ? (r = n(t)) : (r = t), (a.memoizedState = a.baseState = r);
    var i = {
      pending: null,
      interleaved: null,
      lanes: j,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: r,
    };
    a.queue = i;
    var u = (i.dispatch = y_.bind(null, et, i));
    return [a.memoizedState, u];
  }
  function fv(e, t, n) {
    var a = ha(),
      r = a.queue;
    if (r === null)
      throw new Error(
        "Should have a queue. This is likely a bug in React. Please file an issue."
      );
    r.lastRenderedReducer = e;
    var i = zt,
      u = i.baseQueue,
      s = r.pending;
    if (s !== null) {
      if (u !== null) {
        var f = u.next,
          m = s.next;
        (u.next = m), (s.next = f);
      }
      i.baseQueue !== u &&
        c(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ),
        (i.baseQueue = u = s),
        (r.pending = null);
    }
    if (u !== null) {
      var y = u.next,
        R = i.baseState,
        T = null,
        O = null,
        M = null,
        U = y;
      do {
        var ee = U.lane;
        if (gu(ji, ee)) {
          if (M !== null) {
            var ie = {
              lane: Qt,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            };
            M = M.next = ie;
          }
          if (U.hasEagerState) R = U.eagerState;
          else {
            var He = U.action;
            R = e(R, He);
          }
        } else {
          var oe = {
            lane: ee,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          };
          M === null ? ((O = M = oe), (T = R)) : (M = M.next = oe),
            (et.lanes = De(et.lanes, ee)),
            Vo(ee);
        }
        U = U.next;
      } while (U !== null && U !== y);
      M === null ? (T = R) : (M.next = O),
        Jn(R, a.memoizedState) || Oo(),
        (a.memoizedState = R),
        (a.baseState = T),
        (a.baseQueue = M),
        (r.lastRenderedState = R);
    }
    var Oe = r.interleaved;
    if (Oe !== null) {
      var D = Oe;
      do {
        var N = D.lane;
        (et.lanes = De(et.lanes, N)), Vo(N), (D = D.next);
      } while (D !== Oe);
    } else u === null && (r.lanes = j);
    var _ = r.dispatch;
    return [a.memoizedState, _];
  }
  function dv(e, t, n) {
    var a = ha(),
      r = a.queue;
    if (r === null)
      throw new Error(
        "Should have a queue. This is likely a bug in React. Please file an issue."
      );
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      u = r.pending,
      s = a.memoizedState;
    if (u !== null) {
      r.pending = null;
      var f = u.next,
        m = f;
      do {
        var y = m.action;
        (s = e(s, y)), (m = m.next);
      } while (m !== f);
      Jn(s, a.memoizedState) || Oo(),
        (a.memoizedState = s),
        a.baseQueue === null && (a.baseState = s),
        (r.lastRenderedState = s);
    }
    return [s, i];
  }
  function lA(e, t, n) {}
  function oA(e, t, n) {}
  function pv(e, t, n) {
    var a = et,
      r = Pa(),
      i,
      u = Jt();
    if (u) {
      if (n === void 0)
        throw new Error(
          "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
        );
      (i = n()),
        ju ||
          (i !== n() &&
            (c(
              "The result of getServerSnapshot should be cached to avoid an infinite loop"
            ),
            (ju = !0)));
    } else {
      if (((i = t()), !ju)) {
        var s = t();
        Jn(i, s) ||
          (c(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ),
          (ju = !0));
      }
      var f = af();
      if (f === null)
        throw new Error(
          "Expected a work-in-progress root. This is a bug in React. Please file an issue."
        );
      xs(f, ji) || Ig(a, t, i);
    }
    r.memoizedState = i;
    var m = { value: i, getSnapshot: t };
    return (
      (r.queue = m),
      Ac(qg.bind(null, a, m, e), [e]),
      (a.flags |= Ea),
      Co(Ut | en, Pg.bind(null, a, m, i, t), void 0, null),
      i
    );
  }
  function _c(e, t, n) {
    var a = et,
      r = ha(),
      i = t();
    if (!ju) {
      var u = t();
      Jn(i, u) ||
        (c(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ),
        (ju = !0));
    }
    var s = r.memoizedState,
      f = !Jn(s, i);
    f && ((r.memoizedState = i), Oo());
    var m = r.queue;
    if (
      (Ro(qg.bind(null, a, m, e), [e]),
      m.getSnapshot !== t || f || (Ht !== null && Ht.memoizedState.tag & Ut))
    ) {
      (a.flags |= Ea), Co(Ut | en, Pg.bind(null, a, m, i, t), void 0, null);
      var y = af();
      if (y === null)
        throw new Error(
          "Expected a work-in-progress root. This is a bug in React. Please file an issue."
        );
      xs(y, ji) || Ig(a, t, i);
    }
    return i;
  }
  function Ig(e, t, n) {
    e.flags |= gs;
    var a = { getSnapshot: t, value: n },
      r = et.updateQueue;
    if (r === null) (r = Yg()), (et.updateQueue = r), (r.stores = [a]);
    else {
      var i = r.stores;
      i === null ? (r.stores = [a]) : i.push(a);
    }
  }
  function Pg(e, t, n, a) {
    (t.value = n), (t.getSnapshot = a), Gg(t) && Qg(e);
  }
  function qg(e, t, n) {
    var a = function () {
      Gg(t) && Qg(e);
    };
    return n(a);
  }
  function Gg(e) {
    var t = e.getSnapshot,
      n = e.value;
    try {
      var a = t();
      return !Jn(n, a);
    } catch {
      return !0;
    }
  }
  function Qg(e) {
    var t = Hn(e, ye);
    t !== null && Bt(t, e, ye, st);
  }
  function Oc(e) {
    var t = Pa();
    typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e);
    var n = {
      pending: null,
      interleaved: null,
      lanes: j,
      dispatch: null,
      lastRenderedReducer: sv,
      lastRenderedState: e,
    };
    t.queue = n;
    var a = (n.dispatch = g_.bind(null, et, n));
    return [t.memoizedState, a];
  }
  function vv(e) {
    return fv(sv);
  }
  function hv(e) {
    return dv(sv);
  }
  function Co(e, t, n, a) {
    var r = { tag: e, create: t, destroy: n, deps: a, next: null },
      i = et.updateQueue;
    if (i === null)
      (i = Yg()), (et.updateQueue = i), (i.lastEffect = r.next = r);
    else {
      var u = i.lastEffect;
      if (u === null) i.lastEffect = r.next = r;
      else {
        var s = u.next;
        (u.next = r), (r.next = s), (i.lastEffect = r);
      }
    }
    return r;
  }
  function mv(e) {
    var t = Pa();
    {
      var n = { current: e };
      return (t.memoizedState = n), n;
    }
  }
  function Mc(e) {
    var t = ha();
    return t.memoizedState;
  }
  function To(e, t, n, a) {
    var r = Pa(),
      i = a === void 0 ? null : a;
    (et.flags |= e), (r.memoizedState = Co(Ut | t, n, void 0, i));
  }
  function wc(e, t, n, a) {
    var r = ha(),
      i = a === void 0 ? null : a,
      u = void 0;
    if (zt !== null) {
      var s = zt.memoizedState;
      if (((u = s.destroy), i !== null)) {
        var f = s.deps;
        if (ov(i, f)) {
          r.memoizedState = Co(t, n, u, i);
          return;
        }
      }
    }
    (et.flags |= e), (r.memoizedState = Co(Ut | t, n, u, i));
  }
  function Ac(e, t) {
    return (et.mode & Va) !== pe
      ? To(bs | Ea | td, en, e, t)
      : To(Ea | td, en, e, t);
  }
  function Ro(e, t) {
    return wc(Ea, en, e, t);
  }
  function yv(e, t) {
    return To(je, Ia, e, t);
  }
  function Lc(e, t) {
    return wc(je, Ia, e, t);
  }
  function gv(e, t) {
    var n = je;
    return (n |= Ci), (et.mode & Va) !== pe && (n |= cr), To(n, Nt, e, t);
  }
  function kc(e, t) {
    return wc(je, Nt, e, t);
  }
  function Xg(e, t) {
    if (typeof t == "function") {
      var n = t,
        a = e();
      return (
        n(a),
        function () {
          n(null);
        }
      );
    } else if (t != null) {
      var r = t;
      r.hasOwnProperty("current") ||
        c(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(r).join(", ") + "}"
        );
      var i = e();
      return (
        (r.current = i),
        function () {
          r.current = null;
        }
      );
    }
  }
  function bv(e, t, n) {
    typeof t != "function" &&
      c(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      );
    var a = n != null ? n.concat([e]) : null,
      r = je;
    return (
      (r |= Ci),
      (et.mode & Va) !== pe && (r |= cr),
      To(r, Nt, Xg.bind(null, t, e), a)
    );
  }
  function Uc(e, t, n) {
    typeof t != "function" &&
      c(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      );
    var a = n != null ? n.concat([e]) : null;
    return wc(je, Nt, Xg.bind(null, t, e), a);
  }
  function v_(e, t) {}
  var Nc = v_;
  function Sv(e, t) {
    var n = Pa(),
      a = t === void 0 ? null : t;
    return (n.memoizedState = [e, a]), e;
  }
  function zc(e, t) {
    var n = ha(),
      a = t === void 0 ? null : t,
      r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (ov(a, i)) return r[0];
    }
    return (n.memoizedState = [e, a]), e;
  }
  function Ev(e, t) {
    var n = Pa(),
      a = t === void 0 ? null : t,
      r = e();
    return (n.memoizedState = [r, a]), r;
  }
  function Hc(e, t) {
    var n = ha(),
      a = t === void 0 ? null : t,
      r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (ov(a, i)) return r[0];
    }
    var u = e();
    return (n.memoizedState = [u, a]), u;
  }
  function Cv(e) {
    var t = Pa();
    return (t.memoizedState = e), e;
  }
  function Wg(e) {
    var t = ha(),
      n = zt,
      a = n.memoizedState;
    return Zg(t, a, e);
  }
  function Kg(e) {
    var t = ha();
    if (zt === null) return (t.memoizedState = e), e;
    var n = zt.memoizedState;
    return Zg(t, n, e);
  }
  function Zg(e, t, n) {
    var a = !W0(ji);
    if (a) {
      if (!Jn(n, t)) {
        var r = Bm();
        (et.lanes = De(et.lanes, r)), Vo(r), (e.baseState = !0);
      }
      return t;
    } else
      return (
        e.baseState && ((e.baseState = !1), Oo()), (e.memoizedState = n), n
      );
  }
  function h_(e, t, n) {
    var a = Ta();
    Xt(iT(a, pr)), e(!0);
    var r = bo.transition;
    bo.transition = {};
    var i = bo.transition;
    bo.transition._updatedFibers = new Set();
    try {
      e(!1), t();
    } finally {
      if ((Xt(a), (bo.transition = r), r === null && i._updatedFibers)) {
        var u = i._updatedFibers.size;
        u > 10 &&
          g(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ),
          i._updatedFibers.clear();
      }
    }
  }
  function Tv() {
    var e = Oc(!1),
      t = e[0],
      n = e[1],
      a = h_.bind(null, n),
      r = Pa();
    return (r.memoizedState = a), [t, a];
  }
  function Jg() {
    var e = vv(),
      t = e[0],
      n = ha(),
      a = n.memoizedState;
    return [t, a];
  }
  function eb() {
    var e = hv(),
      t = e[0],
      n = ha(),
      a = n.memoizedState;
    return [t, a];
  }
  var tb = !1;
  function m_() {
    return tb;
  }
  function Rv() {
    var e = Pa(),
      t = af(),
      n = t.identifierPrefix,
      a;
    if (Jt()) {
      var r = wD();
      a = ":" + n + "R" + r;
      var i = Eo++;
      i > 0 && (a += "H" + i.toString(32)), (a += ":");
    } else {
      var u = f_++;
      a = ":" + n + "r" + u.toString(32) + ":";
    }
    return (e.memoizedState = a), a;
  }
  function Fc() {
    var e = ha(),
      t = e.memoizedState;
    return t;
  }
  function y_(e, t, n) {
    typeof arguments[3] == "function" &&
      c(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = ii(e),
      r = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (nb(e)) ab(t, r);
    else {
      var i = Sg(e, t, r, a);
      if (i !== null) {
        var u = Dn();
        Bt(i, e, a, u), rb(i, t, a);
      }
    }
    ib(e, a);
  }
  function g_(e, t, n) {
    typeof arguments[3] == "function" &&
      c(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = ii(e),
      r = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (nb(e)) ab(t, r);
    else {
      var i = e.alternate;
      if (e.lanes === j && (i === null || i.lanes === j)) {
        var u = t.lastRenderedReducer;
        if (u !== null) {
          var s;
          (s = Z.current), (Z.current = Ma);
          try {
            var f = t.lastRenderedState,
              m = u(f, n);
            if (((r.hasEagerState = !0), (r.eagerState = m), Jn(m, f))) {
              WD(e, t, r, a);
              return;
            }
          } catch {
          } finally {
            Z.current = s;
          }
        }
      }
      var y = Sg(e, t, r, a);
      if (y !== null) {
        var R = Dn();
        Bt(y, e, a, R), rb(y, t, a);
      }
    }
    ib(e, a);
  }
  function nb(e) {
    var t = e.alternate;
    return e === et || (t !== null && t === et);
  }
  function ab(e, t) {
    So = Dc = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function rb(e, t, n) {
    if (Vm(n)) {
      var a = t.lanes;
      a = $m(a, e.pendingLanes);
      var r = De(a, n);
      (t.lanes = r), Ad(e, r);
    }
  }
  function ib(e, t, n) {
    ud(e, t);
  }
  var jc = {
      readContext: At,
      useCallback: yn,
      useContext: yn,
      useEffect: yn,
      useImperativeHandle: yn,
      useInsertionEffect: yn,
      useLayoutEffect: yn,
      useMemo: yn,
      useReducer: yn,
      useRef: yn,
      useState: yn,
      useDebugValue: yn,
      useDeferredValue: yn,
      useTransition: yn,
      useMutableSource: yn,
      useSyncExternalStore: yn,
      useId: yn,
      unstable_isNewReconciler: ht,
    },
    ub = null,
    lb = null,
    ob = null,
    sb = null,
    qa = null,
    Ma = null,
    Vc = null;
  {
    var xv = function () {
        c(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      },
      ge = function () {
        c(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
        );
      };
    (ub = {
      readContext: function (e) {
        return At(e);
      },
      useCallback: function (e, t) {
        return (H = "useCallback"), qe(), Vu(t), Sv(e, t);
      },
      useContext: function (e) {
        return (H = "useContext"), qe(), At(e);
      },
      useEffect: function (e, t) {
        return (H = "useEffect"), qe(), Vu(t), Ac(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return (H = "useImperativeHandle"), qe(), Vu(n), bv(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return (H = "useInsertionEffect"), qe(), Vu(t), yv(e, t);
      },
      useLayoutEffect: function (e, t) {
        return (H = "useLayoutEffect"), qe(), Vu(t), gv(e, t);
      },
      useMemo: function (e, t) {
        (H = "useMemo"), qe(), Vu(t);
        var n = Z.current;
        Z.current = qa;
        try {
          return Ev(e, t);
        } finally {
          Z.current = n;
        }
      },
      useReducer: function (e, t, n) {
        (H = "useReducer"), qe();
        var a = Z.current;
        Z.current = qa;
        try {
          return cv(e, t, n);
        } finally {
          Z.current = a;
        }
      },
      useRef: function (e) {
        return (H = "useRef"), qe(), mv(e);
      },
      useState: function (e) {
        (H = "useState"), qe();
        var t = Z.current;
        Z.current = qa;
        try {
          return Oc(e);
        } finally {
          Z.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return (H = "useDebugValue"), qe(), void 0;
      },
      useDeferredValue: function (e) {
        return (H = "useDeferredValue"), qe(), Cv(e);
      },
      useTransition: function () {
        return (H = "useTransition"), qe(), Tv();
      },
      useMutableSource: function (e, t, n) {
        return (H = "useMutableSource"), qe(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return (H = "useSyncExternalStore"), qe(), pv(e, t, n);
      },
      useId: function () {
        return (H = "useId"), qe(), Rv();
      },
      unstable_isNewReconciler: ht,
    }),
      (lb = {
        readContext: function (e) {
          return At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), P(), Sv(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), P(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), P(), Ac(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), P(), bv(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), P(), yv(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), P(), gv(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), P();
          var n = Z.current;
          Z.current = qa;
          try {
            return Ev(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), P();
          var a = Z.current;
          Z.current = qa;
          try {
            return cv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), P(), mv(e);
        },
        useState: function (e) {
          (H = "useState"), P();
          var t = Z.current;
          Z.current = qa;
          try {
            return Oc(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), P(), void 0;
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), P(), Cv(e);
        },
        useTransition: function () {
          return (H = "useTransition"), P(), Tv();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), P(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), P(), pv(e, t, n);
        },
        useId: function () {
          return (H = "useId"), P(), Rv();
        },
        unstable_isNewReconciler: ht,
      }),
      (ob = {
        readContext: function (e) {
          return At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), P(), zc(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), P(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), P(), Ro(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), P(), Uc(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), P(), Lc(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), P(), kc(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), P();
          var n = Z.current;
          Z.current = Ma;
          try {
            return Hc(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), P();
          var a = Z.current;
          Z.current = Ma;
          try {
            return fv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), P(), Mc();
        },
        useState: function (e) {
          (H = "useState"), P();
          var t = Z.current;
          Z.current = Ma;
          try {
            return vv(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), P(), Nc();
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), P(), Wg(e);
        },
        useTransition: function () {
          return (H = "useTransition"), P(), Jg();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), P(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), P(), _c(e, t);
        },
        useId: function () {
          return (H = "useId"), P(), Fc();
        },
        unstable_isNewReconciler: ht,
      }),
      (sb = {
        readContext: function (e) {
          return At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), P(), zc(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), P(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), P(), Ro(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), P(), Uc(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), P(), Lc(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), P(), kc(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), P();
          var n = Z.current;
          Z.current = Vc;
          try {
            return Hc(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), P();
          var a = Z.current;
          Z.current = Vc;
          try {
            return dv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), P(), Mc();
        },
        useState: function (e) {
          (H = "useState"), P();
          var t = Z.current;
          Z.current = Vc;
          try {
            return hv(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), P(), Nc();
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), P(), Kg(e);
        },
        useTransition: function () {
          return (H = "useTransition"), P(), eb();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), P(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), P(), _c(e, t);
        },
        useId: function () {
          return (H = "useId"), P(), Fc();
        },
        unstable_isNewReconciler: ht,
      }),
      (qa = {
        readContext: function (e) {
          return xv(), At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), ge(), qe(), Sv(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), ge(), qe(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), ge(), qe(), Ac(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), ge(), qe(), bv(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), ge(), qe(), yv(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), ge(), qe(), gv(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), ge(), qe();
          var n = Z.current;
          Z.current = qa;
          try {
            return Ev(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), ge(), qe();
          var a = Z.current;
          Z.current = qa;
          try {
            return cv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), ge(), qe(), mv(e);
        },
        useState: function (e) {
          (H = "useState"), ge(), qe();
          var t = Z.current;
          Z.current = qa;
          try {
            return Oc(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), ge(), qe(), void 0;
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), ge(), qe(), Cv(e);
        },
        useTransition: function () {
          return (H = "useTransition"), ge(), qe(), Tv();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), ge(), qe(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), ge(), qe(), pv(e, t, n);
        },
        useId: function () {
          return (H = "useId"), ge(), qe(), Rv();
        },
        unstable_isNewReconciler: ht,
      }),
      (Ma = {
        readContext: function (e) {
          return xv(), At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), ge(), P(), zc(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), ge(), P(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), ge(), P(), Ro(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), ge(), P(), Uc(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), ge(), P(), Lc(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), ge(), P(), kc(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), ge(), P();
          var n = Z.current;
          Z.current = Ma;
          try {
            return Hc(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), ge(), P();
          var a = Z.current;
          Z.current = Ma;
          try {
            return fv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), ge(), P(), Mc();
        },
        useState: function (e) {
          (H = "useState"), ge(), P();
          var t = Z.current;
          Z.current = Ma;
          try {
            return vv(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), ge(), P(), Nc();
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), ge(), P(), Wg(e);
        },
        useTransition: function () {
          return (H = "useTransition"), ge(), P(), Jg();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), ge(), P(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), ge(), P(), _c(e, t);
        },
        useId: function () {
          return (H = "useId"), ge(), P(), Fc();
        },
        unstable_isNewReconciler: ht,
      }),
      (Vc = {
        readContext: function (e) {
          return xv(), At(e);
        },
        useCallback: function (e, t) {
          return (H = "useCallback"), ge(), P(), zc(e, t);
        },
        useContext: function (e) {
          return (H = "useContext"), ge(), P(), At(e);
        },
        useEffect: function (e, t) {
          return (H = "useEffect"), ge(), P(), Ro(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (H = "useImperativeHandle"), ge(), P(), Uc(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          return (H = "useInsertionEffect"), ge(), P(), Lc(e, t);
        },
        useLayoutEffect: function (e, t) {
          return (H = "useLayoutEffect"), ge(), P(), kc(e, t);
        },
        useMemo: function (e, t) {
          (H = "useMemo"), ge(), P();
          var n = Z.current;
          Z.current = Ma;
          try {
            return Hc(e, t);
          } finally {
            Z.current = n;
          }
        },
        useReducer: function (e, t, n) {
          (H = "useReducer"), ge(), P();
          var a = Z.current;
          Z.current = Ma;
          try {
            return dv(e, t, n);
          } finally {
            Z.current = a;
          }
        },
        useRef: function (e) {
          return (H = "useRef"), ge(), P(), Mc();
        },
        useState: function (e) {
          (H = "useState"), ge(), P();
          var t = Z.current;
          Z.current = Ma;
          try {
            return hv(e);
          } finally {
            Z.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return (H = "useDebugValue"), ge(), P(), Nc();
        },
        useDeferredValue: function (e) {
          return (H = "useDeferredValue"), ge(), P(), Kg(e);
        },
        useTransition: function () {
          return (H = "useTransition"), ge(), P(), eb();
        },
        useMutableSource: function (e, t, n) {
          return (H = "useMutableSource"), ge(), P(), void 0;
        },
        useSyncExternalStore: function (e, t, n) {
          return (H = "useSyncExternalStore"), ge(), P(), _c(e, t);
        },
        useId: function () {
          return (H = "useId"), ge(), P(), Fc();
        },
        unstable_isNewReconciler: ht,
      });
  }
  var ti = o.unstable_now,
    cb = 0,
    Bc = -1,
    xo = -1,
    $c = -1,
    Dv = !1,
    Yc = !1;
  function fb() {
    return Dv;
  }
  function b_() {
    Yc = !0;
  }
  function S_() {
    (Dv = !1), (Yc = !1);
  }
  function E_() {
    (Dv = Yc), (Yc = !1);
  }
  function db() {
    return cb;
  }
  function pb() {
    cb = ti();
  }
  function _v(e) {
    (xo = ti()), e.actualStartTime < 0 && (e.actualStartTime = ti());
  }
  function vb(e) {
    xo = -1;
  }
  function Ic(e, t) {
    if (xo >= 0) {
      var n = ti() - xo;
      (e.actualDuration += n), t && (e.selfBaseDuration = n), (xo = -1);
    }
  }
  function Ga(e) {
    if (Bc >= 0) {
      var t = ti() - Bc;
      Bc = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case k:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case K:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function Ov(e) {
    if ($c >= 0) {
      var t = ti() - $c;
      $c = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case k:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case K:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function Qa() {
    Bc = ti();
  }
  function Mv() {
    $c = ti();
  }
  function wv(e) {
    for (var t = e.child; t; )
      (e.actualDuration += t.actualDuration), (t = t.sibling);
  }
  function Vi(e, t) {
    return { value: e, source: t, stack: dl(t), digest: null };
  }
  function Av(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n != null ? n : null,
      digest: t != null ? t : null,
    };
  }
  function C_(e, t) {
    return !0;
  }
  function Lv(e, t) {
    try {
      var n = C_(e, t);
      if (n === !1) return;
      var a = t.value,
        r = t.source,
        i = t.stack,
        u = i !== null ? i : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === C) return;
        console.error(a);
      }
      var s = r ? Re(r) : null,
        f = s
          ? "The above error occurred in the <" + s + "> component:"
          : "The above error occurred in one of your React components:",
        m;
      if (e.tag === k)
        m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var y = Re(e) || "Anonymous";
        m =
          "React will try to recreate this component tree from scratch " +
          ("using the error boundary you provided, " + y + ".");
      }
      var R =
        f +
        `
` +
        u +
        `

` +
        ("" + m);
      console.error(R);
    } catch (T) {
      setTimeout(function () {
        throw T;
      });
    }
  }
  var T_ = typeof WeakMap == "function" ? WeakMap : Map;
  function hb(e, t, n) {
    var a = Sr(st, n);
    (a.tag = Lp), (a.payload = { element: null });
    var r = t.value;
    return (
      (a.callback = function () {
        h1(r), Lv(e, t);
      }),
      a
    );
  }
  function kv(e, t, n) {
    var a = Sr(st, n);
    a.tag = Lp;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (a.payload = function () {
        return r(i);
      }),
        (a.callback = function () {
          DS(e), Lv(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (a.callback = function () {
          DS(e), Lv(e, t), typeof r != "function" && p1(this);
          var f = t.value,
            m = t.stack;
          this.componentDidCatch(f, { componentStack: m !== null ? m : "" }),
            typeof r != "function" &&
              (Wn(e.lanes, ye) ||
                c(
                  "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                  Re(e) || "Unknown"
                ));
        }),
      a
    );
  }
  function mb(e, t, n) {
    var a = e.pingCache,
      r;
    if (
      (a === null
        ? ((a = e.pingCache = new T_()), (r = new Set()), a.set(t, r))
        : ((r = a.get(t)), r === void 0 && ((r = new Set()), a.set(t, r))),
      !r.has(n))
    ) {
      r.add(n);
      var i = m1.bind(null, e, t, n);
      Ca && Bo(e, n), t.then(i, i);
    }
  }
  function R_(e, t, n, a) {
    var r = e.updateQueue;
    if (r === null) {
      var i = new Set();
      i.add(n), (e.updateQueue = i);
    } else r.add(n);
  }
  function x_(e, t) {
    var n = e.tag;
    if ((e.mode & Ne) === pe && (n === b || n === J || n === Ee)) {
      var a = e.alternate;
      a
        ? ((e.updateQueue = a.updateQueue),
          (e.memoizedState = a.memoizedState),
          (e.lanes = a.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null));
    }
  }
  function yb(e) {
    var t = e;
    do {
      if (t.tag === Y && s_(t)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function gb(e, t, n, a, r) {
    if ((e.mode & Ne) === pe) {
      if (e === t) e.flags |= Tn;
      else {
        if (
          ((e.flags |= Pe),
          (n.flags |= Jf),
          (n.flags &= ~(i0 | Rl)),
          n.tag === C)
        ) {
          var i = n.alternate;
          if (i === null) n.tag = Ct;
          else {
            var u = Sr(st, ye);
            (u.tag = vc), Kr(n, u, ye);
          }
        }
        n.lanes = De(n.lanes, ye);
      }
      return e;
    }
    return (e.flags |= Tn), (e.lanes = r), e;
  }
  function D_(e, t, n, a, r) {
    if (
      ((n.flags |= Rl),
      Ca && Bo(e, r),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      var i = a;
      x_(n), Jt() && n.mode & Ne && og();
      var u = yb(t);
      if (u !== null) {
        (u.flags &= ~or),
          gb(u, t, n, e, r),
          u.mode & Ne && mb(e, i, r),
          R_(u, e, i);
        return;
      } else {
        if (!X0(r)) {
          mb(e, i, r), dh();
          return;
        }
        var s = new Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
        a = s;
      }
    } else if (Jt() && n.mode & Ne) {
      og();
      var f = yb(t);
      if (f !== null) {
        (f.flags & Tn) === de && (f.flags |= or),
          gb(f, t, n, e, r),
          xp(Vi(a, n));
        return;
      }
    }
    (a = Vi(a, n)), i1(a);
    var m = t;
    do {
      switch (m.tag) {
        case k: {
          var y = a;
          m.flags |= Tn;
          var R = Ll(r);
          m.lanes = De(m.lanes, R);
          var T = hb(m, y, R);
          Np(m, T);
          return;
        }
        case C:
          var O = a,
            M = m.type,
            U = m.stateNode;
          if (
            (m.flags & Pe) === de &&
            (typeof M.getDerivedStateFromError == "function" ||
              (U !== null &&
                typeof U.componentDidCatch == "function" &&
                !yS(U)))
          ) {
            m.flags |= Tn;
            var ee = Ll(r);
            m.lanes = De(m.lanes, ee);
            var oe = kv(m, O, ee);
            Np(m, oe);
            return;
          }
          break;
      }
      m = m.return;
    } while (m !== null);
  }
  function __() {
    return null;
  }
  var Do = p.ReactCurrentOwner,
    wa = !1,
    Uv,
    _o,
    Nv,
    zv,
    Hv,
    Bi,
    Fv,
    Pc;
  (Uv = {}),
    (_o = {}),
    (Nv = {}),
    (zv = {}),
    (Hv = {}),
    (Bi = !1),
    (Fv = {}),
    (Pc = {});
  function Rn(e, t, n, a) {
    e === null
      ? (t.child = zg(t, null, n, a))
      : (t.child = Nu(t, e.child, n, a));
  }
  function O_(e, t, n, a) {
    (t.child = Nu(t, e.child, null, a)), (t.child = Nu(t, null, n, a));
  }
  function bb(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ra(i, a, "prop", Ye(n));
    }
    var u = n.render,
      s = t.ref,
      f,
      m;
    Uu(t, r), Dl(t);
    {
      if (
        ((Do.current = t),
        Qn(!0),
        (f = Bu(e, t, u, a, s, r)),
        (m = $u()),
        t.mode & wt)
      ) {
        Gt(!0);
        try {
          (f = Bu(e, t, u, a, s, r)), (m = $u());
        } finally {
          Gt(!1);
        }
      }
      Qn(!1);
    }
    return (
      vu(),
      e !== null && !wa
        ? (Bg(e, t, r), Er(e, t, r))
        : (Jt() && m && bp(t), (t.flags |= fu), Rn(e, t, f, r), t.child)
    );
  }
  function Sb(e, t, n, a, r) {
    if (e === null) {
      var i = n.type;
      if (k1(i) && n.compare === null && n.defaultProps === void 0) {
        var u = i;
        return (
          (u = Wu(i)), (t.tag = Ee), (t.type = u), Bv(t, i), Eb(e, t, u, a, r)
        );
      }
      {
        var s = i.propTypes;
        s && Ra(s, a, "prop", Ye(i));
      }
      var f = Th(n.type, null, a, t, t.mode, r);
      return (f.ref = t.ref), (f.return = t), (t.child = f), f;
    }
    {
      var m = n.type,
        y = m.propTypes;
      y && Ra(y, a, "prop", Ye(m));
    }
    var R = e.child,
      T = Gv(e, r);
    if (!T) {
      var O = R.memoizedProps,
        M = n.compare;
      if (((M = M !== null ? M : Gl), M(O, a) && e.ref === t.ref))
        return Er(e, t, r);
    }
    t.flags |= fu;
    var U = qi(R, a);
    return (U.ref = t.ref), (U.return = t), (t.child = U), U;
  }
  function Eb(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = t.elementType;
      if (i.$$typeof === Ae) {
        var u = i,
          s = u._payload,
          f = u._init;
        try {
          i = f(s);
        } catch {
          i = null;
        }
        var m = i && i.propTypes;
        m && Ra(m, a, "prop", Ye(i));
      }
    }
    if (e !== null) {
      var y = e.memoizedProps;
      if (Gl(y, a) && e.ref === t.ref && t.type === e.type)
        if (((wa = !1), (t.pendingProps = a = y), Gv(e, r)))
          (e.flags & Jf) !== de && (wa = !0);
        else return (t.lanes = e.lanes), Er(e, t, r);
    }
    return jv(e, t, n, a, r);
  }
  function Cb(e, t, n) {
    var a = t.pendingProps,
      r = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || sn)
      if ((t.mode & Ne) === pe) {
        var u = { baseLanes: j, cachePool: null, transitions: null };
        (t.memoizedState = u), rf(t, n);
      } else if (Wn(n, Xn)) {
        var R = { baseLanes: j, cachePool: null, transitions: null };
        t.memoizedState = R;
        var T = i !== null ? i.baseLanes : n;
        rf(t, T);
      } else {
        var s = null,
          f;
        if (i !== null) {
          var m = i.baseLanes;
          f = De(m, n);
        } else f = n;
        t.lanes = t.childLanes = Xn;
        var y = { baseLanes: f, cachePool: s, transitions: null };
        return (t.memoizedState = y), (t.updateQueue = null), rf(t, f), null;
      }
    else {
      var O;
      i !== null
        ? ((O = De(i.baseLanes, n)), (t.memoizedState = null))
        : (O = n),
        rf(t, O);
    }
    return Rn(e, t, r, n), t.child;
  }
  function M_(e, t, n) {
    var a = t.pendingProps;
    return Rn(e, t, a, n), t.child;
  }
  function w_(e, t, n) {
    var a = t.pendingProps.children;
    return Rn(e, t, a, n), t.child;
  }
  function A_(e, t, n) {
    {
      t.flags |= je;
      {
        var a = t.stateNode;
        (a.effectDuration = 0), (a.passiveEffectDuration = 0);
      }
    }
    var r = t.pendingProps,
      i = r.children;
    return Rn(e, t, i, n), t.child;
  }
  function Tb(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= jr), (t.flags |= ed));
  }
  function jv(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ra(i, a, "prop", Ye(n));
    }
    var u;
    {
      var s = Ou(t, n, !0);
      u = Mu(t, s);
    }
    var f, m;
    Uu(t, r), Dl(t);
    {
      if (
        ((Do.current = t),
        Qn(!0),
        (f = Bu(e, t, n, a, u, r)),
        (m = $u()),
        t.mode & wt)
      ) {
        Gt(!0);
        try {
          (f = Bu(e, t, n, a, u, r)), (m = $u());
        } finally {
          Gt(!1);
        }
      }
      Qn(!1);
    }
    return (
      vu(),
      e !== null && !wa
        ? (Bg(e, t, r), Er(e, t, r))
        : (Jt() && m && bp(t), (t.flags |= fu), Rn(e, t, f, r), t.child)
    );
  }
  function Rb(e, t, n, a, r) {
    {
      switch (Q1(t)) {
        case !1: {
          var i = t.stateNode,
            u = t.type,
            s = new u(t.memoizedProps, i.context),
            f = s.state;
          i.updater.enqueueSetState(i, f, null);
          break;
        }
        case !0: {
          (t.flags |= Pe), (t.flags |= Tn);
          var m = new Error("Simulated error coming from DevTools"),
            y = Ll(r);
          t.lanes = De(t.lanes, y);
          var R = kv(t, Vi(m, t), y);
          Np(t, R);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var T = n.propTypes;
        T && Ra(T, a, "prop", Ye(n));
      }
    }
    var O;
    Ya(n) ? ((O = !0), ac(t)) : (O = !1), Uu(t, r);
    var M = t.stateNode,
      U;
    M === null
      ? (Gc(e, t), Ag(t, n, a), Gp(t, n, a, r), (U = !0))
      : e === null
      ? (U = a_(t, n, a, r))
      : (U = r_(e, t, n, a, r));
    var ee = Vv(e, t, n, U, O, r);
    {
      var oe = t.stateNode;
      U &&
        oe.props !== a &&
        (Bi ||
          c(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Re(t) || "a component"
          ),
        (Bi = !0));
    }
    return ee;
  }
  function Vv(e, t, n, a, r, i) {
    Tb(e, t);
    var u = (t.flags & Pe) !== de;
    if (!a && !u) return r && rg(t, n, !1), Er(e, t, i);
    var s = t.stateNode;
    Do.current = t;
    var f;
    if (u && typeof n.getDerivedStateFromError != "function") (f = null), vb();
    else {
      Dl(t);
      {
        if ((Qn(!0), (f = s.render()), t.mode & wt)) {
          Gt(!0);
          try {
            s.render();
          } finally {
            Gt(!1);
          }
        }
        Qn(!1);
      }
      vu();
    }
    return (
      (t.flags |= fu),
      e !== null && u ? O_(e, t, f, i) : Rn(e, t, f, i),
      (t.memoizedState = s.state),
      r && rg(t, n, !0),
      t.child
    );
  }
  function xb(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ng(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ng(e, t.context, !1),
      Jp(e, t.containerInfo);
  }
  function L_(e, t, n) {
    if ((xb(t), e === null))
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps,
      r = t.memoizedState,
      i = r.element;
    Tg(e, t), gc(t, a, null, n);
    var u = t.memoizedState;
    t.stateNode;
    var s = u.element;
    if (r.isDehydrated) {
      var f = {
          element: s,
          isDehydrated: !1,
          cache: u.cache,
          pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
          transitions: u.transitions,
        },
        m = t.updateQueue;
      if (((m.baseState = f), (t.memoizedState = f), t.flags & or)) {
        var y = Vi(
          new Error(
            "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."
          ),
          t
        );
        return Db(e, t, s, n, y);
      } else if (s !== i) {
        var R = Vi(
          new Error(
            "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
          ),
          t
        );
        return Db(e, t, s, n, R);
      } else {
        zD(t);
        var T = zg(t, null, s, n);
        t.child = T;
        for (var O = T; O; ) (O.flags = (O.flags & ~Mt) | sr), (O = O.sibling);
      }
    } else {
      if ((Lu(), s === i)) return Er(e, t, n);
      Rn(e, t, s, n);
    }
    return t.child;
  }
  function Db(e, t, n, a, r) {
    return Lu(), xp(r), (t.flags |= or), Rn(e, t, n, a), t.child;
  }
  function k_(e, t, n) {
    Fg(t), e === null && Rp(t);
    var a = t.type,
      r = t.pendingProps,
      i = e !== null ? e.memoizedProps : null,
      u = r.children,
      s = ip(a, r);
    return (
      s ? (u = null) : i !== null && ip(a, i) && (t.flags |= Tl),
      Tb(e, t),
      Rn(e, t, u, n),
      t.child
    );
  }
  function U_(e, t) {
    return e === null && Rp(t), null;
  }
  function N_(e, t, n, a) {
    Gc(e, t);
    var r = t.pendingProps,
      i = n,
      u = i._payload,
      s = i._init,
      f = s(u);
    t.type = f;
    var m = (t.tag = U1(f)),
      y = _a(f, r),
      R;
    switch (m) {
      case b:
        return Bv(t, f), (t.type = f = Wu(f)), (R = jv(null, t, f, y, a)), R;
      case C:
        return (t.type = f = yh(f)), (R = Rb(null, t, f, y, a)), R;
      case J:
        return (t.type = f = gh(f)), (R = bb(null, t, f, y, a)), R;
      case Fe: {
        if (t.type !== t.elementType) {
          var T = f.propTypes;
          T && Ra(T, y, "prop", Ye(f));
        }
        return (R = Sb(null, t, f, _a(f.type, y), a)), R;
      }
    }
    var O = "";
    throw (
      (f !== null &&
        typeof f == "object" &&
        f.$$typeof === Ae &&
        (O = " Did you wrap a component in React.lazy() more than once?"),
      new Error(
        "Element type is invalid. Received a promise that resolves to: " +
          f +
          ". " +
          ("Lazy element type must resolve to a class or function." + O)
      ))
    );
  }
  function z_(e, t, n, a, r) {
    Gc(e, t), (t.tag = C);
    var i;
    return (
      Ya(n) ? ((i = !0), ac(t)) : (i = !1),
      Uu(t, r),
      Ag(t, n, a),
      Gp(t, n, a, r),
      Vv(null, t, n, !0, i, r)
    );
  }
  function H_(e, t, n, a) {
    Gc(e, t);
    var r = t.pendingProps,
      i;
    {
      var u = Ou(t, n, !1);
      i = Mu(t, u);
    }
    Uu(t, a);
    var s, f;
    Dl(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var m = Ye(n) || "Unknown";
        Uv[m] ||
          (c(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            m,
            m
          ),
          (Uv[m] = !0));
      }
      t.mode & wt && Da.recordLegacyContextWarning(t, null),
        Qn(!0),
        (Do.current = t),
        (s = Bu(null, t, n, r, i, a)),
        (f = $u()),
        Qn(!1);
    }
    if (
      (vu(),
      (t.flags |= fu),
      typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0)
    ) {
      var y = Ye(n) || "Unknown";
      _o[y] ||
        (c(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          y,
          y,
          y
        ),
        (_o[y] = !0));
    }
    if (
      typeof s == "object" &&
      s !== null &&
      typeof s.render == "function" &&
      s.$$typeof === void 0
    ) {
      {
        var R = Ye(n) || "Unknown";
        _o[R] ||
          (c(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            R,
            R,
            R
          ),
          (_o[R] = !0));
      }
      (t.tag = C), (t.memoizedState = null), (t.updateQueue = null);
      var T = !1;
      return (
        Ya(n) ? ((T = !0), ac(t)) : (T = !1),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        Up(t),
        wg(t, s),
        Gp(t, n, r, a),
        Vv(null, t, n, !0, T, a)
      );
    } else {
      if (((t.tag = b), t.mode & wt)) {
        Gt(!0);
        try {
          (s = Bu(null, t, n, r, i, a)), (f = $u());
        } finally {
          Gt(!1);
        }
      }
      return Jt() && f && bp(t), Rn(null, t, s, a), Bv(t, n), t.child;
    }
  }
  function Bv(e, t) {
    {
      if (
        (t &&
          t.childContextTypes &&
          c(
            "%s(...): childContextTypes cannot be defined on a function component.",
            t.displayName || t.name || "Component"
          ),
        e.ref !== null)
      ) {
        var n = "",
          a = Nr();
        a &&
          (n +=
            `

Check the render method of \`` +
            a +
            "`.");
        var r = a || "",
          i = e._debugSource;
        i && (r = i.fileName + ":" + i.lineNumber),
          Hv[r] ||
            ((Hv[r] = !0),
            c(
              "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
              n
            ));
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var u = Ye(t) || "Unknown";
        zv[u] ||
          (c(
            "%s: Function components do not support getDerivedStateFromProps.",
            u
          ),
          (zv[u] = !0));
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var s = Ye(t) || "Unknown";
        Nv[s] ||
          (c("%s: Function components do not support contextType.", s),
          (Nv[s] = !0));
      }
    }
  }
  var $v = { dehydrated: null, treeContext: null, retryLane: Qt };
  function Yv(e) {
    return { baseLanes: e, cachePool: __(), transitions: null };
  }
  function F_(e, t) {
    var n = null;
    return {
      baseLanes: De(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    };
  }
  function j_(e, t, n, a) {
    if (t !== null) {
      var r = t.memoizedState;
      if (r === null) return !1;
    }
    return nv(e, go);
  }
  function V_(e, t) {
    return Ds(e.childLanes, t);
  }
  function _b(e, t, n) {
    var a = t.pendingProps;
    X1(t) && (t.flags |= Pe);
    var r = Oa.current,
      i = !1,
      u = (t.flags & Pe) !== de;
    if (
      (u || j_(r, e)
        ? ((i = !0), (t.flags &= ~Pe))
        : (e === null || e.memoizedState !== null) && (r = o_(r, Vg)),
      (r = Hu(r)),
      Jr(t, r),
      e === null)
    ) {
      Rp(t);
      var s = t.memoizedState;
      if (s !== null) {
        var f = s.dehydrated;
        if (f !== null) return P_(t, f);
      }
      var m = a.children,
        y = a.fallback;
      if (i) {
        var R = B_(t, m, y, n),
          T = t.child;
        return (T.memoizedState = Yv(n)), (t.memoizedState = $v), R;
      } else return Iv(t, m);
    } else {
      var O = e.memoizedState;
      if (O !== null) {
        var M = O.dehydrated;
        if (M !== null) return q_(e, t, u, a, M, O, n);
      }
      if (i) {
        var U = a.fallback,
          ee = a.children,
          oe = Y_(e, t, ee, U, n),
          ie = t.child,
          He = e.child.memoizedState;
        return (
          (ie.memoizedState = He === null ? Yv(n) : F_(He, n)),
          (ie.childLanes = V_(e, n)),
          (t.memoizedState = $v),
          oe
        );
      } else {
        var Oe = a.children,
          D = $_(e, t, Oe, n);
        return (t.memoizedState = null), D;
      }
    }
  }
  function Iv(e, t, n) {
    var a = e.mode,
      r = { mode: "visible", children: t },
      i = Pv(r, a);
    return (i.return = e), (e.child = i), i;
  }
  function B_(e, t, n, a) {
    var r = e.mode,
      i = e.child,
      u = { mode: "hidden", children: t },
      s,
      f;
    return (
      (r & Ne) === pe && i !== null
        ? ((s = i),
          (s.childLanes = j),
          (s.pendingProps = u),
          e.mode & Je &&
            ((s.actualDuration = 0),
            (s.actualStartTime = -1),
            (s.selfBaseDuration = 0),
            (s.treeBaseDuration = 0)),
          (f = li(n, r, a, null)))
        : ((s = Pv(u, r)), (f = li(n, r, a, null))),
      (s.return = e),
      (f.return = e),
      (s.sibling = f),
      (e.child = s),
      f
    );
  }
  function Pv(e, t, n) {
    return OS(e, t, j, null);
  }
  function Ob(e, t) {
    return qi(e, t);
  }
  function $_(e, t, n, a) {
    var r = e.child,
      i = r.sibling,
      u = Ob(r, { mode: "visible", children: n });
    if (
      ((t.mode & Ne) === pe && (u.lanes = a),
      (u.return = t),
      (u.sibling = null),
      i !== null)
    ) {
      var s = t.deletions;
      s === null ? ((t.deletions = [i]), (t.flags |= bi)) : s.push(i);
    }
    return (t.child = u), u;
  }
  function Y_(e, t, n, a, r) {
    var i = t.mode,
      u = e.child,
      s = u.sibling,
      f = { mode: "hidden", children: n },
      m;
    if ((i & Ne) === pe && t.child !== u) {
      var y = t.child;
      (m = y),
        (m.childLanes = j),
        (m.pendingProps = f),
        t.mode & Je &&
          ((m.actualDuration = 0),
          (m.actualStartTime = -1),
          (m.selfBaseDuration = u.selfBaseDuration),
          (m.treeBaseDuration = u.treeBaseDuration)),
        (t.deletions = null);
    } else (m = Ob(u, f)), (m.subtreeFlags = u.subtreeFlags & fr);
    var R;
    return (
      s !== null ? (R = qi(s, a)) : ((R = li(a, i, r, null)), (R.flags |= Mt)),
      (R.return = t),
      (m.return = t),
      (m.sibling = R),
      (t.child = m),
      R
    );
  }
  function qc(e, t, n, a) {
    a !== null && xp(a), Nu(t, e.child, null, n);
    var r = t.pendingProps,
      i = r.children,
      u = Iv(t, i);
    return (u.flags |= Mt), (t.memoizedState = null), u;
  }
  function I_(e, t, n, a, r) {
    var i = t.mode,
      u = { mode: "visible", children: n },
      s = Pv(u, i),
      f = li(a, i, r, null);
    return (
      (f.flags |= Mt),
      (s.return = t),
      (f.return = t),
      (s.sibling = f),
      (t.child = s),
      (t.mode & Ne) !== pe && Nu(t, e.child, null, r),
      f
    );
  }
  function P_(e, t, n) {
    return (
      (e.mode & Ne) === pe
        ? (c(
            "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."
          ),
          (e.lanes = ye))
        : sp(t)
        ? (e.lanes = xi)
        : (e.lanes = Xn),
      null
    );
  }
  function q_(e, t, n, a, r, i, u) {
    if (n)
      if (t.flags & or) {
        t.flags &= ~or;
        var D = Av(
          new Error(
            "There was an error while hydrating this Suspense boundary. Switched to client rendering."
          )
        );
        return qc(e, t, u, D);
      } else {
        if (t.memoizedState !== null)
          return (t.child = e.child), (t.flags |= Pe), null;
        var N = a.children,
          _ = a.fallback,
          B = I_(e, t, N, _, u),
          te = t.child;
        return (te.memoizedState = Yv(u)), (t.memoizedState = $v), B;
      }
    else {
      if ((UD(), (t.mode & Ne) === pe)) return qc(e, t, u, null);
      if (sp(r)) {
        var s, f, m;
        {
          var y = Kx(r);
          (s = y.digest), (f = y.message), (m = y.stack);
        }
        var R;
        f
          ? (R = new Error(f))
          : (R = new Error(
              "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
            ));
        var T = Av(R, s, m);
        return qc(e, t, u, T);
      }
      var O = Wn(u, e.childLanes);
      if (wa || O) {
        var M = af();
        if (M !== null) {
          var U = aT(M, u);
          if (U !== Qt && U !== i.retryLane) {
            i.retryLane = U;
            var ee = st;
            Hn(e, U), Bt(M, e, U, ee);
          }
        }
        dh();
        var oe = Av(
          new Error(
            "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."
          )
        );
        return qc(e, t, u, oe);
      } else if (Wy(r)) {
        (t.flags |= Pe), (t.child = e.child);
        var ie = y1.bind(null, e);
        return Zx(r, ie), null;
      } else {
        HD(t, r, i.treeContext);
        var He = a.children,
          Oe = Iv(t, He);
        return (Oe.flags |= sr), Oe;
      }
    }
  }
  function Mb(e, t, n) {
    e.lanes = De(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = De(a.lanes, t)), wp(e.return, t, n);
  }
  function G_(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === Y) {
        var r = a.memoizedState;
        r !== null && Mb(a, n, e);
      } else if (a.tag === ke) Mb(a, n, e);
      else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === e) return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }
  function Q_(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      a !== null && xc(a) === null && (n = t), (t = t.sibling);
    }
    return n;
  }
  function X_(e) {
    if (
      e !== void 0 &&
      e !== "forwards" &&
      e !== "backwards" &&
      e !== "together" &&
      !Fv[e]
    )
      if (((Fv[e] = !0), typeof e == "string"))
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            c(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          case "forward":
          case "backward": {
            c(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          default:
            c(
              '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              e
            );
            break;
        }
      else
        c(
          '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
          e
        );
  }
  function W_(e, t) {
    e !== void 0 &&
      !Pc[e] &&
      (e !== "collapsed" && e !== "hidden"
        ? ((Pc[e] = !0),
          c(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== "forwards" &&
          t !== "backwards" &&
          ((Pc[e] = !0),
          c(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )));
  }
  function wb(e, t) {
    {
      var n = Ie(e),
        a = !n && typeof nr(e) == "function";
      if (n || a) {
        var r = n ? "array" : "iterable";
        return (
          c(
            "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
            r,
            t,
            r
          ),
          !1
        );
      }
    }
    return !0;
  }
  function K_(e, t) {
    if (
      (t === "forwards" || t === "backwards") &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (Ie(e)) {
        for (var n = 0; n < e.length; n++) if (!wb(e[n], n)) return;
      } else {
        var a = nr(e);
        if (typeof a == "function") {
          var r = a.call(e);
          if (r)
            for (var i = r.next(), u = 0; !i.done; i = r.next()) {
              if (!wb(i.value, u)) return;
              u++;
            }
        } else
          c(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          );
      }
  }
  function qv(e, t, n, a, r) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: r,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = n),
        (i.tailMode = r));
  }
  function Ab(e, t, n) {
    var a = t.pendingProps,
      r = a.revealOrder,
      i = a.tail,
      u = a.children;
    X_(r), W_(i, r), K_(u, r), Rn(e, t, u, n);
    var s = Oa.current,
      f = nv(s, go);
    if (f) (s = av(s, go)), (t.flags |= Pe);
    else {
      var m = e !== null && (e.flags & Pe) !== de;
      m && G_(t, t.child, n), (s = Hu(s));
    }
    if ((Jr(t, s), (t.mode & Ne) === pe)) t.memoizedState = null;
    else
      switch (r) {
        case "forwards": {
          var y = Q_(t.child),
            R;
          y === null
            ? ((R = t.child), (t.child = null))
            : ((R = y.sibling), (y.sibling = null)),
            qv(t, !1, R, y, i);
          break;
        }
        case "backwards": {
          var T = null,
            O = t.child;
          for (t.child = null; O !== null; ) {
            var M = O.alternate;
            if (M !== null && xc(M) === null) {
              t.child = O;
              break;
            }
            var U = O.sibling;
            (O.sibling = T), (T = O), (O = U);
          }
          qv(t, !0, T, null, i);
          break;
        }
        case "together": {
          qv(t, !1, null, null, void 0);
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Z_(e, t, n) {
    Jp(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? (t.child = Nu(t, null, a, n)) : Rn(e, t, a, n), t.child;
  }
  var Lb = !1;
  function J_(e, t, n) {
    var a = t.type,
      r = a._context,
      i = t.pendingProps,
      u = t.memoizedProps,
      s = i.value;
    {
      "value" in i ||
        Lb ||
        ((Lb = !0),
        c(
          "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
        ));
      var f = t.type.propTypes;
      f && Ra(f, i, "prop", "Context.Provider");
    }
    if ((bg(t, r, s), u !== null)) {
      var m = u.value;
      if (Jn(m, s)) {
        if (u.children === i.children && !tc()) return Er(e, t, n);
      } else GD(t, r, n);
    }
    var y = i.children;
    return Rn(e, t, y, n), t.child;
  }
  var kb = !1;
  function eO(e, t, n) {
    var a = t.type;
    a._context === void 0
      ? a !== a.Consumer &&
        (kb ||
          ((kb = !0),
          c(
            "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
          )))
      : (a = a._context);
    var r = t.pendingProps,
      i = r.children;
    typeof i != "function" &&
      c(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      Uu(t, n);
    var u = At(a);
    Dl(t);
    var s;
    return (
      (Do.current = t),
      Qn(!0),
      (s = i(u)),
      Qn(!1),
      vu(),
      (t.flags |= fu),
      Rn(e, t, s, n),
      t.child
    );
  }
  function Oo() {
    wa = !0;
  }
  function Gc(e, t) {
    (t.mode & Ne) === pe &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= Mt));
  }
  function Er(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      vb(),
      Vo(t.lanes),
      Wn(n, t.childLanes) ? (i_(e, t), t.child) : null
    );
  }
  function tO(e, t, n) {
    {
      var a = t.return;
      if (a === null) throw new Error("Cannot swap the root fiber.");
      if (
        ((e.alternate = null),
        (t.alternate = null),
        (n.index = t.index),
        (n.sibling = t.sibling),
        (n.return = t.return),
        (n.ref = t.ref),
        t === a.child)
      )
        a.child = n;
      else {
        var r = a.child;
        if (r === null) throw new Error("Expected parent to have a child.");
        for (; r.sibling !== t; )
          if (((r = r.sibling), r === null))
            throw new Error("Expected to find the previous sibling.");
        r.sibling = n;
      }
      var i = a.deletions;
      return (
        i === null ? ((a.deletions = [e]), (a.flags |= bi)) : i.push(e),
        (n.flags |= Mt),
        n
      );
    }
  }
  function Gv(e, t) {
    var n = e.lanes;
    return !!Wn(n, t);
  }
  function nO(e, t, n) {
    switch (t.tag) {
      case k:
        xb(t), t.stateNode, Lu();
        break;
      case z:
        Fg(t);
        break;
      case C: {
        var a = t.type;
        Ya(a) && ac(t);
        break;
      }
      case F:
        Jp(t, t.stateNode.containerInfo);
        break;
      case X: {
        var r = t.memoizedProps.value,
          i = t.type._context;
        bg(t, i, r);
        break;
      }
      case K:
        {
          var u = Wn(n, t.childLanes);
          u && (t.flags |= je);
          {
            var s = t.stateNode;
            (s.effectDuration = 0), (s.passiveEffectDuration = 0);
          }
        }
        break;
      case Y: {
        var f = t.memoizedState;
        if (f !== null) {
          if (f.dehydrated !== null)
            return Jr(t, Hu(Oa.current)), (t.flags |= Pe), null;
          var m = t.child,
            y = m.childLanes;
          if (Wn(n, y)) return _b(e, t, n);
          Jr(t, Hu(Oa.current));
          var R = Er(e, t, n);
          return R !== null ? R.sibling : null;
        } else Jr(t, Hu(Oa.current));
        break;
      }
      case ke: {
        var T = (e.flags & Pe) !== de,
          O = Wn(n, t.childLanes);
        if (T) {
          if (O) return Ab(e, t, n);
          t.flags |= Pe;
        }
        var M = t.memoizedState;
        if (
          (M !== null &&
            ((M.rendering = null), (M.tail = null), (M.lastEffect = null)),
          Jr(t, Oa.current),
          O)
        )
          break;
        return null;
      }
      case Ce:
      case Me:
        return (t.lanes = j), Cb(e, t, n);
    }
    return Er(e, t, n);
  }
  function Ub(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return tO(
        e,
        t,
        Th(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        )
      );
    if (e !== null) {
      var a = e.memoizedProps,
        r = t.pendingProps;
      if (a !== r || tc() || t.type !== e.type) wa = !0;
      else {
        var i = Gv(e, n);
        if (!i && (t.flags & Pe) === de) return (wa = !1), nO(e, t, n);
        (e.flags & Jf) !== de ? (wa = !0) : (wa = !1);
      }
    } else if (((wa = !1), Jt() && OD(t))) {
      var u = t.index,
        s = MD();
      lg(t, s, u);
    }
    switch (((t.lanes = j), t.tag)) {
      case A:
        return H_(e, t, t.type, n);
      case Dt: {
        var f = t.elementType;
        return N_(e, t, f, n);
      }
      case b: {
        var m = t.type,
          y = t.pendingProps,
          R = t.elementType === m ? y : _a(m, y);
        return jv(e, t, m, R, n);
      }
      case C: {
        var T = t.type,
          O = t.pendingProps,
          M = t.elementType === T ? O : _a(T, O);
        return Rb(e, t, T, M, n);
      }
      case k:
        return L_(e, t, n);
      case z:
        return k_(e, t, n);
      case $:
        return U_(e, t);
      case Y:
        return _b(e, t, n);
      case F:
        return Z_(e, t, n);
      case J: {
        var U = t.type,
          ee = t.pendingProps,
          oe = t.elementType === U ? ee : _a(U, ee);
        return bb(e, t, U, oe, n);
      }
      case ne:
        return M_(e, t, n);
      case Se:
        return w_(e, t, n);
      case K:
        return A_(e, t, n);
      case X:
        return J_(e, t, n);
      case fe:
        return eO(e, t, n);
      case Fe: {
        var ie = t.type,
          He = t.pendingProps,
          Oe = _a(ie, He);
        if (t.type !== t.elementType) {
          var D = ie.propTypes;
          D && Ra(D, Oe, "prop", Ye(ie));
        }
        return (Oe = _a(ie.type, Oe)), Sb(e, t, ie, Oe, n);
      }
      case Ee:
        return Eb(e, t, t.type, t.pendingProps, n);
      case Ct: {
        var N = t.type,
          _ = t.pendingProps,
          B = t.elementType === N ? _ : _a(N, _);
        return z_(e, t, N, B, n);
      }
      case ke:
        return Ab(e, t, n);
      case $t:
        break;
      case Ce:
        return Cb(e, t, n);
    }
    throw new Error(
      "Unknown unit of work tag (" +
        t.tag +
        "). This error is likely caused by a bug in React. Please file an issue."
    );
  }
  function Yu(e) {
    e.flags |= je;
  }
  function Nb(e) {
    (e.flags |= jr), (e.flags |= ed);
  }
  var zb, Qv, Hb, Fb;
  (zb = function (e, t, n, a) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === z || r.tag === $) xx(e, r.stateNode);
      else if (r.tag !== F) {
        if (r.child !== null) {
          (r.child.return = r), (r = r.child);
          continue;
        }
      }
      if (r === t) return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Qv = function (e, t) {}),
    (Hb = function (e, t, n, a, r) {
      var i = e.memoizedProps;
      if (i !== a) {
        var u = t.stateNode,
          s = ev(),
          f = _x(u, n, i, a, r, s);
        (t.updateQueue = f), f && Yu(t);
      }
    }),
    (Fb = function (e, t, n, a) {
      n !== a && Yu(t);
    });
  function Mo(e, t) {
    if (!Jt())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        }
        case "collapsed": {
          for (var r = e.tail, i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? !t && e.tail !== null
              ? (e.tail.sibling = null)
              : (e.tail = null)
            : (i.sibling = null);
          break;
        }
      }
  }
  function tn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = j,
      a = de;
    if (t) {
      if ((e.mode & Je) !== pe) {
        for (var f = e.selfBaseDuration, m = e.child; m !== null; )
          (n = De(n, De(m.lanes, m.childLanes))),
            (a |= m.subtreeFlags & fr),
            (a |= m.flags & fr),
            (f += m.treeBaseDuration),
            (m = m.sibling);
        e.treeBaseDuration = f;
      } else
        for (var y = e.child; y !== null; )
          (n = De(n, De(y.lanes, y.childLanes))),
            (a |= y.subtreeFlags & fr),
            (a |= y.flags & fr),
            (y.return = e),
            (y = y.sibling);
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & Je) !== pe) {
        for (
          var r = e.actualDuration, i = e.selfBaseDuration, u = e.child;
          u !== null;

        )
          (n = De(n, De(u.lanes, u.childLanes))),
            (a |= u.subtreeFlags),
            (a |= u.flags),
            (r += u.actualDuration),
            (i += u.treeBaseDuration),
            (u = u.sibling);
        (e.actualDuration = r), (e.treeBaseDuration = i);
      } else
        for (var s = e.child; s !== null; )
          (n = De(n, De(s.lanes, s.childLanes))),
            (a |= s.subtreeFlags),
            (a |= s.flags),
            (s.return = e),
            (s = s.sibling);
      e.subtreeFlags |= a;
    }
    return (e.childLanes = n), t;
  }
  function aO(e, t, n) {
    if ($D() && (t.mode & Ne) !== pe && (t.flags & Pe) === de)
      return vg(t), Lu(), (t.flags |= or | Rl | Tn), !1;
    var a = oc(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error(
            "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
          );
        if ((VD(t), tn(t), (t.mode & Je) !== pe)) {
          var r = n !== null;
          if (r) {
            var i = t.child;
            i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (
          (Lu(),
          (t.flags & Pe) === de && (t.memoizedState = null),
          (t.flags |= je),
          tn(t),
          (t.mode & Je) !== pe)
        ) {
          var u = n !== null;
          if (u) {
            var s = t.child;
            s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
          }
        }
        return !1;
      }
    else return hg(), !0;
  }
  function jb(e, t, n) {
    var a = t.pendingProps;
    switch ((Sp(t), t.tag)) {
      case A:
      case Dt:
      case Ee:
      case b:
      case J:
      case ne:
      case Se:
      case K:
      case fe:
      case Fe:
        return tn(t), null;
      case C: {
        var r = t.type;
        return Ya(r) && nc(t), tn(t), null;
      }
      case k: {
        var i = t.stateNode;
        if (
          (zu(t),
          mp(t),
          iv(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var u = oc(t);
          if (u) Yu(t);
          else if (e !== null) {
            var s = e.memoizedState;
            (!s.isDehydrated || (t.flags & or) !== de) &&
              ((t.flags |= Si), hg());
          }
        }
        return Qv(e, t), tn(t), null;
      }
      case z: {
        tv(t);
        var f = Hg(),
          m = t.type;
        if (e !== null && t.stateNode != null)
          Hb(e, t, m, a, f), e.ref !== t.ref && Nb(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            return tn(t), null;
          }
          var y = ev(),
            R = oc(t);
          if (R) FD(t, f, y) && Yu(t);
          else {
            var T = Rx(m, a, f, y, t);
            zb(T, t, !1, !1), (t.stateNode = T), Dx(T, m, a, f) && Yu(t);
          }
          t.ref !== null && Nb(t);
        }
        return tn(t), null;
      }
      case $: {
        var O = a;
        if (e && t.stateNode != null) {
          var M = e.memoizedProps;
          Fb(e, t, M, O);
        } else {
          if (typeof O != "string" && t.stateNode === null)
            throw new Error(
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
            );
          var U = Hg(),
            ee = ev(),
            oe = oc(t);
          oe ? jD(t) && Yu(t) : (t.stateNode = Ox(O, U, ee, t));
        }
        return tn(t), null;
      }
      case Y: {
        Fu(t);
        var ie = t.memoizedState;
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var He = aO(e, t, ie);
          if (!He) return t.flags & Tn ? t : null;
        }
        if ((t.flags & Pe) !== de)
          return (t.lanes = n), (t.mode & Je) !== pe && wv(t), t;
        var Oe = ie !== null,
          D = e !== null && e.memoizedState !== null;
        if (Oe !== D && Oe) {
          var N = t.child;
          if (((N.flags |= Ei), (t.mode & Ne) !== pe)) {
            var _ =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Qe);
            _ || nv(Oa.current, Vg) ? r1() : dh();
          }
        }
        var B = t.updateQueue;
        if (
          (B !== null && (t.flags |= je), tn(t), (t.mode & Je) !== pe && Oe)
        ) {
          var te = t.child;
          te !== null && (t.treeBaseDuration -= te.treeBaseDuration);
        }
        return null;
      }
      case F:
        return (
          zu(t),
          Qv(e, t),
          e === null && ED(t.stateNode.containerInfo),
          tn(t),
          null
        );
      case X:
        var Q = t.type._context;
        return Mp(Q, t), tn(t), null;
      case Ct: {
        var he = t.type;
        return Ya(he) && nc(t), tn(t), null;
      }
      case ke: {
        Fu(t);
        var be = t.memoizedState;
        if (be === null) return tn(t), null;
        var tt = (t.flags & Pe) !== de,
          Ve = be.rendering;
        if (Ve === null)
          if (tt) Mo(be, !1);
          else {
            var xt = u1() && (e === null || (e.flags & Pe) === de);
            if (!xt)
              for (var Be = t.child; Be !== null; ) {
                var Et = xc(Be);
                if (Et !== null) {
                  (tt = !0), (t.flags |= Pe), Mo(be, !1);
                  var gn = Et.updateQueue;
                  return (
                    gn !== null && ((t.updateQueue = gn), (t.flags |= je)),
                    (t.subtreeFlags = de),
                    u_(t, n),
                    Jr(t, av(Oa.current, go)),
                    t.child
                  );
                }
                Be = Be.sibling;
              }
            be.tail !== null &&
              qt() > uS() &&
              ((t.flags |= Pe), (tt = !0), Mo(be, !1), (t.lanes = Hm));
          }
        else {
          if (!tt) {
            var ln = xc(Ve);
            if (ln !== null) {
              (t.flags |= Pe), (tt = !0);
              var na = ln.updateQueue;
              if (
                (na !== null && ((t.updateQueue = na), (t.flags |= je)),
                Mo(be, !0),
                be.tail === null &&
                  be.tailMode === "hidden" &&
                  !Ve.alternate &&
                  !Jt())
              )
                return tn(t), null;
            } else
              qt() * 2 - be.renderingStartTime > uS() &&
                n !== Xn &&
                ((t.flags |= Pe), (tt = !0), Mo(be, !1), (t.lanes = Hm));
          }
          if (be.isBackwards) (Ve.sibling = t.child), (t.child = Ve);
          else {
            var _n = be.last;
            _n !== null ? (_n.sibling = Ve) : (t.child = Ve), (be.last = Ve);
          }
        }
        if (be.tail !== null) {
          var On = be.tail;
          (be.rendering = On),
            (be.tail = On.sibling),
            (be.renderingStartTime = qt()),
            (On.sibling = null);
          var bn = Oa.current;
          return tt ? (bn = av(bn, go)) : (bn = Hu(bn)), Jr(t, bn), On;
        }
        return tn(t), null;
      }
      case $t:
        break;
      case Ce:
      case Me: {
        fh(t);
        var Dr = t.memoizedState,
          Ku = Dr !== null;
        if (e !== null) {
          var Po = e.memoizedState,
            Ka = Po !== null;
          Ka !== Ku && !sn && (t.flags |= Ei);
        }
        return (
          !Ku || (t.mode & Ne) === pe
            ? tn(t)
            : Wn(Wa, Xn) &&
              (tn(t), t.subtreeFlags & (Mt | je) && (t.flags |= Ei)),
          null
        );
      }
      case ot:
        return null;
      case Ge:
        return null;
    }
    throw new Error(
      "Unknown unit of work tag (" +
        t.tag +
        "). This error is likely caused by a bug in React. Please file an issue."
    );
  }
  function rO(e, t, n) {
    switch ((Sp(t), t.tag)) {
      case C: {
        var a = t.type;
        Ya(a) && nc(t);
        var r = t.flags;
        return r & Tn
          ? ((t.flags = (r & ~Tn) | Pe), (t.mode & Je) !== pe && wv(t), t)
          : null;
      }
      case k: {
        t.stateNode, zu(t), mp(t), iv();
        var i = t.flags;
        return (i & Tn) !== de && (i & Pe) === de
          ? ((t.flags = (i & ~Tn) | Pe), t)
          : null;
      }
      case z:
        return tv(t), null;
      case Y: {
        Fu(t);
        var u = t.memoizedState;
        if (u !== null && u.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
            );
          Lu();
        }
        var s = t.flags;
        return s & Tn
          ? ((t.flags = (s & ~Tn) | Pe), (t.mode & Je) !== pe && wv(t), t)
          : null;
      }
      case ke:
        return Fu(t), null;
      case F:
        return zu(t), null;
      case X:
        var f = t.type._context;
        return Mp(f, t), null;
      case Ce:
      case Me:
        return fh(t), null;
      case ot:
        return null;
      default:
        return null;
    }
  }
  function Vb(e, t, n) {
    switch ((Sp(t), t.tag)) {
      case C: {
        var a = t.type.childContextTypes;
        a != null && nc(t);
        break;
      }
      case k: {
        t.stateNode, zu(t), mp(t), iv();
        break;
      }
      case z: {
        tv(t);
        break;
      }
      case F:
        zu(t);
        break;
      case Y:
        Fu(t);
        break;
      case ke:
        Fu(t);
        break;
      case X:
        var r = t.type._context;
        Mp(r, t);
        break;
      case Ce:
      case Me:
        fh(t);
        break;
    }
  }
  var Bb = null;
  Bb = new Set();
  var Qc = !1,
    nn = !1,
    iO = typeof WeakSet == "function" ? WeakSet : Set,
    ae = null,
    Iu = null,
    Pu = null;
  function uO(e) {
    Wf(null, function () {
      throw e;
    }),
      Kf();
  }
  var lO = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & Je))
      try {
        Qa(), t.componentWillUnmount();
      } finally {
        Ga(e);
      }
    else t.componentWillUnmount();
  };
  function $b(e, t) {
    try {
      ni(Nt, e);
    } catch (n) {
      ut(e, t, n);
    }
  }
  function Xv(e, t, n) {
    try {
      lO(e, n);
    } catch (a) {
      ut(e, t, a);
    }
  }
  function oO(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      ut(e, t, a);
    }
  }
  function Yb(e, t) {
    try {
      Pb(e);
    } catch (n) {
      ut(e, t, n);
    }
  }
  function qu(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (wn && ga && e.mode & Je)
            try {
              Qa(), (a = n(null));
            } finally {
              Ga(e);
            }
          else a = n(null);
        } catch (r) {
          ut(e, t, r);
        }
        typeof a == "function" &&
          c(
            "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
            Re(e)
          );
      } else n.current = null;
  }
  function Xc(e, t, n) {
    try {
      n();
    } catch (a) {
      ut(e, t, a);
    }
  }
  var Ib = !1;
  function sO(e, t) {
    Cx(e.containerInfo), (ae = t), cO();
    var n = Ib;
    return (Ib = !1), n;
  }
  function cO() {
    for (; ae !== null; ) {
      var e = ae,
        t = e.child;
      (e.subtreeFlags & nd) !== de && t !== null
        ? ((t.return = e), (ae = t))
        : fO();
    }
  }
  function fO() {
    for (; ae !== null; ) {
      var e = ae;
      mt(e);
      try {
        dO(e);
      } catch (n) {
        ut(e, e.return, n);
      }
      Pt();
      var t = e.sibling;
      if (t !== null) {
        (t.return = e.return), (ae = t);
        return;
      }
      ae = e.return;
    }
  }
  function dO(e) {
    var t = e.alternate,
      n = e.flags;
    if ((n & Si) !== de) {
      switch ((mt(e), e.tag)) {
        case b:
        case J:
        case Ee:
          break;
        case C: {
          if (t !== null) {
            var a = t.memoizedProps,
              r = t.memoizedState,
              i = e.stateNode;
            e.type === e.elementType &&
              !Bi &&
              (i.props !== e.memoizedProps &&
                c(
                  "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  Re(e) || "instance"
                ),
              i.state !== e.memoizedState &&
                c(
                  "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  Re(e) || "instance"
                ));
            var u = i.getSnapshotBeforeUpdate(
              e.elementType === e.type ? a : _a(e.type, a),
              r
            );
            {
              var s = Bb;
              u === void 0 &&
                !s.has(e.type) &&
                (s.add(e.type),
                c(
                  "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                  Re(e)
                ));
            }
            i.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        }
        case k: {
          {
            var f = e.stateNode;
            Gx(f.containerInfo);
          }
          break;
        }
        case z:
        case $:
        case F:
        case Ct:
          break;
        default:
          throw new Error(
            "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      Pt();
    }
  }
  function Aa(e, t, n) {
    var a = t.updateQueue,
      r = a !== null ? a.lastEffect : null;
    if (r !== null) {
      var i = r.next,
        u = i;
      do {
        if ((u.tag & e) === e) {
          var s = u.destroy;
          (u.destroy = void 0),
            s !== void 0 &&
              ((e & en) !== Fn ? O0(t) : (e & Nt) !== Fn && Lm(t),
              (e & Ia) !== Fn && $o(!0),
              Xc(t, n, s),
              (e & Ia) !== Fn && $o(!1),
              (e & en) !== Fn ? M0() : (e & Nt) !== Fn && km());
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function ni(e, t) {
    var n = t.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var r = a.next,
        i = r;
      do {
        if ((i.tag & e) === e) {
          (e & en) !== Fn ? D0(t) : (e & Nt) !== Fn && w0(t);
          var u = i.create;
          (e & Ia) !== Fn && $o(!0),
            (i.destroy = u()),
            (e & Ia) !== Fn && $o(!1),
            (e & en) !== Fn ? _0() : (e & Nt) !== Fn && A0();
          {
            var s = i.destroy;
            if (s !== void 0 && typeof s != "function") {
              var f = void 0;
              (i.tag & Nt) !== de
                ? (f = "useLayoutEffect")
                : (i.tag & Ia) !== de
                ? (f = "useInsertionEffect")
                : (f = "useEffect");
              var m = void 0;
              s === null
                ? (m =
                    " You returned null. If your effect does not require clean up, return undefined (or nothing).")
                : typeof s.then == "function"
                ? (m =
                    `

It looks like you wrote ` +
                    f +
                    `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                    f +
                    `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                : (m = " You returned: " + s),
                c(
                  "%s must not return anything besides a function, which is used for clean-up.%s",
                  f,
                  m
                );
            }
          }
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function pO(e, t) {
    if ((t.flags & je) !== de)
      switch (t.tag) {
        case K: {
          var n = t.stateNode.passiveEffectDuration,
            a = t.memoizedProps,
            r = a.id,
            i = a.onPostCommit,
            u = db(),
            s = t.alternate === null ? "mount" : "update";
          fb() && (s = "nested-update"),
            typeof i == "function" && i(r, s, n, u);
          var f = t.return;
          e: for (; f !== null; ) {
            switch (f.tag) {
              case k:
                var m = f.stateNode;
                m.passiveEffectDuration += n;
                break e;
              case K:
                var y = f.stateNode;
                y.passiveEffectDuration += n;
                break e;
            }
            f = f.return;
          }
          break;
        }
      }
  }
  function vO(e, t, n, a) {
    if ((n.flags & xl) !== de)
      switch (n.tag) {
        case b:
        case J:
        case Ee: {
          if (!nn)
            if (n.mode & Je)
              try {
                Qa(), ni(Nt | Ut, n);
              } finally {
                Ga(n);
              }
            else ni(Nt | Ut, n);
          break;
        }
        case C: {
          var r = n.stateNode;
          if (n.flags & je && !nn)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !Bi &&
                  (r.props !== n.memoizedProps &&
                    c(
                      "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                      Re(n) || "instance"
                    ),
                  r.state !== n.memoizedState &&
                    c(
                      "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                      Re(n) || "instance"
                    )),
                n.mode & Je)
              )
                try {
                  Qa(), r.componentDidMount();
                } finally {
                  Ga(n);
                }
              else r.componentDidMount();
            else {
              var i =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : _a(n.type, t.memoizedProps),
                u = t.memoizedState;
              if (
                (n.type === n.elementType &&
                  !Bi &&
                  (r.props !== n.memoizedProps &&
                    c(
                      "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                      Re(n) || "instance"
                    ),
                  r.state !== n.memoizedState &&
                    c(
                      "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                      Re(n) || "instance"
                    )),
                n.mode & Je)
              )
                try {
                  Qa(),
                    r.componentDidUpdate(
                      i,
                      u,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                } finally {
                  Ga(n);
                }
              else
                r.componentDidUpdate(
                  i,
                  u,
                  r.__reactInternalSnapshotBeforeUpdate
                );
            }
          var s = n.updateQueue;
          s !== null &&
            (n.type === n.elementType &&
              !Bi &&
              (r.props !== n.memoizedProps &&
                c(
                  "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  Re(n) || "instance"
                ),
              r.state !== n.memoizedState &&
                c(
                  "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  Re(n) || "instance"
                )),
            xg(n, s, r));
          break;
        }
        case k: {
          var f = n.updateQueue;
          if (f !== null) {
            var m = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case z:
                  m = n.child.stateNode;
                  break;
                case C:
                  m = n.child.stateNode;
                  break;
              }
            xg(n, f, m);
          }
          break;
        }
        case z: {
          var y = n.stateNode;
          if (t === null && n.flags & je) {
            var R = n.type,
              T = n.memoizedProps;
            kx(y, R, T);
          }
          break;
        }
        case $:
          break;
        case F:
          break;
        case K: {
          {
            var O = n.memoizedProps,
              M = O.onCommit,
              U = O.onRender,
              ee = n.stateNode.effectDuration,
              oe = db(),
              ie = t === null ? "mount" : "update";
            fb() && (ie = "nested-update"),
              typeof U == "function" &&
                U(
                  n.memoizedProps.id,
                  ie,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  oe
                );
            {
              typeof M == "function" && M(n.memoizedProps.id, ie, ee, oe),
                f1(n);
              var He = n.return;
              e: for (; He !== null; ) {
                switch (He.tag) {
                  case k:
                    var Oe = He.stateNode;
                    Oe.effectDuration += ee;
                    break e;
                  case K:
                    var D = He.stateNode;
                    D.effectDuration += ee;
                    break e;
                }
                He = He.return;
              }
            }
          }
          break;
        }
        case Y: {
          CO(e, n);
          break;
        }
        case ke:
        case Ct:
        case $t:
        case Ce:
        case Me:
        case Ge:
          break;
        default:
          throw new Error(
            "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    nn || (n.flags & jr && Pb(n));
  }
  function hO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        if (e.mode & Je)
          try {
            Qa(), $b(e, e.return);
          } finally {
            Ga(e);
          }
        else $b(e, e.return);
        break;
      }
      case C: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && oO(e, e.return, t),
          Yb(e, e.return);
        break;
      }
      case z: {
        Yb(e, e.return);
        break;
      }
    }
  }
  function mO(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === z) {
        if (n === null) {
          n = a;
          try {
            var r = a.stateNode;
            t ? Yx(r) : Px(a.stateNode, a.memoizedProps);
          } catch (u) {
            ut(e, e.return, u);
          }
        }
      } else if (a.tag === $) {
        if (n === null)
          try {
            var i = a.stateNode;
            t ? Ix(i) : qx(i, a.memoizedProps);
          } catch (u) {
            ut(e, e.return, u);
          }
      } else if (
        !((a.tag === Ce || a.tag === Me) && a.memoizedState !== null && a !== e)
      ) {
        if (a.child !== null) {
          (a.child.return = a), (a = a.child);
          continue;
        }
      }
      if (a === e) return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return;
        n === a && (n = null), (a = a.return);
      }
      n === a && (n = null), (a.sibling.return = a.return), (a = a.sibling);
    }
  }
  function Pb(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode,
        a;
      switch (e.tag) {
        case z:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == "function") {
        var r;
        if (e.mode & Je)
          try {
            Qa(), (r = t(a));
          } finally {
            Ga(e);
          }
        else r = t(a);
        typeof r == "function" &&
          c(
            "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
            Re(e)
          );
      } else
        t.hasOwnProperty("current") ||
          c(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            Re(e)
          ),
          (t.current = a);
    }
  }
  function yO(e) {
    var t = e.alternate;
    t !== null && (t.return = null), (e.return = null);
  }
  function qb(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), qb(t));
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === z)
      ) {
        var n = e.stateNode;
        n !== null && RD(n);
      }
      (e.stateNode = null),
        (e._debugOwner = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
  }
  function gO(e) {
    for (var t = e.return; t !== null; ) {
      if (Gb(t)) return t;
      t = t.return;
    }
    throw new Error(
      "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
    );
  }
  function Gb(e) {
    return e.tag === z || e.tag === k || e.tag === F;
  }
  function Qb(e) {
    var t = e;
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Gb(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== z && t.tag !== $ && t.tag !== ct;

      ) {
        if (t.flags & Mt || t.child === null || t.tag === F) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & Mt)) return t.stateNode;
    }
  }
  function bO(e) {
    var t = gO(e);
    switch (t.tag) {
      case z: {
        var n = t.stateNode;
        t.flags & Tl && (Xy(n), (t.flags &= ~Tl));
        var a = Qb(e);
        Kv(e, a, n);
        break;
      }
      case k:
      case F: {
        var r = t.stateNode.containerInfo,
          i = Qb(e);
        Wv(e, i, r);
        break;
      }
      default:
        throw new Error(
          "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
        );
    }
  }
  function Wv(e, t, n) {
    var a = e.tag,
      r = a === z || a === $;
    if (r) {
      var i = e.stateNode;
      t ? jx(n, i, t) : Hx(n, i);
    } else if (a !== F) {
      var u = e.child;
      if (u !== null) {
        Wv(u, t, n);
        for (var s = u.sibling; s !== null; ) Wv(s, t, n), (s = s.sibling);
      }
    }
  }
  function Kv(e, t, n) {
    var a = e.tag,
      r = a === z || a === $;
    if (r) {
      var i = e.stateNode;
      t ? Fx(n, i, t) : zx(n, i);
    } else if (a !== F) {
      var u = e.child;
      if (u !== null) {
        Kv(u, t, n);
        for (var s = u.sibling; s !== null; ) Kv(s, t, n), (s = s.sibling);
      }
    }
  }
  var an = null,
    La = !1;
  function SO(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case z: {
            (an = a.stateNode), (La = !1);
            break e;
          }
          case k: {
            (an = a.stateNode.containerInfo), (La = !0);
            break e;
          }
          case F: {
            (an = a.stateNode.containerInfo), (La = !0);
            break e;
          }
        }
        a = a.return;
      }
      if (an === null)
        throw new Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      Xb(e, t, n), (an = null), (La = !1);
    }
    yO(n);
  }
  function ai(e, t, n) {
    for (var a = n.child; a !== null; ) Xb(e, t, a), (a = a.sibling);
  }
  function Xb(e, t, n) {
    switch ((C0(n), n.tag)) {
      case z:
        nn || qu(n, t);
      case $: {
        {
          var a = an,
            r = La;
          (an = null),
            ai(e, t, n),
            (an = a),
            (La = r),
            an !== null && (La ? Bx(an, n.stateNode) : Vx(an, n.stateNode));
        }
        return;
      }
      case ct: {
        an !== null && (La ? $x(an, n.stateNode) : op(an, n.stateNode));
        return;
      }
      case F: {
        {
          var i = an,
            u = La;
          (an = n.stateNode.containerInfo),
            (La = !0),
            ai(e, t, n),
            (an = i),
            (La = u);
        }
        return;
      }
      case b:
      case J:
      case Fe:
      case Ee: {
        if (!nn) {
          var s = n.updateQueue;
          if (s !== null) {
            var f = s.lastEffect;
            if (f !== null) {
              var m = f.next,
                y = m;
              do {
                var R = y,
                  T = R.destroy,
                  O = R.tag;
                T !== void 0 &&
                  ((O & Ia) !== Fn
                    ? Xc(n, t, T)
                    : (O & Nt) !== Fn &&
                      (Lm(n),
                      n.mode & Je ? (Qa(), Xc(n, t, T), Ga(n)) : Xc(n, t, T),
                      km())),
                  (y = y.next);
              } while (y !== m);
            }
          }
        }
        ai(e, t, n);
        return;
      }
      case C: {
        if (!nn) {
          qu(n, t);
          var M = n.stateNode;
          typeof M.componentWillUnmount == "function" && Xv(n, t, M);
        }
        ai(e, t, n);
        return;
      }
      case $t: {
        ai(e, t, n);
        return;
      }
      case Ce: {
        if (n.mode & Ne) {
          var U = nn;
          (nn = U || n.memoizedState !== null), ai(e, t, n), (nn = U);
        } else ai(e, t, n);
        break;
      }
      default: {
        ai(e, t, n);
        return;
      }
    }
  }
  function EO(e) {
    e.memoizedState;
  }
  function CO(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var r = a.memoizedState;
        if (r !== null) {
          var i = r.dehydrated;
          i !== null && lD(i);
        }
      }
    }
  }
  function Wb(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new iO()),
        t.forEach(function (a) {
          var r = g1.bind(null, e, a);
          if (!n.has(a)) {
            if ((n.add(a), Ca))
              if (Iu !== null && Pu !== null) Bo(Pu, Iu);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            a.then(r, r);
          }
        });
    }
  }
  function TO(e, t, n) {
    (Iu = n), (Pu = e), mt(t), Kb(t, e), mt(t), (Iu = null), (Pu = null);
  }
  function ka(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var i = a[r];
        try {
          SO(e, t, i);
        } catch (f) {
          ut(i, t, f);
        }
      }
    var u = us();
    if (t.subtreeFlags & ad)
      for (var s = t.child; s !== null; ) mt(s), Kb(s, e), (s = s.sibling);
    mt(u);
  }
  function Kb(e, t, n) {
    var a = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case b:
      case J:
      case Fe:
      case Ee: {
        if ((ka(t, e), Xa(e), r & je)) {
          try {
            Aa(Ia | Ut, e, e.return), ni(Ia | Ut, e);
          } catch (he) {
            ut(e, e.return, he);
          }
          if (e.mode & Je) {
            try {
              Qa(), Aa(Nt | Ut, e, e.return);
            } catch (he) {
              ut(e, e.return, he);
            }
            Ga(e);
          } else
            try {
              Aa(Nt | Ut, e, e.return);
            } catch (he) {
              ut(e, e.return, he);
            }
        }
        return;
      }
      case C: {
        ka(t, e), Xa(e), r & jr && a !== null && qu(a, a.return);
        return;
      }
      case z: {
        ka(t, e), Xa(e), r & jr && a !== null && qu(a, a.return);
        {
          if (e.flags & Tl) {
            var i = e.stateNode;
            try {
              Xy(i);
            } catch (he) {
              ut(e, e.return, he);
            }
          }
          if (r & je) {
            var u = e.stateNode;
            if (u != null) {
              var s = e.memoizedProps,
                f = a !== null ? a.memoizedProps : s,
                m = e.type,
                y = e.updateQueue;
              if (((e.updateQueue = null), y !== null))
                try {
                  Ux(u, y, m, f, s, e);
                } catch (he) {
                  ut(e, e.return, he);
                }
            }
          }
        }
        return;
      }
      case $: {
        if ((ka(t, e), Xa(e), r & je)) {
          if (e.stateNode === null)
            throw new Error(
              "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
            );
          var R = e.stateNode,
            T = e.memoizedProps,
            O = a !== null ? a.memoizedProps : T;
          try {
            Nx(R, O, T);
          } catch (he) {
            ut(e, e.return, he);
          }
        }
        return;
      }
      case k: {
        if ((ka(t, e), Xa(e), r & je && a !== null)) {
          var M = a.memoizedState;
          if (M.isDehydrated)
            try {
              uD(t.containerInfo);
            } catch (he) {
              ut(e, e.return, he);
            }
        }
        return;
      }
      case F: {
        ka(t, e), Xa(e);
        return;
      }
      case Y: {
        ka(t, e), Xa(e);
        var U = e.child;
        if (U.flags & Ei) {
          var ee = U.stateNode,
            oe = U.memoizedState,
            ie = oe !== null;
          if (((ee.isHidden = ie), ie)) {
            var He = U.alternate !== null && U.alternate.memoizedState !== null;
            He || a1();
          }
        }
        if (r & je) {
          try {
            EO(e);
          } catch (he) {
            ut(e, e.return, he);
          }
          Wb(e);
        }
        return;
      }
      case Ce: {
        var Oe = a !== null && a.memoizedState !== null;
        if (e.mode & Ne) {
          var D = nn;
          (nn = D || Oe), ka(t, e), (nn = D);
        } else ka(t, e);
        if ((Xa(e), r & Ei)) {
          var N = e.stateNode,
            _ = e.memoizedState,
            B = _ !== null,
            te = e;
          if (((N.isHidden = B), B && !Oe && (te.mode & Ne) !== pe)) {
            ae = te;
            for (var Q = te.child; Q !== null; )
              (ae = Q), xO(Q), (Q = Q.sibling);
          }
          mO(te, B);
        }
        return;
      }
      case ke: {
        ka(t, e), Xa(e), r & je && Wb(e);
        return;
      }
      case $t:
        return;
      default: {
        ka(t, e), Xa(e);
        return;
      }
    }
  }
  function Xa(e) {
    var t = e.flags;
    if (t & Mt) {
      try {
        bO(e);
      } catch (n) {
        ut(e, e.return, n);
      }
      e.flags &= ~Mt;
    }
    t & sr && (e.flags &= ~sr);
  }
  function RO(e, t, n) {
    (Iu = n), (Pu = t), (ae = e), Zb(e, t, n), (Iu = null), (Pu = null);
  }
  function Zb(e, t, n) {
    for (var a = (e.mode & Ne) !== pe; ae !== null; ) {
      var r = ae,
        i = r.child;
      if (r.tag === Ce && a) {
        var u = r.memoizedState !== null,
          s = u || Qc;
        if (s) {
          Zv(e, t, n);
          continue;
        } else {
          var f = r.alternate,
            m = f !== null && f.memoizedState !== null,
            y = m || nn,
            R = Qc,
            T = nn;
          (Qc = s), (nn = y), nn && !T && ((ae = r), DO(r));
          for (var O = i; O !== null; ) (ae = O), Zb(O, t, n), (O = O.sibling);
          (ae = r), (Qc = R), (nn = T), Zv(e, t, n);
          continue;
        }
      }
      (r.subtreeFlags & xl) !== de && i !== null
        ? ((i.return = r), (ae = i))
        : Zv(e, t, n);
    }
  }
  function Zv(e, t, n) {
    for (; ae !== null; ) {
      var a = ae;
      if ((a.flags & xl) !== de) {
        var r = a.alternate;
        mt(a);
        try {
          vO(t, r, a, n);
        } catch (u) {
          ut(a, a.return, u);
        }
        Pt();
      }
      if (a === e) {
        ae = null;
        return;
      }
      var i = a.sibling;
      if (i !== null) {
        (i.return = a.return), (ae = i);
        return;
      }
      ae = a.return;
    }
  }
  function xO(e) {
    for (; ae !== null; ) {
      var t = ae,
        n = t.child;
      switch (t.tag) {
        case b:
        case J:
        case Fe:
        case Ee: {
          if (t.mode & Je)
            try {
              Qa(), Aa(Nt, t, t.return);
            } finally {
              Ga(t);
            }
          else Aa(Nt, t, t.return);
          break;
        }
        case C: {
          qu(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Xv(t, t.return, a);
          break;
        }
        case z: {
          qu(t, t.return);
          break;
        }
        case Ce: {
          var r = t.memoizedState !== null;
          if (r) {
            Jb(e);
            continue;
          }
          break;
        }
      }
      n !== null ? ((n.return = t), (ae = n)) : Jb(e);
    }
  }
  function Jb(e) {
    for (; ae !== null; ) {
      var t = ae;
      if (t === e) {
        ae = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (ae = n);
        return;
      }
      ae = t.return;
    }
  }
  function DO(e) {
    for (; ae !== null; ) {
      var t = ae,
        n = t.child;
      if (t.tag === Ce) {
        var a = t.memoizedState !== null;
        if (a) {
          eS(e);
          continue;
        }
      }
      n !== null ? ((n.return = t), (ae = n)) : eS(e);
    }
  }
  function eS(e) {
    for (; ae !== null; ) {
      var t = ae;
      mt(t);
      try {
        hO(t);
      } catch (a) {
        ut(t, t.return, a);
      }
      if ((Pt(), t === e)) {
        ae = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (ae = n);
        return;
      }
      ae = t.return;
    }
  }
  function _O(e, t, n, a) {
    (ae = t), OO(t, e, n, a);
  }
  function OO(e, t, n, a) {
    for (; ae !== null; ) {
      var r = ae,
        i = r.child;
      (r.subtreeFlags & du) !== de && i !== null
        ? ((i.return = r), (ae = i))
        : MO(e, t, n, a);
    }
  }
  function MO(e, t, n, a) {
    for (; ae !== null; ) {
      var r = ae;
      if ((r.flags & Ea) !== de) {
        mt(r);
        try {
          wO(t, r, n, a);
        } catch (u) {
          ut(r, r.return, u);
        }
        Pt();
      }
      if (r === e) {
        ae = null;
        return;
      }
      var i = r.sibling;
      if (i !== null) {
        (i.return = r.return), (ae = i);
        return;
      }
      ae = r.return;
    }
  }
  function wO(e, t, n, a) {
    switch (t.tag) {
      case b:
      case J:
      case Ee: {
        if (t.mode & Je) {
          Mv();
          try {
            ni(en | Ut, t);
          } finally {
            Ov(t);
          }
        } else ni(en | Ut, t);
        break;
      }
    }
  }
  function AO(e) {
    (ae = e), LO();
  }
  function LO() {
    for (; ae !== null; ) {
      var e = ae,
        t = e.child;
      if ((ae.flags & bi) !== de) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var r = n[a];
            (ae = r), NO(r, e);
          }
          {
            var i = e.alternate;
            if (i !== null) {
              var u = i.child;
              if (u !== null) {
                i.child = null;
                do {
                  var s = u.sibling;
                  (u.sibling = null), (u = s);
                } while (u !== null);
              }
            }
          }
          ae = e;
        }
      }
      (e.subtreeFlags & du) !== de && t !== null
        ? ((t.return = e), (ae = t))
        : kO();
    }
  }
  function kO() {
    for (; ae !== null; ) {
      var e = ae;
      (e.flags & Ea) !== de && (mt(e), UO(e), Pt());
      var t = e.sibling;
      if (t !== null) {
        (t.return = e.return), (ae = t);
        return;
      }
      ae = e.return;
    }
  }
  function UO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        e.mode & Je
          ? (Mv(), Aa(en | Ut, e, e.return), Ov(e))
          : Aa(en | Ut, e, e.return);
        break;
      }
    }
  }
  function NO(e, t) {
    for (; ae !== null; ) {
      var n = ae;
      mt(n), HO(n, t), Pt();
      var a = n.child;
      a !== null ? ((a.return = n), (ae = a)) : zO(e);
    }
  }
  function zO(e) {
    for (; ae !== null; ) {
      var t = ae,
        n = t.sibling,
        a = t.return;
      if ((qb(t), t === e)) {
        ae = null;
        return;
      }
      if (n !== null) {
        (n.return = a), (ae = n);
        return;
      }
      ae = a;
    }
  }
  function HO(e, t) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        e.mode & Je ? (Mv(), Aa(en, e, t), Ov(e)) : Aa(en, e, t);
        break;
      }
    }
  }
  function FO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        try {
          ni(Nt | Ut, e);
        } catch (n) {
          ut(e, e.return, n);
        }
        break;
      }
      case C: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          ut(e, e.return, n);
        }
        break;
      }
    }
  }
  function jO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        try {
          ni(en | Ut, e);
        } catch (t) {
          ut(e, e.return, t);
        }
        break;
      }
    }
  }
  function VO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee: {
        try {
          Aa(Nt | Ut, e, e.return);
        } catch (n) {
          ut(e, e.return, n);
        }
        break;
      }
      case C: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Xv(e, e.return, t);
        break;
      }
    }
  }
  function BO(e) {
    switch (e.tag) {
      case b:
      case J:
      case Ee:
        try {
          Aa(en | Ut, e, e.return);
        } catch (t) {
          ut(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var wo = Symbol.for;
    wo("selector.component"),
      wo("selector.has_pseudo_class"),
      wo("selector.role"),
      wo("selector.test_id"),
      wo("selector.text");
  }
  var $O = [];
  function YO() {
    $O.forEach(function (e) {
      return e();
    });
  }
  var IO = p.ReactCurrentActQueue;
  function PO(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < "u"
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function tS() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < "u"
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0;
      return (
        !e &&
          IO.current !== null &&
          c(
            "The current testing environment is not configured to support act(...)"
          ),
        e
      );
    }
  }
  var qO = Math.ceil,
    Jv = p.ReactCurrentDispatcher,
    eh = p.ReactCurrentOwner,
    rn = p.ReactCurrentBatchConfig,
    Ua = p.ReactCurrentActQueue,
    Ft = 0,
    nS = 1,
    un = 2,
    ma = 4,
    Cr = 0,
    Ao = 1,
    $i = 2,
    Wc = 3,
    Lo = 4,
    aS = 5,
    th = 6,
    ze = Ft,
    xn = null,
    yt = null,
    jt = j,
    Wa = j,
    nh = Gr(j),
    Vt = Cr,
    ko = null,
    Kc = j,
    Uo = j,
    Zc = j,
    No = null,
    jn = null,
    ah = 0,
    rS = 500,
    iS = 1 / 0,
    GO = 500,
    Tr = null;
  function zo() {
    iS = qt() + GO;
  }
  function uS() {
    return iS;
  }
  var Jc = !1,
    rh = null,
    Gu = null,
    Yi = !1,
    ri = null,
    Ho = j,
    ih = [],
    uh = null,
    QO = 50,
    Fo = 0,
    lh = null,
    oh = !1,
    ef = !1,
    XO = 50,
    Qu = 0,
    tf = null,
    jo = st,
    nf = j,
    lS = !1;
  function af() {
    return xn;
  }
  function Dn() {
    return (ze & (un | ma)) !== Ft ? qt() : (jo !== st || (jo = qt()), jo);
  }
  function ii(e) {
    var t = e.mode;
    if ((t & Ne) === pe) return ye;
    if ((ze & un) !== Ft && jt !== j) return Ll(jt);
    var n = PD() !== ID;
    if (n) {
      if (rn.transition !== null) {
        var a = rn.transition;
        a._updatedFibers || (a._updatedFibers = new Set()),
          a._updatedFibers.add(e);
      }
      return nf === Qt && (nf = Bm()), nf;
    }
    var r = Ta();
    if (r !== Qt) return r;
    var i = Mx();
    return i;
  }
  function WO(e) {
    var t = e.mode;
    return (t & Ne) === pe ? ye : J0();
  }
  function Bt(e, t, n, a) {
    S1(),
      lS && c("useInsertionEffect must not schedule updates."),
      oh && (ef = !0),
      kl(e, n, a),
      (ze & un) !== j && e === xn
        ? T1(t)
        : (Ca && Im(e, t, n),
          R1(t),
          e === xn &&
            ((ze & un) === Ft && (Uo = De(Uo, n)), Vt === Lo && ui(e, jt)),
          Vn(e, a),
          n === ye &&
            ze === Ft &&
            (t.mode & Ne) === pe &&
            !Ua.isBatchingLegacy &&
            (zo(), ug()));
  }
  function KO(e, t, n) {
    var a = e.current;
    (a.lanes = t), kl(e, t, n), Vn(e, n);
  }
  function ZO(e) {
    return (ze & un) !== Ft;
  }
  function Vn(e, t) {
    var n = e.callbackNode;
    G0(e, t);
    var a = Rs(e, e === xn ? jt : j);
    if (a === j) {
      n !== null && TS(n), (e.callbackNode = null), (e.callbackPriority = Qt);
      return;
    }
    var r = _i(a),
      i = e.callbackPriority;
    if (i === r && !(Ua.current !== null && n !== hh)) {
      n == null &&
        i !== ye &&
        c(
          "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue."
        );
      return;
    }
    n != null && TS(n);
    var u;
    if (r === ye)
      e.tag === Qr
        ? (Ua.isBatchingLegacy !== null && (Ua.didScheduleLegacyUpdate = !0),
          _D(cS.bind(null, e)))
        : ig(cS.bind(null, e)),
        Ua.current !== null
          ? Ua.current.push(Xr)
          : Ax(function () {
              (ze & (un | ma)) === Ft && Xr();
            }),
        (u = null);
    else {
      var s;
      switch (Gm(a)) {
        case Kn:
          s = Ss;
          break;
        case pr:
          s = rd;
          break;
        case vr:
          s = Ri;
          break;
        case _s:
          s = id;
          break;
        default:
          s = Ri;
          break;
      }
      u = mh(s, oS.bind(null, e));
    }
    (e.callbackPriority = r), (e.callbackNode = u);
  }
  function oS(e, t) {
    if ((S_(), (jo = st), (nf = j), (ze & (un | ma)) !== Ft))
      throw new Error("Should not already be working.");
    var n = e.callbackNode,
      a = xr();
    if (a && e.callbackNode !== n) return null;
    var r = Rs(e, e === xn ? jt : j);
    if (r === j) return null;
    var i = !xs(e, r) && !Z0(e, r) && !t,
      u = i ? o1(e, r) : uf(e, r);
    if (u !== Cr) {
      if (u === $i) {
        var s = _d(e);
        s !== j && ((r = s), (u = sh(e, s)));
      }
      if (u === Ao) {
        var f = ko;
        throw (Ii(e, j), ui(e, r), Vn(e, qt()), f);
      }
      if (u === th) ui(e, r);
      else {
        var m = !xs(e, r),
          y = e.current.alternate;
        if (m && !e1(y)) {
          if (((u = uf(e, r)), u === $i)) {
            var R = _d(e);
            R !== j && ((r = R), (u = sh(e, R)));
          }
          if (u === Ao) {
            var T = ko;
            throw (Ii(e, j), ui(e, r), Vn(e, qt()), T);
          }
        }
        (e.finishedWork = y), (e.finishedLanes = r), JO(e, u, r);
      }
    }
    return Vn(e, qt()), e.callbackNode === n ? oS.bind(null, e) : null;
  }
  function sh(e, t) {
    var n = No;
    if (Os(e)) {
      var a = Ii(e, t);
      (a.flags |= or), SD(e.containerInfo);
    }
    var r = uf(e, t);
    if (r !== $i) {
      var i = jn;
      (jn = n), i !== null && sS(i);
    }
    return r;
  }
  function sS(e) {
    jn === null ? (jn = e) : jn.push.apply(jn, e);
  }
  function JO(e, t, n) {
    switch (t) {
      case Cr:
      case Ao:
        throw new Error("Root did not complete. This is a bug in React.");
      case $i: {
        Pi(e, jn, Tr);
        break;
      }
      case Wc: {
        if ((ui(e, n), jm(n) && !RS())) {
          var a = ah + rS - qt();
          if (a > 10) {
            var r = Rs(e, j);
            if (r !== j) break;
            var i = e.suspendedLanes;
            if (!gu(i, n)) {
              Dn(), Ym(e, i);
              break;
            }
            e.timeoutHandle = up(Pi.bind(null, e, jn, Tr), a);
            break;
          }
        }
        Pi(e, jn, Tr);
        break;
      }
      case Lo: {
        if ((ui(e, n), K0(n))) break;
        if (!RS()) {
          var u = P0(e, n),
            s = u,
            f = qt() - s,
            m = b1(f) - f;
          if (m > 10) {
            e.timeoutHandle = up(Pi.bind(null, e, jn, Tr), m);
            break;
          }
        }
        Pi(e, jn, Tr);
        break;
      }
      case aS: {
        Pi(e, jn, Tr);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function e1(e) {
    for (var t = e; ; ) {
      if (t.flags & gs) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var r = 0; r < a.length; r++) {
              var i = a[r],
                u = i.getSnapshot,
                s = i.value;
              try {
                if (!Jn(u(), s)) return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var f = t.child;
      if (t.subtreeFlags & gs && f !== null) {
        (f.return = t), (t = f);
        continue;
      }
      if (t === e) return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return !0;
  }
  function ui(e, t) {
    (t = Ds(t, Zc)), (t = Ds(t, Uo)), tT(e, t);
  }
  function cS(e) {
    if ((E_(), (ze & (un | ma)) !== Ft))
      throw new Error("Should not already be working.");
    xr();
    var t = Rs(e, j);
    if (!Wn(t, ye)) return Vn(e, qt()), null;
    var n = uf(e, t);
    if (e.tag !== Qr && n === $i) {
      var a = _d(e);
      a !== j && ((t = a), (n = sh(e, a)));
    }
    if (n === Ao) {
      var r = ko;
      throw (Ii(e, j), ui(e, t), Vn(e, qt()), r);
    }
    if (n === th)
      throw new Error("Root did not complete. This is a bug in React.");
    var i = e.current.alternate;
    return (
      (e.finishedWork = i),
      (e.finishedLanes = t),
      Pi(e, jn, Tr),
      Vn(e, qt()),
      null
    );
  }
  function t1(e, t) {
    t !== j &&
      (Ad(e, De(t, ye)), Vn(e, qt()), (ze & (un | ma)) === Ft && (zo(), Xr()));
  }
  function ch(e, t) {
    var n = ze;
    ze |= nS;
    try {
      return e(t);
    } finally {
      (ze = n), ze === Ft && !Ua.isBatchingLegacy && (zo(), ug());
    }
  }
  function n1(e, t, n, a, r) {
    var i = Ta(),
      u = rn.transition;
    try {
      return (rn.transition = null), Xt(Kn), e(t, n, a, r);
    } finally {
      Xt(i), (rn.transition = u), ze === Ft && zo();
    }
  }
  function Rr(e) {
    ri !== null && ri.tag === Qr && (ze & (un | ma)) === Ft && xr();
    var t = ze;
    ze |= nS;
    var n = rn.transition,
      a = Ta();
    try {
      return (rn.transition = null), Xt(Kn), e ? e() : void 0;
    } finally {
      Xt(a), (rn.transition = n), (ze = t), (ze & (un | ma)) === Ft && Xr();
    }
  }
  function fS() {
    return (ze & (un | ma)) !== Ft;
  }
  function rf(e, t) {
    mn(nh, Wa, e), (Wa = De(Wa, t));
  }
  function fh(e) {
    (Wa = nh.current), hn(nh, e);
  }
  function Ii(e, t) {
    (e.finishedWork = null), (e.finishedLanes = j);
    var n = e.timeoutHandle;
    if ((n !== lp && ((e.timeoutHandle = lp), wx(n)), yt !== null))
      for (var a = yt.return; a !== null; ) {
        var r = a.alternate;
        Vb(r, a), (a = a.return);
      }
    xn = e;
    var i = qi(e.current, null);
    return (
      (yt = i),
      (jt = Wa = t),
      (Vt = Cr),
      (ko = null),
      (Kc = j),
      (Uo = j),
      (Zc = j),
      (No = null),
      (jn = null),
      XD(),
      Da.discardPendingWarnings(),
      i
    );
  }
  function dS(e, t) {
    do {
      var n = yt;
      try {
        if (
          (dc(),
          $g(),
          Pt(),
          (eh.current = null),
          n === null || n.return === null)
        ) {
          (Vt = Ao), (ko = t), (yt = null);
          return;
        }
        if ((wn && n.mode & Je && Ic(n, !0), Mn))
          if (
            (vu(),
            t !== null && typeof t == "object" && typeof t.then == "function")
          ) {
            var a = t;
            k0(n, a, jt);
          } else L0(n, t, jt);
        D_(e, n.return, n, t, jt), mS(n);
      } catch (r) {
        (t = r), yt === n && n !== null ? ((n = n.return), (yt = n)) : (n = yt);
        continue;
      }
      return;
    } while (!0);
  }
  function pS() {
    var e = Jv.current;
    return (Jv.current = jc), e === null ? jc : e;
  }
  function vS(e) {
    Jv.current = e;
  }
  function a1() {
    ah = qt();
  }
  function Vo(e) {
    Kc = De(e, Kc);
  }
  function r1() {
    Vt === Cr && (Vt = Wc);
  }
  function dh() {
    (Vt === Cr || Vt === Wc || Vt === $i) && (Vt = Lo),
      xn !== null && (Od(Kc) || Od(Uo)) && ui(xn, jt);
  }
  function i1(e) {
    Vt !== Lo && (Vt = $i), No === null ? (No = [e]) : No.push(e);
  }
  function u1() {
    return Vt === Cr;
  }
  function uf(e, t) {
    var n = ze;
    ze |= un;
    var a = pS();
    if (xn !== e || jt !== t) {
      if (Ca) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Bo(e, jt), r.clear()), Pm(e, t);
      }
      (Tr = qm()), Ii(e, t);
    }
    Um(t);
    do
      try {
        l1();
        break;
      } catch (i) {
        dS(e, i);
      }
    while (!0);
    if ((dc(), (ze = n), vS(a), yt !== null))
      throw new Error(
        "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
      );
    return Nm(), (xn = null), (jt = j), Vt;
  }
  function l1() {
    for (; yt !== null; ) hS(yt);
  }
  function o1(e, t) {
    var n = ze;
    ze |= un;
    var a = pS();
    if (xn !== e || jt !== t) {
      if (Ca) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Bo(e, jt), r.clear()), Pm(e, t);
      }
      (Tr = qm()), zo(), Ii(e, t);
    }
    Um(t);
    do
      try {
        s1();
        break;
      } catch (i) {
        dS(e, i);
      }
    while (!0);
    return (
      dc(),
      vS(a),
      (ze = n),
      yt !== null ? (F0(), Cr) : (Nm(), (xn = null), (jt = j), Vt)
    );
  }
  function s1() {
    for (; yt !== null && !d0(); ) hS(yt);
  }
  function hS(e) {
    var t = e.alternate;
    mt(e);
    var n;
    (e.mode & Je) !== pe
      ? (_v(e), (n = ph(t, e, Wa)), Ic(e, !0))
      : (n = ph(t, e, Wa)),
      Pt(),
      (e.memoizedProps = e.pendingProps),
      n === null ? mS(e) : (yt = n),
      (eh.current = null);
  }
  function mS(e) {
    var t = e;
    do {
      var n = t.alternate,
        a = t.return;
      if ((t.flags & Rl) === de) {
        mt(t);
        var r = void 0;
        if (
          ((t.mode & Je) === pe
            ? (r = jb(n, t, Wa))
            : (_v(t), (r = jb(n, t, Wa)), Ic(t, !1)),
          Pt(),
          r !== null)
        ) {
          yt = r;
          return;
        }
      } else {
        var i = rO(n, t);
        if (i !== null) {
          (i.flags &= u0), (yt = i);
          return;
        }
        if ((t.mode & Je) !== pe) {
          Ic(t, !1);
          for (var u = t.actualDuration, s = t.child; s !== null; )
            (u += s.actualDuration), (s = s.sibling);
          t.actualDuration = u;
        }
        if (a !== null)
          (a.flags |= Rl), (a.subtreeFlags = de), (a.deletions = null);
        else {
          (Vt = th), (yt = null);
          return;
        }
      }
      var f = t.sibling;
      if (f !== null) {
        yt = f;
        return;
      }
      (t = a), (yt = t);
    } while (t !== null);
    Vt === Cr && (Vt = aS);
  }
  function Pi(e, t, n) {
    var a = Ta(),
      r = rn.transition;
    try {
      (rn.transition = null), Xt(Kn), c1(e, t, n, a);
    } finally {
      (rn.transition = r), Xt(a);
    }
    return null;
  }
  function c1(e, t, n, a) {
    do xr();
    while (ri !== null);
    if ((E1(), (ze & (un | ma)) !== Ft))
      throw new Error("Should not already be working.");
    var r = e.finishedWork,
      i = e.finishedLanes;
    if ((x0(i), r === null)) return Am(), null;
    if (
      (i === j &&
        c(
          "root.finishedLanes should not be empty during a commit. This is a bug in React."
        ),
      (e.finishedWork = null),
      (e.finishedLanes = j),
      r === e.current)
    )
      throw new Error(
        "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
      );
    (e.callbackNode = null), (e.callbackPriority = Qt);
    var u = De(r.lanes, r.childLanes);
    nT(e, u),
      e === xn && ((xn = null), (yt = null), (jt = j)),
      ((r.subtreeFlags & du) !== de || (r.flags & du) !== de) &&
        (Yi ||
          ((Yi = !0),
          (uh = n),
          mh(Ri, function () {
            return xr(), null;
          })));
    var s = (r.subtreeFlags & (nd | ad | xl | du)) !== de,
      f = (r.flags & (nd | ad | xl | du)) !== de;
    if (s || f) {
      var m = rn.transition;
      rn.transition = null;
      var y = Ta();
      Xt(Kn);
      var R = ze;
      (ze |= ma),
        (eh.current = null),
        sO(e, r),
        pb(),
        TO(e, r, i),
        Tx(e.containerInfo),
        (e.current = r),
        U0(i),
        RO(r, e, i),
        N0(),
        p0(),
        (ze = R),
        Xt(y),
        (rn.transition = m);
    } else (e.current = r), pb();
    var T = Yi;
    if (
      (Yi ? ((Yi = !1), (ri = e), (Ho = i)) : ((Qu = 0), (tf = null)),
      (u = e.pendingLanes),
      u === j && (Gu = null),
      T || SS(e.current, !1),
      S0(r.stateNode, a),
      Ca && e.memoizedUpdaters.clear(),
      YO(),
      Vn(e, qt()),
      t !== null)
    )
      for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
        var U = t[M],
          ee = U.stack,
          oe = U.digest;
        O(U.value, { componentStack: ee, digest: oe });
      }
    if (Jc) {
      Jc = !1;
      var ie = rh;
      throw ((rh = null), ie);
    }
    return (
      Wn(Ho, ye) && e.tag !== Qr && xr(),
      (u = e.pendingLanes),
      Wn(u, ye) ? (b_(), e === lh ? Fo++ : ((Fo = 0), (lh = e))) : (Fo = 0),
      Xr(),
      Am(),
      null
    );
  }
  function xr() {
    if (ri !== null) {
      var e = Gm(Ho),
        t = uT(vr, e),
        n = rn.transition,
        a = Ta();
      try {
        return (rn.transition = null), Xt(t), d1();
      } finally {
        Xt(a), (rn.transition = n);
      }
    }
    return !1;
  }
  function f1(e) {
    ih.push(e),
      Yi ||
        ((Yi = !0),
        mh(Ri, function () {
          return xr(), null;
        }));
  }
  function d1() {
    if (ri === null) return !1;
    var e = uh;
    uh = null;
    var t = ri,
      n = Ho;
    if (((ri = null), (Ho = j), (ze & (un | ma)) !== Ft))
      throw new Error("Cannot flush passive effects while already rendering.");
    (oh = !0), (ef = !1), z0(n);
    var a = ze;
    (ze |= ma), AO(t.current), _O(t, t.current, n, e);
    {
      var r = ih;
      ih = [];
      for (var i = 0; i < r.length; i++) {
        var u = r[i];
        pO(t, u);
      }
    }
    H0(),
      SS(t.current, !0),
      (ze = a),
      Xr(),
      ef ? (t === tf ? Qu++ : ((Qu = 0), (tf = t))) : (Qu = 0),
      (oh = !1),
      (ef = !1),
      E0(t);
    {
      var s = t.current.stateNode;
      (s.effectDuration = 0), (s.passiveEffectDuration = 0);
    }
    return !0;
  }
  function yS(e) {
    return Gu !== null && Gu.has(e);
  }
  function p1(e) {
    Gu === null ? (Gu = new Set([e])) : Gu.add(e);
  }
  function v1(e) {
    Jc || ((Jc = !0), (rh = e));
  }
  var h1 = v1;
  function gS(e, t, n) {
    var a = Vi(n, t),
      r = hb(e, a, ye),
      i = Kr(e, r, ye),
      u = Dn();
    i !== null && (kl(i, ye, u), Vn(i, u));
  }
  function ut(e, t, n) {
    if ((uO(n), $o(!1), e.tag === k)) {
      gS(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === k) {
        gS(a, e, n);
        return;
      } else if (a.tag === C) {
        var r = a.type,
          i = a.stateNode;
        if (
          typeof r.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" && !yS(i))
        ) {
          var u = Vi(n, e),
            s = kv(a, u, ye),
            f = Kr(a, s, ye),
            m = Dn();
          f !== null && (kl(f, ye, m), Vn(f, m));
          return;
        }
      }
      a = a.return;
    }
    c(
      `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
      n
    );
  }
  function m1(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var r = Dn();
    Ym(e, n),
      x1(e),
      xn === e &&
        gu(jt, n) &&
        (Vt === Lo || (Vt === Wc && jm(jt) && qt() - ah < rS)
          ? Ii(e, j)
          : (Zc = De(Zc, n))),
      Vn(e, r);
  }
  function bS(e, t) {
    t === Qt && (t = WO(e));
    var n = Dn(),
      a = Hn(e, t);
    a !== null && (kl(a, t, n), Vn(a, n));
  }
  function y1(e) {
    var t = e.memoizedState,
      n = Qt;
    t !== null && (n = t.retryLane), bS(e, n);
  }
  function g1(e, t) {
    var n = Qt,
      a;
    switch (e.tag) {
      case Y:
        a = e.stateNode;
        var r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case ke:
        a = e.stateNode;
        break;
      default:
        throw new Error(
          "Pinged unknown suspense boundary type. This is probably a bug in React."
        );
    }
    a !== null && a.delete(t), bS(e, n);
  }
  function b1(e) {
    return e < 120
      ? 120
      : e < 480
      ? 480
      : e < 1080
      ? 1080
      : e < 1920
      ? 1920
      : e < 3e3
      ? 3e3
      : e < 4320
      ? 4320
      : qO(e / 1960) * 1960;
  }
  function S1() {
    if (Fo > QO)
      throw (
        ((Fo = 0),
        (lh = null),
        new Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        ))
      );
    Qu > XO &&
      ((Qu = 0),
      (tf = null),
      c(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ));
  }
  function E1() {
    Da.flushLegacyContextWarning(), Da.flushPendingUnsafeLifecycleWarnings();
  }
  function SS(e, t) {
    mt(e),
      lf(e, cr, VO),
      t && lf(e, bs, BO),
      lf(e, cr, FO),
      t && lf(e, bs, jO),
      Pt();
  }
  function lf(e, t, n) {
    for (var a = e, r = null; a !== null; ) {
      var i = a.subtreeFlags & t;
      a !== r && a.child !== null && i !== de
        ? (a = a.child)
        : ((a.flags & t) !== de && n(a),
          a.sibling !== null ? (a = a.sibling) : (a = r = a.return));
    }
  }
  var of = null;
  function ES(e) {
    {
      if ((ze & un) !== Ft || !(e.mode & Ne)) return;
      var t = e.tag;
      if (
        t !== A &&
        t !== k &&
        t !== C &&
        t !== b &&
        t !== J &&
        t !== Fe &&
        t !== Ee
      )
        return;
      var n = Re(e) || "ReactComponent";
      if (of !== null) {
        if (of.has(n)) return;
        of.add(n);
      } else of = new Set([n]);
      var a = pn;
      try {
        mt(e),
          c(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          );
      } finally {
        a ? mt(e) : Pt();
      }
    }
  }
  var ph;
  {
    var C1 = null;
    ph = function (e, t, n) {
      var a = MS(C1, t);
      try {
        return Ub(e, t, n);
      } catch (i) {
        if (
          ND() ||
          (i !== null && typeof i == "object" && typeof i.then == "function")
        )
          throw i;
        if (
          (dc(),
          $g(),
          Vb(e, t),
          MS(t, a),
          t.mode & Je && _v(t),
          Wf(null, Ub, null, e, t, n),
          n0())
        ) {
          var r = Kf();
          typeof r == "object" &&
            r !== null &&
            r._suppressLogging &&
            typeof i == "object" &&
            i !== null &&
            !i._suppressLogging &&
            (i._suppressLogging = !0);
        }
        throw i;
      }
    };
  }
  var CS = !1,
    vh;
  vh = new Set();
  function T1(e) {
    if (mi && !m_())
      switch (e.tag) {
        case b:
        case J:
        case Ee: {
          var t = (yt && Re(yt)) || "Unknown",
            n = t;
          if (!vh.has(n)) {
            vh.add(n);
            var a = Re(e) || "Unknown";
            c(
              "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",
              a,
              t,
              t
            );
          }
          break;
        }
        case C: {
          CS ||
            (c(
              "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
            ),
            (CS = !0));
          break;
        }
      }
  }
  function Bo(e, t) {
    if (Ca) {
      var n = e.memoizedUpdaters;
      n.forEach(function (a) {
        Im(e, a, t);
      });
    }
  }
  var hh = {};
  function mh(e, t) {
    {
      var n = Ua.current;
      return n !== null ? (n.push(t), hh) : wm(e, t);
    }
  }
  function TS(e) {
    if (e !== hh) return f0(e);
  }
  function RS() {
    return Ua.current !== null;
  }
  function R1(e) {
    {
      if (e.mode & Ne) {
        if (!tS()) return;
      } else if (
        !PO() ||
        ze !== Ft ||
        (e.tag !== b && e.tag !== J && e.tag !== Ee)
      )
        return;
      if (Ua.current === null) {
        var t = pn;
        try {
          mt(e),
            c(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              Re(e)
            );
        } finally {
          t ? mt(e) : Pt();
        }
      }
    }
  }
  function x1(e) {
    e.tag !== Qr &&
      tS() &&
      Ua.current === null &&
      c(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function $o(e) {
    lS = e;
  }
  var ya = null,
    Xu = null,
    D1 = function (e) {
      ya = e;
    };
  function Wu(e) {
    {
      if (ya === null) return e;
      var t = ya(e);
      return t === void 0 ? e : t.current;
    }
  }
  function yh(e) {
    return Wu(e);
  }
  function gh(e) {
    {
      if (ya === null) return e;
      var t = ya(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = Wu(e.render);
          if (e.render !== n) {
            var a = { $$typeof: le, render: n };
            return (
              e.displayName !== void 0 && (a.displayName = e.displayName), a
            );
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function xS(e, t) {
    {
      if (ya === null) return !1;
      var n = e.elementType,
        a = t.type,
        r = !1,
        i = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case C: {
          typeof a == "function" && (r = !0);
          break;
        }
        case b: {
          (typeof a == "function" || i === Ae) && (r = !0);
          break;
        }
        case J: {
          (i === le || i === Ae) && (r = !0);
          break;
        }
        case Fe:
        case Ee: {
          (i === nt || i === Ae) && (r = !0);
          break;
        }
        default:
          return !1;
      }
      if (r) {
        var u = ya(n);
        if (u !== void 0 && u === ya(a)) return !0;
      }
      return !1;
    }
  }
  function DS(e) {
    {
      if (ya === null || typeof WeakSet != "function") return;
      Xu === null && (Xu = new WeakSet()), Xu.add(e);
    }
  }
  var _1 = function (e, t) {
      {
        if (ya === null) return;
        var n = t.staleFamilies,
          a = t.updatedFamilies;
        xr(),
          Rr(function () {
            bh(e.current, a, n);
          });
      }
    },
    O1 = function (e, t) {
      {
        if (e.context !== ea) return;
        xr(),
          Rr(function () {
            Yo(t, e, null, null);
          });
      }
    };
  function bh(e, t, n) {
    {
      var a = e.alternate,
        r = e.child,
        i = e.sibling,
        u = e.tag,
        s = e.type,
        f = null;
      switch (u) {
        case b:
        case Ee:
        case C:
          f = s;
          break;
        case J:
          f = s.render;
          break;
      }
      if (ya === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var m = !1,
        y = !1;
      if (f !== null) {
        var R = ya(f);
        R !== void 0 &&
          (n.has(R) ? (y = !0) : t.has(R) && (u === C ? (y = !0) : (m = !0)));
      }
      if (
        (Xu !== null && (Xu.has(e) || (a !== null && Xu.has(a))) && (y = !0),
        y && (e._debugNeedsRemount = !0),
        y || m)
      ) {
        var T = Hn(e, ye);
        T !== null && Bt(T, e, ye, st);
      }
      r !== null && !y && bh(r, t, n), i !== null && bh(i, t, n);
    }
  }
  var M1 = function (e, t) {
    {
      var n = new Set(),
        a = new Set(
          t.map(function (r) {
            return r.current;
          })
        );
      return Sh(e.current, a, n), n;
    }
  };
  function Sh(e, t, n) {
    {
      var a = e.child,
        r = e.sibling,
        i = e.tag,
        u = e.type,
        s = null;
      switch (i) {
        case b:
        case Ee:
        case C:
          s = u;
          break;
        case J:
          s = u.render;
          break;
      }
      var f = !1;
      s !== null && t.has(s) && (f = !0),
        f ? w1(e, n) : a !== null && Sh(a, t, n),
        r !== null && Sh(r, t, n);
    }
  }
  function w1(e, t) {
    {
      var n = A1(e, t);
      if (n) return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case z:
            t.add(a.stateNode);
            return;
          case F:
            t.add(a.stateNode.containerInfo);
            return;
          case k:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null) throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function A1(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === z) (a = !0), t.add(n.stateNode);
      else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) return a;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return a;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return !1;
  }
  var Eh;
  {
    Eh = !1;
    try {
      var _S = Object.preventExtensions({});
    } catch {
      Eh = !0;
    }
  }
  function L1(e, t, n, a) {
    (this.tag = e),
      (this.key = n),
      (this.elementType = null),
      (this.type = null),
      (this.stateNode = null),
      (this.return = null),
      (this.child = null),
      (this.sibling = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.memoizedProps = null),
      (this.updateQueue = null),
      (this.memoizedState = null),
      (this.dependencies = null),
      (this.mode = a),
      (this.flags = de),
      (this.subtreeFlags = de),
      (this.deletions = null),
      (this.lanes = j),
      (this.childLanes = j),
      (this.alternate = null),
      (this.actualDuration = Number.NaN),
      (this.actualStartTime = Number.NaN),
      (this.selfBaseDuration = Number.NaN),
      (this.treeBaseDuration = Number.NaN),
      (this.actualDuration = 0),
      (this.actualStartTime = -1),
      (this.selfBaseDuration = 0),
      (this.treeBaseDuration = 0),
      (this._debugSource = null),
      (this._debugOwner = null),
      (this._debugNeedsRemount = !1),
      (this._debugHookTypes = null),
      !Eh &&
        typeof Object.preventExtensions == "function" &&
        Object.preventExtensions(this);
  }
  var ta = function (e, t, n, a) {
    return new L1(e, t, n, a);
  };
  function Ch(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function k1(e) {
    return typeof e == "function" && !Ch(e) && e.defaultProps === void 0;
  }
  function U1(e) {
    if (typeof e == "function") return Ch(e) ? C : b;
    if (e != null) {
      var t = e.$$typeof;
      if (t === le) return J;
      if (t === nt) return Fe;
    }
    return A;
  }
  function qi(e, t) {
    var n = e.alternate;
    n === null
      ? ((n = ta(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n._debugSource = e._debugSource),
        (n._debugOwner = e._debugOwner),
        (n._debugHookTypes = e._debugHookTypes),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = de),
        (n.subtreeFlags = de),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & fr),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue);
    var a = e.dependencies;
    switch (
      ((n.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      (n._debugNeedsRemount = e._debugNeedsRemount),
      n.tag)
    ) {
      case A:
      case b:
      case Ee:
        n.type = Wu(e.type);
        break;
      case C:
        n.type = yh(e.type);
        break;
      case J:
        n.type = gh(e.type);
        break;
    }
    return n;
  }
  function N1(e, t) {
    e.flags &= fr | Mt;
    var n = e.alternate;
    if (n === null)
      (e.childLanes = j),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = de),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null),
        (e.selfBaseDuration = 0),
        (e.treeBaseDuration = 0);
    else {
      (e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = de),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type);
      var a = n.dependencies;
      (e.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
        (e.selfBaseDuration = n.selfBaseDuration),
        (e.treeBaseDuration = n.treeBaseDuration);
    }
    return e;
  }
  function z1(e, t, n) {
    var a;
    return (
      e === rc ? ((a = Ne), t === !0 && ((a |= wt), (a |= Va))) : (a = pe),
      Ca && (a |= Je),
      ta(k, null, null, a)
    );
  }
  function Th(e, t, n, a, r, i) {
    var u = A,
      s = e;
    if (typeof e == "function") Ch(e) ? ((u = C), (s = yh(s))) : (s = Wu(s));
    else if (typeof e == "string") u = z;
    else {
      e: switch (e) {
        case V:
          return li(n.children, r, i, t);
        case G:
          (u = Se), (r |= wt), (r & Ne) !== pe && (r |= Va);
          break;
        case ce:
          return H1(n, r, i, t);
        case xe:
          return F1(n, r, i, t);
        case bt:
          return j1(n, r, i, t);
        case pi:
          return OS(n, r, i, t);
        case Gn:
        case dn:
        case Df:
        case _f:
        case Ha:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case we:
                u = X;
                break e;
              case $e:
                u = fe;
                break e;
              case le:
                (u = J), (s = gh(s));
                break e;
              case nt:
                u = Fe;
                break e;
              case Ae:
                (u = Dt), (s = null);
                break e;
            }
          var f = "";
          {
            (e === void 0 ||
              (typeof e == "object" &&
                e !== null &&
                Object.keys(e).length === 0)) &&
              (f +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var m = a ? Re(a) : null;
            m &&
              (f +=
                `

Check the render method of \`` +
                m +
                "`.");
          }
          throw new Error(
            "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
              ("but got: " + (e == null ? e : typeof e) + "." + f)
          );
        }
      }
    }
    var y = ta(u, n, t, r);
    return (
      (y.elementType = e), (y.type = s), (y.lanes = i), (y._debugOwner = a), y
    );
  }
  function Rh(e, t, n) {
    var a = null;
    a = e._owner;
    var r = e.type,
      i = e.key,
      u = e.props,
      s = Th(r, i, u, a, t, n);
    return (s._debugSource = e._source), (s._debugOwner = e._owner), s;
  }
  function li(e, t, n, a) {
    var r = ta(ne, e, a, t);
    return (r.lanes = n), r;
  }
  function H1(e, t, n, a) {
    typeof e.id != "string" &&
      c(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      );
    var r = ta(K, e, a, t | Je);
    return (
      (r.elementType = ce),
      (r.lanes = n),
      (r.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      r
    );
  }
  function F1(e, t, n, a) {
    var r = ta(Y, e, a, t);
    return (r.elementType = xe), (r.lanes = n), r;
  }
  function j1(e, t, n, a) {
    var r = ta(ke, e, a, t);
    return (r.elementType = bt), (r.lanes = n), r;
  }
  function OS(e, t, n, a) {
    var r = ta(Ce, e, a, t);
    (r.elementType = pi), (r.lanes = n);
    var i = { isHidden: !1 };
    return (r.stateNode = i), r;
  }
  function xh(e, t, n) {
    var a = ta($, e, null, t);
    return (a.lanes = n), a;
  }
  function V1() {
    var e = ta(z, null, null, pe);
    return (e.elementType = "DELETED"), e;
  }
  function B1(e) {
    var t = ta(ct, null, null, pe);
    return (t.stateNode = e), t;
  }
  function Dh(e, t, n) {
    var a = e.children !== null ? e.children : [],
      r = ta(F, a, e.key, t);
    return (
      (r.lanes = n),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function MS(e, t) {
    return (
      e === null && (e = ta(A, null, null, pe)),
      (e.tag = t.tag),
      (e.key = t.key),
      (e.elementType = t.elementType),
      (e.type = t.type),
      (e.stateNode = t.stateNode),
      (e.return = t.return),
      (e.child = t.child),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.pendingProps = t.pendingProps),
      (e.memoizedProps = t.memoizedProps),
      (e.updateQueue = t.updateQueue),
      (e.memoizedState = t.memoizedState),
      (e.dependencies = t.dependencies),
      (e.mode = t.mode),
      (e.flags = t.flags),
      (e.subtreeFlags = t.subtreeFlags),
      (e.deletions = t.deletions),
      (e.lanes = t.lanes),
      (e.childLanes = t.childLanes),
      (e.alternate = t.alternate),
      (e.actualDuration = t.actualDuration),
      (e.actualStartTime = t.actualStartTime),
      (e.selfBaseDuration = t.selfBaseDuration),
      (e.treeBaseDuration = t.treeBaseDuration),
      (e._debugSource = t._debugSource),
      (e._debugOwner = t._debugOwner),
      (e._debugNeedsRemount = t._debugNeedsRemount),
      (e._debugHookTypes = t._debugHookTypes),
      e
    );
  }
  function $1(e, t, n, a, r) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = lp),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = Qt),
      (this.eventTimes = wd(j)),
      (this.expirationTimes = wd(st)),
      (this.pendingLanes = j),
      (this.suspendedLanes = j),
      (this.pingedLanes = j),
      (this.expiredLanes = j),
      (this.mutableReadLanes = j),
      (this.finishedLanes = j),
      (this.entangledLanes = j),
      (this.entanglements = wd(j)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = r),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0);
    {
      this.memoizedUpdaters = new Set();
      for (var i = (this.pendingUpdatersLaneMap = []), u = 0; u < ld; u++)
        i.push(new Set());
    }
    switch (t) {
      case rc:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case Qr:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function wS(e, t, n, a, r, i, u, s, f, m) {
    var y = new $1(e, t, n, s, f),
      R = z1(t, i);
    (y.current = R), (R.stateNode = y);
    {
      var T = {
        element: a,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      };
      R.memoizedState = T;
    }
    return Up(R), y;
  }
  var _h = "18.2.0";
  function Y1(e, t, n) {
    var a =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return (
      ua(a),
      {
        $$typeof: E,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    );
  }
  var Oh, Mh;
  (Oh = !1), (Mh = {});
  function AS(e) {
    if (!e) return ea;
    var t = cu(e),
      n = DD(t);
    if (t.tag === C) {
      var a = t.type;
      if (Ya(a)) return ag(t, a, n);
    }
    return n;
  }
  function I1(e, t) {
    {
      var n = cu(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error(
          "Argument appears to not be a ReactComponent. Keys: " + a
        );
      }
      var r = _m(n);
      if (r === null) return null;
      if (r.mode & wt) {
        var i = Re(n) || "Component";
        if (!Mh[i]) {
          Mh[i] = !0;
          var u = pn;
          try {
            mt(r),
              n.mode & wt
                ? c(
                    "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                    t,
                    t,
                    i
                  )
                : c(
                    "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                    t,
                    t,
                    i
                  );
          } finally {
            u ? mt(u) : Pt();
          }
        }
      }
      return r.stateNode;
    }
  }
  function LS(e, t, n, a, r, i, u, s) {
    var f = !1,
      m = null;
    return wS(e, t, f, m, n, a, r, i, u);
  }
  function kS(e, t, n, a, r, i, u, s, f, m) {
    var y = !0,
      R = wS(n, a, y, e, r, i, u, s, f);
    R.context = AS(null);
    var T = R.current,
      O = Dn(),
      M = ii(T),
      U = Sr(O, M);
    return (U.callback = t != null ? t : null), Kr(T, U, M), KO(R, M, O), R;
  }
  function Yo(e, t, n, a) {
    b0(t, e);
    var r = t.current,
      i = Dn(),
      u = ii(r);
    j0(u);
    var s = AS(n);
    t.context === null ? (t.context = s) : (t.pendingContext = s),
      mi &&
        pn !== null &&
        !Oh &&
        ((Oh = !0),
        c(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          Re(pn) || "Unknown"
        ));
    var f = Sr(i, u);
    (f.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null &&
        (typeof a != "function" &&
          c(
            "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            a
          ),
        (f.callback = a));
    var m = Kr(r, f, u);
    return m !== null && (Bt(m, r, u, i), yc(m, r, u)), u;
  }
  function sf(e) {
    var t = e.current;
    if (!t.child) return null;
    switch (t.child.tag) {
      case z:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function P1(e) {
    switch (e.tag) {
      case k: {
        var t = e.stateNode;
        if (Os(t)) {
          var n = Q0(t);
          t1(t, n);
        }
        break;
      }
      case Y: {
        Rr(function () {
          var r = Hn(e, ye);
          if (r !== null) {
            var i = Dn();
            Bt(r, e, ye, i);
          }
        });
        var a = ye;
        wh(e, a);
        break;
      }
    }
  }
  function US(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = eT(n.retryLane, t));
  }
  function wh(e, t) {
    US(e, t);
    var n = e.alternate;
    n && US(n, t);
  }
  function q1(e) {
    if (e.tag === Y) {
      var t = Ml,
        n = Hn(e, t);
      if (n !== null) {
        var a = Dn();
        Bt(n, e, t, a);
      }
      wh(e, t);
    }
  }
  function G1(e) {
    if (e.tag === Y) {
      var t = ii(e),
        n = Hn(e, t);
      if (n !== null) {
        var a = Dn();
        Bt(n, e, t, a);
      }
      wh(e, t);
    }
  }
  function NS(e) {
    var t = c0(e);
    return t === null ? null : t.stateNode;
  }
  var zS = function (e) {
    return null;
  };
  function Q1(e) {
    return zS(e);
  }
  var HS = function (e) {
    return !1;
  };
  function X1(e) {
    return HS(e);
  }
  var FS = null,
    jS = null,
    VS = null,
    BS = null,
    $S = null,
    YS = null,
    IS = null,
    PS = null,
    qS = null;
  {
    var GS = function (e, t, n) {
        var a = t[n],
          r = Ie(e) ? e.slice() : Le({}, e);
        return n + 1 === t.length
          ? (Ie(r) ? r.splice(a, 1) : delete r[a], r)
          : ((r[a] = GS(e[a], t, n + 1)), r);
      },
      QS = function (e, t) {
        return GS(e, t, 0);
      },
      XS = function (e, t, n, a) {
        var r = t[a],
          i = Ie(e) ? e.slice() : Le({}, e);
        if (a + 1 === t.length) {
          var u = n[a];
          (i[u] = i[r]), Ie(i) ? i.splice(r, 1) : delete i[r];
        } else i[r] = XS(e[r], t, n, a + 1);
        return i;
      },
      WS = function (e, t, n) {
        if (t.length !== n.length) {
          g("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < n.length - 1; a++)
            if (t[a] !== n[a]) {
              g(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
        return XS(e, t, n, 0);
      },
      KS = function (e, t, n, a) {
        if (n >= t.length) return a;
        var r = t[n],
          i = Ie(e) ? e.slice() : Le({}, e);
        return (i[r] = KS(e[r], t, n + 1, a)), i;
      },
      ZS = function (e, t, n) {
        return KS(e, t, 0, n);
      },
      Ah = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; ) (n = n.next), t--;
        return n;
      };
    (FS = function (e, t, n, a) {
      var r = Ah(e, t);
      if (r !== null) {
        var i = ZS(r.memoizedState, n, a);
        (r.memoizedState = i),
          (r.baseState = i),
          (e.memoizedProps = Le({}, e.memoizedProps));
        var u = Hn(e, ye);
        u !== null && Bt(u, e, ye, st);
      }
    }),
      (jS = function (e, t, n) {
        var a = Ah(e, t);
        if (a !== null) {
          var r = QS(a.memoizedState, n);
          (a.memoizedState = r),
            (a.baseState = r),
            (e.memoizedProps = Le({}, e.memoizedProps));
          var i = Hn(e, ye);
          i !== null && Bt(i, e, ye, st);
        }
      }),
      (VS = function (e, t, n, a) {
        var r = Ah(e, t);
        if (r !== null) {
          var i = WS(r.memoizedState, n, a);
          (r.memoizedState = i),
            (r.baseState = i),
            (e.memoizedProps = Le({}, e.memoizedProps));
          var u = Hn(e, ye);
          u !== null && Bt(u, e, ye, st);
        }
      }),
      (BS = function (e, t, n) {
        (e.pendingProps = ZS(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Hn(e, ye);
        a !== null && Bt(a, e, ye, st);
      }),
      ($S = function (e, t) {
        (e.pendingProps = QS(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var n = Hn(e, ye);
        n !== null && Bt(n, e, ye, st);
      }),
      (YS = function (e, t, n) {
        (e.pendingProps = WS(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Hn(e, ye);
        a !== null && Bt(a, e, ye, st);
      }),
      (IS = function (e) {
        var t = Hn(e, ye);
        t !== null && Bt(t, e, ye, st);
      }),
      (PS = function (e) {
        zS = e;
      }),
      (qS = function (e) {
        HS = e;
      });
  }
  function W1(e) {
    var t = _m(e);
    return t === null ? null : t.stateNode;
  }
  function K1(e) {
    return null;
  }
  function Z1() {
    return pn;
  }
  function J1(e) {
    var t = e.findFiberByHostInstance,
      n = p.ReactCurrentDispatcher;
    return g0({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: FS,
      overrideHookStateDeletePath: jS,
      overrideHookStateRenamePath: VS,
      overrideProps: BS,
      overridePropsDeletePath: $S,
      overridePropsRenamePath: YS,
      setErrorHandler: PS,
      setSuspenseHandler: qS,
      scheduleUpdate: IS,
      currentDispatcherRef: n,
      findHostInstanceByFiber: W1,
      findFiberByHostInstance: t || K1,
      findHostInstancesForRefresh: M1,
      scheduleRefresh: _1,
      scheduleRoot: O1,
      setRefreshHandler: D1,
      getCurrentFiber: Z1,
      reconcilerVersion: _h,
    });
  }
  var JS =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Lh(e) {
    this._internalRoot = e;
  }
  (cf.prototype.render = Lh.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function"
          ? c(
              "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
            )
          : ff(arguments[1])
          ? c(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
            )
          : typeof arguments[1] < "u" &&
            c(
              "You passed a second argument to root.render(...) but it only accepts one argument."
            );
        var n = t.containerInfo;
        if (n.nodeType !== Ot) {
          var a = NS(t.current);
          a &&
            a.parentNode !== n &&
            c(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            );
        }
      }
      Yo(e, t, null, null);
    }),
    (cf.prototype.unmount = Lh.prototype.unmount =
      function () {
        typeof arguments[0] == "function" &&
          c(
            "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
          );
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fS() &&
            c(
              "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
            ),
            Rr(function () {
              Yo(null, e, null, null);
            }),
            Zy(t);
        }
      });
  function eM(e, t) {
    if (!ff(e))
      throw new Error(
        "createRoot(...): Target container is not a DOM element."
      );
    eE(e);
    var n = !1,
      a = !1,
      r = "",
      i = JS;
    t != null &&
      (t.hydrate
        ? g(
            "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
          )
        : typeof t == "object" &&
          t !== null &&
          t.$$typeof === za &&
          c(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var u = LS(e, rc, null, n, a, r, i);
    Ks(u.current, e);
    var s = e.nodeType === Ot ? e.parentNode : e;
    return Wl(s), new Lh(u);
  }
  function cf(e) {
    this._internalRoot = e;
  }
  function tM(e) {
    e && yT(e);
  }
  cf.prototype.unstable_scheduleHydration = tM;
  function nM(e, t, n) {
    if (!ff(e))
      throw new Error(
        "hydrateRoot(...): Target container is not a DOM element."
      );
    eE(e),
      t === void 0 &&
        c(
          "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
        );
    var a = n != null ? n : null,
      r = (n != null && n.hydratedSources) || null,
      i = !1,
      u = !1,
      s = "",
      f = JS;
    n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (f = n.onRecoverableError));
    var m = kS(t, null, e, rc, a, i, u, s, f);
    if ((Ks(m.current, e), Wl(e), r))
      for (var y = 0; y < r.length; y++) {
        var R = r[y];
        c_(m, R);
      }
    return new cf(m);
  }
  function ff(e) {
    return !!(
      e &&
      (e.nodeType === Nn || e.nodeType === lr || e.nodeType === jf || !Xe)
    );
  }
  function Io(e) {
    return !!(
      e &&
      (e.nodeType === Nn ||
        e.nodeType === lr ||
        e.nodeType === jf ||
        (e.nodeType === Ot && e.nodeValue === " react-mount-point-unstable "))
    );
  }
  function eE(e) {
    e.nodeType === Nn &&
      e.tagName &&
      e.tagName.toUpperCase() === "BODY" &&
      c(
        "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."
      ),
      lo(e) &&
        (e._reactRootContainer
          ? c(
              "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
            )
          : c(
              "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
            ));
  }
  var aM = p.ReactCurrentOwner,
    tE;
  tE = function (e) {
    if (e._reactRootContainer && e.nodeType !== Ot) {
      var t = NS(e._reactRootContainer.current);
      t &&
        t.parentNode !== e &&
        c(
          "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container."
        );
    }
    var n = !!e._reactRootContainer,
      a = kh(e),
      r = !!(a && qr(a));
    r &&
      !n &&
      c(
        "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."
      ),
      e.nodeType === Nn &&
        e.tagName &&
        e.tagName.toUpperCase() === "BODY" &&
        c(
          "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."
        );
  };
  function kh(e) {
    return e ? (e.nodeType === lr ? e.documentElement : e.firstChild) : null;
  }
  function nE() {}
  function rM(e, t, n, a, r) {
    if (r) {
      if (typeof a == "function") {
        var i = a;
        a = function () {
          var T = sf(u);
          i.call(T);
        };
      }
      var u = kS(t, a, e, Qr, null, !1, !1, "", nE);
      (e._reactRootContainer = u), Ks(u.current, e);
      var s = e.nodeType === Ot ? e.parentNode : e;
      return Wl(s), Rr(), u;
    } else {
      for (var f; (f = e.lastChild); ) e.removeChild(f);
      if (typeof a == "function") {
        var m = a;
        a = function () {
          var T = sf(y);
          m.call(T);
        };
      }
      var y = LS(e, Qr, null, !1, !1, "", nE);
      (e._reactRootContainer = y), Ks(y.current, e);
      var R = e.nodeType === Ot ? e.parentNode : e;
      return (
        Wl(R),
        Rr(function () {
          Yo(t, y, n, a);
        }),
        y
      );
    }
  }
  function iM(e, t) {
    e !== null &&
      typeof e != "function" &&
      c(
        "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
        t,
        e
      );
  }
  function df(e, t, n, a, r) {
    tE(n), iM(r === void 0 ? null : r, "render");
    var i = n._reactRootContainer,
      u;
    if (!i) u = rM(n, t, e, r, a);
    else {
      if (((u = i), typeof r == "function")) {
        var s = r;
        r = function () {
          var f = sf(u);
          s.call(f);
        };
      }
      Yo(t, u, e, r);
    }
    return sf(u);
  }
  function uM(e) {
    {
      var t = aM.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n ||
          c(
            "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            Ye(t.type) || "A component"
          ),
          (t.stateNode._warnedAboutRefsInRender = !0);
      }
    }
    return e == null ? null : e.nodeType === Nn ? e : I1(e, "findDOMNode");
  }
  function lM(e, t, n) {
    if (
      (c(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Io(t))
    )
      throw new Error("Target container is not a DOM element.");
    {
      var a = lo(t) && t._reactRootContainer === void 0;
      a &&
        c(
          "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"
        );
    }
    return df(null, e, t, !0, n);
  }
  function oM(e, t, n) {
    if (
      (c(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Io(t))
    )
      throw new Error("Target container is not a DOM element.");
    {
      var a = lo(t) && t._reactRootContainer === void 0;
      a &&
        c(
          "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"
        );
    }
    return df(null, e, t, !1, n);
  }
  function sM(e, t, n, a) {
    if (
      (c(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Io(n))
    )
      throw new Error("Target container is not a DOM element.");
    if (e == null || !a0(e))
      throw new Error("parentComponent must be a valid React Component");
    return df(e, t, n, !1, a);
  }
  function cM(e) {
    if (!Io(e))
      throw new Error(
        "unmountComponentAtNode(...): Target container is not a DOM element."
      );
    {
      var t = lo(e) && e._reactRootContainer === void 0;
      t &&
        c(
          "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"
        );
    }
    if (e._reactRootContainer) {
      {
        var n = kh(e),
          a = n && !qr(n);
        a &&
          c(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          );
      }
      return (
        Rr(function () {
          df(null, null, e, !1, function () {
            (e._reactRootContainer = null), Zy(e);
          });
        }),
        !0
      );
    } else {
      {
        var r = kh(e),
          i = !!(r && qr(r)),
          u =
            e.nodeType === Nn &&
            Io(e.parentNode) &&
            !!e.parentNode._reactRootContainer;
        i &&
          c(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
            u
              ? "You may have accidentally passed in a React root node instead of its container."
              : "Instead, have the parent component update its state and rerender in order to remove this component."
          );
      }
      return !1;
    }
  }
  lT(P1),
    sT(q1),
    cT(G1),
    fT(Ta),
    dT(rT),
    (typeof Map != "function" ||
      Map.prototype == null ||
      typeof Map.prototype.forEach != "function" ||
      typeof Set != "function" ||
      Set.prototype == null ||
      typeof Set.prototype.clear != "function" ||
      typeof Set.prototype.forEach != "function") &&
      c(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      ),
    qC(px),
    XC(ch, n1, Rr);
  function fM(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ff(t)) throw new Error("Target container is not a DOM element.");
    return Y1(e, t, null, n);
  }
  function dM(e, t, n, a) {
    return sM(e, t, n, a);
  }
  var Uh = { usingClientEntryPoint: !1, Events: [qr, _u, Zs, hm, mm, ch] };
  function pM(e, t) {
    return (
      Uh.usingClientEntryPoint ||
        c(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      eM(e, t)
    );
  }
  function vM(e, t, n) {
    return (
      Uh.usingClientEntryPoint ||
        c(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      nM(e, t, n)
    );
  }
  function hM(e) {
    return (
      fS() &&
        c(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        ),
      Rr(e)
    );
  }
  var mM = J1({
    findFiberByHostInstance: Ai,
    bundleType: 1,
    version: _h,
    rendererPackageName: "react-dom",
  });
  if (
    !mM &&
    _t &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf("Chrome") > -1 &&
      navigator.userAgent.indexOf("Edge") === -1) ||
      navigator.userAgent.indexOf("Firefox") > -1)
  ) {
    var aE = window.location.protocol;
    /^(https?|file):$/.test(aE) &&
      console.info(
        "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
          (aE === "file:"
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ""),
        "font-weight:bold"
      );
  }
  (aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh),
    (aa.createPortal = fM),
    (aa.createRoot = pM),
    (aa.findDOMNode = uM),
    (aa.flushSync = hM),
    (aa.hydrate = lM),
    (aa.hydrateRoot = vM),
    (aa.render = oM),
    (aa.unmountComponentAtNode = cM),
    (aa.unstable_batchedUpdates = ch),
    (aa.unstable_renderSubtreeIntoContainer = dM),
    (aa.version = _h),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
(function (l) {
  l.exports = aa;
})(dE);
var Nh = dE.exports;
{
  var pf = Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  (jh.createRoot = function (l, o) {
    pf.usingClientEntryPoint = !0;
    try {
      return Nh.createRoot(l, o);
    } finally {
      pf.usingClientEntryPoint = !1;
    }
  }),
    (jh.hydrateRoot = function (l, o, p) {
      pf.usingClientEntryPoint = !0;
      try {
        return Nh.hydrateRoot(l, o, p);
      } finally {
        pf.usingClientEntryPoint = !1;
      }
    });
}
/*!
 * KUTE.js Standard v2.2.4 (http://thednp.github.io/kute.js)
 * Copyright 2015-2022 © thednp
 * Licensed under MIT (https://github.com/thednp/kute.js/blob/master/LICENSE)
 */ class lt {
  constructor(o, p, v, h, g) {
    const c = o || 0,
      x = p || 0,
      b = v || 1,
      C = h || 1;
    (this.cx = 3 * c),
      (this.bx = 3 * (b - c) - this.cx),
      (this.ax = 1 - this.cx - this.bx),
      (this.cy = 3 * x),
      (this.by = 3 * (C - x) - this.cy),
      (this.ay = 1 - this.cy - this.by);
    const A = (k) => this.sampleCurveY(this.solveCurveX(k));
    return (
      Object.defineProperty(A, "name", { writable: !0 }),
      (A.name = g || `cubic-bezier(${[c, x, b, C]})`),
      A
    );
  }
  sampleCurveX(o) {
    return ((this.ax * o + this.bx) * o + this.cx) * o;
  }
  sampleCurveY(o) {
    return ((this.ay * o + this.by) * o + this.cy) * o;
  }
  sampleCurveDerivativeX(o) {
    return (3 * this.ax * o + 2 * this.bx) * o + this.cx;
  }
  solveCurveX(o) {
    if (o <= 0) return 0;
    if (o >= 1) return 1;
    let v = o,
      h = 0,
      g = 0;
    for (let b = 0; b < 8; b += 1) {
      if (((h = this.sampleCurveX(v) - o), Math.abs(h) < 1e-6)) return v;
      if (((g = this.sampleCurveDerivativeX(v)), Math.abs(g) < 1e-6)) break;
      v -= h / g;
    }
    let c = 0,
      x = 1;
    for (v = o; c < x; ) {
      if (((h = this.sampleCurveX(v)), Math.abs(h - o) < 1e-6)) return v;
      o > h ? (c = v) : (x = v), (v = (x - c) * 0.5 + c);
    }
    return v;
  }
}
var EM = "1.0.1";
const CM = EM;
Object.assign(lt, { Version: CM });
const Te = {},
  si = [];
let hf;
typeof global < "u"
  ? (hf = global)
  : typeof window < "u"
  ? (hf = window.self)
  : (hf = {});
const TM = hf,
  qo = {},
  Bn = {};
let Go;
typeof self > "u" && typeof process < "u" && process.hrtime
  ? (Go = () => {
      const l = process.hrtime();
      return l[0] * 1e3 + l[1] / 1e6;
    })
  : typeof self < "u" &&
    self.performance !== void 0 &&
    self.performance.now !== void 0
  ? (Go = self.performance.now.bind(self.performance))
  : typeof Date < "u" && Date.now
  ? (Go = Date.now)
  : (Go = () => new Date().getTime());
const RM = Go,
  Qh = {};
Qh.now = RM;
let Wi = 0;
const Cf = (l) => {
  let o = 0;
  for (; o < si.length; ) si[o].update(l) ? (o += 1) : si.splice(o, 1);
  Wi = requestAnimationFrame(Cf);
};
function xM() {
  setTimeout(() => {
    !si.length &&
      Wi &&
      (cancelAnimationFrame(Wi),
      (Wi = null),
      Object.keys(Bn).forEach((l) => {
        typeof Bn[l] == "function"
          ? Te[l] && delete Te[l]
          : Object.keys(Bn[l]).forEach((o) => {
              Te[o] && delete Te[o];
            });
      }),
      Object.keys(qo).forEach((l) => {
        Te[l] && delete Te[l];
      }));
  }, 64);
}
const rE = { Tick: Wi, Ticker: Cf, Tweens: si, Time: Qh };
Object.keys(rE).forEach((l) => {
  Te[l] || (Te[l] = l === "Time" ? Qh.now : rE[l]);
});
TM._KUTE = Te;
const el = {},
  ra = {},
  Or = {
    duration: 700,
    delay: 0,
    easing: "linear",
    repeat: 0,
    repeatDelay: 0,
    yoyo: !1,
    resetStart: !1,
    offset: 0,
  },
  Vh = {},
  Bh = {},
  Gi = {},
  mf = {},
  $h = {},
  iE = {},
  hE = (l) => si.push(l),
  mE = (l) => {
    const o = si.indexOf(l);
    o !== -1 && si.splice(o, 1);
  };
function DM() {
  Object.keys($h).forEach((l) => {
    const o = $h[l],
      p = el[l];
    Object.keys(o).forEach((v) => {
      typeof o[v] == "function" &&
      Object.keys(this.valuesEnd).some(
        (h) =>
          (p && p.includes(h)) ||
          (h === "attr" &&
            Object.keys(this.valuesEnd[h]).some((g) => p && p.includes(g)))
      )
        ? Te[v] || (Te[v] = o[v])
        : Object.keys(this.valuesEnd).forEach((h) => {
            const g = this.valuesEnd[h];
            g instanceof Object &&
              Object.keys(g).forEach((c) => {
                typeof o[c] == "function"
                  ? Te[c] || (Te[c] = o[c])
                  : Object.keys(o[v]).forEach((x) => {
                      o[c] &&
                        typeof o[c][x] == "function" &&
                        (Te[x] || (Te[x] = o[c][x]));
                    });
              });
          });
    });
  });
}
function yE(l) {
  if (!l.style) return !1;
  const o = l.style.cssText.replace(/\s/g, "").split(";"),
    p = {},
    v = ["translate3d", "translate", "scale3d", "skew"];
  return (
    o.forEach((h) => {
      /transform/i.test(h) &&
        h
          .split(":")[1]
          .split(")")
          .forEach((c) => {
            const x = c.split("("),
              b = x[0],
              C = x[1];
            /matrix/.test(b) || (p[b] = v.includes(b) ? C.split(",") : C);
          });
    }),
    p
  );
}
function Wo(l, o) {
  let p = ra[o];
  const v = l.style,
    h = getComputedStyle(l) || l.currentStyle,
    g = v[o] && !/auto|initial|none|unset/.test(v[o]) ? v[o] : h[o];
  return o !== "transform" && (o in h || o in v) && (p = g), p;
}
function Yh(l, o) {
  const p = o === "start" ? this.valuesStart : this.valuesEnd;
  Object.keys(Vh).forEach((v) => {
    const h = Vh[v],
      g = el[v];
    Object.keys(h).forEach((c) => {
      const x = {};
      Object.keys(l).forEach((b) => {
        ra[b] && h[b]
          ? (p[b] = h[b].call(this, b, l[b]))
          : !ra[c] && c === "transform" && g.includes(b)
          ? (x[b] = l[b])
          : !ra[b] && b === "transform"
          ? (p[b] = l[b])
          : !ra[c] && g && g.includes(b) && (p[b] = h[c].call(this, b, l[b]));
      }),
        Object.keys(x).length && (p[c] = h[c].call(this, c, x));
    });
  });
}
function _M() {
  const l = {},
    o = yE(this.element);
  Object.keys(this.valuesStart).forEach((p) => {
    Object.keys(Bh).forEach((v) => {
      const h = Bh[v];
      Object.keys(h).forEach((g) => {
        g === p && h[p]
          ? (l[p] = h[g].call(this, p, this.valuesStart[p]))
          : el[v] &&
            el[v].includes(p) &&
            (l[p] = h[g].call(this, p, this.valuesStart[p]));
      });
    });
  }),
    Object.keys(o).forEach((p) => {
      p in this.valuesStart || (l[p] = o[p] || ra[p]);
    }),
    (this.valuesStart = {}),
    Yh.call(this, l, "start");
}
const Ki = {};
Ki.tween = null;
Ki.processEasing = null;
const zh = {
  linear: new lt(0, 0, 1, 1, "linear"),
  easingSinusoidalIn: new lt(0.47, 0, 0.745, 0.715, "easingSinusoidalIn"),
  easingSinusoidalOut: new lt(0.39, 0.575, 0.565, 1, "easingSinusoidalOut"),
  easingSinusoidalInOut: new lt(
    0.445,
    0.05,
    0.55,
    0.95,
    "easingSinusoidalInOut"
  ),
  easingQuadraticIn: new lt(0.55, 0.085, 0.68, 0.53, "easingQuadraticIn"),
  easingQuadraticOut: new lt(0.25, 0.46, 0.45, 0.94, "easingQuadraticOut"),
  easingQuadraticInOut: new lt(
    0.455,
    0.03,
    0.515,
    0.955,
    "easingQuadraticInOut"
  ),
  easingCubicIn: new lt(0.55, 0.055, 0.675, 0.19, "easingCubicIn"),
  easingCubicOut: new lt(0.215, 0.61, 0.355, 1, "easingCubicOut"),
  easingCubicInOut: new lt(0.645, 0.045, 0.355, 1, "easingCubicInOut"),
  easingQuarticIn: new lt(0.895, 0.03, 0.685, 0.22, "easingQuarticIn"),
  easingQuarticOut: new lt(0.165, 0.84, 0.44, 1, "easingQuarticOut"),
  easingQuarticInOut: new lt(0.77, 0, 0.175, 1, "easingQuarticInOut"),
  easingQuinticIn: new lt(0.755, 0.05, 0.855, 0.06, "easingQuinticIn"),
  easingQuinticOut: new lt(0.23, 1, 0.32, 1, "easingQuinticOut"),
  easingQuinticInOut: new lt(0.86, 0, 0.07, 1, "easingQuinticInOut"),
  easingExponentialIn: new lt(0.95, 0.05, 0.795, 0.035, "easingExponentialIn"),
  easingExponentialOut: new lt(0.19, 1, 0.22, 1, "easingExponentialOut"),
  easingExponentialInOut: new lt(1, 0, 0, 1, "easingExponentialInOut"),
  easingCircularIn: new lt(0.6, 0.04, 0.98, 0.335, "easingCircularIn"),
  easingCircularOut: new lt(0.075, 0.82, 0.165, 1, "easingCircularOut"),
  easingCircularInOut: new lt(0.785, 0.135, 0.15, 0.86, "easingCircularInOut"),
  easingBackIn: new lt(0.6, -0.28, 0.735, 0.045, "easingBackIn"),
  easingBackOut: new lt(0.175, 0.885, 0.32, 1.275, "easingBackOut"),
  easingBackInOut: new lt(0.68, -0.55, 0.265, 1.55, "easingBackInOut"),
};
function OM(l) {
  if (typeof l == "function") return l;
  if (typeof zh[l] == "function") return zh[l];
  if (/bezier/.test(l)) {
    const o = l.replace(/bezier|\s|\(|\)/g, "").split(",");
    return new lt(o[0] * 1, o[1] * 1, o[2] * 1, o[3] * 1);
  }
  return zh.linear;
}
Ki.processEasing = OM;
function MM(l, o) {
  try {
    let p, v;
    return (
      o
        ? ((v = l instanceof Array && l.every((h) => h instanceof Element)),
          (p =
            l instanceof HTMLCollection || l instanceof NodeList || v
              ? l
              : document.querySelectorAll(l)))
        : (p =
            l instanceof Element || l === window
              ? l
              : document.querySelector(l)),
      p
    );
  } catch {
    throw TypeError(`KUTE.js - Element(s) not found: ${l}.`);
  }
}
function gE() {
  Object.keys(Bn).forEach((l) => {
    typeof Bn[l] == "function"
      ? Bn[l].call(this, l)
      : Object.keys(Bn[l]).forEach((o) => {
          Bn[l][o].call(this, o);
        });
  }),
    DM.call(this);
}
class bE {
  constructor(o, p, v, h) {
    (this.element = o),
      (this.playing = !1),
      (this._startTime = null),
      (this._startFired = !1),
      (this.valuesEnd = v),
      (this.valuesStart = p);
    const g = h || {};
    (this._resetStart = g.resetStart || 0),
      (this._easing =
        typeof g.easing == "function" ? g.easing : Ki.processEasing(g.easing)),
      (this._duration = g.duration || Or.duration),
      (this._delay = g.delay || Or.delay),
      Object.keys(g).forEach((x) => {
        const b = `_${x}`;
        b in this || (this[b] = g[x]);
      });
    const c = this._easing.name;
    return (
      Bn[c] ||
        (Bn[c] = function (b) {
          !Te[b] && b === this._easing.name && (Te[b] = this._easing);
        }),
      this
    );
  }
  start(o) {
    return (
      hE(this),
      (this.playing = !0),
      (this._startTime = typeof o < "u" ? o : Te.Time()),
      (this._startTime += this._delay),
      this._startFired ||
        (this._onStart && this._onStart.call(this),
        gE.call(this),
        (this._startFired = !0)),
      Wi || Cf(),
      this
    );
  }
  stop() {
    return (
      this.playing &&
        (mE(this),
        (this.playing = !1),
        this._onStop && this._onStop.call(this),
        this.close()),
      this
    );
  }
  close() {
    Object.keys(mf).forEach((o) => {
      Object.keys(mf[o]).forEach((p) => {
        mf[o][p].call(this, p);
      });
    }),
      (this._startFired = !1),
      xM.call(this);
  }
  chain(o) {
    return (
      (this._chain = []),
      (this._chain = o.length ? o : this._chain.concat(o)),
      this
    );
  }
  stopChainedTweens() {
    this._chain && this._chain.length && this._chain.forEach((o) => o.stop());
  }
  update(o) {
    const p = o !== void 0 ? o : Te.Time();
    let v;
    if (p < this._startTime && this.playing) return !0;
    (v = (p - this._startTime) / this._duration),
      (v = this._duration === 0 || v > 1 ? 1 : v);
    const h = this._easing(v);
    return (
      Object.keys(this.valuesEnd).forEach((g) => {
        Te[g](this.element, this.valuesStart[g], this.valuesEnd[g], h);
      }),
      this._onUpdate && this._onUpdate.call(this),
      v === 1
        ? (this._onComplete && this._onComplete.call(this),
          (this.playing = !1),
          this.close(),
          this._chain !== void 0 &&
            this._chain.length &&
            this._chain.map((g) => g.start()),
          !1)
        : !0
    );
  }
}
Ki.tween = bE;
class wM extends bE {
  constructor(...o) {
    super(...o), (this.valuesStart = {}), (this.valuesEnd = {});
    const [p, v, h] = o.slice(1);
    return (
      Yh.call(this, v, "end"),
      this._resetStart ? (this.valuesStart = p) : Yh.call(this, p, "start"),
      this._resetStart ||
        Object.keys(Gi).forEach((g) => {
          Object.keys(Gi[g]).forEach((c) => {
            Gi[g][c].call(this, c);
          });
        }),
      (this.paused = !1),
      (this._pauseTime = null),
      (this._repeat = h.repeat || Or.repeat),
      (this._repeatDelay = h.repeatDelay || Or.repeatDelay),
      (this._repeatOption = this._repeat),
      (this.valuesRepeat = {}),
      (this._yoyo = h.yoyo || Or.yoyo),
      (this._reversed = !1),
      this
    );
  }
  start(o) {
    return (
      this._resetStart &&
        ((this.valuesStart = this._resetStart),
        _M.call(this),
        Object.keys(Gi).forEach((p) => {
          Object.keys(Gi[p]).forEach((v) => {
            Gi[p][v].call(this, v);
          });
        })),
      (this.paused = !1),
      this._yoyo &&
        Object.keys(this.valuesEnd).forEach((p) => {
          this.valuesRepeat[p] = this.valuesStart[p];
        }),
      super.start(o),
      this
    );
  }
  stop() {
    return (
      super.stop(),
      !this.paused &&
        this.playing &&
        ((this.paused = !1), this.stopChainedTweens()),
      this
    );
  }
  close() {
    return (
      super.close(),
      this._repeatOption > 0 && (this._repeat = this._repeatOption),
      this._yoyo &&
        this._reversed === !0 &&
        (this.reverse(), (this._reversed = !1)),
      this
    );
  }
  resume() {
    return (
      this.paused &&
        this.playing &&
        ((this.paused = !1),
        this._onResume !== void 0 && this._onResume.call(this),
        gE.call(this),
        (this._startTime += Te.Time() - this._pauseTime),
        hE(this),
        Wi || Cf()),
      this
    );
  }
  pause() {
    return (
      !this.paused &&
        this.playing &&
        (mE(this),
        (this.paused = !0),
        (this._pauseTime = Te.Time()),
        this._onPause !== void 0 && this._onPause.call(this)),
      this
    );
  }
  reverse() {
    Object.keys(this.valuesEnd).forEach((o) => {
      const p = this.valuesRepeat[o];
      (this.valuesRepeat[o] = this.valuesEnd[o]),
        (this.valuesEnd[o] = p),
        (this.valuesStart[o] = this.valuesRepeat[o]);
    });
  }
  update(o) {
    const p = o !== void 0 ? o : Te.Time();
    let v;
    if (p < this._startTime && this.playing) return !0;
    (v = (p - this._startTime) / this._duration),
      (v = this._duration === 0 || v > 1 ? 1 : v);
    const h = this._easing(v);
    return (
      Object.keys(this.valuesEnd).forEach((g) => {
        Te[g](this.element, this.valuesStart[g], this.valuesEnd[g], h);
      }),
      this._onUpdate && this._onUpdate.call(this),
      v === 1
        ? this._repeat > 0
          ? (Number.isFinite(this._repeat) && (this._repeat -= 1),
            (this._startTime = p),
            Number.isFinite(this._repeat) &&
              this._yoyo &&
              !this._reversed &&
              (this._startTime += this._repeatDelay),
            this._yoyo && ((this._reversed = !this._reversed), this.reverse()),
            !0)
          : (this._onComplete && this._onComplete.call(this),
            (this.playing = !1),
            this.close(),
            this._chain !== void 0 &&
              this._chain.length &&
              this._chain.forEach((g) => g.start()),
            !1)
        : !0
    );
  }
}
Ki.tween = wM;
class AM {
  constructor(o) {
    try {
      if (o.component in el)
        throw Error(`KUTE - ${o.component} already registered`);
      if (o.property in ra)
        throw Error(`KUTE - ${o.property} already registered`);
    } catch (b) {
      throw Error(b);
    }
    const p = this,
      v = o.component,
      h = {
        prepareProperty: Vh,
        prepareStart: Bh,
        onStart: Bn,
        onComplete: mf,
        crossCheck: Gi,
      },
      g = o.category,
      c = o.property,
      x =
        (o.properties && o.properties.length) ||
        (o.subProperties && o.subProperties.length);
    return (
      (el[v] = o.properties || o.subProperties || o.property),
      "defaultValue" in o
        ? ((ra[c] = o.defaultValue), (p.supports = `${c} property`))
        : o.defaultValues &&
          (Object.keys(o.defaultValues).forEach((b) => {
            ra[b] = o.defaultValues[b];
          }),
          (p.supports = `${x || c} ${c || g} properties`)),
      o.defaultOptions && Object.assign(Or, o.defaultOptions),
      o.functions &&
        Object.keys(h).forEach((b) => {
          b in o.functions &&
            (typeof o.functions[b] == "function"
              ? (h[b][v] || (h[b][v] = {}),
                h[b][v][g || c] || (h[b][v][g || c] = o.functions[b]))
              : Object.keys(o.functions[b]).forEach((C) => {
                  h[b][v] || (h[b][v] = {}),
                    h[b][v][C] || (h[b][v][C] = o.functions[b][C]);
                }));
        }),
      o.Interpolate &&
        (Object.keys(o.Interpolate).forEach((b) => {
          const C = o.Interpolate[b];
          typeof C == "function" && !qo[b]
            ? (qo[b] = C)
            : Object.keys(C).forEach((A) => {
                typeof C[A] == "function" && !qo[b] && (qo[b] = C[A]);
              });
        }),
        ($h[v] = o.Interpolate)),
      o.Util &&
        Object.keys(o.Util).forEach((b) => {
          iE[b] || (iE[b] = o.Util[b]);
        }),
      p
    );
  }
}
const Ju = (l, o) => {
  const p = parseInt(l, 10) || 0,
    v = ["px", "%", "deg", "rad", "em", "rem", "vh", "vw"];
  let h;
  for (let g = 0; g < v.length; g += 1)
    if (typeof l == "string" && l.includes(v[g])) {
      h = v[g];
      break;
    }
  return h === void 0 && (h = o ? "deg" : "px"), { v: p, u: h };
};
function Sn(l, o, p) {
  const v = +l,
    h = o - l;
  return v + h * p;
}
function LM(l) {
  l in this.valuesEnd &&
    !Te[l] &&
    (Te[l] = (o, p, v, h) => {
      o.style[l] = `${
        h > 0.99 || h < 0.01 ? ((Sn(p, v, h) * 10) >> 0) / 10 : Sn(p, v, h) >> 0
      }px`;
    });
}
function kM(l) {
  return Wo(this.element, l) || ra[l];
}
function UM(l, o) {
  const p = Ju(o),
    v = l === "height" ? "offsetHeight" : "offsetWidth";
  return p.u === "%" ? (p.v * this.element[v]) / 100 : p.v;
}
const SE = ["top", "left", "width", "height"],
  NM = { top: 0, left: 0, width: 0, height: 0 },
  EE = {};
SE.forEach((l) => {
  EE[l] = LM;
});
const zM = { prepareStart: kM, prepareProperty: UM, onStart: EE },
  HM = {
    component: "essentialBoxModel",
    category: "boxModel",
    properties: SE,
    defaultValues: NM,
    Interpolate: { numbers: Sn },
    functions: zM,
    Util: { trueDimension: Ju },
  },
  FM = (l) => {
    const o = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      p = l.replace(o, (h, g, c, x) => g + g + c + c + x + x),
      v = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);
    return v
      ? { r: parseInt(v[1], 16), g: parseInt(v[2], 16), b: parseInt(v[3], 16) }
      : null;
  },
  Tf = (l) => {
    let o;
    if (/rgb|rgba/.test(l)) {
      const p = l.replace(/\s|\)/, "").split("(")[1].split(","),
        v = p[3] ? p[3] : null;
      v
        ? (o = {
            r: parseInt(p[0], 10),
            g: parseInt(p[1], 10),
            b: parseInt(p[2], 10),
            a: parseFloat(v),
          })
        : (o = {
            r: parseInt(p[0], 10),
            g: parseInt(p[1], 10),
            b: parseInt(p[2], 10),
          });
    }
    if (/^#/.test(l)) {
      const p = FM(l);
      o = { r: p.r, g: p.g, b: p.b };
    }
    if (
      (/transparent|none|initial|inherit/.test(l) &&
        (o = { r: 0, g: 0, b: 0, a: 0 }),
      !/^#|^rgb/.test(l))
    ) {
      const p = document.getElementsByTagName("head")[0];
      p.style.color = l;
      let v = getComputedStyle(p, null).color;
      (v = /rgb/.test(v) ? v.replace(/[^\d,]/g, "").split(",") : [0, 0, 0]),
        (p.style.color = ""),
        (o = {
          r: parseInt(v[0], 10),
          g: parseInt(v[1], 10),
          b: parseInt(v[2], 10),
        });
    }
    return o;
  };
function Rf(l, o, p) {
  const v = {},
    h = ")",
    g = ",",
    c = "rgb(",
    x = "rgba(";
  return (
    Object.keys(o).forEach((b) => {
      b !== "a"
        ? (v[b] = Sn(l[b], o[b], p) >> 0 || 0)
        : l[b] && o[b] && (v[b] = ((Sn(l[b], o[b], p) * 100) >> 0) / 100);
    }),
    v.a
      ? x + v.r + g + v.g + g + v.b + g + v.a + h
      : c + v.r + g + v.g + g + v.b + h
  );
}
function jM(l) {
  this.valuesEnd[l] &&
    !Te[l] &&
    (Te[l] = (o, p, v, h) => {
      o.style[l] = Rf(p, v, h);
    });
}
const Xh = [
    "color",
    "backgroundColor",
    "outlineColor",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ],
  CE = {};
Xh.forEach((l) => {
  CE[l] = "#000";
});
const TE = {};
Xh.forEach((l) => {
  TE[l] = jM;
});
function VM(l) {
  return Wo(this.element, l) || ra[l];
}
function BM(l, o) {
  return Tf(o);
}
const $M = { prepareStart: VM, prepareProperty: BM, onStart: TE },
  YM = {
    component: "colorProperties",
    category: "colors",
    properties: Xh,
    defaultValues: CE,
    Interpolate: { numbers: Sn, colors: Rf },
    functions: $M,
    Util: { trueColor: Tf },
  },
  Qi = {},
  IM = {
    attr(l) {
      !Te[l] &&
        this.valuesEnd[l] &&
        (Te[l] = (o, p, v, h) => {
          Object.keys(v).forEach((g) => {
            Te.attributes[g](o, g, p[g], v[g], h);
          });
        });
    },
    attributes(l) {
      !Te[l] && this.valuesEnd.attr && (Te[l] = Qi);
    },
  },
  yf = "htmlAttributes",
  RE = ["fill", "stroke", "stop-color"];
function Wh(l) {
  return l.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function PM(l, o) {
  const p = {};
  return (
    Object.keys(o).forEach((v) => {
      const h = Wh(v).replace(/_+[a-z]+/, ""),
        g = this.element.getAttribute(h);
      p[h] = RE.includes(h)
        ? g || "rgba(0,0,0,0)"
        : g || (/opacity/i.test(v) ? 1 : 0);
    }),
    p
  );
}
function qM(l, o) {
  const p = {};
  return (
    Object.keys(o).forEach((v) => {
      const h = Wh(v),
        g = /(%|[a-z]+)$/,
        c = this.element.getAttribute(h.replace(/_+[a-z]+/, ""));
      if (RE.includes(h))
        (Bn[yf][h] = (x) => {
          this.valuesEnd[l] &&
            this.valuesEnd[l][x] &&
            !(x in Qi) &&
            (Qi[x] = (b, C, A, k, F) => {
              b.setAttribute(C, Rf(A, k, F));
            });
        }),
          (p[h] = Tf(o[v]) || ra.htmlAttributes[v]);
      else if (c !== null && g.test(c)) {
        const x = Ju(c).u || Ju(o[v]).u,
          b = /%/.test(x) ? "_percent" : `_${x}`;
        (Bn[yf][h + b] = (C) => {
          this.valuesEnd[l] &&
            this.valuesEnd[l][C] &&
            !(C in Qi) &&
            (Qi[C] = (A, k, F, z, $) => {
              const ne = k.replace(b, "");
              A.setAttribute(ne, ((Sn(F.v, z.v, $) * 1e3) >> 0) / 1e3 + z.u);
            });
        }),
          (p[h + b] = Ju(o[v]));
      } else
        (!g.test(o[v]) || c === null || (c && !g.test(c))) &&
          ((Bn[yf][h] = (x) => {
            this.valuesEnd[l] &&
              this.valuesEnd[l][x] &&
              !(x in Qi) &&
              (Qi[x] = (b, C, A, k, F) => {
                b.setAttribute(C, ((Sn(A, k, F) * 1e3) >> 0) / 1e3);
              });
          }),
          (p[h] = parseFloat(o[v])));
    }),
    p
  );
}
const GM = { prepareStart: PM, prepareProperty: qM, onStart: IM },
  QM = {
    component: yf,
    property: "attr",
    subProperties: [
      "fill",
      "stroke",
      "stop-color",
      "fill-opacity",
      "stroke-opacity",
    ],
    defaultValue: {
      fill: "rgb(0,0,0)",
      stroke: "rgb(0,0,0)",
      "stop-color": "rgb(0,0,0)",
      opacity: 1,
      "stroke-opacity": 1,
      "fill-opacity": 1,
    },
    Interpolate: { numbers: Sn, colors: Rf },
    functions: GM,
    Util: { replaceUppercase: Wh, trueColor: Tf, trueDimension: Ju },
  };
function XM(l) {
  l in this.valuesEnd &&
    !Te[l] &&
    (Te[l] = (o, p, v, h) => {
      o.style[l] = ((Sn(p, v, h) * 1e3) >> 0) / 1e3;
    });
}
function WM(l) {
  return Wo(this.element, l);
}
function KM(l, o) {
  return parseFloat(o);
}
const ZM = { prepareStart: WM, prepareProperty: KM, onStart: XM },
  JM = {
    component: "opacityProperty",
    property: "opacity",
    defaultValue: 1,
    Interpolate: { numbers: Sn },
    functions: ZM,
  },
  xE = String("abcdefghijklmnopqrstuvwxyz").split(""),
  DE = String("abcdefghijklmnopqrstuvwxyz").toUpperCase().split(""),
  _E = String("~!@#$%^&*()_+{}[];'<>,./?=-").split(""),
  OE = String("0123456789").split(""),
  ME = xE.concat(DE, OE),
  ew = ME.concat(_E),
  gf = {
    alpha: xE,
    upper: DE,
    symbols: _E,
    numeric: OE,
    alphanumeric: ME,
    all: ew,
  },
  tw = {
    text(l) {
      if (!Te[l] && this.valuesEnd[l]) {
        const o = this._textChars;
        let p = gf[Or.textChars];
        o in gf ? (p = gf[o]) : o && o.length && (p = o),
          (Te[l] = (v, h, g, c) => {
            let x = "",
              b = "";
            const C = g === "" ? " " : g,
              A = h.substring(0),
              k = g.substring(0),
              F = p[(Math.random() * p.length) >> 0];
            h === " "
              ? ((b = k.substring(Math.min(c * k.length, k.length) >> 0, 0)),
                (v.innerHTML = c < 1 ? b + F : C))
              : g === " "
              ? ((x = A.substring(
                  0,
                  Math.min((1 - c) * A.length, A.length) >> 0
                )),
                (v.innerHTML = c < 1 ? x + F : C))
              : ((x = A.substring(
                  A.length,
                  Math.min(c * A.length, A.length) >> 0
                )),
                (b = k.substring(0, Math.min(c * k.length, k.length) >> 0)),
                (v.innerHTML = c < 1 ? b + F + x : C));
          });
      }
    },
    number(l) {
      l in this.valuesEnd &&
        !Te[l] &&
        (Te[l] = (o, p, v, h) => {
          o.innerHTML = Sn(p, v, h) >> 0;
        });
    },
  };
function Qo(l, o) {
  let p, v;
  if (typeof l == "string")
    return (
      (v = document.createElement("SPAN")),
      (v.innerHTML = l),
      (v.className = o),
      v
    );
  if (
    !l.children.length ||
    (l.children.length && l.children[0].className !== o)
  ) {
    const h = l.innerHTML;
    (p = document.createElement("SPAN")),
      (p.className = o),
      (p.innerHTML = h),
      l.appendChild(p),
      (l.innerHTML = p.outerHTML);
  } else
    l.children.length && l.children[0].className === o && ([p] = l.children);
  return p;
}
function uE(l, o) {
  let p = [];
  const v = l.children.length;
  if (v) {
    const h = [];
    let g = l.innerHTML,
      c;
    for (let x = 0, b, C, A; x < v; x += 1)
      (b = l.children[x]),
        (C = b.outerHTML),
        (c = g.split(C)),
        c[0] !== ""
          ? ((A = Qo(c[0], o)), h.push(A), (g = g.replace(c[0], "")))
          : c[1] !== "" &&
            ((A = Qo(c[1].split("<")[0], o)),
            h.push(A),
            (g = g.replace(c[0].split("<")[0], ""))),
        b.classList.contains(o) || b.classList.add(o),
        h.push(b),
        (g = g.replace(C, ""));
    if (g !== "") {
      const x = Qo(g, o);
      h.push(x);
    }
    p = p.concat(h);
  } else p = p.concat([Qo(l, o)]);
  return p;
}
function nw(l, o) {
  const p = uE(l, "text-part"),
    v = uE(Qo(o), "text-part");
  return (
    (l.innerHTML = ""),
    (l.innerHTML += p
      .map((h) => ((h.className += " oldText"), h.outerHTML))
      .join("")),
    (l.innerHTML += v
      .map(
        (h) => (
          (h.className += " newText"), h.outerHTML.replace(h.innerHTML, "")
        )
      )
      .join("")),
    [p, v]
  );
}
function aw(l, o, p) {
  if (l.playing) return !1;
  const v = p || {};
  (v.duration = 1e3),
    p.duration === "auto"
      ? (v.duration = "auto")
      : Number.isFinite(p.duration * 1) && (v.duration = p.duration * 1);
  const h = Ki.tween,
    g = nw(l, o),
    c = g[0],
    x = g[1],
    b = [].slice.call(l.getElementsByClassName("oldText")).reverse(),
    C = [].slice.call(l.getElementsByClassName("newText"));
  let A = [],
    k = 0;
  return (
    (A = A.concat(
      b.map(
        (F, z) => (
          (v.duration =
            v.duration === "auto" ? c[z].innerHTML.length * 75 : v.duration),
          (v.delay = k),
          (v.onComplete = null),
          (k += v.duration),
          new h(F, { text: F.innerHTML }, { text: "" }, v)
        )
      )
    )),
    (A = A.concat(
      C.map((F, z) => {
        function $() {
          (l.innerHTML = o), (l.playing = !1);
        }
        return (
          (v.duration =
            v.duration === "auto" ? x[z].innerHTML.length * 75 : v.duration),
          (v.delay = k),
          (v.onComplete = z === x.length - 1 ? $ : null),
          (k += v.duration),
          new h(F, { text: "" }, { text: x[z].innerHTML }, v)
        );
      })
    )),
    (A.start = function () {
      l.playing || (A.forEach((z) => z.start()), (l.playing = !0));
    }),
    A
  );
}
function rw() {
  return this.element.innerHTML;
}
function iw(l, o) {
  return l === "number" ? parseFloat(o) : o === "" ? " " : o;
}
const uw = { prepareStart: rw, prepareProperty: iw, onStart: tw },
  lw = {
    component: "textWriteProperties",
    category: "textWrite",
    properties: ["text", "number"],
    defaultValues: { text: " ", number: "0" },
    defaultOptions: { textChars: "alpha" },
    Interpolate: { numbers: Sn },
    functions: uw,
    Util: { charSet: gf, createTextTweens: aw },
  };
function wE(l, o, p, v) {
  return `perspective(${(((l + (o - l) * v) * 1e3) >> 0) / 1e3}${p})`;
}
function AE(l, o, p, v) {
  const h = [];
  for (let g = 0; g < 3; g += 1)
    h[g] =
      (l[g] || o[g] ? (((l[g] + (o[g] - l[g]) * v) * 1e3) >> 0) / 1e3 : 0) + p;
  return `translate3d(${h.join(",")})`;
}
function LE(l, o, p, v) {
  let h = "";
  return (
    (h +=
      l[0] || o[0]
        ? `rotateX(${(((l[0] + (o[0] - l[0]) * v) * 1e3) >> 0) / 1e3}${p})`
        : ""),
    (h +=
      l[1] || o[1]
        ? `rotateY(${(((l[1] + (o[1] - l[1]) * v) * 1e3) >> 0) / 1e3}${p})`
        : ""),
    (h +=
      l[2] || o[2]
        ? `rotateZ(${(((l[2] + (o[2] - l[2]) * v) * 1e3) >> 0) / 1e3}${p})`
        : ""),
    h
  );
}
function ow(l, o, p, v) {
  const h = [];
  return (
    (h[0] =
      (l[0] === o[0] ? o[0] : (((l[0] + (o[0] - l[0]) * v) * 1e3) >> 0) / 1e3) +
      p),
    (h[1] =
      l[1] || o[1]
        ? (l[1] === o[1]
            ? o[1]
            : (((l[1] + (o[1] - l[1]) * v) * 1e3) >> 0) / 1e3) + p
        : "0"),
    `translate(${h.join(",")})`
  );
}
function sw(l, o, p, v) {
  return `rotate(${(((l + (o - l) * v) * 1e3) >> 0) / 1e3}${p})`;
}
function kE(l, o, p) {
  return `scale(${(((l + (o - l) * p) * 1e3) >> 0) / 1e3})`;
}
function UE(l, o, p, v) {
  const h = [];
  return (
    (h[0] =
      (l[0] === o[0] ? o[0] : (((l[0] + (o[0] - l[0]) * v) * 1e3) >> 0) / 1e3) +
      p),
    (h[1] =
      l[1] || o[1]
        ? (l[1] === o[1]
            ? o[1]
            : (((l[1] + (o[1] - l[1]) * v) * 1e3) >> 0) / 1e3) + p
        : "0"),
    `skew(${h.join(",")})`
  );
}
function cw(l) {
  !Te[l] &&
    this.valuesEnd[l] &&
    (Te[l] = (o, p, v, h) => {
      o.style[l] =
        (p.perspective || v.perspective
          ? wE(p.perspective, v.perspective, "px", h)
          : "") +
        (p.translate3d ? AE(p.translate3d, v.translate3d, "px", h) : "") +
        (p.rotate3d ? LE(p.rotate3d, v.rotate3d, "deg", h) : "") +
        (p.skew ? UE(p.skew, v.skew, "deg", h) : "") +
        (p.scale || v.scale ? kE(p.scale, v.scale, h) : "");
    });
}
function fw(l) {
  const o = yE(this.element);
  return o[l] ? o[l] : ra[l];
}
function dw(l, o) {
  const p = ["X", "Y", "Z"],
    v = {},
    h = [],
    g = [],
    c = [],
    x = ["translate3d", "translate", "rotate3d", "skew"];
  return (
    Object.keys(o).forEach((b) => {
      const C =
        typeof o[b] == "object" && o[b].length
          ? o[b].map((A) => parseInt(A, 10))
          : parseInt(o[b], 10);
      if (x.includes(b)) {
        const A = b === "translate" || b === "rotate" ? `${b}3d` : b;
        b === "skew"
          ? (v[A] = C.length ? [C[0] || 0, C[1] || 0] : [C || 0, 0])
          : b === "translate"
          ? (v[A] = C.length
              ? [C[0] || 0, C[1] || 0, C[2] || 0]
              : [C || 0, 0, 0])
          : (v[A] = [C[0] || 0, C[1] || 0, C[2] || 0]);
      } else if (/[XYZ]/.test(b)) {
        const A = b.replace(/[XYZ]/, ""),
          k = A === "skew" ? A : `${A}3d`,
          F = A === "skew" ? 2 : 3;
        let z = [];
        A === "translate"
          ? (z = h)
          : A === "rotate"
          ? (z = g)
          : A === "skew" && (z = c);
        for (let $ = 0; $ < F; $ += 1) {
          const ne = p[$];
          z[$] = `${A}${ne}` in o ? parseInt(o[`${A}${ne}`], 10) : 0;
        }
        v[k] = z;
      } else
        b === "rotate"
          ? (v.rotate3d = [0, 0, C])
          : (v[b] = b === "scale" ? parseFloat(o[b]) : C);
    }),
    v
  );
}
function pw(l) {
  this.valuesEnd[l] &&
    this.valuesEnd[l] &&
    this.valuesEnd[l].perspective &&
    !this.valuesStart[l].perspective &&
    (this.valuesStart[l].perspective = this.valuesEnd[l].perspective);
}
const vw = {
    prepareStart: fw,
    prepareProperty: dw,
    onStart: cw,
    crossCheck: pw,
  },
  hw = [
    "perspective",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "translate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "rotate",
    "skewX",
    "skewY",
    "skew",
    "scale",
  ],
  mw = {
    perspective: 400,
    translate3d: [0, 0, 0],
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    translate: [0, 0],
    rotate3d: [0, 0, 0],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    skew: [0, 0],
    scale: 1,
  },
  yw = {
    component: "transformFunctions",
    property: "transform",
    subProperties: hw,
    defaultValues: mw,
    functions: vw,
    Interpolate: {
      perspective: wE,
      translate3d: AE,
      rotate3d: LE,
      translate: ow,
      rotate: sw,
      scale: kE,
      skew: UE,
    },
  };
function gw(l) {
  l in this.valuesEnd &&
    !Te[l] &&
    (Te[l] = (o, p, v, h) => {
      const g = ((p.l * 100) >> 0) / 100,
        c = ((Sn(p.s, v.s, h) * 100) >> 0) / 100,
        x = ((Sn(p.e, v.e, h) * 100) >> 0) / 100,
        b = 0 - c,
        C = x + b;
      (o.style.strokeDashoffset = `${b}px`),
        (o.style.strokeDasharray = `${
          (((C < 1 ? 0 : C) * 100) >> 0) / 100
        }px, ${g}px`);
    });
}
function Ih(l, o) {
  return (parseFloat(l) / 100) * o;
}
function NE(l) {
  const o = l.getAttribute("width"),
    p = l.getAttribute("height");
  return o * 2 + p * 2;
}
function zE(l) {
  const o = l.getAttribute("points").split(" ");
  let p = 0;
  if (o.length > 1) {
    const v = (g) => {
        const c = g.split(",");
        return c.length !== 2 ||
          Number.isNaN(c[0] * 1) ||
          Number.isNaN(c[1] * 1)
          ? 0
          : [parseFloat(c[0]), parseFloat(c[1])];
      },
      h = (g, c) =>
        g !== void 0 && c !== void 0
          ? Math.sqrt((c[0] - g[0]) ** 2 + (c[1] - g[1]) ** 2)
          : 0;
    if (o.length > 2)
      for (let g = 0; g < o.length - 1; g += 1) p += h(v(o[g]), v(o[g + 1]));
    p += l.tagName === "polygon" ? h(v(o[0]), v(o[o.length - 1])) : 0;
  }
  return p;
}
function HE(l) {
  const o = l.getAttribute("x1"),
    p = l.getAttribute("x2"),
    v = l.getAttribute("y1"),
    h = l.getAttribute("y2");
  return Math.sqrt((p - o) ** 2 + (h - v) ** 2);
}
function FE(l) {
  const o = l.getAttribute("r");
  return 2 * Math.PI * o;
}
function jE(l) {
  const o = l.getAttribute("rx"),
    p = l.getAttribute("ry"),
    v = 2 * o,
    h = 2 * p;
  return (Math.sqrt(0.5 * (v * v + h * h)) * (Math.PI * 2)) / 2;
}
function VE(l) {
  return l.tagName === "rect"
    ? NE(l)
    : l.tagName === "circle"
    ? FE(l)
    : l.tagName === "ellipse"
    ? jE(l)
    : ["polygon", "polyline"].includes(l.tagName)
    ? zE(l)
    : l.tagName === "line"
    ? HE(l)
    : 0;
}
function Kh(l, o) {
  const p = /path|glyph/.test(l.tagName) ? l.getTotalLength() : VE(l);
  let v, h, g, c;
  if (
    o instanceof Object &&
    Object.keys(o).every((x) => ["s", "e", "l"].includes(x))
  )
    return o;
  if (typeof o == "string") {
    const x = o.split(/,|\s/);
    (v = /%/.test(x[0]) ? Ih(x[0].trim(), p) : parseFloat(x[0])),
      (h = /%/.test(x[1]) ? Ih(x[1].trim(), p) : parseFloat(x[1]));
  } else
    typeof o > "u" &&
      ((c = parseFloat(Wo(l, "stroke-dashoffset"))),
      (g = Wo(l, "stroke-dasharray").split(",")),
      (v = 0 - c),
      (h = parseFloat(g[0]) + v || p));
  return { s: v, e: h, l: p };
}
function bw(l) {
  (l.style.strokeDashoffset = ""), (l.style.strokeDasharray = "");
}
function Sw() {
  return Kh(this.element);
}
function Ew(l, o) {
  return Kh(this.element, o);
}
const Cw = { prepareStart: Sw, prepareProperty: Ew, onStart: gw },
  Tw = {
    component: "svgDraw",
    property: "draw",
    defaultValue: "0% 0%",
    Interpolate: { numbers: Sn },
    functions: Cw,
    Util: {
      getRectLength: NE,
      getPolyLength: zE,
      getLineLength: HE,
      getCircleLength: FE,
      getEllipseLength: jE,
      getTotalLength: VE,
      resetDraw: bw,
      getDraw: Kh,
      percent: Ih,
    },
  };
function Rw(l, o, p) {
  if (l[p].length > 7) {
    l[p].shift();
    const v = l[p];
    let h = p;
    for (; v.length; )
      (o[p] = "A"), l.splice((h += 1), 0, ["C", ...v.splice(0, 6)]);
    l.splice(p, 1);
  }
}
const Xo = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };
function BE(l) {
  return (
    Array.isArray(l) &&
    l.every((o) => {
      const p = o[0].toLowerCase();
      return Xo[p] === o.length - 1 && "achlmqstvz".includes(p);
    })
  );
}
function $E(l) {
  return BE(l) && l.every(([o]) => o === o.toUpperCase());
}
function YE(l) {
  return $E(l) && l.every(([o]) => "ACLMQZ".includes(o));
}
function xw(l) {
  return YE(l) && l.every(([o]) => "MC".includes(o));
}
function Zo(l) {
  return l.map((o) => (Array.isArray(o) ? [...o] : o));
}
function lE(l) {
  let o = l.pathValue[l.segmentStart],
    p = o.toLowerCase();
  const { data: v } = l;
  for (
    ;
    v.length >= Xo[p] &&
    (p === "m" && v.length > 2
      ? (l.segments.push([o, ...v.splice(0, 2)]),
        (p = "l"),
        (o = o === "m" ? "l" : "L"))
      : l.segments.push([o, ...v.splice(0, Xo[p])]),
    !!Xo[p]);

  );
}
const Xi = "SVGPathCommander error";
function Dw(l) {
  const { index: o, pathValue: p } = l,
    v = p.charCodeAt(o);
  if (v === 48) {
    (l.param = 0), (l.index += 1);
    return;
  }
  if (v === 49) {
    (l.param = 1), (l.index += 1);
    return;
  }
  l.err = `${Xi}: invalid Arc flag "${p[o]}", expecting 0 or 1 at index ${o}`;
}
function Zu(l) {
  return l >= 48 && l <= 57;
}
const oi = "Invalid path value";
function _w(l) {
  const { max: o, pathValue: p, index: v } = l;
  let h = v,
    g = !1,
    c = !1,
    x = !1,
    b = !1,
    C;
  if (h >= o) {
    l.err = `${Xi}: ${oi} at index ${h}, "pathValue" is missing param`;
    return;
  }
  if (
    ((C = p.charCodeAt(h)),
    (C === 43 || C === 45) && ((h += 1), (C = p.charCodeAt(h))),
    !Zu(C) && C !== 46)
  ) {
    l.err = `${Xi}: ${oi} at index ${h}, "${p[h]}" is not a number`;
    return;
  }
  if (C !== 46) {
    if (
      ((g = C === 48),
      (h += 1),
      (C = p.charCodeAt(h)),
      g && h < o && C && Zu(C))
    ) {
      l.err = `${Xi}: ${oi} at index ${v}, "${p[v]}" illegal number`;
      return;
    }
    for (; h < o && Zu(p.charCodeAt(h)); ) (h += 1), (c = !0);
    C = p.charCodeAt(h);
  }
  if (C === 46) {
    for (b = !0, h += 1; Zu(p.charCodeAt(h)); ) (h += 1), (x = !0);
    C = p.charCodeAt(h);
  }
  if (C === 101 || C === 69) {
    if (b && !c && !x) {
      l.err = `${Xi}: ${oi} at index ${h}, "${p[h]}" invalid float exponent`;
      return;
    }
    if (
      ((h += 1),
      (C = p.charCodeAt(h)),
      (C === 43 || C === 45) && (h += 1),
      h < o && Zu(p.charCodeAt(h)))
    )
      for (; h < o && Zu(p.charCodeAt(h)); ) h += 1;
    else {
      l.err = `${Xi}: ${oi} at index ${h}, "${p[h]}" invalid integer exponent`;
      return;
    }
  }
  (l.index = h), (l.param = +l.pathValue.slice(v, h));
}
function Ow(l) {
  const o = [
    5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
    8202, 8239, 8287, 12288, 65279,
  ];
  return (
    l === 10 ||
    l === 13 ||
    l === 8232 ||
    l === 8233 ||
    l === 32 ||
    l === 9 ||
    l === 11 ||
    l === 12 ||
    l === 160 ||
    (l >= 5760 && o.includes(l))
  );
}
function bf(l) {
  const { pathValue: o, max: p } = l;
  for (; l.index < p && Ow(o.charCodeAt(l.index)); ) l.index += 1;
}
function Mw(l) {
  switch (l | 32) {
    case 109:
    case 122:
    case 108:
    case 104:
    case 118:
    case 99:
    case 115:
    case 113:
    case 116:
    case 97:
      return !0;
    default:
      return !1;
  }
}
function ww(l) {
  return (l >= 48 && l <= 57) || l === 43 || l === 45 || l === 46;
}
function Aw(l) {
  return (l | 32) === 97;
}
function Lw(l) {
  const { max: o, pathValue: p, index: v } = l,
    h = p.charCodeAt(v),
    g = Xo[p[v].toLowerCase()];
  if (((l.segmentStart = v), !Mw(h))) {
    l.err = `${Xi}: ${oi} "${p[v]}" is not a path command`;
    return;
  }
  if (((l.index += 1), bf(l), (l.data = []), !g)) {
    lE(l);
    return;
  }
  for (;;) {
    for (let c = g; c > 0; c -= 1) {
      if ((Aw(h) && (c === 3 || c === 4) ? Dw(l) : _w(l), l.err.length)) return;
      l.data.push(l.param),
        bf(l),
        l.index < o && p.charCodeAt(l.index) === 44 && ((l.index += 1), bf(l));
    }
    if (l.index >= l.max || !ww(p.charCodeAt(l.index))) break;
  }
  lE(l);
}
function kw(l) {
  (this.segments = []),
    (this.pathValue = l),
    (this.max = l.length),
    (this.index = 0),
    (this.param = 0),
    (this.segmentStart = 0),
    (this.data = []),
    (this.err = "");
}
function Uw(l) {
  if (BE(l)) return Zo(l);
  const o = new kw(l);
  for (bf(o); o.index < o.max && !o.err.length; ) Lw(o);
  return o.err ? o.err : o.segments;
}
function Nw(l) {
  if ($E(l)) return Zo(l);
  const o = Uw(l);
  let p = 0,
    v = 0,
    h = 0,
    g = 0;
  return o.map((c) => {
    const x = c.slice(1).map(Number),
      [b] = c,
      C = b.toUpperCase();
    if (b === "M") return ([p, v] = x), (h = p), (g = v), ["M", p, v];
    let A = [];
    if (b !== C)
      switch (C) {
        case "A":
          A = [C, x[0], x[1], x[2], x[3], x[4], x[5] + p, x[6] + v];
          break;
        case "V":
          A = [C, x[0] + v];
          break;
        case "H":
          A = [C, x[0] + p];
          break;
        default: {
          const F = x.map((z, $) => z + ($ % 2 ? v : p));
          A = [C, ...F];
        }
      }
    else A = [C, ...x];
    const k = A.length;
    switch (C) {
      case "Z":
        (p = h), (v = g);
        break;
      case "H":
        [, p] = A;
        break;
      case "V":
        [, v] = A;
        break;
      default:
        (p = A[k - 2]), (v = A[k - 1]), C === "M" && ((h = p), (g = v));
    }
    return A;
  });
}
function zw(l, o) {
  const [p] = l,
    { x1: v, y1: h, x2: g, y2: c } = o,
    x = l.slice(1).map(Number);
  let b = l;
  if (("TQ".includes(p) || ((o.qx = null), (o.qy = null)), p === "H"))
    b = ["L", l[1], h];
  else if (p === "V") b = ["L", v, l[1]];
  else if (p === "S") {
    const C = v * 2 - g,
      A = h * 2 - c;
    (o.x1 = C), (o.y1 = A), (b = ["C", C, A, ...x]);
  } else if (p === "T") {
    const C = v * 2 - o.qx,
      A = h * 2 - o.qy;
    (o.qx = C), (o.qy = A), (b = ["Q", C, A, ...x]);
  } else if (p === "Q") {
    const [C, A] = x;
    (o.qx = C), (o.qy = A);
  }
  return b;
}
const IE = { x1: 0, y1: 0, x2: 0, y2: 0, x: 0, y: 0, qx: null, qy: null };
function xf(l) {
  if (YE(l)) return Zo(l);
  const o = Nw(l),
    p = { ...IE },
    v = o.length;
  for (let h = 0; h < v; h += 1) {
    o[h], (o[h] = zw(o[h], p));
    const g = o[h],
      c = g.length;
    (p.x1 = +g[c - 2]),
      (p.y1 = +g[c - 1]),
      (p.x2 = +g[c - 4] || p.x1),
      (p.y2 = +g[c - 3] || p.y1);
  }
  return o;
}
function vf(l, o, p) {
  const v = l * Math.cos(p) - o * Math.sin(p),
    h = l * Math.sin(p) + o * Math.cos(p);
  return { x: v, y: h };
}
function PE(l, o, p, v, h, g, c, x, b, C) {
  let A = l,
    k = o,
    F = p,
    z = v,
    $ = x,
    ne = b;
  const Se = (Math.PI * 120) / 180,
    fe = (Math.PI / 180) * (+h || 0);
  let X = [],
    J,
    K,
    Y,
    Fe,
    Ee;
  if (C) [K, Y, Fe, Ee] = C;
  else {
    (J = vf(A, k, -fe)),
      (A = J.x),
      (k = J.y),
      (J = vf($, ne, -fe)),
      ($ = J.x),
      (ne = J.y);
    const Qe = (A - $) / 2,
      Xe = (k - ne) / 2;
    let gt = (Qe * Qe) / (F * F) + (Xe * Xe) / (z * z);
    gt > 1 && ((gt = Math.sqrt(gt)), (F *= gt), (z *= gt));
    const Wt = F * F,
      Mn = z * z,
      wn =
        (g === c ? -1 : 1) *
        Math.sqrt(
          Math.abs(
            (Wt * Mn - Wt * Xe * Xe - Mn * Qe * Qe) /
              (Wt * Xe * Xe + Mn * Qe * Qe)
          )
        );
    (Fe = (wn * F * Xe) / z + (A + $) / 2),
      (Ee = (wn * -z * Qe) / F + (k + ne) / 2),
      (K = Math.asin(((((k - Ee) / z) * 10 ** 9) >> 0) / 10 ** 9)),
      (Y = Math.asin(((((ne - Ee) / z) * 10 ** 9) >> 0) / 10 ** 9)),
      (K = A < Fe ? Math.PI - K : K),
      (Y = $ < Fe ? Math.PI - Y : Y),
      K < 0 && (K = Math.PI * 2 + K),
      Y < 0 && (Y = Math.PI * 2 + Y),
      c && K > Y && (K -= Math.PI * 2),
      !c && Y > K && (Y -= Math.PI * 2);
  }
  let Dt = Y - K;
  if (Math.abs(Dt) > Se) {
    const Qe = Y,
      Xe = $,
      gt = ne;
    (Y = K + Se * (c && Y > K ? 1 : -1)),
      ($ = Fe + F * Math.cos(Y)),
      (ne = Ee + z * Math.sin(Y)),
      (X = PE($, ne, F, z, h, 0, c, Xe, gt, [Y, Qe, Fe, Ee]));
  }
  Dt = Y - K;
  const Ct = Math.cos(K),
    ct = Math.sin(K),
    ke = Math.cos(Y),
    $t = Math.sin(Y),
    Ce = Math.tan(Dt / 4),
    Me = (4 / 3) * F * Ce,
    ot = (4 / 3) * z * Ce,
    Ge = [A, k],
    se = [A + Me * ct, k - ot * Ct],
    ht = [$ + Me * $t, ne - ot * ke],
    on = [$, ne];
  if (((se[0] = 2 * Ge[0] - se[0]), (se[1] = 2 * Ge[1] - se[1]), C))
    return [...se, ...ht, ...on, ...X];
  X = [...se, ...ht, ...on, ...X];
  const sn = [];
  for (let Qe = 0, Xe = X.length; Qe < Xe; Qe += 1)
    sn[Qe] = Qe % 2 ? vf(X[Qe - 1], X[Qe], fe).y : vf(X[Qe], X[Qe + 1], fe).x;
  return sn;
}
function Hw(l, o, p, v, h, g) {
  const c = 0.3333333333333333,
    x = 2 / 3;
  return [c * l + x * p, c * o + x * v, c * h + x * p, c * g + x * v, h, g];
}
function _r(l, o, p) {
  const [v, h] = l,
    [g, c] = o;
  return [v + (g - v) * p, h + (c - h) * p];
}
function Za(l, o) {
  return Math.sqrt(
    (l[0] - o[0]) * (l[0] - o[0]) + (l[1] - o[1]) * (l[1] - o[1])
  );
}
function Ko(l, o, p, v, h) {
  const g = Za([l, o], [p, v]);
  let c = { x: 0, y: 0 };
  if (typeof h == "number")
    if (h <= 0) c = { x: l, y: o };
    else if (h >= g) c = { x: p, y: v };
    else {
      const [x, b] = _r([l, o], [p, v], h / g);
      c = { x, y: b };
    }
  return {
    length: g,
    point: c,
    min: { x: Math.min(l, p), y: Math.min(o, v) },
    max: { x: Math.max(l, p), y: Math.max(o, v) },
  };
}
function oE(l, o, p, v) {
  const g = [l, o],
    c = [p, v],
    x = _r(g, c, 0.5),
    b = _r(c, x, 0.5),
    C = _r(x, b, 0.5),
    A = _r(b, C, 0.5),
    k = _r(C, A, 0.5),
    F = [...g, ...x, ...C, ...k, 0.5],
    z = Ko(...F).point,
    $ = [...k, ...A, ...b, ...c, 0],
    ne = Ko(...$).point;
  return [z.x, z.y, ne.x, ne.y, p, v];
}
function Fw(l, o) {
  const [p] = l,
    v = l.slice(1).map(Number),
    [h, g] = v;
  let c;
  const { x1: x, y1: b, x: C, y: A } = o;
  switch (("TQ".includes(p) || ((o.qx = null), (o.qy = null)), p)) {
    case "M":
      return (o.x = h), (o.y = g), l;
    case "A":
      return (c = [x, b, ...v]), ["C", ...PE(...c)];
    case "Q":
      return (o.qx = h), (o.qy = g), (c = [x, b, ...v]), ["C", ...Hw(...c)];
    case "L":
      return ["C", ...oE(x, b, h, g)];
    case "Z":
      return ["C", ...oE(x, b, C, A)];
  }
  return l;
}
function jw(l) {
  if (xw(l)) return Zo(l);
  const o = xf(l),
    p = { ...IE },
    v = [];
  let h = "",
    g = o.length;
  for (let c = 0; c < g; c += 1) {
    ([h] = o[c]), (v[c] = h), (o[c] = Fw(o[c], p)), Rw(o, v, c), (g = o.length);
    const x = o[c],
      b = x.length;
    (p.x1 = +x[b - 2]),
      (p.y1 = +x[b - 1]),
      (p.x2 = +x[b - 4] || p.x1),
      (p.y2 = +x[b - 3] || p.y1);
  }
  return o;
}
const Vw = { origin: [0, 0, 0], round: 4 };
function Sf(l, o) {
  let { round: p } = Vw;
  if (o === "off" || p === "off") return Zo(l);
  p = o >= 0 ? o : p;
  const v = typeof p == "number" && p >= 1 ? 10 ** p : 1;
  return l.map((h) => {
    const g = h
      .slice(1)
      .map(Number)
      .map((c) => (p ? Math.round(c * v) / v : Math.round(c)));
    return [h[0], ...g];
  });
}
function Bw(l, o) {
  return Sf(l, o)
    .map((p) => p[0] + p.slice(1).join(" "))
    .join("");
}
function $w(l) {
  const o = [];
  let p,
    v = -1;
  return (
    l.forEach((h) => {
      h[0] === "M" ? ((p = [h]), (v += 1)) : (p = [...p, h]), (o[v] = p);
    }),
    o
  );
}
function sE(l, o) {
  const { x: p, y: v } = l,
    { x: h, y: g } = o,
    c = p * h + v * g,
    x = Math.sqrt((p ** 2 + v ** 2) * (h ** 2 + g ** 2));
  return (p * g - v * h < 0 ? -1 : 1) * Math.acos(c / x);
}
function Yw(l, o, p, v, h, g, c, x, b, C) {
  const { abs: A, sin: k, cos: F, sqrt: z, PI: $ } = Math;
  let ne = A(p),
    Se = A(v);
  const X = (((h % 360) + 360) % 360) * ($ / 180);
  if (l === x && o === b) return { x: l, y: o };
  if (ne === 0 || Se === 0) return Ko(l, o, x, b, C).point;
  const J = (l - x) / 2,
    K = (o - b) / 2,
    Y = { x: F(X) * J + k(X) * K, y: -k(X) * J + F(X) * K },
    Fe = Y.x ** 2 / ne ** 2 + Y.y ** 2 / Se ** 2;
  Fe > 1 && ((ne *= z(Fe)), (Se *= z(Fe)));
  const Ee = ne ** 2 * Se ** 2 - ne ** 2 * Y.y ** 2 - Se ** 2 * Y.x ** 2,
    Dt = ne ** 2 * Y.y ** 2 + Se ** 2 * Y.x ** 2;
  let Ct = Ee / Dt;
  Ct = Ct < 0 ? 0 : Ct;
  const ct = (g !== c ? 1 : -1) * z(Ct),
    ke = { x: ct * ((ne * Y.y) / Se), y: ct * (-(Se * Y.x) / ne) },
    $t = {
      x: F(X) * ke.x - k(X) * ke.y + (l + x) / 2,
      y: k(X) * ke.x + F(X) * ke.y + (o + b) / 2,
    },
    Ce = { x: (Y.x - ke.x) / ne, y: (Y.y - ke.y) / Se },
    Me = sE({ x: 1, y: 0 }, Ce),
    ot = { x: (-Y.x - ke.x) / ne, y: (-Y.y - ke.y) / Se };
  let Ge = sE(Ce, ot);
  !c && Ge > 0 ? (Ge -= 2 * $) : c && Ge < 0 && (Ge += 2 * $), (Ge %= 2 * $);
  const se = Me + Ge * C,
    ht = ne * F(se),
    on = Se * k(se);
  return { x: F(X) * ht - k(X) * on + $t.x, y: k(X) * ht + F(X) * on + $t.y };
}
function Iw(l, o, p, v, h, g, c, x, b, C) {
  const A = typeof C == "number";
  let k = l,
    F = o,
    z = 0,
    $ = [k, F, z],
    ne = [k, F],
    Se = 0,
    fe = { x: 0, y: 0 },
    X = [{ x: k, y: F }];
  A && C <= 0 && (fe = { x: k, y: F });
  const J = 300;
  for (let K = 0; K <= J; K += 1) {
    if (
      ((Se = K / J),
      ({ x: k, y: F } = Yw(l, o, p, v, h, g, c, x, b, Se)),
      (X = [...X, { x: k, y: F }]),
      (z += Za(ne, [k, F])),
      (ne = [k, F]),
      A && z > C && C > $[2])
    ) {
      const Y = (z - C) / (z - $[2]);
      fe = { x: ne[0] * (1 - Y) + $[0] * Y, y: ne[1] * (1 - Y) + $[1] * Y };
    }
    $ = [k, F, z];
  }
  return (
    A && C >= z && (fe = { x, y: b }),
    {
      length: z,
      point: fe,
      min: {
        x: Math.min(...X.map((K) => K.x)),
        y: Math.min(...X.map((K) => K.y)),
      },
      max: {
        x: Math.max(...X.map((K) => K.x)),
        y: Math.max(...X.map((K) => K.y)),
      },
    }
  );
}
function Pw(l, o, p, v, h, g, c, x, b) {
  const C = 1 - b;
  return {
    x: C ** 3 * l + 3 * C ** 2 * b * p + 3 * C * b ** 2 * h + b ** 3 * c,
    y: C ** 3 * o + 3 * C ** 2 * b * v + 3 * C * b ** 2 * g + b ** 3 * x,
  };
}
function qw(l, o, p, v, h, g, c, x, b) {
  const C = typeof b == "number";
  let A = l,
    k = o,
    F = 0,
    z = [A, k, F],
    $ = [A, k],
    ne = 0,
    Se = { x: 0, y: 0 },
    fe = [{ x: A, y: k }];
  C && b <= 0 && (Se = { x: A, y: k });
  const X = 300;
  for (let J = 0; J <= X; J += 1) {
    if (
      ((ne = J / X),
      ({ x: A, y: k } = Pw(l, o, p, v, h, g, c, x, ne)),
      (fe = [...fe, { x: A, y: k }]),
      (F += Za($, [A, k])),
      ($ = [A, k]),
      C && F > b && b > z[2])
    ) {
      const K = (F - b) / (F - z[2]);
      Se = { x: $[0] * (1 - K) + z[0] * K, y: $[1] * (1 - K) + z[1] * K };
    }
    z = [A, k, F];
  }
  return (
    C && b >= F && (Se = { x: c, y: x }),
    {
      length: F,
      point: Se,
      min: {
        x: Math.min(...fe.map((J) => J.x)),
        y: Math.min(...fe.map((J) => J.y)),
      },
      max: {
        x: Math.max(...fe.map((J) => J.x)),
        y: Math.max(...fe.map((J) => J.y)),
      },
    }
  );
}
function Gw(l, o, p, v, h, g, c) {
  const x = 1 - c;
  return {
    x: x ** 2 * l + 2 * x * c * p + c ** 2 * h,
    y: x ** 2 * o + 2 * x * c * v + c ** 2 * g,
  };
}
function Qw(l, o, p, v, h, g, c) {
  const x = typeof c == "number";
  let b = l,
    C = o,
    A = 0,
    k = [b, C, A],
    F = [b, C],
    z = 0,
    $ = { x: 0, y: 0 },
    ne = [{ x: b, y: C }];
  x && c <= 0 && ($ = { x: b, y: C });
  const Se = 300;
  for (let fe = 0; fe <= Se; fe += 1) {
    if (
      ((z = fe / Se),
      ({ x: b, y: C } = Gw(l, o, p, v, h, g, z)),
      (ne = [...ne, { x: b, y: C }]),
      (A += Za(F, [b, C])),
      (F = [b, C]),
      x && A > c && c > k[2])
    ) {
      const X = (A - c) / (A - k[2]);
      $ = { x: F[0] * (1 - X) + k[0] * X, y: F[1] * (1 - X) + k[1] * X };
    }
    k = [b, C, A];
  }
  return (
    x && c >= A && ($ = { x: h, y: g }),
    {
      length: A,
      point: $,
      min: {
        x: Math.min(...ne.map((fe) => fe.x)),
        y: Math.min(...ne.map((fe) => fe.y)),
      },
      max: {
        x: Math.max(...ne.map((fe) => fe.x)),
        y: Math.max(...ne.map((fe) => fe.y)),
      },
    }
  );
}
function qE(l, o) {
  const p = xf(l),
    v = typeof o == "number";
  let h,
    g = [],
    c,
    x = 0,
    b = 0,
    C = 0,
    A = 0,
    k,
    F = [],
    z = [],
    $ = 0,
    ne = { x: 0, y: 0 },
    Se = ne,
    fe = ne,
    X = ne,
    J = 0;
  for (let K = 0, Y = p.length; K < Y; K += 1)
    (k = p[K]),
      ([c] = k),
      (h = c === "M"),
      (g = h ? g : [x, b, ...k.slice(1)]),
      h
        ? (([, C, A] = k),
          (ne = { x: C, y: A }),
          (Se = ne),
          ($ = 0),
          v && o < 0.001 && (X = ne))
        : c === "L"
        ? ({ length: $, min: ne, max: Se, point: fe } = Ko(...g, (o || 0) - J))
        : c === "A"
        ? ({ length: $, min: ne, max: Se, point: fe } = Iw(...g, (o || 0) - J))
        : c === "C"
        ? ({ length: $, min: ne, max: Se, point: fe } = qw(...g, (o || 0) - J))
        : c === "Q"
        ? ({ length: $, min: ne, max: Se, point: fe } = Qw(...g, (o || 0) - J))
        : c === "Z" &&
          ((g = [x, b, C, A]),
          ({
            length: $,
            min: ne,
            max: Se,
            point: fe,
          } = Ko(...g, (o || 0) - J))),
      v && J < o && J + $ >= o && (X = fe),
      (z = [...z, Se]),
      (F = [...F, ne]),
      (J += $),
      ([x, b] = c !== "Z" ? k.slice(-2) : [C, A]);
  return (
    v && o >= J && (X = { x, y: b }),
    {
      length: J,
      point: X,
      min: {
        x: Math.min(...F.map((K) => K.x)),
        y: Math.min(...F.map((K) => K.y)),
      },
      max: {
        x: Math.max(...z.map((K) => K.x)),
        y: Math.max(...z.map((K) => K.y)),
      },
    }
  );
}
function GE(l) {
  return qE(l).length;
}
function QE(l, o) {
  return qE(l, o).point;
}
function XE(l) {
  const o = l.length;
  let p = -1,
    v,
    h = l[o - 1],
    g = 0;
  for (; ++p < o; ) (v = h), (h = l[p]), (g += v[1] * h[0] - v[0] * h[1]);
  return g / 2;
}
function Xw(l) {
  return l.reduce((o, p, v) => (v ? o + Za(l[v - 1], p) : 0), 0);
}
const Ww = 1e-9;
function WE(l, o, p, v) {
  const h = [];
  for (let g = 0; g < p; g += 1) {
    h[g] = [];
    for (let c = 0; c < 2; c += 1)
      h[g].push((((l[g][c] + (o[g][c] - l[g][c]) * v) * 1e3) >> 0) / 1e3);
  }
  return h;
}
function Kw(l) {
  !Te[l] &&
    this.valuesEnd[l] &&
    (Te[l] = (o, p, v, h) => {
      const g = p.polygon,
        c = v.polygon,
        x = c.length;
      o.setAttribute(
        "d",
        h === 1 ? v.original : `M${WE(g, c, x, h).join("L")}Z`
      );
    });
}
function Zw(l) {
  const o = [],
    p = l.length;
  let v = [],
    h = "";
  if (!l.length || l[0][0] !== "M") return !1;
  for (
    let g = 0;
    g < p && ((v = l[g]), ([h] = v), !((h === "M" && g) || h === "Z"));
    g += 1
  )
    if ("ML".includes(h)) o.push([v[1], v[2]]);
    else return !1;
  return p ? { polygon: o } : !1;
}
function KE(l, o) {
  const p = $w(l)[0],
    v = xf(p),
    h = GE(v),
    g = [];
  let c = 3,
    x;
  o && !Number.isNaN(o) && +o > 0 && (c = Math.max(c, Math.ceil(h / o)));
  for (let b = 0; b < c; b += 1) (x = QE(v, (h * b) / c)), g.push([x.x, x.y]);
  return XE(g) > 0 && g.reverse(), { polygon: g, skipBisect: !0 };
}
function ZE(l, o) {
  const p = xf(l);
  return Zw(p) || KE(p, o);
}
function JE(l, o) {
  const p = l.length;
  let v = 1 / 0,
    h,
    g = 0,
    c,
    x,
    b;
  for (let C = 0; C < p; C += 1) {
    g = 0;
    for (let A = 0; A < o.length; A += 1)
      (b = o[A]), (x = Za(l[(C + A) % p], b)), (g += x * x);
    g < v && ((v = g), (h = C));
  }
  h && ((c = l.splice(0, h)), l.splice(l.length, 0, ...c));
}
function Ph(l, o) {
  const p = l.length + o,
    v = Xw(l) / o;
  let h = 0,
    g = 0,
    c = v / 2,
    x,
    b,
    C;
  for (; l.length < p; )
    (x = l[h]),
      (b = l[(h + 1) % l.length]),
      (C = Za(x, b)),
      c <= g + C
        ? (l.splice(h + 1, 0, C ? _r(x, b, (c - g) / C) : x.slice(0)), (c += v))
        : ((g += C), (h += 1));
}
function eC(l, o = 1 / 0) {
  let p = [],
    v = [];
  for (let h = 0; h < l.length; h += 1)
    for (p = l[h], v = h === l.length - 1 ? l[0] : l[h + 1]; Za(p, v) > o; )
      (v = _r(p, v, 0.5)), l.splice(h + 1, 0, v);
}
function tC(l) {
  return (
    Array.isArray(l) &&
    l.every(
      (o) =>
        Array.isArray(o) &&
        o.length === 2 &&
        !Number.isNaN(o[0]) &&
        !Number.isNaN(o[1])
    )
  );
}
function qh(l, o) {
  let p, v;
  if (typeof l == "string") ({ polygon: v, skipBisect: p } = ZE(l, o));
  else if (!Array.isArray(l)) throw Error(`${oi}: ${l}`);
  const h = [...v];
  if (!tC(h)) throw Error(`${oi}: ${h}`);
  return (
    h.length > 1 && Za(h[0], h[h.length - 1]) < Ww && h.pop(),
    !p && o && !Number.isNaN(o) && +o > 0 && eC(h, o),
    h
  );
}
function nC(l, o, p) {
  const v = p || Or.morphPrecision,
    h = qh(l, v),
    g = qh(o, v),
    c = h.length - g.length;
  return (
    Ph(h, c < 0 ? c * -1 : 0), Ph(g, c > 0 ? c : 0), JE(h, g), [Sf(h), Sf(g)]
  );
}
function Jw() {
  return this.element.getAttribute("d");
}
function eA(l, o) {
  const p = {},
    v = new RegExp("\\n", "ig");
  let h = null;
  return (
    o instanceof SVGPathElement ? (h = o) : /^\.|^#/.test(o) && (h = MM(o)),
    typeof o == "object" && o.polygon
      ? o
      : (h && ["path", "glyph"].includes(h.tagName)
          ? (p.original = h.getAttribute("d").replace(v, ""))
          : !h && typeof o == "string" && (p.original = o.replace(v, "")),
        p)
  );
}
function tA(l) {
  if (this.valuesEnd[l]) {
    const o = this.valuesStart[l].polygon,
      p = this.valuesEnd[l].polygon;
    if (!o || !p || o.length !== p.length) {
      const v = this.valuesStart[l].original,
        h = this.valuesEnd[l].original,
        g = this._morphPrecision
          ? parseInt(this._morphPrecision, 10)
          : Or.morphPrecision,
        [c, x] = nC(v, h, g);
      (this.valuesStart[l].polygon = c), (this.valuesEnd[l].polygon = x);
    }
  }
}
const nA = {
    prepareStart: Jw,
    prepareProperty: eA,
    onStart: Kw,
    crossCheck: tA,
  },
  aA = {
    component: "svgMorph",
    property: "path",
    defaultValue: [],
    Interpolate: WE,
    defaultOptions: { morphPrecision: 10 },
    functions: nA,
    Util: {
      addPoints: Ph,
      bisect: eC,
      getPolygon: qh,
      validPolygon: tC,
      getInterpolationPoints: nC,
      pathStringToPolygon: ZE,
      distanceSquareRoot: Za,
      midPoint: _r,
      approximatePolygon: KE,
      rotatePolygon: JE,
      pathToString: Bw,
      pathToCurve: jw,
      getTotalLength: GE,
      getPointAtLength: QE,
      polygonArea: XE,
      roundPath: Sf,
    },
  },
  Hh = {
    EssentialBoxModel: HM,
    ColorsProperties: YM,
    HTMLAttributes: QM,
    OpacityProperty: JM,
    TextWriteProp: lw,
    TransformFunctions: yw,
    SVGDraw: Tw,
    SVGMorph: aA,
  };
Object.keys(Hh).forEach((l) => {
  const o = Hh[l];
  Hh[l] = new AM(o);
});
var aC = { exports: {} },
  Gh = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var l = Ef.exports,
    o = Symbol.for("react.element"),
    p = Symbol.for("react.portal"),
    v = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    A = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    z = Symbol.for("react.offscreen"),
    $ = Symbol.iterator,
    ne = "@@iterator";
  function Se(E) {
    if (E === null || typeof E != "object") return null;
    var V = ($ && E[$]) || E[ne];
    return typeof V == "function" ? V : null;
  }
  var fe = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function X(E) {
    {
      for (
        var V = arguments.length, G = new Array(V > 1 ? V - 1 : 0), ce = 1;
        ce < V;
        ce++
      )
        G[ce - 1] = arguments[ce];
      J("error", E, G);
    }
  }
  function J(E, V, G) {
    {
      var ce = fe.ReactDebugCurrentFrame,
        we = ce.getStackAddendum();
      we !== "" && ((V += "%s"), (G = G.concat([we])));
      var $e = G.map(function (le) {
        return String(le);
      });
      $e.unshift("Warning: " + V),
        Function.prototype.apply.call(console[E], console, $e);
    }
  }
  var K = !1,
    Y = !1,
    Fe = !1,
    Ee = !1,
    Dt = !1,
    Ct;
  Ct = Symbol.for("react.module.reference");
  function ct(E) {
    return !!(
      typeof E == "string" ||
      typeof E == "function" ||
      E === v ||
      E === g ||
      Dt ||
      E === h ||
      E === C ||
      E === A ||
      Ee ||
      E === z ||
      K ||
      Y ||
      Fe ||
      (typeof E == "object" &&
        E !== null &&
        (E.$$typeof === F ||
          E.$$typeof === k ||
          E.$$typeof === c ||
          E.$$typeof === x ||
          E.$$typeof === b ||
          E.$$typeof === Ct ||
          E.getModuleId !== void 0))
    );
  }
  function ke(E, V, G) {
    var ce = E.displayName;
    if (ce) return ce;
    var we = V.displayName || V.name || "";
    return we !== "" ? G + "(" + we + ")" : G;
  }
  function $t(E) {
    return E.displayName || "Context";
  }
  function Ce(E) {
    if (E == null) return null;
    if (
      (typeof E.tag == "number" &&
        X(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ),
      typeof E == "function")
    )
      return E.displayName || E.name || null;
    if (typeof E == "string") return E;
    switch (E) {
      case v:
        return "Fragment";
      case p:
        return "Portal";
      case g:
        return "Profiler";
      case h:
        return "StrictMode";
      case C:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof E == "object")
      switch (E.$$typeof) {
        case x:
          var V = E;
          return $t(V) + ".Consumer";
        case c:
          var G = E;
          return $t(G._context) + ".Provider";
        case b:
          return ke(E, E.render, "ForwardRef");
        case k:
          var ce = E.displayName || null;
          return ce !== null ? ce : Ce(E.type) || "Memo";
        case F: {
          var we = E,
            $e = we._payload,
            le = we._init;
          try {
            return Ce(le($e));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Me = Object.assign,
    ot = 0,
    Ge,
    se,
    ht,
    on,
    sn,
    Qe,
    Xe;
  function gt() {}
  gt.__reactDisabledLog = !0;
  function Wt() {
    {
      if (ot === 0) {
        (Ge = console.log),
          (se = console.info),
          (ht = console.warn),
          (on = console.error),
          (sn = console.group),
          (Qe = console.groupCollapsed),
          (Xe = console.groupEnd);
        var E = { configurable: !0, enumerable: !0, value: gt, writable: !0 };
        Object.defineProperties(console, {
          info: E,
          log: E,
          warn: E,
          error: E,
          group: E,
          groupCollapsed: E,
          groupEnd: E,
        });
      }
      ot++;
    }
  }
  function Mn() {
    {
      if ((ot--, ot === 0)) {
        var E = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Me({}, E, { value: Ge }),
          info: Me({}, E, { value: se }),
          warn: Me({}, E, { value: ht }),
          error: Me({}, E, { value: on }),
          group: Me({}, E, { value: sn }),
          groupCollapsed: Me({}, E, { value: Qe }),
          groupEnd: Me({}, E, { value: Xe }),
        });
      }
      ot < 0 &&
        X(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
  }
  var wn = fe.ReactCurrentDispatcher,
    ga;
  function ia(E, V, G) {
    {
      if (ga === void 0)
        try {
          throw Error();
        } catch (we) {
          var ce = we.stack.trim().match(/\n( *(at )?)/);
          ga = (ce && ce[1]) || "";
        }
      return (
        `
` +
        ga +
        E
      );
    }
  }
  var Kt = !1,
    An;
  {
    var $n = typeof WeakMap == "function" ? WeakMap : Map;
    An = new $n();
  }
  function Yn(E, V) {
    if (!E || Kt) return "";
    {
      var G = An.get(E);
      if (G !== void 0) return G;
    }
    var ce;
    Kt = !0;
    var we = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var $e;
    ($e = wn.current), (wn.current = null), Wt();
    try {
      if (V) {
        var le = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(le.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(le, []);
          } catch (Gn) {
            ce = Gn;
          }
          Reflect.construct(E, [], le);
        } else {
          try {
            le.call();
          } catch (Gn) {
            ce = Gn;
          }
          E.call(le.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Gn) {
          ce = Gn;
        }
        E();
      }
    } catch (Gn) {
      if (Gn && ce && typeof Gn.stack == "string") {
        for (
          var xe = Gn.stack.split(`
`),
            bt = ce.stack.split(`
`),
            nt = xe.length - 1,
            Ae = bt.length - 1;
          nt >= 1 && Ae >= 0 && xe[nt] !== bt[Ae];

        )
          Ae--;
        for (; nt >= 1 && Ae >= 0; nt--, Ae--)
          if (xe[nt] !== bt[Ae]) {
            if (nt !== 1 || Ae !== 1)
              do
                if ((nt--, Ae--, Ae < 0 || xe[nt] !== bt[Ae])) {
                  var dn =
                    `
` + xe[nt].replace(" at new ", " at ");
                  return (
                    E.displayName &&
                      dn.includes("<anonymous>") &&
                      (dn = dn.replace("<anonymous>", E.displayName)),
                    typeof E == "function" && An.set(E, dn),
                    dn
                  );
                }
              while (nt >= 1 && Ae >= 0);
            break;
          }
      }
    } finally {
      (Kt = !1), (wn.current = $e), Mn(), (Error.prepareStackTrace = we);
    }
    var Ha = E ? E.displayName || E.name : "",
      pi = Ha ? ia(Ha) : "";
    return typeof E == "function" && An.set(E, pi), pi;
  }
  function _t(E, V, G) {
    return Yn(E, !1);
  }
  function cn(E) {
    var V = E.prototype;
    return !!(V && V.isReactComponent);
  }
  function Yt(E, V, G) {
    if (E == null) return "";
    if (typeof E == "function") return Yn(E, cn(E));
    if (typeof E == "string") return ia(E);
    switch (E) {
      case C:
        return ia("Suspense");
      case A:
        return ia("SuspenseList");
    }
    if (typeof E == "object")
      switch (E.$$typeof) {
        case b:
          return _t(E.render);
        case k:
          return Yt(E.type, V, G);
        case F: {
          var ce = E,
            we = ce._payload,
            $e = ce._init;
          try {
            return Yt($e(we), V, G);
          } catch {}
        }
      }
    return "";
  }
  var It = Object.prototype.hasOwnProperty,
    Lt = {},
    In = fe.ReactDebugCurrentFrame;
  function ua(E) {
    if (E) {
      var V = E._owner,
        G = Yt(E.type, E._source, V ? V.type : null);
      In.setExtraStackFrame(G);
    } else In.setExtraStackFrame(null);
  }
  function Ln(E, V, G, ce, we) {
    {
      var $e = Function.call.bind(It);
      for (var le in E)
        if ($e(E, le)) {
          var xe = void 0;
          try {
            if (typeof E[le] != "function") {
              var bt = Error(
                (ce || "React class") +
                  ": " +
                  G +
                  " type `" +
                  le +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  typeof E[le] +
                  "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ((bt.name = "Invariant Violation"), bt);
            }
            xe = E[le](
              V,
              le,
              ce,
              G,
              null,
              "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            );
          } catch (nt) {
            xe = nt;
          }
          xe &&
            !(xe instanceof Error) &&
            (ua(we),
            X(
              "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
              ce || "React class",
              G,
              le,
              typeof xe
            ),
            ua(null)),
            xe instanceof Error &&
              !(xe.message in Lt) &&
              ((Lt[xe.message] = !0),
              ua(we),
              X("Failed %s type: %s", G, xe.message),
              ua(null));
        }
    }
  }
  var ba = Array.isArray;
  function la(E) {
    return ba(E);
  }
  function En(E) {
    {
      var V = typeof Symbol == "function" && Symbol.toStringTag,
        G = (V && E[Symbol.toStringTag]) || E.constructor.name || "Object";
      return G;
    }
  }
  function oa(E) {
    try {
      return fn(E), !1;
    } catch {
      return !0;
    }
  }
  function fn(E) {
    return "" + E;
  }
  function Pn(E) {
    if (oa(E))
      return (
        X(
          "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
          En(E)
        ),
        fn(E)
      );
  }
  var Tt = fe.ReactCurrentOwner,
    sa = { key: !0, ref: !0, __self: !0, __source: !0 },
    Ja,
    er,
    q;
  q = {};
  function ue(E) {
    if (It.call(E, "ref")) {
      var V = Object.getOwnPropertyDescriptor(E, "ref").get;
      if (V && V.isReactWarning) return !1;
    }
    return E.ref !== void 0;
  }
  function _e(E) {
    if (It.call(E, "key")) {
      var V = Object.getOwnPropertyDescriptor(E, "key").get;
      if (V && V.isReactWarning) return !1;
    }
    return E.key !== void 0;
  }
  function We(E, V) {
    if (
      typeof E.ref == "string" &&
      Tt.current &&
      V &&
      Tt.current.stateNode !== V
    ) {
      var G = Ce(Tt.current.type);
      q[G] ||
        (X(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          Ce(Tt.current.type),
          E.ref
        ),
        (q[G] = !0));
    }
  }
  function Ke(E, V) {
    {
      var G = function () {
        Ja ||
          ((Ja = !0),
          X(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            V
          ));
      };
      (G.isReactWarning = !0),
        Object.defineProperty(E, "key", { get: G, configurable: !0 });
    }
  }
  function kt(E, V) {
    {
      var G = function () {
        er ||
          ((er = !0),
          X(
            "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
            V
          ));
      };
      (G.isReactWarning = !0),
        Object.defineProperty(E, "ref", { get: G, configurable: !0 });
    }
  }
  var Rt = function (E, V, G, ce, we, $e, le) {
    var xe = { $$typeof: o, type: E, key: V, ref: G, props: le, _owner: $e };
    return (
      (xe._store = {}),
      Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce,
      }),
      Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we,
      }),
      Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)),
      xe
    );
  };
  function kn(E, V, G, ce, we) {
    {
      var $e,
        le = {},
        xe = null,
        bt = null;
      G !== void 0 && (Pn(G), (xe = "" + G)),
        _e(V) && (Pn(V.key), (xe = "" + V.key)),
        ue(V) && ((bt = V.ref), We(V, we));
      for ($e in V)
        It.call(V, $e) && !sa.hasOwnProperty($e) && (le[$e] = V[$e]);
      if (E && E.defaultProps) {
        var nt = E.defaultProps;
        for ($e in nt) le[$e] === void 0 && (le[$e] = nt[$e]);
      }
      if (xe || bt) {
        var Ae =
          typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
        xe && Ke(le, Ae), bt && kt(le, Ae);
      }
      return Rt(E, xe, bt, we, ce, Tt.current, le);
    }
  }
  var at = fe.ReactCurrentOwner,
    qn = fe.ReactDebugCurrentFrame;
  function ft(E) {
    if (E) {
      var V = E._owner,
        G = Yt(E.type, E._source, V ? V.type : null);
      qn.setExtraStackFrame(G);
    } else qn.setExtraStackFrame(null);
  }
  var dt;
  dt = !1;
  function Na(E) {
    return typeof E == "object" && E !== null && E.$$typeof === o;
  }
  function Sa() {
    {
      if (at.current) {
        var E = Ce(at.current.type);
        if (E)
          return (
            `

Check the render method of \`` +
            E +
            "`."
          );
      }
      return "";
    }
  }
  function ci(E) {
    {
      if (E !== void 0) {
        var V = E.fileName.replace(/^.*[\\\/]/, ""),
          G = E.lineNumber;
        return (
          `

Check your code at ` +
          V +
          ":" +
          G +
          "."
        );
      }
      return "";
    }
  }
  var Zi = {};
  function tl(E) {
    {
      var V = Sa();
      if (!V) {
        var G = typeof E == "string" ? E : E.displayName || E.name;
        G &&
          (V =
            `

Check the top-level render call using <` +
            G +
            ">.");
      }
      return V;
    }
  }
  function fi(E, V) {
    {
      if (!E._store || E._store.validated || E.key != null) return;
      E._store.validated = !0;
      var G = tl(V);
      if (Zi[G]) return;
      Zi[G] = !0;
      var ce = "";
      E &&
        E._owner &&
        E._owner !== at.current &&
        (ce = " It was passed a child from " + Ce(E._owner.type) + "."),
        ft(E),
        X(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          G,
          ce
        ),
        ft(null);
    }
  }
  function di(E, V) {
    {
      if (typeof E != "object") return;
      if (la(E))
        for (var G = 0; G < E.length; G++) {
          var ce = E[G];
          Na(ce) && fi(ce, V);
        }
      else if (Na(E)) E._store && (E._store.validated = !0);
      else if (E) {
        var we = Se(E);
        if (typeof we == "function" && we !== E.entries)
          for (var $e = we.call(E), le; !(le = $e.next()).done; )
            Na(le.value) && fi(le.value, V);
      }
    }
  }
  function tr(E) {
    {
      var V = E.type;
      if (V == null || typeof V == "string") return;
      var G;
      if (typeof V == "function") G = V.propTypes;
      else if (typeof V == "object" && (V.$$typeof === b || V.$$typeof === k))
        G = V.propTypes;
      else return;
      if (G) {
        var ce = Ce(V);
        Ln(G, E.props, "prop", ce, E);
      } else if (V.PropTypes !== void 0 && !dt) {
        dt = !0;
        var we = Ce(V);
        X(
          "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
          we || "Unknown"
        );
      }
      typeof V.getDefaultProps == "function" &&
        !V.getDefaultProps.isReactClassApproved &&
        X(
          "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
        );
    }
  }
  function Mr(E) {
    {
      for (var V = Object.keys(E.props), G = 0; G < V.length; G++) {
        var ce = V[G];
        if (ce !== "children" && ce !== "key") {
          ft(E),
            X(
              "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
              ce
            ),
            ft(null);
          break;
        }
      }
      E.ref !== null &&
        (ft(E),
        X("Invalid attribute `ref` supplied to `React.Fragment`."),
        ft(null));
    }
  }
  function wr(E, V, G, ce, we, $e) {
    {
      var le = ct(E);
      if (!le) {
        var xe = "";
        (E === void 0 ||
          (typeof E == "object" &&
            E !== null &&
            Object.keys(E).length === 0)) &&
          (xe +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var bt = ci(we);
        bt ? (xe += bt) : (xe += Sa());
        var nt;
        E === null
          ? (nt = "null")
          : la(E)
          ? (nt = "array")
          : E !== void 0 && E.$$typeof === o
          ? ((nt = "<" + (Ce(E.type) || "Unknown") + " />"),
            (xe =
              " Did you accidentally export a JSX literal instead of a component?"))
          : (nt = typeof E),
          X(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            nt,
            xe
          );
      }
      var Ae = kn(E, V, G, we, $e);
      if (Ae == null) return Ae;
      if (le) {
        var dn = V.children;
        if (dn !== void 0)
          if (ce)
            if (la(dn)) {
              for (var Ha = 0; Ha < dn.length; Ha++) di(dn[Ha], E);
              Object.freeze && Object.freeze(dn);
            } else
              X(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else di(dn, E);
      }
      return E === v ? Mr(Ae) : tr(Ae), Ae;
    }
  }
  var za = wr;
  (Gh.Fragment = v), (Gh.jsxDEV = za);
})();
(function (l) {
  l.exports = Gh;
})(aC);
const cE = aC.exports.jsxDEV;
document.getElementsByClassName("parent")[0];
var fE =
  "/Users/tanyu/Solo-Stuff/personal_website/personal-2/personal-/src/index.jsx";
const rA = jh.createRoot(document.getElementById("app"));
rA.render(
  cE(
    SM.StrictMode,
    {
      children: cE(
        "div",
        { children: "hi" },
        void 0,
        !1,
        { fileName: fE, lineNumber: 10, columnNumber: 5 },
        globalThis
      ),
    },
    void 0,
    !1,
    { fileName: fE, lineNumber: 8, columnNumber: 3 },
    globalThis
  )
);
