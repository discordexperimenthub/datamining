(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20833"],
  {
    283196: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("2620");
      a.es(n, t);
    },
    473528: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GamingStatsPromptExperiment: function () {
            return i;
          },
        });
      var n = a("862205");
      let i = (0, n.createExperiment)({
        kind: "guild",
        id: "2023-09_gaming_stats_prompt_guild",
        label: "Gaming stats prompt",
        defaultConfig: { triggerGamingStats: !1 },
        treatments: [
          {
            id: 1,
            label: "ability to trigger gaming stats prompt",
            config: { triggerGamingStats: !0 },
          },
          {
            id: 2,
            label: "ability to trigger gaming stats prompt (leaderboard)",
            config: { triggerGamingStats: !0 },
          },
        ],
      });
    },
    578899: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SimpleDeadchatPromptExperiment: function () {
            return i;
          },
        });
      var n = a("862205");
      let i = (0, n.createExperiment)({
        kind: "guild",
        id: "2023-08_deadchat_simple_prompt_guild",
        label: "Simple deadchat prompt",
        defaultConfig: { triggerDeadchat: !1, enableDeadchat: !1 },
        treatments: [
          {
            id: 0,
            label: "Control",
            config: { triggerDeadchat: !0, enableDeadchat: !1 },
          },
          {
            id: 1,
            label: "trigger deadchat upon connection open",
            config: { triggerDeadchat: !0, enableDeadchat: !0 },
          },
        ],
      });
    },
    383292: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("917351"),
        l = a.n(i),
        s = a("446674"),
        d = a("77078"),
        u = a("689275"),
        r = a("300322"),
        o = a("109264"),
        c = a("782340");
      function f(e) {
        let t = (0, r.useIsThreadModerator)(e),
          i = (0, s.useStateFromStores)(
            [u.default],
            () => !l.isEmpty(u.default.getThreadsForGuild(e.id))
          );
        return t && i
          ? (0, n.jsx)(d.MenuItem, {
              id: "active-threads",
              label: c.default.Messages.ACTIVE_THREADS,
              icon: o.default,
              action: () => {
                (0, d.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("469755")
                    .then(a.bind(a, "469755"));
                  return a => (0, n.jsx)(t, { guildId: e.id, ...a });
                });
              },
            })
          : null;
      }
    },
    163139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("77078"),
        l = a("412707"),
        s = a("646186"),
        d = a("71216"),
        u = a("782340");
      function r(e) {
        return (0, n.jsx)(i.MenuItem, {
          id: "application-directory",
          label: (0, n.jsx)(n.Fragment, {
            children: u.default.Messages.APP_DIRECTORY,
          }),
          icon: d.default,
          action: () => {
            (0, s.goToAppDirectory)({
              guildId: e.id,
              entrypoint: {
                name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT,
              },
            });
          },
        });
      }
    },
    413266: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          openReportRaidModal: function () {
            return l;
          },
          openSafetyChannelSetupModal: function () {
            return s;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("77078");
      function l(e) {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await a.el("423588").then(a.bind(a, "423588"));
          return a => (0, n.jsx)(t, { ...a, guildId: e });
        });
      }
      function s(e) {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await a.el("982537").then(a.bind(a, "982537"));
          return a => (0, n.jsx)(t, { ...a, guildId: e });
        });
      }
    },
    701203: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useCanReportRaid: function () {
            return c;
          },
          useCanEnableRaidAlerts: function () {
            return f;
          },
        });
      var n = a("884691"),
        i = a("446674");
      a("926809");
      var l = a("957255"),
        s = a("610174"),
        d = a("413476"),
        u = a("311161"),
        r = a("54346"),
        o = a("49111");
      function c(e) {
        var t;
        let a =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          { enableRaidReporting: s } = d.ReportRaidExperiment.useExperiment(
            { guildId: a, location: "4467c7_1" },
            { autoTrackExposure: !1 }
          ),
          c = (0, i.useStateFromStores)(
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
          f = (0, i.useStateFromStores)(
            [r.default],
            () => (null != e ? r.default.getGuildIncident(e.id) : null),
            [e]
          ),
          g = null != f && (0, u.hasDetectedActivity)(f);
        return (
          n.useEffect(() => {
            !g &&
              c &&
              d.ReportRaidExperiment.trackExposure({
                guildId: a,
                location: "4467c7_2",
              });
          }, [g, c, a]),
          !g && c && s
        );
      }
      function f(e) {
        var t;
        let a =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID,
          n = (0, i.useStateFromStores)(
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
          { enableRaidAlerts: u } = d.RaidAlertExperiment.useExperiment(
            { guildId: a, location: "4467c7_3" },
            { autoTrackExposure: n }
          ),
          { showAlertMode: r } = (0, s.useGuildAlertModeEnabled)(a);
        return n && (u || r);
      }
    },
    199938: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          staffOnlyGuildSettingsAccess: function () {
            return u;
          },
          useGuildAccessRateInsightExperiment: function () {
            return r;
          },
        });
      var n = a("884691"),
        i = a("862205"),
        l = a("697218"),
        s = a("49111");
      let d = (0, i.createExperiment)({
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
      function u(e) {
        var t;
        let a =
          null === (t = l.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.isStaff();
        return (
          a &&
          d.getCurrentConfig({ guildId: e, location: "77b4b2_1" })
            .showAccessRate
        );
      }
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          n.useEffect(() => {
            !t &&
              null != e &&
              d.trackExposure({ guildId: e, location: "77b4b2_2" });
          }, [e, t]),
          d.useExperiment(
            {
              guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
              location: "77b4b2_3",
            },
            { autoTrackExposure: !1, disable: t || null == e }
          )
        );
      }
    },
    992996: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return J;
          },
        });
      var n = a("37983"),
        i = a("884691"),
        l = a("627445"),
        s = a.n(l),
        d = a("446674"),
        u = a("77078"),
        r = a("126501"),
        o = a("388142"),
        c = a("473528"),
        f = a("578899"),
        g = a("685058"),
        p = a("498139"),
        E = a("578411"),
        I = a("383292"),
        h = a("163139"),
        M = a("230947"),
        m = a("747867"),
        _ = a("58622"),
        x = a("413266"),
        S = a("701203"),
        A = a("95039"),
        v = a("255812"),
        G = a("199938"),
        R = a("592407"),
        C = a("267567"),
        T = a("724026"),
        b = a("393414"),
        L = a("26989"),
        D = a("957255"),
        j = a("282109"),
        N = a("697218"),
        y = a("756609"),
        U = a("660279"),
        O = a("171710"),
        P = a("796454"),
        H = a("919765"),
        V = a("474571"),
        w = a("118503"),
        F = a("987772"),
        k = a("351825"),
        B = a("561359"),
        z = a("148337"),
        Y = a("599110"),
        W = a("49111"),
        Z = a("695838"),
        K = a("782340");
      function X(e) {
        (0, u.openModal)(t =>
          (0, n.jsx)(E.GuildLeaveConfirmModalContents, { ...t, guild: e })
        );
      }
      let q = i.memo(function (e) {
        let { guild: t, onClose: l, onSelect: E } = e,
          q = (0, d.useStateFromStores)([N.default], () =>
            N.default.getCurrentUser()
          );
        s(null != q, "GuildHeaderPopout: user cannot be undefined"),
          i.useEffect(() => {
            Y.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
              guild_id: t.id,
            });
          });
        let J = (0, d.useStateFromStores)(
            [j.default],
            () => j.default.isGuildCollapsed(t.id),
            [t.id]
          ),
          {
            canAccessSettings: Q,
            canManageChannels: $,
            showGuildAnalytics: ee,
          } = (0, d.useStateFromStoresObject)(
            [D.default],
            () => {
              let e =
                D.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) &&
                t.hasFeature(W.GuildFeatures.COMMUNITY);
              return {
                canAccessSettings: D.default.canAccessGuildSettings(t),
                canManageChannels: D.default.can(
                  W.Permissions.MANAGE_CHANNELS,
                  t
                ),
                showGuildAnalytics:
                  (0, G.staffOnlyGuildSettingsAccess)(t.id) || e,
              };
            },
            [t]
          ),
          et = (0, S.useCanReportRaid)(t),
          ea = t.isOwner(q),
          en = (0, d.useStateFromStores)(
            [C.default],
            () => C.default.isLurking(t.id),
            [t.id]
          ),
          ei = (0, d.useStateFromStores)([L.default], () =>
            L.default.isCurrentUserGuest(t.id)
          ),
          el = (0, v.default)(t.id, !0),
          es = (0, g.default)(t),
          ed = (0, _.default)({
            source: W.InstantInviteSources.GUILD_HEADER,
            guild: t,
          }),
          eu = (0, M.default)({
            guildId: t.id,
            userId: q.id,
            analyticsLocation: {
              page: W.AnalyticsPages.GUILD_CHANNEL,
              section: W.AnalyticsSections.GUILD_DROPDOWN_MENU,
            },
            icon: F.default,
          }),
          er = t.hasFeature(W.GuildFeatures.HUB),
          eo = t.id === Z.FAVORITES_RAW_GUILD_ID,
          ec = (0, T.default)(t.id),
          ef = (0, I.default)(t),
          eg = (0, h.default)(t),
          ep = (0, m.default)(t, !0),
          { isFavoritesPerk: eE } = (0, p.useFavoritesServerExperiment)(
            "GuildHeaderPopout"
          ),
          { triggerDeadchat: eI } =
            f.SimpleDeadchatPromptExperiment.useExperiment(
              { guildId: t.id, location: "guild header" },
              { autoTrackExposure: !1 }
            ),
          { triggerGamingStats: eh } =
            c.GamingStatsPromptExperiment.useExperiment(
              { guildId: t.id, location: "guild header" },
              { autoTrackExposure: !1 }
            );
        return en || ei
          ? (0, n.jsx)(u.Menu, {
              onSelect: E,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, n.jsx)(u.MenuItem, {
                id: "leave-guild",
                label: K.default.Messages.LEAVE_SERVER,
                icon: P.default,
                action: () => {
                  R.default.leaveGuild(t.id),
                    !ei && (0, b.transitionTo)(W.Routes.GUILD_DISCOVERY);
                },
              }),
            })
          : eo
            ? (0, n.jsxs)(u.Menu, {
                onSelect: E,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                  (0, n.jsxs)(u.MenuGroup, {
                    children: [
                      eE &&
                        (0, n.jsx)(u.MenuItem, {
                          id: "add-channel",
                          label: K.default.Messages.FAVORITES_ADD_A_CHANNEL,
                          color: "brand",
                          icon: k.default,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await a
                                .el("746039")
                                .then(a.bind(a, "746039"));
                              return t => (0, n.jsx)(e, { ...t });
                            }),
                        }),
                      (0, n.jsx)(u.MenuItem, {
                        id: "create-category",
                        label: K.default.Messages.CREATE_CATEGORY,
                        icon: H.default,
                        action: () =>
                          (0, u.openModalLazy)(async () => {
                            let { default: e } = await a
                              .el("515680")
                              .then(a.bind(a, "515680"));
                            return t => (0, n.jsx)(e, { ...t });
                          }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(u.MenuGroup, {
                    children: (0, n.jsx)(u.MenuCheckboxItem, {
                      id: "hide-muted-channels",
                      label: K.default.Messages.HIDE_MUTED_CHANNELS,
                      checked: J,
                      action: () => r.default.toggleCollapseGuild(t.id),
                    }),
                  }),
                ],
              })
            : er
              ? (0, n.jsxs)(u.Menu, {
                  onSelect: E,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        Q
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "settings",
                              label: K.default.Messages.SERVER_SETTINGS,
                              icon: V.default,
                              action: () => {
                                R.default.open(
                                  t.id,
                                  W.GuildSettingsSections.OVERVIEW
                                );
                              },
                            })
                          : null,
                        ed,
                        (0, n.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: K.default.Messages.PRIVACY_SETTINGS,
                          icon: z.default,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await a
                                .el("349406")
                                .then(a.bind(a, "349406"));
                              return a => (0, n.jsx)(e, { ...a, guild: t });
                            }),
                        }),
                        eu,
                      ],
                    }),
                    ea
                      ? null
                      : (0, n.jsx)(u.MenuGroup, {
                          children: (0, n.jsx)(u.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_HUB,
                            icon: P.default,
                            color: "danger",
                            action: () => X(t),
                          }),
                        }),
                  ],
                })
              : (0, n.jsxs)(u.Menu, {
                  onSelect: E,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, n.jsx)(u.MenuGroup, {
                      children: (0, n.jsx)(u.MenuItem, {
                        id: "premium-subscribe",
                        label:
                          K.default.Messages
                            .PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                        icon: w.default,
                        action: () => {
                          (0, A.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                              section: W.AnalyticsSections.GUILD_HEADER_POPOUT,
                            },
                          });
                        },
                      }),
                    }),
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        ea && q.isStaff() && eI
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "create-deadchat",
                              label: "Deadchat Ping",
                              icon: O.default,
                              action: () => {
                                (0, o.forcePrompt)(
                                  t.id,
                                  W.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT
                                );
                              },
                            })
                          : null,
                        ea && q.isStaff() && eh
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "create-gaming-ping",
                              label: "Gaming Stats Ping",
                              icon: O.default,
                              action: () => {
                                (0, o.forcePrompt)(
                                  t.id,
                                  W.MessageTypes.GUILD_GAMING_STATS_PROMPT
                                );
                              },
                            })
                          : null,
                        ed,
                        Q
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "settings",
                              label: K.default.Messages.SERVER_SETTINGS,
                              icon: V.default,
                              action: () => {
                                R.default.open(
                                  t.id,
                                  W.GuildSettingsSections.OVERVIEW
                                );
                              },
                            })
                          : null,
                        ee
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "insights",
                              label: K.default.Messages.SERVER_INSIGHTS,
                              icon: y.default,
                              action: () =>
                                R.default.open(
                                  t.id,
                                  W.GuildSettingsSections.ANALYTICS
                                ),
                            })
                          : null,
                        $
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(u.MenuItem, {
                                  id: "create-channel",
                                  label: K.default.Messages.CREATE_CHANNEL,
                                  icon: k.default,
                                  action: () =>
                                    (0, u.openModalLazy)(async () => {
                                      let { default: e } = await a
                                        .el("581354")
                                        .then(a.bind(a, "581354"));
                                      return a =>
                                        (0, n.jsx)(e, {
                                          ...a,
                                          channelType:
                                            W.ChannelTypes.GUILD_TEXT,
                                          guildId: t.id,
                                        });
                                    }),
                                }),
                                (0, n.jsx)(u.MenuItem, {
                                  id: "create-category",
                                  label: K.default.Messages.CREATE_CATEGORY,
                                  icon: H.default,
                                  action: () =>
                                    (0, u.openModalLazy)(async () => {
                                      let { default: e } = await a
                                        .el("581354")
                                        .then(a.bind(a, "581354"));
                                      return a =>
                                        (0, n.jsx)(e, {
                                          ...a,
                                          channelType:
                                            W.ChannelTypes.GUILD_CATEGORY,
                                          guildId: t.id,
                                        });
                                    }),
                                }),
                              ],
                            })
                          : null,
                        el,
                        ef,
                        eg,
                        es,
                      ],
                    }),
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        ec,
                        (0, n.jsx)(u.MenuItem, {
                          id: "notifications",
                          label: K.default.Messages.NOTIFICATION_SETTINGS,
                          icon: U.default,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await a
                                .el("747593")
                                .then(a.bind(a, "747593"));
                              return a =>
                                (0, n.jsx)(e, { ...a, guildId: t.id });
                            }),
                        }),
                        (0, n.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: K.default.Messages.PRIVACY_SETTINGS,
                          icon: z.default,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await a
                                .el("349406")
                                .then(a.bind(a, "349406"));
                              return a => (0, n.jsx)(e, { ...a, guild: t });
                            }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        eu,
                        (0, n.jsx)(u.MenuCheckboxItem, {
                          id: "hide-muted-channels",
                          label: K.default.Messages.HIDE_MUTED_CHANNELS,
                          checked: J,
                          action: () => r.default.toggleCollapseGuild(t.id),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        ep,
                        et && t.isCommunity()
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "report-raid",
                              label:
                                K.default.Messages
                                  .GUILD_REPORT_RAID_BUTTON_TITLE,
                              icon: B.default,
                              color: "danger",
                              action: () => (0, x.openReportRaidModal)(t.id),
                            })
                          : null,
                        ea
                          ? null
                          : (0, n.jsx)(u.MenuItem, {
                              id: "leave",
                              label: K.default.Messages.LEAVE_SERVER,
                              icon: P.default,
                              color: "danger",
                              action: () => X(t),
                            }),
                      ],
                    }),
                  ],
                });
      });
      var J = q;
    },
    756609: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("469563"),
        l = a("308472"),
        s = a("75196"),
        d = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: a = 18,
              color: i = "currentColor",
              foreground: l,
              ...d
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, s.default)(d),
              width: t,
              height: a,
              viewBox: "0 0 18 18",
              children: [
                (0, n.jsx)("path", {
                  fill: i,
                  className: l,
                  d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z",
                }),
                (0, n.jsx)("path", {
                  fill: i,
                  className: l,
                  d: "M6.75,4.5H5.25v6h1.5Z",
                }),
                (0, n.jsx)("path", {
                  fill: i,
                  className: l,
                  d: "M9.75,7.5H8.25v3h1.5Z",
                }),
                (0, n.jsx)("path", {
                  fill: i,
                  className: l,
                  d: "M12.75,6h-1.5v4.5h1.5Z",
                }),
              ],
            });
          },
          l.AnalyticsIcon,
          void 0,
          { size: 18 }
        );
    },
    796454: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("469563"),
        l = a("354087"),
        s = a("75196"),
        d = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: a = 18,
              color: i = "currentColor",
              foreground: l,
              ...d
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, s.default)(d),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: l,
                fill: i,
                d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z",
              }),
            });
          },
          l.DoorExitIcon,
          void 0,
          { size: 18 }
        );
    },
    919765: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("469563"),
        l = a("283196"),
        s = a("75196"),
        d = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: a = 18,
              color: i = "currentColor",
              foreground: l,
              ...d
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, s.default)(d),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: l,
                fill: i,
                d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z",
              }),
            });
          },
          l.FolderPlusIcon,
          void 0,
          { size: 18 }
        );
    },
    2620: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FolderPlusIcon: function () {
            return s;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("669491"),
        l = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.4-2.1A2 2 0 0 0 8.92 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=6fb39c8e75c8d9493485.js.map
