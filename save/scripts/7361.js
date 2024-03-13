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
              "aria-hidden": I = !1,
              ...f
            } = e,
            S = l.useContext(s.default);
          return (0, a.jsx)(r.Avatar, {
            src:
              ((t = o),
              (n = (0, r.getAvatarSize)(d)),
              (i = c),
              (u = S),
              t.getAvatarURL(u, n, i)),
            size: d,
            "aria-label": I ? void 0 : o.username,
            "aria-hidden": I,
            ...f,
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
        I = n("599110"),
        f = n("65300"),
        S = n("49111");
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
          I.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, i.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          f.default.launch(t, e => {
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
        I = n("701909"),
        f = n("619935"),
        S = n("49111"),
        _ = n("782340"),
        E = n("872773"),
        T = n("584503"),
        P = n("45656");
      function A(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          l = (0, i.isThemeDark)(n) ? T : P;
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
                      helpdeskArticle: I.default.getArticleURL(
                        S.HelpdeskArticles.BLOCKED_PAYMENTS
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
          n = (0, f.useBlockedPaymentsConfig)();
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
                        helpdeskArticle: I.default.getArticleURL(
                          S.HelpdeskArticles.BLOCKED_PAYMENTS
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
            return I;
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
      function I(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: l,
            application: I,
          } = (0, i.usePaymentContext)();
        r(null != l, "Expected selectedSkuId"),
          r(null != I, "Expected application");
        let f = n[l];
        r(null != f, "Expected sku");
        let S =
          d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: I.name, itemName: f.name }
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
                (0, a.jsx)(s.Text, { variant: "text-md/normal", children: S }),
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
            return f;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return S;
          },
          REVIEW_STEP_CONFIG: function () {
            return T;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return P;
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
        I = n("782340");
      let f = {
          key: null,
          renderStep: e => (0, a.jsx)(c.OneTimePaymentPredicateStep, { ...e }),
        },
        S = {
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
        T = {
          key: r.Step.REVIEW,
          renderStep: e => (0, a.jsx)(d.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => I.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        P = {
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
            return f;
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
        I = n("49111");
      function f(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: r,
            hasFetchedSkus: f,
            paymentSources: S,
            hasFetchedPaymentSources: _,
            application: E,
            skusById: T,
            selectedSkuId: P,
          } = (0, o.usePaymentContext)(),
          { isGift: A } = (0, u.useGiftContext)(),
          [m, N] = l.useState(!0);
        return (l.useEffect(() => {
          let e = null != E;
          f && _ && e && N(!1);
        }, [f, _, E]),
        l.useEffect(() => {
          if (m || r) return;
          s(null != P, "Expected selectedSkuId");
          let e = T[P];
          if (
            A &&
            (null == e ? void 0 : e.productLine) ===
              I.SKUProductLines.COLLECTIBLES
          ) {
            t(d.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(S).length) {
            t(d.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(d.Step.REVIEW);
        }, [m, r, t, S, A, T, P]),
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
        I = n("85336"),
        f = n("286350"),
        S = n("153727"),
        _ = n("39065"),
        E = n("628738"),
        T = n("650484"),
        P = n("367767"),
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
            reviewWarningMessage: L,
            planGroup: h,
            openInvoiceId: R,
            analyticsData: M,
            analyticsLocation: g,
            eligibleApplicationSubscriptionGuilds: b,
            handleClose: U,
          } = e,
          {
            activeSubscription: x,
            application: y,
            setUpdatedSubscription: B,
            contextMetadata: D,
            currencies: k,
            paymentSources: v,
            priceOptions: j,
            purchaseError: F,
            purchaseTokenAuthState: H,
            selectedPlan: G,
            selectedSku: w,
            setCurrency: Y,
            setPaymentSourceId: V,
            setPurchaseState: W,
            setPurchaseError: K,
            purchaseState: X,
            subscriptionMetadataRequest: z,
            setSubscriptionMetadataRequest: Z,
            setHasAcceptedTerms: Q,
          } = (0, c.usePaymentContext)();
        s(null != G, "Expected plan to be selected"),
          s(null != y, "Expected application");
        let J = l.useRef(null),
          [q, $] = (0, u.default)(!1, 500),
          [ee, et] = l.useState(null == z ? void 0 : z.guild_id),
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
              B(e), O(I.Step.CONFIRM);
            },
            [O, B]
          ),
          el = l.useCallback(
            e => {
              et(e), Z({ ...z, guild_id: e });
            },
            [et, Z, z]
          ),
          er = l.useRef(null);
        return X === f.PurchaseState.PURCHASING
          ? (0, a.jsx)(E.default, {})
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(S.default, { className: N.breadcrumbs }),
                (0, a.jsxs)(T.PaymentPortalBody, {
                  children: [
                    (0, a.jsx)(P.default, {}),
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
                      paymentSources: v,
                      onPaymentSourceChange: e => V(null != e ? e.id : null),
                      priceOptions: j,
                      currencies: k,
                      onCurrencyChange: e => Y(e),
                      handlePaymentSourceAdd: () => O(I.Step.ADD_PAYMENT_STEPS),
                      setHasAcceptedTerms: Q,
                      legalTermsNodeRef: er,
                      hasLegalTermsFlash: q,
                      trialFooterMessageOverride: p,
                      reviewWarningMessage: L,
                      metadata: C || en ? void 0 : z,
                      purchaseState: X,
                      hideSubscriptionDetails: !0,
                      handleClose: U,
                    }),
                  ],
                }),
                (0, a.jsx)(T.PaymentPortalFooter, {
                  children: (0, a.jsx)(_.default, {
                    premiumSubscription: null != x ? x : null,
                    setPurchaseState: W,
                    onBack: () => null != r && O(r),
                    onNext: ea,
                    onPurchaseError: e => K(e),
                    legalTermsNodeRef: er,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: g,
                    baseAnalyticsData: M,
                    flowStartTime: D.startTime,
                    planGroup: h,
                    purchaseTokenAuthState: H,
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
        i = n("129408"),
        u = n("713536"),
        o = n("640820"),
        d = n("305961"),
        c = n("642906"),
        I = n("85336"),
        f = n("159149"),
        S = n("650484"),
        _ = n("101703"),
        E = n("782340");
      function T(e) {
        let {
            application: t,
            listing: n,
            handleStepChange: T,
            handleClose: P,
          } = e,
          { subscriptionMetadataRequest: A } = (0, c.usePaymentContext)(),
          m = (0, s.default)(_.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          N = (0, i.isApplicationUserSubscription)(n.sku_flags),
          C = (0, r.useStateFromStores)([d.default], () =>
            d.default.getGuild(null == A ? void 0 : A.guild_id)
          ),
          O = l.useCallback(() => T(I.Step.REVIEW), [T]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(S.PaymentPortalBody, {
              children: m
                ? (0, a.jsx)(o.BenefitsConfirmationLite, {
                    confirmCta:
                      E.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: O,
                    onCancel: P,
                    title:
                      E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: N
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
                    subtitle: N
                      ? E.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : E.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: N
                      ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: t.name }
                        )
                      : E.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !m &&
              (0, a.jsx)(S.PaymentPortalFooter, {
                children: (0, a.jsx)(f.default, {
                  onBack: P,
                  backText:
                    E.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: O,
                  primaryCTA: f.CTAType.CONTINUE,
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
            return N;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        r = n("627445"),
        s = n.n(r),
        i = n("252438"),
        u = n("834897"),
        o = n("206230"),
        d = n("526887"),
        c = n("129408"),
        I = n("713536"),
        f = n("640820"),
        S = n("642906"),
        _ = n("85336"),
        E = n("159149"),
        T = n("650484"),
        P = n("367767"),
        A = n("101703"),
        m = n("782340");
      function N(e) {
        let t,
          n,
          {
            showBenefits: r,
            application: N,
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
          } = (0, S.usePaymentContext)();
        s(null != L, "Expected plan to selected"),
          s(null != h, "Expected selectedSkuId"),
          s(null != R, "Step should be set");
        let b = (0, u.default)(A.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          { createMultipleConfettiAt: U } = l.useContext(
            d.ConfettiCannonContext
          ),
          x = () => {
            O(), null == p || p();
          },
          y = g === _.Step.CONFIRM,
          B = (0, c.isApplicationUserSubscription)(C.sku_flags),
          D = l.useMemo(() => {
            let e = 0,
              t = 0;
            for (let n of C.sku_benefits.benefits)
              n.ref_type === i.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND
                ? (e += 1)
                : n.ref_type === i.SKUBenefitTypes.INTANGIBLE && (t += 1);
            let n = [];
            return (
              0 !== e &&
                n.push(
                  m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format(
                    { commandCount: e }
                  )
                ),
              0 !== t &&
                n.push(
                  m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                    { benefitCount: t }
                  )
                ),
              n
            );
          }, [C]);
        return (
          r
            ? b
              ? (t = (0, a.jsx)(f.BenefitsConfirmationLite, {
                  title:
                    m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: C.name }
                    ),
                  subtitle:
                    D.length > 0
                      ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          {
                            benefits: new Intl.ListFormat(
                              m.default.getLocale()
                            ).format(D),
                          }
                        )
                      : null,
                  onConfirm: x,
                  confirmCta:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((t = (0, a.jsx)(I.BenefitsConfirmation, {
                  icon: C.image_asset,
                  storeListingBenefits: C.store_listing_benefits,
                  skuBenefits: C.sku_benefits.benefits,
                  application: N,
                  title:
                    m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                      { tier: C.name }
                    ),
                  subtitle:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                  description: B
                    ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                        { applicationName: null == N ? void 0 : N.name }
                      )
                    : m.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                        { tier: C.name }
                      ),
                })),
                (n = (0, a.jsx)(E.default, {
                  onPrimary: x,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (t = b
                ? (0, a.jsx)(f.PurchaseConfirmationLite, {
                    tierName: C.name,
                    onConfirm: x,
                    subscription: M,
                  })
                : (0, a.jsx)(I.PurchaseConfirmation, {
                    tierName: C.name,
                    onConfirm: x,
                    subscription: M,
                  })),
          l.useEffect(() => {
            o.default.useReducedMotion &&
              y &&
              U(window.innerWidth / 2, window.innerHeight / 2);
          }, [U, y]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(T.PaymentPortalBody, {
                children: [(0, a.jsx)(P.default, {}), t],
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
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("85336"),
        r = n("262683"),
        s = n("292215"),
        i = n("473878"),
        u = n("179387"),
        o = n("104559"),
        d = n("542515"),
        c = n("782340");
      function I(e) {
        let {
            guildId: t,
            eligibleApplicationSubscriptionGuilds: n,
            application: I,
            listing: f,
            showBenefitsFirst: S,
          } = e,
          _ = [
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
                (0, a.jsx)(u.default, { application: I, listing: f, ...e }),
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
                (0, a.jsx)(i.default, {
                  backButtonEligible: !!S || void 0,
                  prevStep: S ? l.Step.BENEFITS : void 0,
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
                (0, a.jsx)(o.default, {
                  application: I,
                  listing: f,
                  showBenefits: !S,
                  ...e,
                }),
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
            return f;
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
        I = n("49111");
      function f(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: f,
            setAnalyticsData: S,
            handleClose: _,
          } = e,
          {
            blockedPayments: E,
            setStep: T,
            hasFetchedSubscriptions: P,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: m,
            selectedSkuId: N,
            setSelectedSkuId: C,
            setSelectedPlanId: O,
            priceOptions: p,
            setSubscriptionMetadataRequest: L,
          } = (0, d.usePaymentContext)(),
          { isGift: h } = (0, o.useGiftContext)(),
          [R, M] = l.useState(!P || !A || m);
        return (l.useEffect(() => {
          M(!P || !A || m);
        }, [m, A, P]),
        l.useEffect(() => {
          null != f && L({ guild_id: f });
        }, [f, L]),
        l.useEffect(() => {
          O(n);
          let e = null != n ? s.default.get(n) : null;
          !R &&
            !E &&
            (S(t => {
              let n = null != e ? (0, u.getPrice)(e.id, !1, h, p) : void 0,
                a = {
                  ...t,
                  subscription_plan_id: null == e ? void 0 : e.id,
                  price: null == n ? void 0 : n.amount,
                  regular_price: null == e ? void 0 : e.price,
                  currency: p.currency,
                };
              return (
                i.default.track(I.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
              );
            }),
            null != e && (C(null == e ? void 0 : e.skuId), T(t)));
        }, [E, n, h, R, p, N, S, O, C, T, t]),
        R)
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
            idleAnimationState: I,
          } = e,
          f = (0, r.useStateFromStores)(
            [s.default],
            () => s.default.useReducedMotion
          ),
          [S, _] = l.useState(c),
          E = l.useRef((0, u.getGiftAnimationData)(t, S)),
          [T, P] = l.useState(null == I),
          [A, m] = l.useState(!1),
          [N, C] = l.useState(-1),
          O = () => {
            (E.current = (0, u.getGiftAnimationData)(t, S)), C(e => e + 1);
          },
          p = () => {
            P(!1), m(!0), C(-1), _(c);
          };
        l.useEffect(() => {
          null == I && _(c);
        }, [I, c]),
          l.useEffect(() => {
            if (null != I && N >= 0) {
              p();
              return;
            }
            O();
          }, [t, I]),
          l.useEffect(() => {
            (!A || null == I) && O();
          }, [S]),
          l.useEffect(() => {
            A && (P(null == I), m(!1), O());
          }, [A]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, a.jsx)(i.default, {
          importData: E.current,
          shouldAnimate: !f && d,
          className: n,
          versionKey: N,
          onComplete:
            null != I
              ? () => {
                  null != I && (_(I), P(!0));
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
            return f;
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
      let I = [];
      function f(e, t) {
        let n = (0, l.useStateFromStores)([s.default], () =>
            null != e ? s.default.get(e) : null
          ),
          r = (0, l.useStateFromStores)([i.default], () => {
            var e;
            return null != n &&
              null !== (e = i.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : I;
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
//# sourceMappingURL=0b533fda6f2012ddb637.js.map
