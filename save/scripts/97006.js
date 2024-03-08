(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97006"],
  {
    909971: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        }),
        s("222007");
      var a = s("37983"),
        o = s("884691"),
        l = s("414456"),
        n = s.n(l),
        d = s("77078"),
        r = s("476765"),
        i = s("782340"),
        c = s("880651");
      function u(e) {
        let { transitionState: t, onConfirm: s, onClose: l, onDismiss: u } = e,
          [S, M] = o.useState(!1),
          [E, h] = o.useState(!0),
          [A, _] = o.useState(!0),
          m = (0, r.useUID)(),
          x = () => {
            u(), l();
          };
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: t,
          "aria-labelledby": m,
          size: d.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(d.ModalContent, {
              className: c.modalContent,
              children: [
                (0, a.jsx)(d.ModalCloseButton, {
                  onClick: x,
                  className: c.closeButton,
                }),
                (0, a.jsx)(d.Heading, {
                  id: m,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: c.modalTitle,
                  children:
                    i.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_HEADER,
                }),
                (0, a.jsx)(d.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: c.modalBody,
                  children:
                    i.default.Messages
                      .MESSAGE_REQUESTS_SPAM_HAM_MODAL_SUBHEADER,
                }),
                (0, a.jsx)(d.FormSwitch, {
                  hideBorder: !0,
                  onChange: e => {
                    h(e);
                  },
                  className: n(c.modalBody, c.toggle),
                  value: E,
                  children: i.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_TOGGLE,
                }),
              ],
            }),
            (0, a.jsxs)(d.ModalFooter, {
              children: [
                (0, a.jsx)(d.Button, {
                  type: "submit",
                  color: d.Button.Colors.BRAND,
                  onClick: () => {
                    !S && (M(!0), s(E, A), M(!1), l());
                  },
                  submitting: S,
                  children: i.default.Messages.CONFIRM,
                }),
                (0, a.jsx)(d.Button, {
                  type: "submit",
                  color: d.Button.Colors.TRANSPARENT,
                  grow: !0,
                  look: d.ButtonLooks.LINK,
                  onClick: x,
                  submitting: S,
                  className: c.cancelButton,
                  children: i.default.Messages.CANCEL,
                }),
                (0, a.jsx)(d.Checkbox, {
                  value: A,
                  type: d.Checkbox.Types.INVERTED,
                  onChange: (e, t) => {
                    _(t);
                  },
                  children: (0, a.jsx)(d.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    children:
                      i.default.Messages.MESSAGE_REQUESTS_SPAM_HAM_OPT_OUT,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=2cbe5798b0a8741be65f.js.map
