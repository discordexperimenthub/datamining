(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31835"],
  {
    392459: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e813b2b634fd928e71ca.svg";
    },
    26245: function (e, t, n) {
      "use strict";
      e.exports = n.p + "da8bcf0d776e8fde9e5b.svg";
    },
    21340: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d008fce672ad7583f06e.svg";
    },
    159548: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8098ac87218ab1d81fe5.svg";
    },
    897184: function (e, t, n) {
      "use strict";
      e.exports = n.p + "400abe52c21c39a34b0d.svg";
    },
    990439: function (e, t, n) {
      "use strict";
      e.exports = n.p + "30e1ee80e32cc6659f02.svg";
    },
    999641: function (e, t, n) {
      "use strict";
      e.exports = n.p + "73113affb82e7871d40a.svg";
    },
    74771: function (e, t, n) {
      "use strict";
      e.exports = n.p + "94a8228b586e56215077.svg";
    },
    93902: function (e, t, n) {
      "use strict";
      e.exports = n.p + "de1981a6479d060d8ebd.png";
    },
    335430: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CurrencyWrapper: function () {
            return i;
          },
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("575209");
      function i(e) {
        let { currencies: t, className: n, children: r } = e;
        return t.length < 2
          ? null
          : (0, s.jsx)("div", { className: n, children: r });
      }
      var l = function (e) {
        let {
          currencies: t,
          onChange: n,
          selectedCurrency: i,
          className: l,
          disabled: u = !1,
        } = e;
        if (t.length < 2) return null;
        let o = t.map((e, t) => ({
          key: t,
          value: e,
          label: ""
            .concat(e.toUpperCase(), " - ")
            .concat((0, a.getCurrencyFullName)(e)),
        }));
        return (0, s.jsx)(r.SingleSelect, {
          value: i,
          options: o,
          onChange: e => {
            null != e && n(e);
          },
          className: l,
          isDisabled: u,
        });
      };
    },
    405932: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("225389"),
        a = n("77078"),
        i = n("352969"),
        l = function (e) {
          let { message: t } = e;
          return (0, s.jsxs)("div", {
            className: i.container,
            children: [
              (0, s.jsx)(r.CircleInformationIcon, {
                className: i.icon,
                width: 20,
                height: 20,
                color: a.tokens.colors.TEXT_WARNING,
              }),
              (0, s.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-muted",
                children: t,
              }),
            ],
          });
        };
    },
    50517: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AwaitingPurchaseTokenAuthStepBody: function () {
            return u;
          },
          AwaitingPurchaseTokenAuthStepFooter: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("145131"),
        i = n("782340"),
        l = n("25764");
      let u = e => {
          let { className: t, isEmailResent: n, resendEmail: a } = e;
          return (0, s.jsx)("div", {
            className: t,
            children: (0, s.jsxs)("div", {
              className: l.awaitingWrapper,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  children:
                    i.default.Messages
                      .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER,
                }),
                (0, s.jsxs)("p", {
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        i.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        i.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)(r.Text, {
                      variant: "text-md/normal",
                      children: [
                        i.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                        "\xa0",
                        n
                          ? i.default.Messages
                              .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT
                          : (0, s.jsx)(r.Anchor, {
                              onClick: a,
                              children:
                                i.default.Messages
                                  .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION,
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        o = () =>
          (0, s.jsx)("div", {
            children: (0, s.jsx)(r.ModalFooter, {
              justify: a.default.Justify.BETWEEN,
              align: a.default.Align.CENTER,
              children: (0, s.jsx)(r.Button, {
                "data-testid": "continue",
                color: r.Button.Colors.BRAND,
                disabled: !0,
                children:
                  i.default.Messages
                    .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON,
              }),
            }),
          });
    },
    763377: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("93510");
      n.es(s, t);
    },
    422244: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("696597");
      n.es(s, t);
    },
    837148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("862205");
      let r = (0, s.createExperiment)({
        kind: "user",
        id: "2023-12_collectibles_gifting_dm_entrypoint",
        label: "Collectibles Gifting From DM's",
        defaultConfig: { confirmUpsellEnabled: !1 },
        treatments: [
          {
            id: 2,
            label:
              "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
            config: { confirmUpsellEnabled: !0 },
          },
        ],
      });
      var a = e => {
        let {
          location: t,
          autoTrackExposure: n = !0,
          trackExposureOptions: s = {},
        } = e;
        return r.useExperiment(
          { location: t },
          { autoTrackExposure: n, trackExposureOptions: s }
        );
      };
    },
    426188: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFetchCollectiblesProduct: function () {
            return o;
          },
        }),
        n("222007");
      var s = n("884691"),
        r = n("65597"),
        a = n("552712"),
        i = n("21526"),
        l = n("853987"),
        u = n("49111");
      function o(e) {
        let t = (0, r.useStateFromStores)([a.default], () =>
            null != e ? a.default.get(e) : null
          ),
          n = null != t && t.productLine !== u.SKUProductLines.COLLECTIBLES,
          [o, c] = (0, r.useStateFromStoresArray)([l.default], () => [
            l.default.isFetching,
            l.default.getProduct(e),
          ]);
        return (
          (0, s.useEffect)(() => {
            null != e &&
              null == c &&
              !n &&
              !o &&
              (0, i.fetchCollectiblesProduct)(e);
          }, [e, c, n, o]),
          { product: c, isFetching: o }
        );
      }
    },
    903494: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("422244"),
        a = n("77078"),
        i = n("54239"),
        l = n("812204"),
        u = n("685665"),
        o = n("393414"),
        c = n("21526"),
        d = n("49111"),
        m = n("782340"),
        f = n("24171"),
        p = e => {
          let { onClose: t } = e,
            { analyticsLocations: n } = (0, u.default)(),
            p = () => {
              t(),
                (0, o.transitionTo)(d.Routes.COLLECTIBLES_SHOP),
                (0, c.openCollectiblesShop)({
                  openInLayer: !1,
                  analyticsSource: l.default.PREMIUM_PAYMENT_MODAL,
                  analyticsLocations: n,
                }),
                (0, i.popLayer)();
            };
          return (0, s.jsxs)("div", {
            className: f.container,
            children: [
              (0, s.jsx)("div", {
                className: f.iconBackground,
                children: (0, s.jsx)(r.ShopIcon, {
                  width: 20,
                  height: 20,
                  color: a.tokens.colors.WHITE,
                }),
              }),
              (0, s.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-primary",
                children:
                  m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format(
                    {
                      checkItOut: e =>
                        (0, s.jsx)(a.Clickable, {
                          className: f.link,
                          onClick: p,
                          children: e,
                        }),
                    }
                  ),
              }),
            ],
          });
        };
    },
    605886: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          purchaseProduct: function () {
            return I;
          },
        }),
        n("70102"),
        n("222007");
      var s = n("627445"),
        r = n.n(s),
        a = n("913144"),
        i = n("850068"),
        l = n("112679"),
        u = n("596523"),
        o = n("465527"),
        c = n("388290"),
        d = n("599110"),
        m = n("745279"),
        f = n("719923"),
        p = n("286350"),
        _ = n("49111"),
        S = n("646718");
      async function I(e) {
        let {
          setPurchaseState: t,
          setHasAcceptedTerms: n,
          setIsSubmitting: s,
          setPurchaseError: I,
          hasRedirectURL: E,
          setHasRedirectURL: P,
          isGift: T,
          baseAnalyticsData: N,
          analyticsLocation: C,
          analyticsLocations: A,
          flowStartTime: h,
          subscriptionPlan: v,
          planGroup: g,
          trialId: x,
          priceOptions: y,
          paymentSource: O,
          isPrepaidPaymentPastDue: M,
          openInvoiceId: R,
          premiumSubscription: L,
          onNext: b,
          metadata: j,
          sku: G,
          skuPricePreview: D,
          purchaseType: U,
          referralCode: F,
          loadId: B,
          giftInfoOptions: w,
        } = e;
        t(p.PurchaseState.PURCHASING),
          n(!0),
          s(!0),
          a.default.wait(l.clearError),
          I(null);
        try {
          let e, n, s;
          if (
            (d.default.track(_.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
              ...N,
              duration_ms: Date.now() - h,
            }),
            E)
          )
            return;
          if (U === _.PurchaseTypes.ONE_TIME)
            r(null != G, "SKU must exist and be fetched."),
              r(null != D, "SKUPricePreview must exist."),
              (e = await (0, o.purchaseSKU)(G.applicationId, G.id, {
                expectedAmount: D.amount,
                expectedCurrency: D.currency,
                isGift: T,
                paymentSource: O,
                loadId: B,
                giftInfoOptions: w,
              }));
          else if ((r(null != v, "Missing subscriptionPlan"), T)) {
            let t = (0, f.getPrice)(v.id, !1, !0, y);
            if (
              "usd" === t.currency &&
              (null == O ? void 0 : O.type) === _.PaymentSourceTypes.GCASH
            ) {
              var k;
              let e = Error("Invalid USD currency for GCash");
              (0, m.captureBillingException)(e, {
                tags: {
                  paymentSourceId:
                    null !== (k = null == O ? void 0 : O.id) && void 0 !== k
                      ? k
                      : "",
                  subscriptionPlanId: v.id,
                  priceOptions: JSON.stringify(y),
                },
              });
            }
            e = await (0, o.purchaseSKU)(
              S.PREMIUM_SUBSCRIPTION_APPLICATION,
              v.skuId,
              {
                expectedAmount: t.amount,
                expectedCurrency: t.currency,
                paymentSource: O,
                subscriptionPlanId: v.id,
                isGift: !0,
                loadId: B,
                giftInfoOptions: w,
              }
            );
          } else
            e =
              M && null != R && null != O && null != L
                ? _.PREPAID_PAYMENT_SOURCES.has(O.type)
                  ? await (0, i.payInvoiceManually)(L, R, O, y.currency)
                  : await (0, i.updateSubscription)(
                      L,
                      { paymentSource: O, currency: y.currency },
                      A,
                      C,
                      B
                    )
                : null != L
                  ? await (0, i.updateSubscription)(
                      L,
                      {
                        items: (0, f.getItemsWithUpsertedPlanIdForGroup)(
                          L,
                          v.id,
                          1,
                          new Set(g)
                        ),
                        paymentSource: O,
                        currency: y.currency,
                      },
                      A,
                      C,
                      B
                    )
                  : await (0, u.subscribe)({
                      planId: v.id,
                      currency: y.currency,
                      paymentSource: O,
                      trialId: x,
                      metadata: j,
                      referralCode: F,
                      loadId: B,
                    });
          if (e.redirectConfirmation) {
            P(null != e.redirectURL);
            return;
          }
          t(p.PurchaseState.COMPLETED),
            "subscription" in e
              ? (n =
                  null != e.subscription
                    ? c.default.createFromServer(e.subscription)
                    : null)
              : "entitlements" in e &&
                (s = null != e.entitlements ? e.entitlements : void 0),
            b(n, s);
        } catch (e) {
          t(p.PurchaseState.FAIL),
            I(e),
            d.default.track(_.AnalyticEvents.PAYMENT_FLOW_FAILED, {
              ...N,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == O ? void 0 : O.id,
              payment_source_type: null == O ? void 0 : O.type,
              duration_ms: Date.now() - h,
            });
        } finally {
          !E && s(!1);
        }
      }
    },
    262683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalAddPaymentStep: function () {
            return p;
          },
        });
      var s = n("627445"),
        r = n.n(s),
        a = n("775560"),
        i = n("917247"),
        l = n("724522"),
        u = n("599110"),
        o = n("635357"),
        c = n("642906"),
        d = n("85336"),
        m = n("49111"),
        f = n("646718");
      function p(e) {
        let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: s,
            handleStepChange: p,
            referralTrialOfferId: _,
            onReturn: S,
          } = e,
          {
            contextMetadata: I,
            step: E,
            paymentSources: P,
            paymentSourceId: T,
            setPaymentSourceId: N,
            purchaseError: C,
            setPurchaseError: A,
            purchaseErrorBlockRef: h,
            paymentAuthenticationState: v,
            selectedSkuId: g,
          } = (0, c.usePaymentContext)(),
          { isGift: x } = (0, o.useGiftContext)(),
          y = {
            ...(0, l.useSharedPaymentModal)(),
            paymentSources: P,
            paymentSourceId: T,
            setPaymentSourceId: N,
            purchaseError: C,
            setPurchaseError: A,
            purchaseErrorBlockRef: h,
            paymentAuthenticationState: v,
          },
          O = (0, i.usePremiumTrialOffer)(_),
          M =
            !x &&
            null != O &&
            null != g &&
            (0, f.SubscriptionTrials)[O.trial_id].skus.includes(g),
          R =
            null != S
              ? S
              : () => {
                  let e =
                    Object.values(P).length < 1 && null == n
                      ? d.Step.PLAN_SELECT
                      : d.Step.REVIEW;
                  p(e, { trackedFromStep: d.Step.PAYMENT_TYPE });
                };
        r(E, "Step should be set here");
        let L = (0, a.useStableMemo)(() => Date.now(), [E]);
        return (0, l.AddPaymentFlow)({
          paymentModalArgs: y,
          initialStep: d.Step.PAYMENT_TYPE,
          prependSteps: [d.Step.PROMOTION_INFO],
          appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
          breadcrumpSteps: s,
          currentBreadcrumpStep: E,
          usePaymentModalStep: !0,
          onReturn: R,
          onComplete: e => {
            p(d.Step.REVIEW, { trackedFromStep: e });
          },
          onStepChange: e => {
            let { currentStep: n, toStep: s } = e,
              r = Date.now();
            u.default.track(m.AnalyticEvents.PAYMENT_FLOW_STEP, {
              ...t,
              from_step: n,
              to_step: s,
              step_duration_ms: r - L,
              flow_duration_ms: r - I.startTime,
            });
          },
          isEligibleForTrial: M,
        });
      }
    },
    946359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("157009"),
        a = n("153727"),
        i = n("650484"),
        l = n("789364");
      function u() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.default, {}),
            (0, s.jsx)(i.PaymentPortalBody, {
              children: (0, s.jsx)(r.AwaitingAuthenticationStepBody, {
                className: l.awaitingAuthenticationStep,
              }),
            }),
          ],
        });
      }
    },
    724269: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("465527"),
        i = n("50517"),
        l = n("153727"),
        u = n("650484"),
        o = n("484750");
      function c() {
        let [e, t] = r.useState(!1),
          n = async () => {
            t(!0), await (0, a.resendPaymentVerificationEmail)();
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.default, {}),
            (0, s.jsx)(u.PaymentPortalBody, {
              children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepBody, {
                className: o.body,
                isEmailResent: e,
                resendEmail: n,
              }),
            }),
            (0, s.jsx)(u.PaymentPortalFooter, {
              children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepFooter, {}),
            }),
          ],
        });
      }
    },
    99836: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalReviewStep: function () {
            return y;
          },
        }),
        n("222007"),
        n("70102");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("612039"),
        u = n("916187"),
        o = n("154889"),
        c = n("917247"),
        d = n("527866"),
        m = n("826795"),
        f = n("501768"),
        p = n("659632"),
        _ = n("635357"),
        S = n("642906"),
        I = n("85336"),
        E = n("310093"),
        P = n("367767"),
        T = n("176108"),
        N = n("298392"),
        C = n("153727"),
        A = n("39065"),
        h = n("650484"),
        v = n("646718"),
        g = n("843455"),
        x = n("782340");
      function y(e) {
        var t, n;
        let a,
          {
            handleStepChange: y,
            trialId: O,
            trialFooterMessageOverride: M,
            reviewWarningMessage: R,
            planGroup: L,
            openInvoiceId: b,
            analyticsData: j,
            analyticsLocation: G,
            referralTrialOfferId: D,
            initialPlanId: U,
            subscriptionTier: F,
            handleClose: B,
          } = e,
          {
            activeSubscription: w,
            setUpdatedSubscription: k,
            contextMetadata: H,
            currencies: Y,
            paymentSourceId: W,
            paymentSources: Z,
            priceOptions: K,
            purchaseError: V,
            purchaseTokenAuthState: z,
            selectedPlan: J,
            selectedSkuId: X,
            setCurrency: q,
            setPaymentSourceId: Q,
            setPurchaseState: $,
            setPurchaseError: ee,
            step: et,
            purchaseState: en,
            isPremium: es,
            setHasAcceptedTerms: er,
            purchaseType: ea,
            setEntitlementsGranted: ei,
            startedPaymentFlowWithPaymentSourcesRef: el,
          } = (0, S.usePaymentContext)(),
          {
            isGift: eu,
            giftMessage: eo,
            giftRecipient: ec,
          } = (0, _.useGiftContext)();
        i(null != et, "Step should be set");
        let ed = r.useRef(null),
          [em, ef] = (0, l.default)(!1, 500);
        (0, f.default)();
        let ep = null !== (n = null != O ? O : D) && void 0 !== n ? n : null,
          e_ =
            null != ep &&
            (!es || (0, v.SubscriptionTrials)[ep].skus.includes(X))
              ? ep
              : null,
          eS = (0, c.usePremiumTrialOffer)(D),
          eI = (0, o.usePremiumDiscountOffer)(),
          eE = { user_trial_offer_id: null == eS ? void 0 : eS.id };
        r.useEffect(() => {
          null != V &&
            null != ed.current &&
            ed.current.scrollIntoView({ behavior: "smooth" });
        }, [V]);
        let eP = r.useCallback(
            (e, t) => {
              k(e),
                null != t && ei(t),
                y(I.Step.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: t },
                });
            },
            [y, k, ei]
          ),
          eT = null != W ? Z[W] : null,
          eN =
            null != J &&
            v.MULTI_MONTH_PLANS.has(J.id) &&
            null != eT &&
            !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eT)
              ? Error(
                  x.default.Messages
                    .BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE
                )
              : null,
          eC = r.useRef(null),
          [eA, eh] = r.useState(null),
          ev =
            !eu &&
            null != eS &&
            null != X &&
            (0, v.SubscriptionTrials)[eS.trial_id].skus.includes(X),
          eg =
            null == eI
              ? void 0
              : null === (t = eI.discount) || void 0 === t
                ? void 0
                : t.plan_ids,
          ex =
            !eu && null != eI && null != eg && null != J && eg.includes(J.id),
          ey = eu && (0, p.shouldShowCustomGiftExperience)(ec),
          eO = null == U && null == F && ea === g.PurchaseTypes.SUBSCRIPTION,
          eM = (0, T.inOneStepSubscriptionCheckout)({
            isTrial: ev,
            isGift: eu,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: el.current,
          }),
          eR = eu && ea === g.PurchaseTypes.ONE_TIME,
          eL = eR || (eM ? eO && es : es),
          eb = r.useCallback(() => {
            if (eM) {
              y(I.Step.SKU_SELECT);
              return;
            }
            return eR ? y(I.Step.GIFT_CUSTOMIZATION) : y(I.Step.PLAN_SELECT);
          }, [y, eM, eR]);
        return (
          ea === g.PurchaseTypes.ONE_TIME
            ? (a = (0, s.jsx)(N.default, {
                hasLegalTermsFlash: em,
                legalTermsNodeRef: eC,
                onPaymentSourceChange: e => Q(null != e ? e.id : null),
                handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS),
              }))
            : null == w || eu
              ? (i(null != J, "Expected plan to be selected"),
                (a = (0, s.jsx)(d.default, {
                  selectedPlanId: J.id,
                  paymentSources: Z,
                  onPaymentSourceChange: e => Q(null != e ? e.id : null),
                  priceOptions: K,
                  currencies: Y,
                  onCurrencyChange: e => q(e),
                  handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS),
                  setHasAcceptedTerms: er,
                  legalTermsNodeRef: eC,
                  hasLegalTermsFlash: em,
                  trialId: e_,
                  trialFooterMessageOverride: M,
                  reviewWarningMessage: R,
                  purchaseState: en,
                  referralTrialOfferId: D,
                  isTrial: ev || (null != O && null != M),
                  isDiscount: ex,
                  handleClose: B,
                })))
              : (i(null != J, "Expected plan to be selected"),
                (a = (0, s.jsx)(m.default, {
                  premiumSubscription: w,
                  paymentSources: Z,
                  priceOptions: K,
                  onPaymentSourceChange: e => {
                    Q(null != e ? e.id : null);
                  },
                  onPaymentSourceAdd: () => {
                    y(I.Step.ADD_PAYMENT_STEPS);
                  },
                  planId: J.id,
                  setHasAcceptedTerms: er,
                  legalTermsNodeRef: eC,
                  hasLegalTermsFlash: em,
                  onInvoiceError: e => eh(e),
                  planGroup: L,
                  currencies: Y,
                  onCurrencyChange: e => q(e),
                  hasOpenInvoice: null != b,
                  purchaseState: en,
                  handleClose: B,
                }))),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(E.GiftNote, { giftMessage: eo }),
              !ey && (0, s.jsx)(C.default, { isEligibleForTrial: ev }),
              (0, s.jsxs)(h.PaymentPortalBody, {
                children: [(0, s.jsx)(P.default, {}), a],
              }),
              (0, s.jsx)(h.PaymentPortalFooter, {
                children: (0, s.jsx)(A.default, {
                  premiumSubscription: null != w ? w : null,
                  setPurchaseState: $,
                  onBack: eb,
                  onNext: eP,
                  onPurchaseError: e => ee(e),
                  legalTermsNodeRef: eC,
                  flashLegalTerms: () => ef(!0),
                  invoiceError: eA,
                  planError: eN,
                  analyticsLocation: G,
                  baseAnalyticsData: j,
                  flowStartTime: H.startTime,
                  trialId: e_,
                  planGroup: L,
                  purchaseTokenAuthState: z,
                  openInvoiceId: b,
                  backButtonEligible: eL,
                  metadata: eE,
                  isTrial: ev,
                  disablePurchase:
                    null != eT &&
                    ea === g.PurchaseTypes.SUBSCRIPTION &&
                    ev &&
                    !eT.canRedeemTrial(),
                }),
              }),
            ],
          })
        );
      }
    },
    39065: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("446674"),
        u = n("77078"),
        o = n("850068"),
        c = n("685665"),
        d = n("921149"),
        m = n("177998"),
        f = n("661128"),
        p = n("868869"),
        _ = n("926223"),
        S = n("467292"),
        I = n("622839"),
        E = n("145131"),
        P = n("599110"),
        T = n("659632"),
        N = n("719923"),
        C = n("635357"),
        A = n("642906"),
        h = n("605886"),
        v = n("286350"),
        g = n("102492"),
        x = n("376641"),
        y = n("49111"),
        O = n("252182");
      function M(e) {
        let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: a,
            onNext: M,
            legalTermsNodeRef: R,
            flashLegalTerms: L,
            invoiceError: b,
            planError: j,
            onPurchaseError: G,
            baseAnalyticsData: D,
            flowStartTime: U,
            trialId: F,
            planGroup: B,
            analyticsLocation: w,
            purchaseTokenAuthState: k,
            openInvoiceId: H,
            metadata: Y,
            backButtonEligible: W,
            disablePurchase: Z,
            isTrial: K = !1,
          } = e,
          {
            selectedPlan: V,
            priceOptions: z,
            setHasAcceptedTerms: J,
            setPurchaseError: X,
            purchaseType: q,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: et,
            skuPricePreviewsById: en,
            referralCode: es,
            contextMetadata: er,
          } = (0, A.usePaymentContext)(),
          {
            isGift: ea,
            selectedGiftStyle: ei,
            customGiftMessage: el,
            emojiConfetti: eu,
            soundEffect: eo,
            giftRecipient: ec,
          } = (0, C.useGiftContext)(),
          ed = (0, T.getGiftExperience)(ec),
          em = {};
        (em.gift_style = ei),
          ed === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (i(
              null != ec,
              "Gift recipient must be set at purchase review step for these gift options."
            ),
            (em.recipient_id = ec.id),
            (em.custom_message = el),
            (em.emoji_id = null == eu ? void 0 : eu.id),
            (em.emoji_name = null == eu ? void 0 : eu.surrogates),
            (em.sound_id = null == eo ? void 0 : eo.soundId));
        let ef = null == V ? void 0 : V.id,
          ep = (0, g.checkNoPaymentTrialEnabled)(F, z.paymentSourceId, ef),
          e_ = (0, l.useStateFromStores)(
            [_.default],
            () => _.default.popupCallbackCalled
          ),
          { analyticsLocations: eS } = (0, c.default)(),
          eI = null != Q ? $[Q] : null,
          [eE, eP] = r.useState(ep),
          [eT, eN] = r.useState(!1),
          { hasEntitlements: eC } = (0, f.useSubscriptionEntitlements)(ef, ea),
          eA = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
          eh = eC || ep,
          ev = (0, d.useIsPrepaidPaymentPastDue)(),
          eg = null,
          ex = null;
        if (q === y.PurchaseTypes.ONE_TIME) {
          var ey;
          i(null != ee, "SKU must be selected for one-time purchases"),
            i(
              null !=
                (eg = null !== (ey = et[ee]) && void 0 !== ey ? ey : null),
              "SKU must exist and be fetched."
            );
          let e = en[ee],
            t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
          ex = null != e ? e[t] : null;
        }
        let eO = async () => {
          await (0, h.purchaseProduct)({
            setPurchaseState: n,
            setHasAcceptedTerms: J,
            setIsSubmitting: eP,
            setPurchaseError: X,
            hasRedirectURL: eT,
            setHasRedirectURL: eN,
            isGift: ea,
            baseAnalyticsData: D,
            analyticsLocation: w,
            analyticsLocations: eS,
            flowStartTime: U,
            subscriptionPlan: V,
            planGroup: B,
            trialId: F,
            priceOptions: z,
            paymentSource: eI,
            isPrepaidPaymentPastDue: ev,
            openInvoiceId: H,
            premiumSubscription: t,
            onNext: M,
            metadata: Y,
            sku: eg,
            skuPricePreview: ex,
            purchaseType: q,
            referralCode: es,
            loadId: er.loadId,
            giftInfoOptions: em,
          });
        };
        r.useEffect(() => {
          let e = async () => {
            if (!0 === e_)
              try {
                if (null == _.default.redirectedPaymentId) return;
                await (0, o.redirectedPaymentSucceeded)(
                  _.default.redirectedPaymentId
                ),
                  n(v.PurchaseState.COMPLETED),
                  M();
              } catch (e) {
                n(v.PurchaseState.FAIL),
                  G(e),
                  P.default.track(y.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                    ...D,
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: Q,
                    payment_source_type: null == eI ? void 0 : eI.type,
                    duration_ms: Date.now() - U,
                  });
              } finally {
                eP(!1), (0, o.resetPaymentIntentId)();
              }
            else k === S.PurchaseTokenAuthState.SUCCESS && (await eO());
          };
          e();
        }, [e_]),
          r.useEffect(() => {
            ep && !ea && null == t && eO();
          }, [ep, ea, t]);
        let eM = null != H || (q === y.PurchaseTypes.ONE_TIME && !ea);
        return ep
          ? null
          : (0, s.jsxs)(u.ModalFooter, {
              align: E.default.Align.CENTER,
              children: [
                (0, s.jsx)(p.default, {
                  legalTermsNodeRef: R,
                  invoiceError: b,
                  planError: j,
                  disablePurchase: Z,
                  flashLegalTerms: L,
                  isSubmitting: eE,
                  premiumSubscription: t,
                  isGift: ea,
                  planGroup: B,
                  isPrepaid: eA,
                  isTrial: K,
                  makePurchase: eO,
                  needsPaymentSource: null == eI && !eh,
                }),
                (0, s.jsx)(x.default, {}),
                W && !eM
                  ? (0, s.jsx)("div", {
                      className: O.back,
                      children: (0, s.jsx)(m.default, { onClick: a }),
                    })
                  : null,
              ],
            });
      }
    },
    883558: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("862205");
      let r = (0, s.createExperiment)({
        id: "2023-07_checkout_optimization_browser_autofill",
        label: "Checkout Optimization Browser Autofill",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      var a = r;
    },
    102492: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          checkNoPaymentTrialEnabled: function () {
            return l;
          },
        });
      var s = n("862205"),
        r = n("719923");
      let a = (0, s.createExperiment)({
          kind: "user",
          id: "2022-06_no_payment_info_trial",
          label: "No Payment Info Trial",
          defaultConfig: { bypassCheckout: !1 },
          treatments: [
            {
              id: 1,
              label: "Bypass collecting payment info",
              config: { bypassCheckout: !0 },
            },
          ],
        }),
        i = (e, t, n) => {
          let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
          return null != e && null == t && s;
        },
        l = (e, t, n) => {
          let { bypassCheckout: s } = a.useExperiment(
              { location: "aeb070_1" },
              { autoTrackExposure: !1 }
            ),
            r = i(e, t, n);
          return s && r;
        };
    },
    310093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GiftNote: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("812952"),
        a = n("978679"),
        i = n("659632"),
        l = n("635357"),
        u = n("782340"),
        o = n("771776");
      function c(e) {
        let { giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
          { isGift: n, giftRecipient: c } = (0, l.useGiftContext)();
        return !n || (0, i.shouldShowCustomGiftExperience)(c)
          ? null
          : (0, s.jsx)(r.default, {
              className: o.paymentNote,
              iconSize: r.default.Sizes.SMALL,
              icon: a.default,
              color:
                null == t
                  ? r.default.Colors.PRIMARY
                  : r.default.Colors.SECONDARY,
              children: t,
            });
      }
    },
    298392: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("627445"),
        a = n.n(r),
        i = n("976979"),
        l = n("65597"),
        u = n("77078"),
        o = n("703332"),
        c = n("812952"),
        d = n("740055"),
        m = n("545876"),
        f = n("84460"),
        p = n("883662"),
        _ = n("623003"),
        S = n("617223"),
        I = n("102985"),
        E = n("160299"),
        P = n("622839"),
        T = n("167726"),
        N = n("953109"),
        C = n("315585"),
        A = n("659632"),
        h = n("153160"),
        v = n("635357"),
        g = n("642906"),
        x = n("286350"),
        y = n("628135"),
        O = n("49111"),
        M = n("782340"),
        R = n("816845");
      function L(e) {
        let { sku: t, skuPricePreview: n } = e;
        a(null != n.amount, "SKU must have a price set.");
        let r = n.amount - n.tax;
        return !n.tax_inclusive && n.tax > 0
          ? (0, s.jsxs)(p.PremiumInvoiceTable, {
              className: R.invoice,
              children: [
                (0, s.jsx)(p.PremiumInvoiceTableRow, {
                  label: t.name,
                  value: (0, h.formatPrice)(r, n.currency),
                  className: R.subscriptionCostRow,
                }),
                (0, s.jsx)(p.PremiumInvoiceTableRow, {
                  label: M.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                  value: (0, h.formatPrice)(n.tax, n.currency),
                  className: R.subscriptionCostRow,
                }),
                (0, s.jsx)(p.PremiumInvoiceTableDivider, {}),
                (0, s.jsx)(p.PremiumInvoiceTableTotalRow, {
                  label: M.default.Messages.BILLING_INVOICE_TOTAL.format(),
                  value: (0, h.formatPrice)(n.amount, n.currency),
                  className: R.subscriptionCostRow,
                }),
              ],
            })
          : (0, s.jsx)(p.PremiumInvoiceTable, {
              className: R.invoice,
              children: (0, s.jsx)(p.PremiumInvoiceTableRow, {
                label: t.name,
                value: (0, h.formatPrice)(n.amount, n.currency),
                className: R.subscriptionCostRow,
              }),
            });
      }
      function b(e) {
        let { application: t, sku: n, isEmbeddedIAP: r } = e;
        return !0 !== r
          ? null
          : (0, s.jsxs)("div", {
              className: R.skuHeading,
              children: [
                (0, s.jsx)(N.default, { game: t }),
                (0, s.jsx)(u.Heading, {
                  variant: "heading-lg/bold",
                  className: R.skuHeadingText,
                  children: n.name,
                }),
              ],
            });
      }
      function j(e) {
        let {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: r,
            handlePaymentSourceAdd: p,
          } = e,
          {
            application: N,
            purchaseState: h,
            paymentSources: j,
            paymentSourceId: G,
            setHasAcceptedTerms: D,
            skusById: U,
            skuPricePreviewsById: F,
            selectedSkuId: B,
            isEmbeddedIAP: w,
            purchaseType: k,
          } = (0, g.usePaymentContext)(),
          { isGift: H, giftRecipient: Y } = (0, v.useGiftContext)(),
          W = H && (0, A.shouldShowCustomGiftExperience)(Y);
        a(null != B, "Expected selectedSkuId");
        let Z = U[B],
          K = F[B],
          V = null != G ? G : P.NO_PAYMENT_SOURCE,
          z = null != K ? K[V] : null;
        a(null != Z, "SKU must exist and be fetched."),
          a(null != N, "Application must exist.");
        let J = (0, l.useStateFromStores)(
            [f.default, T.default],
            () =>
              T.default.inTestModeForApplication(N.id) ||
              f.default.inDevModeForApplication(N.id),
            [N.id]
          ),
          X = (0, l.useStateFromStores)([I.default], () => I.default.enabled),
          q = i.CountryCodesSets.EEA_COUNTRIES.has(
            E.default.ipCountryCodeWithFallback
          ),
          Q =
            h === x.PurchaseState.PURCHASING || h === x.PurchaseState.COMPLETED,
          $ = null != G ? j[G].type : null;
        return (0, s.jsxs)("div", {
          className: R.stepBody,
          children: [
            J &&
              (0, s.jsx)(
                c.default,
                {
                  icon: C.default,
                  iconSize: c.default.Sizes.SMALL,
                  color: c.default.Colors.WARNING,
                  className: R.errorBlock,
                  children:
                    M.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE,
                },
                "TEST_MODE"
              ),
            (0, s.jsx)(b, { application: N, sku: Z, isEmbeddedIAP: w }),
            W && (0, s.jsx)(y.default, { sku: Z }),
            null != Y
              ? (0, s.jsx)(S.SendGiftToUser, { giftRecipient: Y })
              : null,
            (0, s.jsx)(u.FormTitle, {
              tag: u.FormTitleTags.H5,
              children: H
                ? M.default.Messages.PREMIUM_GIFTING_BUTTON
                : M.default.Messages
                    .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
            }),
            null == z
              ? (0, s.jsx)(u.Spinner, {
                  type: u.Spinner.Type.WANDERING_CUBES,
                  className: R.invoiceSpinner,
                })
              : (0, s.jsx)(L, { sku: Z, skuPricePreview: z }),
            (0, s.jsxs)("div", {
              className: R.paymentSourceWrapper,
              children: [
                (0, s.jsx)(u.FormTitle, {
                  tag: u.FormTitleTags.H5,
                  children:
                    M.default.Messages
                      .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                (0, s.jsx)(d.default, {
                  paymentSources: Object.values(j),
                  selectedPaymentSourceId: G,
                  onChange: r,
                  onPaymentSourceAdd: p,
                  hidePersonalInformation: X,
                }),
              ],
            }),
            (0, s.jsx)(_.default, {
              isActive: t,
              ref: n,
              children: (0, s.jsx)(m.default, {
                onChange: D,
                forceShow: !0,
                showWithdrawalWaiver: q,
                disabled: Q,
                subscriptionPlan: null,
                finePrintClassname: R.fineprint,
                purchaseType: k,
                isGift: H,
                checkboxLabel:
                  Z.productLine === O.SKUProductLines.COLLECTIBLES
                    ? M.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format(
                        { paidURL: O.MarketingURLs.PAID_TERMS }
                      )
                    : void 0,
                finePrint: (0, s.jsx)(o.default, {
                  paymentSourceType: $,
                  isEmbeddedIAP: w,
                  purchaseType: k,
                  productLine: Z.productLine,
                  isGift: H,
                }),
              }),
            }),
          ],
        });
      }
    },
    628135: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("794252");
      var s = n("37983");
      n("884691");
      var r = n("506838"),
        a = n("265586"),
        i = n("65597"),
        l = n("77078"),
        u = n("606292"),
        o = n("688318"),
        c = n("426188"),
        d = n("210721"),
        m = n("65324"),
        f = n("845962"),
        p = n("501768"),
        _ = n("635471"),
        S = n("50885"),
        I = n("635357"),
        E = n("782340"),
        P = n("285311"),
        T = n("93902");
      let N = S.default.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function C(e) {
        let { avatarDecoration: t } = e,
          {
            avatarDecorationSrc: n,
            eventHandlers: r,
            avatarPlaceholderSrc: a,
          } = (0, o.default)({
            avatarDecorationOverride: t,
            size: (0, u.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_152),
          });
        return (0, s.jsx)("div", {
          className: P.giftMainAnimationWrapper,
          children: (0, s.jsx)(N, {
            ...r,
            avatarDecoration: n,
            src: a,
            className: P.avatar,
            size: l.AvatarSizes.SIZE_152,
            "aria-label": E.default.Messages.USER_SETTINGS_AVATAR,
          }),
        });
      }
      function A(e) {
        let { id: t } = e,
          n = (0, i.useStateFromStores)([f.default], () => {
            var e;
            return null === (e = f.default.getProfileEffectById(t)) ||
              void 0 === e
              ? void 0
              : e.config;
          });
        return (
          (0, p.default)(null == n),
          (0, s.jsxs)("div", {
            className: P.profileEffectContainer,
            children: [
              (0, s.jsx)("img", {
                src: T,
                alt: null == n ? void 0 : n.accessibilityLabel,
                className: P.profileEffectBackground,
              }),
              (0, s.jsx)(_.default, { profileEffectId: t }),
            ],
          })
        );
      }
      function h(e) {
        let { sku: t } = e,
          { selectedGiftStyle: n } = (0, I.useGiftContext)(),
          { product: i } = (0, c.useFetchCollectiblesProduct)(
            null == t ? void 0 : t.id
          ),
          l = null == i ? void 0 : i.items[0],
          u = (0, r.match)(l)
            .with({ type: a.CollectiblesItemType.AVATAR_DECORATION }, e =>
              (0, s.jsx)(C, { avatarDecoration: e })
            )
            .with({ type: a.CollectiblesItemType.PROFILE_EFFECT }, e =>
              (0, s.jsx)(A, { id: e.id })
            )
            .otherwise(() => null);
        return null != n && null == u
          ? (0, s.jsx)("div", {
              className: P.giftMainAnimationWrapper,
              children: (0, s.jsx)(m.default, {
                defaultAnimationState: d.AnimationState.LOOP,
                giftStyle: n,
                shouldAnimate: !0,
                className: P.giftMainAnimation,
              }),
            })
          : u;
      }
    },
    35188: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2022-12_localized_pricing_poland_notice",
        label: "Localized Pricing Poland Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Poland Notice", config: { enabled: !0 } },
        ],
      });
    },
    909469: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PAYMENT_SOURCE_NAMES: function () {
            return m;
          },
          getLocalizedPricingNotice: function () {
            return p;
          },
          getLocalizedPricingBannerStrings: function () {
            return _;
          },
        }),
        n("222007"),
        n("424973");
      var s = n("592861"),
        r = n("988415"),
        a = n("701909"),
        i = n("153160"),
        l = n("49111"),
        u = n("843455"),
        o = n("782340");
      let c = new Set([
          u.CurrencyCodes.ARS,
          u.CurrencyCodes.CLP,
          u.CurrencyCodes.COP,
        ]),
        d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
        m = {
          [l.PaymentSourceTypes.CARD]: () =>
            o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
          [l.PaymentSourceTypes.PAYPAL]: () =>
            o.default.Messages.PAYMENT_SOURCE_PAYPAL,
          [l.PaymentSourceTypes.SOFORT]: () =>
            o.default.Messages.PAYMENT_SOURCE_SOFORT,
          [l.PaymentSourceTypes.GIROPAY]: () =>
            o.default.Messages.PAYMENT_SOURCE_GIROPAY,
          [l.PaymentSourceTypes.PRZELEWY24]: () =>
            o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
          [l.PaymentSourceTypes.PAYSAFE_CARD]: () =>
            o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
          [l.PaymentSourceTypes.GCASH]: () =>
            o.default.Messages.PAYMENT_SOURCE_GCASH,
          [l.PaymentSourceTypes.GRABPAY_MY]: () =>
            o.default.Messages.PAYMENT_SOURCE_GRABPAY,
          [l.PaymentSourceTypes.MOMO_WALLET]: () =>
            o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
          [l.PaymentSourceTypes.VENMO]: () =>
            o.default.Messages.PAYMENT_SOURCE_VENMO,
          [l.PaymentSourceTypes.KAKAOPAY]: () =>
            o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
          [l.PaymentSourceTypes.GOPAY_WALLET]: () =>
            o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
          [l.PaymentSourceTypes.BANCONTACT]: () =>
            o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
          [l.PaymentSourceTypes.EPS]: () =>
            o.default.Messages.PAYMENT_SOURCE_EPS,
          [l.PaymentSourceTypes.IDEAL]: () =>
            o.default.Messages.PAYMENT_SOURCE_IDEAL,
          [l.PaymentSourceTypes.CASH_APP]: () =>
            o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
          [l.PaymentSourceTypes.APPLE]: () =>
            o.default.Messages.PAYMENT_SOURCE_APPLE,
        },
        f = [
          l.PaymentSourceTypes.EPS,
          l.PaymentSourceTypes.BANCONTACT,
          l.PaymentSourceTypes.IDEAL,
          l.PaymentSourceTypes.SOFORT,
          l.PaymentSourceTypes.GIROPAY,
          l.PaymentSourceTypes.SEPA_DEBIT,
          l.PaymentSourceTypes.PAYSAFE_CARD,
        ],
        p = (e, t, n, s) => {
          if (null == e) return "";
          let a = (0, r.getI18NCountryName)(e);
          if (t === u.CurrencyCodes.EUR)
            return n
              ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format(
                  { country: a }
                )
              : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format(
                  { currencyISOCode: t.toUpperCase() }
                );
          return s
            ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                countryName: a,
              })
            : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                country: a,
              });
        },
        _ = e => {
          let {
              localizedPricingPromo: t,
              subscription: n,
              forceSingleLine: s = !1,
              userLocale: p,
            } = e,
            {
              countryCode: _,
              amount: I,
              currency: E,
              paymentSourceTypes: P,
            } = t,
            T = 0 !== P.length,
            N = S(_),
            C = (0, i.formatPrice)(I, E, {
              style: "currency",
              currency: E,
              currencyDisplay: "symbol",
              localeOverride: N,
            }),
            A =
              o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    l.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  currencyISOCode: E.toUpperCase(),
                  localizedPriceWithCurrencySymbol: C,
                }
              );
          if (
            (d.has(E) &&
              (A =
                o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      l.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    localizedPriceWithCurrencySymbol: C,
                  }
                )),
            c.has(E) &&
              (A =
                o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      l.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: E.toUpperCase(),
                    localizedPriceWithCurrencySymbol: C,
                  }
                )),
            null != n &&
              !n.hasPremiumNitroMonthly &&
              (A =
                o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      l.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: E.toUpperCase(),
                  }
                )),
            E === u.CurrencyCodes.EUR &&
              (A = s
                ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format(
                    {
                      country: (0, r.getI18NCountryName)(_),
                      currencyISOCode: E.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        l.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )
                : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format(
                    {
                      currencyISOCode: E.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        l.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )),
            T)
          ) {
            let e = f.filter(e => P.includes(e)),
              t = P.filter(e => !f.includes(e)),
              n = [...e, ...t],
              s = n.slice(0, 2).map(e => {
                var t, n;
                return null !==
                  (n =
                    null === (t = m[e]) || void 0 === t ? void 0 : t.call(m)) &&
                  void 0 !== n
                  ? n
                  : o.default.Messages.PAYMENT_SOURCE_UNKNOWN;
              });
            P.length >= 3 &&
              s.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let r = new Intl.ListFormat(p, {
              style: "short",
              type: "conjunction",
            });
            A =
              o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    l.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  paymentMethods: r.format(s),
                }
              );
          }
          return {
            localizedPricingBannerHeader:
              o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                country: (0, r.getI18NCountryName)(_),
              }),
            localizedPricingBannerBody: A,
            localizedPricingBannerLinkOnly:
              o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                helpCenterLink: a.default.getArticleURL(
                  l.HelpdeskArticles.LOCALIZED_PRICING
                ),
              }),
            localizedPricingBannerSubNotif: T
              ? void 0
              : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF,
          };
        },
        S = e => {
          let t = s.default.find(t => t.alpha2 === e);
          return null == t ? void 0 : t.localeForICU;
        };
    },
    391533: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2023-05_localized_pricing_turkey_notice",
        label: "Localized Pricing Turkey Notice",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable Turkey Notice", config: { enabled: !0 } },
        ],
      });
    },
    916187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
          isPaymentSourceEligibleForMultiMonthPlans: function () {
            return u;
          },
        }),
        n("222007");
      var s = n("976979"),
        r = n("862205"),
        a = n("646718"),
        i = (0, r.createExperiment)({
          kind: "user",
          id: "2022-02_multi_month_plans",
          label: "Multi Month Plans",
          defaultConfig: { newPlans: [] },
          treatments: [
            {
              id: 1,
              label: "3 and 6 Month Plans",
              config: {
                newPlans: [
                  a.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2,
                  a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2,
                ],
              },
            },
            {
              id: 2,
              label: "3 Month Plan Only",
              config: {
                newPlans: [a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2],
              },
            },
          ],
        });
      let l = new Set([s.CountryCodes.US, s.CountryCodes.CA]);
      function u(e) {
        return null == e || l.has(e.country);
      }
    },
    968532: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CheckoutV2ChildExperiments: function () {
            return r;
          },
          default: function () {
            return l;
          },
        });
      var s,
        r,
        a = n("862205");
      ((s = r || (r = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.BROWSER_AUTOFILL = 1)] = "BROWSER_AUTOFILL"),
        (s[(s.MERGE_PLAN_SELECT_TO_REVIEW = 2)] =
          "MERGE_PLAN_SELECT_TO_REVIEW");
      let i = (0, a.createExperiment)({
        id: "2023-08_checkout_v2_parent",
        label: "Checkout V2 Parent",
        kind: "user",
        defaultConfig: { experiment: 0 },
        treatments: [
          { id: 1, label: "Browser Autofill", config: { experiment: 1 } },
          {
            id: 2,
            label: "Merge Plan Select to Review",
            config: { experiment: 2 },
          },
        ],
      });
      var l = i;
    },
    921149: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsPrepaidPaymentPastDue: function () {
            return m;
          },
        });
      var s = n("866227"),
        r = n.n(s),
        a = n("446674"),
        i = n("357957"),
        l = n("10514"),
        u = n("521012"),
        o = n("719923"),
        c = n("49111"),
        d = n("843455");
      function m() {
        let e = (0, a.useStateFromStores)([u.default], () =>
            u.default.getPremiumTypeSubscription()
          ),
          t = (0, a.useStateFromStores)([l.default], () =>
            null != e && null != e.planIdFromItems
              ? l.default.get(null == e ? void 0 : e.planIdFromItems)
              : null
          ),
          n = (0, a.useStateFromStores)(
            [i.default],
            () =>
              null != e && null != e.paymentSourceId
                ? i.default.getPaymentSource(e.paymentSourceId)
                : null,
            [e]
          ),
          s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
          m =
            (null == e ? void 0 : e.status) ===
            c.SubscriptionStatusTypes.PAST_DUE
              ? r().diff(r(e.currentPeriodStart), "days")
              : 0;
        return (
          !!(
            null != e &&
            null != t &&
            (0, o.isPremiumBaseSubscriptionPlan)(t.id)
          ) &&
          s &&
          m >= 0 &&
          m <= (0, o.getBillingGracePeriodDays)(e) &&
          e.status === c.SubscriptionStatusTypes.PAST_DUE &&
          !e.isPurchasedExternally
        );
      }
    },
    279171: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useShouldShowLegacyPricingNotice: function () {
            return S;
          },
          default: function () {
            return I;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("627445"),
        l = n.n(i),
        u = n("423487"),
        o = n("701909"),
        c = n("35188"),
        d = n("391533"),
        m = n("296253"),
        f = n("49111"),
        p = n("782340"),
        _ = n("816461");
      function S() {
        let e = (0, m.default)(),
          { enabled: t } = c.default.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 }
          ),
          { enabled: n } = d.default.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 }
          );
        return null != e && ("PL" === e ? t : "TR" === e && n);
      }
      var I = e => {
        var t, n;
        let { fromBoostCancelModal: r, className: i } = e,
          c = (0, m.default)(),
          d = S();
        if (!d) return null;
        return (
          l(null != c, "Subscription billing country should not be null"),
          (0, s.jsxs)("div", {
            className: a(_.noticeRoot, i),
            children: [
              (0, s.jsx)("div", {
                className: _.iconContainer,
                children: (0, s.jsx)(u.default, { className: _.infoIcon }),
              }),
              (0, s.jsx)("div", {
                className: _.text,
                children: ((t = c),
                (n = r),
                "PL" === t
                  ? n
                    ? p.default.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : p.default.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === t
                    ? n
                      ? p.default.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : p.default.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : n
                      ? p.default.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : p.default.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: o.default.getArticleURL(
                    f.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                }),
              }),
            ],
          })
        );
      };
    },
    824734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("153160"),
        l = n("646718"),
        u = n("782340"),
        o = n("513600");
      function c(e) {
        let {
            price: t,
            currency: n,
            intervalType: r,
            className: c,
            intervalCount: d = 1,
            isPrepaidPaymentSource: m = !1,
          } = e,
          f = (0, i.formatPrice)(t, n),
          p = null;
        return (
          r === l.SubscriptionIntervalTypes.YEAR
            ? (p = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                price: f,
              }))
            : r === l.SubscriptionIntervalTypes.MONTH && 1 === d
              ? (p = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                  price: f,
                }))
              : r === l.SubscriptionIntervalTypes.MONTH &&
                d > 1 &&
                (p =
                  u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format(
                    { price: f, intervalCount: d }
                  )),
          (0, s.jsx)("div", {
            className: a(o.pricePerInterval, c),
            "data-testid": "PricePerInterval-".concat(n),
            children:
              null == r || m ? (0, s.jsx)("strong", { children: f }) : p,
          })
        );
      }
    },
    705820: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        i = n.n(a),
        l = n("77078"),
        u = n("850391"),
        o = n("149022"),
        c = n("681060"),
        d = n("570697"),
        m = n("233069"),
        f = n("646718"),
        p = n("49111"),
        _ = n("782340"),
        S = n("716397");
      let I = (0, m.createChannelRecord)({ id: "1", type: p.ChannelTypes.DM });
      function E(e) {
        let {
            sectionTitle: t,
            errors: n,
            onTextChange: a,
            pendingText: m,
            placeholder: p,
            currentText: E,
            className: P,
            innerClassName: T,
            disabled: N = !1,
            disableThemedBackground: C = !1,
          } = e,
          [A, h] = r.useState(null != m ? m : E),
          [v, g] = r.useState((0, o.toRichValue)(A)),
          x = r.useRef(!1);
        return (
          r.useEffect(() => {
            x.current = !0;
          }, []),
          r.useEffect(() => {
            if (void 0 === m) {
              let e = (0, o.toRichValue)(E);
              h(E), g(e);
            }
          }, [m, E]),
          (0, s.jsx)("div", {
            className: i(S.body, P),
            children: (0, s.jsxs)(d.default, {
              title: t,
              errors: n,
              disabled: N,
              children: [
                (0, s.jsx)(c.default, {
                  innerClassName: i(S.textArea, T),
                  editorClassName: S.editorTextArea,
                  maxCharacterCount: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                  onChange: function (e, t, n) {
                    t !== A && (h(t), g(n), a(t));
                  },
                  placeholder: p,
                  channel: I,
                  textValue: A,
                  richValue: v,
                  type: u.ChatInputTypes.CUSTOM_GIFT,
                  onBlur: () => {
                    x.current = !1;
                  },
                  onFocus: () => {
                    x.current = !0;
                  },
                  focused: x.current,
                  onSubmit: function () {
                    return new Promise(e => {
                      e({ shouldClear: !1, shouldRefocus: !0 });
                    });
                  },
                  disableThemedBackground: C,
                }),
                (0, s.jsx)(l.HiddenVisually, {
                  children: _.default.Messages.MAXIMUM_LENGTH.format({
                    maxLength: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    623003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        i = n.n(a),
        l = n("4263");
      let u = r.forwardRef(function (e, t) {
        let { isActive: n, children: r } = e;
        return (0, s.jsx)("div", {
          className: i(l.wrapper, { [l.wrapperActive]: n }),
          ref: t,
          children: r,
        });
      });
      var o = u;
    },
    889554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GiftAnimationOptions: function () {
            return I;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        i = n("635357"),
        l = n("742926"),
        u = n("659632"),
        o = n("210721"),
        c = n("53253"),
        d = n("65324"),
        m = n("563613"),
        f = n("64798"),
        p = n("646718"),
        _ = n("782340"),
        S = n("421404");
      let I = e => {
        let { isShopGift: t } = e,
          {
            giftRecipient: n,
            selectedGiftStyle: I,
            setSelectedGiftStyle: E,
            emojiConfetti: P,
            soundEffect: T,
            setEmojiConfetti: N,
            setSoundEffect: C,
          } = (0, i.useGiftContext)(),
          [A, h] = r.useState(!1),
          v = r.useRef(null),
          g = (0, a.useRadioGroup)({ orientation: "horizontal" }),
          x = (0, u.getGiftExperience)(n, t),
          y = x === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          O = x !== u.GiftExperience.DEFAULT,
          M = (0, c.useIsSeasonalGiftingActive)(),
          { enabled: R } = c.default.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: M }
          ),
          L = null;
        return (
          O &&
            (L = M && R ? p.SeasonalGiftStyles2023 : p.STANDARD_GIFT_OPTIONS),
          (0, s.jsxs)("div", {
            children: [
              O &&
                (0, s.jsxs)("div", {
                  className: S.giftMainAnimation,
                  children: [
                    null != I
                      ? (0, s.jsx)(d.default, {
                          giftStyle: I,
                          defaultAnimationState: o.AnimationState.ACTION,
                          idleAnimationState: o.AnimationState.LOOP,
                          shouldAnimate: !0,
                          className: S.animation,
                        })
                      : (0, s.jsx)(a.Spinner, { className: S.spinner }),
                    y &&
                      (0, s.jsxs)("div", {
                        className: S.soundEmojiContainer,
                        children: [
                          (0, s.jsx)("div", {
                            className: S.sound,
                            children: (0, s.jsx)(l.default, {
                              sound: T,
                              onSelect: e => {
                                null != C && C(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: S.emoji,
                            children: (0, s.jsx)(m.default, {
                              setEmojiConfetti: N,
                              emojiConfetti: null == P ? void 0 : P,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, s.jsx)("div", {
                tabIndex: null != I || A ? void 0 : 0,
                onFocus: e => {
                  var t;
                  e.target === e.currentTarget &&
                    (null === (t = v.current) || void 0 === t || t.focus());
                },
                className: S.giftBoxOptionContainer,
                "aria-label":
                  _.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                ...g,
                children:
                  null != L &&
                  L.map((e, t) =>
                    (0, s.jsx)(
                      f.GiftStaticOption,
                      {
                        isSelected: I === e,
                        giftStyle: e,
                        setSelectedGiftStyle: E,
                        ref: 0 === t ? v : null,
                        onFocus: () => h(!0),
                        onBlur: () => h(!1),
                      },
                      e
                    )
                  ),
              }),
              (0, s.jsx)("div", { className: S.selectPlanDivider }),
            ],
          })
        );
      };
    },
    563613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007"),
        n("781738");
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        i = n("86678"),
        l = n("46829"),
        u = n("49111"),
        o = n("958706"),
        c = n("782340"),
        d = n("517184");
      let m = {
          section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
          openPopoutType: "gift_effect_emoji_picker",
        },
        f = o.EmojiIntention.GIFT;
      function p(e) {
        let { setEmojiConfetti: t, emojiConfetti: n } = e,
          [u, o] = r.useState(!1),
          p = e =>
            (0, s.jsxs)("div", {
              className: d.customGiftContent,
              children: [
                (0, s.jsxs)("div", {
                  className: d.customGiftHeader,
                  children: [
                    (0, s.jsx)(a.Text, {
                      variant: "text-md/bold",
                      children: c.default.Messages.GIFT_SELECT_EMOJI,
                    }),
                    (0, s.jsx)(a.Text, {
                      variant: "text-sm/normal",
                      children:
                        c.default.Messages
                          .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                    }),
                  ],
                }),
                e,
              ],
            }),
          _ = e => {
            null != t && (t(e), o(!1));
          };
        return (0, s.jsx)(a.Popout, {
          shouldShow: u,
          position: "bottom",
          align: "left",
          autoInvert: !1,
          onRequestClose: () => o(!1),
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, s.jsx)(a.Dialog, {
              children: (0, s.jsx)(i.default, {
                analyticsOverride: m,
                closePopout: t,
                onSelectEmoji: _,
                wrapper: "div",
                pickerIntention: f,
                renderHeader: p,
                headerClassName: d.emojiHeader,
                className: d.emojiList,
                listHeaderClassName: d.emojiList,
                searchProps: { accessory: (0, s.jsx)(s.Fragment, {}) },
              }),
            });
          },
          children: () =>
            (0, s.jsx)("div", {
              className: d.container,
              children: (0, s.jsx)(a.Clickable, {
                className: d.emoji,
                onClick: () => o(!0),
                children:
                  (null == n ? void 0 : n.name) == null
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(l.default, {
                            className: d.emojiIcon,
                            width: 14,
                            height: 14,
                          }),
                          (0, s.jsx)(a.Text, {
                            className: d.text,
                            variant: "text-sm/semibold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI,
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(a.Text, {
                            className: d.textSelected,
                            variant: "text-sm/semibold",
                            children: n.optionallyDiverseSequence,
                          }),
                          (0, s.jsx)(a.Text, {
                            className: d.text,
                            variant: "text-sm/semibold",
                            children: n.name.replace(/_/g, " "),
                          }),
                        ],
                      }),
              }),
            }),
        });
      }
    },
    64798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GiftStaticOption: function () {
            return I;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        i = n("646718"),
        l = n("860980"),
        u = n("392459"),
        o = n("26245"),
        c = n("21340"),
        d = n("159548"),
        m = n("897184"),
        f = n("990439"),
        p = n("999641"),
        _ = n("74771");
      let S = {
          [i.PremiumGiftStyles.STANDARD_BOX]: m,
          [i.PremiumGiftStyles.CAKE]: f,
          [i.PremiumGiftStyles.CHEST]: p,
          [i.PremiumGiftStyles.COFFEE]: _,
          [i.PremiumGiftStyles.SNOWGLOBE]: "",
          [i.PremiumGiftStyles.BOX]: "",
          [i.PremiumGiftStyles.CUP]: "",
          [i.PremiumGiftStyles.SEASONAL_CAKE]: o,
          [i.PremiumGiftStyles.SEASONAL_CHEST]: c,
          [i.PremiumGiftStyles.SEASONAL_COFFEE]: d,
          [i.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u,
        },
        I = r.forwardRef(function (e, t) {
          let {
            isSelected: n,
            giftStyle: r,
            setSelectedGiftStyle: i,
            onFocus: u,
            onBlur: o,
          } = e;
          return (0, s.jsx)(a.Clickable, {
            innerRef: t,
            onClick: () => i(r),
            onFocus: u,
            onBlur: o,
            children: (0, s.jsx)("img", {
              style: { width: "100%", height: "100%" },
              alt: "",
              src: S[r],
              className: n ? l.customGiftBoxHighlighted : l.customGiftBox,
            }),
          });
        });
    },
    177998: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("782340"),
        i = n("32464"),
        l = e => {
          let { onClick: t } = e;
          return (0, s.jsx)(r.Anchor, {
            onClick: t,
            className: i.link,
            children: a.default.Messages.BACK,
          });
        };
    },
    570727: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumSwitchPlanSelectBody: function () {
            return Y;
          },
          PremiumSwitchPlanSelectFooter: function () {
            return W;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("446674"),
        u = n("77078"),
        o = n("405932"),
        c = n("798609"),
        d = n("837148"),
        m = n("903494"),
        f = n("635357"),
        p = n("642906"),
        _ = n("85336"),
        S = n("883558"),
        I = n("10514"),
        E = n("521012"),
        P = n("659632"),
        T = n("701909"),
        N = n("773336"),
        C = n("719923"),
        A = n("153160"),
        h = n("916187"),
        v = n("968532"),
        g = n("15733"),
        x = n("154889"),
        y = n("917247"),
        O = n("279171"),
        M = n("883662"),
        R = n("824734"),
        L = n("705820"),
        b = n("889554"),
        j = n("177998"),
        G = n("661128"),
        D = n("26785"),
        U = n("617223"),
        F = n("646718"),
        B = n("49111"),
        w = n("843455"),
        k = n("782340"),
        H = n("291646");
      function Y(e) {
        var t, n, a, _, S, E;
        let {
            premiumSubscription: N,
            skuId: v,
            selectedPlanId: j,
            setSelectedPlanId: G,
            priceOptions: Y,
            planOptions: W,
            eligibleForMultiMonthPlans: Z,
            referralTrialOfferId: K,
            subscriptionPeriodEnd: V,
            showTotal: z = !0,
            discountInvoiceItems: J,
            handleClose: X,
          } = e,
          {
            activeSubscription: q,
            setSelectedPlanId: Q,
            selectedSkuId: $,
            selectedPlan: ee,
            priceOptions: et,
          } = (0, p.usePaymentContext)(),
          {
            isGift: en,
            giftRecipient: es,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            setCustomGiftMessage: ei,
          } = (0, f.useGiftContext)(),
          el = (0, P.getGiftExperience)(es),
          eu = en && (0, P.shouldShowCustomGiftExperience)(es),
          { confirmUpsellEnabled: eo } = (0, d.default)({
            location: "PremiumSwitchPlanSelectBody",
          });
        (v = null != v ? v : $),
          i(void 0 !== (N = null != N ? N : q), "should not be undefined");
        let [ec, ed] = (0, l.useStateFromStoresArray)([I.default], () => [
            null != N ? I.default.get(N.planId) : null,
            null != j ? I.default.get(j) : null,
          ]),
          em = (0, y.usePremiumTrialOffer)(K),
          ef = null == em ? void 0 : em.subscription_trial,
          ep = (0, x.usePremiumDiscountOffer)(),
          e_ =
            null == ep
              ? void 0
              : null === (t = ep.discount) || void 0 === t
                ? void 0
                : t.plan_ids,
          eS = null != ed ? ed : ee,
          eI = r.useCallback(
            e => {
              null != G ? G(e) : Q(e);
            },
            [G, Q]
          ),
          eE = null != Y ? Y : et;
        i(null != eE, "Price option has to be set");
        let eP =
            null != em &&
            (0, F.SubscriptionTrials)[em.trial_id].skus.includes(v),
          eT =
            null != ep &&
            W.some(e => (null == e_ ? void 0 : e_.includes(e))) &&
            null != ep.discount,
          eN = (0, C.getPrice)(
            F.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            !1,
            en,
            eE
          );
        r.useEffect(() => {
          Z && h.default.trackExposure({ location: "5f89bb_1" });
        }, [Z]);
        let eC = (null == eS ? void 0 : eS.id) != null && W.includes(eS.id);
        r.useEffect(() => {
          if (!eC) {
            if (null == ec || en) eI(W[0]);
            else if (null != ec) {
              let e = W.find(e => e !== ec.id);
              null != e && eI(e);
            }
          }
        }, [eC, en, W, ec, eI]);
        let eA = !eu && (en || (!eP && !eT)) && eC && z,
          eh = (0, u.useRadioGroup)(),
          ev =
            (null == eS ? void 0 : eS.id) != null
              ? (0, C.getPrice)(eS.id, !1, en, eE)
              : void 0,
          { ipCountryCode: eg } = (0, g.default)(),
          ex = "HR" === eg && null != ev && ev.currency === w.CurrencyCodes.EUR,
          ey = (0, C.isPrepaidPaymentSource)(eE.paymentSourceId),
          eO =
            (null == ef ? void 0 : ef.interval) ===
            F.SubscriptionIntervalTypes.DAY
              ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD
              : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
          eM = !en && (eT || (null != ef && eP && null != V)),
          eR =
            null == J
              ? void 0
              : null ===
                    (_ = J.find(
                      e =>
                        e.subscriptionPlanId ===
                        F.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                    )) || void 0 === _
                ? void 0
                : null === (a = _.discounts) || void 0 === a
                  ? void 0
                  : null ===
                        (n = a.find(
                          e =>
                            e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
                        )) || void 0 === n
                    ? void 0
                    : n.amount;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: eu ? H.stepBodyCustomGift : H.stepBody,
            children: [
              (0, s.jsxs)("div", {
                className: eu ? H.bodyColumnMiddle : void 0,
                children: [
                  (0, s.jsx)(O.default, {
                    fromBoostCancelModal: !1,
                    className: H.legacyPricingNotice,
                  }),
                  eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {}),
                ],
              }),
              (0, s.jsxs)("div", {
                className: eu ? H.bodyColumnRight : void 0,
                children: [
                  (0, s.jsx)(U.SendGiftToUser, { giftRecipient: es }),
                  (() => {
                    if (
                      el === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != ei
                    )
                      return (0, s.jsx)(L.default, {
                        sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: e => ei(e),
                        pendingText: ea,
                        currentText: ea,
                      });
                  })(),
                  null != ec &&
                    !en &&
                    (0, s.jsx)("div", {
                      className: H.bodyText,
                      children: (function (e, t) {
                        let n =
                            k.default.Messages
                              .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                          s =
                            k.default.Messages
                              .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                          r = (() => {
                            switch (e.interval) {
                              case F.SubscriptionIntervalTypes.YEAR:
                                return n;
                              case F.SubscriptionIntervalTypes.MONTH:
                              default:
                                return s;
                            }
                          })(),
                          a = e.skuId;
                        switch (t) {
                          case F.PremiumSubscriptionSKUs.TIER_0:
                            switch (a) {
                              case F.PremiumSubscriptionSKUs.TIER_1:
                                return k.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                              case F.PremiumSubscriptionSKUs.TIER_2:
                                return k.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                              default:
                                return r;
                            }
                          case F.PremiumSubscriptionSKUs.TIER_1:
                            switch (a) {
                              case F.PremiumSubscriptionSKUs.TIER_0:
                                return k.default.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                              case F.PremiumSubscriptionSKUs.TIER_2:
                                return k.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                              default:
                                return r;
                            }
                          case F.PremiumSubscriptionSKUs.TIER_2:
                            switch (a) {
                              case F.PremiumSubscriptionSKUs.TIER_0:
                              case F.PremiumSubscriptionSKUs.TIER_1:
                                return k.default.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                              case F.PremiumSubscriptionSKUs.TIER_2:
                                return e.interval ===
                                  F.SubscriptionIntervalTypes.MONTH
                                  ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format(
                                      {
                                        numFreeGuildSubscriptions:
                                          F.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                      }
                                    )
                                  : r;
                              default:
                                return r;
                            }
                          default:
                            return r;
                        }
                      })(ec, v),
                    }),
                  ((S = eP),
                  (E = eT),
                  eu
                    ? (0, s.jsx)(u.FormTitle, {
                        children:
                          k.default.Messages.GIFT_SUBSCRIPTION_SELECTION,
                      })
                    : eM
                      ? S
                        ? (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                className: H.trialPlanSelectHeader,
                                children:
                                  k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format(
                                    { trialEnd: V, trialPeriod: eO }
                                  ),
                              }),
                              (0, s.jsx)("hr", {
                                className: H.planSelectSeparator,
                              }),
                            ],
                          })
                        : E && null != eR && null != eN
                          ? (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: H.trialPlanSelectHeader,
                                  children:
                                    k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format(
                                      {
                                        numMonths:
                                          null == ep
                                            ? void 0
                                            : ep.discount.user_usage_limit,
                                        discountedPrice: (0, A.formatPrice)(
                                          eN.amount - eR,
                                          eN.currency
                                        ),
                                        regularPrice: (0, A.formatPrice)(
                                          eN.amount,
                                          eN.currency
                                        ),
                                      }
                                    ),
                                }),
                                (0, s.jsx)("hr", {
                                  className: H.planSelectSeparator,
                                }),
                              ],
                            })
                          : void 0
                      : (0, s.jsx)("div", {
                          className: H.selectPlanChooseTitle,
                          children:
                            k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE,
                        })),
                  (0, s.jsx)("div", {
                    ...eh,
                    children: W.map(e =>
                      (0, s.jsx)(
                        D.default,
                        {
                          planId: e,
                          premiumSubscription: en ? null : null != N ? N : null,
                          selectPlan: eI,
                          selected: (null == eS ? void 0 : eS.id) === e,
                          priceOptions: eE,
                          shouldShowUpdatedPaymentModal: eM,
                          isEligibleForDiscount: eT,
                          discountAmountOff: eR,
                        },
                        e
                      )
                    ),
                  }),
                  (0, s.jsx)("div", {
                    children:
                      eA && null != eS && null != ev
                        ? (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("div", {
                                className: H.selectPlanDivider,
                              }),
                              (0, s.jsx)(M.PremiumInvoiceTableTotalRow, {
                                label:
                                  k.default.Messages
                                    .BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                value: (0, s.jsx)(R.default, {
                                  price: ev.amount,
                                  currency: ev.currency,
                                  intervalType: en ? null : eS.interval,
                                  intervalCount: eS.intervalCount,
                                  isPrepaidPaymentSource: ey,
                                }),
                                className: H.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  ex &&
                    (0, s.jsx)(o.default, {
                      message:
                        k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format(
                          {
                            kunaPriceWithCurrency: (0, A.formatPrice)(
                              7.5345 * ev.amount,
                              w.CurrencyCodes.HRK
                            ),
                          }
                        ),
                    }),
                  !en &&
                    !eM &&
                    z &&
                    (0, s.jsx)(o.default, {
                      message:
                        k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format(
                          {
                            documentationLink: T.default.getArticleURL(
                              B.HelpdeskArticles.LOCALIZED_PRICING
                            ),
                          }
                        ),
                    }),
                  eo && en && (0, s.jsx)(m.default, { onClose: X }),
                ],
              }),
            ],
          }),
        });
      }
      function W(e) {
        let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: a,
            showBackButton: i,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: c,
          } = e,
          { paymentSources: d, selectedPlan: m } = (0, p.usePaymentContext)(),
          { isGift: _ } = (0, f.useGiftContext)();
        return (
          (r = null != r ? r : d),
          (n = null != n ? n : null == m ? void 0 : m.id),
          (0, s.jsxs)(s.Fragment, {
            children: [
              null != n && l.includes(n)
                ? (0, s.jsx)(Z, {
                    paymentSources: r,
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: _,
                    shouldRenderUpdatedPaymentModal: o,
                    isTrial: c,
                  })
                : (0, s.jsx)(u.Button, {
                    disabled: !0,
                    children: k.default.Messages.SELECT,
                  }),
              i ? (0, s.jsx)(j.default, { onClick: a }) : null,
            ],
          })
        );
      }
      function Z(e) {
        let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: r,
            paymentSources: a,
            shouldRenderUpdatedPaymentModal: i,
            isTrial: o,
          } = e,
          c = (0, l.useStateFromStores)([E.default], () =>
            E.default.getPremiumTypeSubscription()
          ),
          { hasEntitlements: d } = (0, G.useSubscriptionEntitlements)(n, r),
          m =
            (null != c && null != c.paymentSourceId) ||
            Object.keys(a).length > 0 ||
            (d && !o);
        var f = i ? k.default.Messages.NEXT : k.default.Messages.SELECT,
          p = _.Step.ADD_PAYMENT_STEPS;
        return (
          m
            ? (p = _.Step.REVIEW)
            : (0, N.isDesktop)() &&
              (function () {
                let { experiment: e } = v.default.getCurrentConfig({
                  location: "5f89bb_2",
                });
                if (e === v.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                  let { enabled: e } = S.default.getCurrentConfig(
                    { location: "5f89bb_3" },
                    { autoTrackExposure: !0 }
                  );
                  return e;
                }
                return !1;
              })() &&
              ((p = _.Step.AWAITING_BROWSER_CHECKOUT),
              (f = k.default.Messages.CONTINUE_IN_BROWSER)),
          (0, s.jsx)(u.Button, { onClick: () => t(p), children: f })
        );
      }
    },
    26785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("627445"),
        l = n.n(i),
        u = n("446674"),
        o = n("669491"),
        c = n("77078"),
        d = n("635357"),
        m = n("915639"),
        f = n("10514"),
        p = n("659632"),
        _ = n("240481"),
        S = n("719923"),
        I = n("153160"),
        E = n("154889"),
        P = n("646718"),
        T = n("782340"),
        N = n("902839");
      function C(e) {
        var t;
        let {
            premiumSubscription: n,
            planId: r,
            selectPlan: i,
            selected: C,
            priceOptions: A,
            shouldShowUpdatedPaymentModal: h,
            isEligibleForDiscount: v,
            discountAmountOff: g,
          } = e,
          x = (0, u.useStateFromStores)([m.default], () => m.default.locale),
          y = (0, u.useStateFromStores)([f.default], () => f.default.get(r)),
          { isGift: O, giftRecipient: M } = (0, d.useGiftContext)(),
          R = O && (0, p.shouldShowCustomGiftExperience)(M);
        l(null != y, "Missing subscriptionPlan");
        let L = null != n && n.planId === r,
          b =
            L ||
            (r === P.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [
                P.SubscriptionPlans.PREMIUM_YEAR_TIER_0,
                P.SubscriptionPlans.PREMIUM_YEAR_TIER_1,
              ].includes(n.planId)),
          j = P.DISCOUNTS[r],
          G = (0, S.getPrice)(r, !1, O, A),
          D = (0, S.isPrepaidPaymentSource)(A.paymentSourceId),
          U = null != j && !h,
          F = (0, E.usePremiumDiscountOffer)(),
          B =
            y.interval === P.SubscriptionIntervalTypes.YEAR
              ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
              : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
          w = () =>
            null != j &&
            (0, s.jsx)(c.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: N.planOptionDiscount,
              children:
                T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                  discount: (0, _.formatPercent)(x, j / 100),
                }),
            }),
          k = () =>
            (y.interval === P.SubscriptionIntervalTypes.YEAR && null != n) ||
            (U && !L)
              ? y.interval === P.SubscriptionIntervalTypes.YEAR && null != n
                ? (0, s.jsxs)("span", {
                    className: N.planOptionMonthsFree,
                    children: [
                      "(",
                      T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
                      ")",
                    ],
                  })
                : U && !L
                  ? w()
                  : void 0
              : null;
        return (0, s.jsxs)(c.Clickable, {
          role: R ? "menuitem" : "radio",
          "aria-checked": C,
          tabIndex: C ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: b ? void 0 : () => i(r),
          className: a(N.planOptionClickableContainer, {
            [N.selectedPlan]: R && C,
            [N.selectionBox]: R,
          }),
          children: [
            (0, s.jsxs)("div", {
              className: a(N.planOption, { [N.planOptionDisabled]: b }),
              children: [
                (0, s.jsxs)("div", {
                  className: N.planOptionClickable,
                  children: [
                    !R &&
                      (0, s.jsx)(c.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: C,
                        shape: c.Checkbox.Shapes.ROUND,
                        color: o.default.unsafe_rawColors.BRAND_500.css,
                        type: c.Checkbox.Types.INVERTED,
                        className: N.planOptionCheckbox,
                      }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className: a(N.planOptionInterval, {
                            [N.optionSelected]: C || R,
                            [N.updatedOptionSelected]: h && (C || R),
                          }),
                          children: [
                            (0, S.getIntervalString)(
                              y.interval,
                              O,
                              D,
                              y.intervalCount,
                              R,
                              (0, S.getPremiumType)(y.id)
                            ),
                            R && k(),
                          ],
                        }),
                        R &&
                          (0, s.jsx)("div", {
                            className: N.planOneTimeCost,
                            children: T.default.Messages.ONE_TIME_CHARGE.format(
                              {
                                currencyAmount: (0, I.formatPrice)(
                                  G.amount,
                                  G.currency
                                ),
                              }
                            ),
                          }),
                      ],
                    }),
                    L &&
                      (0, s.jsxs)("span", {
                        className: N.planOptionCurrentPlan,
                        children: [
                          "(",
                          T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
                          ")",
                        ],
                      }),
                    !R && k(),
                  ],
                }),
                h
                  ? (0, s.jsx)("div", {
                      className: a({ [N.optionPriceSelected]: C }),
                      children:
                        T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                          price: (() => {
                            if (v && null != g)
                              return y.interval ===
                                P.SubscriptionIntervalTypes.MONTH
                                ? (0, I.formatPrice)(G.amount - g, G.currency)
                                : (0, I.formatPrice)(G.amount, G.currency);
                            return (0, I.formatPrice)(0, G.currency, {
                              maximumFractionDigits: 0,
                            });
                          })(),
                        }),
                    })
                  : (0, s.jsx)("div", {
                      className: a({ [N.optionSelected]: C || R }),
                      children: (0, I.formatPrice)(G.amount, G.currency),
                    }),
              ],
            }),
            h &&
              (0, s.jsx)("div", {
                className: N.planOptionSubtextContainer,
                children: (0, s.jsx)(c.Text, {
                  variant: "text-md/normal",
                  color: C ? "text-normal" : "interactive-normal",
                  className: a(N.planOptionSubtext, {
                    [N.discountPlanOptionSubtext]: v,
                  }),
                  children:
                    v && null != g
                      ? y.interval === P.SubscriptionIntervalTypes.MONTH
                        ? T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format(
                            {
                              numMonths:
                                null !==
                                  (t =
                                    null == F
                                      ? void 0
                                      : F.discount.user_usage_limit) &&
                                void 0 !== t
                                  ? t
                                  : P.DISCOUNT_DURATION_FALLBACK,
                              discountedPrice: (0, I.formatPrice)(
                                G.amount - g,
                                G.currency
                              ),
                              regularPrice: (0, I.formatPrice)(
                                G.amount,
                                G.currency
                              ),
                            }
                          )
                        : T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format(
                            { percent: j }
                          )
                      : B.format({
                          price: (0, I.formatPrice)(G.amount, G.currency),
                        }),
                }),
              }),
          ],
        });
      }
    },
    617223: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SendGiftToUser: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("87657"),
        i = n("158998"),
        l = n("782340"),
        u = n("995777");
      let o = e => {
        let { giftRecipient: t } = e;
        return null == t
          ? null
          : (0, s.jsxs)("div", {
              className: u.content,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  children: l.default.Messages.FORM_LABEL_SEND_TO,
                }),
                (0, s.jsxs)("div", {
                  className: u.giftRecipientInfo,
                  children: [
                    (0, s.jsx)(a.default, {
                      user: t,
                      className: u.giftRecipient,
                      size: r.AvatarSizes.SIZE_20,
                    }),
                    (0, s.jsx)(r.Heading, {
                      className: u.giftRecipientName,
                      variant: "text-md/normal",
                      children: i.default.getName(t),
                    }),
                    (0, s.jsx)(r.Heading, {
                      className: u.giftRecipientTag,
                      variant: "text-md/normal",
                      children: i.default.getUserTag(t),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    527866: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Y;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("976979"),
        u = n("446674"),
        o = n("669491"),
        c = n("77078"),
        d = n("335430"),
        m = n("703332"),
        f = n("740055"),
        p = n("545876"),
        _ = n("736978"),
        S = n("635357"),
        I = n("642906"),
        E = n("286350"),
        P = n("102492"),
        T = n("176108"),
        N = n("102985"),
        C = n("160299"),
        A = n("10514"),
        h = n("68238"),
        v = n("659632"),
        g = n("719923"),
        x = n("153160"),
        y = n("210721"),
        O = n("809071"),
        M = n("154889"),
        R = n("883662"),
        L = n("623003"),
        b = n("65324"),
        j = n("570727"),
        G = n("146163"),
        D = n("661128"),
        U = n("617223"),
        F = n("646718"),
        B = n("49111"),
        w = n("843455"),
        k = n("782340"),
        H = n("193692");
      function Y(e) {
        var t, n, a;
        let Y,
          W,
          {
            selectedPlanId: Z,
            paymentSources: K,
            priceOptions: V,
            currencies: z,
            onCurrencyChange: J,
            onPaymentSourceChange: X,
            handlePaymentSourceAdd: q,
            setHasAcceptedTerms: Q,
            legalTermsNodeRef: $,
            hasLegalTermsFlash: ee,
            trialId: et,
            trialFooterMessageOverride: en,
            reviewWarningMessage: es,
            metadata: er,
            purchaseState: ea,
            hideSubscriptionDetails: ei,
            referralTrialOfferId: el,
            isTrial: eu = !1,
            isDiscount: eo = !1,
            handleClose: ec,
          } = e,
          {
            isEmbeddedIAP: ed,
            activeSubscription: em,
            selectedSkuId: ef,
            defaultPlanId: ep,
            isPremium: e_,
            startedPaymentFlowWithPaymentSourcesRef: eS,
          } = (0, I.usePaymentContext)(),
          {
            isGift: eI,
            giftRecipient: eE,
            selectedGiftStyle: eP,
          } = (0, S.useGiftContext)(),
          eT = (0, M.usePremiumDiscountOffer)(),
          eN =
            null == eT
              ? void 0
              : null === (t = eT.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some(e => F.SubscriptionPlanInfo[e].skuId === ef),
          eC = !eI && null != eT && null != ef && eN,
          eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
        i(null != eA, "Missing plan");
        let eh = [{ planId: eA.id, quantity: 1 }],
          ev =
            ea === E.PurchaseState.PURCHASING ||
            ea === E.PurchaseState.COMPLETED,
          eg = eI || ev,
          [ex, ey] = (0, O.useSubscriptionInvoicePreview)({
            items: eh,
            renewal: !1,
            preventFetch: eg,
            applyEntitlements: !0,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            trialId: et,
            metadata: er,
          }),
          [eO, eM] = (0, O.useSubscriptionInvoicePreview)({
            items: eh,
            renewal: !0,
            preventFetch: eg,
            trialId: et,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            metadata: er,
          }),
          [eR, eL] = (0, O.useSubscriptionInvoicePreview)({
            items: [
              { planId: F.SubscriptionPlans.PREMIUM_MONTH_TIER_2, quantity: 1 },
            ],
            renewal: !0,
            preventFetch: !eC,
            trialId: et,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            metadata: er,
          }),
          [eb, ej] = (0, O.useOneTimePurchaseInvoicePreview)({
            paymentSourceId: V.paymentSourceId,
            skuId: ef,
            subscriptionPlanId: Z,
            preventFetch: !eI || ev,
          }),
          eG = eI && (0, v.shouldShowCustomGiftExperience)(eE),
          eD = null !== (a = null != ey ? ey : eM) && void 0 !== a ? a : eL,
          eU = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
          eF = V.paymentSourceId,
          { hasEntitlements: eB, entitlements: ew } = (0,
          D.useSubscriptionEntitlements)(eA.id, eI),
          ek = (0, g.isPrepaidPaymentSource)(V.paymentSourceId),
          eH = (0, P.checkNoPaymentTrialEnabled)(et, eF, Z),
          eY = (0, T.inOneStepSubscriptionCheckout)({
            isTrial: eu,
            isGift: eI,
            selectedSkuId: ef,
            startedPaymentFlowWithPaymentSources: eS.current,
          }),
          [eW, eZ] = r.useState(null == ex ? void 0 : ex.subscriptionPeriodEnd);
        r.useEffect(() => {
          null == eW && eZ(null == ex ? void 0 : ex.subscriptionPeriodEnd);
        }, [null == ex ? void 0 : ex.subscriptionPeriodEnd, eW]);
        let eK = r.useMemo(
            () =>
              (0, g.getPremiumPlanOptions)({
                skuId: ef,
                isPremium: e_,
                multiMonthPlans: [],
                currentSubscription: em,
                isGift: eI,
                isEligibleForTrial: eu,
                defaultPlanId: ep,
                defaultToMonthlyPlan: !1,
              }),
            [ef, em, eI, ep, e_, eu]
          ),
          eV = (0, T.planSwitchLoadingShowSpinner)(eY, ex, eA);
        if (null != eD) {
          let e = eD.message;
          return (
            eD.code === _.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE &&
              (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY),
            (0, s.jsx)(c.FormErrorBlock, { children: e })
          );
        }
        if (eI)
          W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
            plan: eA,
            className: H.invoice,
            isPrepaidPaymentSource: ek,
            isCustomGift: eG,
            invoicePreview: eb,
            priceOptions: V,
          });
        else if (eu && null != ex)
          W = (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(R.PremiumInvoiceTableDivider, {
                negativeMarginTop: !0,
              }),
              (0, s.jsxs)(R.PremiumInvoiceTable, {
                className: H.invoice,
                children: [
                  (0, s.jsxs)("div", {
                    className: H.trialPriceLine,
                    children: [
                      (0, s.jsx)(c.Text, {
                        variant: "text-md/bold",
                        children:
                          k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                      }),
                      (0, s.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children:
                          k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                            price: (0, x.formatPrice)(0, ex.currency, {
                              maximumFractionDigits: 0,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: H.afterTrialPriceLine,
                    children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
                      invoice: ex,
                      plan: eA,
                    }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == ex || null == eO || eV)
            return (0, s.jsx)("div", {
              className: H.spinnerWrapper,
              children: (0, s.jsx)(c.Spinner, {}),
            });
          eu &&
            ex.subscriptionPeriodEnd !== eO.subscriptionPeriodEnd &&
            (Y = ex.subscriptionPeriodEnd),
            (W = (0, s.jsxs)(R.PremiumInvoiceTable, {
              className: H.invoice,
              children: [
                (0, s.jsx)(R.PremiumInvoiceTableHeader, {
                  children:
                    k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                  invoice: ex,
                  newPlan: eA,
                  isPrepaidPaymentSource: ek,
                  referralTrialOfferId: el,
                }),
                ek
                  ? null
                  : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
                      renewalInvoice: eO,
                      isTrial: eu,
                      priceOptions: V,
                      overrideRenewalDate: Y,
                      trialFooterMessageOverride: en,
                      hideSubscriptionDetails: ei,
                    }),
              ],
            }));
        }
        let ez = l.CountryCodesSets.EEA_COUNTRIES.has(
            C.default.ipCountryCodeWithFallback
          ),
          {
            checkboxLabel: eJ,
            checkboxClassname: eX,
            checkboxLabelClassname: eq,
          } = (function (e, t, n) {
            let s = null,
              r = null,
              a = null;
            if (e && null != t) {
              let { intervalType: e, intervalCount: i } =
                  g.default.getIntervalForInvoice(t),
                l = (0, x.formatRate)(
                  (0, x.formatPrice)(t.total, t.currency),
                  e,
                  i
                ),
                u = null != n ? n : t.subscriptionPeriodEnd;
              (s =
                k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format(
                  {
                    termsURL: B.MarketingURLs.TERMS,
                    paidURL: B.MarketingURLs.PAID_TERMS,
                    rate: l,
                    renewalDate: u,
                  }
                )),
                (r = H.trialCheckbox),
                (a = H.trialCheckboxLabel);
            }
            return {
              checkboxLabel: s,
              checkboxClassname: r,
              checkboxLabelClassname: a,
            };
          })(null != eu && eu, eO, Y),
          eQ = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format(
            { planName: eA.name }
          );
        return (
          eI && !eG
            ? (eQ = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT)
            : eI && eG
              ? (eQ = "")
              : (0, g.isPremiumSubscriptionPlan)(eA.id) &&
                (eQ = g.default.getBillingReviewSubheader(null, eA)),
          eH
            ? null
            : (0, s.jsxs)("div", {
                className: H.stepBody,
                children: [
                  null != es &&
                    (0, s.jsxs)("div", {
                      className: H.reviewWarningMessageContainer,
                      children: [
                        (0, s.jsx)(h.default, {
                          color: o.default.unsafe_rawColors.YELLOW_300.css,
                          width: 20,
                          height: 20,
                        }),
                        (0, s.jsx)(c.Text, {
                          className: H.reviewWarningMessage,
                          variant: "text-sm/normal",
                          children: es,
                        }),
                      ],
                    }),
                  eY &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)(R.PremiumInvoiceTableDivider, {
                          negativeMarginTop: !0,
                          negativeMarginBottom: !0,
                        }),
                        (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
                          planOptions: eK,
                          eligibleForMultiMonthPlans: !1,
                          referralTrialOfferId: void 0,
                          selectedPlanId: Z,
                          subscriptionPeriodEnd: eW,
                          showTotal: !1,
                          discountInvoiceItems: eC
                            ? null == eR
                              ? void 0
                              : eR.invoiceItems
                            : void 0,
                          handleClose: ec,
                        }),
                        (0, s.jsx)(R.PremiumInvoiceTableDivider, {}),
                      ],
                    }),
                  !eu &&
                    (0, s.jsx)(c.FormTitle, {
                      tag: c.FormTitleTags.H5,
                      children: eQ,
                    }),
                  eG &&
                    null != eP &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(b.default, {
                          defaultAnimationState: y.AnimationState.LOOP,
                          giftStyle: eP,
                          shouldAnimate: !0,
                          className: H.giftMainAnimation,
                        }),
                        (0, s.jsx)(U.SendGiftToUser, { giftRecipient: eE }),
                      ],
                    }),
                  W,
                  (0, s.jsxs)("div", {
                    className: H.paymentSourceWrapper,
                    children: [
                      eu
                        ? (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children:
                              k.default.Messages.BILLING_STEP_PAYMENT_METHOD,
                          })
                        : (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children:
                              k.default.Messages
                                .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                          }),
                      (0, s.jsx)(f.default, {
                        paymentSources: Object.values(K),
                        selectedPaymentSourceId: eF,
                        prependOption:
                          eB && !eu
                            ? {
                                label:
                                  k.default.Messages
                                    .ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null,
                              }
                            : null,
                        onChange: X,
                        onPaymentSourceAdd: q,
                        hidePersonalInformation: eU,
                        isTrial: eu,
                      }),
                      eB && null == eF
                        ? (0, s.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children:
                              k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format(
                                { months: ew.length }
                              ),
                          })
                        : null,
                      eo
                        ? null
                        : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: H.currencyWrapper,
                            children: [
                              (0, s.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY,
                              }),
                              (0, s.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: z,
                                onChange: J,
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, s.jsx)(L.default, {
                    isActive: ee,
                    ref: $,
                    children: (0, s.jsx)(p.default, {
                      onChange: Q,
                      forceShow: !0,
                      checkboxLabel: eJ,
                      checkboxClassname: eX,
                      checkboxLabelClassname: eq,
                      finePrint:
                        null != en
                          ? en
                          : (0, s.jsx)(m.default, {
                              hide: eu || eo,
                              subscriptionPlan: eA,
                              renewalInvoice: eO,
                              isGift: eI,
                              paymentSourceType:
                                null === (n = K[null != eF ? eF : ""]) ||
                                void 0 === n
                                  ? void 0
                                  : n.type,
                              isEmbeddedIAP: ed,
                              basePrice: (0, g.getPrice)(eA.id, !1, eI, V),
                            }),
                      showPricingLink: eA.currency !== w.CurrencyCodes.USD,
                      showWithdrawalWaiver: ez,
                      disabled: ev,
                      isTrial: eu && null == en,
                      isDiscount: eo,
                      subscriptionPlan: eA,
                      isGift: eI,
                    }),
                  }),
                ],
              })
        );
      }
    },
    826795: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("976979"),
        u = n("446674"),
        o = n("77078"),
        c = n("335430"),
        d = n("703332"),
        m = n("740055"),
        f = n("545876"),
        p = n("812204"),
        _ = n("685665"),
        S = n("635357"),
        I = n("642906"),
        E = n("286350"),
        P = n("176108"),
        T = n("102985"),
        N = n("160299"),
        C = n("10514"),
        A = n("719923"),
        h = n("380186"),
        v = n("809071"),
        g = n("883662"),
        x = n("991329"),
        y = n("623003"),
        O = n("570727"),
        M = n("146163"),
        R = n("49111"),
        L = n("782340"),
        b = n("88613"),
        j = n("193692");
      function G(e) {
        var t;
        let n,
          {
            premiumSubscription: a,
            paymentSources: p,
            priceOptions: _,
            onPaymentSourceChange: v,
            onPaymentSourceAdd: x,
            planId: M,
            setHasAcceptedTerms: b,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: w,
            onInvoiceError: k,
            planGroup: H,
            currencies: Y,
            onCurrencyChange: W,
            hasOpenInvoice: Z,
            purchaseState: K,
            handleClose: V,
          } = e,
          {
            selectedSkuId: z,
            defaultPlanId: J,
            isPremium: X,
            startedPaymentFlowWithPaymentSourcesRef: q,
          } = (0, I.usePaymentContext)(),
          { isGift: Q } = (0, S.useGiftContext)(),
          $ = _.paymentSourceId,
          ee = (0, u.useStateFromStores)([C.default], () => C.default.get(M));
        i(null != ee, "Missing newPlan");
        let et = (0, u.useStateFromStores)(
          [T.default],
          () => T.default.hidePersonalInformation
        );
        n = Z
          ? L.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
          : (0, A.isPremiumSubscriptionPlan)(M)
            ? (0, A.getBillingReviewSubheader)(a, ee)
            : L.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                planName: ee.name,
              });
        let en = l.CountryCodesSets.EEA_COUNTRIES.has(
            N.default.ipCountryCodeWithFallback
          ),
          es =
            K === E.PurchaseState.PURCHASING || K === E.PurchaseState.COMPLETED,
          er = (0, P.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: Q,
            selectedSkuId: z,
            startedPaymentFlowWithPaymentSources: q.current,
          }),
          ea = r.useMemo(
            () =>
              (0, A.getPremiumPlanOptions)({
                skuId: z,
                isPremium: X,
                multiMonthPlans: [],
                currentSubscription: a,
                isGift: Q,
                isEligibleForTrial: !1,
                defaultPlanId: J,
                defaultToMonthlyPlan: !1,
              }),
            [z, a, J, X, Q]
          );
        return (0, s.jsxs)("div", {
          className: j.stepBody,
          children: [
            er &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(g.PremiumInvoiceTableDivider, {
                    negativeMarginBottom: !0,
                    negativeMarginTop: !0,
                  }),
                  (0, s.jsx)(O.PremiumSwitchPlanSelectBody, {
                    planOptions: ea,
                    eligibleForMultiMonthPlans: !1,
                    selectedPlanId: M,
                    showTotal: !1,
                    handleClose: V,
                  }),
                  (0, s.jsx)(g.PremiumInvoiceTableDivider, {}),
                ],
              }),
            (0, s.jsx)(o.FormTitle, { tag: o.FormTitleTags.H5, children: n }),
            null != a
              ? Z
                ? (0, s.jsx)(D, {
                    premiumSubscription: a,
                    onInvoiceError: k,
                    priceOptions: _,
                    preventFetch: !1,
                  })
                : (0, h.subscriptionCanSwitchImmediately)(a, M, H)
                  ? (0, s.jsx)(U, {
                      premiumSubscription: a,
                      newPlan: ee,
                      onInvoiceError: k,
                      planGroup: H,
                      priceOptions: _,
                      preventFetch: es,
                    })
                  : (0, s.jsx)(B, {
                      premiumSubscription: a,
                      newPlan: ee,
                      planGroup: H,
                      priceOptions: _,
                      preventFetch: es,
                    })
              : null,
            (0, s.jsxs)("div", {
              className: j.paymentSourceWrapper,
              children: [
                (0, s.jsx)(o.FormTitle, {
                  tag: o.FormTitleTags.H5,
                  children:
                    L.default.Messages
                      .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                (0, s.jsx)(m.default, {
                  paymentSources: Object.values(p),
                  selectedPaymentSourceId: $,
                  onChange: v,
                  onPaymentSourceAdd: x,
                  hidePersonalInformation: et,
                  disabled: es,
                }),
              ],
            }),
            (0, s.jsxs)(c.CurrencyWrapper, {
              currencies: Y,
              className: j.currencyWrapper,
              children: [
                (0, s.jsx)(o.FormTitle, {
                  tag: o.FormTitleTags.H5,
                  children: L.default.Messages.PAYMENT_CURRENCY,
                }),
                (0, s.jsx)(c.default, {
                  selectedCurrency: _.currency,
                  currencies: Y,
                  onChange: W,
                  disabled: es,
                }),
              ],
            }),
            (0, s.jsx)(y.default, {
              isActive: w,
              ref: G,
              children:
                null != a && (0, h.subscriptionCanSwitchImmediately)(a, M, H)
                  ? (0, s.jsx)(F, {
                      premiumSubscription: a,
                      newPlan: ee,
                      onInvoiceError: k,
                      planGroup: H,
                      priceOptions: _,
                      preventFetch: es,
                      disabled: es,
                      isEEA: en,
                      paymentSources: p,
                      setHasAcceptedTerms: b,
                    })
                  : (0, s.jsx)(f.default, {
                      onChange: b,
                      finePrint: (0, s.jsx)(d.default, {
                        subscriptionPlan: ee,
                        paymentSourceType:
                          null === (t = p[null != $ ? $ : ""]) || void 0 === t
                            ? void 0
                            : t.type,
                        basePrice: (0, A.getPrice)(ee.id, !1, Q, _),
                        currentSubscription: a,
                        planGroup: H,
                      }),
                      forceShow: !0,
                      showPricingLink: ee.currency !== R.CurrencyCodes.USD,
                      showWithdrawalWaiver: en,
                      disabled: es,
                      subscriptionPlan: ee,
                      currentSubscription: a,
                      planGroup: H,
                    }),
            }),
          ],
        });
      }
      function D(e) {
        let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: a,
            preventFetch: i,
          } = e,
          [l, u] = (0, v.useGetSubscriptionInvoice)({
            subscriptionId: t.id,
            preventFetch: i,
          });
        r.useEffect(() => {
          n(u);
        }, [n, u]);
        let c = (0, A.isPrepaidPaymentSource)(a.paymentSourceId);
        return null != l
          ? (0, s.jsxs)(g.PremiumInvoiceTable, {
              className: b.invoice,
              children: [
                (0, s.jsx)(M.PremiumSubscriptionCurrentInvoiceRows, {
                  invoice: l,
                  isPrepaidPaymentSource: c,
                }),
                (0, s.jsx)(M.SubscriptionInvoiceFooter, {
                  premiumSubscription: t,
                  renewalInvoice: l,
                  isUpdate: !0,
                  isPrepaidPaymentSource: c,
                }),
              ],
            })
          : (0, s.jsx)(o.Spinner, {});
      }
      function U(e) {
        let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: a,
            planGroup: i,
            priceOptions: l,
            preventFetch: u,
          } = e,
          { selectedSkuId: c, startedPaymentFlowWithPaymentSourcesRef: d } = (0,
          I.usePaymentContext)(),
          { isGift: m } = (0, S.useGiftContext)(),
          { analyticsLocations: f } = (0, _.default)(),
          E = (0, A.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(i)),
          [T, N] = (0, v.useSubscriptionInvoicePreview)({
            subscriptionId: t.id,
            items: E,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: f,
            analyticsLocation:
              p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
          }),
          [C, h] = (0, v.useSubscriptionInvoicePreview)({
            subscriptionId: t.id,
            items: E,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: f,
            analyticsLocation:
              p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          }),
          x = null != N ? N : h;
        if (
          (r.useEffect(() => {
            a(x);
          }, [a, x]),
          null != x)
        )
          return (0, s.jsx)(o.FormErrorBlock, { children: x.message });
        let y = (0, P.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: c,
            startedPaymentFlowWithPaymentSources: d.current,
          }),
          O = (0, P.planSwitchLoadingShowSpinner)(y, T, n);
        if (null == T || null == C || O)
          return (0, s.jsx)(o.Spinner, { className: j.spinner });
        let R = (0, A.isPrepaidPaymentSource)(l.paymentSourceId);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(M.SubscriptionPeriodResetNotice, {
              proratedInvoice: T,
              renewalInvoice: C,
            }),
            (0, s.jsxs)(g.PremiumInvoiceTable, {
              className: j.invoice,
              children: [
                (0, s.jsx)(g.PremiumInvoiceTableHeader, {
                  children:
                    L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, s.jsx)(M.PremiumSubscriptionChangePlanInvoiceRows, {
                  invoice: T,
                  newPlan: n,
                  isPrepaidPaymentSource: R,
                }),
                (0, s.jsx)(M.SubscriptionInvoiceFooter, {
                  premiumSubscription: t,
                  proratedInvoice: T,
                  renewalInvoice: C,
                  isUpdate: !0,
                  isPrepaidPaymentSource: R,
                }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        var t, n;
        let a,
          {
            premiumSubscription: i,
            newPlan: l,
            onInvoiceError: u,
            planGroup: c,
            priceOptions: m,
            preventFetch: S,
            disabled: I,
            isEEA: E,
            paymentSources: P,
            setHasAcceptedTerms: T,
          } = e,
          { analyticsLocations: N } = (0, _.default)(),
          C = (0, A.getItemsWithUpsertedPlanIdForGroup)(i, l.id, 1, new Set(c)),
          [h, g] = (0, v.useSubscriptionInvoicePreview)({
            subscriptionId: i.id,
            items: C,
            renewal: !0,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
            preventFetch: S,
            analyticsLocations: N,
            analyticsLocation:
              p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (r.useEffect(() => {
          u(g);
        }, [u, g]),
        null != g)
          ? (0, s.jsx)(o.FormErrorBlock, { children: g.message })
          : (null != h &&
                (a = {
                  amount: h.total,
                  currency: h.currency,
                  tax: h.tax,
                  taxInclusive: h.taxInclusive,
                }),
              null == a)
            ? null
            : (0, s.jsx)(f.default, {
                onChange: T,
                finePrint: (0, s.jsx)(d.default, {
                  subscriptionPlan: l,
                  paymentSourceType:
                    null ===
                      (t =
                        P[
                          null !== (n = m.paymentSourceId) && void 0 !== n
                            ? n
                            : ""
                        ]) || void 0 === t
                      ? void 0
                      : t.type,
                  basePrice: a,
                  currentSubscription: i,
                  planGroup: c,
                }),
                forceShow: !0,
                showPricingLink: l.currency !== R.CurrencyCodes.USD,
                showWithdrawalWaiver: E,
                disabled: I,
                subscriptionPlan: l,
                currentSubscription: i,
                planGroup: c,
              });
      }
      function B(e) {
        let t,
          {
            premiumSubscription: n,
            newPlan: r,
            planGroup: a,
            priceOptions: i,
            preventFetch: l,
          } = e,
          { analyticsLocations: u } = (0, _.default)(),
          [c, d] = (0, v.useSubscriptionInvoicePreview)({
            subscriptionId: n.id,
            items: (0, A.getItemsWithUpsertedPlanIdForGroup)(
              n,
              r.id,
              1,
              new Set(a)
            ),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: i.paymentSourceId,
            currency: i.currency,
            preventFetch: l,
            analyticsLocations: u,
            analyticsLocation:
              "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
          });
        if (null != d)
          return (0, s.jsx)(o.FormErrorBlock, { children: d.message });
        if (null == c)
          return (0, s.jsx)("div", { children: (0, s.jsx)(o.Spinner, {}) });
        t =
          n.type === R.SubscriptionTypes.PREMIUM
            ? (0, A.getDisplayName)(r.id)
            : r.name;
        let m = (0, A.isPrepaidPaymentSource)(i.paymentSourceId);
        return (0, s.jsxs)("div", {
          className: j.bodyText,
          children: [
            (0, s.jsx)("div", {
              className: b.renewalInvoiceDate,
              children:
                L.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                  renewalDate: c.subscriptionPeriodStart,
                }),
            }),
            (0, s.jsxs)(g.PremiumInvoiceTable, {
              className: j.invoice,
              children: [
                (0, s.jsx)(g.PremiumInvoiceTableHeader, {
                  children: L.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                }),
                (0, s.jsx)(g.PremiumInvoiceTableRow, {
                  label: t,
                  value: (0, A.getFormattedRateForPlan)(r, i, !0),
                }),
                (0, s.jsx)(x.default, { invoice: c }),
                (0, s.jsx)(g.PremiumInvoiceTableDivider, {}),
                (0, s.jsx)(M.SubscriptionInvoiceFooter, {
                  premiumSubscription: n,
                  renewalInvoice: c,
                  isUpdate: !0,
                  isPrepaidPaymentSource: m,
                }),
              ],
            }),
          ],
        });
      }
    },
    891653: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("77078"),
        l = n("216422"),
        u = n("782340"),
        o = n("321562");
      function c(e) {
        let {
          text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
          className: n,
        } = e;
        return (0, s.jsx)(i.Tooltip, {
          text: t,
          children: e =>
            (0, s.jsx)(i.Clickable, {
              ...e,
              children: (0, s.jsx)(l.default, {
                className: a(o.nitroWheel, n),
              }),
            }),
        });
      }
    },
    570697: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("781738");
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("77078"),
        l = n("254490"),
        u = n("891653"),
        o = n("632892"),
        c = n("881049");
      function d(e) {
        let { errors: t } = e;
        return (0, s.jsx)(s.Fragment, {
          children: t.map((e, t) =>
            (0, s.jsx)(
              i.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: c.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, e => {
                  let t = 1024 * parseInt(e, 10);
                  return isNaN(t) ? e : (0, l.sizeString)(t);
                }),
              },
              t
            )
          ),
        });
      }
      function m(e) {
        let {
          title: t,
          titleIcon: n,
          titleId: r,
          description: l,
          children: m,
          className: f,
          errors: p,
          disabled: _ = !1,
          hideDivider: S = !1,
          showBorder: I = !1,
          borderType: E,
          hasBackground: P = !1,
          forcedDivider: T = !1,
          showPremiumIcon: N = !1,
        } = e;
        return (0, s.jsx)("div", {
          className: a(c.customizationSection, f, {
            [c.disabled]: _,
            [c.hideDivider]: S,
            [c.showBorder]: I,
            [c.withDivider]: T,
          }),
          children: (0, s.jsxs)(o.default, {
            className: c.customizationSectionBorder,
            backgroundClassName: c.customizationSectionBackground,
            isShown: I,
            type: E,
            hasBackground: P,
            children: [
              (0, s.jsxs)(i.FormTitle, {
                className: c.title,
                id: r,
                children: [t, N && (0, s.jsx)(u.default, {}), n],
              }),
              null != l
                ? (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: c.sectionDescription,
                    children: l,
                  })
                : null,
              m,
              null != p && (0, s.jsx)(d, { errors: p }),
            ],
          }),
        });
      }
    },
    632892: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FeatureBorderTypes: function () {
            return r;
          },
          default: function () {
            return d;
          },
        });
      var s,
        r,
        a = n("37983"),
        i = n("884691"),
        l = n("414456"),
        u = n.n(l),
        o = n("834832");
      ((s = r || (r = {})).PREMIUM = "premium"), (s.LIMITED = "limited");
      let c = {
        premium: {
          border: o.premiumFeatureBorder,
          background: o.premiumBackground,
        },
        limited: {
          border: o.limitedFeatureBorder,
          background: o.limitedBackground,
        },
      };
      var d = i.forwardRef(function (e, t) {
        let {
          children: n,
          type: s = "premium",
          isShown: r,
          hasBackground: i = !1,
          className: l,
          backgroundClassName: d,
        } = e;
        if (!r) return (0, a.jsx)(a.Fragment, { children: n });
        let { border: m, background: f } = c[s];
        return (0, a.jsx)("div", {
          ref: t,
          className: u(m, l),
          children: (0, a.jsx)("div", {
            className: u(i ? f : o.background, d),
            children: n,
          }),
        });
      });
    },
    742926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("669491"),
        i = n("292915"),
        l = n("77078"),
        u = n("389480"),
        o = n("191191"),
        c = n("782340"),
        d = n("969242");
      let m = [54, 8, 8, 8];
      function f(e) {
        let { onSelect: t, sound: n } = e,
          [f, p] = r.useState(!1);
        function _(e) {
          p(!1), null == t || t(e);
        }
        let S = e =>
          (0, s.jsxs)("div", {
            className: d.customGiftHeader,
            children: [
              (0, s.jsxs)("div", {
                className: d.customGiftHeaderText,
                children: [
                  (0, s.jsx)(l.Text, {
                    variant: "text-md/bold",
                    children: c.default.Messages.GIFT_SELECT_SOUND,
                  }),
                  (0, s.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children:
                      c.default.Messages
                        .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: d.searchAndSound, children: e }),
            ],
          });
        return (0, s.jsx)(l.Popout, {
          shouldShow: f,
          position: "bottom",
          align: "left",
          onRequestClose: () => p(!1),
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, s.jsx)(l.Dialog, {
              children: (0, s.jsx)(o.default, {
                suppressPlaySound: !0,
                shouldShowUpsell: !1,
                guildId: null,
                channel: null,
                onClose: t,
                onSelect: _,
                analyticsSource: "gift soundboard",
                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                listPadding: m,
                renderHeader: S,
                defaultSoundsOnly: !0,
              }),
            });
          },
          children: () =>
            (0, s.jsx)(l.Clickable, {
              className: d.sound,
              onClick: () => p(!0),
              children:
                null == n
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(i.SoundboardIcon, {
                          color: a.default.colors.WHITE,
                          className: d.soundIcon,
                          width: 14,
                          height: 14,
                        }),
                        (0, s.jsx)(l.Text, {
                          className: d.text,
                          variant: "text-sm/semibold",
                          children: c.default.Messages.GIFT_SELECT_SOUND,
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(l.Text, {
                          className: d.textSelected,
                          variant: "text-sm/semibold",
                          children: n.emojiName,
                        }),
                        (0, s.jsx)(l.Text, {
                          className: d.text,
                          variant: "text-sm/semibold",
                          children: n.name,
                        }),
                      ],
                    }),
            }),
        });
      }
      function p(e) {
        let { sound: t, onSelect: n } = e;
        return (0, s.jsx)("div", {
          className: d.container,
          children: (0, s.jsx)(f, { onSelect: n, sound: t }),
        });
      }
    },
    971427: function (e, t, n) {
      "use strict";
      let s;
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("424973");
      var r = n("446674"),
        a = n("913144");
      let i = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class l extends r.default.PersistedStore {
        initialize(e) {
          s = null != e ? e : i;
        }
        getState() {
          return s;
        }
        get hasAcceptedStoreTerms() {
          return s.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return s.hasAcceptedEulaIds.includes(e);
        }
      }
      (l.displayName = "ApplicationStoreUserSettingsStore"),
        (l.persistKey = "ApplicationStoreUserSettingsStore"),
        (l.migrations = [
          e =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]);
      var u = new l(a.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          s.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
          let { eulaId: t } = e;
          if (s.hasAcceptedEulaIds.includes(t)) return !1;
          s.hasAcceptedEulaIds.push(t);
        },
      });
    },
    834179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("763377"),
        i = n("75196"),
        l = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...l
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, i.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: a,
                fill: r,
                d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z",
              }),
            });
          },
          a.CircleQuestionIcon,
          void 0,
          { size: 24 }
        );
    },
    315585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("75196");
      function a(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: a = "currentColor",
          foreground: i,
          ...l
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, r.default)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, s.jsx)("path", {
            className: i,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    575209: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getCurrencyFullName: function () {
            return r;
          },
        });
      var s = n("782340");
      function r(e) {
        switch (e) {
          case "brl":
            return s.default.Messages.BRL_NAME;
          case "pln":
            return s.default.Messages.PLN_NAME;
          case "try":
            return s.default.Messages.TRY_NAME;
          case "usd":
            return s.default.Messages.USD_NAME;
          case "aud":
            return s.default.Messages.AUD_NAME;
          case "pen":
            return s.default.Messages.PEN_NAME;
          case "php":
            return s.default.Messages.PHP_NAME;
          case "ars":
            return s.default.Messages.ARS_NAME;
          case "cop":
            return s.default.Messages.COP_NAME;
          case "clr":
            return s.default.Messages.CLR_NAME;
          case "jpy":
            return s.default.Messages.JPY_NAME;
          case "idr":
            return s.default.Messages.IDR_NAME;
          case "vnd":
            return s.default.Messages.VND_NAME;
          case "thb":
            return s.default.Messages.THB_NAME;
          case "myr":
            return s.default.Messages.MYR_NAME;
          case "krw":
            return s.default.Messages.KRW_NAME;
          case "mxn":
            return s.default.Messages.MXN_NAME;
          case "bgn":
            return s.default.Messages.BGN_NAME;
          case "czk":
            return s.default.Messages.CZK_NAME;
          case "dkk":
            return s.default.Messages.DKK_NAME;
          case "huf":
            return s.default.Messages.HUF_NAME;
          case "ron":
            return s.default.Messages.RON_NAME;
          case "sek":
            return s.default.Messages.SEK_NAME;
          case "eur":
            return s.default.Messages.EUR_NAME;
          default:
            return "";
        }
      }
    },
    696597: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShopIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
              className: l,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
              className: l,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=31835.83b67aa257c0f24449ef.js.map
