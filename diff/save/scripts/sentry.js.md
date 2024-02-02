```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-4ced880a5d8713b23df84dd66eba03ca070b3d0b",
+             release: "discord_web-f3891359fca07ba9eb0f0a22ff2a12db4b5f9fee",
                var e, n;
                return !(
                  (null != (e = t).exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
```

```diff
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
              r.setTag("buildNumber", ((t = "263482"), "263482")),
-             r.setTag("builtAt", String("1706886140021"));
+             r.setTag("builtAt", String("1706888751852"));
            if (null != e && "object" == typeof e)
              for (let t in e) r.setTag(t, e[t]);
            return r;
          }
        },
```

```diff
            }),
              r.setTag("buildNumber", ((t = "263482"), "263482")),
              r.setTag("builtAt", String("1706886140021"));
            let e = window.GLOBAL_ENV.SENTRY_TAGS;
            if (null != e && "object" == typeof e)
-             for (let t in e) r.setTag(t, e[t]);
+             for (let e in t) r.setTag(e, t[e]);
          }
        },
      },
      n = {};
    function r(t) {
```

```diff
      }),
      (t = []),
      (r.O = function (e, n, o, i) {
        if (n) {
          i = i || 0;
-         for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
+         for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
          return;
        }
        for (var c = 1 / 0, u = 0; u < t.length; u++) {
          for (
            var n = t[u][0], o = t[u][1], i = t[u][2], s = !0, a = 0;
```

```diff
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.n = function (t) {
-       return t && t.__esModule ? t.default : t;
+       return e && e.__esModule ? e.default : e;
      (r.nmd = function (t) {
        return (t.paths = []), !t.children && (t.children = []), t;
      }),
      (r.hmd = function (t) {
        return (
```

```diff
      }),
      (r.n = function (t) {
        return t && t.__esModule ? t.default : t;
      }),
      (r.nmd = function (t) {
-       return (t.paths = []), !t.children && (t.children = []), t;
+       return (e.paths = []), !e.children && (e.children = []), e;
      (r.hmd = function (t) {
        return (
          !(t = Object.create(t)).children && (t.children = []),
          Object.defineProperty(t, "exports", {
            enumerable: !0,
```

```diff
            ) {
              for (c in i) r.o(i, c) && (r.m[c] = i[c]);
              if (u) var l = u(r);
            }
            for (e && e(n); a < o.length; a++)
-             (s = o[a]), r.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
+             (s = o[a]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          },
          n = (this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []);
        n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
      })();
    var o = r.O(
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- //# sourceMappingURL=sentry.4bf61805ff0bcbbb5598.js.map
+ //# sourceMappingURL=sentry.882cc6e99ebd90475039.js.map

```