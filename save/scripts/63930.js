(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63930"],
  {
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return i;
          },
          categoryExpand: function () {
            return l;
          },
          categoryCollapseAll: function () {
            return s;
          },
          categoryExpandAll: function () {
            return u;
          },
        });
      var a = n("913144");
      function i(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function l(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function s(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function u(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    18054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          init: function () {
            return d;
          },
          close: function () {
            return f;
          },
          setSection: function () {
            return c;
          },
          updateChannel: function () {
            return E;
          },
          saveChannel: function () {
            return _;
          },
          deleteChannel: function () {
            return N;
          },
          default: function () {
            return S;
          },
        }),
        n("702976");
      var a = n("872717"),
        i = n("913144"),
        l = n("81732");
      n("21121"), n("693051");
      var s = n("263024");
      n("492114");
      var u = n("42203"),
        r = n("54239"),
        o = n("49111");
      function d(e, t, n) {
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function f() {
        i.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function c(e) {
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_SET_SECTION",
          section: e,
        });
      }
      function E(e) {
        let {
          name: t,
          type: n,
          topic: a,
          bitrate: l,
          userLimit: s,
          nsfw: u,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: N,
          autoArchiveDuration: S,
          locked: C,
          invitable: T,
          availableTags: g,
          defaultSortOrder: A,
          defaultForumLayout: h,
          iconEmoji: M,
          themeColor: I,
        } = e;
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: l,
          userLimit: s,
          nsfw: u,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: f,
          template: c,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: N,
          autoArchiveDuration: S,
          locked: C,
          invitable: T,
          availableTags: g,
          defaultSortOrder: A,
          defaultForumLayout: h,
          iconEmoji: M,
          themeColor: I,
        });
      }
      async function _(e, t) {
        let {
            name: n,
            type: r,
            position: d,
            topic: f,
            bitrate: c,
            userLimit: E,
            nsfw: _,
            flags: N,
            permissionOverwrites: S,
            rateLimitPerUser: C,
            defaultThreadRateLimitPerUser: T,
            defaultAutoArchiveDuration: g,
            template: A,
            defaultReactionEmoji: h,
            rtcRegion: M,
            videoQualityMode: I,
            autoArchiveDuration: L,
            locked: p,
            invitable: v,
            availableTags: O,
            defaultSortOrder: m,
            defaultForumLayout: U,
            iconEmoji: y,
            themeColor: R,
          } = t,
          G = u.default.getChannel(e);
        return (
          i.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await s.default.unarchiveThreadIfNecessary(e),
          a.HTTP.patch({
            url: o.Endpoints.CHANNEL(e),
            body: {
              name: n,
              type: r,
              position: d,
              topic: f,
              bitrate: c,
              user_limit: E,
              nsfw: _,
              flags: N,
              permission_overwrites: S,
              rate_limit_per_user: C,
              default_thread_rate_limit_per_user: T,
              default_auto_archive_duration: g,
              template: A,
              rtc_region: M,
              video_quality_mode: I,
              auto_archive_duration: L,
              locked: p,
              invitable: v,
              default_reaction_emoji:
                null != h
                  ? {
                      emoji_id: null == h ? void 0 : h.emojiId,
                      emoji_name: null == h ? void 0 : h.emojiName,
                    }
                  : null === h
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
              default_sort_order: m,
              default_forum_layout: U,
              icon_emoji:
                null != y
                  ? { id: y.id, name: y.name }
                  : null === y
                    ? null
                    : void 0,
              theme_color: R,
            },
            oldFormErrors: !0,
          }).then(
            t => {
              i.default.dispatch({
                type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                channelId: e,
              });
              let n = null == G ? void 0 : G.getGuildId();
              return (
                null != n &&
                  !(null == G ? void 0 : G.isThread()) &&
                  l.default.checkGuildTemplateDirty(n),
                t
              );
            },
            e => (
              i.default.dispatch({
                type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                errors: e.body,
              }),
              e
            )
          )
        );
      }
      function N(e) {
        let t = u.default.getChannel(e);
        a.HTTP.del({ url: o.Endpoints.CHANNEL(e), oldFormErrors: !0 }).then(
          () => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              l.default.checkGuildTemplateDirty(e),
              f();
          }
        );
      }
      var S = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, r.pushLayer)(o.Layers.CHANNEL_SETTINGS);
        },
        close: f,
        setSection: c,
        selectPermissionOverwrite: function (e) {
          i.default.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: E,
        saveChannel: _,
        deleteChannel: N,
        updateVoiceChannelStatus: function (e, t) {
          return a.HTTP.put({
            url: o.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
      };
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("685665");
      function l(e, t) {
        return function (n) {
          let { analyticsLocations: l } = (0, i.default)(t);
          return (0, a.jsx)(i.AnalyticsLocationProvider, {
            value: l,
            children: (0, a.jsx)(e, { ...n }),
          });
        };
      }
    },
    142047: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("272030"),
        s = n("158534"),
        u = n("812204"),
        r = n("861370"),
        o = n("20209"),
        d = n("393522"),
        f = n("390008"),
        c = n("47495"),
        E = n("178261"),
        _ = n("852275"),
        N = n("963150"),
        S = n("308798"),
        C = n("47006"),
        T = n("44141"),
        g = n("531674"),
        A = n("619436"),
        h = n("625399"),
        M = n("339876"),
        I = n("295189"),
        L = n("782340");
      function p(e) {
        let { channel: t, onSelect: n } = e,
          s = (0, T.default)(t),
          u = (0, g.default)(t),
          o = (0, A.default)(t),
          N = (0, _.default)(t),
          S = (0, E.default)(t),
          C = (0, f.default)(t),
          M = (0, d.default)(t),
          p = (0, I.default)(t),
          v = (0, r.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          O = (0, c.useShouldUseNewNotificationSystem)(
            "ChannelCategoryFavoritesMenu"
          ),
          m = (0, h.default)(t);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, a.jsxs)(i.MenuGroup, { children: [s, M, C] }),
            (0, a.jsxs)(i.MenuGroup, { children: [u, O ? m : o] }),
            (0, a.jsxs)(i.MenuGroup, { children: [N, S] }),
            (0, a.jsx)(i.MenuGroup, { children: p }),
            (0, a.jsx)(i.MenuGroup, { children: v }),
          ],
        });
      }
      function v(e) {
        let { channel: t, guild: n, onSelect: s } = e,
          u = (0, T.default)(t),
          o = (0, g.default)(t),
          d = (0, A.default)(t),
          I = (0, _.default)(t),
          p = (0, E.default)(t),
          v = (0, C.default)(t),
          O = (0, f.default)(t),
          m = (0, N.default)(t, n),
          U = (0, S.default)(t),
          y = (0, r.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          R = (0, M.default)(t),
          G = (0, c.useShouldUseNewNotificationSystem)(
            "ChannelCategoryNormalMenu"
          ),
          F = (0, h.default)(t);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: s,
          children: [
            (0, a.jsx)(i.MenuGroup, { children: u }, "mark-as-read"),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [R, I, p] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [o, G ? F : d] },
              "notifications"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [v, O, m, U] },
              "admin-actions"
            ),
            (0, a.jsx)(i.MenuGroup, { children: y }, "developer-actions"),
          ],
        });
      }
      var O = (0, s.default)(
        function (e) {
          let t = (0, o.default)();
          return t ? (0, a.jsx)(p, { ...e }) : (0, a.jsx)(v, { ...e });
        },
        [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU]
      );
    },
    178261: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("820542"),
        u = n("870691"),
        r = n("42203"),
        o = n("49111"),
        d = n("782340");
      function f(e) {
        let t = (0, i.useStateFromStores)([u.default, r.default], () => {
          let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
            n = Object.values(t).filter(
              e => e.type === o.ChannelTypes.GUILD_CATEGORY
            );
          return 0 === n.length || n.every(e => u.default.isCollapsed(e.id));
        });
        return t
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "collapse-all-categories",
              label: d.default.Messages.COLLAPSE_ALL_CATEGORIES,
              action: () => (0, s.categoryCollapseAll)(e.guild_id),
            });
      }
    },
    852275: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("820542"),
        u = n("870691"),
        r = n("782340");
      function o(e) {
        let t = (0, i.useStateFromStores)(
          [u.default],
          () => u.default.isCollapsed(e.id),
          [e.id]
        );
        return (0, a.jsx)(l.MenuCheckboxItem, {
          id: "collapse-category",
          label: r.default.Messages.COLLAPSE_CATEGORY,
          action: () =>
            t ? (0, s.categoryExpand)(e.id) : (0, s.categoryCollapse)(e.id),
          checked: t,
        });
      }
    },
    963150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("957255"),
        u = n("49111"),
        r = n("782340");
      function o(e, t) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          d = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.can(u.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !d) return null;
        let f = () => {
          (0, l.openModalLazy)(async () => {
            let { default: t } = await n.el("581354").then(n.bind(n, "581354"));
            return n =>
              (0, a.jsx)(t, {
                ...n,
                channelType: o,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (o) {
          case u.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: r.default.Messages.CREATE_TEXT_CHANNEL,
              action: f,
            });
          case u.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: r.default.Messages.CREATE_VOICE_CHANNEL,
              action: f,
            });
          default:
            return null;
        }
      }
    },
    308798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("18054"),
        u = n("819689"),
        r = n("430475"),
        o = n("610730"),
        d = n("271938"),
        f = n("957255"),
        c = n("299039"),
        E = n("49111"),
        _ = n("782340");
      function N(e) {
        let t = e.isForumPost(),
          N = (0, i.useStateFromStores)(
            [d.default],
            () => e.isOwner(d.default.getId()),
            [e]
          ),
          { canManageChannel: S, canAccessChannel: C } = (0,
          i.useStateFromStoresObject)(
            [f.default],
            () => ({
              canAccessChannel: f.default.can(e.accessPermissions, e),
              canManageChannel: f.default.can(
                e.isThread()
                  ? E.Permissions.MANAGE_THREADS
                  : E.Permissions.MANAGE_CHANNELS,
                e
              ),
            }),
            [e]
          ),
          T = (0, i.useStateFromStores)(
            [o.default],
            () => {
              var t;
              return null !== (t = o.default.getCount(e.id)) && void 0 !== t
                ? t
                : 0;
            },
            [e.id]
          ),
          { firstMessage: g } = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.getMessage(e.id),
            [e.id]
          ),
          A = t && (S || (N && T < 1)),
          h = t && N && !S && T > 0 && null != g;
        return C && (S || A || h)
          ? (0, a.jsx)(l.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === E.ChannelTypes.GUILD_CATEGORY)
                  return _.default.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return A
                    ? _.default.Messages.DELETE_FORUM_POST
                    : _.default.Messages.DELETE_MESSAGE;
                if (e.isThread()) return _.default.Messages.DELETE_THREAD;
                return _.default.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("575351")
                    .then(n.bind(n, "575351"));
                  return n =>
                    (0, a.jsx)(t, {
                      ...n,
                      onConfirm: () => {
                        n.onClose(),
                          h
                            ? u.default.deleteMessage(
                                e.id,
                                c.default.castChannelIdAsMessageId(e.id)
                              )
                            : s.default.deleteChannel(e.id);
                      },
                      channel: e,
                    });
                }),
            })
          : null;
      }
    },
    47006: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("18054"),
        u = n("957255"),
        r = n("49111"),
        o = n("782340");
      function d(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: d,
          canAccessChannel: f,
        } = (0, i.useStateFromStoresObject)(
          [u.default],
          () => ({
            canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: u.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && f && (t || n || d)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === r.ChannelTypes.GUILD_CATEGORY
                  ? o.default.Messages.EDIT_CATEGORY
                  : o.default.Messages.EDIT_CHANNEL,
              action: () => s.default.open(e.id),
            })
          : null;
      }
    },
    44141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("267363"),
        u = n("680986"),
        r = n("689275"),
        o = n("755624"),
        d = n("233069"),
        f = n("245997"),
        c = n("660478"),
        E = n("49111"),
        _ = n("782340");
      function N(e) {
        let t = (function (e) {
          let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, i.useStateFromStores)(
              [c.default, f.default, r.default, o.default],
              () => {
                if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                if (e.type !== E.ChannelTypes.GUILD_CATEGORY)
                  return c.default.hasUnread(e.id);
                {
                  let t = f.default.getCategories(e.getGuildId());
                  if (null == t[e.id]) return !1;
                  let n = t[e.id].some(e => {
                    let { channel: t } = e;
                    return (
                      (0, d.isReadableType)(t.type) && c.default.hasUnread(t.id)
                    );
                  });
                  if (n) return !0;
                  let a = new Set(t[e.id].map(e => e.channel.id)),
                    i = r.default.getThreadsForGuild(e.guild_id);
                  for (let e in i)
                    if (a.has(e)) {
                      for (let t in i[e])
                        if (
                          o.default.hasJoined(t) &&
                          !o.default.isMuted(t) &&
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
        return (0, a.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: _.default.Messages.MARK_AS_READ,
          action: function () {
            (0, s.ackChannel)(e);
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
            return C;
          },
          default: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("866227"),
        l = n.n(i),
        s = n("446674"),
        u = n("77078"),
        r = n("820542"),
        o = n("519705"),
        d = n("319165"),
        f = n("282109"),
        c = n("34676"),
        E = n("679653"),
        _ = n("49111"),
        N = n("468200"),
        S = n("782340");
      let C = () => [
          {
            value: N.MuteUntilSeconds.MINUTES_15,
            label: S.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: N.MuteUntilSeconds.HOURS_1,
            label: S.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: N.MuteUntilSeconds.HOURS_3,
            label: S.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: N.MuteUntilSeconds.HOURS_8,
            label: S.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: N.MuteUntilSeconds.HOURS_24,
            label: S.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: N.MuteUntilSeconds.ALWAYS,
            label: S.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        T = e => {
          let t = e > 0 ? l().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function g(e, t) {
        let [n, i] = (0, s.useStateFromStoresArray)([f.default], () => [
            f.default.isChannelMuted(e.guild_id, e.id),
            f.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          l = (0, d.useMutedUntilText)(i),
          N = (0, E.default)(e, !0);
        function g(t) {
          t &&
            e.type === _.ChannelTypes.GUILD_CATEGORY &&
            (0, r.categoryCollapse)(e.id),
            o.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              c.NotificationLabel.muted(t)
            );
        }
        let A = S.default.Messages.MUTE_CHANNEL_GENERIC,
          h = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case _.ChannelTypes.GUILD_CATEGORY:
            (A = S.default.Messages.MUTE_CATEGORY),
              (h = S.default.Messages.UNMUTE_CATEGORY);
            break;
          case _.ChannelTypes.GROUP_DM:
            (A = S.default.Messages.MUTE_CONVERSATION),
              (h = S.default.Messages.UNMUTE_CONVERSATION);
            break;
          case _.ChannelTypes.DM:
            (A = S.default.Messages.MUTE_CHANNEL.format({ name: N })),
              (h = S.default.Messages.UNMUTE_CHANNEL.format({ name: N }));
            break;
          default:
            (A = S.default.Messages.MUTE_CHANNEL_GENERIC),
              (h = S.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(u.MenuItem, {
              id: "unmute-channel",
              label: h,
              subtext: l,
              action: () => g(!1),
            })
          : (0, a.jsx)(u.MenuItem, {
              id: "mute-channel",
              label: A,
              action: () => g(!0),
              children: C().map(n => {
                let { value: i, label: l } = n;
                return (0, a.jsx)(
                  u.MenuItem,
                  {
                    id: "".concat(i),
                    label: l,
                    action: () =>
                      (function (n) {
                        e.type === _.ChannelTypes.GUILD_CATEGORY &&
                          (0, r.categoryCollapse)(e.id);
                        let a = T(n);
                        o.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          c.NotificationLabels.Muted,
                          t
                        );
                      })(i),
                  },
                  i
                );
              }),
            });
      }
    },
    619436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelNotificationRadioItems: function () {
            return E;
          },
          default: function () {
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("519705"),
        u = n("721281"),
        r = n("282109"),
        o = n("34676"),
        d = n("49111"),
        f = n("782340");
      function c(e) {
        var t, n, a;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e.type) {
          case d.ChannelTypes.GUILD_VOICE:
            return i
              ? ((t = e),
                [
                  {
                    setting: d.UserNotificationSettings.NULL,
                    label:
                      null != t.parent_id
                        ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                        : f.default.Messages.FORM_LABEL_DEFAULT,
                  },
                  {
                    setting: d.UserNotificationSettings.ALL_MESSAGES,
                    label: f.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY,
                  },
                  {
                    setting: d.UserNotificationSettings.ONLY_MENTIONS,
                    label:
                      f.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format(),
                  },
                  {
                    setting: d.UserNotificationSettings.NO_MESSAGES,
                    label: f.default.Messages.FORM_LABEL_NOTHING,
                  },
                ])
              : null;
          case d.ChannelTypes.GUILD_STAGE_VOICE:
            return (
              (n = e),
              [
                {
                  setting: d.UserNotificationSettings.NULL,
                  label:
                    null != n.parent_id
                      ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : f.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: f.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
          default:
            return (
              (a = e),
              [
                {
                  setting: d.UserNotificationSettings.NULL,
                  label:
                    null != a.parent_id
                      ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : f.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ALL_MESSAGES,
                  label: f.default.Messages.FORM_LABEL_ALL_MESSAGES,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: f.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
        }
      }
      function E(e) {
        let t = e.getGuildId(),
          n = e.id,
          E = (0, i.useStateFromStores)(
            [r.default],
            () => {
              let n = d.UserNotificationSettings.NULL;
              return (
                null != e.parent_id &&
                  (n = r.default.getChannelMessageNotifications(
                    t,
                    e.parent_id
                  )),
                n !== d.UserNotificationSettings.NULL
                  ? n
                  : r.default.getMessageNotifications(t)
              );
            },
            [t, e.parent_id]
          ),
          _ = (0, i.useStateFromStores)([r.default], () =>
            r.default.getNewForumThreadsCreated(e)
          ),
          N = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.getChannelOverrides(t)[n],
            [t, n]
          ),
          S =
            null == N
              ? d.UserNotificationSettings.NULL
              : N.message_notifications,
          C = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
          T = c(e, C);
        return null == T
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: f.default.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: _,
                          action: () => s.default.setForumThreadsCreated(e, !_),
                        }),
                        (0, a.jsx)(l.MenuSeparator, {}),
                      ],
                    })
                  : null,
                T.map(i => {
                  let { setting: u, label: r } = i;
                  return (0, a.jsx)(
                    l.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(u),
                      label: r,
                      subtext:
                        u === d.UserNotificationSettings.NULL
                          ? (function (e, t) {
                              let n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (e) {
                                case d.UserNotificationSettings.ALL_MESSAGES:
                                  return t.type ===
                                    d.ChannelTypes.GUILD_VOICE && n
                                    ? f.default.Messages
                                        .FORM_LABEL_ALL_VOICE_ACTIVITY
                                    : f.default.Messages
                                        .FORM_LABEL_ALL_MESSAGES;
                                case d.UserNotificationSettings.ONLY_MENTIONS:
                                  return f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                case d.UserNotificationSettings.NO_MESSAGES:
                                  return f.default.Messages.FORM_LABEL_NOTHING;
                                case d.UserNotificationSettings.NULL:
                                default:
                                  return;
                              }
                            })(E, e, C)
                          : void 0,
                      action: () => {
                        var e;
                        return (
                          (e = u),
                          void (
                            null != t &&
                            s.default.updateChannelOverrideSettings(
                              t,
                              n,
                              { message_notifications: e },
                              o.NotificationLabel.notifications(e)
                            )
                          )
                        );
                      },
                      checked: u === S,
                    },
                    u
                  );
                }),
              ],
            });
      }
      function _(e) {
        var t, n;
        let s = E(e),
          o = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.resolvedMessageNotifications(e),
            [e]
          ),
          _ = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id]
          ),
          N =
            null == _
              ? d.UserNotificationSettings.NULL
              : _.message_notifications,
          S = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
          C =
            N === d.UserNotificationSettings.NULL && e.isGuildStageVoice()
              ? f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
              : null === (n = c(e, S)) || void 0 === n
                ? void 0
                : null ===
                      (t = n.find(e => {
                        let { setting: t } = e;
                        return t === o;
                      })) || void 0 === t
                  ? void 0
                  : t.label;
        return null != s
          ? (0, a.jsx)(l.MenuItem, {
              id: "channel-notifications",
              label: f.default.Messages.NOTIFICATION_SETTINGS,
              subtext: C,
              children: s,
            })
          : null;
      }
    },
    339876: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("498139"),
        u = n("629220"),
        r = n("512395"),
        o = n("282109"),
        d = n("49111"),
        f = n("782340");
      function c(e) {
        let { isFavoritesPerk: t } = (0, s.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, r.useOptInEnabledForGuild)(e.guild_id),
          c = (0, i.useStateFromStores)([o.default], () =>
            o.default.isChannelOptedIn(e.guild_id, e.id)
          ),
          E = (0, i.useStateFromStores)(
            [o.default],
            () =>
              null != e.parent_id &&
              o.default.isChannelOptedIn(e.guild_id, e.parent_id)
          ),
          _ = (0, i.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.guild_id, e.id)
          ),
          N = () => {
            (0, u.setOptInChannel)(e.guild_id, e.id, !c, {
              section: d.AnalyticsSections.CONTEXT_MENU,
            });
          },
          S = () => {
            null != e.parent_id &&
              (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                section: d.AnalyticsSections.CONTEXT_MENU,
              });
          };
        if (!n || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: c
              ? f.default.Messages.CHANNEL_OPT_OUT
              : f.default.Messages.CHANNEL_OPT_IN,
            action: () => N(),
          });
        let C = _
            ? f.default.Messages.REMOVE_FAVORITE
            : f.default.Messages.ADD_FAVORITE,
          T = _
            ? f.default.Messages.UNPIN_CHANNEL
            : f.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? T : C,
              action: () => {
                (0, u.setIsFavorite)(e.guild_id, e.id, !_, {
                  section: d.AnalyticsSections.CONTEXT_MENU,
                });
              },
            }),
            E
              ? (0, a.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: f.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => S(),
                })
              : (0, a.jsx)(l.MenuItem, {
                  id: "opt-into-channel",
                  label: c
                    ? f.default.Messages.CHANNEL_OPT_OUT
                    : f.default.Messages.CHANNEL_OPT_IN,
                  action: () => N(),
                }),
          ],
        });
      }
    },
    295189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("200008"),
        s = n("782340");
      function u(e) {
        return (0, a.jsx)(i.MenuItem, {
          id: "delete-channel",
          label: s.default.Messages.REMOVE_CATEGORY,
          subtext: s.default.Messages.DELETE_CATEGORY_SUBTEXT,
          color: "danger",
          action: () =>
            (0, i.openModalLazy)(async () => {
              let { default: t } = await n
                .el("338052")
                .then(n.bind(n, "338052"));
              return n =>
                (0, a.jsx)(t, {
                  ...n,
                  onConfirm: () => {
                    n.onClose(), (0, l.removeFavoriteCategory)(e.id);
                  },
                  channel: e,
                });
            }),
        });
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
            return E;
          },
          setFavoriteChannelNickname: function () {
            return _;
          },
          addFavoriteCategory: function () {
            return N;
          },
          removeFavoriteCategory: function () {
            return S;
          },
          updateFavoriteChannels: function () {
            return C;
          },
          updateFavoriteChannelParent: function () {
            return T;
          },
          toggleFavoriteServerMuted: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("151426"),
        i = n("872173"),
        l = n("42203"),
        s = n("957255"),
        u = n("299039"),
        r = n("379881"),
        o = n("843455");
      function d() {
        let e = r.default.getFavoriteChannels(),
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
          let i = l.default.getChannel(t);
          if (
            null == i ||
            (!i.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, i))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function c(e, t) {
        let n = r.default.isFavorite(e);
        !n &&
          i.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = a.FavoriteChannel.create({
                nickname: "",
                type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                f(n.favoriteChannels);
            },
            i.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function E(e) {
        let t = r.default.getFavorite(e);
        null != t &&
          i.PreloadedUserSettingsActionCreators.updateAsync(
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
            i.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function _(e, t) {
        let n = r.default.isFavorite(e);
        n &&
          i.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            i.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function N(e) {
        let t = u.default.fromTimestamp(Date.now());
        i.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = a.FavoriteChannel.create({
              nickname: e,
              type: a.FavoriteChannelType.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          i.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function S(e) {
        E(e);
      }
      function C(e) {
        i.PreloadedUserSettingsActionCreators.updateAsync(
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
          i.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function T(e, t) {
        i.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          i.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g() {
        i.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          i.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    20209: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("446674"),
        i = n("162771"),
        l = n("49111");
      function s() {
        let e = (0, a.useStateFromStores)([i.default], () =>
          i.default.getGuildId()
        );
        return e === l.FAVORITES;
      }
    },
    393522: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("162771"),
        u = n("351825"),
        r = n("498139"),
        o = n("49111"),
        d = n("782340");
      function f(e) {
        let t = (0, i.useStateFromStores)([s.default], () =>
            s.default.getGuildId()
          ),
          f = e.type === o.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, r.useFavoritesServerExperiment)(
            "useCategoryAddChannelItem"
          );
        return !__OVERLAY__ && t === o.FAVORITES && c && f
          ? (0, a.jsx)(l.MenuItem, {
              id: "add-channel-to-category",
              icon: u.default,
              color: "brand",
              label: d.default.Messages.FAVORITES_ADD_A_CHANNEL,
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("746039")
                    .then(n.bind(n, "746039"));
                  return n => (0, a.jsx)(t, { ...n, parentId: e.id });
                });
              },
            })
          : null;
      }
    },
    390008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("162771"),
        u = n("498139"),
        r = n("49111"),
        o = n("782340");
      function d(e) {
        let t = (0, i.useStateFromStores)([s.default], () =>
            s.default.getGuildId()
          ),
          d = e.type === r.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: f } = (0, u.useFavoritesServerExperiment)(
            "useChannelFavoriteSetNickname"
          );
        return __OVERLAY__ || t !== r.FAVORITES
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                f && d
                  ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                  : o.default.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("353228")
                    .then(n.bind(n, "353228"));
                  return n =>
                    (0, a.jsx)(t, {
                      ...n,
                      channelId: e.id,
                      heading:
                        f && d
                          ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                          : o.default.Messages.CHANGE_NICKNAME,
                      formTitle:
                        f && d
                          ? o.default.Messages.CATEGORY_NAME
                          : o.default.Messages.NICKNAME,
                      allowReset: !(f && d),
                    });
                });
              },
            });
      }
    },
    721281: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useVoiceActivityNotificationSettingsExperiment: function () {
            return u;
          },
          hasVoiceChannelActivityNotifsEnabled: function () {
            return r;
          },
        });
      var a = n("862205"),
        i = n("49111");
      let l = (0, a.createExperiment)({
          kind: "user",
          id: "2023-11_voice_activity_notification_user",
          label: "Voice Activity Notifications for User",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Voice Activity Notifications are enabled for user",
              config: { enabled: !0 },
            },
            {
              id: 2,
              label:
                "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
              config: { enabled: !1 },
            },
          ],
        }),
        s = (0, a.createExperiment)({
          kind: "guild",
          id: "2023-11_voice_activity_notification_guild",
          label: "General Voice Channel Notifications for Guild",
          defaultConfig: { voiceChannelActivityNotifsEnabled: !1 },
          treatments: [
            {
              id: 2,
              label:
                "Deadchat notifs disabled, voice channel activity notifs enabled",
              config: { voiceChannelActivityNotifsEnabled: !0 },
            },
          ],
        });
      function u(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = s.useExperiment(
            {
              location: "useVoiceActivityNotificationSettingsExperiment",
              guildId:
                null !== (t = null == e ? void 0 : e.getGuildId()) &&
                void 0 !== t
                  ? t
                  : i.EMPTY_STRING_SNOWFLAKE_ID,
            },
            {
              disable:
                (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
              autoTrackExposure: !1,
            }
          ),
          { enabled: a } = l.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment" },
            {
              disable:
                (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE ||
                !n,
              autoTrackExposure: !0,
            }
          );
        return (
          (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
        );
      }
      function r(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = s.getCurrentConfig({
          guildId:
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : i.EMPTY_STRING_SNOWFLAKE_ID,
          location: "hasVoiceChannelActivityNotifsEnabled",
        });
        return n;
      }
    },
    492114: function (e, t, n) {
      "use strict";
      let a, i, l, s, u, r;
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var o = n("917351"),
        d = n.n(o),
        f = n("866227"),
        c = n.n(f),
        E = n("446674"),
        _ = n("872717"),
        N = n("913144"),
        S = n("233069"),
        C = n("813006"),
        T = n("517763"),
        g = n("766274"),
        A = n("42203"),
        h = n("49111");
      let M = h.FormStates.CLOSED,
        I = {},
        L = {},
        p = !1,
        v = !1,
        O = null,
        m = [
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
      function U(e) {
        let t = A.default.getChannel(e.channelId);
        if (null == t) return R();
        (M = h.FormStates.OPEN),
          (s = l = t),
          (O = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != s && (s = s.set("nsfw", s.isNSFW())),
          (u = A.default.getChannel(s.parent_id)),
          (r = s.getGuildId()),
          (I = {}),
          y({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : h.ChannelSettingsSections.OVERVIEW,
            subsection: i,
          });
      }
      function y(e) {
        (a = e.section),
          (i = e.subsection),
          null != s &&
            a === h.ChannelSettingsSections.INSTANT_INVITES &&
            ((p = !0),
            _.HTTP.get({
              url: h.Endpoints.INSTANT_INVITES(s.id),
              oldFormErrors: !0,
            }).then(
              e => {
                (p = !1),
                  N.default.dispatch({
                    type: "CHANNEL_SETTINGS_LOADED_INVITES",
                    invites: e.body,
                  });
              },
              () => (p = !1)
            ));
      }
      function R() {
        (v = !1),
          (M = h.FormStates.CLOSED),
          (a = null),
          (s = l = null),
          (u = null),
          (L = {});
      }
      let G = d.debounce(() => {
        if (null == s || null == l) return !1;
        let e = s.toJS(),
          t = l.toJS(),
          n = m.every(n => e[n] === t[n]);
        n && s !== l && ((s = l), x.emitChange());
      }, 500);
      function F(e) {
        return new T.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new g.default(e.inviter) : null,
          channel: (0, S.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new C.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: c(e.created_at),
          type: e.type,
        });
      }
      class b extends E.default.Store {
        initialize() {
          this.waitFor(A.default);
        }
        hasChanges() {
          return s !== l;
        }
        isOpen() {
          return v;
        }
        getSection() {
          return a;
        }
        getInvites() {
          return { invites: L, loading: p };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return s;
        }
        getFormState() {
          return M;
        }
        getCategory() {
          return u;
        }
        getProps() {
          return {
            submitting: M === h.FormStates.SUBMITTING,
            errors: I,
            channel: s,
            section: a,
            subsection: i,
            invites: L,
            selectedOverwriteId: r,
            hasChanges: this.hasChanges(),
            analyticsLocation: O,
          };
        }
      }
      b.displayName = "ChannelSettingsStore";
      let x = new b(N.default, {
        CHANNEL_SETTINGS_INIT: U,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (v = !0), U(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (M = h.FormStates.SUBMITTING), (I = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (l = s), (M = h.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (M = h.FormStates.OPEN),
            (I = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, o.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: R,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          r = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: i,
            userLimit: l,
            nsfw: u,
            flags: r,
            rateLimitPerUser: o,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: f,
            locked: c,
            invitable: E,
            defaultAutoArchiveDuration: _,
            template: N,
            defaultReactionEmoji: S,
            rtcRegion: C,
            videoQualityMode: T,
            availableTags: g,
            defaultSortOrder: A,
            defaultForumLayout: h,
            iconEmoji: M,
            themeColor: I,
          } = e;
          if (null == s) return !1;
          null != t && (s = s.set("name", t)),
            null != a && (s = s.set("topic", a)),
            null != i && (s = s.set("bitrate", i)),
            null != l && (s = s.set("userLimit", l)),
            null != u && (s = s.set("nsfw", u)),
            null != r && (s = s.set("flags", r)),
            null != o && (s = s.set("rateLimitPerUser", o)),
            null != d && (s = s.set("defaultThreadRateLimitPerUser", d)),
            null != f &&
              (s = s.set("threadMetadata", {
                ...s.threadMetadata,
                autoArchiveDuration: f,
              })),
            null != c &&
              (s = s.set("threadMetadata", { ...s.threadMetadata, locked: c })),
            null != E &&
              (s = s.set("threadMetadata", {
                ...s.threadMetadata,
                invitable: E,
              })),
            null != _ && (s = s.set("defaultAutoArchiveDuration", _)),
            null != N && (s = s.set("template", N)),
            null != n && (s = s.set("type", n)),
            void 0 !== C && (s = s.set("rtcRegion", C)),
            null != T && (s = s.set("videoQualityMode", T)),
            void 0 !== S && (s = s.set("defaultReactionEmoji", S)),
            null != g && (s = s.set("availableTags", g)),
            null != A && (s = s.set("defaultSortOrder", A)),
            null != h && (s = s.set("defaultForumLayout", h)),
            void 0 !== M && (s = s.set("iconEmoji", M)),
            null != I && (s = s.set("themeColor", I)),
            G();
        },
        CHANNEL_SETTINGS_SET_SECTION: y,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (L = {}),
            e.invites.forEach(e => {
              L[e.code] = F(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == s) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == l || l.id !== e) return !1;
              if (l === s) {
                let t = A.default.getChannel(e);
                if (null == t) return !1;
                (s = l = t), (u = A.default.getChannel(s.parent_id));
              } else {
                let t = A.default.getChannel(e);
                if (null == t) return !1;
                (l = t),
                  null != s &&
                    ((s = s.set(
                      "permissionOverwrites",
                      l.permissionOverwrites
                    )),
                    (u = A.default.getChannel(s.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != s &&
              (null != r &&
                null == s.permissionOverwrites[r] &&
                (r = s.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == s || s.id !== t) return !1;
          M = h.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (L = { ...L }), delete L[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          L = { ...L, [e.invite.code]: F(e.invite) };
        },
      });
      var D = x;
    },
  },
]);
//# sourceMappingURL=35f6dff0749601fe301d.js.map
