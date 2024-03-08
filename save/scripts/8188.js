(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8188"],
  {
    610174: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useGuildAlertModeEnabled: function () {
            return _;
          },
          getGuildAlertModeEnabled: function () {
            return c;
          },
        });
      var l = a("316693"),
        o = a("446674"),
        s = a("862205"),
        n = a("305961"),
        r = a("957255"),
        i = a("421127");
      let d = (0, s.createExperiment)({
          kind: "guild",
          id: "2023-04_guild_alert_mode",
          label: "Guild Alert Mode",
          defaultConfig: { showAlertMode: !1, alsoShowMemberSafety: !1 },
          treatments: [
            {
              id: 1,
              label: "Show alert mode experience",
              config: { showAlertMode: !0, alsoShowMemberSafety: !1 },
            },
            {
              id: 2,
              label: "Show alert mode experience with member safety",
              config: { showAlertMode: !0, alsoShowMemberSafety: !0 },
            },
          ],
        }),
        u = (0, s.createExperiment)({
          kind: "guild",
          id: "2023-08_guild_alert_mode_friend_server",
          label: "Guild Alert Mode (friend servers only)",
          defaultConfig: { showAlertMode: !1, alsoShowMemberSafety: !1 },
          treatments: [
            {
              id: 1,
              label: "Show alert mode experience",
              config: { showAlertMode: !0, alsoShowMemberSafety: !1 },
            },
            {
              id: 2,
              label: "Show alert mode experience with member safety",
              config: { showAlertMode: !0, alsoShowMemberSafety: !1 },
            },
          ],
        });
      function _(e) {
        let t = (0, o.useStateFromStores)([n.default], () =>
            n.default.getGuild(e)
          ),
          a = (0, o.useStateFromStores)(
            [r.default],
            () =>
              null != t &&
              l.default.hasAny(
                r.default.computePermissions(t),
                i.IncidentAlertModeratorPermissions
              )
          ),
          s = d.useExperiment(
            { guildId: e, location: "c3fae3_1" },
            { disable: !a, autoTrackExposure: !0 }
          ),
          _ = u.useExperiment(
            { guildId: e, location: "c3fae3_2" },
            { disable: !a, autoTrackExposure: !0 }
          );
        return {
          showAlertMode: s.showAlertMode || _.showAlertMode,
          alsoShowMemberSafety:
            s.alsoShowMemberSafety || _.alsoShowMemberSafety,
        };
      }
      function c(e) {
        let t = n.default.getGuild(e),
          a =
            null != t &&
            l.default.hasAny(
              r.default.computePermissions(t),
              i.IncidentAlertModeratorPermissions
            ),
          o = d.getCurrentConfig(
            { guildId: e, location: "c3fae3_3" },
            { disable: !a, autoTrackExposure: !0 }
          ),
          s = u.getCurrentConfig(
            { guildId: e, location: "c3fae3_4" },
            { disable: !a, autoTrackExposure: !0 }
          );
        return {
          showAlertMode: o.showAlertMode || s.showAlertMode,
          alsoShowMemberSafety:
            o.alsoShowMemberSafety || s.alsoShowMemberSafety,
        };
      }
    },
    311340: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          trackReportRaidViewed: function () {
            return c;
          },
          setGuildRaidAlerts: function () {
            return R;
          },
          setGuildIncidentActions: function () {
            return A;
          },
          handleResolveRaid: function () {
            return f;
          },
          handleReportRaid: function () {
            return E;
          },
        }),
        a("222007");
      var l = a("866227"),
        o = a.n(l),
        s = a("872717"),
        n = a("716241"),
        r = a("592407"),
        i = a("305961"),
        d = a("599110"),
        u = a("610174"),
        _ = a("49111");
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        0 !== t.length &&
          d.default.track(_.AnalyticEvents.GUILD_RAID_REPORTED, {
            ...(0, n.collectGuildAnalyticsMetadata)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function R(e, t) {
        let a = new Set(e.features);
        a.has(_.GuildFeatures.COMMUNITY)
          ? t
            ? a.delete(_.GuildFeatures.RAID_ALERTS_DISABLED)
            : a.add(_.GuildFeatures.RAID_ALERTS_DISABLED)
          : t
            ? a.add(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
            : a.delete(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
          await r.default.saveGuild(e.id, { features: a }, { throwErr: !0 });
      }
      async function A(e, t, a, l) {
        let n = o().add(l, "hours").toISOString(),
          r = await s.default.put({
            url: _.Endpoints.GUILD_INCIDENT_ACTIONS(e),
            body: {
              invites_disabled_until: t ? n : null,
              dms_disabled_until: a ? n : null,
            },
          });
        return r;
      }
      async function f(e, t, a) {
        let { showAlertMode: l } = (0, u.getGuildAlertModeEnabled)(e),
          o = i.default.getGuild(e),
          n = null == o ? void 0 : o.getSafetyAlertsChannelId();
        if (!l || null == n) return null;
        let r = await s.default.post({
          url: _.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
          body: { alert_message_id: t, reason: a },
        });
        return r;
      }
      async function E(e) {
        let { showAlertMode: t } = (0, u.getGuildAlertModeEnabled)(e),
          a = i.default.getGuild(e),
          l = null == a ? void 0 : a.getSafetyAlertsChannelId();
        if (!t || null == l) return null;
        let o = await s.default.post({
          url: _.Endpoints.GUILD_INCIDENT_REPORT_RAID(e),
        });
        return o;
      }
    },
    421127: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NAGBAR_DISPLAY_MAX_HOURS: function () {
            return n;
          },
          DEFAULT_LOCKDOWN_DURATION: function () {
            return r;
          },
          getTimeframes: function () {
            return i;
          },
          IncidentAlertModeratorPermissions: function () {
            return d;
          },
        });
      var l = a("316693"),
        o = a("843455"),
        s = a("782340");
      let n = 2,
        r = 2,
        i = () => [
          {
            value: 1,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR,
          },
          {
            value: 2,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS,
          },
          {
            value: 4,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS,
          },
          {
            value: 6,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS,
          },
          {
            value: 12,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS,
          },
          {
            value: 24,
            label: s.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS,
          },
        ],
        d = l.default.combine(
          o.Permissions.ADMINISTRATOR,
          o.Permissions.MANAGE_GUILD,
          o.Permissions.BAN_MEMBERS,
          o.Permissions.KICK_MEMBERS,
          o.Permissions.MODERATE_MEMBERS
        );
    },
    561956: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        }),
        a("222007");
      var l = a("37983"),
        o = a("884691"),
        s = a("414456"),
        n = a.n(s),
        r = a("77078"),
        i = a("716241"),
        d = a("311340"),
        u = a("85448"),
        _ = a("49111"),
        c = a("782340"),
        R = a("341695");
      function A(e) {
        let { guildId: t, messageId: s, transitionState: A, onClose: f } = e,
          [E, I] = o.useState([]),
          [M, S] = o.useState(),
          D = o.useCallback(() => {
            let e = {
              raid_alert_type: u.RaidAlertType.JOIN_RAID,
              raid_alert_id: s,
              false_alarm_type: E.map(e => e.toString()),
              false_alarm_other_reason: M,
              guild_id: t,
            };
            (0, i.trackWithMetadata)(_.AnalyticEvents.GUILD_RAID_FEEDBACK, e),
              (0, d.handleResolveRaid)(
                t,
                s,
                (0, u.getMostImportantRaidResolutionType)(E)
              ),
              f(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await a
                  .el("938899")
                  .then(a.bind(a, "938899"));
                return t => (0, l.jsx)(e, { ...t });
              });
          }, [f, s, t, M, E]),
          h = [
            {
              text: c.default.Messages
                .GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
              value: u.RaidResolutionType.LEGITIMATE_ACTIVITY,
            },
            {
              text: c.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
              value: u.RaidResolutionType.DM_SPAM,
            },
            {
              text: c.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
              value: u.RaidResolutionType.JOIN_RAID,
            },
            {
              text: c.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
              value: u.RaidResolutionType.OTHER,
            },
          ];
        function T(e) {
          let t = E.includes(e);
          t ? I(t => t.filter(t => t !== e)) : I(t => [...t, e]);
        }
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: A,
          size: r.ModalSize.SMALL,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              separator: !1,
              className: R.center,
              children: (0, l.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-xl/bold",
                children: c.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE,
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              className: R.center,
              children: [
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: R.textCenter,
                  children:
                    c.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION,
                }),
                (0, l.jsx)("div", {
                  className: R.options,
                  children: h.map(e => {
                    let { text: t, value: a } = e;
                    return (0, l.jsxs)(
                      "div",
                      {
                        className: n(R.optionContainer, {
                          [R.optionContainerOther]:
                            a === u.RaidResolutionType.OTHER,
                        }),
                        children: [
                          (0, l.jsxs)(r.Clickable, {
                            className: R.optionText,
                            onClick: () => T(a),
                            children: [
                              (0, l.jsx)("div", {
                                children: (0, l.jsx)(r.Checkbox, {
                                  type: r.Checkbox.Types.INVERTED,
                                  size: 20,
                                  value: E.includes(a),
                                  onChange: () => T(a),
                                }),
                              }),
                              (0, l.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t,
                              }),
                            ],
                          }),
                          a === u.RaidResolutionType.OTHER &&
                            E.includes(u.RaidResolutionType.OTHER) &&
                            (0, l.jsx)("div", {
                              className: R.textboxContainer,
                              children: (0, l.jsx)(r.TextArea, {
                                className: R.falseAlarmReasonText,
                                placeholder:
                                  c.default.Messages
                                    .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                onChange: e => S(e),
                                value: M,
                                rows: 2,
                                autoFocus: !0,
                                flex: !0,
                              }),
                            }),
                        ],
                      },
                      a
                    );
                  }),
                }),
              ],
            }),
            (0, l.jsxs)(r.ModalFooter, {
              className: R.modalFooter,
              children: [
                (0, l.jsx)("div", {
                  className: R.button,
                  children: (0, l.jsx)(r.Button, {
                    onClick: D,
                    color: r.Button.Colors.BRAND_NEW,
                    look: r.Button.Looks.FILLED,
                    children:
                      c.default.Messages
                        .GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED,
                  }),
                }),
                (0, l.jsx)(r.Button, {
                  onClick: f,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
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
//# sourceMappingURL=3c5976dd84ca3615e2fa.js.map
