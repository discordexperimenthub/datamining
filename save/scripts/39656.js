(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39656"],
  {
    86290: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var l = i("446674"),
        s = i("760190"),
        u = i("957255"),
        a = i("808388"),
        n = i("49111"),
        d = i("782340"),
        r = {
          title: () => d.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
          description: () =>
            d.default.Messages
              .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
          canCreateGuild: !1,
          useIsGuildSupported: () =>
            (0, l.useStateFromStores)(
              [s.default, u.default],
              () => e =>
                e.hasFeature(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                !e.hasFeature(n.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                u.default.can(n.Permissions.ADMINISTRATOR, e) &&
                (0, a.isUserEligibleForTierTemplates)() &&
                (0, a.isGuildEligibleForTierTemplates)(e.id),
              []
            ),
        };
    },
    129428: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var l = i("446674"),
        s = i("889293"),
        u = i("782340"),
        a = {
          title: () => u.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          description: () =>
            u.default.Messages
              .GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
          canCreateGuild: !1,
          useIsGuildSupported: () =>
            (0, l.useStateFromStores)(
              [s.default],
              () => e =>
                s.default.getEligibleGuildsForNagActivate().includes(e.id),
              []
            ),
        };
    },
    565797: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var l = i("446674"),
        s = i("7331"),
        u = i("736271"),
        a = i("760190"),
        n = i("808388"),
        d = i("65722"),
        r = i("782340"),
        o = {
          title: () => r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          description: () =>
            r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
          canCreateGuild: !1,
          useIsGuildSupported: () =>
            (0, l.useStateFromStores)(
              [a.default],
              () => (e, t) =>
                e.isOwner(t) &&
                (0, d.canSeeGuildRoleSubscriptionSettings)({
                  guild: e,
                  isOwner: !0,
                  canManageGuildRoleSubscriptions: !0,
                  isMonetizationWaitlistEnabledForGuild: (0,
                  s.isMonetizationWaitlistEnabledForGuild)(e.id),
                  isGuildEligibleForRoleSubscriptions: (0,
                  n.isGuildEligibleForRoleSubscriptions)(e.id),
                  isExpeditedMonetizationOnboardingGuild: (0,
                  s.isExpeditedMonetizationOnboardingGuild)(e),
                  isUserInCreatorMonetizationEligibleCountry: (0,
                  s.isUserInCreatorMonetizationEligibleCountry)(),
                  shouldRestrictUpdatingRoleSubscriptionSettings: (0,
                  u.shouldRestrictUpdatingCreatorMonetizationSettings)(e.id),
                }),
              [],
              l.statesWillNeverBeEqual
            ),
        };
    },
    369123: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useGuildSettingsPickerFeature: function () {
            return S;
          },
        }),
        i("222007");
      var l = i("884691"),
        s = i("446674"),
        u = i("86290"),
        a = i("129428"),
        n = i("565797"),
        d = i("957255"),
        r = i("782340");
      let o = {
          "server-subscriptions-onboarding": n.default,
          "server-subscriptions-finish-setting-up": a.default,
          "server-subscriptions-create-tier-from-template": u.default,
        },
        c = {
          title: () => r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_TITLE,
          description: () =>
            r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_DESCRIPTION,
          selectGuildCta: () => r.default.Messages.GET_STARTED,
          createGuildDescription: () =>
            r.default.Messages.GUILD_SETTINGS_PICKER_DEFAULT_CREATE_DESCRIPTION,
          createGuildCta: () => r.default.Messages.CREATE_SERVER_BUTTON_CTA,
          canCreateGuild: !0,
          useIsGuildSupported: () =>
            (0, s.useStateFromStores)(
              [d.default],
              () => e => d.default.canAccessGuildSettings(e),
              [],
              s.statesWillNeverBeEqual
            ),
        };
      function S(e) {
        var t;
        let [i] = l.useState(null == e ? void 0 : o[e]),
          s = c.useIsGuildSupported(),
          u =
            null == i
              ? void 0
              : null === (t = i.useIsGuildSupported) || void 0 === t
                ? void 0
                : t.call(i),
          a = { ...c, ...(null != i ? i : {}) };
        return {
          title: a.title(),
          description: a.description(),
          selectGuildCta: a.selectGuildCta(),
          createGuildDescription: a.createGuildDescription(),
          createGuildCta: a.createGuildCta(),
          canCreateGuild: a.canCreateGuild,
          isGuildSupported: (e, t) =>
            s(e, t) && (null == u ? void 0 : u(e, t)) !== !1,
        };
      }
    },
    941489: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var l = i("884691"),
        s = i("627445"),
        u = i.n(s),
        a = i("446674"),
        n = i("305961"),
        d = i("677099"),
        r = i("697218");
      function o(e) {
        let { isGuildIncluded: t, selectedGuildId: i } = e,
          s = (0, a.useStateFromStores)([d.default], () =>
            d.default.getFlattenedGuildIds()
          ),
          o = (0, a.useStateFromStores)([n.default], () =>
            n.default.getGuilds()
          ),
          c = (0, a.useStateFromStores)([r.default], () =>
            r.default.getCurrentUser()
          ),
          S = l.useMemo(() => {
            if (null == c) return [];
            let e =
              null == t
                ? s
                : s.filter(e => {
                    let i = o[e];
                    return u(null != i, "guild should not be null"), t(i, c);
                  });
            return e.map(e => {
              let t = o[e];
              return (
                u(null != t, "guild should not be null"),
                { label: t.name, value: t.id }
              );
            });
          }, [s, o, c, t]);
        return { options: S, selectedGuild: null == i ? void 0 : o[i] };
      }
    },
    945216: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return C;
          },
        }),
        i("222007");
      var l = i("37983"),
        s = i("884691"),
        u = i("627445"),
        a = i.n(u),
        n = i("77078"),
        d = i("616265"),
        r = i("592407"),
        o = i("305961"),
        c = i("191814"),
        S = i("476765"),
        I = i("369123"),
        f = i("941489"),
        E = i("782340"),
        G = i("440561");
      function T(e) {
        let { className: t, guildId: i, onChange: s, isGuildIncluded: u } = e,
          { options: a } = (0, f.default)({ isGuildIncluded: u });
        return (0, l.jsx)(n.SearchableSelect, {
          className: t,
          onChange: s,
          value: i,
          options: a,
          placeholder: E.default.Messages.GUILD_SELECT,
        });
      }
      function C(e) {
        let {
            transitionState: t,
            onClose: i,
            feature: u,
            section: f,
            subsection: E,
          } = e,
          C = (0, S.useUID)(),
          {
            canCreateGuild: p,
            createGuildCta: g,
            createGuildDescription: _,
            selectGuildCta: R,
            title: m,
            description: L,
            isGuildSupported: N,
          } = (0, I.useGuildSettingsPickerFeature)(u),
          [b, M] = s.useState(),
          [O, h] = s.useState(!1),
          v = async () => {
            var e;
            h(!0);
            let t = await new Promise(e => {
              d.default.openCreateGuildModal({ onSuccess: e });
            });
            await ((e = t),
            new Promise(t => {
              o.default.addChangeListener(function i() {
                null != o.default.getGuild(e) &&
                  (o.default.removeChangeListener(i), t());
              });
            })),
              r.default.open(t, f, void 0, E),
              null == i || i();
          };
        return (0, l.jsxs)(n.ModalRoot, {
          transitionState: t,
          "aria-labelledby": C,
          children: [
            (0, l.jsxs)(n.ModalHeader, {
              className: G.modalHeader,
              separator: !1,
              children: [
                (0, l.jsx)(n.Heading, {
                  id: C,
                  variant: "heading-lg/medium",
                  children: m,
                }),
                (0, l.jsx)(n.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, l.jsxs)(n.ModalContent, {
              className: G.modalContent,
              children: [
                (0, l.jsx)(n.Text, { variant: "text-md/medium", children: L }),
                (0, l.jsx)(c.default, { size: 16 }),
                (0, l.jsxs)("div", {
                  className: G.guildSelection,
                  children: [
                    (0, l.jsx)("div", {
                      className: G.guildSelectorContainer,
                      children: (0, l.jsx)(T, {
                        guildId: b,
                        onChange: M,
                        isGuildIncluded: N,
                      }),
                    }),
                    (0, l.jsx)(n.Button, {
                      onClick: () => {
                        a(null != b, "Guild ID must not be null on click"),
                          r.default.open(b, f, void 0, E),
                          null == i || i();
                      },
                      disabled: null == b,
                      children: R,
                    }),
                  ],
                }),
                p &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(c.default, { size: 32 }),
                      (0, l.jsx)(n.Text, {
                        variant: "text-md/medium",
                        children: _,
                      }),
                      (0, l.jsx)(c.default, { size: 8 }),
                      (0, l.jsx)(n.Button, {
                        onClick: v,
                        submitting: O,
                        children: g,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=7641aadca6681a6a97a6.js.map
