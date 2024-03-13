(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40092"],
  {
    777273: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          fetchUserAffinities: function () {
            return u;
          },
        });
      var a = t("872717"),
        _ = t("913144"),
        l = t("843823"),
        I = t("49111");
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.default.needsRefresh()
          ? (_.default.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            a.default
              .get({
                url: I.Endpoints.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                e => {
                  let { body: s } = e;
                  _.default.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: s,
                  });
                },
                () => {
                  _.default.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                }
              ))
          : Promise.resolve();
      }
    },
    891865: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return G;
          },
        }),
        t("222007");
      var a = t("37983"),
        _ = t("884691"),
        l = t("414456"),
        I = t.n(l),
        u = t("917351"),
        n = t.n(u),
        i = t("446674"),
        r = t("77078"),
        N = t("54239"),
        E = t("736964"),
        T = t("777273"),
        d = t("87657"),
        S = t("210721"),
        R = t("671484"),
        f = t("27618"),
        A = t("102985"),
        o = t("843823"),
        P = t("697218"),
        c = t("920700"),
        M = t("953109"),
        L = t("306160"),
        O = t("659632"),
        C = t("719923"),
        m = t("158998"),
        g = t("49111"),
        U = t("646718"),
        p = t("782340"),
        F = t("164852");
      function G(e) {
        let {
            giftCode: s,
            application: t,
            sku: l,
            subscriptionPlan: u,
            selectedGiftStyle: n,
            onClose: N,
            hasSentMessage: E,
            giftRecipient: T,
            giftMessageError: S,
            isSendingMessage: f,
          } = e,
          [o, P] = _.useState(c.default.Modes.DEFAULT),
          G = (0, i.useStateFromStores)([A.default], () => A.default.enabled),
          D = E || (null != n && null != T),
          H = () => (null != u ? u.skuId : null != l ? l.id : null),
          x = () => {
            let e;
            let s = null != n && U.SeasonalGiftStyles2023.includes(n);
            return null != S
              ? p.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == u
                ? null
                : (e =
                    u.interval === U.SubscriptionIntervalTypes.MONTH
                      ? D
                        ? s
                          ? p.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : p.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : p.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : D
                        ? s
                          ? p.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : p.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : p.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, C.getTierDisplayName)(u.id),
                      intervalCount: u.intervalCount,
                    }
                  );
          },
          b = (e, s) => {
            null != l &&
              (0, O.trackGiftCodeCopy)(
                new R.default({ code: s, maxUses: 1 }),
                l
              );
            try {
              (0, L.copy)(e), P(c.default.Modes.SUCCESS);
            } catch (e) {
              P(c.default.Modes.ERROR);
            }
            setTimeout(() => {
              P(c.default.Modes.DEFAULT);
            }, 1500);
          },
          B = () => {
            let e;
            if (null == s) return null;
            switch (o) {
              case c.default.Modes.SUCCESS:
                e = p.default.Messages.BILLING_GIFT_COPIED;
                break;
              case c.default.Modes.ERROR:
                e = p.default.Messages.FAILED;
                break;
              default:
                e = p.default.Messages.COPY;
            }
            return (0, a.jsxs)("div", {
              className: F.giftCodeSection,
              children: [
                (0, a.jsx)(r.FormTitle, {
                  children:
                    p.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != s &&
                  (0, a.jsx)(c.default, {
                    hideMessage: G
                      ? p.default.Messages.GIFT_INVENTORY_HIDDEN
                      : null,
                    value: (0, O.getGiftCodeURL)(s),
                    mode: o,
                    text: e,
                    onCopy: e => b(e, s),
                    supportsCopy: L.SUPPORTS_COPY,
                    className: F.copyInput,
                    buttonColor: c.default.ButtonColors.LINK,
                    buttonLook: c.default.ButtonLooks.LINK,
                  }),
                (0, a.jsx)("div", {
                  className: F.subtext,
                  children:
                    p.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        if (f)
          return (0, a.jsxs)("div", {
            className: F.confirmation,
            children: [
              null != t
                ? (0, a.jsx)(M.default, {
                    game: t,
                    className: F.icon,
                    size: M.default.Sizes.LARGE,
                    skuId: H(),
                  })
                : null,
              (0, a.jsx)(r.Spinner, { type: r.SpinnerTypes.PULSING_ELLIPSIS }),
            ],
          });
        let Y =
          (null == l ? void 0 : l.productLine) ===
          g.SKUProductLines.COLLECTIBLES;
        return (0, a.jsxs)("div", {
          className: F.confirmation,
          children: [
            null != t
              ? (0, a.jsx)(M.default, {
                  game: t,
                  className: F.icon,
                  size: M.default.Sizes.LARGE,
                  skuId: H(),
                })
              : null,
            (0, a.jsx)(r.Heading, {
              variant: "heading-lg/semibold",
              className: I({
                [F.header]: null == n && !Y,
                [F.headerCustomGifting]: null != n && !Y,
              }),
              children:
                null != T || (E && null == S)
                  ? p.default.Messages
                      .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                  : null != S
                    ? p.default.Messages
                        .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                    : p.default.Messages
                        .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
            }),
            (E && null != T && null == S) || D
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.default, {
                      user: T,
                      className: F.giftRecipient,
                      size: r.AvatarSizes.SIZE_80,
                    }),
                    (0, a.jsx)(r.Heading, {
                      className: F.giftRecipientName,
                      variant: "heading-md/semibold",
                      children: m.default.getName(T),
                    }),
                    (0, a.jsxs)("div", {
                      className: F.giftRecipientTag,
                      children: [" ", m.default.getUserTag(T)],
                    }),
                    (0, a.jsx)("div", {
                      className: F.giftSentMessage,
                      children: x(),
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", { className: F.blurb, children: x() }),
                    null == S && (0, a.jsx)(h, { giftCode: s, onClose: N }),
                    (0, a.jsx)("div", { className: F.divider }),
                    B(),
                  ],
                }),
          ],
        });
      }
      let h = e => {
        let { giftCode: s, onClose: t } = e;
        _.useEffect(() => {
          E.default.fetchRelationships(), (0, T.fetchUserAffinities)();
        }, []);
        let [l, I] = _.useState(),
          [u, R] = _.useState(!1),
          [A, c] = _.useState(!1),
          { userAffinities: M, isLoading: L } = (0, i.useStateFromStoresObject)(
            [o.default],
            () => ({
              userAffinities: o.default.getUserAffinitiesUserIds(),
              isLoading: o.default.getFetching(),
            })
          ),
          O = Array.from(M.values()),
          C = (0, i.useStateFromStores)([f.default], () =>
            f.default.getFriendIDs()
          ),
          g = n.difference(C, O),
          U = [...O, ...g],
          G = (0, i.useStateFromStores)(
            [P.default],
            () => P.default.filter(e => U.includes(e.id) && !e.bot),
            [U]
          ),
          h = null == G || 0 === G.length;
        if (h) return null;
        let D = n.sortBy(G, e => U.indexOf(e.id));
        return (0, a.jsxs)("div", {
          className: F.giftRecipientSection,
          children: [
            (0, a.jsx)(r.FormTitle, {
              children:
                p.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, a.jsxs)("div", {
              className: F.giftRecipient,
              children: [
                (0, a.jsx)(r.SearchableSelect, {
                  placeholder:
                    p.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: F.giftRecipientInputWrapper,
                  className: u ? F.giftRecipientInputError : void 0,
                  renderOptionPrefix: e =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, a.jsx)(d.default, {
                          user: e.value,
                          size: r.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    L
                      ? (0, a.jsx)(r.Spinner, {
                          type: r.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: l,
                  onChange: e => {
                    I(e), R(!1);
                  },
                  options: D.map(e => ({
                    value: e,
                    label: "".concat(m.default.getUserTag(e)),
                  })),
                }),
                (0, a.jsx)(r.Button, {
                  disabled: null == l,
                  submitting: A,
                  className: F.sendToRecipientButton,
                  onClick: () => {
                    c(!0),
                      (0, S.sendGiftMessage)(l, s)
                        .then(() => {
                          t(), (0, N.popAllLayers)();
                        })
                        .catch(() => {
                          R(!0), c(!1);
                        });
                  },
                  children:
                    p.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: u ? F.subtextError : F.subtext,
              children: u
                ? p.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : p.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    775155: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return M;
          },
          PremiumSubscriptionGiftPurchaseConfirmation: function () {
            return L;
          },
        }),
        t("222007"),
        t("70102");
      var a = t("37983"),
        _ = t("884691"),
        l = t("627445"),
        I = t.n(l),
        u = t("446674"),
        n = t("77078"),
        i = t("465527"),
        r = t("635357"),
        N = t("891865"),
        E = t("353365"),
        T = t("10514"),
        d = t("552712"),
        S = t("719923"),
        R = t("977934"),
        f = t("646718"),
        A = t("49111"),
        o = t("782340"),
        P = t("766593");
      function c(e) {
        var s, t;
        let _,
          {
            planId: l,
            startingPremiumSubscriptionPlanId: n,
            paymentSourceType: i,
          } = e,
          [r, N] = (0, u.useStateFromStoresArray)([T.default], () => [
            T.default.get(n),
            T.default.get(l),
          ]);
        if (
          (I(null != r && null != N, "Missing startingPlan or newPlan"),
          (s = n),
          (t = l),
          f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) <
            f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t))
        )
          switch (l) {
            case f.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
              (_ = o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case f.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
              (_ =
                o.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
              (_ =
                o.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
              (_ =
                o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  {
                    numFreeGuildSubscriptions:
                      f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                  }
                )),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      {
                        numFreeGuildSubscriptions:
                          f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                      }
                    ));
              break;
            case f.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case f.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
              _ =
                o.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case f.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
              _ = o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(l));
          }
        else if (
          r.skuId === f.PremiumSubscriptionSKUs.TIER_2 &&
          N.skuId === f.PremiumSubscriptionSKUs.TIER_1
        )
          _ = o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (N.skuId) {
            case f.PremiumSubscriptionSKUs.TIER_0:
              _ = o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case f.PremiumSubscriptionSKUs.TIER_1:
              _ =
                o.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case f.PremiumSubscriptionSKUs.TIER_2:
              _ =
                1 !== r.intervalCount
                  ? o.default.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : o.default.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(N.skuId));
          }
        return (0, a.jsx)("div", { className: P.text, children: _ });
      }
      function M(e) {
        let s,
          t,
          {
            planId: l,
            enableNoPaymentTrial: r,
            startingPremiumSubscriptionPlanId: N,
            onClose: E,
            followupSKUInfo: M,
            isDowngrade: L,
            hideClose: O,
            postSuccessGuild: C,
            paymentSourceType: m,
          } = e,
          { theme: g } = (0, n.useThemeContext)(),
          U = (0, u.useStateFromStores)([d.default], () =>
            null != M ? d.default.get(M.id) : null
          );
        _.useEffect(() => {
          if (null == M || null != U) return;
          let { applicationId: e, id: s } = M;
          (0, i.fetchSKU)(e, s).catch(A.NOOP_NULL);
        }, [M, U]);
        let p = e => {
          if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0)
            return A.DELAYED_PAYMENTS.has(
              null != m ? m : A.PaymentSourceTypes.UNKNOWN
            )
              ? o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1)
            return A.DELAYED_PAYMENTS.has(
              null != m ? m : A.PaymentSourceTypes.UNKNOWN
            )
              ? o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return A.DELAYED_PAYMENTS.has(
            null != m ? m : A.PaymentSourceTypes.UNKNOWN
          )
            ? o.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : r
              ? o.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : o.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != U)
          s = (0, a.jsx)("div", {
            className: P.text,
            children:
              o.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: U.name,
              }),
          });
        else if (null != N)
          s = (0, a.jsx)(c, {
            planId: l,
            startingPremiumSubscriptionPlanId: N,
          });
        else if (null != C) {
          let e = T.default.get(l);
          I(null != e, "Missing plan"),
            (s = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", { className: P.text, children: p(e) }),
                (0, a.jsx)("div", {
                  className: P.text,
                  children:
                    o.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: C.name }
                    ),
                }),
              ],
            }));
        } else {
          let e = T.default.get(l);
          I(null != e, "Missing plan"),
            (s = (0, a.jsx)("div", { className: P.text, children: p(e) }));
        }
        let F = S.default.getPremiumType(l);
        return (
          I(
            null != F,
            "premium type should not be null in purchase confirmation"
          ),
          (t =
            null != U
              ? o.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format(
                  { skuName: U.name }
                )
              : L
                ? o.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != C
                  ? o.default.Messages
                      .BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : o.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, a.jsxs)("div", {
            className: P.confirmation,
            children: [
              (0, a.jsx)(R.default, {
                className: P.banner,
                theme: g,
                premiumType: F,
                type: A.DELAYED_PAYMENTS.has(
                  null != m ? m : A.PaymentSourceTypes.UNKNOWN
                )
                  ? R.default.Types.PREMIUM_PAYMENT_STARTED
                  : null != N
                    ? R.default.Types.PREMIUM_UPDATED
                    : R.default.Types.PREMIUM_ACTIVATED,
              }),
              s,
              O ? null : (0, a.jsx)(n.Button, { onClick: E, children: t }),
            ],
          })
        );
      }
      function L(e) {
        let { planId: s, onClose: t } = e,
          {
            giftRecipient: _,
            selectedGiftStyle: l,
            hasSentMessage: n,
            giftMessageError: i,
            isSendingMessage: d,
          } = (0, r.useGiftContext)(),
          S = (0, u.useStateFromStores)([T.default], () => T.default.get(s));
        I(null != S, "Missing plan");
        let R = (0, u.useStateFromStores)([E.default], () =>
          E.default.getGiftCode(S.skuId)
        );
        return (0, a.jsx)(N.default, {
          giftCode: R,
          subscriptionPlan: S,
          onClose: t,
          selectedGiftStyle: l,
          hasSentMessage: n,
          giftRecipient: _,
          giftMessageError: i,
          isSendingMessage: d,
        });
      }
    },
  },
]);
//# sourceMappingURL=40092.9d05889151a76244d67f.js.map
