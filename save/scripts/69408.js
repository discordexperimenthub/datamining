(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69408"],
  {
    298878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("956089"),
        d = n("782340");
      function s(e) {
        let {
          className: t,
          color: n = a.default.unsafe_rawColors.BRAND_500.css,
          ...s
        } = e;
        return (0, i.jsx)(l.TextBadge, {
          ...s,
          text: d.default.Messages.BETA,
          color: n,
          className: t,
        });
      }
    },
    311340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackReportRaidViewed: function () {
            return _;
          },
          setGuildRaidAlerts: function () {
            return E;
          },
          setGuildIncidentActions: function () {
            return f;
          },
          handleResolveRaid: function () {
            return I;
          },
          handleReportRaid: function () {
            return A;
          },
        }),
        n("222007");
      var i = n("866227"),
        a = n.n(i),
        l = n("872717"),
        d = n("716241"),
        s = n("592407"),
        r = n("305961"),
        u = n("599110"),
        o = n("610174"),
        c = n("49111");
      function _(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        0 !== t.length &&
          u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
            ...(0, d.collectGuildAnalyticsMetadata)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function E(e, t) {
        let n = new Set(e.features);
        n.has(c.GuildFeatures.COMMUNITY)
          ? t
            ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED)
            : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED)
          : t
            ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
          await s.default.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function f(e, t, n, i) {
        let d = a().add(i, "hours").toISOString(),
          s = await l.default.put({
            url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
            body: {
              invites_disabled_until: t ? d : null,
              dms_disabled_until: n ? d : null,
            },
          });
        return s;
      }
      async function I(e, t, n) {
        let { showAlertMode: i } = (0, o.getGuildAlertModeEnabled)(e),
          a = r.default.getGuild(e),
          d = null == a ? void 0 : a.getSafetyAlertsChannelId();
        if (!i || null == d) return null;
        let s = await l.default.post({
          url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
          body: { alert_message_id: t, reason: n },
        });
        return s;
      }
      async function A(e) {
        let { showAlertMode: t } = (0, o.getGuildAlertModeEnabled)(e),
          n = r.default.getGuild(e),
          i = null == n ? void 0 : n.getSafetyAlertsChannelId();
        if (!t || null == i) return null;
        let a = await l.default.post({
          url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e),
        });
        return a;
      }
    },
    701203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanReportRaid: function () {
            return c;
          },
          useCanEnableRaidAlerts: function () {
            return _;
          },
        });
      var i = n("884691"),
        a = n("446674");
      n("926809");
      var l = n("957255"),
        d = n("610174"),
        s = n("413476"),
        r = n("311161"),
        u = n("54346"),
        o = n("49111");
      function c(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          { enableRaidReporting: d } = s.ReportRaidExperiment.useExperiment(
            { guildId: n, location: "4467c7_1" },
            { autoTrackExposure: !1 }
          ),
          c = (0, a.useStateFromStores)(
            [l.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.default;
                return (
                  t.can(o.Permissions.BAN_MEMBERS, e) ||
                  t.can(o.Permissions.KICK_MEMBERS, e) ||
                  t.can(o.Permissions.MANAGE_GUILD, e)
                );
              })(e, l.default),
            [e]
          ),
          _ = (0, a.useStateFromStores)(
            [u.default],
            () => (null != e ? u.default.getGuildIncident(e.id) : null),
            [e]
          ),
          E = null != _ && (0, r.hasDetectedActivity)(_);
        return (
          i.useEffect(() => {
            !E &&
              c &&
              s.ReportRaidExperiment.trackExposure({
                guildId: n,
                location: "4467c7_2",
              });
          }, [E, c, n]),
          !E && c && d
        );
      }
      function _(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          i = (0, a.useStateFromStores)(
            [l.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.default;
                return t.can(o.Permissions.MANAGE_GUILD, e);
              })(e, l.default),
            [e]
          ),
          { enableRaidAlerts: r } = s.RaidAlertExperiment.useExperiment(
            { guildId: n, location: "4467c7_3" },
            { autoTrackExposure: i }
          ),
          { showAlertMode: u } = (0, d.useGuildAlertModeEnabled)(n);
        return i && (r || u);
      }
    },
    186638: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("171210"),
        d = n("446674"),
        s = n("77078"),
        r = n("298878"),
        u = n("305961"),
        o = n("45029"),
        c = n("599110"),
        _ = n("311340"),
        E = n("701203"),
        f = n("311161"),
        I = n("54346"),
        A = n("421127"),
        R = n("49111"),
        m = n("782340"),
        S = n("373731");
      function D(e) {
        let {
            guildId: t,
            transitionState: D,
            onClose: h,
            analyticsData: N,
          } = e,
          T = (0, d.useStateFromStores)(
            [u.default],
            () => u.default.getGuild(t),
            [t]
          ),
          x = !!(null == T
            ? void 0
            : T.hasFeature(R.GuildFeatures.INVITES_DISABLED)),
          [L] = a.useState(!1),
          [M, g] = a.useState(A.DEFAULT_LOCKDOWN_DURATION),
          p = (0, d.useStateFromStores)([I.default], () =>
            I.default.getGuildIncident(t)
          ),
          v = (0, E.useCanEnableRaidAlerts)(T),
          C = (0, f.hasInvitesDisabled)(p) || x,
          G = (0, f.hasDMsDisabled)(p),
          [b, O] = a.useState(C),
          [j, y] = a.useState(G),
          [B, k] = a.useState(!1),
          U = b !== C || j !== G || B,
          F = x && !v;
        if (null == T) return h(), null;
        function w() {
          O(e => !e);
        }
        return (0, i.jsxs)(s.ModalRoot, {
          transitionState: D,
          size: s.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(s.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: S.headerContainer,
                children: [
                  (0, i.jsx)(o.default, {
                    color: l.default.INTERACTIVE_NORMAL,
                    width: 16,
                    height: 16,
                  }),
                  (0, i.jsx)(s.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: m.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, i.jsx)(r.default, {}),
                ],
              }),
            }),
            (0, i.jsx)(s.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: S.mainContainer,
                children: [
                  (0, i.jsx)(s.Select, {
                    placeholder:
                      m.default.Messages
                        .GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                    options: (0, A.getTimeframes)(),
                    select: e => {
                      g(e), k(!0);
                    },
                    isSelected: e => e === M,
                    serialize: e => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: S.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: S.pauseText,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: m.default.Messages.DISABLE_INVITES,
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              m.default.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.Tooltip, {
                        text: m.default.Messages
                          .INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: x,
                        children: e =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(s.Switch, {
                              className: S.toggle,
                              onChange: w,
                              checked: b,
                              disabled: F,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: S.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: S.pauseText,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: m.default.Messages.DISABLE_DMS,
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              m.default.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.Switch, {
                        className: S.toggle,
                        onChange: function () {
                          y(e => !e);
                        },
                        checked: j,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(s.ModalFooter, {
              children: [
                (0, i.jsx)(s.Button, {
                  onClick: () => {
                    (C || G) && !b && !j
                      ? ((0, _.setGuildIncidentActions)(T.id, !1, !1),
                        (0, s.openModalLazy)(async () => {
                          let { default: e } = await n
                            .el("187317")
                            .then(n.bind(n, "187317"));
                          return n => (0, i.jsx)(e, { ...n, guildId: t });
                        }))
                      : (0, _.setGuildIncidentActions)(T.id, b, j, M);
                    let { source: e, alertType: a, messageId: l } = N;
                    c.default.track(
                      R.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: t,
                        source: e,
                        raid_alert_id: l,
                        raid_alert_type: a,
                        intervention_type_enabled: (0,
                        f.getEnabledInterventions)(b, j),
                        intervention_type_disabled: (0,
                        f.getDisabledInterventions)(b, j),
                        duration: 60 * M,
                      }
                    ),
                      h();
                  },
                  color: s.Button.Colors.BRAND_NEW,
                  look: s.Button.Looks.FILLED,
                  submitting: L,
                  disabled: !U,
                  children: m.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, i.jsx)(s.Button, {
                  onClick: h,
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  disabled: L,
                  children: m.default.Messages.CANCEL,
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
      var i = n("862205");
      let a = (0, i.createExperiment)({
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
    926809: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isInMentionRaidExperiment: function () {
            return a;
          },
          useIsMentionRaidExperimentEnabled: function () {
            return l;
          },
        });
      var i = n("831585");
      function a(e) {
        let { enabled: t } = i.AutomodMentionRaidLimit.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return t;
      }
      function l(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = i.AutomodMentionRaidLimit.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: t }
          );
        return n;
      }
    },
  },
]);
//# sourceMappingURL=1da3272e8b5525bb8178.js.map
