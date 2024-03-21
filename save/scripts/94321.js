(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94321"],
  {
    901582: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i,
        l,
        u = n("37983"),
        a = n("884691"),
        r = n("748820"),
        d = n("599110"),
        s = n("117362"),
        o = n("49111");
      ((i = class extends a.Component {
        renderProvider(e) {
          var t, n;
          let {
              section: i,
              page: l,
              object: a,
              objectType: r,
              children: s,
            } = this.props,
            o = this.mergeLocation(e.location, this.getLocation(l, i, a, r)),
            c = this.getContext(
              o,
              null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate,
              null !== (n = this._loadId) && void 0 !== n ? n : e.loadId
            );
          return (0, u.jsx)(d.AnalyticsContext.Provider, {
            value: c,
            children: s,
          });
        }
        render() {
          let { context: e } = this.props;
          return null != e
            ? this.renderProvider(e)
            : (0, u.jsx)(d.AnalyticsContext.Consumer, {
                children: e => this.renderProvider(e),
              });
        }
        constructor(e) {
          super(e),
            (this._loadId = null),
            (this._loadDate = this.props.root ? Date.now() : null),
            (this.getLocation = (0, s.cachedFunction)((e, t, n, i) => {
              let l = {};
              return (
                null != e && (l.page = e),
                null != t && (l.section = t),
                null != n && (l.object = n),
                null != i && (l.objectType = i),
                l
              );
            })),
            (this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
              ...e,
              ...t,
            }))),
            (this.getContext = (0, s.cachedFunction)((e, t, n) => ({
              location: e,
              loadDate: t,
              loadId: n,
            }))),
            null != e.loadId
              ? (this._loadId = e.loadId)
              : e.root && (this._loadId = (0, r.v4)());
        }
      }).Pages = o.AnalyticsPages),
        (i.Sections = o.AnalyticsSections),
        (i.Objects = o.AnalyticsObjects),
        (i.ObjectTypes = o.AnalyticsObjectTypes),
        (i.defaultProps = { root: !1 }),
        (l = i);
    },
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("901582");
      function u(e, t) {
        return function (n) {
          return (0, i.jsx)(l.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, i.jsx)(e, { ...n }),
          });
        };
      }
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("685665");
      function u(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: u } = (0, l.default)(t);
          return (0, i.jsx)(u, { children: (0, i.jsx)(e, { ...n }) });
        };
      }
    },
    610174: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildAlertModeEnabled: function () {
            return c;
          },
          getGuildAlertModeEnabled: function () {
            return f;
          },
        });
      var i = n("316693"),
        l = n("446674"),
        u = n("862205"),
        a = n("305961"),
        r = n("957255"),
        d = n("421127");
      let s = (0, u.createExperiment)({
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
        o = (0, u.createExperiment)({
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
      function c(e) {
        let t = (0, l.useStateFromStores)([a.default], () =>
            a.default.getGuild(e)
          ),
          n = (0, l.useStateFromStores)(
            [r.default],
            () =>
              null != t &&
              i.hasAny(
                r.default.computePermissions(t),
                d.IncidentAlertModeratorPermissions
              )
          ),
          u = s.useExperiment(
            { guildId: e, location: "c3fae3_1" },
            { disable: !n, autoTrackExposure: !0 }
          ),
          c = o.useExperiment(
            { guildId: e, location: "c3fae3_2" },
            { disable: !n, autoTrackExposure: !0 }
          );
        return {
          showAlertMode: u.showAlertMode || c.showAlertMode,
          alsoShowMemberSafety:
            u.alsoShowMemberSafety || c.alsoShowMemberSafety,
        };
      }
      function f(e) {
        let t = a.default.getGuild(e),
          n =
            null != t &&
            i.hasAny(
              r.default.computePermissions(t),
              d.IncidentAlertModeratorPermissions
            ),
          l = s.getCurrentConfig(
            { guildId: e, location: "c3fae3_3" },
            { disable: !n, autoTrackExposure: !0 }
          ),
          u = o.getCurrentConfig(
            { guildId: e, location: "c3fae3_4" },
            { disable: !n, autoTrackExposure: !0 }
          );
        return {
          showAlertMode: l.showAlertMode || u.showAlertMode,
          alsoShowMemberSafety:
            l.alsoShowMemberSafety || u.alsoShowMemberSafety,
        };
      }
    },
    311340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackReportRaidViewed: function () {
            return f;
          },
          setGuildRaidAlerts: function () {
            return _;
          },
          setGuildIncidentActions: function () {
            return A;
          },
          handleResolveRaid: function () {
            return D;
          },
          handleReportRaid: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("866227"),
        l = n.n(i),
        u = n("872717"),
        a = n("716241"),
        r = n("592407"),
        d = n("305961"),
        s = n("599110"),
        o = n("610174"),
        c = n("49111");
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        0 !== t.length &&
          s.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
            ...(0, a.collectGuildAnalyticsMetadata)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function _(e, t) {
        let n = new Set(e.features);
        n.has(c.GuildFeatures.COMMUNITY)
          ? t
            ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED)
            : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED)
          : t
            ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
          await r.default.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function A(e, t, n, i) {
        let a = l().add(i, "hours").toISOString(),
          r = await u.default.put({
            url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
            body: {
              invites_disabled_until: t ? a : null,
              dms_disabled_until: n ? a : null,
            },
          });
        return r;
      }
      async function D(e, t, n) {
        let { showAlertMode: i } = (0, o.getGuildAlertModeEnabled)(e),
          l = d.default.getGuild(e),
          a = null == l ? void 0 : l.getSafetyAlertsChannelId();
        if (!i || null == a) return null;
        let r = await u.default.post({
          url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
          body: { alert_message_id: t, reason: n },
        });
        return r;
      }
      async function I(e) {
        let { showAlertMode: t } = (0, o.getGuildAlertModeEnabled)(e),
          n = d.default.getGuild(e),
          i = null == n ? void 0 : n.getSafetyAlertsChannelId();
        if (!t || null == i) return null;
        let l = await u.default.post({
          url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e),
        });
        return l;
      }
    },
    421127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NAGBAR_DISPLAY_MAX_HOURS: function () {
            return a;
          },
          DEFAULT_LOCKDOWN_DURATION: function () {
            return r;
          },
          getTimeframes: function () {
            return d;
          },
          IncidentAlertModeratorPermissions: function () {
            return s;
          },
        });
      var i = n("316693"),
        l = n("843455"),
        u = n("782340");
      let a = 2,
        r = 2,
        d = () => [
          {
            value: 1,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR,
          },
          {
            value: 2,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS,
          },
          {
            value: 4,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS,
          },
          {
            value: 6,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS,
          },
          {
            value: 12,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS,
          },
          {
            value: 24,
            label: u.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS,
          },
        ],
        s = i.combine(
          l.Permissions.ADMINISTRATOR,
          l.Permissions.MANAGE_GUILD,
          l.Permissions.BAN_MEMBERS,
          l.Permissions.KICK_MEMBERS,
          l.Permissions.MODERATE_MEMBERS
        );
    },
    413266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openReportRaidModal: function () {
            return u;
          },
          openSafetyChannelSetupModal: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078");
      function u(e) {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.el("423588").then(n.bind(n, "423588"));
          return n => (0, i.jsx)(t, { ...n, guildId: e });
        });
      }
      function a(e) {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.el("982537").then(n.bind(n, "982537"));
          return n => (0, i.jsx)(t, { ...n, guildId: e });
        });
      }
    },
    712125: function (e, t, n) {
      "use strict";
      var i, l, u, a, r, d;
      n.r(t),
        n.d(t, {
          GuildIncidentActionSources: function () {
            return i;
          },
          GuildIncidentAlertTypes: function () {
            return l;
          },
          GuildIncidentActionTypes: function () {
            return u;
          },
        }),
        ((a = i || (i = {})).MESSAGE = "message"),
        (a.NAGBAR = "nagbar"),
        (a.GUILD_SETTINGS = "guild_settings"),
        (a.CONTEXT_MENU = "context_menu"),
        (a.GUILD_PROFILE = "guild_profile"),
        (a.MEMBER_SAFETY_PAGE = "member_safety_page"),
        ((r = l || (l = {})).JOIN_RAID = "join_raid"),
        (r.DM_RAID = "dm_raid"),
        ((d = u || (u = {})).INVITES_DISABLED = "invites_disabled"),
        (d.DMS_DISABLED = "dms_disabled");
    },
    311161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DATE_CONFIG: function () {
            return d;
          },
          hasDetectedActivity: function () {
            return s;
          },
          hasDetectedRaid: function () {
            return o;
          },
          hasDetectedDMRaid: function () {
            return c;
          },
          getIncidentAlertType: function () {
            return f;
          },
          getEnabledInterventions: function () {
            return _;
          },
          getDisabledInterventions: function () {
            return A;
          },
          isUnderLockdown: function () {
            return D;
          },
          hasDMsDisabled: function () {
            return I;
          },
          hasInvitesDisabled: function () {
            return E;
          },
          getSecurityActionDetailsString: function () {
            return S;
          },
        }),
        n("424973");
      var i = n("866227"),
        l = n.n(i),
        u = n("712125"),
        a = n("421127"),
        r = n("782340");
      let d = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      };
      function s(e) {
        return (
          (null != e.dmSpamDetectedAt &&
            l(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") >
              l()) ||
          (null != e.raidDetectedAt &&
            l(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l())
        );
      }
      function o(e) {
        return (
          null != e.raidDetectedAt &&
          l(e.raidDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
        );
      }
      function c(e) {
        return (
          null != e.dmSpamDetectedAt &&
          l(e.dmSpamDetectedAt).add(a.NAGBAR_DISPLAY_MAX_HOURS, "hours") > l()
        );
      }
      function f(e) {
        return null == e
          ? void 0
          : o(e)
            ? u.GuildIncidentAlertTypes.JOIN_RAID
            : u.GuildIncidentAlertTypes.DM_RAID;
      }
      function _(e, t) {
        let n = [];
        return (
          e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED),
          t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED),
          n
        );
      }
      function A(e, t) {
        let n = [];
        return (
          !e && n.push(u.GuildIncidentActionTypes.INVITES_DISABLED),
          !t && n.push(u.GuildIncidentActionTypes.DMS_DISABLED),
          n
        );
      }
      function D(e) {
        return (
          (null != e.dmsDisabledUntil &&
            new Date(e.dmsDisabledUntil) > new Date()) ||
          (null != e.invitesDisabledUntil &&
            new Date(e.invitesDisabledUntil) > new Date())
        );
      }
      function I(e) {
        return (
          (null == e ? void 0 : e.dmsDisabledUntil) != null &&
          new Date(e.dmsDisabledUntil) > new Date()
        );
      }
      function E(e) {
        return (
          (null == e ? void 0 : e.invitesDisabledUntil) != null &&
          new Date(e.invitesDisabledUntil) > new Date()
        );
      }
      function S(e, t) {
        var n;
        let i =
          null !== (n = e.dmsDisabledUntil) && void 0 !== n
            ? n
            : e.invitesDisabledUntil;
        if (null == i) return "";
        let l = null != e.dmsDisabledUntil,
          u = null != e.invitesDisabledUntil;
        switch (!0) {
          case l && u:
            return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format(
              {
                guildName: t,
                time: new Date(i).toLocaleString(r.default.getLocale(), d),
              }
            );
          case l:
            return r.default.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format(
              {
                guildName: t,
                time: new Date(i).toLocaleString(r.default.getLocale(), d),
              }
            );
          case u:
            return r.default.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format(
              {
                guildName: t,
                time: new Date(i).toLocaleString(r.default.getLocale(), d),
              }
            );
          default:
            return "";
        }
      }
    },
    54346: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var i = n("446674"),
        l = n("913144"),
        u = n("374363"),
        a = n("305961"),
        r = n("957255"),
        d = n("607620"),
        s = n("299039"),
        o = n("610174"),
        c = n("311161");
      let f = {},
        _ = {};
      function A() {
        var e;
        let t =
            null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
          n = a.default.getGuilds(),
          i = s.default.keys(n);
        for (let e of ((_ = {}), i))
          (0, o.getGuildAlertModeEnabled)(e).showAlertMode &&
            (_[e] = { guildId: e, guildName: n[e].name, ...t[e] });
      }
      function D(e) {
        return null != e && Object.keys(e).length > 0
          ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
            }
          : null;
      }
      class I extends i.default.Store {
        initialize() {
          this.waitFor(u.default, a.default, r.default, d.default),
            this.syncWith([u.default, a.default, r.default, d.default], A);
        }
        getGuildIncident(e) {
          return f[e];
        }
        getIncidentsByGuild() {
          return f;
        }
        getGuildAlertSettings() {
          return _;
        }
      }
      I.displayName = "GuildIncidentsStore";
      var E = new I(l.default, {
        CONNECTION_OPEN: function (e) {
          for (let n of ((f = {}), e.guilds)) {
            var t;
            let e = D(
              null === (t = n.properties) || void 0 === t
                ? void 0
                : t.incidents_data
            );
            null != e &&
              ((0, c.hasDetectedActivity)(e) || (0, c.isUnderLockdown)(e)) &&
              (f[n.id] = e);
          }
        },
        GUILD_CREATE: function (e) {
          var t;
          let { guild: n } = e,
            i = D(
              null === (t = n.properties) || void 0 === t
                ? void 0
                : t.incidents_data
            );
          null != i &&
            ((0, c.hasDetectedActivity)(i) || (0, c.isUnderLockdown)(i)) &&
            (f[n.id] = i);
        },
        GUILD_UPDATE: function (e) {
          let { guild: t } = e,
            n = D(t.incidents_data);
          null != n &&
          ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n))
            ? (f[t.id] = n)
            : delete f[t.id];
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete f[t.id];
        },
        LOGOUT: function (e) {
          f = {};
        },
      });
    },
    100835: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InvitesDisabledExperiment: function () {
            return s;
          },
          useInvitesDisabledPermission: function () {
            return o;
          },
          useInvitesDisabledExperiment: function () {
            return c;
          },
          setInvitesDisabled: function () {
            return f;
          },
          useShouldShowInvitesDisabledNotif: function () {
            return _;
          },
        }),
        n("222007");
      var i = n("446674"),
        l = n("862205"),
        u = n("54346"),
        a = n("957255"),
        r = n("592407"),
        d = n("49111");
      let s = (0, l.createExperiment)({
        kind: "guild",
        id: "2022-07_invites_disabled",
        label: "Report Raids",
        defaultConfig: { enableInvitesDisabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Reporting Of Raids",
            config: { enableInvitesDisabled: !0 },
          },
        ],
      });
      function o(e) {
        return (0, i.useStateFromStores)(
          [a.default],
          () => null != e && a.default.can(d.Permissions.MANAGE_GUILD, e),
          [e]
        );
      }
      function c(e) {
        return s.useExperiment(
          { guildId: e.id, location: "108f83_1" },
          { autoTrackExposure: !1 }
        );
      }
      async function f(e, t) {
        if (e.hasFeature(d.GuildFeatures.INVITES_DISABLED) === t) return;
        let n = new Set(e.features);
        t
          ? n.add(d.GuildFeatures.INVITES_DISABLED)
          : n.delete(d.GuildFeatures.INVITES_DISABLED),
          await r.default.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      function _(e) {
        var t;
        let n = o(e),
          l = (0, i.useStateFromStores)([u.default], () =>
            null != e ? u.default.getGuildIncident(e.id) : null
          ),
          a =
            (null == e
              ? void 0
              : null === (t = e.hasFeature) || void 0 === t
                ? void 0
                : t.call(e, d.GuildFeatures.INVITES_DISABLED)) ||
            ((null == l ? void 0 : l.invitesDisabledUntil) != null &&
              new Date(l.invitesDisabledUntil) > new Date());
        return n && a;
      }
    },
    701587: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("272030"),
        a = n("838446"),
        r = n("158534"),
        d = n("812204"),
        s = n("32573"),
        o = n("73924"),
        c = n("578673"),
        f = n("49111"),
        _ = n("782340"),
        A = (0, r.default)(
          (0, a.default)(
            function (e) {
              let { guildId: t, context: n, onSelect: a } = e,
                r = (0, c.default)(t, n),
                d = (0, o.default)(t, n),
                f = (0, s.default)(t, n);
              return (0, i.jsxs)(l.Menu, {
                navId: "moderation-raid-context",
                onClose: u.closeContextMenu,
                "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: a,
                children: [
                  (0, i.jsx)(l.MenuGroup, { children: d }),
                  (0, i.jsxs)(l.MenuGroup, { children: [f, r] }),
                ],
              });
            },
            { object: f.AnalyticsObjects.CONTEXT_MENU }
          ),
          [d.default.CONTEXT_MENU, d.default.GUILD_MODERATION_RAID_MENU]
        );
    },
    32573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("54239"),
        a = n("592407"),
        r = n("49111"),
        d = n("782340");
      function s(e, t) {
        let n = t === r.AppContext.POPOUT;
        return n
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "nav-server-settings",
              label: d.default.Messages.SERVER_SETTINGS,
              action: () => {
                (0, u.popLayer)(),
                  a.default.open(e, r.GuildSettingsSections.MODERATION);
              },
            });
      }
    },
    73924: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var i = n("37983"),
        l = n("884691"),
        u = n("446674"),
        a = n("77078"),
        r = n("272030"),
        d = n("610174"),
        s = n("311340"),
        o = n("712125"),
        c = n("311161"),
        f = n("54346"),
        _ = n("100835"),
        A = n("305961"),
        D = n("49111"),
        I = n("782340");
      function E(e, t) {
        let E = t === D.AppContext.POPOUT,
          S = (0, u.useStateFromStores)(
            [A.default],
            () => A.default.getGuild(e),
            [e]
          ),
          [m, M] = l.useState(!1),
          { showAlertMode: h } = (0, d.useGuildAlertModeEnabled)(e),
          p = (0, u.useStateFromStores)([f.default], () =>
            null != S ? f.default.getGuildIncident(S.id) : null
          ),
          R =
            (null == S
              ? void 0
              : S.hasFeature(D.GuildFeatures.INVITES_DISABLED)) ||
            (h &&
              (null == p ? void 0 : p.invitesDisabledUntil) != null &&
              new Date(p.invitesDisabledUntil) > new Date()),
          [b, v] = l.useState(R),
          g = async t => {
            if (!m && null != S) {
              M(!0);
              try {
                if ((v(t), h)) {
                  if (t) {
                    let t = {
                      source: o.GuildIncidentActionSources.MESSAGE,
                      alertType: (0, c.getIncidentAlertType)(p),
                    };
                    (0, a.openModalLazy)(async () => {
                      let { default: l } = await n
                        .el("186638")
                        .then(n.bind(n, "186638"));
                      return n =>
                        (0, i.jsx)(l, { ...n, guildId: e, analyticsData: t });
                    });
                  } else await (0, s.setGuildIncidentActions)(S.id, !1, !1);
                } else await (0, _.setInvitesDisabled)(S, t);
              } catch (e) {
                v(!t);
              } finally {
                M(!1), (0, r.closeContextMenu)();
              }
            }
          };
        return E
          ? null
          : (0, i.jsx)(a.MenuCheckboxItem, {
              id: "pause-invites",
              label: I.default.Messages.DISABLE_INVITES,
              action: () => {
                g(!b);
              },
              checked: b,
            });
      }
    },
    578673: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("54239"),
        a = n("413266"),
        r = n("49111"),
        d = n("782340");
      function s(e, t) {
        let n = t === r.AppContext.POPOUT;
        return n
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "report-raid",
              label: d.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
              action: () => {
                (0, u.popLayer)(), (0, a.openReportRaidModal)(e);
              },
            });
      }
    },
    607620: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("446674"),
        l = n("913144"),
        u = n("789563");
      function a() {
        return !0;
      }
      class r extends i.default.Store {
        initialize() {
          this.waitFor(u.default);
        }
        getExperimentAssignment(e, t) {
          return u.default.getGuildExperimentDescriptor(t, e);
        }
      }
      r.displayName = "GuildExperimentStore";
      var d = new r(l.default, {
        LOGOUT: a,
        LOGIN_SUCCESS: a,
        CONNECTION_OPEN: a,
        EXPERIMENTS_FETCH_SUCCESS: a,
        OVERLAY_INITIALIZE: a,
        CACHE_LOADED: a,
        EXPERIMENTS_FETCH_FAILURE: a,
        EXPERIMENT_REGISTER_LEGACY: a,
        EXPERIMENT_OVERRIDE_BUCKET: a,
      });
    },
  },
]);
//# sourceMappingURL=519054d7bf9cdae9a566.js.map
