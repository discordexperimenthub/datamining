(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28516"],
  {
    126501: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("913144"),
        l = n("679428"),
        s = n("282109"),
        u = {
          update(e) {
            a.default.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
          },
          toggleCollapseGuild(e) {
            l.default.saveUserGuildSettings(e, {
              hide_muted_channels: !s.default.isGuildCollapsed(e),
            }),
              a.default.dispatch({
                type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                guildId: e,
              });
          },
        };
    },
    969553: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("927944");
      n.es(a, t);
    },
    578411: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildLeaveConfirmModalContents: function () {
            return v;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        u = n("151426"),
        i = n("77078"),
        r = n("10641"),
        d = n("592407"),
        o = n("267567"),
        c = n("393414"),
        f = n("49111"),
        E = n("782340"),
        h = n("967659");
      let v = e => {
        let { guild: t } = e,
          l = t.id,
          v = async () => {
            let e = o.default.isLurking(l);
            await d.default.leaveGuild(l),
              e
                ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY)
                : !(0, r.isDismissibleContentDismissed)(
                    u.DismissibleContent.GUILD_LEAVE_FEEDBACK
                  ) &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("953750")
                      .then(n.bind(n, "953750"));
                    return n =>
                      (0, a.jsx)(e, { ...n, guildId: l, guildName: t.name });
                  });
          };
        return (0, a.jsx)(i.ConfirmModal, {
          className: s(h.confirmModal),
          bodyClassName: s(h.confirmModalBody),
          header: E.default.Messages.LEAVE_SERVER_TITLE.format({
            name: t.name,
          }),
          confirmText: t.hasFeature(f.GuildFeatures.HUB)
            ? E.default.Messages.LEAVE_HUB
            : E.default.Messages.LEAVE_SERVER,
          cancelText: E.default.Messages.CANCEL,
          onConfirm: v,
          ...e,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t.hasFeature(f.GuildFeatures.HUB)
              ? E.default.Messages.LEAVE_HUB_BODY.format({ name: t.name })
              : E.default.Messages.LEAVE_SERVER_BODY.format({ name: t.name }),
          }),
        });
      };
    },
    230947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        u = n("77078"),
        i = n("750560"),
        r = n("38766"),
        d = n("506885"),
        o = n("271938"),
        c = n("26989"),
        f = n("305961"),
        E = n("957255"),
        h = n("697218"),
        v = n("49111"),
        C = n("782340"),
        g = n("576398");
      function p(e) {
        let {
            guildId: t,
            userId: p,
            analyticsLocation: I,
            analyticsLocations: m,
            context: M,
            icon: _,
          } = e,
          N = f.default.getGuild(t),
          A = o.default.getId(),
          S = (0, s.useStateFromStores)([h.default], () =>
            h.default.getUser(p)
          ),
          L = (0, s.useStateFromStores)(
            [c.default],
            () => c.default.isGuestOrLurker(t, p),
            [t, p]
          );
        (0, s.useStateFromStores)(
          [E.default],
          () => E.default.getGuildVersion(t),
          [t]
        );
        let x = l.useMemo(() => ({ [t]: [p] }), [t, p]);
        (0, i.useSubscribeGuildMembers)(x);
        let G = M === v.AppContext.POPOUT,
          b = (0, r.default)({ guild: N, analyticsLocation: I });
        if (null == N || G) return null;
        let T =
            A === p &&
            (E.default.can(v.Permissions.CHANGE_NICKNAME, N) ||
              E.default.can(v.Permissions.MANAGE_NICKNAMES, N)),
          H = A === p,
          V = E.default.canManageUser(v.Permissions.MANAGE_NICKNAMES, p, N);
        if (!(T || V || H) || null == S || L) return null;
        let R = N.hasFeature(v.GuildFeatures.HUB),
          O = R
            ? C.default.Messages.HUB_EDIT_PROFILE
            : C.default.Messages.CHANGE_IDENTITY,
          D = H ? O : C.default.Messages.CHANGE_NICKNAME;
        return (0, a.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, a.jsx)("div", {
            className: g.labelWrapper,
            children: (0, a.jsx)("span", { className: g.label, children: D }),
          }),
          icon: _,
          action: () => {
            H
              ? ((0, d.default)(S.id, S.getAvatarURL(t, 80), { guildId: t }),
                b())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await n
                    .el("59709")
                    .then(n.bind(n, "59709"));
                  return n =>
                    (0, a.jsx)(e, {
                      ...n,
                      guildId: t,
                      user: S,
                      analyticsSource: I,
                      analyticsLocations: m,
                    });
                });
          },
        });
      }
    },
    747867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        u = n("398654"),
        i = n("712125"),
        r = n("311161"),
        d = n("45029"),
        o = n("372624"),
        c = n("782340");
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: f,
            isUnderLockdown: E,
            incidentData: h,
          } = (0, u.useGuildIncidentsState)(e.id),
          v = l.useCallback(() => {
            let t = {
              source: i.GuildIncidentActionSources.CONTEXT_MENU,
              alertType: (0, r.getIncidentAlertType)(h),
            };
            (0, s.openModalLazy)(async () => {
              let { default: l } = await n
                .el("186638")
                .then(n.bind(n, "186638"));
              return n =>
                (0, a.jsx)(l, { ...n, guildId: e.id, analyticsData: t });
            });
          }, [e.id, h]);
        return e.isCommunity() && f
          ? (0, a.jsx)(s.MenuItem, {
              id: "server-lockdown",
              label: E
                ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK
                : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
              icon: t ? (E ? o.default : d.default) : void 0,
              action: v,
              color: "danger",
            })
          : null;
      }
    },
    58622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        u = n("242757"),
        i = n("923959"),
        r = n("957255"),
        d = n("76539"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: s } = e,
          d = (0, l.useStateFromStores)([i.default], () =>
            i.default.getDefaultChannel(
              n.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, l.useStateFromStores)([r.default], () =>
            (0, u.canViewInviteModal)(r.default, n, a, s)
          ),
          f = E(t, n, c && null != a ? a : d),
          v = h(t);
        return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? f
            : v;
      }
      let E = (e, t, l) =>
          (0, a.jsx)(s.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, s.openModalLazy)(async () => {
                let { default: s } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, a.jsx)(s, { ...n, guild: t, channel: l, source: e });
              }),
          }),
        h = e =>
          (0, a.jsx)(s.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, s.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("973132")
                  .then(n.bind(n, "973132"));
                return t => (0, a.jsx)(e, { ...t });
              }),
          });
    },
    413266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openReportRaidModal: function () {
            return s;
          },
          openSafetyChannelSetupModal: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078");
      function s(e) {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.el("423588").then(n.bind(n, "423588"));
          return n => (0, a.jsx)(t, { ...n, guildId: e });
        });
      }
      function u(e) {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.el("982537").then(n.bind(n, "982537"));
          return n => (0, a.jsx)(t, { ...n, guildId: e });
        });
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
            return f;
          },
        });
      var a = n("884691"),
        l = n("446674");
      n("926809");
      var s = n("957255"),
        u = n("610174"),
        i = n("413476"),
        r = n("311161"),
        d = n("54346"),
        o = n("49111");
      function c(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          { enableRaidReporting: u } = i.ReportRaidExperiment.useExperiment(
            { guildId: n, location: "4467c7_1" },
            { autoTrackExposure: !1 }
          ),
          c = (0, l.useStateFromStores)(
            [s.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s.default;
                return (
                  t.can(o.Permissions.BAN_MEMBERS, e) ||
                  t.can(o.Permissions.KICK_MEMBERS, e) ||
                  t.can(o.Permissions.MANAGE_GUILD, e)
                );
              })(e, s.default),
            [e]
          ),
          f = (0, l.useStateFromStores)(
            [d.default],
            () => (null != e ? d.default.getGuildIncident(e.id) : null),
            [e]
          ),
          E = null != f && (0, r.hasDetectedActivity)(f);
        return (
          a.useEffect(() => {
            !E &&
              c &&
              i.ReportRaidExperiment.trackExposure({
                guildId: n,
                location: "4467c7_2",
              });
          }, [E, c, n]),
          !E && c && u
        );
      }
      function f(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          a = (0, l.useStateFromStores)(
            [s.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s.default;
                return t.can(o.Permissions.MANAGE_GUILD, e);
              })(e, s.default),
            [e]
          ),
          { enableRaidAlerts: r } = i.RaidAlertExperiment.useExperiment(
            { guildId: n, location: "4467c7_3" },
            { autoTrackExposure: a }
          ),
          { showAlertMode: d } = (0, u.useGuildAlertModeEnabled)(n);
        return a && (r || d);
      }
    },
    255812: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("70025"),
        u = n("334683"),
        i = n("842672"),
        r = n("782340");
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          d = (0, u.default)(e),
          o = (0, i.default)();
        return d
          ? (0, a.jsx)(l.MenuItem, {
              id: "create-event",
              label: r.default.Messages.SCHEDULE_EVENT,
              icon: t ? s.default : void 0,
              action: () => {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("590942")
                    .then(n.bind(n, "590942"));
                  return n => (0, a.jsx)(t, { ...n, guildId: e });
                }, o);
              },
            })
          : null;
      }
    },
    199938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          staffOnlyGuildSettingsAccess: function () {
            return r;
          },
          useGuildAccessRateInsightExperiment: function () {
            return d;
          },
        });
      var a = n("884691"),
        l = n("862205"),
        s = n("697218"),
        u = n("49111");
      let i = (0, l.createExperiment)({
        kind: "guild",
        id: "2022-03_guild_access_rate_insight_experiment",
        label: "Guild Access Rate Insight Experiment",
        defaultConfig: { showAccessRate: !1 },
        treatments: [
          {
            id: 1,
            label: "Show guild access rate in insights",
            config: { showAccessRate: !0 },
          },
        ],
      });
      function r(e) {
        var t;
        let n =
          null === (t = s.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.isStaff();
        return (
          n &&
          i.getCurrentConfig({ guildId: e, location: "77b4b2_1" })
            .showAccessRate
        );
      }
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          a.useEffect(() => {
            !t &&
              null != e &&
              i.trackExposure({ guildId: e, location: "77b4b2_2" });
          }, [e, t]),
          i.useExperiment(
            {
              guildId: null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID,
              location: "77b4b2_3",
            },
            { autoTrackExposure: !1, disable: t || null == e }
          )
        );
      }
    },
    986003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          hasNotSetUpChannelOptIn: function () {
            return c;
          },
          toggleShowAllChannels: function () {
            return f;
          },
          optIntoAllChannelsForExistingMember: function () {
            return E;
          },
        }),
        n("702976"),
        n("222007"),
        n("424973"),
        n("151426");
      var a = n("921031");
      n("374363");
      var l = n("923959"),
        s = n("26989"),
        u = n("282109"),
        i = n("568734"),
        r = n("629220"),
        d = n("512395"),
        o = n("657944");
      function c(e) {
        var t, n;
        let a = (0, d.isOptInEnabledForGuild)(e),
          l =
            null !==
              (n =
                null === (t = s.default.getSelfMember(e)) || void 0 === t
                  ? void 0
                  : t.flags) && void 0 !== n
              ? n
              : 0,
          r = (0, i.hasFlag)(l, o.GuildMemberFlags.COMPLETED_ONBOARDING),
          c = u.default.getOptedInChannels(e).size > 0;
        return !a && !r && !c;
      }
      function f(e) {
        if (c(e)) {
          E(e);
          return;
        }
        {
          let t = (0, d.isOptInEnabledForGuild)(e);
          (0, r.setGuildOptIn)(e, !t);
        }
      }
      function E(e) {
        let { include: t = new Set(), exclude: n = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = l.default.getChannels(e),
          u = [
            ...s[(0, l.GUILD_SELECTABLE_CHANNELS_KEY)],
            ...s[(0, l.GUILD_VOCAL_CHANNELS_KEY)],
          ]
            .filter(e => {
              let { channel: t } = e;
              return !t.isThread() && !n.has(t.id);
            })
            .map(e => {
              let { channel: t } = e;
              return t.id;
            });
        t.forEach(e => u.push(e)),
          a.default.onboardExistingMember(e, new Set(u));
      }
    },
    724026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        s = n("77078"),
        u = n("305961"),
        i = n("697218"),
        r = n("986003"),
        d = n("512395"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let t = (0, d.useOptInEnabledForGuild)(e),
          n = (0, l.useStateFromStores)([u.default], () =>
            u.default.getGuild(e)
          ),
          f = (0, l.useStateFromStores)([i.default], () =>
            i.default.getCurrentUser()
          );
        return null != f &&
          null != n &&
          (n.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff())
          ? (0, a.jsx)(s.MenuCheckboxItem, {
              id: "opt-in",
              label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !t,
              action: () => {
                (0, r.toggleShowAllChannels)(e);
              },
            })
          : null;
      }
    },
    756609: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("308472"),
        u = n("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: n = 18,
              color: l = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, u.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              children: [
                (0, a.jsx)("path", {
                  fill: l,
                  className: s,
                  d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z",
                }),
                (0, a.jsx)("path", {
                  fill: l,
                  className: s,
                  d: "M6.75,4.5H5.25v6h1.5Z",
                }),
                (0, a.jsx)("path", {
                  fill: l,
                  className: s,
                  d: "M9.75,7.5H8.25v3h1.5Z",
                }),
                (0, a.jsx)("path", {
                  fill: l,
                  className: s,
                  d: "M12.75,6h-1.5v4.5h1.5Z",
                }),
              ],
            });
          },
          s.AnalyticsIcon,
          void 0,
          { size: 18 }
        );
    },
    70025: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("969553"),
        u = n("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              ...s
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, u.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, a.jsx)("path", {
                  d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                  fill: l,
                }),
                (0, a.jsx)("path", {
                  d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                  fill: l,
                }),
                (0, a.jsx)("path", { d: "M7 11H12V16H7V11Z", fill: l }),
              ],
            });
          },
          s.CalendarPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    372624: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("263436"),
        u = n("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              className: s,
              foreground: i,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              width: t,
              height: n,
              className: s,
              viewBox: "0 0 24 24",
              ...(0, u.default)(r),
              children: (0, a.jsx)("path", {
                className: i,
                fill: l,
                d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.LockUnlockedIcon,
          void 0,
          { size: 24 }
        );
    },
    927944: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CalendarPlusIcon: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M22 13.67c0 .12-.33.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.67ZM5.5 12a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
              clipRule: "evenodd",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
            (0, a.jsx)("path", {
              d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=dffa6e385cf504bcead5.js.map
