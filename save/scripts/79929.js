(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79929"],
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
            return n;
          },
        }),
        a("424973");
      var l = a("917351"),
        s = a.n(l);
      let n = (e, t) => {
        let a = s.shuffle(e),
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
            return m;
          },
          default: function () {
            return B;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        n = a("414456"),
        r = a.n(n),
        u = a("917351"),
        i = a.n(u),
        o = a("77078"),
        c = a("84339"),
        d = a("229850"),
        E = a("145131"),
        f = a("476765"),
        C = a("561744"),
        O = a("701909"),
        N = a("713640"),
        D = a("200521"),
        _ = a("782340"),
        A = a("466713");
      let R = [
        {
          className: A.emojiSad,
          rating: D.FeedbackRating.BAD,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiNeutral,
          rating: D.FeedbackRating.NEUTRAL,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiHappy,
          rating: D.FeedbackRating.GOOD,
          classNameSelected: A.selected,
        },
      ];
      function m(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: s,
          onChangeRating: n,
        } = e;
        return (0, l.jsx)(E.default, {
          justify: E.default.Justify.BETWEEN,
          align: E.default.Align.CENTER,
          className: r(A.ratingsSelector, t),
          children: (null != s ? s : R).map(e => {
            let { rating: t, className: s, classNameSelected: u } = e;
            return (0, l.jsx)(
              o.Clickable,
              {
                onClick: () => n(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: r(s, a === t ? u : null),
                }),
              },
              t
            );
          }),
        });
      }
      function I() {
        return (0, l.jsx)(o.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: O.default.getSubmitRequestURL(),
          }),
        });
      }
      function B(e) {
        let {
            header: t,
            body: a,
            problemTitle: n,
            problems: u,
            transitionState: O,
            ratingConfigs: R,
            feedbackProblems: B = [],
            otherKey: T,
            ratingsSelectorClassName: x,
            hideDontShowCheckbox: g,
            startRating: h = null,
            onSubmit: b,
            onClose: K,
          } = e,
          p = (0, c.default)(u),
          [L, U] = s.useState(!1),
          [j, G] = s.useState(h),
          [k, F] = s.useState(null),
          [v, M] = s.useState(i.shuffle(u)),
          [S, H] = s.useState(""),
          y = (0, f.useUID)(),
          P = (0, C.default)(j),
          V = (0, C.default)(L),
          Y = (0, C.default)(k),
          z = (0, C.default)(b),
          w = (0, C.default)(S),
          q = null != k && B.includes(k);
        return (
          s.useEffect(() => {
            !i.isEqual(p, u) && M((0, N.shuffleProblems)(u, T));
          }, [u, p, T]),
          s.useEffect(
            () => () => {
              z.current({
                rating: P.current,
                problem: Y.current,
                dontShowAgain: V.current,
                feedback: w.current,
              });
            },
            []
          ),
          (0, l.jsxs)(o.ModalRoot, {
            transitionState: O,
            className: A.modalRoot,
            "aria-labelledby": y,
            children: [
              (0, l.jsxs)(o.ModalHeader, {
                separator: !1,
                className: A.headerContainer,
                children: [
                  (0, l.jsx)(o.Heading, {
                    id: y,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, l.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: A.ratingBody,
                    children: a,
                  }),
                  q
                    ? null
                    : (0, l.jsx)(m, {
                        className: r(A.emojis, x),
                        selectedRating: j,
                        onChangeRating: function (e) {
                          G(e), e === D.FeedbackRating.GOOD && K();
                        },
                        ratingConfigs: R,
                      }),
                ],
              }),
              (0, l.jsxs)(o.ModalContent, {
                className: A.content,
                children: [
                  null == j || j === D.FeedbackRating.GOOD || q
                    ? null
                    : (0, l.jsx)(o.FormItem, {
                        title: n,
                        className: A.problemInfo,
                        children: (0, l.jsx)(d.default, {
                          options: v,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !B.includes(t) && K();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !B.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, l.jsxs)(o.FormItem, {
                        title: _.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: A.problemInfo,
                        children: [
                          (0, l.jsx)(o.TextArea, {
                            value: S,
                            maxLength: D.FEEDBACK_FREEFORM_LENGTH,
                            onChange: H,
                          }),
                          (0, l.jsx)(I, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !g) &&
                (0, l.jsx)(o.ModalFooter, {
                  className: A.footer,
                  direction: E.default.Direction.HORIZONTAL,
                  children: q
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                              F(null), H("");
                            },
                            children: _.default.Messages.BACK,
                          }),
                          (0, l.jsx)(o.Button, {
                            size: o.Button.Sizes.SMALL,
                            onClick: K,
                            children: _.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, l.jsx)(o.Checkbox, {
                        type: o.Checkbox.Types.INVERTED,
                        size: 18,
                        value: L,
                        onChange: () => U(!L),
                        children: (0, l.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          children: _.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    496088: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          VideoBackgroundIssue: function () {
            return s;
          },
          default: function () {
            return O;
          },
        });
      var l,
        s,
        n = a("37983"),
        r = a("884691"),
        u = a("77078"),
        i = a("928328"),
        o = a("597517"),
        c = a("599110"),
        d = a("49111"),
        E = a("533613"),
        f = a("782340");
      ((l = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE"),
        (l.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY"),
        (l.FLICKERING = "FLICKERING"),
        (l.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG"),
        (l.OTHER = "OTHER");
      let C = ["OTHER"];
      function O(e) {
        let { analyticsData: t, transitionState: l, onClose: s } = e;
        return (
          r.useEffect(() => {
            c.default.track(d.AnalyticEvents.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, n.jsx)(i.default, {
            header: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
            body: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
            problemTitle:
              f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
            problems: [
              {
                value: "BAD_OUTLINE",
                label:
                  f.default.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE,
              },
              {
                value: "BACKGROUND_DETECTION_ACCURACY",
                label:
                  f.default.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY,
              },
              {
                value: "FLICKERING",
                label:
                  f.default.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING,
              },
              {
                value: "BACKGROUND_DETECTION_LAG",
                label:
                  f.default.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG,
              },
              {
                value: "OTHER",
                label: f.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
              },
            ],
            feedbackProblems: C,
            onSubmit: function (e) {
              var l, s, r, i;
              let { rating: C, problem: O, dontShowAgain: N, feedback: D } = e;
              if (
                (N &&
                  (0, o.hideHotspot)(
                    E.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK
                  ),
                null != C)
              )
                (l = C),
                  (s = O),
                  (r = D),
                  (i = t),
                  c.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_FEEDBACK, {
                    ...i,
                    reason: s,
                    rating: l,
                    feedback: r,
                  }),
                  null != O &&
                    (0, u.openModalLazy)(async () => {
                      let { default: e } = await a
                        .el("874600")
                        .then(a.bind(a, "874600"));
                      return t =>
                        (0, n.jsx)(e, {
                          body: f.default.Messages
                            .VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: s,
            transitionState: l,
            otherKey: "OTHER",
          })
        );
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        n = a.n(s),
        r = a("77078"),
        u = a("461380"),
        i = a("274523");
      function o(e) {
        let {
          options: t,
          onClick: a,
          className: s,
          optionClassName: o,
          hideCaret: c,
        } = e;
        return (0, l.jsx)("div", {
          className: n(i.root, s),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: n(i.option, o),
                children: [
                  (0, l.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == c ? void 0 : c(e)) &&
                    (0, l.jsx)(u.default, {
                      className: i.caret,
                      direction: u.default.Directions.RIGHT,
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
//# sourceMappingURL=b8d01d13fab7d3cf0414.js.map
