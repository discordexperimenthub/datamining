(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11047"],
  {
    116552: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d7d2dfa9df5f112808a0.svg";
    },
    698745: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a1d5e876c5e7b9b34836.svg";
    },
    141195: function (e, t, n) {
      "use strict";
      e.exports = n.p + "57ff574d8430697c11c7.svg";
    },
    951573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("206230"),
        u = n("22368"),
        o = n("145131"),
        r = n("467831"),
        c = n("791971");
      function d(e) {
        let { purchaseState: t, currentStep: n, onClose: d } = e,
          [S, p] = (0, u.usePaymentModalAnimationScene)({
            purchaseState: t,
            currentStep: n,
            initialScene: r.PremiumPaymentGuildAnimation.Scenes.ENTRY,
            purchaseScene: r.PremiumPaymentGuildAnimation.Scenes.STARS,
            errorScene: r.PremiumPaymentGuildAnimation.Scenes.ERROR,
            successScene: r.PremiumPaymentGuildAnimation.Scenes.SUCCESS,
          }),
          m = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion
          );
        return (0, l.jsxs)(s.ModalHeader, {
          align: o.default.Align.START,
          className: c.header,
          separator: !1,
          children: [
            (0, l.jsx)(r.PremiumPaymentGuildAnimation, {
              className: c.animation,
              nextScene: S,
              onScenePlay: e =>
                p(r.PremiumPaymentGuildAnimation.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: m,
            }),
            (0, l.jsx)("div", { className: c.headerTitle }),
            (0, l.jsx)(s.ModalCloseButton, {
              onClick: d,
              className: c.closeButton,
            }),
          ],
        });
      }
    },
    860634: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildBoostPurchaseModal: function () {
            return ee;
          },
          default: function () {
            return et;
          },
        }),
        n("222007");
      var l,
        a = n("37983"),
        s = n("884691"),
        i = n("627445"),
        u = n.n(i),
        o = n("775560"),
        r = n("748820"),
        c = n("446674"),
        d = n("819855"),
        S = n("77078"),
        p = n("850068"),
        m = n("583367"),
        E = n("157009"),
        P = n("612039"),
        _ = n("812204"),
        f = n("685665"),
        I = n("308592"),
        M = n("245187"),
        T = n("642906"),
        N = n("85336"),
        y = n("286350"),
        A = n("626301"),
        R = n("818711"),
        L = n("877261"),
        C = n("724522"),
        U = n("273619"),
        h = n("161778"),
        g = n("305961"),
        O = n("625634"),
        b = n("926223"),
        D = n("357957"),
        x = n("10514"),
        B = n("521012"),
        k = n("145131"),
        G = n("599110"),
        j = n("427459"),
        v = n("719923"),
        F = n("713518"),
        w = n("380186"),
        W = n("951573"),
        Y = n("658206"),
        H = n("985074"),
        V = n("49111"),
        K = n("646718"),
        z = n("843455"),
        q = n("782340"),
        J = n("782363");
      (l || (l = {})).PREMIUM = "discord://app/settings/nitro";
      let X = K.SubscriptionPlans.NONE_MONTH,
        Q = [N.Step.PLAN_SELECT, N.Step.REVIEW, N.Step.CONFIRM],
        Z = [
          N.Step.PLAN_SELECT,
          N.Step.ADD_PAYMENT_STEPS,
          N.Step.REVIEW,
          N.Step.CONFIRM,
        ];
      async function $(e) {
        await (0, m.fetchGuildBoostSlots)();
        let t = (0, j.getAvailableGuildBoostSlots)(O.default.boostSlots);
        return (0, m.applyToGuild)(
          e,
          t.map(e => e.id)
        );
      }
      function ee(e) {
        let t,
          {
            transitionState: n,
            onClose: l,
            closeGuildPerksModal: i,
            analyticsLocations: m,
            analyticsLocation: ee,
            analyticsSourceLocation: et,
            guildId: en,
            onSubscribeComplete: el,
            totalNumberOfSlotsToAssign: ea = 1,
            disablePremiumUpsell: es = !1,
            onSubscriptionConfirmation: ei,
            applicationId: eu,
          } = e,
          { activeSubscription: eo, blockedPayments: er } = (0,
          T.usePaymentContext)(),
          ec = (0, c.useStateFromStores)([B.default], () =>
            B.default.hasFetchedSubscriptions()
          ),
          ed = null != eo ? eo.paymentSourceId : null,
          eS = (0, c.useStateFromStores)([x.default], () =>
            null != eo ? (0, w.getOrFetchSubscriptionPlan)(eo.planId) : null
          ),
          ep = (0, c.useStateFromStores)(
            [x.default],
            () => null == eo || null != x.default.get(eo.planId)
          ),
          em = (0, c.useStateFromStores)([x.default], () =>
            null == eS ? x.default.get(X) : eS
          ),
          eE = (0, c.useStateFromStores)([h.default], () => h.default.theme),
          eP = s.useRef(
            (0, j.getAvailableGuildBoostSlots)(O.default.boostSlots)
          ).current,
          e_ = (0, c.useStateFromStores)(
            [D.default],
            () => D.default.defaultPaymentSourceId
          ),
          ef = (0, C.useSharedPaymentModal)(null != ed ? ed : ec ? e_ : null),
          {
            paymentSources: eI,
            setPurchaseError: eM,
            paymentSourceId: eT,
            setIsSubmittingCurrentStep: eN,
            paymentAuthenticationState: ey,
            setPaymentSourceId: eA,
            isSubmittingCurrentStep: eR,
            paymentError: eL,
            purchaseError: eC,
            purchaseErrorBlockRef: eU,
          } = ef,
          eh = Object.keys(eI).length > 0,
          [eg, eO] = s.useState(ea - eP.length),
          [eb, eD] = s.useState(!1),
          ex = (0, c.useStateFromStores)(
            [b.default],
            () => b.default.popupCallbackCalled
          ),
          eB = (0, I.useSubscriptionPlansLoaded)(),
          ek = s.useMemo(
            () =>
              null != eo && ep && eB
                ? (0, R.calculateAdditionalPlansWithPremiumGuildAdjustment)(
                    eo,
                    eg
                  )
                : [
                    {
                      planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
                      quantity: eg,
                    },
                  ],
            [eo, ep, eg, eB]
          ),
          [eG, ej] = (0, o.useLazyValue)(() => [(0, r.v4)(), Date.now()]),
          { analyticsLocations: ev } = (0, f.default)(
            m,
            _.default.GUILD_BOOST_PURCHASE_MODAL
          ),
          eF = s.useMemo(() => {
            var e, t;
            return {
              load_id: eG,
              payment_type:
                z.PurchaseTypeToAnalyticsPaymentType[
                  z.PurchaseTypes.SUBSCRIPTION
                ],
              sku_id: K.PremiumSubscriptionSKUs.GUILD,
              subscription_type: V.SubscriptionTypes.PREMIUM,
              subscription_plan_id:
                null !==
                  (t =
                    null ===
                      (e = ek.find(e => {
                        let { planId: t } = e;
                        return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== t
                  ? t
                  : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
              quantity: eg,
              location: ee,
              source: et,
              location_stack: ev,
            };
          }, [eG, ee, ev, et, ek, eg]);
        s.useEffect(() => {
          (0, F.fetchSubscriptionPlansOnNewPaymentSource)(eT);
        }, [eT]),
          s.useEffect(() => {
            let e = async () => {
              if (!0 === ex)
                try {
                  if (null == b.default.redirectedPaymentId) return;
                  await (0, p.redirectedPaymentSucceeded)(
                    b.default.redirectedPaymentId
                  ),
                    eX(N.Step.CONFIRM),
                    eK(y.PurchaseState.COMPLETED),
                    null != en && (await $(en)),
                    null != el && el();
                } catch (e) {
                  eK(y.PurchaseState.FAIL),
                    eM(e),
                    G.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                      ...eF,
                      payment_error_code: null == e ? void 0 : e.code,
                      payment_gateway: V.PaymentGateways.STRIPE,
                      payment_source_id: eT,
                      duration_ms: Date.now() - ej,
                    });
                } finally {
                  eN(!1), (0, p.resetPaymentIntentId)();
                }
            };
            e();
          }, [ex]),
          s.useEffect(() => {
            !B.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(),
              G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                ...eF,
                guild_id: en,
                application_id: eu,
              }),
              null != eo &&
                null != eo.renewalMutations &&
                G.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
                  location: ee,
                  guild_id: en,
                });
          }, []);
        let [ew, eW] = s.useState(Q),
          [eY, eH] = s.useState(N.Step.PLAN_SELECT),
          [eV, eK] = s.useState(y.PurchaseState.WAITING),
          [ez, eq] = s.useState(!0),
          eJ = (0, o.useStableMemo)(() => Date.now(), [eY]),
          eX = s.useCallback(
            (e, t) => {
              eH(e), eM(null);
              let n = Date.now();
              G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
                ...eF,
                from_step: null != t ? t : eY,
                to_step:
                  e === N.Step.ADD_PAYMENT_STEPS ? N.Step.PAYMENT_TYPE : e,
                step_duration_ms: n - eJ,
                flow_duration_ms: n - ej,
                guild_id: en,
                application_id: eu,
              });
            },
            [eM, eF, eY, eJ, ej, en, eu]
          ),
          eQ = () => {
            l(eV === y.PurchaseState.COMPLETED);
          },
          eZ = null != eo && eo.isPurchasedExternally;
        s.useEffect(() => {
          ey !== L.PaymentAuthenticationState.PENDING &&
            eY !== N.Step.CONFIRM &&
            null != ed &&
            (ew !== Q && eW(Q),
            !Q.includes(eY) &&
              eY !== N.Step.PREMIUM_UPSELL &&
              eX(N.Step.REVIEW)),
            eY === N.Step.ADD_PAYMENT_STEPS && ew !== Z && eW(Z),
            eZ && eY !== N.Step.PLAN_SELECT && eH(N.Step.PLAN_SELECT);
        }, [eY, eX, eZ, ey, eo, ed, ew]),
          (0, L.usePaymentStepForAuthentication)(eY, ey, eX),
          (0, N.usePurchaseStateForStep)(eY, eV, eK);
        let e$ = s.useRef(null),
          [e0, e1] = (0, P.default)(!1, 500),
          [e4, e8] = s.useState(null),
          [e7, e6] = s.useState([]),
          [e5, e2] = s.useState(!1);
        s.useEffect(() => {
          let e;
          if (!eB) return;
          let t = x.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD);
          null != t &&
            e6(
              (e = (0, F.getCurrencies)(
                K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
                eT,
                !1
              ))
            ),
            null == eT && null != eo && null != eo.paymentSourceId
              ? e8(eo.currency)
              : null != e && e8(e[0]);
        }, [eT, eo, eB, JSON.stringify(e7)]);
        let e9 = (0, C.AddPaymentFlow)({
          paymentModalArgs: ef,
          initialStep: N.Step.PAYMENT_TYPE,
          prependSteps: [N.Step.PLAN_SELECT],
          appendSteps: [N.Step.REVIEW, N.Step.CONFIRM],
          breadcrumpSteps: ew,
          currentBreadcrumpStep: eY,
          onReturn: () => {
            eX(
              Object.values(eI).length < 1 ? N.Step.PLAN_SELECT : N.Step.REVIEW,
              N.Step.PAYMENT_TYPE
            );
          },
          onComplete: e => {
            eX(N.Step.REVIEW, e);
          },
          onStepChange: e => {
            let { currentStep: t, toStep: n } = e,
              l = Date.now();
            G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
              ...eF,
              from_step: t,
              to_step: n,
              step_duration_ms: l - eJ,
              flow_duration_ms: l - ej,
              guild_id: en,
            });
          },
        });
        if (er) t = (0, a.jsx)(M.BlockedPaymentsContentModal, { onClose: eQ });
        else if (ec && ep && eB && null != e4 && "" !== e4) {
          if (null != eo && null != eo.renewalMutations)
            t = (0, a.jsx)(S.ModalContent, {
              children: (0, a.jsx)("p", {
                className: J.copy,
                children:
                  q.default.Messages
                    .PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION,
              }),
            });
          else if (eY === N.Step.PREMIUM_UPSELL) {
            u(null != em, "Missing nextPremiumSubscriptionPlan"),
              u(e4, "Currency not defined");
            let e =
              null != eT
                ? { paymentSourceId: eT, currency: e4 }
                : { currency: e4 };
            t = (0, a.jsx)(H.default, {
              premiumSubscriptionPlan: em,
              analyticsLocation: ee,
              analyticsSourceLocation: et,
              onClose: eQ,
              onBack: () => eX(N.Step.PLAN_SELECT),
              onSkip: () =>
                eX(null != ed || eh ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: ei,
              priceOptions: e,
            });
          } else {
            let e, n, l, s;
            u(e4, "Currency not defined");
            let o =
              null != eT
                ? { paymentSourceId: eT, currency: e4 }
                : { currency: e4 };
            switch (eY) {
              case N.Step.PLAN_SELECT:
                u(null != en, "Missing guildId"),
                  u(null != em, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, a.jsx)(Y.GuildBoostingPlanSelect, {
                    premiumSubscriptionPlan: em,
                    numGuildBoosts: eg,
                    setNumGuildBoosts: eO,
                    setForceDisableSubmitButton: eq,
                    premiumSubscription: eo,
                    existingAvailableSlots: eP,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      eQ(),
                        null != i && i(),
                        (0, A.navigateToPremiumMarketingPage)();
                    },
                    guildId: en,
                    priceOptions: o,
                  })),
                  eZ &&
                    null != eo &&
                    null != eo.paymentGateway &&
                    (e = (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(S.FormErrorBlock, {
                          className: J.externalErrorBlock,
                          children:
                            q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format(
                              {
                                paymentGatewayName:
                                  z.PaymentGatewayToFriendlyName[
                                    eo.paymentGateway
                                  ],
                              }
                            ),
                        }),
                        e,
                      ],
                    })),
                  (l = (0, a.jsx)(S.Button, {
                    look: S.Button.Looks.LINK,
                    color: (0, d.isThemeLight)(eE)
                      ? S.Button.Colors.PRIMARY
                      : S.Button.Colors.WHITE,
                    onClick: eQ,
                    children: q.default.Messages.NEVERMIND,
                  })),
                  (s = (0, a.jsx)(S.Button, {
                    type: "submit",
                    disabled: ez || 0 === eg || eZ,
                    onClick: () => {
                      if (
                        !es &&
                        (null == eS ||
                          eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)
                      ) {
                        eX(N.Step.PREMIUM_UPSELL);
                        return;
                      }
                      eX(
                        null != ed || eh
                          ? N.Step.REVIEW
                          : N.Step.ADD_PAYMENT_STEPS
                      );
                    },
                    children: q.default.Messages.CONTINUE,
                  }));
                break;
              case N.Step.ADD_PAYMENT_STEPS:
                break;
              case N.Step.AWAITING_AUTHENTICATION:
                e = (0, a.jsx)(E.AwaitingAuthenticationStepBody, {
                  className: J.body,
                });
                break;
              case N.Step.REVIEW:
                u(null != em, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, a.jsx)(Y.GuildBoostingReview, {
                    paymentSources: eI,
                    priceOptions: o,
                    currentPremiumSubscription: eo,
                    premiumSubscriptionPaymentSourceId: ed,
                    premiumSubscriptionPlan: em,
                    newAdditionalPlans: ek,
                    onPaymentSourceChange: e => eA(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eX(N.Step.ADD_PAYMENT_STEPS), eA(null);
                    },
                    onPurchaseTermsChange: eD,
                    legalTermsNodeRef: e$,
                    hasLegalTermsFlash: e0,
                  })),
                  (n = N.Step.PLAN_SELECT),
                  (s = eb
                    ? (0, a.jsx)(S.Button, {
                        color: S.Button.Colors.GREEN,
                        type: "submit",
                        submitting: eR,
                        onClick: async () => {
                          u(null != ek, "Missing newAdditionalPlans");
                          let e = null != eT ? eI[eT] : null;
                          eM(null);
                          try {
                            if (
                              (eK(y.PurchaseState.PURCHASING),
                              eN(!0),
                              u(null != eT, "Missing paymentSourceId"),
                              G.default.track(
                                V.AnalyticEvents.PAYMENT_FLOW_COMPLETED,
                                {
                                  ...eF,
                                  duration_ms: Date.now() - ej,
                                  guild_id: en,
                                  application_id: eu,
                                }
                              ),
                              e5)
                            )
                              return;
                            if (null == eo || null == eS) {
                              u(null != e, "Missing paymentSource");
                              let t = await (0, p.createSubscription)({
                                items: ek,
                                paymentSource: e,
                                currency: o.currency,
                              });
                              if (t.redirectConfirmation) {
                                e2(null != t.redirectURL);
                                return;
                              }
                            } else {
                              let t = {
                                items: (0, v.getItemsFromNewAdditionalPlans)(
                                  eo,
                                  ek
                                ),
                              };
                              (t.currency = eo.currency),
                                null == t.currency && (t.currency = o.currency),
                                (t.paymentSource =
                                  null != ed ? eI[ed] : void 0),
                                null == t.paymentSource &&
                                  (u(null != e, "Missing paymentSource"),
                                  (t.paymentSource = e),
                                  (t.currency = o.currency));
                              let n = await (0, p.updateSubscription)(
                                eo,
                                t,
                                ev
                              );
                              if (n.redirectConfirmation) {
                                e2(null != n.redirectURL);
                                return;
                              }
                            }
                            eX(N.Step.CONFIRM),
                              eK(y.PurchaseState.COMPLETED),
                              null != en && (await $(en)),
                              null != el && el();
                          } catch (t) {
                            eK(y.PurchaseState.FAIL),
                              eM(t),
                              G.default.track(
                                V.AnalyticEvents.PAYMENT_FLOW_FAILED,
                                {
                                  ...eF,
                                  payment_error_code:
                                    null == t ? void 0 : t.code,
                                  payment_gateway:
                                    null != e
                                      ? e.type === V.PaymentSourceTypes.CARD
                                        ? V.PaymentGateways.STRIPE
                                        : V.PaymentGateways.BRAINTREE
                                      : null,
                                  payment_source_id: eT,
                                  duration_ms: Date.now() - ej,
                                }
                              );
                          } finally {
                            !e5 && eN(!1);
                          }
                        },
                        children:
                          q.default.Messages
                            .GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT,
                      })
                    : (0, a.jsx)(S.Tooltip, {
                        text: q.default.Messages
                          .BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                        children: e =>
                          (0, a.jsx)(S.Button, {
                            ...e,
                            color: S.Button.Colors.GREEN,
                            onClick: () => {
                              null != e$.current &&
                                (e$.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e1(!0));
                            },
                            type: "submit",
                            children:
                              q.default.Messages
                                .GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT,
                          }),
                      }));
                break;
              case N.Step.CONFIRM:
                var e3;
                let r = g.default.getGuild(en);
                e = (0, a.jsx)(Y.GuildBoostingConfirmation, {
                  guild: r,
                  guildBoostQuantity: eg + eP.length,
                  onClose: eQ,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (e3 = eI[null != eT ? eT : ""]) || void 0 === e3
                      ? void 0
                      : e3.type,
                });
            }
            let c = null != eL && null == (0, N.errorToStep)(eL) ? eL : eC;
            t =
              eY === N.Step.ADD_PAYMENT_STEPS
                ? e9
                : (0, a.jsx)(U.default, {
                    hideBreadcrumbs: eY === N.Step.CONFIRM,
                    steps: ew,
                    currentStep: eY,
                    paymentError: c,
                    purchaseErrorBlockRef: eU,
                    hasCurrencies: e7.length > 1,
                    body: e,
                    footer:
                      eY !== N.Step.CONFIRM
                        ? (0, a.jsxs)(S.ModalFooter, {
                            direction: k.default.Direction.HORIZONTAL,
                            align: k.default.Align.CENTER,
                            justify: k.default.Justify.END,
                            children: [
                              null != n
                                ? (0, a.jsx)("div", {
                                    className: J.backStep,
                                    children: (0, a.jsx)(S.Button, {
                                      color: (0, d.isThemeLight)(eE)
                                        ? S.Button.Colors.PRIMARY
                                        : S.Button.Colors.WHITE,
                                      look: S.Button.Looks.LINK,
                                      size: S.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != n && eX(n);
                                      },
                                      children: q.default.Messages.BACK,
                                    }),
                                  })
                                : null,
                              (0, a.jsxs)("div", {
                                className: J.footerRight,
                                children: [l, s],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          t = (0, a.jsx)("div", {
            className: J.loadingWrapper,
            children: (0, a.jsx)(S.Spinner, {}),
          });
        let te = null;
        return (
          !er &&
            eY !== N.Step.PREMIUM_UPSELL &&
            (te = (0, a.jsx)(W.default, {
              onClose: eQ,
              currentStep: eY,
              purchaseState: eV,
            })),
          (0, a.jsxs)(S.ModalRoot, { transitionState: n, children: [te, t] })
        );
      }
      function et(e) {
        let t = (0, c.useStateFromStores)([B.default], () =>
            B.default.getPremiumTypeSubscription()
          ),
          { AnalyticsLocationProvider: n } = (0, f.default)(
            _.default.GUILD_BOOST_PURCHASE_MODAL
          );
        return (0, a.jsx)(n, {
          children: (0, a.jsx)(T.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, a.jsx)(ee, { ...e }),
          }),
        });
      }
    },
    985074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        u = n("446674"),
        o = n("819855"),
        r = n("77078"),
        c = n("812204"),
        d = n("685665"),
        S = n("649844"),
        p = n("917247"),
        m = n("956597"),
        E = n("674158"),
        P = n("915639"),
        _ = n("145131"),
        f = n("46829"),
        I = n("118503"),
        M = n("619911"),
        T = n("698015"),
        N = n("599110"),
        y = n("240481"),
        A = n("719923"),
        R = n("153160"),
        L = n("49111"),
        C = n("646718"),
        U = n("782340"),
        h = n("938447");
      function g(e) {
        let { shouldUpsellFromNoneTier: t } = e,
          n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
        return (0, l.jsxs)("div", {
          className: h.perksList,
          children: [
            (0, l.jsx)(E.default, {
              icon: I.default,
              iconClassName: h.perkIconGuild,
              description:
                U.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format(
                  {
                    numFreeGuildSubscriptions:
                      C.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                  }
                ),
            }),
            (0, l.jsx)(E.default, {
              icon: I.default,
              iconClassName: h.perkIconGuild,
              description:
                U.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format(
                  {
                    percent: (0, y.formatPercent)(
                      n,
                      C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100
                    ),
                  }
                ),
            }),
            t
              ? (0, l.jsx)(E.default, {
                  icon: f.default,
                  iconClassName: h.perkIconChatPerks,
                  description:
                    U.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS,
                })
              : null,
            (0, l.jsx)(E.default, {
              icon: M.default,
              iconClassName: h.perkIconStream,
              description: U.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM,
            }),
            (0, l.jsx)(E.default, {
              icon: T.default,
              iconClassName: h.perkIconUpload,
              description: U.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD,
            }),
          ],
        });
      }
      function O(e) {
        var t;
        let {
            premiumSubscriptionPlan: n,
            onClose: s,
            onBack: u,
            onSkip: E,
            onSubscriptionConfirmation: P,
            analyticsLocation: f,
            analyticsSourceLocation: I,
            priceOptions: M,
          } = e,
          { analyticsLocations: T, sourceAnalyticsLocations: y } = (0,
          d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL),
          { theme: O } = (0, r.useThemeContext)(),
          b = (0, o.isThemeLight)(O)
            ? r.Button.Colors.PRIMARY
            : r.Button.Colors.WHITE,
          D = null == n || null == n.premiumSubscriptionType,
          x = A.default.getPrice(
            C.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            !1,
            !1,
            M
          ),
          B = (0, R.formatPrice)(x.amount, x.currency),
          k = (0, p.usePremiumTrialOffer)(),
          G = null == k ? void 0 : k.trial_id,
          j =
            (null == k
              ? void 0
              : null === (t = k.subscription_trial) || void 0 === t
                ? void 0
                : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_2;
        return (
          a.useEffect(() => {
            N.default.track(L.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
              type: C.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: y,
            });
          }, [y]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(r.ModalContent, {
                className: h.content,
                children: [
                  (0, l.jsx)(r.ModalCloseButton, {
                    onClick: s,
                    className: h.closeButton,
                  }),
                  j &&
                    (0, l.jsx)(m.PremiumTrialGradientBadge, {
                      className: h.premiumTrialBadge,
                    }),
                  (0, l.jsx)("div", {
                    className: i(h.upsellImage, {
                      [h.upsellImageWithTrialOffer]: j,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: h.bodyText,
                    children:
                      null != G
                        ? U.default.Messages
                            .PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT
                        : U.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format(
                            { monthlyPrice: B }
                          ),
                  }),
                  (0, l.jsx)(g, { shouldUpsellFromNoneTier: D }),
                ],
              }),
              (0, l.jsxs)(r.ModalFooter, {
                align: _.default.Align.CENTER,
                justify: _.default.Justify.END,
                children: [
                  (0, l.jsxs)("div", {
                    className: h.footerRight,
                    children: [
                      (0, l.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: b,
                        onClick: E,
                        children:
                          U.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS,
                      }),
                      (0, l.jsx)(r.Button, {
                        color: r.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          s(),
                            (0, S.default)({
                              initialPlanId: null,
                              subscriptionTier:
                                C.PremiumSubscriptionSKUs.TIER_2,
                              analyticsLocations: T,
                              analyticsObject: {
                                ...f,
                                section:
                                  L.AnalyticsSections
                                    .PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: I,
                              onSubscriptionConfirmation: P,
                              trialId: G,
                            });
                        },
                        children:
                          null != G
                            ? U.default.Messages
                                .PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                            : U.default.Messages.PREMIUM_UPSELL_UPGRADE,
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: h.backStep,
                    children: (0, l.jsx)(r.Button, {
                      color: b,
                      look: r.Button.Looks.LINK,
                      size: r.Button.Sizes.NONE,
                      onClick: () => u(),
                      children: U.default.Messages.BACK,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    818711: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          calculateAdditionalPlansWithPremiumGuildAdjustment: function () {
            return r;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("627445"),
        a = n.n(l),
        s = n("10514"),
        i = n("719923"),
        u = n("646718"),
        o = n("49111");
      function r(e, t) {
        let n = s.default.get(e.planId);
        a(null != n, "missing premium subscription plan");
        let l = s.default.getForSkuAndInterval(
          (0, i.castPremiumSubscriptionAsSkuId)(
            u.PremiumSubscriptionSKUs.GUILD
          ),
          n.interval,
          n.intervalCount
        );
        a(null != l, "missing premium guild plan");
        let r =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          c =
            e.status === o.SubscriptionStatusTypes.CANCELED
              ? 0
              : (0, i.getNumPremiumGuildSubscriptions)(r),
          d = c + t,
          S = r.filter(e => e.planId !== l.id);
        if (d < 0) throw Error("Invalid adjustment");
        return 0 === d ? S : [...S, { planId: l.id, quantity: d }];
      }
    },
    674158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("870984");
      function u(e) {
        let { icon: t, iconClassName: n, description: a, color: u } = e;
        return (0, l.jsxs)("div", {
          className: i.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: i.perkIconContainer,
              children: (0, l.jsx)(t, {
                color: u,
                className: s(i.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: i.perkDescription, children: a }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=11047.64e12569a29e6208d1c2.js.map
