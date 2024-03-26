(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93710"],
  {
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
    776204: function (e, t, a) {
      "use strict";
      e.exports = a.p + "2e795294945a9f6e2eaf.jpg";
    },
    266772: function (e, t, a) {
      "use strict";
      e.exports = a.p + "29894d1856711771a15a.jpg";
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
      var l = a("884691"),
        s = a("748820"),
        r = a("560103"),
        n = a("599110");
      let o = (e, t, a, l) => {
          let {
            scrollTop: s = 0,
            scrollOffset: r = 0,
            scrollHeight: o = 0,
            scrollWidth: i = 0,
          } = l;
          if (o > 0) {
            let l = (s + r) / o;
            l > 0 &&
              n.default.track(e, {
                scroll_visible_percent: l,
                source: a,
                page_height: Math.round(o),
                page_width: Math.round(i),
                page_session_id: t,
              });
          }
        },
        i = (e, t) => {
          let a = l.useRef(null),
            n = l.useRef((0, s.v4)()),
            i = (0, r.useThrottledFunction)(o, 5e3, [], { trailing: !0 }),
            u = l.useCallback(() => {
              var l;
              let s =
                null === (l = a.current) || void 0 === l
                  ? void 0
                  : l.getScrollerNode();
              null != s &&
                i(e, n.current, t, {
                  scrollTop: s.scrollTop,
                  scrollOffset: s.offsetHeight,
                  scrollHeight: s.scrollHeight,
                  scrollWidth: s.scrollWidth,
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
          () => r(u, o),
          () => r(c, i),
          e => ({ ...e, "1217626219651006495": i }),
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
        o = a("388491");
      let i = (e, t) => {
          let a = e.toRgb(),
            l = t.toRgb(),
            [r, n, i] = (0, o.getValueInColorGradientByPercentage)(
              [a.r, a.g, a.b],
              [l.r, l.g, l.b],
              50
            );
          return s({ r, g: n, b: i });
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
          backgroundColors: u(e, t.backgroundColors),
          buttonColors: c(e, t.buttonColors),
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
    990139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ShopCardHoverAnimationVariant: function () {
            return s;
          },
          useShopCardHoverAnimationExperiment: function () {
            return o;
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
      var l = a("884691"),
        s = a("65597"),
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
            let [a, i, u, c] = (0, s.useStateFromStoresArray)(
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
              (0, l.useEffect)(() => {
                !(a || i || Date.now() - u < 6e5) &&
                  (0, n.fetchCollectiblesCategories)(e);
              }, [a, u, i, e]),
              { isFetching: a, categories: c, error: i }
            );
          })(e),
          {
            isClaiming: m,
            fetchError: C,
            claimError: p,
            isFetching: g,
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
            let [t, a, o, c, d] = (0, s.useStateFromStoresArray)(
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
              (0, l.useEffect)(() => {
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
          E = null !== (t = null != f ? f : C) && void 0 !== t ? t : p;
        return {
          isFetching: c || g,
          isFetchingCategories: c,
          isFetchingPurchases: g,
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
            return c;
          },
        });
      var l = a("656280"),
        s = a.n(l),
        r = a("669491"),
        n = a("546483");
      let o = s(
          r.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        i = s(
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
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
              size: s = d.MAX_CONTENT_WIDTH,
              addGradient: m = !0,
              className: C,
              style: p,
              children: g,
            } = e,
            h = (0, n.useStateFromStores)(
              [i.default],
              () => i.default.saturation
            );
          return (0, l.jsx)("div", {
            className: r(f.banner, C),
            style: (() => {
              if (null == t) return p;
              if (1 === h)
                return null != a
                  ? {
                      ...p,
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
                      ...p,
                      backgroundImage: "url(".concat(
                        (0, c.getCollectiblesAssetURL)(t, {
                          size: s,
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
                ...p,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, c.getCollectiblesAssetURL)(t, {
                      size: s,
                      format: "jpg",
                    }),
                    ")"
                  ),
                backgroundBlendMode: "saturation",
                backgroundSize: "cover",
              };
            })(),
            children: g,
          });
        };
    },
    344205: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CollectiblesCountdown: function () {
            return c;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("146606"),
        r = a("65597"),
        n = a("77078"),
        o = a("174727"),
        i = a("206230"),
        u = a("556538");
      function c(e) {
        let { unpublishedAt: t, isVisible: a, displayOptions: c } = e,
          { days: d, hours: f, minutes: m, seconds: C } = (0, o.default)(t),
          p = (0, r.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion
          ),
          g = (0, s.useSpring)({
            transform: "translateX(-50%) ".concat(
              a ? "translateY(-100%)" : "translateY(0%)"
            ),
            opacity: a ? 1 : 0,
            config: { tension: 120, friction: 12 },
            immediate: p,
          });
        return (0, l.jsxs)(s.animated.div, {
          className: u.countDownWrapper,
          style: {
            backgroundColor: c.backgroundColor,
            boxShadow: c.boxShadow,
            color: c.labelColor,
            ...g,
          },
          children: [
            null != c.iconSrc &&
              (0, l.jsx)("img", { src: c.iconSrc, alt: "shy" }),
            (0, l.jsx)(n.Heading, {
              variant: "heading-md/medium",
              className: u.countdownLabel,
              children: c.label(),
            }),
            (0, l.jsx)(n.Heading, {
              variant: "heading-md/medium",
              className: u.countdown,
              children: "—",
            }),
            (0, l.jsxs)(n.Heading, {
              variant: "heading-md/medium",
              className: u.countdown,
              children: [d, ".", f, ".", m, ".", C],
            }),
          ],
        });
      }
    },
    89569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useProductDetailsLinkableRoute: function () {
            return C;
          },
          useProductDetailsDeepLinking: function () {
            return g;
          },
        }),
        a("781738"),
        a("222007"),
        a("424973");
      var l = a("884691"),
        s = a("803182"),
        r = a("446674"),
        n = a("812204"),
        o = a("685665"),
        i = a("216719"),
        u = a("54809"),
        c = a("49111");
      let d = "".concat("#").concat("itemSkuId", "="),
        f = new RegExp("^".concat(d, "(\\d+)$")),
        m = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
        C = e => {
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
        p = e => {
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
                  (0, u.openCollectiblesShopProductDetailsModal)({
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
        g = e => {
          let {
              categories: t,
              isFetchingCategories: a,
              isLayer: u,
              initialItemCardRef: d,
            } = e,
            m = l.useRef(null),
            C = (0, s.useLocation)(),
            g =
              C.pathname === c.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, o.default)(g);
          l.useEffect(() => {
            if (u) return;
            let e = f.exec(C.hash);
            if (null != e) {
              let t = e[1];
              m.current = t;
            }
          }, []);
          let E = (0, r.useStateFromStores)(
            [i.default],
            () => i.default.initialProductSkuId
          );
          l.useEffect(() => {
            if (a) return;
            let e = null;
            if (
              (u && null != E && (e = E),
              !u && null != m.current && (e = m.current),
              null != e)
            ) {
              let a = [],
                l = setTimeout(() => {
                  let l = p({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: h,
                    analyticsSource: g,
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
          }, [u, h, g, t, a, E, d]);
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
        o = a.n(n),
        i = a("506838"),
        u = a("956089"),
        c = a("782340"),
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
          return (0, r.jsx)(u.TextBadge, {
            disableColor: !0,
            text: e,
            className: o(d.badge, l),
          });
        }
        return (0, i.match)([a, s > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
              days: s,
            });
            return n(e);
          })
          .with(["modal", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
              days: s,
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
            return et;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("917351"),
        i = a("265586"),
        u = a("65597"),
        c = a("151426"),
        d = a("551042"),
        f = a("77078"),
        m = a("939488"),
        C = a("304580"),
        p = a("811425"),
        g = a("841098"),
        h = a("812204"),
        E = a("685665"),
        b = a("481120"),
        S = a("890503"),
        T = a("10641"),
        v = a("539938"),
        x = a("210721"),
        L = a("65324"),
        I = a("778588"),
        N = a("697218"),
        _ = a("764490"),
        y = a("29557"),
        k = a("599110"),
        O = a("719923"),
        A = a("439932"),
        P = a("21526"),
        R = a("216719"),
        j = a("702953"),
        F = a("235898"),
        D = a("296304"),
        B = a("334820"),
        M = a("344205"),
        w = a("89569"),
        H = a("419513"),
        U = a("434393"),
        W = a("571464"),
        G = a("931262"),
        V = a("695824"),
        z = a("518907"),
        Y = a("368560"),
        K = a("819852"),
        X = a("49111"),
        Z = a("994428"),
        q = a("894282"),
        $ = a("646718"),
        J = a("782340"),
        Q = a("922063");
      function ee(e) {
        var t, a;
        let {
            category: r,
            className: c,
            isPremiumUser: d,
            initialItemCardRef: m,
            isGiftEasterEggEnabled: C,
            setIsGiftEasterEggEnabled: g,
            showEasterEggToggle: h,
          } = e,
          E = s.useRef(10 + 70 * Math.random()),
          b = (0, B.usePurchasedProductsSort)(r.products),
          S = (0, o.groupBy)(b, "type"),
          T = (0, u.useStateFromStores)(
            [R.default],
            () => R.default.initialProductSkuId
          ),
          { tallerCardsEnabled: v } = (0,
          j.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          I = v ? z.default : U.default,
          N = s.useCallback(
            e => t => {
              e.skuId === T && (m.current = t.current);
            },
            [T, m]
          ),
          [_, y] = s.useState(!1),
          k = K.SkuIdToCountdownDisplayOptions[r.skuId],
          O = (0, p.useIsVisible)(e => {
            y(e && null != k);
          }, 0.35),
          A = (e, t) =>
            0 === e.length
              ? null
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(f.Text, {
                      className: n(Q.itemTypeTitle, {
                        [Q.itemTypeTitleForTallerCard]: v,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, l.jsx)("div", {
                      className: n(
                        Q.cardsContainer,
                        v ? Q.tallerShopCard : Q.regularShopCard,
                        c
                      ),
                      children: e.map(e =>
                        (0, l.jsx)(
                          I,
                          {
                            onMount: N(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: C,
                          },
                          e.skuId
                        )
                      ),
                    }),
                  ],
                });
        return (0, l.jsxs)("div", {
          className: Q.categoryWrapper,
          ref: O,
          children: [
            h &&
              (0, l.jsx)(f.Clickable, {
                className: n(Q.hiddenWumpus, { [Q.hiddenWumpusEnabled]: C }),
                onClick: () => g(!0),
                style: { left: "".concat(E.current, "%") },
                children: (0, l.jsx)(L.default, {
                  idleAnimationState: x.AnimationState.IDLE,
                  giftStyle: $.PremiumGiftStyles.BOX,
                }),
              }),
            (0, l.jsx)(H.default, {
              category: r,
              className: v ? Q.tallerShopCardBanner : void 0,
              hideLimitedTimeBadge: null != k,
            }),
            A(
              null !== (t = S[i.CollectiblesItemType.AVATAR_DECORATION]) &&
                void 0 !== t
                ? t
                : [],
              J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
            ),
            A(
              null !== (a = S[i.CollectiblesItemType.PROFILE_EFFECT]) &&
                void 0 !== a
                ? a
                : [],
              J.default.Messages
                .PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
            ),
            null != k &&
              null != r.unpublishedAt &&
              (0, l.jsx)(M.CollectiblesCountdown, {
                unpublishedAt: r.unpublishedAt,
                isVisible: _,
                displayOptions: k,
              }),
          ],
        });
      }
      var et = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: r } = (0,
          u.useStateFromStoresObject)([R.default], () =>
            R.default.getAnalytics()
          ),
          { analyticsLocations: o } = (0, E.default)([
            ...r,
            h.default.COLLECTIBLES_SHOP,
          ]),
          p = (0, u.useStateFromStores)([I.default], () =>
            I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)
          ),
          x = (0, d.useHasAnyModalOpen)(),
          { onClose: L } = (0, G.useCollectiblesShopRouting)(),
          B = (0, u.useStateFromStores)([N.default], () =>
            N.default.getCurrentUser()
          ),
          M = O.default.canUseCollectibles(B),
          H = (0, S.default)("shop_disable_cache"),
          U = (0, S.default)("shop_include_unpublished"),
          {
            categories: z,
            isFetchingCategories: K,
            error: et,
          } = (0, F.default)({ noCache: H, includeUnpublished: U }),
          ea = (0, D.usePurchasedCategoriesSort)(z),
          { tallerCardsEnabled: el } = (0,
          j.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          es = s.useRef(null),
          [er, en] = s.useState(!1);
        (0, w.useProductDetailsDeepLinking)({
          categories: z,
          isFetchingCategories: K,
          isLayer: p,
          initialItemCardRef: es,
        });
        let {
          sessionId: eo,
          scrollerRef: ei,
          scrollHandler: eu,
        } = (0, b.usePageScrollPosition)(
          X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        s.useEffect(() => {
          k.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: o,
            source: a,
            page_session_id: eo,
          }),
            !M &&
              k.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                location_stack: o,
              });
        }, [M, o, a, eo]),
          s.useEffect(() => {
            !(0, T.isDismissibleContentDismissed)(
              c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK
            ) &&
              (0, T.markDismissibleContentAsDismissed)(
                c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
                {
                  dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
                  forceTrack: !0,
                }
              );
          }, []),
          s.useEffect(() => {
            !t && (0, m.setHomeLink)(X.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          s.useEffect(
            () => () => {
              (0, P.setCollectiblesCategoryItemsViewed)({
                categories: [...z.values()],
                itemTypes: [
                  i.CollectiblesItemType.AVATAR_DECORATION,
                  i.CollectiblesItemType.PROFILE_EFFECT,
                ],
              });
            },
            [z]
          ),
          s.useEffect(() => {
            if (!t || p || x) return;
            let e = e => {
              e.key === q.KeyboardEventKey.Escape && L();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, p, x, L]);
        let ec = s.useCallback(() => {
            (0, P.fetchCollectiblesCategories)({
              noCache: H,
              includeUnpublished: U,
            });
          }, [H, U]),
          ed = (0, g.default)(),
          { containerRef: ef, returnRef: em } = (function () {
            let e = s.useRef(null),
              t = s.useRef(null);
            return (
              (0, f.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, l.jsxs)(E.AnalyticsLocationProvider, {
          value: o,
          children: [
            (0, l.jsxs)("div", {
              className: Q.shop,
              ref: t ? ef : void 0,
              children: [
                t
                  ? null
                  : (0, l.jsxs)(v.default, {
                      className: n((0, A.getThemeClass)(ed), Q.headerBar),
                      toolbar: !0,
                      children: [
                        (0, l.jsx)(y.default, { className: Q.logo }),
                        (0, l.jsx)(v.default.Title, {
                          className: Q.title,
                          children: J.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, l.jsx)("div", {
                    className: Q.closeWrapper,
                    children: (0, l.jsx)(C.default, {
                      className: Q.close,
                      closeAction: p ? P.closeCollectiblesShop : L,
                      keybind: "ESC",
                    }),
                  }),
                (0, l.jsx)(f.AdvancedScroller, {
                  className: n(Q.shopScroll, {
                    [Q.shopScrollBackgroundPrimary]: el,
                  }),
                  ref: ei,
                  onScroll: eu,
                  children: (0, l.jsx)("div", {
                    className: n(Q.pageWrapper, {
                      [Q.pageWrapperFullscreen]: t,
                      [Q.pageWrapperBackgroundPrimary]: el,
                    }),
                    children: (0, l.jsxs)("main", {
                      className: n(Q.page, {
                        [Q.pageWithShopBannerHidden]: !t,
                      }),
                      children: [
                        t
                          ? (0, l.jsx)(_.default, {
                              title: J.default.Messages.COLLECTIBLES_SHOP,
                              ref: t ? em : void 0,
                            })
                          : null,
                        K
                          ? (0, l.jsx)(V.default, {})
                          : et
                            ? (0, l.jsx)(W.default, { onRetry: ec })
                            : (0, l.jsx)("div", {
                                className: Q.categories,
                                children: ea
                                  .filter(
                                    e =>
                                      null == e.unpublishedAt ||
                                      e.unpublishedAt > new Date()
                                  )
                                  .filter(e => {
                                    let { products: t } = e;
                                    return t.length > 0;
                                  })
                                  .map(e =>
                                    (0, l.jsx)(
                                      ee,
                                      {
                                        isPremiumUser: M,
                                        category: e,
                                        initialItemCardRef: es,
                                        setIsGiftEasterEggEnabled: en,
                                        isGiftEasterEggEnabled: er,
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
            er && (0, l.jsx)(Y.default, {}),
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
        o = a("635058"),
        i = a("65597"),
        u = a("77078"),
        c = a("685665"),
        d = a("649844"),
        f = a("697218"),
        m = a("153769"),
        C = a("270227"),
        p = a("719923"),
        g = a("491232"),
        h = a("677257"),
        E = a("716120"),
        b = a("342676"),
        S = a("408381"),
        T = a("380171"),
        v = a("646718"),
        x = a("782340"),
        L = a("858422");
      let I = (0, g.getLogoSize)(96),
        N = e => {
          let { category: t } = e,
            { analyticsLocations: a } = (0, c.default)(),
            r = s.useRef(null),
            n = (0, i.useStateFromStores)([f.default], () =>
              f.default.getCurrentUser()
            );
          return p.default.canUseCollectibles(n)
            ? (0, l.jsx)(l.Fragment, { children: t.summary })
            : (0, l.jsx)(l.Fragment, {
                children:
                  x.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, l.jsx)(u.Clickable, {
                          innerRef: r,
                          className: L.getPremiumHook,
                          onClick: () => {
                            (0, d.default)({
                              subscriptionTier:
                                v.PremiumSubscriptionSKUs.TIER_2,
                              analyticsLocations: a,
                              returnRef: r,
                            });
                          },
                          tag: "span",
                          children: (0, l.jsx)(u.Text, {
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
        let { category: s, className: r, hideLimitedTimeBadge: i = !1 } = e,
          { backgroundColors: c } = (0, h.default)(s.styles),
          d = !!(null === (t = T.categoryBannerOverrides[s.skuId]) ||
          void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return (0, l.jsxs)(E.default, {
          asset: s.banner,
          className: n(L.shopBanner, r),
          style:
            null != c
              ? {
                  background: "".concat(
                    (0, S.getBackgroundGradient)(c),
                    " border-box border-box"
                  ),
                  outlineColor: c.border.toHslString(),
                }
              : void 0,
          children: [
            (0, l.jsxs)("div", {
              className: L.discordLogo,
              children: [
                (0, l.jsx)(m.default, { className: L.discordIcon }),
                (0, l.jsx)(C.default, { className: L.discordWordmark }),
              ],
            }),
            (0, l.jsx)("img", {
              className: L.categoryLogo,
              src: (0, g.getCollectiblesAssetURL)(s.logo, { size: I }),
              alt: s.name,
              style: {
                maxWidth:
                  null === (a = T.categoryBannerOverrides[s.skuId]) ||
                  void 0 === a
                    ? void 0
                    : a.logoMaxWidth,
              },
            }),
            (0, l.jsx)(u.Text, {
              className: n(L.summary, { [L.blackSummary]: d }),
              variant: "text-md/normal",
              children:
                s.skuId === o.CollectiblesCategorySkuId.DISXCORE
                  ? (0, l.jsx)(N, { category: s })
                  : s.summary,
            }),
            !i &&
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
            return z;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("265586"),
        i = a("65597"),
        u = a("77078"),
        c = a("54239"),
        d = a("252744"),
        f = a("812204"),
        m = a("685665"),
        C = a("606292"),
        p = a("688318"),
        g = a("946964"),
        h = a("635956"),
        E = a("38766"),
        b = a("601095"),
        S = a("493390"),
        T = a("697218"),
        v = a("944441"),
        x = a("462579"),
        L = a("216422"),
        I = a("956089"),
        N = a("50885"),
        _ = a("21526"),
        y = a("775416"),
        k = a("491232"),
        O = a("677257"),
        A = a("342676"),
        P = a("450492"),
        R = a("920580"),
        j = a("54809"),
        F = a("408381"),
        D = a("264579"),
        B = a("646718"),
        M = a("782340"),
        w = a("682123");
      let H = N.default.getEnableHardwareAcceleration()
          ? u.AnimatedAvatar
          : u.Avatar,
        U = u.AvatarSizes.SIZE_120,
        W = (0, C.getDecorationSizeForAvatarSize)(U),
        G = e => {
          let { children: t, onClick: a, ...s } = e;
          return (0, l.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...s,
            children: t,
          });
        },
        V = e => {
          let { className: t, ...a } = e;
          return (0, l.jsx)(u.Button, {
            color: u.ButtonColors.CUSTOM,
            look: u.Button.Looks.FILLED,
            size: u.ButtonSizes.ICON,
            className: n(w.previewButton, t),
            innerClassName: w.previewButtonInner,
            "aria-label": M.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(x.default, { width: 24, height: 24 }),
          });
        };
      var z = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: x = !1,
            isGiftEasterEggEnabled: N,
          } = e,
          { analyticsLocations: z } = (0, m.default)(
            f.default.COLLECTIBLES_SHOP_CARD
          ),
          Y = s.useRef(null),
          K = (0, d.default)(Y),
          [X, Z] = s.useState(!1),
          q = K || X,
          $ = (0, i.useStateFromStores)([T.default], () =>
            T.default.getCurrentUser()
          ),
          [J] = t.items,
          {
            avatarDecorationSrc: Q,
            eventHandlers: ee,
            avatarPlaceholderSrc: et,
          } = (0, p.default)({
            user: $,
            avatarDecorationOverride:
              (null == J ? void 0 : J.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
                ? J
                : void 0,
            size: W,
            animateOnHover: !q,
          }),
          { buttonColors: ea, backgroundColors: el } = (0, O.default)(t.styles),
          es = (0, k.getFormattedPriceForCollectiblesProduct)(t, x),
          er = (0, k.isPremiumCollectiblesProduct)(t),
          en = (0, k.isFreeCollectiblesProduct)(t),
          [eo, ei, eu] = (0, i.useStateFromStoresArray)([y.default], () => [
            y.default.getPurchase(t.skuId),
            y.default.isClaiming === t.skuId,
            null != y.default.isClaiming && y.default.isClaiming !== t.skuId,
          ]),
          ec = s.useRef(null);
        s.useEffect(() => {
          let { current: e } = Y;
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
              (0, C.openAvatarDecorationModal)({
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
          em = e => l => {
            (ec.current = l.currentTarget),
              (0, j.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: z,
                analyticsSource: e,
                returnRef: ec,
              });
          },
          eC = em(f.default.COLLECTIBLES_SHOP_CARD),
          ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eg = () =>
            (0, l.jsx)("div", {
              className: w.hoverUpsellContainer,
              children: (0, l.jsx)(h.default, {
                fullWidth: !0,
                className: w.premiumSubscribeButton,
                disabled: eu,
                onClick: e => e.stopPropagation(),
                buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: B.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == r || r(Y);
        }, [r]);
        let eh = () =>
            null != eo
              ? (0, l.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: w.priceTag,
                  children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : er
                ? (0, l.jsx)(u.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: w.priceTag,
                    children:
                      M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(R.default, {
                    product: t,
                    className: w.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eE = () =>
            er
              ? null
              : en
                ? (0, l.jsx)(V, {
                    style:
                      null != ea
                        ? {
                            background: ea.secondary.toHslString(),
                            color: ea.text.toHslString(),
                          }
                        : void 0,
                    className: w.defaultPreviewButtonColor,
                    onClick: ep,
                  })
                : (0, l.jsx)(P.default, {
                    product: t,
                    returnRef: Y,
                    isGiftEasterEggEnabled: N,
                    tooltipDelay: 250,
                  }),
          eb = () => {
            if (er && !x && !en) return eg();
            let e =
                null != ea
                  ? {
                      background: (0, F.getBackgroundGradient)(ea, 90),
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
                        (0, D.default)({ product: t, analyticsLocations: z });
                    },
                  }
                : {
                    onClick: () =>
                      (0, g.default)({
                        skuId: t.skuId,
                        analyticsLocations: z,
                        returnRef: Y,
                      }),
                  };
            return (0, l.jsxs)("div", {
              className: w.buttonsContainer,
              children: [
                null == eo
                  ? (0, l.jsx)(G, {
                      style: e,
                      disabled: eu,
                      className: w.purchaseButton,
                      ...a,
                      children: er
                        ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : M.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: es,
                          }),
                    })
                  : (0, l.jsx)(G, {
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
            null != el
              ? {
                  background: "".concat(
                    (0, F.getBackgroundGradient)(el),
                    " border-box border-box"
                  ),
                  borderColor: el.border.toHslString(),
                  boxShadow: q
                    ? "0 0 25px 1px ".concat(el.primary.toHslString())
                    : "none",
                }
              : void 0;
        return (0, l.jsx)(u.FocusRing, {
          children: (0, l.jsxs)(u.Clickable, {
            innerRef: Y,
            className: w.shopCard,
            onBlur: () => Z(!1),
            onClick: eC,
            style: eS,
            id: "shop-item-".concat(t.skuId),
            children: [
              er &&
                (0, l.jsx)(u.Tooltip, {
                  tooltipContentClassName: w.premiumWheelTooltipContent,
                  color: u.Tooltip.Colors.PRIMARY,
                  text: M.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(I.TextBadge, {
                      ...e,
                      className: w.premiumWheelBadge,
                      text: (0, l.jsx)(L.default, {
                        className: w.premiumWheel,
                      }),
                    }),
                }),
              (null == J ? void 0 : J.type) ===
                o.CollectiblesItemType.PROFILE_EFFECT &&
                (0, l.jsx)("div", {
                  className: w.profileEffectShopPreview,
                  children: (0, l.jsx)(b.default, {
                    isHovering: q,
                    profileEffectId: J.id,
                    isPurchased: null != eo,
                  }),
                }),
              (null == J ? void 0 : J.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)(H, {
                  ...ee,
                  avatarDecoration: Q,
                  src: et,
                  className: n(w.avatar, { [w.avatarPurchased]: null != eo }),
                  size: U,
                  "aria-label": M.default.Messages.USER_SETTINGS_AVATAR,
                }),
              null != eo
                ? (0, l.jsx)("div", {
                    className:
                      (null == J ? void 0 : J.type) ===
                      o.CollectiblesItemType.PROFILE_EFFECT
                        ? w.profileEffectCheckmarkWrapper
                        : w.checkmarkWrapper,
                    children: (0, l.jsx)(v.default, {
                      width: 38,
                      height: 38,
                      className: w.checkmark,
                    }),
                  })
                : null,
              (0, l.jsxs)("div", {
                className: n(w.cardText, {
                  [w.cardTextProfileEffect]:
                    (null == J ? void 0 : J.type) ===
                    o.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, l.jsx)(u.Text, {
                    color: "always-white",
                    variant: "text-lg/bold",
                    className: w.productName,
                    children: t.name,
                  }),
                  (0, l.jsxs)("div", {
                    className: w.detailsWrapper,
                    children: [
                      (0, l.jsxs)("div", {
                        className: w.innerBlur,
                        children: [
                          (0, l.jsx)(u.Text, {
                            color: "always-white",
                            className: w.description,
                            variant: "text-md/normal",
                            children: t.summary,
                          }),
                          eh(),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: w.innerHover,
                        children: eb(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(A.default, {
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
        [l.CollectiblesCategorySkuId.SHY]: {
          assetUrlOverride: a("776204"),
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
        o = a("782340"),
        i = a("706055"),
        u = a("321220"),
        c = a("684386"),
        d = e => {
          let { onRetry: t } = e,
            a = (0, n.default)();
          return (0, l.jsxs)("div", {
            className: i.wrapper,
            children: [
              (0, l.jsx)("img", {
                className: i.loadIssueImg,
                src: (0, s.isThemeDark)(a) ? u : c,
                alt: "",
              }),
              (0, l.jsx)(r.Heading, {
                className: i.heading1,
                variant: "heading-xl/semibold",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
              }),
              (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
              }),
              (0, l.jsx)(r.Button, {
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
            return g;
          },
        });
      var l = a("37983"),
        s = a("884691"),
        r = a("77078"),
        n = a("252744"),
        o = a("685665"),
        i = a("108486"),
        u = a("946964"),
        c = a("978679"),
        d = a("677257"),
        f = a("843455"),
        m = a("782340"),
        C = a("691164");
      let p = {
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
      var g = e => {
        let {
            product: t,
            returnRef: a,
            onSuccess: g,
            tooltipDelay: h,
            isGiftEasterEggEnabled: E,
            disableCustomColor: b = !1,
          } = e,
          { analyticsLocations: S } = (0, o.default)(),
          T = s.useRef(null),
          v = (0, n.default)(T),
          { buttonColors: x } = (0, d.default)(t.styles),
          L =
            null == x || b
              ? void 0
              : {
                  background: x.secondary.toHslString(),
                  color: x.text.toHslString(),
                },
          I =
            b || (null == x ? void 0 : x.text.isDark())
              ? f.ThemeTypes.DARK
              : f.ThemeTypes.LIGHT;
        return (0, l.jsx)(r.Tooltip, {
          text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, l.jsx)(r.Button, {
              ...e,
              buttonRef: T,
              style: L,
              className: C.giftButton,
              color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
              look: r.Button.Looks.FILLED,
              size: r.ButtonSizes.ICON,
              innerClassName: C.giftButtonInner,
              "aria-label": m.default.Messages.PREMIUM_GIFTING_BUTTON,
              onClick: e => {
                e.stopPropagation(),
                  (0, u.default)({
                    skuId: t.skuId,
                    isGift: !0,
                    analyticsLocations: S,
                    returnRef: a,
                    onClose:
                      null != g
                        ? e => {
                            e && g();
                          }
                        : void 0,
                  });
              },
              children: E
                ? (0, l.jsx)(i.SeasonalGiftIcon, {
                    hovered: v,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: p,
                  })
                : (0, l.jsx)(c.default, { width: 24, height: 24 }),
            }),
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
        o = a("755854"),
        i = a("77078"),
        u = a("161778"),
        c = a("697218"),
        d = a("216422"),
        f = a("719923"),
        m = a("491232"),
        C = a("791309"),
        p = a("49111"),
        g = a("782340"),
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
          T = (0, n.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          v = (0, n.useStateFromStores)([u.default], () =>
            (0, o.isThemeDark)(u.default.theme)
          ),
          x = (0, m.extractPriceByPurchaseTypes)(
            t,
            p.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
        if (null == x) return null;
        if (x.amount <= 0)
          return (0, l.jsx)("div", {
            className: r(h.priceTagsContainer, a),
            children: (0, l.jsx)(C.default, {
              alwaysWhiteText: b,
              price: x,
              className: s,
            }),
          });
        let L = (0, m.extractPriceByPurchaseTypes)(
            t,
            p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
          ),
          I = !f.default.canUseCollectibles(T);
        return (0, l.jsxs)("div", {
          className: r(h.priceTagsContainer, a),
          children: [
            (0, l.jsx)(C.default, {
              alwaysWhiteText: b,
              price: x,
              className: r([s, I ? void 0 : h.strikedPrice]),
            }),
            null != L &&
              (0, l.jsx)(C.default, {
                price: L,
                alwaysWhiteText: b,
                renderPrice: I
                  ? e =>
                      g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: r([s, I ? h.fullPrice : void 0]),
                variant: I ? "text-xs/semibold" : void 0,
                icon: (0, l.jsx)(i.Tooltip, {
                  text: g.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: E,
                  children: e => {
                    let { ...t } = e;
                    return (0, l.jsx)(d.default, {
                      ...t,
                      className: r(h.premiumIcon, { [h.fullPrice]: I }),
                      color: null != S ? S : b || v ? "white" : "black",
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
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("77078"),
        o = a("153160"),
        i = a("468437"),
        u = e => {
          var t;
          let {
              price: { amount: a, currency: s },
              renderPrice: u,
              icon: c,
              className: d,
              variant: f = "heading-md/semibold",
              alwaysWhiteText: m = !0,
            } = e,
            C = (0, o.formatPrice)(a, s);
          return (0, l.jsxs)(n.Heading, {
            variant: f,
            color: m ? "always-white" : "none",
            className: r(i.heading, d),
            children: [
              c,
              null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C,
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
      var l = a("37983");
      a("884691");
      var s = a("77078");
      let r = "collectibles shop product details modal",
        n = e => {
          let {
            product: t,
            category: n,
            analyticsSource: o,
            analyticsLocations: i,
            returnRef: u,
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
                  analyticsSource: o,
                  analyticsLocations: i,
                  returnRef: u,
                });
            },
            { modalKey: r }
          );
        },
        o = () => {
          (0, s.closeModal)(r);
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
      var l,
        s,
        r = a("884691"),
        n = a("90915"),
        o = a("54239"),
        i = a("393414"),
        u = a("49111");
      function c() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = r.useMemo(() => new URLSearchParams(e), [e]),
          l = a.get("source"),
          s = null != l ? parseInt(l, 10) : null,
          c = r.useCallback(() => {
            if (0 === s) {
              (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
              return;
            }
            if ((0, i.currentRouteHasBackNavigation)()) {
              (0, i.back)();
              return;
            }
            (0, i.transitionTo)(u.Routes.APP);
          }, [s]);
        return { onClose: c, source: s, ...t };
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
        o = a("858422"),
        i = a("682123"),
        u = a("183891");
      let c = () => 4 * Math.random() + 8,
        d = [c(), c(), c()];
      var f = () =>
        (0, l.jsx)(l.Fragment, {
          children: d.map(e =>
            (0, l.jsxs)(
              "div",
              {
                className: n.cardsContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: r(u.skeleton, o.shopBanner),
                    children: (0, l.jsx)("div", { className: u.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: r(u.skeleton, i.shopCard),
                        children: (0, l.jsxs)("div", {
                          className: u.cardBody,
                          children: [
                            (0, l.jsx)("div", { className: u.cardAvatar }),
                            (0, l.jsx)("div", { className: u.cardTitle }),
                            (0, l.jsx)("div", { className: u.cardDescription }),
                            (0, l.jsx)("div", { className: u.cardSummary }),
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
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
        o = a("506838"),
        i = a("265586"),
        u = a("65597"),
        c = a("669491"),
        d = a("755854"),
        f = a("77078"),
        m = a("54239"),
        C = a("252744"),
        p = a("812204"),
        g = a("685665"),
        h = a("606292"),
        E = a("688318"),
        b = a("946964"),
        S = a("635956"),
        T = a("38766"),
        v = a("601095"),
        x = a("493390"),
        L = a("161778"),
        I = a("697218"),
        N = a("944441"),
        _ = a("462579"),
        y = a("216422"),
        k = a("956089"),
        O = a("50885"),
        A = a("21526"),
        P = a("846893"),
        R = a("775416"),
        j = a("491232"),
        F = a("990139"),
        D = a("677257"),
        B = a("342676"),
        M = a("450492"),
        w = a("920580"),
        H = a("54809"),
        U = a("264579"),
        W = a("646718"),
        G = a("782340"),
        V = a("600545");
      let z = O.default.getEnableHardwareAcceleration()
          ? f.AnimatedAvatar
          : f.Avatar,
        Y = f.AvatarSizes.SIZE_152,
        K = (0, h.getDecorationSizeForAvatarSize)(Y),
        X = e => {
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
        Z = e => {
          let { className: t, ...a } = e;
          return (0, l.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: n(V.previewButton, t),
            innerClassName: V.previewButtonInner,
            "aria-label": G.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(_.default, { width: 24, height: 24 }),
          });
        };
      var q = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: _ = !1,
            isGiftEasterEggEnabled: O,
          } = e,
          { analyticsLocations: q } = (0, g.default)(
            p.default.COLLECTIBLES_SHOP_CARD
          ),
          $ = s.useRef(null),
          J = (0, C.default)($),
          [Q, ee] = s.useState(!1),
          et = J || Q,
          ea = (0, u.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          ),
          [el] = t.items,
          {
            avatarDecorationSrc: es,
            eventHandlers: er,
            avatarPlaceholderSrc: en,
          } = (0, E.default)({
            user: ea,
            avatarDecorationOverride:
              (null == el ? void 0 : el.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? el
                : void 0,
            size: K,
            animateOnHover: !et,
          }),
          { backgroundColors: eo } = (0, D.default)(t.styles),
          ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, _),
          eu = (0, j.isPremiumCollectiblesProduct)(t),
          ec = (0, j.isFreeCollectiblesProduct)(t),
          [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [
            R.default.getPurchase(t.skuId),
            R.default.isClaiming === t.skuId,
            null != R.default.isClaiming && R.default.isClaiming !== t.skuId,
          ]),
          eC = (0, u.useStateFromStores)([L.default], () =>
            (0, d.isThemeDark)(L.default.theme)
          ),
          ep = (0, u.useStateFromStores)([P.default], () =>
            P.default.getIsProductNew(el.skuId)
          ),
          { hoverVariant: eg } = (0, F.useShopCardHoverAnimationExperiment)(
            "CollectiblesShopTallCard"
          );
        s.useEffect(() => {
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
        let eh = (0, T.default)({ analyticsLocations: q }),
          eE = s.useRef(null),
          eb = () => {
            if (
              ((0, m.popLayer)(),
              eh(),
              (null == el ? void 0 : el.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, h.openAvatarDecorationModal)({
                initialSelectedDecoration: el,
                analyticsLocations: q,
              });
              return;
            }
            (null == el ? void 0 : el.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, x.openProfileEffectModal)({
                initialSelectedEffectId: el.id,
                analyticsLocations: q,
              });
          },
          eS = e => l => {
            (eE.current = l.currentTarget),
              (0, H.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: q,
                analyticsSource: e,
                returnRef: eE,
              });
          },
          eT = eS(p.default.COLLECTIBLES_SHOP_CARD),
          ev = eS(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          ex = () =>
            (0, l.jsx)("div", {
              className: V.hoverUpsellContainer,
              children: (0, l.jsx)(S.default, {
                fullWidth: !0,
                className: V.premiumSubscribeButton,
                disabled: em,
                onClick: e => e.stopPropagation(),
                buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == r || r($);
        }, [r]);
        let eL = () =>
            null != ed
              ? (0, l.jsx)(f.Text, {
                  variant: "text-md/semibold",
                  className: V.priceTag,
                  children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : eu
                ? (0, l.jsx)(f.Text, {
                    variant: "text-md/semibold",
                    className: V.priceTag,
                    children:
                      G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(w.default, {
                    alwaysWhiteText: !1,
                    product: t,
                    className: V.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          eI = () =>
            eu
              ? null
              : ec
                ? (0, l.jsx)(Z, { onClick: ev })
                : (0, l.jsx)(M.default, {
                    product: t,
                    returnRef: $,
                    isGiftEasterEggEnabled: O,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          eN = () => {
            if (eu && !_ && !ec) return ex();
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
            return (0, l.jsxs)("div", {
              className: V.buttonsContainer,
              children: [
                null == ed
                  ? (0, l.jsx)(X, {
                      disabled: em,
                      className: V.purchaseButton,
                      ...e,
                      children: eu
                        ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : G.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: ei,
                          }),
                    })
                  : (0, l.jsx)(X, {
                      disabled: em,
                      onClick: eb,
                      children: G.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                eI(),
              ],
            });
          },
          e_ = eC
            ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, l.jsx)(f.FocusRing, {
          children: (0, l.jsxs)(f.Clickable, {
            innerRef: $,
            className: n(
              V.shopCard,
              (0, o.match)(eg)
                .with(
                  F.ShopCardHoverAnimationVariant.CONTROL,
                  () => V.shopCardDefaultAnimation
                )
                .with(
                  F.ShopCardHoverAnimationVariant.TRANSFORMATION,
                  () => V.shopCardTransformationAnimation
                )
                .otherwise(() => void 0)
            ),
            onBlur: () => ee(!1),
            onClick: eT,
            style:
              null != eo
                ? {
                    backgroundColor: eC
                      ? "var(--background-floating)"
                      : "var(--background-secondary)",
                    borderColor: "var(--chat-border)",
                    boxShadow: et ? e_ : "none",
                  }
                : void 0,
            id: "shop-item-".concat(t.skuId),
            children: [
              eu &&
                (0, l.jsx)(f.Tooltip, {
                  tooltipContentClassName: V.premiumWheelTooltipContent,
                  color: f.Tooltip.Colors.PRIMARY,
                  text: G.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(k.TextBadge, {
                      ...e,
                      className: V.premiumWheelBadge,
                      text: (0, l.jsx)(y.default, {
                        className: V.premiumWheel,
                      }),
                    }),
                }),
              (null == el ? void 0 : el.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, l.jsx)("div", {
                  className: V.profileEffectShopPreview,
                  children: (0, l.jsx)(v.default, {
                    isHovering: et,
                    profileEffectId: el.id,
                    isPurchased: null != ed,
                    removeSetHeight: !0,
                  }),
                }),
              (null == el ? void 0 : el.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)("div", {
                  className: V.avatarContainer,
                  children: (0, l.jsx)(z, {
                    ...er,
                    avatarDecoration: es,
                    src: en,
                    className: n(V.avatar, { [V.avatarPurchased]: null != ed }),
                    size: Y,
                    "aria-label": G.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != ed
                ? (0, l.jsx)("div", {
                    className: V.checkmarkWrapper,
                    children: (0, l.jsx)(N.default, {
                      width: 38,
                      height: 38,
                      className: V.checkmark,
                    }),
                  })
                : null,
              (0, l.jsxs)("div", {
                className: n(V.cardText, {
                  [V.cardTextBlur]:
                    (null == el ? void 0 : el.type) ===
                    i.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, l.jsx)("div", {
                    className: n(
                      V.cardBackground,
                      eC ? V.darkCardBackground : V.lightCardBackground,
                      (null == el ? void 0 : el.type) ===
                        i.CollectiblesItemType.PROFILE_EFFECT
                        ? V.cardLowOpacity
                        : null
                    ),
                  }),
                  (0, l.jsx)(f.Text, {
                    variant: "text-lg/bold",
                    className: V.productName,
                    children: t.name,
                  }),
                  (0, l.jsx)(f.Text, {
                    className: n(V.description, V.innerMask),
                    variant: "text-md/normal",
                    lineClamp: 3,
                    children: t.summary,
                  }),
                  (0, l.jsxs)("div", {
                    className: V.detailsWrapper,
                    children: [
                      (0, l.jsx)("div", {
                        className: V.innerBlur,
                        children: eL(),
                      }),
                      (0, l.jsx)("div", {
                        className: V.innerHover,
                        children: eN(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(B.default, {
                category: a,
                className: V.limitedTimeBadge,
                display: "card",
              }),
              ep &&
                (0, l.jsx)(k.TextBadge, {
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
      var l = a("635058"),
        s = a("547630");
      let r = 1060,
        n = e => e * (0, s.default)(),
        o = function (e) {
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
        i = [a("424869"), a("714293")],
        u = {
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
            onComplete: C,
            analyticsLocations: p,
            analyticsObject: g,
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
                analyticsLocations: p,
                onClose: e => {
                  s(), null == m || m(e);
                },
                onComplete: () => {
                  (h = !0), null == C || C();
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
                  location: g,
                  is_gift: d,
                  location_stack: p,
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
      var l = a("37983"),
        s = a("884691"),
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
            [C, p] = s.useState(!0);
          return (s.useEffect(() => {
            if (!0 !== r) p(!1);
            else {
              let e = setTimeout(() => {
                p(!1);
              }, m);
              return () => {
                clearTimeout(e);
              };
            }
          }, [m, r]),
          null != t)
            ? (0, l.jsxs)("div", {
                className: n(u.previewContainer, {
                  [u.previewContainerAnimation]: r,
                  [u.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, l.jsx)("img", {
                    src: c,
                    alt: " ",
                    className: r ? u.previewForCollected : u.preview,
                    "aria-hidden": !0,
                  }),
                  !C &&
                    (0, l.jsx)("div", {
                      className: d ? u.purchasedEffect : void 0,
                      children: (0, l.jsx)(i.default, {
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
            return o;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("469563"),
        r = a("237020"),
        n = a("75196"),
        o = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: s = "currentColor",
              foreground: r,
              ...o
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, n.default)(o),
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
//# sourceMappingURL=5bc449973a7f2250de11.js.map
