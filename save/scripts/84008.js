(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84008"],
  {
    247329: function (e, t, a) {
      "use strict";
      e.exports = a.p + "d7f558364208761f7a1f.png";
    },
    333838: function (e, t, a) {
      "use strict";
      e.exports = a.p + "f42f024b20ca1139f6e8.png";
    },
    399637: function (e, t, a) {
      "use strict";
      e.exports = a.p + "a4d34e0beb715b3ae5ca.png";
    },
    976076: function (e, t, a) {
      "use strict";
      e.exports = a.p + "7fe8141f020d02e97188.png";
    },
    482500: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ca941f4d08cfb641e3f8.jpg";
    },
    818127: function (e, t, a) {
      "use strict";
      e.exports = a.p + "83dc5aeaa37c361f7721.jpg";
    },
    530514: function (e, t, a) {
      "use strict";
      e.exports = a.p + "bd9de058e9a42d99d512.jpg";
    },
    162332: function (e, t, a) {
      "use strict";
      e.exports = a.p + "335ca339550d5be86785.jpg";
    },
    266772: function (e, t, a) {
      "use strict";
      e.exports = a.p + "29894d1856711771a15a.jpg";
    },
    200406: function (e, t, a) {
      "use strict";
      e.exports = a.p + "da2e3e6f963314b6a1e7.png";
    },
    283045: function (e, t, a) {
      "use strict";
      e.exports = a.p + "26da69d314fb3ced9795.png";
    },
    718297: function (e, t, a) {
      "use strict";
      e.exports = a.p + "5d06cba0502c778b92e5.png";
    },
    929880: function (e, t, a) {
      "use strict";
      e.exports = a.p + "bdc1b9ae0098085fe138.png";
    },
    204173: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e67f00e8b56d263737a6.jpg";
    },
    489847: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ab3468632852f3725893.png";
    },
    330825: function (e, t, a) {
      "use strict";
      e.exports = a.p + "79903b7cc64eb6d55aa8.png";
    },
    165057: function (e, t, a) {
      "use strict";
      e.exports = a.p + "50eb2aa99e75c1b8630a.png";
    },
    94646: function (e, t, a) {
      "use strict";
      e.exports = a.p + "c5c556a5e9be016ffb2d.png";
    },
    286642: function (e, t, a) {
      "use strict";
      e.exports = a.p + "a3edb1330403965aa3f6.png";
    },
    655029: function (e, t, a) {
      "use strict";
      e.exports = a.p + "6fac2c0e5ed90d06b3b9.png";
    },
    740683: function (e, t, a) {
      "use strict";
      e.exports = a.p + "7b9383fd24920a3a95b7.png";
    },
    714293: function (e, t, a) {
      "use strict";
      e.exports = a.p + "295744c4b4e7cb95b539.png";
    },
    861485: function (e, t, a) {
      "use strict";
      e.exports = a.p + "16abeb1745235d8aea66.png";
    },
    424869: function (e, t, a) {
      "use strict";
      e.exports = a.p + "f1c62ecb6594a7168ae2.png";
    },
    638538: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ac20c9a7b69e25e9d680.png";
    },
    125221: function (e, t, a) {
      "use strict";
      e.exports = a.p + "8ffd6f59392e09ba0fe4.png";
    },
    770704: function (e, t, a) {
      "use strict";
      e.exports = a.p + "81aef01431a5e1293160.png";
    },
    597704: function (e, t, a) {
      "use strict";
      e.exports = a.p + "7bb17dc88ff31be285a8.png";
    },
    290216: function (e, t, a) {
      "use strict";
      e.exports = a.p + "1616ba0a324e68a4fff7.png";
    },
    321220: function (e, t, a) {
      "use strict";
      e.exports = a.p + "0e8e3e9463a4afbcd15a.svg";
    },
    684386: function (e, t, a) {
      "use strict";
      e.exports = a.p + "44b2c2b3210b29c00990.svg";
    },
    93902: function (e, t, a) {
      "use strict";
      e.exports = a.p + "de1981a6479d060d8ebd.png";
    },
    481120: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          usePageScrollPosition: function () {
            return o;
          },
        });
      var r = a("884691"),
        s = a("748820"),
        l = a("560103"),
        n = a("599110");
      let i = (e, t, a, r) => {
          let {
            scrollTop: s = 0,
            scrollOffset: l = 0,
            scrollHeight: i = 0,
            scrollWidth: o = 0,
          } = r;
          if (i > 0) {
            let r = (s + l) / i;
            r > 0 &&
              n.default.track(e, {
                scroll_visible_percent: r,
                source: a,
                page_height: Math.round(i),
                page_width: Math.round(o),
                page_session_id: t,
              });
          }
        },
        o = (e, t) => {
          let a = r.useRef(null),
            n = r.useRef((0, s.v4)()),
            o = (0, l.useThrottledFunction)(i, 5e3, [], { trailing: !0 }),
            c = r.useCallback(() => {
              var r;
              let s =
                null === (r = a.current) || void 0 === r
                  ? void 0
                  : r.getScrollerNode();
              null != s &&
                o(e, n.current, t, {
                  scrollTop: s.scrollTop,
                  scrollOffset: s.offsetHeight,
                  scrollHeight: s.scrollHeight,
                  scrollWidth: s.scrollWidth,
                });
            }, [o, e, t]);
          return { scrollerRef: a, scrollHandler: c, sessionId: n.current };
        };
    },
    12480: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var r = a("862205");
      a("773336");
      let s = (0, r.createExperiment)({
        kind: "user",
        id: "2024-01_mobile_shop",
        label: "Mobile Shop Experiment",
        defaultConfig: {
          mobileShopEnabled: !1,
          showPaymentSuccessViewInsteadOfPDP: !1,
          shouldAnimateAvatarDecorationsInIndexPages: !1,
          shouldFakePurchaseSuccessFlowLocally: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enables mobile shop",
            config: {
              mobileShopEnabled: !0,
              showPaymentSuccessViewInsteadOfPDP: !1,
              shouldAnimateAvatarDecorationsInIndexPages: !1,
              shouldFakePurchaseSuccessFlowLocally: !1,
            },
          },
          {
            id: 601,
            label: "Show payment success view instead of PDP",
            config: {
              mobileShopEnabled: !0,
              showPaymentSuccessViewInsteadOfPDP: !0,
              shouldAnimateAvatarDecorationsInIndexPages: !1,
              shouldFakePurchaseSuccessFlowLocally: !1,
            },
          },
          {
            id: 602,
            label: "Animate decorations in home/index page",
            config: {
              mobileShopEnabled: !0,
              showPaymentSuccessViewInsteadOfPDP: !1,
              shouldAnimateAvatarDecorationsInIndexPages: !0,
              shouldFakePurchaseSuccessFlowLocally: !1,
            },
          },
          {
            id: 603,
            label: "Simulate Success Flow Locally",
            config: {
              mobileShopEnabled: !0,
              showPaymentSuccessViewInsteadOfPDP: !0,
              shouldAnimateAvatarDecorationsInIndexPages: !1,
              shouldFakePurchaseSuccessFlowLocally: !0,
            },
          },
        ],
      });
      var l = e => {
        let { location: t } = e;
        return s.useExperiment({ location: t });
      };
    },
    846893: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var r = a("446674"),
        s = a("913144");
      function l(e, t) {
        let a = {};
        return (
          e.forEach(e => {
            a[e] = t;
          }),
          a
        );
      }
      let n = {},
        i = new Date("2024-03-13").getTime(),
        o = new Date("2024-03-27").getTime(),
        c = [
          "1212569433839636530",
          "1212569856189407352",
          "1212570343567261736",
          "1212570596970467378",
          "1212581147675205652",
          "1212581390936178768",
          "1212582298893946880",
          "1212582372877541427",
          "1212582452640350238",
        ],
        u = [
          "1217624148080332820",
          "1217625289681801316",
          "1217625572168044604",
          "1217625794382401577",
          "1217626024540508170",
          "1217626509737459852",
          "1217627051217911848",
          "1217627230818009171",
        ];
      class d extends r.default.PersistedStore {
        initialize(e) {
          n = null != e ? e : {};
        }
        getState() {
          return n;
        }
        getIsProductNew(e) {
          var t;
          return Date.now() < (null !== (t = n[e]) && void 0 !== t ? t : 0);
        }
      }
      (d.displayName = "CollectiblesProductFreshnessStore"),
        (d.persistKey = "CollectiblesProductFreshnessStore"),
        (d.migrations = [
          () => l(c, i),
          () => l(u, o),
          e => ({ ...e, "1217626219651006495": o }),
        ]);
      var f = new d(s.default, {
        COLLECTIBLES_PRODUCT_DETAILS_CLOSE: function (e) {
          delete n[e.item.skuId];
        },
      });
    },
    702953: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useCollectiblesShopTallerCardsExperiment: function () {
            return l;
          },
        });
      var r = a("862205");
      let s = (0, r.createExperiment)({
          kind: "user",
          id: "2023-11_collectibles_shop_taller_cards",
          label: "Collectibles Shop Taller Cards",
          defaultConfig: { tallerCardsEnabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enables taller cards in shop",
              config: { tallerCardsEnabled: !0 },
            },
          ],
        }),
        l = e => {
          let { location: t } = e;
          return s.useExperiment({ location: t });
        };
    },
    546483: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        }),
        a("222007");
      var r = a("656280"),
        s = a.n(r),
        l = a("65597"),
        n = a("206230"),
        i = a("388491");
      let o = (e, t) => {
          let a = e.toRgb(),
            r = t.toRgb(),
            [l, n, o] = (0, i.getValueInColorGradientByPercentage)(
              [a.r, a.g, a.b],
              [r.r, r.g, r.b],
              50
            );
          return s({ r: l, g: n, b: o });
        },
        c = (e, t) => {
          if (0 !== t.length)
            return 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  border: t[0].setAlpha(0.4),
                  label: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  border: o(t[0], t[1]).setAlpha(0.4),
                  label: o(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        u = (e, t) => {
          if (0 !== t.length)
            return 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  text: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  text: o(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        d = (e, t) => {
          let { h: a, s: r, l } = e.toHsl();
          return s({ h: a, s: r * t, l });
        };
      var f = e => t => {
        let a = (0, l.useStateFromStores)(
          [n.default],
          () => n.default.saturation
        );
        if (null == t) return {};
        let r = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: u(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === a
          ? {
              ...r,
              isDarkText: !!(
                null != r.backgroundColors &&
                r.backgroundColors.secondary.isLight()
              ),
            }
          : {
              backgroundColors:
                null != r.backgroundColors
                  ? {
                      primary: d(r.backgroundColors.primary, a),
                      secondary: d(r.backgroundColors.secondary, a),
                      border: d(r.backgroundColors.border, a),
                      label: d(r.backgroundColors.label, a),
                    }
                  : void 0,
              buttonColors:
                null != r.buttonColors
                  ? {
                      primary: d(r.buttonColors.primary, a),
                      secondary: d(r.buttonColors.secondary, a),
                      text: d(r.buttonColors.text, a),
                    }
                  : void 0,
              confettiColors: r.confettiColors.map(e => d(e, a)),
              isDarkText: !!(
                null != r.backgroundColors &&
                r.backgroundColors.secondary.isLight()
              ),
            };
      };
    },
    98148: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var r = a("862205");
      let s = (0, r.createExperiment)({
        kind: "user",
        id: "2024-03_collectibles_hide_descriptions",
        label: "Hide collectibles description experiment",
        defaultConfig: {
          productCardDescriptionHidden: !1,
          productDetailModalDescriptionHidden: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enables hiding product card descriptions",
            config: {
              productCardDescriptionHidden: !0,
              productDetailModalDescriptionHidden: !1,
            },
          },
          {
            id: 2,
            label: "Enables hiding product card and detail modal descriptions",
            config: {
              productCardDescriptionHidden: !0,
              productDetailModalDescriptionHidden: !0,
            },
          },
        ],
      });
      var l = e => {
        let { location: t } = e;
        return s.useExperiment({ location: t });
      };
    },
    698957: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var r = a("862205");
      let s = (0, r.createExperiment)({
        kind: "user",
        id: "2024-02_collectibles_hide_shop_banner",
        label: "Hide shop banner Experiment",
        defaultConfig: { shopBannerHidden: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables hiding shop banner",
            config: { shopBannerHidden: !0 },
          },
        ],
      });
      var l = e => {
        let { location: t } = e;
        return s.useExperiment({ location: t });
      };
    },
    990139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ShopCardHoverAnimationVariant: function () {
            return s;
          },
          useShopCardHoverAnimationExperiment: function () {
            return i;
          },
        });
      var r,
        s,
        l = a("862205");
      ((r = s || (s = {}))[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (r[(r.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
      let n = (0, l.createExperiment)({
          kind: "user",
          id: "2024-03_shop_card_hover_animation",
          label: "Shop card hover animation experiment",
          defaultConfig: { hoverVariant: 0 },
          treatments: [
            {
              id: 1,
              label: "Use CSS Transformation",
              config: { hoverVariant: 1 },
            },
            { id: 2, label: "No hover movement", config: { hoverVariant: 2 } },
          ],
        }),
        i = e => n.useExperiment({ location: e });
    },
    235898: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        }),
        a("222007");
      var r = a("884691"),
        s = a("65597"),
        l = a("875212"),
        n = a("21526"),
        i = a("853987"),
        o = a("12480"),
        c = a("775416");
      function u(e) {
        var t;
        let a = "useFetchCollectiblesCategoriesAndPurchases";
        (0, l.useTriggerDebuggingAA)({
          location: a + " auto on",
          autoTrackExposure: !0,
        }),
          (0, l.useTriggerDebuggingAA)({
            location: a + " auto off",
            autoTrackExposure: !1,
          });
        let {
            isFetching: u,
            categories: d,
            error: f,
          } = (function (e) {
            let t = "useMaybeFetchCollectiblesCategories";
            (0, l.useTriggerDebuggingAA)({
              location: t + " auto on",
              autoTrackExposure: !0,
            }),
              (0, l.useTriggerDebuggingAA)({
                location: t + " auto off",
                autoTrackExposure: !1,
              });
            let [a, o, c, u] = (0, s.useStateFromStoresArray)(
              [i.default],
              () => {
                var e;
                return [
                  i.default.isFetching,
                  i.default.error,
                  null !== (e = i.default.lastFetched) && void 0 !== e ? e : 0,
                  i.default.categories,
                ];
              }
            );
            return (
              (0, r.useEffect)(() => {
                !(a || o || Date.now() - c < 6e5) &&
                  (0, n.fetchCollectiblesCategories)(e);
              }, [a, c, o, e]),
              { isFetching: a, categories: u, error: o }
            );
          })(e),
          {
            isClaiming: m,
            fetchError: p,
            claimError: g,
            isFetching: C,
            purchases: h,
          } = (function () {
            let e = "useFetchPurchases";
            (0, l.useTriggerDebuggingAA)({
              location: e + " auto on",
              autoTrackExposure: !0,
            }),
              (0, l.useTriggerDebuggingAA)({
                location: e + " auto off",
                autoTrackExposure: !1,
              });
            let [t, a, i, u, d] = (0, s.useStateFromStoresArray)(
                [c.default],
                () => [
                  c.default.isFetching,
                  c.default.isClaiming,
                  c.default.fetchError,
                  c.default.claimError,
                  c.default.purchases,
                ]
              ),
              { shouldFakePurchaseSuccessFlowLocally: f } = (0, o.default)({
                location: "useFetchPurchases",
              });
            return (
              (0, r.useEffect)(() => {
                (!f || !(d.size > 0)) && (0, n.fetchCollectiblesPurchases)();
              }, [f]),
              {
                isClaiming: a,
                fetchError: i,
                claimError: u,
                isFetching: t,
                purchases: d,
              }
            );
          })(),
          E = null !== (t = null != f ? f : p) && void 0 !== t ? t : g;
        return {
          isFetching: u || C,
          isFetchingCategories: u,
          isFetchingPurchases: C,
          isClaiming: m,
          categories: d,
          purchases: h,
          error: E,
        };
      }
    },
    296304: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          usePurchasedCategoriesSort: function () {
            return n;
          },
        }),
        a("222007"),
        a("424973");
      var r = a("884691"),
        s = a("65597"),
        l = a("775416");
      let n = e => {
        let t = (0, s.useStateFromStores)(
            [l.default],
            () => l.default.purchases
          ),
          a = (0, r.useMemo)(() => {
            let a = [],
              r = [];
            for (let s of e.values()) {
              let e = s.products.every(e => !!t.get(e.skuId));
              e ? a.push(s) : r.push(s);
            }
            return r.concat(a);
          }, [e, t]);
        return a;
      };
    },
    334820: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          usePurchasedProductsSort: function () {
            return n;
          },
        }),
        a("222007"),
        a("424973");
      var r = a("884691"),
        s = a("65597"),
        l = a("775416");
      let n = e => {
        let t = (0, s.useStateFromStores)(
            [l.default],
            () => l.default.purchases
          ),
          a = (0, r.useMemo)(() => {
            let a = [],
              r = [];
            for (let s of e.values())
              void 0 !== t.get(s.skuId) ? a.push(s) : r.push(s);
            return r.concat(a);
          }, [e, t]);
        return a;
      };
    },
    677257: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var r = a("656280"),
        s = a.n(r),
        l = a("669491"),
        n = a("546483");
      let i = s(
          l.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        o = s(
          l.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
        ),
        c = (0, n.default)({ dark: o, light: i });
      var u = c;
    },
    716120: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("65597"),
        i = a("854588"),
        o = a("206230"),
        c = a("284679"),
        u = a("491232"),
        d = a("408381"),
        f = a("467618"),
        m = e => {
          let {
              asset: t,
              assetUrlOverride: a,
              size: s = d.MAX_CONTENT_WIDTH,
              addGradient: m = !0,
              className: p,
              style: g,
              children: C,
            } = e,
            h = (0, n.useStateFromStores)(
              [o.default],
              () => o.default.saturation
            );
          return (0, r.jsx)("div", {
            className: l(f.banner, p),
            style: (() => {
              if (null == t) return g;
              if (1 === h)
                return null != a
                  ? {
                      ...g,
                      backgroundImage: m
                        ? "url(".concat(
                            a,
                            "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"
                          )
                        : "url(".concat(a, ")"),
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }
                  : {
                      ...g,
                      backgroundImage: "url(".concat(
                        (0, u.getCollectiblesAssetURL)(t, {
                          size: s,
                          format: "jpg",
                        }),
                        ")"
                      ),
                      backgroundSize: "cover",
                    };
              let e = (0, c.hexOpacityToRgba)(
                i.default.unsafe_rawColors.BLACK_500,
                1 - h
              );
              return {
                ...g,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, u.getCollectiblesAssetURL)(t, {
                      size: s,
                      format: "jpg",
                    }),
                    ")"
                  ),
                backgroundBlendMode: "saturation",
                backgroundSize: "cover",
              };
            })(),
            children: C,
          });
        };
    },
    89569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useProductDetailsLinkableRoute: function () {
            return p;
          },
          useProductDetailsDeepLinking: function () {
            return C;
          },
        }),
        a("781738"),
        a("222007"),
        a("424973");
      var r = a("884691"),
        s = a("803182"),
        l = a("446674"),
        n = a("812204"),
        i = a("685665"),
        o = a("216719"),
        c = a("54809"),
        u = a("49111");
      let d = "".concat("#").concat("itemSkuId", "="),
        f = new RegExp("^".concat(d, "(\\d+)$")),
        m = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
        p = e => {
          let t = (0, s.useLocation)();
          r.useEffect(() => {
            if (null != e && m.includes(t.pathname))
              return (
                window.location.replace("".concat(d).concat(e.skuId)),
                () => {
                  window.location.hash.startsWith(d) &&
                    window.location.replace("#");
                }
              );
          }, []);
        },
        g = e => {
          let {
            categories: t,
            productSkuId: a,
            analyticsLocations: r,
            analyticsSource: s,
            initialItemCardRef: l,
          } = e;
          for (let e of t.values()) {
            let t = e.products.find(e => e.skuId === a);
            if (null != t) {
              var n;
              null === (n = l.current) ||
                void 0 === n ||
                n.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              let a = setTimeout(() => {
                let a = document.getElementById("shop-item-".concat(t.skuId));
                a !== document.activeElement && (null == a || a.focus()),
                  (0, c.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: e,
                    analyticsSource: s,
                    analyticsLocations: r,
                    returnRef: l,
                  });
              }, 750);
              return () => clearTimeout(a);
            }
          }
          return () => {};
        },
        C = e => {
          let {
              categories: t,
              isFetchingCategories: a,
              isLayer: c,
              initialItemCardRef: d,
            } = e,
            m = r.useRef(null),
            p = (0, s.useLocation)(),
            C =
              p.pathname === u.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : p.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, i.default)(C);
          r.useEffect(() => {
            if (c) return;
            let e = f.exec(p.hash);
            if (null != e) {
              let t = e[1];
              m.current = t;
            }
          }, []);
          let E = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.initialProductSkuId
          );
          r.useEffect(() => {
            if (a) return;
            let e = null;
            if (
              (c && null != E && (e = E),
              !c && null != m.current && (e = m.current),
              null != e)
            ) {
              let a = [],
                r = setTimeout(() => {
                  let r = g({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: h,
                    analyticsSource: C,
                    initialItemCardRef: d,
                  });
                  a.push(r);
                }, 250);
              return (
                a.push(() => clearTimeout(r)),
                () => {
                  a.forEach(e => e());
                }
              );
            }
          }, [c, h, C, t, a, E, d]);
        };
    },
    342676: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        }),
        a("794252");
      var r,
        s,
        l = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        o = a("506838"),
        c = a("956089"),
        u = a("782340"),
        d = a("53248");
      ((s = r || (r = {})).BANNER = "banner"),
        (s.MODAL = "modal"),
        (s.CARD = "card");
      var f = e => {
        let { category: t, display: a, className: r } = e;
        if (null == t.unpublishedAt) return null;
        let s = (function (e) {
          let t = new Date(),
            a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
            r = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
          return Math.floor((r - a) / 864e5);
        })(t.unpublishedAt);
        function n(e) {
          return (0, l.jsx)(c.TextBadge, {
            disableColor: !0,
            text: e,
            className: i(d.badge, r),
          });
        }
        return (0, o.match)([a, s > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () => {
            let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
              days: s,
            });
            return n(e);
          })
          .with(["modal", !0], () => {
            let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
              days: s,
            });
            return n(e);
          })
          .otherwise(() => {
            let e = u.default.Messages.COLLECTIBLES_LAST_DAY;
            return n(e);
          });
      };
    },
    258556: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return es;
          },
        }),
        a("794252"),
        a("222007");
      var r = a("37983"),
        s = a("884691"),
        l = a("414456"),
        n = a.n(l),
        i = a("917351"),
        o = a("506838"),
        c = a("265586"),
        u = a("65597"),
        d = a("151426"),
        f = a("551042"),
        m = a("77078"),
        p = a("939488"),
        g = a("304580"),
        C = a("841098"),
        h = a("812204"),
        E = a("685665"),
        b = a("481120"),
        S = a("890503"),
        x = a("10641"),
        T = a("539938"),
        v = a("210721"),
        L = a("65324"),
        I = a("778588"),
        N = a("697218"),
        _ = a("764490"),
        k = a("29557"),
        O = a("599110"),
        y = a("719923"),
        A = a("439932"),
        P = a("21526"),
        R = a("411691"),
        j = a("216719"),
        B = a("702953"),
        F = a("698957"),
        D = a("235898"),
        M = a("296304"),
        w = a("334820"),
        H = a("89569"),
        U = a("419513"),
        W = a("434393"),
        G = a("571464"),
        V = a("43525"),
        z = a("798235"),
        K = a("931262"),
        Y = a("695824"),
        X = a("518907"),
        Z = a("368560"),
        q = a("49111"),
        $ = a("994428"),
        J = a("894282"),
        Q = a("646718"),
        ee = a("782340"),
        et = a("922063");
      function ea(e) {
        let { isFullScreen: t } = e,
          a = (0, R.default)("CollectiblesShop");
        return (0, o.match)(a)
          .with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () =>
            (0, r.jsx)(z.default, { isFullScreen: t })
          )
          .otherwise(() => (0, r.jsx)(V.default, { isFullScreen: t }));
      }
      function er(e) {
        var t, a;
        let {
            category: l,
            className: o,
            isPremiumUser: d,
            initialItemCardRef: f,
            isGiftEasterEggEnabled: p,
            setIsGiftEasterEggEnabled: g,
            showEasterEggToggle: C,
          } = e,
          h = s.useRef(10 + 70 * Math.random()),
          E = (0, w.usePurchasedProductsSort)(l.products),
          b = (0, i.groupBy)(E, "type"),
          S = (0, u.useStateFromStores)(
            [j.default],
            () => j.default.initialProductSkuId
          ),
          { tallerCardsEnabled: x } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          T = x ? X.default : W.default,
          I = s.useCallback(
            e => t => {
              e.skuId === S && (f.current = t.current);
            },
            [S, f]
          ),
          N = (e, t) =>
            0 === e.length
              ? null
              : (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)(m.Text, {
                      className: n(et.itemTypeTitle, {
                        [et.itemTypeTitleForTallerCard]: x,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, r.jsx)("div", {
                      className: n(
                        et.cardsContainer,
                        x ? et.tallerShopCard : et.regularShopCard,
                        o
                      ),
                      children: e.map(e =>
                        (0, r.jsx)(
                          T,
                          {
                            onMount: I(e),
                            isPremiumUser: d,
                            category: l,
                            product: e,
                            isGiftEasterEggEnabled: p,
                          },
                          e.skuId
                        )
                      ),
                    }),
                  ],
                });
        return (0, r.jsxs)("div", {
          className: et.categoryWrapper,
          children: [
            C &&
              (0, r.jsx)(m.Clickable, {
                className: n(et.hiddenWumpus, { [et.hiddenWumpusEnabled]: p }),
                onClick: () => g(!0),
                style: { left: "".concat(h.current, "%") },
                children: (0, r.jsx)(L.default, {
                  idleAnimationState: v.AnimationState.IDLE,
                  giftStyle: Q.PremiumGiftStyles.BOX,
                }),
              }),
            (0, r.jsx)(U.default, {
              category: l,
              className: x ? et.tallerShopCardBanner : void 0,
            }),
            N(
              null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) &&
                void 0 !== t
                ? t
                : [],
              ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
            ),
            N(
              null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) &&
                void 0 !== a
                ? a
                : [],
              ee.default.Messages
                .PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
            ),
          ],
        });
      }
      var es = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: l } = (0,
          u.useStateFromStoresObject)([j.default], () =>
            j.default.getAnalytics()
          ),
          { analyticsLocations: i } = (0, E.default)([
            ...l,
            h.default.COLLECTIBLES_SHOP,
          ]),
          o = (0, u.useStateFromStores)([I.default], () =>
            I.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)
          ),
          v = (0, f.useHasAnyModalOpen)(),
          { onClose: L } = (0, K.useCollectiblesShopRouting)(),
          R = (0, u.useStateFromStores)([N.default], () =>
            N.default.getCurrentUser()
          ),
          w = y.default.canUseCollectibles(R),
          U = (0, S.default)("shop_disable_cache"),
          W = (0, S.default)("shop_include_unpublished"),
          {
            categories: V,
            isFetchingCategories: z,
            error: X,
          } = (0, D.default)({ noCache: U, includeUnpublished: W }),
          es = (0, M.usePurchasedCategoriesSort)(V),
          { tallerCardsEnabled: el } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          en = s.useRef(null),
          [ei, eo] = s.useState(!1);
        (0, H.useProductDetailsDeepLinking)({
          categories: V,
          isFetchingCategories: z,
          isLayer: o,
          initialItemCardRef: en,
        });
        let {
          sessionId: ec,
          scrollerRef: eu,
          scrollHandler: ed,
        } = (0, b.usePageScrollPosition)(
          q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        s.useEffect(() => {
          O.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: i,
            source: a,
            page_session_id: ec,
          }),
            !w &&
              O.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                location_stack: i,
              });
        }, [w, i, a, ec]),
          s.useEffect(() => {
            !(0, x.isDismissibleContentDismissed)(
              d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK
            ) &&
              (0, x.markDismissibleContentAsDismissed)(
                d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
                {
                  dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
                  forceTrack: !0,
                }
              );
          }, []),
          s.useEffect(() => {
            !t && (0, p.setHomeLink)(q.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          s.useEffect(
            () => () => {
              (0, P.setCollectiblesCategoryItemsViewed)({
                categories: [...V.values()],
                itemTypes: [
                  c.CollectiblesItemType.AVATAR_DECORATION,
                  c.CollectiblesItemType.PROFILE_EFFECT,
                ],
              });
            },
            [V]
          ),
          s.useEffect(() => {
            if (!t || o || v) return;
            let e = e => {
              e.key === J.KeyboardEventKey.Escape && L();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, o, v, L]);
        let ef = s.useCallback(() => {
            (0, P.fetchCollectiblesCategories)({
              noCache: U,
              includeUnpublished: W,
            });
          }, [U, W]),
          em = (0, C.default)(),
          { shopBannerHidden: ep } = (0, F.default)({
            location: "CollectiblesShop",
          }),
          { containerRef: eg, returnRef: eC } = (function () {
            let e = s.useRef(null),
              t = s.useRef(null);
            return (
              (0, m.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, r.jsxs)(E.AnalyticsLocationProvider, {
          value: i,
          children: [
            (0, r.jsxs)("div", {
              className: et.shop,
              ref: t ? eg : void 0,
              children: [
                t
                  ? null
                  : (0, r.jsxs)(T.default, {
                      className: n((0, A.getThemeClass)(em), et.headerBar),
                      toolbar: !0,
                      children: [
                        (0, r.jsx)(k.default, { className: et.logo }),
                        (0, r.jsx)(T.default.Title, {
                          className: et.title,
                          children: ee.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, r.jsx)("div", {
                    className: et.closeWrapper,
                    children: (0, r.jsx)(g.default, {
                      className: et.close,
                      closeAction: o ? P.closeCollectiblesShop : L,
                      keybind: "ESC",
                    }),
                  }),
                (0, r.jsx)(m.AdvancedScroller, {
                  className: n(et.shopScroll, {
                    [et.shopScrollBackgroundPrimary]: el,
                  }),
                  ref: eu,
                  onScroll: ed,
                  children: (0, r.jsx)("div", {
                    className: n(et.pageWrapper, {
                      [et.pageWrapperFullscreen]: t,
                      [et.pageWrapperBackgroundPrimary]: el,
                    }),
                    children: (0, r.jsxs)("main", {
                      className: n(et.page, {
                        [et.pageWithShopBannerHidden]: ep && !t,
                      }),
                      children: [
                        t
                          ? (0, r.jsx)(_.default, {
                              title: ee.default.Messages.COLLECTIBLES_SHOP,
                              ref: t ? eC : void 0,
                            })
                          : null,
                        !ep && (0, r.jsx)(ea, { isFullScreen: t }),
                        z
                          ? (0, r.jsx)(Y.default, {})
                          : X
                            ? (0, r.jsx)(G.default, { onRetry: ef })
                            : (0, r.jsx)("div", {
                                className: et.categories,
                                children: es
                                  .filter(e => {
                                    let { products: t } = e;
                                    return t.length > 0;
                                  })
                                  .map(e =>
                                    (0, r.jsx)(
                                      er,
                                      {
                                        isPremiumUser: w,
                                        category: e,
                                        initialItemCardRef: en,
                                        setIsGiftEasterEggEnabled: eo,
                                        isGiftEasterEggEnabled: ei,
                                      },
                                      e.skuId
                                    )
                                  ),
                              }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            ei && (0, r.jsx)(Z.default, {}),
          ],
        });
      };
    },
    419513: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LOGO_SIZE: function () {
            return I;
          },
          default: function () {
            return _;
          },
        });
      var r = a("37983"),
        s = a("884691"),
        l = a("414456"),
        n = a.n(l),
        i = a("635058"),
        o = a("65597"),
        c = a("77078"),
        u = a("685665"),
        d = a("649844"),
        f = a("697218"),
        m = a("153769"),
        p = a("270227"),
        g = a("719923"),
        C = a("491232"),
        h = a("677257"),
        E = a("716120"),
        b = a("342676"),
        S = a("408381"),
        x = a("380171"),
        T = a("646718"),
        v = a("782340"),
        L = a("858422");
      let I = (0, C.getLogoSize)(96),
        N = e => {
          let { category: t } = e,
            { analyticsLocations: a } = (0, u.default)(),
            l = s.useRef(null),
            n = (0, o.useStateFromStores)([f.default], () =>
              f.default.getCurrentUser()
            );
          return g.default.canUseCollectibles(n)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                children:
                  v.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, r.jsx)(c.Clickable, {
                          innerRef: l,
                          className: L.getPremiumHook,
                          onClick: () => {
                            (0, d.default)({
                              subscriptionTier:
                                T.PremiumSubscriptionSKUs.TIER_2,
                              analyticsLocations: a,
                              returnRef: l,
                            });
                          },
                          tag: "span",
                          children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            tag: "span",
                            children: e,
                          }),
                        }),
                    }
                  ),
              });
        };
      function _(e) {
        var t, a;
        let { category: s, className: l } = e,
          { backgroundColors: o } = (0, h.default)(s.styles),
          u = !!(null === (t = x.categoryBannerOverrides[s.skuId]) ||
          void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return (0, r.jsxs)(E.default, {
          asset: s.banner,
          className: n(L.shopBanner, l),
          style:
            null != o
              ? {
                  background: "".concat(
                    (0, S.getBackgroundGradient)(o),
                    " border-box border-box"
                  ),
                  outlineColor: o.border.toHslString(),
                }
              : void 0,
          children: [
            (0, r.jsxs)("div", {
              className: L.discordLogo,
              children: [
                (0, r.jsx)(m.default, { className: L.discordIcon }),
                (0, r.jsx)(p.default, { className: L.discordWordmark }),
              ],
            }),
            (0, r.jsx)("img", {
              className: L.categoryLogo,
              src: (0, C.getCollectiblesAssetURL)(s.logo, { size: I }),
              alt: s.name,
              style: {
                maxWidth:
                  null === (a = x.categoryBannerOverrides[s.skuId]) ||
                  void 0 === a
                    ? void 0
                    : a.logoMaxWidth,
              },
            }),
            (0, r.jsx)(c.Text, {
              className: n(L.summary, { [L.blackSummary]: u }),
              variant: "text-md/normal",
              children:
                s.skuId === i.CollectiblesCategorySkuId.DISXCORE
                  ? (0, r.jsx)(N, { category: s })
                  : s.summary,
            }),
            (0, r.jsx)(b.default, {
              category: s,
              className: L.limitedTimeBadge,
              display: "banner",
            }),
          ],
        });
      }
    },
    434393: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return K;
          },
        }),
        a("222007");
      var r = a("37983"),
        s = a("884691"),
        l = a("414456"),
        n = a.n(l),
        i = a("265586"),
        o = a("65597"),
        c = a("77078"),
        u = a("54239"),
        d = a("252744"),
        f = a("812204"),
        m = a("685665"),
        p = a("606292"),
        g = a("688318"),
        C = a("946964"),
        h = a("635956"),
        E = a("38766"),
        b = a("601095"),
        S = a("493390"),
        x = a("697218"),
        T = a("944441"),
        v = a("462579"),
        L = a("216422"),
        I = a("956089"),
        N = a("50885"),
        _ = a("21526"),
        k = a("775416"),
        O = a("491232"),
        y = a("98148"),
        A = a("677257"),
        P = a("342676"),
        R = a("450492"),
        j = a("920580"),
        B = a("54809"),
        F = a("408381"),
        D = a("264579"),
        M = a("646718"),
        w = a("782340"),
        H = a("682123");
      let U = N.default.getEnableHardwareAcceleration()
          ? c.AnimatedAvatar
          : c.Avatar,
        W = c.AvatarSizes.SIZE_120,
        G = (0, p.getDecorationSizeForAvatarSize)(W),
        V = e => {
          let { children: t, onClick: a, ...s } = e;
          return (0, r.jsx)(c.Button, {
            fullWidth: !0,
            look: c.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...s,
            children: t,
          });
        },
        z = e => {
          let { className: t, ...a } = e;
          return (0, r.jsx)(c.Button, {
            color: c.ButtonColors.CUSTOM,
            look: c.Button.Looks.FILLED,
            size: c.ButtonSizes.ICON,
            className: n(H.previewButton, t),
            innerClassName: H.previewButtonInner,
            "aria-label": w.default.Messages.PREVIEW,
            ...a,
            children: (0, r.jsx)(v.default, { width: 24, height: 24 }),
          });
        };
      var K = function (e) {
        let {
            product: t,
            category: a,
            onMount: l,
            isPremiumUser: v = !1,
            isGiftEasterEggEnabled: N,
          } = e,
          { analyticsLocations: K } = (0, m.default)(
            f.default.COLLECTIBLES_SHOP_CARD
          ),
          Y = s.useRef(null),
          X = (0, d.default)(Y),
          [Z, q] = s.useState(!1),
          $ = X || Z,
          J = (0, o.useStateFromStores)([x.default], () =>
            x.default.getCurrentUser()
          ),
          [Q] = t.items,
          {
            avatarDecorationSrc: ee,
            eventHandlers: et,
            avatarPlaceholderSrc: ea,
          } = (0, g.default)({
            user: J,
            avatarDecorationOverride:
              (null == Q ? void 0 : Q.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? Q
                : void 0,
            size: G,
            animateOnHover: !$,
          }),
          { productCardDescriptionHidden: er } = (0, y.default)({
            location: "CollectiblesShopCard",
          }),
          { buttonColors: es, backgroundColors: el } = (0, A.default)(t.styles),
          en = (0, O.getFormattedPriceForCollectiblesProduct)(t, v),
          ei = (0, O.isPremiumCollectiblesProduct)(t),
          eo = (0, O.isFreeCollectiblesProduct)(t),
          [ec, eu, ed] = (0, o.useStateFromStoresArray)([k.default], () => [
            k.default.getPurchase(t.skuId),
            k.default.isClaiming === t.skuId,
            null != k.default.isClaiming && k.default.isClaiming !== t.skuId,
          ]),
          ef = s.useRef(null);
        s.useEffect(() => {
          let { current: e } = Y;
          if (null == e) return;
          let t = () => q(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []);
        let em = (0, E.default)({ analyticsLocations: K }),
          ep = () => {
            if (
              ((0, u.popLayer)(),
              em(),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, p.openAvatarDecorationModal)({
                initialSelectedDecoration: Q,
                analyticsLocations: K,
              });
              return;
            }
            (null == Q ? void 0 : Q.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, S.openProfileEffectModal)({
                initialSelectedEffectId: Q.id,
                analyticsLocations: K,
              });
          },
          eg = e => r => {
            (ef.current = r.currentTarget),
              (0, B.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: K,
                analyticsSource: e,
                returnRef: ef,
              });
          },
          eC = eg(f.default.COLLECTIBLES_SHOP_CARD),
          eh = eg(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eE = () =>
            (0, r.jsx)("div", {
              className: H.hoverUpsellContainer,
              children: (0, r.jsx)(h.default, {
                fullWidth: !0,
                className: H.premiumSubscribeButton,
                disabled: ed,
                onClick: e => e.stopPropagation(),
                buttonText: w.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == l || l(Y);
        }, [l]);
        let eb = () =>
            null != ec
              ? (0, r.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: H.priceTag,
                  children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : ei
                ? (0, r.jsx)(c.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: H.priceTag,
                    children:
                      w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, r.jsx)(j.default, {
                    product: t,
                    className: H.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eS = () =>
            ei
              ? null
              : eo
                ? (0, r.jsx)(z, {
                    style:
                      null != es
                        ? {
                            background: es.secondary.toHslString(),
                            color: es.text.toHslString(),
                          }
                        : void 0,
                    className: H.defaultPreviewButtonColor,
                    onClick: eh,
                  })
                : (0, r.jsx)(R.default, {
                    product: t,
                    returnRef: Y,
                    isGiftEasterEggEnabled: N,
                    tooltipDelay: 250,
                  }),
          ex = () => {
            if (ei && !v && !eo) return eE();
            let e =
                null != es
                  ? {
                      background: (0, F.getBackgroundGradient)(es, 90),
                      color: es.text.toHslString(),
                    }
                  : void 0,
              a = ei
                ? {
                    submitting: eu,
                    submittingStartedLabel:
                      w.default.Messages.COLLECTIBLES_COLLECTING,
                    submittingFinishedLabel:
                      w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                    onClick: async () => {
                      await (0, _.claimPremiumCollectiblesProduct)(t.skuId),
                        (0, D.default)({ product: t, analyticsLocations: K });
                    },
                  }
                : {
                    onClick: () =>
                      (0, C.default)({
                        skuId: t.skuId,
                        analyticsLocations: K,
                        returnRef: Y,
                      }),
                  };
            return (0, r.jsxs)("div", {
              className: H.buttonsContainer,
              children: [
                null == ec
                  ? (0, r.jsx)(V, {
                      style: e,
                      disabled: ed,
                      className: H.purchaseButton,
                      ...a,
                      children: ei
                        ? w.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : w.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: en,
                          }),
                    })
                  : (0, r.jsx)(V, {
                      style: e,
                      disabled: ed,
                      onClick: ep,
                      children: w.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                eS(),
              ],
            });
          },
          eT =
            null != el
              ? {
                  background: "".concat(
                    (0, F.getBackgroundGradient)(el),
                    " border-box border-box"
                  ),
                  borderColor: el.border.toHslString(),
                  boxShadow: $
                    ? "0 0 25px 1px ".concat(el.primary.toHslString())
                    : "none",
                }
              : void 0;
        return (0, r.jsx)(c.FocusRing, {
          children: (0, r.jsxs)(c.Clickable, {
            innerRef: Y,
            className: H.shopCard,
            onBlur: () => q(!1),
            onClick: eC,
            style: eT,
            id: "shop-item-".concat(t.skuId),
            children: [
              ei &&
                (0, r.jsx)(c.Tooltip, {
                  tooltipContentClassName: H.premiumWheelTooltipContent,
                  color: c.Tooltip.Colors.PRIMARY,
                  text: w.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, r.jsx)(I.TextBadge, {
                      ...e,
                      className: H.premiumWheelBadge,
                      text: (0, r.jsx)(L.default, {
                        className: H.premiumWheel,
                      }),
                    }),
                }),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, r.jsx)("div", {
                  className: H.profileEffectShopPreview,
                  children: (0, r.jsx)(b.default, {
                    isHovering: $,
                    profileEffectId: Q.id,
                    isPurchased: null != ec,
                  }),
                }),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, r.jsx)(U, {
                  ...et,
                  avatarDecoration: ee,
                  src: ea,
                  className: n(H.avatar, { [H.avatarPurchased]: null != ec }),
                  size: W,
                  "aria-label": w.default.Messages.USER_SETTINGS_AVATAR,
                }),
              null != ec
                ? (0, r.jsx)("div", {
                    className:
                      (null == Q ? void 0 : Q.type) ===
                      i.CollectiblesItemType.PROFILE_EFFECT
                        ? H.profileEffectCheckmarkWrapper
                        : H.checkmarkWrapper,
                    children: (0, r.jsx)(T.default, {
                      width: 38,
                      height: 38,
                      className: H.checkmark,
                    }),
                  })
                : null,
              (0, r.jsxs)("div", {
                className: n(H.cardText, {
                  [H.cardTextProfileEffect]:
                    (null == Q ? void 0 : Q.type) ===
                    i.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, r.jsx)(c.Text, {
                    color: "always-white",
                    variant: "text-lg/bold",
                    className: H.productName,
                    children: t.name,
                  }),
                  (0, r.jsxs)("div", {
                    className: H.detailsWrapper,
                    children: [
                      (0, r.jsxs)("div", {
                        className: H.innerBlur,
                        children: [
                          !er &&
                            (0, r.jsx)(c.Text, {
                              color: "always-white",
                              className: H.description,
                              variant: "text-md/normal",
                              children: t.summary,
                            }),
                          eb(),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: H.innerHover,
                        children: ex(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(P.default, {
                category: a,
                className: H.limitedTimeBadge,
                display: "card",
              }),
            ],
          }),
        });
      };
    },
    380171: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          categoryBannerOverrides: function () {
            return s;
          },
        });
      var r = a("635058");
      let s = {
        [r.CollectiblesCategorySkuId.SPRINGTOONS]: {
          assetUrlOverride: a("266772"),
          logoMaxWidth: "48%",
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [r.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: a("482500"),
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [r.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: a("530514"),
          addGradient: !0,
        },
        [r.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: a("162332"),
          addGradient: !0,
        },
        [r.CollectiblesCategorySkuId.CYBERPUNK]: {
          assetUrlOverride: a("818127"),
          addGradient: !0,
        },
      };
    },
    571464: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("819855"),
        l = a("77078"),
        n = a("841098"),
        i = a("782340"),
        o = a("706055"),
        c = a("321220"),
        u = a("684386"),
        d = e => {
          let { onRetry: t } = e,
            a = (0, n.default)();
          return (0, r.jsxs)("div", {
            className: o.wrapper,
            children: [
              (0, r.jsx)("img", {
                className: o.loadIssueImg,
                src: (0, s.isThemeDark)(a) ? c : u,
                alt: "",
              }),
              (0, r.jsx)(l.Heading, {
                className: o.heading1,
                variant: "heading-xl/semibold",
                children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
              }),
              (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
              }),
              (0, r.jsx)(l.Button, {
                className: o.reload,
                size: l.Button.Sizes.MEDIUM,
                color: l.Button.Colors.BRAND_NEW,
                onClick: t,
                children: i.default.Messages.ERRORS_RELOAD,
              }),
            ],
          });
        };
    },
    450492: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var r = a("37983"),
        s = a("884691"),
        l = a("77078"),
        n = a("252744"),
        i = a("685665"),
        o = a("108486"),
        c = a("946964"),
        u = a("978679"),
        d = a("677257"),
        f = a("843455"),
        m = a("782340"),
        p = a("691164");
      let g = {
        dark: [
          { box: "#FFF19E", ribbon: "#FF484B" },
          { box: "#17B5E2", ribbon: "#FFFFFF" },
          { box: "#FFE1A6", ribbon: "#C29CFF" },
          { box: "#60DA81", ribbon: "#FFF597" },
          { box: "#E4578A", ribbon: "#BEC4FF" },
          { box: "#AFE0FC", ribbon: "#FF9356" },
          { box: "#DB6D6D", ribbon: "#67DA9C" },
        ],
        light: [
          { box: "#FFF19E", ribbon: "#FF484B" },
          { box: "#025D90", ribbon: "#70FFF8" },
          { box: "#C29CFF", ribbon: "#255FA3" },
          { box: "#6AC082", ribbon: "#DED052" },
          { box: "#AC448B", ribbon: "#4845B8" },
          { box: "#175B82", ribbon: "#F9D249" },
          { box: "#B54141", ribbon: "#026530" },
        ],
      };
      var C = e => {
        let {
            product: t,
            returnRef: a,
            onSuccess: C,
            tooltipDelay: h,
            isGiftEasterEggEnabled: E,
            disableCustomColor: b = !1,
          } = e,
          { analyticsLocations: S } = (0, i.default)(),
          x = s.useRef(null),
          T = (0, n.default)(x),
          { buttonColors: v } = (0, d.default)(t.styles),
          L =
            null == v || b
              ? void 0
              : {
                  background: v.secondary.toHslString(),
                  color: v.text.toHslString(),
                },
          I =
            b || (null == v ? void 0 : v.text.isDark())
              ? f.ThemeTypes.DARK
              : f.ThemeTypes.LIGHT;
        return (0, r.jsx)(l.Tooltip, {
          text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, r.jsx)(l.Button, {
              ...e,
              buttonRef: x,
              style: L,
              className: p.giftButton,
              color: b ? l.ButtonColors.BRAND : l.ButtonColors.CUSTOM,
              look: l.Button.Looks.FILLED,
              size: l.ButtonSizes.ICON,
              innerClassName: p.giftButtonInner,
              "aria-label": m.default.Messages.PREMIUM_GIFTING_BUTTON,
              onClick: e => {
                e.stopPropagation(),
                  (0, c.default)({
                    skuId: t.skuId,
                    isGift: !0,
                    analyticsLocations: S,
                    returnRef: a,
                    onClose:
                      null != C
                        ? e => {
                            e && C();
                          }
                        : void 0,
                  });
              },
              children: E
                ? (0, r.jsx)(o.SeasonalGiftIcon, {
                    hovered: T,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: g,
                  })
                : (0, r.jsx)(u.default, { width: 24, height: 24 }),
            }),
        });
      };
    },
    43525: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("313506"),
        c = a("247329"),
        u = a("333838"),
        d = a("399637"),
        f = a("976076"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, r.jsxs)("div", {
            className: o.heroBanner,
            children: [
              (0, r.jsxs)("div", {
                className: l(o.heroDescription, {
                  [o.heroDescriptionWithSidebar]: !t,
                }),
                children: [
                  (0, r.jsx)(n.Heading, {
                    className: o.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, r.jsx)(n.Text, {
                    className: o.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      i.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE,
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: o.bannerBackgroundWrapper,
                children: (0, r.jsx)("img", {
                  className: o.bannerBackground,
                  alt: "",
                  src: c,
                }),
              }),
              (0, r.jsx)("img", {
                className: o.bannerForeground,
                alt: "",
                src: u,
              }),
              (0, r.jsx)("img", { className: o.bannerHand, alt: "", src: d }),
              (0, r.jsx)("img", {
                className: l(o.largeSparkle, o.largeTopSparkle),
                alt: "",
                src: f,
              }),
              (0, r.jsx)("img", {
                className: l(o.smallSparkle, o.smallTopSparkle),
                alt: "",
                src: f,
              }),
              (0, r.jsx)("img", {
                className: l(o.largeSparkle, o.largeLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, r.jsx)("img", {
                className: l(o.smallSparkle, o.smallLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, r.jsx)("img", {
                className: l(o.largeSparkle, o.largeRightSparkle),
                alt: "",
                src: f,
              }),
              (0, r.jsx)("img", {
                className: l(o.smallSparkle, o.smallRightSparkle),
                alt: "",
                src: f,
              }),
            ],
          });
        };
    },
    798235: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("859155"),
        c = a("200406"),
        u = a("283045"),
        d = a("718297"),
        f = a("929880"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, r.jsxs)("div", {
            className: l(
              o.heroBanner,
              t ? o.heroBannerFullScreen : o.heroBannerWithSidebar
            ),
            children: [
              (0, r.jsxs)("div", {
                className: o.heroDescription,
                children: [
                  (0, r.jsx)(n.Heading, {
                    className: o.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, r.jsx)(n.Text, {
                    className: o.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      i.default.Messages
                        .COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT,
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: o.bannerArt,
                children: [
                  (0, r.jsx)("img", {
                    className: o.bannerGrid,
                    alt: "",
                    src: c,
                    width: "484",
                    height: "402",
                  }),
                  (0, r.jsx)("img", {
                    className: o.bannerGridSmol,
                    alt: "",
                    src: d,
                    width: "85",
                    height: "60",
                  }),
                  (0, r.jsx)("img", {
                    className: o.bannerGridMedium,
                    alt: "",
                    src: u,
                    width: "178",
                    height: "106",
                  }),
                  (0, r.jsx)("img", {
                    className: o.bannerHand,
                    alt: "",
                    src: f,
                    width: "265",
                    height: "238",
                  }),
                ],
              }),
            ],
          });
        };
    },
    920580: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("65597"),
        i = a("755854"),
        o = a("77078"),
        c = a("161778"),
        u = a("697218"),
        d = a("216422"),
        f = a("719923"),
        m = a("491232"),
        p = a("791309"),
        g = a("49111"),
        C = a("782340"),
        h = a("193527");
      function E(e) {
        let {
            product: t,
            className: a,
            innerClassName: s,
            disableTooltipPointerEvents: E,
            alwaysWhiteText: b = !0,
            nitroWheelColor: S,
          } = e,
          x = (0, n.useStateFromStores)([u.default], () =>
            u.default.getCurrentUser()
          ),
          T = (0, n.useStateFromStores)([c.default], () =>
            (0, i.isThemeDark)(c.default.theme)
          ),
          v = (0, m.extractPriceByPurchaseTypes)(
            t,
            g.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
        if (null == v) return null;
        if (v.amount <= 0)
          return (0, r.jsx)("div", {
            className: l(h.priceTagsContainer, a),
            children: (0, r.jsx)(p.default, {
              alwaysWhiteText: b,
              price: v,
              className: s,
            }),
          });
        let L = (0, m.extractPriceByPurchaseTypes)(
            t,
            g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
          ),
          I = !f.default.canUseCollectibles(x);
        return (0, r.jsxs)("div", {
          className: l(h.priceTagsContainer, a),
          children: [
            (0, r.jsx)(p.default, {
              alwaysWhiteText: b,
              price: v,
              className: l([s, I ? void 0 : h.strikedPrice]),
            }),
            null != L &&
              (0, r.jsx)(p.default, {
                price: L,
                alwaysWhiteText: b,
                renderPrice: I
                  ? e =>
                      C.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: l([s, I ? h.fullPrice : void 0]),
                variant: I ? "text-xs/semibold" : void 0,
                icon: (0, r.jsx)(o.Tooltip, {
                  text: C.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": C.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: E,
                  children: e => {
                    let { ...t } = e;
                    return (0, r.jsx)(d.default, {
                      ...t,
                      className: l(h.premiumIcon, { [h.fullPrice]: I }),
                      color: null != S ? S : b || T ? "white" : "black",
                    });
                  },
                }),
              }),
          ],
        });
      }
    },
    791309: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("77078"),
        i = a("153160"),
        o = a("468437"),
        c = e => {
          var t;
          let {
              price: { amount: a, currency: s },
              renderPrice: c,
              icon: u,
              className: d,
              variant: f = "heading-md/semibold",
              alwaysWhiteText: m = !0,
            } = e,
            p = (0, i.formatPrice)(a, s);
          return (0, r.jsxs)(n.Heading, {
            variant: f,
            color: m ? "always-white" : "none",
            className: l(o.heading, d),
            children: [
              u,
              null !== (t = null == c ? void 0 : c(p)) && void 0 !== t ? t : p,
            ],
          });
        };
    },
    54809: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          openCollectiblesShopProductDetailsModal: function () {
            return n;
          },
          closeCollectiblesShopProductDetailsModal: function () {
            return i;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("77078");
      let l = "collectibles shop product details modal",
        n = e => {
          let {
            product: t,
            category: n,
            analyticsSource: i,
            analyticsLocations: o,
            returnRef: c,
          } = e;
          (0, s.openModalLazy)(
            async () => {
              let { default: e } = await a
                .el("179047")
                .then(a.bind(a, "179047"));
              return a =>
                (0, r.jsx)(e, {
                  ...a,
                  product: t,
                  category: n,
                  analyticsSource: i,
                  analyticsLocations: o,
                  returnRef: c,
                });
            },
            { modalKey: l }
          );
        },
        i = () => {
          (0, s.closeModal)(l);
        };
    },
    931262: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useCollectiblesShopRouting: function () {
            return u;
          },
        }),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660"),
        a("222007");
      var r,
        s,
        l = a("884691"),
        n = a("90915"),
        i = a("54239"),
        o = a("393414"),
        c = a("49111");
      function u() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = l.useMemo(() => new URLSearchParams(e), [e]),
          r = a.get("source"),
          s = null != r ? parseInt(r, 10) : null,
          u = l.useCallback(() => {
            if (0 === s) {
              (0, o.back)(), (0, i.pushLayer)(c.Layers.USER_SETTINGS);
              return;
            }
            if ((0, o.currentRouteHasBackNavigation)()) {
              (0, o.back)();
              return;
            }
            (0, o.transitionTo)(c.Routes.APP);
          }, [s]);
        return { onClose: u, source: s, ...t };
      }
      ((s = r || (r = {}))[(s.SETTINGS = 0)] = "SETTINGS"),
        (s[(s.CHANGELOG = 1)] = "CHANGELOG"),
        (s[(s.DM_LIST = 2)] = "DM_LIST");
    },
    695824: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("414456"),
        l = a.n(s),
        n = a("922063"),
        i = a("858422"),
        o = a("682123"),
        c = a("183891");
      let u = () => 4 * Math.random() + 8,
        d = [u(), u(), u()];
      var f = () =>
        (0, r.jsx)(r.Fragment, {
          children: d.map(e =>
            (0, r.jsxs)(
              "div",
              {
                className: n.cardsContainer,
                children: [
                  (0, r.jsx)("div", {
                    className: l(c.skeleton, i.shopBanner),
                    children: (0, r.jsx)("div", { className: c.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: l(c.skeleton, o.shopCard),
                        children: (0, r.jsxs)("div", {
                          className: c.cardBody,
                          children: [
                            (0, r.jsx)("div", { className: c.cardAvatar }),
                            (0, r.jsx)("div", { className: c.cardTitle }),
                            (0, r.jsx)("div", { className: c.cardDescription }),
                            (0, r.jsx)("div", { className: c.cardSummary }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                ],
              },
              e
            )
          ),
        });
    },
    518907: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return $;
          },
        }),
        a("222007"),
        a("794252");
      var r = a("37983"),
        s = a("884691"),
        l = a("414456"),
        n = a.n(l),
        i = a("506838"),
        o = a("265586"),
        c = a("65597"),
        u = a("669491"),
        d = a("755854"),
        f = a("77078"),
        m = a("54239"),
        p = a("252744"),
        g = a("812204"),
        C = a("685665"),
        h = a("606292"),
        E = a("688318"),
        b = a("946964"),
        S = a("635956"),
        x = a("38766"),
        T = a("601095"),
        v = a("493390"),
        L = a("161778"),
        I = a("697218"),
        N = a("944441"),
        _ = a("462579"),
        k = a("216422"),
        O = a("956089"),
        y = a("50885"),
        A = a("21526"),
        P = a("846893"),
        R = a("775416"),
        j = a("491232"),
        B = a("98148"),
        F = a("990139"),
        D = a("677257"),
        M = a("342676"),
        w = a("450492"),
        H = a("920580"),
        U = a("54809"),
        W = a("264579"),
        G = a("646718"),
        V = a("782340"),
        z = a("600545");
      let K = y.default.getEnableHardwareAcceleration()
          ? f.AnimatedAvatar
          : f.Avatar,
        Y = f.AvatarSizes.SIZE_152,
        X = (0, h.getDecorationSizeForAvatarSize)(Y),
        Z = e => {
          let { children: t, onClick: a, ...s } = e;
          return (0, r.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...s,
            children: t,
          });
        },
        q = e => {
          let { className: t, ...a } = e;
          return (0, r.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: n(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            "aria-label": V.default.Messages.PREVIEW,
            ...a,
            children: (0, r.jsx)(_.default, { width: 24, height: 24 }),
          });
        };
      var $ = function (e) {
        let {
            product: t,
            category: a,
            onMount: l,
            isPremiumUser: _ = !1,
            isGiftEasterEggEnabled: y,
          } = e,
          { analyticsLocations: $ } = (0, C.default)(
            g.default.COLLECTIBLES_SHOP_CARD
          ),
          J = s.useRef(null),
          Q = (0, p.default)(J),
          [ee, et] = s.useState(!1),
          ea = Q || ee,
          er = (0, c.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          ),
          [es] = t.items,
          {
            avatarDecorationSrc: el,
            eventHandlers: en,
            avatarPlaceholderSrc: ei,
          } = (0, E.default)({
            user: er,
            avatarDecorationOverride:
              (null == es ? void 0 : es.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
                ? es
                : void 0,
            size: X,
            animateOnHover: !ea,
          }),
          { productCardDescriptionHidden: eo } = (0, B.default)({
            location: "CollectiblesShopTallCard",
          }),
          { backgroundColors: ec } = (0, D.default)(t.styles),
          eu = (0, j.getFormattedPriceForCollectiblesProduct)(t, _),
          ed = (0, j.isPremiumCollectiblesProduct)(t),
          ef = (0, j.isFreeCollectiblesProduct)(t),
          [em, ep, eg] = (0, c.useStateFromStoresArray)([R.default], () => [
            R.default.getPurchase(t.skuId),
            R.default.isClaiming === t.skuId,
            null != R.default.isClaiming && R.default.isClaiming !== t.skuId,
          ]),
          eC = (0, c.useStateFromStores)([L.default], () =>
            (0, d.isThemeDark)(L.default.theme)
          ),
          eh = (0, c.useStateFromStores)([P.default], () =>
            P.default.getIsProductNew(es.skuId)
          ),
          { hoverVariant: eE } = (0, F.useShopCardHoverAnimationExperiment)(
            "CollectiblesShopTallCard"
          );
        s.useEffect(() => {
          let { current: e } = J;
          if (null == e) return;
          let t = () => et(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []);
        let eb = (0, x.default)({ analyticsLocations: $ }),
          eS = s.useRef(null),
          ex = () => {
            if (
              ((0, m.popLayer)(),
              eb(),
              (null == es ? void 0 : es.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, h.openAvatarDecorationModal)({
                initialSelectedDecoration: es,
                analyticsLocations: $,
              });
              return;
            }
            (null == es ? void 0 : es.type) ===
              o.CollectiblesItemType.PROFILE_EFFECT &&
              (0, v.openProfileEffectModal)({
                initialSelectedEffectId: es.id,
                analyticsLocations: $,
              });
          },
          eT = e => r => {
            (eS.current = r.currentTarget),
              (0, U.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: $,
                analyticsSource: e,
                returnRef: eS,
              });
          },
          ev = eT(g.default.COLLECTIBLES_SHOP_CARD),
          eL = eT(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eI = () =>
            (0, r.jsx)("div", {
              className: z.hoverUpsellContainer,
              children: (0, r.jsx)(S.default, {
                fullWidth: !0,
                className: z.premiumSubscribeButton,
                disabled: eg,
                onClick: e => e.stopPropagation(),
                buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == l || l(J);
        }, [l]);
        let eN = () =>
            null != em
              ? (0, r.jsx)(f.Text, {
                  variant: "text-md/semibold",
                  className: z.priceTag,
                  children: V.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : ed
                ? (0, r.jsx)(f.Text, {
                    variant: "text-md/semibold",
                    className: z.priceTag,
                    children:
                      V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, r.jsx)(H.default, {
                    alwaysWhiteText: !1,
                    product: t,
                    className: z.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          e_ = () =>
            ed
              ? null
              : ef
                ? (0, r.jsx)(q, { onClick: eL })
                : (0, r.jsx)(w.default, {
                    product: t,
                    returnRef: J,
                    isGiftEasterEggEnabled: y,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          ek = () => {
            if (ed && !_ && !ef) return eI();
            let e = ed
              ? {
                  submitting: ep,
                  submittingStartedLabel:
                    V.default.Messages.COLLECTIBLES_COLLECTING,
                  submittingFinishedLabel:
                    V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                  onClick: async () => {
                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId),
                      (0, W.default)({ product: t, analyticsLocations: $ });
                  },
                }
              : {
                  onClick: () =>
                    (0, b.default)({
                      skuId: t.skuId,
                      analyticsLocations: $,
                      returnRef: J,
                    }),
                };
            return (0, r.jsxs)("div", {
              className: z.buttonsContainer,
              children: [
                null == em
                  ? (0, r.jsx)(Z, {
                      disabled: eg,
                      className: z.purchaseButton,
                      ...e,
                      children: ed
                        ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : V.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: eu,
                          }),
                    })
                  : (0, r.jsx)(Z, {
                      disabled: eg,
                      onClick: ex,
                      children: V.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                e_(),
              ],
            });
          },
          eO = eC
            ? "0 0 15px 1px ".concat(u.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, r.jsx)(f.FocusRing, {
          children: (0, r.jsxs)(f.Clickable, {
            innerRef: J,
            className: n(
              z.shopCard,
              (0, i.match)(eE)
                .with(
                  F.ShopCardHoverAnimationVariant.CONTROL,
                  () => z.shopCardDefaultAnimation
                )
                .with(
                  F.ShopCardHoverAnimationVariant.TRANSFORMATION,
                  () => z.shopCardTransformationAnimation
                )
                .otherwise(() => void 0)
            ),
            onBlur: () => et(!1),
            onClick: ev,
            style:
              null != ec
                ? {
                    backgroundColor: eC
                      ? "var(--background-floating)"
                      : "var(--background-secondary)",
                    borderColor: "var(--chat-border)",
                    boxShadow: ea ? eO : "none",
                  }
                : void 0,
            id: "shop-item-".concat(t.skuId),
            children: [
              ed &&
                (0, r.jsx)(f.Tooltip, {
                  tooltipContentClassName: z.premiumWheelTooltipContent,
                  color: f.Tooltip.Colors.PRIMARY,
                  text: V.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, r.jsx)(O.TextBadge, {
                      ...e,
                      className: z.premiumWheelBadge,
                      text: (0, r.jsx)(k.default, {
                        className: z.premiumWheel,
                      }),
                    }),
                }),
              (null == es ? void 0 : es.type) ===
                o.CollectiblesItemType.PROFILE_EFFECT &&
                (0, r.jsx)("div", {
                  className: z.profileEffectShopPreview,
                  children: (0, r.jsx)(T.default, {
                    isHovering: ea,
                    profileEffectId: es.id,
                    isPurchased: null != em,
                    removeSetHeight: !0,
                  }),
                }),
              (null == es ? void 0 : es.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, r.jsx)("div", {
                  className: z.avatarContainer,
                  children: (0, r.jsx)(K, {
                    ...en,
                    avatarDecoration: el,
                    src: ei,
                    className: n(z.avatar, { [z.avatarPurchased]: null != em }),
                    size: Y,
                    "aria-label": V.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != em
                ? (0, r.jsx)("div", {
                    className: z.checkmarkWrapper,
                    children: (0, r.jsx)(N.default, {
                      width: 38,
                      height: 38,
                      className: z.checkmark,
                    }),
                  })
                : null,
              (0, r.jsxs)("div", {
                className: n(z.cardText, {
                  [z.cardTextBlur]:
                    (null == es ? void 0 : es.type) ===
                    o.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, r.jsx)("div", {
                    className: n(
                      z.cardBackground,
                      eC ? z.darkCardBackground : z.lightCardBackground,
                      (null == es ? void 0 : es.type) ===
                        o.CollectiblesItemType.PROFILE_EFFECT
                        ? z.cardLowOpacity
                        : null
                    ),
                  }),
                  (0, r.jsx)(f.Text, {
                    variant: "text-lg/bold",
                    className: z.productName,
                    children: t.name,
                  }),
                  !eo &&
                    (0, r.jsx)(f.Text, {
                      className: n(z.description, z.innerMask),
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: t.summary,
                    }),
                  (0, r.jsxs)("div", {
                    className: z.detailsWrapper,
                    children: [
                      (0, r.jsx)("div", {
                        className: z.innerBlur,
                        children: eN(),
                      }),
                      (0, r.jsx)("div", {
                        className: z.innerHover,
                        children: ek(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(M.default, {
                category: a,
                className: z.limitedTimeBadge,
                display: "card",
              }),
              eh &&
                (0, r.jsx)(O.TextBadge, {
                  text: V.default.Messages.NEW,
                  disableColor: !0,
                  className: z.newBadge,
                }),
            ],
          }),
        });
      };
    },
    408381: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MAX_CONTENT_WIDTH: function () {
            return l;
          },
          getAssetSizeByHeight: function () {
            return n;
          },
          getBackgroundGradient: function () {
            return i;
          },
          getConfettiSprites: function () {
            return u;
          },
        });
      var r = a("635058"),
        s = a("547630");
      let l = 1060,
        n = e => e * (0, s.default)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: a, secondary: r } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(a.toHslString(), ", ")
            .concat(r.toHslString(), ")");
        },
        o = [a("424869"), a("714293")],
        c = {
          ["".concat(r.CollectiblesCategorySkuId.FANTASY)]: [
            a("655029"),
            a("290216"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.ANIME)]: [
            a("597704"),
            a("714293"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.BREAKFAST)]: [
            a("286642"),
            a("94646"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.HALLOWEEN)]: [
            a("638538"),
            a("861485"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.FALL)]: [
            a("740683"),
            a("489847"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.WINTER)]: [
            a("770704"),
            a("165057"),
          ],
          ["".concat(r.CollectiblesCategorySkuId.MONSTERS)]: [
            a("330825"),
            a("125221"),
          ],
        },
        u = e => {
          var t;
          return null == e ? o : null !== (t = c[e]) && void 0 !== t ? t : o;
        };
    },
    368560: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("232482");
      function l() {
        return (0, r.jsxs)("div", {
          className: s.snowflakes,
          children: [
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: s.snowflake, children: "❅" }),
          ],
        });
      }
    },
    264579: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("77078"),
        l = e => {
          let { product: t, analyticsLocations: l } = e;
          (0, s.openModalLazy)(async () => {
            let { default: e } = await a.el("658756").then(a.bind(a, "658756"));
            return a =>
              (0, r.jsx)(e, { product: t, analyticsLocations: l, ...a });
          });
        };
    },
    946964: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("748820"),
        l = a("77078"),
        n = a("112679"),
        i = a("55689"),
        o = a("21526"),
        c = a("599110"),
        u = a("49111");
      function d(e) {
        let {
            skuId: t,
            isGift: d = !1,
            giftMessage: f,
            onClose: m,
            onComplete: p,
            analyticsLocations: g,
            analyticsObject: C,
          } = e,
          h = !1,
          E = (0, s.v4)();
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await a.el("894742").then(a.bind(a, "894742"));
            return a => {
              let { onClose: s, returnRef: l, ...n } = a;
              return (0, r.jsx)(e, {
                ...n,
                loadId: E,
                skuId: t,
                isGift: d,
                giftMessage: f,
                analyticsLocations: g,
                onClose: e => {
                  s(), null == m || m(e);
                },
                onComplete: () => {
                  (h = !0), null == p || p();
                },
                returnRef: l,
              });
            };
          },
          {
            onCloseCallback: () => {
              !h &&
                c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: E,
                  payment_type:
                    u.PurchaseTypeToAnalyticsPaymentType[
                      u.PurchaseTypes.ONE_TIME
                    ],
                  location: C,
                  is_gift: d,
                  location_stack: g,
                }),
                (0, n.clearError)(),
                (0, i.clearPurchaseTokenAuthState)(),
                null == m || m(h),
                h && (0, o.fetchCollectiblesPurchases)();
            },
            onCloseRequest: u.NOOP,
          }
        );
      }
    },
    601095: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        }),
        a("222007");
      var r = a("37983"),
        s = a("884691"),
        l = a("414456"),
        n = a.n(l),
        i = a("859498"),
        o = a("635471"),
        c = a("126746"),
        u = a("93902"),
        d = e => {
          let {
              profileEffectId: t,
              isHovering: a,
              forCollectedModal: l = !1,
              isPurchased: d,
              removeSetHeight: f = !1,
            } = e,
            m = l ? 250 : 0.1,
            [p, g] = s.useState(!0);
          return (s.useEffect(() => {
            if (!0 !== l) g(!1);
            else {
              let e = setTimeout(() => {
                g(!1);
              }, m);
              return () => {
                clearTimeout(e);
              };
            }
          }, [m, l]),
          null != t)
            ? (0, r.jsxs)("div", {
                className: n(c.previewContainer, {
                  [c.previewContainerAnimation]: l,
                  [c.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, r.jsx)("img", {
                    src: u,
                    alt: " ",
                    className: l ? c.previewForCollected : c.preview,
                    "aria-hidden": !0,
                  }),
                  !p &&
                    (0, r.jsx)("div", {
                      className: d ? c.purchasedEffect : void 0,
                      children: (0, r.jsx)(o.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: l,
                        restartMethod: i.RestartMethod.FromStart,
                        resetOnHover: !0,
                        isHovering: a,
                        introDelay: m,
                        useOpacityOnHover: !1,
                        shopPreview: !0,
                      }),
                    }),
                ],
              })
            : null;
        };
    },
    493390: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          openProfileEffectModal: function () {
            return l;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("77078");
      let l = e => {
        let { analyticsLocations: t, initialSelectedEffectId: l, guild: n } = e;
        (0, s.openModalLazy)(async () => {
          let { default: e } = await a.el("889793").then(a.bind(a, "889793"));
          return a =>
            (0, r.jsx)(e, {
              ...a,
              guild: n,
              initialSelectedEffectId: l,
              analyticsLocations: t,
            });
        }, {});
      };
    },
    944441: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var r = a("37983");
      a("884691");
      var s = a("469563"),
        l = a("237020"),
        n = a("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: s = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, n.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: l,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.00043 14.0491L19.5904 3.46912L23.1212 6.99994L8.99993 21.1213L1.28485 13.4062L4.83367 9.88236L9.00043 14.0491Z",
              }),
            });
          },
          l.CheckmarkBoldIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=537ed465f33a406b30c5.js.map
