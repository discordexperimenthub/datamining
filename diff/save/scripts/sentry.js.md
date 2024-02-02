```diff
  !(function () {
-     e = {
-       370692: function (t, e, n) {
- 
+   var e,
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Float32", function (e) {
+       667500: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Float64", function (e) {
+       477315: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Int16", function (e) {
+       527135: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Int32", function (e) {
+       453061: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Int8", function (e) {
+       659510: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Uint16", function (e) {
+       990131: function (e, t, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (e, n, r) {
-             return t(this, e, n, r);
- 
- 
+         n("918437")("Uint32", function (e) {
+       332822: function (e, t, n) {
          "use strict";
          n("918437")(
            "Uint8",
```

```diff
              };
            },
            !0
          );
        },
-             return function (e, n, r) {
-               return t(this, e, n, r);
- 
- 
+           function (e) {
+       390493: function (e, t, n) {
          n("70102"), n("424973");
          var r,
            o,
            i,
```

```diff
            throw Error("setTimeout has not been defined");
          }
          function s() {
            throw Error("clearTimeout has not been defined");
          }
- 
-           if (r === setTimeout) return setTimeout(t, 0);
- 
+           u = (e.exports = {});
+         function a(e) {
            if ((r === c || !r) && setTimeout)
```

```diff
            try {
- 
-           } catch (e) {
- 
+             return (r = setTimeout), setTimeout(e, 0);
+             return r(e, 0);
              try {
```

```diff
            }
          }
          !(function () {
            try {
              r = "function" == typeof setTimeout ? setTimeout : c;
-             } catch (e) {
-               return r.call(this, t, 0);
- 
- 
+               return r.call(null, e, 0);
+           } catch (e) {
              r = c;
            }
            try {
              o = "function" == typeof clearTimeout ? clearTimeout : s;
```

```diff
              i.length ? (l = i.concat(l)) : (f = -1),
              l.length && p());
          }
          function p() {
            if (!d) {
- 
- 
+           } catch (e) {
+             var e = a(h);
              d = !0;
```

```diff
              }
              (i = null),
                (d = !1),
-               for (i = l, l = []; ++f < e; ) i && i[f].run();
-               (f = -1), (e = l.length);
- 
-                 if (o === clearTimeout) return clearTimeout(t);
- 
+             for (var t = l.length; t; ) {
+               !(function (e) {
                  if ((o === s || !o) && clearTimeout)
```

```diff
                  try {
- 
-                 } catch (e) {
- 
+                   return (o = clearTimeout), clearTimeout(e);
+                   o(e);
                    try {
```

```diff
                    }
                  }
-                   } catch (e) {
-                     return o.call(this, t);
- 
- 
+                     return o.call(null, e);
+               })(e);
            }
          }
```

```diff
          }
          function b() {}
-           (this.fun = t), (this.array = e);
- 
-           var e = Array(arguments.length - 1);
- 
+         function m(e, t) {
+         (u.nextTick = function (e) {
            if (arguments.length > 1)
```

```diff
            (u.removeListener = b),
            (u.removeAllListeners = b),
            (u.emit = b),
            (u.prependListener = b),
            (u.prependOnceListener = b),
-           l.push(new m(t, e)), 1 === l.length && !d && a(p);
- 
- 
+             for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
+           (u.listeners = function (e) {
              return [];
            }),
```

```diff
              throw Error("process.binding is not supported");
            }),
            (u.cwd = function () {
              return "/";
            }),
- 
- 
+           (u.binding = function (e) {
+           (u.chdir = function (e) {
              throw Error("process.chdir is not supported");
            }),
            (u.umask = function () {
              return 0;
            });
```

```diff
          "use strict";
- 
- 
+       93629: function (e, t, n) {
+         n.r(t);
          var r = n("51545");
          window.DiscordSentry = (0, r.initSentry)();
        },
```

```diff
          "use strict";
- 
-           n.d(e, {
- 
+       316217: function (e, t, n) {
+         n.r(t),
              IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function () {
                return o;
              },
              filterThrottle: function () {
                return i;
```

```diff
              r = {
                minute: { slot: 0, budgetUsed: 0 },
                hour: { slot: 0, budgetUsed: 0 },
              };
            return () => {
-           let { maxBudgetMinute: e, maxBudgetHour: n } = t,
- 
-               o = Math.round(t / 1e3 / 60),
-               i = Math.round(t / 1e3 / 60 / 60);
- 
+         function i(e) {
+             let e = Date.now(),
              return (
                r.minute.slot !== o &&
                  ((r.minute.slot = o), (r.minute.budgetUsed = 0)),
                r.hour.slot !== i && ((r.hour.slot = i), (r.hour.budgetUsed = 0)),
```

```diff
                  (r.hour.budgetUsed++, !0)
              );
            };
          }
        },
- 
- 
+               !!(r.minute.budgetUsed < t) &&
+       51545: function (e, t, n) {
          "use strict";
```

```diff
            n("222007");
          var r = n("245123"),
            o = n("316217");
          let i = ["oppobrowser", "realmebrowser", "heytapbrowser"];
          function u() {
-           n.d(e, {
- 
- 
+         n.r(t),
+           let e = window;
            return (
```

