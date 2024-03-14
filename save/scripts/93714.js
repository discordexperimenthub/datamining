(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93714"],
  {
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    15433: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchDirectoryEntries: function () {
            return s;
          },
        });
      var u = n("483366"),
        l = n.n(u),
        i = n("872717"),
        d = n("913144"),
        r = n("730647"),
        a = n("49111");
      let s = l(async e => {
        try {
          d.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let t = await i.default.get({
            url: a.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT },
          });
          d.default.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: e,
            entries: t.body,
          });
        } catch (e) {
          d.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
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
      var u = n("917351"),
        l = n.n(u),
        i = n("446674"),
        d = n("913144"),
        r = n("398604"),
        a = n("813006"),
        s = n("730647");
      let E = !1,
        c = {},
        o = {},
        f = {},
        _ = e => (
          (f[e.guild_scheduled_event.id] = new a.default(
            e.guild_scheduled_event.guild
          )),
          (o[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class v extends i.default.Store {
        isFetching() {
          return E;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return c[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = o[e]) && void 0 !== t ? t : void 0;
        }
      }
      v.displayName = "EventDirectoryStore";
      var S = new v(d.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          E = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          E = !1;
          let u = l.sortBy(
              [...n],
              [
                function (e) {
                  return (0, r.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = l.map(u, _);
          c[t] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          E = !1;
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
      var u = n("866227"),
        l = n.n(u),
        i = n("299039"),
        d = n("745049");
      function r(e, t, n, u) {
        let r = l(),
          a = new Date(e.scheduled_start_time).getTime(),
          s = { start: a - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: a };
        if (r.isBetween(s.start, s.end)) {
          if (null != t) {
            let e = l(t),
              n = e.isBetween(s.start, s.end),
              i = e.isBetween(
                l(a).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                a
              );
            return n || (i && !u)
              ? void 0
              : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let E = i.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : E) + d.NEW_EVENT_WINDOW_MILLISECONDS,
            a
          ),
          o = r.isBetween(E, c);
        if (o && null == t && !u)
          return d.UpcomingGuildEventNoticeTypes.NEW_EVENT;
      }
    },
    431934: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var u = n("446674"),
        l = n("913144"),
        i = n("271938"),
        d = n("398604"),
        r = n("49129"),
        a = n("745049");
      let s = {},
        E = {};
      function c(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...E };
        delete n[e], (E = n);
      }
      class o extends u.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (s =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (E =
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
          return E[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return E;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: E };
        }
      }
      (o.displayName = "UpcomingEventNoticesStore"),
        (o.persistKey = "UpcomingEventNotices");
      var f = new o(l.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...s };
          (n[t] = Date.now()), (s = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === a.GuildScheduledEventStatus.CANCELED ||
            t.status === a.GuildScheduledEventStatus.COMPLETED) &&
            c(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          c(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            u = i.default.getId();
          if (t !== u) return;
          let l = d.default.getGuildScheduledEvent(n);
          if (null == l || l.status !== a.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = s[n];
          if (null != c) return;
          let o = E[n],
            f = (0, r.getNextShownUpcomingEventNoticeType)(l, void 0, o, !1);
          if (f === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...s };
            (e[n] = Date.now()), (s = e);
          }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
          let { guildEventId: t } = e,
            n = { ...E };
          (n[t] = Date.now()), (E = n);
        },
      });
    },
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
          useActiveEvent: function () {
            return g;
          },
          useActiveEventsByChannel: function () {
            return p;
          },
          useGuildUpcomingEventsNotice: function () {
            return D;
          },
          useGuildActiveEvent: function () {
            return m;
          },
          useGuildChannelScheduledEvents: function () {
            return G;
          },
          useFirstActiveEventChannel: function () {
            return y;
          },
          useImminentUpcomingGuildEvents: function () {
            return U;
          },
        }),
        n("222007"),
        n("808653");
      var u = n("884691"),
        l = n("446674"),
        i = n("962199"),
        d = n("42203"),
        r = n("923959"),
        a = n("305961"),
        s = n("957255"),
        E = n("718517"),
        c = n("449008"),
        o = n("398604"),
        f = n("49129"),
        _ = n("431934"),
        v = n("466148"),
        S = n("822516"),
        N = n("745049"),
        I = n("49111");
      let T = [],
        C = 15 * E.default.Millis.MINUTE;
      function h(e, t) {
        return (0, l.useStateFromStoresArray)(
          [a.default, i.default, o.default, s.default, d.default, r.default],
          () => {
            let n = a.default.getGuild(e);
            if (null == n) return T;
            let u = n.hasFeature(I.GuildFeatures.HUB);
            if (u) {
              var l, E;
              let e =
                  null === (l = r.default.getDefaultChannel(n.id)) ||
                  void 0 === l
                    ? void 0
                    : l.id,
                t =
                  null !== (E = i.default.getEventDirectoryEntries(e)) &&
                  void 0 !== E
                    ? E
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = o.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.default.getCachedGuildScheduledEventById(t);
                })
                .filter(c.isNotNullish);
            }
            let f = o.default.getGuildScheduledEventsByIndex(
              null != t
                ? t
                : o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)
            );
            return f.filter(e => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = d.default.getChannel(t);
              return s.default.can(I.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function g(e) {
        return (0, l.useStateFromStores)(
          [o.default, d.default, s.default],
          () => {
            let t = d.default.getChannel(e);
            if (!s.default.can(I.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let u = o.default.getGuildScheduledEventsByIndex(
              o.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return u.length > 0 ? u[0] : null;
          },
          [e]
        );
      }
      function p(e) {
        let t = (0, l.useStateFromStoresArray)(
            [o.default],
            () => o.default.getGuildScheduledEventsForGuild(e),
            [e]
          ),
          n = u.useMemo(() => {
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
      function D(e) {
        var t, n;
        let u =
            ((t = e),
            (0, l.useStateFromStoresArray)(
              [o.default, d.default, s.default],
              () => {
                let e = o.default.getGuildScheduledEventsByIndex(
                  o.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== N.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = d.default.getChannel(e.channel_id);
                  return s.default.can(I.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          i = (0, l.useStateFromStoresObject)([_.default], () =>
            _.default.getAllEventDismissals()
          ),
          r = (0, l.useStateFromStoresObject)([_.default], () =>
            _.default.getAllUpcomingNoticeSeenTimes()
          ),
          a = (0, l.useStateFromStoresObject)(
            [o.default],
            () =>
              null == u
                ? {}
                : u.reduce((e, t) => {
                    let n = (0, S.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: o.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [u]
          );
        if (null != u && null != a)
          for (let e = 0; e < u.length; e++) {
            let t = u[e],
              l = i[t.id],
              d = r[t.id],
              s = null !== (n = a[t.id]) && void 0 !== n && n,
              E = (0, f.getNextShownUpcomingEventNoticeType)(t, l, d, s);
            if (null != E) return { upcomingEvent: t, noticeType: E };
          }
      }
      function m(e) {
        return (0, l.useStateFromStores)(
          [o.default, d.default, s.default],
          () => {
            let t = o.default.getGuildScheduledEventsByIndex(
              o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                !(0, o.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = d.default.getChannel(e.channel_id);
              return s.default.can(I.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function G(e) {
        return (0, l.useStateFromStores)(
          [o.default],
          () =>
            o.default.getGuildScheduledEventsByIndex(
              o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function y(e) {
        return (0, l.useStateFromStores)(
          [d.default, o.default],
          () => {
            let t = o.default
              .getGuildScheduledEventsByIndex(
                o.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
              )
              .find(e => {
                let t = d.default.getChannel(e.channel_id);
                return null != t;
              });
            return d.default.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e]
        );
      }
      function U(e) {
        let [t, n] = u.useState(() => Date.now());
        u.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, C);
          return () => clearInterval(e);
        }, []);
        let i = (0, l.useStateFromStores)(
            [o.default],
            () =>
              null == e
                ? []
                : o.default.getGuildScheduledEventsByIndex(
                    o.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          d = u.useMemo(
            () =>
              i.filter(e => {
                let { startTime: t, endTime: n } = (0, v.getEventSchedule)(e),
                  { withinStartWindow: u, diffMinutes: l } = (0,
                  S.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== N.GuildScheduledEventStatus.ACTIVE && u && l < 15
                );
              }),
            [i]
          );
        return d;
      }
    },
    558286: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildEventModalStore: function () {
            return l;
          },
        });
      var u = n("308503");
      let l = (0, u.default)(e => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          e({ canCloseModal: t });
        },
      }));
    },
    842672: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var u = n("77078"),
        l = n("244201"),
        i = n("558286"),
        d = n("49111");
      let r = "guild-event-modal";
      var a = () => {
        let e = (0, l.useAppContext)(),
          t =
            e === d.AppContext.POPOUT
              ? u.POPOUT_MODAL_CONTEXT
              : u.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: t,
          onCloseRequest: () => {
            i.useGuildEventModalStore.getState().canCloseModal &&
              (0, u.closeModal)(r, t);
          },
        };
      };
    },
    27978: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var u = (0, n("862205").createExperiment)({
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
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("414456"),
        i = n.n(l),
        d = n("782340"),
        r = n("662190"),
        a = n("284434"),
        s = n("315956");
      function E(e) {
        let { className: t, children: n } = e;
        return (0, u.jsxs)("div", {
          className: i(r.container, t),
          children: [
            (0, u.jsx)("img", {
              alt: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: s,
              className: i(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, u.jsx)("img", {
              alt: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: a,
              className: i(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=fcd3fdbad57cb882355e.js.map
