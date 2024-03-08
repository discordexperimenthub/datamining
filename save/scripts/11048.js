(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11048"],
  {
    651072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("862205");
      let r = (0, l.createExperiment)({
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
      var a = r;
    },
    27679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("299039"),
        r = n("322224"),
        a = n("822516");
      function s(e, t, n, s) {
        let u = (0, a.getBaseScheduleForRecurrence)(t, e),
          i = (0, a.areDatesIdentical)(u.startDate, n.startDate)
            ? null
            : n.startDate,
          d = (0, a.areDatesIdentical)(u.endDate, n.endDate) ? null : n.endDate;
        if (null != s)
          return (0, a.areSchedulesIdentical)(n, u)
            ? r.default.deleteGuildEventException(
                e.guild_id,
                e.id,
                s.event_exception_id
              )
            : r.default.updateGuildEventException(
                {
                  scheduled_start_time: null == i ? void 0 : i.toISOString(),
                  scheduled_end_time: null == d ? void 0 : d.toISOString(),
                  is_canceled: s.is_canceled,
                },
                e.guild_id,
                e.id,
                t
              );
        {
          let n = l.default.extractTimestamp(t);
          return r.default.createGuildEventException(
            {
              original_scheduled_start_time: new Date(n).toISOString(),
              scheduled_start_time: null == i ? void 0 : i.toISOString(),
              scheduled_end_time: null == d ? void 0 : d.toISOString(),
              is_canceled: !1,
            },
            e.guild_id,
            e.id
          );
        }
      }
    },
    229798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("37983"),
        r = n("884691"),
        a = n("77078"),
        s = n("686904"),
        u = n("27679"),
        i = n("397680"),
        d = n("822516"),
        o = n("953143"),
        c = n("782340"),
        E = n("558421");
      function _(e) {
        let {
            guildEvent: t,
            recurrenceId: n,
            transitionState: _,
            onClose: h,
          } = e,
          g = (0, i.default)(n, t.id),
          f = (0, d.getBaseScheduleForRecurrence)(n, t),
          x = (0, d.getScheduleForRecurrenceWithException)(f, g),
          [D, A] = r.useState(x),
          [N, { loading: T, error: m }] = (0, s.default)(() => {
            let e = (0, u.default)(t, n, D, g);
            return null == m && h(), e;
          });
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: _,
          children: [
            (0, l.jsx)(a.ModalHeader, {
              children: (0, l.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: c.default.Messages.EDIT_THIS_EVENT,
              }),
            }),
            (0, l.jsxs)(a.ModalContent, {
              className: E.content,
              children: [
                (0, l.jsx)(o.default, {
                  onScheduleChange: e => {
                    let { startDate: t, endDate: n } = e;
                    null != t &&
                      null != n &&
                      n.isBefore(t) &&
                      (n = t.clone().add(1, "hour")),
                      A({ startDate: t, endDate: n });
                  },
                  schedule: D,
                  showEndDate: null != D.endDate,
                  requireEndDate: null != D.endDate,
                  guildId: t.guild_id,
                  recurrenceRule: t.recurrence_rule,
                }),
                null != m
                  ? (0, l.jsx)(a.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: E.warning,
                      children: m.getAnyErrorMessage(),
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)(a.ModalFooter, {
              className: E.footer,
              children: [
                (0, l.jsx)(a.Button, {
                  color: a.Button.Colors.BRAND,
                  onClick: N,
                  className: E.button,
                  submitting: T,
                  disabled: (0, d.areSchedulesIdentical)(D, x),
                  children: c.default.Messages.SAVE_EVENT,
                }),
                (0, l.jsx)(a.Button, {
                  color: a.Button.Colors.PRIMARY,
                  onClick: h,
                  children: c.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    844808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        a = n("77078"),
        s = n("20606"),
        u = n("956089"),
        i = n("822516"),
        d = n("782340"),
        o = n("850793");
      function c(e) {
        let { startDate: t, recurrenceRule: n, onRecurrenceChange: c } = e,
          E = r.useMemo(() => (0, i.recurrenceRuleToOption)(t, n), [n, t]),
          _ = (0, i.getRecurrenceOptions)(t),
          h = e => e.toString(),
          g = (0, l.jsxs)("div", {
            className: o.title,
            children: [
              d.default.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, l.jsx)(u.TextBadge, {
                text: d.default.Messages.NEW,
                color: s.default.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(a.FormItem, {
          title: g,
          required: !0,
          children: (0, l.jsx)(a.Select, {
            placeholder: "gaming",
            options: _,
            select: c,
            serialize: h,
            isSelected: e => null != E && h(e) === h(E),
          }),
        });
      }
    },
    953143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("866227"),
        a = n.n(r),
        s = n("77078"),
        u = n("812204"),
        i = n("685665"),
        d = n("381546"),
        o = n("351825"),
        c = n("651072"),
        E = n("822516"),
        _ = n("844808"),
        h = n("49111"),
        g = n("782340"),
        f = n("785548");
      function x(e) {
        let {
            className: t,
            guildId: n,
            onScheduleChange: r,
            onRecurrenceChange: x,
            onTimeChange: D,
            timeSelected: A = !0,
            schedule: N,
            recurrenceRule: T,
            showEndDate: m = !1,
            requireEndDate: R = !1,
            disableStartDateTime: v = !1,
          } = e,
          { analyticsLocations: I } = (0, i.default)(u.default.EVENT_SETTINGS),
          { showRecurringEventsDesktop: S } = c.default.useExperiment(
            {
              guildId: null != n ? n : h.EMPTY_STRING_SNOWFLAKE_ID,
              location: I[0],
            },
            { autoTrackExposure: !1 }
          );
        if (null == N) return null;
        let M = null,
          j = N.startDate,
          p = a(),
          C = a().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
          B = a().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
        null != T &&
          (C.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"),
          B.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
        let k = e => {
          r({ ...N, endDate: e });
        };
        return (
          null != j &&
            c.default.trackExposure({
              guildId: null != n ? n : h.EMPTY_STRING_SNOWFLAKE_ID,
              location: I[0],
            }),
          m &&
            (M =
              null != N.endDate || R
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: f.doubleInput,
                        children: [
                          (0, l.jsx)(s.FormItem, {
                            title:
                              g.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: R,
                            children: (0, l.jsx)(s.DateInput, {
                              value: N.endDate,
                              onSelect: k,
                              minDate: N.startDate,
                              maxDate: B,
                            }),
                          }),
                          (0, l.jsx)(s.FormItem, {
                            title:
                              g.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: R,
                            children: (0, l.jsx)(s.TimeInput, {
                              value: N.endDate,
                              onChange: k,
                            }),
                          }),
                        ],
                      }),
                      R
                        ? null
                        : (0, l.jsx)(s.Button, {
                            onClick: () => {
                              k(void 0);
                            },
                            look: s.Button.Looks.BLANK,
                            size: s.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: f.link,
                              children: [
                                (0, l.jsx)(d.default, {
                                  width: 17,
                                  height: 17,
                                  className: f.removeIcon,
                                }),
                                (0, l.jsx)(s.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    g.default.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                      k(a(N.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: f.link,
                      children: [
                        (0, l.jsx)(o.default, {
                          width: 20,
                          height: 20,
                          className: f.addIcon,
                        }),
                        (0, l.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          children:
                            g.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, l.jsxs)("div", {
            className: t,
            children: [
              (0, l.jsxs)("div", {
                className: f.doubleInput,
                children: [
                  (0, l.jsx)(s.FormItem, {
                    title: g.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, l.jsx)(s.DateInput, {
                      value: N.startDate,
                      onSelect: e => {
                        r({ ...N, startDate: e });
                      },
                      minDate: p,
                      maxDate: C,
                      disabled: v,
                    }),
                  }),
                  (0, l.jsx)(s.FormItem, {
                    title: g.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, l.jsx)(s.TimeInput, {
                      value: N.startDate,
                      onChange: e => {
                        e.isValid() &&
                          (null == D || D(!0), r({ ...N, startDate: e }));
                      },
                      hideValue: !A,
                      disabled: v,
                    }),
                  }),
                ],
              }),
              M,
              S &&
                null != j &&
                null != x &&
                (0, l.jsx)(_.default, {
                  onRecurrenceChange: x,
                  startDate: j,
                  recurrenceRule: T,
                }),
            ],
          })
        );
      }
    },
    686904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l = n("884691"),
        r = n("448993");
      function a(e, t) {
        let [n, a] = l.useState(!1),
          [s, u] = l.useState(null),
          i = async () => {
            a(!0), u(null);
            try {
              let t = await e();
              return a(!1), u(null), t;
            } catch (n) {
              let e = new r.APIError(n);
              return null == t || t(e), u(e), a(!1), null;
            }
          };
        return [i, { loading: n, error: s }];
      }
    },
  },
]);
//# sourceMappingURL=eeca10dcdeac75552dcb.js.map
