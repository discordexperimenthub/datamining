(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99066"],
  {
    696675: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("886181");
      n.es(l, t);
    },
    651072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-09_recurring_events",
        label: "Allows guild to create recurring events",
        defaultConfig: {
          showRecurringEventsDesktop: !1,
          showRecurringEventsMobile: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Recurring Events are enabled (Desktop Only)",
            config: {
              showRecurringEventsDesktop: !0,
              showRecurringEventsMobile: !1,
            },
          },
          {
            id: 2,
            label: "Recurring Events are enabled on Mobile + Desktop",
            config: {
              showRecurringEventsDesktop: !0,
              showRecurringEventsMobile: !0,
            },
          },
        ],
      });
      var i = a;
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
          p = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(g),
          m = l.getGuild(E),
          C = o.getStageInstanceByChannel(g);
        return (
          !!(0, a.canViewInviteModal)(d.default, m, p, C) &&
          null != p &&
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
          p = null != v ? g : o,
          m = (null != v ? h : c) - p.length;
        return {
          channelId: t,
          guild: null != E ? E : n,
          stage: null != v ? v : d,
          speakers: p,
          audienceCount: m,
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
            return x;
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
        p = n("598639"),
        m = n("189443"),
        C = n("841363"),
        S = n("822516"),
        _ = n("93550"),
        N = n("617347"),
        I = n("369404"),
        T = n("49111");
      function x(e) {
        var t;
        let {
            guildEvent: n,
            guildId: x,
            truncate: R,
            onActionTaken: M,
            className: L,
            isNew: G,
          } = e,
          {
            id: D,
            guild_id: j,
            channel_id: k,
            creator_id: A,
            name: y,
            description: P,
            entity_type: V,
            image: U,
            recurrence_rule: b,
          } = n,
          F = (0, S.getNextRecurrenceIdInEvent)(n),
          O = (0, a.useStateFromStores)(
            [v.default],
            () => v.default.isInterestedInEventRecurrence(D, F),
            [D, F]
          ),
          w = (0, a.useStateFromStores)(
            [u.default],
            () => u.default.isLurking(j),
            [j]
          ),
          H = (0, a.useStateFromStores)(
            [s.default],
            () => s.default.getStageInstanceByChannel(k),
            [k]
          ),
          B = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getChannel(k),
            [k]
          ),
          z = (0, a.useStateFromStores)(
            [f.default],
            () => f.default.getUser(A),
            [A]
          ),
          { speakers: K } = (0, h.default)({
            id: k,
            data: {
              guild: null,
              instance: H,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: j, instance: H },
          }),
          q = (0, a.useStateFromStores)([c.default], () =>
            c.default.getChannelId()
          ),
          Y = (0, v.isGuildScheduledEventActive)(n),
          Z = q === k && null != q && Y,
          J = K.filter(e => e.type === r.StageChannelParticipantTypes.VOICE),
          X = J.length,
          W = (0, a.useStateFromStores)(
            [o.default],
            () => o.default.can(T.Permissions.CONNECT, B),
            [B]
          ),
          Q = (0, g.default)(n),
          { isMember: $, guild: ee } = (0, p.default)(j, D),
          et = (0, I.default)({
            guild: ee,
            channel: B,
            guildScheduledEvent: n,
            isActive: Y,
            recurrenceId: F,
            onActionTaken: M,
          }),
          en = (0, i.default)(x),
          el = w
            ? void 0
            : e =>
                (0, E.openGuildEventDetails)({
                  eventId: D,
                  parentGuildId: x,
                  recurrenceId: e,
                });
        return (0, l.jsx)(N.default, {
          guild: ee,
          channel: B,
          creator: z,
          name: y,
          entityType: V,
          description: null != P ? P : void 0,
          location:
            null !== (t = (0, C.getLocationFromEvent)(n)) && void 0 !== t
              ? t
              : void 0,
          imageSource: null != U ? (0, _.default)(n) : void 0,
          imageLocation: N.GuildEventBodyImageLocation.THUMBNAIL,
          isActive: Y,
          isUserLurking: w,
          isJoined: Z,
          isMember: $,
          isHub: en,
          speakers: J,
          canConnect: W,
          speakerCount: X,
          rsvped: O,
          canInvite: Q,
          ...et,
          className: L,
          onClick: el,
          truncate: R,
          isNew: G,
          guildEventId: D,
          recurrenceRule: (0, m.recurrenceRuleFromServer)(b),
          recurrenceId: F,
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
            return V;
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
        c = n("812204"),
        f = n("685665"),
        E = n("656038"),
        v = n("419830"),
        g = n("817963"),
        h = n("957255"),
        p = n("476263"),
        m = n("718550"),
        C = n("398604"),
        S = n("651072"),
        _ = n("1339"),
        N = n("613767"),
        I = n("822516"),
        T = n("707916"),
        x = n("255050"),
        R = n("400271"),
        M = n("427554"),
        L = n("644189"),
        G = n("29913"),
        D = n("745049"),
        j = n("49111"),
        k = n("782340"),
        A = n("402155");
      function y(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, g.useManageResourcePermissions)(t),
          a = (0, d.useStateFromStores)(
            [h.default],
            () => !t.isGuildVocal() || h.default.can(j.Permissions.CONNECT, t),
            [t]
          ),
          r = u.useMemo(() => (0, E.default)(t), [t]),
          c = (0, v.getChannelIconComponent)(t);
        return (0, i.jsx)(o.Tooltip, {
          text: k.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !a && null != n,
          children: e =>
            (0, i.jsxs)(o.Clickable, {
              ...e,
              className: s(A.inline, A.channelContainer, {
                [A.channelContainerEnabled]: a && null != n,
                [A.channelContainerDisabled]: !a && null != n,
              }),
              onClick: n,
              children: [
                (0, i.jsx)(o.Tooltip, {
                  text: k.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && a && null != n,
                  children: e =>
                    null != c
                      ? (0, i.jsx)(c, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: A.icon,
                        })
                      : null,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: A.channelLocation,
                  children: t.name,
                }),
              ],
            }),
        });
      }
      function P(e) {
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
                className: A.inline,
                children: [
                  (0, i.jsx)(p.default, {
                    className: A.guildIcon,
                    size: p.default.Sizes.MINI,
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
              className: A.inline,
              onClick: a,
              children: [
                (0, i.jsx)(m.default, {
                  height: 20,
                  width: 20,
                  className: s(A.channelContainer, A.icon),
                }),
                (0, i.jsx)(o.Text, {
                  className: r ? A.externalLocation : A.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, _.guildEventDetailsParser)(u, !0),
                }),
              ],
            });
      }
      function V(e) {
        var t;
        let {
            className: n,
            guild: l,
            channel: a,
            creator: u,
            name: r,
            entityType: E,
            description: v,
            imageLocation: g = 0,
            imageSource: h,
            isActive: p,
            isUserLurking: m,
            isJoined: _ = !1,
            isMember: k = !1,
            isHub: y = !1,
            speakers: V,
            speakerCount: U,
            rsvped: b,
            canInvite: F,
            location: O,
            truncate: w,
            onContextMenu: H,
            onJoinClick: B,
            onJoinGuildClick: z,
            onGoToGuildClick: K,
            onRsvpClick: q,
            onStartClick: Y,
            onInviteClick: Z,
            onEndClick: J,
            onClick: X,
            isNew: W,
            guildEventId: Q,
            eventPreview: $,
            recurrenceRule: ee,
            recurrenceId: et,
          } = e,
          en = (0, N.isChannelPublic)(a, E),
          el = E === D.GuildScheduledEventEntityTypes.EXTERNAL,
          { analyticsLocations: ea } = (0, f.default)(
            c.default.GUILD_EVENT_CARD
          ),
          { showRecurringEventsDesktop: ei } = S.default.useExperiment(
            {
              guildId:
                null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                  ? t
                  : j.EMPTY_STRING_SNOWFLAKE_ID,
              location: ea[0],
            },
            { autoTrackExposure: !1 }
          ),
          eu = (0, d.useStateFromStores)([C.default], () =>
            C.default.getGuildScheduledEvent(Q)
          ),
          er = [];
        if (null != ee && null != eu) {
          let e = (0, I.getRRule)(ee);
          er = (0, I.generateNextRecurrences)(
            4,
            e,
            new Date(eu.scheduled_start_time)
          );
        }
        let es = ei && er.length > 0;
        return (0, i.jsxs)(o.ClickableContainer, {
          "aria-label": r,
          onClick: () => (null == X ? void 0 : X(et)),
          onContextMenu: H,
          className: s(A.card, { [A.joined]: _, [A.lurking]: m }, n),
          children: [
            (0, i.jsxs)("div", {
              className: s(A.padding, { [A.isRecurring]: es }),
              children: [
                0 === g && (0, i.jsx)(x.default, { source: h }),
                (0, i.jsx)(R.default, {
                  creator: u,
                  name: r,
                  description: v,
                  imageSource: 1 === g ? h : null,
                  truncate: w,
                  guildId: null == l ? void 0 : l.id,
                  isHub: y,
                  isNew: W,
                  guildEventId: Q,
                  eventPreview: $,
                  recurrenceId: et,
                }),
                p &&
                  null != l &&
                  null != V &&
                  U > 0 &&
                  (0, i.jsx)(G.default, {
                    guild: l,
                    speakers: V,
                    speakerCount: U,
                    className: A.spacing,
                  }),
                (0, i.jsx)("hr", { className: A.divider }),
                (0, i.jsxs)("div", {
                  className: s(A.inline, A.footer),
                  children: [
                    (0, i.jsx)(P, {
                      guild: l,
                      channel: a,
                      onJoinClick: B,
                      handleLocationClick: el
                        ? e => e.stopPropagation()
                        : void 0,
                      location: O,
                      isExternal: el,
                      isHub: y,
                    }),
                    y
                      ? (0, i.jsx)(L.default, {
                          isActive: p,
                          isUserLurking: m,
                          isMember: k,
                          rsvped: b,
                          onRsvpClick: q,
                          onJoinGuildClick: z,
                          onGoToGuildClick: K,
                          guildName: null == l ? void 0 : l.name,
                          canInvite: F,
                          isChannelPublic: en,
                          onInviteClick: Z,
                        })
                      : (0, i.jsx)(T.default, {
                          entityType: E,
                          isJoined: _,
                          isActive: p,
                          isUserLurking: m,
                          rsvped: b,
                          canInvite: F,
                          isChannelPublic: en,
                          onContextMenu: H,
                          onJoinClick: B,
                          onRsvpClick: q,
                          onStartClick: Y,
                          onInviteClick: Z,
                          onEndClick: J,
                        }),
                  ],
                }),
                es && (0, i.jsx)("hr", { className: A.divider }),
              ],
            }),
            es &&
              (0, i.jsx)(M.default, {
                guildId: null == l ? void 0 : l.id,
                recurrenceRule: ee,
                guildEventId: Q,
                onRecurrenceClick: X,
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
            return A;
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
        p = n("943232"),
        m = n("945330"),
        C = n("599110"),
        S = n("449008"),
        _ = n("299039"),
        N = n("933326"),
        I = n("334683"),
        T = n("534222"),
        x = n("473031"),
        R = n("266763"),
        M = n("842672"),
        L = n("745049"),
        G = n("49111"),
        D = n("133335"),
        j = n("782340"),
        k = n("290487");
      function A(e) {
        let { transitionState: t, onClose: i, guildId: A } = e,
          y = (0, h.useUID)(),
          P = (0, r.useStateFromStores)([v.default], () =>
            v.default.getGuild(A)
          ),
          V = (0, I.default)(null == P ? void 0 : P.id),
          U = (0, T.default)(A),
          b = a.useRef(g.default.ackMessageId(A, D.ReadStateTypes.GUILD_EVENT)),
          F = (0, M.default)();
        return (
          a.useEffect(() => {
            U.forEach(e => N.default.getGuildEventUserCounts(A, e.id, [])),
              N.default.getGuildEventsForCurrentUser(A);
          }, [U, A]),
          a.useEffect(() => {
            let e = v.default.getGuild(A);
            if (!(null == e ? void 0 : e.hasFeature(G.GuildFeatures.HUB)))
              return;
            let { showHubEventsList: t } = c.default.getCurrentConfig({
              guildId: A,
              location: "d3755f_1",
            });
            if (!t) return;
            let n = f.default.getDefaultChannel(A);
            null != n && o.fetchDirectoryEntries(n.id);
          }, [A]),
          a.useEffect(() => {
            C.default.track(G.AnalyticEvents.OPEN_MODAL, {
              type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
              guild_id: A,
              guild_events_count: U.length,
            });
          }, []),
          a.useEffect(() => {
            u(U)
              .map(e => e.creator_id)
              .filter(S.isNotNullish)
              .uniq()
              .forEach(e => {
                E.default.requestMember(A, e);
              });
          }, [A, U]),
          a.useEffect(() => {
            null != A &&
              (0, d.ackGuildFeature)(A, D.ReadStateTypes.GUILD_EVENT);
          }, [A]),
          (0, l.jsxs)(s.ModalRoot, {
            size: s.ModalSize.MEDIUM,
            transitionState: t,
            "aria-labelledby": y,
            children: [
              (0, l.jsxs)(s.ModalHeader, {
                className: k.header,
                children: [
                  (0, l.jsx)(p.default, { className: k.icon }),
                  (0, l.jsx)(s.Heading, {
                    id: y,
                    variant: "heading-md/semibold",
                    children:
                      U.length > 0
                        ? j.default.Messages.GUILD_EVENTS_PLURAL.format({
                            number: U.length,
                          })
                        : j.default.Messages.GUILD_EVENTS,
                  }),
                  V &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: k.divider,
                          children: "|",
                        }),
                        (0, l.jsx)(s.Button, {
                          size: s.Button.Sizes.MIN,
                          onClick: () => {
                            (0, s.openModalLazy)(async () => {
                              let { default: e } = await n
                                .el("590942")
                                .then(n.bind(n, "590942"));
                              return t => (0, l.jsx)(e, { ...t, guildId: A });
                            }, F);
                          },
                          innerClassName: k.button,
                          children: j.default.Messages.SCHEDULE_EVENT,
                        }),
                      ],
                    }),
                  (0, l.jsx)(s.Clickable, {
                    onClick: i,
                    className: k.iconButton,
                    "aria-label": j.default.Messages.CLOSE,
                    children: (0, l.jsx)(m.default, { className: k.icon }),
                  }),
                ],
              }),
              (0, l.jsx)(s.ModalContent, {
                className: k.content,
                children:
                  U.length > 0
                    ? U.map(e =>
                        (0, l.jsx)(
                          x.default,
                          {
                            guildEvent: e,
                            guildId: A,
                            onActionTaken: i,
                            isNew:
                              null != b.current &&
                              _.default.compare(e.id, b.current) > 0,
                          },
                          e.id
                        )
                      )
                    : (0, l.jsx)(R.default, { guildId: A, onClose: i }),
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
          p = (0, a.useStateFromStores)(
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
              children: p
                ? E.default.Messages.HUB_EVENTS_HEADER_TITLE
                : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE,
            }),
            (0, l.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: v.subtitle,
              children: p
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
          p =
            (null == h ? void 0 : h.response) ===
            s.GuildScheduledEventUserResponses.INTERESTED,
          m = p
            ? s.GuildScheduledEventUserResponses.UNINTERESTED
            : s.GuildScheduledEventUserResponses.INTERESTED,
          C =
            m === s.GuildScheduledEventUserResponses.INTERESTED
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
              ? u.default.updateRsvp(t.id, null, c, m)
              : u.default.updateRsvp(t.id, n, c, m),
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
        p = n("306160"),
        m = n("322224"),
        C = n("152475"),
        S = n("397680"),
        _ = n("613767"),
        N = n("822516"),
        I = n("669195"),
        T = n("936965"),
        x = n("745049"),
        R = n("49111"),
        M = n("782340");
      function L(e) {
        let {
            guild: t,
            channel: L,
            guildScheduledEvent: G,
            isActive: D,
            recurrenceId: j,
            onActionTaken: k,
          } = e,
          { scheduled_start_time: A, id: y, entity_type: P, guild_id: V } = G,
          { canManageGuildEvent: U } = (0, o.useManageResourcePermissions)(
            null != L ? L : t
          ),
          b = U(G),
          F = (0, C.default)(G),
          O = (0, _.useIsChannelPublic)(null == L ? void 0 : L.id, G.id),
          { withinStartWindow: w } = (0, N.getEventTimeData)(A),
          H = (0, a.useStateFromStores)(
            [g.default],
            () =>
              (null == L ? !void 0 : !L.isGuildVocal()) ||
              g.default.can(R.Permissions.CONNECT, L),
            [L]
          ),
          B = (0, d.useShowMemberVerificationGate)(V),
          z = (0, S.default)(j, y);
        function K(e) {
          e.stopPropagation(), (0, T.default)(y, j, V);
        }
        async function q(e) {
          e.stopPropagation(),
            await r.default.joinGuild(V),
            v.default.addConditionalChangeListener(() => {
              let t = v.default.getGuild(V);
              return null == t || (!D && K(e), Y(e), !1);
            });
        }
        function Y(e) {
          e.stopPropagation();
          let t = E.default.getDefaultChannel(V);
          (0, i.closeAllModals)(),
            (0, c.transitionToGuild)(V, null == t ? void 0 : t.id);
        }
        return {
          onDeleteClick: b
            ? function (e) {
                e.stopPropagation(),
                  b &&
                    !D &&
                    (0, i.openModal)(e =>
                      (0, l.jsx)(i.ConfirmModal, {
                        ...e,
                        header:
                          M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                        confirmText: M.default.Messages.DELETE,
                        cancelText: M.default.Messages.CANCEL,
                        onConfirm: () => m.default.deleteGuildEvent(y, V),
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
                      guildEventId: y,
                      recurrenceId: j,
                      channel: L,
                      guild: t,
                      ...n,
                    });
                });
          },
          onJoinClick:
            H || B
              ? function (e) {
                  if ((e.stopPropagation(), B)) {
                    null == k || k(), (0, s.openMemberVerificationModal)(V);
                    return;
                  }
                  (null == L ? void 0 : L.isGuildStageVoice())
                    ? ((0, f.connectAndOpen)(L), null == k || k())
                    : (null == L ? void 0 : L.isGuildVoice()) &&
                      (m.default.joinVoiceEvent(L.guild_id, L.id),
                      null == k || k());
                }
              : void 0,
          onRsvpClick: K,
          onStartClick:
            b && w && !(null == z ? void 0 : z.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("298843")
                        .then(n.bind(n, "298843"));
                      return t =>
                        (0, l.jsx)(e, { ...t, event: G, onSuccess: k });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
              if (!F || !O) {
                let e = (0, I.SHARE_EVENT_DETAILS_LINK)({
                  guildId: V,
                  guildEventId: y,
                });
                (0, p.copy)(e),
                  h.default.track(
                    R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED,
                    { guild_id: V, guild_scheduled_event_id: y }
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
            b && P === x.GuildScheduledEventEntityTypes.EXTERNAL && D
              ? function (e) {
                  if ((e.stopPropagation(), !b)) return;
                  let t = () => {
                    m.default.endEvent(y, V), (0, i.closeAllModals)();
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
          onGoToGuildClick: Y,
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
//# sourceMappingURL=dea6470b5f5d6c336550.js.map
