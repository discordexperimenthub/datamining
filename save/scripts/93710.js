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
    641207: function (e, t, a) {
      "use strict";
      e.exports = a.p + "46893b6dd8389dfe68f9.png";
    },
    369068: function (e, t, a) {
      "use strict";
      e.exports = a.p + "4b8e396f1471dfc0a44c.png";
    },
    882849: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ea98b84bd92d04dbcaa2.png";
    },
    197443: function (e, t, a) {
      "use strict";
      e.exports = a.p + "229875768190dee1e0b1.png";
    },
    42913: function (e, t, a) {
      "use strict";
      e.exports = a.p + "91fbdc5866ec3d603123.png";
    },
    61346: function (e, t, a) {
      "use strict";
      e.exports = a.p + "47a02590907f4fae75e2.png";
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
        r = a("748820"),
        l = a("560103"),
        n = a("599110");
      let o = (e, t, a, s) => {
          let {
            scrollTop: r = 0,
            scrollOffset: l = 0,
            scrollHeight: o = 0,
            scrollWidth: i = 0,
          } = s;
          if (o > 0) {
            let s = (r + l) / o;
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
            n = s.useRef((0, r.v4)()),
            i = (0, l.useThrottledFunction)(o, 5e3, [], { trailing: !0 }),
            u = s.useCallback(() => {
              var s;
              let r =
                null === (s = a.current) || void 0 === s
                  ? void 0
                  : s.getScrollerNode();
              null != r &&
                i(e, n.current, t, {
                  scrollTop: r.scrollTop,
                  scrollOffset: r.offsetHeight,
                  scrollHeight: r.scrollHeight,
                  scrollWidth: r.scrollWidth,
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
            return l;
          },
        });
      var s = a("862205");
      a("773336");
      let r = (0, s.createExperiment)({
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
        return r.useExperiment({ location: t });
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
        r = a("913144");
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
          () => l(u, o),
          () => l(c, i),
          e => ({ ...e, "1217626219651006495": i }),
        ]);
      var f = new d(r.default, {
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
      var s = a("862205");
      let r = (0, s.createExperiment)({
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
          return r.useExperiment({ location: t });
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
        r = a.n(s),
        l = a("65597"),
        n = a("206230"),
        o = a("388491");
      let i = (e, t) => {
          let a = e.toRgb(),
            s = t.toRgb(),
            [l, n, i] = (0, o.getValueInColorGradientByPercentage)(
              [a.r, a.g, a.b],
              [s.r, s.g, s.b],
              50
            );
          return r({ r: l, g: n, b: i });
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
          let { h: a, s, l } = e.toHsl();
          return r({ h: a, s: s * t, l });
        };
      var f = e => t => {
        let a = (0, l.useStateFromStores)(
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
    990139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ShopCardHoverAnimationVariant: function () {
            return r;
          },
          useShopCardHoverAnimationExperiment: function () {
            return o;
          },
        });
      var s,
        r,
        l = a("862205");
      ((s = r || (r = {}))[(s.CONTROL = 0)] = "CONTROL"),
        (s[(s.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (s[(s.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
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
        r = a("65597"),
        l = a("875212"),
        n = a("21526"),
        o = a("853987"),
        i = a("12480"),
        u = a("775416");
      function c(e) {
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
            isFetching: c,
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
            let [a, i, u, c] = (0, r.useStateFromStoresArray)(
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
            fetchError: C,
            claimError: p,
            isFetching: g,
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
            let [t, a, o, c, d] = (0, r.useStateFromStoresArray)(
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
      var s = a("884691"),
        r = a("65597"),
        l = a("775416");
      let n = e => {
        let t = (0, r.useStateFromStores)(
            [l.default],
            () => l.default.purchases
          ),
          a = (0, s.useMemo)(() => {
            let a = [],
              s = [];
            for (let r of e.values()) {
              let e = r.products.every(e => !!t.get(e.skuId));
              e ? a.push(r) : s.push(r);
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
        r = a("65597"),
        l = a("775416");
      let n = e => {
        let t = (0, r.useStateFromStores)(
            [l.default],
            () => l.default.purchases
          ),
          a = (0, s.useMemo)(() => {
            let a = [],
              s = [];
            for (let r of e.values())
              void 0 !== t.get(r.skuId) ? a.push(r) : s.push(r);
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
        r = a.n(s),
        l = a("669491"),
        n = a("546483");
      let o = r(
          l.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        i = r(
          l.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
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
      var r = a("414456"),
        l = a.n(r),
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
              size: r = d.MAX_CONTENT_WIDTH,
              addGradient: m = !0,
              className: C,
              style: p,
              children: g,
            } = e,
            h = (0, n.useStateFromStores)(
              [i.default],
              () => i.default.saturation
            );
          return (0, s.jsx)("div", {
            className: l(f.banner, C),
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
                          size: r,
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
                      size: r,
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
      var s = a("37983");
      a("884691");
      var r = a("146606"),
        l = a("65597"),
        n = a("77078"),
        o = a("174727"),
        i = a("206230"),
        u = a("556538");
      function c(e) {
        let { unpublishedAt: t, isVisible: a, displayOptions: c } = e,
          { days: d, hours: f, minutes: m, seconds: C } = (0, o.default)(t),
          p = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion
          ),
          g = (0, r.useSpring)({
            transform: "translateX(-50%) ".concat(
              a ? "translateY(-100%)" : "translateY(0%)"
            ),
            opacity: a ? 1 : 0,
            config: { tension: 120, friction: 12 },
            immediate: p,
          });
        return (0, s.jsxs)(r.animated.div, {
          className: u.countDownWrapper,
          style: {
            backgroundColor: c.backgroundColor,
            boxShadow: c.boxShadow,
            color: c.labelColor,
            ...g,
          },
          children: [
            null != c.iconSrc &&
              (0, s.jsx)("img", { src: c.iconSrc, alt: "shy" }),
            (0, s.jsx)(n.Heading, {
              variant: "heading-md/medium",
              className: u.countdownLabel,
              children: c.label(),
            }),
            (0, s.jsx)(n.Heading, {
              variant: "heading-md/medium",
              className: u.countdown,
              children: "—",
            }),
            (0, s.jsxs)(n.Heading, {
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
      var s = a("884691"),
        r = a("803182"),
        l = a("446674"),
        n = a("812204"),
        o = a("685665"),
        i = a("216719"),
        u = a("54809"),
        c = a("49111");
      let d = "".concat("#").concat("itemSkuId", "="),
        f = new RegExp("^".concat(d, "(\\d+)$")),
        m = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
        C = e => {
          let t = (0, r.useLocation)();
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
        p = e => {
          let {
            categories: t,
            productSkuId: a,
            analyticsLocations: s,
            analyticsSource: r,
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
                  (0, u.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: e,
                    analyticsSource: r,
                    analyticsLocations: s,
                    returnRef: l,
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
            m = s.useRef(null),
            C = (0, r.useLocation)(),
            g =
              C.pathname === c.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, o.default)(g);
          s.useEffect(() => {
            if (u) return;
            let e = f.exec(C.hash);
            if (null != e) {
              let t = e[1];
              m.current = t;
            }
          }, []);
          let E = (0, l.useStateFromStores)(
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
                  let s = p({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: h,
                    analyticsSource: g,
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
      var s,
        r,
        l = a("37983");
      a("884691");
      var n = a("414456"),
        o = a.n(n),
        i = a("506838"),
        u = a("956089"),
        c = a("782340"),
        d = a("53248");
      ((r = s || (s = {})).BANNER = "banner"),
        (r.MODAL = "modal"),
        (r.CARD = "card");
      var f = e => {
        let { category: t, display: a, className: s } = e;
        if (null == t.unpublishedAt) return null;
        let r = (function (e) {
          let t = new Date(),
            a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
            s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
          return Math.floor((s - a) / 864e5);
        })(t.unpublishedAt);
        function n(e) {
          return (0, l.jsx)(u.TextBadge, {
            disableColor: !0,
            text: e,
            className: o(d.badge, s),
          });
        }
        return (0, i.match)([a, r > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
              days: r,
            });
            return n(e);
          })
          .with(["modal", !0], () => {
            let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
              days: r,
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
      var s = a("37983"),
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
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
        x = a("10641"),
        v = a("539938"),
        T = a("210721"),
        L = a("65324"),
        I = a("778588"),
        y = a("697218"),
        N = a("764490"),
        _ = a("29557"),
        k = a("599110"),
        O = a("719923"),
        A = a("439932"),
        P = a("21526"),
        R = a("216719"),
        j = a("702953"),
        F = a("235898"),
        B = a("296304"),
        D = a("334820"),
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
            category: l,
            className: c,
            isPremiumUser: d,
            initialItemCardRef: m,
            isGiftEasterEggEnabled: C,
            setIsGiftEasterEggEnabled: g,
            showEasterEggToggle: h,
          } = e,
          E = r.useRef(10 + 70 * Math.random()),
          b = (0, D.usePurchasedProductsSort)(l.products),
          S = (0, o.groupBy)(b, "type"),
          x = (0, u.useStateFromStores)(
            [R.default],
            () => R.default.initialProductSkuId
          ),
          { tallerCardsEnabled: v } = (0,
          j.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          I = v ? z.default : U.default,
          y = r.useCallback(
            e => t => {
              e.skuId === x && (m.current = t.current);
            },
            [x, m]
          ),
          [N, _] = r.useState(!1),
          k = K.SkuIdToCountdownDisplayOptions[l.skuId],
          O = (0, p.useIsVisible)(e => {
            _(e && null != k);
          }, 0.35),
          A = (e, t) =>
            0 === e.length
              ? null
              : (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(f.Text, {
                      className: n(Q.itemTypeTitle, {
                        [Q.itemTypeTitleForTallerCard]: v,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, s.jsx)("div", {
                      className: n(
                        Q.cardsContainer,
                        v ? Q.tallerShopCard : Q.regularShopCard,
                        c
                      ),
                      children: e.map(e =>
                        (0, s.jsx)(
                          I,
                          {
                            onMount: y(e),
                            isPremiumUser: d,
                            category: l,
                            product: e,
                            isGiftEasterEggEnabled: C,
                          },
                          e.skuId
                        )
                      ),
                    }),
                  ],
                });
        return (0, s.jsxs)("div", {
          className: Q.categoryWrapper,
          ref: O,
          children: [
            h &&
              (0, s.jsx)(f.Clickable, {
                className: n(Q.hiddenWumpus, { [Q.hiddenWumpusEnabled]: C }),
                onClick: () => g(!0),
                style: { left: "".concat(E.current, "%") },
                children: (0, s.jsx)(L.default, {
                  idleAnimationState: T.AnimationState.IDLE,
                  giftStyle: $.PremiumGiftStyles.BOX,
                }),
              }),
            (0, s.jsx)(H.default, {
              category: l,
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
              null != l.unpublishedAt &&
              (0, s.jsx)(M.CollectiblesCountdown, {
                unpublishedAt: l.unpublishedAt,
                isVisible: N,
                displayOptions: k,
              }),
          ],
        });
      }
      var et = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: l } = (0,
          u.useStateFromStoresObject)([R.default], () =>
            R.default.getAnalytics()
          ),
          { analyticsLocations: o } = (0, E.default)([
            ...l,
            h.default.COLLECTIBLES_SHOP,
          ]),
          p = (0, u.useStateFromStores)([I.default], () =>
            I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)
          ),
          T = (0, d.useHasAnyModalOpen)(),
          { onClose: L } = (0, G.useCollectiblesShopRouting)(),
          D = (0, u.useStateFromStores)([y.default], () =>
            y.default.getCurrentUser()
          ),
          M = O.default.canUseCollectibles(D),
          H = (0, S.default)("shop_disable_cache"),
          U = (0, S.default)("shop_include_unpublished"),
          {
            categories: z,
            isFetchingCategories: K,
            error: et,
          } = (0, F.default)({ noCache: H, includeUnpublished: U }),
          ea = (0, B.usePurchasedCategoriesSort)(z),
          { tallerCardsEnabled: es } = (0,
          j.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          er = r.useRef(null),
          [el, en] = r.useState(!1);
        (0, w.useProductDetailsDeepLinking)({
          categories: z,
          isFetchingCategories: K,
          isLayer: p,
          initialItemCardRef: er,
        });
        let {
          sessionId: eo,
          scrollerRef: ei,
          scrollHandler: eu,
        } = (0, b.usePageScrollPosition)(
          X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        r.useEffect(() => {
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
          r.useEffect(() => {
            !(0, x.isDismissibleContentDismissed)(
              c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK
            ) &&
              (0, x.markDismissibleContentAsDismissed)(
                c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
                {
                  dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
                  forceTrack: !0,
                }
              );
          }, []),
          r.useEffect(() => {
            !t && (0, m.setHomeLink)(X.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          r.useEffect(
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
          r.useEffect(() => {
            if (!t || p || T) return;
            let e = e => {
              e.key === q.KeyboardEventKey.Escape && L();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, p, T, L]);
        let ec = r.useCallback(() => {
            (0, P.fetchCollectiblesCategories)({
              noCache: H,
              includeUnpublished: U,
            });
          }, [H, U]),
          ed = (0, g.default)(),
          { containerRef: ef, returnRef: em } = (function () {
            let e = r.useRef(null),
              t = r.useRef(null);
            return (
              (0, f.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, s.jsxs)(E.AnalyticsLocationProvider, {
          value: o,
          children: [
            (0, s.jsxs)("div", {
              className: Q.shop,
              ref: t ? ef : void 0,
              children: [
                t
                  ? null
                  : (0, s.jsxs)(v.default, {
                      className: n((0, A.getThemeClass)(ed), Q.headerBar),
                      toolbar: !0,
                      children: [
                        (0, s.jsx)(_.default, { className: Q.logo }),
                        (0, s.jsx)(v.default.Title, {
                          className: Q.title,
                          children: J.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, s.jsx)("div", {
                    className: Q.closeWrapper,
                    children: (0, s.jsx)(C.default, {
                      className: Q.close,
                      closeAction: p ? P.closeCollectiblesShop : L,
                      keybind: "ESC",
                    }),
                  }),
                (0, s.jsx)(f.AdvancedScroller, {
                  className: n(Q.shopScroll, {
                    [Q.shopScrollBackgroundPrimary]: es,
                  }),
                  ref: ei,
                  onScroll: eu,
                  children: (0, s.jsx)("div", {
                    className: n(Q.pageWrapper, {
                      [Q.pageWrapperFullscreen]: t,
                      [Q.pageWrapperBackgroundPrimary]: es,
                    }),
                    children: (0, s.jsxs)("main", {
                      className: n(Q.page, {
                        [Q.pageWithShopBannerHidden]: !t,
                      }),
                      children: [
                        t
                          ? (0, s.jsx)(N.default, {
                              title: J.default.Messages.COLLECTIBLES_SHOP,
                              ref: t ? em : void 0,
                            })
                          : null,
                        K
                          ? (0, s.jsx)(V.default, {})
                          : et
                            ? (0, s.jsx)(W.default, { onRetry: ec })
                            : (0, s.jsx)("div", {
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
                                    (0, s.jsx)(
                                      ee,
                                      {
                                        isPremiumUser: M,
                                        category: e,
                                        initialItemCardRef: er,
                                        setIsGiftEasterEggEnabled: en,
                                        isGiftEasterEggEnabled: el,
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
            el && (0, s.jsx)(Y.default, {}),
          ],
        });
      };
    },
    419513: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LOGO_SIZE: function () {
            return y;
          },
          default: function () {
            return _;
          },
        });
      var s = a("37983"),
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
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
        S = a("56690"),
        x = a("408381"),
        v = a("380171"),
        T = a("646718"),
        L = a("782340"),
        I = a("858422");
      let y = (0, g.getLogoSize)(96),
        N = e => {
          let { category: t } = e,
            { analyticsLocations: a } = (0, c.default)(),
            l = r.useRef(null),
            n = (0, i.useStateFromStores)([f.default], () =>
              f.default.getCurrentUser()
            );
          return p.default.canUseCollectibles(n)
            ? (0, s.jsx)(s.Fragment, { children: t.summary })
            : (0, s.jsx)(s.Fragment, {
                children:
                  L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, s.jsx)(u.Clickable, {
                          innerRef: l,
                          className: I.getPremiumHook,
                          onClick: () => {
                            (0, d.default)({
                              subscriptionTier:
                                T.PremiumSubscriptionSKUs.TIER_2,
                              analyticsLocations: a,
                              returnRef: l,
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
        let { category: r, className: l, hideLimitedTimeBadge: i = !1 } = e,
          { backgroundColors: c } = (0, h.default)(r.styles),
          d = !!(null === (t = v.categoryBannerOverrides[r.skuId]) ||
          void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return r.skuId === o.CollectiblesCategorySkuId.SHY
          ? (0, s.jsx)(S.ShyBanner, { category: r })
          : (0, s.jsxs)(E.default, {
              asset: r.banner,
              className: n(I.shopBanner, l),
              style:
                null != c
                  ? {
                      background: "".concat(
                        (0, x.getBackgroundGradient)(c),
                        " border-box border-box"
                      ),
                      outlineColor: c.border.toHslString(),
                    }
                  : void 0,
              children: [
                (0, s.jsxs)("div", {
                  className: I.discordLogo,
                  children: [
                    (0, s.jsx)(m.default, { className: I.discordIcon }),
                    (0, s.jsx)(C.default, { className: I.discordWordmark }),
                  ],
                }),
                (0, s.jsx)("img", {
                  className: I.categoryLogo,
                  src: (0, g.getCollectiblesAssetURL)(r.logo, { size: y }),
                  alt: r.name,
                  style: {
                    maxWidth:
                      null === (a = v.categoryBannerOverrides[r.skuId]) ||
                      void 0 === a
                        ? void 0
                        : a.logoMaxWidth,
                  },
                }),
                (0, s.jsx)(u.Text, {
                  className: n(I.summary, { [I.blackSummary]: d }),
                  variant: "text-md/normal",
                  children:
                    r.skuId === o.CollectiblesCategorySkuId.DISXCORE
                      ? (0, s.jsx)(N, { category: r })
                      : r.summary,
                }),
                !i &&
                  (0, s.jsx)(b.default, {
                    category: r,
                    className: I.limitedTimeBadge,
                    display: "banner",
                  }),
              ],
            });
      }
    },
    56690: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ShyBanner: function () {
            return p;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("414456"),
        l = a.n(r),
        n = a("77078"),
        o = a("153769"),
        i = a("751962"),
        u = a("641207"),
        c = a("369068"),
        d = a("882849"),
        f = a("197443"),
        m = a("42913"),
        C = a("61346");
      function p(e) {
        let { category: t } = e;
        return (0, s.jsxs)("div", {
          className: l(i.banner, i.shyBanner),
          "aria-label": t.name,
          children: [
            (0, s.jsx)("div", {
              className: i.shyGridContainer,
              children: (0, s.jsx)("img", {
                src: d,
                className: i.shyGrid,
                alt: t.name,
                "aria-hidden": !0,
              }),
            }),
            (0, s.jsx)("img", {
              src: c,
              className: l(i.shyBannerImage, i.shyBannerRight),
              alt: "",
              "aria-hidden": !0,
            }),
            (0, s.jsx)("img", {
              src: u,
              className: l(i.shyBannerImage, i.shyBannerLeft),
              alt: "",
            }),
            (0, s.jsxs)("div", {
              className: i.attributionLogos,
              "aria-label": "Valorant x Discord",
              children: [
                (0, s.jsx)("img", { src: m, alt: "", "aria-hidden": !0 }),
                (0, s.jsx)("img", { src: C, alt: "", "aria-hidden": !0 }),
                (0, s.jsx)(o.default, { height: 16, "aria-hidden": !0 }),
              ],
            }),
            (0, s.jsx)("img", {
              src: f,
              className: i.shyBannerLogo,
              alt: t.name,
              "aria-hidden": !0,
            }),
            (0, s.jsx)(n.Text, {
              className: i.summary,
              variant: "text-md/normal",
              children: t.summary,
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
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
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
        x = a("697218"),
        v = a("944441"),
        T = a("462579"),
        L = a("216422"),
        I = a("956089"),
        y = a("50885"),
        N = a("21526"),
        _ = a("775416"),
        k = a("491232"),
        O = a("677257"),
        A = a("342676"),
        P = a("450492"),
        R = a("920580"),
        j = a("54809"),
        F = a("408381"),
        B = a("264579"),
        D = a("646718"),
        M = a("782340"),
        w = a("682123");
      let H = y.default.getEnableHardwareAcceleration()
          ? u.AnimatedAvatar
          : u.Avatar,
        U = u.AvatarSizes.SIZE_120,
        W = (0, C.getDecorationSizeForAvatarSize)(U),
        G = e => {
          let { children: t, onClick: a, ...r } = e;
          return (0, s.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...r,
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
            children: (0, s.jsx)(T.default, { width: 24, height: 24 }),
          });
        };
      var z = function (e) {
        let {
            product: t,
            category: a,
            onMount: l,
            isPremiumUser: T = !1,
            isGiftEasterEggEnabled: y,
          } = e,
          { analyticsLocations: z } = (0, m.default)(
            f.default.COLLECTIBLES_SHOP_CARD
          ),
          Y = r.useRef(null),
          K = (0, d.default)(Y),
          [X, Z] = r.useState(!1),
          q = K || X,
          $ = (0, i.useStateFromStores)([x.default], () =>
            x.default.getCurrentUser()
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
          { buttonColors: ea, backgroundColors: es } = (0, O.default)(t.styles),
          er = (0, k.getFormattedPriceForCollectiblesProduct)(t, T),
          el = (0, k.isPremiumCollectiblesProduct)(t),
          en = (0, k.isFreeCollectiblesProduct)(t),
          [eo, ei, eu] = (0, i.useStateFromStoresArray)([_.default], () => [
            _.default.getPurchase(t.skuId),
            _.default.isClaiming === t.skuId,
            null != _.default.isClaiming && _.default.isClaiming !== t.skuId,
          ]),
          ec = r.useRef(null);
        r.useEffect(() => {
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
          eC = em(f.default.COLLECTIBLES_SHOP_CARD),
          ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eg = () =>
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
        r.useEffect(() => {
          null == l || l(Y);
        }, [l]);
        let eh = () =>
            null != eo
              ? (0, s.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: w.priceTag,
                  children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : el
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
            el
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
                    onClick: ep,
                  })
                : (0, s.jsx)(P.default, {
                    product: t,
                    returnRef: Y,
                    isGiftEasterEggEnabled: y,
                    tooltipDelay: 250,
                  }),
          eb = () => {
            if (el && !T && !en) return eg();
            let e =
                null != ea
                  ? {
                      background: (0, F.getBackgroundGradient)(ea, 90),
                      color: ea.text.toHslString(),
                    }
                  : void 0,
              a = el
                ? {
                    submitting: ei,
                    submittingStartedLabel:
                      M.default.Messages.COLLECTIBLES_COLLECTING,
                    submittingFinishedLabel:
                      M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                    onClick: async () => {
                      await (0, N.claimPremiumCollectiblesProduct)(t.skuId),
                        (0, B.default)({ product: t, analyticsLocations: z });
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
            return (0, s.jsxs)("div", {
              className: w.buttonsContainer,
              children: [
                null == eo
                  ? (0, s.jsx)(G, {
                      style: e,
                      disabled: eu,
                      className: w.purchaseButton,
                      ...a,
                      children: el
                        ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : M.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: er,
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
                    (0, F.getBackgroundGradient)(es),
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
            innerRef: Y,
            className: w.shopCard,
            onBlur: () => Z(!1),
            onClick: eC,
            style: eS,
            id: "shop-item-".concat(t.skuId),
            children: [
              el &&
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
                    children: (0, s.jsx)(v.default, {
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
            return r;
          },
        });
      var s = a("635058");
      let r = {
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
        [s.CollectiblesCategorySkuId.SHY]: {
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
      var s = a("37983");
      a("884691");
      var r = a("819855"),
        l = a("77078"),
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
                src: (0, r.isThemeDark)(a) ? u : c,
                alt: "",
              }),
              (0, s.jsx)(l.Heading, {
                className: i.heading1,
                variant: "heading-xl/semibold",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
              }),
              (0, s.jsx)(l.Text, {
                variant: "text-md/normal",
                children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
              }),
              (0, s.jsx)(l.Button, {
                className: i.reload,
                size: l.Button.Sizes.MEDIUM,
                color: l.Button.Colors.BRAND_NEW,
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
      var s = a("37983"),
        r = a("884691"),
        l = a("77078"),
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
          x = r.useRef(null),
          v = (0, n.default)(x),
          { buttonColors: T } = (0, d.default)(t.styles),
          L =
            null == T || b
              ? void 0
              : {
                  background: T.secondary.toHslString(),
                  color: T.text.toHslString(),
                },
          I =
            b || (null == T ? void 0 : T.text.isDark())
              ? f.ThemeTypes.DARK
              : f.ThemeTypes.LIGHT;
        return (0, s.jsx)(l.Tooltip, {
          text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, s.jsx)(l.Button, {
              ...e,
              buttonRef: x,
              style: L,
              className: C.giftButton,
              color: b ? l.ButtonColors.BRAND : l.ButtonColors.CUSTOM,
              look: l.Button.Looks.FILLED,
              size: l.ButtonSizes.ICON,
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
                ? (0, s.jsx)(i.SeasonalGiftIcon, {
                    hovered: v,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: p,
                  })
                : (0, s.jsx)(c.default, { width: 24, height: 24 }),
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
      var s = a("37983");
      a("884691");
      var r = a("414456"),
        l = a.n(r),
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
            innerClassName: r,
            disableTooltipPointerEvents: E,
            alwaysWhiteText: b = !0,
            nitroWheelColor: S,
          } = e,
          x = (0, n.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          v = (0, n.useStateFromStores)([u.default], () =>
            (0, o.isThemeDark)(u.default.theme)
          ),
          T = (0, m.extractPriceByPurchaseTypes)(
            t,
            p.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
        if (null == T) return null;
        if (T.amount <= 0)
          return (0, s.jsx)("div", {
            className: l(h.priceTagsContainer, a),
            children: (0, s.jsx)(C.default, {
              alwaysWhiteText: b,
              price: T,
              className: r,
            }),
          });
        let L = (0, m.extractPriceByPurchaseTypes)(
            t,
            p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
          ),
          I = !f.default.canUseCollectibles(x);
        return (0, s.jsxs)("div", {
          className: l(h.priceTagsContainer, a),
          children: [
            (0, s.jsx)(C.default, {
              alwaysWhiteText: b,
              price: T,
              className: l([r, I ? void 0 : h.strikedPrice]),
            }),
            null != L &&
              (0, s.jsx)(C.default, {
                price: L,
                alwaysWhiteText: b,
                renderPrice: I
                  ? e =>
                      g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: l([r, I ? h.fullPrice : void 0]),
                variant: I ? "text-xs/semibold" : void 0,
                icon: (0, s.jsx)(i.Tooltip, {
                  text: g.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: E,
                  children: e => {
                    let { ...t } = e;
                    return (0, s.jsx)(d.default, {
                      ...t,
                      className: l(h.premiumIcon, { [h.fullPrice]: I }),
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
      var s = a("37983");
      a("884691");
      var r = a("414456"),
        l = a.n(r),
        n = a("77078"),
        o = a("153160"),
        i = a("468437"),
        u = e => {
          var t;
          let {
              price: { amount: a, currency: r },
              renderPrice: u,
              icon: c,
              className: d,
              variant: f = "heading-md/semibold",
              alwaysWhiteText: m = !0,
            } = e,
            C = (0, o.formatPrice)(a, r);
          return (0, s.jsxs)(n.Heading, {
            variant: f,
            color: m ? "always-white" : "none",
            className: l(i.heading, d),
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
      var s = a("37983");
      a("884691");
      var r = a("77078");
      let l = "collectibles shop product details modal",
        n = e => {
          let {
            product: t,
            category: n,
            analyticsSource: o,
            analyticsLocations: i,
            returnRef: u,
          } = e;
          (0, r.openModalLazy)(
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
            { modalKey: l }
          );
        },
        o = () => {
          (0, r.closeModal)(l);
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
        r,
        l = a("884691"),
        n = a("90915"),
        o = a("54239"),
        i = a("393414"),
        u = a("49111");
      function c() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = l.useMemo(() => new URLSearchParams(e), [e]),
          s = a.get("source"),
          r = null != s ? parseInt(s, 10) : null,
          c = l.useCallback(() => {
            if (0 === r) {
              (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
              return;
            }
            if ((0, i.currentRouteHasBackNavigation)()) {
              (0, i.back)();
              return;
            }
            (0, i.transitionTo)(u.Routes.APP);
          }, [r]);
        return { onClose: c, source: r, ...t };
      }
      ((r = s || (s = {}))[(r.SETTINGS = 0)] = "SETTINGS"),
        (r[(r.CHANGELOG = 1)] = "CHANGELOG"),
        (r[(r.DM_LIST = 2)] = "DM_LIST");
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
      var r = a("414456"),
        l = a.n(r),
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
                    className: l(u.skeleton, o.shopBanner),
                    children: (0, s.jsx)("div", { className: u.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: l(u.skeleton, i.shopCard),
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
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
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
        x = a("38766"),
        v = a("601095"),
        T = a("493390"),
        L = a("161778"),
        I = a("697218"),
        y = a("944441"),
        N = a("462579"),
        _ = a("216422"),
        k = a("956089"),
        O = a("50885"),
        A = a("21526"),
        P = a("846893"),
        R = a("775416"),
        j = a("491232"),
        F = a("990139"),
        B = a("677257"),
        D = a("342676"),
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
          let { children: t, onClick: a, ...r } = e;
          return (0, s.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...r,
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
            children: (0, s.jsx)(N.default, { width: 24, height: 24 }),
          });
        };
      var q = function (e) {
        let {
            product: t,
            category: a,
            onMount: l,
            isPremiumUser: N = !1,
            isGiftEasterEggEnabled: O,
          } = e,
          { analyticsLocations: q } = (0, g.default)(
            p.default.COLLECTIBLES_SHOP_CARD
          ),
          $ = r.useRef(null),
          J = (0, C.default)($),
          [Q, ee] = r.useState(!1),
          et = J || Q,
          ea = (0, u.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          ),
          [es] = t.items,
          {
            avatarDecorationSrc: er,
            eventHandlers: el,
            avatarPlaceholderSrc: en,
          } = (0, E.default)({
            user: ea,
            avatarDecorationOverride:
              (null == es ? void 0 : es.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? es
                : void 0,
            size: K,
            animateOnHover: !et,
          }),
          { backgroundColors: eo } = (0, B.default)(t.styles),
          ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, N),
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
            P.default.getIsProductNew(es.skuId)
          ),
          { hoverVariant: eg } = (0, F.useShopCardHoverAnimationExperiment)(
            "CollectiblesShopTallCard"
          );
        r.useEffect(() => {
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
          eE = r.useRef(null),
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
              (0, T.openProfileEffectModal)({
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
          ex = eS(p.default.COLLECTIBLES_SHOP_CARD),
          ev = eS(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eT = () =>
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
        r.useEffect(() => {
          null == l || l($);
        }, [l]);
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
                ? (0, s.jsx)(Z, { onClick: ev })
                : (0, s.jsx)(M.default, {
                    product: t,
                    returnRef: $,
                    isGiftEasterEggEnabled: O,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          ey = () => {
            if (eu && !N && !ec) return eT();
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
          eN = eC
            ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, s.jsx)(f.FocusRing, {
          children: (0, s.jsxs)(f.Clickable, {
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
            onClick: ex,
            style:
              null != eo
                ? {
                    backgroundColor: eC
                      ? "var(--background-floating)"
                      : "var(--background-secondary)",
                    borderColor: "var(--chat-border)",
                    boxShadow: et ? eN : "none",
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
                    (0, s.jsx)(k.TextBadge, {
                      ...e,
                      className: V.premiumWheelBadge,
                      text: (0, s.jsx)(_.default, {
                        className: V.premiumWheel,
                      }),
                    }),
                }),
              (null == es ? void 0 : es.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, s.jsx)("div", {
                  className: V.profileEffectShopPreview,
                  children: (0, s.jsx)(v.default, {
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
                    ...el,
                    avatarDecoration: er,
                    src: en,
                    className: n(V.avatar, { [V.avatarPurchased]: null != ed }),
                    size: Y,
                    "aria-label": G.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != ed
                ? (0, s.jsx)("div", {
                    className: V.checkmarkWrapper,
                    children: (0, s.jsx)(y.default, {
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
                      eC ? V.darkCardBackground : V.lightCardBackground,
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
                        children: ey(),
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
              ep &&
                (0, s.jsx)(k.TextBadge, {
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
            return l;
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
        r = a("547630");
      let l = 1060,
        n = e => e * (0, r.default)(),
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
            return l;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("232482");
      function l() {
        return (0, s.jsxs)("div", {
          className: r.snowflakes,
          children: [
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
            (0, s.jsx)("div", { className: r.snowflake, children: "❅" }),
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
      var s = a("37983");
      a("884691");
      var r = a("77078"),
        l = e => {
          let { product: t, analyticsLocations: l } = e;
          (0, r.openModalLazy)(async () => {
            let { default: e } = await a.el("658756").then(a.bind(a, "658756"));
            return a =>
              (0, s.jsx)(e, { product: t, analyticsLocations: l, ...a });
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
      var r = a("748820"),
        l = a("77078"),
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
          E = (0, r.v4)();
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await a.el("894742").then(a.bind(a, "894742"));
            return a => {
              let { onClose: r, returnRef: l, ...n } = a;
              return (0, s.jsx)(e, {
                ...n,
                loadId: E,
                skuId: t,
                isGift: d,
                giftMessage: f,
                analyticsLocations: p,
                onClose: e => {
                  r(), null == m || m(e);
                },
                onComplete: () => {
                  (h = !0), null == C || C();
                },
                returnRef: l,
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
      var s = a("37983"),
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
        o = a("859498"),
        i = a("635471"),
        u = a("126746"),
        c = a("93902"),
        d = e => {
          let {
              profileEffectId: t,
              isHovering: a,
              forCollectedModal: l = !1,
              isPurchased: d,
              removeSetHeight: f = !1,
            } = e,
            m = l ? 250 : 0.1,
            [C, p] = r.useState(!0);
          return (r.useEffect(() => {
            if (!0 !== l) p(!1);
            else {
              let e = setTimeout(() => {
                p(!1);
              }, m);
              return () => {
                clearTimeout(e);
              };
            }
          }, [m, l]),
          null != t)
            ? (0, s.jsxs)("div", {
                className: n(u.previewContainer, {
                  [u.previewContainerAnimation]: l,
                  [u.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, s.jsx)("img", {
                    src: c,
                    alt: " ",
                    className: l ? u.previewForCollected : u.preview,
                    "aria-hidden": !0,
                  }),
                  !C &&
                    (0, s.jsx)("div", {
                      className: d ? u.purchasedEffect : void 0,
                      children: (0, s.jsx)(i.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: l,
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
            return l;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("77078");
      let l = e => {
        let { analyticsLocations: t, initialSelectedEffectId: l, guild: n } = e;
        (0, r.openModalLazy)(async () => {
          let { default: e } = await a.el("889793").then(a.bind(a, "889793"));
          return a =>
            (0, s.jsx)(e, {
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
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("469563"),
        l = a("237020"),
        n = a("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: r = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, n.default)(o),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: l,
                fill: r,
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
//# sourceMappingURL=8631837aad5ad140d5a5.js.map
