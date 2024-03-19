(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19893"],
  {
    743087: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("161213");
      l.es(n, t);
    },
    933326: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        }),
        l("222007");
      var n = l("689988"),
        s = l("21121"),
        u = l("162771"),
        a = l("398604"),
        i = l("322224");
      let o = {},
        r = new Set(),
        d = async e => {
          let t = a.default.getGuildScheduledEventsForGuild(e);
          if (0 !== t.length) {
            if (!r.has(e))
              try {
                await i.default.getGuildEventsForCurrentUser(e), r.add(e);
              } catch (e) {}
          }
        };
      class c extends n.default {
        async getGuildEventUserCounts(e, t, l) {
          let n = l.filter(
            l =>
              null == o["".concat(e, "-").concat(t, "-").concat(l)] ||
              Date.now() - o["".concat(e, "-").concat(t, "-").concat(l)] > 18e5
          );
          if (
            !(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) ||
            0 !== n.length
          ) {
            (o["".concat(e, "-").concat(t)] = Date.now()),
              n.forEach(
                l =>
                  (o["".concat(e, "-").concat(t, "-").concat(l)] = Date.now())
              );
            try {
              await i.default.fetchGuildEventUserCounts(e, t, n);
            } catch (e) {}
          }
        }
        getGuildEventUsers(e, t, l) {
          return i.default.fetchUsersForGuildEvent(e, t, l);
        }
        getGuildEventsForCurrentUser(e) {
          return d(e);
        }
        handleConnectionOpen() {
          r.clear(), (o = {});
          let e = (0, s.isInMainTabsExperiment)(),
            t = u.default.getLastSelectedGuildId();
          if (e && null != t) {
            let e = a.default.getGuildScheduledEventsForGuild(t);
            e.forEach(e => this.getGuildEventUserCounts(t, e.id, []));
          }
        }
        handleGuildUnavailable(e) {
          let { guildId: t } = e;
          r.delete(t), delete o[t];
        }
        handleGuildDelete(e) {
          let { guild: t } = e,
            l = t.id;
          r.delete(l), delete o[l];
        }
        handleInviteResolveSuccess(e) {
          var t;
          let { invite: l } = e,
            n = l.guild_scheduled_event,
            s = null === (t = l.guild) || void 0 === t ? void 0 : t.id;
          null != n && null != s && d(s);
        }
        handleChannelSelect(e) {
          let { guildId: t } = e;
          if (null == t) return;
          let l = a.default.getGuildScheduledEventsForGuild(t);
          l.forEach(e => this.getGuildEventUserCounts(t, e.id, []));
        }
        constructor(...e) {
          super(...e),
            (this.actions = {
              POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
              GUILD_DELETE: e => this.handleGuildDelete(e),
              GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
              INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
              CHANNEL_SELECT: e => this.handleChannelSelect(e),
            });
        }
      }
      var E = new c();
    },
    276676: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        }),
        l("222007");
      var n = l("884691"),
        s = l("917351"),
        u = l.n(s),
        a = l("446674"),
        i = l("634634"),
        o = l("718517"),
        r = l("299039"),
        d = l("933326"),
        c = l("398604"),
        E = l("822516");
      function f(e, t, l) {
        let s = (0, a.useStateFromStores)([c.default], () =>
            c.default.getGuildScheduledEvent(e)
          ),
          f = (0, i.default)(l),
          [h, C] = n.useState(
            null != l && null != s
              ? (0, E.generateNextRecurrences)(
                  4,
                  (0, E.getRRule)(l),
                  new Date(s.scheduled_start_time)
                )
              : []
          );
        n.useEffect(() => {
          if (null == f || null == l || null == s || u.isEqual(f, l)) return;
          let e = (0, E.getRRule)(l);
          C(
            (0, E.generateNextRecurrences)(
              h.length,
              e,
              new Date(s.scheduled_start_time)
            )
          );
        }, [l, h.length, s, f]),
          n.useEffect(() => {
            if (null == t) return;
            let l = h.map(e =>
              r.default.fromTimestamp(
                Math.floor(e.getTime() / o.default.Millis.SECOND) *
                  o.default.Millis.SECOND
              )
            );
            d.default.getGuildEventUserCounts(t, e, l);
          }, [e, t, h]);
        let g = n.useMemo(() => {
          if (
            null == l ||
            0 === h.length ||
            (null == s ? void 0 : s.scheduled_start_time) == null
          )
            return !1;
          let e = new Date();
          e.setFullYear(e.getFullYear() + E.MAX_YEARS_AHEAD_RECURRING_EVENT);
          let t = h[h.length - 1],
            n = (0, E.getRRule)(l),
            u = n.after(t);
          return null != u && u <= e;
        }, [l, h, null == s ? void 0 : s.scheduled_start_time]);
        return {
          recurrenceStartTimes: h,
          canViewMoreRecurrences: g,
          updateRecurrenceStartTimes: () => {
            if (null == l || null == s) return;
            let e = (0, E.getRRule)(l),
              t = h[h.length - 1];
            C([...h, ...(0, E.generateNextRecurrences)(4, e, t, !0)]);
          },
        };
      }
    },
    613767: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          isChannelPublic: function () {
            return r;
          },
          useIsChannelPublic: function () {
            return d;
          },
        });
      var n = l("446674"),
        s = l("42203"),
        u = l("991170"),
        a = l("398604"),
        i = l("745049"),
        o = l("49111");
      function r(e, t) {
        return (
          u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) ||
          t === i.GuildScheduledEventEntityTypes.EXTERNAL
        );
      }
      function d(e, t) {
        return (0, n.useStateFromStores)(
          [s.default, a.default],
          () => {
            let l = s.default.getChannel(e),
              n = a.default.getGuildScheduledEvent(t);
            return r(l, null == n ? void 0 : n.entity_type);
          },
          [e, t]
        );
      }
    },
    707916: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          GuildEventShareButton: function () {
            return g;
          },
          GuildEventInterestedButton: function () {
            return v;
          },
          GuildEventLurkerInterestedButton: function () {
            return N;
          },
          default: function () {
            return I;
          },
        }),
        l("222007");
      var n = l("37983"),
        s = l("884691"),
        u = l("862337"),
        a = l("77078"),
        i = l("660279"),
        o = l("36694"),
        r = l("83900"),
        d = l("433487"),
        c = l("491920"),
        E = l("745049"),
        f = l("782340"),
        h = l("169199");
      function C(e) {
        let { text: t, disabled: l, onJoinClick: s } = e;
        return (0, n.jsx)(a.Button, {
          className: h.button,
          size: a.Button.Sizes.SMALL,
          onClick: s,
          color: a.Button.Colors.GREEN,
          disabled: l,
          children: t,
        });
      }
      function g(e) {
        let { onInviteClick: t, canInvite: l, isChannelPublic: i } = e,
          d = new u.Timeout(),
          [E, C] = s.useState(!1);
        s.useEffect(
          () => () => {
            d.stop();
          },
          []
        );
        let g = e => {
          null != t && t(e), C(!0), d.start(1e3, () => C(!1));
        };
        return null == t
          ? null
          : (0, n.jsx)(a.Tooltip, {
              text: _(l, i),
              position: "top",
              tooltipClassName: h.tooltips,
              "aria-label": f.default.Messages.SHARE_LINK,
              children: e =>
                l && i
                  ? (0, n.jsxs)(a.Button, {
                      ...e,
                      className: h.button,
                      innerClassName: h.innerButton,
                      color: a.Button.Colors.PRIMARY,
                      size: a.Button.Sizes.SMALL,
                      onClick: t,
                      children: [
                        (0, n.jsx)(c.default, { width: 16, height: 16 }),
                        f.default.Messages.SHARE,
                      ],
                    })
                  : (0, n.jsxs)(a.Button, {
                      ...e,
                      className: h.button,
                      innerClassName: h.innerButton,
                      color: a.Button.Colors.PRIMARY,
                      size: a.Button.Sizes.SMALL,
                      disabled: E,
                      look: E ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
                      onClick: g,
                      children: [
                        E
                          ? (0, n.jsx)(o.default, { width: 16, height: 16 })
                          : (0, n.jsx)(r.default, { width: 16, height: 16 }),
                        E
                          ? f.default.Messages.COPIED
                          : f.default.Messages.SHARE,
                      ],
                    }),
            });
      }
      function v(e) {
        let { isUserRsvped: t, isUserLurking: l, onRsvpClick: s, ...u } = e,
          r = t && !l;
        return (0, n.jsxs)(a.Button, {
          ...u,
          className: h.button,
          innerClassName: h.innerButton,
          size: a.Button.Sizes.SMALL,
          onClick: s,
          color: a.Button.Colors.PRIMARY,
          look: r ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
          disabled: l,
          children: [
            r
              ? (0, n.jsx)(o.default, { width: 16, height: 16 })
              : (0, n.jsx)(i.default, { width: 16, height: 16 }),
            f.default.Messages.INDICATE_RSVP,
          ],
        });
      }
      function N(e) {
        return (0, n.jsx)(a.Tooltip, {
          text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
          position: "top",
          tooltipClassName: h.tooltips,
          "aria-label": f.default.Messages.SHARE_LINK,
          children: t => (0, n.jsx)(v, { ...t, ...e }),
        });
      }
      let S = e => null == e || e,
        _ = (e, t) =>
          S(e)
            ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE
            : S(t)
              ? f.default.Messages
                  .GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION
              : f.default.Messages
                  .GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;
      function I(e) {
        let {
            isActive: t,
            isUserLurking: l,
            rsvped: s,
            canInvite: u,
            isChannelPublic: i = !0,
            entityType: o,
            onContextMenu: r,
            onJoinClick: c,
            onRsvpClick: S,
            onStartClick: _,
            onInviteClick: I,
            onEndClick: L,
            isJoined: m = !1,
          } = e,
          x = void 0 !== c;
        return (0, n.jsxs)("div", {
          className: h.container,
          children: [
            null != r
              ? (0, n.jsx)(a.Tooltip, {
                  text: f.default.Messages.MORE,
                  position: "top",
                  "aria-label": f.default.Messages.EDIT,
                  children: e =>
                    (0, n.jsx)(a.Clickable, {
                      ...e,
                      onClick: r,
                      className: h.iconButton,
                      children: (0, n.jsx)(d.default, {
                        width: 20,
                        height: 20,
                        className: h.icon,
                      }),
                    }),
                })
              : null,
            (0, n.jsx)(g, {
              onInviteClick: I,
              canInvite: u,
              isChannelPublic: i,
            }),
            t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL
              ? (0, n.jsx)(C, {
                  text: (function (e) {
                    let { isJoined: t, canJoin: l, isVoiceChannel: n } = e;
                    return l
                      ? t
                        ? f.default.Messages.GO_TO_CHANNEL
                        : n
                          ? f.default.Messages.GUILD_EVENT_JOIN
                          : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                      : f.default.Messages.CHANNEL_LOCKED_SHORT;
                  })({
                    isJoined: m,
                    canJoin: x,
                    isVoiceChannel:
                      o === E.GuildScheduledEventEntityTypes.VOICE,
                  }),
                  disabled: !x,
                  onJoinClick: c,
                })
              : null,
            l && !t && (0, n.jsx)(N, { isUserRsvped: s, isUserLurking: l }),
            !l &&
              !t &&
              null != S &&
              (0, n.jsx)(v, {
                isUserRsvped: s,
                isUserLurking: l,
                onRsvpClick: S,
              }),
            t || null == _
              ? null
              : (0, n.jsx)(a.Button, {
                  className: h.button,
                  innerClassName: h.innerButton,
                  size: a.Button.Sizes.SMALL,
                  onClick: _,
                  color: a.Button.Colors.GREEN,
                  children: f.default.Messages.START,
                }),
            t && null != L
              ? (0, n.jsx)(a.Button, {
                  className: h.button,
                  innerClassName: h.innerButton,
                  size: a.Button.Sizes.SMALL,
                  onClick: L,
                  color: a.Button.Colors.PRIMARY,
                  children: f.default.Messages.END_EVENT,
                })
              : null,
          ],
        });
      }
    },
    123030: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        });
      var n = l("37983");
      l("884691");
      var s = l("414456"),
        u = l.n(s),
        a = l("446674"),
        i = l("77078"),
        o = l("272030"),
        r = l("42203"),
        d = l("305961"),
        c = l("433487"),
        E = l("398604"),
        f = l("397680"),
        h = l("822516"),
        C = l("393745"),
        g = l("745049"),
        v = l("782340"),
        N = l("964385");
      function S(e) {
        let {
            recurrenceId: t,
            originalScheduledStartTime: s,
            guildEventId: S,
            onClick: _,
            isActive: I,
          } = e,
          L = (0, a.useStateFromStores)([E.default], () =>
            E.default.getGuildScheduledEvent(S)
          ),
          m = (0, f.default)(t, null == L ? void 0 : L.id),
          x = (0, a.useStateFromStores)([d.default], () =>
            d.default.getGuild(null == L ? void 0 : L.guild_id)
          ),
          R = (0, a.useStateFromStores)([r.default], () =>
            r.default.getChannel(null == L ? void 0 : L.channel_id)
          );
        if (null == L) return null;
        let { is_canceled: T = !1 } = null != m ? m : {},
          p =
            (null == m ? void 0 : m.scheduled_start_time) != null
              ? new Date(null == m ? void 0 : m.scheduled_start_time)
              : s,
          M = (0, h.getNextRecurrenceIdInEvent)(L),
          B = T
            ? g.GuildScheduledEventStatus.CANCELED
            : g.GuildScheduledEventStatus.SCHEDULED;
        M === t && (B = L.status);
        let G =
            (null == L ? void 0 : L.scheduled_start_time) != null
              ? (0, h.getRecurrenceStatus)(
                  m,
                  p,
                  new Date(null == L ? void 0 : L.scheduled_start_time)
                )
              : null,
          j = e => {
            e.stopPropagation(),
              null != x &&
                (0, o.openContextMenuLazy)(e, async () => {
                  let { default: e } = await l
                    .el("110374")
                    .then(l.bind(l, "110374"));
                  return l =>
                    (0, n.jsx)(e, {
                      guildEventId: L.id,
                      recurrenceId: t,
                      channel: R,
                      guild: x,
                      isRecurrenceItem: !0,
                      ...l,
                    });
                });
          };
        return (0, n.jsxs)(i.ClickableContainer, {
          className: u(N.container, {
            [N.canceled]: T,
            [N.clickable]: null != _,
            [N.active]: I,
          }),
          onClick: e => {
            e.stopPropagation(), !T && (null == _ || _(t));
          },
          onContextMenu: j,
          "aria-label": "",
          children: [
            (0, n.jsx)(C.GuildEventTimeStatus, {
              startTime: p.toISOString(),
              status: null != G ? G : B,
              eventType: L.entity_type,
              guildEventId: L.id,
              recurrenceId: t,
              className: N.timeStatus,
            }),
            T &&
              (0, n.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-danger",
                className: N.canceledStatus,
                children: v.default.Messages.EVENT_CANCELED,
              }),
            (0, n.jsx)(i.Tooltip, {
              text: v.default.Messages.MORE,
              position: "top",
              "aria-label": v.default.Messages.EDIT,
              children: e =>
                (0, n.jsx)(i.Clickable, {
                  ...e,
                  onClick: j,
                  className: N.iconButton,
                  children: (0, n.jsx)(c.default, {
                    width: 20,
                    height: 20,
                    className: N.icon,
                  }),
                }),
            }),
          ],
        });
      }
    },
    427554: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var n = l("37983");
      l("884691");
      var s = l("414456"),
        u = l.n(s),
        a = l("77078"),
        i = l("299039"),
        o = l("276676"),
        r = l("123030"),
        d = l("782340"),
        c = l("912215");
      function E(e) {
        let {
            guildId: t,
            recurrenceRule: l,
            guildEventId: s,
            onRecurrenceClick: E,
            hideScroller: f = !1,
            activeRecurrenceId: h,
          } = e,
          {
            recurrenceStartTimes: C,
            canViewMoreRecurrences: g,
            updateRecurrenceStartTimes: v,
          } = (0, o.default)(s, t, l);
        return (0, n.jsxs)("div", {
          className: c.recurrences,
          children: [
            (0, n.jsx)(a.Heading, {
              variant: "heading-sm/medium",
              className: c.heading,
              children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS,
            }),
            (0, n.jsxs)(a.Scroller, {
              className: u(c.scroller, { [c.showScroller]: !f }),
              children: [
                C.map(e => {
                  let t = i.default.fromTimestamp(e.getTime());
                  return (0, n.jsx)(
                    r.default,
                    {
                      recurrenceId: t,
                      originalScheduledStartTime: e,
                      guildEventId: s,
                      onClick: E,
                      isActive: t === h,
                    },
                    t
                  );
                }),
                g &&
                  (0, n.jsx)(a.Button, {
                    grow: !1,
                    onClick: e => {
                      e.stopPropagation(), v();
                    },
                    look: a.Button.Looks.LINK,
                    size: a.Button.Sizes.MIN,
                    color: a.Button.Colors.LINK,
                    className: c.button,
                    children:
                      d.default.Messages
                        .GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES,
                  }),
              ],
            }),
          ],
        });
      }
    },
    644189: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("37983");
      l("884691");
      var s = l("77078"),
        u = l("433487"),
        a = l("707916"),
        i = l("782340"),
        o = l("136275");
      function r(e) {
        let {
          isActive: t,
          isUserLurking: l,
          rsvped: r,
          onContextMenu: d,
          onRsvpClick: c,
          onGoToGuildClick: E,
          isDetailsView: f = !1,
          isMember: h,
          onJoinGuildClick: C,
          guildName: g,
          onInviteClick: v,
          canInvite: N,
          isChannelPublic: S,
        } = e;
        return (0, n.jsxs)("div", {
          className: o.container,
          children: [
            null != d
              ? (0, n.jsx)(s.Tooltip, {
                  text: i.default.Messages.MORE,
                  position: "top",
                  "aria-label": i.default.Messages.EDIT,
                  children: e =>
                    (0, n.jsx)(s.Clickable, {
                      ...e,
                      onClick: d,
                      className: o.iconButton,
                      children: (0, n.jsx)(u.default, {
                        width: 20,
                        height: 20,
                        className: o.icon,
                      }),
                    }),
                })
              : null,
            h &&
              (0, n.jsx)(a.GuildEventShareButton, {
                onInviteClick: v,
                canInvite: N,
                isChannelPublic: S,
              }),
            l &&
              !t &&
              (0, n.jsx)(a.GuildEventLurkerInterestedButton, {
                isUserRsvped: r,
                isUserLurking: l,
              }),
            h &&
              !l &&
              !t &&
              null != c &&
              (0, n.jsx)(a.GuildEventInterestedButton, {
                isUserRsvped: r,
                isUserLurking: l,
                onRsvpClick: c,
              }),
            h && !l && (!f || t)
              ? (0, n.jsx)(s.Button, {
                  className: o.button,
                  innerClassName: o.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: E,
                  color: s.Button.Colors.GREEN,
                  children: i.default.Messages.HUB_EVENTS_GO_TO_GUILD,
                })
              : null,
            h
              ? null
              : (0, n.jsx)(s.Button, {
                  className: o.button,
                  innerClassName: o.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: C,
                  color: s.Button.Colors.GREEN,
                  children: i.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                    guildName: g,
                  }),
                }),
          ],
        });
      }
    },
    491920: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var s = l("469563"),
        u = l("743087"),
        a = l("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: l = 32,
              color: s = "currentColor",
              ...u
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                fill: s,
              }),
            });
          },
          u.ShareIcon,
          void 0,
          { size: 32 }
        );
    },
    161213: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ShareIcon: function () {
            return a;
          },
        });
      var n = l("37983");
      l("884691");
      var s = l("669491"),
        u = l("82169");
      let a = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, u.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
              className: i,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=9bc38c2e3f6f162604c6.js.map
