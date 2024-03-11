(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38664"],
  {
    931318: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          addMessageReminders: function () {
            return f;
          },
          updateReminderDueAt: function () {
            return E;
          },
          toggleMessageReminders: function () {
            return h;
          },
          completeMessageReminders: function () {
            return _;
          },
          cleanupMessageReminders: function () {
            return S;
          },
          fetchAndUpdateSavedMessages: function () {
            return v;
          },
        });
      var n = a("872717"),
        s = a("913144"),
        r = a("679653"),
        u = a("42203"),
        l = a("305961"),
        d = a("27618"),
        i = a("697218"),
        c = a("599110"),
        o = a("520899"),
        m = a("988864"),
        g = a("49111");
      function f(e, t) {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "adding",
          rating: "".concat(o.default.getMessageReminders().length),
        }),
          M(
            [
              {
                messageId: e.id,
                channelId: e.channel_id,
                savedAt: new Date(),
                dueAt: t,
                ...(function (e) {
                  let t = u.default.getChannel(e.channel_id);
                  if (null == t) return null;
                  let a = l.default.getGuild(t.guild_id),
                    n = "",
                    s = (0, r.computeChannelName)(t, i.default, d.default, !0);
                  if (t.isPrivate()) n = s;
                  else if (t.isThread()) {
                    let e = u.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let a = (0, r.computeChannelName)(
                      e,
                      i.default,
                      d.default,
                      !0
                    );
                    n = "".concat(a, " > ").concat(s);
                  } else n = s;
                  let c = "".concat(
                    e.content.length > 0
                      ? e.content
                      : "".concat(e.attachments.length, " attachments")
                  );
                  return {
                    authorSummary: e.author.username,
                    authorId: e.author.id,
                    channelSummary: n,
                    messageSummary:
                      c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
                    guildId: null == a ? void 0 : a.id,
                  };
                })(e),
              },
            ],
            []
          );
      }
      function E(e, t) {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updating_due_at",
          rating: "".concat(o.default.getMessageReminders().length),
        });
        let a = o.default.getMessageReminders(),
          n = a.find(t => t.messageId === e);
        null != n && M([{ ...n, savedAt: new Date(), dueAt: t }], [n]);
      }
      function h(e, t) {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: t,
          reason: "updating within the list",
          rating: "".concat(o.default.getMessageReminders().length),
        }),
          s.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t,
          });
      }
      function _(e) {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "complete and clear immediately",
          rating: "".concat(o.default.getMessageReminders().length),
        });
        let t = o.default.getMessageReminders();
        M(
          [],
          t.filter(t => t.messageId === e)
        );
      }
      function S() {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "clearing",
          rating: "".concat(o.default.getMessageReminders().length),
        });
        let e = o.default.getMessageReminders();
        e.some(e => e.complete) &&
          M(
            [],
            e.filter(e => e.complete)
          );
      }
      function I(e) {
        c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updated_from_server",
          rating: "".concat(o.default.getMessageReminders().length),
        }),
          s.default.dispatch({ type: "SAVED_MESSAGES_UPDATE", messages: e });
      }
      function M(e, t) {
        (0 !== e.length || 0 !== t.length) &&
          n.default
            .post({
              url: g.Endpoints.SAVED_MESSAGES,
              body: {
                added: e.map(m.savedMessageToServer),
                removed: t.map(m.savedMessageToServer),
              },
            })
            .then(e => {
              I(e.body.saved_messages.map(m.savedMessageToClient));
            });
      }
      function v() {
        return o.default.recentlyFetched()
          ? Promise.resolve()
          : n.default.get({ url: g.Endpoints.SAVED_MESSAGES }).then(e => {
              let t = e.body.saved_messages,
                a = t.map(m.savedMessageToClient);
              I(a);
            });
      }
    },
    979268: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var n = a("862205");
      let s = (0, n.createExperiment)({
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
      var r = s;
    },
    520899: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        }),
        a("222007");
      var n = a("446674"),
        s = a("913144"),
        r = a("718517");
      let u = [],
        l = new Set(),
        d = 0;
      class i extends n.default.Store {
        initialize() {
          setInterval(() => {
            this.emitChange();
          }, 1 * r.default.Millis.MINUTE);
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
          return new Date().getTime() - d < 1 * r.default.Millis.MINUTE;
        }
        hasSentNotification(e) {
          return l.has(e);
        }
        getState() {
          return { messages: u };
        }
      }
      i.displayName = "MessageRemindersStore";
      var c = new i(s.default, {
        SAVED_MESSAGES_UPDATE: function (e) {
          let { messages: t } = e;
          (d = new Date().getTime()),
            (u = t.map(e => ({ ...e, complete: !1 }))),
            t.forEach(e => {
              null != e.dueAt && e.dueAt > new Date() && l.delete(e.messageId),
                null != e.dueAt && e.dueAt < new Date() && l.add(e.messageId);
            });
        },
        MESSAGE_REMINDER_TOGGLE: function (e) {
          let { messageId: t, complete: a } = e,
            n = u.findIndex(e => e.messageId === t);
          if (-1 === n) return !1;
          u[n] = { ...u[n], complete: a };
        },
        MESSAGE_REMINDER_NOTIFIED: function (e) {
          let { messageId: t } = e;
          l.add(t);
        },
      });
    },
    988864: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          savedMessageToServer: function () {
            return r;
          },
          savedMessageToClient: function () {
            return u;
          },
          savedMessageHasMetadata: function () {
            return l;
          },
          MESSAGE_REMINDER_DURATION_ITEMS: function () {
            return d;
          },
        });
      var n = a("718517"),
        s = a("782340");
      function r(e) {
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
      function l(e) {
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
      let d = [
        {
          duration: n.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * n.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * n.default.Millis.HOUR,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          duration: n.default.Millis.DAY,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY,
        },
        {
          duration: n.default.Millis.WEEK,
          getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK,
        },
      ];
    },
    555158: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          HelpMessageTypes: function () {
            return s;
          },
          default: function () {
            return f;
          },
        });
      var n,
        s,
        r = a("37983");
      a("884691");
      var u = a("414456"),
        l = a.n(u),
        d = a("77078"),
        i = a("36694"),
        c = a("381546"),
        o = a("68238"),
        m = a("423487"),
        g = a("950038");
      ((n = s || (s = {}))[(n.WARNING = 0)] = "WARNING"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.ERROR = 2)] = "ERROR"),
        (n[(n.POSITIVE = 3)] = "POSITIVE");
      var f = function (e) {
        let {
            children: t,
            messageType: a,
            className: n,
            textColor: s = "text-normal",
            textVariant: u = "text-sm/medium",
          } = e,
          f = (function (e) {
            switch (e) {
              case 0:
                return m.default;
              case 1:
                return o.default;
              case 2:
                return c.default;
              case 3:
                return i.default;
            }
          })(a),
          E = (function (e) {
            switch (e) {
              case 0:
                return g.warning;
              case 1:
                return g.info;
              case 2:
                return g.error;
              case 3:
                return g.positive;
            }
          })(a);
        return (0, r.jsxs)("div", {
          className: l(g.container, E, n),
          children: [
            (0, r.jsx)("div", {
              className: g.iconDiv,
              children: (0, r.jsx)(f, { className: g.icon }),
            }),
            (0, r.jsx)(d.Text, {
              className: g.text,
              color: s,
              variant: u,
              children: t,
            }),
          ],
        });
      };
    },
    822332: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var n = a("37983"),
        s = a("884691"),
        r = a("414456"),
        u = a.n(r),
        l = a("77078"),
        d = a("782340"),
        i = a("1700");
      let c = { BLOCK: i.block, INLINE: i.inline };
      class o extends s.PureComponent {
        render() {
          let {
            children: e,
            className: t,
            textClassName: a,
            type: s = c.BLOCK,
            style: r,
          } = this.props;
          return (0, n.jsxs)("div", {
            className: u(t, s),
            style: r,
            children: [
              (0, n.jsxs)(l.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-positive",
                className: i.pro,
                children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"],
              }),
              (0, n.jsx)(l.Text, {
                className: u(i.tip, a),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      o.Types = c;
      var m = o;
    },
    566998: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("469563"),
        r = a("281862"),
        u = a("75196"),
        l = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: s = "currentColor",
              foreground: r,
              ...l
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, u.default)(l),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: r,
                fill: s,
                d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z",
              }),
            });
          },
          r.PinIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=1ed4b4edd79a81ad161a.js.map
