(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68309"],
  {
    265397: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return E;
          },
        });
      var a = s("37983"),
        n = s("884691"),
        l = s("77078"),
        o = s("592407"),
        r = s("393414"),
        i = s("476765"),
        c = s("115244"),
        u = s("49111"),
        d = s("724210"),
        I = s("782340"),
        T = s("346093"),
        E = function (t) {
          let {
              guildId: e,
              submittedGuildJoinRequestsCount: s,
              onClose: E,
              transitionState: x,
              onConfirm: N,
            } = t,
            _ = (0, i.useUID)(),
            {
              submitting: C,
              errorMessage: M,
              onSubmit: h,
            } = (0, c.default)({ onSubmit: N, onClose: E }),
            m = n.useCallback(() => {
              E(),
                o.default.close(),
                (0, r.transitionTo)(
                  u.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_APPLICATIONS)
                );
            }, [e, E]);
          return (0, a.jsxs)(l.ModalRoot, {
            className: T.container,
            transitionState: x,
            "aria-labelledby": _,
            children: [
              (0, a.jsxs)(l.ModalContent, {
                className: T.content,
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    id: _,
                    children:
                      I.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_TITLE.format(
                        { count: s }
                      ),
                  }),
                  (0, a.jsx)(l.Text, {
                    className: T.descriptionText,
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                      I.default.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_DESCRIPTIONG,
                  }),
                  (0, a.jsx)(l.Clickable, {
                    className: T.actionText,
                    onClick: m,
                    children: (0, a.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "text-link",
                      children:
                        I.default.Messages
                          .GUILD_SETTINGS_MEMBER_VERIFICATION_APPLICATIONS_TITLE,
                    }),
                  }),
                  null != M &&
                    (0, a.jsx)(l.Text, {
                      className: T.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: M,
                    }),
                ],
              }),
              (0, a.jsxs)(l.ModalFooter, {
                children: [
                  (0, a.jsx)(l.Button, {
                    className: T.actionButton,
                    color: l.Button.Colors.BRAND,
                    submitting: C,
                    onClick: h,
                    size: l.Button.Sizes.SMALL,
                    children: (0, a.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children:
                        I.default.Messages
                          .GUILD_SETTINGS_MEMBER_VERIFICATION_CONTINUE_EDITING,
                    }),
                  }),
                  (0, a.jsx)(l.Button, {
                    color: l.Button.Colors.PRIMARY,
                    onClick: E,
                    size: l.Button.Sizes.SMALL,
                    children: (0, a.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: I.default.Messages.CANCEL,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    115244: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return l;
          },
        }),
        s("222007");
      var a = s("884691"),
        n = s("448993");
      function l(t) {
        let { onSubmit: e, onClose: s } = t,
          [l, o] = a.useState(!1),
          [r, i] = a.useState(null),
          c = a.useCallback(async () => {
            if (!l) {
              o(!0), i(null);
              try {
                await e(), s();
              } catch (e) {
                let t = new n.APIError(e);
                i(t.getAnyErrorMessage()), o(!1);
              }
            }
          }, [s, e, l]);
        return { submitting: l, errorMessage: r, onSubmit: c };
      }
    },
  },
]);
//# sourceMappingURL=0007b0a547bbe65487e2.js.map
