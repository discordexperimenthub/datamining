(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69414"],
  {
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983"),
        a = n("884691"),
        i = n("77078"),
        s = n("390236"),
        u = a.memo(function (e) {
          var t, n, u, d;
          let {
              user: l,
              size: o = i.AvatarSizes.SIZE_32,
              animate: E = !1,
              "aria-hidden": c = !1,
              ...S
            } = e,
            _ = a.useContext(s.default);
          return (0, r.jsx)(i.Avatar, {
            src:
              ((t = l),
              (n = (0, i.getAvatarSize)(o)),
              (u = E),
              (d = _),
              t.getAvatarURL(d, n, u)),
            size: o,
            "aria-label": c ? void 0 : l.username,
            "aria-hidden": c,
            ...S,
          });
        });
    },
    7127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalConfirmStep: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("627445"),
        i = n.n(a),
        s = n("77078"),
        u = n("642906"),
        d = n("367767"),
        l = n("650484"),
        o = n("782340"),
        E = n("348550");
      function c(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: a,
            application: c,
          } = (0, u.usePaymentContext)();
        i(null != a, "Expected selectedSkuId"),
          i(null != c, "Expected application");
        let S = n[a];
        i(null != S, "Expected sku");
        let _ =
          o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: c.name, itemName: S.name }
          );
        return (0, r.jsxs)(l.PaymentPortalBody, {
          children: [
            (0, r.jsx)(d.default, {}),
            (0, r.jsxs)("div", {
              className: E.confirmation,
              children: [
                (0, r.jsx)(s.Heading, {
                  variant: "heading-xxl/bold",
                  className: E.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(s.Text, { variant: "text-md/normal", children: _ }),
                (0, r.jsx)("div", { className: E.divider }),
                (0, r.jsx)(s.Button, {
                  onClick: t,
                  children: o.default.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
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
            return _;
          },
          REVIEW_STEP_CONFIG: function () {
            return p;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return I;
          },
          SHARED_STEP_CONFIGS: function () {
            return N;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("357957"),
        i = n("85336"),
        s = n("262683"),
        u = n("946359"),
        d = n("724269"),
        l = n("7127"),
        o = n("99836"),
        E = n("217796"),
        c = n("782340");
      let S = {
          key: null,
          renderStep: e => (0, r.jsx)(E.OneTimePaymentPredicateStep, { ...e }),
        },
        _ = {
          key: i.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(s.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  i.Step.ADD_PAYMENT_STEPS,
                  i.Step.REVIEW,
                  i.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = a.default.paymentSources;
                  0 === Object.keys(t).length
                    ? e.handleClose()
                    : e.handleStepChange(i.Step.REVIEW, {
                        trackedFromStep: i.Step.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        P = {
          key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(d.default, {}),
        },
        T = {
          key: i.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(u.default, {}),
          options: { renderHeader: !0 },
        },
        p = {
          key: i.Step.REVIEW,
          renderStep: e => (0, r.jsx)(o.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => c.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        I = {
          key: i.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(l.PaymentModalConfirmStep, { ...e }),
        },
        N = [P, T];
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
      var r = n("37983"),
        a = n("884691"),
        i = n("627445"),
        s = n.n(i),
        u = n("245187"),
        d = n("635357"),
        l = n("642906"),
        o = n("85336"),
        E = n("628738"),
        c = n("49111");
      function S(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: i,
            hasFetchedSkus: S,
            paymentSources: _,
            hasFetchedPaymentSources: P,
            application: T,
            skusById: p,
            selectedSkuId: I,
          } = (0, l.usePaymentContext)(),
          { isGift: N } = (0, d.useGiftContext)(),
          [f, A] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != T;
          S && P && e && A(!1);
        }, [S, P, T]),
        a.useEffect(() => {
          if (f || i) return;
          s(null != I, "Expected selectedSkuId");
          let e = p[I];
          if (
            N &&
            (null == e ? void 0 : e.productLine) ===
              c.SKUProductLines.COLLECTIBLES
          ) {
            t(o.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(_).length) {
            t(o.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(o.Step.REVIEW);
        }, [f, i, t, _, N, p, I]),
        f)
          ? (0, r.jsx)(E.default, {})
          : i
            ? (0, r.jsx)(u.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    405314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return c;
          },
          default: function () {
            return S;
          },
        }),
        n("222007");
      var r = n("37983");
      n("884691");
      var a = n("812204"),
        i = n("685665"),
        s = n("635357"),
        u = n("642906"),
        d = n("385179"),
        l = n("292215"),
        o = n("843455");
      function E(e) {
        let {
            onClose: t,
            onComplete: n,
            transitionState: a,
            applicationId: s,
            analyticsLocationObject: l,
            skuId: o,
          } = e,
          {} = (0, u.usePaymentContext)(),
          { analyticsLocations: E } = (0, i.default)();
        return (0, r.jsx)(d.PaymentModal, {
          onClose: t,
          onComplete: n,
          applicationId: s,
          skuId: o,
          initialPlanId: null,
          analyticsObject: l,
          analyticsLocations: E,
          transitionState: a,
        });
      }
      let c = [
        l.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG,
        l.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG,
        ...l.SHARED_STEP_CONFIGS,
        l.REVIEW_STEP_CONFIG,
        l.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG,
      ];
      function S(e) {
        let {
            loadId: t,
            applicationId: n,
            skuId: d,
            analyticsLocations: l,
          } = e,
          { AnalyticsLocationProvider: S } = (0, i.default)(
            l,
            a.default.PREMIUM_PAYMENT_MODAL
          );
        return (0, r.jsx)(S, {
          children: (0, r.jsx)(u.PaymentContextProvider, {
            loadId: t,
            stepConfigs: c,
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: o.PurchaseTypes.ONE_TIME,
            children: (0, r.jsx)(s.GiftContextProvider, {
              children: (0, r.jsx)(E, { ...e }),
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f4394a57d0119be28095.js.map
