(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9618"],
  {
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    190389: function (e, t, n) {
      "use strict";
      e.exports = n.p + "10edc9054f6bb1a7de74.svg";
    },
    723251: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          thumbHashToApproximateAspectRatio: function () {
            return r;
          },
          rgbaToDataURL: function () {
            return l;
          },
          thumbHashToDataURL: function () {
            return s;
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
      function l(e, t, n) {
        let r = 4 * e + 1,
          l = 6 + t * (5 + r),
          s = [
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
            l >>> 24,
            (l >> 16) & 255,
            (l >> 8) & 255,
            255 & l,
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
          i = 1,
          o = 0;
        for (let e = 0, l = 0, a = r - 1; e < t; e++, a += r - 1)
          for (
            s.push(
              e + 1 < t ? 0 : 1,
              255 & r,
              r >> 8,
              255 & ~r,
              (r >> 8) ^ 255,
              0
            ),
              o = (o + i) % 65521;
            l < a;
            l++
          ) {
            let e = 255 & n[l];
            s.push(e), (o = (o + (i = (i + e) % 65521)) % 65521);
          }
        for (let [e, t] of (s.push(
          o >> 8,
          255 & o,
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
          [37, 41 + l],
        ])) {
          let n = -1;
          for (let r = e; r < t; r++)
            (n ^= s[r]), (n = ((n = (n >>> 4) ^ a[15 & n]) >>> 4) ^ a[15 & n]);
          (n = ~n),
            (s[t++] = n >>> 24),
            (s[t++] = (n >> 16) & 255),
            (s[t++] = (n >> 8) & 255),
            (s[t++] = 255 & n);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...s));
      }
      function s(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: l, cos: s, round: a } = Math,
            i = e[0] | (e[1] << 8) | (e[2] << 16),
            o = e[3] | (e[4] << 8),
            u = (63 & i) / 63,
            c = ((i >> 6) & 63) / 31.5 - 1,
            d = ((i >> 12) & 63) / 31.5 - 1,
            E = i >> 23,
            _ = o >> 15,
            f = l(3, _ ? (E ? 5 : 7) : 7 & o),
            T = l(3, _ ? 7 & o : E ? 5 : 7),
            I = E ? (15 & e[5]) / 15 : 1,
            R = (e[5] >> 4) / 15,
            p = E ? 6 : 5,
            A = 0,
            S = (t, n, r) => {
              let l = [];
              for (let s = 0; s < n; s++)
                for (let a = s ? 0 : 1; a * n < t * (n - s); a++)
                  l.push(
                    (((e[p + (A >> 1)] >> ((1 & A++) << 2)) & 15) / 7.5 - 1) * r
                  );
              return l;
            },
            C = S(f, T, ((i >> 18) & 31) / 31),
            M = S(3, 3, 1.25 * (((o >> 3) & 63) / 63)),
            N = S(3, 3, 1.25 * (((o >> 9) & 63) / 63)),
            m = E && S(5, 5, R),
            P = r(e),
            h = a(P > 1 ? 32 : 32 * P),
            L = a(P > 1 ? 32 / P : 32),
            O = new Uint8Array(h * L * 4),
            U = [],
            D = [];
          for (let e = 0, r = 0; e < L; e++)
            for (let a = 0; a < h; a++, r += 4) {
              let i = u,
                o = c,
                _ = d,
                R = I;
              for (let e = 0, n = l(f, E ? 5 : 3); e < n; e++)
                U[e] = s((t / h) * (a + 0.5) * e);
              for (let n = 0, r = l(T, E ? 5 : 3); n < r; n++)
                D[n] = s((t / L) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < T; e++)
                for (
                  let n = e ? 0 : 1, r = 2 * D[e];
                  n * T < f * (T - e);
                  n++, t++
                )
                  i += C[t] * U[n] * r;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, r = 2 * D[e]; n < 3 - e; n++, t++) {
                  let e = U[n] * r;
                  (o += M[t] * e), (_ += N[t] * e);
                }
              if (E)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, r = 2 * D[e]; n < 5 - e; n++, t++)
                    R += m[t] * U[n] * r;
              let p = i - (2 / 3) * o,
                A = (3 * i - p + _) / 2,
                S = A - _;
              (O[r] = l(0, 255 * n(1, A))),
                (O[r + 1] = l(0, 255 * n(1, S))),
                (O[r + 2] = l(0, 255 * n(1, p))),
                (O[r + 3] = l(0, 255 * n(1, R)));
            }
          return { w: h, h: L, rgba: O };
        })(e);
        return l(t.w, t.h, t.rgba);
      }
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return l;
          },
          updateCardInfo: function () {
            return s;
          },
          clearCardInfo: function () {
            return a;
          },
          updateAddressInfo: function () {
            return i;
          },
          clearError: function () {
            return o;
          },
        });
      var r = n("913144");
      function l(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function s(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function a() {
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
      function o() {
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
            return l;
          },
        });
      var r = n("913144");
      function l() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    812952: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var r,
        l,
        s,
        a,
        i = n("37983"),
        o = n("884691"),
        u = n("414456"),
        c = n.n(u),
        d = n("145131"),
        E = n("138592");
      ((r = s || (s = {})).PRIMARY = "primary"),
        (r.SECONDARY = "secondary"),
        (r.WARNING = "warning"),
        (r.ERROR = "error"),
        ((l = a || (a = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let _ = {
          primary: E.colorPrimary,
          secondary: E.colorSecondary,
          warning: E.colorWarning,
          error: E.colorError,
        },
        f = { small: E.small, large: E.large, none: null };
      class T extends o.PureComponent {
        render() {
          let {
            icon: e,
            color: t,
            children: n,
            iconSize: r,
            className: l,
            iconClassName: s,
          } = this.props;
          return (0, i.jsxs)(d.default, {
            className: c(E.note, _[t], l),
            align: d.default.Align.CENTER,
            children: [
              (0, i.jsx)(e, { className: c(E.icon, f[r], s) }),
              (0, i.jsx)("div", { children: n }),
            ],
          });
        }
      }
      (T.Colors = s), (T.Sizes = a);
      var I = T;
    },
    470131: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("766388");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    65969: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("224745");
      n.es(r, t);
    },
    606292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDecorationSizeForAvatarSize: function () {
            return o;
          },
          openAvatarDecorationModal: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("77078"),
        s = n("393414");
      n("103603");
      var a = n("573135"),
        i = n("49111");
      function o(e) {
        return "number" != typeof e
          ? (0, l.getAvatarSize)(e) * a.DECORATION_TO_AVATAR_RATIO
          : e * a.DECORATION_TO_AVATAR_RATIO;
      }
      let u = e => {
        let {
          analyticsLocations: t,
          initialSelectedDecoration: a,
          isTryItOutFlow: o,
          guild: u,
        } = e;
        (0, l.openModalLazy)(async () => {
          (0, s.getHistory)().location.pathname ===
            i.Routes.COLLECTIBLES_SHOP_FULLSCREEN &&
            (0, s.transitionTo)(i.Routes.APP);
          let { default: e } = await n.el("791050").then(n.bind(n, "791050"));
          return n =>
            (0, r.jsx)(e, {
              ...n,
              analyticsLocations: t,
              initialSelectedDecoration: a,
              isTryItOutFlow: o,
              guild: u,
            });
        }, {});
      };
    },
    75015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UploadTypes: function () {
            return s;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return o;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return u;
          },
          USER_BANNER_MAX_HEIGHT: function () {
            return c;
          },
          GUILD_BANNER_MAX_WIDTH: function () {
            return d;
          },
          GUILD_BANNER_MAX_HEIGHT: function () {
            return E;
          },
          SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function () {
            return _;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return f;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return T;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return I;
          },
          BANNER_ASPECT_RATIO: function () {
            return R;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return p;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return A;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return S;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return C;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return M;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return N;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return m;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return P;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return h;
          },
          MessageTypes: function () {
            return a;
          },
        });
      var r,
        l,
        s,
        a,
        i = n("917219");
      ((r = s || (s = {}))[(r.AVATAR = 0)] = "AVATAR"),
        (r[(r.BANNER = 1)] = "BANNER"),
        (r[(r.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (r[(r.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (r[(r.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (r[(r.HOME_HEADER = 5)] = "HOME_HEADER"),
        (r[(r.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let o = 568,
        u = 2400,
        c = 848,
        d = 2400,
        E = 1350,
        _ = 2400,
        f = 960,
        T = 2400,
        I = 600,
        R = 17 / 6,
        p = 16 / 9,
        A = 2.5,
        S = 4,
        C = o / R,
        M = o / p,
        N = o / A,
        m = o / S,
        P =
          i.BACKGROUND_REPLACEMENT_SIZE.width /
          i.BACKGROUND_REPLACEMENT_SIZE.height,
        h = o / P;
      ((l = a || (a = {}))[(l.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (l[(l.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (l[(l.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
    153727: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("881410");
      var r = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        a = n("454589"),
        i = n("642906"),
        o = n("85336"),
        u = n("696034");
      function c(e) {
        let { className: t, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: c,
            startedPaymentFlowWithPaymentSourcesRef: d,
          } = (0, i.usePaymentContext)();
        if (null == c || 0 === c.length) return null;
        let E = c.flatMap(e => {
          let t = e.useBreadcrumbLabel(n);
          return null != t ? { id: e.id, label: t } : [];
        });
        return 0 === E.length
          ? null
          : ((E = E.filter(e => {
              let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
                r = e.id === o.Step.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (t || r));
            })),
            (0, r.jsx)("div", {
              className: s("breadcrumb", u.wrapper, t),
              children: (0, r.jsx)(a.default, { activeId: l, breadcrumbs: E }),
            }));
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("748820"),
        s = n("77078"),
        a = n("112679"),
        i = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        E = n("719923"),
        _ = n("49111"),
        f = n("646718");
      function T(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: T,
            onClose: I,
            onComplete: R,
            onSubscriptionConfirmation: p,
            analyticsLocations: A,
            analyticsObject: S,
            analyticsLocation: C,
            analyticsSourceLocation: M,
            isGift: N = !1,
            giftMessage: m,
            subscriptionTier: P,
            trialId: h,
            postSuccessGuild: L,
            openInvoiceId: O,
            applicationId: U,
            referralTrialOfferId: D,
            giftRecipient: v,
            returnRef: x,
            subscription: g,
          } = null != e ? e : {},
          H = !1,
          y = (0, l.v4)(),
          j = u.default.getCurrentUser(),
          b = (0, E.isPremiumExactly)(j, f.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: l, ...s } = n;
              return (0, r.jsx)(e, {
                ...s,
                loadId: y,
                subscriptionTier: P,
                skuId: (0, E.castPremiumSubscriptionAsSkuId)(P),
                isGift: N,
                giftMessage: m,
                giftRecipient: v,
                initialPlanId: t,
                followupSKUInfo: T,
                onClose: (e, t) => {
                  l(),
                    null == I || I(e),
                    e &&
                      (null == p || p(),
                      !N &&
                        null != t &&
                        t === f.PremiumSubscriptionSKUs.TIER_2 &&
                        !b &&
                        d.ComponentDispatch.dispatch(
                          _.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (H = !0),
                    null == R || R(),
                    !N && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: p,
                analyticsLocations: A,
                analyticsObject: S,
                analyticsLocation: C,
                analyticsSourceLocation: M,
                trialId: h,
                postSuccessGuild: L,
                planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: O,
                applicationId: U,
                referralTrialOfferId: D,
                returnRef: x,
                subscription: g,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !H &&
                c.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: y,
                  payment_type:
                    _.PurchaseTypeToAnalyticsPaymentType[
                      _.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != C ? C : S,
                  source: M,
                  subscription_type: _.SubscriptionTypes.PREMIUM,
                  is_gift: N,
                  eligible_for_trial: null != h,
                  application_id: U,
                  location_stack: A,
                }),
                (0, a.clearError)(),
                (0, i.clearPurchaseTokenAuthState)(),
                null == I || I(H),
                H && (null == p || p());
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
            return l;
          },
        });
      var r = n("913144");
      let l = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    273619: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("37983"),
        l = n("884691"),
        s = n("41092"),
        a = n("414456"),
        i = n.n(a),
        o = n("862337"),
        u = n("77078"),
        c = n("812952"),
        d = n("448993"),
        E = n("736978"),
        _ = n("642906"),
        f = n("85336");
      n("153727"), n("650484");
      var T = n("454589"),
        I = n("978679"),
        R = n("745279"),
        p = n("718517"),
        A = n("49111"),
        S = n("782340"),
        C = n("540700");
      let M = new Set([
        f.Step.SKU_SELECT,
        f.Step.AWAITING_AUTHENTICATION,
        f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
        f.Step.CONFIRM,
      ]);
      function N(e) {
        let {
            steps: t,
            currentStep: n,
            body: a,
            paymentError: N,
            header: m,
            footer: P,
            isGift: h = !1,
            giftMessage: L = S.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: O = !1,
            isLoading: U = !1,
            purchaseError: D,
            purchaseErrorBlockRef: v,
            planError: x,
            onScroll: g,
            scrollerClassName: H,
            hasCurrencies: y = !1,
          } = e,
          j = null;
        null != N && null == (0, f.errorToStep)(N)
          ? (j = N)
          : null != D
            ? (j = D)
            : null != x && (j = x);
        let b = null != j ? j.message : "";
        null != j &&
          j instanceof d.BillingError &&
          (j.code === E.ErrorCodes.CARD_DECLINED &&
            y &&
            (b += " ".concat(S.default.Messages.BILLING_ERROR_TRY_ANOTHER)),
          j.code === E.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (b = S.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          j.code === A.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (b = S.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: B } = (0, _.usePaymentContext)();
        U = U || null == B;
        let G = l.useRef(new o.Timeout());
        l.useEffect(() => {
          let e = G.current;
          return (
            null != B || e.isStarted()
              ? null != B && e.stop()
              : e.start(10 * p.default.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, R.captureBillingException)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [B]);
        let V = t.includes(f.Step.PAYMENT_TYPE)
          ? f.Step.PAYMENT_TYPE
          : f.Step.ADD_PAYMENT_STEPS;
        return (0, r.jsxs)(s.Elements, {
          options: A.StripeElementsOptions,
          stripe: B,
          children: [
            m,
            (0, r.jsxs)("div", {
              className: i("paymentModalContent", C.content),
              children: [
                h && n !== f.Step.CONFIRM
                  ? (0, r.jsx)(c.default, {
                      className: C.paymentNote,
                      iconSize: c.default.Sizes.SMALL,
                      icon: I.default,
                      color:
                        null == L
                          ? c.default.Colors.PRIMARY
                          : c.default.Colors.SECONDARY,
                      children: L,
                    })
                  : null,
                O
                  ? null
                  : (0, r.jsx)("div", {
                      className: C.breadcrumbsWrapper,
                      children: (0, r.jsx)(T.default, {
                        activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n)
                          ? V
                          : n,
                        breadcrumbs: t
                          .filter(
                            e =>
                              !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) &&
                              !M.has(e)
                          )
                          .map(e => ({
                            id: e,
                            label: (0, f.getLabelForStep)(e),
                          })),
                      }),
                    }),
                (0, r.jsxs)("div", {
                  className: C.bodyWrapper,
                  children: [
                    null == j
                      ? null
                      : (0, r.jsx)("div", {
                          className: C.errorBlockWrapper,
                          children: (0, r.jsx)(u.FormErrorBlock, {
                            ref: v,
                            children: b,
                          }),
                        }),
                    U
                      ? (0, r.jsx)(u.Spinner, { className: C.loadingBlock })
                      : (0, r.jsx)(u.Sequencer, {
                          className: C.sequencer,
                          staticClassName: C.sequencerStatic,
                          animatedNodeClassName: C.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: t,
                          sideMargin: 20,
                          children: (0, r.jsx)(u.AdvancedScrollerThin, {
                            onScroll: g,
                            className: i(C.scroller, H),
                            children: a,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            P,
          ],
        });
      }
    },
    674158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        a = n("870984");
      function i(e) {
        let { icon: t, iconClassName: n, description: l, color: i } = e;
        return (0, r.jsxs)("div", {
          className: a.perkRow,
          children: [
            (0, r.jsx)("div", {
              className: a.perkIconContainer,
              children: (0, r.jsx)(t, {
                color: i,
                className: s(a.perkIcon, n),
              }),
            }),
            (0, r.jsx)("div", { className: a.perkDescription, children: l }),
          ],
        });
      }
    },
    122846: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        });
      var r = n("37983"),
        l = n("884691"),
        s = n("414456"),
        a = n.n(s),
        i = n("446674"),
        o = n("77078"),
        u = n("913144"),
        c = n("850068"),
        d = n("775433"),
        E = n("308592"),
        _ = n("642906"),
        f = n("85336"),
        T = n("552917"),
        I = n("843647"),
        R = n("154889"),
        p = n("917247"),
        A = n("956597"),
        S = n("635956"),
        C = n("273619"),
        M = n("674158"),
        N = n("915639"),
        m = n("357957"),
        P = n("326880"),
        h = n("46829"),
        L = n("595086"),
        O = n("240481"),
        U = n("719923"),
        D = n("153160"),
        v = n("49111"),
        x = n("646718"),
        g = n("782340"),
        H = n("822549");
      let y = e => {
        let { locale: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(M.default, {
              icon: L.default,
              iconClassName: H.iconColorPurple,
              description:
                g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM,
            }),
            (0, r.jsx)(M.default, {
              icon: P.default,
              iconClassName: H.iconColorPink,
              description:
                g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format(
                  {
                    numGuildSubscriptions: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                    discountPercent: (0, O.formatPercent)(
                      t,
                      x.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100
                    ),
                  }
                ),
            }),
            (0, r.jsx)(M.default, {
              icon: h.default,
              iconClassName: H.iconColorYellow,
              description:
                g.default.Messages
                  .STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION,
            }),
          ],
        });
      };
      function j() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(M.default, {
              icon: L.default,
              iconClassName: H.iconColorPurple,
              description:
                g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM,
            }),
            (0, r.jsx)(M.default, {
              icon: h.default,
              iconClassName: H.iconColorYellow,
              description:
                g.default.Messages
                  .STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION,
            }),
          ],
        });
      }
      let b = e => {
          let {
              trialOffer: t,
              discountOffer: l,
              isTier0Upsell: s,
              isLoading: u,
              price: c,
              onClose: d,
            } = e,
            E = (0, i.useStateFromStores)([N.default], () => N.default.locale),
            _ = null != t || null != l;
          return (0, r.jsxs)("div", {
            className: H.wrapper,
            children: [
              (0, r.jsx)(o.ModalCloseButton, {
                onClick: d,
                className: H.closeButton,
              }),
              _ &&
                (0, r.jsx)(A.PremiumTrialGradientBadge, {
                  className: H.premiumTrialBadge,
                }),
              (0, r.jsx)("img", {
                className: a(H.heroImage, { [H.heroImageWithTrialOffer]: _ }),
                src: n("190389"),
                alt: "",
              }),
              u
                ? (0, r.jsx)(o.Spinner, {})
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: H.heading,
                        children:
                          null == c
                            ? (0, r.jsx)(o.Spinner, {
                                type: o.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : s
                              ? g.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format(
                                  {
                                    planName: (0, U.getTierDisplayName)(
                                      x.SubscriptionPlans.PREMIUM_MONTH_TIER_0
                                    ),
                                    monthlyPrice: (0, D.formatPrice)(
                                      c.amount,
                                      c.currency
                                    ),
                                  }
                                )
                              : g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format(
                                  {
                                    monthlyPrice: (0, D.formatPrice)(
                                      c.amount,
                                      c.currency
                                    ),
                                  }
                                ),
                      }),
                      (0, r.jsx)("div", {
                        className: H.perks,
                        children: s
                          ? (0, r.jsx)(j, {})
                          : (0, r.jsx)(y, { locale: E }),
                      }),
                    ],
                  }),
            ],
          });
        },
        B = e => {
          let {
              trialOffer: t,
              discountOffer: n,
              isTier0Upsell: l,
              onClose: s,
            } = e,
            a = {
              section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            };
          return (0, r.jsxs)(o.ModalFooter, {
            className: H.footer,
            children: [
              (0, r.jsx)(o.Button, {
                onClick: s,
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.PRIMARY,
                look: o.Button.Looks.LINK,
                children: g.default.Messages.CLOSE,
              }),
              (0, r.jsx)(S.default, {
                buttonText:
                  null != t || null != n
                    ? l
                      ? g.default.Messages
                          .PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT
                      : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                    : void 0,
                premiumModalAnalyticsLocation: a,
                subscriptionTier: l
                  ? x.PremiumSubscriptionSKUs.TIER_0
                  : x.PremiumSubscriptionSKUs.TIER_2,
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.GREEN,
                onClick: () => {
                  s();
                },
              }),
            ],
          });
        };
      function G(e) {
        let { onClose: t, ...n } = e,
          s = (0, E.useSubscriptionPlansLoaded)(),
          a = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.hasFetchedPaymentSources
          ),
          A = s && a,
          S = (0, p.usePremiumTrialOffer)(),
          M = (0, R.usePremiumDiscountOffer)(),
          { isLoading: N, suggestedPremiumType: P } = (0, I.default)({
            autoTrackExposure: A,
            experiment: T.default,
            location: "stickers_upsell",
          });
        l.useEffect(() => {
          u.default.wait(() => {
            (0, c.fetchPaymentSources)(),
              (0, d.fetchPremiumSubscriptionPlans)(
                null,
                null,
                v.RevenueSurfaces.DISCOVERY
              );
          });
        }, []);
        let h = P === x.PremiumTypes.TIER_0 && null == M,
          L = A
            ? U.default.getDefaultPrice(
                h
                  ? x.SubscriptionPlans.PREMIUM_MONTH_TIER_0
                  : x.SubscriptionPlans.PREMIUM_MONTH_TIER_2
              )
            : null;
        return (0, r.jsx)(_.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, r.jsx)(o.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, r.jsx)(C.default, {
              hideBreadcrumbs: !0,
              body: (0, r.jsx)(b, {
                trialOffer: S,
                discountOffer: M,
                isTier0Upsell: h,
                isLoading: !A || N,
                price: L,
                onClose: t,
              }),
              footer: (0, r.jsx)(B, {
                trialOffer: S,
                discountOffer: M,
                isTier0Upsell: h,
                onClose: t,
              }),
              steps: [f.Step.PREMIUM_UPSELL],
              currentStep: f.Step.PREMIUM_UPSELL,
            }),
          }),
        });
      }
    },
    454589: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var r = n("37983"),
        l = n("884691"),
        s = n("414456"),
        a = n.n(s),
        i = n("77078"),
        o = n("145131"),
        u = n("461380"),
        c = n("361466");
      class d extends l.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: t } = this.props;
          null != t && t(e);
        }
        render() {
          let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
          return (0, r.jsx)(o.default, {
            justify: o.default.Justify.START,
            className: a(c.breadcrumbs, t),
            children: n,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, t) => {
              let {
                  activeId: n,
                  onBreadcrumbClick: l,
                  breadcrumbs: s,
                  renderCustomBreadcrumb: o,
                  separatorClassName: d,
                } = this.props,
                E = e.id === n,
                _ = t === s.length - 1,
                f =
                  null != o
                    ? o(e, E)
                    : (0, r.jsx)("span", {
                        className: a(c.breadcrumb, {
                          [c.activeBreadcrumb]: E,
                          [c.interactiveBreadcrumb]: null != l,
                        }),
                        children: e.label,
                      });
              return (0, r.jsxs)(
                "div",
                {
                  className: a(c.breadcrumbWrapper, {
                    [c.breadcrumbFinalWrapper]: _,
                  }),
                  children: [
                    null != l
                      ? (0, r.jsx)(i.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: c.breadcrumbClickWrapper,
                          children: f,
                        })
                      : f,
                    _
                      ? null
                      : (0, r.jsx)(u.default, {
                          className: a(c.breadcrumbArrow, d),
                          direction: u.default.Directions.RIGHT,
                        }),
                  ],
                },
                e.id
              );
            });
        }
      }
      var E = d;
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return a;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return o;
          },
        });
      var r = n("995008"),
        l = n.n(r),
        s = n("775560");
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        i = () => (0, s.useLazyValue)(() => a()),
        o = e => {
          let { children: t } = e;
          return t(i());
        };
    },
    326880: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("470131"),
        a = n("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 6,
              height: n = 11,
              color: l = "currentColor",
              foreground: s,
              ...i
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, a.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 6 11",
              children: (0, r.jsxs)("g", {
                fill: l,
                fillRule: "evenodd",
                className: s,
                children: [
                  (0, r.jsx)("path", {
                    d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z",
                  }),
                  (0, r.jsx)("path", {
                    d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z",
                  }),
                ],
              }),
            });
          },
          s.BoostTier2SimpleIcon,
          void 0,
          { size: 11 }
        );
    },
    595086: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        a = n("469563"),
        i = n("65969"),
        o = n("75196"),
        u = n("188291"),
        c = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              winking: a = !1,
              foreground: i,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              width: t,
              height: n,
              ...(0, o.default)(c),
              viewBox: "0 0 20 20",
              children: [
                (0, r.jsx)("path", {
                  fill: l,
                  className: s(i, { [u.hidden]: a }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z",
                }),
                (0, r.jsx)("path", {
                  fill: l,
                  className: s(i, { [u.hidden]: !a }),
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z",
                }),
              ],
            });
          },
          i.StickerIcon,
          { winking: "remove" },
          { size: 24 }
        );
    },
    719347: function (e, t, n) {
      "use strict";
      var r, l;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return s;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return a;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return i;
          },
          MediaLayoutType: function () {
            return r;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return o;
          },
        });
      let s = 550,
        a = 350,
        i = 40;
      ((l = r || (r = {})).STATIC = "STATIC"),
        (l.RESPONSIVE = "RESPONSIVE"),
        (l.MOSAIC = "MOSAIC");
      let o = 20;
    },
    766388: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BoostTier2SimpleIcon: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
            className: i,
          }),
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
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: i,
            }),
          ],
        });
      };
    },
    224745: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StickerIcon: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=858fca596b38b60aac1b.js.map
