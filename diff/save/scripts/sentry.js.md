```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-9ea7c53012cbc59e5ebdf6f33aa736936baea46a",
+             release: "discord_web-eddb76cf2cfd3bd54771ce3157eed054d0c5854d",
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
-             r.setTag("buildNumber", ((e = "263297"), "263297")),
-             r.setTag("builtAt", String("1706826107567"));
+             r.setTag("buildNumber", ((e = "263303"), "263303")),
+             r.setTag("builtAt", String("1706826540275"));
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
- //# sourceMappingURL=sentry.ad6c0afdfa54ec520f28.js.map
+ //# sourceMappingURL=sentry.ab99528839185ee45ff1.js.map

```