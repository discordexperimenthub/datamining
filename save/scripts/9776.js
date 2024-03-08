(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9776"],
  {
    27180: function (e, s, a) {
      "use strict";
      e.exports = a.p + "be051e3faeae88295195.svg";
    },
    242144: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return r;
          },
        });
      var t = a("37983");
      a("884691");
      var d = a("77078"),
        i = a("145131"),
        n = a("782340"),
        l = a("98438");
      function r(e) {
        let { transitionState: s, onClose: a } = e;
        return (0, t.jsxs)(d.ModalRoot, {
          size: d.ModalSize.DYNAMIC,
          transitionState: s,
          "aria-label":
            n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER,
          children: [
            (0, t.jsxs)(d.ModalHeader, {
              justify: i.default.Justify.BETWEEN,
              separator: !1,
              children: [
                (0, t.jsx)(d.Heading, {
                  variant: "heading-md/semibold",
                  className: l.header,
                  children:
                    n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER,
                }),
                (0, t.jsx)(d.ModalCloseButton, { onClick: a }),
              ],
            }),
            (0, t.jsxs)(d.ModalContent, {
              children: [
                (0, t.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children:
                    n.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_BODY,
                }),
                (0, t.jsx)("div", { className: l.fullArt }),
              ],
            }),
            (0, t.jsx)(d.ModalFooter, {
              children: (0, t.jsx)(d.Button, {
                onClick: a,
                children: n.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d94c9a7351574ba7a786.js.map
