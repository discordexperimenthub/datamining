(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28411"],
  {
    680986: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          GuildForumExperiment: function () {
            return H;
          },
          getEnableForumPermissions: function () {
            return x;
          },
          useCanCreateForumChannel: function () {
            return Y;
          },
          useLoadForumUnreadCounts: function () {
            return V;
          },
          useExistingPin: function () {
            return W;
          },
          useAppliedTags: function () {
            return X;
          },
          useSomeAppliedTags: function () {
            return B;
          },
          useFacepileUsers: function () {
            return K;
          },
          useLastActiveTimestamp: function () {
            return q;
          },
          useMostUsedReaction: function () {
            return z;
          },
          useDefaultReactionEmoji: function () {
            return J;
          },
          useMessageCount: function () {
            return Z;
          },
          useForumPostAuthor: function () {
            return $;
          },
          getForumPostAuthor: function () {
            return ee;
          },
          useTypingUserIds: function () {
            return et;
          },
          useForumPostFirstMessageMarkup: function () {
            return eu;
          },
          useCanManageChannel: function () {
            return en;
          },
          useForumPostReadStates: function () {
            return el;
          },
          useChannelTemplate: function () {
            return ea;
          },
          useVisibleForumTags: function () {
            return ei;
          },
          useVisibleAppliedForumTags: function () {
            return eo;
          },
          useCanSearchForumPosts: function () {
            return ed;
          },
          useCanViewArchivedPosts: function () {
            return es;
          },
          useForumSearchState: function () {
            return ef;
          },
          useAutomaticForumSearch: function () {
            return ec;
          },
          useUnreadThreadsCountForParent: function () {
            return em;
          },
          useForumActiveThreadIds: function () {
            return eg;
          },
        }),
        u("222007"),
        u("808653");
      var n = u("884691"),
        r = u("917351"),
        l = u.n(r),
        a = u("335710"),
        i = u("446674"),
        o = u("913144"),
        d = u("267363"),
        s = u("385976"),
        f = u("296892"),
        c = u("95045"),
        m = u("574073"),
        g = u("401690"),
        S = u("689275"),
        T = u("69890"),
        E = u("610730"),
        h = u("487269"),
        _ = u("42203"),
        v = u("124948"),
        A = u("305961"),
        M = u("957255"),
        C = u("660478"),
        p = u("27618"),
        F = u("191542"),
        I = u("697218"),
        N = u("449008"),
        O = u("299039"),
        R = u("404607"),
        U = u("670902"),
        P = u("791234"),
        y = u("430475"),
        D = u("419501"),
        b = u("994810"),
        L = u("786742"),
        w = u("953371"),
        G = u("49111"),
        k = u("724210"),
        j = u("648564");
      let H = (0, f.default)({
        id: "2023-01_forums_non_community",
        label: "Forum non-community",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function x(e) {
        return H.getCurrentConfig({ guildId: e, location: "553713_2" }).enabled;
      }
      function Y(e) {
        return (function (e) {
          let t = (0, i.useStateFromStores)([A.default], () =>
            A.default.getGuild(e)
          );
          return (
            H.useExperiment(
              { guildId: e, location: "553713_1" },
              { autoTrackExposure: !1 }
            ).enabled ||
            !!(
              (null == t ? void 0 : t.hasFeature(G.GuildFeatures.COMMUNITY)) ||
              (null == t
                ? void 0
                : t.hasFeature(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY))
            )
          );
        })(e);
      }
      function V(e, t, u) {
        let r = (0, i.useStateFromStores)([S.default], () =>
          S.default.hasLoaded(e.guild_id)
        );
        n.useEffect(() => {
          if (!r) return;
          let n = U.default.getThreadIds(e.id, t, u),
            l = D.default
              .getThreadIdsMissingCounts(e.guild_id, n)
              .filter(e =>
                (0, L.canDisplayPostUnreadMessageCount)(e, [C.default])
              )
              .slice(0, 180)
              .map(e => ({
                threadId: e,
                ackMessageId: C.default.getTrackedAckMessageId(e),
              }));
          l.length > 0 &&
            o.default.dispatch({
              type: "REQUEST_FORUM_UNREADS",
              guildId: e.guild_id,
              channelId: e.id,
              threads: l,
            });
        }, [e.id, e.guild_id, r, u, t]);
      }
      function W(e) {
        return (0, i.useStateFromStores)([S.default, _.default], () => {
          let t = l(S.default.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter(e => {
              var t;
              return (
                (null === (t = _.default.getChannel(e)) || void 0 === t
                  ? void 0
                  : t.hasFlag(k.ChannelFlags.PINNED)) === !0
              );
            })
            .head();
          return _.default.getChannel(t);
        });
      }
      let Q = [];
      function X(e) {
        let t = (function (e) {
          let t = null == e ? void 0 : e.parent_id;
          return (0, i.useStateFromStoresObject)(
            [_.default],
            () => {
              var e;
              let u = _.default.getChannel(t),
                n =
                  null !== (e = null == u ? void 0 : u.availableTags) &&
                  void 0 !== e
                    ? e
                    : [];
              return n.reduce((e, t) => ({ ...e, [t.id]: t }), {});
            },
            [t]
          );
        })(e);
        return n.useMemo(() => {
          var u, n, r;
          return null !==
            (r =
              null == e
                ? void 0
                : null === (n = e.appliedTags) || void 0 === n
                  ? void 0
                  : null === (u = n.map(e => t[e])) || void 0 === u
                    ? void 0
                    : u.filter(N.isNotNullish)) && void 0 !== r
            ? r
            : Q;
        }, [t, null == e ? void 0 : e.appliedTags]);
      }
      function B(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          u = X(e);
        return n.useMemo(
          () => [u.slice(0, t), Math.max(0, u.length - t)],
          [u, t]
        );
      }
      function K(e, t) {
        let u = (0, i.useStateFromStoresArray)([I.default], () =>
          t.map(e => I.default.getUser(e)).filter(N.isNotNullish)
        );
        return (
          n.useEffect(() => {
            u.forEach(t => {
              v.default.requestMember(e.guild_id, t.id);
            });
          }, []),
          u
        );
      }
      function q(e, t) {
        let u =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : w.ForumTimestampFormats.DURATION_AGO,
          r = n.useMemo(() => O.default.extractTimestamp(e.id), [e.id]),
          l = (0, h.useLastMessageTimestamp)(e),
          i = n.useMemo(() => (0, L.getForumTimestampFormatter)(t, u), [t, u]);
        return n.useMemo(
          () =>
            t === a.ThreadSortOrder.CREATION_DATE
              ? (0, h.getTimestampString)(r, i)
              : (0, h.getTimestampString)(l, i),
          [l, t, r, i]
        );
      }
      function z(e) {
        return n.useMemo(() => {
          var t;
          return l.maxBy(
            null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t
              ? t
              : [],
            e => Math.max(e.burst_count, e.count)
          );
        }, [null == e ? void 0 : e.reactions]);
      }
      function J(e) {
        let t = null == e ? void 0 : e.defaultReactionEmoji,
          u = (0, i.useStateFromStores)([s.default], () =>
            (null == t ? void 0 : t.emojiId) != null
              ? s.default.getUsableCustomEmojiById(t.emojiId)
              : null
          );
        return null == t
          ? null
          : null != t.emojiId && null != u
            ? { id: t.emojiId, name: u.name, animated: u.animated }
            : null != t.emojiName
              ? { id: t.emojiId, name: t.emojiName, animated: !1 }
              : null;
      }
      function Z(e) {
        let t = (0, i.useStateFromStores)([E.default], () => {
            var t;
            return null !== (t = E.default.getCount(e.id)) && void 0 !== t
              ? t
              : 0;
          }),
          u = (0, T.getMessageCountText)(t, e.id),
          n = (0, i.useStateFromStores)([C.default], () =>
            (0, L.canDisplayPostUnreadMessageCount)(e.id, [C.default])
          ),
          r = (0, i.useStateFromStores)([D.default], () => {
            if (!n) return null;
            let u = D.default.getCount(e.id);
            if (null == u || !(u > 0)) return "1+";
            {
              let e = Math.min(u, t);
              return e >= j.MAX_THREAD_UNREAD_MESSAGE_COUNT
                ? "".concat(j.MAX_THREAD_UNREAD_MESSAGE_COUNT, "+")
                : e;
            }
          });
        return {
          messageCount: t,
          isMaxMessageCount: null != t && "".concat(t) !== u,
          messageCountText: u,
          unreadCount: r,
        };
      }
      function $(e) {
        var t;
        let u = (0, i.useStateFromStores)([I.default], () =>
            I.default.getUser(e.ownerId)
          ),
          r = (0, i.useStateFromStores)([y.default], () => {
            var t;
            return null === (t = y.default.getMessage(e.id)) || void 0 === t
              ? void 0
              : t.firstMessage;
          }),
          l = (0, m.useNullableUserAuthor)(
            null !== (t = null == r ? void 0 : r.author) && void 0 !== t
              ? t
              : u,
            e
          );
        return (
          n.useEffect(() => {
            null != e.ownerId && v.default.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: u, author: l }
        );
      }
      function ee(e) {
        var t, u;
        let n = I.default.getUser(e.ownerId),
          r =
            null === (t = y.default.getMessage(e.id)) || void 0 === t
              ? void 0
              : t.firstMessage,
          l = (0, m.getUserAuthor)(
            null !== (u = null == r ? void 0 : r.author) && void 0 !== u
              ? u
              : n,
            e
          );
        return { user: n, author: l };
      }
      function et(e) {
        return (0, i.useStateFromStoresArray)(
          [F.default, I.default, p.default],
          () => {
            let t = I.default.getCurrentUser();
            return l(F.default.getTypingUsers(e.id))
              .keys()
              .filter(e => e !== (null == t ? void 0 : t.id))
              .reject(e => p.default.isBlocked(e))
              .map(e => I.default.getUser(e))
              .filter(N.isNotNullish)
              .map(e => e.id)
              .value();
          }
        );
      }
      function eu(e) {
        let {
            firstMessage: t,
            formatInline: u = !0,
            noStyleAndInteraction: r = !0,
          } = e,
          { hasSpoilerEmbeds: l, content: a } = n.useMemo(
            () =>
              (null == t ? void 0 : t.content) != null && "" !== t.content
                ? (0, c.default)(t, {
                    formatInline: u,
                    noStyleAndInteraction: r,
                    allowHeading: !0,
                    allowList: !0,
                  })
                : { hasSpoilerEmbeds: !1, content: null },
            [t, u, r]
          ),
          i = (0, P.useFindFirstMediaProperties)(t, l),
          o = (0, P.useFirstMediaIsEmbed)(t, l);
        return {
          hasSpoilerEmbeds: l,
          content: a,
          firstMedia: i,
          firstMediaIsEmbed: o,
        };
      }
      function en(e) {
        return (0, i.useStateFromStores)([M.default], () =>
          M.default.can(G.Permissions.MANAGE_CHANNELS, e)
        );
      }
      let er = { isNew: !1, hasUnreads: !1 };
      function el(e) {
        return (0, i.useStateFromStoresObject)([A.default, C.default], () => {
          var t;
          let u = A.default.getGuild(
            null !== (t = e.getGuildId()) && void 0 !== t
              ? t
              : G.EMPTY_STRING_SNOWFLAKE_ID
          );
          return null == u
            ? er
            : (0, L.getForumPostReadStates)(e, u, [C.default]);
        });
      }
      function ea(e) {
        return n.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e]
        );
      }
      function ei(e) {
        let t = (0, i.useStateFromStores)([M.default], () =>
          M.default.can(G.Permissions.MANAGE_THREADS, e)
        );
        return n.useMemo(() => {
          var u;
          let n = [
            ...(null !== (u = null == e ? void 0 : e.availableTags) &&
            void 0 !== u
              ? u
              : []),
          ];
          return !t && (n = n.filter(e => !e.moderated)), n;
        }, [t, null == e ? void 0 : e.availableTags]);
      }
      function eo(e, t) {
        let u = (0, i.useStateFromStores)(
            [_.default],
            () => _.default.getChannel(null == e ? void 0 : e.parent_id),
            [e]
          ),
          r = ei(u);
        return n.useMemo(() => t.filter(e => r.includes(e)), [t, r]);
      }
      function ed(e) {
        return (0, i.useStateFromStores)([M.default], () =>
          M.default.can(G.Permissions.READ_MESSAGE_HISTORY, e)
        );
      }
      function es(e) {
        return (0, i.useStateFromStores)([M.default], () =>
          M.default.can(G.Permissions.READ_MESSAGE_HISTORY, e)
        );
      }
      function ef(e) {
        let { channelId: t } = e;
        return (0, i.useStateFromStoresObject)([b.default], () => ({
          isSearchLoading: b.default.getSearchLoading(t),
          searchQuery: b.default.getSearchQuery(t),
          searchResults: b.default.getSearchResults(t),
        }));
      }
      function ec(e, t) {
        let u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { isSearchLoading: r, searchQuery: l } = ef({ channelId: e.id }),
          a = ed(e),
          i = n.useRef(null),
          o = n.useRef(new Set());
        n.useEffect(() => {
          if (null == l && null != i.current) {
            R.default.clearForumSearch(e.id), (i.current = null);
            return;
          }
          if (null == l || 0 === l.length || u) return;
          if (!a) {
            R.default.clearForumSearch(e.id);
            return;
          }
          if ((i.current === l && o.current === t) || r) return;
          let n = setTimeout(async () => {
            (i.current = l), (o.current = t);
            try {
              await R.default.searchForumPosts(e.guild_id, e.id, l, t);
            } catch {}
          }, 350);
          return () => clearTimeout(n);
        }, [a, e.guild_id, e.id, u, r, l, t]);
      }
      function em(e, t) {
        return (0, i.useStateFromStores)(
          [g.default, C.default, _.default],
          () => {
            let u = _.default.getChannel(t);
            if (!(null == u ? void 0 : u.isForumLikeChannel())) return 0;
            let n = g.default.getActiveJoinedUnreadThreadsForParent(e, t),
              r = g.default.getActiveUnjoinedUnreadThreadsForParent(e, t),
              l = C.default.ackMessageId(t),
              a = Object.values(n).filter(e => {
                if (null == l) return !1;
                let t = C.default.lastMessageId(e.channel.id);
                return null != t && t > l;
              }),
              i = Object.values(r).filter(e => {
                if (null == l) return !1;
                let t = C.default.lastMessageId(e.id);
                return null != t && t > l;
              });
            return a.length + i.length;
          }
        );
      }
      function eg(e) {
        let {
            channel: t,
            sortOrder: u,
            tagFilter: r,
            shouldAutomaticallyAck: l,
          } = e,
          a = (0, i.useStateFromStoresArray)([U.default], () =>
            U.default.getThreadIds(t.id, u, r)
          ),
          o = em(t.guild_id, t.id),
          s = (0, i.useStateFromStores)(
            [U.default],
            () => l && (o > 0 || U.default.getCanAckThreads()),
            [l, o]
          );
        return (
          n.useEffect(() => {
            s && (0, d.ackChannel)(t);
          }, [t, s]),
          a
        );
      }
    },
    419501: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return m;
          },
        }),
        u("222007");
      var n = u("627445"),
        r = u.n(n),
        l = u("446674"),
        a = u("913144"),
        i = u("689275"),
        o = u("42203"),
        d = u("660478");
      let s = {},
        f = new Set();
      class c extends l.default.Store {
        initialize() {
          this.waitFor(i.default, o.default, d.default);
        }
        getCount(e) {
          return s[e];
        }
        getThreadIdsMissingCounts(e, t) {
          return (
            r(
              i.default.hasLoaded(e),
              "must wait for THREAD_LIST_SYNC before calling this"
            ),
            t.filter(e => !(e in s) && !f.has(e))
          );
        }
      }
      c.displayName = "ForumPostUnreadCountStore";
      var m = new c(a.default, {
        CONNECTION_OPEN: function () {
          (s = {}), (f = new Set());
        },
        THREAD_CREATE: function (e) {
          let { channel: t, isNewlyCreated: u } = e;
          if (!u || !i.default.hasLoaded(t.guild_id)) return !1;
          s[t.id] = 0;
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, optimistic: u, isPushNotification: n } = e;
          if (u || n || !(t in s)) return !1;
          s[t]++;
        },
        FORUM_UNREADS: function (e) {
          let { threads: t } = e;
          t.forEach(e => {
            null != e.count && (s[e.threadId] = e.count);
          });
        },
        MESSAGE_ACK: function (e) {
          let { channelId: t } = e;
          if (!(t in s)) {
            let e = o.default.getChannel(t),
              u = o.default.getChannel(null == e ? void 0 : e.parent_id);
            if (!(null == u ? void 0 : u.isForumLikeChannel())) return !1;
          }
          s[t] = d.default.getUnreadCount(t);
        },
        REQUEST_FORUM_UNREADS: function (e) {
          let { threads: t } = e;
          t.forEach(e => {
            let { threadId: t } = e;
            return f.add(t);
          });
        },
      });
    },
    69890: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          getMessageCountText: function () {
            return i;
          },
          formatMessageCountLabel: function () {
            return d;
          },
        });
      var n = u("299039"),
        r = u("648564"),
        l = u("782340");
      let a = e => n.default.compare("992549565104128000", e) > -1,
        i = (e, t) => {
          if (null == e || e < 0) return "0";
          {
            let u = a(t);
            return (null == t || u) && e >= r.MAX_THREAD_MESSAGE_COUNT_OLD
              ? "50+"
              : e >= r.MAX_THREAD_MESSAGE_COUNT
                ? "100k+"
                : "".concat(e);
          }
        },
        o = (e, t, u) => {
          let n = i(e, u);
          return "0" === n
            ? l.default.Messages.SEE_THREAD
            : t.format({ count: n });
        },
        d = (e, t) => o(e, l.default.Messages.THREAD_MESSAGE_COUNT, t);
    },
    191542: function (e, t, u) {
      "use strict";
      let n;
      u.r(t),
        u.d(t, {
          default: function () {
            return A;
          },
        });
      var r = u("446674"),
        l = u("872717"),
        a = u("913144"),
        i = u("718517"),
        o = u("271938"),
        d = u("401848"),
        s = u("49111"),
        f = u("724210");
      let c = 10 * i.default.Millis.SECOND,
        m = 1.5 * i.default.Millis.SECOND,
        g = {},
        S = Object.freeze({});
      function T(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : S;
      }
      function E(e) {
        var t, u;
        let { channelId: n, userId: r } = e,
          l = { ...T(n) };
        clearTimeout(l[r]),
          (l[r] =
            ((t = n),
            (u = r),
            setTimeout(() => {
              a.default.dispatch({
                type: "TYPING_STOP",
                channelId: t,
                userId: u,
              });
            }, c))),
          (g[n] = l);
      }
      function h(e) {
        let { channelId: t, userId: u } = e,
          n = g[t];
        if (null == n || null == n[u]) return !1;
        let r = { ...n };
        clearTimeout(r[u]), delete r[u], (g[t] = r);
      }
      function _() {
        g = {};
      }
      class v extends r.default.Store {
        getTypingUsers(e) {
          return T(e);
        }
        isTyping(e, t) {
          return null != T(e)[t];
        }
      }
      v.displayName = "TypingStore";
      var A = new v(a.default, {
        TYPING_START: E,
        TYPING_STOP: h,
        TYPING_START_LOCAL: function (e) {
          let { channelId: t } = e,
            u = o.default.getId();
          if (null == u || t === f.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
            return !1;
          null != n &&
            n.channelId !== t &&
            (null != n.timeout && clearTimeout(n.timeout), (n = null));
          let r = Date.now(),
            i = 0.8 * c;
          if (null != n && (null != n.timeout || n.prevSend + i > r)) return !1;
          let g = null == n || n.prevSend > r - 2 * i ? m : 0,
            h = setTimeout(() => {
              if (
                null != n &&
                n.channelId === t &&
                u === o.default.getId() &&
                null != n.timeout
              )
                (n.timeout = null),
                  !(
                    (function (e) {
                      let t = T(e);
                      return t === S ? 0 : Object.keys(t).length;
                    })(t) > 5
                  ) &&
                    l.default
                      .post({ url: s.Endpoints.TYPING(t), oldFormErrors: !0 })
                      .then(e => {
                        if (200 === e.status) {
                          var u, n;
                          let r =
                              null !== (u = e.body.message_send_cooldown_ms) &&
                              void 0 !== u
                                ? u
                                : 0,
                            l =
                              null !== (n = e.body.thread_create_cooldown_ms) &&
                              void 0 !== n
                                ? n
                                : 0;
                          r > 0 &&
                            a.default.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: t,
                              slowmodeType: d.SlowmodeType.SendMessage,
                              cooldownMs: r,
                            }),
                            l > 0 &&
                              a.default.dispatch({
                                type: "SLOWMODE_SET_COOLDOWN",
                                channelId: t,
                                slowmodeType: d.SlowmodeType.CreateThread,
                                cooldownMs: l,
                              });
                        }
                      });
            }, g);
          return (
            (n = { channelId: t, timeout: h, prevSend: r }),
            E({ channelId: t, userId: u })
          );
        },
        TYPING_STOP_LOCAL: function (e) {
          let { channelId: t } = e,
            u = o.default.getId();
          return (
            null != u &&
            null != n &&
            n.channelId === t &&
            null != n.timeout &&
            (clearTimeout(n.timeout),
            (n = null),
            h({ channelId: t, userId: u }))
          );
        },
        CONNECTION_OPEN: _,
        OVERLAY_INITIALIZE: _,
        MESSAGE_CREATE: function (e) {
          let {
            channelId: t,
            message: { author: u },
            optimistic: r,
          } = e;
          return (
            r &&
              !(function (e) {
                if (null == n || n.channelId !== e) return;
                null != n.timeout && clearTimeout(n.timeout), (n = null);
              })(t),
            null != u && h({ channelId: t, userId: u.id })
          );
        },
      });
    },
  },
]);
//# sourceMappingURL=a279867d08ebbeeb824d.js.map
