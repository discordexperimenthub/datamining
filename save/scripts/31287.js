(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31287"],
  {
    134855: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return N;
          },
        }),
        t("222007");
      var a = t("37983"),
        l = t("884691"),
        o = t("627445"),
        n = t.n(o),
        r = t("77078"),
        d = t("83900"),
        i = t("158998"),
        c = t("648750"),
        u = t("775032"),
        C = t("863972"),
        m = t("328911"),
        _ = t("884706"),
        E = t("782340"),
        L = t("999339"),
        N = e => {
          let {
              currentUser: s,
              otherUser: t,
              transitionState: o,
              onClose: N,
            } = e,
            A = l.useCallback(() => {
              N();
            }, [N]),
            M = (0, u.default)(),
            [h, x] = l.useState(!1),
            f = l.useCallback(() => {
              x(!0);
            }, []),
            { acceptLinkRequest: T, isAcceptLoading: I } = (0,
            c.useFamilyCenterActions)({ onError: f, onSuccess: A });
          return (
            n(
              !M,
              "FamilyCenterAcceptLinkModal should only be rendered for teens."
            ),
            (0, a.jsxs)(r.ModalRoot, {
              transitionState: o,
              "aria-label":
                E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
              className: L.root,
              children: [
                h
                  ? (0, a.jsx)(r.FormErrorBlock, {
                      className: L.error,
                      children:
                        E.default.Messages
                          .FAMILY_CENTER_ACCEPT_LINK_MODAL_ERROR,
                    })
                  : null,
                (0, a.jsxs)(r.ModalContent, {
                  className: L.modalContent,
                  children: [
                    (0, a.jsxs)("div", {
                      className: L.header,
                      children: [
                        (0, a.jsx)(C.default, {
                          currentUser: s,
                          otherUser: t,
                          children: (0, a.jsx)(d.default, {
                            className: L.linkIcon,
                          }),
                        }),
                        (0, a.jsx)(r.Heading, {
                          className: L.headerText,
                          variant: "text-lg/bold",
                          children:
                            E.default.Messages
                              .FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
                        }),
                        (0, a.jsx)(_.default, { user: t, fill: !0 }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: L.content,
                      children: [
                        (0, a.jsx)(m.default, { inModal: !0 }),
                        (0, a.jsx)(r.Text, {
                          className: L.disclaimer,
                          variant: "text-xs/normal",
                          color: "text-normal",
                          children:
                            E.default.Messages.FAMILY_CENTER_ACCEPT_LINK_ACTIVITY_DISCLAIMER.format(
                              { username: i.default.getName(t) }
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(r.ModalFooter, {
                  children: (0, a.jsx)("form", {
                    onSubmit: e => {
                      e.preventDefault(), T(t);
                    },
                    children: (0, a.jsxs)("div", {
                      className: L.footer,
                      children: [
                        (0, a.jsx)(r.Button, {
                          className: L.button,
                          type: "button",
                          disabled: I,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: N,
                          size: r.Button.Sizes.SMALL,
                          children: E.default.Messages.CANCEL,
                        }),
                        (0, a.jsx)(r.Button, {
                          className: L.button,
                          type: "submit",
                          disabled: I,
                          submitting: I,
                          color: r.ButtonColors.BRAND,
                          size: r.Button.Sizes.SMALL,
                          children:
                            E.default.Messages.FAMILY_CENTER_ACCEPT_REQUEST,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=955096ea321c4bb8be39.js.map
