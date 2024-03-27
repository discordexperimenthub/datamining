(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15262"],
  {
    619025: function (e, t, n) {
      "use strict";
      e.exports = n.p + "aa2afb65f20b2a22447c.svg";
    },
    258925: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c1957de296fc76c595c7.svg";
    },
    40755: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ea00a9ee82d2b42562bd.svg";
    },
    880865: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c3389d3a16ceea3ef63a.svg";
    },
    307367: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("748820"),
        l = n("872717"),
        a = n("850068"),
        o = n("253981"),
        u = n("635357"),
        d = n("642906"),
        c = n("85336"),
        p = n("149833"),
        f = n("523591"),
        m = n("153727"),
        S = n("650484"),
        P = n("49111"),
        E = n("646718");
      function _(e) {
        let { handleStepChange: t } = e,
          {
            selectedPlan: n,
            browserCheckoutState: _,
            browserCheckoutStateLoadId: C,
            contextMetadata: x,
          } = (0, d.usePaymentContext)(),
          { isGift: I } = (0, u.useGiftContext)(),
          [T, h] = i.useState(!1);
        return (
          i.useEffect(() => {
            var e;
            !T &&
              (h(!0),
              (0, a.startBrowserCheckout)(x.loadId),
              !(function (e, t, n, r) {
                let i = P.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                  a = new URL(
                    o.default.makeUrl(P.Routes.BILLING_LOGIN_HANDOFF)
                  ),
                  u = (0, s.v4)();
                a.searchParams.append("handoff_key", u),
                  a.searchParams.append("redirect_to", i),
                  l.HTTP.post({
                    url: P.Endpoints.HANDOFF,
                    body: { key: u },
                    oldFormErrors: !0,
                  }).then(
                    e => {
                      a.searchParams.append(
                        "handoff_token",
                        e.body.handoff_token
                      ),
                        window.open(a.href);
                    },
                    () => {
                      r();
                    }
                  );
              })(
                null !== (e = null == n ? void 0 : n.id) && void 0 !== e
                  ? e
                  : E.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                I,
                x.loadId,
                () => t(c.Step.ADD_PAYMENT_STEPS)
              ));
          }, [n, I, T, h, x, t]),
          i.useEffect(() => {
            C === x.loadId &&
              _ === f.BrowserCheckoutState.DONE &&
              t(c.Step.CONFIRM);
          }, [_, C, x, t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(m.default, {}),
              (0, r.jsx)(S.PaymentPortalBody, {
                children: (0, r.jsx)(p.AwaitingBrowserCheckoutStepBody, {}),
              }),
              (0, r.jsx)(S.PaymentPortalFooter, {
                children: (0, r.jsx)(p.AwaitingBrowserCheckoutStepFooter, {
                  onStepChange: t,
                  onBackClick: () => t(c.Step.PLAN_SELECT),
                }),
              }),
            ],
          })
        );
      }
    },
    149833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AwaitingBrowserCheckoutStepBody: function () {
            return u;
          },
          AwaitingBrowserCheckoutStepFooter: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("77078"),
        s = n("177998"),
        l = n("145131"),
        a = n("85336"),
        o = n("782340");
      let u = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsx)(i.Heading, {
              variant: "heading-xl/bold",
              children:
                o.default.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER,
            }),
          }),
        d = e => {
          let { onStepChange: t, onBackClick: n } = e;
          return (0, r.jsx)("div", {
            children: (0, r.jsxs)(i.ModalFooter, {
              justify: l.default.Justify.BETWEEN,
              align: l.default.Align.CENTER,
              children: [
                (0, r.jsx)(i.Button, {
                  color: i.Button.Colors.BRAND,
                  onClick: () => {
                    t(a.Step.ADD_PAYMENT_STEPS);
                  },
                  children:
                    o.default.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON,
                }),
                (0, r.jsx)(s.default, { onClick: n }),
              ],
            }),
          });
        };
    },
    992049: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentConfirmStep: function () {
            return S;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("627445"),
        l = n.n(s),
        a = n("491523"),
        o = n("775155"),
        u = n("659632"),
        d = n("380186"),
        c = n("635357"),
        p = n("642906"),
        f = n("650484"),
        m = n("367767");
      function S(e) {
        var t, n;
        let s,
          {
            handleClose: S,
            planGroup: P,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: _,
            postSuccessGuild: C,
            followupSKUInfo: x,
          } = e,
          {
            activeSubscription: I,
            paymentSources: T,
            paymentSourceId: h,
            selectedPlan: g,
            selectedSkuId: y,
            step: M,
            updatedSubscription: N,
            startingPremiumSubscriptionPlanIdRef: b,
          } = (0, p.usePaymentContext)(),
          {
            isGift: A,
            giftRecipient: j,
            giftCode: k,
            hasSentMessage: L,
            isSendingMessage: O,
            sendGiftMessage: v,
          } = (0, c.useGiftContext)();
        l(null != g, "Expected plan to selected"),
          l(null != y, "Expected selectedSkuId"),
          l(null != M, "Step should be set");
        let R = i.useCallback(() => {
          S(), null == E || E();
        }, [S, E]);
        return (
          i.useEffect(() => {
            if (
              !A ||
              null == j ||
              null == k ||
              L ||
              O ||
              (0, u.shouldShowCustomGiftExperience)(j)
            )
              return;
            let e = a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
              location: "36b986_1",
            }).enabled;
            e && v({ onSubscriptionConfirmation: E });
          }, [v, A, j, k, L, O, E]),
          (s =
            null != _
              ? _(g, R, N)
              : A
                ? (0, r.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: g.id,
                    onClose: R,
                  })
                : b.current === g.id
                  ? (0, r.jsx)(o.default, {
                      planId: g.id,
                      postSuccessGuild: C,
                      onClose: R,
                      paymentSourceType:
                        null === (t = T[null != h ? h : ""]) || void 0 === t
                          ? void 0
                          : t.type,
                    })
                  : (0, r.jsx)(o.default, {
                      followupSKUInfo: x,
                      startingPremiumSubscriptionPlanId: b.current,
                      planId: g.id,
                      onClose: R,
                      isDowngrade:
                        null != I &&
                        (0, d.subscriptionCanDowngrade)(I, g.id, P),
                      paymentSourceType:
                        null === (n = T[null != h ? h : ""]) || void 0 === n
                          ? void 0
                          : n.type,
                    })),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(f.PaymentPortalBody, {
              children: [(0, r.jsx)(m.default, {}), s],
            }),
          })
        );
      }
    },
    646139: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentModal: function () {
            return L;
          },
          STEPS: function () {
            return R;
          },
          default: function () {
            return B;
          },
        }),
        n("70102"),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("446674"),
        l = n("913144"),
        a = n("775433"),
        o = n("812204"),
        u = n("685665"),
        d = n("10514"),
        c = n("521012"),
        p = n("659632"),
        f = n("635357"),
        m = n("642906"),
        S = n("85336"),
        P = n("385179"),
        E = n("262683"),
        _ = n("946359"),
        C = n("307367"),
        x = n("724269"),
        I = n("99836"),
        T = n("992049"),
        h = n("176108"),
        g = n("97461"),
        y = n("403365"),
        M = n("498475"),
        N = n("254350"),
        b = n("49111"),
        A = n("646718"),
        j = n("782340");
      let k = [
        S.Step.PLAN_SELECT,
        S.Step.ADD_PAYMENT_STEPS,
        S.Step.REVIEW,
        S.Step.CONFIRM,
      ];
      function L(e) {
        let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: o,
            transitionState: c,
            initialPlanId: E,
            subscriptionTier: _,
            onClose: C,
            trialId: x,
            trialFooterMessageOverride: I,
            reviewWarningMessage: T,
            openInvoiceId: h,
            onSubscriptionConfirmation: g,
            renderPurchaseConfirmation: y,
            postSuccessGuild: M,
            followupSKUInfo: N,
            renderHeader: j,
            applicationId: k,
            guildId: L,
            referralTrialOfferId: O,
            skuId: v,
            returnRef: R,
            skipConfirm: B = !1,
          } = e,
          { analyticsLocations: U } = (0, u.default)();
        i.useEffect(() => {
          !d.default.isLoadedForPremiumSKUs() &&
            l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)());
        }, []);
        let { step: G } = (0, m.usePaymentContext)(),
          {
            isGift: w,
            giftMessage: F,
            giftRecipient: D,
          } = (0, f.useGiftContext)(),
          H =
            w &&
            (0, p.shouldShowCustomGiftExperience)(D) &&
            G === S.Step.PLAN_SELECT;
        return (0, r.jsx)(P.PaymentModal, {
          analyticsLocations: U,
          analyticsLocation: t,
          analyticsObject: n,
          analyticsSourceLocation: s,
          analyticsSubscriptionType: b.SubscriptionTypes.PREMIUM,
          onComplete: o,
          transitionState: c,
          initialPlanId: E,
          giftMessage: F,
          subscriptionTier: _,
          onClose: C,
          trialId: x,
          isGift: w,
          trialFooterMessageOverride: I,
          reviewWarningMessage: T,
          planGroup: A.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
          openInvoiceId: h,
          onSubscriptionConfirmation: g,
          renderPurchaseConfirmation: y,
          postSuccessGuild: M,
          followupSKUInfo: N,
          renderHeader: j,
          applicationId: k,
          guildId: L,
          referralTrialOfferId: O,
          skuId: v,
          shakeWhilePurchasing: !0,
          isLargeModal: H,
          returnRef: R,
          skipConfirm: B,
        });
      }
      function O(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } =
            (0, m.usePaymentContext)(),
          { isGift: r } = (0, f.useGiftContext)();
        return (0, h.inOneStepSubscriptionCheckout)({
          isTrial: null != e && e,
          isGift: r,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: t.current,
        });
      }
      function v(e) {
        let {
            initialPlanId: t,
            handleStepChange: n,
            referralTrialOfferId: i,
          } = e,
          { paymentSources: s, selectedSkuId: l } = (0, m.usePaymentContext)(),
          { isGift: a } = (0, f.useGiftContext)(),
          o = (0, N.default)({ isGift: a, skuId: l, referralTrialOfferId: i }),
          u = O(o);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(E.PaymentModalAddPaymentStep, {
            ...e,
            breadcrumbSteps: k,
            onReturn: () => {
              let e =
                Object.values(s).length < 1 && null == t
                  ? S.Step.PLAN_SELECT
                  : S.Step.REVIEW;
              u && (e = S.Step.REVIEW),
                n(e, { trackedFromStep: S.Step.PAYMENT_TYPE });
            },
          }),
        });
      }
      let R = [
        {
          key: null,
          renderStep: e => (0, r.jsx)(P.PaymentPredicateStep, { ...e }),
        },
        {
          key: S.Step.SKU_SELECT,
          renderStep: e => (0, r.jsx)(y.PremiumPaymentSKUSelectStep, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: S.Step.WHAT_YOU_LOSE,
          renderStep: e =>
            (0, r.jsx)(M.PremiumPaymentWhatYouLoseStep, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: S.Step.PLAN_SELECT,
          renderStep: e => (0, r.jsx)(g.PremiumPaymentPlanSelectStep, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => {
              let t = O(e);
              return t ? null : j.default.Messages.BILLING_STEP_SELECT_PLAN;
            },
          },
        },
        {
          key: S.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(v, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => {
              let t = O(e);
              return t ? null : j.default.Messages.BILLING_STEP_PAYMENT;
            },
          },
        },
        {
          key: S.Step.AWAITING_BROWSER_CHECKOUT,
          renderStep: e => (0, r.jsx)(C.default, { ...e }),
        },
        {
          key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(x.default, {}),
        },
        {
          key: S.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(_.default, {}),
        },
        {
          key: S.Step.REVIEW,
          renderStep: e => (0, r.jsx)(I.PaymentModalReviewStep, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => {
              let t = O(e);
              return t
                ? j.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                : j.default.Messages.BILLING_STEP_REVIEW;
            },
          },
        },
        {
          key: S.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(T.PremiumPaymentConfirmStep, { ...e }),
        },
      ];
      function B(e) {
        let t = (0, s.useStateFromStores)([c.default], () =>
            c.default.getPremiumTypeSubscription()
          ),
          { analyticsLocations: n } = (0, u.default)(
            e.analyticsLocations,
            o.default.PREMIUM_PAYMENT_MODAL
          ),
          {
            subscriptionTier: i,
            isGift: l,
            giftRecipient: a,
            giftMessage: d,
            loadId: p,
            defaultPlanId: S,
            referralCode: P,
          } = e;
        if (null != i && !Object.values(A.PremiumSubscriptionSKUs).includes(i))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, r.jsx)(u.AnalyticsLocationProvider, {
          value: n,
          children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: p,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: R,
            skuIDs: [...A.ACTIVE_PREMIUM_SKUS],
            isGift: l,
            defaultPlanId: S,
            referralCode: P,
            children: (0, r.jsx)(f.GiftContextProvider, {
              isGift: l,
              giftRecipient: null == a ? void 0 : a,
              giftMessage: d,
              children: (0, r.jsx)(L, { ...e }),
            }),
          }),
        });
      }
    },
    97461: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentPlanSelectStep: function () {
            return R;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("627445"),
        l = n.n(s),
        a = n("65597"),
        o = n("77078"),
        u = n("856413"),
        d = n("916187"),
        c = n("809071"),
        p = n("669073"),
        f = n("154889"),
        m = n("917247"),
        S = n("358821"),
        P = n("570727"),
        E = n("697218"),
        _ = n("10514"),
        C = n("145131"),
        x = n("659632"),
        I = n("701909"),
        T = n("719923"),
        h = n("635357"),
        g = n("642906"),
        y = n("85336"),
        M = n("153727"),
        N = n("628738"),
        b = n("650484"),
        A = n("310093"),
        j = n("367767"),
        k = n("49111"),
        L = n("646718"),
        O = n("782340"),
        v = n("508233");
      function R(e) {
        var t, n, s;
        let {
            handleStepChange: R,
            initialPlanId: B,
            subscriptionTier: U,
            trialId: G,
            referralTrialOfferId: w,
            handleClose: F,
          } = e,
          {
            activeSubscription: D,
            hasFetchedSubscriptions: H,
            paymentSourceId: W,
            paymentSources: K,
            selectedSkuId: Y,
            selectedPlan: V,
            step: J,
            defaultPlanId: q,
            priceOptions: X,
            isPremium: z,
          } = (0, g.usePaymentContext)(),
          {
            isGift: Q,
            giftRecipient: Z,
            giftMessage: $,
          } = (0, h.useGiftContext)(),
          ee = null != W ? K[W] : null,
          { newPlans: et } = d.default.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 }
          ),
          en = (0, a.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          er =
            !Q &&
            null != Y &&
            Y === L.PremiumSubscriptionSKUs.TIER_2 &&
            null != en &&
            en.hasHadPremium() &&
            H &&
            null == D &&
            (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee),
          ei = (0, m.usePremiumTrialOffer)(w),
          es =
            !Q &&
            null != ei &&
            null != Y &&
            (0, L.SubscriptionTrials)[ei.trial_id].skus.includes(Y),
          el = (0, f.usePremiumDiscountOffer)(),
          ea =
            null == el
              ? void 0
              : null === (t = el.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === Y),
          eo = !Q && null != el && null != Y && ea,
          eu = null !== (n = es || eo) && void 0 !== n && n,
          { defaultToMonthlyPlan: ed } =
            p.TrialRedemptionDefaultPlanExperiment.useExperiment(
              { location: "d17fd6_4" },
              { autoTrackExposure: !1 }
            ),
          ec = i.useMemo(
            () =>
              (0, T.getPremiumPlanOptions)({
                skuId: Y,
                isPremium: z,
                multiMonthPlans: er ? et : [],
                currentSubscription: D,
                isGift: Q,
                isEligibleForTrial: es,
                defaultPlanId: q,
                defaultToMonthlyPlan: ed,
              }),
            [Y, z, et, D, er, Q, es, q, ed]
          ),
          ep =
            eo && ec.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2)
              ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2
              : ec[0],
          ef = (0, a.useStateFromStores)([_.default], () => _.default.get(ep)),
          em = [{ planId: null == ef ? void 0 : ef.id, quantity: 1 }],
          [eS, eP] = i.useState(eu),
          [eE, e_] = (0, c.useSubscriptionInvoicePreview)({
            items: em,
            renewal: !1,
            preventFetch: !eu,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: X.paymentSourceId,
            currency: X.currency,
          });
        i.useEffect(() => {
          eu && eP((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
        }, [eE, eu]),
          (0, u.default)(
            "Payment Modal Plan Select Step",
            eS,
            5,
            {
              proratedInvoicePreview: eE,
              proratedInvoiceError: e_,
              isEligibleForOffer: eu,
            },
            { tags: { app_context: "billing" } }
          );
        let eC =
            null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s
              ? s
              : O.default.Messages.ERROR_GENERIC_TITLE,
          ex = eu && null == e_,
          eI = eu && null != e_;
        return ex && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null
          ? (0, r.jsx)(N.default, {})
          : (l(null != J, "Step should be set"),
            l(ec.length > 0, "Premium plan options should be set"),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(A.GiftNote, { giftMessage: $ }),
                !(Q && (0, x.shouldShowCustomGiftExperience)(Z)) &&
                  (0, r.jsx)(M.default, { isEligibleForTrial: es }),
                (0, r.jsxs)(b.PaymentPortalBody, {
                  children: [
                    ex &&
                      (0, r.jsx)("hr", {
                        className: v.planSelectSeparatorUpper,
                      }),
                    (0, r.jsx)(S.default, { isGift: Q, plan: V }),
                    (0, r.jsx)(j.default, {}),
                    eI
                      ? (0, r.jsx)(o.FormErrorBlock, { children: eC })
                      : (0, r.jsx)(P.PremiumSwitchPlanSelectBody, {
                          planOptions: ec,
                          eligibleForMultiMonthPlans: er,
                          referralTrialOfferId: w,
                          selectedPlanId: null == V ? void 0 : V.id,
                          subscriptionPeriodEnd:
                            null == eE ? void 0 : eE.subscriptionPeriodEnd,
                          discountInvoiceItems: eo
                            ? null == eE
                              ? void 0
                              : eE.invoiceItems
                            : void 0,
                          handleClose: F,
                        }),
                    ex &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("hr", {
                            className: v.planSelectSeparatorLower,
                          }),
                          (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children:
                              O.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format(
                                {
                                  link: I.default.getArticleURL(
                                    k.HelpdeskArticles
                                      .PREMIUM_DETAILS_CANCEL_SUB
                                  ),
                                }
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsx)(b.PaymentPortalFooter, {
                  children: (0, r.jsx)(o.ModalFooter, {
                    justify: C.default.Justify.BETWEEN,
                    align: C.default.Align.CENTER,
                    children: (0, r.jsx)(P.PremiumSwitchPlanSelectFooter, {
                      onStepChange: R,
                      onBackClick: () => R(y.Step.SKU_SELECT),
                      showBackButton: null == B && null == U,
                      planOptions: ec,
                      shouldRenderUpdatedPaymentModal: ex,
                      isTrial: es,
                    }),
                  }),
                }),
              ],
            }));
      }
    },
    403365: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentSKUSelectStep: function () {
            return x;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        a = n("182650"),
        o = n("917247"),
        u = n("279171"),
        d = n("49735"),
        c = n("719923"),
        p = n("635357"),
        f = n("642906"),
        m = n("85336"),
        S = n("176108"),
        P = n("254350"),
        E = n("646718"),
        _ = n("782340"),
        C = n("63069");
      function x(e) {
        let {
            handleStepChange: t,
            handleClose: n,
            referralTrialOfferId: i,
          } = e,
          {
            setSelectedSkuId: s,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: u,
            setSelectedPlanId: d,
            priceOptions: _,
          } = (0, f.usePaymentContext)(),
          { isGift: C } = (0, p.useGiftContext)(),
          x = (0, o.usePremiumTrialOffer)(i),
          T = (0, a.useIsInPremiumOfferExperience)();
        return (0, r.jsx)(I, {
          selectSku: e =>
            (function (e) {
              let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: r,
                handleStepChange: i,
                isGift: s,
                userTrialOffer: l,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: o,
              } = e;
              r(n);
              let u = m.Step.PLAN_SELECT,
                d = (0, c.getPremiumSkuIdForSubscription)(t);
              (d === E.PremiumSubscriptionSKUs.TIER_1 ||
                d === E.PremiumSubscriptionSKUs.TIER_2) &&
                n === E.PremiumSubscriptionSKUs.TIER_0 &&
                !s &&
                (u = m.Step.WHAT_YOU_LOSE);
              let p = (0, P.isInTrialRedemption)({
                  userTrialOffer: l,
                  isGift: s,
                  skuId: n,
                }),
                f = (0, S.inOneStepSubscriptionCheckout)({
                  isTrial: p,
                  isGift: s,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: o,
                });
              if (u !== m.Step.WHAT_YOU_LOSE && f) {
                u = m.Step.REVIEW;
                let e = (0, S.getDefaultPlanOneStepCheckout)(n, t);
                a(e);
              }
              i(u, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: l,
              newSkuId: e,
              setSelectedSkuId: s,
              handleStepChange: t,
              isGift: C,
              userTrialOffer: x,
              startedPaymentFlowWithPaymentSources: u.current,
              setSelectedPlanId: d,
            }),
          onClose: n,
          isGift: C,
          inOfferExperience: T,
          priceOptions: _,
        });
      }
      function I(e) {
        let {
          selectSku: t,
          onClose: n,
          isGift: i,
          inOfferExperience: a,
          priceOptions: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: C.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, r.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.H4,
                  children: _.default.Messages.BILLING_STEP_SELECT_PLAN,
                }),
                (0, r.jsx)(l.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, r.jsxs)(l.ModalContent, {
              className: s(C.skuSelectModalContent, { [C.modalPadding]: a }),
              children: [
                (0, r.jsx)(u.default, {
                  fromBoostCancelModal: !1,
                  className: C.legacyPricingNotice,
                }),
                (0, r.jsx)(d.default, {
                  onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
                  isGift: i,
                  priceOptions: o,
                }),
              ],
            }),
          ],
        });
      }
    },
    498475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentWhatYouLoseStep: function () {
            return E;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("627445"),
        s = n.n(i),
        l = n("819855"),
        a = n("77078"),
        o = n("841098"),
        u = n("360262"),
        d = n("719923"),
        c = n("635357"),
        p = n("642906"),
        f = n("85336"),
        m = n("176108"),
        S = n("782340"),
        P = n("807564");
      function E(e) {
        let { handleStepChange: t, handleClose: n } = e,
          i = (0, o.default)(),
          {
            activeSubscription: E,
            selectedSkuId: _,
            setSelectedPlanId: C,
            startedPaymentFlowWithPaymentSourcesRef: x,
          } = (0, p.usePaymentContext)(),
          { isGift: I } = (0, c.useGiftContext)(),
          T = null != E ? (0, d.getPremiumPlanItem)(E) : null,
          h = null != T ? (0, d.getDisplayPremiumType)(T.planId) : null,
          g = null != T ? (0, d.getPremiumType)(T.planId) : null,
          y = (0, m.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: I,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: x.current,
          });
        return (
          s(null != g, "Expected premium type"),
          (0, r.jsx)(u.default, {
            premiumType: g,
            titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText:
              S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format(
                { subscriptionName: h }
              ),
            footer: (0, r.jsxs)("div", {
              className: P.whatYouLoseButtonContainer,
              children: [
                (0, r.jsx)(a.Button, {
                  onClick: () => {
                    if (y) {
                      let e = (0, m.getDefaultPlanOneStepCheckout)(_, E);
                      C(e), t(f.Step.REVIEW);
                    } else t(f.Step.PLAN_SELECT);
                  },
                  children: S.default.Messages.CONTINUE,
                }),
                (0, r.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: (0, l.isThemeDark)(i)
                    ? a.Button.Colors.WHITE
                    : a.Button.Colors.PRIMARY,
                  onClick: n,
                  children:
                    S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                }),
              ],
            }),
            onClose: n,
            isDowngrade: !0,
          })
        );
      }
    },
    491523: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AutomatedGiftCodeMessageExperiment: function () {
            return i;
          },
        });
      var r = n("862205");
      let i = (0, r.createExperiment)({
        kind: "user",
        id: "2023-07_automated_gift_code_message",
        label:
          "Automatically send gift code message in direct message to gift recipient",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Show the automated gift code message",
            config: { enabled: !0 },
          },
        ],
      });
    },
    358821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("641078"),
        s = n("132554"),
        l = n("646718"),
        a = n("782340"),
        o = n("880865"),
        u = e => {
          let { isGift: t, plan: n } = e,
            u = (0, i.useIsEligibleForBogoPromotion)();
          return t ||
            (null == n ? void 0 : n.skuId) !==
              l.PremiumSubscriptionSKUs.TIER_2 ||
            !u
            ? null
            : (0, r.jsx)(s.default, {
                copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                bannerImage: o,
              });
        };
    },
    49735: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("77078"),
        s = n("400307"),
        l = n("646718"),
        a = n("932865");
      function o(e) {
        let { onClick: t, isGift: n, priceOptions: l } = e;
        return (0, r.jsx)(i.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(s.Tier2Card, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: l,
          }),
        });
      }
      function u(e) {
        let { onClick: t, isGift: n, priceOptions: l } = e;
        return (0, r.jsx)(i.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(s.Tier0Card, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: l,
          }),
        });
      }
      var d = function (e) {
        let { onSelectSku: t, isGift: n, priceOptions: i } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o, {
              onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
              isGift: n,
              priceOptions: i,
            }),
            (0, r.jsx)(u, {
              onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
              isGift: n,
              priceOptions: i,
            }),
          ],
        });
      };
    },
    132554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        a = n("978679"),
        o = n("249121");
      function u(e) {
        let {
          className: t,
          copy: n,
          bannerImage: i,
          textColor: u = "always-white",
        } = e;
        return (0, r.jsxs)("div", {
          className: s(o.bannerContainer, t),
          children: [
            null == i
              ? null
              : (0, r.jsx)("img", { alt: "", className: o.banner, src: i }),
            (0, r.jsxs)("div", {
              className: o.textContainer,
              children: [
                (0, r.jsx)(a.default, { className: o.giftIcon }),
                (0, r.jsx)(l.Heading, {
                  className: o.textHeader,
                  color: u,
                  variant: "eyebrow",
                  children: n,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=15262.81cabc29e53501b81d2f.js.map
