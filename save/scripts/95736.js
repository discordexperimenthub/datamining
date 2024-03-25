(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95736"],
  {
    766665: function (e, t, n) {
      var i = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && i
          ? i(e, t, {
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
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("446674"),
        o = n("77078"),
        u = n("102985"),
        a = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        h = n("168540");
      function v(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let m = e => {
        let {
          primary: t,
          secondary: n,
          botType: r,
          botVerified: s,
          discriminatorClass: u,
          className: c,
          usernameClass: d,
          color: v,
          botClass: m,
          showStreamerModeTooltip: C,
        } = e;
        return (0, i.jsxs)("div", {
          className: l(h.info, c),
          children: [
            (0, i.jsx)(o.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: C,
              "aria-label": !!C && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: l(h.username, d),
                  style: null != v ? { color: v } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: l(h.infoSpacing, u),
                  children: n,
                })
              : void 0,
            null != r &&
              (0, i.jsx)(a.default, {
                type: r,
                className: l(h.infoSpacing, m),
                verified: s,
              }),
          ],
        });
      };
      var C = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: l,
            showAccountIdentifier: o,
            overrideDiscriminator: a,
            forcePomelo: f,
            ...h
          } = e,
          C = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          E = C || t || n.isNonUserBot(),
          g = n.toString(),
          p = d.default.getName(n),
          S = l ? g : null != r ? r : p,
          _ = n.isPomelo() || f;
        if (_ || S !== g) {
          let e =
              S === g && _ && l
                ? d.default.getUserTag(n, { forcePomelo: f })
                : S,
            t = o && e !== "@".concat(g) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(m, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: v(n),
            showStreamerModeTooltip: C && e !== p,
            ...h,
          });
        }
        return (0, i.jsx)(c.default, {
          name: S,
          botType: v(n),
          botVerified: n.isVerifiedBot(),
          discriminator: E || S !== g ? null : null != a ? a : n.discriminator,
          ...h,
        });
      };
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("76527");
      n.es(i, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("506070");
      n.es(i, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("962821");
      n.es(i, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("632874");
      n.es(i, t);
    },
    828049: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("102885");
      n.es(i, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("618807");
      n.es(i, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("28289");
      n.es(i, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("882039");
      n.es(i, t);
    },
    462274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useColorStore: function () {
            return d;
          },
          maybeFetchColors: function () {
            return f;
          },
          default: function () {
            return v;
          },
          useAvatarColors: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("656280"),
        l = n.n(r),
        s = n("308503"),
        o = n("446674"),
        u = n("206230"),
        a = n("284679"),
        c = n("103603");
      let d = (0, s.default)(() => ({ palette: {}, fetching: {} }));
      async function f(e) {
        null == d.getState().palette[e] && (await h(e));
      }
      async function h(e) {
        if (!d.getState().fetching[e]) {
          d.setState(t => ({ fetching: { ...t.fetching, [e]: !0 } }));
          try {
            let t = await (0, c.getPaletteForAvatar)(e),
              n = (0, a.getComplimentaryPaletteForColor)(t[0]);
            d.setState(i => ({
              fetching: { ...i.fetching, [e]: !1 },
              palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
            }));
          } catch (t) {
            d.setState(t => ({ fetching: { ...t.fetching, [e]: !1 } }));
          }
        }
      }
      function v(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [i] = m(e, t, n);
        return i;
      }
      function m(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          r = d(t => (null == e ? void 0 : t.palette[e])),
          s = (0, o.useStateFromStores)([u.default], () =>
            n && u.default.desaturateUserColors ? u.default.saturation : 1
          );
        i.useEffect(() => {
          null != e && null == r && h(e);
        }, [e, r]);
        let a = i.useMemo(
          () =>
            null == r
              ? void 0
              : r.map(e => {
                  let [t, n, i] = e,
                    { h: r, s: o, l: u } = l({ r: t, g: n, b: i }).toHsl();
                  return l({ h: r, s: o * s, l: u }).toHexString();
                }),
          [r, s]
        );
        return null != a ? a : [t, t];
      }
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
      var i = n("446674"),
        r = n("845962"),
        l = n("501768"),
        s = n("235898");
      function o() {
        let {
            isFetching: e,
            error: t,
            categories: n,
            purchases: o,
          } = (0, s.default)(),
          [u, a, c] = (0, i.useStateFromStoresArray)([r.default], () => [
            r.default.isFetching,
            r.default.fetchError,
            r.default.profileEffects,
          ]);
        return (
          (0, l.default)(!0),
          {
            isFetching: e || u,
            error: null != t ? t : a,
            profileEffects: c,
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
            return l;
          },
        });
      var i = n("446674"),
        r = n("76393");
      function l() {
        return (0, i.useStateFromStores)(
          [r.default],
          () =>
            null != r.default.getRemoteSessionId() ||
            null != r.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("884691");
      let r = i.createContext(void 0);
      var l = r;
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
            return v;
          },
          canGuildUseRoleIcons: function () {
            return m;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
        l = n("315102"),
        s = n("773336"),
        o = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, s.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
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
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let s = l.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(s, "?")
                .concat(d)
                .concat(f)
            : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        v = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(a, "/roles")) && e.includes("/icons/")),
        m = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(o.GuildFeatures.ROLE_ICONS);
        };
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return s;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var i = n("316693"),
        r = n("923510"),
        l = n("49111");
      let s = l.Permissions.VIEW_CHANNEL,
        o = i.combine(s, l.Permissions.CONNECT),
        u = i.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    650484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
          PaymentPortalBody: function () {
            return m;
          },
          PaymentPortalFooter: function () {
            return C;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("627445"),
        u = n.n(o),
        a = n("817736"),
        c = n.n(a),
        d = n("77078"),
        f = n("642906"),
        h = n("304006");
      function v(e) {
        var t, n, l, o, a, c;
        let {
            header: v,
            isLargeModal: m,
            stepProps: C,
          } = (function (e) {
            let { header: t, isLargeModal: n, ...i } = e;
            return { header: t, isLargeModal: n, stepProps: i };
          })(e),
          {
            step: E,
            stepConfigs: g,
            setBodyNode: p,
            setFooterNode: S,
            setModalOverlayNode: _,
            setReadySlideId: I,
          } = (0, f.usePaymentContext)(),
          P = g.find(e => e.key === E);
        r.useEffect(() => {
          _(null);
        }, [E, _]),
          u(null != P, "Unknown step for current payment flow.");
        let A =
            null !==
              (a =
                null == P
                  ? void 0
                  : null === (t = P.options) || void 0 === t
                    ? void 0
                    : t.hideSlider) &&
            void 0 !== a &&
            a,
          T =
            null == P
              ? void 0
              : null === (n = P.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          N =
            void 0 !== m && m
              ? h.sliderBodyLarge
              : null == P
                ? void 0
                : null === (l = P.options) || void 0 === l
                  ? void 0
                  : l.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null ===
              (c =
                null == P
                  ? void 0
                  : null === (o = P.options) || void 0 === o
                    ? void 0
                    : o.renderHeader) ||
            void 0 === c ||
            c
              ? v
              : null,
            P.renderStep(C),
            null == E || A
              ? null
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(d.ModalContent, {
                      className: s(h.body, T),
                      children: (0, i.jsx)(d.Slides, {
                        activeSlide: E,
                        centered: !1,
                        onSlideReady: e => I(e),
                        children: g
                          .filter(e => null != e.key)
                          .map(e =>
                            (0, i.jsx)(
                              d.Slide,
                              {
                                id: e.key,
                                children: (0, i.jsx)("form", {
                                  className: s(h.sliderBody, N),
                                  ref: e => p(e),
                                  onSubmit: e => e.preventDefault(),
                                }),
                              },
                              e.key
                            )
                          ),
                      }),
                    }),
                    (0, i.jsx)("div", { ref: e => S(e) }),
                    (0, i.jsx)("div", { ref: e => _(e) }),
                  ],
                }),
          ],
        });
      }
      function m(e) {
        let { children: t } = e,
          { bodyNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n);
      }
      function C(e) {
        let { children: t } = e,
          { footerNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n);
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return v;
          },
          getManageResourcePermissions: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
        l = n("446674"),
        s = n("813006");
      n("923959");
      var o = n("957255"),
        u = n("697218");
      n("991170");
      var a = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, i) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
          if ("userId" in e) return i && null != t && e.userId === t.id;
          if ("user" in e) {
            var r;
            return (
              i &&
              null != t &&
              (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = a.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = a.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = a.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              r.combine(t, c.Permissions.CREATE_EVENTS),
              r.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        v = e => {
          let [t, n] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [r, a, v, m] = (0, l.useStateFromStoresArray)([o.default], () => [
              o.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              o.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              o.default.can(t, e),
              o.default.can(n, e),
            ]),
            C = (0, l.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            E = i.useCallback(e => f(e, C, a, r), [r, a, C]),
            g = i.useCallback(e => f(e, C, m, v), [m, v, C]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: v,
                canManageAllExpressions: a,
                canManageAllEvents: m,
                canManageGuildExpression: E,
                canManageGuildEvent: g,
              };
        },
        m = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : o.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [i, r] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            a = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            v = t.can(i, e),
            m = t.can(r, e),
            C = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: v,
                canManageAllExpressions: a,
                canManageAllEvents: m,
                canManageGuildExpression: e => f(e, C, a, l),
                canManageGuildEvent: e => f(e, C, m, v),
              };
        };
    },
    831308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Section: function () {
            return i;
          },
          NONE_ITEM: function () {
            return v;
          },
          SHOP_ITEM: function () {
            return m;
          },
          default: function () {
            return C;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var i,
        r,
        l = n("884691"),
        s = n("917351"),
        o = n("65597"),
        u = n("853987"),
        a = n("775416"),
        c = n("491232"),
        d = n("697218"),
        f = n("719923"),
        h = n("782340");
      ((r = i || (i = {})).PURCHASE = "purchase"),
        (r.PREMIUM_PURCHASE = "premium_purchase"),
        (r.PREVIEW = "preview");
      let v = { id: "None" },
        m = { id: "Shop" };
      var C = () => {
        let e = (0, o.useStateFromStores)([d.default], () =>
            d.default.getCurrentUser()
          ),
          t = f.default.canUseCollectibles(e),
          n = (0, o.useStateFromStores)([a.default], () => a.default.purchases),
          [i, r] = (0, o.useStateFromStoresArray)([u.default], () => [
            u.default.categories,
            u.default.products,
          ]);
        return (0, l.useMemo)(() => {
          let e = (0, s.uniqBy)(
              [
                ...(0, c.getProfileEffectsFromPurchases)(n),
                ...(0, c.getProfileEffectsFromCategories)(i),
              ],
              "id"
            ),
            l = e.reduce(
              (e, i) => {
                let l = n.get(i.skuId),
                  s = (0, c.isPremiumCollectiblesPurchase)(l);
                if (s) return e.premium_purchase.push(i), e;
                if (null != l) return e.purchase.push(i), e;
                if (!t && (0, c.isPremiumCollectiblesProduct)(r.get(i.skuId))) {
                  let t = e.premium_purchase;
                  return t.push(i), e;
                }
                return e.preview.push(i), e;
              },
              { purchase: [], premium_purchase: [], preview: [] }
            );
          return [
            {
              section: "purchase",
              items: [v, m, ...l.purchase],
              height: 12,
              header:
                h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER,
            },
            {
              section: "premium_purchase",
              items: l.premium_purchase,
              height: 12,
              header:
                h.default.Messages
                  .CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER,
            },
            {
              section: "preview",
              items: l.preview,
              height: 12,
              header:
                h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER,
            },
          ].filter(e => {
            let { items: t } = e;
            return t.length > 0;
          });
        }, [i, r, n, t]);
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
      var i = n("37983"),
        r = n("884691"),
        l = n("265586"),
        s = n("446674"),
        o = n("77078"),
        u = n("812204"),
        a = n("685665"),
        c = n("21526"),
        d = n("491232"),
        f = n("984002"),
        h = n("161009"),
        v = n("635956"),
        m = n("906932"),
        C = n("697218"),
        E = n("599110"),
        g = n("719923"),
        p = n("717262"),
        S = n("598854"),
        _ = n("49111"),
        I = n("646718"),
        P = n("782340"),
        A = n("810473");
      function T(e) {
        let {
            user: t,
            product: n,
            purchase: l,
            onApply: s,
            onClose: a,
            disableApplyButton: f,
            canUseCollectibles: h,
            selectedProfileEffectId: m,
            selectedProfileEffectItem: C,
            analyticsLocations: E,
          } = e,
          p = r.useCallback(() => {
            a(),
              (0, c.openCollectiblesShop)({
                analyticsLocations: E,
                analyticsSource: u.default.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != C ? C.skuId : void 0,
              });
          }, [a, E, C]);
        return (0, i.jsx)(o.ModalFooter, {
          className: A.modalFooter,
          children: (0, i.jsxs)("div", {
            className: A.buttonsRight,
            children: [
              (0, i.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                color: o.Button.Colors.PRIMARY,
                onClick: a,
                children: P.default.Messages.CANCEL,
              }),
              (() => {
                let e =
                  null != l && (!(0, d.isPremiumCollectiblesPurchase)(l) || h);
                if (e || null === m)
                  return (0, i.jsx)(o.Button, {
                    onClick: s,
                    disabled: f,
                    children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY,
                  });
                let r = h || !(0, d.isPremiumCollectiblesProduct)(n);
                return r
                  ? (0, i.jsx)(o.Button, {
                      className: A.modalFooterShopButton,
                      onClick: p,
                      children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    })
                  : (0, i.jsx)(v.default, {
                      subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                      buttonText: g.default.isPremium(t)
                        ? P.default.Messages
                            .USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL
                        : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                    });
              })(),
            ],
          }),
        });
      }
      function N(e) {
        let {
            user: t,
            guild: n,
            categories: l,
            purchases: s,
            onClose: u,
            initialSelectedProfileEffectId: a,
            currentSavedEffectId: c,
            analyticsLocations: h,
          } = e,
          { pendingProfileEffectId: v } = (0,
          m.useGlobalOrGuildIdentityPendingProfileEffect)(n),
          [C, E] = r.useMemo(() => {
            let e = (0, d.groupProfileEffects)(l, s);
            return [e.purchased, e.shopPreviews];
          }, [l, s]),
          [_, I] = r.useState(() =>
            null != a
              ? a
              : void 0 !== v
                ? v
                : null == c
                  ? null
                  : null != c
                    ? c
                    : null
          ),
          [N, x] = r.useMemo(() => {
            var e;
            let t = C.find(e => (null == e ? void 0 : e.id) === _),
              n = null != t || null === _,
              i =
                null !==
                  (e =
                    null != t
                      ? t
                      : E.find(e => (null == e ? void 0 : e.id) === _)) &&
                void 0 !== e
                  ? e
                  : null;
            return [i, n];
          }, [_, C, E]),
          { product: M, purchase: R } = (0, f.default)(
            null == N ? void 0 : N.skuId
          ),
          b = r.useRef(null),
          y = g.default.canUseCollectibles(t),
          L = _ === (void 0 === v ? (null != c ? c : null) : v),
          w = r.useCallback(
            e => {
              I(e);
            },
            [I]
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              separator: !1,
              className: A.modalHeader,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: P.default.Messages.PROFILE_EFFECT_MODAL_HEADER,
                }),
                (0, i.jsx)(o.ModalCloseButton, {
                  className: A.modalCloseButton,
                  onClick: u,
                }),
              ],
            }),
            (0, i.jsxs)(o.ModalContent, {
              className: A.modalContent,
              children: [
                (0, i.jsx)(S.default, {
                  user: t,
                  guild: n,
                  pendingProfileEffect: _,
                  selectedProfileEffectRef: b,
                  onSelect: w,
                  onClose: u,
                }),
                (0, i.jsx)(p.default, {
                  user: t,
                  canApplySelectedChange: x,
                  pendingProfileEffectRecord: N,
                  product: M,
                  purchase: R,
                  guild: n,
                }),
              ],
            }),
            (0, i.jsx)(T, {
              user: t,
              onApply: () => {
                (0, m.setNewPendingProfileEffectId)(_, c, n), u();
              },
              onClose: u,
              product: M,
              purchase: R,
              canUseCollectibles: y,
              selectedProfileEffectId: _,
              selectedProfileEffectItem: N,
              disableApplyButton: L,
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
            onClose: v,
          } = e,
          { isFetching: g, categories: p, purchases: S } = (0, h.default)(),
          I = (0, s.useStateFromStores)([C.default], () =>
            C.default.getCurrentUser()
          ),
          { analyticsLocations: P } = (0, a.default)(
            n,
            u.default.EDIT_PROFILE_EFFECT_MODAL
          ),
          T = (0, m.useGlobalOrGuildIdentityProfileEffect)(I, f);
        return (
          r.useEffect(() => {
            E.default.track(_.AnalyticEvents.OPEN_MODAL, {
              type: _.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
              location_stack: P,
            });
          }, [P]),
          r.useEffect(
            () => () => {
              (0, c.setCollectiblesCategoryItemsViewed)({
                categories: [...p.values()],
                itemTypes: [l.CollectiblesItemType.PROFILE_EFFECT],
              });
            },
            [p]
          ),
          (0, i.jsx)(a.AnalyticsLocationProvider, {
            value: P,
            children: (0, i.jsx)(o.ModalRoot, {
              transitionState: t,
              size: o.ModalSize.DYNAMIC,
              className: A.modal,
              children: g
                ? (0, i.jsx)(o.Spinner, {
                    className: A.spinner,
                    type: o.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, i.jsx)(N, {
                    user: I,
                    guild: f,
                    categories: p,
                    purchases: S,
                    initialSelectedProfileEffectId: d,
                    currentSavedEffectId: T,
                    onClose: v,
                    analyticsLocations: P,
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
      var i = n("37983");
      n("884691");
      var r = n("446674"),
        l = n("77078"),
        s = n("152584"),
        o = n("853987"),
        u = n("491232"),
        a = n("929423"),
        c = n("424562"),
        d = n("884351"),
        f = n("184900"),
        h = n("783142"),
        v = n("217513"),
        m = n("915639"),
        C = n("845579"),
        E = n("415167"),
        g = n("790618"),
        p = n("697218");
      n("550515");
      var S = n("719923"),
        _ = n("782340"),
        I = n("619986");
      let P = e => {
          var t;
          let {
              effectIsOwned: n,
              pendingProfileEffectRecord: s,
              product: a,
              purchase: c,
            } = e,
            d = (0, r.useStateFromStores)([p.default], () =>
              p.default.getCurrentUser()
            ),
            f = (0, r.useStateFromStores)([o.default], () =>
              o.default.getProduct(null == s ? void 0 : s.skuId)
            ),
            h = (0, r.useStateFromStores)([m.default], () => m.default.locale),
            v = S.default.canUseCollectibles(d),
            C = (0, u.isPremiumCollectiblesPurchase)(c),
            E = (0, u.isPremiumCollectiblesProduct)(a),
            g = A(!v && C, E, v);
          return null != s
            ? (0, i.jsx)("div", {
                className: n
                  ? I.effectDescriptionNoGradient
                  : I.effectDescriptionBorderWithGradient,
                children: (0, i.jsxs)("div", {
                  className: I.effectDescriptionContainer,
                  children: [
                    (0, i.jsx)(l.Text, {
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
                    (0, i.jsx)(l.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      className: I.effectDescription,
                      children: null != c ? c.summary : g,
                    }),
                    null != c &&
                      (0, i.jsxs)(l.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        className: I.effectPurchasedAt,
                        children: [
                          _.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: c.purchasedAt.toLocaleDateString(h, {
                              month: "long",
                              year: "numeric",
                            }),
                          }),
                          C &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("br", {}),
                                _.default.Messages
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
        A = (e, t, n) =>
          e
            ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED
            : t && n
              ? _.default.Messages
                  .CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
              : t && !n
                ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER
                : _.default.Messages
                    .CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
      var T = e => {
        var t;
        let {
            user: n,
            pendingProfileEffectRecord: l,
            canApplySelectedChange: o,
            product: u,
            purchase: m,
            guild: p,
          } = e,
          {
            pendingGlobalName: _,
            pendingNickname: A,
            pendingPronouns: T,
            pendingBio: N,
            pendingBanner: x,
            pendingAvatar: M,
            pendingAvatarDecoration: R,
            pendingThemeColors: b,
            pendingAccentColor: y,
          } = (0, r.useStateFromStoresObject)([c.default, g.default], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != p
              ? c.default.getAllPending()
              : g.default.getAllPending()),
          })),
          L = S.default.isPremium(n),
          w = (0, v.default)(n.id),
          j = !!(null == w ? void 0 : w.getPreviewBio(N).value),
          O = C.UseLegacyChatInput.useSetting(),
          F = O && null != N ? d.default.parse(void 0, N).content : N,
          V = S.default.canUsePremiumProfileCustomization(n),
          U = (null == w ? void 0 : w.canUsePremiumProfileCustomization) || V,
          D = {
            user: n,
            guild: p,
            pendingGlobalName: _,
            pendingNickname: A,
            pendingPronouns: T,
            pendingBio: F,
            pendingBanner: x,
            useLargeBanner: !0,
            pendingAvatar: M,
            pendingAvatarDecoration: R,
            pendingThemeColors: b,
            pendingAccentColor: y,
            pendingProfileEffectId:
              null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                ? t
                : null,
            hideFakeActivity: j,
            canUsePremiumCustomization: V,
            onUpsellClick: E.default,
            onAvatarChange: null != p ? a.setPendingAvatar : s.setPendingAvatar,
            onBannerChange: h.setPendingBanner,
          };
        return (0, i.jsxs)("div", {
          className: U
            ? I.previewContainerWithTheme
            : I.previewContainerWithoutTheme,
          children: [
            (0, i.jsx)(f.default, {
              ...D,
              disabledInputs: !0,
              forProfileEffectModal: !0,
            }),
            !1,
            (0, i.jsx)(P, {
              effectIsOwned: o,
              pendingProfileEffectRecord: l,
              product: u,
              purchase: m,
              userIsPremium: L,
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
            return y;
          },
        }),
        n("222007"),
        n("794252");
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("506838"),
        u = n("171210"),
        a = n("65597"),
        c = n("77078"),
        d = n("54239"),
        f = n("853987"),
        h = n("426497"),
        v = n("491232"),
        m = n("743826"),
        C = n("216422"),
        E = n("468759"),
        g = n("600785"),
        p = n("956089"),
        S = n("719923"),
        _ = n("845962"),
        I = n("501768"),
        P = n("831308"),
        A = n("49111"),
        T = n("782340"),
        N = n("971864"),
        x = n("513002");
      let M = () => 80,
        R = e => {
          let { children: t, className: n, isSelected: r = !1, ...l } = e;
          return (0, i.jsx)(c.Clickable, {
            className: s(N.effectGridItem, n, { [N.selected]: r }),
            ...l,
            onClick: l.onSelect,
            children: t,
          });
        },
        b = e => {
          var t;
          let {
              user: n,
              profileEffect: l,
              innerRef: s,
              section: o,
              isSelected: c,
              ...d
            } = e,
            m = (0, a.useStateFromStores)([_.default], () =>
              _.default.getProfileEffectById(l.id)
            );
          (0, I.default)(null == m);
          let E = (0, a.useStateFromStores)([f.default], () => {
              let e = f.default.getProduct(l.skuId);
              return (0, v.isPremiumCollectiblesProduct)(e);
            }),
            A = (0, a.useStateFromStores)([h.default], () =>
              h.default.isItemViewed(l)
            ),
            M = r.useRef(null),
            {
              accessibilityLabel: b,
              thumbnailPreviewSrc: y,
              title: L,
            } = null !== (t = null == m ? void 0 : m.config) && void 0 !== t
              ? t
              : {},
            w = S.default.canUseCollectibles(n),
            j = o === P.Section.PREMIUM_PURCHASE && !w,
            [O, F] = r.useState(c);
          return (
            r.useEffect(() => {
              c && F(!0);
            }, [c]),
            (0, i.jsxs)(R, {
              className: j && !c ? N.decorationGridItemChurned : void 0,
              innerRef: null != s ? s : M,
              isSelected: c,
              ...d,
              children: [
                (0, i.jsx)("img", {
                  src: x,
                  alt: b,
                  className: N.presetEffectBackground,
                }),
                (0, i.jsx)("img", {
                  className: N.presetEffectImg,
                  src: y,
                  alt: L,
                }),
                (() => {
                  let e =
                    o === P.Section.PURCHASE ||
                    (o === P.Section.PREMIUM_PURCHASE && w);
                  if (e) return null;
                  let t = !A && !c && !O;
                  return t
                    ? (0, i.jsx)(p.PremiumBadge, {
                        className: N.newBadge,
                        text: (0, i.jsxs)("div", {
                          className: N.newBadgeText,
                          children: [
                            (0, i.jsx)(g.default, { width: 12, height: 12 }),
                            T.default.Messages.NEW,
                          ],
                        }),
                      })
                    : (0, i.jsx)(p.IconBadge, {
                        icon: E
                          ? () =>
                              (0, i.jsx)(C.default, { width: 14, height: 14 })
                          : () =>
                              (0, i.jsx)(g.default, { width: 12, height: 12 }),
                        color: u.default.BACKGROUND_ACCENT,
                        className: N.lockBadge,
                      });
                })(),
              ],
            })
          );
        };
      var y = e => {
        let {
            user: t,
            guild: n,
            pendingProfileEffect: r,
            selectedProfileEffectRef: l,
            onSelect: s,
            onClose: u,
          } = e,
          a = () => {
            u(), (0, d.pushLayer)(A.Layers.COLLECTIBLES_SHOP);
          },
          f = (0, P.default)(),
          h = null != r;
        return (0, i.jsx)("section", {
          children: (0, i.jsx)(c.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: N.list,
            columns: 3,
            sections: f.map(e => {
              let { items: t } = e;
              return t.length;
            }),
            renderItem: (e, u, d, v) => {
              let { section: C, items: g } = f[e];
              return (0, o.match)(g[u])
                .with(P.NONE_ITEM, () =>
                  (0, i.jsxs)(
                    R,
                    {
                      style: { ...d },
                      isSelected: !h,
                      onSelect: () => s(null),
                      children: [
                        (0, i.jsx)(E.default, { className: N.notAllowedIcon }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children:
                            null != n
                              ? T.default.Messages
                                  .USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT
                              : T.default.Messages.NONE,
                        }),
                      ],
                    },
                    v
                  )
                )
                .with(P.SHOP_ITEM, () =>
                  (0, i.jsxs)(
                    R,
                    {
                      style: d,
                      onSelect: a,
                      children: [
                        (0, i.jsx)(m.default, { className: N.shopIcon }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-primary",
                          children: T.default.Messages.COLLECTIBLES_SHOP,
                        }),
                      ],
                    },
                    v
                  )
                )
                .otherwise(e => {
                  let n = r === e.id;
                  return (0, i.jsx)(
                    b,
                    {
                      user: t,
                      style: { ...d },
                      section: C,
                      profileEffect: e,
                      innerRef: n ? l : void 0,
                      isSelected: n,
                      onSelect: () => s(e.id),
                    },
                    v
                  );
                });
            },
            renderSection: e => {
              let { header: t } = f[e];
              return (0, i.jsx)("div", {
                style: { height: "".concat(16, "px") },
                children: (0, i.jsx)(c.FormTitle, { children: t }),
              });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
              var n, i;
              return null !==
                (i =
                  null === (n = f[e].items[t]) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== i
                ? i
                : null;
            },
            getItemHeight: M,
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
            return E;
          },
          useCanStartPublicThread: function () {
            return g;
          },
          computeCanStartPublicThread: function () {
            return p;
          },
          useCanStartPrivateThread: function () {
            return S;
          },
          useCanStartThread: function () {
            return _;
          },
          useCanViewThreadForMessage: function () {
            return P;
          },
          useHasActiveThreads: function () {
            return A;
          },
          useCanManageThread: function () {
            return T;
          },
          useCanUnarchiveThread: function () {
            return M;
          },
          canUnarchiveThread: function () {
            return R;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return b;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          computeIsReadOnlyThread: function () {
            return L;
          },
          useIsThreadModerator: function () {
            return j;
          },
          useCanJoinThreadVoice: function () {
            return O;
          },
          useIsNonModInLockedThread: function () {
            return F;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        l = n("316693"),
        s = n("446674"),
        o = n("296892"),
        u = n("889014"),
        a = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        v = n("299039"),
        m = n("401690"),
        C = n("49111");
      let E = (0, o.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function g(e, t) {
        let n = (0, s.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? C.Permissions.SEND_MESSAGES
              : l.combine(
                  C.Permissions.CREATE_PUBLIC_THREADS,
                  C.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return I(n, e, t);
      }
      function p(e, t) {
        let n = e.isForumLikeChannel()
            ? C.Permissions.SEND_MESSAGES
            : l.combine(
                C.Permissions.CREATE_PUBLIC_THREADS,
                C.Permissions.READ_MESSAGE_HISTORY
              ),
          i = h.default.can(n, e);
        return I(i, e, t);
      }
      function S(e) {
        let t = (0, s.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(l.combine(C.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === C.ChannelTypes.GUILD_TEXT && I(t, e);
      }
      function _(e) {
        let t = g(e),
          n = S(e);
        return t || n;
      }
      function I(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(C.MessageFlags.HAS_THREAD) || (0, a.default)(n)))
          ) && !0
        );
      }
      function P(e) {
        let t = (0, s.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(v.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => h.default.can(C.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(C.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function A(e) {
        return (0, s.useStateFromStoresObject)([m.default, h.default], () => {
          let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            l = r(n).some(e =>
              h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = r(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)
            ),
            o = r(i).some(e => h.default.can(C.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: l || s || o,
            hasMoreActiveThreads: o || s,
          };
        });
      }
      function T(e) {
        let t = (0, s.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(C.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function N(e, t) {
        return null != e && t.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function x(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function M(e) {
        let t = (0, s.useStateFromStores)([h.default], () => N(e, h.default)),
          n = j(e);
        return x(e, t, n);
      }
      function R(e) {
        let t = N(e, h.default),
          n = (function (e) {
            return w(e, h.default);
          })(e);
        return x(e, t, n);
      }
      function b(e) {
        var t;
        let n = (0, s.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function y(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function L(e) {
        let t = h.default.can(C.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function w(e, t) {
        return null != e && t.can(C.Permissions.MANAGE_THREADS, e);
      }
      function j(e) {
        return (0, s.useStateFromStores)([h.default], () => w(e, h.default));
      }
      function O(e) {
        let t = (0, u.default)(),
          n = (0, s.useStateFromStores)([h.default], () =>
            h.default.can(C.Permissions.CONNECT, e)
          ),
          i = b(e),
          r = E.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function F(e) {
        let t = j(e);
        return e.isLockedThread() && !t;
      }
    },
    811907: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var i,
        r = n("906932"),
        l = n("315102"),
        s = n("719923"),
        o = n("646718");
      function u(e, t) {
        return null == t || "" === t ? e : t;
      }
      i = class {
        get premiumSince() {
          return this._userProfile.premiumSince;
        }
        get premiumGuildSince() {
          return this._userProfile.premiumGuildSince;
        }
        get premiumType() {
          return this._userProfile.premiumType;
        }
        get primaryColor() {
          var e, t;
          return null !==
            (t =
              null === (e = this.themeColors) || void 0 === e
                ? void 0
                : e[0]) && void 0 !== t
            ? t
            : this.accentColor;
        }
        get canUsePremiumProfileCustomization() {
          return s.default.isPremiumAtLeast(
            this.premiumType,
            o.PremiumTypes.TIER_2
          );
        }
        get canEditThemes() {
          return this.canUsePremiumProfileCustomization;
        }
        get application() {
          return this._userProfile.application;
        }
        hasThemeColors() {
          var e, t;
          return (
            (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) !=
              null ||
            (null === (t = this.themeColors) || void 0 === t ? void 0 : t[1]) !=
              null
          );
        }
        hasPremiumCustomization() {
          return (
            this.isUsingGuildMemberBanner() ||
            this.isUsingGuildMemberBio() ||
            null != this.banner ||
            this.hasThemeColors() ||
            null != this.popoutAnimationParticleType
          );
        }
        hasFullProfile() {
          return (
            void 0 !== this._userProfile &&
            (null == this.guildId || void 0 !== this._guildMemberProfile)
          );
        }
        isUsingGuildMemberBanner() {
          var e;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.banner) != null
          );
        }
        isUsingGuildMemberBio() {
          var e, t;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.bio) != null &&
            (null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.bio) !== ""
          );
        }
        isUsingGuildMemberPronouns() {
          var e, t;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.pronouns) != null &&
            (null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.pronouns) !== ""
          );
        }
        getBannerURL(e) {
          let { canAnimate: t, size: n } = e;
          return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, l.getGuildMemberBannerURL)({
                id: this.userId,
                guildId: this.guildId,
                banner: this.banner,
                canAnimate: t,
                size: n,
              })
            : (0, l.getUserBannerURL)({
                id: this.userId,
                banner: this.banner,
                canAnimate: t,
                size: n,
              });
        }
        getPreviewBanner(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 480;
          return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                ? (0, l.getUserBannerURL)({
                    id: this.userId,
                    banner: this._userProfile.banner,
                    canAnimate: t,
                    size: n,
                  })
                : null
              : this.getBannerURL({ canAnimate: t, size: 480 });
        }
        getPreviewBio(e) {
          var t;
          return (0, r.getProfilePreviewField)(
            e,
            null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.bio,
            this._userProfile.bio,
            null != this.guildId
          );
        }
        getPreviewThemeColors(e) {
          return (null == e ? void 0 : e[0]) != null &&
            (null == e ? void 0 : e[1]) != null
            ? e
            : void 0 !== e
              ? this._userProfile.themeColors
              : this.themeColors;
        }
        getBadges() {
          var e, t, n;
          return [
            ...(null !== (t = this._userProfile.badges) && void 0 !== t
              ? t
              : []),
            ...(null !==
              (n =
                null === (e = this._guildMemberProfile) || void 0 === e
                  ? void 0
                  : e.badges) && void 0 !== n
              ? n
              : []),
          ];
        }
        getLegacyUsername() {
          return this._userProfile.legacyUsername;
        }
        constructor(e, t) {
          var n, i, r, l;
          (this.userId = e.userId),
            (this.guildId = null == t ? void 0 : t.guildId),
            (this.banner =
              null !== (n = null == t ? void 0 : t.banner) && void 0 !== n
                ? n
                : e.banner),
            (this.bio = u(e.bio, null == t ? void 0 : t.bio)),
            (this.pronouns = u(e.pronouns, null == t ? void 0 : t.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors =
              null !== (i = null == t ? void 0 : t.themeColors) && void 0 !== i
                ? i
                : e.themeColors),
            (this.popoutAnimationParticleType =
              null !==
                (r = null == t ? void 0 : t.popoutAnimationParticleType) &&
              void 0 !== r
                ? r
                : e.popoutAnimationParticleType),
            (this.profileEffectId =
              null !== (l = null == t ? void 0 : t.profileEffectId) &&
              void 0 !== l
                ? l
                : e.profileEffectId),
            (this._userProfile = e),
            (this._guildMemberProfile = t);
        }
      };
    },
    506885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("913144"),
        r = n("327037"),
        l = n("462274"),
        s = n("535013"),
        o = n("501768"),
        u = n("42203"),
        a = n("26989"),
        c = n("713135"),
        d = n("386714");
      async function f(e, t) {
        var n, f, h;
        let v,
          {
            withMutualGuilds: m = !1,
            withMutualFriendsCount: C = !1,
            friendToken: E,
            preloadUserBanner: g = !0,
            dispatchWait: p = !1,
            guildId: S,
            channelId: _,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
        if ("" === e) return;
        (0, o.getOrFetchProfileEffects)(),
          null != t && (0, l.maybeFetchColors)(t),
          null != S && !m && (m = !0),
          null != S &&
            (v =
              null !==
                (f =
                  null ===
                    (n = (0, s.getVisibleConnectionsRole)({
                      guildMember: a.default.getMember(S, e),
                      channel: u.default.getChannel(_),
                    })) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== f
                ? f
                : void 0);
        let I = c.default.getUserProfile(e),
          P = c.default.getMutualGuilds(e),
          A = c.default.getMutualFriendsCount(e),
          T = c.default.isFetchingProfile(e),
          N =
            (null == I ? void 0 : I.profileFetchFailed) ||
            (!T && ((!Array.isArray(P) && m) || (null == A && C))),
          x = g ? d.default : void 0,
          M = !1;
        if (null != S) {
          let t = c.default.getGuildMemberProfile(e, S);
          M = null == t;
        }
        !(
          !N &&
          !M &&
          (T ||
            Date.now() -
              (null !== (h = null == I ? void 0 : I.lastFetched) && void 0 !== h
                ? h
                : 0) <
              6e4)
        ) &&
          (p
            ? await i.default.wait(() =>
                (0, r.fetchProfile)(
                  e,
                  {
                    withMutualGuilds: m,
                    withMutualFriendsCount: C,
                    friendToken: E,
                    guildId: S,
                    connectionsRoleId: v,
                  },
                  x
                )
              )
            : await (0, r.fetchProfile)(
                e,
                {
                  withMutualGuilds: m,
                  withMutualFriendsCount: C,
                  friendToken: E,
                  guildId: S,
                  connectionsRoleId: v,
                },
                x
              ));
      }
    },
    386714: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("845579"),
        r = n("217513");
      function l(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, r.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let l = i.GifAutoPlay.getSetting(),
          s = n.getBannerURL({ canAnimate: l, size: 480 });
        if (null == s) return;
        let o = new Image();
        o.src = s;
      }
    },
    217513: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          getDisplayProfile: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("446674"),
        r = n("697218"),
        l = n("117362"),
        s = n("811907"),
        o = n("713135");
      function u(e, t) {
        return (0, i.useStateFromStores)([r.default, o.default], () =>
          c(e, t, [r.default, o.default])
        );
      }
      let a = (0, l.cachedFunction)((e, t) => new s.default(e, t));
      function c(e, t) {
        let [n, i] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [r.default, o.default],
          l = n.getUser(e),
          s = i.getUserProfile(e),
          u = i.getGuildMemberProfile(e, t);
        return null == l || null == s ? null : a(s, u);
      }
    },
    415167: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("49111");
      function s() {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.el("920067").then(n.bind(n, "920067"));
          return t =>
            (0, i.jsx)(e, {
              ...t,
              source: {
                page: l.AnalyticsPages.USER_SETTINGS,
                section: l.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                object: l.AnalyticsObjects.BUTTON_CTA,
                type: l.AnalyticsObjectTypes.BUY,
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
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("77078"),
        u = n("760607"),
        a = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = r.Children.only(t),
          h = (0, o.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(a.flowerStarContainer, l),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(u.default, { ...d, className: s(c, a.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(a.childContainer, {
                [a.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    754474: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BotTypes: function () {
            return o.BotTagTypes;
          },
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("79798"),
        o = n("988268"),
        u = n("293005"),
        a = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: o,
            className: a,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: h,
            botVerified: v = !1,
            style: m,
            useRemSizes: C = !1,
            usernameIcon: E,
          } = e;
          return (0, i.jsxs)("div", {
            className: l(a, u.nameTag),
            style: m,
            children: [
              (0, i.jsxs)("span", {
                className: l(u.username, d),
                style: null != o ? { color: o } : void 0,
                children: [E, t],
              }),
              null != n
                ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, i.jsx)(s.default, {
                    type: c,
                    invertColor: r,
                    className: l(h, u.bot),
                    verified: v,
                    useRemSizes: C,
                  })
                : null,
            ],
          });
        };
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      function r(e) {
        let { size: t, horizontal: n = !1 } = e,
          r = n ? t : 1,
          l = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: r,
            minWidth: r,
            height: l,
            minHeight: l,
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
            return m;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("384737"),
        o = n("448052"),
        u = n("748802"),
        a = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        v = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: r = 24,
              color: v = "currentColor",
              transition: m = f.transition,
              className: C,
              foreground: E,
              expanded: g,
              ...p
            } = e,
            { enabled: S } = (0, c.useRedesignIconContext)(),
            _ = t;
          if ((!0 === g ? (_ = h.DOWN) : !1 === g && (_ = h.RIGHT), S)) {
            let e = {
              [h.UP]: a.ChevronSmallUpIcon,
              [h.DOWN]: s.ChevronSmallDownIcon,
              [h.LEFT]: o.ChevronSmallLeftIcon,
              [h.RIGHT]: u.ChevronSmallRightIcon,
            }[_];
            return (0, i.jsx)(e, {
              ...p,
              className: C,
              width: n,
              height: r,
              color: v,
              colorClass: E,
            });
          }
          return (0, i.jsx)("svg", {
            className: l(C, m, _),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(p),
            children: (0, i.jsx)("path", {
              className: E,
              fill: "none",
              stroke: v,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      v.Directions = h;
      var m = v;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("733154"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: l,
                fill: r,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          l.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("505088"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              backgroundColor: o,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != o
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: o })
                  : null,
                (0, i.jsx)("path", {
                  fill: r,
                  className: l,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          l.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    832132: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("504318"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: r = 24,
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: r,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                fill: t,
              }),
            });
          },
          l.PencilIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("469563"),
        s = n("163725"),
        o = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foregroundColor: s = r.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: a,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, o.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: s,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: l,
                  className: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          s.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196"),
        l = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: l = "currentColor",
            foreground: s,
            ...o
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: s,
              fill: l,
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
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function l(e) {
        let { width: t = 104, height: n = 80, ...l } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(l),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, i.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, i.jsx)("path", {
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
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("424823"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: l,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          l.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    550515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("828049"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: l,
                d: "M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z",
              }),
            });
          },
          l.RetryIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("390300"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: l,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          l.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("287083"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: r = "currentColor",
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: r,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return s;
          },
          copy: function () {
            return o;
          },
        }),
        n("70102");
      var i = n("281071"),
        r = n("773336"),
        l = n("50885");
      let s = (() => {
        if (r.isPlatformEmbedded) return null != l.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function o(e) {
        return (
          !!s && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return o;
          },
        });
      var i = n("884691"),
        r = n("446674"),
        l = n("244201"),
        s = n("471671");
      function o() {
        let { windowId: e } = i.useContext(l.default);
        return (0, r.useStateFromStores)(
          [s.default],
          () => s.default.isFocused(e),
          [e]
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: o,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: o = "",
          color: u = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: a,
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
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: o,
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
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: o,
          }),
        });
      };
    },
    102885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RetryIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: o,
          }),
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: o,
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
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: o,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return s;
          },
        }),
        n("222007");
      var i = n("817736"),
        r = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      class s {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, i.findDOMNode)(e);
          (0, r.isElement)(n, HTMLElement) &&
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
      }
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilitySensor: function () {
            return a;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        r = n("748820"),
        l = n("157590");
      let s = (0, r.v4)(),
        o = new Map(),
        u = new Map();
      class a extends i.Component {
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
            t = u.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? o.has(t)
              ? (this.elementId = o.get(t) || "")
              : o.set(t, (0, r.v4)())
            : (this.elementId = s);
          let a = this.getVisibilityObserverId();
          !u.has(a) &&
            u.set(
              a,
              new l.VisibilityObserver({ root: t, rootMargin: n, threshold: i })
            );
        }
      }
      a.defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return i.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return r.VisibilitySensor;
          },
        }),
        n("6268");
      var i = n("157590"),
        r = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function i(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          i = window.getSelection(),
          r = document.createElement("textarea");
        (r.value = e),
          (r.contentEditable = "true"),
          (r.style.visibility = "none"),
          t.appendChild(r),
          n.selectNodeContents(r),
          null == i || i.removeAllRanges(),
          null == i || i.addRange(n),
          r.focus(),
          r.setSelectionRange(0, e.length);
        let l = document.execCommand("copy");
        return t.removeChild(r), l;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return i;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=0586adf77ac35899091b.js.map
