(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21863"],
  {
    766665: function (e, t, n) {
      var i = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && i
          ? i(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    820542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          categoryCollapse: function () {
            return a;
          },
          categoryExpand: function () {
            return r;
          },
          categoryCollapseAll: function () {
            return s;
          },
          categoryExpandAll: function () {
            return l;
          },
        });
      var i = n("913144");
      function a(e) {
        i.default.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function r(e) {
        i.default.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function s(e) {
        i.default.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function l(e) {
        i.default.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return a;
          },
          updateCardInfo: function () {
            return r;
          },
          clearCardInfo: function () {
            return s;
          },
          updateAddressInfo: function () {
            return l;
          },
          clearError: function () {
            return u;
          },
        });
      var i = n("913144");
      function a(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function r(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function s() {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function l(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function u() {
        i.default.wait(() =>
          i.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    519705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007"),
        n("702976");
      var i = n("872717"),
        a = n("819855"),
        r = n("913144"),
        s = n("679428"),
        l = n("282109"),
        u = n("568734"),
        o = n("34676"),
        d = n("299039"),
        c = n("49111"),
        f = n("397336"),
        E = n("782340"),
        C = {
          open(e) {
            r.default.dispatch({
              type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
              guildId: e,
            });
          },
          close() {
            r.default.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
          },
          updateGuildNotificationSettings(e, t, n, i) {
            let a = (0, o.getCurrentGuildSettings)(e);
            s.default.saveUserGuildSettings(e, t),
              r.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, o.trackGuildNotificationSettingsUpdate)(e, t, a, n, i);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, i) {
            let a = d.default.keys(t.channel_overrides),
              l = (0, o.getCurrentGuildSettings)(e),
              u = (0, o.getManyCurrentChannelSettings)(e, a);
            s.default.saveUserGuildSettings(e, t),
              r.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, o.trackGuildNotificationSettingsUpdate)(e, t, l, n, i),
              d.default.keys(t.channel_overrides).forEach(a => {
                let r = u.get(a);
                (0, o.trackChannelNotificationSettingsUpdate)(
                  e,
                  a,
                  t.channel_overrides[a],
                  r,
                  n,
                  i
                );
              });
          },
          updateGuildNotificationSettingsBulk(e, t, n) {
            let i = d.default.keys(e),
              a = (0, o.getManyCurrentGuildSettings)(i);
            s.default.saveUserGuildSettingsBulk(e),
              d.default.entries(e).forEach(e => {
                let [i, s] = e,
                  l = a.get(i);
                r.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: i,
                  settings: s,
                }),
                  (0, o.trackGuildNotificationSettingsUpdate)(i, s, l, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, i, l) {
            let u = (0, o.getCurrentChannelSettings)(e, t);
            s.default.saveUserGuildSettings(e, {
              channel_overrides: { [t]: n },
            }),
              r.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
              }),
              a.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED
              ),
              (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, u, i, l);
          },
          updateChannelOverrideSettingsBulk(e, t, n, i) {
            let a = d.default.keys(t),
              l = (0, o.getManyCurrentChannelSettings)(e, a);
            s.default.saveUserGuildSettings(e, { channel_overrides: t }),
              r.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              d.default
                .keys(t)
                .forEach(a =>
                  (0, o.trackChannelNotificationSettingsUpdate)(
                    e,
                    a,
                    t[a],
                    l.get(a),
                    n,
                    i
                  )
                );
          },
          setForumThreadsCreated(e, t) {
            let n = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
              i = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
              a = l.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { flags: (a & ~i) | n },
              o.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = l.default.accountNotificationSettings.flags,
              a = (0, u.setFlag)(n, e, t);
            await i.default.patch({
              url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
              body: { flags: a },
            }),
              await r.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: a },
              });
          },
        };
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return a;
          },
        });
      var i = n("913144");
      function a() {
        i.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("76527");
      n.es(i, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("506070");
      n.es(i, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("962821");
      n.es(i, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("632874");
      n.es(i, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("782542");
      n.es(i, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("618807");
      n.es(i, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("28289");
      n.es(i, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("882039");
      n.es(i, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var i = n("884691");
      function a(e) {
        let [t, n] = (0, i.useState)(!1),
          a = (0, i.useRef)(e.current);
        return (
          (0, i.useEffect)(() => {
            a.current = e.current;
          }, [e]),
          (0, i.useEffect)(() => {
            let e = a.current;
            if (null == e) return;
            let t = () => n(!0),
              i = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", i),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", i);
              }
            );
          }, [a]),
          t
        );
      }
    },
    44141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        r = n("77078"),
        s = n("267363"),
        l = n("680986"),
        u = n("689275"),
        o = n("755624"),
        d = n("233069"),
        c = n("245997"),
        f = n("660478"),
        E = n("49111"),
        C = n("782340");
      function p(e) {
        let t = (function (e) {
          let t = (0, l.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, a.useStateFromStores)(
              [f.default, c.default, u.default, o.default],
              () => {
                if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                if (e.type !== E.ChannelTypes.GUILD_CATEGORY)
                  return f.default.hasUnread(e.id);
                {
                  let t = c.default.getCategories(e.getGuildId());
                  if (null == t[e.id]) return !1;
                  let n = t[e.id].some(e => {
                    let { channel: t } = e;
                    return (
                      (0, d.isReadableType)(t.type) && f.default.hasUnread(t.id)
                    );
                  });
                  if (n) return !0;
                  let i = new Set(t[e.id].map(e => e.channel.id)),
                    a = u.default.getThreadsForGuild(e.guild_id);
                  for (let e in a)
                    if (i.has(e)) {
                      for (let t in a[e])
                        if (
                          o.default.hasJoined(t) &&
                          !o.default.isMuted(t) &&
                          f.default.hasUnread(t)
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
        return (0, i.jsx)(r.MenuItem, {
          id: "mark-channel-read",
          label: C.default.Messages.MARK_AS_READ,
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
            return h;
          },
          default: function () {
            return S;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("866227"),
        r = n.n(a),
        s = n("446674"),
        l = n("77078"),
        u = n("820542"),
        o = n("519705"),
        d = n("319165"),
        c = n("282109"),
        f = n("34676"),
        E = n("679653"),
        C = n("49111"),
        p = n("468200"),
        _ = n("782340");
      let h = () => [
          {
            value: p.MuteUntilSeconds.MINUTES_15,
            label: _.default.Messages.MUTE_DURATION_15_MINUTES,
          },
          {
            value: p.MuteUntilSeconds.HOURS_1,
            label: _.default.Messages.MUTE_DURATION_1_HOUR,
          },
          {
            value: p.MuteUntilSeconds.HOURS_3,
            label: _.default.Messages.MUTE_DURATION_3_HOURS,
          },
          {
            value: p.MuteUntilSeconds.HOURS_8,
            label: _.default.Messages.MUTE_DURATION_8_HOURS,
          },
          {
            value: p.MuteUntilSeconds.HOURS_24,
            label: _.default.Messages.MUTE_DURATION_24_HOURS,
          },
          {
            value: p.MuteUntilSeconds.ALWAYS,
            label: _.default.Messages.MUTE_DURATION_ALWAYS,
          },
        ],
        g = e => {
          let t = e > 0 ? r().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function S(e, t) {
        let [n, a] = (0, s.useStateFromStoresArray)([c.default], () => [
            c.default.isChannelMuted(e.guild_id, e.id),
            c.default.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          r = (0, d.useMutedUntilText)(a),
          p = (0, E.default)(e, !0);
        function S(t) {
          t &&
            e.type === C.ChannelTypes.GUILD_CATEGORY &&
            (0, u.categoryCollapse)(e.id),
            o.default.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.NotificationLabel.muted(t)
            );
        }
        let v = _.default.Messages.MUTE_CHANNEL_GENERIC,
          N = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case C.ChannelTypes.GUILD_CATEGORY:
            (v = _.default.Messages.MUTE_CATEGORY),
              (N = _.default.Messages.UNMUTE_CATEGORY);
            break;
          case C.ChannelTypes.GROUP_DM:
            (v = _.default.Messages.MUTE_CONVERSATION),
              (N = _.default.Messages.UNMUTE_CONVERSATION);
            break;
          case C.ChannelTypes.DM:
            (v = _.default.Messages.MUTE_CHANNEL.format({ name: p })),
              (N = _.default.Messages.UNMUTE_CHANNEL.format({ name: p }));
            break;
          default:
            (v = _.default.Messages.MUTE_CHANNEL_GENERIC),
              (N = _.default.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return n
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: N,
              subtext: r,
              action: () => S(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: v,
              action: () => S(!0),
              children: h().map(n => {
                let { value: a, label: r } = n;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(a),
                    label: r,
                    action: () =>
                      (function (n) {
                        e.type === C.ChannelTypes.GUILD_CATEGORY &&
                          (0, u.categoryCollapse)(e.id);
                        let i = g(n);
                        o.default.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          f.NotificationLabels.Muted,
                          t
                        );
                      })(a),
                  },
                  a
                );
              }),
            });
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
            return C;
          },
          addFavoriteCategory: function () {
            return p;
          },
          removeFavoriteCategory: function () {
            return _;
          },
          updateFavoriteChannels: function () {
            return h;
          },
          updateFavoriteChannelParent: function () {
            return g;
          },
          toggleFavoriteServerMuted: function () {
            return S;
          },
        }),
        n("222007");
      var i = n("151426"),
        a = n("872173"),
        r = n("42203"),
        s = n("957255"),
        l = n("299039"),
        u = n("379881"),
        o = n("843455");
      function d() {
        let e = u.default.getFavoriteChannels(),
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
          if (n.type === i.FavoriteChannelType.CATEGORY) continue;
          let a = r.default.getChannel(t);
          if (
            null == a ||
            (!a.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, a))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function f(e, t) {
        let n = u.default.isFavorite(e);
        !n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = i.FavoriteChannel.create({
                nickname: "",
                type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            a.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function E(e) {
        let t = u.default.getFavorite(e);
        null != t &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              if (
                (delete n.favoriteChannels[e],
                t.type === i.FavoriteChannelType.CATEGORY)
              )
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function C(e, t) {
        let n = u.default.isFavorite(e);
        n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function p(e) {
        let t = l.default.fromTimestamp(Date.now());
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = i.FavoriteChannel.create({
              nickname: e,
              type: i.FavoriteChannelType.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function _(e) {
        E(e);
      }
      function h(e) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let i of e)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var n;
                t.favoriteChannels[i.id].parentId =
                  null !== (n = i.parent_id) && void 0 !== n ? n : "0";
              }
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g(e, t) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function S() {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          a.UserSettingsDelay.INFREQUENT_USER_ACTION
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
            return C;
          },
          useFavoritesCategories: function () {
            return p;
          },
          useFavoritesGuildSelected: function () {
            return _;
          },
          useFavoriteAdded: function () {
            return h;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("884691"),
        a = n("298386"),
        r = n("446674");
      n("42203");
      var s = n("923959"),
        l = n("162771"),
        u = n("697218");
      n("299039");
      var o = n("379881"),
        d = n("498139"),
        c = n("136569"),
        f = n("49111");
      function E(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0,
          d.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          i = (0, r.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.id)
          ),
          a = (0, r.useStateFromStores)([u.default], () =>
            u.default.getCurrentUser()
          ),
          s = e.isDM() || e.isThread(),
          l = !s || (n && (null == a ? void 0 : a.isStaff()) === !0);
        return t && !__OVERLAY__ && !i && l;
      }
      function C(e) {
        let t = (0, r.useStateFromStores)([o.default], () =>
          o.default.getFavorite(e)
        );
        return t;
      }
      function p() {
        let e = (0, r.useStateFromStores)([s.default], () =>
          s.default.getChannels(f.FAVORITES)
        )[a.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function _() {
        let e = (0, r.useStateFromStores)([l.default], () =>
          l.default.getGuildId()
        );
        return e === f.FAVORITES;
      }
      function h() {
        let { isFavoritesPerk: e } = (0, d.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, c.useFavoritesTooltipStore)(),
          n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          a = i.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: a,
        };
      }
    },
    136569: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesTooltipStore: function () {
            return a;
          },
        });
      var i = n("308503");
      let a = (0, i.default)(e => ({
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
            return _;
          },
          useRemoveFromFavoritesItem: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("917351"),
        r = n.n(a),
        s = n("446674"),
        l = n("77078"),
        u = n("923959"),
        o = n("379881"),
        d = n("200008"),
        c = n("986373"),
        f = n("498139"),
        E = n("49111"),
        C = n("782340");
      function p(e, t) {
        return e.type === E.ChannelTypes.GROUP_DM
          ? t
            ? C.default.Messages.UNFAVORITE_GDM
            : C.default.Messages.FAVORITE_GDM
          : e.type === E.ChannelTypes.DM
            ? t
              ? C.default.Messages.UNFAVORITE_DM
              : C.default.Messages.FAVORITE_DM
            : t
              ? C.default.Messages.UNFAVORITE_CHANNEL
              : C.default.Messages.FAVORITE_CHANNEL;
      }
      function _(e) {
        let t = (0, s.useStateFromStores)([u.default], () =>
            u.default.getChannels(E.FAVORITES)
          )[E.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, f.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: a } = (0, c.useFavoriteAdded)(),
          o = (0, c.useCanFavoriteChannel)(e);
        if (!o) return null;
        let [[C], _] = r.partition(t, e => "null" === e.channel.id);
        function h(t) {
          a(), (0, d.addFavoriteChannel)(e.id, t);
        }
        return 0 === _.length
          ? (0, i.jsx)(l.MenuItem, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => h(null),
            })
          : (0, i.jsxs)(l.MenuItem, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => h(null),
              children: [
                n &&
                  (0, i.jsx)(l.MenuGroup, {
                    children: (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: "favorite-".concat(C.channel.id),
                        label: C.channel.name,
                        action: () =>
                          h("null" === C.channel.id ? null : C.channel.id),
                      },
                      C.channel.id
                    ),
                  }),
                (0, i.jsx)(l.MenuGroup, {
                  children: _.map(e =>
                    (0, i.jsx)(
                      l.MenuItem,
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
        let t = (0, s.useStateFromStores)([o.default], () =>
          o.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "favorite-channel",
              label: p(e, !0),
              color: "danger",
              action: () =>
                e.type === E.ChannelTypes.GUILD_CATEGORY
                  ? (0, l.openModalLazy)(async () => {
                      let { default: t } = await n
                        .el("338052")
                        .then(n.bind(n, "338052"));
                      return n =>
                        (0, i.jsx)(t, {
                          ...n,
                          onConfirm: () => {
                            n.onClose(), (0, d.removeFavoriteChannel)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, d.removeFavoriteChannel)(e.id),
            });
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
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        r = n("77078"),
        s = n("162771"),
        l = n("498139"),
        u = n("49111"),
        o = n("782340");
      function d(e) {
        let t = (0, a.useStateFromStores)([s.default], () =>
            s.default.getGuildId()
          ),
          d = e.type === u.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, l.useFavoritesServerExperiment)(
            "useChannelFavoriteSetNickname"
          );
        return __OVERLAY__ || t !== u.FAVORITES
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && d
                  ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                  : o.default.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, r.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("353228")
                    .then(n.bind(n, "353228"));
                  return n =>
                    (0, i.jsx)(t, {
                      ...n,
                      channelId: e.id,
                      heading:
                        c && d
                          ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                          : o.default.Messages.CHANGE_NICKNAME,
                      formTitle:
                        c && d
                          ? o.default.Messages.CATEGORY_NAME
                          : o.default.Messages.NICKNAME,
                      allowReset: !(c && d),
                    });
                });
              },
            });
      }
    },
    936947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("424973"),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("200008"),
        s = n("986373"),
        l = n("498139"),
        u = n("782340");
      function o(e) {
        let t = (0, s.useFavoritesGuildSelected)(),
          n = (0, s.useFavorite)(e.id),
          o = (0, s.useFavoritesCategories)(),
          { isFavoritesPerk: d } = (0, l.useFavoritesServerExperiment)(
            "useChannelMoveToCategory"
          );
        if (__OVERLAY__ || !t || null == n || !d) return null;
        let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId)),
          [f, E] = (function (e) {
            let t = [],
              n = null;
            for (let i of e) null == i.id ? (n = i) : t.push(i);
            return [n, t];
          })(c);
        function C(e) {
          null != n && (0, r.updateFavoriteChannelParent)(n.id, e);
        }
        return null == f && 0 === E.length
          ? null
          : (0, i.jsxs)(a.MenuItem, {
              id: "move-to-category",
              label: u.default.Messages.MOVE_TO,
              children: [
                null != f &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(a.MenuItem, {
                      id: "favorite-uncategorized",
                      label: f.name,
                      action: () => C(f.id),
                    }),
                  }),
                E.length > 0 &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: E.map(e => {
                      let { id: t, name: n } = e;
                      return (0, i.jsx)(
                        a.MenuItem,
                        {
                          id: "favorite-".concat(t),
                          label: n,
                          action: () => C(t),
                        },
                        t
                      );
                    }),
                  }),
              ],
            });
      }
    },
    918034: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationItem: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("764828"),
        s = n("559922"),
        l = n("476294"),
        u = n("782340");
      function o(e) {
        let t = (0, l.useInappropriateConversationsTiers)(e);
        if (null === t) return null;
        let { isTier1: n, isTier2: o } = t;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !n &&
              (0, i.jsx)(a.MenuItem, {
                id: "mark-as-tier-1-inappro",
                label:
                  u.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
                action: () =>
                  (0, s.markAsInappropriateConversation)(
                    e.id,
                    r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
                  ),
              }),
            !o &&
              (0, i.jsx)(a.MenuItem, {
                id: "mark-as-tier-2-inappro",
                label:
                  u.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
                action: () =>
                  (0, s.markAsInappropriateConversation)(
                    e.id,
                    r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
                  ),
              }),
          ],
        });
      }
    },
    976127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRequestItem: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        r = n("77078"),
        s = n("16108"),
        l = n("697218"),
        u = n("782340");
      function o(e) {
        let t = (0, a.useStateFromStores)([l.default], () =>
          l.default.getCurrentUser()
        );
        return (null == t ? void 0 : t.isStaff()) !== !0
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                !e.isMessageRequest &&
                  (0, i.jsx)(r.MenuItem, {
                    id: "mark-as-message-request",
                    label:
                      u.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                    action: () => (0, s.markAsMessageRequest)(e.id),
                  }),
                (0, i.jsx)(r.MenuItem, {
                  id: "clear-message-request",
                  label: u.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                  action: () => (0, s.clearMessageRequestState)(e.id),
                }),
              ],
            });
      }
    },
    856030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyWarningsItem: function () {
            return c;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        r = n("77078"),
        s = n("277734"),
        l = n("764828"),
        u = n("559922"),
        o = n("697218"),
        d = n("782340");
      function c(e) {
        let t = (0, a.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          n = (0, a.useStateFromStores)([l.default], () =>
            l.default.getChannelSafetyWarnings(e.id)
          );
        return (null == t ? void 0 : t.isStaff()) !== !0 ||
          null == n ||
          0 === n.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(r.MenuItem, {
                  id: "delete-safety-warnings",
                  label: d.default.Messages.SAFETY_WARNINGS_DELETE,
                  action: () => (0, u.deleteAllSafetyWarnings)(e.id),
                }),
                (0, i.jsx)(r.MenuItem, {
                  id: "clear-safety-warnings",
                  label: d.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                  action: () => (0, s.clearChannelSafetyWarnings)(e.id),
                }),
              ],
            });
      }
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return c;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return C;
          },
          canGuildUseRoleIcons: function () {
            return p;
          },
        }),
        n("781738");
      var i = n("867805"),
        a = n("407063"),
        r = n("315102"),
        s = n("773336"),
        l = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        d = (0, s.isAndroid)(),
        c = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: E(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let s = r.SUPPORTS_WEBP ? "webp" : "png",
            c = "",
            f = "quality=lossless";
          return (null != t &&
            ((c =
              "size=" +
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())),
            (f = d ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(s, "?")
                .concat(c)
                .concat(f)
            : "".concat(o).concat(l.Endpoints.ROLE_ICON(n, i), "?").concat(c);
        },
        C = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(o, "/roles")) && e.includes("/icons/")),
        p = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(l.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return s;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return l;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var i = n("316693"),
        a = n("923510"),
        r = n("49111");
      let s = r.Permissions.VIEW_CHANNEL,
        l = i.default.combine(s, r.Permissions.CONNECT),
        u = i.default.combine(s, a.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    16108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          acceptMessageRequest: function () {
            return u;
          },
          clearMessageRequestState: function () {
            return o;
          },
          markAsMessageRequest: function () {
            return d;
          },
          rejectMessageRequest: function () {
            return c;
          },
          rejectMessageRequestBatch: function () {
            return f;
          },
          fetchUserCountryCode: function () {
            return E;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        r = n("437822"),
        s = n("773163"),
        l = n("49111");
      async function u(e) {
        await i.default.put({
          url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED },
        }),
          a.default.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function o(e) {
        return i.default.put({
          url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: {
            consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function d(e) {
        return i.default.put({
          url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: s.MessageRequestConsentStatusTypes.PENDING },
        });
      }
      function c(e) {
        return i.default.delete({
          url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
        });
      }
      function f(e) {
        return i.default.put({
          url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function E() {
        r.default.getLocationMetadata();
      }
    },
    773163: function (e, t, n) {
      "use strict";
      var i, a;
      n.r(t),
        n.d(t, {
          MessageRequestConsentStatusTypes: function () {
            return i;
          },
        }),
        ((a = i || (i = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.PENDING = 1)] = "PENDING"),
        (a[(a.ACCEPTED = 2)] = "ACCEPTED"),
        (a[(a.REJECTED = 3)] = "REJECTED");
    },
    95045: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
          renderAutomodMessageMarkup: function () {
            return d;
          },
        }),
        n("222007"),
        n("781738"),
        n("355025");
      var i = n("312016"),
        a = n("367376"),
        r = n("240873"),
        s = n("49111");
      let l = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.GIFV]),
        u = new Set([
          "strong",
          "em",
          "u",
          "text",
          "inlineCode",
          "s",
          "spoiler",
        ]);
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.formatInline ? a.default.parseInlineReply : a.default.parse;
        return (function (e, t, n) {
          var a, s;
          let {
              toAST: o = !1,
              hideSimpleEmbedContent: d = !0,
              formatInline: E = !1,
              postProcessor: C,
            } = n,
            p = !1;
          let _ = e(
            t.content,
            !0,
            ((a = t),
            (s = n),
            {
              allowLinks: null != a.webhookId || !!s.allowLinks,
              allowEmojiLinks: null != a.webhookId,
              channelId: a.channel_id,
              messageId: a.id,
              mentionChannels: a.mentionChannels,
              isInteracting: !!s.isInteracting,
              formatInline: !!s.formatInline,
              noStyleAndInteraction: !!s.noStyleAndInteraction,
              allowHeading: !!s.allowHeading,
              allowList: !!s.allowList,
              previewLinkTarget: !!s.previewLinkTarget,
              disableAnimatedEmoji: !!s.disableAnimatedEmoji,
              disableAutoBlockNewlines: !0,
              muted: !1,
            }),
            (e, n) => (
              !Array.isArray(e) && (e = [e]),
              d &&
                (e = (function (e, t) {
                  if (1 !== e.length || 1 !== t.length) return e;
                  let n = e[0],
                    i = t[0];
                  return ("link" === n.type || "attachmentLink" === n.type) &&
                    l.has(i.type) &&
                    (0, r.isEmbedInline)(i)
                    ? []
                    : e;
                })(e, t.embeds)),
              !E &&
                (e = (function (e, t) {
                  return t
                    ? c(e)
                    : ("paragraph" === e[0].type &&
                        e[0].content instanceof Array &&
                        (e[0].content = c(e[0].content)),
                      e);
                })(e, n)),
              (p = (function (e, t) {
                return t
                  ? f(e)
                  : "paragraph" === e[0].type &&
                      e[0].content instanceof Array &&
                      f(e[0].content);
              })(
                (e = (function (e) {
                  let t = e.some(e => "link" !== e.type || !1);
                  return e.filter(e => {
                    let n = "link" === e.type,
                      a = (0, i.parseQuestsEmbedCode)(e.target);
                    return !(n && null != a && !t);
                  });
                })(e)),
                n
              )),
              E &&
                (e = (function e(t) {
                  return (
                    t.forEach(t => {
                      u.has(t.type) &&
                        null != t.content &&
                        (Array.isArray(t.content)
                          ? e(t.content)
                          : (t.content = t.content.replace(/\n/g, " ")));
                    }),
                    t
                  );
                })(e)),
              null != C && (e = C(e, n)),
              e
            )
          );
          return { hasSpoilerEmbeds: p, content: _ };
        })(n, e, t);
      }
      function d(e, t, n) {
        var i;
        return (
          (i = a.default.parseAutoModerationSystemMessage),
          i(
            e,
            !0,
            {
              allowLinks: !1,
              allowEmojiLinks: !1,
              mentionChannels: [],
              isInteracting: !1,
              formatInline: !1,
              noStyleAndInteraction: !1,
              allowHeading: !1,
              allowList: !1,
              disableAutoBlockNewlines: !0,
              highlightWord: t,
              disableAnimatedEmoji: !1,
              channelId: n,
              muted: !1,
            },
            e => (!Array.isArray(e) && (e = [e]), e)
          )
        );
      }
      function c(e) {
        let t = e.some(
          e =>
            "emoji" !== e.type &&
            "customEmoji" !== e.type &&
            "soundboard" !== e.type &&
            ("string" != typeof e.content || "" !== e.content.trim()) &&
            !0
        );
        if (t) return e;
        let n = 0;
        return (e.forEach(e => {
          if (
            (("emoji" === e.type ||
              "customEmoji" === e.type ||
              "soundboard" === e.type) &&
              (n += 1),
            n > 30)
          )
            return !1;
        }),
        n > 30)
          ? e
          : (e.forEach(e => {
              e.jumboable = !0;
            }),
            e);
      }
      function f(e) {
        return e.some(
          e =>
            "spoiler" === e.type &&
            Array.isArray(e.content) &&
            e.content.some(
              e => "link" === e.type || "attachmentLink" === e.type
            )
        );
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("748820"),
        r = n("77078"),
        s = n("112679"),
        l = n("55689"),
        u = n("676379"),
        o = n("697218"),
        d = n("599110"),
        c = n("659500"),
        f = n("719923"),
        E = n("49111"),
        C = n("646718");
      function p(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: p,
            onClose: _,
            onComplete: h,
            onSubscriptionConfirmation: g,
            analyticsLocations: S,
            analyticsObject: v,
            analyticsLocation: N,
            analyticsSourceLocation: A,
            isGift: I = !1,
            giftMessage: T,
            subscriptionTier: m,
            trialId: R,
            postSuccessGuild: y,
            openInvoiceId: M,
            applicationId: O,
            referralTrialOfferId: U,
            giftRecipient: L,
            returnRef: P,
            subscription: b,
          } = null != e ? e : {},
          G = !1,
          x = (0, a.v4)(),
          F = o.default.getCurrentUser(),
          D = (0, f.isPremiumExactly)(F, C.PremiumTypes.TIER_2);
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: a, ...r } = n;
              return (0, i.jsx)(e, {
                ...r,
                loadId: x,
                subscriptionTier: m,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(m),
                isGift: I,
                giftMessage: T,
                giftRecipient: L,
                initialPlanId: t,
                followupSKUInfo: p,
                onClose: (e, t) => {
                  a(),
                    null == _ || _(e),
                    e &&
                      (null == g || g(),
                      !I &&
                        null != t &&
                        t === C.PremiumSubscriptionSKUs.TIER_2 &&
                        !D &&
                        c.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (G = !0),
                    null == h || h(),
                    !I && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: g,
                analyticsLocations: S,
                analyticsObject: v,
                analyticsLocation: N,
                analyticsSourceLocation: A,
                trialId: R,
                postSuccessGuild: y,
                planGroup: C.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: M,
                applicationId: O,
                referralTrialOfferId: U,
                returnRef: P,
                subscription: b,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !G &&
                d.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: x,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != N ? N : v,
                  source: A,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: I,
                  eligible_for_trial: null != R,
                  application_id: O,
                  location_stack: S,
                }),
                (0, s.clearError)(),
                (0, l.clearPurchaseTokenAuthState)(),
                null == _ || _(G),
                G && (null == g || g());
            },
          }
        );
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return C;
          },
          getManageResourcePermissions: function () {
            return p;
          },
        }),
        n("222007");
      var i = n("884691"),
        a = n("316693"),
        r = n("446674"),
        s = n("813006");
      n("923959");
      var l = n("957255"),
        u = n("697218");
      n("991170");
      var o = n("270161"),
        d = n("843455");
      let c = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, i) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
          if ("userId" in e) return i && null != t && e.userId === t.id;
          if ("user" in e) {
            var a;
            return (
              i &&
              null != t &&
              (null === (a = e.user) || void 0 === a ? void 0 : a.id) === t.id
            );
          }
          return !1;
        },
        E = e => {
          if (null == e)
            return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
          let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              a.default.combine(t, d.Permissions.CREATE_EVENTS),
              a.default.combine(t, d.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        C = e => {
          let [t, n] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : E(e),
            [a, o, C, p] = (0, r.useStateFromStoresArray)([l.default], () => [
              l.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              l.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              l.default.can(t, e),
              l.default.can(n, e),
            ]),
            _ = (0, r.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            h = i.useCallback(e => f(e, _, o, a), [a, o, _]),
            g = i.useCallback(e => f(e, _, p, C), [p, C, _]);
          return null == e
            ? c
            : {
                canCreateExpressions: a,
                canCreateGuildEvent: C,
                canManageAllExpressions: o,
                canManageAllEvents: p,
                canManageGuildExpression: h,
                canManageGuildEvent: g,
              };
        },
        p = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : l.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [i, a] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : E(e),
            r = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            C = t.can(i, e),
            p = t.can(a, e),
            _ = n.getCurrentUser();
          return null == e
            ? c
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: C,
                canManageAllExpressions: o,
                canManageAllEvents: p,
                canManageGuildExpression: e => f(e, _, o, r),
                canManageGuildEvent: e => f(e, _, p, C),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return a;
          },
        });
      var i = n("913144");
      let a = e => {
        i.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("884691"),
        a = n("79112"),
        r = n("685665"),
        s = n("929423");
      n("424562");
      var l = n("49111"),
        u = n("397336");
      function o(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: o,
            analyticsLocations: d,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, r.default)(),
          E = (0, i.useCallback)(() => {
            null != t && (0, s.initGuildIdentitySettings)(t, null != d ? d : f),
              a.default.open(
                l.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? u.ProfileCustomizationSubsection.GUILD
                  : u.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: o,
                  analyticsLocations: d,
                  openWithoutBackstack: c,
                }
              );
          }, [t, n, o, d, c, f]);
        return E;
      }
    },
    277734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          dismissChannelSafetyWarnings: function () {
            return s;
          },
          setChannelSafetyWarningFeedback: function () {
            return l;
          },
          clearChannelSafetyWarnings: function () {
            return u;
          },
          acknowledgeChannelSafetyWarningTooltip: function () {
            return o;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        r = n("49111");
      function s(e, t) {
        return (
          a.default.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t,
          }),
          i.default.post({
            url: r.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
          })
        );
      }
      function l(e, t, n) {
        a.default.dispatch({
          type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
          channelId: e,
          warningId: t,
          feedbackType: n,
        });
      }
      function u(e) {
        a.default.dispatch({
          type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
          channelId: e,
        });
      }
      function o(e) {
        a.default.dispatch({
          type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
          channelId: e,
        });
      }
    },
    764828: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SafetyWarningTypes: function () {
            return i;
          },
          SafetyWarningFeedbackTypes: function () {
            return a;
          },
          default: function () {
            return g;
          },
        }),
        n("222007");
      var i,
        a,
        r,
        s,
        l = n("446674"),
        u = n("913144"),
        o = n("42203"),
        d = n("718517");
      let c = 5 * d.default.Millis.SECOND;
      ((r = i || (i = {}))[(r.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
        (r[(r.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] =
          "INAPPROPRIATE_CONVERSATION_TIER_1"),
        (r[(r.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] =
          "INAPPROPRIATE_CONVERSATION_TIER_2"),
        ((s = a || (a = {}))[(s.UPVOTE = 0)] = "UPVOTE"),
        (s[(s.DOWNVOTE = 1)] = "DOWNVOTE");
      let f = [],
        E = {},
        C = new Set();
      function p(e) {
        let { safetyWarnings: t } = e;
        null != t &&
          ((E[e.id] = t),
          t.some(e => {
            var t;
            return (
              (2 === (t = e).type || 3 === t.type) &&
              null != e.dismiss_timestamp &&
              !(function (e) {
                return new Date(e).getTime() > Date.now() - c;
              })(e.dismiss_timestamp)
            );
          })
            ? C.add(e.id)
            : C.delete(e.id)),
          null == t && (null != E[e.id] && delete E[e.id], C.delete(e.id));
      }
      function _() {
        (E = {}),
          Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
            p(e);
          });
      }
      class h extends l.default.Store {
        initialize() {
          this.waitFor(o.default);
        }
        getChannelSafetyWarning(e, t) {
          var n;
          return null === (n = E[e]) || void 0 === n
            ? void 0
            : n.find(e => e.id === t);
        }
        getChannelSafetyWarnings(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : f;
        }
        hasShownInitialTooltipForChannel(e) {
          return C.has(e);
        }
      }
      var g = new h(u.default, {
        CHANNEL_CREATE: function (e) {
          p(e.channel);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          null != E[t.id] && delete E[t.id], C.delete(t.id);
        },
        CHANNEL_UPDATES: function (e) {
          e.channels.forEach(e => {
            p(e);
          });
        },
        CONNECTION_OPEN: _,
        CONNECTION_OPEN_SUPPLEMENTAL: _,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
          let { channelId: t, warningId: n, feedbackType: i } = e,
            a = E[t];
          null != a &&
            (E[t] = a.map(e => (e.id === n ? { ...e, feedback_type: i } : e)));
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
          let { channelId: t } = e,
            n = E[t];
          C.delete(t),
            null != n &&
              (E[t] = n.map(e => ({ ...e, dismiss_timestamp: void 0 })));
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
          let { channelId: t, warningIds: n } = e,
            i = E[t];
          if (null == i) return;
          let a = new Date().toISOString();
          E[t] = i.map(e =>
            n.includes(e.id) ? { ...e, dismiss_timestamp: a } : e
          );
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function (e) {
          let { channelId: t } = e;
          C.add(t);
        },
      });
    },
    499799: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isStaffTeenSafetyAssistAgeBypass: function () {
            return r;
          },
          useStaffTeenSafetyAssistAgeBypass: function () {
            return s;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-10_staff_teen_safety_assist_age_bypass",
        label: "Staff Teen Safety Assist Age Bypass",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
            config: { enabled: !0 },
          },
        ],
      });
      function r(e) {
        let { enabled: t } = a.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 }
        );
        return t;
      }
      function s(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    533855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelSafetyWarning: function () {
            return l;
          },
        });
      var i = n("884691"),
        a = n("446674"),
        r = n("764828"),
        s = n("13427");
      function l(e, t, n) {
        let l = (0, a.useStateFromStores)(
            [r.default],
            () => r.default.getChannelSafetyWarnings(e),
            [e]
          ),
          u = l.filter(e => e.type === t);
        return (
          i.useEffect(() => {
            t === r.SafetyWarningTypes.STRANGER_DANGER &&
              u.length > 0 &&
              s.StrangerDangerTeensExperiment.trackExposure({ location: n });
          }, [t, u.length, n]),
          u.find(e => null == e.dismiss_timestamp)
        );
      }
    },
    908041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUserIsTeen: function () {
            return s;
          },
        });
      var i = n("446674"),
        a = n("697218"),
        r = n("499799");
      function s(e) {
        let t = (0, i.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          n = (0, r.useStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === t || n;
      }
    },
    559922: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          playVibingWumpusMusic: function () {
            return s;
          },
          stopVibingWumpusMusic: function () {
            return l;
          },
          pauseVibingWumpusMusic: function () {
            return u;
          },
          deleteAllSafetyWarnings: function () {
            return o;
          },
          markAsInappropriateConversation: function () {
            return d;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        r = n("49111");
      function s() {
        a.default.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function l() {
        a.default.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function u() {
        a.default.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function o(e) {
        return i.default.delete({ url: r.Endpoints.DELETE_SAFETY_WARNINGS(e) });
      }
      function d(e, t) {
        return i.default.post({
          url: r.Endpoints.ADD_SAFETY_WARNING(e),
          body: { safety_warning_type: t },
        });
      }
    },
    761771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isEligibleForInappropriateConversationWarning: function () {
            return s;
          },
          useIsEligibleForInappropriateConversationWarning: function () {
            return l;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
          kind: "user",
          id: "2024-01_inappropriate_conversation_warning",
          label: "Inappropriate Conversation Warning",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Inappropriate Conversation Warning",
              config: { enabled: !0 },
            },
          ],
        }),
        r = (0, i.createExperiment)({
          kind: "user",
          id: "2024-01_inappropriate_conversation_warning_staff_bypass",
          label: "Inappropriate Conversation Warning Staff Bypass",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Inappropriate Conversation Warning Staff Bypass",
              config: { enabled: !0 },
            },
          ],
        });
      function s(e) {
        let { location: t, autoTrackExposure: n = !1 } = e,
          { enabled: i } = a.getCurrentConfig(
            { location: t },
            { autoTrackExposure: n }
          ),
          { enabled: s } = r.getCurrentConfig(
            { location: t },
            { autoTrackExposure: n }
          );
        return i || s;
      }
      function l(e) {
        let { location: t, autoTrackExposure: n = !1 } = e,
          { enabled: i } = a.useExperiment(
            { location: t },
            { autoTrackExposure: n }
          ),
          { enabled: s } = r.useExperiment(
            { location: t },
            { autoTrackExposure: n }
          );
        return i || s;
      }
    },
    898436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationBannerForChannel: function () {
            return u;
          },
        });
      var i = n("764828"),
        a = n("533855"),
        r = n("761771"),
        s = n("888203"),
        l = n("328564");
      function u(e, t) {
        let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
            location: t,
          }),
          u = (0, l.useSafetyAlertsSettingOrDefault)(),
          o = (0, s.useInappropriateConversationWarningsForChannel)(e),
          d = (0, a.useChannelSafetyWarning)(
            e,
            i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            t
          );
        if (!!n && !!u && 0 !== o.length) {
          if (
            !o.some(
              e =>
                e.type ===
                  i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type ===
                  i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp)
            )
          )
            return d;
        }
      }
    },
    888203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationWarningsForChannel: function () {
            return r;
          },
        });
      var i = n("446674"),
        a = n("764828");
      function r(e) {
        let t = (0, i.useStateFromStores)(
          [a.default],
          () => a.default.getChannelSafetyWarnings(e),
          [e]
        );
        return t.filter(
          e =>
            e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
        );
      }
    },
    476294: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationsTiers: function () {
            return u;
          },
        });
      var i = n("446674"),
        a = n("697218"),
        r = n("764828"),
        s = n("761771"),
        l = n("898436");
      let u = e => {
        let t = (0, s.useIsEligibleForInappropriateConversationWarning)({
            location: "context-menu-item",
          }),
          n = (0, i.useStateFromStores)([a.default], () =>
            a.default.getCurrentUser()
          ),
          u = (0, l.useInappropriateConversationBannerForChannel)(
            e.id,
            "context-menu-item"
          );
        if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM())
          return null;
        let o =
            (null == u ? void 0 : u.type) ===
            r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
          d =
            (null == u ? void 0 : u.type) ===
            r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        return { isTier1: o, isTier2: d };
      };
    },
    328564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyAlertsSettingOrDefault: function () {
            return s;
          },
        });
      var i = n("446674"),
        a = n("374363"),
        r = n("908041");
      let s = () => {
        let e = (0, i.useStateFromStores)([a.default], () => {
            var e, t, n;
            return (
              null ===
                (n =
                  null === (t = a.default.settings.privacy) || void 0 === t
                    ? void 0
                    : null === (e = t.inappropriateConversationWarnings) ||
                        void 0 === e
                      ? void 0
                      : e.value) ||
              void 0 === n ||
              n
            );
          }),
          t = (0, r.useUserIsTeen)("safety_warnings_setting");
        return t && e;
      };
    },
    13427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StrangerDangerTeensExperiment: function () {
            return a;
          },
          useIsEligibleForStrangerDangerTeens: function () {
            return r;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-08_self_mod_stranger_danger_teens",
        label: "Stranger Danger Teens",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable stranger danger for teens",
            config: { enabled: !0 },
          },
        ],
      });
      function r(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    130074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("272030"),
        s = n("838446"),
        l = n("158534"),
        u = n("798609"),
        o = n("846883"),
        d = n("812204"),
        c = n("243288"),
        f = n("321135"),
        E = n("873254"),
        C = n("44141"),
        p = n("531674"),
        _ = n("861370"),
        h = n("972701"),
        g = n("390008"),
        S = n("936947"),
        v = n("918034"),
        N = n("976127"),
        A = n("856030"),
        I = n("726750"),
        T = n("170990"),
        m = n("304582"),
        R = n("72057"),
        y = n("563816"),
        M = n("489836"),
        O = n("406703"),
        U = n("126710"),
        L = n("502533"),
        P = n("314838"),
        b = n("151200"),
        G = n("692986"),
        x = n("806179"),
        F = n("816106"),
        D = n("623879"),
        w = n("49111"),
        V = n("782340"),
        j = (0, l.default)(
          (0, s.default)(
            function (e) {
              let {
                  user: t,
                  channel: n,
                  channelSelected: s = !1,
                  showMute: l = !0,
                  showMediaItems: d = !1,
                  showChannelCallItems: w = !1,
                  showModalItems: j = !0,
                  targetIsUser: H = !1,
                  context: W,
                  onSelect: k,
                  onHeightUpdate: Y,
                } = e,
                B = (0, x.default)(t.id, null),
                Z = (0, O.default)(t, W),
                z = (0, R.default)({ user: t, context: W }),
                q = (0, m.default)(t),
                K = (0, D.default)(t.id),
                X = (0, U.default)(n.id, s),
                Q = (0, P.default)(t),
                J = (0, o.default)(null, t),
                $ = (0, F.default)(t.id),
                ee = (0, b.default)(t.id, n.id),
                et = (0, T.default)(t),
                en = (0, G.default)(t.id),
                ei = (0, L.default)(t.id, n.id),
                ea = (0, M.default)(t),
                er = (0, p.default)(n),
                es = (0, _.default)({
                  id: t.id,
                  label: V.default.Messages.COPY_ID_USER,
                }),
                el = (0, _.default)({
                  id: n.id,
                  label: V.default.Messages.COPY_ID_CHANNEL,
                }),
                eu = (0, C.default)(n),
                eo = (0, f.default)(t.id),
                ed = (0, c.default)(n.id),
                ec = (0, I.default)(t),
                ef = (0, E.default)(t.id),
                eE = (0, y.default)({
                  commandType: u.ApplicationCommandType.USER,
                  commandTargetId: t.id,
                  channel: n,
                  guildId: void 0,
                  onHeightUpdate: Y,
                }),
                eC = (0, h.useAddToFavoritesItem)(n),
                ep = (0, h.useRemoveFromFavoritesItem)(n),
                e_ = (0, g.default)(n),
                eh = (0, S.default)(n),
                eg = (0, N.useMessageRequestItem)(n),
                eS = (0, v.useInappropriateConversationItem)(n),
                ev = (0, A.useSafetyWarningsItem)(n),
                eN = n.isManaged(),
                eA = t.isNonUserBot();
              return (0, i.jsxs)(a.Menu, {
                navId: "user-context",
                onClose: r.closeContextMenu,
                "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: k,
                children: [
                  (0, i.jsx)(a.MenuGroup, { children: !eA && eu }),
                  (0, i.jsx)(a.MenuGroup, { children: eg }),
                  (0, i.jsx)(a.MenuGroup, { children: ev }),
                  (0, i.jsx)(a.MenuGroup, { children: eS }),
                  (0, i.jsxs)(a.MenuGroup, { children: [eC, e_, eh] }),
                  (0, i.jsx)(a.MenuGroup, { children: !eA && ec }),
                  (0, i.jsxs)(a.MenuGroup, {
                    children: [
                      !eA &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [j && B, Z, !eN && ee, j && z, j && q, K],
                        }),
                      X,
                    ],
                  }),
                  !eA &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(a.MenuGroup, { children: d && $ }),
                        (0, i.jsx)(a.MenuGroup, { children: j && J }),
                        (0, i.jsxs)(a.MenuGroup, {
                          children: [
                            d && en,
                            d && ei,
                            eE,
                            j && Q,
                            et,
                            j && ea,
                            d && ef,
                          ],
                        }),
                        (0, i.jsx)(a.MenuGroup, { children: l && er }),
                        w && (0, i.jsxs)(a.MenuGroup, { children: [ed, eo] }),
                      ],
                    }),
                  (0, i.jsx)(a.MenuGroup, { children: ep }),
                  (0, i.jsxs)(a.MenuGroup, { children: [es, !H && el] }),
                ],
              });
            },
            { object: w.AnalyticsObjects.CONTEXT_MENU }
          ),
          [d.default.CONTEXT_MENU, d.default.DM_USER_MENU]
        );
    },
    126710: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("450911"),
        s = n("42203"),
        l = n("782340");
      function u(e, t) {
        let n = s.default.getChannel(e);
        return null == n || n.isMultiUserDM()
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "close-dm",
              label: l.default.Messages.CLOSE_DM,
              action: () => r.default.closePrivateChannel(e, t),
            });
      }
    },
    151200: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        r = n("77078"),
        s = n("561288"),
        l = n("191145"),
        u = n("271938"),
        o = n("99795"),
        d = n("782340");
      function c(e, t) {
        let n = (0, a.useStateFromStores)(
            [u.default],
            () => u.default.getId() === e,
            [e]
          ),
          [c, f] = (0, a.useStateFromStoresArray)(
            [l.default],
            () => [
              l.default.getParticipants(t),
              l.default.getParticipant(t, e),
            ],
            [t, e]
          );
        return n || 0 === c.length
          ? null
          : null == f
            ? (0, i.jsx)(r.MenuItem, {
                id: "ring",
                label: d.default.Messages.RING,
                action: () => s.default.ring(t, [e]),
              })
            : f.type === o.ParticipantTypes.USER && f.ringing
              ? (0, i.jsx)(r.MenuItem, {
                  id: "stop-ringing",
                  label: d.default.Messages.STOP_RINGING,
                  action: () => s.default.stopRinging(t, [e]),
                })
              : null;
      }
    },
    679428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var i = n("872717"),
        a = n("689988"),
        r = n("870691"),
        s = n("42203"),
        l = n("718517"),
        u = n("49111");
      let o = {},
        d = 0,
        c = 15 * l.default.Millis.SECOND;
      function f() {
        o = { ...r.default.getCollapsedCategories() };
      }
      function E() {
        !__OVERLAY__ && (clearTimeout(d), (d = setTimeout(() => p({}), c)));
      }
      async function C(e, t) {
        null == e || e === u.ME
          ? await i.default.patch({
              url: u.Endpoints.USER_GUILD_SETTINGS(u.ME),
              body: t,
            })
          : await p(null != t ? { [null != e ? e : u.ME]: t } : {});
      }
      async function p(e) {
        clearTimeout(d);
        let t = 0 !== Object.keys(e).length,
          n = r.default.getCollapsedCategories(),
          a = (function () {
            let e = {},
              t = r.default.getCollapsedCategories();
            for (let n in t) t[n] !== o[n] && (e[n] = !0);
            for (let n in o) t[n] !== o[n] && (e[n] = !0);
            return e;
          })();
        for (let i in a) {
          let a = s.default.getChannel(i);
          null != a &&
            null != a.guild_id &&
            (!(a.guild_id in e) && (e[a.guild_id] = {}),
            null == e[a.guild_id].channel_overrides &&
              (e[a.guild_id].channel_overrides = {}),
            (e[a.guild_id].channel_overrides[a.id] = {
              ...e[a.guild_id].channel_overrides[a.id],
              collapsed: a.id in n,
            }),
            (t = !0));
        }
        return t
          ? ((o = { ...n }),
            delete e[u.FAVORITES],
            (
              await i.default.patch({
                url: u.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function _() {
        o = { ...r.default.getCollapsedCategories() };
      }
      class h extends a.default {
        constructor(...e) {
          super(...e),
            (this.actions = {
              CATEGORY_COLLAPSE: E,
              CATEGORY_EXPAND: E,
              CATEGORY_COLLAPSE_ALL: E,
              CATEGORY_EXPAND_ALL: E,
              POST_CONNECTION_OPEN: f,
              USER_GUILD_SETTINGS_FULL_UPDATE: _,
            }),
            (this.saveUserGuildSettings = C),
            (this.saveUserGuildSettingsBulk = p);
        }
      }
      var g = new h();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var i = n("446674"),
        a = n("913144"),
        r = n("449008"),
        s = n("42203"),
        l = n("341542"),
        u = n("923959"),
        o = n("49111");
      let d = {},
        c = 0;
      function f() {
        c += 1;
      }
      function E(e) {
        if (null == d[e]) return !1;
        delete d[e];
      }
      class C extends i.default.PersistedStore {
        initialize(e) {
          this.waitFor(s.default, l.default),
            this.removeChangeListener(f),
            this.addChangeListener(f),
            (d = null != e ? e : {});
        }
        getState() {
          return d;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!d[e] && d[e];
        }
        getCollapsedCategories() {
          return d;
        }
        get version() {
          return c;
        }
      }
      (C.displayName = "CategoryCollapseStore"),
        (C.persistKey = "collapsedCategories");
      var p = new C(a.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (d = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (d[e.channel_id] = !0) : delete d[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(r.isNotNullish));
          for (let e in d) {
            let t = s.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete d[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (d[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (d[t]) return !1;
          d[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return E(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          u.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (d[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          u.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete d[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return E(t);
        },
      });
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        r = n("414456"),
        s = n.n(r),
        l = n("77078"),
        u = n("760607"),
        o = n("684133");
      function d(e) {
        let {
            children: t,
            size: n = 16,
            className: r,
            flowerStarClassName: d,
            ...c
          } = e,
          f = a.Children.only(t),
          E = (0, l.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(o.flowerStarContainer, r),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(u.default, { ...c, className: s(d, o.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(o.childContainer, {
                [o.redesignIconChildContainer]: E,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return a;
          },
          Shine: function () {
            return _;
          },
          default: function () {
            return g;
          },
        });
      var i,
        a,
        r = n("37983"),
        s = n("884691"),
        l = n("414456"),
        u = n.n(l),
        o = n("458960"),
        d = n("77078"),
        c = n("252744"),
        f = n("145131"),
        E = n("61435");
      ((i = a || (a = {})).DEFAULT = "default"), (i.SMALL = "small");
      let C = { default: E.shineDefault, small: E.shineSmall },
        p = { default: E.shineInnerDefault, small: E.shineInnerSmall };
      class _ extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, r.jsx)(o.default.div, {
            ...i,
            className: u(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, r.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: C[t],
              children: (0, r.jsx)("div", { className: p[t] }),
            }),
          });
        }
      }
      _.defaultProps = { shineSize: "default" };
      let h = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: a,
            pauseAnimation: l,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: C,
            onlyShineOnHover: p,
            ...h
          } = e,
          g = s.createRef(),
          S = (0, c.default)(g),
          v = !i && !a && !0 !== l && (!p || S);
        return (0, r.jsxs)(d.Button, {
          buttonRef: g,
          ...h,
          className: u(E.shinyButton, n),
          disabled: i,
          submitting: a,
          children: [
            t,
            v
              ? (0, r.jsx)(_, {
                  shinePaused: f,
                  className: u(
                    E.buttonShine,
                    p ? E.onlyShineOnHover : void 0,
                    C
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      h.ShineSizes = a;
      var g = h;
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      function a(e) {
        let { size: t, horizontal: n = !1 } = e,
          a = n ? t : 1,
          r = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: a,
            minWidth: a,
            height: r,
            minHeight: r,
          },
        });
      }
      n("884691");
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return l;
          },
          UID: function () {
            return u;
          },
        });
      var i = n("995008"),
        a = n.n(i),
        r = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        l = () => (0, r.useLazyValue)(() => s()),
        u = e => {
          let { children: t } = e;
          return t(l());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        r = n.n(a),
        s = n("384737"),
        l = n("448052"),
        u = n("748802"),
        o = n("260792"),
        d = n("77078"),
        c = n("75196"),
        f = n("366842");
      let E = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        C = e => {
          let {
              direction: t = E.DOWN,
              width: n = 24,
              height: a = 24,
              color: C = "currentColor",
              transition: p = f.transition,
              className: _,
              foreground: h,
              expanded: g,
              ...S
            } = e,
            { enabled: v } = (0, d.useRedesignIconContext)(),
            N = t;
          if ((!0 === g ? (N = E.DOWN) : !1 === g && (N = E.RIGHT), v)) {
            let e = {
              [E.UP]: o.ChevronSmallUpIcon,
              [E.DOWN]: s.ChevronSmallDownIcon,
              [E.LEFT]: l.ChevronSmallLeftIcon,
              [E.RIGHT]: u.ChevronSmallRightIcon,
            }[N];
            return (0, i.jsx)(e, {
              ...S,
              className: _,
              width: n,
              height: a,
              color: C,
              colorClass: h,
            });
          }
          return (0, i.jsx)("svg", {
            className: r(_, p, N),
            width: n,
            height: a,
            viewBox: "0 0 24 24",
            ...(0, c.default)(S),
            children: (0, i.jsx)("path", {
              className: h,
              fill: "none",
              stroke: C,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      C.Directions = E;
      var p = C;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("733154"),
        s = n("75196"),
        l = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: r,
                fill: a,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          r.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("505088"),
        s = n("75196"),
        l = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              backgroundColor: l,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != l
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: l })
                  : null,
                (0, i.jsx)("path", {
                  fill: a,
                  className: r,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          r.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("469563"),
        s = n("163725"),
        l = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foregroundColor: s = a.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...d
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, l.default)(d),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: s,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: r,
                  className: o,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          s.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("75196"),
        r = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            foreground: s,
            ...l
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, a.default)(l),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: s,
              fill: r,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("75196");
      function r(e) {
        let { width: t = 104, height: n = 80, ...r } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, i.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("424823"),
        s = n("75196"),
        l = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: a,
                className: r,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          r.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("390300"),
        s = n("75196"),
        l = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: r,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          r.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("287083"),
        s = n("75196"),
        l = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: a = "currentColor",
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: a,
              }),
            });
          },
          r.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: l,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: l = "",
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...d
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof s ? s : s.css,
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: l,
            }),
          ],
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: l,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: l,
            }),
          ],
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: l,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: l,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: l,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: l,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var i,
        a = n("817736"),
        r = n("118810");
      let s = { root: null, rootMargin: "0px", threshold: 0.5 };
      i = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, a.findDOMNode)(e);
          (0, r.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = s) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        a = n("748820"),
        r = n("157590");
      let s = (0, a.v4)(),
        l = new Map(),
        u = new Map();
      class o extends i.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = u.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? l.has(t)
              ? (this.elementId = l.get(t) || "")
              : l.set(t, (0, a.v4)())
            : (this.elementId = s);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(o, new r.default({ root: t, rootMargin: n, threshold: i }));
        }
      }
      o.defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var d = o;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return i.default;
          },
          VisibilitySensor: function () {
            return a.default;
          },
        }),
        n("6268");
      var i = n("157590"),
        a = n("235855");
    },
  },
]);
//# sourceMappingURL=29b3e0576bc51612a49a.js.map
