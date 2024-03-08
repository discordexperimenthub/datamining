(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42236"],
  {
    995494: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return i;
          },
        }),
        e("511434"),
        e("313619"),
        e("654714"),
        e("287168"),
        e("956660"),
        e("222007");
      var o = e("884691"),
        a = e("730290"),
        c = e("49111"),
        i = () => {
          let { redirect: n } = (0, a.parse)(window.location.search);
          return (
            o.useEffect(() => {
              if (null != n && "" !== n) {
                let t = new URL("".concat(window.location.origin).concat(n)),
                  e = new URLSearchParams(t.search);
                e.set("handoff_token", "null"),
                  (t.search = e.toString()),
                  (window.location.href = t.toString());
              } else window.location.href = c.Routes.LOGIN;
            }, [n]),
            null
          );
        };
    },
  },
]);
//# sourceMappingURL=d2b95202118f9e2d27f8.js.map
