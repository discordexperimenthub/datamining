(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98427"],
  {
    244333: function (e, t, l) {
      "use strict";
      e.exports = l.p + "dfece524b5ca38a16ead.png";
    },
    112679: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          updateStripePaymentRequest: function () {
            return n;
          },
          updateCardInfo: function () {
            return a;
          },
          clearCardInfo: function () {
            return i;
          },
          updateAddressInfo: function () {
            return u;
          },
          clearError: function () {
            return o;
          },
        });
      var s = l("913144");
      function n(e) {
        s.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function a(e, t) {
        s.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function i() {
        s.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function u(e, t) {
        s.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        s.default.wait(() =>
          s.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          clearPurchaseTokenAuthState: function () {
            return n;
          },
        });
      var s = l("913144");
      function n() {
        s.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    998460: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("873044");
      l.es(s, t);
    },
    649844: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("748820"),
        a = l("77078"),
        i = l("112679"),
        u = l("55689"),
        o = l("676379"),
        r = l("697218"),
        c = l("599110"),
        d = l("659500"),
        T = l("719923"),
        _ = l("49111"),
        E = l("646718");
      function f(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: f,
            onClose: p,
            onComplete: S,
            onSubscriptionConfirmation: I,
            analyticsLocations: m,
            analyticsObject: P,
            analyticsLocation: M,
            analyticsSourceLocation: C,
            isGift: R = !1,
            giftMessage: N,
            subscriptionTier: A,
            trialId: L,
            postSuccessGuild: U,
            openInvoiceId: O,
            applicationId: h,
            referralTrialOfferId: y,
            giftRecipient: b,
            returnRef: x,
            subscription: g,
          } = null != e ? e : {},
          v = !1,
          B = (0, n.v4)(),
          j = r.default.getCurrentUser(),
          D = (0, T.isPremiumExactly)(j, E.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await l.el("646139").then(l.bind(l, "646139"));
            return l => {
              let { onClose: n, ...a } = l;
              return (0, s.jsx)(e, {
                ...a,
                loadId: B,
                subscriptionTier: A,
                skuId: (0, T.castPremiumSubscriptionAsSkuId)(A),
                isGift: R,
                giftMessage: N,
                giftRecipient: b,
                initialPlanId: t,
                followupSKUInfo: f,
                onClose: (e, t) => {
                  n(),
                    null == p || p(e),
                    e &&
                      (null == I || I(),
                      !R &&
                        null != t &&
                        t === E.PremiumSubscriptionSKUs.TIER_2 &&
                        !D &&
                        d.ComponentDispatch.dispatch(
                          _.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (v = !0),
                    null == S || S(),
                    !R && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: I,
                analyticsLocations: m,
                analyticsObject: P,
                analyticsLocation: M,
                analyticsSourceLocation: C,
                trialId: L,
                postSuccessGuild: U,
                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: O,
                applicationId: h,
                referralTrialOfferId: y,
                returnRef: x,
                subscription: g,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !v &&
                c.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: B,
                  payment_type:
                    _.PurchaseTypeToAnalyticsPaymentType[
                      _.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != M ? M : P,
                  source: C,
                  subscription_type: _.SubscriptionTypes.PREMIUM,
                  is_gift: R,
                  eligible_for_trial: null != L,
                  application_id: h,
                  location_stack: m,
                }),
                (0, i.clearError)(),
                (0, u.clearPurchaseTokenAuthState)(),
                null == p || p(v),
                v && (null == I || I());
            },
          }
        );
      }
    },
    676379: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          setCanPlayWowMoment: function () {
            return n;
          },
        });
      var s = l("913144");
      let n = e => {
        s.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    635956: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return A;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("414456"),
        a = l.n(n),
        i = l("446674"),
        u = l("77078"),
        o = l("79112"),
        r = l("685665"),
        c = l("788506"),
        d = l("649844"),
        T = l("393414"),
        _ = l("797647"),
        E = l("697218"),
        f = l("521012"),
        p = l("471671"),
        S = l("181114"),
        I = l("978679"),
        m = l("216422"),
        P = l("719923"),
        M = l("646718"),
        C = l("49111"),
        R = l("782340"),
        N = l("917746"),
        A = function (e) {
          let {
              isGift: t,
              subscriptionTier: n,
              onClick: A,
              size: L,
              className: U,
              trialId: O,
              isTrialCTA: h,
              buttonText: y,
              buttonTextClassName: b,
              iconClassName: x,
              postSuccessGuild: g,
              onSubscribeModalClose: v,
              premiumModalAnalyticsLocation: B,
              showIcon: j = !0,
              disableShine: D,
              applicationId: G,
              giftMessage: H,
              overrideDisabledButtonText: k,
              shinyButtonClassName: F,
              ...w
            } = e,
            V = (0, i.useStateFromStores)([E.default], () =>
              E.default.getCurrentUser()
            ),
            Y = (0, i.useStateFromStores)([p.default], () =>
              p.default.isFocused()
            ),
            K = (0, i.useStateFromStores)([f.default], () =>
              f.default.getPremiumTypeSubscription()
            ),
            { analyticsLocations: W } = (0, r.default)(),
            z = e => {
              if ((e.preventDefault(), null == V)) {
                (0, T.transitionTo)(C.Routes.LOGIN);
                return;
              }
              if (
                (null == A || A(e),
                (null == K ? void 0 : K.status) ===
                  C.SubscriptionStatusTypes.ACCOUNT_HOLD)
              ) {
                (0, c.trackPremiumSettingsPaneOpened)(),
                  o.default.open(C.UserSettingsSections.PREMIUM),
                  null == v || v(!1);
                return;
              }
              !(function (e) {
                let {
                  isClaimed: t,
                  isVerified: n,
                  isGift: a,
                  subscriptionTier: i,
                  trialId: o,
                  postSuccessGuild: r,
                  onSubscribeModalClose: c,
                  analyticsLocations: T,
                  premiumModalAnalyticsLocation: _,
                  applicationId: E,
                  giftMessage: f,
                } = e;
                if (!t) {
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await l
                      .el("984599")
                      .then(l.bind(l, "984599"));
                    return t => {
                      let { onClose: l, ...n } = t;
                      return (0, s.jsx)(e, { ...n, onClose: l });
                    };
                  });
                  return;
                }
                if (!n) {
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await l
                      .el("899917")
                      .then(l.bind(l, "899917"));
                    return t => {
                      let { onClose: l, ...n } = t;
                      return (0, s.jsx)(e, { ...n, onClose: l });
                    };
                  });
                  return;
                }
                let p = C.AnalyticsObjectTypes.BUY;
                null != o
                  ? (p = C.AnalyticsObjectTypes.TRIAL)
                  : a && (p = C.AnalyticsObjectTypes.GIFT),
                  (0, d.default)({
                    isGift: a,
                    initialPlanId: null,
                    subscriptionTier: i,
                    analyticsLocations: T,
                    analyticsObject: {
                      object: C.AnalyticsObjects.BUTTON_CTA,
                      objectType: p,
                      ..._,
                    },
                    trialId: o,
                    postSuccessGuild: r,
                    onClose: c,
                    applicationId: E,
                    giftMessage: f,
                  });
              })({
                isClaimed: V.isClaimed(),
                isVerified: V.verified,
                isGift: t,
                subscriptionTier: n,
                trialId: O,
                postSuccessGuild: g,
                onSubscribeModalClose: v,
                analyticsLocations: W,
                premiumModalAnalyticsLocation: B,
                applicationId: G,
                giftMessage: H,
              });
            };
          if (h)
            return (0, s.jsxs)(u.Button, {
              size: L,
              className: U,
              innerClassName: N.premiumSubscribeButton,
              look: u.Button.Looks.INVERTED,
              onClick: z,
              ...w,
              children: [
                j && (0, s.jsx)(m.default, { className: N.premiumIcon }),
                (0, s.jsx)("span", {
                  className: a(N.buttonText, b),
                  children:
                    null != y
                      ? y
                      : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT,
                }),
              ],
            });
          if (t)
            return (0, s.jsxs)(u.Button, {
              size: L,
              className: U,
              innerClassName: N.giftButton,
              color: u.Button.Colors.PRIMARY,
              onClick: z,
              ...w,
              children: [
                (0, s.jsx)(I.default, { className: N.giftIcon }),
                (0, s.jsx)("span", {
                  className: a(N.buttonText, b),
                  children:
                    null != y ? y : R.default.Messages.PREMIUM_GIFTING_BUTTON,
                }),
              ],
            });
          let Z = R.default.Messages.APPLICATION_STORE_GET_PREMIUM,
            q = null != K ? (0, P.getPremiumPlanItem)(K) : null,
            Q =
              null != q
                ? P.default.getPremiumType(q.planId)
                : null == V
                  ? void 0
                  : V.premiumType,
            J =
              n === M.PremiumSubscriptionSKUs.TIER_2 &&
              null != Q &&
              [M.PremiumTypes.TIER_0, M.PremiumTypes.TIER_1].includes(Q);
          J && (Z = R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
          let X =
              null != K &&
              K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD &&
              !(0, _.isNoneSubscription)(K.planId) &&
              !J,
            $ = X
              ? null != k
                ? k
                : (function (e) {
                    let { ctaSubscriptionSkuId: t, currentPremiumType: l } = e,
                      s = null,
                      n = null;
                    if (
                      null != t &&
                      t !== M.PremiumSubscriptionSKUs.LEGACY &&
                      t !== M.PremiumSubscriptionSKUs.TIER_0 &&
                      t !== M.PremiumSubscriptionSKUs.TIER_1 &&
                      t !== M.PremiumSubscriptionSKUs.TIER_2
                    )
                      return {
                        disabledButtonText: s,
                        disabledButtonTooltipText: n,
                      };
                    let a =
                        null != t
                          ? M.PremiumSubscriptionSKUToPremiumType[
                              (0, P.castPremiumSubscriptionAsSkuId)(t)
                            ]
                          : null,
                      i = null != a ? M.PremiumTypeOrder[a] : null,
                      u = null != l ? M.PremiumTypeOrder[l] : null;
                    return (
                      null != u && null != i && i < u
                        ? ((s =
                            R.default.Messages.APPLICATION_STORE_GET_PREMIUM),
                          (n =
                            R.default.Messages
                              .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP))
                        : null != a && null != l && a === l
                          ? ((s =
                              R.default.Messages
                                .BILLING_SWITCH_PLAN_CURRENT_PLAN),
                            (n =
                              R.default.Messages
                                .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP))
                          : null == a &&
                            null != l &&
                            l === M.PremiumTypes.TIER_2 &&
                            (n =
                              R.default.Messages
                                .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP),
                      { disabledButtonText: s, disabledButtonTooltipText: n }
                    );
                  })({ ctaSubscriptionSkuId: n, currentPremiumType: Q })
              : null;
          function ee(e) {
            var t, l;
            return (0, s.jsxs)(S.default, {
              disabled: X,
              onClick: z,
              innerClassName: N.premiumSubscribeButton,
              color:
                n === M.PremiumSubscriptionSKUs.TIER_1
                  ? u.Button.Colors.PRIMARY
                  : u.Button.Colors.GREEN,
              size: L,
              className: F,
              wrapperClassName: U,
              pauseAnimation: !Y || D,
              ...w,
              ...e,
              children: [
                j && (0, s.jsx)(m.default, { className: a(N.premiumIcon, x) }),
                (0, s.jsx)("span", {
                  className: a(N.buttonText, b),
                  children:
                    null !==
                      (l =
                        null !==
                          (t = null == $ ? void 0 : $.disabledButtonText) &&
                        void 0 !== t
                          ? t
                          : y) && void 0 !== l
                      ? l
                      : Z,
                }),
              ],
            });
          }
          return (null == $ ? void 0 : $.disabledButtonTooltipText) != null
            ? (0, s.jsx)(u.Tooltip, {
                text: $.disabledButtonTooltipText,
                children: ee,
              })
            : ee();
        };
    },
    292890: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var s = l("37983"),
        n = l("884691"),
        a = l("446674"),
        i = l("77078"),
        u = l("812204"),
        o = l("685665"),
        r = l("635956"),
        c = l("697218"),
        d = l("599110"),
        T = l("719923"),
        _ = l("38766"),
        E = l("49111"),
        f = l("646718"),
        p = l("397336"),
        S = l("782340"),
        I = l("361753");
      function m(e) {
        let {
            analyticsLocations: t,
            transitionState: m,
            onClose: P,
            title: M,
            description: C,
          } = e,
          R = (0, a.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          { analyticsLocations: N } = (0, o.default)(
            t,
            u.default.PROFILE_THEME_UPSELL_MODAL
          );
        n.useEffect(() => {
          d.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
            type: f.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
            location_stack: t,
          });
        }, [t]);
        let A = (0, _.default)({
          scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
          analyticsLocations: N,
        });
        return (0, s.jsx)(o.AnalyticsLocationProvider, {
          value: N,
          children: (0, s.jsxs)(i.ModalRoot, {
            className: I.profileThemesUpsellModal,
            "aria-label":
              null != M
                ? M
                : S.default.Messages
                    .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
            transitionState: m,
            children: [
              (0, s.jsxs)(i.ModalHeader, {
                className: I.profileThemesUpsellModalHeader,
                separator: !1,
                children: [
                  (0, s.jsx)(i.Heading, {
                    variant: "heading-xl/extrabold",
                    className: I.profileThemesUpsellModalTitle,
                    children:
                      null != M
                        ? M
                        : S.default.Messages
                            .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                  }),
                  (0, s.jsx)(i.ModalCloseButton, {
                    className: I.profileThemesUpsellModalCloseButton,
                    onClick: P,
                  }),
                ],
              }),
              (0, s.jsxs)(i.ModalContent, {
                className: I.profileThemesUpsellModalContent,
                children: [
                  (0, s.jsx)(i.Text, {
                    className: I.profileThemesUpsellModalDescription,
                    variant: "text-md/normal",
                    children:
                      null != C
                        ? C
                        : S.default.Messages
                            .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION,
                  }),
                  (0, s.jsx)("img", {
                    className: I.profileThemesUpsellModalExampleImage,
                    src: l("244333"),
                    alt: S.default.Messages
                      .USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT,
                  }),
                ],
              }),
              (0, s.jsxs)(i.ModalFooter, {
                className: I.profileThemesUpsellModalFooter,
                children: [
                  (0, s.jsx)(r.default, {
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    size: i.Button.Sizes.SMALL,
                    buttonText: T.default.isPremium(R)
                      ? S.default.Messages
                          .USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE
                      : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                  }),
                  (0, s.jsx)(i.Button, {
                    onClick: () => {
                      P(), A();
                    },
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    size: i.Button.Sizes.SMALL,
                    children:
                      S.default.Messages
                        .USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    978679: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("469563"),
        a = l("998460"),
        i = l("75196"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: a,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              width: t,
              height: l,
              ...(0, i.default)(u),
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                fill: n,
                className: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z",
              }),
            });
          },
          a.GiftIcon,
          void 0,
          { size: 24 }
        );
    },
    873044: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          GiftIcon: function () {
            return i;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("669491"),
        a = l("82169");
      let i = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: i = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8bd21c21f6b70d2e35ba.js.map
