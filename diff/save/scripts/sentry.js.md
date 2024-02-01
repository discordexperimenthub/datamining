```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-41ca92d1bca2f328539a185eb1e3bdf96c7f5ea7",
+             release: "discord_web-a7d45c5000e174ad38c9e7b71b85608c721b65e8",
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
-             r.setTag("buildNumber", ((e = "263343"), "263343")),
-             r.setTag("builtAt", String("1706829526648"));
+             r.setTag("buildNumber", ((e = "263357"), "263357")),
+             r.setTag("builtAt", String("1706830996902"));
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
- //# sourceMappingURL=sentry.94fbbf27b0db9c9b3298.js.map
+ //# sourceMappingURL=sentry.7d837e3f6a9bb3099b27.js.map

```