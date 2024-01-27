(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43870"],
  {
    688318: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return E;
          },
        }),
        r("222007");
      var n = r("884691"),
        i = r("446674"),
        o = r("206230"),
        u = r("91653"),
        l = r("697218"),
        a = r("471671"),
        T = r("315102"),
        c = r("53708"),
        E = t => {
          let {
              user: e,
              size: r,
              animateOnHover: E = !1,
              showPending: s = !1,
              showTryItOut: _ = !1,
              avatarDecorationOverride: d,
            } = t,
            [S, C] = n.useState(!1),
            I = (0, i.useStateFromStores)(
              [o.default],
              () => o.default.useReducedMotion
            ),
            f = (0, i.useStateFromStores)([a.default], () =>
              a.default.isFocused()
            ),
            A = (0, i.useStateFromStores)([l.default], () => {
              var t;
              return null === (t = l.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id;
            }),
            v = (0, i.useStateFromStores)([l.default], () => {
              var t;
              return null ===
                (t = l.default.getUser(null == e ? void 0 : e.id)) ||
                void 0 === t
                ? void 0
                : t.avatarDecoration;
            }),
            { pendingAvatarDecoration: N } = (0, u.default)({ isTryItOut: _ }),
            O = f && (S || (!I && !E)),
            R =
              s &&
              void 0 !== N &&
              void 0 !== A &&
              A === (null == e ? void 0 : e.id)
                ? N
                : null != v
                  ? v
                  : null == e
                    ? void 0
                    : e.avatarDecoration,
            P = n.useMemo(
              () =>
                (0, T.getAvatarDecorationURL)({
                  avatarDecoration: void 0 !== d ? d : R,
                  canAnimate: O,
                  size: r,
                }),
              [R, O, r, d]
            ),
            U = n.useCallback(() => C(!0), []),
            g = n.useCallback(() => C(!1), []);
          return {
            avatarPlaceholderSrc: c,
            avatarDecorationSrc: P,
            isAvatarDecorationAnimating: O,
            eventHandlers: { onMouseEnter: U, onMouseLeave: g },
          };
        };
    },
    853987: function (t, e, r) {
      "use strict";
      let n, i;
      r.r(e),
        r.d(e, {
          default: function () {
            return I;
          },
        }),
        r("222007");
      var o = r("917351"),
        u = r("446674"),
        l = r("913144"),
        a = r("915639"),
        T = r("491232");
      let c = new Map(),
        E = new Map(),
        s = c,
        _ = E,
        d = !1;
      let S = () => {
        (s = c), (_ = E), (i = void 0), (d = !1), (n = void 0);
      };
      class C extends u.default.Store {
        initialize() {
          this.syncWith([a.default], S);
        }
        get isFetching() {
          return d;
        }
        get error() {
          return n;
        }
        get lastFetched() {
          return i;
        }
        get categories() {
          return s;
        }
        get products() {
          return _;
        }
        getCategory(t) {
          return null != t ? s.get(t) : void 0;
        }
        getProduct(t) {
          return null != t ? _.get(t) : void 0;
        }
        getCategoryForProduct(t) {
          let e = this.getProduct(t);
          return this.getCategory(null == e ? void 0 : e.categorySkuId);
        }
      }
      C.displayName = "CollectiblesCategoryStore";
      var I = new C(l.default, {
        COLLECTIBLES_CATEGORIES_FETCH: t => {
          (d = !0), (n = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
          0 === t.categories.length
            ? ((s = c), (_ = E))
            : !(0, o.isEqual)([...s.values()], t.categories) &&
              ((s = new Map(t.categories.map(t => [t.skuId, t]))),
              (_ = new Map(
                (0, T.getProductsFromCategories)(s).map(t => [t.skuId, t])
              ))),
            (i = Date.now()),
            (d = !1),
            (n = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
          let { error: e } = t;
          (s = c), (_ = E), (d = !1), (n = e);
        },
        COLLECTIBLES_PRODUCT_FETCH: t => {
          (d = !0), (n = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
          _.set(t.product.skuId, t.product), (d = !1), (n = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
          let { error: e } = t;
          (d = !1), (n = e);
        },
        LOGOUT: S,
      });
    },
    491232: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          isPremiumCollectiblesProduct: function () {
            return c;
          },
          isPremiumCollectiblesPurchase: function () {
            return E;
          },
          getFormattedPriceForCollectiblesProduct: function () {
            return s;
          },
          extractPriceByPurchaseTypes: function () {
            return _;
          },
          isFreeCollectiblesProduct: function () {
            return d;
          },
          getProductsFromCategories: function () {
            return S;
          },
          getAvatarDecorationsFromPurchases: function () {
            return f;
          },
          getAvatarDecorationsFromCategories: function () {
            return A;
          },
          getCollectiblesAssetURL: function () {
            return v;
          },
          getProfileEffectsFromPurchases: function () {
            return N;
          },
          getProfileEffectsFromCategories: function () {
            return O;
          },
          groupProfileEffects: function () {
            return R;
          },
          isCollectiblesGiftCode: function () {
            return P;
          },
        }),
        r("222007");
      var n = r("917351"),
        i = r("265586"),
        o = r("407063"),
        u = r("153160"),
        l = r("730297"),
        a = r("806410"),
        T = r("49111");
      let c = t => (null == t ? void 0 : t.premiumType) != null,
        E = t =>
          (null == t ? void 0 : t.purchaseType) ===
          T.EntitlementTypes.PREMIUM_PURCHASE,
        s = (t, e) => {
          let r = _(
            t,
            e
              ? T.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
              : T.PriceSetAssignmentPurchaseTypes.DEFAULT
          );
          return null == r
            ? ""
            : (0, u.formatPrice)(
                null == r ? void 0 : r.amount,
                null == r ? void 0 : r.currency
              );
        },
        _ = (t, e) => {
          var r, n, i;
          let o = null !== (i = t.prices[e]) && void 0 !== i ? i : null;
          return null == o
            ? null
            : null === (n = o.countryPrices) || void 0 === n
              ? void 0
              : null === (r = n.prices) || void 0 === r
                ? void 0
                : r[0];
        },
        d = t => {
          var e;
          return (
            (null === (e = _(t, T.PriceSetAssignmentPurchaseTypes.DEFAULT)) ||
            void 0 === e
              ? void 0
              : e.amount) === 0
          );
        },
        S = t => {
          let e = (0, n.flatMap)([...t.values()], "products");
          return (0, n.uniqBy)(e, "storeListingId");
        },
        C = (t, e) => {
          if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
            let e = (0, n.flatMap)([...t.values()], "items").filter(
              l.isAvatarDecorationRecord
            );
            return (0, n.uniqBy)(e, "id");
          }
          if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
            let e = (0, n.flatMap)([...t.values()], "items").filter(
              a.isProfileEffectRecord
            );
            return (0, n.uniqBy)(e, "id");
          }
        },
        I = (t, e) => {
          let r = S(t);
          if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
            let t = (0, n.flatMap)(r, "items").filter(
              l.isAvatarDecorationRecord
            );
            return (0, n.uniqBy)(t, "id");
          }
          if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
            let t = (0, n.flatMap)(r, "items").filter(a.isProfileEffectRecord);
            return (0, n.uniqBy)(t, "id");
          }
        },
        f = t => C(t, i.CollectiblesItemType.AVATAR_DECORATION),
        A = t => I(t, i.CollectiblesItemType.AVATAR_DECORATION),
        v = (t, e) => {
          var r;
          let { CDN_HOST: n, API_ENDPOINT: i } = window.GLOBAL_ENV,
            u = (0, o.getBestMediaProxySize)(
              e.size * (0, o.getDevicePixelRatio)()
            ),
            l =
              null !== (r = null == e ? void 0 : e.format) && void 0 !== r
                ? r
                : "png";
          if (null != n)
            return ""
              .concat(location.protocol, "//")
              .concat(n, "/app-assets/")
              .concat(T.COLLECTIBLES_APPLICATION_ID, "/")
              .concat(t, ".")
              .concat(l, "?size=")
              .concat(u);
          let a = T.Endpoints.APPLICATION_ASSET(
            T.COLLECTIBLES_APPLICATION_ID,
            t,
            l
          );
          return ""
            .concat(location.protocol)
            .concat(i)
            .concat(a, "?size=")
            .concat(u);
        },
        N = t => C(t, i.CollectiblesItemType.PROFILE_EFFECT),
        O = t => I(t, i.CollectiblesItemType.PROFILE_EFFECT),
        R = (t, e) => {
          let r = N(e),
            n = O(t).filter(t => {
              let { id: e } = t;
              return !r.some(t => t.id === e);
            });
          return { purchased: r, shopPreviews: n };
        },
        P = t => t.applicationId === T.COLLECTIBLES_APPLICATION_ID;
    },
    170313: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return s;
          },
        }),
        r("794252");
      var n = r("884691"),
        i = r("506838"),
        o = r("265586"),
        u = r("65597"),
        l = r("599110"),
        a = r("853987"),
        T = r("491232"),
        c = r("49111"),
        E = r("646718"),
        s = t => {
          let e = (0, u.default)([a.default], () => a.default.products);
          return (0, n.useCallback)(
            r => {
              let { type: n, skuId: u } = r,
                a = e.get(u);
              l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, i.match)(n)
                  .with(
                    o.CollectiblesItemType.AVATAR_DECORATION,
                    () => E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION
                  )
                  .with(
                    o.CollectiblesItemType.PROFILE_EFFECT,
                    () => E.AnalyticsPremiumFeatureNames.PROFILE_EFFECT
                  )
                  .otherwise(() => void 0),
                feature_tier: (0, T.isPremiumCollectiblesProduct)(a)
                  ? E.AnalyticsPremiumFeatureTiers.FREE
                  : E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                feature_selection: null == a ? void 0 : a.name,
                location_stack: t,
              });
            },
            [e, t]
          );
        };
    },
    730297: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          isAvatarDecorationRecord: function () {
            return u;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("265586"),
        o = r("200410");
      let u = t => t instanceof n;
      n = class t extends o.default {
        static fromServer(e) {
          return new t({ ...super.fromServer(e), ...e });
        }
        constructor(t) {
          super(t),
            (this.type = i.CollectiblesItemType.AVATAR_DECORATION),
            (this.asset = t.asset),
            (this.label = t.label);
        }
      };
    },
    200410: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return n;
          },
        });
      var n,
        i = r("666038");
      n = class t extends i.default {
        static fromServer(e) {
          let { sku_id: r, ...n } = e;
          return new t({ ...n, skuId: r });
        }
        constructor(t) {
          super(), (this.id = t.id), (this.skuId = t.skuId);
        }
      };
    },
    806410: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          isProfileEffectRecord: function () {
            return u;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("265586"),
        o = r("200410");
      let u = t => t instanceof n;
      n = class t extends o.default {
        static fromServer(e) {
          return new t({ ...super.fromServer(e), ...e });
        }
        constructor(t) {
          super(t), (this.type = i.CollectiblesItemType.PROFILE_EFFECT);
        }
      };
    },
    91653: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var n = r("884691"),
        i = r("65597"),
        o = r("170313"),
        u = r("906932"),
        l = r("790618"),
        a = r("697218"),
        T = r("783142"),
        c = t => {
          let { isTryItOut: e, analyticsLocations: r } = t,
            c = (0, i.default)([a.default], () => a.default.getCurrentUser()),
            E = (0, o.default)(r),
            { pendingAvatar: s, pendingAvatarDecoration: _ } = (0,
            i.useStateFromStoresObject)([l.default], () => ({
              pendingAvatar: e
                ? l.default.getTryItOutAvatar()
                : l.default.getPendingAvatar(),
              pendingAvatarDecoration: e
                ? l.default.getTryItOutAvatarDecoration()
                : l.default.getPendingAvatarDecoration(),
            })),
            d = (0, n.useCallback)(
              t => (0, u.setNewPendingAvatar)(t, null == c ? void 0 : c.avatar),
              [null == c ? void 0 : c.avatar]
            ),
            S = (0, n.useCallback)(
              t => {
                (0, u.setNewPendingAvatarDecoration)(
                  t,
                  null == c ? void 0 : c.avatarDecoration
                ),
                  null != t && E(t);
              },
              [null == c ? void 0 : c.avatarDecoration, E]
            );
          return {
            pendingAvatar: s,
            pendingAvatarDecoration: _,
            setPendingAvatar: e ? T.setTryItOutAvatar : d,
            setPendingAvatarDecoration: e ? T.setTryItOutAvatarDecoration : S,
          };
        };
    },
    790618: function (t, e, r) {
      "use strict";
      let n, i, o, u, l, a, T, c, E, s, _, d, S, C;
      r.r(e),
        r.d(e, {
          default: function () {
            return D;
          },
        });
      var I = r("265586"),
        f = r("446674"),
        A = r("913144"),
        v = r("49111");
      let N = v.FormStates.CLOSED,
        O = {},
        R = !1;
      function P() {
        (N = v.FormStates.OPEN), (O = {});
      }
      function U() {
        (N = v.FormStates.CLOSED), (O = {});
      }
      function g() {
        m(), F(), (O = {});
      }
      function m() {
        (n = void 0), (i = void 0), (o = void 0), (u = void 0);
      }
      function F() {
        (l = void 0),
          (a = void 0),
          (T = void 0),
          (c = void 0),
          (E = void 0),
          (u = void 0);
      }
      function L() {
        (_ = void 0), (d = void 0), (S = void 0), (C = void 0), (s = void 0);
      }
      class p extends f.default.Store {
        getFormState() {
          return N;
        }
        getErrors() {
          return O;
        }
        showNotice() {
          return (
            void 0 !== n ||
            void 0 !== l ||
            void 0 !== a ||
            void 0 !== T ||
            void 0 !== c ||
            void 0 !== E ||
            void 0 !== o ||
            void 0 !== u ||
            void 0 !== i
          );
        }
        getPendingAvatar() {
          return n;
        }
        getPendingGlobalName() {
          return i;
        }
        getPendingBanner() {
          return l;
        }
        getPendingBio() {
          return a;
        }
        getPendingPronouns() {
          return T;
        }
        getPendingAccentColor() {
          return c;
        }
        getPendingThemeColors() {
          return E;
        }
        getPendingAvatarDecoration() {
          return o;
        }
        getPendingProfileEffectId() {
          return u;
        }
        getAllPending() {
          return {
            pendingAvatar: n,
            pendingBanner: l,
            pendingBio: a,
            pendingPronouns: T,
            pendingAccentColor: c,
            pendingThemeColors: E,
            pendingAvatarDecoration: o,
            pendingProfileEffectId: u,
            pendingGlobalName: i,
          };
        }
        getTryItOutThemeColors() {
          return s;
        }
        getTryItOutAvatar() {
          return _;
        }
        getTryItOutAvatarDecoration() {
          return d;
        }
        getTryItOutProfileEffectId() {
          return S;
        }
        getTryItOutBanner() {
          return C;
        }
        getAllTryItOut() {
          return {
            tryItOutThemeColors: s,
            tryItOutAvatar: _,
            tryItOutAvatarDecoration: d,
            tryItOutProfileEffectId: S,
            tryItOutBanner: C,
          };
        }
        getIsDisableSubmit() {
          return R;
        }
      }
      p.displayName = "UserSettingsAccountStore";
      var D = new p(A.default, {
        USER_SETTINGS_ACCOUNT_INIT: P,
        USER_SETTINGS_MODAL_INIT: P,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: P,
        USER_SETTINGS_MODAL_SET_SECTION: function (t) {
          let { section: e } = t;
          return e === v.UserSettingsSections.ACCOUNT && P();
        },
        USER_SETTINGS_ACCOUNT_CLOSE: U,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function () {
          g(), L(), U();
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function () {
          (N = v.FormStates.SUBMITTING), (O = {});
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function (t) {
          var e;
          if (N !== v.FormStates.SUBMITTING) return !1;
          (N = v.FormStates.OPEN),
            (O = null !== (e = t.errors) && void 0 !== e ? e : {});
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function (t) {
          let { avatar: e } = t;
          (n = e), (_ = void 0);
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function (t) {
          let { globalName: e } = t;
          i = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function (t) {
          let { avatarDecoration: e } = t;
          o = e;
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM:
          function (t) {
            let { item: e } = t;
            (null == e ? void 0 : e.type) ===
            I.CollectiblesItemType.PROFILE_EFFECT
              ? ((d = null), (S = null == e ? void 0 : e.id))
              : ((S = null), (d = e));
          },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function (t) {
          let { profileEffectId: e } = t;
          u = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function (t) {
          let { banner: e } = t;
          l = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function (t) {
          let { bio: e } = t;
          a = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function (t) {
          let { pronouns: e } = t;
          T = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function (t) {
          let { color: e } = t;
          c = e;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function (t) {
          let { themeColors: e } = t;
          E = e;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function (t) {
          let { avatar: e } = t;
          _ = e;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function (t) {
          let { avatarDecoration: e } = t;
          d = e;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function (t) {
          let { profileEffectId: e } = t;
          S = e;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function (t) {
          let { banner: e } = t;
          C = e;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function (t) {
          let { themeColors: e } = t;
          s = e;
        },
        USER_SETTINGS_CLEAR_ERRORS: function () {
          O = {};
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: m,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: F,
        USER_SETTINGS_RESET_ALL_PENDING: g,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: L,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function () {
          o = void 0;
        },
        LOGOUT: function () {
          n = void 0;
        },
        USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function (t) {
          let { disable: e } = t;
          R = e;
        },
      });
    },
    265586: function (t, e, r) {
      "use strict";
      var n, i;
      r.r(e),
        r.d(e, {
          CollectiblesItemType: function () {
            return n;
          },
        }),
        ((i = n || (n = {}))[(i.NONE = 100)] = "NONE"),
        (i[(i.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (i[(i.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
    },
  },
]);
//# sourceMappingURL=43870.0bfb9a80f88725fba82a.js.map
