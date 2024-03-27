(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44573"],
  {
    185782: function (e, t, i) {
      "use strict";
      e.exports = i.p + "140ec8f5d02da1e5195c.svg";
    },
    112679: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          updateStripePaymentRequest: function () {
            return s;
          },
          updateCardInfo: function () {
            return l;
          },
          clearCardInfo: function () {
            return r;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return o;
          },
        });
      var n = i("913144");
      function s(e) {
        n.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function l(e, t) {
        n.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function r() {
        n.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function a(e, t) {
        n.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        n.default.wait(() =>
          n.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          clearPurchaseTokenAuthState: function () {
            return s;
          },
        });
      var n = i("913144");
      function s() {
        n.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    505088: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("506070");
      i.es(n, t);
    },
    666031: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("392861");
      i.es(n, t);
    },
    424823: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("632874");
      i.es(n, t);
    },
    125094: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("782542");
      i.es(n, t);
    },
    287083: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("618807");
      i.es(n, t);
    },
    390300: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("882039");
      i.es(n, t);
    },
    252744: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return s;
          },
        }),
        i("222007");
      var n = i("884691");
      function s(e) {
        let [t, i] = (0, n.useState)(!1),
          s = (0, n.useRef)(e.current);
        return (
          (0, n.useEffect)(() => {
            s.current = e.current;
          }, [e]),
          (0, n.useEffect)(() => {
            let e = s.current;
            if (null == e) return;
            let t = () => i(!0),
              n = () => i(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", n),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", n);
              }
            );
          }, [s]),
          t
        );
      }
    },
    649844: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return p;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("748820"),
        l = i("77078"),
        r = i("112679"),
        a = i("55689"),
        o = i("676379"),
        u = i("697218"),
        c = i("599110"),
        d = i("659500"),
        f = i("719923"),
        h = i("49111"),
        v = i("646718");
      function p(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: p,
            onClose: _,
            onComplete: C,
            onSubscriptionConfirmation: E,
            analyticsLocations: m,
            analyticsObject: I,
            analyticsLocation: g,
            analyticsSourceLocation: S,
            isGift: T = !1,
            giftMessage: M,
            subscriptionTier: A,
            trialId: L,
            postSuccessGuild: N,
            openInvoiceId: x,
            applicationId: b,
            referralTrialOfferId: y,
            giftRecipient: R,
            returnRef: w,
            subscription: O,
            skipConfirm: V,
          } = null != e ? e : {},
          P = !1,
          j = (0, s.v4)(),
          U = u.default.getCurrentUser(),
          B = (0, f.isPremiumExactly)(U, v.PremiumTypes.TIER_2);
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await i.el("646139").then(i.bind(i, "646139"));
            return i => {
              let { onClose: s, ...l } = i;
              return (0, n.jsx)(e, {
                ...l,
                loadId: j,
                subscriptionTier: A,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(A),
                isGift: T,
                giftMessage: M,
                giftRecipient: R,
                initialPlanId: t,
                followupSKUInfo: p,
                onClose: (e, t) => {
                  s(),
                    null == _ || _(e),
                    e &&
                      (null == E || E(),
                      !T &&
                        null != t &&
                        t === v.PremiumSubscriptionSKUs.TIER_2 &&
                        !B &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (P = !0),
                    null == C || C(),
                    !T && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: E,
                analyticsLocations: m,
                analyticsObject: I,
                analyticsLocation: g,
                analyticsSourceLocation: S,
                trialId: L,
                postSuccessGuild: N,
                planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: x,
                applicationId: b,
                referralTrialOfferId: y,
                returnRef: w,
                subscription: O,
                skipConfirm: !!V,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !P &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: j,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != g ? g : I,
                  source: S,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: T,
                  eligible_for_trial: null != L,
                  application_id: b,
                  location_stack: m,
                }),
                (0, r.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == _ || _(P),
                P && (null == E || E());
            },
          }
        );
      }
    },
    676379: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          setCanPlayWowMoment: function () {
            return s;
          },
        });
      var n = i("913144");
      let s = e => {
        n.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    374278: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return E;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("77078"),
        l = i("95039"),
        r = i("305961"),
        a = i("957255"),
        o = i("145131"),
        u = i("181114"),
        c = i("599110"),
        d = i("488464"),
        f = i("998716"),
        h = i("923510"),
        v = i("49111"),
        p = i("646718"),
        _ = i("782340"),
        C = i("821715");
      function E(e) {
        var t;
        let i,
          { channel: E, transitionState: m, onClose: I } = e,
          g = r.default.getGuild(E.guild_id),
          S =
            null !== (t = null == g ? void 0 : g.maxStageVideoChannelUsers) &&
            void 0 !== t
              ? t
              : 0,
          T = !!(null == g ? void 0 : g.isCommunity()),
          M = _.default.Messages.STAGE_FULL_TITLE,
          A = T
            ? S < v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED
            : (null == g ? void 0 : g.premiumTier) !==
                v.BoostedGuildTiers.TIER_3 &&
              S <= v.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
          L = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, E);
        i =
          T &&
          (null == g ? void 0 : g.premiumTier) === v.BoostedGuildTiers.TIER_3
            ? S <= v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED
              ? _.default.Messages.STAGE_FULL_BOOST_MORE_BODY
              : _.default.Messages.STAGE_FULL_MAX_BODY
            : A
              ? _.default.Messages.STAGE_FULL_BODY
              : _.default.Messages.STAGE_FULL_MAX_BODY;
        let N = () => {
            I(),
              c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                guild_id: E.guild_id,
                type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                is_moderator: L,
                action: p.BoostingUpsellAction.DISMISS,
              });
          },
          x = d.default.getMutableParticipants(
            E.id,
            f.StageChannelParticipantNamedIndex.SPEAKER
          ),
          b = x.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
          y = b.length,
          R = d.default.getParticipantCount(
            E.id,
            f.StageChannelParticipantNamedIndex.AUDIENCE
          );
        return (
          c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
            guild_id: E.guild_id,
            type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
            is_moderator: L,
            listener_count: y + R,
          }),
          (0, n.jsxs)(s.ModalRoot, {
            size: s.ModalSize.SMALL,
            transitionState: m,
            "aria-label": M,
            children: [
              (0, n.jsxs)(s.ModalHeader, {
                justify: o.default.Justify.END,
                separator: !1,
                className: C.header,
                children: [
                  (0, n.jsx)("div", { className: C.fullArt }),
                  (0, n.jsx)(s.ModalCloseButton, { onClick: I }),
                ],
              }),
              (0, n.jsxs)(s.ModalContent, {
                className: C.content,
                children: [
                  (0, n.jsx)(s.Heading, {
                    variant: "heading-xl/bold",
                    children: M,
                  }),
                  (0, n.jsx)(s.Text, {
                    variant: "text-md/medium",
                    children: i,
                  }),
                ],
              }),
              (0, n.jsx)(s.ModalFooter, {
                className: C.footer,
                children: A
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(s.Button, {
                          look: s.ButtonLooks.LINK,
                          className: C.noThanksButton,
                          color: s.ButtonColors.CUSTOM,
                          size: s.ButtonSizes.SMALL,
                          onClick: N,
                          children: _.default.Messages.NO_THANKS,
                        }),
                        (0, n.jsx)(u.default, {
                          onClick: () => {
                            I(),
                              (0, l.openGuildBoostingMarketingModal)({
                                guildId: E.guild_id,
                                location: {
                                  section:
                                    v.AnalyticsSections.STAGE_VIDEO_LIMIT,
                                },
                              }),
                              c.default.track(
                                v.AnalyticEvents.BOOSTING_UPSELL_CLICKED,
                                {
                                  guild_id: E.guild_id,
                                  type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                  is_moderator: L,
                                  action: p.BoostingUpsellAction.BOOST,
                                }
                              );
                          },
                          size: s.ButtonSizes.SMALL,
                          className: C.boostButton,
                          children:
                            _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION,
                        }),
                      ],
                    })
                  : (0, n.jsx)(s.Button, {
                      onClick: N,
                      size: s.ButtonSizes.SMALL,
                      color: s.ButtonColors.CUSTOM,
                      className: C.boostButton,
                      children: _.default.Messages.GOT_IT,
                    }),
              }),
            ],
          })
        );
      }
    },
    931138: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        });
      var n = i("37983"),
        s = i("884691"),
        l = i("414456"),
        r = i.n(l),
        a = i("77078"),
        o = i("760607"),
        u = i("684133");
      function c(e) {
        let {
            children: t,
            size: i = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = s.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, n.jsxs)("div", {
          className: r(u.flowerStarContainer, l),
          style: { width: i, height: i },
          children: [
            (0, n.jsx)(o.default, { ...d, className: r(c, u.flowerStar) }),
            (0, n.jsx)("div", {
              className: r(u.childContainer, {
                [u.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    181114: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ShineSizes: function () {
            return s;
          },
          Shine: function () {
            return _;
          },
          default: function () {
            return E;
          },
        });
      var n,
        s,
        l = i("37983"),
        r = i("884691"),
        a = i("414456"),
        o = i.n(a),
        u = i("458960"),
        c = i("77078"),
        d = i("252744"),
        f = i("145131"),
        h = i("61435");
      ((n = s || (s = {})).DEFAULT = "default"), (n.SMALL = "small");
      let v = { default: h.shineDefault, small: h.shineSmall },
        p = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class _ extends r.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: i, ...n } = this.props;
          return (0, l.jsx)(u.default.div, {
            ...n,
            className: o(h.shineContainer, e, { [h.shinePaused]: i }),
            children: (0, l.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: v[t],
              children: (0, l.jsx)("div", { className: p[t] }),
            }),
          });
        }
      }
      _.defaultProps = { shineSize: "default" };
      let C = e => {
        let {
            children: t,
            className: i,
            disabled: n,
            submitting: s,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: v,
            onlyShineOnHover: p,
            ...C
          } = e,
          E = r.createRef(),
          m = (0, d.default)(E),
          I = !n && !s && !0 !== a && (!p || m);
        return (0, l.jsxs)(c.Button, {
          buttonRef: E,
          ...C,
          className: o(h.shinyButton, i),
          disabled: n,
          submitting: s,
          children: [
            t,
            I
              ? (0, l.jsx)(_, {
                  shinePaused: f,
                  className: o(
                    h.buttonShine,
                    p ? h.onlyShineOnHover : void 0,
                    v
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      C.ShineSizes = s;
      var E = C;
    },
    381546: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("469563"),
        l = i("505088"),
        r = i("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: s = "currentColor",
              foreground: l,
              backgroundColor: a,
              ...o
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(o),
              width: t,
              height: i,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, n.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, n.jsx)("path", {
                  fill: s,
                  className: l,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          l.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("75196"),
        l = function (e) {
          let {
            width: t = 16,
            height: i = 16,
            color: l = "currentColor",
            foreground: r,
            ...a
          } = e;
          return (0, n.jsx)("svg", {
            ...(0, s.default)(a),
            width: t,
            height: i,
            viewBox: "0 0 16 15.2",
            children: (0, n.jsx)("path", {
              className: r,
              fill: l,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    151185: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("469563"),
        l = i("424823"),
        r = i("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: s = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                fill: s,
                className: l,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          l.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("469563"),
        l = i("390300"),
        r = i("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: s = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                className: l,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          l.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return a;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("469563"),
        l = i("287083"),
        r = i("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: i = 32,
              color: s = "currentColor",
              ...l
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, r.default)(l),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: s,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    506070: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          CircleXIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          secondaryColor: r = "transparent",
          secondaryColorClass: a = "",
          color: o = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof r ? r : r.css,
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    392861: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          GifIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    632874: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PlusSmallIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ScreenArrowIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
            }),
          ],
        });
      };
    },
    618807: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          StageIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    882039: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VoiceNormalIcon: function () {
            return r;
          },
        });
      var n = i("37983");
      i("884691");
      var s = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    157590: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilityObserver: function () {
            return r;
          },
        }),
        i("222007");
      var n = i("817736"),
        s = i("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      class r {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let i = (0, n.findDOMNode)(e);
          (0, s.isElement)(i, HTMLElement) &&
            (this._nodes.set(i, e), this._components.set(e, i), t.observe(i));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let i = this._components.get(e);
          null != i &&
            (this._nodes.delete(i),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(i));
        }
        constructor(e = l) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: i } = this._options;
                  t =
                    null == i
                      ? e.intersectionRatio > 0
                      : Array.isArray(i)
                        ? i.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > i;
                }
                let i = this._nodes.get(e.target);
                if (null != i) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(i) &&
                      (this._visibleComponents.add(i), (e = !0))
                    : this._visibleComponents.has(i) &&
                      (this._visibleComponents.delete(i), (e = !0)),
                    e && i.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      }
    },
    235855: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilitySensor: function () {
            return u;
          },
        }),
        i("222007"),
        i("70102");
      var n = i("884691"),
        s = i("748820"),
        l = i("157590");
      let r = (0, s.v4)(),
        a = new Map(),
        o = new Map();
      class u extends n.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            i = t.isVisible(this);
          this.props.active && i !== this.isVisible && this.props.onChange(i),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = i);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = o.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return n.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: i, threshold: n } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, s.v4)())
            : (this.elementId = r);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(
              u,
              new l.VisibilityObserver({ root: t, rootMargin: i, threshold: n })
            );
        }
      }
      u.defaultProps = {
        active: !0,
        children: n.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilityObserver: function () {
            return n.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return s.VisibilitySensor;
          },
        }),
        i("6268");
      var n = i("157590"),
        s = i("235855");
    },
  },
]);
//# sourceMappingURL=96d312b4e17d17e73eb7.js.map
