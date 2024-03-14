(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28463"],
  {
    657437: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var o = t("77078"),
        n = t("476765"),
        l = t("724001"),
        r = t("782340"),
        d = t("528085");
      function i(e) {
        let { transitionState: s, onClose: t } = e,
          i = (0, n.useUID)();
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: s,
          "aria-labelledby": i,
          children: [
            (0, a.jsxs)(o.ModalContent, {
              className: d.content,
              children: [
                (0, a.jsx)(l.default, {
                  className: d.image,
                  color: o.tokens.colors.TEXT_PRIMARY,
                }),
                (0, a.jsx)(o.Heading, {
                  className: d.title,
                  variant: "heading-xl/extrabold",
                  children: r.default.Messages.PACKAGES_CLAIM_HEADER,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: r.default.Messages.PACKAGES_CLAIM_BODY,
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              children: [
                (0, a.jsx)(o.Button, {
                  onClick: () => {
                    t();
                  },
                  children: r.default.Messages.PACKAGES_CLAIM_CONTINUE,
                }),
                (0, a.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: t,
                  children: r.default.Messages.PACKAGES_CLAIM_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=193adfa6adff186038e1.js.map
