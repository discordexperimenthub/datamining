(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79423"],
  {
    69448: function (e, t, l) {
      "use strict";
      e.exports = l.p + "f6da6e7ed1d57e445d0e.svg";
    },
    588715: function (e, t, l) {},
    690445: function (e, t, l) {},
    35647: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("35466");
      l.es(n, t);
    },
    861370: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("627445"),
        u = l.n(a),
        s = l("77078"),
        d = l("845579"),
        r = l("662255"),
        i = l("306160");
      function o(e) {
        let { id: t, label: l, onSuccess: a, shiftId: o, showIconFirst: c } = e,
          E = d.DeveloperMode.useSetting();
        if (__OVERLAY__ || !E || !i.SUPPORTS_COPY || null == t) return null;
        let f = "devmode-copy-id-".concat(t);
        return (0, n.jsx)(
          s.MenuItem,
          {
            id: f,
            label: l,
            action: function (e) {
              let l = null != o && e.shiftKey ? o : t;
              u(null != l, "cannot copy null text"),
                (0, i.copy)(l),
                null == a || a();
            },
            icon: r.default,
            showIconFirst: c,
          },
          f
        );
      }
    },
    658202: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        });
      var n = l("322224");
      function a(e, t, l, a) {
        let { scheduled_start_time: u, scheduled_end_time: s } = e;
        return null == u && null == s
          ? n.default.deleteGuildEventException(t, l, a)
          : n.default.updateGuildEventException(
              {
                scheduled_start_time: u,
                scheduled_end_time: s,
                is_canceled: !1,
              },
              t,
              l,
              a
            );
      }
    },
    598639: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("446674"),
        a = l("962199"),
        u = l("305961");
      function s(e, t) {
        return (0, n.useStateFromStoresObject)(
          [u.default, a.default],
          () => {
            let l = u.default.getGuild(e),
              n = null != l;
            return (
              null == l &&
                null != t &&
                (l = a.default.getCachedGuildByEventId(t)),
              { isMember: n, guild: l }
            );
          },
          [e, t]
        );
      }
    },
    558286: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useGuildEventModalStore: function () {
            return a;
          },
        });
      var n = l("308503");
      let a = (0, n.default)(e => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          e({ canCloseModal: t });
        },
      }));
    },
    110374: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("77078"),
        u = l("272030"),
        s = l("901582"),
        d = l("861370"),
        r = l("455933"),
        i = l("248900"),
        o = l("385752"),
        c = l("222971"),
        E = l("601131"),
        f = l("876725"),
        _ = l("367989"),
        T = l("891603"),
        M = l("510692"),
        v = l("49111"),
        I = l("782340");
      function g(e) {
        let {
            guildEventId: t,
            recurrenceId: l,
            channel: g,
            guild: m,
            analyticsContext: N,
            isRecurrenceItem: R = !1,
            onSelect: S,
          } = e,
          D = (0, _.default)({
            guildEventId: t,
            recurrenceId: l,
            guild: m,
            channel: g,
          }),
          C = (0, o.default)({
            guildEventId: t,
            recurrenceId: l,
            guild: m,
            channel: g,
          }),
          O = (0, c.default)({
            guildEventId: t,
            guild: m,
            channel: g,
            recurrenceId: l,
            isRecurrenceItem: R,
          }),
          h = (0, E.default)(t, m, g),
          p = (0, M.default)(t, m, g),
          x = (0, i.default)(t, m.id, l),
          L = (0, f.default)(t),
          A = (0, d.default)({
            id: t,
            label: I.default.Messages.COPY_ID_EVENT,
          }),
          b = (0, d.default)({
            id: l,
            label: I.default.Messages.COPY_ID_EVENT_RECURRENCE,
          }),
          V = (0, r.default)(t, m.id, g, l),
          j = (0, T.default)({
            guildEventId: t,
            guildId: m.id,
            recurrenceId: l,
          });
        return (0, n.jsx)(s.default, {
          context: N,
          object: v.AnalyticsObjects.CONTEXT_MENU,
          children: (0, n.jsxs)(a.Menu, {
            navId: "user-context",
            onClose: u.closeContextMenu,
            "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: S,
            children: [
              (0, n.jsxs)(a.MenuGroup, {
                children: [V, !R && p, O, !R && h, C, D, x, R && j],
              }),
              !R && (0, n.jsx)(a.MenuGroup, { children: L }),
              (0, n.jsxs)(a.MenuGroup, { children: [A, b] }),
            ],
          }),
        });
      }
    },
    455933: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("398351"),
        u = l.n(a),
        s = l("866227"),
        d = l.n(s),
        r = l("730290"),
        i = l("446674"),
        o = l("77078"),
        c = l("49671"),
        E = l("884351"),
        f = l("305961"),
        _ = l("773336"),
        T = l("398604"),
        M = l("466148"),
        v = l("189443"),
        I = l("822516"),
        g = l("745049"),
        m = l("49111"),
        N = l("782340");
      let R = "YYYYMMDDTHHmmss",
        S = "YYYY-MM-DDTHH:mm:ss",
        D = /RRULE:.*/;
      function C(e, t, l, a) {
        var s, C, O;
        let h;
        let p = (0, i.useStateFromStores)([T.default], () =>
            T.default.isActive(e)
          ),
          { startTime: x, endTime: L } = (0, M.default)(null != e ? e : "", a),
          A = (0, i.useStateFromStores)(
            [T.default],
            () => T.default.getGuildScheduledEvent(e),
            [e]
          ),
          b = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(t),
            [t]
          );
        if (p || null == A) return null;
        h =
          A.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL
            ? A.entity_metadata.location
            : null != l && null != b
              ? N.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                  channelName: l.name,
                  guildName: b.name,
                })
              : N.default.Messages.NOTIFICATION_TITLE_DISCORD;
        let V = d(A.scheduled_start_time),
          j = null != A.scheduled_end_time ? d(A.scheduled_end_time) : V,
          G =
            null != A.description && "" !== A.description
              ? E.default.unparse(
                  A.description,
                  null !== (s = null == l ? void 0 : l.id) && void 0 !== s
                    ? s
                    : m.EMPTY_STRING_SNOWFLAKE_ID,
                  !0
                )
              : "",
          P = (0, v.recurrenceRuleFromServer)(A.recurrence_rule),
          F = null != P ? (0, I.getRRule)(P) : null,
          U = null !== (C = d(x)) && void 0 !== C ? C : V,
          w = null !== (O = d(null != L ? L : x)) && void 0 !== O ? O : V,
          y = () => {
            let e = u();
            e.createEvent({
              start: V,
              end: j,
              summary: A.name,
              description: G,
              location: h,
              repeating: F,
            }),
              _.isPlatformEmbedded
                ? c.default.fileManager.saveWithDialog(
                    e.toString(),
                    "discord-event.ics"
                  )
                : window.open(e.toURL(), "_blank");
          };
        return (0, n.jsxs)(o.MenuItem, {
          id: N.default.Messages.ADD_TO_CALENDAR,
          label: N.default.Messages.ADD_TO_CALENDAR,
          action: y,
          children: [
            (0, n.jsx)(o.MenuItem, {
              id: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
              label: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
              action: () => {
                var e;
                let t = null == F ? void 0 : F.toString(),
                  l = {
                    text: A.name,
                    dates: "".concat(V.format(R), "/").concat(j.format(R)),
                    details: G,
                    action: "TEMPLATE",
                    location: h,
                    recur:
                      null != t
                        ? null === (e = D.exec(t)) || void 0 === e
                          ? void 0
                          : e[0]
                        : void 0,
                  },
                  n = "https://calendar.google.com/calendar/render?".concat(
                    (0, r.stringify)(l)
                  );
                window.open(n, "_blank");
              },
            }),
            (0, n.jsx)(o.MenuItem, {
              id: N.default.Messages.DOWNLOAD_ICS,
              label: N.default.Messages.DOWNLOAD_ICS,
              action: y,
            }),
            (0, n.jsx)(o.MenuItem, {
              id: N.default.Messages.ADD_TO_YAHOO,
              label: N.default.Messages.ADD_TO_YAHOO,
              action: () => {
                let e = {
                    v: 60,
                    title: A.name,
                    st: U.format(R),
                    et: w.format(R),
                    desc: G,
                    in_loc: h,
                  },
                  t = "https://calendar.yahoo.com/?".concat(
                    (0, r.stringify)(e)
                  );
                window.open(t, "_blank");
              },
            }),
            (0, n.jsx)(o.MenuItem, {
              id: N.default.Messages.ADD_TO_OUTLOOK,
              label: N.default.Messages.ADD_TO_OUTLOOK,
              action: () => {
                let e = {
                    path: "/calendar/action/compose",
                    rru: "addevent",
                    startdt: U.format(S),
                    enddt: w.format(S),
                    subject: A.name,
                    body: G,
                    location: h,
                    allday: !1,
                  },
                  t =
                    "https://outlook.live.com/calendar/0/deeplink/compose?".concat(
                      (0, r.stringify)(e)
                    );
                window.open(t, "_blank");
              },
            }),
          ],
        });
      }
    },
    248900: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("77078"),
        u = l("306160"),
        s = l("598639"),
        d = l("49111"),
        r = l("782340");
      function i(e, t, l) {
        let i = null != l,
          { isMember: o } = (0, s.default)(t, e);
        if (!o) return null;
        function c() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (0, u.copy)(
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(d.Routes.GUILD_EVENT_DETAILS(t, e, n ? null : l))
          ),
            (0, a.showToast)(
              (0, a.createToast)(
                r.default.Messages.COPIED_LINK,
                a.ToastType.SUCCESS
              )
            );
        }
        return (0, n.jsx)(a.MenuItem, {
          id: r.default.Messages.COPY_EVENT_LINK,
          label: r.default.Messages.COPY_EVENT_LINK,
          action: i ? void 0 : () => c(!0),
          children:
            i &&
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(a.MenuItem, {
                  id: r.default.Messages.COPY_RECURRENCE_LINK,
                  label: r.default.Messages.COPY_RECURRENCE_LINK,
                  action: () => c(!1),
                }),
                (0, n.jsx)(a.MenuItem, {
                  id: r.default.Messages.COPY_SERIES_LINK,
                  label: r.default.Messages.COPY_SERIES_LINK,
                  action: () => c(!0),
                }),
              ],
            }),
        });
      }
    },
    385752: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        }),
        l("222007");
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("817963"),
        d = l("398604"),
        r = l("322224"),
        i = l("397680"),
        o = l("466148"),
        c = l("782340");
      function E(e) {
        let { guildEventId: t, recurrenceId: l, guild: E, channel: f } = e,
          _ = null != l,
          { canManageGuildEvent: T } = (0, s.useManageResourcePermissions)(
            null != f ? f : E
          ),
          [M, v] = (0, a.useStateFromStoresArray)([d.default], () => [
            d.default.isActive(t),
            d.default.getGuildScheduledEvent(t),
          ]),
          I = (0, i.default)(l, null == v ? void 0 : v.id),
          g = null != v && T(v),
          m = (null == v ? void 0 : v.recurrence_rule) != null && !_,
          { startTime: N } = (0, o.default)(t, l);
        if (!g || (M && !m && !_) || (_ && !_) || null == v) return null;
        if (M && _) {
          var R;
          if (null == N) return null;
          let e = new Date(
            null !== (R = null == I ? void 0 : I.scheduled_start_time) &&
            void 0 !== R
              ? R
              : N
          );
          if (new Date() > e) return null;
        }
        let S = e => {
          (0, u.openModal)(a =>
            (0, n.jsxs)(u.ConfirmModal, {
              ...a,
              header: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
              confirmText:
                m || e
                  ? c.default.Messages.DELETE_ALL_EVENTS
                  : c.default.Messages.DELETE_EVENT,
              cancelText: c.default.Messages.NEVERMIND,
              onConfirm: () =>
                _ && !e
                  ? r.default.deleteRecurrence(E.id, t, l, I)
                  : r.default.deleteGuildEvent(t, E.id),
              children: [
                (0, n.jsx)(u.Text, {
                  variant: "text-md/normal",
                  children: c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                }),
                (0, n.jsx)("br", {}),
                (m || e) &&
                  (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      c.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format(),
                  }),
              ],
            })
          );
        };
        return (0, n.jsx)(u.MenuItem, {
          id: c.default.Messages.DELETE_EVENT,
          label: c.default.Messages.DELETE_EVENT,
          action: _ ? void 0 : () => S(),
          color: "danger",
          children:
            _ &&
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u.MenuItem, {
                  id: c.default.Messages.DELETE_THIS_EVENT,
                  label: c.default.Messages.DELETE_THIS_EVENT,
                  action: () => S(),
                  disabled: null == I ? void 0 : I.is_canceled,
                  color: "danger",
                }),
                (0, n.jsx)(u.MenuItem, {
                  id: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  label: c.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  action: () => S(!0),
                  color: "danger",
                }),
              ],
            }),
        });
      }
    },
    222971: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("817963"),
        d = l("398604"),
        r = l("397680"),
        i = l("466148"),
        o = l("842672"),
        c = l("782340");
      function E(e) {
        let {
            guildEventId: t,
            guild: E,
            channel: f,
            recurrenceId: _,
            isRecurrenceItem: T,
          } = e,
          { canManageGuildEvent: M } = (0, s.useManageResourcePermissions)(
            null != f ? f : E
          ),
          v = (0, a.useStateFromStores)([d.default], () =>
            d.default.getGuildScheduledEvent(t)
          ),
          I = M(v),
          g = (0, o.default)(),
          m = (0, r.default)(_, null == v ? void 0 : v.id),
          N = (0, i.default)(t, _);
        if (!I || null == v) return null;
        let R = null != v.recurrence_rule && !T,
          S = e => {
            (null == _ || e) && !T
              ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await l
                    .el("590942")
                    .then(l.bind(l, "590942"));
                  return l =>
                    (0, n.jsx)(e, {
                      ...l,
                      guildScheduledEventId: t,
                      guildId: E.id,
                    });
                }, g)
              : null != _ &&
                (0, u.openModalLazy)(async () => {
                  let { default: e } = await l
                    .el("229798")
                    .then(l.bind(l, "229798"));
                  return t =>
                    (0, n.jsx)(e, { ...t, guildEvent: v, recurrenceId: _ });
                }, g);
          };
        return (0, n.jsx)(u.MenuItem, {
          id: c.default.Messages.EDIT_EVENT,
          label: c.default.Messages.EDIT_EVENT,
          action: R ? void 0 : () => S(!0),
          children:
            R &&
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u.MenuItem, {
                  id: c.default.Messages.EDIT_THIS_EVENT,
                  label: c.default.Messages.EDIT_THIS_EVENT,
                  action: () => S(!1),
                  disabled:
                    (null == m ? void 0 : m.is_canceled) ||
                    N.startTime.getTime() < Date.now(),
                }),
                (0, n.jsx)(u.MenuItem, {
                  id: c.default.Messages.EDIT_ALL_EVENTS,
                  label: c.default.Messages.EDIT_ALL_EVENTS,
                  action: () => S(!0),
                  disabled:
                    new Date(v.scheduled_start_time).getTime() < Date.now(),
                }),
              ],
            }),
        });
      }
    },
    876725: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("377114"),
        d = l("907566"),
        r = l("398604"),
        i = l("782340");
      function o(e) {
        let t = (0, a.useStateFromStores)(
          [r.default],
          () => r.default.getGuildScheduledEvent(e),
          [e]
        );
        return null == e || null == t
          ? null
          : (0, n.jsx)(u.MenuItem, {
              id: "report-event",
              label: i.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
              action: () => (0, s.showReportModalForGuildScheduledEvent)(t),
              icon: d.default,
              color: "danger",
            });
      }
    },
    367989: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        }),
        l("222007");
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("817963"),
        d = l("398604"),
        r = l("658202"),
        i = l("397680"),
        o = l("782340");
      function c(e) {
        let { guildEventId: t, recurrenceId: l, guild: c, channel: E } = e,
          f = null != l,
          { canManageGuildEvent: _ } = (0, s.useManageResourcePermissions)(
            null != E ? E : c
          ),
          [T, M] = (0, a.useStateFromStoresArray)([d.default], () => [
            d.default.isActive(t),
            d.default.getGuildScheduledEvent(t),
          ]),
          v = (0, i.default)(l, null == M ? void 0 : M.id),
          I = null != M && _(M),
          g = f && (null == v ? void 0 : v.is_canceled) && I;
        return g && (!T || f)
          ? (0, n.jsx)(u.MenuItem, {
              id: o.default.Messages.RESTORE_EVENT,
              label: o.default.Messages.RESTORE_EVENT,
              action: () => {
                null != l && null != v && (0, r.default)(v, c.id, t, l);
              },
            })
          : null;
      }
    },
    891603: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("267567"),
        d = l("271938"),
        r = l("398604"),
        i = l("322224"),
        o = l("397680"),
        c = l("745049"),
        E = l("782340");
      function f(e) {
        let { guildEventId: t, guildId: l, recurrenceId: f } = e,
          _ = (0, a.useStateFromStores)(
            [s.default],
            () => s.default.isLurking(l),
            [l]
          ),
          T = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
          {
            rsvped: M,
            baseRsvp: v,
            recurrenceRsvp: I,
          } = (0, a.useStateFromStoresObject)(
            [r.default],
            () => ({
              rsvped: r.default.isInterestedInEventRecurrence(t, f),
              baseRsvp: r.default.getRsvp(t, null, T),
              recurrenceRsvp: r.default.getRsvp(t, f, T),
            }),
            [f, t, T]
          ),
          g = (0, o.default)(f, t);
        if (_ || (null == g ? void 0 : g.is_canceled)) return null;
        let m = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n =
              (null == v ? void 0 : v.response) ===
              c.GuildScheduledEventUserResponses.INTERESTED,
            a = n
              ? c.GuildScheduledEventUserResponses.UNINTERESTED
              : c.GuildScheduledEventUserResponses.INTERESTED,
            u = e ? null : f;
          i.default.updateRsvp(t, u, l, a);
        };
        return (0, n.jsxs)(u.MenuItem, {
          id: M
            ? E.default.Messages.EVENT_MARK_NOT_INTERESTED
            : E.default.Messages.EVENT_MARK_INTERESTED,
          label: M
            ? E.default.Messages.EVENT_MARK_NOT_INTERESTED
            : E.default.Messages.EVENT_MARK_INTERESTED,
          action: void 0,
          children: [
            (0, n.jsx)(u.MenuItem, {
              id: E.default.Messages
                .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              label:
                E.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              action: () => m(!1),
            }),
            (0, n.jsx)(u.MenuItem, {
              id: E.default.Messages
                .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              label:
                E.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              action: () => m(!0),
              disabled: null != I,
            }),
          ],
        });
      }
    },
    510692: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("446674"),
        u = l("77078"),
        s = l("817963"),
        d = l("398604"),
        r = l("534222"),
        i = l("49111"),
        o = l("782340");
      function c(e, t, c) {
        var E;
        let { canManageGuildEvent: f } = (0, s.useManageResourcePermissions)(
            null != c ? c : t
          ),
          _ = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getGuildScheduledEvent(e),
            [e]
          ),
          T = f(_),
          M =
            null !=
            (0, r.useActiveEvent)(
              null !== (E = null == c ? void 0 : c.id) && void 0 !== E
                ? E
                : i.EMPTY_STRING_SNOWFLAKE_ID
            ),
          v = null != _ && (0, d.isGuildScheduledEventActive)(_);
        return T && !v && !M
          ? (0, n.jsx)(u.MenuItem, {
              id: o.default.Messages.START_EVENT,
              label: o.default.Messages.START_EVENT,
              action: function () {
                null != _ &&
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await l
                      .el("298843")
                      .then(l.bind(l, "298843"));
                    return t => (0, n.jsx)(e, { ...t, event: _ });
                  });
              },
            })
          : null;
      }
    },
    842672: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("77078"),
        a = l("244201"),
        u = l("558286"),
        s = l("49111");
      let d = "guild-event-modal";
      var r = () => {
        let e = (0, a.useAppContext)(),
          t =
            e === s.AppContext.POPOUT
              ? n.POPOUT_MODAL_CONTEXT
              : n.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: d,
          contextKey: t,
          onCloseRequest: () => {
            u.useGuildEventModalStore.getState().canCloseModal &&
              (0, n.closeModal)(d, t);
          },
        };
      };
    },
    217145: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          isIFrameModalUserEnabled: function () {
            return u;
          },
        });
      var n = l("862205");
      let a = (0, n.createExperiment)({
        kind: "user",
        id: "2023-07_iframe_modal",
        label: "iFrame Modal",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable iFrameModal", config: { enabled: !0 } },
        ],
      });
      function u() {
        return a.getCurrentConfig(
          { location: "5c0a70_1" },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    429682: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          isIFrameModalForGuildEnabled: function () {
            return s;
          },
        });
      var n = l("862205"),
        a = l("49111");
      let u = (0, n.createExperiment)({
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
      function s(e) {
        return u.getCurrentConfig(
          {
            guildId: null != e ? e : a.EMPTY_STRING_SNOWFLAKE_ID,
            location: "2d360b_1",
          },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    988878: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("217145"),
        a = l("429682");
      function u(e) {
        return (
          (0, n.isIFrameModalUserEnabled)() ||
          (0, a.isIFrameModalForGuildEnabled)(e)
        );
      }
    },
    555158: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return _;
          },
        });
      var n,
        a,
        u = l("37983");
      l("884691");
      var s = l("414456"),
        d = l.n(s),
        r = l("77078"),
        i = l("36694"),
        o = l("381546"),
        c = l("68238"),
        E = l("423487"),
        f = l("950038");
      ((n = a || (a = {}))[(n.WARNING = 0)] = "WARNING"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.ERROR = 2)] = "ERROR"),
        (n[(n.POSITIVE = 3)] = "POSITIVE");
      var _ = function (e) {
        let {
            children: t,
            messageType: l,
            className: n,
            textColor: a = "text-normal",
            textVariant: s = "text-sm/medium",
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
                return i.default;
            }
          })(l),
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
          })(l);
        return (0, u.jsxs)("div", {
          className: d(f.container, T, n),
          children: [
            (0, u.jsx)("div", {
              className: f.iconDiv,
              children: (0, u.jsx)(_, { className: f.icon }),
            }),
            (0, u.jsx)(r.Text, {
              className: f.text,
              color: a,
              variant: s,
              children: t,
            }),
          ],
        });
      };
    },
    662255: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        u = l("35647"),
        s = l("75196"),
        d = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: u,
              ...d
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, s.default)(d),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: u,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          u.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    35466: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          IdIcon: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        u = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, u.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: d,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=6392a9795022066fe884.js.map
