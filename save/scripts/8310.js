(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8310"],
  {
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    723251: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          thumbHashToApproximateAspectRatio: function () {
            return u;
          },
          rgbaToDataURL: function () {
            return r;
          },
          thumbHashToDataURL: function () {
            return i;
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
      function u(e) {
        let t = e[3],
          n = 128 & e[2],
          u = 128 & e[4];
        return (u ? (n ? 5 : 7) : 7 & t) / (u ? 7 & t : n ? 5 : 7);
      }
      function r(e, t, n) {
        let u = 4 * e + 1,
          r = 6 + t * (5 + u),
          i = [
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
            r >>> 24,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            73,
            68,
            65,
            84,
            120,
            1,
          ],
          a = [
            0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
            1303535960, 1342533948, -306674912, -267414716, -690576408,
            -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
          ],
          o = 1,
          s = 0;
        for (let e = 0, r = 0, a = u - 1; e < t; e++, a += u - 1)
          for (
            i.push(
              e + 1 < t ? 0 : 1,
              255 & u,
              u >> 8,
              255 & ~u,
              (u >> 8) ^ 255,
              0
            ),
              s = (s + o) % 65521;
            r < a;
            r++
          ) {
            let e = 255 & n[r];
            i.push(e), (s = (s + (o = (o + e) % 65521)) % 65521);
          }
        for (let [e, t] of (i.push(
          s >> 8,
          255 & s,
          o >> 8,
          255 & o,
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
          [37, 41 + r],
        ])) {
          let n = -1;
          for (let u = e; u < t; u++)
            (n ^= i[u]), (n = ((n = (n >>> 4) ^ a[15 & n]) >>> 4) ^ a[15 & n]);
          (n = ~n),
            (i[t++] = n >>> 24),
            (i[t++] = (n >> 16) & 255),
            (i[t++] = (n >> 8) & 255),
            (i[t++] = 255 & n);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...i));
      }
      function i(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: r, cos: i, round: a } = Math,
            o = e[0] | (e[1] << 8) | (e[2] << 16),
            s = e[3] | (e[4] << 8),
            c = (63 & o) / 63,
            l = ((o >> 6) & 63) / 31.5 - 1,
            d = ((o >> 12) & 63) / 31.5 - 1,
            f = o >> 23,
            E = s >> 15,
            _ = r(3, E ? (f ? 5 : 7) : 7 & s),
            S = r(3, E ? 7 & s : f ? 5 : 7),
            I = f ? (15 & e[5]) / 15 : 1,
            p = (e[5] >> 4) / 15,
            T = f ? 6 : 5,
            h = 0,
            m = (t, n, u) => {
              let r = [];
              for (let i = 0; i < n; i++)
                for (let a = i ? 0 : 1; a * n < t * (n - i); a++)
                  r.push(
                    (((e[T + (h >> 1)] >> ((1 & h++) << 2)) & 15) / 7.5 - 1) * u
                  );
              return r;
            },
            A = m(_, S, ((o >> 18) & 31) / 31),
            C = m(3, 3, 1.25 * (((s >> 3) & 63) / 63)),
            R = m(3, 3, 1.25 * (((s >> 9) & 63) / 63)),
            L = f && m(5, 5, p),
            P = u(e),
            y = a(P > 1 ? 32 : 32 * P),
            N = a(P > 1 ? 32 / P : 32),
            U = new Uint8Array(y * N * 4),
            M = [],
            O = [];
          for (let e = 0, u = 0; e < N; e++)
            for (let a = 0; a < y; a++, u += 4) {
              let o = c,
                s = l,
                E = d,
                p = I;
              for (let e = 0, n = r(_, f ? 5 : 3); e < n; e++)
                M[e] = i((t / y) * (a + 0.5) * e);
              for (let n = 0, u = r(S, f ? 5 : 3); n < u; n++)
                O[n] = i((t / N) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < S; e++)
                for (
                  let n = e ? 0 : 1, u = 2 * O[e];
                  n * S < _ * (S - e);
                  n++, t++
                )
                  o += A[t] * M[n] * u;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, u = 2 * O[e]; n < 3 - e; n++, t++) {
                  let e = M[n] * u;
                  (s += C[t] * e), (E += R[t] * e);
                }
              if (f)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, u = 2 * O[e]; n < 5 - e; n++, t++)
                    p += L[t] * M[n] * u;
              let T = o - (2 / 3) * s,
                h = (3 * o - T + E) / 2,
                m = h - E;
              (U[u] = r(0, 255 * n(1, h))),
                (U[u + 1] = r(0, 255 * n(1, m))),
                (U[u + 2] = r(0, 255 * n(1, T))),
                (U[u + 3] = r(0, 255 * n(1, p)));
            }
          return { w: y, h: N, rgba: U };
        })(e);
        return r(t.w, t.h, t.rgba);
      }
    },
    316718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserEntitlementsForApplication: function () {
            return o;
          },
          fetchUserEntitlements: function () {
            return s;
          },
          fetchGiftableEntitlements: function () {
            return c;
          },
        });
      var u = n("872717"),
        r = n("913144"),
        i = n("271560"),
        a = n("49111");
      function o(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          r.default.wait(() => {
            r.default.dispatch({
              type: "ENTITLEMENT_FETCH_APPLICATION_START",
              applicationId: e,
            });
          }),
          u.HTTP.get({
            url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
            oldFormErrors: !0,
            query: { exclude_consumed: t },
          })
            .then(
              t => (
                r.default.dispatch({
                  type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                  applicationId: e,
                  entitlements: t.body,
                }),
                t.body
              )
            )
            .catch(() => {
              r.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: e,
              });
            })
        );
      }
      async function s(e) {
        let {
          withSku: t = !1,
          withApplication: n = !1,
          entitlementType: i,
        } = e;
        r.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
        try {
          let e = await u.HTTP.get({
            url: a.Endpoints.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: n, entitlement_type: i },
          });
          r.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          r.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
        }
      }
      async function c() {
        r.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
        try {
          let e = await (0, i.httpGetWithCountryCodeQuery)({
            url: a.Endpoints.ENTITLEMENTS_GIFTABLE,
          });
          r.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          r.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
        }
      }
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return r;
          },
          updateCardInfo: function () {
            return i;
          },
          clearCardInfo: function () {
            return a;
          },
          updateAddressInfo: function () {
            return o;
          },
          clearError: function () {
            return s;
          },
        });
      var u = n("913144");
      function r(e) {
        u.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function i(e, t) {
        u.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function a() {
        u.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function o(e, t) {
        u.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function s() {
        u.default.wait(() =>
          u.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return r;
          },
        });
      var u = n("913144");
      function r() {
        u.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    202909: function (e, t, n) {
      "use strict";
      n.r(t);
      var u = n("804830");
      n.es(u, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var u = n("782542");
      n.es(u, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var u = n("884691");
      function r(e) {
        let [t, n] = (0, u.useState)(!1),
          r = (0, u.useRef)(e.current);
        return (
          (0, u.useEffect)(() => {
            r.current = e.current;
          }, [e]),
          (0, u.useEffect)(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => n(!0),
              u = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", u),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", u);
              }
            );
          }, [r]),
          t
        );
      }
    },
    606292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDecorationSizeForAvatarSize: function () {
            return s;
          },
          openAvatarDecorationModal: function () {
            return c;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("77078"),
        i = n("393414");
      n("103603");
      var a = n("573135"),
        o = n("49111");
      function s(e) {
        return "number" != typeof e
          ? (0, r.getAvatarSize)(e) * a.DECORATION_TO_AVATAR_RATIO
          : e * a.DECORATION_TO_AVATAR_RATIO;
      }
      let c = e => {
        let {
          analyticsLocations: t,
          initialSelectedDecoration: a,
          isTryItOutFlow: s,
          guild: c,
        } = e;
        (0, r.openModalLazy)(async () => {
          (0, i.getHistory)().location.pathname ===
            o.Routes.COLLECTIBLES_SHOP_FULLSCREEN &&
            (0, i.transitionTo)(o.Routes.APP);
          let { default: e } = await n.el("791050").then(n.bind(n, "791050"));
          return n =>
            (0, u.jsx)(e, {
              ...n,
              analyticsLocations: t,
              initialSelectedDecoration: a,
              isTryItOutFlow: s,
              guild: c,
            });
        }, {});
      };
    },
    619935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlockedPaymentsConfig: function () {
            return o;
          },
          default: function () {
            return s;
          },
        });
      var u = n("862205"),
        r = n("15733");
      let i = (0, u.createExperiment)({
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
        a = (0, u.createExperiment)({
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
      function o() {
        let { paymentsBlocked: e } = i.useExperiment(
            { location: "c519a9_1" },
            { autoTrackExposure: !1 }
          ),
          { checkPaymentSource: t } = a.useExperiment(
            { location: "c519a9_2" },
            { autoTrackExposure: !1 }
          ),
          { defaultBillingCountryCode: n } = (0, r.default)();
        return e || (t && "RU" === n);
      }
      var s = i;
    },
    308592: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSubscriptionPlansLoaded: function () {
            return l;
          },
          getSubscriptionPlansLoaded: function () {
            return d;
          },
        }),
        n("222007");
      var u = n("446674"),
        r = n("605250"),
        i = n("357957"),
        a = n("10514"),
        o = n("521012"),
        s = n("646718");
      new r.default("useSubscriptionPlansLoaded");
      let c = e => {};
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [...s.ACTIVE_PREMIUM_SKUS];
        return (0, u.useStateFromStores)(
          [i.default, a.default, o.default],
          () => d(e, [i.default, a.default, o.default]),
          [e]
        );
      }
      function d() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [...s.ACTIVE_PREMIUM_SKUS],
          [n, u, r] =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [i.default, a.default, o.default],
          l = n.paymentSourceIds,
          d = n.defaultPaymentSourceId,
          f = u.isLoadedForSKUs(t),
          E =
            null === (e = r.getPremiumTypeSubscription()) || void 0 === e
              ? void 0
              : e.paymentSourceId;
        if (null != E && !u.hasPaymentSourceForSKUIds(E, t))
          return (
            c(
              "subscription payment source "
                .concat(E, " not loaded for ")
                .concat(t)
            ),
            !1
          );
        if (null != d && !u.hasPaymentSourceForSKUIds(d, t))
          return (
            c(
              "default payment source ".concat(d, " not loaded for ").concat(t)
            ),
            !1
          );
        for (let e of l)
          if (!u.hasPaymentSourceForSKUIds(e, t))
            return (
              c("payment source ".concat(e, " not loaded for ").concat(t)), !1
            );
        return c("isLoadedForSKUs ".concat(f)), f;
      }
    },
    75015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UploadTypes: function () {
            return i;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return s;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return c;
          },
          USER_BANNER_MAX_HEIGHT: function () {
            return l;
          },
          GUILD_BANNER_MAX_WIDTH: function () {
            return d;
          },
          GUILD_BANNER_MAX_HEIGHT: function () {
            return f;
          },
          SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function () {
            return E;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return _;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return S;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return I;
          },
          BANNER_ASPECT_RATIO: function () {
            return p;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return T;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return h;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return m;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return A;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return C;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return R;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return L;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return P;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return y;
          },
          MessageTypes: function () {
            return a;
          },
        });
      var u,
        r,
        i,
        a,
        o = n("917219");
      ((u = i || (i = {}))[(u.AVATAR = 0)] = "AVATAR"),
        (u[(u.BANNER = 1)] = "BANNER"),
        (u[(u.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (u[(u.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (u[(u.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (u[(u.HOME_HEADER = 5)] = "HOME_HEADER"),
        (u[(u.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let s = 568,
        c = 2400,
        l = 848,
        d = 2400,
        f = 1350,
        E = 2400,
        _ = 960,
        S = 2400,
        I = 600,
        p = 17 / 6,
        T = 16 / 9,
        h = 2.5,
        m = 4,
        A = s / p,
        C = s / T,
        R = s / h,
        L = s / m,
        P =
          o.BACKGROUND_REPLACEMENT_SIZE.width /
          o.BACKGROUND_REPLACEMENT_SIZE.height,
        y = s / P;
      ((r = a || (a = {}))[(r.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (r[(r.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (r[(r.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
    854381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var u = n("446674"),
        r = n("10514"),
        i = n("713518"),
        a = n("646718"),
        o = n("843455");
      function s(e) {
        var t, n;
        let {
          activeSubscription: s,
          skuIDs: c,
          paymentSourceId: l,
          isGift: d,
        } = e;
        c = c.filter(e => e !== a.PremiumSubscriptionSKUs.NONE);
        let f = (0, u.useStateFromStores)([r.default], () => {
            let e = r.default
              .getPlanIdsForSkus(c)
              .filter(e => !d || a.PREMIUM_PLANS.has(e));
            return e.length > 0 ? r.default.get(e[0]) : null;
          }),
          E = null == f ? [] : (0, i.getCurrencies)(f.id, l, d),
          _ =
            null !==
              (n =
                null !==
                  (t = E.find(e => e === (null == s ? void 0 : s.currency))) &&
                void 0 !== t
                  ? t
                  : E[0]) && void 0 !== n
              ? n
              : o.CurrencyCodes.USD;
        return {
          ...(0, i.useCurrencyWithPaymentSourceChange)(
            _,
            null == f ? void 0 : f.id,
            l,
            d,
            c
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
            return o;
          },
        }),
        n("222007");
      var u = n("884691"),
        r = n("446674"),
        i = n("850068"),
        a = n("357957");
      function o(e) {
        let { isGift: t, activeSubscription: n } = e,
          {
            defaultPaymentSourceId: o,
            paymentSources: s,
            hasFetchedPaymentSources: c,
          } = (0, r.useStateFromStoresObject)([a.default], () => ({
            defaultPaymentSourceId: a.default.defaultPaymentSourceId,
            paymentSources: a.default.paymentSources,
            hasFetchedPaymentSources: a.default.hasFetchedPaymentSources,
          })),
          l = (e, t, n) =>
            e || (null == t ? void 0 : t.paymentSourceId) == null
              ? n
              : t.paymentSourceId,
          [d, f] = u.useState(() => l(t, n, o));
        return (
          u.useEffect(() => {
            c ? f(l(t, n, o)) : (0, i.fetchPaymentSources)();
          }, [c, t, n, o]),
          {
            paymentSources: s,
            hasPaymentSources: Object.keys(s).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: c,
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
      var u = n("37983");
      n("884691");
      var r = n("748820"),
        i = n("77078"),
        a = n("112679"),
        o = n("55689"),
        s = n("676379"),
        c = n("697218"),
        l = n("599110"),
        d = n("659500"),
        f = n("719923"),
        E = n("49111"),
        _ = n("646718");
      function S(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: S,
            onClose: I,
            onComplete: p,
            onSubscriptionConfirmation: T,
            analyticsLocations: h,
            analyticsObject: m,
            analyticsLocation: A,
            analyticsSourceLocation: C,
            isGift: R = !1,
            giftMessage: L,
            subscriptionTier: P,
            trialId: y,
            postSuccessGuild: N,
            openInvoiceId: U,
            applicationId: M,
            referralTrialOfferId: O,
            giftRecipient: g,
            returnRef: v,
            subscription: H,
          } = null != e ? e : {},
          F = !1,
          D = (0, r.v4)(),
          b = c.default.getCurrentUser(),
          G = (0, f.isPremiumExactly)(b, _.PremiumTypes.TIER_2);
        (0, i.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...i } = n;
              return (0, u.jsx)(e, {
                ...i,
                loadId: D,
                subscriptionTier: P,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(P),
                isGift: R,
                giftMessage: L,
                giftRecipient: g,
                initialPlanId: t,
                followupSKUInfo: S,
                onClose: (e, t) => {
                  r(),
                    null == I || I(e),
                    e &&
                      (null == T || T(),
                      !R &&
                        null != t &&
                        t === _.PremiumSubscriptionSKUs.TIER_2 &&
                        !G &&
                        d.ComponentDispatch.dispatch(
                          E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (F = !0),
                    null == p || p(),
                    !R && (0, s.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: T,
                analyticsLocations: h,
                analyticsObject: m,
                analyticsLocation: A,
                analyticsSourceLocation: C,
                trialId: y,
                postSuccessGuild: N,
                planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: U,
                applicationId: M,
                referralTrialOfferId: O,
                returnRef: v,
                subscription: H,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !F &&
                l.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: D,
                  payment_type:
                    E.PurchaseTypeToAnalyticsPaymentType[
                      E.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != A ? A : m,
                  source: C,
                  subscription_type: E.SubscriptionTypes.PREMIUM,
                  is_gift: R,
                  eligible_for_trial: null != y,
                  application_id: M,
                  location_stack: h,
                }),
                (0, a.clearError)(),
                (0, o.clearPurchaseTokenAuthState)(),
                null == I || I(F),
                F && (null == T || T());
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
            return r;
          },
        });
      var u = n("913144");
      let r = e => {
        u.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    716849: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NON_SUBSCRIBER_SENTINEL: function () {
            return S;
          },
          maybeFetchPremiumLikelihood: function () {
            return p;
          },
          useMaybeFetchPremiumLikelihood: function () {
            return T;
          },
        });
      var u = n("884691"),
        r = n("65597"),
        i = n("872717"),
        a = n("913144"),
        o = n("775433"),
        s = n("697218"),
        c = n("10514"),
        l = n("764364"),
        d = n("719923"),
        f = n("676572"),
        E = n("646718"),
        _ = n("49111");
      let S = "nonSubscriber";
      async function I() {
        try {
          a.default.dispatch({ type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH" });
          let { body: e } = await i.HTTP.get({
            url: _.Endpoints.USER_PREMIUM_LIKELIHOOD,
          });
          a.default.dispatch({
            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
            premiumLikelihood: (function (e) {
              return {
                [S]: e.non_subscriber,
                [E.PremiumSubscriptionSKUs.TIER_0]:
                  e[E.PremiumSubscriptionSKUs.TIER_0],
                [E.PremiumSubscriptionSKUs.TIER_2]:
                  e[E.PremiumSubscriptionSKUs.TIER_2],
              };
            })(e),
          });
        } catch (e) {
          404 === e.status
            ? a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
              })
            : a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR",
              });
        }
      }
      function p(e) {
        let { enabled: t, useExpectedValue: n } = e.getCurrentConfig(
            { location: "443cca_1" },
            { autoTrackExposure: !1 }
          ),
          u = f.default.shouldFetchPremiumLikelihood(),
          r = s.default.getCurrentUser();
        h(r, u, t, n);
      }
      function T(e) {
        let { enabled: t, useExpectedValue: n } = e.useExperiment(
            { location: "443cca_2" },
            { autoTrackExposure: !1 }
          ),
          i = (0, r.useStateFromStores)([f.default], () =>
            f.default.shouldFetchPremiumLikelihood()
          ),
          a = (0, r.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          );
        u.useEffect(() => {
          h(a, i, t, n);
        }, [a, i, t, n]);
      }
      function h(e, t, n, u) {
        null != e &&
          !(0, l.isPremium)(e) &&
          n &&
          (t && I(),
          u &&
            (!c.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                E.PremiumSubscriptionSKUs.TIER_0
              )
            ) &&
              !c.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  E.PremiumSubscriptionSKUs.TIER_0
                )
              ) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  E.PremiumSubscriptionSKUs.TIER_0
                )
              ),
            !c.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                E.PremiumSubscriptionSKUs.TIER_2
              )
            ) &&
              !c.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  E.PremiumSubscriptionSKUs.TIER_2
                )
              ) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  E.PremiumSubscriptionSKUs.TIER_2
                )
              )));
      }
    },
    676572: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var u = n("446674"),
        r = n("913144");
      let i = { premiumLikelihood: void 0, isFetching: !1, fetched: !1 },
        a = i;
      class o extends u.default.Store {
        initialize() {
          a = i;
        }
        getState() {
          return a;
        }
        shouldFetchPremiumLikelihood() {
          return !a.isFetching && !a.fetched;
        }
      }
      o.displayName = "UserPremiumLikelihoodStore";
      var s = new o(r.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function () {
          a.isFetching = !0;
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function (e) {
          let { premiumLikelihood: t } = e;
          (a.premiumLikelihood = t), (a.fetched = !0), (a.isFetching = !1);
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function () {
          a.isFetching = !1;
        },
        LOGOUT: function () {
          a.premiumLikelihood = void 0;
        },
      });
    },
    552917: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var u = n("862205");
      let r = (0, u.createExperiment)({
        kind: "user",
        id: "2022-12_premium_targeted_upsells",
        label: "Premium Targeted Upsells",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Use highest expected value to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !0, useLikelihood: !1 },
          },
          {
            id: 2,
            label: "Use highest likelihood to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !1, useLikelihood: !0 },
          },
        ],
      });
      var i = r;
    },
    15733: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var u = n("884691"),
        r = n("446674"),
        i = n("913144"),
        a = n("850068"),
        o = n("271938"),
        s = n("160299"),
        c = n("357957");
      function l() {
        let e = (0, r.useStateFromStores)([c.default], () =>
            c.default.getDefaultBillingCountryCode()
          ),
          t = (0, r.useStateFromStores)(
            [s.default],
            () => s.default.ipCountryCode
          ),
          n = (0, r.useStateFromStores)([o.default], () =>
            o.default.isAuthenticated()
          );
        return (
          u.useEffect(() => {
            i.default.wait(() => {
              n &&
                !s.default.isPaymentSourceFetching &&
                !c.default.hasFetchedPaymentSources &&
                a.fetchPaymentSources();
            });
          }, [n]),
          u.useEffect(() => {
            n && !s.default.ipCountryCodeLoaded && a.fetchIpCountryCode();
          }, [t, n]),
          { defaultBillingCountryCode: e, ipCountryCode: t }
        );
      }
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return r;
          },
          Shine: function () {
            return I;
          },
          default: function () {
            return T;
          },
        });
      var u,
        r,
        i = n("37983"),
        a = n("884691"),
        o = n("414456"),
        s = n.n(o),
        c = n("458960"),
        l = n("77078"),
        d = n("252744"),
        f = n("145131"),
        E = n("61435");
      ((u = r || (r = {})).DEFAULT = "default"), (u.SMALL = "small");
      let _ = { default: E.shineDefault, small: E.shineSmall },
        S = { default: E.shineInnerDefault, small: E.shineInnerSmall };
      class I extends a.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...u } = this.props;
          return (0, i.jsx)(c.default.div, {
            ...u,
            className: s(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, i.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: _[t],
              children: (0, i.jsx)("div", { className: S[t] }),
            }),
          });
        }
      }
      I.defaultProps = { shineSize: "default" };
      let p = e => {
        let {
            children: t,
            className: n,
            disabled: u,
            submitting: r,
            pauseAnimation: o,
            shineSize: c = "default",
            shinePaused: f,
            buttonShineClassName: _,
            onlyShineOnHover: S,
            ...p
          } = e,
          T = a.createRef(),
          h = (0, d.default)(T),
          m = !u && !r && !0 !== o && (!S || h);
        return (0, i.jsxs)(l.Button, {
          buttonRef: T,
          ...p,
          className: s(E.shinyButton, n),
          disabled: u,
          submitting: r,
          children: [
            t,
            m
              ? (0, i.jsx)(I, {
                  shinePaused: f,
                  className: s(
                    E.buttonShine,
                    S ? E.onlyShineOnHover : void 0,
                    _
                  ),
                  shineSize: c,
                })
              : null,
          ],
        });
      };
      p.ShineSizes = r;
      var T = p;
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return a;
          },
          useUID: function () {
            return o;
          },
          UID: function () {
            return s;
          },
        });
      var u = n("995008"),
        r = n.n(u),
        i = n("775560");
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        o = () => (0, i.useLazyValue)(() => a()),
        s = e => {
          let { children: t } = e;
          return t(o());
        };
    },
    216422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("469563"),
        i = n("202909"),
        a = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              viewBox: i = "0 0 24 24",
              foreground: o,
              ...s
            } = e;
            return (0, u.jsx)("svg", {
              ...(0, a.default)(s),
              width: t,
              height: n,
              viewBox: i,
              children: (0, u.jsx)("path", {
                className: o,
                fill: r,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          i.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    719347: function (e, t, n) {
      "use strict";
      var u, r;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return i;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return a;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return o;
          },
          MediaLayoutType: function () {
            return u;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return s;
          },
        });
      let i = 550,
        a = 350,
        o = 40;
      ((r = u || (u = {})).STATIC = "STATIC"),
        (r.RESPONSIVE = "RESPONSIVE"),
        (r.MOSAIC = "MOSAIC");
      let s = 20;
    },
    713518: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchSubscriptionPlansOnNewPaymentSource: function () {
            return E;
          },
          getCurrencies: function () {
            return _;
          },
          planHasCurrency: function () {
            return S;
          },
          useCurrencyWithPaymentSourceChange: function () {
            return I;
          },
        }),
        n("222007");
      var u = n("884691"),
        r = n("627445"),
        i = n.n(r),
        a = n("913144"),
        o = n("775433"),
        s = n("308592"),
        c = n("10514"),
        l = n("719923"),
        d = n("49111"),
        f = n("646718");
      function E(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...f.ACTIVE_PREMIUM_SKUS];
        return null == e || c.default.hasPaymentSourceForSKUIds(e, t)
          ? Promise.resolve()
          : new Promise(e => {
              a.default.wait(async () => {
                await (0, o.fetchSubscriptionPlansBySKUs)(t), e();
              });
            });
      }
      function _(e, t, n) {
        let u,
          r = [],
          a = [],
          o = {
            purchaseType: n
              ? d.PriceSetAssignmentPurchaseTypes.GIFT
              : d.PriceSetAssignmentPurchaseTypes.DEFAULT,
          };
        return (
          i(
            (u = "string" == typeof e ? c.default.get(e) : e),
            "subscription plan not loaded"
          ),
          null != t &&
            c.default.hasPaymentSourceForSKUId(t, u.skuId) &&
            (o.paymentSourceId = t),
          (r = (a = (0, l.experimentalGetPrices)(u.id, o)).map(e => e.currency))
            .length < 1 && (r = [d.CurrencyCodes.USD]),
          r
        );
      }
      function S(e, t, n) {
        let u = c.default.get(e);
        i(null != u, "plan is undefined");
        let r = _(u, n, !1);
        return r.includes(t);
      }
      function I(e, t, n, r, i) {
        let [a, o] = u.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != n
              ? { paymentSourceId: n, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 }
          ),
          l = (0, s.useSubscriptionPlansLoaded)(i);
        u.useEffect(() => {
          let e = async () => {
            await E(n, i);
            let e = [];
            null != t && null != c.default.get(t) && (e = _(t, n, r)),
              e.length > 0
                ? o({ paymentSourceId: n, currency: e[0], loaded: !0 })
                : o({ paymentSourceId: n, loaded: !1 });
          };
          e();
        }, [n, JSON.stringify(i), t, r, l]);
        let d = a.paymentSourceId !== n || null == t || !l || !0 !== a.loaded;
        return {
          hasFetchedSubscriptionPlans: l,
          priceOptions: a,
          setCurrency: e => {
            o({ currency: e });
          },
          currencyLoading: d,
        };
      }
    },
    804830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NitroWheelIcon: function () {
            return a;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...s
        } = e;
        return (0, u.jsxs)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, u.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: o,
            }),
            (0, u.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, u.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: o,
            }),
          ],
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return a;
          },
        });
      var u = n("37983");
      n("884691");
      var r = n("669491"),
        i = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...s
        } = e;
        return (0, u.jsxs)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, u.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, u.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=820967c69ccaea9b09fb.js.map
