(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66735"],
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
    713640: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          shuffleProblems: function () {
            return s;
          },
        }),
        a("424973");
      var n = a("917351"),
        l = a.n(n);
      let s = (e, t) => {
        let a = l.shuffle(e),
          n = a.findIndex(e => e.value === t);
        if (n > -1) {
          let e = a[n];
          a.splice(n, 1), a.push(e);
        }
        return a;
      };
    },
    928328: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          RatingsSelector: function () {
            return C;
          },
          default: function () {
            return R;
          },
        }),
        a("222007");
      var n = a("37983"),
        l = a("884691"),
        s = a("414456"),
        r = a.n(s),
        o = a("917351"),
        u = a.n(o),
        i = a("77078"),
        c = a("84339"),
        d = a("229850"),
        f = a("145131"),
        E = a("476765"),
        _ = a("561744"),
        m = a("701909"),
        h = a("713640"),
        g = a("200521"),
        N = a("782340"),
        x = a("466713");
      let A = [
        {
          className: x.emojiSad,
          rating: g.FeedbackRating.BAD,
          classNameSelected: x.selected,
        },
        {
          className: x.emojiNeutral,
          rating: g.FeedbackRating.NEUTRAL,
          classNameSelected: x.selected,
        },
        {
          className: x.emojiHappy,
          rating: g.FeedbackRating.GOOD,
          classNameSelected: x.selected,
        },
      ];
      function C(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: l,
          onChangeRating: s,
        } = e;
        return (0, n.jsx)(f.default, {
          justify: f.default.Justify.BETWEEN,
          align: f.default.Align.CENTER,
          className: r(x.ratingsSelector, t),
          children: (null != l ? l : A).map(e => {
            let { rating: t, className: l, classNameSelected: o } = e;
            return (0, n.jsx)(
              i.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, n.jsx)("div", {
                  className: r(l, a === t ? o : null),
                }),
              },
              t
            );
          }),
        });
      }
      function I() {
        return (0, n.jsx)(i.Text, {
          className: x.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.default.getSubmitRequestURL(),
          }),
        });
      }
      function R(e) {
        let {
            header: t,
            body: a,
            problemTitle: s,
            problems: o,
            transitionState: m,
            ratingConfigs: A,
            feedbackProblems: R = [],
            otherKey: p,
            ratingsSelectorClassName: O,
            hideDontShowCheckbox: b,
            startRating: D = null,
            onSubmit: L,
            onClose: T,
          } = e,
          j = (0, c.default)(o),
          [F, S] = l.useState(!1),
          [B, k] = l.useState(D),
          [M, v] = l.useState(null),
          [K, y] = l.useState(u.shuffle(o)),
          [H, P] = l.useState(""),
          U = (0, E.useUID)(),
          G = (0, _.default)(B),
          w = (0, _.default)(F),
          z = (0, _.default)(M),
          W = (0, _.default)(L),
          q = (0, _.default)(H),
          V = null != M && R.includes(M);
        return (
          l.useEffect(() => {
            !u.isEqual(j, o) && y((0, h.shuffleProblems)(o, p));
          }, [o, j, p]),
          l.useEffect(
            () => () => {
              W.current({
                rating: G.current,
                problem: z.current,
                dontShowAgain: w.current,
                feedback: q.current,
              });
            },
            []
          ),
          (0, n.jsxs)(i.ModalRoot, {
            transitionState: m,
            className: x.modalRoot,
            "aria-labelledby": U,
            children: [
              (0, n.jsxs)(i.ModalHeader, {
                separator: !1,
                className: x.headerContainer,
                children: [
                  (0, n.jsx)(i.Heading, {
                    id: U,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: x.ratingBody,
                    children: a,
                  }),
                  V
                    ? null
                    : (0, n.jsx)(C, {
                        className: r(x.emojis, O),
                        selectedRating: B,
                        onChangeRating: function (e) {
                          k(e), e === g.FeedbackRating.GOOD && T();
                        },
                        ratingConfigs: A,
                      }),
                ],
              }),
              (0, n.jsxs)(i.ModalContent, {
                className: x.content,
                children: [
                  null == B || B === g.FeedbackRating.GOOD || V
                    ? null
                    : (0, n.jsx)(i.FormItem, {
                        title: s,
                        className: x.problemInfo,
                        children: (0, n.jsx)(d.default, {
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            v(t), !R.includes(t) && T();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !R.includes(t);
                          },
                        }),
                      }),
                  V
                    ? (0, n.jsxs)(i.FormItem, {
                        title: N.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: x.problemInfo,
                        children: [
                          (0, n.jsx)(i.TextArea, {
                            value: H,
                            maxLength: g.FEEDBACK_FREEFORM_LENGTH,
                            onChange: P,
                          }),
                          (0, n.jsx)(I, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (V || !b) &&
                (0, n.jsx)(i.ModalFooter, {
                  className: x.footer,
                  direction: f.default.Direction.HORIZONTAL,
                  children: V
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: () => {
                              v(null), P("");
                            },
                            children: N.default.Messages.BACK,
                          }),
                          (0, n.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            onClick: T,
                            children: N.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsx)(i.Checkbox, {
                        type: i.Checkbox.Types.INVERTED,
                        size: 18,
                        value: F,
                        onChange: () => S(!F),
                        children: (0, n.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children: N.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    129393: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var n,
        l,
        s = a("782340");
      function r() {
        let e = [
          {
            label: s.default.Messages.IAR_FEEDBACK_PROBLEM_COULD_NOT_FIND,
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: s.default.Messages.IAR_FEEDBACK_PROBLEM_CONFUSING_LANGUAGE,
            code: 3,
            value: "I found the language confusing",
          },
          {
            label: s.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
            code: 1,
            value: "Other",
          },
        ];
        return e;
      }
      ((n = l || (l = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (n.CONFUSING_LANGUAGE = "I found the language confusing"),
        (n.OTHER = "Other");
    },
    692812: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var n = a("599110"),
        l = a("49111");
      function s(e) {
        let {
          problem: t,
          feedback: a,
          reportType: s,
          reportId: r = null,
          rating: o = null,
          dontShowAgain: u,
        } = e;
        n.default.track(l.AnalyticEvents.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: s,
          report_id: r,
          rating: o,
          feedback: a,
          dont_show_again: u,
        });
      }
    },
    114306: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var n = a("37983"),
        l = a("884691"),
        s = a("77078"),
        r = a("229353"),
        o = a.n(r),
        u = a("928328"),
        i = a("597517"),
        c = a("599110"),
        d = a("129393"),
        f = a("692812"),
        E = a("49111"),
        _ = a("533613"),
        m = a("782340");
      let h = [o.CALL_FEEDBACK_OPTION_OTHER];
      function g(e) {
        let { reportId: t, reportType: r, ...g } = e;
        return (
          l.useEffect(() => {
            c.default.track(E.AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
              report_id: t,
              report_type: r,
            });
          }, [t, r]),
          (0, n.jsx)(u.default, {
            header: m.default.Messages.IAR_FEEDBACK_TITLE,
            body: m.default.Messages.IAR_FEEDBACK_PROMPT,
            problemTitle: m.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
            problems: (0, d.default)(),
            feedbackProblems: h,
            onSubmit: function (e) {
              let { rating: l, problem: o, dontShowAgain: u, feedback: c } = e;
              u &&
                (0, i.hideHotspot)(_.HotspotLocations.IN_APP_REPORTS_FEEDBACK),
                (0, f.default)({
                  rating: l,
                  problem: o,
                  feedback: c,
                  reportId: t,
                  reportType: r,
                  dontShowAgain: u,
                }),
                null != l &&
                  null != o &&
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await a
                      .el("874600")
                      .then(a.bind(a, "874600"));
                    return t =>
                      (0, n.jsx)(e, {
                        body: m.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                        ...t,
                      });
                  });
            },
            otherKey: o.CALL_FEEDBACK_OPTION_OTHER,
            ...g,
          })
        );
      }
    },
    229850: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("414456"),
        s = a.n(l),
        r = a("77078"),
        o = a("461380"),
        u = a("274523");
      function i(e) {
        let {
          options: t,
          onClick: a,
          className: l,
          optionClassName: i,
          hideCaret: c,
        } = e;
        return (0, n.jsx)("div", {
          className: s(u.root, l),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: s(u.option, i),
                children: [
                  (0, n.jsx)(r.Text, {
                    className: u.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == c ? void 0 : c(e)) &&
                    (0, n.jsx)(o.default, {
                      className: u.caret,
                      direction: o.default.Directions.RIGHT,
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
//# sourceMappingURL=6ddd91bc39c9c3a2bd18.js.map
