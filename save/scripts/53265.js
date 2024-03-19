(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53265"],
  {
    296253: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return a;
          },
        });
      var t = i("446674"),
        l = i("357957"),
        r = i("521012");
      function a() {
        let e = (0, t.useStateFromStores)([r.default], () =>
            r.default.getPremiumTypeSubscription()
          ),
          n = (0, t.useStateFromStores)([l.default], () => {
            var n;
            return (null == e ? void 0 : e.paymentSourceId) != null
              ? null === (n = l.default.getPaymentSource(e.paymentSourceId)) ||
                void 0 === n
                ? void 0
                : n.country
              : null;
          });
        return n;
      }
    },
    883662: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          PremiumInvoiceTable: function () {
            return c;
          },
          PremiumInvoiceTableHeader: function () {
            return I;
          },
          PremiumInvoiceTableRow: function () {
            return d;
          },
          PremiumInvoiceDiscountedTableRow: function () {
            return m;
          },
          PremiumInvoiceTableDivider: function () {
            return P;
          },
          PremiumInvoiceTableTotalRow: function () {
            return T;
          },
          PremiumInvoiceTableFinePrint: function () {
            return _;
          },
        });
      var t = i("37983");
      i("884691");
      var l = i("414456"),
        r = i.n(l),
        a = i("798609"),
        s = i("153160"),
        u = i("782340"),
        o = i("398941");
      function c(e) {
        let { children: n, className: i } = e;
        return (0, t.jsx)("div", { className: r(o.table, i), children: n });
      }
      function I(e) {
        let { children: n } = e;
        return (0, t.jsx)("div", { className: o.header, children: n });
      }
      function d(e) {
        let { label: n, value: i, className: l } = e;
        return (0, t.jsxs)("div", {
          className: r(o.row, l),
          children: [
            (0, t.jsx)("div", { className: o.rowLabel, children: n }),
            (0, t.jsx)("div", { className: o.rowAmount, children: i }),
          ],
        });
      }
      function m(e) {
        let {
            label: n,
            value: i,
            discounts: l,
            originalAmount: r,
            interval: c,
            currency: I,
            className: m,
            intervalCount: P,
          } = e,
          T = e => (null != l ? l.find(n => n.type === e) : null),
          _ = T(a.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
          v = T(a.InvoiceDiscountTypes.ENTITLEMENT),
          M = null != _ ? Math.floor((_.amount / r) * 100) : null,
          R = (0, s.formatPrice)(r, I);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(d, {
              label: n,
              value: (0, t.jsxs)(t.Fragment, {
                children: [
                  i,
                  null != M
                    ? (0, t.jsxs)("div", {
                        className: o.rowPercentDiscount,
                        children: ["-", M, "%"],
                      })
                    : null,
                ],
              }),
              className: m,
            }),
            null != M
              ? (0, t.jsxs)("div", {
                  className: o.rowDiscountOriginalPrice,
                  children: [
                    "(",
                    null != c && null != P ? (0, s.formatRate)(R, c, P) : R,
                    ")",
                  ],
                })
              : null,
            null != v
              ? (0, t.jsx)("div", {
                  className: o.entitlementDiscountRow,
                  children:
                    u.default.Messages
                      .BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED,
                })
              : null,
          ],
        });
      }
      function P(e) {
        let {
          extended: n = !1,
          negativeMarginTop: i = !1,
          negativeMarginBottom: l = !1,
        } = e;
        return (0, t.jsx)("div", {
          className: r(o.divider, {
            [o.dividerExtended]: n,
            [o.negativeMarginTop]: i,
            [o.negativeMarginBottom]: l,
          }),
        });
      }
      function T(e) {
        let { label: n, value: i, className: l } = e;
        return (0, t.jsxs)("div", {
          className: r(o.totalRow, l),
          children: [
            (0, t.jsx)("div", { className: o.totalLabel, children: n }),
            (0, t.jsx)("div", { className: o.totalAmount, children: i }),
          ],
        });
      }
      function _(e) {
        let { children: n, className: i } = e;
        return (0, t.jsx)("div", { className: r(o.finePrint, i), children: n });
      }
    },
    991329: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return s;
          },
        });
      var t = i("37983");
      i("884691");
      var l = i("153160"),
        r = i("883662"),
        a = i("782340");
      function s(e) {
        let { invoice: n } = e;
        return n.taxInclusive || n.tax <= 0
          ? null
          : (0, t.jsx)(r.PremiumInvoiceTableRow, {
              label: a.default.Messages.TAX_LABEL,
              value: (0, l.formatPrice)(n.tax, n.currency),
            });
      }
    },
    146163: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          PremiumInvoiceLabelWithAdjustment: function () {
            return g;
          },
          PremiumSubscriptionCurrentInvoiceRows: function () {
            return D;
          },
          PremiumSubscriptionChangePlanInvoiceRows: function () {
            return j;
          },
          SubscriptionPeriodResetNotice: function () {
            return B;
          },
          SubscriptionInvoiceFooter: function () {
            return F;
          },
          SubscriptionInvoiceGift: function () {
            return H;
          },
          PremiumTrialInvoiceTableRow: function () {
            return Y;
          },
        }),
        i("70102"),
        i("808653"),
        i("222007");
      var t = i("37983"),
        l = i("884691"),
        r = i("414456"),
        a = i.n(r),
        s = i("627445"),
        u = i.n(s),
        o = i("446674"),
        c = i("77078"),
        I = i("798609"),
        d = i("812204"),
        m = i("685665"),
        P = i("10514"),
        T = i("461380"),
        _ = i("834179"),
        v = i("701909"),
        M = i("719923"),
        R = i("153160"),
        f = i("809071"),
        N = i("643619"),
        E = i("917247"),
        p = i("883662"),
        S = i("991329"),
        b = i("646718"),
        U = i("49111"),
        L = i("782340"),
        O = i("127990");
      let A = (e, n) => {
          var i;
          return !!(null === (i = e.discounts) || void 0 === i
            ? void 0
            : i.some(e => e.type === n));
        },
        C = (e, n) => {
          var i, t, l;
          return (
            e.subscriptionPlanPrice -
            (null !==
              (l =
                null === (t = e.discounts) || void 0 === t
                  ? void 0
                  : null === (i = t.find(e => e.type === n)) || void 0 === i
                    ? void 0
                    : i.amount) && void 0 !== l
              ? l
              : 0)
          );
        };
      function x(e) {
        var n;
        let {
            invoiceItem: i,
            overrideAmount: l,
            showGuildSubscriptionAdjustmentTooltip: r,
            currency: a,
            className: s,
            isPrepaidPaymentSource: d,
            referralTrialOfferId: m,
          } = e,
          T = (0, o.useStateFromStores)([P.default], () =>
            P.default.get(i.subscriptionPlanId)
          ),
          v =
            null === (n = (0, E.usePremiumTrialOffer)(m)) || void 0 === n
              ? void 0
              : n.subscription_trial;
        u(null != T, "Missing subscriptionPlan");
        let f = (0, M.formatIntervalDuration)({
            intervalType: null == v ? void 0 : v.interval,
            intervalCount: null == v ? void 0 : v.interval_count,
          }),
          N = (function (e, n, i, t) {
            let l = A(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
            switch (e.subscriptionPlanId) {
              case b.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
              case b.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
              case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
              case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
              case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
              case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
              case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
              case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
              case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
              case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return (0, M.getDisplayName)(e.subscriptionPlanId, l, i, t);
              case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
              case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format(
                  { num: e.quantity, intervalCount: n.intervalCount }
                );
              case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format(
                  { num: e.quantity }
                );
              case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return L.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format(
                  { num: e.quantity }
                );
            }
            switch (n.interval) {
              case b.SubscriptionIntervalTypes.MONTH:
                if (1 === n.intervalCount)
                  return L.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                    planName: n.name,
                  });
                return L.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format(
                  { planName: n.name, intervalCount: n.intervalCount }
                );
              case b.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                  planName: n.name,
                });
            }
            throw Error(
              "Unexpected invoice plan: ".concat(e.subscriptionPlanId)
            );
          })(i, T, d, f);
        !0 === r &&
          (N = (0, t.jsxs)("div", {
            className: O.invoiceItemLabelWithIcon,
            children: [
              (0, t.jsxs)("div", { children: [N, " "] }),
              (0, t.jsx)(c.Tooltip, {
                text: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                "aria-label":
                  L.default.Messages
                    .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                tooltipClassName: O.invoiceItemTooltip,
                children: e =>
                  (0, t.jsx)(_.default, {
                    ...e,
                    className: O.invoiceItemLabelIcon,
                  }),
              }),
            ],
          }));
        let S = (0, R.formatPrice)(null != l ? l : i.amount, a),
          U = d ? S : (0, R.formatRate)(S, T.interval, T.intervalCount);
        return (0, t.jsx)(p.PremiumInvoiceDiscountedTableRow, {
          label: N,
          value: U,
          originalAmount: i.subscriptionPlanPrice * i.quantity,
          discounts: i.discounts,
          interval: T.interval,
          intervalCount: T.intervalCount,
          currency: a,
          className: s,
        });
      }
      function g(e) {
        let { label: n, tooltipText: i, tooltipAriaLabel: l } = e;
        return (0, t.jsxs)("div", {
          className: O.invoiceItemLabelWithIcon,
          children: [
            n,
            (0, t.jsx)(c.Tooltip, {
              clickableOnMobile: !0,
              text: i,
              "aria-label": l,
              tooltipClassName: O.invoiceItemTooltip,
              children: e =>
                (0, t.jsx)(_.default, {
                  ...e,
                  className: O.invoiceItemLabelIcon,
                }),
            }),
          ],
        });
      }
      function D(e) {
        let { invoice: n, isPrepaidPaymentSource: i } = e,
          l = (0, N.coalesceInvoiceItems)(n.invoiceItems),
          r = l.find(
            e =>
              !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) &&
              e.amount >= 0
          ),
          a = l.find(
            e =>
              (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) &&
              e.amount >= 0
          ),
          s = (0, o.useStateFromStores)([P.default], () =>
            null != a ? P.default.get(a.subscriptionPlanId) : null
          ),
          u = null != a ? a.amount : 0,
          c = (0, R.formatPrice)(u, n.currency),
          I = null != s ? (0, R.formatRate)(c, s.interval, s.intervalCount) : 0;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            null != r
              ? (0, t.jsx)(x, {
                  invoiceItem: r,
                  currency: n.currency,
                  isPrepaidPaymentSource: i,
                })
              : null,
            0 !== u && null != a && null != s
              ? (0, t.jsx)(p.PremiumInvoiceTableRow, {
                  label:
                    L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format(
                      {
                        numGuildSubscriptions: a.quantity,
                        planName: (0, M.getDisplayName)(s.id, !1, i),
                      }
                    ),
                  value: i ? c : I,
                })
              : null,
            (0, t.jsx)(S.default, { invoice: n }),
            (0, t.jsx)(p.PremiumInvoiceTableDivider, {}),
            (0, t.jsx)(p.PremiumInvoiceTableTotalRow, {
              label: (n.taxInclusive
                ? i
                  ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === U.CurrencyCodes.USD
                  ? (0, R.formatPrice)(n.total, n.currency)
                  : "".concat((0, R.formatPrice)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function j(e) {
        let {
            invoice: n,
            newPlan: i,
            isPrepaidPaymentSource: l,
            referralTrialOfferId: r,
          } = e,
          a = (0, N.coalesceInvoiceItems)(n.invoiceItems),
          s = a.find(e => e.subscriptionPlanId === i.id);
        u(null != s, "Expected newPlanInvoiceItem");
        let o = a.find(
            e =>
              !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) &&
              e.amount < 0
          ),
          c = a.find(
            e =>
              null == e.subscriptionPlanId &&
              null != e.discounts &&
              e.discounts.find(
                e =>
                  e.type ===
                  I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION
              )
          ),
          d = A(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
          m = C(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
          P = s.quantity * m,
          T =
            s.amount +
            (null != o ? o.amount : 0) -
            P +
            (null != c ? c.amount : 0),
          _ = a.filter(
            e =>
              e.subscriptionPlanId ===
                b.SubscriptionPlans.PREMIUM_MONTH_GUILD ||
              e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD
          ),
          v = _.reduce((e, n) => e + n.amount, 0);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(x, {
              invoiceItem: s,
              currency: n.currency,
              overrideAmount: P,
              isPrepaidPaymentSource: l,
              referralTrialOfferId: r,
            }),
            0 === T || d
              ? null
              : (0, t.jsx)(p.PremiumInvoiceTableRow, {
                  label: (0, t.jsx)(g, {
                    label:
                      L.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format(
                        {
                          planName: (0, M.isPremiumSubscriptionPlan)(i.id)
                            ? (0, M.getTierDisplayName)(i.id)
                            : i.name,
                        }
                      ),
                    tooltipText:
                      L.default.Messages
                        .PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP,
                  }),
                  value: (0, R.formatPrice)(T, n.currency),
                }),
            0 !== v
              ? (0, t.jsx)(p.PremiumInvoiceTableRow, {
                  label: (0, t.jsx)(g, {
                    label:
                      L.default.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                    tooltipText:
                      L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                    tooltipAriaLabel:
                      L.default.Messages
                        .PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                  }),
                  value: (0, R.formatPrice)(v, n.currency),
                })
              : null,
            (0, t.jsx)(S.default, { invoice: n }),
            (0, t.jsx)(p.PremiumInvoiceTableDivider, {}),
            (0, t.jsx)(p.PremiumInvoiceTableTotalRow, {
              label: (n.taxInclusive
                ? l
                  ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE
                  : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE
                : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL
              ).format(),
              value:
                n.currency === U.CurrencyCodes.USD
                  ? (0, R.formatPrice)(n.total, n.currency)
                  : "".concat((0, R.formatPrice)(n.total, n.currency), "*"),
            }),
          ],
        });
      }
      function y(e) {
        let n = e.slice();
        return (
          n.sort((e, n) => {
            let i = (0, M.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
              t = (0, M.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
            return i && !t ? -1 : !i && t ? 1 : 0;
          }),
          n
        );
      }
      function h(e) {
        return e.filter(e => {
          let { subscriptionPlanId: n } = e;
          return (
            n !== b.SubscriptionPlans.NONE_MONTH &&
            n !== b.SubscriptionPlans.NONE_YEAR
          );
        });
      }
      function B(e) {
        let { proratedInvoice: n, renewalInvoice: i } = e,
          { intervalType: l, intervalCount: r } = (0, M.getIntervalForInvoice)(
            n
          ),
          { intervalType: a, intervalCount: s } = (0, M.getIntervalForInvoice)(
            i
          );
        return l !== a ||
          r !== s ||
          n.subscriptionPeriodEnd.getTime() ===
            i.subscriptionPeriodStart.getTime()
          ? null
          : (0, t.jsx)("div", {
              className: O.subscriptionPeriodResetNotice,
              children:
                L.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format(
                  { renewalDate: n.subscriptionPeriodEnd }
                ),
            });
      }
      function G(e) {
        let { isUpdate: n, currentInvoice: i, newInvoice: l } = e,
          r = null != i ? (0, N.coalesceInvoiceItems)(i.invoiceItems) : null,
          s = null != i ? (0, M.getIntervalForInvoice)(i) : null,
          { intervalType: u, intervalCount: o } = (0, M.getIntervalForInvoice)(
            l
          ),
          c = null != s && (s.intervalType !== u || s.intervalCount !== o);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(p.PremiumInvoiceTableDivider, { extended: !0 }),
            null != i
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(p.PremiumInvoiceTableHeader, {
                      children:
                        L.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL,
                    }),
                    h(y((0, N.coalesceInvoiceItems)(i.invoiceItems))).map(e =>
                      (0, t.jsx)(
                        x,
                        { invoiceItem: e, currency: i.currency },
                        e.id
                      )
                    ),
                    (0, t.jsx)(p.PremiumInvoiceTableDivider, { extended: !0 }),
                  ],
                })
              : null,
            (0, t.jsx)(p.PremiumInvoiceTableHeader, {
              children: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL,
            }),
            h(y((0, N.coalesceInvoiceItems)(l.invoiceItems))).map(e => {
              let i =
                null != r &&
                !r.some(
                  n =>
                    n.subscriptionPlanId === e.subscriptionPlanId &&
                    n.quantity === e.quantity
                );
              return (0, t.jsx)(
                x,
                {
                  invoiceItem: e,
                  currency: l.currency,
                  showGuildSubscriptionAdjustmentTooltip:
                    c &&
                    (e.subscriptionPlanId ===
                      b.SubscriptionPlans.PREMIUM_MONTH_GUILD ||
                      e.subscriptionPlanId ===
                        b.SubscriptionPlans.PREMIUM_YEAR_GUILD ||
                      e.subscriptionPlanId ===
                        b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD ||
                      e.subscriptionPlanId ===
                        b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
                  className: a({ [O.subscriptionAddedInvoiceItem]: !n || i }),
                },
                e.id
              );
            }),
            (0, t.jsx)(S.default, { invoice: l }),
            (0, t.jsx)(p.PremiumInvoiceTableDivider, {}),
            (0, t.jsx)(p.PremiumInvoiceTableRow, {
              label: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
              value: (0, R.formatRate)(
                (0, R.formatPrice)(l.total, l.currency),
                u,
                o
              ),
              className: O.subscriptionCostRow,
            }),
          ],
        });
      }
      function w(e) {
        var n;
        let {
            proratedInvoice: i,
            renewalInvoice: l,
            isTrial: r,
            isUpdate: a,
            overrideRenewalDate: s,
            trialFooterMessageOverride: u,
          } = e,
          o =
            null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n
              ? void 0
              : n.subscription_trial,
          { intervalType: c, intervalCount: I } = (0, M.getIntervalForInvoice)(
            l
          );
        if (null == i) return null;
        if (r) {
          let e = (0, M.formatIntervalDuration)({
              intervalType: null == o ? void 0 : o.interval,
              intervalCount: null == o ? void 0 : o.interval_count,
            }),
            n =
              (null == o ? void 0 : o.interval) ===
                b.SubscriptionIntervalTypes.DAY &&
              (null == o ? void 0 : o.interval_count) < 28
                ? 2
                : 7;
          return (0, t.jsx)(t.Fragment, {
            children:
              null != u
                ? u
                : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format(
                    {
                      duration: e,
                      days: n,
                      contactLink: U.MarketingURLs.CONTACT,
                      helpdeskArticle: v.default.getArticleURL(
                        U.HelpdeskArticles.PREMIUM_TRIAL
                      ),
                    }
                  ),
          });
        }
        let d = l.taxInclusive
          ? L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER
          : L.default.Messages
              .PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
        return (0, t.jsx)(t.Fragment, {
          children: d.format({
            rate: (0, R.formatRate)(
              (0, R.formatPrice)(l.subtotal, l.currency),
              c,
              I
            ),
            renewalDate:
              null != s
                ? s
                : a
                  ? null != i
                    ? i.subscriptionPeriodEnd
                    : l.subscriptionPeriodStart
                  : l.subscriptionPeriodEnd,
            contactLink: U.MarketingURLs.CONTACT,
            helpdeskArticle: v.default.getArticleURL(
              U.HelpdeskArticles.BILLING
            ),
          }),
        });
      }
      function F(e) {
        let {
            premiumSubscription: n,
            proratedInvoice: i,
            renewalInvoice: r,
            overrideRenewalDate: a,
            isUpdate: s = !1,
            isTrial: u = !1,
            priceOptions: o,
            isPrepaidPaymentSource: I = !1,
            trialFooterMessageOverride: P,
            hideSubscriptionDetails: _ = !1,
          } = e,
          { analyticsLocations: v } = (0, m.default)(),
          M = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: v,
            analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
            ...o,
          },
          [R] = (0, f.useSubscriptionInvoicePreview)(M),
          [N, E] = l.useState(!1);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            I
              ? null
              : (0, t.jsx)(p.PremiumInvoiceTableFinePrint, {
                  children: (0, t.jsx)(w, {
                    proratedInvoice: i,
                    renewalInvoice: r,
                    isTrial: u,
                    isUpdate: s,
                    overrideRenewalDate: a,
                    trialFooterMessageOverride: P,
                  }),
                }),
            !_ &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(c.Clickable, {
                    onClick: () => E(e => !e),
                    className: O.subscriptionDetailsToggle,
                    children: [
                      N
                        ? L.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS
                        : L.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
                      (0, t.jsx)(T.default, {
                        direction: N
                          ? T.default.Directions.UP
                          : T.default.Directions.DOWN,
                        className: O.subscriptionDetailsToggleCaret,
                      }),
                    ],
                  }),
                  N
                    ? (0, t.jsx)(G, {
                        isUpdate: s,
                        currentInvoice: R,
                        newInvoice: r,
                      })
                    : null,
                ],
              }),
          ],
        });
      }
      function H(e) {
        var n;
        let i,
          {
            plan: l,
            className: r,
            isPrepaidPaymentSource: a = !1,
            isCustomGift: s = !1,
            invoicePreview: u = null,
            priceOptions: o,
          } = e,
          I = (0, M.getPrice)(l.id, !1, !0, o),
          { tax: d, taxInclusive: m, currency: P } = null != u ? u : I,
          T =
            null !== (n = null == u ? void 0 : u.total) && void 0 !== n
              ? n
              : I.amount,
          _ = T - d,
          v = (0, R.formatPrice)(_, P),
          f = (0, R.formatPrice)(T, P);
        return (
          (i = s
            ? (0, M.getIntervalString)(
                l.interval,
                !0,
                void 0,
                void 0,
                !0,
                (0, M.getPremiumType)(l.id)
              )
            : L.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                planName: (0, M.getDisplayName)(l.id, !1, a),
              })),
          (0, t.jsxs)("div", {
            className: r,
            children: [
              (0, t.jsx)(c.FormTitle, {
                children: L.default.Messages.PREMIUM_GIFTING_BUTTON,
              }),
              null != u && d >= 0 && !1 === m
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(c.Text, {
                        variant: "text-md/bold",
                        className: O.purchaseDetailsHeaderText,
                        children: i,
                      }),
                      (0, t.jsxs)(p.PremiumInvoiceTable, {
                        className: r,
                        children: [
                          (0, t.jsx)(p.PremiumInvoiceTableHeader, {
                            children:
                              L.default.Messages
                                .ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL,
                          }),
                          (0, t.jsx)(p.PremiumInvoiceTableRow, {
                            label: i,
                            value: v,
                          }),
                          (0, t.jsx)(S.default, { invoice: u }),
                          (0, t.jsx)(p.PremiumInvoiceTableDivider, {}),
                          (0, t.jsx)(p.PremiumInvoiceTableRow, {
                            label:
                              L.default.Messages
                                .BILLING_PAYMENT_BREAKDOWN_TOTAL,
                            value: f,
                            className: O.subscriptionCostRow,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, t.jsx)(c.Heading, {
                    variant: "text-md/normal",
                    children: "".concat(i, " - ").concat(f),
                  }),
            ],
          })
        );
      }
      function Y(e) {
        let n,
          { invoice: i, plan: l } = e,
          r = (0, N.coalesceInvoiceItems)(i.invoiceItems),
          a = r.find(e => e.subscriptionPlanId === l.id);
        return (
          u(null != a, "newPlanInvoiceItem can not be null"),
          l.interval === b.SubscriptionIntervalTypes.MONTH
            ? (n = i.taxInclusive
                ? L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL
                : L.default.Messages
                    .BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
            : l.interval === b.SubscriptionIntervalTypes.YEAR
              ? (n = i.taxInclusive
                  ? L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL
                  : L.default.Messages
                      .BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE)
              : u(!1, "Invalid interval type"),
          (0, t.jsx)(c.Text, {
            variant: "text-md/normal",
            children: n.format({
              price: (0, R.formatPrice)(a.subscriptionPlanPrice, i.currency),
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=53265.b80e0f04dbd06e5d53a8.js.map
