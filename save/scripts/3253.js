(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3253"],
  {
    59407: function (e, t, s) {
      "use strict";
      e.exports = s.p + "9e81dce3b3235147e088.svg";
    },
    609872: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d2957a53837bc444a305.svg";
    },
    407648: function (e, t, s) {
      "use strict";
      e.exports = s.p + "5161f8a4f8050a34ef98.svg";
    },
    713640: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          shuffleProblems: function () {
            return a;
          },
        }),
        s("424973");
      var l = s("917351"),
        n = s.n(l);
      let a = (e, t) => {
        let s = n.shuffle(e),
          l = s.findIndex(e => e.value === t);
        if (l > -1) {
          let e = s[l];
          s.splice(l, 1), s.push(e);
        }
        return s;
      };
    },
    866380: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        }),
        s("222007");
      var l = s("37983"),
        n = s("884691"),
        a = s("917351"),
        o = s.n(a),
        u = s("77078"),
        r = s("84339"),
        i = s("385042"),
        d = s("229850"),
        c = s("145131"),
        f = s("476765"),
        E = s("561744"),
        _ = s("258078"),
        m = s("701909"),
        h = s("713640"),
        O = s("200521"),
        C = s("782340"),
        M = s("466713");
      function N() {
        return (0, l.jsx)(u.Text, {
          className: M.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.default.getSubmitRequestURL(),
          }),
        });
      }
      function x(e) {
        let {
            header: t,
            body: s,
            problems: a,
            transitionState: m,
            feedbackProblems: x = [],
            otherKey: R,
            hasCloseButton: v,
            onSubmit: I,
            onClose: L,
            canDismissForever: H = !0,
            showHelpdeskLink: T = !0,
          } = e,
          g = (0, r.default)(a),
          [b, p] = n.useState(!1),
          [S, A] = n.useState(null),
          [B, k] = n.useState(o.shuffle(a)),
          [D, j] = n.useState(""),
          G = (0, f.useUID)(),
          F = (0, E.default)(b),
          U = (0, E.default)(S),
          V = (0, E.default)(I),
          K = (0, E.default)(D),
          P = null != S && x.includes(S);
        return (
          n.useEffect(() => {
            !o.isEqual(g, a) && k((0, h.shuffleProblems)(a, R));
          }, [a, g, R]),
          n.useEffect(
            () => () => {
              V.current({
                problem: U.current,
                dontShowAgain: F.current,
                feedback: K.current,
              });
            },
            []
          ),
          (0, l.jsxs)(u.ModalRoot, {
            transitionState: m,
            className: M.modalRoot,
            "aria-labelledby": G,
            children: [
              (0, l.jsx)(i.default, {}),
              (0, l.jsxs)(u.ModalHeader, {
                separator: !1,
                className: M.headerContainer,
                children: [
                  (0, l.jsx)(_.default, {
                    id: G,
                    className: M.header,
                    color: _.default.Colors.CUSTOM,
                    size: _.default.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: M.ratingBody,
                    children: s,
                  }),
                  v
                    ? (0, l.jsx)(u.ModalCloseButton, {
                        className: M.modalCloseButton,
                        onClick: L,
                      })
                    : null,
                ],
              }),
              (0, l.jsxs)(u.ModalContent, {
                className: M.content,
                children: [
                  P
                    ? null
                    : (0, l.jsx)(u.FormItem, {
                        className: M.problemInfo,
                        children: (0, l.jsx)(d.default, {
                          options: B,
                          onClick: function (e) {
                            let { value: t } = e;
                            A(t), !x.includes(t) && L();
                          },
                        }),
                      }),
                  P
                    ? (0, l.jsxs)(u.FormItem, {
                        title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: M.problemInfo,
                        children: [
                          (0, l.jsx)(u.TextArea, {
                            value: D,
                            maxLength: O.FEEDBACK_FREEFORM_LENGTH,
                            onChange: j,
                          }),
                          T ? (0, l.jsx)(N, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              H || P
                ? (0, l.jsx)(u.ModalFooter, {
                    className: M.footer,
                    direction: c.default.Direction.HORIZONTAL,
                    children: P
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(u.Button, {
                              size: u.Button.Sizes.SMALL,
                              look: u.Button.Looks.LINK,
                              color: u.Button.Colors.PRIMARY,
                              onClick: () => {
                                A(null), j("");
                              },
                              children: C.default.Messages.BACK,
                            }),
                            (0, l.jsx)(u.Button, {
                              size: u.Button.Sizes.SMALL,
                              onClick: L,
                              children: C.default.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : H
                        ? (0, l.jsx)(u.Checkbox, {
                            size: 18,
                            type: u.Checkbox.Types.INVERTED,
                            value: b,
                            onChange: () => p(!b),
                            children: (0, l.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: C.default.Messages.DONT_SHOW_AGAIN,
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
    385042: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var l = s("884691"),
        n = s("69927"),
        a = s("773336"),
        o = s("782340");
      function u() {
        return (
          l.useEffect(() => {
            !a.isPlatformEmbedded &&
              (0, n.flashPageTitle)({
                messages: [
                  o.default.Messages.GO_LIVE_HEY,
                  o.default.Messages.GO_LIVE_LOOK,
                  o.default.Messages.GO_LIVE_LISTEN,
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
    348224: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          GuildHomeRemoveChannelReasons: function () {
            return n;
          },
          getGuildHomeRemoveChannelReasons: function () {
            return i;
          },
          trackGuildHomeRemoveChannelFeedback: function () {
            return d;
          },
        });
      var l,
        n,
        a = s("42203"),
        o = s("599110"),
        u = s("49111"),
        r = s("782340");
      function i() {
        return [
          {
            value: "bot-spam",
            label:
              r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_BOTS,
          },
          {
            value: "no-go",
            label:
              r.default.Messages
                .GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_NO_GO,
          },
          {
            value: "overwhelm",
            label:
              r.default.Messages
                .GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_TOO_MUCH,
          },
          {
            value: "sensitive",
            label:
              r.default.Messages
                .GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_SENSITIVE,
          },
          {
            value: "other",
            label:
              r.default.Messages
                .GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_OTHER,
          },
        ];
      }
      function d(e, t, s, l) {
        let n = a.default.getChannel(e);
        null != n &&
          o.default.track(u.AnalyticEvents.USER_REPORT_SUBMITTED, {
            report_name: "Guild Home Channel Removed",
            guild_id: n.guild_id,
            channel_id: n.id,
            reason: t,
            feedback: s,
            skipped: l,
          });
      }
      ((l = n || (n = {})).BOT_SPAM = "bot-spam"),
        (l.NO_GO = "no-go"),
        (l.OVERWHELM = "overwhelm"),
        (l.SENSITIVE = "sensitive"),
        (l.OTHER = "other");
    },
    360476: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var l = s("37983");
      s("884691");
      var n = s("775560"),
        a = s("866380"),
        o = s("348224"),
        u = s("782340");
      let r = [o.GuildHomeRemoveChannelReasons.OTHER];
      function i(e) {
        let { transitionState: t, onClose: s, channelId: i, onSubmit: d } = e,
          c = (0, n.useLazyValue)(o.getGuildHomeRemoveChannelReasons);
        return (0, l.jsx)(a.default, {
          header: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
          body: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
          problems: c,
          feedbackProblems: r,
          onSubmit: function (e) {
            let { problem: t, feedback: s } = e,
              l = null == t;
            !l && ((0, o.trackGuildHomeRemoveChannelFeedback)(i, t, s, l), d());
          },
          onClose: s,
          transitionState: t,
          otherKey: o.GuildHomeRemoveChannelReasons.OTHER,
          canDismissForever: !1,
          showHelpdeskLink: !1,
        });
      }
    },
    229850: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var l = s("37983");
      s("884691");
      var n = s("414456"),
        a = s.n(n),
        o = s("77078"),
        u = s("461380"),
        r = s("274523");
      function i(e) {
        let {
          options: t,
          onClick: s,
          className: n,
          optionClassName: i,
          hideCaret: d,
        } = e;
        return (0, l.jsx)("div", {
          className: a(r.root, n),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              o.Clickable,
              {
                onClick: () => s(e),
                className: a(r.option, i),
                children: [
                  (0, l.jsx)(o.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, l.jsx)(u.default, {
                      className: r.caret,
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
//# sourceMappingURL=ae9df51b0456f182ea9b.js.map
