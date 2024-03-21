(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92872"],
  {
    69448: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f6da6e7ed1d57e445d0e.svg";
    },
    82480: function (e, t, s) {
      "use strict";
      e.exports = s.p + "4ce9fafdd08324c669a3.svg";
    },
    546597: function (e, t, s) {
      "use strict";
      e.exports = s.p + "19a0dceeb544a5615dd2.svg";
    },
    921208: function (e, t, s) {
      "use strict";
      e.exports = s.p + "71144958557c842ae33c.svg";
    },
    361326: function (e, t, s) {
      "use strict";
      e.exports = s.p + "bc9f96c62050424f9a95.png";
    },
    16108: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          acceptMessageRequest: function () {
            return u;
          },
          clearMessageRequestState: function () {
            return l;
          },
          markAsMessageRequest: function () {
            return c;
          },
          rejectMessageRequest: function () {
            return E;
          },
          rejectMessageRequestBatch: function () {
            return T;
          },
          fetchUserCountryCode: function () {
            return d;
          },
        });
      var n = s("872717"),
        a = s("913144"),
        r = s("437822"),
        o = s("773163"),
        i = s("49111");
      async function u(e) {
        await n.HTTP.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: o.MessageRequestConsentStatusTypes.ACCEPTED },
        }),
          a.default.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function l(e) {
        return n.HTTP.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: {
            consent_status: o.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function c(e) {
        return n.HTTP.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: o.MessageRequestConsentStatusTypes.PENDING },
        });
      }
      function E(e) {
        return n.HTTP.del({ url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e) });
      }
      function T(e) {
        return n.HTTP.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function d() {
        r.default.getLocationMetadata();
      }
    },
    773163: function (e, t, s) {
      "use strict";
      var n, a;
      s.r(t),
        s.d(t, {
          MessageRequestConsentStatusTypes: function () {
            return n;
          },
        }),
        ((a = n || (n = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.PENDING = 1)] = "PENDING"),
        (a[(a.ACCEPTED = 2)] = "ACCEPTED"),
        (a[(a.REJECTED = 3)] = "REJECTED");
    },
    324252: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          LOCATION_CONTEXT_WEB: function () {
            return a;
          },
          CRISIS_TEXT_LINE_URL: function () {
            return r;
          },
          NOFILTR_URL: function () {
            return o;
          },
          MODAL_LOCATION_CONTEXT_WEB: function () {
            return i;
          },
          SAFETY_TOOLS_MODAL_KEY: function () {
            return u;
          },
          getStrangerDangerSafetyTips: function () {
            return l;
          },
          getInappropriateConversationsSafetyTips: function () {
            return c;
          },
        });
      var n = s("782340");
      let a = "SAFETY_WARNING_BANNER_WEB",
        r = "https://www.crisistextline.org/",
        o = "https://nofiltr.org/resources-hub/",
        i = "InappropriateConversationModal-web",
        u = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        l = () => [
          n.default.Messages.STRANGER_DANGER_TIPS_1,
          n.default.Messages.STRANGER_DANGER_TIPS_2,
          n.default.Messages.STRANGER_DANGER_TIPS_3,
        ],
        c = () => [
          n.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_1,
          n.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_2,
          n.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_3,
        ];
    },
    615992: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useLastChannelMessage: function () {
            return r;
          },
        });
      var n = s("446674"),
        a = s("377253");
      let r = e =>
        (0, n.useStateFromStores)([a.default], () => {
          var t;
          return null !== (t = a.default.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : a.default.getLastMessage(e);
        });
    },
    33320: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          InappropriateConversationModalSlideKeys: function () {
            return n;
          },
          default: function () {
            return I;
          },
        }),
        s("222007");
      var n,
        a,
        r = s("37983"),
        o = s("884691"),
        i = s("77078"),
        u = s("277734"),
        l = s("217736"),
        c = s("271201"),
        E = s("330460"),
        T = s("763332"),
        d = s("782340"),
        N = s("417365");
      ((a = n || (n = {}))[(a.INTRO = 0)] = "INTRO"),
        (a[(a.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (a[(a.TAKE_ACTION = 2)] = "TAKE_ACTION");
      var I = e => {
        let {
            warningId: t,
            warningType: s,
            senderId: n,
            modalProps: a,
            channelId: I,
          } = e,
          [A, _] = o.useState(0),
          R = o.useMemo(
            () => ({
              channelId: I,
              senderId: n,
              warningId: t,
              warningType: s,
              isNudgeWarning: !1,
            }),
            [I, n, t, s]
          );
        o.useEffect(() => {
          (0, l.trackNamedViewEvent)({
            ...R,
            viewName: l.ViewNameTypes.SAFETY_TAKEOVER_MODAL,
          });
        }, [R]);
        let O = o.useCallback(
            e => {
              (0, l.trackCtaEvent)({ ...R, cta: e });
            },
            [R]
          ),
          [C, f] = o.useState(!1);
        function S(e) {
          _(e);
        }
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: a.transitionState,
          children: [
            (0, r.jsx)("div", {
              className: N.container,
              children: (0, r.jsxs)(i.Slides, {
                width: 440,
                activeSlide: A,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [
                  (0, r.jsx)(i.Slide, {
                    id: 0,
                    children: (0, r.jsx)(c.default, {
                      warningId: t,
                      senderId: n,
                      trackAnalyticsEvent: O,
                      onNavigate: S,
                    }),
                  }),
                  (0, r.jsx)(i.Slide, {
                    id: 1,
                    children: (0, r.jsx)(E.default, {
                      warningId: t,
                      senderId: n,
                      trackAnalyticsEvent: O,
                    }),
                  }),
                  (0, r.jsx)(i.Slide, {
                    id: 2,
                    children: (0, r.jsx)(T.default, {
                      warningId: t,
                      senderId: n,
                      trackAnalyticsEvent: O,
                      channelId: I,
                      hasReported: C,
                      onReport: function () {
                        f(!0);
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(i.ModalFooter, {
              className: N.footer,
              children: [
                (0, r.jsx)(i.Button, {
                  className: N.footerButton,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.CUSTOM,
                  size: i.Button.Sizes.MIN,
                  onClick: function () {
                    a.onClose(),
                      (0, u.dismissChannelSafetyWarnings)(I, [t]),
                      O(l.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS);
                  },
                  children: d.default.Messages.CLOSE,
                }),
                0 !== A &&
                  (0, r.jsx)(i.Button, {
                    className: N.footerButton,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.CUSTOM,
                    size: i.Button.Sizes.MIN,
                    onClick: () => S(0),
                    children: d.default.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      };
    },
    302577: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        r = s("932379");
      function o(e) {
        let {
          heroImageSrc: t,
          heroImageAlt: s,
          children: o,
          header: i,
          description: u,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("img", { src: t, alt: s, className: r.heroImage }),
            (0, n.jsxs)(a.ModalContent, {
              className: r.body,
              children: [
                (0, n.jsxs)("div", {
                  className: r.textContainer,
                  children: [
                    (0, n.jsx)(a.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: i,
                    }),
                    null != u &&
                      (0, n.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: r.description,
                        children: u,
                      }),
                  ],
                }),
                o,
              ],
            }),
          ],
        });
      }
    },
    271201: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        r = s("446674"),
        o = s("697218"),
        i = s("158998"),
        u = s("217736"),
        l = s("33320"),
        c = s("302577"),
        E = s("782340"),
        T = s("932379"),
        d = s("546597");
      function N(e) {
        let { senderId: t, trackAnalyticsEvent: s, onNavigate: N } = e,
          I = (0, r.useStateFromStores)([o.default], () => {
            let e = o.default.getUser(t);
            return i.default.getName(e);
          });
        return (0, n.jsx)(c.default, {
          header: E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
          description:
            E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format(
              { username: I }
            ),
          heroImageSrc: d,
          heroImageAlt:
            E.default.Messages
              .INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
          children: (0, n.jsxs)("div", {
            className: T.buttonContainer,
            children: [
              (0, n.jsx)(a.Button, {
                color: a.Button.Colors.BRAND_NEW,
                size: a.Button.Sizes.LARGE,
                className: T.button,
                onClick: () => {
                  N(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
                    s(u.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
                },
                children:
                  E.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION,
              }),
              (0, n.jsx)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: T.button,
                onClick: () => {
                  N(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
                    s(u.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                },
                children:
                  E.default.Messages
                    .INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS,
              }),
            ],
          }),
        });
      }
    },
    330460: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("632758"),
        r = s("302577"),
        o = s("324252"),
        i = s("782340"),
        u = s("932379"),
        l = s("82480");
      function c(e) {
        let {} = e,
          t = (0, o.getInappropriateConversationsSafetyTips)();
        return (0, n.jsx)(r.default, {
          heroImageSrc: l,
          heroImageAlt:
            i.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
          header:
            i.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER,
          children: (0, n.jsx)("div", {
            className: u.safetyTips,
            children: (0, n.jsx)(a.default, {
              tips: t,
              headerText:
                i.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION,
            }),
          }),
        });
      }
    },
    763332: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        r = s("733154"),
        o = s("505088"),
        i = s("202804"),
        u = s("77078"),
        l = s("446674"),
        c = s("736964"),
        E = s("545158"),
        T = s("377114"),
        d = s("652126"),
        N = s("27618"),
        I = s("217736"),
        A = s("615992"),
        _ = s("302577"),
        R = s("324252"),
        O = s("49111"),
        C = s("782340"),
        f = s("932379"),
        S = s("921208");
      function P(e) {
        let {
            senderId: t,
            channelId: s,
            hasReported: P,
            onReport: p,
            trackAnalyticsEvent: h,
          } = e,
          g = (0, l.useStateFromStores)([N.default], () =>
            N.default.isBlocked(t)
          ),
          [M, m] = a.useState(g),
          L = (0, d.useShouldShowHelplineLink)(),
          [v, x] = a.useState(!1),
          j = (0, A.useLastChannelMessage)(s),
          B = () => {
            m(!0),
              c.default.addRelationship({
                userId: t,
                context: { location: R.MODAL_LOCATION_CONTEXT_WEB },
                type: O.RelationshipTypes.BLOCKED,
              }),
              h(I.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
          },
          D = () => {
            m(!1),
              c.default.unblockUser(t, {
                location: R.MODAL_LOCATION_CONTEXT_WEB,
              }),
              h(I.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
          },
          y = async () => {
            null != j &&
              (x(!0),
              await (0, T.submitReportForInappropriateConversationSafetyAlert)(
                j,
                () => {
                  (0, u.showToast)(
                    (0, u.createToast)(
                      C.default.Messages
                        .INAPPROPRIATE_CONVERSATION_REPORT_TOAST,
                      u.ToastType.SUCCESS
                    )
                  ),
                    p();
                },
                () => {
                  (0, u.showToast)(
                    (0, u.createToast)(
                      C.default.Messages
                        .INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST,
                      u.ToastType.FAILURE
                    )
                  );
                }
              ),
              x(!1),
              h(I.CtaEventTypes.USER_TAKEOVER_MODAL_REPORT));
          };
        return (0, n.jsx)(_.default, {
          heroImageSrc: S,
          heroImageAlt:
            C.default.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
          header:
            C.default.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
          description:
            C.default.Messages
              .INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
          children: (0, n.jsxs)("div", {
            className: f.buttonContainer,
            children: [
              (0, n.jsxs)(u.Button, {
                color: u.Button.Colors.BRAND_NEW,
                size: u.Button.Sizes.LARGE,
                className: f.button,
                innerClassName: f.buttonInner,
                onClick: () => {
                  M ? D() : B();
                },
                children: [
                  (0, n.jsx)(o.CircleXIcon, {
                    height: 20,
                    width: 20,
                    color: u.tokens.colors.WHITE,
                    className: f.buttonIcon,
                  }),
                  M ? C.default.Messages.UNBLOCK : C.default.Messages.BLOCK,
                ],
              }),
              (0, n.jsxs)(u.Button, {
                color: u.Button.Colors.PRIMARY,
                size: u.Button.Sizes.LARGE,
                className: f.button,
                innerClassName: f.buttonInner,
                onClick: y,
                submitting: v,
                disabled: P,
                children: [
                  (0, n.jsx)(i.FlagIcon, {
                    height: 20,
                    width: 20,
                    color: u.tokens.colors.WHITE,
                    className: f.buttonIcon,
                  }),
                  P
                    ? C.default.Messages
                        .INAPPROPRIATE_CONVERSATION_ACTION_REPORTED
                    : C.default.Messages
                        .INAPPROPRIATE_CONVERSATION_ACTION_REPORT,
                ],
              }),
              (0, n.jsxs)(u.Button, {
                color: u.Button.Colors.PRIMARY,
                size: u.Button.Sizes.LARGE,
                className: f.button,
                innerClassName: f.buttonInner,
                onClick: () => {
                  L
                    ? ((0, E.default)(R.CRISIS_TEXT_LINE_URL),
                      h(I.CtaEventTypes.USER_TAKEOVER_MODAL_CTL))
                    : ((0, E.default)(R.NOFILTR_URL),
                      h(I.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR));
                },
                children: [
                  (0, n.jsx)(r.ChatIcon, {
                    height: 20,
                    width: 20,
                    color: u.tokens.colors.WHITE,
                    className: f.buttonIcon,
                  }),
                  L
                    ? C.default.Messages
                        .INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL
                    : C.default.Messages
                        .SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
                ],
              }),
            ],
          }),
        });
      }
    },
    632758: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        r = s.n(a),
        o = s("77078"),
        i = s("968246");
      function u(e) {
        let { tips: t, className: s, headerText: a } = e;
        return (0, n.jsxs)("div", {
          className: r(i.tipsSection, s),
          children: [
            (0, n.jsx)("div", {
              className: i.tipsHeader,
              children: (0, n.jsx)(o.Heading, {
                variant: "heading-lg/bold",
                className: i.headerText,
                children: a,
              }),
            }),
            (0, n.jsx)("ul", {
              className: i.tipsList,
              children: t.map((e, t) =>
                (0, n.jsxs)(
                  "li",
                  {
                    className: i.tipRow,
                    children: [
                      (0, n.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: i.tipNumber,
                        children: t + 1,
                      }),
                      (0, n.jsx)(o.Text, {
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
    555158: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return N;
          },
        });
      var n,
        a,
        r = s("37983");
      s("884691");
      var o = s("414456"),
        i = s.n(o),
        u = s("77078"),
        l = s("36694"),
        c = s("381546"),
        E = s("68238"),
        T = s("423487"),
        d = s("950038");
      ((n = a || (a = {}))[(n.WARNING = 0)] = "WARNING"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.ERROR = 2)] = "ERROR"),
        (n[(n.POSITIVE = 3)] = "POSITIVE");
      var N = function (e) {
        let {
            children: t,
            messageType: s,
            className: n,
            textColor: a = "text-normal",
            textVariant: o = "text-sm/medium",
          } = e,
          N = (function (e) {
            switch (e) {
              case 0:
                return T.default;
              case 1:
                return E.default;
              case 2:
                return c.default;
              case 3:
                return l.default;
            }
          })(s),
          I = (function (e) {
            switch (e) {
              case 0:
                return d.warning;
              case 1:
                return d.info;
              case 2:
                return d.error;
              case 3:
                return d.positive;
            }
          })(s);
        return (0, r.jsxs)("div", {
          className: i(d.container, I, n),
          children: [
            (0, r.jsx)("div", {
              className: d.iconDiv,
              children: (0, r.jsx)(N, { className: d.icon }),
            }),
            (0, r.jsx)(u.Text, {
              className: d.text,
              color: a,
              variant: o,
              children: t,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=2100514f956683f124ed.js.map
