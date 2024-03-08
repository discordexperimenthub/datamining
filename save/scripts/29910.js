(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29910"],
  {
    59407: function (e, t, a) {
      "use strict";
      e.exports = a.p + "9e81dce3b3235147e088.svg";
    },
    609872: function (e, t, a) {
      "use strict";
      e.exports = a.p + "d2957a53837bc444a305.svg";
    },
    407648: function (e, t, a) {
      "use strict";
      e.exports = a.p + "5161f8a4f8050a34ef98.svg";
    },
    575057: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("954016"),
        n = a("782340");
      function s(e) {
        let t = [
          {
            value: l.ActivityFeedbackReasons.FAILED_LOAD,
            label: e
              ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD
              : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD,
          },
          {
            value: l.ActivityFeedbackReasons.LAGGING,
            label: e
              ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING
              : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING,
          },
          {
            value: l.ActivityFeedbackReasons.CONFUSING,
            label: e
              ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING
              : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING,
          },
          {
            value: l.ActivityFeedbackReasons.NOT_FUN,
            label: e
              ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN
              : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN,
          },
          {
            value: l.ActivityFeedbackReasons.OTHER,
            label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
          },
        ];
        return t;
      }
    },
    646559: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("599110"),
        n = a("49111");
      function s(e) {
        let {
          problem: t,
          channel: a,
          feedback: s,
          activityApplication: i,
          analyticsData: c,
          location: o,
          rating: u = null,
        } = e;
        l.default.track(n.AnalyticEvents.ACTIVITY_REPORT_PROBLEM, {
          reason: t,
          guild_id: a.getGuildId(),
          channel_id: a.id,
          application_id: null == i ? void 0 : i.id,
          application_name: null == i ? void 0 : i.name,
          location: o,
          rating: u,
          feedback: s,
          ...c,
        });
      }
    },
    959350: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("77078"),
        i = a("928328"),
        c = a("597517"),
        o = a("599110"),
        u = a("575057"),
        d = a("646559"),
        r = a("954016"),
        f = a("49111"),
        T = a("533613"),
        I = a("782340");
      let _ = [
        r.ActivityFeedbackReasons.OTHER,
        r.ActivityFeedbackReasons.NOT_FUN,
      ];
      function A(e) {
        let {
          channel: t,
          activityApplication: A,
          onClose: E,
          transitionState: R,
          analyticsData: m,
        } = e;
        return (
          n.useEffect(() => {
            o.default.track(f.AnalyticEvents.OPEN_MODAL, {
              type: "Activity Feedback Modal",
              application_id: A.id,
              application_name: A.name,
              game_id: A.id,
              source: "Activity End",
            });
          }, [A]),
          (0, l.jsx)(i.default, {
            header:
              I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
                applicationName: A.name,
              }),
            body: I.default.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
            problemTitle:
              I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
            problems: (0, u.default)(!0),
            feedbackProblems: _,
            onSubmit: function (e) {
              let { rating: n, problem: i, dontShowAgain: u, feedback: r } = e;
              if (
                (u &&
                  !(function (e) {
                    let { applicationId: t, rating: a } = e;
                    o.default.track(
                      f.AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW,
                      { application_id: t, rating: a }
                    ),
                      (0, c.hideHotspot)(
                        T.HotspotLocations.POST_ACTIVITY_FEEDBACK
                      );
                  })({ rating: n, applicationId: A.id }),
                null != n)
              )
                (0, d.default)({
                  problem: i,
                  channel: t,
                  feedback: r,
                  activityApplication: A,
                  analyticsData: m,
                  location: "Activity End",
                  rating: n,
                }),
                  null != i &&
                    (0, s.openModalLazy)(async () => {
                      let { default: e } = await a
                        .el("874600")
                        .then(a.bind(a, "874600"));
                      return t =>
                        (0, l.jsx)(e, {
                          body: I.default.Messages.ACTIVITY_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: E,
            transitionState: R,
            otherKey: r.ActivityFeedbackReasons.OTHER,
          })
        );
      }
    },
    713640: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          shuffleProblems: function () {
            return s;
          },
        }),
        a("424973");
      var l = a("917351"),
        n = a.n(l);
      let s = (e, t) => {
        let a = n.shuffle(e),
          l = a.findIndex(e => e.value === t);
        if (l > -1) {
          let e = a[l];
          a.splice(l, 1), a.push(e);
        }
        return a;
      };
    },
    928328: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          RatingsSelector: function () {
            return N;
          },
          default: function () {
            return g;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        c = a("917351"),
        o = a.n(c),
        u = a("77078"),
        d = a("84339"),
        r = a("229850"),
        f = a("145131"),
        T = a("476765"),
        I = a("561744"),
        _ = a("701909"),
        A = a("713640"),
        E = a("200521"),
        R = a("782340"),
        m = a("466713");
      let C = [
        {
          className: m.emojiSad,
          rating: E.FeedbackRating.BAD,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiNeutral,
          rating: E.FeedbackRating.NEUTRAL,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiHappy,
          rating: E.FeedbackRating.GOOD,
          classNameSelected: m.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: n,
          onChangeRating: s,
        } = e;
        return (0, l.jsx)(f.default, {
          justify: f.default.Justify.BETWEEN,
          align: f.default.Align.CENTER,
          className: i(m.ratingsSelector, t),
          children: (null != n ? n : C).map(e => {
            let { rating: t, className: n, classNameSelected: c } = e;
            return (0, l.jsx)(
              u.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: i(n, a === t ? c : null),
                }),
              },
              t
            );
          }),
        });
      }
      function O() {
        return (0, l.jsx)(u.Text, {
          className: m.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: R.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: _.default.getSubmitRequestURL(),
          }),
        });
      }
      function g(e) {
        let {
            header: t,
            body: a,
            problemTitle: s,
            problems: c,
            transitionState: _,
            ratingConfigs: C,
            feedbackProblems: g = [],
            otherKey: p,
            ratingsSelectorClassName: b,
            hideDontShowCheckbox: x,
            startRating: h = null,
            onSubmit: v,
            onClose: k,
          } = e,
          F = (0, d.default)(c),
          [D, M] = n.useState(!1),
          [j, S] = n.useState(h),
          [L, y] = n.useState(null),
          [Y, V] = n.useState(o.shuffle(c)),
          [P, B] = n.useState(""),
          G = (0, T.useUID)(),
          H = (0, I.default)(j),
          U = (0, I.default)(D),
          K = (0, I.default)(L),
          z = (0, I.default)(v),
          w = (0, I.default)(P),
          W = null != L && g.includes(L);
        return (
          n.useEffect(() => {
            !o.isEqual(F, c) && V((0, A.shuffleProblems)(c, p));
          }, [c, F, p]),
          n.useEffect(
            () => () => {
              z.current({
                rating: H.current,
                problem: K.current,
                dontShowAgain: U.current,
                feedback: w.current,
              });
            },
            []
          ),
          (0, l.jsxs)(u.ModalRoot, {
            transitionState: _,
            className: m.modalRoot,
            "aria-labelledby": G,
            children: [
              (0, l.jsxs)(u.ModalHeader, {
                separator: !1,
                className: m.headerContainer,
                children: [
                  (0, l.jsx)(u.Heading, {
                    id: G,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: m.ratingBody,
                    children: a,
                  }),
                  W
                    ? null
                    : (0, l.jsx)(N, {
                        className: i(m.emojis, b),
                        selectedRating: j,
                        onChangeRating: function (e) {
                          S(e), e === E.FeedbackRating.GOOD && k();
                        },
                        ratingConfigs: C,
                      }),
                ],
              }),
              (0, l.jsxs)(u.ModalContent, {
                className: m.content,
                children: [
                  null == j || j === E.FeedbackRating.GOOD || W
                    ? null
                    : (0, l.jsx)(u.FormItem, {
                        title: s,
                        className: m.problemInfo,
                        children: (0, l.jsx)(r.default, {
                          options: Y,
                          onClick: function (e) {
                            let { value: t } = e;
                            y(t), !g.includes(t) && k();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !g.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, l.jsxs)(u.FormItem, {
                        title: R.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: m.problemInfo,
                        children: [
                          (0, l.jsx)(u.TextArea, {
                            value: P,
                            maxLength: E.FEEDBACK_FREEFORM_LENGTH,
                            onChange: B,
                          }),
                          (0, l.jsx)(O, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !x) &&
                (0, l.jsx)(u.ModalFooter, {
                  className: m.footer,
                  direction: f.default.Direction.HORIZONTAL,
                  children: W
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              y(null), B("");
                            },
                            children: R.default.Messages.BACK,
                          }),
                          (0, l.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: k,
                            children: R.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, l.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        size: 18,
                        value: D,
                        onChange: () => M(!D),
                        children: (0, l.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          children: R.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    229850: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        s = a.n(n),
        i = a("77078"),
        c = a("461380"),
        o = a("274523");
      function u(e) {
        let {
          options: t,
          onClick: a,
          className: n,
          optionClassName: u,
          hideCaret: d,
        } = e;
        return (0, l.jsx)("div", {
          className: s(o.root, n),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              i.Clickable,
              {
                onClick: () => a(e),
                className: s(o.option, u),
                children: [
                  (0, l.jsx)(i.Text, {
                    className: o.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, l.jsx)(c.default, {
                      className: o.caret,
                      direction: c.default.Directions.RIGHT,
                    }),
                ],
              },
              t
            )
          ),
        });
      }
    },
  },
]);
//# sourceMappingURL=1ed6007b2710654b170a.js.map
