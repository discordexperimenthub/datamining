```diff
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
              r.setTag("buildNumber", ((e = "263502"), "263502")),
-             r.setTag("builtAt", String("1706893259377"));
+             r.setTag("builtAt", String("1706894906009"));
            if (null != t && "object" == typeof t)
              for (let e in t) r.setTag(e, t[e]);
            return r;
          }
        },
```

```diff
            }),
              r.setTag("buildNumber", ((e = "263502"), "263502")),
              r.setTag("builtAt", String("1706893259377"));
            let t = window.GLOBAL_ENV.SENTRY_TAGS;
            if (null != t && "object" == typeof t)
-             for (let e in t) r.setTag(e, t[e]);
+             for (let t in e) r.setTag(t, e[t]);
          }
        },
      },
      n = {};
    function r(e) {
```

```diff
      }),
      (e = []),
      (r.O = function (t, n, o, i) {
        if (n) {
          i = i || 0;
-         for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
+         for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
          return;
        }
        for (var c = 1 / 0, u = 0; u < e.length; u++) {
          for (
            var n = e[u][0], o = e[u][1], i = e[u][2], s = !0, a = 0;
```

```diff
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.n = function (e) {
-       return e && e.__esModule ? e.default : e;
+       return t && t.__esModule ? t.default : t;
      (r.nmd = function (e) {
        return (e.paths = []), !e.children && (e.children = []), e;
      }),
      (r.hmd = function (e) {
        return (
```

```diff
      }),
      (r.n = function (e) {
        return e && e.__esModule ? e.default : e;
      }),
      (r.nmd = function (e) {
-       return (e.paths = []), !e.children && (e.children = []), e;
+       return (t.paths = []), !t.children && (t.children = []), t;
      (r.hmd = function (e) {
        return (
          !(e = Object.create(e)).children && (e.children = []),
          Object.defineProperty(e, "exports", {
            enumerable: !0,
```

```diff
            ) {
              for (c in i) r.o(i, c) && (r.m[c] = i[c]);
              if (u) var l = u(r);
            }
            for (t && t(n); a < o.length; a++)
-             (s = o[a]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
+             (s = o[a]), r.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          },
          n = (this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []);
        n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
      })();
    var o = r.O(
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- //# sourceMappingURL=sentry.52daed6613a47f4d9806.js.map
+ //# sourceMappingURL=sentry.89723d63e0665cb4d2b4.js.map

```