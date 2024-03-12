(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18955"],
  {
    108043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
        label: "Guild Boosting Legacy Pricing Fix Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Use Invoice Preview for Boost Pricing",
            config: { enabled: !0 },
          },
        ],
      });
      var s = a;
    },
    658206: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildBoostingPlanSelect: function () {
            return $;
          },
          GuildBoostingReview: function () {
            return et;
          },
          GuildBoostingConfirmation: function () {
            return en;
          },
        }),
        n("424973"),
        n("222007"),
        n("808653");
      var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        l = n.n(s),
        r = n("627445"),
        u = n.n(r),
        o = n("976979"),
        c = n("446674"),
        d = n("669491"),
        I = n("77078"),
        S = n("703332"),
        m = n("405932"),
        _ = n("740055"),
        P = n("545876"),
        p = n("812204"),
        f = n("685665"),
        T = n("809071"),
        E = n("643619"),
        N = n("15733"),
        C = n("917247"),
        U = n("296253"),
        R = n("883662"),
        A = n("824734"),
        L = n("977934"),
        v = n("623003"),
        O = n("146163"),
        M = n("962113"),
        g = n("915639"),
        y = n("305961"),
        x = n("102985"),
        D = n("697218"),
        b = n("160299"),
        h = n("357957"),
        G = n("10514"),
        j = n("791106"),
        B = n("751433"),
        H = n("467831"),
        w = n("118503"),
        F = n("423487"),
        W = n("427459"),
        k = n("701909"),
        Y = n("240481"),
        V = n("719923"),
        K = n("153160"),
        q = n("108043"),
        J = n("49111"),
        Q = n("646718"),
        X = n("843455"),
        Z = n("782340"),
        z = n("554470");
      function $(e) {
        var t, n;
        let {
            guildId: a,
            premiumSubscriptionPlan: s,
            numGuildBoosts: r,
            setNumGuildBoosts: o,
            setForceDisableSubmitButton: S,
            premiumSubscription: _,
            onClickPremiumSubscriptionLink: P,
            existingAvailableSlots: E = [],
            priceOptions: R,
          } = e,
          L = (0, U.default)(),
          v = s.interval,
          O = s.intervalCount,
          x = (0, c.useStateFromStores)([G.default], () =>
            G.default.getForSkuAndInterval(
              (0, V.castPremiumSubscriptionAsSkuId)(
                Q.PremiumSubscriptionSKUs.GUILD
              ),
              v,
              O
            )
          ),
          b = (0, c.useStateFromStores)([D.default], () =>
            D.default.getCurrentUser()
          ),
          h = (0, c.useStateFromStores)(
            [y.default],
            () => y.default.getGuild(a),
            [a]
          );
        u(null != x, "Missing guildBoostingSubscriptionPlan"),
          u(null != h, "Unknown guild: ".concat(a));
        let H = [{ planId: x.id, quantity: 1 }],
          $ =
            null == _
              ? void 0
              : _.items.find(
                  e =>
                    e.planId === Q.SubscriptionPlans.PREMIUM_MONTH_TIER_2 ||
                    e.planId === Q.SubscriptionPlans.PREMIUM_YEAR_TIER_2
                );
        null != $ && H.push($);
        let ee =
            null == _
              ? void 0
              : _.items.find(
                  e =>
                    e.planId === Q.SubscriptionPlans.PREMIUM_MONTH_GUILD ||
                    e.planId === Q.SubscriptionPlans.PREMIUM_YEAR_GUILD
                ),
          { enabled: et } = q.default.useExperiment({ location: "32b64a_1" }),
          en =
            !et || null == L || !Q.LegacyPricingCountries.has(L) || null == ee,
          { analyticsLocations: ei } = (0, f.default)(),
          [ea, es] = (0, T.useSubscriptionInvoicePreview)({
            subscriptionId: null == _ ? void 0 : _.id,
            items: H,
            renewal: !0,
            paymentSourceId: null == _ ? void 0 : _.paymentSourceId,
            currency: R.currency,
            preventFetch: en,
            analyticsLocations: ei,
            analyticsLocation: p.default.GUILD_BOOSTING_PLAN_SELECT,
          }),
          el = !en && null == ea && null == es,
          er =
            (null === (n = (0, C.usePremiumTrialOffer)()) || void 0 === n
              ? void 0
              : null === (t = n.subscription_trial) || void 0 === t
                ? void 0
                : t.sku_id) === Q.PremiumSubscriptionSKUs.TIER_2,
          eu = V.default.hasBoostDiscount(b) && null != x.premiumUserPrice,
          eo =
            null == ea
              ? void 0
              : ea.invoiceItems.find(e => e.subscriptionPlanId === x.id),
          ec =
            null != eo
              ? {
                  amount: eo.amount,
                  tax: 0,
                  taxInclusive: !0,
                  currency: R.currency,
                }
              : V.default.getPrice(x.id, eu, !1, R),
          ed = r * ec.amount,
          eI =
            V.default.hasBoostDiscount(b) && null != _
              ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format(
                  { planName: V.default.getDisplayPremiumType(_.planId) }
                )
              : (er
                  ? Z.default.Messages
                      .GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT
                  : Z.default.Messages
                      .GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL
                ).format({
                  onPremiumSubscriptionClick: P,
                  discountPercentage: (0, Y.formatPercent)(
                    g.default.locale,
                    Q.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100
                  ),
                  freeSubscriptionCount: Q.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                }),
          eS = E.filter(e => (0, W.isGuildBoostSlotCanceled)(e)).length,
          em = (0, V.isPrepaidPaymentSource)(R.paymentSourceId),
          { ipCountryCode: e_ } = (0, N.default)(),
          eP = "HR" === e_ && ec.currency === X.CurrencyCodes.EUR;
        return (
          S(el),
          (0, i.jsxs)("div", {
            className: z.planSelectStep,
            children: [
              (0, i.jsx)("div", {
                className: l(z.planSelectText, z.bodyText),
                children:
                  Z.default.Messages
                    .GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION,
              }),
              E.length > 0
                ? (0, i.jsxs)("div", {
                    className: z.existingSlotNotice,
                    children: [
                      (0, i.jsx)(w.default, {
                        className: z.existingSlotIcon,
                        color:
                          d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format(
                            { slotCount: E.length }
                          ),
                          eS > 0 && null != _
                            ? (0, i.jsx)(I.Tooltip, {
                                text: Z.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format(
                                  {
                                    canceledCount: eS,
                                    date: _.currentPeriodEnd,
                                  }
                                ),
                                children: e =>
                                  (0, i.jsx)(F.default, {
                                    ...e,
                                    className: z.existingSlotTooltipWarningIcon,
                                    color:
                                      d.default.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : null,
              (0, i.jsxs)("div", {
                className: z.planSelectRow,
                children: [
                  (0, i.jsxs)("div", {
                    className: z.planSelectorWrapper,
                    children: [
                      (0, i.jsx)(B.default, {
                        value: r,
                        onChange: e => o(e),
                        className: z.planSelector,
                        minValue: 1,
                        maxValue: 30,
                      }),
                      (0, i.jsx)("div", {
                        className: z.planSelectorLabel,
                        children: em
                          ? (function (e) {
                              let { intervalType: t, intervalCount: n = 1 } = e;
                              return t === Q.SubscriptionIntervalTypes.YEAR
                                ? Z.default.Messages
                                    .PREMIUM_GUILD_PLAN_SINGLE_YEAR
                                : t === Q.SubscriptionIntervalTypes.MONTH &&
                                    1 === n
                                  ? Z.default.Messages
                                      .PREMIUM_GUILD_PLAN_SINGLE_MONTH
                                  : null;
                            })({ intervalType: v, intervalCount: O })
                          : Z.default.Messages
                              .GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: l(z.planSelectorPreviewPrice, {
                      [z.loadingSpinner]: el,
                    }),
                    children: el
                      ? (0, i.jsx)(I.Spinner, {})
                      : em
                        ? (0, K.formatPrice)(ec.amount, ec.currency)
                        : (function (e) {
                            let {
                                amount: t,
                                currency: n,
                                intervalType: i,
                                intervalCount: a = 1,
                              } = e,
                              s = (0, K.formatPrice)(t, n);
                            if (i === Q.SubscriptionIntervalTypes.YEAR)
                              return Z.default.Messages.BILLING_PRICE_PER_YEAR_EACH.format(
                                { price: s }
                              );
                            if (
                              i === Q.SubscriptionIntervalTypes.MONTH &&
                              1 === a
                            )
                              return Z.default.Messages.BILLING_PRICE_PER_MONTH_EACH.format(
                                { price: s }
                              );
                            if (
                              i === Q.SubscriptionIntervalTypes.MONTH &&
                              a > 1
                            )
                              return Z.default.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format(
                                { price: s }
                              );
                            return null;
                          })({
                            intervalType: v,
                            intervalCount: O,
                            amount: ec.amount,
                            currency: ec.currency,
                          }),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: z.planSelectDivider }),
              (0, i.jsxs)("div", {
                className: z.planSelectRow,
                children: [
                  (0, i.jsx)("div", {
                    className: z.planSelectorSubtotal,
                    children:
                      Z.default.Messages
                        .GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL,
                  }),
                  (0, i.jsx)("div", {
                    className: l(z.planSelectorSubtotalPrice, {
                      [z.loadingSpinner]: el,
                    }),
                    children: el
                      ? (0, i.jsx)(I.Spinner, {})
                      : (0, i.jsx)(A.default, {
                          price: ed,
                          currency: ec.currency,
                          intervalType: v,
                          intervalCount: O,
                          isPrepaidPaymentSource: em,
                        }),
                  }),
                ],
              }),
              eP &&
                (0, i.jsx)(m.default, {
                  message:
                    Z.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format(
                      {
                        kunaPriceWithCurrency: (0, K.formatPrice)(
                          7.5345 * ed,
                          X.CurrencyCodes.HRK
                        ),
                      }
                    ),
                }),
              (0, i.jsx)(m.default, {
                message:
                  Z.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                    documentationLink: k.default.getArticleURL(
                      J.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                  }),
              }),
              (0, i.jsx)(M.default, {
                text: eI,
                color: j.GradientCssUrls.PREMIUM_TIER_2,
              }),
            ],
          })
        );
      }
      function ee(e) {
        let {
            premiumSubscription: t,
            premiumSubscriptionPlan: n,
            proratedInvoicePreview: a,
            renewalInvoicePreview: s,
            priceOptions: l,
          } = e,
          r = n.interval,
          o = n.intervalCount,
          d = (0, c.useStateFromStores)([G.default], () =>
            G.default.getForSkuAndInterval(
              (0, V.castPremiumSubscriptionAsSkuId)(
                Q.PremiumSubscriptionSKUs.GUILD
              ),
              r,
              o
            )
          );
        u(null != d, "Missing guildBoostingSubscriptionPlan");
        let I = e =>
            (0, E.coalesceInvoiceItems)(a.invoiceItems).find(
              t =>
                Q.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t.subscriptionPlanId) &&
                e(t)
            ),
          S = I(e => e.amount >= 0);
        u(null != S, "Missing guild boosting invoice item");
        let m = I(e => e.amount < 0),
          _ = null != m ? S.quantity - m.quantity : S.quantity,
          P = a.invoiceItems.filter(e =>
            (0, V.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId)
          ),
          p = P.reduce((e, t) => e + t.amount, 0),
          f = (0, T.getItemUnitPriceWithDiscount)(S) * _,
          N = (0, K.formatPrice)(f, a.currency),
          C = (0, K.formatRate)(N, r, o),
          U =
            (0, K.formatPrice)(a.total, a.currency) +
            (a.currency !== X.CurrencyCodes.USD ? "*" : ""),
          A = a.total - f - p,
          L = S.discounts.map(e => {
            let t = e.amount / S.quantity;
            return { ...e, amount: t * _ };
          }),
          v = (0, V.isPrepaidPaymentSource)(l.paymentSourceId);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            v
              ? null
              : (0, i.jsx)(O.SubscriptionPeriodResetNotice, {
                  proratedInvoice: a,
                  renewalInvoice: s,
                }),
            (0, i.jsxs)(R.PremiumInvoiceTable, {
              children: [
                (0, i.jsx)(R.PremiumInvoiceTableHeader, {
                  children:
                    Z.default.Messages
                      .GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER,
                }),
                (0, i.jsx)(R.PremiumInvoiceDiscountedTableRow, {
                  label:
                    Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format(
                      {
                        numGuildSubscriptions: _,
                        planName: (0, V.getDisplayName)(d.id, !1, v),
                      }
                    ),
                  value: v ? N : C,
                  discounts: L,
                  originalAmount: S.subscriptionPlanPrice * _,
                  currency: a.currency,
                  interval: d.interval,
                  intervalCount: d.intervalCount,
                }),
                0 !== p
                  ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
                      label: (0, i.jsx)(O.PremiumInvoiceLabelWithAdjustment, {
                        label:
                          Z.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format(
                            {
                              planName: (0, V.getTierDisplayName)(
                                P[0].subscriptionPlanId
                              ),
                            }
                          ),
                        tooltipText:
                          Z.default.Messages
                            .PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                      }),
                      value: (0, K.formatPrice)(p, a.currency),
                    })
                  : null,
                0 !== A
                  ? (0, i.jsx)(R.PremiumInvoiceTableRow, {
                      label: (0, i.jsx)(O.PremiumInvoiceLabelWithAdjustment, {
                        label:
                          Z.default.Messages
                            .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                        tooltipText:
                          Z.default.Messages
                            .PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                      }),
                      value: (0, K.formatPrice)(A, a.currency),
                    })
                  : null,
                (0, i.jsx)(R.PremiumInvoiceTableDivider, {}),
                (0, i.jsx)(R.PremiumInvoiceTableTotalRow, {
                  label: (a.taxInclusive
                    ? v
                      ? Z.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                      : Z.default.Messages
                          .BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                    : Z.default.Messages.BILLING_INVOICE_TODAY_TOTAL
                  ).format(),
                  value: U,
                }),
                null != t
                  ? (0, i.jsx)(O.SubscriptionInvoiceFooter, {
                      premiumSubscription: t,
                      proratedInvoice: a,
                      renewalInvoice: s,
                      isUpdate: !0,
                      isPrepaidPaymentSource: v,
                    })
                  : (0, i.jsx)(O.SubscriptionInvoiceFooter, {
                      renewalInvoice: s,
                      priceOptions: l,
                      isPrepaidPaymentSource: v,
                    }),
              ],
            }),
          ],
        });
      }
      function et(e) {
        var t, n;
        let a,
          s,
          {
            paymentSources: l,
            priceOptions: r,
            currentPremiumSubscription: u,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: E,
            onPaymentSourceChange: N,
            onPaymentSourceAdd: C,
            onPurchaseTermsChange: U,
            legalTermsNodeRef: R,
            hasLegalTermsFlash: A,
          } = e,
          L = r.paymentSourceId,
          O = (0, c.useStateFromStores)([h.default], () =>
            null != d ? h.default.getPaymentSource(d) : null
          ),
          M = (0, c.useStateFromStores)(
            [x.default],
            () => x.default.hidePersonalInformation
          );
        a =
          null != u
            ? (0, V.getItemsWithUpsertedPremiumGuildPlan)(
                u,
                E[0].quantity,
                E[0].planId
              )
            : E;
        let { analyticsLocations: g } = (0, f.default)(),
          [y] = (0, T.useSubscriptionInvoicePreview)({
            subscriptionId: null == u ? void 0 : u.id,
            items: a,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: L,
            currency: r.currency,
            analyticsLocations: g,
            analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_PRORATED,
          }),
          [D] = (0, T.useSubscriptionInvoicePreview)({
            subscriptionId: null == u ? void 0 : u.id,
            items: a,
            renewal: !0,
            paymentSourceId: L,
            currency: r.currency,
            analyticsLocations: g,
            analyticsLocation: p.default.GUILD_BOOSTING_REVIEW_RENEWAL,
          });
        null != D &&
          (s = {
            amount: D.total,
            currency: D.currency,
            tax: D.tax,
            taxInclusive: D.taxInclusive,
          });
        let G = o.CountryCodesSets.EEA_COUNTRIES.has(
          b.default.ipCountryCodeWithFallback
        );
        return (0, i.jsxs)("div", {
          className: z.reviewStep,
          children: [
            null != y && null != D
              ? (0, i.jsx)(ee, {
                  premiumSubscription: u,
                  premiumSubscriptionPlan: m,
                  proratedInvoicePreview: y,
                  renewalInvoicePreview: D,
                  priceOptions: r,
                })
              : null,
            (0, i.jsxs)("div", {
              className: z.paymentSourceWrapper,
              children: [
                (0, i.jsx)(I.FormTitle, {
                  tag: I.FormTitleTags.H5,
                  children:
                    Z.default.Messages
                      .PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                }),
                null != d
                  ? null != O
                    ? (0, i.jsx)(I.TooltipContainer, {
                        text: Z.default.Messages
                          .GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                        children: (0, i.jsx)(_.default, {
                          paymentSources: [O],
                          selectedPaymentSourceId: O.id,
                          hidePersonalInformation: M,
                          disabled: !0,
                        }),
                      })
                    : (0, i.jsx)("div", { children: (0, i.jsx)(I.Spinner, {}) })
                  : (0, i.jsx)(_.default, {
                      paymentSources: Object.values(l),
                      selectedPaymentSourceId: L,
                      onChange: N,
                      onPaymentSourceAdd: C,
                      hidePersonalInformation: M,
                    }),
              ],
            }),
            (0, i.jsx)(v.default, {
              isActive: A,
              ref: R,
              children:
                null != s &&
                (0, i.jsx)(P.default, {
                  onChange: U,
                  forceShow: !0,
                  finePrint: (0, i.jsx)(S.default, {
                    subscriptionPlan: m,
                    paymentSourceType:
                      null === (t = l[null != L ? L : ""]) || void 0 === t
                        ? void 0
                        : t.type,
                    basePrice: s,
                  }),
                  showPricingLink:
                    (null !== (n = null == y ? void 0 : y.currency) &&
                    void 0 !== n
                      ? n
                      : X.CurrencyCodes.USD) !== X.CurrencyCodes.USD,
                  showWithdrawalWaiver: G,
                  subscriptionPlan: m,
                }),
            }),
          ],
        });
      }
      function en(e) {
        let t,
          {
            onClose: n,
            guild: s,
            guildBoostQuantity: l,
            isTransfer: r = !1,
            withAnimation: u = !0,
            paymentSourceType: o,
          } = e,
          { theme: c } = (0, I.useThemeContext)(),
          [d, S] = a.useState(H.PremiumPaymentGuildAnimation.Scenes.ENTRY),
          [m, _] = a.useState(!1);
        return (
          (t = r
            ? null == s
              ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format()
              : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format(
                  { guildName: s.name }
                )
            : null == s
              ? Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format(
                  { guildSubscriptionQuantity: l }
                )
              : Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format(
                  { guildName: s.name, guildSubscriptionQuantity: l }
                )),
          (0, i.jsxs)("div", {
            className: z.confirmationContainer,
            children: [
              u
                ? (0, i.jsx)(H.PremiumPaymentGuildAnimation, {
                    className: z.confirmationAnimation,
                    nextScene: d,
                    onScenePlay: e => {
                      if (!m)
                        switch (e) {
                          case H.PremiumPaymentGuildAnimation.Scenes.ENTRY:
                            return S(
                              H.PremiumPaymentGuildAnimation.Scenes.IDLE
                            );
                          case H.PremiumPaymentGuildAnimation.Scenes.IDLE:
                            return S(
                              H.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                            );
                          case H.PremiumPaymentGuildAnimation.Scenes.SUCCESS:
                            return (
                              _(!0),
                              S(H.PremiumPaymentGuildAnimation.Scenes.IDLE)
                            );
                        }
                    },
                    pauseWhileUnfocused: !1,
                  })
                : null,
              (0, i.jsx)(L.default, {
                className: z.confirmationUpgradedBanner,
                theme: c,
                premiumType: Q.PremiumTypes.TIER_2,
                type: X.DELAYED_PAYMENTS.has(
                  null != o ? o : X.PaymentSourceTypes.UNKNOWN
                )
                  ? L.default.Types.PREMIUM_PAYMENT_STARTED
                  : L.default.Types.GUILD_BOOST_APPLIED,
              }),
              (0, i.jsx)("div", { className: z.confirmationText, children: t }),
              (0, i.jsx)(I.Button, {
                onClick: n,
                children:
                  Z.default.Messages
                    .GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON,
              }),
            ],
          })
        );
      }
    },
    962113: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("216422"),
        s = n("288022");
      function l(e) {
        let { text: t, color: n } = e;
        return (0, i.jsxs)("div", {
          className: s.upsellFooter,
          children: [
            (0, i.jsx)(a.default, { className: s.upsellFooterIcon, color: n }),
            (0, i.jsx)("div", { children: t }),
          ],
        });
      }
    },
    971427: function (e, t, n) {
      "use strict";
      let i;
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("424973");
      var a = n("446674"),
        s = n("913144");
      let l = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class r extends a.default.PersistedStore {
        initialize(e) {
          i = null != e ? e : l;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return i.hasAcceptedEulaIds.includes(e);
        }
      }
      (r.displayName = "ApplicationStoreUserSettingsStore"),
        (r.persistKey = "ApplicationStoreUserSettingsStore"),
        (r.migrations = [
          e =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]);
      var u = new r(s.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          i.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
          let { eulaId: t } = e;
          if (i.hasAcceptedEulaIds.includes(t)) return !1;
          i.hasAcceptedEulaIds.push(t);
        },
      });
    },
    751433: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        l = n.n(s),
        r = n("77078"),
        u = n("151185"),
        o = n("342169"),
        c = n("108315");
      function d(e) {
        return "" === e || "-" === e;
      }
      var I = e => {
        let {
            value: t,
            onChange: n,
            className: s,
            minValue: I,
            maxValue: S,
          } = e,
          [m, _] = a.useState(t),
          P = d(m) || (null != I && m <= I),
          p = d(m) || (null != S && m >= S),
          f = e => {
            n(d(e) ? (null != I ? I : 0) : e), _(e);
          };
        return (0, i.jsx)(r.FocusRing, {
          within: !0,
          children: (0, i.jsxs)("div", {
            className: l(c.actions, s),
            children: [
              (0, i.jsx)(r.Clickable, {
                onClick: e => {
                  e.stopPropagation(), !P && f(m - 1);
                },
                tabIndex: -1,
                className: l(c.iconWrapper, c.subtract, { [c.disabled]: P }),
                children: (0, i.jsx)(o.default, {
                  className: l(c.icon, { [c.disabled]: P }),
                }),
              }),
              (0, i.jsx)(r.TextInput, {
                value: "".concat(m),
                onChange: e => {
                  if (d(e)) return f(e);
                  let t = parseInt(e);
                  if (!isNaN(t))
                    return null != S && t >= S
                      ? f(S)
                      : null != I && t <= I
                        ? f(I)
                        : f(t);
                },
                inputClassName: c.value,
              }),
              (0, i.jsx)(r.Clickable, {
                onClick: e => {
                  e.stopPropagation(), !p && f(m + 1);
                },
                tabIndex: -1,
                className: l(c.iconWrapper, c.add, { [c.disabled]: p }),
                children: (0, i.jsx)(u.default, {
                  className: l(c.icon, { [c.disabled]: p }),
                }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=18955.cffbc1afa0353205f069.js.map
