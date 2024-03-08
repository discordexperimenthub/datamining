(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58186"],
  {
    573777: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          openGuildProductLink: function () {
            return o;
          },
        });
      var l = u("37983");
      u("884691");
      var n = u("77078"),
        d = u("537325"),
        i = u("305961"),
        r = u("565559"),
        a = u("49111");
      function o(t, e) {
        var o;
        let c = i.default.getGuild(t);
        r.default.getGuildProductFetchState(e) === r.FetchState.FETCHED &&
        (null === (o = r.default.getGuildProduct(e)) || void 0 === o
          ? void 0
          : o.published) !== !0 &&
        null != c
          ? (0, n.openModalLazy)(async () => {
              let { default: t } = await u
                .el("651662")
                .then(u.bind(u, "651662"));
              return e => (0, l.jsx)(t, { ...e });
            })
          : (null == c
                ? void 0
                : c.hasFeature(
                    a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE
                  )) === !0
            ? (0, d.default)(a.Routes.GUILD_PRODUCT(t, e))
            : (0, d.default)(a.Routes.CHANNEL(t));
      }
    },
    565559: function (t, e, u) {
      "use strict";
      u.r(e),
        u.d(e, {
          FetchState: function () {
            return l;
          },
          default: function () {
            return F;
          },
        }),
        u("424973"),
        u("222007");
      var l,
        n,
        d = u("446674"),
        i = u("407846"),
        r = u("913144"),
        a = u("718517"),
        o = u("299039");
      ((n = l || (l = {}))[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED");
      let c = {},
        s = {},
        E = {},
        C = 10 * a.default.Millis.MINUTE;
      function f(t) {
        return "guild:".concat(t);
      }
      function _(t) {
        return "guild:".concat(t, ":published");
      }
      let T = new i.default(
          t => {
            let e = [f(t.guild_id)];
            return t.published && e.push(_(t.guild_id)), e;
          },
          t =>
            (function (t) {
              let e = o.default.extractTimestamp(t.id);
              return t.published ? -e : -e + 1e12;
            })(t)
        ),
        D = [];
      class U extends d.default.Store {
        getGuildProductsForGuildFetchState(t) {
          var e;
          return null !== (e = c[t]) && void 0 !== e ? e : 0;
        }
        getGuildProduct(t) {
          return T.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: u } = e;
          return null == t ? D : T.values(u ? _(t) : f(t));
        }
        getGuildProductFetchState(t) {
          var e;
          return null !== (e = s[t]) && void 0 !== e ? e : 0;
        }
        isGuildProductsCacheExpired(t) {
          var e;
          return Date.now() - (null !== (e = E[t]) && void 0 !== e ? e : 0) > C;
        }
      }
      U.displayName = "GuildProductsStore";
      var F = new U(r.default, {
        CONNECTION_OPEN: function () {
          T.clear(), (c = {}), (s = {}), (E = {});
        },
        GUILD_PRODUCTS_FETCH: function (t) {
          let { guildId: e } = t;
          c[e] = 1;
          let u = [...T.values(f(e))];
          u.forEach(t => {
            T.delete(t.id);
          });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
          let { guildId: e, products: u } = t;
          (c[e] = 2),
            (E[e] = Date.now()),
            u.forEach(t => {
              T.set(t.id, t), (s[t.id] = 2);
            });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
          let { guildId: e } = t;
          c[e] = 2;
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
  },
]);
//# sourceMappingURL=bc50188dbdbe15b0be73.js.map
