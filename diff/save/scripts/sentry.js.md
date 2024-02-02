```diff
  !(function () {
-     t = {
-       370692: function (e, t, n) {
- 
+   var t,
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Float32", function (t) {
+       667500: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Float64", function (t) {
+       477315: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Int16", function (t) {
+       527135: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Int32", function (t) {
+       453061: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Int8", function (t) {
+       659510: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Uint16", function (t) {
+       990131: function (t, e, n) {
          "use strict";
```

```diff
            };
          });
        },
-           return function (t, n, r) {
-             return e(this, t, n, r);
- 
- 
+         n("918437")("Uint32", function (t) {
+       332822: function (t, e, n) {
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
-             return function (t, n, r) {
-               return e(this, t, n, r);
- 
- 
+           function (t) {
+       390493: function (t, e, n) {
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
-           if (r === setTimeout) return setTimeout(e, 0);
- 
+           u = (t.exports = {});
+         function a(t) {
            if ((r === c || !r) && setTimeout)
```

```diff
            try {
- 
-           } catch (t) {
- 
+             return (r = setTimeout), setTimeout(t, 0);
+             return r(t, 0);
              try {
```

```diff
            }
          }
          !(function () {
            try {
              r = "function" == typeof setTimeout ? setTimeout : c;
-             } catch (t) {
-               return r.call(this, e, 0);
- 
- 
+               return r.call(null, t, 0);
+           } catch (t) {
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
+           } catch (t) {
+             var t = a(h);
              d = !0;
```

```diff
              }
              (i = null),
                (d = !1),
-               for (i = l, l = []; ++f < t; ) i && i[f].run();
-               (f = -1), (t = l.length);
- 
-                 if (o === clearTimeout) return clearTimeout(e);
- 
+             for (var e = l.length; e; ) {
+               !(function (t) {
                  if ((o === s || !o) && clearTimeout)
```

```diff
                  try {
- 
-                 } catch (t) {
- 
+                   return (o = clearTimeout), clearTimeout(t);
+                   o(t);
                    try {
```

```diff
                    }
                  }
-                   } catch (t) {
-                     return o.call(this, e);
- 
- 
+                     return o.call(null, t);
+               })(t);
            }
          }
```

```diff
          }
          function b() {}
-           (this.fun = e), (this.array = t);
- 
-           var t = Array(arguments.length - 1);
- 
+         function m(t, e) {
+         (u.nextTick = function (t) {
            if (arguments.length > 1)
```

```diff
            (u.removeListener = b),
            (u.removeAllListeners = b),
            (u.emit = b),
            (u.prependListener = b),
            (u.prependOnceListener = b),
-           l.push(new m(e, t)), 1 === l.length && !d && a(p);
- 
- 
+             for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
+           (u.listeners = function (t) {
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
+           (u.binding = function (t) {
+           (u.chdir = function (t) {
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
+       93629: function (t, e, n) {
+         n.r(e);
          var r = n("51545");
          window.DiscordSentry = (0, r.initSentry)();
        },
```

```diff
          "use strict";
- 
-           n.d(t, {
- 
+       316217: function (t, e, n) {
+         n.r(e),
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
-           let { maxBudgetMinute: t, maxBudgetHour: n } = e,
- 
-               o = Math.round(e / 1e3 / 60),
-               i = Math.round(e / 1e3 / 60 / 60);
- 
+         function i(t) {
+             let t = Date.now(),
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
+               !!(r.minute.budgetUsed < e) &&
+       51545: function (t, e, n) {
          "use strict";
```

```diff
            n("222007");
          var r = n("245123"),
            o = n("316217");
          let i = ["oppobrowser", "realmebrowser", "heytapbrowser"];
          function u() {
-           n.d(t, {
- 
- 
+         n.r(e),
+           let t = window;
            return (
```

```diff
            );
          }
          let c = (0, o.filterThrottle)({ maxBudgetMinute: 1, maxBudgetHour: 3 });
          function s() {
-             null != e.$ ||
-             null != e.BetterDiscord ||
-             null != e.BdApi ||
-             null != e.rambox
- 
- 
+             null != t.jQuery ||
+           var t;
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
```

