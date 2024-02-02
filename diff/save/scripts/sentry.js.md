```diff
                    }
                  }
                })(e);
            }
          }
-         function b(e, t) {
+         function m(e, t) {
            (this.fun = e), (this.array = t);
          }
          function m() {}
          (u.nextTick = function (e) {
            var t = Array(arguments.length - 1);
```

```diff
            }
          }
          function b(e, t) {
            (this.fun = e), (this.array = t);
          }
-         function m() {}
+         function b() {}
          (u.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new b(e, t)), 1 === l.length && !d && a(p);
```

```diff
          function m() {}
          (u.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
-           l.push(new b(e, t)), 1 === l.length && !d && a(p);
+           l.push(new m(e, t)), 1 === l.length && !d && a(p);
          }),
            (b.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (u.title = "browser"),
```

```diff
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new b(e, t)), 1 === l.length && !d && a(p);
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
            (u.listeners = function (e) {
              return [];
            }),
            (u.binding = function (e) {
              throw Error("process.binding is not supported");
```

```diff
        return r("93629");
      }
    );
    r.O(o);
  })();
- //# sourceMappingURL=sentry.87c5cdf0def79e940163.js.map
+ //# sourceMappingURL=sentry.46fae6d1b8355f2905a5.js.map
  
```