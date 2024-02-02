```diff
            r.init({
              tunnel: "/error-reporting-proxy/web",
              dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
              autoSessionTracking: !1,
              environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
- 
+             release: "discord_web-cd898ae1447e7c7622414879ae9686c9b2f98702",
              beforeSend: e => {
                var t, n;
                return !(
                  (null != (t = e).exception &&
                    null != t.exception.values &&
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
-             r.setTag("builtAt", String("1706906823109"));
- 
- //# sourceMappingURL=sentry.a4cc543bee09e61d199d.js.map
- 
+             r.setTag("buildNumber", ((e = "263630"), "263630")),
+ //# sourceMappingURL=sentry.309c022e0c832ec6dc39.js.map

```