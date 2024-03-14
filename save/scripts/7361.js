(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7361"],
  {
    584503: function (e, t, n) {
      "use strict";
      e.exports = n.p + "55fda0412a4ff4072236.svg";
    },
    45656: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f4d8991602d4587f573e.svg";
    },
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("390236"),
        i = l.memo(function (e) {
          var t, n, i, u;
          let {
              user: o,
              size: d = r.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...S
            } = e,
            I = l.useContext(s.default);
          return (0, a.jsx)(r.Avatar, {
            src:
              ((t = o),
              (n = (0, r.getAvatarSize)(d)),
              (i = c),
              (u = I),
              t.getAvatarURL(u, n, i)),
            size: d,
            "aria-label": f ? void 0 : o.username,
            "aria-hidden": f,
            ...S,
          });
        });
    },
    724038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("597755"),
        l = n.n(a),
        r = n("742270"),
        s = n("815157"),
        i = n("391679"),
        u = n("327037"),
        o = n("393414"),
        d = n("271938"),
        c = n("476108"),
        f = n("599110"),
        S = n("65300"),
        I = n("49111");
      async function _(e) {
        var t, n;
        let a = null === (t = l.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === a || "iOS" === a) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            a = (0, s.generateAttemptId)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, u.fetchCurrentUser)(), (t = d.default.getId());
            } catch {}
          return (0, s.default)((0, r.getDefaultDynamicLinkTemplate)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: a,
          });
        }
        return "discord://";
      }
      async function E(e) {
        let t = await _(e),
          n = (0, s.parseDynamicLink)(t);
        null != n &&
          f.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, i.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          S.default.launch(t, e => {
            !e && (0, o.replaceWith)(c.default.fallbackRoute);
          });
      }
    },
    245187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BlockedPaymentsContentSettings: function () {
            return m;
          },
          BlockedPaymentsContentModal: function () {
            return N;
          },
          BlockedPaymentsWarning: function () {
            return C;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        r = n.n(l),
        s = n("669491"),
        i = n("819855"),
        u = n("77078"),
        o = n("841098"),
        d = n("145131"),
        c = n("423487"),
        f = n("701909"),
        S = n("619935"),
        I = n("49111"),
        _ = n("782340"),
        E = n("872773"),
        P = n("584503"),
        T = n("45656");
      function A(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          l = (0, i.isThemeDark)(n) ? P : T;
        return (0, a.jsxs)("div", {
          className: r(E.container, t),
          children: [
            (0, a.jsx)(u.Heading, {
              className: E.header,
              variant: "heading-xl/semibold",
              children: _.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, a.jsxs)(u.Text, {
              className: E.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, a.jsx)("p", {
                  children: _.default.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, a.jsx)("p", {
                  children:
                    _.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                      helpdeskArticle: f.default.getArticleURL(
                        I.HelpdeskArticles.BLOCKED_PAYMENTS
                      ),
                    }),
                }),
              ],
            }),
            (0, a.jsx)("img", {
              src: l,
              className: E.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function m() {
        return (0, a.jsx)(A, { className: E.settings });
      }
      function N(e) {
        let { onClose: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(u.ModalHeader, {
              className: E.blockedPaymentsModalHeader,
              justify: d.default.Justify.END,
              children: (0, a.jsx)(u.ModalCloseButton, { onClick: t }),
            }),
            (0, a.jsx)(u.ModalContent, {
              className: E.blockedPaymentsModalContent,
              children: (0, a.jsx)(A, { className: E.modal }),
            }),
          ],
        });
      }
      function C(e) {
        let { className: t } = e,
          n = (0, S.useBlockedPaymentsConfig)();
        return n
          ? (0, a.jsxs)(u.Card, {
              className: r(E.blockedPaymentsWarning, t),
              type: u.Card.Types.CUSTOM,
              children: [
                (0, a.jsx)(c.default, {
                  className: E.blockedPaymentsWarningIcon,
                  color: s.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, a.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children:
                    _.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format(
                      {
                        helpdeskArticle: f.default.getArticleURL(
                          I.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    ),
                }),
              ],
            })
          : null;
      }
    },
    7127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalConfirmStep: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("627445"),
        r = n.n(l),
        s = n("77078"),
        i = n("642906"),
        u = n("367767"),
        o = n("650484"),
        d = n("782340"),
        c = n("348550");
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: l,
            application: f,
          } = (0, i.usePaymentContext)();
        r(null != l, "Expected selectedSkuId"),
          r(null != f, "Expected application");
        let S = n[l];
        r(null != S, "Expected sku");
        let I =
          d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: f.name, itemName: S.name }
          );
        return (0, a.jsxs)(o.PaymentPortalBody, {
          children: [
            (0, a.jsx)(u.default, {}),
            (0, a.jsxs)("div", {
              className: c.confirmation,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xxl/bold",
                  className: c.confirmationHeader,
                  children: "Success!",
                }),
                (0, a.jsx)(s.Text, { variant: "text-md/normal", children: I }),
                (0, a.jsx)("div", { className: c.divider }),
                (0, a.jsx)(s.Button, {
                  onClick: t,
                  children: d.default.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      }
    },
    628738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("655525");
      function s() {
        return (0, a.jsx)(l.Spinner, { className: r.spinner });
      }
    },
    292215: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function () {
            return S;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return I;
          },
          REVIEW_STEP_CONFIG: function () {
            return P;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return T;
          },
          SHARED_STEP_CONFIGS: function () {
            return A;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("357957"),
        r = n("85336"),
        s = n("262683"),
        i = n("946359"),
        u = n("724269"),
        o = n("7127"),
        d = n("99836"),
        c = n("217796"),
        f = n("782340");
      let S = {
          key: null,
          renderStep: e => (0, a.jsx)(c.OneTimePaymentPredicateStep, { ...e }),
        },
        I = {
          key: r.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(s.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  r.Step.ADD_PAYMENT_STEPS,
                  r.Step.REVIEW,
                  r.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = l.default.paymentSources;
                  0 === Object.keys(t).length
                    ? e.handleClose()
                    : e.handleStepChange(r.Step.REVIEW, {
                        trackedFromStep: r.Step.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        _ = {
          key: r.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, a.jsx)(u.default, {}),
        },
        E = {
          key: r.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, a.jsx)(i.default, {}),
          options: { renderHeader: !0 },
        },
        P = {
          key: r.Step.REVIEW,
          renderStep: e => (0, a.jsx)(d.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        T = {
          key: r.Step.CONFIRM,
          renderStep: e => (0, a.jsx)(o.PaymentModalConfirmStep, { ...e }),
        },
        A = [_, E];
    },
    217796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OneTimePaymentPredicateStep: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("627445"),
        s = n.n(r),
        i = n("245187"),
        u = n("635357"),
        o = n("642906"),
        d = n("85336"),
        c = n("628738"),
        f = n("49111");
      function S(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: r,
            hasFetchedSkus: S,
            paymentSources: I,
            hasFetchedPaymentSources: _,
            application: E,
            skusById: P,
            selectedSkuId: T,
          } = (0, o.usePaymentContext)(),
          { isGift: A } = (0, u.useGiftContext)(),
          [m, N] = l.useState(!0);
        return (l.useEffect(() => {
          let e = null != E;
          S && _ && e && N(!1);
        }, [S, _, E]),
        l.useEffect(() => {
          if (m || r) return;
          s(null != T, "Expected selectedSkuId");
          let e = P[T];
          if (
            A &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(d.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(I).length) {
            t(d.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(d.Step.REVIEW);
        }, [m, r, t, I, A, P, T]),
        m)
          ? (0, a.jsx)(c.default, {})
          : r
            ? (0, a.jsx)(i.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    176108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          inOneStepSubscriptionCheckout: function () {
            return r;
          },
          planSwitchLoadingShowSpinner: function () {
            return s;
          },
          getDefaultPlanOneStepCheckout: function () {
            return i;
          },
        });
      var a = n("719923"),
        l = n("646718");
      function r(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: a,
          startedPaymentFlowWithPaymentSources: r,
        } = e;
        return !t && !n && null != a && l.ACTIVE_PREMIUM_SKUS.includes(a) && r;
      }
      function s(e, t, n) {
        let a = !1;
        if (e && null != t) {
          let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
          null == e && (a = !0);
        }
        return a;
      }
      function i(e, t, n) {
        let r = null != t ? (0, a.getPremiumPlanItem)(t) : null,
          s = l.PREMIUM_SKU_TO_YEARLY_PLAN[e],
          i = null != n ? n : s;
        return (
          null != r
            ? i === r.planId && i === l.PREMIUM_SKU_TO_MONTHLY_PLAN[e]
              ? (i = l.PREMIUM_SKU_TO_YEARLY_PLAN[e])
              : i === r.planId && i === l.PREMIUM_SKU_TO_YEARLY_PLAN[e]
                ? (i = l.PREMIUM_SKU_TO_MONTHLY_PLAN[e])
                : (r.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_0 ||
                    r.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1) &&
                  i === l.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
                  (i = l.SubscriptionPlans.PREMIUM_YEAR_TIER_2)
            : i === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              (i = l.SubscriptionPlans.PREMIUM_MONTH_TIER_1),
          i
        );
      }
    },
    574297: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("702976");
      var a = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("834897"),
        i = n("206230"),
        u = n("526887"),
        o = n("129408"),
        d = n("713536"),
        c = n("640820"),
        f = n("552712"),
        S = n("698041"),
        I = n("642906"),
        _ = n("85336"),
        E = n("159149"),
        P = n("628738"),
        T = n("650484"),
        A = n("367767"),
        m = n("101703"),
        N = n("782340");
      function C(e) {
        var t, n;
        let C,
          O,
          {
            showBenefits: p,
            handleClose: h,
            onSubscriptionConfirmation: R,
          } = e,
          {
            updatedSubscription: L,
            readySlideId: M,
            selectedSkuId: g,
            application: b,
          } = (0, I.usePaymentContext)(),
          x = (0, s.default)(m.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          { createMultipleConfettiAt: U } = l.useContext(
            u.ConfettiCannonContext
          ),
          y = (0, r.useStateFromStores)(
            [f.default],
            () => (null != g ? f.default.get(g) : null),
            [g]
          ),
          B = (0, r.useStateFromStores)(
            [S.default],
            () => (null != g ? S.default.getForSKU(g) : null),
            [g]
          ),
          v =
            null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : "",
          D = () => {
            h(), null == R || R();
          },
          k = M === _.Step.CONFIRM,
          j = (0, o.isApplicationUserSubscription)(
            null !== (n = null == y ? void 0 : y.flags) && void 0 !== n ? n : 0
          ),
          F =
            null != B && B.benefits.length > 0
              ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: B.benefits.length }
                )
              : null;
        return (
          p
            ? x
              ? (C = (0, a.jsx)(c.BenefitsConfirmationLite, {
                  title:
                    N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: v }
                    ),
                  subtitle:
                    null != B && B.benefits.length > 0
                      ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: F }
                        )
                      : null,
                  onConfirm: D,
                  confirmCta:
                    N.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((C =
                  null != B && null != b
                    ? (0, a.jsx)(d.BenefitsConfirmation, {
                        icon: B.thumbnail,
                        storeListingBenefits: B.benefits,
                        application: b,
                        title:
                          N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: v }
                          ),
                        subtitle:
                          N.default.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: j
                          ? N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == b ? void 0 : b.name }
                            )
                          : N.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: v }
                            ),
                      })
                    : (0, a.jsx)(P.default, {})),
                (O = (0, a.jsx)(E.default, {
                  onPrimary: D,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    N.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (C = x
                ? (0, a.jsx)(c.PurchaseConfirmationLite, {
                    tierName: v,
                    onConfirm: D,
                    subscription: L,
                  })
                : (0, a.jsx)(d.PurchaseConfirmation, {
                    tierName: v,
                    onConfirm: D,
                    subscription: L,
                  })),
          l.useEffect(() => {
            i.default.useReducedMotion &&
              k &&
              U(window.innerWidth / 2, window.innerHeight / 2);
          }, [U, k]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(T.PaymentPortalBody, {
                children: [(0, a.jsx)(A.default, {}), C],
              }),
              null != O && (0, a.jsx)(T.PaymentPortalFooter, { children: O }),
            ],
          })
        );
      }
    },
    473878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007"),
        n("702976");
      var a = n("37983"),
        l = n("884691"),
        r = n("627445"),
        s = n.n(r),
        i = n("77078"),
        u = n("612039"),
        o = n("527866"),
        d = n("129408"),
        c = n("642906"),
        f = n("85336"),
        S = n("286350"),
        I = n("153727"),
        _ = n("39065"),
        E = n("628738"),
        P = n("650484"),
        T = n("367767"),
        A = n("680439"),
        m = n("782340"),
        N = n("965576");
      function C(e) {
        var t;
        let {
            backButtonEligible: n,
            prevStep: r,
            showGuildPicker: C,
            handleStepChange: O,
            trialFooterMessageOverride: p,
            reviewWarningMessage: h,
            planGroup: R,
            openInvoiceId: L,
            analyticsData: M,
            analyticsLocation: g,
            eligibleApplicationSubscriptionGuilds: b,
            handleClose: x,
          } = e,
          {
            activeSubscription: U,
            application: y,
            setUpdatedSubscription: B,
            contextMetadata: v,
            currencies: D,
            paymentSources: k,
            priceOptions: j,
            purchaseError: F,
            purchaseTokenAuthState: H,
            selectedPlan: G,
            selectedSku: w,
            setCurrency: Y,
            setPaymentSourceId: V,
            setPurchaseState: W,
            setPurchaseError: K,
            purchaseState: z,
            subscriptionMetadataRequest: X,
            setSubscriptionMetadataRequest: Z,
            setHasAcceptedTerms: Q,
          } = (0, c.usePaymentContext)();
        s(null != G, "Expected plan to be selected"),
          s(null != y, "Expected application");
        let J = l.useRef(null),
          [q, $] = (0, u.default)(!1, 500),
          [ee, et] = l.useState(null == X ? void 0 : X.guild_id),
          en = (0, d.isApplicationUserSubscription)(
            null !== (t = null == w ? void 0 : w.flags) && void 0 !== t ? t : 0
          );
        l.useEffect(() => {
          null != F &&
            null != J.current &&
            J.current.scrollIntoView({ behavior: "smooth" });
        }, [F]);
        let ea = l.useCallback(
            e => {
              B(e), O(f.Step.CONFIRM);
            },
            [O, B]
          ),
          el = l.useCallback(
            e => {
              et(e), Z({ ...X, guild_id: e });
            },
            [et, Z, X]
          ),
          er = l.useRef(null);
        return z === S.PurchaseState.PURCHASING
          ? (0, a.jsx)(E.default, {})
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(I.default, { className: N.breadcrumbs }),
                (0, a.jsxs)(P.PaymentPortalBody, {
                  children: [
                    (0, a.jsx)(T.default, {}),
                    en &&
                      (0, a.jsxs)("div", {
                        className: N.userSubscriptionDetailsContainer,
                        children: [
                          (0, a.jsx)(i.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              m.default.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, a.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: y.name }
                              ),
                          }),
                        ],
                      }),
                    C &&
                      !en &&
                      (0, a.jsxs)("div", {
                        className: N.guildPickerContainer,
                        children: [
                          (0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            children:
                              m.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: N.guildPickerDescription,
                            children:
                              m.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, a.jsx)(A.GuildPickerDropdown, {
                            selectedGuildId: ee,
                            onGuildChange: el,
                            eligibleApplicationSubscriptionGuilds: b,
                          }),
                        ],
                      }),
                    (0, a.jsx)(o.default, {
                      selectedPlanId: G.id,
                      paymentSources: k,
                      onPaymentSourceChange: e => V(null != e ? e.id : null),
                      priceOptions: j,
                      currencies: D,
                      onCurrencyChange: e => Y(e),
                      handlePaymentSourceAdd: () => O(f.Step.ADD_PAYMENT_STEPS),
                      setHasAcceptedTerms: Q,
                      legalTermsNodeRef: er,
                      hasLegalTermsFlash: q,
                      trialFooterMessageOverride: p,
                      reviewWarningMessage: h,
                      metadata: C || en ? void 0 : X,
                      purchaseState: z,
                      hideSubscriptionDetails: !0,
                      handleClose: x,
                    }),
                  ],
                }),
                (0, a.jsx)(P.PaymentPortalFooter, {
                  children: (0, a.jsx)(_.default, {
                    premiumSubscription: null != U ? U : null,
                    setPurchaseState: W,
                    onBack: () => null != r && O(r),
                    onNext: ea,
                    onPurchaseError: e => K(e),
                    legalTermsNodeRef: er,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: g,
                    baseAnalyticsData: M,
                    flowStartTime: v.startTime,
                    planGroup: R,
                    purchaseTokenAuthState: H,
                    openInvoiceId: L,
                    metadata: en ? void 0 : X,
                    backButtonEligible: n,
                    invoiceError: null,
                    disablePurchase:
                      (null == X ? void 0 : X.guild_id) == null && !en,
                  }),
                }),
              ],
            });
      }
    },
    179387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("834897"),
        i = n("560350"),
        u = n("129408"),
        o = n("713536"),
        d = n("640820"),
        c = n("305961"),
        f = n("642906"),
        S = n("85336"),
        I = n("159149"),
        _ = n("650484"),
        E = n("101703"),
        P = n("782340");
      function T(e) {
        let {
            application: t,
            listing: n,
            handleStepChange: T,
            handleClose: A,
          } = e,
          { subscriptionMetadataRequest: m } = (0, f.usePaymentContext)(),
          N = (0, s.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          C = (0, u.isApplicationUserSubscription)(n.sku_flags),
          O = (0, r.useStateFromStores)([c.default], () =>
            c.default.getGuild(null == m ? void 0 : m.guild_id)
          ),
          p = l.useCallback(() => T(S.Step.REVIEW), [T]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(_.PaymentPortalBody, {
              children: N
                ? (0, a.jsx)(d.BenefitsConfirmationLite, {
                    confirmCta:
                      P.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: p,
                    onCancel: A,
                    title:
                      P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: C
                      ? P.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == O ? void 0 : O.name }
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, a.jsx)(o.BenefitsConfirmation, {
                    icon:
                      null != n.image_asset
                        ? (0, i.transformStoreAssetFromServer)(n.image_asset)
                        : null,
                    storeListingBenefits: n.store_listing_benefits,
                    skuBenefits: n.sku_benefits.benefits,
                    application: t,
                    title:
                      P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: C
                      ? P.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : P.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: C
                      ? P.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: t.name }
                        )
                      : P.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !N &&
              (0, a.jsx)(_.PaymentPortalFooter, {
                children: (0, a.jsx)(I.default, {
                  onBack: A,
                  backText:
                    P.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: p,
                  primaryCTA: I.CTAType.CONTINUE,
                  primaryText:
                    P.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
      }
    },
    999043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getApplicationSubscriptionPaymentSteps: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("85336"),
        r = n("262683"),
        s = n("292215"),
        i = n("574297"),
        u = n("473878"),
        o = n("179387"),
        d = n("542515"),
        c = n("782340");
      function f(e) {
        let {
            guildId: t,
            eligibleApplicationSubscriptionGuilds: n,
            application: f,
            listing: S,
            showBenefitsFirst: I,
          } = e,
          _ = [
            {
              key: null,
              renderStep: e =>
                (0, a.jsx)(d.default, {
                  initialStep: I ? l.Step.BENEFITS : l.Step.REVIEW,
                  guildId: t,
                  ...e,
                }),
            },
            {
              key: l.Step.BENEFITS,
              renderStep: e =>
                (0, a.jsx)(o.default, { application: f, listing: S, ...e }),
              options: {
                useBreadcrumbLabel: () =>
                  c.default.Messages
                    .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
              },
            },
            {
              key: l.Step.ADD_PAYMENT_STEPS,
              renderStep: e =>
                (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(r.PaymentModalAddPaymentStep, {
                    ...e,
                    breadcrumbSteps: [
                      l.Step.ADD_PAYMENT_STEPS,
                      l.Step.REVIEW,
                      l.Step.CONFIRM,
                    ],
                  }),
                }),
              options: { renderHeader: !0 },
            },
            ...s.SHARED_STEP_CONFIGS,
            {
              key: l.Step.REVIEW,
              renderStep: e =>
                (0, a.jsx)(u.default, {
                  backButtonEligible: !!I || void 0,
                  prevStep: I ? l.Step.BENEFITS : void 0,
                  showGuildPicker: null == t,
                  eligibleApplicationSubscriptionGuilds: n,
                  ...e,
                }),
              options: {
                renderHeader: !0,
                useBreadcrumbLabel: () =>
                  c.default.Messages.BILLING_STEP_REVIEW,
              },
            },
            {
              key: l.Step.CONFIRM,
              renderStep: e =>
                (0, a.jsx)(i.default, { showBenefits: !I, ...e }),
            },
          ];
        return _;
      }
    },
    542515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        r = n("245187"),
        s = n("10514"),
        i = n("599110"),
        u = n("719923"),
        o = n("635357"),
        d = n("642906"),
        c = n("628738"),
        f = n("49111");
      function S(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: S,
            setAnalyticsData: I,
            handleClose: _,
          } = e,
          {
            blockedPayments: E,
            setStep: P,
            hasFetchedSubscriptions: T,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: m,
            selectedSkuId: N,
            setSelectedSkuId: C,
            setSelectedPlanId: O,
            priceOptions: p,
            setSubscriptionMetadataRequest: h,
          } = (0, d.usePaymentContext)(),
          { isGift: R } = (0, o.useGiftContext)(),
          [L, M] = l.useState(!T || !A || m);
        return (l.useEffect(() => {
          M(!T || !A || m);
        }, [m, A, T]),
        l.useEffect(() => {
          null != S && h({ guild_id: S });
        }, [S, h]),
        l.useEffect(() => {
          O(n);
          let e = null != n ? s.default.get(n) : null;
          !L &&
            !E &&
            (I(t => {
              let n = null != e ? (0, u.getPrice)(e.id, !1, R, p) : void 0,
                a = {
                  ...t,
                  subscription_plan_id: null == e ? void 0 : e.id,
                  price: null == n ? void 0 : n.amount,
                  regular_price: null == e ? void 0 : e.price,
                  currency: p.currency,
                };
              return (
                i.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
              );
            }),
            null != e && (C(null == e ? void 0 : e.skuId), P(t)));
        }, [E, n, R, L, p, N, I, O, C, P, t]),
        L)
          ? (0, a.jsx)(c.default, {})
          : E
            ? (0, a.jsx)(r.BlockedPaymentsContentModal, { onClose: _ })
            : null;
      }
    },
    680439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildPickerDropdown: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("782340"),
        s = n("641896");
      function i(e) {
        let {
            selectedGuildId: t,
            onGuildChange: n,
            eligibleApplicationSubscriptionGuilds: i,
          } = e,
          u = i.map(e => ({ value: e.id, label: e.name }));
        return (0, a.jsx)(l.SearchableSelect, {
          className: s.select,
          maxVisibleItems: 5,
          value: t,
          placeholder:
            r.default.Messages
              .APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
          options: u,
          onChange: e => {
            n(e);
          },
        });
      }
    },
    65324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("70102");
      var a = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("206230"),
        i = n("491605"),
        u = n("642716"),
        o = n("646718");
      function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: f,
          } = e,
          S = (0, r.useStateFromStores)(
            [s.default],
            () => s.default.useReducedMotion
          ),
          [I, _] = l.useState(c),
          E = l.useRef((0, u.getGiftAnimationData)(t, I)),
          [P, T] = l.useState(null == f),
          [A, m] = l.useState(!1),
          [N, C] = l.useState(-1),
          O = () => {
            (E.current = (0, u.getGiftAnimationData)(t, I)), C(e => e + 1);
          },
          p = () => {
            T(!1), m(!0), C(-1), _(c);
          };
        l.useEffect(() => {
          null == f && _(c);
        }, [f, c]),
          l.useEffect(() => {
            if (null != f && N >= 0) {
              p();
              return;
            }
            O();
          }, [t, f]),
          l.useEffect(() => {
            (!A || null == f) && O();
          }, [I]),
          l.useEffect(() => {
            A && (T(null == f), m(!1), O());
          }, [A]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, a.jsx)(i.default, {
          importData: E.current,
          shouldAnimate: !S && d,
          className: n,
          versionKey: N,
          onComplete:
            null != f
              ? () => {
                  null != f && (_(f), T(!0));
                }
              : void 0,
          loop: P,
        });
      }
    },
    661128: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUnsupportedExternalSubscriptionModalHandler: function () {
            return c;
          },
          useSubscriptionEntitlements: function () {
            return S;
          },
        });
      var a = n("884691"),
        l = n("446674"),
        r = n("404118"),
        s = n("10514"),
        i = n("437712"),
        u = n("719923"),
        o = n("843455"),
        d = n("782340");
      function c(e, t, n) {
        a.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (r.default.show({
              title: d.default.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName:
                  o.PaymentGatewayToFriendlyName[e.paymentGateway],
              }),
              body: d.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format(
                {
                  paymentGatewayName:
                    o.PaymentGatewayToFriendlyName[e.paymentGateway],
                  subscriptionManagementLink: (0,
                  u.getExternalSubscriptionMethodUrl)(
                    e.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT"
                  ),
                }
              ),
              confirmText: d.default.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let f = [];
      function S(e, t) {
        let n = (0, l.useStateFromStores)([s.default], () =>
            null != e ? s.default.get(e) : null
          ),
          r = (0, l.useStateFromStores)([i.default], () => {
            var e;
            return null != n &&
              null !== (e = i.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          o = a.useMemo(
            () =>
              Array.from(r).filter(e => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [r]
          ),
          d =
            !t &&
            null != n &&
            null != o &&
            o.length >=
              u.default.getIntervalMonths(n.interval, n.intervalCount);
        return { hasEntitlements: d, entitlements: o };
      }
    },
    642716: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getGiftAnimationData: function () {
            return r;
          },
        });
      var a = n("210721"),
        l = n("646718");
      let r = (e, t) => {
        let r;
        switch (e) {
          case l.PremiumGiftStyles.SNOWGLOBE:
            r = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case l.PremiumGiftStyles.BOX:
            r = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case l.PremiumGiftStyles.CUP:
            r = () =>
              n
                .el("544929")
                .then(n.t.bind(n, "544929", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case l.PremiumGiftStyles.STANDARD_BOX:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("353540")
                    .then(n.t.bind(n, "353540", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("303473")
                    .then(n.t.bind(n, "303473", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.CAKE:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("953820")
                    .then(n.t.bind(n, "953820", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("311972")
                    .then(n.t.bind(n, "311972", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.CHEST:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("120467")
                    .then(n.t.bind(n, "120467", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("451680")
                    .then(n.t.bind(n, "451680", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.COFFEE:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("949233")
                    .then(n.t.bind(n, "949233", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("361896")
                    .then(n.t.bind(n, "361896", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("610146")
                    .then(n.t.bind(n, "610146", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("294569")
                    .then(n.t.bind(n, "294569", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.SEASONAL_CAKE:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("335900")
                    .then(n.t.bind(n, "335900", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("566748")
                    .then(n.t.bind(n, "566748", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.SEASONAL_CHEST:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("355472")
                    .then(n.t.bind(n, "355472", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("262001")
                    .then(n.t.bind(n, "262001", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case l.PremiumGiftStyles.SEASONAL_COFFEE:
            switch (t) {
              case a.AnimationState.IDLE:
                r = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                r = () =>
                  n
                    .el("737995")
                    .then(n.t.bind(n, "737995", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .el("433750")
                    .then(n.t.bind(n, "433750", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            r = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return r;
      };
    },
    640820: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BenefitsConfirmationLite: function () {
            return u;
          },
          PurchaseConfirmationLite: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("724038"),
        s = n("782340"),
        i = n("664943");
      let u = e => {
        let {
          onConfirm: t,
          onCancel: n,
          title: u,
          subtitle: o,
          confirmCta: d,
          showOpenDiscord: c = !0,
        } = e;
        return (0, a.jsxs)("div", {
          className: i.confirmationContainer,
          children: [
            (0, a.jsx)(l.Heading, {
              className: i.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: u,
            }),
            null != o
              ? (0, a.jsx)(l.Text, {
                  className: i.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                })
              : null,
            (0, a.jsxs)("div", {
              className: i.buttonContainer,
              children: [
                c &&
                  (0, a.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, r.default)("application_sub_mweb_success_modal"),
                    children:
                      s.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                  }),
                (0, a.jsx)(l.Button, {
                  fullWidth: !0,
                  color: l.Button.Colors.PRIMARY,
                  onClick: t,
                  children: d,
                }),
                null != n &&
                  (0, a.jsx)(l.Button, {
                    fullWidth: !0,
                    color: l.Button.Colors.PRIMARY,
                    look: l.Button.Looks.LINK,
                    onClick: n,
                    children:
                      s.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON,
                  }),
              ],
            }),
          ],
        });
      };
      function o(e) {
        let { onConfirm: t, tierName: n, subscription: u } = e;
        return (0, a.jsxs)("div", {
          className: i.confirmationContainer,
          children: [
            (0, a.jsx)(l.Heading, {
              className: i.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n }
                ),
            }),
            (0, a.jsx)(l.Text, {
              className: i.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == u ? void 0 : u.currentPeriodEnd }
                ),
            }),
            (0, a.jsxs)("div", {
              className: i.buttonContainer,
              children: [
                (0, a.jsx)(l.Button, {
                  className: i.openDiscordButton,
                  onClick: () =>
                    (0, r.default)("application_sub_mweb_success_modal"),
                  children:
                    s.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, a.jsx)(l.Button, {
                  className: i.doneButton,
                  look: l.Button.Looks.BLANK,
                  onClick: t,
                  children:
                    s.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }),
              ],
            }),
          ],
        });
      }
    },
    476108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("446674"),
        l = n("95410"),
        r = n("913144"),
        s = n("49111");
      let i = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = i,
        o = "LAST_VIEWED_PATH";
      class d extends a.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
          u = null != e ? e : i;
        }
        get defaultRoute() {
          return s.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : s.Routes.ME;
        }
        get fallbackRoute() {
          return s.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (d.displayName = "DefaultRouteStore"),
        (d.persistKey = "DefaultRouteStore"),
        (d.migrations = [
          () => {
            let e = l.default.get(o, null);
            return l.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var c = new d(r.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    971427: function (e, t, n) {
      "use strict";
      let a;
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("424973");
      var l = n("446674"),
        r = n("913144");
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class i extends l.default.PersistedStore {
        initialize(e) {
          a = null != e ? e : s;
        }
        getState() {
          return a;
        }
        get hasAcceptedStoreTerms() {
          return a.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return a.hasAcceptedEulaIds.includes(e);
        }
      }
      (i.displayName = "ApplicationStoreUserSettingsStore"),
        (i.persistKey = "ApplicationStoreUserSettingsStore"),
        (i.migrations = [
          e =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]);
      var u = new i(r.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          a.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
          let { eulaId: t } = e;
          if (a.hasAcceptedEulaIds.includes(t)) return !1;
          a.hasAcceptedEulaIds.push(t);
        },
      });
    },
  },
]);
//# sourceMappingURL=61729b1b1a0bcef4085e.js.map
