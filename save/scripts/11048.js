(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11048"],
  {
    27679: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("299039"),
        a = l("322224"),
        s = l("822516");
      function r(e, t, l, r) {
        let d = (0, s.getBaseScheduleForRecurrence)(t, e),
          u = (0, s.areDatesIdentical)(d.startDate, l.startDate)
            ? null
            : l.startDate,
          i = (0, s.areDatesIdentical)(d.endDate, l.endDate) ? null : l.endDate;
        if (null != r)
          return (0, s.areSchedulesIdentical)(l, d)
            ? a.default.deleteGuildEventException(
                e.guild_id,
                e.id,
                r.event_exception_id
              )
            : a.default.updateGuildEventException(
                {
                  scheduled_start_time: null == u ? void 0 : u.toISOString(),
                  scheduled_end_time: null == i ? void 0 : i.toISOString(),
                  is_canceled: r.is_canceled,
                },
                e.guild_id,
                e.id,
                t
              );
        {
          let l = n.default.extractTimestamp(t);
          return a.default.createGuildEventException(
            {
              original_scheduled_start_time: new Date(l).toISOString(),
              scheduled_start_time: null == u ? void 0 : u.toISOString(),
              scheduled_end_time: null == i ? void 0 : i.toISOString(),
              is_canceled: !1,
            },
            e.guild_id,
            e.id
          );
        }
      }
    },
    229798: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        r = l("686904"),
        d = l("27679"),
        u = l("397680"),
        i = l("822516"),
        c = l("953143"),
        o = l("782340"),
        E = l("558421");
      function _(e) {
        let {
            guildEvent: t,
            recurrenceId: l,
            transitionState: _,
            onClose: h,
          } = e,
          x = (0, u.default)(l, t.id),
          A = (0, i.getBaseScheduleForRecurrence)(l, t),
          f = (0, i.getScheduleForRecurrenceWithException)(A, x),
          [m, D] = a.useState(f),
          [g, { loading: N, error: T }] = (0, r.default)(() => {
            let e = (0, d.default)(t, l, m, x);
            return null == T && h(), e;
          });
        return (0, n.jsxs)(s.ModalRoot, {
          transitionState: _,
          children: [
            (0, n.jsx)(s.ModalHeader, {
              children: (0, n.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: o.default.Messages.EDIT_THIS_EVENT,
              }),
            }),
            (0, n.jsxs)(s.ModalContent, {
              className: E.content,
              children: [
                (0, n.jsx)(c.default, {
                  onScheduleChange: e => {
                    let { startDate: t, endDate: l } = e;
                    null != t &&
                      null != l &&
                      l.isBefore(t) &&
                      (l = t.clone().add(1, "hour")),
                      D({ startDate: t, endDate: l });
                  },
                  schedule: m,
                  showEndDate: null != m.endDate,
                  requireEndDate: null != m.endDate,
                  guildId: t.guild_id,
                  recurrenceRule: t.recurrence_rule,
                }),
                null != T
                  ? (0, n.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: E.warning,
                      children: T.getAnyErrorMessage(),
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(s.ModalFooter, {
              className: E.footer,
              children: [
                (0, n.jsx)(s.Button, {
                  color: s.Button.Colors.BRAND,
                  onClick: g,
                  className: E.button,
                  submitting: N,
                  disabled: (0, i.areSchedulesIdentical)(m, f),
                  children: o.default.Messages.SAVE_EVENT,
                }),
                (0, n.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  onClick: h,
                  children: o.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    844808: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        r = l("20606"),
        d = l("956089"),
        u = l("822516"),
        i = l("782340"),
        c = l("850793");
      function o(e) {
        let { startDate: t, recurrenceRule: l, onRecurrenceChange: o } = e,
          E = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, l), [l, t]),
          _ = (0, u.getRecurrenceOptions)(t),
          h = e => e.toString(),
          x = (0, n.jsxs)("div", {
            className: c.title,
            children: [
              i.default.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, n.jsx)(d.TextBadge, {
                text: i.default.Messages.NEW,
                color: r.default.BG_BRAND,
              }),
            ],
          });
        return (0, n.jsx)(s.FormItem, {
          title: x,
          required: !0,
          children: (0, n.jsx)(s.Select, {
            placeholder: "gaming",
            options: _,
            select: o,
            serialize: h,
            isSelected: e => null != E && h(e) === h(E),
          }),
        });
      }
    },
    953143: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("866227"),
        s = l.n(a),
        r = l("77078"),
        d = l("381546"),
        u = l("351825"),
        i = l("822516"),
        c = l("844808"),
        o = l("782340"),
        E = l("785548");
      function _(e) {
        let {
          className: t,
          onScheduleChange: l,
          onRecurrenceChange: a,
          onTimeChange: _,
          timeSelected: h = !0,
          schedule: x,
          recurrenceRule: A,
          showEndDate: f = !1,
          requireEndDate: m = !1,
          disableStartDateTime: D = !1,
        } = e;
        if (null == x) return null;
        let g = null,
          N = x.startDate,
          T = s(),
          S = s().add(i.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
          I = s().add(i.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
        null != A &&
          (S.add(i.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"),
          I.add(i.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
        let j = e => {
          l({ ...x, endDate: e });
        };
        return (
          f &&
            (g =
              null != x.endDate || m
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("div", {
                        className: E.doubleInput,
                        children: [
                          (0, n.jsx)(r.FormItem, {
                            title:
                              o.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, n.jsx)(r.DateInput, {
                              value: x.endDate,
                              onSelect: j,
                              minDate: x.startDate,
                              maxDate: I,
                            }),
                          }),
                          (0, n.jsx)(r.FormItem, {
                            title:
                              o.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, n.jsx)(r.TimeInput, {
                              value: x.endDate,
                              onChange: j,
                            }),
                          }),
                        ],
                      }),
                      m
                        ? null
                        : (0, n.jsx)(r.Button, {
                            onClick: () => {
                              j(void 0);
                            },
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.MIN,
                            children: (0, n.jsxs)("div", {
                              className: E.link,
                              children: [
                                (0, n.jsx)(d.default, {
                                  width: 17,
                                  height: 17,
                                  className: E.removeIcon,
                                }),
                                (0, n.jsx)(r.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    o.default.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, n.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                      j(s(x.startDate).add(1, "hour"));
                    },
                    children: (0, n.jsxs)("div", {
                      className: E.link,
                      children: [
                        (0, n.jsx)(u.default, {
                          width: 20,
                          height: 20,
                          className: E.addIcon,
                        }),
                        (0, n.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children:
                            o.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, n.jsxs)("div", {
            className: t,
            children: [
              (0, n.jsxs)("div", {
                className: E.doubleInput,
                children: [
                  (0, n.jsx)(r.FormItem, {
                    title: o.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, n.jsx)(r.DateInput, {
                      value: x.startDate,
                      onSelect: e => {
                        l({ ...x, startDate: e });
                      },
                      minDate: T,
                      maxDate: S,
                      disabled: D,
                    }),
                  }),
                  (0, n.jsx)(r.FormItem, {
                    title: o.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, n.jsx)(r.TimeInput, {
                      value: x.startDate,
                      onChange: e => {
                        e.isValid() &&
                          (null == _ || _(!0), l({ ...x, startDate: e }));
                      },
                      hideValue: !h,
                      disabled: D,
                    }),
                  }),
                ],
              }),
              g,
              null != N &&
                null != a &&
                (0, n.jsx)(c.default, {
                  onRecurrenceChange: a,
                  startDate: N,
                  recurrenceRule: A,
                }),
            ],
          })
        );
      }
    },
    686904: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        }),
        l("222007");
      var n = l("884691"),
        a = l("448993");
      function s(e, t) {
        let [l, s] = n.useState(!1),
          [r, d] = n.useState(null),
          u = async () => {
            s(!0), d(null);
            try {
              let t = await e();
              return s(!1), d(null), t;
            } catch (l) {
              let e = new a.APIError(l);
              return null == t || t(e), d(e), s(!1), null;
            }
          };
        return [u, { loading: l, error: r }];
      }
    },
  },
]);
//# sourceMappingURL=baf9674895d61ec05828.js.map
