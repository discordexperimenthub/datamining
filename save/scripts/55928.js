(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55928"],
  {
    699427: function (e, a, t) {
      "use strict";
      e.exports = t.p + "0e2d1c2de9e9f557d79e.jpg";
    },
    664639: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return m;
          },
        });
      var s = t("37983"),
        n = t("884691"),
        l = t("432710"),
        i = t("65597"),
        d = t("77078"),
        r = t("519705"),
        o = t("155084"),
        c = t("282109"),
        E = t("945330"),
        u = t("898260"),
        N = t("34676"),
        R = t("764828"),
        T = t("217736"),
        _ = t("327944"),
        A = t("324252"),
        f = t("49111"),
        S = t("782340"),
        x = t("881837");
      function m(e) {
        let {
            transitionState: a,
            onClose: t,
            handleBlock: m,
            channelId: h,
            warningId: M,
            senderId: g,
          } = e,
          v = () => {
            t();
          },
          C = (0, A.getStrangerDangerSafetyTips)();
        n.useEffect(() => {
          (0, T.trackViewedEvent)(
            f.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED,
            {
              channelId: h,
              warningId: M,
              senderId: g,
              warningType: R.SafetyWarningTypes.STRANGER_DANGER,
            }
          ),
            o.default.increment({
              name: l.MetricEvents.SAFETY_WARNING_MODAL_VIEW,
            });
        }, [h, M, g]);
        let y = (0, i.default)([c.default], () =>
          c.default.isChannelMuted(null, h)
        );
        return (0, s.jsx)(d.ModalRoot, {
          transitionState: a,
          children: (0, s.jsxs)(d.Scroller, {
            style: { overflow: "hidden auto" },
            children: [
              (0, s.jsxs)(d.ModalHeader, {
                className: x.modalHeader,
                children: [
                  (0, s.jsxs)("div", {
                    className: x.modalHeaderText,
                    children: [
                      (0, s.jsx)(d.Text, {
                        variant: "eyebrow",
                        color: "status-positive-text",
                        children:
                          S.default.Messages.STRANGER_DANGER_TIPS_HEADER,
                      }),
                      (0, s.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        color: "status-positive-text",
                        children:
                          S.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION,
                      }),
                    ],
                  }),
                  (0, s.jsx)(d.Button, {
                    "aria-label": S.default.Messages.CLOSE,
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    onClick: t,
                    innerClassName: x.closeButtonInner,
                    className: x.closeButton,
                    children: (0, s.jsx)(E.default, {
                      width: 18,
                      height: 18,
                      className: x.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(d.ModalContent, {
                className: x.modalContent,
                children: [
                  (0, s.jsx)("div", {
                    className: x.tipsSection,
                    children: C.map((e, a) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: x.tipRow,
                          children: [
                            (0, s.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              color: "text-brand",
                              className: x.tipNumber,
                              children: a + 1,
                            }),
                            (0, s.jsx)(d.Text, {
                              variant: "text-sm/medium",
                              color: "header-secondary",
                              children: e,
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(d.Text, {
                        className: x.moreHeading,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children:
                          S.default.Messages.STRANGER_DANGER_MORE_HEADER,
                      }),
                      (0, s.jsxs)("div", {
                        className: x.tipsSection,
                        children: [
                          (0, s.jsxs)("div", {
                            className: x.safetyAction,
                            children: [
                              (0, s.jsxs)("div", {
                                className: x.safetyActionText,
                                children: [
                                  (0, s.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children:
                                      S.default.Messages
                                        .STRANGER_DANGER_MORE_MUTE,
                                  }),
                                  (0, s.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children:
                                      S.default.Messages
                                        .STRANGER_DANGER_MORE_MUTE_DESCRIPTION,
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                color: d.Button.Colors.PRIMARY,
                                "aria-label":
                                  S.default.Messages.STRANGER_DANGER_MORE_MUTE,
                                onClick: y
                                  ? () => {
                                      r.default.updateChannelOverrideSettings(
                                        null,
                                        h,
                                        { muted: !1 },
                                        N.NotificationLabels.Unmuted
                                      ),
                                        (0, d.showToast)(
                                          (0, d.createToast)(
                                            S.default.Messages
                                              .STRANGER_DANGER_UNMUTE_CONFIRM,
                                            d.ToastType.SUCCESS
                                          )
                                        ),
                                        (0, T.trackCtaEvent)({
                                          channelId: h,
                                          warningId: M,
                                          senderId: g,
                                          warningType:
                                            R.SafetyWarningTypes
                                              .STRANGER_DANGER,
                                          cta: T.CtaEventTypes
                                            .USER_MODAL_UNMUTE,
                                        });
                                    }
                                  : () => {
                                      r.default.updateChannelOverrideSettings(
                                        null,
                                        h,
                                        { muted: !0 },
                                        N.NotificationLabels.Muted
                                      ),
                                        (0, d.showToast)(
                                          (0, d.createToast)(
                                            S.default.Messages
                                              .STRANGER_DANGER_MUTE_CONFIRM,
                                            d.ToastType.SUCCESS
                                          )
                                        ),
                                        (0, T.trackCtaEvent)({
                                          channelId: h,
                                          warningId: M,
                                          senderId: g,
                                          warningType:
                                            R.SafetyWarningTypes
                                              .STRANGER_DANGER,
                                          cta: T.CtaEventTypes.USER_MODAL_MUTE,
                                        });
                                    },
                                children: y
                                  ? S.default.Messages
                                      .STRANGER_DANGER_MORE_UNMUTE
                                  : S.default.Messages
                                      .STRANGER_DANGER_MORE_MUTE,
                              }),
                            ],
                          }),
                          (0, s.jsx)(u.default, {}),
                          (0, s.jsxs)("div", {
                            className: x.safetyAction,
                            children: [
                              (0, s.jsxs)("div", {
                                className: x.safetyActionText,
                                children: [
                                  (0, s.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children:
                                      S.default.Messages
                                        .STRANGER_DANGER_MORE_BLOCK,
                                  }),
                                  (0, s.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    children:
                                      S.default.Messages
                                        .STRANGER_DANGER_MORE_BLOCK_DESCRIPTION,
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                color: d.Button.Colors.RED,
                                "aria-label":
                                  S.default.Messages
                                    .STRANGER_DANGER_BANNER_BLOCK,
                                onClick: () => {
                                  v(), m();
                                },
                                children:
                                  S.default.Messages
                                    .STRANGER_DANGER_BANNER_BLOCK,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(_.default, {
                    channelId: h,
                    warningId: M,
                    senderId: g,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    327944: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return S;
          },
        });
      var s = t("37983"),
        n = t("884691"),
        l = t("414456"),
        i = t.n(l),
        d = t("65597"),
        r = t("877585"),
        o = t("77078"),
        c = t("251144"),
        E = t("20662"),
        u = t("277734"),
        N = t("764828"),
        R = t("217736"),
        T = t("782340"),
        _ = t("965252"),
        A = t("882746");
      function f() {
        return (0, s.jsxs)("div", {
          className: i(A.toast, _.toast),
          children: [
            (0, s.jsx)(r.ShieldIcon, { color: o.tokens.colors.TEXT_BRAND }),
            (0, s.jsx)(o.Text, {
              className: A.content,
              color: "header-primary",
              variant: "text-md/normal",
              children: T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM,
            }),
          ],
        });
      }
      function S(e) {
        let { channelId: a, warningId: t, senderId: l } = e,
          r = (0, d.default)([N.default], () =>
            N.default.getChannelSafetyWarning(a, t)
          ),
          A = n.useMemo(
            () =>
              (null == r ? void 0 : r.feedback_type) ===
              N.SafetyWarningFeedbackTypes.UPVOTE,
            [r]
          ),
          S = n.useMemo(
            () =>
              (null == r ? void 0 : r.feedback_type) ===
              N.SafetyWarningFeedbackTypes.DOWNVOTE,
            [r]
          ),
          x = n.useCallback(
            (e, n) => {
              (null == r ? void 0 : r.feedback_type) !== e &&
                ((0, u.setChannelSafetyWarningFeedback)(a, t, e),
                (0, o.showToast)(
                  (0, o.createToast)(
                    T.default.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM,
                    o.ToastType.CUSTOM,
                    { component: (0, s.jsx)(f, {}) }
                  )
                ),
                (0, R.trackCtaEvent)({
                  channelId: a,
                  warningId: t,
                  senderId: l,
                  warningType: N.SafetyWarningTypes.STRANGER_DANGER,
                  cta: n,
                }));
            },
            [r, a, t, l]
          );
        return (0, s.jsxs)("div", {
          className: _.feedback,
          children: [
            (0, s.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-normal",
              children: T.default.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL,
            }),
            (0, s.jsxs)("div", {
              className: _.buttonsContainer,
              children: [
                (0, s.jsx)(o.Clickable, {
                  className: i([
                    _.buttonsBackground,
                    A ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive,
                    { [_.disabled]: A },
                  ]),
                  onClick: () =>
                    x(
                      N.SafetyWarningFeedbackTypes.UPVOTE,
                      R.CtaEventTypes.FEEDBACK_UPVOTE
                    ),
                  "aria-label":
                    T.default.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
                  children: (0, s.jsx)(E.default, {
                    className: _.buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
                (0, s.jsx)(o.Clickable, {
                  className: i([
                    _.buttonsBackground,
                    S ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive,
                    { [_.disabled]: S },
                  ]),
                  onClick: () =>
                    x(
                      N.SafetyWarningFeedbackTypes.DOWNVOTE,
                      R.CtaEventTypes.FEEDBACK_DOWNVOTE
                    ),
                  "aria-label":
                    T.default.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
                  children: (0, s.jsx)(c.default, {
                    className: _.buttonIcon,
                    color: "interactive-normal",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=43f1a814518609af81ce.js.map
