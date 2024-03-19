(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67846"],
  {
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
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
    584503: function (e, t, n) {
      "use strict";
      e.exports = n.p + "55fda0412a4ff4072236.svg";
    },
    45656: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f4d8991602d4587f573e.svg";
    },
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("446674"),
        s = n("77078"),
        u = n("102985"),
        o = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        E = n("168540");
      function S(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let _ = e => {
        let {
          primary: t,
          secondary: n,
          botType: i,
          botVerified: l,
          discriminatorClass: u,
          className: c,
          usernameClass: d,
          color: S,
          botClass: _,
          showStreamerModeTooltip: I,
        } = e;
        return (0, r.jsxs)("div", {
          className: a(E.info, c),
          children: [
            (0, r.jsx)(s.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: I,
              "aria-label": !!I && void 0,
              children: e =>
                (0, r.jsx)("span", {
                  ...e,
                  className: a(E.username, d),
                  style: null != S ? { color: S } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, r.jsx)("span", {
                  className: a(E.infoSpacing, u),
                  children: n,
                })
              : void 0,
            null != i &&
              (0, r.jsx)(o.default, {
                type: i,
                className: a(E.infoSpacing, _),
                verified: l,
              }),
          ],
        });
      };
      var I = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: i,
            forceUsername: a,
            showAccountIdentifier: s,
            overrideDiscriminator: o,
            forcePomelo: f,
            ...E
          } = e,
          I = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          m = I || t || n.isNonUserBot(),
          h = n.toString(),
          C = d.default.getName(n),
          T = a ? h : null != i ? i : C,
          N = n.isPomelo() || f;
        if (N || T !== h) {
          let e =
              T === h && N && a
                ? d.default.getUserTag(n, { forcePomelo: f })
                : T,
            t = s && e !== "@".concat(h) ? d.default.getUserTag(n) : void 0;
          return (0, r.jsx)(_, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: S(n),
            showStreamerModeTooltip: I && e !== C,
            ...E,
          });
        }
        return (0, r.jsx)(c.default, {
          name: T,
          botType: S(n),
          botVerified: n.isVerifiedBot(),
          discriminator: m || T !== h ? null : null != o ? o : n.discriminator,
          ...E,
        });
      };
    },
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        a = n("77078"),
        l = n("390236"),
        s = i.memo(function (e) {
          var t, n, s, u;
          let {
              user: o,
              size: c = a.AvatarSizes.SIZE_32,
              animate: d = !1,
              "aria-hidden": f = !1,
              ...E
            } = e,
            S = i.useContext(l.default);
          return (0, r.jsx)(a.Avatar, {
            src:
              ((t = o),
              (n = (0, a.getAvatarSize)(c)),
              (s = d),
              (u = S),
              t.getAvatarURL(u, n, s)),
            size: c,
            "aria-label": f ? void 0 : o.username,
            "aria-hidden": f,
            ...E,
          });
        });
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("76527");
      n.es(r, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("506070");
      n.es(r, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("632874");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("618807");
      n.es(r, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("28289");
      n.es(r, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("882039");
      n.es(r, t);
    },
    724038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var r = n("597755"),
        i = n.n(r),
        a = n("742270"),
        l = n("815157"),
        s = n("391679"),
        u = n("327037"),
        o = n("393414"),
        c = n("271938"),
        d = n("476108"),
        f = n("599110"),
        E = n("65300"),
        S = n("49111");
      async function _(e) {
        var t, n;
        let r = null === (t = i.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === r || "iOS" === r) {
          let t =
              null !== (n = c.default.getFingerprint()) && void 0 !== n
                ? n
                : c.default.getId(),
            r = (0, l.generateAttemptId)();
          if (null == t && c.default.isAuthenticated())
            try {
              await (0, u.fetchCurrentUser)(), (t = c.default.getId());
            } catch {}
          return (0, l.default)((0, a.getDefaultDynamicLinkTemplate)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
          });
        }
        return "discord://";
      }
      async function I(e) {
        let t = await _(e),
          n = (0, l.parseDynamicLink)(t);
        null != n &&
          f.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          E.default.launch(t, e => {
            !e && (0, o.replaceWith)(d.default.fallbackRoute);
          });
      }
    },
    245187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BlockedPaymentsContentSettings: function () {
            return T;
          },
          BlockedPaymentsContentModal: function () {
            return N;
          },
          BlockedPaymentsWarning: function () {
            return A;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("669491"),
        s = n("819855"),
        u = n("77078"),
        o = n("841098"),
        c = n("145131"),
        d = n("423487"),
        f = n("701909"),
        E = n("619935"),
        S = n("49111"),
        _ = n("782340"),
        I = n("872773"),
        m = n("584503"),
        h = n("45656");
      function C(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          i = (0, s.isThemeDark)(n) ? m : h;
        return (0, r.jsxs)("div", {
          className: a(I.container, t),
          children: [
            (0, r.jsx)(u.Heading, {
              className: I.header,
              variant: "heading-xl/semibold",
              children: _.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(u.Text, {
              className: I.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: _.default.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children:
                    _.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                      helpdeskArticle: f.default.getArticleURL(
                        S.HelpdeskArticles.BLOCKED_PAYMENTS
                      ),
                    }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: i,
              className: I.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function T() {
        return (0, r.jsx)(C, { className: I.settings });
      }
      function N(e) {
        let { onClose: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(u.ModalHeader, {
              className: I.blockedPaymentsModalHeader,
              justify: c.default.Justify.END,
              children: (0, r.jsx)(u.ModalCloseButton, { onClick: t }),
            }),
            (0, r.jsx)(u.ModalContent, {
              className: I.blockedPaymentsModalContent,
              children: (0, r.jsx)(C, { className: I.modal }),
            }),
          ],
        });
      }
      function A(e) {
        let { className: t } = e,
          n = (0, E.useBlockedPaymentsConfig)();
        return n
          ? (0, r.jsxs)(u.Card, {
              className: a(I.blockedPaymentsWarning, t),
              type: u.Card.Types.CUSTOM,
              children: [
                (0, r.jsx)(d.default, {
                  className: I.blockedPaymentsWarningIcon,
                  color: l.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children:
                    _.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format(
                      {
                        helpdeskArticle: f.default.getArticleURL(
                          S.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    ),
                }),
              ],
            })
          : null;
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("446674"),
        i = n("76393");
      function a() {
        return (0, r.useStateFromStores)(
          [i.default],
          () =>
            null != i.default.getRemoteSessionId() ||
            null != i.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("884691");
      let i = r.createContext(void 0);
      var a = i;
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
            return S;
          },
          canGuildUseRoleIcons: function () {
            return _;
          },
        }),
        n("781738");
      var r = n("867805"),
        i = n("407063"),
        a = n("315102"),
        l = n("773336"),
        s = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, l.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
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
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let l = a.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        S = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(o, "/roles")) && e.includes("/icons/")),
        _ = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(s.GuildFeatures.ROLE_ICONS);
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
            return s;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var r = n("316693"),
        i = n("923510"),
        a = n("49111");
      let l = a.Permissions.VIEW_CHANNEL,
        s = r.default.combine(l, a.Permissions.CONNECT),
        u = r.default.combine(l, i.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    7127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PaymentModalConfirmStep: function () {
            return f;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("627445"),
        a = n.n(i),
        l = n("77078"),
        s = n("642906"),
        u = n("367767"),
        o = n("650484"),
        c = n("782340"),
        d = n("348550");
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: i,
            application: f,
          } = (0, s.usePaymentContext)();
        a(null != i, "Expected selectedSkuId"),
          a(null != f, "Expected application");
        let E = n[i];
        a(null != E, "Expected sku");
        let S =
          c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: f.name, itemName: E.name }
          );
        return (0, r.jsxs)(o.PaymentPortalBody, {
          children: [
            (0, r.jsx)(u.default, {}),
            (0, r.jsxs)("div", {
              className: d.confirmation,
              children: [
                (0, r.jsx)(l.Heading, {
                  variant: "heading-xxl/bold",
                  className: d.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(l.Text, { variant: "text-md/normal", children: S }),
                (0, r.jsx)("div", { className: d.divider }),
                (0, r.jsx)(l.Button, {
                  onClick: t,
                  children: c.default.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      }
    },
    628738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("77078"),
        a = n("655525");
      function l() {
        return (0, r.jsx)(i.Spinner, { className: a.spinner });
      }
    },
    292215: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function () {
            return E;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return S;
          },
          REVIEW_STEP_CONFIG: function () {
            return m;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return h;
          },
          SHARED_STEP_CONFIGS: function () {
            return C;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("357957"),
        a = n("85336"),
        l = n("262683"),
        s = n("946359"),
        u = n("724269"),
        o = n("7127"),
        c = n("99836"),
        d = n("217796"),
        f = n("782340");
      let E = {
          key: null,
          renderStep: e => (0, r.jsx)(d.OneTimePaymentPredicateStep, { ...e }),
        },
        S = {
          key: a.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  a.Step.ADD_PAYMENT_STEPS,
                  a.Step.REVIEW,
                  a.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = i.default.paymentSources;
                  0 === Object.keys(t).length
                    ? e.handleClose()
                    : e.handleStepChange(a.Step.REVIEW, {
                        trackedFromStep: a.Step.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        _ = {
          key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(u.default, {}),
        },
        I = {
          key: a.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(s.default, {}),
          options: { renderHeader: !0 },
        },
        m = {
          key: a.Step.REVIEW,
          renderStep: e => (0, r.jsx)(c.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        h = {
          key: a.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(o.PaymentModalConfirmStep, { ...e }),
        },
        C = [_, I];
    },
    217796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OneTimePaymentPredicateStep: function () {
            return E;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        a = n("627445"),
        l = n.n(a),
        s = n("245187"),
        u = n("635357"),
        o = n("642906"),
        c = n("85336"),
        d = n("628738"),
        f = n("49111");
      function E(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: a,
            hasFetchedSkus: E,
            paymentSources: S,
            hasFetchedPaymentSources: _,
            application: I,
            skusById: m,
            selectedSkuId: h,
          } = (0, o.usePaymentContext)(),
          { isGift: C } = (0, u.useGiftContext)(),
          [T, N] = i.useState(!0);
        return (i.useEffect(() => {
          let e = null != I;
          E && _ && e && N(!1);
        }, [E, _, I]),
        i.useEffect(() => {
          if (T || a) return;
          l(null != h, "Expected selectedSkuId");
          let e = m[h];
          if (
            C &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(c.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(S).length) {
            t(c.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(c.Step.REVIEW);
        }, [T, a, t, S, C, m, h]),
        T)
          ? (0, r.jsx)(d.default, {})
          : a
            ? (0, r.jsx)(s.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("748820"),
        a = n("77078"),
        l = n("112679"),
        s = n("55689"),
        u = n("676379"),
        o = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        E = n("49111"),
        S = n("646718");
      function _(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: _,
            onClose: I,
            onComplete: m,
            onSubscriptionConfirmation: h,
            analyticsLocations: C,
            analyticsObject: T,
            analyticsLocation: N,
            analyticsSourceLocation: A,
            isGift: p = !1,
            giftMessage: P,
            subscriptionTier: v,
            trialId: g,
            postSuccessGuild: O,
            openInvoiceId: R,
            applicationId: L,
            referralTrialOfferId: M,
            giftRecipient: x,
            returnRef: b,
            subscription: y,
          } = null != e ? e : {},
          U = !1,
          D = (0, i.v4)(),
          B = o.default.getCurrentUser(),
          j = (0, f.isPremiumExactly)(B, S.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: i, ...a } = n;
              return (0, r.jsx)(e, {
                ...a,
                loadId: D,
                subscriptionTier: v,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(v),
                isGift: p,
                giftMessage: P,
                giftRecipient: x,
                initialPlanId: t,
                followupSKUInfo: _,
                onClose: (e, t) => {
                  i(),
                    null == I || I(e),
                    e &&
                      (null == h || h(),
                      !p &&
                        null != t &&
                        t === S.PremiumSubscriptionSKUs.TIER_2 &&
                        !j &&
                        d.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (U = !0),
                    null == m || m(),
                    !p && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: h,
                analyticsLocations: C,
                analyticsObject: T,
                analyticsLocation: N,
                analyticsSourceLocation: A,
                trialId: g,
                postSuccessGuild: O,
                planGroup: S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: R,
                applicationId: L,
                referralTrialOfferId: M,
                returnRef: b,
                subscription: y,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !U &&
                c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: D,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != N ? N : T,
                  source: A,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: p,
                  eligible_for_trial: null != g,
                  application_id: L,
                  location_stack: C,
                }),
                (0, l.clearError)(),
                (0, s.clearPurchaseTokenAuthState)(),
                null == I || I(U),
                U && (null == h || h());
            },
          }
        );
      }
    },
    176108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          inOneStepSubscriptionCheckout: function () {
            return a;
          },
          planSwitchLoadingShowSpinner: function () {
            return l;
          },
          getDefaultPlanOneStepCheckout: function () {
            return s;
          },
        });
      var r = n("719923"),
        i = n("646718");
      function a(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: r,
          startedPaymentFlowWithPaymentSources: a,
        } = e;
        return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && a;
      }
      function l(e, t, n) {
        let r = !1;
        if (e && null != t) {
          let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
          null == e && (r = !0);
        }
        return r;
      }
      function s(e, t, n) {
        let a = null != t ? (0, r.getPremiumPlanItem)(t) : null,
          l = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
          s = null != n ? n : l;
        return (
          null != a
            ? s === a.planId && s === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e]
              ? (s = i.PREMIUM_SKU_TO_YEARLY_PLAN[e])
              : s === a.planId && s === i.PREMIUM_SKU_TO_YEARLY_PLAN[e]
                ? (s = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e])
                : (a.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 ||
                    a.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) &&
                  s === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
                  (s = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2)
            : s === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              (s = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1),
          s
        );
      }
    },
    574297: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("702976");
      var r = n("37983"),
        i = n("884691"),
        a = n("834897"),
        l = n("206230"),
        s = n("526887"),
        u = n("129408"),
        o = n("713536"),
        c = n("640820"),
        d = n("642906"),
        f = n("85336"),
        E = n("159149"),
        S = n("628738"),
        _ = n("650484"),
        I = n("367767"),
        m = n("101703"),
        h = n("782340");
      function C(e) {
        var t, n;
        let C,
          T,
          {
            showBenefits: N,
            handleClose: A,
            onSubscriptionConfirmation: p,
          } = e,
          {
            updatedSubscription: P,
            readySlideId: v,
            selectedSku: g,
            selectedStoreListing: O,
            application: R,
          } = (0, d.usePaymentContext)(),
          L = (0, a.default)(m.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          { createMultipleConfettiAt: M } = i.useContext(
            s.ConfettiCannonContext
          ),
          x =
            null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : "",
          b = () => {
            A(), null == p || p();
          },
          y = v === f.Step.CONFIRM,
          U = (0, u.isApplicationUserSubscription)(
            null !== (n = null == g ? void 0 : g.flags) && void 0 !== n ? n : 0
          ),
          D =
            null != O && O.benefits.length > 0
              ? h.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: O.benefits.length }
                )
              : null;
        return (
          N
            ? L
              ? (C = (0, r.jsx)(c.BenefitsConfirmationLite, {
                  title:
                    h.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: x }
                    ),
                  subtitle:
                    null != O && O.benefits.length > 0
                      ? h.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: D }
                        )
                      : null,
                  onConfirm: b,
                  confirmCta:
                    h.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((C =
                  null != O && null != R
                    ? (0, r.jsx)(o.BenefitsConfirmation, {
                        icon: O.thumbnail,
                        storeListingBenefits: O.benefits,
                        application: R,
                        title:
                          h.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: x }
                          ),
                        subtitle:
                          h.default.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: U
                          ? h.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == R ? void 0 : R.name }
                            )
                          : h.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: x }
                            ),
                      })
                    : (0, r.jsx)(S.default, {})),
                (T = (0, r.jsx)(E.default, {
                  onPrimary: b,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    h.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (C = L
                ? (0, r.jsx)(c.PurchaseConfirmationLite, {
                    tierName: x,
                    onConfirm: b,
                    subscription: P,
                  })
                : (0, r.jsx)(o.PurchaseConfirmation, {
                    tierName: x,
                    onConfirm: b,
                    subscription: P,
                  })),
          i.useEffect(() => {
            l.default.useReducedMotion &&
              y &&
              M(window.innerWidth / 2, window.innerHeight / 2);
          }, [M, y]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(_.PaymentPortalBody, {
                children: [(0, r.jsx)(I.default, {}), C],
              }),
              null != T && (0, r.jsx)(_.PaymentPortalFooter, { children: T }),
            ],
          })
        );
      }
    },
    697157: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        a = n("245187"),
        l = n("10514"),
        s = n("599110"),
        u = n("719923"),
        o = n("635357"),
        c = n("642906"),
        d = n("628738"),
        f = n("49111");
      function E(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: E,
            setAnalyticsData: S,
            handleClose: _,
          } = e,
          {
            blockedPayments: I,
            setStep: m,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: C,
            currencyLoading: T,
            selectedSkuId: N,
            setSelectedSkuId: A,
            setSelectedPlanId: p,
            priceOptions: P,
            setSubscriptionMetadataRequest: v,
          } = (0, c.usePaymentContext)(),
          { isGift: g } = (0, o.useGiftContext)(),
          [O, R] = i.useState(!h || !C || T);
        return (i.useEffect(() => {
          R(!h || !C || T);
        }, [T, C, h]),
        i.useEffect(() => {
          null != E && v({ guild_id: E });
        }, [E, v]),
        i.useEffect(() => {
          p(n);
          let e = null != n ? l.default.get(n) : null;
          !O &&
            !I &&
            (S(t => {
              let n = null != e ? (0, u.getPrice)(e.id, !1, g, P) : void 0,
                r = {
                  ...t,
                  subscription_plan_id: null == e ? void 0 : e.id,
                  price: null == n ? void 0 : n.amount,
                  regular_price: null == e ? void 0 : e.price,
                  currency: P.currency,
                };
              return (
                s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
              );
            }),
            null != e && (A(null == e ? void 0 : e.skuId), m(t)));
        }, [I, n, g, O, P, N, S, p, A, m, t]),
        O)
          ? (0, r.jsx)(d.default, {})
          : I
            ? (0, r.jsx)(a.BlockedPaymentsContentModal, { onClose: _ })
            : null;
      }
    },
    473878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("222007"),
        n("702976");
      var r = n("37983"),
        i = n("884691"),
        a = n("627445"),
        l = n.n(a),
        s = n("77078"),
        u = n("612039"),
        o = n("527866"),
        c = n("129408"),
        d = n("642906"),
        f = n("85336"),
        E = n("286350"),
        S = n("153727"),
        _ = n("39065"),
        I = n("628738"),
        m = n("650484"),
        h = n("367767"),
        C = n("680439"),
        T = n("782340"),
        N = n("965576");
      function A(e) {
        var t;
        let {
            backButtonEligible: n,
            prevStep: a,
            showGuildPicker: A,
            handleStepChange: p,
            trialFooterMessageOverride: P,
            reviewWarningMessage: v,
            planGroup: g,
            openInvoiceId: O,
            analyticsData: R,
            analyticsLocation: L,
            eligibleApplicationSubscriptionGuilds: M,
            handleClose: x,
          } = e,
          {
            activeSubscription: b,
            application: y,
            setUpdatedSubscription: U,
            contextMetadata: D,
            currencies: B,
            paymentSources: j,
            priceOptions: w,
            purchaseError: V,
            purchaseTokenAuthState: k,
            selectedPlan: H,
            selectedSku: F,
            setCurrency: G,
            setPaymentSourceId: W,
            setPurchaseState: Y,
            setPurchaseError: Z,
            purchaseState: K,
            subscriptionMetadataRequest: z,
            setSubscriptionMetadataRequest: X,
            setHasAcceptedTerms: J,
          } = (0, d.usePaymentContext)();
        l(null != H, "Expected plan to be selected"),
          l(null != y, "Expected application");
        let q = i.useRef(null),
          [Q, $] = (0, u.default)(!1, 500),
          [ee, et] = i.useState(null == z ? void 0 : z.guild_id),
          en = (0, c.isApplicationUserSubscription)(
            null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0
          );
        i.useEffect(() => {
          null != V &&
            null != q.current &&
            q.current.scrollIntoView({ behavior: "smooth" });
        }, [V]);
        let er = i.useCallback(
            e => {
              U(e), p(f.Step.CONFIRM);
            },
            [p, U]
          ),
          ei = i.useCallback(
            e => {
              et(e), X({ ...z, guild_id: e });
            },
            [et, X, z]
          ),
          ea = i.useRef(null);
        return K === E.PurchaseState.PURCHASING
          ? (0, r.jsx)(I.default, {})
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(S.default, { className: N.breadcrumbs }),
                (0, r.jsxs)(m.PaymentPortalBody, {
                  children: [
                    (0, r.jsx)(h.default, {}),
                    en &&
                      (0, r.jsxs)("div", {
                        className: N.userSubscriptionDetailsContainer,
                        children: [
                          (0, r.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              T.default.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: y.name }
                              ),
                          }),
                        ],
                      }),
                    A &&
                      !en &&
                      (0, r.jsxs)("div", {
                        className: N.guildPickerContainer,
                        children: [
                          (0, r.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children:
                              T.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: N.guildPickerDescription,
                            children:
                              T.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, r.jsx)(C.GuildPickerDropdown, {
                            selectedGuildId: ee,
                            onGuildChange: ei,
                            eligibleApplicationSubscriptionGuilds: M,
                          }),
                        ],
                      }),
                    (0, r.jsx)(o.default, {
                      selectedPlanId: H.id,
                      paymentSources: j,
                      onPaymentSourceChange: e => W(null != e ? e.id : null),
                      priceOptions: w,
                      currencies: B,
                      onCurrencyChange: e => G(e),
                      handlePaymentSourceAdd: () => p(f.Step.ADD_PAYMENT_STEPS),
                      setHasAcceptedTerms: J,
                      legalTermsNodeRef: ea,
                      hasLegalTermsFlash: Q,
                      trialFooterMessageOverride: P,
                      reviewWarningMessage: v,
                      metadata: A || en ? void 0 : z,
                      purchaseState: K,
                      hideSubscriptionDetails: !0,
                      handleClose: x,
                    }),
                  ],
                }),
                (0, r.jsx)(m.PaymentPortalFooter, {
                  children: (0, r.jsx)(_.default, {
                    premiumSubscription: null != b ? b : null,
                    setPurchaseState: Y,
                    onBack: () => null != a && p(a),
                    onNext: er,
                    onPurchaseError: e => Z(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: L,
                    baseAnalyticsData: R,
                    flowStartTime: D.startTime,
                    planGroup: g,
                    purchaseTokenAuthState: k,
                    openInvoiceId: O,
                    metadata: en ? void 0 : z,
                    backButtonEligible: n,
                    invoiceError: null,
                    disablePurchase:
                      (null == z ? void 0 : z.guild_id) == null && !en,
                  }),
                }),
              ],
            });
      }
    },
    179387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        a = n("446674"),
        l = n("834897"),
        s = n("560350"),
        u = n("129408"),
        o = n("713536"),
        c = n("640820"),
        d = n("305961"),
        f = n("642906"),
        E = n("85336"),
        S = n("159149"),
        _ = n("650484"),
        I = n("101703"),
        m = n("782340");
      function h(e) {
        let {
            application: t,
            listing: n,
            handleStepChange: h,
            handleClose: C,
          } = e,
          { subscriptionMetadataRequest: T } = (0, f.usePaymentContext)(),
          N = (0, l.default)(I.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          A = (0, u.isApplicationUserSubscription)(n.sku_flags),
          p = (0, a.useStateFromStores)([d.default], () =>
            d.default.getGuild(null == T ? void 0 : T.guild_id)
          ),
          P = i.useCallback(() => h(E.Step.REVIEW), [h]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(_.PaymentPortalBody, {
              children: N
                ? (0, r.jsx)(c.BenefitsConfirmationLite, {
                    confirmCta:
                      m.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: P,
                    onCancel: C,
                    title:
                      m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: A
                      ? m.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == p ? void 0 : p.name }
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, r.jsx)(o.BenefitsConfirmation, {
                    icon:
                      null != n.image_asset
                        ? (0, s.transformStoreAssetFromServer)(n.image_asset)
                        : null,
                    storeListingBenefits: n.store_listing_benefits,
                    skuBenefits: n.sku_benefits.benefits,
                    application: t,
                    title:
                      m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: n.name }
                      ),
                    subtitle: A
                      ? m.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : m.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: A
                      ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: t.name }
                        )
                      : m.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !N &&
              (0, r.jsx)(_.PaymentPortalFooter, {
                children: (0, r.jsx)(S.default, {
                  onBack: C,
                  backText:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: P,
                  primaryCTA: S.CTAType.CONTINUE,
                  primaryText:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
      }
    },
    999043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getApplicationSubscriptionPaymentSteps: function () {
            return f;
          },
        }),
        n("222007");
      var r = n("37983");
      n("884691");
      var i = n("85336"),
        a = n("262683"),
        l = n("292215"),
        s = n("574297"),
        u = n("697157"),
        o = n("473878"),
        c = n("179387"),
        d = n("782340");
      function f(e) {
        let {
            guildId: t,
            eligibleApplicationSubscriptionGuilds: n,
            application: f,
            listing: E,
            showBenefitsFirst: S,
          } = e,
          _ = [
            {
              key: null,
              renderStep: e =>
                (0, r.jsx)(u.default, {
                  initialStep: S ? i.Step.BENEFITS : i.Step.REVIEW,
                  guildId: t,
                  ...e,
                }),
            },
            {
              key: i.Step.BENEFITS,
              renderStep: e =>
                (0, r.jsx)(c.default, { application: f, listing: E, ...e }),
              options: {
                useBreadcrumbLabel: () =>
                  d.default.Messages
                    .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
              },
            },
            {
              key: i.Step.ADD_PAYMENT_STEPS,
              renderStep: e =>
                (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(a.PaymentModalAddPaymentStep, {
                    ...e,
                    breadcrumbSteps: [
                      i.Step.ADD_PAYMENT_STEPS,
                      i.Step.REVIEW,
                      i.Step.CONFIRM,
                    ],
                  }),
                }),
              options: { renderHeader: !0 },
            },
            ...l.SHARED_STEP_CONFIGS,
            {
              key: i.Step.REVIEW,
              renderStep: e =>
                (0, r.jsx)(o.default, {
                  backButtonEligible: !!S || void 0,
                  prevStep: S ? i.Step.BENEFITS : void 0,
                  showGuildPicker: null == t,
                  eligibleApplicationSubscriptionGuilds: n,
                  ...e,
                }),
              options: {
                renderHeader: !0,
                useBreadcrumbLabel: () =>
                  d.default.Messages.BILLING_STEP_REVIEW,
              },
            },
            {
              key: i.Step.CONFIRM,
              renderStep: e =>
                (0, r.jsx)(s.default, { showBenefits: !S, ...e }),
            },
          ];
        return _;
      }
    },
    680439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildPickerDropdown: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("77078"),
        a = n("782340"),
        l = n("641896");
      function s(e) {
        let {
            selectedGuildId: t,
            onGuildChange: n,
            eligibleApplicationSubscriptionGuilds: s,
          } = e,
          u = s.map(e => ({ value: e.id, label: e.name }));
        return (0, r.jsx)(i.SearchableSelect, {
          className: l.select,
          maxVisibleItems: 5,
          value: t,
          placeholder:
            a.default.Messages
              .APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
          options: u,
          onChange: e => {
            n(e);
          },
        });
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return S;
          },
          getManageResourcePermissions: function () {
            return _;
          },
        }),
        n("222007");
      var r = n("884691"),
        i = n("316693"),
        a = n("446674"),
        l = n("813006");
      n("923959");
      var s = n("957255"),
        u = n("697218");
      n("991170");
      var o = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, r) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
          if ("userId" in e) return r && null != t && e.userId === t.id;
          if ("user" in e) {
            var i;
            return (
              r &&
              null != t &&
              (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id
            );
          }
          return !1;
        },
        E = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              i.default.combine(t, c.Permissions.CREATE_EVENTS),
              i.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        S = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            [i, o, S, _] = (0, a.useStateFromStoresArray)([s.default], () => [
              s.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              s.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              s.default.can(t, e),
              s.default.can(n, e),
            ]),
            I = (0, a.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            m = r.useCallback(e => f(e, I, o, i), [i, o, I]),
            h = r.useCallback(e => f(e, I, _, S), [_, S, I]);
          return null == e
            ? d
            : {
                canCreateExpressions: i,
                canCreateGuildEvent: S,
                canManageAllExpressions: o,
                canManageAllEvents: _,
                canManageGuildExpression: m,
                canManageGuildEvent: h,
              };
        },
        _ = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : s.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [r, i] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            a = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            S = t.can(r, e),
            _ = t.can(i, e),
            I = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: a,
                canCreateGuildEvent: S,
                canManageAllExpressions: o,
                canManageAllEvents: _,
                canManageGuildExpression: e => f(e, I, o, a),
                canManageGuildEvent: e => f(e, I, _, S),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return i;
          },
        });
      var r = n("913144");
      let i = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    65324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("37983"),
        i = n("884691"),
        a = n("446674"),
        l = n("206230"),
        s = n("491605"),
        u = n("642716"),
        o = n("646718");
      function c(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: c = !0,
            defaultAnimationState: d,
            idleAnimationState: f,
          } = e,
          E = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.useReducedMotion
          ),
          [S, _] = i.useState(d),
          I = i.useRef((0, u.getGiftAnimationData)(t, S)),
          [m, h] = i.useState(null == f),
          [C, T] = i.useState(!1),
          [N, A] = i.useState(-1),
          p = () => {
            (I.current = (0, u.getGiftAnimationData)(t, S)), A(e => e + 1);
          },
          P = () => {
            h(!1), T(!0), A(-1), _(d);
          };
        i.useEffect(() => {
          null == f && _(d);
        }, [f, d]),
          i.useEffect(() => {
            if (null != f && N >= 0) {
              P();
              return;
            }
            p();
          }, [t, f]),
          i.useEffect(() => {
            (!C || null == f) && p();
          }, [S]),
          i.useEffect(() => {
            C && (h(null == f), T(!1), p());
          }, [C]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, r.jsx)(s.default, {
          importData: I.current,
          shouldAnimate: !E && c,
          className: n,
          versionKey: N,
          onComplete:
            null != f
              ? () => {
                  null != f && (_(f), h(!0));
                }
              : void 0,
          loop: m,
        });
      }
    },
    661128: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUnsupportedExternalSubscriptionModalHandler: function () {
            return d;
          },
          useSubscriptionEntitlements: function () {
            return E;
          },
        });
      var r = n("884691"),
        i = n("446674"),
        a = n("404118"),
        l = n("10514"),
        s = n("437712"),
        u = n("719923"),
        o = n("843455"),
        c = n("782340");
      function d(e, t, n) {
        r.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (a.default.show({
              title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName:
                  o.PaymentGatewayToFriendlyName[e.paymentGateway],
              }),
              body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format(
                {
                  paymentGatewayName:
                    o.PaymentGatewayToFriendlyName[e.paymentGateway],
                  subscriptionManagementLink: (0,
                  u.getExternalSubscriptionMethodUrl)(
                    e.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT"
                  ),
                }
              ),
              confirmText: c.default.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let f = [];
      function E(e, t) {
        let n = (0, i.useStateFromStores)([l.default], () =>
            null != e ? l.default.get(e) : null
          ),
          a = (0, i.useStateFromStores)([s.default], () => {
            var e;
            return null != n &&
              null !== (e = s.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          o = r.useMemo(
            () =>
              Array.from(a).filter(e => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [a]
          ),
          c =
            !t &&
            null != n &&
            null != o &&
            o.length >=
              u.default.getIntervalMonths(n.interval, n.intervalCount);
        return { hasEntitlements: c, entitlements: o };
      }
    },
    642716: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getGiftAnimationData: function () {
            return a;
          },
        });
      var r = n("210721"),
        i = n("646718");
      let a = (e, t) => {
        let a;
        switch (e) {
          case i.PremiumGiftStyles.SNOWGLOBE:
            a = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.BOX:
            a = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.CUP:
            a = () =>
              n
                .el("544929")
                .then(n.t.bind(n, "544929", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.STANDARD_BOX:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("353540")
                    .then(n.t.bind(n, "353540", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("303473")
                    .then(n.t.bind(n, "303473", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.CAKE:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("953820")
                    .then(n.t.bind(n, "953820", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("311972")
                    .then(n.t.bind(n, "311972", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.CHEST:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("120467")
                    .then(n.t.bind(n, "120467", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("451680")
                    .then(n.t.bind(n, "451680", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.COFFEE:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("949233")
                    .then(n.t.bind(n, "949233", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("361896")
                    .then(n.t.bind(n, "361896", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("610146")
                    .then(n.t.bind(n, "610146", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("294569")
                    .then(n.t.bind(n, "294569", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_CAKE:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("335900")
                    .then(n.t.bind(n, "335900", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("566748")
                    .then(n.t.bind(n, "566748", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_CHEST:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("355472")
                    .then(n.t.bind(n, "355472", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("262001")
                    .then(n.t.bind(n, "262001", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_COFFEE:
            switch (t) {
              case r.AnimationState.IDLE:
                a = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.AnimationState.LOOP:
                a = () =>
                  n
                    .el("737995")
                    .then(n.t.bind(n, "737995", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .el("433750")
                    .then(n.t.bind(n, "433750", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            a = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return a;
      };
    },
    640820: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BenefitsConfirmationLite: function () {
            return u;
          },
          PurchaseConfirmationLite: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("77078"),
        a = n("724038"),
        l = n("782340"),
        s = n("664943");
      let u = e => {
        let {
          onConfirm: t,
          onCancel: n,
          title: u,
          subtitle: o,
          confirmCta: c,
          showOpenDiscord: d = !0,
        } = e;
        return (0, r.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, r.jsx)(i.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: u,
            }),
            null != o
              ? (0, r.jsx)(i.Text, {
                  className: s.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                })
              : null,
            (0, r.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                d &&
                  (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, a.default)("application_sub_mweb_success_modal"),
                    children:
                      l.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                  }),
                (0, r.jsx)(i.Button, {
                  fullWidth: !0,
                  color: i.Button.Colors.PRIMARY,
                  onClick: t,
                  children: c,
                }),
                null != n &&
                  (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    onClick: n,
                    children:
                      l.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON,
                  }),
              ],
            }),
          ],
        });
      };
      function o(e) {
        let { onConfirm: t, tierName: n, subscription: u } = e;
        return (0, r.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, r.jsx)(i.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n }
                ),
            }),
            (0, r.jsx)(i.Text, {
              className: s.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == u ? void 0 : u.currentPeriodEnd }
                ),
            }),
            (0, r.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                (0, r.jsx)(i.Button, {
                  className: s.openDiscordButton,
                  onClick: () =>
                    (0, a.default)("application_sub_mweb_success_modal"),
                  children:
                    l.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, r.jsx)(i.Button, {
                  className: s.doneButton,
                  look: i.Button.Looks.BLANK,
                  onClick: t,
                  children:
                    l.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }),
              ],
            }),
          ],
        });
      }
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("884691"),
        i = n("79112"),
        a = n("685665"),
        l = n("929423");
      n("424562");
      var s = n("49111"),
        u = n("397336");
      function o(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: o,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, a.default)(),
          E = (0, r.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f),
              i.default.open(
                s.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? u.ProfileCustomizationSubsection.GUILD
                  : u.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: o,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, o, c, d, f]);
        return E;
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
            return h;
          },
          computeCanStartPublicThread: function () {
            return C;
          },
          useCanStartPrivateThread: function () {
            return T;
          },
          useCanStartThread: function () {
            return N;
          },
          useCanViewThreadForMessage: function () {
            return p;
          },
          useHasActiveThreads: function () {
            return P;
          },
          useCanManageThread: function () {
            return v;
          },
          useCanUnarchiveThread: function () {
            return R;
          },
          canUnarchiveThread: function () {
            return L;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return M;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return x;
          },
          computeIsReadOnlyThread: function () {
            return b;
          },
          useIsThreadModerator: function () {
            return U;
          },
          useCanJoinThreadVoice: function () {
            return D;
          },
          useIsNonModInLockedThread: function () {
            return B;
          },
        });
      var r = n("917351"),
        i = n.n(r),
        a = n("316693"),
        l = n("446674"),
        s = n("296892"),
        u = n("889014"),
        o = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        E = n("957255"),
        S = n("299039"),
        _ = n("401690"),
        I = n("49111");
      let m = (0, s.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function h(e, t) {
        let n = (0, l.useStateFromStores)(
          [E.default],
          () => {
            let t = e.isForumLikeChannel()
              ? I.Permissions.SEND_MESSAGES
              : a.default.combine(
                  I.Permissions.CREATE_PUBLIC_THREADS,
                  I.Permissions.READ_MESSAGE_HISTORY
                );
            return E.default.can(t, e);
          },
          [e]
        );
        return A(n, e, t);
      }
      function C(e, t) {
        let n = e.isForumLikeChannel()
            ? I.Permissions.SEND_MESSAGES
            : a.default.combine(
                I.Permissions.CREATE_PUBLIC_THREADS,
                I.Permissions.READ_MESSAGE_HISTORY
              ),
          r = E.default.can(n, e);
        return A(r, e, t);
      }
      function T(e) {
        let t = (0, l.useStateFromStores)(
          [E.default],
          () =>
            E.default.can(
              a.default.combine(I.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === I.ChannelTypes.GUILD_TEXT && A(t, e);
      }
      function N(e) {
        let t = h(e),
          n = T(e);
        return t || n;
      }
      function A(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(I.MessageFlags.HAS_THREAD) || (0, o.default)(n)))
          ) && !0
        );
      }
      function p(e) {
        let t = (0, l.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(S.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, l.useStateFromStores)(
            [E.default],
            () => E.default.can(I.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(I.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function P(e) {
        return (0, l.useStateFromStoresObject)([_.default, E.default], () => {
          let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = _.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i(n).some(e =>
              E.default.can(I.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = i(t).some(
              e =>
                !(e.channel.id in n) &&
                E.default.can(I.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = i(r).some(e => E.default.can(I.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: a || l || s,
            hasMoreActiveThreads: s || l,
          };
        });
      }
      function v(e) {
        let t = (0, l.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, l.useStateFromStores)(
            [E.default],
            () => null != t && E.default.can(I.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function g(e, t) {
        return null != e && t.can(I.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function O(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function R(e) {
        let t = (0, l.useStateFromStores)([E.default], () => g(e, E.default)),
          n = U(e);
        return O(e, t, n);
      }
      function L(e) {
        let t = g(e, E.default),
          n = (function (e) {
            return y(e, E.default);
          })(e);
        return O(e, t, n);
      }
      function M(e) {
        var t;
        let n = (0, l.useStateFromStores)(
          [E.default],
          () =>
            null != e &&
            E.default.can(I.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function x(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              E.default.can(I.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = E.default.can(I.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function y(e, t) {
        return null != e && t.can(I.Permissions.MANAGE_THREADS, e);
      }
      function U(e) {
        return (0, l.useStateFromStores)([E.default], () => y(e, E.default));
      }
      function D(e) {
        let t = (0, u.default)(),
          n = (0, l.useStateFromStores)([E.default], () =>
            E.default.can(I.Permissions.CONNECT, e)
          ),
          r = M(e),
          i = m.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && i && n && r;
      }
      function B(e) {
        let t = U(e);
        return e.isLockedThread() && !t;
      }
    },
    476108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n("446674"),
        i = n("95410"),
        a = n("913144"),
        l = n("49111");
      let s = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = s,
        o = "LAST_VIEWED_PATH";
      class c extends r.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
          u = null != e ? e : s;
        }
        get defaultRoute() {
          return l.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : l.Routes.ME;
        }
        get fallbackRoute() {
          return l.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (c.displayName = "DefaultRouteStore"),
        (c.persistKey = "DefaultRouteStore"),
        (c.migrations = [
          () => {
            let e = i.default.get(o, null);
            return i.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var d = new c(a.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        s = n("77078"),
        u = n("760607"),
        o = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: c,
            ...d
          } = e,
          f = i.Children.only(t),
          E = (0, s.useRedesignIconContext)().enabled;
        return (0, r.jsxs)("div", {
          className: l(o.flowerStarContainer, a),
          style: { width: n, height: n },
          children: [
            (0, r.jsx)(u.default, { ...d, className: l(c, o.flowerStar) }),
            (0, r.jsx)("div", {
              className: l(o.childContainer, {
                [o.redesignIconChildContainer]: E,
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
            return s.BotTagTypes;
          },
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("79798"),
        s = n("988268"),
        u = n("293005"),
        o = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: i,
            nameColor: s,
            className: o,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: E,
            botVerified: S = !1,
            style: _,
            useRemSizes: I = !1,
            usernameIcon: m,
          } = e;
          return (0, r.jsxs)("div", {
            className: a(o, u.nameTag),
            style: _,
            children: [
              (0, r.jsxs)("span", {
                className: a(u.username, d),
                style: null != s ? { color: s } : void 0,
                children: [m, t],
              }),
              null != n
                ? (0, r.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, r.jsx)(l.default, {
                    type: c,
                    invertColor: i,
                    className: a(E, u.bot),
                    verified: S,
                    useRemSizes: I,
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
            return i;
          },
        });
      var r = n("37983");
      function i(e) {
        let { size: t, horizontal: n = !1 } = e,
          i = n ? t : 1,
          a = n ? 1 : t;
        return (0, r.jsx)("span", {
          style: {
            display: "block",
            width: i,
            minWidth: i,
            height: a,
            minHeight: a,
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
            return s;
          },
          UID: function () {
            return u;
          },
        });
      var r = n("995008"),
        i = n.n(r),
        a = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        s = () => (0, a.useLazyValue)(() => l()),
        u = e => {
          let { children: t } = e;
          return t(s());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("384737"),
        s = n("448052"),
        u = n("748802"),
        o = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let E = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        S = e => {
          let {
              direction: t = E.DOWN,
              width: n = 24,
              height: i = 24,
              color: S = "currentColor",
              transition: _ = f.transition,
              className: I,
              foreground: m,
              expanded: h,
              ...C
            } = e,
            { enabled: T } = (0, c.useRedesignIconContext)(),
            N = t;
          if ((!0 === h ? (N = E.DOWN) : !1 === h && (N = E.RIGHT), T)) {
            let e = {
              [E.UP]: o.ChevronSmallUpIcon,
              [E.DOWN]: l.ChevronSmallDownIcon,
              [E.LEFT]: s.ChevronSmallLeftIcon,
              [E.RIGHT]: u.ChevronSmallRightIcon,
            }[N];
            return (0, r.jsx)(e, {
              ...C,
              className: I,
              width: n,
              height: i,
              color: S,
              colorClass: m,
            });
          }
          return (0, r.jsx)("svg", {
            className: a(I, _, N),
            width: n,
            height: i,
            viewBox: "0 0 24 24",
            ...(0, d.default)(C),
            children: (0, r.jsx)("path", {
              className: m,
              fill: "none",
              stroke: S,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      S.Directions = E;
      var _ = S;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("733154"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                className: a,
                fill: i,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          a.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("505088"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              backgroundColor: s,
              ...u
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != s
                  ? (0, r.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: s })
                  : null,
                (0, r.jsx)("path", {
                  fill: i,
                  className: a,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          a.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("469563"),
        l = n("163725"),
        s = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foregroundColor: l = i.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, s.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: l,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: a,
                  className: o,
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
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196"),
        a = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: l,
            ...s
          } = e;
          return (0, r.jsx)("svg", {
            ...(0, i.default)(s),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, r.jsx)("path", {
              className: l,
              fill: a,
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
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196");
      function a(e) {
        let { width: t = 104, height: n = 80, ...a } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(a),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
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
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("424823"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: i,
                className: a,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          a.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("390300"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: a,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          a.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("287083"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: i = "currentColor",
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: i,
              }),
            });
          },
          a.StageIcon,
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
            return s;
          },
        }),
        n("70102");
      var r = n("281071"),
        i = n("773336"),
        a = n("50885");
      let l = (() => {
        if (i.isPlatformEmbedded) return null != a.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function s(e) {
        return (
          !!l && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: s = "",
          color: u = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...c
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: o,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: s,
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
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: s,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var r,
        i = n("817736"),
        a = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      r = class {
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
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("884691"),
        i = n("748820"),
        a = n("157590");
      let l = (0, i.v4)(),
        s = new Map(),
        u = new Map();
      class o extends r.Component {
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
            t = u.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return r.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: r } = e;
          t
            ? s.has(t)
              ? (this.elementId = s.get(t) || "")
              : s.set(t, (0, i.v4)())
            : (this.elementId = l);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(o, new a.default({ root: t, rootMargin: n, threshold: r }));
        }
      }
      o.defaultProps = {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var c = o;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return r.default;
          },
          VisibilitySensor: function () {
            return i.default;
          },
        }),
        n("6268");
      var r = n("157590"),
        i = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          i = document.createElement("textarea");
        (i.value = e),
          (i.contentEditable = "true"),
          (i.style.visibility = "none"),
          t.appendChild(i),
          n.selectNodeContents(i),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          i.focus(),
          i.setSelectionRange(0, e.length);
        let a = document.execCommand("copy");
        return t.removeChild(i), a;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=bf1e5a3dbb2bc8b66e5a.js.map
