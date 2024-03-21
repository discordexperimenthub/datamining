(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9470"],
  {
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    696675: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("886181");
      n.es(l, t);
    },
    15433: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchDirectoryEntries: function () {
            return s;
          },
        });
      var l = n("483366"),
        u = n.n(l),
        i = n("872717"),
        a = n("913144"),
        r = n("730647"),
        d = n("49111");
      let s = u(async e => {
        try {
          a.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let t = await i.default.get({
            url: d.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT },
          });
          a.default.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: e,
            entries: t.body,
          });
        } catch (e) {
          a.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var l = n("917351"),
        u = n.n(l),
        i = n("446674"),
        a = n("913144"),
        r = n("398604"),
        d = n("813006"),
        s = n("730647");
      let o = !1,
        c = {},
        f = {},
        E = {},
        v = e => (
          (E[e.guild_scheduled_event.id] = new d.default(
            e.guild_scheduled_event.guild
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class g extends i.default.Store {
        isFetching() {
          return o;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return c[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
      }
      g.displayName = "EventDirectoryStore";
      var S = new g(a.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          o = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          o = !1;
          let l = u.sortBy(
              [...n],
              [
                function (e) {
                  return (0, r.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = u.map(l, v);
          c[t] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          o = !1;
        },
      });
    },
    49129: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNextShownUpcomingEventNoticeType: function () {
            return r;
          },
        });
      var l = n("866227"),
        u = n.n(l),
        i = n("299039"),
        a = n("745049");
      function r(e, t, n, l) {
        let r = u(),
          d = new Date(e.scheduled_start_time).getTime(),
          s = { start: d - a.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: d };
        if (r.isBetween(s.start, s.end)) {
          if (null != t) {
            let e = u(t),
              n = e.isBetween(s.start, s.end),
              i = e.isBetween(
                u(d).subtract(a.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                d
              );
            return n || (i && !l)
              ? void 0
              : a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = i.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : o) + a.NEW_EVENT_WINDOW_MILLISECONDS,
            d
          ),
          f = r.isBetween(o, c);
        if (f && null == t && !l)
          return a.UpcomingGuildEventNoticeTypes.NEW_EVENT;
      }
    },
    431934: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("446674"),
        u = n("913144"),
        i = n("271938"),
        a = n("398604"),
        r = n("49129"),
        d = n("745049");
      let s = {},
        o = {};
      function c(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class f extends l.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (s =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (o =
                null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n
                  ? n
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(e) {
          return s[e];
        }
        getAllEventDismissals() {
          return s;
        }
        getUpcomingNoticeSeenTime(e) {
          return o[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return o;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: o };
        }
      }
      (f.displayName = "UpcomingEventNoticesStore"),
        (f.persistKey = "UpcomingEventNotices");
      var E = new f(u.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...s };
          (n[t] = Date.now()), (s = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === d.GuildScheduledEventStatus.CANCELED ||
            t.status === d.GuildScheduledEventStatus.COMPLETED) &&
            c(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          c(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            l = i.default.getId();
          if (t !== l) return;
          let u = a.default.getGuildScheduledEvent(n);
          if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = s[n];
          if (null != c) return;
          let f = o[n],
            E = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
          if (E === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...s };
            (e[n] = Date.now()), (s = e);
          }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
          let { guildEventId: t } = e,
            n = { ...o };
          (n[t] = Date.now()), (o = n);
        },
      });
    },
    334683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("884691"),
        u = n("446674"),
        i = n("817963"),
        a = n("923959"),
        r = n("305961"),
        d = n("957255"),
        s = n("49111"),
        o = (e, t) => {
          let n = (0, u.useStateFromStores)(
              [r.default],
              () => r.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: o } = (0, i.useManageResourcePermissions)(n),
            c = (0, u.useStateFromStores)(
              [a.default],
              () => a.default.getChannels(e)[a.GUILD_VOCAL_CHANNELS_KEY],
              [e]
            ),
            f = l.useMemo(
              () =>
                null != t
                  ? c.filter(e => {
                      let { channel: n } = e;
                      return n.type === t;
                    })
                  : c,
              [c, t]
            ),
            E = (0, u.useStateFromStores)(
              [d.default],
              () => {
                if (d.default.can(s.Permissions.ADMINISTRATOR, n) || o)
                  return !0;
                for (let { channel: e } of f) {
                  let { canCreateGuildEvent: t } = (0,
                  i.getManageResourcePermissions)(e);
                  if (t) return !0;
                }
                return !1;
              },
              [f, n, o]
            );
          return E;
        };
    },
    152475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canEveryoneRoleViewEvent: function () {
            return v;
          },
          isGuildEventInvitable: function () {
            return g;
          },
          default: function () {
            return S;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("242757"),
        i = n("834052"),
        a = n("42203"),
        r = n("923959"),
        d = n("305961"),
        s = n("957255"),
        o = n("991170"),
        c = n("398604"),
        f = n("745049"),
        E = n("49111");
      function v(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [a.default];
        let { entityType: l, channelId: u } =
            "entity_type" in (t = e)
              ? { entityType: t.entity_type, channelId: t.channel_id }
              : t,
          i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
        if (i) return !0;
        let r = n.getChannel(u);
        return null != r && o.canEveryoneRole(E.Permissions.VIEW_CHANNEL, r);
      }
      function g(e) {
        let [t, n, l, o] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.default, a.default, d.default, i.default];
        if ((0, c.isGuildEventEnded)(e)) return !1;
        let { guild_id: E, channel_id: g } = e,
          S = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL,
          h = S ? t.getDefaultChannel(e.guild_id) : n.getChannel(g),
          N = l.getGuild(E),
          _ = o.getStageInstanceByChannel(g);
        return (
          !!(0, u.canViewInviteModal)(s.default, N, h, _) &&
          null != h &&
          v(e, [n])
        );
      }
      function S(e) {
        return (0, l.useStateFromStores)(
          [r.default, a.default, d.default, i.default],
          () => g(e, [r.default, a.default, d.default, i.default]),
          [e]
        );
      }
    },
    202358: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("446674"),
        u = n("567469"),
        i = n("998716"),
        a = n("834052"),
        r = n("42203"),
        d = n("305961");
      function s(e) {
        let {
            id: t,
            data: { guild: n, instance: s, speakers: o, participantCount: c },
            context: f,
          } = e,
          E = (0, l.useStateFromStores)(
            [d.default, r.default],
            () => {
              var e;
              return d.default.getGuild(
                null === (e = r.default.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.getGuildId()
              );
            },
            [t]
          ),
          v = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getStageInstanceByChannel(t),
            [t]
          ),
          g = (0, u.useStageParticipants)(
            t,
            i.StageChannelParticipantNamedIndex.SPEAKER
          ),
          S = (0, u.useStageParticipantsCount)(t),
          h = null != v ? g : o,
          N = (null != v ? S : c) - h.length;
        return {
          channelId: t,
          guild: null != E ? E : n,
          stage: null != v ? v : s,
          speakers: h,
          audienceCount: N,
          context: f,
        };
      }
    },
    598639: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("446674"),
        u = n("962199"),
        i = n("305961");
      function a(e, t) {
        return (0, l.useStateFromStoresObject)(
          [i.default, u.default],
          () => {
            let n = i.default.getGuild(e),
              l = null != n;
            return (
              null == n &&
                null != t &&
                (n = u.default.getCachedGuildByEventId(t)),
              { isMember: l, guild: n }
            );
          },
          [e, t]
        );
      }
    },
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
          useActiveEvent: function () {
            return m;
          },
          useActiveEventsByChannel: function () {
            return p;
          },
          useGuildUpcomingEventsNotice: function () {
            return T;
          },
          useGuildActiveEvent: function () {
            return x;
          },
          useGuildChannelScheduledEvents: function () {
            return G;
          },
          useFirstActiveEventChannel: function () {
            return D;
          },
          useImminentUpcomingGuildEvents: function () {
            return L;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("884691"),
        u = n("446674"),
        i = n("962199"),
        a = n("42203"),
        r = n("923959"),
        d = n("305961"),
        s = n("957255"),
        o = n("718517"),
        c = n("449008"),
        f = n("398604"),
        E = n("49129"),
        v = n("431934"),
        g = n("466148"),
        S = n("822516"),
        h = n("745049"),
        N = n("49111");
      let _ = [],
        C = 15 * o.default.Millis.MINUTE;
      function I(e, t) {
        return (0, u.useStateFromStoresArray)(
          [d.default, i.default, f.default, s.default, a.default, r.default],
          () => {
            let n = d.default.getGuild(e);
            if (null == n) return _;
            let l = n.hasFeature(N.GuildFeatures.HUB);
            if (l) {
              var u, o;
              let e =
                  null === (u = r.default.getDefaultChannel(n.id)) ||
                  void 0 === u
                    ? void 0
                    : u.id,
                t =
                  null !== (o = i.default.getEventDirectoryEntries(e)) &&
                  void 0 !== o
                    ? o
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = f.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.default.getCachedGuildScheduledEventById(t);
                })
                .filter(c.isNotNullish);
            }
            let E = f.default.getGuildScheduledEventsByIndex(
              null != t
                ? t
                : f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)
            );
            return E.filter(e => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = a.default.getChannel(t);
              return s.default.can(N.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function m(e) {
        return (0, u.useStateFromStores)(
          [f.default, a.default, s.default],
          () => {
            let t = a.default.getChannel(e);
            if (!s.default.can(N.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let l = f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return l.length > 0 ? l[0] : null;
          },
          [e]
        );
      }
      function p(e) {
        let t = (0, u.useStateFromStoresArray)(
            [f.default],
            () => f.default.getGuildScheduledEventsForGuild(e),
            [e]
          ),
          n = l.useMemo(() => {
            let e = new Map();
            return (
              t.forEach(t => {
                let n = t.channel_id;
                null != n && e.set(n, t);
              }),
              e
            );
          }, [t]);
        return n;
      }
      function T(e) {
        var t, n;
        let l =
            ((t = e),
            (0, u.useStateFromStoresArray)(
              [f.default, a.default, s.default],
              () => {
                let e = f.default.getGuildScheduledEventsByIndex(
                  f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== h.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = a.default.getChannel(e.channel_id);
                  return s.default.can(N.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          i = (0, u.useStateFromStoresObject)([v.default], () =>
            v.default.getAllEventDismissals()
          ),
          r = (0, u.useStateFromStoresObject)([v.default], () =>
            v.default.getAllUpcomingNoticeSeenTimes()
          ),
          d = (0, u.useStateFromStoresObject)(
            [f.default],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, S.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: f.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l]
          );
        if (null != l && null != d)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              u = i[t.id],
              a = r[t.id],
              s = null !== (n = d[t.id]) && void 0 !== n && n,
              o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, a, s);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function x(e) {
        return (0, u.useStateFromStores)(
          [f.default, a.default, s.default],
          () => {
            let t = f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                !(0, f.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = a.default.getChannel(e.channel_id);
              return s.default.can(N.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function G(e) {
        return (0, u.useStateFromStores)(
          [f.default],
          () =>
            f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function D(e) {
        return (0, u.useStateFromStores)(
          [a.default, f.default],
          () => {
            let t = f.default
              .getGuildScheduledEventsByIndex(
                f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
              )
              .find(e => {
                let t = a.default.getChannel(e.channel_id);
                return null != t;
              });
            return a.default.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e]
        );
      }
      function L(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, C);
          return () => clearInterval(e);
        }, []);
        let i = (0, u.useStateFromStores)(
            [f.default],
            () =>
              null == e
                ? []
                : f.default.getGuildScheduledEventsByIndex(
                    f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          a = l.useMemo(
            () =>
              i.filter(e => {
                let { startTime: t, endTime: n } = (0, g.getEventSchedule)(e),
                  { withinStartWindow: l, diffMinutes: u } = (0,
                  S.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== h.GuildScheduledEventStatus.ACTIVE && l && u < 15
                );
              }),
            [i]
          );
        return a;
      }
    },
    669195: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SHARE_EVENT_DETAILS_LINK: function () {
            return l;
          },
        });
      let l = e => {
        let { guildId: t, guildEventId: n } = e;
        return "https://discord.com/events/".concat(t, "/").concat(n);
      };
    },
    473031: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("922770"),
        a = n("267567"),
        r = n("998716"),
        d = n("834052"),
        s = n("42203"),
        o = n("957255"),
        c = n("945956"),
        f = n("697218"),
        E = n("374021"),
        v = n("398604"),
        g = n("152475"),
        S = n("202358"),
        h = n("598639"),
        N = n("189443"),
        _ = n("841363"),
        C = n("822516"),
        I = n("93550"),
        m = n("617347"),
        p = n("369404"),
        T = n("49111");
      function x(e) {
        var t;
        let {
            guildEvent: n,
            guildId: x,
            truncate: G,
            onActionTaken: D,
            className: L,
            isNew: R,
          } = e,
          {
            id: M,
            guild_id: y,
            channel_id: A,
            creator_id: U,
            name: V,
            description: O,
            entity_type: j,
            image: P,
            recurrence_rule: F,
          } = n,
          k = (0, C.getNextRecurrenceIdInEvent)(n),
          H = (0, u.useStateFromStores)(
            [v.default],
            () => v.default.isInterestedInEventRecurrence(M, k),
            [M, k]
          ),
          b = (0, u.useStateFromStores)(
            [a.default],
            () => a.default.isLurking(y),
            [y]
          ),
          w = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getStageInstanceByChannel(A),
            [A]
          ),
          B = (0, u.useStateFromStores)(
            [s.default],
            () => s.default.getChannel(A),
            [A]
          ),
          Y = (0, u.useStateFromStores)(
            [f.default],
            () => f.default.getUser(U),
            [U]
          ),
          { speakers: z } = (0, S.default)({
            id: A,
            data: {
              guild: null,
              instance: w,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: y, instance: w },
          }),
          W = (0, u.useStateFromStores)([c.default], () =>
            c.default.getChannelId()
          ),
          K = (0, v.isGuildScheduledEventActive)(n),
          q = W === A && null != W && K,
          Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE),
          J = Z.length,
          X = (0, u.useStateFromStores)(
            [o.default],
            () => o.default.can(T.Permissions.CONNECT, B),
            [B]
          ),
          Q = (0, g.default)(n),
          { isMember: $, guild: ee } = (0, h.default)(y, M),
          et = (0, p.default)({
            guild: ee,
            channel: B,
            guildScheduledEvent: n,
            isActive: K,
            recurrenceId: k,
            onActionTaken: D,
          }),
          en = (0, i.default)(x),
          el = b
            ? void 0
            : e =>
                (0, E.openGuildEventDetails)({
                  eventId: M,
                  parentGuildId: x,
                  recurrenceId: e,
                });
        return (0, l.jsx)(m.default, {
          guild: ee,
          channel: B,
          creator: Y,
          name: V,
          entityType: j,
          description: null != O ? O : void 0,
          location:
            null !== (t = (0, _.getLocationFromEvent)(n)) && void 0 !== t
              ? t
              : void 0,
          imageSource: null != P ? (0, I.default)(n) : void 0,
          imageLocation: m.GuildEventBodyImageLocation.THUMBNAIL,
          isActive: K,
          isUserLurking: b,
          isJoined: q,
          isMember: $,
          isHub: en,
          speakers: Z,
          canConnect: X,
          speakerCount: J,
          rsvped: H,
          canInvite: Q,
          ...et,
          className: L,
          onClick: el,
          truncate: G,
          isNew: R,
          guildEventId: M,
          recurrenceRule: (0, N.recurrenceRuleFromServer)(F),
          recurrenceId: k,
        });
      }
    },
    617347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventBodyImageLocation: function () {
            return u;
          },
          default: function () {
            return U;
          },
        });
      var l,
        u,
        i = n("37983"),
        a = n("884691"),
        r = n("414456"),
        d = n.n(r),
        s = n("446674"),
        o = n("77078"),
        c = n("656038"),
        f = n("419830"),
        E = n("817963"),
        v = n("957255"),
        g = n("476263"),
        S = n("718550"),
        h = n("398604"),
        N = n("1339"),
        _ = n("613767"),
        C = n("822516"),
        I = n("707916"),
        m = n("255050"),
        p = n("400271"),
        T = n("427554"),
        x = n("644189"),
        G = n("29913"),
        D = n("745049"),
        L = n("49111"),
        R = n("782340"),
        M = n("402155");
      function y(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, E.useManageResourcePermissions)(t),
          u = (0, s.useStateFromStores)(
            [v.default],
            () => !t.isGuildVocal() || v.default.can(L.Permissions.CONNECT, t),
            [t]
          ),
          r = a.useMemo(() => (0, c.default)(t), [t]),
          g = (0, f.getChannelIconComponent)(t);
        return (0, i.jsx)(o.Tooltip, {
          text: R.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !u && null != n,
          children: e =>
            (0, i.jsxs)(o.Clickable, {
              ...e,
              className: d(M.inline, M.channelContainer, {
                [M.channelContainerEnabled]: u && null != n,
                [M.channelContainerDisabled]: !u && null != n,
              }),
              onClick: n,
              children: [
                (0, i.jsx)(o.Tooltip, {
                  text: R.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && u && null != n,
                  children: e =>
                    null != g
                      ? (0, i.jsx)(g, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: M.icon,
                        })
                      : null,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: M.channelLocation,
                  children: t.name,
                }),
              ],
            }),
        });
      }
      function A(e) {
        let {
          guild: t,
          channel: n,
          onJoinClick: l,
          handleLocationClick: u,
          location: a,
          isExternal: r,
          isHub: s,
        } = e;
        if (s)
          return null == t
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: M.inline,
                children: [
                  (0, i.jsx)(g.default, {
                    className: M.guildIcon,
                    size: g.default.Sizes.MINI,
                    active: !0,
                    guild: t,
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == t ? void 0 : t.name,
                  }),
                ],
              });
        return null != n
          ? (0, i.jsx)(y, { channel: n, onClick: l })
          : (0, i.jsxs)(o.Clickable, {
              className: M.inline,
              onClick: u,
              children: [
                (0, i.jsx)(S.default, {
                  height: 20,
                  width: 20,
                  className: d(M.channelContainer, M.icon),
                }),
                (0, i.jsx)(o.Text, {
                  className: r ? M.externalLocation : M.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, N.guildEventDetailsParser)(a, !0),
                }),
              ],
            });
      }
      function U(e) {
        let {
            className: t,
            guild: n,
            channel: l,
            creator: u,
            name: a,
            entityType: r,
            description: c,
            imageLocation: f = 0,
            imageSource: E,
            isActive: v,
            isUserLurking: g,
            isJoined: S = !1,
            isMember: N = !1,
            isHub: L = !1,
            speakers: R,
            speakerCount: y,
            rsvped: U,
            canInvite: V,
            location: O,
            truncate: j,
            onContextMenu: P,
            onJoinClick: F,
            onJoinGuildClick: k,
            onGoToGuildClick: H,
            onRsvpClick: b,
            onStartClick: w,
            onInviteClick: B,
            onEndClick: Y,
            onClick: z,
            isNew: W,
            guildEventId: K,
            eventPreview: q,
            recurrenceRule: Z,
            recurrenceId: J,
          } = e,
          X = (0, _.isChannelPublic)(l, r),
          Q = r === D.GuildScheduledEventEntityTypes.EXTERNAL,
          $ = (0, s.useStateFromStores)([h.default], () =>
            h.default.getGuildScheduledEvent(K)
          ),
          ee = [];
        if (null != Z && null != $) {
          let e = (0, C.getRRule)(Z);
          ee = (0, C.generateNextRecurrences)(
            4,
            e,
            new Date($.scheduled_start_time)
          );
        }
        let et = ee.length > 0;
        return (0, i.jsxs)(o.ClickableContainer, {
          "aria-label": a,
          onClick: () => (null == z ? void 0 : z(J)),
          onContextMenu: P,
          className: d(M.card, { [M.joined]: S, [M.lurking]: g }, t),
          children: [
            (0, i.jsxs)("div", {
              className: d(M.padding, { [M.isRecurring]: et }),
              children: [
                0 === f && (0, i.jsx)(m.default, { source: E }),
                (0, i.jsx)(p.default, {
                  creator: u,
                  name: a,
                  description: c,
                  imageSource: 1 === f ? E : null,
                  truncate: j,
                  guildId: null == n ? void 0 : n.id,
                  isHub: L,
                  isNew: W,
                  guildEventId: K,
                  eventPreview: q,
                  recurrenceId: J,
                }),
                v &&
                  null != n &&
                  null != R &&
                  y > 0 &&
                  (0, i.jsx)(G.default, {
                    guild: n,
                    speakers: R,
                    speakerCount: y,
                    className: M.spacing,
                  }),
                (0, i.jsx)("hr", { className: M.divider }),
                (0, i.jsxs)("div", {
                  className: d(M.inline, M.footer),
                  children: [
                    (0, i.jsx)(A, {
                      guild: n,
                      channel: l,
                      onJoinClick: F,
                      handleLocationClick: Q
                        ? e => e.stopPropagation()
                        : void 0,
                      location: O,
                      isExternal: Q,
                      isHub: L,
                    }),
                    L
                      ? (0, i.jsx)(x.default, {
                          isActive: v,
                          isUserLurking: g,
                          isMember: N,
                          rsvped: U,
                          onRsvpClick: b,
                          onJoinGuildClick: k,
                          onGoToGuildClick: H,
                          guildName: null == n ? void 0 : n.name,
                          canInvite: V,
                          isChannelPublic: X,
                          onInviteClick: B,
                        })
                      : (0, i.jsx)(I.default, {
                          entityType: r,
                          isJoined: S,
                          isActive: v,
                          isUserLurking: g,
                          rsvped: U,
                          canInvite: V,
                          isChannelPublic: X,
                          onContextMenu: P,
                          onJoinClick: F,
                          onRsvpClick: b,
                          onStartClick: w,
                          onInviteClick: B,
                          onEndClick: Y,
                        }),
                  ],
                }),
                et && (0, i.jsx)("hr", { className: M.divider }),
              ],
            }),
            et &&
              (0, i.jsx)(T.default, {
                guildId: null == n ? void 0 : n.id,
                recurrenceRule: Z,
                guildEventId: K,
                onRecurrenceClick: z,
              }),
          ],
        });
      }
      ((l = u || (u = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    558286: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildEventModalStore: function () {
            return u;
          },
        });
      var l = n("308503");
      let u = (0, l.default)(e => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          e({ canCloseModal: t });
        },
      }));
    },
    659707: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        i = n("917351"),
        a = n.n(i),
        r = n("446674"),
        d = n("77078"),
        s = n("267363"),
        o = n("15433"),
        c = n("27978"),
        f = n("923959"),
        E = n("124948"),
        v = n("305961"),
        g = n("660478"),
        S = n("476765"),
        h = n("943232"),
        N = n("945330"),
        _ = n("599110"),
        C = n("449008"),
        I = n("299039"),
        m = n("933326"),
        p = n("334683"),
        T = n("534222"),
        x = n("473031"),
        G = n("266763"),
        D = n("842672"),
        L = n("745049"),
        R = n("49111"),
        M = n("133335"),
        y = n("782340"),
        A = n("290487");
      function U(e) {
        let { transitionState: t, onClose: i, guildId: U } = e,
          V = (0, S.useUID)(),
          O = (0, r.useStateFromStores)([v.default], () =>
            v.default.getGuild(U)
          ),
          j = (0, p.default)(null == O ? void 0 : O.id),
          P = (0, T.default)(U),
          F = u.useRef(g.default.ackMessageId(U, M.ReadStateTypes.GUILD_EVENT)),
          k = (0, D.default)();
        return (
          u.useEffect(() => {
            P.forEach(e => m.default.getGuildEventUserCounts(U, e.id, [])),
              m.default.getGuildEventsForCurrentUser(U);
          }, [P, U]),
          u.useEffect(() => {
            let e = v.default.getGuild(U);
            if (!(null == e ? void 0 : e.hasFeature(R.GuildFeatures.HUB)))
              return;
            let { showHubEventsList: t } = c.default.getCurrentConfig({
              guildId: U,
              location: "d3755f_1",
            });
            if (!t) return;
            let n = f.default.getDefaultChannel(U);
            null != n && o.fetchDirectoryEntries(n.id);
          }, [U]),
          u.useEffect(() => {
            _.default.track(R.AnalyticEvents.OPEN_MODAL, {
              type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
              guild_id: U,
              guild_events_count: P.length,
            });
          }, []),
          u.useEffect(() => {
            a(P)
              .map(e => e.creator_id)
              .filter(C.isNotNullish)
              .uniq()
              .forEach(e => {
                E.default.requestMember(U, e);
              });
          }, [U, P]),
          u.useEffect(() => {
            null != U &&
              (0, s.ackGuildFeature)(U, M.ReadStateTypes.GUILD_EVENT);
          }, [U]),
          (0, l.jsxs)(d.ModalRoot, {
            size: d.ModalSize.MEDIUM,
            transitionState: t,
            "aria-labelledby": V,
            children: [
              (0, l.jsxs)(d.ModalHeader, {
                className: A.header,
                children: [
                  (0, l.jsx)(h.default, { className: A.icon }),
                  (0, l.jsx)(d.Heading, {
                    id: V,
                    variant: "heading-md/semibold",
                    children:
                      P.length > 0
                        ? y.default.Messages.GUILD_EVENTS_PLURAL.format({
                            number: P.length,
                          })
                        : y.default.Messages.GUILD_EVENTS,
                  }),
                  j &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: A.divider,
                          children: "|",
                        }),
                        (0, l.jsx)(d.Button, {
                          size: d.Button.Sizes.MIN,
                          onClick: () => {
                            (0, d.openModalLazy)(async () => {
                              let { default: e } = await n
                                .el("590942")
                                .then(n.bind(n, "590942"));
                              return t => (0, l.jsx)(e, { ...t, guildId: U });
                            }, k);
                          },
                          innerClassName: A.button,
                          children: y.default.Messages.SCHEDULE_EVENT,
                        }),
                      ],
                    }),
                  (0, l.jsx)(d.Clickable, {
                    onClick: i,
                    className: A.iconButton,
                    "aria-label": y.default.Messages.CLOSE,
                    children: (0, l.jsx)(N.default, { className: A.icon }),
                  }),
                ],
              }),
              (0, l.jsx)(d.ModalContent, {
                className: A.content,
                children:
                  P.length > 0
                    ? P.map(e =>
                        (0, l.jsx)(
                          x.default,
                          {
                            guildEvent: e,
                            guildId: U,
                            onActionTaken: i,
                            isNew:
                              null != F.current &&
                              I.default.compare(e.id, F.current) > 0,
                          },
                          e.id
                        )
                      )
                    : (0, l.jsx)(G.default, { guildId: U, onClose: i }),
              }),
            ],
          })
        );
      }
    },
    266763: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        a = n("592407"),
        r = n("27978"),
        d = n("119184"),
        s = n("305961"),
        o = n("957255"),
        c = n("943232"),
        f = n("49111"),
        E = n("782340"),
        v = n("801813");
      function g(e) {
        let { guildId: t, onClose: n } = e,
          { showHubEventsList: g } = r.default.useExperiment(
            { guildId: t, location: "6597ca_1" },
            { autoTrackExposure: !1 }
          ),
          S = (0, u.useStateFromStores)(
            [s.default, o.default],
            () => {
              let e = s.default.getGuild(t);
              return o.default.can(f.Permissions.MANAGE_ROLES, e);
            },
            [t]
          ),
          h = (0, u.useStateFromStores)(
            [s.default],
            () => {
              let e = s.default.getGuild(t);
              return (
                g && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
              );
            },
            [t, g]
          );
        return (0, l.jsxs)("div", {
          className: v.container,
          children: [
            (0, l.jsx)(d.default, {
              children: (0, l.jsx)("div", {
                className: v.circle,
                children: (0, l.jsx)(c.default, {
                  height: 40,
                  width: 40,
                  className: v.icon,
                }),
              }),
            }),
            (0, l.jsx)(i.Heading, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              className: v.title,
              children: h
                ? E.default.Messages.HUB_EVENTS_HEADER_TITLE
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE,
            }),
            (0, l.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: v.subtitle,
              children: h
                ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE,
            }),
            S &&
              (0, l.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: v.roleTip,
                children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                  onClick: () => {
                    a.default.open(t, f.GuildSettingsSections.ROLES), n();
                  },
                }),
              }),
          ],
        });
      }
    },
    29913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("414456"),
        i = n.n(u),
        a = n("77078"),
        r = n("849467"),
        d = n("782340"),
        s = n("602552");
      function o(e) {
        let { guild: t, speakers: n, speakerCount: u, className: o } = e,
          c = n.slice(0, 5),
          f = c.map(e => {
            var n, u;
            return (0, l.jsxs)(
              "div",
              {
                className: s.speakerContainer,
                children: [
                  (0, l.jsx)(a.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (n = e.user) || void 0 === n
                          ? void 0
                          : n.getAvatarURL(t.id, 20),
                    size: a.AvatarSizes.SIZE_20,
                    className: s.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar"
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: s.textInGridContainer,
                    children: (0, l.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: s.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (u = e.user) || void 0 === u
                  ? void 0
                  : u.id
            );
          }),
          E = u - c.length;
        return (0, l.jsxs)("div", {
          className: i(s.grid, o),
          children: [
            f,
            E > 0 &&
              (0, l.jsxs)("div", {
                className: s.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: s.iconMicrophone,
                    children: (0, l.jsx)(r.default, { height: 12 }),
                  }),
                  (0, l.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: s.textInGrid,
                    children:
                      d.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: E }
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    936965: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("37983"),
        u = n("884691"),
        i = n("77078"),
        a = n("322224"),
        r = n("832588"),
        d = n("745049"),
        s = n("782340"),
        o = n("505326");
      function c(e) {
        let { event: t, recurrenceId: n, guildId: c, onRsvp: f, ...E } = e,
          [v, g] = u.useState(r.ResponseOptions.SERIES),
          S = (0, r.getExistingRsvp)(t.id, null),
          h =
            (null == S ? void 0 : S.response) ===
            d.GuildScheduledEventUserResponses.INTERESTED,
          N = h
            ? d.GuildScheduledEventUserResponses.UNINTERESTED
            : d.GuildScheduledEventUserResponses.INTERESTED,
          _ =
            N === d.GuildScheduledEventUserResponses.INTERESTED
              ? s.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : s.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, l.jsx)(i.ConfirmModal, {
          ...E,
          header: _,
          confirmText: s.default.Messages.OK,
          cancelText: s.default.Messages.CANCEL,
          onConfirm: () => {
            v === r.ResponseOptions.SERIES
              ? a.default.updateRsvp(t.id, null, c, N)
              : a.default.updateRsvp(t.id, n, c, N),
              null == f || f(),
              E.onClose();
          },
          confirmButtonColor: i.Button.Colors.BRAND,
          children: (0, l.jsx)(i.RadioGroup, {
            className: o.responseOptions,
            value: v,
            options: (0, r.getResponseOptions)(),
            onChange: e => g(e.value),
          }),
        });
      }
      function f(e, t, n, u) {
        (0, r.handleRsvp)({
          eventId: e,
          recurrenceId: t,
          guildId: n,
          updateRsvp: (t, l, u, i) => a.default.updateRsvp(e, l, n, i),
          openRsvpPicker: (e, t) => {
            (0, i.openModalLazy)(() =>
              Promise.resolve(i =>
                (0, l.jsx)(c, {
                  ...i,
                  event: e,
                  recurrenceId: t,
                  guildId: n,
                  onRsvp: u,
                })
              )
            );
          },
          onRsvp: u,
        });
      }
    },
    369404: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        a = n("272030"),
        r = n("851387"),
        d = n("233322"),
        s = n("157186"),
        o = n("817963"),
        c = n("393414"),
        f = n("716214"),
        E = n("923959"),
        v = n("305961"),
        g = n("957255"),
        S = n("599110"),
        h = n("306160"),
        N = n("322224"),
        _ = n("152475"),
        C = n("397680"),
        I = n("613767"),
        m = n("822516"),
        p = n("669195"),
        T = n("936965"),
        x = n("745049"),
        G = n("49111"),
        D = n("782340");
      function L(e) {
        let {
            guild: t,
            channel: L,
            guildScheduledEvent: R,
            isActive: M,
            recurrenceId: y,
            onActionTaken: A,
          } = e,
          { scheduled_start_time: U, id: V, entity_type: O, guild_id: j } = R,
          { canManageGuildEvent: P } = (0, o.useManageResourcePermissions)(
            null != L ? L : t
          ),
          F = P(R),
          k = (0, _.default)(R),
          H = (0, I.useIsChannelPublic)(null == L ? void 0 : L.id, R.id),
          { withinStartWindow: b } = (0, m.getEventTimeData)(U),
          w = (0, u.useStateFromStores)(
            [g.default],
            () =>
              (null == L ? !void 0 : !L.isGuildVocal()) ||
              g.default.can(G.Permissions.CONNECT, L),
            [L]
          ),
          B = (0, s.useShowMemberVerificationGate)(j),
          Y = (0, C.default)(y, V);
        function z(e) {
          e.stopPropagation(), (0, T.default)(V, y, j);
        }
        async function W(e) {
          e.stopPropagation(),
            await r.default.joinGuild(j),
            v.default.addConditionalChangeListener(() => {
              let t = v.default.getGuild(j);
              return null == t || (!M && z(e), K(e), !1);
            });
        }
        function K(e) {
          e.stopPropagation();
          let t = E.default.getDefaultChannel(j);
          (0, i.closeAllModals)(),
            (0, c.transitionToGuild)(j, null == t ? void 0 : t.id);
        }
        return {
          onDeleteClick: F
            ? function (e) {
                e.stopPropagation(),
                  F &&
                    !M &&
                    (0, i.openModal)(e =>
                      (0, l.jsx)(i.ConfirmModal, {
                        ...e,
                        header:
                          D.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                        confirmText: D.default.Messages.DELETE,
                        cancelText: D.default.Messages.CANCEL,
                        onConfirm: () => N.default.deleteGuildEvent(V, j),
                        children: (0, l.jsx)(i.Text, {
                          variant: "text-md/normal",
                          children:
                            D.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                        }),
                      })
                    );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != t &&
                (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("110374")
                    .then(n.bind(n, "110374"));
                  return n =>
                    (0, l.jsx)(e, {
                      guildEventId: V,
                      recurrenceId: y,
                      channel: L,
                      guild: t,
                      ...n,
                    });
                });
          },
          onJoinClick:
            w || B
              ? function (e) {
                  if ((e.stopPropagation(), B)) {
                    null == A || A(), (0, d.openMemberVerificationModal)(j);
                    return;
                  }
                  (null == L ? void 0 : L.isGuildStageVoice())
                    ? ((0, f.connectAndOpen)(L), null == A || A())
                    : (null == L ? void 0 : L.isGuildVoice()) &&
                      (N.default.joinVoiceEvent(L.guild_id, L.id),
                      null == A || A());
                }
              : void 0,
          onRsvpClick: z,
          onStartClick:
            F && b && !(null == Y ? void 0 : Y.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("298843")
                        .then(n.bind(n, "298843"));
                      return t =>
                        (0, l.jsx)(e, { ...t, event: R, onSuccess: A });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
              if (!k || !H) {
                let e = (0, p.SHARE_EVENT_DETAILS_LINK)({
                  guildId: j,
                  guildEventId: V,
                });
                (0, h.copy)(e),
                  S.default.track(
                    G.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED,
                    { guild_id: j, guild_scheduled_event_id: V }
                  );
                return;
              }
              (0, i.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, l.jsx)(e, {
                    ...n,
                    guild: t,
                    channel: L,
                    guildScheduledEvent: R,
                    source: G.InstantInviteSources.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            F && O === x.GuildScheduledEventEntityTypes.EXTERNAL && M
              ? function (e) {
                  if ((e.stopPropagation(), !F)) return;
                  let t = () => {
                    N.default.endEvent(V, j), (0, i.closeAllModals)();
                  };
                  (0, i.openModal)(e =>
                    (0, l.jsx)(i.ConfirmModal, {
                      ...e,
                      header: D.default.Messages.END_EVENT,
                      confirmText:
                        D.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: D.default.Messages.CANCEL,
                      onConfirm: t,
                      children: (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children:
                          D.default.Messages
                            .GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    })
                  );
                }
              : void 0,
          onJoinGuildClick: W,
          onGoToGuildClick: K,
        };
      }
    },
    842672: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("77078"),
        u = n("244201"),
        i = n("558286"),
        a = n("49111");
      let r = "guild-event-modal";
      var d = () => {
        let e = (0, u.useAppContext)(),
          t =
            e === a.AppContext.POPOUT
              ? l.POPOUT_MODAL_CONTEXT
              : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: t,
          onCloseRequest: () => {
            i.useGuildEventModalStore.getState().canCloseModal &&
              (0, l.closeModal)(r, t);
          },
        };
      };
    },
    27978: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, n("862205").createExperiment)({
        kind: "guild",
        id: "2021-11_hub_events",
        label: "Hub Events",
        defaultConfig: { showHubEventsList: !1 },
        treatments: [
          {
            id: 1,
            label: "Show Hub Events List",
            config: { showHubEventsList: !0 },
          },
        ],
      });
    },
    922770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("446674"),
        u = n("305961"),
        i = n("49111");
      function a(e) {
        return (0, l.useStateFromStores)(
          [u.default],
          () => {
            var t;
            if (null == e) return !1;
            let n = u.default.getGuild(e);
            return (
              null !==
                (t = null == n ? void 0 : n.hasFeature(i.GuildFeatures.HUB)) &&
              void 0 !== t &&
              t
            );
          },
          [e]
        );
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return u;
          },
        });
      var l = n("49111");
      function u(e, t, n, u) {
        let i = null != n ? n : t,
          a = null != i && e.can(l.Permissions.CREATE_INSTANT_INVITE, i);
        return (
          a ||
          (null != t && null != t.vanityURLCode) ||
          (null == u ? void 0 : u.invite_code) != null
        );
      }
    },
    567469: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useStageParticipants: function () {
            return r;
          },
          useStageParticipantsCount: function () {
            return d;
          },
          useSortedRequestToSpeakParticipants: function () {
            return s;
          },
          useActualStageSpeakerCount: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("334572"),
        i = n("488464"),
        a = n("998716");
      function r(e, t) {
        let [n] = (0, l.useStateFromStores)(
          [i.default],
          () => [
            i.default.getMutableParticipants(e, t),
            i.default.getParticipantsVersion(e),
          ],
          [e, t],
          u.isVersionEqual
        );
        return n;
      }
      function d(e, t) {
        return (0, l.useStateFromStores)(
          [i.default],
          () => i.default.getParticipantCount(e, t),
          [e, t]
        );
      }
      function s(e) {
        let [t] = (0, l.useStateFromStores)(
          [i.default],
          () => {
            let t = i.default.getMutableRequestToSpeakParticipants(e);
            return [t, i.default.getRequestToSpeakParticipantsVersion(e)];
          },
          [e],
          u.isVersionEqual
        );
        return t;
      }
      function o(e) {
        return (0, l.useStateFromStores)(
          [i.default],
          () => {
            let t = i.default.getMutableParticipants(
                e,
                a.StageChannelParticipantNamedIndex.SPEAKER
              ),
              n = t.filter(
                e => e.type === a.StageChannelParticipantTypes.VOICE
              );
            return n.length;
          },
          [e]
        );
      }
    },
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("414456"),
        i = n.n(u),
        a = n("782340"),
        r = n("662190"),
        d = n("284434"),
        s = n("315956");
      function o(e) {
        let { className: t, children: n } = e;
        return (0, l.jsxs)("div", {
          className: i(r.container, t),
          children: [
            (0, l.jsx)("img", {
              alt: a.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: s,
              className: i(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, l.jsx)("img", {
              alt: a.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: d,
              className: i(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    849467: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("469563"),
        i = n("696675"),
        a = n("75196"),
        r = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: i,
                  fill: u,
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: i,
                  fill: u,
                }),
              ],
            });
          },
          i.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
    334572: function (e, t, n) {
      "use strict";
      function l(e, t) {
        let [, n] = e,
          [, l] = t;
        return n === l;
      }
      n.r(t),
        n.d(t, {
          isVersionEqual: function () {
            return l;
          },
        }),
        n("222007");
    },
    886181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MicrophoneIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=f2fce9ca68c9019bee4f.js.map
