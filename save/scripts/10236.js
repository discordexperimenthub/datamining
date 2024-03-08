(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10236"],
  {
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return l;
          },
          categoryExpand: function () {
            return i;
          },
          categoryCollapseAll: function () {
            return u;
          },
          categoryExpandAll: function () {
            return r;
          },
        });
      var a = n("913144");
      function l(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function i(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function u(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function r(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    18054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          init: function () {
            return o;
          },
          close: function () {
            return f;
          },
          setSection: function () {
            return c;
          },
          updateChannel: function () {
            return _;
          },
          saveChannel: function () {
            return E;
          },
          deleteChannel: function () {
            return S;
          },
          default: function () {
            return T;
          },
        }),
        n("702976");
      var a = n("872717"),
        l = n("913144"),
        i = n("81732");
      n("21121"), n("693051");
      var u = n("263024");
      n("492114");
      var r = n("42203"),
        d = n("54239"),
        s = n("49111");
      function o(e, t, n) {
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function f() {
        l.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function c(e) {
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_SET_SECTION",
          section: e,
        });
      }
      function _(e) {
        let {
          name: t,
          type: n,
          topic: a,
          bitrate: i,
          userLimit: u,
          nsfw: r,
          flags: d,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: h,
          invitable: N,
          availableTags: C,
          defaultSortOrder: g,
          defaultForumLayout: M,
          iconEmoji: A,
          themeColor: I,
        } = e;
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: i,
          userLimit: u,
          nsfw: r,
          flags: d,
          rateLimitPerUser: s,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: S,
          autoArchiveDuration: T,
          locked: h,
          invitable: N,
          availableTags: C,
          defaultSortOrder: g,
          defaultForumLayout: M,
          iconEmoji: A,
          themeColor: I,
        });
      }
      async function E(e, t) {
        let {
            name: n,
            type: d,
            position: o,
            topic: f,
            bitrate: c,
            userLimit: _,
            nsfw: E,
            flags: S,
            permissionOverwrites: T,
            rateLimitPerUser: h,
            defaultThreadRateLimitPerUser: N,
            defaultAutoArchiveDuration: C,
            template: g,
            defaultReactionEmoji: M,
            rtcRegion: A,
            videoQualityMode: I,
            autoArchiveDuration: m,
            locked: p,
            invitable: U,
            availableTags: O,
            defaultSortOrder: v,
            defaultForumLayout: L,
            iconEmoji: G,
            themeColor: R,
          } = t,
          F = r.default.getChannel(e);
        return (
          l.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.default.unarchiveThreadIfNecessary(e),
          a.default
            .patch({
              url: s.Endpoints.CHANNEL(e),
              body: {
                name: n,
                type: d,
                position: o,
                topic: f,
                bitrate: c,
                user_limit: _,
                nsfw: E,
                flags: S,
                permission_overwrites: T,
                rate_limit_per_user: h,
                default_thread_rate_limit_per_user: N,
                default_auto_archive_duration: C,
                template: g,
                rtc_region: A,
                video_quality_mode: I,
                auto_archive_duration: m,
                locked: p,
                invitable: U,
                default_reaction_emoji:
                  null != M
                    ? {
                        emoji_id: null == M ? void 0 : M.emojiId,
                        emoji_name: null == M ? void 0 : M.emojiName,
                      }
                    : null === M
                      ? null
                      : void 0,
                available_tags:
                  null == O
                    ? void 0
                    : O.map(e => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: v,
                default_forum_layout: L,
                icon_emoji:
                  null != G
                    ? { id: G.id, name: G.name }
                    : null === G
                      ? null
                      : void 0,
                theme_color: R,
              },
              oldFormErrors: !0,
            })
            .then(
              t => {
                l.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == F ? void 0 : F.getGuildId();
                return (
                  null != n &&
                    !(null == F ? void 0 : F.isThread()) &&
                    i.default.checkGuildTemplateDirty(n),
                  t
                );
              },
              e => (
                l.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              )
            )
        );
      }
      function S(e) {
        let t = r.default.getChannel(e);
        a.default
          .delete({ url: s.Endpoints.CHANNEL(e), oldFormErrors: !0 })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              i.default.checkGuildTemplateDirty(e),
              f();
          });
      }
      var T = {
        init: o,
        open: function (e, t, n) {
          o(e, t, n), (0, d.pushLayer)(s.Layers.CHANNEL_SETTINGS);
        },
        close: f,
        setSection: c,
        selectPermissionOverwrite: function (e) {
          l.default.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: _,
        saveChannel: E,
        deleteChannel: S,
        updateVoiceChannelStatus: function (e, t) {
          return a.default.put({
            url: s.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
      };
    },
    519705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007"),
        n("702976");
      var a = n("872717"),
        l = n("819855"),
        i = n("913144"),
        u = n("679428"),
        r = n("282109"),
        d = n("568734"),
        s = n("34676"),
        o = n("299039"),
        f = n("49111"),
        c = n("397336"),
        _ = n("782340"),
        E = {
          open(e) {
            i.default.dispatch({
              type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
              guildId: e,
            });
          },
          close() {
            i.default.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
          },
          updateGuildNotificationSettings(e, t, n, a) {
            let l = (0, s.getCurrentGuildSettings)(e);
            u.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, s.trackGuildNotificationSettingsUpdate)(e, t, l, n, a);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, a) {
            let l = o.default.keys(t.channel_overrides),
              r = (0, s.getCurrentGuildSettings)(e),
              d = (0, s.getManyCurrentChannelSettings)(e, l);
            u.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, s.trackGuildNotificationSettingsUpdate)(e, t, r, n, a),
              o.default.keys(t.channel_overrides).forEach(l => {
                let i = d.get(l);
                (0, s.trackChannelNotificationSettingsUpdate)(
                  e,
                  l,
                  t.channel_overrides[l],
                  i,
                  n,
                  a
                );
              });
          },
          updateGuildNotificationSettingsBulk(e, t, n) {
            let a = o.default.keys(e),
              l = (0, s.getManyCurrentGuildSettings)(a);
            u.default.saveUserGuildSettingsBulk(e),
              o.default.entries(e).forEach(e => {
                let [a, u] = e,
                  r = l.get(a);
                i.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: a,
                  settings: u,
                }),
                  (0, s.trackGuildNotificationSettingsUpdate)(a, u, r, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, a, r) {
            let d = (0, s.getCurrentChannelSettings)(e, t);
            u.default.saveUserGuildSettings(e, {
              channel_overrides: { [t]: n },
            }),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
              }),
              l.AccessibilityAnnouncer.announce(
                _.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED
              ),
              (0, s.trackChannelNotificationSettingsUpdate)(e, t, n, d, a, r);
          },
          updateChannelOverrideSettingsBulk(e, t, n, a) {
            let l = o.default.keys(t),
              r = (0, s.getManyCurrentChannelSettings)(e, l);
            u.default.saveUserGuildSettings(e, { channel_overrides: t }),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              o.default
                .keys(t)
                .forEach(l =>
                  (0, s.trackChannelNotificationSettingsUpdate)(
                    e,
                    l,
                    t[l],
                    r.get(l),
                    n,
                    a
                  )
                );
          },
          setForumThreadsCreated(e, t) {
            let n = t
                ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON
                : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
              a = t
                ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF
                : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
              l = r.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { flags: (l & ~a) | n },
              s.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = r.default.accountNotificationSettings.flags,
              l = (0, d.setFlag)(n, e, t);
            await a.default.patch({
              url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
              body: { flags: l },
            }),
              await i.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: l },
              });
          },
        };
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("685665");
      function i(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: i } = (0, l.default)(t);
          return (0, a.jsx)(i, { children: (0, a.jsx)(e, { ...n }) });
        };
      }
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("35466");
      n.es(a, t);
    },
    549990: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanGuildFeedFeatureChannel: function () {
            return f;
          },
        });
      var a = n("316693"),
        l = n("446674"),
        i = n("886484"),
        u = n("677315"),
        r = n("305961"),
        d = n("957255"),
        s = n("49111");
      let o = a.default.combine(
        s.Permissions.VIEW_CHANNEL,
        s.Permissions.MANAGE_MESSAGES,
        s.Permissions.READ_MESSAGE_HISTORY
      );
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.getGuildId(),
          a = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.can(o, e),
            [e]
          ),
          f = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.getGuild(n),
            [n]
          ),
          c = (0, u.useGuildHomeExperiment)(f, !1);
        return (
          !!(
            a &&
            null !== n &&
            c &&
            ((null != e.parentChannelThreadType &&
              s.ChannelTypesSets.GUILD_THREADS_ONLY.has(
                e.parentChannelThreadType
              )) ||
              t) &&
            (0, i.isChannelAvailableInGuildFeed)(e)
          ) || !1
        );
      }
    },
    994827: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("272030"),
        u = n("158534"),
        r = n("812204"),
        d = n("861370"),
        s = n("972701"),
        o = n("30874"),
        f = n("458574"),
        c = n("308798"),
        _ = n("44141"),
        E = n("530101"),
        S = n("646240"),
        T = n("13777"),
        h = n("37774"),
        N = n("117399"),
        C = n("400501"),
        g = n("542640"),
        M = n("255228"),
        A = n("772371"),
        I = n("604656"),
        m = n("782340"),
        p = (0, u.default)(
          function (e) {
            let { channel: t, onSelect: n } = e,
              u = (0, f.default)(t),
              r = (0, _.default)(t),
              p = (0, M.default)(t),
              U = (0, o.default)(t),
              O = (0, h.default)(t),
              v = (0, c.default)(t),
              L = (0, d.default)({
                id: t.id,
                label: m.default.Messages.COPY_ID_THREAD,
              }),
              G = (0, S.default)(t, "Context Menu"),
              R = (0, N.default)(t),
              F = (0, A.default)(t),
              y = (0, C.default)(t),
              D = (0, g.default)(t.id),
              b = (0, T.default)(t),
              H = (0, I.default)(t),
              P = (0, E.default)(t, { hoist: !0 }),
              x = (0, s.useAddToFavoritesItem)(t),
              j = (0, s.useRemoveFromFavoritesItem)(t);
            return (0, a.jsxs)(l.Menu, {
              navId: "thread-context",
              onClose: i.closeContextMenu,
              "aria-label": m.default.Messages.THREAD_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [r, x] },
                  "mark-as-read-or-favorite"
                ),
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [G, b, U, O, y, D, u] },
                  "thread-actions"
                ),
                (0, a.jsxs)(l.MenuGroup, { children: [p, F] }, "notifications"),
                (0, a.jsx)(l.MenuGroup, { children: j }),
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [H, P, R, v] },
                  "admin-actions"
                ),
                (0, a.jsx)(l.MenuGroup, { children: L }, "developer-actions"),
              ],
            });
          },
          [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_THREAD_MENU]
        );
    },
    44141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("267363"),
        r = n("680986"),
        d = n("689275"),
        s = n("755624"),
        o = n("233069"),
        f = n("245997"),
        c = n("660478"),
        _ = n("49111"),
        E = n("782340");
      function S(e) {
        let t = (function (e) {
          let t = (0, r.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, l.useStateFromStores)(
              [c.default, f.default, d.default, s.default],
              () => {
                if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                if (e.type !== _.ChannelTypes.GUILD_CATEGORY)
                  return c.default.hasUnread(e.id);
                {
                  let t = f.default.getCategories(e.getGuildId());
                  if (null == t[e.id]) return !1;
                  let n = t[e.id].some(e => {
                    let { channel: t } = e;
                    return (
                      (0, o.isReadableType)(t.type) && c.default.hasUnread(t.id)
                    );
                  });
                  if (n) return !0;
                  let a = new Set(t[e.id].map(e => e.channel.id)),
                    l = d.default.getThreadsForGuild(e.guild_id);
                  for (let e in l)
                    if (a.has(e)) {
                      for (let t in l[e])
                        if (
                          s.default.hasJoined(t) &&
                          !s.default.isMuted(t) &&
                          c.default.hasUnread(t)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [e]
            );
          return e.isForumLikeChannel() ? t > 0 : n;
        })(e);
        return (0, a.jsx)(i.MenuItem, {
          id: "mark-channel-read",
          label: E.default.Messages.MARK_AS_READ,
          action: function () {
            (0, u.ackChannel)(e);
          },
          disabled: !t,
        });
      }
    },
    531674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMuteTimes: function () {
            return h;
          },
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        i = n.n(l),
        u = n("446674"),
        r = n("77078"),
        d = n("820542"),
        s = n("519705"),
        o = n("319165"),
        f = n("282109"),
        c = n("34676"),
        _ = n("679653"),
        E = n("49111"),
        S = n("468200"),
        T = n("782340");
      let h = () => [
          {
            value: S.MuteUntilSeconds.MINUTES_15,
            label: T.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: S.MuteUntilSeconds.HOURS_1,
            label: T.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: S.MuteUntilSeconds.HOURS_3,
            label: T.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: S.MuteUntilSeconds.HOURS_8,
            label: T.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: S.MuteUntilSeconds.HOURS_24,
            label: T.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: S.MuteUntilSeconds.ALWAYS,
            label: T.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        N = e => {
          let t = e > 0 ? i().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function C(e, t) {
        let [n, l] = (0, u.useStateFromStoresArray)([f.default], () => [
            f.default.isChannelMuted(e.guild_id, e.id),
            f.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          i = (0, o.useMutedUntilText)(l),
          S = (0, _.default)(e, !0);
        function C(t) {
          t &&
            e.type === E.ChannelTypes.GUILD_CATEGORY &&
            (0, d.categoryCollapse)(e.id),
            s.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              c.NotificationLabel.muted(t)
            );
        }
        let g = T.default.Messages.MUTE_CHANNEL_GENERIC,
          M = T.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case E.ChannelTypes.GUILD_CATEGORY:
            (g = T.default.Messages.MUTE_CATEGORY),
              (M = T.default.Messages.UNMUTE_CATEGORY);
            break;
          case E.ChannelTypes.GROUP_DM:
            (g = T.default.Messages.MUTE_CONVERSATION),
              (M = T.default.Messages.UNMUTE_CONVERSATION);
            break;
          case E.ChannelTypes.DM:
            (g = T.default.Messages.MUTE_CHANNEL.format({ name: S })),
              (M = T.default.Messages.UNMUTE_CHANNEL.format({ name: S }));
            break;
          default:
            (g = T.default.Messages.MUTE_CHANNEL_GENERIC),
              (M = T.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: M,
              subtext: i,
              action: () => C(!1),
            })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: g,
              action: () => C(!0),
              children: h().map(n => {
                let { value: l, label: i } = n;
                return (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "".concat(l),
                    label: i,
                    action: () =>
                      (function (n) {
                        e.type === E.ChannelTypes.GUILD_CATEGORY &&
                          (0, d.categoryCollapse)(e.id);
                        let a = N(n);
                        s.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          c.NotificationLabels.Muted,
                          t
                        );
                      })(l),
                  },
                  l
                );
              }),
            });
      }
    },
    530101: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        i = n("611221"),
        u = n("446674"),
        r = n("77078"),
        d = n("185014"),
        s = n("886484"),
        o = n("300322"),
        f = n("549990"),
        c = n("782340");
      function _(e, t) {
        let _ = e.guild_id,
          E = l.useMemo(
            () => ({
              guildId: _,
              entity: e,
              entityType: i.GuildFeedItemTypes.FORUM_POST,
            }),
            [_, e]
          ),
          S = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getIsItemFeatured(E),
            [E]
          ),
          T = (0, o.useIsThreadModerator)(e),
          h = (0, f.useCanGuildFeedFeatureChannel)(e);
        return T && h
          ? S
            ? (0, a.jsx)(r.MenuItem, {
                id: "guild-feed-unfeature",
                label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                action: () =>
                  (0, r.openModalLazy)(async () => {
                    let { UnfeatureItemConfirmationModal: e } = await n
                      .el("969715")
                      .then(n.bind(n, "969715"));
                    return t =>
                      (0, a.jsx)(e, {
                        featureableItem: E,
                        header:
                          c.default.Messages
                            .GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                        body: c.default.Messages
                          .GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
                        ...t,
                      });
                  }),
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "guild-feed-feature",
                label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                children: (0, s.getFeatureItemsTimes)().map(l => {
                  let { value: i, timePeriod: u } = l;
                  return (0, a.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(i),
                      label: (0, s.createFeatureItemsTimeLabel)(u),
                      action: () =>
                        (0, r.openModalLazy)(async () => {
                          let { FeatureForumPostConfirmationModal: l } = await n
                            .el("969715")
                            .then(n.bind(n, "969715"));
                          return n =>
                            (0, a.jsx)(l, {
                              thread: e,
                              guildId: _,
                              expiresSeconds: i,
                              timePeriod: u,
                              options: t,
                              ...n,
                            });
                        }),
                    },
                    i
                  );
                }),
              })
          : null;
      }
    },
    646240: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("755624"),
        r = n("263024"),
        d = n("782340");
      function s(e, t) {
        let n = (0, l.useStateFromStores)([u.default], () =>
          u.default.hasJoined(e.id)
        );
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "leave-thread",
              label: e.isForumPost()
                ? d.default.Messages.LEAVE_FORUM_POST
                : d.default.Messages.LEAVE_THREAD,
              action: () => r.default.leaveThread(e, t),
            })
          : (0, a.jsx)(i.MenuItem, {
              id: "join-thread",
              label: e.isForumPost()
                ? d.default.Messages.JOIN_FORUM_POST
                : d.default.Messages.JOIN_THREAD,
              action: () => r.default.joinThread(e, t),
            });
      }
    },
    255228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        i = n.n(l),
        u = n("446674"),
        r = n("77078"),
        d = n("319165"),
        s = n("755624"),
        o = n("263024"),
        f = n("531674"),
        c = n("782340");
      function _(e) {
        let [t, n, l] = (0, u.useStateFromStoresArray)([s.default], () => [
            s.default.isMuted(e.id),
            s.default.getMuteConfig(e.id),
            s.default.hasJoined(e.id),
          ]),
          _ = (0, d.useMutedUntilText)(n);
        function E(t) {
          o.default.setNotificationSettings(e, { muted: t });
        }
        return l
          ? t
            ? (0, a.jsx)(r.MenuItem, {
                id: "unmute-channel",
                label: e.isForumPost()
                  ? c.default.Messages.UNMUTE_FORUM_POST
                  : c.default.Messages.UNMUTE_THREAD,
                subtext: _,
                action: () => E(!1),
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "mute-channel",
                label: e.isForumPost()
                  ? c.default.Messages.MUTE_FORUM_POST
                  : c.default.Messages.MUTE_THREAD,
                action: () => E(!0),
                children: (0, f.getMuteTimes)().map(t => {
                  let { value: n, label: l } = t;
                  return (0, a.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(n),
                      label: l,
                      action: () =>
                        (function (t) {
                          let n =
                            t > 0 ? i().add(t, "second").toISOString() : null;
                          o.default.setNotificationSettings(e, {
                            muted: !0,
                            mute_config: {
                              selected_time_window: t,
                              end_time: n,
                            },
                          });
                        })(n),
                    },
                    n
                  );
                }),
              })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-disabled",
              label: e.isForumPost()
                ? c.default.Messages.MUTE_FORUM_POST
                : c.default.Messages.MUTE_THREAD,
              disabled: !0,
            });
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("627445"),
        i = n.n(l),
        u = n("77078"),
        r = n("845579"),
        d = n("662255"),
        s = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: l, shiftId: o, showIconFirst: f } = e,
          c = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !c || !s.SUPPORTS_COPY || null == t) return null;
        let _ = "devmode-copy-id-".concat(t);
        return (0, a.jsx)(
          u.MenuItem,
          {
            id: _,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              i(null != n, "cannot copy null text"),
                (0, s.copy)(n),
                null == l || l();
            },
            icon: d.default,
            showIconFirst: f,
          },
          _
        );
      }
    },
    972701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAddToFavoritesItem: function () {
            return T;
          },
          useRemoveFromFavoritesItem: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("917351"),
        i = n.n(l),
        u = n("446674"),
        r = n("77078"),
        d = n("923959"),
        s = n("379881"),
        o = n("200008"),
        f = n("986373"),
        c = n("498139"),
        _ = n("49111"),
        E = n("782340");
      function S(e, t) {
        return e.type === _.ChannelTypes.GROUP_DM
          ? t
            ? E.default.Messages.UNFAVORITE_GDM
            : E.default.Messages.FAVORITE_GDM
          : e.type === _.ChannelTypes.DM
            ? t
              ? E.default.Messages.UNFAVORITE_DM
              : E.default.Messages.FAVORITE_DM
            : t
              ? E.default.Messages.UNFAVORITE_CHANNEL
              : E.default.Messages.FAVORITE_CHANNEL;
      }
      function T(e) {
        let t = (0, u.useStateFromStores)([d.default], () =>
            d.default.getChannels(_.FAVORITES)
          )[_.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, c.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: l } = (0, f.useFavoriteAdded)(),
          s = (0, f.useCanFavoriteChannel)(e);
        if (!s) return null;
        let [[E], T] = i.partition(t, e => "null" === e.channel.id);
        function h(t) {
          l(), (0, o.addFavoriteChannel)(e.id, t);
        }
        return 0 === T.length
          ? (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: S(e, !1),
              action: () => h(null),
            })
          : (0, a.jsxs)(r.MenuItem, {
              id: "favorite-channel",
              label: S(e, !1),
              action: () => h(null),
              children: [
                n &&
                  (0, a.jsx)(r.MenuGroup, {
                    children: (0, a.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(E.channel.id),
                        label: E.channel.name,
                        action: () =>
                          h("null" === E.channel.id ? null : E.channel.id),
                      },
                      E.channel.id
                    ),
                  }),
                (0, a.jsx)(r.MenuGroup, {
                  children: T.map(e =>
                    (0, a.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => h(e.channel.id),
                      },
                      e.channel.id
                    )
                  ),
                }),
              ],
            });
      }
      function h(e) {
        let t = (0, u.useStateFromStores)([s.default], () =>
          s.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: S(e, !0),
              color: "danger",
              action: () =>
                e.type === _.ChannelTypes.GUILD_CATEGORY
                  ? (0, r.openModalLazy)(async () => {
                      let { default: t } = await n
                        .el("338052")
                        .then(n.bind(n, "338052"));
                      return n =>
                        (0, a.jsx)(t, {
                          ...n,
                          onConfirm: () => {
                            n.onClose(), (0, o.removeFavoriteChannel)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, o.removeFavoriteChannel)(e.id),
            });
      }
    },
    414833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          computeThreadNotificationSetting: function () {
            return o;
          },
          useThreadNotificationSetting: function () {
            return f;
          },
        }),
        n("702976");
      var a = n("446674"),
        l = n("42203"),
        i = n("282109"),
        u = n("568734"),
        r = n("755624"),
        d = n("648564"),
        s = n("49111");
      function o(e) {
        let t = r.default.flags(e.id);
        if (null == t) return d.ThreadMemberFlags.NO_MESSAGES;
        if ((0, u.hasFlag)(t, d.ThreadMemberFlags.ALL_MESSAGES))
          return d.ThreadMemberFlags.ALL_MESSAGES;
        if ((0, u.hasFlag)(t, d.ThreadMemberFlags.ONLY_MENTIONS))
          return d.ThreadMemberFlags.ONLY_MENTIONS;
        if ((0, u.hasFlag)(t, d.ThreadMemberFlags.NO_MESSAGES))
          return d.ThreadMemberFlags.NO_MESSAGES;
        let n = l.default.getChannel(e.parent_id);
        if (
          null == n ||
          i.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
        )
          return d.ThreadMemberFlags.NO_MESSAGES;
        let a = i.default.resolvedMessageNotifications(n);
        return a === s.UserNotificationSettings.NO_MESSAGES
          ? d.ThreadMemberFlags.NO_MESSAGES
          : a === s.UserNotificationSettings.ONLY_MENTIONS
            ? d.ThreadMemberFlags.ONLY_MENTIONS
            : d.ThreadMemberFlags.ALL_MESSAGES;
      }
      function f(e) {
        return (0, a.useStateFromStores)(
          [r.default, i.default, l.default],
          () => o(e),
          [e]
        );
      }
    },
    679428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("872717"),
        l = n("689988"),
        i = n("870691"),
        u = n("42203"),
        r = n("718517"),
        d = n("49111");
      let s = {},
        o = 0,
        f = 15 * r.default.Millis.SECOND;
      function c() {
        s = { ...i.default.getCollapsedCategories() };
      }
      function _() {
        !__OVERLAY__ && (clearTimeout(o), (o = setTimeout(() => S({}), f)));
      }
      async function E(e, t) {
        null == e || e === d.ME
          ? await a.default.patch({
              url: d.Endpoints.USER_GUILD_SETTINGS(d.ME),
              body: t,
            })
          : await S(null != t ? { [null != e ? e : d.ME]: t } : {});
      }
      async function S(e) {
        clearTimeout(o);
        let t = 0 !== Object.keys(e).length,
          n = i.default.getCollapsedCategories(),
          l = (function () {
            let e = {},
              t = i.default.getCollapsedCategories();
            for (let n in t) t[n] !== s[n] && (e[n] = !0);
            for (let n in s) t[n] !== s[n] && (e[n] = !0);
            return e;
          })();
        for (let a in l) {
          let l = u.default.getChannel(a);
          null != l &&
            null != l.guild_id &&
            (!(l.guild_id in e) && (e[l.guild_id] = {}),
            null == e[l.guild_id].channel_overrides &&
              (e[l.guild_id].channel_overrides = {}),
            (e[l.guild_id].channel_overrides[l.id] = {
              ...e[l.guild_id].channel_overrides[l.id],
              collapsed: l.id in n,
            }),
            (t = !0));
        }
        return t
          ? ((s = { ...n }),
            delete e[d.FAVORITES],
            (
              await a.default.patch({
                url: d.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function T() {
        s = { ...i.default.getCollapsedCategories() };
      }
      class h extends l.default {
        constructor(...e) {
          super(...e),
            (this.actions = {
              CATEGORY_COLLAPSE: _,
              CATEGORY_EXPAND: _,
              CATEGORY_COLLAPSE_ALL: _,
              CATEGORY_EXPAND_ALL: _,
              POST_CONNECTION_OPEN: c,
              USER_GUILD_SETTINGS_FULL_UPDATE: T,
            }),
            (this.saveUserGuildSettings = E),
            (this.saveUserGuildSettingsBulk = S);
        }
      }
      var N = new h();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144"),
        i = n("449008"),
        u = n("42203"),
        r = n("341542"),
        d = n("923959"),
        s = n("49111");
      let o = {},
        f = 0;
      function c() {
        f += 1;
      }
      function _(e) {
        if (null == o[e]) return !1;
        delete o[e];
      }
      class E extends a.default.PersistedStore {
        initialize(e) {
          this.waitFor(u.default, r.default),
            this.removeChangeListener(c),
            this.addChangeListener(c),
            (o = null != e ? e : {});
        }
        getState() {
          return o;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!o[e] && o[e];
        }
        getCollapsedCategories() {
          return o;
        }
        get version() {
          return f;
        }
      }
      (E.displayName = "CategoryCollapseStore"),
        (E.persistKey = "collapsedCategories");
      var S = new E(l.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (o = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (o[e.channel_id] = !0) : delete o[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(i.isNotNullish));
          for (let e in o) {
            let t = u.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete o[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (o[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (o[t]) return !1;
          o[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return _(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (o[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete o[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return _(t);
        },
      });
    },
    492114: function (e, t, n) {
      "use strict";
      let a, l, i, u, r, d;
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var s = n("917351"),
        o = n.n(s),
        f = n("866227"),
        c = n.n(f),
        _ = n("446674"),
        E = n("872717"),
        S = n("913144"),
        T = n("233069"),
        h = n("813006"),
        N = n("517763"),
        C = n("766274"),
        g = n("42203"),
        M = n("49111");
      let A = M.FormStates.CLOSED,
        I = {},
        m = {},
        p = !1,
        U = !1,
        O = null,
        v = [
          "name",
          "type",
          "topic_",
          "bitrate_",
          "userLimit_",
          "nsfw_",
          "flags_",
          "rateLimitPerUser_",
          "defaultThreadRateLimitPerUser",
          "defaultAutoArchiveDuration",
          "template",
          "defaultReactionEmoji",
          "rtcRegion",
          "videoQualityMode",
          "threadMetadata",
          "banner",
          "availableTags",
          "defaultSortOrder",
          "defaultForumLayout",
          "iconEmoji",
          "themeColor",
        ];
      function L(e) {
        let t = g.default.getChannel(e.channelId);
        if (null == t) return R();
        (A = M.FormStates.OPEN),
          (u = i = t),
          (O = "location" in e && null != e.location ? e.location : null),
          (l = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (r = g.default.getChannel(u.parent_id)),
          (d = u.getGuildId()),
          (I = {}),
          G({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : M.ChannelSettingsSections.OVERVIEW,
            subsection: l,
          });
      }
      function G(e) {
        (a = e.section),
          (l = e.subsection),
          null != u &&
            a === M.ChannelSettingsSections.INSTANT_INVITES &&
            ((p = !0),
            E.default
              .get({
                url: M.Endpoints.INSTANT_INVITES(u.id),
                oldFormErrors: !0,
              })
              .then(
                e => {
                  (p = !1),
                    S.default.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (p = !1)
              ));
      }
      function R() {
        (U = !1),
          (A = M.FormStates.CLOSED),
          (a = null),
          (u = i = null),
          (r = null),
          (m = {});
      }
      let F = o.debounce(() => {
        if (null == u || null == i) return !1;
        let e = u.toJS(),
          t = i.toJS(),
          n = v.every(n => e[n] === t[n]);
        n && u !== i && ((u = i), b.emitChange());
      }, 500);
      function y(e) {
        return new N.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new C.default(e.inviter) : null,
          channel: (0, T.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new h.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: c(e.created_at),
          type: e.type,
        });
      }
      class D extends _.default.Store {
        initialize() {
          this.waitFor(g.default);
        }
        hasChanges() {
          return u !== i;
        }
        isOpen() {
          return U;
        }
        getSection() {
          return a;
        }
        getInvites() {
          return { invites: m, loading: p };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return u;
        }
        getFormState() {
          return A;
        }
        getCategory() {
          return r;
        }
        getProps() {
          return {
            submitting: A === M.FormStates.SUBMITTING,
            errors: I,
            channel: u,
            section: a,
            subsection: l,
            invites: m,
            selectedOverwriteId: d,
            hasChanges: this.hasChanges(),
            analyticsLocation: O,
          };
        }
      }
      D.displayName = "ChannelSettingsStore";
      let b = new D(S.default, {
        CHANNEL_SETTINGS_INIT: L,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (U = !0), L(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (A = M.FormStates.SUBMITTING), (I = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (i = u), (A = M.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (A = M.FormStates.OPEN),
            (I = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, s.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: R,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          d = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: l,
            userLimit: i,
            nsfw: r,
            flags: d,
            rateLimitPerUser: s,
            defaultThreadRateLimitPerUser: o,
            autoArchiveDuration: f,
            locked: c,
            invitable: _,
            defaultAutoArchiveDuration: E,
            template: S,
            defaultReactionEmoji: T,
            rtcRegion: h,
            videoQualityMode: N,
            availableTags: C,
            defaultSortOrder: g,
            defaultForumLayout: M,
            iconEmoji: A,
            themeColor: I,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != a && (u = u.set("topic", a)),
            null != l && (u = u.set("bitrate", l)),
            null != i && (u = u.set("userLimit", i)),
            null != r && (u = u.set("nsfw", r)),
            null != d && (u = u.set("flags", d)),
            null != s && (u = u.set("rateLimitPerUser", s)),
            null != o && (u = u.set("defaultThreadRateLimitPerUser", o)),
            null != f &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                autoArchiveDuration: f,
              })),
            null != c &&
              (u = u.set("threadMetadata", { ...u.threadMetadata, locked: c })),
            null != _ &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                invitable: _,
              })),
            null != E && (u = u.set("defaultAutoArchiveDuration", E)),
            null != S && (u = u.set("template", S)),
            null != n && (u = u.set("type", n)),
            void 0 !== h && (u = u.set("rtcRegion", h)),
            null != N && (u = u.set("videoQualityMode", N)),
            void 0 !== T && (u = u.set("defaultReactionEmoji", T)),
            null != C && (u = u.set("availableTags", C)),
            null != g && (u = u.set("defaultSortOrder", g)),
            null != M && (u = u.set("defaultForumLayout", M)),
            void 0 !== A && (u = u.set("iconEmoji", A)),
            null != I && (u = u.set("themeColor", I)),
            F();
        },
        CHANNEL_SETTINGS_SET_SECTION: G,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (m = {}),
            e.invites.forEach(e => {
              m[e.code] = y(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == u) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == i || i.id !== e) return !1;
              if (i === u) {
                let t = g.default.getChannel(e);
                if (null == t) return !1;
                (u = i = t), (r = g.default.getChannel(u.parent_id));
              } else {
                let t = g.default.getChannel(e);
                if (null == t) return !1;
                (i = t),
                  null != u &&
                    ((u = u.set(
                      "permissionOverwrites",
                      i.permissionOverwrites
                    )),
                    (r = g.default.getChannel(u.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != u &&
              (null != d &&
                null == u.permissionOverwrites[d] &&
                (d = u.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == u || u.id !== t) return !1;
          A = M.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (m = { ...m }), delete m[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          m = { ...m, [e.invite.code]: y(e.invite) };
        },
      });
      var H = b;
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        i = n("35647"),
        u = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, u.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: i,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          i.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        i = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=eff3519cbb4371bd096e.js.map
