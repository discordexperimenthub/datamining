(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58402"],
  {
    809175: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return h;
          },
        }),
        t("222007");
      var l = t("37983"),
        a = t("884691"),
        o = t("627445"),
        n = t.n(o),
        r = t("77078"),
        i = t("945330"),
        d = t("648750"),
        u = t("775032"),
        c = t("863972"),
        C = t("884706"),
        E = t("782340"),
        L = t("656656"),
        h = e => {
          let {
              currentUser: s,
              otherUser: t,
              transitionState: o,
              onClose: h,
            } = e,
            [_, N] = a.useState(!1),
            M = a.useCallback(() => {
              N(!0);
            }, []),
            f = a.useCallback(() => {
              N(!1);
            }, []),
            b = a.useCallback(() => {
              h();
            }, [h]),
            m = (0, u.default)(),
            { cancelLinkRequest: x, isCancelLoading: A } = (0,
            d.useFamilyCenterActions)({ onError: M, onSuccess: b });
          return (
            n(
              m,
              "FamilyCenterDeclineLinkModal should only be rendered for parents."
            ),
            (0, l.jsx)(r.ModalRoot, {
              transitionState: o,
              children: (0, l.jsxs)("form", {
                onSubmit: e => {
                  e.preventDefault(), x(t);
                },
                children: [
                  _
                    ? (0, l.jsx)(r.FormErrorBlock, {
                        className: L.error,
                        onDismiss: f,
                        children:
                          E.default.Messages
                            .FAMILY_CENTER_CANCEL_LINK_MODAL_ERROR,
                      })
                    : null,
                  (0, l.jsx)(r.ModalContent, {
                    children: (0, l.jsxs)("div", {
                      className: L.header,
                      children: [
                        (0, l.jsx)(c.default, {
                          currentUser: s,
                          otherUser: t,
                          children: (0, l.jsx)(i.default, {
                            className: L.closeIcon,
                          }),
                        }),
                        (0, l.jsx)(r.Heading, {
                          className: L.headerText,
                          variant: "text-lg/bold",
                          children:
                            E.default.Messages
                              .FAMILY_CENTER_CANCEL_LINK_MODAL_TITLE,
                        }),
                        (0, l.jsx)(C.default, { user: t, fill: !0 }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(r.ModalFooter, {
                    children: (0, l.jsxs)("div", {
                      className: L.footer,
                      children: [
                        (0, l.jsx)(r.Button, {
                          className: L.button,
                          type: "button",
                          disabled: A,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: h,
                          size: r.Button.Sizes.SMALL,
                          children:
                            E.default.Messages
                              .FAMILY_CENTER_CANCEL_REQUEST_BACK,
                        }),
                        (0, l.jsx)(r.Button, {
                          className: L.button,
                          type: "submit",
                          disabled: A || _,
                          submitting: A,
                          color: r.ButtonColors.RED,
                          size: r.Button.Sizes.SMALL,
                          children:
                            E.default.Messages.FAMILY_CENTER_CANCEL_REQUEST,
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
//# sourceMappingURL=26f0d3f1e8dc66aa814d.js.map
