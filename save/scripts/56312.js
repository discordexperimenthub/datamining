(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56312"],
  {
    87657: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          default: function () {
            return o;
          },
        });
      var r = u("37983"),
        n = u("884691"),
        i = u("77078"),
        l = u("390236"),
        o = n.memo(function (t) {
          var e, u, o, c;
          let {
              user: a,
              size: d = i.AvatarSizes.SIZE_32,
              animate: s = !1,
              "aria-hidden": f = !1,
              ..._
            } = t,
            E = n.useContext(l.default);
          return (0, r.jsx)(i.Avatar, {
            src:
              ((e = a),
              (u = (0, i.getAvatarSize)(d)),
              (o = s),
              (c = E),
              e.getAvatarURL(c, u, o)),
            size: d,
            "aria-label": f ? void 0 : a.username,
            "aria-hidden": f,
            ..._,
          });
        });
    },
    162426: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          default: function () {
            return l;
          },
        }),
        u("222007");
      var r = u("884691"),
        n = u("599417"),
        i = u("782340");
      function l(t) {
        let [e, u] = r.useState(!1),
          [l, o] = r.useState(null),
          c = r.useCallback(
            async function () {
              for (var e = arguments.length, r = Array(e), l = 0; l < e; l++)
                r[l] = arguments[l];
              try {
                return o(null), u(!0), await t(...r);
              } catch (t) {
                t.message !== i.default.Messages.MFA_V2_CANCELED &&
                  o(t instanceof n.default ? t : new n.default(t));
              } finally {
                u(!1);
              }
            },
            [t]
          );
        return [c, { loading: e, error: l }];
      }
    },
    843962: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          getChannelIconURL: function () {
            return o;
          },
        }),
        u("222007");
      var r = u("697218"),
        n = u("315102"),
        i = u("449008"),
        l = u("49111");
      function o(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          u = arguments.length > 2 ? arguments[2] : void 0;
        switch (t.type) {
          case l.ChannelTypes.DM:
            let [o] = t.recipients
              .map(r.default.getUser)
              .filter(i.isNotNullish);
            if (null == o) return null;
            return o.getAvatarURL(void 0, e, u);
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
    359366: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
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
      var r = u("913144"),
        n = u("448993"),
        i = u("242278");
      let l = async t => {
          r.default.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
          try {
            let e = await i.getGuildProductListingsForGuild(t);
            r.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: t,
              products: e,
            });
          } catch (e) {
            r.default.dispatch({
              type: "GUILD_PRODUCTS_FETCH_FAILURE",
              guildId: t,
            });
          }
        },
        o = async (t, e) => {
          r.default.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
          try {
            let u = await i.getGuildProductListing(t, e);
            return (
              r.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_SUCCESS",
                product: u,
              }),
              u
            );
          } catch (t) {
            throw (
              (r.default.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: e,
                error: new n.APIError(t),
              }),
              t)
            );
          }
        };
      async function c(t, e, u) {
        let n = await i.updateGuildProductListing(t, e, u);
        return (
          r.default.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: n }), n
        );
      }
      async function a(t, e) {
        return (
          await i.deleteGuildProductListing(t, e),
          r.default.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }),
          !0
        );
      }
    },
    442379: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
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
            return C;
          },
          useCanManageGuildProduct: function () {
            return T;
          },
        }),
        u("222007");
      var r = u("884691"),
        n = u("446674");
      u("162426");
      var i = u("619443"),
        l = u("38654"),
        o = u("957255"),
        c = u("162771"),
        a = u("359366"),
        d = u("565559"),
        s = u("49111");
      let f = t => {
          let e = (0, n.useStateFromStores)(
              [d.default],
              () =>
                null != t
                  ? d.default.getGuildProductsForGuildFetchState(t)
                  : d.FetchState.FETCHED,
              [t]
            ),
            u = (0, n.useStateFromStores)([i.default], () =>
              i.default.isConnected()
            ),
            [l, o] = r.useState(!0);
          return (
            r.useEffect(() => {
              l &&
                (e === d.FetchState.NOT_FETCHED ||
                  (e === d.FetchState.FETCHED &&
                    d.default.isGuildProductsCacheExpired(t))) &&
                u &&
                a.fetchGuildProductsForGuild(t),
                o(!u);
            }, [t, u, e, l]),
            { listingsLoaded: e === d.FetchState.FETCHED && !l }
          );
        },
        _ = function (t, e) {
          let { requireCurrentGuild: u } =
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
            r.useEffect(() => {
              let r = d.default.getGuildProductFetchState(e);
              if ((!u || o === t) && l && r === d.FetchState.NOT_FETCHED)
                try {
                  a.fetchGuildProduct(t, e);
                } catch (t) {}
            }, [t, e, l, o, u]),
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
        C = t =>
          (0, n.useStateFromStores)([d.default], () =>
            null == t ? void 0 : d.default.getGuildProduct(t)
          ),
        T = t =>
          (0, n.useStateFromStores)(
            [o.default],
            () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t)
          );
    },
    242278: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
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
      var r = u("872717"),
        n = u("448993"),
        i = u("271560"),
        l = u("49111");
      let o = async (t, e, u) => {
          let {
            priceTier: i,
            imageName: o,
            createNewRole: c,
            unlinkRole: a,
            ...d
          } = u;
          try {
            let u = await r.default.patch({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
              body: {
                ...d,
                image_name: o,
                price_tier: i,
                create_new_role: c,
                unlink_role: a,
              },
            });
            return u.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        c = async (t, e) => {
          try {
            await r.default.delete({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
            });
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
            let u = await (0, i.httpGetWithCountryCodeQuery)({
              url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
            });
            return u.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        },
        s = async t => {
          let { guildId: e, productId: u, attachmentId: i } = t;
          try {
            let t = await r.default.post({
              url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, u, i),
            });
            return t.body;
          } catch (t) {
            throw new n.APIError(t);
          }
        };
    },
    565559: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          FetchState: function () {
            return r;
          },
          default: function () {
            return h;
          },
        }),
        u("424973"),
        u("222007");
      var r,
        n,
        i = u("446674"),
        l = u("407846"),
        o = u("913144"),
        c = u("718517"),
        a = u("299039");
      ((n = r || (r = {}))[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED");
      let d = {},
        s = {},
        f = {},
        _ = 10 * c.default.Millis.MINUTE;
      function E(t) {
        return "guild:".concat(t);
      }
      function C(t) {
        return "guild:".concat(t, ":published");
      }
      let T = new l.default(
          t => {
            let e = [E(t.guild_id)];
            return t.published && e.push(C(t.guild_id)), e;
          },
          t =>
            (function (t) {
              let e = a.default.extractTimestamp(t.id);
              return t.published ? -e : -e + 1e12;
            })(t)
        ),
        D = [];
      class P extends i.default.Store {
        getGuildProductsForGuildFetchState(t) {
          var e;
          return null !== (e = d[t]) && void 0 !== e ? e : 0;
        }
        getGuildProduct(t) {
          return T.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: u } = e;
          return null == t ? D : T.values(u ? C(t) : E(t));
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
      P.displayName = "GuildProductsStore";
      var h = new P(o.default, {
        CONNECTION_OPEN: function () {
          T.clear(), (d = {}), (s = {}), (f = {});
        },
        GUILD_PRODUCTS_FETCH: function (t) {
          let { guildId: e } = t;
          d[e] = 1;
          let u = [...T.values(E(e))];
          u.forEach(t => {
            T.delete(t.id);
          });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
          let { guildId: e, products: u } = t;
          (d[e] = 2),
            (f[e] = Date.now()),
            u.forEach(t => {
              T.set(t.id, t), (s[t.id] = 2);
            });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
          let { guildId: e } = t;
          d[e] = 2;
        },
        GUILD_PRODUCT_CREATE: function (t) {
          let { product: e } = t;
          T.set(e.id, e);
        },
        GUILD_PRODUCT_UPDATE: function (t) {
          let { product: e } = t;
          T.set(e.id, e);
        },
        GUILD_PRODUCT_DELETE: function (t) {
          let { productId: e } = t;
          T.delete(e);
        },
        GUILD_PRODUCT_FETCH: function (t) {
          let { productId: e } = t;
          s[e] = 1;
        },
        GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
          let { product: e } = t;
          (s[e.id] = 2), T.set(e.id, e);
        },
        GUILD_PRODUCT_FETCH_FAILURE: function (t) {
          let { productId: e, error: u } = t;
          (s[e] = 2), 404 === u.status && T.delete(e);
        },
      });
    },
    928576: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          useProductType: function () {
            return l;
          },
          usePrice: function () {
            return o;
          },
        });
      var r = u("884691"),
        n = u("153160"),
        i = u("782340");
      function l(t) {
        return r.useMemo(() => {
          if (null == t) return;
          let e = null != t.role_id,
            u = t.attachments_count > 0;
          if (e && u)
            return i.default.Messages
              .GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
        }, [t]);
      }
      function o(t) {
        return r.useMemo(() => {
          if ((null == t ? void 0 : t.price) == null) return;
          let { amount: e, currency: u } = t.price;
          return (0, n.formatPrice)(e, u);
        }, [t]);
      }
    },
    35018: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          default: function () {
            return i;
          },
        });
      var r = u("37983");
      u("884691");
      var n = u("77078"),
        i = {
          open: function (t) {
            (0, n.openModalLazy)(async () => {
              let { default: e } = await u
                .el("560057")
                .then(u.bind(u, "560057"));
              return u => (0, r.jsx)(e, { ...t, ...u });
            });
          },
        };
    },
    489622: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          NoticeColors: function () {
            return _;
          },
          NoticeButton: function () {
            return E;
          },
          PrimaryCTANoticeButton: function () {
            return C;
          },
          NoticeButtonAnchor: function () {
            return T;
          },
          NoticeCloseButton: function () {
            return D;
          },
          default: function () {
            return P;
          },
        });
      var r = u("37983");
      u("884691");
      var n = u("414456"),
        i = u.n(n),
        l = u("394846"),
        o = u("77078"),
        c = u("945330"),
        a = u("599110"),
        d = u("49111"),
        s = u("782340"),
        f = u("125792");
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
        let { children: e, className: u, minor: n = !1, ...l } = t;
        return (0, r.jsx)(o.FocusRing, {
          children: (0, r.jsx)("button", {
            className: i(f.button, u, { [f.buttonMinor]: n }),
            ...l,
            children: e,
          }),
        });
      }
      function C(t) {
        let {
          children: e,
          noticeType: u,
          additionalTrackingProps: n,
          ...i
        } = t;
        return (0, r.jsx)(E, {
          ...i,
          onClick: t => {
            var e, r;
            null != i.onClick && i.onClick(t),
              (e = u),
              (r = n),
              null != e &&
                a.default.track(
                  d.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED,
                  { notice_type: e, ...r }
                );
          },
          children: e,
        });
      }
      function T(t) {
        let { children: e, href: u, ...n } = t;
        return (0, r.jsx)(o.Anchor, {
          ...n,
          className: f.button,
          href: u,
          children: e,
        });
      }
      function D(t) {
        let { onClick: e, noticeType: u } = t;
        return (0, r.jsx)(o.Clickable, {
          focusProps: { offset: 6 },
          className: f.closeButton,
          onClick: () => {
            var t;
            e(),
              null != (t = u) &&
                a.default.track(d.AnalyticEvents.APP_NOTICE_CLOSED, {
                  notice_type: t,
                });
          },
          "aria-label": s.default.Messages.DISMISS,
          children: (0, r.jsx)(c.default, {
            className: f.closeIcon,
            width: 18,
            height: 18,
          }),
        });
      }
      function P(t) {
        let { color: e = _.DEFAULT, className: u, style: n, children: o } = t;
        return (0, r.jsx)("div", {
          className: i(f.notice, { [f.isMobile]: l.isMobile }, u, e),
          style: null != n ? n : void 0,
          children: o,
        });
      }
    },
  },
]);
//# sourceMappingURL=56312.2df706d81dcb2c8ab314.js.map
