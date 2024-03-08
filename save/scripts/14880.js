(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14880"],
  {
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    513002: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f328a6f8209d4f1f5022.png";
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("76527");
      n.es(r, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("506070");
      n.es(r, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("632874");
      n.es(r, t);
    },
    828049: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("102885");
      n.es(r, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("618807");
      n.es(r, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("28289");
      n.es(r, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("882039");
      n.es(r, t);
    },
    161009: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var r = n("884691"),
        s = n("446674"),
        i = n("189293"),
        l = n("845962"),
        a = n("235898");
      function o() {
        let {
            isFetching: e,
            error: t,
            categories: n,
            purchases: o,
          } = (0, a.default)(),
          [u, c, d] = (0, s.useStateFromStoresArray)([l.default], () => [
            l.default.isFetching,
            l.default.fetchError,
            l.default.profileEffects,
          ]);
        return (
          (0, r.useEffect)(() => {
            (0, i.fetchUserProfileEffects)();
          }, []),
          {
            isFetching: e || u,
            error: null != t ? t : c,
            profileEffects: d,
            categories: n,
            purchases: o,
          }
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("446674"),
        s = n("76393");
      function i() {
        return (0, r.useStateFromStores)(
          [s.default],
          () =>
            null != s.default.getRemoteSessionId() ||
            null != s.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return E;
          },
          canGuildUseRoleIcons: function () {
            return C;
          },
        }),
        n("781738");
      var r = n("867805"),
        s = n("407063"),
        i = n("315102"),
        l = n("773336"),
        a = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, l.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: h(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, s.getBestMediaProxySize)(t * (0, s.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let l = i.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, s.getBestMediaProxySize)(t * (0, s.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        E = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        C = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(a.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return l;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var r = n("316693"),
        s = n("923510"),
        i = n("49111");
      let l = i.Permissions.VIEW_CHANNEL,
        a = r.default.combine(l, i.Permissions.CONNECT),
        o = r.default.combine(l, s.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return E;
          },
          getManageResourcePermissions: function () {
            return C;
          },
        }),
        n("222007");
      var r = n("884691"),
        s = n("316693"),
        i = n("446674"),
        l = n("813006");
      n("923959");
      var a = n("957255"),
        o = n("697218");
      n("991170");
      var u = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, r) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
          if ("userId" in e) return r && null != t && e.userId === t.id;
          if ("user" in e) {
            var s;
            return (
              r &&
              null != t &&
              (null === (s = e.user) || void 0 === s ? void 0 : s.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              s.default.combine(t, c.Permissions.CREATE_EVENTS),
              s.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        E = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [s, u, E, C] = (0, i.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            v = (0, i.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            m = r.useCallback(e => f(e, v, u, s), [s, u, v]),
            p = r.useCallback(e => f(e, v, C, E), [C, E, v]);
          return null == e
            ? d
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: m,
                canManageGuildEvent: p,
              };
        },
        C = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [r, s] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            E = t.can(r, e),
            C = t.can(s, e),
            v = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: i,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: C,
                canManageGuildExpression: e => f(e, v, u, i),
                canManageGuildEvent: e => f(e, v, C, E),
              };
        };
    },
    189293: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserProfileEffects: function () {
            return o;
          },
        });
      var r = n("872717"),
        s = n("913144"),
        i = n("448993");
      n("845962");
      var l = n("49111");
      let a = e => {
          let { sku_id: t, ...n } = e;
          return { id: n.id, skuId: t, config: { ...n, skuId: t } };
        },
        o = async () => {
          s.default.dispatch({ type: "USER_PROFILE_EFFECTS_FETCH" });
          try {
            let { body: e } = await r.default.get(
                l.Endpoints.USER_PROFILE_EFFECTS
              ),
              t = null == e ? void 0 : e.profile_effect_configs,
              n = t.map(a);
            s.default.dispatch({
              type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
              profileEffects: n,
            });
          } catch (e) {
            throw (
              (s.default.dispatch({
                type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                error: e,
              }),
              new i.APIError(e))
            );
          }
        };
    },
    831308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Section: function () {
            return r;
          },
          NONE_ITEM: function () {
            return E;
          },
          SHOP_ITEM: function () {
            return C;
          },
          default: function () {
            return v;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var r,
        s,
        i = n("884691"),
        l = n("917351"),
        a = n("65597"),
        o = n("853987"),
        u = n("775416"),
        c = n("491232"),
        d = n("697218"),
        f = n("719923"),
        h = n("782340");
      ((s = r || (r = {})).PURCHASE = "purchase"),
        (s.PREMIUM_PURCHASE = "premium_purchase"),
        (s.PREVIEW = "preview");
      let E = { id: "None" },
        C = { id: "Shop" };
      var v = () => {
        let e = (0, a.default)([d.default], () => d.default.getCurrentUser()),
          t = f.default.canUseCollectibles(e),
          n = (0, a.default)([u.default], () => u.default.purchases),
          [r, s] = (0, a.useStateFromStoresArray)([o.default], () => [
            o.default.categories,
            o.default.products,
          ]);
        return (0, i.useMemo)(() => {
          let e = (0, l.uniqBy)(
              [
                ...(0, c.getProfileEffectsFromPurchases)(n),
                ...(0, c.getProfileEffectsFromCategories)(r),
              ],
              "id"
            ),
            i = e.reduce(
              (e, r) => {
                let i = n.get(r.skuId),
                  l = (0, c.isPremiumCollectiblesPurchase)(i);
                if (l) return e.premium_purchase.push(r), e;
                if (null != i) return e.purchase.push(r), e;
                if (!t && (0, c.isPremiumCollectiblesProduct)(s.get(r.skuId))) {
                  let t = e.premium_purchase;
                  return t.push(r), e;
                }
                return e.preview.push(r), e;
              },
              { purchase: [], premium_purchase: [], preview: [] }
            );
          return [
            {
              section: "purchase",
              items: [E, C, ...i.purchase],
              height: 12,
              header:
                h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER,
            },
            {
              section: "premium_purchase",
              items: i.premium_purchase,
              height: 12,
              header:
                h.default.Messages
                  .CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER,
            },
            {
              section: "preview",
              items: i.preview,
              height: 12,
              header:
                h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER,
            },
          ].filter(e => {
            let { items: t } = e;
            return t.length > 0;
          });
        }, [r, s, n, t]);
      };
    },
    889793: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n("222007");
      var r = n("37983"),
        s = n("884691"),
        i = n("265586"),
        l = n("446674"),
        a = n("77078"),
        o = n("812204"),
        u = n("685665"),
        c = n("21526"),
        d = n("491232"),
        f = n("984002"),
        h = n("161009"),
        E = n("635956"),
        C = n("906932"),
        v = n("697218"),
        m = n("599110"),
        p = n("719923"),
        g = n("717262"),
        _ = n("598854"),
        S = n("49111"),
        I = n("646718"),
        A = n("782340"),
        N = n("810473");
      function T(e) {
        let {
            user: t,
            product: n,
            purchase: i,
            onApply: l,
            onClose: u,
            disableApplyButton: f,
            canUseCollectibles: h,
            selectedProfileEffectId: C,
            selectedProfileEffectItem: v,
            analyticsLocations: m,
          } = e,
          g = s.useCallback(() => {
            u(),
              (0, c.openCollectiblesShop)({
                analyticsLocations: m,
                analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != v ? v.skuId : void 0,
              });
          }, [u, m, v]);
        return (0, r.jsx)(a.ModalFooter, {
          className: N.modalFooter,
          children: (0, r.jsxs)("div", {
            className: N.buttonsRight,
            children: [
              (0, r.jsx)(a.Button, {
                look: a.Button.Looks.LINK,
                color: a.Button.Colors.PRIMARY,
                onClick: u,
                children: A.default.Messages.CANCEL,
              }),
              (() => {
                let e =
                  null != i && (!(0, d.isPremiumCollectiblesPurchase)(i) || h);
                if (e || null === C)
                  return (0, r.jsx)(a.Button, {
                    onClick: l,
                    disabled: f,
                    children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY,
                  });
                let s = h || !(0, d.isPremiumCollectiblesProduct)(n);
                return s
                  ? (0, r.jsx)(a.Button, {
                      className: N.modalFooterShopButton,
                      onClick: g,
                      children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    })
                  : (0, r.jsx)(E.default, {
                      subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                      buttonText: p.default.isPremium(t)
                        ? A.default.Messages
                            .USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL
                        : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                    });
              })(),
            ],
          }),
        });
      }
      function R(e) {
        let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            onClose: o,
            initialSelectedProfileEffectId: u,
            currentSavedEffectId: c,
            analyticsLocations: h,
          } = e,
          { pendingProfileEffectId: E } = (0,
          C.useGlobalOrGuildIdentityPendingProfileEffect)(n),
          [v, m] = s.useMemo(() => {
            let e = (0, d.groupProfileEffects)(i, l);
            return [e.purchased, e.shopPreviews];
          }, [i, l]),
          [S, I] = s.useState(() =>
            null != u
              ? u
              : void 0 !== E
                ? E
                : null == c
                  ? null
                  : null != c
                    ? c
                    : null
          ),
          [R, x] = s.useMemo(() => {
            var e;
            let t = v.find(e => (null == e ? void 0 : e.id) === S),
              n = null != t || null === S,
              r =
                null !==
                  (e =
                    null != t
                      ? t
                      : m.find(e => (null == e ? void 0 : e.id) === S)) &&
                void 0 !== e
                  ? e
                  : null;
            return [r, n];
          }, [S, v, m]),
          { product: P, purchase: M } = (0, f.default)(
            null == R ? void 0 : R.skuId
          ),
          L = s.useRef(null),
          w = p.default.canUseCollectibles(t),
          O = S === (void 0 === E ? (null != c ? c : null) : E),
          b = s.useCallback(
            e => {
              I(e);
            },
            [I]
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(a.ModalHeader, {
              separator: !1,
              className: N.modalHeader,
              children: [
                (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: A.default.Messages.PROFILE_EFFECT_MODAL_HEADER,
                }),
                (0, r.jsx)(a.ModalCloseButton, {
                  className: N.modalCloseButton,
                  onClick: o,
                }),
              ],
            }),
            (0, r.jsxs)(a.ModalContent, {
              className: N.modalContent,
              children: [
                (0, r.jsx)(_.default, {
                  user: t,
                  guild: n,
                  pendingProfileEffect: S,
                  selectedProfileEffectRef: L,
                  onSelect: b,
                  onClose: o,
                }),
                (0, r.jsx)(g.default, {
                  user: t,
                  canApplySelectedChange: x,
                  pendingProfileEffectRecord: R,
                  product: P,
                  purchase: M,
                  guild: n,
                }),
              ],
            }),
            (0, r.jsx)(T, {
              user: t,
              onApply: () => {
                (0, C.setNewPendingProfileEffectId)(S, c, n), o();
              },
              onClose: o,
              product: P,
              purchase: M,
              canUseCollectibles: w,
              selectedProfileEffectId: S,
              selectedProfileEffectItem: R,
              disableApplyButton: O,
              analyticsLocations: h,
            }),
          ],
        });
      }
      function x(e) {
        let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffectId: d,
            guild: f,
            onClose: E,
          } = e,
          { isFetching: p, categories: g, purchases: _ } = (0, h.default)(),
          I = (0, l.useStateFromStores)([v.default], () =>
            v.default.getCurrentUser()
          ),
          { AnalyticsLocationProvider: A, analyticsLocations: T } = (0,
          u.default)(n, o.default.EDIT_PROFILE_EFFECT_MODAL),
          x = (0, C.useGlobalOrGuildIdentityProfileEffect)(I, f);
        return (
          s.useEffect(() => {
            m.default.track(S.AnalyticEvents.OPEN_MODAL, {
              type: S.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
              location_stack: T,
            });
          }, [T]),
          s.useEffect(
            () => () => {
              (0, c.setCollectiblesCategoryItemsViewed)({
                categories: [...g.values()],
                itemTypes: [i.CollectiblesItemType.PROFILE_EFFECT],
              });
            },
            [g]
          ),
          (0, r.jsx)(A, {
            children: (0, r.jsx)(a.ModalRoot, {
              transitionState: t,
              size: a.ModalSize.DYNAMIC,
              className: N.modal,
              children: p
                ? (0, r.jsx)(a.Spinner, {
                    className: N.spinner,
                    type: a.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, r.jsx)(R, {
                    user: I,
                    guild: f,
                    categories: g,
                    purchases: _,
                    initialSelectedProfileEffectId: d,
                    currentSavedEffectId: x,
                    onClose: E,
                    analyticsLocations: T,
                  }),
            }),
          })
        );
      }
    },
    717262: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("446674"),
        i = n("77078"),
        l = n("152584"),
        a = n("853987"),
        o = n("491232"),
        u = n("929423"),
        c = n("424562"),
        d = n("884351"),
        f = n("184900"),
        h = n("783142"),
        E = n("217513"),
        C = n("915639"),
        v = n("845579"),
        m = n("415167"),
        p = n("790618"),
        g = n("697218");
      n("550515");
      var _ = n("719923"),
        S = n("782340"),
        I = n("619986");
      let A = e => {
          var t;
          let {
              effectIsOwned: n,
              pendingProfileEffectRecord: l,
              product: u,
              purchase: c,
            } = e,
            d = (0, s.useStateFromStores)([g.default], () =>
              g.default.getCurrentUser()
            ),
            f = (0, s.useStateFromStores)([a.default], () =>
              a.default.getProduct(null == l ? void 0 : l.skuId)
            ),
            h = (0, s.useStateFromStores)([C.default], () => C.default.locale),
            E = _.default.canUseCollectibles(d),
            v = (0, o.isPremiumCollectiblesPurchase)(c),
            m = (0, o.isPremiumCollectiblesProduct)(u),
            p = N(!E && v, m, E);
          return null != l
            ? (0, r.jsx)("div", {
                className: n
                  ? I.effectDescriptionNoGradient
                  : I.effectDescriptionBorderWithGradient,
                children: (0, r.jsxs)("div", {
                  className: I.effectDescriptionContainer,
                  children: [
                    (0, r.jsx)(i.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: I.effectName,
                      children:
                        null !== (t = null == c ? void 0 : c.name) &&
                        void 0 !== t
                          ? t
                          : null == f
                            ? void 0
                            : f.name,
                    }),
                    (0, r.jsx)(i.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      className: I.effectDescription,
                      children: null != c ? c.summary : p,
                    }),
                    null != c &&
                      (0, r.jsxs)(i.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: I.effectPurchasedAt,
                        children: [
                          S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: c.purchasedAt.toLocaleDateString(h, {
                              month: "long",
                              year: "numeric",
                            }),
                          }),
                          v &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("br", {}),
                                S.default.Messages
                                  .CHANGE_DECORATION_MODAL_STARTER_DESC,
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              })
            : null;
        },
        N = (e, t, n) =>
          e
            ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED
            : t && n
              ? S.default.Messages
                  .CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
              : t && !n
                ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER
                : S.default.Messages
                    .CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
      var T = e => {
        var t;
        let {
            user: n,
            pendingProfileEffectRecord: i,
            canApplySelectedChange: a,
            product: o,
            purchase: C,
            guild: g,
          } = e,
          {
            pendingGlobalName: S,
            pendingNickname: N,
            pendingPronouns: T,
            pendingBio: R,
            pendingBanner: x,
            pendingAvatar: P,
            pendingAvatarDecoration: M,
            pendingThemeColors: L,
            pendingAccentColor: w,
          } = (0, s.useStateFromStoresObject)([c.default, p.default], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != g
              ? c.default.getAllPending()
              : p.default.getAllPending()),
          })),
          O = _.default.isPremium(n),
          b = (0, E.default)(n.id),
          j = !!(null == b ? void 0 : b.getPreviewBio(R).value),
          y = v.UseLegacyChatInput.useSetting(),
          F = y && null != R ? d.default.parse(void 0, R).content : R,
          V = _.default.canUsePremiumProfileCustomization(n),
          H = (null == b ? void 0 : b.canUsePremiumProfileCustomization) || V,
          D = {
            user: n,
            guild: g,
            pendingGlobalName: S,
            pendingNickname: N,
            pendingPronouns: T,
            pendingBio: F,
            pendingBanner: x,
            useLargeBanner: !0,
            pendingAvatar: P,
            pendingAvatarDecoration: M,
            pendingThemeColors: L,
            pendingAccentColor: w,
            pendingProfileEffectId:
              null !== (t = null == i ? void 0 : i.id) && void 0 !== t
                ? t
                : null,
            hideFakeActivity: j,
            canUsePremiumCustomization: V,
            onUpsellClick: m.default,
            onAvatarChange: null != g ? u.setPendingAvatar : l.setPendingAvatar,
            onBannerChange: h.setPendingBanner,
          };
        return (0, r.jsxs)("div", {
          className: H
            ? I.previewContainerWithTheme
            : I.previewContainerWithoutTheme,
          children: [
            (0, r.jsx)(f.default, {
              ...D,
              disabledInputs: !0,
              forProfileEffectModal: !0,
            }),
            !1,
            (0, r.jsx)(A, {
              effectIsOwned: a,
              pendingProfileEffectRecord: i,
              product: o,
              purchase: C,
              userIsPremium: O,
            }),
          ],
        });
      };
    },
    598854: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("222007"),
        n("794252");
      var r = n("37983"),
        s = n("884691"),
        i = n("414456"),
        l = n.n(i),
        a = n("506838"),
        o = n("171210"),
        u = n("65597"),
        c = n("77078"),
        d = n("54239"),
        f = n("853987"),
        h = n("426497"),
        E = n("491232"),
        C = n("743826"),
        v = n("216422"),
        m = n("468759"),
        p = n("600785"),
        g = n("956089"),
        _ = n("719923"),
        S = n("845962"),
        I = n("831308"),
        A = n("49111"),
        N = n("782340"),
        T = n("971864"),
        R = n("513002");
      let x = () => 80,
        P = e => {
          let { children: t, className: n, isSelected: s = !1, ...i } = e;
          return (0, r.jsx)(c.Clickable, {
            className: l(T.effectGridItem, n, { [T.selected]: s }),
            ...i,
            onClick: i.onSelect,
            children: t,
          });
        },
        M = e => {
          var t;
          let {
              user: n,
              profileEffect: i,
              innerRef: l,
              section: a,
              isSelected: c,
              ...d
            } = e,
            C = (0, u.default)([S.default], () =>
              S.default.getProfileEffectById(i.id)
            ),
            m = (0, u.default)([f.default], () => {
              let e = f.default.getProduct(i.skuId);
              return (0, E.isPremiumCollectiblesProduct)(e);
            }),
            A = (0, u.default)([h.default], () => h.default.isItemViewed(i)),
            x = s.useRef(null),
            {
              accessibilityLabel: M,
              thumbnailPreviewSrc: L,
              title: w,
            } = null !== (t = null == C ? void 0 : C.config) && void 0 !== t
              ? t
              : {},
            O = _.default.canUseCollectibles(n),
            b = a === I.Section.PREMIUM_PURCHASE && !O,
            [j, y] = s.useState(c);
          return (
            s.useEffect(() => {
              c && y(!0);
            }, [c]),
            (0, r.jsxs)(P, {
              className: b && !c ? T.decorationGridItemChurned : void 0,
              innerRef: null != l ? l : x,
              isSelected: c,
              ...d,
              children: [
                (0, r.jsx)("img", {
                  src: R,
                  alt: M,
                  className: T.presetEffectBackground,
                }),
                (0, r.jsx)("img", {
                  className: T.presetEffectImg,
                  src: L,
                  alt: w,
                }),
                (() => {
                  let e =
                    a === I.Section.PURCHASE ||
                    (a === I.Section.PREMIUM_PURCHASE && O);
                  if (e) return null;
                  let t = !A && !c && !j;
                  return t
                    ? (0, r.jsx)(g.PremiumBadge, {
                        className: T.newBadge,
                        text: (0, r.jsxs)("div", {
                          className: T.newBadgeText,
                          children: [
                            (0, r.jsx)(p.default, { width: 12, height: 12 }),
                            N.default.Messages.NEW,
                          ],
                        }),
                      })
                    : (0, r.jsx)(g.IconBadge, {
                        icon: m
                          ? () =>
                              (0, r.jsx)(v.default, { width: 14, height: 14 })
                          : () =>
                              (0, r.jsx)(p.default, { width: 12, height: 12 }),
                        color: o.default.BACKGROUND_ACCENT,
                        className: T.lockBadge,
                      });
                })(),
              ],
            })
          );
        };
      var L = e => {
        let {
            user: t,
            guild: n,
            pendingProfileEffect: s,
            selectedProfileEffectRef: i,
            onSelect: l,
            onClose: o,
          } = e,
          u = () => {
            o(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP);
          },
          f = (0, I.default)(),
          h = null != s;
        return (0, r.jsx)("section", {
          children: (0, r.jsx)(c.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: T.list,
            columns: 3,
            sections: f.map(e => {
              let { items: t } = e;
              return t.length;
            }),
            renderItem: (e, o, d, E) => {
              let { section: v, items: p } = f[e];
              return (0, a.match)(p[o])
                .with(I.NONE_ITEM, () =>
                  (0, r.jsxs)(
                    P,
                    {
                      style: { ...d },
                      isSelected: !h,
                      onSelect: () => l(null),
                      children: [
                        (0, r.jsx)(m.default, { className: T.notAllowedIcon }),
                        (0, r.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null != n
                              ? N.default.Messages
                                  .USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT
                              : N.default.Messages.NONE,
                        }),
                      ],
                    },
                    E
                  )
                )
                .with(I.SHOP_ITEM, () =>
                  (0, r.jsxs)(
                    P,
                    {
                      style: d,
                      onSelect: u,
                      children: [
                        (0, r.jsx)(C.default, { className: T.shopIcon }),
                        (0, r.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children: N.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    },
                    E
                  )
                )
                .otherwise(e => {
                  let n = s === e.id;
                  return (0, r.jsx)(
                    M,
                    {
                      user: t,
                      style: { ...d },
                      section: v,
                      profileEffect: e,
                      innerRef: n ? i : void 0,
                      isSelected: n,
                      onSelect: () => l(e.id),
                    },
                    E
                  );
                });
            },
            renderSection: e => {
              let { header: t } = f[e];
              return (0, r.jsx)("div", {
                style: { height: "".concat(16, "px") },
                children: (0, r.jsx)(c.FormTitle, { children: t }),
              });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
              var n, r;
              return null !==
                (r =
                  null === (n = f[e].items[t]) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== r
                ? r
                : null;
            },
            getItemHeight: x,
            removeEdgeItemGutters: !0,
          }),
        });
      };
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return m;
          },
          useCanStartPublicThread: function () {
            return p;
          },
          computeCanStartPublicThread: function () {
            return g;
          },
          useCanStartPrivateThread: function () {
            return _;
          },
          useCanStartThread: function () {
            return S;
          },
          useCanViewThreadForMessage: function () {
            return A;
          },
          useHasActiveThreads: function () {
            return N;
          },
          useCanManageThread: function () {
            return T;
          },
          useCanUnarchiveThread: function () {
            return P;
          },
          canUnarchiveThread: function () {
            return M;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return L;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return w;
          },
          computeIsReadOnlyThread: function () {
            return O;
          },
          useIsThreadModerator: function () {
            return j;
          },
          useCanJoinThreadVoice: function () {
            return y;
          },
          useIsNonModInLockedThread: function () {
            return F;
          },
        });
      var r = n("917351"),
        s = n.n(r),
        i = n("316693"),
        l = n("446674"),
        a = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        C = n("401690"),
        v = n("49111");
      let m = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function p(e, t) {
        let n = (0, l.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? v.Permissions.SEND_MESSAGES
              : i.default.combine(
                  v.Permissions.CREATE_PUBLIC_THREADS,
                  v.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return I(n, e, t);
      }
      function g(e, t) {
        let n = e.isForumLikeChannel()
            ? v.Permissions.SEND_MESSAGES
            : i.default.combine(
                v.Permissions.CREATE_PUBLIC_THREADS,
                v.Permissions.READ_MESSAGE_HISTORY
              ),
          r = h.default.can(n, e);
        return I(r, e, t);
      }
      function _(e) {
        let t = (0, l.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              i.default.combine(v.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === v.ChannelTypes.GUILD_TEXT && I(t, e);
      }
      function S(e) {
        let t = p(e),
          n = _(e);
        return t || n;
      }
      function I(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(v.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function A(e) {
        let t = (0, l.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => h.default.can(v.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(v.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function N(e) {
        return (0, l.useStateFromStoresObject)([C.default, h.default], () => {
          let t = C.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = C.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = C.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            i = s(n).some(e =>
              h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = s(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = s(r).some(e => h.default.can(v.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: i || l || a,
            hasMoreActiveThreads: a || l,
          };
        });
      }
      function T(e) {
        let t = (0, l.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(v.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function R(e, t) {
        return null != e && t.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function x(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function P(e) {
        let t = (0, l.useStateFromStores)([h.default], () => R(e, h.default)),
          n = j(e);
        return x(e, t, n);
      }
      function M(e) {
        let t = R(e, h.default),
          n = (function (e) {
            return b(e, h.default);
          })(e);
        return x(e, t, n);
      }
      function L(e) {
        var t;
        let n = (0, l.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function w(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function O(e) {
        let t = h.default.can(v.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function b(e, t) {
        return null != e && t.can(v.Permissions.MANAGE_THREADS, e);
      }
      function j(e) {
        return (0, l.useStateFromStores)([h.default], () => b(e, h.default));
      }
      function y(e) {
        let t = (0, o.default)(),
          n = (0, l.useStateFromStores)([h.default], () =>
            h.default.can(v.Permissions.CONNECT, e)
          ),
          r = L(e),
          s = m.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && s && n && r;
      }
      function F(e) {
        let t = j(e);
        return e.isLockedThread() && !t;
      }
    },
    415167: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("77078"),
        i = n("49111");
      function l() {
        (0, s.openModalLazy)(async () => {
          let { default: e } = await n.el("920067").then(n.bind(n, "920067"));
          return t =>
            (0, r.jsx)(e, {
              ...t,
              source: {
                page: i.AnalyticsPages.USER_SETTINGS,
                section: i.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                object: i.AnalyticsObjects.BUTTON_CTA,
                type: i.AnalyticsObjectTypes.BUY,
              },
            });
        });
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983"),
        s = n("884691"),
        i = n("414456"),
        l = n.n(i),
        a = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: i,
            flowerStarClassName: c,
            ...d
          } = e,
          f = s.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, r.jsxs)("div", {
          className: l(u.flowerStarContainer, i),
          style: { width: n, height: n },
          children: [
            (0, r.jsx)(o.default, { ...d, className: l(c, u.flowerStar) }),
            (0, r.jsx)("div", {
              className: l(u.childContainer, {
                [u.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      function s(e) {
        let { size: t, horizontal: n = !1 } = e,
          s = n ? t : 1,
          i = n ? 1 : t;
        return (0, r.jsx)("span", {
          style: {
            display: "block",
            width: s,
            minWidth: s,
            height: i,
            minHeight: i,
          },
        });
      }
      n("884691");
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("414456"),
        i = n.n(s),
        l = n("384737"),
        a = n("448052"),
        o = n("748802"),
        u = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        E = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: s = 24,
              color: E = "currentColor",
              transition: C = f.transition,
              className: v,
              foreground: m,
              expanded: p,
              ...g
            } = e,
            { enabled: _ } = (0, c.useRedesignIconContext)(),
            S = t;
          if ((!0 === p ? (S = h.DOWN) : !1 === p && (S = h.RIGHT), _)) {
            let e = {
              [h.UP]: u.ChevronSmallUpIcon,
              [h.DOWN]: l.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: o.ChevronSmallRightIcon,
            }[S];
            return (0, r.jsx)(e, {
              ...g,
              className: v,
              width: n,
              height: s,
              color: E,
              colorClass: m,
            });
          }
          return (0, r.jsx)("svg", {
            className: i(v, C, S),
            width: n,
            height: s,
            viewBox: "0 0 24 24",
            ...(0, d.default)(g),
            children: (0, r.jsx)("path", {
              className: m,
              fill: "none",
              stroke: E,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      E.Directions = h;
      var C = E;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("733154"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: i,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                className: i,
                fill: s,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          i.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("505088"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: i,
              backgroundColor: a,
              ...o
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, r.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, r.jsx)("path", {
                  fill: s,
                  className: i,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          i.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    832132: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("504318"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: s = 24,
              ...i
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(i),
              width: s,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                fill: t,
              }),
            });
          },
          i.PencilIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("469563"),
        l = n("163725"),
        a = n("75196"),
        o = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foregroundColor: l = s.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: l,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: i,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          l.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("75196"),
        i = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: i = "currentColor",
            foreground: l,
            ...a
          } = e;
          return (0, r.jsx)("svg", {
            ...(0, s.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, r.jsx)("path", {
              className: l,
              fill: i,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("75196");
      function i(e) {
        let { width: t = 104, height: n = 80, ...i } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("424823"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: i,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: s,
                className: i,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          i.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    550515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("828049"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: i,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: s,
                className: i,
                d: "M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z",
              }),
            });
          },
          i.RetryIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("390300"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: i,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: i,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          i.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("469563"),
        i = n("287083"),
        l = n("75196"),
        a = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: s = "currentColor",
              ...i
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: s,
              }),
            });
          },
          i.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return l;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var r = n("281071"),
        s = n("773336"),
        i = n("50885");
      let l = (() => {
        if (s.isPlatformEmbedded) return null != i.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!l && (s.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return a;
          },
        });
      var r = n("884691"),
        s = n("446674"),
        i = n("244201"),
        l = n("471671");
      function a() {
        let { windowId: e } = r.useContext(i.default);
        return (0, s.useStateFromStores)(
          [l.default],
          () => l.default.isFocused(e),
          [e]
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: a,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: a = "",
          color: o = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
            }),
          ],
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    102885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RetryIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: a,
          }),
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var r,
        s = n("817736"),
        i = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      r = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, s.findDOMNode)(e);
          (0, i.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = l) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("884691"),
        s = n("748820"),
        i = n("157590");
      let l = (0, s.v4)(),
        a = new Map(),
        o = new Map();
      class u extends r.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = o.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return r.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: r } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, s.v4)())
            : (this.elementId = l);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(u, new i.default({ root: t, rootMargin: n, threshold: r }));
        }
      }
      u.defaultProps = {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var c = u;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return r.default;
          },
          VisibilitySensor: function () {
            return s.default;
          },
        }),
        n("6268");
      var r = n("157590"),
        s = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          s = document.createElement("textarea");
        (s.value = e),
          (s.contentEditable = "true"),
          (s.style.visibility = "none"),
          t.appendChild(s),
          n.selectNodeContents(s),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          s.focus(),
          s.setSelectionRange(0, e.length);
        let i = document.execCommand("copy");
        return t.removeChild(s), i;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=b2aa0a9cbb8377b314e6.js.map
