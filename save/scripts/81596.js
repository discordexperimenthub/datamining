(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81596"],
  {
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
            return d;
          },
        });
      var l = n("483366"),
        u = n.n(l),
        a = n("872717"),
        i = n("913144"),
        s = n("730647"),
        r = n("49111");
      let d = u(async e => {
        try {
          i.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let t = await a.default.get({
            url: r.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT },
          });
          i.default.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: e,
            entries: t.body,
          });
        } catch (e) {
          i.default.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    49129: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNextShownUpcomingEventNoticeType: function () {
            return s;
          },
        });
      var l = n("866227"),
        u = n.n(l),
        a = n("299039"),
        i = n("745049");
      function s(e, t, n, l) {
        let s = u(),
          r = new Date(e.scheduled_start_time).getTime(),
          d = { start: r - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: r };
        if (s.isBetween(d.start, d.end)) {
          if (null != t) {
            let e = u(t),
              n = e.isBetween(d.start, d.end),
              a = e.isBetween(
                u(r).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                r
              );
            return n || (a && !l)
              ? void 0
              : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = a.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : o) + i.NEW_EVENT_WINDOW_MILLISECONDS,
            r
          ),
          f = s.isBetween(o, c);
        if (f && null == t && !l)
          return i.UpcomingGuildEventNoticeTypes.NEW_EVENT;
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
        a = n("271938"),
        i = n("398604"),
        s = n("49129"),
        r = n("745049");
      let d = {},
        o = {};
      function c(e) {
        let t = { ...d };
        delete t[e], (d = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class f extends l.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (d =
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
          return d[e];
        }
        getAllEventDismissals() {
          return d;
        }
        getUpcomingNoticeSeenTime(e) {
          return o[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return o;
        }
        getState() {
          return { upcomingEventDismissals: d, upcomingEventSeenTimestamps: o };
        }
      }
      (f.displayName = "UpcomingEventNoticesStore"),
        (f.persistKey = "UpcomingEventNotices");
      var E = new f(u.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...d };
          (n[t] = Date.now()), (d = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === r.GuildScheduledEventStatus.CANCELED ||
            t.status === r.GuildScheduledEventStatus.COMPLETED) &&
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
          let u = i.default.getGuildScheduledEvent(n);
          if (null == u || u.status !== r.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = d[n];
          if (null != c) return;
          let f = o[n],
            E = (0, s.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
          if (E === r.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...d };
            (e[n] = Date.now()), (d = e);
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
        a = n("817963"),
        i = n("923959"),
        s = n("305961"),
        r = n("957255"),
        d = n("49111"),
        o = (e, t) => {
          let n = (0, u.useStateFromStores)(
              [s.default],
              () => s.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: o } = (0, a.useManageResourcePermissions)(n),
            c = (0, u.useStateFromStores)(
              [i.default],
              () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY],
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
              [r.default],
              () => {
                if (r.default.can(d.Permissions.ADMINISTRATOR, n) || o)
                  return !0;
                for (let { channel: e } of f) {
                  let { canCreateGuildEvent: t } = (0,
                  a.getManageResourcePermissions)(e);
                  if (t) return !0;
                }
                return !1;
              },
              [f, n, o]
            );
          return E;
        };
    },
    202358: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("446674"),
        u = n("567469"),
        a = n("998716"),
        i = n("834052"),
        s = n("42203"),
        r = n("305961");
      function d(e) {
        let {
            id: t,
            data: { guild: n, instance: d, speakers: o, participantCount: c },
            context: f,
          } = e,
          E = (0, l.useStateFromStores)(
            [r.default, s.default],
            () => {
              var e;
              return r.default.getGuild(
                null === (e = s.default.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.getGuildId()
              );
            },
            [t]
          ),
          v = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.getStageInstanceByChannel(t),
            [t]
          ),
          S = (0, u.useStageParticipants)(
            t,
            a.StageChannelParticipantNamedIndex.SPEAKER
          ),
          g = (0, u.useStageParticipantsCount)(t),
          N = null != v ? S : o,
          h = (null != v ? g : c) - N.length;
        return {
          channelId: t,
          guild: null != E ? E : n,
          stage: null != v ? v : d,
          speakers: N,
          audienceCount: h,
          context: f,
        };
      }
    },
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
          useActiveEvent: function () {
            return I;
          },
          useActiveEventsByChannel: function () {
            return _;
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
        a = n("962199"),
        i = n("42203"),
        s = n("923959"),
        r = n("305961"),
        d = n("957255"),
        o = n("718517"),
        c = n("449008"),
        f = n("398604"),
        E = n("49129"),
        v = n("431934"),
        S = n("466148"),
        g = n("822516"),
        N = n("745049"),
        h = n("49111");
      let C = [],
        m = 15 * o.default.Millis.MINUTE;
      function p(e, t) {
        return (0, u.useStateFromStoresArray)(
          [r.default, a.default, f.default, d.default, i.default, s.default],
          () => {
            let n = r.default.getGuild(e);
            if (null == n) return C;
            let l = n.hasFeature(h.GuildFeatures.HUB);
            if (l) {
              var u, o;
              let e =
                  null === (u = s.default.getDefaultChannel(n.id)) ||
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
                    n = f.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : a.default.getCachedGuildScheduledEventById(t);
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
              let n = i.default.getChannel(t);
              return d.default.can(h.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function I(e) {
        return (0, u.useStateFromStores)(
          [f.default, i.default, d.default],
          () => {
            let t = i.default.getChannel(e);
            if (!d.default.can(h.Permissions.VIEW_CHANNEL, t)) return null;
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
      function _(e) {
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
              [f.default, i.default, d.default],
              () => {
                let e = f.default.getGuildScheduledEventsByIndex(
                  f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== N.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = i.default.getChannel(e.channel_id);
                  return d.default.can(h.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          a = (0, u.useStateFromStoresObject)([v.default], () =>
            v.default.getAllEventDismissals()
          ),
          s = (0, u.useStateFromStoresObject)([v.default], () =>
            v.default.getAllUpcomingNoticeSeenTimes()
          ),
          r = (0, u.useStateFromStoresObject)(
            [f.default],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, g.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: f.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l]
          );
        if (null != l && null != r)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              u = a[t.id],
              i = s[t.id],
              d = null !== (n = r[t.id]) && void 0 !== n && n,
              o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, i, d);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function x(e) {
        return (0, u.useStateFromStores)(
          [f.default, i.default, d.default],
          () => {
            let t = f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                !(0, f.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = i.default.getChannel(e.channel_id);
              return d.default.can(h.Permissions.VIEW_CHANNEL, t);
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
          [i.default, f.default],
          () => {
            let t = f.default
              .getGuildScheduledEventsByIndex(
                f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
              )
              .find(e => {
                let t = i.default.getChannel(e.channel_id);
                return null != t;
              });
            return i.default.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e]
        );
      }
      function L(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, m);
          return () => clearInterval(e);
        }, []);
        let a = (0, u.useStateFromStores)(
            [f.default],
            () =>
              null == e
                ? []
                : f.default.getGuildScheduledEventsByIndex(
                    f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          i = l.useMemo(
            () =>
              a.filter(e => {
                let { startTime: t, endTime: n } = (0, S.getEventSchedule)(e),
                  { withinStartWindow: l, diffMinutes: u } = (0,
                  g.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== N.GuildScheduledEventStatus.ACTIVE && l && u < 15
                );
              }),
            [a]
          );
        return i;
      }
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
        a = n("922770"),
        i = n("267567"),
        s = n("998716"),
        r = n("834052"),
        d = n("42203"),
        o = n("957255"),
        c = n("945956"),
        f = n("697218"),
        E = n("374021"),
        v = n("398604"),
        S = n("152475"),
        g = n("202358"),
        N = n("598639"),
        h = n("189443"),
        C = n("841363"),
        m = n("822516"),
        p = n("93550"),
        I = n("617347"),
        _ = n("369404"),
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
            guild_id: A,
            channel_id: U,
            creator_id: y,
            name: V,
            description: j,
            entity_type: O,
            image: P,
            recurrence_rule: k,
          } = n,
          H = (0, m.getNextRecurrenceIdInEvent)(n),
          F = (0, u.useStateFromStores)(
            [v.default],
            () => v.default.isInterestedInEventRecurrence(M, H),
            [M, H]
          ),
          b = (0, u.useStateFromStores)(
            [i.default],
            () => i.default.isLurking(A),
            [A]
          ),
          w = (0, u.useStateFromStores)(
            [r.default],
            () => r.default.getStageInstanceByChannel(U),
            [U]
          ),
          B = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getChannel(U),
            [U]
          ),
          W = (0, u.useStateFromStores)(
            [f.default],
            () => f.default.getUser(y),
            [y]
          ),
          { speakers: z } = (0, g.default)({
            id: U,
            data: {
              guild: null,
              instance: w,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: A, instance: w },
          }),
          Y = (0, u.useStateFromStores)([c.default], () =>
            c.default.getChannelId()
          ),
          q = (0, v.isGuildScheduledEventActive)(n),
          K = Y === U && null != Y && q,
          Z = z.filter(e => e.type === s.StageChannelParticipantTypes.VOICE),
          J = Z.length,
          X = (0, u.useStateFromStores)(
            [o.default],
            () => o.default.can(T.Permissions.CONNECT, B),
            [B]
          ),
          Q = (0, S.default)(n),
          { isMember: $, guild: ee } = (0, N.default)(A, M),
          et = (0, _.default)({
            guild: ee,
            channel: B,
            guildScheduledEvent: n,
            isActive: q,
            recurrenceId: H,
            onActionTaken: D,
          }),
          en = (0, a.default)(x),
          el = b
            ? void 0
            : e =>
                (0, E.openGuildEventDetails)({
                  eventId: M,
                  parentGuildId: x,
                  recurrenceId: e,
                });
        return (0, l.jsx)(I.default, {
          guild: ee,
          channel: B,
          creator: W,
          name: V,
          entityType: O,
          description: null != j ? j : void 0,
          location:
            null !== (t = (0, C.getLocationFromEvent)(n)) && void 0 !== t
              ? t
              : void 0,
          imageSource: null != P ? (0, p.default)(n) : void 0,
          imageLocation: I.GuildEventBodyImageLocation.THUMBNAIL,
          isActive: q,
          isUserLurking: b,
          isJoined: K,
          isMember: $,
          isHub: en,
          speakers: Z,
          canConnect: X,
          speakerCount: J,
          rsvped: F,
          canInvite: Q,
          ...et,
          className: L,
          onClick: el,
          truncate: G,
          isNew: R,
          guildEventId: M,
          recurrenceRule: (0, h.recurrenceRuleFromServer)(k),
          recurrenceId: H,
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
            return y;
          },
        });
      var l,
        u,
        a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        r = n.n(s),
        d = n("446674"),
        o = n("77078"),
        c = n("656038"),
        f = n("419830"),
        E = n("817963"),
        v = n("957255"),
        S = n("476263"),
        g = n("718550"),
        N = n("398604"),
        h = n("1339"),
        C = n("613767"),
        m = n("822516"),
        p = n("707916"),
        I = n("255050"),
        _ = n("400271"),
        T = n("427554"),
        x = n("644189"),
        G = n("29913"),
        D = n("745049"),
        L = n("49111"),
        R = n("782340"),
        M = n("402155");
      function A(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, E.useManageResourcePermissions)(t),
          u = (0, d.useStateFromStores)(
            [v.default],
            () => !t.isGuildVocal() || v.default.can(L.Permissions.CONNECT, t),
            [t]
          ),
          s = i.useMemo(() => (0, c.default)(t), [t]),
          S = (0, f.getChannelIconComponent)(t);
        return (0, a.jsx)(o.Tooltip, {
          text: R.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !u && null != n,
          children: e =>
            (0, a.jsxs)(o.Clickable, {
              ...e,
              className: r(M.inline, M.channelContainer, {
                [M.channelContainerEnabled]: u && null != n,
                [M.channelContainerDisabled]: !u && null != n,
              }),
              onClick: n,
              children: [
                (0, a.jsx)(o.Tooltip, {
                  text: R.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && s && u && null != n,
                  children: e =>
                    null != S
                      ? (0, a.jsx)(S, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: M.icon,
                        })
                      : null,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: M.channelLocation,
                  children: t.name,
                }),
              ],
            }),
        });
      }
      function U(e) {
        let {
          guild: t,
          channel: n,
          onJoinClick: l,
          handleLocationClick: u,
          location: i,
          isExternal: s,
          isHub: d,
        } = e;
        if (d)
          return null == t
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                className: M.inline,
                children: [
                  (0, a.jsx)(S.default, {
                    className: M.guildIcon,
                    size: S.default.Sizes.MINI,
                    active: !0,
                    guild: t,
                  }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == t ? void 0 : t.name,
                  }),
                ],
              });
        return null != n
          ? (0, a.jsx)(A, { channel: n, onClick: l })
          : (0, a.jsxs)(o.Clickable, {
              className: M.inline,
              onClick: u,
              children: [
                (0, a.jsx)(g.default, {
                  height: 20,
                  width: 20,
                  className: r(M.channelContainer, M.icon),
                }),
                (0, a.jsx)(o.Text, {
                  className: s ? M.externalLocation : M.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, h.guildEventDetailsParser)(i, !0),
                }),
              ],
            });
      }
      function y(e) {
        let {
            className: t,
            guild: n,
            channel: l,
            creator: u,
            name: i,
            entityType: s,
            description: c,
            imageLocation: f = 0,
            imageSource: E,
            isActive: v,
            isUserLurking: S,
            isJoined: g = !1,
            isMember: h = !1,
            isHub: L = !1,
            speakers: R,
            speakerCount: A,
            rsvped: y,
            canInvite: V,
            location: j,
            truncate: O,
            onContextMenu: P,
            onJoinClick: k,
            onJoinGuildClick: H,
            onGoToGuildClick: F,
            onRsvpClick: b,
            onStartClick: w,
            onInviteClick: B,
            onEndClick: W,
            onClick: z,
            isNew: Y,
            guildEventId: q,
            eventPreview: K,
            recurrenceRule: Z,
            recurrenceId: J,
          } = e,
          X = (0, C.isChannelPublic)(l, s),
          Q = s === D.GuildScheduledEventEntityTypes.EXTERNAL,
          $ = (0, d.useStateFromStores)([N.default], () =>
            N.default.getGuildScheduledEvent(q)
          ),
          ee = [];
        if (null != Z && null != $) {
          let e = (0, m.getRRule)(Z);
          ee = (0, m.generateNextRecurrences)(
            4,
            e,
            new Date($.scheduled_start_time)
          );
        }
        let et = ee.length > 0;
        return (0, a.jsxs)(o.ClickableContainer, {
          "aria-label": i,
          onClick: () => (null == z ? void 0 : z(J)),
          onContextMenu: P,
          className: r(M.card, { [M.joined]: g, [M.lurking]: S }, t),
          children: [
            (0, a.jsxs)("div", {
              className: r(M.padding, { [M.isRecurring]: et }),
              children: [
                0 === f && (0, a.jsx)(I.default, { source: E }),
                (0, a.jsx)(_.default, {
                  creator: u,
                  name: i,
                  description: c,
                  imageSource: 1 === f ? E : null,
                  truncate: O,
                  guildId: null == n ? void 0 : n.id,
                  isHub: L,
                  isNew: Y,
                  guildEventId: q,
                  eventPreview: K,
                  recurrenceId: J,
                }),
                v &&
                  null != n &&
                  null != R &&
                  A > 0 &&
                  (0, a.jsx)(G.default, {
                    guild: n,
                    speakers: R,
                    speakerCount: A,
                    className: M.spacing,
                  }),
                (0, a.jsx)("hr", { className: M.divider }),
                (0, a.jsxs)("div", {
                  className: r(M.inline, M.footer),
                  children: [
                    (0, a.jsx)(U, {
                      guild: n,
                      channel: l,
                      onJoinClick: k,
                      handleLocationClick: Q
                        ? e => e.stopPropagation()
                        : void 0,
                      location: j,
                      isExternal: Q,
                      isHub: L,
                    }),
                    L
                      ? (0, a.jsx)(x.default, {
                          isActive: v,
                          isUserLurking: S,
                          isMember: h,
                          rsvped: y,
                          onRsvpClick: b,
                          onJoinGuildClick: H,
                          onGoToGuildClick: F,
                          guildName: null == n ? void 0 : n.name,
                          canInvite: V,
                          isChannelPublic: X,
                          onInviteClick: B,
                        })
                      : (0, a.jsx)(p.default, {
                          entityType: s,
                          isJoined: g,
                          isActive: v,
                          isUserLurking: S,
                          rsvped: y,
                          canInvite: V,
                          isChannelPublic: X,
                          onContextMenu: P,
                          onJoinClick: k,
                          onRsvpClick: b,
                          onStartClick: w,
                          onInviteClick: B,
                          onEndClick: W,
                        }),
                  ],
                }),
                et && (0, a.jsx)("hr", { className: M.divider }),
              ],
            }),
            et &&
              (0, a.jsx)(T.default, {
                guildId: null == n ? void 0 : n.id,
                recurrenceRule: Z,
                guildEventId: q,
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
            return y;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        a = n("917351"),
        i = n.n(a),
        s = n("446674"),
        r = n("77078"),
        d = n("267363"),
        o = n("15433"),
        c = n("27978"),
        f = n("923959"),
        E = n("124948"),
        v = n("305961"),
        S = n("660478"),
        g = n("476765"),
        N = n("943232"),
        h = n("945330"),
        C = n("599110"),
        m = n("449008"),
        p = n("299039"),
        I = n("933326"),
        _ = n("334683"),
        T = n("534222"),
        x = n("473031"),
        G = n("266763"),
        D = n("842672"),
        L = n("745049"),
        R = n("49111"),
        M = n("133335"),
        A = n("782340"),
        U = n("290487");
      function y(e) {
        let { transitionState: t, onClose: a, guildId: y } = e,
          V = (0, g.useUID)(),
          j = (0, s.useStateFromStores)([v.default], () =>
            v.default.getGuild(y)
          ),
          O = (0, _.default)(null == j ? void 0 : j.id),
          P = (0, T.default)(y),
          k = u.useRef(S.default.ackMessageId(y, M.ReadStateTypes.GUILD_EVENT)),
          H = (0, D.default)();
        return (
          u.useEffect(() => {
            P.forEach(e => I.default.getGuildEventUserCounts(y, e.id, [])),
              I.default.getGuildEventsForCurrentUser(y);
          }, [P, y]),
          u.useEffect(() => {
            let e = v.default.getGuild(y);
            if (!(null == e ? void 0 : e.hasFeature(R.GuildFeatures.HUB)))
              return;
            let { showHubEventsList: t } = c.default.getCurrentConfig({
              guildId: y,
              location: "d3755f_1",
            });
            if (!t) return;
            let n = f.default.getDefaultChannel(y);
            null != n && o.fetchDirectoryEntries(n.id);
          }, [y]),
          u.useEffect(() => {
            C.default.track(R.AnalyticEvents.OPEN_MODAL, {
              type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
              guild_id: y,
              guild_events_count: P.length,
            });
          }, []),
          u.useEffect(() => {
            i(P)
              .map(e => e.creator_id)
              .filter(m.isNotNullish)
              .uniq()
              .forEach(e => {
                E.default.requestMember(y, e);
              });
          }, [y, P]),
          u.useEffect(() => {
            null != y &&
              (0, d.ackGuildFeature)(y, M.ReadStateTypes.GUILD_EVENT);
          }, [y]),
          (0, l.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: t,
            "aria-labelledby": V,
            children: [
              (0, l.jsxs)(r.ModalHeader, {
                className: U.header,
                children: [
                  (0, l.jsx)(N.default, { className: U.icon }),
                  (0, l.jsx)(r.Heading, {
                    id: V,
                    variant: "heading-md/semibold",
                    children:
                      P.length > 0
                        ? A.default.Messages.GUILD_EVENTS_PLURAL.format({
                            number: P.length,
                          })
                        : A.default.Messages.GUILD_EVENTS,
                  }),
                  O &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: U.divider,
                          children: "|",
                        }),
                        (0, l.jsx)(r.Button, {
                          size: r.Button.Sizes.MIN,
                          onClick: () => {
                            (0, r.openModalLazy)(async () => {
                              let { default: e } = await n
                                .el("590942")
                                .then(n.bind(n, "590942"));
                              return t => (0, l.jsx)(e, { ...t, guildId: y });
                            }, H);
                          },
                          innerClassName: U.button,
                          children: A.default.Messages.SCHEDULE_EVENT,
                        }),
                      ],
                    }),
                  (0, l.jsx)(r.Clickable, {
                    onClick: a,
                    className: U.iconButton,
                    "aria-label": A.default.Messages.CLOSE,
                    children: (0, l.jsx)(h.default, { className: U.icon }),
                  }),
                ],
              }),
              (0, l.jsx)(r.ModalContent, {
                className: U.content,
                children:
                  P.length > 0
                    ? P.map(e =>
                        (0, l.jsx)(
                          x.default,
                          {
                            guildEvent: e,
                            guildId: y,
                            onActionTaken: a,
                            isNew:
                              null != k.current &&
                              p.default.compare(e.id, k.current) > 0,
                          },
                          e.id
                        )
                      )
                    : (0, l.jsx)(G.default, { guildId: y, onClose: a }),
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
            return S;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        i = n("592407"),
        s = n("27978"),
        r = n("119184"),
        d = n("305961"),
        o = n("957255"),
        c = n("943232"),
        f = n("49111"),
        E = n("782340"),
        v = n("801813");
      function S(e) {
        let { guildId: t, onClose: n } = e,
          { showHubEventsList: S } = s.default.useExperiment(
            { guildId: t, location: "6597ca_1" },
            { autoTrackExposure: !1 }
          ),
          g = (0, u.useStateFromStores)(
            [d.default, o.default],
            () => {
              let e = d.default.getGuild(t);
              return o.default.can(f.Permissions.MANAGE_ROLES, e);
            },
            [t]
          ),
          N = (0, u.useStateFromStores)(
            [d.default],
            () => {
              let e = d.default.getGuild(t);
              return (
                S && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
              );
            },
            [t, S]
          );
        return (0, l.jsxs)("div", {
          className: v.container,
          children: [
            (0, l.jsx)(r.default, {
              children: (0, l.jsx)("div", {
                className: v.circle,
                children: (0, l.jsx)(c.default, {
                  height: 40,
                  width: 40,
                  className: v.icon,
                }),
              }),
            }),
            (0, l.jsx)(a.Heading, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              className: v.title,
              children: N
                ? E.default.Messages.HUB_EVENTS_HEADER_TITLE
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE,
            }),
            (0, l.jsx)(a.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: v.subtitle,
              children: N
                ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE,
            }),
            g &&
              (0, l.jsx)(a.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: v.roleTip,
                children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                  onClick: () => {
                    i.default.open(t, f.GuildSettingsSections.ROLES), n();
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
        a = n.n(u),
        i = n("77078"),
        s = n("849467"),
        r = n("782340"),
        d = n("602552");
      function o(e) {
        let { guild: t, speakers: n, speakerCount: u, className: o } = e,
          c = n.slice(0, 5),
          f = c.map(e => {
            var n, u;
            return (0, l.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)(i.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (n = e.user) || void 0 === n
                          ? void 0
                          : n.getAvatarURL(t.id, 20),
                    size: i.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar"
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, l.jsx)(i.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: d.textInGrid,
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
          className: a(d.grid, o),
          children: [
            f,
            E > 0 &&
              (0, l.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, l.jsx)(s.default, { height: 12 }),
                  }),
                  (0, l.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
                    children:
                      r.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
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
        a = n("77078"),
        i = n("322224"),
        s = n("832588"),
        r = n("745049"),
        d = n("782340"),
        o = n("505326");
      function c(e) {
        let { event: t, recurrenceId: n, guildId: c, onRsvp: f, ...E } = e,
          [v, S] = u.useState(s.ResponseOptions.SERIES),
          g = (0, s.getExistingRsvp)(t.id, null),
          N =
            (null == g ? void 0 : g.response) ===
            r.GuildScheduledEventUserResponses.INTERESTED,
          h = N
            ? r.GuildScheduledEventUserResponses.UNINTERESTED
            : r.GuildScheduledEventUserResponses.INTERESTED,
          C =
            h === r.GuildScheduledEventUserResponses.INTERESTED
              ? d.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : d.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, l.jsx)(a.ConfirmModal, {
          ...E,
          header: C,
          confirmText: d.default.Messages.OK,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: () => {
            v === s.ResponseOptions.SERIES
              ? i.default.updateRsvp(t.id, null, c, h)
              : i.default.updateRsvp(t.id, n, c, h),
              null == f || f(),
              E.onClose();
          },
          confirmButtonColor: a.Button.Colors.BRAND,
          children: (0, l.jsx)(a.RadioGroup, {
            className: o.responseOptions,
            value: v,
            options: (0, s.getResponseOptions)(),
            onChange: e => S(e.value),
          }),
        });
      }
      function f(e, t, n, u) {
        (0, s.handleRsvp)({
          eventId: e,
          recurrenceId: t,
          guildId: n,
          updateRsvp: (t, l, u, a) => i.default.updateRsvp(e, l, n, a),
          openRsvpPicker: (e, t) => {
            (0, a.openModalLazy)(() =>
              Promise.resolve(a =>
                (0, l.jsx)(c, {
                  ...a,
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
    842672: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("77078"),
        u = n("244201"),
        a = n("558286"),
        i = n("49111");
      let s = "guild-event-modal";
      var r = () => {
        let e = (0, u.useAppContext)(),
          t =
            e === i.AppContext.POPOUT
              ? l.POPOUT_MODAL_CONTEXT
              : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: s,
          contextKey: t,
          onCloseRequest: () => {
            a.useGuildEventModalStore.getState().canCloseModal &&
              (0, l.closeModal)(s, t);
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
    567469: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useStageParticipants: function () {
            return s;
          },
          useStageParticipantsCount: function () {
            return r;
          },
          useSortedRequestToSpeakParticipants: function () {
            return d;
          },
          useActualStageSpeakerCount: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("334572"),
        a = n("488464"),
        i = n("998716");
      function s(e, t) {
        let [n] = (0, l.useStateFromStores)(
          [a.default],
          () => [
            a.default.getMutableParticipants(e, t),
            a.default.getParticipantsVersion(e),
          ],
          [e, t],
          u.isVersionEqual
        );
        return n;
      }
      function r(e, t) {
        return (0, l.useStateFromStores)(
          [a.default],
          () => a.default.getParticipantCount(e, t),
          [e, t]
        );
      }
      function d(e) {
        let [t] = (0, l.useStateFromStores)(
          [a.default],
          () => {
            let t = a.default.getMutableRequestToSpeakParticipants(e);
            return [t, a.default.getRequestToSpeakParticipantsVersion(e)];
          },
          [e],
          u.isVersionEqual
        );
        return t;
      }
      function o(e) {
        return (0, l.useStateFromStores)(
          [a.default],
          () => {
            let t = a.default.getMutableParticipants(
                e,
                i.StageChannelParticipantNamedIndex.SPEAKER
              ),
              n = t.filter(
                e => e.type === i.StageChannelParticipantTypes.VOICE
              );
            return n.length;
          },
          [e]
        );
      }
    },
    849467: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("469563"),
        a = n("696675"),
        i = n("75196"),
        s = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: a,
                  fill: u,
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: a,
                  fill: u,
                }),
              ],
            });
          },
          a.MicrophoneIcon,
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
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...r
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=745a2ff505d57752b0f8.js.map
