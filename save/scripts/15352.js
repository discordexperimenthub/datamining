(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15352"],
  {
    766665: function (e, t, n) {
      var i = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && i
          ? i(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        s = n.n(r),
        l = n("446674"),
        a = n("77078"),
        o = n("102985"),
        u = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        h = n("168540");
      function E(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let v = e => {
        let {
          primary: t,
          secondary: n,
          botType: r,
          botVerified: l,
          discriminatorClass: o,
          className: c,
          usernameClass: d,
          color: E,
          botClass: v,
          showStreamerModeTooltip: C,
        } = e;
        return (0, i.jsxs)("div", {
          className: s(h.info, c),
          children: [
            (0, i.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: C,
              "aria-label": !!C && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: s(h.username, d),
                  style: null != E ? { color: E } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: s(h.infoSpacing, o),
                  children: n,
                })
              : void 0,
            null != r &&
              (0, i.jsx)(u.default, {
                type: r,
                className: s(h.infoSpacing, v),
                verified: l,
              }),
          ],
        });
      };
      var C = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: s,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...h
          } = e,
          C = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.hidePersonalInformation
          ),
          p = C || t || n.isNonUserBot(),
          S = n.toString(),
          m = d.default.getName(n),
          _ = s ? S : null != r ? r : m,
          I = n.isPomelo() || f;
        if (I || _ !== S) {
          let e =
              _ === S && I && s
                ? d.default.getUserTag(n, { forcePomelo: f })
                : _,
            t = a && e !== "@".concat(S) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(v, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: E(n),
            showStreamerModeTooltip: C && e !== m,
            ...h,
          });
        }
        return (0, i.jsx)(c.default, {
          name: _,
          botType: E(n),
          botVerified: n.isVerifiedBot(),
          discriminator: p || _ !== S ? null : null != u ? u : n.discriminator,
          ...h,
        });
      };
    },
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        s = n("77078"),
        l = n("390236"),
        a = r.memo(function (e) {
          var t, n, a, o;
          let {
              user: u,
              size: c = s.AvatarSizes.SIZE_32,
              animate: d = !1,
              "aria-hidden": f = !1,
              ...h
            } = e,
            E = r.useContext(l.default);
          return (0, i.jsx)(s.Avatar, {
            src:
              ((t = u),
              (n = (0, s.getAvatarSize)(c)),
              (a = d),
              (o = E),
              t.getAvatarURL(o, n, a)),
            size: c,
            "aria-label": f ? void 0 : u.username,
            "aria-hidden": f,
            ...h,
          });
        });
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("76527");
      n.es(i, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("506070");
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
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("28289");
      n.es(i, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("882039");
      n.es(i, t);
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("446674"),
        r = n("76393");
      function s() {
        return (0, i.useStateFromStores)(
          [r.default],
          () =>
            null != r.default.getRemoteSessionId() ||
            null != r.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("884691");
      let r = i.createContext(void 0);
      var s = r;
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
            return E;
          },
          canGuildUseRoleIcons: function () {
            return v;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
        s = n("315102"),
        l = n("773336"),
        a = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, l.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: h(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let l = s.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        E = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        v = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(a.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return l;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var i = n("316693"),
        r = n("923510"),
        s = n("49111");
      let l = s.Permissions.VIEW_CHANNEL,
        a = i.default.combine(l, s.Permissions.CONNECT),
        o = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    7127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalConfirmStep: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("627445"),
        s = n.n(r),
        l = n("77078"),
        a = n("642906"),
        o = n("367767"),
        u = n("650484"),
        c = n("782340"),
        d = n("348550");
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: r,
            application: f,
          } = (0, a.usePaymentContext)();
        s(null != r, "Expected selectedSkuId"),
          s(null != f, "Expected application");
        let h = n[r];
        s(null != h, "Expected sku");
        let E =
          c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: f.name, itemName: h.name }
          );
        return (0, i.jsxs)(u.PaymentPortalBody, {
          children: [
            (0, i.jsx)(o.default, {}),
            (0, i.jsxs)("div", {
              className: d.confirmation,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-xxl/bold",
                  className: d.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(l.Text, { variant: "text-md/normal", children: E }),
                (0, i.jsx)("div", { className: d.divider }),
                (0, i.jsx)(l.Button, {
                  onClick: t,
                  children: c.default.Messages.CLOSE,
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
            return h;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return E;
          },
          REVIEW_STEP_CONFIG: function () {
            return p;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return S;
          },
          SHARED_STEP_CONFIGS: function () {
            return m;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("357957"),
        s = n("85336"),
        l = n("262683"),
        a = n("946359"),
        o = n("724269"),
        u = n("7127"),
        c = n("99836"),
        d = n("217796"),
        f = n("782340");
      let h = {
          key: null,
          renderStep: e => (0, i.jsx)(d.OneTimePaymentPredicateStep, { ...e }),
        },
        E = {
          key: s.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  s.Step.ADD_PAYMENT_STEPS,
                  s.Step.REVIEW,
                  s.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = r.default.paymentSources;
                  0 === Object.keys(t).length
                    ? e.handleClose()
                    : e.handleStepChange(s.Step.REVIEW, {
                        trackedFromStep: s.Step.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        v = {
          key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(o.default, {}),
        },
        C = {
          key: s.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(a.default, {}),
          options: { renderHeader: !0 },
        },
        p = {
          key: s.Step.REVIEW,
          renderStep: e => (0, i.jsx)(c.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        S = {
          key: s.Step.CONFIRM,
          renderStep: e => (0, i.jsx)(u.PaymentModalConfirmStep, { ...e }),
        },
        m = [v, C];
    },
    217796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OneTimePaymentPredicateStep: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        s = n("627445"),
        l = n.n(s),
        a = n("245187"),
        o = n("635357"),
        u = n("642906"),
        c = n("85336"),
        d = n("628738"),
        f = n("49111");
      function h(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: s,
            hasFetchedSkus: h,
            paymentSources: E,
            hasFetchedPaymentSources: v,
            application: C,
            skusById: p,
            selectedSkuId: S,
          } = (0, u.usePaymentContext)(),
          { isGift: m } = (0, o.useGiftContext)(),
          [_, I] = r.useState(!0);
        return (r.useEffect(() => {
          let e = null != C;
          h && v && e && I(!1);
        }, [h, v, C]),
        r.useEffect(() => {
          if (_ || s) return;
          l(null != S, "Expected selectedSkuId");
          let e = p[S];
          if (
            m &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(c.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(E).length) {
            t(c.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(c.Step.REVIEW);
        }, [_, s, t, E, m, p, S]),
        _)
          ? (0, i.jsx)(d.default, {})
          : s
            ? (0, i.jsx)(a.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("748820"),
        s = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");
      function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: S,
            analyticsLocations: m,
            analyticsObject: _,
            analyticsLocation: I,
            analyticsSourceLocation: T,
            isGift: N = !1,
            giftMessage: A,
            subscriptionTier: g,
            trialId: M,
            postSuccessGuild: P,
            openInvoiceId: x,
            applicationId: R,
            referralTrialOfferId: y,
            giftRecipient: b,
            returnRef: L,
            subscription: O,
          } = null != e ? e : {},
          w = !1,
          V = (0, r.v4)(),
          j = u.default.getCurrentUser(),
          D = (0, f.isPremiumExactly)(j, E.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...s } = n;
              return (0, i.jsx)(e, {
                ...s,
                loadId: V,
                subscriptionTier: g,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(g),
                isGift: N,
                giftMessage: A,
                giftRecipient: b,
                initialPlanId: t,
                followupSKUInfo: v,
                onClose: (e, t) => {
                  r(),
                    null == C || C(e),
                    e &&
                      (null == S || S(),
                      !N &&
                        null != t &&
                        t === E.PremiumSubscriptionSKUs.TIER_2 &&
                        !D &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (w = !0),
                    null == p || p(),
                    !N && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: S,
                analyticsLocations: m,
                analyticsObject: _,
                analyticsLocation: I,
                analyticsSourceLocation: T,
                trialId: M,
                postSuccessGuild: P,
                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: x,
                applicationId: R,
                referralTrialOfferId: y,
                returnRef: L,
                subscription: O,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !w &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: V,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != I ? I : _,
                  source: T,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: N,
                  eligible_for_trial: null != M,
                  application_id: R,
                  location_stack: m,
                }),
                (0, l.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == C || C(w),
                w && (null == S || S());
            },
          }
        );
      }
    },
    405314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
          },
          default: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var r = n("812204"),
        s = n("685665"),
        l = n("635357"),
        a = n("642906"),
        o = n("385179"),
        u = n("292215"),
        c = n("843455");
      function d(e) {
        let {
            onClose: t,
            onComplete: n,
            transitionState: r,
            applicationId: l,
            analyticsLocationObject: u,
            skuId: c,
          } = e,
          {} = (0, a.usePaymentContext)(),
          { analyticsLocations: d } = (0, s.default)();
        return (0, i.jsx)(o.PaymentModal, {
          onClose: t,
          onComplete: n,
          applicationId: l,
          skuId: c,
          initialPlanId: null,
          analyticsObject: u,
          analyticsLocations: d,
          transitionState: r,
        });
      }
      let f = [
        u.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG,
        u.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG,
        ...u.SHARED_STEP_CONFIGS,
        u.REVIEW_STEP_CONFIG,
        u.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG,
      ];
      function h(e) {
        let {
            loadId: t,
            applicationId: n,
            skuId: o,
            analyticsLocations: u,
          } = e,
          { AnalyticsLocationProvider: h } = (0, s.default)(
            u,
            r.default.PREMIUM_PAYMENT_MODAL
          );
        return (0, i.jsx)(h, {
          children: (0, i.jsx)(a.PaymentContextProvider, {
            loadId: t,
            stepConfigs: f,
            applicationId: n,
            skuIDs: [o],
            activeSubscription: null,
            purchaseType: c.PurchaseTypes.ONE_TIME,
            children: (0, i.jsx)(l.GiftContextProvider, {
              children: (0, i.jsx)(d, { ...e }),
            }),
          }),
        });
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return E;
          },
          getManageResourcePermissions: function () {
            return v;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
        s = n("446674"),
        l = n("813006");
      n("923959");
      var a = n("957255"),
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
            var r;
            return (
              i &&
              null != t &&
              (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              r.default.combine(t, c.Permissions.CREATE_EVENTS),
              r.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        E = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [r, u, E, v] = (0, s.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            C = (0, s.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            p = i.useCallback(e => f(e, C, u, r), [r, u, C]),
            S = i.useCallback(e => f(e, C, v, E), [v, E, C]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: v,
                canManageGuildExpression: p,
                canManageGuildEvent: S,
              };
        },
        v = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [i, r] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            s = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            E = t.can(i, e),
            v = t.can(r, e),
            C = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: v,
                canManageGuildExpression: e => f(e, C, u, s),
                canManageGuildEvent: e => f(e, C, v, E),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return r;
          },
        });
      var i = n("913144");
      let r = e => {
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
        r = n("79112"),
        s = n("685665"),
        l = n("929423");
      n("424562");
      var a = n("49111"),
        o = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, s.default)(),
          h = (0, i.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f),
              r.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
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
        return h;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return p;
          },
          useCanStartPublicThread: function () {
            return S;
          },
          computeCanStartPublicThread: function () {
            return m;
          },
          useCanStartPrivateThread: function () {
            return _;
          },
          useCanStartThread: function () {
            return I;
          },
          useCanViewThreadForMessage: function () {
            return N;
          },
          useHasActiveThreads: function () {
            return A;
          },
          useCanManageThread: function () {
            return g;
          },
          useCanUnarchiveThread: function () {
            return x;
          },
          canUnarchiveThread: function () {
            return R;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return b;
          },
          computeIsReadOnlyThread: function () {
            return L;
          },
          useIsThreadModerator: function () {
            return w;
          },
          useCanJoinThreadVoice: function () {
            return V;
          },
          useIsNonModInLockedThread: function () {
            return j;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        s = n("316693"),
        l = n("446674"),
        a = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        v = n("401690"),
        C = n("49111");
      let p = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function S(e, t) {
        let n = (0, l.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? C.Permissions.SEND_MESSAGES
              : s.default.combine(
                  C.Permissions.CREATE_PUBLIC_THREADS,
                  C.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function m(e, t) {
        let n = e.isForumLikeChannel()
            ? C.Permissions.SEND_MESSAGES
            : s.default.combine(
                C.Permissions.CREATE_PUBLIC_THREADS,
                C.Permissions.READ_MESSAGE_HISTORY
              ),
          i = h.default.can(n, e);
        return T(i, e, t);
      }
      function _(e) {
        let t = (0, l.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              s.default.combine(C.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === C.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function I(e) {
        let t = S(e),
          n = _(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(C.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function N(e) {
        let t = (0, l.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => h.default.can(C.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(C.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function A(e) {
        return (0, l.useStateFromStoresObject)([v.default, h.default], () => {
          let t = v.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = v.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = v.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = r(n).some(e =>
              h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = r(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = r(i).some(e => h.default.can(C.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: s || l || a,
            hasMoreActiveThreads: a || l,
          };
        });
      }
      function g(e) {
        let t = (0, l.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(C.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function M(e, t) {
        return null != e && t.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function P(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function x(e) {
        let t = (0, l.useStateFromStores)([h.default], () => M(e, h.default)),
          n = w(e);
        return P(e, t, n);
      }
      function R(e) {
        let t = M(e, h.default),
          n = (function (e) {
            return O(e, h.default);
          })(e);
        return P(e, t, n);
      }
      function y(e) {
        var t;
        let n = (0, l.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function b(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function L(e) {
        let t = h.default.can(C.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function O(e, t) {
        return null != e && t.can(C.Permissions.MANAGE_THREADS, e);
      }
      function w(e) {
        return (0, l.useStateFromStores)([h.default], () => O(e, h.default));
      }
      function V(e) {
        let t = (0, o.default)(),
          n = (0, l.useStateFromStores)([h.default], () =>
            h.default.can(C.Permissions.CONNECT, e)
          ),
          i = y(e),
          r = p.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function j(e) {
        let t = w(e);
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
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: c,
            ...d
          } = e,
          f = r.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: l(u.flowerStarContainer, s),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(o.default, { ...d, className: l(c, u.flowerStar) }),
            (0, i.jsx)("div", {
              className: l(u.childContainer, {
                [u.redesignIconChildContainer]: h,
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
            return a.BotTagTypes;
          },
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        s = n.n(r),
        l = n("79798"),
        a = n("988268"),
        o = n("293005"),
        u = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: a,
            className: u,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: h,
            botVerified: E = !1,
            style: v,
            useRemSizes: C = !1,
            usernameIcon: p,
          } = e;
          return (0, i.jsxs)("div", {
            className: s(u, o.nameTag),
            style: v,
            children: [
              (0, i.jsxs)("span", {
                className: s(o.username, d),
                style: null != a ? { color: a } : void 0,
                children: [p, t],
              }),
              null != n
                ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, i.jsx)(l.default, {
                    type: c,
                    invertColor: r,
                    className: s(h, o.bot),
                    verified: E,
                    useRemSizes: C,
                  })
                : null,
            ],
          });
        };
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      function r(e) {
        let { size: t, horizontal: n = !1 } = e,
          r = n ? t : 1,
          s = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: r,
            minWidth: r,
            height: s,
            minHeight: s,
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
            return l;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return o;
          },
        });
      var i = n("995008"),
        r = n.n(i),
        s = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        a = () => (0, s.useLazyValue)(() => l()),
        o = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        s = n.n(r),
        l = n("384737"),
        a = n("448052"),
        o = n("748802"),
        u = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        E = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: r = 24,
              color: E = "currentColor",
              transition: v = f.transition,
              className: C,
              foreground: p,
              expanded: S,
              ...m
            } = e,
            { enabled: _ } = (0, c.useRedesignIconContext)(),
            I = t;
          if ((!0 === S ? (I = h.DOWN) : !1 === S && (I = h.RIGHT), _)) {
            let e = {
              [h.UP]: u.ChevronSmallUpIcon,
              [h.DOWN]: l.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: o.ChevronSmallRightIcon,
            }[I];
            return (0, i.jsx)(e, {
              ...m,
              className: C,
              width: n,
              height: r,
              color: E,
              colorClass: p,
            });
          }
          return (0, i.jsx)("svg", {
            className: s(C, v, I),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(m),
            children: (0, i.jsx)("path", {
              className: p,
              fill: "none",
              stroke: E,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      E.Directions = h;
      var v = E;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("733154"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: s,
                fill: r,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          s.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("505088"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              backgroundColor: a,
              ...o
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, i.jsx)("path", {
                  fill: r,
                  className: s,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          s.CircleXIcon,
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
      var r = n("669491"),
        s = n("469563"),
        l = n("163725"),
        a = n("75196"),
        o = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foregroundColor: l = r.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: l,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: s,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          l.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196"),
        s = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: s = "currentColor",
            foreground: l,
            ...a
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, r.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: l,
              fill: s,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function s(e) {
        let { width: t = 104, height: n = 80, ...s } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, i.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("424823"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("390300"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: s,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("287083"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: r = "currentColor",
              ...s
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: r,
              }),
            });
          },
          s.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return l;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var i = n("281071"),
        r = n("773336"),
        s = n("50885");
      let l = (() => {
        if (r.isPlatformEmbedded) return null != s.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!l && (r.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: a,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: a = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: a,
            }),
            (0, i.jsx)("path", {
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
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
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
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
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
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
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
            return l;
          },
        }),
        n("222007");
      var i = n("817736"),
        r = n("118810");
      let s = { root: null, rootMargin: "0px", threshold: 0.5 };
      class l {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, i.findDOMNode)(e);
          (0, r.isElement)(n, HTMLElement) &&
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
        constructor(e = s) {
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
        r = n("748820"),
        s = n("157590");
      let l = (0, r.v4)(),
        a = new Map(),
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
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, r.v4)())
            : (this.elementId = l);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(
              u,
              new s.VisibilityObserver({ root: t, rootMargin: n, threshold: i })
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
            return r.VisibilitySensor;
          },
        }),
        n("6268");
      var i = n("157590"),
        r = n("235855");
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
          r = document.createElement("textarea");
        (r.value = e),
          (r.contentEditable = "true"),
          (r.style.visibility = "none"),
          t.appendChild(r),
          n.selectNodeContents(r),
          null == i || i.removeAllRanges(),
          null == i || i.addRange(n),
          r.focus(),
          r.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(r), s;
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
//# sourceMappingURL=bf5e78400bb663ab4bef.js.map
