(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49590"],
  {
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var u = n("917351"),
        l = n.n(u),
        i = n("446674"),
        d = n("913144"),
        a = n("398604"),
        r = n("813006"),
        s = n("730647");
      let o = !1,
        c = {},
        E = {},
        f = {},
        _ = e => (
          (f[e.guild_scheduled_event.id] = new r.default(
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
      class S extends i.default.Store {
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
      S.displayName = "EventDirectoryStore";
      var T = new S(d.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          o = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          o = !1;
          let u = l.sortBy(
              [...n],
              [
                function (e) {
                  return (0, a.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = l.map(u, _);
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
            return a;
          },
        });
      var u = n("866227"),
        l = n.n(u),
        i = n("299039"),
        d = n("745049");
      function a(e, t, n, u) {
        let a = l(),
          r = new Date(e.scheduled_start_time).getTime(),
          s = { start: r - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: r };
        if (a.isBetween(s.start, s.end)) {
          if (null != t) {
            let e = l(t),
              n = e.isBetween(s.start, s.end),
              i = e.isBetween(
                l(r).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                r
              );
            return n || (i && !u)
              ? void 0
              : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = i.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS,
            r
          ),
          E = a.isBetween(o, c);
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
        a = n("49129"),
        r = n("745049");
      let s = {},
        o = {};
      function c(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class E extends u.default.PersistedStore {
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
            u = i.default.getId();
          if (t !== u) return;
          let l = d.default.getGuildScheduledEvent(n);
          if (null == l || l.status !== r.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = s[n];
          if (null != c) return;
          let E = o[n],
            f = (0, a.getNextShownUpcomingEventNoticeType)(l, void 0, E, !1);
          if (f === r.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
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
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
          useActiveEvent: function () {
            return p;
          },
          useActiveEventsByChannel: function () {
            return m;
          },
          useGuildUpcomingEventsNotice: function () {
            return A;
          },
          useGuildActiveEvent: function () {
            return C;
          },
          useGuildChannelScheduledEvents: function () {
            return y;
          },
          useFirstActiveEventChannel: function () {
            return D;
          },
          useImminentUpcomingGuildEvents: function () {
            return O;
          },
        }),
        n("222007"),
        n("808653");
      var u = n("884691"),
        l = n("446674"),
        i = n("962199"),
        d = n("42203"),
        a = n("923959"),
        r = n("305961"),
        s = n("957255"),
        o = n("718517"),
        c = n("449008"),
        E = n("398604"),
        f = n("49129"),
        _ = n("431934"),
        S = n("466148"),
        T = n("822516"),
        N = n("745049"),
        v = n("49111");
      let g = [],
        I = 15 * o.default.Millis.MINUTE;
      function h(e, t) {
        return (0, l.useStateFromStoresArray)(
          [r.default, i.default, E.default, s.default, d.default, a.default],
          () => {
            let n = r.default.getGuild(e);
            if (null == n) return g;
            let u = n.hasFeature(v.GuildFeatures.HUB);
            if (u) {
              var l, o;
              let e =
                  null === (l = a.default.getDefaultChannel(n.id)) ||
                  void 0 === l
                    ? void 0
                    : l.id,
                t =
                  null !== (o = i.default.getEventDirectoryEntries(e)) &&
                  void 0 !== o
                    ? o
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = E.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.default.getCachedGuildScheduledEventById(t);
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
              return s.default.can(v.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function p(e) {
        return (0, l.useStateFromStores)(
          [E.default, d.default, s.default],
          () => {
            let t = d.default.getChannel(e);
            if (!s.default.can(v.Permissions.VIEW_CHANNEL, t)) return null;
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
      function m(e) {
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
      function A(e) {
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
                    e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== N.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = d.default.getChannel(e.channel_id);
                  return s.default.can(v.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          i = (0, l.useStateFromStoresObject)([_.default], () =>
            _.default.getAllEventDismissals()
          ),
          a = (0, l.useStateFromStoresObject)([_.default], () =>
            _.default.getAllUpcomingNoticeSeenTimes()
          ),
          r = (0, l.useStateFromStoresObject)(
            [E.default],
            () =>
              null == u
                ? {}
                : u.reduce((e, t) => {
                    let n = (0, T.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: E.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [u]
          );
        if (null != u && null != r)
          for (let e = 0; e < u.length; e++) {
            let t = u[e],
              l = i[t.id],
              d = a[t.id],
              s = null !== (n = r[t.id]) && void 0 !== n && n,
              o = (0, f.getNextShownUpcomingEventNoticeType)(t, l, d, s);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function C(e) {
        return (0, l.useStateFromStores)(
          [E.default, d.default, s.default],
          () => {
            let t = E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === N.GuildScheduledEventEntityTypes.NONE ||
                !(0, E.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = d.default.getChannel(e.channel_id);
              return s.default.can(v.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function y(e) {
        return (0, l.useStateFromStores)(
          [E.default],
          () =>
            E.default.getGuildScheduledEventsByIndex(
              E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function D(e) {
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
      function O(e) {
        let [t, n] = u.useState(() => Date.now());
        u.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, I);
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
                let { startTime: t, endTime: n } = (0, S.getEventSchedule)(e),
                  { withinStartWindow: u, diffMinutes: l } = (0,
                  T.getEventTimeData)(
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
    601131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        d = n("817963"),
        a = n("244480"),
        r = n("398604"),
        s = n("322224"),
        o = n("745049"),
        c = n("782340");
      function E(e, t, n) {
        let { canManageGuildEvent: E } = (0, d.useManageResourcePermissions)(
            null != n ? n : t
          ),
          f = (0, l.useStateFromStores)([r.default], () =>
            r.default.isActive(e)
          ),
          _ = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.getGuildScheduledEvent(e),
            [e]
          ),
          S = E(_);
        if (
          null == e ||
          !S ||
          !f ||
          (null == _ ? void 0 : _.entity_type) ===
            o.GuildScheduledEventEntityTypes.EXTERNAL
        )
          return null;
        let T = () => {
          if (null == n ? void 0 : n.isGuildStageVoice()) {
            (0, a.endStage)(n);
            return;
          }
          null != e && s.default.endEvent(e, t.id), (0, i.closeAllModals)();
        };
        return (0, u.jsx)(i.MenuItem, {
          id: c.default.Messages.END_EVENT,
          label: c.default.Messages.END_EVENT,
          action: function () {
            (0, i.openModal)(e =>
              (0, u.jsx)(i.ConfirmModal, {
                ...e,
                header: c.default.Messages.END_EVENT,
                confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: c.default.Messages.CANCEL,
                onConfirm: T,
                children: (0, u.jsx)(i.Text, {
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
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return v;
          },
          inviteUserToStage: function () {
            return g;
          },
          audienceAckRequestToSpeak: function () {
            return I;
          },
          moveSelfToAudience: function () {
            return h;
          },
          setUserSuppress: function () {
            return p;
          },
          moveUserToAudience: function () {
            return m;
          },
          setEveryoneRolePermissionAllowed: function () {
            return A;
          },
          startStage: function () {
            return C;
          },
          editStage: function () {
            return y;
          },
          endStage: function () {
            return D;
          },
        });
      var u = n("627445"),
        l = n.n(u),
        i = n("316693"),
        d = n("872717"),
        a = n("450911");
      n("851387");
      var r = n("798609"),
        s = n("716241"),
        o = n("18494"),
        c = n("800762"),
        E = n("991170"),
        f = n("716214"),
        _ = n("230324"),
        S = n("738983"),
        T = n("808422"),
        N = n("49111");
      function v(e, t) {
        let n = e.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          t &&
            (0, s.trackWithMetadata)(
              N.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, _.getStageChannelMetadata)(e) }
            ),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function g(e, t) {
        let n = e.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u = null == e ? void 0 : e.getGuildId();
        l(null != u, "This channel cannot be guildless.");
        let i = c.default.getVoiceStateForChannel(e.id),
          a = (0, T.getAudienceRequestToSpeakState)(i);
        return (
          a ===
            T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, s.trackWithMetadata)(N.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, _.getStageChannelMetadata)(e),
            }),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(u),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function h(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          l(null != t, "This channel cannot be guildless."),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function p(e, t, n) {
        let u = e.getGuildId();
        return (
          l(null != u, "This channel cannot be guildless."),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(u, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function m(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          p(t, e.id, !0),
          d.default.patch({
            url: N.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function A(e, t, n) {
        let u = e.getGuildId();
        l(null != u, "Channel cannot be guildless");
        let d = e.permissionOverwrites[u],
          s = {
            id: u,
            type: r.PermissionOverwriteType.ROLE,
            allow: E.default.NONE,
            deny: E.default.NONE,
            ...d,
          };
        n
          ? ((s.allow = i.default.add(s.allow, t)),
            (s.deny = i.default.remove(s.deny, t)))
          : ((s.allow = i.default.remove(s.allow, t)),
            (s.deny = i.default.add(s.deny, t))),
          a.default.updatePermissionOverwrite(e.id, s);
      }
      async function C(e, t, n, u) {
        if ("" === t) return;
        let l = o.default.getVoiceChannelId() === e.id;
        !l && (0, f.connectToStage)(e);
        let i = await (0, S.startStageInstance)(e.id, t, n, u);
        return I(e, !1, !0), i;
      }
      async function y(e, t, n) {
        if ("" === t) return;
        let u = await (0, S.updateStageInstance)(e.id, t, n);
        return u;
      }
      async function D(e) {
        await (0, S.endStageInstance)(e.id);
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
      var u = n("945956"),
        l = n("387111"),
        i = n("991170"),
        d = n("834052"),
        a = n("837979"),
        r = n("49111"),
        s = n("606762"),
        o = n("782340");
      function c(e, t, n, u) {
        let i = t[0],
          d = l.default.getName(e, n, i),
          a = null != u ? u : t.length;
        return 1 === a && null != i
          ? d
          : null == i
            ? o.default.Messages.SPEAKING_COUNT.format({ count: a })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: d,
                count: a - 1,
              });
      }
      function E(e, t) {
        switch (e) {
          case s.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.RowType.MEMBER:
          case s.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case s.RowType.EMPTY_STATE:
        }
        return null;
      }
      function f(e) {
        let t = d.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: u.default.getMediaSessionId(),
          request_to_speak_state: i.default.canEveryoneRole(
            r.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? a.RequestToSpeakPermissionStates.EVERYONE
            : a.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          startStageInstance: function () {
            return i;
          },
          updateStageInstance: function () {
            return d;
          },
          endStageInstance: function () {
            return a;
          },
        });
      var u = n("872717"),
        l = n("49111");
      async function i(e, t, n, i, d) {
        let a = await u.default.post({
          url: l.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: d,
            send_start_notification: i,
          },
        });
        return a.body;
      }
      async function d(e, t, n) {
        let i = await u.default.patch({
          url: l.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return i.body;
      }
      function a(e) {
        return u.default.delete(l.Endpoints.STAGE_INSTANCE(e));
      }
    },
  },
]);
//# sourceMappingURL=529b1a169368c30d6a82.js.map
