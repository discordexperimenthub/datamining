(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45966"],
  {
    795262: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TeamSetup: function () {
            return N;
          },
          default: function () {
            return u;
          },
        }),
        t("222007");
      var s = t("37983"),
        n = t("884691"),
        l = t("77078"),
        r = t("545158"),
        d = t("197509"),
        o = t("782914"),
        c = t("719887"),
        _ = t("476765"),
        i = t("49111"),
        O = t("810367"),
        E = t("782340"),
        T = t("491445");
      function N(e) {
        let { selectedTeamId: a, onSetSelectedTeamId: t, teamOptions: n } = e;
        return (0, s.jsx)("div", {
          className: T.teamSetup,
          children:
            0 === n.length
              ? (0, s.jsx)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    E.default.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_NO_TEAM_BODY.format(),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.Text, {
                      variant: "text-md/normal",
                      className: T.teamBodyText,
                      color: "header-secondary",
                      children:
                        E.default.Messages
                          .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_CHOOSE_TEAM_BODY,
                    }),
                    (0, s.jsx)(l.SingleSelect, {
                      options: n,
                      placeholder:
                        E.default.Messages
                          .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                      value: a,
                      onChange: t,
                      "aria-label":
                        E.default.Messages
                          .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                    }),
                  ],
                }),
        });
      }
      function u(e) {
        let {
            guildId: a,
            requireTeamSetup: t,
            onClose: u,
            transitionState: A,
          } = e,
          M = (0, _.useUID)(),
          [h, I] = n.useState(),
          [x, R] = n.useState(!1),
          { teams: C } = (0, c.default)(),
          m = C.filter(
            e => e.payout_account_status === O.PayoutAccountStatuses.ACTIVE
          ),
          L = n.useMemo(
            () => m.map(e => ({ label: e.name, value: e.id })),
            [m]
          ),
          f = n.useCallback(() => {
            (0, r.default)(i.MarketingURLs.DEVELOPER_PORTAL_TEAMS);
          }, []);
        return (0, s.jsxs)(l.ModalRoot, {
          "aria-labelledby": M,
          size: l.ModalSize.DYNAMIC,
          transitionState: A,
          children: [
            (0, s.jsx)(l.ModalHeader, {
              separator: !1,
              className: T.header,
              children: (0, s.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: t
                  ? E.default.Messages
                      .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE
                  : E.default.Messages
                      .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE_ACCEPT_TERM_ONLY,
              }),
            }),
            (0, s.jsxs)(l.ModalContent, {
              className: T.content,
              children: [
                t &&
                  (0, s.jsx)(N, {
                    selectedTeamId: h,
                    onSetSelectedTeamId: I,
                    teamOptions: L,
                  }),
                (0, s.jsx)(l.Checkbox, {
                  onChange: () => {
                    R(e => !e);
                  },
                  size: 20,
                  type: l.Checkbox.Types.INVERTED,
                  value: x,
                  children: (0, s.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0,
                    o.getCreatorMonetizationAcceptTermsCheckboxText)(),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(l.ModalFooter, {
              className: T.footer,
              children: (0, s.jsx)("div", {
                className: T.buttons,
                children:
                  t && 0 === L.length
                    ? (0, s.jsx)(l.Button, {
                        onClick: f,
                        children:
                          E.default.Messages
                            .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_SETUP_TEAM_CTA,
                      })
                    : (0, s.jsx)(l.Button, {
                        disabled: !x || (t && null == h),
                        onClick: () => {
                          u(), (0, d.ownershipTransferOnboard)(a, h);
                        },
                        children: E.default.Messages.SUBMIT,
                      }),
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=107974ba2b7308bb2bfa.js.map
