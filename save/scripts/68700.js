(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68700"],
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
            return T;
          },
          default: function () {
            return S;
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
        s = n("54239"),
        d = n("49111");
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
          flags: s,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: T,
          autoArchiveDuration: S,
          locked: h,
          invitable: C,
          availableTags: g,
          defaultSortOrder: N,
          defaultForumLayout: A,
          iconEmoji: I,
          themeColor: M,
        } = e;
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: i,
          userLimit: u,
          nsfw: r,
          flags: s,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: T,
          autoArchiveDuration: S,
          locked: h,
          invitable: C,
          availableTags: g,
          defaultSortOrder: N,
          defaultForumLayout: A,
          iconEmoji: I,
          themeColor: M,
        });
      }
      async function E(e, t) {
        let {
            name: n,
            type: s,
            position: o,
            topic: f,
            bitrate: c,
            userLimit: _,
            nsfw: E,
            flags: T,
            permissionOverwrites: S,
            rateLimitPerUser: h,
            defaultThreadRateLimitPerUser: C,
            defaultAutoArchiveDuration: g,
            template: N,
            defaultReactionEmoji: A,
            rtcRegion: I,
            videoQualityMode: M,
            autoArchiveDuration: v,
            locked: m,
            invitable: p,
            availableTags: O,
            defaultSortOrder: U,
            defaultForumLayout: F,
            iconEmoji: L,
            themeColor: R,
          } = t,
          G = r.default.getChannel(e);
        return (
          l.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.default.unarchiveThreadIfNecessary(e),
          a.HTTP.patch({
            url: d.Endpoints.CHANNEL(e),
            body: {
              name: n,
              type: s,
              position: o,
              topic: f,
              bitrate: c,
              user_limit: _,
              nsfw: E,
              flags: T,
              permission_overwrites: S,
              rate_limit_per_user: h,
              default_thread_rate_limit_per_user: C,
              default_auto_archive_duration: g,
              template: N,
              rtc_region: I,
              video_quality_mode: M,
              auto_archive_duration: v,
              locked: m,
              invitable: p,
              default_reaction_emoji:
                null != A
                  ? {
                      emoji_id: null == A ? void 0 : A.emojiId,
                      emoji_name: null == A ? void 0 : A.emojiName,
                    }
                  : null === A
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
              default_sort_order: U,
              default_forum_layout: F,
              icon_emoji:
                null != L
                  ? { id: L.id, name: L.name }
                  : null === L
                    ? null
                    : void 0,
              theme_color: R,
            },
            oldFormErrors: !0,
          }).then(
            t => {
              l.default.dispatch({
                type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                channelId: e,
              });
              let n = null == G ? void 0 : G.getGuildId();
              return (
                null != n &&
                  !(null == G ? void 0 : G.isThread()) &&
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
      function T(e) {
        let t = r.default.getChannel(e);
        a.HTTP.del({ url: d.Endpoints.CHANNEL(e), oldFormErrors: !0 }).then(
          () => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              i.default.checkGuildTemplateDirty(e),
              f();
          }
        );
      }
      var S = {
        init: o,
        open: function (e, t, n) {
          o(e, t, n), (0, s.pushLayer)(d.Layers.CHANNEL_SETTINGS);
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
        deleteChannel: T,
        updateVoiceChannelStatus: function (e, t) {
          return a.HTTP.put({
            url: d.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
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
        s = n("568734"),
        d = n("34676"),
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
            let l = (0, d.getCurrentGuildSettings)(e);
            u.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, d.trackGuildNotificationSettingsUpdate)(e, t, l, n, a);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, a) {
            let l = o.default.keys(t.channel_overrides),
              r = (0, d.getCurrentGuildSettings)(e),
              s = (0, d.getManyCurrentChannelSettings)(e, l);
            u.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, d.trackGuildNotificationSettingsUpdate)(e, t, r, n, a),
              o.default.keys(t.channel_overrides).forEach(l => {
                let i = s.get(l);
                (0, d.trackChannelNotificationSettingsUpdate)(
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
              l = (0, d.getManyCurrentGuildSettings)(a);
            u.default.saveUserGuildSettingsBulk(e),
              o.default.entries(e).forEach(e => {
                let [a, u] = e,
                  r = l.get(a);
                i.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: a,
                  settings: u,
                }),
                  (0, d.trackGuildNotificationSettingsUpdate)(a, u, r, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, a, r) {
            let s = (0, d.getCurrentChannelSettings)(e, t);
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
              (0, d.trackChannelNotificationSettingsUpdate)(e, t, n, s, a, r);
          },
          updateChannelOverrideSettingsBulk(e, t, n, a) {
            let l = o.default.keys(t),
              r = (0, d.getManyCurrentChannelSettings)(e, l);
            u.default.saveUserGuildSettings(e, { channel_overrides: t }),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              o.default
                .keys(t)
                .forEach(l =>
                  (0, d.trackChannelNotificationSettingsUpdate)(
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
              d.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = r.default.accountNotificationSettings.flags,
              l = (0, s.setFlag)(n, e, t);
            await a.HTTP.patch({
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
        s = n("957255"),
        d = n("49111");
      let o = a.combine(
        d.Permissions.VIEW_CHANNEL,
        d.Permissions.MANAGE_MESSAGES,
        d.Permissions.READ_MESSAGE_HISTORY
      );
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.getGuildId(),
          a = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.can(o, e),
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
              d.ChannelTypesSets.GUILD_THREADS_ONLY.has(
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
            return m;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("272030"),
        u = n("158534"),
        r = n("812204"),
        s = n("861370"),
        d = n("972701"),
        o = n("30874"),
        f = n("458574"),
        c = n("308798"),
        _ = n("44141"),
        E = n("530101"),
        T = n("646240"),
        S = n("13777"),
        h = n("37774"),
        C = n("117399"),
        g = n("400501"),
        N = n("542640"),
        A = n("255228"),
        I = n("772371"),
        M = n("604656"),
        v = n("782340"),
        m = (0, u.default)(
          function (e) {
            let { channel: t, onSelect: n } = e,
              u = (0, f.default)(t),
              r = (0, _.default)(t),
              m = (0, A.default)(t),
              p = (0, o.default)(t),
              O = (0, h.default)(t),
              U = (0, c.default)(t),
              F = (0, s.default)({
                id: t.id,
                label: v.default.Messages.COPY_ID_THREAD,
              }),
              L = (0, T.default)(t, "Context Menu"),
              R = (0, C.default)(t),
              G = (0, I.default)(t),
              y = (0, g.default)(t),
              D = (0, N.default)(t.id),
              b = (0, S.default)(t),
              P = (0, M.default)(t),
              H = (0, E.default)(t, { hoist: !0 }),
              x = (0, d.useAddToFavoritesItem)(t),
              j = (0, d.useRemoveFromFavoritesItem)(t);
            return (0, a.jsxs)(l.Menu, {
              navId: "thread-context",
              onClose: i.closeContextMenu,
              "aria-label": v.default.Messages.THREAD_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [r, x] },
                  "mark-as-read-or-favorite"
                ),
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [L, b, p, O, y, D, u] },
                  "thread-actions"
                ),
                (0, a.jsxs)(l.MenuGroup, { children: [m, G] }, "notifications"),
                (0, a.jsx)(l.MenuGroup, { children: j }),
                (0, a.jsxs)(
                  l.MenuGroup,
                  { children: [P, H, R, U] },
                  "admin-actions"
                ),
                (0, a.jsx)(l.MenuGroup, { children: F }, "developer-actions"),
              ],
            });
          },
          [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_THREAD_MENU]
        );
    },
    30874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("263024"),
        u = n("300322"),
        r = n("782340");
      function s(e) {
        var t;
        let n = (0, u.useCanManageThread)(e),
          s = (0, u.useCanUnarchiveThread)(e),
          d = e.isArchivedThread();
        if (d ? s : n)
          return (
            null === (t = e.threadMetadata) || void 0 === t
              ? void 0
              : t.archived
          )
            ? (0, a.jsx)(l.MenuItem, {
                id: "unarchive-thread",
                label: e.isForumPost()
                  ? r.default.Messages.UNARCHIVE_FORUM_POST
                  : r.default.Messages.UNARCHIVE_THREAD,
                action: () => i.default.unarchiveThread(e, !1),
              })
            : (0, a.jsx)(l.MenuItem, {
                id: "archive-thread",
                label: e.isForumPost()
                  ? r.default.Messages.ARCHIVE_FORUM_POST
                  : r.default.Messages.ARCHIVE_THREAD,
                action: () => i.default.archiveThread(e, !1),
              });
      }
    },
    458574: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("281071"),
        i = n("65597"),
        u = n("77078"),
        r = n("867965"),
        s = n("42203"),
        d = n("404008"),
        o = n("49111"),
        f = n("782340");
      function c(e, t, n) {
        let c = (0, i.useStateFromStores)([s.default], () =>
          s.default.getChannel(e.parent_id)
        );
        return (0, a.jsx)(u.MenuItem, {
          id: "channel-copy-link",
          label: f.default.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, r.trackForumPostLinkCopied)({
                postId: e.id,
                location: { section: o.AnalyticsSections.CONTEXT_MENU },
              }),
              (0, l.copy)((0, d.getChannelLinkToCopy)(e, c, t, n));
          },
        });
      }
    },
    308798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("18054"),
        r = n("819689"),
        s = n("430475"),
        d = n("610730"),
        o = n("271938"),
        f = n("957255"),
        c = n("299039"),
        _ = n("49111"),
        E = n("782340");
      function T(e) {
        let t = e.isForumPost(),
          T = (0, l.useStateFromStores)(
            [o.default],
            () => e.isOwner(o.default.getId()),
            [e]
          ),
          { canManageChannel: S, canAccessChannel: h } = (0,
          l.useStateFromStoresObject)(
            [f.default],
            () => ({
              canAccessChannel: f.default.can(e.accessPermissions, e),
              canManageChannel: f.default.can(
                e.isThread()
                  ? _.Permissions.MANAGE_THREADS
                  : _.Permissions.MANAGE_CHANNELS,
                e
              ),
            }),
            [e]
          ),
          C = (0, l.useStateFromStores)(
            [d.default],
            () => {
              var t;
              return null !== (t = d.default.getCount(e.id)) && void 0 !== t
                ? t
                : 0;
            },
            [e.id]
          ),
          { firstMessage: g } = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.getMessage(e.id),
            [e.id]
          ),
          N = t && (S || (T && C < 1)),
          A = t && T && !S && C > 0 && null != g;
        return h && (S || N || A)
          ? (0, a.jsx)(i.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === _.ChannelTypes.GUILD_CATEGORY)
                  return E.default.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return N
                    ? E.default.Messages.DELETE_FORUM_POST
                    : E.default.Messages.DELETE_MESSAGE;
                if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                return E.default.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("575351")
                    .then(n.bind(n, "575351"));
                  return n =>
                    (0, a.jsx)(t, {
                      ...n,
                      onConfirm: () => {
                        n.onClose(),
                          A
                            ? r.default.deleteMessage(
                                e.id,
                                c.default.castChannelIdAsMessageId(e.id)
                              )
                            : u.default.deleteChannel(e.id);
                      },
                      channel: e,
                    });
                }),
            })
          : null;
      }
    },
    44141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("267363"),
        r = n("680986"),
        s = n("689275"),
        d = n("755624"),
        o = n("233069"),
        f = n("245997"),
        c = n("660478"),
        _ = n("49111"),
        E = n("782340");
      function T(e) {
        let t = (function (e) {
          let t = (0, r.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, l.useStateFromStores)(
              [c.default, f.default, s.default, d.default],
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
                    l = s.default.getThreadsForGuild(e.guild_id);
                  for (let e in l)
                    if (a.has(e)) {
                      for (let t in l[e])
                        if (
                          d.default.hasJoined(t) &&
                          !d.default.isMuted(t) &&
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
            return g;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("866227"),
        i = n.n(l),
        u = n("446674"),
        r = n("77078"),
        s = n("820542"),
        d = n("519705"),
        o = n("319165"),
        f = n("282109"),
        c = n("34676"),
        _ = n("679653"),
        E = n("49111"),
        T = n("468200"),
        S = n("782340");
      let h = () => [
          {
            value: T.MuteUntilSeconds.MINUTES_15,
            label: S.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: T.MuteUntilSeconds.HOURS_1,
            label: S.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: T.MuteUntilSeconds.HOURS_3,
            label: S.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: T.MuteUntilSeconds.HOURS_8,
            label: S.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: T.MuteUntilSeconds.HOURS_24,
            label: S.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: T.MuteUntilSeconds.ALWAYS,
            label: S.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        C = e => {
          let t = e > 0 ? i().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function g(e, t) {
        let [n, l] = (0, u.useStateFromStoresArray)([f.default], () => [
            f.default.isChannelMuted(e.guild_id, e.id),
            f.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          i = (0, o.useMutedUntilText)(l),
          T = (0, _.default)(e, !0);
        function g(t) {
          t &&
            e.type === E.ChannelTypes.GUILD_CATEGORY &&
            (0, s.categoryCollapse)(e.id),
            d.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              c.NotificationLabel.muted(t)
            );
        }
        let N = S.default.Messages.MUTE_CHANNEL_GENERIC,
          A = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case E.ChannelTypes.GUILD_CATEGORY:
            (N = S.default.Messages.MUTE_CATEGORY),
              (A = S.default.Messages.UNMUTE_CATEGORY);
            break;
          case E.ChannelTypes.GROUP_DM:
            (N = S.default.Messages.MUTE_CONVERSATION),
              (A = S.default.Messages.UNMUTE_CONVERSATION);
            break;
          case E.ChannelTypes.DM:
            (N = S.default.Messages.MUTE_CHANNEL.format({ name: T })),
              (A = S.default.Messages.UNMUTE_CHANNEL.format({ name: T }));
            break;
          default:
            (N = S.default.Messages.MUTE_CHANNEL_GENERIC),
              (A = S.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: A,
              subtext: i,
              action: () => g(!1),
            })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: N,
              action: () => g(!0),
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
                          (0, s.categoryCollapse)(e.id);
                        let a = C(n);
                        d.default.updateChannelOverrideSettings(
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
        s = n("185014"),
        d = n("886484"),
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
          T = (0, u.useStateFromStores)(
            [s.default],
            () => s.default.getIsItemFeatured(E),
            [E]
          ),
          S = (0, o.useIsThreadModerator)(e),
          h = (0, f.useCanGuildFeedFeatureChannel)(e);
        return S && h
          ? T
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
                children: (0, d.getFeatureItemsTimes)().map(l => {
                  let { value: i, timePeriod: u } = l;
                  return (0, a.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(i),
                      label: (0, d.createFeatureItemsTimeLabel)(u),
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
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("755624"),
        r = n("263024"),
        s = n("782340");
      function d(e, t) {
        let n = (0, l.useStateFromStores)([u.default], () =>
          u.default.hasJoined(e.id)
        );
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "leave-thread",
              label: e.isForumPost()
                ? s.default.Messages.LEAVE_FORUM_POST
                : s.default.Messages.LEAVE_THREAD,
              action: () => r.default.leaveThread(e, t),
            })
          : (0, a.jsx)(i.MenuItem, {
              id: "join-thread",
              label: e.isForumPost()
                ? s.default.Messages.JOIN_FORUM_POST
                : s.default.Messages.JOIN_THREAD,
              action: () => r.default.joinThread(e, t),
            });
      }
    },
    13777: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        i = n("917351"),
        u = n.n(i),
        r = n("446674"),
        s = n("77078"),
        d = n("848848"),
        o = n("300322"),
        f = n("800762"),
        c = n("242740"),
        _ = n("782340");
      function E(e) {
        let t = (0, o.useCanJoinThreadVoice)(e),
          n = (0, r.useStateFromStores)([f.default], () =>
            f.default.isInChannel(e.id)
          ),
          i = (0, r.useStateFromStores)(
            [f.default],
            () => !u.isEmpty(f.default.getVoiceStatesForChannel(e.id))
          ),
          { needSubscriptionToAccess: E } = (0, d.default)(e.id),
          T = l.useCallback(() => {
            c.default.handleVoiceConnect({
              channel: e,
              connected: n,
              needSubscriptionToAccess: E,
              locked: !1,
            });
          }, [e, n, E]);
        return n || !t
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "join-thread-voice",
              label: i
                ? _.default.Messages.JOIN_CALL
                : _.default.Messages.START_CALL,
              action: T,
            });
      }
    },
    37774: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("263024"),
        u = n("300322"),
        r = n("782340");
      function s(e) {
        let t = (0, u.useIsThreadModerator)(e),
          n = e.isLockedThread();
        if (t)
          return n
            ? (0, a.jsx)(l.MenuItem, {
                id: "unlock-thread",
                label: e.isForumPost()
                  ? r.default.Messages.UNLOCK_FORUM_POST
                  : r.default.Messages.UNLOCK_THREAD,
                action: () => i.default.unlockThread(e),
              })
            : (0, a.jsx)(l.MenuItem, {
                id: "lock-thread",
                label: e.isForumPost()
                  ? r.default.Messages.LOCK_FORUM_POST
                  : r.default.Messages.LOCK_THREAD,
                action: () => i.default.lockThread(e),
              });
      }
    },
    117399: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("477566"),
        r = n("680986"),
        s = n("263024"),
        d = n("300322"),
        o = n("42203"),
        f = n("724210"),
        c = n("782340");
      function _(e) {
        let t = (0, l.useStateFromStores)([o.default], () =>
            o.default.getChannel(e.parent_id)
          ),
          n = (0, d.useIsThreadModerator)(e),
          _ = (0, r.useExistingPin)(e);
        return (null == t ? void 0 : t.isForumLikeChannel()) && n
          ? e.hasFlag(f.ChannelFlags.PINNED)
            ? (0, a.jsx)(i.MenuItem, {
                id: "unpin-thread",
                label: c.default.Messages.UNPIN_POST,
                action: () => s.default.unpin(e),
              })
            : (0, a.jsx)(i.MenuItem, {
                id: "pin-thread",
                label: c.default.Messages.PIN_POST,
                action: function () {
                  null != _
                    ? u.default.show({
                        title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                        body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
                        onConfirm: async () => {
                          await s.default.unpin(_), s.default.pin(e);
                        },
                      })
                    : s.default.pin(e);
                },
              })
          : null;
      }
    },
    400501: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("18054"),
        u = n("300322"),
        r = n("782340");
      function s(e) {
        let t = (0, u.useCanManageThread)(e),
          n = (0, u.useIsActiveChannelOrUnarchivableThread)(e),
          s = (0, u.useIsNonModInLockedThread)(e);
        return !t || !n || s || __OVERLAY__
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "edit-thread",
              label: e.isForumPost()
                ? r.default.Messages.EDIT_FORUM_POST
                : r.default.Messages.EDIT_THREAD,
              action: () => {
                (0, l.closeAllModals)(), i.default.open(e.id);
              },
            });
      }
    },
    542640: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("272030"),
        r = n("430568"),
        s = n("385976"),
        d = n("404607"),
        o = n("680986"),
        f = n("300322"),
        c = n("42203"),
        _ = n("953371"),
        E = n("782340"),
        T = n("826374");
      function S(e) {
        let { tag: t } = e,
          { name: n, emojiId: i, emojiName: u } = t,
          d = (0, l.useStateFromStores)([s.default], () =>
            null != i ? s.default.getUsableCustomEmojiById(i) : null
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.default, {
              className: T.emoji,
              emojiId: i,
              emojiName: u,
              animated: !!(null == d ? void 0 : d.animated),
            }),
            n,
          ],
        });
      }
      function h(e) {
        let t = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(e),
            [e]
          ),
          n = (0, f.useCanManageThread)(t),
          r = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(null == t ? void 0 : t.parent_id),
            [t]
          ),
          s = (0, o.useVisibleForumTags)(r),
          T = (0, o.useAppliedTags)(t),
          h = T.length >= _.MAX_FORUM_POST_TAGS,
          C = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
        if (null == t) return (0, u.closeContextMenu)(), null;
        if (
          !n ||
          __OVERLAY__ ||
          !t.isForumPost() ||
          (null == s ? void 0 : s.length) === 0 ||
          !C
        )
          return null;
        let g = e => {
            let n = new Set(T);
            if (n.has(e)) n.delete(e);
            else {
              if (h) return;
              n.add(e);
            }
            let a = Array.from(n).map(e => e.id);
            d.default.updateForumPostTags(t.id, a);
          },
          N =
            null == s
              ? void 0
              : s.map(e => {
                  let t = T.includes(e);
                  return (0, a.jsx)(
                    i.MenuCheckboxItem,
                    {
                      id: e.id,
                      label: (0, a.jsx)(S, { tag: e }),
                      disabled: h && !t,
                      action: () => g(e),
                      checked: t,
                    },
                    e.id
                  );
                });
        return (0, a.jsx)(i.MenuItem, {
          id: "edit-tags",
          label: E.default.Messages.FORUM_TAG_POST_EDIT,
          children: N,
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
        s = n("319165"),
        d = n("755624"),
        o = n("263024"),
        f = n("531674"),
        c = n("782340");
      function _(e) {
        let [t, n, l] = (0, u.useStateFromStoresArray)([d.default], () => [
            d.default.isMuted(e.id),
            d.default.getMuteConfig(e.id),
            d.default.hasJoined(e.id),
          ]),
          _ = (0, s.useMutedUntilText)(n);
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
    772371: function (e, t, n) {
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
        i = n("77078"),
        u = n("755624"),
        r = n("263024"),
        s = n("414833"),
        d = n("648564"),
        o = n("782340");
      function f(e) {
        let t = (0, s.useThreadNotificationSetting)(e),
          n = (0, l.useStateFromStores)([u.default], () =>
            u.default.hasJoined(e.id)
          );
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "thread-notifications",
              label: o.default.Messages.NOTIFICATION_SETTINGS,
              children: (0, d.getThreadNotificationOptions)().map(n => {
                let { setting: l, label: u } = n;
                return (0, a.jsx)(
                  i.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(l),
                    label: u,
                    action: () =>
                      r.default.setNotificationSettings(e, { flags: l }),
                    checked: l === t,
                  },
                  l
                );
              }),
            })
          : (0, a.jsx)(i.MenuItem, {
              id: "notifications-disabled",
              label: o.default.Messages.NOTIFICATION_SETTINGS,
              disabled: !0,
            });
      }
    },
    604656: function (e, t, n) {
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
        i = n("263024"),
        u = n("300322"),
        r = n("49111"),
        s = n("782340");
      function d(e) {
        var t, n;
        let d = (0, u.useIsThreadModerator)(e);
        if (!d || e.type !== r.ChannelTypes.PRIVATE_THREAD) return null;
        let o =
          null ===
            (n =
              null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.invitable) ||
          void 0 === n ||
          n;
        return (0, a.jsx)(l.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: s.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
          checked: o,
          action: () => i.default.setInvitable(e, !o),
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
        s = n("662255"),
        d = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: l, shiftId: o, showIconFirst: f } = e,
          c = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !c || !d.SUPPORTS_COPY || null == t) return null;
        let _ = "devmode-copy-id-".concat(t);
        return (0, a.jsx)(
          u.MenuItem,
          {
            id: _,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              i(null != n, "cannot copy null text"),
                (0, d.copy)(n),
                null == l || l();
            },
            icon: s.default,
            showIconFirst: f,
          },
          _
        );
      }
    },
    200008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addFavoriteChannel: function () {
            return c;
          },
          removeFavoriteChannel: function () {
            return _;
          },
          setFavoriteChannelNickname: function () {
            return E;
          },
          addFavoriteCategory: function () {
            return T;
          },
          removeFavoriteCategory: function () {
            return S;
          },
          updateFavoriteChannels: function () {
            return h;
          },
          updateFavoriteChannelParent: function () {
            return C;
          },
          toggleFavoriteServerMuted: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("151426"),
        l = n("872173"),
        i = n("42203"),
        u = n("957255"),
        r = n("299039"),
        s = n("379881"),
        d = n("843455");
      function o() {
        let e = s.default.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function f(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === a.FavoriteChannelType.CATEGORY) continue;
          let l = i.default.getChannel(t);
          if (
            null == l ||
            (!l.isPrivate() && !u.default.can(d.Permissions.VIEW_CHANNEL, l))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function c(e, t) {
        let n = s.default.isFavorite(e);
        !n &&
          l.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = a.FavoriteChannel.create({
                nickname: "",
                type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: o(),
                parentId: null != t ? t : "0",
              })),
                f(n.favoriteChannels);
            },
            l.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function _(e) {
        let t = s.default.getFavorite(e);
        null != t &&
          l.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              if (
                (delete n.favoriteChannels[e],
                t.type === a.FavoriteChannelType.CATEGORY)
              )
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              f(n.favoriteChannels);
            },
            l.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function E(e, t) {
        let n = s.default.isFavorite(e);
        n &&
          l.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            l.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function T(e) {
        let t = r.default.fromTimestamp(Date.now());
        l.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = a.FavoriteChannel.create({
              nickname: e,
              type: a.FavoriteChannelType.CATEGORY,
              position: o(),
              parentId: "0",
            });
          },
          l.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function S(e) {
        _(e);
      }
      function h(e) {
        l.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let a of e)
              if (
                (null != a.position &&
                  (t.favoriteChannels[a.id].position = a.position),
                void 0 !== a.parent_id)
              ) {
                var n;
                t.favoriteChannels[a.id].parentId =
                  null !== (n = a.parent_id) && void 0 !== n ? n : "0";
              }
          },
          l.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function C(e, t) {
        l.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          l.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g() {
        l.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          l.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    986373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanFavoriteChannel: function () {
            return _;
          },
          useFavorite: function () {
            return E;
          },
          useFavoritesCategories: function () {
            return T;
          },
          useFavoritesGuildSelected: function () {
            return S;
          },
          useFavoriteAdded: function () {
            return h;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("884691"),
        l = n("298386"),
        i = n("446674");
      n("42203");
      var u = n("923959"),
        r = n("162771"),
        s = n("697218");
      n("299039");
      var d = n("379881"),
        o = n("498139"),
        f = n("136569"),
        c = n("49111");
      function _(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0,
          o.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          a = (0, i.useStateFromStores)([d.default], () =>
            d.default.isFavorite(e.id)
          ),
          l = (0, i.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          ),
          u = e.isDM() || e.isThread(),
          r = !u || (n && (null == l ? void 0 : l.isStaff()) === !0);
        return t && !__OVERLAY__ && !a && r;
      }
      function E(e) {
        let t = (0, i.useStateFromStores)([d.default], () =>
          d.default.getFavorite(e)
        );
        return t;
      }
      function T() {
        let e = (0, i.useStateFromStores)([u.default], () =>
          u.default.getChannels(c.FAVORITES)
        )[l.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function S() {
        let e = (0, i.useStateFromStores)([r.default], () =>
          r.default.getGuildId()
        );
        return e === c.FAVORITES;
      }
      function h() {
        let { isFavoritesPerk: e } = (0, o.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, f.useFavoritesTooltipStore)(),
          n = a.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          l = a.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: l,
        };
      }
    },
    136569: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesTooltipStore: function () {
            return l;
          },
        });
      var a = n("308503");
      let l = (0, a.default)(e => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => e({ favoriteAdded: !0 }),
        clearFavoriteAdded: () => e({ favoriteAdded: !1 }),
      }));
    },
    972701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAddToFavoritesItem: function () {
            return S;
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
        s = n("923959"),
        d = n("379881"),
        o = n("200008"),
        f = n("986373"),
        c = n("498139"),
        _ = n("49111"),
        E = n("782340");
      function T(e, t) {
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
      function S(e) {
        let t = (0, u.useStateFromStores)([s.default], () =>
            s.default.getChannels(_.FAVORITES)
          )[_.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, c.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: l } = (0, f.useFavoriteAdded)(),
          d = (0, f.useCanFavoriteChannel)(e);
        if (!d) return null;
        let [[E], S] = i.partition(t, e => "null" === e.channel.id);
        function h(t) {
          l(), (0, o.addFavoriteChannel)(e.id, t);
        }
        return 0 === S.length
          ? (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: T(e, !1),
              action: () => h(null),
            })
          : (0, a.jsxs)(r.MenuItem, {
              id: "favorite-channel",
              label: T(e, !1),
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
                  children: S.map(e =>
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
        let t = (0, u.useStateFromStores)([d.default], () =>
          d.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: T(e, !0),
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
        s = n("648564"),
        d = n("49111");
      function o(e) {
        let t = r.default.flags(e.id);
        if (null == t) return s.ThreadMemberFlags.NO_MESSAGES;
        if ((0, u.hasFlag)(t, s.ThreadMemberFlags.ALL_MESSAGES))
          return s.ThreadMemberFlags.ALL_MESSAGES;
        if ((0, u.hasFlag)(t, s.ThreadMemberFlags.ONLY_MENTIONS))
          return s.ThreadMemberFlags.ONLY_MENTIONS;
        if ((0, u.hasFlag)(t, s.ThreadMemberFlags.NO_MESSAGES))
          return s.ThreadMemberFlags.NO_MESSAGES;
        let n = l.default.getChannel(e.parent_id);
        if (
          null == n ||
          i.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
        )
          return s.ThreadMemberFlags.NO_MESSAGES;
        let a = i.default.resolvedMessageNotifications(n);
        return a === d.UserNotificationSettings.NO_MESSAGES
          ? s.ThreadMemberFlags.NO_MESSAGES
          : a === d.UserNotificationSettings.ONLY_MENTIONS
            ? s.ThreadMemberFlags.ONLY_MENTIONS
            : s.ThreadMemberFlags.ALL_MESSAGES;
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
            return C;
          },
        }),
        n("222007");
      var a = n("872717"),
        l = n("689988"),
        i = n("870691"),
        u = n("42203"),
        r = n("718517"),
        s = n("49111");
      let d = {},
        o = 0,
        f = 15 * r.default.Millis.SECOND;
      function c() {
        d = { ...i.default.getCollapsedCategories() };
      }
      function _() {
        !__OVERLAY__ && (clearTimeout(o), (o = setTimeout(() => T({}), f)));
      }
      async function E(e, t) {
        null == e || e === s.ME
          ? await a.HTTP.patch({
              url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
              body: t,
            })
          : await T(null != t ? { [null != e ? e : s.ME]: t } : {});
      }
      async function T(e) {
        clearTimeout(o);
        let t = 0 !== Object.keys(e).length,
          n = i.default.getCollapsedCategories(),
          l = (function () {
            let e = {},
              t = i.default.getCollapsedCategories();
            for (let n in t) t[n] !== d[n] && (e[n] = !0);
            for (let n in d) t[n] !== d[n] && (e[n] = !0);
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
          ? ((d = { ...n }),
            delete e[s.FAVORITES],
            (
              await a.HTTP.patch({
                url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function S() {
        d = { ...i.default.getCollapsedCategories() };
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
              USER_GUILD_SETTINGS_FULL_UPDATE: S,
            }),
            (this.saveUserGuildSettings = E),
            (this.saveUserGuildSettingsBulk = T);
        }
      }
      var C = new h();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144"),
        i = n("449008"),
        u = n("42203"),
        r = n("341542"),
        s = n("923959"),
        d = n("49111");
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
      var T = new E(l.default, {
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
          s.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (o[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          s.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
      let a, l, i, u, r, s;
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var d = n("917351"),
        o = n.n(d),
        f = n("866227"),
        c = n.n(f),
        _ = n("446674"),
        E = n("872717"),
        T = n("913144"),
        S = n("233069"),
        h = n("813006"),
        C = n("517763"),
        g = n("766274"),
        N = n("42203"),
        A = n("49111");
      let I = A.FormStates.CLOSED,
        M = {},
        v = {},
        m = !1,
        p = !1,
        O = null,
        U = [
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
      function F(e) {
        let t = N.default.getChannel(e.channelId);
        if (null == t) return R();
        (I = A.FormStates.OPEN),
          (u = i = t),
          (O = "location" in e && null != e.location ? e.location : null),
          (l = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (r = N.default.getChannel(u.parent_id)),
          (s = u.getGuildId()),
          (M = {}),
          L({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : A.ChannelSettingsSections.OVERVIEW,
            subsection: l,
          });
      }
      function L(e) {
        (a = e.section),
          (l = e.subsection),
          null != u &&
            a === A.ChannelSettingsSections.INSTANT_INVITES &&
            ((m = !0),
            E.HTTP.get({
              url: A.Endpoints.INSTANT_INVITES(u.id),
              oldFormErrors: !0,
            }).then(
              e => {
                (m = !1),
                  T.default.dispatch({
                    type: "CHANNEL_SETTINGS_LOADED_INVITES",
                    invites: e.body,
                  });
              },
              () => (m = !1)
            ));
      }
      function R() {
        (p = !1),
          (I = A.FormStates.CLOSED),
          (a = null),
          (u = i = null),
          (r = null),
          (v = {});
      }
      let G = o.debounce(() => {
        if (null == u || null == i) return !1;
        let e = u.toJS(),
          t = i.toJS(),
          n = U.every(n => e[n] === t[n]);
        n && u !== i && ((u = i), b.emitChange());
      }, 500);
      function y(e) {
        return new C.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new g.default(e.inviter) : null,
          channel: (0, S.createChannelRecordFromInvite)(e.channel),
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
          this.waitFor(N.default);
        }
        hasChanges() {
          return u !== i;
        }
        isOpen() {
          return p;
        }
        getSection() {
          return a;
        }
        getInvites() {
          return { invites: v, loading: m };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return u;
        }
        getFormState() {
          return I;
        }
        getCategory() {
          return r;
        }
        getProps() {
          return {
            submitting: I === A.FormStates.SUBMITTING,
            errors: M,
            channel: u,
            section: a,
            subsection: l,
            invites: v,
            selectedOverwriteId: s,
            hasChanges: this.hasChanges(),
            analyticsLocation: O,
          };
        }
      }
      D.displayName = "ChannelSettingsStore";
      let b = new D(T.default, {
        CHANNEL_SETTINGS_INIT: F,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (p = !0), F(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (I = A.FormStates.SUBMITTING), (M = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (i = u), (I = A.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (I = A.FormStates.OPEN),
            (M = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, d.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: R,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          s = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: l,
            userLimit: i,
            nsfw: r,
            flags: s,
            rateLimitPerUser: d,
            defaultThreadRateLimitPerUser: o,
            autoArchiveDuration: f,
            locked: c,
            invitable: _,
            defaultAutoArchiveDuration: E,
            template: T,
            defaultReactionEmoji: S,
            rtcRegion: h,
            videoQualityMode: C,
            availableTags: g,
            defaultSortOrder: N,
            defaultForumLayout: A,
            iconEmoji: I,
            themeColor: M,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != a && (u = u.set("topic", a)),
            null != l && (u = u.set("bitrate", l)),
            null != i && (u = u.set("userLimit", i)),
            null != r && (u = u.set("nsfw", r)),
            null != s && (u = u.set("flags", s)),
            null != d && (u = u.set("rateLimitPerUser", d)),
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
            null != T && (u = u.set("template", T)),
            null != n && (u = u.set("type", n)),
            void 0 !== h && (u = u.set("rtcRegion", h)),
            null != C && (u = u.set("videoQualityMode", C)),
            void 0 !== S && (u = u.set("defaultReactionEmoji", S)),
            null != g && (u = u.set("availableTags", g)),
            null != N && (u = u.set("defaultSortOrder", N)),
            null != A && (u = u.set("defaultForumLayout", A)),
            void 0 !== I && (u = u.set("iconEmoji", I)),
            null != M && (u = u.set("themeColor", M)),
            G();
        },
        CHANNEL_SETTINGS_SET_SECTION: L,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (v = {}),
            e.invites.forEach(e => {
              v[e.code] = y(e);
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
                let t = N.default.getChannel(e);
                if (null == t) return !1;
                (u = i = t), (r = N.default.getChannel(u.parent_id));
              } else {
                let t = N.default.getChannel(e);
                if (null == t) return !1;
                (i = t),
                  null != u &&
                    ((u = u.set(
                      "permissionOverwrites",
                      i.permissionOverwrites
                    )),
                    (r = N.default.getChannel(u.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != u &&
              (null != s &&
                null == u.permissionOverwrites[s] &&
                (s = u.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == u || u.id !== t) return !1;
          I = A.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (v = { ...v }), delete v[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          v = { ...v, [e.invite.code]: y(e.invite) };
        },
      });
      var P = b;
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
          ...s
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(s),
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
//# sourceMappingURL=7e1ea4651f98ed04989b.js.map
