(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30494"],
  {
    59407: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9e81dce3b3235147e088.svg";
    },
    609872: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d2957a53837bc444a305.svg";
    },
    407648: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5161f8a4f8050a34ef98.svg";
    },
    200521: function (e, t, n) {
      "use strict";
      var s, a, l, r;
      n.r(t),
        n.d(t, {
          FeedbackRating: function () {
            return s;
          },
          FEEDBACK_FREEFORM_LENGTH: function () {
            return u;
          },
          FeedbackType: function () {
            return a;
          },
          FeedbackTypePrecedence: function () {
            return o;
          },
        }),
        n("808653"),
        ((l = s || (s = {})).BAD = "bad"),
        (l.NEUTRAL = "neutral"),
        (l.GOOD = "good");
      let u = 1024;
      ((r = a || (a = {}))[(r.VOICE = 0)] = "VOICE"),
        (r[(r.STREAM = 1)] = "STREAM"),
        (r[(r.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
        (r[(r.ACTIVITY = 3)] = "ACTIVITY"),
        (r[(r.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS");
      let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({ ...e, [t]: n }), {});
    },
    713640: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          shuffleProblems: function () {
            return l;
          },
        }),
        n("424973");
      var s = n("917351"),
        a = n.n(s);
      let l = (e, t) => {
        let n = a.shuffle(e),
          s = n.findIndex(e => e.value === t);
        if (s > -1) {
          let e = n[s];
          n.splice(s, 1), n.push(e);
        }
        return n;
      };
    },
    866380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("917351"),
        r = n.n(l),
        u = n("77078"),
        o = n("84339"),
        i = n("385042"),
        d = n("229850"),
        c = n("145131"),
        E = n("476765"),
        f = n("561744"),
        I = n("258078"),
        C = n("701909"),
        D = n("713640"),
        T = n("200521"),
        A = n("782340"),
        _ = n("466713");
      function L() {
        return (0, s.jsx)(u.Text, {
          className: _.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: C.default.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        let {
            header: t,
            body: n,
            problems: l,
            transitionState: C,
            feedbackProblems: N = [],
            otherKey: R,
            hasCloseButton: h,
            onSubmit: m,
            onClose: O,
            canDismissForever: v = !0,
            showHelpdeskLink: x = !0,
          } = e,
          U = (0, o.default)(l),
          [S, g] = a.useState(!1),
          [M, B] = a.useState(null),
          [V, b] = a.useState(r.shuffle(l)),
          [p, F] = a.useState(""),
          G = (0, E.useUID)(),
          j = (0, f.default)(S),
          k = (0, f.default)(M),
          K = (0, f.default)(m),
          P = (0, f.default)(p),
          y = null != M && N.includes(M);
        return (
          a.useEffect(() => {
            !r.isEqual(U, l) && b((0, D.shuffleProblems)(l, R));
          }, [l, U, R]),
          a.useEffect(
            () => () => {
              K.current({
                problem: k.current,
                dontShowAgain: j.current,
                feedback: P.current,
              });
            },
            []
          ),
          (0, s.jsxs)(u.ModalRoot, {
            transitionState: C,
            className: _.modalRoot,
            "aria-labelledby": G,
            children: [
              (0, s.jsx)(i.default, {}),
              (0, s.jsxs)(u.ModalHeader, {
                separator: !1,
                className: _.headerContainer,
                children: [
                  (0, s.jsx)(I.default, {
                    id: G,
                    className: _.header,
                    color: I.default.Colors.CUSTOM,
                    size: I.default.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, s.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: _.ratingBody,
                    children: n,
                  }),
                  h
                    ? (0, s.jsx)(u.ModalCloseButton, {
                        className: _.modalCloseButton,
                        onClick: O,
                      })
                    : null,
                ],
              }),
              (0, s.jsxs)(u.ModalContent, {
                className: _.content,
                children: [
                  y
                    ? null
                    : (0, s.jsx)(u.FormItem, {
                        className: _.problemInfo,
                        children: (0, s.jsx)(d.default, {
                          options: V,
                          onClick: function (e) {
                            let { value: t } = e;
                            B(t), !N.includes(t) && O();
                          },
                        }),
                      }),
                  y
                    ? (0, s.jsxs)(u.FormItem, {
                        title: A.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: _.problemInfo,
                        children: [
                          (0, s.jsx)(u.TextArea, {
                            value: p,
                            maxLength: T.FEEDBACK_FREEFORM_LENGTH,
                            onChange: F,
                          }),
                          x ? (0, s.jsx)(L, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              v || y
                ? (0, s.jsx)(u.ModalFooter, {
                    className: _.footer,
                    direction: c.default.Direction.HORIZONTAL,
                    children: y
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(u.Button, {
                              size: u.Button.Sizes.SMALL,
                              look: u.Button.Looks.LINK,
                              color: u.Button.Colors.PRIMARY,
                              onClick: () => {
                                B(null), F("");
                              },
                              children: A.default.Messages.BACK,
                            }),
                            (0, s.jsx)(u.Button, {
                              size: u.Button.Sizes.SMALL,
                              onClick: O,
                              children: A.default.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : v
                        ? (0, s.jsx)(u.Checkbox, {
                            size: 18,
                            type: u.Checkbox.Types.INVERTED,
                            value: S,
                            onChange: () => g(!S),
                            children: (0, s.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: A.default.Messages.DONT_SHOW_AGAIN,
                            }),
                          })
                        : null,
                  })
                : null,
            ],
          })
        );
      }
    },
    385042: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("884691"),
        a = n("69927"),
        l = n("773336"),
        r = n("782340");
      function u() {
        return (
          s.useEffect(() => {
            !l.isPlatformEmbedded &&
              (0, a.flashPageTitle)({
                messages: [
                  r.default.Messages.GO_LIVE_HEY,
                  r.default.Messages.GO_LIVE_LOOK,
                  r.default.Messages.GO_LIVE_LISTEN,
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    732018: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildLeaveReasons: function () {
            return a;
          },
          getGuildLeaveReasons: function () {
            return r;
          },
        });
      var s,
        a,
        l = n("782340");
      function r() {
        return [
          {
            value: "UNINTERESTED",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED,
          },
          {
            value: "ACCIDENT",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT,
          },
          {
            value: "INACTIVE",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE,
          },
          {
            value: "UNCOMFORTABLE",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE,
          },
          {
            value: "DISRUPTIVE",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE,
          },
          {
            value: "OVERACTIVE",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE,
          },
          {
            value: "CONFUSING",
            label: l.default.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING,
          },
          {
            value: "OTHER",
            label: l.default.Messages.GUILD_DELETE_FEEDBACK_OTHER,
          },
        ];
      }
      ((s = a || (a = {})).UNINTERESTED = "UNINTERESTED"),
        (s.ACCIDENT = "ACCIDENT"),
        (s.INACTIVE = "INACTIVE"),
        (s.UNCOMFORTABLE = "UNCOMFORTABLE"),
        (s.DISRUPTIVE = "DISRUPTIVE"),
        (s.OVERACTIVE = "OVERACTIVE"),
        (s.CONFUSING = "CONFUSING"),
        (s.OTHER = "OTHER");
    },
    489505: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("599110"),
        a = n("49111");
      function l(e, t, n, l) {
        s.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
          report_name: "Guild Leave",
          guild_id: e,
          reason: t,
          feedback: n,
          skipped: l,
        });
      }
    },
    953750: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        l = n("775560"),
        r = n("151426"),
        u = n("77078"),
        o = n("10641"),
        i = n("866380"),
        d = n("599110"),
        c = n("489505"),
        E = n("732018"),
        f = n("49111"),
        I = n("782340");
      function C(e) {
        let { transitionState: t, onClose: C, guildId: D, guildName: T } = e,
          A = (0, l.useLazyValue)(E.getGuildLeaveReasons);
        return (
          a.useEffect(() => {
            d.default.track(f.AnalyticEvents.OPEN_MODAL, {
              type: "Guild Leave Report",
            });
          }, []),
          (0, s.jsx)(i.default, {
            header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
            body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
              server: T,
            }),
            problems: A,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: a, feedback: l } = e;
              a &&
                (0, o.markDismissibleContentAsDismissed)(
                  r.DismissibleContent.GUILD_LEAVE_FEEDBACK
                );
              let i = null == t;
              (0, c.default)(D, t, l, i),
                !i &&
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("874600")
                      .then(n.bind(n, "874600"));
                    return t =>
                      (0, s.jsx)(e, {
                        body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                        ...t,
                      });
                  });
            },
            onClose: C,
            transitionState: t,
            otherKey: E.GuildLeaveReasons.OTHER,
            hasCloseButton: !0,
          })
        );
      }
    },
    229850: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        r = n("77078"),
        u = n("461380"),
        o = n("274523");
      function i(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: i,
          hideCaret: d,
        } = e;
        return (0, s.jsx)("div", {
          className: l(o.root, a),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: l(o.option, i),
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
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return r;
          },
          useUID: function () {
            return u;
          },
          UID: function () {
            return o;
          },
        });
      var s = n("995008"),
        a = n.n(s),
        l = n("775560");
      let r = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        u = () => (0, l.useLazyValue)(() => r()),
        o = e => {
          let { children: t } = e;
          return t(u());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        r = n("384737"),
        u = n("448052"),
        o = n("748802"),
        i = n("260792"),
        d = n("77078"),
        c = n("75196"),
        E = n("366842");
      let f = {
          UP: E.directionUp,
          RIGHT: E.directionRight,
          DOWN: E.directionDown,
          LEFT: E.directionLeft,
        },
        I = e => {
          let {
              direction: t = f.DOWN,
              width: n = 24,
              height: a = 24,
              color: I = "currentColor",
              transition: C = E.transition,
              className: D,
              foreground: T,
              expanded: A,
              ..._
            } = e,
            { enabled: L } = (0, d.useRedesignIconContext)(),
            N = t;
          if ((!0 === A ? (N = f.DOWN) : !1 === A && (N = f.RIGHT), L)) {
            let e = {
              [f.UP]: i.ChevronSmallUpIcon,
              [f.DOWN]: r.ChevronSmallDownIcon,
              [f.LEFT]: u.ChevronSmallLeftIcon,
              [f.RIGHT]: o.ChevronSmallRightIcon,
            }[N];
            return (0, s.jsx)(e, {
              ..._,
              className: D,
              width: n,
              height: a,
              color: I,
              colorClass: T,
            });
          }
          return (0, s.jsx)("svg", {
            className: l(D, C, N),
            width: n,
            height: a,
            viewBox: "0 0 24 24",
            ...(0, c.default)(_),
            children: (0, s.jsx)("path", {
              className: T,
              fill: "none",
              stroke: I,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      I.Directions = f;
      var C = I;
    },
  },
]);
//# sourceMappingURL=5ff1ffdc9ba27af23ce1.js.map
