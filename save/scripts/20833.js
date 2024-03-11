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
        d = a("446674"),
        s = a("77078"),
        u = a("689275"),
        r = a("300322"),
        o = a("109264"),
        c = a("782340");
      function f(e) {
        let t = (0, r.useIsThreadModerator)(e),
          i = (0, d.useStateFromStores)(
            [u.default],
            () => !l.isEmpty(u.default.getThreadsForGuild(e.id))
          );
        return t && i
          ? (0, n.jsx)(s.MenuItem, {
              id: "active-threads",
              label: c.default.Messages.ACTIVE_THREADS,
              icon: o.default,
              action: () => {
                (0, s.openModalLazy)(async () => {
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
        d = a("646186"),
        s = a("71216"),
        u = a("782340");
      function r(e) {
        return (0, n.jsx)(i.MenuItem, {
          id: "application-directory",
          label: (0, n.jsx)(n.Fragment, {
            children: u.default.Messages.APP_DIRECTORY,
          }),
          icon: s.default,
          action: () => {
            (0, d.goToAppDirectory)({
              guildId: e.id,
              entrypoint: {
                name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT,
              },
            });
          },
        });
      }
    },
    992996: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return K;
          },
        });
      var n = a("37983"),
        i = a("884691"),
        l = a("627445"),
        d = a.n(l),
        s = a("446674"),
        u = a("77078"),
        r = a("126501"),
        o = a("388142"),
        c = a("473528"),
        f = a("578899"),
        g = a("685058"),
        p = a("498139"),
        I = a("578411"),
        E = a("383292"),
        M = a("163139"),
        h = a("230947"),
        m = a("747867"),
        _ = a("58622"),
        S = a("413266"),
        x = a("701203"),
        G = a("95039"),
        A = a("255812"),
        C = a("199938"),
        T = a("592407"),
        L = a("267567"),
        D = a("724026"),
        b = a("393414"),
        R = a("26989"),
        j = a("957255"),
        v = a("282109"),
        N = a("697218"),
        y = a("756609"),
        U = a("660279"),
        O = a("171710"),
        V = a("796454"),
        H = a("919765"),
        P = a("474571"),
        w = a("118503"),
        F = a("987772"),
        k = a("351825"),
        B = a("561359"),
        z = a("148337"),
        Y = a("599110"),
        W = a("49111"),
        Z = a("695838"),
        X = a("782340");
      function q(e) {
        (0, u.openModal)(t =>
          (0, n.jsx)(I.GuildLeaveConfirmModalContents, { ...t, guild: e })
        );
      }
      let J = i.memo(function (e) {
        let { guild: t, onClose: l, onSelect: I } = e,
          J = (0, s.useStateFromStores)([N.default], () =>
            N.default.getCurrentUser()
          );
        d(null != J, "GuildHeaderPopout: user cannot be undefined"),
          i.useEffect(() => {
            Y.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
              guild_id: t.id,
            });
          });
        let K = (0, s.useStateFromStores)(
            [v.default],
            () => v.default.isGuildCollapsed(t.id),
            [t.id]
          ),
          {
            canAccessSettings: Q,
            canManageChannels: $,
            showGuildAnalytics: ee,
          } = (0, s.useStateFromStoresObject)(
            [j.default],
            () => {
              let e =
                j.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) &&
                t.hasFeature(W.GuildFeatures.COMMUNITY);
              return {
                canAccessSettings: j.default.canAccessGuildSettings(t),
                canManageChannels: j.default.can(
                  W.Permissions.MANAGE_CHANNELS,
                  t
                ),
                showGuildAnalytics:
                  (0, C.staffOnlyGuildSettingsAccess)(t.id) || e,
              };
            },
            [t]
          ),
          et = (0, x.useCanReportRaid)(t),
          ea = t.isOwner(J),
          en = (0, s.useStateFromStores)(
            [L.default],
            () => L.default.isLurking(t.id),
            [t.id]
          ),
          ei = (0, s.useStateFromStores)([R.default], () =>
            R.default.isCurrentUserGuest(t.id)
          ),
          el = (0, A.default)(t.id, !0),
          ed = (0, g.default)(t),
          es = (0, _.default)({
            source: W.InstantInviteSources.GUILD_HEADER,
            guild: t,
          }),
          eu = (0, h.default)({
            guildId: t.id,
            userId: J.id,
            analyticsLocation: {
              page: W.AnalyticsPages.GUILD_CHANNEL,
              section: W.AnalyticsSections.GUILD_DROPDOWN_MENU,
            },
            icon: F.default,
          }),
          er = t.hasFeature(W.GuildFeatures.HUB),
          eo = t.id === Z.FAVORITES_RAW_GUILD_ID,
          ec = (0, D.default)(t.id),
          ef = (0, E.default)(t),
          eg = (0, M.default)(t),
          ep = (0, m.default)(t, !0),
          { isFavoritesPerk: eI } = (0, p.useFavoritesServerExperiment)(
            "GuildHeaderPopout"
          ),
          { triggerDeadchat: eE } =
            f.SimpleDeadchatPromptExperiment.useExperiment(
              { guildId: t.id, location: "guild header" },
              { autoTrackExposure: !1 }
            ),
          { triggerGamingStats: eM } =
            c.GamingStatsPromptExperiment.useExperiment(
              { guildId: t.id, location: "guild header" },
              { autoTrackExposure: !1 }
            );
        return en || ei
          ? (0, n.jsx)(u.Menu, {
              onSelect: I,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, n.jsx)(u.MenuItem, {
                id: "leave-guild",
                label: X.default.Messages.LEAVE_SERVER,
                icon: V.default,
                action: () => {
                  T.default.leaveGuild(t.id),
                    !ei && (0, b.transitionTo)(W.Routes.GUILD_DISCOVERY);
                },
              }),
            })
          : eo
            ? (0, n.jsxs)(u.Menu, {
                onSelect: I,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                  (0, n.jsxs)(u.MenuGroup, {
                    children: [
                      eI &&
                        (0, n.jsx)(u.MenuItem, {
                          id: "add-channel",
                          label: X.default.Messages.FAVORITES_ADD_A_CHANNEL,
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
                        label: X.default.Messages.CREATE_CATEGORY,
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
                      label: X.default.Messages.HIDE_MUTED_CHANNELS,
                      checked: K,
                      action: () => r.default.toggleCollapseGuild(t.id),
                    }),
                  }),
                ],
              })
            : er
              ? (0, n.jsxs)(u.Menu, {
                  onSelect: I,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        Q
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "settings",
                              label: X.default.Messages.SERVER_SETTINGS,
                              icon: P.default,
                              action: () => {
                                T.default.open(
                                  t.id,
                                  W.GuildSettingsSections.OVERVIEW
                                );
                              },
                            })
                          : null,
                        es,
                        (0, n.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: X.default.Messages.PRIVACY_SETTINGS,
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
                            label: X.default.Messages.LEAVE_HUB,
                            icon: V.default,
                            color: "danger",
                            action: () => q(t),
                          }),
                        }),
                  ],
                })
              : (0, n.jsxs)(u.Menu, {
                  onSelect: I,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                    (0, n.jsx)(u.MenuGroup, {
                      children: (0, n.jsx)(u.MenuItem, {
                        id: "premium-subscribe",
                        label:
                          X.default.Messages
                            .PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                        icon: w.default,
                        action: () => {
                          (0, G.openGuildBoostingMarketingModal)({
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
                        ea && J.isStaff() && eE
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
                        ea && J.isStaff() && eM
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
                        es,
                        Q
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "settings",
                              label: X.default.Messages.SERVER_SETTINGS,
                              icon: P.default,
                              action: () => {
                                T.default.open(
                                  t.id,
                                  W.GuildSettingsSections.OVERVIEW
                                );
                              },
                            })
                          : null,
                        ee
                          ? (0, n.jsx)(u.MenuItem, {
                              id: "insights",
                              label: X.default.Messages.SERVER_INSIGHTS,
                              icon: y.default,
                              action: () =>
                                T.default.open(
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
                                  label: X.default.Messages.CREATE_CHANNEL,
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
                                  label: X.default.Messages.CREATE_CATEGORY,
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
                        ed,
                      ],
                    }),
                    (0, n.jsxs)(u.MenuGroup, {
                      children: [
                        ec,
                        (0, n.jsx)(u.MenuItem, {
                          id: "notifications",
                          label: X.default.Messages.NOTIFICATION_SETTINGS,
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
                          label: X.default.Messages.PRIVACY_SETTINGS,
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
                          label: X.default.Messages.HIDE_MUTED_CHANNELS,
                          checked: K,
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
                                X.default.Messages
                                  .GUILD_REPORT_RAID_BUTTON_TITLE,
                              icon: B.default,
                              color: "danger",
                              action: () => (0, S.openReportRaidModal)(t.id),
                            })
                          : null,
                        ea
                          ? null
                          : (0, n.jsx)(u.MenuItem, {
                              id: "leave",
                              label: X.default.Messages.LEAVE_SERVER,
                              icon: V.default,
                              color: "danger",
                              action: () => q(t),
                            }),
                      ],
                    }),
                  ],
                });
      });
      var K = J;
    },
    796454: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("469563"),
        l = a("354087"),
        d = a("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: a = 18,
              color: i = "currentColor",
              foreground: l,
              ...s
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, d.default)(s),
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
            return s;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("469563"),
        l = a("283196"),
        d = a("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: a = 18,
              color: i = "currentColor",
              foreground: l,
              ...s
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, d.default)(s),
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
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("669491"),
        l = a("82169");
      let d = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: d = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
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
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.4-2.1A2 2 0 0 0 8.92 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=ee5a7cd3552fdf5187df.js.map
