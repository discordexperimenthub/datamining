(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82840"],
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
      var n = a("917351"),
        s = a.n(n);
      let l = (e, t) => {
        let a = s.shuffle(e),
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
            return R;
          },
          default: function () {
            return C;
          },
        }),
        a("222007");
      var n = a("37983"),
        s = a("884691"),
        l = a("414456"),
        r = a.n(l),
        i = a("917351"),
        c = a.n(i),
        o = a("77078"),
        d = a("84339"),
        u = a("229850"),
        f = a("145131"),
        m = a("476765"),
        x = a("561744"),
        E = a("701909"),
        g = a("713640"),
        h = a("200521"),
        N = a("782340"),
        S = a("466713");
      let j = [
        {
          className: S.emojiSad,
          rating: h.FeedbackRating.BAD,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiNeutral,
          rating: h.FeedbackRating.NEUTRAL,
          classNameSelected: S.selected,
        },
        {
          className: S.emojiHappy,
          rating: h.FeedbackRating.GOOD,
          classNameSelected: S.selected,
        },
      ];
      function R(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, n.jsx)(f.default, {
          justify: f.default.Justify.BETWEEN,
          align: f.default.Align.CENTER,
          className: r(S.ratingsSelector, t),
          children: (null != s ? s : j).map(e => {
            let { rating: t, className: s, classNameSelected: i } = e;
            return (0, n.jsx)(
              o.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, n.jsx)("div", {
                  className: r(s, a === t ? i : null),
                }),
              },
              t
            );
          }),
        });
      }
      function T() {
        return (0, n.jsx)(o.Text, {
          className: S.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: E.default.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            header: t,
            body: a,
            problemTitle: l,
            problems: i,
            transitionState: E,
            ratingConfigs: j,
            feedbackProblems: C = [],
            otherKey: p,
            ratingsSelectorClassName: b,
            hideDontShowCheckbox: M,
            startRating: _ = null,
            onSubmit: F,
            onClose: A,
          } = e,
          k = (0, d.default)(i),
          [v, B] = s.useState(!1),
          [D, I] = s.useState(_),
          [O, U] = s.useState(null),
          [L, y] = s.useState(c.shuffle(i)),
          [H, K] = s.useState(""),
          G = (0, m.useUID)(),
          Y = (0, x.default)(D),
          z = (0, x.default)(v),
          P = (0, x.default)(O),
          w = (0, x.default)(F),
          q = (0, x.default)(H),
          W = null != O && C.includes(O);
        return (
          s.useEffect(() => {
            !c.isEqual(k, i) && y((0, g.shuffleProblems)(i, p));
          }, [i, k, p]),
          s.useEffect(
            () => () => {
              w.current({
                rating: Y.current,
                problem: P.current,
                dontShowAgain: z.current,
                feedback: q.current,
              });
            },
            []
          ),
          (0, n.jsxs)(o.ModalRoot, {
            transitionState: E,
            className: S.modalRoot,
            "aria-labelledby": G,
            children: [
              (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                className: S.headerContainer,
                children: [
                  (0, n.jsx)(o.Heading, {
                    id: G,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: S.ratingBody,
                    children: a,
                  }),
                  W
                    ? null
                    : (0, n.jsx)(R, {
                        className: r(S.emojis, b),
                        selectedRating: D,
                        onChangeRating: function (e) {
                          I(e), e === h.FeedbackRating.GOOD && A();
                        },
                        ratingConfigs: j,
                      }),
                ],
              }),
              (0, n.jsxs)(o.ModalContent, {
                className: S.content,
                children: [
                  null == D || D === h.FeedbackRating.GOOD || W
                    ? null
                    : (0, n.jsx)(o.FormItem, {
                        title: l,
                        className: S.problemInfo,
                        children: (0, n.jsx)(u.default, {
                          options: L,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !C.includes(t) && A();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !C.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, n.jsxs)(o.FormItem, {
                        title: N.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: S.problemInfo,
                        children: [
                          (0, n.jsx)(o.TextArea, {
                            value: H,
                            maxLength: h.FEEDBACK_FREEFORM_LENGTH,
                            onChange: K,
                          }),
                          (0, n.jsx)(T, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !M) &&
                (0, n.jsx)(o.ModalFooter, {
                  className: S.footer,
                  direction: f.default.Direction.HORIZONTAL,
                  children: W
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), K("");
                            },
                            children: N.default.Messages.BACK,
                          }),
                          (0, n.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: A,
                            children: N.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsx)(o.Checkbox, {
                        type: o.Checkbox.Types.INVERTED,
                        size: 18,
                        value: v,
                        onChange: () => B(!v),
                        children: (0, n.jsx)(o.Text, {
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
    664654: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("599110"),
        s = a("49111");
      function l(e) {
        let { rating: t = null } = e;
        n.default.track(
          s.AnalyticEvents.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED,
          { rating: t }
        );
      }
    },
    123592: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        }),
        a("222007");
      var n = a("37983"),
        s = a("884691"),
        l = a("77078"),
        r = a("928328"),
        i = a("476765"),
        c = a("664654"),
        o = a("49111"),
        d = a("200521"),
        u = a("782340"),
        f = a("900949");
      let m = [
        {
          className: f.emojiThumbsUp,
          rating: d.FeedbackRating.GOOD,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiThumbsDown,
          rating: d.FeedbackRating.BAD,
          classNameSelected: f.selected,
        },
      ];
      function x(e) {
        let [t, d] = s.useState(null),
          x = (0, i.useUID)();
        return (0, n.jsxs)(l.ModalRoot, {
          transitionState: e.transitionState,
          "aria-labelledby": x,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              className: f.headerContainer,
              children: [
                (0, n.jsx)(l.Heading, {
                  id: x,
                  variant: "heading-xl/extrabold",
                  color: "none",
                  children:
                    u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT,
                }),
                (0, n.jsx)(l.Text, {
                  variant: "text-md/normal",
                  className: f.ratingBody,
                  children:
                    u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER,
                }),
              ],
            }),
            (0, n.jsx)(l.ModalContent, {
              className: f.modalBody,
              children: (0, n.jsx)(r.RatingsSelector, {
                ratingConfigs: m,
                className: f.ratingsSelector,
                selectedRating: t,
                onChangeRating: function (t) {
                  var s;
                  d(t),
                    null != (s = t) &&
                      ((0, c.default)({ rating: s }),
                      e.onClose(),
                      (0, l.openModalLazy)(async () => {
                        let { default: e } = await a
                          .el("874600")
                          .then(a.bind(a, "874600"));
                        return t =>
                          (0, n.jsx)(e, {
                            body: u.default.Messages
                              .SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
                            ...t,
                          });
                      }));
                },
              }),
            }),
            (0, n.jsx)(l.ModalFooter, {
              className: f.ratingsFooter,
              children: (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  u.default.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
                    safetyCenterUrl: o.MarketingURLs.SAFETY_CENTER,
                  }),
              }),
            }),
          ],
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
      var n = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        r = a("77078"),
        i = a("461380"),
        c = a("274523");
      function o(e) {
        let {
          options: t,
          onClick: a,
          className: s,
          optionClassName: o,
          hideCaret: d,
        } = e;
        return (0, n.jsx)("div", {
          className: l(c.root, s),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: l(c.option, o),
                children: [
                  (0, n.jsx)(r.Text, {
                    className: c.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, n.jsx)(i.default, {
                      className: c.caret,
                      direction: i.default.Directions.RIGHT,
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
//# sourceMappingURL=6a8edfd6fe5aca9ca997.js.map
