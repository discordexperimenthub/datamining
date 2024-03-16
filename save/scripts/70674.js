(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70674"],
  {
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("901582");
      function l(e, t) {
        return function (n) {
          return (0, i.jsx)(a.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, i.jsx)(e, { ...n }),
          });
        };
      }
    },
    846883: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        l = n("77078"),
        d = n("260365"),
        u = n("823411"),
        s = n("997289"),
        o = n("685665"),
        r = n("442939"),
        c = n("662285"),
        f = n("782911"),
        I = n("629414"),
        p = n("53887"),
        A = n("486150"),
        _ = n("555759"),
        T = n("271938"),
        v = n("42203"),
        y = n("525065"),
        S = n("305961"),
        E = n("957255"),
        m = n("824563"),
        h = n("27618"),
        C = n("18494"),
        N = n("101125"),
        M = n("697218"),
        g = n("800762"),
        O = n("953998"),
        b = n("387111"),
        F = n("550766"),
        G = n("191225"),
        R = n("706508"),
        L = n("126939"),
        V = n("612696"),
        j = n("501260"),
        x = n("871388"),
        U = n("152311"),
        Y = n("407908"),
        D = n("698372"),
        P = n("141962"),
        J = n("954016"),
        k = n("49111"),
        w = n("450484"),
        K = n("782340");
      function H(e, t) {
        let { analyticsLocations: H } = (0, o.default)(),
          z = (0, a.useStateFromStores)([M.default], () =>
            M.default.getCurrentUser()
          ),
          X = (0, a.useStateFromStores)([G.default], () =>
            G.default.getSelfEmbeddedActivities()
          ),
          B = (0, a.useStateFromStoresArray)([N.default], () =>
            N.default
              .getActivities()
              .filter(
                e =>
                  null != e.application_id &&
                  !(null == X ? void 0 : X.has(e.application_id))
              )
          ),
          Q = (0, a.useStateFromStoresArray)(
            [m.default],
            () =>
              null != t
                ? m.default.getActivities(
                    t.id,
                    null == e ? void 0 : e.getGuildId()
                  )
                : [],
            [t, e]
          ),
          W = (0, a.useStateFromStoresArray)(
            [G.default],
            () => {
              let n =
                (null == e ? void 0 : e.id) != null
                  ? G.default.getEmbeddedActivitiesForChannel(e.id)
                  : G.NO_ACTIVITIES;
              return null != t
                ? n.filter(e => {
                    let { userIds: n } = e;
                    return n.has(t.id);
                  })
                : n;
            },
            [t, e]
          ),
          q = (0, D.default)(),
          Z = (0, a.useStateFromStores)(
            [E.default],
            () =>
              null == e ||
              e.isPrivate() ||
              E.default.can(k.Permissions.SEND_MESSAGES, e),
            [e]
          ),
          $ = (0, a.useStateFromStoresArray)(
            [O.default],
            () => [
              ...Q.map(
                e =>
                  null != e.application_id &&
                  O.default.getState(
                    e.application_id,
                    k.ActivityActionTypes.JOIN
                  ) === k.ActivityActionStates.LOADING
              ),
              ...W.map(
                e =>
                  O.default.getState(
                    e.applicationId,
                    k.ActivityActionTypes.JOIN
                  ) === k.ActivityActionStates.LOADING
              ),
            ],
            [Q, W]
          ),
          ee = (0, r.default)([
            ...Q.filter(
              e => (null == e ? void 0 : e.application_id) != null
            ).map(e => e.application_id),
            ...W.map(e => e.applicationId),
          ]),
          et = null == e ? void 0 : e.id,
          en = (0, a.useStateFromStoresArray)(
            [
              v.default,
              S.default,
              y.default,
              h.default,
              C.default,
              g.default,
              E.default,
            ],
            () => [
              ...Q.map(e =>
                (0, V.default)({
                  user: null != t ? t : z,
                  activity: e,
                  application: ee.find(
                    t => (null == t ? void 0 : t.id) === e.application_id
                  ),
                  channelId: et,
                  currentUser: z,
                  isEmbedded: (0, U.default)(e),
                  ChannelStore: v.default,
                  GuildStore: S.default,
                  GuildMemberCountStore: y.default,
                  RelationshipStore: h.default,
                  SelectedChannelStore: C.default,
                  VoiceStateStore: g.default,
                  PermissionStore: E.default,
                })
              ),
              ...W.map(e => {
                let n = null != t ? t : z;
                return (
                  null != n &&
                  (0, j.default)({
                    userId: n.id,
                    application: ee.find(
                      t => (null == t ? void 0 : t.id) === e.applicationId
                    ),
                    channelId: et,
                    currentUser: z,
                    isActivitiesEnabledForCurrentPlatform: (0,
                    L.getIsActivitiesEnabledForCurrentPlatform)(),
                    ChannelStore: v.default,
                    GuildStore: S.default,
                    VoiceStateStore: g.default,
                    PermissionStore: E.default,
                  }) === j.EmbeddedActivityJoinability.CAN_JOIN
                );
              }),
            ],
            [Q, ee, et, z, W, t]
          ),
          ei = (0, a.useStateFromStoresArray)(
            [c.default, T.default],
            () =>
              Q.map(e =>
                e.type === k.ActivityTypes.LISTENING && null != t
                  ? (0, p.default)(c.default, T.default, t, e)
                  : void 0
              ),
            [t, Q]
          ),
          ea = (0, s.useAnalyticsContext)();
        if (!Z) return null;
        let el = (n, i) => {
            null != e
              ? d.default.sendActivityInvite({
                  type: n,
                  channelId: e.id,
                  activity: i,
                  location: k.AnalyticsLocations.CONTEXT_MENU,
                })
              : null != t &&
                d.default.sendActivityInviteUser({
                  type: n,
                  userId: t.id,
                  activity: i,
                  location: k.AnalyticsLocations.CONTEXT_MENU,
                });
          },
          ed = (a, d) => {
            let u = v.default.getChannel(a),
              s = null == u ? void 0 : S.default.getGuild(u.guild_id);
            if (null != u && null != s) {
              if (null != t)
                return F.sendEmbeddedActivityInviteUser({
                  channelId: u.id,
                  applicationId: d,
                  userId: t.id,
                  location: k.InstantInviteSources.CONTEXT_MENU,
                });
              if (null != e && e.type === k.ChannelTypes.GUILD_VOICE)
                return (0, l.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .el("310688")
                      .then(n.bind(n, "310688"));
                    return n =>
                      (0, i.jsx)(t, {
                        ...n,
                        guild: s,
                        channel: u,
                        applicationId: d,
                        analyticsLocation:
                          e.type === k.ChannelTypes.GUILD_VOICE
                            ? k.AnalyticsPages.GUILD_CHANNEL
                            : k.AnalyticsPages.DM_CHANNEL,
                        source: k.InstantInviteSources.ACTIVITY_INVITE,
                      });
                  },
                  { modalKey: "use-activity-items-embedded-invite-modal" }
                );
              if ((null == e ? void 0 : e.id) != null)
                return F.sendEmbeddedActivityInvite({
                  activityChannelId: u.id,
                  invitedChannelId: e.id,
                  applicationId: d,
                  location: k.InstantInviteSources.CONTEXT_MENU,
                });
            }
          },
          eu = async e => {
            var n;
            await u.default.join({
              userId: t.id,
              sessionId: e.session_id,
              applicationId: e.application_id,
              channelId: C.default.getVoiceChannelId(),
              messageId: null,
              intent: J.ActivityIntent.PLAY,
              embedded: (0, x.default)(e, k.ActivityFlags.EMBEDDED),
            }),
              (0, Y.default)({
                type: k.AnalyticsGameOpenTypes.JOIN,
                userId: t.id,
                applicationId: e.application_id,
                partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                locationObject: ea.location,
                analyticsLocations: H,
              });
          },
          es = async t => {
            await (0, R.default)({
              applicationId: t.applicationId,
              currentEmbeddedApplication: q,
              activityChannelId: null == e ? void 0 : e.id,
              locationObject: ea.location,
              embeddedActivitiesManager: P.default,
              analyticsLocations: H,
            });
          },
          eo = [];
        return (
          null == X ||
            X.forEach(n => {
              let a =
                  (null == t ? void 0 : t.id) != null &&
                  n.userIds.has(null == t ? void 0 : t.id),
                d = E.default.can(k.Permissions.CREATE_INSTANT_INVITE, e),
                u = ee.find(
                  e => (null == e ? void 0 : e.id) === n.applicationId
                );
              null != n.instanceId &&
                !a &&
                d &&
                null != u &&
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label:
                        K.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: u.name,
                      action: () => {
                        ed(n.channelId, n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId)
                  )
                );
            }),
          B.forEach((e, t) => {
            e.type === k.ActivityTypes.PLAYING &&
            (0, x.default)(e, k.ActivityFlags.JOIN)
              ? eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join",
                      label:
                        K.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: e.name,
                      action: () => el(k.ActivityActionTypes.JOIN, e),
                    },
                    "self".concat(t)
                  )
                )
              : e.type === k.ActivityTypes.LISTENING &&
                (0, x.default)(e, k.ActivityFlags.SYNC) &&
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        K.default.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: e.name,
                      action: () => el(k.ActivityActionTypes.LISTEN, e),
                    },
                    "self".concat(t)
                  )
                );
          }),
          eo.length > 0 && eo.push((0, i.jsx)(l.MenuSeparator, {})),
          Q.forEach((n, a) => {
            if (
              n.type === k.ActivityTypes.PLAYING &&
              (0, x.default)(n, k.ActivityFlags.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if (en[a]) {
                let e = $[a];
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "join",
                      label: e
                        ? K.default.Messages.USER_ACTIVITY_JOINING
                        : K.default.Messages.JOIN,
                      disabled: e,
                      hint: e
                        ? (0, i.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => eu(n),
                    },
                    a
                  )
                );
              } else
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "ask-to-join",
                      label:
                        K.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: n.name,
                      action: () => el(k.ActivityActionTypes.JOIN_REQUEST, n),
                    },
                    a
                  )
                );
            } else if (
              n.type === k.ActivityTypes.LISTENING &&
              (0, x.default)(n, k.ActivityFlags.SYNC) &&
              null != ei[a]
            ) {
              let d = ei[a],
                {
                  notPlayable: u,
                  playingSameTrack: s,
                  isCurrentUser: o,
                  syncingWithUser: r,
                  syncingWithParty: c,
                } = d,
                p = o || u || s,
                T = o || r || c;
              eo.push(
                (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () =>
                      (0, _.default)(
                        d,
                        w.SpotifyActionTypes.USER_ACTIVITY_PLAY
                      ),
                    label: (0, f.default)(
                      d,
                      w.SpotifyActionTypes.USER_ACTIVITY_PLAY
                    ),
                    subtext: p
                      ? (0, I.default)(
                          d,
                          w.SpotifyActionTypes.USER_ACTIVITY_PLAY,
                          null != e
                            ? b.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: p,
                  },
                  "spotify-play-".concat(n.session_id)
                ),
                (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-sync-".concat(n.session_id),
                    action: () =>
                      (0, A.default)(
                        d,
                        w.SpotifyActionTypes.USER_ACTIVITY_SYNC
                      ),
                    label: K.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: T
                      ? (0, I.default)(
                          d,
                          w.SpotifyActionTypes.USER_ACTIVITY_SYNC,
                          null != e
                            ? b.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: T,
                  },
                  "spotify-sync-".concat(n.session_id)
                )
              );
            }
          }),
          W.forEach((e, t) => {
            var n;
            let a = e.userIds.has(
                null !== (n = null == z ? void 0 : z.id) && void 0 !== n
                  ? n
                  : k.EMPTY_STRING_SNOWFLAKE_ID
              ),
              d = t + Q.length,
              u = $[d] || a,
              s = K.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            a
              ? (s = K.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : $[d] && (s = K.default.Messages.USER_ACTIVITY_JOINING);
            let o = ee.find(
              t => (null == t ? void 0 : t.id) === e.applicationId
            );
            en[d] &&
              null != o &&
              eo.push(
                (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(e.applicationId),
                    label: s,
                    disabled: u,
                    hint: $[d]
                      ? (0, i.jsx)(l.Spinner, {
                          type: l.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : null,
                    subtext: o.name,
                    action: () => es(e),
                  },
                  "embedded-activity-".concat(e.applicationId)
                )
              );
          }),
          eo
        );
      }
    },
    44141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        l = n("77078"),
        d = n("267363"),
        u = n("680986"),
        s = n("689275"),
        o = n("755624"),
        r = n("233069"),
        c = n("245997"),
        f = n("660478"),
        I = n("49111"),
        p = n("782340");
      function A(e) {
        let t = (function (e) {
          let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, a.useStateFromStores)(
              [f.default, c.default, s.default, o.default],
              () => {
                if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                if (e.type !== I.ChannelTypes.GUILD_CATEGORY)
                  return f.default.hasUnread(e.id);
                {
                  let t = c.default.getCategories(e.getGuildId());
                  if (null == t[e.id]) return !1;
                  let n = t[e.id].some(e => {
                    let { channel: t } = e;
                    return (
                      (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                    );
                  });
                  if (n) return !0;
                  let i = new Set(t[e.id].map(e => e.channel.id)),
                    a = s.default.getThreadsForGuild(e.guild_id);
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
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: p.default.Messages.MARK_AS_READ,
          action: function () {
            (0, d.ackChannel)(e);
          },
          disabled: !t,
        });
      }
    },
    972701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAddToFavoritesItem: function () {
            return _;
          },
          useRemoveFromFavoritesItem: function () {
            return T;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("917351"),
        l = n.n(a),
        d = n("446674"),
        u = n("77078"),
        s = n("923959"),
        o = n("379881"),
        r = n("200008"),
        c = n("986373"),
        f = n("498139"),
        I = n("49111"),
        p = n("782340");
      function A(e, t) {
        return e.type === I.ChannelTypes.GROUP_DM
          ? t
            ? p.default.Messages.UNFAVORITE_GDM
            : p.default.Messages.FAVORITE_GDM
          : e.type === I.ChannelTypes.DM
            ? t
              ? p.default.Messages.UNFAVORITE_DM
              : p.default.Messages.FAVORITE_DM
            : t
              ? p.default.Messages.UNFAVORITE_CHANNEL
              : p.default.Messages.FAVORITE_CHANNEL;
      }
      function _(e) {
        let t = (0, d.useStateFromStores)([s.default], () =>
            s.default.getChannels(I.FAVORITES)
          )[I.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, f.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: a } = (0, c.useFavoriteAdded)(),
          o = (0, c.useCanFavoriteChannel)(e);
        if (!o) return null;
        let [[p], _] = l.partition(t, e => "null" === e.channel.id);
        function T(t) {
          a(), (0, r.addFavoriteChannel)(e.id, t);
        }
        return 0 === _.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: A(e, !1),
              action: () => T(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: A(e, !1),
              action: () => T(null),
              children: [
                n &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(p.channel.id),
                        label: p.channel.name,
                        action: () =>
                          T("null" === p.channel.id ? null : p.channel.id),
                      },
                      p.channel.id
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: _.map(e =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => T(e.channel.id),
                      },
                      e.channel.id
                    )
                  ),
                }),
              ],
            });
      }
      function T(e) {
        let t = (0, d.useStateFromStores)([o.default], () =>
          o.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: A(e, !0),
              color: "danger",
              action: () =>
                e.type === I.ChannelTypes.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: t } = await n
                        .el("338052")
                        .then(n.bind(n, "338052"));
                      return n =>
                        (0, i.jsx)(t, {
                          ...n,
                          onConfirm: () => {
                            n.onClose(), (0, r.removeFavoriteChannel)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, r.removeFavoriteChannel)(e.id),
            });
      }
    },
    390008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        l = n("77078"),
        d = n("162771"),
        u = n("498139"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let t = (0, a.useStateFromStores)([d.default], () =>
            d.default.getGuildId()
          ),
          r = e.type === s.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.useFavoritesServerExperiment)(
            "useChannelFavoriteSetNickname"
          );
        return __OVERLAY__ || t !== s.FAVORITES
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && r
                  ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                  : o.default.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("353228")
                    .then(n.bind(n, "353228"));
                  return n =>
                    (0, i.jsx)(t, {
                      ...n,
                      channelId: e.id,
                      heading:
                        c && r
                          ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                          : o.default.Messages.CHANGE_NICKNAME,
                      formTitle:
                        c && r
                          ? o.default.Messages.CATEGORY_NAME
                          : o.default.Messages.NICKNAME,
                      allowReset: !(c && r),
                    });
                });
              },
            });
      }
    },
    41205: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        l = n("77078"),
        d = n("393414"),
        u = n("162771"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let t = (0, a.useStateFromStores)([u.default], () =>
          u.default.getGuildId()
        );
        return __OVERLAY__ || t !== s.FAVORITES
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "go-to-original-guild",
              label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
              action: function () {
                (0, d.transitionToGuild)(e.guild_id, e.id);
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
        l = n("200008"),
        d = n("986373"),
        u = n("498139"),
        s = n("782340");
      function o(e) {
        let t = (0, d.useFavoritesGuildSelected)(),
          n = (0, d.useFavorite)(e.id),
          o = (0, d.useFavoritesCategories)(),
          { isFavoritesPerk: r } = (0, u.useFavoritesServerExperiment)(
            "useChannelMoveToCategory"
          );
        if (__OVERLAY__ || !t || null == n || !r) return null;
        let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId)),
          [f, I] = (function (e) {
            let t = [],
              n = null;
            for (let i of e) null == i.id ? (n = i) : t.push(i);
            return [n, t];
          })(c);
        function p(e) {
          null != n && (0, l.updateFavoriteChannelParent)(n.id, e);
        }
        return null == f && 0 === I.length
          ? null
          : (0, i.jsxs)(a.MenuItem, {
              id: "move-to-category",
              label: s.default.Messages.MOVE_TO,
              children: [
                null != f &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(a.MenuItem, {
                      id: "favorite-uncategorized",
                      label: f.name,
                      action: () => p(f.id),
                    }),
                  }),
                I.length > 0 &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: I.map(e => {
                      let { id: t, name: n } = e;
                      return (0, i.jsx)(
                        a.MenuItem,
                        {
                          id: "favorite-".concat(t),
                          label: n,
                          action: () => p(t),
                        },
                        t
                      );
                    }),
                  }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=f6b40da68c1161ce6786.js.map
