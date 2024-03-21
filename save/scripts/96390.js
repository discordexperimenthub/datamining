(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96390"],
  {
    311340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackReportRaidViewed: function () {
            return S;
          },
          setGuildRaidAlerts: function () {
            return c;
          },
          setGuildIncidentActions: function () {
            return I;
          },
          handleResolveRaid: function () {
            return A;
          },
          handleReportRaid: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("866227"),
        l = n.n(a),
        r = n("872717"),
        s = n("716241"),
        i = n("592407"),
        d = n("305961"),
        u = n("599110"),
        o = n("610174"),
        _ = n("49111");
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        0 !== t.length &&
          u.default.track(_.AnalyticEvents.GUILD_RAID_REPORTED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function c(e, t) {
        let n = new Set(e.features);
        n.has(_.GuildFeatures.COMMUNITY)
          ? t
            ? n.delete(_.GuildFeatures.RAID_ALERTS_DISABLED)
            : n.add(_.GuildFeatures.RAID_ALERTS_DISABLED)
          : t
            ? n.add(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
          await i.default.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function I(e, t, n, a) {
        let s = l().add(a, "hours").toISOString(),
          i = await r.HTTP.put({
            url: _.Endpoints.GUILD_INCIDENT_ACTIONS(e),
            body: {
              invites_disabled_until: t ? s : null,
              dms_disabled_until: n ? s : null,
            },
          });
        return i;
      }
      async function A(e, t, n) {
        let { showAlertMode: a } = (0, o.getGuildAlertModeEnabled)(e),
          l = d.default.getGuild(e),
          s = null == l ? void 0 : l.getSafetyAlertsChannelId();
        if (!a || null == s) return null;
        let i = await r.HTTP.post({
          url: _.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
          body: { alert_message_id: t, reason: n },
        });
        return i;
      }
      async function E(e) {
        let { showAlertMode: t } = (0, o.getGuildAlertModeEnabled)(e),
          n = d.default.getGuild(e),
          a = null == n ? void 0 : n.getSafetyAlertsChannelId();
        if (!t || null == a) return null;
        let l = await r.HTTP.post({
          url: _.Endpoints.GUILD_INCIDENT_REPORT_RAID(e),
        });
        return l;
      }
    },
    429479: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: function () {
            return s;
          },
          REPORT_RAID_OPTIONS: function () {
            return i;
          },
          getReportRaidTypeLabel: function () {
            return d;
          },
        });
      var a,
        l,
        r = n("782340");
      let s = "https://discord.com/community/securing-your-server";
      ((a = l || (l = {})).DM_SPAM = "DM_SPAM"),
        (a.MESSAGE_SPAM = "MESSAGE_SPAM"),
        (a.MENTION_SPAM = "MENTION_SPAM"),
        (a.SUSPICIOUS_USERS = "SUSPICIOUS_USERS"),
        (a.SETTINGS_SPAM = "SETTINGS_SPAM");
      let i = [
          "MESSAGE_SPAM",
          "DM_SPAM",
          "MENTION_SPAM",
          "SUSPICIOUS_USERS",
          "SETTINGS_SPAM",
        ],
        d = e => {
          switch (e) {
            case "DM_SPAM":
              return r.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_DM_SPAM;
            case "MENTION_SPAM":
              return r.default.Messages
                .GUILD_REPORT_RAID_MODAL_CHOICE_MENTION_SPAM;
            case "MESSAGE_SPAM":
              return r.default.Messages
                .GUILD_REPORT_RAID_MODAL_CHOICE_MESSAGE_SPAM;
            case "SETTINGS_SPAM":
              return r.default.Messages
                .GUILD_REPORT_RAID_MODAL_CHOICE_SETTINGS_SPAM;
            case "SUSPICIOUS_USERS":
              return r.default.Messages
                .GUILD_REPORT_RAID_MODAL_CHOICE_SUSPICIOUS_USERS;
          }
          return null;
        };
    },
    423588: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("311340"),
        i = n("429479"),
        d = n("782340"),
        u = n("786200");
      function o(e) {
        let { guildId: t, transitionState: n, onClose: o } = e,
          [_, S] = l.useState([]),
          c = l.useCallback(() => {
            (0, s.trackReportRaidViewed)(t, _), (0, s.handleReportRaid)(t), o();
          }, [t, o, _]),
          I = l.useCallback(
            e => () => {
              S(t => (t.includes(e) ? t.filter(t => t !== e) : [...t, e]));
            },
            []
          ),
          A = l.useCallback(() => {
            open(i.COMMUNITY_PORTAL_SERVER_SAFETY_PAGE);
          }, []);
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: n,
          size: r.ModalSize.SMALL,
          children: [
            (0, a.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children: d.default.Messages.GUILD_REPORT_RAID_MODAL_TITLE,
              }),
            }),
            (0, a.jsxs)(r.ModalContent, {
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    d.default.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format(
                      { onClick: A }
                    ),
                }),
                (0, a.jsx)("div", {
                  className: u.mainCheckboxContainer,
                  children: i.REPORT_RAID_OPTIONS.map(e =>
                    (0, a.jsxs)(
                      r.Clickable,
                      {
                        className: u.checkboxContainer,
                        onClick: I(e),
                        children: [
                          (0, a.jsx)(r.Checkbox, {
                            type: r.Checkbox.Types.INVERTED,
                            className: u.checkbox,
                            value: _.includes(e),
                            displayOnly: !0,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: (0, i.getReportRaidTypeLabel)(e),
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
            (0, a.jsxs)(r.ModalFooter, {
              children: [
                (0, a.jsx)(r.Button, {
                  onClick: c,
                  color: r.Button.Colors.BRAND_NEW,
                  look: r.Button.Looks.FILLED,
                  children: d.default.Messages.SUBMIT,
                }),
                (0, a.jsx)(r.Button, {
                  onClick: o,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: d.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d1aad15fda7a2facc2f3.js.map
