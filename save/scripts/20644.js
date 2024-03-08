(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20644"],
  {
    187752: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        }),
        s("222007");
      var a,
        l,
        i = s("37983"),
        n = s("884691"),
        C = s("77078"),
        _ = s("850068"),
        I = s("812204"),
        N = s("685665"),
        o = s("168973"),
        A = s("191814"),
        d = s("476765"),
        r = s("599110"),
        c = s("129408"),
        E = s("945986"),
        O = s("990458"),
        S = s("49111"),
        u = s("782340"),
        T = s("543220");
      let L = e => {
        let [t, s] = n.useState(!1),
          [a, l] = n.useState(null),
          i = async t => {
            try {
              return s(!0), await _.cancelSubscription(t, e), !0;
            } catch (e) {
              l(e);
            } finally {
              s(!1);
            }
          };
        return { cancelSubscription: i, error: a, submitting: t };
      };
      function P(e) {
        let {
            transitionState: t,
            application: s,
            listing: a,
            subscription: l,
            guild: _,
            onClose: P,
          } = e,
          R = (0, d.useUID)(),
          { analyticsLocations: U } = (0, N.default)(
            I.default.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL
          ),
          { cancelSubscription: f, error: p, submitting: B } = L(U),
          [m, h] = n.useState(0),
          x = async () => {
            let e = await f(l.id);
            e &&
              (o.default.disableApplicationSubscriptionCancellationSurvey
                ? P()
                : h(1));
          };
        n.useEffect(() => {
          r.default.track(S.AnalyticEvents.CANCELLATION_FLOW_STARTED, {
            location_stack: U,
          });
        }, [U]);
        let M = (0, c.isApplicationUserSubscription)(a.sku_flags);
        return (0, i.jsx)(C.ModalRoot, {
          transitionState: t,
          className: T.modal,
          "aria-labelledby": R,
          children: (0, i.jsxs)(C.Slides, {
            activeSlide: m,
            width: 440,
            children: [
              (0, i.jsx)(C.Slide, {
                id: 0,
                children: (0, i.jsxs)("div", {
                  className: T.slideContainer,
                  children: [
                    null != p
                      ? (0, i.jsx)(C.FormErrorBlock, { children: p.message })
                      : null,
                    (0, i.jsxs)(C.ModalContent, {
                      className: T.content,
                      children: [
                        (0, i.jsx)(A.default, { size: 16 }),
                        (0, i.jsxs)(E.ApplicationBenefitsModalContent, {
                          children: [
                            (0, i.jsx)(E.ApplicationBenefitsModalIcon, {
                              application: s,
                            }),
                            (0, i.jsx)(E.ApplicationBenefitsModalHeading, {
                              id: R,
                              children:
                                u.default.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format(
                                  { tier: a.name }
                                ),
                            }),
                            (0, i.jsx)(E.ApplicationBenefitsModalDivider, {}),
                            (0, i.jsx)(E.ApplicationBenefitsModalDescription, {
                              title:
                                u.default.Messages
                                  .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                              description: M
                                ? u.default.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format(
                                    { timestamp: l.currentPeriodEnd.getTime() }
                                  )
                                : u.default.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format(
                                    {
                                      timestamp: l.currentPeriodEnd.getTime(),
                                      guildName: null == _ ? void 0 : _.name,
                                    }
                                  ),
                            }),
                            (0, i.jsx)(E.ApplicationBenefitsModalBenefits, {
                              applicationId: a.application_id,
                              storeListingBenefits: a.store_listing_benefits,
                              skuBenefits: a.sku_benefits.benefits,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(C.ModalFooter, {
                      className: T.footer,
                      children: [
                        (0, i.jsx)(C.Button, {
                          color: C.Button.Colors.RED,
                          onClick: x,
                          submitting: B,
                          children:
                            u.default.Messages
                              .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA,
                        }),
                        (0, i.jsx)(C.Button, {
                          look: C.Button.Looks.LINK,
                          color: C.Button.Colors.PRIMARY,
                          className: T.goBackButton,
                          onClick: P,
                          children:
                            u.default.Messages
                              .APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(C.Slide, {
                id: 1,
                children: (0, i.jsx)("div", {
                  className: T.slideContainer,
                  children: (0, i.jsx)(O.default, {
                    application: s,
                    subscriptionId: l.id,
                    onClose: P,
                  }),
                }),
              }),
            ],
          }),
        });
      }
      ((l = a || (a = {}))[(l.CANCEL = 0)] = "CANCEL"),
        (l[(l.SURVEY = 1)] = "SURVEY");
    },
    990458: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        i = s("77078"),
        n = s("452804"),
        C = s("191814"),
        _ = s("599110"),
        I = s("49111"),
        N = s("782340"),
        o = s("80988");
      let A = [
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
          nameGetter: () =>
            N.default.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
          nameGetter: () =>
            N.default.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
          nameGetter: () =>
            N.default.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
          nameGetter: () =>
            N.default.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE,
        },
        {
          value:
            "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
          nameGetter: () =>
            N.default.Messages
              .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER,
        },
      ];
      function d(e) {
        let { application: t, subscriptionId: s, onClose: d } = e,
          [r, c] = l.useState(!1),
          [E, O] = l.useState(null),
          [S, u] = l.useState(""),
          T = l.useCallback(() => {
            null != E &&
              (_.default.track(
                I.AnalyticEvents.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED,
                {
                  answer: E,
                  application_id: t.id,
                  reason: S,
                  subscription_id: s,
                }
              ),
              d());
          }, [t.id, s, E, d, S]);
        return (
          l.useEffect(() => {
            n.default.updatedUnsyncedSettings({
              disableApplicationSubscriptionCancellationSurvey: r,
            });
          }, [r]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(i.ModalHeader, {
                className: o.headerContainer,
                separator: !1,
                children: [
                  (0, a.jsxs)("div", {
                    className: o.titleContainer,
                    children: [
                      (0, a.jsx)(i.Text, {
                        className: o.headerTitle,
                        variant: "text-lg/semibold",
                        children:
                          N.default.Messages
                            .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE,
                      }),
                      (0, a.jsx)(i.ModalCloseButton, {
                        className: o.modalCloseButton,
                        onClick: d,
                      }),
                    ],
                  }),
                  (0, a.jsx)(C.default, { size: 8 }),
                  (0, a.jsx)(i.Text, {
                    className: o.headerSubtitle,
                    variant: "text-md/medium",
                    children:
                      N.default.Messages
                        .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE,
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                children: [
                  (0, a.jsx)("div", {
                    className: o.answerChoicesContainer,
                    children: (0, a.jsx)(i.RadioGroup, {
                      value: E,
                      options: A.map(e => {
                        let { nameGetter: t, value: s } = e;
                        return { name: t(), value: s };
                      }),
                      onChange: e => O(e.value),
                      withTransparentBackground: !0,
                    }),
                  }),
                  "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" ===
                    E &&
                    (0, a.jsx)(i.TextInput, {
                      autoFocus: !0,
                      className: o.otherField,
                      placeholder:
                        N.default.Messages
                          .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
                      value: S,
                      onChange: u,
                    }),
                ],
              }),
              (0, a.jsxs)(i.ModalFooter, {
                className: o.footer,
                children: [
                  (0, a.jsx)(i.Button, {
                    onClick: T,
                    color: i.Button.Colors.BRAND,
                    disabled: null == E,
                    children: N.default.Messages.SUBMIT,
                  }),
                  (0, a.jsx)(i.Checkbox, {
                    type: i.Checkbox.Types.INVERTED,
                    value: r,
                    onChange: (e, t) => c(t),
                    size: 20,
                    className: o.checkbox,
                    children: (0, a.jsx)(i.Text, {
                      variant: "text-sm/medium",
                      children:
                        N.default.Messages
                          .APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=9800072a04fcc3764f7e.js.map
