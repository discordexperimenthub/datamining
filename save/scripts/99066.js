(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99066"],
  {
    696675: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("886181");
      n.es(l, t);
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
        a = n("446674"),
        i = n("817963"),
        u = n("923959"),
        r = n("305961"),
        s = n("957255"),
        d = n("49111"),
        o = (e, t) => {
          let n = (0, a.useStateFromStores)(
              [r.default],
              () => r.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: o } = (0, i.useManageResourcePermissions)(n),
            c = (0, a.useStateFromStores)(
              [u.default],
              () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY],
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
            E = (0, a.useStateFromStores)(
              [s.default],
              () => {
                if (s.default.can(d.Permissions.ADMINISTRATOR, n) || o)
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
            return h;
          },
        }),
        n("222007");
      var l = n("446674"),
        a = n("242757"),
        i = n("834052"),
        u = n("42203"),
        r = n("923959"),
        s = n("305961"),
        d = n("957255"),
        o = n("991170"),
        c = n("398604"),
        f = n("745049"),
        E = n("49111");
      function v(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [u.default];
        let { entityType: l, channelId: a } =
            "entity_type" in (t = e)
              ? { entityType: t.entity_type, channelId: t.channel_id }
              : t,
          i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
        if (i) return !0;
        let r = n.getChannel(a);
        return (
          null != r && o.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, r)
        );
      }
      function g(e) {
        let [t, n, l, o] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.default, u.default, s.default, i.default];
        if ((0, c.isGuildEventEnded)(e)) return !1;
        let { guild_id: E, channel_id: g } = e,
          h = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL,
          m = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(g),
          p = l.getGuild(E),
          C = o.getStageInstanceByChannel(g);
        return (
          !!(0, a.canViewInviteModal)(d.default, p, m, C) &&
          null != m &&
          v(e, [n])
        );
      }
      function h(e) {
        return (0, l.useStateFromStores)(
          [r.default, u.default, s.default, i.default],
          () => g(e, [r.default, u.default, s.default, i.default]),
          [e]
        );
      }
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
        a = n("567469"),
        i = n("998716"),
        u = n("834052"),
        r = n("42203"),
        s = n("305961");
      function d(e) {
        let {
            id: t,
            data: { guild: n, instance: d, speakers: o, participantCount: c },
            context: f,
          } = e,
          E = (0, l.useStateFromStores)(
            [s.default, r.default],
            () => {
              var e;
              return s.default.getGuild(
                null === (e = r.default.getChannel(t)) || void 0 === e
                  ? void 0
                  : e.getGuildId()
              );
            },
            [t]
          ),
          v = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.getStageInstanceByChannel(t),
            [t]
          ),
          g = (0, a.useStageParticipants)(
            t,
            i.StageChannelParticipantNamedIndex.SPEAKER
          ),
          h = (0, a.useStageParticipantsCount)(t),
          m = null != v ? g : o,
          p = (null != v ? h : c) - m.length;
        return {
          channelId: t,
          guild: null != E ? E : n,
          stage: null != v ? v : d,
          speakers: m,
          audienceCount: p,
          context: f,
        };
      }
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
          getEventException: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("398604");
      function i(e, t) {
        let n = (0, l.useStateFromStoresArray)([a.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return r(n, e);
      }
      function u(e, t) {
        var n, l;
        let i =
          null !==
            (l =
              null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== l
            ? l
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
            return d;
          },
          getEventSchedule: function () {
            return o;
          },
        });
      var l = n("627445"),
        a = n.n(l),
        i = n("446674"),
        u = n("398604"),
        r = n("397680"),
        s = n("822516");
      function d(e, t, n) {
        var l;
        let d =
          null !==
            (l = (0, i.useStateFromStores)([u.default], () =>
              u.default.getGuildScheduledEvent(e)
            )) && void 0 !== l
            ? l
            : n;
        a(null != d, "Event must be defined"),
          (t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(d));
        let o = (0, r.default)(t, e);
        return c(d, o, t);
      }
      function o(e, t) {
        let n = (0, r.getEventException)(t, e.id);
        return c(e, n, t);
      }
      function c(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let l = (0, s.getBaseScheduleForRecurrence)(n, e),
          { startDate: a, endDate: i } = (0,
          s.getScheduleForRecurrenceWithException)(l, t);
        return {
          startTime: a.toDate(),
          endTime: null == i ? void 0 : i.toDate(),
        };
      }
    },
    598639: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("962199"),
        i = n("305961");
      function u(e, t) {
        return (0, l.useStateFromStoresObject)(
          [i.default, a.default],
          () => {
            let n = i.default.getGuild(e),
              l = null != n;
            return (
              null == n &&
                null != t &&
                (n = a.default.getCachedGuildByEventId(t)),
              { isMember: l, guild: n }
            );
          },
          [e, t]
        );
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
            return T;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        i = n("922770"),
        u = n("267567"),
        r = n("998716"),
        s = n("834052"),
        d = n("42203"),
        o = n("957255"),
        c = n("945956"),
        f = n("697218"),
        E = n("374021"),
        v = n("398604"),
        g = n("152475"),
        h = n("202358"),
        m = n("598639"),
        p = n("189443"),
        C = n("841363"),
        S = n("822516"),
        N = n("93550"),
        _ = n("617347"),
        I = n("369404"),
        x = n("49111");
      function T(e) {
        var t;
        let {
            guildEvent: n,
            guildId: T,
            truncate: R,
            onActionTaken: M,
            className: L,
            isNew: G,
          } = e,
          {
            id: j,
            guild_id: D,
            channel_id: A,
            creator_id: y,
            name: P,
            description: k,
            entity_type: V,
            image: U,
            recurrence_rule: F,
          } = n,
          b = (0, S.getNextRecurrenceIdInEvent)(n),
          O = (0, a.useStateFromStores)(
            [v.default],
            () => v.default.isInterestedInEventRecurrence(j, b),
            [j, b]
          ),
          H = (0, a.useStateFromStores)(
            [u.default],
            () => u.default.isLurking(D),
            [D]
          ),
          w = (0, a.useStateFromStores)(
            [s.default],
            () => s.default.getStageInstanceByChannel(A),
            [A]
          ),
          B = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getChannel(A),
            [A]
          ),
          z = (0, a.useStateFromStores)(
            [f.default],
            () => f.default.getUser(y),
            [y]
          ),
          { speakers: K } = (0, h.default)({
            id: A,
            data: {
              guild: null,
              instance: w,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: D, instance: w },
          }),
          q = (0, a.useStateFromStores)([c.default], () =>
            c.default.getChannelId()
          ),
          Z = (0, v.isGuildScheduledEventActive)(n),
          J = q === A && null != q && Z,
          Y = K.filter(e => e.type === r.StageChannelParticipantTypes.VOICE),
          X = Y.length,
          W = (0, a.useStateFromStores)(
            [o.default],
            () => o.default.can(x.Permissions.CONNECT, B),
            [B]
          ),
          Q = (0, g.default)(n),
          { isMember: $, guild: ee } = (0, m.default)(D, j),
          et = (0, I.default)({
            guild: ee,
            channel: B,
            guildScheduledEvent: n,
            isActive: Z,
            recurrenceId: b,
            onActionTaken: M,
          }),
          en = (0, i.default)(T),
          el = H
            ? void 0
            : e =>
                (0, E.openGuildEventDetails)({
                  eventId: j,
                  parentGuildId: T,
                  recurrenceId: e,
                });
        return (0, l.jsx)(_.default, {
          guild: ee,
          channel: B,
          creator: z,
          name: P,
          entityType: V,
          description: null != k ? k : void 0,
          location:
            null !== (t = (0, C.getLocationFromEvent)(n)) && void 0 !== t
              ? t
              : void 0,
          imageSource: null != U ? (0, N.default)(n) : void 0,
          imageLocation: _.GuildEventBodyImageLocation.THUMBNAIL,
          isActive: Z,
          isUserLurking: H,
          isJoined: J,
          isMember: $,
          isHub: en,
          speakers: Y,
          canConnect: W,
          speakerCount: X,
          rsvped: O,
          canInvite: Q,
          ...et,
          className: L,
          onClick: el,
          truncate: R,
          isNew: G,
          guildEventId: j,
          recurrenceRule: (0, p.recurrenceRuleFromServer)(F),
          recurrenceId: b,
        });
      }
    },
    617347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventBodyImageLocation: function () {
            return a;
          },
          default: function () {
            return y;
          },
        });
      var l,
        a,
        i = n("37983"),
        u = n("884691"),
        r = n("414456"),
        s = n.n(r),
        d = n("446674"),
        o = n("77078"),
        c = n("656038"),
        f = n("419830"),
        E = n("817963"),
        v = n("957255"),
        g = n("476263"),
        h = n("718550"),
        m = n("398604"),
        p = n("1339"),
        C = n("613767"),
        S = n("822516"),
        N = n("707916"),
        _ = n("255050"),
        I = n("400271"),
        x = n("427554"),
        T = n("644189"),
        R = n("29913"),
        M = n("745049"),
        L = n("49111"),
        G = n("782340"),
        j = n("402155");
      function D(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, E.useManageResourcePermissions)(t),
          a = (0, d.useStateFromStores)(
            [v.default],
            () => !t.isGuildVocal() || v.default.can(L.Permissions.CONNECT, t),
            [t]
          ),
          r = u.useMemo(() => (0, c.default)(t), [t]),
          g = (0, f.getChannelIconComponent)(t);
        return (0, i.jsx)(o.Tooltip, {
          text: G.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !a && null != n,
          children: e =>
            (0, i.jsxs)(o.Clickable, {
              ...e,
              className: s(j.inline, j.channelContainer, {
                [j.channelContainerEnabled]: a && null != n,
                [j.channelContainerDisabled]: !a && null != n,
              }),
              onClick: n,
              children: [
                (0, i.jsx)(o.Tooltip, {
                  text: G.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && a && null != n,
                  children: e =>
                    null != g
                      ? (0, i.jsx)(g, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: j.icon,
                        })
                      : null,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: j.channelLocation,
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
          handleLocationClick: a,
          location: u,
          isExternal: r,
          isHub: d,
        } = e;
        if (d)
          return null == t
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: j.inline,
                children: [
                  (0, i.jsx)(g.default, {
                    className: j.guildIcon,
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
          ? (0, i.jsx)(D, { channel: n, onClick: l })
          : (0, i.jsxs)(o.Clickable, {
              className: j.inline,
              onClick: a,
              children: [
                (0, i.jsx)(h.default, {
                  height: 20,
                  width: 20,
                  className: s(j.channelContainer, j.icon),
                }),
                (0, i.jsx)(o.Text, {
                  className: r ? j.externalLocation : j.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, p.guildEventDetailsParser)(u, !0),
                }),
              ],
            });
      }
      function y(e) {
        let {
            className: t,
            guild: n,
            channel: l,
            creator: a,
            name: u,
            entityType: r,
            description: c,
            imageLocation: f = 0,
            imageSource: E,
            isActive: v,
            isUserLurking: g,
            isJoined: h = !1,
            isMember: p = !1,
            isHub: L = !1,
            speakers: G,
            speakerCount: D,
            rsvped: y,
            canInvite: P,
            location: k,
            truncate: V,
            onContextMenu: U,
            onJoinClick: F,
            onJoinGuildClick: b,
            onGoToGuildClick: O,
            onRsvpClick: H,
            onStartClick: w,
            onInviteClick: B,
            onEndClick: z,
            onClick: K,
            isNew: q,
            guildEventId: Z,
            eventPreview: J,
            recurrenceRule: Y,
            recurrenceId: X,
          } = e,
          W = (0, C.isChannelPublic)(l, r),
          Q = r === M.GuildScheduledEventEntityTypes.EXTERNAL,
          $ = (0, d.useStateFromStores)([m.default], () =>
            m.default.getGuildScheduledEvent(Z)
          ),
          ee = [];
        if (null != Y && null != $) {
          let e = (0, S.getRRule)(Y);
          ee = (0, S.generateNextRecurrences)(
            4,
            e,
            new Date($.scheduled_start_time)
          );
        }
        let et = ee.length > 0;
        return (0, i.jsxs)(o.ClickableContainer, {
          "aria-label": u,
          onClick: () => (null == K ? void 0 : K(X)),
          onContextMenu: U,
          className: s(j.card, { [j.joined]: h, [j.lurking]: g }, t),
          children: [
            (0, i.jsxs)("div", {
              className: s(j.padding, { [j.isRecurring]: et }),
              children: [
                0 === f && (0, i.jsx)(_.default, { source: E }),
                (0, i.jsx)(I.default, {
                  creator: a,
                  name: u,
                  description: c,
                  imageSource: 1 === f ? E : null,
                  truncate: V,
                  guildId: null == n ? void 0 : n.id,
                  isHub: L,
                  isNew: q,
                  guildEventId: Z,
                  eventPreview: J,
                  recurrenceId: X,
                }),
                v &&
                  null != n &&
                  null != G &&
                  D > 0 &&
                  (0, i.jsx)(R.default, {
                    guild: n,
                    speakers: G,
                    speakerCount: D,
                    className: j.spacing,
                  }),
                (0, i.jsx)("hr", { className: j.divider }),
                (0, i.jsxs)("div", {
                  className: s(j.inline, j.footer),
                  children: [
                    (0, i.jsx)(A, {
                      guild: n,
                      channel: l,
                      onJoinClick: F,
                      handleLocationClick: Q
                        ? e => e.stopPropagation()
                        : void 0,
                      location: k,
                      isExternal: Q,
                      isHub: L,
                    }),
                    L
                      ? (0, i.jsx)(T.default, {
                          isActive: v,
                          isUserLurking: g,
                          isMember: p,
                          rsvped: y,
                          onRsvpClick: H,
                          onJoinGuildClick: b,
                          onGoToGuildClick: O,
                          guildName: null == n ? void 0 : n.name,
                          canInvite: P,
                          isChannelPublic: W,
                          onInviteClick: B,
                        })
                      : (0, i.jsx)(N.default, {
                          entityType: r,
                          isJoined: h,
                          isActive: v,
                          isUserLurking: g,
                          rsvped: y,
                          canInvite: P,
                          isChannelPublic: W,
                          onContextMenu: U,
                          onJoinClick: F,
                          onRsvpClick: H,
                          onStartClick: w,
                          onInviteClick: B,
                          onEndClick: z,
                        }),
                  ],
                }),
                et && (0, i.jsx)("hr", { className: j.divider }),
              ],
            }),
            et &&
              (0, i.jsx)(x.default, {
                guildId: null == n ? void 0 : n.id,
                recurrenceRule: Y,
                guildEventId: Z,
                onRecurrenceClick: K,
              }),
          ],
        });
      }
      ((l = a || (a = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
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
        a = n("884691"),
        i = n("917351"),
        u = n.n(i),
        r = n("446674"),
        s = n("77078"),
        d = n("267363"),
        o = n("15433"),
        c = n("27978"),
        f = n("923959"),
        E = n("124948"),
        v = n("305961"),
        g = n("660478"),
        h = n("476765"),
        m = n("943232"),
        p = n("945330"),
        C = n("599110"),
        S = n("449008"),
        N = n("299039"),
        _ = n("933326"),
        I = n("334683"),
        x = n("534222"),
        T = n("473031"),
        R = n("266763"),
        M = n("842672"),
        L = n("745049"),
        G = n("49111"),
        j = n("133335"),
        D = n("782340"),
        A = n("290487");
      function y(e) {
        let { transitionState: t, onClose: i, guildId: y } = e,
          P = (0, h.useUID)(),
          k = (0, r.useStateFromStores)([v.default], () =>
            v.default.getGuild(y)
          ),
          V = (0, I.default)(null == k ? void 0 : k.id),
          U = (0, x.default)(y),
          F = a.useRef(g.default.ackMessageId(y, j.ReadStateTypes.GUILD_EVENT)),
          b = (0, M.default)();
        return (
          a.useEffect(() => {
            U.forEach(e => _.default.getGuildEventUserCounts(y, e.id, [])),
              _.default.getGuildEventsForCurrentUser(y);
          }, [U, y]),
          a.useEffect(() => {
            let e = v.default.getGuild(y);
            if (!(null == e ? void 0 : e.hasFeature(G.GuildFeatures.HUB)))
              return;
            let { showHubEventsList: t } = c.default.getCurrentConfig({
              guildId: y,
              location: "d3755f_1",
            });
            if (!t) return;
            let n = f.default.getDefaultChannel(y);
            null != n && o.fetchDirectoryEntries(n.id);
          }, [y]),
          a.useEffect(() => {
            C.default.track(G.AnalyticEvents.OPEN_MODAL, {
              type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
              guild_id: y,
              guild_events_count: U.length,
            });
          }, []),
          a.useEffect(() => {
            u(U)
              .map(e => e.creator_id)
              .filter(S.isNotNullish)
              .uniq()
              .forEach(e => {
                E.default.requestMember(y, e);
              });
          }, [y, U]),
          a.useEffect(() => {
            null != y &&
              (0, d.ackGuildFeature)(y, j.ReadStateTypes.GUILD_EVENT);
          }, [y]),
          (0, l.jsxs)(s.ModalRoot, {
            size: s.ModalSize.MEDIUM,
            transitionState: t,
            "aria-labelledby": P,
            children: [
              (0, l.jsxs)(s.ModalHeader, {
                className: A.header,
                children: [
                  (0, l.jsx)(m.default, { className: A.icon }),
                  (0, l.jsx)(s.Heading, {
                    id: P,
                    variant: "heading-md/semibold",
                    children:
                      U.length > 0
                        ? D.default.Messages.GUILD_EVENTS_PLURAL.format({
                            number: U.length,
                          })
                        : D.default.Messages.GUILD_EVENTS,
                  }),
                  V &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: A.divider,
                          children: "|",
                        }),
                        (0, l.jsx)(s.Button, {
                          size: s.Button.Sizes.MIN,
                          onClick: () => {
                            (0, s.openModalLazy)(async () => {
                              let { default: e } = await n
                                .el("590942")
                                .then(n.bind(n, "590942"));
                              return t => (0, l.jsx)(e, { ...t, guildId: y });
                            }, b);
                          },
                          innerClassName: A.button,
                          children: D.default.Messages.SCHEDULE_EVENT,
                        }),
                      ],
                    }),
                  (0, l.jsx)(s.Clickable, {
                    onClick: i,
                    className: A.iconButton,
                    "aria-label": D.default.Messages.CLOSE,
                    children: (0, l.jsx)(p.default, { className: A.icon }),
                  }),
                ],
              }),
              (0, l.jsx)(s.ModalContent, {
                className: A.content,
                children:
                  U.length > 0
                    ? U.map(e =>
                        (0, l.jsx)(
                          T.default,
                          {
                            guildEvent: e,
                            guildId: y,
                            onActionTaken: i,
                            isNew:
                              null != F.current &&
                              N.default.compare(e.id, F.current) > 0,
                          },
                          e.id
                        )
                      )
                    : (0, l.jsx)(R.default, { guildId: y, onClose: i }),
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
      var a = n("446674"),
        i = n("77078"),
        u = n("592407"),
        r = n("27978"),
        s = n("119184"),
        d = n("305961"),
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
          h = (0, a.useStateFromStores)(
            [d.default, o.default],
            () => {
              let e = d.default.getGuild(t);
              return o.default.can(f.Permissions.MANAGE_ROLES, e);
            },
            [t]
          ),
          m = (0, a.useStateFromStores)(
            [d.default],
            () => {
              let e = d.default.getGuild(t);
              return (
                g && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
              );
            },
            [t, g]
          );
        return (0, l.jsxs)("div", {
          className: v.container,
          children: [
            (0, l.jsx)(s.default, {
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
              children: m
                ? E.default.Messages.HUB_EVENTS_HEADER_TITLE
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE,
            }),
            (0, l.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: v.subtitle,
              children: m
                ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE,
            }),
            h &&
              (0, l.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: v.roleTip,
                children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                  onClick: () => {
                    u.default.open(t, f.GuildSettingsSections.ROLES), n();
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
      var a = n("414456"),
        i = n.n(a),
        u = n("77078"),
        r = n("849467"),
        s = n("782340"),
        d = n("602552");
      function o(e) {
        let { guild: t, speakers: n, speakerCount: a, className: o } = e,
          c = n.slice(0, 5),
          f = c.map(e => {
            var n, a;
            return (0, l.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)(u.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (n = e.user) || void 0 === n
                          ? void 0
                          : n.getAvatarURL(t.id, 20),
                    size: u.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar"
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, l.jsx)(u.Text, {
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
                : null === (a = e.user) || void 0 === a
                  ? void 0
                  : a.id
            );
          }),
          E = a - c.length;
        return (0, l.jsxs)("div", {
          className: i(d.grid, o),
          children: [
            f,
            E > 0 &&
              (0, l.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, l.jsx)(r.default, { height: 12 }),
                  }),
                  (0, l.jsx)(u.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
                    children:
                      s.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
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
        a = n("884691"),
        i = n("77078"),
        u = n("322224"),
        r = n("832588"),
        s = n("745049"),
        d = n("782340"),
        o = n("505326");
      function c(e) {
        let { event: t, recurrenceId: n, guildId: c, onRsvp: f, ...E } = e,
          [v, g] = a.useState(r.ResponseOptions.SERIES),
          h = (0, r.getExistingRsvp)(t.id, null),
          m =
            (null == h ? void 0 : h.response) ===
            s.GuildScheduledEventUserResponses.INTERESTED,
          p = m
            ? s.GuildScheduledEventUserResponses.UNINTERESTED
            : s.GuildScheduledEventUserResponses.INTERESTED,
          C =
            p === s.GuildScheduledEventUserResponses.INTERESTED
              ? d.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : d.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, l.jsx)(i.ConfirmModal, {
          ...E,
          header: C,
          confirmText: d.default.Messages.OK,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: () => {
            v === r.ResponseOptions.SERIES
              ? u.default.updateRsvp(t.id, null, c, p)
              : u.default.updateRsvp(t.id, n, c, p),
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
      function f(e, t, n, a) {
        (0, r.handleRsvp)({
          eventId: e,
          recurrenceId: t,
          guildId: n,
          updateRsvp: (t, l, a, i) => u.default.updateRsvp(e, l, n, i),
          openRsvpPicker: (e, t) => {
            (0, i.openModalLazy)(() =>
              Promise.resolve(i =>
                (0, l.jsx)(c, {
                  ...i,
                  event: e,
                  recurrenceId: t,
                  guildId: n,
                  onRsvp: a,
                })
              )
            );
          },
          onRsvp: a,
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
      var a = n("446674"),
        i = n("77078"),
        u = n("272030"),
        r = n("851387"),
        s = n("233322"),
        d = n("157186"),
        o = n("817963"),
        c = n("393414"),
        f = n("716214"),
        E = n("923959"),
        v = n("305961"),
        g = n("957255"),
        h = n("599110"),
        m = n("306160"),
        p = n("322224"),
        C = n("152475"),
        S = n("397680"),
        N = n("613767"),
        _ = n("822516"),
        I = n("669195"),
        x = n("936965"),
        T = n("745049"),
        R = n("49111"),
        M = n("782340");
      function L(e) {
        let {
            guild: t,
            channel: L,
            guildScheduledEvent: G,
            isActive: j,
            recurrenceId: D,
            onActionTaken: A,
          } = e,
          { scheduled_start_time: y, id: P, entity_type: k, guild_id: V } = G,
          { canManageGuildEvent: U } = (0, o.useManageResourcePermissions)(
            null != L ? L : t
          ),
          F = U(G),
          b = (0, C.default)(G),
          O = (0, N.useIsChannelPublic)(null == L ? void 0 : L.id, G.id),
          { withinStartWindow: H } = (0, _.getEventTimeData)(y),
          w = (0, a.useStateFromStores)(
            [g.default],
            () =>
              (null == L ? !void 0 : !L.isGuildVocal()) ||
              g.default.can(R.Permissions.CONNECT, L),
            [L]
          ),
          B = (0, d.useShowMemberVerificationGate)(V),
          z = (0, S.default)(D, P);
        function K(e) {
          e.stopPropagation(), (0, x.default)(P, D, V);
        }
        async function q(e) {
          e.stopPropagation(),
            await r.default.joinGuild(V),
            v.default.addConditionalChangeListener(() => {
              let t = v.default.getGuild(V);
              return null == t || (!j && K(e), Z(e), !1);
            });
        }
        function Z(e) {
          e.stopPropagation();
          let t = E.default.getDefaultChannel(V);
          (0, i.closeAllModals)(),
            (0, c.transitionToGuild)(V, null == t ? void 0 : t.id);
        }
        return {
          onDeleteClick: F
            ? function (e) {
                e.stopPropagation(),
                  F &&
                    !j &&
                    (0, i.openModal)(e =>
                      (0, l.jsx)(i.ConfirmModal, {
                        ...e,
                        header:
                          M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                        confirmText: M.default.Messages.DELETE,
                        cancelText: M.default.Messages.CANCEL,
                        onConfirm: () => p.default.deleteGuildEvent(P, V),
                        children: (0, l.jsx)(i.Text, {
                          variant: "text-md/normal",
                          children:
                            M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                        }),
                      })
                    );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != t &&
                (0, u.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("110374")
                    .then(n.bind(n, "110374"));
                  return n =>
                    (0, l.jsx)(e, {
                      guildEventId: P,
                      recurrenceId: D,
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
                    null == A || A(), (0, s.openMemberVerificationModal)(V);
                    return;
                  }
                  (null == L ? void 0 : L.isGuildStageVoice())
                    ? ((0, f.connectAndOpen)(L), null == A || A())
                    : (null == L ? void 0 : L.isGuildVoice()) &&
                      (p.default.joinVoiceEvent(L.guild_id, L.id),
                      null == A || A());
                }
              : void 0,
          onRsvpClick: K,
          onStartClick:
            F && H && !(null == z ? void 0 : z.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("298843")
                        .then(n.bind(n, "298843"));
                      return t =>
                        (0, l.jsx)(e, { ...t, event: G, onSuccess: A });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
              if (!b || !O) {
                let e = (0, I.SHARE_EVENT_DETAILS_LINK)({
                  guildId: V,
                  guildEventId: P,
                });
                (0, m.copy)(e),
                  h.default.track(
                    R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED,
                    { guild_id: V, guild_scheduled_event_id: P }
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
                    guildScheduledEvent: G,
                    source: R.InstantInviteSources.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            F && k === T.GuildScheduledEventEntityTypes.EXTERNAL && j
              ? function (e) {
                  if ((e.stopPropagation(), !F)) return;
                  let t = () => {
                    p.default.endEvent(P, V), (0, i.closeAllModals)();
                  };
                  (0, i.openModal)(e =>
                    (0, l.jsx)(i.ConfirmModal, {
                      ...e,
                      header: M.default.Messages.END_EVENT,
                      confirmText:
                        M.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: M.default.Messages.CANCEL,
                      onConfirm: t,
                      children: (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children:
                          M.default.Messages
                            .GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    })
                  );
                }
              : void 0,
          onJoinGuildClick: q,
          onGoToGuildClick: Z,
        };
      }
    },
    922770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("305961"),
        i = n("49111");
      function u(e) {
        return (0, l.useStateFromStores)(
          [a.default],
          () => {
            var t;
            if (null == e) return !1;
            let n = a.default.getGuild(e);
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
            return a;
          },
        });
      var l = n("49111");
      function a(e, t, n, a) {
        let i = null != n ? n : t,
          u = null != i && e.can(l.Permissions.CREATE_INSTANT_INVITE, i);
        return (
          u ||
          (null != t && null != t.vanityURLCode) ||
          (null == a ? void 0 : a.invite_code) != null
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
            return s;
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
        a = n("334572"),
        i = n("488464"),
        u = n("998716");
      function r(e, t) {
        let [n] = (0, l.useStateFromStores)(
          [i.default],
          () => [
            i.default.getMutableParticipants(e, t),
            i.default.getParticipantsVersion(e),
          ],
          [e, t],
          a.isVersionEqual
        );
        return n;
      }
      function s(e, t) {
        return (0, l.useStateFromStores)(
          [i.default],
          () => i.default.getParticipantCount(e, t),
          [e, t]
        );
      }
      function d(e) {
        let [t] = (0, l.useStateFromStores)(
          [i.default],
          () => {
            let t = i.default.getMutableRequestToSpeakParticipants(e);
            return [t, i.default.getRequestToSpeakParticipantsVersion(e)];
          },
          [e],
          a.isVersionEqual
        );
        return t;
      }
      function o(e) {
        return (0, l.useStateFromStores)(
          [i.default],
          () => {
            let t = i.default.getMutableParticipants(
                e,
                u.StageChannelParticipantNamedIndex.SPEAKER
              ),
              n = t.filter(
                e => e.type === u.StageChannelParticipantTypes.VOICE
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
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("696675"),
        u = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, u.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: i,
                  fill: a,
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: i,
                  fill: a,
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
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...s
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=87bb1f59ccec96a41791.js.map
