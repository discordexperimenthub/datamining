(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54344"],
  {
    996220: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var l = s("37983"),
        t = s("884691"),
        _ = s("627445"),
        E = s.n(_),
        T = s("77078"),
        n = s("162426"),
        d = s("651057"),
        i = s("719887"),
        o = s("191814"),
        I = s("476765"),
        u = s("423487"),
        S = s("810367"),
        N = s("782340"),
        r = s("161296");
      function c(e) {
        var a, s;
        let { transitionState: _, application: c, onClose: M } = e,
          A = (0, I.useUID)(),
          [L, O] = t.useState(
            null == c
              ? void 0
              : null === (a = c.team) || void 0 === a
                ? void 0
                : a.id
          ),
          { teams: C } = (0, i.default)(),
          m = t.useMemo(
            () =>
              C.filter(
                e => e.payout_account_status === S.PayoutAccountStatuses.ACTIVE
              ).map(e => ({ label: e.name, value: e.id })),
            [C]
          ),
          R =
            (null == c
              ? void 0
              : null === (s = c.team) || void 0 === s
                ? void 0
                : s.id) !== L,
          [g, { loading: f, error: h }] = (0, n.default)(
            d.default.transferApplication
          ),
          x = async () => {
            E(null != c, "no application"), E(null != L, "no team selected");
            let e = await g({ applicationId: c.id, teamId: L });
            null != e && M();
          },
          D = (null == c ? void 0 : c.team) != null;
        return (0, l.jsxs)(T.ModalRoot, {
          transitionState: _,
          "aria-labelledby": A,
          children: [
            (0, l.jsxs)(T.ModalHeader, {
              children: [
                (0, l.jsx)(T.Heading, {
                  id: A,
                  variant: "heading-md/semibold",
                  children: D
                    ? N.default.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE
                    : N.default.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE,
                }),
                (0, l.jsx)(T.ModalCloseButton, {
                  className: r.closeButton,
                  onClick: M,
                }),
              ],
            }),
            (0, l.jsxs)(T.ModalContent, {
              className: r.content,
              children: [
                D
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(T.FormText, {
                          children:
                            N.default.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION,
                        }),
                        (0, l.jsx)(o.default, { size: 8 }),
                        (0, l.jsxs)(T.Heading, {
                          className: r.warningHeading,
                          variant: "text-sm/semibold",
                          color: "text-danger",
                          children: [
                            (0, l.jsx)(u.default, {
                              width: 16,
                              height: 16,
                              className: r.warningIcon,
                            }),
                            N.default.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING,
                          ],
                        }),
                        (0, l.jsx)(o.default, { size: 4 }),
                        (0, l.jsx)(T.FormText, {
                          type: T.FormText.Types.ERROR,
                          children:
                            N.default.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING,
                        }),
                      ],
                    })
                  : (0, l.jsx)(T.FormText, {
                      children:
                        N.default.Messages
                          .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION,
                    }),
                null != h
                  ? (0, l.jsx)(T.FormErrorBlock, { children: h.message })
                  : null,
                (0, l.jsx)(o.default, { size: 16 }),
                (0, l.jsx)(T.FormItem, {
                  title: D
                    ? N.default.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL
                    : N.default.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
                  required: !0,
                  children: (0, l.jsx)(T.SingleSelect, {
                    className: r.teamSelect,
                    options: m,
                    placeholder:
                      N.default.Messages
                        .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                    value: L,
                    isDisabled: 0 === m.length,
                    onChange: e => O(e),
                    "aria-label":
                      N.default.Messages
                        .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(T.ModalFooter, {
              className: r.footer,
              children: (0, l.jsx)(T.Button, {
                color: T.Button.Colors.RED,
                className: r.goBackButton,
                submitting: f,
                disabled: !R,
                onClick: x,
                children: N.default.Messages.SAVE,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=95b013fd51c4e7e901b7.js.map
