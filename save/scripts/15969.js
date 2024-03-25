(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15969"],
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
            return _;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
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
      let I = e => {
        let {
          primary: t,
          secondary: n,
          botType: r,
          botVerified: l,
          discriminatorClass: u,
          className: c,
          usernameClass: d,
          color: S,
          botClass: I,
          showStreamerModeTooltip: _,
        } = e;
        return (0, i.jsxs)("div", {
          className: a(E.info, c),
          children: [
            (0, i.jsx)(s.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: _,
              "aria-label": !!_ && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: a(E.username, d),
                  style: null != S ? { color: S } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: a(E.infoSpacing, u),
                  children: n,
                })
              : void 0,
            null != r &&
              (0, i.jsx)(o.default, {
                type: r,
                className: a(E.infoSpacing, I),
                verified: l,
              }),
          ],
        });
      };
      var _ = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: a,
            showAccountIdentifier: s,
            overrideDiscriminator: o,
            forcePomelo: f,
            ...E
          } = e,
          _ = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          h = _ || t || n.isNonUserBot(),
          m = n.toString(),
          C = d.default.getName(n),
          T = a ? m : null != r ? r : C,
          N = n.isPomelo() || f;
        if (N || T !== m) {
          let e =
              T === m && N && a
                ? d.default.getUserTag(n, { forcePomelo: f })
                : T,
            t = s && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(I, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: S(n),
            showStreamerModeTooltip: _ && e !== C,
            ...E,
          });
        }
        return (0, i.jsx)(c.default, {
          name: T,
          botType: S(n),
          botVerified: n.isVerifiedBot(),
          discriminator: h || T !== m ? null : null != o ? o : n.discriminator,
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
      var i = n("37983"),
        r = n("884691"),
        a = n("77078"),
        l = n("390236"),
        s = r.memo(function (e) {
          var t, n, s, u;
          let {
              user: o,
              size: c = a.AvatarSizes.SIZE_32,
              animate: d = !1,
              "aria-hidden": f = !1,
              ...E
            } = e,
            S = r.useContext(l.default);
          return (0, i.jsx)(a.Avatar, {
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
    724038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var i = n("597755"),
        r = n.n(i),
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
      async function I(e) {
        var t, n;
        let i = null === (t = r.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === i || "iOS" === i) {
          let t =
              null !== (n = c.default.getFingerprint()) && void 0 !== n
                ? n
                : c.default.getId(),
            i = (0, l.generateAttemptId)();
          if (null == t && c.default.isAuthenticated())
            try {
              await (0, u.fetchCurrentUser)(), (t = c.default.getId());
            } catch {}
          return (0, l.default)((0, a.getDefaultDynamicLinkTemplate)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function _(e) {
        let t = await I(e),
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
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("669491"),
        s = n("819855"),
        u = n("77078"),
        o = n("841098"),
        c = n("145131"),
        d = n("423487"),
        f = n("701909"),
        E = n("619935"),
        S = n("49111"),
        I = n("782340"),
        _ = n("872773"),
        h = n("584503"),
        m = n("45656");
      function C(e) {
        let { className: t } = e,
          n = (0, o.default)(),
          r = (0, s.isThemeDark)(n) ? h : m;
        return (0, i.jsxs)("div", {
          className: a(_.container, t),
          children: [
            (0, i.jsx)(u.Heading, {
              className: _.header,
              variant: "heading-xl/semibold",
              children: I.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, i.jsxs)(u.Text, {
              className: _.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, i.jsx)("p", {
                  children: I.default.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, i.jsx)("p", {
                  children:
                    I.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                      helpdeskArticle: f.default.getArticleURL(
                        S.HelpdeskArticles.BLOCKED_PAYMENTS
                      ),
                    }),
                }),
              ],
            }),
            (0, i.jsx)("img", {
              src: r,
              className: _.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function T() {
        return (0, i.jsx)(C, { className: _.settings });
      }
      function N(e) {
        let { onClose: t } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u.ModalHeader, {
              className: _.blockedPaymentsModalHeader,
              justify: c.default.Justify.END,
              children: (0, i.jsx)(u.ModalCloseButton, { onClick: t }),
            }),
            (0, i.jsx)(u.ModalContent, {
              className: _.blockedPaymentsModalContent,
              children: (0, i.jsx)(C, { className: _.modal }),
            }),
          ],
        });
      }
      function A(e) {
        let { className: t } = e,
          n = (0, E.useBlockedPaymentsConfig)();
        return n
          ? (0, i.jsxs)(u.Card, {
              className: a(_.blockedPaymentsWarning, t),
              type: u.Card.Types.CUSTOM,
              children: [
                (0, i.jsx)(d.default, {
                  className: _.blockedPaymentsWarningIcon,
                  color: l.default.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, i.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children:
                    I.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format(
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
      var i = n("446674"),
        r = n("76393");
      function a() {
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
            return a;
          },
        });
      var i = n("884691");
      let r = i.createContext(void 0);
      var a = r;
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
            return I;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
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
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let l = a.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        S = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(o, "/roles")) && e.includes("/icons/")),
        I = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(s.GuildFeatures.ROLE_ICONS);
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
      var i = n("316693"),
        r = n("923510"),
        a = n("49111");
      let l = a.Permissions.VIEW_CHANNEL,
        s = i.combine(l, a.Permissions.CONNECT),
        u = i.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
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
        a = n.n(r),
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
            selectedSkuId: r,
            application: f,
          } = (0, s.usePaymentContext)();
        a(null != r, "Expected selectedSkuId"),
          a(null != f, "Expected application");
        let E = n[r];
        a(null != E, "Expected sku");
        let S =
          c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: f.name, itemName: E.name }
          );
        return (0, i.jsxs)(o.PaymentPortalBody, {
          children: [
            (0, i.jsx)(u.default, {}),
            (0, i.jsxs)("div", {
              className: d.confirmation,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-xxl/bold",
                  className: d.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(l.Text, { variant: "text-md/normal", children: S }),
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
    628738: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("655525");
      function l() {
        return (0, i.jsx)(r.Spinner, { className: a.spinner });
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
            return h;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return m;
          },
          SHARED_STEP_CONFIGS: function () {
            return C;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("357957"),
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
          renderStep: e => (0, i.jsx)(d.OneTimePaymentPredicateStep, { ...e }),
        },
        S = {
          key: a.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  a.Step.ADD_PAYMENT_STEPS,
                  a.Step.REVIEW,
                  a.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = r.default.paymentSources;
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
        I = {
          key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(u.default, {}),
        },
        _ = {
          key: a.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(s.default, {}),
          options: { renderHeader: !0 },
        },
        h = {
          key: a.Step.REVIEW,
          renderStep: e => (0, i.jsx)(c.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        m = {
          key: a.Step.CONFIRM,
          renderStep: e => (0, i.jsx)(o.PaymentModalConfirmStep, { ...e }),
        },
        C = [I, _];
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
      var i = n("37983"),
        r = n("884691"),
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
            hasFetchedPaymentSources: I,
            application: _,
            skusById: h,
            selectedSkuId: m,
          } = (0, o.usePaymentContext)(),
          { isGift: C } = (0, u.useGiftContext)(),
          [T, N] = r.useState(!0);
        return (r.useEffect(() => {
          let e = null != _;
          E && I && e && N(!1);
        }, [E, I, _]),
        r.useEffect(() => {
          if (T || a) return;
          l(null != m, "Expected selectedSkuId");
          let e = h[m];
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
        }, [T, a, t, S, C, h, m]),
        T)
          ? (0, i.jsx)(d.default, {})
          : a
            ? (0, i.jsx)(s.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("748820"),
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
      function I(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: I,
            onClose: _,
            onComplete: h,
            onSubscriptionConfirmation: m,
            analyticsLocations: C,
            analyticsObject: T,
            analyticsLocation: N,
            analyticsSourceLocation: A,
            isGift: p = !1,
            giftMessage: P,
            subscriptionTier: v,
            trialId: O,
            postSuccessGuild: g,
            openInvoiceId: R,
            applicationId: L,
            referralTrialOfferId: M,
            giftRecipient: x,
            returnRef: b,
            subscription: y,
          } = null != e ? e : {},
          U = !1,
          D = (0, r.v4)(),
          j = o.default.getCurrentUser(),
          B = (0, f.isPremiumExactly)(j, S.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...a } = n;
              return (0, i.jsx)(e, {
                ...a,
                loadId: D,
                subscriptionTier: v,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(v),
                isGift: p,
                giftMessage: P,
                giftRecipient: x,
                initialPlanId: t,
                followupSKUInfo: I,
                onClose: (e, t) => {
                  r(),
                    null == _ || _(e),
                    e &&
                      (null == m || m(),
                      !p &&
                        null != t &&
                        t === S.PremiumSubscriptionSKUs.TIER_2 &&
                        !B &&
                        d.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (U = !0),
                    null == h || h(),
                    !p && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: m,
                analyticsLocations: C,
                analyticsObject: T,
                analyticsLocation: N,
                analyticsSourceLocation: A,
                trialId: O,
                postSuccessGuild: g,
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
                  eligible_for_trial: null != O,
                  application_id: L,
                  location_stack: C,
                }),
                (0, l.clearError)(),
                (0, s.clearPurchaseTokenAuthState)(),
                null == _ || _(U),
                U && (null == m || m());
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
      var i = n("719923"),
        r = n("646718");
      function a(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: i,
          startedPaymentFlowWithPaymentSources: a,
        } = e;
        return !t && !n && null != i && r.ACTIVE_PREMIUM_SKUS.includes(i) && a;
      }
      function l(e, t, n) {
        let i = !1;
        if (e && null != t) {
          let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
          null == e && (i = !0);
        }
        return i;
      }
      function s(e, t, n) {
        let a = null != t ? (0, i.getPremiumPlanItem)(t) : null,
          l = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
          s = null != n ? n : l;
        return (
          null != a
            ? s === a.planId && s === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e]
              ? (s = r.PREMIUM_SKU_TO_YEARLY_PLAN[e])
              : s === a.planId && s === r.PREMIUM_SKU_TO_YEARLY_PLAN[e]
                ? (s = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e])
                : (a.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 ||
                    a.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) &&
                  s === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 &&
                  (s = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2)
            : s === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              (s = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1),
          s
        );
      }
    },
    339915: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("702976");
      var i = n("37983"),
        r = n("884691"),
        a = n("446674"),
        l = n("834897"),
        s = n("129408"),
        u = n("713536"),
        o = n("640820"),
        c = n("305961"),
        d = n("642906"),
        f = n("85336"),
        E = n("159149"),
        S = n("650484"),
        I = n("101703"),
        _ = n("782340");
      function h(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            subscriptionMetadataRequest: h,
            selectedSku: m,
            selectedStoreListing: C,
            application: T,
          } = (0, d.usePaymentContext)(),
          N = (0, l.default)(I.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          A = (0, a.useStateFromStores)([c.default], () =>
            c.default.getGuild(null == h ? void 0 : h.guild_id)
          ),
          p = r.useCallback(() => t(f.Step.REVIEW), [t]);
        if (null == m) return null;
        let P = (0, s.isApplicationUserSubscription)(m.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(S.PaymentPortalBody, {
              children: N
                ? (0, i.jsx)(o.BenefitsConfirmationLite, {
                    confirmCta:
                      _.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: p,
                    onCancel: n,
                    title:
                      _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: m.name }
                      ),
                    subtitle: P
                      ? _.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == A ? void 0 : A.name }
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(u.BenefitsConfirmation, {
                    icon: null == C ? void 0 : C.thumbnail,
                    storeListingBenefits: null == C ? void 0 : C.benefits,
                    application: null != T ? T : void 0,
                    title:
                      _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: m.name }
                      ),
                    subtitle: P
                      ? _.default.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : _.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: P
                      ? _.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: null == T ? void 0 : T.name }
                        )
                      : _.default.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !N &&
              (0, i.jsx)(S.PaymentPortalFooter, {
                children: (0, i.jsx)(E.default, {
                  onBack: n,
                  backText:
                    _.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: p,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    _.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
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
      var i = n("37983"),
        r = n("884691"),
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
        I = n("650484"),
        _ = n("367767"),
        h = n("101703"),
        m = n("782340");
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
            selectedSku: O,
            selectedStoreListing: g,
            application: R,
          } = (0, d.usePaymentContext)(),
          L = (0, a.default)(h.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
          { createMultipleConfettiAt: M } = r.useContext(
            s.ConfettiCannonContext
          ),
          x =
            null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : "",
          b = () => {
            A(), null == p || p();
          },
          y = v === f.Step.CONFIRM,
          U = (0, u.isApplicationUserSubscription)(
            null !== (n = null == O ? void 0 : O.flags) && void 0 !== n ? n : 0
          ),
          D =
            null != g && g.benefits.length > 0
              ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: g.benefits.length }
                )
              : null;
        return (
          N
            ? L
              ? (C = (0, i.jsx)(c.BenefitsConfirmationLite, {
                  title:
                    m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: x }
                    ),
                  subtitle:
                    null != g && g.benefits.length > 0
                      ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: D }
                        )
                      : null,
                  onConfirm: b,
                  confirmCta:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((C =
                  null != g && null != R
                    ? (0, i.jsx)(o.BenefitsConfirmation, {
                        icon: g.thumbnail,
                        storeListingBenefits: g.benefits,
                        application: R,
                        title:
                          m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: x }
                          ),
                        subtitle:
                          m.default.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: U
                          ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == R ? void 0 : R.name }
                            )
                          : m.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: x }
                            ),
                      })
                    : (0, i.jsx)(S.default, {})),
                (T = (0, i.jsx)(E.default, {
                  onPrimary: b,
                  primaryCTA: E.CTAType.CONTINUE,
                  primaryText:
                    m.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (C = L
                ? (0, i.jsx)(c.PurchaseConfirmationLite, {
                    tierName: x,
                    onConfirm: b,
                    subscription: P,
                  })
                : (0, i.jsx)(o.PurchaseConfirmation, {
                    tierName: x,
                    onConfirm: b,
                    subscription: P,
                  })),
          r.useEffect(() => {
            l.default.useReducedMotion &&
              y &&
              M(window.innerWidth / 2, window.innerHeight / 2);
          }, [M, y]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(I.PaymentPortalBody, {
                children: [(0, i.jsx)(_.default, {}), C],
              }),
              null != T && (0, i.jsx)(I.PaymentPortalFooter, { children: T }),
            ],
          })
        );
      }
    },
    470521: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getApplicationPaymentSteps: function () {
            return f;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var r = n("85336"),
        a = n("262683"),
        l = n("292215"),
        s = n("339915"),
        u = n("574297"),
        o = n("697157"),
        c = n("473878"),
        d = n("782340");
      function f(e) {
        let {
            guildId: t,
            eligibleApplicationSubscriptionGuilds: n,
            showBenefitsFirst: f,
          } = e,
          E = [
            {
              key: null,
              renderStep: e =>
                (0, i.jsx)(o.default, {
                  initialStep: f ? r.Step.BENEFITS : r.Step.REVIEW,
                  guildId: t,
                  ...e,
                }),
            },
            {
              key: r.Step.BENEFITS,
              renderStep: e => (0, i.jsx)(s.default, { ...e }),
              options: {
                useBreadcrumbLabel: () =>
                  d.default.Messages
                    .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
              },
            },
            {
              key: r.Step.ADD_PAYMENT_STEPS,
              renderStep: e =>
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(a.PaymentModalAddPaymentStep, {
                    ...e,
                    breadcrumbSteps: [
                      r.Step.ADD_PAYMENT_STEPS,
                      r.Step.REVIEW,
                      r.Step.CONFIRM,
                    ],
                  }),
                }),
              options: { renderHeader: !0 },
            },
            ...l.SHARED_STEP_CONFIGS,
            {
              key: r.Step.REVIEW,
              renderStep: e =>
                (0, i.jsx)(c.default, {
                  backButtonEligible: !!f || void 0,
                  prevStep: f ? r.Step.BENEFITS : void 0,
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
              key: r.Step.CONFIRM,
              renderStep: e =>
                (0, i.jsx)(u.default, { showBenefits: !f, ...e }),
            },
          ];
        return E;
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
      var i = n("37983"),
        r = n("884691"),
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
            handleClose: I,
          } = e,
          {
            blockedPayments: _,
            setStep: h,
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: C,
            currencyLoading: T,
            selectedSkuId: N,
            setSelectedSkuId: A,
            setSelectedPlanId: p,
            priceOptions: P,
            setSubscriptionMetadataRequest: v,
          } = (0, c.usePaymentContext)(),
          { isGift: O } = (0, o.useGiftContext)(),
          [g, R] = r.useState(!m || !C || T);
        return (r.useEffect(() => {
          R(!m || !C || T);
        }, [T, C, m]),
        r.useEffect(() => {
          null != E && v({ guild_id: E });
        }, [E, v]),
        r.useEffect(() => {
          p(n);
          let e = null != n ? l.default.get(n) : null;
          !g &&
            !_ &&
            (S(t => {
              let n = null != e ? (0, u.getPrice)(e.id, !1, O, P) : void 0,
                i = {
                  ...t,
                  subscription_plan_id: null == e ? void 0 : e.id,
                  price: null == n ? void 0 : n.amount,
                  regular_price: null == e ? void 0 : e.price,
                  currency: P.currency,
                };
              return (
                s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, i), i
              );
            }),
            null != e && (A(null == e ? void 0 : e.skuId), h(t)));
        }, [_, n, O, g, P, N, S, p, A, h, t]),
        g)
          ? (0, i.jsx)(d.default, {})
          : _
            ? (0, i.jsx)(a.BlockedPaymentsContentModal, { onClose: I })
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
      var i = n("37983"),
        r = n("884691"),
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
        I = n("39065"),
        _ = n("628738"),
        h = n("650484"),
        m = n("367767"),
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
            planGroup: O,
            openInvoiceId: g,
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
            currencies: j,
            paymentSources: B,
            priceOptions: w,
            purchaseError: V,
            purchaseTokenAuthState: H,
            selectedPlan: k,
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
        l(null != k, "Expected plan to be selected"),
          l(null != y, "Expected application");
        let q = r.useRef(null),
          [Q, $] = (0, u.default)(!1, 500),
          [ee, et] = r.useState(null == z ? void 0 : z.guild_id),
          en = (0, c.isApplicationUserSubscription)(
            null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0
          );
        r.useEffect(() => {
          null != V &&
            null != q.current &&
            q.current.scrollIntoView({ behavior: "smooth" });
        }, [V]);
        let ei = r.useCallback(
            e => {
              U(e), p(f.Step.CONFIRM);
            },
            [p, U]
          ),
          er = r.useCallback(
            e => {
              et(e), X({ ...z, guild_id: e });
            },
            [et, X, z]
          ),
          ea = r.useRef(null);
        return K === E.PurchaseState.PURCHASING
          ? (0, i.jsx)(_.default, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(S.default, { className: N.breadcrumbs }),
                (0, i.jsxs)(h.PaymentPortalBody, {
                  children: [
                    (0, i.jsx)(m.default, {}),
                    en &&
                      (0, i.jsxs)("div", {
                        className: N.userSubscriptionDetailsContainer,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              T.default.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, i.jsx)(s.Text, {
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
                      (0, i.jsxs)("div", {
                        className: N.guildPickerContainer,
                        children: [
                          (0, i.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children:
                              T.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, i.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: N.guildPickerDescription,
                            children:
                              T.default.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, i.jsx)(C.GuildPickerDropdown, {
                            selectedGuildId: ee,
                            onGuildChange: er,
                            eligibleApplicationSubscriptionGuilds: M,
                          }),
                        ],
                      }),
                    (0, i.jsx)(o.default, {
                      selectedPlanId: k.id,
                      paymentSources: B,
                      onPaymentSourceChange: e => W(null != e ? e.id : null),
                      priceOptions: w,
                      currencies: j,
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
                (0, i.jsx)(h.PaymentPortalFooter, {
                  children: (0, i.jsx)(I.default, {
                    premiumSubscription: null != b ? b : null,
                    setPurchaseState: Y,
                    onBack: () => null != a && p(a),
                    onNext: ei,
                    onPurchaseError: e => Z(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: L,
                    baseAnalyticsData: R,
                    flowStartTime: D.startTime,
                    planGroup: O,
                    purchaseTokenAuthState: H,
                    openInvoiceId: g,
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
    680439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildPickerDropdown: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("782340"),
        l = n("641896");
      function s(e) {
        let {
            selectedGuildId: t,
            onGuildChange: n,
            eligibleApplicationSubscriptionGuilds: s,
          } = e,
          u = s.map(e => ({ value: e.id, label: e.name }));
        return (0, i.jsx)(r.SearchableSelect, {
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
            return I;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
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
              r.combine(t, c.Permissions.CREATE_EVENTS),
              r.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        S = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            [r, o, S, I] = (0, a.useStateFromStoresArray)([s.default], () => [
              s.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              s.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              s.default.can(t, e),
              s.default.can(n, e),
            ]),
            _ = (0, a.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            h = i.useCallback(e => f(e, _, o, r), [r, o, _]),
            m = i.useCallback(e => f(e, _, I, S), [I, S, _]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: S,
                canManageAllExpressions: o,
                canManageAllEvents: I,
                canManageGuildExpression: h,
                canManageGuildEvent: m,
              };
        },
        I = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : s.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [i, r] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : E(e),
            a = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            S = t.can(i, e),
            I = t.can(r, e),
            _ = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: a,
                canCreateGuildEvent: S,
                canManageAllExpressions: o,
                canManageAllEvents: I,
                canManageGuildExpression: e => f(e, _, o, a),
                canManageGuildEvent: e => f(e, _, I, S),
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
      var i = n("37983"),
        r = n("884691"),
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
          [S, I] = r.useState(d),
          _ = r.useRef((0, u.getGiftAnimationData)(t, S)),
          [h, m] = r.useState(null == f),
          [C, T] = r.useState(!1),
          [N, A] = r.useState(-1),
          p = () => {
            (_.current = (0, u.getGiftAnimationData)(t, S)), A(e => e + 1);
          },
          P = () => {
            m(!1), T(!0), A(-1), I(d);
          };
        r.useEffect(() => {
          null == f && I(d);
        }, [f, d]),
          r.useEffect(() => {
            if (null != f && N >= 0) {
              P();
              return;
            }
            p();
          }, [t, f]),
          r.useEffect(() => {
            (!C || null == f) && p();
          }, [S]),
          r.useEffect(() => {
            C && (m(null == f), T(!1), p());
          }, [C]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, i.jsx)(s.default, {
          importData: _.current,
          shouldAnimate: !E && c,
          className: n,
          versionKey: N,
          onComplete:
            null != f
              ? () => {
                  null != f && (I(f), m(!0));
                }
              : void 0,
          loop: h,
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
      var i = n("884691"),
        r = n("446674"),
        a = n("404118"),
        l = n("10514"),
        s = n("437712"),
        u = n("719923"),
        o = n("843455"),
        c = n("782340");
      function d(e, t, n) {
        i.useEffect(() => {
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
        let n = (0, r.useStateFromStores)([l.default], () =>
            null != e ? l.default.get(e) : null
          ),
          a = (0, r.useStateFromStores)([s.default], () => {
            var e;
            return null != n &&
              null !== (e = s.default.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          o = i.useMemo(
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
      var i = n("210721"),
        r = n("646718");
      let a = (e, t) => {
        let a;
        switch (e) {
          case r.PremiumGiftStyles.SNOWGLOBE:
            a = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.PremiumGiftStyles.BOX:
            a = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.PremiumGiftStyles.CUP:
            a = () =>
              n
                .el("544929")
                .then(n.t.bind(n, "544929", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.PremiumGiftStyles.STANDARD_BOX:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.CAKE:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.CHEST:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.COFFEE:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.SEASONAL_CAKE:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.SEASONAL_CHEST:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
          case r.PremiumGiftStyles.SEASONAL_COFFEE:
            switch (t) {
              case i.AnimationState.IDLE:
                a = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.AnimationState.LOOP:
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
      var i = n("37983");
      n("884691");
      var r = n("77078"),
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
        return (0, i.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: u,
            }),
            null != o
              ? (0, i.jsx)(r.Text, {
                  className: s.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                })
              : null,
            (0, i.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                d &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, a.default)("application_sub_mweb_success_modal"),
                    children:
                      l.default.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                  }),
                (0, i.jsx)(r.Button, {
                  fullWidth: !0,
                  color: r.Button.Colors.PRIMARY,
                  onClick: t,
                  children: c,
                }),
                null != n &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
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
        return (0, i.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n }
                ),
            }),
            (0, i.jsx)(r.Text, {
              className: s.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == u ? void 0 : u.currentPeriodEnd }
                ),
            }),
            (0, i.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                (0, i.jsx)(r.Button, {
                  className: s.openDiscordButton,
                  onClick: () =>
                    (0, a.default)("application_sub_mweb_success_modal"),
                  children:
                    l.default.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, i.jsx)(r.Button, {
                  className: s.doneButton,
                  look: r.Button.Looks.BLANK,
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
      var i = n("884691"),
        r = n("79112"),
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
          E = (0, i.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f),
              r.default.open(
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
            return h;
          },
          useCanStartPublicThread: function () {
            return m;
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
            return j;
          },
        });
      var i = n("917351"),
        r = n.n(i),
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
        I = n("401690"),
        _ = n("49111");
      let h = (0, s.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function m(e, t) {
        let n = (0, l.useStateFromStores)(
          [E.default],
          () => {
            let t = e.isForumLikeChannel()
              ? _.Permissions.SEND_MESSAGES
              : a.combine(
                  _.Permissions.CREATE_PUBLIC_THREADS,
                  _.Permissions.READ_MESSAGE_HISTORY
                );
            return E.default.can(t, e);
          },
          [e]
        );
        return A(n, e, t);
      }
      function C(e, t) {
        let n = e.isForumLikeChannel()
            ? _.Permissions.SEND_MESSAGES
            : a.combine(
                _.Permissions.CREATE_PUBLIC_THREADS,
                _.Permissions.READ_MESSAGE_HISTORY
              ),
          i = E.default.can(n, e);
        return A(i, e, t);
      }
      function T(e) {
        let t = (0, l.useStateFromStores)(
          [E.default],
          () =>
            E.default.can(a.combine(_.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === _.ChannelTypes.GUILD_TEXT && A(t, e);
      }
      function N(e) {
        let t = m(e),
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
              (n.hasFlag(_.MessageFlags.HAS_THREAD) || (0, o.default)(n)))
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
            () => E.default.can(_.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(_.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function P(e) {
        return (0, l.useStateFromStoresObject)([I.default, E.default], () => {
          let t = I.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = I.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = I.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = r(n).some(e =>
              E.default.can(_.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = r(t).some(
              e =>
                !(e.channel.id in n) &&
                E.default.can(_.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = r(i).some(e => E.default.can(_.Permissions.VIEW_CHANNEL, e));
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
            () => null != t && E.default.can(_.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function O(e, t) {
        return null != e && t.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function g(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function R(e) {
        let t = (0, l.useStateFromStores)([E.default], () => O(e, E.default)),
          n = U(e);
        return g(e, t, n);
      }
      function L(e) {
        let t = O(e, E.default),
          n = (function (e) {
            return y(e, E.default);
          })(e);
        return g(e, t, n);
      }
      function M(e) {
        var t;
        let n = (0, l.useStateFromStores)(
          [E.default],
          () =>
            null != e &&
            E.default.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
              E.default.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = E.default.can(_.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function y(e, t) {
        return null != e && t.can(_.Permissions.MANAGE_THREADS, e);
      }
      function U(e) {
        return (0, l.useStateFromStores)([E.default], () => y(e, E.default));
      }
      function D(e) {
        let t = (0, u.default)(),
          n = (0, l.useStateFromStores)([E.default], () =>
            E.default.can(_.Permissions.CONNECT, e)
          ),
          i = M(e),
          r = h.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function j(e) {
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
      var i = n("446674"),
        r = n("95410"),
        a = n("913144"),
        l = n("49111");
      let s = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = s,
        o = "LAST_VIEWED_PATH";
      class c extends i.default.PersistedStore {
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
            let e = r.Storage.get(o, null);
            return r.Storage.remove(o), { lastViewedPath: e };
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
      var i = n("37983"),
        r = n("884691"),
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
          f = r.Children.only(t),
          E = (0, s.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: l(o.flowerStarContainer, a),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(u.default, { ...d, className: l(c, o.flowerStar) }),
            (0, i.jsx)("div", {
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
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("79798"),
        s = n("988268"),
        u = n("293005"),
        o = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: s,
            className: o,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: E,
            botVerified: S = !1,
            style: I,
            useRemSizes: _ = !1,
            usernameIcon: h,
          } = e;
          return (0, i.jsxs)("div", {
            className: a(o, u.nameTag),
            style: I,
            children: [
              (0, i.jsxs)("span", {
                className: a(u.username, d),
                style: null != s ? { color: s } : void 0,
                children: [h, t],
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
                    className: a(E, u.bot),
                    verified: S,
                    useRemSizes: _,
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
          a = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: r,
            minWidth: r,
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
      var i = n("995008"),
        r = n.n(i),
        a = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
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
            return I;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
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
              height: r = 24,
              color: S = "currentColor",
              transition: I = f.transition,
              className: _,
              foreground: h,
              expanded: m,
              ...C
            } = e,
            { enabled: T } = (0, c.useRedesignIconContext)(),
            N = t;
          if ((!0 === m ? (N = E.DOWN) : !1 === m && (N = E.RIGHT), T)) {
            let e = {
              [E.UP]: o.ChevronSmallUpIcon,
              [E.DOWN]: l.ChevronSmallDownIcon,
              [E.LEFT]: s.ChevronSmallLeftIcon,
              [E.RIGHT]: u.ChevronSmallRightIcon,
            }[N];
            return (0, i.jsx)(e, {
              ...C,
              className: _,
              width: n,
              height: r,
              color: S,
              colorClass: h,
            });
          }
          return (0, i.jsx)("svg", {
            className: a(_, I, N),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(C),
            children: (0, i.jsx)("path", {
              className: h,
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
      var I = S;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("733154"),
        l = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: a,
                fill: r,
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
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("505088"),
        l = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              backgroundColor: s,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != s
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: s })
                  : null,
                (0, i.jsx)("path", {
                  fill: r,
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("469563"),
        l = n("163725"),
        s = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foregroundColor: l = r.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: l,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("75196"),
        a = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: l,
            ...s
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, r.default)(s),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function a(e) {
        let { width: t = 104, height: n = 80, ...a } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(a),
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
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("424823"),
        l = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
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
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("390300"),
        l = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: a,
                fill: r,
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
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("287083"),
        l = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: r = "currentColor",
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(a),
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
      var i = n("281071"),
        r = n("773336"),
        a = n("50885");
      let l = (() => {
        if (r.isPlatformEmbedded) return null != a.default.copy;
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
          !!l && (r.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
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
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: s = "",
          color: u = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(c),
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
              className: s,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: s,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: s,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(u),
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
              className: s,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: s,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: s,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(u),
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: s,
            }),
            (0, i.jsx)("path", {
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
          VisibilityObserver: function () {
            return l;
          },
        }),
        n("222007");
      var i = n("817736"),
        r = n("118810");
      let a = { root: null, rootMargin: "0px", threshold: 0.5 };
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
        constructor(e = a) {
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
            return o;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        r = n("748820"),
        a = n("157590");
      let l = (0, r.v4)(),
        s = new Map(),
        u = new Map();
      class o extends i.Component {
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
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? s.has(t)
              ? (this.elementId = s.get(t) || "")
              : s.set(t, (0, r.v4)())
            : (this.elementId = l);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(
              o,
              new a.VisibilityObserver({ root: t, rootMargin: n, threshold: i })
            );
        }
      }
      o.defaultProps = {
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
        let a = document.execCommand("copy");
        return t.removeChild(r), a;
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
//# sourceMappingURL=75e253005ac5a84828e4.js.map
