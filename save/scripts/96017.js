(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96017"],
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
            return s;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        i = n("77078"),
        r = n("390236"),
        s = l.memo(function (e) {
          var t, n, s, u;
          let {
              user: o,
              size: d = i.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...I
            } = e,
            _ = l.useContext(r.default);
          return (0, a.jsx)(i.Avatar, {
            src:
              ((t = o),
              (n = (0, i.getAvatarSize)(d)),
              (s = c),
              (u = _),
              t.getAvatarURL(u, n, s)),
            size: d,
            "aria-label": f ? void 0 : o.username,
            "aria-hidden": f,
            ...I,
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
        i = n("742270"),
        r = n("815157"),
        s = n("391679"),
        u = n("327037"),
        o = n("393414"),
        d = n("271938"),
        c = n("476108"),
        f = n("599110"),
        I = n("65300"),
        _ = n("49111");
      async function S(e) {
        var t, n;
        let a = null === (t = l.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === a || "iOS" === a) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            a = (0, r.generateAttemptId)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, u.fetchCurrentUser)(), (t = d.default.getId());
            } catch {}
          return (0, r.default)((0, i.getDefaultDynamicLinkTemplate)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: a,
          });
        }
        return "discord://";
      }
      async function E(e) {
        let t = await S(e),
          n = (0, r.parseDynamicLink)(t);
        null != n &&
          f.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          I.default.launch(t, e => {
            !e && (0, o.replaceWith)(c.default.fallbackRoute);
          });
      }
    },
    245187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BlockedPaymentsContentSettings: function () {
            return N;
          },
          BlockedPaymentsContentModal: function () {
            return m;
          },
          BlockedPaymentsWarning: function () {
            return C;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        i = n.n(l),
        r = n("669491"),
        s = n("819855"),
        u = n("77078"),
        o = n("841098"),
        d = n("145131"),
        c = n("423487"),
        f = n("701909"),
        I = n("619935"),
        _ = n("49111"),
        S = n("782340"),
        E = n("872773"),
        T = n("584503"),
        A = n("45656");
      function P(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          l = (0, s.isThemeDark)(n) ? T : A;
        return (0, a.jsxs)("div", {
          className: i(E.container, t),
          children: [
            (0, a.jsx)(u.Heading, {
              className: E.header,
              variant: "heading-xl/semibold",
              children: S.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, a.jsxs)(u.Text, {
              className: E.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, a.jsx)("p", {
                  children: S.default.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, a.jsx)("p", {
                  children:
                    S.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                      helpdeskArticle: f.default.getArticleURL(
                        _.HelpdeskArticles.BLOCKED_PAYMENTS
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
      function N() {
        return (0, a.jsx)(P, { className: E.settings });
      }
      function m(e) {
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
              children: (0, a.jsx)(P, { className: E.modal }),
            }),
          ],
        });
      }
      function C(e) {
        let { className: t } = e,
          n = (0, I.useBlockedPaymentsConfig)();
        return n
          ? (0, a.jsxs)(u.Card, {
              className: i(E.blockedPaymentsWarning, t),
              type: u.Card.Types.CUSTOM,
              children: [
                (0, a.jsx)(c.default, {
                  className: E.blockedPaymentsWarningIcon,
                  color: r.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, a.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children:
                    S.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format(
                      {
                        helpdeskArticle: f.default.getArticleURL(
                          _.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    ),
                }),
              ],
            })
          : null;
      }
    },
    628738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("655525");
      function r() {
        return (0, a.jsx)(l.Spinner, { className: i.spinner });
      }
    },
    176108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          inOneStepSubscriptionCheckout: function () {
            return i;
          },
          planSwitchLoadingShowSpinner: function () {
            return r;
          },
          getDefaultPlanOneStepCheckout: function () {
            return s;
          },
        });
      var a = n("719923"),
        l = n("646718");
      function i(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: a,
          startedPaymentFlowWithPaymentSources: i,
        } = e;
        return !t && !n && null != a && l.ACTIVE_PREMIUM_SKUS.includes(a) && i;
      }
      function r(e, t, n) {
        let a = !1;
        if (e && null != t) {
          let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
          null == e && (a = !0);
        }
        return a;
      }
      function s(e, t, n) {
        let i = null != t ? (0, a.getPremiumPlanItem)(t) : null,
          r = l.PREMIUM_SKU_TO_YEARLY_PLAN[e],
          s = null != n ? n : r;
        return (
          null != i
            ? s === i.planId && s === l.PREMIUM_SKU_TO_MONTHLY_PLAN[e]
              ? (s = l.PREMIUM_SKU_TO_YEARLY_PLAN[e])
              : s === i.planId && s === l.PREMIUM_SKU_TO_YEARLY_PLAN[e]
                ? (s = l.PREMIUM_SKU_TO_MONTHLY_PLAN[e])
                : (i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_0 ||
                    i.planId === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1) &&
                  s === l.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
                  (s = l.SubscriptionPlans.PREMIUM_YEAR_TIER_2)
            : s === l.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              (s = l.SubscriptionPlans.PREMIUM_MONTH_TIER_1),
          s
        );
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
        i = n("446674"),
        r = n("834897"),
        s = n("129408"),
        u = n("713536"),
        o = n("640820"),
        d = n("305961"),
        c = n("642906"),
        f = n("85336"),
        I = n("159149"),
        _ = n("650484"),
        S = n("101703"),
        E = n("782340");
      function T(e) {
        let {
            application: t,
            listing: n,
            handleStepChange: T,
            handleClose: A,
          } = e,
          { subscriptionMetadataRequest: P } = (0, c.usePaymentContext)(),
          N = (0, r.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          m = (0, s.isApplicationUserSubscription)(n.sku_flags),
          C = (0, i.useStateFromStores)([d.default], () =>
            d.default.getGuild(null == P ? void 0 : P.guild_id)
          ),
          O = l.useCallback(() => T(f.Step.REVIEW), [T]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(_.PaymentPortalBody, {
              children: N
                ? (0, a.jsx)(o.BenefitsConfirmationLite, {
                    confirmCta:
                      E.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: O,
                    onCancel: A,
                    title:
                      E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: m
                      ? E.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == C ? void 0 : C.name }
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, a.jsx)(u.BenefitsConfirmation, {
                    icon: n.image_asset,
                    storeListingBenefits: n.store_listing_benefits,
                    skuBenefits: n.sku_benefits.benefits,
                    application: t,
                    title:
                      E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: m
                      ? E.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : E.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: m
                      ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: t.name }
                        )
                      : E.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !N &&
              (0, a.jsx)(_.PaymentPortalFooter, {
                children: (0, a.jsx)(I.default, {
                  onBack: A,
                  backText:
                    E.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: O,
                  primaryCTA: I.CTAType.CONTINUE,
                  primaryText:
                    E.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
      }
    },
    104559: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        i = n("627445"),
        r = n.n(i),
        s = n("252438"),
        u = n("834897"),
        o = n("206230"),
        d = n("526887"),
        c = n("129408"),
        f = n("713536"),
        I = n("640820"),
        _ = n("642906"),
        S = n("85336"),
        E = n("159149"),
        T = n("650484"),
        A = n("367767"),
        P = n("101703"),
        N = n("782340");
      function m(e) {
        let t,
          n,
          {
            showBenefits: i,
            application: m,
            listing: C,
            handleClose: O,
            onSubscriptionConfirmation: p,
          } = e,
          {
            selectedPlan: L,
            selectedSkuId: h,
            step: R,
            updatedSubscription: M,
            readySlideId: g,
          } = (0, _.usePaymentContext)();
        r(null != L, "Expected plan to selected"),
          r(null != h, "Expected selectedSkuId"),
          r(null != R, "Step should be set");
        let b = (0, u.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          { createMultipleConfettiAt: U } = l.useContext(
            d.ConfettiCannonContext
          ),
          B = () => {
            O(), null == p || p();
          },
          x = g === S.Step.CONFIRM,
          y = (0, c.isApplicationUserSubscription)(C.sku_flags),
          k = l.useMemo(() => {
            let e = 0,
              t = 0;
            for (let n of C.sku_benefits.benefits)
              n.ref_type === s.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND
                ? (e += 1)
                : n.ref_type === s.SKUBenefitTypes.INTANGIBLE && (t += 1);
            let n = [];
            return (
              0 !== e &&
                n.push(
                  N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format(
                    { commandCount: e }
                  )
                ),
              0 !== t &&
                n.push(
                  N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                    { benefitCount: t }
                  )
                ),
              n
            );
          }, [C]);
        return (
          i
            ? b
              ? (t = (0, a.jsx)(I.BenefitsConfirmationLite, {
                  title:
                    N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: C.name }
                    ),
                  subtitle:
                    k.length > 0
                      ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          {
                            benefits: new Intl.ListFormat(
                              N.default.getLocale()
                            ).format(k),
                          }
                        )
                      : null,
                  onConfirm: B,
                  confirmCta:
                    N.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((t = (0, a.jsx)(f.BenefitsConfirmation, {
                  icon: C.image_asset,
                  storeListingBenefits: C.store_listing_benefits,
                  skuBenefits: C.sku_benefits.benefits,
                  application: m,
                  title:
                    N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                      { tier: C.name }
                    ),
                  subtitle:
                    N.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                  description: y
                    ? N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                        { applicationName: null == m ? void 0 : m.name }
                      )
                    : N.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                        { tier: C.name }
                      ),
                })),
                (n = (0, a.jsx)(E.default, {
                  onPrimary: B,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    N.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (t = b
                ? (0, a.jsx)(I.PurchaseConfirmationLite, {
                    tierName: C.name,
                    onConfirm: B,
                    subscription: M,
                  })
                : (0, a.jsx)(f.PurchaseConfirmation, {
                    tierName: C.name,
                    onConfirm: B,
                    subscription: M,
                  })),
          l.useEffect(() => {
            o.default.useReducedMotion &&
              x &&
              U(window.innerWidth / 2, window.innerHeight / 2);
          }, [U, x]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(T.PaymentPortalBody, {
                children: [(0, a.jsx)(A.default, {}), t],
              }),
              null != n && (0, a.jsx)(T.PaymentPortalFooter, { children: n }),
            ],
          })
        );
      }
    },
    999043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getApplicationSubscriptionPaymentSteps: function () {
            return I;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("85336"),
        i = n("262683"),
        r = n("946359"),
        s = n("724269"),
        u = n("179387"),
        o = n("104559"),
        d = n("542515"),
        c = n("451728"),
        f = n("782340");
      function I(e) {
        let {
            guildId: t,
            eligibleApplicationSubscriptionGuilds: n,
            application: I,
            listing: _,
            showBenefitsFirst: S,
          } = e,
          E = [
            {
              key: null,
              renderStep: e =>
                (0, a.jsx)(d.default, {
                  initialStep: S ? l.Step.BENEFITS : l.Step.REVIEW,
                  guildId: t,
                  ...e,
                }),
            },
            {
              key: l.Step.BENEFITS,
              renderStep: e =>
                (0, a.jsx)(u.default, { application: I, listing: _, ...e }),
              options: {
                useBreadcrumbLabel: () =>
                  f.default.Messages
                    .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
              },
            },
            {
              key: l.Step.ADD_PAYMENT_STEPS,
              renderStep: e =>
                (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(i.PaymentModalAddPaymentStep, {
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
            {
              key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
              renderStep: () => (0, a.jsx)(s.default, {}),
            },
            {
              key: l.Step.AWAITING_AUTHENTICATION,
              renderStep: () => (0, a.jsx)(r.default, {}),
            },
            {
              key: l.Step.REVIEW,
              renderStep: e =>
                (0, a.jsx)(c.default, {
                  application: I,
                  backButtonEligible: !!S || void 0,
                  prevStep: S ? l.Step.BENEFITS : void 0,
                  listing: _,
                  showGuildPicker: null == t,
                  eligibleApplicationSubscriptionGuilds: n,
                  ...e,
                }),
              options: {
                renderHeader: !0,
                useBreadcrumbLabel: () =>
                  f.default.Messages.BILLING_STEP_REVIEW,
              },
            },
            {
              key: l.Step.CONFIRM,
              renderStep: e =>
                (0, a.jsx)(o.default, {
                  application: I,
                  listing: _,
                  showBenefits: !S,
                  ...e,
                }),
            },
          ];
        return E;
      }
    },
    542515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        i = n("245187"),
        r = n("10514"),
        s = n("599110"),
        u = n("719923"),
        o = n("635357"),
        d = n("642906"),
        c = n("628738"),
        f = n("49111");
      function I(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: I,
            setAnalyticsData: _,
            handleClose: S,
          } = e,
          {
            blockedPayments: E,
            setStep: T,
            hasFetchedSubscriptions: A,
            hasFetchedSubscriptionPlans: P,
            currencyLoading: N,
            selectedSkuId: m,
            setSelectedSkuId: C,
            setSelectedPlanId: O,
            priceOptions: p,
            setSubscriptionMetadataRequest: L,
          } = (0, d.usePaymentContext)(),
          { isGift: h } = (0, o.useGiftContext)(),
          [R, M] = l.useState(!A || !P || N);
        return (l.useEffect(() => {
          M(!A || !P || N);
        }, [N, P, A]),
        l.useEffect(() => {
          null != I && L({ guild_id: I });
        }, [I, L]),
        l.useEffect(() => {
          O(n);
          let e = null != n ? r.default.get(n) : null;
          !R &&
            !E &&
            (_(t => {
              let n = null != e ? (0, u.getPrice)(e.id, !1, h, p) : void 0,
                a = {
                  ...t,
                  subscription_plan_id: null == e ? void 0 : e.id,
                  price: null == n ? void 0 : n.amount,
                  regular_price: null == e ? void 0 : e.price,
                  currency: p.currency,
                };
              return (
                s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
              );
            }),
            null != e && (C(null == e ? void 0 : e.skuId), T(t)));
        }, [E, n, h, R, p, m, _, O, C, T, t]),
        R)
          ? (0, a.jsx)(c.default, {})
          : E
            ? (0, a.jsx)(i.BlockedPaymentsContentModal, { onClose: S })
            : null;
      }
    },
    451728: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        i = n("627445"),
        r = n.n(i),
        s = n("77078"),
        u = n("612039"),
        o = n("527866"),
        d = n("129408"),
        c = n("642906"),
        f = n("85336"),
        I = n("286350"),
        _ = n("153727"),
        S = n("39065"),
        E = n("628738"),
        T = n("650484"),
        A = n("367767"),
        P = n("680439"),
        N = n("782340"),
        m = n("699159");
      function C(e) {
        let {
            application: t,
            backButtonEligible: n,
            prevStep: i,
            showGuildPicker: C,
            handleStepChange: O,
            trialFooterMessageOverride: p,
            reviewWarningMessage: L,
            planGroup: h,
            openInvoiceId: R,
            analyticsData: M,
            analyticsLocation: g,
            eligibleApplicationSubscriptionGuilds: b,
            listing: U,
            handleClose: B,
          } = e,
          {
            activeSubscription: x,
            setUpdatedSubscription: y,
            contextMetadata: k,
            currencies: D,
            paymentSources: v,
            priceOptions: j,
            purchaseError: H,
            purchaseTokenAuthState: F,
            selectedPlan: G,
            setCurrency: w,
            setPaymentSourceId: V,
            setPurchaseState: Y,
            setPurchaseError: K,
            step: W,
            purchaseState: X,
            subscriptionMetadataRequest: z,
            setSubscriptionMetadataRequest: Z,
            setHasAcceptedTerms: Q,
          } = (0, c.usePaymentContext)();
        r(null != G, "Expected plan to be selected"),
          r(null != W, "Step should be set");
        let J = l.useRef(null),
          [q, $] = (0, u.default)(!1, 500),
          [ee, et] = l.useState(null == z ? void 0 : z.guild_id),
          en = (0, d.isApplicationUserSubscription)(U.sku_flags);
        l.useEffect(() => {
          null != H &&
            null != J.current &&
            J.current.scrollIntoView({ behavior: "smooth" });
        }, [H]);
        let ea = l.useCallback(
            e => {
              y(e), O(f.Step.CONFIRM);
            },
            [O, y]
          ),
          el = l.useCallback(
            e => {
              et(e), Z({ ...z, guild_id: e });
            },
            [et, Z, z]
          ),
          ei = l.useRef(null);
        return X === I.PurchaseState.PURCHASING
          ? (0, a.jsx)(E.default, {})
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(_.default, { className: m.breadcrumbs }),
                (0, a.jsxs)(T.PaymentPortalBody, {
                  children: [
                    (0, a.jsx)(A.default, {}),
                    en &&
                      (0, a.jsxs)("div", {
                        className: m.userSubscriptionDetailsContainer,
                        children: [
                          (0, a.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              N.default.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, a.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: t.name }
                              ),
                          }),
                        ],
                      }),
                    C &&
                      !en &&
                      (0, a.jsxs)("div", {
                        className: m.guildPickerContainer,
                        children: [
                          (0, a.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children:
                              N.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, a.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: m.guildPickerDescription,
                            children:
                              N.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, a.jsx)(P.GuildPickerDropdown, {
                            selectedGuildId: ee,
                            onGuildChange: el,
                            eligibleApplicationSubscriptionGuilds: b,
                          }),
                        ],
                      }),
                    (0, a.jsx)(o.default, {
                      selectedPlanId: G.id,
                      paymentSources: v,
                      onPaymentSourceChange: e => V(null != e ? e.id : null),
                      priceOptions: j,
                      currencies: D,
                      onCurrencyChange: e => w(e),
                      handlePaymentSourceAdd: () => O(f.Step.ADD_PAYMENT_STEPS),
                      setHasAcceptedTerms: Q,
                      legalTermsNodeRef: ei,
                      hasLegalTermsFlash: q,
                      trialFooterMessageOverride: p,
                      reviewWarningMessage: L,
                      metadata: C || en ? void 0 : z,
                      purchaseState: X,
                      hideSubscriptionDetails: !0,
                      handleClose: B,
                    }),
                  ],
                }),
                (0, a.jsx)(T.PaymentPortalFooter, {
                  children: (0, a.jsx)(S.default, {
                    premiumSubscription: null != x ? x : null,
                    setPurchaseState: Y,
                    onBack: () => null != i && O(i),
                    onNext: ea,
                    onPurchaseError: e => K(e),
                    legalTermsNodeRef: ei,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: g,
                    baseAnalyticsData: M,
                    flowStartTime: k.startTime,
                    planGroup: h,
                    purchaseTokenAuthState: F,
                    openInvoiceId: R,
                    metadata: en ? void 0 : z,
                    backButtonEligible: n,
                    invoiceError: null,
                    disablePurchase:
                      (null == z ? void 0 : z.guild_id) == null && !en,
                  }),
                }),
              ],
            });
      }
    },
    680439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildPickerDropdown: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("782340"),
        r = n("641896");
      function s(e) {
        let {
            selectedGuildId: t,
            onGuildChange: n,
            eligibleApplicationSubscriptionGuilds: s,
          } = e,
          u = s.map(e => ({ value: e.id, label: e.name }));
        return (0, a.jsx)(l.SearchableSelect, {
          className: r.select,
          maxVisibleItems: 5,
          value: t,
          placeholder:
            i.default.Messages
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
        i = n("446674"),
        r = n("206230"),
        s = n("491605"),
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
          I = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          [_, S] = l.useState(c),
          E = l.useRef((0, u.getGiftAnimationData)(t, _)),
          [T, A] = l.useState(null == f),
          [P, N] = l.useState(!1),
          [m, C] = l.useState(-1),
          O = () => {
            (E.current = (0, u.getGiftAnimationData)(t, _)), C(e => e + 1);
          },
          p = () => {
            A(!1), N(!0), C(-1), S(c);
          };
        l.useEffect(() => {
          null == f && S(c);
        }, [f, c]),
          l.useEffect(() => {
            if (null != f && m >= 0) {
              p();
              return;
            }
            O();
          }, [t, f]),
          l.useEffect(() => {
            (!P || null == f) && O();
          }, [_]),
          l.useEffect(() => {
            P && (A(null == f), N(!1), O());
          }, [P]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, a.jsx)(s.default, {
          importData: E.current,
          shouldAnimate: !I && d,
          className: n,
          versionKey: m,
          onComplete:
            null != f
              ? () => {
                  null != f && (S(f), A(!0));
                }
              : void 0,
          loop: T,
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
            return I;
          },
        });
      var a = n("884691"),
        l = n("446674"),
        i = n("404118"),
        r = n("10514"),
        s = n("437712"),
        u = n("719923"),
        o = n("843455"),
        d = n("782340");
      function c(e, t, n) {
        a.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (i.default.show({
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
      function I(e, t) {
        let n = (0, l.useStateFromStores)([r.default], () =>
            null != e ? r.default.get(e) : null
          ),
          i = (0, l.useStateFromStores)([s.default], () => {
            var e;
            return null != n &&
              null !== (e = s.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          o = a.useMemo(
            () =>
              Array.from(i).filter(e => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [i]
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
            return i;
          },
        });
      var a = n("210721"),
        l = n("646718");
      let i = (e, t) => {
        let i;
        switch (e) {
          case l.PremiumGiftStyles.SNOWGLOBE:
            i = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case l.PremiumGiftStyles.BOX:
            i = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case l.PremiumGiftStyles.CUP:
            i = () =>
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
                i = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("353540")
                    .then(n.t.bind(n, "353540", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("953820")
                    .then(n.t.bind(n, "953820", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("120467")
                    .then(n.t.bind(n, "120467", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("949233")
                    .then(n.t.bind(n, "949233", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("610146")
                    .then(n.t.bind(n, "610146", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("335900")
                    .then(n.t.bind(n, "335900", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("355472")
                    .then(n.t.bind(n, "355472", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
                i = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                i = () =>
                  n
                    .el("737995")
                    .then(n.t.bind(n, "737995", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
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
            i = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return i;
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
        i = n("724038"),
        r = n("782340"),
        s = n("664943");
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
          className: s.confirmationContainer,
          children: [
            (0, a.jsx)(l.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: u,
            }),
            null != o
              ? (0, a.jsx)(l.Text, {
                  className: s.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                })
              : null,
            (0, a.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                c &&
                  (0, a.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, i.default)("application_sub_mweb_success_modal"),
                    children:
                      r.default.Messages
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
                      r.default.Messages
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
          className: s.confirmationContainer,
          children: [
            (0, a.jsx)(l.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n }
                ),
            }),
            (0, a.jsx)(l.Text, {
              className: s.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == u ? void 0 : u.currentPeriodEnd }
                ),
            }),
            (0, a.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                (0, a.jsx)(l.Button, {
                  className: s.openDiscordButton,
                  onClick: () =>
                    (0, i.default)("application_sub_mweb_success_modal"),
                  children:
                    r.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, a.jsx)(l.Button, {
                  className: s.doneButton,
                  look: l.Button.Looks.BLANK,
                  onClick: t,
                  children:
                    r.default.Messages
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
        i = n("913144"),
        r = n("49111");
      let s = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = s,
        o = "LAST_VIEWED_PATH";
      class d extends a.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
          u = null != e ? e : s;
        }
        get defaultRoute() {
          return r.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : r.Routes.ME;
        }
        get fallbackRoute() {
          return r.Routes.ME;
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
      var c = new d(i.default, {
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
    252438: function (e, t, n) {
      "use strict";
      var a, l;
      n.r(t),
        n.d(t, {
          SKUBenefitTypes: function () {
            return a;
          },
        }),
        n("222007"),
        ((l = a || (a = {}))[(l.INTANGIBLE = 1)] = "INTANGIBLE"),
        (l[(l.APPLICATION_PREMIUM_COMMAND = 2)] =
          "APPLICATION_PREMIUM_COMMAND");
    },
  },
]);
//# sourceMappingURL=6959ddadf9afc32a5c9e.js.map
