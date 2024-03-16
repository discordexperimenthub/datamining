(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68860"],
  {
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("175339"),
        u = () =>
          (0, a.jsx)("div", {
            className: l.loadingWrapper,
            children: (0, a.jsx)(s.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    823026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("424973");
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        u = n("77078"),
        i = n("713841"),
        r = n("79112"),
        d = n("988721"),
        o = n("592407"),
        c = n("305961"),
        m = n("957255"),
        f = n("49111"),
        g = n("782340");
      function h(e) {
        let { user: t, guildId: n, channel: h, context: E } = e,
          _ = c.default.getGuild(n),
          p = (0, l.useStateFromStores)([m.default], () =>
            null != _ ? m.default.can(f.Permissions.MANAGE_GUILD, _) : null
          ),
          v = (0, d.useContextIndexState)(h, !0, !0),
          I = (0, d.useUserIndexState)(!0, !0),
          { isUserApp: S, isGuildApp: M } = s.useMemo(() => {
            var e, n, a, s;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (a =
                    null === (e = v.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== a
                  ? a
                  : {}
              ),
              u = Object.values(
                null !==
                  (s =
                    null === (n = I.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== s
                  ? s
                  : {}
              );
            return {
              isGuildApp: l.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: u.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [v, I, null == t ? void 0 : t.id]),
          A = s.useCallback(() => {
            (null == _ ? void 0 : _.id) != null &&
              (o.default.open(_.id, f.GuildSettingsSections.INTEGRATIONS),
              i.default.setSection(
                f.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == _ ? void 0 : _.id]),
          N = s.useCallback(() => {
            r.default.open(f.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          R = E === f.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !p || R || (!M && !S)) return null;
        let O = [];
        return (
          M &&
            O.push(
              (0, a.jsx)(
                u.MenuItem,
                {
                  id: "manage-integration",
                  label: g.default.Messages.MANAGE_INTEGRATION,
                  action: A,
                },
                "manage-integration"
              )
            ),
          S &&
            O.push(
              (0, a.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: g.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: N,
                },
                "manage-authorized-app"
              )
            ),
          O
        );
      }
    },
    931318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addMessageReminders: function () {
            return g;
          },
          updateReminderDueAt: function () {
            return h;
          },
          toggleMessageReminders: function () {
            return E;
          },
          completeMessageReminders: function () {
            return _;
          },
          cleanupMessageReminders: function () {
            return p;
          },
          fetchAndUpdateSavedMessages: function () {
            return S;
          },
        });
      var a = n("872717"),
        s = n("913144"),
        l = n("679653"),
        u = n("42203"),
        i = n("305961"),
        r = n("27618"),
        d = n("697218"),
        o = n("599110"),
        c = n("520899"),
        m = n("988864"),
        f = n("49111");
      function g(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "adding",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          I(
            [
              {
                messageId: e.id,
                channelId: e.channel_id,
                savedAt: new Date(),
                dueAt: t,
                ...(function (e) {
                  let t = u.default.getChannel(e.channel_id);
                  if (null == t) return null;
                  let n = i.default.getGuild(t.guild_id),
                    a = "",
                    s = (0, l.computeChannelName)(t, d.default, r.default, !0);
                  if (t.isPrivate()) a = s;
                  else if (t.isThread()) {
                    let e = u.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let n = (0, l.computeChannelName)(
                      e,
                      d.default,
                      r.default,
                      !0
                    );
                    a = "".concat(n, " > ").concat(s);
                  } else a = s;
                  let o = "".concat(
                    e.content.length > 0
                      ? e.content
                      : "".concat(e.attachments.length, " attachments")
                  );
                  return {
                    authorSummary: e.author.username,
                    authorId: e.author.id,
                    channelSummary: a,
                    messageSummary:
                      o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                    guildId: null == n ? void 0 : n.id,
                  };
                })(e),
              },
            ],
            []
          );
      }
      function h(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updating_due_at",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let n = c.default.getMessageReminders(),
          a = n.find(t => t.messageId === e);
        null != a && I([{ ...a, savedAt: new Date(), dueAt: t }], [a]);
      }
      function E(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: t,
          reason: "updating within the list",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          s.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t,
          });
      }
      function _(e) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "complete and clear immediately",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let t = c.default.getMessageReminders();
        I(
          [],
          t.filter(t => t.messageId === e)
        );
      }
      function p() {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "clearing",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let e = c.default.getMessageReminders();
        e.some(e => e.complete) &&
          I(
            [],
            e.filter(e => e.complete)
          );
      }
      function v(e) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updated_from_server",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          s.default.dispatch({ type: "SAVED_MESSAGES_UPDATE", messages: e });
      }
      function I(e, t) {
        (0 !== e.length || 0 !== t.length) &&
          a.default
            .post({
              url: f.Endpoints.SAVED_MESSAGES,
              body: {
                added: e.map(m.savedMessageToServer),
                removed: t.map(m.savedMessageToServer),
              },
            })
            .then(e => {
              v(e.body.saved_messages.map(m.savedMessageToClient));
            });
      }
      function S() {
        return c.default.recentlyFetched()
          ? Promise.resolve()
          : a.default.get({ url: f.Endpoints.SAVED_MESSAGES }).then(e => {
              let t = e.body.saved_messages,
                n = t.map(m.savedMessageToClient);
              v(n);
            });
      }
    },
    979268: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2022-08_message_todos_staff_only",
        label: "Message TODO list",
        defaultConfig: { showReminders: !1 },
        treatments: [
          {
            id: 1,
            label: "Show message TODOs CTA",
            config: { showReminders: !0 },
          },
        ],
      });
      var l = s;
    },
    520899: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var a = n("446674"),
        s = n("913144"),
        l = n("718517");
      let u = [],
        i = new Set(),
        r = 0;
      class d extends a.default.Store {
        initialize() {
          setInterval(() => {
            this.emitChange();
          }, 1 * l.default.Millis.MINUTE);
        }
        getMessageReminders() {
          return u;
        }
        isMessageReminder(e) {
          let t = u.find(t => t.messageId === e);
          return null != t && !t.complete;
        }
        getOverdueMessageReminderCount() {
          return u.filter(e => null == e.dueAt || new Date() > e.dueAt).length;
        }
        recentlyFetched() {
          return new Date().getTime() - r < 1 * l.default.Millis.MINUTE;
        }
        hasSentNotification(e) {
          return i.has(e);
        }
        getState() {
          return { messages: u };
        }
      }
      d.displayName = "MessageRemindersStore";
      var o = new d(s.default, {
        SAVED_MESSAGES_UPDATE: function (e) {
          let { messages: t } = e;
          (r = new Date().getTime()),
            (u = t.map(e => ({ ...e, complete: !1 }))),
            t.forEach(e => {
              null != e.dueAt && e.dueAt > new Date() && i.delete(e.messageId),
                null != e.dueAt && e.dueAt < new Date() && i.add(e.messageId);
            });
        },
        MESSAGE_REMINDER_TOGGLE: function (e) {
          let { messageId: t, complete: n } = e,
            a = u.findIndex(e => e.messageId === t);
          if (-1 === a) return !1;
          u[a] = { ...u[a], complete: n };
        },
        MESSAGE_REMINDER_NOTIFIED: function (e) {
          let { messageId: t } = e;
          i.add(t);
        },
      });
    },
    988864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          savedMessageToServer: function () {
            return l;
          },
          savedMessageToClient: function () {
            return u;
          },
          savedMessageHasMetadata: function () {
            return i;
          },
          MESSAGE_REMINDER_DURATION_ITEMS: function () {
            return r;
          },
        });
      var a = n("718517"),
        s = n("782340");
      function l(e) {
        var t;
        return {
          channel_id: e.channelId,
          message_id: e.messageId,
          saved_at: e.savedAt.toISOString(),
          author_summary: e.authorSummary,
          channel_summary: e.channelSummary,
          message_summary: e.messageSummary,
          guild_id: e.guildId,
          author_id: e.authorId,
          notes: e.notes,
          due_at:
            null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString(),
        };
      }
      function u(e) {
        return {
          channelId: e.channel_id,
          messageId: e.message_id,
          savedAt: new Date(e.saved_at),
          authorSummary: e.author_summary,
          channelSummary: e.channel_summary,
          messageSummary: e.message_summary,
          guildId: 0 === e.guild_id ? void 0 : e.guild_id,
          authorId: 0 === e.author_id ? void 0 : e.author_id,
          notes: e.notes,
          dueAt: null != e.due_at ? new Date(e.due_at) : void 0,
        };
      }
      function i(e) {
        return (
          null != e.authorSummary &&
          e.authorSummary.length > 0 &&
          null != e.channelSummary &&
          e.channelSummary.length > 0 &&
          null != e.messageSummary &&
          e.messageSummary.length > 0 &&
          null != e.authorId &&
          e.authorId.length > 0
        );
      }
      let r = [
        {
          duration: a.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * a.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * a.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          duration: a.default.Millis.DAY,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY,
        },
        {
          duration: a.default.Millis.WEEK,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK,
        },
      ];
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("627445"),
        u = n.n(l),
        i = n("446674"),
        r = n("77078"),
        d = n("240249"),
        o = n("916565"),
        c = n("355263"),
        m = n("633043"),
        f = n("823026"),
        g = n("305961"),
        h = n("697218"),
        E = n("317041"),
        _ = n("782340"),
        p = n("466063"),
        v = e => {
          let t,
            {
              commandType: n,
              commandTargetId: l,
              channel: v,
              guildId: I,
              onHeightUpdate: S,
              context: M,
            } = e,
            A = (0, i.useStateFromStores)([g.default], () =>
              g.default.getGuild(null != I ? I : v.guild_id)
            ),
            N = (0, i.useStateFromStores)([h.default], () =>
              h.default.getUser(l)
            ),
            R = (0, f.default)({
              user: N,
              guildId: null == A ? void 0 : A.id,
              channel: v,
              context: M,
            }),
            {
              commands: O,
              sectionDescriptors: D,
              loading: y,
            } = d.useDiscovery(
              v,
              { commandType: n },
              { limit: E.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: T } = s.useMemo(() => {
              let e = {};
              return (
                D.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [D]),
            x = s.useRef(y.current);
          s.useEffect(() => {
            y.current !== x.current &&
              ((x.current = y.current), null == S || S());
          }, [y, S]);
          let L = s.useCallback(
            e => {
              u(null != v, "menu item should not show if channel is null");
              let t = T[e.applicationId],
                n = null != t ? (0, c.getIconComponent)(t) : void 0;
              return (0, a.jsx)(
                r.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, a.jsx)(n, {
                          channel: v,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, o.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: v, guild: A },
                      commandTargetId: l,
                    });
                  },
                },
                e.id
              );
            },
            [v, A, l, T]
          );
          return (
            y.current
              ? (t = (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, a.jsx)(m.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === O.length
                    ? (0, a.jsx)(
                        r.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            _.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : O.map(L)),
                null != R &&
                  (t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      t,
                      (0, a.jsx)(r.MenuSeparator, {}, "separator"),
                      R,
                    ],
                  }))),
            (0, a.jsx)(r.MenuItem, {
              id: "apps",
              label: _.default.Messages.APPS,
              listClassName: p.list,
              children: t,
            })
          );
        };
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return s;
          },
          default: function () {
            return g;
          },
        });
      var a,
        s,
        l = n("37983");
      n("884691");
      var u = n("414456"),
        i = n.n(u),
        r = n("77078"),
        d = n("36694"),
        o = n("381546"),
        c = n("68238"),
        m = n("423487"),
        f = n("950038");
      ((a = s || (s = {}))[(a.WARNING = 0)] = "WARNING"),
        (a[(a.INFO = 1)] = "INFO"),
        (a[(a.ERROR = 2)] = "ERROR"),
        (a[(a.POSITIVE = 3)] = "POSITIVE");
      var g = function (e) {
        let {
            children: t,
            messageType: n,
            className: a,
            textColor: s = "text-normal",
            textVariant: u = "text-sm/medium",
          } = e,
          g = (function (e) {
            switch (e) {
              case 0:
                return m.default;
              case 1:
                return c.default;
              case 2:
                return o.default;
              case 3:
                return d.default;
            }
          })(n),
          h = (function (e) {
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
        return (0, l.jsxs)("div", {
          className: i(f.container, h, a),
          children: [
            (0, l.jsx)("div", {
              className: f.iconDiv,
              children: (0, l.jsx)(g, { className: f.icon }),
            }),
            (0, l.jsx)(r.Text, {
              className: f.text,
              color: s,
              variant: u,
              children: t,
            }),
          ],
        });
      };
    },
    822332: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        u = n.n(l),
        i = n("77078"),
        r = n("782340"),
        d = n("1700");
      let o = { BLOCK: d.block, INLINE: d.inline };
      class c extends s.PureComponent {
        render() {
          let {
            children: e,
            className: t,
            textClassName: n,
            type: s = o.BLOCK,
            style: l,
          } = this.props;
          return (0, a.jsxs)("div", {
            className: u(t, s),
            style: l,
            children: [
              (0, a.jsxs)(i.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: d.pro,
                children: [r.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"],
              }),
              (0, a.jsx)(i.Text, {
                className: u(d.tip, n),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      c.Types = o;
      var m = c;
    },
    566998: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("281862"),
        u = n("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, u.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: l,
                fill: s,
                d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z",
              }),
            });
          },
          l.PinIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=d0670ff070386b14b763.js.map
