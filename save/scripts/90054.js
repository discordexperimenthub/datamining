(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90054"],
  {
    361326: function (e, t, s) {
      "use strict";
      e.exports = s.p + "bc9f96c62050424f9a95.png";
    },
    821240: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getSafetyAlertsSettingOrDefault: function () {
            return r;
          },
          getInappropriateConversationTakeoverForChannel: function () {
            return o;
          },
          shouldShowTakeoverForWarnings: function () {
            return i;
          },
        });
      var n = s("374363"),
        a = s("764828"),
        l = s("217736");
      function r() {
        var e, t, s;
        let a =
            null ===
              (s =
                null === (t = n.default.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (e = t.inappropriateConversationWarnings) ||
                      void 0 === e
                    ? void 0
                    : e.value) ||
            void 0 === s ||
            s,
          r = (0, l.getUserIsTeen)("safety_warnings_setting");
        return r && a;
      }
      function o(e) {
        let t = (function (e) {
            let t = a.default.getChannelSafetyWarnings(e);
            return t.filter(
              e =>
                e.type ===
                a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
            );
          })(e),
          s = t.filter(e => null != e.dismiss_timestamp);
        if (s.length > 0) return null;
        let n = t.filter(e => null == e.dismiss_timestamp);
        return 1 === n.length ? n[0] : null;
      }
      function i(e) {
        let t = e.filter(
          e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
        );
        return t.length > 0 && t.every(e => null == e.dismiss_timestamp);
      }
    },
    774298: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useInappropriateConversationSafetyToolsWarningForChannel:
            function () {
              return r;
            },
        });
      var n = s("761771"),
        a = s("888203"),
        l = s("328564");
      function r(e) {
        let t = (0, n.useIsEligibleForInappropriateConversationWarning)({
            location: "safety-tools-button",
          }),
          s = (0, l.useSafetyAlertsSettingOrDefault)(),
          r = (0, a.useInappropriateConversationWarningsForChannel)(e);
        if (!t || !s) return;
        let o = r.filter(e => null != e.dismiss_timestamp);
        if (0 === o.length) return;
        let i = o.sort((e, t) =>
          e.type > t.type
            ? 1
            : e.dismiss_timestamp < t.dismiss_timestamp
              ? 1
              : -1
        );
        return i[0];
      }
    },
    615992: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useLastChannelMessage: function () {
            return l;
          },
        });
      var n = s("446674"),
        a = s("377253");
      let l = e =>
        (0, n.useStateFromStores)([a.default], () => {
          var t;
          return null !== (t = a.default.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : a.default.getLastMessage(e);
        });
    },
    408815: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useShouldShowInitialSafetyToolsButtonTooltip: function () {
            return r;
          },
        });
      var n = s("446674"),
        a = s("764828"),
        l = s("774298");
      function r(e) {
        let t = (0, l.useInappropriateConversationSafetyToolsWarningForChannel)(
            e
          ),
          s = (0, n.useStateFromStores)([a.default], () =>
            a.default.hasShownInitialTooltipForChannel(e)
          );
        return null != t && !s;
      }
    },
    13355: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useSafetyToolsButtonTooltipForChannel: function () {
            return S;
          },
        }),
        s("700225");
      var n = s("718517"),
        a = s("764828"),
        l = s("821240"),
        r = s("774298"),
        o = s("888203"),
        i = s("408815");
      let T = 1 * n.default.Millis.HOUR,
        u = 12 * n.default.Millis.HOUR;
      function S(e) {
        var t;
        let s = (0, r.useInappropriateConversationSafetyToolsWarningForChannel)(
            e
          ),
          n = (0, o.useInappropriateConversationWarningsForChannel)(e),
          S = (0, i.useShouldShowInitialSafetyToolsButtonTooltip)(e);
        if (null == s || S || (0, l.shouldShowTakeoverForWarnings)(n)) return;
        let _ = n.some(
            e =>
              e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
          ),
          d = n
            .filter(e => null != e.dismiss_timestamp)
            .sort((e, t) =>
              t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1
            );
        if (d.length < 1) return;
        let E = d[0];
        if (
          !(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let s = new Date(e).getTime() + (t ? T : u),
              n = new Date().getTime();
            return n >= s;
          })(E.dismiss_timestamp, _)
        )
          return;
        let c = n.filter(e => null == e.dismiss_timestamp);
        return null !==
          (t = c.findLast(
            e =>
              e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1
          )) && void 0 !== t
          ? t
          : c.findLast(
              e =>
                e.type ===
                a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
            );
      }
    },
    15408: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        l = s("892974");
      function r(e) {
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await s.el("166260").then(s.bind(s, "166260"));
            return t => (0, n.jsx)(e, { ...t });
          },
          { onCloseCallback: e, backdropStyle: l.BackdropStyles.BLUR }
        );
      }
    },
    632758: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        l = s.n(a),
        r = s("77078"),
        o = s("968246");
      function i(e) {
        let { tips: t, className: s, headerText: a } = e;
        return (0, n.jsxs)("div", {
          className: l(o.tipsSection, s),
          children: [
            (0, n.jsx)("div", {
              className: o.tipsHeader,
              children: (0, n.jsx)(r.Heading, {
                variant: "heading-lg/bold",
                className: o.headerText,
                children: a,
              }),
            }),
            (0, n.jsx)("ul", {
              className: o.tipsList,
              children: t.map((e, t) =>
                (0, n.jsxs)(
                  "li",
                  {
                    className: o.tipRow,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: o.tipNumber,
                        children: t + 1,
                      }),
                      (0, n.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        children: e,
                      }),
                    ],
                  },
                  "safety-tips-".concat(t)
                )
              ),
            }),
          ],
        });
      }
    },
    903303: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("77078"),
        r = s("79112"),
        o = s("701909"),
        i = s("277734"),
        T = s("153327"),
        u = s("514914"),
        S = s("49111"),
        _ = s("782340"),
        d = s("821054"),
        E = function (e) {
          let { onClose: t, channelId: s } = e,
            [E, c] = a.useState(!1),
            O = a.useCallback(() => {
              r.default.open(S.UserSettingsSections.PRIVACY_AND_SAFETY), t();
            }, [t]),
            A = a.useCallback(() => {
              !E &&
                (c(!0),
                (0, i.reportFalsePositive)(s)
                  .then(() => {
                    t(),
                      (0, T.showSafetyToast)({
                        text: _.default.Messages
                          .SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                        id: "safety-tools-report-false-positive",
                      });
                  })
                  .catch(() => {
                    c(!1),
                      (0, l.showToast)(
                        (0, l.createToast)(
                          _.default.Messages.ERROR_GENERIC_TITLE,
                          l.ToastType.FAILURE
                        )
                      );
                  }));
            }, [s, t, E]);
          return (0, n.jsxs)(u.default, {
            style: d.wrapperStyle,
            children: [
              (0, n.jsx)(l.Text, {
                variant: "text-md/medium",
                children:
                  _.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format(
                    {
                      learnMoreLink: o.default.getArticleURL(
                        S.HelpdeskArticles.SAFETY_ALERTS
                      ),
                    }
                  ),
              }),
              (0, n.jsx)(l.Button, {
                className: d.settingsButton,
                onClick: O,
                children:
                  _.default.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS,
              }),
              (0, n.jsx)("div", {
                className: d.reportFalsePositive,
                children: (0, n.jsx)(l.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: d.reportFalsePositiveText,
                  children:
                    _.default.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format(
                      {
                        reportFalsePositiveHook: (e, t) =>
                          (0, n.jsx)(
                            l.Button,
                            {
                              className: d.reportFalsePositiveButton,
                              size: l.Button.Sizes.NONE,
                              color: l.Button.Colors.LINK,
                              look: l.Button.Looks.LINK,
                              disabled: E,
                              onClick: A,
                              children: e,
                            },
                            t
                          ),
                      }
                    ),
                }),
              }),
            ],
          });
        };
    },
    96928: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        r = s.n(l),
        o = s("446674"),
        i = s("669491"),
        T = s("748802"),
        u = s("77078"),
        S = s("736964"),
        _ = s("545158"),
        d = s("377114"),
        E = s("652126"),
        c = s("27618"),
        O = s("615992"),
        A = s("13355"),
        f = s("15408"),
        I = s("217736"),
        C = s("161297"),
        L = s("514914"),
        p = s("324252"),
        R = s("782340"),
        N = s("744228");
      function h(e) {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: N.actionGroup, children: t });
      }
      function F(e) {
        let {
          title: t,
          subTitle: s,
          buttonText: a,
          buttonColor: l,
          onPress: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: N.actionRow,
          children: [
            (0, n.jsxs)("div", {
              className: N.actionButtonDetails,
              children: [
                (0, n.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t,
                }),
                (0, n.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: s,
                }),
              ],
            }),
            (0, n.jsx)(u.Button, {
              size: u.Button.Sizes.SMALL,
              color: l,
              onClick: r,
              children: a,
            }),
          ],
        });
      }
      function m(e) {
        let { title: t, onPress: s } = e;
        return (0, n.jsxs)(u.Clickable, {
          className: r(N.actionRow, N.clickableActionRow),
          onClick: s,
          children: [
            (0, n.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            (0, n.jsx)(T.ChevronSmallRightIcon, {
              width: 24,
              height: 24,
              color: i.default.colors.INTERACTIVE_NORMAL,
            }),
          ],
        });
      }
      var g = function (e) {
        let {
            otherUserId: t,
            channelId: l,
            warningId: r,
            warningType: i,
            transitionToSlide: T,
          } = e,
          N = (0, E.useShouldShowHelplineLink)(),
          g = (0, O.useLastChannelMessage)(l),
          v = null != (0, A.useSafetyToolsButtonTooltipForChannel)(l),
          x = (0, o.useStateFromStores)([c.default], () =>
            c.default.isBlocked(t)
          ),
          M = a.useCallback(
            e => {
              (0, I.trackCtaEvent)({
                channelId: l,
                warningId: r,
                senderId: t,
                warningType: i,
                cta: e,
                isNudgeWarning: v,
              });
            },
            [l, r, t, i, v]
          ),
          Y = a.useCallback(() => {
            (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY),
              M(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
          }, [M]),
          y = a.useCallback(() => {
            S.default.unblockUser(t, {
              location: p.MODAL_LOCATION_CONTEXT_WEB,
            }),
              M(I.CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
          }, [t, M]),
          B = a.useCallback(() => {
            (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY),
              M(I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
          }, [M]),
          P = a.useMemo(() => {
            let e = {
                title:
                  R.default.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
                subTitle:
                  R.default.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
                buttonText:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, _.default)(p.CRISIS_TEXT_LINE_URL),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_CTL);
                },
              },
              a = {
                title:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                subTitle:
                  R.default.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
                buttonText:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, _.default)(p.NOFILTR_URL),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
                },
              };
            return [
              {
                title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                subTitle:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
                buttonText: x
                  ? R.default.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK
                  : R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
                buttonColor: u.ButtonColors.BRAND,
                onPress: () => {
                  x
                    ? y()
                    : (0, u.openModalLazy)(async () => {
                        let { default: e } = await s
                          .el("811578")
                          .then(s.bind(s, "811578"));
                        return s => {
                          let { transitionState: a, onClose: r } = s;
                          return (0, n.jsx)(e, {
                            transitionState: a,
                            onBlock: Y,
                            onBlockAndReport: B,
                            onCancel: () => {
                              null == r || r(),
                                M(
                                  I.CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL
                                );
                            },
                            onClose: r,
                            userId: t,
                            channelId: l,
                          });
                        };
                      });
                },
              },
              {
                title:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                subTitle:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
                buttonText:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, u.closeModal)(p.SAFETY_TOOLS_MODAL_KEY),
                    (0,
                    d.showReportModalForInappropriateConversationSafetyAlert)(
                      g
                    ),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
                },
              },
              N ? e : a,
              {
                title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
                subTitle:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
                buttonText:
                  R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
                buttonColor: u.ButtonColors.PRIMARY,
                onPress: () => {
                  (0, f.default)(u.closeAllModals),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                },
              },
            ];
          }, [x, N, M, y, Y, B, t, l, g]),
          b = a.useMemo(
            () => [
              {
                title:
                  R.default.Messages
                    .SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
                onPress: () => {
                  T(C.SafetyToolsSlides.SAFETY_TIPS),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
                },
              },
              {
                title: R.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
                onPress: () => {
                  T(C.SafetyToolsSlides.ABOUT_SAFETY_ALERTS),
                    M(I.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                },
              },
            ],
            [T, M]
          );
        return (0, n.jsxs)(L.default, {
          children: [
            (0, n.jsx)(h, {
              children: P.map(e => {
                let {
                  title: t,
                  subTitle: s,
                  buttonText: a,
                  buttonColor: l,
                  onPress: r,
                } = e;
                return (0, n.jsx)(
                  F,
                  {
                    title: t,
                    subTitle: s,
                    buttonText: a,
                    buttonColor: l,
                    onPress: r,
                  },
                  t
                );
              }),
            }),
            (0, n.jsx)(h, {
              children: b.map(e => {
                let { title: t, onPress: s } = e;
                return (0, n.jsx)(m, { title: t, onPress: s }, t);
              }),
            }),
          ],
        });
      };
    },
    161297: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SafetyToolsSlides: function () {
            return n;
          },
          default: function () {
            return c;
          },
        }),
        s("222007");
      var n,
        a,
        l = s("37983"),
        r = s("884691"),
        o = s("77078"),
        i = s("13355"),
        T = s("217736"),
        u = s("903303"),
        S = s("96928"),
        _ = s("926945"),
        d = s("782340"),
        E = s("650766");
      ((a = n || (n = {})).ACTIONS = "ACTIONS"),
        (a.SAFETY_TIPS = "SAFETY_TIPS"),
        (a.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS");
      var c = e => {
        let {
            onClose: t,
            channelId: s,
            warningId: n,
            warningType: a,
            otherUserId: c,
            transitionState: O,
          } = e,
          A = null != (0, i.useSafetyToolsButtonTooltipForChannel)(s),
          [f, I] = r.useState("ACTIONS"),
          C = r.useCallback(
            e => {
              (0, T.trackCtaEvent)({
                channelId: s,
                warningId: n,
                warningType: a,
                senderId: c,
                cta: e,
                isNudgeWarning: A,
              });
            },
            [s, n, a, c, A]
          ),
          L = r.useCallback(e => {
            let { text: t, onClick: s } = e;
            return (0, l.jsx)(o.Button, {
              look: o.Button.Looks.LINK,
              size: o.Button.Sizes.MIN,
              onClick: s,
              color: o.Button.Colors.CUSTOM,
              className: E.footerLink,
              children: t,
            });
          }, []),
          p = r.useCallback(() => {
            switch (f) {
              case "SAFETY_TIPS":
              case "ABOUT_SAFETY_ALERTS":
                return (0, l.jsx)(L, {
                  text: d.default.Messages.BACK,
                  onClick: () => I("ACTIONS"),
                });
              default:
                return null;
            }
          }, [f, L]),
          R = r.useCallback(() => {
            switch (f) {
              case "SAFETY_TIPS":
                return d.default.Messages
                  .SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
              case "ABOUT_SAFETY_ALERTS":
                return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
              default:
                return d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
            }
          }, [f]),
          N = r.useCallback(
            e => {
              I(e);
            },
            [I]
          );
        return (0, l.jsxs)(o.ModalRoot, {
          transitionState: O,
          "aria-label": d.default.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
          size: o.ModalSize.SMALL,
          children: [
            (0, l.jsx)(o.ModalHeader, {
              separator: !1,
              className: E.modalHeader,
              children: (0, l.jsx)(o.Heading, {
                variant: "heading-xl/semibold",
                children: R(),
              }),
            }),
            (0, l.jsx)(o.Scroller, {
              children: (0, l.jsxs)(o.Slides, {
                activeSlide: f,
                width: 440,
                children: [
                  (0, l.jsx)(o.Slide, {
                    id: "ACTIONS",
                    children: (0, l.jsx)(S.default, {
                      otherUserId: c,
                      channelId: s,
                      warningId: n,
                      warningType: a,
                      transitionToSlide: N,
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: "ABOUT_SAFETY_ALERTS",
                    children: (0, l.jsx)(u.default, {
                      channelId: s,
                      onClose: () => {
                        t(),
                          C(
                            T.CtaEventTypes
                              .USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS
                          );
                      },
                    }),
                  }),
                  (0, l.jsx)(o.Slide, {
                    id: "SAFETY_TIPS",
                    children: (0, l.jsx)(_.default, {}),
                  }),
                ],
              }),
            }),
            (0, l.jsxs)(o.ModalFooter, {
              className: E.modalFooter,
              children: [
                (0, l.jsx)(L, {
                  text: d.default.Messages.CLOSE,
                  onClick: () => {
                    t(), C(T.CtaEventTypes.USER_SAFETY_TOOLS_DISMISS);
                  },
                }),
                p(),
              ],
            }),
          ],
        });
      };
    },
    926945: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("632758"),
        l = s("514914"),
        r = s("324252"),
        o = s("782340"),
        i = function () {
          let e = (0, r.getInappropriateConversationsSafetyTips)();
          return (0, n.jsx)(l.default, {
            children: (0, n.jsx)(a.default, {
              tips: e,
              headerText:
                o.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION,
            }),
          });
        };
    },
    514914: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        l = s.n(a),
        r = s("77078"),
        o = s("130152"),
        i = function (e) {
          let { children: t, style: s } = e;
          return (0, n.jsx)(r.ModalContent, {
            className: l(o.modalContent, s),
            children: t,
          });
        };
    },
  },
]);
//# sourceMappingURL=052d176da61c17e1baf2.js.map
