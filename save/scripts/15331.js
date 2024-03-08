(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15331"],
  {
    986686: function (e, t, s) {
      "use strict";
      e.exports = s.p + "26421523fdfaf469e28e.svg";
    },
    332579: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("77078"),
        o = s("476765"),
        l = s("258078"),
        r = s("782340"),
        i = s("156907"),
        u = s("986686");
      function c(e) {
        let { onClose: t, transitionState: s } = e,
          c = (0, o.useUID)();
        return (0, a.jsxs)(n.ModalRoot, {
          transitionState: s,
          "aria-labelledby": c,
          size: n.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(n.ModalContent, {
              className: i.content,
              children: [
                (0, a.jsx)(n.ModalCloseButton, {
                  className: i.closeButton,
                  onClick: t,
                }),
                (0, a.jsx)("img", { className: i.image, src: u, alt: "" }),
                (0, a.jsx)(l.default, {
                  className: i.title,
                  id: c,
                  size: l.default.Sizes.SIZE_24,
                  color: l.default.Colors.HEADER_PRIMARY,
                  children: r.default.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE,
                }),
                (0, a.jsx)(n.Text, {
                  className: i.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    r.default.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE,
                }),
              ],
            }),
            (0, a.jsx)(n.ModalFooter, {
              children: (0, a.jsx)(n.Button, {
                className: i.button,
                color: n.Button.Colors.BRAND,
                onClick: t,
                size: n.Button.Sizes.LARGE,
                children: r.default.Messages.OKAY,
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
            return l;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return i;
          },
        });
      var a = s("995008"),
        n = s.n(a),
        o = s("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return n(e);
        },
        r = () => (0, o.useLazyValue)(() => l()),
        i = e => {
          let { children: t } = e;
          return t(r());
        };
    },
  },
]);
//# sourceMappingURL=87b04dab846477e670a6.js.map
