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
            return h;
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
        P = t("843823"),
        o = t("697218"),
        M = t("920700"),
        c = t("953109"),
        O = t("306160"),
        L = t("659632"),
        C = t("719923"),
        m = t("158998"),
        g = t("642906"),
        U = t("49111"),
        p = t("646718"),
        F = t("782340"),
        G = t("164852");
      function h(e) {
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
          { productLine: P } = (0, g.usePaymentContext)(),
          [o, h] = _.useState(M.default.Modes.DEFAULT),
          H = (0, i.useStateFromStores)([A.default], () => A.default.enabled),
          x = E || (null != n && null != T),
          b = () => (null != u ? u.skuId : null != l ? l.id : null),
          B = () => {
            let e;
            let s = null != n && p.SeasonalGiftStyles2023.includes(n);
            return null != S
              ? F.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == u
                ? null
                : (e =
                    u.interval === p.SubscriptionIntervalTypes.MONTH
                      ? x
                        ? s
                          ? F.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : F.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : F.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : x
                        ? s
                          ? F.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : F.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : F.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, C.getTierDisplayName)(u.id),
                      intervalCount: u.intervalCount,
                    }
                  );
          },
          Y = (e, s) => {
            null != l &&
              (0, L.trackGiftCodeCopy)(
                new R.default({ code: s, maxUses: 1 }),
                l
              );
            try {
              (0, O.copy)(e), h(M.default.Modes.SUCCESS);
            } catch (e) {
              h(M.default.Modes.ERROR);
            }
            setTimeout(() => {
              h(M.default.Modes.DEFAULT);
            }, 1500);
          },
          y = () => {
            let e;
            if (null == s) return null;
            switch (o) {
              case M.default.Modes.SUCCESS:
                e = F.default.Messages.BILLING_GIFT_COPIED;
                break;
              case M.default.Modes.ERROR:
                e = F.default.Messages.FAILED;
                break;
              default:
                e = F.default.Messages.COPY;
            }
            return (0, a.jsxs)("div", {
              className: G.giftCodeSection,
              children: [
                (0, a.jsx)(r.FormTitle, {
                  children:
                    F.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != s &&
                  (0, a.jsx)(M.default, {
                    hideMessage: H
                      ? F.default.Messages.GIFT_INVENTORY_HIDDEN
                      : null,
                    value: (0, L.getGiftCodeURL)(s),
                    mode: o,
                    text: e,
                    onCopy: e => Y(e, s),
                    supportsCopy: O.SUPPORTS_COPY,
                    className: G.copyInput,
                    buttonColor: M.default.ButtonColors.LINK,
                    buttonLook: M.default.ButtonLooks.LINK,
                  }),
                (0, a.jsx)("div", {
                  className: G.subtext,
                  children:
                    F.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        if (f)
          return (0, a.jsxs)("div", {
            className: G.confirmation,
            children: [
              null != t
                ? (0, a.jsx)(c.default, {
                    game: t,
                    className: G.icon,
                    size: c.default.Sizes.LARGE,
                    skuId: b(),
                  })
                : null,
              (0, a.jsx)(r.Spinner, { type: r.SpinnerTypes.PULSING_ELLIPSIS }),
            ],
          });
        let v = P === U.SKUProductLines.COLLECTIBLES;
        return (0, a.jsxs)("div", {
          className: G.confirmation,
          children: [
            null != t
              ? (0, a.jsx)(c.default, {
                  game: t,
                  className: G.icon,
                  size: c.default.Sizes.LARGE,
                  skuId: b(),
                })
              : null,
            (0, a.jsx)(r.Heading, {
              variant: "heading-lg/semibold",
              className: I({
                [G.header]: null == n && !v,
                [G.headerCustomGifting]: null != n && !v,
              }),
              children:
                null != T || (E && null == S)
                  ? F.default.Messages
                      .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                  : null != S
                    ? F.default.Messages
                        .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                    : F.default.Messages
                        .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
            }),
            (E && null != T && null == S) || x
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.default, {
                      user: T,
                      className: G.giftRecipient,
                      size: r.AvatarSizes.SIZE_80,
                    }),
                    (0, a.jsx)(r.Heading, {
                      className: G.giftRecipientName,
                      variant: "heading-md/semibold",
                      children: m.default.getName(T),
                    }),
                    (0, a.jsxs)("div", {
                      className: G.giftRecipientTag,
                      children: [" ", m.default.getUserTag(T)],
                    }),
                    (0, a.jsx)("div", {
                      className: G.giftSentMessage,
                      children: B(),
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", { className: G.blurb, children: B() }),
                    null == S && (0, a.jsx)(D, { giftCode: s, onClose: N }),
                    (0, a.jsx)("div", { className: G.divider }),
                    y(),
                  ],
                }),
          ],
        });
      }
      let D = e => {
        let { giftCode: s, onClose: t } = e;
        _.useEffect(() => {
          E.default.fetchRelationships(), (0, T.fetchUserAffinities)();
        }, []);
        let [l, I] = _.useState(),
          [u, R] = _.useState(!1),
          [A, M] = _.useState(!1),
          { userAffinities: c, isLoading: O } = (0, i.useStateFromStoresObject)(
            [P.default],
            () => ({
              userAffinities: P.default.getUserAffinitiesUserIds(),
              isLoading: P.default.getFetching(),
            })
          ),
          L = Array.from(c.values()),
          C = (0, i.useStateFromStores)([f.default], () =>
            f.default.getFriendIDs()
          ),
          g = n.difference(C, L),
          U = [...L, ...g],
          p = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.filter(e => U.includes(e.id) && !e.bot),
            [U]
          ),
          h = null == p || 0 === p.length;
        if (h) return null;
        let D = n.sortBy(p, e => U.indexOf(e.id));
        return (0, a.jsxs)("div", {
          className: G.giftRecipientSection,
          children: [
            (0, a.jsx)(r.FormTitle, {
              children:
                F.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, a.jsxs)("div", {
              className: G.giftRecipient,
              children: [
                (0, a.jsx)(r.SearchableSelect, {
                  placeholder:
                    F.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: G.giftRecipientInputWrapper,
                  className: u ? G.giftRecipientInputError : void 0,
                  renderOptionPrefix: e =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, a.jsx)(d.default, {
                          user: e.value,
                          size: r.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    O
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
                  className: G.sendToRecipientButton,
                  onClick: () => {
                    M(!0),
                      (0, S.sendGiftMessage)(l, s)
                        .then(() => {
                          t(), (0, N.popAllLayers)();
                        })
                        .catch(() => {
                          R(!0), M(!1);
                        });
                  },
                  children:
                    F.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: u ? G.subtextError : G.subtext,
              children: u
                ? F.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : F.default.Messages
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
            return c;
          },
          PremiumSubscriptionGiftPurchaseConfirmation: function () {
            return O;
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
        P = t("782340"),
        o = t("766593");
      function M(e) {
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
              (_ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case f.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
              (_ =
                P.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
              (_ =
                P.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
              (_ =
                P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  {
                    numFreeGuildSubscriptions:
                      f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                  }
                )),
                A.DELAYED_PAYMENTS.has(
                  null != i ? i : A.PaymentSourceTypes.UNKNOWN
                ) &&
                  (_ =
                    P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      {
                        numFreeGuildSubscriptions:
                          f.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                      }
                    ));
              break;
            case f.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case f.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
              _ =
                P.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case f.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case f.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
              _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(l));
          }
        else if (
          r.skuId === f.PremiumSubscriptionSKUs.TIER_2 &&
          N.skuId === f.PremiumSubscriptionSKUs.TIER_1
        )
          _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (N.skuId) {
            case f.PremiumSubscriptionSKUs.TIER_0:
              _ = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case f.PremiumSubscriptionSKUs.TIER_1:
              _ =
                P.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case f.PremiumSubscriptionSKUs.TIER_2:
              _ =
                1 !== r.intervalCount
                  ? P.default.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : P.default.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(N.skuId));
          }
        return (0, a.jsx)("div", { className: o.text, children: _ });
      }
      function c(e) {
        let s,
          t,
          {
            planId: l,
            enableNoPaymentTrial: r,
            startingPremiumSubscriptionPlanId: N,
            onClose: E,
            followupSKUInfo: c,
            isDowngrade: O,
            hideClose: L,
            postSuccessGuild: C,
            paymentSourceType: m,
          } = e,
          { theme: g } = (0, n.useThemeContext)(),
          U = (0, u.useStateFromStores)([d.default], () =>
            null != c ? d.default.get(c.id) : null
          );
        _.useEffect(() => {
          if (null == c || null != U) return;
          let { applicationId: e, id: s } = c;
          (0, i.fetchSKU)(e, s).catch(A.NOOP_NULL);
        }, [c, U]);
        let p = e => {
          if (e.skuId === f.PremiumSubscriptionSKUs.TIER_0)
            return A.DELAYED_PAYMENTS.has(
              null != m ? m : A.PaymentSourceTypes.UNKNOWN
            )
              ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === f.PremiumSubscriptionSKUs.TIER_1)
            return A.DELAYED_PAYMENTS.has(
              null != m ? m : A.PaymentSourceTypes.UNKNOWN
            )
              ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return A.DELAYED_PAYMENTS.has(
            null != m ? m : A.PaymentSourceTypes.UNKNOWN
          )
            ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : r
              ? P.default.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != U)
          s = (0, a.jsx)("div", {
            className: o.text,
            children:
              P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: U.name,
              }),
          });
        else if (null != N)
          s = (0, a.jsx)(M, {
            planId: l,
            startingPremiumSubscriptionPlanId: N,
          });
        else if (null != C) {
          let e = T.default.get(l);
          I(null != e, "Missing plan"),
            (s = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", { className: o.text, children: p(e) }),
                (0, a.jsx)("div", {
                  className: o.text,
                  children:
                    P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: C.name }
                    ),
                }),
              ],
            }));
        } else {
          let e = T.default.get(l);
          I(null != e, "Missing plan"),
            (s = (0, a.jsx)("div", { className: o.text, children: p(e) }));
        }
        let F = S.default.getPremiumType(l);
        return (
          I(
            null != F,
            "premium type should not be null in purchase confirmation"
          ),
          (t =
            null != U
              ? P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format(
                  { skuName: U.name }
                )
              : O
                ? P.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != C
                  ? P.default.Messages
                      .BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : P.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, a.jsxs)("div", {
            className: o.confirmation,
            children: [
              (0, a.jsx)(R.default, {
                className: o.banner,
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
              L ? null : (0, a.jsx)(n.Button, { onClick: E, children: t }),
            ],
          })
        );
      }
      function O(e) {
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
//# sourceMappingURL=40092.e8e64aa6fecb15e11384.js.map
