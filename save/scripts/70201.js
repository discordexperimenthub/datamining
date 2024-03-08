(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70201"],
  {
    838446: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("901582");
      function l(e, t) {
        return function (a) {
          return (0, i.jsx)(n.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, i.jsx)(e, { ...a }),
          });
        };
      }
    },
    158534: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("685665");
      function l(e, t) {
        return function (a) {
          let { AnalyticsLocationProvider: l } = (0, n.default)(t);
          return (0, i.jsx)(l, { children: (0, i.jsx)(e, { ...a }) });
        };
      }
    },
    846883: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return K;
          },
        }),
        a("222007"),
        a("424973");
      var i = a("37983");
      a("884691");
      var n = a("446674"),
        l = a("77078"),
        d = a("260365"),
        u = a("823411"),
        s = a("997289"),
        o = a("685665"),
        r = a("442939"),
        c = a("662285"),
        f = a("782911"),
        I = a("629414"),
        p = a("53887"),
        T = a("486150"),
        S = a("555759"),
        A = a("271938"),
        _ = a("42203"),
        v = a("525065"),
        m = a("305961"),
        E = a("957255"),
        y = a("824563"),
        N = a("27618"),
        C = a("18494"),
        M = a("101125"),
        g = a("697218"),
        h = a("800762"),
        b = a("953998"),
        O = a("387111"),
        x = a("550766"),
        L = a("191225"),
        F = a("706508"),
        R = a("126939"),
        U = a("612696"),
        j = a("501260"),
        D = a("871388"),
        V = a("152311"),
        P = a("407908"),
        G = a("698372"),
        Y = a("141962"),
        k = a("954016"),
        J = a("49111"),
        B = a("450484"),
        w = a("782340");
      function K(e, t) {
        let { analyticsLocations: K } = (0, o.default)(),
          H = (0, n.useStateFromStores)([g.default], () =>
            g.default.getCurrentUser()
          ),
          X = (0, n.useStateFromStores)([L.default], () =>
            L.default.getSelfEmbeddedActivities()
          ),
          z = (0, n.useStateFromStoresArray)([M.default], () =>
            M.default
              .getActivities()
              .filter(
                e =>
                  null != e.application_id &&
                  !(null == X ? void 0 : X.has(e.application_id))
              )
          ),
          W = (0, n.useStateFromStoresArray)(
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
          q = (0, n.useStateFromStoresArray)(
            [L.default],
            () => {
              let a =
                (null == e ? void 0 : e.id) != null
                  ? L.default.getEmbeddedActivitiesForChannel(e.id)
                  : L.NO_ACTIVITIES;
              return null != t
                ? a.filter(e => {
                    let { userIds: a } = e;
                    return a.has(t.id);
                  })
                : a;
            },
            [t, e]
          ),
          Q = (0, G.default)(),
          Z = (0, n.useStateFromStores)(
            [E.default],
            () =>
              null == e ||
              e.isPrivate() ||
              E.default.can(J.Permissions.SEND_MESSAGES, e),
            [e]
          ),
          $ = (0, n.useStateFromStoresArray)(
            [b.default],
            () => [
              ...W.map(
                e =>
                  null != e.application_id &&
                  b.default.getState(
                    e.application_id,
                    J.ActivityActionTypes.JOIN
                  ) === J.ActivityActionStates.LOADING
              ),
              ...q.map(
                e =>
                  b.default.getState(
                    e.applicationId,
                    J.ActivityActionTypes.JOIN
                  ) === J.ActivityActionStates.LOADING
              ),
            ],
            [W, q]
          ),
          ee = (0, r.default)([
            ...W.filter(
              e => (null == e ? void 0 : e.application_id) != null
            ).map(e => e.application_id),
            ...q.map(e => e.applicationId),
          ]),
          et = null == e ? void 0 : e.id,
          ea = (0, n.useStateFromStoresArray)(
            [
              _.default,
              m.default,
              v.default,
              N.default,
              C.default,
              h.default,
              E.default,
            ],
            () => [
              ...W.map(e =>
                (0, U.default)({
                  user: null != t ? t : H,
                  activity: e,
                  application: ee.find(
                    t => (null == t ? void 0 : t.id) === e.application_id
                  ),
                  channelId: et,
                  currentUser: H,
                  isEmbedded: (0, V.default)(e),
                  ChannelStore: _.default,
                  GuildStore: m.default,
                  GuildMemberCountStore: v.default,
                  RelationshipStore: N.default,
                  SelectedChannelStore: C.default,
                  VoiceStateStore: h.default,
                  PermissionStore: E.default,
                })
              ),
              ...q.map(e => {
                let a = null != t ? t : H;
                return (
                  null != a &&
                  (0, j.default)({
                    userId: a.id,
                    application: ee.find(
                      t => (null == t ? void 0 : t.id) === e.applicationId
                    ),
                    channelId: et,
                    currentUser: H,
                    isActivitiesEnabledForCurrentPlatform: (0,
                    R.getIsActivitiesEnabledForCurrentPlatform)(),
                    ChannelStore: _.default,
                    GuildStore: m.default,
                    VoiceStateStore: h.default,
                    PermissionStore: E.default,
                  }) === j.EmbeddedActivityJoinability.CAN_JOIN
                );
              }),
            ],
            [W, ee, et, H, q, t]
          ),
          ei = (0, n.useStateFromStoresArray)(
            [c.default, A.default],
            () =>
              W.map(e =>
                e.type === J.ActivityTypes.LISTENING && null != t
                  ? (0, p.default)(c.default, A.default, t, e)
                  : void 0
              ),
            [t, W]
          ),
          en = (0, s.useAnalyticsContext)();
        if (!Z) return null;
        let el = (a, i) => {
            null != e
              ? d.default.sendActivityInvite({
                  type: a,
                  channelId: e.id,
                  activity: i,
                  location: J.AnalyticsLocations.CONTEXT_MENU,
                })
              : null != t &&
                d.default.sendActivityInviteUser({
                  type: a,
                  userId: t.id,
                  activity: i,
                  location: J.AnalyticsLocations.CONTEXT_MENU,
                });
          },
          ed = (n, d) => {
            let u = _.default.getChannel(n),
              s = null == u ? void 0 : m.default.getGuild(u.guild_id);
            if (null != u && null != s) {
              if (null != t)
                return x.sendEmbeddedActivityInviteUser({
                  channelId: u.id,
                  applicationId: d,
                  userId: t.id,
                  location: J.InstantInviteSources.CONTEXT_MENU,
                });
              if (null != e && e.type === J.ChannelTypes.GUILD_VOICE)
                return (0, l.openModalLazy)(
                  async () => {
                    let { default: t } = await a
                      .el("310688")
                      .then(a.bind(a, "310688"));
                    return a =>
                      (0, i.jsx)(t, {
                        ...a,
                        guild: s,
                        channel: u,
                        applicationId: d,
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
                return x.sendEmbeddedActivityInvite({
                  activityChannelId: u.id,
                  invitedChannelId: e.id,
                  applicationId: d,
                  location: J.InstantInviteSources.CONTEXT_MENU,
                });
            }
          },
          eu = async e => {
            var a;
            await u.default.join({
              userId: t.id,
              sessionId: e.session_id,
              applicationId: e.application_id,
              channelId: C.default.getVoiceChannelId(),
              messageId: null,
              intent: k.ActivityIntent.PLAY,
              embedded: (0, D.default)(e, J.ActivityFlags.EMBEDDED),
            }),
              (0, P.default)({
                type: J.AnalyticsGameOpenTypes.JOIN,
                userId: t.id,
                applicationId: e.application_id,
                partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                locationObject: en.location,
                analyticsLocations: K,
              });
          },
          es = async t => {
            await (0, F.default)({
              applicationId: t.applicationId,
              currentEmbeddedApplication: Q,
              activityChannelId: null == e ? void 0 : e.id,
              locationObject: en.location,
              embeddedActivitiesManager: Y.default,
              analyticsLocations: K,
            });
          },
          eo = [];
        return (
          null == X ||
            X.forEach(a => {
              let n =
                  (null == t ? void 0 : t.id) != null &&
                  a.userIds.has(null == t ? void 0 : t.id),
                d = E.default.can(J.Permissions.CREATE_INSTANT_INVITE, e),
                u = ee.find(
                  e => (null == e ? void 0 : e.id) === a.applicationId
                );
              null != a.instanceId &&
                !n &&
                d &&
                null != u &&
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label:
                        w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: u.name,
                      action: () => {
                        ed(a.channelId, a.applicationId);
                      },
                    },
                    "self-embedded-".concat(a.applicationId)
                  )
                );
            }),
          z.forEach((e, t) => {
            e.type === J.ActivityTypes.PLAYING &&
            (0, D.default)(e, J.ActivityFlags.JOIN)
              ? eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-join",
                      label:
                        w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: e.name,
                      action: () => el(J.ActivityActionTypes.JOIN, e),
                    },
                    "self".concat(t)
                  )
                )
              : e.type === J.ActivityTypes.LISTENING &&
                (0, D.default)(e, J.ActivityFlags.SYNC) &&
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        w.default.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: e.name,
                      action: () => el(J.ActivityActionTypes.LISTEN, e),
                    },
                    "self".concat(t)
                  )
                );
          }),
          eo.length > 0 && eo.push((0, i.jsx)(l.MenuSeparator, {})),
          W.forEach((a, n) => {
            if (
              a.type === J.ActivityTypes.PLAYING &&
              (0, D.default)(a, J.ActivityFlags.JOIN) &&
              null != a.session_id &&
              null != a.application_id
            ) {
              if (ea[n]) {
                let e = $[n];
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "join",
                      label: e
                        ? w.default.Messages.USER_ACTIVITY_JOINING
                        : w.default.Messages.JOIN,
                      disabled: e,
                      hint: e
                        ? (0, i.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: a.name,
                      action: () => eu(a),
                    },
                    n
                  )
                );
              } else
                eo.push(
                  (0, i.jsx)(
                    l.MenuItem,
                    {
                      id: "ask-to-join",
                      label:
                        w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: a.name,
                      action: () => el(J.ActivityActionTypes.JOIN_REQUEST, a),
                    },
                    n
                  )
                );
            } else if (
              a.type === J.ActivityTypes.LISTENING &&
              (0, D.default)(a, J.ActivityFlags.SYNC) &&
              null != ei[n]
            ) {
              let d = ei[n],
                {
                  notPlayable: u,
                  playingSameTrack: s,
                  isCurrentUser: o,
                  syncingWithUser: r,
                  syncingWithParty: c,
                } = d,
                p = o || u || s,
                A = o || r || c;
              eo.push(
                (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-play-".concat(a.session_id),
                    action: () =>
                      (0, S.default)(
                        d,
                        B.SpotifyActionTypes.USER_ACTIVITY_PLAY
                      ),
                    label: (0, f.default)(
                      d,
                      B.SpotifyActionTypes.USER_ACTIVITY_PLAY
                    ),
                    subtext: p
                      ? (0, I.default)(
                          d,
                          B.SpotifyActionTypes.USER_ACTIVITY_PLAY,
                          null != e
                            ? O.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: p,
                  },
                  "spotify-play-".concat(a.session_id)
                ),
                (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "spotify-sync-".concat(a.session_id),
                    action: () =>
                      (0, T.default)(
                        d,
                        B.SpotifyActionTypes.USER_ACTIVITY_SYNC
                      ),
                    label: w.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: A
                      ? (0, I.default)(
                          d,
                          B.SpotifyActionTypes.USER_ACTIVITY_SYNC,
                          null != e
                            ? O.default.getNickname(e.guild_id, e.id, t)
                            : void 0
                        )
                      : void 0,
                    disabled: A,
                  },
                  "spotify-sync-".concat(a.session_id)
                )
              );
            }
          }),
          q.forEach((e, t) => {
            var a;
            let n = e.userIds.has(
                null !== (a = null == H ? void 0 : H.id) && void 0 !== a
                  ? a
                  : J.EMPTY_STRING_SNOWFLAKE_ID
              ),
              d = t + W.length,
              u = $[d] || n,
              s = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            n
              ? (s = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : $[d] && (s = w.default.Messages.USER_ACTIVITY_JOINING);
            let o = ee.find(
              t => (null == t ? void 0 : t.id) === e.applicationId
            );
            ea[d] &&
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
    170990: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        }),
        a("222007");
      var i = a("37983"),
        n = a("884691"),
        l = a("446674"),
        d = a("77078"),
        u = a("736964"),
        s = a("27618"),
        o = a("697218"),
        r = a("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: a, username: c, bot: f } = e,
          I = (0, l.useStateFromStores)(
            [o.default],
            () => {
              var e;
              return (
                (null === (e = o.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === a
              );
            },
            [a]
          ),
          [p, T] = (0, l.useStateFromStoresArray)(
            [s.default],
            () => [s.default.isFriend(a), s.default.isBlocked(a)],
            [a]
          ),
          [S, A] = n.useState(!1);
        return f || I
          ? null
          : p
            ? (0, i.jsx)(d.MenuItem, {
                id: "remove-friend",
                label: r.default.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, d.openModal)(e =>
                    (0, i.jsx)(d.ConfirmModal, {
                      header: r.default.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.default.Messages.REMOVE_FRIEND,
                      cancelText: r.default.Messages.CANCEL,
                      onConfirm: () => {
                        u.default.removeFriend(a, { location: t }), A(!1);
                      },
                      ...e,
                      children: (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: r.default.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    })
                  );
                },
              })
            : (0, i.jsx)(d.MenuItem, {
                id: "add-friend",
                label: S
                  ? r.default.Messages.ADD_FRIEND_BUTTON_AFTER
                  : r.default.Messages.ADD_FRIEND,
                action: () => {
                  !S &&
                    (u.default.addRelationship({
                      userId: a,
                      context: { location: t },
                    }),
                    A(!0));
                },
                disabled: T || (S && !p),
              });
      }
    },
    304582: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        }),
        a("222007");
      var i = a("37983");
      a("884691");
      var n = a("446674"),
        l = a("77078"),
        d = a("27618"),
        u = a("782340");
      function s(e) {
        let t = e.id,
          [s, o] = (0, n.useStateFromStoresArray)(
            [d.default],
            () => {
              var e;
              return [
                d.default.isFriend(t),
                null !== (e = d.default.getNickname(t)) && void 0 !== e
                  ? e
                  : null,
              ];
            },
            [t]
          );
        if (!s) return null;
        let r =
          null == o
            ? u.default.Messages.ADD_FRIEND_NICKNAME
            : u.default.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, i.jsx)(l.MenuItem, {
          id: null == o ? "add-friend-nickname" : "edit-friend-nickname",
          label: r,
          action: () => {
            (0, l.openModalLazy)(async () => {
              let { default: t } = await a
                .el("557890")
                .then(a.bind(a, "557890"));
              return a => (0, i.jsx)(t, { user: e, nickname: o, ...a });
            });
          },
        });
      }
    },
    72057: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var i = a("37983"),
        n = a("884691"),
        l = a("77078"),
        d = a("349649"),
        u = a("401642"),
        s = a("271938"),
        o = a("102985"),
        r = a("599110"),
        c = a("49111"),
        f = a("590456"),
        I = a("782340");
      function p(e) {
        let { user: t, guildId: a, context: p } = e,
          { id: T } = t,
          { loading: S, note: A } = (0, d.default)(T),
          _ = !S && null != A && A.length > 0,
          v = p === c.AppContext.POPOUT,
          m = n.useContext(r.AnalyticsContext);
        return T === s.default.getId() || o.default.hidePersonalInformation || v
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "note",
              label: S
                ? I.default.Messages.LOADING_NOTE
                : _
                  ? I.default.Messages.EDIT_NOTE
                  : I.default.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: t.id,
                  section: f.UserProfileSections.USER_INFO,
                  guildId: a,
                  autoFocusNote: !0,
                  analyticsLocation: m.location,
                });
              },
            });
      }
    },
    489836: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("446674"),
        l = a("77078"),
        d = a("736964"),
        u = a("27618"),
        s = a("697218"),
        o = a("49111"),
        r = a("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: a } = e,
          c = (0, n.useStateFromStores)(
            [s.default],
            () => {
              var e;
              return (
                (null === (e = s.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === a
              );
            },
            [a]
          ),
          f = (0, n.useStateFromStores)(
            [u.default],
            () => u.default.isBlocked(a),
            [a]
          );
        if (c) return null;
        function I() {
          d.default.addRelationship({
            userId: a,
            context: { location: t },
            type: o.RelationshipTypes.BLOCKED,
          });
        }
        return (0, i.jsx)(l.MenuItem, {
          id: "block",
          label: f ? r.default.Messages.UNBLOCK : r.default.Messages.BLOCK,
          action: () =>
            f
              ? d.default.unblockUser(a, { location: t })
              : (0, l.openModal)(t =>
                  (0, i.jsx)(l.ConfirmModal, {
                    header: r.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                      name: e.username,
                    }),
                    confirmText: r.default.Messages.BLOCK,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: I,
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children:
                        r.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                          name: e.username,
                        }),
                    }),
                  })
                ),
        });
      }
    },
    406703: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("446674"),
        l = a("77078"),
        d = a("450911"),
        u = a("168973"),
        s = a("271938"),
        o = a("42203"),
        r = a("27618"),
        c = a("18494"),
        f = a("49111"),
        I = a("782340");
      function p(e, t) {
        let p = s.default.getId(),
          T = t === f.AppContext.POPOUT,
          S = (0, n.useStateFromStores)(
            [c.default, o.default],
            () =>
              c.default.getVoiceChannelId() === o.default.getDMFromUserId(e.id)
          ),
          A = (0, n.useStateFromStores)([r.default], () =>
            r.default.isBlocked(e.id)
          );
        if (p === e.id || T || S || e.bot) return null;
        let _ = () => d.default.openPrivateChannel(e.id, !0),
          v = !u.default.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(l.MenuItem, {
          id: "call",
          label: I.default.Messages.CALL,
          action: v
            ? () => {
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await a
                    .el("241890")
                    .then(a.bind(a, "241890"));
                  return t => (0, i.jsx)(e, { onSubmit: _, ...t });
                });
              }
            : _,
          disabled: A,
        });
      }
    },
    314838: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        }),
        a("424973"),
        a("222007");
      var i = a("37983"),
        n = a("884691"),
        l = a("446674"),
        d = a("77078"),
        u = a("450911"),
        s = a("970728"),
        o = a("819689"),
        r = a("242757"),
        c = a("42203"),
        f = a("923959"),
        I = a("305961"),
        p = a("957255"),
        T = a("27618"),
        S = a("677099"),
        A = a("697218"),
        _ = a("49111"),
        v = a("782340");
      function m(e, t) {
        u.default.ensurePrivateChannel(e).then(e => {
          null != c.default.getChannel(e) &&
            o.default.sendInvite(e, t, "context_menu", null);
        });
      }
      function E(e, t) {
        let a = (0, l.useStateFromStores)(
            [A.default],
            () => A.default.getCurrentUser(),
            []
          ),
          u = (0, l.useStateFromStoresArray)(
            [S.default, I.default, p.default],
            () => {
              let e = S.default.getFlattenedGuildIds(),
                a = [];
              return (
                e.forEach(e => {
                  let i = I.default.getGuild(e);
                  null != i &&
                    (0, r.canViewInviteModal)(p.default, i) &&
                    i.id !== t &&
                    a.push(i);
                }),
                a
              );
            },
            [t]
          ),
          [o, c] = n.useState({});
        return (null == a ? void 0 : a.id) === e.id ||
          e.bot ||
          0 === u.length ||
          T.default.isBlocked(e.id)
          ? null
          : (0, i.jsx)(d.MenuItem, {
              id: "invite-to-server",
              label: v.default.Messages.INVITE_TO_SERVER,
              children: u.map(t =>
                o[t.id]
                  ? (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: t.id,
                        disabled: !0,
                        label: v.default.Messages.INVITE_SENT,
                      },
                      t.id
                    )
                  : (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: t.id,
                        label: t.name,
                        action: () =>
                          (function (e, t) {
                            let a = f.default.getDefaultChannel(
                              e.id,
                              !0,
                              _.Permissions.CREATE_INSTANT_INVITE
                            );
                            if (null != a) {
                              if (
                                (c({ ...o, [e.id]: !0 }),
                                !p.default.can(
                                  _.Permissions.CREATE_INSTANT_INVITE,
                                  e
                                ) && null != e.vanityURLCode)
                              ) {
                                m(t, e.vanityURLCode);
                                return;
                              }
                              s.default
                                .createInvite(
                                  a.id,
                                  { max_uses: 1, unique: !0 },
                                  "User Invite Context Menu"
                                )
                                .then(e => m(t, e.code));
                            }
                          })(t, e.id),
                      },
                      t.id
                    )
              ),
            });
      }
    },
    806179: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var i = a("37983"),
        n = a("884691"),
        l = a("77078"),
        d = a("244201"),
        u = a("401642"),
        s = a("599110"),
        o = a("49111"),
        r = a("782340");
      function c(e, t, a) {
        let c = n.useContext(s.AnalyticsContext),
          f = (0, d.useWindowDispatch)();
        return (0, i.jsx)(l.MenuItem, {
          id: "user-profile",
          label: r.default.Messages.PROFILE,
          action: () => {
            (0, u.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != a ? a : void 0,
              analyticsLocation: c.location,
            }),
              f.dispatch(o.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
    623879: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var i = a("37983");
      a("884691");
      var n = a("446674"),
        l = a("77078"),
        d = a("287585"),
        u = a("824563"),
        s = a("49111"),
        o = a("782340");
      function r(e) {
        let t = (0, n.useStateFromStores)(
          [u.default],
          () =>
            (0, d.default)(
              u.default.findActivity(
                e,
                e => e.type === s.ActivityTypes.STREAMING
              )
            ),
          [e]
        );
        return null == t
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "watch-stream",
              label: o.default.Messages.WATCH_STREAM,
              action: () => window.open(t, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=6a7c8b957138936c0e09.js.map