```diff
                return !(
-             beforeSend: e => {
-               var t, n;
- 
-                   null != t.exception.values &&
-                   t.exception.values.every(
-                     e =>
-                       null == e.stacktrace ||
-                       (null != e.stacktrace.frames &&
-                         1 === e.stacktrace.frames.length)
- 
+             release: "discord_web-c10ce3a6d35c670d6ff0f578ddf091b088085ec9",
+                 (null != (e = t).exception &&
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
+                   t => window.navigator.appVersion.toLowerCase().indexOf(t) >= 0
+                   "Aborted" === (n = t).message ||
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
-                 ? e
- 
-             r.setTag("builtAt", String("1706907137999"));
-           let t = window.GLOBAL_ENV.SENTRY_TAGS;
-           if (null != t && "object" == typeof t)
-             for (let e in t) r.setTag(e, t[e]);
- 
+                 ? t
+             r.setTag("buildNumber", ((t = "263636"), "263636")),
            return r;
          }
        },
      },
      n = {};
```

```diff
      if (void 0 !== o) return o.exports;
-     var o = n[e];
- 
-     return t[e](i, i.exports, r), (i.loaded = !0), i.exports;
- 
+   function r(t) {
+     var i = (n[t] = { id: t, loaded: !1, exports: {} });
    }
```

```diff
        return (
-     (r.es = function (e, t) {
- 
- 
+   (r.m = e),
+         Object.keys(t).forEach(function (n) {
            "default" !== n &&
```

```diff
                enumerable: !0,
                get: function () {
-             Object.defineProperty(t, n, {
- 
- 
+             !Object.prototype.hasOwnProperty.call(e, n) &&
+                 return t[n];
                },
              });
          }),
```

```diff
        );
      }),
-         e
- 
-       return Object.prototype.hasOwnProperty.call(e, t);
- 
+         t
+     (r.o = function (t, e) {
      }),
```

```diff
        if (n) {
          i = i || 0;
-     (r.O = function (t, n, o, i) {
- 
-         for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
- 
+     (t = []),
+         t[u] = [n, o, i];
          return;
        }
```

```diff
          for (
- 
- 
+       for (var c = 1 / 0, u = 0; u < t.length; u++) {
+           var n = t[u][0], o = t[u][1], i = t[u][2], s = !0, a = 0;
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
-             return r.O[e](n[a]);
- 
- 
+           Object.keys(r.O).every(function (t) {
+           t.splice(u--, 1);
            var l = o();
```

```diff
          }
        }
- 
- 
+           void 0 !== l && (e = l);
+       return e;
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
-       for (var n in t)
-           !r.o(e, n) &&
-           Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
- 
+       } catch (t) {
+           !r.o(t, n) &&
      }),
```

```diff
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
- 
-         Object.defineProperty(e, "__esModule", { value: !0 });
- 
+     (r.r = function (t) {
+         Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
      }),
```

```diff
      }),
-       return e && e.__esModule ? e.default : e;
- 
-       return (e.paths = []), !e.children && (e.children = []), e;
- 
+     (r.n = function (t) {
+     (r.nmd = function (t) {
      }),
```

```diff
        return (
- 
-         Object.defineProperty(e, "exports", {
- 
+     (r.hmd = function (t) {
+         !(t = Object.create(t)).children && (t.children = []),
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
-         e
- 
+                 t.id
+         t
        );
      }),
      !(function () {
```

```diff
        };
-       r.O.j = function (t) {
-         return 0 === e[t];
- 
- 
+       var t = { sentry: 0 };
+       var e = function (e, n) {
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
-               return 0 !== e[t];
- 
-             (s = o[a]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
- 
+             o.some(function (e) {
+           for (e && e(n); a < o.length; a++)
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
- //# sourceMappingURL=sentry.309c022e0c832ec6dc39.js.map
- 
+       n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
+ //# sourceMappingURL=sentry.e95fc29fe178e07d8b01.js.map

```