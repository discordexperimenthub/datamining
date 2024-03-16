(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79423"],
  {
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    588715: function (e, t, n) {},
    690445: function (e, t, n) {},
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("627445"),
        a = n.n(u),
        d = n("77078"),
        i = n("845579"),
        s = n("662255"),
        r = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: u, shiftId: o, showIconFirst: c } = e,
          E = i.DeveloperMode.useSetting();
        if (__OVERLAY__ || !E || !r.SUPPORTS_COPY || null == t) return null;
        let f = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          d.MenuItem,
          {
            id: f,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              a(null != n, "cannot copy null text"),
                (0, r.copy)(n),
                null == u || u();
            },
            icon: s.default,
            showIconFirst: c,
          },
          f
        );
      }
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
        a = n("446674"),
        d = n("913144"),
        i = n("398604"),
        s = n("813006"),
        r = n("730647");
      let o = !1,
        c = {},
        E = {},
        f = {},
        _ = e => (
          (f[e.guild_scheduled_event.id] = new s.default(
            e.guild_scheduled_event.guild
          )),
          (E[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class T extends a.default.Store {
        isFetching() {
          return o;
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
          return null !== (t = E[e]) && void 0 !== t ? t : void 0;
        }
      }
      T.displayName = "EventDirectoryStore";
      var S = new T(d.default, {
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
                  return (0, i.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            a = u.map(l, _);
          c[t] = a;
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
            return i;
          },
        });
      var l = n("866227"),
        u = n.n(l),
        a = n("299039"),
        d = n("745049");
      function i(e, t, n, l) {
        let i = u(),
          s = new Date(e.scheduled_start_time).getTime(),
          r = { start: s - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: s };
        if (i.isBetween(r.start, r.end)) {
          if (null != t) {
            let e = u(t),
              n = e.isBetween(r.start, r.end),
              a = e.isBetween(
                u(s).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                s
              );
            return n || (a && !l)
              ? void 0
              : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = a.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS,
            s
          ),
          E = i.isBetween(o, c);
        if (E && null == t && !l)
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
      var l = n("446674"),
        u = n("913144"),
        a = n("271938"),
        d = n("398604"),
        i = n("49129"),
        s = n("745049");
      let r = {},
        o = {};
      function c(e) {
        let t = { ...r };
        delete t[e], (r = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class E extends l.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (r =
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
          return r[e];
        }
        getAllEventDismissals() {
          return r;
        }
        getUpcomingNoticeSeenTime(e) {
          return o[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return o;
        }
        getState() {
          return { upcomingEventDismissals: r, upcomingEventSeenTimestamps: o };
        }
      }
      (E.displayName = "UpcomingEventNoticesStore"),
        (E.persistKey = "UpcomingEventNotices");
      var f = new E(u.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...r };
          (n[t] = Date.now()), (r = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === s.GuildScheduledEventStatus.CANCELED ||
            t.status === s.GuildScheduledEventStatus.COMPLETED) &&
            c(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          c(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            l = a.default.getId();
          if (t !== l) return;
          let u = d.default.getGuildScheduledEvent(n);
          if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = r[n];
          if (null != c) return;
          let E = o[n],
            f = (0, i.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
          if (f === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...r };
            (e[n] = Date.now()), (r = e);
          }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
          let { guildEventId: t } = e,
            n = { ...o };
          (n[t] = Date.now()), (o = n);
        },
      });
    },
    658202: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("322224");
      function u(e, t, n, u) {
        let { scheduled_start_time: a, scheduled_end_time: d } = e;
        return null == a && null == d
          ? l.default.deleteGuildEventException(t, n, u)
          : l.default.updateGuildEventException(
              {
                scheduled_start_time: a,
                scheduled_end_time: d,
                is_canceled: !1,
              },
              t,
              n,
              u
            );
      }
    },
    598639: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("446674"),
        u = n("962199"),
        a = n("305961");
      function d(e, t) {
        return (0, l.useStateFromStoresObject)(
          [a.default, u.default],
          () => {
            let n = a.default.getGuild(e),
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
            return m;
          },
          useActiveEvent: function () {
            return M;
          },
          useActiveEventsByChannel: function () {
            return h;
          },
          useGuildUpcomingEventsNotice: function () {
            return p;
          },
          useGuildActiveEvent: function () {
            return D;
          },
          useGuildChannelScheduledEvents: function () {
            return R;
          },
          useFirstActiveEventChannel: function () {
            return C;
          },
          useImminentUpcomingGuildEvents: function () {
            return O;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("884691"),
        u = n("446674"),
        a = n("962199"),
        d = n("42203"),
        i = n("923959"),
        s = n("305961"),
        r = n("957255"),
        o = n("718517"),
        c = n("449008"),
        E = n("398604"),
        f = n("49129"),
        _ = n("431934"),
        T = n("466148"),
        S = n("822516"),
        v = n("745049"),
        g = n("49111");
      let I = [],
        N = 15 * o.default.Millis.MINUTE;
      function m(e, t) {
        return (0, u.useStateFromStoresArray)(
          [s.default, a.default, E.default, r.default, d.default, i.default],
          () => {
            let n = s.default.getGuild(e);
            if (null == n) return I;
            let l = n.hasFeature(g.GuildFeatures.HUB);
            if (l) {
              var u, o;
              let e =
                  null === (u = i.default.getDefaultChannel(n.id)) ||
                  void 0 === u
                    ? void 0
                    : u.id,
                t =
                  null !== (o = a.default.getEventDirectoryEntries(e)) &&
                  void 0 !== o
                    ? o
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = E.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : a.default.getCachedGuildScheduledEventById(t);
                })
                .filter(c.isNotNullish);
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
              return r.default.can(g.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function M(e) {
        return (0, u.useStateFromStores)(
          [E.default, d.default, r.default],
          () => {
            let t = d.default.getChannel(e);
            if (!r.default.can(g.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let l = E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return l.length > 0 ? l[0] : null;
          },
          [e]
        );
      }
      function h(e) {
        let t = (0, u.useStateFromStoresArray)(
            [E.default],
            () => E.default.getGuildScheduledEventsForGuild(e),
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
      function p(e) {
        var t, n;
        let l =
            ((t = e),
            (0, u.useStateFromStoresArray)(
              [E.default, d.default, r.default],
              () => {
                let e = E.default.getGuildScheduledEventsByIndex(
                  E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === v.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== v.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = d.default.getChannel(e.channel_id);
                  return r.default.can(g.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          a = (0, u.useStateFromStoresObject)([_.default], () =>
            _.default.getAllEventDismissals()
          ),
          i = (0, u.useStateFromStoresObject)([_.default], () =>
            _.default.getAllUpcomingNoticeSeenTimes()
          ),
          s = (0, u.useStateFromStoresObject)(
            [E.default],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, S.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: E.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l]
          );
        if (null != l && null != s)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              u = a[t.id],
              d = i[t.id],
              r = null !== (n = s[t.id]) && void 0 !== n && n,
              o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, d, r);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function D(e) {
        return (0, u.useStateFromStores)(
          [E.default, d.default, r.default],
          () => {
            let t = E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === v.GuildScheduledEventEntityTypes.NONE ||
                !(0, E.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = d.default.getChannel(e.channel_id);
              return r.default.can(g.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function R(e) {
        return (0, u.useStateFromStores)(
          [E.default],
          () =>
            E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function C(e) {
        return (0, u.useStateFromStores)(
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
      function O(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, N);
          return () => clearInterval(e);
        }, []);
        let a = (0, u.useStateFromStores)(
            [E.default],
            () =>
              null == e
                ? []
                : E.default.getGuildScheduledEventsByIndex(
                    E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          d = l.useMemo(
            () =>
              a.filter(e => {
                let { startTime: t, endTime: n } = (0, T.getEventSchedule)(e),
                  { withinStartWindow: l, diffMinutes: u } = (0,
                  S.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== v.GuildScheduledEventStatus.ACTIVE && l && u < 15
                );
              }),
            [a]
          );
        return d;
      }
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
    110374: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("272030"),
        d = n("901582"),
        i = n("861370"),
        s = n("455933"),
        r = n("248900"),
        o = n("385752"),
        c = n("222971"),
        E = n("601131"),
        f = n("876725"),
        _ = n("367989"),
        T = n("891603"),
        S = n("510692"),
        v = n("49111"),
        g = n("782340");
      function I(e) {
        let {
            guildEventId: t,
            recurrenceId: n,
            channel: I,
            guild: N,
            analyticsContext: m,
            isRecurrenceItem: M = !1,
            onSelect: h,
          } = e,
          p = (0, _.default)({
            guildEventId: t,
            recurrenceId: n,
            guild: N,
            channel: I,
          }),
          D = (0, o.default)({
            guildEventId: t,
            recurrenceId: n,
            guild: N,
            channel: I,
          }),
          R = (0, c.default)({
            guildEventId: t,
            guild: N,
            channel: I,
            recurrenceId: n,
            isRecurrenceItem: M,
          }),
          C = (0, E.default)(t, N, I),
          O = (0, S.default)(t, N, I),
          A = (0, r.default)(t, N.id, n),
          L = (0, f.default)(t),
          G = (0, i.default)({
            id: t,
            label: g.default.Messages.COPY_ID_EVENT,
          }),
          y = (0, i.default)({
            id: n,
            label: g.default.Messages.COPY_ID_EVENT_RECURRENCE,
          }),
          x = (0, s.default)(t, N.id, I, n),
          V = (0, T.default)({
            guildEventId: t,
            guildId: N.id,
            recurrenceId: n,
          });
        return (0, l.jsx)(d.default, {
          context: m,
          object: v.AnalyticsObjects.CONTEXT_MENU,
          children: (0, l.jsxs)(u.Menu, {
            navId: "user-context",
            onClose: a.closeContextMenu,
            "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: h,
            children: [
              (0, l.jsxs)(u.MenuGroup, {
                children: [x, !M && O, R, !M && C, D, p, A, M && V],
              }),
              !M && (0, l.jsx)(u.MenuGroup, { children: L }),
              (0, l.jsxs)(u.MenuGroup, { children: [G, y] }),
            ],
          }),
        });
      }
    },
    455933: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("398351"),
        a = n.n(u),
        d = n("866227"),
        i = n.n(d),
        s = n("730290"),
        r = n("446674"),
        o = n("77078"),
        c = n("49671"),
        E = n("884351"),
        f = n("305961"),
        _ = n("773336"),
        T = n("398604"),
        S = n("466148"),
        v = n("189443"),
        g = n("822516"),
        I = n("745049"),
        N = n("49111"),
        m = n("782340");
      let M = "YYYYMMDDTHHmmss",
        h = "YYYY-MM-DDTHH:mm:ss",
        p = /RRULE:.*/;
      function D(e, t, n, u) {
        var d, D, R;
        let C;
        let O = (0, r.useStateFromStores)([T.default], () =>
            T.default.isActive(e)
          ),
          { startTime: A, endTime: L } = (0, S.default)(null != e ? e : "", u),
          G = (0, r.useStateFromStores)(
            [T.default],
            () => T.default.getGuildScheduledEvent(e),
            [e]
          ),
          y = (0, r.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(t),
            [t]
          );
        if (O || null == G) return null;
        C =
          G.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL
            ? G.entity_metadata.location
            : null != n && null != y
              ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                  channelName: n.name,
                  guildName: y.name,
                })
              : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
        let x = i(G.scheduled_start_time),
          V = null != G.scheduled_end_time ? i(G.scheduled_end_time) : x,
          U =
            null != G.description && "" !== G.description
              ? E.default.unparse(
                  G.description,
                  null !== (d = null == n ? void 0 : n.id) && void 0 !== d
                    ? d
                    : N.EMPTY_STRING_SNOWFLAKE_ID,
                  !0
                )
              : "",
          P = (0, v.recurrenceRuleFromServer)(G.recurrence_rule),
          b = null != P ? (0, g.getRRule)(P) : null,
          w = null !== (D = i(A)) && void 0 !== D ? D : x,
          F = null !== (R = i(null != L ? L : A)) && void 0 !== R ? R : x,
          j = () => {
            let e = a();
            e.createEvent({
              start: x,
              end: V,
              summary: G.name,
              description: U,
              location: C,
              repeating: b,
            }),
              _.isPlatformEmbedded
                ? c.default.fileManager.saveWithDialog(
                    e.toString(),
                    "discord-event.ics"
                  )
                : window.open(e.toURL(), "_blank");
          };
        return (0, l.jsxs)(o.MenuItem, {
          id: m.default.Messages.ADD_TO_CALENDAR,
          label: m.default.Messages.ADD_TO_CALENDAR,
          action: j,
          children: [
            (0, l.jsx)(o.MenuItem, {
              id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
              label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
              action: () => {
                var e;
                let t = null == b ? void 0 : b.toString(),
                  n = {
                    text: G.name,
                    dates: "".concat(x.format(M), "/").concat(V.format(M)),
                    details: U,
                    action: "TEMPLATE",
                    location: C,
                    recur:
                      null != t
                        ? null === (e = p.exec(t)) || void 0 === e
                          ? void 0
                          : e[0]
                        : void 0,
                  },
                  l = "https://calendar.google.com/calendar/render?".concat(
                    (0, s.stringify)(n)
                  );
                window.open(l, "_blank");
              },
            }),
            (0, l.jsx)(o.MenuItem, {
              id: m.default.Messages.DOWNLOAD_ICS,
              label: m.default.Messages.DOWNLOAD_ICS,
              action: j,
            }),
            (0, l.jsx)(o.MenuItem, {
              id: m.default.Messages.ADD_TO_YAHOO,
              label: m.default.Messages.ADD_TO_YAHOO,
              action: () => {
                let e = {
                    v: 60,
                    title: G.name,
                    st: w.format(M),
                    et: F.format(M),
                    desc: U,
                    in_loc: C,
                  },
                  t = "https://calendar.yahoo.com/?".concat(
                    (0, s.stringify)(e)
                  );
                window.open(t, "_blank");
              },
            }),
            (0, l.jsx)(o.MenuItem, {
              id: m.default.Messages.ADD_TO_OUTLOOK,
              label: m.default.Messages.ADD_TO_OUTLOOK,
              action: () => {
                let e = {
                    path: "/calendar/action/compose",
                    rru: "addevent",
                    startdt: w.format(h),
                    enddt: F.format(h),
                    subject: G.name,
                    body: U,
                    location: C,
                    allday: !1,
                  },
                  t =
                    "https://outlook.live.com/calendar/0/deeplink/compose?".concat(
                      (0, s.stringify)(e)
                    );
                window.open(t, "_blank");
              },
            }),
          ],
        });
      }
    },
    248900: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("306160"),
        d = n("598639"),
        i = n("49111"),
        s = n("782340");
      function r(e, t, n) {
        let r = null != n,
          { isMember: o } = (0, d.default)(t, e);
        if (!o) return null;
        function c() {
          let l =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (0, a.copy)(
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(i.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))
          ),
            (0, u.showToast)(
              (0, u.createToast)(
                s.default.Messages.COPIED_LINK,
                u.ToastType.SUCCESS
              )
            );
        }
        return (0, l.jsx)(u.MenuItem, {
          id: s.default.Messages.COPY_EVENT_LINK,
          label: s.default.Messages.COPY_EVENT_LINK,
          action: r ? void 0 : () => c(!0),
          children:
            r &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: s.default.Messages.COPY_RECURRENCE_LINK,
                  label: s.default.Messages.COPY_RECURRENCE_LINK,
                  action: () => c(!1),
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: s.default.Messages.COPY_SERIES_LINK,
                  label: s.default.Messages.COPY_SERIES_LINK,
                  action: () => c(!0),
                }),
              ],
            }),
        });
      }
    },
    385752: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("817963"),
        i = n("398604"),
        s = n("322224"),
        r = n("397680"),
        o = n("466148"),
        c = n("782340");
      function E(e) {
        let { guildEventId: t, recurrenceId: n, guild: E, channel: f } = e,
          _ = null != n,
          { canManageGuildEvent: T } = (0, d.useManageResourcePermissions)(
            null != f ? f : E
          ),
          [S, v] = (0, u.useStateFromStoresArray)([i.default], () => [
            i.default.isActive(t),
            i.default.getGuildScheduledEvent(t),
          ]),
          g = (0, r.default)(n, null == v ? void 0 : v.id),
          I = null != v && T(v),
          N = (null == v ? void 0 : v.recurrence_rule) != null && !_,
          { startTime: m } = (0, o.default)(t, n);
        if (!I || (S && !N && !_) || (_ && !_) || null == v) return null;
        if (S && _) {
          var M;
          if (null == m) return null;
          let e = new Date(
            null !== (M = null == g ? void 0 : g.scheduled_start_time) &&
            void 0 !== M
              ? M
              : m
          );
          if (new Date() > e) return null;
        }
        let h = e => {
          (0, a.openModal)(u =>
            (0, l.jsxs)(a.ConfirmModal, {
              ...u,
              header: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
              confirmText:
                N || e
                  ? c.default.Messages.DELETE_ALL_EVENTS
                  : c.default.Messages.DELETE_EVENT,
              cancelText: c.default.Messages.NEVERMIND,
              onConfirm: () =>
                _ && !e
                  ? s.default.deleteRecurrence(E.id, t, n, g)
                  : s.default.deleteGuildEvent(t, E.id),
              children: [
                (0, l.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                }),
                (0, l.jsx)("br", {}),
                (N || e) &&
                  (0, l.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children:
                      c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format(),
                  }),
              ],
            })
          );
        };
        return (0, l.jsx)(a.MenuItem, {
          id: c.default.Messages.DELETE_EVENT,
          label: c.default.Messages.DELETE_EVENT,
          action: _ ? void 0 : () => h(),
          color: "danger",
          children:
            _ &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(a.MenuItem, {
                  id: c.default.Messages.DELETE_THIS_EVENT,
                  label: c.default.Messages.DELETE_THIS_EVENT,
                  action: () => h(),
                  disabled: null == g ? void 0 : g.is_canceled,
                  color: "danger",
                }),
                (0, l.jsx)(a.MenuItem, {
                  id: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  label: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  action: () => h(!0),
                  color: "danger",
                }),
              ],
            }),
        });
      }
    },
    222971: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("817963"),
        i = n("398604"),
        s = n("397680"),
        r = n("466148"),
        o = n("842672"),
        c = n("782340");
      function E(e) {
        let {
            guildEventId: t,
            guild: E,
            channel: f,
            recurrenceId: _,
            isRecurrenceItem: T,
          } = e,
          { canManageGuildEvent: S } = (0, d.useManageResourcePermissions)(
            null != f ? f : E
          ),
          v = (0, u.useStateFromStores)([i.default], () =>
            i.default.getGuildScheduledEvent(t)
          ),
          g = S(v),
          I = (0, o.default)(),
          N = (0, s.default)(_, null == v ? void 0 : v.id),
          m = (0, r.default)(t, _);
        if (!g || null == v) return null;
        let M = null != v.recurrence_rule && !T,
          h = e => {
            (null == _ || e) && !T
              ? (0, a.openModalLazy)(async () => {
                  let { default: e } = await n
                    .el("590942")
                    .then(n.bind(n, "590942"));
                  return n =>
                    (0, l.jsx)(e, {
                      ...n,
                      guildScheduledEventId: t,
                      guildId: E.id,
                    });
                }, I)
              : null != _ &&
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await n
                    .el("229798")
                    .then(n.bind(n, "229798"));
                  return t =>
                    (0, l.jsx)(e, { ...t, guildEvent: v, recurrenceId: _ });
                }, I);
          };
        return (0, l.jsx)(a.MenuItem, {
          id: c.default.Messages.EDIT_EVENT,
          label: c.default.Messages.EDIT_EVENT,
          action: M ? void 0 : () => h(!0),
          children:
            M &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(a.MenuItem, {
                  id: c.default.Messages.EDIT_THIS_EVENT,
                  label: c.default.Messages.EDIT_THIS_EVENT,
                  action: () => h(!1),
                  disabled:
                    (null == N ? void 0 : N.is_canceled) ||
                    m.startTime.getTime() < Date.now(),
                }),
                (0, l.jsx)(a.MenuItem, {
                  id: c.default.Messages.EDIT_ALL_EVENTS,
                  label: c.default.Messages.EDIT_ALL_EVENTS,
                  action: () => h(!0),
                  disabled:
                    new Date(v.scheduled_start_time).getTime() < Date.now(),
                }),
              ],
            }),
        });
      }
    },
    601131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("817963"),
        i = n("244480"),
        s = n("398604"),
        r = n("322224"),
        o = n("745049"),
        c = n("782340");
      function E(e, t, n) {
        let { canManageGuildEvent: E } = (0, d.useManageResourcePermissions)(
            null != n ? n : t
          ),
          f = (0, u.useStateFromStores)([s.default], () =>
            s.default.isActive(e)
          ),
          _ = (0, u.useStateFromStores)(
            [s.default],
            () => s.default.getGuildScheduledEvent(e),
            [e]
          ),
          T = E(_);
        if (
          null == e ||
          !T ||
          !f ||
          (null == _ ? void 0 : _.entity_type) ===
            o.GuildScheduledEventEntityTypes.EXTERNAL
        )
          return null;
        let S = () => {
          if (null == n ? void 0 : n.isGuildStageVoice()) {
            (0, i.endStage)(n);
            return;
          }
          null != e && r.default.endEvent(e, t.id), (0, a.closeAllModals)();
        };
        return (0, l.jsx)(a.MenuItem, {
          id: c.default.Messages.END_EVENT,
          label: c.default.Messages.END_EVENT,
          action: function () {
            (0, a.openModal)(e =>
              (0, l.jsx)(a.ConfirmModal, {
                ...e,
                header: c.default.Messages.END_EVENT,
                confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: c.default.Messages.CANCEL,
                onConfirm: S,
                children: (0, l.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children:
                    c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                }),
              })
            );
          },
          color: "danger",
        });
      }
    },
    876725: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("377114"),
        i = n("907566"),
        s = n("398604"),
        r = n("782340");
      function o(e) {
        let t = (0, u.useStateFromStores)(
          [s.default],
          () => s.default.getGuildScheduledEvent(e),
          [e]
        );
        return null == e || null == t
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "report-event",
              label: r.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
              action: () => (0, d.showReportModalForGuildScheduledEvent)(t),
              icon: i.default,
              color: "danger",
            });
      }
    },
    367989: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("817963"),
        i = n("398604"),
        s = n("658202"),
        r = n("397680"),
        o = n("782340");
      function c(e) {
        let { guildEventId: t, recurrenceId: n, guild: c, channel: E } = e,
          f = null != n,
          { canManageGuildEvent: _ } = (0, d.useManageResourcePermissions)(
            null != E ? E : c
          ),
          [T, S] = (0, u.useStateFromStoresArray)([i.default], () => [
            i.default.isActive(t),
            i.default.getGuildScheduledEvent(t),
          ]),
          v = (0, r.default)(n, null == S ? void 0 : S.id),
          g = null != S && _(S),
          I = f && (null == v ? void 0 : v.is_canceled) && g;
        return I && (!T || f)
          ? (0, l.jsx)(a.MenuItem, {
              id: o.default.Messages.RESTORE_EVENT,
              label: o.default.Messages.RESTORE_EVENT,
              action: () => {
                null != n && null != v && (0, s.default)(v, c.id, t, n);
              },
            })
          : null;
      }
    },
    891603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("267567"),
        i = n("271938"),
        s = n("398604"),
        r = n("322224"),
        o = n("397680"),
        c = n("745049"),
        E = n("782340");
      function f(e) {
        let { guildEventId: t, guildId: n, recurrenceId: f } = e,
          _ = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.isLurking(n),
            [n]
          ),
          T = (0, u.useStateFromStores)([i.default], () => i.default.getId()),
          {
            rsvped: S,
            baseRsvp: v,
            recurrenceRsvp: g,
          } = (0, u.useStateFromStoresObject)(
            [s.default],
            () => ({
              rsvped: s.default.isInterestedInEventRecurrence(t, f),
              baseRsvp: s.default.getRsvp(t, null, T),
              recurrenceRsvp: s.default.getRsvp(t, f, T),
            }),
            [f, t, T]
          ),
          I = (0, o.default)(f, t);
        if (_ || (null == I ? void 0 : I.is_canceled)) return null;
        let N = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l =
              (null == v ? void 0 : v.response) ===
              c.GuildScheduledEventUserResponses.INTERESTED,
            u = l
              ? c.GuildScheduledEventUserResponses.UNINTERESTED
              : c.GuildScheduledEventUserResponses.INTERESTED,
            a = e ? null : f;
          r.default.updateRsvp(t, a, n, u);
        };
        return (0, l.jsxs)(a.MenuItem, {
          id: S
            ? E.default.Messages.EVENT_MARK_NOT_INTERESTED
            : E.default.Messages.EVENT_MARK_INTERESTED,
          label: S
            ? E.default.Messages.EVENT_MARK_NOT_INTERESTED
            : E.default.Messages.EVENT_MARK_INTERESTED,
          action: void 0,
          children: [
            (0, l.jsx)(a.MenuItem, {
              id: E.default.Messages
                .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              label:
                E.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              action: () => N(!1),
            }),
            (0, l.jsx)(a.MenuItem, {
              id: E.default.Messages
                .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              label:
                E.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              action: () => N(!0),
              disabled: null != g,
            }),
          ],
        });
      }
    },
    510692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        d = n("817963"),
        i = n("398604"),
        s = n("534222"),
        r = n("49111"),
        o = n("782340");
      function c(e, t, c) {
        var E;
        let { canManageGuildEvent: f } = (0, d.useManageResourcePermissions)(
            null != c ? c : t
          ),
          _ = (0, u.useStateFromStores)(
            [i.default],
            () => i.default.getGuildScheduledEvent(e),
            [e]
          ),
          T = f(_),
          S =
            null !=
            (0, s.useActiveEvent)(
              null !== (E = null == c ? void 0 : c.id) && void 0 !== E
                ? E
                : r.EMPTY_STRING_SNOWFLAKE_ID
            ),
          v = null != _ && (0, i.isGuildScheduledEventActive)(_);
        return T && !v && !S
          ? (0, l.jsx)(a.MenuItem, {
              id: o.default.Messages.START_EVENT,
              label: o.default.Messages.START_EVENT,
              action: function () {
                null != _ &&
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("298843")
                      .then(n.bind(n, "298843"));
                    return t => (0, l.jsx)(e, { ...t, event: _ });
                  });
              },
            })
          : null;
      }
    },
    842672: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("77078"),
        u = n("244201"),
        a = n("558286"),
        d = n("49111");
      let i = "guild-event-modal";
      var s = () => {
        let e = (0, u.useAppContext)(),
          t =
            e === d.AppContext.POPOUT
              ? l.POPOUT_MODAL_CONTEXT
              : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: i,
          contextKey: t,
          onCloseRequest: () => {
            a.useGuildEventModalStore.getState().canCloseModal &&
              (0, l.closeModal)(i, t);
          },
        };
      };
    },
    217145: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isIFrameModalUserEnabled: function () {
            return a;
          },
        });
      var l = n("862205");
      let u = (0, l.createExperiment)({
        kind: "user",
        id: "2023-07_iframe_modal",
        label: "iFrame Modal",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable iFrameModal", config: { enabled: !0 } },
        ],
      });
      function a() {
        return u.getCurrentConfig(
          { location: "5c0a70_1" },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    429682: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isIFrameModalForGuildEnabled: function () {
            return d;
          },
        });
      var l = n("862205"),
        u = n("49111");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-08_iframe_modal_guild",
        label: "iFrame Modal guild experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable iFrame Modal Guild",
            config: { enabled: !0 },
          },
        ],
      });
      function d(e) {
        return a.getCurrentConfig(
          {
            guildId: null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID,
            location: "2d360b_1",
          },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    988878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("217145"),
        u = n("429682");
      function a(e) {
        return (
          (0, l.isIFrameModalUserEnabled)() ||
          (0, u.isIFrameModalForGuildEnabled)(e)
        );
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return g;
          },
          inviteUserToStage: function () {
            return I;
          },
          audienceAckRequestToSpeak: function () {
            return N;
          },
          moveSelfToAudience: function () {
            return m;
          },
          setUserSuppress: function () {
            return M;
          },
          moveUserToAudience: function () {
            return h;
          },
          setEveryoneRolePermissionAllowed: function () {
            return p;
          },
          startStage: function () {
            return D;
          },
          editStage: function () {
            return R;
          },
          endStage: function () {
            return C;
          },
        });
      var l = n("627445"),
        u = n.n(l),
        a = n("316693"),
        d = n("872717"),
        i = n("450911");
      n("851387");
      var s = n("798609"),
        r = n("716241"),
        o = n("18494"),
        c = n("800762"),
        E = n("991170"),
        f = n("716214"),
        _ = n("230324"),
        T = n("738983"),
        S = n("808422"),
        v = n("49111");
      function g(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          t &&
            (0, r.trackWithMetadata)(
              v.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, _.getStageChannelMetadata)(e) }
            ),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function I(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        u(null != l, "This channel cannot be guildless.");
        let a = c.default.getVoiceStateForChannel(e.id),
          i = (0, S.getAudienceRequestToSpeakState)(a);
        return (
          i ===
            S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, r.trackWithMetadata)(v.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, _.getStageChannelMetadata)(e),
            }),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function m(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          u(null != t, "This channel cannot be guildless."),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function M(e, t, n) {
        let l = e.getGuildId();
        return (
          u(null != l, "This channel cannot be guildless."),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function h(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          M(t, e.id, !0),
          d.default.patch({
            url: v.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function p(e, t, n) {
        let l = e.getGuildId();
        u(null != l, "Channel cannot be guildless");
        let d = e.permissionOverwrites[l],
          r = {
            id: l,
            type: s.PermissionOverwriteType.ROLE,
            allow: E.default.NONE,
            deny: E.default.NONE,
            ...d,
          };
        n
          ? ((r.allow = a.default.add(r.allow, t)),
            (r.deny = a.default.remove(r.deny, t)))
          : ((r.allow = a.default.remove(r.allow, t)),
            (r.deny = a.default.add(r.deny, t))),
          i.default.updatePermissionOverwrite(e.id, r);
      }
      async function D(e, t, n, l) {
        if ("" === t) return;
        let u = o.default.getVoiceChannelId() === e.id;
        !u && (0, f.connectToStage)(e);
        let a = await (0, T.startStageInstance)(e.id, t, n, l);
        return N(e, !1, !0), a;
      }
      async function R(e, t, n) {
        if ("" === t) return;
        let l = await (0, T.updateStageInstance)(e.id, t, n);
        return l;
      }
      async function C(e) {
        await (0, T.endStageInstance)(e.id);
      }
    },
    230324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          summarizeUsernamesParticipating: function () {
            return c;
          },
          getRemoveModeratorTooltipHint: function () {
            return E;
          },
          getStageChannelMetadata: function () {
            return f;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var l = n("945956"),
        u = n("387111"),
        a = n("991170"),
        d = n("834052"),
        i = n("837979"),
        s = n("49111"),
        r = n("606762"),
        o = n("782340");
      function c(e, t, n, l) {
        let a = t[0],
          d = u.default.getName(e, n, a),
          i = null != l ? l : t.length;
        return 1 === i && null != a
          ? d
          : null == a
            ? o.default.Messages.SPEAKING_COUNT.format({ count: i })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: d,
                count: i - 1,
              });
      }
      function E(e, t) {
        switch (e) {
          case r.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case r.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case r.RowType.MEMBER:
          case r.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case r.RowType.EMPTY_STATE:
        }
        return null;
      }
      function f(e) {
        let t = d.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: l.default.getMediaSessionId(),
          request_to_speak_state: a.default.canEveryoneRole(
            s.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? i.RequestToSpeakPermissionStates.EVERYONE
            : i.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          startStageInstance: function () {
            return a;
          },
          updateStageInstance: function () {
            return d;
          },
          endStageInstance: function () {
            return i;
          },
        });
      var l = n("872717"),
        u = n("49111");
      async function a(e, t, n, a, d) {
        let i = await l.default.post({
          url: u.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: d,
            send_start_notification: a,
          },
        });
        return i.body;
      }
      async function d(e, t, n) {
        let a = await l.default.patch({
          url: u.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return a.body;
      }
      function i(e) {
        return l.default.delete(u.Endpoints.STAGE_INSTANCE(e));
      }
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return u;
          },
          default: function () {
            return _;
          },
        });
      var l,
        u,
        a = n("37983");
      n("884691");
      var d = n("414456"),
        i = n.n(d),
        s = n("77078"),
        r = n("36694"),
        o = n("381546"),
        c = n("68238"),
        E = n("423487"),
        f = n("950038");
      ((l = u || (u = {}))[(l.WARNING = 0)] = "WARNING"),
        (l[(l.INFO = 1)] = "INFO"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.POSITIVE = 3)] = "POSITIVE");
      var _ = function (e) {
        let {
            children: t,
            messageType: n,
            className: l,
            textColor: u = "text-normal",
            textVariant: d = "text-sm/medium",
          } = e,
          _ = (function (e) {
            switch (e) {
              case 0:
                return E.default;
              case 1:
                return c.default;
              case 2:
                return o.default;
              case 3:
                return r.default;
            }
          })(n),
          T = (function (e) {
            switch (e) {
              case 0:
                return f.warning;
              case 1:
                return f.info;
              case 2:
                return f.error;
              case 3:
                return f.positive;
            }
          })(n);
        return (0, a.jsxs)("div", {
          className: i(f.container, T, l),
          children: [
            (0, a.jsx)("div", {
              className: f.iconDiv,
              children: (0, a.jsx)(_, { className: f.icon }),
            }),
            (0, a.jsx)(s.Text, {
              className: f.text,
              color: u,
              variant: d,
              children: t,
            }),
          ],
        });
      };
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("469563"),
        a = n("35647"),
        d = n("75196"),
        i = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, d.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: a,
                fill: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          a.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("669491"),
        a = n("82169");
      let d = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: d = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...s
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=2d541b9a277e0419dc9c.js.map
