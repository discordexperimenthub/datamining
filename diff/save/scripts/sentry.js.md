```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-13d8d5b7634b02bb157d3a1ad6344e7bc372c609",
+             release: "discord_web-6c55c6fb7481c13234e9f54d5abd8363f2080e3d",
                var e, n;
                return !(
                  (null != (e = t).exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
```

```diff
                "could not play audio",
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
-             r.setTag("buildNumber", ((t = "263330"), "263330")),
-             r.setTag("builtAt", String("1706828467465"));
+             r.setTag("buildNumber", ((t = "263336"), "263336")),
+             r.setTag("builtAt", String("1706828951247"));
            if (null != e && "object" == typeof e)
              for (let t in e) r.setTag(t, e[t]);
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
- //# sourceMappingURL=sentry.4f8d88004e0cc3faf627.js.map
+ //# sourceMappingURL=sentry.8428fb4946d6f198548a.js.map

```