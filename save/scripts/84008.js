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
      var l = a("884691"),
        s = a("748820"),
        r = a("560103"),
        n = a("599110");
      let i = (e, t, a, l) => {
          let {
            scrollTop: s = 0,
            scrollOffset: r = 0,
            scrollHeight: i = 0,
            scrollWidth: o = 0,
          } = l;
          if (i > 0) {
            let l = (s + r) / i;
            l > 0 &&
              n.default.track(e, {
                scroll_visible_percent: l,
                source: a,
                page_height: Math.round(i),
                page_width: Math.round(o),
                page_session_id: t,
              });
          }
        },
        o = (e, t) => {
          let a = l.useRef(null),
            n = l.useRef((0, s.v4)()),
            o = (0, r.useThrottledFunction)(i, 5e3, [], { trailing: !0 }),
            c = l.useCallback(() => {
              var l;
              let s =
                null === (l = a.current) || void 0 === l
                  ? void 0
                  : l.getScrollerNode();
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
            return r;
          },
        });
      var l = a("862205");
      a("773336");
      let s = (0, l.createExperiment)({
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
      var r = e => {
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
      var l = a("446674"),
        s = a("913144");
      function r(e, t) {
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
      class d extends l.default.PersistedStore {
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
          () => r(c, i),
          () => r(u, o),
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
            return r;
          },
        });
      var l = a("862205");
      let s = (0, l.createExperiment)({
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
        r = e => {
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
      var l = a("656280"),
        s = a.n(l),
        r = a("65597"),
        n = a("206230"),
        i = a("388491");
      let o = (e, t) => {
          let a = e.toRgb(),
            l = t.toRgb(),
            [r, n, o] = (0, i.getValueInColorGradientByPercentage)(
              [a.r, a.g, a.b],
              [l.r, l.g, l.b],
              50
            );
          return s({ r, g: n, b: o });
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
          let { h: a, s: l, l: r } = e.toHsl();
          return s({ h: a, s: l * t, l: r });
        };
      var f = e => t => {
        let a = (0, r.useStateFromStores)(
          [n.default],
          () => n.default.saturation
        );
        if (null == t) return {};
        let l = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: u(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === a
          ? {
              ...l,
              isDarkText: !!(
                null != l.backgroundColors &&
                l.backgroundColors.secondary.isLight()
              ),
            }
          : {
              backgroundColors:
                null != l.backgroundColors
                  ? {
                      primary: d(l.backgroundColors.primary, a),
                      secondary: d(l.backgroundColors.secondary, a),
                      border: d(l.backgroundColors.border, a),
                      label: d(l.backgroundColors.label, a),
                    }
                  : void 0,
              buttonColors:
                null != l.buttonColors
                  ? {
                      primary: d(l.buttonColors.primary, a),
                      secondary: d(l.buttonColors.secondary, a),
                      text: d(l.buttonColors.text, a),
                    }
                  : void 0,
              confettiColors: l.confettiColors.map(e => d(e, a)),
              isDarkText: !!(
                null != l.backgroundColors &&
                l.backgroundColors.secondary.isLight()
              ),
            };
      };
    },
    98148: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("862205");
      let s = (0, l.createExperiment)({
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
      var r = e => {
        let { location: t } = e;
        return s.useExperiment({ location: t });
      };
    },
    698957: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("862205");
      let s = (0, l.createExperiment)({
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
      var r = e => {
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
      var l,
        s,
        r = a("862205");
      ((l = s || (s = {}))[(l.CONTROL = 0)] = "CONTROL"),
        (l[(l.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (l[(l.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
      let n = (0, r.createExperiment)({
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
      var l = a("884691"),
        s = a("65597"),
        r = a("875212"),
        n = a("21526"),
        i = a("853987"),
        o = a("12480"),
        c = a("775416");
      function u(e) {
        var t;
        let a = "useFetchCollectiblesCategoriesAndPurchases";
        (0, r.useTriggerDebuggingAA)({
          location: a + " auto on",
          autoTrackExposure: !0,
        }),
          (0, r.useTriggerDebuggingAA)({
            location: a + " auto off",
            autoTrackExposure: !1,
          });
        let {
            isFetching: u,
            categories: d,
            error: f,
          } = (function (e) {
            let t = "useMaybeFetchCollectiblesCategories";
            (0, r.useTriggerDebuggingAA)({
              location: t + " auto on",
              autoTrackExposure: !0,
            }),
              (0, r.useTriggerDebuggingAA)({
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
              (0, l.useEffect)(() => {
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
            (0, r.useTriggerDebuggingAA)({
              location: e + " auto on",
              autoTrackExposure: !0,
            }),
              (0, r.useTriggerDebuggingAA)({
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
              (0, l.useEffect)(() => {
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
      var l = a("884691"),
        s = a("65597"),
        r = a("775416");
      let n = e => {
        let t = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.purchases
          ),
          a = (0, l.useMemo)(() => {
            let a = [],
              l = [];
            for (let s of e.values()) {
              let e = s.products.every(e => !!t.get(e.skuId));
              e ? a.push(s) : l.push(s);
            }
            return l.concat(a);
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
      var l = a("884691"),
        s = a("65597"),
        r = a("775416");
      let n = e => {
        let t = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.purchases
          ),
          a = (0, l.useMemo)(() => {
            let a = [],
              l = [];
            for (let s of e.values())
              void 0 !== t.get(s.skuId) ? a.push(s) : l.push(s);
            return l.concat(a);
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
      var l = a("656280"),
        s = a.n(l),
        r = a("669491"),
        n = a("546483");
      let i = s(
          r.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        o = s(
          r.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
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
          return (0, l.jsx)("div", {
            className: r(f.banner, p),
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
      var l = a("884691"),
        s = a("803182"),
        r = a("446674"),
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
          l.useEffect(() => {
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
            analyticsLocations: l,
            analyticsSource: s,
            initialItemCardRef: r,
          } = e;
          for (let e of t.values()) {
            let t = e.products.find(e => e.skuId === a);
            if (null != t) {
              var n;
              null === (n = r.current) ||
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
                    analyticsLocations: l,
                    returnRef: r,
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
            m = l.useRef(null),
            p = (0, s.useLocation)(),
            C =
              p.pathname === u.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : p.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, i.default)(C);
          l.useEffect(() => {
            if (c) return;
            let e = f.exec(p.hash);
            if (null != e) {
              let t = e[1];
              m.current = t;
            }
          }, []);
          let E = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.initialProductSkuId
          );
          l.useEffect(() => {
            if (a) return;
            let e = null;
            if (
              (c && null != E && (e = E),
              !c && null != m.current && (e = m.current),
              null != e)
            ) {
              let a = [],
                l = setTimeout(() => {
                  let l = g({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: h,
                    analyticsSource: C,
                    initialItemCardRef: d,
                  });
                  a.push(l);
                }, 250);
              return (
                a.push(() => clearTimeout(l)),
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
      var l,
        s,
        r = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        o = a("506838"),
        c = a("956089"),
        u = a("782340"),
        d = a("53248");
      ((s = l || (l = {})).BANNER = "banner"),
        (s.MODAL = "modal"),
        (s.CARD = "card");
      var f = e => {
        let { category: t, display: a, className: l } = e;
        if (null == t.unpublishedAt) return null;
        let s = (function (e) {
          let t = new Date(),
            a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
            l = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
          return Math.floor((l - a) / 864e5);
        })(t.unpublishedAt);
        function n(e) {
          return (0, r.jsx)(c.TextBadge, {
            disableColor: !0,
            text: e,
            className: i(d.badge, l),
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
            return ei;
          },
        }),
        a("794252"),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
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
        I = a("845962"),
        N = a("501768"),
        _ = a("778588"),
        k = a("697218"),
        y = a("764490"),
        O = a("29557"),
        A = a("599110"),
        P = a("719923"),
        R = a("439932"),
        j = a("21526"),
        F = a("853987"),
        B = a("411691"),
        D = a("216719"),
        M = a("702953"),
        w = a("698957"),
        H = a("235898"),
        U = a("296304"),
        W = a("334820"),
        G = a("89569"),
        V = a("419513"),
        z = a("434393"),
        K = a("571464"),
        Y = a("43525"),
        X = a("798235"),
        Z = a("931262"),
        q = a("695824"),
        $ = a("518907"),
        J = a("368560"),
        Q = a("49111"),
        ee = a("994428"),
        et = a("894282"),
        ea = a("646718"),
        el = a("782340"),
        es = a("922063");
      function er(e) {
        let { isFullScreen: t } = e,
          a = (0, B.default)("CollectiblesShop");
        return (0, o.match)(a)
          .with(B.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () =>
            (0, l.jsx)(X.default, { isFullScreen: t })
          )
          .otherwise(() => (0, l.jsx)(Y.default, { isFullScreen: t }));
      }
      function en(e) {
        var t, a;
        let {
            category: r,
            className: o,
            isPremiumUser: d,
            initialItemCardRef: f,
            isGiftEasterEggEnabled: p,
            setIsGiftEasterEggEnabled: g,
            showEasterEggToggle: C,
          } = e,
          h = s.useRef(10 + 70 * Math.random()),
          E = (0, W.usePurchasedProductsSort)(r.products),
          b = (0, i.groupBy)(E, "type"),
          S = (0, u.useStateFromStores)(
            [D.default],
            () => D.default.initialProductSkuId
          ),
          { tallerCardsEnabled: x } = (0,
          M.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          T = x ? $.default : z.default,
          I = s.useCallback(
            e => t => {
              e.skuId === S && (f.current = t.current);
            },
            [S, f]
          ),
          N = (e, t) =>
            0 === e.length
              ? null
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(m.Text, {
                      className: n(es.itemTypeTitle, {
                        [es.itemTypeTitleForTallerCard]: x,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, l.jsx)("div", {
                      className: n(
                        es.cardsContainer,
                        x ? es.tallerShopCard : es.regularShopCard,
                        o
                      ),
                      children: e.map(e =>
                        (0, l.jsx)(
                          T,
                          {
                            onMount: I(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: p,
                          },
                          e.skuId
                        )
                      ),
                    }),
                  ],
                });
        return (0, l.jsxs)("div", {
          className: es.categoryWrapper,
          children: [
            C &&
              (0, l.jsx)(m.Clickable, {
                className: n(es.hiddenWumpus, { [es.hiddenWumpusEnabled]: p }),
                onClick: () => g(!0),
                style: { left: "".concat(h.current, "%") },
                children: (0, l.jsx)(L.default, {
                  idleAnimationState: v.AnimationState.IDLE,
                  giftStyle: ea.PremiumGiftStyles.BOX,
                }),
              }),
            (0, l.jsx)(V.default, {
              category: r,
              className: x ? es.tallerShopCardBanner : void 0,
            }),
            N(
              null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) &&
                void 0 !== t
                ? t
                : [],
              el.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
            ),
            N(
              null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) &&
                void 0 !== a
                ? a
                : [],
              el.default.Messages
                .PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
            ),
          ],
        });
      }
      var ei = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: r } = (0,
          u.useStateFromStoresObject)([D.default], () =>
            D.default.getAnalytics()
          ),
          { analyticsLocations: i } = (0, E.default)([
            ...r,
            h.default.COLLECTIBLES_SHOP,
          ]),
          o = (0, u.useStateFromStores)([_.default], () =>
            _.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)
          ),
          v = (0, f.useHasAnyModalOpen)(),
          { onClose: L } = (0, Z.useCollectiblesShopRouting)(),
          B = (0, u.useStateFromStores)([k.default], () =>
            k.default.getCurrentUser()
          ),
          W = P.default.canUseCollectibles(B),
          V = (0, S.default)("shop_disable_cache"),
          z = (0, S.default)("shop_include_unpublished"),
          {
            categories: Y,
            isFetchingCategories: X,
            error: $,
          } = (0, H.default)({ noCache: V, includeUnpublished: z }),
          ei = (0, u.useStateFromStores)([F.default], () => F.default.products),
          eo = s.useMemo(() => {
            let e = [...ei.values()].filter(
              e => e.type === c.CollectiblesItemType.PROFILE_EFFECT
            );
            return e.some(
              e => null == I.default.getProfileEffectById(e.items[0].id)
            );
          }, [ei]);
        (0, N.default)(eo);
        let ec = (0, U.usePurchasedCategoriesSort)(Y),
          { tallerCardsEnabled: eu } = (0,
          M.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          ed = s.useRef(null),
          [ef, em] = s.useState(!1);
        (0, G.useProductDetailsDeepLinking)({
          categories: Y,
          isFetchingCategories: X,
          isLayer: o,
          initialItemCardRef: ed,
        });
        let {
          sessionId: ep,
          scrollerRef: eg,
          scrollHandler: eC,
        } = (0, b.usePageScrollPosition)(
          Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        s.useEffect(() => {
          A.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: i,
            source: a,
            page_session_id: ep,
          }),
            !W &&
              A.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: ea.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                location_stack: i,
              });
        }, [W, i, a, ep]),
          s.useEffect(() => {
            !(0, x.isDismissibleContentDismissed)(
              d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK
            ) &&
              (0, x.markDismissibleContentAsDismissed)(
                d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
                {
                  dismissAction: ee.ContentDismissActionType.AUTO_DISMISS,
                  forceTrack: !0,
                }
              );
          }, []),
          s.useEffect(() => {
            !t && (0, p.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          s.useEffect(
            () => () => {
              (0, j.setCollectiblesCategoryItemsViewed)({
                categories: [...Y.values()],
                itemTypes: [
                  c.CollectiblesItemType.AVATAR_DECORATION,
                  c.CollectiblesItemType.PROFILE_EFFECT,
                ],
              });
            },
            [Y]
          ),
          s.useEffect(() => {
            if (!t || o || v) return;
            let e = e => {
              e.key === et.KeyboardEventKey.Escape && L();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, o, v, L]);
        let eh = s.useCallback(() => {
            (0, j.fetchCollectiblesCategories)({
              noCache: V,
              includeUnpublished: z,
            });
          }, [V, z]),
          eE = (0, C.default)(),
          { shopBannerHidden: eb } = (0, w.default)({
            location: "CollectiblesShop",
          }),
          { containerRef: eS, returnRef: ex } = (function () {
            let e = s.useRef(null),
              t = s.useRef(null);
            return (
              (0, m.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, l.jsxs)(E.AnalyticsLocationProvider, {
          value: i,
          children: [
            (0, l.jsxs)("div", {
              className: es.shop,
              ref: t ? eS : void 0,
              children: [
                t
                  ? null
                  : (0, l.jsxs)(T.default, {
                      className: n((0, R.getThemeClass)(eE), es.headerBar),
                      toolbar: !0,
                      children: [
                        (0, l.jsx)(O.default, { className: es.logo }),
                        (0, l.jsx)(T.default.Title, {
                          className: es.title,
                          children: el.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, l.jsx)("div", {
                    className: es.closeWrapper,
                    children: (0, l.jsx)(g.default, {
                      className: es.close,
                      closeAction: o ? j.closeCollectiblesShop : L,
                      keybind: "ESC",
                    }),
                  }),
                (0, l.jsx)(m.AdvancedScroller, {
                  className: n(es.shopScroll, {
                    [es.shopScrollBackgroundPrimary]: eu,
                  }),
                  ref: eg,
                  onScroll: eC,
                  children: (0, l.jsx)("div", {
                    className: n(es.pageWrapper, {
                      [es.pageWrapperFullscreen]: t,
                      [es.pageWrapperBackgroundPrimary]: eu,
                    }),
                    children: (0, l.jsxs)("main", {
                      className: n(es.page, {
                        [es.pageWithShopBannerHidden]: eb && !t,
                      }),
                      children: [
                        t
                          ? (0, l.jsx)(y.default, {
                              title: el.default.Messages.COLLECTIBLES_SHOP,
                              ref: t ? ex : void 0,
                            })
                          : null,
                        !eb && (0, l.jsx)(er, { isFullScreen: t }),
                        X
                          ? (0, l.jsx)(q.default, {})
                          : $
                            ? (0, l.jsx)(K.default, { onRetry: eh })
                            : (0, l.jsx)("div", {
                                className: es.categories,
                                children: ec
                                  .filter(e => {
                                    let { products: t } = e;
                                    return t.length > 0;
                                  })
                                  .map(e =>
                                    (0, l.jsx)(
                                      en,
                                      {
                                        isPremiumUser: W,
                                        category: e,
                                        initialItemCardRef: ed,
                                        setIsGiftEasterEggEnabled: em,
                                        isGiftEasterEggEnabled: ef,
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
            ef && (0, l.jsx)(J.default, {}),
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
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
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
            r = s.useRef(null),
            n = (0, o.useStateFromStores)([f.default], () =>
              f.default.getCurrentUser()
            );
          return g.default.canUseCollectibles(n)
            ? (0, l.jsx)(l.Fragment, { children: t.summary })
            : (0, l.jsx)(l.Fragment, {
                children:
                  v.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, l.jsx)(c.Clickable, {
                          innerRef: r,
                          className: L.getPremiumHook,
                          onClick: () => {
                            (0, d.default)({
                              subscriptionTier:
                                T.PremiumSubscriptionSKUs.TIER_2,
                              analyticsLocations: a,
                              returnRef: r,
                            });
                          },
                          tag: "span",
                          children: (0, l.jsx)(c.Text, {
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
        let { category: s, className: r } = e,
          { backgroundColors: o } = (0, h.default)(s.styles),
          u = !!(null === (t = x.categoryBannerOverrides[s.skuId]) ||
          void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return (0, l.jsxs)(E.default, {
          asset: s.banner,
          className: n(L.shopBanner, r),
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
            (0, l.jsxs)("div", {
              className: L.discordLogo,
              children: [
                (0, l.jsx)(m.default, { className: L.discordIcon }),
                (0, l.jsx)(p.default, { className: L.discordWordmark }),
              ],
            }),
            (0, l.jsx)("img", {
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
            (0, l.jsx)(c.Text, {
              className: n(L.summary, { [L.blackSummary]: u }),
              variant: "text-md/normal",
              children:
                s.skuId === i.CollectiblesCategorySkuId.DISXCORE
                  ? (0, l.jsx)(N, { category: s })
                  : s.summary,
            }),
            (0, l.jsx)(b.default, {
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
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
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
        y = a("491232"),
        O = a("98148"),
        A = a("677257"),
        P = a("342676"),
        R = a("450492"),
        j = a("920580"),
        F = a("54809"),
        B = a("408381"),
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
          return (0, l.jsx)(c.Button, {
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
          return (0, l.jsx)(c.Button, {
            color: c.ButtonColors.CUSTOM,
            look: c.Button.Looks.FILLED,
            size: c.ButtonSizes.ICON,
            className: n(H.previewButton, t),
            innerClassName: H.previewButtonInner,
            "aria-label": w.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(v.default, { width: 24, height: 24 }),
          });
        };
      var K = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
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
          { productCardDescriptionHidden: el } = (0, O.default)({
            location: "CollectiblesShopCard",
          }),
          { buttonColors: es, backgroundColors: er } = (0, A.default)(t.styles),
          en = (0, y.getFormattedPriceForCollectiblesProduct)(t, v),
          ei = (0, y.isPremiumCollectiblesProduct)(t),
          eo = (0, y.isFreeCollectiblesProduct)(t),
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
          eg = e => l => {
            (ef.current = l.currentTarget),
              (0, F.openCollectiblesShopProductDetailsModal)({
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
            (0, l.jsx)("div", {
              className: H.hoverUpsellContainer,
              children: (0, l.jsx)(h.default, {
                fullWidth: !0,
                className: H.premiumSubscribeButton,
                disabled: ed,
                onClick: e => e.stopPropagation(),
                buttonText: w.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == r || r(Y);
        }, [r]);
        let eb = () =>
            null != ec
              ? (0, l.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: H.priceTag,
                  children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : ei
                ? (0, l.jsx)(c.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: H.priceTag,
                    children:
                      w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(j.default, {
                    product: t,
                    className: H.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eS = () =>
            ei
              ? null
              : eo
                ? (0, l.jsx)(z, {
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
                : (0, l.jsx)(R.default, {
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
                      background: (0, B.getBackgroundGradient)(es, 90),
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
            return (0, l.jsxs)("div", {
              className: H.buttonsContainer,
              children: [
                null == ec
                  ? (0, l.jsx)(V, {
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
                  : (0, l.jsx)(V, {
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
            null != er
              ? {
                  background: "".concat(
                    (0, B.getBackgroundGradient)(er),
                    " border-box border-box"
                  ),
                  borderColor: er.border.toHslString(),
                  boxShadow: $
                    ? "0 0 25px 1px ".concat(er.primary.toHslString())
                    : "none",
                }
              : void 0;
        return (0, l.jsx)(c.FocusRing, {
          children: (0, l.jsxs)(c.Clickable, {
            innerRef: Y,
            className: H.shopCard,
            onBlur: () => q(!1),
            onClick: eC,
            style: eT,
            id: "shop-item-".concat(t.skuId),
            children: [
              ei &&
                (0, l.jsx)(c.Tooltip, {
                  tooltipContentClassName: H.premiumWheelTooltipContent,
                  color: c.Tooltip.Colors.PRIMARY,
                  text: w.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(I.TextBadge, {
                      ...e,
                      className: H.premiumWheelBadge,
                      text: (0, l.jsx)(L.default, {
                        className: H.premiumWheel,
                      }),
                    }),
                }),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, l.jsx)("div", {
                  className: H.profileEffectShopPreview,
                  children: (0, l.jsx)(b.default, {
                    isHovering: $,
                    profileEffectId: Q.id,
                    isPurchased: null != ec,
                  }),
                }),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)(U, {
                  ...et,
                  avatarDecoration: ee,
                  src: ea,
                  className: n(H.avatar, { [H.avatarPurchased]: null != ec }),
                  size: W,
                  "aria-label": w.default.Messages.USER_SETTINGS_AVATAR,
                }),
              null != ec
                ? (0, l.jsx)("div", {
                    className:
                      (null == Q ? void 0 : Q.type) ===
                      i.CollectiblesItemType.PROFILE_EFFECT
                        ? H.profileEffectCheckmarkWrapper
                        : H.checkmarkWrapper,
                    children: (0, l.jsx)(T.default, {
                      width: 38,
                      height: 38,
                      className: H.checkmark,
                    }),
                  })
                : null,
              (0, l.jsxs)("div", {
                className: n(H.cardText, {
                  [H.cardTextProfileEffect]:
                    (null == Q ? void 0 : Q.type) ===
                    i.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, l.jsx)(c.Text, {
                    color: "always-white",
                    variant: "text-lg/bold",
                    className: H.productName,
                    children: t.name,
                  }),
                  (0, l.jsxs)("div", {
                    className: H.detailsWrapper,
                    children: [
                      (0, l.jsxs)("div", {
                        className: H.innerBlur,
                        children: [
                          !el &&
                            (0, l.jsx)(c.Text, {
                              color: "always-white",
                              className: H.description,
                              variant: "text-md/normal",
                              children: t.summary,
                            }),
                          eb(),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: H.innerHover,
                        children: ex(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(P.default, {
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
      var l = a("635058");
      let s = {
        [l.CollectiblesCategorySkuId.SPRINGTOONS]: {
          assetUrlOverride: a("266772"),
          logoMaxWidth: "48%",
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [l.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: a("482500"),
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [l.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: a("530514"),
          addGradient: !0,
        },
        [l.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: a("162332"),
          addGradient: !0,
        },
        [l.CollectiblesCategorySkuId.CYBERPUNK]: {
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
      var l = a("37983");
      a("884691");
      var s = a("819855"),
        r = a("77078"),
        n = a("841098"),
        i = a("782340"),
        o = a("706055"),
        c = a("321220"),
        u = a("684386"),
        d = e => {
          let { onRetry: t } = e,
            a = (0, n.default)();
          return (0, l.jsxs)("div", {
            className: o.wrapper,
            children: [
              (0, l.jsx)("img", {
                className: o.loadIssueImg,
                src: (0, s.isThemeDark)(a) ? c : u,
                alt: "",
              }),
              (0, l.jsx)(r.Heading, {
                className: o.heading1,
                variant: "heading-xl/semibold",
                children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
              }),
              (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
              }),
              (0, l.jsx)(r.Button, {
                className: o.reload,
                size: r.Button.Sizes.MEDIUM,
                color: r.Button.Colors.BRAND_NEW,
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
      var l = a("37983"),
        s = a("884691"),
        r = a("77078"),
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
        return (0, l.jsx)(r.Tooltip, {
          text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, l.jsx)(r.Button, {
              ...e,
              buttonRef: x,
              style: L,
              className: p.giftButton,
              color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
              look: r.Button.Looks.FILLED,
              size: r.ButtonSizes.ICON,
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
                ? (0, l.jsx)(o.SeasonalGiftIcon, {
                    hovered: T,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: g,
                  })
                : (0, l.jsx)(u.default, { width: 24, height: 24 }),
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("313506"),
        c = a("247329"),
        u = a("333838"),
        d = a("399637"),
        f = a("976076"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, l.jsxs)("div", {
            className: o.heroBanner,
            children: [
              (0, l.jsxs)("div", {
                className: r(o.heroDescription, {
                  [o.heroDescriptionWithSidebar]: !t,
                }),
                children: [
                  (0, l.jsx)(n.Heading, {
                    className: o.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, l.jsx)(n.Text, {
                    className: o.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      i.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE,
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: o.bannerBackgroundWrapper,
                children: (0, l.jsx)("img", {
                  className: o.bannerBackground,
                  alt: "",
                  src: c,
                }),
              }),
              (0, l.jsx)("img", {
                className: o.bannerForeground,
                alt: "",
                src: u,
              }),
              (0, l.jsx)("img", { className: o.bannerHand, alt: "", src: d }),
              (0, l.jsx)("img", {
                className: r(o.largeSparkle, o.largeTopSparkle),
                alt: "",
                src: f,
              }),
              (0, l.jsx)("img", {
                className: r(o.smallSparkle, o.smallTopSparkle),
                alt: "",
                src: f,
              }),
              (0, l.jsx)("img", {
                className: r(o.largeSparkle, o.largeLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, l.jsx)("img", {
                className: r(o.smallSparkle, o.smallLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, l.jsx)("img", {
                className: r(o.largeSparkle, o.largeRightSparkle),
                alt: "",
                src: f,
              }),
              (0, l.jsx)("img", {
                className: r(o.smallSparkle, o.smallRightSparkle),
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("859155"),
        c = a("200406"),
        u = a("283045"),
        d = a("718297"),
        f = a("929880"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, l.jsxs)("div", {
            className: r(
              o.heroBanner,
              t ? o.heroBannerFullScreen : o.heroBannerWithSidebar
            ),
            children: [
              (0, l.jsxs)("div", {
                className: o.heroDescription,
                children: [
                  (0, l.jsx)(n.Heading, {
                    className: o.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, l.jsx)(n.Text, {
                    className: o.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      i.default.Messages
                        .COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT,
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: o.bannerArt,
                children: [
                  (0, l.jsx)("img", {
                    className: o.bannerGrid,
                    alt: "",
                    src: c,
                    width: "484",
                    height: "402",
                  }),
                  (0, l.jsx)("img", {
                    className: o.bannerGridSmol,
                    alt: "",
                    src: d,
                    width: "85",
                    height: "60",
                  }),
                  (0, l.jsx)("img", {
                    className: o.bannerGridMedium,
                    alt: "",
                    src: u,
                    width: "178",
                    height: "106",
                  }),
                  (0, l.jsx)("img", {
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
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
          return (0, l.jsx)("div", {
            className: r(h.priceTagsContainer, a),
            children: (0, l.jsx)(p.default, {
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
        return (0, l.jsxs)("div", {
          className: r(h.priceTagsContainer, a),
          children: [
            (0, l.jsx)(p.default, {
              alwaysWhiteText: b,
              price: v,
              className: r([s, I ? void 0 : h.strikedPrice]),
            }),
            null != L &&
              (0, l.jsx)(p.default, {
                price: L,
                alwaysWhiteText: b,
                renderPrice: I
                  ? e =>
                      C.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: r([s, I ? h.fullPrice : void 0]),
                variant: I ? "text-xs/semibold" : void 0,
                icon: (0, l.jsx)(o.Tooltip, {
                  text: C.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": C.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: E,
                  children: e => {
                    let { ...t } = e;
                    return (0, l.jsx)(d.default, {
                      ...t,
                      className: r(h.premiumIcon, { [h.fullPrice]: I }),
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
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
          return (0, l.jsxs)(n.Heading, {
            variant: f,
            color: m ? "always-white" : "none",
            className: r(o.heading, d),
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
      var l = a("37983");
      a("884691");
      var s = a("77078");
      let r = "collectibles shop product details modal",
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
                (0, l.jsx)(e, {
                  ...a,
                  product: t,
                  category: n,
                  analyticsSource: i,
                  analyticsLocations: o,
                  returnRef: c,
                });
            },
            { modalKey: r }
          );
        },
        i = () => {
          (0, s.closeModal)(r);
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
      var l,
        s,
        r = a("884691"),
        n = a("90915"),
        i = a("54239"),
        o = a("393414"),
        c = a("49111");
      function u() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = r.useMemo(() => new URLSearchParams(e), [e]),
          l = a.get("source"),
          s = null != l ? parseInt(l, 10) : null,
          u = r.useCallback(() => {
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
      ((s = l || (l = {}))[(s.SETTINGS = 0)] = "SETTINGS"),
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("922063"),
        i = a("858422"),
        o = a("682123"),
        c = a("183891");
      let u = () => 4 * Math.random() + 8,
        d = [u(), u(), u()];
      var f = () =>
        (0, l.jsx)(l.Fragment, {
          children: d.map(e =>
            (0, l.jsxs)(
              "div",
              {
                className: n.cardsContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: r(c.skeleton, i.shopBanner),
                    children: (0, l.jsx)("div", { className: c.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: r(c.skeleton, o.shopCard),
                        children: (0, l.jsxs)("div", {
                          className: c.cardBody,
                          children: [
                            (0, l.jsx)("div", { className: c.cardAvatar }),
                            (0, l.jsx)("div", { className: c.cardTitle }),
                            (0, l.jsx)("div", { className: c.cardDescription }),
                            (0, l.jsx)("div", { className: c.cardSummary }),
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
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
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
        y = a("956089"),
        O = a("50885"),
        A = a("21526"),
        P = a("846893"),
        R = a("775416"),
        j = a("491232"),
        F = a("98148"),
        B = a("990139"),
        D = a("677257"),
        M = a("342676"),
        w = a("450492"),
        H = a("920580"),
        U = a("54809"),
        W = a("264579"),
        G = a("646718"),
        V = a("782340"),
        z = a("600545");
      let K = O.default.getEnableHardwareAcceleration()
          ? f.AnimatedAvatar
          : f.Avatar,
        Y = f.AvatarSizes.SIZE_152,
        X = (0, h.getDecorationSizeForAvatarSize)(Y),
        Z = e => {
          let { children: t, onClick: a, ...s } = e;
          return (0, l.jsx)(f.Button, {
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
          return (0, l.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: n(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            "aria-label": V.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(_.default, { width: 24, height: 24 }),
          });
        };
      var $ = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: _ = !1,
            isGiftEasterEggEnabled: O,
          } = e,
          { analyticsLocations: $ } = (0, C.default)(
            g.default.COLLECTIBLES_SHOP_CARD
          ),
          J = s.useRef(null),
          Q = (0, p.default)(J),
          [ee, et] = s.useState(!1),
          ea = Q || ee,
          el = (0, c.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          ),
          [es] = t.items,
          {
            avatarDecorationSrc: er,
            eventHandlers: en,
            avatarPlaceholderSrc: ei,
          } = (0, E.default)({
            user: el,
            avatarDecorationOverride:
              (null == es ? void 0 : es.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
                ? es
                : void 0,
            size: X,
            animateOnHover: !ea,
          }),
          { productCardDescriptionHidden: eo } = (0, F.default)({
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
          { hoverVariant: eE } = (0, B.useShopCardHoverAnimationExperiment)(
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
          eT = e => l => {
            (eS.current = l.currentTarget),
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
            (0, l.jsx)("div", {
              className: z.hoverUpsellContainer,
              children: (0, l.jsx)(S.default, {
                fullWidth: !0,
                className: z.premiumSubscribeButton,
                disabled: eg,
                onClick: e => e.stopPropagation(),
                buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == r || r(J);
        }, [r]);
        let eN = () =>
            null != em
              ? (0, l.jsx)(f.Text, {
                  variant: "text-md/semibold",
                  className: z.priceTag,
                  children: V.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : ed
                ? (0, l.jsx)(f.Text, {
                    variant: "text-md/semibold",
                    className: z.priceTag,
                    children:
                      V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(H.default, {
                    alwaysWhiteText: !1,
                    product: t,
                    className: z.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          e_ = () =>
            ed
              ? null
              : ef
                ? (0, l.jsx)(q, { onClick: eL })
                : (0, l.jsx)(w.default, {
                    product: t,
                    returnRef: J,
                    isGiftEasterEggEnabled: O,
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
            return (0, l.jsxs)("div", {
              className: z.buttonsContainer,
              children: [
                null == em
                  ? (0, l.jsx)(Z, {
                      disabled: eg,
                      className: z.purchaseButton,
                      ...e,
                      children: ed
                        ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : V.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: eu,
                          }),
                    })
                  : (0, l.jsx)(Z, {
                      disabled: eg,
                      onClick: ex,
                      children: V.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                e_(),
              ],
            });
          },
          ey = eC
            ? "0 0 15px 1px ".concat(u.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, l.jsx)(f.FocusRing, {
          children: (0, l.jsxs)(f.Clickable, {
            innerRef: J,
            className: n(
              z.shopCard,
              (0, i.match)(eE)
                .with(
                  B.ShopCardHoverAnimationVariant.CONTROL,
                  () => z.shopCardDefaultAnimation
                )
                .with(
                  B.ShopCardHoverAnimationVariant.TRANSFORMATION,
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
                    boxShadow: ea ? ey : "none",
                  }
                : void 0,
            id: "shop-item-".concat(t.skuId),
            children: [
              ed &&
                (0, l.jsx)(f.Tooltip, {
                  tooltipContentClassName: z.premiumWheelTooltipContent,
                  color: f.Tooltip.Colors.PRIMARY,
                  text: V.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(y.TextBadge, {
                      ...e,
                      className: z.premiumWheelBadge,
                      text: (0, l.jsx)(k.default, {
                        className: z.premiumWheel,
                      }),
                    }),
                }),
              (null == es ? void 0 : es.type) ===
                o.CollectiblesItemType.PROFILE_EFFECT &&
                (0, l.jsx)("div", {
                  className: z.profileEffectShopPreview,
                  children: (0, l.jsx)(T.default, {
                    isHovering: ea,
                    profileEffectId: es.id,
                    isPurchased: null != em,
                    removeSetHeight: !0,
                  }),
                }),
              (null == es ? void 0 : es.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)("div", {
                  className: z.avatarContainer,
                  children: (0, l.jsx)(K, {
                    ...en,
                    avatarDecoration: er,
                    src: ei,
                    className: n(z.avatar, { [z.avatarPurchased]: null != em }),
                    size: Y,
                    "aria-label": V.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != em
                ? (0, l.jsx)("div", {
                    className: z.checkmarkWrapper,
                    children: (0, l.jsx)(N.default, {
                      width: 38,
                      height: 38,
                      className: z.checkmark,
                    }),
                  })
                : null,
              (0, l.jsxs)("div", {
                className: n(z.cardText, {
                  [z.cardTextBlur]:
                    (null == es ? void 0 : es.type) ===
                    o.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, l.jsx)("div", {
                    className: n(
                      z.cardBackground,
                      eC ? z.darkCardBackground : z.lightCardBackground,
                      (null == es ? void 0 : es.type) ===
                        o.CollectiblesItemType.PROFILE_EFFECT
                        ? z.cardLowOpacity
                        : null
                    ),
                  }),
                  (0, l.jsx)(f.Text, {
                    variant: "text-lg/bold",
                    className: z.productName,
                    children: t.name,
                  }),
                  !eo &&
                    (0, l.jsx)(f.Text, {
                      className: n(z.description, z.innerMask),
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: t.summary,
                    }),
                  (0, l.jsxs)("div", {
                    className: z.detailsWrapper,
                    children: [
                      (0, l.jsx)("div", {
                        className: z.innerBlur,
                        children: eN(),
                      }),
                      (0, l.jsx)("div", {
                        className: z.innerHover,
                        children: ek(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(M.default, {
                category: a,
                className: z.limitedTimeBadge,
                display: "card",
              }),
              eh &&
                (0, l.jsx)(y.TextBadge, {
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
            return r;
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
      var l = a("635058"),
        s = a("547630");
      let r = 1060,
        n = e => e * (0, s.default)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: a, secondary: l } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(a.toHslString(), ", ")
            .concat(l.toHslString(), ")");
        },
        o = [a("424869"), a("714293")],
        c = {
          ["".concat(l.CollectiblesCategorySkuId.FANTASY)]: [
            a("655029"),
            a("290216"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.ANIME)]: [
            a("597704"),
            a("714293"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.BREAKFAST)]: [
            a("286642"),
            a("94646"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.HALLOWEEN)]: [
            a("638538"),
            a("861485"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.FALL)]: [
            a("740683"),
            a("489847"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.WINTER)]: [
            a("770704"),
            a("165057"),
          ],
          ["".concat(l.CollectiblesCategorySkuId.MONSTERS)]: [
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
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("232482");
      function r() {
        return (0, l.jsxs)("div", {
          className: s.snowflakes,
          children: [
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
            (0, l.jsx)("div", { className: s.snowflake, children: "❅" }),
          ],
        });
      }
    },
    264579: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("77078"),
        r = e => {
          let { product: t, analyticsLocations: r } = e;
          (0, s.openModalLazy)(async () => {
            let { default: e } = await a.el("658756").then(a.bind(a, "658756"));
            return a =>
              (0, l.jsx)(e, { product: t, analyticsLocations: r, ...a });
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
      var l = a("37983");
      a("884691");
      var s = a("748820"),
        r = a("77078"),
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
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await a.el("894742").then(a.bind(a, "894742"));
            return a => {
              let { onClose: s, returnRef: r, ...n } = a;
              return (0, l.jsx)(e, {
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
                returnRef: r,
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
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
        i = a("859498"),
        o = a("635471"),
        c = a("126746"),
        u = a("93902"),
        d = e => {
          let {
              profileEffectId: t,
              isHovering: a,
              forCollectedModal: r = !1,
              isPurchased: d,
              removeSetHeight: f = !1,
            } = e,
            m = r ? 250 : 0.1,
            [p, g] = s.useState(!0);
          return (s.useEffect(() => {
            if (!0 !== r) g(!1);
            else {
              let e = setTimeout(() => {
                g(!1);
              }, m);
              return () => {
                clearTimeout(e);
              };
            }
          }, [m, r]),
          null != t)
            ? (0, l.jsxs)("div", {
                className: n(c.previewContainer, {
                  [c.previewContainerAnimation]: r,
                  [c.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, l.jsx)("img", {
                    src: u,
                    alt: " ",
                    className: r ? c.previewForCollected : c.preview,
                    "aria-hidden": !0,
                  }),
                  !p &&
                    (0, l.jsx)("div", {
                      className: d ? c.purchasedEffect : void 0,
                      children: (0, l.jsx)(o.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: r,
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
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("77078");
      let r = e => {
        let { analyticsLocations: t, initialSelectedEffectId: r, guild: n } = e;
        (0, s.openModalLazy)(async () => {
          let { default: e } = await a.el("889793").then(a.bind(a, "889793"));
          return a =>
            (0, l.jsx)(e, {
              ...a,
              guild: n,
              initialSelectedEffectId: r,
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
      var l = a("37983");
      a("884691");
      var s = a("469563"),
        r = a("237020"),
        n = a("75196"),
        i = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: s = "currentColor",
              foreground: r,
              ...i
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, n.default)(i),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: r,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.00043 14.0491L19.5904 3.46912L23.1212 6.99994L8.99993 21.1213L1.28485 13.4062L4.83367 9.88236L9.00043 14.0491Z",
              }),
            });
          },
          r.CheckmarkBoldIcon,
          void 0,
          { size: 24 }
        );
    },
  },
]);
//# sourceMappingURL=15614ddd40a3d6a67704.js.map
