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
        u = n("850068"),
        a = n("253981"),
        o = n("635357"),
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
            browserCheckoutStateLoadId: x,
            contextMetadata: C,
          } = (0, d.usePaymentContext)(),
          { isGift: I } = (0, o.useGiftContext)(),
          [T, h] = i.useState(!1);
        return (
          i.useEffect(() => {
            var e;
            !T &&
              (h(!0),
              (0, u.startBrowserCheckout)(C.loadId),
              !(function (e, t, n, r) {
                let i = P.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                  u = new URL(
                    a.default.makeUrl(P.Routes.BILLING_LOGIN_HANDOFF)
                  ),
                  o = (0, s.v4)();
                u.searchParams.append("handoff_key", o),
                  u.searchParams.append("redirect_to", i),
                  l.default
                    .post({
                      url: P.Endpoints.HANDOFF,
                      body: { key: o },
                      oldFormErrors: !0,
                    })
                    .then(
                      e => {
                        u.searchParams.append(
                          "handoff_token",
                          e.body.handoff_token
                        ),
                          window.open(u.href);
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
                C.loadId,
                () => t(c.Step.ADD_PAYMENT_STEPS)
              ));
          }, [n, I, T, h, C, t]),
          i.useEffect(() => {
            x === C.loadId &&
              _ === f.BrowserCheckoutState.DONE &&
              t(c.Step.CONFIRM);
          }, [_, x, C, t]),
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
            return o;
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
        u = n("85336"),
        a = n("782340");
      let o = () =>
          (0, r.jsx)("div", {
            children: (0, r.jsx)(i.Heading, {
              variant: "heading-xl/bold",
              children:
                a.default.Messages
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
                    t(u.Step.ADD_PAYMENT_STEPS);
                  },
                  children:
                    a.default.Messages
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
        u = n("491523"),
        a = n("775155"),
        o = n("659632"),
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
            postSuccessGuild: x,
            followupSKUInfo: C,
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
            isGift: j,
            giftRecipient: A,
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
              !j ||
              null == A ||
              null == k ||
              L ||
              O ||
              (0, o.shouldShowCustomGiftExperience)(A)
            )
              return;
            let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
              location: "36b986_1",
            }).enabled;
            e && v({ onSubscriptionConfirmation: E });
          }, [v, j, A, k, L, O, E]),
          (s =
            null != _
              ? _(g, R, N)
              : j
                ? (0, r.jsx)(a.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: g.id,
                    onClose: R,
                  })
                : b.current === g.id
                  ? (0, r.jsx)(a.default, {
                      planId: g.id,
                      postSuccessGuild: x,
                      onClose: R,
                      paymentSourceType:
                        null === (t = T[null != h ? h : ""]) || void 0 === t
                          ? void 0
                          : t.type,
                    })
                  : (0, r.jsx)(a.default, {
                      followupSKUInfo: C,
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
        u = n("775433"),
        a = n("812204"),
        o = n("685665"),
        d = n("10514"),
        c = n("521012"),
        p = n("659632"),
        f = n("635357"),
        m = n("642906"),
        S = n("85336"),
        P = n("385179"),
        E = n("262683"),
        _ = n("946359"),
        x = n("307367"),
        C = n("724269"),
        I = n("99836"),
        T = n("992049"),
        h = n("176108"),
        g = n("97461"),
        y = n("403365"),
        M = n("498475"),
        N = n("254350"),
        b = n("49111"),
        j = n("646718"),
        A = n("782340");
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
            onComplete: a,
            transitionState: c,
            initialPlanId: E,
            subscriptionTier: _,
            onClose: x,
            trialId: C,
            trialFooterMessageOverride: I,
            reviewWarningMessage: T,
            openInvoiceId: h,
            onSubscriptionConfirmation: g,
            renderPurchaseConfirmation: y,
            postSuccessGuild: M,
            followupSKUInfo: N,
            renderHeader: A,
            applicationId: k,
            guildId: L,
            referralTrialOfferId: O,
            skuId: v,
            returnRef: R,
          } = e,
          { analyticsLocations: B } = (0, o.default)();
        i.useEffect(() => {
          !d.default.isLoadedForPremiumSKUs() &&
            l.default.wait(() => (0, u.fetchPremiumSubscriptionPlans)());
        }, []);
        let { step: U } = (0, m.usePaymentContext)(),
          {
            isGift: G,
            giftMessage: w,
            giftRecipient: F,
          } = (0, f.useGiftContext)(),
          D =
            G &&
            (0, p.shouldShowCustomGiftExperience)(F) &&
            U === S.Step.PLAN_SELECT;
        return (0, r.jsx)(P.PaymentModal, {
          analyticsLocations: B,
          analyticsLocation: t,
          analyticsObject: n,
          analyticsSourceLocation: s,
          analyticsSubscriptionType: b.SubscriptionTypes.PREMIUM,
          onComplete: a,
          transitionState: c,
          initialPlanId: E,
          giftMessage: w,
          subscriptionTier: _,
          onClose: x,
          trialId: C,
          isGift: G,
          trialFooterMessageOverride: I,
          reviewWarningMessage: T,
          planGroup: j.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
          openInvoiceId: h,
          onSubscriptionConfirmation: g,
          renderPurchaseConfirmation: y,
          postSuccessGuild: M,
          followupSKUInfo: N,
          renderHeader: A,
          applicationId: k,
          guildId: L,
          referralTrialOfferId: O,
          skuId: v,
          shakeWhilePurchasing: !0,
          isLargeModal: D,
          returnRef: R,
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
          { isGift: u } = (0, f.useGiftContext)(),
          a = (0, N.default)({ isGift: u, skuId: l, referralTrialOfferId: i }),
          o = O(a);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(E.PaymentModalAddPaymentStep, {
            ...e,
            breadcrumbSteps: k,
            onReturn: () => {
              let e =
                Object.values(s).length < 1 && null == t
                  ? S.Step.PLAN_SELECT
                  : S.Step.REVIEW;
              o && (e = S.Step.REVIEW),
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
              return t ? null : A.default.Messages.BILLING_STEP_SELECT_PLAN;
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
              return t ? null : A.default.Messages.BILLING_STEP_PAYMENT;
            },
          },
        },
        {
          key: S.Step.AWAITING_BROWSER_CHECKOUT,
          renderStep: e => (0, r.jsx)(x.default, { ...e }),
        },
        {
          key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(C.default, {}),
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
                ? A.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                : A.default.Messages.BILLING_STEP_REVIEW;
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
          { AnalyticsLocationProvider: n } = (0, o.default)(
            e.analyticsLocations,
            a.default.PREMIUM_PAYMENT_MODAL
          ),
          {
            subscriptionTier: i,
            isGift: l,
            giftRecipient: u,
            giftMessage: d,
            loadId: p,
            defaultPlanId: S,
            referralCode: P,
          } = e;
        if (null != i && !Object.values(j.PremiumSubscriptionSKUs).includes(i))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, r.jsx)(n, {
          children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: p,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: R,
            skuIDs: [...j.ACTIVE_PREMIUM_SKUS],
            isGift: l,
            defaultPlanId: S,
            referralCode: P,
            children: (0, r.jsx)(f.GiftContextProvider, {
              isGift: l,
              giftRecipient: null == u ? void 0 : u,
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
        u = n("65597"),
        a = n("77078"),
        o = n("856413"),
        d = n("916187"),
        c = n("809071"),
        p = n("669073"),
        f = n("154889"),
        m = n("917247"),
        S = n("358821"),
        P = n("570727"),
        E = n("697218"),
        _ = n("10514"),
        x = n("145131"),
        C = n("659632"),
        I = n("701909"),
        T = n("719923"),
        h = n("635357"),
        g = n("642906"),
        y = n("85336"),
        M = n("153727"),
        N = n("628738"),
        b = n("650484"),
        j = n("310093"),
        A = n("367767"),
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
          en = (0, u.default)([E.default], () => E.default.getCurrentUser()),
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
          eu =
            null == el
              ? void 0
              : null === (t = el.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === Y),
          ea = !Q && null != el && null != Y && eu,
          eo = null !== (n = es || ea) && void 0 !== n && n,
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
            ea && ec.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2)
              ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2
              : ec[0],
          ef = (0, u.default)([_.default], () => _.default.get(ep)),
          em = [{ planId: null == ef ? void 0 : ef.id, quantity: 1 }],
          [eS, eP] = i.useState(eo),
          [eE, e_] = (0, c.useSubscriptionInvoicePreview)({
            items: em,
            renewal: !1,
            preventFetch: !eo,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: X.paymentSourceId,
            currency: X.currency,
          });
        i.useEffect(() => {
          eo && eP((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
        }, [eE, eo]),
          (0, o.default)(
            "Payment Modal Plan Select Step",
            eS,
            5,
            {
              proratedInvoicePreview: eE,
              proratedInvoiceError: e_,
              isEligibleForOffer: eo,
            },
            { tags: { app_context: "billing" } }
          );
        let ex =
            null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s
              ? s
              : O.default.Messages.ERROR_GENERIC_TITLE,
          eC = eo && null == e_,
          eI = eo && null != e_;
        return eC && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null
          ? (0, r.jsx)(N.default, {})
          : (l(null != J, "Step should be set"),
            l(ec.length > 0, "Premium plan options should be set"),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(j.GiftNote, { giftMessage: $ }),
                !(Q && (0, C.shouldShowCustomGiftExperience)(Z)) &&
                  (0, r.jsx)(M.default, { isEligibleForTrial: es }),
                (0, r.jsxs)(b.PaymentPortalBody, {
                  children: [
                    eC &&
                      (0, r.jsx)("hr", {
                        className: v.planSelectSeparatorUpper,
                      }),
                    (0, r.jsx)(S.default, { isGift: Q, plan: V }),
                    (0, r.jsx)(A.default, {}),
                    eI
                      ? (0, r.jsx)(a.FormErrorBlock, { children: ex })
                      : (0, r.jsx)(P.PremiumSwitchPlanSelectBody, {
                          planOptions: ec,
                          eligibleForMultiMonthPlans: er,
                          referralTrialOfferId: w,
                          selectedPlanId: null == V ? void 0 : V.id,
                          subscriptionPeriodEnd:
                            null == eE ? void 0 : eE.subscriptionPeriodEnd,
                          discountInvoiceItems: ea
                            ? null == eE
                              ? void 0
                              : eE.invoiceItems
                            : void 0,
                          handleClose: F,
                        }),
                    eC &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("hr", {
                            className: v.planSelectSeparatorLower,
                          }),
                          (0, r.jsx)(a.Text, {
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
                  children: (0, r.jsx)(a.ModalFooter, {
                    justify: x.default.Justify.BETWEEN,
                    align: x.default.Align.CENTER,
                    children: (0, r.jsx)(P.PremiumSwitchPlanSelectFooter, {
                      onStepChange: R,
                      onBackClick: () => R(y.Step.SKU_SELECT),
                      showBackButton: null == B && null == U,
                      planOptions: ec,
                      shouldRenderUpdatedPaymentModal: eC,
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
            return C;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        u = n("182650"),
        a = n("917247"),
        o = n("279171"),
        d = n("49735"),
        c = n("719923"),
        p = n("635357"),
        f = n("642906"),
        m = n("85336"),
        S = n("176108"),
        P = n("254350"),
        E = n("646718"),
        _ = n("782340"),
        x = n("63069");
      function C(e) {
        let {
            handleStepChange: t,
            handleClose: n,
            referralTrialOfferId: i,
          } = e,
          {
            setSelectedSkuId: s,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: o,
            setSelectedPlanId: d,
            priceOptions: _,
          } = (0, f.usePaymentContext)(),
          { isGift: x } = (0, p.useGiftContext)(),
          C = (0, a.usePremiumTrialOffer)(i),
          T = (0, u.useIsInPremiumOfferExperience)();
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
                setSelectedPlanId: u,
                startedPaymentFlowWithPaymentSources: a,
              } = e;
              r(n);
              let o = m.Step.PLAN_SELECT,
                d = (0, c.getPremiumSkuIdForSubscription)(t);
              (d === E.PremiumSubscriptionSKUs.TIER_1 ||
                d === E.PremiumSubscriptionSKUs.TIER_2) &&
                n === E.PremiumSubscriptionSKUs.TIER_0 &&
                !s &&
                (o = m.Step.WHAT_YOU_LOSE);
              let p = (0, P.isInTrialRedemption)({
                  userTrialOffer: l,
                  isGift: s,
                  skuId: n,
                }),
                f = (0, S.inOneStepSubscriptionCheckout)({
                  isTrial: p,
                  isGift: s,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: a,
                });
              if (o !== m.Step.WHAT_YOU_LOSE && f) {
                o = m.Step.REVIEW;
                let e = (0, S.getDefaultPlanOneStepCheckout)(n, t);
                u(e);
              }
              i(o, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: l,
              newSkuId: e,
              setSelectedSkuId: s,
              handleStepChange: t,
              isGift: x,
              userTrialOffer: C,
              startedPaymentFlowWithPaymentSources: o.current,
              setSelectedPlanId: d,
            }),
          onClose: n,
          isGift: x,
          inOfferExperience: T,
          priceOptions: _,
        });
      }
      function I(e) {
        let {
          selectSku: t,
          onClose: n,
          isGift: i,
          inOfferExperience: u,
          priceOptions: a,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: x.skuSelectModalHeader,
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
              className: s(x.skuSelectModalContent, { [x.modalPadding]: u }),
              children: [
                (0, r.jsx)(o.default, {
                  fromBoostCancelModal: !1,
                  className: x.legacyPricingNotice,
                }),
                (0, r.jsx)(d.default, {
                  onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
                  isGift: i,
                  priceOptions: a,
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
        u = n("77078"),
        a = n("841098"),
        o = n("360262"),
        d = n("719923"),
        c = n("635357"),
        p = n("642906"),
        f = n("85336"),
        m = n("176108"),
        S = n("782340"),
        P = n("807564");
      function E(e) {
        let { handleStepChange: t, handleClose: n } = e,
          i = (0, a.default)(),
          {
            activeSubscription: E,
            selectedSkuId: _,
            setSelectedPlanId: x,
            startedPaymentFlowWithPaymentSourcesRef: C,
          } = (0, p.usePaymentContext)(),
          { isGift: I } = (0, c.useGiftContext)(),
          T = null != E ? (0, d.getPremiumPlanItem)(E) : null,
          h = null != T ? (0, d.getDisplayPremiumType)(T.planId) : null,
          g = null != T ? (0, d.getPremiumType)(T.planId) : null,
          y = (0, m.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: I,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: C.current,
          });
        return (
          s(null != g, "Expected premium type"),
          (0, r.jsx)(o.default, {
            premiumType: g,
            titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText:
              S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format(
                { subscriptionName: h }
              ),
            footer: (0, r.jsxs)("div", {
              className: P.whatYouLoseButtonContainer,
              children: [
                (0, r.jsx)(u.Button, {
                  onClick: () => {
                    if (y) {
                      let e = (0, m.getDefaultPlanOneStepCheckout)(_, E);
                      x(e), t(f.Step.REVIEW);
                    } else t(f.Step.PLAN_SELECT);
                  },
                  children: S.default.Messages.CONTINUE,
                }),
                (0, r.jsx)(u.Button, {
                  look: u.Button.Looks.LINK,
                  color: (0, l.isThemeDark)(i)
                    ? u.Button.Colors.WHITE
                    : u.Button.Colors.PRIMARY,
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
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("641078"),
        s = n("132554"),
        l = n("646718"),
        u = n("782340"),
        a = n("880865"),
        o = e => {
          let { isGift: t, plan: n } = e,
            o = (0, i.useIsEligibleForBogoPromotion)();
          return t ||
            (null == n ? void 0 : n.skuId) !==
              l.PremiumSubscriptionSKUs.TIER_2 ||
            !o
            ? null
            : (0, r.jsx)(s.default, {
                copy: u.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                bannerImage: a,
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
        u = n("932865");
      function a(e) {
        let { onClick: t, isGift: n, priceOptions: l } = e;
        return (0, r.jsx)(i.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(s.Tier2Card, {
            className: u.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: l,
          }),
        });
      }
      function o(e) {
        let { onClick: t, isGift: n, priceOptions: l } = e;
        return (0, r.jsx)(i.Clickable, {
          onClick: t,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(s.Tier0Card, {
            className: u.tier0MarketingCard,
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
            (0, r.jsx)(a, {
              onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
              isGift: n,
              priceOptions: i,
            }),
            (0, r.jsx)(o, {
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
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        u = n("978679"),
        a = n("249121");
      function o(e) {
        let {
          className: t,
          copy: n,
          bannerImage: i,
          textColor: o = "always-white",
        } = e;
        return (0, r.jsxs)("div", {
          className: s(a.bannerContainer, t),
          children: [
            null == i
              ? null
              : (0, r.jsx)("img", { alt: "", className: a.banner, src: i }),
            (0, r.jsxs)("div", {
              className: a.textContainer,
              children: [
                (0, r.jsx)(u.default, { className: a.giftIcon }),
                (0, r.jsx)(l.Heading, {
                  className: a.textHeader,
                  color: o,
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
//# sourceMappingURL=15262.bf1a2fc39c05f55d25ac.js.map
