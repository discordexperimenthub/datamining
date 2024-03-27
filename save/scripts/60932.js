(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60932"],
  {
    584503: function (e, t, n) {
      "use strict";
      e.exports = n.p + "55fda0412a4ff4072236.svg";
    },
    45656: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f4d8991602d4587f573e.svg";
    },
    856413: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("70102");
      var l = n("884691"),
        u = n("286235"),
        a = (e, t, n, a, i) => {
          let s = (0, l.useRef)(!1);
          (0, l.useEffect)(() => {
            if (t && !s.current) {
              s.current = !0;
              let t = setTimeout(() => {
                let t = Error("".concat(e, " is taking too long to load."));
                u.default.setExtra({ loadingState: a, loadingTimeSeconds: n }),
                  u.default.captureException(t, {
                    ...i,
                    tags: { ...(null == i ? void 0 : i.tags) },
                  });
              }, 1e3 * n);
              return () => {
                clearTimeout(t);
              };
            }
          }, [t, n]);
        };
    },
    245187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BlockedPaymentsContentSettings: function () {
            return M;
          },
          BlockedPaymentsContentModal: function () {
            return A;
          },
          BlockedPaymentsWarning: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("414456"),
        a = n.n(u),
        i = n("669491"),
        s = n("819855"),
        r = n("77078"),
        o = n("841098"),
        c = n("145131"),
        d = n("423487"),
        f = n("701909"),
        _ = n("619935"),
        E = n("49111"),
        p = n("782340"),
        m = n("872773"),
        S = n("584503"),
        P = n("45656");
      function T(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          u = (0, s.isThemeDark)(n) ? S : P;
        return (0, l.jsxs)("div", {
          className: a(m.container, t),
          children: [
            (0, l.jsx)(r.Heading, {
              className: m.header,
              variant: "heading-xl/semibold",
              children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, l.jsxs)(r.Text, {
              className: m.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, l.jsx)("p", {
                  children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, l.jsx)("p", {
                  children:
                    p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                      helpdeskArticle: f.default.getArticleURL(
                        E.HelpdeskArticles.BLOCKED_PAYMENTS
                      ),
                    }),
                }),
              ],
            }),
            (0, l.jsx)("img", {
              src: u,
              className: m.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function M() {
        return (0, l.jsx)(T, { className: m.settings });
      }
      function A(e) {
        let { onClose: t } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.ModalHeader, {
              className: m.blockedPaymentsModalHeader,
              justify: c.default.Justify.END,
              children: (0, l.jsx)(r.ModalCloseButton, { onClick: t }),
            }),
            (0, l.jsx)(r.ModalContent, {
              className: m.blockedPaymentsModalContent,
              children: (0, l.jsx)(T, { className: m.modal }),
            }),
          ],
        });
      }
      function I(e) {
        let { className: t } = e,
          n = (0, _.useBlockedPaymentsConfig)();
        return n
          ? (0, l.jsxs)(r.Card, {
              className: a(m.blockedPaymentsWarning, t),
              type: r.Card.Types.CUSTOM,
              children: [
                (0, l.jsx)(d.default, {
                  className: m.blockedPaymentsWarningIcon,
                  color: i.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  children:
                    p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format(
                      {
                        helpdeskArticle: f.default.getArticleURL(
                          E.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    ),
                }),
              ],
            })
          : null;
      }
    },
    996808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("884691"),
        u = n("913144");
      function a(e) {
        let t = (0, l.useRef)(e);
        (0, l.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, l.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && t.current();
              }
              return (
                u.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                () => {
                  u.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                }
              );
            }
          }, []);
      }
    },
    385179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModal: function () {
            return Y;
          },
          PaymentPredicateStep: function () {
            return j;
          },
        }),
        n("222007");
      var l = n("37983"),
        u = n("884691"),
        a = n("414456"),
        i = n.n(a),
        s = n("775560"),
        r = n("65597"),
        o = n("77078"),
        c = n("316718"),
        d = n("856413"),
        f = n("245187"),
        _ = n("996808"),
        E = n("669073"),
        p = n("154889"),
        m = n("877261"),
        S = n("429070"),
        P = n("661128"),
        T = n("10514"),
        M = n("437712"),
        A = n("599110"),
        I = n("659632"),
        N = n("719923"),
        y = n("635357"),
        h = n("642906"),
        C = n("85336"),
        R = n("286350"),
        O = n("359371"),
        v = n("176108"),
        g = n("254350"),
        L = n("622271"),
        k = n("628738"),
        x = n("650484"),
        U = n("49111"),
        b = n("646718"),
        D = n("782340"),
        G = n("283750");
      function Y(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            analyticsObject: a,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: c = U.SubscriptionTypes.PREMIUM,
            onComplete: d,
            transitionState: f,
            initialPlanId: E,
            subscriptionTier: M,
            onClose: v,
            trialId: g,
            trialFooterMessageOverride: k,
            reviewWarningMessage: Y,
            planGroup: j = b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
            openInvoiceId: H,
            onSubscriptionConfirmation: B,
            renderPurchaseConfirmation: w,
            postSuccessGuild: K,
            followupSKUInfo: F,
            renderHeader: W,
            applicationId: V,
            guildId: z,
            referralTrialOfferId: J,
            skuId: X,
            shakeWhilePurchasing: q = !1,
            isLargeModal: Q = !1,
            hideShadow: Z = !1,
            returnRef: $,
            skipConfirm: ee = !1,
          } = e,
          {
            activitySessionId: et,
            purchaseState: en,
            setPurchaseState: el,
            selectedSkuId: eu,
            setSelectedSkuId: ea,
            selectedPlan: ei,
            setSelectedPlanId: es,
            setStep: er,
            setPurchaseError: eo,
            paymentAuthenticationState: ec,
            step: ed,
            contextMetadata: ef,
            purchaseTokenAuthState: e_,
            activeSubscription: eE,
            priceOptions: ep,
            hasPaymentSources: em,
            paymentSourceId: eS,
            paymentSources: eP,
            purchaseType: eT,
          } = (0, h.usePaymentContext)(),
          eM = (0, O.default)(),
          eA =
            Q || (null == eM ? void 0 : eM.isLargeModal)
              ? o.ModalSize.LARGE
              : o.ModalSize.SMALL,
          {
            isGift: eI,
            giftRecipient: eN,
            customGiftMessage: ey,
            emojiConfetti: eh,
            soundEffect: eC,
          } = (0, y.useGiftContext)(),
          eR = (0, p.usePremiumDiscountOffer)(),
          eO = null != M && !eI && (0, p.discountOfferHasTier)(eR, M),
          [ev, eg] = u.useState({
            load_id: ef.loadId,
            payment_type: U.PurchaseTypeToAnalyticsPaymentType[eT],
            location: null != n ? n : a,
            source: r,
            subscription_type: c,
            subscription_plan_id: null == ei ? void 0 : ei.id,
            is_gift: eI,
            eligible_for_trial: null != g,
            location_stack: t,
            sku_id: X,
            application_id: V,
            guild_id: z,
            payment_modal_version: "v1",
            activity_session_id: et,
            eligible_for_discount: eO,
          }),
          eL = null != eS ? eP[eS] : null;
        u.useEffect(() => {
          eg(e => {
            let t = null != ei ? (0, N.getPrice)(ei.id, !1, eI, ep) : void 0,
              n = {
                ...e,
                subscription_plan_id: null == ei ? void 0 : ei.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ei ? void 0 : ei.price,
                currency: ep.currency,
                sku_id: eu,
              };
            return n;
          });
        }, [ei, eu, eI, ep]),
          u.useEffect(() => {
            A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STARTED, {
              ...ev,
              has_saved_payment_source: em,
            });
          }, []),
          u.useEffect(() => {
            if ((es(E), null != X)) ea(X);
            else if (null != E) {
              var e;
              ea(
                null === (e = T.default.get(E)) || void 0 === e
                  ? void 0
                  : e.skuId
              );
            }
          }, [es, ea, E, X]);
        let ek = u.useCallback(() => {
            let e = (0, I.getGiftExperience)(eN),
              t = e === I.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
              n = Date.now();
            A.default.track(U.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
              ...ev,
              is_custom_message_edited:
                eI && t && null != ey
                  ? ey !== D.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
                  : void 0,
              is_custom_emoji_sound_available: eI && t,
              emoji_name:
                eI && t ? (null == eh ? void 0 : eh.surrogates) : void 0,
              sound_id: eI && t ? (null == eC ? void 0 : eC.soundId) : void 0,
              duration_ms: n - ef.startTime,
              payment_source_type: null == eL ? void 0 : eL.type,
            });
          }, [ev, eh, ey, eN, eI, eC, ef.startTime, eL]),
          ex = u.useMemo(
            () => () =>
              null == v ? void 0 : v(en === R.PurchaseState.COMPLETED, eu),
            [v, en, eu]
          ),
          eU = (0, s.useStableMemo)(() => Date.now(), [ed]),
          eb = u.useCallback(
            function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  trackedFromStep: n,
                  analyticsDataOverride: l,
                  fulfillment: u,
                } = t,
                a = Date.now();
              if (e === C.Step.CONFIRM && (ek(), null == d || d(u), ee)) {
                ex();
                return;
              }
              er(e), eo(null);
              let i = null != n ? n : ed;
              if (null === i) {
                A.default.track(U.AnalyticEvents.PAYMENT_FLOW_LOADED, {
                  ...ev,
                  initial_step: e,
                  has_saved_payment_source: em,
                });
                return;
              }
              A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STEP, {
                ...ev,
                ...l,
                from_step: i,
                to_step:
                  e === C.Step.ADD_PAYMENT_STEPS ? C.Step.PAYMENT_TYPE : e,
                step_duration_ms: a - eU,
                flow_duration_ms: a - ef.startTime,
              });
            },
            [ev, ef.startTime, d, eo, er, ed, eU, em, ek, ex, ee]
          );
        (0, m.usePaymentStepForAuthentication)(ed, ec, eb),
          (0, C.usePurchaseStateForStep)(ed, en, el),
          (0, S.usePurchaseTokenAuthStep)(ed, e_, eb),
          (0, _.default)(ex),
          (0, P.useUnsupportedExternalSubscriptionModalHandler)(
            eE,
            () => v(!1),
            eI
          ),
          (0, m.usePaymentAuthenticationPoller)(ec);
        let eD = (0, L.PaymentModalHeader)({
          renderHeader: W,
          referralTrialOfferId: J,
          handleClose: ex,
        });
        return (0, l.jsx)(o.Shaker, {
          className: G.shaker,
          isShaking: q && en === R.PurchaseState.PURCHASING,
          intensity: 2,
          children: (0, l.jsx)(o.ModalRoot, {
            className: i(G.root, { [G.withHeader]: null != eD }),
            transitionState: f,
            hideShadow: Z,
            returnRef: $,
            size: eA,
            children: (0, l.jsx)(x.default, {
              header: eD,
              isLargeModal: Q || (null == eM ? void 0 : eM.isLargeModal),
              initialPlanId: E,
              subscriptionTier: M,
              handleStepChange: eb,
              handleClose: ex,
              analyticsData: ev,
              setAnalyticsData: eg,
              trialId: g,
              trialFooterMessageOverride: k,
              reviewWarningMessage: Y,
              planGroup: j,
              openInvoiceId: H,
              analyticsLocation: n,
              onSubscriptionConfirmation: B,
              renderPurchaseConfirmation: w,
              postSuccessGuild: K,
              followupSKUInfo: F,
              referralTrialOfferId: J,
              skipConfirm: ee,
            }),
          }),
        });
      }
      function j(e) {
        let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: i,
            handleClose: s,
          } = e,
          {
            activeSubscription: o,
            blockedPayments: _,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: S,
            selectedSkuId: P,
            setSelectedPlanId: T,
            defaultPlanId: A,
            startedPaymentFlowWithPaymentSourcesRef: I,
          } = (0, h.usePaymentContext)(),
          { isGift: N } = (0, y.useGiftContext)(),
          R = I.current,
          O = (0, g.default)({ isGift: N, skuId: P, referralTrialOfferId: i }),
          { defaultToMonthlyPlan: L } =
            E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig(
              { location: "055ec5_1" },
              { autoTrackExposure: !1 }
            ),
          [x, U] = u.useState(!0),
          D = (0, r.useStateFromStores)([M.default], () =>
            M.default.applicationIdsFetched.has(
              b.PREMIUM_SUBSCRIPTION_APPLICATION
            )
          );
        return (u.useEffect(() => {
          U(!p || !m || S);
        }, [S, m, p]),
        (0, d.default)(
          "Payment Modal",
          x,
          5,
          {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: S,
          },
          { tags: { app_context: "billing" } }
        ),
        u.useEffect(() => {
          if (
            (!D &&
              (0, c.fetchUserEntitlementsForApplication)(
                b.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
            x || _)
          )
            return;
          let e = (0, v.inOneStepSubscriptionCheckout)({
            isTrial: O,
            isGift: N,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: R,
          });
          if (null != n) a(C.Step.REVIEW);
          else if (e) {
            let e = (0, v.getDefaultPlanOneStepCheckout)(P, o, A);
            T(e), a(C.Step.REVIEW);
          } else null != t ? a(C.Step.PLAN_SELECT) : a(C.Step.SKU_SELECT);
        }, [o, _, D, n, x, a, t, P, T, L, O, A, N, R]),
        x)
          ? (0, l.jsx)(k.default, {})
          : _
            ? (0, l.jsx)(f.BlockedPaymentsContentModal, { onClose: s })
            : null;
      }
    },
    622271: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalHeader: function () {
            return N;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        a = n("627445"),
        i = n.n(a),
        s = n("77078"),
        r = n("210721"),
        o = n("53253"),
        c = n("154889"),
        d = n("917247"),
        f = n("65324"),
        _ = n("510928"),
        E = n("713536"),
        p = n("659632"),
        m = n("635357"),
        S = n("642906"),
        P = n("85336"),
        T = n("49111"),
        M = n("646718"),
        A = n("843455"),
        I = n("293199");
      function N(e) {
        var t;
        let { renderHeader: n, referralTrialOfferId: a, handleClose: N } = e,
          {
            selectedSkuId: y,
            step: h,
            selectedPlan: C,
            purchaseState: R,
            purchaseType: O,
            selectedSku: v,
          } = (0, S.usePaymentContext)(),
          {
            isGift: g,
            selectedGiftStyle: L,
            giftRecipient: k,
          } = (0, m.useGiftContext)(),
          x =
            g &&
            (0, p.shouldShowCustomGiftExperience)(k) &&
            h === P.Step.CONFIRM &&
            null != L &&
            (null == v ? void 0 : v.productLine) !==
              T.SKUProductLines.COLLECTIBLES,
          U = null != n && null != h,
          b = h !== P.Step.SKU_SELECT && null != y,
          D = (0, d.usePremiumTrialOffer)(a),
          G =
            !g &&
            null != D &&
            null != y &&
            (0, M.SubscriptionTrials)[D.trial_id].skus.includes(y),
          Y = (0, c.usePremiumDiscountOffer)(),
          j =
            null == Y
              ? void 0
              : null === (t = Y.discount) || void 0 === t
                ? void 0
                : t.plan_ids.some(e => M.SubscriptionPlanInfo[e].skuId === y),
          H = !g && null != Y && null != y && j,
          { enabled: B } = o.default.useExperiment(
            { location: "PaymentModalHeader" },
            { autoTrackExposure: !1 }
          ),
          w = (0, o.useIsSeasonalGiftingActive)(),
          K = B && w,
          F = u.useMemo(() => {
            if (null == h) return;
            let e = null;
            if (x)
              e = (0, l.jsxs)("div", {
                className: I.container,
                children: [
                  (0, l.jsx)(f.default, {
                    defaultAnimationState: r.AnimationState.LOOP,
                    giftStyle: L,
                    className: I.seasonalGiftBoxHeaderIcon,
                  }),
                  (0, l.jsx)(s.ModalCloseButton, {
                    onClick: N,
                    className: I.closeButton,
                  }),
                ],
              });
            else if (U) e = n(null != C ? C : null, N, h);
            else if (O === A.PurchaseTypes.ONE_TIME)
              e = (0, l.jsx)(E.PurchaseHeader, { step: h, onClose: N });
            else if (b)
              i(
                y in M.PremiumSubscriptionSKUToPremiumType,
                "invalid sku id: ".concat(y)
              ),
                (e = (0, l.jsx)(_.default, {
                  currentStep: null != h ? h : void 0,
                  purchaseState: R,
                  premiumType: M.PremiumSubscriptionSKUToPremiumType[y],
                  onClose: N,
                  showTrialBadge: G,
                  showDiscountBadge: H,
                  isGift: g,
                  giftRecipient: k,
                  useWinterTheme: K,
                }));
            return e;
          }, [L, N, R, n, C, y, h, G, H, x, b, U, O, g, k, K]);
        return F;
      }
    },
    628738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("655525");
      function i() {
        return (0, l.jsx)(u.Spinner, { className: a.spinner });
      }
    },
    359371: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("642906");
      function u() {
        let { step: e, stepConfigs: t } = (0, l.usePaymentContext)(),
          n = t.find(t => t.key === e);
        return null == n ? void 0 : n.options;
      }
    },
    176108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          inOneStepSubscriptionCheckout: function () {
            return a;
          },
          planSwitchLoadingShowSpinner: function () {
            return i;
          },
          getDefaultPlanOneStepCheckout: function () {
            return s;
          },
        });
      var l = n("719923"),
        u = n("646718");
      function a(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: l,
          startedPaymentFlowWithPaymentSources: a,
        } = e;
        return !t && !n && null != l && u.ACTIVE_PREMIUM_SKUS.includes(l) && a;
      }
      function i(e, t, n) {
        let l = !1;
        if (e && null != t) {
          let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
          null == e && (l = !0);
        }
        return l;
      }
      function s(e, t, n) {
        let a = null != t ? (0, l.getPremiumPlanItem)(t) : null,
          i = u.PREMIUM_SKU_TO_YEARLY_PLAN[e],
          s = null != n ? n : i;
        return (
          null != a
            ? s === a.planId && s === u.PREMIUM_SKU_TO_MONTHLY_PLAN[e]
              ? (s = u.PREMIUM_SKU_TO_YEARLY_PLAN[e])
              : s === a.planId && s === u.PREMIUM_SKU_TO_YEARLY_PLAN[e]
                ? (s = u.PREMIUM_SKU_TO_MONTHLY_PLAN[e])
                : (a.planId === u.SubscriptionPlans.PREMIUM_YEAR_TIER_0 ||
                    a.planId === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1) &&
                  s === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
                  (s = u.SubscriptionPlans.PREMIUM_YEAR_TIER_2)
            : s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              (s = u.SubscriptionPlans.PREMIUM_MONTH_TIER_1),
          s
        );
      }
    },
    254350: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isInTrialRedemption: function () {
            return a;
          },
          default: function () {
            return i;
          },
        });
      var l = n("917247"),
        u = n("646718");
      function a(e) {
        let { userTrialOffer: t, isGift: n, skuId: l } = e;
        return (
          !n &&
          null != t &&
          null != l &&
          (0, u.SubscriptionTrials)[t.trial_id].skus.includes(l)
        );
      }
      function i(e) {
        let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
          i = (0, l.usePremiumTrialOffer)(a);
        return (
          !t &&
          null != i &&
          null != n &&
          (0, u.SubscriptionTrials)[i.trial_id].skus.includes(n)
        );
      }
    },
    429070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePurchaseTokenAuthStep: function () {
            return i;
          },
        });
      var l = n("884691"),
        u = n("85336"),
        a = n("467292");
      function i(e, t, n) {
        l.useEffect(() => {
          null != e &&
          e !== u.Step.AWAITING_PURCHASE_TOKEN_AUTH &&
          t === a.PurchaseTokenAuthState.PENDING
            ? n(u.Step.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === u.Step.AWAITING_PURCHASE_TOKEN_AUTH &&
              t === a.PurchaseTokenAuthState.SUCCESS &&
              n(u.Step.REVIEW);
        }, [e, t, n]);
      }
    },
    661128: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUnsupportedExternalSubscriptionModalHandler: function () {
            return d;
          },
          useSubscriptionEntitlements: function () {
            return _;
          },
        });
      var l = n("884691"),
        u = n("446674"),
        a = n("404118"),
        i = n("10514"),
        s = n("437712"),
        r = n("719923"),
        o = n("843455"),
        c = n("782340");
      function d(e, t, n) {
        l.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (a.default.show({
              title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName:
                  o.PaymentGatewayToFriendlyName[e.paymentGateway],
              }),
              body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format(
                {
                  paymentGatewayName:
                    o.PaymentGatewayToFriendlyName[e.paymentGateway],
                  subscriptionManagementLink: (0,
                  r.getExternalSubscriptionMethodUrl)(
                    e.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT"
                  ),
                }
              ),
              confirmText: c.default.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let f = [];
      function _(e, t) {
        let n = (0, u.useStateFromStores)([i.default], () =>
            null != e ? i.default.get(e) : null
          ),
          a = (0, u.useStateFromStores)([s.default], () => {
            var e;
            return null != n &&
              null !== (e = s.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          o = l.useMemo(
            () =>
              Array.from(a).filter(e => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [a]
          ),
          c =
            !t &&
            null != n &&
            null != o &&
            o.length >=
              r.default.getIntervalMonths(n.interval, n.intervalCount);
        return { hasEntitlements: c, entitlements: o };
      }
    },
  },
]);
//# sourceMappingURL=60932.1b10a12133d9bdfd918c.js.map
