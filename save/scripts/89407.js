(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89407"],
  {
    469533: function (e, t, a) {
      "use strict";
      e.exports = a.p + "16af3ac4b06fe31aff42.png";
    },
    228408: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useEmitAppealIngestionEvent: function () {
            return c;
          },
        });
      var l = a("884691"),
        s = a("446674"),
        n = a("599110"),
        i = a("646356"),
        o = a("132206"),
        d = a("170213"),
        r = a("49111");
      let c = () => {
        let e = (0, s.useStateFromStores)([i.default], () =>
            i.default.getAppealClassificationId()
          ),
          t = (0, o.useSafetyHubAccountStanding)(),
          a = (0, s.useStateFromStores)([i.default], () =>
            i.default.getIsDsaEligible()
          );
        return l.useCallback(
          l => {
            n.default.track(r.AnalyticEvents.SAFETY_HUB_ACTION, {
              action: l,
              account_standing: t.state,
              classification_ids: null != e ? [Number(e)] : null,
              source: d.SafetyHubAnalyticsActionSource.AppealIngestion,
              is_dsa_eligible: a,
            });
          },
          [t.state, e, a]
        );
      };
    },
    124539: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        n = a("414456"),
        i = a.n(n),
        o = a("446674"),
        d = a("77078"),
        r = a("913144"),
        c = a("145131"),
        u = a("646356"),
        E = a("736393"),
        _ = a("698609"),
        A = a("170213"),
        S = a("782340"),
        N = a("836092"),
        I = a("221389");
      function x(e) {
        let {
            isDsaEligible: t = !1,
            className: a,
            onClose: n,
            onNext: x,
            onBack: f,
          } = e,
          T = (0, _.useSafetyHubAppealSignal)(),
          g = (0, o.useStateFromStores)([u.default], () =>
            u.default.getFreeTextAppealReason()
          ),
          [p, m] = s.useState(""),
          [C, L] = s.useState(!1);
        s.useEffect(() => {
          m(null != g ? g : ""),
            L(T === A.AppealIngestionSignal.SOMETHING_ELSE);
        }, [g, T]);
        let h = e => {
            L(e === A.AppealIngestionSignal.SOMETHING_ELSE),
              e !== A.AppealIngestionSignal.SOMETHING_ELSE &&
                (m(""),
                r.default.dispatch({
                  type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                  userInput: "",
                })),
              r.default.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                signal: e,
              });
          },
          M = A.AppealIngestionSignalOrder.map(e => ({
            value: e,
            name: (0, E.getAppealSignalDisplayText)(e),
          }));
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(d.ModalHeader, {
              direction: c.default.Direction.VERTICAL,
              className: I.header,
              separator: !1,
              children: [
                (0, l.jsx)(d.Heading, {
                  className: I.title,
                  variant: "heading-xl/semibold",
                  children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, l.jsx)(d.Text, {
                  className: I.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    S.default.Messages
                      .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER,
                }),
                null != n &&
                  (0, l.jsx)(d.ModalCloseButton, {
                    className: I.closeButton,
                    onClick: n,
                  }),
              ],
            }),
            (0, l.jsxs)(d.ModalContent, {
              className: i(N.modalContent, a),
              paddingFix: !1,
              children: [
                (0, l.jsx)(d.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: I.radioItem,
                  size: d.RadioGroup.Sizes.NOT_SET,
                  value: T,
                  options: M,
                  onChange: e => {
                    let { value: t } = e;
                    return h(t);
                  },
                }),
                C &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.TextArea, {
                        rows: 4,
                        maxLength: 1024,
                        placeholder:
                          S.default.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
                        value: p,
                        onChange: m,
                        autoFocus: !0,
                      }),
                      (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children:
                          S.default.Messages
                            .APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER,
                      }),
                    ],
                  }),
                (0, l.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  className: N.disclaimer,
                  children:
                    S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format(),
                }),
              ],
            }),
            (0, l.jsxs)(d.ModalFooter, {
              children: [
                (0, l.jsx)(d.Button, {
                  onClick: () => {
                    r.default.dispatch({
                      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                      userInput: p,
                    }),
                      null == x || x();
                  },
                  color: d.Button.Colors.BRAND,
                  children: S.default.Messages.NEXT,
                }),
                t &&
                  (0, l.jsx)(d.Button, {
                    onClick: () => {
                      r.default.dispatch({
                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                        userInput: p,
                      }),
                        null == f || f();
                    },
                    color: d.Button.Colors.PRIMARY,
                    look: d.Button.Looks.LINK,
                    children: S.default.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      }
    },
    776724: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        n = a("446674"),
        i = a("77078"),
        o = a("913144"),
        d = a("145131"),
        r = a("781324"),
        c = a("646356"),
        u = a("736393"),
        E = a("698609"),
        _ = a("49111"),
        A = a("782340"),
        S = a("803779"),
        N = a("221389");
      function I(e) {
        let { className: t, onClose: a, onNext: I, onBack: x } = e,
          f = (0, n.useStateFromStores)([c.default], () =>
            c.default.getAppealClassificationId()
          ),
          { classification: T } = (0, E.useSafetyHubClassification)(
            null != f ? f : _.EMPTY_STRING_SNOWFLAKE_ID
          ),
          g = (0, u.capitalizeText)(null == T ? void 0 : T.description),
          p = (0, n.useStateFromStores)([c.default], () =>
            c.default.getIsSubmitting()
          ),
          m = (0, n.useStateFromStores)([c.default], () =>
            c.default.getAppealSignal()
          ),
          C = (0, n.useStateFromStores)([c.default], () =>
            c.default.getFreeTextAppealReason()
          ),
          [L, h] = s.useState(!1),
          [M, O] = s.useState(""),
          j = s.useCallback(e => {
            o.default.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: e,
            });
          }, []),
          P = s.useCallback(async () => {
            if (null !== f)
              try {
                O(""), await r.requestReview(f, m, C), null == I || I();
              } catch (t) {
                var e;
                O(
                  (0, u.getRequestReviewErrorFromCode)(
                    null === (e = t.body) || void 0 === e ? void 0 : e.code
                  )
                );
              }
          }, [f, m, C, I]);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              direction: d.default.Direction.VERTICAL,
              className: N.header,
              separator: !1,
              children: [
                (0, l.jsx)(i.Heading, {
                  className: N.title,
                  variant: "heading-xl/semibold",
                  children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, l.jsx)(i.Text, {
                  className: N.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    A.default.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER,
                }),
                null != a &&
                  (0, l.jsx)(i.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: a,
                  }),
              ],
            }),
            (0, l.jsxs)(i.ModalContent, {
              className: t,
              paddingFix: !1,
              children: [
                (0, l.jsx)("ul", {
                  className: S.listContainer,
                  children: [(0, u.getAppealSignalDisplayText)(m), C]
                    .filter(e => e.length > 0)
                    .map((e, t) =>
                      (0, l.jsx)(
                        "li",
                        {
                          className: S.listItem,
                          children: (0, l.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: e,
                          }),
                        },
                        t
                      )
                    ),
                }),
                (0, l.jsx)("div", {
                  className: S.anchorContainer,
                  children: (0, l.jsx)(i.Anchor, {
                    onClick: () => h(e => !e),
                    children: (0, l.jsx)(i.Heading, {
                      variant: "heading-md/normal",
                      color: "text-link",
                      children:
                        C.length > 0
                          ? A.default.Messages
                              .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS
                          : A.default.Messages
                              .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS,
                    }),
                  }),
                }),
                L &&
                  (0, l.jsx)("div", {
                    className: S.inputContainer,
                    children: (0, l.jsx)(i.TextArea, { value: C, onChange: j }),
                  }),
                (0, l.jsx)("div", {
                  className: N.policyContainer,
                  children: (0, l.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children: g,
                  }),
                }),
                (0, l.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: S.footerText,
                  children:
                    A.default.Messages
                      .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER,
                }),
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              direction: d.default.Direction.VERTICAL,
              children: [
                "" !== M &&
                  (0, l.jsx)(i.Text, {
                    className: S.errorText,
                    variant: "text-lg/normal",
                    color: "text-danger",
                    children: M,
                  }),
                (0, l.jsxs)("div", {
                  className: S.buttonContainer,
                  children: [
                    (0, l.jsx)(i.Button, {
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      onClick: x,
                      disabled: p,
                      children: A.default.Messages.BACK,
                    }),
                    (0, l.jsx)(i.Button, {
                      onClick: P,
                      color: i.Button.Colors.RED,
                      submitting: p,
                      children: A.default.Messages.SUBMIT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    795010: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("77078"),
        n = a("461380"),
        i = a("165296");
      function o(e) {
        let { url: t, text: a, onClick: o } = e;
        return (0, l.jsx)(s.Anchor, {
          href: t,
          onClick: o,
          className: i.externalLinkWrapper,
          children: (0, l.jsxs)(s.Clickable, {
            className: i.childButton,
            children: [
              (0, l.jsx)(s.Text, {
                className: i.childText,
                variant: "text-md/semibold",
                children: a,
              }),
              (0, l.jsx)(n.default, {
                className: i.childIcon,
                direction: n.default.Directions.RIGHT,
              }),
            ],
          }),
        });
      }
    },
    574811: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        n = a("77078"),
        i = a("698609"),
        o = a("124539"),
        d = a("776724"),
        r = a("57242"),
        c = a("711734"),
        u = a("299738"),
        E = a("170213"),
        _ = a("49111"),
        A = a("668222");
      function S(e) {
        let {
            classificationId: t,
            transitionState: a,
            initialSlide: S = E.AppealIngestionSlideTypes.SPEED_BUMP,
            onClose: N,
          } = e,
          [I, x] = s.useState(S),
          { classification: f, isDsaEligible: T } = (0,
          i.useSafetyHubClassification)(
            null != t ? t : _.EMPTY_STRING_SNOWFLAKE_ID
          ),
          g = (null == f ? void 0 : f.is_spam) || !1,
          p = (null == f ? void 0 : f.is_coppa) || !1;
        s.useEffect(() => {
          T ? x(S) : x(E.AppealIngestionSlideTypes.COLLECT_SIGNAL);
        }, [x, S, T]);
        let m = s.useCallback(() => {
            r.default.close(), N();
          }, [N]),
          C = s.useCallback(() => {
            var e, t;
            let a = null;
            (a = T
              ? null === (e = E.SlidesOrderDsaEligible[I]) || void 0 === e
                ? void 0
                : e.next
              : null === (t = E.SlidesOrderNonDsaEligible[I]) || void 0 === t
                ? void 0
                : t.next)
              ? x(a)
              : m();
          }, [I, T, m]),
          L = s.useCallback(() => {
            var e, t;
            let a;
            (a = T
              ? null === (e = E.SlidesOrderDsaEligible[I]) || void 0 === e
                ? void 0
                : e.prev
              : null === (t = E.SlidesOrderNonDsaEligible[I]) || void 0 === t
                ? void 0
                : t.prev)
              ? x(a)
              : m();
          }, [I, T, m]);
        return (0, l.jsx)(n.ModalRoot, {
          transitionState: a,
          disableTrack: !0,
          size: n.ModalSize.DYNAMIC,
          children: (0, l.jsx)("div", {
            className: A.container,
            children: (0, l.jsxs)(n.Slides, {
              activeSlide: I,
              width: 500,
              children: [
                (0, l.jsx)(n.Slide, {
                  id: E.AppealIngestionSlideTypes.SPEED_BUMP,
                  children: (0, l.jsx)(u.default, {
                    classification: f,
                    onClose: m,
                    onNext: C,
                    isSpam: g,
                    isCoppa: p,
                  }),
                }),
                (0, l.jsx)(n.Slide, {
                  id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
                  children: (0, l.jsx)(o.default, {
                    isDsaEligible: T,
                    onClose: m,
                    onNext: C,
                    onBack: L,
                  }),
                }),
                (0, l.jsx)(n.Slide, {
                  id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
                  children: (0, l.jsx)(d.default, {
                    onClose: m,
                    onNext: C,
                    onBack: L,
                  }),
                }),
                (0, l.jsx)(n.Slide, {
                  id: E.AppealIngestionSlideTypes.REQUEST_SENT,
                  children: (0, l.jsx)(c.default, { onNext: C }),
                }),
                (0, l.jsx)(n.Slide, {
                  id: E.AppealIngestionSlideTypes.THANKS,
                  children: (0, l.jsx)(o.default, {
                    isDsaEligible: T,
                    onClose: m,
                    onNext: C,
                    onBack: L,
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    711734: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        n = a.n(s),
        i = a("77078"),
        o = a("145131"),
        d = a("228408"),
        r = a("795010"),
        c = a("170213"),
        u = a("782340"),
        E = a("938966"),
        _ = a("221389"),
        A = a("469533");
      function S(e) {
        let { className: t, onNext: a, onClose: s } = e,
          S = (0, d.useEmitAppealIngestionEvent)();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              direction: o.default.Direction.VERTICAL,
              className: _.header,
              separator: !1,
              children: [
                (0, l.jsx)("div", {
                  className: E.iconContainer,
                  children: (0, l.jsx)("img", {
                    src: A,
                    alt: "",
                    className: E.icon,
                  }),
                }),
                (0, l.jsx)(i.Heading, {
                  className: _.title,
                  variant: "heading-xl/semibold",
                  children:
                    u.default.Messages
                      .APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER,
                }),
                (0, l.jsx)(i.Heading, {
                  className: _.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    u.default.Messages
                      .APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER,
                }),
                null != s &&
                  (0, l.jsx)(i.ModalCloseButton, {
                    className: _.closeButton,
                    onClick: s,
                  }),
              ],
            }),
            (0, l.jsxs)(i.ModalContent, {
              className: n(E.modalContent, t),
              paddingFix: !1,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-md/bold",
                  color: "header-primary",
                  className: E.actionsHeader,
                  children:
                    u.default.Messages
                      .APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER,
                }),
                (0, l.jsx)(r.default, {
                  text: u.default.Messages
                    .APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
                  url: c.SafetyHubLinks.COMMUNITY_GUIDELINES,
                  onClick: () =>
                    S(c.SafetyHubAnalyticsActions.ClickCommunityGuidelinesLink),
                }),
                (0, l.jsx)(r.default, {
                  text: u.default.Messages
                    .APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
                  url: c.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                  onClick: () =>
                    S(
                      c.SafetyHubAnalyticsActions
                        .ClickWarningSystemHelpcenterLink
                    ),
                }),
              ],
            }),
            (0, l.jsx)(i.ModalFooter, {
              children: (0, l.jsx)(i.Button, {
                onClick: a,
                color: i.Button.Colors.BRAND,
                children: u.default.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    299738: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return N;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        n = a.n(s),
        i = a("77078"),
        o = a("145131"),
        d = a("667963"),
        r = a("736393"),
        c = a("228408"),
        u = a("795010"),
        E = a("380676"),
        _ = a("170213"),
        A = a("782340"),
        S = a("221389");
      function N(e) {
        var t, a;
        let {
            classification: s,
            isSpam: N = !1,
            isCoppa: I = !1,
            className: x,
            onClose: f,
            onNext: T,
          } = e,
          g = (0, c.useEmitAppealIngestionEvent)(),
          p =
            null !== (t = null == s ? void 0 : s.explainer_link) && void 0 !== t
              ? t
              : "",
          m =
            null != s &&
            null != s.flagged_content &&
            s.flagged_content.length > 0,
          C = (0, r.capitalizeText)(null == s ? void 0 : s.description),
          L = !N && !I,
          h = (0, d.useIsSafetyHubDisplayGuildViolationsEnabled)(
            "classification_evidence"
          ),
          M = null != s && (((0, r.isGuildClassification)(s) && h) || m);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              direction: o.default.Direction.VERTICAL,
              className: S.header,
              separator: !1,
              children: [
                (0, l.jsx)(i.Heading, {
                  className: S.title,
                  variant: "heading-xl/semibold",
                  children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER,
                }),
                (0, l.jsx)(i.Text, {
                  className: S.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children:
                    A.default.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER,
                }),
                null != f &&
                  (0, l.jsx)(i.ModalCloseButton, {
                    className: S.closeButton,
                    onClick: f,
                  }),
              ],
            }),
            (0, l.jsxs)(i.ModalContent, {
              className: n(S.modalContent, !M && S.evidenceOffset, x),
              paddingFix: !1,
              children: [
                M &&
                  (0, l.jsx)(E.ClassificationEvidence, {
                    flaggedContent:
                      null !== (a = s.flagged_content) && void 0 !== a ? a : [],
                    actions: s.actions,
                    guildMetadata: s.guild_metadata,
                  }),
                (0, l.jsx)(i.Text, {
                  className: S.optionHeader,
                  color: "header-secondary",
                  variant: "text-xs/bold",
                  children:
                    A.default.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER,
                }),
                (0, l.jsx)("div", {
                  className: S.policyContainer,
                  children: (0, l.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children: C,
                  }),
                }),
                I &&
                  (0, l.jsx)(u.default, {
                    url: _.SafetyHubLinks.AGE_VERIFICATION_LINK,
                    text: A.default.Messages
                      .APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
                    onClick: () =>
                      g(_.SafetyHubAnalyticsActions.ClickAgeVerificationLink),
                  }),
                N &&
                  !I &&
                  (0, l.jsx)(u.default, {
                    url: _.SafetyHubLinks.SPAM_LINK,
                    text: A.default.Messages
                      .APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
                    onClick: () =>
                      g(_.SafetyHubAnalyticsActions.ClickSpamWebformLink),
                  }),
                !I &&
                  (0, l.jsx)(u.default, {
                    text: A.default.Messages
                      .APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                    url: p,
                    onClick: () =>
                      g(_.SafetyHubAnalyticsActions.ClickLearnMoreLink),
                  }),
                L &&
                  (0, l.jsx)(i.Text, {
                    className: S.learnMore,
                    variant: "text-xs/normal",
                    children:
                      A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format(),
                  }),
              ],
            }),
            L &&
              (0, l.jsx)(i.ModalFooter, {
                children: (0, l.jsx)(i.Button, {
                  onClick: T,
                  color: i.Button.Colors.BRAND,
                  children: A.default.Messages.NEXT,
                }),
              }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=29059f40b6ec0cc6136b.js.map
