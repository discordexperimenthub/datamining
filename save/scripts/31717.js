(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31717"],
  {
    819689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return em;
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
        u = n("408062"),
        d = n("979911"),
        o = n("716241"),
        c = n("802493"),
        E = n("595525"),
        _ = n("219788"),
        f = n("139514"),
        g = n("312016"),
        S = n("605250"),
        h = n("447435"),
        m = n("619443"),
        T = n("582415"),
        M = n("600798"),
        A = n("569808"),
        p = n("9294"),
        I = n("52393"),
        C = n("143291"),
        L = n("379534"),
        D = n("40566"),
        O = n("994918"),
        v = n("815297"),
        N = n("168730"),
        R = n("129953"),
        y = n("28007"),
        U = n("880731"),
        b = n("562228"),
        P = n("793277"),
        G = n("815496");
      n("685841");
      var w = n("256572"),
        k = n("364685"),
        B = n("804888"),
        F = n("263024"),
        V = n("410912"),
        H = n("373469"),
        x = n("271938"),
        W = n("42203");
      n("836417");
      var K = n("337543"),
        Y = n("377253"),
        Q = n("957255"),
        j = n("824563"),
        X = n("660478"),
        q = n("18494"),
        J = n("162771"),
        z = n("401848"),
        Z = n("697218"),
        $ = n("599110"),
        ee = n("718517"),
        et = n("568734"),
        en = n("659632"),
        ea = n("701909"),
        el = n("719923"),
        es = n("299039"),
        ei = n("404118"),
        er = n("49111"),
        eu = n("724210"),
        ed = n("579033"),
        eo = n("782340");
      let ec = new S.default("MessageActionCreators"),
        eE = new S.default("MessageQueue"),
        e_ = !1;
      class ef {
        markComplete() {
          this.completed = !0;
        }
        constructor() {
          this.completed = !1;
        }
      }
      function eg(e) {
        let {
            inviteKey: t,
            channelId: n,
            messageId: a,
            location: l,
            suggested: s = null,
            overrideProperties: i = {},
          } = e,
          r = (0, p.parseExtraDataFromInviteKey)(t),
          u = W.default.getChannel(n);
        if (null != u) {
          let e = null;
          u.isMultiUserDM()
            ? (e = er.LoggingInviteTypes.GDM_INVITE)
            : !u.isPrivate() && (e = er.LoggingInviteTypes.SERVER_INVITE);
          let n = {},
            c = K.default.getInvite(t);
          if (
            null != c &&
            c.state === er.InviteStates.RESOLVED &&
            null != c.channel
          ) {
            var d;
            let t = c.channel;
            (n.invite_channel_id = t.id),
              (n.invite_guild_id =
                null === (d = c.guild) || void 0 === d ? void 0 : d.id),
              (n.invite_channel_type = t.type),
              null != c.inviter && (n.invite_inviter_id = c.inviter.id);
            let a = H.default.getLastActiveStream();
            if (null != a && a.channelId === t.id) {
              (e = er.LoggingInviteTypes.STREAM),
                (n.destination_user_id = a.ownerId);
              let t = (0, T.getStreamerApplication)(a, j.default);
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
              guild_id: u.getGuildId(),
              channel_id: u.id,
              message_id: a,
              send_type: er.SendTypes.DIRECT_MESSAGE,
              invite_guild_scheduled_event_id: r.guildScheduledEventId,
              ...i,
            }),
            o.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, n);
        } else {
          let e = {},
            n = K.default.getInvite(t);
          null != n &&
            n.state === er.InviteStates.RESOLVED &&
            null != n.inviter &&
            ((e.invite_inviter_id = n.inviter.id),
            (e = {
              ...e,
              location: l,
              invite_type: er.LoggingInviteTypes.FRIEND_INVITE,
              invite_code: r.baseCode,
              message_id: a,
              send_type: er.SendTypes.DIRECT_MESSAGE,
              invite_guild_scheduled_event_id: r.guildScheduledEventId,
              ...i,
            }),
            o.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, e));
        }
      }
      let eS = {
          [er.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () =>
              eo.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION,
          },
          [er.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: () =>
              eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                helpUrl: ea.default.getArticleURL(
                  er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                ),
              }),
          },
          [er.AbortCodes.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eo.default.Messages.BOT_DM_RATE_LIMITED,
          },
          [er.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () =>
              eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED,
          },
          [er.AbortCodes.SLOWMODE_RATE_LIMITED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () =>
              eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED,
          },
        },
        eh = {
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
                er.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED,
                { message_author: "Clyde", message_name: n }
              ),
              eh.receiveMessage(
                e,
                (0, v.createBotMessage)({
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
              l = W.default.getChannel(e);
            if (null != l) {
              if (a === er.AbortCodes.SLOWMODE_RATE_LIMITED)
                (t = eo.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                  seconds: l.rateLimitPerUser,
                })),
                  (n = "SLOWMODE_RATE_LIMITED");
              else if (a === er.AbortCodes.INVALID_MESSAGE_SEND_USER)
                (t =
                  eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: ea.default.getArticleURL(
                      er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                    ),
                  })),
                  (n = "INVALID_MESSAGE_SEND_USER");
              else if (a === er.AbortCodes.TOO_MANY_THREADS) {
                let e = l.isForumLikeChannel() || l.isForumPost();
                (t = e
                  ? eo.default.Messages.BOT_DM_TOO_MANY_POSTS
                  : eo.default.Messages.BOT_DM_TOO_MANY_THREADS),
                  (n = "TOO_MANY_THREADS");
              } else
                a === er.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS
                  ? ((t =
                      eo.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS),
                    (n = "TOO_MANY_ANNOUNCEMENT_THREADS"))
                  : a === er.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED
                    ? ((t =
                        eo.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format(
                          { helpUrl: er.MarketingURLs.HARMFUL_LINKS }
                        )),
                      (n = "HARMFUL_LINK_MESSAGE_BLOCKED"))
                    : a in eS
                      ? ((n = eS[a].messageName), (t = eS[a].messageGetter()))
                      : ((t =
                          eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format(
                            {
                              helpUrl: ea.default.getArticleURL(
                                er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED
                              ),
                            }
                          )),
                        (n = "SEND_FAILED (".concat(a, ")")));
              eh.sendBotMessage(e, t, n);
            }
          },
          sendExplicitMediaClydeError(e, t, n) {
            let l = W.default.getChannel(e);
            if (null == l) return;
            let { message: s, messageName: i } = (0, a.match)({
                isDM: l.isDM(),
                isGDM: l.isGroupDM(),
              })
                .with({ isDM: !0 }, () => ({
                  message:
                    eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                  messageName: "BOT_DM_EXPLICIT_CONTENT",
                }))
                .with({ isDM: !1, isGDM: !0 }, () => ({
                  message:
                    eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                  messageName: "BOT_GDM_EXPLICIT_CONTENT",
                }))
                .otherwise(() => ({
                  message:
                    eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                  messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                })),
              u = (0, v.createNonce)();
            eh.sendBotMessage(e, s, i, u),
              (0, h.trackMediaRedactionAction)({
                action:
                  h.TrackMediaRedactionActionType
                    .EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                messageId: u,
                channelId: e,
                context: n,
              }),
              null != t &&
                t.length > 0 &&
                r.default.dispatch({
                  type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                  messageId: u,
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
            eh.trackJump(e, null, "Present");
            let n = { present: !0 };
            Y.default.hasPresent(e)
              ? r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  jump: n,
                  channelId: e,
                  limit: t,
                })
              : eh.fetchMessages({ channelId: e, limit: t, jump: n });
          },
          trackJump(e, t, n, a) {
            o.default.trackWithMetadata(er.AnalyticEvents.JUMP, {
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
              returnMessageId: u,
              skipLocalFetch: d,
              jumpType: o,
            } = e;
            return (
              "string" == typeof s && eh.trackJump(t, n, s, i),
              eh.fetchMessages({
                channelId: t,
                limit: er.MAX_MESSAGES_FOR_JUMP,
                jump: {
                  messageId: n,
                  flash: a,
                  offset: l,
                  returnMessageId: u,
                  jumpType: o,
                },
                isPreload: r,
                skipLocalFetch: d,
              })
            );
          },
          focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eh.fetchMessages({
              channelId: t,
              limit: er.MAX_MESSAGES_FOR_JUMP,
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
                focus: d,
                isPreload: o,
                skipLocalFetch: c,
                truncate: E,
              } = e,
              _ = W.default.getChannel(t),
              f = m.default.isConnectedOrOverlay(),
              g = Date.now();
            if (null != _ && _.type === er.ChannelTypes.GUILD_STORE) return !1;
            if (t === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
            if (
              (ec.log(
                "Fetching messages for "
                  .concat(t, " between ")
                  .concat(n, " and ")
                  .concat(a, ". jump=")
                  .concat(JSON.stringify(i))
              ),
              eh._tryFetchMessagesCached({
                channelId: t,
                before: n,
                after: a,
                limit: l,
                jump: i,
                focus: d,
                truncate: E,
              }))
            )
              return;
            V.default.fetchMessages.recordStart();
            let S = null != i ? i : void 0;
            null == S && null != d && (S = { ...d });
            let h = u.default.getOrCreate(t),
              T = h.loadStart(S);
            u.default.commit(T), r.default.dispatch({ type: "LOAD_MESSAGES" });
            let M = null == S ? void 0 : S.messageId,
              A = new ef();
            return (
              !c && this.fetchLocalMessages(t, n, a, l, A),
              s.default
                .get({
                  url: er.Endpoints.MESSAGES(t),
                  query: {
                    before: n,
                    after: a,
                    limit: l,
                    around: M,
                    preload: o,
                  },
                  retries: 2,
                  oldFormErrors: !0,
                })
                .then(
                  e => (
                    V.default.fetchMessages.recordEnd(),
                    V.default.dispatchMessages.measure(() => {
                      let s = e.body,
                        u = null != n,
                        d = null != a,
                        o = null == n && null == a,
                        c = null != M || (s.length === l && (u || o)),
                        _ = null != M || (d && s.length === l);
                      if (null != M) {
                        let e = Math.floor(l / 2),
                          n = [
                            M,
                            ...s.map(e => {
                              let { id: t } = e;
                              return t;
                            }),
                          ]
                            .filter((e, t, n) => n.indexOf(e) === t)
                            .sort(es.default.compare),
                          a = n.indexOf(M);
                        if (
                          (a < e && (c = !1),
                          s.length - a < e && (_ = !1),
                          _ && s.length > 0)
                        ) {
                          let e = X.default.lastMessageId(t);
                          s[0].id === e && (_ = !1);
                        }
                      }
                      ec.log(
                        "Fetched "
                          .concat(s.length, " messages for ")
                          .concat(t, " isBefore:")
                          .concat(u, " isAfter:")
                          .concat(d)
                      ),
                        A.markComplete(),
                        r.default.dispatch({
                          type: "LOAD_MESSAGES_SUCCESS",
                          channelId: t,
                          messages: s,
                          isBefore: u,
                          isAfter: d,
                          hasMoreBefore: c,
                          hasMoreAfter: _,
                          limit: l,
                          jump: i,
                          isStale:
                            !f || m.default.lastTimeConnectedChanged() >= g,
                          truncate: E,
                        });
                    }),
                    !0
                  ),
                  () => (
                    ec.log("Failed to fetch messages for ".concat(t)),
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
            let s = W.default.getBasicChannel(e),
              i = u.default.getOrCreate(e),
              d = c.default.database();
            if (null == d || null == s || null != t || null != n) {
              V.default.addLocalMessages(e, -1);
              return;
            }
            if (i.ready && !i.cached) {
              V.default.addLocalMessages(e, -2);
              return;
            }
            let o = await (0, E.tryLoadAsync)(() => _.default.load(d, e, a));
            if (null == o) {
              V.default.addLocalMessages(e, -3);
              return;
            }
            if (
              (ec.log(
                "fetched "
                  .concat(
                    o.messages.length,
                    " messages from local database (channel_id: "
                  )
                  .concat(e, ", remote_fetch_completed: ")
                  .concat(l.completed, ")")
              ),
              V.default.addLocalMessages(e, o.messages.length),
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
            let a = W.default.getBasicChannel(e),
              l = c.default.database();
            if (null == l || null == a) return;
            let s = u.default.getOrCreate(e);
            if (s.hasMoreAfter) return;
            let i = await (0, E.tryLoadAsync)(() => _.default.load(l, e, t));
            if (null == i) return;
            s = u.default.getOrCreate(e);
            let d = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
              o =
                null == d
                  ? i.messages
                  : i.messages.filter(e => es.default.compare(e.id, d) > 0);
            ec.log(
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
                truncate: u,
              } = e,
              d = Y.default.getMessages(t);
            if (d.cached || !d.ready) return !1;
            if (
              (null == s ? void 0 : s.messageId) != null ||
              (null == i ? void 0 : i.messageId) != null
            ) {
              if (
                (null == s ? void 0 : s.messageId) != null &&
                d.has(s.messageId, !1)
              )
                return (
                  r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    jump: s,
                    limit: l,
                    truncate: u,
                  }),
                  !0
                );
              if ((null == i ? void 0 : i.messageId) != null) {
                if (d.has(i.messageId, !1))
                  return (
                    r.default.dispatch({
                      type: "LOAD_MESSAGES_SUCCESS_CACHED",
                      channelId: t,
                      focus: i,
                      limit: l,
                      truncate: u,
                    }),
                    !0
                  );
                s = { ...i };
              }
              let e =
                  (null == s ? void 0 : s.messageId) != null
                    ? es.default.extractTimestamp(
                        null == s ? void 0 : s.messageId
                      )
                    : 0,
                n = d.first(),
                a = d.last();
              if (
                (!d.hasMoreBefore &&
                  null != n &&
                  es.default.extractTimestamp(n.id) >= e) ||
                (!d.hasMoreAfter &&
                  null != a &&
                  es.default.extractTimestamp(a.id) <= e) ||
                (null != n &&
                  null != a &&
                  es.default.extractTimestamp(n.id) < e &&
                  es.default.extractTimestamp(a.id) > e)
              )
                return (
                  r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    jump: s,
                    limit: er.MAX_MESSAGES_FOR_JUMP,
                  }),
                  !0
                );
            } else if (null != n && d.hasBeforeCached(n))
              return (
                r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  channelId: t,
                  before: n,
                  limit: l,
                  truncate: u,
                }),
                !0
              );
            else if (null != a && d.hasAfterCached(a))
              return (
                r.default.dispatch({
                  type: "LOAD_MESSAGES_SUCCESS_CACHED",
                  channelId: t,
                  after: a,
                  limit: l,
                  truncate: u,
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
            let s = await (0, P.default)(e);
            if (null != s) return eh.sendMessage(s, t, a, l);
            let i = () => eh._sendMessage(e, t, l),
              r = C.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                location: "8e1e29_1",
              }).enableBackgroundSending
                ? L.default.backgroundify(i, void 0)
                : i,
              u =
                null !== (n = l.nonce) && void 0 !== n
                  ? n
                  : (0, v.createNonce)();
            return ((l = { ...l, nonce: u }),
            D.default.recordMessageSendAttempt(e, u),
            Y.default.isReady(e))
              ? r()
              : a && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
                ? (eE.info(
                    "Waiting for channel ".concat(
                      e,
                      " to be ready before sending."
                    )
                  ),
                  new Promise((t, n) => {
                    Y.default.whenReady(e, () => {
                      eE.info(
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
                    parse: Object.values(er.AllowedMentionTypes),
                    replied_user: !1,
                  };
            return { messageReference: n, allowedMentions: a };
          },
          sendInvite: (e, t, n, a) =>
            eh._sendMessage(
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
            eh._sendMessage(
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
            return eh._sendMessage(
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
                url: er.Endpoints.MESSAGES_GREET(e),
                body: {
                  sticker_ids: [t],
                  allowed_mentions: l,
                  message_reference: a,
                },
                oldFormErrors: !0,
              })
              .then(
                n => (
                  O.default.donateSentMessage(n.body.content, e),
                  eh.receiveMessage(e, n.body),
                  r.default.dispatch({
                    type: "STICKER_TRACK_USAGE",
                    stickerIds: [t],
                  }),
                  n
                ),
                t => {
                  throw (
                    (ec.log("Failed to send greeting"),
                    429 !== t.status && eh.sendClydeError(e, t.body.code),
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
            return eh._sendMessage(
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
            let i = (0, P.default)(e);
            if (null != i)
              return (
                eE.info("Converting channel to a private channel"),
                i.then(e => {
                  eE.info("Finished converting channel to a private channel"),
                    eh._sendMessage(e, t, n);
                })
              );
            let u = t.content,
              { invalidEmojis: c, validNonShortcutEmojis: E, tts: _ = !1 } = t,
              {
                activityAction: S,
                location: h,
                suggestedInvite: m,
                stickerIds: T,
                messageReference: p,
                allowedMentions: I,
                poll: C,
              } = n,
              L = null !== (a = n.flags) && void 0 !== a ? a : 0,
              [R, w] = (0, B.default)(u);
            if (
              (R &&
                ((u = w),
                (L = (0, et.addFlag)(
                  L,
                  er.MessageFlags.SUPPRESS_NOTIFICATIONS
                ))),
              "" === u && null == S && null == T && null == C)
            )
              return Promise.reject(Error("not sending empty message"));
            let F = null != p ? er.MessageTypes.REPLY : er.MessageTypes.DEFAULT,
              V =
                null !== (s = n.nonce) && void 0 !== s
                  ? s
                  : (0, v.createNonce)();
            if (!1 !== n.eagerDispatch) {
              let t = (0, v.default)({
                channelId: e,
                content: u,
                tts: _,
                type: F,
                messageReference: p,
                allowedMentions: I,
                flags: 0 !== L ? L : void 0,
                nonce: V,
                poll: (0, b.createPollServerDataFromCreateRequest)(C),
              });
              (0, y.updateComboOnMessageSend)(e, t.id),
                null != T &&
                  (t.sticker_items = T.map(e =>
                    k.default.getStickerById(e)
                  ).filter(e => null != e)),
                eh.receiveMessage(e, t, !0, n);
            }
            if (!e_ && null != c && c.length > 0) {
              let t, n;
              e_ = !0;
              let a = Z.default.getCurrentUser();
              c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a)
                ? ((t =
                    eo.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE),
                  (n = "INVALID_ANIMATED_EMOJI_BODY"))
                : Q.default.canWithPartialContext(
                      er.Permissions.USE_EXTERNAL_EMOJIS,
                      { channelId: e }
                    )
                  ? ((t =
                      eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE),
                    (n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                  : ((t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY),
                    (n = "INVALID_EXTERNAL_EMOJI_BODY")),
                eh.sendBotMessage(e, t, n);
            }
            let H = {
              type: d.MessageDataType.SEND,
              message: {
                channelId: e,
                content: u,
                nonce: V,
                tts: _,
                message_reference: p,
                allowed_mentions: I,
                flags: L,
              },
            };
            if (null != S) {
              let e =
                S.type === er.ActivityActionTypes.JOIN_REQUEST
                  ? null == S
                    ? void 0
                    : S.activity.session_id
                  : x.default.getSessionId();
              if (null != e) {
                let t = { type: S.type, session_id: e },
                  { activity: n } = S;
                null != n.party &&
                  null != n.party.id &&
                  (t.party_id = n.party.id),
                  (H.message.application_id = n.application_id),
                  (H.message.activity = t);
              }
            }
            return (
              null != C && (H.message.poll = C),
              null != T && (H.message.sticker_ids = T),
              U.default.isEnabled() && (H.message.has_poggermode_enabled = !0),
              new Promise((t, a) => {
                let s = Date.now(),
                  i = d.default.length,
                  c = Math.floor(1e4 * Math.random());
                eE.info("Queueing message to be sent LogId:".concat(c)),
                  d.default.enqueue(
                    H,
                    d => {
                      let c = Date.now() - s;
                      if (d.ok)
                        O.default.donateSentMessage(u, e),
                          eh.receiveMessage(e, d.body, !0, {
                            sendAnalytics: { duration: c, queueSize: i },
                            poll: C,
                          }),
                          D.default.recordMessageSendApiResponse(V),
                          r.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: z.SlowmodeType.SendMessage,
                            channelId: e,
                          }),
                          r.default.dispatch({
                            type: "EMOJI_TRACK_USAGE",
                            emojiUsed: E,
                          }),
                          r.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: T,
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
                              let { type: t, code: u } = e;
                              if (t === f.CodedLinkType.INVITE)
                                eg({
                                  inviteKey: u,
                                  channelId: n,
                                  messageId: a,
                                  location: s,
                                  suggested: i,
                                  overrideProperties: r,
                                });
                              else if (t === f.CodedLinkType.TEMPLATE) {
                                let e = A.default.getGuildTemplate(u);
                                if (
                                  null == e ||
                                  e.state === ed.GuildTemplateStates.RESOLVING
                                )
                                  return;
                                o.default.trackWithMetadata(
                                  er.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT,
                                  {
                                    guild_template_code: u,
                                    guild_template_name: e.name,
                                    guild_template_description: e.description,
                                    guild_template_guild_id: e.sourceGuildId,
                                  }
                                );
                              } else if (t === f.CodedLinkType.BUILD_OVERRIDE);
                              else if (
                                t === f.CodedLinkType.MANUAL_BUILD_OVERRIDE
                              );
                              else if (t === f.CodedLinkType.EVENT);
                              else if (t === f.CodedLinkType.CHANNEL_LINK);
                              else if (
                                t === f.CodedLinkType.APP_DIRECTORY_PROFILE
                              )
                                $.default.track(
                                  er.AnalyticEvents
                                    .APP_DIRECTORY_PROFILE_EMBED_SENT,
                                  {
                                    application_id: u,
                                    device_platform: l.isMobile
                                      ? "mobile_web"
                                      : "desktop_web",
                                    guild_id: J.default.getGuildId(),
                                    channel_id: q.default.getChannelId(),
                                  }
                                );
                              else if (t === f.CodedLinkType.ACTIVITY_BOOKMARK);
                              else if (
                                t === f.CodedLinkType.EMBEDDED_ACTIVITY_INVITE
                              );
                              else if (t === f.CodedLinkType.GUILD_PRODUCT);
                              else if (t === f.CodedLinkType.SERVER_SHOP);
                              else if (t === f.CodedLinkType.QUESTS_EMBED) {
                                var d;
                                (0, G.trackQuestEvent)(
                                  u,
                                  er.AnalyticEvents.QUEST_LINK_SHARED,
                                  {
                                    guild_id: J.default.getGuildId(),
                                    channel_type:
                                      null ===
                                        (d = W.default.getChannel(
                                          q.default.getChannelId()
                                        )) || void 0 === d
                                        ? void 0
                                        : d.type,
                                  }
                                );
                              } else
                                throw Error(
                                  "Unknown coded link type: ".concat(t)
                                );
                            });
                          })({
                            content: u,
                            channelId: e,
                            messageId: d.body.id,
                            location: null != h ? h : "chat_input",
                            suggested: m,
                          }),
                          !(function (e, t, n, a, l) {
                            (0, en.findGiftCodes)(e).forEach(e => {
                              let s = W.default.getChannel(t);
                              null != s &&
                                o.default.trackWithMetadata(
                                  er.AnalyticEvents.GIFT_CODE_SENT,
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
                            u,
                            e,
                            d.body.id,
                            null != h ? h : "chat_input",
                            !!n.isGiftLinkSentOnBehalfOfUser
                          ),
                          t(d);
                      else {
                        var _;
                        ec.log("Failed to send message", {
                          hasErr: d.hasErr,
                          status: d.status,
                          code:
                            null === (_ = d.body) || void 0 === _
                              ? void 0
                              : _.code,
                          error: d.err,
                        });
                        let t = !1;
                        if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
                        else if (d.status >= 400 && d.status < 500 && d.body) {
                          if (
                            d.body.code === er.AbortCodes.SLOWMODE_RATE_LIMITED
                          ) {
                            let t = d.body.retry_after;
                            null != t &&
                              t > 0 &&
                              r.default.dispatch({
                                type: "SLOWMODE_SET_COOLDOWN",
                                channelId: e,
                                slowmodeType: z.SlowmodeType.SendMessage,
                                cooldownMs: t * ee.default.Millis.SECOND,
                              });
                          } else
                            M.AUTOMOD_ERROR_CODES.has(d.body.code)
                              ? r.default.dispatch({
                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                  messageData: H,
                                  errorResponseBody: {
                                    code: d.body.code,
                                    message: d.body.message,
                                  },
                                })
                              : d.body.code ===
                                  er.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED
                                ? r.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED",
                                  })
                                : null != C ||
                                  eh.sendClydeError(e, d.body.code);
                        }
                        t
                          ? eh.deleteMessage(e, V, !0)
                          : (r.default.dispatch({
                              type: "MESSAGE_SEND_FAILED",
                              messageId: V,
                              channelId: e,
                            }),
                            (0, N.logMessageSendFailure)({
                              failureCode: d.hasErr ? void 0 : d.status,
                              errorMessage: d.hasErr ? d.err.message : void 0,
                            })),
                          a(d);
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
            await F.default.unarchiveThreadIfNecessary(e);
            let l = (function (e, t) {
                let n = Y.default.getMessage(e, t);
                if (null == n || n.type !== er.MessageTypes.REPLY) return;
                let a = w.default.getMessageByReference(n.messageReference);
                if (a.state === w.ReferencedMessageState.LOADED) {
                  if (!n.mentions.includes(a.message.author.id))
                    return {
                      parse: Object.values(er.AllowedMentionTypes),
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
            d.default.enqueue(
              { type: d.MessageDataType.EDIT, message: s },
              n => {
                let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
                if (a) {
                  let e = { type: d.MessageDataType.EDIT, message: s };
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
                      eo.default.Messages
                        .A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED
                    )
                  : a
                    ? i.AccessibilityAnnouncer.announce(
                        eo.default.Messages
                          .A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED
                      )
                    : i.AccessibilityAnnouncer.announce(
                        eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED
                      ),
                  eh.endEditMessage(e, n.hasErr ? void 0 : n),
                  eh.focusMessage({ channelId: e, messageId: t });
              }
            );
          },
          async suppressEmbeds(e, t) {
            await F.default.unarchiveThreadIfNecessary(e),
              s.default.patch({
                url: er.Endpoints.MESSAGE(e, t),
                body: { flags: er.MessageFlags.SUPPRESS_EMBEDS },
                oldFormErrors: !0,
              });
          },
          async patchMessageAttachments(e, t, n) {
            await F.default.unarchiveThreadIfNecessary(e),
              s.default.patch({
                url: er.Endpoints.MESSAGE(e, t),
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
                      eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED
                    );
                  });
              };
            n
              ? a()
              : (await F.default.unarchiveThreadIfNecessary(e),
                s.default
                  .delete({
                    url: er.Endpoints.MESSAGE(e, t),
                    oldFormErrors: !0,
                  })
                  .then(() => {
                    a();
                  }));
            let l = Y.default.getMessage(e, t);
            (null == l ? void 0 : l.type) ===
              er.MessageTypes.GUILD_INVITE_REMINDER &&
              (0, R.trackGuildInviteNotificationDismissed)();
          },
          dismissAutomatedMessage(e) {
            null != e.loggingName &&
              o.default.trackWithMetadata(
                er.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED,
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
                url: er.Endpoints.MESSAGE_CROSSPOST(e, t),
                oldFormErrors: !0,
              })
              .catch(e => {
                let t;
                (t =
                  429 === e.status
                    ? eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format(
                        { retryAfter: Math.floor(e.body.retry_after / 60) }
                      )
                    : eo.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY),
                  ei.default.show({
                    title: eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                    body: t,
                    confirmText: eo.default.Messages.OKAY,
                  });
              }),
          trackInvite: eg,
        };
      var em = eh;
    },
    219788: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("705909"),
        l = n("605250"),
        s = n("619443"),
        i = n("42203"),
        r = n("802493"),
        u = n("883062"),
        d = n("794897"),
        o = n("818697"),
        c = n("280468");
      let E = new l.default("Messages");
      class _ {
        static computeUsersAndMembers(e) {
          (0, c.requireSortedDescending)(e);
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
      var f = new (class e {
        async startupLoad(e, t, n, a) {
          let l = r.default.messages(e),
            s = await l.getLatest(t, n, a);
          return new _(s);
        }
        async load(e, t, n) {
          let a = i.default.getBasicChannel(t);
          if (null == t || null == a || !(0, o.isReadableChannel)(a))
            return new _([]);
          {
            let l = r.default.messages(e),
              s = await l.getLatest(a.guild_id, t, n);
            return new _(s);
          }
        }
        handleMessageCreate(e, t) {
          !e.optimistic &&
            !e.isPushNotification &&
            null == e.sendMessageOptions &&
            (0, o.isReadableChannelId)(e.channelId) &&
            this.upsertOne(e.guildId, e.channelId, e.message, t);
        }
        handleMessageUpdate(e, t) {
          if (null != e.message.id && null != e.message.channel_id)
            (0, o.isReadableChannelId)(e.message.channel_id) &&
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
            (0, o.isReadableChannelId)(n.channel_id) &&
              this.insertStale(e.guildId, n.channel_id, n, t);
        }
        handleLoadMessagesSuccess(e, t) {
          let n = i.default.getBasicChannel(e.channelId);
          null != n &&
            (0, o.isReadableChannelId)(e.channelId) &&
            this.upsertMany(n.guild_id, e.channelId, e.messages, t);
        }
        handleMessageDelete(e, t) {
          null != e.id && this.deleteOne(e.guildId, e.channelId, e.id, t);
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
        resetInMemoryState() {}
        insertStale(e, t, n, l) {
          let i = r.default.messagesTransaction(l),
            d = s.default.lastTimeConnectedChanged();
          i.put(
            e,
            t,
            u.KvMessage.fromMessage(e, t, n, d),
            a.ConflictOptions.Skip
          );
        }
        upsertOne(e, t, n, l) {
          let i = r.default.messagesTransaction(l),
            o = s.default.lastTimeConnectedChanged();
          i.put(
            e,
            t,
            u.KvMessage.fromMessage(e, t, n, o),
            a.ConflictOptions.Replace
          ),
            i.trimChannel(e, t, d.default.saveLimit(t));
        }
        upsertMany(e, t, n, a) {
          let l = r.default.messagesTransaction(a),
            i = s.default.lastTimeConnectedChanged();
          for (let a of n) l.put(e, t, u.KvMessage.fromMessage(e, t, a, i));
          l.trimChannel(e, t, d.default.saveLimit(t));
        }
        async updateOne(e, t, n, a) {
          if (null == n.id) {
            E.warn(
              "updateOne: message.id is null; cannot update a message if we do not know its id."
            );
            return;
          }
          let l = r.default.messages(a.database),
            i = await l.get(e, t, n.id),
            d = s.default.lastTimeConnectedChanged();
          null != i &&
            l.put(
              e,
              t,
              u.KvMessage.fromMessage(e, t, { ...i.message, ...n }, d)
            );
        }
        deleteOne(e, t, n, a) {
          r.default.messagesTransaction(a).deleteMessage(e, t, n);
        }
        deleteChannel(e, t, n) {
          r.default.messagesTransaction(n).deleteChannel(e, t);
        }
        deleteGuild(e, t) {
          r.default.messagesTransaction(t).deleteGuild(e);
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
            return i;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("26989"),
        l = n("697218"),
        s = n("49111");
      class i {
        static fromMessage(e, t, n, a) {
          let [l, s] = i.deriveMemberUsers(e, n);
          return {
            id: n.id,
            channelId: t,
            message: n,
            members: l,
            users: s,
            connectionId: a,
          };
        }
        static deriveMemberUsers(e, t) {
          var n, i, r, u;
          let d = new Set([
              null === (n = t.author) || void 0 === n ? void 0 : n.id,
              null === (i = t.interaction) || void 0 === i ? void 0 : i.user.id,
              ...(null !==
                (u =
                  null === (r = t.mentions) || void 0 === r
                    ? void 0
                    : r.map(e => e.id)) && void 0 !== u
                ? u
                : []),
            ]),
            o = [],
            c = [];
          for (let t of d) {
            if (null == t) continue;
            let n = l.default.getUser(t),
              i = a.default.getTrueMember(
                null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
                t
              );
            null != n && c.push(n), null != i && o.push(i);
          }
          return [o, c];
        }
      }
    },
    794897: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("42203"),
        l = n("525065"),
        s = n("18494"),
        i = n("455079"),
        r = n("8001"),
        u = n("625483"),
        d = n("185496"),
        o = n("689257"),
        c = n("753848"),
        E = n("818697"),
        _ = n("875081");
      let f = null,
        g = new u.ExtendedMemoryLru(750, 500),
        S = new d.Lru(15),
        h = !1;
      class m extends i.default {
        initialize() {
          this.waitFor(a.default),
            this.waitFor(s.default),
            this.waitFor(l.default),
            this.syncWith([r.default], () => !0),
            this.syncWith([s.default], T);
        }
        loadCache() {
          let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
          null != e && ((h = !0), m.mergeSnapshot(e));
        }
        canEvictOrphans() {
          return h;
        }
        saveLimit(e) {
          let t = a.default.getBasicChannel(e);
          return (null != t && (0, c.isPrivateChannel)(t)) ||
            (null != t && g.has(e))
            ? 25
            : 1;
        }
        getSaveableChannels() {
          let e = a.default.getChannelIds(null),
            t = e.map(e => ({ guildId: null, channelId: e }));
          return r.default.isLowDisk
            ? null != f
              ? [...t, f]
              : t
            : [...t, ...g.values()];
        }
        takeSnapshot() {
          return {
            version: m.LATEST_SNAPSHOT_VERSION,
            data: {
              channels: [...g.allValues()].filter(e => !e.fallback),
              penalized: [...S.keys()],
              lastChannel: f,
            },
          };
        }
        static mergeSnapshot(e) {
          let t = g,
            n = S;
          for (let n of ((g = new u.ExtendedMemoryLru(
            g.primaryCapacity,
            g.extendedCapacity
          )),
          (S = new d.Lru(S.capacity)),
          (f = null != f ? f : e.lastChannel),
          [e.channels, t.values()]))
            for (let e of n) !e.fallback && g.put(e.channelId, e);
          for (let t of [e.penalized, n.keys()])
            for (let e of t) S.put(e, null);
        }
        static recordChannel(e) {
          let t = a.default.getBasicChannel(e);
          if (null != t && (0, E.isReadableChannel)(t)) {
            var n;
            let a = {
              guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
              channelId: e,
              channelType: t.type,
            };
            if (((f = a), g.put(e, a), (0, o.isLimitedChannel)(t))) {
              let t = S.put(e, null);
              null != t && g.delete(e);
            }
          }
        }
        static deleteChannel(e) {
          g.delete(e);
        }
        static deleteGuild(e) {
          for (let t of g.allValues()) t.guildId === e && g.delete(t.channelId);
        }
        static dropUnreachableChannels() {
          for (let e of g.keys()) {
            let t = a.default.getBasicChannel(e);
            !(0, E.isReadableChannel)(t) && m.deleteChannel(e);
          }
        }
        static deleteUnreadableGuildChannels(e) {
          for (let t of g.values())
            e === t.guildId &&
              !(0, E.isReadableChannelId)(t.channelId) &&
              m.deleteChannel(t.channelId);
        }
        static replaceLru(e) {
          g = e;
        }
        constructor() {
          super({
            CACHE_LOADED_LAZY_NO_CACHE: v,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: I,
            CHANNEL_UPDATES: p,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            GUILD_DELETE: D,
            LOGIN_SUCCESS: O,
            THREAD_DELETE: L,
            THREAD_UPDATE: C,
          });
        }
      }
      function T() {
        let e = s.default.getChannelId();
        null != e && m.recordChannel(e);
      }
      function M() {
        m.dropUnreachableChannels(),
          m.replaceLru((0, _.withFallbacks)(g, 1250));
      }
      function A(e) {
        let t = e.id,
          n = (0, E.isReadableChannel)(e),
          a = s.default.getChannelId();
        n && t === a && m.recordChannel(t), !n && m.deleteChannel(t);
      }
      function p(e) {
        for (let t of e.channels) A(t);
      }
      function I(e) {
        m.deleteChannel(e.channel.id);
      }
      function C(e) {
        A(e.channel);
      }
      function L(e) {
        m.deleteChannel(e.channel.id);
      }
      function D(e) {
        return !e.guild.unavailable && (m.deleteGuild(e.guild.id), !0);
      }
      function O(e) {
        g.clear(), S.clear(), (h = !1);
      }
      function v(e) {
        h = !0;
      }
      (m.displayName = "SaveableChannelsStore"),
        (m.LATEST_SNAPSHOT_VERSION = 1);
      var N = new m();
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
            return u;
          },
          isReadableChannelId: function () {
            return d;
          },
        });
      var a = n("233069"),
        l = n("42203"),
        s = n("957255"),
        i = n("49111");
      let r =
        i.BasicPermissions.VIEW_CHANNEL |
        i.BasicPermissions.READ_MESSAGE_HISTORY;
      function u(e) {
        return (
          null != e &&
          (e.type === i.ChannelTypes.DM ||
            e.type === i.ChannelTypes.GROUP_DM ||
            ((0, a.isTextChannel)(e.type) && s.default.canBasicChannel(r, e)))
        );
      }
      function d(e) {
        return null != e && u(l.default.getBasicChannel(e));
      }
    },
    875081: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          withFallbacks: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("42203"),
        l = n("677099"),
        s = n("625483"),
        i = n("689257"),
        r = n("818697"),
        u = n("49111");
      function d(e, t) {
        if (e.totalLength >= t) return e;
        let n = new s.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
          d = t - e.totalLength;
        for (let t of l.default.getGuildFolders())
          for (let l of t.guildIds)
            for (let t of Object.values(
              a.default.getMutableBasicGuildChannelsForGuild(l)
            ))
              if (
                ((function (e) {
                  return (
                    e.type === u.ChannelTypes.DM ||
                    e.type === u.ChannelTypes.GROUP_DM ||
                    e.type === u.ChannelTypes.GUILD_TEXT
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
                n.totalLength >= d)
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
      let u = new s.default("FileSystemStore"),
        d = 10 * i.default.Millis.MINUTE;
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
              : e.catch(e => u.warn("couldn't get fs info", e)));
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
            setInterval(() => this.refresh(), d);
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
            return u;
          },
          AUTOMOD_ERROR_CODES: function () {
            return d;
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
      class u extends Error {}
      let d = new Set([
        s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED,
        s.AbortCodes.AUTOMOD_TITLE_BLOCKED,
        s.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
      ]);
      function o(e, t) {
        if (null == e) return null;
        let { code: n, message: a } = e;
        if (!d.has(n)) return null;
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
            return f;
          },
        });
      var a = n("446674"),
        l = n("913144"),
        s = n("82339"),
        i = n("579033");
      let r = {},
        u = null;
      function d(e, t) {
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
        return d(e.code, t => {
          let n = (0, s.default)(e);
          for (let e in n) t[e] = n[e];
        });
      }
      function E(e) {
        return d(e.code, e => {
          e.state = i.GuildTemplateStates.EXPIRED;
        });
      }
      class _ extends a.default.Store {
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
          return u;
        }
      }
      _.displayName = "GuildTemplateStore";
      var f = new _(l.default, {
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
          return d(e.code, e => {
            e.state = i.GuildTemplateStates.ACCEPTING;
          });
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
          return d(e.code, e => {
            var t;
            (e.state = i.GuildTemplateStates.ACCEPTED),
              (e.usageCount =
                (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
          });
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
          return d(e.code, e => {
            e.state = i.GuildTemplateStates.RESOLVED;
          });
        },
        GUILD_TEMPLATE_MODAL_SHOW: function (e) {
          u = e.code;
        },
        GUILD_TEMPLATE_MODAL_HIDE: function (e) {
          u = null;
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
            return m;
          },
        }),
        n("222007");
      var a = n("811022"),
        l = n("446674"),
        s = n("913144"),
        i = n("125273"),
        r = n("618421"),
        u = n("42203"),
        d = n("525065"),
        o = n("985365"),
        c = n("599110"),
        E = n("49111");
      let _ = new a.default("MessageRoundtripTrackerStore");
      function f(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
      }
      function g(e) {
        let t = u.default.getBasicChannel(e.channelId);
        if (null == t) {
          _.warn(
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
          guild_size: d.default.getMemberCount(t.guild_id),
          mobile_network_type: o.default.getType(),
          ...(null != l && { mobile_signal_strength_level: l }),
        });
      }
      class S extends l.default.Store {
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
            f(n)
              ? (g(n), this.pendingMessages.delete(e))
              : this.pendingMessages.set(e, n);
          }
        }
        recordGatewayResponse(e) {
          let t = this.pendingMessages.get(e);
          if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            f(n)
              ? (g(n), this.pendingMessages.delete(e))
              : this.pendingMessages.set(e, n);
          }
        }
        constructor(...e) {
          super(...e), (this.pendingMessages = new Map());
        }
      }
      let h = new S(s.default, {
        MESSAGE_CREATE: function (e) {
          let { optimistic: t, message: n } = e,
            a = n.nonce;
          !t && null != a && h.recordGatewayResponse(a);
        },
      });
      var m = h;
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
            return _;
          },
        }),
        n("702976"),
        n("424973");
      var a = n("627445"),
        l = n.n(a),
        s = n("256572"),
        i = n("766274"),
        r = n("697218"),
        u = n("299039"),
        d = n("49111");
      function o() {
        return u.default.fromTimestamp(Date.now());
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
            type: u = d.MessageTypes.DEFAULT,
            messageReference: E,
            allowedMentions: _,
            author: f,
            flags: g,
            nonce: S,
            poll: h,
          } = e,
          m = [];
        if (
          u === d.MessageTypes.REPLY &&
          (l(null != E, "Replies must have a message reference"),
          null == _ || _.replied_user)
        ) {
          let e = s.default.getMessageByReference(E);
          (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED &&
            m.push(c(e.message.author));
        }
        return (
          null == f && (f = r.default.getCurrentUser()),
          f instanceof i.default && (f = c(f)),
          l(null != f, "createMessage: author cannot be undefined"),
          {
            id: null != S ? S : o(),
            type: u,
            content: n,
            channel_id: t,
            author: f,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: m,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: d.MessageStates.SENDING,
            tts: a,
            message_reference: E,
            flags: g,
            nonce: S,
            poll: h,
          }
        );
      }
      function _(e) {
        let {
          messageId: t,
          channelId: n,
          content: a,
          embeds: l,
          loggingName: s,
        } = e;
        return {
          id: null != t ? t : o(),
          type: d.MessageTypes.DEFAULT,
          flags: d.MessageFlags.EPHEMERAL,
          content: a,
          channel_id: n,
          author: {
            id: d.LOCAL_BOT_ID,
            username: "Clyde",
            discriminator: d.NON_USER_BOT_DISCRIMINATOR,
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
          state: d.MessageStates.SENT,
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
            return u;
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
      function u() {
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
            return u;
          },
          updateCombo: function () {
            return d;
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
      function u(e) {
        a.default.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e });
        let t = { ...s.default.getState(), ...e };
        (0, r.default)(t);
      }
      function d(e) {
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
        let u =
          null != r && (null == r ? void 0 : r.value) > 0
            ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n
                ? n
                : 0) + 1
            : 1;
        a.default.dispatch({
          type: "POGGERMODE_UPDATE_COMBO",
          channelId: e,
          userId: s,
          multiplier: u,
          value: 0,
        });
      }
    },
    39141: function (e, t, n) {
      "use strict";
      var a, l, s, i, r, u;
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
        ((u = s || (s = {}))[(u.LEVEL_1 = 0)] = "LEVEL_1"),
        (u[(u.LEVEL_2 = 1)] = "LEVEL_2"),
        (u[(u.LEVEL_3 = 2)] = "LEVEL_3"),
        (u[(u.LEVEL_4 = 3)] = "LEVEL_4"),
        (u[(u.LEVEL_5 = 4)] = "LEVEL_5");
      let d = {
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
        o = Object.keys(d).reduce(
          (e, t) => ({
            ...e,
            [t]: d[t].map(e => {
              let [t] = e;
              return t;
            }),
          }),
          { 0: [], 1: [], 2: [], 3: [], 4: [] }
        ),
        c = Object.keys(d).reduce(
          (e, t) => ({
            ...e,
            [t]: d[t].map(e => {
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
        u = {
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
        d = (0, a.cloneDeep)(u);
      class o extends l.default.DeviceSettingsStore {
        initialize(e) {
          d = { ...d, ...e };
        }
        getUserAgnosticState() {
          return d;
        }
        get settingsVisible() {
          return d.settingsVisible;
        }
        isEnabled() {
          let { confettiLocation: e, shakeLocation: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              null == e || (d.confettiEnabled && d.confettiEnabledLocations[e]),
            a =
              null == t ||
              (d.screenshakeEnabled && d.screenshakeEnabledLocations[t]);
          return this.settingsVisible && !r && d.enabled && n && a;
        }
        get shakeIntensity() {
          return this.isEnabled() ? d.shakeIntensity : 0;
        }
        get combosRequiredCount() {
          return this.isEnabled() ? d.combosRequiredCount : 0;
        }
        get screenshakeEnabled() {
          return d.screenshakeEnabled;
        }
        get screenshakeEnabledLocations() {
          return d.screenshakeEnabledLocations;
        }
        get combosEnabled() {
          return d.combosEnabled;
        }
        get comboSoundsEnabled() {
          return d.comboSoundsEnabled;
        }
      }
      (o.displayName = "PoggermodeSettingsStore"),
        (o.persistKey = "PoggermodeSettingsStore");
      var c = new o(s.default, {
        POGGERMODE_SETTINGS_UPDATE: function (e) {
          let { settings: t } = e;
          d = { ...d, ...t };
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
            return m;
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
        u = n("18494"),
        d = n("659500"),
        o = n("880731"),
        c = n("119035"),
        E = n("39141"),
        _ = n("49111");
      let f = new Set(),
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
        S = new l.default(
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
        h = e => {
          let { userId: t, channelId: n } = e;
          return "".concat(t, "-").concat(n);
        };
      function m(e, t, n, a) {
        if (e !== t) return !1;
        let l = null == n;
        return !(l || a.has(n)) && (a.add(n), !0);
      }
      class T extends a.default.Store {
        initialize() {
          this.waitFor(r.default, u.default);
        }
        getComboScore(e, t) {
          let n = g.get(h({ userId: e, channelId: t }));
          return null == n ? 0 : (0, c.getComboScore)(n);
        }
        getUserCombo(e, t) {
          return g.get(h({ userId: e, channelId: t }));
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
          let n = S.get(e);
          return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t
            ? t
            : void 0;
        }
        getMostRecentMessageCombo(e) {
          let t = S.values(e);
          return t[t.length - 1];
        }
        getUserComboShakeIntensity(e, t, n, a) {
          let l = this.getUserCombo(e, t);
          return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0;
        }
      }
      T.displayName = "PoggermodeStore";
      let M = new T(i.default, {
        POGGERMODE_UPDATE_COMBO: function (e) {
          let { type: t, ...n } = e;
          if (!o.default.isEnabled()) return !1;
          !(function e(t) {
            var n, a, l, i, r, u;
            let d =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              o = g.get(h(t)),
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
            g.set(h(t), c),
              d &&
                (null === (u = c.decayInterval) ||
                  void 0 === u ||
                  u.start(1e3, () => {
                    let t = g.get(h(c));
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
                            M.emitChange());
                      } else e({ ...t, value: t.value - 1 }), M.emitChange();
                    }
                  }));
          })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
          var t;
          let { comboMessage: n } = e;
          if (!o.default.isEnabled()) return !1;
          (t = n), S.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
          var t, n;
          let {
            channelId: a,
            message: { mentions: l, author: s, nonce: i },
          } = e;
          if (!o.default.isEnabled()) return !1;
          let u = r.default.getId();
          if (!m(null == s ? void 0 : s.id, u, i, f)) return !1;
          let S = g.get(
            h({
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
            null != l.find(e => e.id === u)
          ) {
            let e =
              null != S
                ? null !==
                    (n = (0, c.getComboShakeIntensity)(
                      S,
                      E.ShakeLevel.LEVEL_4
                    )) && void 0 !== n
                  ? n
                  : 0.001
                : 4 * Math.random();
            return (
              d.ComponentDispatch.dispatch(_.ComponentActions.SHAKE_APP, {
                duration: 1e3,
                intensity: e,
              }),
              !0
            );
          }
          return !1;
        },
      });
      var A = M;
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
          let u = l.reduce((e, t, n) => {
            if (r > t) {
              let e = s[n];
              if (n + 1 === l.length) return s[n];
              let a = l[n + 1],
                i = s[n + 1];
              return ((r - t) / (a - t)) * (i - e) + e;
            }
            return r === t ? s[n] : e;
          }, 0);
          return Math.min(i, u);
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
        u = r.map(e => {
          let [t] = e;
          return t;
        }),
        d = r.map(e => {
          let [t, n] = e;
          return n;
        }),
        o = e => s(e, [u, d], 1),
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
      function u(e) {
        switch (e) {
          case i.ShakeLocation.CHAT_INPUT:
            return "chat_input";
          case i.ShakeLocation.MENTION:
            return "mention";
          case i.ShakeLocation.VOICE_USER:
            return "voice_user";
        }
      }
      function d(e) {
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
          confettiSize: _,
          confettiCount: f,
          confettiEnabledLocations: g,
        } = e;
        s.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
          enabled: t,
          combos_enabled: n,
          combos_required_count: a,
          screenshake_enabled: l,
          shake_intensity: i,
          screenshake_enabled_locations: o(c, u),
          confetti_enabled: E,
          confetti_size: _,
          confetti_count: f,
          confetti_enabled_locations: o(g, d),
        });
      }, 5e3);
      var E = c;
    },
    83995: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CreateGuildPollsExperiment: function () {
            return l;
          },
          CreateGDMPollsExperiment: function () {
            return s;
          },
          PollsUserExperiment: function () {
            return i;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
          kind: "guild",
          id: "2023-09_guild_polls",
          label: "Create Guild Polls",
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
          id: "2024-01_create_gdm_polls",
          label: "Create GDM Polls",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enables creation of polls within a GDM",
              config: { enabled: !0 },
            },
          ],
        }),
        i = (0, a.createExperiment)({
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
            return d;
          },
          filterOutUUID: function () {
            return o;
          },
          hasNonVoteReactions: function () {
            return c;
          },
          useCanPostPollsInChannel: function () {
            return E;
          },
          useCanPostImagePolls: function () {
            return _;
          },
          isPollCreationEmpty: function () {
            return f;
          },
          isAnswerFilled: function () {
            return g;
          },
          isIncompleteAnswer: function () {
            return S;
          },
          createPollServerDataFromCreateRequest: function () {
            return h;
          },
          getTotalVotes: function () {
            return m;
          },
        }),
        n("781738"),
        n("222007"),
        n("808653");
      var a = n("748820"),
        l = n("418009"),
        s = n("957255"),
        i = n("718517"),
        r = n("83995"),
        u = n("49111");
      function d() {
        return {
          text: void 0,
          image: void 0,
          localCreationAnswerId: (function () {
            return (0, a.v4)();
          })(),
        };
      }
      function o(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
      }
      function c(e) {
        for (let t of e.reactions) if (null == t.me_vote) return !0;
        return !1;
      }
      function E(e) {
        let t = u.ChannelTypesSets.POLLS.has(e.type),
          { enabled: n } = r.CreateGuildPollsExperiment.useExperiment(
            { guildId: e.guild_id, location: "useCanPostPollsInChannel" },
            {
              autoTrackExposure: !0,
              disable:
                !t ||
                e.isPrivate() ||
                !s.default.can(u.Permissions.SEND_MESSAGES, e),
            }
          ),
          { enabled: a } = r.CreateGDMPollsExperiment.useExperiment(
            { location: "useCanPostPollsInChannel" },
            { autoTrackExposure: !0, disable: !t || !e.isPrivate() }
          );
        return n || a;
      }
      function _() {
        return !1;
      }
      function f(e, t, n) {
        return 0 === e.length && null == t.find(e => g(e, n));
      }
      function g(e, t) {
        if (t === l.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        {
          var n;
          let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
          return null != t && t.length > 0;
        }
      }
      function S(e, t) {
        var n;
        let a = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return (
          t === l.PollLayoutTypes.DEFAULT &&
          null != e.image &&
          (null == a || 0 === a.length)
        );
      }
      function h(e) {
        var t, n;
        if (null == e) return;
        let a =
          null == e
            ? void 0
            : null === (t = e.answers) || void 0 === t
              ? void 0
              : t.map((e, t) => {
                  var n, a;
                  let l =
                      null === (n = e.poll_media) || void 0 === n
                        ? void 0
                        : n.emoji,
                    s = {
                      ...e.poll_media,
                      emoji:
                        null != l
                          ? {
                              id: l.id,
                              name:
                                null !== (a = l.name) && void 0 !== a ? a : "",
                            }
                          : void 0,
                    };
                  return { ...e, answer_id: t + 1, poll_media: s };
                });
        let l =
          (null == e ? void 0 : e.duration) != null
            ? ((n = e.duration),
              new Date(Date.now() + n * i.default.Millis.HOUR).toISOString())
            : "0";
        return { ...e, expiry: l, answers: a };
      }
      function m(e) {
        return e.reduce((e, t) => {
          var n, a;
          return (
            e +
            (null !==
              (a =
                null === (n = t.count_details) || void 0 === n
                  ? void 0
                  : n.vote) && void 0 !== a
              ? a
              : 0)
          );
        }, 0);
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
    815496: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getQuestStatus: function () {
            return c;
          },
          getContentProperties: function () {
            return _;
          },
          trackQuestEvent: function () {
            return f;
          },
          QuestContentCTA: function () {
            return l;
          },
          trackQuestContentClicked: function () {
            return g;
          },
        });
      var a,
        l,
        s = n("313915"),
        i = n("599110"),
        r = n("2973"),
        u = n("588025"),
        d = n("49111");
      let o = Object.keys(u.QuestContent);
      function c(e) {
        var t, n, a;
        return null == e
          ? null
          : (null === (t = e.userStatus) || void 0 === t
                ? void 0
                : t.claimedAt) != null
            ? "COMPLETED_CLAIMED"
            : (null === (n = e.userStatus) || void 0 === n
                  ? void 0
                  : n.completedAt) != null
              ? "COMPLETED"
              : (null === (a = e.userStatus) || void 0 === a
                    ? void 0
                    : a.enrolledAt) != null
                ? "ENROLLED"
                : "NONE";
      }
      function E(e) {
        return {
          quest_id: e.id,
          game_id: e.config.applicationId,
          game_name: e.config.applicationName,
        };
      }
      function _(e) {
        var t;
        return {
          content_id: e,
          content_name:
            null !== (t = o.find(t => u.QuestContent[t] === e)) && void 0 !== t
              ? t
              : "",
        };
      }
      function f(e, t, n) {
        let a = r.default.quests.get(e);
        if (null != a) {
          if (a.preview) {
            s.default.isLoggingAnalyticsEvents &&
              console.info("[Quest] AnalyticsUtils.track", t, {
                ...E(a),
                ...n,
              });
            return;
          }
          i.default.track(t, { ...E(a), ...n });
        }
      }
      function g(e, t, n) {
        f(e, d.AnalyticEvents.QUEST_CONTENT_CLICKED, { ..._(t), cta_name: n });
      }
      ((a = l || (l = {})).LEARN_MORE = "LEARN_MORE"),
        (a.SHOW_REWARD = "SHOW_REWARD"),
        (a.CLAIM_REWARD = "CLAIM_REWARD"),
        (a.ACCEPT_QUEST = "ACCEPT_QUEST"),
        (a.COPY_QUEST_URL = "COPY_QUEST_URL"),
        (a.TRACK_PROGRESS = "TRACK_PROGRESS"),
        (a.REWARD_LEARN_MORE = "REWARD_LEARN_MORE"),
        (a.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU"),
        (a.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK"),
        (a.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT"),
        (a.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK"),
        (a.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE");
    },
    2973: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144");
      let s = !1,
        i = new Map(),
        r = 0,
        u = new Set(),
        d = new Set(),
        o = new Set(),
        c = new Set(),
        E = new Map(),
        _ = new Map();
      function f(e, t) {
        i = new Map(i);
        let n = i.get(e);
        null != n && i.set(e, { ...n, ...t });
      }
      function g(e, t) {
        let n = new Map(E);
        n.set(e, t), (E = n);
        let a = i.get(e),
          l = null == a ? void 0 : a.userStatus;
        if (null != l && null == l.claimedAt) {
          let n = { userStatus: { ...l, claimedAt: t.claimedAt } };
          f(e, n);
        }
      }
      function S(e) {
        null != _.get(e) && (_ = new Map(_)).delete(e);
      }
      function h(e) {
        let t = new Set(u);
        t.delete(e), (u = t);
      }
      function m(e) {
        let t = new Set(c);
        t.delete(e), (c = t);
      }
      class T extends a.default.Store {
        get quests() {
          return i;
        }
        get isFetchingCurrentQuests() {
          return s;
        }
        get lastFetchedCurrentQuests() {
          return r;
        }
        isEnrolling(e) {
          return u.has(e);
        }
        isClaimingRewardCode(e) {
          return d.has(e);
        }
        isFetchingRewardCode(e) {
          return o.has(e);
        }
        isDismissingContent(e) {
          return c.has(e);
        }
        getRewardCode(e) {
          return E.get(e);
        }
        getStreamHeartbeatFailure(e) {
          return _.get(e);
        }
      }
      T.displayName = "QuestsStore";
      var M = new T(l.default, {
        LOGOUT: function () {
          (s = !1), (i = new Map()), (r = 0), (u = new Set()), (_ = new Map());
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
          (r = Date.now()), (s = !0);
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
          let { quests: t } = e;
          for (let e of ((s = !1), (i = new Map()), t)) i.set(e.id, e);
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
          (r = 0), (s = !1);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
          let { questId: t, streamKey: n, userStatus: a } = e;
          f(t, { userStatus: a }), S(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
          let { questId: t, streamKey: n } = e,
            a = _.get(n);
          null == a &&
            (_ = new Map(_)).set(n, {
              questId: t,
              streamKey: n,
              firstFailedAt: Date.now(),
            });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
          let { questId: t } = e,
            n = new Set(u);
          n.add(t), (u = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
          let { enrolledQuestUserStatus: t } = e;
          f(t.questId, { userStatus: t }), h(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
          let { questId: t } = e;
          h(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
          let { questId: t } = e,
            n = new Set(o);
          n.add(t), (o = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
          let { questId: t, rewardCode: n } = e,
            a = new Set(o);
          a.delete(t), (o = a), g(t, n);
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
          let { questId: t } = e,
            n = new Set(o);
          n.delete(t), (o = n);
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function (e) {
          let { questId: t } = e,
            n = new Set(d);
          n.add(t), (d = n);
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function (e) {
          let { questId: t, rewardCode: n } = e,
            a = new Set(d);
          a.delete(t), (d = a), g(t, n);
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function (e) {
          let { questId: t } = e,
            n = new Set(d);
          n.delete(t), (d = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
          let { questId: t } = e,
            n = new Set(c);
          n.add(t), (c = n);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
          let { dismissedQuestUserStatus: t } = e;
          f(t.questId, { userStatus: t }), m(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
          let { questId: t } = e;
          m(t);
        },
        STREAM_CLOSE: function (e) {
          let { streamKey: t } = e;
          S(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
          let { streamKey: t } = e;
          S(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
          let { previewQuestUserStatus: t } = e;
          f(t.questId, { userStatus: t }),
            null == t.claimedAt && (E = new Map(E)).delete(t.questId);
        },
      });
    },
    588025: function (e, t, n) {
      "use strict";
      var a, l, s, i;
      n.r(t),
        n.d(t, {
          QuestRewardCodePlatforms: function () {
            return a;
          },
          QUEST_REWARD_CODE_PLATFORMS_SET: function () {
            return r;
          },
          QuestContent: function () {
            return l;
          },
        }),
        n("222007"),
        ((s = a || (a = {}))[(s.CROSS_PLATFORM = 0)] = "CROSS_PLATFORM"),
        (s[(s.XBOX = 1)] = "XBOX"),
        (s[(s.PLAYSTATION = 2)] = "PLAYSTATION"),
        (s[(s.SWITCH = 3)] = "SWITCH"),
        (s[(s.PC = 4)] = "PC");
      let r = new Set(Object.values(a).filter(e => "number" == typeof e));
      ((i = l || (l = {}))[(i.GIFT_INVENTORY_SETTINGS_BADGE = 0)] =
        "GIFT_INVENTORY_SETTINGS_BADGE"),
        (i[(i.QUEST_BAR = 1)] = "QUEST_BAR"),
        (i[(i.QUEST_INVENTORY_CARD = 2)] = "QUEST_INVENTORY_CARD"),
        (i[(i.QUESTS_EMBED = 3)] = "QUESTS_EMBED"),
        (i[(i.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
        (i[(i.QUEST_LIVE_STREAM = 5)] = "QUEST_LIVE_STREAM");
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
        u = {};
      function d(e) {
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
        (i = {}), (r = {}), (u = {});
      }
      class c extends a.default.Store {
        initialize() {
          this.waitFor(s.default);
        }
        getPendingReply(e) {
          return i[e];
        }
        getPendingReplyActionSource(e) {
          return u[e];
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
            (u[t.id] = s);
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
            delete i[s], delete u[s];
          else {
            if (
              (null === (a = r[s]) || void 0 === a ? void 0 : a.messageId) !== l
            )
              return !1;
            delete r[s], delete u[s];
          }
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          d(t);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
          let { channelId: t } = e;
          d(t);
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
        u = n("377253");
      let d = {},
        o = {};
      class c extends a.default.Store {
        isEditing(e, t) {
          var n;
          return (
            (null === (n = d[e]) || void 0 === n ? void 0 : n.messageId) === t
          );
        }
        isEditingAny(e) {
          return null != d[e];
        }
        getEditingTextValue(e) {
          var t;
          return null === (t = d[e]) || void 0 === t ? void 0 : t.textValue;
        }
        getEditingRichValue(e) {
          var t;
          return null === (t = d[e]) || void 0 === t ? void 0 : t.richValue;
        }
        getEditingMessageId(e) {
          var t;
          return null === (t = d[e]) || void 0 === t ? void 0 : t.messageId;
        }
        getEditingMessage(e) {
          let t = d[e];
          return null != t && null != t.messageId
            ? u.default.getMessage(e, t.messageId)
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
            u = r.UseLegacyChatInput.getSetting(),
            c = i.default.unparse(a, t);
          (d[t] = {
            channelId: t,
            messageId: n,
            textValue: c,
            richValue: (0, s.toRichValue)(u ? c : a),
          }),
            (o[t] = l);
        },
        MESSAGE_UPDATE_EDIT: function (e) {
          let { channelId: t, textValue: n, richValue: a } = e,
            l = d[t];
          if (null == l) return !1;
          d[t] = { ...l, textValue: n, richValue: a };
        },
        MESSAGE_END_EDIT: function (e) {
          let { channelId: t } = e;
          if (null == t || null == d[t]) return !1;
          delete d[t], delete o[t];
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
            return h;
          },
        }),
        n("222007");
      var a,
        l,
        s = n("446674"),
        i = n("862337"),
        r = n("913144"),
        u = n("718517"),
        d = n("42203"),
        o = n("957255"),
        c = n("49111");
      ((l = a || (a = {}))[(l.SendMessage = 0)] = "SendMessage"),
        (l[(l.CreateThread = 1)] = "CreateThread");
      let E = { 0: {}, 1: {} };
      function _(e, t, n) {
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
      function f(e, t) {
        let n = d.default.getChannel(e);
        if (null == n) return !1;
        _(
          n,
          t,
          0 === n.rateLimitPerUser
            ? 0
            : n.rateLimitPerUser * u.default.Millis.SECOND + 100
        );
      }
      function g(e) {
        let { file: t } = e,
          n = d.default.getChannel(t.channelId);
        return null != n && _(n, 0, 0);
      }
      class S extends s.default.Store {
        initialize() {
          this.waitFor(d.default);
        }
        getSlowmodeCooldownGuess(e, t) {
          let n = E[null != t ? t : 0][e];
          return null != n ? n.cooldownMs : 0;
        }
      }
      S.displayName = "SlowmodeStore";
      var h = new S(r.default, {
        SLOWMODE_RESET_COOLDOWN: function (e) {
          let { channelId: t, slowmodeType: n } = e;
          return f(t, n);
        },
        SLOWMODE_SET_COOLDOWN: function (e) {
          let { channelId: t, slowmodeType: n, cooldownMs: a } = e,
            l = d.default.getChannel(t);
          if (null == l) return !1;
          _(l, n, 0 === a ? 0 : a + 100);
        },
        UPLOAD_START: function (e) {
          let { channelId: t } = e;
          return f(t, 0);
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
                l * u.default.Millis.SECOND
              );
              _(a, e, s);
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
//# sourceMappingURL=31717.cfed20a12b4a4d8f7264.js.map
