(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53159"],
  {
    27180: function (e, s, t) {
      "use strict";
      e.exports = t.p + "be051e3faeae88295195.svg";
    },
    748168: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return o;
          },
        });
      var a = t("37983");
      t("884691");
      var d = t("77078"),
        l = t("145131"),
        i = t("782340"),
        n = t("706179");
      function o(e) {
        let { onClose: s, transitionState: t } = e;
        return (0, a.jsxs)(d.ModalRoot, {
          size: d.ModalSize.SMALL,
          transitionState: t,
          children: [
            (0, a.jsxs)(d.ModalHeader, {
              justify: l.default.Justify.BETWEEN,
              children: [
                (0, a.jsx)(d.FormTitle, {
                  tag: "h2",
                  className: n.header,
                  children: i.default.Messages.STREAM_FULL_MODAL_HEADER,
                }),
                (0, a.jsx)(d.ModalCloseButton, {
                  onClick: s,
                  className: n.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)(d.ModalContent, {
              children: [
                (0, a.jsx)(d.Text, {
                  variant: "text-md/medium",
                  children: i.default.Messages.STREAM_FULL_MODAL_BODY,
                }),
                (0, a.jsx)("div", { className: n.fullArt }),
              ],
            }),
            (0, a.jsx)(d.ModalFooter, {
              children: (0, a.jsx)(d.Button, {
                onClick: s,
                children: i.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5c98b97e1446702613b1.js.map
