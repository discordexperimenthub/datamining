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
            return i;
          },
        });
      var s = a("884691"),
        l = a("748820"),
        r = a("560103"),
        n = a("599110");
      let o = (e, t, a, s) => {
          let {
            scrollTop: l = 0,
            scrollOffset: r = 0,
            scrollHeight: o = 0,
            scrollWidth: i = 0,
          } = s;
          if (o > 0) {
            let s = (l + r) / o;
            s > 0 &&
              n.default.track(e, {
                scroll_visible_percent: s,
                source: a,
                page_height: Math.round(o),
                page_width: Math.round(i),
                page_session_id: t,
              });
          }
        },
        i = (e, t) => {
          let a = s.useRef(null),
            n = s.useRef((0, l.v4)()),
            i = (0, r.useThrottledFunction)(o, 5e3, [], { trailing: !0 }),
            u = s.useCallback(() => {
              var s;
              let l =
                null === (s = a.current) || void 0 === s
                  ? void 0
                  : s.getScrollerNode();
              null != l &&
                i(e, n.current, t, {
                  scrollTop: l.scrollTop,
                  scrollOffset: l.offsetHeight,
                  scrollHeight: l.scrollHeight,
                  scrollWidth: l.scrollWidth,
                });
            }, [i, e, t]);
          return { scrollerRef: a, scrollHandler: u, sessionId: n.current };
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
      var s = a("862205");
      a("773336");
      let l = (0, s.createExperiment)({
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
        return l.useExperiment({ location: t });
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
      var s = a("446674"),
        l = a("913144");
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
        o = new Date("2024-03-13").getTime(),
        i = new Date("2024-03-27").getTime(),
        u = [
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
        c = [
          "1217624148080332820",
          "1217625289681801316",
          "1217625572168044604",
          "1217625794382401577",
          "1217626024540508170",
          "1217626509737459852",
          "1217627051217911848",
          "1217627230818009171",
        ];
      class d extends s.default.PersistedStore {
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
          () => r(u, o),
          () => r(c, i),
          e => ({ ...e, "1217626219651006495": i }),
        ]);
      var f = new d(l.default, {
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
      var s = a("862205");
      let l = (0, s.createExperiment)({
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
          return l.useExperiment({ location: t });
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
      var s = a("656280"),
        l = a.n(s),
        r = a("65597"),
        n = a("206230"),
        o = a("388491");
      let i = (e, t) => {
          let a = e.toRgb(),
            s = t.toRgb(),
            [r, n, i] = (0, o.getValueInColorGradientByPercentage)(
              [a.r, a.g, a.b],
              [s.r, s.g, s.b],
              50
            );
          return l({ r, g: n, b: i });
        },
        u = (e, t) => {
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
                  border: i(t[0], t[1]).setAlpha(0.4),
                  label: i(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        c = (e, t) => {
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
                  text: i(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        d = (e, t) => {
          let { h: a, s, l: r } = e.toHsl();
          return l({ h: a, s: s * t, l: r });
        };
      var f = e => t => {
        let a = (0, r.useStateFromStores)(
          [n.default],
          () => n.default.saturation
        );
        if (null == t) return {};
        let s = {
          backgroundColors: u(e, t.backgroundColors),
          buttonColors: c(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === a
          ? {
              ...s,
              isDarkText: !!(
                null != s.backgroundColors &&
                s.backgroundColors.secondary.isLight()
              ),
            }
          : {
              backgroundColors:
                null != s.backgroundColors
                  ? {
                      primary: d(s.backgroundColors.primary, a),
                      secondary: d(s.backgroundColors.secondary, a),
                      border: d(s.backgroundColors.border, a),
                      label: d(s.backgroundColors.label, a),
                    }
                  : void 0,
              buttonColors:
                null != s.buttonColors
                  ? {
                      primary: d(s.buttonColors.primary, a),
                      secondary: d(s.buttonColors.secondary, a),
                      text: d(s.buttonColors.text, a),
                    }
                  : void 0,
              confettiColors: s.confettiColors.map(e => d(e, a)),
              isDarkText: !!(
                null != s.backgroundColors &&
                s.backgroundColors.secondary.isLight()
              ),
            };
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
      var s = a("862205");
      let l = (0, s.createExperiment)({
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
        return l.useExperiment({ location: t });
      };
    },
    990139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ShopCardHoverAnimationVariant: function () {
            return l;
          },
          useShopCardHoverAnimationExperiment: function () {
            return o;
          },
        });
      var s,
        l,
        r = a("862205");
      ((s = l || (l = {}))[(s.CONTROL = 0)] = "CONTROL"),
        (s[(s.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (s[(s.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
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
        o = e => n.useExperiment({ location: e });
    },
    235898: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        }),
        a("222007");
      var s = a("884691"),
        l = a("65597"),
        r = a("875212"),
        n = a("21526"),
        o = a("853987"),
        i = a("12480"),
        u = a("775416");
      function c(e) {
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
            isFetching: c,
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
            let [a, i, u, c] = (0, l.useStateFromStoresArray)(
              [o.default],
              () => {
                var e;
                return [
                  o.default.isFetching,
                  o.default.error,
                  null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0,
                  o.default.categories,
                ];
              }
            );
            return (
              (0, s.useEffect)(() => {
                !(a || i || Date.now() - u < 6e5) &&
                  (0, n.fetchCollectiblesCategories)(e);
              }, [a, u, i, e]),
              { isFetching: a, categories: c, error: i }
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
            let [t, a, o, c, d] = (0, l.useStateFromStoresArray)(
                [u.default],
                () => [
                  u.default.isFetching,
                  u.default.isClaiming,
                  u.default.fetchError,
                  u.default.claimError,
                  u.default.purchases,
                ]
              ),
              { shouldFakePurchaseSuccessFlowLocally: f } = (0, i.default)({
                location: "useFetchPurchases",
              });
            return (
              (0, s.useEffect)(() => {
                (!f || !(d.size > 0)) && (0, n.fetchCollectiblesPurchases)();
              }, [f]),
              {
                isClaiming: a,
                fetchError: o,
                claimError: c,
                isFetching: t,
                purchases: d,
              }
            );
          })(),
          E = null !== (t = null != f ? f : p) && void 0 !== t ? t : g;
        return {
          isFetching: c || C,
          isFetchingCategories: c,
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
      var s = a("884691"),
        l = a("65597"),
        r = a("775416");
      let n = e => {
        let t = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.purchases
          ),
          a = (0, s.useMemo)(() => {
            let a = [],
              s = [];
            for (let l of e.values()) {
              let e = l.products.every(e => !!t.get(e.skuId));
              e ? a.push(l) : s.push(l);
            }
            return s.concat(a);
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
      var s = a("884691"),
        l = a("65597"),
        r = a("775416");
      let n = e => {
        let t = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.purchases
          ),
          a = (0, s.useMemo)(() => {
            let a = [],
              s = [];
            for (let l of e.values())
              void 0 !== t.get(l.skuId) ? a.push(l) : s.push(l);
            return s.concat(a);
          }, [e, t]);
        return a;
      };
    },
    677257: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("656280"),
        l = a.n(s),
        r = a("669491"),
        n = a("546483");
      let o = l(
          r.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        i = l(
          r.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
        ),
        u = (0, n.default)({ dark: i, light: o });
      var c = u;
    },
    716120: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("65597"),
        o = a("854588"),
        i = a("206230"),
        u = a("284679"),
        c = a("491232"),
        d = a("408381"),
        f = a("467618"),
        m = e => {
          let {
              asset: t,
              assetUrlOverride: a,
              size: l = d.MAX_CONTENT_WIDTH,
              addGradient: m = !0,
              className: p,
              style: g,
              children: C,
            } = e,
            h = (0, n.useStateFromStores)(
              [i.default],
              () => i.default.saturation
            );
          return (0, s.jsx)("div", {
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
                        (0, c.getCollectiblesAssetURL)(t, {
                          size: l,
                          format: "jpg",
                        }),
                        ")"
                      ),
                      backgroundSize: "cover",
                    };
              let e = (0, u.hexOpacityToRgba)(
                o.default.unsafe_rawColors.BLACK_500,
                1 - h
              );
              return {
                ...g,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, c.getCollectiblesAssetURL)(t, {
                      size: l,
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
      var s = a("884691"),
        l = a("803182"),
        r = a("446674"),
        n = a("812204"),
        o = a("685665"),
        i = a("216719"),
        u = a("54809"),
        c = a("49111");
      let d = "".concat("#").concat("itemSkuId", "="),
        f = new RegExp("^".concat(d, "(\\d+)$")),
        m = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
        p = e => {
          let t = (0, l.useLocation)();
          s.useEffect(() => {
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
            analyticsLocations: s,
            analyticsSource: l,
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
                  (0, u.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: e,
                    analyticsSource: l,
                    analyticsLocations: s,
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
              isLayer: u,
              initialItemCardRef: d,
            } = e,
            m = s.useRef(null),
            p = (0, l.useLocation)(),
            C =
              p.pathname === c.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : p.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, o.default)(C);
          s.useEffect(() => {
            if (u) return;
            let e = f.exec(p.hash);
            if (null != e) {
              let t = e[1];
              m.current = t;
            }
          }, []);
          let E = (0, r.useStateFromStores)(
            [i.default],
            () => i.default.initialProductSkuId
          );
          s.useEffect(() => {
            if (a) return;
            let e = null;
            if (
              (u && null != E && (e = E),
              !u && null != m.current && (e = m.current),
              null != e)
            ) {
              let a = [],
                s = setTimeout(() => {
                  let s = g({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: h,
                    analyticsSource: C,
                    initialItemCardRef: d,
                  });
                  a.push(s);
                }, 250);
              return (
                a.push(() => clearTimeout(s)),
                () => {
                  a.forEach(e => e());
                }
              );
            }
          }, [u, h, C, t, a, E, d]);
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
      var s,
        l,
        r = a("37983");
      a("884691");
      var n = a("414456"),
        o = a.n(n),
        i = a("506838"),
        u = a("956089"),
        c = a("782340"),
        d = a("53248");
      ((l = s || (s = {})).BANNER = "banner"),
        (l.MODAL = "modal"),
        (l.CARD = "card");
      var f = e => {
        let { category: t, display: a, className: s } = e;
        if (null == t.unpublishedAt) return null;
        let l = (function (e) {
          let t = new Date(),
            a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
            s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
          return Math.floor((s - a) / 864e5);
        })(t.unpublishedAt);
        function n(e) {
          return (0, r.jsx)(u.TextBadge, {
            disableColor: !0,
            text: e,
            className: o(d.badge, s),
          });
        }
        return (0, i.match)([a, l > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
              days: l,
            });
            return n(e);
          })
          .with(["modal", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
              days: l,
            });
            return n(e);
          })
          .otherwise(() => {
            let e = c.default.Messages.COLLECTIBLES_LAST_DAY;
            return n(e);
          });
      };
    },
    258556: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return el;
          },
        }),
        a("794252"),
        a("222007");
      var s = a("37983"),
        l = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("917351"),
        i = a("506838"),
        u = a("265586"),
        c = a("65597"),
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
        return (0, i.match)(a)
          .with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () =>
            (0, s.jsx)(z.default, { isFullScreen: t })
          )
          .otherwise(() => (0, s.jsx)(V.default, { isFullScreen: t }));
      }
      function es(e) {
        var t, a;
        let {
            category: r,
            className: i,
            isPremiumUser: d,
            initialItemCardRef: f,
            isGiftEasterEggEnabled: p,
            setIsGiftEasterEggEnabled: g,
            showEasterEggToggle: C,
          } = e,
          h = l.useRef(10 + 70 * Math.random()),
          E = (0, w.usePurchasedProductsSort)(r.products),
          b = (0, o.groupBy)(E, "type"),
          S = (0, c.useStateFromStores)(
            [j.default],
            () => j.default.initialProductSkuId
          ),
          { tallerCardsEnabled: x } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          T = x ? X.default : W.default,
          I = l.useCallback(
            e => t => {
              e.skuId === S && (f.current = t.current);
            },
            [S, f]
          ),
          N = (e, t) =>
            0 === e.length
              ? null
              : (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(m.Text, {
                      className: n(et.itemTypeTitle, {
                        [et.itemTypeTitleForTallerCard]: x,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, s.jsx)("div", {
                      className: n(
                        et.cardsContainer,
                        x ? et.tallerShopCard : et.regularShopCard,
                        i
                      ),
                      children: e.map(e =>
                        (0, s.jsx)(
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
        return (0, s.jsxs)("div", {
          className: et.categoryWrapper,
          children: [
            C &&
              (0, s.jsx)(m.Clickable, {
                className: n(et.hiddenWumpus, { [et.hiddenWumpusEnabled]: p }),
                onClick: () => g(!0),
                style: { left: "".concat(h.current, "%") },
                children: (0, s.jsx)(L.default, {
                  idleAnimationState: v.AnimationState.IDLE,
                  giftStyle: Q.PremiumGiftStyles.BOX,
                }),
              }),
            (0, s.jsx)(U.default, {
              category: r,
              className: x ? et.tallerShopCardBanner : void 0,
            }),
            N(
              null !== (t = b[u.CollectiblesItemType.AVATAR_DECORATION]) &&
                void 0 !== t
                ? t
                : [],
              ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
            ),
            N(
              null !== (a = b[u.CollectiblesItemType.PROFILE_EFFECT]) &&
                void 0 !== a
                ? a
                : [],
              ee.default.Messages
                .PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
            ),
          ],
        });
      }
      var el = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: r } = (0,
          c.useStateFromStoresObject)([j.default], () =>
            j.default.getAnalytics()
          ),
          { analyticsLocations: o } = (0, E.default)([
            ...r,
            h.default.COLLECTIBLES_SHOP,
          ]),
          i = (0, c.useStateFromStores)([I.default], () =>
            I.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)
          ),
          v = (0, f.useHasAnyModalOpen)(),
          { onClose: L } = (0, K.useCollectiblesShopRouting)(),
          R = (0, c.useStateFromStores)([N.default], () =>
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
          el = (0, M.usePurchasedCategoriesSort)(V),
          { tallerCardsEnabled: er } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          en = l.useRef(null),
          [eo, ei] = l.useState(!1);
        (0, H.useProductDetailsDeepLinking)({
          categories: V,
          isFetchingCategories: z,
          isLayer: i,
          initialItemCardRef: en,
        });
        let {
          sessionId: eu,
          scrollerRef: ec,
          scrollHandler: ed,
        } = (0, b.usePageScrollPosition)(
          q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        l.useEffect(() => {
          O.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: o,
            source: a,
            page_session_id: eu,
          }),
            !w &&
              O.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                location_stack: o,
              });
        }, [w, o, a, eu]),
          l.useEffect(() => {
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
          l.useEffect(() => {
            !t && (0, p.setHomeLink)(q.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          l.useEffect(
            () => () => {
              (0, P.setCollectiblesCategoryItemsViewed)({
                categories: [...V.values()],
                itemTypes: [
                  u.CollectiblesItemType.AVATAR_DECORATION,
                  u.CollectiblesItemType.PROFILE_EFFECT,
                ],
              });
            },
            [V]
          ),
          l.useEffect(() => {
            if (!t || i || v) return;
            let e = e => {
              e.key === J.KeyboardEventKey.Escape && L();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, i, v, L]);
        let ef = l.useCallback(() => {
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
            let e = l.useRef(null),
              t = l.useRef(null);
            return (
              (0, m.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, s.jsxs)(E.AnalyticsLocationProvider, {
          value: o,
          children: [
            (0, s.jsxs)("div", {
              className: et.shop,
              ref: t ? eg : void 0,
              children: [
                t
                  ? null
                  : (0, s.jsxs)(T.default, {
                      className: n((0, A.getThemeClass)(em), et.headerBar),
                      toolbar: !0,
                      children: [
                        (0, s.jsx)(k.default, { className: et.logo }),
                        (0, s.jsx)(T.default.Title, {
                          className: et.title,
                          children: ee.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, s.jsx)("div", {
                    className: et.closeWrapper,
                    children: (0, s.jsx)(g.default, {
                      className: et.close,
                      closeAction: i ? P.closeCollectiblesShop : L,
                      keybind: "ESC",
                    }),
                  }),
                (0, s.jsx)(m.AdvancedScroller, {
                  className: n(et.shopScroll, {
                    [et.shopScrollBackgroundPrimary]: er,
                  }),
                  ref: ec,
                  onScroll: ed,
                  children: (0, s.jsx)("div", {
                    className: n(et.pageWrapper, {
                      [et.pageWrapperFullscreen]: t,
                      [et.pageWrapperBackgroundPrimary]: er,
                    }),
                    children: (0, s.jsxs)("main", {
                      className: n(et.page, {
                        [et.pageWithShopBannerHidden]: ep && !t,
                      }),
                      children: [
                        t
                          ? (0, s.jsx)(_.default, {
                              title: ee.default.Messages.COLLECTIBLES_SHOP,
                              ref: t ? eC : void 0,
                            })
                          : null,
                        !ep && (0, s.jsx)(ea, { isFullScreen: t }),
                        z
                          ? (0, s.jsx)(Y.default, {})
                          : X
                            ? (0, s.jsx)(G.default, { onRetry: ef })
                            : (0, s.jsx)("div", {
                                className: et.categories,
                                children: el
                                  .filter(e => {
                                    let { products: t } = e;
                                    return t.length > 0;
                                  })
                                  .map(e =>
                                    (0, s.jsx)(
                                      es,
                                      {
                                        isPremiumUser: w,
                                        category: e,
                                        initialItemCardRef: en,
                                        setIsGiftEasterEggEnabled: ei,
                                        isGiftEasterEggEnabled: eo,
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
            eo && (0, s.jsx)(Z.default, {}),
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
      var s = a("37983"),
        l = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("635058"),
        i = a("65597"),
        u = a("77078"),
        c = a("685665"),
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
            { analyticsLocations: a } = (0, c.default)(),
            r = l.useRef(null),
            n = (0, i.useStateFromStores)([f.default], () =>
              f.default.getCurrentUser()
            );
          return g.default.canUseCollectibles(n)
            ? (0, s.jsx)(s.Fragment, { children: t.summary })
            : (0, s.jsx)(s.Fragment, {
                children:
                  v.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, s.jsx)(u.Clickable, {
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
                          children: (0, s.jsx)(u.Text, {
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
        let { category: l, className: r } = e,
          { backgroundColors: i } = (0, h.default)(l.styles),
          c = !!(null === (t = x.categoryBannerOverrides[l.skuId]) ||
          void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return (0, s.jsxs)(E.default, {
          asset: l.banner,
          className: n(L.shopBanner, r),
          style:
            null != i
              ? {
                  background: "".concat(
                    (0, S.getBackgroundGradient)(i),
                    " border-box border-box"
                  ),
                  outlineColor: i.border.toHslString(),
                }
              : void 0,
          children: [
            (0, s.jsxs)("div", {
              className: L.discordLogo,
              children: [
                (0, s.jsx)(m.default, { className: L.discordIcon }),
                (0, s.jsx)(p.default, { className: L.discordWordmark }),
              ],
            }),
            (0, s.jsx)("img", {
              className: L.categoryLogo,
              src: (0, C.getCollectiblesAssetURL)(l.logo, { size: I }),
              alt: l.name,
              style: {
                maxWidth:
                  null === (a = x.categoryBannerOverrides[l.skuId]) ||
                  void 0 === a
                    ? void 0
                    : a.logoMaxWidth,
              },
            }),
            (0, s.jsx)(u.Text, {
              className: n(L.summary, { [L.blackSummary]: c }),
              variant: "text-md/normal",
              children:
                l.skuId === o.CollectiblesCategorySkuId.DISXCORE
                  ? (0, s.jsx)(N, { category: l })
                  : l.summary,
            }),
            (0, s.jsx)(b.default, {
              category: l,
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
            return z;
          },
        }),
        a("222007");
      var s = a("37983"),
        l = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("265586"),
        i = a("65597"),
        u = a("77078"),
        c = a("54239"),
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
        y = a("677257"),
        A = a("342676"),
        P = a("450492"),
        R = a("920580"),
        j = a("54809"),
        B = a("408381"),
        F = a("264579"),
        D = a("646718"),
        M = a("782340"),
        w = a("682123");
      let H = N.default.getEnableHardwareAcceleration()
          ? u.AnimatedAvatar
          : u.Avatar,
        U = u.AvatarSizes.SIZE_120,
        W = (0, p.getDecorationSizeForAvatarSize)(U),
        G = e => {
          let { children: t, onClick: a, ...l } = e;
          return (0, s.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...l,
            children: t,
          });
        },
        V = e => {
          let { className: t, ...a } = e;
          return (0, s.jsx)(u.Button, {
            color: u.ButtonColors.CUSTOM,
            look: u.Button.Looks.FILLED,
            size: u.ButtonSizes.ICON,
            className: n(w.previewButton, t),
            innerClassName: w.previewButtonInner,
            "aria-label": M.default.Messages.PREVIEW,
            ...a,
            children: (0, s.jsx)(v.default, { width: 24, height: 24 }),
          });
        };
      var z = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: v = !1,
            isGiftEasterEggEnabled: N,
          } = e,
          { analyticsLocations: z } = (0, m.default)(
            f.default.COLLECTIBLES_SHOP_CARD
          ),
          K = l.useRef(null),
          Y = (0, d.default)(K),
          [X, Z] = l.useState(!1),
          q = Y || X,
          $ = (0, i.useStateFromStores)([x.default], () =>
            x.default.getCurrentUser()
          ),
          [J] = t.items,
          {
            avatarDecorationSrc: Q,
            eventHandlers: ee,
            avatarPlaceholderSrc: et,
          } = (0, g.default)({
            user: $,
            avatarDecorationOverride:
              (null == J ? void 0 : J.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
                ? J
                : void 0,
            size: W,
            animateOnHover: !q,
          }),
          { buttonColors: ea, backgroundColors: es } = (0, y.default)(t.styles),
          el = (0, O.getFormattedPriceForCollectiblesProduct)(t, v),
          er = (0, O.isPremiumCollectiblesProduct)(t),
          en = (0, O.isFreeCollectiblesProduct)(t),
          [eo, ei, eu] = (0, i.useStateFromStoresArray)([k.default], () => [
            k.default.getPurchase(t.skuId),
            k.default.isClaiming === t.skuId,
            null != k.default.isClaiming && k.default.isClaiming !== t.skuId,
          ]),
          ec = l.useRef(null);
        l.useEffect(() => {
          let { current: e } = K;
          if (null == e) return;
          let t = () => Z(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []);
        let ed = (0, E.default)({ analyticsLocations: z }),
          ef = () => {
            if (
              ((0, c.popLayer)(),
              ed(),
              (null == J ? void 0 : J.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, p.openAvatarDecorationModal)({
                initialSelectedDecoration: J,
                analyticsLocations: z,
              });
              return;
            }
            (null == J ? void 0 : J.type) ===
              o.CollectiblesItemType.PROFILE_EFFECT &&
              (0, S.openProfileEffectModal)({
                initialSelectedEffectId: J.id,
                analyticsLocations: z,
              });
          },
          em = e => s => {
            (ec.current = s.currentTarget),
              (0, j.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: z,
                analyticsSource: e,
                returnRef: ec,
              });
          },
          ep = em(f.default.COLLECTIBLES_SHOP_CARD),
          eg = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eC = () =>
            (0, s.jsx)("div", {
              className: w.hoverUpsellContainer,
              children: (0, s.jsx)(h.default, {
                fullWidth: !0,
                className: w.premiumSubscribeButton,
                disabled: eu,
                onClick: e => e.stopPropagation(),
                buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        l.useEffect(() => {
          null == r || r(K);
        }, [r]);
        let eh = () =>
            null != eo
              ? (0, s.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: w.priceTag,
                  children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : er
                ? (0, s.jsx)(u.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: w.priceTag,
                    children:
                      M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, s.jsx)(R.default, {
                    product: t,
                    className: w.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eE = () =>
            er
              ? null
              : en
                ? (0, s.jsx)(V, {
                    style:
                      null != ea
                        ? {
                            background: ea.secondary.toHslString(),
                            color: ea.text.toHslString(),
                          }
                        : void 0,
                    className: w.defaultPreviewButtonColor,
                    onClick: eg,
                  })
                : (0, s.jsx)(P.default, {
                    product: t,
                    returnRef: K,
                    isGiftEasterEggEnabled: N,
                    tooltipDelay: 250,
                  }),
          eb = () => {
            if (er && !v && !en) return eC();
            let e =
                null != ea
                  ? {
                      background: (0, B.getBackgroundGradient)(ea, 90),
                      color: ea.text.toHslString(),
                    }
                  : void 0,
              a = er
                ? {
                    submitting: ei,
                    submittingStartedLabel:
                      M.default.Messages.COLLECTIBLES_COLLECTING,
                    submittingFinishedLabel:
                      M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                    onClick: async () => {
                      await (0, _.claimPremiumCollectiblesProduct)(t.skuId),
                        (0, F.default)({ product: t, analyticsLocations: z });
                    },
                  }
                : {
                    onClick: () =>
                      (0, C.default)({
                        skuId: t.skuId,
                        analyticsLocations: z,
                        returnRef: K,
                      }),
                  };
            return (0, s.jsxs)("div", {
              className: w.buttonsContainer,
              children: [
                null == eo
                  ? (0, s.jsx)(G, {
                      style: e,
                      disabled: eu,
                      className: w.purchaseButton,
                      ...a,
                      children: er
                        ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : M.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: el,
                          }),
                    })
                  : (0, s.jsx)(G, {
                      style: e,
                      disabled: eu,
                      onClick: ef,
                      children: M.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                eE(),
              ],
            });
          },
          eS =
            null != es
              ? {
                  background: "".concat(
                    (0, B.getBackgroundGradient)(es),
                    " border-box border-box"
                  ),
                  borderColor: es.border.toHslString(),
                  boxShadow: q
                    ? "0 0 25px 1px ".concat(es.primary.toHslString())
                    : "none",
                }
              : void 0;
        return (0, s.jsx)(u.FocusRing, {
          children: (0, s.jsxs)(u.Clickable, {
            innerRef: K,
            className: w.shopCard,
            onBlur: () => Z(!1),
            onClick: ep,
            style: eS,
            id: "shop-item-".concat(t.skuId),
            children: [
              er &&
                (0, s.jsx)(u.Tooltip, {
                  tooltipContentClassName: w.premiumWheelTooltipContent,
                  color: u.Tooltip.Colors.PRIMARY,
                  text: M.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, s.jsx)(I.TextBadge, {
                      ...e,
                      className: w.premiumWheelBadge,
                      text: (0, s.jsx)(L.default, {
                        className: w.premiumWheel,
                      }),
                    }),
                }),
              (null == J ? void 0 : J.type) ===
                o.CollectiblesItemType.PROFILE_EFFECT &&
                (0, s.jsx)("div", {
                  className: w.profileEffectShopPreview,
                  children: (0, s.jsx)(b.default, {
                    isHovering: q,
                    profileEffectId: J.id,
                    isPurchased: null != eo,
                  }),
                }),
              (null == J ? void 0 : J.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)(H, {
                  ...ee,
                  avatarDecoration: Q,
                  src: et,
                  className: n(w.avatar, { [w.avatarPurchased]: null != eo }),
                  size: U,
                  "aria-label": M.default.Messages.USER_SETTINGS_AVATAR,
                }),
              null != eo
                ? (0, s.jsx)("div", {
                    className:
                      (null == J ? void 0 : J.type) ===
                      o.CollectiblesItemType.PROFILE_EFFECT
                        ? w.profileEffectCheckmarkWrapper
                        : w.checkmarkWrapper,
                    children: (0, s.jsx)(T.default, {
                      width: 38,
                      height: 38,
                      className: w.checkmark,
                    }),
                  })
                : null,
              (0, s.jsxs)("div", {
                className: n(w.cardText, {
                  [w.cardTextProfileEffect]:
                    (null == J ? void 0 : J.type) ===
                    o.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, s.jsx)(u.Text, {
                    color: "always-white",
                    variant: "text-lg/bold",
                    className: w.productName,
                    children: t.name,
                  }),
                  (0, s.jsxs)("div", {
                    className: w.detailsWrapper,
                    children: [
                      (0, s.jsxs)("div", {
                        className: w.innerBlur,
                        children: [
                          (0, s.jsx)(u.Text, {
                            color: "always-white",
                            className: w.description,
                            variant: "text-md/normal",
                            children: t.summary,
                          }),
                          eh(),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: w.innerHover,
                        children: eb(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(A.default, {
                category: a,
                className: w.limitedTimeBadge,
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
            return l;
          },
        });
      var s = a("635058");
      let l = {
        [s.CollectiblesCategorySkuId.SPRINGTOONS]: {
          assetUrlOverride: a("266772"),
          logoMaxWidth: "48%",
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [s.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: a("482500"),
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [s.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: a("530514"),
          addGradient: !0,
        },
        [s.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: a("162332"),
          addGradient: !0,
        },
        [s.CollectiblesCategorySkuId.CYBERPUNK]: {
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
      var s = a("37983");
      a("884691");
      var l = a("819855"),
        r = a("77078"),
        n = a("841098"),
        o = a("782340"),
        i = a("706055"),
        u = a("321220"),
        c = a("684386"),
        d = e => {
          let { onRetry: t } = e,
            a = (0, n.default)();
          return (0, s.jsxs)("div", {
            className: i.wrapper,
            children: [
              (0, s.jsx)("img", {
                className: i.loadIssueImg,
                src: (0, l.isThemeDark)(a) ? u : c,
                alt: "",
              }),
              (0, s.jsx)(r.Heading, {
                className: i.heading1,
                variant: "heading-xl/semibold",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
              }),
              (0, s.jsx)(r.Text, {
                variant: "text-md/normal",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
              }),
              (0, s.jsx)(r.Button, {
                className: i.reload,
                size: r.Button.Sizes.MEDIUM,
                color: r.Button.Colors.BRAND_NEW,
                onClick: t,
                children: o.default.Messages.ERRORS_RELOAD,
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
      var s = a("37983"),
        l = a("884691"),
        r = a("77078"),
        n = a("252744"),
        o = a("685665"),
        i = a("108486"),
        u = a("946964"),
        c = a("978679"),
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
          { analyticsLocations: S } = (0, o.default)(),
          x = l.useRef(null),
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
        return (0, s.jsx)(r.Tooltip, {
          text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, s.jsx)(r.Button, {
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
                  (0, u.default)({
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
                ? (0, s.jsx)(i.SeasonalGiftIcon, {
                    hovered: T,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: g,
                  })
                : (0, s.jsx)(c.default, { width: 24, height: 24 }),
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
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("77078"),
        o = a("782340"),
        i = a("313506"),
        u = a("247329"),
        c = a("333838"),
        d = a("399637"),
        f = a("976076"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, s.jsxs)("div", {
            className: i.heroBanner,
            children: [
              (0, s.jsxs)("div", {
                className: r(i.heroDescription, {
                  [i.heroDescriptionWithSidebar]: !t,
                }),
                children: [
                  (0, s.jsx)(n.Heading, {
                    className: i.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, s.jsx)(n.Text, {
                    className: i.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      o.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE,
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: i.bannerBackgroundWrapper,
                children: (0, s.jsx)("img", {
                  className: i.bannerBackground,
                  alt: "",
                  src: u,
                }),
              }),
              (0, s.jsx)("img", {
                className: i.bannerForeground,
                alt: "",
                src: c,
              }),
              (0, s.jsx)("img", { className: i.bannerHand, alt: "", src: d }),
              (0, s.jsx)("img", {
                className: r(i.largeSparkle, i.largeTopSparkle),
                alt: "",
                src: f,
              }),
              (0, s.jsx)("img", {
                className: r(i.smallSparkle, i.smallTopSparkle),
                alt: "",
                src: f,
              }),
              (0, s.jsx)("img", {
                className: r(i.largeSparkle, i.largeLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, s.jsx)("img", {
                className: r(i.smallSparkle, i.smallLeftSparkle),
                alt: "",
                src: f,
              }),
              (0, s.jsx)("img", {
                className: r(i.largeSparkle, i.largeRightSparkle),
                alt: "",
                src: f,
              }),
              (0, s.jsx)("img", {
                className: r(i.smallSparkle, i.smallRightSparkle),
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
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("77078"),
        o = a("782340"),
        i = a("859155"),
        u = a("200406"),
        c = a("283045"),
        d = a("718297"),
        f = a("929880"),
        m = function (e) {
          let { isFullScreen: t } = e;
          return (0, s.jsxs)("div", {
            className: r(
              i.heroBanner,
              t ? i.heroBannerFullScreen : i.heroBannerWithSidebar
            ),
            children: [
              (0, s.jsxs)("div", {
                className: i.heroDescription,
                children: [
                  (0, s.jsx)(n.Heading, {
                    className: i.bannerTitle,
                    color: "always-white",
                    variant: "display-lg",
                    children:
                      o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE,
                  }),
                  (0, s.jsx)(n.Text, {
                    className: i.heroSubtitle,
                    color: "always-white",
                    variant: "text-lg/normal",
                    children:
                      o.default.Messages
                        .COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: i.bannerArt,
                children: [
                  (0, s.jsx)("img", {
                    className: i.bannerGrid,
                    alt: "",
                    src: u,
                    width: "484",
                    height: "402",
                  }),
                  (0, s.jsx)("img", {
                    className: i.bannerGridSmol,
                    alt: "",
                    src: d,
                    width: "85",
                    height: "60",
                  }),
                  (0, s.jsx)("img", {
                    className: i.bannerGridMedium,
                    alt: "",
                    src: c,
                    width: "178",
                    height: "106",
                  }),
                  (0, s.jsx)("img", {
                    className: i.bannerHand,
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
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("65597"),
        o = a("755854"),
        i = a("77078"),
        u = a("161778"),
        c = a("697218"),
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
            innerClassName: l,
            disableTooltipPointerEvents: E,
            alwaysWhiteText: b = !0,
            nitroWheelColor: S,
          } = e,
          x = (0, n.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          T = (0, n.useStateFromStores)([u.default], () =>
            (0, o.isThemeDark)(u.default.theme)
          ),
          v = (0, m.extractPriceByPurchaseTypes)(
            t,
            g.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
        if (null == v) return null;
        if (v.amount <= 0)
          return (0, s.jsx)("div", {
            className: r(h.priceTagsContainer, a),
            children: (0, s.jsx)(p.default, {
              alwaysWhiteText: b,
              price: v,
              className: l,
            }),
          });
        let L = (0, m.extractPriceByPurchaseTypes)(
            t,
            g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
          ),
          I = !f.default.canUseCollectibles(x);
        return (0, s.jsxs)("div", {
          className: r(h.priceTagsContainer, a),
          children: [
            (0, s.jsx)(p.default, {
              alwaysWhiteText: b,
              price: v,
              className: r([l, I ? void 0 : h.strikedPrice]),
            }),
            null != L &&
              (0, s.jsx)(p.default, {
                price: L,
                alwaysWhiteText: b,
                renderPrice: I
                  ? e =>
                      C.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: r([l, I ? h.fullPrice : void 0]),
                variant: I ? "text-xs/semibold" : void 0,
                icon: (0, s.jsx)(i.Tooltip, {
                  text: C.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": C.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: E,
                  children: e => {
                    let { ...t } = e;
                    return (0, s.jsx)(d.default, {
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
            return u;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("77078"),
        o = a("153160"),
        i = a("468437"),
        u = e => {
          var t;
          let {
              price: { amount: a, currency: l },
              renderPrice: u,
              icon: c,
              className: d,
              variant: f = "heading-md/semibold",
              alwaysWhiteText: m = !0,
            } = e,
            p = (0, o.formatPrice)(a, l);
          return (0, s.jsxs)(n.Heading, {
            variant: f,
            color: m ? "always-white" : "none",
            className: r(i.heading, d),
            children: [
              c,
              null !== (t = null == u ? void 0 : u(p)) && void 0 !== t ? t : p,
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
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("77078");
      let r = "collectibles shop product details modal",
        n = e => {
          let {
            product: t,
            category: n,
            analyticsSource: o,
            analyticsLocations: i,
            returnRef: u,
          } = e;
          (0, l.openModalLazy)(
            async () => {
              let { default: e } = await a
                .el("179047")
                .then(a.bind(a, "179047"));
              return a =>
                (0, s.jsx)(e, {
                  ...a,
                  product: t,
                  category: n,
                  analyticsSource: o,
                  analyticsLocations: i,
                  returnRef: u,
                });
            },
            { modalKey: r }
          );
        },
        o = () => {
          (0, l.closeModal)(r);
        };
    },
    931262: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useCollectiblesShopRouting: function () {
            return c;
          },
        }),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660"),
        a("222007");
      var s,
        l,
        r = a("884691"),
        n = a("90915"),
        o = a("54239"),
        i = a("393414"),
        u = a("49111");
      function c() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = r.useMemo(() => new URLSearchParams(e), [e]),
          s = a.get("source"),
          l = null != s ? parseInt(s, 10) : null,
          c = r.useCallback(() => {
            if (0 === l) {
              (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
              return;
            }
            if ((0, i.currentRouteHasBackNavigation)()) {
              (0, i.back)();
              return;
            }
            (0, i.transitionTo)(u.Routes.APP);
          }, [l]);
        return { onClose: c, source: l, ...t };
      }
      ((l = s || (s = {}))[(l.SETTINGS = 0)] = "SETTINGS"),
        (l[(l.CHANGELOG = 1)] = "CHANGELOG"),
        (l[(l.DM_LIST = 2)] = "DM_LIST");
    },
    695824: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("414456"),
        r = a.n(l),
        n = a("922063"),
        o = a("858422"),
        i = a("682123"),
        u = a("183891");
      let c = () => 4 * Math.random() + 8,
        d = [c(), c(), c()];
      var f = () =>
        (0, s.jsx)(s.Fragment, {
          children: d.map(e =>
            (0, s.jsxs)(
              "div",
              {
                className: n.cardsContainer,
                children: [
                  (0, s.jsx)("div", {
                    className: r(u.skeleton, o.shopBanner),
                    children: (0, s.jsx)("div", { className: u.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: r(u.skeleton, i.shopCard),
                        children: (0, s.jsxs)("div", {
                          className: u.cardBody,
                          children: [
                            (0, s.jsx)("div", { className: u.cardAvatar }),
                            (0, s.jsx)("div", { className: u.cardTitle }),
                            (0, s.jsx)("div", { className: u.cardDescription }),
                            (0, s.jsx)("div", { className: u.cardSummary }),
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
            return q;
          },
        }),
        a("222007"),
        a("794252");
      var s = a("37983"),
        l = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("506838"),
        i = a("265586"),
        u = a("65597"),
        c = a("669491"),
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
        B = a("990139"),
        F = a("677257"),
        D = a("342676"),
        M = a("450492"),
        w = a("920580"),
        H = a("54809"),
        U = a("264579"),
        W = a("646718"),
        G = a("782340"),
        V = a("600545");
      let z = y.default.getEnableHardwareAcceleration()
          ? f.AnimatedAvatar
          : f.Avatar,
        K = f.AvatarSizes.SIZE_152,
        Y = (0, h.getDecorationSizeForAvatarSize)(K),
        X = e => {
          let { children: t, onClick: a, ...l } = e;
          return (0, s.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...l,
            children: t,
          });
        },
        Z = e => {
          let { className: t, ...a } = e;
          return (0, s.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: n(V.previewButton, t),
            innerClassName: V.previewButtonInner,
            "aria-label": G.default.Messages.PREVIEW,
            ...a,
            children: (0, s.jsx)(_.default, { width: 24, height: 24 }),
          });
        };
      var q = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: _ = !1,
            isGiftEasterEggEnabled: y,
          } = e,
          { analyticsLocations: q } = (0, C.default)(
            g.default.COLLECTIBLES_SHOP_CARD
          ),
          $ = l.useRef(null),
          J = (0, p.default)($),
          [Q, ee] = l.useState(!1),
          et = J || Q,
          ea = (0, u.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          ),
          [es] = t.items,
          {
            avatarDecorationSrc: el,
            eventHandlers: er,
            avatarPlaceholderSrc: en,
          } = (0, E.default)({
            user: ea,
            avatarDecorationOverride:
              (null == es ? void 0 : es.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? es
                : void 0,
            size: Y,
            animateOnHover: !et,
          }),
          { backgroundColors: eo } = (0, F.default)(t.styles),
          ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, _),
          eu = (0, j.isPremiumCollectiblesProduct)(t),
          ec = (0, j.isFreeCollectiblesProduct)(t),
          [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [
            R.default.getPurchase(t.skuId),
            R.default.isClaiming === t.skuId,
            null != R.default.isClaiming && R.default.isClaiming !== t.skuId,
          ]),
          ep = (0, u.useStateFromStores)([L.default], () =>
            (0, d.isThemeDark)(L.default.theme)
          ),
          eg = (0, u.useStateFromStores)([P.default], () =>
            P.default.getIsProductNew(es.skuId)
          ),
          { hoverVariant: eC } = (0, B.useShopCardHoverAnimationExperiment)(
            "CollectiblesShopTallCard"
          );
        l.useEffect(() => {
          let { current: e } = $;
          if (null == e) return;
          let t = () => ee(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []);
        let eh = (0, x.default)({ analyticsLocations: q }),
          eE = l.useRef(null),
          eb = () => {
            if (
              ((0, m.popLayer)(),
              eh(),
              (null == es ? void 0 : es.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, h.openAvatarDecorationModal)({
                initialSelectedDecoration: es,
                analyticsLocations: q,
              });
              return;
            }
            (null == es ? void 0 : es.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, v.openProfileEffectModal)({
                initialSelectedEffectId: es.id,
                analyticsLocations: q,
              });
          },
          eS = e => s => {
            (eE.current = s.currentTarget),
              (0, H.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: q,
                analyticsSource: e,
                returnRef: eE,
              });
          },
          ex = eS(g.default.COLLECTIBLES_SHOP_CARD),
          eT = eS(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          ev = () =>
            (0, s.jsx)("div", {
              className: V.hoverUpsellContainer,
              children: (0, s.jsx)(S.default, {
                fullWidth: !0,
                className: V.premiumSubscribeButton,
                disabled: em,
                onClick: e => e.stopPropagation(),
                buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        l.useEffect(() => {
          null == r || r($);
        }, [r]);
        let eL = () =>
            null != ed
              ? (0, s.jsx)(f.Text, {
                  variant: "text-md/semibold",
                  className: V.priceTag,
                  children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : eu
                ? (0, s.jsx)(f.Text, {
                    variant: "text-md/semibold",
                    className: V.priceTag,
                    children:
                      G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, s.jsx)(w.default, {
                    alwaysWhiteText: !1,
                    product: t,
                    className: V.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eI = () =>
            eu
              ? null
              : ec
                ? (0, s.jsx)(Z, { onClick: eT })
                : (0, s.jsx)(M.default, {
                    product: t,
                    returnRef: $,
                    isGiftEasterEggEnabled: y,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          eN = () => {
            if (eu && !_ && !ec) return ev();
            let e = eu
              ? {
                  submitting: ef,
                  submittingStartedLabel:
                    G.default.Messages.COLLECTIBLES_COLLECTING,
                  submittingFinishedLabel:
                    G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                  onClick: async () => {
                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId),
                      (0, U.default)({ product: t, analyticsLocations: q });
                  },
                }
              : {
                  onClick: () =>
                    (0, b.default)({
                      skuId: t.skuId,
                      analyticsLocations: q,
                      returnRef: $,
                    }),
                };
            return (0, s.jsxs)("div", {
              className: V.buttonsContainer,
              children: [
                null == ed
                  ? (0, s.jsx)(X, {
                      disabled: em,
                      className: V.purchaseButton,
                      ...e,
                      children: eu
                        ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : G.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: ei,
                          }),
                    })
                  : (0, s.jsx)(X, {
                      disabled: em,
                      onClick: eb,
                      children: G.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                eI(),
              ],
            });
          },
          e_ = ep
            ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, s.jsx)(f.FocusRing, {
          children: (0, s.jsxs)(f.Clickable, {
            innerRef: $,
            className: n(
              V.shopCard,
              (0, o.match)(eC)
                .with(
                  B.ShopCardHoverAnimationVariant.CONTROL,
                  () => V.shopCardDefaultAnimation
                )
                .with(
                  B.ShopCardHoverAnimationVariant.TRANSFORMATION,
                  () => V.shopCardTransformationAnimation
                )
                .otherwise(() => void 0)
            ),
            onBlur: () => ee(!1),
            onClick: ex,
            style:
              null != eo
                ? {
                    backgroundColor: ep
                      ? "var(--background-floating)"
                      : "var(--background-secondary)",
                    borderColor: "var(--chat-border)",
                    boxShadow: et ? e_ : "none",
                  }
                : void 0,
            id: "shop-item-".concat(t.skuId),
            children: [
              eu &&
                (0, s.jsx)(f.Tooltip, {
                  tooltipContentClassName: V.premiumWheelTooltipContent,
                  color: f.Tooltip.Colors.PRIMARY,
                  text: G.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, s.jsx)(O.TextBadge, {
                      ...e,
                      className: V.premiumWheelBadge,
                      text: (0, s.jsx)(k.default, {
                        className: V.premiumWheel,
                      }),
                    }),
                }),
              (null == es ? void 0 : es.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, s.jsx)("div", {
                  className: V.profileEffectShopPreview,
                  children: (0, s.jsx)(T.default, {
                    isHovering: et,
                    profileEffectId: es.id,
                    isPurchased: null != ed,
                    removeSetHeight: !0,
                  }),
                }),
              (null == es ? void 0 : es.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)("div", {
                  className: V.avatarContainer,
                  children: (0, s.jsx)(z, {
                    ...er,
                    avatarDecoration: el,
                    src: en,
                    className: n(V.avatar, { [V.avatarPurchased]: null != ed }),
                    size: K,
                    "aria-label": G.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != ed
                ? (0, s.jsx)("div", {
                    className: V.checkmarkWrapper,
                    children: (0, s.jsx)(N.default, {
                      width: 38,
                      height: 38,
                      className: V.checkmark,
                    }),
                  })
                : null,
              (0, s.jsxs)("div", {
                className: n(V.cardText, {
                  [V.cardTextBlur]:
                    (null == es ? void 0 : es.type) ===
                    i.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, s.jsx)("div", {
                    className: n(
                      V.cardBackground,
                      ep ? V.darkCardBackground : V.lightCardBackground,
                      (null == es ? void 0 : es.type) ===
                        i.CollectiblesItemType.PROFILE_EFFECT
                        ? V.cardLowOpacity
                        : null
                    ),
                  }),
                  (0, s.jsx)(f.Text, {
                    variant: "text-lg/bold",
                    className: V.productName,
                    children: t.name,
                  }),
                  (0, s.jsx)(f.Text, {
                    className: n(V.description, V.innerMask),
                    variant: "text-md/normal",
                    lineClamp: 3,
                    children: t.summary,
                  }),
                  (0, s.jsxs)("div", {
                    className: V.detailsWrapper,
                    children: [
                      (0, s.jsx)("div", {
                        className: V.innerBlur,
                        children: eL(),
                      }),
                      (0, s.jsx)("div", {
                        className: V.innerHover,
                        children: eN(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(D.default, {
                category: a,
                className: V.limitedTimeBadge,
                display: "card",
              }),
              eg &&
                (0, s.jsx)(O.TextBadge, {
                  text: G.default.Messages.NEW,
                  disableColor: !0,
                  className: V.newBadge,
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
            return o;
          },
          getConfettiSprites: function () {
            return c;
          },
        });
      var s = a("635058"),
        l = a("547630");
      let r = 1060,
        n = e => e * (0, l.default)(),
        o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: a, secondary: s } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(a.toHslString(), ", ")
            .concat(s.toHslString(), ")");
        },
        i = [a("424869"), a("714293")],
        u = {
          ["".concat(s.CollectiblesCategorySkuId.FANTASY)]: [
            a("655029"),
            a("290216"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.ANIME)]: [
            a("597704"),
            a("714293"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.BREAKFAST)]: [
            a("286642"),
            a("94646"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.HALLOWEEN)]: [
            a("638538"),
            a("861485"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.FALL)]: [
            a("740683"),
            a("489847"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.WINTER)]: [
            a("770704"),
            a("165057"),
          ],
          ["".concat(s.CollectiblesCategorySkuId.MONSTERS)]: [
            a("330825"),
            a("125221"),
          ],
        },
        c = e => {
          var t;
          return null == e ? i : null !== (t = u[e]) && void 0 !== t ? t : i;
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
      var s = a("37983");
      a("884691");
      var l = a("232482");
      function r() {
        return (0, s.jsxs)("div", {
          className: l.snowflakes,
          children: [
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: l.snowflake, children: "❅" }),
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
      var s = a("37983");
      a("884691");
      var l = a("77078"),
        r = e => {
          let { product: t, analyticsLocations: r } = e;
          (0, l.openModalLazy)(async () => {
            let { default: e } = await a.el("658756").then(a.bind(a, "658756"));
            return a =>
              (0, s.jsx)(e, { product: t, analyticsLocations: r, ...a });
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
      var s = a("37983");
      a("884691");
      var l = a("748820"),
        r = a("77078"),
        n = a("112679"),
        o = a("55689"),
        i = a("21526"),
        u = a("599110"),
        c = a("49111");
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
          E = (0, l.v4)();
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await a.el("894742").then(a.bind(a, "894742"));
            return a => {
              let { onClose: l, returnRef: r, ...n } = a;
              return (0, s.jsx)(e, {
                ...n,
                loadId: E,
                skuId: t,
                isGift: d,
                giftMessage: f,
                analyticsLocations: g,
                onClose: e => {
                  l(), null == m || m(e);
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
                u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: E,
                  payment_type:
                    c.PurchaseTypeToAnalyticsPaymentType[
                      c.PurchaseTypes.ONE_TIME
                    ],
                  location: C,
                  is_gift: d,
                  location_stack: g,
                }),
                (0, n.clearError)(),
                (0, o.clearPurchaseTokenAuthState)(),
                null == m || m(h),
                h && (0, i.fetchCollectiblesPurchases)();
            },
            onCloseRequest: c.NOOP,
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
      var s = a("37983"),
        l = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("859498"),
        i = a("635471"),
        u = a("126746"),
        c = a("93902"),
        d = e => {
          let {
              profileEffectId: t,
              isHovering: a,
              forCollectedModal: r = !1,
              isPurchased: d,
              removeSetHeight: f = !1,
            } = e,
            m = r ? 250 : 0.1,
            [p, g] = l.useState(!0);
          return (l.useEffect(() => {
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
            ? (0, s.jsxs)("div", {
                className: n(u.previewContainer, {
                  [u.previewContainerAnimation]: r,
                  [u.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, s.jsx)("img", {
                    src: c,
                    alt: " ",
                    className: r ? u.previewForCollected : u.preview,
                    "aria-hidden": !0,
                  }),
                  !p &&
                    (0, s.jsx)("div", {
                      className: d ? u.purchasedEffect : void 0,
                      children: (0, s.jsx)(i.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: r,
                        restartMethod: o.RestartMethod.FromStart,
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
      var s = a("37983");
      a("884691");
      var l = a("77078");
      let r = e => {
        let { analyticsLocations: t, initialSelectedEffectId: r, guild: n } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await a.el("889793").then(a.bind(a, "889793"));
          return a =>
            (0, s.jsx)(e, {
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
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var l = a("469563"),
        r = a("237020"),
        n = a("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: l = "currentColor",
              foreground: r,
              ...o
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, n.default)(o),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: r,
                fill: l,
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
//# sourceMappingURL=4f00064dccd8800460b0.js.map
