(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22222"],
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
    363787: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var s = a("37983"),
        l = a("884691"),
        n = a("77078"),
        r = a("928328"),
        u = a("621133"),
        o = a("435285"),
        i = a("597517"),
        d = a("599110"),
        c = a("49111"),
        R = a("706530"),
        E = a("533613"),
        f = a("782340");
      let _ = [R.StreamIssueReportReasons.OTHER];
      function m(e) {
        let {
            isStreamer: t,
            stream: m,
            streamApplication: S,
            onClose: T,
            transitionState: O,
            analyticsData: M,
          } = e,
          A = t
            ? f.default.Messages.STREAM_REPORT_RATING_BODY_STREAMER
            : f.default.Messages.STREAM_REPORT_RATING_BODY;
        return (
          l.useEffect(() => {
            d.default.track(c.AnalyticEvents.OPEN_MODAL, {
              type: "Stream Problem Report",
              other_user_id: m.ownerId,
              application_id: null != S ? S.id : null,
              application_name: null != S ? S.name : null,
              game_id: null != S ? S.id : null,
              source: "Stream End",
            });
          }, [m.ownerId, S]),
          (0, s.jsx)(r.default, {
            header: f.default.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
            body: A,
            problemTitle: f.default.Messages.STREAM_REPORT_LABEL,
            problems: (0, u.default)(t, !0),
            feedbackProblems: _,
            onSubmit: function (e) {
              let { rating: t, problem: l, dontShowAgain: r, feedback: u } = e;
              if (
                (r &&
                  (0, i.hideHotspot)(
                    E.HotspotLocations.REPORT_PROBLEM_POST_STREAM
                  ),
                null != t)
              )
                (0, o.default)({
                  problem: l,
                  stream: m,
                  feedback: u,
                  streamApplication: S,
                  analyticsData: M,
                  location: "Stream End",
                  rating: t,
                }),
                  null != l &&
                    (0, n.openModalLazy)(async () => {
                      let { default: e } = await a
                        .el("874600")
                        .then(a.bind(a, "874600"));
                      return t =>
                        (0, s.jsx)(e, {
                          body: f.default.Messages.STREAM_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: T,
            transitionState: O,
            otherKey: R.StreamIssueReportReasons.OTHER,
          })
        );
      }
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
      var s = a("917351"),
        l = a.n(s);
      let n = (e, t) => {
        let a = l.shuffle(e),
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
            return A;
          },
          default: function () {
            return p;
          },
        }),
        a("222007");
      var s = a("37983"),
        l = a("884691"),
        n = a("414456"),
        r = a.n(n),
        u = a("917351"),
        o = a.n(u),
        i = a("77078"),
        d = a("84339"),
        c = a("229850"),
        R = a("145131"),
        E = a("476765"),
        f = a("561744"),
        _ = a("701909"),
        m = a("713640"),
        S = a("200521"),
        T = a("782340"),
        O = a("466713");
      let M = [
        {
          className: O.emojiSad,
          rating: S.FeedbackRating.BAD,
          classNameSelected: O.selected,
        },
        {
          className: O.emojiNeutral,
          rating: S.FeedbackRating.NEUTRAL,
          classNameSelected: O.selected,
        },
        {
          className: O.emojiHappy,
          rating: S.FeedbackRating.GOOD,
          classNameSelected: O.selected,
        },
      ];
      function A(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: l,
          onChangeRating: n,
        } = e;
        return (0, s.jsx)(R.default, {
          justify: R.default.Justify.BETWEEN,
          align: R.default.Align.CENTER,
          className: r(O.ratingsSelector, t),
          children: (null != l ? l : M).map(e => {
            let { rating: t, className: l, classNameSelected: u } = e;
            return (0, s.jsx)(
              i.Clickable,
              {
                onClick: () => n(t),
                "aria-label": t,
                children: (0, s.jsx)("div", {
                  className: r(l, a === t ? u : null),
                }),
              },
              t
            );
          }),
        });
      }
      function g() {
        return (0, s.jsx)(i.Text, {
          className: O.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: _.default.getSubmitRequestURL(),
          }),
        });
      }
      function p(e) {
        let {
            header: t,
            body: a,
            problemTitle: n,
            problems: u,
            transitionState: _,
            ratingConfigs: M,
            feedbackProblems: p = [],
            otherKey: N,
            ratingsSelectorClassName: h,
            hideDontShowCheckbox: x,
            startRating: I = null,
            onSubmit: b,
            onClose: D,
          } = e,
          P = (0, d.default)(u),
          [C, L] = l.useState(!1),
          [j, v] = l.useState(I),
          [B, k] = l.useState(null),
          [G, U] = l.useState(o.shuffle(u)),
          [F, y] = l.useState(""),
          H = (0, E.useUID)(),
          Y = (0, f.default)(j),
          K = (0, f.default)(C),
          w = (0, f.default)(B),
          z = (0, f.default)(b),
          q = (0, f.default)(F),
          W = null != B && p.includes(B);
        return (
          l.useEffect(() => {
            !o.isEqual(P, u) && U((0, m.shuffleProblems)(u, N));
          }, [u, P, N]),
          l.useEffect(
            () => () => {
              z.current({
                rating: Y.current,
                problem: w.current,
                dontShowAgain: K.current,
                feedback: q.current,
              });
            },
            []
          ),
          (0, s.jsxs)(i.ModalRoot, {
            transitionState: _,
            className: O.modalRoot,
            "aria-labelledby": H,
            children: [
              (0, s.jsxs)(i.ModalHeader, {
                separator: !1,
                className: O.headerContainer,
                children: [
                  (0, s.jsx)(i.Heading, {
                    id: H,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: O.ratingBody,
                    children: a,
                  }),
                  W
                    ? null
                    : (0, s.jsx)(A, {
                        className: r(O.emojis, h),
                        selectedRating: j,
                        onChangeRating: function (e) {
                          v(e), e === S.FeedbackRating.GOOD && D();
                        },
                        ratingConfigs: M,
                      }),
                ],
              }),
              (0, s.jsxs)(i.ModalContent, {
                className: O.content,
                children: [
                  null == j || j === S.FeedbackRating.GOOD || W
                    ? null
                    : (0, s.jsx)(i.FormItem, {
                        title: n,
                        className: O.problemInfo,
                        children: (0, s.jsx)(c.default, {
                          options: G,
                          onClick: function (e) {
                            let { value: t } = e;
                            k(t), !p.includes(t) && D();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !p.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, s.jsxs)(i.FormItem, {
                        title: T.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: O.problemInfo,
                        children: [
                          (0, s.jsx)(i.TextArea, {
                            value: F,
                            maxLength: S.FEEDBACK_FREEFORM_LENGTH,
                            onChange: y,
                          }),
                          (0, s.jsx)(g, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !x) &&
                (0, s.jsx)(i.ModalFooter, {
                  className: O.footer,
                  direction: R.default.Direction.HORIZONTAL,
                  children: W
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: () => {
                              k(null), y("");
                            },
                            children: T.default.Messages.BACK,
                          }),
                          (0, s.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            onClick: D,
                            children: T.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, s.jsx)(i.Checkbox, {
                        type: i.Checkbox.Types.INVERTED,
                        size: 18,
                        value: C,
                        onChange: () => L(!C),
                        children: (0, s.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children: T.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    621133: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var s = a("706530"),
        l = a("782340");
      function n(e, t) {
        let a = [
          {
            value: s.StreamIssueReportReasons.BLACK_SCREEN,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_BLACK
              : l.default.Messages.STREAM_REPORT_BLACK,
          },
          {
            value: s.StreamIssueReportReasons.BLURRY,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_BLURRY
              : l.default.Messages.STREAM_REPORT_BLURRY,
          },
          {
            value: s.StreamIssueReportReasons.LAGGING,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_LAGGING
              : l.default.Messages.STREAM_REPORT_LAGGING,
          },
          {
            value: s.StreamIssueReportReasons.OUT_OF_SYNC,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC
              : l.default.Messages.STREAM_REPORT_OUT_OF_SYNC,
          },
          {
            value: s.StreamIssueReportReasons.AUDIO_MISSING,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING
              : l.default.Messages.STREAM_REPORT_AUDIO_MISSING,
          },
          {
            value: s.StreamIssueReportReasons.AUDIO_POOR,
            label: t
              ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_POOR
              : l.default.Messages.STREAM_REPORT_AUDIO_POOR,
          },
          {
            value: s.StreamIssueReportReasons.STREAM_STOPPED,
            label:
              l.default.Messages
                .STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY,
          },
          {
            value: s.StreamIssueReportReasons.OTHER,
            label: l.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
          },
        ];
        return a;
      }
    },
    435285: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var s = a("599110"),
        l = a("49111");
      function n(e) {
        let {
          problem: t,
          stream: a,
          feedback: n,
          streamApplication: r,
          analyticsData: u,
          location: o,
          rating: i = null,
        } = e;
        s.default.track(l.AnalyticEvents.STREAM_REPORT_PROBLEM, {
          reason: t,
          streamer_user_id: a.ownerId,
          stream_channel_id: a.channelId,
          guild_id: a.guildId,
          application_id: null != r ? r.id : null,
          application_name: null != r ? r.name : null,
          location: o,
          rating: i,
          feedback: n,
          ...u,
        });
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
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        n = a.n(l),
        r = a("77078"),
        u = a("461380"),
        o = a("274523");
      function i(e) {
        let {
          options: t,
          onClick: a,
          className: l,
          optionClassName: i,
          hideCaret: d,
        } = e;
        return (0, s.jsx)("div", {
          className: n(o.root, l),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              r.Clickable,
              {
                onClick: () => a(e),
                className: n(o.option, i),
                children: [
                  (0, s.jsx)(r.Text, {
                    className: o.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, s.jsx)(u.default, {
                      className: o.caret,
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
//# sourceMappingURL=231c397e5a10fb3f116c.js.map
