(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65568"],
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
    95358: function (e, t, a) {
      "use strict";
      e.exports = a.p + "2b7cbcd05ffd2e86ba7a.svg";
    },
    748785: function (e, t, a) {
      "use strict";
      e.exports = a.p + "6e910d869a4ddca77fe2.svg";
    },
    713640: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          shuffleProblems: function () {
            return l;
          },
        }),
        a("424973");
      var s = a("917351"),
        n = a.n(s);
      let l = (e, t) => {
        let a = n.shuffle(e),
          s = a.findIndex(e => e.value === t);
        if (s > -1) {
          let e = a[s];
          a.splice(s, 1), a.push(e);
        }
        return a;
      };
    },
    928328: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          RatingsSelector: function () {
            return R;
          },
          default: function () {
            return j;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        l = a("414456"),
        r = a.n(l),
        c = a("917351"),
        i = a.n(c),
        o = a("77078"),
        u = a("84339"),
        d = a("229850"),
        f = a("145131"),
        m = a("476765"),
        g = a("561744"),
        x = a("701909"),
        h = a("713640"),
        E = a("200521"),
        b = a("782340"),
        S = a("466713");
      let N = [
        {
          className: S.emojiSad,
          rating: E.FeedbackRating.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: E.FeedbackRating.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: E.FeedbackRating.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function R(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: n,
          onChangeRating: l,
        } = e;
        return (0, s.jsx)(f.default, {
          justify: f.default.Justify.BETWEEN,
          align: f.default.Align.CENTER,
          className: r(S.ratingsSelector, t),
          children: (null != n ? n : N).map(e => {
            let { rating: t, className: n, classNameSelected: c } = e;
            return (0, s.jsx)(
              o.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, s.jsx)("div", {
                  className: r(n, a === t ? c : null),
                }),
              },
              t
            );
          }),
        });
      }
      function p() {
        return (0, s.jsx)(o.Text, {
          className: S.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: b.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: x.default.getSubmitRequestURL(),
          }),
        });
      }
      function j(e) {
        let {
            header: t,
            body: a,
            problemTitle: l,
            problems: c,
            transitionState: x,
            ratingConfigs: N,
            feedbackProblems: j = [],
            otherKey: C,
            ratingsSelectorClassName: k,
            hideDontShowCheckbox: M,
            startRating: A = null,
            onSubmit: D,
            onClose: v,
          } = e,
          F = (0, u.default)(c),
          [T, B] = n.useState(!1),
          [I, O] = n.useState(A),
          [_, L] = n.useState(null),
          [y, H] = n.useState(i.shuffle(c)),
          [U, K] = n.useState(""),
          G = (0, m.useUID)(),
          P = (0, g.default)(I),
          w = (0, g.default)(T),
          z = (0, g.default)(_),
          q = (0, g.default)(D),
          W = (0, g.default)(U),
          Y = null != _ && j.includes(_);
        return (
          n.useEffect(() => {
            !i.isEqual(F, c) && H((0, h.shuffleProblems)(c, C));
          }, [c, F, C]),
          n.useEffect(
            () => () => {
              q.current({
                rating: P.current,
                problem: z.current,
                dontShowAgain: w.current,
                feedback: W.current,
              });
            },
            []
          ),
          (0, s.jsxs)(o.ModalRoot, {
            transitionState: x,
            className: S.modalRoot,
            "aria-labelledby": G,
            children: [
              (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
                children: [
                  (0, s.jsx)(o.Heading, {
                    id: G,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: S.ratingBody,
                    children: a,
                  }),
                  Y
                    ? null
                    : (0, s.jsx)(R, {
                        className: r(S.emojis, k),
                        selectedRating: I,
                        onChangeRating: function (e) {
                          O(e), e === E.FeedbackRating.GOOD && v();
                        },
                        ratingConfigs: N,
                      }),
                ],
              }),
              (0, s.jsxs)(o.ModalContent, {
                className: S.content,
                children: [
                  null == I || I === E.FeedbackRating.GOOD || Y
                    ? null
                    : (0, s.jsx)(o.FormItem, {
                        title: l,
                        className: S.problemInfo,
                        children: (0, s.jsx)(d.default, {
                          options: y,
                          onClick: function (e) {
                            let { value: t } = e;
                            L(t), !j.includes(t) && v();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !j.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(o.FormItem, {
                        title: b.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: S.problemInfo,
                        children: [
                          (0, s.jsx)(o.TextArea, {
                            value: U,
                            maxLength: E.FEEDBACK_FREEFORM_LENGTH,
                            onChange: K,
                          }),
                          (0, s.jsx)(p, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !M) &&
                (0, s.jsx)(o.ModalFooter, {
                  className: S.footer,
                  direction: f.default.Direction.HORIZONTAL,
                  children: Y
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                              L(null), K("");
                            },
                            children: b.default.Messages.BACK,
                          }),
                          (0, s.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: v,
                            children: b.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, s.jsx)(o.Checkbox, {
                        type: o.Checkbox.Types.INVERTED,
                        size: 18,
                        value: T,
                        onChange: () => B(!T),
                        children: (0, s.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          children: b.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    747194: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("928328"),
        l = a("995307"),
        r = a("200521"),
        c = a("782340"),
        i = a("215158");
      let o = [
        {
          className: i.emojiThumbsUp,
          rating: r.FeedbackRating.GOOD,
          classNameSelected: i.selected,
        },
        {
          className: i.emojiThumbsDown,
          rating: r.FeedbackRating.BAD,
          classNameSelected: i.selected,
        },
      ];
      function u(e) {
        let { transitionState: t, startRating: a, onClose: r, onSubmit: u } = e;
        return (0, s.jsx)(n.default, {
          header: c.default.Messages.SUMMARIES_FEEDBACK_HEADER,
          body: c.default.Messages.SUMMARIES_FEEDBACK_BODY,
          problemTitle: c.default.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
          onSubmit: u,
          onClose: r,
          ratingConfigs: o,
          transitionState: t,
          problems: (0, l.getSummaryFeedbackReasons)(),
          ratingsSelectorClassName: i.ratingsSelector,
          feedbackProblems: [l.SummaryFeedbackReasons.OTHER],
          otherKey: l.SummaryFeedbackReasons.OTHER,
          startRating: a,
          hideDontShowCheckbox: !0,
        });
      }
    },
    229850: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        l = a.n(n),
        r = a("77078"),
        c = a("461380"),
        i = a("274523");
      function o(e) {
        let {
          options: t,
          onClick: a,
          className: n,
          optionClassName: o,
          hideCaret: u,
        } = e;
        return (0, s.jsx)("div", {
          className: l(i.root, n),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: l(i.option, o),
                children: [
                  (0, s.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, s.jsx)(c.default, {
                      className: i.caret,
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
//# sourceMappingURL=da65c25d39b00e60886f.js.map
