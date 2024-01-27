(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31717"],
  {
    819689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eh;
          },
        }),
        n("70102"),
        n("794252"),
        n("222007"),
        n("702976");
      var a = n("506838"),
        l = n("394846"),
        s = n("872717"),
        i = n("819855"),
        r = n("913144"),
        d = n("408062"),
        u = n("979911"),
        o = n("716241"),
        c = n("802493"),
        E = n("595525"),
        f = n("219788"),
        _ = n("139514"),
        g = n("312016"),
        h = n("605250"),
        m = n("619443"),
        S = n("582415"),
        M = n("600798"),
        p = n("569808"),
        A = n("9294"),
        I = n("52393"),
        T = n("143291"),
        C = n("379534"),
        L = n("40566"),
        D = n("994918"),
        O = n("815297"),
        v = n("168730"),
        y = n("129953"),
        N = n("28007"),
        R = n("880731"),
        b = n("562228"),
        G = n("793277");
      n("685841");
      var U = n("256572"),
        P = n("364685"),
        w = n("804888"),
        k = n("263024"),
        B = n("410912"),
        F = n("373469"),
        V = n("271938"),
        x = n("42203");
      n("836417");
      var H = n("337543"),
        K = n("377253"),
        Y = n("957255"),
        W = n("824563"),
        j = n("660478"),
        J = n("18494"),
        z = n("162771"),
        X = n("401848"),
        q = n("697218"),
        Q = n("599110"),
        Z = n("718517"),
        $ = n("568734"),
        ee = n("659632"),
        et = n("701909"),
        en = n("719923"),
        ea = n("299039"),
        el = n("404118"),
        es = n("49111"),
        ei = n("724210"),
        er = n("579033"),
        ed = n("782340");
      let eu = new h.default("MessageActionCreators"),
        eo = new h.default("MessageQueue"),
        ec = !1;
      class eE {
        markComplete() {
          this.completed = !0;
        }
        constructor() {
          this.completed = !1;
        }
      }
      function ef(e) {
        let {
            inviteKey: t,
            channelId: n,
            messageId: a,
            location: l,
            suggested: s = null,
            overrideProperties: i = {},
          } = e,
          r = (0, A.parseExtraDataFromInviteKey)(t),
          d = x.default.getChannel(n);
        if (null != d) {
          let e = null;
          d.isMultiUserDM()
            ? (e = es.LoggingInviteTypes.GDM_INVITE)
            : !d.isPrivate() && (e = es.LoggingInviteTypes.SERVER_INVITE);
          let n = {},
            c = H.default.getInvite(t);
          if (
            null != c &&
            c.state === es.InviteStates.RESOLVED &&
            null != c.channel
          ) {
            var u;
            let t = c.channel;
            (n.invite_channel_id = t.id),
              (n.invite_guild_id =
                null === (u = c.guild) || void 0 === u ? void 0 : u.id),
              (n.invite_channel_type = t.type),
              null != c.inviter && (n.invite_inviter_id = c.inviter.id);
            let a = F.default.getLastActiveStream();
            if (null != a && a.channelId === t.id) {
              (e = es.LoggingInviteTypes.STREAM),
                (n.destination_user_id = a.ownerId);
              let t = (0, S.getStreamerApplication)(a, W.default);
              n.application_id = null != t ? t.id : null;
            }
          }
          null != s &&
            ((n.is_suggested = s.isAffinitySuggestion),
            (n.row_num = s.rowNum),
            (n.num_total = s.numTotal),
            (n.num_affinity_connections = s.numAffinityConnections),
            (n.is_filtered = s.isFiltered)),
            (n = {
              ...n,
              location: l,
              invite_type: e,
              invite_code: r.baseCode,
              guild_id: d.getGuildId(),
              channel_id: d.id,
              message_id: a,
              send_type: es.SendTypes.DIRECT_MESSAGE,
              invite_guild_scheduled_event_id: r.guildScheduledEventId,
              ...i,
            }),
            o.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, n);
        } else {
          let e = {},
            n = H.default.getInvite(t);
          null != n &&
            n.state === es.InviteStates.RESOLVED &&
            null != n.inviter &&
            ((e.invite_inviter_id = n.inviter.id),
            (e = {
              ...e,
              location: l,
              invite_type: es.LoggingInviteTypes.FRIEND_INVITE,
              invite_code: r.baseCode,
              message_id: a,
              send_type: es.SendTypes.DIRECT_MESSAGE,
              invite_guild_scheduled_event_id: r.guildScheduledEventId,
              ...i,
            }),
            o.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, e));
        }
      }
      let e_ = {
          [es.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () =>
              ed.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION,
          },
          [es.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
              ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                helpUrl: et.default.getArticleURL(
                  es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                ),
              }),
          },
          [es.AbortCodes.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => ed.default.Messages.BOT_DM_RATE_LIMITED,
          },
          [es.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () =>
              ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED,
          },
          [es.AbortCodes.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () =>
              ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED,
          },
        },
        eg = {
          receiveMessage(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            r.default.dispatch({
              type: "MESSAGE_CREATE",
              channelId: e,
              message: t,
              optimistic: n,
              sendMessageOptions: a,
              isPushNotification: !1,
            });
          },
          sendBotMessage(e, t, n, a) {
            null != n &&
              o.default.trackWithMetadata(
                es.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED,
                { message_author: "Clyde", message_name: n }
              ),
              eg.receiveMessage(
                e,
                (0, O.createBotMessage)({
                  messageId: a,
                  channelId: e,
                  content: t,
                  loggingName: n,
                })
              );
          },
          sendClydeError(e) {
            let t,
              n,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              l = x.default.getChannel(e);
            if (null != l) {
              if (a === es.AbortCodes.SLOWMODE_RATE_LIMITED)
                (t = ed.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                  seconds: l.rateLimitPerUser,
                })),
                  (n = "SLOWMODE_RATE_LIMITED");
              else if (a === es.AbortCodes.INVALID_MESSAGE_SEND_USER)
                (t =
                  ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: et.default.getArticleURL(
                      es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                    ),
                  })),
                  (n = "INVALID_MESSAGE_SEND_USER");
              else if (a === es.AbortCodes.TOO_MANY_THREADS) {
                let e = l.isForumLikeChannel() || l.isForumPost();
                (t = e
                  ? ed.default.Messages.BOT_DM_TOO_MANY_POSTS
                  : ed.default.Messages.BOT_DM_TOO_MANY_THREADS),
                  (n = "TOO_MANY_THREADS");
              } else
                a === es.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS
                  ? ((t =
                      ed.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS),
                    (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                  : a === es.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED
                    ? ((t =
                        ed.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format(
                          { helpUrl: es.MarketingURLs.HARMFUL_LINKS }
                        )),
                      (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                    : a in e_
                      ? ((n = e_[a].messageName), (t = e_[a].messageGetter()))
                      : ((t =
                          ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format(
                            {
                              helpUrl: et.default.getArticleURL(
                                es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                              ),
                            }
                          )),
                        (n = "SEND_FAILED (".concat(a, ")")));
              eg.sendBotMessage(e, t, n);
            }
          },
          sendExplicitMediaClydeError(e, t) {
            let n = x.default.getChannel(e);
            if (null == n) return;
            let { message: l, messageName: s } = (0, a.match)({
                isDM: n.isDM(),
                isGDM: n.isGroupDM(),
              })
                .with({ isDM: !0 }, () => ({
                  message:
                    ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                  messageName: "BOT_DM_EXPLICIT_CONTENT",
                }))
                .with({ isDM: !1, isGDM: !0 }, () => ({
                  message:
                    ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                  messageName: "BOT_GDM_EXPLICIT_CONTENT",
                }))
                .otherwise(() => ({
                  message:
                    ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                  messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                })),
              i = (0, O.createNonce)();
            eg.sendBotMessage(e, l, s, i),
              null != t &&
                t.length > 0 &&
                r.default.dispatch({
                  type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                  messageId: i,
                  channelId: e,
                  attachments: t,
                });
          },
          truncateMessages(e, t, n) {
            r.default.dispatch({
              type: "TRUNCATE_MESSAGES",
              channelId: e,
              truncateBottom: t,
              truncateTop: n,
            });
          },
          clearChannel(e) {
            r.default.dispatch({ type: "CLEAR_MESSAGES", channelId: e });
          },
          jumpToPresent(e, t) {
            eg.trackJump(e, null, "Present");
            let n = { present: !0 };
            K.default.hasPresent(e)
              ? r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  jump: n,
                  channelId: e,
                  limit: t,
                })
              : eg.fetchMessages({ channelId: e, limit: t, jump: n });
          },
          trackJump(e, t, n, a) {
            o.default.trackWithMetadata(es.AnalyticEvents.JUMP, {
              context: n,
              channel_id: e,
              message_id: t,
              ...a,
            });
          },
          jumpToMessage(e) {
            let {
              channelId: t,
              messageId: n,
              flash: a = !1,
              offset: l,
              context: s,
              extraProperties: i = null,
              isPreload: r,
              returnMessageId: d,
              skipLocalFetch: u,
              jumpType: o,
            } = e;
            return (
              "string" == typeof s && eg.trackJump(t, n, s, i),
              eg.fetchMessages({
                channelId: t,
                limit: es.MAX_MESSAGES_FOR_JUMP,
                jump: {
                  messageId: n,
                  flash: a,
                  offset: l,
                  returnMessageId: d,
                  jumpType: o,
                },
                isPreload: r,
                skipLocalFetch: u,
              })
            );
          },
          focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eg.fetchMessages({
              channelId: t,
              limit: es.MAX_MESSAGES_FOR_JUMP,
              focus: { messageId: n },
            });
          },
          fetchMessages(e) {
            let {
                channelId: t,
                before: n,
                after: a,
                limit: l,
                jump: i,
                focus: u,
                isPreload: o,
                skipLocalFetch: c,
                truncate: E,
              } = e,
              f = x.default.getChannel(t),
              _ = m.default.isConnectedOrOverlay(),
              g = Date.now();
            if (null != f && f.type === es.ChannelTypes.GUILD_STORE) return !1;
            if (t === ei.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
            if (
              (eu.log(
                "Fetching messages for "
                  .concat(t, " between ")
                  .concat(n, " and ")
                  .concat(a, ". jump=")
                  .concat(JSON.stringify(i))
              ),
              eg._tryFetchMessagesCached({
                channelId: t,
                before: n,
                after: a,
                limit: l,
                jump: i,
                focus: u,
                truncate: E,
              }))
            )
              return;
            B.default.fetchMessages.recordStart();
            let h = null != i ? i : void 0;
            null == h && null != u && (h = { ...u });
            let S = d.default.getOrCreate(t),
              M = S.loadStart(h);
            d.default.commit(M), r.default.dispatch({ type: "LOAD_MESSAGES" });
            let p = null == h ? void 0 : h.messageId,
              A = new eE();
            return (
              !c && this.fetchLocalMessages(t, n, a, l, A),
              s.default
                .get({
                  url: es.Endpoints.MESSAGES(t),
                  query: {
                    before: n,
                    after: a,
                    limit: l,
                    around: p,
                    preload: o,
                  },
                  retries: 2,
                  oldFormErrors: !0,
                })
                .then(
                  e => (
                    B.default.fetchMessages.recordEnd(),
                    B.default.dispatchMessages.measure(() => {
                      let s = e.body,
                        d = null != n,
                        u = null != a,
                        o = null == n && null == a,
                        c = null != p || (s.length === l && (d || o)),
                        f = null != p || (u && s.length === l);
                      if (null != p) {
                        let e = Math.floor(l / 2),
                          n = [
                            p,
                            ...s.map(e => {
                              let { id: t } = e;
                              return t;
                            }),
                          ]
                            .filter((e, t, n) => n.indexOf(e) === t)
                            .sort(ea.default.compare),
                          a = n.indexOf(p);
                        if (
                          (a < e && (c = !1),
                          s.length - a < e && (f = !1),
                          f && s.length > 0)
                        ) {
                          let e = j.default.lastMessageId(t);
                          s[0].id === e && (f = !1);
                        }
                      }
                      eu.log(
                        "Fetched "
                          .concat(s.length, " messages for ")
                          .concat(t, " isBefore:")
                          .concat(d, " isAfter:")
                          .concat(u)
                      ),
                        A.markComplete(),
                        r.default.dispatch({
                          type: "LOAD_MESSAGES_SUCCESS",
                          channelId: t,
                          messages: s,
                          isBefore: d,
                          isAfter: u,
                          hasMoreBefore: c,
                          hasMoreAfter: f,
                          limit: l,
                          jump: i,
                          isStale:
                            !_ || m.default.lastTimeConnectedChanged() >= g,
                          truncate: E,
                        });
                    }),
                    !0
                  ),
                  () => (
                    eu.log("Failed to fetch messages for ".concat(t)),
                    r.default.dispatch({
                      type: "LOAD_MESSAGES_FAILURE",
                      channelId: t,
                    }),
                    !1
                  )
                )
            );
          },
          async fetchLocalMessages(e, t, n, a, l) {
            let s = x.default.getBasicChannel(e),
              i = d.default.getOrCreate(e),
              u = c.default.database();
            if (null == u || null == s || null != t || null != n) {
              B.default.addLocalMessages(e, -1);
              return;
            }
            if (i.ready && !i.cached) {
              B.default.addLocalMessages(e, -2);
              return;
            }
            let o = await (0, E.tryLoadAsync)(() => f.default.load(u, e, a));
            if (null == o) {
              B.default.addLocalMessages(e, -3);
              return;
            }
            if (
              (eu.log(
                "fetched "
                  .concat(
                    o.messages.length,
                    " messages from local database (channel_id: "
                  )
                  .concat(e, ", remote_fetch_completed: ")
                  .concat(l.completed, ")")
              ),
              B.default.addLocalMessages(e, o.messages.length),
              !l.completed && o.messages.length > 0)
            ) {
              let t =
                o.messages.length >= a &&
                o.connectionId === m.default.lastTimeConnectedChanged();
              r.default.dispatch({
                type: "LOCAL_MESSAGES_LOADED",
                guildId: s.guild_id,
                channelId: e,
                users: o.users,
                members: o.members,
                messages: o.messages,
                stale: !t,
              });
            }
          },
          async fetchNewLocalMessages(e, t) {
            var n;
            let a = x.default.getBasicChannel(e),
              l = c.default.database();
            if (null == l || null == a) return;
            let s = d.default.getOrCreate(e);
            if (s.hasMoreAfter) return;
            let i = await (0, E.tryLoadAsync)(() => f.default.load(l, e, t));
            if (null == i) return;
            s = d.default.getOrCreate(e);
            let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
              o =
                null == u
                  ? i.messages
                  : i.messages.filter(e => ea.default.compare(e.id, u) > 0);
            eu.log(
              "Fetched "
                .concat(
                  i.messages.length,
                  " messages from the cache after foregrounding. "
                )
                .concat(o.length, " are new")
            ),
              0 !== o.length &&
                r.default.dispatch({
                  type: "LOCAL_MESSAGES_LOADED",
                  guildId: a.guild_id,
                  channelId: e,
                  users: i.users,
                  members: i.members,
                  messages: o,
                  stale: !0,
                });
          },
          _tryFetchMessagesCached(e) {
            let {
                channelId: t,
                before: n,
                after: a,
                limit: l,
                jump: s,
                focus: i,
                truncate: d,
              } = e,
              u = K.default.getMessages(t);
            if (u.cached || !u.ready) return !1;
            if (
              (null == s ? void 0 : s.messageId) != null ||
              (null == i ? void 0 : i.messageId) != null
            ) {
              if (
                (null == s ? void 0 : s.messageId) != null &&
                u.has(s.messageId, !1)
              )
                return (
                  r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    jump: s,
                    limit: l,
                    truncate: d,
                  }),
                  !0
                );
              if ((null == i ? void 0 : i.messageId) != null) {
                if (u.has(i.messageId, !1))
                  return (
                    r.default.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      channelId: t,
                      focus: i,
                      limit: l,
                      truncate: d,
                    }),
                    !0
                  );
                s = { ...i };
              }
              let e =
                  (null == s ? void 0 : s.messageId) != null
                    ? ea.default.extractTimestamp(
                        null == s ? void 0 : s.messageId
                      )
                    : 0,
                n = u.first(),
                a = u.last();
              if (
                (!u.hasMoreBefore &&
                  null != n &&
                  ea.default.extractTimestamp(n.id) >= e) ||
                (!u.hasMoreAfter &&
                  null != a &&
                  ea.default.extractTimestamp(a.id) <= e) ||
                (null != n &&
                  null != a &&
                  ea.default.extractTimestamp(n.id) < e &&
                  ea.default.extractTimestamp(a.id) > e)
              )
                return (
                  r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    jump: s,
                    limit: es.MAX_MESSAGES_FOR_JUMP,
                  }),
                  !0
                );
            } else if (null != n && u.hasBeforeCached(n))
              return (
                r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  channelId: t,
                  before: n,
                  limit: l,
                  truncate: d,
                }),
                !0
              );
            else if (null != a && u.hasAfterCached(a))
              return (
                r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  channelId: t,
                  after: a,
                  limit: l,
                  truncate: d,
                }),
                !0
              );
            return !1;
          },
          async sendMessage(e, t) {
            var n;
            let a =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              l =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            if (t.reaction) return Promise.resolve();
            let s = await (0, G.default)(e);
            if (null != s) return eg.sendMessage(s, t, a, l);
            let i = () => eg._sendMessage(e, t, l),
              r = T.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                location: "8e1e29_1",
              }).enableBackgroundSending
                ? C.default.backgroundify(i, void 0)
                : i,
              d =
                null !== (n = l.nonce) && void 0 !== n
                  ? n
                  : (0, O.createNonce)();
            return ((l = { ...l, nonce: d }),
            L.default.recordMessageSendAttempt(e, d),
            K.default.isReady(e))
              ? r()
              : a && e !== ei.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
                ? (eo.info(
                    "Waiting for channel ".concat(
                      e,
                      " to be ready before sending."
                    )
                  ),
                  new Promise((t, n) => {
                    K.default.whenReady(e, () => {
                      eo.info(
                        "Channel ".concat(e, " is ready for sending now.")
                      ),
                        r().then(t, n);
                    });
                  }))
                : r();
          },
          getSendMessageOptionsForReply(e) {
            var t;
            if (null == e) return {};
            let n = {
                guild_id:
                  null !== (t = e.channel.getGuildId()) && void 0 !== t
                    ? t
                    : void 0,
                channel_id: e.channel.id,
                message_id: e.message.id,
              },
              a = e.shouldMention
                ? void 0
                : {
                    parse: Object.values(es.AllowedMentionTypes),
                    replied_user: !1,
                  };
            return { messageReference: n, allowedMentions: a };
          },
          sendInvite: (e, t, n, a) =>
            eg._sendMessage(
              e,
              {
                content: (0, I.default)(t),
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: [],
              },
              { location: n, suggestedInvite: null != a ? a : void 0 }
            ),
          sendActivityBookmark: (e, t, n, a) =>
            eg._sendMessage(
              e,
              {
                content: t,
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: [],
              },
              { location: n, suggestedInvite: null != a ? a : void 0 }
            ),
          sendClydeProfileOverride: (e, t, n, a) =>
            eg._sendMessage(
              e,
              {
                content: t,
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: [],
              },
              { location: n, suggestedInvite: null != a ? a : void 0 }
            ),
          sendStickers(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eg._sendMessage(
              e,
              {
                content: n,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
                tts: l,
              },
              { ...a, stickerIds: t }
            );
          },
          sendGreetMessage(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { messageReference: a, allowedMentions: l } = n;
            return s.default
              .post({
                url: es.Endpoints.MESSAGES_GREET(e),
                body: {
                  sticker_ids: [t],
                  allowed_mentions: l,
                  message_reference: a,
                },
                oldFormErrors: !0,
              })
              .then(
                n => (
                  D.default.donateSentMessage(n.body.content, e),
                  eg.receiveMessage(e, n.body),
                  r.default.dispatch({
                    type: "STICKER_TRACK_USAGE",
                    stickerIds: [t],
                  }),
                  n
                ),
                t => {
                  throw (
                    (eu.log("Failed to send greeting"),
                    429 !== t.status && eg.sendClydeError(e, t.body.code),
                    r.default.dispatch({
                      type: "MESSAGE_SEND_FAILED",
                      messageId: t.body.id,
                      channelId: e,
                    }),
                    t)
                  );
                }
              );
          },
          sendPollMessage(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return eg._sendMessage(
              e,
              {
                content: "",
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: [],
              },
              { ...n, poll: t }
            );
          },
          _sendMessage(e, t, n) {
            var a, s;
            let i = (0, G.default)(e);
            if (null != i)
              return (
                eo.info("Converting channel to a private channel"),
                i.then(e => {
                  eo.info("Finished converting channel to a private channel"),
                    eg._sendMessage(e, t, n);
                })
              );
            let d = t.content,
              { invalidEmojis: c, validNonShortcutEmojis: E, tts: f = !1 } = t,
              {
                activityAction: h,
                location: m,
                suggestedInvite: S,
                stickerIds: A,
                messageReference: I,
                allowedMentions: T,
                poll: C,
              } = n,
              y = null !== (a = n.flags) && void 0 !== a ? a : 0,
              [U, k] = (0, w.default)(d);
            if (
              (U &&
                ((d = k),
                (y = (0, $.addFlag)(
                  y,
                  es.MessageFlags.SUPPRESS_NOTIFICATIONS
                ))),
              "" === d && null == h && null == A && null == C)
            )
              return Promise.reject(Error("not sending empty message"));
            let B = null != I ? es.MessageTypes.REPLY : es.MessageTypes.DEFAULT,
              F =
                null !== (s = n.nonce) && void 0 !== s
                  ? s
                  : (0, O.createNonce)();
            if (!1 !== n.eagerDispatch) {
              let t = (0, O.default)({
                channelId: e,
                content: d,
                tts: f,
                type: B,
                messageReference: I,
                allowedMentions: T,
                flags: 0 !== y ? y : void 0,
                nonce: F,
                poll: (0, b.createPollServerDataFromCreateRequest)(C),
              });
              (0, N.updateComboOnMessageSend)(e, t.id),
                null != A &&
                  (t.sticker_items = A.map(e =>
                    P.default.getStickerById(e)
                  ).filter(e => null != e)),
                eg.receiveMessage(e, t, !0, n);
            }
            if (!ec && null != c && c.length > 0) {
              let t, n;
              ec = !0;
              let a = q.default.getCurrentUser();
              c.some(e => e.animated) && !en.default.canUseAnimatedEmojis(a)
                ? ((t =
                    ed.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE),
                  (n = "INVALID_ANIMATED_EMOJI_BODY"))
                : Y.default.canWithPartialContext(
                      es.Permissions.USE_EXTERNAL_EMOJIS,
                      { channelId: e }
                    )
                  ? ((t =
                      ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE),
                    (n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                  : ((t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY),
                    (n = "INVALID_EXTERNAL_EMOJI_BODY")),
                eg.sendBotMessage(e, t, n);
            }
            let H = {
              type: u.MessageDataType.SEND,
              message: {
                channelId: e,
                content: d,
                nonce: F,
                tts: f,
                message_reference: I,
                allowed_mentions: T,
                flags: y,
              },
            };
            if (null != h) {
              let e =
                h.type === es.ActivityActionTypes.JOIN_REQUEST
                  ? null == h
                    ? void 0
                    : h.activity.session_id
                  : V.default.getSessionId();
              if (null != e) {
                let t = { type: h.type, session_id: e },
                  { activity: n } = h;
                null != n.party &&
                  null != n.party.id &&
                  (t.party_id = n.party.id),
                  (H.message.application_id = n.application_id),
                  (H.message.activity = t);
              }
            }
            return (
              null != C && (H.message.poll = C),
              null != A && (H.message.sticker_ids = A),
              R.default.isEnabled() && (H.message.has_poggermode_enabled = !0),
              new Promise((t, a) => {
                let s = Date.now(),
                  i = u.default.length,
                  c = Math.floor(1e4 * Math.random());
                eo.info("Queueing message to be sent LogId:".concat(c)),
                  u.default.enqueue(
                    H,
                    u => {
                      let c = Date.now() - s;
                      if (u.ok)
                        D.default.donateSentMessage(d, e),
                          eg.receiveMessage(e, u.body, !0, {
                            sendAnalytics: { duration: c, queueSize: i },
                            poll: C,
                          }),
                          L.default.recordMessageSendApiResponse(F),
                          r.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: X.SlowmodeType.SendMessage,
                            channelId: e,
                          }),
                          r.default.dispatch({
                            type: "EMOJI_TRACK_USAGE",
                            emojiUsed: E,
                          }),
                          r.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: A,
                          }),
                          !(function (e) {
                            let {
                              content: t,
                              channelId: n,
                              messageId: a,
                              location: s,
                              suggested: i = null,
                              overrideProperties: r = {},
                            } = e;
                            (0, g.default)(t).forEach(e => {
                              let { type: t, code: d } = e;
                              if (t === _.CodedLinkType.INVITE)
                                ef({
                                  inviteKey: d,
                                  channelId: n,
                                  messageId: a,
                                  location: s,
                                  suggested: i,
                                  overrideProperties: r,
                                });
                              else if (t === _.CodedLinkType.TEMPLATE) {
                                let e = p.default.getGuildTemplate(d);
                                if (
                                  null == e ||
                                  e.state === er.GuildTemplateStates.RESOLVING
                                )
                                  return;
                                o.default.trackWithMetadata(
                                  es.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT,
                                  {
                                    guild_template_code: d,
                                    guild_template_name: e.name,
                                    guild_template_description: e.description,
                                    guild_template_guild_id: e.sourceGuildId,
                                  }
                                );
                              } else if (t === _.CodedLinkType.BUILD_OVERRIDE);
                              else if (t === _.CodedLinkType.EVENT);
                              else if (t === _.CodedLinkType.CHANNEL_LINK);
                              else if (
                                t === _.CodedLinkType.APP_DIRECTORY_PROFILE
                              )
                                Q.default.track(
                                  es.AnalyticEvents
                                    .APP_DIRECTORY_PROFILE_EMBED_SENT,
                                  {
                                    application_id: d,
                                    device_platform: l.isMobile
                                      ? "mobile_web"
                                      : "desktop_web",
                                    guild_id: z.default.getGuildId(),
                                    channel_id: J.default.getChannelId(),
                                  }
                                );
                              else if (t === _.CodedLinkType.ACTIVITY_BOOKMARK);
                              else if (
                                t === _.CodedLinkType.EMBEDDED_ACTIVITY_INVITE
                              );
                              else if (t === _.CodedLinkType.GUILD_PRODUCT);
                              else if (t === _.CodedLinkType.SERVER_SHOP);
                              else if (t === _.CodedLinkType.CLYDE_PROFILE);
                              else
                                throw Error(
                                  "Unknown coded link type: ".concat(t)
                                );
                            });
                          })({
                            content: d,
                            channelId: e,
                            messageId: u.body.id,
                            location: null != m ? m : "chat_input",
                            suggested: S,
                          }),
                          !(function (e, t, n, a, l) {
                            (0, ee.findGiftCodes)(e).forEach(e => {
                              let s = x.default.getChannel(t);
                              null != s &&
                                o.default.trackWithMetadata(
                                  es.AnalyticEvents.GIFT_CODE_SENT,
                                  {
                                    location: a,
                                    gift_code: e,
                                    guild_id: s.getGuildId(),
                                    channel_id: s.id,
                                    channel_type: s.type,
                                    message_id: n,
                                    automatic_send: l,
                                  }
                                );
                            });
                          })(
                            d,
                            e,
                            u.body.id,
                            null != m ? m : "chat_input",
                            !!n.isGiftLinkSentOnBehalfOfUser
                          ),
                          t(u);
                      else {
                        var f;
                        eu.log("Failed to send message", {
                          hasErr: u.hasErr,
                          status: u.status,
                          code:
                            null === (f = u.body) || void 0 === f
                              ? void 0
                              : f.code,
                          error: u.err,
                        });
                        let t = !1;
                        if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
                        else if (u.status >= 400 && u.status < 500 && u.body) {
                          if (
                            u.body.code === es.AbortCodes.SLOWMODE_RATE_LIMITED
                          ) {
                            let t = u.body.retry_after;
                            null != t &&
                              t > 0 &&
                              r.default.dispatch({
                                type: "SLOWMODE_SET_COOLDOWN",
                                channelId: e,
                                slowmodeType: X.SlowmodeType.SendMessage,
                                cooldownMs: t * Z.default.Millis.SECOND,
                              });
                          } else
                            M.AUTOMOD_ERROR_CODES.has(u.body.code)
                              ? r.default.dispatch({
                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                  messageData: H,
                                  errorResponseBody: {
                                    code: u.body.code,
                                    message: u.body.message,
                                  },
                                })
                              : u.body.code ===
                                  es.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED
                                ? r.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED",
                                  })
                                : u.body.code ===
                                    es.AbortCodes.CLYDE_CONSENT_REQUIRED
                                  ? r.default.dispatch({
                                      type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                      messageId: F,
                                      channelId: e,
                                    })
                                  : null != C ||
                                    eg.sendClydeError(e, u.body.code);
                        }
                        t
                          ? eg.deleteMessage(e, F, !0)
                          : (r.default.dispatch({
                              type: "MESSAGE_SEND_FAILED",
                              messageId: F,
                              channelId: e,
                            }),
                            (0, v.logMessageSendFailure)({
                              failureCode: u.hasErr ? void 0 : u.status,
                              errorMessage: u.hasErr ? u.err.message : void 0,
                            })),
                          a(u);
                      }
                    },
                    c
                  );
              })
            );
          },
          startEditMessage(e, t, n, a) {
            r.default.dispatch({
              type: "MESSAGE_START_EDIT",
              channelId: e,
              messageId: t,
              content: n,
              source: a,
            });
          },
          updateEditMessage(e, t, n) {
            r.default.dispatch({
              type: "MESSAGE_UPDATE_EDIT",
              channelId: e,
              textValue: t,
              richValue: n,
            });
          },
          endEditMessage(e, t) {
            r.default.dispatch({
              type: "MESSAGE_END_EDIT",
              channelId: e,
              response: t,
            });
          },
          async editMessage(e, t, n) {
            let { content: a } = n;
            await k.default.unarchiveThreadIfNecessary(e);
            let l = (function (e, t) {
                let n = K.default.getMessage(e, t);
                if (null == n || n.type !== es.MessageTypes.REPLY) return;
                let a = U.default.getMessageByReference(n.messageReference);
                if (a.state === U.ReferencedMessageState.LOADED) {
                  if (!n.mentions.includes(a.message.author.id))
                    return {
                      parse: Object.values(es.AllowedMentionTypes),
                      replied_user: !1,
                    };
                }
              })(e, t),
              s = {
                channelId: e,
                messageId: t,
                content: a,
                allowed_mentions: l,
              };
            u.default.enqueue(
              { type: u.MessageDataType.EDIT, message: s },
              n => {
                let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
                if (a) {
                  let e = { type: u.MessageDataType.EDIT, message: s };
                  r.default.dispatch({
                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                    messageData: e,
                    errorResponseBody: {
                      code: n.body.code,
                      message: n.body.message,
                    },
                  });
                }
                n.hasErr
                  ? i.AccessibilityAnnouncer.announce(
                      ed.default.Messages
                        .A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED
                    )
                  : a
                    ? i.AccessibilityAnnouncer.announce(
                        ed.default.Messages
                          .A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED
                      )
                    : i.AccessibilityAnnouncer.announce(
                        ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED
                      ),
                  eg.endEditMessage(e, n.hasErr ? void 0 : n),
                  eg.focusMessage({ channelId: e, messageId: t });
              }
            );
          },
          async suppressEmbeds(e, t) {
            await k.default.unarchiveThreadIfNecessary(e),
              s.default.patch({
                url: es.Endpoints.MESSAGE(e, t),
                body: { flags: es.MessageFlags.SUPPRESS_EMBEDS },
                oldFormErrors: !0,
              });
          },
          async patchMessageAttachments(e, t, n) {
            await k.default.unarchiveThreadIfNecessary(e),
              s.default.patch({
                url: es.Endpoints.MESSAGE(e, t),
                body: { attachments: n },
                oldFormErrors: !0,
              });
          },
          async deleteMessage(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = () => {
                r.default
                  .dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e })
                  .then(() => {
                    i.AccessibilityAnnouncer.announce(
                      ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED
                    );
                  });
              };
            n
              ? a()
              : (await k.default.unarchiveThreadIfNecessary(e),
                s.default
                  .delete({
                    url: es.Endpoints.MESSAGE(e, t),
                    oldFormErrors: !0,
                  })
                  .then(() => {
                    a();
                  }));
            let l = K.default.getMessage(e, t);
            (null == l ? void 0 : l.type) ===
              es.MessageTypes.GUILD_INVITE_REMINDER &&
              (0, y.trackGuildInviteNotificationDismissed)();
          },
          dismissAutomatedMessage(e) {
            null != e.loggingName &&
              o.default.trackWithMetadata(
                es.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED,
                {
                  message_name: e.loggingName,
                  message_author: e.author.username,
                }
              ),
              this.deleteMessage(e.channel_id, e.id, !0);
          },
          revealMessage(e, t) {
            r.default.dispatch({
              type: "MESSAGE_REVEAL",
              channelId: e,
              messageId: t,
            });
          },
          crosspostMessage: (e, t) =>
            s.default
              .post({
                url: es.Endpoints.MESSAGE_CROSSPOST(e, t),
                oldFormErrors: !0,
              })
              .catch(e => {
                let t;
                (t =
                  429 === e.status
                    ? ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format(
                        { retryAfter: Math.floor(e.body.retry_after / 60) }
                      )
                    : ed.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY),
                  el.default.show({
                    title: ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                    body: t,
                    confirmText: ed.default.Messages.OKAY,
                  });
              }),
          trackInvite: ef,
        };
      var eh = eg;
    },
    219788: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007"),
        n("70102");
      var a = n("705909"),
        l = n("605250"),
        s = n("619443"),
        i = n("42203"),
        r = n("286235"),
        d = n("802493"),
        u = n("883062"),
        o = n("794897"),
        c = n("818697"),
        E = n("280468");
      let f = new l.default("Messages");
      class _ {
        static computeUsersAndMembers(e) {
          (0, E.requireSortedDescending)(e);
          let t = new Map(),
            n = new Map();
          for (let a of e)
            this.addIntoMap(t, a.users, e => e.id),
              this.addIntoMap(n, a.members, e => e.userId);
          return [Array.from(t.values()), Array.from(n.values())];
        }
        static addIntoMap(e, t, n) {
          for (let a of t) {
            let t = n(a),
              l = e.get(t);
            (null == l || (l.incomplete && !a.incomplete)) && e.set(t, a);
          }
        }
        constructor(e) {
          if (
            ((this.connectionId = null),
            (this.users = []),
            (this.members = []),
            (this.messages = []),
            e.length > 0)
          ) {
            var t;
            let n =
                null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
              [a, l] = _.computeUsersAndMembers(e);
            e.length > 0 &&
              e.every(e => e.connectionId === n) &&
              (this.connectionId = n),
              (this.users = a),
              (this.members = l),
              (this.messages = e.map(e => e.message));
          }
        }
      }
      var g = new (class e {
        async startupLoad(e, t, n, a) {
          let l = d.default.messages(e),
            s = await l.getLatest(t, n, a);
          return new _(s);
        }
        async load(e, t, n) {
          let a = i.default.getBasicChannel(t);
          if (null == t || null == a || !(0, c.isReadableChannel)(a))
            return new _([]);
          {
            let l = d.default.messages(e),
              s = await l.getLatest(a.guild_id, t, n);
            return new _(s);
          }
        }
        handleMessageCreate(e, t) {
          !e.optimistic &&
            !e.isPushNotification &&
            null == e.sendMessageOptions &&
            (0, c.isReadableChannelId)(e.channelId) &&
            this.upsertOne(e.guildId, e.channelId, e.message, t);
        }
        handleMessageUpdate(e, t) {
          if (null != e.message.id && null != e.message.channel_id)
            (0, c.isReadableChannelId)(e.message.channel_id) &&
              ((function (e) {
                return (
                  null != e.author &&
                  null != e.content &&
                  null != e.mentions &&
                  null != e.timestamp
                );
              })(e.message)
                ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t)
                : this.updateOne(
                    e.guildId,
                    e.message.channel_id,
                    e.message,
                    t
                  ));
        }
        handleMessagePreviewsLoaded(e, t) {
          for (let n of e.messages)
            (0, c.isReadableChannelId)(n.channel_id) &&
              this.insertStale(e.guildId, n.channel_id, n, t);
        }
        handleLoadMessagesSuccess(e, t) {
          let n = i.default.getBasicChannel(e.channelId);
          null != n &&
            (0, c.isReadableChannelId)(e.channelId) &&
            this.upsertMany(n.guild_id, e.channelId, e.messages, t);
        }
        handleMessageDelete(e, t) {
          if (null == e.id) {
            r.default.captureException(
              Error(
                "MESSAGE_DELETE with a null id (guild_id: "
                  .concat(e.guildId, ", channel_id: ")
                  .concat(e.channelId, ").")
              )
            );
            return;
          }
          this.deleteOne(e.guildId, e.channelId, e.id, t);
        }
        handleMessageDeleteBulk(e, t) {
          for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t);
        }
        handleChannelDelete(e, t) {
          this.deleteChannel(e.channel.guild_id, e.channel.id, t);
        }
        handleGuildDelete(e, t) {
          !e.guild.unavailable && this.deleteGuild(e.guild.id, t);
        }
        handleReset() {}
        insertStale(e, t, n, l) {
          let i = d.default.messagesTransaction(l),
            r = s.default.lastTimeConnectedChanged();
          i.put(
            e,
            t,
            u.KvMessage.fromMessage(e, t, n, r),
            a.ConflictOptions.Skip
          );
        }
        upsertOne(e, t, n, l) {
          let i = d.default.messagesTransaction(l),
            r = s.default.lastTimeConnectedChanged();
          i.put(
            e,
            t,
            u.KvMessage.fromMessage(e, t, n, r),
            a.ConflictOptions.Replace
          ),
            i.trimChannel(e, t, o.default.saveLimit(t));
        }
        upsertMany(e, t, n, a) {
          let l = d.default.messagesTransaction(a),
            i = s.default.lastTimeConnectedChanged();
          for (let a of n) l.put(e, t, u.KvMessage.fromMessage(e, t, a, i));
          l.trimChannel(e, t, o.default.saveLimit(t));
        }
        async updateOne(e, t, n, a) {
          if (null == n.id) {
            f.warn(
              "updateOne: message.id is null; cannot update a message if we do not know its id."
            );
            return;
          }
          let l = d.default.messages(a.database),
            i = await l.get(e, t, n.id),
            r = s.default.lastTimeConnectedChanged();
          null != i &&
            l.put(
              e,
              t,
              u.KvMessage.fromMessage(e, t, { ...i.message, ...n }, r)
            );
        }
        deleteOne(e, t, n, a) {
          d.default.messagesTransaction(a).deleteMessage(e, t, n);
        }
        deleteChannel(e, t, n) {
          d.default.messagesTransaction(n).deleteChannel(e, t);
        }
        deleteGuild(e, t) {
          d.default.messagesTransaction(t).deleteGuild(e);
        }
        constructor() {
          this.actions = {
            CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            LOAD_MESSAGES_SUCCESS: (e, t) =>
              this.handleLoadMessagesSuccess(e, t),
            MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
            MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
            MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
            MESSAGE_PREVIEWS_LOADED: (e, t) =>
              this.handleMessagePreviewsLoaded(e, t),
            MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t),
          };
        }
      })();
    },
    883062: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          KvMessage: function () {
            return s;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("26989"),
        l = n("697218");
      class s {
        static fromMessage(e, t, n, a) {
          let [l, i] = s.deriveMemberUsers(e, n);
          return {
            id: n.id,
            channelId: t,
            message: n,
            members: l,
            users: i,
            connectionId: a,
          };
        }
        static deriveMemberUsers(e, t) {
          var n, s, i, r;
          let d = new Set([
              null === (n = t.author) || void 0 === n ? void 0 : n.id,
              null === (s = t.interaction) || void 0 === s ? void 0 : s.user.id,
              ...(null !==
                (r =
                  null === (i = t.mentions) || void 0 === i
                    ? void 0
                    : i.map(e => e.id)) && void 0 !== r
                ? r
                : []),
            ]),
            u = [],
            o = [];
          for (let t of d) {
            if (null == t) continue;
            let n = l.default.getUser(t),
              s = a.default.getTrueMember(null != e ? e : "", t);
            null != n && o.push(n), null != s && u.push(s);
          }
          return [u, o];
        }
      }
    },
    794897: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144"),
        s = n("42203"),
        i = n("525065"),
        r = n("18494"),
        d = n("8001"),
        u = n("625483"),
        o = n("185496"),
        c = n("689257"),
        E = n("753848"),
        f = n("818697"),
        _ = n("875081");
      let g = null,
        h = new u.ExtendedMemoryLru(750, 500),
        m = new o.Lru(15),
        S = !1;
      class M extends a.default.Store {
        initialize() {
          this.waitFor(s.default),
            this.waitFor(r.default),
            this.waitFor(i.default),
            this.syncWith([d.default], () => !0),
            this.syncWith([r.default], p);
        }
        canEvictOrphans() {
          return S;
        }
        saveLimit(e) {
          let t = s.default.getBasicChannel(e);
          return (null != t && (0, E.isPrivateChannel)(t)) ||
            (null != t && h.has(e))
            ? 25
            : 1;
        }
        getSaveableChannels() {
          let e = s.default.getChannelIds(null),
            t = e.map(e => ({ guildId: null, channelId: e }));
          return d.default.isLowDisk
            ? null != g
              ? [...t, g]
              : t
            : [...t, ...h.values()];
        }
        toSnapshot() {
          return {
            v: 1,
            channels: [...h.allValues()].filter(e => !e.fallback),
            penalized: [...m.keys()],
            lastChannel: g,
          };
        }
        static mergeSnapshot(e) {
          let t = h,
            n = m;
          for (let n of ((h = new u.ExtendedMemoryLru(
            h.primaryCapacity,
            h.extendedCapacity
          )),
          (m = new o.Lru(m.capacity)),
          (g = null != g ? g : e.lastChannel),
          [e.channels, t.values()]))
            for (let e of n) !e.fallback && h.put(e.channelId, e);
          for (let t of [e.penalized, n.keys()])
            for (let e of t) m.put(e, null);
        }
        static recordChannel(e) {
          let t = s.default.getBasicChannel(e);
          if (null != t && (0, f.isReadableChannel)(t)) {
            var n;
            let a = {
              guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
              channelId: e,
              channelType: t.type,
            };
            if (((g = a), h.put(e, a), (0, c.isLimitedChannel)(t))) {
              let t = m.put(e, null);
              null != t && h.delete(e);
            }
          }
        }
        static deleteChannel(e) {
          h.delete(e);
        }
        static deleteGuild(e) {
          for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId);
        }
        static dropUnreachableChannels() {
          for (let e of h.keys()) {
            let t = s.default.getBasicChannel(e);
            !(0, f.isReadableChannel)(t) && M.deleteChannel(e);
          }
        }
        static deleteUnreadableGuildChannels(e) {
          for (let t of h.values())
            e === t.guildId &&
              !(0, f.isReadableChannelId)(t.channelId) &&
              M.deleteChannel(t.channelId);
        }
        static replaceLru(e) {
          h = e;
        }
      }
      function p() {
        let e = r.default.getChannelId();
        null != e && M.recordChannel(e);
      }
      function A(e) {
        let t = e.id,
          n = (0, f.isReadableChannel)(e),
          a = r.default.getChannelId();
        n && t === a && M.recordChannel(t), !n && M.deleteChannel(t);
      }
      var I = new M(l.default, {
        CACHE_LOADED_LAZY_NO_CACHE: function (e) {
          S = !0;
        },
        CACHE_LOADED_LAZY: function (e) {
          (S = !0),
            null != e.saveableChannels && M.mergeSnapshot(e.saveableChannels);
        },
        CHANNEL_DELETE: function (e) {
          M.deleteChannel(e.channel.id);
        },
        CHANNEL_UPDATES: function (e) {
          for (let t of e.channels) A(t);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function () {
          M.dropUnreachableChannels(),
            M.replaceLru((0, _.withFallbacks)(h, 1250));
        },
        GUILD_DELETE: function (e) {
          return !e.guild.unavailable && (M.deleteGuild(e.guild.id), !0);
        },
        LOGIN_SUCCESS: function (e) {
          h.clear(), m.clear(), (S = !1);
        },
        THREAD_DELETE: function (e) {
          M.deleteChannel(e.channel.id);
        },
        THREAD_UPDATE: function (e) {
          A(e.channel);
        },
      });
    },
    689257: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isLimitedChannel: function () {
            return s;
          },
        }),
        n("42203");
      var a = n("525065"),
        l = n("49111");
      function s(e) {
        var t;
        let n =
          null !==
            (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) &&
          void 0 !== t
            ? t
            : 0;
        return (
          null != e &&
          e.type !== l.ChannelTypes.DM &&
          e.type !== l.ChannelTypes.GROUP_DM &&
          n >= 1e4
        );
      }
    },
    753848: function (e, t, n) {
      "use strict";
      function a(e) {
        return null == e.guild_id;
      }
      n.r(t),
        n.d(t, {
          isPrivateChannel: function () {
            return a;
          },
        });
    },
    818697: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isReadableChannel: function () {
            return d;
          },
          isReadableChannelId: function () {
            return u;
          },
        });
      var a = n("233069"),
        l = n("42203"),
        s = n("957255"),
        i = n("49111");
      let r =
        i.BasicPermissions.VIEW_CHANNEL |
        i.BasicPermissions.READ_MESSAGE_HISTORY;
      function d(e) {
        return (
          null != e &&
          (e.type === i.ChannelTypes.DM ||
            e.type === i.ChannelTypes.GROUP_DM ||
            ((0, a.isTextChannel)(e.type) && s.default.canBasicChannel(r, e)))
        );
      }
      function u(e) {
        return null != e && d(l.default.getBasicChannel(e));
      }
    },
    875081: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          withFallbacks: function () {
            return u;
          },
        }),
        n("222007");
      var a = n("42203"),
        l = n("677099"),
        s = n("625483"),
        i = n("689257"),
        r = n("818697"),
        d = n("49111");
      function u(e, t) {
        if (e.totalLength >= t) return e;
        let n = new s.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
          u = t - e.totalLength;
        for (let t of l.default.getGuildFolders())
          for (let l of t.guildIds)
            for (let t of Object.values(
              a.default.getMutableBasicGuildChannelsForGuild(l)
            ))
              if (
                ((function (e) {
                  return (
                    e.type === d.ChannelTypes.DM ||
                    e.type === d.ChannelTypes.GROUP_DM ||
                    e.type === d.ChannelTypes.GUILD_TEXT
                  );
                })(t) &&
                  (0, r.isReadableChannel)(t) &&
                  !(0, i.isLimitedChannel)(t) &&
                  (function (e, t, n) {
                    !n.hasExtended(t.id) &&
                      n.put(t.id, {
                        guildId: e,
                        channelId: t.id,
                        channelType: t.type,
                        fallback: !0,
                      });
                  })(l, t, n),
                n.totalLength >= u)
              )
                return o(n, e);
        return o(n, e);
      }
      function o(e, t) {
        for (let [n, a] of t.allEntries()) e.put(n, a);
        return e;
      }
    },
    8001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("75247"),
        l = n("913144"),
        s = n("605250"),
        i = n("718517"),
        r = n("802493");
      let d = new s.default("FileSystemStore"),
        u = 10 * i.default.Millis.MINUTE;
      class o extends a.default {
        handlePostConnectionOpen() {
          return this.refresh(), !1;
        }
        handleAppStateUpdate(e) {
          return "active" !== e.state && this.refresh(), !1;
        }
        async refresh() {
          var e, t;
          let n = await (null === (t = r.default.database()) || void 0 === t
            ? void 0
            : null === (e = t.fsInfo()) || void 0 === e
              ? void 0
              : e.catch(e => d.warn("couldn't get fs info", e)));
          if (null != n) {
            let e =
                n.fs.available < 268435456 ||
                n.fs.available < 3 * n.database.used ||
                n.fs.available < 2 * n.database.total,
              t =
                n.fs.available > 805306368 &&
                n.fs.available > 4 * n.database.used &&
                n.fs.available > 4 * n.database.total,
              a = !!e || (!t && null);
            null != a &&
              this.isLowDisk !== a &&
              ((this.isLowDisk = a), this.emitChange());
          }
        }
        constructor() {
          super(l.default, {
            APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
          }),
            (this.isLowDisk = !1),
            this.refresh(),
            this.waitFor(r.default),
            setInterval(() => this.refresh(), u);
        }
      }
      var c = new o();
    },
    625483: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ExtendedMemoryLru: function () {
            return s;
          },
        }),
        n("222007");
      var a = n("475838"),
        l = n("185496");
      class s {
        get totalLength() {
          return this.primary.length + this.extended.length;
        }
        get primaryCapacity() {
          return this.primary.capacity;
        }
        get extendedCapacity() {
          return this.extended.capacity;
        }
        clear() {
          this.primary.clear(), this.extended.clear();
        }
        has(e) {
          return this.primary.has(e);
        }
        hasExtended(e) {
          return this.primary.has(e) || this.extended.has(e);
        }
        get(e) {
          return this.primary.get(e);
        }
        put(e, t) {
          let n = this.primary.put(e, t);
          void 0 !== n && this.extended.put(n[0], n[1]);
        }
        delete(e) {
          let t = this.primary.delete(e),
            n = this.extended.delete(e);
          return this.upstreamItems(), t || n;
        }
        upstreamItems() {
          if (this.canUpstreamItems()) {
            for (let [e, t] of this.extended.entries())
              if (
                (this.primary.put(e, t),
                this.extended.delete(e),
                !this.canUpstreamItems())
              )
                break;
          }
        }
        canUpstreamItems() {
          return (
            this.primary.length < this.primary.capacity &&
            this.extended.length > 0
          );
        }
        entries() {
          return this.primary.entries();
        }
        keys() {
          return this.primary.keys();
        }
        values() {
          return this.primary.values();
        }
        allEntries() {
          return a.chain(this.extended.entries(), this.primary.entries());
        }
        allKeys() {
          return a.chain(this.extended.keys(), this.primary.keys());
        }
        allValues() {
          return a.chain(this.extended.values(), this.primary.values());
        }
        constructor(e, t) {
          (this.primary = new l.Lru(e)), (this.extended = new l.Lru(t));
        }
      }
    },
    475838: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          chain: function () {
            return l;
          },
        }),
        n("222007");
      class a {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          for (; this.index < this.items.length; ) {
            let e = this.items[this.index].next();
            if (!e.done) return e;
            this.index += 1;
          }
          return { done: !0, value: void 0 };
        }
        constructor(e) {
          (this.index = 0), (this.items = e);
        }
      }
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return new a(t);
      }
    },
    185496: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Lru: function () {
            return a;
          },
        }),
        n("222007");
      class a {
        get length() {
          return this.items.size;
        }
        get capacity() {
          return this.limit;
        }
        [Symbol.iterator]() {
          return this.items.entries();
        }
        entries() {
          return this.items.entries();
        }
        keys() {
          return this.items.keys();
        }
        values() {
          return this.items.values();
        }
        ordered() {
          return [...this.items.values()].reverse();
        }
        clear() {
          this.items.clear();
        }
        has(e) {
          return this.items.has(e);
        }
        get(e) {
          return this.items.get(e);
        }
        put(e, t) {
          if (
            (this.items.delete(e),
            this.items.set(e, t),
            !!(this.items.size > this.limit))
          ) {
            let e = this.oldestKey(),
              t = this.items.get(e);
            return this.items.delete(e), [e, t];
          }
        }
        delete(e) {
          return this.items.delete(e);
        }
        oldestKey() {
          let e = this.items.keys(),
            t = e.next();
          return t.value;
        }
        constructor(e) {
          (this.items = new Map()), (this.limit = e);
        }
      }
    },
    149022: function (e, t, n) {
      "use strict";
      function a() {
        return {
          textValue: "",
          richValue: [{ type: "line", children: [{ text: "" }] }],
        };
      }
      function l(e) {
        return { textValue: e, richValue: i(e) };
      }
      n.r(t),
        n.d(t, {
          createEmptyState: function () {
            return a;
          },
          createState: function () {
            return l;
          },
          toRichValue: function () {
            return i;
          },
          voidToOptionValue: function () {
            return r;
          },
        }),
        n("70102");
      let s = Object.freeze([
        Object.freeze({
          type: "line",
          children: Object.freeze([Object.freeze({ text: "" })]),
        }),
      ]);
      function i(e) {
        return "" !== e
          ? e.split("\n").map(e => ({ type: "line", children: [{ text: e }] }))
          : s;
      }
      function r(e) {
        switch (e.type) {
          case "userMention":
            return { type: "userMention", userId: e.userId };
          case "channelMention":
            return { type: "channelMention", channelId: e.channelId };
          case "staticRouteLink":
            return { type: "staticRouteLink", channelId: e.channelId };
          case "soundboard":
            return { type: "soundboard", soundId: e.soundId };
          case "roleMention":
            return { type: "roleMention", roleId: e.roleId };
          case "textMention":
            return { type: "textMention", text: e.name };
          case "emoji":
            return {
              type: "emoji",
              name: e.emoji.name,
              surrogate: e.emoji.surrogate,
            };
          case "customEmoji":
            return {
              type: "customEmoji",
              emojiId: e.emoji.emojiId,
              name: e.emoji.name,
              animated: e.emoji.animated,
            };
          case "testInlineVoid":
            throw Error("Unable to convert test types");
        }
        return null;
      }
    },
    125273: function (e, t, n) {
      "use strict";
      function a() {
        return {};
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
    },
    600798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InvalidKeywordError: function () {
            return r;
          },
          InvalidRegexPatternError: function () {
            return d;
          },
          AUTOMOD_ERROR_CODES: function () {
            return u;
          },
          getAutomodErrorMessageFromErrorResponse: function () {
            return o;
          },
          getAutomodErrorMessage: function () {
            return c;
          },
        }),
        n("70102"),
        n("222007");
      var a = n("979911"),
        l = n("42203"),
        s = n("49111"),
        i = n("782340");
      class r extends Error {}
      class d extends Error {}
      let u = new Set([
        s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED,
        s.AbortCodes.AUTOMOD_TITLE_BLOCKED,
        s.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
      ]);
      function o(e, t) {
        if (null == e) return null;
        let { code: n, message: a } = e;
        if (!u.has(n)) return null;
        if (null != a) return a;
        if (null == t) return null;
        let r = l.default.getChannel(t);
        return (null == r ? void 0 : r.isThread())
          ? i.default.Messages.THREAD_AUTOMOD_ERROR
          : ((null == r ? void 0 : r.isForumPost()) ||
                (null == r ? void 0 : r.isForumLikeChannel())) &&
              (n === s.AbortCodes.AUTOMOD_TITLE_BLOCKED ||
                n === s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED)
            ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR
            : null;
      }
      function c(e, t) {
        let n = o(t);
        return null != n
          ? n
          : null == e
            ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
            : (function (e) {
                let t = l.default.getChannel(e.message.channelId);
                return (0, a.isMessageDataEdit)(e)
                  ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE
                  : (null == t ? void 0 : t.isThread())
                    ? i.default.Messages.THREAD_AUTOMOD_ERROR
                    : (null == t ? void 0 : t.isForumPost()) ||
                        (null == t ? void 0 : t.isForumLikeChannel())
                      ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR
                      : i.default.Messages
                          .GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE;
              })(e);
      }
    },
    569808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("446674"),
        l = n("913144"),
        s = n("82339"),
        i = n("579033");
      let r = {},
        d = null;
      function u(e, t) {
        var n;
        let a =
          null !== (n = r[e]) && void 0 !== n
            ? n
            : { code: e, state: i.GuildTemplateStates.RESOLVING };
        t((a = { ...a })), (r = { ...r, [e]: a });
      }
      function o(e) {
        c(e.guildTemplate);
      }
      function c(e) {
        return u(e.code, t => {
          let n = (0, s.default)(e);
          for (let e in n) t[e] = n[e];
        });
      }
      function E(e) {
        return u(e.code, e => {
          e.state = i.GuildTemplateStates.EXPIRED;
        });
      }
      class f extends a.default.Store {
        getGuildTemplate(e) {
          return null != e ? r[e] : null;
        }
        getGuildTemplates() {
          return r;
        }
        getForGuild(e) {
          for (let t in r) {
            let n = r[t];
            if (
              "sourceGuildId" in n &&
              n.sourceGuildId === e &&
              n.state !== i.GuildTemplateStates.EXPIRED
            )
              return n;
          }
        }
        getDisplayedGuildTemplateCode() {
          return d;
        }
      }
      f.displayName = "GuildTemplateStore";
      var _ = new f(l.default, {
        GUILD_TEMPLATE_RESOLVE: function (e) {
          let { code: t } = e;
          r = {
            ...r,
            [t]: { code: t, state: i.GuildTemplateStates.RESOLVING },
          };
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: o,
        GUILD_TEMPLATE_SYNC_SUCCESS: o,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: o,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function (e) {
          let { guildTemplates: t } = e;
          t.forEach(e => c(e));
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: E,
        GUILD_TEMPLATE_DELETE_SUCCESS: E,
        GUILD_TEMPLATE_ACCEPT: function (e) {
          return u(e.code, e => {
            e.state = i.GuildTemplateStates.ACCEPTING;
          });
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
          return u(e.code, e => {
            var t;
            (e.state = i.GuildTemplateStates.ACCEPTED),
              (e.usageCount =
                (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
          });
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
          return u(e.code, e => {
            e.state = i.GuildTemplateStates.RESOLVED;
          });
        },
        GUILD_TEMPLATE_MODAL_SHOW: function (e) {
          d = e.code;
        },
        GUILD_TEMPLATE_MODAL_HIDE: function (e) {
          d = null;
        },
      });
    },
    52393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("773336");
      function l() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          l = window.GLOBAL_ENV.INVITE_HOST;
        return (
          (0, a.isAndroid)()
            ? ((l = location.host), (e = "/invite/".concat(t)))
            : (e = "/".concat(t)),
          ""
            .concat(n ? "".concat(location.protocol, "//") : "")
            .concat(l)
            .concat(e)
        );
      }
    },
    143291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LocalMessageBackgroundSendingExperiment: function () {
            return l;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_local_message_background_sending",
        label: "Send Messages In The Backgrounded",
        defaultConfig: { enableBackgroundSending: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Background Sending",
            config: { enableBackgroundSending: !0 },
          },
        ],
      });
    },
    379534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var a = {
        backgroundTaskIdentifierInvalid: -1,
        backgroundify: function (e, t) {
          return e;
        },
        startBackgroundTask: e => new Promise(e => e(-1)),
        endBackgroundTask: e => {},
      };
    },
    40566: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("811022"),
        l = n("446674"),
        s = n("913144"),
        i = n("125273"),
        r = n("618421"),
        d = n("42203"),
        u = n("525065"),
        o = n("985365"),
        c = n("599110"),
        E = n("49111");
      let f = new a.default("MessageRoundtripTrackerStore");
      function _(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
      }
      function g(e) {
        let t = d.default.getBasicChannel(e.channelId);
        if (null == t) {
          f.warn(
            "Ignoring a messageData for channel ".concat(
              e.channelId,
              " because we can't find that channel."
            )
          );
          return;
        }
        if (Math.random() > 0.1) return;
        let n =
            null == e.apiResponseTimestamp
              ? null
              : e.apiResponseTimestamp - e.initialSendTimestamp,
          a =
            null == e.gatewaySeenTimestamp
              ? null
              : e.gatewaySeenTimestamp - e.initialSendTimestamp,
          l = (0, r.getSignalStrength)();
        c.default.track(E.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
          ...(0, i.default)(),
          api_latency_ms: n,
          gateway_latency_ms: a,
          channel_id: t.id,
          channel_type: t.type,
          guild_id: t.guild_id,
          guild_size: u.default.getMemberCount(t.guild_id),
          mobile_network_type: o.default.getType(),
          ...(null != l && { mobile_signal_strength_level: l }),
        });
      }
      class h extends l.default.Store {
        recordMessageSendAttempt(e, t) {
          let n = {
            initialSendTimestamp: Date.now(),
            apiResponseTimestamp: null,
            gatewaySeenTimestamp: null,
            channelId: e,
          };
          this.pendingMessages.set(t, n),
            setTimeout(() => {
              let e = this.pendingMessages.get(t);
              null != e && (g(e), this.pendingMessages.delete(t));
            }, 3e4);
        }
        recordMessageSendApiResponse(e) {
          let t = this.pendingMessages.get(e);
          if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            _(n)
              ? (g(n), this.pendingMessages.delete(e))
              : this.pendingMessages.set(e, n);
          }
        }
        recordGatewayResponse(e) {
          let t = this.pendingMessages.get(e);
          if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            _(n)
              ? (g(n), this.pendingMessages.delete(e))
              : this.pendingMessages.set(e, n);
          }
        }
        constructor(...e) {
          super(...e), (this.pendingMessages = new Map());
        }
      }
      let m = new h(s.default, {
        MESSAGE_CREATE: function (e) {
          let { optimistic: t, message: n } = e,
            a = n.nonce;
          !t && null != a && m.recordGatewayResponse(a);
        },
      });
      var S = m;
    },
    994918: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var a = {
        init() {},
        donateSentMessage(e, t) {},
        deleteAllInteractions() {},
      };
    },
    815297: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          createNonce: function () {
            return o;
          },
          userRecordToServer: function () {
            return c;
          },
          default: function () {
            return E;
          },
          createBotMessage: function () {
            return f;
          },
        }),
        n("702976"),
        n("424973");
      var a = n("627445"),
        l = n.n(a),
        s = n("256572"),
        i = n("766274"),
        r = n("697218"),
        d = n("299039"),
        u = n("49111");
      function o() {
        return d.default.fromTimestamp(Date.now());
      }
      function c(e) {
        let {
          id: t,
          username: n,
          avatar: a,
          discriminator: l,
          bot: s,
          globalName: i,
        } = e;
        return {
          id: t,
          username: n,
          avatar: a,
          discriminator: l,
          bot: s,
          global_name: i,
        };
      }
      function E(e) {
        let {
            channelId: t,
            content: n,
            tts: a = !1,
            type: d = u.MessageTypes.DEFAULT,
            messageReference: E,
            allowedMentions: f,
            author: _,
            flags: g,
            nonce: h,
            poll: m,
          } = e,
          S = [];
        if (
          d === u.MessageTypes.REPLY &&
          (l(null != E, "Replies must have a message reference"),
          null == f || f.replied_user)
        ) {
          let e = s.default.getMessageByReference(E);
          (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED &&
            S.push(c(e.message.author));
        }
        return (
          null == _ && (_ = r.default.getCurrentUser()),
          _ instanceof i.default && (_ = c(_)),
          l(null != _, "createMessage: author cannot be undefined"),
          {
            id: null != h ? h : o(),
            type: d,
            content: n,
            channel_id: t,
            author: _,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: S,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: u.MessageStates.SENDING,
            tts: a,
            message_reference: E,
            flags: g,
            nonce: h,
            poll: m,
          }
        );
      }
      function f(e) {
        let {
          messageId: t,
          channelId: n,
          content: a,
          embeds: l,
          loggingName: s,
        } = e;
        return {
          id: null != t ? t : o(),
          type: u.MessageTypes.DEFAULT,
          flags: u.MessageFlags.EPHEMERAL,
          content: a,
          channel_id: n,
          author: {
            id: u.LOCAL_BOT_ID,
            username: "Clyde",
            discriminator: u.NON_USER_BOT_DISCRIMINATOR,
            avatar: "clyde",
            bot: !0,
          },
          attachments: [],
          embeds: null != l ? l : [],
          pinned: !1,
          mentions: [],
          mention_channels: [],
          mention_roles: [],
          mention_everyone: !1,
          timestamp: new Date().toISOString(),
          state: u.MessageStates.SENT,
          tts: !1,
          loggingName: s,
        };
      }
    },
    168730: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          logMessageSendFailure: function () {
            return s;
          },
        });
      var a = n("716241"),
        l = n("49111");
      function s(e) {
        var t, n;
        let s =
            null != e.fileItems
              ? (function (e) {
                  return e.map(e => {
                    var t;
                    return null !== (t = e.mimeType) && void 0 !== t
                      ? t
                      : "unknown";
                  });
                })(e.fileItems)
              : [],
          i = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
          r = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
        (0, a.trackWithMetadata)(l.AnalyticEvents.SEND_MESSAGE_FAILURE, {
          failure_code: r,
          error_message: i,
          attachment_mimetypes: s,
        });
      }
    },
    129953: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackGuildInviteNotificationAction: function () {
            return r;
          },
          trackGuildInviteNotificationDismissed: function () {
            return d;
          },
        });
      var a,
        l,
        s = n("716241"),
        i = n("49111");
      function r() {
        s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
          notification_type: "Reminder Notification",
          action: "Guild Invite",
          dismissed: !1,
        });
      }
      function d() {
        s.default.trackWithMetadata(i.AnalyticEvents.NOTIFICATION_CTA_CLICKED, {
          notification_type: "Reminder Notification",
          action: "Guild Invite",
          dismissed: !0,
        });
      }
      ((a || (a = {})).REMINDER_NOTIFICATION = "Reminder Notification"),
        ((l || (l = {})).GUILD_INVITE = "Guild Invite");
    },
    28007: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updatePoggermodeSettings: function () {
            return d;
          },
          updateCombo: function () {
            return u;
          },
          clearMessageCombo: function () {
            return o;
          },
          updateComboOnMessageSend: function () {
            return c;
          },
        });
      var a = n("913144"),
        l = n("271938"),
        s = n("880731"),
        i = n("943551"),
        r = n("767189");
      function d(e) {
        a.default.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e });
        let t = { ...s.default.getState(), ...e };
        (0, r.default)(t);
      }
      function u(e) {
        a.default.dispatch({ type: "POGGERMODE_UPDATE_COMBO", ...e });
      }
      function o(e) {
        a.default.dispatch({
          type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
          comboMessage: { ...e, displayed: !0 },
        });
      }
      function c(e, t) {
        var n;
        let s = l.default.getId(),
          r = i.default.getUserCombo(s, e);
        null != r &&
          a.default.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: {
              combo: r,
              channelId: e,
              messageId: t,
              displayed: !1,
            },
          });
        let d =
          null != r && (null == r ? void 0 : r.value) > 0
            ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n
                ? n
                : 0) + 1
            : 1;
        a.default.dispatch({
          type: "POGGERMODE_UPDATE_COMBO",
          channelId: e,
          userId: s,
          multiplier: d,
          value: 0,
        });
      }
    },
    39141: function (e, t, n) {
      "use strict";
      var a, l, s, i, r, d;
      n.r(t),
        n.d(t, {
          ConfettiLocation: function () {
            return a;
          },
          ShakeLocation: function () {
            return l;
          },
          ShakeLevel: function () {
            return s;
          },
          SHAKE_STEPS: function () {
            return o;
          },
          SHAKE_STEP_DIVIDER: function () {
            return c;
          },
        }),
        n("808653"),
        n("222007"),
        ((i = a || (a = {}))[(i.CHAT_INPUT = 0)] = "CHAT_INPUT"),
        (i[(i.REACTION = 1)] = "REACTION"),
        (i[(i.MEMBER_USER = 2)] = "MEMBER_USER"),
        (i[(i.CALL_TILE = 3)] = "CALL_TILE"),
        ((r = l || (l = {}))[(r.CHAT_INPUT = 0)] = "CHAT_INPUT"),
        (r[(r.VOICE_USER = 1)] = "VOICE_USER"),
        (r[(r.MENTION = 2)] = "MENTION"),
        ((d = s || (s = {}))[(d.LEVEL_1 = 0)] = "LEVEL_1"),
        (d[(d.LEVEL_2 = 1)] = "LEVEL_2"),
        (d[(d.LEVEL_3 = 2)] = "LEVEL_3"),
        (d[(d.LEVEL_4 = 3)] = "LEVEL_4"),
        (d[(d.LEVEL_5 = 4)] = "LEVEL_5");
      let u = {
          0: [
            [1, 1e-4],
            [25, 0.05],
            [50, 0.1],
            [100, 0.5],
            [250, 1],
            [500, 2],
            [1e3, 3],
            [9001, 4],
          ],
          1: [
            [1, 1e-4],
            [25, 0.25],
            [50, 0.5],
            [100, 1],
            [250, 2.5],
            [500, 5],
            [1e3, 7.5],
            [9001, 10],
          ],
          2: [
            [1, 0.001],
            [25, 0.5],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1e3, 12],
            [9001, 16],
          ],
          3: [
            [1, 0.25],
            [25, 0.75],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1e3, 20],
            [9001, 50],
          ],
          4: [
            [1, 0.001],
            [25, 0.5],
            [50, 1],
            [100, 2],
            [250, 5],
            [500, 10],
            [1e3, 100],
            [9001, 1e4],
          ],
        },
        o = Object.keys(u).reduce(
          (e, t) => ({
            ...e,
            [t]: u[t].map(e => {
              let [t] = e;
              return t;
            }),
          }),
          { 0: [], 1: [], 2: [], 3: [], 4: [] }
        ),
        c = Object.keys(u).reduce(
          (e, t) => ({
            ...e,
            [t]: u[t].map(e => {
              let [t, n] = e;
              return n;
            }),
          }),
          { 0: [], 1: [], 2: [], 3: [], 4: [] }
        );
    },
    880731: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("917351"),
        l = n("446674"),
        s = n("913144"),
        i = n("39141");
      let r = !1,
        d = {
          settingsVisible: !1,
          enabled: !1,
          combosEnabled: !0,
          combosRequiredCount: 5,
          comboSoundsEnabled: !0,
          screenshakeEnabled: !0,
          screenshakeEnabledLocations: {
            [i.ShakeLocation.CHAT_INPUT]: !0,
            [i.ShakeLocation.VOICE_USER]: !1,
            [i.ShakeLocation.MENTION]: !1,
          },
          shakeIntensity: 1,
          confettiEnabled: !0,
          confettiEnabledLocations: {
            [i.ConfettiLocation.CHAT_INPUT]: !0,
            [i.ConfettiLocation.REACTION]: !0,
            [i.ConfettiLocation.MEMBER_USER]: !0,
            [i.ConfettiLocation.CALL_TILE]: !0,
          },
          confettiSize: 16,
          confettiCount: 5,
          warningSeen: !1,
        },
        u = (0, a.cloneDeep)(d);
      class o extends l.default.DeviceSettingsStore {
        initialize(e) {
          u = { ...u, ...e };
        }
        getUserAgnosticState() {
          return u;
        }
        get settingsVisible() {
          return u.settingsVisible;
        }
        isEnabled() {
          let { confettiLocation: e, shakeLocation: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              null == e || (u.confettiEnabled && u.confettiEnabledLocations[e]),
            a =
              null == t ||
              (u.screenshakeEnabled && u.screenshakeEnabledLocations[t]);
          return this.settingsVisible && !r && u.enabled && n && a;
        }
        get shakeIntensity() {
          return this.isEnabled() ? u.shakeIntensity : 0;
        }
        get combosRequiredCount() {
          return this.isEnabled() ? u.combosRequiredCount : 0;
        }
        get screenshakeEnabled() {
          return u.screenshakeEnabled;
        }
        get screenshakeEnabledLocations() {
          return u.screenshakeEnabledLocations;
        }
        get combosEnabled() {
          return u.combosEnabled;
        }
        get comboSoundsEnabled() {
          return u.comboSoundsEnabled;
        }
      }
      (o.displayName = "PoggermodeSettingsStore"),
        (o.persistKey = "PoggermodeSettingsStore");
      var c = new o(s.default, {
        POGGERMODE_SETTINGS_UPDATE: function (e) {
          let { settings: t } = e;
          u = { ...u, ...t };
        },
        POGGERMODE_TEMPORARILY_DISABLED: function () {
          r = !0;
        },
      });
    },
    943551: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          shouldTrackMessage: function () {
            return S;
          },
          default: function () {
            return A;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("407846"),
        s = n("862337"),
        i = n("913144"),
        r = n("271938"),
        d = n("18494"),
        u = n("659500"),
        o = n("880731"),
        c = n("119035"),
        E = n("39141"),
        f = n("49111");
      let _ = new Set(),
        g = new l.default(
          function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
          },
          function (e) {
            let { userId: t, channelId: n } = e;
            return "".concat(n, "-").concat(t);
          }
        ),
        h = new l.default(
          function (e) {
            let {
              messageId: t,
              channelId: n,
              combo: { userId: a },
            } = e;
            return [t, n, a];
          },
          function (e) {
            let {
              messageId: t,
              channelId: n,
              combo: { userId: a },
            } = e;
            return "".concat(n, "-").concat(a, "-").concat(t);
          }
        ),
        m = e => {
          let { userId: t, channelId: n } = e;
          return "".concat(t, "-").concat(n);
        };
      function S(e, t, n, a) {
        if (e !== t) return !1;
        let l = null == n;
        return !(l || a.has(n)) && (a.add(n), !0);
      }
      class M extends a.default.Store {
        initialize() {
          this.waitFor(r.default, d.default);
        }
        getComboScore(e, t) {
          let n = g.get(m({ userId: e, channelId: t }));
          return null == n ? 0 : (0, c.getComboScore)(n);
        }
        getUserCombo(e, t) {
          return g.get(m({ userId: e, channelId: t }));
        }
        isComboing(e, t) {
          var n;
          let a = this.getUserCombo(e, t);
          return (
            null != a &&
            a.value >= o.default.combosRequiredCount &&
            null != (n = a) &&
            (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
          );
        }
        getMessageCombo(e) {
          var t;
          let n = h.get(e);
          return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t
            ? t
            : void 0;
        }
        getMostRecentMessageCombo(e) {
          let t = h.values(e);
          return t[t.length - 1];
        }
        getUserComboShakeIntensity(e, t, n, a) {
          let l = this.getUserCombo(e, t);
          return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0;
        }
      }
      M.displayName = "PoggermodeStore";
      let p = new M(i.default, {
        POGGERMODE_UPDATE_COMBO: function (e) {
          let { type: t, ...n } = e;
          if (!o.default.isEnabled()) return !1;
          !(function e(t) {
            var n, a, l, i, r, d;
            let u =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              o = g.get(m(t)),
              c = {
                ...o,
                ...t,
                value:
                  null !==
                    (a =
                      null !== (n = t.value) && void 0 !== n
                        ? n
                        : null == o
                          ? void 0
                          : o.value) && void 0 !== a
                    ? a
                    : 0,
                multiplier: Math.min(
                  null !==
                    (i =
                      null !== (l = t.multiplier) && void 0 !== l
                        ? l
                        : null == o
                          ? void 0
                          : o.multiplier) && void 0 !== i
                    ? i
                    : 1,
                  7
                ),
                decayInterval:
                  null !== (r = null == o ? void 0 : o.decayInterval) &&
                  void 0 !== r
                    ? r
                    : new s.Interval(),
              };
            g.set(m(t), c),
              u &&
                (null === (d = c.decayInterval) ||
                  void 0 === d ||
                  d.start(1e3, () => {
                    let t = g.get(m(c));
                    if (null != t) {
                      let a =
                        c.multiplier !== t.multiplier && c.value !== t.value;
                      if (t.value <= 0 || a) {
                        var n;
                        null === (n = t.decayInterval) ||
                          void 0 === n ||
                          n.stop(),
                          t.value <= 0 &&
                            (e({ ...t, value: 0, multiplier: 1 }),
                            p.emitChange());
                      } else e({ ...t, value: t.value - 1 }), p.emitChange();
                    }
                  }));
          })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
          var t;
          let { comboMessage: n } = e;
          if (!o.default.isEnabled()) return !1;
          (t = n), h.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
          var t, n;
          let {
            channelId: a,
            message: { mentions: l, author: s, nonce: i },
          } = e;
          if (!o.default.isEnabled()) return !1;
          let d = r.default.getId();
          if (!S(null == s ? void 0 : s.id, d, i, _)) return !1;
          let h = g.get(
            m({
              userId:
                null !== (t = null == s ? void 0 : s.id) && void 0 !== t
                  ? t
                  : "???",
              channelId: a,
            })
          );
          if (
            o.default.screenshakeEnabled &&
            o.default.screenshakeEnabledLocations[E.ShakeLocation.MENTION] &&
            null != l &&
            null != l.find(e => e.id === d)
          ) {
            let e =
              null != h
                ? null !==
                    (n = (0, c.getComboShakeIntensity)(
                      h,
                      E.ShakeLevel.LEVEL_4
                    )) && void 0 !== n
                  ? n
                  : 0.001
                : 4 * Math.random();
            return (
              u.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
                duration: 1e3,
                intensity: e,
              }),
              !0
            );
          }
          return !1;
        },
      });
      var A = p;
    },
    119035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getComboShakeIntensity: function () {
            return i;
          },
          getComboPercentage: function () {
            return o;
          },
          getComboStyles: function () {
            return c;
          },
          getComboScore: function () {
            return E;
          },
        }),
        n("222007"),
        n("808653");
      var a = n("39141"),
        l = n("49111");
      let s = function (e, t) {
          let { multiplier: n, value: a } = e,
            [l, s] = t,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r = a * n;
          if (r <= 0) return 0;
          let d = l.reduce((e, t, n) => {
            if (r > t) {
              let e = s[n];
              if (n + 1 === l.length) return s[n];
              let a = l[n + 1],
                i = s[n + 1];
              return ((r - t) / (a - t)) * (i - e) + e;
            }
            return r === t ? s[n] : e;
          }, 0);
          return Math.min(i, d);
        },
        i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.ShakeLevel.LEVEL_3;
          return s(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5);
        },
        r = [
          [1, 0.001],
          [25, 0.3],
          [100, 0.5],
          [250, 0.8],
          [500, 0.9],
          [2500, 0.95],
          [9001, 1],
        ],
        d = r.map(e => {
          let [t] = e;
          return t;
        }),
        u = r.map(e => {
          let [t, n] = e;
          return n;
        }),
        o = e => s(e, [d, u], 1),
        c = e =>
          1 === e
            ? { color: l.Color.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: l.Color.GREEN_360 }
              : 4 === e || 5 === e
                ? { color: l.Color.YELLOW_300, square: !0 }
                : 6 === e
                  ? { color: l.Color.RED_400, square: !0 }
                  : { color: l.Color.ORANGE_345, flair: !0 };
      function E(e) {
        var t;
        return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1);
      }
    },
    767189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("917351"),
        l = n.n(a),
        s = n("599110"),
        i = n("39141"),
        r = n("49111");
      function d(e) {
        switch (e) {
          case i.ShakeLocation.CHAT_INPUT:
            return "chat_input";
          case i.ShakeLocation.MENTION:
            return "mention";
          case i.ShakeLocation.VOICE_USER:
            return "voice_user";
        }
      }
      function u(e) {
        switch (e) {
          case i.ConfettiLocation.CHAT_INPUT:
            return "chat_input";
          case i.ConfettiLocation.MEMBER_USER:
            return "member_user";
          case i.ConfettiLocation.REACTION:
            return "reaction";
          case i.ConfettiLocation.CALL_TILE:
            return "call_tile";
        }
      }
      function o(e, t) {
        return Object.entries(e)
          .filter(e => {
            let [t, n] = e;
            return n;
          })
          .map(e => {
            let [n] = e;
            return t(Number.parseInt(n));
          });
      }
      let c = l.throttle(e => {
        let {
          enabled: t,
          combosEnabled: n,
          combosRequiredCount: a,
          screenshakeEnabled: l,
          shakeIntensity: i,
          screenshakeEnabledLocations: c,
          confettiEnabled: E,
          confettiSize: f,
          confettiCount: _,
          confettiEnabledLocations: g,
        } = e;
        s.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
          enabled: t,
          combos_enabled: n,
          combos_required_count: a,
          screenshake_enabled: l,
          shake_intensity: i,
          screenshake_enabled_locations: o(c, d),
          confetti_enabled: E,
          confetti_size: f,
          confetti_count: _,
          confetti_enabled_locations: o(g, u),
        });
      }, 5e3);
      var E = c;
    },
    83995: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PollsExperiment: function () {
            return l;
          },
          PollsUserExperiment: function () {
            return s;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
          kind: "guild",
          id: "2023-09_guild_polls",
          label: "Polls",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enables creation of polls within a guild",
              config: { enabled: !0 },
            },
          ],
        }),
        s = (0, a.createExperiment)({
          kind: "user",
          id: "2023-10_poll_users",
          label: "Polls User Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Enables poll messages", config: { enabled: !0 } },
          ],
        });
    },
    562228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          generateEmptyPollAnswer: function () {
            return c;
          },
          filterOutUUID: function () {
            return E;
          },
          hasNonVoteReactions: function () {
            return f;
          },
          useCanPostPollsInChannel: function () {
            return _;
          },
          isAnswerFilled: function () {
            return g;
          },
          isIncompleteAnswer: function () {
            return h;
          },
          createPollServerDataFromCreateRequest: function () {
            return m;
          },
        }),
        n("781738"),
        n("222007");
      var a = n("748820"),
        l = n("446674"),
        s = n("418009"),
        i = n("957255"),
        r = n("697218"),
        d = n("718517"),
        u = n("83995"),
        o = n("49111");
      function c() {
        return {
          text: void 0,
          image: void 0,
          localCreationAnswerId: (function () {
            return (0, a.v4)();
          })(),
        };
      }
      function E(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
      }
      function f(e) {
        for (let t of e.reactions) if (null == t.me_vote) return !0;
        return !1;
      }
      function _(e) {
        let { enabled: t } = u.PollsExperiment.useExperiment({
            guildId: e.guild_id,
            location: "useCanPostPollsInChannel",
          }),
          n = (0, l.useStateFromStoresArray)(
            [r.default],
            () => {
              var t, n;
              return null !==
                (n =
                  null === (t = e.recipients) || void 0 === t
                    ? void 0
                    : t.map(r.default.getUser)) && void 0 !== n
                ? n
                : [];
            },
            [e.recipients]
          );
        return (
          !!o.ChannelTypesSets.POLLS.has(e.type) &&
          (e.isPrivate()
            ? n.every(e => (null == e ? void 0 : e.isStaff()) === !0)
            : t && i.default.can(o.Permissions.SEND_MESSAGES, e))
        );
      }
      function g(e, t) {
        return t === s.PollLayoutTypes.IMAGE_ONLY_ANSWERS
          ? null != e.image
          : null != e.text && e.text.length > 0;
      }
      function h(e, t) {
        return (
          t === s.PollLayoutTypes.DEFAULT &&
          null != e.image &&
          (null == e.text || 0 === e.text.length)
        );
      }
      function m(e) {
        var t, n;
        if (null == e) return;
        let a =
          null == e
            ? void 0
            : null === (t = e.answers) || void 0 === t
              ? void 0
              : t.map((e, t) => {
                  var n, a, l;
                  let s =
                      null === (n = e.poll_media) || void 0 === n
                        ? void 0
                        : n.emoji,
                    i = {
                      ...e.poll_media,
                      emoji:
                        null != s
                          ? {
                              id:
                                null !== (a = s.id) && void 0 !== a ? a : null,
                              name:
                                null !== (l = s.name) && void 0 !== l ? l : "",
                            }
                          : void 0,
                    };
                  return { ...e, answer_id: t + 1, poll_media: i };
                });
        let l =
          (null == e ? void 0 : e.duration) != null
            ? ((n = e.duration),
              new Date(Date.now() + n * d.default.Millis.HOUR).toISOString())
            : "0";
        return { ...e, expiry: l, answers: a };
      }
    },
    793277: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("450911"),
        l = n("42203"),
        s = n("724210");
      function i(e) {
        if (e !== s.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
        let t = l.default.getChannel(e);
        return null == t ? null : a.default.ensurePrivateChannel(t.recipients);
      }
    },
    685841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("446674"),
        l = n("913144"),
        s = n("377253");
      let i = {},
        r = {},
        d = {};
      function u(e) {
        if (null == e) return !1;
        let t = r[e];
        if (null == t) return !1;
        let n = s.default.getMessage(e, t.messageId);
        if (null == n) return !1;
        (i[e] = {
          channel: t.channel,
          message: n,
          shouldMention: t.shouldMention,
          showMentionToggle: t.showMentionToggle,
        }),
          delete r[e];
      }
      function o() {
        (i = {}), (r = {}), (d = {});
      }
      class c extends a.default.Store {
        initialize() {
          this.waitFor(s.default);
        }
        getPendingReply(e) {
          return i[e];
        }
        getPendingReplyActionSource(e) {
          return d[e];
        }
      }
      c.displayName = "PendingReplyStore";
      var E = new c(l.default, {
        CREATE_PENDING_REPLY: function (e) {
          let {
            channel: t,
            message: n,
            shouldMention: a = !0,
            showMentionToggle: l = !0,
            source: s,
          } = e;
          (i[t.id] = {
            channel: t,
            message: n,
            shouldMention: a,
            showMentionToggle: l,
          }),
            (d[t.id] = s);
        },
        CREATE_SHALLOW_PENDING_REPLY: function (e) {
          let {
            channel: t,
            messageId: n,
            shouldMention: a = !0,
            showMentionToggle: l = !0,
          } = e;
          r[t.id] = {
            channel: t,
            messageId: n,
            shouldMention: a,
            showMentionToggle: l,
          };
        },
        SET_PENDING_REPLY_SHOULD_MENTION: function (e) {
          let { channelId: t, shouldMention: n } = e;
          t in i && (i[t] = { ...i[t], shouldMention: n }),
            t in r && (r[t] = { ...r[t], shouldMention: n });
        },
        DELETE_PENDING_REPLY: function (e) {
          let { channelId: t } = e;
          delete i[t], delete r[t];
        },
        CONNECTION_OPEN: o,
        LOGOUT: o,
        MESSAGE_DELETE: function (e) {
          var t, n, a;
          let { id: l, channelId: s } = e;
          if (
            (null === (n = i[s]) || void 0 === n
              ? void 0
              : null === (t = n.message) || void 0 === t
                ? void 0
                : t.id) === l
          )
            delete i[s], delete d[s];
          else {
            if (
              (null === (a = r[s]) || void 0 === a ? void 0 : a.messageId) !== l
            )
              return !1;
            delete r[s], delete d[s];
          }
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          u(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
          let { channelId: t } = e;
          u(t);
        },
      });
    },
    836417: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("446674"),
        l = n("913144"),
        s = n("149022"),
        i = n("884351"),
        r = n("845579"),
        d = n("377253");
      let u = {},
        o = {};
      class c extends a.default.Store {
        isEditing(e, t) {
          var n;
          return (
            (null === (n = u[e]) || void 0 === n ? void 0 : n.messageId) === t
          );
        }
        isEditingAny(e) {
          return null != u[e];
        }
        getEditingTextValue(e) {
          var t;
          return null === (t = u[e]) || void 0 === t ? void 0 : t.textValue;
        }
        getEditingRichValue(e) {
          var t;
          return null === (t = u[e]) || void 0 === t ? void 0 : t.richValue;
        }
        getEditingMessageId(e) {
          var t;
          return null === (t = u[e]) || void 0 === t ? void 0 : t.messageId;
        }
        getEditingMessage(e) {
          let t = u[e];
          return null != t && null != t.messageId
            ? d.default.getMessage(e, t.messageId)
            : null;
        }
        getEditActionSource(e) {
          return o[e];
        }
      }
      c.displayName = "EditMessageStore";
      var E = new c(l.default, {
        MESSAGE_START_EDIT: function (e) {
          let { channelId: t, messageId: n, content: a, source: l } = e,
            d = r.UseLegacyChatInput.getSetting(),
            c = i.default.unparse(a, t);
          (u[t] = {
            channelId: t,
            messageId: n,
            textValue: c,
            richValue: (0, s.toRichValue)(d ? c : a),
          }),
            (o[t] = l);
        },
        MESSAGE_UPDATE_EDIT: function (e) {
          let { channelId: t, textValue: n, richValue: a } = e,
            l = u[t];
          if (null == l) return !1;
          u[t] = { ...l, textValue: n, richValue: a };
        },
        MESSAGE_END_EDIT: function (e) {
          let { channelId: t } = e;
          if (null == t || null == u[t]) return !1;
          delete u[t], delete o[t];
        },
      });
    },
    401848: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SlowmodeType: function () {
            return a;
          },
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a,
        l,
        s = n("446674"),
        i = n("862337"),
        r = n("913144"),
        d = n("718517"),
        u = n("42203"),
        o = n("957255"),
        c = n("49111");
      ((l = a || (a = {}))[(l.SendMessage = 0)] = "SendMessage"),
        (l[(l.CreateThread = 1)] = "CreateThread");
      let E = { 0: {}, 1: {} };
      function f(e, t, n) {
        if (
          ((function (e, t) {
            null != E[t][e.id] && (E[t][e.id].timer.stop(), delete E[t][e.id]);
          })(e, t),
          (function (e, t) {
            return 0 === t
              ? o.default.can(c.Permissions.MANAGE_CHANNELS, e) ||
                  o.default.can(c.Permissions.MANAGE_MESSAGES, e)
              : o.default.can(c.Permissions.MANAGE_THREADS, e);
          })(e, t) || n <= 0)
        )
          return;
        let a = n + Date.now();
        (E[t][e.id] = {
          rateLimitPerUser: e.rateLimitPerUser,
          cooldownMs: n,
          cooldownEndTimestamp: a,
          timer: new i.Timeout(),
        }),
          E[t][e.id].timer.start(
            1e3,
            () => {
              r.default.dispatch({
                type: "SLOWMODE_SET_COOLDOWN",
                channelId: e.id,
                slowmodeType: t,
                cooldownMs: Math.max(a - Date.now(), 0),
              });
            },
            !0
          );
      }
      function _(e, t) {
        let n = u.default.getChannel(e);
        if (null == n) return !1;
        f(
          n,
          t,
          0 === n.rateLimitPerUser
            ? 0
            : n.rateLimitPerUser * d.default.Millis.SECOND + 100
        );
      }
      function g(e) {
        let { file: t } = e,
          n = u.default.getChannel(t.channelId);
        return null != n && f(n, 0, 0);
      }
      class h extends s.default.Store {
        initialize() {
          this.waitFor(u.default);
        }
        getSlowmodeCooldownGuess(e, t) {
          let n = E[null != t ? t : 0][e];
          return null != n ? n.cooldownMs : 0;
        }
      }
      h.displayName = "SlowmodeStore";
      var m = new h(r.default, {
        SLOWMODE_RESET_COOLDOWN: function (e) {
          let { channelId: t, slowmodeType: n } = e;
          return _(t, n);
        },
        SLOWMODE_SET_COOLDOWN: function (e) {
          let { channelId: t, slowmodeType: n, cooldownMs: a } = e,
            l = u.default.getChannel(t);
          if (null == l) return !1;
          f(l, n, 0 === a ? 0 : a + 100);
        },
        UPLOAD_START: function (e) {
          let { channelId: t } = e;
          return _(t, 0);
        },
        UPLOAD_FAIL: g,
        UPLOAD_CANCEL_REQUEST: g,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          [0, 1].forEach(e => {
            for (let a of t) {
              var n;
              let t = E[e][a.id],
                l = a.rateLimitPerUser;
              if (null == t || t.rateLimitPerUser === l) continue;
              let s = Math.min(
                null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n
                  ? n
                  : 0,
                l * d.default.Millis.SECOND
              );
              f(a, e, s);
            }
          });
        },
        LOGOUT: function () {
          [0, 1].forEach(e => {
            Object.keys(E[e]).forEach(t => E[e][t].timer.stop()), (E[e] = {});
          });
        },
      });
    },
    418009: function (e, t, n) {
      "use strict";
      var a, l;
      n.r(t),
        n.d(t, {
          PollLayoutTypes: function () {
            return a;
          },
        }),
        ((l = a || (a = {}))[(l.UNKNOWN = 0)] = "UNKNOWN"),
        (l[(l.DEFAULT = 1)] = "DEFAULT"),
        (l[(l.IMAGE_ONLY_ANSWERS = 2)] = "IMAGE_ONLY_ANSWERS");
    },
  },
]);
//# sourceMappingURL=31717.09972030660f4c8f28ed.js.map