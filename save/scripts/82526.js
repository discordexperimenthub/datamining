(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82526"],
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
    335430: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CurrencyWrapper: function () {
            return l;
          },
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("575209");
      function l(e) {
        let { currencies: t, className: n, children: r } = e;
        return t.length < 2
          ? null
          : (0, s.jsx)("div", { className: n, children: r });
      }
      var i = function (e) {
        let {
          currencies: t,
          onChange: n,
          selectedCurrency: l,
          className: i,
          disabled: u = !1,
        } = e;
        if (t.length < 2) return null;
        let c = t.map((e, t) => ({
          key: t,
          value: e,
          label: ""
            .concat(e.toUpperCase(), " - ")
            .concat((0, a.getCurrencyFullName)(e)),
        }));
        return (0, s.jsx)(r.SingleSelect, {
          value: l,
          options: c,
          onChange: e => {
            null != e && n(e);
          },
          className: i,
          isDisabled: u,
        });
      };
    },
    405932: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("225389"),
        a = n("77078"),
        l = n("352969"),
        i = function (e) {
          let { message: t } = e;
          return (0, s.jsxs)("div", {
            className: l.container,
            children: [
              (0, s.jsx)(r.CircleInformationIcon, {
                className: l.icon,
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
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("145131"),
        l = n("782340"),
        i = n("25764");
      let u = e => {
          let { className: t, isEmailResent: n, resendEmail: a } = e;
          return (0, s.jsx)("div", {
            className: t,
            children: (0, s.jsxs)("div", {
              className: i.awaitingWrapper,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  children:
                    l.default.Messages
                      .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER,
                }),
                (0, s.jsxs)("p", {
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        l.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        l.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)(r.Text, {
                      variant: "text-md/normal",
                      children: [
                        l.default.Messages
                          .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                        "\xa0",
                        n
                          ? l.default.Messages
                              .PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT
                          : (0, s.jsx)(r.Anchor, {
                              onClick: a,
                              children:
                                l.default.Messages
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
        c = () =>
          (0, s.jsx)("div", {
            children: (0, s.jsx)(r.ModalFooter, {
              justify: a.default.Justify.BETWEEN,
              align: a.default.Align.CENTER,
              children: (0, s.jsx)(r.Button, {
                "data-testid": "continue",
                color: r.Button.Colors.BRAND,
                disabled: !0,
                children:
                  l.default.Messages
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
    903494: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("422244"),
        a = n("77078"),
        l = n("54239"),
        i = n("812204"),
        u = n("685665"),
        c = n("393414"),
        o = n("21526"),
        d = n("49111"),
        f = n("782340"),
        m = n("24171"),
        _ = e => {
          let { onClose: t } = e,
            { analyticsLocations: n } = (0, u.default)(),
            _ = () => {
              t(),
                (0, c.transitionTo)(d.Routes.COLLECTIBLES_SHOP),
                (0, o.openCollectiblesShop)({
                  openInLayer: !1,
                  analyticsSource: i.default.PREMIUM_PAYMENT_MODAL,
                  analyticsLocations: n,
                }),
                (0, l.popLayer)();
            };
          return (0, s.jsxs)("div", {
            className: m.container,
            children: [
              (0, s.jsx)("div", {
                className: m.iconBackground,
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
                  f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format(
                    {
                      checkItOut: e =>
                        (0, s.jsx)(a.Clickable, {
                          className: m.link,
                          onClick: _,
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
            return p;
          },
        }),
        n("70102"),
        n("222007");
      var s = n("627445"),
        r = n.n(s),
        a = n("913144"),
        l = n("850068"),
        i = n("112679"),
        u = n("596523"),
        c = n("465527"),
        o = n("388290"),
        d = n("599110"),
        f = n("745279"),
        m = n("719923"),
        _ = n("286350"),
        E = n("49111"),
        I = n("646718");
      async function p(e) {
        let {
          setPurchaseState: t,
          setHasAcceptedTerms: n,
          setIsSubmitting: s,
          setPurchaseError: p,
          hasRedirectURL: N,
          setHasRedirectURL: S,
          isGift: P,
          baseAnalyticsData: T,
          analyticsLocation: A,
          analyticsLocations: C,
          flowStartTime: O,
          subscriptionPlan: h,
          planGroup: R,
          trialId: M,
          priceOptions: g,
          paymentSource: x,
          isPrepaidPaymentPastDue: v,
          openInvoiceId: y,
          premiumSubscription: L,
          onNext: b,
          metadata: j,
          sku: G,
          skuPricePreview: D,
          purchaseType: U,
          referralCode: B,
          loadId: F,
          giftInfoOptions: k,
        } = e;
        t(_.PurchaseState.PURCHASING),
          n(!0),
          s(!0),
          a.default.wait(i.clearError),
          p(null);
        try {
          let e, n, s;
          if (
            (d.default.track(E.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
              ...T,
              duration_ms: Date.now() - O,
            }),
            N)
          )
            return;
          if (U === E.PurchaseTypes.ONE_TIME)
            r(null != G, "SKU must exist and be fetched."),
              r(null != D, "SKUPricePreview must exist."),
              (e = await (0, c.purchaseSKU)(G.applicationId, G.id, {
                expectedAmount: D.amount,
                expectedCurrency: D.currency,
                isGift: P,
                paymentSource: x,
                loadId: F,
                giftInfoOptions: k,
              }));
          else if ((r(null != h, "Missing subscriptionPlan"), P)) {
            let t = (0, m.getPrice)(h.id, !1, !0, g);
            if (
              "usd" === t.currency &&
              (null == x ? void 0 : x.type) === E.PaymentSourceTypes.GCASH
            ) {
              var Y;
              let e = Error("Invalid USD currency for GCash");
              (0, f.captureBillingException)(e, {
                tags: {
                  paymentSourceId:
                    null !== (Y = null == x ? void 0 : x.id) && void 0 !== Y
                      ? Y
                      : "",
                  subscriptionPlanId: h.id,
                  priceOptions: JSON.stringify(g),
                },
              });
            }
            e = await (0, c.purchaseSKU)(
              I.PREMIUM_SUBSCRIPTION_APPLICATION,
              h.skuId,
              {
                expectedAmount: t.amount,
                expectedCurrency: t.currency,
                paymentSource: x,
                subscriptionPlanId: h.id,
                isGift: !0,
                loadId: F,
                giftInfoOptions: k,
              }
            );
          } else
            e =
              v && null != y && null != x && null != L
                ? E.PREPAID_PAYMENT_SOURCES.has(x.type)
                  ? await (0, l.payInvoiceManually)(L, y, x, g.currency)
                  : await (0, l.updateSubscription)(
                      L,
                      { paymentSource: x, currency: g.currency },
                      C,
                      A,
                      F
                    )
                : null != L
                  ? await (0, l.updateSubscription)(
                      L,
                      {
                        items: (0, m.getItemsWithUpsertedPlanIdForGroup)(
                          L,
                          h.id,
                          1,
                          new Set(R)
                        ),
                        paymentSource: x,
                        currency: g.currency,
                      },
                      C,
                      A,
                      F
                    )
                  : await (0, u.subscribe)({
                      planId: h.id,
                      currency: g.currency,
                      paymentSource: x,
                      trialId: M,
                      metadata: j,
                      referralCode: B,
                      loadId: F,
                    });
          if (e.redirectConfirmation) {
            S(null != e.redirectURL);
            return;
          }
          t(_.PurchaseState.COMPLETED),
            "subscription" in e
              ? (n =
                  null != e.subscription
                    ? o.default.createFromServer(e.subscription)
                    : null)
              : "entitlements" in e &&
                (s = null != e.entitlements ? e.entitlements : void 0),
            b(n, s);
        } catch (e) {
          t(_.PurchaseState.FAIL),
            p(e),
            d.default.track(E.AnalyticEvents.PAYMENT_FLOW_FAILED, {
              ...T,
              payment_error_code: null == e ? void 0 : e.code,
              payment_source_id: null == x ? void 0 : x.id,
              payment_source_type: null == x ? void 0 : x.type,
              duration_ms: Date.now() - O,
            });
        } finally {
          !N && s(!1);
        }
      }
    },
    262683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalAddPaymentStep: function () {
            return _;
          },
        });
      var s = n("627445"),
        r = n.n(s),
        a = n("775560"),
        l = n("917247"),
        i = n("724522"),
        u = n("599110"),
        c = n("635357"),
        o = n("642906"),
        d = n("85336"),
        f = n("49111"),
        m = n("646718");
      function _(e) {
        let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: s,
            handleStepChange: _,
            referralTrialOfferId: E,
            onReturn: I,
          } = e,
          {
            contextMetadata: p,
            step: N,
            paymentSources: S,
            paymentSourceId: P,
            setPaymentSourceId: T,
            purchaseError: A,
            setPurchaseError: C,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: h,
            selectedSkuId: R,
          } = (0, o.usePaymentContext)(),
          { isGift: M } = (0, c.useGiftContext)(),
          g = {
            ...(0, i.useSharedPaymentModal)(),
            paymentSources: S,
            paymentSourceId: P,
            setPaymentSourceId: T,
            purchaseError: A,
            setPurchaseError: C,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: h,
          },
          x = (0, l.usePremiumTrialOffer)(E),
          v =
            !M &&
            null != x &&
            null != R &&
            (0, m.SubscriptionTrials)[x.trial_id].skus.includes(R),
          y =
            null != I
              ? I
              : () => {
                  let e =
                    Object.values(S).length < 1 && null == n
                      ? d.Step.PLAN_SELECT
                      : d.Step.REVIEW;
                  _(e, { trackedFromStep: d.Step.PAYMENT_TYPE });
                };
        r(N, "Step should be set here");
        let L = (0, a.useStableMemo)(() => Date.now(), [N]);
        return (0, i.AddPaymentFlow)({
          paymentModalArgs: g,
          initialStep: d.Step.PAYMENT_TYPE,
          prependSteps: [d.Step.PROMOTION_INFO],
          appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
          breadcrumpSteps: s,
          currentBreadcrumpStep: N,
          usePaymentModalStep: !0,
          onReturn: y,
          onComplete: e => {
            _(d.Step.REVIEW, { trackedFromStep: e });
          },
          onStepChange: e => {
            let { currentStep: n, toStep: s } = e,
              r = Date.now();
            u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
              ...t,
              from_step: n,
              to_step: s,
              step_duration_ms: r - L,
              flow_duration_ms: r - p.startTime,
            });
          },
          isEligibleForTrial: v,
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
        l = n("650484"),
        i = n("789364");
      function u() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.default, {}),
            (0, s.jsx)(l.PaymentPortalBody, {
              children: (0, s.jsx)(r.AwaitingAuthenticationStepBody, {
                className: i.awaitingAuthenticationStep,
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
            return o;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("465527"),
        l = n("50517"),
        i = n("153727"),
        u = n("650484"),
        c = n("484750");
      function o() {
        let [e, t] = r.useState(!1),
          n = async () => {
            t(!0), await (0, a.resendPaymentVerificationEmail)();
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.default, {}),
            (0, s.jsx)(u.PaymentPortalBody, {
              children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
                className: c.body,
                isEmailResent: e,
                resendEmail: n,
              }),
            }),
            (0, s.jsx)(u.PaymentPortalFooter, {
              children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {}),
            }),
          ],
        });
      }
    },
    39065: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        l = n.n(a),
        i = n("446674"),
        u = n("77078"),
        c = n("850068"),
        o = n("685665"),
        d = n("921149"),
        f = n("177998"),
        m = n("661128"),
        _ = n("868869"),
        E = n("926223"),
        I = n("467292"),
        p = n("622839"),
        N = n("145131"),
        S = n("599110"),
        P = n("659632"),
        T = n("719923"),
        A = n("635357"),
        C = n("642906"),
        O = n("605886"),
        h = n("286350"),
        R = n("102492"),
        M = n("376641"),
        g = n("49111"),
        x = n("252182");
      function v(e) {
        let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: a,
            onNext: v,
            legalTermsNodeRef: y,
            flashLegalTerms: L,
            invoiceError: b,
            planError: j,
            onPurchaseError: G,
            baseAnalyticsData: D,
            flowStartTime: U,
            trialId: B,
            planGroup: F,
            analyticsLocation: k,
            purchaseTokenAuthState: Y,
            openInvoiceId: w,
            metadata: H,
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
          } = (0, C.usePaymentContext)(),
          {
            isGift: ea,
            selectedGiftStyle: el,
            customGiftMessage: ei,
            emojiConfetti: eu,
            soundEffect: ec,
            giftRecipient: eo,
          } = (0, A.useGiftContext)(),
          ed = (0, P.getGiftExperience)(eo),
          ef = {};
        (ef.gift_style = el),
          ed === P.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (l(
              null != eo,
              "Gift recipient must be set at purchase review step for these gift options."
            ),
            (ef.recipient_id = eo.id),
            (ef.custom_message = ei),
            (ef.emoji_id = null == eu ? void 0 : eu.id),
            (ef.emoji_name = null == eu ? void 0 : eu.surrogates),
            (ef.sound_id = null == ec ? void 0 : ec.soundId));
        let em = null == V ? void 0 : V.id,
          e_ = (0, R.checkNoPaymentTrialEnabled)(B, z.paymentSourceId, em),
          eE = (0, i.useStateFromStores)(
            [E.default],
            () => E.default.popupCallbackCalled
          ),
          { analyticsLocations: eI } = (0, o.default)(),
          ep = null != Q ? $[Q] : null,
          [eN, eS] = r.useState(e_),
          [eP, eT] = r.useState(!1),
          { hasEntitlements: eA } = (0, m.useSubscriptionEntitlements)(em, ea),
          eC = (0, T.isPrepaidPaymentSource)(z.paymentSourceId),
          eO = eA || e_,
          eh = (0, d.useIsPrepaidPaymentPastDue)(),
          eR = null,
          eM = null;
        if (q === g.PurchaseTypes.ONE_TIME) {
          var eg;
          l(null != ee, "SKU must be selected for one-time purchases"),
            l(
              null !=
                (eR = null !== (eg = et[ee]) && void 0 !== eg ? eg : null),
              "SKU must exist and be fetched."
            );
          let e = en[ee],
            t = null != Q ? Q : p.NO_PAYMENT_SOURCE;
          eM = null != e ? e[t] : null;
        }
        let ex = async () => {
          await (0, O.purchaseProduct)({
            setPurchaseState: n,
            setHasAcceptedTerms: J,
            setIsSubmitting: eS,
            setPurchaseError: X,
            hasRedirectURL: eP,
            setHasRedirectURL: eT,
            isGift: ea,
            baseAnalyticsData: D,
            analyticsLocation: k,
            analyticsLocations: eI,
            flowStartTime: U,
            subscriptionPlan: V,
            planGroup: F,
            trialId: B,
            priceOptions: z,
            paymentSource: ep,
            isPrepaidPaymentPastDue: eh,
            openInvoiceId: w,
            premiumSubscription: t,
            onNext: v,
            metadata: H,
            sku: eR,
            skuPricePreview: eM,
            purchaseType: q,
            referralCode: es,
            loadId: er.loadId,
            giftInfoOptions: ef,
          });
        };
        r.useEffect(() => {
          let e = async () => {
            if (!0 === eE)
              try {
                if (null == E.default.redirectedPaymentId) return;
                await (0, c.redirectedPaymentSucceeded)(
                  E.default.redirectedPaymentId
                ),
                  n(h.PurchaseState.COMPLETED),
                  v();
              } catch (e) {
                n(h.PurchaseState.FAIL),
                  G(e),
                  S.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                    ...D,
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: Q,
                    payment_source_type: null == ep ? void 0 : ep.type,
                    duration_ms: Date.now() - U,
                  });
              } finally {
                eS(!1), (0, c.resetPaymentIntentId)();
              }
            else Y === I.PurchaseTokenAuthState.SUCCESS && (await ex());
          };
          e();
        }, [eE]),
          r.useEffect(() => {
            e_ && !ea && null == t && ex();
          }, [e_, ea, t]);
        let ev = null != w || (q === g.PurchaseTypes.ONE_TIME && !ea);
        return e_
          ? null
          : (0, s.jsxs)(u.ModalFooter, {
              align: N.default.Align.CENTER,
              children: [
                (0, s.jsx)(_.default, {
                  legalTermsNodeRef: y,
                  invoiceError: b,
                  planError: j,
                  disablePurchase: Z,
                  flashLegalTerms: L,
                  isSubmitting: eN,
                  premiumSubscription: t,
                  isGift: ea,
                  planGroup: F,
                  isPrepaid: eC,
                  isTrial: K,
                  makePurchase: ex,
                  needsPaymentSource: null == ep && !eO,
                }),
                (0, s.jsx)(M.default, {}),
                W && !ev
                  ? (0, s.jsx)("div", {
                      className: x.back,
                      children: (0, s.jsx)(f.default, { onClick: a }),
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
            return i;
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
        l = (e, t, n) => {
          let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
          return null != e && null == t && s;
        },
        i = (e, t, n) => {
          let { bypassCheckout: s } = a.useExperiment(
              { location: "aeb070_1" },
              { autoTrackExposure: !1 }
            ),
            r = l(e, t, n);
          return s && r;
        };
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
            return f;
          },
          getLocalizedPricingNotice: function () {
            return _;
          },
          getLocalizedPricingBannerStrings: function () {
            return E;
          },
        }),
        n("222007"),
        n("424973");
      var s = n("592861"),
        r = n("988415"),
        a = n("701909"),
        l = n("153160"),
        i = n("49111"),
        u = n("843455"),
        c = n("782340");
      let o = new Set([
          u.CurrencyCodes.ARS,
          u.CurrencyCodes.CLP,
          u.CurrencyCodes.COP,
        ]),
        d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
        f = {
          [i.PaymentSourceTypes.CARD]: () =>
            c.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
          [i.PaymentSourceTypes.PAYPAL]: () =>
            c.default.Messages.PAYMENT_SOURCE_PAYPAL,
          [i.PaymentSourceTypes.SOFORT]: () =>
            c.default.Messages.PAYMENT_SOURCE_SOFORT,
          [i.PaymentSourceTypes.GIROPAY]: () =>
            c.default.Messages.PAYMENT_SOURCE_GIROPAY,
          [i.PaymentSourceTypes.PRZELEWY24]: () =>
            c.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
          [i.PaymentSourceTypes.PAYSAFE_CARD]: () =>
            c.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
          [i.PaymentSourceTypes.GCASH]: () =>
            c.default.Messages.PAYMENT_SOURCE_GCASH,
          [i.PaymentSourceTypes.GRABPAY_MY]: () =>
            c.default.Messages.PAYMENT_SOURCE_GRABPAY,
          [i.PaymentSourceTypes.MOMO_WALLET]: () =>
            c.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
          [i.PaymentSourceTypes.VENMO]: () =>
            c.default.Messages.PAYMENT_SOURCE_VENMO,
          [i.PaymentSourceTypes.KAKAOPAY]: () =>
            c.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
          [i.PaymentSourceTypes.GOPAY_WALLET]: () =>
            c.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
          [i.PaymentSourceTypes.BANCONTACT]: () =>
            c.default.Messages.PAYMENT_SOURCE_BANCONTACT,
          [i.PaymentSourceTypes.EPS]: () =>
            c.default.Messages.PAYMENT_SOURCE_EPS,
          [i.PaymentSourceTypes.IDEAL]: () =>
            c.default.Messages.PAYMENT_SOURCE_IDEAL,
          [i.PaymentSourceTypes.CASH_APP]: () =>
            c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
          [i.PaymentSourceTypes.APPLE]: () =>
            c.default.Messages.PAYMENT_SOURCE_APPLE,
        },
        m = [
          i.PaymentSourceTypes.EPS,
          i.PaymentSourceTypes.BANCONTACT,
          i.PaymentSourceTypes.IDEAL,
          i.PaymentSourceTypes.SOFORT,
          i.PaymentSourceTypes.GIROPAY,
          i.PaymentSourceTypes.SEPA_DEBIT,
          i.PaymentSourceTypes.PAYSAFE_CARD,
        ],
        _ = (e, t, n, s) => {
          if (null == e) return "";
          let a = (0, r.getI18NCountryName)(e);
          if (t === u.CurrencyCodes.EUR)
            return n
              ? c.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format(
                  { country: a }
                )
              : c.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format(
                  { currencyISOCode: t.toUpperCase() }
                );
          return s
            ? c.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                countryName: a,
              })
            : c.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                country: a,
              });
        },
        E = e => {
          let {
              localizedPricingPromo: t,
              subscription: n,
              forceSingleLine: s = !1,
              userLocale: _,
            } = e,
            {
              countryCode: E,
              amount: p,
              currency: N,
              paymentSourceTypes: S,
            } = t,
            P = 0 !== S.length,
            T = I(E),
            A = (0, l.formatPrice)(p, N, {
              style: "currency",
              currency: N,
              currencyDisplay: "symbol",
              localeOverride: T,
            }),
            C =
              c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    i.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  currencyISOCode: N.toUpperCase(),
                  localizedPriceWithCurrencySymbol: A,
                }
              );
          if (
            (d.has(N) &&
              (C =
                c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    localizedPriceWithCurrencySymbol: A,
                  }
                )),
            o.has(N) &&
              (C =
                c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: N.toUpperCase(),
                    localizedPriceWithCurrencySymbol: A,
                  }
                )),
            null != n &&
              !n.hasPremiumNitroMonthly &&
              (C =
                c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: N.toUpperCase(),
                  }
                )),
            N === u.CurrencyCodes.EUR &&
              (C = s
                ? c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format(
                    {
                      country: (0, r.getI18NCountryName)(E),
                      currencyISOCode: N.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        i.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )
                : c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format(
                    {
                      currencyISOCode: N.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        i.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )),
            P)
          ) {
            let e = m.filter(e => S.includes(e)),
              t = S.filter(e => !m.includes(e)),
              n = [...e, ...t],
              s = n.slice(0, 2).map(e => {
                var t, n;
                return null !==
                  (n =
                    null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) &&
                  void 0 !== n
                  ? n
                  : c.default.Messages.PAYMENT_SOURCE_UNKNOWN;
              });
            S.length >= 3 &&
              s.push(c.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let r = new Intl.ListFormat(_, {
              style: "short",
              type: "conjunction",
            });
            C =
              c.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    i.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  paymentMethods: r.format(s),
                }
              );
          }
          return {
            localizedPricingBannerHeader:
              c.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                country: (0, r.getI18NCountryName)(E),
              }),
            localizedPricingBannerBody: C,
            localizedPricingBannerLinkOnly:
              c.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                helpCenterLink: a.default.getArticleURL(
                  i.HelpdeskArticles.LOCALIZED_PRICING
                ),
              }),
            localizedPricingBannerSubNotif: P
              ? void 0
              : c.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF,
          };
        },
        I = e => {
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
            return l;
          },
          isPaymentSourceEligibleForMultiMonthPlans: function () {
            return u;
          },
        }),
        n("222007");
      var s = n("976979"),
        r = n("862205"),
        a = n("646718"),
        l = (0, r.createExperiment)({
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
      let i = new Set([s.CountryCodes.US, s.CountryCodes.CA]);
      function u(e) {
        return null == e || i.has(e.country);
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
            return i;
          },
        });
      var s,
        r,
        a = n("862205");
      ((s = r || (r = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.BROWSER_AUTOFILL = 1)] = "BROWSER_AUTOFILL"),
        (s[(s.MERGE_PLAN_SELECT_TO_REVIEW = 2)] =
          "MERGE_PLAN_SELECT_TO_REVIEW");
      let l = (0, a.createExperiment)({
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
      var i = l;
    },
    921149: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsPrepaidPaymentPastDue: function () {
            return f;
          },
        });
      var s = n("866227"),
        r = n.n(s),
        a = n("446674"),
        l = n("357957"),
        i = n("10514"),
        u = n("521012"),
        c = n("719923"),
        o = n("49111"),
        d = n("843455");
      function f() {
        let e = (0, a.useStateFromStores)([u.default], () =>
            u.default.getPremiumTypeSubscription()
          ),
          t = (0, a.useStateFromStores)([i.default], () =>
            null != e && null != e.planIdFromItems
              ? i.default.get(null == e ? void 0 : e.planIdFromItems)
              : null
          ),
          n = (0, a.useStateFromStores)(
            [l.default],
            () =>
              null != e && null != e.paymentSourceId
                ? l.default.getPaymentSource(e.paymentSourceId)
                : null,
            [e]
          ),
          s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
          f =
            (null == e ? void 0 : e.status) ===
            o.SubscriptionStatusTypes.PAST_DUE
              ? r().diff(r(e.currentPeriodStart), "days")
              : 0;
        return (
          !!(
            null != e &&
            null != t &&
            (0, c.isPremiumBaseSubscriptionPlan)(t.id)
          ) &&
          s &&
          f >= 0 &&
          f <= (0, c.getBillingGracePeriodDays)(e) &&
          e.status === o.SubscriptionStatusTypes.PAST_DUE &&
          !e.isPurchasedExternally
        );
      }
    },
    279171: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useShouldShowLegacyPricingNotice: function () {
            return I;
          },
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("627445"),
        i = n.n(l),
        u = n("423487"),
        c = n("701909"),
        o = n("35188"),
        d = n("391533"),
        f = n("296253"),
        m = n("49111"),
        _ = n("782340"),
        E = n("816461");
      function I() {
        let e = (0, f.default)(),
          { enabled: t } = o.default.useExperiment(
            { location: "5ebfcf_1" },
            { autoTrackExposure: !1 }
          ),
          { enabled: n } = d.default.useExperiment(
            { location: "5ebfcf_2" },
            { autoTrackExposure: !1 }
          );
        return null != e && ("PL" === e ? t : "TR" === e && n);
      }
      var p = e => {
        var t, n;
        let { fromBoostCancelModal: r, className: l } = e,
          o = (0, f.default)(),
          d = I();
        if (!d) return null;
        return (
          i(null != o, "Subscription billing country should not be null"),
          (0, s.jsxs)("div", {
            className: a(E.noticeRoot, l),
            children: [
              (0, s.jsx)("div", {
                className: E.iconContainer,
                children: (0, s.jsx)(u.default, { className: E.infoIcon }),
              }),
              (0, s.jsx)("div", {
                className: E.text,
                children: ((t = o),
                (n = r),
                "PL" === t
                  ? n
                    ? _.default.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING
                    : _.default.Messages
                        .LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING
                  : "TR" === t
                    ? n
                      ? _.default.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING
                      : _.default.Messages
                          .LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING
                    : n
                      ? _.default.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING
                      : _.default.Messages
                          .LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                  helpCenterLink: c.default.getArticleURL(
                    m.HelpdeskArticles.LOCALIZED_PRICING
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
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("153160"),
        i = n("646718"),
        u = n("782340"),
        c = n("513600");
      function o(e) {
        let {
            price: t,
            currency: n,
            intervalType: r,
            className: o,
            intervalCount: d = 1,
            isPrepaidPaymentSource: f = !1,
          } = e,
          m = (0, l.formatPrice)(t, n),
          _ = null;
        return (
          r === i.SubscriptionIntervalTypes.YEAR
            ? (_ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                price: m,
              }))
            : r === i.SubscriptionIntervalTypes.MONTH && 1 === d
              ? (_ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                  price: m,
                }))
              : r === i.SubscriptionIntervalTypes.MONTH &&
                d > 1 &&
                (_ =
                  u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format(
                    { price: m, intervalCount: d }
                  )),
          (0, s.jsx)("div", {
            className: a(c.pricePerInterval, o),
            "data-testid": "PricePerInterval-".concat(n),
            children:
              null == r || f ? (0, s.jsx)("strong", { children: m }) : _,
          })
        );
      }
    },
    705820: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("77078"),
        u = n("850391"),
        c = n("149022"),
        o = n("681060"),
        d = n("570697"),
        f = n("233069"),
        m = n("646718"),
        _ = n("49111"),
        E = n("782340"),
        I = n("716397");
      let p = (0, f.createChannelRecord)({ id: "1", type: _.ChannelTypes.DM });
      function N(e) {
        let {
            sectionTitle: t,
            errors: n,
            onTextChange: a,
            pendingText: f,
            placeholder: _,
            currentText: N,
            className: S,
            innerClassName: P,
            disabled: T = !1,
            disableThemedBackground: A = !1,
          } = e,
          [C, O] = r.useState(null != f ? f : N),
          [h, R] = r.useState((0, c.toRichValue)(C)),
          M = r.useRef(!1);
        return (
          r.useEffect(() => {
            M.current = !0;
          }, []),
          r.useEffect(() => {
            if (void 0 === f) {
              let e = (0, c.toRichValue)(N);
              O(N), R(e);
            }
          }, [f, N]),
          (0, s.jsx)("div", {
            className: l(I.body, S),
            children: (0, s.jsxs)(d.default, {
              title: t,
              errors: n,
              disabled: T,
              children: [
                (0, s.jsx)(o.default, {
                  innerClassName: l(I.textArea, P),
                  editorClassName: I.editorTextArea,
                  maxCharacterCount: m.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                  onChange: function (e, t, n) {
                    t !== C && (O(t), R(n), a(t));
                  },
                  placeholder: _,
                  channel: p,
                  textValue: C,
                  richValue: h,
                  type: u.ChatInputTypes.CUSTOM_GIFT,
                  onBlur: () => {
                    M.current = !1;
                  },
                  onFocus: () => {
                    M.current = !0;
                  },
                  focused: M.current,
                  onSubmit: function () {
                    return new Promise(e => {
                      e({ shouldClear: !1, shouldRefocus: !0 });
                    });
                  },
                  disableThemedBackground: A,
                }),
                (0, s.jsx)(i.HiddenVisually, {
                  children: E.default.Messages.MAXIMUM_LENGTH.format({
                    maxLength: m.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
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
            return c;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        i = n("4263");
      let u = r.forwardRef(function (e, t) {
        let { isActive: n, children: r } = e;
        return (0, s.jsx)("div", {
          className: l(i.wrapper, { [i.wrapperActive]: n }),
          ref: t,
          children: r,
        });
      });
      var c = u;
    },
    889554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GiftAnimationOptions: function () {
            return p;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        l = n("635357"),
        i = n("742926"),
        u = n("659632"),
        c = n("210721"),
        o = n("53253"),
        d = n("65324"),
        f = n("563613"),
        m = n("64798"),
        _ = n("646718"),
        E = n("782340"),
        I = n("421404");
      let p = e => {
        let { isShopGift: t } = e,
          {
            giftRecipient: n,
            selectedGiftStyle: p,
            setSelectedGiftStyle: N,
            emojiConfetti: S,
            soundEffect: P,
            setEmojiConfetti: T,
            setSoundEffect: A,
          } = (0, l.useGiftContext)(),
          [C, O] = r.useState(!1),
          h = r.useRef(null),
          R = (0, a.useRadioGroup)({ orientation: "horizontal" }),
          M = (0, u.getGiftExperience)(n, t),
          g = M === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
          x = M !== u.GiftExperience.DEFAULT,
          v = (0, o.useIsSeasonalGiftingActive)(),
          { enabled: y } = o.default.useExperiment(
            { location: "premiumGiftSelect_GiftAnimationOptions" },
            { autoTrackExposure: v }
          ),
          L = null;
        return (
          x &&
            (L = v && y ? _.SeasonalGiftStyles2023 : _.STANDARD_GIFT_OPTIONS),
          (0, s.jsxs)("div", {
            children: [
              x &&
                (0, s.jsxs)("div", {
                  className: I.giftMainAnimation,
                  children: [
                    null != p
                      ? (0, s.jsx)(d.default, {
                          giftStyle: p,
                          defaultAnimationState: c.AnimationState.ACTION,
                          idleAnimationState: c.AnimationState.LOOP,
                          shouldAnimate: !0,
                          className: I.animation,
                        })
                      : (0, s.jsx)(a.Spinner, { className: I.spinner }),
                    g &&
                      (0, s.jsxs)("div", {
                        className: I.soundEmojiContainer,
                        children: [
                          (0, s.jsx)("div", {
                            className: I.sound,
                            children: (0, s.jsx)(i.default, {
                              sound: P,
                              onSelect: e => {
                                null != A && A(null == e ? void 0 : e);
                              },
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: I.emoji,
                            children: (0, s.jsx)(f.default, {
                              setEmojiConfetti: T,
                              emojiConfetti: null == S ? void 0 : S,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, s.jsx)("div", {
                tabIndex: null != p || C ? void 0 : 0,
                onFocus: e => {
                  var t;
                  e.target === e.currentTarget &&
                    (null === (t = h.current) || void 0 === t || t.focus());
                },
                className: I.giftBoxOptionContainer,
                "aria-label":
                  E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                ...R,
                children:
                  null != L &&
                  L.map((e, t) =>
                    (0, s.jsx)(
                      m.GiftStaticOption,
                      {
                        isSelected: p === e,
                        giftStyle: e,
                        setSelectedGiftStyle: N,
                        ref: 0 === t ? h : null,
                        onFocus: () => O(!0),
                        onBlur: () => O(!1),
                      },
                      e
                    )
                  ),
              }),
              (0, s.jsx)("div", { className: I.selectPlanDivider }),
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
            return _;
          },
        }),
        n("222007"),
        n("781738");
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        l = n("86678"),
        i = n("46829"),
        u = n("49111"),
        c = n("958706"),
        o = n("782340"),
        d = n("517184");
      let f = {
          section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
          openPopoutType: "gift_effect_emoji_picker",
        },
        m = c.EmojiIntention.GIFT;
      function _(e) {
        let { setEmojiConfetti: t, emojiConfetti: n } = e,
          [u, c] = r.useState(!1),
          _ = e =>
            (0, s.jsxs)("div", {
              className: d.customGiftContent,
              children: [
                (0, s.jsxs)("div", {
                  className: d.customGiftHeader,
                  children: [
                    (0, s.jsx)(a.Text, {
                      variant: "text-md/bold",
                      children: o.default.Messages.GIFT_SELECT_EMOJI,
                    }),
                    (0, s.jsx)(a.Text, {
                      variant: "text-sm/normal",
                      children:
                        o.default.Messages
                          .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                    }),
                  ],
                }),
                e,
              ],
            }),
          E = e => {
            null != t && (t(e), c(!1));
          };
        return (0, s.jsx)(a.Popout, {
          shouldShow: u,
          position: "bottom",
          align: "left",
          autoInvert: !1,
          onRequestClose: () => c(!1),
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, s.jsx)(a.Dialog, {
              children: (0, s.jsx)(l.default, {
                analyticsOverride: f,
                closePopout: t,
                onSelectEmoji: E,
                wrapper: "div",
                pickerIntention: m,
                renderHeader: _,
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
                onClick: () => c(!0),
                children:
                  (null == n ? void 0 : n.name) == null
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(i.default, {
                            className: d.emojiIcon,
                            width: 14,
                            height: 14,
                          }),
                          (0, s.jsx)(a.Text, {
                            className: d.text,
                            variant: "text-sm/semibold",
                            children: o.default.Messages.GIFT_SELECT_EMOJI,
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
            return p;
          },
        });
      var s = n("37983"),
        r = n("884691"),
        a = n("77078"),
        l = n("646718"),
        i = n("860980"),
        u = n("392459"),
        c = n("26245"),
        o = n("21340"),
        d = n("159548"),
        f = n("897184"),
        m = n("990439"),
        _ = n("999641"),
        E = n("74771");
      let I = {
          [l.PremiumGiftStyles.STANDARD_BOX]: f,
          [l.PremiumGiftStyles.CAKE]: m,
          [l.PremiumGiftStyles.CHEST]: _,
          [l.PremiumGiftStyles.COFFEE]: E,
          [l.PremiumGiftStyles.SNOWGLOBE]: "",
          [l.PremiumGiftStyles.BOX]: "",
          [l.PremiumGiftStyles.CUP]: "",
          [l.PremiumGiftStyles.SEASONAL_CAKE]: c,
          [l.PremiumGiftStyles.SEASONAL_CHEST]: o,
          [l.PremiumGiftStyles.SEASONAL_COFFEE]: d,
          [l.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u,
        },
        p = r.forwardRef(function (e, t) {
          let {
            isSelected: n,
            giftStyle: r,
            setSelectedGiftStyle: l,
            onFocus: u,
            onBlur: c,
          } = e;
          return (0, s.jsx)(a.Clickable, {
            innerRef: t,
            onClick: () => l(r),
            onFocus: u,
            onBlur: c,
            children: (0, s.jsx)("img", {
              style: { width: "100%", height: "100%" },
              alt: "",
              src: I[r],
              className: n ? i.customGiftBoxHighlighted : i.customGiftBox,
            }),
          });
        });
    },
    177998: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("782340"),
        l = n("32464"),
        i = e => {
          let { onClick: t } = e;
          return (0, s.jsx)(r.Anchor, {
            onClick: t,
            className: l.link,
            children: a.default.Messages.BACK,
          });
        };
    },
    570727: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumSwitchPlanSelectBody: function () {
            return H;
          },
          PremiumSwitchPlanSelectFooter: function () {
            return W;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        l = n.n(a),
        i = n("446674"),
        u = n("77078"),
        c = n("405932"),
        o = n("798609"),
        d = n("837148"),
        f = n("903494"),
        m = n("635357"),
        _ = n("642906"),
        E = n("85336"),
        I = n("883558"),
        p = n("10514"),
        N = n("521012"),
        S = n("659632"),
        P = n("701909"),
        T = n("773336"),
        A = n("719923"),
        C = n("153160"),
        O = n("916187"),
        h = n("968532"),
        R = n("15733"),
        M = n("154889"),
        g = n("917247"),
        x = n("279171"),
        v = n("883662"),
        y = n("824734"),
        L = n("705820"),
        b = n("889554"),
        j = n("177998"),
        G = n("661128"),
        D = n("26785"),
        U = n("617223"),
        B = n("646718"),
        F = n("49111"),
        k = n("843455"),
        Y = n("782340"),
        w = n("291646");
      function H(e) {
        var t, n, a, E, I, N;
        let {
            premiumSubscription: T,
            skuId: h,
            selectedPlanId: j,
            setSelectedPlanId: G,
            priceOptions: H,
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
          } = (0, _.usePaymentContext)(),
          {
            isGift: en,
            giftRecipient: es,
            selectedGiftStyle: er,
            customGiftMessage: ea,
            setCustomGiftMessage: el,
          } = (0, m.useGiftContext)(),
          ei = (0, S.getGiftExperience)(es),
          eu = en && (0, S.shouldShowCustomGiftExperience)(es),
          { confirmUpsellEnabled: ec } = (0, d.default)({
            location: "PremiumSwitchPlanSelectBody",
          });
        (h = null != h ? h : $),
          l(void 0 !== (T = null != T ? T : q), "should not be undefined");
        let [eo, ed] = (0, i.useStateFromStoresArray)([p.default], () => [
            null != T ? p.default.get(T.planId) : null,
            null != j ? p.default.get(j) : null,
          ]),
          ef = (0, g.usePremiumTrialOffer)(K),
          em = null == ef ? void 0 : ef.subscription_trial,
          e_ = (0, M.usePremiumDiscountOffer)(),
          eE =
            null == e_
              ? void 0
              : null === (t = e_.discount) || void 0 === t
                ? void 0
                : t.plan_ids,
          eI = null != ed ? ed : ee,
          ep = r.useCallback(
            e => {
              null != G ? G(e) : Q(e);
            },
            [G, Q]
          ),
          eN = null != H ? H : et;
        l(null != eN, "Price option has to be set");
        let eS =
            null != ef &&
            (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(h),
          eP =
            null != e_ &&
            W.some(e => (null == eE ? void 0 : eE.includes(e))) &&
            null != e_.discount,
          eT = (0, A.getPrice)(
            B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            !1,
            en,
            eN
          );
        r.useEffect(() => {
          Z && O.default.trackExposure({ location: "5f89bb_1" });
        }, [Z]);
        let eA = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
        r.useEffect(() => {
          if (!eA) {
            if (null == eo || en) ep(W[0]);
            else if (null != eo) {
              let e = W.find(e => e !== eo.id);
              null != e && ep(e);
            }
          }
        }, [eA, en, W, eo, ep]);
        let eC = !eu && (en || (!eS && !eP)) && eA && z,
          eO = (0, u.useRadioGroup)(),
          eh =
            (null == eI ? void 0 : eI.id) != null
              ? (0, A.getPrice)(eI.id, !1, en, eN)
              : void 0,
          { ipCountryCode: eR } = (0, R.default)(),
          eM = "HR" === eR && null != eh && eh.currency === k.CurrencyCodes.EUR,
          eg = (0, A.isPrepaidPaymentSource)(eN.paymentSourceId),
          ex =
            (null == em ? void 0 : em.interval) ===
            B.SubscriptionIntervalTypes.DAY
              ? Y.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD
              : Y.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
          ev = !en && (eP || (null != em && eS && null != V)),
          ey =
            null == J
              ? void 0
              : null ===
                    (E = J.find(
                      e =>
                        e.subscriptionPlanId ===
                        B.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                    )) || void 0 === E
                ? void 0
                : null === (a = E.discounts) || void 0 === a
                  ? void 0
                  : null ===
                        (n = a.find(
                          e =>
                            e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN
                        )) || void 0 === n
                    ? void 0
                    : n.amount;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: eu ? w.stepBodyCustomGift : w.stepBody,
            children: [
              (0, s.jsxs)("div", {
                className: eu ? w.bodyColumnMiddle : void 0,
                children: [
                  (0, s.jsx)(x.default, {
                    fromBoostCancelModal: !1,
                    className: w.legacyPricingNotice,
                  }),
                  eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {}),
                ],
              }),
              (0, s.jsxs)("div", {
                className: eu ? w.bodyColumnRight : void 0,
                children: [
                  (0, s.jsx)(U.SendGiftToUser, { giftRecipient: es }),
                  (() => {
                    if (
                      ei === S.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
                      null != el
                    )
                      return (0, s.jsx)(L.default, {
                        sectionTitle: Y.default.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: e => el(e),
                        pendingText: ea,
                        currentText: ea,
                      });
                  })(),
                  null != eo &&
                    !en &&
                    (0, s.jsx)("div", {
                      className: w.bodyText,
                      children: (function (e, t) {
                        let n =
                            Y.default.Messages
                              .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                          s =
                            Y.default.Messages
                              .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                          r = (() => {
                            switch (e.interval) {
                              case B.SubscriptionIntervalTypes.YEAR:
                                return n;
                              case B.SubscriptionIntervalTypes.MONTH:
                              default:
                                return s;
                            }
                          })(),
                          a = e.skuId;
                        switch (t) {
                          case B.PremiumSubscriptionSKUs.TIER_0:
                            switch (a) {
                              case B.PremiumSubscriptionSKUs.TIER_1:
                                return Y.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                              case B.PremiumSubscriptionSKUs.TIER_2:
                                return Y.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                              default:
                                return r;
                            }
                          case B.PremiumSubscriptionSKUs.TIER_1:
                            switch (a) {
                              case B.PremiumSubscriptionSKUs.TIER_0:
                                return Y.default.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                              case B.PremiumSubscriptionSKUs.TIER_2:
                                return Y.default.Messages
                                  .BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                              default:
                                return r;
                            }
                          case B.PremiumSubscriptionSKUs.TIER_2:
                            switch (a) {
                              case B.PremiumSubscriptionSKUs.TIER_0:
                              case B.PremiumSubscriptionSKUs.TIER_1:
                                return Y.default.Messages
                                  .BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                              case B.PremiumSubscriptionSKUs.TIER_2:
                                return e.interval ===
                                  B.SubscriptionIntervalTypes.MONTH
                                  ? Y.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format(
                                      {
                                        numFreeGuildSubscriptions:
                                          B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                      }
                                    )
                                  : r;
                              default:
                                return r;
                            }
                          default:
                            return r;
                        }
                      })(eo, h),
                    }),
                  ((I = eS),
                  (N = eP),
                  eu
                    ? (0, s.jsx)(u.FormTitle, {
                        children:
                          Y.default.Messages.GIFT_SUBSCRIPTION_SELECTION,
                      })
                    : ev
                      ? I
                        ? (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                className: w.trialPlanSelectHeader,
                                children:
                                  Y.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format(
                                    { trialEnd: V, trialPeriod: ex }
                                  ),
                              }),
                              (0, s.jsx)("hr", {
                                className: w.planSelectSeparator,
                              }),
                            ],
                          })
                        : N && null != ey && null != eT
                          ? (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: w.trialPlanSelectHeader,
                                  children:
                                    Y.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format(
                                      {
                                        numMonths:
                                          null == e_
                                            ? void 0
                                            : e_.discount.user_usage_limit,
                                        discountedPrice: (0, C.formatPrice)(
                                          eT.amount - ey,
                                          eT.currency
                                        ),
                                        regularPrice: (0, C.formatPrice)(
                                          eT.amount,
                                          eT.currency
                                        ),
                                      }
                                    ),
                                }),
                                (0, s.jsx)("hr", {
                                  className: w.planSelectSeparator,
                                }),
                              ],
                            })
                          : void 0
                      : (0, s.jsx)("div", {
                          className: w.selectPlanChooseTitle,
                          children:
                            Y.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE,
                        })),
                  (0, s.jsx)("div", {
                    ...eO,
                    children: W.map(e =>
                      (0, s.jsx)(
                        D.default,
                        {
                          planId: e,
                          premiumSubscription: en ? null : null != T ? T : null,
                          selectPlan: ep,
                          selected: (null == eI ? void 0 : eI.id) === e,
                          priceOptions: eN,
                          shouldShowUpdatedPaymentModal: ev,
                          isEligibleForDiscount: eP,
                          discountAmountOff: ey,
                        },
                        e
                      )
                    ),
                  }),
                  (0, s.jsx)("div", {
                    children:
                      eC && null != eI && null != eh
                        ? (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("div", {
                                className: w.selectPlanDivider,
                              }),
                              (0, s.jsx)(v.PremiumInvoiceTableTotalRow, {
                                label:
                                  Y.default.Messages
                                    .BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                value: (0, s.jsx)(y.default, {
                                  price: eh.amount,
                                  currency: eh.currency,
                                  intervalType: en ? null : eI.interval,
                                  intervalCount: eI.intervalCount,
                                  isPrepaidPaymentSource: eg,
                                }),
                                className: w.selectPlanTotalRow,
                              }),
                            ],
                          })
                        : null,
                  }),
                  eM &&
                    (0, s.jsx)(c.default, {
                      message:
                        Y.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format(
                          {
                            kunaPriceWithCurrency: (0, C.formatPrice)(
                              7.5345 * eh.amount,
                              k.CurrencyCodes.HRK
                            ),
                          }
                        ),
                    }),
                  !en &&
                    !ev &&
                    z &&
                    (0, s.jsx)(c.default, {
                      message:
                        Y.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format(
                          {
                            documentationLink: P.default.getArticleURL(
                              F.HelpdeskArticles.LOCALIZED_PRICING
                            ),
                          }
                        ),
                    }),
                  ec && en && (0, s.jsx)(f.default, { onClose: X }),
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
            showBackButton: l,
            planOptions: i,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: o,
          } = e,
          { paymentSources: d, selectedPlan: f } = (0, _.usePaymentContext)(),
          { isGift: E } = (0, m.useGiftContext)();
        return (
          (r = null != r ? r : d),
          (n = null != n ? n : null == f ? void 0 : f.id),
          (0, s.jsxs)(s.Fragment, {
            children: [
              null != n && i.includes(n)
                ? (0, s.jsx)(Z, {
                    paymentSources: r,
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: E,
                    shouldRenderUpdatedPaymentModal: c,
                    isTrial: o,
                  })
                : (0, s.jsx)(u.Button, {
                    disabled: !0,
                    children: Y.default.Messages.SELECT,
                  }),
              l ? (0, s.jsx)(j.default, { onClick: a }) : null,
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
            shouldRenderUpdatedPaymentModal: l,
            isTrial: c,
          } = e,
          o = (0, i.useStateFromStores)([N.default], () =>
            N.default.getPremiumTypeSubscription()
          ),
          { hasEntitlements: d } = (0, G.useSubscriptionEntitlements)(n, r),
          f =
            (null != o && null != o.paymentSourceId) ||
            Object.keys(a).length > 0 ||
            (d && !c);
        var m = l ? Y.default.Messages.NEXT : Y.default.Messages.SELECT,
          _ = E.Step.ADD_PAYMENT_STEPS;
        return (
          f
            ? (_ = E.Step.REVIEW)
            : (0, T.isDesktop)() &&
              (function () {
                let { experiment: e } = h.default.getCurrentConfig({
                  location: "5f89bb_2",
                });
                if (e === h.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                  let { enabled: e } = I.default.getCurrentConfig(
                    { location: "5f89bb_3" },
                    { autoTrackExposure: !0 }
                  );
                  return e;
                }
                return !1;
              })() &&
              ((_ = E.Step.AWAITING_BROWSER_CHECKOUT),
              (m = Y.default.Messages.CONTINUE_IN_BROWSER)),
          (0, s.jsx)(u.Button, { onClick: () => t(_), children: m })
        );
      }
    },
    26785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("627445"),
        i = n.n(l),
        u = n("446674"),
        c = n("669491"),
        o = n("77078"),
        d = n("635357"),
        f = n("915639"),
        m = n("10514"),
        _ = n("659632"),
        E = n("240481"),
        I = n("719923"),
        p = n("153160"),
        N = n("154889"),
        S = n("646718"),
        P = n("782340"),
        T = n("902839");
      function A(e) {
        var t;
        let {
            premiumSubscription: n,
            planId: r,
            selectPlan: l,
            selected: A,
            priceOptions: C,
            shouldShowUpdatedPaymentModal: O,
            isEligibleForDiscount: h,
            discountAmountOff: R,
          } = e,
          M = (0, u.useStateFromStores)([f.default], () => f.default.locale),
          g = (0, u.useStateFromStores)([m.default], () => m.default.get(r)),
          { isGift: x, giftRecipient: v } = (0, d.useGiftContext)(),
          y = x && (0, _.shouldShowCustomGiftExperience)(v);
        i(null != g, "Missing subscriptionPlan");
        let L = null != n && n.planId === r,
          b =
            L ||
            (r === S.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
              null != n &&
              [
                S.SubscriptionPlans.PREMIUM_YEAR_TIER_0,
                S.SubscriptionPlans.PREMIUM_YEAR_TIER_1,
              ].includes(n.planId)),
          j = S.DISCOUNTS[r],
          G = (0, I.getPrice)(r, !1, x, C),
          D = (0, I.isPrepaidPaymentSource)(C.paymentSourceId),
          U = null != j && !O,
          B = (0, N.usePremiumDiscountOffer)(),
          F =
            g.interval === S.SubscriptionIntervalTypes.YEAR
              ? P.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
              : P.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
          k = () =>
            null != j &&
            (0, s.jsx)(o.Text, {
              tag: "span",
              variant: "eyebrow",
              color: "always-white",
              className: T.planOptionDiscount,
              children:
                P.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                  discount: (0, E.formatPercent)(M, j / 100),
                }),
            }),
          Y = () =>
            (g.interval === S.SubscriptionIntervalTypes.YEAR && null != n) ||
            (U && !L)
              ? g.interval === S.SubscriptionIntervalTypes.YEAR && null != n
                ? (0, s.jsxs)("span", {
                    className: T.planOptionMonthsFree,
                    children: [
                      "(",
                      P.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
                      ")",
                    ],
                  })
                : U && !L
                  ? k()
                  : void 0
              : null;
        return (0, s.jsxs)(o.Clickable, {
          role: y ? "menuitem" : "radio",
          "aria-checked": A,
          tabIndex: A ? 0 : -1,
          focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
          onClick: b ? void 0 : () => l(r),
          className: a(T.planOptionClickableContainer, {
            [T.selectedPlan]: y && A,
            [T.selectionBox]: y,
          }),
          children: [
            (0, s.jsxs)("div", {
              className: a(T.planOption, { [T.planOptionDisabled]: b }),
              children: [
                (0, s.jsxs)("div", {
                  className: T.planOptionClickable,
                  children: [
                    !y &&
                      (0, s.jsx)(o.Checkbox, {
                        readOnly: !0,
                        displayOnly: !0,
                        value: A,
                        shape: o.Checkbox.Shapes.ROUND,
                        color: c.default.unsafe_rawColors.BRAND_500.css,
                        type: o.Checkbox.Types.INVERTED,
                        className: T.planOptionCheckbox,
                      }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className: a(T.planOptionInterval, {
                            [T.optionSelected]: A || y,
                            [T.updatedOptionSelected]: O && (A || y),
                          }),
                          children: [
                            (0, I.getIntervalString)(
                              g.interval,
                              x,
                              D,
                              g.intervalCount,
                              y,
                              (0, I.getPremiumType)(g.id)
                            ),
                            y && Y(),
                          ],
                        }),
                        y &&
                          (0, s.jsx)("div", {
                            className: T.planOneTimeCost,
                            children: P.default.Messages.ONE_TIME_CHARGE.format(
                              {
                                currencyAmount: (0, p.formatPrice)(
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
                        className: T.planOptionCurrentPlan,
                        children: [
                          "(",
                          P.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
                          ")",
                        ],
                      }),
                    !y && Y(),
                  ],
                }),
                O
                  ? (0, s.jsx)("div", {
                      className: a({ [T.optionPriceSelected]: A }),
                      children:
                        P.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                          price: (() => {
                            if (h && null != R)
                              return g.interval ===
                                S.SubscriptionIntervalTypes.MONTH
                                ? (0, p.formatPrice)(G.amount - R, G.currency)
                                : (0, p.formatPrice)(G.amount, G.currency);
                            return (0, p.formatPrice)(0, G.currency, {
                              maximumFractionDigits: 0,
                            });
                          })(),
                        }),
                    })
                  : (0, s.jsx)("div", {
                      className: a({ [T.optionSelected]: A || y }),
                      children: (0, p.formatPrice)(G.amount, G.currency),
                    }),
              ],
            }),
            O &&
              (0, s.jsx)("div", {
                className: T.planOptionSubtextContainer,
                children: (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: A ? "text-normal" : "interactive-normal",
                  className: a(T.planOptionSubtext, {
                    [T.discountPlanOptionSubtext]: h,
                  }),
                  children:
                    h && null != R
                      ? g.interval === S.SubscriptionIntervalTypes.MONTH
                        ? P.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format(
                            {
                              numMonths:
                                null !==
                                  (t =
                                    null == B
                                      ? void 0
                                      : B.discount.user_usage_limit) &&
                                void 0 !== t
                                  ? t
                                  : S.DISCOUNT_DURATION_FALLBACK,
                              discountedPrice: (0, p.formatPrice)(
                                G.amount - R,
                                G.currency
                              ),
                              regularPrice: (0, p.formatPrice)(
                                G.amount,
                                G.currency
                              ),
                            }
                          )
                        : P.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format(
                            { percent: j }
                          )
                      : F.format({
                          price: (0, p.formatPrice)(G.amount, G.currency),
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
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("87657"),
        l = n("158998"),
        i = n("782340"),
        u = n("995777");
      let c = e => {
        let { giftRecipient: t } = e;
        return null == t
          ? null
          : (0, s.jsxs)("div", {
              className: u.content,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  children: i.default.Messages.FORM_LABEL_SEND_TO,
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
                      children: l.default.getName(t),
                    }),
                    (0, s.jsx)(r.Heading, {
                      className: u.giftRecipientTag,
                      variant: "text-md/normal",
                      children: l.default.getUserTag(t),
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
            return H;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("627445"),
        l = n.n(a),
        i = n("976979"),
        u = n("446674"),
        c = n("669491"),
        o = n("77078"),
        d = n("335430"),
        f = n("703332"),
        m = n("740055"),
        _ = n("545876"),
        E = n("736978"),
        I = n("635357"),
        p = n("642906"),
        N = n("286350"),
        S = n("102492"),
        P = n("176108"),
        T = n("102985"),
        A = n("160299"),
        C = n("10514"),
        O = n("68238"),
        h = n("659632"),
        R = n("719923"),
        M = n("153160"),
        g = n("210721"),
        x = n("809071"),
        v = n("154889"),
        y = n("883662"),
        L = n("623003"),
        b = n("65324"),
        j = n("570727"),
        G = n("146163"),
        D = n("661128"),
        U = n("617223"),
        B = n("646718"),
        F = n("49111"),
        k = n("843455"),
        Y = n("782340"),
        w = n("193692");
      function H(e) {
        var t, n, a;
        let H,
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
            hideSubscriptionDetails: el,
            referralTrialOfferId: ei,
            isTrial: eu = !1,
            isDiscount: ec = !1,
            handleClose: eo,
          } = e,
          {
            isEmbeddedIAP: ed,
            activeSubscription: ef,
            selectedSkuId: em,
            defaultPlanId: e_,
            isPremium: eE,
            startedPaymentFlowWithPaymentSourcesRef: eI,
          } = (0, p.usePaymentContext)(),
          {
            isGift: ep,
            giftRecipient: eN,
            selectedGiftStyle: eS,
          } = (0, I.useGiftContext)(),
          eP = (0, v.usePremiumDiscountOffer)(),
          eT =
            null == eP
              ? void 0
              : null === (t = eP.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
          eA = !ep && null != eP && null != em && eT,
          eC = (0, u.useStateFromStores)([C.default], () => C.default.get(Z));
        l(null != eC, "Missing plan");
        let eO = [{ planId: eC.id, quantity: 1 }],
          eh =
            ea === N.PurchaseState.PURCHASING ||
            ea === N.PurchaseState.COMPLETED,
          eR = ep || eh,
          [eM, eg] = (0, x.useSubscriptionInvoicePreview)({
            items: eO,
            renewal: !1,
            preventFetch: eR,
            applyEntitlements: !0,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            trialId: et,
            metadata: er,
          }),
          [ex, ev] = (0, x.useSubscriptionInvoicePreview)({
            items: eO,
            renewal: !0,
            preventFetch: eR,
            trialId: et,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            metadata: er,
          }),
          [ey, eL] = (0, x.useSubscriptionInvoicePreview)({
            items: [
              { planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, quantity: 1 },
            ],
            renewal: !0,
            preventFetch: !eA,
            trialId: et,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
            metadata: er,
          }),
          [eb, ej] = (0, x.useOneTimePurchaseInvoicePreview)({
            paymentSourceId: V.paymentSourceId,
            skuId: em,
            subscriptionPlanId: Z,
            preventFetch: !ep || eh,
          }),
          eG = ep && (0, h.shouldShowCustomGiftExperience)(eN),
          eD = null !== (a = null != eg ? eg : ev) && void 0 !== a ? a : eL,
          eU = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
          eB = V.paymentSourceId,
          { hasEntitlements: eF, entitlements: ek } = (0,
          D.useSubscriptionEntitlements)(eC.id, ep),
          eY = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
          ew = (0, S.checkNoPaymentTrialEnabled)(et, eB, Z),
          eH = (0, P.inOneStepSubscriptionCheckout)({
            isTrial: eu,
            isGift: ep,
            selectedSkuId: em,
            startedPaymentFlowWithPaymentSources: eI.current,
          }),
          [eW, eZ] = r.useState(null == eM ? void 0 : eM.subscriptionPeriodEnd);
        r.useEffect(() => {
          null == eW && eZ(null == eM ? void 0 : eM.subscriptionPeriodEnd);
        }, [null == eM ? void 0 : eM.subscriptionPeriodEnd, eW]);
        let eK = r.useMemo(
            () =>
              (0, R.getPremiumPlanOptions)({
                skuId: em,
                isPremium: eE,
                multiMonthPlans: [],
                currentSubscription: ef,
                isGift: ep,
                isEligibleForTrial: eu,
                defaultPlanId: e_,
                defaultToMonthlyPlan: !1,
              }),
            [em, ef, ep, e_, eE, eu]
          ),
          eV = (0, P.planSwitchLoadingShowSpinner)(eH, eM, eC);
        if (null != eD) {
          let e = eD.message;
          return (
            eD.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE &&
              (e = Y.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY),
            (0, s.jsx)(o.FormErrorBlock, { children: e })
          );
        }
        if (ep)
          W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
            paymentSourceId: V.paymentSourceId,
            plan: eC,
            className: w.invoice,
            isPrepaidPaymentSource: eY,
            isCustomGift: eG,
            invoicePreview: eb,
          });
        else if (eu && null != eM)
          W = (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(y.PremiumInvoiceTableDivider, {
                negativeMarginTop: !0,
              }),
              (0, s.jsxs)(y.PremiumInvoiceTable, {
                className: w.invoice,
                children: [
                  (0, s.jsxs)("div", {
                    className: w.trialPriceLine,
                    children: [
                      (0, s.jsx)(o.Text, {
                        variant: "text-md/bold",
                        children:
                          Y.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                      }),
                      (0, s.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children:
                          Y.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                            price: (0, M.formatPrice)(0, eM.currency, {
                              maximumFractionDigits: 0,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: w.afterTrialPriceLine,
                    children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
                      invoice: eM,
                      plan: eC,
                    }),
                  }),
                ],
              }),
            ],
          });
        else {
          if (null == eM || null == ex || eV)
            return (0, s.jsx)("div", {
              className: w.spinnerWrapper,
              children: (0, s.jsx)(o.Spinner, {}),
            });
          eu &&
            eM.subscriptionPeriodEnd !== ex.subscriptionPeriodEnd &&
            (H = eM.subscriptionPeriodEnd),
            (W = (0, s.jsxs)(y.PremiumInvoiceTable, {
              className: w.invoice,
              children: [
                (0, s.jsx)(y.PremiumInvoiceTableHeader, {
                  children:
                    Y.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                  invoice: eM,
                  newPlan: eC,
                  isPrepaidPaymentSource: eY,
                  referralTrialOfferId: ei,
                }),
                eY
                  ? null
                  : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
                      renewalInvoice: ex,
                      isTrial: eu,
                      priceOptions: V,
                      overrideRenewalDate: H,
                      trialFooterMessageOverride: en,
                      hideSubscriptionDetails: el,
                    }),
              ],
            }));
        }
        let ez = i.CountryCodesSets.EEA_COUNTRIES.has(
            A.default.ipCountryCodeWithFallback
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
              let { intervalType: e, intervalCount: l } =
                  R.default.getIntervalForInvoice(t),
                i = (0, M.formatRate)(
                  (0, M.formatPrice)(t.total, t.currency),
                  e,
                  l
                ),
                u = null != n ? n : t.subscriptionPeriodEnd;
              (s =
                Y.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format(
                  {
                    termsURL: F.MarketingURLs.TERMS,
                    paidURL: F.MarketingURLs.PAID_TERMS,
                    rate: i,
                    renewalDate: u,
                  }
                )),
                (r = w.trialCheckbox),
                (a = w.trialCheckboxLabel);
            }
            return {
              checkboxLabel: s,
              checkboxClassname: r,
              checkboxLabelClassname: a,
            };
          })(null != eu && eu, ex, H),
          eQ = Y.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format(
            { planName: eC.name }
          );
        return (
          ep && !eG
            ? (eQ = Y.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT)
            : ep && eG
              ? (eQ = "")
              : (0, R.isPremiumSubscriptionPlan)(eC.id) &&
                (eQ = R.default.getBillingReviewSubheader(null, eC)),
          ew
            ? null
            : (0, s.jsxs)("div", {
                className: w.stepBody,
                children: [
                  null != es &&
                    (0, s.jsxs)("div", {
                      className: w.reviewWarningMessageContainer,
                      children: [
                        (0, s.jsx)(O.default, {
                          color: c.default.unsafe_rawColors.YELLOW_300.css,
                          width: 20,
                          height: 20,
                        }),
                        (0, s.jsx)(o.Text, {
                          className: w.reviewWarningMessage,
                          variant: "text-sm/normal",
                          children: es,
                        }),
                      ],
                    }),
                  eH &&
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)(y.PremiumInvoiceTableDivider, {
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
                          discountInvoiceItems: eA
                            ? null == ey
                              ? void 0
                              : ey.invoiceItems
                            : void 0,
                          handleClose: eo,
                        }),
                        (0, s.jsx)(y.PremiumInvoiceTableDivider, {}),
                      ],
                    }),
                  !eu &&
                    (0, s.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H5,
                      children: eQ,
                    }),
                  eG &&
                    null != eS &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(b.default, {
                          defaultAnimationState: g.AnimationState.LOOP,
                          giftStyle: eS,
                          shouldAnimate: !0,
                          className: w.giftMainAnimation,
                        }),
                        (0, s.jsx)(U.SendGiftToUser, { giftRecipient: eN }),
                      ],
                    }),
                  W,
                  (0, s.jsxs)("div", {
                    className: w.paymentSourceWrapper,
                    children: [
                      eu
                        ? (0, s.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            className: w.formTitle,
                            children:
                              Y.default.Messages.BILLING_STEP_PAYMENT_METHOD,
                          })
                        : (0, s.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children:
                              Y.default.Messages
                                .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                          }),
                      (0, s.jsx)(m.default, {
                        paymentSources: Object.values(K),
                        selectedPaymentSourceId: eB,
                        prependOption:
                          eF && !eu
                            ? {
                                label:
                                  Y.default.Messages
                                    .ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null,
                              }
                            : null,
                        onChange: X,
                        onPaymentSourceAdd: q,
                        hidePersonalInformation: eU,
                        isTrial: eu,
                      }),
                      eF && null == eB
                        ? (0, s.jsx)("div", {
                            className: w.paymentSourceOptionalWarning,
                            children:
                              Y.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format(
                                { months: ek.length }
                              ),
                          })
                        : null,
                      ec
                        ? null
                        : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: w.currencyWrapper,
                            children: [
                              (0, s.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H5,
                                children: Y.default.Messages.PAYMENT_CURRENCY,
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
                    children: (0, s.jsx)(_.default, {
                      onChange: Q,
                      forceShow: !0,
                      checkboxLabel: eJ,
                      checkboxClassname: eX,
                      checkboxLabelClassname: eq,
                      finePrint:
                        null != en
                          ? en
                          : (0, s.jsx)(f.default, {
                              hide: eu || ec,
                              subscriptionPlan: eC,
                              renewalInvoice: ex,
                              isGift: ep,
                              paymentSourceType:
                                null === (n = K[null != eB ? eB : ""]) ||
                                void 0 === n
                                  ? void 0
                                  : n.type,
                              isEmbeddedIAP: ed,
                              basePrice: (0, R.getPrice)(eC.id, !1, ep, V),
                            }),
                      showPricingLink: eC.currency !== k.CurrencyCodes.USD,
                      showWithdrawalWaiver: ez,
                      disabled: eh,
                      isTrial: eu && null == en,
                      isDiscount: ec,
                      subscriptionPlan: eC,
                      isGift: ep,
                    }),
                  }),
                ],
              })
        );
      }
    },
    891653: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("77078"),
        i = n("216422"),
        u = n("782340"),
        c = n("321562");
      function o(e) {
        let {
          text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
          className: n,
        } = e;
        return (0, s.jsx)(l.Tooltip, {
          text: t,
          children: e =>
            (0, s.jsx)(l.Clickable, {
              ...e,
              children: (0, s.jsx)(i.default, {
                className: a(c.nitroWheel, n),
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
            return f;
          },
        }),
        n("781738");
      var s = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("77078"),
        i = n("254490"),
        u = n("891653"),
        c = n("632892"),
        o = n("881049");
      function d(e) {
        let { errors: t } = e;
        return (0, s.jsx)(s.Fragment, {
          children: t.map((e, t) =>
            (0, s.jsx)(
              l.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: o.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, e => {
                  let t = 1024 * parseInt(e, 10);
                  return isNaN(t) ? e : (0, i.sizeString)(t);
                }),
              },
              t
            )
          ),
        });
      }
      function f(e) {
        let {
          title: t,
          titleIcon: n,
          titleId: r,
          description: i,
          children: f,
          className: m,
          errors: _,
          disabled: E = !1,
          hideDivider: I = !1,
          showBorder: p = !1,
          borderType: N,
          hasBackground: S = !1,
          forcedDivider: P = !1,
          showPremiumIcon: T = !1,
        } = e;
        return (0, s.jsx)("div", {
          className: a(o.customizationSection, m, {
            [o.disabled]: E,
            [o.hideDivider]: I,
            [o.showBorder]: p,
            [o.withDivider]: P,
          }),
          children: (0, s.jsxs)(c.default, {
            className: o.customizationSectionBorder,
            backgroundClassName: o.customizationSectionBackground,
            isShown: p,
            type: N,
            hasBackground: S,
            children: [
              (0, s.jsxs)(l.FormTitle, {
                className: o.title,
                id: r,
                children: [t, T && (0, s.jsx)(u.default, {}), n],
              }),
              null != i
                ? (0, s.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: o.sectionDescription,
                    children: i,
                  })
                : null,
              f,
              null != _ && (0, s.jsx)(d, { errors: _ }),
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
        l = n("884691"),
        i = n("414456"),
        u = n.n(i),
        c = n("834832");
      ((s = r || (r = {})).PREMIUM = "premium"), (s.LIMITED = "limited");
      let o = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      var d = l.forwardRef(function (e, t) {
        let {
          children: n,
          type: s = "premium",
          isShown: r,
          hasBackground: l = !1,
          className: i,
          backgroundClassName: d,
        } = e;
        if (!r) return (0, a.jsx)(a.Fragment, { children: n });
        let { border: f, background: m } = o[s];
        return (0, a.jsx)("div", {
          ref: t,
          className: u(f, i),
          children: (0, a.jsx)("div", {
            className: u(l ? m : c.background, d),
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
            return _;
          },
        }),
        n("222007");
      var s = n("37983"),
        r = n("884691"),
        a = n("669491"),
        l = n("292915"),
        i = n("77078"),
        u = n("389480"),
        c = n("191191"),
        o = n("782340"),
        d = n("969242");
      let f = [54, 8, 8, 8];
      function m(e) {
        let { onSelect: t, sound: n } = e,
          [m, _] = r.useState(!1);
        function E(e) {
          _(!1), null == t || t(e);
        }
        let I = e =>
          (0, s.jsxs)("div", {
            className: d.customGiftHeader,
            children: [
              (0, s.jsxs)("div", {
                className: d.customGiftHeaderText,
                children: [
                  (0, s.jsx)(i.Text, {
                    variant: "text-md/bold",
                    children: o.default.Messages.GIFT_SELECT_SOUND,
                  }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children:
                      o.default.Messages
                        .GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION,
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: d.searchAndSound, children: e }),
            ],
          });
        return (0, s.jsx)(i.Popout, {
          shouldShow: m,
          position: "bottom",
          align: "left",
          onRequestClose: () => _(!1),
          renderPopout: e => {
            let { closePopout: t } = e;
            return (0, s.jsx)(i.Dialog, {
              children: (0, s.jsx)(c.default, {
                suppressPlaySound: !0,
                shouldShowUpsell: !1,
                guildId: null,
                channel: null,
                onClose: t,
                onSelect: E,
                analyticsSource: "gift soundboard",
                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                listPadding: f,
                renderHeader: I,
                defaultSoundsOnly: !0,
              }),
            });
          },
          children: () =>
            (0, s.jsx)(i.Clickable, {
              className: d.sound,
              onClick: () => _(!0),
              children:
                null == n
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(l.SoundboardIcon, {
                          color: a.default.colors.WHITE,
                          className: d.soundIcon,
                          width: 14,
                          height: 14,
                        }),
                        (0, s.jsx)(i.Text, {
                          className: d.text,
                          variant: "text-sm/semibold",
                          children: o.default.Messages.GIFT_SELECT_SOUND,
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(i.Text, {
                          className: d.textSelected,
                          variant: "text-sm/semibold",
                          children: n.emojiName,
                        }),
                        (0, s.jsx)(i.Text, {
                          className: d.text,
                          variant: "text-sm/semibold",
                          children: n.name,
                        }),
                      ],
                    }),
            }),
        });
      }
      function _(e) {
        let { sound: t, onSelect: n } = e;
        return (0, s.jsx)("div", {
          className: d.container,
          children: (0, s.jsx)(m, { onSelect: n, sound: t }),
        });
      }
    },
    834179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("763377"),
        l = n("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(i),
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
    93510: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleQuestionIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: i = "",
          color: u = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    696597: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShopIcon: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
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
              fill: "string" == typeof l ? l : l.css,
              d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
              className: i,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=82526.a4b1a1e6385e6d79be3f.js.map
