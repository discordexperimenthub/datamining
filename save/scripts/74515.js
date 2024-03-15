(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74515"],
  {
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("901582");
      function l(e, t) {
        return function (n) {
          return (0, a.jsx)(i.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, a.jsx)(e, { ...n }),
          });
        };
      }
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
          let { AnalyticsLocationProvider: l } = (0, i.default)(t);
          return (0, a.jsx)(l, { children: (0, a.jsx)(e, { ...n }) });
        };
      }
    },
    846883: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("260365"),
        d = n("823411"),
        s = n("997289"),
        o = n("685665"),
        r = n("442939"),
        c = n("662285"),
        f = n("782911"),
        I = n("629414"),
        _ = n("53887"),
        p = n("486150"),
        A = n("555759"),
        E = n("271938"),
        T = n("42203"),
        v = n("525065"),
        N = n("305961"),
        S = n("957255"),
        y = n("824563"),
        C = n("27618"),
        h = n("18494"),
        m = n("101125"),
        M = n("697218"),
        g = n("800762"),
        O = n("953998"),
        b = n("387111"),
        L = n("550766"),
        F = n("191225"),
        G = n("706508"),
        R = n("126939"),
        x = n("612696"),
        j = n("501260"),
        V = n("871388"),
        U = n("152311"),
        P = n("407908"),
        Y = n("698372"),
        D = n("141962"),
        H = n("954016"),
        J = n("49111"),
        w = n("450484"),
        k = n("782340");
      function X(e, t) {
        let { analyticsLocations: X } = (0, o.default)(),
          z = (0, i.useStateFromStores)([M.default], () =>
            M.default.getCurrentUser()
          ),
          K = (0, i.useStateFromStores)([F.default], () =>
            F.default.getSelfEmbeddedActivities()
          ),
          B = (0, i.useStateFromStoresArray)([m.default], () =>
            m.default
              .getActivities()
              .filter(
                e =>
                  null != e.application_id &&
                  !(null == K ? void 0 : K.has(e.application_id))
              )
          ),
          W = (0, i.useStateFromStoresArray)(
            [y.default],
            () =>
              null != t
                ? y.default.getActivities(
                    t.id,
                    null == e ? void 0 : e.getGuildId()
                  )
                : [],
            [t, e]
          ),
          Q = (0, i.useStateFromStoresArray)(
            [F.default],
            () => {
              let n =
                (null == e ? void 0 : e.id) != null
                  ? F.default.getEmbeddedActivitiesForChannel(e.id)
                  : F.NO_ACTIVITIES;
              return null != t
                ? n.filter(e => {
                    let { userIds: n } = e;
                    return n.has(t.id);
                  })
                : n;
            },
            [t, e]
          ),
          q = (0, Y.default)(),
          Z = (0, i.useStateFromStores)(
            [S.default],
            () =>
              null == e ||
              e.isPrivate() ||
              S.default.can(J.Permissions.SEND_MESSAGES, e),
            [e]
          ),
          $ = (0, i.useStateFromStoresArray)(
            [O.default],
            () => [
              ...W.map(
                e =>
                  null != e.application_id &&
                  O.default.getState(
                    e.application_id,
                    J.ActivityActionTypes.JOIN
                  ) === J.ActivityActionStates.LOADING
              ),
              ...Q.map(
                e =>
                  O.default.getState(
                    e.applicationId,
                    J.ActivityActionTypes.JOIN
                  ) === J.ActivityActionStates.LOADING
              ),
            ],
            [W, Q]
          ),
          ee = (0, r.default)([
            ...W.filter(
              e => (null == e ? void 0 : e.application_id) != null
            ).map(e => e.application_id),
            ...Q.map(e => e.applicationId),
          ]),
          et = null == e ? void 0 : e.id,
          en = (0, i.useStateFromStoresArray)(
            [
              T.default,
              N.default,
              v.default,
              C.default,
              h.default,
              g.default,
              S.default,
            ],
            () => [
              ...W.map(e =>
                (0, x.default)({
                  user: null != t ? t : z,
                  activity: e,
                  application: ee.find(
                    t => (null == t ? void 0 : t.id) === e.application_id
                  ),
                  channelId: et,
                  currentUser: z,
                  isEmbedded: (0, U.default)(e),
                  ChannelStore: T.default,
                  GuildStore: N.default,
                  GuildMemberCountStore: v.default,
                  RelationshipStore: C.default,
                  SelectedChannelStore: h.default,
                  VoiceStateStore: g.default,
                  PermissionStore: S.default,
                })
              ),
              ...Q.map(e => {
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
                    R.getIsActivitiesEnabledForCurrentPlatform)(),
                    ChannelStore: T.default,
                    GuildStore: N.default,
                    VoiceStateStore: g.default,
                    PermissionStore: S.default,
                  }) === j.EmbeddedActivityJoinability.CAN_JOIN
                );
              }),
            ],
            [W, ee, et, z, Q, t]
          ),
          ea = (0, i.useStateFromStoresArray)(
            [c.default, E.default],
            () =>
              W.map(e =>
                e.type === J.ActivityTypes.LISTENING && null != t
                  ? (0, _.default)(c.default, E.default, t, e)
                  : void 0
              ),
            [t, W]
          ),
          ei = (0, s.useAnalyticsContext)();
        if (!Z) return null;
        let el = (n, a) => {
            null != e
              ? u.default.sendActivityInvite({
                  type: n,
                  channelId: e.id,
                  activity: a,
                  location: J.AnalyticsLocations.CONTEXT_MENU,
                })
              : null != t &&
                u.default.sendActivityInviteUser({
                  type: n,
                  userId: t.id,
                  activity: a,
                  location: J.AnalyticsLocations.CONTEXT_MENU,
                });
          },
          eu = (i, u) => {
            let d = T.default.getChannel(i),
              s = null == d ? void 0 : N.default.getGuild(d.guild_id);
            if (null != d && null != s) {
              if (null != t)
                return L.sendEmbeddedActivityInviteUser({
                  channelId: d.id,
                  applicationId: u,
                  userId: t.id,
                  location: J.InstantInviteSources.CONTEXT_MENU,
                });
              if (null != e && e.type === J.ChannelTypes.GUILD_VOICE)
                return (0, l.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .el("310688")
                      .then(n.bind(n, "310688"));
                    return n =>
                      (0, a.jsx)(t, {
                        ...n,
                        guild: s,
                        channel: d,
                        applicationId: u,
                        analyticsLocation:
                          e.type === J.ChannelTypes.GUILD_VOICE
                            ? J.AnalyticsPages.GUILD_CHANNEL
                            : J.AnalyticsPages.DM_CHANNEL,
                        source: J.InstantInviteSources.ACTIVITY_INVITE,
                      });
                  },
                  { modalKey: "use-activity-items-embedded-invite-modal" }
                );
              if ((null == e ? void 0 : e.id) != null)
                return L.sendEmbeddedActivityInvite({
                  activityChannelId: d.id,
                  invitedChannelId: e.id,
                  applicationId: u,
                  location: J.InstantInviteSources.CONTEXT_MENU,
                });
            }
          },
          ed = async e => {
            var n;
            await d.default.join({
              userId: t.id,
              sessionId: e.session_id,
              applicationId: e.application_id,
              channelId: h.default.getVoiceChannelId(),
              messageId: null,
              intent: H.ActivityIntent.PLAY,
              embedded: (0, V.default)(e, J.ActivityFlags.EMBEDDED),
            }),
              (0, P.default)({
                type: J.AnalyticsGameOpenTypes.JOIN,
                userId: t.id,
                applicationId: e.application_id,
                partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                locationObject: ei.location,
                analyticsLocations: X,
              });
          },
          es = async t => {
            await (0, G.default)({
              applicationId: t.applicationId,
              currentEmbeddedApplication: q,
              activityChannelId: null == e ? void 0 : e.id,
              locationObject: ei.location,
              embeddedActivitiesManager: D.default,
              analyticsLocations: X,
            });
          },
          eo = [];
        return (
          null == K ||
            K.forEach(n => {
              let i =
                  (null == t ? void 0 : t.id) != null &&
                  n.userIds.has(null == t ? void 0 : t.id),
                u = S.default.can(J.Permissions.CREATE_INSTANT_INVITE, e),
                d = ee.find(
                  e => (null == e ? void 0 : e.id) === n.applicationId
                );
              null != n.instanceId &&
                !i &&
                u &&
                null != d &&
                eo.push(
                  (0, a.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label:
                        k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: d.name,
                      action: () => {
                        eu(n.channelId, n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId)
                  )
                );
            }),
          B.forEach((e, t) => {
            e.type === J.ActivityTypes.PLAYING &&
            (0, V.default)(e, J.ActivityFlags.JOIN)
              ? eo.push(
                  (0, a.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join",
                      label:
                        k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: e.name,
                      action: () => el(J.ActivityActionTypes.JOIN, e),
                    },
                    "self".concat(t)
                  )
                )
              : e.type === J.ActivityTypes.LISTENING &&
                (0, V.default)(e, J.ActivityFlags.SYNC) &&
                eo.push(
                  (0, a.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        k.default.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: e.name,
                      action: () => el(J.ActivityActionTypes.LISTEN, e),
                    },
                    "self".concat(t)
                  )
                );
          }),
          eo.length > 0 && eo.push((0, a.jsx)(l.MenuSeparator, {})),
          W.forEach((n, i) => {
            if (
              n.type === J.ActivityTypes.PLAYING &&
              (0, V.default)(n, J.ActivityFlags.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if (en[i]) {
                let e = $[i];
                eo.push(
                  (0, a.jsx)(
                    l.MenuItem,
                    {
                      id: "join",
                      label: e
                        ? k.default.Messages.USER_ACTIVITY_JOINING
                        : k.default.Messages.JOIN,
                      disabled: e,
                      hint: e
                        ? (0, a.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => ed(n),
                    },
                    i
                  )
                );
              } else
                eo.push(
                  (0, a.jsx)(
                    l.MenuItem,
                    {
                      id: "ask-to-join",
                      label:
                        k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: n.name,
                      action: () => el(J.ActivityActionTypes.JOIN_REQUEST, n),
                    },
                    i
                  )
                );
            } else if (
              n.type === J.ActivityTypes.LISTENING &&
              (0, V.default)(n, J.ActivityFlags.SYNC) &&
              null != ea[i]
            ) {
              let u = ea[i],
                {
                  notPlayable: d,
                  playingSameTrack: s,
                  isCurrentUser: o,
                  syncingWithUser: r,
                  syncingWithParty: c,
                } = u,
                _ = o || d || s,
                E = o || r || c;
              eo.push(
                (0, a.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () =>
                      (0, A.default)(
                        u,
                        w.SpotifyActionTypes.USER_ACTIVITY_PLAY
                      ),
                    label: (0, f.default)(
                      u,
                      w.SpotifyActionTypes.USER_ACTIVITY_PLAY
                    ),
                    subtext: _
                      ? (0, I.default)(
                          u,
                          w.SpotifyActionTypes.USER_ACTIVITY_PLAY,
                          null != e
                            ? b.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: _,
                  },
                  "spotify-play-".concat(n.session_id)
                ),
                (0, a.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-sync-".concat(n.session_id),
                    action: () =>
                      (0, p.default)(
                        u,
                        w.SpotifyActionTypes.USER_ACTIVITY_SYNC
                      ),
                    label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: E
                      ? (0, I.default)(
                          u,
                          w.SpotifyActionTypes.USER_ACTIVITY_SYNC,
                          null != e
                            ? b.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: E,
                  },
                  "spotify-sync-".concat(n.session_id)
                )
              );
            }
          }),
          Q.forEach((e, t) => {
            var n;
            let i = e.userIds.has(
                null !== (n = null == z ? void 0 : z.id) && void 0 !== n
                  ? n
                  : J.EMPTY_STRING_SNOWFLAKE_ID
              ),
              u = t + W.length,
              d = $[u] || i,
              s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            i
              ? (s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : $[u] && (s = k.default.Messages.USER_ACTIVITY_JOINING);
            let o = ee.find(
              t => (null == t ? void 0 : t.id) === e.applicationId
            );
            en[u] &&
              null != o &&
              eo.push(
                (0, a.jsx)(
                  l.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(e.applicationId),
                    label: s,
                    disabled: d,
                    hint: $[u]
                      ? (0, a.jsx)(l.Spinner, {
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
    715243: function (e, t, n) {
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
        u = n("957255"),
        d = n("49111"),
        s = n("782340");
      function o(e, t) {
        let o = (0, i.useStateFromStores)(
          [u.default],
          () => u.default.can(d.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !o
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "clone-channel",
              label: s.default.Messages.CLONE_CHANNEL,
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: i } = await n
                    .el("581354")
                    .then(n.bind(n, "581354"));
                  return n =>
                    (0, a.jsx)(i, {
                      ...n,
                      channelType: e.type,
                      guildId: t.id,
                      categoryId: e.parent_id,
                      cloneChannelId: e.id,
                    });
                }),
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
        u = n("957255"),
        d = n("49111"),
        s = n("782340");
      function o(e, t) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          r = (0, i.useStateFromStores)(
            [u.default],
            () => u.default.can(d.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !r) return null;
        let c = () => {
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
          case d.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: s.default.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case d.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: s.default.Messages.CREATE_VOICE_CHANNEL,
              action: c,
            });
          default:
            return null;
        }
      }
    },
    47006: function (e, t, n) {
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
        u = n("18054"),
        d = n("957255"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: r,
          canAccessChannel: c,
        } = (0, i.useStateFromStoresObject)(
          [d.default],
          () => ({
            canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: d.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || r)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === s.ChannelTypes.GUILD_CATEGORY
                  ? o.default.Messages.EDIT_CATEGORY
                  : o.default.Messages.EDIT_CHANNEL,
              action: () => u.default.open(e.id),
            })
          : null;
      }
    },
    878526: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("58622"),
        i = n("49111");
      function l(e, t, n) {
        return (0, a.default)({
          guild: t,
          channel: e,
          stageInstance: n,
          source: i.InstantInviteSources.CONTEXT_MENU,
        });
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
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("267363"),
        d = n("680986"),
        s = n("689275"),
        o = n("755624"),
        r = n("233069"),
        c = n("245997"),
        f = n("660478"),
        I = n("49111"),
        _ = n("782340");
      function p(e) {
        let t = (function (e) {
          let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, i.useStateFromStores)(
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
                  let a = new Set(t[e.id].map(e => e.channel.id)),
                    i = s.default.getThreadsForGuild(e.guild_id);
                  for (let e in i)
                    if (a.has(e)) {
                      for (let t in i[e])
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
        return (0, a.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: _.default.Messages.MARK_AS_READ,
          action: function () {
            (0, u.ackChannel)(e);
          },
          disabled: !t,
        });
      }
    },
    339876: function (e, t, n) {
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
        u = n("498139"),
        d = n("629220"),
        s = n("512395"),
        o = n("282109"),
        r = n("49111"),
        c = n("782340");
      function f(e) {
        let { isFavoritesPerk: t } = (0, u.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, s.useOptInEnabledForGuild)(e.guild_id),
          f = (0, i.useStateFromStores)([o.default], () =>
            o.default.isChannelOptedIn(e.guild_id, e.id)
          ),
          I = (0, i.useStateFromStores)(
            [o.default],
            () =>
              null != e.parent_id &&
              o.default.isChannelOptedIn(e.guild_id, e.parent_id)
          ),
          _ = (0, i.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.guild_id, e.id)
          ),
          p = () => {
            (0, d.setOptInChannel)(e.guild_id, e.id, !f, {
              section: r.AnalyticsSections.CONTEXT_MENU,
            });
          },
          A = () => {
            null != e.parent_id &&
              (0, d.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                section: r.AnalyticsSections.CONTEXT_MENU,
              });
          };
        if (!n || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: f
              ? c.default.Messages.CHANNEL_OPT_OUT
              : c.default.Messages.CHANNEL_OPT_IN,
            action: () => p(),
          });
        let E = _
            ? c.default.Messages.REMOVE_FAVORITE
            : c.default.Messages.ADD_FAVORITE,
          T = _
            ? c.default.Messages.UNPIN_CHANNEL
            : c.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? T : E,
              action: () => {
                (0, d.setIsFavorite)(e.guild_id, e.id, !_, {
                  section: r.AnalyticsSections.CONTEXT_MENU,
                });
              },
            }),
            I
              ? (0, a.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => A(),
                })
              : (0, a.jsx)(l.MenuItem, {
                  id: "opt-into-channel",
                  label: f
                    ? c.default.Messages.CHANNEL_OPT_OUT
                    : c.default.Messages.CHANNEL_OPT_IN,
                  action: () => p(),
                }),
          ],
        });
      }
    },
    972701: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAddToFavoritesItem: function () {
            return A;
          },
          useRemoveFromFavoritesItem: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("917351"),
        l = n.n(i),
        u = n("446674"),
        d = n("77078"),
        s = n("923959"),
        o = n("379881"),
        r = n("200008"),
        c = n("986373"),
        f = n("498139"),
        I = n("49111"),
        _ = n("782340");
      function p(e, t) {
        return e.type === I.ChannelTypes.GROUP_DM
          ? t
            ? _.default.Messages.UNFAVORITE_GDM
            : _.default.Messages.FAVORITE_GDM
          : e.type === I.ChannelTypes.DM
            ? t
              ? _.default.Messages.UNFAVORITE_DM
              : _.default.Messages.FAVORITE_DM
            : t
              ? _.default.Messages.UNFAVORITE_CHANNEL
              : _.default.Messages.FAVORITE_CHANNEL;
      }
      function A(e) {
        let t = (0, u.useStateFromStores)([s.default], () =>
            s.default.getChannels(I.FAVORITES)
          )[I.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, f.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: i } = (0, c.useFavoriteAdded)(),
          o = (0, c.useCanFavoriteChannel)(e);
        if (!o) return null;
        let [[_], A] = l.partition(t, e => "null" === e.channel.id);
        function E(t) {
          i(), (0, r.addFavoriteChannel)(e.id, t);
        }
        return 0 === A.length
          ? (0, a.jsx)(d.MenuItem, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => E(null),
            })
          : (0, a.jsxs)(d.MenuItem, {
              id: "favorite-channel",
              label: p(e, !1),
              action: () => E(null),
              children: [
                n &&
                  (0, a.jsx)(d.MenuGroup, {
                    children: (0, a.jsx)(
                      d.MenuItem,
                      {
                        id: "favorite-".concat(_.channel.id),
                        label: _.channel.name,
                        action: () =>
                          E("null" === _.channel.id ? null : _.channel.id),
                      },
                      _.channel.id
                    ),
                  }),
                (0, a.jsx)(d.MenuGroup, {
                  children: A.map(e =>
                    (0, a.jsx)(
                      d.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => E(e.channel.id),
                      },
                      e.channel.id
                    )
                  ),
                }),
              ],
            });
      }
      function E(e) {
        let t = (0, u.useStateFromStores)([o.default], () =>
          o.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, a.jsx)(d.MenuItem, {
              id: "favorite-channel",
              label: p(e, !0),
              color: "danger",
              action: () =>
                e.type === I.ChannelTypes.GUILD_CATEGORY
                  ? (0, d.openModalLazy)(async () => {
                      let { default: t } = await n
                        .el("338052")
                        .then(n.bind(n, "338052"));
                      return n =>
                        (0, a.jsx)(t, {
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
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("162771"),
        d = n("498139"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let t = (0, i.useStateFromStores)([u.default], () =>
            u.default.getGuildId()
          ),
          r = e.type === s.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, d.useFavoritesServerExperiment)(
            "useChannelFavoriteSetNickname"
          );
        return __OVERLAY__ || t !== s.FAVORITES
          ? null
          : (0, a.jsx)(l.MenuItem, {
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
                    (0, a.jsx)(t, {
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
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("393414"),
        d = n("162771"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let t = (0, i.useStateFromStores)([d.default], () =>
          d.default.getGuildId()
        );
        return __OVERLAY__ || t !== s.FAVORITES
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "go-to-original-guild",
              label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
              action: function () {
                (0, u.transitionToGuild)(e.guild_id, e.id);
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
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("200008"),
        u = n("986373"),
        d = n("498139"),
        s = n("782340");
      function o(e) {
        let t = (0, u.useFavoritesGuildSelected)(),
          n = (0, u.useFavorite)(e.id),
          o = (0, u.useFavoritesCategories)(),
          { isFavoritesPerk: r } = (0, d.useFavoritesServerExperiment)(
            "useChannelMoveToCategory"
          );
        if (__OVERLAY__ || !t || null == n || !r) return null;
        let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId)),
          [f, I] = (function (e) {
            let t = [],
              n = null;
            for (let a of e) null == a.id ? (n = a) : t.push(a);
            return [n, t];
          })(c);
        function _(e) {
          null != n && (0, l.updateFavoriteChannelParent)(n.id, e);
        }
        return null == f && 0 === I.length
          ? null
          : (0, a.jsxs)(i.MenuItem, {
              id: "move-to-category",
              label: s.default.Messages.MOVE_TO,
              children: [
                null != f &&
                  (0, a.jsx)(i.MenuGroup, {
                    children: (0, a.jsx)(i.MenuItem, {
                      id: "favorite-uncategorized",
                      label: f.name,
                      action: () => _(f.id),
                    }),
                  }),
                I.length > 0 &&
                  (0, a.jsx)(i.MenuGroup, {
                    children: I.map(e => {
                      let { id: t, name: n } = e;
                      return (0, a.jsx)(
                        i.MenuItem,
                        {
                          id: "favorite-".concat(t),
                          label: n,
                          action: () => _(t),
                        },
                        t
                      );
                    }),
                  }),
              ],
            });
      }
    },
    58622: function (e, t, n) {
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
        u = n("242757"),
        d = n("923959"),
        s = n("957255"),
        o = n("76539"),
        r = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: l } = e,
          o = (0, i.useStateFromStores)([d.default], () =>
            d.default.getDefaultChannel(
              n.id,
              !0,
              r.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, i.useStateFromStores)([s.default], () =>
            (0, u.canViewInviteModal)(s.default, n, a, l)
          ),
          f = I(t, n, c && null != a ? a : o),
          p = _(t);
        return null == a && t === r.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != o
            ? f
            : p;
      }
      let I = (e, t, i) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, a.jsx)(l, { ...n, guild: t, channel: i, source: e });
              }),
          }),
        _ = e =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("973132")
                  .then(n.bind(n, "973132"));
                return t => (0, a.jsx)(e, { ...t });
              }),
          });
    },
  },
]);
//# sourceMappingURL=cb23566f2555a0a2d9a0.js.map
