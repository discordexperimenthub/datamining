(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99898"],
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
    263436: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("560797");
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
            return h;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var s = n("866227"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        d = n("820542"),
        o = n("519705"),
        r = n("319165"),
        c = n("282109"),
        f = n("34676"),
        S = n("679653"),
        E = n("49111"),
        g = n("468200"),
        _ = n("782340");
      let M = () => [
          {
            value: g.MuteUntilSeconds.MINUTES_15,
            label: _.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: g.MuteUntilSeconds.HOURS_1,
            label: _.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: g.MuteUntilSeconds.HOURS_3,
            label: _.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: g.MuteUntilSeconds.HOURS_8,
            label: _.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: g.MuteUntilSeconds.HOURS_24,
            label: _.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: g.MuteUntilSeconds.ALWAYS,
            label: _.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        N = e => {
          let t = e > 0 ? a().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function h(e, t) {
        let [n, s] = (0, l.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          a = (0, r.useMutedUntilText)(s),
          g = (0, S.default)(e, !0);
        function h(t) {
          t &&
            e.type === E.ChannelTypes.GUILD_CATEGORY &&
            (0, d.categoryCollapse)(e.id),
            o.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let I = _.default.Messages.MUTE_CHANNEL_GENERIC,
          A = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case E.ChannelTypes.GUILD_CATEGORY:
            (I = _.default.Messages.MUTE_CATEGORY),
              (A = _.default.Messages.UNMUTE_CATEGORY);
            break;
          case E.ChannelTypes.GROUP_DM:
            (I = _.default.Messages.MUTE_CONVERSATION),
              (A = _.default.Messages.UNMUTE_CONVERSATION);
            break;
          case E.ChannelTypes.DM:
            (I = _.default.Messages.MUTE_CHANNEL.format({ name: g })),
              (A = _.default.Messages.UNMUTE_CHANNEL.format({ name: g }));
            break;
          default:
            (I = _.default.Messages.MUTE_CHANNEL_GENERIC),
              (A = _.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, i.jsx)(u.MenuItem, {
              id: "unmute-channel",
              label: A,
              subtext: a,
              action: () => h(!1),
            })
          : (0, i.jsx)(u.MenuItem, {
              id: "mute-channel",
              label: I,
              action: () => h(!0),
              children: M().map(n => {
                let { value: s, label: a } = n;
                return (0, i.jsx)(
                  u.MenuItem,
                  {
                    id: "".concat(s),
                    label: a,
                    action: () =>
                      (function (n) {
                        e.type === E.ChannelTypes.GUILD_CATEGORY &&
                          (0, d.categoryCollapse)(e.id);
                        let i = N(n);
                        o.default.updateChannelOverrideSettings(
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
            return E;
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
        d = n("923959"),
        o = n("660478"),
        r = n("599110"),
        c = n("299039"),
        f = n("49111"),
        S = n("133335");
      function E(e, t, n) {
        let i = s
          .flatMap(e, e => {
            let t = d.default.getSelectableChannelIds(e),
              n = d.default.getVocalChannelIds(e),
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
            readStateType: S.ReadStateTypes.CHANNEL,
            messageId: o.default.lastMessageId(e),
          }));
        return (
          e.forEach(e => {
            i.push({
              channelId: c.default.cast(e),
              readStateType: S.ReadStateTypes.GUILD_EVENT,
              messageId: o.default.lastMessageId(
                e,
                S.ReadStateTypes.GUILD_EVENT
              ),
            }),
              i.push({
                channelId: c.default.cast(e),
                readStateType: S.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
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
            return v;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("627445"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        d = n("272030"),
        o = n("812204"),
        r = n("685665"),
        c = n("861370"),
        f = n("255812"),
        S = n("47495"),
        E = n("724026"),
        g = n("271938"),
        _ = n("923959"),
        M = n("697218"),
        N = n("578411"),
        h = n("230947"),
        I = n("544955"),
        A = n("747867"),
        T = n("555914"),
        L = n("513472"),
        p = n("527660"),
        O = n("823772"),
        U = n("177508"),
        m = n("263673"),
        G = n("58622"),
        R = n("49111"),
        C = n("782340");
      function b(e) {
        let { guild: t, onSelect: s, hideSettings: o } = e,
          r = t.id,
          b = _.default.getDefaultChannel(r),
          v = (0, l.useStateFromStores)(
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
          x = (0, G.default)({
            guild: t,
            source: R.InstantInviteSources.GUILD_CONTEXT_MENU,
            channel: b,
          }),
          j = (0, m.default)(r),
          y = (0, L.default)(t),
          F = (0, p.default)(t),
          D = (0, U.default)(t),
          P = (0, h.default)({
            guildId: t.id,
            userId: g.default.getId(),
            analyticsLocation: {
              page: R.AnalyticsPages.GUILD_CHANNEL,
              section: R.AnalyticsSections.CHAT_USERNAME,
              object: R.AnalyticsObjects.CONTEXT_MENU_ITEM,
            },
          }),
          H = (0, I.default)(t),
          k = (0, f.default)(t.id),
          Y = (0, c.default)({
            id: t.id,
            label: C.default.Messages.COPY_ID_GUILD,
          }),
          V = (0, T.default)(t, { section: R.AnalyticsSections.GUILD_LIST }),
          B = (0, E.default)(t.id),
          w = (0, O.default)(t.id),
          X = (0, A.default)(t),
          W = (0, S.useShouldUseNewNotificationSystem)("GuildContextMenu"),
          z = t.hasFeature(R.GuildFeatures.HUB);
        function Z() {
          (0, u.openModal)(e =>
            (0, i.jsx)(N.GuildLeaveConfirmModalContents, { ...e, guild: t })
          );
        }
        return z
          ? (0, i.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: d.closeContextMenu,
              "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    x,
                    (0, i.jsx)(u.MenuItem, {
                      id: "privacy",
                      label: C.default.Messages.HUB_PRIVACY_SETTINGS,
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
                v
                  ? null
                  : (0, i.jsx)(u.MenuGroup, {
                      children: (0, i.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: C.default.Messages.LEAVE_HUB,
                        action: Z,
                        color: "danger",
                      }),
                    }),
                (0, i.jsx)(u.MenuGroup, { children: Y }),
              ],
            })
          : (0, i.jsxs)(u.Menu, {
              navId: "guild-context",
              onClose: d.closeContextMenu,
              "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, i.jsx)(u.MenuGroup, { children: V }),
                (0, i.jsx)(u.MenuGroup, { children: x }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    y,
                    W || __OVERLAY__ ? null : F,
                    W && !__OVERLAY__ ? w : null,
                    j,
                    B,
                  ],
                }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    o ? null : D,
                    __OVERLAY__
                      ? null
                      : (0, i.jsx)(u.MenuItem, {
                          id: "privacy",
                          label: C.default.Messages.PRIVACY_SETTINGS,
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
                (0, i.jsxs)(u.MenuGroup, { children: [H, k] }),
                (0, i.jsxs)(u.MenuGroup, {
                  children: [
                    X,
                    !v &&
                      (0, i.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: C.default.Messages.LEAVE_SERVER,
                        action: Z,
                        color: "danger",
                      }),
                  ],
                }),
                (0, i.jsx)(u.MenuGroup, { children: Y }),
              ],
            });
      }
      function v(e) {
        let { analyticsLocations: t } = (0, r.default)(o.default.CONTEXT_MENU);
        return (0, i.jsx)(r.AnalyticsLocationProvider, {
          value: t,
          children: (0, i.jsx)(b, { ...e }),
        });
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
        d = n("695838"),
        o = n("782340");
      function r(e) {
        let t = (0, s.useStateFromStores)([l.default], () =>
          l.default.can(u.Permissions.MANAGE_CHANNELS, e)
        );
        return __OVERLAY__
          ? null
          : e.id === d.FAVORITES_RAW_GUILD_ID
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.MenuItem, {
                  id: "create-category",
                  label: o.default.Messages.CREATE_CATEGORY,
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
                      label: o.default.Messages.CREATE_CHANNEL,
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
                      label: o.default.Messages.CREATE_CATEGORY,
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
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("952451"),
        u = n("542827"),
        d = n("782340");
      function o(e, t) {
        let n = e.id,
          o = (0, s.useStateFromStores)(
            [l.default],
            () => l.default.getGuildHasUnreadIgnoreMuted(n),
            [n]
          );
        return (0, i.jsx)(a.MenuItem, {
          id: "mark-guild-read",
          label: d.default.Messages.MARK_AS_READ,
          icon: void 0,
          action: () => (0, u.default)([n], t.section),
          disabled: !o,
        });
      }
    },
    513472: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("866227"),
        a = n.n(s),
        l = n("446674"),
        u = n("77078"),
        d = n("519705"),
        o = n("531674"),
        r = n("319165"),
        c = n("282109"),
        f = n("34676"),
        S = n("782340");
      function E(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: s, muteConfig: E } = (0, l.useStateFromStoresObject)(
            [c.default],
            () => ({
              muted: null != n ? c.default.isMuted(n) : void 0,
              muteConfig: null != n ? c.default.getMuteConfig(n) : void 0,
            }),
            [n]
          ),
          g = (0, r.useMutedUntilText)(E);
        return null == n
          ? null
          : s
            ? (0, i.jsx)(u.MenuItem, {
                id: "unmute-guild",
                label: S.default.Messages.UNMUTE_SERVER,
                subtext: g,
                action: () =>
                  d.default.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.NotificationLabels.Unmuted
                  ),
              })
            : (0, i.jsx)(u.MenuItem, {
                id: "mute-guild",
                label: S.default.Messages.MUTE_SERVER,
                action: () =>
                  d.default.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.NotificationLabels.Muted
                  ),
                children: (0, o.getMuteTimes)().map(e => {
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
                          d.default.updateGuildNotificationSettings(
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
            return S;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("519705"),
        u = n("503950"),
        d = n("282109"),
        o = n("34676"),
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
      function S(e) {
        var t, S;
        let E = (function (e) {
            let {
                suppressEveryone: t,
                suppressRoles: n,
                mobilePush: S,
                messageNotifications: E,
                notifyHighlights: g,
              } = (0, s.useStateFromStoresObject)(
                [d.default],
                () => ({
                  suppressEveryone: d.default.isSuppressEveryoneEnabled(e.id),
                  suppressRoles: d.default.isSuppressRolesEnabled(e.id),
                  mobilePush: d.default.isMobilePushEnabled(e.id),
                  messageNotifications: d.default.getMessageNotifications(e.id),
                  notifyHighlights: d.default.getNotifyHighlights(e.id),
                }),
                [e.id]
              ),
              _ = g === r.HighlightSettings.DISABLED,
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
                            o.NotificationLabel.notifications(t)
                          ),
                        checked: t === E,
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
                          o.NotificationLabel.suppressEveryone(!t)
                        ),
                      checked: t,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-roles",
                      label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                      action: () =>
                        N(
                          { suppress_roles: !n },
                          o.NotificationLabel.suppressRoles(!n)
                        ),
                      checked: n,
                    }),
                    (0, i.jsx)(a.MenuCheckboxItem, {
                      id: "suppress-highlights",
                      label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                      action: () => {
                        N(
                          {
                            notify_highlights: _
                              ? r.HighlightSettings.ENABLED
                              : r.HighlightSettings.DISABLED,
                          },
                          o.NotificationLabel.highlights(_)
                        );
                      },
                      checked: _,
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
                        { mobile_push: !S },
                        o.NotificationLabel.mobilePush(!S)
                      ),
                    checked: S,
                  }),
                }),
              ],
            });
          })(e),
          g = (0, s.useStateFromStores)(
            [d.default],
            () => d.default.getMessageNotifications(e.id),
            [e.id]
          ),
          _ =
            null === (S = f()) || void 0 === S
              ? void 0
              : null ===
                    (t = S.find(e => {
                      let { setting: t } = e;
                      return t === g;
                    })) || void 0 === t
                ? void 0
                : t.label;
        return null != E
          ? (0, i.jsx)(a.MenuItem, {
              id: "guild-notifications",
              label: c.default.Messages.NOTIFICATION_SETTINGS,
              subtext: _,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("747593")
                    .then(n.bind(n, "747593"));
                  return n => (0, i.jsx)(t, { ...n, guildId: e.id });
                }),
              children: E,
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
        d = n("277796"),
        o = n("546770"),
        r = n("507313"),
        c = n("282109"),
        f = n("34676"),
        S = n("49111"),
        E = n("133335"),
        g = n("397336"),
        _ = n("782340");
      function M(e) {
        return (0, i.jsxs)(l.MenuItem, {
          id: "notification",
          label: _.default.Messages.NOTIFICATIONS,
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
                h = (0, a.useStateFromStores)([c.default], () =>
                  c.default.getGuildUnreadSetting(e)
                ),
                I = (0, a.useStateFromStores)([c.default], () =>
                  c.default.getMessageNotifications(e)
                ),
                A = M ? r.Presets.CUSTOM : (0, r.presetFromSettings)(h, I),
                T = t => {
                  N(!1);
                  let n = { message_notifications: t };
                  t === S.UserNotificationSettings.ALL_MESSAGES &&
                    h !== E.UnreadSetting.ALL_MESSAGES &&
                    (n.flags = (0, d.withGuildUnreadFlags)(
                      c.default.getGuildFlags(e),
                      g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                    )),
                    u.default.updateGuildNotificationSettings(
                      e,
                      n,
                      f.NotificationLabel.notifications(t)
                    );
                },
                L = t => {
                  N(!1);
                  let n = c.default.getGuildFlags(e);
                  u.default.updateGuildNotificationSettings(
                    e,
                    {
                      flags: (0, d.withGuildUnreadFlags)(
                        n,
                        t === E.UnreadSetting.ALL_MESSAGES
                          ? g.GuildNotificationSettingsFlags
                              .UNREADS_ALL_MESSAGES
                          : g.GuildNotificationSettingsFlags
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
                        checked: A === r.Presets.ALL_MESSAGES,
                        label: _.default.Messages.NOTIFICATION_PRESET_1,
                        action: () => (
                          (0, o.updateGuildPreset)(e, r.Presets.ALL_MESSAGES),
                          N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "essentials",
                        group: "notification-preset",
                        checked: A === r.Presets.MENTIONS,
                        label: _.default.Messages.NOTIFICATION_PRESET_2,
                        action: () => (
                          (0, o.updateGuildPreset)(e, r.Presets.MENTIONS), N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "nothing",
                        group: "notification-preset",
                        checked: A === r.Presets.NOTHING,
                        label: _.default.Messages.NOTIFICATION_PRESET_3,
                        action: () => (
                          (0, o.updateGuildPreset)(e, r.Presets.NOTHING), N(!1)
                        ),
                      }),
                      (0, i.jsx)(l.MenuRadioItem, {
                        id: "custom",
                        group: "notification-preset",
                        checked: A === r.Presets.CUSTOM,
                        action: () => (n(!0), N(!0)),
                        label: _.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                      }),
                    ],
                  }),
                  (A === r.Presets.CUSTOM || t) &&
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
                                checked: h === E.UnreadSetting.ALL_MESSAGES,
                                label:
                                  _.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                action: () => L(E.UnreadSetting.ALL_MESSAGES),
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                id: "unread_setting_mention_only",
                                group: "unread_setting",
                                checked: h === E.UnreadSetting.ONLY_MENTIONS,
                                label:
                                  _.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => L(E.UnreadSetting.ONLY_MENTIONS),
                                disabled:
                                  h !== E.UnreadSetting.ONLY_MENTIONS &&
                                  I === S.UserNotificationSettings.ALL_MESSAGES,
                                subtext:
                                  h !== E.UnreadSetting.ONLY_MENTIONS &&
                                  I === S.UserNotificationSettings.ALL_MESSAGES
                                    ? _.default.Messages
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
                            label: _.default.Messages.NOTIFICATIONS,
                            children: [
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything",
                                label:
                                  _.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                checked:
                                  I === S.UserNotificationSettings.ALL_MESSAGES,
                                action: () =>
                                  T(S.UserNotificationSettings.ALL_MESSAGES),
                                subtext:
                                  h !== E.UnreadSetting.ALL_MESSAGES &&
                                  I !== S.UserNotificationSettings.ALL_MESSAGES
                                    ? _.default.Messages
                                        .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                                    : void 0,
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_mention",
                                checked:
                                  I ===
                                  S.UserNotificationSettings.ONLY_MENTIONS,
                                label:
                                  _.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () =>
                                  T(S.UserNotificationSettings.ONLY_MENTIONS),
                              }),
                              (0, i.jsx)(l.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_nothing",
                                label:
                                  _.default.Messages
                                    .NOTIFICATION_SETTINGS_PRESETS_NONE,
                                checked:
                                  I === S.UserNotificationSettings.NO_MESSAGES,
                                action: () =>
                                  T(S.UserNotificationSettings.NO_MESSAGES),
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
                          _.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
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
                        label: _.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
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
                          _.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        checked: t.highligths === S.HighlightSettings.ENABLED,
                        action: () =>
                          n(
                            e,
                            {
                              notify_highlights:
                                t.highligths === S.HighlightSettings.ENABLED
                                  ? S.HighlightSettings.DISABLED
                                  : S.HighlightSettings.ENABLED,
                            },
                            f.NotificationLabel.highlights(
                              t.highligths !== S.HighlightSettings.ENABLED
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
                          _.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
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
                          _.default.Messages
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
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("412707"),
        u = n("646186"),
        d = n("592407"),
        o = n("148475"),
        r = n("725621"),
        c = n("923959"),
        f = n("49111"),
        S = n("782340");
      function E(e) {
        function t(t) {
          d.default.open(e.id, t);
        }
        let n = (0, s.useStateFromStoresArray)(
            [c.default],
            () => c.default.getChannels(e.id).SELECTABLE,
            [e]
          ),
          E = (0, o.default)(e);
        return __OVERLAY__ || !E
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "guild-settings",
              label: S.default.Messages.SERVER_SETTINGS,
              action: () => t(),
              children: (0, r.getGuildSettingsSections)(e, n).map(n => {
                let { section: s, label: d } = n;
                if (null == d) return null;
                switch (s) {
                  case f.GuildSettingsSections.DELETE:
                    return null;
                  case f.GuildSettingsSections.COMMUNITY:
                    return (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: s,
                        action: () => t(s),
                        label: S.default.Messages.GUILD_SETTINGS_COMMUNITY,
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
                        label: d,
                      },
                      s
                    );
                  default:
                    return (0, i.jsx)(
                      a.MenuItem,
                      { id: s, action: () => t(s), label: d },
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
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("446674"),
        a = n("77078"),
        l = n("126501"),
        u = n("282109"),
        d = n("782340");
      function o(e) {
        let t = (0, s.useStateFromStores)(
          [u.default],
          () => u.default.isGuildCollapsed(e),
          [e]
        );
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: d.default.Messages.HIDE_MUTED_CHANNELS,
          action: () => l.default.toggleCollapseGuild(e),
          checked: t,
        });
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
        d = n("957255"),
        o = n("49111"),
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
            S = (0, s.useStateFromStores)(
              [d.default],
              () => {
                if (d.default.can(o.Permissions.ADMINISTRATOR, n) || r)
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
          return S;
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
        d = n("34676"),
        o = n("782340");
      function r(e) {
        let t = (0, s.useStateFromStores)(
          [u.default],
          () => u.default.isMuteScheduledEventsEnabled(e),
          [e]
        );
        return (0, i.jsx)(a.MenuCheckboxItem, {
          id: "mute-events",
          label: o.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
          action: () => {
            var n;
            return (
              (n = { mute_scheduled_events: !t }),
              void l.default.updateGuildNotificationSettings(
                e,
                n,
                d.NotificationLabel.mutedEvents(n.mute_scheduled_events)
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
            return d;
          },
        });
      var i = n("77078"),
        s = n("244201"),
        a = n("558286"),
        l = n("49111");
      let u = "guild-event-modal";
      var d = () => {
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
          canCreateEmojisAndStickers: d,
          canManageEmojisAndStickers: o,
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
        return t || n || l || u || d || o || r || c;
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
            return S;
          },
          filterOverrides: function () {
            return g;
          },
          useShouldUseNewNotificationSystem: function () {
            return _;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("446674"),
        s = n("668597"),
        a = n("282109"),
        l = n("568734"),
        u = n("299039"),
        d = n("640497"),
        o = n("49111"),
        r = n("468200"),
        c = n("397336"),
        f = n("782340");
      function S() {
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
      let E = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return u.default.keys(e).filter(n => {
          var i, a;
          let u =
              e[n].message_notifications !== o.UserNotificationSettings.NULL,
            d =
              l.hasFlag(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
              ) ||
              l.hasFlag(
                null !== (a = e[n].flags) && void 0 !== a ? a : 0,
                c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
              );
          return (
            (!t.ignoreUnreadSetting && d) ||
            (!t.ignoreNotificationSetting && u) ||
            (!t.ignoreMute && (0, s.computeIsMuted)(e[n]))
          );
        });
      }
      function _(e) {
        let t = (0, i.useStateFromStores)(
          [a.default],
          () => a.default.useNewNotifications
        );
        return (
          d.NotificationsExperiment.useExperiment(
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
        d = n("49111"),
        o = n("397336");
      function r(e, t) {
        let n = s.default.getGuildFlags(e);
        t === u.Presets.ALL_MESSAGES
          ? i.default.updateGuildNotificationSettings(
              e,
              {
                message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                flags: (0, l.withGuildUnreadFlags)(
                  n,
                  o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                ),
              },
              a.NotificationLabels.PresetAll
            )
          : t === u.Presets.MENTIONS
            ? i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications:
                    d.UserNotificationSettings.ONLY_MENTIONS,
                  flags: (0, l.withGuildUnreadFlags)(
                    n,
                    o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                a.NotificationLabels.PresetMentions
              )
            : t === u.Presets.NOTHING &&
              i.default.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                  flags: (0, l.withGuildUnreadFlags)(
                    n,
                    o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                  ),
                },
                a.NotificationLabels.PresetNothing
              );
      }
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
          ...d
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(d),
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
  },
]);
//# sourceMappingURL=2bbf6e1a7db5408c032a.js.map
