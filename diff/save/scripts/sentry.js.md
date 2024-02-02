```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-1e135b680a11f5e1cc4dfb349452f2876cde2571",
+             release: "discord_web-98c5de50edc656dc0b6d9cbd85e669129e9b5895",
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
-             r.setTag("buildNumber", ((e = "263418"), "263418")),
-             r.setTag("builtAt", String("1706843241395"));
+             r.setTag("buildNumber", ((e = "263436"), "263436")),
+             r.setTag("builtAt", String("1706848328601"));
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
- //# sourceMappingURL=sentry.98a3747548ecadbab9e0.js.map
+ //# sourceMappingURL=sentry.507c5287a04b523f4c74.js.map

```