(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99636"],
  {
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("901582");
      function i(e, t) {
        return function (n) {
          return (0, a.jsx)(l.default, {
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
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("685665");
      function i(e, t) {
        return function (n) {
          let { analyticsLocations: i } = (0, l.default)(t);
          return (0, a.jsx)(l.AnalyticsLocationProvider, {
            value: i,
            children: (0, a.jsx)(e, { ...n }),
          });
        };
      }
    },
    846883: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return K;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        d = n("260365"),
        u = n("823411"),
        s = n("997289"),
        o = n("685665"),
        r = n("442939"),
        c = n("662285"),
        f = n("782911"),
        I = n("629414"),
        p = n("53887"),
        _ = n("486150"),
        A = n("555759"),
        v = n("271938"),
        E = n("42203"),
        T = n("525065"),
        M = n("305961"),
        y = n("957255"),
        h = n("824563"),
        S = n("27618"),
        m = n("18494"),
        N = n("101125"),
        C = n("697218"),
        g = n("800762"),
        O = n("953998"),
        b = n("387111"),
        G = n("550766"),
        j = n("191225"),
        x = n("706508"),
        F = n("126939"),
        L = n("612696"),
        R = n("501260"),
        U = n("871388"),
        V = n("152311"),
        Y = n("407908"),
        D = n("698372"),
        P = n("141962"),
        J = n("954016"),
        k = n("49111"),
        w = n("450484"),
        H = n("782340");
      function K(e, t) {
        let { analyticsLocations: K } = (0, o.default)(),
          X = (0, l.useStateFromStores)([C.default], () =>
            C.default.getCurrentUser()
          ),
          z = (0, l.useStateFromStores)([j.default], () =>
            j.default.getSelfEmbeddedActivities()
          ),
          B = (0, l.useStateFromStoresArray)([N.default], () =>
            N.default
              .getActivities()
              .filter(
                e =>
                  null != e.application_id &&
                  !(null == z ? void 0 : z.has(e.application_id))
              )
          ),
          Q = (0, l.useStateFromStoresArray)(
            [h.default],
            () =>
              null != t
                ? h.default.getActivities(
                    t.id,
                    null == e ? void 0 : e.getGuildId()
                  )
                : [],
            [t, e]
          ),
          W = (0, l.useStateFromStoresArray)(
            [j.default],
            () => {
              let n =
                (null == e ? void 0 : e.id) != null
                  ? j.default.getEmbeddedActivitiesForChannel(e.id)
                  : j.NO_ACTIVITIES;
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
          Z = (0, l.useStateFromStores)(
            [y.default],
            () =>
              null == e ||
              e.isPrivate() ||
              y.default.can(k.Permissions.SEND_MESSAGES, e),
            [e]
          ),
          $ = (0, l.useStateFromStoresArray)(
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
          en = (0, l.useStateFromStoresArray)(
            [
              E.default,
              M.default,
              T.default,
              S.default,
              m.default,
              g.default,
              y.default,
            ],
            () => [
              ...Q.map(e =>
                (0, L.default)({
                  user: null != t ? t : X,
                  activity: e,
                  application: ee.find(
                    t => (null == t ? void 0 : t.id) === e.application_id
                  ),
                  channelId: et,
                  currentUser: X,
                  isEmbedded: (0, V.default)(e),
                  ChannelStore: E.default,
                  GuildStore: M.default,
                  GuildMemberCountStore: T.default,
                  RelationshipStore: S.default,
                  SelectedChannelStore: m.default,
                  VoiceStateStore: g.default,
                  PermissionStore: y.default,
                })
              ),
              ...W.map(e => {
                let n = null != t ? t : X;
                return (
                  null != n &&
                  (0, R.default)({
                    userId: n.id,
                    application: ee.find(
                      t => (null == t ? void 0 : t.id) === e.applicationId
                    ),
                    channelId: et,
                    currentUser: X,
                    isActivitiesEnabledForCurrentPlatform: (0,
                    F.getIsActivitiesEnabledForCurrentPlatform)(),
                    ChannelStore: E.default,
                    GuildStore: M.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default,
                  }) === R.EmbeddedActivityJoinability.CAN_JOIN
                );
              }),
            ],
            [Q, ee, et, X, W, t]
          ),
          ea = (0, l.useStateFromStoresArray)(
            [c.default, v.default],
            () =>
              Q.map(e =>
                e.type === k.ActivityTypes.LISTENING && null != t
                  ? (0, p.default)(c.default, v.default, t, e)
                  : void 0
              ),
            [t, Q]
          ),
          el = (0, s.useAnalyticsContext)();
        if (!Z) return null;
        let ei = (n, a) => {
            null != e
              ? d.default.sendActivityInvite({
                  type: n,
                  channelId: e.id,
                  activity: a,
                  location: k.AnalyticsLocations.CONTEXT_MENU,
                })
              : null != t &&
                d.default.sendActivityInviteUser({
                  type: n,
                  userId: t.id,
                  activity: a,
                  location: k.AnalyticsLocations.CONTEXT_MENU,
                });
          },
          ed = (l, d) => {
            let u = E.default.getChannel(l),
              s = null == u ? void 0 : M.default.getGuild(u.guild_id);
            if (null != u && null != s) {
              if (null != t)
                return G.sendEmbeddedActivityInviteUser({
                  channelId: u.id,
                  applicationId: d,
                  userId: t.id,
                  location: k.InstantInviteSources.CONTEXT_MENU,
                });
              if (null != e && e.type === k.ChannelTypes.GUILD_VOICE)
                return (0, i.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .el("310688")
                      .then(n.bind(n, "310688"));
                    return n =>
                      (0, a.jsx)(t, {
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
                return G.sendEmbeddedActivityInvite({
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
              channelId: m.default.getVoiceChannelId(),
              messageId: null,
              intent: J.ActivityIntent.PLAY,
              embedded: (0, U.default)(e, k.ActivityFlags.EMBEDDED),
            }),
              (0, Y.default)({
                type: k.AnalyticsGameOpenTypes.JOIN,
                userId: t.id,
                applicationId: e.application_id,
                partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                locationObject: el.location,
                analyticsLocations: K,
              });
          },
          es = async t => {
            await (0, x.default)({
              applicationId: t.applicationId,
              currentEmbeddedApplication: q,
              activityChannelId: null == e ? void 0 : e.id,
              locationObject: el.location,
              embeddedActivitiesManager: P.default,
              analyticsLocations: K,
            });
          },
          eo = [];
        return (
          null == z ||
            z.forEach(n => {
              let l =
                  (null == t ? void 0 : t.id) != null &&
                  n.userIds.has(null == t ? void 0 : t.id),
                d = y.default.can(k.Permissions.CREATE_INSTANT_INVITE, e),
                u = ee.find(
                  e => (null == e ? void 0 : e.id) === n.applicationId
                );
              null != n.instanceId &&
                !l &&
                d &&
                null != u &&
                eo.push(
                  (0, a.jsx)(
                    i.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label:
                        H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
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
            (0, U.default)(e, k.ActivityFlags.JOIN)
              ? eo.push(
                  (0, a.jsx)(
                    i.MenuItem,
                    {
                      id: "invite-to-join",
                      label:
                        H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: e.name,
                      action: () => ei(k.ActivityActionTypes.JOIN, e),
                    },
                    "self".concat(t)
                  )
                )
              : e.type === k.ActivityTypes.LISTENING &&
                (0, U.default)(e, k.ActivityFlags.SYNC) &&
                eo.push(
                  (0, a.jsx)(
                    i.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        H.default.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: e.name,
                      action: () => ei(k.ActivityActionTypes.LISTEN, e),
                    },
                    "self".concat(t)
                  )
                );
          }),
          eo.length > 0 && eo.push((0, a.jsx)(i.MenuSeparator, {})),
          Q.forEach((n, l) => {
            if (
              n.type === k.ActivityTypes.PLAYING &&
              (0, U.default)(n, k.ActivityFlags.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if (en[l]) {
                let e = $[l];
                eo.push(
                  (0, a.jsx)(
                    i.MenuItem,
                    {
                      id: "join",
                      label: e
                        ? H.default.Messages.USER_ACTIVITY_JOINING
                        : H.default.Messages.JOIN,
                      disabled: e,
                      hint: e
                        ? (0, a.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => eu(n),
                    },
                    l
                  )
                );
              } else
                eo.push(
                  (0, a.jsx)(
                    i.MenuItem,
                    {
                      id: "ask-to-join",
                      label:
                        H.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: n.name,
                      action: () => ei(k.ActivityActionTypes.JOIN_REQUEST, n),
                    },
                    l
                  )
                );
            } else if (
              n.type === k.ActivityTypes.LISTENING &&
              (0, U.default)(n, k.ActivityFlags.SYNC) &&
              null != ea[l]
            ) {
              let d = ea[l],
                {
                  notPlayable: u,
                  playingSameTrack: s,
                  isCurrentUser: o,
                  syncingWithUser: r,
                  syncingWithParty: c,
                } = d,
                p = o || u || s,
                v = o || r || c;
              eo.push(
                (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () =>
                      (0, A.default)(
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
                (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "spotify-sync-".concat(n.session_id),
                    action: () =>
                      (0, _.default)(
                        d,
                        w.SpotifyActionTypes.USER_ACTIVITY_SYNC
                      ),
                    label: H.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: v
                      ? (0, I.default)(
                          d,
                          w.SpotifyActionTypes.USER_ACTIVITY_SYNC,
                          null != e
                            ? b.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: v,
                  },
                  "spotify-sync-".concat(n.session_id)
                )
              );
            }
          }),
          W.forEach((e, t) => {
            var n;
            let l = e.userIds.has(
                null !== (n = null == X ? void 0 : X.id) && void 0 !== n
                  ? n
                  : k.EMPTY_STRING_SNOWFLAKE_ID
              ),
              d = t + Q.length,
              u = $[d] || l,
              s = H.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            l
              ? (s = H.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : $[d] && (s = H.default.Messages.USER_ACTIVITY_JOINING);
            let o = ee.find(
              t => (null == t ? void 0 : t.id) === e.applicationId
            );
            en[d] &&
              null != o &&
              eo.push(
                (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(e.applicationId),
                    label: s,
                    disabled: u,
                    hint: $[d]
                      ? (0, a.jsx)(i.Spinner, {
                          type: i.Spinner.Type.PULSING_ELLIPSIS,
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
    493015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("450911"),
        d = n("272030"),
        u = n("838446"),
        s = n("158534"),
        o = n("846883"),
        r = n("812204"),
        c = n("861370"),
        f = n("972701"),
        I = n("390008"),
        p = n("936947"),
        _ = n("271938"),
        A = n("136207"),
        v = n("44141"),
        E = n("531674"),
        T = n("49111"),
        M = n("782340"),
        y = (0, s.default)(
          (0, u.default)(
            function (e) {
              let { channel: t, selected: u, onSelect: s } = e,
                r = t.isOwner(_.default.getId()),
                T = (0, v.default)(t),
                y = (0, E.default)(t),
                h = (0, A.default)(t, u),
                S = (0, c.default)({
                  id: t.id,
                  label: M.default.Messages.COPY_ID_CHANNEL,
                }),
                m = (0, o.default)(t),
                N = (0, f.useAddToFavoritesItem)(t),
                C = (0, f.useRemoveFromFavoritesItem)(t),
                g = (0, I.default)(t),
                O = (0, p.default)(t);
              return null == t || t.isManaged()
                ? null
                : (0, a.jsxs)(l.Menu, {
                    navId: "gdm-context",
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onClose: d.closeContextMenu,
                    onSelect: s,
                    children: [
                      (0, a.jsx)(l.MenuGroup, { children: T }),
                      (0, a.jsxs)(l.MenuGroup, { children: [N, g, O] }),
                      (0, a.jsxs)(l.MenuGroup, {
                        children: [
                          r
                            ? (0, a.jsx)(l.MenuItem, {
                                id: "instant-invites",
                                label: M.default.Messages.INSTANT_INVITES,
                                action: () =>
                                  (0, l.openModalLazy)(async () => {
                                    let { default: e } = await n
                                      .el("84279")
                                      .then(n.bind(n, "84279"));
                                    return n =>
                                      (0, a.jsx)(e, { channelId: t.id, ...n });
                                  }),
                              })
                            : null,
                          (0, a.jsx)(l.MenuControlItem, {
                            id: "change-icon",
                            showDefaultFocus: !0,
                            control: (e, n) =>
                              (0, a.jsx)(l.MenuImageUploadControl, {
                                onChange: n => {
                                  var a;
                                  i.default.setIcon(t.id, n),
                                    null === (a = e.onClose) ||
                                      void 0 === a ||
                                      a.call(e);
                                },
                                multiple: !1,
                                "aria-label": M.default.Messages.CHANGE_ICON,
                                ...e,
                                ref: n,
                              }),
                            label: M.default.Messages.CHANGE_ICON,
                          }),
                          null != t.icon
                            ? (0, a.jsx)(l.MenuItem, {
                                id: "remove-icon",
                                label: M.default.Messages.REMOVE_ICON,
                                action: () => i.default.setIcon(t.id, null),
                              })
                            : null,
                        ],
                      }),
                      (0, a.jsx)(l.MenuGroup, { children: m }),
                      (0, a.jsx)(l.MenuGroup, { children: y }),
                      (0, a.jsx)(l.MenuGroup, { children: h }),
                      (0, a.jsx)(l.MenuGroup, { children: C }),
                      (0, a.jsx)(l.MenuGroup, { children: S }),
                    ],
                  });
            },
            { object: T.AnalyticsObjects.CONTEXT_MENU }
          ),
          [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU]
        );
    },
    136207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        i = n("77078"),
        d = n("450911"),
        u = n("254167"),
        s = n("679653"),
        o = n("782340");
      function r(e, t) {
        let n = (0, s.default)(e),
          r = l.useCallback(() => {
            let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({ name: n }),
              s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({ name: n });
            e.isManaged() &&
              ((l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name: n,
              })),
              (s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name: n,
              })));
            let r = function (n) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              d.default.closePrivateChannel(e.id, t, a);
            };
            (0, i.openModal)(e =>
              (0, a.jsx)(u.default, { header: l, body: s, onSubmit: r, ...e })
            );
          }, [e, n, t]);
        return (0, a.jsx)(i.MenuItem, {
          id: "leave-channel",
          label: o.default.Messages.LEAVE_GROUP_DM,
          action: r,
          color: "danger",
        });
      }
    },
    44141: function (e, t, n) {
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
      var l = n("446674"),
        i = n("77078"),
        d = n("267363"),
        u = n("680986"),
        s = n("689275"),
        o = n("755624"),
        r = n("233069"),
        c = n("245997"),
        f = n("660478"),
        I = n("49111"),
        p = n("782340");
      function _(e) {
        let t = (function (e) {
          let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
            n = (0, l.useStateFromStores)(
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
                    l = s.default.getThreadsForGuild(e.guild_id);
                  for (let e in l)
                    if (a.has(e)) {
                      for (let t in l[e])
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
        return (0, a.jsx)(i.MenuItem, {
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
            return A;
          },
          useRemoveFromFavoritesItem: function () {
            return v;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("917351"),
        i = n.n(l),
        d = n("446674"),
        u = n("77078"),
        s = n("923959"),
        o = n("379881"),
        r = n("200008"),
        c = n("986373"),
        f = n("498139"),
        I = n("49111"),
        p = n("782340");
      function _(e, t) {
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
      function A(e) {
        let t = (0, d.useStateFromStores)([s.default], () =>
            s.default.getChannels(I.FAVORITES)
          )[I.ChannelTypes.GUILD_CATEGORY],
          { isFavoritesPerk: n } = (0, f.useFavoritesServerExperiment)(
            "58e21a_1"
          ),
          { notifyFavoriteAdded: l } = (0, c.useFavoriteAdded)(),
          o = (0, c.useCanFavoriteChannel)(e);
        if (!o) return null;
        let [[p], A] = i.partition(t, e => "null" === e.channel.id);
        function v(t) {
          l(), (0, r.addFavoriteChannel)(e.id, t);
        }
        return 0 === A.length
          ? (0, a.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: _(e, !1),
              action: () => v(null),
            })
          : (0, a.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: _(e, !1),
              action: () => v(null),
              children: [
                n &&
                  (0, a.jsx)(u.MenuGroup, {
                    children: (0, a.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(p.channel.id),
                        label: p.channel.name,
                        action: () =>
                          v("null" === p.channel.id ? null : p.channel.id),
                      },
                      p.channel.id
                    ),
                  }),
                (0, a.jsx)(u.MenuGroup, {
                  children: A.map(e =>
                    (0, a.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => v(e.channel.id),
                      },
                      e.channel.id
                    )
                  ),
                }),
              ],
            });
      }
      function v(e) {
        let t = (0, d.useStateFromStores)([o.default], () =>
          o.default.isFavorite(e.id)
        );
        return __OVERLAY__ || !t
          ? null
          : (0, a.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: _(e, !0),
              color: "danger",
              action: () =>
                e.type === I.ChannelTypes.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
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
      var l = n("446674"),
        i = n("77078"),
        d = n("162771"),
        u = n("498139"),
        s = n("49111"),
        o = n("782340");
      function r(e) {
        let t = (0, l.useStateFromStores)([d.default], () =>
            d.default.getGuildId()
          ),
          r = e.type === s.ChannelTypes.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.useFavoritesServerExperiment)(
            "useChannelFavoriteSetNickname"
          );
        return __OVERLAY__ || t !== s.FAVORITES
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && r
                  ? o.default.Messages.FAVORITES_RENAME_CATEGORY
                  : o.default.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, i.openModalLazy)(async () => {
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
      var l = n("77078"),
        i = n("200008"),
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
            for (let a of e) null == a.id ? (n = a) : t.push(a);
            return [n, t];
          })(c);
        function p(e) {
          null != n && (0, i.updateFavoriteChannelParent)(n.id, e);
        }
        return null == f && 0 === I.length
          ? null
          : (0, a.jsxs)(l.MenuItem, {
              id: "move-to-category",
              label: s.default.Messages.MOVE_TO,
              children: [
                null != f &&
                  (0, a.jsx)(l.MenuGroup, {
                    children: (0, a.jsx)(l.MenuItem, {
                      id: "favorite-uncategorized",
                      label: f.name,
                      action: () => p(f.id),
                    }),
                  }),
                I.length > 0 &&
                  (0, a.jsx)(l.MenuGroup, {
                    children: I.map(e => {
                      let { id: t, name: n } = e;
                      return (0, a.jsx)(
                        l.MenuItem,
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
//# sourceMappingURL=e7cff44518156c775a46.js.map
