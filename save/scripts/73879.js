(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73879"],
  {
    197509: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createCreatorMonetizationEnableRequest: function () {
            return T;
          },
          getCreatorMonetizationEligibility: function () {
            return c;
          },
          acceptCreatorMonetizationTerms: function () {
            return l;
          },
          acceptCreatorMonetizationTermsV2: function () {
            return u;
          },
          getCreatorMonetizationOnboardingMarketing: function () {
            return E;
          },
          fetchCreatorMonetizationNagActivateEligibility: function () {
            return d;
          },
          ownershipTransferOnboard: function () {
            return _;
          },
          acceptNewTerms: function () {
            return C;
          },
          acceptNewTermsDemonetized: function () {
            return R;
          },
          removeMonetization: function () {
            return A;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        o = n("651057"),
        r = n("49111"),
        s = n("988268");
      async function T(t) {
        await i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        });
      }
      async function c(t) {
        let e = await i.HTTP.get({
          url: r.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(t),
        });
        return e.body;
      }
      async function l(t, e) {
        await i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(t, e),
        });
      }
      async function u(t) {
        await i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        });
      }
      async function E(t) {
        let e = await i.HTTP.get({
          url: r.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
        });
        return e.body;
      }
      async function d(t) {
        try {
          let e = await i.HTTP.get({
            url: r.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: t },
          });
          a.default.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: e.body.eligible_guilds,
          });
        } catch (t) {}
      }
      async function _(t, e) {
        let n = await i.HTTP.post({
            url: r.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: e },
          }),
          o = n.body;
        return (
          null != o.application &&
            a.default.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: o.application,
            }),
          o
        );
      }
      function C(t) {
        return i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        });
      }
      function R(t) {
        return i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        });
      }
      async function O(t) {
        await i.HTTP.post({
          url: r.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
          body: {},
        });
      }
      async function A(t) {
        return (
          await O(t),
          await o.default.getApplicationsForGuild(t, {
            type: s.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    782914: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getCreatorMonetizationAcceptTermsCheckboxText: function () {
            return r;
          },
        });
      var i = n("701909"),
        a = n("49111"),
        o = n("782340");
      function r() {
        return o.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format(
          {
            fullTermsUrl: i.default.getArticleURL(
              a.HelpdeskArticles.CREATOR_TERMS
            ),
            creatorRevenuePolicyUrl: i.default.getArticleURL(
              a.HelpdeskArticles.CREATOR_POLICY
            ),
          }
        );
      }
    },
    300770: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        o = n("77078"),
        r = n("197509"),
        s = n("782914"),
        T = n("191814"),
        c = n("423487"),
        l = n("782340"),
        u = n("851080");
      function E(t) {
        let { guildId: e, transitionState: n, onClose: E } = t,
          [d, _] = a.useState(!1),
          [C, R] = a.useState(!1),
          O = async () => {
            _(!0);
            try {
              await (0, r.acceptCreatorMonetizationTermsV2)(e), E();
            } finally {
              _(!1);
            }
          },
          A = l.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
        return (0, i.jsxs)(o.ModalRoot, {
          className: u.container,
          size: o.ModalSize.DYNAMIC,
          transitionState: n,
          "aria-label": A,
          children: [
            (0, i.jsxs)(o.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsxs)("div", {
                  className: u.header,
                  children: [
                    (0, i.jsx)(c.default, {
                      width: 20,
                      height: 20,
                      className: u.warningIcon,
                    }),
                    (0, i.jsx)(T.default, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: A,
                    }),
                  ],
                }),
                (0, i.jsx)(T.default, { size: 12 }),
                (0, i.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: u.body,
                  children:
                    l.default.Messages
                      .GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY,
                }),
                (0, i.jsx)(T.default, { size: 28 }),
                (0, i.jsx)(o.Checkbox, {
                  onChange: () => {
                    R(t => !t);
                  },
                  size: 20,
                  type: o.Checkbox.Types.INVERTED,
                  value: C,
                  children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0,
                    s.getCreatorMonetizationAcceptTermsCheckboxText)(),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(o.ModalFooter, {
              children: [
                (0, i.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: !C,
                  onClick: O,
                  submitting: d,
                  children: l.default.Messages.CONFIRM,
                }),
                (0, i.jsx)(T.default, { size: 12, horizontal: !0 }),
                (0, i.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.OUTLINED,
                  onClick: E,
                  children: l.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=8321fca12949a557fdda.js.map
