(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69414"],
  {
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983"),
        a = n("884691"),
        i = n("77078"),
        u = n("390236"),
        s = a.memo(function (e) {
          var t, n, s, l;
          let {
              user: d,
              size: o = i.AvatarSizes.SIZE_32,
              animate: E = !1,
              "aria-hidden": c = !1,
              ...S
            } = e,
            _ = a.useContext(u.default);
          return (0, r.jsx)(i.Avatar, {
            src:
              ((t = d),
              (n = (0, i.getAvatarSize)(o)),
              (s = E),
              (l = _),
              t.getAvatarURL(l, n, s)),
            size: o,
            "aria-label": c ? void 0 : d.username,
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
        u = n("77078"),
        s = n("642906"),
        l = n("367767"),
        d = n("650484"),
        o = n("782340"),
        E = n("348550");
      function c(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: a,
            application: c,
          } = (0, s.usePaymentContext)();
        i(null != a, "Expected selectedSkuId"),
          i(null != c, "Expected application");
        let S = n[a];
        i(null != S, "Expected sku");
        let _ =
          o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: c.name, itemName: S.name }
          );
        return (0, r.jsxs)(d.PaymentPortalBody, {
          children: [
            (0, r.jsx)(l.default, {}),
            (0, r.jsxs)("div", {
              className: E.confirmation,
              children: [
                (0, r.jsx)(u.Heading, {
                  variant: "heading-xxl/bold",
                  className: E.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(u.Text, { variant: "text-md/normal", children: _ }),
                (0, r.jsx)("div", { className: E.divider }),
                (0, r.jsx)(u.Button, {
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
            return c;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return S;
          },
          REVIEW_STEP_CONFIG: function () {
            return T;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return p;
          },
          SHARED_STEP_CONFIGS: function () {
            return I;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("357957"),
        i = n("85336"),
        u = n("262683"),
        s = n("946359"),
        l = n("724269"),
        d = n("7127"),
        o = n("99836"),
        E = n("217796");
      let c = {
          key: null,
          renderStep: e => (0, r.jsx)(E.OneTimePaymentPredicateStep, { ...e }),
        },
        S = {
          key: i.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
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
        _ = {
          key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(l.default, {}),
        },
        P = {
          key: i.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(s.default, {}),
        },
        T = {
          key: i.Step.REVIEW,
          renderStep: e => (0, r.jsx)(o.PaymentModalReviewStep, { ...e }),
        },
        p = {
          key: i.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(d.PaymentModalConfirmStep, { ...e }),
        },
        I = [_, P];
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
        u = n.n(i),
        s = n("245187"),
        l = n("635357"),
        d = n("642906"),
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
          } = (0, d.usePaymentContext)(),
          { isGift: N } = (0, l.useGiftContext)(),
          [f, A] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != T;
          S && P && e && A(!1);
        }, [S, P, T]),
        a.useEffect(() => {
          if (f || i) return;
          u(null != I, "Expected selectedSkuId");
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
            ? (0, r.jsx)(s.BlockedPaymentsContentModal, { onClose: n })
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
        u = n("635357"),
        s = n("642906"),
        l = n("385179"),
        d = n("292215"),
        o = n("843455");
      function E(e) {
        let {
            onClose: t,
            onComplete: n,
            transitionState: a,
            applicationId: u,
            analyticsLocationObject: d,
            skuId: o,
          } = e,
          {} = (0, s.usePaymentContext)(),
          { analyticsLocations: E } = (0, i.default)();
        return (0, r.jsx)(l.PaymentModal, {
          onClose: t,
          onComplete: n,
          applicationId: u,
          skuId: o,
          initialPlanId: null,
          analyticsObject: d,
          analyticsLocations: E,
          transitionState: a,
        });
      }
      let c = [
        d.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG,
        d.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG,
        ...d.SHARED_STEP_CONFIGS,
        d.REVIEW_STEP_CONFIG,
        d.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG,
      ];
      function S(e) {
        let {
            loadId: t,
            applicationId: n,
            skuId: l,
            analyticsLocations: d,
          } = e,
          { AnalyticsLocationProvider: S } = (0, i.default)(
            d,
            a.default.PREMIUM_PAYMENT_MODAL
          );
        return (0, r.jsx)(S, {
          children: (0, r.jsx)(s.PaymentContextProvider, {
            loadId: t,
            stepConfigs: c,
            applicationId: n,
            skuIDs: [l],
            activeSubscription: null,
            purchaseType: o.PurchaseTypes.ONE_TIME,
            children: (0, r.jsx)(u.GiftContextProvider, {
              children: (0, r.jsx)(E, { ...e }),
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=a7ab45a2044a71f769a9.js.map
