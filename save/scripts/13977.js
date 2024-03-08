(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13977"],
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
    464667: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("77078"),
        n = a("229353"),
        o = a.n(n),
        u = a("928328"),
        i = a("597517"),
        d = a("41645"),
        c = a("246429"),
        r = a("533613"),
        _ = a("782340");
      let f = [o.CALL_FEEDBACK_OPTION_OTHER];
      function E(e) {
        let { onClose: t, transitionState: n, analyticsData: E } = e;
        return (0, l.jsx)(u.default, {
          header: _.default.Messages.CALL_FEEDBACK_SHEET_TITLE,
          body: _.default.Messages.CALL_FEEDBACK_PROMPT,
          problemTitle: _.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, d.default)(!1),
          feedbackProblems: f,
          onSubmit: function (e) {
            var t, n, o;
            let { rating: u, problem: f, dontShowAgain: O, feedback: A } = e;
            if (
              (O && (0, i.hideHotspot)(r.HotspotLocations.VOICE_CALL_FEEDBACK),
              null != u)
            )
              (0, c.default)(
                u,
                ((t = f),
                null !==
                  (o =
                    null ===
                      (n = (0, d.default)(!1).find(e => e.label === t)) ||
                    void 0 === n
                      ? void 0
                      : n.code) && void 0 !== o
                  ? o
                  : null),
                f,
                A,
                E
              ),
                null != f &&
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await a
                      .el("874600")
                      .then(a.bind(a, "874600"));
                    return t =>
                      (0, l.jsx)(e, {
                        body: _.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                        ...t,
                      });
                  });
          },
          onClose: t,
          transitionState: n,
          otherKey: o.CALL_FEEDBACK_OPTION_OTHER,
        });
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
            return L;
          },
          default: function () {
            return p;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        n = a("414456"),
        o = a.n(n),
        u = a("917351"),
        i = a.n(u),
        d = a("77078"),
        c = a("84339"),
        r = a("229850"),
        _ = a("145131"),
        f = a("476765"),
        E = a("561744"),
        O = a("701909"),
        A = a("713640"),
        C = a("200521"),
        h = a("782340"),
        m = a("466713");
      let g = [
        {
          className: m.emojiSad,
          rating: C.FeedbackRating.BAD,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiNeutral,
          rating: C.FeedbackRating.NEUTRAL,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiHappy,
          rating: C.FeedbackRating.GOOD,
          classNameSelected: m.selected,
        },
      ];
      function L(e) {
        let {
          className: t,
          selectedRating: a,
          ratingConfigs: s,
          onChangeRating: n,
        } = e;
        return (0, l.jsx)(_.default, {
          justify: _.default.Justify.BETWEEN,
          align: _.default.Align.CENTER,
          className: o(m.ratingsSelector, t),
          children: (null != s ? s : g).map(e => {
            let { rating: t, className: s, classNameSelected: u } = e;
            return (0, l.jsx)(
              d.Clickable,
              {
                onClick: () => n(t),
                "aria-label": t,
                children: (0, l.jsx)("div", {
                  className: o(s, a === t ? u : null),
                }),
              },
              t
            );
          }),
        });
      }
      function N() {
        return (0, l.jsx)(d.Text, {
          className: m.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: O.default.getSubmitRequestURL(),
          }),
        });
      }
      function p(e) {
        let {
            header: t,
            body: a,
            problemTitle: n,
            problems: u,
            transitionState: O,
            ratingConfigs: g,
            feedbackProblems: p = [],
            otherKey: D,
            ratingsSelectorClassName: b,
            hideDontShowCheckbox: I,
            startRating: v = null,
            onSubmit: x,
            onClose: T,
          } = e,
          R = (0, c.default)(u),
          [B, S] = s.useState(!1),
          [M, j] = s.useState(v),
          [k, F] = s.useState(null),
          [K, H] = s.useState(i.shuffle(u)),
          [P, U] = s.useState(""),
          y = (0, f.useUID)(),
          w = (0, E.default)(M),
          G = (0, E.default)(B),
          V = (0, E.default)(k),
          z = (0, E.default)(x),
          Y = (0, E.default)(P),
          q = null != k && p.includes(k);
        return (
          s.useEffect(() => {
            !i.isEqual(R, u) && H((0, A.shuffleProblems)(u, D));
          }, [u, R, D]),
          s.useEffect(
            () => () => {
              z.current({
                rating: w.current,
                problem: V.current,
                dontShowAgain: G.current,
                feedback: Y.current,
              });
            },
            []
          ),
          (0, l.jsxs)(d.ModalRoot, {
            transitionState: O,
            className: m.modalRoot,
            "aria-labelledby": y,
            children: [
              (0, l.jsxs)(d.ModalHeader, {
                separator: !1,
                className: m.headerContainer,
                children: [
                  (0, l.jsx)(d.Heading, {
                    id: y,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, l.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: m.ratingBody,
                    children: a,
                  }),
                  q
                    ? null
                    : (0, l.jsx)(L, {
                        className: o(m.emojis, b),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          j(e), e === C.FeedbackRating.GOOD && T();
                        },
                        ratingConfigs: g,
                      }),
                ],
              }),
              (0, l.jsxs)(d.ModalContent, {
                className: m.content,
                children: [
                  null == M || M === C.FeedbackRating.GOOD || q
                    ? null
                    : (0, l.jsx)(d.FormItem, {
                        title: n,
                        className: m.problemInfo,
                        children: (0, l.jsx)(r.default, {
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !p.includes(t) && T();
                          },
                          hideCaret: e => {
                            let { value: t } = e;
                            return !p.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, l.jsxs)(d.FormItem, {
                        title: h.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: m.problemInfo,
                        children: [
                          (0, l.jsx)(d.TextArea, {
                            value: P,
                            maxLength: C.FEEDBACK_FREEFORM_LENGTH,
                            onChange: U,
                          }),
                          (0, l.jsx)(N, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !I) &&
                (0, l.jsx)(d.ModalFooter, {
                  className: m.footer,
                  direction: _.default.Direction.HORIZONTAL,
                  children: q
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            onClick: () => {
                              F(null), U("");
                            },
                            children: h.default.Messages.BACK,
                          }),
                          (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            onClick: T,
                            children: h.default.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, l.jsx)(d.Checkbox, {
                        type: d.Checkbox.Types.INVERTED,
                        size: 18,
                        value: B,
                        onChange: () => S(!B),
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children: h.default.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    41645: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        }),
        a("424973");
      var l,
        s,
        n = a("782340");
      function o(e) {
        let t = [
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
            code: 2,
            value: "I couldn't hear audio at all",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
            code: 3,
            value: "Nobody could hear me",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
            code: 4,
            value: "Audio had echos or feedback",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
            code: 5,
            value: "Audio was robotic or distorted",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
            code: 6,
            value: "Audio cut in and out",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
            code: 7,
            value: "Volume was too low or high",
          },
          {
            label: n.default.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
            code: 8,
            value: "Background noise was too loud",
          },
        ];
        return (
          e &&
            t.push({
              label: n.default.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
              code: 9,
              value: "Issues with speakerphone",
            }),
          t.push(
            {
              label: n.default.Messages.CALL_FEEDBACK_OPTION_HEADSET,
              code: 10,
              value: "Issues with headset/bluetooth",
            },
            {
              label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
              code: 1,
              value: "Other",
            }
          ),
          t
        );
      }
      ((s = l || (l = {})).COULD_NOT_HEAR_AUDIO =
        "I couldn't hear audio at all"),
        (s.NOBODY_COULD_HEAR_ME = "Nobody could hear me"),
        (s.AUDIO_ECHOS = "Audio had echos or feedback"),
        (s.AUDIO_ROBOTIC = "Audio was robotic or distorted"),
        (s.AUDIO_CUT = "Audio cut in and out"),
        (s.BAD_VOLUME = "Volume was too low or high"),
        (s.BACKGROUND_NOISE = "Background noise was too loud"),
        (s.SPEAKERPHONE = "Issues with speakerphone"),
        (s.HEADSET = "Issues with headset/bluetooth"),
        (s.OTHER = "Other");
    },
    246429: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a("42887"),
        s = a("599110"),
        n = a("49111");
      function o(e, t, a, o, u) {
        let i = l.default.getSettings(),
          d = l.default.getInputDeviceId(),
          c = l.default.getInputDevices()[d],
          r = l.default.getOutputDeviceId(),
          _ = l.default.getOutputDevices()[r],
          f = l.default.getVideoDeviceId(),
          E = l.default.getVideoDevices()[f],
          O = l.default.getNoiseCancellation();
        s.default.track(n.AnalyticEvents.CALL_REPORT_PROBLEM, {
          rating: null != e ? e : "no response",
          reason_code: t,
          reason_description: a,
          feedback: o,
          audio_input_mode: i.mode,
          automatic_audio_input_sensitivity_enabled:
            i.modeOptions.autoThreshold,
          audio_input_sensitivity: i.modeOptions.threshold,
          echo_cancellation_enabled: i.echoCancellation,
          noise_suppression_enabled: i.noiseSuppression,
          automatic_gain_control_enabled: i.automaticGainControl,
          voice_output_volume: i.outputVolume,
          noise_cancellation_enabled: O,
          input_device_name: null == c ? void 0 : c.name,
          output_device_name: null == _ ? void 0 : _.name,
          video_device_name: null == E ? void 0 : E.name,
          ...u,
        });
      }
    },
    229850: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        n = a.n(s),
        o = a("77078"),
        u = a("461380"),
        i = a("274523");
      function d(e) {
        let {
          options: t,
          onClick: a,
          className: s,
          optionClassName: d,
          hideCaret: c,
        } = e;
        return (0, l.jsx)("div", {
          className: n(i.root, s),
          children: t.map((e, t) =>
            (0, l.jsxs)(
              o.Clickable,
              {
                onClick: () => a(e),
                className: n(i.option, d),
                children: [
                  (0, l.jsx)(o.Text, {
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
//# sourceMappingURL=42382d1f49772c96cf93.js.map
