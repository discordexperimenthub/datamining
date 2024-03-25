(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26743"],
  {
    136798: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ab4644ba521f3abc0507.svg";
    },
    698745: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a1d5e876c5e7b9b34836.svg";
    },
    141195: function (e, t, n) {
      "use strict";
      e.exports = n.p + "57ff574d8430697c11c7.svg";
    },
    933182: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("70102"),
        n("222007");
      var a,
        i,
        s = n("37983"),
        l = n("884691"),
        r = n("917351"),
        u = n.n(r),
        o = n("446674"),
        d = n("77078"),
        c = n("850068"),
        m = n("583367"),
        I = n("812204"),
        S = n("685665"),
        f = n("809071"),
        P = n("818711"),
        C = n("279171"),
        E = n("883662"),
        _ = n("177998"),
        N = n("146163"),
        p = n("625634"),
        M = n("10514"),
        T = n("521012"),
        R = n("145131"),
        U = n("427459"),
        L = n("719923"),
        x = n("153160"),
        h = n("951573"),
        A = n("646718"),
        j = n("843455"),
        y = n("782340"),
        O = n("397111");
      function g(e) {
        let {
          premiumSubscription: t,
          isInventory: n,
          onNext: a,
          onClose: i,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, s.jsx)(d.FormTitle, {
                  tag: d.FormTitleTags.H4,
                  children: n
                    ? y.default.Messages
                        .PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY
                    : y.default.Messages
                        .PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD,
                }),
                (0, s.jsx)(d.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, s.jsxs)(d.ModalContent, {
              className: O.body,
              children: [
                (0, s.jsx)("div", { className: O.cancelImage }),
                (0, s.jsx)("div", {
                  children:
                    t.isPurchasedExternally && null != t.paymentGateway
                      ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format(
                          {
                            paymentGatewayName:
                              j.PaymentGatewayToFriendlyName[t.paymentGateway],
                            subscriptionManagementLink: (0,
                            L.getExternalSubscriptionMethodUrl)(
                              t.paymentGateway,
                              "SUBSCRIPTION_MANAGEMENT"
                            ),
                          }
                        )
                      : n
                        ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format(
                            { endDate: t.currentPeriodEnd }
                          )
                        : y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format(
                            { endDate: t.currentPeriodEnd }
                          ),
                }),
                (0, s.jsx)(C.default, { fromBoostCancelModal: !0 }),
              ],
            }),
            t.isPurchasedExternally
              ? null
              : (0, s.jsxs)(d.ModalFooter, {
                  justify: R.default.Justify.START,
                  children: [
                    (0, s.jsx)(d.Button, {
                      onClick: a,
                      children: y.default.Messages.NEXT,
                    }),
                    (0, s.jsx)(d.Button, {
                      look: d.Button.Looks.LINK,
                      onClick: i,
                      children: y.default.Messages.CANCEL,
                    }),
                  ],
                }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.START = 1)] = "START"),
        (i[(i.PREVIEW = 2)] = "PREVIEW"),
        (i[(i.CONFIRM = 3)] = "CONFIRM");
      async function b(e, t, n, a) {
        let i =
          null != a
            ? a
            : (function () {
                let e = Object.values(p.default.boostSlots),
                  t = u.sortBy(
                    e.filter(e => !(0, U.isGuildBoostSlotCanceled)(e)),
                    e => [
                      null != e.premiumGuildSubscription,
                      null != e.cooldownEndsAt
                        ? new Date(e.cooldownEndsAt)
                        : null,
                    ]
                  )[0];
                return null != t ? t.id : null;
              })();
        if (null == i) throw Error("No slot to cancel");
        await (0, m.cancelGuildBoostSlot)(i),
          await (0, c.updateSubscription)(
            e,
            { items: (0, L.getItemsFromNewAdditionalPlans)(e, t) },
            n
          );
      }
      function v(e) {
        var t, n, a;
        let {
            premiumSubscription: i,
            guildBoostSlotId: r,
            onBack: u,
            onNext: c,
            onClose: m,
          } = e,
          [C, p] = l.useState(!1),
          [T, U] = l.useMemo(() => {
            try {
              return [
                (0, P.calculateAdditionalPlansWithPremiumGuildAdjustment)(
                  i,
                  -1
                ),
                !1,
              ];
            } catch {
              return [[], !0];
            }
          }, [i]);
        l.useEffect(() => {
          U && m();
        }, [U]);
        let { premiumSubscriptionPlan: j, premiumGuildPlan: g } = (0,
          o.useStateFromStoresObject)([M.default], () => {
            let e = M.default.get(i.planId);
            return {
              premiumSubscriptionPlan: e,
              premiumGuildPlan:
                null != e
                  ? M.default.getForSkuAndInterval(
                      (0, L.castPremiumSubscriptionAsSkuId)(
                        A.PremiumSubscriptionSKUs.GUILD
                      ),
                      e.interval,
                      e.intervalCount
                    )
                  : null,
            };
          }),
          { analyticsLocations: v } = (0, S.default)(),
          [B] = (0, f.useSubscriptionInvoicePreview)({
            subscriptionId: i.id,
            renewal: !0,
            currency: i.currency,
            paymentSourceId: i.paymentSourceId,
            analyticsLocations: v,
            analyticsLocation:
              I.default
                .GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
          }),
          G =
            null != g
              ? (0, L.getItemsWithUpsertedPremiumGuildPlan)(
                  i,
                  null !==
                    (a =
                      null === (t = T[0]) || void 0 === t
                        ? void 0
                        : t.quantity) && void 0 !== a
                    ? a
                    : 0,
                  g.id
                )
              : null,
          [D] = (0, f.useSubscriptionInvoicePreview)({
            subscriptionId: i.id,
            items: G,
            renewal: !0,
            analyticsLocations: v,
            analyticsLocation:
              I.default
                .GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
          });
        if (null == D || null == j || null == g || null == B)
          return (0, s.jsx)(d.Spinner, {});
        let w = i.items.some(e => {
            let { planId: t } = e;
            return !A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t);
          }),
          k =
            (w && null == i.renewalMutations) ||
            (null === (n = i.renewalMutations) || void 0 === n
              ? void 0
              : n.items.find(e => {
                  let { planId: t } = e;
                  return !A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t);
                })) != null,
          F = T.some(e => {
            let { planId: t } = e;
            return A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t);
          }),
          W = k || F ? D.total - B.total : -B.total,
          { interval: V, intervalCount: Y } = j;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(h.default, { onClose: m }),
            (0, s.jsxs)(d.ModalContent, {
              className: O.body,
              children: [
                (0, s.jsx)("div", {
                  children:
                    y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format(
                      { endDate: D.subscriptionPeriodStart }
                    ),
                }),
                (0, s.jsxs)(E.PremiumInvoiceTable, {
                  className: O.invoiceTable,
                  children: [
                    (0, s.jsx)(E.PremiumInvoiceTableHeader, {
                      children: y.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                    }),
                    (0, s.jsx)(E.PremiumInvoiceTableRow, {
                      label:
                        y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format(
                          { subscriptionCount: 1 }
                        ),
                      value: (0, x.formatRate)(
                        (0, x.formatPrice)(W, i.currency),
                        V,
                        Y
                      ),
                      className: O.invoiceCancelRow,
                    }),
                    null != G && G.length > 0
                      ? (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(E.PremiumInvoiceTableDivider, {}),
                            (0, s.jsx)(N.SubscriptionInvoiceFooter, {
                              premiumSubscription: i,
                              renewalInvoice: D,
                              isUpdate: !0,
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(d.ModalFooter, {
              align: R.default.Align.CENTER,
              justify: R.default.Justify.BETWEEN,
              children: [
                (0, s.jsx)(d.Button, {
                  color: d.Button.Colors.RED,
                  disabled: C,
                  onClick: async () => {
                    try {
                      p(!0), await b(i, T, v, r), c();
                    } catch {
                      p(!1);
                    }
                  },
                  children:
                    y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON,
                }),
                (0, s.jsx)(_.default, { onClick: u }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let { premiumSubscription: t, onClose: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, s.jsx)(d.FormTitle, {
                  tag: d.FormTitleTags.H4,
                  children:
                    y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE,
                }),
                (0, s.jsx)(d.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, s.jsxs)(d.ModalContent, {
              className: O.body,
              children: [
                (0, s.jsx)("div", { className: O.cancelImage }),
                (0, s.jsx)("div", {
                  children:
                    y.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format(
                      { endDate: t.currentPeriodEnd }
                    ),
                }),
              ],
            }),
            (0, s.jsx)(d.ModalFooter, {
              children: (0, s.jsx)(d.Button, {
                onClick: n,
                children: y.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
      function G(e) {
        let t,
          { guildBoostSlot: n, transitionState: a, onClose: i } = e;
        l.useEffect(() => {
          !T.default.hasFetchedSubscriptions() && (0, c.fetchSubscriptions)();
        }, []);
        let r = (0, o.useStateFromStores)([T.default], () =>
            T.default.getPremiumTypeSubscription()
          ),
          [u, m] = l.useState(1),
          { analyticsLocations: f } = (0, S.default)(
            I.default.GUILD_BOOST_CANCELLATION_MODAL
          );
        if (null == r)
          t = (0, s.jsx)(d.ModalContent, {
            children: (0, s.jsx)(d.Spinner, {}),
          });
        else
          switch (u) {
            case 1:
              t = (0, s.jsx)(g, {
                premiumSubscription: r,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => m(2),
                onClose: i,
              });
              break;
            case 2:
              t = (0, s.jsx)(v, {
                premiumSubscription: r,
                guildBoostSlotId: n.id,
                onBack: () => m(1),
                onNext: () => m(3),
                onClose: i,
              });
              break;
            case 3:
              t = (0, s.jsx)(B, { premiumSubscription: r, onClose: i });
              break;
            default:
              throw Error("Unexpected step: ".concat(u));
          }
        return (0, s.jsx)(S.AnalyticsLocationProvider, {
          value: f,
          children: (0, s.jsx)(d.ModalRoot, {
            transitionState: a,
            children: t,
          }),
        });
      }
    },
    951573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        s = n("77078"),
        l = n("206230"),
        r = n("22368"),
        u = n("145131"),
        o = n("467831"),
        d = n("791971");
      function c(e) {
        let { purchaseState: t, currentStep: n, onClose: c } = e,
          [m, I] = (0, r.usePaymentModalAnimationScene)({
            purchaseState: t,
            currentStep: n,
            initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
            purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
            errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
            successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS,
          }),
          S = (0, i.useStateFromStores)(
            [l.default],
            () => l.default.useReducedMotion
          );
        return (0, a.jsxs)(s.ModalHeader, {
          align: u.default.Align.START,
          className: d.header,
          separator: !1,
          children: [
            (0, a.jsx)(o.PremiumPaymentGuildAnimation, {
              className: d.animation,
              nextScene: m,
              onScenePlay: e =>
                I(o.PremiumPaymentGuildAnimation.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: S,
            }),
            (0, a.jsx)("div", { className: d.headerTitle }),
            (0, a.jsx)(s.ModalCloseButton, {
              onClick: c,
              className: d.closeButton,
            }),
          ],
        });
      }
    },
    818711: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          calculateAdditionalPlansWithPremiumGuildAdjustment: function () {
            return o;
          },
        }),
        n("70102"),
        n("222007");
      var a = n("627445"),
        i = n.n(a),
        s = n("10514"),
        l = n("719923"),
        r = n("646718"),
        u = n("49111");
      function o(e, t) {
        let n = s.default.get(e.planId);
        i(null != n, "missing premium subscription plan");
        let a = s.default.getForSkuAndInterval(
          (0, l.castPremiumSubscriptionAsSkuId)(
            r.PremiumSubscriptionSKUs.GUILD
          ),
          n.interval,
          n.intervalCount
        );
        i(null != a, "missing premium guild plan");
        let o =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          d =
            e.status === u.SubscriptionStatusTypes.CANCELED
              ? 0
              : (0, l.getNumPremiumGuildSubscriptions)(o),
          c = d + t,
          m = o.filter(e => e.planId !== a.id);
        if (c < 0) throw Error("Invalid adjustment");
        return 0 === c ? m : [...m, { planId: a.id, quantity: c }];
      }
    },
  },
]);
//# sourceMappingURL=936556fb7b840f3e738c.js.map
