(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20827"],
  {
    60266: function (e, t, n) {
      e.exports = function (e, t, n, i) {
        for (var a = -1, l = null == e ? 0 : e.length; ++a < l; ) {
          var s = e[a];
          t(i, s, n(s), e);
        }
        return i;
      };
    },
    581628: function (e, t, n) {
      var i = n("978603");
      e.exports = function (e, t, n, a) {
        return (
          i(e, function (e, i, l) {
            t(a, e, n(e), l);
          }),
          a
        );
      };
    },
    278296: function (e, t, n) {
      var i = n("60266"),
        a = n("581628"),
        l = n("698273"),
        s = n("725502");
      e.exports = function (e, t) {
        return function (n, r) {
          var o = s(n) ? i : a,
            u = t ? t() : {};
          return o(n, e, l(r, 2), u);
        };
      };
    },
    816494: function (e, t, n) {
      var i = n("766665"),
        a = n("278296")(function (e, t, n) {
          i(e, n, t);
        });
      e.exports = a;
    },
    49155: function (e, t, n) {
      "use strict";
      e.exports = n.p + "495fd0002d30e7c7e4f5.png";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return a;
          },
          updateCardInfo: function () {
            return l;
          },
          clearCardInfo: function () {
            return s;
          },
          updateAddressInfo: function () {
            return r;
          },
          clearError: function () {
            return o;
          },
        });
      var i = n("913144");
      function a(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function l(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function s() {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function r(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        i.default.wait(() =>
          i.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return a;
          },
        });
      var i = n("913144");
      function a() {
        i.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        s = n("446674"),
        r = n("77078"),
        o = n("102985"),
        u = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        E = n("168540");
      function _(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let h = e => {
        let {
          primary: t,
          secondary: n,
          botType: a,
          botVerified: s,
          discriminatorClass: o,
          className: c,
          usernameClass: d,
          color: _,
          botClass: h,
          showStreamerModeTooltip: S,
        } = e;
        return (0, i.jsxs)("div", {
          className: l(E.info, c),
          children: [
            (0, i.jsx)(r.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: S,
              "aria-label": !!S && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: l(E.username, d),
                  style: null != _ ? { color: _ } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: l(E.infoSpacing, o),
                  children: n,
                })
              : void 0,
            null != a &&
              (0, i.jsx)(u.default, {
                type: a,
                className: l(E.infoSpacing, h),
                verified: s,
              }),
          ],
        });
      };
      var S = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: a,
            forceUsername: l,
            showAccountIdentifier: r,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...E
          } = e,
          S = (0, s.useStateFromStores)(
            [o.default],
            () => o.default.hidePersonalInformation
          ),
          m = S || t || n.isNonUserBot(),
          p = n.toString(),
          v = d.default.getName(n),
          A = l ? p : null != a ? a : v,
          C = n.isPomelo() || f;
        if (C || A !== p) {
          let e =
              A === p && C && l
                ? d.default.getUserTag(n, { forcePomelo: f })
                : A,
            t = r && e !== "@".concat(p) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(h, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: _(n),
            showStreamerModeTooltip: S && e !== v,
            ...E,
          });
        }
        return (0, i.jsx)(c.default, {
          name: A,
          botType: _(n),
          botVerified: n.isVerifiedBot(),
          discriminator: m || A !== p ? null : null != u ? u : n.discriminator,
          ...E,
        });
      };
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("76527");
      n.es(i, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("962821");
      n.es(i, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("632874");
      n.es(i, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("782542");
      n.es(i, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("618807");
      n.es(i, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("882039");
      n.es(i, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var i = n("884691");
      function a(e) {
        let [t, n] = (0, i.useState)(!1),
          a = (0, i.useRef)(e.current);
        return (
          (0, i.useEffect)(() => {
            a.current = e.current;
          }, [e]),
          (0, i.useEffect)(() => {
            let e = a.current;
            if (null == e) return;
            let t = () => n(!0),
              i = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", i),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", i);
              }
            );
          }, [a]),
          t
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("446674"),
        a = n("76393");
      function l() {
        return (0, i.useStateFromStores)(
          [a.default],
          () =>
            null != a.default.getRemoteSessionId() ||
            null != a.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("884691");
      let a = i.createContext(void 0);
      var l = a;
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return _;
          },
          canGuildUseRoleIcons: function () {
            return h;
          },
        }),
        n("781738");
      var i = n("867805"),
        a = n("407063"),
        l = n("315102"),
        s = n("773336"),
        r = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, s.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: E(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let s = l.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(s, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(r.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        _ = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        h = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(r.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return s;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return r;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var i = n("316693"),
        a = n("923510"),
        l = n("49111");
      let s = l.Permissions.VIEW_CHANNEL,
        r = i.combine(s, l.Permissions.CONNECT),
        o = i.combine(s, a.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    217145: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isIFrameModalUserEnabled: function () {
            return l;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-07_iframe_modal",
        label: "iFrame Modal",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable iFrameModal", config: { enabled: !0 } },
        ],
      });
      function l() {
        return a.getCurrentConfig(
          { location: "5c0a70_1" },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    429682: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isIFrameModalForGuildEnabled: function () {
            return s;
          },
        });
      var i = n("862205"),
        a = n("49111");
      let l = (0, i.createExperiment)({
        kind: "guild",
        id: "2023-08_iframe_modal_guild",
        label: "iFrame Modal guild experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable iFrame Modal Guild",
            config: { enabled: !0 },
          },
        ],
      });
      function s(e) {
        return l.getCurrentConfig(
          {
            guildId: null != e ? e : a.EMPTY_STRING_SNOWFLAKE_ID,
            location: "2d360b_1",
          },
          { autoTrackExposure: !0 }
        ).enabled;
      }
    },
    988878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("217145"),
        a = n("429682");
      function l(e) {
        return (
          (0, i.isIFrameModalUserEnabled)() ||
          (0, a.isIFrameModalForGuildEnabled)(e)
        );
      }
    },
    596368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("497880");
      function l(e, t) {
        let { message: n } = e;
        return (0, i.jsx)(a.default, { message: n, content: t });
      }
    },
    227439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("93332"),
        s = n("913491");
      let r = a.memo(l.default);
      function o(e) {
        let {
          message: t,
          channel: n,
          author: a,
          compact: l,
          animateAvatar: o,
          guildId: u,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = e;
        return !(0, s.default)(t) && (c || l)
          ? (0, i.jsx)(r, {
              message: t,
              channel: n,
              author: a,
              guildId: u,
              compact: l,
              animate: o,
              roleIcon: d,
              hideTimestamp: f,
            })
          : void 0;
      }
    },
    650484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
          PaymentPortalBody: function () {
            return h;
          },
          PaymentPortalFooter: function () {
            return S;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        r = n("627445"),
        o = n.n(r),
        u = n("817736"),
        c = n.n(u),
        d = n("77078"),
        f = n("642906"),
        E = n("304006");
      function _(e) {
        var t, n, l, r, u, c;
        let {
            header: _,
            isLargeModal: h,
            stepProps: S,
          } = (function (e) {
            let { header: t, isLargeModal: n, ...i } = e;
            return { header: t, isLargeModal: n, stepProps: i };
          })(e),
          {
            step: m,
            stepConfigs: p,
            setBodyNode: v,
            setFooterNode: A,
            setModalOverlayNode: C,
            setReadySlideId: T,
          } = (0, f.usePaymentContext)(),
          g = p.find(e => e.key === m);
        a.useEffect(() => {
          C(null);
        }, [m, C]),
          o(null != g, "Unknown step for current payment flow.");
        let I =
            null !==
              (u =
                null == g
                  ? void 0
                  : null === (t = g.options) || void 0 === t
                    ? void 0
                    : t.hideSlider) &&
            void 0 !== u &&
            u,
          N =
            null == g
              ? void 0
              : null === (n = g.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          x =
            void 0 !== h && h
              ? E.sliderBodyLarge
              : null == g
                ? void 0
                : null === (l = g.options) || void 0 === l
                  ? void 0
                  : l.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null ===
              (c =
                null == g
                  ? void 0
                  : null === (r = g.options) || void 0 === r
                    ? void 0
                    : r.renderHeader) ||
            void 0 === c ||
            c
              ? _
              : null,
            g.renderStep(S),
            null == m || I
              ? null
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(d.ModalContent, {
                      className: s(E.body, N),
                      children: (0, i.jsx)(d.Slides, {
                        activeSlide: m,
                        centered: !1,
                        onSlideReady: e => T(e),
                        children: p
                          .filter(e => null != e.key)
                          .map(e =>
                            (0, i.jsx)(
                              d.Slide,
                              {
                                id: e.key,
                                children: (0, i.jsx)("form", {
                                  className: s(E.sliderBody, x),
                                  ref: e => v(e),
                                  onSubmit: e => e.preventDefault(),
                                }),
                              },
                              e.key
                            )
                          ),
                      }),
                    }),
                    (0, i.jsx)("div", { ref: e => A(e) }),
                    (0, i.jsx)("div", { ref: e => C(e) }),
                  ],
                }),
          ],
        });
      }
      function h(e) {
        let { children: t } = e,
          { bodyNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n);
      }
      function S(e) {
        let { children: t } = e,
          { footerNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n);
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("748820"),
        l = n("77078"),
        s = n("112679"),
        r = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        E = n("49111"),
        _ = n("646718");
      function h(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: h,
            onClose: S,
            onComplete: m,
            onSubscriptionConfirmation: p,
            analyticsLocations: v,
            analyticsObject: A,
            analyticsLocation: C,
            analyticsSourceLocation: T,
            isGift: g = !1,
            giftMessage: I,
            subscriptionTier: N,
            trialId: x,
            postSuccessGuild: y,
            openInvoiceId: b,
            applicationId: L,
            referralTrialOfferId: R,
            giftRecipient: M,
            returnRef: F,
            subscription: P,
          } = null != e ? e : {},
          U = !1,
          H = (0, a.v4)(),
          D = u.default.getCurrentUser(),
          w = (0, f.isPremiumExactly)(D, _.PremiumTypes.TIER_2);
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: a, ...l } = n;
              return (0, i.jsx)(e, {
                ...l,
                loadId: H,
                subscriptionTier: N,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(N),
                isGift: g,
                giftMessage: I,
                giftRecipient: M,
                initialPlanId: t,
                followupSKUInfo: h,
                onClose: (e, t) => {
                  a(),
                    null == S || S(e),
                    e &&
                      (null == p || p(),
                      !g &&
                        null != t &&
                        t === _.PremiumSubscriptionSKUs.TIER_2 &&
                        !w &&
                        d.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (U = !0),
                    null == m || m(),
                    !g && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: p,
                analyticsLocations: v,
                analyticsObject: A,
                analyticsLocation: C,
                analyticsSourceLocation: T,
                trialId: x,
                postSuccessGuild: y,
                planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: b,
                applicationId: L,
                referralTrialOfferId: R,
                returnRef: F,
                subscription: P,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !U &&
                c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: H,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != C ? C : A,
                  source: T,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: g,
                  eligible_for_trial: null != x,
                  application_id: L,
                  location_stack: v,
                }),
                (0, s.clearError)(),
                (0, r.clearPurchaseTokenAuthState)(),
                null == S || S(U),
                U && (null == p || p());
            },
          }
        );
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return _;
          },
          getManageResourcePermissions: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("884691"),
        a = n("316693"),
        l = n("446674"),
        s = n("813006");
      n("923959");
      var r = n("957255"),
        o = n("697218");
      n("991170");
      var u = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, i) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
          if ("userId" in e) return i && null != t && e.userId === t.id;
          if ("user" in e) {
            var a;
            return (
              i &&
              null != t &&
              (null === (a = e.user) || void 0 === a ? void 0 : a.id) === t.id
            );
          }
          return !1;
        },
        E = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              a.combine(t, c.Permissions.CREATE_EVENTS),
              a.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        _ = e => {
          let [t, n] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            [a, u, _, h] = (0, l.useStateFromStoresArray)([r.default], () => [
              r.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              r.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              r.default.can(t, e),
              r.default.can(n, e),
            ]),
            S = (0, l.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            m = i.useCallback(e => f(e, S, u, a), [a, u, S]),
            p = i.useCallback(e => f(e, S, h, _), [h, _, S]);
          return null == e
            ? d
            : {
                canCreateExpressions: a,
                canCreateGuildEvent: _,
                canManageAllExpressions: u,
                canManageAllEvents: h,
                canManageGuildExpression: m,
                canManageGuildEvent: p,
              };
        },
        h = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [i, a] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            _ = t.can(i, e),
            h = t.can(a, e),
            S = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: _,
                canManageAllExpressions: u,
                canManageAllEvents: h,
                canManageGuildExpression: e => f(e, S, u, l),
                canManageGuildEvent: e => f(e, S, h, _),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return a;
          },
        });
      var i = n("913144");
      let a = e => {
        i.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("884691"),
        a = n("79112"),
        l = n("685665"),
        s = n("929423");
      n("424562");
      var r = n("49111"),
        o = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, l.default)(),
          E = (0, i.useCallback)(() => {
            null != t && (0, s.initGuildIdentitySettings)(t, null != c ? c : f),
              a.default.open(
                r.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: u,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, u, c, d, f]);
        return E;
      }
    },
    781324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getSafetyHubData: function () {
            return u;
          },
          getSafetyHubDataForClassification: function () {
            return c;
          },
          requestReview: function () {
            return f;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        l = n("651693"),
        s = n("271938"),
        r = n("736393"),
        o = n("49111");
      async function u() {
        a.default.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let e = s.default.getSuspendedUserToken(),
          t =
            null != e
              ? o.Endpoints.SAFETY_HUB_SUSPENDED
              : o.Endpoints.SAFETY_HUB,
          n =
            null != e
              ? i.default.post({ url: t, body: { token: e } })
              : i.default.get({ url: t });
        await n
          .then(e => {
            let { body: t } = e,
              {
                classifications: n,
                guild_classifications: i,
                account_standing: l,
                is_dsa_eligible: s,
              } = t,
              r = n.map(e => (d(e), e));
            a.default.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: r.concat(null != i ? i : []),
              accountStanding: l,
              isDsaEligible: s,
            });
          })
          .catch(e => {
            var t, n;
            a.default.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== n
                  ? n
                  : "Unknown error",
            });
          });
      }
      async function c(e) {
        a.default.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: e,
        });
        let t = s.default.getSuspendedUserToken(),
          n =
            null != t
              ? o.Endpoints.SAFETY_HUB_SUSPENDED
              : o.Endpoints.SAFETY_HUB,
          l =
            null != t
              ? i.default.post({ url: n, body: { token: t } })
              : i.default.get({ url: n });
        await l
          .then(t => {
            let { body: n } = t,
              {
                classifications: i,
                account_standing: l,
                is_dsa_eligible: s,
              } = n,
              r = i.find(t => t.id === e);
            null != r
              ? (d(r),
                a.default.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: r,
                  accountStanding: l,
                  isDsaEligible: s,
                }))
              : a.default.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: e,
                });
          })
          .catch(t => {
            var n, i;
            a.default.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (i =
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.message) && void 0 !== i
                  ? i
                  : "Unknown error",
              classificationId: e,
            });
          });
      }
      function d(e) {
        if (null != e.flagged_content && e.flagged_content.length > 0) {
          let t = e.flagged_content[0];
          (t.attachments = t.attachments.filter(e => {
            let { filename: t } = e;
            return (0, l.isImageFile)(t) || (0, l.isVideoFile)(t);
          })),
            (e.flagged_content = (0, r.isFlaggedContentEmpty)(t) ? [] : [t]);
        }
      }
      async function f(e, t, n) {
        let l = s.default.getSuspendedUserToken(),
          r =
            null != l
              ? o.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e)
              : o.Endpoints.SAFETY_HUB_REQUEST_REVIEW(e),
          u =
            null != l
              ? i.default.put({
                  url: r,
                  body: { signal: t, user_input: n, token: l },
                })
              : i.default.put({ url: r, body: { signal: t, user_input: n } });
        a.default.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await u
            .then(() => {
              a.default.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: e,
              });
            })
            .catch(e => {
              var t, n;
              throw (
                (a.default.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (n =
                        null == e
                          ? void 0
                          : null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== n
                      ? n
                      : "Unknown error",
                }),
                e)
              );
            });
      }
    },
    667963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsSafetyHubDisplayGuildViolationsEnabled: function () {
            return l;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2024-01_safety_hub_display_guild_violations",
        label: "Safety Hub Display Guild Violations",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Display guild violations in account standing",
            config: { enabled: !0 },
          },
        ],
      });
      function l(e) {
        return !!a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    997510: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsSafetyHubGuildViolationInAppAppealsEnabled: function () {
            return l;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_safety_hub_guild_violation_in_app_appeals",
        label: "Safety Hub Guild Violation In App Appeals",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Allow guild violations to be applied using the new appeals ingestion flow",
            config: { enabled: !0 },
          },
        ],
      });
      function l(e) {
        return !!a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    646356: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var i = n("816494"),
        a = n.n(i),
        l = n("446674"),
        s = n("913144"),
        r = n("908539"),
        o = n("170213");
      let u = {},
        c = {},
        d = { state: r.AccountStandingState.ALL_GOOD },
        f = !1,
        E = !1,
        _ = null,
        h = null,
        S = !1,
        m = !1,
        p = null,
        v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
        A = "";
      class C extends l.default.Store {
        isFetching() {
          return f;
        }
        getClassifications() {
          return Object.values(u);
        }
        getClassification(e) {
          return u[e];
        }
        getAccountStanding() {
          return d;
        }
        getFetchError() {
          return _;
        }
        isInitialized() {
          return E;
        }
        getClassificationRequestState(e) {
          return c[e];
        }
        getAppealClassificationId() {
          return h;
        }
        getIsDsaEligible() {
          return S;
        }
        getAppealSignal() {
          return v;
        }
        getFreeTextAppealReason() {
          return A;
        }
        getIsSubmitting() {
          return m;
        }
        getSubmitError() {
          return p;
        }
      }
      C.displayName = "SafetyHubStore";
      var T = new C(s.default, {
        SAFETY_HUB_FETCH_START: function (e) {
          f = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (e) {
          let { classifications: t, accountStanding: n, isDsaEligible: i } = e;
          (u = a(t, "id")), (d = n), (S = i), (f = !1), (E = !0), (_ = null);
        },
        SAFETY_HUB_FETCH_FAILURE: function (e) {
          let { error: t } = e;
          (f = !1), (E = !1), (_ = t);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
          (c[e.classificationId] = r.ClassificationRequestState.PENDING),
            (f = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
          let { classification: t, accountStanding: n, isDsaEligible: i } = e;
          (u[t.id] = t),
            (c[t.id] = r.ClassificationRequestState.SUCCESS),
            (d = n),
            (f = !1),
            (_ = null),
            (S = i),
            (E = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
          let { error: t, classificationId: n } = e;
          (f = !1),
            (_ = t),
            (c[n] = r.ClassificationRequestState.FAILED),
            (E = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (e) {
          let { classificationId: t } = e;
          h = t;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
          (h = null),
            (v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY),
            (A = "");
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
          let { signal: t } = e;
          v = t;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
          let { userInput: t } = e;
          A = t;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
          let {} = e;
          (m = !0), (p = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
          let { classificationId: t } = e;
          (m = !1),
            (p = null),
            (u[t].appeal_status = {
              status: r.AppealStatusType.REVIEW_PENDING,
            });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
          let { error: t } = e;
          (m = !1), (p = t);
        },
        LOGOUT: function () {
          (f = !1),
            (u = {}),
            (d = { state: r.AccountStandingState.ALL_GOOD }),
            (h = null),
            (v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY),
            (A = "");
        },
      });
    },
    132206: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyHubAccountStanding: function () {
            return l;
          },
        });
      var i = n("446674"),
        a = n("646356");
      function l() {
        return (0, i.useStateFromStores)([a.default], () =>
          a.default.getAccountStanding()
        );
      }
    },
    698609: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyHubClassification: function () {
            return d;
          },
          useActiveSafetyHubClassifications: function () {
            return f;
          },
          useExpiredSafetyHubClassifications: function () {
            return E;
          },
          useSafetyHubAppealSignal: function () {
            return _;
          },
        });
      var i = n("884691"),
        a = n("446674"),
        l = n("299039"),
        s = n("781324"),
        r = n("997510"),
        o = n("646356"),
        u = n("736393");
      function c() {
        let e = (0, a.useStateFromStoresArray)([o.default], () =>
          o.default.getClassifications()
        );
        return e.sort(
          (e, t) =>
            l.default.extractTimestamp(t.id) - l.default.extractTimestamp(e.id)
        );
      }
      function d(e) {
        let t = (0, a.useStateFromStores)([o.default], () =>
            o.default.getClassification(e)
          ),
          n = (0, a.useStateFromStores)([o.default], () =>
            o.default.getClassificationRequestState(e)
          ),
          l = (0, a.useStateFromStores)([o.default], () =>
            o.default.getIsDsaEligible()
          ),
          c = (0, r.useIsSafetyHubGuildViolationInAppAppealsEnabled)(
            "classification_detail"
          );
        return (
          i.useEffect(() => {
            void 0 === t && null == n && s.getSafetyHubDataForClassification(e);
          }, [e, t, n]),
          {
            classification: t,
            classificationRequestState: n,
            isDsaEligible: l,
            isAppealEligible:
              l &&
              null != t &&
              null == t.appeal_status &&
              (!(0, u.isGuildClassification)(t) || c),
          }
        );
      }
      function f() {
        let e = c(),
          t = new Date();
        return e.filter(e => new Date(e.max_expiration_time) > t);
      }
      function E() {
        let e = c(),
          t = new Date();
        return e.filter(e => new Date(e.max_expiration_time) <= t);
      }
      function _() {
        let e = (0, a.useStateFromStores)([o.default], () =>
          o.default.getAppealSignal()
        );
        return e;
      }
    },
    422671: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyHubInitialized: function () {
            return l;
          },
        });
      var i = n("446674"),
        a = n("646356");
      function l() {
        let e = (0, i.useStateFromStores)([a.default], () =>
          a.default.isInitialized()
        );
        return e;
      }
    },
    792105: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("446674"),
        a = n("646356");
      function l() {
        let e = (0, i.useStateFromStores)([a.default], () =>
          a.default.isFetching()
        );
        return e;
      }
    },
    57242: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("913144"),
        s = {
          open(e) {
            l.default.dispatch({
              type: "SAFETY_HUB_APPEAL_OPEN",
              classificationId: e,
            }),
              (0, a.openModalLazy)(async () => {
                let { default: t } = await n
                  .el("574811")
                  .then(n.bind(n, "574811"));
                return n => (0, i.jsx)(t, { classificationId: e, ...n });
              });
          },
          close() {
            l.default.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
          },
        };
    },
    573240: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("432710"),
        s = n("669491"),
        r = n("748802"),
        o = n("877585"),
        u = n("77078"),
        c = n("155084"),
        d = n("599110"),
        f = n("667963"),
        E = n("908539"),
        _ = n("132206"),
        h = n("698609"),
        S = n("422671"),
        m = n("57242"),
        p = n("380676"),
        v = n("170213"),
        A = n("49111"),
        C = n("782340"),
        T = n("765516");
      let g = e => {
          let { classificationTypeText: t, guildName: n } = e,
            a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)(
              "classification_detail"
            );
          return (0, i.jsx)("div", {
            className: T.classificationHeader,
            children: (0, i.jsx)(u.Heading, {
              variant: "heading-xl/normal",
              children:
                a && null != n
                  ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format(
                      {
                        guildName: n,
                        classification_type: t,
                        classificationHook: (e, t) =>
                          (0, i.jsx)("strong", { children: e }, t),
                      }
                    )
                  : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format(
                      {
                        classification_type: t,
                        classificationHook: (e, t) =>
                          (0, i.jsx)("strong", { children: e }, t),
                      }
                    ),
            }),
          });
        },
        I = e => {
          let { actions: t } = e,
            n = t.filter(e => e.descriptions.length > 0);
          return 0 === n.length
            ? null
            : (0, i.jsxs)("div", {
                className: T.classificationActionsTakenContainer,
                children: [
                  (0, i.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children:
                      C.default.Messages
                        .SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2,
                  }),
                  (0, i.jsx)("ul", {
                    className: T.classificationActionsTakenList,
                    children: t.map(e => (0, i.jsx)(N, { action: e }, e.id)),
                  }),
                ],
              });
        },
        N = e => {
          let { action: t } = e;
          return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
              (0, i.jsx)(
                "li",
                {
                  className: T.classificationActionsTakenRow,
                  children: (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-normal",
                    children: e,
                  }),
                },
                t
              )
            ),
          });
        },
        x = e => {
          let { classificationTypeText: t, policyExplainerLink: n } = e;
          return (0, i.jsxs)(u.Anchor, {
            href: n,
            className: T.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, i.jsx)("div", {
                className: T.classificationPolicyCardIcon,
                children: (0, i.jsx)(o.ShieldIcon, {
                  width: 24,
                  height: 24,
                  color: s.default.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, i.jsx)("div", {
                className: T.classificationPolicyDescriptionContainer,
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  children:
                    C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format(
                      { classificationDescription: t }
                    ),
                }),
              }),
              (0, i.jsx)("div", {
                className: T.classificationPolicyLinkIcon,
                children: (0, i.jsx)(r.ChevronSmallRightIcon, {
                  width: 24,
                  height: 24,
                  color: s.default.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        y = () =>
          (0, i.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS,
          }),
        b = e =>
          (0, i.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format(
                {
                  letUsKnowHook: (t, n) =>
                    (0, i.jsx)(
                      u.Anchor,
                      {
                        href: e.isAppealEligible ? void 0 : e.appealLink,
                        onClick: e.letUsKnowClick,
                        children: t,
                      },
                      n
                    ),
                }
              ),
          }),
        L = e =>
          (0, i.jsx)("div", {
            className: T.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, i.jsx)(y, {})
              : (0, i.jsx)(b, {
                  appealLink: v.SafetyHubLinks.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        R = e => {
          let {
            tosLink: t,
            communityGuidelinesLink: n,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
          } = e;
          return (0, i.jsxs)("div", {
            className: T.classificationActionExplanationContainer,
            children: [
              (0, i.jsx)(u.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children:
                  C.default.Messages
                    .SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER,
              }),
              (0, i.jsx)(u.Text, {
                className: T.guidelinesExplanation,
                variant: "text-sm/normal",
                children:
                  C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format(
                    { tosLink: t, communityGuidelinesLink: n }
                  ),
              }),
              (0, i.jsx)(x, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              s,
            ],
          });
        };
      var M = e => {
        var t, n;
        let { classificationId: s, source: r, onError: o } = e,
          {
            classification: u,
            classificationRequestState: f,
            isAppealEligible: C,
            isDsaEligible: N,
          } = (0, h.useSafetyHubClassification)(s),
          x = (0, _.useSafetyHubAccountStanding)(),
          y =
            null != u &&
            null != u.flagged_content &&
            u.flagged_content.length > 0,
          b = (0, S.useSafetyHubInitialized)();
        return (a.useEffect(() => {
          b &&
            d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
              action: v.SafetyHubAnalyticsActions.ViewViolationDetail,
              account_standing: x.state,
              classification_ids: [Number(s)],
              source: r,
              is_violative_content_shown: y,
              is_dsa_eligible: N,
            });
        }, [b]),
        null == u && f === E.ClassificationRequestState.FAILED)
          ? (o(), null)
          : null == u
            ? null
            : (0, i.jsxs)("div", {
                className: T.classificationContainer,
                children: [
                  (0, i.jsx)(g, {
                    classificationTypeText: u.description,
                    guildName:
                      null == u
                        ? void 0
                        : null === (t = u.guild_metadata) || void 0 === t
                          ? void 0
                          : t.name,
                  }),
                  (0, i.jsx)(p.ClassificationEvidence, {
                    flaggedContent:
                      null !== (n = u.flagged_content) && void 0 !== n ? n : [],
                    actions: u.actions,
                    guildMetadata: u.guild_metadata,
                  }),
                  (0, i.jsx)(I, { actions: u.actions }),
                  (0, i.jsx)(R, {
                    classificationTypeText: u.description,
                    tosLink: v.SafetyHubLinks.TOS_LINK,
                    communityGuidelinesLink:
                      v.SafetyHubLinks.COMMUNITY_GUIDELINES,
                    policyExplainerLink: u.explainer_link,
                    appealComponent: (0, i.jsx)(L, {
                      hasBeenAppealed: null != u.appeal_status,
                      onLetUsKnowClick: () => {
                        d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
                          action: v.SafetyHubAnalyticsActions.ClickLetUsKnow,
                          account_standing: x.state,
                          classification_ids: [Number(s)],
                          source: r,
                          is_violative_content_shown: y,
                          is_dsa_eligible: N,
                        }),
                          C &&
                            (c.default.increment({
                              name: l.MetricEvents.APPEAL_INGESTION_VIEW,
                            }),
                            m.default.open(s));
                      },
                      isAppealEligible: C,
                    }),
                  }),
                ],
              });
      };
    },
    825138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("79112"),
        s = n("792105"),
        r = n("573240"),
        o = n("170213"),
        u = n("49111"),
        c = n("782340"),
        d = n("910300"),
        f = n("49155"),
        E = e => {
          let {
              transitionState: t,
              onClose: n,
              classificationId: E,
              source: _,
            } = e,
            h = (0, s.default)(),
            S = () => {
              n(),
                l.default.open(
                  u.UserSettingsSections.PRIVACY_AND_SAFETY,
                  o.SafetyHubView.ACCOUNT_STANDING
                );
            };
          return (0, i.jsxs)(a.ModalRoot, {
            className: d.modalRoot,
            transitionState: t,
            children: [
              (0, i.jsxs)("div", {
                className: d.modalHeader,
                children: [
                  (0, i.jsx)("img", { className: d.image, src: f, alt: "" }),
                  (0, i.jsx)(a.ModalCloseButton, {
                    className: d.modalClose,
                    onClick: n,
                  }),
                ],
              }),
              (0, i.jsx)(a.ModalContent, {
                className: d.modalContent,
                children: h
                  ? (0, i.jsx)(a.Spinner, {})
                  : (0, i.jsx)(r.default, {
                      classificationId: E,
                      source: _,
                      onError: S,
                    }),
              }),
              (0, i.jsx)(a.ModalFooter, {
                children: (0, i.jsx)(a.Button, {
                  className: d.button,
                  type: "button",
                  color: a.Button.Colors.BRAND,
                  onClick: S,
                  children:
                    c.default.Messages
                      .SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2,
                }),
              }),
            ],
          });
        };
    },
    380676: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ClassificationEvidence: function () {
            return c;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("667963"),
        s = n("211546"),
        r = n("19861"),
        o = n("782340"),
        u = n("386672");
      let c = e => {
        let { flaggedContent: t, actions: n, guildMetadata: c } = e,
          d = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)(
            "classification_evidence"
          );
        return 0 !== t.length || (d && null != c)
          ? (0, i.jsxs)("div", {
              className: u.classificationEvidenceContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children:
                    o.default.Messages
                      .SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER,
                }),
                d && null != c
                  ? (0, i.jsx)(s.default, { guildMetadata: c, actions: n })
                  : (0, i.jsx)(r.default, { flaggedContent: t }),
              ],
            })
          : null;
      };
    },
    211546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("813006"),
        s = n("476263"),
        r = n("888400"),
        o = n("299039"),
        u = n("908539"),
        c = n("782340"),
        d = n("177195");
      function f(e) {
        let { guildMetadata: t, actions: n } = e,
          f = new l.default({ name: t.name }),
          E = n.filter(e => e.action_type === u.ActionType.GUILD_DELETE),
          _ =
            E.length > 0
              ? (0, r.dateFormat)(
                  new Date(o.default.extractTimestamp(E[0].id)),
                  "LL"
                )
              : null;
        return (0, i.jsxs)("div", {
          className: d.guildContainer,
          children: [
            (0, i.jsx)(s.default, { guild: f, size: s.default.Sizes.MEDIUM }),
            (0, i.jsxs)("div", {
              className: d.titleContainer,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-sm/semibold",
                  className: d.guildName,
                  children: t.name,
                }),
                null != _ &&
                  (0, i.jsx)(a.Text, {
                    variant: "text-xxs/medium",
                    className: d.removalDate,
                    children:
                      c.default.Messages.SAFETY_HUB_GUILD_REMOVED_DATE.format({
                        removalDate: _,
                      }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    19861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007"),
        n("506083");
      var i = n("37983"),
        a = n("884691"),
        l = n("917351"),
        s = n("446674"),
        r = n("77078"),
        o = n("651693"),
        u = n("692038"),
        c = n("815297"),
        d = n("933629"),
        f = n("39331"),
        E = n("596368"),
        _ = n("227439"),
        h = n("697218"),
        S = n("170113"),
        m = n("780571"),
        p = n("377502"),
        v = n("103603"),
        A = n("299039"),
        C = n("736393"),
        T = n("170213"),
        g = n("49111"),
        I = n("719347"),
        N = n("543069");
      let x = (e, t) => {
          let n = e.attachments.map(e => {
            var n, i, a, l;
            let s = {
              ...e,
              filename: (0, C.getAttachmentFilename)(e),
              size: 0,
              proxy_url: e.url,
            };
            if (
              !(
                (0, o.isImageFile)(e.filename) || (0, o.isVideoFile)(e.filename)
              )
            )
              return s;
            return {
              ...s,
              width:
                null !==
                  (a =
                    null === (n = t[e.id]) || void 0 === n
                      ? void 0
                      : n.width) && void 0 !== a
                  ? a
                  : T.DEFAULT_MEDIA_MAX_WIDTH,
              height:
                null !==
                  (l =
                    null === (i = t[e.id]) || void 0 === i
                      ? void 0
                      : i.height) && void 0 !== l
                  ? l
                  : T.DEFAULT_MEDIA_MAX_HEIGHT,
            };
          });
          return (0, u.createMessageRecord)({
            ...(0, c.default)({
              nonce: e.id,
              content: e.content,
              type: g.MessageTypes.DEFAULT,
              channelId: g.EMPTY_STRING_SNOWFLAKE_ID,
            }),
            timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
            attachments: n,
            state: g.MessageStates.SENT,
          });
        },
        y = e => {
          let { message: t } = e,
            { attachments: n } = t;
          if (0 === n.length) return null;
          let a = (e, t, n) => {
              let a = T.DEFAULT_MEDIA_MAX_WIDTH,
                s = T.DEFAULT_MEDIA_MAX_HEIGHT;
              if (null != t.width && null != t.height) {
                let e = (0, v.getRatio)({
                  width: t.width,
                  height: t.height,
                  maxWidth: T.DEFAULT_MEDIA_MAX_WIDTH,
                  maxHeight: T.DEFAULT_MEDIA_MAX_HEIGHT,
                });
                (a = (0, l.clamp)(
                  Math.round(t.width * e),
                  0,
                  T.DEFAULT_MEDIA_MAX_WIDTH
                )),
                  (s = (0, l.clamp)(
                    Math.round(t.height * e),
                    0,
                    T.DEFAULT_MEDIA_MAX_HEIGHT
                  ));
              }
              return (0, i.jsx)("div", {
                style: { width: n ? a : "100%", height: n ? s : "100%" },
                children: (0, i.jsx)(S.default, {
                  className: e.className,
                  forceExternal: !1,
                  src: t.url,
                  width: n ? a : "100%",
                  height: n ? s : "100%",
                  responsive: !0,
                  volume: e.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: S.default.Types.VIDEO,
                  mediaLayoutType: e.mediaLayoutType,
                  fileName: t.filename,
                  fileSize: null == t.size ? void 0 : t.size.toString(),
                  playable: !0,
                  renderLinkComponent: d.renderMaskedLinkComponent,
                  onClick: e.onClick,
                  onPlay: e.onPlay,
                  onEnded: e.onEnded,
                  onVolumeChange: e.onVolumeChange,
                  onMute: e.onMute,
                  downloadable: !1,
                }),
              });
            },
            s = 1 === n.length;
          return (0, i.jsx)("div", {
            className: N.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(p.default, {
              attachments: n.map(e => ({
                attachment: e,
                spoiler: !0,
                message: t,
                mediaLayoutType: I.MediaLayoutType.MOSAIC,
                autoPlayGif: !1,
                inlineMedia: !0,
                canRemoveAttachment: !1,
                isSingleMosaicItem: s,
                onRemoveAttachment: l.noop,
                renderVideoComponent: t => a(t, e, s),
                renderImageComponent: e =>
                  (0, d.renderImageComponent)({
                    hiddenSpoilers: !0,
                    shouldHideMediaOptions: !0,
                    shouldLink: !1,
                    ...e,
                  }),
                renderAudioComponent: d.renderAudioComponent,
                renderPlaintextFilePreview: d.renderPlaintextFilePreview,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function b(e) {
        var t;
        let { flaggedContent: n } = e,
          l = (0, s.useStateFromStores)([h.default], () =>
            h.default.getCurrentUser()
          ),
          [u, c] = a.useState({}),
          [d, S] = a.useState(!0),
          p = n[0],
          v = x(p, u),
          A = (0, f.default)(v, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
          });
        return (a.useEffect(() => {
          Promise.all(
            p.attachments
              .filter(e => {
                let { filename: t } = e;
                return (0, o.isImageFile)(t) || (0, o.isVideoFile)(t);
              })
              .map(e => {
                var t;
                return ((t = e),
                new Promise((e, n) => {
                  if ((0, o.isImageFile)(t.filename)) {
                    let i = new Image();
                    (i.src = t.url),
                      (i.onload = () => {
                        e(i);
                      }),
                      (i.onerror = () => {
                        n();
                      });
                  } else if ((0, o.isVideoFile)(t.filename)) {
                    let i = document.createElement("video");
                    (i.src = t.url),
                      (i.onloadedmetadata = () => {
                        let t = i.videoWidth,
                          n = i.videoHeight;
                        e({ width: t, height: n });
                      }),
                      (i.onerror = () => {
                        n();
                      });
                  } else e({ width: 0, height: 0 });
                })).then(t => c(n => ({ ...n, [e.id]: t })));
              })
          ).finally(() => S(!1));
        }, [p.attachments]),
        "" === v.content && 0 === v.attachments.length)
          ? null
          : (0, i.jsx)("div", {
              className: N.classificationEvidenceCard,
              children: d
                ? (0, i.jsx)(r.Spinner, {})
                : (0, i.jsx)(m.default, {
                    compact: !1,
                    childrenHeader: (0, _.default)({
                      author: {
                        ...l,
                        colorString: "",
                        nick:
                          null !== (t = null == l ? void 0 : l.username) &&
                          void 0 !== t
                            ? t
                            : "",
                      },
                      message: v,
                      channel: void 0,
                      guildId: void 0,
                      compact: !1,
                      animateAvatar: !1,
                      isGroupStart: !0,
                      roleIcon: void 0,
                      hideTimestamp: !1,
                    }),
                    childrenAccessories: (0, i.jsx)(y, { message: v }),
                    childrenMessageContent: (0, E.default)(
                      { message: v },
                      A.content
                    ),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return m;
          },
          useCanStartPublicThread: function () {
            return p;
          },
          computeCanStartPublicThread: function () {
            return v;
          },
          useCanStartPrivateThread: function () {
            return A;
          },
          useCanStartThread: function () {
            return C;
          },
          useCanViewThreadForMessage: function () {
            return g;
          },
          useHasActiveThreads: function () {
            return I;
          },
          useCanManageThread: function () {
            return N;
          },
          useCanUnarchiveThread: function () {
            return b;
          },
          canUnarchiveThread: function () {
            return L;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return R;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return M;
          },
          computeIsReadOnlyThread: function () {
            return F;
          },
          useIsThreadModerator: function () {
            return U;
          },
          useCanJoinThreadVoice: function () {
            return H;
          },
          useIsNonModInLockedThread: function () {
            return D;
          },
        });
      var i = n("917351"),
        a = n.n(i),
        l = n("316693"),
        s = n("446674"),
        r = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        E = n("957255"),
        _ = n("299039"),
        h = n("401690"),
        S = n("49111");
      let m = (0, r.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function p(e, t) {
        let n = (0, s.useStateFromStores)(
          [E.default],
          () => {
            let t = e.isForumLikeChannel()
              ? S.Permissions.SEND_MESSAGES
              : l.combine(
                  S.Permissions.CREATE_PUBLIC_THREADS,
                  S.Permissions.READ_MESSAGE_HISTORY
                );
            return E.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function v(e, t) {
        let n = e.isForumLikeChannel()
            ? S.Permissions.SEND_MESSAGES
            : l.combine(
                S.Permissions.CREATE_PUBLIC_THREADS,
                S.Permissions.READ_MESSAGE_HISTORY
              ),
          i = E.default.can(n, e);
        return T(i, e, t);
      }
      function A(e) {
        let t = (0, s.useStateFromStores)(
          [E.default],
          () =>
            E.default.can(l.combine(S.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === S.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function C(e) {
        let t = p(e),
          n = A(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function g(e) {
        let t = (0, s.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(_.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, s.useStateFromStores)(
            [E.default],
            () => E.default.can(S.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function I(e) {
        return (0, s.useStateFromStoresObject)([h.default, E.default], () => {
          let t = h.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = h.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = h.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            l = a(n).some(e =>
              E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = a(t).some(
              e =>
                !(e.channel.id in n) &&
                E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)
            ),
            r = a(i).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: l || s || r,
            hasMoreActiveThreads: r || s,
          };
        });
      }
      function N(e) {
        let t = (0, s.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, s.useStateFromStores)(
            [E.default],
            () => null != t && E.default.can(S.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function x(e, t) {
        return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function y(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function b(e) {
        let t = (0, s.useStateFromStores)([E.default], () => x(e, E.default)),
          n = U(e);
        return y(e, t, n);
      }
      function L(e) {
        let t = x(e, E.default),
          n = (function (e) {
            return P(e, E.default);
          })(e);
        return y(e, t, n);
      }
      function R(e) {
        var t;
        let n = (0, s.useStateFromStores)(
          [E.default],
          () =>
            null != e &&
            E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function M(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function F(e) {
        let t = E.default.can(S.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function P(e, t) {
        return null != e && t.can(S.Permissions.MANAGE_THREADS, e);
      }
      function U(e) {
        return (0, s.useStateFromStores)([E.default], () => P(e, E.default));
      }
      function H(e) {
        let t = (0, o.default)(),
          n = (0, s.useStateFromStores)([E.default], () =>
            E.default.can(S.Permissions.CONNECT, e)
          ),
          i = R(e),
          a = m.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && a && n && i;
      }
      function D(e) {
        let t = U(e);
        return e.isLockedThread() && !t;
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        r = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = a.Children.only(t),
          E = (0, r.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(u.flowerStarContainer, l),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(o.default, { ...d, className: s(c, u.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(u.childContainer, {
                [u.redesignIconChildContainer]: E,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    754474: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BotTypes: function () {
            return r.BotTagTypes;
          },
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        s = n("79798"),
        r = n("988268"),
        o = n("293005"),
        u = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: a,
            nameColor: r,
            className: u,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: E,
            botVerified: _ = !1,
            style: h,
            useRemSizes: S = !1,
            usernameIcon: m,
          } = e;
          return (0, i.jsxs)("div", {
            className: l(u, o.nameTag),
            style: h,
            children: [
              (0, i.jsxs)("span", {
                className: l(o.username, d),
                style: null != r ? { color: r } : void 0,
                children: [m, t],
              }),
              null != n
                ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, i.jsx)(s.default, {
                    type: c,
                    invertColor: a,
                    className: l(E, o.bot),
                    verified: _,
                    useRemSizes: S,
                  })
                : null,
            ],
          });
        };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return a;
          },
          Shine: function () {
            return S;
          },
          default: function () {
            return p;
          },
        });
      var i,
        a,
        l = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        E = n("61435");
      ((i = a || (a = {})).DEFAULT = "default"), (i.SMALL = "small");
      let _ = { default: E.shineDefault, small: E.shineSmall },
        h = { default: E.shineInnerDefault, small: E.shineInnerSmall };
      class S extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, l.jsx)(u.default.div, {
            ...i,
            className: o(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, l.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: _[t],
              children: (0, l.jsx)("div", { className: h[t] }),
            }),
          });
        }
      }
      S.defaultProps = { shineSize: "default" };
      let m = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: a,
            pauseAnimation: r,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: _,
            onlyShineOnHover: h,
            ...m
          } = e,
          p = s.createRef(),
          v = (0, d.default)(p),
          A = !i && !a && !0 !== r && (!h || v);
        return (0, l.jsxs)(c.Button, {
          buttonRef: p,
          ...m,
          className: o(E.shinyButton, n),
          disabled: i,
          submitting: a,
          children: [
            t,
            A
              ? (0, l.jsx)(S, {
                  shinePaused: f,
                  className: o(
                    E.buttonShine,
                    h ? E.onlyShineOnHover : void 0,
                    _
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      m.ShineSizes = a;
      var p = m;
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      function a(e) {
        let { size: t, horizontal: n = !1 } = e,
          a = n ? t : 1,
          l = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: a,
            minWidth: a,
            height: l,
            minHeight: l,
          },
        });
      }
      n("884691");
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return o;
          },
        });
      var i = n("995008"),
        a = n.n(i),
        l = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        r = () => (0, l.useLazyValue)(() => s()),
        o = e => {
          let { children: t } = e;
          return t(r());
        };
    },
    328620: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GIFAccessoryContext: function () {
            return a;
          },
        });
      var i = n("884691");
      let a = i.createContext(() => null);
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("733154"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: l,
                fill: a,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          l.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("505088"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              backgroundColor: r,
              ...o
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != r
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: r })
                  : null,
                (0, i.jsx)("path", {
                  fill: a,
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
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("469563"),
        s = n("163725"),
        r = n("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foregroundColor: s = a.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, r.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: s,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: l,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          s.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("75196"),
        l = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: l = "currentColor",
            foreground: s,
            ...r
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, a.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: s,
              fill: l,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("424823"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: a,
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
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("390300"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: l,
                fill: a,
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
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("287083"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: a = "currentColor",
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: a,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return s;
          },
          copy: function () {
            return r;
          },
        }),
        n("70102");
      var i = n("281071"),
        a = n("773336"),
        l = n("50885");
      let s = (() => {
        if (a.isPlatformEmbedded) return null != l.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function r(e) {
        return (
          !!s && (a.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return r;
          },
        });
      var i = n("884691"),
        a = n("446674"),
        l = n("244201"),
        s = n("471671");
      function r() {
        let { windowId: e } = i.useContext(l.default);
        return (0, a.useStateFromStores)(
          [s.default],
          () => s.default.isFocused(e),
          [e]
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: r,
          }),
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: r,
            }),
          ],
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: r,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: r,
            }),
          ],
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: r,
            }),
          ],
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: r,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return s;
          },
        }),
        n("222007");
      var i = n("817736"),
        a = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      class s {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, i.findDOMNode)(e);
          (0, a.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
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
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
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
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilitySensor: function () {
            return u;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        a = n("748820"),
        l = n("157590");
      let s = (0, a.v4)(),
        r = new Map(),
        o = new Map();
      class u extends i.Component {
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
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
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
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? r.has(t)
              ? (this.elementId = r.get(t) || "")
              : r.set(t, (0, a.v4)())
            : (this.elementId = s);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(
              u,
              new l.VisibilityObserver({ root: t, rootMargin: n, threshold: i })
            );
        }
      }
      u.defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return i.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return a.VisibilitySensor;
          },
        }),
        n("6268");
      var i = n("157590"),
        a = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function i(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          i = window.getSelection(),
          a = document.createElement("textarea");
        (a.value = e),
          (a.contentEditable = "true"),
          (a.style.visibility = "none"),
          t.appendChild(a),
          n.selectNodeContents(a),
          null == i || i.removeAllRanges(),
          null == i || i.addRange(n),
          a.focus(),
          a.setSelectionRange(0, e.length);
        let l = document.execCommand("copy");
        return t.removeChild(a), l;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return i;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=99592ea5836415504298.js.map
