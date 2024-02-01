```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-2d4ebf61a1ccc70ff5ea46aa33679b2d0e8958c2",
+             release: "discord_web-9ea7c53012cbc59e5ebdf6f33aa736936baea46a",
                var t, n;
                return !(
                  (null != (t = e).exception &&
                    null != t.exception.values &&
                    t.exception.values.every(
```

```diff
                "could not play audio",
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
-             r.setTag("buildNumber", ((e = "263284"), "263284")),
-             r.setTag("builtAt", String("1706825194367"));
+             r.setTag("buildNumber", ((e = "263297"), "263297")),
+             r.setTag("builtAt", String("1706826107567"));
            if (null != t && "object" == typeof t)
              for (let e in t) r.setTag(e, t[e]);
            return r;
          }
        },
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- //# sourceMappingURL=sentry.2482a98d5e549483aaee.js.map
+ //# sourceMappingURL=sentry.ad6c0afdfa54ec520f28.js.map

```