(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9537"],
  {
    950535: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return r;
          },
        }),
        t("222007");
      var s = t("37983"),
        l = t("884691"),
        o = t("77078"),
        n = t("476765"),
        i = t("782340"),
        d = t("795077");
      function r(e) {
        let { transitionState: a, onConfirm: t, onClose: r, onDismiss: c } = e,
          [u, h] = l.useState(!1),
          C = (0, n.useUID)(),
          M = async () => {
            if (!u) {
              h(!0);
              try {
                await t();
              } catch (e) {
              } finally {
                h(!1);
              }
              r();
            }
          };
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: a,
          "aria-labelledby": C,
          size: o.ModalSize.SMALL,
          children: [
            (0, s.jsxs)(o.ModalContent, {
              children: [
                (0, s.jsx)(o.ModalCloseButton, {
                  onClick: () => {
                    c(), r();
                  },
                  className: d.closeButton,
                }),
                (0, s.jsx)(o.Heading, {
                  id: C,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: d.modalTitle,
                  children:
                    i.default.Messages
                      .MESSAGE_REQUEST_ACCEPT_CONFIRMATION_TITLE,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: d.modalBody,
                  children:
                    i.default.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_BODY,
                }),
              ],
            }),
            (0, s.jsx)(o.ModalFooter, {
              children: (0, s.jsx)(o.Button, {
                type: "submit",
                color: o.Button.Colors.BRAND,
                onClick: M,
                submitting: u,
                children: i.default.Messages.CONFIRM,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=4081cebaaf97613cf198.js.map
