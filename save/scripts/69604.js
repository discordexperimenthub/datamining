(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69604"],
  {
    53708: function (e, t, r) {
      "use strict";
      e.exports = r.p + "f6c7b8245d3a54cf98b2.png";
    },
    489847: function (e, t, r) {
      "use strict";
      e.exports = r.p + "ab3468632852f3725893.png";
    },
    330825: function (e, t, r) {
      "use strict";
      e.exports = r.p + "79903b7cc64eb6d55aa8.png";
    },
    165057: function (e, t, r) {
      "use strict";
      e.exports = r.p + "50eb2aa99e75c1b8630a.png";
    },
    94646: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c5c556a5e9be016ffb2d.png";
    },
    286642: function (e, t, r) {
      "use strict";
      e.exports = r.p + "a3edb1330403965aa3f6.png";
    },
    655029: function (e, t, r) {
      "use strict";
      e.exports = r.p + "6fac2c0e5ed90d06b3b9.png";
    },
    740683: function (e, t, r) {
      "use strict";
      e.exports = r.p + "7b9383fd24920a3a95b7.png";
    },
    714293: function (e, t, r) {
      "use strict";
      e.exports = r.p + "295744c4b4e7cb95b539.png";
    },
    861485: function (e, t, r) {
      "use strict";
      e.exports = r.p + "16abeb1745235d8aea66.png";
    },
    424869: function (e, t, r) {
      "use strict";
      e.exports = r.p + "f1c62ecb6594a7168ae2.png";
    },
    638538: function (e, t, r) {
      "use strict";
      e.exports = r.p + "ac20c9a7b69e25e9d680.png";
    },
    125221: function (e, t, r) {
      "use strict";
      e.exports = r.p + "8ffd6f59392e09ba0fe4.png";
    },
    770704: function (e, t, r) {
      "use strict";
      e.exports = r.p + "81aef01431a5e1293160.png";
    },
    597704: function (e, t, r) {
      "use strict";
      e.exports = r.p + "7bb17dc88ff31be285a8.png";
    },
    290216: function (e, t, r) {
      "use strict";
      e.exports = r.p + "1616ba0a324e68a4fff7.png";
    },
    723251: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          thumbHashToApproximateAspectRatio: function () {
            return a;
          },
          rgbaToDataURL: function () {
            return n;
          },
          thumbHashToDataURL: function () {
            return u;
          },
        }),
        r("70102"),
        r("424973"),
        r("222007"),
        r("311790"),
        r("477657"),
        r("811875"),
        r("90301"),
        r("652153"),
        r("28797"),
        r("817884"),
        r("597349"),
        r("667536"),
        r("690341"),
        r("101997");
      function a(e) {
        let t = e[3],
          r = 128 & e[2],
          a = 128 & e[4];
        return (a ? (r ? 5 : 7) : 7 & t) / (a ? 7 & t : r ? 5 : 7);
      }
      function n(e, t, r) {
        let a = 4 * e + 1,
          n = 6 + t * (5 + a),
          u = [
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
            n >>> 24,
            (n >> 16) & 255,
            (n >> 8) & 255,
            255 & n,
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
          l = 0;
        for (let e = 0, n = 0, i = a - 1; e < t; e++, i += a - 1)
          for (
            u.push(
              e + 1 < t ? 0 : 1,
              255 & a,
              a >> 8,
              255 & ~a,
              (a >> 8) ^ 255,
              0
            ),
              l = (l + s) % 65521;
            n < i;
            n++
          ) {
            let e = 255 & r[n];
            u.push(e), (l = (l + (s = (s + e) % 65521)) % 65521);
          }
        for (let [e, t] of (u.push(
          l >> 8,
          255 & l,
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
          [37, 41 + n],
        ])) {
          let r = -1;
          for (let a = e; a < t; a++)
            (r ^= u[a]), (r = ((r = (r >>> 4) ^ i[15 & r]) >>> 4) ^ i[15 & r]);
          (r = ~r),
            (u[t++] = r >>> 24),
            (u[t++] = (r >> 16) & 255),
            (u[t++] = (r >> 8) & 255),
            (u[t++] = 255 & r);
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...u));
      }
      function u(e) {
        let t = (function (e) {
          let { PI: t, min: r, max: n, cos: u, round: i } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            l = e[3] | (e[4] << 8),
            o = (63 & s) / 63,
            c = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            f = s >> 23,
            m = l >> 15,
            S = n(3, m ? (f ? 5 : 7) : 7 & l),
            p = n(3, m ? 7 & l : f ? 5 : 7),
            E = f ? (15 & e[5]) / 15 : 1,
            h = (e[5] >> 4) / 15,
            _ = f ? 6 : 5,
            C = 0,
            I = (t, r, a) => {
              let n = [];
              for (let u = 0; u < r; u++)
                for (let i = u ? 0 : 1; i * r < t * (r - u); i++)
                  n.push(
                    (((e[_ + (C >> 1)] >> ((1 & C++) << 2)) & 15) / 7.5 - 1) * a
                  );
              return n;
            },
            g = I(S, p, ((s >> 18) & 31) / 31),
            T = I(3, 3, 1.25 * (((l >> 3) & 63) / 63)),
            v = I(3, 3, 1.25 * (((l >> 9) & 63) / 63)),
            A = f && I(5, 5, h),
            P = a(e),
            N = i(P > 1 ? 32 : 32 * P),
            L = i(P > 1 ? 32 / P : 32),
            R = new Uint8Array(N * L * 4),
            y = [],
            b = [];
          for (let e = 0, a = 0; e < L; e++)
            for (let i = 0; i < N; i++, a += 4) {
              let s = o,
                l = c,
                m = d,
                h = E;
              for (let e = 0, r = n(S, f ? 5 : 3); e < r; e++)
                y[e] = u((t / N) * (i + 0.5) * e);
              for (let r = 0, a = n(p, f ? 5 : 3); r < a; r++)
                b[r] = u((t / L) * (e + 0.5) * r);
              for (let e = 0, t = 0; e < p; e++)
                for (
                  let r = e ? 0 : 1, a = 2 * b[e];
                  r * p < S * (p - e);
                  r++, t++
                )
                  s += g[t] * y[r] * a;
              for (let e = 0, t = 0; e < 3; e++)
                for (let r = e ? 0 : 1, a = 2 * b[e]; r < 3 - e; r++, t++) {
                  let e = y[r] * a;
                  (l += T[t] * e), (m += v[t] * e);
                }
              if (f)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let r = e ? 0 : 1, a = 2 * b[e]; r < 5 - e; r++, t++)
                    h += A[t] * y[r] * a;
              let _ = s - (2 / 3) * l,
                C = (3 * s - _ + m) / 2,
                I = C - m;
              (R[a] = n(0, 255 * r(1, C))),
                (R[a + 1] = n(0, 255 * r(1, I))),
                (R[a + 2] = n(0, 255 * r(1, _))),
                (R[a + 3] = n(0, 255 * r(1, h)));
            }
          return { w: N, h: L, rgba: R };
        })(e);
        return n(t.w, t.h, t.rgba);
      }
    },
    316718: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          fetchUserEntitlementsForApplication: function () {
            return s;
          },
          fetchUserEntitlements: function () {
            return l;
          },
          fetchGiftableEntitlements: function () {
            return o;
          },
        });
      var a = r("872717"),
        n = r("913144"),
        u = r("271560"),
        i = r("49111");
      function s(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          n.default.wait(() => {
            n.default.dispatch({
              type: "ENTITLEMENT_FETCH_APPLICATION_START",
              applicationId: e,
            });
          }),
          a.default
            .get({
              url: i.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
              oldFormErrors: !0,
              query: { exclude_consumed: t },
            })
            .then(
              t => (
                n.default.dispatch({
                  type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                  applicationId: e,
                  entitlements: t.body,
                }),
                t.body
              )
            )
            .catch(() => {
              n.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: e,
              });
            })
        );
      }
      async function l(e) {
        let {
          withSku: t = !1,
          withApplication: r = !1,
          entitlementType: u,
        } = e;
        n.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
        try {
          let e = await a.default.get({
            url: i.Endpoints.ENTITLEMENTS_FOR_USER,
            query: { with_sku: t, with_application: r, entitlement_type: u },
          });
          n.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          n.default.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
        }
      }
      async function o() {
        n.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
        try {
          let e = await (0, u.httpGetWithCountryCodeQuery)({
            url: i.Endpoints.ENTITLEMENTS_GIFTABLE,
          });
          n.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
            entitlements: e.body,
          });
        } catch (e) {
          n.default.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
        }
      }
    },
    202909: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r("804830");
      r.es(a, t);
    },
    714270: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Section: function () {
            return a;
          },
          NONE_ITEM: function () {
            return m;
          },
          SHOP_ITEM: function () {
            return S;
          },
          default: function () {
            return p;
          },
        }),
        r("222007"),
        r("808653"),
        r("424973");
      var a,
        n,
        u = r("884691"),
        i = r("65597"),
        s = r("853987"),
        l = r("775416"),
        o = r("491232"),
        c = r("697218"),
        d = r("719923"),
        f = r("782340");
      ((n = a || (a = {})).PURCHASE = "purchase"),
        (n.PREMIUM_PURCHASE = "premium_purchase"),
        (n.PREVIEW = "preview"),
        (n.PREMIUM_PREVIEW = "premium_preview");
      let m = { id: "None" },
        S = { id: "Shop" };
      var p = () => {
        let e = (0, i.default)([c.default], () => c.default.getCurrentUser()),
          t = d.default.canUseCollectibles(e),
          r = (0, i.default)([l.default], () => l.default.purchases),
          [a, n] = (0, i.useStateFromStoresArray)([s.default], () => [
            s.default.categories,
            s.default.products,
          ]);
        return (0, u.useMemo)(() => {
          let e = (0, o.getAvatarDecorations)(r, a),
            u = e.reduce(
              (e, a) => {
                let u = r.get(a.skuId),
                  i = (0, o.isPremiumCollectiblesPurchase)(u);
                if (
                  (i &&
                    0 === e.premium_purchase.length &&
                    ((e.premium_purchase = e.premium_preview),
                    (e.premium_preview = [])),
                  i)
                )
                  return e.premium_purchase.push(a), e;
                if (null != u) return e.purchase.push(a), e;
                if (!t && (0, o.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
                  let t =
                    e.premium_purchase.length > 0
                      ? e.premium_purchase
                      : e.premium_preview;
                  return t.push(a), e;
                }
                return e.preview.push(a), e;
              },
              {
                purchase: [],
                premium_purchase: [],
                preview: [],
                premium_preview: [],
              }
            );
          return [
            {
              section: "purchase",
              items: [m, S, ...u.purchase],
              height: 12,
              header:
                f.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER,
            },
            {
              section:
                u.premium_purchase.length > 0
                  ? "premium_purchase"
                  : "premium_preview",
              items:
                u.premium_purchase.length > 0
                  ? u.premium_purchase
                  : u.premium_preview,
              height: 12,
              header:
                f.default.Messages
                  .CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER,
            },
            {
              section: "preview",
              items: u.preview,
              height: 12,
              header:
                f.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER,
            },
          ].filter(e => {
            let { items: t } = e;
            return t.length > 0;
          });
        }, [a, n, r, t]);
      };
    },
    791050: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return R;
          },
        }),
        r("222007");
      var a = r("37983"),
        n = r("884691"),
        u = r("265586"),
        i = r("446674"),
        s = r("77078"),
        l = r("812204"),
        o = r("685665"),
        c = r("21526"),
        d = r("491232"),
        f = r("984002"),
        m = r("235898"),
        S = r("170313"),
        p = r("635956"),
        E = r("91653"),
        h = r("697218"),
        _ = r("599110"),
        C = r("719923"),
        I = r("234251"),
        g = r("659117"),
        T = r("765221"),
        v = r("49111"),
        A = r("646718"),
        P = r("782340"),
        N = r("446812");
      function L(e) {
        let {
            user: t,
            categories: r,
            purchases: u,
            analyticsLocations: i,
            onClose: o,
            initialSelectedDecoration: m,
            isTryItOutFlow: h,
            guild: _,
          } = e,
          {
            pendingAvatarDecoration: v,
            setPendingAvatarDecoration: L,
            savedAvatarDecoration: R,
          } = (0, E.default)({
            analyticsLocations: i,
            isTryItOut: h,
            guildId: null == _ ? void 0 : _.id,
          }),
          [y, b] = n.useState(() => {
            var e;
            if (null != m) return m;
            if (void 0 !== v) return v;
            if (null == R || 0 === r.size) return null;
            let t = (0, d.getAvatarDecorations)(u, r);
            return null !==
              (e = t.find(e => (0, I.isEqualAvatarDecoration)(e, R))) &&
              void 0 !== e
              ? e
              : null;
          }),
          { product: x, purchase: M } = (0, f.default)(
            null == y ? void 0 : y.skuId
          ),
          U = C.default.canUseCollectibles(t),
          O = n.useRef(null),
          F = (0, S.default)(i),
          k = (0, I.isEqualAvatarDecoration)(y, void 0 === v ? R : v),
          D = () => {
            L(y), o();
          },
          H = n.useCallback(() => {
            o(),
              (0, c.openCollectiblesShop)({
                analyticsLocations: i,
                analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
                initialProductSkuId: null != y ? y.skuId : void 0,
              });
          }, [i, o, y]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              separator: !1,
              className: N.modalHeader,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children:
                    P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
                }),
                (0, a.jsx)(s.ModalCloseButton, {
                  className: N.modalCloseButton,
                  onClick: o,
                }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              className: N.modalContent,
              scrollbarType: "none",
              children: [
                (0, a.jsx)(T.default, {
                  user: t,
                  guild: _,
                  pendingAvatarDecoration: y,
                  selectedAvatarDecorationRef: O,
                  onSelect: e => {
                    b(e), null != e && F(e);
                  },
                  onOpenShop: H,
                }),
                (0, a.jsx)(g.default, {
                  className: N.modalPreview,
                  user: t,
                  avatarDecorationOverride: y,
                }),
              ],
            }),
            (0, a.jsxs)(s.ModalFooter, {
              className: N.modalFooter,
              children: [
                (() => {
                  let e =
                    null != M &&
                    (!(0, d.isPremiumCollectiblesPurchase)(M) || U);
                  if (e || null === y)
                    return (0, a.jsx)(s.Button, {
                      onClick: D,
                      disabled: k,
                      children:
                        P.default.Messages.AVATAR_DECORATION_MODAL_APPLY,
                    });
                  let r = U || !(0, d.isPremiumCollectiblesProduct)(x);
                  return r
                    ? (0, a.jsx)(s.Button, {
                        className: N.modalFooterShopButton,
                        onClick: H,
                        children:
                          P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                      })
                    : (0, a.jsx)(p.default, {
                        subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: C.default.isPremium(t)
                          ? P.default.Messages
                              .USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL
                          : P.default.Messages
                              .USER_SETTINGS_CUSTOMIZATION_UPSELL,
                      });
                })(),
                (0, a.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: o,
                  children: P.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
      function R(e) {
        let {
            transitionState: t,
            analyticsLocations: r,
            onClose: d,
            initialSelectedDecoration: f,
            isTryItOutFlow: S,
            guild: p,
          } = e,
          E = (0, i.useStateFromStores)([h.default], () =>
            h.default.getCurrentUser()
          ),
          { AnalyticsLocationProvider: C, analyticsLocations: I } = (0,
          o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL),
          {
            categories: g,
            purchases: T,
            isFetchingCategories: A,
            isFetchingPurchases: P,
          } = (0, m.default)(),
          R = A || (P && 0 === T.size);
        return (
          n.useEffect(() => {
            _.default.track(v.AnalyticEvents.OPEN_MODAL, {
              type: "Edit Avatar Decoration Modal",
              location_stack: I,
            });
          }, [I]),
          n.useEffect(
            () => () => {
              (0, c.setCollectiblesCategoryItemsViewed)({
                categories: [...g.values()],
                itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION],
              });
            },
            [g]
          ),
          null == E
            ? null
            : (0, a.jsx)(C, {
                children: (0, a.jsx)(s.ModalRoot, {
                  transitionState: t,
                  className: N.modal,
                  size: R ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
                  children: R
                    ? (0, a.jsx)(s.Spinner, {
                        className: N.spinner,
                        type: s.Spinner.Type.SPINNING_CIRCLE,
                      })
                    : (0, a.jsx)(L, {
                        user: E,
                        guild: p,
                        categories: g,
                        purchases: T,
                        analyticsLocations: I,
                        initialSelectedDecoration: f,
                        onClose: d,
                        isTryItOutFlow: S,
                      }),
                }),
              })
        );
      }
    },
    659117: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return I;
          },
        }),
        r("794252");
      var a = r("37983");
      r("884691");
      var n = r("414456"),
        u = r.n(n),
        i = r("506838"),
        s = r("446674"),
        l = r("77078"),
        o = r("491232"),
        c = r("984002"),
        d = r("716120"),
        f = r("915639"),
        m = r("824563"),
        S = r("719923"),
        p = r("795158"),
        E = r("782340"),
        h = r("295166");
      let _ = [
          { avatarSize: l.AvatarSizes.SIZE_40, showStatus: !1 },
          { avatarSize: l.AvatarSizes.SIZE_32, showStatus: !1 },
          { avatarSize: l.AvatarSizes.SIZE_40, showStatus: !0 },
          { avatarSize: l.AvatarSizes.SIZE_32, showStatus: !0 },
        ],
        C = e => {
          let { purchase: t } = e,
            r = (0, s.useStateFromStores)([f.default], () => f.default.locale),
            n = (0, o.isPremiumCollectiblesPurchase)(t);
          return (0, a.jsxs)("div", {
            className: h.purchaseInfo,
            children: [
              (0, a.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children: t.name,
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: t.summary,
              }),
              (0, a.jsxs)(l.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [
                  E.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                    date: t.purchasedAt.toLocaleDateString(r, {
                      month: "long",
                      year: "numeric",
                    }),
                  }),
                  n &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("br", {}),
                        E.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC,
                      ],
                    }),
                ],
              }),
            ],
          });
        };
      var I = e => {
        let { user: t, avatarDecorationOverride: r, className: n } = e,
          f = (0, s.useStateFromStores)([m.default], () =>
            m.default.getStatus(t.id)
          ),
          {
            category: I,
            product: g,
            purchase: T,
          } = (0, c.default)(null == r ? void 0 : r.skuId),
          v = S.default.canUseCollectibles(t),
          A = (0, o.isPremiumCollectiblesPurchase)(T),
          P = (0, o.isPremiumCollectiblesProduct)(g),
          N = !v && A;
        return null != g && (null == T || N)
          ? (0, a.jsxs)("div", {
              className: u(h.modalPreview, h.shopPreviewContainer, n),
              children: [
                (0, a.jsx)(d.default, {
                  asset: null == I ? void 0 : I.banner,
                  className: h.shopPreviewBanner,
                  children: (0, a.jsx)(p.default, {
                    user: t,
                    avatarDecorationOverride: r,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: h.shopPreviewTextContainer,
                  children: [
                    (0, a.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: g.name,
                    }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: N
                        ? E.default.Messages
                            .CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED
                        : (0, i.match)([P, v])
                            .with(
                              [!0, !0],
                              () =>
                                E.default.Messages
                                  .CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            )
                            .with(
                              [!0, !1],
                              () =>
                                E.default.Messages
                                  .CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            )
                            .otherwise(
                              () =>
                                E.default.Messages
                                  .CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            ),
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className: u(h.modalPreview, n),
              children: [
                (0, a.jsxs)("div", {
                  className: h.previewSections,
                  children: [
                    (0, a.jsx)("div", {
                      className: h.decorationPreview,
                      children: (0, a.jsx)(p.default, {
                        user: t,
                        avatarDecorationOverride: r,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: h.smallDecorationPreviewsContainer,
                      children: _.map(e => {
                        let { avatarSize: n, showStatus: u } = e;
                        return (0, a.jsx)(
                          "div",
                          {
                            className: h.smallDecorationPreview,
                            children: (0, a.jsx)(p.default, {
                              user: t,
                              avatarSize: n,
                              avatarDecorationOverride: r,
                              status: u ? f : void 0,
                              "aria-hidden": !0,
                            }),
                          },
                          "".concat(n).concat(u)
                        );
                      }),
                    }),
                  ],
                }),
                null != T && (0, a.jsx)(C, { purchase: T }),
              ],
            });
      };
    },
    795158: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("77078"),
        u = r("106435"),
        i = r("50885"),
        s = r("782340");
      let l = i.default.getEnableHardwareAcceleration()
        ? n.AnimatedAvatar
        : n.Avatar;
      var o = e => {
        let {
            user: t,
            avatarDecorationOverride: r,
            status: i,
            avatarSize: o = n.AvatarSizes.SIZE_120,
            "aria-hidden": c = !1,
          } = e,
          {
            avatarDecorationSrc: d,
            avatarSrc: f,
            eventHandlers: m,
          } = (0, u.default)({
            user: t,
            size: o,
            showPending: !0,
            avatarDecorationOverride: r,
          });
        return (0, a.jsx)(l, {
          avatarDecoration: d,
          src: f,
          size: o,
          status: i,
          "aria-label": c ? void 0 : s.default.Messages.USER_SETTINGS_AVATAR,
          "aria-hidden": c,
          ...m,
        });
      };
    },
    765221: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return y;
          },
        }),
        r("222007"),
        r("794252");
      var a = r("37983"),
        n = r("884691"),
        u = r("414456"),
        i = r.n(u),
        s = r("506838"),
        l = r("171210"),
        o = r("65597"),
        c = r("77078"),
        d = r("252744"),
        f = r("853987"),
        m = r("426497"),
        S = r("491232"),
        p = r("743826"),
        E = r("216422"),
        h = r("468759"),
        _ = r("600785"),
        C = r("956089"),
        I = r("719923"),
        g = r("234251"),
        T = r("714270"),
        v = r("688318"),
        A = r("782340"),
        P = r("585872");
      let N = () => 80,
        L = e => {
          let {
            children: t,
            className: r,
            onSelect: n,
            isSelected: u = !1,
            ...s
          } = e;
          return (0, a.jsx)(c.Clickable, {
            className: i(P.decorationGridItem, u ? P.selected : void 0, r),
            ...s,
            onClick: n,
            children: t,
          });
        },
        R = e => {
          let {
              user: t,
              avatarDecoration: r,
              innerRef: u,
              section: i,
              isSelected: s = !1,
              ...c
            } = e,
            p = (0, o.default)([f.default], () => {
              let e = f.default.getProduct(r.skuId);
              return (0, S.isPremiumCollectiblesProduct)(e);
            }),
            h = (0, o.default)([m.default], () => m.default.isItemViewed(r)),
            g = I.default.canUseCollectibles(t),
            N = i === T.Section.PREMIUM_PURCHASE && !g,
            [R, y] = n.useState(s);
          n.useEffect(() => {
            s && y(!0);
          }, [s]);
          let b = n.useRef(null),
            x = (0, d.default)(null != u ? u : b),
            { avatarDecorationSrc: M } = (0, v.default)({
              user: t,
              avatarDecorationOverride: r,
              size: 80,
              animateOnHover: !x,
            });
          return (0, a.jsxs)(L, {
            className: N ? P.decorationGridItemChurned : void 0,
            innerRef: null != u ? u : b,
            isSelected: s,
            ...c,
            children: [
              (0, a.jsx)("img", {
                className: P.presetDecorationImg,
                src: M,
                alt: r.label,
              }),
              (() => {
                let e =
                  i === T.Section.PURCHASE ||
                  (i === T.Section.PREMIUM_PURCHASE && g);
                if (e) return null;
                let t = !h && !s && !R;
                return t
                  ? (0, a.jsx)(C.PremiumBadge, {
                      className: P.newBadge,
                      text: (0, a.jsxs)("div", {
                        className: P.newBadgeText,
                        children: [
                          (0, a.jsx)(_.default, { width: 12, height: 12 }),
                          A.default.Messages.NEW,
                        ],
                      }),
                    })
                  : (0, a.jsx)(C.IconBadge, {
                      icon: p
                        ? () => (0, a.jsx)(E.default, { width: 14, height: 14 })
                        : () =>
                            (0, a.jsx)(_.default, { width: 12, height: 12 }),
                      color: l.default.BACKGROUND_ACCENT,
                      className: P.iconBadge,
                    });
              })(),
            ],
          });
        };
      var y = e => {
        let {
            user: t,
            guild: r,
            pendingAvatarDecoration: n,
            selectedAvatarDecorationRef: u,
            onSelect: i,
            onOpenShop: l,
          } = e,
          o = (0, T.default)();
        return (0, a.jsx)(c.MasonryList, {
          fade: !0,
          className: P.list,
          columns: 3,
          sections: o.map(e => {
            let { items: t } = e;
            return t.length;
          }),
          sectionGutter: 16,
          itemGutter: 12,
          paddingHorizontal: 12,
          paddingVertical: 0,
          removeEdgeItemGutters: !0,
          renderItem: (e, d, f, m) => {
            let { section: S, items: E } = o[e];
            return (0, s.match)(E[d])
              .with(T.NONE_ITEM, () =>
                (0, a.jsxs)(
                  L,
                  {
                    style: { ...f },
                    isSelected: null === n,
                    onSelect: () => i(null),
                    children: [
                      (0, a.jsx)(h.default, { className: P.notAllowedIcon }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: (0, g.hasGlobalDefaultAvatarDecoration)(t, r)
                          ? A.default.Messages
                              .USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION
                          : A.default.Messages.NONE,
                      }),
                    ],
                  },
                  m
                )
              )
              .with(T.SHOP_ITEM, () =>
                (0, a.jsxs)(
                  L,
                  {
                    style: f,
                    onSelect: l,
                    children: [
                      (0, a.jsx)(p.default, { className: P.shopIcon }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: A.default.Messages.COLLECTIBLES_SHOP,
                      }),
                    ],
                  },
                  m
                )
              )
              .otherwise(e => {
                let r = (null == n ? void 0 : n.id) === e.id;
                return (0, a.jsx)(
                  R,
                  {
                    style: { ...f },
                    user: t,
                    avatarDecoration: e,
                    section: S,
                    innerRef: r ? u : void 0,
                    isSelected: r,
                    onSelect: () => i(e),
                  },
                  m
                );
              });
          },
          renderSection: e => {
            let { header: t } = o[e];
            return (0, a.jsx)("div", {
              className: P.headings,
              children: (0, a.jsx)(c.HeadingLevel, {
                forceLevel: 5,
                children: (0, a.jsx)(c.Heading, {
                  variant: "eyebrow",
                  color: "header-secondary",
                  children: t,
                }),
              }),
            });
          },
          getSectionHeight: e => o[e].height,
          getItemKey: (e, t) => o[e].items[t].id,
          getItemHeight: N,
        });
      };
    },
    619935: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useBlockedPaymentsConfig: function () {
            return s;
          },
          default: function () {
            return l;
          },
        });
      var a = r("862205"),
        n = r("15733");
      let u = (0, a.createExperiment)({
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
        let { paymentsBlocked: e } = u.useExperiment(
            { location: "c519a9_1" },
            { autoTrackExposure: !1 }
          ),
          { checkPaymentSource: t } = i.useExperiment(
            { location: "c519a9_2" },
            { autoTrackExposure: !1 }
          ),
          { defaultBillingCountryCode: r } = (0, n.default)();
        return e || (t && "RU" === r);
      }
      var l = u;
    },
    308592: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useSubscriptionPlansLoaded: function () {
            return c;
          },
          getSubscriptionPlansLoaded: function () {
            return d;
          },
        }),
        r("222007");
      var a = r("446674"),
        n = r("605250"),
        u = r("357957"),
        i = r("10514"),
        s = r("521012"),
        l = r("646718");
      new n.default("useSubscriptionPlansLoaded");
      let o = e => {};
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [...l.ACTIVE_PREMIUM_SKUS];
        return (0, a.useStateFromStores)(
          [u.default, i.default, s.default],
          () => d(e, [u.default, i.default, s.default]),
          [e]
        );
      }
      function d() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [...l.ACTIVE_PREMIUM_SKUS],
          [r, a, n] =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [u.default, i.default, s.default],
          c = r.paymentSourceIds,
          d = r.defaultPaymentSourceId,
          f = a.isLoadedForSKUs(t),
          m =
            null === (e = n.getPremiumTypeSubscription()) || void 0 === e
              ? void 0
              : e.paymentSourceId;
        if (null != m && !a.hasPaymentSourceForSKUIds(m, t))
          return (
            o(
              "subscription payment source "
                .concat(m, " not loaded for ")
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
    716120: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return m;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("414456"),
        u = r.n(n),
        i = r("65597"),
        s = r("854588"),
        l = r("206230"),
        o = r("284679"),
        c = r("491232"),
        d = r("408381"),
        f = r("467618"),
        m = e => {
          let {
              asset: t,
              assetUrlOverride: r,
              size: n = d.MAX_CONTENT_WIDTH,
              addGradient: m = !0,
              className: S,
              style: p,
              children: E,
            } = e,
            h = (0, i.default)([l.default], () => l.default.saturation);
          return (0, a.jsx)("div", {
            className: u(f.banner, S),
            style: (() => {
              if (null == t) return p;
              if (1 === h)
                return null != r
                  ? {
                      ...p,
                      backgroundImage: m
                        ? "url(".concat(
                            r,
                            "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"
                          )
                        : "url(".concat(r, ")"),
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }
                  : {
                      ...p,
                      backgroundImage: "url(".concat(
                        (0, c.getCollectiblesAssetURL)(t, {
                          size: n,
                          format: "jpg",
                        }),
                        ")"
                      ),
                      backgroundSize: "cover",
                    };
              let e = (0, o.hexOpacityToRgba)(
                s.default.unsafe_rawColors.BLACK_500,
                1 - h
              );
              return {
                ...p,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, c.getCollectiblesAssetURL)(t, {
                      size: n,
                      format: "jpg",
                    }),
                    ")"
                  ),
                backgroundBlendMode: "saturation",
                backgroundSize: "cover",
              };
            })(),
            children: E,
          });
        };
    },
    408381: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          MAX_CONTENT_WIDTH: function () {
            return u;
          },
          getAssetSizeByHeight: function () {
            return i;
          },
          getBackgroundGradient: function () {
            return s;
          },
          getConfettiSprites: function () {
            return c;
          },
        });
      var a = r("635058"),
        n = r("547630");
      let u = 1060,
        i = e => e * (0, n.default)(),
        s = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: r, secondary: a } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(r.toHslString(), ", ")
            .concat(a.toHslString(), ")");
        },
        l = [r("424869"), r("714293")],
        o = {
          ["".concat(a.CollectiblesCategorySkuId.FANTASY)]: [
            r("655029"),
            r("290216"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.ANIME)]: [
            r("597704"),
            r("714293"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.BREAKFAST)]: [
            r("286642"),
            r("94646"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.HALLOWEEN)]: [
            r("638538"),
            r("861485"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.FALL)]: [
            r("740683"),
            r("489847"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.WINTER)]: [
            r("770704"),
            r("165057"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.MONSTERS)]: [
            r("330825"),
            r("125221"),
          ],
        },
        c = e => {
          var t;
          return null == e ? l : null !== (t = o[e]) && void 0 !== t ? t : l;
        };
    },
    854381: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var a = r("446674"),
        n = r("10514"),
        u = r("713518"),
        i = r("646718"),
        s = r("843455");
      function l(e) {
        var t, r;
        let {
          activeSubscription: l,
          skuIDs: o,
          paymentSourceId: c,
          isGift: d,
        } = e;
        o = o.filter(e => e !== i.PremiumSubscriptionSKUs.NONE);
        let f = (0, a.useStateFromStores)([n.default], () => {
            let e = n.default
              .getPlanIdsForSkus(o)
              .filter(e => !d || i.PREMIUM_PLANS.has(e));
            return e.length > 0 ? n.default.get(e[0]) : null;
          }),
          m = null == f ? [] : (0, u.getCurrencies)(f.id, c, d),
          S =
            null !==
              (r =
                null !==
                  (t = m.find(e => e === (null == l ? void 0 : l.currency))) &&
                void 0 !== t
                  ? t
                  : m[0]) && void 0 !== r
              ? r
              : s.CurrencyCodes.USD;
        return {
          ...(0, u.useCurrencyWithPaymentSourceChange)(
            S,
            null == f ? void 0 : f.id,
            c,
            d,
            o
          ),
          currencies: m,
        };
      }
    },
    986681: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        }),
        r("222007");
      var a = r("884691"),
        n = r("446674"),
        u = r("850068"),
        i = r("357957");
      function s(e) {
        let { isGift: t, activeSubscription: r } = e,
          {
            defaultPaymentSourceId: s,
            paymentSources: l,
            hasFetchedPaymentSources: o,
          } = (0, n.useStateFromStoresObject)([i.default], () => ({
            defaultPaymentSourceId: i.default.defaultPaymentSourceId,
            paymentSources: i.default.paymentSources,
            hasFetchedPaymentSources: i.default.hasFetchedPaymentSources,
          })),
          c = (e, t, r) =>
            e || (null == t ? void 0 : t.paymentSourceId) == null
              ? r
              : t.paymentSourceId,
          [d, f] = a.useState(() => c(t, r, s));
        return (
          a.useEffect(() => {
            o ? f(c(t, r, s)) : (0, u.fetchPaymentSources)();
          }, [o, t, r, s]),
          {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: o,
          }
        );
      }
    },
    716849: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          NON_SUBSCRIBER_SENTINEL: function () {
            return p;
          },
          maybeFetchPremiumLikelihood: function () {
            return h;
          },
          useMaybeFetchPremiumLikelihood: function () {
            return _;
          },
        });
      var a = r("884691"),
        n = r("65597"),
        u = r("872717"),
        i = r("913144"),
        s = r("775433"),
        l = r("697218"),
        o = r("10514"),
        c = r("764364"),
        d = r("719923"),
        f = r("676572"),
        m = r("646718"),
        S = r("49111");
      let p = "nonSubscriber";
      async function E() {
        try {
          i.default.dispatch({ type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH" });
          let { body: e } = await u.default.get({
            url: S.Endpoints.USER_PREMIUM_LIKELIHOOD,
          });
          i.default.dispatch({
            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
            premiumLikelihood: (function (e) {
              return {
                [p]: e.non_subscriber,
                [m.PremiumSubscriptionSKUs.TIER_0]:
                  e[m.PremiumSubscriptionSKUs.TIER_0],
                [m.PremiumSubscriptionSKUs.TIER_2]:
                  e[m.PremiumSubscriptionSKUs.TIER_2],
              };
            })(e),
          });
        } catch (e) {
          404 === e.status
            ? i.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
              })
            : i.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR",
              });
        }
      }
      function h(e) {
        let { enabled: t, useExpectedValue: r } = e.getCurrentConfig(
            { location: "443cca_1" },
            { autoTrackExposure: !1 }
          ),
          a = f.default.shouldFetchPremiumLikelihood(),
          n = l.default.getCurrentUser();
        C(n, a, t, r);
      }
      function _(e) {
        let { enabled: t, useExpectedValue: r } = e.useExperiment(
            { location: "443cca_2" },
            { autoTrackExposure: !1 }
          ),
          u = (0, n.default)([f.default], () =>
            f.default.shouldFetchPremiumLikelihood()
          ),
          i = (0, n.default)([l.default], () => l.default.getCurrentUser());
        a.useEffect(() => {
          C(i, u, t, r);
        }, [i, u, t, r]);
      }
      function C(e, t, r, a) {
        null != e &&
          !(0, c.isPremium)(e) &&
          r &&
          (t && E(),
          a &&
            (!o.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                m.PremiumSubscriptionSKUs.TIER_0
              )
            ) &&
              !o.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  m.PremiumSubscriptionSKUs.TIER_0
                )
              ) &&
              (0, s.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  m.PremiumSubscriptionSKUs.TIER_0
                )
              ),
            !o.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                m.PremiumSubscriptionSKUs.TIER_2
              )
            ) &&
              !o.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  m.PremiumSubscriptionSKUs.TIER_2
                )
              ) &&
              (0, s.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  m.PremiumSubscriptionSKUs.TIER_2
                )
              )));
      }
    },
    676572: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var a = r("446674"),
        n = r("913144");
      let u = { premiumLikelihood: void 0, isFetching: !1, fetched: !1 },
        i = u;
      class s extends a.default.Store {
        initialize() {
          i = u;
        }
        getState() {
          return i;
        }
        shouldFetchPremiumLikelihood() {
          return !i.isFetching && !i.fetched;
        }
      }
      s.displayName = "UserPremiumLikelihoodStore";
      var l = new s(n.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function () {
          i.isFetching = !0;
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function (e) {
          let { premiumLikelihood: t } = e;
          (i.premiumLikelihood = t), (i.fetched = !0), (i.isFetching = !1);
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function () {
          i.isFetching = !1;
        },
        LOGOUT: function () {
          i.premiumLikelihood = void 0;
        },
      });
    },
    552917: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var a = r("862205");
      let n = (0, a.createExperiment)({
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
      var u = n;
    },
    15733: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var a = r("884691"),
        n = r("446674"),
        u = r("913144"),
        i = r("850068"),
        s = r("271938"),
        l = r("160299"),
        o = r("357957");
      function c() {
        let e = (0, n.useStateFromStores)([o.default], () =>
            o.default.getDefaultBillingCountryCode()
          ),
          t = (0, n.useStateFromStores)(
            [l.default],
            () => l.default.ipCountryCode
          ),
          r = (0, n.useStateFromStores)([s.default], () =>
            s.default.isAuthenticated()
          );
        return (
          a.useEffect(() => {
            u.default.wait(() => {
              r &&
                !l.default.isPaymentSourceFetching &&
                !o.default.hasFetchedPaymentSources &&
                i.fetchPaymentSources();
            });
          }, [r]),
          a.useEffect(() => {
            r && !l.default.ipCountryCodeLoaded && i.fetchIpCountryCode();
          }, [t, r]),
          { defaultBillingCountryCode: e, ipCountryCode: t }
        );
      }
    },
    216422: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("469563"),
        u = r("202909"),
        i = r("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: r = 24,
              color: n = "currentColor",
              viewBox: u = "0 0 24 24",
              foreground: s,
              ...l
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(l),
              width: t,
              height: r,
              viewBox: u,
              children: (0, a.jsx)("path", {
                className: s,
                fill: n,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          u.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    600785: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("469563"),
        u = r("434657"),
        i = r("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: r = 24,
              color: n = "currentColor",
              foreground: u,
              ...s
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: r,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: u,
                fill: n,
                id: "a",
                d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
              }),
            });
          },
          u.LockIcon,
          void 0,
          { size: 24 }
        );
    },
    713518: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          fetchSubscriptionPlansOnNewPaymentSource: function () {
            return m;
          },
          getCurrencies: function () {
            return S;
          },
          planHasCurrency: function () {
            return p;
          },
          useCurrencyWithPaymentSourceChange: function () {
            return E;
          },
        }),
        r("222007");
      var a = r("884691"),
        n = r("627445"),
        u = r.n(n),
        i = r("913144"),
        s = r("775433"),
        l = r("308592"),
        o = r("10514"),
        c = r("719923"),
        d = r("49111"),
        f = r("646718");
      function m(e) {
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
      function S(e, t, r) {
        let a,
          n = [],
          i = [],
          s = {
            purchaseType: r
              ? d.PriceSetAssignmentPurchaseTypes.GIFT
              : d.PriceSetAssignmentPurchaseTypes.DEFAULT,
          };
        return (
          u(
            (a = "string" == typeof e ? o.default.get(e) : e),
            "subscription plan not loaded"
          ),
          null != t &&
            o.default.hasPaymentSourceForSKUId(t, a.skuId) &&
            (s.paymentSourceId = t),
          (n = (i = (0, c.experimentalGetPrices)(a.id, s)).map(e => e.currency))
            .length < 1 && (n = [d.CurrencyCodes.USD]),
          n
        );
      }
      function p(e, t, r) {
        let a = o.default.get(e);
        u(null != a, "plan is undefined");
        let n = S(a, r, !1);
        return n.includes(t);
      }
      function E(e, t, r, n, u) {
        let [i, s] = a.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != r
              ? { paymentSourceId: r, currency: e, loaded: !1 }
              : { currency: e, loaded: !1 }
          ),
          c = (0, l.useSubscriptionPlansLoaded)(u);
        a.useEffect(() => {
          let e = async () => {
            await m(r, u);
            let e = [];
            null != t && null != o.default.get(t) && (e = S(t, r, n)),
              e.length > 0
                ? s({ paymentSourceId: r, currency: e[0], loaded: !0 })
                : s({ paymentSourceId: r, loaded: !1 });
          };
          e();
        }, [r, JSON.stringify(u), t, n, c]);
        let d = i.paymentSourceId !== r || null == t || !c || !0 !== i.loaded;
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
    804830: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          NitroWheelIcon: function () {
            return i;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("669491"),
        u = r("82169");
      let i = e => {
        let {
          width: t = 24,
          height: r = 24,
          color: i = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...l
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, u.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: r,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: s,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: s,
            }),
          ],
        });
      };
    },
    635058: function (e, t, r) {
      "use strict";
      var a, n;
      r.r(t),
        r.d(t, {
          CollectiblesCategorySkuId: function () {
            return a;
          },
        }),
        r("222007"),
        ((n = a || (a = {})).FANTASY = "1144003461608906824"),
        (n.ANIME = "1144302037593497701"),
        (n.BREAKFAST = "1144054000099012659"),
        (n.DISXCORE = "1144058340327047249"),
        (n.HALLOWEEN = "1157410718711304313"),
        (n.FALL = "1157406994873991284"),
        (n.WINTER = "1174459301239197856"),
        (n.MONSTERS = "1179493515038818325"),
        (n.CYBERPUNK = "1197342727608746044"),
        (n.LUNAR_NEW_YEAR = "1202069709281828935"),
        (n.ELEMENTS = "1207046915880124426"),
        (n.ANIME_V2 = "1212565175790473246"),
        (n.SPECIAL_EVENTS = "1217175518781243583"),
        (n.SPRINGTOONS = "1217622942175727736");
    },
  },
]);
//# sourceMappingURL=4bae547187a04b1bb361.js.map
