(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28463"],
  {
    657437: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var o = a("37983");
      a("884691");
      var s = a("77078"),
        n = a("685665"),
        l = a("606292"),
        r = a("476765"),
        i = a("724001"),
        d = a("630615"),
        c = a("782340"),
        u = a("528085");
      function A(e) {
        let { transitionState: t, onClose: a } = e,
          A = (0, r.useUID)(),
          { analyticsLocations: C } = (0, n.default)();
        return (0, o.jsxs)(s.ModalRoot, {
          transitionState: t,
          "aria-labelledby": A,
          children: [
            (0, o.jsxs)(s.ModalContent, {
              className: u.content,
              children: [
                (0, o.jsx)(i.default, {
                  className: u.image,
                  color: s.tokens.colors.TEXT_PRIMARY,
                }),
                (0, o.jsx)(s.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children: c.default.Messages.PACKAGES_CLAIM_HEADER,
                }),
                (0, o.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: c.default.Messages.PACKAGES_CLAIM_BODY,
                }),
              ],
            }),
            (0, o.jsxs)(s.ModalFooter, {
              children: [
                (0, o.jsx)(s.Button, {
                  onClick: () => {
                    a(),
                      d.IS_LOOTBOXES_READY &&
                        (0, l.openAvatarDecorationModal)({
                          analyticsLocations: C,
                          initialSelectedDecoration: (0,
                          d.getLootboxPrizeAvatarDecoration)(),
                        });
                  },
                  children: c.default.Messages.PACKAGES_CLAIM_CONTINUE,
                }),
                (0, o.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: a,
                  children: c.default.Messages.PACKAGES_CLAIM_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d418ab712bb2150df6d4.js.map
