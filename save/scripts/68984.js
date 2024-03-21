(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68984"],
  {
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return s;
          },
          categoryExpand: function () {
            return a;
          },
          categoryCollapseAll: function () {
            return l;
          },
          categoryExpandAll: function () {
            return u;
          },
        });
      var i = n("913144");
      function s(e) {
        i.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function a(e) {
        i.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function l(e) {
        i.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function u(e) {
        i.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("430143");
      n.es(i, t);
    },
    263436: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("560797");
      n.es(i, t);
    },
    304983: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("541742");
      n.es(i, t);
    },
    531674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMuteTimes: function () {
            return M;
          },
          default: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var s = n("866227"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        o = n("820542"),
        d = n("519705"),
        r = n("319165"),
        c = n("282109"),
        f = n("34676"),
        E = n("679653"),
        S = n("49111"),
        _ = n("468200"),
        g = n("782340");
      let M = () => [
          {
            value: _.MuteUntilSeconds.MINUTES_15,
            label: g.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: _.MuteUntilSeconds.HOURS_1,
            label: g.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: _.MuteUntilSeconds.HOURS_3,
            label: g.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: _.MuteUntilSeconds.HOURS_8,
            label: g.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: _.MuteUntilSeconds.HOURS_24,
            label: g.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: _.MuteUntilSeconds.ALWAYS,
            label: g.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        N = e => {
          let t = e > 0 ? a().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function I(e, t) {
        let [n, s] = (0, l.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          a = (0, r.useMutedUntilText)(s),
          _ = (0, E.default)(e, !0);
        function I(t) {
          t &&
            e.type === S.ChannelTypes.GUILD_CATEGORY &&
            (0, o.categoryCollapse)(e.id),
            d.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let T = g.default.Messages.MUTE_CHANNEL_GENERIC,
          h = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case S.ChannelTypes.GUILD_CATEGORY:
            (T = g.default.Messages.MUTE_CATEGORY),
              (h = g.default.Messages.UNMUTE_CATEGORY);
            break;
          case S.ChannelTypes.GROUP_DM:
            (T = g.default.Messages.MUTE_CONVERSATION),
              (h = g.default.Messages.UNMUTE_CONVERSATION);
            break;
          case S.ChannelTypes.DM:
            (T = g.default.Messages.MUTE_CHANNEL.format({ name: _ })),
              (h = g.default.Messages.UNMUTE_CHANNEL.format({ name: _ }));
            break;
          default:
            (T = g.default.Messages.MUTE_CHANNEL_GENERIC),
              (h = g.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, i.jsx)(u.MenuItem, {
              id: "unmute-channel",
              label: h,
              subtext: a,
              action: () => I(!1),
            })
          : (0, i.jsx)(u.MenuItem, {
              id: "mute-channel",
              label: T,
              action: () => I(!0),
              children: M().map(n => {
                let { value: s, label: a } = n;
                return (0, i.jsx)(
                  u.MenuItem,
                  {
                    id: "".concat(s),
                    label: a,
                    action: () =>
                      (function (n) {
                        e.type === S.ChannelTypes.GUILD_CATEGORY &&
                          (0, o.categoryCollapse)(e.id);
                        let i = N(n);
                        d.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          f.NotificationLabels.Muted,
                          t
                        );
                      })(s),
                  },
                  s
                );
              }),
            });
      }
    },
    542827: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("881410"),
        n("222007"),
        n("424973");
      var i = n("917351"),
        s = n.n(i),
        a = n("267363"),
        l = n("863636"),
        u = n("401690"),
        o = n("923959"),
        d = n("660478"),
        r = n("599110"),
        c = n("299039"),
        f = n("49111"),
        E = n("133335");
      function S(e, t, n) {
        let i = s
          .flatMap(e, e => {
            let t = o.default.getSelectableChannelIds(e),
              n = o.default.getVocalChannelIds(e),
              i = [...t, ...n],
              s = u.default.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
              var a;
              let t = null !== (a = s[e]) && void 0 !== a ? a : {};
              for (let e in t) i.push(e);
            }
            return i;
          })
          .map(e => ({
            channelId: e,
            readStateType: E.ReadStateTypes.CHANNEL,
            messageId: d.default.lastMessageId(e),
          }));
        return (
          e.forEach(e => {
            i.push({
              channelId: c.default.cast(e),
              readStateType: E.ReadStateTypes.GUILD_EVENT,
              messageId: d.default.lastMessageId(
                e,
                E.ReadStateTypes.GUILD_EVENT
              ),
            }),
              i.push({
                channelId: c.default.cast(e),
                readStateType: E.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: l.default.ackIdForGuild(e),
              });
          }),
          r.default.track(f.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild",
          }),
          (0, a.bulkAck)(i, n)
        );
      }
    },
    374705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("627445"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        o = n("272030"),
        d = n("812204"),
        r = n("685665"),
        c = n("861370"),
        f = n("255812"),
        E = n("47495"),
        S = n("724026"),
        _ = n("271938"),
        g = n("923959"),
        M = n("697218"),
        N = n("578411"),
        I = n("230947"),
        T = n("544955"),
        h = n("747867"),
        A = n("555914"),
        p = n("513472"),
        L = n("527660"),
        O = n("823772"),
        U = n("177508"),
        C = n("263673"),
        R = n("58622"),
        m = n("49111"),
        v = n("782340");
      function G(e) {
        let { guild: t, onSelect: s, hideSettings: d } = e,
          r = t.id,
          G = g.default.getDefaultChannel(r),
          b = (0, l.useStateFromStores)(
            [M.default],
            () => {
              let e = M.default.getCurrentUser();
              return (
                a(null != e, "GuildContextMenu: user cannot be undefined"),
                t.isOwner(e)
              );
            },
            [t]
          ),
          x = (0, R.default)({
            guild: t,
            source: m.InstantInviteSources.GUILD_CONTEXT_MENU,
            channel: G,
          }),
          y = (0, C.default)(r),
          F = (0, p.default)(t),
          j = (0, L.default)(t),
          D = (0, U.default)(t),
          P = (0, I.default)({
            guildId: t.id,
            userId: _.default.getId(),
            analyticsLocation: {
              page: m.AnalyticsPages.GUILD_CHANNEL,
              section: m.AnalyticsSections.CHAT_USERNAME,
              object: m.AnalyticsObjects.CONTEXT_MENU_ITEM,
            },
          }),
          H = (0, T.default)(t),
          Y = (0, f.default)(t.id),
          V = (0, c.default)({
            id: t.id,
            label: v.default.Messages.COPY_ID_GUILD,
          }),
          B = (0, A.default)(t, { section: m.AnalyticsSections.GUILD_LIST }),
          w = (0, S.default)(t.id),
          k = (0, O.default)(t.id),
          Z = (0, h.default)(t),
          z = (0, E.useShouldUseNewNotificationSystem)("GuildContextMenu"),
          J = t.hasFeature(m.GuildFeatures.HUB);
        function W() {
          (0, u.openModal)(e =>
            (0, i.jsx)(N.GuildLeaveConfirmModalContents, { ...e, guild: t })
          );
        }
        return J
          ? (0, i.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: o.closeContextMenu,
              "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    x,
                    (0, i.jsx)(u.MenuItem, {
                      id: "privacy",
                      label: v.default.Messages.HUB_PRIVACY_SETTINGS,
                      action: () =>
                        (0, u.openModalLazy)(async () => {
                          let { default: e } = await n
                            .el("349406")
                            .then(n.bind(n, "349406"));
                          return n => (0, i.jsx)(e, { ...n, guild: t });
                        }),
                    }),
                    P,
                  ],
                }),
                b
                  ? null
                  : (0, i.jsx)(u.MenuGroup, {
                      children: (0, i.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: v.default.Messages.LEAVE_HUB,
                        action: W,
                        color: "danger",
                      }),
                    }),
                (0, i.jsx)(u.MenuGroup, { children: V }),
              ],
            })
          : (0, i.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: o.closeContextMenu,
              "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, i.jsx)(u.MenuGroup, { children: B }),
                (0, i.jsx)(u.MenuGroup, { children: x }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    F,
                    z || __OVERLAY__ ? null : j,
                    z && !__OVERLAY__ ? k : null,
                    y,
                    w,
                  ],
                }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    d ? null : D,
                    __OVERLAY__
                      ? null
                      : (0, i.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: v.default.Messages.PRIVACY_SETTINGS,
                          action: () =>
                            (0, u.openModalLazy)(async () => {
                              let { default: e } = await n
                                .el("349406")
                                .then(n.bind(n, "349406"));
                              return n => (0, i.jsx)(e, { ...n, guild: t });
                            }),
                        }),
                    P,
                  ],
                }),
                (0, i.jsxs)(u.MenuGroup, { children: [H, Y] }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    Z,
                    !b &&
                      (0, i.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: v.default.Messages.LEAVE_SERVER,
                        action: W,
                        color: "danger",
                      }),
                  ],
                }),
                (0, i.jsx)(u.MenuGroup, { children: V }),
              ],
            });
      }
      function b(e) {
        let { AnalyticsLocationProvider: t } = (0, r.default)(
          d.default.CONTEXT_MENU
        );
        return (0, i.jsx)(t, { children: (0, i.jsx)(G, { ...e }) });
      }
    },
    544955: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("957255"),
        u = n("49111"),
        o = n("695838"),
        d = n("782340");
      function r(e) {
        let t = (0, s.useStateFromStores)([l.default], () =>
          l.default.can(u.Permissions.MANAGE_CHANNELS, e)
        );
        return __OVERLAY__
          ? null
          : e.id === o.FAVORITES_RAW_GUILD_ID
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.MenuItem, {
                  id: "create-category",
                  label: d.default.Messages.CREATE_CATEGORY,
                  action: () =>
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("515680")
                        .then(n.bind(n, "515680"));
                      return t => (0, i.jsx)(e, { ...t });
                    }),
                }),
              })
            : t
              ? [
                  (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "create-channel",
                      label: d.default.Messages.CREATE_CHANNEL,
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: t } = await n
                            .el("581354")
                            .then(n.bind(n, "581354"));
                          return n =>
                            (0, i.jsx)(t, {
                              ...n,
                              channelType: u.ChannelTypes.GUILD_TEXT,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-channel"
                  ),
                  (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "create-category",
                      label: d.default.Messages.CREATE_CATEGORY,
                      action: () =>
                        (0, a.openModalLazy)(async () => {
                          let { default: t } = await n
                            .el("581354")
                            .then(n.bind(n, "581354"));
                          return n =>
                            (0, i.jsx)(t, {
                              ...n,
                              channelType: u.ChannelTypes.GUILD_CATEGORY,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-category"
                  ),
                ]
              : null;
      }
    },
    555914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("952451"),
        u = n("542827"),
        o = n("782340");
      function d(e, t) {
        let n = e.id,
          d = (0, s.useStateFromStores)(
            [l.default],
            () => l.default.getGuildHasUnreadIgnoreMuted(n),
            [n]
          );
        return (0, i.jsx)(a.MenuItem, {
          id: "mark-guild-read",
          label: o.default.Messages.MARK_AS_READ,
          icon: void 0,
          action: () => (0, u.default)([n], t.section),
          disabled: !d,
        });
      }
    },
    513472: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("866227"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        o = n("519705"),
        d = n("531674"),
        r = n("319165"),
        c = n("282109"),
        f = n("34676"),
        E = n("782340");
      function S(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: s, muteConfig: S } = (0, l.useStateFromStoresObject)(
            [c.default],
            () => ({
              muted: null != n ? c.default.isMuted(n) : void 0,
              muteConfig: null != n ? c.default.getMuteConfig(n) : void 0,
            }),
            [n]
          ),
          _ = (0, r.useMutedUntilText)(S);
        return null == n
          ? null
          : s
            ? (0, i.jsx)(u.MenuItem, {
                id: "unmute-guild",
                label: E.default.Messages.UNMUTE_SERVER,
                subtext: _,
                action: () =>
                  o.default.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.NotificationLabels.Unmuted
                  ),
              })
            : (0, i.jsx)(u.MenuItem, {
                id: "mute-guild",
                label: E.default.Messages.MUTE_SERVER,
                action: () =>
                  o.default.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.NotificationLabels.Muted
                  ),
                children: (0, d.getMuteTimes)().map(e => {
                  let { value: s, label: l } = e;
                  return (0, i.jsx)(
                    u.MenuItem,
                    {
                      id: "".concat(s),
                      label: l,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? a().add(e, "second").toISOString() : null;
                          o.default.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            f.NotificationLabels.Muted,
                            t
                          );
                        })(s),
                    },
                    s
                  );
                }),
              });
      }
    },
    527660: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("519705"),
        u = n("503950"),
        o = n("282109"),
        d = n("34676"),
        r = n("49111"),
        c = n("782340");
      function f() {
        return [
          {
            setting: r.UserNotificationSettings.ALL_MESSAGES,
            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES,
          },
          {
            setting: r.UserNotificationSettings.ONLY_MENTIONS,
            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
          },
          {
            setting: r.UserNotificationSettings.NO_MESSAGES,
            label: c.default.Messages.FORM_LABEL_NOTHING,
          },
        ];
      }
      function E(e) {
        var t, E;
        let S = (function (e) {
            let {
                suppressEveryone: t,
                suppressRoles: n,
                mobilePush: E,
                messageNotifications: S,
                notifyHighlights: _,
              } = (0, s.useStateFromStoresObject)(
                [o.default],
                () => ({
                  suppressEveryone: o.default.isSuppressEveryoneEnabled(e.id),
                  suppressRoles: o.default.isSuppressRolesEnabled(e.id),
                  mobilePush: o.default.isMobilePushEnabled(e.id),
                  messageNotifications: o.default.getMessageNotifications(e.id),
                  notifyHighlights: o.default.getNotifyHighlights(e.id),
                }),
                [e.id]
              ),
              g = _ === r.HighlightSettings.DISABLED,
              M = (0, u.default)(e.id);
            function N(t, n) {
              l.default.updateGuildNotificationSettings(e.id, t, n);
            }
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(a.MenuGroup, {
                  children: f().map(e => {
                    let { setting: t, label: n } = e;
                    return (0, i.jsx)(
                      a.MenuRadioItem,
                      {
                        group: "guild-notifications",
                        id: "".concat(t),
                        label: n,
                        action: () =>
                          N(
                            { message_notifications: t },
                            d.NotificationLabel.notifications(t)
                          ),
                        checked: t === S,
                      },
                      t
                    );
                  }),
                }),
                (0, i.jsxs)(a.MenuGroup, {
                  children: [
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-everyone",
                      label:
                        c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                      action: () =>
                        N(
                          { suppress_everyone: !t },
                          d.NotificationLabel.suppressEveryone(!t)
                        ),
                      checked: t,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-roles",
                      label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                      action: () =>
                        N(
                          { suppress_roles: !n },
                          d.NotificationLabel.suppressRoles(!n)
                        ),
                      checked: n,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-highlights",
                      label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                      action: () => {
                        N(
                          {
                            notify_highlights: g
                              ? r.HighlightSettings.ENABLED
                              : r.HighlightSettings.DISABLED,
                          },
                          d.NotificationLabel.highlights(g)
                        );
                      },
                      checked: g,
                    }),
                    M,
                  ],
                }),
                (0, i.jsx)(a.MenuGroup, {
                  children: (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mobile-push",
                    label:
                      c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                    action: () =>
                      N(
                        { mobile_push: !E },
                        d.NotificationLabel.mobilePush(!E)
                      ),
                    checked: E,
                  }),
                }),
              ],
            });
          })(e),
          _ = (0, s.useStateFromStores)(
            [o.default],
            () => o.default.getMessageNotifications(e.id),
            [e.id]
          ),
          g =
            null === (E = f()) || void 0 === E
              ? void 0
              : null ===
                    (t = E.find(e => {
                      let { setting: t } = e;
                      return t === _;
                    })) || void 0 === t
                ? void 0
                : t.label;
        return null != S
          ? (0, i.jsx)(a.MenuItem, {
              id: "guild-notifications",
              label: c.default.Messages.NOTIFICATION_SETTINGS,
              subtext: g,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("747593")
                    .then(n.bind(n, "747593"));
                  return n => (0, i.jsx)(t, { ...n, guildId: e.id });
                }),
              children: S,
            })
          : null;
      }
    },
    823772: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("37983"),
        s = n("884691"),
        a = n("446674"),
        l = n("77078"),
        u = n("519705"),
        o = n("277796"),
        d = n("546770"),
        r = n("507313"),
        c = n("282109"),
        f = n("34676"),
        E = n("49111"),
        S = n("133335"),
        _ = n("397336"),
        g = n("782340");
      function M(e) {
        return (0, i.jsxs)(l.MenuItem, {
          id: "notification",
          label: g.default.Messages.NOTIFICATIONS,
          action: () => {
            (0, l.openModalLazy)(async () => {
              let { default: t } = await n
                .el("747593")
                .then(n.bind(n, "747593"));
              return n => (0, i.jsx)(t, { ...n, guildId: e });
            });
          },
          children: [
            (function (e) {
              let [t, n] = s.useState(!1),
                [M, N] = s.useState(!1),
                I = (0, a.useStateFromStores)([c.default], () =>
                  c.default.getGuildUnreadSetting(e)
                ),
                T = (0, a.useStateFromStores)([c.default], () =>
                  c.default.getMessageNotifications(e)
                ),
                h = M ? r.Presets.CUSTOM : (0, r.presetFromSettings)(I, T),
                A = t => {
                  N(!1);
                  let n = { message_notifications: t };
                  t === E.UserNotificationSettings.ALL_MESSAGES &&
                    I !== S.UnreadSetting.ALL_MESSAGES &&
                    (n.flags = (0, o.withGuildUnreadFlags)(
                      c.default.getGuildFlags(e),
                      _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                    )),
                    u.default.updateGuildNotificationSettings(
                      e,
                      n,
                      f.NotificationLabel.notifications(t)
                    );
                },
                p = t => {
                  N(!1);
                  let n = c.default.getGuildFlags(e);
                  u.default.updateGuildNotificationSettings(
                    e,
                    {
                      flags: (0, o.withGuildUnreadFlags)(
                        n,
                        t === S.UnreadSetting.ALL_MESSAGES
                          ? _.GuildNotificationSettingsFlags
                              .UNREADS_ALL_MESSAGES
                          : _.GuildNotificationSettingsFlags
                              .UNREADS_ONLY_MENTIONS
                      ),
                    },
                    f.NotificationLabel.unreads(t)
                  );
                };
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(l.MenuGroup, {
                    children: [
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "everything",
                        group: "notification-preset",
                        checked: h === r.Presets.ALL_MESSAGES,
                        label: g.default.Messages.NOTIFICATION_PRESET_1,
                        action: () => (
                          (0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES),
                          N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "essentials",
                        group: "notification-preset",
                        checked: h === r.Presets.MENTIONS,
                        label: g.default.Messages.NOTIFICATION_PRESET_2,
                        action: () => (
                          (0, d.updateGuildPreset)(e, r.Presets.MENTIONS), N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "nothing",
                        group: "notification-preset",
                        checked: h === r.Presets.NOTHING,
                        label: g.default.Messages.NOTIFICATION_PRESET_3,
                        action: () => (
                          (0, d.updateGuildPreset)(e, r.Presets.NOTHING), N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "custom",
                        group: "notification-preset",
                        checked: h === r.Presets.CUSTOM,
                        action: () => (n(!0), N(!0)),
                        label: g.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                      }),
                    ],
                  }),
                  (h === r.Presets.CUSTOM || t) &&
                    (0, i.jsxs)(l.MenuGroup, {
                      children: [
                        (0, i.jsxs)(
                          l.MenuItem,
                          {
                            id: "unread_setting",
                            label: "Unread Badges",
                            children: [
                              (0, i.jsx)(l.MenuRadioItem, {
                                id: "unread_setting_all_messages",
                                group: "unread_setting",
                                checked: I === S.UnreadSetting.ALL_MESSAGES,
                                label:
                                  g.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                action: () => p(S.UnreadSetting.ALL_MESSAGES),
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                id: "unread_setting_mention_only",
                                group: "unread_setting",
                                checked: I === S.UnreadSetting.ONLY_MENTIONS,
                                label:
                                  g.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => p(S.UnreadSetting.ONLY_MENTIONS),
                                disabled:
                                  I !== S.UnreadSetting.ONLY_MENTIONS &&
                                  T === E.UserNotificationSettings.ALL_MESSAGES,
                                subtext:
                                  I !== S.UnreadSetting.ONLY_MENTIONS &&
                                  T === E.UserNotificationSettings.ALL_MESSAGES
                                    ? g.default.Messages
                                        .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED
                                    : void 0,
                              }),
                            ],
                          },
                          "unread_setting"
                        ),
                        (0, i.jsxs)(
                          l.MenuItem,
                          {
                            id: "push_settings",
                            label: g.default.Messages.NOTIFICATIONS,
                            children: [
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything",
                                label:
                                  g.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                checked:
                                  T === E.UserNotificationSettings.ALL_MESSAGES,
                                action: () =>
                                  A(E.UserNotificationSettings.ALL_MESSAGES),
                                subtext:
                                  I !== S.UnreadSetting.ALL_MESSAGES &&
                                  T !== E.UserNotificationSettings.ALL_MESSAGES
                                    ? g.default.Messages
                                        .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                                    : void 0,
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_mention",
                                checked:
                                  T ===
                                  E.UserNotificationSettings.ONLY_MENTIONS,
                                label:
                                  g.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () =>
                                  A(E.UserNotificationSettings.ONLY_MENTIONS),
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_nothing",
                                label:
                                  g.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_NONE,
                                checked:
                                  T === E.UserNotificationSettings.NO_MESSAGES,
                                action: () =>
                                  A(E.UserNotificationSettings.NO_MESSAGES),
                              }),
                            ],
                          },
                          "push_settings"
                        ),
                      ],
                    }),
                ],
              });
            })(e),
            (function (e) {
              let t = (0, a.useStateFromStoresObject)([c.default], () => ({
                  highligths: c.default.getNotifyHighlights(e),
                  mobilePush: c.default.isMobilePushEnabled(e),
                  suppressRoles: c.default.isSuppressRolesEnabled(e),
                  suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
                  muteScheduledEvents:
                    c.default.isMuteScheduledEventsEnabled(e),
                })),
                n = u.default.updateGuildNotificationSettings;
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(l.MenuGroup, {
                    children: [
                      (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "mention",
                        checked: t.suppressEveryone,
                        label:
                          g.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        action: () =>
                          n(
                            e,
                            { suppress_everyone: !t.suppressEveryone },
                            f.NotificationLabel.suppressEveryone(
                              !t.suppressEveryone
                            )
                          ),
                      }),
                      (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "roles",
                        checked: t.suppressRoles,
                        label: g.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        action: () =>
                          n(
                            e,
                            { suppress_roles: !t.suppressRoles },
                            f.NotificationLabel.suppressRoles(!t.suppressRoles)
                          ),
                      }),
                      (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "hightlight",
                        label:
                          g.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        checked: t.highligths === E.HighlightSettings.ENABLED,
                        action: () =>
                          n(
                            e,
                            {
                              notify_highlights:
                                t.highligths === E.HighlightSettings.ENABLED
                                  ? E.HighlightSettings.DISABLED
                                  : E.HighlightSettings.ENABLED,
                            },
                            f.NotificationLabel.highlights(
                              t.highligths !== E.HighlightSettings.ENABLED
                            )
                          ),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(l.MenuGroup, {
                    children: [
                      (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "event",
                        checked: t.muteScheduledEvents,
                        label:
                          g.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        action: () =>
                          n(
                            e,
                            { mute_scheduled_events: !t.muteScheduledEvents },
                            f.NotificationLabel.mutedEvents(
                              !t.muteScheduledEvents
                            )
                          ),
                      }),
                      (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "mobile_push",
                        checked: t.mobilePush,
                        label:
                          g.default.Messages
                            .FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        action: () =>
                          n(
                            e,
                            { mobile_push: !t.mobilePush },
                            f.NotificationLabel.mobilePush(!t.mobilePush)
                          ),
                      }),
                    ],
                  }),
                ],
              });
            })(e),
          ],
        });
      }
    },
    177508: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("412707"),
        u = n("646186"),
        o = n("592407"),
        d = n("148475"),
        r = n("725621"),
        c = n("923959"),
        f = n("49111"),
        E = n("782340");
      function S(e) {
        function t(t) {
          o.default.open(e.id, t);
        }
        let n = (0, s.useStateFromStoresArray)(
            [c.default],
            () => c.default.getChannels(e.id).SELECTABLE,
            [e]
          ),
          S = (0, d.default)(e);
        return __OVERLAY__ || !S
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "guild-settings",
              label: E.default.Messages.SERVER_SETTINGS,
              action: () => t(),
              children: (0, r.getGuildSettingsSections)(e, n).map(n => {
                let { section: s, label: o } = n;
                if (null == o) return null;
                switch (s) {
                  case f.GuildSettingsSections.DELETE:
                    return null;
                  case f.GuildSettingsSections.COMMUNITY:
                    return (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: s,
                        action: () => t(s),
                        label: E.default.Messages.GUILD_SETTINGS_COMMUNITY,
                      },
                      s
                    );
                  case f.GuildSettingsSections.APP_DIRECTORY:
                    return (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: s,
                        action: () => {
                          (0, u.goToAppDirectory)({
                            guildId: e.id,
                            entrypoint: {
                              name: l.ApplicationDirectoryEntrypointNames
                                .GUILD_CONTEXT_MENU,
                            },
                          });
                        },
                        label: o,
                      },
                      s
                    );
                  default:
                    return (0, i.jsx)(
                      a.MenuItem,
                      { id: s, action: () => t(s), label: o },
                      s
                    );
                }
              }),
            });
      }
    },
    263673: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("126501"),
        u = n("282109"),
        o = n("782340");
      function d(e) {
        let t = (0, s.useStateFromStores)(
          [u.default],
          () => u.default.isGuildCollapsed(e),
          [e]
        );
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: o.default.Messages.HIDE_MUTED_CHANNELS,
          action: () => l.default.toggleCollapseGuild(e),
          checked: t,
        });
      }
    },
    835257: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          registerFetchedSupplementals: function () {
            return h;
          },
          JoinSourceType: function () {
            return s;
          },
          getJoinSourceTypeLabel: function () {
            return A;
          },
          getIntegrationLabel: function () {
            return p;
          },
          useGetIntegrationIconString: function () {
            return L;
          },
          fetchMemberSupplemental: function () {
            return U;
          },
        }),
        n("424973");
      var i,
        s,
        a,
        l,
        u,
        o,
        d = n("872717"),
        r = n("819855"),
        c = n("841098"),
        f = n("376556"),
        E = n("572943"),
        S = n("49111"),
        _ = n("782340");
      let g = {};
      function M(e, t) {
        return e + t;
      }
      function N(e, t) {
        return t.map(t => e + t);
      }
      function I(e) {
        return e.split("-")[1];
      }
      ((l = i || (i = {}))[(l.FAILED = 0)] = "FAILED"),
        (l[(l.UNFETCHED = 1)] = "UNFETCHED"),
        (l[(l.PENDING = 2)] = "PENDING"),
        (l[(l.SUCCEEDED = 3)] = "SUCCEEDED"),
        (l[(l.FAILED_NO_RETRY = 4)] = "FAILED_NO_RETRY");
      function T(e, t) {
        e.forEach(e => {
          g[e] = t;
        });
      }
      function h(e, t) {
        t.forEach(t =>
          (function (e, t, n) {
            g[e + t] = 3;
          })(e, t, 3)
        );
      }
      ((u = s || (s = {}))[(u.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (u[(u.BOT = 1)] = "BOT"),
        (u[(u.INTEGRATION = 2)] = "INTEGRATION"),
        (u[(u.DISCOVERY = 3)] = "DISCOVERY"),
        (u[(u.HUB = 4)] = "HUB"),
        (u[(u.INVITE = 5)] = "INVITE"),
        (u[(u.VANITY_URL = 6)] = "VANITY_URL");
      let A = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
          case 1:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
          case 2:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
          case 3:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
          case 4:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
          case 5:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
          case 6:
            if (null != t && !n)
              return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format(
                { vanityUrl: t }
              );
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
          default:
            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN;
        }
      };
      ((o = a || (a = {})).DISCORD = "discord"),
        (o.TWITCH = "twitch"),
        (o.YOUTUBE = "youtube"),
        (o.GUILD_SUBSCRIPTION = "guild_subscription");
      let p = e => {
          switch (e) {
            case "twitch":
              return _.default.Messages
                .MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
            case "youtube":
              return _.default.Messages
                .MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
            default:
              return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
          }
        },
        L = e => {
          let t = f.default.get((0, E.useLegacyPlatformType)(e)),
            n = (0, c.default)();
          return null != t && ["twitch", "youtube"].includes(e)
            ? "url('".concat(
                (0, r.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG,
                "')"
              )
            : null;
        };
      function O(e) {
        return {
          userId: e.user_id,
          sourceInviteCode: e.source_invite_code,
          joinSourceType: e.join_source_type,
          inviterId: e.inviter_id,
          integrationType: e.integration_type,
        };
      }
      async function U(e, t) {
        let n = N(e, t),
          i = n.filter(e => g[e] <= 1).map(I);
        if (0 === i.length) return [];
        T(n, 2);
        try {
          let t = await d.HTTP.post({
            url: S.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
          });
          if (!Array.isArray(t.body)) return T(n, 0), [];
          let s = t.body.map(O),
            a = [];
          s.forEach(e => {
            let { userId: t } = e;
            return a.push(t);
          });
          let l = N(e, a),
            u = i.filter(e => !a.includes(e)),
            o = N(e, u);
          return T(l, 3), T(o, 0), s;
        } catch (e) {
          T(n, 0);
        }
        return [];
      }
    },
    334683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var i = n("884691"),
        s = n("446674"),
        a = n("817963"),
        l = n("923959"),
        u = n("305961"),
        o = n("957255"),
        d = n("49111"),
        r = (e, t) => {
          let n = (0, s.useStateFromStores)(
              [u.default],
              () => u.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: r } = (0, a.useManageResourcePermissions)(n),
            c = (0, s.useStateFromStores)(
              [l.default],
              () => l.default.getChannels(e)[l.GUILD_VOCAL_CHANNELS_KEY],
              [e]
            ),
            f = i.useMemo(
              () =>
                null != t
                  ? c.filter(e => {
                      let { channel: n } = e;
                      return n.type === t;
                    })
                  : c,
              [c, t]
            ),
            E = (0, s.useStateFromStores)(
              [o.default],
              () => {
                if (o.default.can(d.Permissions.ADMINISTRATOR, n) || r)
                  return !0;
                for (let { channel: e } of f) {
                  let { canCreateGuildEvent: t } = (0,
                  a.getManageResourcePermissions)(e);
                  if (t) return !0;
                }
                return !1;
              },
              [f, n, r]
            );
          return E;
        };
    },
    558286: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildEventModalStore: function () {
            return s;
          },
        });
      var i = n("308503");
      let s = (0, i.default)(e => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          e({ canCloseModal: t });
        },
      }));
    },
    503950: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("519705"),
        u = n("282109"),
        o = n("34676"),
        d = n("782340");
      function r(e) {
        let t = (0, s.useStateFromStores)(
          [u.default],
          () => u.default.isMuteScheduledEventsEnabled(e),
          [e]
        );
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "mute-events",
          label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
          action: () => {
            var n;
            return (
              (n = { mute_scheduled_events: !t }),
              void l.default.updateGuildNotificationSettings(
                e,
                n,
                o.NotificationLabel.mutedEvents(n.mute_scheduled_events)
              )
            );
          },
          checked: t,
        });
      }
    },
    842672: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("77078"),
        s = n("244201"),
        a = n("558286"),
        l = n("49111");
      let u = "guild-event-modal";
      var o = () => {
        let e = (0, s.useAppContext)(),
          t =
            e === l.AppContext.POPOUT
              ? i.POPOUT_MODAL_CONTEXT
              : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: u,
          contextKey: t,
          onCloseRequest: () => {
            a.useGuildEventModalStore.getState().canCloseModal &&
              (0, i.closeModal)(u, t);
          },
        };
      };
    },
    148475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("446674"),
        s = n("957255"),
        a = n("49111");
      function l(e) {
        let {
          canManageGuild: t,
          canManageRoles: n,
          canBanMembers: l,
          canManageNicknames: u,
          canCreateEmojisAndStickers: o,
          canManageEmojisAndStickers: d,
          canManageWebhooks: r,
          canViewAuditLog: c,
        } = (0, i.useStateFromStoresObject)(
          [s.default],
          () => ({
            canManageGuild: s.default.can(a.Permissions.MANAGE_GUILD, e),
            canManageRoles: s.default.can(a.Permissions.MANAGE_ROLES, e),
            canBanMembers: s.default.can(a.Permissions.BAN_MEMBERS, e),
            canManageNicknames: s.default.can(
              a.Permissions.MANAGE_NICKNAMES,
              e
            ),
            canCreateEmojisAndStickers: s.default.can(
              a.Permissions.CREATE_GUILD_EXPRESSIONS,
              e
            ),
            canManageEmojisAndStickers: s.default.can(
              a.Permissions.MANAGE_GUILD_EXPRESSIONS,
              e
            ),
            canManageWebhooks: s.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
            canViewAuditLog: s.default.can(a.Permissions.VIEW_AUDIT_LOG, e),
          }),
          [e]
        );
        return t || n || l || u || o || d || r || c;
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return s;
          },
        });
      var i = n("49111");
      function s(e, t, n, s) {
        let a = null != n ? n : t,
          l = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
        return (
          l ||
          (null != t && null != t.vanityURLCode) ||
          (null == s ? void 0 : s.invite_code) != null
        );
      }
    },
    47495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMuteTimeOptions: function () {
            return E;
          },
          filterOverrides: function () {
            return _;
          },
          useShouldUseNewNotificationSystem: function () {
            return g;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("446674"),
        s = n("668597"),
        a = n("282109"),
        l = n("568734"),
        u = n("299039"),
        o = n("640497"),
        d = n("49111"),
        r = n("468200"),
        c = n("397336"),
        f = n("782340");
      function E() {
        return [
          {
            label: f.default.Messages.MUTE_DURATION_15_MINUTES,
            value: r.MuteUntilSeconds.MINUTES_15,
          },
          {
            label: f.default.Messages.MUTE_DURATION_1_HOUR,
            value: r.MuteUntilSeconds.HOURS_1,
          },
          {
            label: f.default.Messages.MUTE_DURATION_3_HOURS,
            value: r.MuteUntilSeconds.HOURS_3,
          },
          {
            label: f.default.Messages.MUTE_DURATION_8_HOURS,
            value: r.MuteUntilSeconds.HOURS_8,
          },
          {
            label: f.default.Messages.MUTE_DURATION_24_HOURS,
            value: r.MuteUntilSeconds.HOURS_24,
          },
          {
            label: f.default.Messages.MUTE_DURATION_ALWAYS,
            value: r.MuteUntilSeconds.ALWAYS,
          },
        ];
      }
      let S = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function _(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
        return u.default.keys(e).filter(n => {
          var i, a;
          let u =
              e[n].message_notifications !== d.UserNotificationSettings.NULL,
            o =
              l.hasFlag(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
              ) ||
              l.hasFlag(
                null !== (a = e[n].flags) && void 0 !== a ? a : 0,
                c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
              );
          return (
            (!t.ignoreUnreadSetting && o) ||
            (!t.ignoreNotificationSetting && u) ||
            (!t.ignoreMute && (0, s.computeIsMuted)(e[n]))
          );
        });
      }
      function g(e) {
        let t = (0, i.useStateFromStores)(
          [a.default],
          () => a.default.useNewNotifications
        );
        return (
          o.NotificationsExperiment.useExperiment(
            { location: e },
            { autoTrackExposure: !1 }
          ).enabled && t
        );
      }
    },
    277796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          withGuildUnreadFlags: function () {
            return a;
          },
          resetChannelUnreadFlags: function () {
            return l;
          },
          withChannelUnreadFlags: function () {
            return u;
          },
        });
      var i = n("568734"),
        s = n("397336");
      function a(e, t) {
        var n;
        return i.addFlag(
          ((n = e),
          i.removeFlags(
            n,
            s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
            s.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
          )),
          t
        );
      }
      let l = e =>
        i.removeFlags(
          e,
          s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES,
          s.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
        );
      function u(e, t) {
        return i.addFlag(l(e), t);
      }
    },
    546770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateGuildPreset: function () {
            return r;
          },
        }),
        n("65597");
      var i = n("519705"),
        s = n("282109"),
        a = n("34676"),
        l = n("277796"),
        u = n("507313"),
        o = n("49111"),
        d = n("397336");
      function r(e, t) {
        let n = s.default.getGuildFlags(e);
        t === u.Presets.ALL_MESSAGES
          ? i.default.updateGuildNotificationSettings(
              e,
              {
                message_notifications: o.UserNotificationSettings.ALL_MESSAGES,
                flags: (0, l.withGuildUnreadFlags)(
                  n,
                  d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                ),
              },
              a.NotificationLabels.PresetAll
            )
          : t === u.Presets.MENTIONS
            ? i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications:
                    o.UserNotificationSettings.ONLY_MENTIONS,
                  flags: (0, l.withGuildUnreadFlags)(
                    n,
                    d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                a.NotificationLabels.PresetMentions
              )
            : t === u.Presets.NOTHING &&
              i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: o.UserNotificationSettings.NO_MESSAGES,
                  flags: (0, l.withGuildUnreadFlags)(
                    n,
                    d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                a.NotificationLabels.PresetNothing
              );
      }
    },
    433487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("304983"),
        l = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: s,
                className: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          a.MoreHorizontalIcon,
          void 0,
          { size: 24 }
        );
    },
    155207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("811513"),
        l = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  className: a,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: a,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: a,
                  fill: s,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, i.jsx)("path", {
                  className: a,
                  fill: s,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          a.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    76539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        a = n("715072"),
        l = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: a,
              ...u
            } = e;
            return 16 === t || 16 === n
              ? (0, i.jsxs)("svg", {
                  ...(0, l.default)(u),
                  width: t,
                  height: n,
                  viewBox: "0 0 16 16",
                  children: [
                    (0, i.jsx)("path", {
                      className: a,
                      fill: s,
                      d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z",
                    }),
                    (0, i.jsx)("path", {
                      className: a,
                      fill: s,
                      d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z",
                    }),
                    (0, i.jsx)("path", {
                      className: a,
                      fill: s,
                      d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z",
                    }),
                  ],
                })
              : (0, i.jsx)("svg", {
                  ...(0, l.default)(u),
                  width: t,
                  height: n,
                  viewBox: "0 0 24 24",
                  children: (0, i.jsx)("path", {
                    className: a,
                    fill: s,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z",
                  }),
                });
          },
          a.UserPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    713573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("414456"),
        a = n.n(s),
        l = n("77078"),
        u = n("451914"),
        o = n("548122");
      let d = Object.freeze({
          SIZE_10: o.size10,
          SIZE_12: o.size12,
          SIZE_14: o.size14,
          SIZE_16: o.size16,
          SIZE_20: o.size20,
          SIZE_24: o.size24,
          SIZE_32: o.size32,
        }),
        r = e => {
          let {
            id: t,
            muted: n = !1,
            className: s = u.wrapper,
            size: o = d.SIZE_14,
            selectable: r = !1,
            children: c,
            color: f,
            onClick: E,
            onContextMenu: S,
            style: _,
            title: g,
            uppercase: M,
          } = e;
          return (0, i.jsx)(l.H, {
            role: null != E ? "button" : void 0,
            onClick: E,
            onContextMenu: S,
            id: t,
            className: a(s, {
              [u.base]: !0,
              [o]: !0,
              [u.selectable]: r,
              [u.muted]: n,
              [u.uppercase]: M,
            }),
            title: g,
            style: null != f ? { ..._, color: f } : _,
            children: c,
          });
        };
      r.Sizes = d;
      var c = r;
    },
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: u,
          }),
        });
      };
    },
    560797: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LockUnlockedIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    541742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MoreHorizontalIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=f4a2d91dfd77c56c1d9a.js.map
