(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56312"],
  {
    87657: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return o;
          },
        });
      var u = r("37983"),
        n = r("884691"),
        i = r("77078"),
        l = r("390236"),
        o = n.memo(function (t) {
          var e, r, o, c;
          let {
              user: a,
              size: d = i.AvatarSizes.SIZE_32,
              animate: s = !1,
              "aria-hidden": f = !1,
              ..._
            } = t,
            E = n.useContext(l.default);
          return (0, u.jsx)(i.Avatar, {
            src:
              ((e = a),
              (r = (0, i.getAvatarSize)(d)),
              (o = s),
              (c = E),
              e.getAvatarURL(c, r, o)),
            size: d,
            "aria-label": f ? void 0 : a.username,
            "aria-hidden": f,
            ..._,
          });
        });
    },
    162426: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return l;
          },
        }),
        r("222007");
      var u = r("884691"),
        n = r("599417"),
        i = r("782340");
      function l(t) {
        let [e, r] = u.useState(!1),
          [l, o] = u.useState(null),
          c = u.useCallback(
            async function () {
              for (var e = arguments.length, u = Array(e), l = 0; l < e; l++)
                u[l] = arguments[l];
              try {
                return o(null), r(!0), await t(...u);
              } catch (t) {
                t.message !== i.default.Messages.MFA_V2_CANCELED &&
                  o(t instanceof n.default ? t : new n.default(t));
              } finally {
                r(!1);
              }
            },
            [t]
          );
        return [c, { loading: e, error: l }];
      }
    },
    843962: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          getChannelIconURL: function () {
            return o;
          },
        }),
        r("222007");
      var u = r("697218"),
        n = r("315102"),
        i = r("449008"),
        l = r("49111");
      function o(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          r = arguments.length > 2 ? arguments[2] : void 0;
        switch (t.type) {
          case l.ChannelTypes.DM:
            let [o] = t.recipients
              .map(u.default.getUser)
              .filter(i.isNotNullish);
            if (null == o) return null;
            return o.getAvatarURL(void 0, e, r);
          case l.ChannelTypes.GROUP_DM:
            return n.default.getChannelIconURL({
              id: t.id,
              icon: t.icon,
              applicationId: t.getApplicationId(),
              size: e,
            });
        }
      }
    },
    359366: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          fetchGuildProductsForGuild: function () {
            return l;
          },
          fetchGuildProduct: function () {
            return o;
          },
          updateGuildProductListing: function () {
            return c;
          },
          deleteGuildProductListing: function () {
            return a;
          },
        });
      var u = r("913144"),
        n = r("448993"),
        i = r("242278");
      let l = async t => {
          u.default.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
          try {
            let e = await i.getGuildProductListingsForGuild(t);
            u.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: t,
              products: e,
            });
          } catch (e) {
            u.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_FAILURE",
              guildId: t,
            });
          }
        },
        o = async (t, e) => {
          u.default.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
          try {
            let r = await i.getGuildProductListing(t, e);
            return (
              u.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_SUCCESS",
                product: r,
              }),
              r
            );
          } catch (t) {
            throw (
              (u.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: e,
                error: new n.APIError(t),
              }),
              t)
            );
          }
        };
      async function c(t, e, r) {
        let n = await i.updateGuildProductListing(t, e, r);
        return (
          u.default.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: n }), n
        );
      }
      async function a(t, e) {
        return (
          await i.deleteGuildProductListing(t, e),
          u.default.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }),
          !0
        );
      }
    },
    442379: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          useFetchGuildProductListingsForGuild: function () {
            return f;
          },
          useFetchGuildProductListing: function () {
            return _;
          },
          useGuildProductsForGuild: function () {
            return E;
          },
          useGuildProductListingById: function () {
            return T;
          },
          useCanManageGuildProduct: function () {
            return C;
          },
        }),
        r("222007");
      var u = r("884691"),
        n = r("446674");
      r("162426");
      var i = r("619443"),
        l = r("38654"),
        o = r("957255"),
        c = r("162771"),
        a = r("359366"),
        d = r("565559"),
        s = r("49111");
      let f = t => {
          let e = (0, n.useStateFromStores)(
              [d.default],
              () =>
                null != t
                  ? d.default.getGuildProductsForGuildFetchState(t)
                  : d.FetchState.FETCHED,
              [t]
            ),
            r = (0, n.useStateFromStores)([i.default], () =>
              i.default.isConnected()
            ),
            [l, o] = u.useState(!0);
          return (
            u.useEffect(() => {
              l &&
                (e === d.FetchState.NOT_FETCHED ||
                  (e === d.FetchState.FETCHED &&
                    d.default.isGuildProductsCacheExpired(t))) &&
                r &&
                a.fetchGuildProductsForGuild(t),
                o(!r);
            }, [t, r, e, l]),
            { listingsLoaded: e === d.FetchState.FETCHED && !l }
          );
        },
        _ = function (t, e) {
          let { requireCurrentGuild: r } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            l = (0, n.useStateFromStores)([i.default], () =>
              i.default.isConnected()
            ),
            o = (0, n.useStateFromStores)([c.default], () =>
              c.default.getGuildId()
            );
          return (
            u.useEffect(() => {
              let u = d.default.getGuildProductFetchState(e);
              if ((!r || o === t) && l && u === d.FetchState.NOT_FETCHED)
                try {
                  a.fetchGuildProduct(t, e);
                } catch (t) {}
            }, [t, e, l, o, r]),
            (0, n.useStateFromStores)([d.default], () =>
              d.default.getGuildProduct(e)
            )
          );
        },
        E = function (t) {
          let { publishedOnly: e } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, n.useStateFromStores)([d.default, l.default], () =>
            d.default.getGuildProductsForGuild(t, {
              publishedOnly: null != e ? e : !l.default.isViewingServerShop(t),
            })
          );
        },
        T = t =>
          (0, n.useStateFromStores)([d.default], () =>
            null == t ? void 0 : d.default.getGuildProduct(t)
          ),
        C = t =>
          (0, n.useStateFromStores)(
            [o.default],
            () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t)
          );
    },
    242278: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          updateGuildProductListing: function () {
            return o;
          },
          deleteGuildProductListing: function () {
            return c;
          },
          getGuildProductListingsForGuild: function () {
            return a;
          },
          getGuildProductListing: function () {
            return d;
          },
          requestDownloadUrl: function () {
            return s;
          },
        });
      var u = r("872717"),
        n = r("448993"),
        i = r("271560"),
        l = r("49111");
      let o = async (t, e, r) => {
          let {
            priceTier: i,
            imageName: o,
            createNewRole: c,
            unlinkRole: a,
            ...d
          } = r;
          try {
            let r = await u.HTTP.patch({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
              body: {
                ...d,
                image_name: o,
                price_tier: i,
                create_new_role: c,
                unlink_role: a,
              },
            });
            return r.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        c = async (t, e) => {
          try {
            await u.HTTP.del({ url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e) });
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        a = async t => {
          try {
            let e = await (0, i.httpGetWithCountryCodeQuery)({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t),
            });
            return e.body.listings;
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        d = async (t, e) => {
          try {
            let r = await (0, i.httpGetWithCountryCodeQuery)({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
            });
            return r.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        s = async t => {
          let { guildId: e, productId: r, attachmentId: i } = t;
          try {
            let t = await u.HTTP.post({
              url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, r, i),
            });
            return t.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        };
    },
    565559: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          FetchState: function () {
            return u;
          },
          default: function () {
            return h;
          },
        }),
        r("424973"),
        r("222007");
      var u,
        n,
        i = r("446674"),
        l = r("407846"),
        o = r("913144"),
        c = r("718517"),
        a = r("299039");
      ((n = u || (u = {}))[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED");
      let d = {},
        s = {},
        f = {},
        _ = 10 * c.default.Millis.MINUTE;
      function E(t) {
        return "guild:".concat(t);
      }
      function T(t) {
        return "guild:".concat(t, ":published");
      }
      let C = new l.default(
          t => {
            let e = [E(t.guild_id)];
            return t.published && e.push(T(t.guild_id)), e;
          },
          t =>
            (function (t) {
              let e = a.default.extractTimestamp(t.id);
              return t.published ? -e : -e + 1e12;
            })(t)
        ),
        P = [];
      class D extends i.default.Store {
        getGuildProductsForGuildFetchState(t) {
          var e;
          return null !== (e = d[t]) && void 0 !== e ? e : 0;
        }
        getGuildProduct(t) {
          return C.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: r } = e;
          return null == t ? P : C.values(r ? T(t) : E(t));
        }
        getGuildProductFetchState(t) {
          var e;
          return null !== (e = s[t]) && void 0 !== e ? e : 0;
        }
        isGuildProductsCacheExpired(t) {
          var e;
          return Date.now() - (null !== (e = f[t]) && void 0 !== e ? e : 0) > _;
        }
      }
      D.displayName = "GuildProductsStore";
      var h = new D(o.default, {
        CONNECTION_OPEN: function () {
          C.clear(), (d = {}), (s = {}), (f = {});
        },
        GUILD_PRODUCTS_FETCH: function (t) {
          let { guildId: e } = t;
          d[e] = 1;
          let r = [...C.values(E(e))];
          r.forEach(t => {
            C.delete(t.id);
          });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
          let { guildId: e, products: r } = t;
          (d[e] = 2),
            (f[e] = Date.now()),
            r.forEach(t => {
              C.set(t.id, t), (s[t.id] = 2);
            });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
          let { guildId: e } = t;
          d[e] = 2;
        },
        GUILD_PRODUCT_CREATE: function (t) {
          let { product: e } = t;
          C.set(e.id, e);
        },
        GUILD_PRODUCT_UPDATE: function (t) {
          let { product: e } = t;
          C.set(e.id, e);
        },
        GUILD_PRODUCT_DELETE: function (t) {
          let { productId: e } = t;
          C.delete(e);
        },
        GUILD_PRODUCT_FETCH: function (t) {
          let { productId: e } = t;
          s[e] = 1;
        },
        GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
          let { product: e } = t;
          (s[e.id] = 2), C.set(e.id, e);
        },
        GUILD_PRODUCT_FETCH_FAILURE: function (t) {
          let { productId: e, error: r } = t;
          (s[e] = 2), 404 === r.status && C.delete(e);
        },
      });
    },
    928576: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          useProductType: function () {
            return l;
          },
          usePrice: function () {
            return o;
          },
        });
      var u = r("884691"),
        n = r("153160"),
        i = r("782340");
      function l(t) {
        return u.useMemo(() => {
          if (null == t) return;
          let e = null != t.role_id,
            r = t.attachments_count > 0;
          if (e && r)
            return i.default.Messages
              .GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (r) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
        }, [t]);
      }
      function o(t) {
        return u.useMemo(() => {
          if ((null == t ? void 0 : t.price) == null) return;
          let { amount: e, currency: r } = t.price;
          return (0, n.formatPrice)(e, r);
        }, [t]);
      }
    },
    35018: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return i;
          },
        });
      var u = r("37983");
      r("884691");
      var n = r("77078"),
        i = {
          open: function (t) {
            (0, n.openModalLazy)(async () => {
              let { default: e } = await r
                .el("560057")
                .then(r.bind(r, "560057"));
              return r => (0, u.jsx)(e, { ...t, ...r });
            });
          },
        };
    },
    489622: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          NoticeColors: function () {
            return _;
          },
          NoticeButton: function () {
            return E;
          },
          PrimaryCTANoticeButton: function () {
            return T;
          },
          NoticeButtonAnchor: function () {
            return C;
          },
          NoticeCloseButton: function () {
            return P;
          },
          default: function () {
            return D;
          },
        });
      var u = r("37983");
      r("884691");
      var n = r("414456"),
        i = r.n(n),
        l = r("394846"),
        o = r("77078"),
        c = r("945330"),
        a = r("599110"),
        d = r("49111"),
        s = r("782340"),
        f = r("125792");
      let _ = Object.freeze({
        DEFAULT: f.colorDefault,
        NEUTRAL: f.colorNeutral,
        BRAND: f.colorBrand,
        WARNING: f.colorWarning,
        DANGER: f.colorDanger,
        INFO: f.colorInfo,
        STREAMER_MODE: f.colorStreamerMode,
        CUSTOM: f.colorCustom,
        SPOTIFY: f.colorSpotify,
        PLAYSTATION: f.colorPlayStation,
        PREMIUM_TIER_0: f.colorPremiumTier0,
        PREMIUM_TIER_1: f.colorPremiumTier1,
        PREMIUM_TIER_2: f.colorPremiumTier2,
      });
      function E(t) {
        let { children: e, className: r, minor: n = !1, ...l } = t;
        return (0, u.jsx)(o.FocusRing, {
          children: (0, u.jsx)("button", {
            className: i(f.button, r, { [f.buttonMinor]: n }),
            ...l,
            children: e,
          }),
        });
      }
      function T(t) {
        let {
          children: e,
          noticeType: r,
          additionalTrackingProps: n,
          ...i
        } = t;
        return (0, u.jsx)(E, {
          ...i,
          onClick: t => {
            var e, u;
            null != i.onClick && i.onClick(t),
              (e = r),
              (u = n),
              null != e &&
                a.default.track(
                  d.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED,
                  { notice_type: e, ...u }
                );
          },
          children: e,
        });
      }
      function C(t) {
        let { children: e, href: r, ...n } = t;
        return (0, u.jsx)(o.Anchor, {
          ...n,
          className: f.button,
          href: r,
          children: e,
        });
      }
      function P(t) {
        let { onClick: e, noticeType: r } = t;
        return (0, u.jsx)(o.Clickable, {
          focusProps: { offset: 6 },
          className: f.closeButton,
          onClick: () => {
            var t;
            e(),
              null != (t = r) &&
                a.default.track(d.AnalyticEvents.APP_NOTICE_CLOSED, {
                  notice_type: t,
                });
          },
          "aria-label": s.default.Messages.DISMISS,
          children: (0, u.jsx)(c.default, {
            className: f.closeIcon,
            width: 18,
            height: 18,
          }),
        });
      }
      function D(t) {
        let { color: e = _.DEFAULT, className: r, style: n, children: o } = t;
        return (0, u.jsx)("div", {
          className: i(f.notice, { [f.isMobile]: l.isMobile }, r, e),
          style: null != n ? n : void 0,
          children: o,
        });
      }
    },
  },
]);
//# sourceMappingURL=56312.de5e10995d461bc7f27e.js.map
