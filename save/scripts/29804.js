(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29804"],
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
            return s;
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
        l = n("679428"),
        i = n("282109"),
        u = {
          update(e) {
            a.default.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
          },
          toggleCollapseGuild(e) {
            l.default.saveUserGuildSettings(e, {
              hide_muted_channels: !i.default.isGuildCollapsed(e),
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
            return o;
          },
          close: function () {
            return c;
          },
          setSection: function () {
            return f;
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
            return N;
          },
        }),
        n("702976");
      var a = n("872717"),
        l = n("913144"),
        i = n("81732");
      n("21121"), n("693051");
      var u = n("263024");
      n("492114");
      var s = n("42203"),
        d = n("54239"),
        r = n("49111");
      function o(e, t, n) {
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function c() {
        l.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function f(e) {
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
          nsfw: s,
          flags: d,
          rateLimitPerUser: r,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: T,
          invitable: g,
          availableTags: C,
          defaultSortOrder: h,
          defaultForumLayout: A,
          iconEmoji: M,
          themeColor: I,
        } = e;
        l.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: i,
          userLimit: u,
          nsfw: s,
          flags: d,
          rateLimitPerUser: r,
          defaultThreadRateLimitPerUser: o,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: _,
          rtcRegion: E,
          videoQualityMode: S,
          autoArchiveDuration: N,
          locked: T,
          invitable: g,
          availableTags: C,
          defaultSortOrder: h,
          defaultForumLayout: A,
          iconEmoji: M,
          themeColor: I,
        });
      }
      async function E(e, t) {
        let {
            name: n,
            type: d,
            position: o,
            topic: c,
            bitrate: f,
            userLimit: _,
            nsfw: E,
            flags: S,
            permissionOverwrites: N,
            rateLimitPerUser: T,
            defaultThreadRateLimitPerUser: g,
            defaultAutoArchiveDuration: C,
            template: h,
            defaultReactionEmoji: A,
            rtcRegion: M,
            videoQualityMode: I,
            autoArchiveDuration: v,
            locked: m,
            invitable: p,
            availableTags: L,
            defaultSortOrder: O,
            defaultForumLayout: U,
            iconEmoji: R,
            themeColor: y,
          } = t,
          G = s.default.getChannel(e);
        return (
          l.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await u.default.unarchiveThreadIfNecessary(e),
          a.default
            .patch({
              url: r.Endpoints.CHANNEL(e),
              body: {
                name: n,
                type: d,
                position: o,
                topic: c,
                bitrate: f,
                user_limit: _,
                nsfw: E,
                flags: S,
                permission_overwrites: N,
                rate_limit_per_user: T,
                default_thread_rate_limit_per_user: g,
                default_auto_archive_duration: C,
                template: h,
                rtc_region: M,
                video_quality_mode: I,
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
                  null == L
                    ? void 0
                    : L.map(e => ({
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
            })
            .then(
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
      function S(e) {
        let t = s.default.getChannel(e);
        a.default
          .delete({ url: r.Endpoints.CHANNEL(e), oldFormErrors: !0 })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              i.default.checkGuildTemplateDirty(e),
              c();
          });
      }
      var N = {
        init: o,
        open: function (e, t, n) {
          o(e, t, n), (0, d.pushLayer)(r.Layers.CHANNEL_SETTINGS);
        },
        close: c,
        setSection: f,
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
      var l = n("446674"),
        i = n("77078"),
        u = n("272030"),
        s = n("838446"),
        d = n("158534"),
        r = n("846883"),
        o = n("812204"),
        c = n("861370"),
        f = n("20209"),
        _ = n("972701"),
        E = n("390008"),
        S = n("41205"),
        N = n("936947"),
        T = n("379304"),
        g = n("534222"),
        C = n("601131"),
        h = n("47495"),
        A = n("834052"),
        M = n("715243"),
        I = n("458574"),
        v = n("963150"),
        m = n("308798"),
        p = n("47006"),
        L = n("809259"),
        O = n("878526"),
        U = n("44141"),
        R = n("531674"),
        y = n("619436"),
        G = n("625399"),
        b = n("339876"),
        x = n("702741"),
        V = n("782000"),
        D = n("45593"),
        F = n("604887"),
        H = n("958936"),
        P = n("49111"),
        j = n("782340");
      function w(e) {
        let { channel: t, guild: n, onSelect: s } = e,
          d = t.isGuildStageVoice(),
          o = (0, l.useStateFromStores)(
            [A.default],
            () => (d ? A.default.getStageInstanceByChannel(t.id) : void 0),
            [d, t.id]
          ),
          f = (0, I.default)(t),
          T = (0, g.useActiveEvent)(t.id),
          M = (0, C.default)(null == T ? void 0 : T.id, n, t),
          v = (0, V.default)(t, o),
          m = (0, _.useAddToFavoritesItem)(t),
          O = (0, _.useRemoveFromFavoritesItem)(t),
          U = (0, E.default)(t),
          R = (0, S.default)(t),
          b = (0, N.default)(t),
          D = (0, L.default)(t),
          F = (0, y.default)(t),
          P = (0, p.default)(t),
          w = (0, H.default)(t, n),
          B = (0, c.default)({
            id: t.id,
            label: j.default.Messages.COPY_ID_CHANNEL,
          }),
          k = (0, x.default)(t),
          Y = (0, r.default)(t),
          W = (0, h.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuFavorite"
          ),
          q = (0, G.default)(t);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: s,
          children: [
            (0, a.jsx)(i.MenuGroup, { children: null != T ? M : v }),
            (0, a.jsxs)(i.MenuGroup, { children: [R, b, U, m] }),
            (0, a.jsxs)(i.MenuGroup, { children: [D, W ? q : F, P] }),
            (0, a.jsx)(i.MenuGroup, { children: Y }),
            (0, a.jsx)(i.MenuGroup, { children: O }),
            (0, a.jsxs)(i.MenuGroup, { children: [w, f] }),
            (0, a.jsx)(i.MenuGroup, { children: k }),
            (0, a.jsx)(i.MenuGroup, { children: B }),
          ],
        });
      }
      function B(e) {
        let { channel: t, guild: n, onSelect: s } = e,
          d = t.isGuildStageVoice(),
          o = (0, l.useStateFromStores)(
            [A.default],
            () => (d ? A.default.getStageInstanceByChannel(t.id) : void 0),
            [d, t.id]
          ),
          f = (0, U.default)(t),
          E = (0, I.default)(t),
          S = (0, g.useActiveEvent)(t.id),
          N = (0, C.default)(null == S ? void 0 : S.id, n, t),
          P = (0, V.default)(t, o),
          w = (0, _.useAddToFavoritesItem)(t),
          B = (0, _.useRemoveFromFavoritesItem)(t),
          k = (0, L.default)(t),
          Y = (0, y.default)(t),
          W = (0, p.default)(t),
          q = (0, O.default)(t, n, o),
          K = (0, H.default)(t, n),
          X = (0, D.default)(t, n),
          Z = (0, F.default)(t, n.id),
          J = (0, M.default)(t, n),
          Q = (0, v.default)(t, n),
          z = (0, m.default)(t),
          $ = (0, c.default)({
            id: t.id,
            label: j.default.Messages.COPY_ID_CHANNEL,
          }),
          ee = (0, x.default)(t),
          et = (0, r.default)(t),
          en = (0, b.default)(t),
          ea = (0, T.default)(t),
          el = (0, R.default)(t),
          ei = (0, h.useShouldUseNewNotificationSystem)(
            "ChannelListVoiceContextMenuNormal"
          ),
          eu = (0, G.default)(t);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: u.closeContextMenu,
          "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: s,
          children: [
            (0, a.jsx)(i.MenuGroup, { children: null != S ? N : P }),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [f, w] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [q, et, en, E] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [Z, K, X, k, ea, ee] },
              "voice-actions"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [el, ei ? eu : Y] },
              "notifications"
            ),
            (0, a.jsx)(i.MenuGroup, { children: B }),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [W, J, Q, z] },
              "admin-actions"
            ),
            (0, a.jsx)(i.MenuGroup, { children: $ }, "developer-actions"),
          ],
        });
      }
      var k = (0, d.default)(
        (0, s.default)(
          function (e) {
            let t = (0, f.default)();
            return t ? (0, a.jsx)(w, { ...e }) : (0, a.jsx)(B, { ...e });
          },
          { object: P.AnalyticsObjects.CONTEXT_MENU }
        ),
        [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_VOICE_CHANNEL_MENU]
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
      var l = n("446674"),
        i = n("77078"),
        u = n("126501"),
        s = n("816092"),
        d = n("782340");
      function r(e) {
        let t = (0, l.useStateFromStores)(
          [s.default],
          () => s.default.isCollapsed(e.id),
          [e.id]
        );
        return __OVERLAY__
          ? null
          : (0, a.jsx)(i.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: d.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
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
      var l = n("866227"),
        i = n.n(l),
        u = n("446674"),
        s = n("77078"),
        d = n("820542"),
        r = n("519705"),
        o = n("319165"),
        c = n("282109"),
        f = n("34676"),
        _ = n("679653"),
        E = n("49111"),
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
          let t = e > 0 ? i().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function C(e, t) {
        let [n, l] = (0, u.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          i = (0, o.useMutedUntilText)(l),
          S = (0, _.default)(e, !0);
        function C(t) {
          t &&
            e.type === E.ChannelTypes.GUILD_CATEGORY &&
            (0, d.categoryCollapse)(e.id),
            r.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let h = N.default.Messages.MUTE_CHANNEL_GENERIC,
          A = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case E.ChannelTypes.GUILD_CATEGORY:
            (h = N.default.Messages.MUTE_CATEGORY),
              (A = N.default.Messages.UNMUTE_CATEGORY);
            break;
          case E.ChannelTypes.GROUP_DM:
            (h = N.default.Messages.MUTE_CONVERSATION),
              (A = N.default.Messages.UNMUTE_CONVERSATION);
            break;
          case E.ChannelTypes.DM:
            (h = N.default.Messages.MUTE_CHANNEL.format({ name: S })),
              (A = N.default.Messages.UNMUTE_CHANNEL.format({ name: S }));
            break;
          default:
            (h = N.default.Messages.MUTE_CHANNEL_GENERIC),
              (A = N.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, a.jsx)(s.MenuItem, {
              id: "unmute-channel",
              label: A,
              subtext: i,
              action: () => C(!1),
            })
          : (0, a.jsx)(s.MenuItem, {
              id: "mute-channel",
              label: h,
              action: () => C(!0),
              children: T().map(n => {
                let { value: l, label: i } = n;
                return (0, a.jsx)(
                  s.MenuItem,
                  {
                    id: "".concat(l),
                    label: i,
                    action: () =>
                      (function (n) {
                        e.type === E.ChannelTypes.GUILD_CATEGORY &&
                          (0, d.categoryCollapse)(e.id);
                        let a = g(n);
                        r.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          a,
                          f.NotificationLabels.Muted,
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
    619436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelNotificationRadioItems: function () {
            return _;
          },
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("519705"),
        s = n("721281"),
        d = n("282109"),
        r = n("34676"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        var t, n, a;
        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e.type) {
          case o.ChannelTypes.GUILD_VOICE:
            return l
              ? ((t = e),
                [
                  {
                    setting: o.UserNotificationSettings.NULL,
                    label:
                      null != t.parent_id
                        ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                        : c.default.Messages.FORM_LABEL_DEFAULT,
                  },
                  {
                    setting: o.UserNotificationSettings.ALL_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY,
                  },
                  {
                    setting: o.UserNotificationSettings.ONLY_MENTIONS,
                    label:
                      c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format(),
                  },
                  {
                    setting: o.UserNotificationSettings.NO_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_NOTHING,
                  },
                ])
              : null;
          case o.ChannelTypes.GUILD_STAGE_VOICE:
            return (
              (n = e),
              [
                {
                  setting: o.UserNotificationSettings.NULL,
                  label:
                    null != n.parent_id
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: o.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                },
                {
                  setting: o.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
          default:
            return (
              (a = e),
              [
                {
                  setting: o.UserNotificationSettings.NULL,
                  label:
                    null != a.parent_id
                      ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : c.default.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: o.UserNotificationSettings.ALL_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_ALL_MESSAGES,
                },
                {
                  setting: o.UserNotificationSettings.ONLY_MENTIONS,
                  label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                },
                {
                  setting: o.UserNotificationSettings.NO_MESSAGES,
                  label: c.default.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
        }
      }
      function _(e) {
        let t = e.getGuildId(),
          n = e.id,
          _ = (0, l.useStateFromStores)(
            [d.default],
            () => {
              let n = o.UserNotificationSettings.NULL;
              return (
                null != e.parent_id &&
                  (n = d.default.getChannelMessageNotifications(
                    t,
                    e.parent_id
                  )),
                n !== o.UserNotificationSettings.NULL
                  ? n
                  : d.default.getMessageNotifications(t)
              );
            },
            [t, e.parent_id]
          ),
          E = (0, l.useStateFromStores)([d.default], () =>
            d.default.getNewForumThreadsCreated(e)
          ),
          S = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getChannelOverrides(t)[n],
            [t, n]
          ),
          N =
            null == S
              ? o.UserNotificationSettings.NULL
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
                        (0, a.jsx)(i.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: E,
                          action: () => u.default.setForumThreadsCreated(e, !E),
                        }),
                        (0, a.jsx)(i.MenuSeparator, {}),
                      ],
                    })
                  : null,
                g.map(l => {
                  let { setting: s, label: d } = l;
                  return (0, a.jsx)(
                    i.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(s),
                      label: d,
                      subtext:
                        s === o.UserNotificationSettings.NULL
                          ? (function (e, t) {
                              let n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (e) {
                                case o.UserNotificationSettings.ALL_MESSAGES:
                                  return t.type ===
                                    o.ChannelTypes.GUILD_VOICE && n
                                    ? c.default.Messages
                                        .FORM_LABEL_ALL_VOICE_ACTIVITY
                                    : c.default.Messages
                                        .FORM_LABEL_ALL_MESSAGES;
                                case o.UserNotificationSettings.ONLY_MENTIONS:
                                  return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                case o.UserNotificationSettings.NO_MESSAGES:
                                  return c.default.Messages.FORM_LABEL_NOTHING;
                                case o.UserNotificationSettings.NULL:
                                default:
                                  return;
                              }
                            })(_, e, T)
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
      function E(e) {
        var t, n;
        let u = _(e),
          r = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.resolvedMessageNotifications(e),
            [e]
          ),
          E = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id]
          ),
          S =
            null == E
              ? o.UserNotificationSettings.NULL
              : E.message_notifications,
          N = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
          T =
            S === o.UserNotificationSettings.NULL && e.isGuildStageVoice()
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
          ? (0, a.jsx)(i.MenuItem, {
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
      var l = n("77078"),
        i = n("377114"),
        u = n("834052"),
        s = n("907566"),
        d = n("782340");
      function r(e) {
        let t = u.default.isLive(e.id);
        return e.isGuildStageVoice() && t
          ? (0, a.jsx)(l.MenuItem, {
              id: "report-stage",
              label: d.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
              action: () => (0, i.showReportModalForStageChannel)(e),
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
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("244480"),
        s = n("923510"),
        d = n("957255"),
        r = n("782340");
      function o(e, t) {
        let n = (0, l.useStateFromStores)(
          [d.default],
          () => d.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e),
          [e]
        );
        return null != t && n
          ? (0, a.jsx)(i.MenuItem, {
              id: "end-stage",
              label: r.default.Messages.END_STAGE,
              color: "danger",
              action: function () {
                (0, i.openModal)(t =>
                  (0, a.jsx)(i.ConfirmModal, {
                    ...t,
                    header: r.default.Messages.END_STAGE_TITLE,
                    confirmText: r.default.Messages.END_STAGE,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: () => (0, u.endStage)(e),
                    children: (0, a.jsx)(i.Text, {
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
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("18054"),
        s = n("843624"),
        d = n("259141"),
        r = n("957255"),
        o = n("207273"),
        c = n("49111"),
        f = n("782340");
      function _(e, t) {
        let _ = (0, l.useStateFromStores)([r.default], () =>
            r.default.can(c.Permissions.MANAGE_CHANNELS, t)
          ),
          E = (0, l.useStateFromStores)([r.default], () =>
            r.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)
          ),
          S = (0, d.useIsConnectedToVoiceChannel)(e),
          N = (0, l.useStateFromStores)([o.default], () =>
            o.default.getChannelStatus(e)
          ),
          T = null != N && N.length > 0;
        return e.isGuildVoice() && (_ || E)
          ? !S && _ && T
            ? (0, a.jsx)(i.MenuItem, {
                id: "clear-status",
                label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                action: () => {
                  u.default.updateVoiceChannelStatus(e.id, "");
                },
              })
            : S && E
              ? (0, a.jsx)(i.MenuItem, {
                  id: "set-status",
                  label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
                  action: () => {
                    (0, i.openModalLazy)(
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
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("155823"),
        u = n("987317"),
        s = n("305122"),
        d = n("675961"),
        r = n("957255"),
        o = n("18494"),
        c = n("49111"),
        f = n("782340");
      function _(e, t) {
        let n = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.can(c.Permissions.CONNECT, e),
            [e]
          ),
          _ = (0, l.useStateFromStores)([o.default], () =>
            o.default.getVoiceChannelId()
          ),
          E = (0, d.useCustomJoinSound)(t),
          S = _ === e.id;
        return e.isGuildVocal() && n && null != E && !S
          ? (0, a.jsx)(i.MenuItem, {
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
      var l = n("446674"),
        i = n("77078"),
        u = n("255397"),
        s = n("393414"),
        d = n("957255"),
        r = n("49111"),
        o = n("782340");
      function c(e, t) {
        let n = (0, l.useStateFromStores)(
          [d.default],
          () => d.default.can(r.Permissions.CONNECT, e),
          [e]
        );
        return n && e.isGuildVocal()
          ? (0, a.jsx)(i.MenuItem, {
              id: "open-chat",
              label: o.default.Messages.OPEN_CHAT,
              action: () => {
                u.default.updateChatOpen(e.id, !0),
                  (0, s.transitionToGuild)(t.id, e.id);
              },
            })
          : null;
      }
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
          getEventException: function () {
            return u;
          },
        });
      var a = n("446674"),
        l = n("398604");
      function i(e, t) {
        let n = (0, a.useStateFromStoresArray)([l.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = l.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return s(n, e);
      }
      function u(e, t) {
        var n, a;
        let i =
          null !==
            (a =
              null === (n = l.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== a
            ? a
            : [];
        return s(i, e);
      }
      function s(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n;
      }
    },
    466148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
          getEventSchedule: function () {
            return o;
          },
        });
      var a = n("627445"),
        l = n.n(a),
        i = n("446674"),
        u = n("398604"),
        s = n("397680"),
        d = n("822516");
      function r(e, t, n) {
        var a;
        let r =
          null !==
            (a = (0, i.useStateFromStores)([u.default], () =>
              u.default.getGuildScheduledEvent(e)
            )) && void 0 !== a
            ? a
            : n;
        l(null != r, "Event must be defined"),
          (t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(r));
        let o = (0, s.default)(t, e);
        return c(r, o, t);
      }
      function o(e, t) {
        let n = (0, s.getEventException)(t, e.id);
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
        let a = (0, d.getBaseScheduleForRecurrence)(n, e),
          { startDate: l, endDate: i } = (0,
          d.getScheduleForRecurrenceWithException)(a, t);
        return {
          startTime: l.toDate(),
          endTime: null == i ? void 0 : i.toDate(),
        };
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
      var l = n("446674"),
        i = n("77078"),
        u = n("817963"),
        s = n("244480"),
        d = n("398604"),
        r = n("322224"),
        o = n("745049"),
        c = n("782340");
      function f(e, t, n) {
        let { canManageGuildEvent: f } = (0, u.useManageResourcePermissions)(
            null != n ? n : t
          ),
          _ = (0, l.useStateFromStores)([d.default], () =>
            d.default.isActive(e)
          ),
          E = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getGuildScheduledEvent(e),
            [e]
          ),
          S = f(E);
        if (
          null == e ||
          !S ||
          !_ ||
          (null == E ? void 0 : E.entity_type) ===
            o.GuildScheduledEventEntityTypes.EXTERNAL
        )
          return null;
        let N = () => {
          if (null == n ? void 0 : n.isGuildStageVoice()) {
            (0, s.endStage)(n);
            return;
          }
          null != e && r.default.endEvent(e, t.id), (0, i.closeAllModals)();
        };
        return (0, a.jsx)(i.MenuItem, {
          id: c.default.Messages.END_EVENT,
          label: c.default.Messages.END_EVENT,
          action: function () {
            (0, i.openModal)(e =>
              (0, a.jsx)(i.ConfirmModal, {
                ...e,
                header: c.default.Messages.END_EVENT,
                confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: c.default.Messages.CANCEL,
                onConfirm: N,
                children: (0, a.jsx)(i.Text, {
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
            return l;
          },
        });
      var a = n("49111");
      function l(e, t, n, l) {
        let i = null != n ? n : t,
          u = null != i && e.can(a.Permissions.CREATE_INSTANT_INVITE, i);
        return (
          u ||
          (null != t && null != t.vanityURLCode) ||
          (null == l ? void 0 : l.invite_code) != null
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
            return d;
          },
        });
      var a = n("862205"),
        l = n("49111");
      let i = (0, a.createExperiment)({
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
                  : l.EMPTY_STRING_SNOWFLAKE_ID,
            },
            {
              disable:
                (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE,
              autoTrackExposure: !1,
            }
          ),
          { enabled: a } = i.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment" },
            {
              disable:
                (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE ||
                !n,
              autoTrackExposure: !0,
            }
          );
        return (
          (null == e ? void 0 : e.type) === l.ChannelTypes.GUILD_VOICE && n && a
        );
      }
      function d(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = u.getCurrentConfig({
          guildId:
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : l.EMPTY_STRING_SNOWFLAKE_ID,
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
            return h;
          },
          moveSelfToAudience: function () {
            return A;
          },
          setUserSuppress: function () {
            return M;
          },
          moveUserToAudience: function () {
            return I;
          },
          setEveryoneRolePermissionAllowed: function () {
            return v;
          },
          startStage: function () {
            return m;
          },
          editStage: function () {
            return p;
          },
          endStage: function () {
            return L;
          },
        });
      var a = n("627445"),
        l = n.n(a),
        i = n("316693"),
        u = n("872717"),
        s = n("450911");
      n("851387");
      var d = n("798609"),
        r = n("716241"),
        o = n("18494"),
        c = n("800762"),
        f = n("991170"),
        _ = n("716214"),
        E = n("230324"),
        S = n("738983"),
        N = n("808422"),
        T = n("49111");
      function g(e, t) {
        let n = e.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          t &&
            (0, r.trackWithMetadata)(
              T.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, E.getStageChannelMetadata)(e) }
            ),
          u.default.patch({
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
          l(null != n, "This channel cannot be guildless."),
          u.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        l(null != a, "This channel cannot be guildless.");
        let i = c.default.getVoiceStateForChannel(e.id),
          s = (0, N.getAudienceRequestToSpeakState)(i);
        return (
          s ===
            N.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, r.trackWithMetadata)(T.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, E.getStageChannelMetadata)(e),
            }),
          u.default.patch({
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
      function A(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          l(null != t, "This channel cannot be guildless."),
          u.default.patch({
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
      function M(e, t, n) {
        let a = e.getGuildId();
        return (
          l(null != a, "This channel cannot be guildless."),
          u.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function I(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          M(t, e.id, !0),
          u.default.patch({
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
      function v(e, t, n) {
        let a = e.getGuildId();
        l(null != a, "Channel cannot be guildless");
        let u = e.permissionOverwrites[a],
          r = {
            id: a,
            type: d.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...u,
          };
        n
          ? ((r.allow = i.default.add(r.allow, t)),
            (r.deny = i.default.remove(r.deny, t)))
          : ((r.allow = i.default.remove(r.allow, t)),
            (r.deny = i.default.add(r.deny, t))),
          s.default.updatePermissionOverwrite(e.id, r);
      }
      async function m(e, t, n, a) {
        if ("" === t) return;
        let l = o.default.getVoiceChannelId() === e.id;
        !l && (0, _.connectToStage)(e);
        let i = await (0, S.startStageInstance)(e.id, t, n, a);
        return h(e, !1, !0), i;
      }
      async function p(e, t, n) {
        if ("" === t) return;
        let a = await (0, S.updateStageInstance)(e.id, t, n);
        return a;
      }
      async function L(e) {
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
            return _;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var a = n("945956"),
        l = n("387111"),
        i = n("991170"),
        u = n("834052"),
        s = n("837979"),
        d = n("49111"),
        r = n("606762"),
        o = n("782340");
      function c(e, t, n, a) {
        let i = t[0],
          u = l.default.getName(e, n, i),
          s = null != a ? a : t.length;
        return 1 === s && null != i
          ? u
          : null == i
            ? o.default.Messages.SPEAKING_COUNT.format({ count: s })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: u,
                count: s - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case r.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case r.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case r.RowType.MEMBER:
          case r.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case r.RowType.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let t = u.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: a.default.getMediaSessionId(),
          request_to_speak_state: i.default.canEveryoneRole(
            d.Permissions.REQUEST_TO_SPEAK,
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
            return i;
          },
          updateStageInstance: function () {
            return u;
          },
          endStageInstance: function () {
            return s;
          },
        });
      var a = n("872717"),
        l = n("49111");
      async function i(e, t, n, i, u) {
        let s = await a.default.post({
          url: l.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: u,
            send_start_notification: i,
          },
        });
        return s.body;
      }
      async function u(e, t, n) {
        let i = await a.default.patch({
          url: l.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return i.body;
      }
      function s(e) {
        return a.default.delete(l.Endpoints.STAGE_INSTANCE(e));
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
        l = n("271938"),
        i = n("800762");
      function u(e) {
        return (function (e) {
          return (0, a.useStateFromStores)([i.default, l.default], () =>
            i.default.isInChannel(e, l.default.getId())
          );
        })(null == e ? void 0 : e.id);
      }
    },
    492114: function (e, t, n) {
      "use strict";
      let a, l, i, u, s, d;
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var r = n("917351"),
        o = n.n(r),
        c = n("866227"),
        f = n.n(c),
        _ = n("446674"),
        E = n("872717"),
        S = n("913144"),
        N = n("233069"),
        T = n("813006"),
        g = n("517763"),
        C = n("766274"),
        h = n("42203"),
        A = n("49111");
      let M = A.FormStates.CLOSED,
        I = {},
        v = {},
        m = !1,
        p = !1,
        L = null,
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
        let t = h.default.getChannel(e.channelId);
        if (null == t) return y();
        (M = A.FormStates.OPEN),
          (u = i = t),
          (L = "location" in e && null != e.location ? e.location : null),
          (l = "subsection" in e ? e.subsection : null),
          null != u && (u = u.set("nsfw", u.isNSFW())),
          (s = h.default.getChannel(u.parent_id)),
          (d = u.getGuildId()),
          (I = {}),
          R({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : A.ChannelSettingsSections.OVERVIEW,
            subsection: l,
          });
      }
      function R(e) {
        (a = e.section),
          (l = e.subsection),
          null != u &&
            a === A.ChannelSettingsSections.INSTANT_INVITES &&
            ((m = !0),
            E.default
              .get({
                url: A.Endpoints.INSTANT_INVITES(u.id),
                oldFormErrors: !0,
              })
              .then(
                e => {
                  (m = !1),
                    S.default.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (m = !1)
              ));
      }
      function y() {
        (p = !1),
          (M = A.FormStates.CLOSED),
          (a = null),
          (u = i = null),
          (s = null),
          (v = {});
      }
      let G = o.debounce(() => {
        if (null == u || null == i) return !1;
        let e = u.toJS(),
          t = i.toJS(),
          n = O.every(n => e[n] === t[n]);
        n && u !== i && ((u = i), V.emitChange());
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
      class x extends _.default.Store {
        initialize() {
          this.waitFor(h.default);
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
          return M;
        }
        getCategory() {
          return s;
        }
        getProps() {
          return {
            submitting: M === A.FormStates.SUBMITTING,
            errors: I,
            channel: u,
            section: a,
            subsection: l,
            invites: v,
            selectedOverwriteId: d,
            hasChanges: this.hasChanges(),
            analyticsLocation: L,
          };
        }
      }
      x.displayName = "ChannelSettingsStore";
      let V = new x(S.default, {
        CHANNEL_SETTINGS_INIT: U,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (p = !0), U(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (M = A.FormStates.SUBMITTING), (I = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (i = u), (M = A.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (M = A.FormStates.OPEN),
            (I = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, r.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: y,
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
            nsfw: s,
            flags: d,
            rateLimitPerUser: r,
            defaultThreadRateLimitPerUser: o,
            autoArchiveDuration: c,
            locked: f,
            invitable: _,
            defaultAutoArchiveDuration: E,
            template: S,
            defaultReactionEmoji: N,
            rtcRegion: T,
            videoQualityMode: g,
            availableTags: C,
            defaultSortOrder: h,
            defaultForumLayout: A,
            iconEmoji: M,
            themeColor: I,
          } = e;
          if (null == u) return !1;
          null != t && (u = u.set("name", t)),
            null != a && (u = u.set("topic", a)),
            null != l && (u = u.set("bitrate", l)),
            null != i && (u = u.set("userLimit", i)),
            null != s && (u = u.set("nsfw", s)),
            null != d && (u = u.set("flags", d)),
            null != r && (u = u.set("rateLimitPerUser", r)),
            null != o && (u = u.set("defaultThreadRateLimitPerUser", o)),
            null != c &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                autoArchiveDuration: c,
              })),
            null != f &&
              (u = u.set("threadMetadata", { ...u.threadMetadata, locked: f })),
            null != _ &&
              (u = u.set("threadMetadata", {
                ...u.threadMetadata,
                invitable: _,
              })),
            null != E && (u = u.set("defaultAutoArchiveDuration", E)),
            null != S && (u = u.set("template", S)),
            null != n && (u = u.set("type", n)),
            void 0 !== T && (u = u.set("rtcRegion", T)),
            null != g && (u = u.set("videoQualityMode", g)),
            void 0 !== N && (u = u.set("defaultReactionEmoji", N)),
            null != C && (u = u.set("availableTags", C)),
            null != h && (u = u.set("defaultSortOrder", h)),
            null != A && (u = u.set("defaultForumLayout", A)),
            void 0 !== M && (u = u.set("iconEmoji", M)),
            null != I && (u = u.set("themeColor", I)),
            G();
        },
        CHANNEL_SETTINGS_SET_SECTION: R,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (v = {}),
            e.invites.forEach(e => {
              v[e.code] = b(e);
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
                let t = h.default.getChannel(e);
                if (null == t) return !1;
                (u = i = t), (s = h.default.getChannel(u.parent_id));
              } else {
                let t = h.default.getChannel(e);
                if (null == t) return !1;
                (i = t),
                  null != u &&
                    ((u = u.set(
                      "permissionOverwrites",
                      i.permissionOverwrites
                    )),
                    (s = h.default.getChannel(u.parent_id)));
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
          M = A.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (v = { ...v }), delete v[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          v = { ...v, [e.invite.code]: b(e.invite) };
        },
      });
      var D = V;
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
      var l = n("469563"),
        i = n("715072"),
        u = n("75196"),
        s = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: i,
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
                      className: i,
                      fill: l,
                      d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z",
                    }),
                    (0, a.jsx)("path", {
                      className: i,
                      fill: l,
                      d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z",
                    }),
                    (0, a.jsx)("path", {
                      className: i,
                      fill: l,
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
                    className: i,
                    fill: l,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z",
                  }),
                });
          },
          i.UserPlusIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=a4875551695a745f3ef6.js.map
