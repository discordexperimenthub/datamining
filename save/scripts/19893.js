(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19893"],
  {
    743087: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("161213");
      n.es(l, t);
    },
    933326: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var l = n("689988"),
        s = n("21121"),
        u = n("162771"),
        a = n("398604"),
        i = n("322224");
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
      class c extends l.default {
        async getGuildEventUserCounts(e, t, n) {
          let l = n.filter(
            n =>
              null == o["".concat(e, "-").concat(t, "-").concat(n)] ||
              Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5
          );
          if (
            !(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) ||
            0 !== l.length
          ) {
            (o["".concat(e, "-").concat(t)] = Date.now()),
              l.forEach(
                n =>
                  (o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now())
              );
            try {
              await i.default.fetchGuildEventUserCounts(e, t, l);
            } catch (e) {}
          }
        }
        getGuildEventUsers(e, t, n) {
          return i.default.fetchUsersForGuildEvent(e, t, n);
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
            n = t.id;
          r.delete(n), delete o[n];
        }
        handleInviteResolveSuccess(e) {
          var t;
          let { invite: n } = e,
            l = n.guild_scheduled_event,
            s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
          null != l && null != s && d(s);
        }
        handleChannelSelect(e) {
          let { guildId: t } = e;
          if (null == t) return;
          let n = a.default.getGuildScheduledEventsForGuild(t);
          n.forEach(e => this.getGuildEventUserCounts(t, e.id, []));
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
    276676: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("884691"),
        s = n("917351"),
        u = n.n(s),
        a = n("446674"),
        i = n("634634"),
        o = n("718517"),
        r = n("299039"),
        d = n("933326"),
        c = n("398604"),
        E = n("822516");
      function f(e, t, n) {
        let s = (0, a.useStateFromStores)([c.default], () =>
            c.default.getGuildScheduledEvent(e)
          ),
          f = (0, i.default)(n),
          [h, C] = l.useState(
            null != n && null != s
              ? (0, E.generateNextRecurrences)(
                  4,
                  (0, E.getRRule)(n),
                  new Date(s.scheduled_start_time)
                )
              : []
          );
        l.useEffect(() => {
          if (null == f || null == n || null == s || u.isEqual(f, n)) return;
          let e = (0, E.getRRule)(n);
          C(
            (0, E.generateNextRecurrences)(
              h.length,
              e,
              new Date(s.scheduled_start_time)
            )
          );
        }, [n, h.length, s, f]),
          l.useEffect(() => {
            if (null == t) return;
            let n = h.map(e =>
              r.default.fromTimestamp(
                Math.floor(e.getTime() / o.default.Millis.SECOND) *
                  o.default.Millis.SECOND
              )
            );
            d.default.getGuildEventUserCounts(t, e, n);
          }, [e, t, h]);
        let g = l.useMemo(() => {
          if (
            null == n ||
            0 === h.length ||
            (null == s ? void 0 : s.scheduled_start_time) == null
          )
            return !1;
          let e = new Date();
          e.setFullYear(e.getFullYear() + E.MAX_YEARS_AHEAD_RECURRING_EVENT);
          let t = h[h.length - 1],
            l = (0, E.getRRule)(n),
            u = l.after(t);
          return null != u && u <= e;
        }, [n, h, null == s ? void 0 : s.scheduled_start_time]);
        return {
          recurrenceStartTimes: h,
          canViewMoreRecurrences: g,
          updateRecurrenceStartTimes: () => {
            if (null == n || null == s) return;
            let e = (0, E.getRRule)(n),
              t = h[h.length - 1];
            C([...h, ...(0, E.generateNextRecurrences)(4, e, t, !0)]);
          },
        };
      }
    },
    613767: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isChannelPublic: function () {
            return r;
          },
          useIsChannelPublic: function () {
            return d;
          },
        });
      var l = n("446674"),
        s = n("42203"),
        u = n("991170"),
        a = n("398604"),
        i = n("745049"),
        o = n("49111");
      function r(e, t) {
        return (
          u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) ||
          t === i.GuildScheduledEventEntityTypes.EXTERNAL
        );
      }
      function d(e, t) {
        return (0, l.useStateFromStores)(
          [s.default, a.default],
          () => {
            let n = s.default.getChannel(e),
              l = a.default.getGuildScheduledEvent(t);
            return r(n, null == l ? void 0 : l.entity_type);
          },
          [e, t]
        );
      }
    },
    707916: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventShareButton: function () {
            return g;
          },
          GuildEventInterestedButton: function () {
            return N;
          },
          GuildEventLurkerInterestedButton: function () {
            return v;
          },
          default: function () {
            return L;
          },
        }),
        n("222007");
      var l = n("37983"),
        s = n("884691"),
        u = n("862337"),
        a = n("77078"),
        i = n("660279"),
        o = n("36694"),
        r = n("83900"),
        d = n("433487"),
        c = n("491920"),
        E = n("745049"),
        f = n("782340"),
        h = n("169199");
      function C(e) {
        let { text: t, disabled: n, onJoinClick: s } = e;
        return (0, l.jsx)(a.Button, {
          className: h.button,
          size: a.Button.Sizes.SMALL,
          onClick: s,
          color: a.Button.Colors.GREEN,
          disabled: n,
          children: t,
        });
      }
      function g(e) {
        let { onInviteClick: t, canInvite: n, isChannelPublic: i } = e,
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
          : (0, l.jsx)(a.Tooltip, {
              text: I(n, i),
              position: "top",
              tooltipClassName: h.tooltips,
              "aria-label": f.default.Messages.SHARE_LINK,
              children: e =>
                n && i
                  ? (0, l.jsxs)(a.Button, {
                      ...e,
                      className: h.button,
                      innerClassName: h.innerButton,
                      color: a.Button.Colors.PRIMARY,
                      size: a.Button.Sizes.SMALL,
                      onClick: t,
                      children: [
                        (0, l.jsx)(c.default, { width: 16, height: 16 }),
                        f.default.Messages.SHARE,
                      ],
                    })
                  : (0, l.jsxs)(a.Button, {
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
                          ? (0, l.jsx)(o.default, { width: 16, height: 16 })
                          : (0, l.jsx)(r.default, { width: 16, height: 16 }),
                        E
                          ? f.default.Messages.COPIED
                          : f.default.Messages.SHARE,
                      ],
                    }),
            });
      }
      function N(e) {
        let { isUserRsvped: t, isUserLurking: n, onRsvpClick: s, ...u } = e,
          r = t && !n;
        return (0, l.jsxs)(a.Button, {
          ...u,
          className: h.button,
          innerClassName: h.innerButton,
          size: a.Button.Sizes.SMALL,
          onClick: s,
          color: a.Button.Colors.PRIMARY,
          look: r ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
          disabled: n,
          children: [
            r
              ? (0, l.jsx)(o.default, { width: 16, height: 16 })
              : (0, l.jsx)(i.default, { width: 16, height: 16 }),
            f.default.Messages.INDICATE_RSVP,
          ],
        });
      }
      function v(e) {
        return (0, l.jsx)(a.Tooltip, {
          text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
          position: "top",
          tooltipClassName: h.tooltips,
          "aria-label": f.default.Messages.SHARE_LINK,
          children: t => (0, l.jsx)(N, { ...t, ...e }),
        });
      }
      let S = e => null == e || e,
        I = (e, t) =>
          S(e)
            ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE
            : S(t)
              ? f.default.Messages
                  .GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION
              : f.default.Messages
                  .GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;
      function L(e) {
        let {
            isActive: t,
            isUserLurking: n,
            rsvped: s,
            canInvite: u,
            isChannelPublic: i = !0,
            entityType: o,
            onContextMenu: r,
            onJoinClick: c,
            onRsvpClick: S,
            onStartClick: I,
            onInviteClick: L,
            onEndClick: _,
            isJoined: m = !1,
          } = e,
          x = void 0 !== c;
        return (0, l.jsxs)("div", {
          className: h.container,
          children: [
            null != r
              ? (0, l.jsx)(a.Tooltip, {
                  text: f.default.Messages.MORE,
                  position: "top",
                  "aria-label": f.default.Messages.EDIT,
                  children: e =>
                    (0, l.jsx)(a.Clickable, {
                      ...e,
                      onClick: r,
                      className: h.iconButton,
                      children: (0, l.jsx)(d.default, {
                        width: 20,
                        height: 20,
                        className: h.icon,
                      }),
                    }),
                })
              : null,
            (0, l.jsx)(g, {
              onInviteClick: L,
              canInvite: u,
              isChannelPublic: i,
            }),
            t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL
              ? (0, l.jsx)(C, {
                  text: (function (e) {
                    let { isJoined: t, canJoin: n, isVoiceChannel: l } = e;
                    return n
                      ? t
                        ? f.default.Messages.GO_TO_CHANNEL
                        : l
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
            n && !t && (0, l.jsx)(v, { isUserRsvped: s, isUserLurking: n }),
            !n &&
              !t &&
              null != S &&
              (0, l.jsx)(N, {
                isUserRsvped: s,
                isUserLurking: n,
                onRsvpClick: S,
              }),
            t || null == I
              ? null
              : (0, l.jsx)(a.Button, {
                  className: h.button,
                  innerClassName: h.innerButton,
                  size: a.Button.Sizes.SMALL,
                  onClick: I,
                  color: a.Button.Colors.GREEN,
                  children: f.default.Messages.START,
                }),
            t && null != _
              ? (0, l.jsx)(a.Button, {
                  className: h.button,
                  innerClassName: h.innerButton,
                  size: a.Button.Sizes.SMALL,
                  onClick: _,
                  color: a.Button.Colors.PRIMARY,
                  children: f.default.Messages.END_EVENT,
                })
              : null,
          ],
        });
      }
    },
    123030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("414456"),
        u = n.n(s),
        a = n("446674"),
        i = n("77078"),
        o = n("272030"),
        r = n("42203"),
        d = n("305961"),
        c = n("433487"),
        E = n("398604"),
        f = n("397680"),
        h = n("822516"),
        C = n("393745"),
        g = n("745049"),
        N = n("782340"),
        v = n("964385");
      function S(e) {
        let {
            recurrenceId: t,
            originalScheduledStartTime: s,
            guildEventId: S,
            onClick: I,
            isActive: L,
          } = e,
          _ = (0, a.useStateFromStores)([E.default], () =>
            E.default.getGuildScheduledEvent(S)
          ),
          m = (0, f.default)(t, null == _ ? void 0 : _.id),
          x = (0, a.useStateFromStores)([d.default], () =>
            d.default.getGuild(null == _ ? void 0 : _.guild_id)
          ),
          T = (0, a.useStateFromStores)([r.default], () =>
            r.default.getChannel(null == _ ? void 0 : _.channel_id)
          );
        if (null == _) return null;
        let { is_canceled: R = !1 } = null != m ? m : {},
          p =
            (null == m ? void 0 : m.scheduled_start_time) != null
              ? new Date(null == m ? void 0 : m.scheduled_start_time)
              : s,
          M = (0, h.getNextRecurrenceIdInEvent)(_),
          B = R
            ? g.GuildScheduledEventStatus.CANCELED
            : g.GuildScheduledEventStatus.SCHEDULED;
        M === t && (B = _.status);
        let G = e => {
          e.stopPropagation(),
            null != x &&
              (0, o.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("110374")
                  .then(n.bind(n, "110374"));
                return n =>
                  (0, l.jsx)(e, {
                    guildEventId: _.id,
                    recurrenceId: t,
                    channel: T,
                    guild: x,
                    isRecurrenceItem: !0,
                    ...n,
                  });
              });
        };
        return (0, l.jsxs)(i.ClickableContainer, {
          className: u(v.container, {
            [v.canceled]: R,
            [v.clickable]: null != I,
            [v.active]: L,
          }),
          onClick: e => {
            e.stopPropagation(), !R && (null == I || I(t));
          },
          onContextMenu: G,
          "aria-label": "",
          children: [
            (0, l.jsx)(C.GuildEventTimeStatus, {
              startTime: p.toISOString(),
              status: B,
              eventType: _.entity_type,
              guildEventId: _.id,
              recurrenceId: t,
              className: v.timeStatus,
            }),
            R &&
              (0, l.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-danger",
                className: v.canceledStatus,
                children: N.default.Messages.EVENT_CANCELED,
              }),
            (0, l.jsx)(i.Tooltip, {
              text: N.default.Messages.MORE,
              position: "top",
              "aria-label": N.default.Messages.EDIT,
              children: e =>
                (0, l.jsx)(i.Clickable, {
                  ...e,
                  onClick: G,
                  className: v.iconButton,
                  children: (0, l.jsx)(c.default, {
                    width: 20,
                    height: 20,
                    className: v.icon,
                  }),
                }),
            }),
          ],
        });
      }
    },
    427554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("414456"),
        u = n.n(s),
        a = n("77078"),
        i = n("299039"),
        o = n("276676"),
        r = n("123030"),
        d = n("782340"),
        c = n("912215");
      function E(e) {
        let {
            guildId: t,
            recurrenceRule: n,
            guildEventId: s,
            onRecurrenceClick: E,
            hideScroller: f = !1,
            activeRecurrenceId: h,
          } = e,
          {
            recurrenceStartTimes: C,
            canViewMoreRecurrences: g,
            updateRecurrenceStartTimes: N,
          } = (0, o.default)(s, t, n);
        return (0, l.jsxs)("div", {
          className: c.recurrences,
          children: [
            (0, l.jsx)(a.Heading, {
              variant: "heading-sm/medium",
              className: c.heading,
              children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS,
            }),
            (0, l.jsxs)(a.Scroller, {
              className: u(c.scroller, { [c.showScroller]: !f }),
              children: [
                C.map(e => {
                  let t = i.default.fromTimestamp(e.getTime());
                  return (0, l.jsx)(
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
                  (0, l.jsx)(a.Button, {
                    grow: !1,
                    onClick: e => {
                      e.stopPropagation(), N();
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
    644189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("77078"),
        u = n("433487"),
        a = n("707916"),
        i = n("782340"),
        o = n("136275");
      function r(e) {
        let {
          isActive: t,
          isUserLurking: n,
          rsvped: r,
          onContextMenu: d,
          onRsvpClick: c,
          onGoToGuildClick: E,
          isDetailsView: f = !1,
          isMember: h,
          onJoinGuildClick: C,
          guildName: g,
          onInviteClick: N,
          canInvite: v,
          isChannelPublic: S,
        } = e;
        return (0, l.jsxs)("div", {
          className: o.container,
          children: [
            null != d
              ? (0, l.jsx)(s.Tooltip, {
                  text: i.default.Messages.MORE,
                  position: "top",
                  "aria-label": i.default.Messages.EDIT,
                  children: e =>
                    (0, l.jsx)(s.Clickable, {
                      ...e,
                      onClick: d,
                      className: o.iconButton,
                      children: (0, l.jsx)(u.default, {
                        width: 20,
                        height: 20,
                        className: o.icon,
                      }),
                    }),
                })
              : null,
            h &&
              (0, l.jsx)(a.GuildEventShareButton, {
                onInviteClick: N,
                canInvite: v,
                isChannelPublic: S,
              }),
            n &&
              !t &&
              (0, l.jsx)(a.GuildEventLurkerInterestedButton, {
                isUserRsvped: r,
                isUserLurking: n,
              }),
            h &&
              !n &&
              !t &&
              null != c &&
              (0, l.jsx)(a.GuildEventInterestedButton, {
                isUserRsvped: r,
                isUserLurking: n,
                onRsvpClick: c,
              }),
            h && !n && (!f || t)
              ? (0, l.jsx)(s.Button, {
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
              : (0, l.jsx)(s.Button, {
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
    491920: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("469563"),
        u = n("743087"),
        a = n("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: s = "currentColor",
              ...u
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
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
    161213: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShareIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var s = n("669491"),
        u = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
              className: i,
            }),
            (0, l.jsx)("path", {
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
//# sourceMappingURL=8871989bf4de59b87517.js.map
