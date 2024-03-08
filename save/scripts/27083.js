(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27083"],
  {
    121432: function (e, t, s) {
      "use strict";
      e.exports = s.p + "21351b92881882ca8597.svg";
    },
    703332: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        }),
        s("70102");
      var a = s("37983");
      s("884691");
      var r = s("868869"),
        n = s("745279"),
        i = s("701909"),
        l = s("719923"),
        u = s("153160"),
        c = s("380186"),
        o = s("49111"),
        d = s("646718"),
        E = s("782340"),
        _ = s("808965"),
        I = function (e) {
          let t, s, I;
          let {
            subscriptionPlan: T,
            isGift: p,
            isEmbeddedIAP: A,
            renewalInvoice: L,
            paymentSourceType: f,
            hide: M,
            purchaseType: N,
            productLine: S,
            basePrice: P,
            currentSubscription: R,
          } = e;
          if (M) return null;
          let h = null == e.planGroup ? [] : e.planGroup;
          if (null != L) {
            let e = l.default.getIntervalForInvoice(L);
            (t = e.intervalType),
              (s = e.intervalCount),
              (I = (0, u.formatRate)(
                (0, u.formatPrice)(L.total, L.currency),
                t,
                s
              ));
          } else null != T && ((t = T.interval), (s = T.intervalCount));
          let C = (0, r.getReviewConfirmButtonLabel)({
              purchaseType: N || o.PurchaseTypes.SUBSCRIPTION,
              plan: T,
              premiumSubscription: null == R ? null : R,
              isGift: !!p,
              planGroup: h,
              isPrepaidPaymentSource: !1,
            }),
            U = "",
            m = "";
          if (A) {
            if (
              null != I &&
              (null == L ? void 0 : L.subscriptionPeriodEnd) != null
            )
              U =
                E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format(
                  { rate: I, renewalDate: L.subscriptionPeriodEnd }
                );
            else
              switch (t) {
                case d.SubscriptionIntervalTypes.MONTH:
                  U =
                    1 === s
                      ? E.default.Messages
                          .EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY
                      : E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format(
                          { intervalCount: s }
                        );
                  break;
                case d.SubscriptionIntervalTypes.YEAR:
                  U =
                    E.default.Messages
                      .EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                  break;
                case void 0:
                  (m =
                    E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format(
                      { primaryText: C, paidURL: o.MarketingURLs.PAID_TERMS }
                    )),
                    (U =
                      E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format(
                        {}
                      ));
                  break;
                default:
                  throw Error("Unexpected interval: ".concat(t));
              }
          } else if (N === o.PurchaseTypes.ONE_TIME)
            (m =
              E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format(
                { primaryText: C, paidURL: o.MarketingURLs.PAID_TERMS }
              )),
              (U =
                S === o.SKUProductLines.COLLECTIBLES
                  ? p
                    ? E.default.Messages
                        .COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT
                    : E.default.Messages
                        .COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT
                  : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
          else if (null == T || p)
            switch (
              (p &&
                (m =
                  E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format(
                    { primaryText: C, paidURL: o.MarketingURLs.PAID_TERMS }
                  )),
              t)
            ) {
              case d.SubscriptionIntervalTypes.MONTH:
                (U = p
                  ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                  : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY),
                  (U = p
                    ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY
                    : 1 === s
                      ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY
                      : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format(
                          { intervalCount: s }
                        ));
                break;
              case d.SubscriptionIntervalTypes.YEAR:
                U = p
                  ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY
                  : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                break;
              case void 0:
                U = "";
                break;
              default:
                throw Error("Unexpected interval: ".concat(t));
            }
          else {
            let e;
            let a = (0, r.getReviewConfirmButtonLabel)({
              purchaseType: o.PurchaseTypes.SUBSCRIPTION,
              plan: T,
              premiumSubscription: null == R ? null : R,
              isGift: !1,
              planGroup: h,
              isPrepaidPaymentSource: !1,
            });
            if (
              (null != P &&
                null != t &&
                null != s &&
                (e = (0, u.formatRate)(
                  (0, u.formatPrice)(P.amount, P.currency),
                  t,
                  s
                )),
              null == e)
            ) {
              let e = Error("Missing base rate for legal fine print");
              (0, n.captureBillingException)(e, { tags: { planId: T.id } });
            }
            U =
              null != R && (0, c.subscriptionCanDowngrade)(R, T.id, h)
                ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format(
                    {
                      primaryText: a,
                      rate: e,
                      paidURL: o.MarketingURLs.PAID_TERMS,
                      contactLink: o.MarketingURLs.CONTACT,
                      helpdeskArticle: i.default.getArticleURL(
                        o.HelpdeskArticles.BILLING
                      ),
                    }
                  )
                : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                    primaryText: a,
                    rate: e,
                    paidURL: o.MarketingURLs.PAID_TERMS,
                    contactLink: o.MarketingURLs.CONTACT,
                    helpdeskArticle: i.default.getArticleURL(
                      o.HelpdeskArticles.BILLING
                    ),
                  });
          }
          return (0, a.jsxs)(a.Fragment, {
            children: [
              "" !== m &&
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", { children: m }),
                    (0, a.jsx)("div", { className: _.divider }),
                  ],
                }),
              "" !== U && (0, a.jsx)("div", { children: U }),
              f === o.PaymentSourceTypes.PAYSAFE_CARD &&
                (0, a.jsx)("div", {
                  className: _.paymentSourceNoticeCopy,
                  children:
                    E.default.Messages
                      .SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD,
                }),
              f === o.PaymentSourceTypes.SOFORT &&
                (0, a.jsxs)("div", {
                  className: _.paymentSourceNoticeCopy,
                  children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "],
                }),
            ],
          });
        };
    },
    545876: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("70102"),
        s("222007");
      var a = s("37983"),
        r = s("884691"),
        n = s("414456"),
        i = s.n(n),
        l = s("627445"),
        u = s.n(l),
        c = s("446674"),
        o = s("77078"),
        d = s("971427"),
        E = s("701909"),
        _ = s("719923"),
        I = s("49111"),
        T = s("646718"),
        p = s("782340"),
        A = s("180978");
      class L extends r.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state)
          );
        }
        componentDidUpdate(e, t) {
          let s = this.hasAcceptedNeccessaryTerms(e, t),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          a !== s && this.props.onChange(a);
        }
        hasAcceptedNeccessaryTerms(e, t) {
          return (
            (null == e.eulaId || t.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === T.SubscriptionIntervalTypes.YEAR)
            return p.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === T.SubscriptionIntervalTypes.MONTH)
            return p.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: t,
              hasPreviouslyAcceptedEULA: r,
              forceShow: n,
              disabled: l,
              className: c,
              checkboxClassname: d,
              checkboxLabelClassname: T,
              finePrint: L,
              showPricingLink: f,
              showWithdrawalWaiver: M,
              isTrial: N,
              isDiscount: S,
              subscriptionPlan: P,
              finePrintClassname: R,
            } = this.props,
            { hasAcceptedEULA: h, hasAcceptedWithdrawalWaiver: C } = this.state;
          return (u(
            !N || null != P,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"
          ),
          n || (null != e && !r) || M)
            ? (0, a.jsxs)("div", {
                className: c,
                children: [
                  M &&
                    (0, a.jsx)(o.FormTitle, {
                      className: A.formTitle,
                      children:
                        p.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (n || !r)
                    ? (0, a.jsx)(o.Checkbox, {
                        type: o.Checkbox.Types.INVERTED,
                        value: h,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: l,
                        className: A.checkbox,
                        children: (0, a.jsx)("div", {
                          className: A.checkboxLabel,
                          children:
                            p.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format(
                              {
                                applicationName: t,
                                onClick: t => {
                                  (0, o.openModalLazy)(async () => {
                                    let { default: t } = await s
                                      .el("523360")
                                      .then(s.bind(s, "523360"));
                                    return s =>
                                      (0, a.jsx)(t, { eulaId: e, ...s });
                                  }),
                                    t.preventDefault();
                                },
                              }
                            ),
                        }),
                      })
                    : null,
                  null == L
                    ? null
                    : (0, a.jsx)("div", {
                        className: i(A.finePrint, R),
                        children: L,
                      }),
                  M
                    ? (0, a.jsxs)("div", {
                        className: c,
                        children: [
                          (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: C,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: l,
                            className: i(A.checkbox, d),
                            children: (0, a.jsx)("div", {
                              className: i(A.checkboxLabel, T),
                              children:
                                p.default.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: A.finePrint,
                            children:
                              p.default.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  f &&
                    (0, a.jsxs)("div", {
                      className: A.finePrint,
                      children: [
                        "*",
                        p.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: E.default.getArticleURL(
                            I.HelpdeskArticles.LOCALIZED_PRICING
                          ),
                        }),
                      ],
                    }),
                  N &&
                    null != P &&
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        p.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                          buttonText: (0, _.getBillingReviewSubheader)(null, P),
                          interval: this.formatInterval(
                            null == P ? void 0 : P.interval
                          ),
                          cancelSubscriptionArticle: E.default.getArticleURL(
                            I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: E.default.getArticleURL(
                            I.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                  S &&
                    null != P &&
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        p.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                          buttonText: (0, _.getBillingReviewSubheader)(null, P),
                          interval: this.formatInterval(
                            null == P ? void 0 : P.interval
                          ),
                          cancelSubscriptionArticle: E.default.getArticleURL(
                            I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: E.default.getArticleURL(
                            I.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            (this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
              this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            (this.handleToggleEULAAcceptance = (e, t) => {
              this.setState({ hasAcceptedEULA: t });
            });
        }
      }
      var f = c.default.connectStores([d.default], e => {
        let { eulaId: t } = e;
        return {
          hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t),
        };
      })(L);
    },
    868869: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getReviewConfirmButtonLabel: function () {
            return T;
          },
          default: function () {
            return A;
          },
        });
      var a = s("37983");
      s("884691");
      var r = s("627445"),
        n = s.n(r),
        i = s("77078"),
        l = s("642906"),
        u = s("181114"),
        c = s("719923"),
        o = s("380186"),
        d = s("843455"),
        E = s("782340"),
        _ = s("839330"),
        I = s("121432");
      function T(e) {
        let {
          purchaseType: t,
          plan: s,
          premiumSubscription: a,
          isGift: r,
          planGroup: i,
          isPrepaidPaymentSource: l,
        } = e;
        if (t === d.PurchaseTypes.ONE_TIME)
          return r
            ? E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT
            : E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
        if (
          (n(
            null != s,
            "Subscription plan must be selected to render SubscriptionReviewButton"
          ),
          r)
        )
          return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
        if ((0, c.isPremiumSubscriptionPlan)(s.id))
          return l
            ? E.default.Messages.BILLING_SELECT_PLAN
            : null != a
              ? (0, o.subscriptionCanSwitchImmediately)(a, s.id, i)
                ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE
                : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE
              : (0, c.getBillingReviewSubheader)(null, s);
        return E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN;
      }
      function p(e, t) {
        null != e.current &&
          (e.current.scrollIntoView({ behavior: "smooth" }), t());
      }
      function A(e) {
        let {
            legalTermsNodeRef: t,
            invoiceError: s,
            planError: r,
            disablePurchase: n,
            flashLegalTerms: c,
            isSubmitting: o,
            premiumSubscription: d,
            isGift: A,
            planGroup: L,
            isPrepaid: f,
            isTrial: M,
            makePurchase: N,
            needsPaymentSource: S,
          } = e,
          {
            selectedPlan: P,
            hasAcceptedTerms: R,
            purchaseType: h,
          } = (0, l.usePaymentContext)(),
          C = T({
            purchaseType: h,
            plan: P,
            premiumSubscription: d,
            isGift: A,
            planGroup: L,
            isPrepaidPaymentSource: f,
          });
        if (null != s || null != r || n)
          return (0, a.jsx)(i.Button, {
            color: i.Button.Colors.GREEN,
            disabled: !0,
            children: C,
          });
        if (S)
          return (0, a.jsx)(i.Tooltip, {
            text: E.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: e =>
              (0, a.jsx)(i.Button, {
                ...e,
                color: i.Button.Colors.GREEN,
                type: "submit",
                "data-testid": "submitButton",
                disabled: !0,
                children: C,
              }),
          });
        if (M)
          return (0, a.jsxs)(u.default, {
            innerClassName: _.innerButton,
            "data-testid": R ? "purchase" : "submitButton",
            onClick: R ? N : () => p(t, c),
            color: i.Button.Colors.GREEN,
            submitting: o,
            children: [
              (0, a.jsx)("img", { alt: "", className: _.nitroIcon, src: I }),
              C,
            ],
          });
        else if (!R)
          return (0, a.jsx)(i.Tooltip, {
            text: E.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e =>
              (0, a.jsx)(i.Button, {
                ...e,
                color: i.Button.Colors.GREEN,
                type: "submit",
                onClick: () => p(t, c),
                "data-testid": "submitButton",
                children: C,
              }),
          });
        else
          return (0, a.jsx)(i.Button, {
            "data-testid": "purchase",
            onClick: N,
            color: i.Button.Colors.GREEN,
            submitting: o,
            children: C,
          });
      }
    },
    380186: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getSubscriptionSKUs: function () {
            return _;
          },
          subscriptionCanSwitchImmediately: function () {
            return I;
          },
          subscriptionCanDowngrade: function () {
            return T;
          },
          getOrFetchSubscriptionPlan: function () {
            return p;
          },
          getSubscriptionPauseDurations: function () {
            return A;
          },
        }),
        s("222007"),
        s("424973"),
        s("884691");
      var a = s("627445"),
        r = s.n(a),
        n = s("866227"),
        i = s.n(n),
        l = s("216721");
      s("446674");
      var u = s("775433"),
        c = s("10514"),
        o = s("719923"),
        d = s("49111"),
        E = s("646718");
      function _(e) {
        return e.items
          .map(e => {
            let t = c.default.get(e.planId);
            return r(null != t, "Unable to fetch plan"), t;
          })
          .map(e => e.skuId);
      }
      function I(e, t, s) {
        let a = e.getCurrentSubscriptionPlanIdForGroup(s);
        return (
          (e.type === d.SubscriptionTypes.PREMIUM && null == a) ||
          (r(null != a, "Current subscription has no plan in group"),
          r(
            !(
              a === E.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              t === E.SubscriptionPlans.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch"
          ),
          s.indexOf(a) < s.indexOf(t))
        );
      }
      function T(e, t, s) {
        return !I(e, t, s);
      }
      function p(e, t) {
        let s = c.default.get(e);
        if (null == s) {
          let s = E.SubscriptionPlanInfo[e];
          r(null != s, "Missing hardcoded subscriptionPlan: ".concat(e));
          let a = (0, o.castPremiumSubscriptionAsSkuId)(s.skuId);
          !c.default.isFetchingForSKU(a) &&
            (0, u.fetchSubscriptionPlansForSKU)(a, t);
        }
        return s;
      }
      function A(e) {
        let t = Object.keys(l.PauseDuration).filter(e => isNaN(Number(e)));
        if (e.status !== d.SubscriptionStatusTypes.PAUSED)
          return { durations: t, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let s = i(e.currentPeriodStart),
            a = i(e.pauseEndsAt),
            r = Math.round(a.diff(s, "days", !0)),
            n = [];
          for (let e of t) {
            let t = l.PauseDuration[e];
            t > r && n.push(e);
          }
          return { durations: n, currentDaysPaused: r };
        }
      }
    },
    216721: function (e, t, s) {
      "use strict";
      var a, r;
      s.r(t),
        s.d(t, {
          PauseDuration: function () {
            return a;
          },
        }),
        ((r = a || (a = {}))[(r.ONE_MONTH = 30)] = "ONE_MONTH"),
        (r[(r.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (r[(r.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
  },
]);
//# sourceMappingURL=27083.fe83b26ed2f80769a7af.js.map
