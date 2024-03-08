(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37961"],
  {
    93902: function (e, t, n) {
      "use strict";
      e.exports = n.p + "de1981a6479d060d8ebd.png";
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
      var i = n("884691"),
        r = n("65597"),
        a = n("552712"),
        l = n("21526"),
        s = n("853987"),
        u = n("49111");
      function o(e) {
        let t = (0, r.default)([a.default], () =>
            null != e ? a.default.get(e) : null
          ),
          n = null != t && t.productLine !== u.SKUProductLines.COLLECTIBLES,
          [o, c] = (0, r.useStateFromStoresArray)([s.default], () => [
            s.default.isFetching,
            s.default.getProduct(e),
          ]);
        return (
          (0, i.useEffect)(() => {
            null != e &&
              null == c &&
              !n &&
              !o &&
              (0, l.fetchCollectiblesProduct)(e);
          }, [e, c, n, o]),
          { product: c, isFetching: o }
        );
      }
    },
    99836: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalReviewStep: function () {
            return N;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("37983"),
        r = n("884691"),
        a = n("627445"),
        l = n.n(a),
        s = n("612039"),
        u = n("916187"),
        o = n("154889"),
        c = n("917247"),
        d = n("527866"),
        p = n("826795"),
        m = n("659632"),
        S = n("635357"),
        f = n("642906"),
        P = n("85336"),
        I = n("310093"),
        h = n("367767"),
        E = n("176108"),
        T = n("298392"),
        v = n("153727"),
        y = n("39065"),
        x = n("650484"),
        _ = n("646718"),
        b = n("843455"),
        C = n("782340");
      function N(e) {
        var t, n;
        let a,
          {
            handleStepChange: N,
            trialId: g,
            trialFooterMessageOverride: L,
            reviewWarningMessage: A,
            planGroup: j,
            openInvoiceId: M,
            analyticsData: R,
            analyticsLocation: w,
            referralTrialOfferId: O,
            initialPlanId: F,
            subscriptionTier: U,
            handleClose: G,
          } = e,
          {
            activeSubscription: D,
            setUpdatedSubscription: B,
            contextMetadata: W,
            currencies: k,
            paymentSourceId: H,
            paymentSources: Y,
            priceOptions: V,
            purchaseError: z,
            purchaseTokenAuthState: Z,
            selectedPlan: K,
            selectedSkuId: Q,
            setCurrency: J,
            setPaymentSourceId: X,
            setPurchaseState: q,
            setPurchaseError: $,
            step: ee,
            purchaseState: et,
            isPremium: en,
            setHasAcceptedTerms: ei,
            purchaseType: er,
            setEntitlementsGranted: ea,
            startedPaymentFlowWithPaymentSourcesRef: el,
          } = (0, f.usePaymentContext)(),
          {
            isGift: es,
            giftMessage: eu,
            giftRecipient: eo,
          } = (0, S.useGiftContext)();
        l(null != ee, "Step should be set");
        let ec = r.useRef(null),
          [ed, ep] = (0, s.default)(!1, 500),
          em = null !== (n = null != g ? g : O) && void 0 !== n ? n : null,
          eS =
            null != em &&
            (!en || (0, _.SubscriptionTrials)[em].skus.includes(Q))
              ? em
              : null,
          ef = (0, c.usePremiumTrialOffer)(O),
          eP = (0, o.usePremiumDiscountOffer)(),
          eI = { user_trial_offer_id: null == ef ? void 0 : ef.id };
        r.useEffect(() => {
          null != z &&
            null != ec.current &&
            ec.current.scrollIntoView({ behavior: "smooth" });
        }, [z]);
        let eh = r.useCallback(
            (e, t) => {
              B(e),
                null != t && ea(t),
                N(P.Step.CONFIRM, {
                  fulfillment: { subscription: e, entitlements: t },
                });
            },
            [N, B, ea]
          ),
          eE = null != H ? Y[H] : null,
          eT =
            null != K &&
            _.MULTI_MONTH_PLANS.has(K.id) &&
            null != eE &&
            !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eE)
              ? Error(
                  C.default.Messages
                    .BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE
                )
              : null,
          ev = r.useRef(null),
          [ey, ex] = r.useState(null),
          e_ =
            !es &&
            null != ef &&
            null != Q &&
            (0, _.SubscriptionTrials)[ef.trial_id].skus.includes(Q),
          eb =
            null == eP
              ? void 0
              : null === (t = eP.discount) || void 0 === t
                ? void 0
                : t.plan_ids,
          eC =
            !es && null != eP && null != eb && null != K && eb.includes(K.id),
          eN = es && (0, m.shouldShowCustomGiftExperience)(eo),
          eg = null == F && null == U && er === b.PurchaseTypes.SUBSCRIPTION,
          eL = (0, E.inOneStepSubscriptionCheckout)({
            isTrial: e_,
            isGift: es,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: el.current,
          }),
          eA = es && er === b.PurchaseTypes.ONE_TIME,
          ej = eA || (eL ? eg && en : en),
          eM = r.useCallback(() => {
            if (eL) {
              N(P.Step.SKU_SELECT);
              return;
            }
            return eA ? N(P.Step.GIFT_CUSTOMIZATION) : N(P.Step.PLAN_SELECT);
          }, [N, eL, eA]);
        return (
          er === b.PurchaseTypes.ONE_TIME
            ? (a = (0, i.jsx)(T.default, {
                hasLegalTermsFlash: ed,
                legalTermsNodeRef: ev,
                onPaymentSourceChange: e => X(null != e ? e.id : null),
                handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS),
              }))
            : null == D || es
              ? (l(null != K, "Expected plan to be selected"),
                (a = (0, i.jsx)(d.default, {
                  selectedPlanId: K.id,
                  paymentSources: Y,
                  onPaymentSourceChange: e => X(null != e ? e.id : null),
                  priceOptions: V,
                  currencies: k,
                  onCurrencyChange: e => J(e),
                  handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS),
                  setHasAcceptedTerms: ei,
                  legalTermsNodeRef: ev,
                  hasLegalTermsFlash: ed,
                  trialId: eS,
                  trialFooterMessageOverride: L,
                  reviewWarningMessage: A,
                  purchaseState: et,
                  referralTrialOfferId: O,
                  isTrial: e_ || (null != g && null != L),
                  isDiscount: eC,
                  handleClose: G,
                })))
              : (l(null != K, "Expected plan to be selected"),
                (a = (0, i.jsx)(p.default, {
                  premiumSubscription: D,
                  paymentSources: Y,
                  priceOptions: V,
                  onPaymentSourceChange: e => {
                    X(null != e ? e.id : null);
                  },
                  onPaymentSourceAdd: () => {
                    N(P.Step.ADD_PAYMENT_STEPS);
                  },
                  planId: K.id,
                  setHasAcceptedTerms: ei,
                  legalTermsNodeRef: ev,
                  hasLegalTermsFlash: ed,
                  onInvoiceError: e => ex(e),
                  planGroup: j,
                  currencies: k,
                  onCurrencyChange: e => J(e),
                  hasOpenInvoice: null != M,
                  purchaseState: et,
                  handleClose: G,
                }))),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(I.GiftNote, { giftMessage: eu }),
              !eN && (0, i.jsx)(v.default, { isEligibleForTrial: e_ }),
              (0, i.jsxs)(x.PaymentPortalBody, {
                children: [(0, i.jsx)(h.default, {}), a],
              }),
              (0, i.jsx)(x.PaymentPortalFooter, {
                children: (0, i.jsx)(y.default, {
                  premiumSubscription: null != D ? D : null,
                  setPurchaseState: q,
                  onBack: eM,
                  onNext: eh,
                  onPurchaseError: e => $(e),
                  legalTermsNodeRef: ev,
                  flashLegalTerms: () => ep(!0),
                  invoiceError: ey,
                  planError: eT,
                  analyticsLocation: w,
                  baseAnalyticsData: R,
                  flowStartTime: W.startTime,
                  trialId: eS,
                  planGroup: j,
                  purchaseTokenAuthState: Z,
                  openInvoiceId: M,
                  backButtonEligible: ej,
                  metadata: eI,
                  isTrial: e_,
                  disablePurchase:
                    null != eE &&
                    er === b.PurchaseTypes.SUBSCRIPTION &&
                    e_ &&
                    !eE.canRedeemTrial(),
                }),
              }),
            ],
          })
        );
      }
    },
    310093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GiftNote: function () {
            return c;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("812952"),
        a = n("978679"),
        l = n("659632"),
        s = n("635357"),
        u = n("782340"),
        o = n("771776");
      function c(e) {
        let { giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
          { isGift: n, giftRecipient: c } = (0, s.useGiftContext)();
        return !n || (0, l.shouldShowCustomGiftExperience)(c)
          ? null
          : (0, i.jsx)(r.default, {
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
            return w;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("627445"),
        a = n.n(r),
        l = n("976979"),
        s = n("65597"),
        u = n("77078"),
        o = n("703332"),
        c = n("812952"),
        d = n("740055"),
        p = n("545876"),
        m = n("84460"),
        S = n("883662"),
        f = n("623003"),
        P = n("617223"),
        I = n("102985"),
        h = n("160299"),
        E = n("622839"),
        T = n("167726"),
        v = n("953109"),
        y = n("315585"),
        x = n("659632"),
        _ = n("153160"),
        b = n("635357"),
        C = n("642906"),
        N = n("286350"),
        g = n("628135"),
        L = n("49111"),
        A = n("782340"),
        j = n("816845");
      function M(e) {
        let { sku: t, skuPricePreview: n } = e;
        a(null != n.amount, "SKU must have a price set.");
        let r = n.amount - n.tax;
        return !n.tax_inclusive && n.tax > 0
          ? (0, i.jsxs)(S.PremiumInvoiceTable, {
              className: j.invoice,
              children: [
                (0, i.jsx)(S.PremiumInvoiceTableRow, {
                  label: t.name,
                  value: (0, _.formatPrice)(r, n.currency),
                  className: j.subscriptionCostRow,
                }),
                (0, i.jsx)(S.PremiumInvoiceTableRow, {
                  label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                  value: (0, _.formatPrice)(n.tax, n.currency),
                  className: j.subscriptionCostRow,
                }),
                (0, i.jsx)(S.PremiumInvoiceTableDivider, {}),
                (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                  label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
                  value: (0, _.formatPrice)(n.amount, n.currency),
                  className: j.subscriptionCostRow,
                }),
              ],
            })
          : (0, i.jsx)(S.PremiumInvoiceTable, {
              className: j.invoice,
              children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
                label: t.name,
                value: (0, _.formatPrice)(n.amount, n.currency),
                className: j.subscriptionCostRow,
              }),
            });
      }
      function R(e) {
        let { application: t, sku: n, isEmbeddedIAP: r } = e;
        return !0 !== r
          ? null
          : (0, i.jsxs)("div", {
              className: j.skuHeading,
              children: [
                (0, i.jsx)(v.default, { game: t }),
                (0, i.jsx)(u.Heading, {
                  variant: "heading-lg/bold",
                  className: j.skuHeadingText,
                  children: n.name,
                }),
              ],
            });
      }
      function w(e) {
        let {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: r,
            handlePaymentSourceAdd: S,
          } = e,
          {
            application: v,
            purchaseState: _,
            paymentSources: w,
            paymentSourceId: O,
            setHasAcceptedTerms: F,
            skusById: U,
            skuPricePreviewsById: G,
            selectedSkuId: D,
            isEmbeddedIAP: B,
            purchaseType: W,
          } = (0, C.usePaymentContext)(),
          { isGift: k, giftRecipient: H } = (0, b.useGiftContext)(),
          Y = k && (0, x.shouldShowCustomGiftExperience)(H);
        a(null != D, "Expected selectedSkuId");
        let V = U[D],
          z = G[D],
          Z = null != O ? O : E.NO_PAYMENT_SOURCE,
          K = null != z ? z[Z] : null;
        a(null != V, "SKU must exist and be fetched."),
          a(null != v, "Application must exist.");
        let Q = (0, s.default)(
            [m.default, T.default],
            () =>
              T.default.inTestModeForApplication(v.id) ||
              m.default.inDevModeForApplication(v.id),
            [v.id]
          ),
          J = (0, s.default)([I.default], () => I.default.enabled),
          X = l.CountryCodesSets.EEA_COUNTRIES.has(
            h.default.ipCountryCodeWithFallback
          ),
          q =
            _ === N.PurchaseState.PURCHASING || _ === N.PurchaseState.COMPLETED,
          $ = null != O ? w[O].type : null;
        return (0, i.jsxs)("div", {
          className: j.stepBody,
          children: [
            Q &&
              (0, i.jsx)(
                c.default,
                {
                  icon: y.default,
                  iconSize: c.default.Sizes.SMALL,
                  color: c.default.Colors.WARNING,
                  className: j.errorBlock,
                  children:
                    A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE,
                },
                "TEST_MODE"
              ),
            (0, i.jsx)(R, { application: v, sku: V, isEmbeddedIAP: B }),
            Y && (0, i.jsx)(g.default, { sku: V }),
            null != H
              ? (0, i.jsx)(P.SendGiftToUser, { giftRecipient: H })
              : null,
            (0, i.jsx)(u.FormTitle, {
              tag: u.FormTitleTags.H5,
              children: k
                ? A.default.Messages.PREMIUM_GIFTING_BUTTON
                : A.default.Messages
                    .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
            }),
            null == K
              ? (0, i.jsx)(u.Spinner, {
                  type: u.Spinner.Type.WANDERING_CUBES,
                  className: j.invoiceSpinner,
                })
              : (0, i.jsx)(M, { sku: V, skuPricePreview: K }),
            (0, i.jsxs)("div", {
              className: j.paymentSourceWrapper,
              children: [
                (0, i.jsx)(u.FormTitle, {
                  tag: u.FormTitleTags.H5,
                  children:
                    A.default.Messages
                      .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                (0, i.jsx)(d.default, {
                  paymentSources: Object.values(w),
                  selectedPaymentSourceId: O,
                  onChange: r,
                  onPaymentSourceAdd: S,
                  hidePersonalInformation: J,
                }),
              ],
            }),
            (0, i.jsx)(f.default, {
              isActive: t,
              ref: n,
              children: (0, i.jsx)(p.default, {
                onChange: F,
                forceShow: !0,
                showWithdrawalWaiver: X,
                disabled: q,
                subscriptionPlan: null,
                finePrintClassname: j.fineprint,
                purchaseType: W,
                isGift: k,
                checkboxLabel:
                  V.productLine === L.SKUProductLines.COLLECTIBLES
                    ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format(
                        { paidURL: L.MarketingURLs.PAID_TERMS }
                      )
                    : void 0,
                finePrint: (0, i.jsx)(o.default, {
                  paymentSourceType: $,
                  isEmbeddedIAP: B,
                  purchaseType: W,
                  productLine: V.productLine,
                  isGift: k,
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
            return x;
          },
        }),
        n("794252");
      var i = n("37983");
      n("884691");
      var r = n("506838"),
        a = n("265586"),
        l = n("65597"),
        s = n("77078"),
        u = n("606292"),
        o = n("688318"),
        c = n("426188"),
        d = n("210721"),
        p = n("65324"),
        m = n("845962"),
        S = n("635471"),
        f = n("50885"),
        P = n("635357"),
        I = n("782340"),
        h = n("285311"),
        E = n("93902");
      let T = f.default.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function v(e) {
        let { avatarDecoration: t } = e,
          {
            avatarDecorationSrc: n,
            eventHandlers: r,
            avatarPlaceholderSrc: a,
          } = (0, o.default)({
            avatarDecorationOverride: t,
            size: (0, u.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_152),
          });
        return (0, i.jsx)("div", {
          className: h.giftMainAnimationWrapper,
          children: (0, i.jsx)(T, {
            ...r,
            avatarDecoration: n,
            src: a,
            className: h.avatar,
            size: s.AvatarSizes.SIZE_152,
            "aria-label": I.default.Messages.USER_SETTINGS_AVATAR,
          }),
        });
      }
      function y(e) {
        let { id: t } = e,
          n = (0, l.default)([m.default], () => {
            var e;
            return null === (e = m.default.getProfileEffectById(t)) ||
              void 0 === e
              ? void 0
              : e.config;
          });
        return (0, i.jsxs)("div", {
          className: h.profileEffectContainer,
          children: [
            (0, i.jsx)("img", {
              src: E,
              alt: null == n ? void 0 : n.accessibilityLabel,
              className: h.profileEffectBackground,
            }),
            (0, i.jsx)(S.default, { profileEffectId: t }),
          ],
        });
      }
      function x(e) {
        let { sku: t } = e,
          { selectedGiftStyle: n } = (0, P.useGiftContext)(),
          { product: l } = (0, c.useFetchCollectiblesProduct)(
            null == t ? void 0 : t.id
          ),
          s = null == l ? void 0 : l.items[0],
          u = (0, r.match)(s)
            .with({ type: a.CollectiblesItemType.AVATAR_DECORATION }, e =>
              (0, i.jsx)(v, { avatarDecoration: e })
            )
            .with({ type: a.CollectiblesItemType.PROFILE_EFFECT }, e =>
              (0, i.jsx)(y, { id: e.id })
            )
            .otherwise(() => null);
        return null != n && null == u
          ? (0, i.jsx)("div", {
              className: h.giftMainAnimationWrapper,
              children: (0, i.jsx)(p.default, {
                defaultAnimationState: d.AnimationState.LOOP,
                giftStyle: n,
                shouldAnimate: !0,
                className: h.giftMainAnimation,
              }),
            })
          : u;
      }
    },
    826795: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        a = n("627445"),
        l = n.n(a),
        s = n("976979"),
        u = n("446674"),
        o = n("77078"),
        c = n("335430"),
        d = n("703332"),
        p = n("740055"),
        m = n("545876"),
        S = n("812204"),
        f = n("685665"),
        P = n("635357"),
        I = n("642906"),
        h = n("286350"),
        E = n("176108"),
        T = n("102985"),
        v = n("160299"),
        y = n("10514"),
        x = n("719923"),
        _ = n("380186"),
        b = n("809071"),
        C = n("883662"),
        N = n("991329"),
        g = n("623003"),
        L = n("570727"),
        A = n("146163"),
        j = n("49111"),
        M = n("782340"),
        R = n("88613"),
        w = n("193692");
      function O(e) {
        var t;
        let n,
          {
            premiumSubscription: a,
            paymentSources: S,
            priceOptions: f,
            onPaymentSourceChange: b,
            onPaymentSourceAdd: N,
            planId: A,
            setHasAcceptedTerms: R,
            legalTermsNodeRef: O,
            hasLegalTermsFlash: B,
            onInvoiceError: W,
            planGroup: k,
            currencies: H,
            onCurrencyChange: Y,
            hasOpenInvoice: V,
            purchaseState: z,
            handleClose: Z,
          } = e,
          {
            selectedSkuId: K,
            defaultPlanId: Q,
            isPremium: J,
            startedPaymentFlowWithPaymentSourcesRef: X,
          } = (0, I.usePaymentContext)(),
          { isGift: q } = (0, P.useGiftContext)(),
          $ = f.paymentSourceId,
          ee = (0, u.useStateFromStores)([y.default], () => y.default.get(A));
        l(null != ee, "Missing newPlan");
        let et = (0, u.useStateFromStores)(
          [T.default],
          () => T.default.hidePersonalInformation
        );
        n = V
          ? M.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
          : (0, x.isPremiumSubscriptionPlan)(A)
            ? (0, x.getBillingReviewSubheader)(a, ee)
            : M.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                planName: ee.name,
              });
        let en = s.CountryCodesSets.EEA_COUNTRIES.has(
            v.default.ipCountryCodeWithFallback
          ),
          ei =
            z === h.PurchaseState.PURCHASING || z === h.PurchaseState.COMPLETED,
          er = (0, E.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: q,
            selectedSkuId: K,
            startedPaymentFlowWithPaymentSources: X.current,
          }),
          ea = r.useMemo(
            () =>
              (0, x.getPremiumPlanOptions)({
                skuId: K,
                isPremium: J,
                multiMonthPlans: [],
                currentSubscription: a,
                isGift: q,
                isEligibleForTrial: !1,
                defaultPlanId: Q,
                defaultToMonthlyPlan: !1,
              }),
            [K, a, Q, J, q]
          );
        return (0, i.jsxs)("div", {
          className: w.stepBody,
          children: [
            er &&
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(C.PremiumInvoiceTableDivider, {
                    negativeMarginBottom: !0,
                    negativeMarginTop: !0,
                  }),
                  (0, i.jsx)(L.PremiumSwitchPlanSelectBody, {
                    planOptions: ea,
                    eligibleForMultiMonthPlans: !1,
                    selectedPlanId: A,
                    showTotal: !1,
                    handleClose: Z,
                  }),
                  (0, i.jsx)(C.PremiumInvoiceTableDivider, {}),
                ],
              }),
            (0, i.jsx)(o.FormTitle, { tag: o.FormTitleTags.H5, children: n }),
            null != a
              ? V
                ? (0, i.jsx)(F, {
                    premiumSubscription: a,
                    onInvoiceError: W,
                    priceOptions: f,
                    preventFetch: !1,
                  })
                : (0, _.subscriptionCanSwitchImmediately)(a, A, k)
                  ? (0, i.jsx)(U, {
                      premiumSubscription: a,
                      newPlan: ee,
                      onInvoiceError: W,
                      planGroup: k,
                      priceOptions: f,
                      preventFetch: ei,
                    })
                  : (0, i.jsx)(D, {
                      premiumSubscription: a,
                      newPlan: ee,
                      planGroup: k,
                      priceOptions: f,
                      preventFetch: ei,
                    })
              : null,
            (0, i.jsxs)("div", {
              className: w.paymentSourceWrapper,
              children: [
                (0, i.jsx)(o.FormTitle, {
                  tag: o.FormTitleTags.H5,
                  children:
                    M.default.Messages
                      .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                (0, i.jsx)(p.default, {
                  paymentSources: Object.values(S),
                  selectedPaymentSourceId: $,
                  onChange: b,
                  onPaymentSourceAdd: N,
                  hidePersonalInformation: et,
                  disabled: ei,
                }),
              ],
            }),
            (0, i.jsxs)(c.CurrencyWrapper, {
              currencies: H,
              className: w.currencyWrapper,
              children: [
                (0, i.jsx)(o.FormTitle, {
                  tag: o.FormTitleTags.H5,
                  children: M.default.Messages.PAYMENT_CURRENCY,
                }),
                (0, i.jsx)(c.default, {
                  selectedCurrency: f.currency,
                  currencies: H,
                  onChange: Y,
                  disabled: ei,
                }),
              ],
            }),
            (0, i.jsx)(g.default, {
              isActive: B,
              ref: O,
              children:
                null != a && (0, _.subscriptionCanSwitchImmediately)(a, A, k)
                  ? (0, i.jsx)(G, {
                      premiumSubscription: a,
                      newPlan: ee,
                      onInvoiceError: W,
                      planGroup: k,
                      priceOptions: f,
                      preventFetch: ei,
                      disabled: ei,
                      isEEA: en,
                      paymentSources: S,
                      setHasAcceptedTerms: R,
                    })
                  : (0, i.jsx)(m.default, {
                      onChange: R,
                      finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: ee,
                        paymentSourceType:
                          null === (t = S[null != $ ? $ : ""]) || void 0 === t
                            ? void 0
                            : t.type,
                        basePrice: (0, x.getPrice)(ee.id, !1, q, f),
                        currentSubscription: a,
                        planGroup: k,
                      }),
                      forceShow: !0,
                      showPricingLink: ee.currency !== j.CurrencyCodes.USD,
                      showWithdrawalWaiver: en,
                      disabled: ei,
                      subscriptionPlan: ee,
                      currentSubscription: a,
                      planGroup: k,
                    }),
            }),
          ],
        });
      }
      function F(e) {
        let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: a,
            preventFetch: l,
          } = e,
          [s, u] = (0, b.useGetSubscriptionInvoice)({
            subscriptionId: t.id,
            preventFetch: l,
          });
        r.useEffect(() => {
          n(u);
        }, [n, u]);
        let c = (0, x.isPrepaidPaymentSource)(a.paymentSourceId);
        return null != s
          ? (0, i.jsxs)(C.PremiumInvoiceTable, {
              className: R.invoice,
              children: [
                (0, i.jsx)(A.PremiumSubscriptionCurrentInvoiceRows, {
                  invoice: s,
                  isPrepaidPaymentSource: c,
                }),
                (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                  premiumSubscription: t,
                  renewalInvoice: s,
                  isUpdate: !0,
                  isPrepaidPaymentSource: c,
                }),
              ],
            })
          : (0, i.jsx)(o.Spinner, {});
      }
      function U(e) {
        let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: a,
            planGroup: l,
            priceOptions: s,
            preventFetch: u,
          } = e,
          { selectedSkuId: c, startedPaymentFlowWithPaymentSourcesRef: d } = (0,
          I.usePaymentContext)(),
          { isGift: p } = (0, P.useGiftContext)(),
          { analyticsLocations: m } = (0, f.default)(),
          h = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)),
          [T, v] = (0, b.useSubscriptionInvoicePreview)({
            subscriptionId: t.id,
            items: h,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: u,
            analyticsLocations: m,
            analyticsLocation:
              S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
          }),
          [y, _] = (0, b.useSubscriptionInvoicePreview)({
            subscriptionId: t.id,
            items: h,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: u,
            analyticsLocations: m,
            analyticsLocation:
              S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          }),
          N = null != v ? v : _;
        if (
          (r.useEffect(() => {
            a(N);
          }, [a, N]),
          null != N)
        )
          return (0, i.jsx)(o.FormErrorBlock, { children: N.message });
        let g = (0, E.inOneStepSubscriptionCheckout)({
            isTrial: !1,
            isGift: p,
            selectedSkuId: c,
            startedPaymentFlowWithPaymentSources: d.current,
          }),
          L = (0, E.planSwitchLoadingShowSpinner)(g, T, n);
        if (null == T || null == y || L)
          return (0, i.jsx)(o.Spinner, { className: w.spinner });
        let j = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(A.SubscriptionPeriodResetNotice, {
              proratedInvoice: T,
              renewalInvoice: y,
            }),
            (0, i.jsxs)(C.PremiumInvoiceTable, {
              className: w.invoice,
              children: [
                (0, i.jsx)(C.PremiumInvoiceTableHeader, {
                  children:
                    M.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS,
                }),
                (0, i.jsx)(A.PremiumSubscriptionChangePlanInvoiceRows, {
                  invoice: T,
                  newPlan: n,
                  isPrepaidPaymentSource: j,
                }),
                (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                  premiumSubscription: t,
                  proratedInvoice: T,
                  renewalInvoice: y,
                  isUpdate: !0,
                  isPrepaidPaymentSource: j,
                }),
              ],
            }),
          ],
        });
      }
      function G(e) {
        var t, n;
        let a,
          {
            premiumSubscription: l,
            newPlan: s,
            onInvoiceError: u,
            planGroup: c,
            priceOptions: p,
            preventFetch: P,
            disabled: I,
            isEEA: h,
            paymentSources: E,
            setHasAcceptedTerms: T,
          } = e,
          { analyticsLocations: v } = (0, f.default)(),
          y = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, s.id, 1, new Set(c)),
          [_, C] = (0, b.useSubscriptionInvoicePreview)({
            subscriptionId: l.id,
            items: y,
            renewal: !0,
            paymentSourceId: p.paymentSourceId,
            currency: p.currency,
            preventFetch: P,
            analyticsLocations: v,
            analyticsLocation:
              S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW,
          });
        return (r.useEffect(() => {
          u(C);
        }, [u, C]),
        null != C)
          ? (0, i.jsx)(o.FormErrorBlock, { children: C.message })
          : (null != _ &&
                (a = {
                  amount: _.total,
                  currency: _.currency,
                  tax: _.tax,
                  taxInclusive: _.taxInclusive,
                }),
              null == a)
            ? null
            : (0, i.jsx)(m.default, {
                onChange: T,
                finePrint: (0, i.jsx)(d.default, {
                  subscriptionPlan: s,
                  paymentSourceType:
                    null ===
                      (t =
                        E[
                          null !== (n = p.paymentSourceId) && void 0 !== n
                            ? n
                            : ""
                        ]) || void 0 === t
                      ? void 0
                      : t.type,
                  basePrice: a,
                  currentSubscription: l,
                  planGroup: c,
                }),
                forceShow: !0,
                showPricingLink: s.currency !== j.CurrencyCodes.USD,
                showWithdrawalWaiver: h,
                disabled: I,
                subscriptionPlan: s,
                currentSubscription: l,
                planGroup: c,
              });
      }
      function D(e) {
        let t,
          {
            premiumSubscription: n,
            newPlan: r,
            planGroup: a,
            priceOptions: l,
            preventFetch: s,
          } = e,
          { analyticsLocations: u } = (0, f.default)(),
          [c, d] = (0, b.useSubscriptionInvoicePreview)({
            subscriptionId: n.id,
            items: (0, x.getItemsWithUpsertedPlanIdForGroup)(
              n,
              r.id,
              1,
              new Set(a)
            ),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: s,
            analyticsLocations: u,
            analyticsLocation:
              "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
          });
        if (null != d)
          return (0, i.jsx)(o.FormErrorBlock, { children: d.message });
        if (null == c)
          return (0, i.jsx)("div", { children: (0, i.jsx)(o.Spinner, {}) });
        t =
          n.type === j.SubscriptionTypes.PREMIUM
            ? (0, x.getDisplayName)(r.id)
            : r.name;
        let p = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
        return (0, i.jsxs)("div", {
          className: w.bodyText,
          children: [
            (0, i.jsx)("div", {
              className: R.renewalInvoiceDate,
              children:
                M.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                  renewalDate: c.subscriptionPeriodStart,
                }),
            }),
            (0, i.jsxs)(C.PremiumInvoiceTable, {
              className: w.invoice,
              children: [
                (0, i.jsx)(C.PremiumInvoiceTableHeader, {
                  children: M.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                }),
                (0, i.jsx)(C.PremiumInvoiceTableRow, {
                  label: t,
                  value: (0, x.getFormattedRateForPlan)(r, l, !0),
                }),
                (0, i.jsx)(N.default, { invoice: c }),
                (0, i.jsx)(C.PremiumInvoiceTableDivider, {}),
                (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                  premiumSubscription: n,
                  renewalInvoice: c,
                  isUpdate: !0,
                  isPrepaidPaymentSource: p,
                }),
              ],
            }),
          ],
        });
      }
    },
    315585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function a(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: a = "currentColor",
          foreground: l,
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: l,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=37961.d5d7f0b0829055ae7393.js.map
