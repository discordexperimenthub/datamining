(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28040"],
  {
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    431036: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d8d77824c450981d7ec3.svg";
    },
    723251: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          thumbHashToApproximateAspectRatio: function () {
            return r;
          },
          rgbaToDataURL: function () {
            return u;
          },
          thumbHashToDataURL: function () {
            return a;
          },
        }),
        n("70102"),
        n("424973"),
        n("222007"),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341"),
        n("101997");
      function r(e) {
        let t = e[3],
          n = 128 & e[2],
          r = 128 & e[4];
        return (r ? (n ? 5 : 7) : 7 & t) / (r ? 7 & t : n ? 5 : 7);
      }
      function u(e, t, n) {
        let r = 4 * e + 1,
          u = 6 + t * (5 + r),
          a = [
            137,
            80,
            78,
            71,
            13,
            10,
            26,
            10,
            0,
            0,
            0,
            13,
            73,
            72,
            68,
            82,
            0,
            0,
            e >> 8,
            255 & e,
            0,
            0,
            t >> 8,
            255 & t,
            8,
            6,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            u >>> 24,
            (u >> 16) & 255,
            (u >> 8) & 255,
            255 & u,
            73,
            68,
            65,
            84,
            120,
            1,
          ],
          o = [
            0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
            1303535960, 1342533948, -306674912, -267414716, -690576408,
            -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
          ],
          i = 1,
          l = 0;
        for (let e = 0, u = 0, o = r - 1; e < t; e++, o += r - 1)
          for (
            a.push(
              e + 1 < t ? 0 : 1,
              255 & r,
              r >> 8,
              255 & ~r,
              (r >> 8) ^ 255,
              0
            ),
              l = (l + i) % 65521;
            u < o;
            u++
          ) {
            let e = 255 & n[u];
            a.push(e), (l = (l + (i = (i + e) % 65521)) % 65521);
          }
        for (let [e, t] of (a.push(
          l >> 8,
          255 & l,
          i >> 8,
          255 & i,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          73,
          69,
          78,
          68,
          174,
          66,
          96,
          130
        ),
        [
          [12, 29],
          [37, 41 + u],
        ])) {
          let n = -1;
          for (let r = e; r < t; r++)
            (n ^= a[r]), (n = ((n = (n >>> 4) ^ o[15 & n]) >>> 4) ^ o[15 & n]);
          (n = ~n),
            (a[t++] = n >>> 24),
            (a[t++] = (n >> 16) & 255),
            (a[t++] = (n >> 8) & 255),
            (a[t++] = 255 & n);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...a));
      }
      function a(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: u, cos: a, round: o } = Math,
            i = e[0] | (e[1] << 8) | (e[2] << 16),
            l = e[3] | (e[4] << 8),
            s = (63 & i) / 63,
            c = ((i >> 6) & 63) / 31.5 - 1,
            d = ((i >> 12) & 63) / 31.5 - 1,
            f = i >> 23,
            E = l >> 15,
            p = u(3, E ? (f ? 5 : 7) : 7 & l),
            S = u(3, E ? 7 & l : f ? 5 : 7),
            T = f ? (15 & e[5]) / 15 : 1,
            _ = (e[5] >> 4) / 15,
            y = f ? 6 : 5,
            m = 0,
            h = (t, n, r) => {
              let u = [];
              for (let a = 0; a < n; a++)
                for (let o = a ? 0 : 1; o * n < t * (n - a); o++)
                  u.push(
                    (((e[y + (m >> 1)] >> ((1 & m++) << 2)) & 15) / 7.5 - 1) * r
                  );
              return u;
            },
            I = h(p, S, ((i >> 18) & 31) / 31),
            P = h(3, 3, 1.25 * (((l >> 3) & 63) / 63)),
            C = h(3, 3, 1.25 * (((l >> 9) & 63) / 63)),
            A = f && h(5, 5, _),
            R = r(e),
            N = o(R > 1 ? 32 : 32 * R),
            L = o(R > 1 ? 32 / R : 32),
            g = new Uint8Array(N * L * 4),
            U = [],
            v = [];
          for (let e = 0, r = 0; e < L; e++)
            for (let o = 0; o < N; o++, r += 4) {
              let i = s,
                l = c,
                E = d,
                _ = T;
              for (let e = 0, n = u(p, f ? 5 : 3); e < n; e++)
                U[e] = a((t / N) * (o + 0.5) * e);
              for (let n = 0, r = u(S, f ? 5 : 3); n < r; n++)
                v[n] = a((t / L) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < S; e++)
                for (
                  let n = e ? 0 : 1, r = 2 * v[e];
                  n * S < p * (S - e);
                  n++, t++
                )
                  i += I[t] * U[n] * r;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, r = 2 * v[e]; n < 3 - e; n++, t++) {
                  let e = U[n] * r;
                  (l += P[t] * e), (E += C[t] * e);
                }
              if (f)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, r = 2 * v[e]; n < 5 - e; n++, t++)
                    _ += A[t] * U[n] * r;
              let y = i - (2 / 3) * l,
                m = (3 * i - y + E) / 2,
                h = m - E;
              (g[r] = u(0, 255 * n(1, m))),
                (g[r + 1] = u(0, 255 * n(1, h))),
                (g[r + 2] = u(0, 255 * n(1, y))),
                (g[r + 3] = u(0, 255 * n(1, _)));
            }
          return { w: N, h: L, rgba: g };
        })(e);
        return u(t.w, t.h, t.rgba);
      }
    },
    316718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserEntitlementsForApplication: function () {
            return i;
          },
          fetchUserEntitlements: function () {
            return l;
          },
          fetchGiftableEntitlements: function () {
            return s;
          },
        });
      var r = n("872717"),
        u = n("913144"),
        a = n("271560"),
        o = n("49111");
      function i(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          u.default.wait(() => {
            u.default.dispatch({
              type: "ENTITLEMENT_FETCH_APPLICATION_START",
              applicationId: e,
            });
          }),
          r.default
            .get({
              url: o.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
              oldFormErrors: !0,
              query: { exclude_consumed: t },
            })
            .then(
              t => (
                u.default.dispatch({
                  type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                  applicationId: e,
                  entitlements: t.body,
                }),
                t.body
              )
            )
            .catch(() => {
              u.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: e,
              });
            })
        );
      }
      async function l(e) {
        let {
          withSku: t = !1,
          withApplication: n = !1,
          entitlementType: a,
        } = e;
        u.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
        try {
          let e = await r.default.get({
            url: o.Endpoints.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: n, entitlement_type: a },
          });
          u.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          u.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
        }
      }
      async function s() {
        u.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
        try {
          let e = await (0, a.httpGetWithCountryCodeQuery)({
            url: o.Endpoints.ENTITLEMENTS_GIFTABLE,
          });
          u.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          u.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
        }
      }
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return u;
          },
          updateCardInfo: function () {
            return a;
          },
          clearCardInfo: function () {
            return o;
          },
          updateAddressInfo: function () {
            return i;
          },
          clearError: function () {
            return l;
          },
        });
      var r = n("913144");
      function u(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function a(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function i(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function l() {
        r.default.wait(() =>
          r.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return u;
          },
        });
      var r = n("913144");
      function u() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var r = n("884691");
      function u(e) {
        let [t, n] = (0, r.useState)(!1),
          u = (0, r.useRef)(e.current);
        return (
          (0, r.useEffect)(() => {
            u.current = e.current;
          }, [e]),
          (0, r.useEffect)(() => {
            let e = u.current;
            if (null == e) return;
            let t = () => n(!0),
              r = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", r),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", r);
              }
            );
          }, [u]),
          t
        );
      }
    },
    606292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDecorationSizeForAvatarSize: function () {
            return l;
          },
          openAvatarDecorationModal: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("393414");
      n("103603");
      var o = n("573135"),
        i = n("49111");
      function l(e) {
        return "number" != typeof e
          ? (0, u.getAvatarSize)(e) * o.DECORATION_TO_AVATAR_RATIO
          : e * o.DECORATION_TO_AVATAR_RATIO;
      }
      let s = e => {
        let {
          analyticsLocations: t,
          initialSelectedDecoration: o,
          isTryItOutFlow: l,
          guild: s,
        } = e;
        (0, u.openModalLazy)(async () => {
          (0, a.getHistory)().location.pathname ===
            i.Routes.COLLECTIBLES_SHOP_FULLSCREEN &&
            (0, a.transitionTo)(i.Routes.APP);
          let { default: e } = await n.el("791050").then(n.bind(n, "791050"));
          return n =>
            (0, r.jsx)(e, {
              ...n,
              analyticsLocations: t,
              initialSelectedDecoration: o,
              isTryItOutFlow: l,
              guild: s,
            });
        }, {});
      };
    },
    619935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlockedPaymentsConfig: function () {
            return i;
          },
          default: function () {
            return l;
          },
        });
      var r = n("862205"),
        u = n("15733");
      let a = (0, r.createExperiment)({
          kind: "user",
          id: "2022-03_block_russian_purchases",
          label: "Block purchases based on country",
          defaultConfig: { paymentsBlocked: !1 },
          treatments: [
            {
              id: 1,
              label: "Payments Blocked",
              config: { paymentsBlocked: !0 },
            },
          ],
        }),
        o = (0, r.createExperiment)({
          kind: "user",
          id: "2022-03_block_russian_purchases_desktop",
          label: "Block purchases based on country (desktop specific flags)",
          defaultConfig: { checkPaymentSource: !1 },
          treatments: [
            {
              id: 1,
              label: "Check Payment Source",
              config: { checkPaymentSource: !0 },
            },
          ],
        });
      function i() {
        let { paymentsBlocked: e } = a.useExperiment(
            { location: "c519a9_1" },
            { autoTrackExposure: !1 }
          ),
          { checkPaymentSource: t } = o.useExperiment(
            { location: "c519a9_2" },
            { autoTrackExposure: !1 }
          ),
          { defaultBillingCountryCode: n } = (0, u.default)();
        return e || (t && "RU" === n);
      }
      var l = a;
    },
    308592: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSubscriptionPlansLoaded: function () {
            return c;
          },
          getSubscriptionPlansLoaded: function () {
            return d;
          },
        }),
        n("222007");
      var r = n("446674"),
        u = n("605250"),
        a = n("357957"),
        o = n("10514"),
        i = n("521012"),
        l = n("646718");
      new u.default("useSubscriptionPlansLoaded");
      let s = e => {};
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [...l.ACTIVE_PREMIUM_SKUS];
        return (0, r.useStateFromStores)(
          [a.default, o.default, i.default],
          () => d(e, [a.default, o.default, i.default]),
          [e]
        );
      }
      function d() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [...l.ACTIVE_PREMIUM_SKUS],
          [n, r, u] =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [a.default, o.default, i.default],
          c = n.paymentSourceIds,
          d = n.defaultPaymentSourceId,
          f = r.isLoadedForSKUs(t),
          E =
            null === (e = u.getPremiumTypeSubscription()) || void 0 === e
              ? void 0
              : e.paymentSourceId;
        if (null != E && !r.hasPaymentSourceForSKUIds(E, t))
          return (
            s(
              "subscription payment source "
                .concat(E, " not loaded for ")
                .concat(t)
            ),
            !1
          );
        if (null != d && !r.hasPaymentSourceForSKUIds(d, t))
          return (
            s(
              "default payment source ".concat(d, " not loaded for ").concat(t)
            ),
            !1
          );
        for (let e of c)
          if (!r.hasPaymentSourceForSKUIds(e, t))
            return (
              s("payment source ".concat(e, " not loaded for ").concat(t)), !1
            );
        return s("isLoadedForSKUs ".concat(f)), f;
      }
    },
    854381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("446674"),
        u = n("10514"),
        a = n("713518"),
        o = n("646718"),
        i = n("843455");
      function l(e) {
        var t, n;
        let {
          activeSubscription: l,
          skuIDs: s,
          paymentSourceId: c,
          isGift: d,
        } = e;
        s = s.filter(e => e !== o.PremiumSubscriptionSKUs.NONE);
        let f = (0, r.useStateFromStores)([u.default], () => {
            let e = u.default
              .getPlanIdsForSkus(s)
              .filter(e => !d || o.PREMIUM_PLANS.has(e));
            return e.length > 0 ? u.default.get(e[0]) : null;
          }),
          E = null == f ? [] : (0, a.getCurrencies)(f.id, c, d),
          p =
            null !==
              (n =
                null !==
                  (t = E.find(e => e === (null == l ? void 0 : l.currency))) &&
                void 0 !== t
                  ? t
                  : E[0]) && void 0 !== n
              ? n
              : i.CurrencyCodes.USD;
        return {
          ...(0, a.useCurrencyWithPaymentSourceChange)(
            p,
            null == f ? void 0 : f.id,
            c,
            d,
            s
          ),
          currencies: E,
        };
      }
    },
    986681: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var r = n("884691"),
        u = n("446674"),
        a = n("850068"),
        o = n("357957");
      function i(e) {
        let { isGift: t, activeSubscription: n } = e,
          {
            defaultPaymentSourceId: i,
            paymentSources: l,
            hasFetchedPaymentSources: s,
          } = (0, u.useStateFromStoresObject)([o.default], () => ({
            defaultPaymentSourceId: o.default.defaultPaymentSourceId,
            paymentSources: o.default.paymentSources,
            hasFetchedPaymentSources: o.default.hasFetchedPaymentSources,
          })),
          c = (e, t, n) =>
            e || (null == t ? void 0 : t.paymentSourceId) == null
              ? n
              : t.paymentSourceId,
          [d, f] = r.useState(() => c(t, n, i));
        return (
          r.useEffect(() => {
            s ? f(c(t, n, i)) : (0, a.fetchPaymentSources)();
          }, [s, t, n, i]),
          {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: s,
          }
        );
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("748820"),
        a = n("77078"),
        o = n("112679"),
        i = n("55689"),
        l = n("676379"),
        s = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        E = n("49111"),
        p = n("646718");
      function S(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: S,
            onClose: T,
            onComplete: _,
            onSubscriptionConfirmation: y,
            analyticsLocations: m,
            analyticsObject: h,
            analyticsLocation: I,
            analyticsSourceLocation: P,
            isGift: C = !1,
            giftMessage: A,
            subscriptionTier: R,
            trialId: N,
            postSuccessGuild: L,
            openInvoiceId: g,
            applicationId: U,
            referralTrialOfferId: v,
            giftRecipient: O,
            returnRef: b,
            subscription: F,
          } = null != e ? e : {},
          M = !1,
          D = (0, u.v4)(),
          k = s.default.getCurrentUser(),
          w = (0, f.isPremiumExactly)(k, p.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: u, ...a } = n;
              return (0, r.jsx)(e, {
                ...a,
                loadId: D,
                subscriptionTier: R,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(R),
                isGift: C,
                giftMessage: A,
                giftRecipient: O,
                initialPlanId: t,
                followupSKUInfo: S,
                onClose: (e, t) => {
                  u(),
                    null == T || T(e),
                    e &&
                      (null == y || y(),
                      !C &&
                        null != t &&
                        t === p.PremiumSubscriptionSKUs.TIER_2 &&
                        !w &&
                        d.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (M = !0),
                    null == _ || _(),
                    !C && (0, l.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: y,
                analyticsLocations: m,
                analyticsObject: h,
                analyticsLocation: I,
                analyticsSourceLocation: P,
                trialId: N,
                postSuccessGuild: L,
                planGroup: p.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: g,
                applicationId: U,
                referralTrialOfferId: v,
                returnRef: b,
                subscription: F,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !M &&
                c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: D,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != I ? I : h,
                  source: P,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: C,
                  eligible_for_trial: null != N,
                  application_id: U,
                  location_stack: m,
                }),
                (0, o.clearError)(),
                (0, i.clearPurchaseTokenAuthState)(),
                null == T || T(M),
                M && (null == y || y());
            },
          }
        );
      }
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return u;
          },
        });
      var r = n("913144");
      let u = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    15733: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("884691"),
        u = n("446674"),
        a = n("913144"),
        o = n("850068"),
        i = n("271938"),
        l = n("160299"),
        s = n("357957");
      function c() {
        let e = (0, u.useStateFromStores)([s.default], () =>
            s.default.getDefaultBillingCountryCode()
          ),
          t = (0, u.useStateFromStores)(
            [l.default],
            () => l.default.ipCountryCode
          ),
          n = (0, u.useStateFromStores)([i.default], () =>
            i.default.isAuthenticated()
          );
        return (
          r.useEffect(() => {
            a.default.wait(() => {
              n &&
                !l.default.isPaymentSourceFetching &&
                !s.default.hasFetchedPaymentSources &&
                o.fetchPaymentSources();
            });
          }, [n]),
          r.useEffect(() => {
            n && !l.default.ipCountryCodeLoaded && o.fetchIpCountryCode();
          }, [t, n]),
          { defaultBillingCountryCode: e, ipCountryCode: t }
        );
      }
    },
    497296: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("626301"),
        a = n("552917"),
        o = n("843647"),
        i = n("789946"),
        l = n("646718"),
        s = n("49111"),
        c = n("782340"),
        d = n("965289"),
        f = n("431036");
      function E(e) {
        let { onClose: t, analyticsSource: n, onLearnMore: E, ...p } = e;
        function S() {
          null == E || E(), t(), (0, u.navigateToPremiumMarketingPage)();
        }
        let { isLoading: T, suggestedPremiumType: _ } = (0, o.default)({
            autoTrackExposure: !0,
            experiment: a.default,
            location: "video_backgrounds_upsell",
          }),
          y =
            _ === l.PremiumTypes.TIER_0
              ? l.PremiumSubscriptionSKUs.TIER_0
              : l.PremiumSubscriptionSKUs.TIER_2,
          m =
            y === l.PremiumSubscriptionSKUs.TIER_0
              ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                  onLearnMore: S,
                })
              : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                  onLearnMore: S,
                });
        return (0, r.jsx)(i.default, {
          artURL: f,
          artContainerClassName: d.videoBackgroundArt,
          type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
          title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
          body: m,
          glowUp: m,
          analyticsSource: n,
          analyticsLocation: {
            page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: s.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: t,
          subscriptionTier: y,
          isLoading: T,
          ...p,
        });
      }
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return u;
          },
          Shine: function () {
            return T;
          },
          default: function () {
            return y;
          },
        });
      var r,
        u,
        a = n("37983"),
        o = n("884691"),
        i = n("414456"),
        l = n.n(i),
        s = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        E = n("61435");
      ((r = u || (u = {})).DEFAULT = "default"), (r.SMALL = "small");
      let p = { default: E.shineDefault, small: E.shineSmall },
        S = { default: E.shineInnerDefault, small: E.shineInnerSmall };
      class T extends o.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
          return (0, a.jsx)(s.default.div, {
            ...r,
            className: l(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, a.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: p[t],
              children: (0, a.jsx)("div", { className: S[t] }),
            }),
          });
        }
      }
      T.defaultProps = { shineSize: "default" };
      let _ = e => {
        let {
            children: t,
            className: n,
            disabled: r,
            submitting: u,
            pauseAnimation: i,
            shineSize: s = "default",
            shinePaused: f,
            buttonShineClassName: p,
            onlyShineOnHover: S,
            ..._
          } = e,
          y = o.createRef(),
          m = (0, d.default)(y),
          h = !r && !u && !0 !== i && (!S || m);
        return (0, a.jsxs)(c.Button, {
          buttonRef: y,
          ..._,
          className: l(E.shinyButton, n),
          disabled: r,
          submitting: u,
          children: [
            t,
            h
              ? (0, a.jsx)(T, {
                  shinePaused: f,
                  className: l(
                    E.buttonShine,
                    S ? E.onlyShineOnHover : void 0,
                    p
                  ),
                  shineSize: s,
                })
              : null,
          ],
        });
      };
      _.ShineSizes = u;
      var y = _;
    },
    713518: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchSubscriptionPlansOnNewPaymentSource: function () {
            return E;
          },
          getCurrencies: function () {
            return p;
          },
          planHasCurrency: function () {
            return S;
          },
          useCurrencyWithPaymentSourceChange: function () {
            return T;
          },
        }),
        n("222007");
      var r = n("884691"),
        u = n("627445"),
        a = n.n(u),
        o = n("913144"),
        i = n("775433"),
        l = n("308592"),
        s = n("10514"),
        c = n("719923"),
        d = n("49111"),
        f = n("646718");
      function E(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...f.ACTIVE_PREMIUM_SKUS];
        return null == e || s.default.hasPaymentSourceForSKUIds(e, t)
          ? Promise.resolve()
          : new Promise(e => {
              o.default.wait(async () => {
                await (0, i.fetchSubscriptionPlansBySKUs)(t), e();
              });
            });
      }
      function p(e, t, n) {
        let r,
          u = [],
          o = [],
          i = {
            purchaseType: n
              ? d.PriceSetAssignmentPurchaseTypes.GIFT
              : d.PriceSetAssignmentPurchaseTypes.DEFAULT,
          };
        return (
          a(
            (r = "string" == typeof e ? s.default.get(e) : e),
            "subscription plan not loaded"
          ),
          null != t &&
            s.default.hasPaymentSourceForSKUId(t, r.skuId) &&
            (i.paymentSourceId = t),
          (u = (o = (0, c.experimentalGetPrices)(r.id, i)).map(e => e.currency))
            .length < 1 && (u = [d.CurrencyCodes.USD]),
          u
        );
      }
      function S(e, t, n) {
        let r = s.default.get(e);
        a(null != r, "plan is undefined");
        let u = p(r, n, !1);
        return u.includes(t);
      }
      function T(e, t, n, u, a) {
        let [o, i] = r.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != n
              ? { paymentSourceId: n, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 }
          ),
          c = (0, l.useSubscriptionPlansLoaded)(a);
        r.useEffect(() => {
          let e = async () => {
            await E(n, a);
            let e = [];
            null != t && null != s.default.get(t) && (e = p(t, n, u)),
              e.length > 0
                ? i({ paymentSourceId: n, currency: e[0], loaded: !0 })
                : i({ paymentSourceId: n, loaded: !1 });
          };
          e();
        }, [n, JSON.stringify(a), t, u, c]);
        let d = o.paymentSourceId !== n || null == t || !c || !0 !== o.loaded;
        return {
          hasFetchedSubscriptionPlans: c,
          priceOptions: o,
          setCurrency: e => {
            i({ currency: e });
          },
          currencyLoading: d,
        };
      }
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("669491"),
        a = n("82169");
      let o = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: o = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: i,
            }),
          ],
        });
      };
    },
    265586: function (e, t, n) {
      "use strict";
      var r, u;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return r;
          },
        }),
        ((u = r || (r = {}))[(u.NONE = 100)] = "NONE"),
        (u[(u.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (u[(u.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
    },
  },
]);
//# sourceMappingURL=fe4c37140b0f994720c6.js.map
