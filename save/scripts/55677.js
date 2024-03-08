(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55677"],
  {
    311340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackReportRaidViewed: function () {
            return _;
          },
          setGuildRaidAlerts: function () {
            return A;
          },
          setGuildIncidentActions: function () {
            return I;
          },
          handleResolveRaid: function () {
            return c;
          },
          handleReportRaid: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("866227"),
        a = n.n(l),
        i = n("872717"),
        u = n("716241"),
        r = n("592407"),
        d = n("305961"),
        s = n("599110"),
        o = n("610174"),
        E = n("49111");
      function _(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        0 !== t.length &&
          s.default.track(E.AnalyticEvents.GUILD_RAID_REPORTED, {
            ...(0, u.collectGuildAnalyticsMetadata)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function A(e, t) {
        let n = new Set(e.features);
        n.has(E.GuildFeatures.COMMUNITY)
          ? t
            ? n.delete(E.GuildFeatures.RAID_ALERTS_DISABLED)
            : n.add(E.GuildFeatures.RAID_ALERTS_DISABLED)
          : t
            ? n.add(E.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(E.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
          await r.default.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function I(e, t, n, l) {
        let u = a().add(l, "hours").toISOString(),
          r = await i.default.put({
            url: E.Endpoints.GUILD_INCIDENT_ACTIONS(e),
            body: {
              invites_disabled_until: t ? u : null,
              dms_disabled_until: n ? u : null,
            },
          });
        return r;
      }
      async function c(e, t, n) {
        let { showAlertMode: l } = (0, o.getGuildAlertModeEnabled)(e),
          a = d.default.getGuild(e),
          u = null == a ? void 0 : a.getSafetyAlertsChannelId();
        if (!l || null == u) return null;
        let r = await i.default.post({
          url: E.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
          body: { alert_message_id: t, reason: n },
        });
        return r;
      }
      async function T(e) {
        let { showAlertMode: t } = (0, o.getGuildAlertModeEnabled)(e),
          n = d.default.getGuild(e),
          l = null == n ? void 0 : n.getSafetyAlertsChannelId();
        if (!t || null == l) return null;
        let a = await i.default.post({
          url: E.Endpoints.GUILD_INCIDENT_REPORT_RAID(e),
        });
        return a;
      }
    },
    701203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanReportRaid: function () {
            return E;
          },
          useCanEnableRaidAlerts: function () {
            return _;
          },
        });
      var l = n("884691"),
        a = n("446674");
      n("926809");
      var i = n("957255"),
        u = n("610174"),
        r = n("413476"),
        d = n("311161"),
        s = n("54346"),
        o = n("49111");
      function E(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          { enableRaidReporting: u } = r.ReportRaidExperiment.useExperiment(
            { guildId: n, location: "4467c7_1" },
            { autoTrackExposure: !1 }
          ),
          E = (0, a.useStateFromStores)(
            [i.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.default;
                return (
                  t.can(o.Permissions.BAN_MEMBERS, e) ||
                  t.can(o.Permissions.KICK_MEMBERS, e) ||
                  t.can(o.Permissions.MANAGE_GUILD, e)
                );
              })(e, i.default),
            [e]
          ),
          _ = (0, a.useStateFromStores)(
            [s.default],
            () => (null != e ? s.default.getGuildIncident(e.id) : null),
            [e]
          ),
          A = null != _ && (0, d.hasDetectedActivity)(_);
        return (
          l.useEffect(() => {
            !A &&
              E &&
              r.ReportRaidExperiment.trackExposure({
                guildId: n,
                location: "4467c7_2",
              });
          }, [A, E, n]),
          !A && E && u
        );
      }
      function _(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          l = (0, a.useStateFromStores)(
            [i.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.default;
                return t.can(o.Permissions.MANAGE_GUILD, e);
              })(e, i.default),
            [e]
          ),
          { enableRaidAlerts: d } = r.RaidAlertExperiment.useExperiment(
            { guildId: n, location: "4467c7_3" },
            { autoTrackExposure: l }
          ),
          { showAlertMode: s } = (0, u.useGuildAlertModeEnabled)(n);
        return l && (d || s);
      }
    },
    982537: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("298386"),
        u = n("446674"),
        r = n("77078"),
        d = n("716241"),
        s = n("679653"),
        o = n("85448"),
        E = n("592407"),
        _ = n("923959"),
        A = n("305961"),
        I = n("27618"),
        c = n("697218"),
        T = n("311340"),
        R = n("701203"),
        N = n("49111"),
        S = n("782340"),
        f = n("751005");
      function M(e) {
        var t, n;
        let { guildId: M, transitionState: L, onClose: D } = e,
          C = (0, u.useStateFromStores)(
            [A.default],
            () => A.default.getGuild(M),
            [M]
          ),
          m =
            null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) &&
            void 0 !== t
              ? t
              : null,
          [h, G] = a.useState(
            !!(null == C
              ? void 0
              : C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED))
          ),
          p = (0, R.useCanEnableRaidAlerts)(C),
          [O, x] = a.useState(
            null != m
              ? m
              : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) &&
                  void 0 !== n
                ? n
                : null
          ),
          [v, g] = a.useState(!1),
          b = (0, u.useStateFromStoresArray)(
            [_.default, c.default, I.default],
            () => {
              let e = _.default.getChannels(M),
                t = e[(0, _.GUILD_SELECTABLE_CHANNELS_KEY)]
                  .filter(e => {
                    let { channel: t } = e;
                    return t.type === i.ChannelTypes.GUILD_TEXT;
                  })
                  .map(e => {
                    let { channel: t } = e;
                    return {
                      value: t.id,
                      label: (0, s.computeChannelName)(
                        t,
                        c.default,
                        I.default,
                        !0
                      ),
                    };
                  });
              return null != m ? t : [...t];
            },
            [M, m]
          ),
          y = async () => {
            if (null == C) {
              (0, r.showToast)(
                (0, r.createToast)(
                  S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,
                  r.ToastType.FAILURE
                )
              );
              return;
            }
            try {
              g(!0),
                h !== C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED) &&
                  (await (0, T.setGuildRaidAlerts)(C, !h)),
                O !== m &&
                  (await E.default.saveGuild(
                    M,
                    { safetyAlertsChannelId: O },
                    { throwErr: !0 }
                  ),
                  E.default.updateGuild({ safetyAlertsChannelId: O }));
              let e = null != O ? O : m;
              if (null != e) {
                let t = {
                  raid_alert_type: o.RaidAlertType.JOIN_RAID,
                  enabled: h,
                  raid_alert_channel_id: e,
                  guild_id: M,
                  channel_id: e,
                };
                (0, d.trackWithMetadata)(
                  N.AnalyticEvents.GUILD_RAID_ALERTS_SETUP,
                  t
                );
              }
              D();
            } catch (e) {
              (0, r.showToast)(
                (0, r.createToast)(
                  S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,
                  r.ToastType.FAILURE
                )
              );
            } finally {
              g(!1);
            }
          };
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: L,
          size: r.ModalSize.SMALL,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, l.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children:
                  S.default.Messages
                    .GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE,
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              children: [
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    S.default.Messages
                      .GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION,
                }),
                (0, l.jsx)("div", {
                  className: f.mainChannelContainer,
                  children: (0, l.jsxs)(r.Clickable, {
                    className: f.enableAlertsContainer,
                    onClick: () => {
                      p && G(!h);
                    },
                    children: [
                      (0, l.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-normal",
                        children:
                          S.default.Messages
                            .GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS,
                      }),
                      (0, l.jsx)(r.Checkbox, {
                        value: !h,
                        className: f.enabledAlertsCheckbox,
                        type: r.Checkbox.Types.INVERTED,
                        disabled: !p,
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: f.mainChannelContainer,
                  children: [
                    (0, l.jsx)(r.Text, {
                      variant: "eyebrow",
                      color: "text-muted",
                      children:
                        S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE,
                    }),
                    (0, l.jsx)(r.SearchableSelect, {
                      options: b,
                      onChange: e => {
                        x(e);
                      },
                      value: O,
                      className: f.channelSelect,
                      maxVisibleItems: 4,
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children:
                        S.default.Messages
                          .GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(r.ModalFooter, {
              children: [
                (0, l.jsx)(r.Button, {
                  onClick: y,
                  color: r.Button.Colors.BRAND_NEW,
                  look: r.Button.Looks.FILLED,
                  submitting: v,
                  children: S.default.Messages.SAVE,
                }),
                (0, l.jsx)(r.Button, {
                  onClick: D,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  disabled: v,
                  children: S.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    831585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AutomodMentionRaidLimit: function () {
            return a;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Automod Mention Raid Limit",
            config: { enabled: !0 },
          },
        ],
      });
    },
    85448: function (e, t, n) {
      "use strict";
      var l, a, i, u, r, d, s, o;
      function E(e) {
        return e.includes("LEGITIMATE_ACTIVITY")
          ? "LEGITIMATE_ACTIVITY"
          : e.includes("DM_SPAM")
            ? "DM_SPAM"
            : e.includes("JOIN_RAID")
              ? "JOIN_RAID"
              : "OTHER";
      }
      n.r(t),
        n.d(t, {
          Feedback: function () {
            return l;
          },
          RaidAlertType: function () {
            return a;
          },
          RaidResolutionType: function () {
            return i;
          },
          getMostImportantRaidResolutionType: function () {
            return E;
          },
          RaidLockdownFeedbackType: function () {
            return u;
          },
        }),
        n("782340"),
        ((r = l || (l = {})).BUG = "BUG"),
        (r.ALLOWED = "ALLOWED"),
        (r.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
        ((d = a || (a = {})).JOIN_RAID = "JOIN_RAID"),
        (d.MENTION_RAID = "MENTION_RAID"),
        ((s = i || (i = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
        (s.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
        (s.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
        (s.DM_SPAM = "DM_SPAM"),
        (s.JOIN_RAID = "JOIN_RAID"),
        (s.OTHER = "OTHER"),
        ((o = u || (u = {})).DM_SPAM = "DM_SPAM"),
        (o.MENTION_SPAM = "MENTION_SPAM"),
        (o.CHANNEL_SPAM = "CHANNEL_SPAM"),
        (o.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
        (o.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
        (o.OTHER = "OTHER");
    },
    926809: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isInMentionRaidExperiment: function () {
            return a;
          },
          useIsMentionRaidExperimentEnabled: function () {
            return i;
          },
        });
      var l = n("831585");
      function a(e) {
        let { enabled: t } = l.AutomodMentionRaidLimit.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return t;
      }
      function i(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = l.AutomodMentionRaidLimit.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: t }
          );
        return n;
      }
    },
  },
]);
//# sourceMappingURL=de1e3b0ada9e4ae69d62.js.map
