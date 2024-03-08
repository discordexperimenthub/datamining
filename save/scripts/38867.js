(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38867"],
  {
    347647: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        }),
        t("222007"),
        t("424973");
      let a = { 1: "bold", 4: "underline" },
        r = {
          30: "black",
          31: "red",
          32: "green",
          33: "yellow",
          34: "blue",
          35: "magenta",
          36: "cyan",
          37: "white",
        },
        l = {
          40: "black",
          41: "red",
          42: "green",
          43: "yellow",
          44: "blue",
          45: "magenta",
          46: "cyan",
          47: "white",
        },
        i = /\x1B\[(\d+(?:[:;]\d+)*)m/,
        u = new RegExp("(?=".concat(i.source, ")"));
      function c() {
        let e = [
          ...s("foreground", r, ["38", "39"], !0),
          ...s("background", l, ["48", "49"], !0),
          ...s("style", a, [], !1),
          {
            className: "ansi-control-sequence",
            begin: i,
            starts: { end: u, endsParent: !0 },
          },
        ];
        return (
          (function (e) {
            for (let n = 0; n < e.length; n++) e[n].contains = e.slice(n + 1);
          })(e),
          { contains: [{ begin: u, contains: e }] }
        );
      }
      function s(e, n, t, a) {
        let r = ["0", ...t];
        return (
          a && r.push(...Object.keys(n)),
          Object.entries(n).map(n => {
            var t, a, l, i;
            let [c, s] = n;
            return (
              (t = e),
              (a = s),
              (l = c),
              (i = r),
              {
                className: "ansi-".concat(t, "-").concat(a),
                endsParent: !0,
                begin: u,
                "on:begin": (e, n) => {
                  let t = e[1].split(";");
                  for (let e of (void 0 === n.data.isOn && (n.data.isOn = !1),
                  t))
                    e === l
                      ? (n.data.isOn = !0)
                      : i.includes(e) && (n.data.isOn = !1);
                  !n.data.isOn && n.ignoreMatch();
                },
              }
            );
          })
        );
      }
    },
    86256: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        }),
        t("222007");
      var a = t("436443"),
        r = t("917351"),
        l = t.n(r),
        i = t("347647");
      a.default.registerLanguage("ansi", i.default);
      var u = {
        highlight(e, n, t) {
          if (
            !(function (e) {
              if (e.indexOf(c) >= 0) return !1;
              let n = 0,
                t = e.split("\n");
              for (let e of t) {
                if (e.length > 1e3) return !1;
                null == e.match(/^\s*[/][/]/) &&
                  null != e.match(/[^/]/) &&
                  (n = 0);
                let t = e.match(/[/]/g);
                if (null != t && (n += t.length) > 30) return !1;
              }
              return !0;
            })(n)
          )
            return null;
          Date.now();
          let r = a.default.highlight(e, n, t);
          return Date.now(), r;
        },
        hasLanguage: e => null != a.default.getLanguage(e),
      };
      let c = l.repeat("/", 15);
    },
  },
]);
//# sourceMappingURL=b2683f417b08f389c3aa.js.map
