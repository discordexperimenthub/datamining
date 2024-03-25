(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5343"],
  {
    809497: function (t, e, s) {
      "use strict";
      t.exports = s.p + "765af82f8e62cbe2acc8.svg";
    },
    738400: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return R;
          },
        }),
        s("222007"),
        s("70102");
      var n,
        i,
        l = s("37983"),
        a = s("884691"),
        u = s("627445"),
        o = s.n(u),
        r = s("446674"),
        d = s("819855"),
        c = s("77078"),
        I = s("850068"),
        m = s("583367"),
        N = s("812204"),
        C = s("685665"),
        S = s("818711"),
        f = s("161778"),
        p = s("521012"),
        h = s("145131"),
        M = s("719923"),
        T = s("782340"),
        _ = s("194718");
      async function g(t, e, s, n) {
        await (0, m.uncancelGuildBoostSlot)(s),
          await (0, I.updateSubscription)(
            t,
            { items: (0, M.getItemsFromNewAdditionalPlans)(t, e) },
            n
          );
      }
      function E(t) {
        let {
            premiumSubscription: e,
            guildBoostSlotId: s,
            onNext: n,
            onClose: i,
          } = t,
          [u, I] = a.useState(!1),
          m = (0, r.useStateFromStores)([f.default], () => f.default.theme),
          { analyticsLocations: N } = (0, C.default)();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(c.ModalHeader, {
              separator: !1,
              children: [
                (0, l.jsx)(c.FormTitle, {
                  tag: c.FormTitleTags.H4,
                  children:
                    T.default.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE,
                }),
                (0, l.jsx)(c.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, l.jsx)(c.ModalContent, {
              className: _.body,
              children:
                T.default.Messages
                  .PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION,
            }),
            (0, l.jsxs)(c.ModalFooter, {
              justify: h.default.Justify.START,
              children: [
                (0, l.jsx)(c.Button, {
                  onClick: async () => {
                    try {
                      I(!0);
                      let t = (0,
                      S.calculateAdditionalPlansWithPremiumGuildAdjustment)(
                        e,
                        1
                      );
                      o(
                        (0, M.getNumPremiumGuildSubscriptions)(t) <=
                          (0, M.getNumPremiumGuildSubscriptions)(
                            e.additionalPlans
                          ),
                        "Uncanceling should not increase the number of guild subscriptions"
                      ),
                        await g(e, t, s, N),
                        n();
                    } catch (t) {
                      I(!1);
                    }
                  },
                  submitting: u,
                  children:
                    T.default.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON,
                }),
                (0, l.jsx)(c.Button, {
                  look: c.Button.Looks.LINK,
                  color: (0, d.isThemeLight)(m)
                    ? c.Button.Colors.PRIMARY
                    : c.Button.Colors.WHITE,
                  onClick: i,
                  disabled: u,
                  children: T.default.Messages.NEVERMIND,
                }),
              ],
            }),
          ],
        });
      }
      function P(t) {
        let { onClose: e } = t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(c.ModalHeader, {
              separator: !1,
              children: [
                (0, l.jsx)(c.FormTitle, {
                  tag: c.FormTitleTags.H4,
                  children:
                    T.default.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE,
                }),
                (0, l.jsx)(c.ModalCloseButton, { onClick: e }),
              ],
            }),
            (0, l.jsxs)(c.ModalContent, {
              className: _.body,
              children: [
                (0, l.jsx)("div", { className: _.uncancelImage }),
                (0, l.jsx)("div", {
                  children:
                    T.default.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION,
                }),
              ],
            }),
            (0, l.jsx)(c.ModalFooter, {
              children: (0, l.jsx)(c.Button, {
                onClick: e,
                children: T.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
      function R(t) {
        let e,
          { guildBoostSlotId: s, transitionState: n, onClose: i } = t,
          { analyticsLocations: u } = (0, C.default)(
            N.default.GUILD_BOOST_UNCANCELLATION_MODAL
          );
        a.useEffect(() => {
          !p.default.hasFetchedSubscriptions() && (0, I.fetchSubscriptions)();
        }, []);
        let o = (0, r.useStateFromStores)([p.default], () =>
            p.default.getPremiumTypeSubscription()
          ),
          [d, m] = a.useState(1);
        if (null == o)
          e = (0, l.jsx)(c.ModalContent, {
            children: (0, l.jsx)(c.Spinner, {}),
          });
        else
          switch (d) {
            case 1:
              e = (0, l.jsx)(E, {
                premiumSubscription: o,
                guildBoostSlotId: s,
                onNext: () => m(2),
                onClose: i,
              });
              break;
            case 2:
              e = (0, l.jsx)(P, { onClose: i });
              break;
            default:
              throw Error("Unexpected step: ".concat(d));
          }
        return (0, l.jsx)(C.AnalyticsLocationProvider, {
          value: u,
          children: (0, l.jsx)(c.ModalRoot, {
            transitionState: n,
            children: e,
          }),
        });
      }
      ((i = n || (n = {}))[(i.START = 1)] = "START"),
        (i[(i.CONFIRM = 2)] = "CONFIRM");
    },
    818711: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          calculateAdditionalPlansWithPremiumGuildAdjustment: function () {
            return r;
          },
        }),
        s("70102"),
        s("222007");
      var n = s("627445"),
        i = s.n(n),
        l = s("10514"),
        a = s("719923"),
        u = s("646718"),
        o = s("49111");
      function r(t, e) {
        let s = l.default.get(t.planId);
        i(null != s, "missing premium subscription plan");
        let n = l.default.getForSkuAndInterval(
          (0, a.castPremiumSubscriptionAsSkuId)(
            u.PremiumSubscriptionSKUs.GUILD
          ),
          s.interval,
          s.intervalCount
        );
        i(null != n, "missing premium guild plan");
        let r =
            null != t.renewalMutations
              ? t.renewalMutations.additionalPlans
              : t.additionalPlans,
          d =
            t.status === o.SubscriptionStatusTypes.CANCELED
              ? 0
              : (0, a.getNumPremiumGuildSubscriptions)(r),
          c = d + e,
          I = r.filter(t => t.planId !== n.id);
        if (c < 0) throw Error("Invalid adjustment");
        return 0 === c ? I : [...I, { planId: n.id, quantity: c }];
      }
    },
  },
]);
//# sourceMappingURL=59962c55d1f1af5444f1.js.map
