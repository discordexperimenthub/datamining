```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-f3891359fca07ba9eb0f0a22ff2a12db4b5f9fee",
+             release: "discord_web-0f4e119224a03a8d3f70be53e2397af1b0702f14",
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
-             r.setTag("buildNumber", ((e = "263485"), "263485")),
-             r.setTag("builtAt", String("1706888751852"));
+             r.setTag("buildNumber", ((e = "263500"), "263500")),
+             r.setTag("builtAt", String("1706892923830"));
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
- //# sourceMappingURL=sentry.882cc6e99ebd90475039.js.map
+ //# sourceMappingURL=sentry.6243609574cdd9bba046.js.map

```