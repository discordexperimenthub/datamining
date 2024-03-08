(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25905"],
  {
    331761: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("77078"),
        r = a("476765"),
        o = a("115244"),
        l = a("782340"),
        i = a("346093"),
        c = function (e) {
          let { onClose: t, transitionState: a, onSubmit: c } = e,
            {
              submitting: u,
              errorMessage: d,
              onSubmit: I,
            } = (0, o.default)({ onSubmit: c, onClose: t }),
            N = (0, r.useUID)();
          return (0, s.jsxs)(n.ModalRoot, {
            className: i.container,
            transitionState: a,
            "aria-labelledby": N,
            children: [
              (0, s.jsxs)(n.ModalContent, {
                className: i.content,
                children: [
                  (0, s.jsx)(n.Heading, {
                    variant: "heading-md/semibold",
                    id: N,
                    children:
                      l.default.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_TITLE,
                  }),
                  (0, s.jsx)(n.Text, {
                    className: i.manualApprovalDescriptionText,
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                      l.default.Messages
                        .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_DESCRIPTION,
                  }),
                  (0, s.jsx)(n.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                      l.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_EXPLANATION.format(),
                  }),
                  null != d &&
                    (0, s.jsx)(n.Text, {
                      className: i.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: d,
                    }),
                ],
              }),
              (0, s.jsxs)(n.ModalFooter, {
                children: [
                  (0, s.jsx)(n.Button, {
                    className: i.actionButton,
                    color: n.Button.Colors.BRAND,
                    submitting: u,
                    onClick: I,
                    size: n.Button.Sizes.SMALL,
                    children: (0, s.jsx)(n.Text, {
                      variant: "text-sm/semibold",
                      children: l.default.Messages.CONFIRM,
                    }),
                  }),
                  (0, s.jsx)(n.Button, {
                    color: n.Button.Colors.PRIMARY,
                    onClick: t,
                    size: n.Button.Sizes.SMALL,
                    children: (0, s.jsx)(n.Text, {
                      variant: "text-sm/semibold",
                      children: l.default.Messages.CANCEL,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    115244: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        }),
        a("222007");
      var s = a("884691"),
        n = a("448993");
      function r(e) {
        let { onSubmit: t, onClose: a } = e,
          [r, o] = s.useState(!1),
          [l, i] = s.useState(null),
          c = s.useCallback(async () => {
            if (!r) {
              o(!0), i(null);
              try {
                await t(), a();
              } catch (t) {
                let e = new n.APIError(t);
                i(e.getAnyErrorMessage()), o(!1);
              }
            }
          }, [a, t, r]);
        return { submitting: r, errorMessage: l, onSubmit: c };
      }
    },
  },
]);
//# sourceMappingURL=d5913542a0b3169f9188.js.map
