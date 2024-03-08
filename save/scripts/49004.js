(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49004"],
  {
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
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
      let c = !1,
        o = {},
        E = {},
        f = {},
        v = e => (
          (f[e.guild_scheduled_event.id] = new a.default(
            e.guild_scheduled_event.guild
          )),
          (E[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class _ extends i.default.Store {
        isFetching() {
          return c;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return o[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : void 0;
        }
      }
      _.displayName = "EventDirectoryStore";
      var N = new _(d.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          c = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          c = !1;
          let u = l.sortBy(
              [...n],
              [
                function (e) {
                  return (0, r.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = l.map(u, v);
          o[t] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          c = !1;
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
        let c = i.default.extractTimestamp(e.id),
          o = Math.min(
            (null != n ? n : c) + d.NEW_EVENT_WINDOW_MILLISECONDS,
            a
          ),
          E = r.isBetween(c, o);
        if (E && null == t && !u)
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
        c = {};
      function o(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...c };
        delete n[e], (c = n);
      }
      class E extends u.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (s =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (c =
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
          return c[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return c;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: c };
        }
      }
      (E.displayName = "UpcomingEventNoticesStore"),
        (E.persistKey = "UpcomingEventNotices");
      var f = new E(l.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...s };
          (n[t] = Date.now()), (s = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === a.GuildScheduledEventStatus.CANCELED ||
            t.status === a.GuildScheduledEventStatus.COMPLETED) &&
            o(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          o(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            u = i.default.getId();
          if (t !== u) return;
          let l = d.default.getGuildScheduledEvent(n);
          if (null == l || l.status !== a.GuildScheduledEventStatus.SCHEDULED)
            return;
          let o = s[n];
          if (null != o) return;
          let E = c[n],
            f = (0, r.getNextShownUpcomingEventNoticeType)(l, void 0, E, !1);
          if (f === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...s };
            (e[n] = Date.now()), (s = e);
          }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
          let { guildEventId: t } = e,
            n = { ...c };
          (n[t] = Date.now()), (c = n);
        },
      });
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
          getEventException: function () {
            return d;
          },
        });
      var u = n("446674"),
        l = n("398604");
      function i(e, t) {
        let n = (0, u.useStateFromStoresArray)([l.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = l.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return r(n, e);
      }
      function d(e, t) {
        var n, u;
        let i =
          null !==
            (u =
              null === (n = l.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== u
            ? u
            : [];
        return r(i, e);
      }
      function r(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n;
      }
    },
    466148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          getEventSchedule: function () {
            return c;
          },
        });
      var u = n("627445"),
        l = n.n(u),
        i = n("446674"),
        d = n("398604"),
        r = n("397680"),
        a = n("822516");
      function s(e, t, n) {
        var u;
        let s =
          null !==
            (u = (0, i.useStateFromStores)([d.default], () =>
              d.default.getGuildScheduledEvent(e)
            )) && void 0 !== u
            ? u
            : n;
        l(null != s, "Event must be defined"),
          (t = null != t ? t : (0, a.getNextRecurrenceIdInEvent)(s));
        let c = (0, r.default)(t, e);
        return o(s, c, t);
      }
      function c(e, t) {
        let n = (0, r.getEventException)(t, e.id);
        return o(e, n, t);
      }
      function o(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let u = (0, a.getBaseScheduleForRecurrence)(n, e),
          { startDate: l, endDate: i } = (0,
          a.getScheduleForRecurrenceWithException)(u, t);
        return {
          startTime: l.toDate(),
          endTime: null == i ? void 0 : i.toDate(),
        };
      }
    },
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
          useActiveEvent: function () {
            return m;
          },
          useActiveEventsByChannel: function () {
            return D;
          },
          useGuildUpcomingEventsNotice: function () {
            return C;
          },
          useGuildActiveEvent: function () {
            return G;
          },
          useGuildChannelScheduledEvents: function () {
            return p;
          },
          useFirstActiveEventChannel: function () {
            return U;
          },
          useImminentUpcomingGuildEvents: function () {
            return y;
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
        c = n("718517"),
        o = n("449008"),
        E = n("398604"),
        f = n("49129"),
        v = n("431934"),
        _ = n("466148"),
        N = n("822516"),
        S = n("745049"),
        h = n("49111");
      let I = [],
        g = 15 * c.default.Millis.MINUTE;
      function T(e, t) {
        return (0, l.useStateFromStoresArray)(
          [a.default, i.default, E.default, s.default, d.default, r.default],
          () => {
            let n = a.default.getGuild(e);
            if (null == n) return I;
            let u = n.hasFeature(h.GuildFeatures.HUB);
            if (u) {
              var l, c;
              let e =
                  null === (l = r.default.getDefaultChannel(n.id)) ||
                  void 0 === l
                    ? void 0
                    : l.id,
                t =
                  null !== (c = i.default.getEventDirectoryEntries(e)) &&
                  void 0 !== c
                    ? c
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = E.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.default.getCachedGuildScheduledEventById(t);
                })
                .filter(o.isNotNullish);
            }
            let f = E.default.getGuildScheduledEventsByIndex(
              null != t
                ? t
                : E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)
            );
            return f.filter(e => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = d.default.getChannel(t);
              return s.default.can(h.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function m(e) {
        return (0, l.useStateFromStores)(
          [E.default, d.default, s.default],
          () => {
            let t = d.default.getChannel(e);
            if (!s.default.can(h.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let u = E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return u.length > 0 ? u[0] : null;
          },
          [e]
        );
      }
      function D(e) {
        let t = (0, l.useStateFromStoresArray)(
            [E.default],
            () => E.default.getGuildScheduledEventsForGuild(e),
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
      function C(e) {
        var t, n;
        let u =
            ((t = e),
            (0, l.useStateFromStoresArray)(
              [E.default, d.default, s.default],
              () => {
                let e = E.default.getGuildScheduledEventsByIndex(
                  E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === S.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== S.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = d.default.getChannel(e.channel_id);
                  return s.default.can(h.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          i = (0, l.useStateFromStoresObject)([v.default], () =>
            v.default.getAllEventDismissals()
          ),
          r = (0, l.useStateFromStoresObject)([v.default], () =>
            v.default.getAllUpcomingNoticeSeenTimes()
          ),
          a = (0, l.useStateFromStoresObject)(
            [E.default],
            () =>
              null == u
                ? {}
                : u.reduce((e, t) => {
                    let n = (0, N.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: E.default.isInterestedInEventRecurrence(t.id, n),
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
              c = (0, f.getNextShownUpcomingEventNoticeType)(t, l, d, s);
            if (null != c) return { upcomingEvent: t, noticeType: c };
          }
      }
      function G(e) {
        return (0, l.useStateFromStores)(
          [E.default, d.default, s.default],
          () => {
            let t = E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === S.GuildScheduledEventEntityTypes.NONE ||
                !(0, E.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = d.default.getChannel(e.channel_id);
              return s.default.can(h.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function p(e) {
        return (0, l.useStateFromStores)(
          [E.default],
          () =>
            E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function U(e) {
        return (0, l.useStateFromStores)(
          [d.default, E.default],
          () => {
            let t = E.default
              .getGuildScheduledEventsByIndex(
                E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
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
      function y(e) {
        let [t, n] = u.useState(() => Date.now());
        u.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, g);
          return () => clearInterval(e);
        }, []);
        let i = (0, l.useStateFromStores)(
            [E.default],
            () =>
              null == e
                ? []
                : E.default.getGuildScheduledEventsByIndex(
                    E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          d = u.useMemo(
            () =>
              i.filter(e => {
                let { startTime: t, endTime: n } = (0, _.getEventSchedule)(e),
                  { withinStartWindow: u, diffMinutes: l } = (0,
                  N.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== S.GuildScheduledEventStatus.ACTIVE && u && l < 15
                );
              }),
            [i]
          );
        return d;
      }
    },
    203811: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("987317"),
        d = n("119184"),
        r = n("476765"),
        a = n("943232"),
        s = n("322224"),
        c = n("534222"),
        o = n("782340"),
        E = n("999009");
      function f(e) {
        let { channel: t, transitionState: n, onClose: f } = e,
          v = (0, r.useUID)(),
          _ = (0, c.useActiveEvent)(t.id);
        if (null == _) return null;
        let N = () => {
          i.default.selectVoiceChannel(null), f();
        };
        return (0, u.jsxs)(l.ModalRoot, {
          transitionState: n,
          "aria-labelledby": v,
          size: l.ModalSize.SMALL,
          children: [
            (0, u.jsxs)(l.ModalContent, {
              className: E.content,
              children: [
                (0, u.jsx)(d.default, {
                  children: (0, u.jsx)("div", {
                    className: E.iconBackground,
                    children: (0, u.jsx)(a.default, {
                      height: 40,
                      width: 40,
                      className: E.icon,
                    }),
                  }),
                }),
                (0, u.jsx)(l.Heading, {
                  id: v,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: E.title,
                  children: o.default.Messages.GUILD_EVENT_END_PROMPT_TITLE,
                }),
                (0, u.jsx)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: E.subtitle,
                  children: o.default.Messages.GUILD_EVENT_END_PROMPT_BODY,
                }),
              ],
            }),
            (0, u.jsxs)(l.ModalFooter, {
              children: [
                (0, u.jsx)(l.Button, {
                  color: l.Button.Colors.RED,
                  onClick: () => {
                    s.default.endEvent(_.id, _.guild_id), N();
                  },
                  children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                }),
                (0, u.jsx)(l.Button, {
                  color: l.Button.Colors.PRIMARY,
                  className: E.cancelButton,
                  onClick: N,
                  children: o.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
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
      function c(e) {
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
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return d;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return a;
          },
        });
      var u = n("995008"),
        l = n.n(u),
        i = n("775560");
      let d = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        r = () => (0, i.useLazyValue)(() => d()),
        a = e => {
          let { children: t } = e;
          return t(r());
        };
    },
  },
]);
//# sourceMappingURL=ad4e4a393efd9b8c02f4.js.map
