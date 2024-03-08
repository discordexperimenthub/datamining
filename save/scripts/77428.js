(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77428"],
  {
    217014: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return _;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        n = t("627445"),
        r = t.n(n),
        o = t("77078"),
        i = t("945330"),
        d = t("648750"),
        c = t("775032"),
        u = t("863972"),
        E = t("884706"),
        L = t("782340"),
        N = t("452213"),
        _ = e => {
          let {
              currentUser: s,
              otherUser: t,
              transitionState: n,
              onClose: _,
            } = e,
            [h, C] = l.useState(!1),
            M = l.useCallback(() => {
              C(!0);
            }, []),
            x = l.useCallback(() => {
              C(!1);
            }, []),
            I = l.useCallback(() => {
              _();
            }, [_]),
            m = (0, c.default)(),
            { declineLinkRequest: f, isDeclineLoading: b } = (0,
            d.useFamilyCenterActions)({ onError: M, onSuccess: I });
          return (
            r(
              !m,
              "FamilyCenterDeclineLinkModal should only be rendered for teens."
            ),
            (0, a.jsx)(o.ModalRoot, {
              transitionState: n,
              children: (0, a.jsxs)("form", {
                onSubmit: e => {
                  e.preventDefault(), f(t);
                },
                children: [
                  h
                    ? (0, a.jsx)(o.FormErrorBlock, {
                        className: N.error,
                        onDismiss: x,
                        children:
                          L.default.Messages
                            .FAMILY_CENTER_DECLINE_LINK_MODAL_ERROR,
                      })
                    : null,
                  (0, a.jsx)(o.ModalContent, {
                    children: (0, a.jsxs)("div", {
                      className: N.header,
                      children: [
                        (0, a.jsx)(u.default, {
                          currentUser: s,
                          otherUser: t,
                          children: (0, a.jsx)(i.default, {
                            className: N.closeIcon,
                          }),
                        }),
                        (0, a.jsx)(o.Heading, {
                          className: N.headerText,
                          variant: "text-lg/bold",
                          children:
                            L.default.Messages
                              .FAMILY_CENTER_DECLINE_LINK_MODAL_TITLE,
                        }),
                        (0, a.jsx)(E.default, { user: t }),
                        (0, a.jsxs)("div", {
                          className: N.content,
                          children: [
                            (0, a.jsx)(o.Text, {
                              className: N.noticeHeader,
                              variant: "eyebrow",
                              color: "header-primary",
                              children:
                                L.default.Messages
                                  .FAMILY_CENTER_DECLINE_LINK_MODAL_NOTICE_HEADER,
                            }),
                            (0, a.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children:
                                L.default.Messages
                                  .FAMILY_CENTER_DECLINE_LINK_MODAL_DISCLAIMER_TEEN,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(o.ModalFooter, {
                    children: (0, a.jsxs)("div", {
                      className: N.footer,
                      children: [
                        (0, a.jsx)(o.Button, {
                          className: N.button,
                          type: "button",
                          disabled: b,
                          look: o.Button.Looks.LINK,
                          color: o.Button.Colors.PRIMARY,
                          onClick: _,
                          size: o.Button.Sizes.SMALL,
                          children: L.default.Messages.CANCEL,
                        }),
                        (0, a.jsx)(o.Button, {
                          className: N.button,
                          type: "submit",
                          disabled: b,
                          submitting: b,
                          color: o.ButtonColors.RED,
                          size: o.Button.Sizes.SMALL,
                          children:
                            L.default.Messages.FAMILY_CENTER_DECLINE_REQUEST,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=8f3e71e2228c4e024208.js.map
