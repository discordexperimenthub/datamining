(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52962"],
  {
    581517: function (e, o, t) {
      "use strict";
      t.r(o),
        t.d(o, {
          default: function () {
            return c;
          },
        });
      var l = t("37983"),
        s = t("884691"),
        a = t("77078"),
        r = t("476765"),
        n = t("701909"),
        d = t("49111"),
        i = t("782340");
      function c(e) {
        let { transitionState: o, onConfirm: t, onClose: c } = e,
          u = (0, r.useUID)(),
          h = s.useCallback(() => {
            t(), c();
          }, [t, c]);
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: o,
          "aria-labelledby": u,
          size: a.ModalSize.SMALL,
          children: [
            (0, l.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, l.jsx)(a.Heading, {
                id: u,
                color: "header-primary",
                variant: "heading-md/semibold",
                children: i.default.Messages.DISABLE_INVITES,
              }),
            }),
            (0, l.jsx)(a.ModalContent, {
              children: (0, l.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  i.default.Messages.INVITES_DISABLED_DESCRIPTION.format({
                    helpArticleUrl: n.default.getArticleURL(
                      d.HelpdeskArticles.INVITE_DISABLED
                    ),
                  }),
              }),
            }),
            (0, l.jsxs)(a.ModalFooter, {
              children: [
                (0, l.jsx)(a.Button, {
                  onClick: h,
                  color: a.Button.Colors.RED,
                  look: a.Button.Looks.FILLED,
                  children: i.default.Messages.YES_TEXT,
                }),
                (0, l.jsx)(a.Button, {
                  onClick: c,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  children: i.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=c72c2b54f8c493d08b23.js.map
