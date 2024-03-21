(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9447"],
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
            return s;
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
      function s(e) {
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
      var s = n("42203"),
        o = n("54239"),
        r = n("49111");
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
          nsfw: s,
          flags: o,
          rateLimitPerUser: r,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: T,
          invitable: g,
          availableTags: C,
          defaultSortOrder: A,
          defaultForumLayout: M,
          iconEmoji: I,
          themeColor: h,
        } = e;
        i.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: l,
          userLimit: u,
          nsfw: s,
          flags: o,
          rateLimitPerUser: r,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: E,
          rtcRegion: _,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: T,
          invitable: g,
          availableTags: C,
          defaultSortOrder: A,
          defaultForumLayout: M,
          iconEmoji: I,
          themeColor: h,
        });
      }
      async function _(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: c,
            bitrate: f,
            userLimit: E,
            nsfw: _,
            flags: S,
            permissionOverwrites: N,
            rateLimitPerUser: T,
            defaultThreadRateLimitPerUser: g,
            defaultAutoArchiveDuration: C,
            template: A,
            defaultReactionEmoji: M,
            rtcRegion: I,
            videoQualityMode: h,
            autoArchiveDuration: L,
            locked: p,
            invitable: m,
            availableTags: v,
            defaultSortOrder: O,
            defaultForumLayout: U,
            iconEmoji: R,
            themeColor: y,
          } = t,
          G = s.default.getChannel(e);
        return (
          i.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.default.unarchiveThreadIfNecessary(e),
          a.HTTP.patch({
            url: r.Endpoints.CHANNEL(e),
            body: {
              name: n,
              type: o,
              position: d,
              topic: c,
              bitrate: f,
              user_limit: E,
              nsfw: _,
              flags: S,
              permission_overwrites: N,
              rate_limit_per_user: T,
              default_thread_rate_limit_per_user: g,
              default_auto_archive_duration: C,
              template: A,
              rtc_region: I,
              video_quality_mode: h,
              auto_archive_duration: L,
              locked: p,
              invitable: m,
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
                null == v
                  ? void 0
                  : v.map(e => ({
                      id: e.id,
                      name: e.name,
                      emoji_id: e.emojiId,
                      emoji_name: e.emojiName,
                      moderated: e.moderated,
                    })),
              default_sort_order: O,
              default_forum_layout: U,
              icon_emoji:
                null != R
                  ? { id: R.id, name: R.name }
                  : null === R
                    ? null
                    : void 0,
              theme_color: y,
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
      function S(e) {
        let t = s.default.getChannel(e);
        a.HTTP.del({ url: r.Endpoints.CHANNEL(e), oldFormErrors: !0 }).then(
          () => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              l.default.checkGuildTemplateDirty(e),
              c();
          }
        );
      }
      var N = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, o.pushLayer)(r.Layers.CHANNEL_SETTINGS);
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
          return a.HTTP.put({
            url: r.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
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
            return k;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("272030"),
        s = n("838446"),
        o = n("158534"),
        r = n("846883"),
        d = n("812204"),
        c = n("861370"),
        f = n("20209"),
        E = n("972701"),
        _ = n("390008"),
        S = n("41205"),
        N = n("936947"),
        T = n("379304"),
        g = n("534222"),
        C = n("601131"),
        A = n("47495"),
        M = n("834052"),
        I = n("715243"),
        h = n("458574"),
        L = n("963150"),
        p = n("308798"),
        m = n("47006"),
        v = n("809259"),
        O = n("878526"),
        U = n("44141"),
        R = n("531674"),
        y = n("619436"),
        G = n("625399"),
        b = n("339876"),
        H = n("702741"),
        V = n("782000"),
        x = n("45593"),
        D = n("604887"),
        P = n("958936"),
        F = n("49111"),
        j = n("782340");
      function w(e) {
        let { channel: t, guild: n, onSelect: s } = e,
          o = t.isGuildStageVoice(),
          d = (0, i.useStateFromStores)(
            [M.default],
            () => (o ? M.default.getStageInstanceByChannel(t.id) : void 0),
            [o, t.id]
          ),
          f = (0, h.default)(t),
          T = (0, g.useActiveEvent)(t.id),
          I = (0, C.default)(null == T ? void 0 : T.id, n, t),
          L = (0, V.default)(t, d),
          p = (0, E.useAddToFavoritesItem)(t),
          O = (0, E.useRemoveFromFavoritesItem)(t),
          U = (0, _.default)(t),
          R = (0, S.default)(t),
          b = (0, N.default)(t),
          x = (0, v.default)(t),
          D = (0, y.default)(t),
          F = (0, m.default)(t),
          w = (0, P.default)(t, n),
          B = (0, c.default)({
            id: t.id,
            label: j.default.Messages.COPY_ID_CHANNEL,
          }),
          k = (0, H.default)(t),
          Y = (0, r.default)(t),
          W = (0, A.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuFavorite"
          ),
          q = (0, G.default)(t);
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: s,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: null != T ? I : L }),
            (0, a.jsxs)(l.MenuGroup, { children: [R, b, U, p] }),
            (0, a.jsxs)(l.MenuGroup, { children: [x, W ? q : D, F] }),
            (0, a.jsx)(l.MenuGroup, { children: Y }),
            (0, a.jsx)(l.MenuGroup, { children: O }),
            (0, a.jsxs)(l.MenuGroup, { children: [w, f] }),
            (0, a.jsx)(l.MenuGroup, { children: k }),
            (0, a.jsx)(l.MenuGroup, { children: B }),
          ],
        });
      }
      function B(e) {
        let { channel: t, guild: n, onSelect: s } = e,
          o = t.isGuildStageVoice(),
          d = (0, i.useStateFromStores)(
            [M.default],
            () => (o ? M.default.getStageInstanceByChannel(t.id) : void 0),
            [o, t.id]
          ),
          f = (0, U.default)(t),
          _ = (0, h.default)(t),
          S = (0, g.useActiveEvent)(t.id),
          N = (0, C.default)(null == S ? void 0 : S.id, n, t),
          F = (0, V.default)(t, d),
          w = (0, E.useAddToFavoritesItem)(t),
          B = (0, E.useRemoveFromFavoritesItem)(t),
          k = (0, v.default)(t),
          Y = (0, y.default)(t),
          W = (0, m.default)(t),
          q = (0, O.default)(t, n, d),
          K = (0, P.default)(t, n),
          X = (0, x.default)(t, n),
          Z = (0, D.default)(t, n.id),
          J = (0, I.default)(t, n),
          Q = (0, L.default)(t, n),
          z = (0, p.default)(t),
          $ = (0, c.default)({
            id: t.id,
            label: j.default.Messages.COPY_ID_CHANNEL,
          }),
          ee = (0, H.default)(t),
          et = (0, r.default)(t),
          en = (0, b.default)(t),
          ea = (0, T.default)(t),
          ei = (0, R.default)(t),
          el = (0, A.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuNormal"
          ),
          eu = (0, G.default)(t);
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: s,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: null != S ? N : F }),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [f, w] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [q, et, en, _] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [Z, K, X, k, ea, ee] },
              "voice-actions"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [ei, el ? eu : Y] },
              "notifications"
            ),
            (0, a.jsx)(l.MenuGroup, { children: B }),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [W, J, Q, z] },
              "admin-actions"
            ),
            (0, a.jsx)(l.MenuGroup, { children: $ }, "developer-actions"),
          ],
        });
      }
      var k = (0, o.default)(
        (0, s.default)(
          function (e) {
            let t = (0, f.default)();
            return t ? (0, a.jsx)(w, { ...e }) : (0, a.jsx)(B, { ...e });
          },
          { object: F.AnalyticsObjects.CONTEXT_MENU }
        ),
        [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_VOICE_CHANNEL_MENU]
      );
    },
    809259: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("126501"),
        s = n("816092"),
        o = n("782340");
      function r(e) {
        let t = (0, i.useStateFromStores)(
          [s.default],
          () => s.default.isCollapsed(e.id),
          [e.id]
        );
        return __OVERLAY__
          ? null
          : (0, a.jsx)(l.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: o.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
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
            return T;
          },
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("866227"),
        l = n.n(i),
        u = n("446674"),
        s = n("77078"),
        o = n("820542"),
        r = n("519705"),
        d = n("319165"),
        c = n("282109"),
        f = n("34676"),
        E = n("679653"),
        _ = n("49111"),
        S = n("468200"),
        N = n("782340");
      let T = () => [
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
        g = e => {
          let t = e > 0 ? l().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function C(e, t) {
        let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          l = (0, d.useMutedUntilText)(i),
          S = (0, E.default)(e, !0);
        function C(t) {
          t &&
            e.type === _.ChannelTypes.GUILD_CATEGORY &&
            (0, o.categoryCollapse)(e.id),
            r.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let A = N.default.Messages.MUTE_CHANNEL_GENERIC,
          M = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case _.ChannelTypes.GUILD_CATEGORY:
            (A = N.default.Messages.MUTE_CATEGORY),
              (M = N.default.Messages.UNMUTE_CATEGORY);
            break;
          case _.ChannelTypes.GROUP_DM:
            (A = N.default.Messages.MUTE_CONVERSATION),
              (M = N.default.Messages.UNMUTE_CONVERSATION);
            break;
          case _.ChannelTypes.DM:
            (A = N.default.Messages.MUTE_CHANNEL.format({ name: S })),
              (M = N.default.Messages.UNMUTE_CHANNEL.format({ name: S }));
            break;
          default:
            (A = N.default.Messages.MUTE_CHANNEL_GENERIC),
              (M = N.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(s.MenuItem, {
              id: "unmute-channel",
              label: M,
              subtext: l,
              action: () => C(!1),
            })
          : (0, a.jsx)(s.MenuItem, {
              id: "mute-channel",
              label: A,
              action: () => C(!0),
              children: T().map(n => {
                let { value: i, label: l } = n;
                return (0, a.jsx)(
                  s.MenuItem,
                  {
                    id: "".concat(i),
                    label: l,
                    action: () =>
                      (function (n) {
                        e.type === _.ChannelTypes.GUILD_CATEGORY &&
                          (0, o.categoryCollapse)(e.id);
                        let a = g(n);
                        r.default.updateChannelOverrideSettings(
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
        s = n("721281"),
        o = n("282109"),
        r = n("34676"),
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
            [o.default],
            () => {
              let n = d.UserNotificationSettings.NULL;
              return (
                null != e.parent_id &&
                  (n = o.default.getChannelMessageNotifications(
                    t,
                    e.parent_id
                  )),
                n !== d.UserNotificationSettings.NULL
                  ? n
                  : o.default.getMessageNotifications(t)
              );
            },
            [t, e.parent_id]
          ),
          _ = (0, i.useStateFromStores)([o.default], () =>
            o.default.getNewForumThreadsCreated(e)
          ),
          S = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.getChannelOverrides(t)[n],
            [t, n]
          ),
          N =
            null == S
              ? d.UserNotificationSettings.NULL
              : S.message_notifications,
          T = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
          g = f(e, T);
        return null == g
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
                g.map(i => {
                  let { setting: s, label: o } = i;
                  return (0, a.jsx)(
                    l.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(s),
                      label: o,
                      subtext:
                        s === d.UserNotificationSettings.NULL
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
                            })(E, e, T)
                          : void 0,
                      action: () => {
                        var e;
                        return (
                          (e = s),
                          void (
                            null != t &&
                            u.default.updateChannelOverrideSettings(
                              t,
                              n,
                              { message_notifications: e },
                              r.NotificationLabel.notifications(e)
                            )
                          )
                        );
                      },
                      checked: s === N,
                    },
                    s
                  );
                }),
              ],
            });
      }
      function _(e) {
        var t, n;
        let u = E(e),
          r = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.resolvedMessageNotifications(e),
            [e]
          ),
          _ = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id]
          ),
          S =
            null == _
              ? d.UserNotificationSettings.NULL
              : _.message_notifications,
          N = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
          T =
            S === d.UserNotificationSettings.NULL && e.isGuildStageVoice()
              ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
              : null === (n = f(e, N)) || void 0 === n
                ? void 0
                : null ===
                      (t = n.find(e => {
                        let { setting: t } = e;
                        return t === r;
                      })) || void 0 === t
                  ? void 0
                  : t.label;
        return null != u
          ? (0, a.jsx)(l.MenuItem, {
              id: "channel-notifications",
              label: c.default.Messages.NOTIFICATION_SETTINGS,
              subtext: T,
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
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("377114"),
        u = n("834052"),
        s = n("907566"),
        o = n("782340");
      function r(e) {
        let t = u.default.isLive(e.id);
        return e.isGuildStageVoice() && t
          ? (0, a.jsx)(i.MenuItem, {
              id: "report-stage",
              label: o.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
              action: () => (0, l.showReportModalForStageChannel)(e),
              icon: s.default,
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
        s = n("923510"),
        o = n("957255"),
        r = n("782340");
      function d(e, t) {
        let n = (0, i.useStateFromStores)(
          [o.default],
          () => o.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e),
          [e]
        );
        return null != t && n
          ? (0, a.jsx)(l.MenuItem, {
              id: "end-stage",
              label: r.default.Messages.END_STAGE,
              color: "danger",
              action: function () {
                (0, l.openModal)(t =>
                  (0, a.jsx)(l.ConfirmModal, {
                    ...t,
                    header: r.default.Messages.END_STAGE_TITLE,
                    confirmText: r.default.Messages.END_STAGE,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: () => (0, u.endStage)(e),
                    children: (0, a.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: r.default.Messages.EXPLICIT_END_STAGE_SUBTITLE,
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
        s = n("843624"),
        o = n("259141"),
        r = n("957255"),
        d = n("207273"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let E = (0, i.useStateFromStores)([r.default], () =>
            r.default.can(c.Permissions.MANAGE_CHANNELS, t)
          ),
          _ = (0, i.useStateFromStores)([r.default], () =>
            r.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)
          ),
          S = (0, o.useIsConnectedToVoiceChannel)(e),
          N = (0, i.useStateFromStores)([d.default], () =>
            d.default.getChannelStatus(e)
          ),
          T = null != N && N.length > 0;
        return e.isGuildVoice() && (E || _)
          ? !S && E && T
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
                      { modalKey: s.VOICE_CHANNEL_STATUS_MODAL_KEY }
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
        s = n("305122"),
        o = n("675961"),
        r = n("957255"),
        d = n("18494"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let n = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.can(c.Permissions.CONNECT, e),
            [e]
          ),
          E = (0, i.useStateFromStores)([d.default], () =>
            d.default.getVoiceChannelId()
          ),
          _ = (0, o.useCustomJoinSound)(t),
          S = E === e.id;
        return e.isGuildVocal() && n && null != _ && !S
          ? (0, a.jsx)(l.MenuItem, {
              id: "join-muted-custom-join-sound",
              label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
              action: () => {
                (0, s.muteCustomJoinSound)(e.id),
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
        s = n("393414"),
        o = n("957255"),
        r = n("49111"),
        d = n("782340");
      function c(e, t) {
        let n = (0, i.useStateFromStores)(
          [o.default],
          () => o.default.can(r.Permissions.CONNECT, e),
          [e]
        );
        return n && e.isGuildVocal()
          ? (0, a.jsx)(l.MenuItem, {
              id: "open-chat",
              label: d.default.Messages.OPEN_CHAT,
              action: () => {
                u.default.updateChatOpen(e.id, !0),
                  (0, s.transitionToGuild)(t.id, e.id);
              },
            })
          : null;
      }
    },
    601131: function (e, t, n) {
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
        u = n("817963"),
        s = n("244480"),
        o = n("398604"),
        r = n("322224"),
        d = n("745049"),
        c = n("782340");
      function f(e, t, n) {
        let { canManageGuildEvent: f } = (0, u.useManageResourcePermissions)(
            null != n ? n : t
          ),
          E = (0, i.useStateFromStores)([o.default], () =>
            o.default.isActive(e)
          ),
          _ = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.getGuildScheduledEvent(e),
            [e]
          ),
          S = f(_);
        if (
          null == e ||
          !S ||
          !E ||
          (null == _ ? void 0 : _.entity_type) ===
            d.GuildScheduledEventEntityTypes.EXTERNAL
        )
          return null;
        let N = () => {
          if (null == n ? void 0 : n.isGuildStageVoice()) {
            (0, s.endStage)(n);
            return;
          }
          null != e && r.default.endEvent(e, t.id), (0, l.closeAllModals)();
        };
        return (0, a.jsx)(l.MenuItem, {
          id: c.default.Messages.END_EVENT,
          label: c.default.Messages.END_EVENT,
          action: function () {
            (0, l.openModal)(e =>
              (0, a.jsx)(l.ConfirmModal, {
                ...e,
                header: c.default.Messages.END_EVENT,
                confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: c.default.Messages.CANCEL,
                onConfirm: N,
                children: (0, a.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children:
                    c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                }),
              })
            );
          },
          color: "danger",
        });
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
            return s;
          },
          hasVoiceChannelActivityNotifsEnabled: function () {
            return o;
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
      function s(e) {
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
      function o(e) {
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
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return g;
          },
          inviteUserToStage: function () {
            return C;
          },
          audienceAckRequestToSpeak: function () {
            return A;
          },
          moveSelfToAudience: function () {
            return M;
          },
          setUserSuppress: function () {
            return I;
          },
          moveUserToAudience: function () {
            return h;
          },
          setEveryoneRolePermissionAllowed: function () {
            return L;
          },
          startStage: function () {
            return p;
          },
          editStage: function () {
            return m;
          },
          endStage: function () {
            return v;
          },
        });
      var a = n("627445"),
        i = n.n(a),
        l = n("316693"),
        u = n("872717"),
        s = n("450911");
      n("851387");
      var o = n("798609"),
        r = n("716241"),
        d = n("18494"),
        c = n("800762"),
        f = n("991170"),
        E = n("716214"),
        _ = n("230324"),
        S = n("738983"),
        N = n("808422"),
        T = n("49111");
      function g(e, t) {
        let n = e.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          t &&
            (0, r.trackWithMetadata)(
              T.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, _.getStageChannelMetadata)(e) }
            ),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function C(e, t) {
        let n = e.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        i(null != a, "This channel cannot be guildless.");
        let l = c.default.getVoiceStateForChannel(e.id),
          s = (0, N.getAudienceRequestToSpeakState)(l);
        return (
          s ===
            N.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, r.trackWithMetadata)(T.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, _.getStageChannelMetadata)(e),
            }),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(a),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function M(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          i(null != t, "This channel cannot be guildless."),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(e, t, n) {
        let a = e.getGuildId();
        return (
          i(null != a, "This channel cannot be guildless."),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function h(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          I(t, e.id, !0),
          u.HTTP.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function L(e, t, n) {
        let a = e.getGuildId();
        i(null != a, "Channel cannot be guildless");
        let u = e.permissionOverwrites[a],
          r = {
            id: a,
            type: o.PermissionOverwriteType.ROLE,
            allow: f.NONE,
            deny: f.NONE,
            ...u,
          };
        n
          ? ((r.allow = l.add(r.allow, t)), (r.deny = l.remove(r.deny, t)))
          : ((r.allow = l.remove(r.allow, t)), (r.deny = l.add(r.deny, t))),
          s.default.updatePermissionOverwrite(e.id, r);
      }
      async function p(e, t, n, a) {
        if ("" === t) return;
        let i = d.default.getVoiceChannelId() === e.id;
        !i && (0, E.connectToStage)(e);
        let l = await (0, S.startStageInstance)(e.id, t, n, a);
        return A(e, !1, !0), l;
      }
      async function m(e, t, n) {
        if ("" === t) return;
        let a = await (0, S.updateStageInstance)(e.id, t, n);
        return a;
      }
      async function v(e) {
        await (0, S.endStageInstance)(e.id);
      }
    },
    230324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          summarizeUsernamesParticipating: function () {
            return c;
          },
          getRemoveModeratorTooltipHint: function () {
            return f;
          },
          getStageChannelMetadata: function () {
            return E;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var a = n("945956"),
        i = n("387111"),
        l = n("991170"),
        u = n("834052"),
        s = n("837979"),
        o = n("49111"),
        r = n("606762"),
        d = n("782340");
      function c(e, t, n, a) {
        let l = t[0],
          u = i.default.getName(e, n, l),
          s = null != a ? a : t.length;
        return 1 === s && null != l
          ? u
          : null == l
            ? d.default.Messages.SPEAKING_COUNT.format({ count: s })
            : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: u,
                count: s - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case r.RowType.OWNER:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case r.RowType.ADMINISTRATOR:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case r.RowType.MEMBER:
          case r.RowType.ROLE:
            return t
              ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case r.RowType.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let t = u.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: a.default.getMediaSessionId(),
          request_to_speak_state: l.canEveryoneRole(
            o.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? s.RequestToSpeakPermissionStates.EVERYONE
            : s.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          startStageInstance: function () {
            return l;
          },
          updateStageInstance: function () {
            return u;
          },
          endStageInstance: function () {
            return s;
          },
        });
      var a = n("872717"),
        i = n("49111");
      async function l(e, t, n, l, u) {
        let s = await a.HTTP.post({
          url: i.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: u,
            send_start_notification: l,
          },
        });
        return s.body;
      }
      async function u(e, t, n) {
        let l = await a.HTTP.patch({
          url: i.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return l.body;
      }
      function s(e) {
        return a.HTTP.del(i.Endpoints.STAGE_INSTANCE(e));
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
      let a, i, l, u, s, o;
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var r = n("917351"),
        d = n.n(r),
        c = n("866227"),
        f = n.n(c),
        E = n("446674"),
        _ = n("872717"),
        S = n("913144"),
        N = n("233069"),
        T = n("813006"),
        g = n("517763"),
        C = n("766274"),
        A = n("42203"),
        M = n("49111");
      let I = M.FormStates.CLOSED,
        h = {},
        L = {},
        p = !1,
        m = !1,
        v = null,
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
        let t = A.default.getChannel(e.channelId);
        if (null == t) return y();
        (I = M.FormStates.OPEN),
          (u = l = t),
          (v = "location" in e && null != e.location ? e.location : null),
          (i = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (s = A.default.getChannel(u.parent_id)),
          (o = u.getGuildId()),
          (h = {}),
          R({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : M.ChannelSettingsSections.OVERVIEW,
            subsection: i,
          });
      }
      function R(e) {
        (a = e.section),
          (i = e.subsection),
          null != u &&
            a === M.ChannelSettingsSections.INSTANT_INVITES &&
            ((p = !0),
            _.HTTP.get({
              url: M.Endpoints.INSTANT_INVITES(u.id),
              oldFormErrors: !0,
            }).then(
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
      function y() {
        (m = !1),
          (I = M.FormStates.CLOSED),
          (a = null),
          (u = l = null),
          (s = null),
          (L = {});
      }
      let G = d.debounce(() => {
        if (null == u || null == l) return !1;
        let e = u.toJS(),
          t = l.toJS(),
          n = O.every(n => e[n] === t[n]);
        n && u !== l && ((u = l), V.emitChange());
      }, 500);
      function b(e) {
        return new g.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new C.default(e.inviter) : null,
          channel: (0, N.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new T.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: f(e.created_at),
          type: e.type,
        });
      }
      class H extends E.default.Store {
        initialize() {
          this.waitFor(A.default);
        }
        hasChanges() {
          return u !== l;
        }
        isOpen() {
          return m;
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
          return u;
        }
        getFormState() {
          return I;
        }
        getCategory() {
          return s;
        }
        getProps() {
          return {
            submitting: I === M.FormStates.SUBMITTING,
            errors: h,
            channel: u,
            section: a,
            subsection: i,
            invites: L,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: v,
          };
        }
      }
      H.displayName = "ChannelSettingsStore";
      let V = new H(S.default, {
        CHANNEL_SETTINGS_INIT: U,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (m = !0), U(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (I = M.FormStates.SUBMITTING), (h = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (l = u), (I = M.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (I = M.FormStates.OPEN),
            (h = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, r.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: y,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: i,
            userLimit: l,
            nsfw: s,
            flags: o,
            rateLimitPerUser: r,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: c,
            locked: f,
            invitable: E,
            defaultAutoArchiveDuration: _,
            template: S,
            defaultReactionEmoji: N,
            rtcRegion: T,
            videoQualityMode: g,
            availableTags: C,
            defaultSortOrder: A,
            defaultForumLayout: M,
            iconEmoji: I,
            themeColor: h,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != a && (u = u.set("topic", a)),
            null != i && (u = u.set("bitrate", i)),
            null != l && (u = u.set("userLimit", l)),
            null != s && (u = u.set("nsfw", s)),
            null != o && (u = u.set("flags", o)),
            null != r && (u = u.set("rateLimitPerUser", r)),
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
            void 0 !== T && (u = u.set("rtcRegion", T)),
            null != g && (u = u.set("videoQualityMode", g)),
            void 0 !== N && (u = u.set("defaultReactionEmoji", N)),
            null != C && (u = u.set("availableTags", C)),
            null != A && (u = u.set("defaultSortOrder", A)),
            null != M && (u = u.set("defaultForumLayout", M)),
            void 0 !== I && (u = u.set("iconEmoji", I)),
            null != h && (u = u.set("themeColor", h)),
            G();
        },
        CHANNEL_SETTINGS_SET_SECTION: R,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (L = {}),
            e.invites.forEach(e => {
              L[e.code] = b(e);
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
                let t = A.default.getChannel(e);
                if (null == t) return !1;
                (u = l = t), (s = A.default.getChannel(u.parent_id));
              } else {
                let t = A.default.getChannel(e);
                if (null == t) return !1;
                (l = t),
                  null != u &&
                    ((u = u.set(
                      "permissionOverwrites",
                      l.permissionOverwrites
                    )),
                    (s = A.default.getChannel(u.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != u &&
              (null != o &&
                null == u.permissionOverwrites[o] &&
                (o = u.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == u || u.id !== t) return !1;
          I = M.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (L = { ...L }), delete L[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          L = { ...L, [e.invite.code]: b(e.invite) };
        },
      });
      var x = V;
    },
    76539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("469563"),
        l = n("715072"),
        u = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: l,
              ...s
            } = e;
            return 16 === t || 16 === n
              ? (0, a.jsxs)("svg", {
                  ...(0, u.default)(s),
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
                  ...(0, u.default)(s),
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
//# sourceMappingURL=0078c5628973e5c78e8f.js.map
