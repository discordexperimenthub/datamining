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
            u = l.useCallback(() => {
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
          return { scrollerRef: a, scrollHandler: u, sessionId: n.current };
        };
    },
    846893: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a("446674"),
        s = a("913144");
      let r = {},
        n = new Date("2024-03-13").getTime();
      class i extends l.default.PersistedStore {
        initialize(e) {
          r = null != e ? e : {};
        }
        getState() {
          return r;
        }
        getIsProductNew(e) {
          var t;
          return Date.now() < (null !== (t = r[e]) && void 0 !== t ? t : 0);
        }
      }
      (i.displayName = "CollectiblesProductFreshnessStore"),
        (i.persistKey = "CollectiblesProductFreshnessStore"),
        (i.migrations = [
          () => ({
            "1212569433839636530": n,
            "1212569856189407352": n,
            "1212570343567261736": n,
            "1212570596970467378": n,
            "1212581147675205652": n,
            "1212581390936178768": n,
            "1212582298893946880": n,
            "1212582372877541427": n,
            "1212582452640350238": n,
          }),
        ]);
      var o = new i(s.default, {
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: function (e) {
          delete r[e.item.skuId];
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
                  border: o(t[0], t[1]).setAlpha(0.4),
                  label: o(t[0], t[1]).isLight() ? e.dark : e.light,
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
                  text: o(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        d = (e, t) => {
          let { h: a, s: l, l: r } = e.toHsl();
          return s({ h: a, s: l * t, l: r });
        };
      var f = e => t => {
        let a = (0, r.default)([n.default], () => n.default.saturation);
        if (null == t) return {};
        let l = {
          backgroundColors: u(e, t.backgroundColors),
          buttonColors: c(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === a
          ? l
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
        o = a("775416");
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
            categories: c,
            error: d,
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
            let [a, o, u, c] = (0, s.useStateFromStoresArray)(
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
                !(a || o || Date.now() - u < 6e5) &&
                  (0, n.fetchCollectiblesCategories)(e);
              }, [a, u, o, e]),
              { isFetching: a, categories: c, error: o }
            );
          })(e),
          {
            isClaiming: f,
            fetchError: p,
            claimError: m,
            isFetching: C,
            purchases: g,
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
            let [t, a, i, u, c] = (0, s.useStateFromStoresArray)(
              [o.default],
              () => [
                o.default.isFetching,
                o.default.isClaiming,
                o.default.fetchError,
                o.default.claimError,
                o.default.purchases,
              ]
            );
            return (
              (0, l.useEffect)(() => {
                (0, n.fetchCollectiblesPurchases)();
              }, []),
              {
                isClaiming: a,
                fetchError: i,
                claimError: u,
                isFetching: t,
                purchases: c,
              }
            );
          })(),
          h = null !== (t = null != d ? d : p) && void 0 !== t ? t : m;
        return {
          isFetching: u || C,
          isFetchingCategories: u,
          isFetchingPurchases: C,
          isClaiming: f,
          categories: c,
          purchases: g,
          error: h,
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
        let t = (0, s.default)([r.default], () => r.default.purchases),
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
        let t = (0, s.default)([r.default], () => r.default.purchases),
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
      let i = s(
          r.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        o = s(
          r.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
        ),
        u = (0, n.default)({ dark: o, light: i });
      var c = u;
    },
    716120: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("65597"),
        i = a("854588"),
        o = a("206230"),
        u = a("284679"),
        c = a("491232"),
        d = a("408381"),
        f = a("467618"),
        p = e => {
          let {
              asset: t,
              assetUrlOverride: a,
              size: s = d.MAX_CONTENT_WIDTH,
              addGradient: p = !0,
              className: m,
              style: C,
              children: g,
            } = e,
            h = (0, n.default)([o.default], () => o.default.saturation);
          return (0, l.jsx)("div", {
            className: r(f.banner, m),
            style: (() => {
              if (null == t) return C;
              if (1 === h)
                return null != a
                  ? {
                      ...C,
                      backgroundImage: p
                        ? "url(".concat(
                            a,
                            "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"
                          )
                        : "url(".concat(a, ")"),
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }
                  : {
                      ...C,
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
                i.default.unsafe_rawColors.BLACK_500,
                1 - h
              );
              return {
                ...C,
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
    89569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useProductDetailsLinkableRoute: function () {
            return m;
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
        i = a("685665"),
        o = a("216719"),
        u = a("54809"),
        c = a("49111");
      let d = "".concat("#").concat("itemSkuId", "="),
        f = new RegExp("^".concat(d, "(\\d+)$")),
        p = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
        m = e => {
          let t = (0, s.useLocation)();
          l.useEffect(() => {
            if (null != e && p.includes(t.pathname))
              return (
                window.location.replace("".concat(d).concat(e.skuId)),
                () => {
                  window.location.hash.startsWith(d) &&
                    window.location.replace("#");
                }
              );
          }, []);
        },
        C = e => {
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
            p = l.useRef(null),
            m = (0, s.useLocation)(),
            g =
              m.pathname === c.Routes.COLLECTIBLES_SHOP
                ? n.default.HOME_PAGE_SHOP_TAB
                : m.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN
                  ? n.default.COLLECTIBLES_SHOP_FULLSCREEN
                  : n.default.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, i.default)(g);
          l.useEffect(() => {
            if (u) return;
            let e = f.exec(m.hash);
            if (null != e) {
              let t = e[1];
              p.current = t;
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
              (u && null != E && (e = E),
              !u && null != p.current && (e = p.current),
              null != e)
            ) {
              let a = [],
                l = setTimeout(() => {
                  let l = C({
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
        i = a.n(n),
        o = a("506838"),
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
            className: i(d.badge, l),
          });
        }
        return (0, o.match)([a, s > 1])
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
            return es;
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
        u = a("265586"),
        c = a("65597"),
        d = a("151426"),
        f = a("551042"),
        p = a("77078"),
        m = a("939488"),
        C = a("304580"),
        g = a("841098"),
        h = a("812204"),
        E = a("685665"),
        b = a("481120"),
        x = a("890503"),
        T = a("10641"),
        L = a("539938"),
        S = a("210721"),
        v = a("65324"),
        I = a("778588"),
        _ = a("697218"),
        N = a("764490"),
        k = a("29557"),
        y = a("599110"),
        O = a("719923"),
        A = a("439932"),
        j = a("21526"),
        R = a("411691"),
        P = a("216719"),
        B = a("702953"),
        D = a("698957"),
        F = a("235898"),
        M = a("296304"),
        w = a("334820"),
        H = a("89569"),
        U = a("419513"),
        W = a("434393"),
        G = a("571464"),
        z = a("43525"),
        V = a("798235"),
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
            (0, l.jsx)(V.default, { isFullScreen: t })
          )
          .otherwise(() => (0, l.jsx)(z.default, { isFullScreen: t }));
      }
      function el(e) {
        var t, a;
        let {
            category: r,
            className: o,
            isPremiumUser: d,
            initialItemCardRef: f,
            isGiftEasterEggEnabled: m,
            setIsGiftEasterEggEnabled: C,
            showEasterEggToggle: g,
          } = e,
          h = s.useRef(10 + 70 * Math.random()),
          E = (0, w.usePurchasedProductsSort)(r.products),
          b = (0, i.groupBy)(E, "type"),
          x = (0, c.default)([P.default], () => P.default.initialProductSkuId),
          { tallerCardsEnabled: T } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          L = T ? X.default : W.default,
          I = s.useCallback(
            e => t => {
              e.skuId === x && (f.current = t.current);
            },
            [x, f]
          ),
          _ = (e, t) =>
            0 === e.length
              ? null
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(p.Text, {
                      className: n(et.itemTypeTitle, {
                        [et.itemTypeTitleForTallerCard]: T,
                      }),
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: t,
                    }),
                    (0, l.jsx)("div", {
                      className: n(
                        et.cardsContainer,
                        T ? et.tallerShopCard : et.regularShopCard,
                        o
                      ),
                      children: e.map(e =>
                        (0, l.jsx)(
                          L,
                          {
                            onMount: I(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: m,
                          },
                          e.skuId
                        )
                      ),
                    }),
                  ],
                });
        return (0, l.jsxs)("div", {
          className: et.categoryWrapper,
          children: [
            g &&
              (0, l.jsx)(p.Clickable, {
                className: n(et.hiddenWumpus, { [et.hiddenWumpusEnabled]: m }),
                onClick: () => C(!0),
                style: { left: "".concat(h.current, "%") },
                children: (0, l.jsx)(v.default, {
                  idleAnimationState: S.AnimationState.IDLE,
                  giftStyle: Q.PremiumGiftStyles.BOX,
                }),
              }),
            (0, l.jsx)(U.default, {
              category: r,
              className: T ? et.tallerShopCardBanner : void 0,
            }),
            _(
              null !== (t = b[u.CollectiblesItemType.AVATAR_DECORATION]) &&
                void 0 !== t
                ? t
                : [],
              ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
            ),
            _(
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
      var es = function (e) {
        let { isFullScreen: t = !0 } = e,
          { analyticsSource: a, analyticsLocations: r } = (0,
          c.useStateFromStoresObject)([P.default], () =>
            P.default.getAnalytics()
          ),
          { AnalyticsLocationProvider: i, analyticsLocations: o } = (0,
          E.default)([...r, h.default.COLLECTIBLES_SHOP]),
          S = (0, c.default)([I.default], () =>
            I.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)
          ),
          v = (0, f.useHasAnyModalOpen)(),
          { onClose: R } = (0, K.useCollectiblesShopRouting)(),
          w = (0, c.default)([_.default], () => _.default.getCurrentUser()),
          U = O.default.canUseCollectibles(w),
          W = (0, x.default)("shop_disable_cache"),
          z = (0, x.default)("shop_include_unpublished"),
          {
            categories: V,
            isFetchingCategories: X,
            error: es,
          } = (0, F.default)({ noCache: W, includeUnpublished: z }),
          er = (0, M.usePurchasedCategoriesSort)(V),
          { tallerCardsEnabled: en } = (0,
          B.useCollectiblesShopTallerCardsExperiment)({
            location: "CollectiblesShop",
          }),
          ei = s.useRef(null),
          [eo, eu] = s.useState(!1);
        (0, H.useProductDetailsDeepLinking)({
          categories: V,
          isFetchingCategories: X,
          isLayer: S,
          initialItemCardRef: ei,
        });
        let {
          sessionId: ec,
          scrollerRef: ed,
          scrollHandler: ef,
        } = (0, b.usePageScrollPosition)(
          q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED,
          a
        );
        s.useEffect(() => {
          y.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: o,
            source: a,
            page_session_id: ec,
          }),
            !U &&
              y.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                location_stack: o,
              });
        }, [U, o, a, ec]),
          s.useEffect(() => {
            !(0, T.isDismissibleContentDismissed)(
              d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK
            ) &&
              (0, T.markDismissibleContentAsDismissed)(
                d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
                {
                  dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
                  forceTrack: !0,
                }
              );
          }, []),
          s.useEffect(() => {
            !t && (0, m.setHomeLink)(q.Routes.COLLECTIBLES_SHOP);
          }, [t]),
          s.useEffect(
            () => () => {
              (0, j.setCollectiblesCategoryItemsViewed)({
                categories: [...V.values()],
                itemTypes: [
                  u.CollectiblesItemType.AVATAR_DECORATION,
                  u.CollectiblesItemType.PROFILE_EFFECT,
                ],
              });
            },
            [V]
          ),
          s.useEffect(() => {
            if (!t || S || v) return;
            let e = e => {
              e.key === J.KeyboardEventKey.Escape && R();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, S, v, R]);
        let ep = s.useCallback(() => {
            (0, j.fetchCollectiblesCategories)({
              noCache: W,
              includeUnpublished: z,
            });
          }, [W, z]),
          em = (0, g.default)(),
          { shopBannerHidden: eC } = (0, D.default)({
            location: "CollectiblesShop",
          }),
          { containerRef: eg, returnRef: eh } = (function () {
            let e = s.useRef(null),
              t = s.useRef(null);
            return (
              (0, p.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })();
        return (0, l.jsxs)(i, {
          children: [
            (0, l.jsxs)("div", {
              className: et.shop,
              ref: eg,
              children: [
                t
                  ? null
                  : (0, l.jsxs)(L.default, {
                      className: n((0, A.getThemeClass)(em), et.headerBar),
                      toolbar: !0,
                      children: [
                        (0, l.jsx)(k.default, { className: et.logo }),
                        (0, l.jsx)(L.default.Title, {
                          className: et.title,
                          children: ee.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    }),
                t &&
                  (0, l.jsx)("div", {
                    className: et.closeWrapper,
                    children: (0, l.jsx)(C.default, {
                      className: et.close,
                      closeAction: S ? j.closeCollectiblesShop : R,
                      keybind: "ESC",
                    }),
                  }),
                (0, l.jsx)(p.AdvancedScroller, {
                  className: n(et.shopScroll, {
                    [et.shopScrollBackgroundPrimary]: en,
                  }),
                  ref: ed,
                  onScroll: ef,
                  children: (0, l.jsx)("div", {
                    className: n(et.pageWrapper, {
                      [et.pageWrapperFullscreen]: t,
                      [et.pageWrapperBackgroundPrimary]: en,
                    }),
                    children: (0, l.jsxs)("main", {
                      className: n(et.page, {
                        [et.pageWithShopBannerHidden]: eC && !t,
                      }),
                      children: [
                        t
                          ? (0, l.jsx)(N.default, {
                              title: ee.default.Messages.COLLECTIBLES_SHOP,
                              ref: eh,
                            })
                          : null,
                        !eC && (0, l.jsx)(ea, { isFullScreen: t }),
                        X
                          ? (0, l.jsx)(Y.default, {})
                          : es
                            ? (0, l.jsx)(G.default, { onRetry: ep })
                            : (0, l.jsx)("div", {
                                className: et.categories,
                                children: er
                                  .filter(e => {
                                    let { products: t } = e;
                                    return t.length > 0;
                                  })
                                  .map(e =>
                                    (0, l.jsx)(
                                      el,
                                      {
                                        isPremiumUser: U,
                                        category: e,
                                        initialItemCardRef: ei,
                                        setIsGiftEasterEggEnabled: eu,
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
            eo && (0, l.jsx)(Z.default, {}),
          ],
        });
      };
    },
    419513: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
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
        u = a("77078"),
        c = a("685665"),
        d = a("649844"),
        f = a("697218"),
        p = a("153769"),
        m = a("270227"),
        C = a("719923"),
        g = a("491232"),
        h = a("677257"),
        E = a("716120"),
        b = a("342676"),
        x = a("408381"),
        T = a("646718"),
        L = a("782340"),
        S = a("858422");
      let v = (0, g.getLogoSize)(96),
        I = e => {
          let { category: t } = e,
            { analyticsLocations: a } = (0, c.default)(),
            r = s.useRef(null),
            n = (0, o.default)([f.default], () => f.default.getCurrentUser());
          return C.default.canUseCollectibles(n)
            ? (0, l.jsx)(l.Fragment, { children: t.summary })
            : (0, l.jsx)(l.Fragment, {
                children:
                  L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: e =>
                        (0, l.jsx)(u.Clickable, {
                          innerRef: r,
                          className: S.getPremiumHook,
                          onClick: () => {
                            (0, d.default)({
                              subscriptionTier:
                                T.PremiumSubscriptionSKUs.TIER_2,
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
        let { category: t, className: a } = e,
          { backgroundColors: s } = (0, h.default)(t.styles),
          r = t.skuId === i.CollectiblesCategorySkuId.ANIME_V2;
        return (0, l.jsxs)(E.default, {
          asset: t.banner,
          className: n(S.shopBanner, a),
          style:
            null != s
              ? {
                  background: "".concat(
                    (0, x.getBackgroundGradient)(s),
                    " border-box border-box"
                  ),
                  outlineColor: s.border.toHslString(),
                }
              : void 0,
          children: [
            (0, l.jsxs)("div", {
              className: S.discordLogo,
              children: [
                (0, l.jsx)(p.default, { className: S.discordIcon }),
                (0, l.jsx)(m.default, { className: S.discordWordmark }),
              ],
            }),
            (0, l.jsx)("img", {
              className: S.categoryLogo,
              src: (0, g.getCollectiblesAssetURL)(t.logo, { size: v }),
              alt: t.name,
            }),
            (0, l.jsx)(u.Text, {
              className: n(S.summary, { [S.blackSummary]: r }),
              variant: "text-md/normal",
              children:
                t.skuId === i.CollectiblesCategorySkuId.DISXCORE
                  ? (0, l.jsx)(I, { category: t })
                  : t.summary,
            }),
            (0, l.jsx)(b.default, {
              category: t,
              className: S.limitedTimeBadge,
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
        u = a("77078"),
        c = a("54239"),
        d = a("252744"),
        f = a("812204"),
        p = a("685665"),
        m = a("606292"),
        C = a("688318"),
        g = a("946964"),
        h = a("635956"),
        E = a("38766"),
        b = a("601095"),
        x = a("493390"),
        T = a("697218"),
        L = a("944441"),
        S = a("462579"),
        v = a("216422"),
        I = a("956089"),
        _ = a("50885"),
        N = a("21526"),
        k = a("775416"),
        y = a("491232"),
        O = a("98148"),
        A = a("677257"),
        j = a("342676"),
        R = a("450492"),
        P = a("920580"),
        B = a("54809"),
        D = a("408381"),
        F = a("264579"),
        M = a("646718"),
        w = a("782340"),
        H = a("682123");
      let U = _.default.getEnableHardwareAcceleration()
          ? u.AnimatedAvatar
          : u.Avatar,
        W = u.AvatarSizes.SIZE_120,
        G = (0, m.getDecorationSizeForAvatarSize)(W),
        z = e => {
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
            className: n(H.previewButton, t),
            innerClassName: H.previewButtonInner,
            "aria-label": w.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(S.default, { width: 24, height: 24 }),
          });
        };
      var K = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: S = !1,
            isGiftEasterEggEnabled: _,
          } = e,
          { analyticsLocations: K } = (0, p.default)(
            f.default.COLLECTIBLES_SHOP_CARD
          ),
          Y = s.useRef(null),
          X = (0, d.default)(Y),
          [Z, q] = s.useState(!1),
          $ = X || Z,
          J = (0, o.default)([T.default], () => T.default.getCurrentUser()),
          [Q] = t.items,
          {
            avatarDecorationSrc: ee,
            eventHandlers: et,
            avatarPlaceholderSrc: ea,
          } = (0, C.default)({
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
          en = (0, y.getFormattedPriceForCollectiblesProduct)(t, S),
          ei = (0, y.isPremiumCollectiblesProduct)(t),
          eo = (0, y.isFreeCollectiblesProduct)(t),
          [eu, ec, ed] = (0, o.useStateFromStoresArray)([k.default], () => [
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
        let ep = (0, E.default)({ analyticsLocations: K }),
          em = () => {
            if (
              ((0, c.popLayer)(),
              ep(),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, m.openAvatarDecorationModal)({
                initialSelectedDecoration: Q,
                analyticsLocations: K,
              });
              return;
            }
            (null == Q ? void 0 : Q.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, x.openProfileEffectModal)({
                initialSelectedEffectId: Q.id,
                analyticsLocations: K,
              });
          },
          eC = e => l => {
            (ef.current = l.currentTarget),
              (0, B.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: K,
                analyticsSource: e,
                returnRef: ef,
              });
          },
          eg = eC(f.default.COLLECTIBLES_SHOP_CARD),
          eh = eC(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
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
            null != eu
              ? (0, l.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-md/semibold",
                  className: H.priceTag,
                  children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : ei
                ? (0, l.jsx)(u.Text, {
                    color: "always-white",
                    variant: "text-md/semibold",
                    className: H.priceTag,
                    children:
                      w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(P.default, {
                    product: t,
                    className: H.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          ex = () =>
            ei
              ? null
              : eo
                ? (0, l.jsx)(V, {
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
                    isGiftEasterEggEnabled: _,
                    tooltipDelay: 250,
                  }),
          eT = () => {
            if (ei && !S && !eo) return eE();
            let e =
                null != es
                  ? {
                      background: (0, D.getBackgroundGradient)(es, 90),
                      color: es.text.toHslString(),
                    }
                  : void 0,
              a = ei
                ? {
                    submitting: ec,
                    submittingStartedLabel:
                      w.default.Messages.COLLECTIBLES_COLLECTING,
                    submittingFinishedLabel:
                      w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                    onClick: async () => {
                      await (0, N.claimPremiumCollectiblesProduct)(t.skuId),
                        (0, F.default)({ product: t, analyticsLocations: K });
                    },
                  }
                : {
                    onClick: () =>
                      (0, g.default)({
                        skuId: t.skuId,
                        analyticsLocations: K,
                        returnRef: Y,
                      }),
                  };
            return (0, l.jsxs)("div", {
              className: H.buttonsContainer,
              children: [
                null == eu
                  ? (0, l.jsx)(z, {
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
                  : (0, l.jsx)(z, {
                      style: e,
                      disabled: ed,
                      onClick: em,
                      children: w.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                ex(),
              ],
            });
          },
          eL =
            null != er
              ? {
                  background: "".concat(
                    (0, D.getBackgroundGradient)(er),
                    " border-box border-box"
                  ),
                  borderColor: er.border.toHslString(),
                  boxShadow: $
                    ? "0 0 25px 1px ".concat(er.primary.toHslString())
                    : "none",
                }
              : void 0;
        return (0, l.jsx)(u.FocusRing, {
          children: (0, l.jsxs)(u.Clickable, {
            innerRef: Y,
            className: H.shopCard,
            onBlur: () => q(!1),
            onClick: eg,
            style: eL,
            id: "shop-item-".concat(t.skuId),
            children: [
              ei &&
                (0, l.jsx)(u.Tooltip, {
                  tooltipContentClassName: H.premiumWheelTooltipContent,
                  color: u.Tooltip.Colors.PRIMARY,
                  text: w.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(I.TextBadge, {
                      ...e,
                      className: H.premiumWheelBadge,
                      text: (0, l.jsx)(v.default, {
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
                    isPurchased: null != eu,
                  }),
                }),
              (null == Q ? void 0 : Q.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)(U, {
                  ...et,
                  avatarDecoration: ee,
                  src: ea,
                  className: n(H.avatar, { [H.avatarPurchased]: null != eu }),
                  size: W,
                  "aria-label": w.default.Messages.USER_SETTINGS_AVATAR,
                }),
              null != eu
                ? (0, l.jsx)("div", {
                    className:
                      (null == Q ? void 0 : Q.type) ===
                      i.CollectiblesItemType.PROFILE_EFFECT
                        ? H.profileEffectCheckmarkWrapper
                        : H.checkmarkWrapper,
                    children: (0, l.jsx)(L.default, {
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
                  (0, l.jsx)(u.Text, {
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
                            (0, l.jsx)(u.Text, {
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
                        children: eT(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(j.default, {
                category: a,
                className: H.limitedTimeBadge,
                display: "card",
              }),
            ],
          }),
        });
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
        u = a("321220"),
        c = a("684386"),
        d = e => {
          let { onRetry: t } = e,
            a = (0, n.default)();
          return (0, l.jsxs)("div", {
            className: o.wrapper,
            children: [
              (0, l.jsx)("img", {
                className: o.loadIssueImg,
                src: (0, s.isThemeDark)(a) ? u : c,
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
            return g;
          },
        });
      var l = a("37983"),
        s = a("884691"),
        r = a("77078"),
        n = a("252744"),
        i = a("685665"),
        o = a("108486"),
        u = a("946964"),
        c = a("978679"),
        d = a("677257"),
        f = a("843455"),
        p = a("782340"),
        m = a("691164");
      let C = {
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
          { analyticsLocations: x } = (0, i.default)(),
          T = s.useRef(null),
          L = (0, n.default)(T),
          { buttonColors: S } = (0, d.default)(t.styles),
          v =
            null == S || b
              ? void 0
              : {
                  background: S.secondary.toHslString(),
                  color: S.text.toHslString(),
                },
          I =
            b || (null == S ? void 0 : S.text.isDark())
              ? f.ThemeTypes.DARK
              : f.ThemeTypes.LIGHT;
        return (0, l.jsx)(r.Tooltip, {
          text: p.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
          delay: h,
          children: e =>
            (0, l.jsx)(r.Button, {
              ...e,
              buttonRef: T,
              style: v,
              className: m.giftButton,
              color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
              look: r.Button.Looks.FILLED,
              size: r.ButtonSizes.ICON,
              innerClassName: m.giftButtonInner,
              "aria-label": p.default.Messages.PREMIUM_GIFTING_BUTTON,
              onClick: e => {
                e.stopPropagation(),
                  (0, u.default)({
                    skuId: t.skuId,
                    isGift: !0,
                    analyticsLocations: x,
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
                ? (0, l.jsx)(o.SeasonalGiftIcon, {
                    hovered: L,
                    isContentDismissed: !0,
                    themeOverride: I,
                    boxColors: C,
                  })
                : (0, l.jsx)(c.default, { width: 24, height: 24 }),
            }),
        });
      };
    },
    43525: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("313506"),
        u = a("247329"),
        c = a("333838"),
        d = a("399637"),
        f = a("976076"),
        p = function (e) {
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
                  src: u,
                }),
              }),
              (0, l.jsx)("img", {
                className: o.bannerForeground,
                alt: "",
                src: c,
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
            return p;
          },
        });
      var l = a("37983");
      a("884691");
      var s = a("414456"),
        r = a.n(s),
        n = a("77078"),
        i = a("782340"),
        o = a("859155"),
        u = a("200406"),
        c = a("283045"),
        d = a("718297"),
        f = a("929880"),
        p = function (e) {
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
                    src: u,
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
                    src: c,
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
        u = a("161778"),
        c = a("697218"),
        d = a("216422"),
        f = a("719923"),
        p = a("491232"),
        m = a("791309"),
        C = a("49111"),
        g = a("782340"),
        h = a("193527");
      function E(e) {
        let {
            product: t,
            className: a,
            disableTooltipPointerEvents: s,
            alwaysWhiteText: E = !0,
          } = e,
          b = (0, n.default)([c.default], () => c.default.getCurrentUser()),
          x = (0, n.default)([u.default], () =>
            (0, i.isThemeDark)(u.default.theme)
          ),
          T = (0, p.extractPriceByPurchaseTypes)(
            t,
            C.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
        if (null == T) return null;
        if (T.amount <= 0)
          return (0, l.jsx)("div", {
            className: r(h.priceTagsContainer, a),
            children: (0, l.jsx)(m.default, { alwaysWhiteText: E, price: T }),
          });
        let L = (0, p.extractPriceByPurchaseTypes)(
            t,
            C.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
          ),
          S = !f.default.canUseCollectibles(b);
        return (0, l.jsxs)("div", {
          className: r(h.priceTagsContainer, a),
          children: [
            (0, l.jsx)(m.default, {
              alwaysWhiteText: E,
              price: T,
              className: S ? void 0 : h.strikedPrice,
            }),
            null != L &&
              (0, l.jsx)(m.default, {
                price: L,
                alwaysWhiteText: E,
                renderPrice: S
                  ? e =>
                      g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                        price: e,
                      })
                  : void 0,
                className: S ? h.fullPrice : void 0,
                variant: S ? "text-xs/semibold" : void 0,
                icon: (0, l.jsx)(o.Tooltip, {
                  text: g.default.Messages
                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  disableTooltipPointerEvents: s,
                  children: e => {
                    let { ...t } = e;
                    return (0, l.jsx)(d.default, {
                      ...t,
                      className: r(h.premiumIcon, { [h.fullPrice]: S }),
                      color: E || x ? "white" : "black",
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
        i = a("153160"),
        o = a("468437"),
        u = e => {
          var t;
          let {
              price: { amount: a, currency: s },
              renderPrice: u,
              icon: c,
              className: d,
              variant: f = "heading-md/semibold",
              alwaysWhiteText: p = !0,
            } = e,
            m = (0, i.formatPrice)(a, s);
          return (0, l.jsxs)(n.Heading, {
            variant: f,
            color: p ? "always-white" : "none",
            className: r(o.heading, d),
            children: [
              c,
              null !== (t = null == u ? void 0 : u(m)) && void 0 !== t ? t : m,
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
                  analyticsSource: i,
                  analyticsLocations: o,
                  returnRef: u,
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
        i = a("54239"),
        o = a("393414"),
        u = a("49111");
      function c() {
        let { search: e } = (0, n.useLocation)(),
          t = (0, n.useParams)(),
          a = r.useMemo(() => new URLSearchParams(e), [e]),
          l = a.get("source"),
          s = null != l ? parseInt(l, 10) : null,
          c = r.useCallback(() => {
            if (0 === s) {
              (0, o.back)(), (0, i.pushLayer)(u.Layers.USER_SETTINGS);
              return;
            }
            if ((0, o.currentRouteHasBackNavigation)()) {
              (0, o.back)();
              return;
            }
            (0, o.transitionTo)(u.Routes.APP);
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
        i = a("858422"),
        o = a("682123"),
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
                    className: r(u.skeleton, i.shopBanner),
                    children: (0, l.jsx)("div", { className: u.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map(e =>
                    (0, l.jsx)(
                      "div",
                      {
                        className: r(u.skeleton, o.shopCard),
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
            return Z;
          },
        }),
        a("222007");
      var l = a("37983"),
        s = a("884691"),
        r = a("414456"),
        n = a.n(r),
        i = a("265586"),
        o = a("65597"),
        u = a("669491"),
        c = a("755854"),
        d = a("77078"),
        f = a("54239"),
        p = a("252744"),
        m = a("812204"),
        C = a("685665"),
        g = a("606292"),
        h = a("688318"),
        E = a("946964"),
        b = a("635956"),
        x = a("38766"),
        T = a("601095"),
        L = a("493390"),
        S = a("161778"),
        v = a("697218"),
        I = a("944441"),
        _ = a("462579"),
        N = a("216422"),
        k = a("956089"),
        y = a("50885"),
        O = a("21526"),
        A = a("846893"),
        j = a("775416"),
        R = a("491232"),
        P = a("98148"),
        B = a("677257"),
        D = a("342676"),
        F = a("450492"),
        M = a("920580"),
        w = a("54809"),
        H = a("264579"),
        U = a("646718"),
        W = a("782340"),
        G = a("600545");
      let z = y.default.getEnableHardwareAcceleration()
          ? d.AnimatedAvatar
          : d.Avatar,
        V = d.AvatarSizes.SIZE_152,
        K = (0, g.getDecorationSizeForAvatarSize)(V),
        Y = e => {
          let { children: t, onClick: a, ...s } = e;
          return (0, l.jsx)(d.Button, {
            fullWidth: !0,
            look: d.Button.Looks.FILLED,
            onClick: e => {
              e.stopPropagation(), a();
            },
            ...s,
            children: t,
          });
        },
        X = e => {
          let { className: t, ...a } = e;
          return (0, l.jsx)(d.Button, {
            color: d.ButtonColors.BRAND,
            look: d.Button.Looks.FILLED,
            size: d.ButtonSizes.ICON,
            className: n(G.previewButton, t),
            innerClassName: G.previewButtonInner,
            "aria-label": W.default.Messages.PREVIEW,
            ...a,
            children: (0, l.jsx)(_.default, { width: 24, height: 24 }),
          });
        };
      var Z = function (e) {
        let {
            product: t,
            category: a,
            onMount: r,
            isPremiumUser: _ = !1,
            isGiftEasterEggEnabled: y,
          } = e,
          { analyticsLocations: Z } = (0, C.default)(
            m.default.COLLECTIBLES_SHOP_CARD
          ),
          q = s.useRef(null),
          $ = (0, p.default)(q),
          [J, Q] = s.useState(!1),
          ee = $ || J,
          et = (0, o.default)([v.default], () => v.default.getCurrentUser()),
          [ea] = t.items,
          {
            avatarDecorationSrc: el,
            eventHandlers: es,
            avatarPlaceholderSrc: er,
          } = (0, h.default)({
            user: et,
            avatarDecorationOverride:
              (null == ea ? void 0 : ea.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? ea
                : void 0,
            size: K,
            animateOnHover: !ee,
          }),
          { productCardDescriptionHidden: en } = (0, P.default)({
            location: "CollectiblesShopTallCard",
          }),
          { backgroundColors: ei } = (0, B.default)(t.styles),
          eo = (0, R.getFormattedPriceForCollectiblesProduct)(t, _),
          eu = (0, R.isPremiumCollectiblesProduct)(t),
          ec = (0, R.isFreeCollectiblesProduct)(t),
          [ed, ef, ep] = (0, o.useStateFromStoresArray)([j.default], () => [
            j.default.getPurchase(t.skuId),
            j.default.isClaiming === t.skuId,
            null != j.default.isClaiming && j.default.isClaiming !== t.skuId,
          ]),
          em = (0, o.default)([S.default], () =>
            (0, c.isThemeDark)(S.default.theme)
          ),
          eC = (0, o.default)([A.default], () =>
            A.default.getIsProductNew(ea.skuId)
          );
        s.useEffect(() => {
          let { current: e } = q;
          if (null == e) return;
          let t = () => Q(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []);
        let eg = (0, x.default)({ analyticsLocations: Z }),
          eh = s.useRef(null),
          eE = () => {
            if (
              ((0, f.popLayer)(),
              eg(),
              (null == ea ? void 0 : ea.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION)
            ) {
              (0, g.openAvatarDecorationModal)({
                initialSelectedDecoration: ea,
                analyticsLocations: Z,
              });
              return;
            }
            (null == ea ? void 0 : ea.type) ===
              i.CollectiblesItemType.PROFILE_EFFECT &&
              (0, L.openProfileEffectModal)({
                initialSelectedEffectId: ea.id,
                analyticsLocations: Z,
              });
          },
          eb = e => l => {
            (eh.current = l.currentTarget),
              (0, w.openCollectiblesShopProductDetailsModal)({
                product: t,
                category: a,
                analyticsLocations: Z,
                analyticsSource: e,
                returnRef: eh,
              });
          },
          ex = eb(m.default.COLLECTIBLES_SHOP_CARD),
          eT = eb(m.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eL = () =>
            (0, l.jsx)("div", {
              className: G.hoverUpsellContainer,
              children: (0, l.jsx)(b.default, {
                fullWidth: !0,
                className: G.premiumSubscribeButton,
                disabled: ep,
                onClick: e => e.stopPropagation(),
                buttonText: W.default.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2,
              }),
            });
        s.useEffect(() => {
          null == r || r(q);
        }, [r]);
        let eS = () =>
            null != ed
              ? (0, l.jsx)(d.Text, {
                  variant: "text-md/semibold",
                  className: G.priceTag,
                  children: W.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                })
              : eu
                ? (0, l.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: G.priceTag,
                    children:
                      W.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, l.jsx)(M.default, {
                    alwaysWhiteText: !1,
                    product: t,
                    className: G.priceTag,
                    disableTooltipPointerEvents: !0,
                  }),
          ev = () =>
            eu
              ? null
              : ec
                ? (0, l.jsx)(X, { onClick: eT })
                : (0, l.jsx)(F.default, {
                    product: t,
                    returnRef: q,
                    isGiftEasterEggEnabled: y,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          eI = () => {
            if (eu && !_ && !ec) return eL();
            let e = eu
              ? {
                  submitting: ef,
                  submittingStartedLabel:
                    W.default.Messages.COLLECTIBLES_COLLECTING,
                  submittingFinishedLabel:
                    W.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                  onClick: async () => {
                    await (0, O.claimPremiumCollectiblesProduct)(t.skuId),
                      (0, H.default)({ product: t, analyticsLocations: Z });
                  },
                }
              : {
                  onClick: () =>
                    (0, E.default)({
                      skuId: t.skuId,
                      analyticsLocations: Z,
                      returnRef: q,
                    }),
                };
            return (0, l.jsxs)("div", {
              className: G.buttonsContainer,
              children: [
                null == ed
                  ? (0, l.jsx)(Y, {
                      disabled: ep,
                      className: G.purchaseButton,
                      ...e,
                      children: eu
                        ? W.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                        : W.default.Messages.COLLECTIBLES_PURCHASE.format({
                            price: eo,
                          }),
                    })
                  : (0, l.jsx)(Y, {
                      disabled: ep,
                      onClick: eE,
                      children: W.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                ev(),
              ],
            });
          },
          e_ = em
            ? "0 0 15px 1px ".concat(u.default.unsafe_rawColors.PRIMARY_700.css)
            : "var(--elevation-high)";
        return (0, l.jsx)(d.FocusRing, {
          children: (0, l.jsxs)(d.Clickable, {
            innerRef: q,
            className: G.shopCard,
            onBlur: () => Q(!1),
            onClick: ex,
            style:
              null != ei
                ? {
                    backgroundColor: em
                      ? "var(--background-floating)"
                      : "var(--background-secondary)",
                    borderColor: "var(--chat-border)",
                    boxShadow: ee ? e_ : "none",
                  }
                : void 0,
            id: "shop-item-".concat(t.skuId),
            children: [
              eu &&
                (0, l.jsx)(d.Tooltip, {
                  tooltipContentClassName: G.premiumWheelTooltipContent,
                  color: d.Tooltip.Colors.PRIMARY,
                  text: W.default.Messages
                    .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                  children: e =>
                    (0, l.jsx)(k.TextBadge, {
                      ...e,
                      className: G.premiumWheelBadge,
                      text: (0, l.jsx)(N.default, {
                        className: G.premiumWheel,
                      }),
                    }),
                }),
              (null == ea ? void 0 : ea.type) ===
                i.CollectiblesItemType.PROFILE_EFFECT &&
                (0, l.jsx)("div", {
                  className: G.profileEffectShopPreview,
                  children: (0, l.jsx)(T.default, {
                    isHovering: ee,
                    profileEffectId: ea.id,
                    isPurchased: null != ed,
                    removeSetHeight: !0,
                  }),
                }),
              (null == ea ? void 0 : ea.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, l.jsx)("div", {
                  className: G.avatarContainer,
                  children: (0, l.jsx)(z, {
                    ...es,
                    avatarDecoration: el,
                    src: er,
                    className: n(G.avatar, { [G.avatarPurchased]: null != ed }),
                    size: V,
                    "aria-label": W.default.Messages.USER_SETTINGS_AVATAR,
                  }),
                }),
              null != ed
                ? (0, l.jsx)("div", {
                    className: G.checkmarkWrapper,
                    children: (0, l.jsx)(I.default, {
                      width: 38,
                      height: 38,
                      className: G.checkmark,
                    }),
                  })
                : null,
              (0, l.jsxs)("div", {
                className: n(G.cardText, {
                  [G.cardTextBlur]:
                    (null == ea ? void 0 : ea.type) ===
                    i.CollectiblesItemType.PROFILE_EFFECT,
                }),
                children: [
                  (0, l.jsx)("div", {
                    className: n(
                      G.cardBackground,
                      em ? G.darkCardBackground : G.lightCardBackground,
                      (null == ea ? void 0 : ea.type) ===
                        i.CollectiblesItemType.PROFILE_EFFECT
                        ? G.cardLowOpacity
                        : null
                    ),
                  }),
                  (0, l.jsx)(d.Text, {
                    variant: "text-lg/bold",
                    className: G.productName,
                    children: t.name,
                  }),
                  !en &&
                    (0, l.jsx)(d.Text, {
                      className: n(G.description, G.innerMask),
                      variant: "text-md/normal",
                      lineClamp: 3,
                      children: t.summary,
                    }),
                  (0, l.jsxs)("div", {
                    className: G.detailsWrapper,
                    children: [
                      (0, l.jsx)("div", {
                        className: G.innerBlur,
                        children: eS(),
                      }),
                      (0, l.jsx)("div", {
                        className: G.innerHover,
                        children: eI(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(D.default, {
                category: a,
                className: G.limitedTimeBadge,
                display: "card",
              }),
              eC &&
                (0, l.jsx)(k.TextBadge, {
                  text: W.default.Messages.NEW,
                  disableColor: !0,
                  className: G.newBadge,
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
            return c;
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
          return null == e ? o : null !== (t = u[e]) && void 0 !== t ? t : o;
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
        u = a("599110"),
        c = a("49111");
      function d(e) {
        let {
            skuId: t,
            isGift: d = !1,
            giftMessage: f,
            onClose: p,
            onComplete: m,
            analyticsLocations: C,
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
                analyticsLocations: C,
                onClose: e => {
                  s(), null == p || p(e);
                },
                onComplete: () => {
                  (h = !0), null == m || m();
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
                  location_stack: C,
                }),
                (0, n.clearError)(),
                (0, i.clearPurchaseTokenAuthState)(),
                null == p || p(h),
                h && (0, o.fetchCollectiblesPurchases)();
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
        i = a("859498"),
        o = a("635471"),
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
            p = r ? 250 : 0.1,
            [m, C] = s.useState(!0);
          return (s.useEffect(() => {
            if (!0 !== r) C(!1);
            else {
              let e = setTimeout(() => {
                C(!1);
              }, p);
              return () => {
                clearTimeout(e);
              };
            }
          }, [p, r]),
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
                  !m &&
                    (0, l.jsx)("div", {
                      className: d ? u.purchasedEffect : void 0,
                      children: (0, l.jsx)(o.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: r,
                        restartMethod: i.RestartMethod.FromStart,
                        resetOnHover: !0,
                        isHovering: a,
                        introDelay: p,
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
//# sourceMappingURL=11f8579b78e422386834.js.map
