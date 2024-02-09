(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84408"],
  {
    875212: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useTriggerDebuggingAA: function () {
            return i;
          },
        });
      var u = r("862205");
      let n = (0, u.createExperiment)({
        kind: "user",
        id: "2023-09_trigger_debugging_aa",
        label: "trigger debugging aa mobile",
        defaultConfig: { inUse: !1 },
        treatments: [{ id: 1, label: "On", config: { inUse: !0 } }],
      });
      function i(e) {
        let { autoTrackExposure: t = !1, location: r } = e;
        return n.useExperiment({ location: r }, { autoTrackExposure: t });
      }
    },
    21526: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          openCollectiblesShop: function () {
            return a;
          },
          closeCollectiblesShop: function () {
            return C;
          },
          productDetailsOpened: function () {
            return _;
          },
          fetchCollectiblesCategories: function () {
            return d;
          },
          fetchCollectiblesPurchases: function () {
            return I;
          },
          fetchCollectiblesProduct: function () {
            return L;
          },
          claimPremiumCollectiblesProduct: function () {
            return T;
          },
          validateCollectiblesRecipient: function () {
            return A;
          },
          setCollectiblesCategoryItemsViewed: function () {
            return p;
          },
        });
      var u = r("872717"),
        n = r("913144"),
        i = r("54239"),
        s = r("448993"),
        E = r("514296"),
        l = r("407788"),
        c = r("489134"),
        o = r("49111");
      r("853987"), r("426497"), r("775416"), r("216719");
      let a = e => {
          let { openInLayer: t = !0, ...r } = e;
          n.default.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...r }),
            t && (0, i.pushLayer)(o.Layers.COLLECTIBLES_SHOP);
        },
        C = () => {
          n.default.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" }),
            (0, i.popLayer)();
        },
        _ = e => {
          n.default.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            item: e,
          });
        },
        d = async e => {
          n.default.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH" });
          try {
            let t = await u.default.get({
              url: o.Endpoints.COLLECTIBLES_CATEGORIES,
              query: null != e ? { country_code: e } : {},
            });
            n.default.dispatch({
              type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
              categories: t.body.map(E.default.fromServer),
            });
          } catch (e) {
            throw (
              (n.default.dispatch({
                type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                error: e,
              }),
              new s.APIError(e))
            );
          }
        },
        I = async () => {
          n.default.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
          try {
            let e = await u.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
            n.default.dispatch({
              type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
              purchases: e.body.map(c.default.fromServer),
            });
          } catch (e) {
            throw (
              (n.default.dispatch({
                type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                error: e,
              }),
              new s.APIError(e))
            );
          }
        },
        L = async (e, t) => {
          n.default.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH" });
          try {
            let r = await u.default.get({
              url: o.Endpoints.COLLECTIBLES_PRODUCTS(e),
              query: null != t ? { country_code: t } : {},
            });
            n.default.dispatch({
              type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
              product: l.default.fromServer(r.body),
            });
          } catch (e) {
            throw (
              (n.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                error: e,
              }),
              new s.APIError(e))
            );
          }
        },
        T = async e => {
          n.default.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
          try {
            var t;
            let r = await u.default.put({
              url: o.Endpoints.COLLECTIBLES_CLAIM,
              body: { sku_id: e },
            });
            n.default.dispatch({
              type: "COLLECTIBLES_CLAIM_SUCCESS",
              skuId: e,
              purchases:
                null === (t = r.body) || void 0 === t
                  ? void 0
                  : t.map(c.default.fromServer),
            });
          } catch (t) {
            throw (
              (n.default.dispatch({
                type: "COLLECTIBLES_CLAIM_FAILURE",
                skuId: e,
                error: t,
              }),
              new s.APIError(t))
            );
          }
        },
        A = async (e, t) => {
          try {
            let r = await u.default.get({
              url: o.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
              query: { sku_id: t, recipient_id: e },
            });
            return r.body.valid;
          } catch (e) {
            throw new s.APIError(e);
          }
        },
        p = e => {
          n.default.dispatch({
            type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
            ...e,
          });
        };
    },
    426497: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return _;
          },
        }),
        r("808653");
      var u = r("635058"),
        n = r("265586"),
        i = r("446674"),
        s = r("913144"),
        E = r("853987");
      let l = new Date(2023, 8, 25),
        c = new Date(2023, 9, 5),
        o = () => ({
          categoryItemViews: {
            [u.CollectiblesCategorySkuId.FANTASY]: {
              [n.CollectiblesItemType.AVATAR_DECORATION]: l,
              [n.CollectiblesItemType.PROFILE_EFFECT]: c,
            },
            [u.CollectiblesCategorySkuId.ANIME]: {
              [n.CollectiblesItemType.AVATAR_DECORATION]: l,
              [n.CollectiblesItemType.PROFILE_EFFECT]: c,
            },
            [u.CollectiblesCategorySkuId.BREAKFAST]: {
              [n.CollectiblesItemType.AVATAR_DECORATION]: l,
              [n.CollectiblesItemType.PROFILE_EFFECT]: c,
            },
            [u.CollectiblesCategorySkuId.DISXCORE]: {
              [n.CollectiblesItemType.AVATAR_DECORATION]: l,
            },
          },
        }),
        a = o();
      class C extends i.default.PersistedStore {
        initialize(e) {
          null != e && (a = e);
        }
        getState() {
          return a;
        }
        isItemViewed(e) {
          var t, r;
          let u =
            null === (t = E.default.getProduct(e.skuId)) || void 0 === t
              ? void 0
              : t.categorySkuId;
          return (
            null != u &&
            (null === (r = a.categoryItemViews[u]) || void 0 === r
              ? void 0
              : r[e.type]) != null
          );
        }
        reset() {
          a = o();
        }
      }
      (C.displayName = "CollectiblesPersistedStore"),
        (C.persistKey = "CollectiblesPersistedStoreV2");
      var _ = new C(s.default, {
        COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
          let { categories: t, itemTypes: r } = e,
            u = new Date();
          return t.reduce((e, t) => {
            let { skuId: n } = t,
              i = r.reduce((e, t) => {
                var r;
                return (null === (r = a.categoryItemViews[n]) || void 0 === r
                  ? void 0
                  : r[t]) != null
                  ? e
                  : (null == a.categoryItemViews[n] &&
                      (a.categoryItemViews[n] = {}),
                    (a.categoryItemViews[n][t] = u),
                    !0);
              }, !1);
            return e || i;
          }, !1);
        },
      });
    },
    775416: function (e, t, r) {
      "use strict";
      let u, n, i;
      r.r(t),
        r.d(t, {
          default: function () {
            return _;
          },
        }),
        r("222007");
      var s = r("917351"),
        E = r("446674"),
        l = r("913144");
      let c = new Map(),
        o = c,
        a = !1;
      class C extends E.default.Store {
        get isFetching() {
          return a;
        }
        get isClaiming() {
          return u;
        }
        get purchases() {
          return o;
        }
        get fetchError() {
          return n;
        }
        get claimError() {
          return i;
        }
        getPurchase(e) {
          return null != e ? o.get(e) : void 0;
        }
      }
      C.displayName = "CollectiblesPurchaseStore";
      var _ = new C(l.default, {
        COLLECTIBLES_PURCHASES_FETCH: e => {
          (a = !0), (n = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
          0 === e.purchases.length
            ? (o = c)
            : !(0, s.isEqual)([...o.values()], e.purchases) &&
              (o = new Map(e.purchases.map(e => [e.skuId, e]))),
            (a = !1),
            (n = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
          let { error: t } = e;
          (o = c), (a = !1), (n = t);
        },
        COLLECTIBLES_CLAIM: e => {
          (u = e.skuId), (i = void 0);
        },
        COLLECTIBLES_CLAIM_SUCCESS: e => {
          null == e.purchases || 0 === e.purchases.length
            ? (o = c)
            : !(0, s.isEqual)([...o.values()], e.purchases) &&
              (o = new Map(e.purchases.map(e => [e.skuId, e]))),
            (u = void 0),
            (i = void 0);
        },
        COLLECTIBLES_CLAIM_FAILURE: e => {
          let { error: t, skuId: r } = e;
          (u = r), (i = t);
        },
        LOGOUT: e => {
          (o = c), (a = !1), (u = void 0), (n = void 0), (i = void 0);
        },
      });
    },
    216719: function (e, t, r) {
      "use strict";
      let u;
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r("446674"),
        i = r("913144");
      let s = [],
        E = s,
        l = null,
        c = e => {
          (E = s), (l = null);
        };
      class o extends n.default.Store {
        get analyticsLocations() {
          return E;
        }
        get analyticsSource() {
          return l;
        }
        get initialProductSkuId() {
          return u;
        }
        getAnalytics() {
          return { analyticsLocations: E, analyticsSource: l };
        }
      }
      o.displayName = "CollectiblesShopStore";
      var a = new o(i.default, {
        COLLECTIBLES_SHOP_OPEN: e => {
          var t, r;
          (E = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s),
            (l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null),
            (u = e.initialProductSkuId);
        },
        COLLECTIBLES_SHOP_CLOSE: c,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
          e.item.skuId === u && (u = void 0);
        },
        LOGOUT: c,
      });
    },
    514296: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        }),
        r("808653"),
        r("424973");
      var u,
        n = r("407788"),
        i = r("792382");
      u = class e extends i.default {
        static fromServer(t) {
          let { products: r, logo: u, ...i } = t;
          return new e({
            ...super.fromServer(i),
            products: r.reduce((e, t) => {
              let r = n.default.fromServer(t);
              return 0 === r.items.length ? e : (e.push(r), e);
            }, []),
            logo: u,
          });
        }
        constructor(e) {
          super(e), (this.products = e.products), (this.logo = e.logo);
        }
      };
    },
    407788: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        }),
        r("808653"),
        r("794252"),
        r("424973");
      var u,
        n = r("506838"),
        i = r("265586"),
        s = r("797647"),
        E = r("730297"),
        l = r("792382"),
        c = r("806410"),
        o = r("49111");
      u = class e extends l.default {
        static fromServer(t) {
          var r;
          let {
            type: u,
            premium_type: l,
            category_sku_id: a,
            prices: C,
            ..._
          } = t;
          return new e({
            ...super.fromServer(_),
            type: u,
            premiumType: l === o.PREMIUM_TYPE_NONE ? null : l,
            categorySkuId: a,
            prices:
              null == (r = C)
                ? {}
                : Object.keys(r).reduce((e, t) => {
                    if (null == r) return e;
                    let u = r[t];
                    return (
                      (e[t] = {
                        countryPrices: {
                          countryCode: u.country_prices.country_code,
                          prices: u.country_prices.prices.map(e =>
                            (0, s.getPriceFromServer)(e, !0)
                          ),
                        },
                        paymentSourcePrices: {},
                      }),
                      e
                    );
                  }, {}),
            items: _.items.reduce(
              (e, t) =>
                (0, n.match)(t)
                  .with(
                    { type: i.CollectiblesItemType.AVATAR_DECORATION },
                    t => (e.push(E.default.fromServer(t)), e)
                  )
                  .with(
                    { type: i.CollectiblesItemType.PROFILE_EFFECT },
                    t => (e.push(c.default.fromServer(t)), e)
                  )
                  .otherwise(() => e),
              []
            ),
          });
        }
        constructor(e) {
          super(e),
            (this.summary = e.summary),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.items = e.items),
            (this.categorySkuId = e.categorySkuId),
            (this.prices = e.prices);
        }
      };
    },
    489134: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var u,
        n = r("407788");
      u = class e extends n.default {
        static fromServer(t) {
          let { purchased_at: r, purchase_type: u, ...n } = t;
          return new e({
            ...super.fromServer(n),
            purchaseType: u,
            purchasedAt: null != r ? new Date(r) : r,
          });
        }
        constructor(e) {
          super(e),
            (this.purchasedAt = e.purchasedAt),
            (this.purchaseType = e.purchaseType);
        }
      };
    },
    792382: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var u,
        n = r("656280"),
        i = r.n(n),
        s = r("509043"),
        E = r("666038");
      let l = e =>
        null == e
          ? e
          : {
              backgroundColors: e.background_colors.map(e =>
                i((0, s.int2hex)(e))
              ),
              buttonColors: e.button_colors.map(e => i((0, s.int2hex)(e))),
              confettiColors: e.confetti_colors.map(e => i((0, s.int2hex)(e))),
            };
      u = class e extends E.default {
        static fromServer(t) {
          let {
              store_listing_id: r,
              sku_id: u,
              unpublished_at: n,
              styles: i,
              ...s
            } = t,
            E = null != n ? new Date(n) : null;
          return new e({
            ...s,
            storeListingId: r,
            skuId: u,
            unpublishedAt: E,
            styles: l(i),
          });
        }
        constructor(e) {
          super(),
            (this.storeListingId = e.storeListingId),
            (this.skuId = e.skuId),
            (this.name = e.name),
            (this.summary = e.summary),
            (this.banner = e.banner),
            (this.unpublishedAt = e.unpublishedAt),
            (this.styles = e.styles);
        }
      };
    },
    75015: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          UploadTypes: function () {
            return i;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return l;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return c;
          },
          USER_BANNER_MAX_HEIGHT: function () {
            return o;
          },
          GUILD_BANNER_MAX_WIDTH: function () {
            return a;
          },
          GUILD_BANNER_MAX_HEIGHT: function () {
            return C;
          },
          SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function () {
            return _;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return d;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return I;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return L;
          },
          BANNER_ASPECT_RATIO: function () {
            return T;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return A;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return p;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return S;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return f;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return O;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return R;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return y;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return h;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return m;
          },
          MessageTypes: function () {
            return s;
          },
        });
      var u,
        n,
        i,
        s,
        E = r("917219");
      ((u = i || (i = {}))[(u.AVATAR = 0)] = "AVATAR"),
        (u[(u.BANNER = 1)] = "BANNER"),
        (u[(u.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (u[(u.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (u[(u.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (u[(u.HOME_HEADER = 5)] = "HOME_HEADER"),
        (u[(u.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let l = 568,
        c = 2400,
        o = 848,
        a = 2400,
        C = 1350,
        _ = 2400,
        d = 960,
        I = 2400,
        L = 600,
        T = 17 / 6,
        A = 16 / 9,
        p = 2.5,
        S = 4,
        f = l / T,
        O = l / A,
        R = l / p,
        y = l / S,
        h =
          E.BACKGROUND_REPLACEMENT_SIZE.width /
          E.BACKGROUND_REPLACEMENT_SIZE.height,
        m = l / h;
      ((n = s || (s = {}))[(n.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (n[(n.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (n[(n.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
  },
]);
//# sourceMappingURL=84408.4ada388609f7ddfe0b3e.js.map
