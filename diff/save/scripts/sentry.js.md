```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-60ada3d2ed0b9b025d79248aa90aba80e7af2d6e",
+             release: "discord_web-1e135b680a11f5e1cc4dfb349452f2876cde2571",
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
-             r.setTag("buildNumber", ((e = "263401"), "263401")),
-             r.setTag("builtAt", String("1706836966020"));
+             r.setTag("buildNumber", ((e = "263418"), "263418")),
+             r.setTag("builtAt", String("1706843241395"));
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
- //# sourceMappingURL=sentry.6e0fc724ca054bd56589.js.map
+ //# sourceMappingURL=sentry.98a3747548ecadbab9e0.js.map

```