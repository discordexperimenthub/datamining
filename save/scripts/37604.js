(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37604"],
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
            return g;
          },
        }),
        n("222007");
      var l = n("917351"),
        u = n.n(l),
        i = n("446674"),
        d = n("913144"),
        r = n("398604"),
        a = n("813006"),
        o = n("730647");
      let c = !1,
        s = {},
        f = {},
        E = {},
        v = e => (
          (E[e.guild_scheduled_event.id] = new a.default(
            e.guild_scheduled_event.guild
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: o.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class _ extends i.default.Store {
        isFetching() {
          return c;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return s[e];
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
      _.displayName = "EventDirectoryStore";
      var g = new _(d.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          c = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          c = !1;
          let l = u.sortBy(
              [...n],
              [
                function (e) {
                  return (0, r.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = u.map(l, v);
          s[t] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          c = !1;
        },
      });
    },
    152475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canEveryoneRoleViewEvent: function () {
            return v;
          },
          isGuildEventInvitable: function () {
            return _;
          },
          default: function () {
            return g;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("242757"),
        i = n("834052"),
        d = n("42203"),
        r = n("923959"),
        a = n("305961"),
        o = n("957255"),
        c = n("991170"),
        s = n("398604"),
        f = n("745049"),
        E = n("49111");
      function v(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [d.default];
        let { entityType: l, channelId: u } =
            "entity_type" in (t = e)
              ? { entityType: t.entity_type, channelId: t.channel_id }
              : t,
          i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
        if (i) return !0;
        let r = n.getChannel(u);
        return (
          null != r && c.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, r)
        );
      }
      function _(e) {
        let [t, n, l, c] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.default, d.default, a.default, i.default];
        if ((0, s.isGuildEventEnded)(e)) return !1;
        let { guild_id: E, channel_id: _ } = e,
          g = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL,
          h = g ? t.getDefaultChannel(e.guild_id) : n.getChannel(_),
          p = l.getGuild(E),
          T = c.getStageInstanceByChannel(_);
        return (
          !!(0, u.canViewInviteModal)(o.default, p, h, T) &&
          null != h &&
          v(e, [n])
        );
      }
      function g(e) {
        return (0, l.useStateFromStores)(
          [r.default, d.default, a.default, i.default],
          () => _(e, [r.default, d.default, a.default, i.default]),
          [e]
        );
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
            return d;
          },
        });
      var l = n("446674"),
        u = n("398604");
      function i(e, t) {
        let n = (0, l.useStateFromStoresArray)([u.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return r(n, e);
      }
      function d(e, t) {
        var n, l;
        let i =
          null !==
            (l =
              null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n
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
            return o;
          },
          getEventSchedule: function () {
            return c;
          },
        });
      var l = n("627445"),
        u = n.n(l),
        i = n("446674"),
        d = n("398604"),
        r = n("397680"),
        a = n("822516");
      function o(e, t, n) {
        var l;
        let o =
          null !==
            (l = (0, i.useStateFromStores)([d.default], () =>
              d.default.getGuildScheduledEvent(e)
            )) && void 0 !== l
            ? l
            : n;
        u(null != o, "Event must be defined"),
          (t = null != t ? t : (0, a.getNextRecurrenceIdInEvent)(o));
        let c = (0, r.default)(t, e);
        return s(o, c, t);
      }
      function c(e, t) {
        let n = (0, r.getEventException)(t, e.id);
        return s(e, n, t);
      }
      function s(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let l = (0, a.getBaseScheduleForRecurrence)(n, e),
          { startDate: u, endDate: i } = (0,
          a.getScheduleForRecurrenceWithException)(l, t);
        return {
          startTime: u.toDate(),
          endTime: null == i ? void 0 : i.toDate(),
        };
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
        i = n("305961");
      function d(e, t) {
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
    369404: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        d = n("272030"),
        r = n("851387"),
        a = n("233322"),
        o = n("157186"),
        c = n("817963"),
        s = n("393414"),
        f = n("716214"),
        E = n("923959"),
        v = n("305961"),
        _ = n("957255"),
        g = n("599110"),
        h = n("306160"),
        p = n("322224"),
        T = n("152475"),
        I = n("397680"),
        C = n("613767"),
        N = n("822516"),
        S = n("669195"),
        y = n("936965"),
        m = n("745049"),
        D = n("49111"),
        M = n("782340");
      function R(e) {
        let {
            guild: t,
            channel: R,
            guildScheduledEvent: G,
            isActive: L,
            recurrenceId: x,
            onActionTaken: V,
          } = e,
          { scheduled_start_time: A, id: F, entity_type: O, guild_id: P } = G,
          { canManageGuildEvent: k } = (0, c.useManageResourcePermissions)(
            null != R ? R : t
          ),
          w = k(G),
          j = (0, T.default)(G),
          U = (0, C.useIsChannelPublic)(null == R ? void 0 : R.id, G.id),
          { withinStartWindow: b } = (0, N.getEventTimeData)(A),
          B = (0, u.useStateFromStores)(
            [_.default],
            () =>
              (null == R ? !void 0 : !R.isGuildVocal()) ||
              _.default.can(D.Permissions.CONNECT, R),
            [R]
          ),
          H = (0, o.useShowMemberVerificationGate)(P),
          X = (0, I.default)(x, F);
        function Y(e) {
          e.stopPropagation(), (0, y.default)(F, x, P);
        }
        async function z(e) {
          e.stopPropagation(),
            await r.default.joinGuild(P),
            v.default.addConditionalChangeListener(() => {
              let t = v.default.getGuild(P);
              return null == t || (!L && Y(e), K(e), !1);
            });
        }
        function K(e) {
          e.stopPropagation();
          let t = E.default.getDefaultChannel(P);
          (0, i.closeAllModals)(),
            (0, s.transitionToGuild)(P, null == t ? void 0 : t.id);
        }
        return {
          onDeleteClick: w
            ? function (e) {
                e.stopPropagation(),
                  w &&
                    !L &&
                    (0, i.openModal)(e =>
                      (0, l.jsx)(i.ConfirmModal, {
                        ...e,
                        header:
                          M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                        confirmText: M.default.Messages.DELETE,
                        cancelText: M.default.Messages.CANCEL,
                        onConfirm: () => p.default.deleteGuildEvent(F, P),
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
                (0, d.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("110374")
                    .then(n.bind(n, "110374"));
                  return n =>
                    (0, l.jsx)(e, {
                      guildEventId: F,
                      recurrenceId: x,
                      channel: R,
                      guild: t,
                      ...n,
                    });
                });
          },
          onJoinClick:
            B || H
              ? function (e) {
                  if ((e.stopPropagation(), H)) {
                    null == V || V(), (0, a.openMemberVerificationModal)(P);
                    return;
                  }
                  (null == R ? void 0 : R.isGuildStageVoice())
                    ? ((0, f.connectAndOpen)(R), null == V || V())
                    : (null == R ? void 0 : R.isGuildVoice()) &&
                      (p.default.joinVoiceEvent(R.guild_id, R.id),
                      null == V || V());
                }
              : void 0,
          onRsvpClick: Y,
          onStartClick:
            w && b && !(null == X ? void 0 : X.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("298843")
                        .then(n.bind(n, "298843"));
                      return t =>
                        (0, l.jsx)(e, { ...t, event: G, onSuccess: V });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
              if (!j || !U) {
                let e = (0, S.SHARE_EVENT_DETAILS_LINK)({
                  guildId: P,
                  guildEventId: F,
                });
                (0, h.copy)(e),
                  g.default.track(
                    D.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED,
                    { guild_id: P, guild_scheduled_event_id: F }
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
                    channel: R,
                    guildScheduledEvent: G,
                    source: D.InstantInviteSources.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            w && O === m.GuildScheduledEventEntityTypes.EXTERNAL && L
              ? function (e) {
                  if ((e.stopPropagation(), !w)) return;
                  let t = () => {
                    p.default.endEvent(F, P), (0, i.closeAllModals)();
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
          onJoinGuildClick: z,
          onGoToGuildClick: K,
        };
      }
    },
    922770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("446674"),
        u = n("305961"),
        i = n("49111");
      function d(e) {
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
          d = null != i && e.can(l.Permissions.CREATE_INSTANT_INVITE, i);
        return (
          d ||
          (null != t && null != t.vanityURLCode) ||
          (null == u ? void 0 : u.invite_code) != null
        );
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
      var l = n("37983");
      n("884691");
      var u = n("414456"),
        i = n.n(u),
        d = n("782340"),
        r = n("662190"),
        a = n("284434"),
        o = n("315956");
      function c(e) {
        let { className: t, children: n } = e;
        return (0, l.jsxs)("div", {
          className: i(r.container, t),
          children: [
            (0, l.jsx)("img", {
              alt: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: i(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, l.jsx)("img", {
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
//# sourceMappingURL=d2ad5b2825a2d7afc674.js.map
