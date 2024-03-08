(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37637"],
  {
    127563: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return E;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        o = t("77078"),
        r = t("945330"),
        n = t("648750"),
        c = t("775032"),
        d = t("863972"),
        i = t("884706"),
        N = t("782340"),
        u = t("745959"),
        E = e => {
          let {
              currentUser: s,
              otherUser: t,
              transitionState: E,
              onClose: _,
            } = e,
            C = l.useCallback(() => {
              _();
            }, [_]),
            I = (0, c.default)(),
            [T, L] = l.useState(!1),
            [h, M] = l.useState(!1),
            x = l.useCallback(() => {
              M(!0), L(!1);
            }, []),
            { disconnectLinkRequest: A, isDisconnectLoading: D } = (0,
            n.useFamilyCenterActions)({ onSuccess: C, onError: x });
          return (0, a.jsx)(o.ModalRoot, {
            transitionState: E,
            children: (0, a.jsxs)("form", {
              onSubmit: e => {
                e.preventDefault(), A(t);
              },
              children: [
                h
                  ? (0, a.jsx)(o.FormErrorBlock, {
                      className: u.error,
                      children:
                        N.default.Messages
                          .FAMILY_CENTER_DISCONNECT_LINK_MODAL_ERROR,
                    })
                  : null,
                (0, a.jsxs)(o.ModalContent, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: u.header,
                      children: [
                        (0, a.jsx)(d.default, {
                          currentUser: s,
                          otherUser: t,
                          children: (0, a.jsx)(r.default, {
                            className: u.closeIcon,
                          }),
                        }),
                        (0, a.jsx)(o.Heading, {
                          className: u.headerText,
                          variant: "text-lg/bold",
                          children:
                            N.default.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_TITLE.format(
                              { isAdult: I }
                            ),
                        }),
                        (0, a.jsx)(i.default, { user: t, fill: !0 }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: u.content,
                      children: [
                        (0, a.jsx)(o.Text, {
                          className: u.noticeHeader,
                          variant: "eyebrow",
                          color: "header-primary",
                          children:
                            N.default.Messages
                              .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_HEADER,
                        }),
                        (0, a.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: I
                            ? N.default.Messages
                                .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_PARENT
                            : N.default.Messages
                                .FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_TEEN,
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.Checkbox, {
                      className: u.acknowledgementCheckbox,
                      type: o.Checkbox.Types.INVERTED,
                      value: T,
                      onChange: (e, s) => {
                        L(s), M(!1);
                      },
                      children: (0, a.jsx)("div", {
                        className: u.checkboxLabel,
                        children: (0, a.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          children: I
                            ? N.default.Messages
                                .FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_PARENT
                            : N.default.Messages
                                .FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_TEEN,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(o.ModalFooter, {
                  children: (0, a.jsxs)("div", {
                    className: u.footer,
                    children: [
                      (0, a.jsx)(o.Button, {
                        className: u.button,
                        type: "button",
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: _,
                        size: o.Button.Sizes.SMALL,
                        disabled: D,
                        children: N.default.Messages.CANCEL,
                      }),
                      (0, a.jsx)(o.Button, {
                        className: u.button,
                        type: "submit",
                        disabled: !T || D,
                        submitting: D,
                        color: o.ButtonColors.RED,
                        size: o.Button.Sizes.SMALL,
                        children:
                          N.default.Messages.FAMILY_CENTER_DISCONNECT_BUTTON,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=f4e4ad0d0de9696a07d7.js.map
