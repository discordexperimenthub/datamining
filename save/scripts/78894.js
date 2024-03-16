(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78894"],
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
            return u;
          },
          categoryExpandAll: function () {
            return r;
          },
        });
      var a = n("913144");
      function i(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function l(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function u(e) {
        a.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function r(e) {
        a.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    126501: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("913144"),
        i = n("679428"),
        l = n("282109"),
        u = {
          update(e) {
            a.default.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
          },
          toggleCollapseGuild(e) {
            i.default.saveUserGuildSettings(e, {
              hide_muted_channels: !l.default.isGuildCollapsed(e),
            }),
              a.default.dispatch({
                type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                guildId: e,
              });
          },
        };
    },
    18054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          init: function () {
            return d;
          },
          close: function () {
            return c;
          },
          setSection: function () {
            return f;
          },
          updateChannel: function () {
            return E;
          },
          saveChannel: function () {
            return _;
          },
          deleteChannel: function () {
            return S;
          },
          default: function () {
            return N;
          },
        }),
        n("702976");
      var a = n("872717"),
        i = n("913144"),
        l = n("81732");
      n("21121"), n("693051");
      var u = n("263024");
      n("492114");
      var r = n("42203"),
        s = n("54239"),
        o = n("49111");
      function d(e, t, n) {
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function c() {
        i.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function f(e) {
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
          userLimit: u,
          nsfw: r,
          flags: s,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: C,
          invitable: T,
          availableTags: v,
          defaultSortOrder: g,
          defaultForumLayout: h,
          iconEmoji: A,
          themeColor: M,
        } = e;
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: l,
          userLimit: u,
          nsfw: r,
          flags: s,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: C,
          invitable: T,
          availableTags: v,
          defaultSortOrder: g,
          defaultForumLayout: h,
          iconEmoji: A,
          themeColor: M,
        });
      }
      async function _(e, t) {
        let {
            name: n,
            type: s,
            position: d,
            topic: c,
            bitrate: f,
            userLimit: E,
            nsfw: _,
            flags: S,
            permissionOverwrites: N,
            rateLimitPerUser: C,
            defaultThreadRateLimitPerUser: T,
            defaultAutoArchiveDuration: v,
            template: g,
            defaultReactionEmoji: h,
            rtcRegion: A,
            videoQualityMode: M,
            autoArchiveDuration: m,
            locked: L,
            invitable: I,
            availableTags: p,
            defaultSortOrder: O,
            defaultForumLayout: U,
            iconEmoji: F,
            themeColor: y,
          } = t,
          G = r.default.getChannel(e);
        return (
          i.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.default.unarchiveThreadIfNecessary(e),
          a.default
            .patch({
              url: o.Endpoints.CHANNEL(e),
              body: {
                name: n,
                type: s,
                position: d,
                topic: c,
                bitrate: f,
                user_limit: E,
                nsfw: _,
                flags: S,
                permission_overwrites: N,
                rate_limit_per_user: C,
                default_thread_rate_limit_per_user: T,
                default_auto_archive_duration: v,
                template: g,
                rtc_region: A,
                video_quality_mode: M,
                auto_archive_duration: m,
                locked: L,
                invitable: I,
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
                  null == p
                    ? void 0
                    : p.map(e => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: O,
                default_forum_layout: U,
                icon_emoji:
                  null != F
                    ? { id: F.id, name: F.name }
                    : null === F
                      ? null
                      : void 0,
                theme_color: y,
              },
              oldFormErrors: !0,
            })
            .then(
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
      function S(e) {
        let t = r.default.getChannel(e);
        a.default
          .delete({ url: o.Endpoints.CHANNEL(e), oldFormErrors: !0 })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              l.default.checkGuildTemplateDirty(e),
              c();
          });
      }
      var N = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, s.pushLayer)(o.Layers.CHANNEL_SETTINGS);
        },
        close: c,
        setSection: f,
        selectPermissionOverwrite: function (e) {
          i.default.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: E,
        saveChannel: _,
        deleteChannel: S,
        updateVoiceChannelStatus: function (e, t) {
          return a.default.put({
            url: o.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
      };
    },
    168003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("272030"),
        r = n("838446"),
        s = n("158534"),
        o = n("846883"),
        d = n("812204"),
        c = n("861370"),
        f = n("20209"),
        E = n("972701"),
        _ = n("390008"),
        S = n("41205"),
        N = n("936947"),
        C = n("379304"),
        T = n("534222"),
        v = n("601131"),
        g = n("47495"),
        h = n("834052"),
        A = n("715243"),
        M = n("458574"),
        m = n("963150"),
        L = n("308798"),
        I = n("47006"),
        p = n("809259"),
        O = n("878526"),
        U = n("44141"),
        F = n("531674"),
        y = n("619436"),
        G = n("625399"),
        R = n("339876"),
        b = n("702741"),
        x = n("782000"),
        D = n("45593"),
        V = n("604887"),
        H = n("958936"),
        j = n("49111"),
        P = n("782340");
      function w(e) {
        let { channel: t, guild: n, onSelect: r } = e,
          s = t.isGuildStageVoice(),
          d = (0, i.useStateFromStores)(
            [h.default],
            () => (s ? h.default.getStageInstanceByChannel(t.id) : void 0),
            [s, t.id]
          ),
          f = (0, M.default)(t),
          C = (0, T.useActiveEvent)(t.id),
          A = (0, v.default)(null == C ? void 0 : C.id, n, t),
          m = (0, x.default)(t, d),
          L = (0, E.useAddToFavoritesItem)(t),
          O = (0, E.useRemoveFromFavoritesItem)(t),
          U = (0, _.default)(t),
          F = (0, S.default)(t),
          R = (0, N.default)(t),
          D = (0, p.default)(t),
          V = (0, y.default)(t),
          j = (0, I.default)(t),
          w = (0, H.default)(t, n),
          Y = (0, c.default)({
            id: t.id,
            label: P.default.Messages.COPY_ID_CHANNEL,
          }),
          B = (0, b.default)(t),
          k = (0, o.default)(t),
          W = (0, g.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuFavorite"
          ),
          Q = (0, G.default)(t);
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: null != C ? A : m }),
            (0, a.jsxs)(l.MenuGroup, { children: [F, R, U, L] }),
            (0, a.jsxs)(l.MenuGroup, { children: [D, W ? Q : V, j] }),
            (0, a.jsx)(l.MenuGroup, { children: k }),
            (0, a.jsx)(l.MenuGroup, { children: O }),
            (0, a.jsxs)(l.MenuGroup, { children: [w, f] }),
            (0, a.jsx)(l.MenuGroup, { children: B }),
            (0, a.jsx)(l.MenuGroup, { children: Y }),
          ],
        });
      }
      function Y(e) {
        let { channel: t, guild: n, onSelect: r } = e,
          s = t.isGuildStageVoice(),
          d = (0, i.useStateFromStores)(
            [h.default],
            () => (s ? h.default.getStageInstanceByChannel(t.id) : void 0),
            [s, t.id]
          ),
          f = (0, U.default)(t),
          _ = (0, M.default)(t),
          S = (0, T.useActiveEvent)(t.id),
          N = (0, v.default)(null == S ? void 0 : S.id, n, t),
          j = (0, x.default)(t, d),
          w = (0, E.useAddToFavoritesItem)(t),
          Y = (0, E.useRemoveFromFavoritesItem)(t),
          B = (0, p.default)(t),
          k = (0, y.default)(t),
          W = (0, I.default)(t),
          Q = (0, O.default)(t, n, d),
          X = (0, H.default)(t, n),
          K = (0, D.default)(t, n),
          Z = (0, V.default)(t, n.id),
          J = (0, A.default)(t, n),
          z = (0, m.default)(t, n),
          q = (0, L.default)(t),
          $ = (0, c.default)({
            id: t.id,
            label: P.default.Messages.COPY_ID_CHANNEL,
          }),
          ee = (0, b.default)(t),
          et = (0, o.default)(t),
          en = (0, R.default)(t),
          ea = (0, C.default)(t),
          ei = (0, F.default)(t),
          el = (0, g.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuNormal"
          ),
          eu = (0, G.default)(t);
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: null != S ? N : j }),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [f, w] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [Q, et, en, _] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [Z, X, K, B, ea, ee] },
              "voice-actions"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [ei, el ? eu : k] },
              "notifications"
            ),
            (0, a.jsx)(l.MenuGroup, { children: Y }),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [W, J, z, q] },
              "admin-actions"
            ),
            (0, a.jsx)(l.MenuGroup, { children: $ }, "developer-actions"),
          ],
        });
      }
      var B = (0, s.default)(
        (0, r.default)(
          function (e) {
            let t = (0, f.default)();
            return t ? (0, a.jsx)(w, { ...e }) : (0, a.jsx)(Y, { ...e });
          },
          { object: j.AnalyticsObjects.CONTEXT_MENU }
        ),
        [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_VOICE_CHANNEL_MENU]
      );
    },
    458574: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("281071"),
        l = n("65597"),
        u = n("77078"),
        r = n("867965"),
        s = n("42203"),
        o = n("404008"),
        d = n("49111"),
        c = n("782340");
      function f(e, t, n) {
        let f = (0, l.default)([s.default], () =>
          s.default.getChannel(e.parent_id)
        );
        return (0, a.jsx)(u.MenuItem, {
          id: "channel-copy-link",
          label: c.default.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, r.trackForumPostLinkCopied)({
                postId: e.id,
                location: { section: d.AnalyticsSections.CONTEXT_MENU },
              }),
              (0, i.copy)((0, o.getChannelLinkToCopy)(e, f, t, n));
          },
        });
      }
    },
    308798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("18054"),
        r = n("819689"),
        s = n("430475"),
        o = n("610730"),
        d = n("271938"),
        c = n("957255"),
        f = n("299039"),
        E = n("49111"),
        _ = n("782340");
      function S(e) {
        let t = e.isForumPost(),
          S = (0, i.useStateFromStores)(
            [d.default],
            () => e.isOwner(d.default.getId()),
            [e]
          ),
          { canManageChannel: N, canAccessChannel: C } = (0,
          i.useStateFromStoresObject)(
            [c.default],
            () => ({
              canAccessChannel: c.default.can(e.accessPermissions, e),
              canManageChannel: c.default.can(
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
          { firstMessage: v } = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.getMessage(e.id),
            [e.id]
          ),
          g = t && (N || (S && T < 1)),
          h = t && S && !N && T > 0 && null != v;
        return C && (N || g || h)
          ? (0, a.jsx)(l.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === E.ChannelTypes.GUILD_CATEGORY)
                  return _.default.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return g
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
                            ? r.default.deleteMessage(
                                e.id,
                                f.default.castChannelIdAsMessageId(e.id)
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
    809259: function (e, t, n) {
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
        u = n("126501"),
        r = n("816092"),
        s = n("782340");
      function o(e) {
        let t = (0, i.useStateFromStores)(
          [r.default],
          () => r.default.isCollapsed(e.id),
          [e.id]
        );
        return __OVERLAY__
          ? null
          : (0, a.jsx)(l.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: s.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
              action: () => u.default.update(e.id),
              checked: t,
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
            return v;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("866227"),
        l = n.n(i),
        u = n("446674"),
        r = n("77078"),
        s = n("820542"),
        o = n("519705"),
        d = n("319165"),
        c = n("282109"),
        f = n("34676"),
        E = n("679653"),
        _ = n("49111"),
        S = n("468200"),
        N = n("782340");
      let C = () => [
          {
            value: S.MuteUntilSeconds.MINUTES_15,
            label: N.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: S.MuteUntilSeconds.HOURS_1,
            label: N.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: S.MuteUntilSeconds.HOURS_3,
            label: N.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: S.MuteUntilSeconds.HOURS_8,
            label: N.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: S.MuteUntilSeconds.HOURS_24,
            label: N.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: S.MuteUntilSeconds.ALWAYS,
            label: N.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        T = e => {
          let t = e > 0 ? l().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function v(e, t) {
        let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          l = (0, d.useMutedUntilText)(i),
          S = (0, E.default)(e, !0);
        function v(t) {
          t &&
            e.type === _.ChannelTypes.GUILD_CATEGORY &&
            (0, s.categoryCollapse)(e.id),
            o.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let g = N.default.Messages.MUTE_CHANNEL_GENERIC,
          h = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case _.ChannelTypes.GUILD_CATEGORY:
            (g = N.default.Messages.MUTE_CATEGORY),
              (h = N.default.Messages.UNMUTE_CATEGORY);
            break;
          case _.ChannelTypes.GROUP_DM:
            (g = N.default.Messages.MUTE_CONVERSATION),
              (h = N.default.Messages.UNMUTE_CONVERSATION);
            break;
          case _.ChannelTypes.DM:
            (g = N.default.Messages.MUTE_CHANNEL.format({ name: S })),
              (h = N.default.Messages.UNMUTE_CHANNEL.format({ name: S }));
            break;
          default:
            (g = N.default.Messages.MUTE_CHANNEL_GENERIC),
              (h = N.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: h,
              subtext: l,
              action: () => v(!1),
            })
          : (0, a.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: g,
              action: () => v(!0),
              children: C().map(n => {
                let { value: i, label: l } = n;
                return (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "".concat(i),
                    label: l,
                    action: () =>
                      (function (n) {
                        e.type === _.ChannelTypes.GUILD_CATEGORY &&
                          (0, s.categoryCollapse)(e.id);
                        let a = T(n);
                        o.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          f.NotificationLabels.Muted,
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
        u = n("519705"),
        r = n("721281"),
        s = n("282109"),
        o = n("34676"),
        d = n("49111"),
        c = n("782340");
      function f(e) {
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
                        ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                        : c.default.Messages.FORM_LABEL_DEFAULT,
                  },
                  {
                    setting: d.UserNotificationSettings.ALL_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY,
                  },
                  {
                    setting: d.UserNotificationSettings.ONLY_MENTIONS,
                    label:
                      c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format(),
                  },
                  {
                    setting: d.UserNotificationSettings.NO_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_NOTHING,
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
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
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
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: d.UserNotificationSettings.ALL_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_ALL_MESSAGES,
                },
                {
                  setting: d.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                },
                {
                  setting: d.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
        }
      }
      function E(e) {
        let t = e.getGuildId(),
          n = e.id,
          E = (0, i.useStateFromStores)(
            [s.default],
            () => {
              let n = d.UserNotificationSettings.NULL;
              return (
                null != e.parent_id &&
                  (n = s.default.getChannelMessageNotifications(
                    t,
                    e.parent_id
                  )),
                n !== d.UserNotificationSettings.NULL
                  ? n
                  : s.default.getMessageNotifications(t)
              );
            },
            [t, e.parent_id]
          ),
          _ = (0, i.useStateFromStores)([s.default], () =>
            s.default.getNewForumThreadsCreated(e)
          ),
          S = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.getChannelOverrides(t)[n],
            [t, n]
          ),
          N =
            null == S
              ? d.UserNotificationSettings.NULL
              : S.message_notifications,
          C = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
          T = f(e, C);
        return null == T
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: _,
                          action: () => u.default.setForumThreadsCreated(e, !_),
                        }),
                        (0, a.jsx)(l.MenuSeparator, {}),
                      ],
                    })
                  : null,
                T.map(i => {
                  let { setting: r, label: s } = i;
                  return (0, a.jsx)(
                    l.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(r),
                      label: s,
                      subtext:
                        r === d.UserNotificationSettings.NULL
                          ? (function (e, t) {
                              let n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (e) {
                                case d.UserNotificationSettings.ALL_MESSAGES:
                                  return t.type ===
                                    d.ChannelTypes.GUILD_VOICE && n
                                    ? c.default.Messages
                                        .FORM_LABEL_ALL_VOICE_ACTIVITY
                                    : c.default.Messages
                                        .FORM_LABEL_ALL_MESSAGES;
                                case d.UserNotificationSettings.ONLY_MENTIONS:
                                  return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                case d.UserNotificationSettings.NO_MESSAGES:
                                  return c.default.Messages.FORM_LABEL_NOTHING;
                                case d.UserNotificationSettings.NULL:
                                default:
                                  return;
                              }
                            })(E, e, C)
                          : void 0,
                      action: () => {
                        var e;
                        return (
                          (e = r),
                          void (
                            null != t &&
                            u.default.updateChannelOverrideSettings(
                              t,
                              n,
                              { message_notifications: e },
                              o.NotificationLabel.notifications(e)
                            )
                          )
                        );
                      },
                      checked: r === N,
                    },
                    r
                  );
                }),
              ],
            });
      }
      function _(e) {
        var t, n;
        let u = E(e),
          o = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.resolvedMessageNotifications(e),
            [e]
          ),
          _ = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id]
          ),
          S =
            null == _
              ? d.UserNotificationSettings.NULL
              : _.message_notifications,
          N = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
          C =
            S === d.UserNotificationSettings.NULL && e.isGuildStageVoice()
              ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
              : null === (n = f(e, N)) || void 0 === n
                ? void 0
                : null ===
                      (t = n.find(e => {
                        let { setting: t } = e;
                        return t === o;
                      })) || void 0 === t
                  ? void 0
                  : t.label;
        return null != u
          ? (0, a.jsx)(l.MenuItem, {
              id: "channel-notifications",
              label: c.default.Messages.NOTIFICATION_SETTINGS,
              subtext: C,
              children: u,
            })
          : null;
      }
    },
    702741: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("377114"),
        u = n("834052"),
        r = n("907566"),
        s = n("782340");
      function o(e) {
        let t = u.default.isLive(e.id);
        return e.isGuildStageVoice() && t
          ? (0, a.jsx)(i.MenuItem, {
              id: "report-stage",
              label: s.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
              action: () => (0, l.showReportModalForStageChannel)(e),
              icon: r.default,
              color: "danger",
            })
          : null;
      }
    },
    782e3: function (e, t, n) {
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
        u = n("244480"),
        r = n("923510"),
        s = n("957255"),
        o = n("782340");
      function d(e, t) {
        let n = (0, i.useStateFromStores)(
          [s.default],
          () => s.default.can(r.MODERATE_STAGE_CHANNEL_PERMISSIONS, e),
          [e]
        );
        return null != t && n
          ? (0, a.jsx)(l.MenuItem, {
              id: "end-stage",
              label: o.default.Messages.END_STAGE,
              color: "danger",
              action: function () {
                (0, l.openModal)(t =>
                  (0, a.jsx)(l.ConfirmModal, {
                    ...t,
                    header: o.default.Messages.END_STAGE_TITLE,
                    confirmText: o.default.Messages.END_STAGE,
                    cancelText: o.default.Messages.CANCEL,
                    onConfirm: () => (0, u.endStage)(e),
                    children: (0, a.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE,
                    }),
                  })
                );
              },
            })
          : null;
      }
    },
    45593: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("18054"),
        r = n("843624"),
        s = n("259141"),
        o = n("957255"),
        d = n("207273"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let E = (0, i.useStateFromStores)([o.default], () =>
            o.default.can(c.Permissions.MANAGE_CHANNELS, t)
          ),
          _ = (0, i.useStateFromStores)([o.default], () =>
            o.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)
          ),
          S = (0, s.useIsConnectedToVoiceChannel)(e),
          N = (0, i.useStateFromStores)([d.default], () =>
            d.default.getChannelStatus(e)
          ),
          C = null != N && N.length > 0;
        return e.isGuildVoice() && (E || _)
          ? !S && E && C
            ? (0, a.jsx)(l.MenuItem, {
                id: "clear-status",
                label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                action: () => {
                  u.default.updateVoiceChannelStatus(e.id, "");
                },
              })
            : S && _
              ? (0, a.jsx)(l.MenuItem, {
                  id: "set-status",
                  label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
                  action: () => {
                    (0, l.openModalLazy)(
                      async () => {
                        let { default: t } = await n
                          .el("843624")
                          .then(n.bind(n, "843624"));
                        return n => (0, a.jsx)(t, { channel: e, ...n });
                      },
                      { modalKey: r.VOICE_CHANNEL_STATUS_MODAL_KEY }
                    );
                  },
                })
              : null
          : null;
      }
    },
    604887: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("155823"),
        u = n("987317"),
        r = n("305122"),
        s = n("675961"),
        o = n("957255"),
        d = n("18494"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let n = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.can(c.Permissions.CONNECT, e),
            [e]
          ),
          E = (0, i.useStateFromStores)([d.default], () =>
            d.default.getVoiceChannelId()
          ),
          _ = (0, s.useCustomJoinSound)(t),
          S = E === e.id;
        return e.isGuildVocal() && n && null != _ && !S
          ? (0, a.jsx)(l.MenuItem, {
              id: "join-muted-custom-join-sound",
              label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
              action: () => {
                (0, r.muteCustomJoinSound)(e.id),
                  u.default.selectVoiceChannel(e.id);
              },
            })
          : null;
      }
    },
    958936: function (e, t, n) {
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
        u = n("255397"),
        r = n("393414"),
        s = n("957255"),
        o = n("49111"),
        d = n("782340");
      function c(e, t) {
        let n = (0, i.useStateFromStores)(
          [s.default],
          () => s.default.can(o.Permissions.CONNECT, e),
          [e]
        );
        return n && e.isGuildVocal()
          ? (0, a.jsx)(l.MenuItem, {
              id: "open-chat",
              label: d.default.Messages.OPEN_CHAT,
              action: () => {
                u.default.updateChatOpen(e.id, !0),
                  (0, r.transitionToGuild)(t.id, e.id);
              },
            })
          : null;
      }
    },
    200008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addFavoriteChannel: function () {
            return f;
          },
          removeFavoriteChannel: function () {
            return E;
          },
          setFavoriteChannelNickname: function () {
            return _;
          },
          addFavoriteCategory: function () {
            return S;
          },
          removeFavoriteCategory: function () {
            return N;
          },
          updateFavoriteChannels: function () {
            return C;
          },
          updateFavoriteChannelParent: function () {
            return T;
          },
          toggleFavoriteServerMuted: function () {
            return v;
          },
        }),
        n("222007");
      var a = n("151426"),
        i = n("872173"),
        l = n("42203"),
        u = n("957255"),
        r = n("299039"),
        s = n("379881"),
        o = n("843455");
      function d() {
        let e = s.default.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function c(e) {
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
            (!i.isPrivate() && !u.default.can(o.Permissions.VIEW_CHANNEL, i))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function f(e, t) {
        let n = s.default.isFavorite(e);
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
                c(n.favoriteChannels);
            },
            i.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function E(e) {
        let t = s.default.getFavorite(e);
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
              c(n.favoriteChannels);
            },
            i.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function _(e, t) {
        let n = s.default.isFavorite(e);
        n &&
          i.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            i.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function S(e) {
        let t = r.default.fromTimestamp(Date.now());
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
      function N(e) {
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
      function v() {
        i.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          i.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    986373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanFavoriteChannel: function () {
            return E;
          },
          useFavorite: function () {
            return _;
          },
          useFavoritesCategories: function () {
            return S;
          },
          useFavoritesGuildSelected: function () {
            return N;
          },
          useFavoriteAdded: function () {
            return C;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("884691"),
        i = n("298386"),
        l = n("446674");
      n("42203");
      var u = n("923959"),
        r = n("162771"),
        s = n("697218");
      n("299039");
      var o = n("379881"),
        d = n("498139"),
        c = n("136569"),
        f = n("49111");
      function E(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0,
          d.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          a = (0, l.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.id)
          ),
          i = (0, l.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          ),
          u = e.isDM() || e.isThread(),
          r = !u || (n && (null == i ? void 0 : i.isStaff()) === !0);
        return t && !__OVERLAY__ && !a && r;
      }
      function _(e) {
        let t = (0, l.useStateFromStores)([o.default], () =>
          o.default.getFavorite(e)
        );
        return t;
      }
      function S() {
        let e = (0, l.useStateFromStores)([u.default], () =>
          u.default.getChannels(f.FAVORITES)
        )[i.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function N() {
        let e = (0, l.useStateFromStores)([r.default], () =>
          r.default.getGuildId()
        );
        return e === f.FAVORITES;
      }
      function C() {
        let { isFavoritesPerk: e } = (0, d.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, c.useFavoritesTooltipStore)(),
          n = a.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          i = a.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: i,
        };
      }
    },
    136569: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesTooltipStore: function () {
            return i;
          },
        });
      var a = n("308503");
      let i = (0, a.default)(e => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => e({ favoriteAdded: !0 }),
        clearFavoriteAdded: () => e({ favoriteAdded: !1 }),
      }));
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
          getEventException: function () {
            return u;
          },
        });
      var a = n("446674"),
        i = n("398604");
      function l(e, t) {
        let n = (0, a.useStateFromStoresArray)([i.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return r(n, e);
      }
      function u(e, t) {
        var n, a;
        let l =
          null !==
            (a =
              null === (n = i.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== a
            ? a
            : [];
        return r(l, e);
      }
      function r(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n;
      }
    },
    466148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
          getEventSchedule: function () {
            return d;
          },
        });
      var a = n("627445"),
        i = n.n(a),
        l = n("446674"),
        u = n("398604"),
        r = n("397680"),
        s = n("822516");
      function o(e, t, n) {
        var a;
        let o =
          null !==
            (a = (0, l.useStateFromStores)([u.default], () =>
              u.default.getGuildScheduledEvent(e)
            )) && void 0 !== a
            ? a
            : n;
        i(null != o, "Event must be defined"),
          (t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(o));
        let d = (0, r.default)(t, e);
        return c(o, d, t);
      }
      function d(e, t) {
        let n = (0, r.getEventException)(t, e.id);
        return c(e, n, t);
      }
      function c(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let a = (0, s.getBaseScheduleForRecurrence)(n, e),
          { startDate: i, endDate: l } = (0,
          s.getScheduleForRecurrenceWithException)(a, t);
        return {
          startTime: i.toDate(),
          endTime: null == l ? void 0 : l.toDate(),
        };
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return i;
          },
        });
      var a = n("49111");
      function i(e, t, n, i) {
        let l = null != n ? n : t,
          u = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
        return (
          u ||
          (null != t && null != t.vanityURLCode) ||
          (null == i ? void 0 : i.invite_code) != null
        );
      }
    },
    721281: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useVoiceActivityNotificationSettingsExperiment: function () {
            return r;
          },
          hasVoiceChannelActivityNotifsEnabled: function () {
            return s;
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
        u = (0, a.createExperiment)({
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
      function r(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = u.useExperiment(
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
      function s(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = u.getCurrentConfig({
          guildId:
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : i.EMPTY_STRING_SNOWFLAKE_ID,
          location: "hasVoiceChannelActivityNotifsEnabled",
        });
        return n;
      }
    },
    259141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsConnectedToVoiceChannel: function () {
            return u;
          },
        });
      var a = n("446674"),
        i = n("271938"),
        l = n("800762");
      function u(e) {
        return (function (e) {
          return (0, a.useStateFromStores)([l.default, i.default], () =>
            l.default.isInChannel(e, i.default.getId())
          );
        })(null == e ? void 0 : e.id);
      }
    },
    492114: function (e, t, n) {
      "use strict";
      let a, i, l, u, r, s;
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
        c = n("866227"),
        f = n.n(c),
        E = n("446674"),
        _ = n("872717"),
        S = n("913144"),
        N = n("233069"),
        C = n("813006"),
        T = n("517763"),
        v = n("766274"),
        g = n("42203"),
        h = n("49111");
      let A = h.FormStates.CLOSED,
        M = {},
        m = {},
        L = !1,
        I = !1,
        p = null,
        O = [
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
        let t = g.default.getChannel(e.channelId);
        if (null == t) return y();
        (A = h.FormStates.OPEN),
          (u = l = t),
          (p = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (r = g.default.getChannel(u.parent_id)),
          (s = u.getGuildId()),
          (M = {}),
          F({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : h.ChannelSettingsSections.OVERVIEW,
            subsection: i,
          });
      }
      function F(e) {
        (a = e.section),
          (i = e.subsection),
          null != u &&
            a === h.ChannelSettingsSections.INSTANT_INVITES &&
            ((L = !0),
            _.default
              .get({
                url: h.Endpoints.INSTANT_INVITES(u.id),
                oldFormErrors: !0,
              })
              .then(
                e => {
                  (L = !1),
                    S.default.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (L = !1)
              ));
      }
      function y() {
        (I = !1),
          (A = h.FormStates.CLOSED),
          (a = null),
          (u = l = null),
          (r = null),
          (m = {});
      }
      let G = d.debounce(() => {
        if (null == u || null == l) return !1;
        let e = u.toJS(),
          t = l.toJS(),
          n = O.every(n => e[n] === t[n]);
        n && u !== l && ((u = l), x.emitChange());
      }, 500);
      function R(e) {
        return new T.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new v.default(e.inviter) : null,
          channel: (0, N.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new C.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: f(e.created_at),
          type: e.type,
        });
      }
      class b extends E.default.Store {
        initialize() {
          this.waitFor(g.default);
        }
        hasChanges() {
          return u !== l;
        }
        isOpen() {
          return I;
        }
        getSection() {
          return a;
        }
        getInvites() {
          return { invites: m, loading: L };
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
            submitting: A === h.FormStates.SUBMITTING,
            errors: M,
            channel: u,
            section: a,
            subsection: i,
            invites: m,
            selectedOverwriteId: s,
            hasChanges: this.hasChanges(),
            analyticsLocation: p,
          };
        }
      }
      b.displayName = "ChannelSettingsStore";
      let x = new b(S.default, {
        CHANNEL_SETTINGS_INIT: U,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (I = !0), U(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (A = h.FormStates.SUBMITTING), (M = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (l = u), (A = h.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (A = h.FormStates.OPEN),
            (M = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, o.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: y,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          s = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: i,
            userLimit: l,
            nsfw: r,
            flags: s,
            rateLimitPerUser: o,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: c,
            locked: f,
            invitable: E,
            defaultAutoArchiveDuration: _,
            template: S,
            defaultReactionEmoji: N,
            rtcRegion: C,
            videoQualityMode: T,
            availableTags: v,
            defaultSortOrder: g,
            defaultForumLayout: h,
            iconEmoji: A,
            themeColor: M,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != a && (u = u.set("topic", a)),
            null != i && (u = u.set("bitrate", i)),
            null != l && (u = u.set("userLimit", l)),
            null != r && (u = u.set("nsfw", r)),
            null != s && (u = u.set("flags", s)),
            null != o && (u = u.set("rateLimitPerUser", o)),
            null != d && (u = u.set("defaultThreadRateLimitPerUser", d)),
            null != c &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                autoArchiveDuration: c,
              })),
            null != f &&
              (u = u.set("threadMetadata", { ...u.threadMetadata, locked: f })),
            null != E &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                invitable: E,
              })),
            null != _ && (u = u.set("defaultAutoArchiveDuration", _)),
            null != S && (u = u.set("template", S)),
            null != n && (u = u.set("type", n)),
            void 0 !== C && (u = u.set("rtcRegion", C)),
            null != T && (u = u.set("videoQualityMode", T)),
            void 0 !== N && (u = u.set("defaultReactionEmoji", N)),
            null != v && (u = u.set("availableTags", v)),
            null != g && (u = u.set("defaultSortOrder", g)),
            null != h && (u = u.set("defaultForumLayout", h)),
            void 0 !== A && (u = u.set("iconEmoji", A)),
            null != M && (u = u.set("themeColor", M)),
            G();
        },
        CHANNEL_SETTINGS_SET_SECTION: F,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (m = {}),
            e.invites.forEach(e => {
              m[e.code] = R(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == u) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == l || l.id !== e) return !1;
              if (l === u) {
                let t = g.default.getChannel(e);
                if (null == t) return !1;
                (u = l = t), (r = g.default.getChannel(u.parent_id));
              } else {
                let t = g.default.getChannel(e);
                if (null == t) return !1;
                (l = t),
                  null != u &&
                    ((u = u.set(
                      "permissionOverwrites",
                      l.permissionOverwrites
                    )),
                    (r = g.default.getChannel(u.parent_id)));
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
          A = h.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (m = { ...m }), delete m[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          m = { ...m, [e.invite.code]: R(e.invite) };
        },
      });
      var D = x;
    },
    76539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("469563"),
        l = n("715072"),
        u = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: l,
              ...r
            } = e;
            return 16 === t || 16 === n
              ? (0, a.jsxs)("svg", {
                  ...(0, u.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 16 16",
                  children: [
                    (0, a.jsx)("path", {
                      className: l,
                      fill: i,
                      d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z",
                    }),
                    (0, a.jsx)("path", {
                      className: l,
                      fill: i,
                      d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z",
                    }),
                    (0, a.jsx)("path", {
                      className: l,
                      fill: i,
                      d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z",
                    }),
                  ],
                })
              : (0, a.jsx)("svg", {
                  ...(0, u.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 24 24",
                  children: (0, a.jsx)("path", {
                    className: l,
                    fill: i,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z",
                  }),
                });
          },
          l.UserPlusIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=41c113de8007480b2f93.js.map