```diff
            );
          }
          let c = (0, o.filterThrottle)({ maxBudgetMinute: 1, maxBudgetHour: 3 });
          function s() {
-             null != t.$ ||
-             null != t.BetterDiscord ||
-             null != t.BdApi ||
-             null != t.rambox
- 
- 
+             null != e.jQuery ||
+           var e;
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
```

```diff
                return !(
-             beforeSend: t => {
-               var e, n;
- 
-                   null != e.exception.values &&
-                   e.exception.values.every(
-                     t =>
-                       null == t.stacktrace ||
-                       (null != t.stacktrace.frames &&
-                         1 === t.stacktrace.frames.length)
- 
+             release: "discord_web-75cf4dbf7aea7820699c888611e65093b4f46f1e",
+                 (null != (t = e).exception &&
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                  i.some(
```

```diff
                  )
                ) &&
                  !u() &&
                  !(
- 
- 
+                   e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0
+                   "Aborted" === (n = e).message ||
                    "cancel captcha" === n.message
                  ) &&
                  c()
```

```diff
                "could not play audio",
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
-                 ? t
- 
-             r.setTag("buildNumber", ((t = "263588"), "263588")),
-           let e = window.GLOBAL_ENV.SENTRY_TAGS;
-           if (null != e && "object" == typeof e)
-             for (let t in e) r.setTag(t, e[t]);
- 
+                 ? e
+ 
+             r.setTag("builtAt", String("1706906823109"));
            return r;
          }
        },
      },
      n = {};
```

```diff
      if (void 0 !== o) return o.exports;
-     var o = n[t];
- 
-     return e[t](i, i.exports, r), (i.loaded = !0), i.exports;
- 
+   function r(e) {
+     var i = (n[e] = { id: e, loaded: !1, exports: {} });
    }
```

```diff
        return (
-     (r.es = function (t, e) {
- 
- 
+   (r.m = t),
+         Object.keys(e).forEach(function (n) {
            "default" !== n &&
```

```diff
                enumerable: !0,
                get: function () {
-             Object.defineProperty(e, n, {
- 
- 
+             !Object.prototype.hasOwnProperty.call(t, n) &&
+                 return e[n];
                },
              });
          }),
```

```diff
        );
      }),
-         t
- 
-       return Object.prototype.hasOwnProperty.call(t, e);
- 
+         e
+ 
+     (r.o = function (e, t) {
      }),
```

```diff
        if (n) {
          i = i || 0;
-     (r.O = function (e, n, o, i) {
- 
-         for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
- 
+     (e = []),
+         e[u] = [n, o, i];
          return;
        }
```

```diff
          for (
- 
- 
+       for (var c = 1 / 0, u = 0; u < e.length; u++) {
+           var n = e[u][0], o = e[u][1], i = e[u][2], s = !0, a = 0;
            a < n.length;
            a++
          )
            c >= i &&
```

```diff
            })
              ? n.splice(a--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
-             return r.O[t](n[a]);
- 
- 
+           Object.keys(r.O).every(function (e) {
+           e.splice(u--, 1);
            var l = o();
```

```diff
          }
        }
- 
- 
+           void 0 !== l && (t = l);
+       return t;
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
```

```diff
          if ("object" == typeof window) return window;
        }
      })()),
- 
-       for (var n in e)
-           !r.o(t, n) &&
-           Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
- 
+       } catch (e) {
+           !r.o(e, n) &&
      }),
```

```diff
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
- 
-         Object.defineProperty(t, "__esModule", { value: !0 });
- 
+     (r.r = function (e) {
+         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      }),
```

```diff
      }),
-       return t && t.__esModule ? t.default : t;
- 
-       return (t.paths = []), !t.children && (t.children = []), t;
- 
+     (r.n = function (e) {
+     (r.nmd = function (e) {
      }),
```

```diff
        return (
- 
-         Object.defineProperty(t, "exports", {
- 
+     (r.hmd = function (e) {
+         !(e = Object.create(e)).children && (e.children = []),
            enumerable: !0,
            set: function () {
              throw Error(
                "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
```

```diff
              );
            },
          }),
- 
-         t
- 
+                 e.id
+         e
+ 
        );
      }),
      !(function () {
```

```diff
        };
-       r.O.j = function (e) {
-         return 0 === t[e];
- 
- 
+       var e = { sentry: 0 };
+       var t = function (t, n) {
            var o = n[0],
              i = n[1],
              u = n[2],
              c,
              s,
```

```diff
              })
            ) {
              for (c in i) r.o(i, c) && (r.m[c] = i[c]);
              if (u) var l = u(r);
            }
-               return 0 !== t[e];
- 
-             (s = o[a]), r.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
- 
+             o.some(function (t) {
+           for (t && t(n); a < o.length; a++)
            return r.O(l);
          },
          n = (this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []);
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- 
- //# sourceMappingURL=sentry.a31884141e9829b39aa2.js.map
- 
+       n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
+ //# sourceMappingURL=sentry.a4cc543bee09e61d199d.js.map
+ 

```