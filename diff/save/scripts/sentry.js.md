```diff
                    }
                  }
                })(t);
            }
          }
-         function b(t, e) {
+         function m(t, e) {
            (this.fun = t), (this.array = e);
          }
          function m() {}
          (u.nextTick = function (t) {
            var e = Array(arguments.length - 1);
```

```diff
            }
          }
          function b(t, e) {
            (this.fun = t), (this.array = e);
          }
-         function m() {}
+         function b() {}
          (u.nextTick = function (t) {
            var e = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            l.push(new b(t, e)), 1 === l.length && !d && a(p);
```

```diff
          function m() {}
          (u.nextTick = function (t) {
            var e = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
-           l.push(new b(t, e)), 1 === l.length && !d && a(p);
+           l.push(new m(t, e)), 1 === l.length && !d && a(p);
          }),
            (b.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (u.title = "browser"),
```

```diff
            var e = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            l.push(new b(t, e)), 1 === l.length && !d && a(p);
          }),
-           (b.prototype.run = function () {
+           (m.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (u.title = "browser"),
            (u.browser = !0),
            (u.env = {}),
```

```diff
            (u.browser = !0),
            (u.env = {}),
            (u.argv = []),
            (u.version = ""),
            (u.versions = {}),
-           (u.on = m),
-           (u.addListener = m),
-           (u.once = m),
-           (u.off = m),
-           (u.removeListener = m),
-           (u.removeAllListeners = m),
-           (u.emit = m),
-           (u.prependListener = m),
-           (u.prependOnceListener = m),
+           (u.on = b),
+           (u.addListener = b),
+           (u.once = b),
+           (u.off = b),
+           (u.removeListener = b),
+           (u.removeAllListeners = b),
+           (u.emit = b),
+           (u.prependListener = b),
+           (u.prependOnceListener = b),
            (u.listeners = function (t) {
              return [];
            }),
            (u.binding = function (t) {
              throw Error("process.binding is not supported");
```

```diff
                "could not play audio",
                "notosans-400-normalitalic",
              ],
              denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
            }),
-             r.setTag("buildNumber", ((t = "263562"), "263562")),
+             r.setTag("buildNumber", ((t = "263573"), "263573")),
              r.setTag("builtAt", String("1706901350357"));
            let e = window.GLOBAL_ENV.SENTRY_TAGS;
            if (null != e && "object" == typeof e)
              for (let t in e) r.setTag(t, e[t]);
            return r;
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- //# sourceMappingURL=sentry.5c3cc2c32da317235578.js.map
+ //# sourceMappingURL=sentry.db7bdba61632ea199369.js.map
  
```