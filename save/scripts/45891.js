(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45891"],
  {
    349406: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        }),
        s("222007");
      var i = s("37983"),
        n = s("884691"),
        a = s("77078"),
        d = s("916650"),
        u = s("845579"),
        l = s("701909"),
        r = s("241088"),
        c = s("49111"),
        S = s("782340"),
        o = s("168245");
      function E(e) {
        let {
            isGuildRestricted: t,
            handleRestrictedGuildChange: s,
            isGuildActivityRestricted: n,
            handleActivityRestrictedGuildChange: u,
            isGuildActivityJoiningRestricted: r,
            handleActivityJoiningRestrictedGuildChange: E,
            isGuildMessageRequestRestricted: T,
            handleMessageRequestRestrictedGuildChange: I,
            guild: _,
            transitionState: N,
            onClose: R,
          } = e,
          g = (0, d.default)(),
          A = ""
            .concat(S.default.Messages.PRIVACY_SETTINGS, "—")
            .concat(null != _ ? _.toString() : "??"),
          f = _.hasFeature(c.GuildFeatures.HUB);
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: N,
          size: a.ModalSize.SMALL,
          "aria-label": A,
          children: [
            (0, i.jsx)(a.ModalHeader, {
              children: (0, i.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: A,
              }),
            }),
            (0, i.jsxs)(a.ModalContent, {
              className: o.content,
              children: [
                (0, i.jsx)(a.FormItem, {
                  children: (0, i.jsx)(a.FormSwitch, {
                    value: !t,
                    note: f
                      ? S.default.Messages
                          .PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB
                      : S.default.Messages
                          .PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
                    onChange: s,
                    hideBorder: !0,
                    children:
                      S.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES,
                  }),
                }),
                (0, i.jsx)(a.FormDivider, { className: o.divider }),
                !g &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(a.FormItem, {
                        children: (0, i.jsx)(a.FormSwitch, {
                          value: !T,
                          note: f
                            ? S.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format(
                                {
                                  helpdeskArticle: l.default.getArticleURL(
                                    c.HelpdeskArticles.MESSAGE_REQUESTS
                                  ),
                                }
                              )
                            : S.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format(
                                {
                                  helpdeskArticle: l.default.getArticleURL(
                                    c.HelpdeskArticles.MESSAGE_REQUESTS
                                  ),
                                }
                              ),
                          onChange: I,
                          disabled: t,
                          hideBorder: !0,
                          children:
                            S.default.Messages
                              .PRIVACY_SETTINGS_MESSAGE_REQUESTS,
                        }),
                      }),
                      (0, i.jsx)(a.FormDivider, { className: o.divider }),
                    ],
                  }),
                (0, i.jsx)(a.FormItem, {
                  children: (0, i.jsx)(a.FormSwitch, {
                    value: !n,
                    onChange: u,
                    hideBorder: !0,
                    note: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format(
                      {
                        helpdeskArticle: l.default.getArticleURL(
                          c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS
                        ),
                      }
                    ),
                    children:
                      S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS,
                  }),
                }),
                (0, i.jsx)(a.FormDivider, { className: o.divider }),
                (0, i.jsx)(a.FormItem, {
                  children: (0, i.jsx)(a.FormSwitch, {
                    value: !r,
                    onChange: E,
                    hideBorder: !0,
                    note: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format(
                      {
                        helpdeskArticle: l.default.getArticleURL(
                          c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS
                        ),
                      }
                    ),
                    children:
                      S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING,
                  }),
                }),
                (0, i.jsxs)(a.FormItem, {
                  className: o.disclaimer,
                  children: [
                    (0, i.jsx)(a.FormDivider, { className: o.divider }),
                    (0, i.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children:
                        S.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format(
                          {
                            policyLink:
                              "https://discord.com/safety/360043709612-our-policies",
                          }
                        ),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(a.ModalFooter, {
              children: (0, i.jsx)(a.Button, {
                onClick: () => R(),
                children: S.default.Messages.DONE,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { guild: t, transitionState: s, onClose: a } = e,
          d = t.id,
          l = u.RestrictedGuildIds.useSetting().includes(d),
          c = u.MessageRequestRestrictedGuildIds.useSetting().includes(d),
          S = u.ActivityRestrictedGuilds.useSetting().includes(d),
          o = u.ActivityJoiningRestrictedGuilds.useSetting().includes(d),
          T = n.useCallback(
            e => {
              let t = new Set((0, r.getSanitizedRestrictedGuilds)());
              e ? t.delete(d) : t.add(d),
                u.RestrictedGuildIds.updateSetting(Array.from(t));
            },
            [d]
          ),
          I = n.useCallback(
            e => {
              let t = new Set((0, r.getSanitizedActivityRestrictedGuilds)());
              e ? t.delete(d) : t.add(d),
                u.ActivityRestrictedGuilds.updateSetting([...t]);
            },
            [d]
          ),
          _ = n.useCallback(
            e => {
              let t = new Set(
                (0, r.getSanitizedActivityJoiningRestrictedGuilds)()
              );
              e ? t.delete(d) : t.add(d),
                u.ActivityJoiningRestrictedGuilds.updateSetting([...t]);
            },
            [d]
          ),
          N = n.useCallback(
            e => {
              let t = new Set(
                (0, r.getSanitizedMessageRequestRestrictedGuilds)()
              );
              e ? t.delete(d) : t.add(d),
                u.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t));
            },
            [d]
          );
        return (0, i.jsx)(E, {
          isGuildRestricted: l,
          handleRestrictedGuildChange: T,
          isGuildActivityRestricted: S,
          handleActivityRestrictedGuildChange: I,
          isGuildActivityJoiningRestricted: o,
          handleActivityJoiningRestrictedGuildChange: _,
          isGuildMessageRequestRestricted: c,
          handleMessageRequestRestrictedGuildChange: N,
          guild: t,
          transitionState: s,
          onClose: a,
        });
      }
    },
    16108: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          acceptMessageRequest: function () {
            return l;
          },
          clearMessageRequestState: function () {
            return r;
          },
          markAsMessageRequest: function () {
            return c;
          },
          rejectMessageRequest: function () {
            return S;
          },
          rejectMessageRequestBatch: function () {
            return o;
          },
          fetchUserCountryCode: function () {
            return E;
          },
        });
      var i = s("872717"),
        n = s("913144"),
        a = s("437822"),
        d = s("773163"),
        u = s("49111");
      async function l(e) {
        await i.default.put({
          url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: d.MessageRequestConsentStatusTypes.ACCEPTED },
        }),
          n.default.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function r(e) {
        return i.default.put({
          url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: {
            consent_status: d.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function c(e) {
        return i.default.put({
          url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: d.MessageRequestConsentStatusTypes.PENDING },
        });
      }
      function S(e) {
        return i.default.delete({
          url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
        });
      }
      function o(e) {
        return i.default.put({
          url: u.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function E() {
        a.default.getLocationMetadata();
      }
    },
    773163: function (e, t, s) {
      "use strict";
      var i, n;
      s.r(t),
        s.d(t, {
          MessageRequestConsentStatusTypes: function () {
            return i;
          },
        }),
        ((n = i || (i = {}))[(n.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (n[(n.PENDING = 1)] = "PENDING"),
        (n[(n.ACCEPTED = 2)] = "ACCEPTED"),
        (n[(n.REJECTED = 3)] = "REJECTED");
    },
    916650: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        }),
        s("222007");
      var i = s("884691"),
        n = s("446674"),
        a = s("697218"),
        d = s("16108"),
        u = s("288518");
      let l = new Set(["GB"]);
      function r() {
        let e = (0, n.useStateFromStores)([u.default], () =>
            u.default.getUserCountryCode()
          ),
          t =
            !1 ===
            (0, n.useStateFromStores)([a.default], () => {
              var e;
              return null === (e = a.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.nsfwAllowed;
            });
        return (
          i.useEffect(() => {
            null == e && (0, d.fetchUserCountryCode)();
          }, [e]),
          (!!(null != e && l.has(e.alpha2)) && !!t) || !1
        );
      }
    },
    241088: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getSanitizedRestrictedGuilds: function () {
            return S;
          },
          getSanitizedMessageRequestRestrictedGuilds: function () {
            return o;
          },
          getSanitizedActivityRestrictedGuilds: function () {
            return E;
          },
          getSanitizedActivityJoiningRestrictedGuilds: function () {
            return T;
          },
          computeFlags: function () {
            return I;
          },
          harvestDisabled: function () {
            return _;
          },
          NonSpamRetrainingOptInOptions: function () {
            return n;
          },
          NonSpamRetrainingOptInOptionsToValue: function () {
            return N;
          },
          generateNonSpamRetrainingOptInSettingOptions: function () {
            return R;
          },
        });
      var i,
        n,
        a = s("845579"),
        d = s("341542"),
        u = s("305961");
      s("599110");
      var l = s("49111"),
        r = s("782340");
      let c = 864e5 * l.REQUEST_DATA_LIMIT_DAYS;
      function S() {
        let e = a.RestrictedGuildIds.getSetting();
        return (
          0 === d.default.totalUnavailableGuilds &&
            (e = e.filter(e => null != u.default.getGuild(e))),
          e
        );
      }
      function o() {
        let e = a.MessageRequestRestrictedGuildIds.getSetting();
        return (
          0 === d.default.totalUnavailableGuilds &&
            (e = e.filter(e => null != u.default.getGuild(e))),
          e
        );
      }
      function E() {
        let e = a.ActivityRestrictedGuilds.getSetting();
        return (
          0 === d.default.totalUnavailableGuilds &&
            (e = e.filter(e => null != u.default.getGuild(e))),
          e
        );
      }
      function T() {
        let e = a.ActivityJoiningRestrictedGuilds.getSetting();
        return (
          0 === d.default.totalUnavailableGuilds &&
            (e = e.filter(e => null != u.default.getGuild(e))),
          e
        );
      }
      function I(e) {
        return (e & l.AllFriendSourceFlags) === l.AllFriendSourceFlags
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & l.FriendSourceFlags.MUTUAL_FRIENDS) ===
                l.FriendSourceFlags.MUTUAL_FRIENDS,
              mutualGuilds:
                (e & l.FriendSourceFlags.MUTUAL_GUILDS) ===
                l.FriendSourceFlags.MUTUAL_GUILDS,
            };
      }
      function _(e, t) {
        return (
          !t.verified ||
          (null != e && c > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((i = n || (n = {}))[(i.UNDECIDED = 0)] = "UNDECIDED"),
        (i[(i.OPTIN = 1)] = "OPTIN"),
        (i[(i.OPTOUT = 2)] = "OPTOUT");
      let N = { 0: void 0, 1: !0, 2: !1 };
      function R() {
        return [
          {
            name: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: r.default.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
  },
]);
//# sourceMappingURL=6cc0d4a2def0d63dece2.js.map
