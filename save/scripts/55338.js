(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55338"],
  {
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    6916: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a13348dd889e2a36b788.gif";
    },
    12412: function (e, t, n) {
      "use strict";
      e.exports = n.p + "91d3c1acae2f11c57634.png";
    },
    54400: function (e, t, n) {
      "use strict";
      e.exports = n.p + "04c2807fcf052140a12f.gif";
    },
    122574: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7548ee8ba4e2f2600b69.png";
    },
    463095: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f597cc1d129f34c8f135.gif";
    },
    733105: function (e, t, n) {
      "use strict";
      e.exports = n.p + "35d07cb23db04126d51b.png";
    },
    749003: function (e, t, n) {
      "use strict";
      e.exports = n.p + "dbfa9f354f49f4a6a61e.gif";
    },
    918927: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9b5c79ffc65b32de7d01.png";
    },
    723251: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          thumbHashToApproximateAspectRatio: function () {
            return a;
          },
          rgbaToDataURL: function () {
            return r;
          },
          thumbHashToDataURL: function () {
            return l;
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
      function a(e) {
        let t = e[3],
          n = 128 & e[2],
          a = 128 & e[4];
        return (a ? (n ? 5 : 7) : 7 & t) / (a ? 7 & t : n ? 5 : 7);
      }
      function r(e, t, n) {
        let a = 4 * e + 1,
          r = 6 + t * (5 + a),
          l = [
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
          i = [
            0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
            1303535960, 1342533948, -306674912, -267414716, -690576408,
            -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
          ],
          s = 1,
          u = 0;
        for (let e = 0, r = 0, i = a - 1; e < t; e++, i += a - 1)
          for (
            l.push(
              e + 1 < t ? 0 : 1,
              255 & a,
              a >> 8,
              255 & ~a,
              (a >> 8) ^ 255,
              0
            ),
              u = (u + s) % 65521;
            r < i;
            r++
          ) {
            let e = 255 & n[r];
            l.push(e), (u = (u + (s = (s + e) % 65521)) % 65521);
          }
        for (let [e, t] of (l.push(
          u >> 8,
          255 & u,
          s >> 8,
          255 & s,
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
          for (let a = e; a < t; a++)
            (n ^= l[a]), (n = ((n = (n >>> 4) ^ i[15 & n]) >>> 4) ^ i[15 & n]);
          (n = ~n),
            (l[t++] = n >>> 24),
            (l[t++] = (n >> 16) & 255),
            (l[t++] = (n >> 8) & 255),
            (l[t++] = 255 & n);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...l));
      }
      function l(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: r, cos: l, round: i } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            u = e[3] | (e[4] << 8),
            o = (63 & s) / 63,
            c = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            f = s >> 23,
            p = u >> 15,
            h = r(3, p ? (f ? 5 : 7) : 7 & u),
            m = r(3, p ? 7 & u : f ? 5 : 7),
            E = f ? (15 & e[5]) / 15 : 1,
            S = (e[5] >> 4) / 15,
            T = f ? 6 : 5,
            _ = 0,
            y = (t, n, a) => {
              let r = [];
              for (let l = 0; l < n; l++)
                for (let i = l ? 0 : 1; i * n < t * (n - l); i++)
                  r.push(
                    (((e[T + (_ >> 1)] >> ((1 & _++) << 2)) & 15) / 7.5 - 1) * a
                  );
              return r;
            },
            C = y(h, m, ((s >> 18) & 31) / 31),
            I = y(3, 3, 1.25 * (((u >> 3) & 63) / 63)),
            g = y(3, 3, 1.25 * (((u >> 9) & 63) / 63)),
            v = f && y(5, 5, S),
            A = a(e),
            N = i(A > 1 ? 32 : 32 * A),
            x = i(A > 1 ? 32 / A : 32),
            P = new Uint8Array(N * x * 4),
            L = [],
            R = [];
          for (let e = 0, a = 0; e < x; e++)
            for (let i = 0; i < N; i++, a += 4) {
              let s = o,
                u = c,
                p = d,
                S = E;
              for (let e = 0, n = r(h, f ? 5 : 3); e < n; e++)
                L[e] = l((t / N) * (i + 0.5) * e);
              for (let n = 0, a = r(m, f ? 5 : 3); n < a; n++)
                R[n] = l((t / x) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < m; e++)
                for (
                  let n = e ? 0 : 1, a = 2 * R[e];
                  n * m < h * (m - e);
                  n++, t++
                )
                  s += C[t] * L[n] * a;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, a = 2 * R[e]; n < 3 - e; n++, t++) {
                  let e = L[n] * a;
                  (u += I[t] * e), (p += g[t] * e);
                }
              if (f)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, a = 2 * R[e]; n < 5 - e; n++, t++)
                    S += v[t] * L[n] * a;
              let T = s - (2 / 3) * u,
                _ = (3 * s - T + p) / 2,
                y = _ - p;
              (P[a] = r(0, 255 * n(1, _))),
                (P[a + 1] = r(0, 255 * n(1, y))),
                (P[a + 2] = r(0, 255 * n(1, T))),
                (P[a + 3] = r(0, 255 * n(1, S)));
            }
          return { w: N, h: x, rgba: P };
        })(e);
        return r(t.w, t.h, t.rgba);
      }
    },
    316718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserEntitlementsForApplication: function () {
            return s;
          },
          fetchUserEntitlements: function () {
            return u;
          },
          fetchGiftableEntitlements: function () {
            return o;
          },
        });
      var a = n("872717"),
        r = n("913144"),
        l = n("271560"),
        i = n("49111");
      function s(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          r.default.wait(() => {
            r.default.dispatch({
              type: "ENTITLEMENT_FETCH_APPLICATION_START",
              applicationId: e,
            });
          }),
          a.HTTP.get({
            url: i.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
      async function u(e) {
        let {
          withSku: t = !1,
          withApplication: n = !1,
          entitlementType: l,
        } = e;
        r.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
        try {
          let e = await a.HTTP.get({
            url: i.Endpoints.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: n, entitlement_type: l },
          });
          r.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          r.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
        }
      }
      async function o() {
        r.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
        try {
          let e = await (0, l.httpGetWithCountryCodeQuery)({
            url: i.Endpoints.ENTITLEMENTS_GIFTABLE,
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
            return l;
          },
          clearCardInfo: function () {
            return i;
          },
          updateAddressInfo: function () {
            return s;
          },
          clearError: function () {
            return u;
          },
        });
      var a = n("913144");
      function r(e) {
        a.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function l(e, t) {
        a.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function i() {
        a.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function s(e, t) {
        a.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function u() {
        a.default.wait(() =>
          a.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
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
      var a = n("913144");
      function r() {
        a.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    666031: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("392861");
      n.es(a, t);
    },
    851298: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("499779");
      n.es(a, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("782542");
      n.es(a, t);
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
      var a = n("884691");
      function r(e) {
        let [t, n] = (0, a.useState)(!1),
          r = (0, a.useRef)(e.current);
        return (
          (0, a.useEffect)(() => {
            r.current = e.current;
          }, [e]),
          (0, a.useEffect)(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => n(!0),
              a = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", a),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", a);
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
            return u;
          },
          openAvatarDecorationModal: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("393414");
      n("103603");
      var i = n("573135"),
        s = n("49111");
      function u(e) {
        return "number" != typeof e
          ? (0, r.getAvatarSize)(e) * i.DECORATION_TO_AVATAR_RATIO
          : e * i.DECORATION_TO_AVATAR_RATIO;
      }
      let o = e => {
        let {
          analyticsLocations: t,
          initialSelectedDecoration: i,
          isTryItOutFlow: u,
          guild: o,
        } = e;
        (0, r.openModalLazy)(async () => {
          (0, l.getHistory)().location.pathname ===
            s.Routes.COLLECTIBLES_SHOP_FULLSCREEN &&
            (0, l.transitionTo)(s.Routes.APP);
          let { default: e } = await n.el("791050").then(n.bind(n, "791050"));
          return n =>
            (0, a.jsx)(e, {
              ...n,
              analyticsLocations: t,
              initialSelectedDecoration: i,
              isTryItOutFlow: u,
              guild: o,
            });
        }, {});
      };
    },
    619935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlockedPaymentsConfig: function () {
            return s;
          },
          default: function () {
            return u;
          },
        });
      var a = n("862205"),
        r = n("15733");
      let l = (0, a.createExperiment)({
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
        i = (0, a.createExperiment)({
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
      function s() {
        let { paymentsBlocked: e } = l.useExperiment(
            { location: "c519a9_1" },
            { autoTrackExposure: !1 }
          ),
          { checkPaymentSource: t } = i.useExperiment(
            { location: "c519a9_2" },
            { autoTrackExposure: !1 }
          ),
          { defaultBillingCountryCode: n } = (0, r.default)();
        return e || (t && "RU" === n);
      }
      var u = l;
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
      var a = n("446674"),
        r = n("605250"),
        l = n("357957"),
        i = n("10514"),
        s = n("521012"),
        u = n("646718");
      new r.default("useSubscriptionPlansLoaded");
      let o = e => {};
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [...u.ACTIVE_PREMIUM_SKUS];
        return (0, a.useStateFromStores)(
          [l.default, i.default, s.default],
          () => d(e, [l.default, i.default, s.default]),
          [e]
        );
      }
      function d() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [...u.ACTIVE_PREMIUM_SKUS],
          [n, a, r] =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [l.default, i.default, s.default],
          c = n.paymentSourceIds,
          d = n.defaultPaymentSourceId,
          f = a.isLoadedForSKUs(t),
          p =
            null === (e = r.getPremiumTypeSubscription()) || void 0 === e
              ? void 0
              : e.paymentSourceId;
        if (null != p && !a.hasPaymentSourceForSKUIds(p, t))
          return (
            o(
              "subscription payment source "
                .concat(p, " not loaded for ")
                .concat(t)
            ),
            !1
          );
        if (null != d && !a.hasPaymentSourceForSKUIds(d, t))
          return (
            o(
              "default payment source ".concat(d, " not loaded for ").concat(t)
            ),
            !1
          );
        for (let e of c)
          if (!a.hasPaymentSourceForSKUIds(e, t))
            return (
              o("payment source ".concat(e, " not loaded for ").concat(t)), !1
            );
        return o("isLoadedForSKUs ".concat(f)), f;
      }
    },
    634544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        i = n("77078"),
        s = n("118503"),
        u = n("427459"),
        o = n("782340"),
        c = n("355635"),
        d = e => {
          let t,
            n,
            r,
            {
              guildFeature: d,
              guild: f,
              className: p,
              hideTooltip: h = !1,
              tooltipPosition: m = "left",
              onClick: E,
            } = e,
            S = f.hasFeature(d),
            T = (0, u.minimumRequiredTierForGuildFeature)(d);
          return (S
            ? (null != T && (r = o.default.Messages.PREMIUM_GUILD_INCLUDED),
              (t = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(s.default, { className: c.unlockedIcon }),
                  (0, a.jsx)(i.Heading, {
                    variant: "eyebrow",
                    className: c.description,
                    children: o.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                  }),
                ],
              })))
            : (null != T && (r = o.default.Messages.CLICK_TO_LEARN_MORE),
              (t = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(s.default, { className: c.icon }),
                  (0, a.jsx)(i.Heading, {
                    variant: "eyebrow",
                    className: c.description,
                    children: null != T && (0, u.getShortenedTierName)(T),
                  }),
                ],
              }))),
          (n =
            h || null == r
              ? (0, a.jsx)("div", {
                  className: l(c.availabilityIndicator, p),
                  children: t,
                })
              : (0, a.jsx)(i.Tooltip, {
                  position: m,
                  text: r,
                  children: e =>
                    (0, a.jsx)("div", {
                      ...e,
                      className: l(c.availabilityIndicator, p),
                      children: t,
                    }),
                })),
          null == E || S)
            ? n
            : (0, a.jsx)(i.Clickable, {
                onClick: E,
                className: c.clickable,
                children: n,
              });
        };
    },
    354460: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getGuildFeatureFromUploadType: function () {
            return l;
          },
          shouldShowPremiumIconForGIFPickerOption: function () {
            return i;
          },
        });
      var a = n("49111"),
        r = n("75015");
      function l(e, t) {
        let { isGIF: n } = t;
        if (e === r.UploadTypes.GUILD_BANNER)
          return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER;
      }
      function i(e) {
        return e === r.UploadTypes.AVATAR || e === r.UploadTypes.BANNER;
      }
    },
    420333: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        }),
        n("222007");
      var a = n("37983"),
        r = n("884691"),
        l = n("446674"),
        i = n("77078"),
        s = n("812204"),
        u = n("685665"),
        o = n("634544"),
        c = n("694187"),
        d = n("305961"),
        f = n("162771"),
        p = n("697218"),
        h = n("471671"),
        m = n("887718"),
        E = n("818643"),
        S = n("216422"),
        T = n("599110"),
        _ = n("719923"),
        y = n("354460"),
        C = n("424960"),
        I = n("49111"),
        g = n("75015"),
        v = n("991207"),
        A = n("782340"),
        N = n("81557");
      let x = [
        { gif: n("6916"), png: n("12412") },
        { gif: n("463095"), png: n("733105") },
        { gif: n("749003"), png: n("918927") },
        { gif: n("54400"), png: n("122574") },
      ];
      function P(e) {
        let { shouldAnimate: t = !0 } = e,
          [n, l] = r.useState(!1);
        return (0, a.jsx)("div", {
          className: N.gifGrid,
          onMouseMove: () => l(!0),
          onMouseLeave: () => l(!1),
          children: x.map(e =>
            (0, a.jsx)(
              "div",
              {
                className: N.gif,
                style: {
                  backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")"),
                },
              },
              e.gif
            )
          ),
        });
      }
      function L(e) {
        let { guildFeature: t, guild: n } = e;
        return null == t || null == n
          ? null
          : (0, a.jsx)("div", {
              className: N.pillWrapper,
              children: (0, a.jsx)(o.default, {
                guildFeature: t,
                guild: n,
                hideTooltip: !0,
              }),
            });
      }
      function R(e) {
        let { uploadType: t, guild: n } = e;
        return (0, a.jsxs)("div", {
          className: N.optionBoxText,
          children: [
            (0, a.jsx)(L, {
              guild: n,
              guildFeature: (0, y.getGuildFeatureFromUploadType)(t, {
                isGIF: !0,
              }),
            }),
            (0, a.jsxs)("div", {
              className: N.optionBoxDescription,
              children: [
                (0, y.shouldShowPremiumIconForGIFPickerOption)(t) &&
                  (0, a.jsx)(i.TooltipContainer, {
                    className: N.nitroWheelFlairContainer,
                    text: A.default.Messages
                      .PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, a.jsx)(S.default, {
                      className: N.nitroWheelFlair,
                    }),
                  }),
                A.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function M(e) {
        let { title: t, uploadType: n, guild: r } = e;
        return (0, a.jsxs)("div", {
          className: N.optionBoxText,
          children: [
            (0, a.jsx)(L, {
              guildFeature: (0, y.getGuildFeatureFromUploadType)(n, {
                isGIF: !1,
              }),
              guild: r,
            }),
            (0, a.jsx)("div", {
              className: N.optionBoxDescription,
              children: t,
            }),
          ],
        });
      }
      function F(e) {
        let {
            transitionState: t,
            onClose: o,
            onComplete: S,
            uploadType: y,
            maxFileSizeBytes: x,
            showUpsellHeader: L,
            filters: F,
            analyticsLocation: O,
            analyticsLocations: U = [],
            modalSubTitle: b,
            imageSpecifications: j,
            modalTitle: H = A.default.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: w = A.default.Messages.UPLOAD_IMAGE,
          } = e,
          k = (0, l.useStateFromStores)([h.default], () =>
            h.default.isFocused()
          ),
          D = (0, l.useStateFromStores)([p.default], () =>
            p.default.getCurrentUser()
          ),
          G = (0, l.useStateFromStores)([f.default], () =>
            f.default.getGuildId()
          ),
          B = (0, l.useStateFromStores)([d.default], () =>
            d.default.getGuild(G)
          ),
          { reducedMotion: V } = r.useContext(
            i.AccessibilityPreferencesContext
          ),
          z = (0, i.useModalContext)(),
          K = !_.default.canUseAnimatedAvatar(D) && y === g.UploadTypes.AVATAR,
          { analyticsLocations: Z } = (0, u.default)(
            U,
            s.default.SELECT_IMAGE_MODAL
          );
        function W(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          o(), S(e, t, n);
        }
        return (
          r.useEffect(() => {
            K &&
              T.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: I.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: Z,
              }),
              T.default.track(I.AnalyticEvents.OPEN_MODAL, {
                type: I.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: O,
              });
          }, [K, O, Z]),
          (0, a.jsxs)(i.ModalRoot, {
            transitionState: t,
            size: i.ModalSize.SMALL,
            children: [
              (0, a.jsxs)(i.ModalHeader, {
                className: N.modalHeader,
                separator: !1,
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(i.FormTitle, {
                        tag: i.FormTitleTags.H1,
                        className: N.modalTitle,
                        children: H,
                      }),
                      null != b
                        ? (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: b,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(i.ModalCloseButton, {
                    onClick: o,
                    className: N.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                className: N.modalContent,
                children: [
                  (0, a.jsxs)("div", {
                    className: N.imagePickerContainer,
                    children: [
                      (0, a.jsxs)(i.Clickable, {
                        className: N.optionBox,
                        children: [
                          (0, a.jsx)("div", {
                            className: N.contentCircle,
                            children: (0, a.jsx)(E.default, {
                              className: N.uploadIcon,
                            }),
                          }),
                          (0, a.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: (0, a.jsx)(M, {
                              title: w,
                              uploadType: y,
                              guild: B,
                            }),
                          }),
                          (0, a.jsx)(c.default, {
                            onChange: function (e, t) {
                              if (t.type === v.FileTypes.MP4) return W(e, t);
                              (0, i.openModalLazy)(
                                async () => {
                                  let { default: r } = await n
                                    .el("57015")
                                    .then(n.bind(n, "57015"));
                                  return n =>
                                    (0, a.jsx)(r, {
                                      imgURI: e,
                                      file: t,
                                      onCrop: W,
                                      uploadType: y,
                                      showUpsellHeader: L,
                                      allowSkip: !0,
                                      analyticsPage:
                                        null == O ? void 0 : O.page,
                                      ...n,
                                    });
                                },
                                { contextKey: z }
                              );
                            },
                            maxFileSizeBytes: x,
                            onFileSizeError: function () {
                              o(), (0, C.default)(x);
                            },
                            filters: F,
                          }),
                        ],
                      }),
                      (0, a.jsxs)(i.Clickable, {
                        className: N.optionBox,
                        onClick: function () {
                          (0, i.openModalLazy)(
                            async () => {
                              let { default: e } = await n
                                .el("646077")
                                .then(n.bind(n, "646077"));
                              return t =>
                                (0, a.jsx)(e, {
                                  uploadType: y,
                                  onComplete: (e, t) => W(e, t, !0),
                                  showUpsellHeader: L,
                                  analyticsPage: null == O ? void 0 : O.page,
                                  ...t,
                                });
                            },
                            { contextKey: z }
                          );
                        },
                        children: [
                          (0, a.jsxs)("div", {
                            className: N.contentCircle,
                            children: [
                              (0, a.jsx)(P, { shouldAnimate: k && !V.enabled }),
                              (0, a.jsx)("div", {
                                className: N.gifIconContainer,
                                children: (0, a.jsx)(m.default, {
                                  className: N.gifIcon,
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: (0, a.jsx)(R, {
                              uploadType: y,
                              guild: B,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  null != j
                    ? (0, a.jsx)(i.Text, {
                        className: N.imageSpecifications,
                        variant: "text-sm/normal",
                        children: j,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      }
    },
    424960: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("336522"),
        r = n("254490"),
        l = n("782340");
      function i(e) {
        (0, a.openUploadError)({
          title: l.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: l.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, r.sizeString)(e),
          }),
        });
      }
    },
    854381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("446674"),
        r = n("10514"),
        l = n("713518"),
        i = n("646718"),
        s = n("843455");
      function u(e) {
        var t, n;
        let {
          activeSubscription: u,
          skuIDs: o,
          paymentSourceId: c,
          isGift: d,
        } = e;
        o = o.filter(e => e !== i.PremiumSubscriptionSKUs.NONE);
        let f = (0, a.useStateFromStores)([r.default], () => {
            let e = r.default
              .getPlanIdsForSkus(o)
              .filter(e => !d || i.PREMIUM_PLANS.has(e));
            return e.length > 0 ? r.default.get(e[0]) : null;
          }),
          p = null == f ? [] : (0, l.getCurrencies)(f.id, c, d),
          h =
            null !==
              (n =
                null !==
                  (t = p.find(e => e === (null == u ? void 0 : u.currency))) &&
                void 0 !== t
                  ? t
                  : p[0]) && void 0 !== n
              ? n
              : s.CurrencyCodes.USD;
        return {
          ...(0, l.useCurrencyWithPaymentSourceChange)(
            h,
            null == f ? void 0 : f.id,
            c,
            d,
            o
          ),
          currencies: p,
        };
      }
    },
    986681: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("222007");
      var a = n("884691"),
        r = n("446674"),
        l = n("850068"),
        i = n("357957");
      function s(e) {
        let { isGift: t, activeSubscription: n } = e,
          {
            defaultPaymentSourceId: s,
            paymentSources: u,
            hasFetchedPaymentSources: o,
          } = (0, r.useStateFromStoresObject)([i.default], () => ({
            defaultPaymentSourceId: i.default.defaultPaymentSourceId,
            paymentSources: i.default.paymentSources,
            hasFetchedPaymentSources: i.default.hasFetchedPaymentSources,
          })),
          c = (e, t, n) =>
            e || (null == t ? void 0 : t.paymentSourceId) == null
              ? n
              : t.paymentSourceId,
          [d, f] = a.useState(() => c(t, n, s));
        return (
          a.useEffect(() => {
            o ? f(c(t, n, s)) : (0, l.fetchPaymentSources)();
          }, [o, t, n, s]),
          {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: o,
          }
        );
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("748820"),
        l = n("77078"),
        i = n("112679"),
        s = n("55689"),
        u = n("676379"),
        o = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        p = n("49111"),
        h = n("646718");
      function m(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: m,
            onClose: E,
            onComplete: S,
            onSubscriptionConfirmation: T,
            analyticsLocations: _,
            analyticsObject: y,
            analyticsLocation: C,
            analyticsSourceLocation: I,
            isGift: g = !1,
            giftMessage: v,
            subscriptionTier: A,
            trialId: N,
            postSuccessGuild: x,
            openInvoiceId: P,
            applicationId: L,
            referralTrialOfferId: R,
            giftRecipient: M,
            returnRef: F,
            subscription: O,
            skipConfirm: U,
          } = null != e ? e : {},
          b = !1,
          j = (0, r.v4)(),
          H = o.default.getCurrentUser(),
          w = (0, f.isPremiumExactly)(H, h.PremiumTypes.TIER_2);
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...l } = n;
              return (0, a.jsx)(e, {
                ...l,
                loadId: j,
                subscriptionTier: A,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(A),
                isGift: g,
                giftMessage: v,
                giftRecipient: M,
                initialPlanId: t,
                followupSKUInfo: m,
                onClose: (e, t) => {
                  r(),
                    null == E || E(e),
                    e &&
                      (null == T || T(),
                      !g &&
                        null != t &&
                        t === h.PremiumSubscriptionSKUs.TIER_2 &&
                        !w &&
                        d.ComponentDispatch.dispatch(
                          p.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (b = !0),
                    null == S || S(),
                    !g && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: T,
                analyticsLocations: _,
                analyticsObject: y,
                analyticsLocation: C,
                analyticsSourceLocation: I,
                trialId: N,
                postSuccessGuild: x,
                planGroup: h.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: P,
                applicationId: L,
                referralTrialOfferId: R,
                returnRef: F,
                subscription: O,
                skipConfirm: !!U,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !b &&
                c.default.track(p.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: j,
                  payment_type:
                    p.PurchaseTypeToAnalyticsPaymentType[
                      p.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != C ? C : y,
                  source: I,
                  subscription_type: p.SubscriptionTypes.PREMIUM,
                  is_gift: g,
                  eligible_for_trial: null != N,
                  application_id: L,
                  location_stack: _,
                }),
                (0, i.clearError)(),
                (0, s.clearPurchaseTokenAuthState)(),
                null == E || E(b),
                b && (null == T || T());
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
      var a = n("913144");
      let r = e => {
        a.default.dispatch({
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
      var a = n("884691"),
        r = n("446674"),
        l = n("913144"),
        i = n("850068"),
        s = n("271938"),
        u = n("160299"),
        o = n("357957");
      function c() {
        let e = (0, r.useStateFromStores)([o.default], () =>
            o.default.getDefaultBillingCountryCode()
          ),
          t = (0, r.useStateFromStores)(
            [u.default],
            () => u.default.ipCountryCode
          ),
          n = (0, r.useStateFromStores)([s.default], () =>
            s.default.isAuthenticated()
          );
        return (
          a.useEffect(() => {
            l.default.wait(() => {
              n &&
                !u.default.isPaymentSourceFetching &&
                !o.default.hasFetchedPaymentSources &&
                i.fetchPaymentSources();
            });
          }, [n]),
          a.useEffect(() => {
            n && !u.default.ipCountryCodeLoaded && i.fetchIpCountryCode();
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
            return E;
          },
          default: function () {
            return T;
          },
        });
      var a,
        r,
        l = n("37983"),
        i = n("884691"),
        s = n("414456"),
        u = n.n(s),
        o = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        p = n("61435");
      ((a = r || (r = {})).DEFAULT = "default"), (a.SMALL = "small");
      let h = { default: p.shineDefault, small: p.shineSmall },
        m = { default: p.shineInnerDefault, small: p.shineInnerSmall };
      class E extends i.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...a } = this.props;
          return (0, l.jsx)(o.default.div, {
            ...a,
            className: u(p.shineContainer, e, { [p.shinePaused]: n }),
            children: (0, l.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: h[t],
              children: (0, l.jsx)("div", { className: m[t] }),
            }),
          });
        }
      }
      E.defaultProps = { shineSize: "default" };
      let S = e => {
        let {
            children: t,
            className: n,
            disabled: a,
            submitting: r,
            pauseAnimation: s,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: h,
            onlyShineOnHover: m,
            ...S
          } = e,
          T = i.createRef(),
          _ = (0, d.default)(T),
          y = !a && !r && !0 !== s && (!m || _);
        return (0, l.jsxs)(c.Button, {
          buttonRef: T,
          ...S,
          className: u(p.shinyButton, n),
          disabled: a,
          submitting: r,
          children: [
            t,
            y
              ? (0, l.jsx)(E, {
                  shinePaused: f,
                  className: u(
                    p.buttonShine,
                    m ? p.onlyShineOnHover : void 0,
                    h
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      S.ShineSizes = r;
      var T = S;
    },
    887718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("666031"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 29,
              height: n = 22,
              color: r = "currentColor",
              backgroundColor: l,
              ...s
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 29 22",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("rect", {
                    width: t,
                    height: n,
                    fill: l,
                    fillOpacity: ".8",
                    rx: "3",
                  }),
                  (0, a.jsx)("path", {
                    d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                    fill: r,
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                    fill: r,
                  }),
                  (0, a.jsx)("path", {
                    d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                    fill: r,
                  }),
                ],
              }),
            });
          },
          l.GifIcon,
          void 0,
          { size: 29 }
        );
    },
    818643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("851298"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              ...l
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: r,
                }),
                (0, a.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: r,
                }),
              ],
            });
          },
          l.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    713518: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchSubscriptionPlansOnNewPaymentSource: function () {
            return p;
          },
          getCurrencies: function () {
            return h;
          },
          planHasCurrency: function () {
            return m;
          },
          useCurrencyWithPaymentSourceChange: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("884691"),
        r = n("627445"),
        l = n.n(r),
        i = n("913144"),
        s = n("775433"),
        u = n("308592"),
        o = n("10514"),
        c = n("719923"),
        d = n("49111"),
        f = n("646718");
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...f.ACTIVE_PREMIUM_SKUS];
        return null == e || o.default.hasPaymentSourceForSKUIds(e, t)
          ? Promise.resolve()
          : new Promise(e => {
              i.default.wait(async () => {
                await (0, s.fetchSubscriptionPlansBySKUs)(t), e();
              });
            });
      }
      function h(e, t, n) {
        let a,
          r = [],
          i = [],
          s = {
            purchaseType: n
              ? d.PriceSetAssignmentPurchaseTypes.GIFT
              : d.PriceSetAssignmentPurchaseTypes.DEFAULT,
          };
        return (
          l(
            (a = "string" == typeof e ? o.default.get(e) : e),
            "subscription plan not loaded"
          ),
          null != t &&
            o.default.hasPaymentSourceForSKUId(t, a.skuId) &&
            (s.paymentSourceId = t),
          (r = (i = (0, c.experimentalGetPrices)(a.id, s)).map(e => e.currency))
            .length < 1 && (r = [d.CurrencyCodes.USD]),
          r
        );
      }
      function m(e, t, n) {
        let a = o.default.get(e);
        l(null != a, "plan is undefined");
        let r = h(a, n, !1);
        return r.includes(t);
      }
      function E(e, t, n, r, l) {
        let [i, s] = a.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != n
              ? { paymentSourceId: n, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 }
          ),
          c = (0, u.useSubscriptionPlansLoaded)(l);
        a.useEffect(() => {
          let e = async () => {
            await p(n, l);
            let e = [];
            null != t && null != o.default.get(t) && (e = h(t, n, r)),
              e.length > 0
                ? s({ paymentSourceId: n, currency: e[0], loaded: !0 })
                : s({ paymentSourceId: n, loaded: !1 });
          };
          e();
        }, [n, JSON.stringify(l), t, r, c]);
        let d = i.paymentSourceId !== n || null == t || !c || !0 !== i.loaded;
        return {
          hasFetchedSubscriptionPlans: c,
          priceOptions: i,
          setCurrency: e => {
            s({ currency: e });
          },
          currencyLoading: d,
        };
      }
    },
    392861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GifIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
    499779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImagePlusIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: s,
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
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=d643e48585a746f86279.js.map
