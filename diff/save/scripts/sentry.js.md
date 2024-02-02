```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
-             release: "discord_web-662bdac9198dbc7a468675255ac7b400c31ef75d",
+             release: "discord_web-4ced880a5d8713b23df84dd66eba03ca070b3d0b",
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
-             r.setTag("buildNumber", ((t = "263454"), "263454")),
-             r.setTag("builtAt", String("1706853958145"));
+             r.setTag("buildNumber", ((t = "263482"), "263482")),
+             r.setTag("builtAt", String("1706886140021"));
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
- //# sourceMappingURL=sentry.4809f5052b23f4e716b4.js.map
+ //# sourceMappingURL=sentry.4bf61805ff0bcbbb5598.js.map

```