(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63081"],
  {
    653240: function (e, t, s) {
      "use strict";
      e.exports = s.p + "baa5b6db50bb89d55668.svg";
    },
    140802: function (e, t, s) {
      "use strict";
      e.exports = s.p + "abb37025036befe38e64.svg";
    },
    651662: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("819855"),
        r = s("77078"),
        o = s("841098"),
        i = s("476765"),
        l = s("782340"),
        c = s("889360"),
        u = s("653240"),
        d = s("140802");
      function f(e) {
        let { onClose: t, transitionState: s } = e,
          f = (0, i.useUID)(),
          h = (0, a.isThemeDark)((0, o.default)());
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: s,
          "aria-labelledby": f,
          size: r.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(r.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(r.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: t,
                }),
                (0, n.jsx)("img", {
                  className: c.image,
                  src: h ? u : d,
                  alt: "",
                }),
                (0, n.jsx)(r.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: c.title,
                  children:
                    l.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE,
                }),
                (0, n.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: c.body,
                  children: l.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY,
                }),
              ],
            }),
            (0, n.jsx)(r.ModalFooter, {
              children: (0, n.jsx)(r.Button, {
                className: c.button,
                color: r.Button.Colors.BRAND,
                onClick: t,
                size: r.Button.Sizes.LARGE,
                children: l.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    476765: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return l;
          },
        });
      var n = s("995008"),
        a = s.n(n),
        r = s("775560");
      let o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        i = () => (0, r.useLazyValue)(() => o()),
        l = e => {
          let { children: t } = e;
          return t(i());
        };
    },
  },
]);
//# sourceMappingURL=e71038ddac0dfd0ec13b.js.map
