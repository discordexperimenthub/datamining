(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73879"],
  {
    197509: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createCreatorMonetizationEnableRequest: function () {
            return l;
          },
          getCreatorMonetizationEligibility: function () {
            return u;
          },
          acceptCreatorMonetizationTerms: function () {
            return c;
          },
          acceptCreatorMonetizationTermsV2: function () {
            return d;
          },
          getCreatorMonetizationOnboardingMarketing: function () {
            return T;
          },
          fetchCreatorMonetizationNagActivateEligibility: function () {
            return E;
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
            return f;
          },
        });
      var a = n("872717"),
        i = n("913144"),
        o = n("651057"),
        r = n("49111"),
        s = n("988268");
      async function l(t) {
        await a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        });
      }
      async function u(t) {
        let e = await a.default.get({
          url: r.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(t),
        });
        return e.body;
      }
      async function c(t, e) {
        await a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(t, e),
        });
      }
      async function d(t) {
        await a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        });
      }
      async function T(t) {
        let e = await a.default.get({
          url: r.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
        });
        return e.body;
      }
      async function E(t) {
        try {
          let e = await a.default.get({
            url: r.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: t },
          });
          i.default.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: e.body.eligible_guilds,
          });
        } catch (t) {}
      }
      async function _(t, e) {
        let n = await a.default.post({
            url: r.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: e },
          }),
          o = n.body;
        return (
          null != o.application &&
            i.default.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: o.application,
            }),
          o
        );
      }
      function C(t) {
        return a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        });
      }
      function R(t) {
        return a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        });
      }
      async function O(t) {
        await a.default.post({
          url: r.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
          body: {},
        });
      }
      async function f(t) {
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
      var a = n("701909"),
        i = n("49111"),
        o = n("782340");
      function r() {
        return o.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format(
          {
            fullTermsUrl: a.default.getArticleURL(
              i.HelpdeskArticles.CREATOR_TERMS
            ),
            creatorRevenuePolicyUrl: a.default.getArticleURL(
              i.HelpdeskArticles.CREATOR_POLICY
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
            return T;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        o = n("77078"),
        r = n("197509"),
        s = n("782914"),
        l = n("191814"),
        u = n("423487"),
        c = n("782340"),
        d = n("851080");
      function T(t) {
        let { guildId: e, transitionState: n, onClose: T } = t,
          [E, _] = i.useState(!1),
          [C, R] = i.useState(!1),
          O = async () => {
            _(!0);
            try {
              await (0, r.acceptCreatorMonetizationTermsV2)(e), T();
            } finally {
              _(!1);
            }
          },
          f = c.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
        return (0, a.jsxs)(o.ModalRoot, {
          className: d.container,
          size: o.ModalSize.DYNAMIC,
          transitionState: n,
          "aria-label": f,
          children: [
            (0, a.jsxs)(o.ModalContent, {
              className: d.content,
              children: [
                (0, a.jsxs)("div", {
                  className: d.header,
                  children: [
                    (0, a.jsx)(u.default, {
                      width: 20,
                      height: 20,
                      className: d.warningIcon,
                    }),
                    (0, a.jsx)(l.default, { size: 8, horizontal: !0 }),
                    (0, a.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: f,
                    }),
                  ],
                }),
                (0, a.jsx)(l.default, { size: 12 }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: d.body,
                  children:
                    c.default.Messages
                      .GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY,
                }),
                (0, a.jsx)(l.default, { size: 28 }),
                (0, a.jsx)(o.Checkbox, {
                  onChange: () => {
                    R(t => !t);
                  },
                  size: 20,
                  type: o.Checkbox.Types.INVERTED,
                  value: C,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0,
                    s.getCreatorMonetizationAcceptTermsCheckboxText)(),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              children: [
                (0, a.jsx)(o.Button, {
                  color: o.Button.Colors.BRAND,
                  disabled: !C,
                  onClick: O,
                  submitting: E,
                  children: c.default.Messages.CONFIRM,
                }),
                (0, a.jsx)(l.default, { size: 12, horizontal: !0 }),
                (0, a.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.OUTLINED,
                  onClick: T,
                  children: c.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=680ac9ca3e35a382d556.js.map
