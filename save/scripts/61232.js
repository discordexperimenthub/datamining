(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61232"],
  {
    260018: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var r,
        i = n("444095");
      r = class {
        _load() {
          let e = i.default.get(this._key);
          null != e && (this._set = new Set(e));
        }
        _persist() {
          let e = Array.from(this._set.values());
          i.default.set(this._key, e);
        }
        add(e) {
          this._set.add(e),
            requestIdleCallback(() => {
              this._persist();
            });
        }
        has(e) {
          return this._set.has(e);
        }
        constructor(e) {
          (this._key = "$persisted-set-".concat(e)),
            (this._set = new Set()),
            this._load();
        }
      };
    },
    696316: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VIOLATION_ATTRIBUTE_NAME: function () {
            return v;
          },
          useAccessibilityChecker: function () {
            return M;
          },
        }),
        n("222007"),
        n("424973");
      var r,
        i,
        a = n("884691"),
        l = n("456254"),
        s = n("786908"),
        u = n("699667"),
        o = n("439308"),
        c = n("274059"),
        d = n("321307"),
        f = n("698085"),
        h = n("618068"),
        b = n("992397");
      let m = [
          u.default,
          o.default,
          c.default,
          f.default,
          d.default,
          b.default,
          h.default,
        ],
        v = "data-accessibility-violation",
        p =
          "function" ==
          typeof (null === (i = navigator) || void 0 === i
            ? void 0
            : null === (r = i.scheduling) || void 0 === r
              ? void 0
              : r.isInputPending),
        A = null,
        g = null,
        w = 0,
        I = 0,
        _ = null,
        T = { hash: 0, violations: new Map() },
        y = () => {},
        E = document.body;
      function k() {
        (w = 0), (I = 0), (_ = null), (T = { hash: 0, violations: new Map() });
      }
      function R() {
        g = requestIdleCallback(N);
      }
      function P() {
        (_ = null), (I = 0), w < m.length - 1 ? ((w += 1), R()) : (y(T), k());
      }
      function N() {
        let e = m[w];
        if (
          (null == _ &&
            (_ =
              null != e.selector
                ? Array.from(E.querySelectorAll(e.selector))
                : e.select(E)),
          0 === _.length)
        )
          return P();
        let t = performance.now() + 16,
          n = { includeContinuous: !0 };
        for (
          ;
          I < _.length &&
          !(navigator.scheduling.isInputPending(n) || performance.now() >= t);

        ) {
          let t = _[I++],
            n = e.check(t);
          if (n !== s.Pass) {
            var r, i;
            let a = (0, l.getComponentStackTraceFromElement)(t),
              s = x(
                ""
                  .concat(n, "_")
                  .concat(e.id, "_")
                  .concat(
                    null == a
                      ? (function (e) {
                          let t = "",
                            n = e;
                          for (; null != n; )
                            (t += n.className), (n = n.parentElement);
                          return x(t);
                        })(t)
                      : a.join("\n")
                  )
              );
            T.hash = x("".concat(T.hash).concat(s));
            let u = "".concat(e.id, "_").concat(s),
              o =
                null !== (r = T.violations.get(e.id)) && void 0 !== r
                  ? r
                  : { rule: e, instances: new Map() },
              c = null !== (i = o.instances.get(u)) && void 0 !== i ? i : [];
            c.push({
              element: t,
              message: n,
              trace: null != a ? a : [],
              hash: s,
            }),
              o.instances.set(u, c),
              T.violations.set(e.id, o);
          }
        }
        let a = I < _.length - 1;
        if (a) return R();
        P();
      }
      let S = e => {
        let t = e.filter(
          e => ("attributes" !== e.type || e.attributeName !== v) && !0
        );
        0 !== t.length &&
          (k(),
          null != A && (clearTimeout(A), (A = null)),
          null != g && (clearTimeout(g), (g = null)),
          (A = setTimeout(R, 250)));
      };
      function M(e, t) {
        (0, a.useLayoutEffect)(() => {
          if (p && null != e) {
            (y = t), (E = e);
            let n = (function (e) {
              let t = new MutationObserver(S);
              return (
                t.observe(e, { attributes: !0, childList: !0, subtree: !0 }), t
              );
            })(e);
            return () => {
              (y = () => {}), n.disconnect();
            };
          }
        }, [e]);
      }
      function x(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = 3735928559 ^ t,
          r = 1103547991 ^ t;
        for (let t = 0, i; t < e.length; t++)
          (n = Math.imul(n ^ (i = e.charCodeAt(t)), 2654435761)),
            (r = Math.imul(r ^ i, 1597334677));
        return (
          (n =
            Math.imul(n ^ (n >>> 16), 2246822507) ^
            Math.imul(r ^ (r >>> 13), 3266489909)),
          4294967296 *
            (2097151 &
              (r =
                Math.imul(r ^ (r >>> 16), 2246822507) ^
                Math.imul(n ^ (n >>> 13), 3266489909))) +
            (n >>> 0)
        );
      }
    },
    759388: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useRegisterAccessibilityChecks: function () {
            return d;
          },
          useUniqueAccessibilityViolations: function () {
            return f;
          },
        }),
        n("222007"),
        n("424973");
      var r = n("884691"),
        i = n("308503"),
        a = n("260018"),
        l = n("599110"),
        s = n("696316"),
        u = n("49111");
      let o = new a.default("a11y_violations"),
        c = (0, i.default)(() => ({ check: null }));
      function d(e) {
        let t = (0, r.useCallback)(e => {
          var t;
          e.hash !==
            (null === (t = c.getState().check) || void 0 === t
              ? void 0
              : t.hash) &&
            (c.setState({ check: e }),
            !(function (e) {
              for (let [t, n] of e.entries())
                for (let e of n.instances.values())
                  for (let { trace: n, hash: r } of e) {
                    let e = JSON.stringify(r);
                    o.has(e) ||
                      (o.add(e),
                      l.default.track(u.AnalyticEvents.A11Y_RUNTIME_VIOLATION, {
                        rule_id: t,
                        trace: n.join("\n"),
                        hash: r,
                      }));
                  }
            })(e.violations));
        }, []);
        (0, s.useAccessibilityChecker)(e, t);
      }
      function f() {
        let e = c(e => {
          var t, n;
          return null !==
            (n =
              null === (t = e.check) || void 0 === t ? void 0 : t.violations) &&
            void 0 !== n
            ? n
            : null;
        });
        return (function (e) {
          if (null == e) return [];
          let t = [];
          for (let { instances: n, rule: r } of e.values())
            for (let [e, i] of n.entries()) {
              let n = i.map(e => e.element),
                a = i[0].message;
              t.push({
                key: e,
                title: r.metadata.description,
                description: r.metadata.help,
                id: r.id,
                tags: r.tags,
                elements: n,
                message: a,
              });
            }
          return t;
        })(e);
      }
    },
    786908: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Pass: function () {
            return r;
          },
        });
      let r = Symbol.for("pass");
    },
    391169: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isARIAHidden: function () {
            return i;
          },
          ARIA_ATTRIBUTE_NAMES: function () {
            return a;
          },
          ARIA_ATTRIBUTE_SELECTOR: function () {
            return l;
          },
        }),
        n("222007");
      var r = n("456138");
      function i(e) {
        let t = e;
        for (; null != t && t !== document.body; ) {
          if ((null == t ? void 0 : t.getAttribute("aria-hidden")) === "true")
            return !0;
          t = t.parentElement;
        }
        return !1;
      }
      let a = Array.from(r.aria.keys()),
        l = a.map(e => "[".concat(e, "]")).join(", ");
    },
    699667: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("34692"),
        i = n("889464"),
        a = n("786908"),
        l = n("391169"),
        s = {
          id: "alt-text",
          selector: 'img, [role="img"]',
          tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
          metadata: {
            description: "Images must have alternative text.",
            help: "",
          },
          check: function (e) {
            let t = (0, r.computeAccessibleName)(e);
            if ("" === t)
              return ("IMG" === e.tagName && e.hasAttribute("alt")) ||
                (0, l.isARIAHidden)(e) ||
                !(0, i.isVisible)(e)
                ? a.Pass
                : "Image has no alternative text";
            return a.Pass;
          },
        };
    },
    439308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var r = n("456138"),
        i = n("34692"),
        a = n("889464"),
        l = n("786908"),
        s = n("391169");
      let u = {
        id: "aria-allowed-attributes",
        selector: s.ARIA_ATTRIBUTE_SELECTOR,
        tags: ["wcag2a", "wcag412"],
        metadata: {
          description: "Only use supported ARIA attributes",
          help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
        },
        check: function (e) {
          let t = (0, i.getRole)(e),
            n = r.roles.get(t);
          if (null == n) return l.Pass;
          for (let r of s.ARIA_ATTRIBUTE_NAMES)
            if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
              if ("aria-expanded" === r && e.hasAttribute("aria-controls"))
                continue;
              if (!(0, a.isVisible)(e)) return l.Pass;
              return "'"
                .concat(t, "' does not support the ")
                .concat(r, " attribute");
            }
          return l.Pass;
        },
      };
      var o = u;
    },
    274059: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("222007");
      var r = n("456138"),
        i = n("889464"),
        a = n("786908"),
        l = n("391169"),
        s = {
          id: "aria-attribute-valid-value",
          selector: l.ARIA_ATTRIBUTE_SELECTOR,
          tags: [],
          metadata: {
            description: "ARIA attributes must use valid values",
            help: "",
          },
          check: function (e) {
            let t = (function (e) {
              for (let t of l.ARIA_ATTRIBUTE_NAMES)
                if (e.hasAttribute(t)) {
                  let n = e.getAttribute(t),
                    i = r.aria.get(t);
                  switch (i.type) {
                    case "string":
                      return a.Pass;
                    case "id":
                      return (function (e, t) {
                        let n = document.getElementById(t);
                        return null == n
                          ? ""
                              .concat(e, " references #")
                              .concat(t, " which does not exist")
                          : a.Pass;
                      })(t, n);
                    case "idlist":
                      return (function (e, t, n) {
                        if (
                          ("aria-controls" === e &&
                            ("false" === n.getAttribute("aria-expanded") ||
                              "false" === n.getAttribute("aria-selected"))) ||
                          ("aria-owns" === e &&
                            "false" === n.getAttribute("aria-expanded"))
                        )
                          return a.Pass;
                        let r = t.split(" ");
                        for (let n of r) {
                          let r = document.getElementById(n);
                          if (null == r)
                            return ""
                              .concat(e, " references #")
                              .concat(t, " which does not exist");
                        }
                        return a.Pass;
                      })(t, n, e);
                    case "integer":
                      return (function (e, t) {
                        let n = parseInt(t, 10),
                          r = String(n);
                        return r !== t
                          ? ""
                              .concat(e, " requires an integer but got ")
                              .concat(t)
                          : a.Pass;
                      })(t, n);
                    case "number":
                      return (function (e, t) {
                        return isFinite(t)
                          ? a.Pass
                          : ""
                              .concat(e, " requires a numeric value but got ")
                              .concat(t);
                      })(t, n);
                    case "boolean":
                      return (function (e, t, n) {
                        return "true" === t ||
                          "false" === t ||
                          ("" === t && !0 === n.allowundefined)
                          ? a.Pass
                          : "".concat(e, ' must be either "true" or "false"');
                      })(t, n, i);
                    case "token":
                      return (function (e, t, n) {
                        var r, i;
                        let l = (function (e) {
                          switch (e) {
                            case "true":
                              return !0;
                            case "false":
                              return !1;
                            default:
                              return e;
                          }
                        })(t);
                        return (
                          null === (r = n.values) || void 0 === r
                            ? void 0
                            : r.includes(l)
                        )
                          ? a.Pass
                          : ""
                              .concat(e, " was ")
                              .concat(t, " but must be: ")
                              .concat(
                                null === (i = n.values) || void 0 === i
                                  ? void 0
                                  : i.join(", ")
                              );
                      })(t, n, i);
                    case "tokenlist":
                      return (function (e, t, n) {
                        let r = t.split(" ");
                        for (let a of r) {
                          var i, l;
                          if (
                            null === (i = n.values) ||
                            void 0 === i ||
                            !i.includes(a)
                          )
                            return ""
                              .concat(e, " included ")
                              .concat(t, " but is restricted to: ")
                              .concat(
                                null === (l = n.values) || void 0 === l
                                  ? void 0
                                  : l.join(", ")
                              );
                        }
                        return a.Pass;
                      })(t, n, i);
                    case "tristate":
                      return (function (e, t) {
                        switch (t) {
                          case "true":
                          case "false":
                          case "mixed":
                            return a.Pass;
                          default:
                            return ""
                              .concat(
                                e,
                                ' must be "true", "false", or "mixed" not '
                              )
                              .concat(t);
                        }
                      })(t, n);
                  }
                }
              return a.Pass;
            })(e);
            return t !== a.Pass &&
              ((0, l.isARIAHidden)(e) || !(0, i.isVisible)(e))
              ? a.Pass
              : t;
          },
        };
    },
    321307: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("34692"),
        i = n("889464"),
        a = n("786908"),
        l = n("391169"),
        s = {
          id: "button-name",
          selector:
            'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
          tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
          metadata: {
            description: "Ensures buttons have discernible text",
            help: "",
          },
          check: function (e) {
            let t = "" !== (0, r.computeAccessibleName)(e);
            return t || (0, l.isARIAHidden)(e) || !(0, i.isVisible)(e)
              ? a.Pass
              : "button's accessible name is empty.";
          },
        };
    },
    698085: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("222007");
      var r = n("456138"),
        i = n("786908");
      let a = new Set(r.roles.keys());
      var l = {
        id: "aria-valid-roles",
        selector: "[role]",
        tags: ["wcag2a", "wcag412"],
        metadata: {
          description: "ARIA roles used must conform to valid values",
          help: "Ensures all elements with a role attribute use a valid value",
        },
        check: function (e) {
          let t = e.getAttribute("role"),
            n = t.split(" ");
          for (let e of n)
            if (!a.has(e))
              return "Role '".concat(e, "' is not a valid ARIA role");
          return i.Pass;
        },
      };
    },
    618068: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("34692"),
        i = n("889464"),
        a = n("786908"),
        l = n("391169"),
        s = {
          id: "input-label",
          selector:
            'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
          tags: [
            "wcag2a",
            "wcag131",
            "wcag412",
            "section508",
            "section508.22.a",
            "ACT",
          ],
          metadata: {
            description: "Form inputs require a label",
            help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.",
          },
          check: function (e) {
            let t = (0, r.computeAccessibleName)(e);
            if ("" === t)
              return (0, l.isARIAHidden)(e) || !(0, i.isVisible)(e)
                ? a.Pass
                : "Form input has no label";
            return a.Pass;
          },
        };
    },
    992397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var r = n("456138"),
        i = n("34692"),
        a = n("889464"),
        l = n("786908");
      let s = "button, a, ".concat(
        Array.from(r.roles.entries())
          .reduce((e, t) => {
            let [n, r] = t;
            return (
              !0 === r.childrenPresentational &&
                e.push('[role="'.concat(n, '"]')),
              e
            );
          }, [])
          .join(", ")
      );
      var u = {
        id: "nested-interactive",
        selector: s,
        tags: [],
        metadata: {
          description: "Interactive controls must not be nested",
          help: "Nested focusable elements are inaccessible to screen readers",
        },
        check: function (e) {
          return !(function (e) {
            let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
              n = t.nextNode();
            for (; null !== n; ) {
              if (
                n !== e &&
                (function (e) {
                  switch (e.nodeName) {
                    case "IFRAME":
                    case "EMBED":
                    case "DETAILS":
                    case "LABEL":
                      return !0;
                    case "INPUT":
                      return "hidden" !== e.getAttribute("type");
                  }
                  return (function (e) {
                    let t = (0, i.getRole)(e);
                    switch (t) {
                      case "link":
                        return e.hasAttribute("href");
                      case "audio":
                        return e.hasAttribute("controls");
                      case "img":
                        return e.hasAttribute("usemap");
                      case "button":
                        return !0;
                      default:
                        return !1;
                    }
                  })(e);
                })(n)
              )
                return !1;
              n = t.nextNode();
            }
            return !0;
          })(e) && (0, a.isVisible)(e)
            ? "Nested interactive element"
            : l.Pass;
        },
      };
    },
    456254: function (e, t, n) {
      "use strict";
      var r, i;
      n.r(t),
        n.d(t, {
          getComponentStackTraceFromElement: function () {
            return s;
          },
        }),
        n("222007"),
        n("424973"),
        ((i = r || (r = {}))[(i.Unknown = 0)] = "Unknown"),
        (i[(i.Loaded = 1)] = "Loaded"),
        (i[(i.NotFound = 2)] = "NotFound");
      let a = 0,
        l = null;
      function s(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        try {
          let n = (function (e) {
            if (2 === a) return null;
            0 === a &&
              !(function (e) {
                let t = e;
                for (; null != t && t !== document.body; ) {
                  let n = Object.keys(e);
                  for (let e of n)
                    if (e.startsWith("__reactFiber$")) {
                      (l = e), (a = 1);
                      return;
                    }
                  t = t.parentElement;
                }
                null == l && (a = 2);
              })(e);
            let t = l,
              n = e;
            for (; null != n && n !== document.body; ) {
              if (t in n) {
                let e = n[t];
                return e;
              }
              n = n.parentElement;
            }
            return null;
          })(e);
          if (null != n)
            return (function (e, t) {
              let n = [],
                r = e;
              for (; null != r; ) {
                var i, a;
                let e =
                    null == r
                      ? void 0
                      : null === (i = r._debugSource) || void 0 === i
                        ? void 0
                        : i.fileName,
                  l =
                    null == r
                      ? void 0
                      : null === (a = r._debugSource) || void 0 === a
                        ? void 0
                        : a.lineNumber;
                if (null != e && null != l) {
                  let r = "".concat(e, ":").concat(l);
                  if (t) {
                    let e = r.split("/discord/");
                    0 !== e.length && n.push(e[e.length - 1]);
                  } else n.push(r);
                }
                r = null == r ? void 0 : r._debugOwner;
              }
              return n;
            })(n, t);
          return null;
        } catch {
          return null;
        }
      }
    },
  },
]);
//# sourceMappingURL=82e7170eae8fe54c20f8.js.map
