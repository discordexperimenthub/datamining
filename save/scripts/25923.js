(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25923"],
  {
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    247431: function (e, t, n) {
      "use strict";
      e.exports = n.p + "12c09c71eb271a47bcab.svg";
    },
    529115: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ea67b1321e3d4154e476.svg";
    },
    599964: function (e, t, n) {
      "use strict";
      e.exports = n.p + "87ce0c8ff87b3951af60.png";
    },
    667818: function (e, t, n) {
      "use strict";
      e.exports = n.p + "13d4a20830c1f447ad85.svg";
    },
    516395: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0ea8260dd049f3be6f41.svg";
    },
    655361: function (e, t, n) {
      "use strict";
      e.exports = n.p + "77da9836b1bc41486aeb.svg";
    },
    64847: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c038718481fa8dc048db.svg";
    },
    675384: function (e, t, n) {
      "use strict";
      e.exports = n.p + "796df921d2df9b74d231.svg";
    },
    842397: function (e, t, n) {
      "use strict";
      e.exports = n.p + "25fe25ac4c0fa2db7287.png";
    },
    856081: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3610f6f27aba39c71911.png";
    },
    203450: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a4fc2040888d2d0a25bf.png";
    },
    16759: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0e84d192ba4f48d8b1e4.png";
    },
    672453: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1bf3560d5f044c945b91.png";
    },
    110209: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b39307de7b7798615bf4.png";
    },
    210318: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b0b17713c80d9d10e884.png";
    },
    923699: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6837714c5000d0735b6b.png";
    },
    106897: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d7b5187a25e8797b3fcb.svg";
    },
    280220: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8f28bee10efad470960c.svg";
    },
    156807: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3d880387e95767d8fe6a.svg";
    },
    83310: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bb9a11c6c6eeca585c1d.svg";
    },
    287112: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b3f7e22e48bfd5292636.svg";
    },
    446963: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f129970a62476663733f.svg";
    },
    423739: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3d0eb2e70e53c6495c6f.svg";
    },
    22079: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ec848654c14e218d5fa2.svg";
    },
    655279: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c586aac99de98cfb010d.svg";
    },
    481292: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4bb5bd02b0b61d8c8cca.svg";
    },
    636974: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openModal: function () {
            return a;
          },
          updateQuery: function () {
            return s;
          },
          inviteChannel: function () {
            return i;
          },
          inviteUser: function () {
            return r;
          },
        });
      var l = n("913144");
      function a(e, t) {
        return new Promise(n => {
          setTimeout(() => {
            l.default.dispatch({
              type: "ACTIVITY_INVITE_MODAL_OPEN",
              activity: e,
              isPrivate: t,
              resolve: n,
            });
          }, 0);
        });
      }
      function s(e) {
        l.default.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
      }
      function i(e) {
        l.default.dispatch({
          type: "ACTIVITY_INVITE_MODAL_SEND",
          channelId: e,
        });
      }
      function r(e) {
        l.default.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
      }
    },
    340626: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          createAlgoliaIndex: function () {
            return g;
          },
          doAlgoliaSearch: function () {
            return function e(t, n) {
              let l =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                {
                  categoryId: a = C.DISCOVERY_ALL_CATEGORIES_ID,
                  preferredLocale: s,
                  offset: c,
                  length: p,
                  tag: m,
                } = n,
                g = d.default.getSearchIndex();
              if (null == g) return;
              l &&
                !(function (e) {
                  let {
                      query: t,
                      preferredLocale: n,
                      offset: l,
                      limit: a,
                      categoryId: s,
                      tag: r,
                    } = e,
                    u = (0, o.getHistory)(),
                    d = i.stringify({
                      query: t,
                      offset: l,
                      limit: a,
                      preferredLocale: n,
                      categoryId: s,
                      tag: r,
                    }),
                    c = u.location.search,
                    f = null != c && c.length > 0 && c.startsWith("?"),
                    C = !f || (c.startsWith("?") && c.split("?")[1] !== d);
                  C &&
                    (0, o.transitionTo)(h.Routes.GUILD_DISCOVERY, {
                      search: d,
                    });
                })({
                  query: t,
                  preferredLocale: s,
                  offset: c,
                  limit: p,
                  categoryId: a,
                  tag: m,
                }),
                u.default.dispatch({
                  type: "GUILD_DISCOVERY_SEARCH_FETCH_START",
                  section: h.GuildDiscoverySections.SEARCH,
                  query: t,
                  categoryId: a,
                });
              let I = Object.assign({}, E, n.filters),
                _ = Object.keys(I),
                S = _.map(e => "".concat(e).concat(I[e]));
              a !== C.DISCOVERY_ALL_CATEGORIES_ID &&
                S.push(
                  "(primary_category_id="
                    .concat(a, " OR categories.id=")
                    .concat(a, ")")
                );
              let N = S.join(" AND ");
              try {
                let i = g.search(t, {
                    filters: N,
                    optionalFilters: ["preferred_locale: ".concat(s)],
                    length: p,
                    offset: c,
                    restrictSearchableAttributes: [
                      "name",
                      "description",
                      "keywords",
                      "categories.name",
                      "categories.name_localizations.".concat(s),
                      "primary_category.name",
                      "primary_category.name_localizations.".concat(s),
                      "vanity_url_code",
                    ],
                  }),
                  o = r.default.get({
                    url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
                    query: { term: t },
                    oldFormErrors: !0,
                  });
                Promise.all([i, o])
                  .then(e => {
                    let [
                      { hits: n, nbHits: l },
                      {
                        body: { valid: s },
                      },
                    ] = e;
                    u.default.dispatch({
                      type: "GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS",
                      section: h.GuildDiscoverySections.SEARCH,
                      query: t,
                      categoryId: a,
                      guilds: s
                        ? [...n.map(e => ({ ...e, id: e.objectID }))]
                        : [],
                      offset: c,
                      limit: p,
                      total: s
                        ? Math.min(l, C.MAX_ALGOLIA_PAGINATOR_RESULTS)
                        : 0,
                    });
                  })
                  .catch(s => {
                    s.body.retry_after > 0 && g === d.default.getSearchIndex()
                      ? setTimeout(() => {
                          e(t, n, l);
                        }, s.body.retry_after * f.default.Millis.SECOND)
                      : u.default.dispatch({
                          type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
                          section: h.GuildDiscoverySections.SEARCH,
                          categoryId: a,
                          query: t,
                        });
                  });
              } catch (e) {
                u.default.dispatch({
                  type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
                  section: h.GuildDiscoverySections.SEARCH,
                  categoryId: a,
                  query: t,
                });
              }
            };
          },
          getSearchResultsCount: function () {
            return I;
          },
          fetchPopularGuildsForCategory: function () {
            return _;
          },
          fetchFeaturedOrPopularGuilds: function () {
            return S;
          },
          fetchGamesYouPlayGuilds: function () {
            return N;
          },
          clearSearch: function () {
            return T;
          },
          selectCategory: function () {
            return A;
          },
        }),
        n("424973"),
        n("222007");
      var l = n("542455"),
        a = n("472086"),
        s = n.n(a),
        i = n("522632"),
        r = n("872717"),
        u = n("913144"),
        o = n("393414"),
        d = n("926787"),
        c = n("251013"),
        f = n("718517"),
        h = n("49111"),
        C = n("447621");
      let p = window.GLOBAL_ENV.ALGOLIA_KEY,
        m =
          "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "prod_discoverable_guilds"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "stg_discoverable_guilds"
              : "dev_discoverable_guilds",
        E = {
          "auto_removed:": !1,
          approximate_presence_count: "> 0",
          approximate_member_count: "> 0",
        };
      function g() {
        if (null == p) return;
        let e = s("NKTZZ4AIZU", p, {
            responsesCache: (0, l.createNullCache)(),
          }),
          t = e.initIndex(m);
        u.default.wait(() =>
          u.default.dispatch({ type: "GUILD_DISCOVERY_SEARCH_INIT", index: t })
        );
      }
      function I(e, t) {
        let n = d.default.getSearchIndex();
        if (null == n) return;
        let l = Object.assign({}, E, t),
          a = Object.keys(l),
          s = a.map(e => "".concat(e).concat(l[e]));
        try {
          let t = n.search(e, {
              filters: s.join(" AND "),
              facets: ["categories.id"],
            }),
            l = r.default.get({
              url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
              query: { term: e },
              oldFormErrors: !0,
            });
          Promise.all([t, l]).then(t => {
            let [
              { nbHits: n, facets: l },
              {
                body: { valid: a },
              },
            ] = t;
            u.default.dispatch({
              type: "GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS",
              query: e,
              nbHits: a ? n : 0,
              facets: a ? l : void 0,
            });
          });
        } catch (t) {
          u.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_COUNTS_FAIL",
            query: e,
          });
        }
      }
      async function _(e) {
        u.default.dispatch({
          type: "GUILD_DISCOVERY_POPULAR_FETCH_START",
          categoryId: e,
        });
        try {
          let t = await r.default.get({
              url: h.Endpoints.GUILD_DISCOVERY,
              query: i.stringify({ categories: [e] }),
              oldFormErrors: !0,
            }),
            { guilds: n } = t.body;
          u.default.dispatch({
            type: "GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS",
            categoryId: e,
            guilds: n,
          });
        } catch (t) {
          u.default.dispatch({
            type: "GUILD_DISCOVERY_POPULAR_FETCH_FAILURE",
            categoryId: e,
          });
        }
      }
      async function S(e, t) {
        u.default.dispatch({
          type: "GUILD_DISCOVERY_FETCH_START",
          section: h.GuildDiscoverySections.FEATURED,
        });
        try {
          let n = await r.default.get({
            url: h.Endpoints.GUILD_DISCOVERY,
            query: i.stringify({ offset: e, limit: t }),
            oldFormErrors: !0,
          });
          L(n.body, h.GuildDiscoverySections.FEATURED);
        } catch (e) {
          u.default.dispatch({
            type: "GUILD_DISCOVERY_FETCH_FAILURE",
            section: h.GuildDiscoverySections.FEATURED,
          });
        }
      }
      async function N() {
        let e = c.default.applicationStatistics,
          t = Object.keys(e);
        u.default.dispatch({
          type: "GUILD_DISCOVERY_FETCH_START",
          section: h.GuildDiscoverySections.GAMES_YOU_PLAY,
        });
        try {
          let e = await r.default.get({
            url: h.Endpoints.GUILD_DISCOVERY,
            query: i.stringify({ application_ids: t }),
            oldFormErrors: !0,
          });
          L(e.body, h.GuildDiscoverySections.GAMES_YOU_PLAY);
        } catch (e) {
          u.default.dispatch({
            type: "GUILD_DISCOVERY_FETCH_FAILURE",
            section: h.GuildDiscoverySections.GAMES_YOU_PLAY,
          });
        }
      }
      function T() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        e && (0, o.transitionTo)(h.Routes.GUILD_DISCOVERY),
          u.default.dispatch({ type: "GUILD_DISCOVERY_CLEAR_SEARCH" });
      }
      function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        u.default.dispatch({
          type: "GUILD_DISCOVERY_SELECT_CATEGORY",
          categoryId: e,
          isHomepage: t,
        });
      }
      function L(e, t) {
        let { offset: n, limit: l, guilds: a, total: s } = e;
        u.default.dispatch({
          type: "GUILD_DISCOVERY_FETCH_SUCCESS",
          section: t,
          guilds: a,
          offset: n,
          limit: l,
          total: s,
        });
      }
    },
    412026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("984444"),
        o = n("456799"),
        d = n("15318"),
        c = n("146782"),
        f = n("77078"),
        h = n("161778"),
        C = n("945956"),
        p = n("704926"),
        m = n("687609"),
        E = n("331306"),
        g = n("49111"),
        I = n("362792");
      let _ = {
          [g.RTCConnectionQuality.UNKNOWN]: f.Tooltip.Colors.BLACK,
          [g.RTCConnectionQuality.BAD]: f.Tooltip.Colors.RED,
          [g.RTCConnectionQuality.AVERAGE]: f.Tooltip.Colors.YELLOW,
          [g.RTCConnectionQuality.FINE]: f.Tooltip.Colors.GREEN,
        },
        S = {
          [g.ConnectionStatus.CONNECTED]: I.rtcConnectionStatusConnected,
          [g.ConnectionStatus.CONNECTING]: I.rtcConnectionStatusConnecting,
          [g.ConnectionStatus.ERROR]: I.rtcConnectionStatusError,
        },
        N = {
          [g.RTCConnectionQuality.FINE]: I.rtcConnectionQualityFine,
          [g.RTCConnectionQuality.AVERAGE]: I.rtcConnectionQualityAverage,
          [g.RTCConnectionQuality.BAD]: I.rtcConnectionQualityBad,
          [g.RTCConnectionQuality.UNKNOWN]: null,
        },
        T = r.default.connectStores([C.default, h.default], () => ({
          theme: h.default.theme,
          connectionState: C.default.getState(),
          hostname: C.default.getHostname(),
          averagePing: C.default.getAveragePing(),
          lastPing: C.default.getLastPing(),
          outboundLossRate: C.default.getOutboundLossRate(),
          pings: C.default.getPings(),
        }))(E.default);
      class A extends a.PureComponent {
        renderPopoutTarget(e) {
          return (0, l.jsx)(f.Popout, {
            renderPopout: this.renderPopout,
            position: "top",
            children: e,
          });
        }
        renderStatus() {
          let { statusTextClassName: e, hasVideo: t, state: n } = this.props,
            { connectionStatus: a, connectionStatusText: s } =
              m.default.getStatus(n, t);
          return this.renderPopoutTarget(t => {
            let { onClick: n } = t;
            return (0, l.jsx)(f.Button, {
              look: f.Button.Looks.BLANK,
              size: f.Button.Sizes.NONE,
              className: i(e, S[a]),
              onClick: n,
              children: s,
            });
          });
        }
        render() {
          let e;
          let {
            quality: t,
            smallPing: n,
            lastPing: a,
            state: s,
            className: r,
            children: u,
          } = this.props;
          return (
            s === g.RTCConnectionStates.RTC_CONNECTED &&
              (e = (0, l.jsx)(f.Tooltip, {
                text:
                  t !== g.RTCConnectionQuality.UNKNOWN && null != a
                    ? "".concat(a.toFixed(0), " ms")
                    : null,
                color: _[t],
                children: e =>
                  (0, l.jsx)(L, { quality: t, smallPing: n, ...e }),
              })),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: i(I.rtcConnectionStatus, N[t], r),
                  children: [
                    e,
                    (0, l.jsx)("div", {
                      className: I.labelWrapper,
                      children: this.renderStatus(),
                    }),
                  ],
                }),
                u,
              ],
            })
          );
        }
        constructor(...e) {
          super(...e), (this.renderPopout = e => (0, l.jsx)(T, { ...e }));
        }
      }
      function L(e) {
        let { quality: t, smallPing: n, ...a } = e,
          s = (0, f.useRedesignIconContext)().enabled;
        if (!s)
          return (0, l.jsx)(p.default, {
            className: i(I.ping, { [I.smallPing]: n }),
            foreground: I.pingForeground,
          });
        {
          let e = {
            [g.RTCConnectionQuality.FINE]: d.ConnectionFineIcon,
            [g.RTCConnectionQuality.AVERAGE]: u.ConnectionAverageIcon,
            [g.RTCConnectionQuality.BAD]: o.ConnectionBadIcon,
            [g.RTCConnectionQuality.UNKNOWN]: c.ConnectionUnknownIcon,
          }[t];
          return (0, l.jsx)(e, {
            className: i(I.ping, { [I.smallPing]: n }),
            ...a,
          });
        }
      }
      var v = A;
    },
    719451: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteResolvingHeader: function () {
            return T;
          },
          default: function () {
            return L;
          },
        }),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("770032"),
        u = n("653047"),
        o = n("233069"),
        d = n("813006"),
        c = n("766274"),
        f = n("697218"),
        h = n("953109"),
        C = n("580357"),
        p = n("124969"),
        m = n("587974"),
        E = n("158998"),
        g = n("49111"),
        I = n("238055"),
        _ = n("91366"),
        S = n("782340"),
        N = n("985551");
      let T = () =>
          (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(p.Avatar, {
                src: null,
                size: i.AvatarSizes.DEPRECATED_SIZE_100,
                className: N.avatar,
              }),
              (0, l.jsx)(p.SubTitle, {
                children:
                  S.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, l.jsx)(p.Title, {
                className: N.inviteResolvingGuildName,
                children: S.default.Messages.LOADING,
              }),
            ],
          }),
        A = e => {
          let { guild: t, user: n, application: a, compact: s } = e;
          if (null != a)
            return (0, l.jsx)(h.default, {
              className: N.appIcon,
              game: a,
              size: N.appIconSize,
            });
          if (null != n)
            return (0, l.jsx)(p.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: i.AvatarSizes.SIZE_80,
              className: s ? N.compactAvatar : N.avatar,
            });
          if (null != t)
            return (0, l.jsx)(m.default, {
              mask: m.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: N.guildIcon,
              children: (0, l.jsx)(p.GuildIcon, {
                guild: t,
                size: p.GuildIcon.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      var L = e => {
        var t;
        let n,
          a,
          h,
          {
            invite: m,
            disableUser: T = !1,
            error: L,
            flatActivityCount: v = !1,
            isRegister: x = !1,
          } = e,
          { currentUser: R, multiAccounts: M } = (0,
          s.useStateFromStoresObject)([r.default, f.default], () => ({
            currentUser: f.default.getCurrentUser(),
            multiAccounts: r.default.getUsers(),
          }));
        if (null == m) return null;
        let O = null != m.guild ? new d.default(m.guild) : null,
          y =
            null != m.channel
              ? (0, o.createChannelRecordFromInvite)(m.channel)
              : null,
          D =
            null != m.target_application
              ? new u.default(m.target_application)
              : null,
          b = T || null == m.inviter ? null : new c.default(m.inviter),
          j =
            (null != m.approximate_member_count &&
              m.approximate_member_count > 100) ||
            (null != O && O.hasFeature(g.GuildFeatures.COMMUNITY)),
          G = !j && null != b,
          U = null,
          P = !1;
        if (null != O)
          (U =
            null == b
              ? S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: E.default.getFormattedName(b),
                })),
            m.target_type === _.InviteTargetTypes.STREAM &&
              null != m.target_user &&
              (U = S.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: E.default.getFormattedName(m.target_user),
              })),
            m.target_type === _.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != m.target_application &&
              (U =
                null != b
                  ? S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: E.default.getFormattedName(b) }
                    )
                  : S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            G &&
              null == D &&
              (n = (0, l.jsx)(p.GuildIcon, {
                className: N.icon,
                guild: O,
                size: p.GuildIcon.Sizes.SMALL,
              })),
            (a = O.name),
            null != D &&
              ((a = D.name),
              (h = (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(p.SubTitle, {
                    className: N.appIn,
                    children: S.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, l.jsxs)("div", {
                    className: N.guildContainer,
                    children: [
                      (0, l.jsx)(p.GuildIcon, {
                        guild: O,
                        size: p.GuildIcon.Sizes.SMALL,
                      }),
                      (0, l.jsx)(i.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: N.appGuildName,
                        children: O.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != y) {
          if (null == b) throw Error("no inviter in group DM invite");
          let e = E.default.getFormattedName(b);
          null != y.name && "" !== y.name
            ? ((U = S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = y.name),
              null != y.icon &&
                (n = (0, l.jsx)(p.ChannelIcon, {
                  channel: y,
                  size: i.AvatarSizes.SIZE_32,
                })))
            : ((U =
                S.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != b) {
          let e = E.default.getFormattedName(b, !0);
          (a =
            S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (P = !0),
            (h =
              null != L
                ? null
                : (0, l.jsx)(p.SubTitle, {
                    className: N.directInviteSubTitle,
                    children: x
                      ? S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e }
                        )
                      : S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e }
                        ),
                  }));
        }
        return (0, l.jsxs)("div", {
          className: N.container,
          children: [
            (0, l.jsx)(A, {
              application: D,
              guild: O,
              user: G ? b : null,
              compact: P,
            }),
            null != L
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(p.SubTitle, {
                      children: S.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, l.jsx)(p.Title, { children: L }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(p.SubTitle, { children: U }),
                    (0, l.jsxs)(p.Title, {
                      className: N.title,
                      children: [
                        null != O
                          ? (0, l.jsx)(C.default, {
                              guild: O,
                              className: N.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            h,
            null != D ||
            P ||
            (null == m
              ? void 0
              : null === (t = m.guild) || void 0 === t
                ? void 0
                : t.id) === I.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, l.jsx)(p.ActivityCount, {
                  className: N.activityCount,
                  online: m.approximate_presence_count,
                  total: m.approximate_member_count,
                  flat: v,
                }),
            M.length > 1 ? (0, l.jsx)(p.JoiningAs, { user: R }) : null,
          ],
        });
      };
    },
    570687: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CloseButton: function () {
            return k;
          },
          LinkButton: function () {
            return K;
          },
          default: function () {
            return Z;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        u = n.n(r),
        o = n("90915"),
        d = n("974667"),
        c = n("394846"),
        f = n("446674"),
        h = n("77078"),
        C = n("450911"),
        p = n("272030"),
        m = n("502651"),
        E = n("139375"),
        g = n("843962"),
        I = n("679653"),
        _ = n("379881"),
        S = n("262973"),
        N = n("106435"),
        T = n("373469"),
        A = n("824563"),
        L = n("660478"),
        v = n("191542"),
        x = n("282109"),
        R = n("697218"),
        M = n("79798"),
        O = n("98292"),
        y = n("376069"),
        D = n("379793"),
        b = n("945330"),
        j = n("671434"),
        G = n("50885"),
        U = n("943722"),
        P = n("254167"),
        w = n("49111"),
        F = n("782340"),
        B = n("48594");
      let V = G.default.getEnableHardwareAcceleration()
          ? h.AnimatedAvatar
          : h.Avatar,
        H = { offset: { top: 2, bottom: 2, right: 4 } },
        k = e =>
          (0, l.jsx)(h.Clickable, {
            className: B.closeButton,
            ...e,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)(b.default, { className: B.closeIcon }),
          }),
        Y = () => (0, l.jsx)(j.default, { className: B.favoriteIcon });
      class K extends a.Component {
        render() {
          let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: a,
            interactiveClassName: s,
            text: r,
            children: u,
            locationState: d,
            onClick: f,
            className: C,
            role: p,
            "aria-posinset": m,
            "aria-setsize": E,
            ...g
          } = this.props;
          return (0, l.jsx)(D.default, {
            className: i(B.channel, { [B.fullWidth]: c.isMobile }, C),
            onClick: f,
            role: p,
            focusProps: { within: !0, ...H },
            "aria-posinset": m,
            "aria-setsize": E,
            children: (0, l.jsx)(h.Interactive, {
              as: "div",
              selected: t,
              className: i(s, B.interactive, B.linkButton, {
                [B.interactiveSelected]: t,
              }),
              children: (0, l.jsxs)(o.Link, {
                to: { pathname: e, state: d },
                className: B.link,
                ...g,
                children: [
                  (0, l.jsx)(y.default, {
                    selected: t,
                    muted: !1,
                    avatar: (0, l.jsx)(n, {
                      className: i(B.linkButtonIcon, a),
                    }),
                    name: r,
                    innerClassName: B.avatarWithText,
                  }),
                  u,
                ],
              }),
            }),
          });
        }
      }
      function W(e) {
        let {
            channel: t,
            selected: s = !1,
            user: r,
            activities: c,
            applicationStream: T,
            isTyping: A,
            status: v,
            isMobile: R,
            "aria-posinset": b,
            "aria-setsize": j,
          } = e,
          [G, K] = a.useState(!1),
          W = a.useRef(null),
          Z = a.useRef(null),
          {
            avatarSrc: z,
            avatarDecorationSrc: X,
            eventHandlers: Q,
          } = (0, N.default)({
            user: r,
            size: h.AvatarSizes.SIZE_32,
            animateOnHover: !(s || G),
          }),
          J = (0, f.useStateFromStores)([x.default], () =>
            x.default.isChannelMuted(t.getGuildId(), t.id)
          ),
          q = (0, f.useStateFromStores)(
            [L.default],
            () => L.default.getMentionCount(t.id) > 0
          ),
          $ = (0, I.default)(t),
          ee = (0, f.useStateFromStores)([_.default], () =>
            _.default.isFavorite(t.id)
          ),
          et = () => {
            K(!0);
          },
          en = () => {
            K(!1);
          },
          el = function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()),
              C.default.closePrivateChannel(t.id, s, n);
          },
          ea = () => {
            C.default.preload(w.ME, t.id);
          },
          es = e => {
            e.stopPropagation();
          },
          ei = e => {
            if (e.target === e.currentTarget) {
              var t;
              null === (t = W.current) || void 0 === t || t.click();
            }
          },
          er = e => {
            t.isMultiUserDM()
              ? (0, p.openContextMenuLazy)(
                  e,
                  async () => {
                    let { default: e } = await n
                      .el("493015")
                      .then(n.bind(n, "493015"));
                    return n =>
                      (0, l.jsx)(e, { ...n, channel: t, selected: s });
                  },
                  { noBlurEvent: !0 }
                )
              : (0, p.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("130074")
                    .then(n.bind(n, "130074"));
                  return n =>
                    (0, l.jsx)(e, {
                      ...n,
                      user: r,
                      channel: t,
                      channelSelected: s,
                    });
                });
          },
          eu = e => {
            e.preventDefault(), e.stopPropagation();
            let n = F.default.Messages.LEAVE_GROUP_DM_TITLE.format({ name }),
              a = F.default.Messages.LEAVE_GROUP_DM_BODY.format({ name });
            t.isManaged() &&
              ((n = F.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name,
              })),
              (a = F.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name,
              }))),
              (0, h.openModal)(e =>
                (0, l.jsx)(P.default, {
                  header: n,
                  body: a,
                  onSubmit: el,
                  ...e,
                })
              );
          },
          eo = () => {
            let e = {
              className: B.activity,
              textClassName: B.activityText,
              emojiClassName: B.activityEmoji,
            };
            return t.isSystemDM()
              ? (0, l.jsx)("div", {
                  className: B.subtext,
                  children: F.default.Messages.SYSTEM_DM_ACTIVITY_TEXT,
                })
              : t.isMultiUserDM()
                ? (0, l.jsx)("div", {
                    className: B.subtext,
                    children: F.default.Messages.MEMBERS_HEADER.format({
                      members: t.recipients.length + 1,
                    }),
                  })
                : null != c
                  ? (0, l.jsx)(U.default, {
                      ...e,
                      activities: c,
                      applicationStream: T,
                      animate: G,
                      hideTooltip: !0,
                      user: r,
                    })
                  : null;
          },
          ed = () => {
            if (t.isMultiUserDM())
              return (0, l.jsx)(V, {
                ...Q,
                src: (0, g.getChannelIconURL)(t),
                "aria-hidden": !0,
                className: B.avatar,
                size: h.AvatarSizes.SIZE_32,
              });
            u(
              null != r,
              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel"
            );
            let e = null;
            return (
              !r.isSystemUser() &&
                (e = (0, m.default)(c) ? w.StatusTypes.STREAMING : v),
              (0, l.jsx)(V, {
                ...Q,
                size: h.AvatarSizes.SIZE_32,
                src: z,
                avatarDecoration: X,
                status: e,
                isMobile: R,
                isTyping: A,
                className: B.avatar,
                "aria-label": r.username,
                statusTooltip: !0,
              })
            );
          },
          ec = t.isMultiUserDM(),
          ef = t.isSystemDM(),
          eh = (0, S.systemDMRedesignEnabled)();
        return (0, l.jsx)(d.ListNavigatorItem, {
          id: t.id,
          children: e => {
            let { role: n, ...a } = e;
            return (0, l.jsx)(D.default, {
              className: B.channel,
              role: n,
              focusProps: { ...H, focusTarget: W, ringTarget: Z },
              ref: Z,
              onMouseEnter: et,
              onMouseLeave: en,
              onMouseDown: ea,
              onContextMenu: er,
              "aria-setsize": j,
              "aria-posinset": b,
              children: (0, l.jsxs)(h.Interactive, {
                className: i(B.interactive, {
                  [B.interactiveSystemDM]: eh && ef,
                  [B.interactiveSelected]: s,
                }),
                as: "div",
                onClick: ei,
                muted: J,
                selected: s,
                children: [
                  (0, l.jsx)(o.Link, {
                    innerRef: W,
                    to: w.Routes.CHANNEL(w.ME, t.id),
                    className: B.link,
                    "aria-label": (0, E.default)({ channel: t, unread: q }),
                    ...a,
                    children: (0, l.jsx)(y.default, {
                      avatar: ed(),
                      selected: s,
                      highlighted: q,
                      muted: null != J && J,
                      subText: eo(),
                      name: (0, l.jsx)(O.default, { children: $ }),
                      decorators: t.isSystemDM()
                        ? (0, l.jsx)(M.default, {
                            className: B.decorator,
                            type: M.default.Types.SYSTEM_DM,
                            verified: !0,
                          })
                        : null,
                    }),
                  }),
                  ee ? (0, l.jsx)(Y, {}) : null,
                  !ef &&
                    (0, l.jsx)(k, {
                      "aria-label": ec
                        ? F.default.Messages.LEAVE_GROUP_DM
                        : F.default.Messages.CLOSE_DM,
                      onClick: ec ? eu : el,
                      onMouseDown: es,
                    }),
                ],
              }),
            });
          },
        });
      }
      var Z = e => {
        let { channel: t, selected: n, ...a } = e,
          s = (0, f.useStateFromStores)([R.default], () =>
            R.default.getUser(t.getRecipientId())
          ),
          i = null == s ? void 0 : s.id,
          r = (0, f.useStateFromStoresObject)(
            [A.default, T.default],
            () => ({
              status: null != i ? A.default.getStatus(i) : null,
              activities: null != i ? A.default.getActivities(i) : null,
              applicationStream:
                null != i ? T.default.getAnyStreamForUser(i) : null,
              isMobile: null != i && A.default.isMobileOnline(i),
            }),
            [i]
          ),
          u = (0, f.useStateFromStores)([v.default], () =>
            null != s ? v.default.isTyping(t.id, t.getRecipientId()) : void 0
          );
        return t.isMultiUserDM()
          ? (0, l.jsx)(W, { channel: t, selected: n, ...a })
          : (0, l.jsx)(W, {
              channel: t,
              selected: n,
              user: s,
              isTyping: u,
              ...a,
              ...r,
            });
      };
    },
    254167: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("782340"),
        r = n("826872");
      function u(e) {
        let { header: t, body: n, onSubmit: u, ...o } = e,
          [d, c] = a.useState(!1);
        return (0, l.jsxs)(s.ConfirmModal, {
          header: t,
          confirmText: i.default.Messages.LEAVE_GROUP_DM,
          cancelText: i.default.Messages.CANCEL,
          onConfirm: () => {
            u(null, d);
          },
          ...o,
          children: [
            (0, l.jsx)(s.Text, { variant: "text-md/normal", children: n }),
            (0, l.jsx)(s.Checkbox, {
              type: s.Checkbox.Types.INVERTED,
              value: d,
              onChange: () => c(e => !e),
              className: r.checkbox,
              children: (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                children: i.default.Messages.LEAVE_GROUP_DM_SILENTLY,
              }),
            }),
          ],
        });
      }
    },
    631316: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("369470"),
        u = n.n(r),
        o = n("974667"),
        d = n("446674"),
        c = n("233736"),
        f = n("77078"),
        h = n("406189"),
        C = n("206230"),
        p = n("716241"),
        m = n("815553"),
        E = n("274870"),
        g = n("718091"),
        I = n("288518"),
        _ = n("415435"),
        S = n("486503"),
        N = n("161778"),
        T = n("42203"),
        A = n("824563"),
        L = n("287850"),
        v = n("476765"),
        x = n("689476"),
        R = n("826684"),
        M = n("570687"),
        O = n("49111"),
        y = n("782340"),
        D = n("411264");
      ((a = l || (l = {}))[(a.PAGES = 0)] = "PAGES"), (a[(a.DMS = 1)] = "DMS");
      let b = i.memo(function () {
        return (0, s.jsxs)("svg", {
          width: "184",
          height: "428",
          viewBox: "0 0 184 428",
          className: D.empty,
          children: [
            (0, s.jsx)("rect", { x: 40, y: 6, width: 144, height: 20, rx: 10 }),
            (0, s.jsx)("circle", { cx: 16, cy: 16, r: 16 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 50,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.9,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 60, r: 16, opacity: 0.9 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 94,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.8,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 104, r: 16, opacity: 0.8 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 138,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.7,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 148, r: 16, opacity: 0.7 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 182,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.6,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 192, r: 16, opacity: 0.6 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 226,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.5,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 236, r: 16, opacity: 0.5 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 270,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.4,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 280, r: 16, opacity: 0.4 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 314,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.3,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 324, r: 16, opacity: 0.3 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 358,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.2,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 368, r: 16, opacity: 0.2 }),
            (0, s.jsx)("rect", {
              x: 40,
              y: 402,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.1,
            }),
            (0, s.jsx)("circle", { cx: 16, cy: 412, r: 16, opacity: 0.1 }),
          ],
        });
      });
      class j extends i.Component {
        static getDerivedStateFromProps(e) {
          let { children: t, privateChannelIds: n } = e;
          if (null == t)
            return {
              preRenderedChildren: 0,
              nonNullChildren: [],
              totalRowCount: n.length,
            };
          {
            let e = t.filter(e => null != e),
              l = e.length;
            return {
              preRenderedChildren: l,
              nonNullChildren: e,
              totalRowCount: l + n.length,
            };
          }
        }
        componentDidMount() {
          let { selectedChannelId: e, homeLink: t } = this.props;
          null != e &&
            null != t &&
            t.indexOf(e) >= 0 &&
            this.scrollToChannel(e),
            this.reportAnalytics();
        }
        shouldComponentUpdate(e) {
          return !(0, c.default)(this.props, e, ["children"]);
        }
        componentDidUpdate(e) {
          let { selectedChannelId: t, homeLink: n } = this.props;
          null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && n !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics();
        }
        scrollToChannel(e) {
          if (null == this._list) return;
          let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            l = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            a = 0;
          l < 0 || null == e
            ? this._list.scrollTo({ to: a })
            : ((a += 44 * (l + n) + t),
              this._list.scrollIntoViewRect({
                start: Math.max(a - 8, 0),
                end: a + 44 + 8,
              }));
        }
        render() {
          let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
          return (0, s.jsx)(o.ListNavigatorContainer, {
            children: l => {
              let { ref: a, role: i, ...r } = l;
              return (0, s.jsx)(f.FocusJumpSection, {
                children: l =>
                  (0, s.jsx)(f.List, {
                    fade: !0,
                    innerRole: i,
                    innerAriaLabel: y.default.Messages.DIRECT_MESSAGES,
                    innerTag: "ul",
                    ref: e => {
                      var t;
                      (this._list = e),
                        (this.props.listRef.current = e),
                        (a.current =
                          null !==
                            (t = null == e ? void 0 : e.getScrollerNode()) &&
                          void 0 !== t
                            ? t
                            : null);
                    },
                    onScroll: this.handleScroll,
                    className: D.scroller,
                    sectionHeight: this.getSectionHeight,
                    paddingTop: t,
                    paddingBottom: 8,
                    rowHeight: this.getRowHeight,
                    renderSection: this.renderSection,
                    renderRow: this.renderRow,
                    sections: [n, Math.max(e.length, 1)],
                    ...r,
                    ...l,
                  }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              initialized: !1,
              preRenderedChildren: 0,
              totalRowCount: 0,
              nonNullChildren: [],
            }),
            (this._list = null),
            (this.hasReportedAnalytics = !1),
            (this.reportAnalytics = () => {
              var e;
              if (this.hasReportedAnalytics) return;
              let t =
                null === (e = this._list) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
              if (null == t) return;
              let { privateChannelIds: n, channels: l } = this.props;
              if (0 === n.length) return;
              let a = i.Children.count(this.props.children);
              if (null == t) return;
              let s = Math.round((t.offsetHeight - 44 * a) / 44),
                r = s > n.length ? n.slice(0, s + 1) : n,
                u = r.map(e => (null != l[e] ? l[e].getRecipientId() : null)),
                o = {
                  num_users_visible: r.length,
                  num_users_visible_with_mobile_indicator: u.filter(
                    e => null != e && A.default.isMobileOnline(e)
                  ).length,
                };
              (this.hasReportedAnalytics = !0),
                p.default.trackWithMetadata(O.AnalyticEvents.DM_LIST_VIEWED, {
                  ...o,
                  ...(0, m.getNowPlayingAnalytics)(),
                });
            }),
            (this.getSectionHeight = e => {
              let { showDMHeader: t } = this.props;
              return 0 === e ? 0 : t ? 40 : 0;
            }),
            (this.handleScroll = u(() => {
              if (null != this._list) {
                let e = this._list.getScrollerNode();
                null != e &&
                  h.default.updateChannelListScroll(O.ME, e.scrollTop);
              }
            }, 100)),
            (this.renderDM = (e, t) => {
              let {
                  privateChannelIds: n,
                  channels: l,
                  selectedChannelId: a,
                } = this.props,
                { totalRowCount: i, preRenderedChildren: r } = this.state,
                u = n[t],
                o = l[u];
              return null == o
                ? null
                : (0, s.jsx)(
                    M.default,
                    {
                      channel: o,
                      selected: o.id === a,
                      "aria-posinset": r + t + 1,
                      "aria-setsize": i,
                    },
                    o.id
                  );
            }),
            (this.renderChild = e => {
              let { nonNullChildren: t, totalRowCount: n } = this.state,
                l = t[e];
              return i.isValidElement(l)
                ? i.cloneElement(l, {
                    "aria-setsize": n,
                    "aria-posinset": e + 1,
                  })
                : l;
            }),
            (this.renderRow = e => {
              let { section: t, row: n } = e,
                { privateChannelIds: l } = this.props;
              return 0 === t
                ? this.renderChild(n)
                : 0 === n && 0 === l.length
                  ? (0, s.jsx)(b, {}, "no-private-channels")
                  : this.renderDM(t, n);
            }),
            (this.renderSection = e => {
              let { section: t } = e,
                { showDMHeader: n } = this.props;
              return 0 !== t && n
                ? (0, s.jsxs)(
                    R.default,
                    {
                      className: D.privateChannelsHeaderContainer,
                      children: [
                        (0, s.jsx)("span", {
                          className: D.headerText,
                          children: y.default.Messages.DIRECT_MESSAGES,
                        }),
                        (0, s.jsx)(g.default, {
                          tooltip: y.default.Messages.CREATE_DM,
                          tooltipPosition: "top",
                          popoutAlign: "left",
                          iconClassName:
                            D.privateChannelRecipientsInviteButtonIcon,
                          icon: x.default,
                          subscribeToGlobalHotkey: !0,
                        }),
                      ],
                    },
                    t
                  )
                : null;
            }),
            (this.getRowHeight = (e, t) => {
              let { privateChannelIds: n } = this.props;
              return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
        }
      }
      j.defaultProps = { padding: 8 };
      var G = e => {
        let { version: t, theme: n, children: l, showDMHeader: a } = e,
          r = i.Children.count(l),
          u = T.default.getMutablePrivateChannels(),
          c = (0, _.filterOutMessageRequestsAndSpam)(u),
          f = (0, d.useStateFromStoresArray)(
            [L.default, I.default, S.default],
            () => {
              let e = L.default.getPrivateChannelIds(),
                t = (0, _.filterOutMessageRequestsAndSpamById)(e, [
                  I.default,
                  S.default,
                ]);
              return (0, E.filterBroadcastingGDMs)(t);
            },
            []
          ),
          h = (0, d.useStateFromStoresObject)(
            [C.default, N.default, T.default],
            () => ({
              theme: N.default.darkSidebar ? O.ThemeTypes.DARK : n,
              keyboardModeEnabled: C.default.keyboardModeEnabled,
              version:
                null != t
                  ? ""
                      .concat(t, ":")
                      .concat(T.default.getPrivateChannelsVersion())
                  : T.default.getPrivateChannelsVersion(),
            })
          ),
          p = i.useRef(null),
          m = i.useCallback(e => {
            let t = p.current,
              n = document.querySelector(e);
            null != t &&
              null != n &&
              t.scrollIntoViewNode({
                node: n,
                callback: () => {
                  requestAnimationFrame(() => {
                    var t;
                    return null === (t = document.querySelector(e)) ||
                      void 0 === t
                      ? void 0
                      : t.focus({ preventScroll: !0 });
                  });
                },
              });
          }, []),
          g = i.useCallback(
            () =>
              new Promise(e => {
                let t = p.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            []
          ),
          A = i.useCallback(
            () =>
              new Promise(e => {
                let t = p.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            []
          ),
          x = (0, v.useUID)(),
          R = (0, o.default)({
            id: "private-channels-".concat(x),
            isEnabled: h.keyboardModeEnabled,
            scrollToStart: g,
            scrollToEnd: A,
            defaultFocused: (r + (a ? 1 : 0)).toString(),
            setFocus: m,
          });
        return (0, s.jsx)(o.ListNavigatorProvider, {
          navigator: R,
          children: (0, s.jsx)(j, {
            channels: c,
            privateChannelIds: f,
            listRef: p,
            theme: n,
            version: t,
            ...e,
            children: l,
            ...h,
          }),
        });
      };
    },
    331306: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n.n(a),
        i = n("414456"),
        r = n.n(i),
        u = n("773364"),
        o = n("77078"),
        d = n("673777"),
        c = n("222871"),
        f = n("845579"),
        h = n("42887"),
        C = n("413709"),
        p = n("758710"),
        m = n("45029"),
        E = n("599110"),
        g = n("306160"),
        I = n("701909"),
        _ = n("687609"),
        S = n("49111"),
        N = n("353927"),
        T = n("782340"),
        A = n("217934");
      let L = () => {
        h.default
          .getMediaEngine()
          .once(u.MediaEngineEvent.ConnectionStats, e => {
            let t = Object.values(N.MediaEngineContextTypes)
              .map(t => {
                let n = e
                  .filter(e => {
                    let { connection: n } = e;
                    return n.context === t;
                  })
                  .map((e, n) => {
                    let l = e.stats;
                    return (l.context = t), (l.index = n), l;
                  });
                for (let e of n) {
                  var l;
                  (null == e
                    ? void 0
                    : null === (l = e.transport) || void 0 === l
                      ? void 0
                      : l.localAddress) != null &&
                    (e.transport.localAddress = "(redacted)");
                }
                return n;
              })
              .filter(e => e.length > 0);
            (0, g.copy)(JSON.stringify(t, null, 2)),
              (0, o.showToast)(
                (0, o.createToast)(
                  T.default.Messages.COPIED,
                  o.ToastType.SUCCESS
                )
              );
          });
      };
      var v = function (e) {
        (0, a.useEffect)(() => {
          E.default.track(S.AnalyticEvents.OPEN_POPOUT, {
            type: "RTC Connection",
          });
        }, []);
        let t = (0, a.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), d.open();
          }, [e]),
          n = (0, a.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: a,
                outboundLossRate: i,
              } = e,
              u = f.DeveloperMode.getSetting();
            return (0, l.jsxs)(s.Fragment, {
              children: [
                u &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("div", {
                        className: A.graphContainer,
                        children: (0, l.jsx)(c.default, {
                          dataPoints: e.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: A.popoutText,
                        children: (0, l.jsx)("strong", {
                          children: _.default.getShortHostname(t),
                        }),
                      }),
                    ],
                  }),
                (0, l.jsx)("div", {
                  className: A.popoutText,
                  children:
                    T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format(
                      { averagePing: n.toFixed(0) }
                    ),
                }),
                null != a
                  ? (0, l.jsx)("div", {
                      className: A.popoutText,
                      children:
                        T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format(
                          { lastPing: a.toFixed(0) }
                        ),
                    })
                  : null,
                null != i
                  ? (0, l.jsx)("div", {
                      className: A.popoutText,
                      children:
                        T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format(
                          { outboundLossRate: i.toFixed(1) }
                        ),
                    })
                  : null,
                (0, l.jsxs)("div", {
                  className: r(A.popoutText, A.popoutTextDetails),
                  children: [
                    null == i
                      ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format(
                          { badPing: 250 }
                        )
                      : null,
                    null != i
                      ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format(
                          { badPing: 250, badLossRate: 10 }
                        )
                      : null,
                  ],
                }),
              ],
            });
          }, [e]),
          { connectionState: i } = e,
          u = f.DeveloperMode.getSetting(),
          g = {
            [S.RTCConnectionStates.AWAITING_ENDPOINT]:
              T.default.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
                url: S.Links.STATUS,
              }),
            [S.RTCConnectionStates.CONNECTING]:
              T.default.Messages.RTC_CONNECTION_STATE_CONNECTING,
            [S.RTCConnectionStates.AUTHENTICATING]:
              T.default.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
            [S.RTCConnectionStates.DISCONNECTED]:
              T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
            [S.RTCConnectionStates.RTC_CONNECTING]:
              T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
            [S.RTCConnectionStates.ICE_CHECKING]:
              T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                url: I.default.getArticleURL(
                  S.HelpdeskArticles.VOICE_CONNECTION_ERRORS
                ),
              }),
            [S.RTCConnectionStates.DTLS_CONNECTING]:
              T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                url: I.default.getArticleURL(
                  S.HelpdeskArticles.VOICE_CONNECTION_ERRORS
                ),
              }),
            [S.RTCConnectionStates.RTC_CONNECTED]: n,
            [S.RTCConnectionStates.NO_ROUTE]:
              T.default.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({
                url: I.default.getArticleURL(
                  S.HelpdeskArticles.VOICE_CONNECTION_ERRORS
                ),
              }),
            [S.RTCConnectionStates.RTC_DISCONNECTED]:
              T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
          }[i];
        return (0, l.jsx)("div", {
          className: A.container,
          children: (0, l.jsxs)("section", {
            className: A.section,
            children: [
              "function" == typeof g
                ? g()
                : (0, l.jsx)("p", {
                    className: r(A.popoutText, A.popoutTextDetails),
                    children: g,
                  }),
              (0, l.jsx)("hr", { className: A.separator }),
              (0, l.jsxs)("div", {
                className: A.popoutBottom,
                children: [
                  (0, l.jsxs)("span", {
                    className: r(A.secured, A.textWithIcon),
                    children: [
                      (0, l.jsx)(m.default, {
                        width: 12,
                        height: 12,
                        color: o.tokens.colors.TEXT_POSITIVE.css,
                        className: A.icon,
                      }),
                      T.default.Messages.SECURE_CONNECTION,
                    ],
                  }),
                  u &&
                    h.default.supports(N.Features.DIAGNOSTICS) &&
                    !__OVERLAY__ &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(o.Anchor, {
                          className: r(A.debugButton, A.textWithIcon),
                          onClick: t,
                          children: [
                            T.default.Messages.DEBUG,
                            (0, l.jsx)(p.default, {
                              className: A.icon,
                              width: 12,
                              height: 12,
                            }),
                          ],
                        }),
                        (0, l.jsxs)(o.Anchor, {
                          className: r(A.copyStatsButton, A.textWithIcon),
                          onClick: L,
                          title: "Copy to clipboard",
                          children: [
                            T.default.Messages.COPY_STATS,
                            (0, l.jsx)(C.default, {
                              className: A.icon,
                              width: 12,
                              height: 12,
                            }),
                          ],
                        }),
                      ],
                    }),
                  !u &&
                    !__OVERLAY__ &&
                    (0, l.jsx)(o.Anchor, {
                      className: A.debugButton,
                      href: I.default.getArticleURL(
                        S.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING
                      ),
                      children: T.default.Messages.LEARN_MORE,
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    318042: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("424973"),
        n("222007");
      var l = n("884691"),
        a = n("862337");
      class s extends l.Component {
        componentDidMount() {
          this.update(),
            this._interval.start(this.props.updateInterval, this.update);
        }
        componentWillUnmount() {
          this._interval.stop();
        }
        calculateInitialDeltaBytes(e) {
          let {
              numUpdatesToShow: t,
              updateInterval: n,
              pointsToSmooth: l,
            } = this.props,
            a = Date.now(),
            s = 0,
            i = 0,
            r = [],
            u = null != e[0] ? e[0].bytes : 0;
          for (; s < t + l; s++) {
            let t;
            let l = a - (s + 1) * n;
            for (; i < e.length; )
              if ((t = e[i]).timestamp > l) i++;
              else break;
            if (i === e.length) break;
            null != t && (r.push(u - t.bytes), (u = t.bytes));
          }
          for (; s < t + l; s++) r.push(0);
          return r.reverse(), r;
        }
        smoothDeltaBytes(e) {
          let { pointsToSmooth: t } = this.props,
            n = [];
          for (let l = 0; l < e.length - t; l++) {
            let a = 0;
            for (let n = 0; n < t; n++) a += e[l + n];
            n.push(a / t);
          }
          return n;
        }
        render() {
          let {
            numUpdatesToShow: e,
            updateInterval: t,
            children: n,
          } = this.props;
          return n(this.state.smoothedDeltaBytes, t, e);
        }
        constructor(e) {
          super(e),
            (this._interval = new a.Interval()),
            (this.update = () => {
              let {
                  onUpdate: e,
                  numUpdatesToShow: t,
                  pointsToSmooth: n,
                  updateInterval: l,
                } = this.props,
                a = this.props.getHistoricalTotalBytes(),
                s = null != a[0] ? a[0].bytes : 0,
                i = [
                  ...this.state.deltaBytes.slice(1, t + n),
                  s - this.state.lastTotalBytes,
                ];
              this.setState(
                {
                  deltaBytes: i,
                  smoothedDeltaBytes: this.smoothDeltaBytes(i),
                  lastTotalBytes: s,
                },
                () => null != e && e(l)
              );
            });
          let t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
          this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0,
          };
        }
      }
      s.defaultProps = {
        numUpdatesToShow: 30,
        updateInterval: 500,
        pointsToSmooth: 10,
      };
      var i = s;
    },
    524110: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDispatchApplicationStates: function () {
            return v;
          },
          default: function () {
            return x;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("458960"),
        u = n("446674"),
        o = n("669491"),
        d = n("266491"),
        c = n("77078"),
        f = n("299285"),
        h = n("393414"),
        C = n("535974"),
        p = n("352326"),
        m = n("280174"),
        E = n("195812"),
        g = n("964889"),
        I = n("318042"),
        _ = n("49111"),
        S = n("782340"),
        N = n("259893");
      let T = {
        [_.LocalDispatchApplicationStates.INSTALLING]: {
          [m.TimeUnits.NONE]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format(
              { name: e }
            ),
          [m.TimeUnits.SECONDS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.MINUTES]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.HOURS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format(
              { name: e, timeRemaining: t }
            ),
        },
        [_.LocalDispatchApplicationStates.UPDATING]: {
          [m.TimeUnits.NONE]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
              name: e,
            }),
          [m.TimeUnits.SECONDS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.MINUTES]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.HOURS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format(
              { name: e, timeRemaining: t }
            ),
        },
        [_.LocalDispatchApplicationStates.REPAIRING]: {
          [m.TimeUnits.NONE]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format(
              { name: e }
            ),
          [m.TimeUnits.SECONDS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.MINUTES]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format(
              { name: e, timeRemaining: t }
            ),
          [m.TimeUnits.HOURS]: (e, t) =>
            S.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format(
              { name: e, timeRemaining: t }
            ),
        },
      };
      class A extends a.PureComponent {
        renderText() {
          let { state: e, isPaused: t } = this.props;
          if (
            e.type === _.LocalDispatchApplicationStates.UPDATING ||
            e.type === _.LocalDispatchApplicationStates.REPAIRING ||
            e.type === _.LocalDispatchApplicationStates.INSTALLING
          ) {
            if (t)
              return S.default.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
            if (
              e.stage === _.DispatchApplicationStages.PATCHING ||
              e.stage === _.DispatchApplicationStages.REPAIRING
            )
              return (0, l.jsx)(I.default, {
                getHistoricalTotalBytes:
                  C.default.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody,
              });
          }
          return null;
        }
        render() {
          let e = this.renderText();
          return null != e ? e : S.default.Messages.LIBRARY;
        }
        constructor(...e) {
          super(...e),
            (this.renderProgressBody = (e, t) => {
              let { state: n, application: l } = this.props,
                { stage: a, progress: s, total: i, type: r } = n;
              if (null == s || null == i || null == a) return null;
              let u = (e[e.length - 1] / t) * 1e3,
                o = 0 !== u ? Math.max(1, (i - s) / u) : null,
                d = T[r],
                c = null != d ? Object.keys(d) : [],
                { unit: f, time: h } = (0, m.getTimeAndUnit)(
                  null != o ? o / 60 : null,
                  c
                );
              if (null != d && null != f) {
                let e = d[f];
                return null != e ? e(l.name, h) : null;
              }
              return null;
            });
        }
      }
      class L extends a.PureComponent {
        componentWillAppear(e) {
          this.state.animationScale.setValue(1), e();
        }
        componentWillEnter(e) {
          r.default
            .spring(this.state.animationScale, { toValue: 1, duration: 200 })
            .start(e);
        }
        componentWillLeave(e) {
          r.default
            .spring(this.state.animationScale, { toValue: 0, duration: 200 })
            .start(e);
        }
        getTooltipText() {
          let { firstApplication: e, firstState: t, isPaused: n } = this.props;
          return null == e || null == t
            ? S.default.Messages.LIBRARY
            : (0, l.jsx)(A, { application: e, state: t, isPaused: n });
        }
        render() {
          let { percent: e, isPaused: t, className: n } = this.props;
          return (0, l.jsx)(r.default.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: i(n, N.progressContainer),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(c.Tooltip, {
              text: this.getTooltipText(),
              position: "right",
              "aria-label": !1,
              children: n =>
                (0, l.jsx)("div", {
                  ...n,
                  children: (0, l.jsx)(c.ProgressCircle, {
                    percent: e,
                    colorOverride: t
                      ? o.default.unsafe_rawColors.PRIMARY_500.css
                      : null,
                    children: (0, l.jsx)(E.default, {
                      className: N.downloadIcon,
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { animationScale: new r.default.Value(0) }),
            (this.handleOnClick = e => {
              let { onClick: t } = this.props;
              e.preventDefault(),
                e.stopPropagation(),
                null != t && t(e),
                (0, h.transitionTo)(_.Routes.APPLICATION_LIBRARY);
            });
        }
      }
      L.defaultProps = { strokeSize: c.ProgressCircle.StrokeSizes.MEDIUM };
      function v(e, t) {
        return e.reduce((e, n) => {
          let { applicationId: l, branchId: a } = n,
            s = t.getState(l, a);
          return null != s && e.push(s), e;
        }, []);
      }
      var x = u.default.connectStores([p.default, C.default, f.default], () => {
        let e = p.default.activeItems,
          t = v(e, C.default),
          { total: n, progress: l } = g.getCombinedProgress(t);
        return {
          percent: g.calculateProgressPercentage(l, n),
          isPaused: p.default.paused,
          firstApplication:
            e.length > 0 ? f.default.getApplication(e[0].applicationId) : null,
          firstState: t.length > 0 ? t[0] : null,
        };
      })(e => {
        let { determineOwnVisibility: t = !0, ...n } = e;
        return t
          ? (0, l.jsx)(d.TransitionGroup, {
              component: a.Fragment,
              children:
                n.percent > 0 && n.percent < 100
                  ? (0, l.jsx)(L, { ...n })
                  : null,
            })
          : (0, l.jsx)(L, { ...n });
      });
    },
    57005: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("679653"),
        i = n("782340"),
        r = n("611873");
      function u(e) {
        let { channel: t, category: n, ...u } = e,
          o = (0, s.default)(t, !0),
          d = (0, s.default)(n);
        return (0, l.jsx)(a.ConfirmModal, {
          header: i.default.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
          confirmText: i.default.Messages.SYNC_PERMISSIONS,
          cancelText: i.default.Messages.KEEP_PERMISSIONS,
          confirmButtonColor: a.Button.Colors.BRAND,
          ...u,
          children: (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            className: r.message,
            selectable: !1,
            children: i.default.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
              channelName: o,
              categoryName: d,
            }),
          }),
        });
      }
    },
    667771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeChannelSortable: function () {
            return A;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("476042"),
        s = n("95410"),
        i = n("77078"),
        r = n("851387"),
        u = n("57005"),
        o = n("320954"),
        d = n("200008"),
        c = n("512395"),
        f = n("870691"),
        h = n("42203"),
        C = n("245997"),
        p = n("923959"),
        m = n("305961"),
        E = n("957255"),
        g = n("162771"),
        I = n("230674"),
        _ = n("991170"),
        S = n("49111");
      let N = "DRAGGABLE_GUILD_CHANNEL";
      function T(e, t) {
        var n, l;
        if (null == e || null == t) return null;
        if (e !== S.FAVORITES) return h.default.getChannel(t);
        let a = p.default.getChannels(e),
          s =
            null !==
              (l =
                null !==
                  (n = a[(0, p.GUILD_SELECTABLE_CHANNELS_KEY)].find(
                    e => e.channel.id === t
                  )) && void 0 !== n
                  ? n
                  : a[(0, p.GUILD_VOCAL_CHANNELS_KEY)].find(
                      e => e.channel.id === t
                    )) && void 0 !== l
              ? l
              : a[S.ChannelTypes.GUILD_CATEGORY].find(e => e.channel.id === t);
        return null == s ? void 0 : s.channel;
      }
      function A(e) {
        return (0, a.DropTarget)(
          N,
          {
            drop(e, t) {
              let n;
              let a = g.default.getGuildId(),
                s = t.getItem(),
                o = (0, I.getDropData)(
                  T(a, s.id),
                  s.position,
                  e.channel,
                  e.position,
                  s.channelList
                );
              if (null == o) return;
              let c = T(a, s.id);
              if (null == c) return;
              let f = C.default.getCategories(a),
                p = m.default.getGuild(a);
              if (null == p) return;
              let N = (0, I.getDnDUpdates)(
                c,
                T(a, o.referenceId),
                o.parentId,
                f
              );
              if (0 !== N.length) {
                if (a === S.FAVORITES) {
                  (0, d.updateFavoriteChannels)(N);
                  return;
                }
                if (
                  ((N = N.filter(e => {
                    let { id: t } = e,
                      n = h.default.getChannel(t);
                    if (null == n) return !1;
                    let l = h.default.getChannel(n.parent_id);
                    return n.type === S.ChannelTypes.GUILD_CATEGORY || null == l
                      ? E.default.can(S.Permissions.MANAGE_CHANNELS, p)
                      : E.default.can(S.Permissions.MANAGE_CHANNELS, l);
                  })),
                  c.parent_id !== o.parentId &&
                    N.find(e => {
                      if (e.id !== c.id) return !1;
                      let t = h.default.getChannel(e.parent_id),
                        l =
                          null != t &&
                          E.default.can(S.Permissions.MANAGE_ROLES, c) &&
                          E.default.can(S.Permissions.MANAGE_ROLES, t);
                      if (!l) return !0;
                      let a = _.areChannelsLocked(c, t),
                        s = _.areChannelsLocked(
                          c,
                          h.default.getChannel(c.parent_id)
                        );
                      return (
                        ((null == c.parent_id && !a) || (s && !a)) && (n = e),
                        !0
                      );
                    }),
                  null != n)
                ) {
                  let e = h.default.getChannel(n.parent_id);
                  null != e &&
                    (0, i.openModal)(t =>
                      (0, l.jsx)(u.default, {
                        ...t,
                        channel: c,
                        category: e,
                        onConfirm: () => {
                          null != n &&
                            ((n.lock_permissions = !0),
                            r.default.batchChannelUpdate(a, N));
                        },
                        onCancel: () => {
                          null != n && r.default.batchChannelUpdate(a, N);
                        },
                      })
                    );
                } else r.default.batchChannelUpdate(a, N);
              }
            },
            canDrop(e, t) {
              let n = t.getItem(),
                l = h.default.getChannel(n.id);
              if (null == l) return !1;
              let a = (0, I.getDropData)(
                h.default.getChannel(n.id),
                n.position,
                e.channel,
                e.position,
                n.channelList
              );
              if (null == a) return !1;
              if (g.default.getGuildId() === S.FAVORITES) return !0;
              let s = m.default.getGuild(n.guildId);
              if (null == s) return !1;
              let i = h.default.getChannel(a.parentId),
                r = h.default.getChannel(l.parent_id),
                u = E.default.can(S.Permissions.MANAGE_CHANNELS, s),
                o =
                  null != r
                    ? E.default.can(S.Permissions.MANAGE_CHANNELS, r)
                    : u,
                d =
                  null != i
                    ? E.default.can(S.Permissions.MANAGE_CHANNELS, i)
                    : u;
              return o && d;
            },
          },
          (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
              ? {
                  connectChannelDropTarget: e.dropTarget(),
                  sorting: !1,
                  sortingType: null,
                  sortingPosition: null,
                  sortingParent: null,
                }
              : {
                  connectChannelDropTarget: e.dropTarget(),
                  sorting: !0,
                  sortingType: n.type,
                  sortingPosition:
                    t.isOver() && t.canDrop() ? n.position : null,
                  sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                };
          }
        )(
          (0, a.DragSource)(
            N,
            {
              canDrag(e) {
                let { channel: t } = e;
                if (g.default.getGuildId() === S.FAVORITES) return !0;
                let a = m.default.getGuild(t.getGuildId());
                if (null == a) return !1;
                if (
                  (0, c.isOptInEnabledForGuild)(a.id) &&
                  E.default.can(S.Permissions.MANAGE_CHANNELS, a)
                ) {
                  let e = "true" === s.default.get("doNotShowReorderModal");
                  return (
                    !e &&
                      (0, i.openModalLazy)(async () => {
                        let { default: e } = await n
                          .el("468749")
                          .then(n.bind(n, "468749"));
                        return t => (0, l.jsx)(e, { ...t });
                      }),
                    !1
                  );
                }
                if (t.type === S.ChannelTypes.GUILD_CATEGORY)
                  return (
                    E.default.can(S.Permissions.MANAGE_CHANNELS, a) &&
                    !(0, c.isOptInEnabledForGuild)(a.id)
                  );
                let r = h.default.getChannel(t.parent_id);
                return (
                  (null != r &&
                    E.default.can(S.Permissions.MANAGE_CHANNELS, r)) ||
                  (null == r && E.default.can(S.Permissions.MANAGE_CHANNELS, a))
                );
              },
              beginDrag(e) {
                let {
                    channel: { id: t, parent_id: n, guild_id: l, type: a },
                    position: s,
                  } = e,
                  i = g.default.getGuildId(),
                  r = C.default.getCategories(i),
                  u = (0, o.default)(r._categories, r, e => {
                    let { channel: t } = e;
                    if (
                      t.type === S.ChannelTypes.GUILD_CATEGORY &&
                      null != r[t.id] &&
                      0 === r[t.id].length
                    )
                      return (
                        i === S.FAVORITES ||
                        (E.default.can(S.Permissions.MANAGE_CHANNELS, t) &&
                          E.default.can(S.Permissions.VIEW_CHANNEL, t))
                      );
                    return !f.default.isCollapsed(t.parent_id);
                  });
                return {
                  isChannelDrag: !0,
                  id: t,
                  position: s,
                  parentId: n,
                  type: a,
                  channelList: u,
                  guildId: l,
                };
              },
            },
            e => ({
              connectChannelDragSource: e.dragSource(),
              connectDragPreview: e.dragPreview(),
            })
          )(e)
        );
      }
    },
    332565: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("732226");
      n.es(l, t);
    },
    984444: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("723366");
      n.es(l, t);
    },
    456799: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("912876");
      n.es(l, t);
    },
    15318: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("571044");
      n.es(l, t);
    },
    146782: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("767624");
      n.es(l, t);
    },
    857248: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("73261");
      n.es(l, t);
    },
    375022: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("816001");
      n.es(l, t);
    },
    735577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QUICKSWITCHER_SHOW: function () {
            return a;
          },
        });
      var l = n("104589");
      let a = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.show)("KEYBIND", ""), !1),
      };
    },
    175980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OVERLAY_LAYOUT: function () {
            return T;
          },
          OVERLAY_LOCKED_LAYOUT: function () {
            return A;
          },
          getOverlayLayoutContent: function () {
            return L;
          },
        }),
        n("70102");
      var l = n("102457"),
        a = n("55562"),
        s = n("953260"),
        i = n("798232"),
        r = n("278412"),
        u = n("222301"),
        o = n("735577"),
        d = n("714208"),
        c = n("24312"),
        f = n("30269"),
        h = n("271524"),
        C = n("333949"),
        p = n("945924"),
        m = n("648900"),
        E = n("838021"),
        g = n("347445"),
        I = n("493334"),
        _ = n("49111"),
        S = n("782340");
      function N() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map(e => {
          let t = T[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      let T = {
          [_.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
          [_.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
          [_.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
          [_.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
          [_.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
          [_.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
          [_.KeybindActions.UNREAD_NEXT]: I.UNREAD_NEXT,
          [_.KeybindActions.UNREAD_PREV]: I.UNREAD_PREV,
          [_.KeybindActions.MENTION_CHANNEL_NEXT]: I.MENTION_NEXT,
          [_.KeybindActions.MENTION_CHANNEL_PREV]: I.MENTION_PREV,
          [_.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
          [_.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
          [_.KeybindActions.SUBMIT]: C.SUBMIT,
          [_.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
          [_.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
          [_.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
          [_.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
          [_.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
          [_.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]:
            E.TOGGLE_CATEGORY_COLLAPSED,
          [_.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
          [_.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
          [_.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
          [_.KeybindActions.TOGGLE_HOTKEYS]: g.TOGGLE_HOTKEYS,
          [_.KeybindActions.JUMP_TO_FIRST_UNREAD]: u.JUMP_TO_FIRST_UNREAD,
          [_.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
          [_.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
          [_.KeybindActions.CALL_START]: l.CALL_START,
          [_.KeybindActions.QUICKSWITCHER_SHOW]: o.QUICKSWITCHER_SHOW,
        },
        A = { [_.KeybindActions.QUICKSWITCHER_SHOW]: o.QUICKSWITCHER_SHOW };
      function L() {
        return [
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: N(
              _.KeybindActions.SERVER_PREV,
              _.KeybindActions.SERVER_NEXT
            ),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: N(
              _.KeybindActions.CHANNEL_PREV,
              _.KeybindActions.CHANNEL_NEXT
            ),
          },
          {
            description:
              S.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: N(
              _.KeybindActions.NAVIGATE_BACK,
              _.KeybindActions.NAVIGATE_FORWARD
            ),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: N(
              _.KeybindActions.UNREAD_PREV,
              _.KeybindActions.UNREAD_NEXT
            ),
          },
          {
            description:
              S.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: N(
              _.KeybindActions.MENTION_CHANNEL_PREV,
              _.KeybindActions.MENTION_CHANNEL_NEXT
            ),
            groupEnd: !0,
          },
          {
            description:
              S.default.Messages
                .KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: N(_.KeybindActions.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: N(_.KeybindActions.MARK_SERVER_READ),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: N(_.KeybindActions.MARK_CHANNEL_READ),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: N(_.KeybindActions.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: N(_.KeybindActions.TOGGLE_MUTE),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: N(_.KeybindActions.TOGGLE_DEAFEN),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: N(_.KeybindActions.CALL_ACCEPT),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: N(_.KeybindActions.MARK_CHANNEL_READ),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: N(_.KeybindActions.CALL_START),
            groupEnd: !0,
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: N(_.KeybindActions.SCROLL_UP, _.KeybindActions.SCROLL_DOWN),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: N(_.KeybindActions.JUMP_TO_FIRST_UNREAD),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: N(_.KeybindActions.TEXTAREA_FOCUS),
          },
          {
            description:
              S.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: N(_.KeybindActions.QUICKSWITCHER_SHOW),
          },
        ];
      }
    },
    454286: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SETTINGS_LAYERS_LAYOUT: function () {
            return d;
          },
        });
      var l = n("118810"),
        a = n("77078"),
        s = n("244201"),
        i = n("144747"),
        r = n("659500"),
        u = n("202035"),
        o = n("49111");
      let d = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, a.isInDndMode)()) return !1;
            if (
              r.ComponentDispatch.hasSubscribers(
                o.ComponentActions.CALL_DECLINE
              )
            )
              return (
                r.ComponentDispatch.dispatch(o.ComponentActions.CALL_DECLINE),
                !1
              );
            if (i.default.close()) return !1;
            if ((0, l.isElement)(e.target)) {
              let t = (0, s.getWindowDispatchForElement)(e.target);
              if (
                null == t
                  ? void 0
                  : t.hasSubscribers(o.ComponentActions.POPOUT_CLOSE)
              )
                return t.dispatch(o.ComponentActions.POPOUT_CLOSE), !1;
            }
            if (
              r.ComponentDispatch.hasSubscribers(o.ComponentActions.MODAL_CLOSE)
            )
              return (
                r.ComponentDispatch.dispatch(o.ComponentActions.MODAL_CLOSE), !1
              );
            r.ComponentDispatch.dispatch(
              o.ComponentActions.LAYER_POP_ESCAPE_KEY
            );
          },
        },
        ...u.default,
      };
    },
    493814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        }),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("65597"),
        u = n("77078"),
        o = n("719451"),
        d = n("812204"),
        c = n("685665"),
        f = n("534438"),
        h = n("141254"),
        C = n("116616"),
        p = n("653047"),
        m = n("697218"),
        E = n("145131"),
        g = n("791106"),
        I = n("476765"),
        _ = n("124969"),
        S = n("83900"),
        N = n("216422"),
        T = n("128295"),
        A = n("414868"),
        L = n("599110"),
        v = n("315102"),
        x = n("773336"),
        R = n("50885"),
        M = n("52114"),
        O = n("218484"),
        y = n("49111"),
        D = n("646718"),
        b = n("782340"),
        j = n("172641"),
        G = n("890957");
      function U() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0,
        c.default)(d.default.PREMIUM_UPSELL_TOOLTIP);
        return (
          a.useEffect(() => {
            L.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
              type: D.PremiumUpsellTypes.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: y.AnalyticsPages.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, l.jsxs)(u.Clickable, {
            onClick: () =>
              (0, C.default)({
                analyticsSource: {
                  page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL,
                },
                analyticsLocation: {
                  page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL,
                  section: y.AnalyticsSections.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: j.experimentUpsellError,
            children: [
              (0, l.jsx)(N.default, {
                width: 24,
                height: 24,
                className: j.experimentUpsellIcon,
                color: g.GradientCssUrls.PREMIUM_TIER_2,
              }),
              (0, l.jsx)("span", {
                className: j.experimentUpsellText,
                children: b.default.Messages.GUILD_CAP_UPSELL_TOOLTIP,
              }),
              (0, l.jsx)("span", {
                className: j.experimentGetNitro,
                children: b.default.Messages.GUILD_CAP_UPSELL_GET_NITRO,
              }),
            ],
          })
        );
      }
      function P(e) {
        let { className: t } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": "true",
          className: i(j.iconContainer, t),
          children: [
            (0, l.jsx)(T.default, { className: j.iconSparklePlus }),
            (0, l.jsx)(S.default, {
              className: j.iconLink,
              width: 40,
              height: 40,
            }),
            (0, l.jsx)(A.default, { className: j.iconSparkleStar }),
          ],
        });
      }
      function w(e) {
        let { transitionState: t } = e,
          n = (0, I.useUID)(),
          { AnalyticsLocationProvider: a } = (0, c.default)(
            d.default.INVITE_MODAL
          );
        return (0, l.jsx)(a, {
          children: (0, l.jsx)(u.ModalRoot, {
            size: u.ModalSize.DYNAMIC,
            "aria-labelledby": n,
            transitionState: t,
            children: (0, l.jsxs)(u.ModalContent, {
              className: j.errorContent,
              children: [
                (0, l.jsx)(P, { className: j.errorImage }),
                (0, l.jsx)(u.Heading, {
                  id: n,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_TITLE,
                }),
                (0, l.jsx)("div", {
                  className: j.errorBody,
                  children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_BODY,
                }),
                (0, l.jsx)(_.Button, {
                  size: _.Button.Sizes.LARGE,
                  onClick: () => M.default.close(),
                  color: _.Button.Colors.BRAND,
                  children: b.default.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT,
                }),
              ],
            }),
          }),
        });
      }
      function F(e) {
        let t,
          n,
          { transitionState: s } = e;
        (0, r.default)([m.default], () => {
          var e;
          return null === (e = m.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let {
          invite: C,
          error: g,
          submitting: S,
        } = (0, r.useStateFromStoresObject)([O.default], () =>
          O.default.getProps()
        );
        a.useEffect(() => {
          !__OVERLAY__ &&
            x.isPlatformEmbedded &&
            ((0, x.isWindows)() ? R.default.minimize() : R.default.restore(),
            R.default.focus());
        }, []);
        let N = (0, I.useUID)(),
          { AnalyticsLocationProvider: T } = (0, c.default)(
            d.default.INVITE_MODAL
          );
        if (null == C) return null;
        if (
          C.state === y.InviteStates.EXPIRED ||
          C.state === y.InviteStates.BANNED ||
          C.state === y.InviteStates.ERROR
        )
          return (0, l.jsx)(w, { transitionState: s });
        if (null == C.channel) return null;
        function A() {
          null != C && M.default.acceptInvite(C);
        }
        let { guild: L, channel: D, inviter: P, target_application: F } = C,
          B = null != C.stage_instance,
          V = null == C.guild && null == C.channel && null != C.inviter;
        if (null != F) {
          t = null == L ? void 0 : L.name;
          let e = p.default.createFromServer(F);
          n = e.getCoverImageURL(1024);
        } else if (null != L)
          (t = L.name),
            (n = v.default.getGuildSplashURL({ id: L.id, splash: L.splash }));
        else if (
          ((null == (t = D.name) || "" === t) && null != P && (t = P.username),
          null == t)
        )
          throw Error("no name for group DM invite");
        let H = (0, h.isAtGuildCapAndNonPremium)(),
          k = B
            ? b.default.Messages.INSTANT_INVITE_ACCEPT_STAGE
            : b.default.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
        return (
          V && (k = b.default.Messages.ACCEPT_INVITE_MODAL_BUTTON),
          (0, l.jsx)(T, {
            children: (0, l.jsxs)(u.ModalRoot, {
              size: u.ModalSize.DYNAMIC,
              "aria-labelledby": N,
              transitionState: s,
              className: j.container,
              children: [
                (0, l.jsx)("div", {
                  className: j.contentWrapper,
                  children: (0, l.jsx)(u.Scroller, {
                    className: j.scroller,
                    children: (0, l.jsxs)(E.default, {
                      className: j.inviteContent,
                      direction: E.default.Direction.VERTICAL,
                      justify: E.default.Justify.BETWEEN,
                      children: [
                        (0, l.jsx)("div", {
                          id: N,
                          className: G.marginBottom20,
                          children: (0, l.jsx)(o.default, {
                            invite: C,
                            disableUser: null != L,
                            error: g,
                          }),
                        }),
                        B && null != L
                          ? (0, l.jsx)("div", {
                              className: i(G.marginBottom20, j.stage),
                              children: (0, l.jsx)(f.default, {
                                isCard: !0,
                                stageInstance: C.stage_instance,
                                guild: L,
                              }),
                            })
                          : null,
                        (0, l.jsxs)("div", {
                          children: [
                            H ? (0, l.jsx)(U, {}) : null,
                            null == F
                              ? (0, l.jsx)(u.Tooltip, {
                                  text: H
                                    ? b.default.Messages
                                        .TOO_MANY_USER_GUILDS_DESCRIPTION
                                    : null,
                                  position: "bottom",
                                  children: e => {
                                    let { onMouseEnter: t, onMouseLeave: n } =
                                      e;
                                    return (0, l.jsx)(_.Button, {
                                      size: _.Button.Sizes.LARGE,
                                      onClick: A,
                                      submitting: S,
                                      disabled: H,
                                      color: B
                                        ? _.Button.Colors.GREEN
                                        : _.Button.Colors.BRAND,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: H
                                        ? b.default.Messages
                                            .GUILD_CAP_INVITE_MODAL_BUTTON
                                        : k,
                                    });
                                  },
                                })
                              : (0, l.jsxs)("div", {
                                  className: j.buttonGroup,
                                  children: [
                                    (0, l.jsx)(_.Button, {
                                      size: _.Button.Sizes.LARGE,
                                      onClick: A,
                                      submitting: S,
                                      children: b.default.Messages.PLAY,
                                    }),
                                    (0, l.jsx)(_.Button, {
                                      color: _.Button.Colors.PRIMARY,
                                      size: _.Button.Sizes.LARGE,
                                      onClick: A,
                                      submitting: S,
                                      children: b.default.Messages.SPECTATE,
                                    }),
                                  ],
                                }),
                            (0, l.jsx)(E.default, {
                              justify: E.default.Justify.CENTER,
                              className: G.marginTop8,
                              children: (0, l.jsx)(_.Button, {
                                look: _.Button.Looks.LINK,
                                className: j.noThanksButton,
                                onClick: function () {
                                  M.default.close();
                                },
                                color: _.Button.Colors.TRANSPARENT,
                                children:
                                  b.default.Messages.INIVTE_MODAL_NO_THANKS,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                null != n &&
                  (0, l.jsx)("div", {
                    className: j.inviteSplash,
                    style: { backgroundImage: "url(".concat(n, ")") },
                  }),
              ],
            }),
          })
        );
      }
    },
    52114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("913144"),
        a = n("970728"),
        s = n("883029"),
        i = {
          acceptInvite(e) {
            let t = a.default.getInviteContext("Desktop Invite Modal", e);
            a.default
              .acceptInvite({
                inviteKey: e.code,
                context: t,
                callback: e => {
                  null != e &&
                    null != e.guild &&
                    null != e.channel &&
                    !__OVERLAY__ &&
                    a.default.transitionToInvite(e);
                },
              })
              .then(
                () => this.close(),
                e => {
                  l.default.dispatch({
                    type: "INVITE_MODAL_ERROR",
                    message: (0, s.getInviteError)(e.code),
                  });
                }
              );
          },
          close() {
            l.default.dispatch({ type: "INVITE_MODAL_CLOSE" });
          },
        };
    },
    827792: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("913144"),
        i = n("316272"),
        r = n("493814"),
        u = n("218484");
      let o = "INVITE_MODAL_KEY";
      class d extends i.default {
        _initialize() {
          s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        _terminate() {
          (0, a.closeModal)(o),
            s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        handleOpenModal() {
          u.default.isOpen() &&
            !(0, a.hasModalOpen)(o) &&
            (0, a.openModal)(e => (0, l.jsx)(r.default, { ...e }), {
              modalKey: o,
              onCloseRequest: () =>
                s.default.dispatch({ type: "INVITE_MODAL_CLOSE" }),
            });
        }
        handleCloseModal() {
          (0, a.closeModal)(o);
        }
      }
      var c = new d();
    },
    218484: function (e, t, n) {
      "use strict";
      let l;
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("446674"),
        s = n("913144"),
        i = n("42793"),
        r = n("393414"),
        u = n("233069"),
        o = n("813006"),
        d = n("42203"),
        c = n("305961"),
        f = n("337543"),
        h = n("957255"),
        C = n("697218"),
        p = n("50885"),
        m = n("49111"),
        E = n("724210");
      let g = m.AppContext.APP,
        I = !1,
        _ = !1,
        S = [];
      function N() {
        I = !0;
      }
      class T extends a.default.Store {
        initialize() {
          this.waitFor(c.default, f.default, C.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? m.AppContext.OVERLAY : m.AppContext.APP;
          return !!(I && S.length > 0 && g === e);
        }
        getProps() {
          return {
            invite: S.length > 0 ? S[0][0] : null,
            error: null != l && "" !== l ? l : null,
            submitting: _,
          };
        }
      }
      T.displayName = "InviteModalStore";
      var A = new T(s.default, {
        OVERLAY_INITIALIZE: N,
        CONNECTION_OPEN: N,
        CONNECTION_CLOSED: function () {
          I = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
          let t = e.invite;
          if (null == t) return !1;
          let n =
            t.state === m.InviteStates.EXPIRED ||
            t.state === m.InviteStates.BANNED ||
            t.state === m.InviteStates.ERROR;
          if (!n) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, u.isMultiUserDM)(e.type)) {
              if (null != d.default.getChannel(e.id))
                return (
                  (0, r.transitionToGuild)(m.ME, e.id), p.default.focus(), !1
                );
            } else {
              if (null == n) return !1;
              if (
                null != c.default.getGuild(n.id) &&
                !(0, i.isStreamInvite)(t)
              ) {
                let e = (function (e) {
                  if ((0, i.isRoleSubscriptionInvite)(e))
                    return E.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                  let { channel: t } = e;
                  if (null != t) {
                    let e = d.default.getChannel(t.id);
                    if (h.default.can(m.Permissions.VIEW_CHANNEL, e))
                      return t.id;
                  }
                  return null;
                })(t);
                return (0, r.transitionToGuild)(n.id, e), p.default.focus(), !1;
              }
            }
          }
          if (
            S.some(e => {
              let [n] = e;
              return n.code === t.code;
            })
          )
            return !1;
          (g = e.context), (_ = !1);
          let l = (function (e) {
            let {
                approximate_member_count: t,
                approximate_presence_count: n,
                code: l,
                state: a,
                target_type: s,
                target_user: i,
                target_application: r,
                stage_instance: u,
                type: d,
                channel: c,
                guild: f,
              } = e,
              h = {
                code: l,
                state: a,
                approximate_member_count: t,
                approximate_presence_count: n,
                target_type: s,
                target_user: i,
                target_application: r,
                stage_instance: u,
                type: d,
              };
            return (
              null != c && (h.channel = { ...c }),
              null != f && (h.guild = new o.default(f)),
              null != e.inviter && (h.inviter = { ...e.inviter }),
              h
            );
          })(t);
          S.push([l, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
          if (((l = null), (_ = !1), S.length > 0)) {
            let [, e] = S.shift();
            null != e && e();
          }
        },
        INVITE_ACCEPT: function () {
          _ = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
          let { message: t } = e;
          (l = t), (_ = !1);
        },
      });
    },
    670984: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("913144"),
        i = n("135230"),
        r = n("316272"),
        u = n("782340");
      let o = "ActivityInviteManager",
        d = () => {
          s.default.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class c extends r.default {
        _initialize() {
          s.default.subscribe(
            "ACTIVITY_INVITE_MODAL_OPEN",
            this.handleModalOpen
          ),
            s.default.subscribe(
              "ACTIVITY_INVITE_MODAL_CLOSE",
              this.handleModalClose
            );
        }
        _terminate() {
          s.default.unsubscribe(
            "ACTIVITY_INVITE_MODAL_OPEN",
            this.handleModalOpen
          ),
            s.default.unsubscribe(
              "ACTIVITY_INVITE_MODAL_CLOSE",
              this.handleModalClose
            );
        }
        handleModalOpen(e) {
          let { activity: t, isPrivate: s } = e;
          s
            ? (0, a.openModal)(
                e =>
                  (0, l.jsx)(i.default, {
                    title:
                      u.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                        name: t.name,
                      }),
                    body: u.default.Messages.ACTIVITY_INVITE_PRIVATE,
                    confirmText: u.default.Messages.OKAY,
                    ...e,
                  }),
                { onCloseCallback: d, modalKey: o }
              )
            : (0, a.openModalLazy)(
                async () => {
                  let { default: e } = await n
                    .el("582139")
                    .then(n.bind(n, "582139"));
                  return t => (0, l.jsx)(e, { ...t });
                },
                { onCloseCallback: d, modalKey: o }
              );
        }
        handleModalClose(e) {
          (0, a.closeModal)(o);
        }
      }
      var f = new c();
    },
    815553: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNowPlayingAnalytics: function () {
            return i;
          },
        }),
        n("808653"),
        n("446674");
      var l = n("389817"),
        a = n("392453"),
        s = n("988268");
      function i() {
        let e = (0, l.getNowPlayingVisible)(),
          t = a.default.nowPlayingCards;
        return (function (e, t) {
          let n = e.reduce((e, t) => {
            var n;
            let l =
              null !==
                (n = t.party.currentActivities
                  .filter(
                    e =>
                      null != e.game.name &&
                      e.game.type === s.ApplicationTypes.GAME
                  )
                  .map(e => e.game.name)) && void 0 !== n
                ? n
                : [];
            return e.concat(l);
          }, []);
          return {
            now_playing_visible: t,
            now_playing_num_cards: e.length,
            now_playing_games_detected: n,
          };
        })(t, e);
      }
    },
    951039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("697218"),
        r = n("153769"),
        u = n("719923"),
        o = n("805199"),
        d = n("513196"),
        c = n("42723"),
        f = n("605475");
      function h() {
        let [e, t, n] = (0, a.useStateFromStoresArray)(
            [i.default, o.default],
            () => [
              o.default.getCurrentDesktopIcon(),
              o.default.isEditorOpen,
              u.default.isPremium(i.default.getCurrentUser()),
            ]
          ),
          h = f.ICONS_BY_ID[e],
          C = e !== d.FreemiumAppIconIds.DEFAULT && (n || t),
          p = (0, s.useRedesignIconContext)().enabled,
          m = (0, l.jsx)(r.default, { width: 30, height: p ? 30 : 22 });
        return null != h && C ? (0, l.jsx)(c.default, { id: e, width: 48 }) : m;
      }
    },
    651896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        s = n("713726"),
        i = n("194051");
      function r() {
        let e = (0, a.useStateFromStores)([i.default], () =>
          i.default.getBroadcastsToValidateChannels()
        );
        (0, l.useEffect)(() => {
          e.length > 0 && (0, s.maybeFetchBroadcastChannels)();
        }, [e]);
      }
    },
    520480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTrackNewBroadcastDetected: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("917351"),
        s = n.n(a),
        i = n("716241"),
        r = n("9759"),
        u = n("754493"),
        o = n("813531"),
        d = n("49111");
      let c = (e, t) => [...t].filter(t => !e.has(t)),
        f = () => {
          let e = (0, o.default)(),
            t = (0, u.default)(),
            { canViewBroadcasts: n } = r.default.useExperiment(
              { location: "Home Button" },
              { autoTrackExposure: !1 }
            ),
            a = l.useRef(t),
            f = l.useRef(new Set());
          l.useEffect(() => {
            let l = new Set(e.map(e => e.channelId)),
              r = !s.isEqual(f.current, l);
            if (n && r) {
              let n = c(f.current, l);
              i.default.trackWithMetadata(
                d.AnalyticEvents.NEW_BROADCAST_DETECTED,
                {
                  active_broadcast_highlight: e.length > 0,
                  num_active_broadcasts: e.length,
                  is_broadcasting: t,
                  prev_is_broadcasting: a.current,
                  prev_num_active_broadcasts: f.current.size,
                  new_broadcast_channel_ids: n,
                  broadcast_channel_ids: [...l],
                }
              ),
                (f.current = l),
                (a.current = t);
            }
          }, [e, t, n]);
        };
    },
    813531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("101125"),
        s = n("194051");
      function i() {
        let e = (0, l.useStateFromStores)([a.default], () =>
            a.default.getBroadcast()
          ),
          t = (0, l.useStateFromStores)([s.default], () =>
            s.default.getBroadcasts()
          );
        return null != e ? [e].concat(t) : t;
      }
    },
    749387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("669491"),
        r = n("77078"),
        u = n("630086"),
        o = n("716241"),
        d = n("442939"),
        c = n("393414"),
        f = n("697218"),
        h = n("953109"),
        C = n("774223"),
        p = n("158998"),
        m = n("754493"),
        E = n("813531"),
        g = n("395635"),
        I = n("49111"),
        _ = n("782340"),
        S = n("307994");
      function N(e) {
        var t;
        let { userId: n, applicationId: a } = e,
          i = (0, s.useStateFromStores)([f.default], () =>
            f.default.getUser(n)
          ),
          u =
            null !== (t = p.default.getGlobalName(i)) && void 0 !== t
              ? t
              : p.default.getUserTag(i),
          o = (0, d.useGetOrFetchApplication)(a);
        return null == i
          ? null
          : (0, l.jsxs)("div", {
              className: S.broadcast,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className: S.inline,
                      children: [
                        (0, l.jsx)(r.Avatar, {
                          size: r.AvatarSizes.SIZE_16,
                          src: i.getAvatarURL(null, 16),
                          "aria-label": u,
                        }),
                        (0, l.jsx)(r.Text, {
                          variant: "text-sm/semibold",
                          children: u,
                        }),
                      ],
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      color: "header-secondary",
                      children:
                        (null == o ? void 0 : o.name) != null
                          ? _.default.Messages.STREAMING.format({
                              name: o.name,
                            })
                          : _.default.Messages.STREAMING_A_GAME,
                    }),
                  ],
                }),
                (0, l.jsx)(h.default, { game: o }),
              ],
            });
      }
      function T(e) {
        let { closePopout: t } = e,
          n = (0, E.default)(),
          s = n.slice(0, 3),
          d = (0, m.default)(),
          f = n.length - s.length;
        return (
          a.useEffect(() => {
            o.default.trackWithMetadata(
              I.AnalyticEvents.BROADCAST_POPOUT_VIEWED,
              {
                num_broadcasts_shown: s.length,
                num_active_broadcasts: n.length,
                is_broadcasting: d,
              }
            );
          }, [n.length, s.length, d]),
          (0, l.jsxs)("div", {
            className: S.container,
            children: [
              (0, l.jsxs)("div", {
                className: S.header,
                children: [
                  (0, l.jsxs)("div", {
                    className: S.inline,
                    children: [
                      (0, l.jsx)(C.default, {
                        color: i.default.colors.HEADER_PRIMARY.css,
                        height: 16,
                        width: 16,
                      }),
                      (0, l.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: _.default.Messages.LIVE_BROADCASTS,
                      }),
                    ],
                  }),
                  (0, l.jsx)(g.default, {}),
                ],
              }),
              s.map((e, t) =>
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(N, { ...e }, e.userId),
                    t !== s.length - 1 &&
                      (0, l.jsx)("hr", { className: S.separator }),
                  ],
                })
              ),
              f > 0 &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("hr", { className: S.separator }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      color: "header-secondary",
                      children: _.default.Messages.MORE_OPEN_BROADCASTS.format({
                        count: f,
                      }),
                    }),
                  ],
                }),
              (0, l.jsx)(r.Button, {
                onClick: () => {
                  (0, c.transitionTo)(I.Routes.ME),
                    u.default.setSection(I.FriendsSections.ONLINE),
                    o.default.trackWithMetadata(
                      I.AnalyticEvents.BROADCAST_LIST_VISITED,
                      {
                        num_active_broadcasts: n.length,
                        friends_tab_clicked: !1,
                        is_broadcasting: d,
                      }
                    ),
                    t();
                },
                className: S.button,
                children: _.default.Messages.VIEW_OPEN_BROADCASTS,
              }),
            ],
          })
        );
      }
    },
    395635: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("298878"),
        i = n("782340");
      function r(e) {
        let { className: t } = e;
        return (0, l.jsx)(a.Tooltip, {
          text: i.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
          children: e => (0, l.jsx)(s.default, { ...e, className: t }),
        });
      }
    },
    44723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("5667"),
        s = n("782340"),
        i = n("119126"),
        r = n("655361");
      function u(e) {
        let { markAsDismissed: t } = e;
        return (0, l.jsx)(a.default, {
          header: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_HEADER,
          content: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_BODY,
          buttonCTA: s.default.Messages.GOT_IT,
          onClick: () => {},
          markAsDismissed: t,
          caretPosition: a.default.CaretPosition.BOTTOM_CENTER,
          asset: (0, l.jsx)("img", { src: r, alt: "", className: i.image }),
          className: i.content,
        });
      }
    },
    481699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("49111"),
        a = n("782340");
      function s(e) {
        let { channel: t, embeddedApps: n } = e;
        if (t.type === l.ChannelTypes.GUILD_VOICE) {
          if (null == n || !(n.length > 0)) return;
          {
            let e = n.map(e => e.application.name);
            return a.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_DESCRIBED_BY_LABEL_ACTIVITIES.format(
              { activeActivities: e.join(", ") }
            );
          }
        }
      }
    },
    222481: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("49111"),
        a = n("782340");
      function s(e) {
        if (null == e) return null;
        switch (e.type) {
          case l.ChannelTypes.GUILD_ANNOUNCEMENT:
            return a.default.Messages.NEWS_CHANNEL;
          case l.ChannelTypes.GUILD_STORE:
            return a.default.Messages.STORE_CHANNEL;
          case l.ChannelTypes.DM:
          case l.ChannelTypes.GROUP_DM:
            return a.default.Messages.DM;
          case l.ChannelTypes.PRIVATE_THREAD:
            return a.default.Messages.PRIVATE_THREAD;
          case l.ChannelTypes.ANNOUNCEMENT_THREAD:
          case l.ChannelTypes.PUBLIC_THREAD:
            return a.default.Messages.THREAD;
          case l.ChannelTypes.GUILD_TEXT:
            return a.default.Messages.TEXT_CHANNEL;
          case l.ChannelTypes.GUILD_FORUM:
            let t = e.isMediaChannel();
            return t
              ? a.default.Messages.MEDIA_CHANNEL
              : a.default.Messages.FORUM_CHANNEL;
          case l.ChannelTypes.GUILD_MEDIA:
            return a.default.Messages.MEDIA_CHANNEL;
          case l.ChannelTypes.GUILD_STAGE_VOICE:
            return a.default.Messages.STAGE_CHANNEL;
          case l.ChannelTypes.GUILD_VOICE:
            return a.default.Messages.VOICE_CHANNEL;
          case l.ChannelTypes.GUILD_CATEGORY:
          default:
            return null;
        }
      }
    },
    557661: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelSubtitle: function () {
            return a;
          },
        });
      var l = n("782340");
      function a(e) {
        if (null == e) return null;
        switch (e.type) {
          case "embedded-activities":
          case "event":
            return { subtitle: e.name };
          case "go-live":
            return { subtitle: l.default.Messages.GO_LIVE_SUBTITLE };
        }
        return null;
      }
    },
    120363: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelListUpsells: function () {
            return r;
          },
          useChannelListUpsellLocationTrackerRef: function () {
            return o;
          },
        });
      var l = n("884691"),
        a = n("308503"),
        s = n("16470");
      let i = (0, a.default)(e => ({ upsellsByGuildId: {} }));
      function r(e) {
        return i(t => {
          var n;
          let l = {};
          return null == e
            ? l
            : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n
              ? n
              : l;
        }, s.default);
      }
      function u(e) {
        if (null == e) return !1;
        try {
          let t = window.getComputedStyle(e);
          return t.overflow.includes("scroll");
        } catch (e) {
          return !1;
        }
      }
      function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = l.useRef(null);
        return (
          l.useLayoutEffect(() => {
            let l = a.current,
              s = () => {
                requestAnimationFrame(() => {
                  var l, s, r;
                  let u =
                    null !==
                      (s =
                        null === (l = a.current) || void 0 === l
                          ? void 0
                          : l.getBoundingClientRect()) && void 0 !== s
                      ? s
                      : null;
                  (r = {
                    name: t,
                    guildId: e,
                    disabled: n,
                    boundingRect: null != u ? u : null,
                  }),
                    i.setState(e => {
                      var t, n;
                      return {
                        upsellsByGuildId: {
                          ...(null !== (t = e.upsellsByGuildId) && void 0 !== t
                            ? t
                            : {}),
                          [r.guildId]: {
                            ...(null !== (n = e.upsellsByGuildId[r.guildId]) &&
                            void 0 !== n
                              ? n
                              : {}),
                            [r.name]: r,
                          },
                        },
                      };
                    });
                });
              };
            if (null == l) return s(), () => {};
            let r = (function (e) {
              let t = e.parentNode;
              for (; null != t && t !== document.body && !u(t); )
                t = t.parentNode;
              return u(t) ? t : null;
            })(l);
            return (
              s(),
              null == r || r.addEventListener("scroll", s, { passive: !0 }),
              () => {
                null == r || r.removeEventListener("scroll", s);
              }
            );
          }, [e, t, n]),
          a
        );
      }
    },
    228854: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("65597"),
        s = n("151426"),
        i = n("77078"),
        r = n("272030"),
        u = n("369964"),
        o = n("778588"),
        d = n("227602"),
        c = n("522049"),
        f = n("962541"),
        h = n("13798"),
        C = n("56947"),
        p = n("386045"),
        m = n("803725"),
        E = n("49111"),
        g = n("782340"),
        I = n("249576");
      function _(e) {
        (0, r.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("630950").then(n.bind(n, "630950"));
          return t => (0, l.jsx)(e, { ...t });
        });
      }
      function S() {
        (0, m.saveClip)();
      }
      let N = e => {
        let { keybindString: t, children: n } = e,
          a = (e, t) => {
            e.stopPropagation(), e.preventDefault(), null == t || t();
          };
        return (0, l.jsx)(i.Popout, {
          shouldShow: !1,
          position: "top",
          align: "center",
          renderPopout: e => {
            let { closePopout: n } = e;
            return (0, l.jsx)(u.default, {
              dismissibleContent:
                s.DismissibleContent.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
              shouldUseHorizontalButtons: !0,
              inlineArt: !0,
              artClassName: I.clipsEducationArt,
              position: "top",
              header: (0, l.jsx)("div", {
                className: I.header,
                children:
                  g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format(
                    {
                      keybind: t,
                      keybindHook: () =>
                        (0, l.jsx)("span", {
                          className: I.keybindHintKeys,
                          children: (0, l.jsx)(i.KeyCombo, {
                            className: I.keybindShortcut,
                            shortcut: t,
                          }),
                        }),
                    }
                  ),
              }),
              headerClassName: I.clipsEducationHeader,
              body: (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  className: I.bodyText,
                  children:
                    g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format(
                      {
                        keybindHook: () =>
                          (0, l.jsx)("div", {
                            className: I.keyCombo,
                            children: t,
                          }),
                        keybind: t,
                      }
                    ),
                }),
              }),
              onClose: e => {
                a(e, n);
              },
            });
          },
          children: () => n,
        });
      };
      var T = () => {
        let e = (0, a.default)([o.default], () => o.default.hasLayers()),
          t = (0, C.useEnableClips)(),
          { clipsEnabled: n, isAtMaxSavingClipsOperations: s } = (0,
          a.useStateFromStoresObject)([p.default], () => ({
            clipsEnabled: p.default.getSettings().clipsEnabled,
            isAtMaxSavingClipsOperations:
              p.default.getIsAtMaxSaveClipOperations(),
          })),
          i = (0, a.default)([d.default], () =>
            d.default.getKeybindForAction(E.GlobalKeybindActions.SAVE_CLIP)
          );
        if (!(t && n) || null == i || e) return null;
        let r = h.toString(i.shortcut, !0);
        return (0, l.jsx)(N, {
          keybindString: r,
          children: (0, l.jsx)(f.default, {
            disabled: s,
            tooltipText:
              null != i
                ? g.default.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
                    hotkey: h.toString(null == i ? void 0 : i.shortcut, !0),
                  })
                : g.default.Messages.CLIPS_EDIT_SAVE_CLIP,
            onClick: S,
            onContextMenu: _,
            icon: c.default,
          }),
        });
      };
    },
    940365: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "user",
        id: "2021-02_staff_qc_debugging",
        label: "Display QS scores in results. Not a real experiment",
        defaultConfig: { showScores: !1 },
        treatments: [
          {
            id: 1,
            label: "Show scores in QS results",
            config: { showScores: !0 },
          },
        ],
      });
      var s = a;
    },
    917973: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      function a() {
        return (0, l.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsxs)("g", {
              clipPath: "url(#clip0_1378_82282)",
              children: [
                (0, l.jsx)("path", {
                  d: "M8.00009 15.4171C12.0001 15.4171 14.8572 14 14.8572 10.8457C14.8572 7.41711 12.9286 5.21429 9.5 3.5L11.0629 1.67997C11.1315 1.56599 11.1686 1.43593 11.1707 1.30296C11.1727 1.16999 11.1396 1.03885 11.0746 0.922821C11.0096 0.806793 10.9151 0.710005 10.8007 0.642268C10.6862 0.57453 10.5559 0.538252 10.4229 0.537109H5.57723C5.44425 0.538252 5.31394 0.57453 5.1995 0.642268C5.08506 0.710005 4.99057 0.806793 4.92559 0.922821C4.86062 1.03885 4.82747 1.16999 4.82951 1.30296C4.83156 1.43593 4.86872 1.56599 4.93723 1.67997L6.5 3.5C3.07143 5.22571 1.14294 7.43997 1.14294 10.8685C1.14294 14 4.00009 15.4171 8.00009 15.4171Z",
                  fill: "#B9BBBE",
                  stroke: "#B9BBBE",
                  strokeWidth: "1.14286",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, l.jsxs)("g", {
                  clipPath: "url(#clip1_1378_82282)",
                  children: [
                    (0, l.jsx)("mask", {
                      id: "path-2-inside-1_1378_82282",
                      fill: "white",
                      children: (0, l.jsx)("path", {
                        d: "M11.9667 7.3558L9.45706 7.13802L8.47706 4.83062C8.30077 4.41063 7.69929 4.41063 7.52299 4.83062L6.543 7.1432L4.03857 7.3558C3.58227 7.39209 3.39561 7.96246 3.74301 8.2632L5.64597 9.91208L5.0756 12.3595C4.9719 12.8054 5.45412 13.158 5.84819 12.9195L8.00003 11.6232L10.1519 12.9247C10.5459 13.1632 11.0282 12.8106 10.9245 12.3647L10.3541 9.91208L12.257 8.2632C12.6045 7.96246 12.423 7.39209 11.9667 7.3558ZM8.00003 10.6536L6.05041 11.8306L6.56892 9.61134L4.84745 8.11801L7.11855 7.92098L8.00003 5.83136L8.88669 7.92616L11.1578 8.1232L9.43632 9.61653L9.95483 11.8358L8.00003 10.6536Z",
                      }),
                    }),
                    (0, l.jsx)("path", {
                      d: "M11.9667 7.3558L9.45706 7.13802L8.47706 4.83062C8.30077 4.41063 7.69929 4.41063 7.52299 4.83062L6.543 7.1432L4.03857 7.3558C3.58227 7.39209 3.39561 7.96246 3.74301 8.2632L5.64597 9.91208L5.0756 12.3595C4.9719 12.8054 5.45412 13.158 5.84819 12.9195L8.00003 11.6232L10.1519 12.9247C10.5459 13.1632 11.0282 12.8106 10.9245 12.3647L10.3541 9.91208L12.257 8.2632C12.6045 7.96246 12.423 7.39209 11.9667 7.3558ZM8.00003 10.6536L6.05041 11.8306L6.56892 9.61134L4.84745 8.11801L7.11855 7.92098L8.00003 5.83136L8.88669 7.92616L11.1578 8.1232L9.43632 9.61653L9.95483 11.8358L8.00003 10.6536Z",
                      fill: "#292B2F",
                    }),
                    (0, l.jsx)("path", {
                      d: "M9.45706 7.13802L7.61621 7.91986L8.08626 9.02658L9.28416 9.13053L9.45706 7.13802ZM8.47706 4.83062L6.63292 5.60471L6.63622 5.61247L8.47706 4.83062ZM7.52299 4.83062L9.36448 5.61099L9.36712 5.6047L7.52299 4.83062ZM6.543 7.1432L6.71216 9.13604L7.9139 9.03403L8.38448 7.92356L6.543 7.1432ZM4.03857 7.3558L4.19716 9.34953L4.20773 9.34863L4.03857 7.3558ZM3.74301 8.2632L5.05272 6.75168L5.05201 6.75108L3.74301 8.2632ZM5.64597 9.91208L7.59377 10.366L7.86766 9.19079L6.95567 8.40057L5.64597 9.91208ZM5.0756 12.3595L3.1278 11.9055L3.12758 11.9064L5.0756 12.3595ZM5.84819 12.9195L4.81616 11.2063L4.81258 11.2085L5.84819 12.9195ZM8.00003 11.6232L9.03508 9.91185L8.00209 9.28708L6.968 9.91002L8.00003 11.6232ZM10.1519 12.9247L11.1875 11.2137L11.1869 11.2133L10.1519 12.9247ZM10.9245 12.3647L8.97644 12.8177H8.97644L10.9245 12.3647ZM10.3541 9.91208L9.04439 8.40057L8.13288 9.19037L8.40608 10.3651L10.3541 9.91208ZM12.257 8.2632L10.948 6.75108L10.9473 6.75169L12.257 8.2632ZM8.00003 10.6536L9.03502 8.94219L8.00093 8.31679L6.96635 8.94139L8.00003 10.6536ZM6.05041 11.8306L4.10286 11.3756L3.02377 15.9941L7.08408 13.5428L6.05041 11.8306ZM6.56892 9.61134L8.51647 10.0664L8.79102 8.8913L7.87948 8.10056L6.56892 9.61134ZM4.84745 8.11801L4.67459 6.1255L-0.0310004 6.53375L3.5369 9.62879L4.84745 8.11801ZM7.11855 7.92098L7.29142 9.91349L8.49266 9.80928L8.96131 8.69832L7.11855 7.92098ZM8.00003 5.83136L9.84184 5.05178L7.99691 0.693003L6.15728 5.05402L8.00003 5.83136ZM8.88669 7.92616L7.04488 8.70574L7.51423 9.8146L8.71382 9.91868L8.88669 7.92616ZM11.1578 8.1232L12.4683 9.63398L16.0362 6.53893L11.3307 6.13068L11.1578 8.1232ZM9.43632 9.61653L8.12576 8.10575L7.21422 8.89648L7.48877 10.0716L9.43632 9.61653ZM9.95483 11.8358L8.91984 13.5471L12.9826 16.0042L11.9024 11.3807L9.95483 11.8358ZM12.1396 5.36328L9.62996 5.14551L9.28416 9.13053L11.7938 9.34831L12.1396 5.36328ZM11.2979 6.35618L10.3179 4.04878L6.63622 5.61247L7.61621 7.91986L11.2979 6.35618ZM10.3212 4.05655C9.45878 2.00198 6.54128 2.00198 5.67887 4.05655L9.36712 5.6047C8.8573 6.81927 7.14275 6.81927 6.63294 5.6047L10.3212 4.05655ZM5.68152 4.05027L4.70152 6.36285L8.38448 7.92356L9.36447 5.61098L5.68152 4.05027ZM6.37384 5.15037L3.8694 5.36296L4.20773 9.34863L6.71216 9.13604L6.37384 5.15037ZM3.87998 5.36209C1.64333 5.54001 0.753531 8.32058 2.43401 9.77532L5.05201 6.75108C6.03768 7.60434 5.52122 9.24418 4.19716 9.3495L3.87998 5.36209ZM2.43331 9.77471L4.33626 11.4236L6.95567 8.40057L5.05272 6.75168L2.43331 9.77471ZM3.69816 9.45814L3.1278 11.9055L7.0234 12.8134L7.59377 10.366L3.69816 9.45814ZM3.12758 11.9064C2.62503 14.0674 4.9682 15.7899 6.88379 14.6305L4.81258 11.2085C5.94003 10.5261 7.31876 11.5434 7.02362 12.8125L3.12758 11.9064ZM6.88021 14.6326L9.03205 13.3363L6.968 9.91002L4.81616 11.2063L6.88021 14.6326ZM6.96498 13.3345L9.11682 14.636L11.1869 11.2133L9.03508 9.91185L6.96498 13.3345ZM9.11626 14.6357C11.0319 15.7951 13.375 14.0726 12.8725 11.9116L8.97644 12.8177C8.6813 11.5486 10.06 10.5313 11.1875 11.2137L9.11626 14.6357ZM12.8725 11.9116L12.3021 9.45905L8.40608 10.3651L8.97644 12.8177L12.8725 11.9116ZM11.6638 11.4236L13.5667 9.77471L10.9473 6.75169L9.04439 8.40057L11.6638 11.4236ZM13.566 9.77532C15.2133 8.34936 14.4056 5.54348 12.1253 5.36209L11.8081 9.3495C10.4404 9.2407 9.99563 7.57556 10.948 6.75108L13.566 9.77532ZM6.96635 8.94139L5.01673 10.1184L7.08408 13.5428L9.0337 12.3657L6.96635 8.94139ZM7.99796 12.2856L8.51647 10.0664L4.62138 9.15631L4.10286 11.3756L7.99796 12.2856ZM7.87948 8.10056L6.15801 6.60724L3.5369 9.62879L5.25837 11.1221L7.87948 8.10056ZM5.02032 10.1105L7.29142 9.91349L6.94569 5.92846L4.67459 6.1255L5.02032 10.1105ZM8.96131 8.69832L9.84278 6.6087L6.15728 5.05402L5.2758 7.14364L8.96131 8.69832ZM6.15822 6.61094L7.04488 8.70574L10.7285 7.14659L9.84184 5.05178L6.15822 6.61094ZM8.71382 9.91868L10.9849 10.1157L11.3307 6.13068L9.05956 5.93365L8.71382 9.91868ZM9.84724 6.61242L8.12576 8.10575L10.7469 11.1273L12.4683 9.63398L9.84724 6.61242ZM7.48877 10.0716L8.00729 12.2908L11.9024 11.3807L11.3839 9.16149L7.48877 10.0716ZM10.9898 10.1244L9.03502 8.94219L6.96504 12.3649L8.91984 13.5471L10.9898 10.1244Z",
                      fill: "#292B2F",
                      mask: "url(#path-2-inside-1_1378_82282)",
                    }),
                    (0, l.jsx)("mask", {
                      id: "path-4-inside-2_1378_82282",
                      fill: "white",
                      children: (0, l.jsx)("path", {
                        d: "M10.6811 7.81008L8.98505 7.6629L8.32275 6.10351C8.2036 5.81966 7.79711 5.81966 7.67796 6.10351L7.01566 7.66641L5.3231 7.81008C4.62661 7.81008 4.49996 8 5.12336 8.42333L6.40942 9.53768L6.02395 11.1917C6.00007 12 5.86977 12.1684 6.54609 11.5701L8.00036 10.6941L9.45462 11.5737C9.72094 11.7348 10.5001 12.5 9.97675 11.1952L9.59129 9.53768L10.8773 8.42333C11.5001 8.19204 11.7365 7.81008 10.6811 7.81008ZM8.00036 10.0388L6.68275 10.8343L7.03318 9.33443L5.86977 8.32521L7.40463 8.19204L8.00036 6.77983L8.59958 8.19555L10.1344 8.32871L8.97103 9.33794L9.32146 10.8378L8.00036 10.0388Z",
                      }),
                    }),
                    (0, l.jsx)("path", {
                      d: "M10.6811 7.81008L8.98505 7.6629L8.32275 6.10351C8.2036 5.81966 7.79711 5.81966 7.67796 6.10351L7.01566 7.66641L5.3231 7.81008C4.62661 7.81008 4.49996 8 5.12336 8.42333L6.40942 9.53768L6.02395 11.1917C6.00007 12 5.86977 12.1684 6.54609 11.5701L8.00036 10.6941L9.45462 11.5737C9.72094 11.7348 10.5001 12.5 9.97675 11.1952L9.59129 9.53768L10.8773 8.42333C11.5001 8.19204 11.7365 7.81008 10.6811 7.81008ZM8.00036 10.0388L6.68275 10.8343L7.03318 9.33443L5.86977 8.32521L7.40463 8.19204L8.00036 6.77983L8.59958 8.19555L10.1344 8.32871L8.97103 9.33794L9.32146 10.8378L8.00036 10.0388Z",
                      fill: "#292B2F",
                    }),
                    (0, l.jsx)("path", {
                      d: "M10.6811 7.81008L10.5643 9.15667L10.6226 9.16173H10.6811V7.81008ZM8.98505 7.6629L7.74096 8.19129L8.05863 8.93924L8.8682 9.00949L8.98505 7.6629ZM8.32275 6.10351L7.07643 6.62665L7.07866 6.6319L8.32275 6.10351ZM7.67796 6.10351L8.92249 6.6309L8.92427 6.62665L7.67796 6.10351ZM7.01566 7.66641L7.12998 9.01321L7.94215 8.94427L8.26017 8.19379L7.01566 7.66641ZM5.3231 7.81008V9.16173H5.38037L5.43743 9.15689L5.3231 7.81008ZM5.12336 8.42333L6.00849 7.40181L5.94843 7.34977L5.88269 7.30512L5.12336 8.42333ZM6.40942 9.53768L7.7258 9.84446L7.9109 9.05021L7.29455 8.51616L6.40942 9.53768ZM6.02395 11.1917L4.70758 10.8849L4.67689 11.0166L4.6729 11.1518L6.02395 11.1917ZM6.54609 11.5701L5.84862 10.4124L5.74296 10.476L5.65056 10.5577L6.54609 11.5701ZM8.00036 10.6941L8.69987 9.53752L8.00175 9.11529L7.30289 9.53629L8.00036 10.6941ZM9.45462 11.5737L10.1545 10.4173L10.1541 10.4171L9.45462 11.5737ZM9.97675 11.1952L8.66024 11.5014L8.68369 11.6022L8.72224 11.6983L9.97675 11.1952ZM9.59129 9.53768L8.70616 8.51616L8.09014 9.04993L8.27477 9.84385L9.59129 9.53768ZM10.8773 8.42333L10.4067 7.15625L10.1772 7.24149L9.99222 7.40181L10.8773 8.42333ZM8.00036 10.0388L8.69983 8.8822L8.00096 8.45955L7.30177 8.88166L8.00036 10.0388ZM6.68275 10.8343L5.36655 10.5267L4.63728 13.648L7.38134 11.9914L6.68275 10.8343ZM7.03318 9.33443L8.34938 9.64196L8.53493 8.84781L7.91888 8.31341L7.03318 9.33443ZM5.86977 8.32521L5.75294 6.97862L2.57279 7.25452L4.98406 9.34623L5.86977 8.32521ZM7.40463 8.19204L7.52146 9.53863L8.33329 9.4682L8.65001 8.71739L7.40463 8.19204ZM8.00036 6.77983L9.24509 6.25297L7.99825 3.3072L6.75498 6.25448L8.00036 6.77983ZM8.59958 8.19555L7.35484 8.72241L7.67204 9.4718L8.48276 9.54214L8.59958 8.19555ZM10.1344 8.32871L11.0201 9.34973L13.4314 7.25802L10.2513 6.98212L10.1344 8.32871ZM8.97103 9.33794L8.08533 8.31692L7.46929 8.85132L7.65483 9.64546L8.97103 9.33794ZM9.32146 10.8378L8.62198 11.9943L11.3677 13.6549L10.6377 10.5302L9.32146 10.8378ZM10.798 6.46349L9.1019 6.31631L8.8682 9.00949L10.5643 9.15667L10.798 6.46349ZM10.2291 7.13451L9.56684 5.57512L7.07866 6.6319L7.74096 8.19129L10.2291 7.13451ZM9.56905 5.58037C8.98622 4.19185 7.01449 4.19185 6.43166 5.58037L8.92427 6.62665C8.57972 7.44748 7.42099 7.44748 7.07644 6.62665L9.56905 5.58037ZM6.43345 5.57612L5.77114 7.13902L8.26017 8.19379L8.92248 6.63089L6.43345 5.57612ZM6.90133 6.3196L5.20878 6.46328L5.43743 9.15689L7.12998 9.01321L6.90133 6.3196ZM5.3231 6.45843C5.10802 6.45843 4.84452 6.47114 4.58999 6.53325C4.44279 6.56917 3.76471 6.73882 3.47608 7.44908C3.15174 8.24719 3.63364 8.86933 3.75832 9.01788C3.9431 9.23802 4.17343 9.4121 4.36403 9.54153L5.88269 7.30512C5.76159 7.22289 5.77398 7.21448 5.82894 7.27996C5.85758 7.31408 5.94673 7.4254 6.00911 7.60946C6.07876 7.81499 6.1177 8.12916 5.98047 8.46683C5.84997 8.78797 5.62675 8.9651 5.49284 9.04671C5.36321 9.12571 5.25893 9.15263 5.23081 9.15949C5.17642 9.17276 5.18995 9.16173 5.3231 9.16173V6.45843ZM4.23823 9.44484L5.52429 10.5592L7.29455 8.51616L6.00849 7.40181L4.23823 9.44484ZM5.09305 9.2309L4.70758 10.8849L7.34033 11.4985L7.7258 9.84446L5.09305 9.2309ZM4.6729 11.1518C4.66635 11.3734 4.65876 11.4066 4.64988 11.6197C4.64705 11.6874 4.64296 11.806 4.65294 11.9315C4.65839 12 4.68026 12.3558 4.92373 12.6956C5.07395 12.9053 5.30495 13.104 5.61868 13.2083C5.91447 13.3067 6.17762 13.2858 6.3497 13.2504C6.64872 13.1889 6.86511 13.0426 6.93214 12.9973C7.10307 12.8819 7.29288 12.7141 7.44162 12.5826L5.65056 10.5577C5.46114 10.7253 5.41361 10.7608 5.41951 10.7568C5.42905 10.7504 5.462 10.7285 5.51307 10.7028C5.55951 10.6794 5.66173 10.632 5.80505 10.6025C5.95216 10.5722 6.19396 10.5508 6.47159 10.6431C6.76716 10.7414 6.98318 10.9285 7.12116 11.1211C7.24527 11.2943 7.29575 11.4554 7.31684 11.5372C7.33927 11.6243 7.34562 11.6907 7.34773 11.7172C7.35154 11.7651 7.34865 11.7846 7.35083 11.7323C7.35196 11.7051 7.36962 11.4141 7.37501 11.2316L4.6729 11.1518ZM7.24356 12.7279L8.69782 11.8519L7.30289 9.53629L5.84862 10.4124L7.24356 12.7279ZM7.30084 11.8506L8.75511 12.7302L10.1541 10.4171L8.69987 9.53752L7.30084 11.8506ZM8.75473 12.73C8.72817 12.7139 8.72345 12.7086 8.77203 12.7445C8.79887 12.7643 8.87336 12.8202 8.92995 12.8612C9.00019 12.912 9.28841 13.1293 9.62677 13.2298C9.78218 13.276 10.3131 13.4107 10.8463 13.0654C11.4232 12.692 11.4968 12.0983 11.5043 11.8721C11.5127 11.6184 11.4612 11.3899 11.4195 11.2371C11.3729 11.066 11.3079 10.8831 11.2313 10.692L8.72224 11.6983C8.77644 11.8335 8.80159 11.9121 8.81145 11.9483C8.82631 12.0027 8.79771 11.9273 8.80249 11.7828C8.80635 11.6658 8.84988 11.1376 9.37713 10.7962C9.86087 10.483 10.3227 10.6165 10.3968 10.6385C10.466 10.6591 10.514 10.6811 10.5353 10.6914C10.5586 10.7027 10.5715 10.7105 10.5719 10.7107C10.573 10.7114 10.5685 10.7087 10.5574 10.7012C10.5465 10.6938 10.5325 10.684 10.5144 10.6709C10.4686 10.6378 10.4426 10.6177 10.3779 10.5699C10.335 10.5382 10.2476 10.4737 10.1545 10.4173L8.75473 12.73ZM11.2933 10.889L10.9078 9.23151L8.27477 9.84385L8.66024 11.5014L11.2933 10.889ZM10.4764 10.5592L11.7625 9.44484L9.99222 7.40181L8.70616 8.51616L10.4764 10.5592ZM11.3479 9.69041C11.5779 9.60499 11.8316 9.48518 12.0568 9.32017C12.1687 9.23817 12.3127 9.11663 12.4415 8.94784C12.5647 8.78658 12.7427 8.4909 12.7591 8.08449C12.8006 7.05456 11.9118 6.67221 11.6778 6.59303C11.3522 6.48286 10.9945 6.45843 10.6811 6.45843V9.16173C10.8955 9.16173 10.904 9.18505 10.8114 9.15373C10.7647 9.13794 10.5948 9.07633 10.4206 8.90404C10.2138 8.69948 10.0419 8.37256 10.058 7.97545C10.0719 7.63125 10.2211 7.40138 10.2928 7.30747C10.3703 7.20603 10.4402 7.15336 10.4588 7.1397C10.4975 7.11136 10.4881 7.12602 10.4067 7.15625L11.3479 9.69041ZM7.30177 8.88166L5.98417 9.67713L7.38134 11.9914L8.69894 11.1959L7.30177 8.88166ZM7.99895 11.1418L8.34938 9.64196L5.71698 9.02691L5.36655 10.5267L7.99895 11.1418ZM7.91888 8.31341L6.75547 7.30419L4.98406 9.34623L6.14748 10.3555L7.91888 8.31341ZM5.98659 9.6718L7.52146 9.53863L7.2878 6.84546L5.75294 6.97862L5.98659 9.6718ZM8.65001 8.71739L9.24573 7.30518L6.75498 6.25448L6.15925 7.6667L8.65001 8.71739ZM6.75562 7.30669L7.35484 8.72241L9.84432 7.66869L9.24509 6.25297L6.75562 7.30669ZM8.48276 9.54214L10.0176 9.6753L10.2513 6.98212L8.71641 6.84896L8.48276 9.54214ZM9.24874 7.30769L8.08533 8.31692L9.85674 10.359L11.0201 9.34973L9.24874 7.30769ZM7.65483 9.64546L8.00526 11.1453L10.6377 10.5302L10.2872 9.03041L7.65483 9.64546ZM10.0209 9.68117L8.69983 8.8822L7.30088 11.1954L8.62198 11.9943L10.0209 9.68117Z",
                      fill: "#292B2F",
                      mask: "url(#path-4-inside-2_1378_82282)",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("defs", {
              children: [
                (0, l.jsx)("clipPath", {
                  id: "clip0_1378_82282",
                  children: (0, l.jsx)("rect", {
                    width: "16",
                    height: "16",
                    fill: "white",
                  }),
                }),
                (0, l.jsx)("clipPath", {
                  id: "clip1_1378_82282",
                  children: (0, l.jsx)("rect", {
                    width: "12.4444",
                    height: "12.4444",
                    fill: "white",
                    transform: "translate(1.77783 2.66602)",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      n("884691");
    },
    48683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("79112"),
        r = n("271938"),
        u = n("945330"),
        o = n("599110"),
        d = n("243632"),
        c = n("180273"),
        f = n("411511"),
        h = n("49111"),
        C = n("782340"),
        p = n("120809");
      let m = (e, t, n) => {
        let l = t.assets.tooltipSrc;
        switch (e) {
          case f.TooltipActions.STREAM_CTA:
            return {
              header:
                C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
                  gameName: t.title,
                }),
              body: t.messages.enrollmentTooltip(n),
              imgSrc: l,
              imgStyle: p.dropImgPreStreamNotice,
            };
          case f.TooltipActions.TRACK_PROGRESS:
            return {
              header:
                C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
                  gameName: t.title,
                }),
              body: "",
              imgSrc: l,
              imgStyle: p.dropImgProgressTracker,
            };
          case f.TooltipActions.QUEST_COMPLETION:
            return {
              header: C.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER,
              body: t.messages.completionTooltip(n),
              imgSrc: l,
              imgStyle: p.dropImgQuestCompletion,
            };
          case f.TooltipActions.LOADING_INITIAL_PROGRESS:
            return {
              header: "",
              body: "",
              imgSrc: l,
              imgStyle: p.dropImgPreStreamNotice,
            };
        }
      };
      function E(e) {
        let { streamLengthRequirement: t, viewerCountRequirement: n } = e,
          i = (0, a.useStateFromStores)(
            [c.default],
            () => c.default.currentDropQuestStreamProgress
          ),
          r = Math.floor((i / 100) * t).toString();
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(s.Text, {
              variant: "text-sm/bold",
              className: p.progressBarCount,
              children:
                C.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
                  minutesStreamed: r,
                  streamLengthRequirement: t,
                }),
            }),
            (0, l.jsx)("div", {
              className: p.progressBarContainer,
              children: (0, l.jsx)("div", {
                className: p.progressBarOuter,
                children: (0, l.jsx)("div", {
                  className: p.progressBarInner,
                  style: { width: "".concat(i, "%") },
                }),
              }),
            }),
            (0, l.jsxs)(s.Text, {
              variant: "text-xs/medium",
              className: p.viewerCount,
              children: [
                "*",
                C.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
                  numViewers: n,
                }),
                "*",
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { onClose: t, tooltipAction: n, partnerGame: c } = e,
          g = (0, d.useDropsExperiment)(c);
        (0, d.useFetchInitialDropProgress)(c);
        let I = (0, a.useStateFromStores)([r.default], () => r.default.getId());
        if (null == g) return null;
        let { streamLengthRequirement: _, viewerCountRequirement: S } =
            g.config,
          N = g.drop,
          { header: T, body: A, imgSrc: L, imgStyle: v } = m(n, N, _),
          x = () => {
            o.default.track(
              h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK,
              {
                user_id: I,
                drops_quest_id: N.dropsQuestId,
                game_id: N.dropsGameId,
                game_name: N.title.toLowerCase(),
                tooltip_action: n,
              }
            );
          },
          R = () => {
            t();
          };
        return (0, l.jsxs)("div", {
          className: p.container,
          children: [
            (0, l.jsx)("img", { src: L, alt: "", className: v }),
            (0, l.jsx)(s.Clickable, {
              className: p.buttonClose,
              "aria-label": C.default.Messages.CLOSE,
              onClick: R,
              children: (0, l.jsx)(u.default, {
                width: 16,
                height: 16,
                className: p.closeIcon,
              }),
            }),
            n === f.TooltipActions.LOADING_INITIAL_PROGRESS
              ? (0, l.jsx)(s.Spinner, { className: p.spinner })
              : (0, l.jsx)(s.Heading, {
                  className: p.title,
                  variant: "heading-md/extrabold",
                  children: T,
                }),
            n === f.TooltipActions.TRACK_PROGRESS
              ? (0, l.jsx)(E, {
                  streamLengthRequirement: _,
                  viewerCountRequirement: S,
                })
              : (0, l.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  className: p.subTitle,
                  children: A,
                }),
            n === f.TooltipActions.QUEST_COMPLETION
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(s.Button, {
                      look: s.Button.Looks.INVERTED,
                      fullWidth: !0,
                      onClick: () => {
                        t(),
                          i.default.open(h.UserSettingsSections.INVENTORY),
                          x();
                      },
                      children: C.default.Messages.REDEEM,
                    }),
                    (0, l.jsx)(s.Button, {
                      className: p.linkButtonContainer,
                      innerClassName: p.linkButton,
                      onClick: R,
                      look: s.Button.Looks.LINK,
                      fullWidth: !0,
                      color: s.Button.Colors.WHITE,
                      children: C.default.Messages.NOT_NOW,
                    }),
                  ],
                })
              : (0, l.jsx)(s.Button, {
                  look: s.Button.Looks.INVERTED,
                  fullWidth: !0,
                  onClick: () => {
                    t(), i.default.open(h.UserSettingsSections.INVENTORY), x();
                  },
                  children: C.default.Messages.LEARN_MORE,
                }),
            (0, l.jsx)("div", { className: p.pointer }),
          ],
        });
      }
    },
    690874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("446674"),
        a = n("42203"),
        s = n("957255"),
        i = n("660478"),
        r = n("282109"),
        u = n("299039"),
        o = n("843455");
      function d(e) {
        return (0, l.useStateFromStoresObject)(
          [a.default, i.default, r.default, s.default],
          () => {
            let t = u.default.keys(e);
            return t.reduce(
              (e, t) => {
                let n = a.default.getChannel(t),
                  l = null == n ? void 0 : n.isGuildVocal();
                return (
                  (e.badge = e.badge + i.default.getMentionCount(t)),
                  (e.unread =
                    e.unread ||
                    (!l &&
                      s.default.can(o.Permissions.VIEW_CHANNEL, n) &&
                      i.default.hasUnread(t) &&
                      !r.default.isChannelMuted(
                        null == n ? void 0 : n.getGuildId(),
                        t
                      ))),
                  e
                );
              },
              { badge: 0, unread: !1 }
            );
          }
        );
      }
    },
    149362: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("42203"),
        s = n("316133"),
        i = n("379881"),
        r = n("49111");
      function u(e) {
        let t = (0, l.useStateFromStoresObject)(
          [s.default, a.default, i.default],
          () => {
            if (e !== r.FAVORITES) return s.default.getVoiceStates(e);
            let t = i.default.getFavoriteChannels(),
              n = {};
            for (let e in t) {
              let t = a.default.getChannel(e);
              null != t && (n[e] = s.default.getVoiceStatesForChannel(t));
            }
            return n;
          },
          [e]
        );
        return t;
      }
    },
    620882: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FavoriteAddedTooltip: function () {
            return p;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("986373"),
        o = n("49111"),
        d = n("782340"),
        c = n("545762"),
        f = n("379333"),
        h = n("716175");
      function C() {
        return (0, l.jsx)("div", {
          className: i(f.row, f.rowGuildName),
          children: (0, l.jsx)("span", {
            className: i(
              f.guildNameText,
              f.guildNameTextLimitedSize,
              c.tooltipText
            ),
            children: d.default.Messages.FAVORITE_ADDED,
          }),
        });
      }
      let p = a.memo(function (e) {
        let { "aria-label": t = !1, children: n } = e,
          s = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0,
            u.useFavoriteAdded)();
            return (
              a.useEffect(() => {
                if (e) {
                  let e = setTimeout(() => {
                    t();
                  }, 1500);
                  return () => {
                    t(), clearTimeout(e);
                  };
                }
              }, [e, t]),
              e
            );
          })();
        return (0, l.jsx)(r.Tooltip, {
          forceOpen: s,
          color: r.TooltipColors.GREEN,
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          align: "center",
          text: (0, l.jsx)(C, {}),
          "aria-label": t,
          tooltipClassName: h.listItemTooltip,
          children: e =>
            (0, l.jsx)("div", {
              ...e,
              onMouseEnter: o.NOOP,
              onMouseLeave: o.NOOP,
              children: n,
            }),
        });
      });
    },
    480376: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("222007"),
        n("808653"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("974667"),
        u = n("446674"),
        o = n("77078"),
        d = n("450911"),
        c = n("272030"),
        f = n("191225"),
        h = n("610898"),
        C = n("255991"),
        p = n("698652"),
        m = n("393027"),
        E = n("373469"),
        g = n("42203"),
        I = n("18494"),
        _ = n("800762"),
        S = n("290581"),
        N = n("15738"),
        T = n("108189"),
        A = n("299039"),
        L = n("379881"),
        v = n("986373"),
        x = n("690874"),
        R = n("620882"),
        M = n("686373"),
        O = n("49111"),
        y = n("782340"),
        D = n("422300");
      let b = {
        analyticsSource: {
          page: O.AnalyticsPages.GUILD_CHANNEL,
          section: O.AnalyticsSections.CHANNEL_LIST,
          object: O.AnalyticsObjects.CHANNEL,
        },
      };
      function j() {
        let e = (0, r.useTreeItem)("favorites"),
          { favoriteAdded: t, clearFavoriteAdded: s } = (0,
          v.useFavoriteAdded)(),
          [j, G] = a.useState(!1),
          { favoriteServerMuted: U, favoriteChannels: P } = (0,
          u.useStateFromStoresObject)([L.default], () => ({
            favoriteChannels: L.default.getFavoriteChannels(),
            favoriteServerMuted: L.default.favoriteServerMuted,
          })),
          w = (0, u.useStateFromStores)([I.default], () =>
            I.default.getChannelId(O.FAVORITES)
          ),
          F = (0, u.useStateFromStores)([g.default], () =>
            g.default.getChannel(w)
          ),
          B = (0, m.default)(e => e.guildId),
          V = B === O.FAVORITES,
          { badge: H, unread: k } = (0, x.default)(P),
          Y = (function (e) {
            let t = (0, u.useStateFromStores)([I.default], () =>
                I.default.getVoiceChannelId()
              ),
              n = null != t && null != e[t],
              l = (0, u.useStateFromStores)([E.default], () => {
                if (!n) return !1;
                let t = E.default.getCurrentUserActiveStream();
                return null != t && null != e[t.channelId];
              }),
              a = (0, u.useStateFromStores)([E.default], () =>
                E.default
                  .getAllApplicationStreams()
                  .some(t => null != e[t.channelId])
              ),
              s = (0, u.useStateFromStores)(
                [_.default],
                () => n && null != t && _.default.hasVideo(t),
                [n, t]
              ),
              i = (0, u.useStateFromStoresArray)([f.default], () =>
                A.default
                  .keys(e)
                  .reduce(
                    (e, t) => (
                      e.push(...f.default.getEmbeddedActivitiesForChannel(t)), e
                    ),
                    []
                  )
              ),
              r = (0, u.useStateFromStores)([f.default], () =>
                Array.from(f.default.getSelfEmbeddedActivities().values()).some(
                  t => {
                    let { channelId: n } = t;
                    return null != e[n];
                  }
                )
              ),
              o = i.length > 0,
              d = !1,
              c = !1,
              h = !1,
              p = !1;
            return (
              n ? ((d = !s), (c = s), (h = l), (p = r)) : ((h = a), (p = o)),
              (0, C.renderMediaBadge)({
                audio: d,
                video: c,
                screenshare: h,
                liveStage: !1,
                isCurrentUserConnected: n,
                activity: p,
              })
            );
          })(P),
          K = H > 0 ? (0, p.renderMentionBadge)(H) : null,
          W = a.useCallback(() => {
            s();
          }, [s]);
        return (0, l.jsxs)(h.ListItem, {
          children: [
            (0, l.jsx)(N.default, {
              selected: V,
              hovered: j,
              unread: k && !U,
              className: D.pill,
            }),
            (0, l.jsx)(M.default, {
              onShow: W,
              children: (0, l.jsx)(R.FavoriteAddedTooltip, {
                children: (0, l.jsx)(o.BlobMask, {
                  selected: V || j,
                  upperBadge: Y,
                  lowerBadge: K,
                  children: (0, l.jsx)(T.default, {
                    ...e,
                    ariaLabel:
                      y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                        guildName: y.default.Messages.FAVORITES_GUILD_NAME,
                        mentions: H,
                      }),
                    to: {
                      pathname: O.Routes.CHANNEL(O.FAVORITES, w),
                      state: b,
                    },
                    selected: V || j,
                    onMouseEnter: () => G(!0),
                    onMouseLeave: () => G(!1),
                    onMouseDown: function () {
                      null != F && d.default.preload(F.guild_id, F.id);
                    },
                    onContextMenu: function (e) {
                      (0, c.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("95086")
                          .then(n.bind(n, "95086"));
                        return t => (0, l.jsx)(e, { ...t });
                      });
                    },
                    children: (0, l.jsx)("div", {
                      className: i(D.ring, { [D.ringActive]: t }),
                      children: (0, l.jsx)(S.default, {
                        className: D.favoriteIcon,
                        width: 20,
                        height: 20,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    686373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007"),
        n("881410"),
        n("424973");
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("917351"),
        r = n.n(i),
        u = n("446674"),
        o = n("77078"),
        d = n("191225"),
        c = n("488464"),
        f = n("998716"),
        h = n("373469"),
        C = n("42203"),
        p = n("697218"),
        m = n("316133"),
        E = n("272339"),
        g = n("82636"),
        I = n("368121"),
        _ = n("228427"),
        S = n("619911"),
        N = n("811305"),
        T = n("449008"),
        A = n("299039"),
        L = n("379881"),
        v = n("49111"),
        x = n("782340"),
        R = n("379333"),
        M = n("716175");
      function O(e, t) {
        return 0 === t.length
          ? null
          : (0, l.jsxs)("div", {
              className: R.row,
              children: [
                (0, l.jsx)(e, { className: R.activityIcon }),
                (0, l.jsx)(N.default, { guildId: void 0, users: t, max: 6 }),
              ],
            });
      }
      function y() {
        var e, t;
        let n = (0, u.useStateFromStoresArray)([L.default, C.default], () =>
            A.default
              .keys(L.default.getFavoriteChannels())
              .map(e => C.default.getChannel(e))
              .filter(T.isNotNullish)
          ),
          a = n.map(e => e.id),
          s = n.filter(e => e.type === v.ChannelTypes.GUILD_VOICE),
          i = n
            .filter(e => e.type === v.ChannelTypes.GUILD_STAGE_VOICE)
            .map(e => e.id),
          x = (0, u.useStateFromStoresArray)(
            [m.default],
            () =>
              r.flatMap(s, e => {
                let t = m.default.getVoiceStatesForChannel(e);
                return t.map(e => {
                  let { user: t } = e;
                  return t;
                });
              }),
            [s]
          ),
          M = (0, u.useStateFromStoresArray)([c.default], () =>
            r.flatMap(i, e => {
              let t = c.default.getMutableParticipants(
                e,
                f.StageChannelParticipantNamedIndex.SPEAKER
              );
              return t
                .filter(e => e.type === f.StageChannelParticipantTypes.VOICE)
                .map(e => {
                  let { user: t } = e;
                  return t;
                });
            })
          ),
          y = (0, u.useStateFromStores)([c.default], () => {
            let e = 0;
            for (let t of i)
              e += c.default.getParticipantCount(
                t,
                f.StageChannelParticipantNamedIndex.AUDIENCE
              );
            return e;
          }),
          D = (0, u.useStateFromStoresArray)(
            [h.default],
            () =>
              h.default
                .getAllApplicationStreams()
                .filter(e => a.includes(e.channelId))
                .map(e => e.ownerId),
            [a]
          ),
          b = (0, u.useStateFromStoresArray)(
            [d.default],
            () => {
              let e = d.default.getEmbeddedActivitiesByChannel(),
                t = [];
              for (let s of a) {
                var n, l;
                t.push(
                  ...(null !==
                    (l =
                      null === (n = e.get(s)) || void 0 === n
                        ? void 0
                        : n.flatMap(e => Array.from(e.userIds))) && void 0 !== l
                    ? l
                    : [])
                );
              }
              return t;
            },
            [a]
          ),
          j = (0, u.useStateFromStoresArray)(
            [p.default],
            () => b.map(e => p.default.getUser(e)),
            [b]
          ),
          G = (0, u.useStateFromStoresArray)(
            [p.default],
            () => D.map(e => p.default.getUser(e)),
            [D]
          ),
          U = O(
            I.default,
            x.filter(e => !D.includes(e.id) && !b.includes(e.id))
          );
        let P =
            ((e = M),
            (t = y),
            0 === e.length
              ? null
              : (0, l.jsxs)("div", {
                  className: R.row,
                  children: [
                    (0, l.jsx)(_.default, { className: R.activityIcon }),
                    (0, l.jsx)(N.default, {
                      guildId: void 0,
                      users: e,
                      max: 3,
                    }),
                    (0, l.jsxs)("div", {
                      className: R.stageListenerPill,
                      children: [
                        (0, l.jsx)(E.default, { width: 16, height: 16 }),
                        (0, l.jsx)(o.Text, {
                          className: R.stageListenerCount,
                          color: "text-normal",
                          variant: "text-xs/medium",
                          children: t,
                        }),
                      ],
                    }),
                  ],
                })),
          w = O(
            S.default,
            G.filter(e => null != e && !b.includes(e.id))
          ),
          F = O(g.default, j);
        return (0, l.jsxs)(l.Fragment, { children: [P, U, w, F] });
      }
      function D() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: s(R.row, R.rowGuildName),
              children: (0, l.jsx)("span", {
                className: s(R.guildNameText, R.guildNameTextLimitedSize),
                children: x.default.Messages.FAVORITES_GUILD_NAME,
              }),
            }),
            (0, l.jsx)(y, {}),
          ],
        });
      }
      function b(e) {
        let { "aria-label": t = !1, onShow: n, children: a } = e;
        return (0, l.jsx)(o.Tooltip, {
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          text: (0, l.jsx)(D, {}),
          "aria-label": t,
          tooltipClassName: M.listItemTooltip,
          onTooltipShow: n,
          children: e => (0, l.jsx)("div", { ...e, children: a }),
        });
      }
    },
    369964: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("731898"),
        o = n("10641"),
        d = n("275623"),
        c = n("216422"),
        f = n("994428"),
        h = n("782340"),
        C = n("175787"),
        p = a.forwardRef(function (e, t) {
          let {
              body: n,
              header: s,
              artClassName: p,
              headerClassName: m,
              contentClassName: E,
              tryItText: g,
              dismissText: I,
              onTryFeature: _,
              onClose: S,
              className: N,
              inlineArt: T = !1,
              isPremiumFeature: A = !1,
              shouldUseHorizontalButtons: L = !1,
              showGIFTag: v = !1,
              dismissibleContent: x,
              position: R = "top",
              align: M = "center",
              art: O,
              isPremiumEarlyAccess: y = !1,
              maxWidth: D = 280,
            } = e,
            b = L ? r.Button.Sizes.LARGE : r.Button.Sizes.MAX,
            [j, G] = a.useState(!1),
            { ref: U, width: P } = (0, u.default)();
          function w(e) {
            (0, o.markDismissibleContentAsDismissed)(x, { dismissAction: e });
          }
          return (
            a.useEffect(() => {
              var e, t;
              let n =
                (null !==
                  (t =
                    null === (e = U.current) || void 0 === e
                      ? void 0
                      : e.scrollWidth) && void 0 !== t
                  ? t
                  : 0) + 64;
              !j && n > D && G(!0);
            }, [j, P, U, D]),
            a.useEffect(() => {
              (0, o.requestMarkDismissibleContentAsShown)(x);
            }, [x]),
            (0, l.jsx)("div", {
              className: N,
              ref: t,
              children: (0, l.jsxs)("div", {
                className: i(C.content, E, {
                  [C.contentNoArt]: null == p || T,
                  [C.contentPremium]: A || y,
                }),
                children: [
                  (0, l.jsxs)("div", {
                    className: i(p, T ? C.artInline : C.artAbsolute),
                    children: [
                      v && (0, l.jsx)(d.default, { className: C.gifTag }),
                      O,
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: C.body,
                    children: [
                      (0, l.jsxs)(r.Heading, {
                        className: i(A ? C.headerWithPremiumIcon : C.header, m),
                        variant: "heading-md/bold",
                        color: "always-white",
                        children: [
                          A && !y
                            ? (0, l.jsx)(c.default, {
                                className: C.premiumIcon,
                              })
                            : null,
                          y
                            ? (0, l.jsxs)(r.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: C.earlyAccessBadgeContainer,
                                children: [
                                  (0, l.jsx)(c.default, {
                                    className: C.earlyAccessIcon,
                                  }),
                                  (0, l.jsx)("span", {
                                    className: C.earlyAccessText,
                                    children:
                                      h.default.Messages
                                        .REMIXING_TOOLTIP_NITRO_EARLY_ACCESS,
                                  }),
                                ],
                              })
                            : null,
                          s,
                        ],
                      }),
                      null == n
                        ? null
                        : "string" == typeof n
                          ? (0, l.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              color: "always-white",
                              children: n,
                            })
                          : n,
                    ],
                  }),
                  (0, l.jsx)("div", {
                    ref: U,
                    className:
                      j || !L
                        ? C.buttonContainerVertical
                        : C.buttonContainerHorizontal,
                    children:
                      null != _
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(r.Button, {
                                className: C.button,
                                size: b,
                                onClick: e => {
                                  null == S || S(e),
                                    _(e),
                                    w(f.ContentDismissActionType.PRIMARY);
                                },
                                color:
                                  A || y
                                    ? r.Button.Colors.BRAND
                                    : r.Button.Colors.WHITE,
                                look:
                                  A || y
                                    ? r.Button.Looks.INVERTED
                                    : r.Button.Looks.FILLED,
                                children:
                                  null != g
                                    ? g
                                    : h.default.Messages
                                        .EDUCATION_NEW_FEATURE_TRY_IT,
                              }),
                              (0, l.jsx)(r.Button, {
                                className: C.button,
                                size: b,
                                onClick: e => {
                                  null == S || S(e),
                                    w(f.ContentDismissActionType.DISMISS);
                                },
                                color:
                                  A || y
                                    ? r.Button.Colors.WHITE
                                    : r.Button.Colors.BRAND,
                                look:
                                  A || y
                                    ? r.Button.Looks.LINK
                                    : r.Button.Looks.FILLED,
                                children:
                                  null != I
                                    ? I
                                    : h.default.Messages
                                        .EDUCATION_NEW_FEATURE_DISMISS,
                              }),
                            ],
                          })
                        : (0, l.jsx)(r.Button, {
                            className: C.button,
                            size: r.Button.Sizes.MAX,
                            onClick: e => {
                              null == S || S(e),
                                w(f.ContentDismissActionType.PRIMARY);
                            },
                            color: r.Button.Colors.WHITE,
                            children:
                              h.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM,
                          }),
                  }),
                  (0, l.jsx)("div", {
                    className: i(C.pointer, {
                      [C.bottomPointer]: "top" === R,
                      [C.centerLeftPointer]: "right" === R && "center" === M,
                      [C.topLeftPointer]: "right" === R && "top" === M,
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    560367: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("781738");
      var l = n("782340");
      let a = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      function s(e) {
        let t = l.default.Messages.ACTIVITY_PANEL_GO_LIVE;
        return (
          null != e &&
            null != e.sourceName &&
            e.sourceName.length > 0 &&
            (t = e.sourceName),
          { sanitizedTitle: t.replace(a, ""), title: t }
        );
      }
    },
    293383: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("509043"),
        u = n("437825"),
        o = n("587974"),
        d = n("432379");
      let c = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];
      function f(e) {
        return (0, r.int2hex)(
          c[
            (function (e) {
              let t = 5381,
                n = 0;
              for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
              return t >>> 0;
            })(e) % c.length
          ]
        );
      }
      function h(e) {
        var t;
        let { title: n, className: s } = e,
          [r, c] = a.useState(f(n));
        return (
          a.useEffect(() => {
            c(f(n));
          }, [n]),
          (0, l.jsxs)("div", {
            className: d.wrapper,
            children: [
              (0, l.jsx)(o.default, {
                mask: o.default.Masks.STATUS_SCREENSHARE,
                width: 32,
                height: 32,
                children: (0, l.jsx)("div", {
                  className: i(d.icon, s),
                  style: { backgroundColor: r },
                  children: null !== (t = n[0]) && void 0 !== t ? t : "?",
                }),
              }),
              (0, l.jsx)(u.default, { className: d.badge }),
            ],
          })
        );
      }
    },
    514256: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateGuildPremiumSubscriptionCount: function () {
            return a;
          },
        });
      var l = n("913144");
      let a = (e, t) => {
        l.default.wait(() => {
          l.default.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t,
          });
        });
      };
    },
    223817: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("446674"),
        a = n("913144");
      let s = {};
      class i extends l.default.PersistedStore {
        initialize(e) {
          null != e && (s = e);
        }
        getState() {
          return s;
        }
        getCountForGuild(e) {
          return s[e];
        }
      }
      (i.displayName = "GuildBoostingProgressBarPersistedStore"),
        (i.persistKey = "PremiumGuildProgressBarPersistedStore");
      var r = new i(a.default, {
        APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
          let { guildId: t, premiumCount: n } = e;
          s = { ...s, [t]: n };
        },
      });
    },
    880730: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PROGRESS_BAR_CONTAINER_HEIGHT: function () {
            return O;
          },
          PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN: function () {
            return y;
          },
          default: function () {
            return b;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("146606"),
        u = n("446674"),
        o = n("769846"),
        d = n("77078"),
        c = n("272030"),
        f = n("206230"),
        h = n("812204"),
        C = n("716241"),
        p = n("685665"),
        m = n("592407"),
        E = n("957255"),
        g = n("461380"),
        I = n("427459"),
        _ = n("159885"),
        S = n("514256"),
        N = n("223817"),
        T = n("379532"),
        A = n("944305"),
        L = n("49111"),
        v = n("782340"),
        x = n("395914");
      let R = (0, _.cssValueToNumber)(
          o.default.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN
        ),
        M = e => {
          let { guild: t, onSelect: n } = e,
            [s, i] = a.useState(t.premiumProgressBarEnabled),
            [r, o] = a.useState(!1),
            f = (0, u.useStateFromStores)([E.default], () =>
              E.default.can(L.Permissions.MANAGE_GUILD, t)
            ),
            h = async () => {
              f &&
                (o(!0),
                await m.default.saveGuild(t.id, {
                  premiumProgressBarEnabled: !s,
                }),
                i(!s),
                o(!1));
            };
          return (0, l.jsx)(d.Menu, {
            navId: "progress-bar-context",
            onClose: c.closeContextMenu,
            "aria-label": v.default.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
            onSelect: n,
            children: (0, l.jsx)(d.MenuCheckboxItem, {
              id: "progress-bar-enabled",
              label: v.default.Messages.GUILD_ENABLE_PROGRESS_BAR,
              checked: s,
              disabled: r,
              action: h,
            }),
          });
        },
        O = 57,
        y = O + R,
        D = { tension: 180, friction: 80 };
      var b = e => {
        let { guild: t, withMargin: n } = e,
          { analyticsLocations: s } = (0, p.default)(
            h.default.GUILD_BOOSTING_SIDEBAR_DISPLAY
          ),
          { premiumSubscriberCount: o, id: m } = t,
          _ = (0, I.getGuildTierFromAppliedBoostCount)(o, m),
          R = (0, I.getNextTier)(_, t.id),
          O = null == R,
          y = null != R ? R : _,
          b = (0, u.useStateFromStores)([N.default], () => {
            var e;
            return null !== (e = N.default.getCountForGuild(m)) && void 0 !== e
              ? e
              : 0;
          }),
          j = (0, u.useStateFromStores)(
            [f.default],
            () => f.default.useReducedMotion
          ),
          G = (0, u.useStateFromStores)([E.default], () =>
            E.default.can(L.Permissions.MANAGE_GUILD, t)
          );
        a.useEffect(() => {
          b !== o && (0, S.updateGuildPremiumSubscriptionCount)(m, o);
        }, [m, b, o]);
        let U = "".concat(
            Math.min(
              100,
              (o / (0, I.getAppliedGuildBoostsRequired)(t.id)[y]) * 100
            ),
            "%"
          ),
          { current: P } = a.useRef(U),
          w = {
            from: { width: b === o ? P : "0%" },
            to: { width: U },
            config: D,
            immediate: j,
          },
          [F, B] = (0, r.useSpring)(() => w),
          V = () => {
            (0, C.trackWithMetadata)(
              L.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
              {
                location: {
                  section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR,
                },
                guild_id: m,
                location_stack: s,
              }
            ),
              (0, T.default)({
                analyticsLocations: s,
                analyticsSourceLocation: {
                  page: L.AnalyticsPages.GUILD_CHANNEL,
                  section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR,
                  object: L.AnalyticsObjects.TOOLTIP,
                },
                guild: t,
                perks: (0, A.premiumProgressBarUpsellPerks)(),
                perkIntro:
                  v.default.Messages
                    .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER,
              });
          },
          H = v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
            levelName: (0, I.getShortenedTierName)(y),
          }),
          k =
            v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format(
              {
                numBoosts: o,
                numTotal: (0, I.getAppliedGuildBoostsRequired)(t.id)[y],
              }
            );
        return (
          O &&
            ((H = (0, I.getShortenedTierName)(y)),
            (k =
              v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format(
                { numBoosts: o }
              ))),
          (0, l.jsx)(d.Tooltip, {
            text: O
              ? v.default.Messages
                  .PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE
              : v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format(
                  { levelName: (0, I.getTierName)(y) }
                ),
            color: d.Tooltip.Colors.BLACK,
            position: "top",
            delay: 200,
            hideOnClick: !0,
            children: e =>
              (0, l.jsxs)(d.Clickable, {
                ...e,
                onClick: V,
                onMouseEnter: () => {
                  var t;
                  null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
                    B(w);
                },
                className: i(x.container, { [x.containerWithMargin]: n }),
                onContextMenu: e => {
                  G &&
                    (0, c.openContextMenu)(e, e =>
                      (0, l.jsx)(M, { ...e, guild: t })
                    );
                },
                children: [
                  (0, l.jsxs)("div", {
                    className: x.textArea,
                    children: [
                      (0, l.jsx)("div", {
                        className: x.goalTextContainer,
                        children: (0, l.jsx)(d.Text, {
                          className: x.goalText,
                          color: "interactive-active",
                          variant: "text-xs/bold",
                          children: H,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: x.progressFraction,
                        children: [
                          (0, l.jsx)(d.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/normal",
                            children: k,
                          }),
                          (0, l.jsx)(g.default, {
                            className: x.count,
                            height: 16,
                            width: 16,
                            direction: g.default.Directions.RIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: i(x.progressBarContainer, {
                      [x.progressBarContainerComplete]: O,
                    }),
                    children: [
                      (0, l.jsx)(r.animated.div, {
                        className: x.progressBar,
                        style: F,
                      }),
                      O
                        ? (0, l.jsx)("span", {
                            "aria-label":
                              v.default.Messages
                                .PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                            role: "img",
                            className: x.tadaIcon,
                            children: "\uD83C\uDF89",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
          })
        );
      };
    },
    827298: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ackGuildHome: function () {
            return i;
          },
        });
      var l = n("267363"),
        a = n("299039"),
        s = n("133335");
      let i = e => {
        (0, l.ackGuildFeature)(
          e,
          s.ReadStateTypes.GUILD_HOME,
          a.default.fromTimestamp(Date.now())
        );
      };
    },
    802479: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("151426"),
        i = n("120363"),
        r = n("708402"),
        u = n("155207"),
        o = n("645266"),
        d = n("782340");
      function c(e) {
        let { guild: t, selected: n } = e,
          c = a.useCallback(() => {
            (0, o.goToMemberSafetyDashboard)(t.id);
          }, [t.id]),
          f = (0, i.useChannelListUpsellLocationTrackerRef)(
            t.id,
            s.DismissibleContent.MEMBERS_LAUNCH_UPSELL
          );
        return (0, l.jsx)("div", {
          ref: f,
          children: (0, l.jsx)(r.default, {
            renderIcon: e => (0, l.jsx)(u.default, { className: e }),
            text: d.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
            selected: n,
            onClick: c,
          }),
        });
      }
    },
    444497: function (e, t, n) {
      "use strict";
      let l;
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("446674"),
        s = n("913144"),
        i = n("794818");
      let r = null,
        u = !1,
        o = !1;
      class d extends a.default.Store {
        getRecommendedGuilds() {
          return r;
        }
        getLoadId() {
          return l;
        }
        isFetching() {
          return u;
        }
        failed() {
          return o;
        }
      }
      d.displayName = "GuildRecommendationsStore";
      var c = new d(s.default, {
        GUILD_RECOMMENDATION_FETCH: function () {
          u = !0;
        },
        GUILD_RECOMMENDATION_FETCH_SUCCESS: function (e) {
          (r = e.recommendedGuilds.map(i.makeDiscoverableGuild)),
            (l = e.loadId),
            (u = !1);
        },
        GUILD_RECOMMENDATION_FETCH_FAILURE: function () {
          (o = !0), (u = !1);
        },
      });
    },
    205550: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEligibleForGameRecommendations: function () {
            return d;
          },
        });
      var l = n("446674"),
        a = n("161454"),
        s = n("350522"),
        i = n("546463");
      n("926787");
      var r = n("305961");
      n("599110"), n("444497");
      var u = n("895042"),
        o = n("49111");
      function d() {
        let e = (0, l.useStateFromStores)([r.default], () =>
            r.default.getGuildCount()
          ),
          t = (0, l.useStateFromStores)(
            [a.default, i.default],
            () =>
              a.default
                .getGamesSeen(!1)
                .filter(e => i.default.isGameInDatabase(e)).length,
            []
          ),
          n = (0, l.useStateFromStores)([s.default], () =>
            s.default.hasConsented(o.Consents.PERSONALIZATION)
          ),
          { showRecs: d } = u.default.useExperiment(
            { location: "e7214b_1" },
            { autoTrackExposure: !1 }
          );
        return n && d && e < 4 && t >= 2;
      }
      n("447621");
    },
    895042: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2022-01_server_recommendations_rollout",
        label: "Rollout experiment for server recommendations.",
        defaultConfig: { showRecs: !1 },
        treatments: [
          {
            id: 1,
            label: "Show server recommendations",
            config: { showRecs: !0 },
          },
        ],
      });
    },
    459736: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("20606"),
        s = n("75196");
      function i(e) {
        let { width: t = 24, height: n = 24, ...i } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M17.225 6.06504C17.3227 6.00866 17.4362 5.98608 17.548 6.00084C17.6598 6.0156 17.7637 6.06686 17.8434 6.14665C17.9232 6.22645 17.9744 6.33037 17.9892 6.44225C18.0039 6.55413 17.9813 6.66772 17.925 6.76548L15.65 10.2551L21.9875 11.581C21.9875 11.7185 21.9875 11.8562 21.9875 11.9937C21.9875 12.1313 21.9875 12.2689 21.9875 12.4065L15.65 13.7323L17.925 17.222C17.9939 17.3117 18.0313 17.4216 18.0313 17.5347C18.0313 17.6478 17.9939 17.7577 17.925 17.8474C17.8281 17.9424 17.6982 17.9962 17.5625 17.9975C17.466 17.996 17.3714 17.9702 17.2875 17.9224L13.8125 15.646L12.4125 22H11.5875L10.2625 15.6585L6.77501 17.935C6.69176 17.9843 6.59672 18.0102 6.49997 18.01C6.43455 18.0098 6.3699 17.9963 6.30977 17.9705C6.24964 17.9447 6.1953 17.9072 6.15001 17.8599C6.06977 17.7789 6.01879 17.6734 6.0052 17.5601C5.99162 17.4468 6.01621 17.3323 6.07501 17.2345L8.36253 13.7449L2 12.4065C2 12.2689 2 12.1313 2 11.9937C2 11.8562 2 11.7185 2 11.581L8.35002 10.2551L6.0625 6.76548C6.0037 6.66774 5.97918 6.55315 5.99277 6.43988C6.00635 6.32661 6.05726 6.22113 6.1375 6.14009C6.21731 6.05781 6.32295 6.00542 6.43672 5.99176C6.5505 5.97809 6.6655 6.00399 6.7625 6.06504L10.25 8.34148L11.575 2H12.4L13.7375 8.34148L17.225 6.06504Z",
              fill: "white",
            }),
            (0, l.jsx)("path", {
              d: "M22 12.4065C21.8956 14.9141 20.8533 17.2908 19.0798 19.0654C17.3062 20.8401 14.931 21.883 12.425 21.9875L13.7625 15.646L17.2375 17.9224C17.3214 17.9702 17.416 17.996 17.5125 17.9975C17.6481 17.9962 17.7781 17.9424 17.875 17.8474C17.9439 17.7577 17.9813 17.6478 17.9813 17.5347C17.9813 17.4216 17.9439 17.3117 17.875 17.222L15.6 13.7323L22 12.4065ZM13.7625 8.34148L17.2375 6.06504C17.3352 6.00866 17.4487 5.98608 17.5605 6.00084C17.6723 6.0156 17.7762 6.06686 17.8559 6.14665C17.9357 6.22645 17.9869 6.33037 18.0017 6.44225C18.0164 6.55413 17.9938 6.66772 17.9375 6.76548L15.6625 10.2551L22 11.581C21.8956 9.07342 20.8533 6.69669 19.0798 4.92206C17.3062 3.14742 14.931 2.10449 12.425 2L13.7625 8.34148ZM10.275 8.34148L11.6 2C9.09402 2.10449 6.71878 3.14742 4.94525 4.92206C3.17172 6.69669 2.12945 9.07342 2.02502 11.581L8.37497 10.2551L6.08752 6.76548C6.02873 6.66774 6.00413 6.55315 6.01772 6.43988C6.0313 6.32661 6.08228 6.22113 6.16252 6.14009C6.24233 6.05781 6.34797 6.00542 6.46175 5.99176C6.57552 5.97809 6.69052 6.00399 6.78752 6.06504L10.275 8.34148ZM6.16252 17.8474C6.08228 17.7663 6.0313 17.6609 6.01772 17.5476C6.00413 17.4343 6.02873 17.3197 6.08752 17.222L8.37497 13.7323L2 12.4065C2.10442 14.9141 3.1467 17.2908 4.92023 19.0654C6.69376 20.8401 9.06899 21.883 11.575 21.9875L10.25 15.646L6.7625 17.9224C6.67925 17.9718 6.58428 17.9977 6.48753 17.9975C6.35971 17.9937 6.23848 17.9398 6.15001 17.8474H6.16252Z",
              fill: "url(#paint0_linear_3793:27920)",
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsxs)("linearGradient", {
                id: "paint0_linear_3793:27920",
                x1: "2",
                y1: "21.9875",
                x2: "21.9875",
                y2: "1.98749",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, l.jsx)("stop", {
                    stopColor: a.default.CREATOR_REVENUE_ICON_GRADIENT_START,
                  }),
                  (0, l.jsx)("stop", {
                    offset: "1",
                    stopColor: a.default.CREATOR_REVENUE_ICON_GRADIENT_END,
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    470926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showPremiumChannelIconButton: function () {
            return d;
          },
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("20606"),
        r = n("915675"),
        u = n("338338"),
        o = n("65369");
      function d(e) {
        return e;
      }
      function c(e) {
        let { locked: t } = e;
        return (0, l.jsx)("div", {
          className: s(o.iconItem, u.premiumChannelIcon),
          children: (0, l.jsx)(r.default, {
            className: o.actionIcon,
            color: t ? i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0,
          }),
        });
      }
    },
    972027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-09_guild_events_entrypoint",
        label:
          "Experiments with showing Events entrypoint in the channel list in friends guilds",
        defaultConfig: { canSeeTopLevelEventsEntrypoint: !1 },
        treatments: [
          {
            id: 1,
            label: "User can see top level events entrypoint in friend guilds",
            config: { canSeeTopLevelEventsEntrypoint: !0 },
          },
        ],
      });
      var s = a;
    },
    334683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("446674"),
        s = n("817963"),
        i = n("923959"),
        r = n("305961"),
        u = n("957255"),
        o = n("49111"),
        d = (e, t) => {
          let n = (0, a.useStateFromStores)(
              [r.default],
              () => r.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: d } = (0, s.useManageResourcePermissions)(n),
            c = (0, a.useStateFromStores)(
              [i.default],
              () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY],
              [e]
            ),
            f = l.useMemo(
              () =>
                null != t
                  ? c.filter(e => {
                      let { channel: n } = e;
                      return n.type === t;
                    })
                  : c,
              [c, t]
            ),
            h = (0, a.useStateFromStores)(
              [u.default],
              () => {
                if (u.default.can(o.Permissions.ADMINISTRATOR, n) || d)
                  return !0;
                for (let { channel: e } of f) {
                  let { canCreateGuildEvent: t } = (0,
                  s.getManageResourcePermissions)(e);
                  if (t) return !0;
                }
                return !1;
              },
              [f, n, d]
            );
          return h;
        };
    },
    178517: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("922770"),
        a = n("972027"),
        s = n("334683"),
        i = n("534222"),
        r = n("49111");
      function u(e) {
        var t;
        let n = (0, s.default)(null == e ? void 0 : e.id),
          u = (0, i.default)(null == e ? void 0 : e.id),
          { canSeeTopLevelEventsEntrypoint: o } = a.default.useExperiment(
            {
              location: "Channel List",
              guildId:
                null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                  ? t
                  : r.EMPTY_STRING_SNOWFLAKE_ID,
            },
            { autoTrackExposure: !1 }
          ),
          d = (0, l.default)(null == e ? void 0 : e.id),
          c = null == e ? void 0 : e.hasFeature(r.GuildFeatures.COMMUNITY);
        return !d && (((c || o) && n) || u.length > 0);
      }
    },
    268760: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UnreadBarMode: function () {
            return l;
          },
          default: function () {
            return P;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        u = n("913144"),
        o = n("615387"),
        d = n("488464"),
        c = n("998716"),
        f = n("755624"),
        h = n("42203"),
        C = n("305961"),
        p = n("660478"),
        m = n("162771"),
        E = n("282109"),
        g = n("316133"),
        I = n("449008"),
        _ = n("123561"),
        S = n("49111");
      ((a = l || (l = {})).HIDDEN = "hidden"),
        (a.UNREAD = "unread"),
        (a.MENTIONS = "mentions"),
        (a.VOICE_CHANNELS = "voice-channels");
      let N = { mode: "hidden", mentionCount: 0, targetChannelId: null },
        T = { topBar: N, bottomBar: N },
        A = {},
        L = {};
      function v(e) {
        let t = h.default.getChannel(e);
        if (null == t || null == t.getGuildId() || t.isGuildVocal()) return !1;
        let n = t.isThread()
          ? f.default.isMuted(t.id)
          : E.default.isChannelMuted(t.getGuildId(), t.id);
        return !n && (0, o.getHasImportantUnread)(t);
      }
      function x(e) {
        let t = h.default.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let l = E.default.isGuildCollapsed(n),
          a = E.default.isChannelMuted(n, t.id);
        return (!l || !a) && p.default.getMentionCount(e) > 0;
      }
      function R(e) {
        return (
          !E.default.isChannelMuted(e.guild_id, e.id) &&
          (e.isGuildStageVoice()
            ? d.default.getMutableParticipants(
                e.id,
                c.StageChannelParticipantNamedIndex.SPEAKER
              ).length > 0
            : g.default.getVoiceStatesForChannel(e).length > 0)
        );
      }
      function M(e) {
        var t, n, l;
        let { guildChannels: a } =
            _.default.getGuildWithoutChangingCommunityRows(e),
          s = a.getChannels(null !== (t = L[e]) && void 0 !== t ? t : []);
        if (null == s || 0 === s.length) return !1;
        let r = null,
          u = null,
          o = null,
          d = null,
          c = !0,
          f = !0,
          h = !1,
          C = a.getCategoryFromSection(a.voiceChannelsSectionNumber),
          m =
            null !== (n = null == C ? void 0 : C.getShownChannelIds()) &&
            void 0 !== n
              ? n
              : [],
          [E, g, I] = a.getSlicedChannels(s);
        for (let e = 0; e < g.length; e++) {
          let t = g[e];
          if (
            ((v(t.id) || i.some(t.threadIds, v)) && (f = !1),
            (x(t.id) || i.some(t.threadIds, x)) && (c = !1),
            m.includes(t.id) && (h = !0),
            !f && !c && h)
          )
            break;
        }
        let S = 0,
          T = !1,
          M = 0,
          O = !1;
        if (f || c)
          for (let e = E.length - 1; e >= 0; e--) {
            let t = E[e];
            (v(t.id) || i.some(t.threadIds, v)) &&
              (null == u && (u = t.id), (T = !0)),
              (x(t.id) || i.some(t.threadIds, x)) &&
                (null == r && (r = t.id),
                (S +=
                  p.default.getMentionCount(t.id) +
                  i.sumBy(t.threadIds, p.default.getMentionCount)));
          }
        if (f || c)
          for (let e = 0; e < I.length; e++) {
            let t = I[e];
            if (!f && !c) break;
            (v(t.id) || i.some(t.threadIds, v)) &&
              (null == d && (d = t.id), (O = !0)),
              (x(t.id) || i.some(t.threadIds, x)) &&
                (null == o && (o = t.id),
                (M +=
                  p.default.getMentionCount(t.id) +
                  i.sumBy(t.threadIds, p.default.getMentionCount)));
          }
        let y = null,
          D = null,
          b =
            null !== (l = null == C ? void 0 : C.getChannelRecords()) &&
            void 0 !== l
              ? l
              : [];
        c && M > 0
          ? (y = { mode: "mentions", mentionCount: M, targetChannelId: o })
          : !h && i.some(b, R)
            ? (y = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
              })
            : f &&
              O &&
              (y = { mode: "unread", mentionCount: 0, targetChannelId: d }),
          c && S > 0
            ? (D = { mode: "mentions", mentionCount: S, targetChannelId: r })
            : f &&
              T &&
              (D = { mode: "unread", mentionCount: 0, targetChannelId: u });
        let j =
            null != D &&
            (null == y || ("mentions" !== y.mode && "mentions" === D.mode)),
          G = null != y && ("mentions" === y.mode || !j);
        return (
          (A[e] = {
            topBar: j && null != D ? D : N,
            bottomBar: G && null != y ? y : N,
          }),
          !0
        );
      }
      let O = i.throttle(M, 200);
      function y(e) {
        let { guildId: t } = e,
          n = C.default.getGuild(t);
        return !!(null != n && n.hasFeature(S.GuildFeatures.COMMUNITY)) && O(t);
      }
      function D(e) {
        let { id: t } = e,
          n = h.default.getChannel(t);
        if (null == n) return !1;
        let l = C.default.getGuild(n.guild_id);
        return (
          !!(null != l && l.hasFeature(S.GuildFeatures.COMMUNITY)) &&
          O(n.guild_id)
        );
      }
      function b(e) {
        let { channel: t } = e,
          n = h.default.getChannel(t.id);
        if (null == n) return !1;
        let l = C.default.getGuild(t.guild_id);
        return (
          !!(null != l && l.hasFeature(S.GuildFeatures.COMMUNITY)) &&
          O(n.guild_id)
        );
      }
      function j(e) {
        let { channelId: t } = e,
          n = h.default.getChannel(t);
        if (null == n) return !1;
        let l = C.default.getGuild(n.guild_id);
        return (
          !!(null != l && l.hasFeature(S.GuildFeatures.COMMUNITY)) &&
          m.default.getGuildId() === n.guild_id &&
          O(n.guild_id)
        );
      }
      function G(e) {
        let { guildId: t } = e;
        return null != t && O(t);
      }
      class U extends r.default.Store {
        initialize() {
          this.waitFor(
            _.default,
            p.default,
            E.default,
            f.default,
            g.default,
            m.default,
            C.default
          );
        }
        getUnreadStateForGuildId(e) {
          var t;
          return null !== (t = A[e]) && void 0 !== t ? t : T;
        }
      }
      U.displayName = "ChannelListUnreadsStore";
      var P = new U(u.default, {
        UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
          let { guildId: t, channelIds: n } = e,
            l = C.default.getGuild(t);
          return (
            !!(null != l && l.hasFeature(S.GuildFeatures.COMMUNITY)) &&
            null != n &&
            !i.isEqual(L[t], n) &&
            ((L[t] = n), M(t))
          );
        },
        BULK_ACK: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            i(t)
              .map(e => {
                var t;
                let { channelId: n } = e;
                return null === (t = h.default.getChannel(n)) || void 0 === t
                  ? void 0
                  : t.guild_id;
              })
              .filter(I.isNotNullish)
              .uniq()
              .forEach(e => {
                let t = C.default.getGuild(e);
                null != t &&
                  t.hasFeature(S.GuildFeatures.COMMUNITY) &&
                  O(e) &&
                  (n = !0);
              }),
            n
          );
        },
        CHANNEL_ACK: j,
        CHANNEL_DELETE: b,
        CHANNEL_LOCAL_ACK: j,
        MESSAGE_ACK: j,
        MESSAGE_CREATE: j,
        MESSAGE_DELETE_BULK: j,
        MESSAGE_DELETE: j,
        PASSIVE_UPDATE_V1: function (e) {
          let t = C.default.getGuild(e.guildId);
          return (
            !!(
              null != e.channels &&
              null != t &&
              t.hasFeature(S.GuildFeatures.COMMUNITY)
            ) && O(e.guildId)
          );
        },
        RESORT_THREADS: j,
        THREAD_CREATE: b,
        THREAD_DELETE: b,
        THREAD_LIST_SYNC: y,
        THREAD_MEMBER_UPDATE: D,
        THREAD_MEMBERS_UPDATE: D,
        THREAD_UPDATE: b,
        BULK_CLEAR_RECENTS: y,
        CATEGORY_COLLAPSE_ALL: y,
        CATEGORY_EXPAND_ALL: y,
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = m.default.getGuildId();
          if (null == n) return !1;
          let l = new Set(t.map(e => e.guildId));
          if (!l.has(n)) return !1;
          let a = A[n];
          return null != a && "voice-channels" === a.bottomBar.mode && O(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          for (let e of t) null != e.guild_id && O(e.guild_id);
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: G,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
      });
    },
    175632: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getSectionFooterConfig: function () {
            return u;
          },
          isSectionFooterWithActiveVoiceChannels: function () {
            return o;
          },
        });
      var l = n("870691"),
        a = n("957255"),
        s = n("319839"),
        i = n("796618"),
        r = n("49111");
      function u(e, t, n) {
        var l, a, r, u, o;
        return {
          hasDivider:
            ((l = e),
            (a = t),
            !(function (e, t) {
              if (t === s.SECTION_INDEX_COMMUNITY) {
                let t = e.getCommunitySection().getRows();
                return (
                  (1 === t.length &&
                    t[0] ===
                      i.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR) ||
                  e.getCommunitySection().isEmpty()
                );
              }
              return 0 === e.getSections()[t];
            })(l, (r = n)) &&
              (r === s.SECTION_INDEX_COMMUNITY ||
                (!!a &&
                  (r === s.SECTION_INDEX_FAVORITES ||
                    (r !== s.SECTION_INDEX_UNCATEGORIZED_CHANNELS &&
                      (r === l.recentsSectionNumber ||
                        (l.voiceChannelsSectionNumber, !1))))))),
          canHaveVoiceSummary:
            ((u = e),
            !(
              (o = n) === s.SECTION_INDEX_COMMUNITY ||
              o === s.SECTION_INDEX_FAVORITES ||
              o === s.SECTION_INDEX_UNCATEGORIZED_CHANNELS ||
              o === u.recentsSectionNumber ||
              o === u.voiceChannelsSectionNumber
            )),
        };
      }
      function o(e) {
        let {
            category: t,
            voiceStates: n,
            selectedChannelId: s,
            selectedVoiceChannelId: i,
          } = e,
          u = (function (e) {
            let {
              category: t,
              voiceStates: n,
              selectedChannelId: s,
              selectedVoiceChannelId: i,
            } = e;
            if (!0 !== l.default.isCollapsed(t.record.id)) return [];
            let u = t.getChannelRecords();
            return u.filter(e => {
              var t;
              if (!a.default.can(r.Permissions.VIEW_CHANNEL, e)) return !1;
              let l = null !== (t = n[e.id]) && void 0 !== t ? t : [];
              return e.id !== i && e.id !== s && l.length > 0;
            });
          })({
            category: t,
            selectedChannelId: s,
            selectedVoiceChannelId: i,
            voiceStates: n,
          });
        return u.length > 0;
      }
    },
    2003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          voiceCategoryExpand: function () {
            return a;
          },
          voiceCategoryCollapse: function () {
            return s;
          },
        });
      var l = n("913144");
      function a(e) {
        l.default.dispatch({
          type: "VOICE_CATEGORY_EXPAND",
          guildId: e,
          expand: !0,
        });
      }
      function s(e) {
        l.default.dispatch({
          type: "VOICE_CATEGORY_COLLAPSE",
          guildId: e,
          expand: !1,
        });
      }
    },
    982721: function (e, t, n) {
      "use strict";
      function l(e) {
        return e.length > 0;
      }
      n.r(t),
        n.d(t, {
          showChannelItemEmbeddedActivities: function () {
            return l;
          },
        });
    },
    973539: function (e, t, n) {
      "use strict";
      function l(e) {
        return null != e && e > 0;
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
    },
    487370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("424973");
      var l = n("520141"),
        a = n("957255"),
        s = n("796618"),
        i = n("49111");
      function r(e) {
        let t = (0, l.useIsMemberVerificationManualApproval)(e.id),
          n = null != e && t && a.default.can(i.Permissions.KICK_MEMBERS, e);
        if (!e.hasFeature(i.GuildFeatures.CLAN)) return [];
        let r = [];
        return (
          n && r.push(s.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), r
        );
      }
    },
    60937: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("424973");
      var l = n("65597"),
        a = n("590260"),
        s = n("677315"),
        i = n("875229"),
        r = n("466818"),
        u = n("698882"),
        o = n("290886"),
        d = n("363176"),
        c = n("903724"),
        f = n("178517"),
        h = n("796618"),
        C = n("49111");
      function p(e) {
        let t = (0, s.useGuildHomeExperiment)(e),
          n = (0, f.default)(e),
          p = (0, i.useCanReviewGuildMemberApplications)(e.id),
          m = (0, c.useShowRoleSubscriptionsInChannelList)(e.id),
          E = (0, a.useGuildShopVisibleInGuild)(e),
          g = (0, o.useCanSeeOnboardingHome)(e.id),
          I = (0, l.default)(
            [u.default],
            () => u.default.getNewMemberActions(e.id),
            [e.id]
          ),
          _ = (0, d.default)(e.id),
          S = (0, r.useCanAccessMemberSafetyPage)(e.id),
          N = [],
          T = e.hasFeature(C.GuildFeatures.HUB),
          A = e.hasFeature(C.GuildFeatures.COMMUNITY),
          L = e.hasFeature(
            C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY
          );
        return (
          T && N.push(h.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS),
          g && _ && null != I && I.length > 0
            ? N.push(
                h.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR
              )
            : e.premiumProgressBarEnabled &&
              N.push(h.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR),
          !T && (t || g) && N.push(h.ChannelListCommunityRow.GUILD_HOME),
          n && N.push(h.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS),
          !T && A && N.push(h.ChannelListCommunityRow.CHANNELS_AND_ROLES),
          m && N.push(h.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS),
          E && N.push(h.ChannelListCommunityRow.GUILD_SHOP),
          p && N.push(h.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS),
          S &&
            (A || L) &&
            N.push(h.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY),
          N
        );
      }
    },
    447235: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("830210"),
        a = n("49111");
      function s(e) {
        let { channel: t, locked: n, video: s, selected: i } = e,
          r = (function (e) {
            let {
                channel: t,
                video: n,
                considerMaxStageVoiceUserLimit: s = !0,
              } = e,
              { limit: i } = (0, l.default)(t),
              r = -1;
            return (t.userLimit > 0 && (r = t.userLimit),
            n && i > 0 && (r = r > 0 ? Math.min(r, i) : i),
            s && r === a.MAX_STAGE_VOICE_USER_LIMIT)
              ? 0
              : r;
          })({ channel: t, video: s });
        return r > 0 && !n && !i;
      }
    },
    79234: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        u = n("77078"),
        o = n("308289"),
        d = n("144491"),
        c = n("401690"),
        f = n("487269"),
        h = n("967241"),
        C = n("957255"),
        p = n("660478"),
        m = n("697218"),
        E = n("315102"),
        g = n("299039"),
        I = n("49111"),
        _ = n("648564"),
        S = n("782340"),
        N = n("733486");
      function T(e) {
        let { channel: t } = e,
          s = (0, r.useStateFromStoresArray)(
            [c.default, p.default, C.default],
            () => {
              let e = c.default.getActiveJoinedRelevantThreadsForParent(
                t.guild_id,
                t.id
              );
              return i(
                c.default.getActiveJoinedThreadsForParent(t.guild_id, t.id)
              )
                .values()
                .map(e => e.channel)
                .concat(
                  i.values(
                    c.default.getActiveUnjoinedThreadsForParent(
                      t.guild_id,
                      t.id
                    )
                  )
                )
                .filter(
                  t =>
                    !(t.id in e) && C.default.can(I.Permissions.VIEW_CHANNEL, t)
                )
                .sort((e, t) => {
                  let n = p.default.lastMessageId(e.id),
                    l = p.default.lastMessageId(t.id);
                  return g.default.compare(n, l);
                })
                .reverse()
                .value();
            }
          ),
          o = t.isForumLikeChannel() ? 5 : 3;
        return (
          a.useEffect(() => {
            (0, f.trackActiveThreadsPopoutOpened)();
          }, []),
          (0, l.jsxs)("div", {
            className: N.popout,
            children: [
              (0, l.jsx)(u.Text, {
                className: N.title,
                variant: "text-xs/bold",
                color: "header-secondary",
                children: t.isForumLikeChannel()
                  ? S.default.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM
                  : S.default.Messages.ACTIVE_THREADS_POPOUT_HEADER,
              }),
              s
                .slice(0, t.isForumLikeChannel() ? s.length : o)
                .map(e => (0, l.jsx)(A, { thread: e }, e.id))
                .filter(e => a.isValidElement(e))
                .slice(0, o),
              (0, l.jsx)(u.Clickable, {
                className: N.more,
                onClick: () => {
                  t.isForumLikeChannel()
                    ? (0, d.transitionToChannel)(t.id)
                    : (0, u.openModalLazy)(async () => {
                        let { default: e } = await n
                          .el("33250")
                          .then(n.bind(n, "33250"));
                        return n => (0, l.jsx)(e, { channel: t, ...n });
                      });
                },
                children: (0, l.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  children: S.default.Messages.ACTIVE_THREADS_POPOUT_LINK,
                }),
              }),
            ],
          })
        );
      }
      function A(e) {
        let { thread: t } = e,
          n = (0, r.useStateFromStores)([m.default], () =>
            m.default.getUser(t.ownerId)
          ),
          a = (0, f.useLastMessageTimestamp)(t);
        return (0, l.jsxs)(u.Clickable, {
          className: N.row,
          onClick: e => {
            (0, h.openThreadSidebarForViewing)(
              t,
              t.isForumPost() ? e.shiftKey : !e.shiftKey,
              _.OpenThreadAnalyticsLocations.POPOUT
            );
          },
          children: [
            null == n
              ? (0, l.jsx)("img", {
                  className: N.avatar,
                  src: E.default.getDefaultAvatarURL(void 0, void 0),
                  alt: "",
                })
              : (0, l.jsx)(o.default, {
                  className: N.avatar,
                  user: n,
                  size: u.AvatarSizes.SIZE_16,
                }),
            (0, l.jsx)(u.Text, {
              className: N.name,
              variant: "text-sm/normal",
              color: "none",
              children: t.name,
            }),
            (0, l.jsxs)(u.Text, {
              className: N.timestamp,
              variant: "text-sm/normal",
              color: "none",
              children: [
                (0, l.jsx)("span", { className: N.bullet, children: "•" }),
                (0, f.getTimestampString)(a),
              ],
            }),
          ],
        });
      }
    },
    708402: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("988941"),
        o = n("65369"),
        d = n("39776"),
        c = a.forwardRef(function (e, t) {
          let {
            renderIcon: n,
            text: a,
            selected: s,
            badge: c,
            showUnread: f = !1,
            ...h
          } = e;
          return (0, l.jsxs)(r.Clickable, {
            ...h,
            innerRef: t,
            tag: "li",
            className: i(o.containerDefault, d.wrapper, {
              [d.modeSelected]: s,
            }),
            children: [
              f
                ? (0, l.jsx)("div", {
                    className: i(d.unread, d.unreadImportant),
                  })
                : null,
              (0, l.jsx)("div", {
                className: d.link,
                children: (0, l.jsxs)("div", {
                  className: u.content,
                  children: [
                    (0, l.jsx)("div", {
                      className: d.iconContainer,
                      children: n(d.icon),
                    }),
                    (0, l.jsx)("div", { className: d.name, children: a }),
                    c,
                  ],
                }),
              }),
            ],
          });
        });
    },
    708186: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
          NonChannelCategory: function () {
            return y;
          },
          VoiceChannelCategoryButton: function () {
            return D;
          },
          VoiceChannelCategory: function () {
            return b;
          },
          ReadonlyCategoryChannel: function () {
            return j;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("974667"),
        u = n("446674"),
        o = n("77078"),
        d = n("820542"),
        c = n("272030"),
        f = n("667771"),
        h = n("870691"),
        C = n("305961"),
        p = n("957255"),
        m = n("282109"),
        E = n("98292"),
        g = n("381546"),
        I = n("256170"),
        _ = n("689476"),
        S = n("368121"),
        N = n("826684"),
        T = n("323137"),
        A = n("2003"),
        L = n("49111"),
        v = n("782340"),
        x = n("124194");
      function R(e) {
        e.stopPropagation();
      }
      let M = a.memo(function (e) {
        let t,
          {
            channel: s,
            connectChannelDragSource: f,
            connectChannelDropTarget: g,
            disableManageChannels: S,
            position: T,
            sortingPosition: A,
            hideIcon: M,
            children: O,
          } = e,
          y = (0, u.useStateFromStores)([m.default], () =>
            m.default.isChannelMuted(s.getGuildId(), s.id)
          ),
          D = (0, u.useStateFromStores)([h.default], () =>
            h.default.isCollapsed(s.id)
          ),
          b = (0, u.useStateFromStores)([p.default], () =>
            p.default.can(L.Permissions.MANAGE_CHANNELS, s)
          );
        t =
          null != A
            ? T > A
              ? x.containerDragAfter
              : x.containerDragBefore
            : x.containerDefault;
        let j = a.useCallback(() => {
            D ? (0, d.categoryExpand)(s.id) : (0, d.categoryCollapse)(s.id);
          }, [s.id, D]),
          G = a.useCallback(
            e => {
              if ("null" !== s.id) {
                let t = C.default.getGuild(s.getGuildId());
                null != t &&
                  (0, c.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("142047")
                      .then(n.bind(n, "142047"));
                    return n => (0, l.jsx)(e, { ...n, channel: s, guild: t });
                  });
              }
            },
            [s]
          ),
          U = a.useCallback(() => {
            let e = s.type === L.ChannelTypes.GUILD_CATEGORY ? null : s.type,
              t = s.getGuildId();
            null != t &&
              (0, o.openModalLazy)(async () => {
                let { default: a } = await n
                  .el("581354")
                  .then(n.bind(n, "581354"));
                return n =>
                  (0, l.jsx)(a, {
                    ...n,
                    channelType: e,
                    guildId: t,
                    categoryId: "null" !== s.id ? s.id : null,
                  });
              });
          }, [s]),
          { role: P, tabIndex: w, ...F } = (0, r.useListItem)(s.id),
          B = a.useRef(null),
          V = a.useRef(null),
          H = (0, l.jsxs)("li", {
            className: t,
            "data-dnd-name": s.name,
            children: [
              (0, l.jsx)(o.FocusRing, {
                focusTarget: B,
                ringTarget: V,
                offset: { left: 4, right: 4 },
                children: (0, l.jsxs)("div", {
                  ref: V,
                  className: i(x.iconVisibility, x.wrapper, {
                    [x.collapsed]: D,
                    [x.muted]: y,
                    [x.clickable]: !0,
                  }),
                  onContextMenu: G,
                  children: [
                    (0, l.jsxs)(o.Clickable, {
                      innerRef: B,
                      className: x.mainContent,
                      tabIndex: w,
                      ...F,
                      onClick: j,
                      "aria-label":
                        v.default.Messages.CATEGORY_A11Y_LABEL.format({
                          categoryName: s.name,
                        }),
                      "aria-expanded": !D,
                      focusProps: { enabled: !1 },
                      children: [
                        M ? null : (0, l.jsx)(I.default, { className: x.icon }),
                        (0, l.jsx)(N.default, {
                          className: x.name,
                          children: (0, l.jsx)(E.default, { children: s.name }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      onClick: R,
                      className: x.children,
                      children:
                        b && !S
                          ? (0, l.jsx)(o.Tooltip, {
                              text: v.default.Messages.CREATE_CHANNEL,
                              children: e => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, l.jsx)(o.Button, {
                                  "aria-label":
                                    v.default.Messages.CREATE_CHANNEL,
                                  look: o.Button.Looks.BLANK,
                                  size: o.Button.Sizes.NONE,
                                  className: i(x.addButton, x.forceVisible),
                                  onClick: U,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  tabIndex: w,
                                  focusProps: {
                                    offset: {
                                      top: -3,
                                      right: -4,
                                      bottom: -3,
                                      left: -4,
                                    },
                                  },
                                  children: (0, l.jsx)(_.default, {
                                    width: 18,
                                    height: 18,
                                    className: x.addButtonIcon,
                                  }),
                                });
                              },
                            })
                          : null,
                    }),
                  ],
                }),
              }),
              O,
            ],
          });
        return null != g && null != f ? g(f(H)) : H;
      });
      var O = (0, f.makeChannelSortable)(M);
      let y = a.memo(function (e) {
          let { name: t, onDismiss: n, className: a } = e;
          return (0, l.jsx)("li", {
            className: i(a, x.containerDefault),
            children: (0, l.jsxs)("div", {
              className: i(x.iconVisibility, x.wrapperStatic),
              children: [
                (0, l.jsx)("div", {
                  className: x.mainContent,
                  children: (0, l.jsx)(N.default, {
                    className: x.name,
                    children: (0, l.jsx)(E.default, { children: t }),
                  }),
                }),
                null != n
                  ? (0, l.jsx)(o.TooltipContainer, {
                      text: v.default.Messages.CLEAR_RECENT_CHANNELS,
                      className: x.dismissWrapper,
                      children: (0, l.jsx)(o.Clickable, {
                        className: x.dismissButton,
                        onClick: n,
                        children: (0, l.jsx)(g.default, {
                          className: x.dismiss,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          });
        }),
        D = a.memo(function (e) {
          let { category: t } = e,
            n = (0, u.useStateFromStores)([T.default], () =>
              T.default.isVoiceCategoryCollapsed(t.guild.id)
            ),
            s = a.useCallback(() => {
              n
                ? (0, A.voiceCategoryExpand)(t.guild.id)
                : (0, A.voiceCategoryCollapse)(t.guild.id);
            }, [t.guild.id, n]);
          return n
            ? (0, l.jsxs)(o.Clickable, {
                className: x.voiceChannelsButton,
                onClick: s,
                children: [
                  (0, l.jsx)(S.default, {
                    className: x.voiceChannelsToggleIcon,
                    width: 16,
                    height: 16,
                  }),
                  (0, l.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children:
                      v.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND,
                  }),
                ],
              })
            : (0, l.jsxs)(o.Clickable, {
                className: x.voiceChannelsButton,
                onClick: s,
                children: [
                  (0, l.jsx)(S.default, {
                    className: x.voiceChannelsToggleIcon,
                    width: 16,
                    height: 16,
                  }),
                  (0, l.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children:
                      v.default.Messages
                        .VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE,
                  }),
                ],
              });
        }),
        b = a.memo(function (e) {
          let { category: t, channel: n } = e,
            a = (0, u.useStateFromStores)([T.default], () =>
              T.default.isVoiceCategoryCollapsed(t.guild.id)
            );
          return a ||
            null == n ||
            n.record.type === L.ChannelTypes.GUILD_CATEGORY
            ? a
              ? (0, l.jsx)("li", {
                  className: i(x.containerDefault),
                  children: (0, l.jsx)("div", {
                    className: i(x.iconVisibility, x.wrapperStatic),
                    children: (0, l.jsx)(N.default, {
                      className: x.name,
                      children: (0, l.jsx)(E.default, {
                        children:
                          v.default.Messages.VOICE_CHANNELS_CATEGORY_HEADER,
                      }),
                    }),
                  }),
                })
              : null
            : (0, l.jsx)("div", { style: { height: 16 } });
        }),
        j = a.memo(function (e) {
          let { channel: t } = e;
          return (0, l.jsx)("li", {
            className: i(x.containerDefault),
            children: (0, l.jsx)("div", {
              className: i(x.iconVisibility, x.wrapperStatic),
              children: (0, l.jsx)(N.default, {
                className: x.name,
                children: (0, l.jsx)(E.default, { children: t.name }),
              }),
            }),
          });
        });
    },
    938177: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("77078"),
        o = n("429928"),
        d = n("697218"),
        c = n("339521"),
        f = n("963422"),
        h = n("713573"),
        C = n("811305"),
        p = n("550368"),
        m = n("315102"),
        E = n("449008"),
        g = n("158998"),
        I = n("188110");
      let _ = C.Sizes.SIZE_24;
      function S(e) {
        var t, n;
        let { activity: s, user: i, embeddedApp: r, onOpenSpotifyAlbum: d } = e,
          c = null == s ? void 0 : s.assets,
          f = null == s ? void 0 : s.application_id;
        if (
          null == s ||
          null == c ||
          (null == c.large_image && null == c.small_image)
        )
          return null != r
            ? (function (e) {
                let t = m.default.getApplicationIconURL({
                    id: e.application.id,
                    icon: e.application.icon,
                  }),
                  n = e.application.name;
                return (0, l.jsx)(u.Tooltip, {
                  text: n,
                  position: "top",
                  children: () =>
                    (0, l.jsx)("img", {
                      alt: n,
                      src: t,
                      className: I.applicationLargeImage,
                    }),
                });
              })(r)
            : null;
        let h =
            null !== (t = c.large_image) && void 0 !== t ? t : c.small_image,
          C = (0, o.default)(s),
          E = C ? I.spotifyLargeImage : I.applicationLargeImage,
          g =
            null != h
              ? (0, l.jsx)("img", {
                  alt: null !== (n = c.large_text) && void 0 !== n ? n : "",
                  src: (0, p.getAssetImage)(f, h, [128, 128]),
                  className: E,
                })
              : null;
        return C && null != d
          ? ((g = (0, l.jsx)(u.Clickable, {
              className: I.clickable,
              onClick: () => {
                d(s, i.id);
              },
              children: g,
            })),
            (0, l.jsx)(u.Tooltip, {
              text: null != c.large_text ? c.large_text : null,
              position: "top",
              children: e => {
                let { onClick: t, ...n } = e;
                return null != g ? a.cloneElement(g, n) : null;
              },
            }))
          : g;
      }
      function N(e) {
        let { activity: t, embeddedApp: n, onOpenSpotifyTrack: a } = e,
          s = null == t ? void 0 : t.details,
          i = null == t ? void 0 : t.name,
          r = i;
        if (null != n) r = n.application.name;
        else {
          if (
            !(null != t && (0, o.default)(t)) ||
            null == t.sync_id ||
            null == s ||
            null == a
          )
            return null;
          (i = s),
            (r = (0, l.jsx)(u.Clickable, {
              className: I.headerLink,
              onClick: () => {
                a(t);
              },
              children: s,
            }));
        }
        return (0, l.jsx)(h.default, {
          title: i,
          className: I.header,
          children: r,
        });
      }
      function T(e) {
        let { activity: t, user: n, onOpenSpotifyArtist: a } = e,
          s = null == t ? void 0 : t.details,
          r = null == t ? void 0 : t.state,
          u = s;
        return (null != t &&
          (0, o.default)(t) &&
          null != r &&
          (u = [
            (0, l.jsx)(
              f.default,
              {
                artists: r,
                linkClassName: I.bodyLink,
                canOpen: null != t.sync_id,
                onOpenSpotifyArtist: e => {
                  null == a || a(t, n.id, e);
                },
              },
              r
            ),
          ]),
        null == u || "" === u)
          ? null
          : (0, l.jsx)("div", {
              className: i(
                I.ellipsisRow,
                I.colorHeaderSecondary,
                I.bodyTextSize
              ),
              children: u,
            });
      }
      function A(e) {
        let { activity: t } = e,
          n = null == t ? void 0 : t.state;
        return null == n || "" === n || (0, o.default)(t)
          ? null
          : (0, l.jsx)("div", {
              className: i(
                I.ellipsisRow,
                I.colorHeaderSecondary,
                I.bodyTextSize,
                I.activity
              ),
              children: n,
            });
      }
      function L(e) {
        let { activity: t } = e;
        if (null == t || !(0, o.default)(t)) return null;
        let { timestamps: n } = t;
        if (
          (null == n ? void 0 : n.start) == null ||
          (null == n ? void 0 : n.end) == null
        )
          return null;
        let { start: a, end: s } = n;
        return (0, l.jsx)(c.default, {
          start: a,
          end: s,
          className: I.timeBar,
          themed: !0,
          singleLine: !0,
        });
      }
      function v(e) {
        let {
            activity: t,
            embeddedApp: n,
            user: s,
            channel: i,
            sortedVoiceStates: c,
            onOpenSpotifyTrack: f,
            onOpenSpotifyArtist: h,
            onOpenSpotifyAlbum: p,
          } = e,
          m = [];
        null != n
          ? (m = Array.from(n.embeddedActivity.userIds))
          : (0, o.default)(t) && null != c && (m = c.map(e => e.user.id));
        let v = (0, r.useStateFromStoresArray)([d.default], () =>
            m.map(e => d.default.getUser(e)).filter(E.isNotNullish)
          ),
          x = null != n || (0, o.default)(t),
          R = a.useMemo(() => {
            let e = new Map();
            return (
              x &&
                null != c &&
                c.forEach(t => {
                  let n = t.member;
                  null != n && e.set(t.user.id, n);
                }),
              e
            );
          }, [c, x]);
        return x
          ? (0, l.jsxs)("div", {
              className: I.flexColumn,
              children: [
                (0, l.jsxs)("div", {
                  className: I.flexRow,
                  children: [
                    (0, l.jsx)(S, {
                      activity: t,
                      user: s,
                      embeddedApp: n,
                      onOpenSpotifyAlbum: p,
                    }),
                    (0, l.jsxs)("div", {
                      className: I.detailsAndAvatarsContainer,
                      children: [
                        (0, l.jsx)(N, {
                          activity: t,
                          embeddedApp: n,
                          onOpenSpotifyTrack: f,
                        }),
                        (0, l.jsx)(T, {
                          activity: t,
                          user: s,
                          onOpenSpotifyArtist: h,
                        }),
                        (0, l.jsx)(A, { activity: t }),
                        m.length > 0 &&
                          (0, l.jsx)(C.default, {
                            className: I.usersSummary,
                            guildId: i.guild_id,
                            users: v,
                            size: _,
                            max: 7,
                            renderUser: e => {
                              var t;
                              if (null == e) return null;
                              let n = R.get(e.id),
                                a =
                                  null !== (t = null == n ? void 0 : n.nick) &&
                                  void 0 !== t
                                    ? t
                                    : g.default.getName(e);
                              return (0, l.jsx)(
                                u.TooltipContainer,
                                {
                                  text: a,
                                  position: "bottom",
                                  children: (0, l.jsx)(
                                    "img",
                                    {
                                      src: e.getAvatarURL(i.guild_id, _),
                                      alt: a,
                                      className: I.avatar,
                                    },
                                    e.id
                                  ),
                                },
                                e.id
                              );
                            },
                          }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(L, { activity: t }),
              ],
            })
          : null;
      }
    },
    563903: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("446674"),
        r = n("77078"),
        u = n("463848"),
        o = n("429928"),
        d = n("632710"),
        c = n("769791"),
        f = n("233069"),
        h = n("271938"),
        C = n("697218"),
        p = n("533403"),
        m = n("315102"),
        E = n("158998"),
        g = n("938177"),
        I = n("354721");
      function _(e) {
        let { guildId: t, member: n, className: a } = e,
          i =
            null != n.member ? (0, m.getGuildMemberAvatarURL)(n.member) : null;
        return (0, l.jsx)(r.Tooltip, {
          text: n.nick,
          position: "bottom",
          children: e => {
            var u;
            return (0, l.jsx)(r.Avatar, {
              src: null != i ? i : n.user.getAvatarURL(t, 16),
              size: r.AvatarSizes.SIZE_16,
              className: s(a, I.partyAvatar),
              "aria-label":
                null !== (u = n.nick) && void 0 !== u
                  ? u
                  : E.default.getName(n.user),
              ...e,
            });
          },
        });
      }
      function S(e) {
        let { members: t, guildId: n } = e;
        return (0, l.jsx)(p.default, {
          className: I.partyMembers,
          guildId: n,
          users: t,
          max: 6,
          renderUser: (e, t, a) =>
            (0, l.jsx)(_, { guildId: n, member: e, className: t }, a),
          renderMoreUsers: (e, t, n) =>
            (0, l.jsx)(
              "div",
              { className: s(I.morePartyMembers, t), children: e },
              n
            ),
        });
      }
      var N = e => {
        let {
            channel: t,
            presenceActivity: n,
            members: a,
            embeddedApp: s,
            onAction: r,
          } = e,
          p = null != s,
          m = p ? Array.from(s.embeddedActivity.userIds) : [],
          E = (0, i.useStateFromStores)([C.default, h.default], () => {
            if (null != a) {
              var e, t, l, s;
              return a.length <= 0
                ? null
                : p
                  ? null !==
                      (t =
                        null ===
                          (e = a.find(
                            e =>
                              e.voiceState.sessionId ===
                              (null == n ? void 0 : n.session_id)
                          )) || void 0 === e
                          ? void 0
                          : e.user) && void 0 !== t
                    ? t
                    : C.default.getUser(m[0])
                  : null !==
                        (s =
                          null ===
                            (l = a.find(
                              e => e.user.id !== h.default.getId()
                            )) || void 0 === l
                            ? void 0
                            : l.user) && void 0 !== s
                    ? s
                    : a[0].user;
            }
            if (p) return C.default.getUser(m[0]);
          });
        if (null == E) return null;
        let _ = p || (0, o.default)(n),
          N = (0, f.isVoiceChannel)(t.type);
        return (0, l.jsxs)("div", {
          className: I.activity,
          children: [
            (0, l.jsx)("div", {
              className: I.channelActivityContainer,
              children: _
                ? (0, l.jsx)(g.default, {
                    activity: n,
                    embeddedApp: s,
                    user: E,
                    channel: t,
                    sortedVoiceStates: a,
                    onOpenSpotifyTrack: N ? c.openTrack : void 0,
                    onOpenSpotifyArtist: N ? c.openArtist : void 0,
                    onOpenSpotifyAlbum: N ? c.openAlbum : void 0,
                  })
                : (0, l.jsx)(u.default, {
                    type: u.UserActivityTypes.VOICE_CHANNEL,
                    activity: n,
                    user: E,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    renderHeaderAccessory:
                      null != a
                        ? () =>
                            (0, l.jsx)(S, { guildId: t.guild_id, members: a })
                        : void 0,
                    isEmbedded: p,
                  }),
            }),
            (0, l.jsx)("div", {
              className: I.activityActionsContainer,
              children: (0, l.jsx)(d.default, {
                type: u.UserActivityTypes.VOICE_CHANNEL,
                activity: n,
                user: E,
                guildId: t.getGuildId(),
                channelId: t.id,
                color: I.button,
                onAction: r,
                isEmbedded: p,
              }),
            }),
          ],
        });
      };
    },
    783735: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isChannelItemDisabled: function () {
            return O;
          },
          getChannelItemClassName: function () {
            return y;
          },
          ChannelItemEditButton: function () {
            return D;
          },
          ChannelItemInviteButton: function () {
            return b;
          },
          default: function () {
            return a;
          },
        });
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("446674"),
        d = n("77078"),
        c = n("18054"),
        f = n("398604"),
        h = n("242757"),
        C = n("629220"),
        p = n("834052"),
        m = n("12896"),
        E = n("233069"),
        g = n("373469"),
        I = n("305961"),
        _ = n("957255"),
        S = n("162771"),
        N = n("36694"),
        T = n("945330"),
        A = n("474571"),
        L = n("76539"),
        v = n("230674"),
        x = n("49111"),
        R = n("782340"),
        M = n("65369");
      function O(e, t, n) {
        return null != t && !!t && !(0, v.areTypesInSameSection)(n, e.type);
      }
      function y(e, t) {
        return null == t
          ? M.containerDefault
          : e > t
            ? M.containerDragAfter
            : M.containerDragBefore;
      }
      function D(e) {
        let {
            channel: t,
            disableManageChannels: n,
            tabIndex: l,
            forceShowButtons: a,
            hasChannelInfo: i = !1,
          } = e,
          r = (0, o.useStateFromStores)(
            [_.default, S.default],
            () =>
              n ||
              S.default.getGuildId() === x.FAVORITES ||
              (!_.default.can(x.Permissions.MANAGE_CHANNELS, t) &&
                !_.default.can(x.Permissions.MANAGE_ROLES, t) &&
                !_.default.can(x.Permissions.MANAGE_WEBHOOKS, t)) ||
              ((0, E.isGuildSelectableChannelType)(t.type) &&
                !_.default.can(x.Permissions.VIEW_CHANNEL, t)) ||
              (t.isGuildVocal() && !_.default.can(x.Permissions.CONNECT, t)) ||
              !E.EDITABLE_CHANNEL_TYPES.has(t.type)
          );
        if (r) return null;
        function f() {
          c.default.open(t.id);
        }
        return (0, s.jsx)(d.Tooltip, {
          text: R.default.Messages.EDIT_CHANNEL,
          children: e => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: r, onBlur: o } = e;
            return (0, s.jsx)(d.Clickable, {
              className: u(
                M.iconItem,
                a ? M.alwaysShown : void 0,
                i ? M.iconWithChannelInfo : M.iconNoChannelInfo
              ),
              onClick: f,
              tabIndex: l,
              "aria-label": R.default.Messages.EDIT_CHANNEL,
              onMouseEnter: t,
              onMouseLeave: n,
              onFocus: r,
              onBlur: o,
              children: (0, s.jsx)(A.default, {
                width: 16,
                height: 16,
                className: M.actionIcon,
              }),
            });
          },
        });
      }
      function b(e) {
        let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: a,
            tabIndex: i,
            forceShowButtons: r,
            hasChannelInfo: c = !1,
          } = e,
          C = (0, o.useStateFromStores)([I.default], () =>
            I.default.getGuild(t.getGuildId())
          ),
          E = (0, o.useStateFromStores)(
            [p.default],
            () => p.default.getStageInstanceByChannel(t.id),
            [t.id]
          ),
          S = (0, o.useStateFromStores)(
            [f.default],
            () => f.default.getActiveEventByChannel(t.id),
            [t.id]
          ),
          N = (0, o.useStateFromStores)([_.default], () =>
            (0, h.canViewInviteModal)(_.default, C, t, E)
          ),
          T = (0, o.useStateFromStores)([_.default], () =>
            _.default.can(x.Permissions.CREATE_INSTANT_INVITE, t)
              ? R.default.Messages.CREATE_INSTANT_INVITE
              : R.default.Messages.INVITE_TO_SERVER
          );
        if (a || !N) return null;
        function A() {
          if (null != C) {
            let e = g.default
              .getAllActiveStreams()
              .filter(
                e =>
                  e.state !== x.ApplicationStreamStates.ENDED &&
                  e.channelId === t.id
              );
            (0, d.openModalLazy)(async () => {
              let { default: l } = await n
                .el("310688")
                .then(n.bind(n, "310688"));
              return n =>
                (0, s.jsx)(l, {
                  ...n,
                  guild: C,
                  channel: t,
                  streamUserId: 1 === e.length ? e[0].ownerId : null,
                  source: x.InstantInviteSources.GUILD_CHANNELS,
                  guildScheduledEvent: S,
                });
            });
          }
        }
        let v = (0, s.jsx)(L.default, {
          width: 16,
          height: 16,
          className: M.actionIcon,
          "aria-hidden": !0,
        });
        return (
          l &&
            (v = (0, s.jsx)(m.default, {
              tutorialId: "instant-invite",
              position: "left",
              children: (0, s.jsx)("div", { children: v }),
            })),
          (0, s.jsx)(d.Tooltip, {
            text: T,
            children: e =>
              (0, s.jsx)(d.Clickable, {
                className: u(
                  M.iconItem,
                  r ? M.alwaysShown : void 0,
                  c ? M.iconWithChannelInfo : M.iconNoChannelInfo
                ),
                ...e,
                onClick: A,
                tabIndex: i,
                "aria-label": T,
                children: v,
              }),
          })
        );
      }
      function j(e) {
        let { channel: t } = e,
          n = () => {
            (0, C.dimissFavoriteSuggestion)(t.guild_id, t.id);
          };
        return (0, s.jsx)(d.Tooltip, {
          text: R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
          children: e =>
            (0, s.jsx)(d.Clickable, {
              className: M.iconItem,
              ...e,
              onClick: n,
              "aria-label": R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
              children: (0, s.jsx)(T.default, {
                width: 16,
                height: 16,
                className: M.actionIcon,
              }),
            }),
        });
      }
      function G(e) {
        let { channel: t } = e,
          n = () => {
            (0, C.setIsFavorite)(t.guild_id, t.id, !0, {
              section: x.AnalyticsSections.CHANNEL_LIST,
            });
          };
        return (0, s.jsx)(d.Tooltip, {
          text: R.default.Messages.ADD_FAVORITE,
          children: e =>
            (0, s.jsx)(d.Clickable, {
              className: M.iconItem,
              ...e,
              onClick: n,
              "aria-label": R.default.Messages.ADD_FAVORITE,
              children: (0, s.jsx)(N.default, {
                width: 16,
                height: 16,
                className: M.actionIcon,
              }),
            }),
        });
      }
      ((l = class extends i.PureComponent {
        renderEditButton() {
          return (0, s.jsx)(D, { ...this.props });
        }
        renderInviteButton() {
          return (0, s.jsx)(b, { ...this.props });
        }
        renderRemoveSuggestionButton() {
          return (0, s.jsx)(j, { ...this.props });
        }
        renderAcceptSuggestionButton() {
          return (0, s.jsx)(G, { ...this.props });
        }
        getClassName() {
          let { position: e, sortingPosition: t } = this.props;
          return y(e, t);
        }
        isDisabled() {
          let { channel: e, sorting: t, sortingType: n } = this.props;
          return O(e, t, n);
        }
      }).defaultProps = { isDefaultChannel: !1 }),
        (a = l);
    },
    39347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("669491"),
        i = n("77078"),
        r = n("575136"),
        u = n("680986"),
        o = n("470926"),
        d = n("819450"),
        c = n("401690"),
        f = n("305961"),
        h = n("957255"),
        C = n("660478"),
        p = n("800762"),
        m = n("956089"),
        E = n("89073"),
        g = n("982721"),
        I = n("973539"),
        _ = n("447235"),
        S = n("360723"),
        N = n("137376"),
        T = n("522052"),
        A = n("49111"),
        L = n("133335"),
        v = n("782340"),
        x = n("303566");
      function R(e) {
        var t;
        let {
            channel: n,
            isChannelSelected: R,
            isChannelCollapsed: M,
            voiceStates: O,
            enableConnectedUserLimit: y,
            enableActivities: D,
            isSubscriptionGated: b,
            needSubscriptionToAccess: j,
            isNewChannel: G,
            muted: U,
            resolvedUnreadSetting: P,
          } = e,
          w = (0, a.useStateFromStores)([C.default], () =>
            C.default.getMentionCount(n.id)
          ),
          F = (0, r.default)(n),
          B = (0, a.useStateFromStores)(
            [h.default],
            () => !h.default.can(A.Permissions.CONNECT, n)
          ),
          V = (0, a.useStateFromStores)([p.default], () =>
            p.default.hasVideo(n.id)
          ),
          H = (0, d.useStageHasMedia)(n.id) && n.isGuildStageVoice(),
          k = (0, _.default)({
            channel: n,
            locked: B,
            video: V || H,
            selected: R,
          }),
          Y = (0, a.useStateFromStores)([c.default], () =>
            c.default.getNewThreadCount(n.guild_id, n.id)
          ),
          K = (0, u.useUnreadThreadsCountForParent)(n.guild_id, n.id),
          W = (0, a.useStateFromStores)([f.default], () => {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = f.default.getGuild(n.guild_id)) || void 0 === e
                    ? void 0
                    : e.hasFeature(A.GuildFeatures.COMMUNITY)) &&
              void 0 !== t &&
              t
            );
          });
        if ((0, I.default)(w))
          return (0, l.jsx)(T.default, { mentionsCount: w });
        if ((0, o.showPremiumChannelIconButton)(b))
          return (0, l.jsx)(o.default, { locked: j });
        if (G)
          return (0, l.jsx)(m.TextBadge, {
            text: v.default.Messages.NEW,
            color: s.default.unsafe_rawColors.BRAND_260.css,
            className: x.newChannel,
          });
        if (
          !U &&
          P === L.UnreadSetting.ALL_MESSAGES &&
          n.isForumLikeChannel() &&
          null != Y &&
          Y > 0
        )
          return (0, l.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: v.default.Messages.CHANNEL_NEW_POSTS_LABEL.format({
              count: (0, m.getBadgeCountString)(Y),
            }),
          });
        if (!U && n.isForumLikeChannel() && null != K && K > 0)
          return (0, l.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, m.getBadgeCountString)(K),
          });
        let Z =
          null !== (t = null == O ? void 0 : O.length) && void 0 !== t ? t : 0;
        return null != y && y && k
          ? (0, l.jsx)(N.default, { userCount: Z, video: V || H, channel: n })
          : M && (0, E.hasStream)(O) && W
            ? (0, l.jsx)(m.TextBadge, {
                text: v.default.Messages.LIVE,
                color: s.default.unsafe_rawColors.RED_400.css,
              })
            : null != D && D && (0, g.showChannelItemEmbeddedActivities)(F)
              ? (0, l.jsx)(S.default, { embeddedApps: F, muted: U })
              : null;
      }
    },
    360723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("953109"),
        u = n("749170");
      function o(e) {
        let { className: t, embeddedApps: n, muted: a } = e;
        if (n.length <= 0) return null;
        {
          if (1 === n.length)
            return (0, l.jsx)("div", {
              className: s(u.container, t, a && u.modeMuted),
              children: (0, l.jsx)(r.default, {
                game: n[0].application,
                className: u.icon20px,
              }),
            });
          let e = n.length - 1;
          return (0, l.jsxs)("div", {
            className: s(u.container, t, a && u.modeMuted),
            children: [
              (0, l.jsx)(r.default, {
                game: n[0].application,
                className: u.icon20px,
              }),
              2 === n.length
                ? (0, l.jsx)(r.default, {
                    game: n[1].application,
                    className: u.icon20px,
                  })
                : (0, l.jsx)(i.Text, {
                    className: u.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    120817: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FavoritesChannelList: function () {
            return ec;
          },
          GuildChannelList: function () {
            return ef;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("917351"),
        i = n.n(s),
        r = n("974667"),
        u = n("446674"),
        o = n("77078"),
        d = n("406189"),
        c = n("715315"),
        f = n("901582"),
        h = n("206230"),
        C = n("812204"),
        p = n("685665"),
        m = n("498139"),
        E = n("880730"),
        g = n("802479"),
        I = n("972027"),
        _ = n("334683"),
        S = n("534222"),
        N = n("240239"),
        T = n("676143"),
        A = n("512395"),
        L = n("615387"),
        v = n("721264"),
        x = n("612246"),
        R = n("233069"),
        M = n("42203"),
        O = n("162805"),
        y = n("923959"),
        D = n("162771"),
        b = n("476765"),
        j = n("319839"),
        G = n("123561"),
        U = n("829072"),
        P = n("487370"),
        w = n("60937"),
        F = n("708186"),
        B = n("258285"),
        V = n("710707"),
        H = n("127193"),
        k = n("508176"),
        Y = n("522342"),
        K = n("738552"),
        W = n("630062"),
        Z = n("873774"),
        z = n("677777"),
        X = n("579095"),
        Q = n("333896"),
        J = n("446380"),
        q = n("919429"),
        $ = n("944843"),
        ee = n("283848"),
        et = n("388930"),
        en = n("37416"),
        el = n("796618"),
        ea = n("249181"),
        es = n("49111"),
        ei = n("724210"),
        er = n("782340"),
        eu = n("216659");
      class eo extends a.PureComponent {
        componentDidMount() {
          this.setState({ initialized: !0 });
        }
        componentWillUnmount() {
          this.updateChannelListScroll.cancel();
        }
        componentDidUpdate(e, t) {
          let {
              scrollToChannel: n,
              guildId: l,
              selectedChannelId: a,
            } = this.props,
            { initialized: s } = this.state,
            { scrollTop: i } = O.default.getGuildDimensions(l);
          null != n
            ? (this.scrollToChannel(n), d.default.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != i && this.scrollTo(i)
              : a !== e.selectedChannelId
                ? this.scrollToChannel(a)
                : !t.initialized &&
                  s &&
                  (null == i && null != a
                    ? this.scrollToChannel(
                        a,
                        !1,
                        ea.SCROLL_TO_SPACER,
                        this.handleListScroll
                      )
                    : this.scrollTo(null != i ? i : 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
        }
        getSectionRowsFromChannel(e) {
          return this.props.guildChannels.getSectionRowsFromChannel(e);
        }
        scrollTo(e, t) {
          var n;
          null === (n = this._list) ||
            void 0 === n ||
            n.scrollTo({ to: e, animate: !1, callback: t });
        }
        scrollToChannel(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ea.SCROLL_TO_SPACER,
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
          if (null != s && null != a) {
            if (null != s.threadOffset) {
              let [e] = a.getScrollPosition(s.section, s.row),
                i = s.threadOffset * ea.HEIGHT_CHANNEL;
              a.scrollIntoViewRect({
                start: e + i,
                end: e + i + ea.HEIGHT_CHANNEL,
                padding: n,
                animate: t,
                callback: l,
              });
            } else
              a.scrollToIndex({
                section: s.section,
                row: s.row,
                animate: t,
                padding: n,
                callback: l,
              });
          }
        }
        isUnreadVisible() {
          let { guildChannels: e } = this.props,
            t = this._list;
          if (null == t) return !1;
          let n = t.getItems();
          return n.some(n => {
            if ("row" !== n.type) return !1;
            let { section: l, row: a } = n;
            if (
              l < j.SECTION_INDEX_UNCATEGORIZED_CHANNELS ||
              e.isPlaceholderRow(l, a)
            )
              return !1;
            let s = e.getChannelFromSectionRow(l, a);
            if (null == s) return !1;
            let { channel: i, category: r } = s;
            return (
              !!(0, R.isGuildReadableType)(i.record.type) &&
              (!r.isCollapsed || !r.isMuted) &&
              !i.isMuted &&
              !!t.isItemVisible(l, a, !0) &&
              (0, L.getHasImportantUnread)(i.record)
            );
          });
        }
        renderTopUnread() {
          let {
              topMention: e,
              bottomUnread: t,
              bottomMention: n,
              isUnreadVisible: a,
            } = this.state,
            {
              guildId: s,
              guildChannels: i,
              guildChannelsVersion: r,
            } = this.props;
          return (0, l.jsx)("div", {
            className: eu.positionedContainer,
            children: (0, l.jsx)(ee.default, {
              ref: this.unreadTopRef,
              textUnread: er.default.Messages.NEW_UNREADS,
              textMention: er.default.Messages.NEW_MENTIONS,
              hide: null == e && (a || null != t || null != n),
              className: eu.unreadTop,
              barClassName: eu.unreadBar,
              guildId: s,
              guildChannels: i,
              guildChannelsVersion: r,
              isVisible: this.isChannelVisible,
              onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
              onCalculate: this.handleUnreadCalculate,
            }),
          });
        }
        renderBottomUnread() {
          let {
              guildId: e,
              guildChannels: t,
              guildChannelsVersion: n,
            } = this.props,
            { bottomMention: a, isUnreadVisible: s } = this.state;
          return (0, l.jsx)(ee.default, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.default.Messages.NEW_UNREADS,
            textMention: er.default.Messages.NEW_MENTIONS,
            hide: null == a && s,
            className: eu.unreadBottom,
            barClassName: eu.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
          });
        }
        renderList() {
          let {
              guildChannels: e,
              guild: t,
              guildBanner: n,
              hasGuildSubheader: a,
            } = this.props,
            { ref: s, ...i } = this.context,
            r = 0;
          return (
            null != n
              ? (r = ea.SERVER_BANNER_PADDING)
              : t.hasCommunityInfoSubheader() &&
                !a &&
                (r = ea.SERVER_COMMUNITY_INFO_PADDING),
            (0, l.jsx)(o.FocusJumpSection, {
              children: t =>
                (0, l.jsx)(
                  o.List,
                  {
                    ref: this.setListRef,
                    className: eu.scroller,
                    fade: !0,
                    customTheme: !0,
                    sectionHeight: this.getSectionHeight,
                    footerHeight: this.getSectionFooterHeight,
                    rowHeight: this.getRowHeight,
                    paddingTop: r,
                    paddingBottom: ea.HEIGHT_BUFFER,
                    renderSection: this.renderSection,
                    renderFooter: this.renderSectionFooter,
                    renderRow: this.renderRow,
                    onScroll: this.handleListScroll,
                    onResize: this.handleResize,
                    onContentResize: this.handleResize,
                    sections: e.getSections(),
                    innerAriaLabel: er.default.Messages.CHANNELS,
                    innerTag: "ul",
                    getAnchorId: this.getAnchorId,
                    ...i,
                    ...t,
                  },
                  "guild-channels"
                ),
            })
          );
        }
        render() {
          let {
            guildChannels: e,
            guildChannelsVersion: t,
            showNewUnreadsBar: n,
          } = this.props;
          return (0, l.jsx)(a.Fragment, {
            children: (0, l.jsx)(b.UID, {
              children: s =>
                (0, l.jsx)(o.HeadingLevel, {
                  component: (0, l.jsx)(o.HiddenVisually, {
                    children: (0, l.jsx)(o.H, {
                      id: s,
                      children: er.default.Messages.CHANNELS,
                    }),
                  }),
                  children: n
                    ? (0, l.jsxs)(a.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            className: eu.positionedContainer,
                            children: (0, l.jsx)($.default, {
                              position: "top",
                              guildChannels: e,
                              guildChannelsVersion: t,
                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                              jumpToChannel: this.jumpToChannel,
                            }),
                          }),
                          this.renderList(),
                          (0, l.jsx)($.default, {
                            position: "bottom",
                            guildChannels: e,
                            guildChannelsVersion: t,
                            jumpToVoiceChannels: this.jumpToVoiceChannels,
                            jumpToChannel: this.jumpToChannel,
                          }),
                        ],
                      })
                    : (0, l.jsxs)(a.Fragment, {
                        children: [
                          this.renderTopUnread(),
                          this.renderList(),
                          this.renderBottomUnread(),
                        ],
                      }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._list = null),
            (this.unreadTopRef = a.createRef()),
            (this.unreadBottomRef = a.createRef()),
            (this.state = {
              initialized: !1,
              isUnreadVisible: !0,
              topUnread: null,
              topMention: null,
              bottomUnread: null,
              bottomMention: null,
            }),
            (this.setListRef = e => {
              var t;
              let { ref: n } = this.context;
              (n.current =
                null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                void 0 !== t
                  ? t
                  : null),
                (this._list = e);
            }),
            (this.jumpToVoiceChannels = () => {
              var e, t, n, l;
              let { guildChannels: a, voiceStates: s } = this.props,
                i = 0,
                r =
                  null !==
                    (n =
                      null ===
                        (e = a.getCategoryFromSection(
                          a.voiceChannelsSectionNumber
                        )) || void 0 === e
                        ? void 0
                        : e.getShownChannelIds()) && void 0 !== n
                    ? n
                    : [];
              for (let e = 0; e < r.length - 1; e++) {
                let t = null !== (l = s[r[e]]) && void 0 !== l ? l : [];
                if (t.length > 0) {
                  i = e + 1;
                  break;
                }
              }
              null === (t = this._list) ||
                void 0 === t ||
                t.scrollToIndex({
                  section: a.voiceChannelsSectionNumber,
                  row: i,
                  animate: !0,
                  padding: ea.SCROLL_TO_SPACER,
                });
            }),
            (this.jumpToChannel = e =>
              this.scrollToChannel(e, !0, ea.SCROLL_TO_UNREAD_BUFFER)),
            (this.jumpToChannelWithMentionsAndUnreads = (e, t) => {
              let [n, l] = t;
              return this.scrollToChannel(
                e,
                !0,
                null != n && null != l
                  ? ea.SCROLL_TO_UNREAD_BUFFER
                  : ea.SCROLL_TO_SPACER
              );
            }),
            (this.isChannelVisible = (e, t) => {
              let n = this.getSectionRowsFromChannel(e),
                l = this._list;
              if (null == l) return !1;
              for (let { row: e, section: a } of n) {
                let [n, s] = l.getScrollPosition(a, e),
                  i = l.getScrollerState();
                if (t && n + s < i.scrollTop + i.offsetHeight) return !0;
                if (!t && n > i.scrollTop) return !0;
              }
              return !1;
            }),
            (this.getVisibleChannels = () => {
              let e = this._list;
              if (null == e) return [];
              let t = e.getItems(),
                n = e.getScrollerState(),
                l = [];
              for (var a = 0; a < t.length; a++) {
                let s = t[a];
                if (
                  (0, o.isListItemRow)(s) &&
                  s.section >= this.props.guildChannels.favoritesSectionNumber
                ) {
                  let t = this.props.guildChannels.getChannelFromSectionRow(
                      s.section,
                      s.row
                    ),
                    [a, i] = e.getScrollPosition(s.section, s.row);
                  null != t &&
                    a + i < n.scrollTop + n.offsetHeight &&
                    a > n.scrollTop &&
                    l.push(t.channel.id);
                }
              }
              return l;
            }),
            (this.handleResize = () => {
              var e, t;
              let { showNewUnreadsBar: n } = this.props,
                l =
                  null !==
                    (t =
                      null === (e = this._list) || void 0 === e
                        ? void 0
                        : e.getScrollerState()) && void 0 !== t
                    ? t
                    : null;
              if (
                (this.setState({ isUnreadVisible: this.isUnreadVisible() }),
                n && null != l)
              ) {
                let { scrollTop: e } = l;
                this.updateChannelListScroll(e);
              }
            }),
            (this.handleListScroll = () => {
              var e, t;
              let { onScroll: n } = this.props,
                l =
                  null !==
                    (t =
                      null === (e = this._list) || void 0 === e
                        ? void 0
                        : e.getScrollerState()) && void 0 !== t
                    ? t
                    : null;
              if (null != l) {
                let { scrollTop: e } = l;
                null != n && n(l), this.updateChannelListScroll(e);
              }
              null != this.unreadTopRef.current &&
                this.unreadTopRef.current.calculateState(),
                null != this.unreadBottomRef.current &&
                  this.unreadBottomRef.current.calculateState();
            }),
            (this.handleUnreadCalculate = (e, t, n) => {
              let l = this.isUnreadVisible();
              n
                ? this.setState({
                    isUnreadVisible: l,
                    bottomUnread: t,
                    bottomMention: e,
                  })
                : this.setState({
                    isUnreadVisible: l,
                    topUnread: t,
                    topMention: e,
                  });
            }),
            (this.updateChannelListScroll = i.throttle(e => {
              d.default.updateChannelListScroll(
                this.props.guildId,
                e,
                this.getVisibleChannels()
              );
            }, 100)),
            (this.getSectionHeight = e => {
              let { guild: t, guildChannels: n } = this.props;
              return (0, B.getChannelListSectionHeight)(e, t, n);
            }),
            (this.getSectionFooterHeight = e => {
              let {
                guildChannels: t,
                voiceStates: n,
                selectedVoiceChannelId: l,
                selectedChannelId: a,
                optInEnabled: s,
                guildChannelsVersion: i,
              } = this.props;
              return (0, V.getChannelListSectionFooterHeight)({
                sectionIndex: e,
                guildChannels: t,
                guildChannelsVersion: i,
                voiceStates: n,
                selectedChannelId: a,
                selectedVoiceChannelId: l,
                optInEnabled: s,
              });
            }),
            (this.getRowHeight = (e, t) => {
              let {
                  guildChannels: n,
                  voiceStates: l,
                  stageChannelSpeakerVoiceStates: a,
                  selectedVoiceChannelId: s,
                  selectedGuildId: i,
                } = this.props,
                r = ea.HEIGHT_CHANNEL;
              if (e === j.SECTION_INDEX_COMMUNITY) {
                let e = n.getCommunitySection();
                if (e.isEmpty()) return 0;
                if (
                  e.getRow(t) ===
                  el.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR
                ) {
                  let t = e.getRows();
                  return t.length > 1
                    ? E.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN
                    : E.PROGRESS_BAR_CONTAINER_HEIGHT;
                }
                return r;
              }
              if (n.isPlaceholderRow(e, t)) return 0;
              let u = n.getChannelFromSectionRow(e, t);
              if (null == u) return 0;
              let { channel: o, category: d } = u;
              if (o.record.type === es.ChannelTypes.GUILD_CATEGORY) return 40;
              let { isFavoritesPerk: c } = m.default.getCurrentConfig(
                { location: "channel_list" },
                { autoTrackExposure: !0 }
              );
              for (let e of (c &&
                i === es.FAVORITES &&
                !o.record.isDM() &&
                !o.record.isGroupDM() &&
                !o.record.isGuildStageVoice() &&
                (r = ea.HEIGHT_CHANNEL_FAVORITES),
              o.threadIds)) {
                r += ea.HEIGHT_CHANNEL;
                let t = l[o.id];
                null != t &&
                  t.length > 0 &&
                  (r +=
                    (s === e ? t.length * ea.HEIGHT_USER : ea.HEIGHT_USER) +
                    ea.HEIGHT_USER_PADDING);
              }
              if (o.record.isGuildVoice()) {
                let e = l[o.id];
                if (null != e && e.length > 0) {
                  let t = e.length * ea.HEIGHT_USER;
                  (o.isCollapsed || d.isCollapsed) && (t = ea.HEIGHT_USER),
                    (r += t + ea.HEIGHT_USER_PADDING);
                }
              }
              if (
                (null != o.subtitle && (r += ea.HEIGHT_CHANNEL_SUBTITLE),
                o.record.isGuildStageVoice())
              ) {
                var f, h;
                let e = null !== (f = l[o.id]) && void 0 !== f ? f : [],
                  t = null !== (h = a[o.id]) && void 0 !== h ? h : [];
                if (null != e && e.length > 0) {
                  let e = t.length * ea.HEIGHT_USER;
                  o.isCollapsed || d.isCollapsed
                    ? (e = Math.ceil(e / ea.COLLAPSED_USERS_PER_ROW))
                    : (e += ea.HEIGHT_USER),
                    (r += e + ea.HEIGHT_USER_PADDING);
                }
              }
              return r;
            }),
            (this.dismissRecents = () => {
              let {
                  guild: e,
                  guildChannels: t,
                  selectedChannelId: n,
                } = this.props,
                l = t.getCategoryFromSection(t.recentsSectionNumber);
              if (null == l) return;
              let a = null,
                s = l.getShownChannelAndThreadIds();
              null != n && s.includes(n) && (a = (0, T.getFirstRouteFor)(t)),
                (0, T.clearRecentChannels)(e.id, s, a);
            }),
            (this.renderSection = e => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: a,
                  guild: s,
                  selectedChannelId: i,
                  disableManageChannels: r,
                } = this.props;
              return (0, l.jsx)(
                B.default,
                {
                  sectionIndex: t,
                  guild: s,
                  guildChannels: n,
                  guildChannelsVersion: a,
                  selectedChannelId: i,
                  disableManageChannels: r,
                },
                (0, B.getKeyForSection)(t, n)
              );
            }),
            (this.renderRow = e => {
              let { section: t, row: n } = e,
                {
                  guild: s,
                  selectedChannel: i,
                  selectedChannelId: r,
                  selectedVoiceChannel: u,
                  selectedVoiceChannelId: o,
                  guildChannels: d,
                  voiceStates: c,
                  disableManageChannels: f,
                  stageChannelSpeakerVoiceStates: h,
                  optInEnabled: C,
                  withGuildIcon: p,
                } = this.props;
              if (t === j.SECTION_INDEX_COMMUNITY) {
                let e = d.getCommunitySection(),
                  t = e.getRow(n);
                if (null == t) return null;
                switch (t) {
                  case el.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
                    return (0, l.jsx)(
                      N.default,
                      { guild: s, channel: y.default.getDefaultChannel(s.id) },
                      el.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS
                    );
                  case el.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
                    let a = e.getRows();
                    return (0, l.jsx)(
                      E.default,
                      { guild: s, withMargin: a.length > 1 },
                      el.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR
                    );
                  case el.ChannelListCommunityRow.GUILD_HOME:
                    return (0, l.jsx)(
                      Y.default,
                      {
                        guild: s,
                        selected: r === ei.StaticChannelRoute.GUILD_HOME,
                      },
                      el.ChannelListCommunityRow.GUILD_HOME
                    );
                  case el.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
                    return (0, l.jsx)(
                      et.default,
                      {
                        guild: s,
                        selected:
                          r ===
                          el.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS,
                      },
                      el.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
                    );
                  case el.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, l.jsx)(
                      Z.default,
                      {
                        guild: s,
                        selected:
                          r === ei.StaticChannelRoute.ROLE_SUBSCRIPTIONS,
                      },
                      el.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS
                    );
                  case el.ChannelListCommunityRow.GUILD_SHOP:
                    return (0, l.jsx)(
                      z.default,
                      {
                        guild: s,
                        selected: r === ei.StaticChannelRoute.GUILD_SHOP,
                      },
                      el.ChannelListCommunityRow.GUILD_SHOP
                    );
                  case el.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                    return (0, l.jsx)(
                      K.default,
                      {
                        guild: s,
                        selected:
                          r === ei.StaticChannelRoute.MEMBER_APPLICATIONS,
                      },
                      el.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS
                    );
                  case el.ChannelListCommunityRow
                    .GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, l.jsx)(W.GuildNewMemberActionsProgressBar, {
                      guild: s,
                    });
                  case el.ChannelListCommunityRow.CHANNELS_AND_ROLES:
                    return (0, l.jsx)(
                      k.GuildBrowseChannelsRow,
                      {
                        guild: s,
                        selected:
                          r === ei.StaticChannelRoute.CHANNEL_BROWSER ||
                          r === ei.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                      },
                      el.ChannelListCommunityRow.CHANNELS_AND_ROLES
                    );
                  case el.ChannelListCommunityRow.GUILD_DIRECTORY:
                    return (0, l.jsx)(
                      H.default,
                      {
                        guild: s,
                        selectedChannelId: r,
                        disableManageChannels: f,
                      },
                      el.ChannelListCommunityRow.GUILD_DIRECTORY
                    );
                  case el.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, l.jsx)(
                      g.default,
                      {
                        guild: s,
                        selected: r === ei.StaticChannelRoute.MEMBER_SAFETY,
                      },
                      el.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY
                    );
                  default:
                    return null;
                }
              }
              if (d.isPlaceholderRow(t, n)) return null;
              let m = d.getChannelFromSectionRow(t, n);
              if (null == m) return null;
              let { category: I, channel: _ } = m,
                S = I instanceof j.ChannelListFavoritesCategory,
                T = _.record,
                A = "".concat(t).concat(_.id);
              switch (T.type) {
                case es.ChannelTypes.GUILD_ANNOUNCEMENT:
                case es.ChannelTypes.GUILD_TEXT:
                case es.ChannelTypes.GUILD_FORUM:
                case es.ChannelTypes.GUILD_MEDIA:
                case es.ChannelTypes.DM:
                case es.ChannelTypes.GROUP_DM:
                  return (0, l.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, l.jsx)(q.default, {
                          channel: T,
                          guild: s,
                          position: _.position,
                          selected: r === _.id,
                          muted: _.isMuted,
                          subtitle: _.subtitle,
                          disableManageChannels: f,
                          canBeNewChannel: C && t === d.recentsSectionNumber,
                          isFavoriteCategory: S,
                          withGuildIcon: p,
                        }),
                        _.threadCount > 0
                          ? (0, l.jsx)(X.default, {
                              withGuildIcon: p,
                              channel: T,
                              sortedThreadIds: _.threadIds,
                              selectedChannel:
                                null != i &&
                                (i.id === _.id || i.parent_id === T.id)
                                  ? i
                                  : null,
                              selectedVoiceChannelId:
                                (null == u ? void 0 : u.parent_id) === T.id
                                  ? o
                                  : null,
                            })
                          : null,
                      ],
                    },
                    A
                  );
                case es.ChannelTypes.GUILD_STAGE_VOICE:
                  var L, v;
                  return (0, l.jsx)(
                    Q.default,
                    {
                      channel: T,
                      guild: s,
                      position: _.position,
                      selected: r === _.id,
                      connected: o === _.id,
                      collapsed: _.isCollapsed || I.isCollapsed,
                      voiceStates:
                        null !== (L = c[_.id]) && void 0 !== L ? L : [],
                      speakerVoiceStates:
                        null !== (v = h[_.id]) && void 0 !== v ? v : [],
                      disableManageChannels: f,
                      isFavoriteCategory: S,
                    },
                    A
                  );
                case es.ChannelTypes.GUILD_VOICE:
                  return (0, l.jsx)(
                    en.default,
                    {
                      channel: T,
                      guild: s,
                      position: _.position,
                      selected: r === _.id,
                      connected: o === _.id,
                      collapsed: _.isCollapsed || I.isCollapsed,
                      voiceStates: c[_.id],
                      subtitle: _.subtitle,
                      disableManageChannels: f,
                      showTutorial: _.isFirstVoiceChannel,
                      isFavoriteCategory: S,
                      withGuildIcon: p,
                    },
                    A
                  );
                case es.ChannelTypes.GUILD_STORE:
                  return (0, l.jsx)(
                    J.default,
                    {
                      channel: T,
                      guild: s,
                      position: _.position,
                      selected: r === _.id,
                    },
                    A
                  );
                case es.ChannelTypes.GUILD_CATEGORY:
                  if (t !== d.voiceChannelsSectionNumber) return null;
                  return (0, l.jsx)(
                    F.ReadonlyCategoryChannel,
                    { channel: T },
                    "readonly-".concat(T.id)
                  );
                case es.ChannelTypes.PUBLIC_THREAD:
                case es.ChannelTypes.PRIVATE_THREAD:
                  return (0, l.jsx)(
                    q.default,
                    {
                      channel: T,
                      guild: s,
                      position: _.position,
                      selected: r === _.id,
                      muted: _.isMuted,
                      subtitle: _.subtitle,
                      disableManageChannels: f,
                      canBeNewChannel: !1,
                      isFavoriteCategory: !1,
                      forceTopLevelThread: !0,
                    },
                    A
                  );
                default:
                  return null;
              }
            }),
            (this.renderSectionFooter = e => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: a,
                  voiceStates: s,
                  selectedChannelId: i,
                  selectedVoiceChannelId: r,
                  optInEnabled: u,
                  guildId: o,
                } = this.props;
              return (0, l.jsx)(
                V.default,
                {
                  guildId: o,
                  guildChannels: n,
                  guildChannelsVersion: a,
                  sectionIndex: t,
                  voiceStates: s,
                  selectedChannelId: i,
                  selectedVoiceChannelId: r,
                  optInEnabled: u,
                },
                (0, V.getKeyForSectionFooter)(t, n, u)
              );
            }),
            (this.getAnchorId = (e, t) => {
              var n, l, a;
              let { guildChannels: s } = this.props;
              if (e !== j.SECTION_INDEX_COMMUNITY) {
                if (null == t)
                  return e === j.SECTION_INDEX_FAVORITES
                    ? "favorites-header"
                    : e === s.recentsSectionNumber
                      ? "recents-header"
                      : e === s.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === j.SECTION_INDEX_UNCATEGORIZED_CHANNELS
                          ? "uncategorized-header"
                          : null === (a = s.getNamedCategoryFromSection(e)) ||
                              void 0 === a
                            ? void 0
                            : a.id;
                if (!s.isPlaceholderRow(e, t))
                  return null === (l = s.getChannelFromSectionRow(e, t)) ||
                    void 0 === l
                    ? void 0
                    : null === (n = l.channel) || void 0 === n
                      ? void 0
                      : n.id;
              }
            }),
            (this.testShouldSkipTutorial = () => {
              if (!x.default.shouldShow("voice-conversations")) return;
              let { guildChannels: e } = this.props,
                t = e.getFirstVoiceChannel();
              if (null == t) {
                c.default.dismiss("voice-conversations");
                return;
              }
              let n = this._list;
              if (null == n) return;
              let l = this.getSectionRowsFromChannel(t.id);
              for (let { section: e, row: t } of l)
                !n.isItemVisible(e, t) &&
                  c.default.dismiss("voice-conversations");
            });
        }
      }
      eo.contextType = r.ListContainerContext;
      let ed = e => {
        let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: s } = e,
          i = (0, u.useStateFromStores)(
            [h.default],
            () => h.default.keyboardModeEnabled
          ),
          { AnalyticsLocationProvider: o } = (0, p.default)(
            C.default.GUILD_CHANNEL_LIST
          ),
          d = (0, u.useStateFromStores)([M.default], () =>
            M.default.getChannel(n)
          ),
          c = (0, u.useStateFromStores)([M.default], () =>
            M.default.getChannel(s)
          ),
          m = (0, u.useStateFromStores)([D.default], () =>
            D.default.getGuildId()
          ),
          E = (0, A.useOptInEnabledForGuild)(t),
          g = a.useRef(null),
          I = a.useCallback((e, t) => {
            let n = g.current;
            if (null != n) {
              if (es.ID_REGEX.test(t) || (0, ei.isStaticChannelRoute)(t))
                n.scrollToChannel(t, !1, 2 * ea.SCROLL_TO_SPACER, () => {
                  requestAnimationFrame(() => {
                    var t;
                    return null === (t = document.querySelector(e)) ||
                      void 0 === t
                      ? void 0
                      : t.focus();
                  });
                });
              else {
                var l;
                null === (l = document.querySelector(e)) ||
                  void 0 === l ||
                  l.focus();
              }
            }
          }, []),
          _ = a.useCallback(
            () =>
              new Promise(e => {
                let t = g.current;
                if (null == t) return e();
                t.scrollTo(0, () => requestAnimationFrame(() => e()));
              }),
            []
          ),
          S = a.useCallback(
            () =>
              new Promise(e => {
                let t = g.current;
                if (null == t) return e();
                t.scrollTo(Number.MAX_SAFE_INTEGER, () =>
                  requestAnimationFrame(() => e())
                );
              }),
            []
          ),
          N = (0, r.default)({
            id: "channels",
            defaultFocused: null != n ? n : void 0,
            isEnabled: i,
            setFocus: I,
            scrollToStart: _,
            scrollToEnd: S,
          }),
          T = N.setFocus;
        a.useEffect(() => {
          null != n && T(n);
        }, [n, T]);
        let L = (0, v.default)(t);
        return (0, l.jsx)(o, {
          children: (0, l.jsx)(f.default, {
            section: es.AnalyticsSections.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(r.ListNavigatorProvider, {
              navigator: N,
              children: (0, l.jsx)(eo, {
                ...e,
                listNavigator: N,
                ref: g,
                selectedChannel: d,
                selectedVoiceChannel: c,
                stageChannelSpeakerVoiceStates: L,
                selectedGuildId: m,
                optInEnabled: E,
              }),
            }),
          }),
        });
      };
      function ec(e) {
        let t = (0, U.useFavoritesServerChannelList)(),
          { isFavoritesPerk: n } = (0, m.useFavoritesServerExperiment)(
            "favorites-channel-list"
          );
        return (0, l.jsx)(ed, {
          ...e,
          guildChannels: t,
          guildChannelsVersion: 0,
          withGuildIcon: n,
        });
      }
      function ef(e) {
        let t = (0, w.default)(e.guild),
          n = (0, P.default)(e.guild),
          a = i.uniq(n.concat(t)),
          s = (0, _.default)(e.guild.id),
          r = (0, S.default)(e.guild.id),
          o = (0, u.useStateFromStoresObject)([G.default], () =>
            G.default.getGuild(e.guildId, a)
          );
        return (
          !e.guild.hasFeature(es.GuildFeatures.COMMUNITY) &&
            !e.guild.hasFeature(es.GuildFeatures.HUB) &&
            s &&
            0 === r.length &&
            I.default.trackExposure({
              guildId: e.guildId,
              location: "Channel List",
            }),
          (0, l.jsx)(ed, { ...e, ...o })
        );
      }
    },
    249181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SCROLL_TO_SPACER: function () {
            return l;
          },
          SCROLL_TO_UNREAD_BUFFER: function () {
            return a;
          },
          HEIGHT_SECTION: function () {
            return s;
          },
          HEIGHT_SECTION_DIVIDER: function () {
            return i;
          },
          HEIGHT_BUFFER: function () {
            return r;
          },
          HEIGHT_CHANNEL: function () {
            return u;
          },
          HEIGHT_CHANNEL_FAVORITES: function () {
            return o;
          },
          HEIGHT_CHANNEL_SUBTITLE: function () {
            return d;
          },
          HEIGHT_USER: function () {
            return c;
          },
          HEIGHT_USER_PADDING: function () {
            return f;
          },
          SERVER_BANNER_PADDING: function () {
            return h;
          },
          SERVER_COMMUNITY_INFO_PADDING: function () {
            return C;
          },
          COLLAPSED_USERS_PER_ROW: function () {
            return p;
          },
          TUTORIAL_INLINE_SPECS: function () {
            return m;
          },
        });
      let l = 8,
        a = 32,
        s = 40,
        i = 12,
        r = 12,
        u = 34,
        o = 41.5,
        d = 16,
        c = 32,
        f = 8,
        h = 84,
        C = 16,
        p = 5,
        m = {
          origin: { x: -36, y: 7 },
          targetWidth: 232,
          targetHeight: 40,
          offset: { x: 0, y: 0 },
        };
    },
    258285: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelListSectionHeight: function () {
            return p;
          },
          getKeyForSection: function () {
            return m;
          },
          default: function () {
            return E;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("498139"),
        i = n("676143"),
        r = n("12896"),
        u = n("808072"),
        o = n("319839"),
        d = n("708186"),
        c = n("249181"),
        f = n("49111"),
        h = n("782340"),
        C = n("216659");
      function p(e, t, n) {
        if (e === o.SECTION_INDEX_COMMUNITY) return c.HEIGHT_BUFFER;
        if (e === o.SECTION_INDEX_UNCATEGORIZED_CHANNELS)
          return t.hasFeature(f.GuildFeatures.HUB) ? 0 : c.HEIGHT_BUFFER;
        if (e === n.voiceChannelsSectionNumber) {
          var l;
          let t = n.getCategoryFromSection(e);
          if (null == t || t.isEmpty()) return 0;
          if (t.isCollapsed) return c.HEIGHT_SECTION + c.HEIGHT_SECTION_DIVIDER;
          let a =
            null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l
              ? void 0
              : l.channel;
          return null == a || a.record.type === f.ChannelTypes.GUILD_CATEGORY
            ? c.HEIGHT_SECTION_DIVIDER
            : 16 + c.HEIGHT_SECTION_DIVIDER;
        }
        return c.HEIGHT_SECTION;
      }
      function m(e, t) {
        switch (e) {
          case o.SECTION_INDEX_COMMUNITY:
            return "hoisted-spacer";
          case o.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
            return "uncategorized-spacer";
          case o.SECTION_INDEX_FAVORITES:
            return "favorites";
          case t.recentsSectionNumber:
            return "recents-header";
          case t.voiceChannelsSectionNumber:
            return "voice-channels-header";
          default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return "category-".concat(n.id);
            return "section-".concat(e);
          }
        }
      }
      var E = a.memo(function (e) {
        let {
            sectionIndex: t,
            guild: n,
            guildChannels: p,
            guildChannelsVersion: m,
            selectedChannelId: E,
            disableManageChannels: g,
          } = e,
          { isFavoritesPerk: I } = (0, s.useFavoritesServerExperiment)(
            "ChannelListSection"
          ),
          _ = a.useCallback(() => {
            let e = p.getCategoryFromSection(p.recentsSectionNumber);
            if (null == e) return;
            let t = null,
              l = e.getShownChannelAndThreadIds();
            null != E && l.includes(E) && (t = (0, i.getFirstRouteFor)(p)),
              (0, i.clearRecentChannels)(n.id, l, t);
          }, [n.id, E, p, m]);
        switch (t) {
          case o.SECTION_INDEX_COMMUNITY:
            return (0, l.jsx)("div", { style: { height: c.HEIGHT_BUFFER } });
          case o.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
            if (n.hasFeature(f.GuildFeatures.HUB)) return null;
            return (0, l.jsx)("div", { style: { height: c.HEIGHT_BUFFER } });
          case o.SECTION_INDEX_FAVORITES:
            return (0, l.jsx)(d.NonChannelCategory, {
              name: I
                ? h.default.Messages.PINNED_CHANNELS
                : h.default.Messages.FAVORITES,
            });
          case p.recentsSectionNumber:
            return (0, l.jsx)(d.NonChannelCategory, {
              name: h.default.Messages.RECENTS_CATEGORY_HEADER,
              onDismiss: _,
            });
          case p.voiceChannelsSectionNumber: {
            var S;
            let e = p.getCategoryFromSection(p.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n =
              null === (S = p.getChannelFromSectionRow(t, 0)) || void 0 === S
                ? void 0
                : S.channel;
            return (0, l.jsxs)(a.Fragment, {
              children: [
                (0, l.jsx)("div", { className: C.sectionDivider }),
                (0, l.jsx)(d.VoiceChannelCategory, { category: e, channel: n }),
              ],
            });
          }
          case o.SECTION_INDEX_FIRST_NAMED_CATEGORY: {
            let e = p.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, l.jsx)(d.default, {
              channel: e.record,
              position: e.position,
              disableManageChannels: g,
              children: (0, l.jsx)(r.default, {
                inlineSpecs: c.TUTORIAL_INLINE_SPECS,
                arrowAlignment: u.ArrowAlignments.TOP,
                tutorialId: "organize-by-topic",
                position: "right",
              }),
            });
          }
          default: {
            let e = p.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, l.jsx)(d.default, {
              channel: e.record,
              position: e.position,
              disableManageChannels: g,
            });
          }
        }
      });
    },
    710707: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelListSectionFooterHeight: function () {
            return h;
          },
          getKeyForSectionFooter: function () {
            return C;
          },
          default: function () {
            return p;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("811305"),
        i = n("404008"),
        r = n("319839"),
        u = n("175632"),
        o = n("708186"),
        d = n("249181"),
        c = n("216659");
      let f = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
          s = a.useMemo(
            () => t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            [t, n]
          );
        return null == s
          ? null
          : (0, l.jsx)(o.VoiceChannelCategoryButton, { category: s });
      });
      function h(e) {
        let {
          sectionIndex: t,
          guildChannels: n,
          voiceStates: l,
          selectedChannelId: a,
          selectedVoiceChannelId: s,
          optInEnabled: i,
        } = e;
        if (t === n.voiceChannelsSectionNumber) return 44;
        let { hasDivider: o, canHaveVoiceSummary: c } = (0,
          u.getSectionFooterConfig)(n, i, t),
          f = o ? d.HEIGHT_SECTION_DIVIDER : 0;
        if (!c || t === r.SECTION_INDEX_COMMUNITY) return f;
        let h = n.getNamedCategoryFromSection(t);
        if (null == h) return f;
        let C = (0, u.isSectionFooterWithActiveVoiceChannels)({
          category: h,
          selectedChannelId: a,
          selectedVoiceChannelId: s,
          voiceStates: l,
        });
        return C ? d.HEIGHT_CHANNEL + f : f;
      }
      function C(e, t, n) {
        if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
        let { hasDivider: l, canHaveVoiceSummary: a } = (0,
        u.getSectionFooterConfig)(t, n, e);
        return "section-footer-"
          .concat(e)
          .concat(l ? "-divider" : "")
          .concat(a ? "-voice-summary" : "");
      }
      var p = a.memo(function (e) {
        let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: o,
            voiceStates: d,
            guildId: h,
            selectedChannelId: C,
            selectedVoiceChannelId: p,
            optInEnabled: m,
          } = e,
          { hasDivider: E, canHaveVoiceSummary: g } = a.useMemo(
            () => (0, u.getSectionFooterConfig)(n, m, t),
            [n, m, t, o]
          ),
          I = a.useMemo(
            () =>
              t === r.SECTION_INDEX_COMMUNITY
                ? null
                : n.getCategoryFromSection(t),
            [n, t, o]
          ),
          _ = a.useMemo(
            () =>
              null != I && I.isCollapsed
                ? (0, i.computeSummarizedVoiceUsers)({
                    channels: I.getChannelRecords(),
                    selectedChannelId: C,
                    selectedVoiceChannelId: p,
                    voiceStates: d,
                  })
                : [],
            [I, C, p, d]
          );
        if (t === n.voiceChannelsSectionNumber)
          return (0, l.jsx)(f, { guildChannels: n, guildChannelsVersion: o });
        let S = E ? (0, l.jsx)("div", { className: c.sectionDivider }) : null;
        return g && 0 !== _.length
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className: c.voiceUserSummary,
                  children: (0, l.jsx)(s.default, {
                    renderIcon: !0,
                    users: _,
                    max: 8,
                    showUserPopout: !0,
                    guildId: h,
                  }),
                }),
                S,
              ],
            })
          : S;
      });
    },
    321314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("419830"),
        r = n("305961"),
        u = n("727951");
      function o(e) {
        let { channel: t } = e,
          n = (0, a.useStateFromStores)([r.default], () =>
            r.default.getGuild(t.guild_id)
          ),
          o = (0, i.getChannelIconComponent)(t, n);
        return null == o
          ? null
          : (0, l.jsxs)("div", {
              className: u.popoutHeader,
              children: [
                (0, l.jsx)(o, { className: u.channelIcon }),
                (0, l.jsx)(s.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-normal",
                  className: u.channelName,
                  children: t.name,
                }),
              ],
            });
      }
    },
    137376: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("830210"),
        s = n("42687");
      function i(e) {
        let { channel: t, video: n, userCount: i } = e,
          { limit: r } = (0, a.default)(t),
          u = -1,
          o = !1;
        return (
          t.userLimit > 0 && (u = t.userLimit),
          n &&
            r > 0 &&
            ((o = u < 0 || r < u), (u = u > 0 ? Math.min(u, r) : r)),
          (0, l.jsx)(s.default, { users: i, total: u, videoLimit: o })
        );
      }
    },
    127193: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("272030"),
        o = n("667771"),
        d = n("42203"),
        c = n("923959"),
        f = n("957255"),
        h = n("783735"),
        C = n("41594"),
        p = n("49111"),
        m = n("133335"),
        E = n("65369");
      let g = (0, o.makeChannelSortable)(function (e) {
        let {
            guild: t,
            selectedChannelId: s,
            position: o,
            disableManageChannels: g,
            sorting: I,
            sortingType: _,
            sortingPosition: S,
            connectChannelDragSource: N,
            connectChannelDropTarget: T,
            tabIndex: A,
          } = e,
          L = (0, r.useStateFromStores)([d.default, c.default], () => {
            let e = c.default.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : d.default.getChannel(e[0]);
          }),
          v = (0, r.useStateFromStores)([d.default], () =>
            d.default.getChannel(null == L ? void 0 : L.parent_id)
          ),
          x = s === (null == L ? void 0 : L.id),
          R = (0, r.useStateFromStores)([f.default], () =>
            null != v
              ? f.default.can(p.Permissions.MANAGE_CHANNELS, v)
              : null != t && f.default.can(p.Permissions.MANAGE_CHANNELS, t)
          ),
          M = a.useCallback(
            e => {
              null != L &&
                (0, u.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("425630")
                    .then(n.bind(n, "425630"));
                  return t => (0, l.jsx)(e, { ...t, channel: L });
                });
            },
            [L]
          );
        if (null == L) return null;
        let O = (0, h.getChannelItemClassName)(o, S),
          y = (0, h.isChannelItemDisabled)(L, I, _),
          D = (0, l.jsx)("div", {
            className: i(O, { [E.disabled]: y, [E.selected]: x }),
            "data-dnd-name": L.name,
            children: (0, l.jsxs)(C.default, {
              className: E.iconVisibility,
              channel: L,
              guild: t,
              selected: x,
              onContextMenu: M,
              forceInteractable: !0,
              resolvedUnreadSetting: m.UnreadSetting.ONLY_MENTIONS,
              children: [
                (0, l.jsx)(h.ChannelItemInviteButton, {
                  channel: L,
                  tabIndex: A,
                }),
                (0, l.jsx)(h.ChannelItemEditButton, {
                  channel: L,
                  disableManageChannels: g,
                  tabIndex: A,
                }),
              ],
            }),
          });
        return R && (D = T(N(D))), D;
      });
      var I = g;
    },
    508176: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildBrowseChannelsRow: function () {
            return L;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("65597"),
        i = n("151426"),
        r = n("669491"),
        u = n("272030"),
        o = n("10641"),
        d = n("863636"),
        c = n("361776"),
        f = n("15684"),
        h = n("393414"),
        C = n("660478"),
        p = n("446685"),
        m = n("956089"),
        E = n("299039"),
        g = n("319839"),
        I = n("708402"),
        _ = n("49111"),
        S = n("724210"),
        N = n("133335"),
        T = n("782340"),
        A = n("303566");
      function L(e) {
        let { guild: t, selected: L } = e,
          v = (0, c.default)(t),
          x = (0, o.useIsDismissibleContentDismissed)(
            i.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX
          ),
          R = (0, s.useStateFromStoresArray)([f.default], () =>
            Array.from(f.default.getNewChannelIds(t.id)).filter(e =>
              f.default.shouldIndicateNewChannel(t.id, e)
            )
          ),
          M = (0, s.default)([C.default], () =>
            C.default.hasUnread(
              t.id,
              N.ReadStateTypes.GUILD_ONBOARDING_QUESTION
            )
          ),
          O = R.length > g.MAX_NEW_CHANNELS_TO_SHOW,
          y = (0, s.default)([d.default, C.default], () => {
            let e = d.default.lastFetchedAt(t.id),
              n = C.default.lastMessageId(
                t.id,
                N.ReadStateTypes.GUILD_ONBOARDING_QUESTION
              );
            if (null == n) return !1;
            let l = E.default.extractTimestamp(n);
            return null != e && e > l;
          }),
          D = a.useCallback(() => {
            (0, h.transitionTo)(
              _.Routes.CHANNEL(
                t.id,
                v
                  ? S.StaticChannelRoute.CUSTOMIZE_COMMUNITY
                  : S.StaticChannelRoute.CHANNEL_BROWSER
              )
            );
          }, [t.id, v]),
          b = a.useCallback(
            e => {
              (0, u.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("357763")
                  .then(n.bind(n, "357763"));
                return n => (0, l.jsx)(e, { ...n, guild: t });
              });
            },
            [t]
          ),
          j = null;
        return (
          (!x || M || O) &&
            !L &&
            !y &&
            (j = (0, l.jsx)(m.TextBadge, {
              color: r.default.unsafe_rawColors.BRAND_260.css,
              text: T.default.Messages.NEW,
              className: A.newChannel,
            })),
          (0, l.jsx)(I.default, {
            renderIcon: e => (0, l.jsx)(p.default, { className: e }),
            text: v
              ? T.default.Messages.CHANNELS_AND_ROLES
              : T.default.Messages.CHANNEL_BROWSER_TITLE,
            selected: L,
            onClick: D,
            onContextMenu: b,
            badge: j,
          })
        );
      }
    },
    637667: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("146606"),
        u = n("394846"),
        o = n("77078"),
        d = n("51565"),
        c = n("845579"),
        f = n("794352"),
        h = n("290581"),
        C = n("315102"),
        p = n("974755"),
        m = n("49111"),
        E = n("695838"),
        g = n("782340"),
        I = n("719890");
      function _(e) {
        var t;
        let { guild: n, controller: a, guildBanner: s, animate: o } = e,
          { value: d } = a.springs,
          f = c.GifAutoPlay.getSetting();
        return (0, l.jsx)(r.animated.div, {
          className: I.animatedContainer,
          style: {
            opacity: d,
            transform: d.to(e => "translateY(-".concat((1 - e) * 90, "px)")),
          },
          children: (0, l.jsx)(r.animated.div, {
            className: i(I.bannerImage, { [I.bannerImgFullWidth]: u.isMobile }),
            style: {
              transform: d.to(e =>
                f
                  ? "translateY("
                      .concat((1 - e) * 60, "px) scale(")
                      .concat(1 + (1 - e) * 0.2, ")")
                  : "translateY(".concat((1 - e) * 90, "px)")
              ),
            },
            children: (0, l.jsx)("img", {
              className: i(I.bannerImg, { [I.bannerImgFullWidth]: u.isMobile }),
              src:
                null !==
                  (t = C.default.getGuildBannerURL(
                    { id: n.id, banner: s },
                    o
                  )) && void 0 !== t
                  ? t
                  : "",
              alt: "",
              height: 135,
              width: 240,
              "aria-hidden": !0,
            }),
          }),
        });
      }
      function S(e) {
        let { guild: t, controller: n, hasBanner: a, hasSubheader: s } = e,
          { value: u } = n.springs,
          d = t.hasFeature(m.GuildFeatures.DISCOVERABLE),
          c = (0, l.jsx)("div", {
            className: I.communityInfo,
            children:
              d &&
              (0, l.jsx)(o.Tooltip, {
                text: g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                position: "right",
                children: e =>
                  (0, l.jsxs)("div", {
                    className: I.communityInfoPill,
                    ...e,
                    children: [
                      (0, l.jsx)(f.default, {
                        width: 12,
                        height: 12,
                        className: I.communityIcon,
                      }),
                      (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "none",
                        children:
                          g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC,
                      }),
                    ],
                  }),
              }),
          });
        return s
          ? (0, l.jsx)("div", {
              className: i(I.communityInfoContainer, I.hasSubheader),
              children: c,
            })
          : (0, l.jsx)(r.animated.div, {
              className: I.communityInfoContainer,
              style: a
                ? { opacity: u }
                : { height: u.to(e => "".concat(20 * e, "px")) },
              children: c,
            });
      }
      function N() {
        return (0, l.jsx)(h.default, {
          className: I.favoritesIcon,
          height: 20,
          width: 20,
        });
      }
      var T = a.memo(function (e) {
        var t;
        let {
            bannerVisible: n,
            controller: s,
            className: r,
            onClick: f,
            onContextMenu: h,
            onMouseDown: T,
            disableBannerAnimation: A,
            "aria-expanded": L,
            "aria-controls": v,
            guild: x,
            guildBanner: R,
            animationOverlayHeight: M,
            children: O,
            headerClassName: y,
            communityInfoVisible: D,
            hasSubheader: b,
          } = e,
          j = x.hasFeature(m.GuildFeatures.ANIMATED_BANNER),
          G = (0, d.default)(x),
          U = !G && x.hasCommunityInfoSubheader(),
          P = (0, C.isAnimatedIconHash)(R) && j && !A,
          [w, F] = a.useState(!1),
          B = a.useRef(),
          V = a.useRef(null),
          H = a.useRef(),
          k = c.GifAutoPlay.getSetting();
        a.useEffect(() => {
          if (P && n && !B.current && k)
            return (
              F(!0),
              (H.current = setTimeout(() => {
                F(!1);
              }, 5e3)),
              () => {
                clearTimeout(H.current);
              }
            );
        }, [P, n, k]),
          a.useEffect(() => {
            B.current = n;
          }, [n]);
        let Y = () => {
          let { renderBanner: t, guildBanner: n } = e;
          return null != n && !t;
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              ref: V,
              className: i(r, {
                [I.container]: !0,
                [I.clickable]: null != f,
                [I.selected]: null != f && L,
                [I.hasBanner]: Y(),
                [I.bannerVisible]: n,
                [I.communityInfoVisible]: (!G && D) || (b && U),
              }),
              onMouseDown: T,
              onContextMenu: h,
              onClick: f,
              children: [
                (0, l.jsxs)("header", {
                  className: i(I.header, y, {
                    [I.themedHeaderMobile]: u.isMobile,
                  }),
                  children: [
                    (0, l.jsxs)("div", {
                      className: i(I.headerContent, I.primaryInfo),
                      children: [
                        (0, l.jsx)(p.default, { guild: x, isBannerVisible: n }),
                        x.id === E.FAVORITES_RAW_GUILD_ID && (0, l.jsx)(N, {}),
                        (0, l.jsx)(o.Text, {
                          color: "none",
                          variant: "text-md/semibold",
                          lineClamp: 1,
                          className: I.name,
                          children: x.toString(),
                        }),
                        null != f &&
                          (0, l.jsx)(o.Clickable, {
                            className: I.headerButton,
                            "aria-controls": v,
                            "aria-expanded": L,
                            focusProps: { ringTarget: V, offset: 4 },
                            onClick: f,
                            onContextMenu: h,
                            "aria-label":
                              g.default.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format(
                                {
                                  guildName:
                                    null !==
                                      (t = null == x ? void 0 : x.toString()) &&
                                    void 0 !== t
                                      ? t
                                      : "",
                                }
                              ),
                          }),
                        (0, l.jsx)("div", {
                          className: I.headerChildren,
                          children: O,
                        }),
                      ],
                    }),
                    U &&
                      (0, l.jsx)(S, {
                        guild: x,
                        controller: s,
                        hasBanner: null != R,
                        hasSubheader: null != b && b,
                      }),
                  ],
                }),
                null != R
                  ? (0, l.jsx)(_, {
                      guild: x,
                      controller: s,
                      guildBanner: R,
                      animate: w,
                    })
                  : null,
              ],
            }),
            P && Y()
              ? (0, l.jsx)("div", {
                  className: I.animatedBannerHoverLayer,
                  onMouseEnter: () => {
                    F(!0), clearTimeout(H.current);
                  },
                  onMouseLeave: () => F(!1),
                  style: { height: M },
                })
              : null,
          ],
        });
      });
    },
    522342: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("974667"),
        i = n("446674"),
        r = n("450911"),
        u = n("677315"),
        o = n("827298"),
        d = n("290886"),
        c = n("393414"),
        f = n("660478"),
        h = n("223383"),
        C = n("620193"),
        p = n("708402"),
        m = n("49111"),
        E = n("724210"),
        g = n("133335"),
        I = n("782340");
      function _(e) {
        let { guild: t, selected: n } = e,
          _ = (0, s.useListItem)("home-tab-".concat(t.id)),
          { showBadge: S } = u.GuildHomeBadgeExperiment.useExperiment(
            { location: "487e85_1" },
            { autoTrackExposure: !1 }
          );
        a.useEffect(() => {
          u.GuildHomeBadgeExperiment.trackExposure({ location: "487e85_2" });
        }, []);
        let N = (0, d.useCanSeeOnboardingHome)(t.id),
          T = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.hasUnread(t.id, g.ReadStateTypes.GUILD_HOME) && S,
            [t.id, S]
          );
        return (0, l.jsx)(p.default, {
          ..._,
          renderIcon: e =>
            N
              ? (0, l.jsx)(C.default, { className: e })
              : (0, l.jsx)(h.default, { className: e }),
          text: N
            ? I.default.Messages.SERVER_GUIDE
            : I.default.Messages.GUILD_HOME,
          showUnread: T,
          selected: n,
          onMouseDown: function () {
            r.default.preload(t.id, E.StaticChannelRoute.GUILD_HOME);
          },
          onClick: function () {
            (0, o.ackGuildHome)(t.id),
              (0, c.transitionTo)(
                m.Routes.CHANNEL(t.id, E.StaticChannelRoute.GUILD_HOME)
              );
          },
        });
      }
    },
    738552: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("393414"),
        s = n("922577"),
        i = n("708402"),
        r = n("49111"),
        u = n("724210"),
        o = n("782340");
      function d(e) {
        let { guild: t, selected: n } = e;
        return (0, l.jsx)(i.default, {
          renderIcon: e =>
            (0, l.jsx)(s.default, { className: e, width: 24, height: 24 }),
          text: o.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
          selected: n,
          onClick: () => {
            (0, a.transitionTo)(
              r.Routes.CHANNEL(t.id, u.StaticChannelRoute.MEMBER_APPLICATIONS)
            );
          },
        });
      }
    },
    630062: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildNewMemberActionsProgressBar: function () {
            return E;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("449918"),
        u = n("698882"),
        o = n("675305"),
        d = n("393414"),
        c = n("461380"),
        f = n("49111"),
        h = n("724210"),
        C = n("782340"),
        p = n("720045");
      function m(e, t) {
        return (0, l.jsx)(
          i.Text,
          { variant: "text-xs/bold", color: "text-normal", children: e },
          t
        );
      }
      let E = a.memo(function (e) {
        let { guild: t } = e,
          n = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.getNewMemberActions(t.id),
            [t.id]
          ),
          E = (0, s.useStateFromStores)([o.default], () =>
            o.default.getCompletedActions(t.id)
          ),
          g = a.useMemo(() => {
            if (null == n || null == E) return 0;
            let e = 0;
            return (
              n.forEach(t => {
                null != E[t.channelId] && e++;
              }),
              e
            );
          }, [E, n]),
          I = null == n ? 0 : n.length;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.Clickable, {
              className: p.progressBarContainer,
              onClick: function () {
                (0, d.transitionTo)(
                  f.Routes.CHANNEL(t.id, h.StaticChannelRoute.GUILD_HOME)
                );
              },
              children: [
                (0, l.jsxs)("div", {
                  className: p.progressBarText,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      variant: "heading-sm/bold",
                      children:
                        C.default.Messages
                          .GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED,
                    }),
                    (0, l.jsxs)("div", {
                      className: p.rightContainer,
                      children: [
                        (0, l.jsx)(i.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          className: p.rightText,
                          children:
                            C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format(
                              {
                                numberHook: m,
                                total: I.toString(),
                                completed: g.toString(),
                              }
                            ),
                        }),
                        (0, l.jsx)(c.default, {
                          className: p.arrow,
                          width: 16,
                          height: 16,
                          direction: c.default.Directions.RIGHT,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(i.Progress, {
                  className: p.progressBar,
                  foregroundGradientColor: [
                    (0, r.getColor)(f.Color.GREEN_300),
                    (0, r.getColor)(f.Color.GREEN_230),
                  ],
                  percent: (g / I) * 100 + 3,
                  animate: !0,
                }),
              ],
            }),
            (0, l.jsx)("div", { role: "separator", className: p.divider }),
          ],
        });
      });
    },
    873774: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("272030"),
        s = n("459736"),
        i = n("393414"),
        r = n("708402"),
        u = n("49111"),
        o = n("724210"),
        d = n("782340");
      function c(e) {
        let { guild: t, selected: c } = e;
        return (0, l.jsx)(r.default, {
          renderIcon: e => (0, l.jsx)(s.default, { className: e }),
          text: d.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          selected: c,
          onClick: () => {
            (0, i.transitionTo)(
              u.Routes.CHANNEL(t.id, o.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
            );
          },
          onContextMenu: e => {
            null != t &&
              (0, a.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("867195")
                  .then(n.bind(n, "867195"));
                return n => (0, l.jsx)(e, { ...n, guild: t });
              });
          },
        });
      }
    },
    677777: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("65597"),
        r = n("151426"),
        u = n("95410"),
        o = n("77078"),
        d = n("272030"),
        c = n("206230"),
        f = n("716241"),
        h = n("183137"),
        C = n("551254"),
        p = n("991148"),
        m = n("907038"),
        E = n("10641"),
        g = n("393414"),
        I = n("923959"),
        _ = n("305961"),
        S = n("381546"),
        N = n("956089"),
        T = n("599110"),
        A = n("708402"),
        L = n("49111"),
        v = n("724210"),
        x = n("500307"),
        R = n("782340"),
        M = n("894048");
      function O(e) {
        let { guildId: t, selected: n, handleClick: a } = e,
          d = (0, C.useIsEligibleForSubscriptionsInGuildShop)(
            t,
            "guild_shop_channel_row"
          ),
          p = (0, i.default)([_.default], () => _.default.getGuild(t)),
          A =
            (null == p
              ? void 0
              : p.hasFeature(
                  L.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE
                )) === !0,
          v =
            "false" === u.default.get(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "false"),
          O = (0, i.default)([c.default], () => c.default.useReducedMotion);
        return (0, l.jsx)(o.ClickableContainer, {
          tag: "div",
          onClick: a,
          className: s(M.previewChannelRow, {
            [M.selected]: n,
            [M.phantomPreview]: v,
          }),
          "aria-label": R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
          children: (0, l.jsxs)("div", {
            className: M.previewChannelRowContent,
            children: [
              (0, l.jsx)(m.default, { className: M.shopIcon }),
              (0, l.jsx)("div", {
                className: M.channelLabel,
                children: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
              }),
              (0, l.jsxs)("div", {
                className: M.gifSection,
                children: [
                  O
                    ? (0, l.jsx)(N.TextBadge, {
                        color: o.tokens.unsafe_rawColors.BRAND_260.css,
                        text: R.default.Messages.NEW,
                        className: M.newBadge,
                      })
                    : (0, l.jsx)("img", {
                        src: (0, h.getAssetCDNUrl)(
                          "server_products/storefront/money.gif"
                        ),
                        className: M.money,
                        alt: "",
                      }),
                  n &&
                    (0, l.jsx)(o.Clickable, {
                      className: M.closeButton,
                      onClick: e => {
                        if (
                          (e.stopPropagation(),
                          (0, E.markDismissibleContentAsDismissed)(
                            r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW
                          ),
                          T.default.track(
                            L.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK,
                            {
                              ...(0, f.collectGuildAnalyticsMetadata)(t),
                              action_taken:
                                x.GuildShopPreviewClickActions
                                  .DISMISS_CHANNEL_ROW,
                            }
                          ),
                          !d || !A)
                        ) {
                          var n;
                          (0, g.replaceWith)(
                            L.Routes.CHANNEL(
                              t,
                              null === (n = I.default.getDefaultChannel(t)) ||
                                void 0 === n
                                ? void 0
                                : n.id
                            )
                          );
                        }
                      },
                      "aria-label": R.default.Messages.DISMISS,
                      children: (0, l.jsx)(S.default, {
                        width: 16,
                        height: 16,
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      function y(e) {
        let { guild: t, selected: a } = e,
          s = (0, p.useGuildShopPreviewVisible)(t, "guild_shop_channel_row"),
          i = () => {
            u.default.set(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "true"),
              (0, g.transitionTo)(
                L.Routes.CHANNEL(t.id, v.StaticChannelRoute.GUILD_SHOP)
              );
          };
        return s
          ? (0, l.jsx)(O, { guildId: t.id, selected: a, handleClick: i })
          : (0, l.jsx)(A.default, {
              renderIcon: e =>
                (0, l.jsx)(m.default, { width: 20, height: 20, className: e }),
              text: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
              selected: a,
              onClick: i,
              onContextMenu: e => {
                null != t &&
                  (0, d.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("367289")
                      .then(n.bind(n, "367289"));
                    return n => (0, l.jsx)(e, { ...n, guild: t });
                  });
              },
            });
      }
    },
    579095: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("42203"),
        o = n("316133"),
        d = n("449008"),
        c = n("120969"),
        f = n("782340"),
        h = n("501152"),
        C = a.memo(function (e) {
          let {
              channel: t,
              selectedChannel: n,
              selectedVoiceChannelId: a,
              sortedThreadIds: s,
              withGuildIcon: C,
            } = e,
            p = (0, r.useStateFromStoresArray)(
              [u.default],
              () => s.map(e => u.default.getChannel(e)).filter(d.isNotNullish),
              [s]
            ),
            m = (0, r.useStateFromStores)([o.default], () => {
              let e = p[p.length - 1];
              if (null == e) return 0;
              let t = o.default.getVoiceStates(e.guild_id)[e.id];
              return null == t || 0 === t.length
                ? 0
                : a !== e.id
                  ? 40
                  : 32 * t.length + 8;
            });
          return (0, l.jsx)("li", {
            className: h.container,
            children: (0, l.jsxs)("ul", {
              role: "group",
              "aria-label": f.default.Messages.THREAD_GROUP_A11Y_LABEL.format({
                channelName: t.name,
              }),
              children: [
                (0, l.jsx)("div", {
                  className: i(h.spineBorder, {
                    [h.spineBorderWithGuildIcon]: C,
                  }),
                  style: { bottom: 24 + m },
                }),
                p.map((e, t) =>
                  (0, l.jsx)(
                    c.default,
                    {
                      thread: e,
                      isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                      isSelectedVoice: a === e.id,
                      isLast: t === p.length - 1,
                      withGuildIcon: C,
                    },
                    e.id
                  )
                ),
              ],
            }),
          });
        });
    },
    120969: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("974667"),
        u = n("446674"),
        o = n("77078"),
        d = n("450911"),
        c = n("272030"),
        f = n("755624"),
        h = n("967241"),
        C = n("42203"),
        p = n("660478"),
        m = n("800762"),
        E = n("316133"),
        g = n("98292"),
        I = n("973539"),
        _ = n("137376"),
        S = n("522052"),
        N = n("884155"),
        T = n("49111"),
        A = n("648564"),
        L = n("782340"),
        v = n("65369"),
        x = n("39776"),
        R = n("501152");
      function M(e) {
        let { style: t, withGuildIcon: n } = e;
        return (0, l.jsx)("svg", {
          className: i(R.spine, { [R.spineWithGuildIcon]: n }),
          width: "12",
          height: "11",
          viewBox: "0 0 12 11",
          fill: "none",
          "aria-hidden": !0,
          style: t,
          children: (0, l.jsx)("path", {
            d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
            fill: "currentColor",
          }),
        });
      }
      var O = a.memo(function (e) {
        let {
            thread: t,
            isSelectedChannel: s,
            isSelectedVoice: R,
            isLast: O,
            withGuildIcon: y,
          } = e,
          D = (0, u.useStateFromStores)(
            [E.default],
            () => E.default.getVoiceStatesForChannel(t),
            [t]
          ),
          b = (0, u.useStateFromStores)([m.default], () =>
            m.default.hasVideo(t.id)
          ),
          { unread: j, mentionCount: G } = (0, u.useStateFromStoresObject)(
            [p.default],
            () => ({
              unread: p.default.hasUnread(t.id),
              mentionCount: p.default.getMentionCount(t.id),
            })
          ),
          U = (0, u.useStateFromStores)([f.default], () =>
            f.default.isMuted(t.id)
          ),
          P = a.useCallback(
            e => {
              (0, h.openThreadSidebarForViewing)(
                t,
                !e.shiftKey,
                A.OpenThreadAnalyticsLocations.CHANNEL_LIST
              );
            },
            [t]
          ),
          w = a.useCallback(() => {
            d.default.preload(t.guild_id, t.id);
          }, [t.guild_id, t.id]),
          F = a.useCallback(
            e => {
              let a = C.default.getChannel(t.id);
              null != a &&
                (0, c.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("994827")
                    .then(n.bind(n, "994827"));
                  return t => (0, l.jsx)(e, { ...t, channel: a });
                });
            },
            [t.id]
          ),
          B = null == D ? 0 : D.length,
          { role: V, ...H } = (0, r.useListItem)(t.id),
          k = a.useRef(null),
          Y =
            G > 0
              ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format(
                  { channelName: t.name, mentionCount: G }
                )
              : j
                ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format(
                    { channelName: t.name }
                  )
                : L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
                    channelName: t.name,
                  });
        return (0, l.jsxs)("li", {
          role: V,
          className: i(v.containerDefault, { [v.selected]: s }),
          children: [
            (0, l.jsx)(M, { withGuildIcon: y }),
            O
              ? null
              : (0, l.jsx)(M, {
                  withGuildIcon: y,
                  style: { transform: "rotateX(180deg) translateY(-9px)" },
                }),
            (0, l.jsx)(o.FocusRing, {
              focusTarget: k,
              ringTarget: k,
              offset: { top: 2, bottom: 2, right: 4 },
              children: (0, l.jsxs)("div", {
                className: i(v.iconVisibility, x.wrapper, x.typeThread, {
                  [x.modeSelected]: s,
                  [x.modeMuted]: !s && U,
                  [x.modeUnreadImportant]: !U && !s && j,
                  [x.withGuildIcon]: y,
                }),
                onMouseDown: w,
                onContextMenu: F,
                children: [
                  !j || U || s
                    ? null
                    : (0, l.jsx)("div", {
                        className: i(x.unread, x.unreadImportant),
                      }),
                  (0, l.jsx)(o.Clickable, {
                    ...H,
                    innerRef: k,
                    className: x.link,
                    onClick: P,
                    "aria-label": Y,
                    focusProps: { enabled: !1 },
                    children: (0, l.jsxs)("div", {
                      className: i(x.linkTop, x.threadMainContent),
                      children: [
                        (0, l.jsx)(g.default, {
                          className: x.name,
                          "aria-hidden": !0,
                          children: t.name,
                        }),
                        (0, l.jsxs)("div", {
                          className: x.children,
                          children: [
                            B > 0 && t.userLimit > 0
                              ? (0, l.jsx)(_.default, {
                                  userCount: B,
                                  video: b,
                                  channel: t,
                                })
                              : null,
                            (0, I.default)(G)
                              ? (0, l.jsx)(S.default, { mentionsCount: G })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)(N.default, {
              channel: t,
              collapsed: !R,
              collapsedMax: 6,
              voiceStates: D,
              location: T.AnalyticsLocations.GUILD_CHANNEL_LIST,
            }),
          ],
        });
      });
    },
    522052: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("171210"),
        s = n("956089"),
        i = n("170790");
      function r(e) {
        let { mentionsCount: t } = e;
        return (0, l.jsx)("div", {
          className: i.mentionsBadge,
          "aria-hidden": !0,
          children: (0, l.jsx)(s.NumberBadge, {
            count: t,
            color: a.default.STATUS_DANGER,
          }),
        });
      }
    },
    333896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return W;
          },
        }),
        n("222007"),
        n("70102");
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("446674"),
        r = n("77078"),
        u = n("255397"),
        o = n("272030"),
        d = n("667771"),
        c = n("650912"),
        f = n("139375"),
        h = n("233322"),
        C = n("157186"),
        p = n("848848"),
        m = n("106346"),
        E = n("144491"),
        g = n("716214"),
        I = n("567469"),
        _ = n("998716"),
        S = n("834052"),
        N = n("819450"),
        T = n("886776"),
        A = n("870691"),
        L = n("42203"),
        v = n("305961"),
        x = n("88093"),
        R = n("957255"),
        M = n("660478"),
        O = n("282109"),
        y = n("800762"),
        D = n("98292"),
        b = n("109264"),
        j = n("404008"),
        G = n("783735"),
        U = n("39347"),
        P = n("41594"),
        w = n("884155"),
        F = n("49111"),
        B = n("695838"),
        V = n("782340"),
        H = n("65369"),
        k = n("6426");
      class Y extends G.default {
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, j.isChannelFull)(e, y.default, v.default);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return H.containerUserOver;
          if (null != t)
            return e > t ? H.containerDragAfter : H.containerDragBefore;
          return H.containerDefault;
        }
        renderVoiceUsers() {
          let {
            channel: e,
            collapsed: t,
            tabIndex: n,
            speakerVoiceStates: a,
            numAudience: s,
          } = this.props;
          return (0, l.jsx)(w.default, {
            channel: e,
            voiceStates: a,
            collapsed: t,
            tabIndex: n,
            location: F.AnalyticsLocations.GUILD_CHANNEL_LIST,
            numAudience: s,
          });
        }
        renderChannelInfo() {
          return this.props.channelInfo;
        }
        render() {
          let {
              channel: e,
              selected: t,
              connected: n,
              locked: a,
              connectChannelDropTarget: i,
              connectChannelDragSource: u,
              connectUserDropTarget: o,
              connectDragPreview: d,
              canReorderChannel: c,
              canMoveMembers: h,
              stageInstance: C,
              isSubscriptionGated: p,
              needSubscriptionToAccess: m,
              unread: E,
              resolvedUnreadSetting: g,
              mentionCount: I,
              isFavoriteSuggestion: _,
            } = this.props,
            { shouldShowGuildVerificationPopout: S } = this.state,
            N = this.getVoiceStatesCount(),
            T = (0, l.jsxs)("li", {
              className: s(this.getModeClass(), {
                [H.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, l.jsx)(r.Popout, {
                  position: "right",
                  renderPopout: this.renderPopout,
                  spacing: 0,
                  onRequestClose: this.closeGuildVerificationPopout,
                  shouldShow: S,
                  children: () =>
                    (0, l.jsx)(r.Tooltip, {
                      text: this.getTooltipText(),
                      children: i => {
                        let { onClick: r, onContextMenu: u, ...o } = i;
                        return (0, l.jsxs)(P.default, {
                          className: H.iconVisibility,
                          iconClassName: s({ [k.iconLive]: null != C }),
                          channel: e,
                          selected: !_ && t,
                          connected: n,
                          unread: n ? E : void 0,
                          resolvedUnreadSetting: g,
                          mentionCount: I,
                          locked: a,
                          onClick: () => {
                            this.handleClick(), null == r || r();
                          },
                          onContextMenu: e => {
                            this.handleContextMenu(e), null == u || u();
                          },
                          connectDragPreview: d,
                          subtitle: this.renderSubtitle(),
                          isFavoriteSuggestion: _,
                          "aria-label": (0, f.default)({
                            channel: e,
                            unread: E,
                            mentionCount: I,
                            userCount: N,
                            isSubscriptionGated: p,
                            needSubscriptionToAccess: m,
                          }),
                          ...o,
                          children: [
                            _ && this.renderAcceptSuggestionButton(),
                            _ && this.renderRemoveSuggestionButton(),
                            !_ && this.renderOpenChatButton(),
                            !_ && this.renderInviteButton(),
                            !_ && this.renderEditButton(),
                            !_ && this.renderChannelInfo(),
                          ],
                        });
                      },
                    }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return h && (T = o(T)), c && (T = i(u(T))), T;
        }
        constructor(...e) {
          super(...e),
            (this.state = { shouldShowGuildVerificationPopout: !1 }),
            (this.closeGuildVerificationPopout = () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            (this.handleClick = () => {
              let {
                  channel: e,
                  locked: t,
                  connected: n,
                  unverifiedAccount: l,
                } = this.props,
                a = e.getGuildId();
              null != a &&
                (0, C.shouldShowMembershipVerificationGate)(a) &&
                (0, h.openMemberVerificationModal)(a),
                l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                !t &&
                  !n &&
                  !e.isRoleSubscriptionTemplatePreviewChannel() &&
                  (0, g.connectAndOpen)(e),
                !__OVERLAY__ && (0, E.transitionToChannel)(e.id);
            }),
            (this.handleClickChat = () => {
              let { channel: e, locked: t } = this.props;
              !__OVERLAY__ && !t && (0, E.transitionToChannel)(e.id);
            }),
            (this.handleContextMenu = e => {
              let { channel: t } = this.props,
                a = v.default.getGuild(t.getGuildId());
              null != a &&
                (0, o.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("168003")
                    .then(n.bind(n, "168003"));
                  return n => (0, l.jsx)(e, { ...n, channel: t, guild: a });
                });
            }),
            (this.renderPopout = () => {
              let { channel: e } = this.props,
                { shouldShowGuildVerificationPopout: t } = this.state;
              if (t)
                return (0, l.jsx)(m.default, {
                  type: m.GuildVerificationPopoutTypes.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render"
              );
            }),
            (this.renderOpenChatButton = () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, l.jsx)(r.Tooltip, {
                  text: V.default.Messages.OPEN_CHAT,
                  children: t => {
                    let {
                      onMouseEnter: a,
                      onMouseLeave: i,
                      onFocus: o,
                      onBlur: d,
                    } = t;
                    return (0, l.jsx)(r.Clickable, {
                      className: s(H.iconItem, n ? H.alwaysShown : null),
                      onClick: () => {
                        u.default.updateChatOpen(e.id, !0),
                          this.handleClickChat();
                      },
                      "aria-label": V.default.Messages.OPEN_CHAT,
                      onMouseEnter: a,
                      onMouseLeave: i,
                      onFocus: o,
                      onBlur: d,
                      children: (0, l.jsx)(b.default, {
                        width: 16,
                        height: 16,
                        className: H.actionIcon,
                      }),
                    });
                  },
                });
            }),
            (this.getTooltipText = () => {
              let { connected: e } = this.props;
              return this.isFull() && !e
                ? V.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
                : null;
            }),
            (this.renderSubtitle = () => {
              var e;
              let t =
                null === (e = this.props.stageInstance) || void 0 === e
                  ? void 0
                  : e.topic;
              return null == t ? null : (0, l.jsx)(D.default, { children: t });
            });
        }
      }
      let K = (0, d.makeChannelSortable)((0, c.makeVoiceUserDroppable)(Y));
      function W(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: a,
            isFavoriteCategory: s,
            collapsed: r,
            voiceStates: u,
          } = e,
          o = (0, i.useStateFromStoresObject)([M.default], () => ({
            unread: M.default.hasUnread(n.id),
            mentionCount: M.default.getMentionCount(n.id),
          })),
          d = (0, i.useStateFromStores)([O.default], () =>
            O.default.resolveUnreadSetting(n)
          ),
          c = (0, i.useStateFromStoresObject)(
            [L.default, x.default, R.default],
            () => {
              let e = L.default.getChannel(n.parent_id),
                l = x.default.getCheck(n.guild_id);
              return {
                canManageChannel:
                  null != t && R.default.can(F.Permissions.MANAGE_CHANNELS, n),
                canReorderChannel:
                  !0 !== a &&
                  (t.id === B.FAVORITES_RAW_GUILD_ID ||
                    (null != e
                      ? R.default.can(F.Permissions.MANAGE_CHANNELS, e)
                      : R.default.can(F.Permissions.MANAGE_CHANNELS, t))),
                canMoveMembers: R.default.can(F.Permissions.MOVE_MEMBERS, n),
                locked: !R.default.can(F.Permissions.CONNECT, n),
                bypassLimit: R.default.can(F.Permissions.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
              };
            }
          ),
          f = (0, i.useStateFromStores)([A.default], () =>
            A.default.isCollapsed(n.parent_id)
          ),
          h = (0, T.default)(n.id),
          C = (0, i.useStateFromStores)(
            [S.default],
            () => S.default.getStageInstanceByChannel(n.id),
            [n.id]
          ),
          m = (0, I.useStageParticipantsCount)(
            n.id,
            _.StageChannelParticipantNamedIndex.AUDIENCE
          ),
          { isSubscriptionGated: E, needSubscriptionToAccess: g } = (0,
          p.default)(n.id),
          v = (0, i.useStateFromStores)([O.default], () =>
            O.default.isFavorite(t.id, n.id)
          ),
          y = (0, N.getStageHasMedia)(n.id),
          D = (0, U.default)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: r,
            voiceStates: u,
            isSubscriptionGated: E,
            needSubscriptionToAccess: g,
            enableConnectedUserLimit:
              y ||
              (n.userLimit > 0 && n.userLimit < F.MAX_STAGE_VOICE_USER_LIMIT),
          }),
          b = e.connected && null == D;
        return (0, l.jsx)(K, {
          categoryCollapsed: f,
          connectAction: h,
          numAudience: m,
          stageInstance: C,
          isSubscriptionGated: E,
          needSubscriptionToAccess: g,
          ...o,
          ...c,
          ...e,
          isFavoriteSuggestion: s && !v,
          forceShowButtons: b,
          channelInfo: D,
          resolvedUnreadSetting: d,
        });
      }
    },
    446380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("450911"),
        o = n("272030"),
        d = n("667771"),
        c = n("139375"),
        f = n("393414"),
        h = n("42203"),
        C = n("305961"),
        p = n("957255"),
        m = n("783735"),
        E = n("41594"),
        g = n("49111"),
        I = n("133335"),
        _ = n("65369");
      function S(e, t) {
        let n = t.getGuildId();
        if (null == n)
          throw Error(
            "TextChannel, preloadChannel: Channel does not have a guildId"
          );
        u.default.preload(n, t.id);
      }
      class N extends m.default {
        render() {
          let {
              channel: e,
              selected: t,
              connectChannelDropTarget: n,
              connectChannelDragSource: a,
              connectDragPreview: s,
              canReorderChannel: r,
            } = this.props,
            u = (0, l.jsx)("li", {
              className: i(this.getClassName(), {
                [_.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: (0, l.jsxs)(E.default, {
                className: _.iconVisibility,
                channel: e,
                selected: t,
                onClick: this.handleClick,
                onMouseDown: S,
                onContextMenu: this.handleContextMenu,
                connectDragPreview: r ? s : null,
                "aria-label": (0, c.default)({ channel: e }),
                resolvedUnreadSetting: I.UnreadSetting.ONLY_MENTIONS,
                children: [this.renderInviteButton(), this.renderEditButton()],
              }),
            });
          return r ? n(a(u)) : u;
        }
        constructor(...e) {
          super(...e),
            (this.handleContextMenu = e => {
              let { channel: t } = this.props,
                a = C.default.getGuild(t.getGuildId());
              null != a &&
                (0, o.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("599943")
                    .then(n.bind(n, "599943"));
                  return n => (0, l.jsx)(e, { ...n, channel: t, guild: a });
                });
            }),
            (this.handleClick = e => {
              !(function (e) {
                let t = e.getGuildId();
                if (null == t)
                  throw Error(
                    "TextChannel, transitionTo: Channel does not have a guildId"
                  );
                (0, f.transitionTo)(g.Routes.CHANNEL(t, e.id), {
                  state: {
                    analyticsSource: {
                      page: g.AnalyticsPages.GUILD_CHANNEL,
                      section: g.AnalyticsSections.CHANNEL_LIST,
                      object: g.AnalyticsObjects.CHANNEL,
                    },
                  },
                });
              })(e);
            });
        }
      }
      let T = (0, d.makeChannelSortable)(N);
      var A = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: a } = e,
          s = (0, r.useStateFromStoresObject)([h.default, p.default], () => {
            let e = h.default.getChannel(t.parent_id);
            return {
              canManageChannel: p.default.can(g.Permissions.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== a && null != e
                  ? p.default.can(g.Permissions.MANAGE_CHANNELS, e)
                  : p.default.can(g.Permissions.MANAGE_CHANNELS, n),
            };
          });
        return (0, l.jsx)(T, { ...s, ...e });
      });
    },
    919429: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("446674"),
        r = n("77078"),
        u = n("450911"),
        o = n("272030"),
        d = n("667771"),
        c = n("427953"),
        f = n("575136"),
        h = n("139375"),
        C = n("557661"),
        p = n("848848"),
        m = n("15684"),
        E = n("300322"),
        g = n("42203"),
        I = n("305961"),
        _ = n("957255"),
        S = n("660478"),
        N = n("282109"),
        T = n("697218"),
        A = n("79234"),
        L = n("783735"),
        v = n("39347"),
        x = n("41594"),
        R = n("262141"),
        M = n("49111"),
        O = n("695838"),
        y = n("65369");
      class D extends L.default {
        componentWillUnmount() {
          this.resetTextChannelPopoutTimers();
        }
        resetTextChannelPopoutTimers() {
          clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, l.jsx)("div", { className: y.channelInfo, children: e });
        }
        render() {
          let {
              channel: e,
              guild: t,
              selected: n,
              muted: a,
              unread: i,
              hasActiveThreads: u,
              hasMoreActiveThreads: o,
              mentionCount: d,
              connectChannelDropTarget: c,
              connectChannelDragSource: f,
              connectDragPreview: p,
              canReorderChannel: m,
              isSubscriptionGated: E,
              isFavoriteSuggestion: g,
              subtitle: I,
              forceTopLevelThread: _,
              embeddedApps: S,
              resolvedUnreadSetting: N,
              withGuildIcon: T,
              enableActivities: A,
            } = this.props,
            L = A && null != S && S.length > 0,
            v = (0, C.getChannelSubtitle)(I),
            R = (0, l.jsx)("li", {
              className: s(this.getClassName(), {
                [y.disabled]: this.isDisabled(),
                [y.selected]: n,
              }),
              "data-dnd-name": e.name,
              onMouseEnter: o || L ? this.handleMouseEnter : void 0,
              onMouseLeave: o || L ? this.handleMouseLeave : void 0,
              children: (0, l.jsx)(r.Popout, {
                position: "right",
                renderPopout: this.renderPopout,
                spacing: 0,
                onRequestClose: this.handleClosePopout,
                shouldShow:
                  (o && this.state.shouldShowThreadsPopout) ||
                  (L && this.state.shouldShowActivities),
                children: () =>
                  (0, l.jsxs)(x.default, {
                    className: y.iconVisibility,
                    channel: e,
                    guild: t,
                    selected: !g && n,
                    muted: a,
                    unread: i,
                    mentionCount: d,
                    hasActiveThreads: u,
                    subtitle: null == v ? void 0 : v.subtitle,
                    subtitleColor: null == v ? void 0 : v.color,
                    onMouseDown: this.handleMouseDown,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: m ? p : null,
                    isFavoriteSuggestion: g,
                    channelTypeOverride: _ ? M.ChannelTypes.GUILD_TEXT : void 0,
                    resolvedUnreadSetting: N,
                    withGuildIcon: T,
                    "aria-label": (0, h.default)({
                      channel: e,
                      unread: i,
                      mentionCount: d,
                      isSubscriptionGated: E,
                    }),
                    children: [
                      g && this.renderAcceptSuggestionButton(),
                      g && this.renderRemoveSuggestionButton(),
                      !g && this.renderInviteButton(),
                      !g && this.renderEditButton(),
                      !g && this.renderChannelInfo(),
                    ],
                  }),
              }),
            });
          return m ? c(f(R)) : R;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              shouldShowThreadsPopout: !1,
              shouldShowActivities: !1,
            }),
            (this.enterTimer = 0),
            (this.exitTimer = 0),
            (this.handleMouseEnter = () => {
              (this.props.canShowThreadPreviewForUser ||
                null != this.props.embeddedApps) &&
                (this.resetTextChannelPopoutTimers(),
                (this.enterTimer = setTimeout(() => {
                  null != this.props.embeddedApps &&
                  this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.canShowThreadPreviewForUser &&
                      this.setState({ shouldShowThreadsPopout: !0 });
                }, 200)));
            }),
            (this.handleMouseLeave = () => {
              this.resetTextChannelPopoutTimers(),
                (this.exitTimer = setTimeout(() => {
                  this.state.shouldShowActivities &&
                    this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout &&
                      this.setState({ shouldShowThreadsPopout: !1 });
                }, 250));
            }),
            (this.handleThreadsPopoutClose = () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowThreadsPopout: !1 });
            }),
            (this.handleActivitiesPopoutClose = () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowActivities: !1 });
            }),
            (this.handleClosePopout = () => {
              this.state.shouldShowActivities &&
                this.handleActivitiesPopoutClose(),
                this.state.shouldShowThreadsPopout &&
                  this.handleThreadsPopoutClose();
            }),
            (this.handleMouseDown = () => {
              this.handleActivitiesPopoutClose(),
                this.handleThreadsPopoutClose();
              let { channel: e } = this.props,
                t = e.getGuildId();
              u.default.preload(null != t ? t : M.ME, e.id);
            }),
            (this.renderPopout = e => {
              let { channel: t, sorting: n, embeddedApps: a } = this.props,
                { shouldShowActivities: s } = this.state;
              return null != a && a.length > 0 && s && !n
                ? (0, l.jsx)(R.default, {
                    onAction: this.handleActivitiesPopoutClose,
                    channel: t,
                  })
                : (0, l.jsx)(A.default, { ...e, channel: this.props.channel });
            }),
            (this.handleContextMenu = e => {
              let { channel: t } = this.props;
              if (t.type === M.ChannelTypes.GROUP_DM) {
                (0, o.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("493015")
                    .then(n.bind(n, "493015"));
                  return n => (0, l.jsx)(e, { ...n, channel: t, selected: !0 });
                });
                return;
              }
              if (t.type === M.ChannelTypes.DM) {
                let a = T.default.getUser(t.getRecipientId());
                null != a &&
                  (0, o.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("130074")
                      .then(n.bind(n, "130074"));
                    return n =>
                      (0, l.jsx)(e, {
                        ...n,
                        user: a,
                        channel: t,
                        showModalItems: !1,
                      });
                  });
                return;
              }
              let a = I.default.getGuild(t.getGuildId());
              null != a &&
                (0, o.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("327241")
                    .then(n.bind(n, "327241"));
                  return n => (0, l.jsx)(e, { ...n, channel: t, guild: a });
                });
            });
        }
      }
      let b = (0, d.makeChannelSortable)(D);
      function j(e) {
        let {
            channel: t,
            guild: n,
            disableSorting: a,
            isFavoriteCategory: s,
            muted: r,
            selected: u,
          } = e,
          { hasActiveThreads: o, hasMoreActiveThreads: d } = (0,
          E.useHasActiveThreads)(t),
          h = (0, i.useStateFromStoresObject)([S.default], () => ({
            unread: S.default.hasUnread(t.id),
            ackMessageId: S.default.ackMessageId(t.id),
            mentionCount: S.default.getMentionCount(t.id),
          })),
          C = (0, i.useStateFromStores)([N.default], () =>
            N.default.resolveUnreadSetting(t)
          ),
          I = (0, i.useStateFromStoresObject)([g.default, _.default], () => {
            let e = g.default.getChannel(t.parent_id);
            return {
              canManageChannel: _.default.can(M.Permissions.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== a &&
                (n.id === O.FAVORITES_RAW_GUILD_ID ||
                  (null != e
                    ? _.default.can(M.Permissions.MANAGE_CHANNELS, e)
                    : _.default.can(M.Permissions.MANAGE_CHANNELS, n))),
            };
          }),
          A = (0, i.useStateFromStores)([m.default], () =>
            m.default.shouldIndicateNewChannel(n.id, t.id)
          ),
          { needSubscriptionToAccess: L, isSubscriptionGated: x } = (0,
          p.default)(t.id),
          R = (0, i.useStateFromStores)([N.default], () =>
            N.default.isFavorite(n.id, t.id)
          ),
          y = (0, i.useStateFromStores)(
            [T.default],
            () => {
              let e = T.default.getCurrentUser();
              return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
          ),
          D = (0, c.useIsActivitiesInTextEnabled)(t.id, "webGuildTextChannel"),
          j = (0, v.default)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: u,
            isSubscriptionGated: x,
            needSubscriptionToAccess: L,
            isNewChannel: A,
            muted: r,
            enableActivities: D,
            resolvedUnreadSetting: C,
          }),
          G = (0, f.default)(t);
        return (0, l.jsx)(b, {
          ...h,
          ...I,
          ...e,
          hasActiveThreads: o,
          hasMoreActiveThreads: d,
          isSubscriptionGated: x,
          needSubscriptionToAccess: L,
          isNewChannel: A && e.canBeNewChannel,
          isFavoriteSuggestion: s && !R,
          canShowThreadPreviewForUser: y,
          channelInfo: j,
          embeddedApps: G,
          resolvedUnreadSetting: C,
          hasChannelInfo: null != j,
          enableActivities: D,
        });
      }
    },
    262141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("575136"),
        i = n("563903"),
        r = n("321314"),
        u = n("950043");
      function o(e) {
        let { channel: t, onAction: n } = e,
          o = (0, s.default)(t),
          d = (0, s.useEmbeddedAppsWithPresence)(o),
          c = Array.from(d.values());
        return 0 === c.length
          ? null
          : (0, l.jsxs)(a.Scroller, {
              className: u.container,
              children: [
                (0, l.jsx)("div", {
                  className: u.popoutHeaderContainer,
                  children: (0, l.jsx)(r.default, { channel: t }),
                }),
                (0, l.jsx)("div", { className: u.headerDivider }),
                c.map((e, a) => {
                  var s;
                  return (0, l.jsx)(
                    i.default,
                    {
                      embeddedApp: e,
                      presenceActivity:
                        null !== (s = e.presenceActivity) && void 0 !== s
                          ? s
                          : void 0,
                      channel: t,
                      onAction: n,
                    },
                    a
                  );
                }),
              ],
            });
      }
    },
    944843: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("146606"),
        u = n("446674"),
        o = n("669491"),
        d = n("77078"),
        c = n("206230"),
        f = n("149362"),
        h = n("471671"),
        C = n("533403"),
        p = n("837899"),
        m = n("425190"),
        E = n("368121"),
        g = n("404008"),
        I = n("268760"),
        _ = n("782340"),
        S = n("663481");
      let N = { friction: 30, tension: 300 };
      function T(e) {
        var t;
        let { guildChannels: n, jumpToVoiceChannels: s } = e,
          r = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
          u = (0, f.default)(n.id),
          c = a.useCallback(
            e => {
              e.preventDefault(), e.stopPropagation(), s();
            },
            [s]
          ),
          h =
            null !== (t = null == r ? void 0 : r.getChannelRecords()) &&
            void 0 !== t
              ? t
              : [],
          p = (0, g.computeSummarizedVoiceUsers)({
            channels: h,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: u,
          });
        return (0, l.jsxs)(d.Clickable, {
          className: i(S.bar),
          onClick: c,
          children: [
            (0, l.jsx)(E.default, {
              className: S.voiceChannelsIcon,
              width: 14,
              height: 14,
              color: o.default.unsafe_rawColors.GREEN_330.css,
            }),
            (0, l.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-positive",
              className: S.barText,
              children: _.default.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
                count: p.length,
              }),
            }),
            (0, l.jsx)(C.default, {
              guildId: n.id,
              className: S.voiceChannelsUsers,
              users: p.slice(0, 4),
              renderMoreUsers: () => null,
              max: 4,
              size: d.AvatarSizes.SIZE_16,
            }),
          ],
        });
      }
      function A(e) {
        let {
            position: t,
            guildChannels: n,
            guildChannelsVersion: s,
            jumpToVoiceChannels: o,
            jumpToChannel: f,
          } = e,
          { bottomBar: C, topBar: E } = (0, u.useStateFromStoresObject)(
            [I.default],
            () => I.default.getUnreadStateForGuildId(n.id)
          ),
          g = (0, u.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          A = (0, u.useStateFromStores)([h.default], () =>
            h.default.isFocused()
          ),
          {
            mode: L,
            mentionCount: v,
            targetChannelId: x,
          } = "bottom" === t ? C : E,
          R = L === I.UnreadBarMode.HIDDEN,
          M = (0, r.useSpring)({
            to: {
              transform: R
                ? "bottom" === t
                  ? "translateY(180%)"
                  : "translateY(-180%)"
                : "translateY(0%)",
            },
            config: N,
            immediate: g || !A,
          }),
          O = a.useCallback(
            e => {
              e.preventDefault(), e.stopPropagation(), null != x && f(x);
            },
            [f, x]
          );
        return (0, l.jsx)("div", {
          className: i(S.container, {
            [S.top]: "top" === t,
            [S.bottom]: "bottom" === t,
          }),
          children: (0, l.jsx)(r.animated.div, {
            className: S.containerPadding,
            style: M,
            "aria-hidden": R,
            children:
              L === I.UnreadBarMode.HIDDEN
                ? (0, l.jsx)("div", { className: i(S.bar, S.emptyBar) })
                : L === I.UnreadBarMode.UNREAD
                  ? (0, l.jsxs)(d.Clickable, {
                      className: S.bar,
                      onClick: O,
                      children: [
                        "bottom" === t
                          ? (0, l.jsx)(p.default, {
                              className: S.unreadIcon,
                              height: 14,
                              width: 14,
                            })
                          : (0, l.jsx)(m.default, {
                              className: S.unreadIcon,
                              height: 14,
                              width: 14,
                            }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-xs/semibold",
                          color: "interactive-normal",
                          className: S.barText,
                          children: _.default.Messages.NEW_UNREADS,
                        }),
                      ],
                    })
                  : L === I.UnreadBarMode.MENTIONS
                    ? (0, l.jsx)(d.Clickable, {
                        className: i(S.bar, S.mentionsBar),
                        onClick: O,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/semibold",
                          color: "status-danger-text",
                          className: S.barText,
                          children:
                            _.default.Messages.NEW_MENTIONS_COUNT.format({
                              count: v,
                            }),
                        }),
                      })
                    : L === I.UnreadBarMode.VOICE_CHANNELS
                      ? (0, l.jsx)(T, {
                          jumpToVoiceChannels: o,
                          guildChannels: n,
                          guildChannelsVersion: s,
                        })
                      : void 0,
          }),
        });
      }
    },
    283848: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("6587"),
        r = n("615387"),
        u = n("755624"),
        o = n("42203"),
        d = n("660478"),
        c = n("282109"),
        f = n("471671"),
        h = n("357007");
      function C(e) {
        let t = o.default.getChannel(e);
        if (null == t || null == t.getGuildId()) return !1;
        let n = t.isThread()
          ? u.default.isMuted(t.id)
          : c.default.isChannelMuted(t.getGuildId(), t.id);
        return !n && (0, r.getHasImportantUnread)(t);
      }
      function p(e) {
        let t = o.default.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let l = c.default.isGuildCollapsed(n),
          a = c.default.isChannelMuted(n, t.id);
        return (!l || !a) && d.default.getMentionCount(e) > 0;
      }
      var m = a.forwardRef(function (e, t) {
        let { guildId: n, guildChannels: a, guildChannelsVersion: r, ...u } = e,
          o = (0, i.useFlattenedChannelIdListWithThreads)(n, a, r, !1, {
            ignoreRecents: !0,
          }),
          d = (0, s.useStateFromStores)([f.default], () =>
            f.default.isFocused()
          );
        return (0, l.jsx)(h.default, {
          ref: t,
          ...u,
          isUnread: C,
          isMentioned: p,
          items: o,
          animate: d,
        });
      });
    },
    388930: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("974667"),
        s = n("446674"),
        i = n("151426"),
        r = n("77078"),
        u = n("272030"),
        o = n("10641"),
        d = n("534222"),
        c = n("660478"),
        f = n("282109"),
        h = n("943232"),
        C = n("956089"),
        p = n("708402"),
        m = n("133335"),
        E = n("782340"),
        g = n("39776");
      function I(e) {
        let {
            selected: t,
            showUnread: n,
            onClick: s,
            onContextMenu: i,
            eventsMuted: r,
            rowLabel: u,
            mentionCount: o,
            guildId: d,
          } = e,
          c = (0, a.useListItem)("upcoming-events-".concat(d));
        return (0, l.jsx)(p.default, {
          ...c,
          renderIcon: e => (0, l.jsx)(h.default, { className: e }),
          text: u,
          selected: t,
          onClick: s,
          onContextMenu: i,
          showUnread: n,
          badge:
            !r && o > 0
              ? (0, l.jsx)(C.NumberBadge, {
                  className: g.numberBadge,
                  disableColor: !0,
                  count: o,
                })
              : null,
        });
      }
      function _(e) {
        let { guild: t, selected: a } = e,
          { hasUnread: h, mentionCount: C } = (0, s.useStateFromStoresObject)(
            [c.default],
            () => ({
              hasUnread: c.default.hasUnread(
                t.id,
                m.ReadStateTypes.GUILD_EVENT
              ),
              mentionCount: c.default.getMentionCount(
                t.id,
                m.ReadStateTypes.GUILD_EVENT
              ),
            }),
            [t.id]
          ),
          p = (0, s.useStateFromStores)([f.default], () =>
            f.default.isMuteScheduledEventsEnabled(t.id)
          );
        async function g() {
          await (0, r.openModalLazy)(async () => {
            let { default: e } = await n.el("659707").then(n.bind(n, "659707"));
            return n => (0, l.jsx)(e, { ...n, guildId: t.id });
          }),
            (0, o.markDismissibleContentAsDismissed)(
              i.DismissibleContent.GUILD_HEADER_EVENT_UPSELL
            );
        }
        let _ = (0, d.default)(t.id),
          S =
            _.length > 0
              ? E.default.Messages.GUILD_EVENTS_PLURAL.format({
                  number: _.length,
                })
              : E.default.Messages.GUILD_EVENTS;
        return (0, l.jsx)(I, {
          selected: a,
          showUnread: h && !p,
          onClick: g,
          onContextMenu: e => {
            (0, u.openContextMenuLazy)(e, async () => {
              let { default: e } = await n
                .el("213528")
                .then(n.bind(n, "213528"));
              return n => (0, l.jsx)(e, { ...n, guildId: t.id });
            });
          },
          eventsMuted: p,
          rowLabel: S,
          mentionCount: C,
          guildId: t.id,
        });
      }
    },
    37416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return J;
          },
        }),
        n("222007"),
        n("70102");
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("446674"),
        r = n("862337"),
        u = n("77078"),
        o = n("255397"),
        d = n("272030"),
        c = n("667771"),
        f = n("650912"),
        h = n("575136"),
        C = n("843624"),
        p = n("139375"),
        m = n("481699"),
        E = n("679653"),
        g = n("242740"),
        I = n("557661"),
        _ = n("261552"),
        S = n("233322"),
        N = n("157186"),
        T = n("848848"),
        A = n("534222"),
        L = n("106346"),
        v = n("699209"),
        x = n("144491"),
        R = n("12896"),
        M = n("845579"),
        O = n("42203"),
        y = n("305961"),
        D = n("88093"),
        b = n("957255"),
        j = n("660478"),
        G = n("282109"),
        U = n("800762"),
        P = n("109264"),
        w = n("404008"),
        F = n("783735"),
        B = n("39347"),
        V = n("41594"),
        H = n("744925"),
        k = n("199334"),
        Y = n("884155"),
        K = n("49111"),
        W = n("695838"),
        Z = n("782340"),
        z = n("65369");
      class X extends F.default {
        componentWillUnmount() {
          this.activitiesHideTimeout.stop();
        }
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, w.isChannelFull)(e, U.default, y.default);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return z.containerUserOver;
          if (null != t)
            return e > t ? z.containerDragAfter : z.containerDragBefore;
          return z.containerDefault;
        }
        renderSubtitle() {
          var e;
          let {
              channel: t,
              connected: n,
              enableHangStatus: a,
              allowChannelTopic: s,
            } = this.props,
            i =
              null === (e = (0, I.getChannelSubtitle)(this.props.subtitle)) ||
              void 0 === e
                ? void 0
                : e.subtitle,
            { hovered: r } = this.state;
          return (0, l.jsx)(k.default, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: r,
            enableHangStatus: a,
            allowChannelTopic: s,
          });
        }
        renderVoiceUsers() {
          let {
            channel: e,
            voiceStates: t,
            collapsed: n,
            withGuildIcon: a,
            tabIndex: s,
          } = this.props;
          return (0, l.jsx)(Y.default, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: a,
            tabIndex: s,
            location: K.AnalyticsLocations.GUILD_CHANNEL_LIST,
          });
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, l.jsx)("div", { className: z.channelInfo, children: e });
        }
        render() {
          let {
              channel: e,
              selected: t,
              connected: n,
              unread: a,
              resolvedUnreadSetting: i,
              mentionCount: r,
              locked: o,
              sorting: d,
              isUserOver: c,
              connectChannelDropTarget: f,
              connectChannelDragSource: h,
              connectUserDropTarget: C,
              connectDragPreview: E,
              canReorderChannel: g,
              canMoveMembers: I,
              showTutorial: _,
              hasActiveEvent: S,
              embeddedApps: N,
              isSubscriptionGated: T,
              isFavoriteSuggestion: A,
              withGuildIcon: L,
            } = this.props,
            { shouldShowActivities: v, shouldShowGuildVerificationPopout: x } =
              this.state,
            M = this.getVoiceStatesCount(),
            O = (0, l.jsxs)("li", {
              className: s(this.getModeClass(), {
                [z.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, l.jsx)("div", {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: (0, l.jsx)(u.Popout, {
                    position: "right",
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.closeGuildVerificationPopout,
                    shouldShow: (v && !d && !c && !x) || x,
                    children: () =>
                      (0, l.jsx)(u.Tooltip, {
                        text: this.getTooltipText(),
                        children: u => {
                          let { onClick: d, onContextMenu: c, ...f } = u;
                          return (0, l.jsxs)(V.default, {
                            className: z.iconVisibility,
                            iconClassName: s({ [z.iconLive]: S }),
                            channel: e,
                            selected: !A && t,
                            connected: n,
                            unread: n ? a : void 0,
                            resolvedUnreadSetting: i,
                            mentionCount: r,
                            locked: o,
                            subtitle: this.renderSubtitle(),
                            onClick: () => {
                              this.handleClick(), null == d || d();
                            },
                            onContextMenu: e => {
                              this.handleContextMenu(e), null == c || c();
                            },
                            connectDragPreview: E,
                            isFavoriteSuggestion: A,
                            "aria-label": (0, p.default)({
                              channel: e,
                              unread: a,
                              mentionCount: r,
                              userCount: M,
                              embeddedActivitiesCount: N.length,
                              isSubscriptionGated: T,
                            }),
                            "aria-describedby": (0, m.default)({
                              channel: e,
                              embeddedApps: N,
                            }),
                            withGuildIcon: L,
                            ...f,
                            children: [
                              A && this.renderAcceptSuggestionButton(),
                              A && this.renderRemoveSuggestionButton(),
                              !A && this.renderOpenChatButton(),
                              !A && this.renderInviteButton(),
                              !A && this.renderEditButton(),
                              !A && this.renderChannelInfo(),
                            ],
                          });
                        },
                      }),
                  }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return (
            I && (O = C(O)),
            g && (O = f(h(O))),
            _ &&
              (O = (0, l.jsx)(R.default, {
                tutorialId: "voice-conversations",
                position: "right",
                offsetX: -20,
                children: O,
              })),
            O
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              shouldShowActivities: !1,
              shouldShowGuildVerificationPopout: !1,
              hovered: !1,
            }),
            (this.activitiesHideTimeout = new r.Timeout()),
            (this.closeGuildVerificationPopout = () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            (this.handleVoiceConnect = () => {
              let {
                locked: e,
                connected: t,
                channel: n,
                unverifiedAccount: l,
                needSubscriptionToAccess: a,
              } = this.props;
              l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                g.default.handleVoiceConnect({
                  channel: n,
                  connected: t,
                  needSubscriptionToAccess: a,
                  locked: e,
                });
            }),
            (this.handleContextMenu = e => {
              let { channel: t } = this.props,
                a = y.default.getGuild(t.getGuildId());
              null != a &&
                (0, d.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("168003")
                    .then(n.bind(n, "168003"));
                  return n => (0, l.jsx)(e, { ...n, channel: t, guild: a });
                });
            }),
            (this.handleMouseEnter = () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !0, hovered: !0 });
            }),
            (this.handleMouseLeave = () => {
              this.activitiesHideTimeout.start(100, () =>
                this.setState({ shouldShowActivities: !1, hovered: !1 })
              );
            }),
            (this.closePopout = () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !1 });
            }),
            (this.handleClick = () => {
              let { channel: e } = this.props,
                t = e.getGuildId();
              null != t &&
                (0, N.shouldShowMembershipVerificationGate)(t) &&
                (0, S.openMemberVerificationModal)(t),
                this.handleVoiceConnect();
            }),
            (this.handleVoiceStatusClick = e => {
              let { connected: t, channel: a } = this.props;
              t &&
                (e.stopPropagation(),
                (0, u.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("843624")
                      .then(n.bind(n, "843624"));
                    return t => (0, l.jsx)(e, { channel: a, ...t });
                  },
                  { modalKey: C.VOICE_CHANNEL_STATUS_MODAL_KEY }
                ));
            }),
            (this.renderPopout = () => {
              let {
                  channel: e,
                  voiceStates: t,
                  sorting: n,
                  isUserOver: a,
                  selected: s,
                  guild: i,
                } = this.props,
                {
                  shouldShowActivities: r,
                  shouldShowGuildVerificationPopout: u,
                } = this.state;
              if (r && !n && !a && !u) {
                let n = M.ActivityRestrictedGuilds.getSetting().includes(i.id);
                return (0, l.jsx)(H.default, {
                  onAction: this.closePopout,
                  guild: i,
                  channel: e,
                  voiceStates: t,
                  isChannelSelected: s,
                  shouldShowSettingNudge: n,
                });
              }
              if (u)
                return (0, l.jsx)(L.default, {
                  type: L.GuildVerificationPopoutTypes.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render"
              );
            }),
            (this.renderOpenChatButton = () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, l.jsx)(u.Tooltip, {
                  text: Z.default.Messages.OPEN_CHAT,
                  children: t => {
                    let {
                      onMouseEnter: a,
                      onMouseLeave: i,
                      onFocus: r,
                      onBlur: d,
                    } = t;
                    return (0, l.jsx)(u.Clickable, {
                      className: s(z.iconItem, n ? z.alwaysShown : null),
                      onClick: () => {
                        o.default.updateChatOpen(e.id, !0),
                          (0, x.transitionToChannel)(e.id);
                      },
                      "aria-label": Z.default.Messages.OPEN_CHAT,
                      onMouseEnter: a,
                      onMouseLeave: i,
                      onFocus: r,
                      onBlur: d,
                      children: (0, l.jsx)(P.default, {
                        width: 16,
                        height: 16,
                        className: z.actionIcon,
                      }),
                    });
                  },
                });
            }),
            (this.getTooltipText = () => {
              let { connected: e } = this.props;
              return this.isFull() && !e
                ? Z.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
                : null;
            });
        }
      }
      let Q = (0, c.makeChannelSortable)((0, f.makeVoiceUserDroppable)(X));
      function J(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: a,
            isFavoriteCategory: s,
            selected: r,
            collapsed: u,
            voiceStates: o,
          } = e,
          d = (0, i.useStateFromStoresObject)([j.default], () => ({
            unread: j.default.hasUnread(n.id),
            mentionCount: j.default.getMentionCount(n.id),
          })),
          c = (0, i.useStateFromStores)([G.default], () =>
            G.default.resolveUnreadSetting(n)
          ),
          f = (0, i.useStateFromStoresObject)(
            [O.default, D.default, b.default],
            () => {
              let e = O.default.getChannel(n.parent_id),
                l = D.default.getCheck(n.guild_id);
              return {
                canManageChannel: b.default.can(
                  K.Permissions.MANAGE_CHANNELS,
                  n
                ),
                canReorderChannel:
                  !0 !== a &&
                  (t.id === W.FAVORITES_RAW_GUILD_ID ||
                    (null != e
                      ? b.default.can(K.Permissions.MANAGE_CHANNELS, e)
                      : b.default.can(K.Permissions.MANAGE_CHANNELS, t))),
                canMoveMembers: b.default.can(K.Permissions.MOVE_MEMBERS, n),
                locked: !b.default.can(K.Permissions.CONNECT, n),
                bypassLimit: b.default.can(K.Permissions.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
              };
            }
          ),
          C = (0, i.useStateFromStores)([U.default], () =>
            U.default.hasVideo(n.id)
          ),
          p = (0, h.default)(n),
          m = (0, E.default)(n),
          g = (0, A.useActiveEvent)(n.id),
          { isSubscriptionGated: I, needSubscriptionToAccess: S } = (0,
          T.default)(n.id),
          N = (0, _.default)(),
          L = (0, i.useStateFromStores)([G.default], () =>
            G.default.isFavorite(t.id, n.id)
          ),
          x = e.connected || (null == N ? void 0 : N.channelId) === n.id,
          { enableHangStatus: R, allowChannelTopic: M } =
            v.HangStatusExperiment.useExperiment(
              { guildId: n.guild_id, location: "VoiceChannel" },
              { autoTrackExposure: !1 }
            ),
          y = (0, B.default)({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: u,
            voiceStates: o,
            isSubscriptionGated: I,
            needSubscriptionToAccess: S,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
          }),
          P = x && null == y;
        return (0, l.jsx)(Q, {
          channelName: m,
          embeddedApps: p,
          embeddedActivityType: K.ActivityTypes.PLAYING,
          video: C,
          hasActiveEvent: null != g,
          isSubscriptionGated: I,
          needSubscriptionToAccess: S,
          ...d,
          ...f,
          ...e,
          connected: x,
          isFavoriteSuggestion: s && !L,
          forceShowButtons: P,
          channelInfo: y,
          enableHangStatus: R,
          allowChannelTopic: M,
          resolvedUnreadSetting: c,
        });
      }
    },
    744925: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("750560"),
        u = n("575136"),
        o = n("871388"),
        d = n("152311"),
        c = n("419830"),
        f = n("305961"),
        h = n("957255"),
        C = n("824563"),
        p = n("800762"),
        m = n("449008"),
        E = n("447235"),
        g = n("563903"),
        I = n("321314"),
        _ = n("137376"),
        S = n("789482"),
        N = n("49111"),
        T = n("782340"),
        A = n("950043");
      function L(e) {
        var t, c;
        let {
          channel: f,
          guild: h,
          onAction: p,
          voiceStates: E,
          isChannelSelected: I,
          shouldShowSettingNudge: _,
        } = e;
        !(function (e, t) {
          let n = a.useMemo(() => {
            var n;
            return null == t || t.length > 50
              ? {}
              : {
                  [e.getGuildId()]:
                    null !==
                      (n = t.map(e => {
                        let { user: t } = e;
                        return t.id;
                      })) && void 0 !== n
                      ? n
                      : [],
                };
          }, [e, t]);
          (0, r.useSubscribeGuildMembers)(n);
        })(f, E);
        let S = (0, u.default)(f),
          L = new Map();
        S.forEach(e => {
          L.set(e.application.id, e);
        });
        let x =
            null !== (t = null == E ? void 0 : E.filter(m.isNotNullish)) &&
            void 0 !== t
              ? t
              : [],
          R = e => t =>
            ([N.ActivityTypes.PLAYING, N.ActivityTypes.WATCHING].includes(
              t.type
            ) &&
              (null != t.assets ||
                null != t.state ||
                null != t.details ||
                null != t.party) &&
              (null == t.session_id ||
                t.session_id === e.voiceState.sessionId)) ||
            t.type === N.ActivityTypes.LISTENING,
          M = (0, s.useStateFromStores)(
            [C.default],
            () => {
              let e = new Map();
              return (
                x.forEach(t => {
                  let n = C.default.findActivity(t.user.id, R(t));
                  if (null != n && (0, d.default)(n)) {
                    let t =
                      null != n.application_id ? L.get(n.application_id) : null;
                    null != t &&
                      null != n.application_id &&
                      e.set(n.application_id, { ...t, presenceActivity: n });
                  }
                }),
                e
              );
            },
            [x, L],
            s.statesWillNeverBeEqual
          ),
          O = (0, s.useStateFromStores)(
            [C.default],
            () => {
              let e = {};
              return (
                x.forEach(t => {
                  let n = C.default.findActivity(t.user.id, R(t));
                  if (null != n && !(0, d.default)(n)) {
                    var l, a, s, i;
                    let r = ""
                        .concat(
                          null !== (a = n.application_id) && void 0 !== a
                            ? a
                            : "",
                          ":"
                        )
                        .concat(
                          null !==
                            (s =
                              null === (l = n.party) || void 0 === l
                                ? void 0
                                : l.id) && void 0 !== s
                            ? s
                            : t.user.id
                        ),
                      u =
                        null !== (i = e[r]) && void 0 !== i
                          ? i
                          : { members: [], activity: n };
                    u.members.push(t),
                      !(0, o.default)(u.activity, N.ActivityFlags.JOIN) &&
                        (u.activity = n),
                      (e[r] = u);
                  }
                }),
                Object.values(e)
              );
            },
            [x],
            s.statesWillNeverBeEqual
          ),
          y = Array.from(M.values()).map(e => ({
            members: x,
            activity: e.presenceActivity,
          })),
          D = [...y, ...O];
        return 0 === D.length
          ? null
          : (0, l.jsxs)(i.Scroller, {
              className: A.container,
              children: [
                (0, l.jsx)(v, {
                  channel: f,
                  isChannelSelected: I,
                  voiceStatesCount:
                    null !== (c = null == E ? void 0 : E.length) && void 0 !== c
                      ? c
                      : 0,
                }),
                (0, l.jsx)("div", { className: A.headerDivider }),
                D.map((e, t) => {
                  let { members: n, activity: a } = e,
                    s = a.application_id,
                    i = null != s ? M.get(s) : void 0;
                  return (0, l.jsx)(
                    g.default,
                    {
                      presenceActivity: a,
                      embeddedApp: i,
                      channel: f,
                      members: n,
                      onAction: p,
                    },
                    t
                  );
                }),
                _ &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", { className: A.headerDivider }),
                      (0, l.jsx)("div", {
                        className: A.settingNudgeText,
                        children: (0, l.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          tag: "span",
                          children:
                            T.default.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format(
                              {
                                onClick: () => {
                                  (0, i.openModalLazy)(async () => {
                                    let { default: e } = await n
                                      .el("349406")
                                      .then(n.bind(n, "349406"));
                                    return t =>
                                      (0, l.jsx)(e, { ...t, guild: h });
                                  });
                                },
                              }
                            ),
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
      function v(e) {
        let { channel: t, isChannelSelected: n, voiceStatesCount: a } = e,
          i = (0, s.useStateFromStores)(
            [h.default],
            () => !h.default.can(N.Permissions.CONNECT, t)
          ),
          r = (0, s.useStateFromStores)([p.default], () =>
            p.default.hasVideo(t.id)
          ),
          u = (0, E.default)({ channel: t, locked: i, video: r, selected: n }),
          o = (0, s.useStateFromStores)([f.default], () =>
            f.default.getGuild(t.guild_id)
          ),
          d = (0, c.getChannelIconComponent)(t, o);
        return null == d
          ? null
          : (0, l.jsxs)("div", {
              className: A.popoutHeaderContainer,
              children: [
                (0, l.jsx)(I.default, { channel: t }),
                u
                  ? (0, l.jsx)(_.default, {
                      userCount: a,
                      video: r,
                      channel: t,
                    })
                  : (0, l.jsx)(S.default, { userCount: a }),
              ],
            });
      }
    },
    199334: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("77078"),
        o = n("207273"),
        d = n("367376"),
        c = n("957255"),
        f = n("98292"),
        h = n("832132"),
        C = n("599110"),
        p = n("49111"),
        m = n("782340"),
        E = n("850665"),
        g = n("919163");
      function I(e) {
        let {
            channel: t,
            connected: n,
            hovered: s,
            subtitle: I,
            onClick: _,
            enableHangStatus: S,
            allowChannelTopic: N,
          } = e,
          T = (0, r.useStateFromStores)([o.default], () =>
            o.default.getChannelStatus(t)
          ),
          A = null != T && T.length > 0,
          L = (0, r.useStateFromStores)(
            [c.default],
            () =>
              (!S || !!N) &&
              c.default.can(p.Permissions.SET_VOICE_CHANNEL_STATUS, t)
          ),
          v = null != I && I.length > 0;
        a.useEffect(() => {
          A &&
            C.default.track(p.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
              guild_id: t.guild_id,
              channel_id: t.id,
            });
        }, [t.id, A, t.guild_id]);
        let x = (0, u.useRedesignIconContext)().enabled ? 12 : 14;
        if (null == t.guild_id) return null;
        let R = i(E.statusDiv, n && L ? E.hoverable : null);
        if (A)
          return (0, l.jsx)(u.Clickable, {
            className: R,
            onClick: L ? _ : void 0,
            children: (0, l.jsx)(u.Text, {
              variant: "text-xs/medium",
              className: i(E.statusText, g.markup),
              children: (0, l.jsx)(f.default, {
                children: d.default.parseVoiceChannelStatus(T, !0, {
                  channelId: t.id,
                }),
              }),
            }),
          });
        if (n && L && (!v || s))
          return (0, l.jsxs)(u.Clickable, {
            className: R,
            onClick: _,
            children: [
              (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                className: E.statusText,
                children: m.default.Messages.VOICE_CHANNEL_SET_STATUS,
              }),
              (0, l.jsx)(h.default, {
                className: E.pencilIcon,
                width: x,
                height: x,
              }),
            ],
          });
        if (v) return (0, l.jsx)(f.default, { children: I });
        return null;
      }
    },
    42687: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("437825"),
        r = n("304482");
      function u(e) {
        let { total: t, users: n, videoLimit: a } = e;
        return (0, l.jsxs)("div", {
          className: r.wrapper,
          children: [
            (0, l.jsxs)("span", {
              className: s(r.users, { [r.video]: a, [r.extraLong]: n >= 100 }),
              children: [
                a ? (0, l.jsx)(i.default, { className: r.videoIcon }) : null,
                n.toString().padStart(2, "0"),
              ],
            }),
            (0, l.jsx)("span", {
              className: s(r.total, { [r.extraLong]: t >= 100 }),
              children: t.toString().padStart(2, "0"),
            }),
          ],
        });
      }
    },
    789482: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("155207"),
        i = n("494249");
      function r(e) {
        let { userCount: t } = e;
        return (0, l.jsxs)("div", {
          className: i.container,
          children: [
            (0, l.jsx)(s.default, {
              width: 12,
              height: 12,
              className: i.peopleIcon,
            }),
            (0, l.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: i.userCountText,
              children: t,
            }),
          ],
        });
      }
    },
    106346: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildVerificationPopoutTypes: function () {
            return a;
          },
          default: function () {
            return g;
          },
        });
      var l,
        a,
        s = n("37983");
      n("884691");
      var i = n("446674"),
        r = n("77078"),
        u = n("437822"),
        o = n("774146"),
        d = n("878720"),
        c = n("88093"),
        f = n("697218"),
        h = n("476765"),
        C = n("49111"),
        p = n("482931"),
        m = n("782340"),
        E = n("312277");
      (l = a || (a = {}))[(l.VOICE = 0)] = "VOICE";
      var g = e => {
        let { type: t, guildId: l, closePopout: a } = e,
          g = (0, h.useUID)(),
          {
            notClaimed: I,
            notEmailVerified: _,
            notPhoneVerified: S,
            newAccount: N,
            newMember: T,
          } = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.getCheck(l),
            [l]
          ),
          A =
            0 === t ? m.default.Messages.GUILD_VERIFICATION_VOICE_HEADER : null,
          L = null,
          v = null;
        return (0 === t &&
          (I
            ? ((L = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED),
              (v = m.default.Messages.CLAIM_ACCOUNT))
            : S
              ? ((L =
                  m.default.Messages
                    .GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED),
                (v = m.default.Messages.VERIFY_PHONE))
              : _
                ? ((L =
                    m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED),
                  (v = m.default.Messages.RESEND_VERIFICATION_EMAIL))
                : T
                  ? ((L =
                      m.default.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format(
                        { min: C.VerificationCriteria.MEMBER_AGE }
                      )),
                    (v = m.default.Messages.OKAY))
                  : N &&
                    ((L =
                      m.default.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format(
                        { min: C.VerificationCriteria.ACCOUNT_AGE }
                      )),
                    (v = m.default.Messages.OKAY))),
        null == A || null == L)
          ? null
          : (0, s.jsxs)(r.Dialog, {
              className: E.container,
              "aria-labelledby": g,
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  className: E.image,
                  src: n("748301"),
                }),
                (0, s.jsxs)("div", {
                  className: E.content,
                  children: [
                    (0, s.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      id: g,
                      children: A,
                    }),
                    (0, s.jsx)(r.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: L,
                    }),
                    (0, s.jsxs)("div", {
                      className: E.buttonContainer,
                      children: [
                        null != v
                          ? (0, s.jsx)(r.Button, {
                              onClick: () => {
                                I
                                  ? o.openClaimAccountModal()
                                  : S
                                    ? (0, r.openModalLazy)(
                                        async () => {
                                          let { default: e } = await n
                                            .el("601745")
                                            .then(n.bind(n, "601745"));
                                          return t =>
                                            (0, s.jsx)(e, {
                                              reason:
                                                d.ChangePhoneReason
                                                  .GUILD_PHONE_REQUIRED,
                                              ...t,
                                            });
                                        },
                                        {
                                          modalKey:
                                            p.PHONE_VERIFICATION_MODAL_KEY,
                                        }
                                      )
                                    : _ &&
                                      (u.default.verifyResend(),
                                      (0, r.openModal)(e => {
                                        var t;
                                        return (0, s.jsx)(r.ConfirmModal, {
                                          header:
                                            m.default.Messages
                                              .VERIFICATION_EMAIL_TITLE,
                                          confirmText: m.default.Messages.OKAY,
                                          confirmButtonColor:
                                            r.Button.Colors.BRAND,
                                          ...e,
                                          children: (0, s.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children:
                                              m.default.Messages.VERIFICATION_EMAIL_BODY.format(
                                                {
                                                  email:
                                                    null ===
                                                      (t =
                                                        f.default.getCurrentUser()) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t.email,
                                                }
                                              ),
                                          }),
                                        });
                                      })),
                                  a();
                              },
                              className: E.primaryButton,
                              children: v,
                            })
                          : null,
                        I || S || _
                          ? (0, s.jsx)(r.Button, {
                              onClick: a,
                              look: r.Button.Looks.BLANK,
                              className: E.cancel,
                              children: m.default.Messages.NEVERMIND,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              ],
            });
      };
    },
    509223: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          SpecialGuildsNodeIds: function () {
            return l;
          },
        }),
        ((a = l || (l = {}))[(a.PENDING_JOIN_REQUESTS_FOLDER = 1)] =
          "PENDING_JOIN_REQUESTS_FOLDER");
    },
    501981: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var l = n("298386"),
        a = n("446674"),
        s = n("442939"),
        i = n("42203"),
        r = n("305961"),
        u = n("957255"),
        o = n("824563"),
        d = n("800762"),
        c = n("449008"),
        f = n("49111");
      function h(e) {
        let t = (0, a.useStateFromStores)([r.default], () =>
            r.default.getGuild(e)
          ),
          n = null == t ? void 0 : t.afkChannelId,
          h = (0, a.useStateFromStoresArray)(
            [d.default, o.default, i.default, u.default],
            () => {
              let t = new Set(),
                a = d.default.getVoiceStates(e);
              for (let s in a) {
                let r = i.default.getBasicChannel(a[s].channelId);
                if (
                  null == r ||
                  r.type === l.ChannelTypes.GUILD_STAGE_VOICE ||
                  n === r.id ||
                  !u.default.canBasicChannel(f.BasicPermissions.VIEW_CHANNEL, r)
                )
                  continue;
                let d = o.default.getActivities(s, e);
                d.forEach(e => {
                  let n = e.application_id;
                  if (e.type !== f.ActivityTypes.PLAYING || null == n)
                    return [];
                  t.add(n);
                });
              }
              return [...t];
            },
            [n, e]
          ),
          C = (0, s.default)([...h]).filter(c.isNotNullish);
        return C.length > 0;
      }
    },
    533669: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("884691"),
        a = n("162771");
      function s(e) {
        l.useLayoutEffect(() => {
          let t = null;
          function n() {
            let n = a.default.getGuildId();
            n !== t &&
              ((t = null != n ? n : null), e(null != n ? n : null, !1));
          }
          return (
            a.default.addChangeListener(n),
            n(),
            () => {
              a.default.removeChangeListener(n);
            }
          );
        }, [e]);
      }
    },
    957833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsHomeSelected: function () {
            return i;
          },
        });
      var l = n("803182"),
        a = n("393027"),
        s = n("49111");
      function i() {
        let e = (0, a.default)(e => e.guildId),
          { pathname: t } = (0, l.useLocation)(),
          n = t.startsWith(s.Routes.GUILD_DISCOVERY),
          i = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION("")),
          r = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        return null == e && !(n || i || r);
      }
    },
    21841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("917351"),
        s = n.n(a),
        i = n("298386"),
        r = n("446674"),
        u = n("862337"),
        o = n("666020"),
        d = n("427953"),
        c = n("191225"),
        f = n("534222"),
        h = n("923510"),
        C = n("834052"),
        p = n("233069"),
        m = n("373469"),
        E = n("271938"),
        g = n("42203"),
        I = n("525065"),
        _ = n("305961"),
        S = n("957255"),
        N = n("18494"),
        T = n("282109"),
        A = n("800762"),
        L = n("299039"),
        v = n("471374"),
        x = n("501981"),
        R = n("49111");
      let M = [];
      function O(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : S.default;
        return (
          null != e &&
          e.type !== i.ChannelTypes.GUILD_STAGE_VOICE &&
          t !== e.id &&
          n.canBasicChannel(R.BasicPermissions.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        var t;
        let n = (0, r.useStateFromStores)([T.default], () =>
            T.default.isMuted(e)
          ),
          a = (0, f.useGuildActiveEvent)(e);
        !(function (e, t) {
          let n = l.useRef(new Set()),
            a = l.useRef(new u.Timeout()),
            { shouldSubscribeToGuildMemberUpdates: i } =
              v.default.useExperiment(
                { location: "useGuildMediaState" },
                { autoTrackExposure: !1 }
              ),
            d = (0, r.useStateFromStores)([I.default], () => {
              let t = I.default.getMemberCount(e);
              return null == t || t > 1e3;
            }),
            c = (0, r.useStateFromStoresObject)(
              [A.default],
              () => {
                if (!i || t || d) return M;
                let n = A.default.getVoiceStates(e),
                  l = Object.keys(n);
                return 0 === l.length ? M : l.slice(0, 50);
              },
              [e, t, d, i]
            );
          l.useEffect(() => {
            !(function (e, t, n, l, a) {
              let i = s.random(1e3, 1e4);
              l.start(i, () => {
                let l = new Set(t),
                  s = t.filter(e => !n.has(e)),
                  i = Array.from(n).filter(e => !l.has(e));
                (0, o.unsubscribeMembers)(e, i),
                  (0, o.subscribeMembers)(e, s),
                  a();
              });
            })(e, c, n.current, a.current, () => {
              n.current = new Set(c);
            });
          }, [e, c]),
            l.useEffect(
              () => () => {
                a.current.stop(),
                  (0, o.unsubscribeMembers)(e, Array.from(n.current));
              },
              [e]
            );
        })(e, n);
        let i = (0, x.default)(e),
          R = (0, r.useStateFromStores)([c.default], () =>
            c.default.getEmbeddedActivitiesForGuild(e)
          ),
          y = (0, d.useIsActivitiesInTextEnabled)(
            null === (t = R[0]) || void 0 === t ? void 0 : t.channelId,
            "GuildMediaState"
          ),
          {
            guildHasVoice: D,
            guildHasVideo: b,
            selectedVoiceChannelHasVideo: j,
          } = (0, r.useStateFromStoresObject)(
            [A.default, g.default, S.default, _.default, N.default],
            () => {
              var t;
              let l = N.default.getVoiceChannelId(),
                a =
                  null === (t = _.default.getGuild(e)) || void 0 === t
                    ? void 0
                    : t.afkChannelId,
                s = A.default.getUsersWithVideo(e),
                i = A.default.getVoiceStates(e),
                r = (() => {
                  if (n) return !1;
                  for (let e in i)
                    if (
                      O(
                        g.default.getBasicChannel(i[e].channelId),
                        null != a ? a : void 0,
                        S.default
                      )
                    )
                      return !0;
                  return !1;
                })(),
                u = (() => {
                  if (n) return !1;
                  for (let e of s)
                    if (
                      O(
                        g.default.getBasicChannel(i[e].channelId),
                        null != a ? a : void 0,
                        S.default
                      )
                    )
                      return !0;
                  return !1;
                })();
              return {
                guildHasVoice: r,
                guildHasVideo: u,
                selectedVoiceChannelHasVideo:
                  null != l && A.default.hasVideo(l),
              };
            },
            [e, n]
          ),
          G = E.default.getId();
        return (0, r.useStateFromStoresObject)(
          [N.default, m.default, C.default, g.default, S.default, c.default],
          () => {
            var t, l, s;
            let r = N.default.getVoiceChannelId(),
              u =
                null === (t = g.default.getChannel(r)) || void 0 === t
                  ? void 0
                  : t.guild_id,
              o = u === e,
              d = !1,
              f = !1,
              E = !1,
              I = !1,
              _ = !1,
              T = !1;
            if (!o && n)
              return {
                audio: d,
                video: I,
                screenshare: _,
                liveStage: E,
                activeEvent: f,
                activity: T,
                gaming: i,
                isCurrentUserConnected: !1,
              };
            let A = L.default
                .keys(C.default.getStageInstancesByGuild(e))
                .some(e => {
                  let t = g.default.getChannel(e);
                  return (
                    null != t &&
                    S.default.can(h.JOIN_VOCAL_CHANNEL_PERMISSIONS, t)
                  );
                }),
              v =
                o &&
                null !==
                  (s =
                    null === (l = g.default.getChannel(r)) || void 0 === l
                      ? void 0
                      : l.isGuildStageVoice()) &&
                void 0 !== s &&
                s,
              x = !!o && null != m.default.getActiveStreamForUser(G, e),
              M = m.default
                .getAllApplicationStreams()
                .some(t => t.guildId === e),
              O = o && j,
              U = (() => {
                if (y) return R.length > 0;
                for (let e of R) {
                  let t = g.default.getChannel(e.channelId);
                  if (null != t && (0, p.isVoiceChannel)(t.type)) return !0;
                }
                return !1;
              })(),
              P = c.default.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
              o
                ? ((d = !0),
                  (f = (null == a ? void 0 : a.channel_id) === r),
                  (E = v),
                  (I = O),
                  (_ = x),
                  (T = P))
                : ((d = D),
                  (f = null != a),
                  (E = A),
                  (I = b),
                  (_ = M),
                  (T = U)),
              {
                audio: d,
                video: I,
                screenshare: _,
                liveStage: E,
                activeEvent: f,
                activity: T,
                gaming: i,
                isCurrentUserConnected: o || v,
              }
            );
          },
          [G, R, i, a, e, y, n, b, D, j]
        );
      }
    },
    512812: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("982527"),
        s = n("305961");
      function i() {
        return (0, l.useStateFromStoresArray)([a.default, s.default], () => {
          let e = a.default.computeGuildIds(),
            t = s.default.getGuilds();
          return e.filter(e => null == t[e]);
        });
      }
    },
    543785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("146606"),
        i = n("974667"),
        r = n("446674"),
        u = n("77078"),
        o = n("272030"),
        d = n("191145"),
        c = n("843962"),
        f = n("679653"),
        h = n("373469"),
        C = n("945956"),
        p = n("660478"),
        m = n("18494"),
        E = n("697218"),
        g = n("471671"),
        I = n("15738"),
        _ = n("956089"),
        S = n("108189"),
        N = n("610898"),
        T = n("829562"),
        A = n("255991"),
        L = n("49111"),
        v = n("322033");
      let x = { friction: 28, tension: 600 };
      function R(e) {
        switch (e) {
          case "height":
          case "opacity":
            return { duration: 150, ...x };
          case "scale":
            return { ...x };
          default:
            throw Error(
              "DirectMessage: getSpringConfigs() - Invalid spring ".concat(
                String(e)
              )
            );
        }
      }
      class M extends a.PureComponent {
        componentWillEnter(e) {
          let { controller: t } = this.state;
          e(),
            t
              .update({
                immediate: !g.default.isFocused(),
                height: 1,
                opacity: 1,
                scale: 1,
                config: R,
              })
              .start()
              .then(() => this.setState({ animating: !1 }));
        }
        componentWillAppear(e) {
          let { controller: t } = this.state;
          t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: R,
          })
            .start()
            .then(e);
        }
        componentWillLeave(e) {
          let { controller: t } = this.state;
          this.setState({ animating: !0 }, () =>
            t
              .update({
                immediate: !g.default.isFocused(),
                height: 0,
                opacity: 0,
                scale: 0,
                config: R,
              })
              .start()
              .then(e)
          );
        }
        componentWillUnmount() {
          this.state.controller.dispose();
        }
        getAnimatedStyle() {
          let { controller: e } = this.state,
            { opacity: t, height: n, scale: l } = e.springs;
          return {
            opacity: t,
            height: n.to([0, 1], [0, 56]),
            transform: l.to([0, 1], [0.5, 1]).to(e => "scale(".concat(e, ")")),
          };
        }
        getChannelIcon() {
          let { channel: e } = this.props,
            t =
              e.type === L.ChannelTypes.DM
                ? E.default.getUser(e.getRecipientId())
                : null;
          return null != t
            ? t.getAvatarURL(void 0, 48, !1)
            : (0, c.getChannelIconURL)(e);
        }
        render() {
          let {
              channel: e,
              channelName: t,
              selected: n,
              badge: a,
              audio: r,
              video: o,
              stream: d,
              isCurrentUserInThisDMCall: c,
              unread: f,
            } = this.props,
            { hovered: h, animating: C } = this.state;
          return (0, l.jsx)(s.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(N.ListItem, {
              children: [
                (0, l.jsx)(I.default, {
                  hovered: !C && h,
                  selected: !C && n,
                  unread: !C && f,
                  className: v.pill,
                }),
                (0, l.jsx)(T.default, {
                  text: null != t ? t : "",
                  selected: n,
                  children: (0, l.jsx)(u.BlobMask, {
                    selected: n || h,
                    lowerBadge: a > 0 ? (0, A.renderMentionBadge)(a) : null,
                    upperBadge: (0, A.renderMediaBadge)({
                      audio: r,
                      video: o,
                      screenshare: d,
                      isCurrentUserConnected: c,
                    }),
                    lowerBadgeWidth: (0, _.getBadgeWidthForValue)(a),
                    children: (0, l.jsx)(i.ListNavigatorItem, {
                      id: e.id,
                      children: a =>
                        (0, l.jsx)(S.default, {
                          to: L.Routes.CHANNEL(L.ME, e.id),
                          onMouseEnter: () => this.setState({ hovered: !0 }),
                          onMouseLeave: () => this.setState({ hovered: !1 }),
                          icon: this.getChannelIcon(),
                          selected: n || h,
                          ariaLabel: null != t ? t : "",
                          onContextMenu: this.handleContextMenu,
                          ...a,
                        }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hovered: !1,
              animating: !0,
              controller: new s.Controller({
                scale: 0,
                height: 0,
                opacity: 0,
                config: R,
              }),
            }),
            (this.handleContextMenu = e => {
              let { channel: t } = this.props,
                a =
                  t.type === L.ChannelTypes.DM
                    ? E.default.getUser(t.getRecipientId())
                    : null;
              null != a
                ? (0, o.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("130074")
                      .then(n.bind(n, "130074"));
                    return n => (0, l.jsx)(e, { ...n, channel: t, user: a });
                  })
                : (0, o.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("493015")
                      .then(n.bind(n, "493015"));
                    return n =>
                      (0, l.jsx)(e, { ...n, channel: t, selected: !1 });
                  });
            });
        }
      }
      M.defaultProps = {
        badge: 0,
        audio: !1,
        video: !1,
        isCurrentUserInThisDMCall: !1,
      };
      var O = a.forwardRef(function (e, t) {
        let n = e.channel.id,
          a = (0, f.default)(e.channel),
          s = (0, r.useStateFromStores)(
            [C.default],
            () => C.default.getChannelId(),
            []
          ),
          i = (0, r.useStateFromStores)(
            [d.default],
            () => (null != s ? d.default.getMode(s) : L.ChannelModes.VOICE),
            [s]
          ),
          u = (0, r.useStateFromStores)(
            [h.default],
            () => h.default.getAllApplicationStreamsForChannel(n).length > 0
          ),
          o = (0, r.useStateFromStores)(
            [m.default],
            () => m.default.getChannelId(),
            []
          ),
          c = (0, r.useStateFromStores)(
            [p.default],
            () => p.default.getMentionCount(n),
            [n]
          ),
          E = s === n,
          g = !1,
          I = !1;
        return (
          E &&
            ((g = i === L.ChannelModes.VOICE),
            (I = i === L.ChannelModes.VIDEO)),
          (0, l.jsx)(M, {
            ...e,
            ref: t,
            channelName: a,
            unread: c > 0,
            selected: o === n,
            badge: c,
            audio: g,
            video: I,
            stream: u,
            isCurrentUserInThisDMCall: E,
          })
        );
      });
    },
    363887: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("146606"),
        u = n("509043"),
        o = n("446674"),
        d = n("769846"),
        c = n("77078"),
        f = n("305961"),
        h = n("476263"),
        C = n("346955"),
        p = n("956089"),
        m = n("159885"),
        E = n("255991"),
        g = n("49111"),
        I = n("782340"),
        _ = n("849831");
      let S = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
        N = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE);
      function T(e) {
        let { guildId: t, animate: n } = e,
          a = (0, o.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(t),
            [t]
          );
        return null == a
          ? (0, l.jsx)("div", {
              className: _.guildIconUnavailable,
              children: "!",
            })
          : (0, l.jsx)(h.default, {
              guild: a,
              animate: n,
              size: h.default.Sizes.SMOL,
              className: _.guildIcon,
              tabIndex: -1,
            });
      }
      function A(e) {
        let t,
          n,
          { folderNode: s, hovered: i, expanded: o } = e,
          { color: d, children: c } = s,
          f = null != d ? d : g.DEFAULT_FOLDER_COLOR,
          h = c.map(e => e.id),
          [p, m] = a.useState(!1),
          [E, I] = a.useState(o),
          A = o ? 0 : -N,
          L = (0, r.useSpring)({
            transform: "translate3d(0, ".concat(A, "px, 0)"),
            config: { duration: S },
            onStart() {
              m(!0), I(o);
            },
            onRest() {
              m(!1), I(o);
            },
          }),
          v = p ? L : void 0;
        return (
          (p || E) &&
            (t = (0, l.jsx)(r.animated.div, {
              style: v,
              className: _.expandedFolderIconWrapper,
              children: (0, l.jsx)(C.default, {
                style: { color: (0, u.int2hex)(f) },
              }),
            })),
          (p || !E) &&
            (n = (0, l.jsx)(r.animated.div, {
              style: v,
              className: _.closedFolderIconWrapper,
              children: h
                .slice(0, 4)
                .map(e => (0, l.jsx)(T, { guildId: e, animate: i }, e)),
            })),
          (0, l.jsxs)("div", {
            "aria-hidden": !0,
            style: o ? void 0 : { backgroundColor: (0, u.int2rgba)(f, 0.4) },
            className: _.folderIconWrapper,
            children: [t, n],
          })
        );
      }
      function L(e) {
        let {
            folderNode: t,
            forceCircular: n,
            expanded: s,
            sorting: r,
            mediaState: u,
            mentionCount: o = 0,
            tooltipName: d,
            folderGroupId: f,
            folderIconContent: h,
            onClick: C,
            onContextMenu: m,
            onHoverChange: g,
            onKeyDown: S,
            treeItemProps: { onFocus: N, ...T },
          } = e,
          [L, v] = a.useState(!1),
          x = a.useCallback(() => {
            r || v(!0), null == g || g(!0);
          }, [r, g]),
          R = a.useCallback(() => {
            r || v(!1), null == g || g(!1);
          }, [r, g]),
          M = s || null == u ? null : (0, E.renderMediaBadge)(u),
          O = !s && o > 0 ? (0, E.renderMentionBadge)(o) : null;
        return (0, l.jsx)(c.BlobMask, {
          selected: !n,
          upperBadge: M,
          lowerBadge: O,
          lowerBadgeWidth: (0, p.getBadgeWidthForValue)(o),
          children: (0, l.jsx)(c.Clickable, {
            className: i(_.folder, { [_.hover]: L }),
            onClick: C,
            onContextMenu: m,
            onMouseEnter: x,
            onMouseLeave: R,
            onKeyDown: S,
            onFocus: N,
            "aria-label":
              I.default.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
                folderName: d,
                mentions: o,
              }),
            "aria-expanded": s,
            "aria-owns": f,
            focusProps: { enabled: !1 },
            ...T,
            role: "treeitem",
            children:
              null != h
                ? (0, l.jsx)("div", {
                    className: _.expandedFolderIconWrapper,
                    children: h,
                  })
                : (0, l.jsx)(A, { folderNode: t, hovered: L, expanded: s }),
          }),
        });
      }
    },
    945317: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("146606"),
        r = n("669491"),
        u = n("77078"),
        o = n("476263"),
        d = n("492950"),
        c = n("849831");
      function f(e) {
        let {
            guild: t,
            show: n,
            active: a,
            onAnimationStart: f,
            onAnimationRest: h,
          } = e,
          C = {},
          p = {};
        (C.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
          (p.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
        let m = (0, u.useToken)(r.default.unsafe_rawColors.BRAND_500).hex(),
          E = (0, u.useToken)(r.default.unsafe_rawColors.PRIMARY_630).hex();
        a &&
          null == t.icon &&
          ((C.backgroundColor = m), (p.backgroundColor = E));
        let g = (0, i.useTransition)(n, {
          from: C,
          enter: p,
          leave: C,
          config: { duration: 100 },
          onStart: f,
          onRest: h,
        });
        return (0, l.jsx)(l.Fragment, {
          children: g(
            (e, n, a) =>
              n &&
              (0, l.jsx)(
                "div",
                {
                  className: s(c.folder, c.hover),
                  children: (0, l.jsx)("div", {
                    className: c.folderIconWrapper,
                    children: (0, l.jsxs)("div", {
                      className: c.closedFolderIconWrapper,
                      children: [
                        (0, l.jsx)(i.animated.div, {
                          className: c.folderIconPreview,
                          style: e,
                          children: (0, l.jsx)(o.default, {
                            guild: t,
                            size: o.default.Sizes.SMOL,
                            className: c.guildIcon,
                          }),
                        }),
                        (0, l.jsx)(d.default, { className: c.miniPlaceholder }),
                      ],
                    }),
                  }),
                },
                a.key
              )
          ),
        });
      }
    },
    472942: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
          FolderEndDropTarget: function () {
            return N;
          },
          PlaceholderDropTarget: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        u = n.n(r),
        o = n("476042"),
        d = n("851387"),
        c = n("599110"),
        f = n("674644"),
        h = n("829562"),
        C = n("49111"),
        p = n("782340"),
        m = n("553718");
      function E(e) {
        let t = a.useRef(null),
          n = e.map(e => e[0]);
        return (
          a.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
              let n = t.current;
              if (null != n)
                for (let [t, l] of e)
                  t ? n.classList.add(l) : n.classList.remove(l);
            });
            return () => cancelAnimationFrame(n);
          }, n),
          t
        );
      }
      function g(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return (
          u(
            t.type !== f.GuildsNodeType.ROOT,
            "[GuildDropTarget] Tried using a root node as a drop target."
          ),
          {
            accept: e,
            canDrop: e =>
              e.nodeId !== t.id &&
              (!l ||
                e.type !== f.GuildsNodeType.FOLDER ||
                t.type !== f.GuildsNodeType.FOLDER) &&
              (e.type !== f.GuildsNodeType.FOLDER || null == t.parentId) &&
              !0,
            drop(e) {
              let { nodeId: a } = e;
              l &&
                t.type !== f.GuildsNodeType.FOLDER &&
                c.default.track(C.AnalyticEvents.GUILD_FOLDER_CREATED),
                d.default.moveById(a, t.id, n, l);
            },
            collect: e => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
          }
        );
      }
      function I(e) {
        let { name: t, targetNode: n, combine: s, below: r } = e,
          u = a.useMemo(
            () => g([f.GuildsNodeType.GUILD, f.GuildsNodeType.FOLDER], n, r, s),
            [n, r, s]
          ),
          [{ canDrop: d, isOver: c }, h] = (0, o.useDrop)(u),
          C = E([
            [d, m.autoPointerEvents],
            [c, m.dragOver],
          ]);
        return (0, l.jsx)("div", {
          ref: e => {
            (C.current = e), h(e);
          },
          "data-dnd-name": p.default.Messages.DND_DROP_ABOVE.format({
            itemName: t,
          }),
          className: i(m.target),
        });
      }
      function _(e) {
        let { name: t, targetNode: n, onDragOverChanged: s } = e,
          [{ canDrop: r, isOver: u }, d] = (0, o.useDrop)(() =>
            g([f.GuildsNodeType.GUILD], n, !0, !0)
          );
        a.useEffect(() => {
          null == s || s(u);
        }, [s, u]);
        let c = E([
          [r, m.autoPointerEvents],
          [u, m.dragOver],
        ]);
        return (0, l.jsx)(h.default, {
          text: t,
          shouldShow: u,
          forceOpen: u,
          disableWrapper: !0,
          tooltipClass: m.centerTargetTooltip,
          children: (0, l.jsx)("div", {
            ref: e => {
              (c.current = e), d(e);
            },
            "data-dnd-name": p.default.Messages.DND_DROP_COMBINE.format({
              itemName: t,
            }),
            className: i(m.centerTarget, {}),
          }),
        });
      }
      var S = a.memo(function (e) {
        let {
            name: t,
            targetNode: n,
            noCombine: a = !1,
            below: s = !1,
            onDragOverChanged: i,
          } = e,
          r = !a && null == n.parentId;
        return (0, l.jsxs)("div", {
          className: m.wrapper,
          "aria-hidden": !0,
          children: [
            (0, l.jsx)(I, { name: t, targetNode: n, below: s }),
            r
              ? (0, l.jsx)(_, { name: t, targetNode: n, onDragOverChanged: i })
              : null,
          ],
        });
      });
      function N(e) {
        let { name: t, targetNode: n } = e,
          [{ canDrop: a, isOver: s }, r] = (0, o.useDrop)(() =>
            g([f.GuildsNodeType.GUILD], n, !0, !0)
          ),
          u = E([[s, m.wrapperOver]]),
          d = E([
            [s, m.dragOver],
            [a, m.autoPointerEvents],
          ]);
        return (0, l.jsx)("div", {
          ref: u,
          className: i(m.folderEndWrapper),
          "aria-hidden": !0,
          children: (0, l.jsx)("div", {
            className: m.folderTarget,
            children: (0, l.jsx)("div", {
              ref: e => {
                (d.current = e), r(e);
              },
              "aria-label": "At end of ".concat(t),
              className: i(m.target),
            }),
          }),
        });
      }
      function T(e) {
        let { children: t } = e,
          [, n] = (0, o.useDrop)({ accept: [] });
        return (0, l.jsx)("div", { ref: n, children: t });
      }
    },
    696336: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return er;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("917351"),
        u = n.n(r),
        o = n("817736"),
        d = n("90915"),
        c = n("974667"),
        f = n("118810"),
        h = n("446674"),
        C = n("233736"),
        p = n("862337"),
        m = n("77078"),
        E = n("406189"),
        g = n("302437"),
        I = n("812204"),
        _ = n("685665"),
        S = n("191145"),
        N = n("15131"),
        T = n("480376"),
        A = n("205550"),
        L = n("267567"),
        v = n("393027"),
        x = n("162805"),
        R = n("26989"),
        M = n("305961"),
        O = n("677099"),
        y = n("697218"),
        D = n("773336"),
        b = n("299039"),
        j = n("439932"),
        G = n("674644"),
        U = n("533669"),
        P = n("270382"),
        w = n("777778"),
        F = n("648647"),
        B = n("982360"),
        V = n("628570"),
        H = n("283294"),
        k = n("822485"),
        Y = n("798573"),
        K = n("795853"),
        W = n("357762"),
        Z = n("504957"),
        z = n("199218"),
        X = n("624531"),
        Q = n("785343"),
        J = n("22567"),
        q = n("49111"),
        $ = n("782340"),
        ee = n("876879");
      let et = 56,
        en = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
        el = et - 16,
        ea = en + 10;
      class es {
        setGuildsTree(e) {
          this.guildsTree = e;
        }
        constructor(e, t, n) {
          (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.scrollerRef = a.createRef()),
            (this.guildDiscoveryRef = a.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new p.Timeout()),
            (this.isScrolling = !1),
            (this.scrollToGuild = (e, t) => {
              let n = this.scrollerRef.current;
              if (null == n) return;
              if (
                (null == e &&
                  window.location.pathname.startsWith(
                    q.Routes.GUILD_DISCOVERY
                  )) ||
                e === q.ViewHistoryKeys.SERVER_DISCOVERY_BADGE ||
                e === q.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE
              ) {
                let e = (0, o.findDOMNode)(this.guildDiscoveryRef.current);
                (0, f.isElement)(e, HTMLElement)
                  ? n.scrollIntoViewNode({ node: e, animate: t, padding: 8 })
                  : n.scrollTo({ to: 0, animate: t });
                return;
              }
              if (null == e) {
                n.scrollTo({ to: 0, animate: t });
                return;
              }
              let l = this.nodeRefs[e];
              for (; null == l; ) {
                let t = this.guildsTree.getNode(e);
                if ((null == t ? void 0 : t.parentId) == null) break;
                l = this.nodeRefs[t.parentId];
              }
              null != l && (0, f.isElement)(l)
                ? n.scrollIntoViewNode({ node: l, animate: t, padding: 8 })
                : n.scrollTo({ to: 0, animate: t });
            }),
            (this.handleJumpToGuild = e => {
              this.scrollToGuild(e, !0);
            }),
            (this.scrollTo = e => {
              var t;
              null === (t = this.scrollerRef.current) ||
                void 0 === t ||
                t.scrollTo(e);
            }),
            (this.isItemVisible = (e, t, n) => {
              let l = this.scrollerRef.current;
              if (null == l) return !1;
              let a = n.findIndex(t =>
                "string" == typeof t || null == t ? t === e : t.includes(e)
              );
              if (a < 0) return !1;
              let s = et * a + ea;
              !t && (s += el);
              let i = l.getScrollerState();
              return (
                (!t && !!(s >= i.scrollTop)) ||
                (!!t && !!(s + et <= i.scrollTop + i.offsetHeight)) ||
                !1
              );
            }),
            (this.handleScroll = () => {
              !this.isScrolling && this.setScrolling(!0),
                this.timeout.start(200, () => this.setScrolling(!1)),
                this._handleScroll();
            }),
            (this._handleScroll = u.debounce(() => {
              let e = this.scrollerRef.current;
              if (null == e) return;
              let { scrollTop: t } = e.getScrollerState();
              E.default.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this.setNodeRef = (e, t) => {
              this.nodeRefs[e] = t;
            });
        }
      }
      function ei(e) {
        let {
            disableAppDownload: t = D.isPlatformEmbedded,
            isOverlay: n = !1,
            className: s,
            themeOverride: r,
          } = e,
          [u] = (0, h.useStateFromStoresArray)([O.default], () => {
            let e = O.default.getGuildsTree();
            return [e, e.version];
          }),
          o = (0, h.useStateFromStores)([L.default], () =>
            L.default.lurkingGuildIds()
          ),
          f = a.useMemo(() => (n ? [] : o), [o, n]),
          C = (0, h.useStateFromStoresArray)([M.default, R.default], () =>
            b.default
              .keys(M.default.getGuilds())
              .filter(e => R.default.isCurrentUserGuest(e))
          ),
          E = f.concat(C),
          g = (0, h.useStateFromStores)([y.default], () => {
            var e;
            return null === (e = y.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.isStaff();
          }),
          et = (0, h.useStateFromStores)([S.default], () =>
            S.default.isFullscreenInContext()
          ),
          en = (0, h.useStateFromStores)([M.default], () =>
            M.default.getGeoRestrictedGuilds()
          ),
          [el, ea] = a.useState(!1),
          ei = a.useCallback(() => ea(!0), []),
          er = a.useCallback(() => ea(!1), []),
          eu = a.useRef(!1),
          [eo] = a.useState(() => new p.Timeout()),
          ed = a.useRef(null),
          ec = a.useRef(null),
          { ref: ef, ...eh } = (0, c.useListContainerProps)(),
          eC = (0, m.useFocusJumpSection)(),
          [ep, em] = a.useState(!1),
          [eE] = a.useState(
            () =>
              new es(u, em, () => {
                var e, t;
                null === (e = ed.current) || void 0 === e || e.calculateState(),
                  null === (t = ec.current) ||
                    void 0 === t ||
                    t.calculateState();
              })
          ),
          { AnalyticsLocationProvider: eg } = (0, _.default)(
            I.default.GUILDS_LIST
          ),
          { pathname: eI } = (0, d.useLocation)(),
          e_ = eI.startsWith(q.Routes.GUILD_DISCOVERY),
          eS = eI.startsWith(q.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        a.useLayoutEffect(() => {
          if (!eu.current) {
            if (0 !== u.size) {
              if (e_) eE.scrollToGuild(null, !1);
              else {
                let { scrollTop: e } = x.default.getGuildListDimensions();
                eE.scrollTo({ to: e, animate: !1 });
              }
              return (eu.current = !0), () => eo.stop();
            }
          }
        }, []),
          a.useEffect(() => {
            if ((eE.setGuildsTree(u), eu.current || 0 === u.size)) return;
            let e = v.default.getState().guildId;
            eE.scrollToGuild(e, !1);
            let t = null,
              n = v.default.subscribe(e => {
                let { guildId: n } = e;
                n !== t && ((t = n), eE.scrollToGuild(t, !1));
              });
            return n;
          }, [u, eE]),
          (0, U.default)(eE.scrollToGuild);
        let eN = (0, A.useEligibleForGameRecommendations)(),
          eT = u.getRoots(),
          eA = (0, N.default)(),
          eL = en.map(e =>
            (0, l.jsx)(
              H.default,
              { id: e.id, name: e.name, icon: e.icon },
              e.id
            )
          );
        return (0, l.jsx)(eg, {
          children: (0, l.jsx)("nav", {
            className: i(ee.wrapper, s, (0, j.getThemeClass)(r), {
              [ee.hidden]: et,
            }),
            "aria-label": $.default.Messages.GUILDS_BAR_A11Y_LABEL,
            children: (0, l.jsxs)("ul", {
              ref: ef,
              ...eh,
              ...eC,
              role: "tree",
              className: ee.tree,
              children: [
                (0, l.jsx)(P.default, {
                  ref: ed,
                  isVisible: eE.isItemVisible,
                  onJumpTo: eE.handleJumpToGuild,
                  className: ee.unreadMentionsIndicatorTop,
                  barClassName: ee.unreadMentionsBar,
                }),
                (0, l.jsxs)(m.AdvancedScrollerNone, {
                  className: i({ [ee.scroller]: !0, [ee.scrolling]: ep }),
                  ref: eE.scrollerRef,
                  onScroll: eE.handleScroll,
                  children: [
                    (0, l.jsx)(Y.HomeButton, {}),
                    eA ? (0, l.jsx)(T.default, {}) : null,
                    (0, l.jsx)(B.default, {}),
                    (0, l.jsx)(K.default, { isOnHubVerificationRoute: eS }),
                    (0, l.jsx)(w.default, {}),
                    E.map(e => (0, l.jsx)(J.default, { guildId: e }, e)),
                    g ? (0, l.jsx)(Q.default, {}) : null,
                    !n && eN
                      ? (0, l.jsx)(k.default, {
                          ref: eE.guildDiscoveryRef,
                          selected: e_,
                          tooltip: $.default.Messages.GUILD_DISCOVERY_TOOLTIP,
                        })
                      : null,
                    (0, l.jsx)(W.default, {}),
                    (0, l.jsx)("div", {
                      "aria-label": $.default.Messages.SERVERS,
                      children: eT.map(function e(t) {
                        switch (t.type) {
                          case G.GuildsNodeType.FOLDER:
                            return (0, l.jsx)(
                              z.default,
                              {
                                folderNode: t,
                                setNodeRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: el,
                                onDragStart: ei,
                                onDragEnd: er,
                                renderChildNode: e,
                              },
                              t.id
                            );
                          case G.GuildsNodeType.GUILD:
                            return (0, l.jsx)(
                              X.default,
                              {
                                guildNode: t,
                                setRef: eE.setNodeRef,
                                draggable: !0,
                                sorting: el,
                                onDragStart: ei,
                                onDragEnd: er,
                              },
                              t.id
                            );
                          default:
                            return null;
                        }
                      }),
                    }),
                    eL,
                    n
                      ? null
                      : (0, l.jsx)(V.default, {
                          disableTooltip: f.length > 0,
                          lastTargetNode: eT[eT.length - 1],
                        }),
                    n || eN
                      ? null
                      : (0, l.jsx)(k.default, {
                          ref: eE.guildDiscoveryRef,
                          selected: e_,
                        }),
                    (0, l.jsx)(Z.default, {}),
                    t
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(W.default, {}),
                            (0, l.jsx)(F.default, {}),
                          ],
                        }),
                  ],
                }),
                (0, l.jsx)(P.default, {
                  reverse: !0,
                  ref: ec,
                  isVisible: eE.isItemVisible,
                  onJumpTo: eE.handleJumpToGuild,
                  className: ee.unreadMentionsIndicatorBottom,
                  barClassName: ee.unreadMentionsBar,
                }),
              ],
            }),
          }),
        });
      }
      var er = a.memo(
        function (e) {
          let t = (0, g.default)("guildsnav");
          return (0, l.jsx)(c.ListNavigatorProvider, {
            navigator: t,
            children: (0, l.jsx)(ei, { ...e }),
          });
        },
        (e, t) => !1 === t.isVisible || (0, C.default)(e, t)
      );
    },
    492950: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("587974"),
        r = n("160065");
      function u(e) {
        let { className: t } = e;
        return (0, l.jsx)(i.default, {
          mask: i.default.Masks.SQUIRCLE,
          className: s(t, r.placeholderMask),
          width: 48,
          height: 48,
          style: { display: "block" },
          children: (0, l.jsx)("div", { className: r.dragInner }),
        });
      }
    },
    270382: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("383173"),
        r = n("952451"),
        u = n("336376"),
        o = n("677099"),
        d = n("402088"),
        c = n("471671"),
        f = n("357007"),
        h = n("117362"),
        C = n("49111"),
        p = n("782340");
      let m = "app-download-item",
        E = "add-server-item";
      function g() {
        return !1;
      }
      function I(e) {
        var t;
        let n = r.default.getMutableGuildStates();
        return (
          (e === C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE &&
            !d.default.hasViewed(C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)) ||
          (e !== m &&
            e !== E &&
            (null === (t = n[null != e ? e : "null"]) || void 0 === t
              ? void 0
              : t.mentionCount) > 0)
        );
      }
      let _ = (0, h.cachedFunction)((e, t, n) => [
        "null",
        ...t,
        ...e,
        E,
        C.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE,
        m,
      ]);
      var S = a.forwardRef(function (e, t) {
        let n = (0, s.useStateFromStoresArray)(
            [o.default, u.default, r.default],
            () =>
              _(
                o.default.getGuildFolders(),
                u.default.getUnreadPrivateChannelIds(),
                r.default.getStoreChangeSentinel()
              )
          ),
          a = (0, s.useStateFromStores)([c.default], () =>
            c.default.isFocused()
          ),
          d = (0, s.useStateFromStores)([i.default], () =>
            i.default.getExpandedFolders()
          );
        return (0, l.jsx)(f.default, {
          ...e,
          ref: t,
          items: n,
          isUnread: g,
          textUnread: p.default.Messages.NEW,
          textMention: p.default.Messages.NEW,
          isMentioned: I,
          animate: a,
          expandedFolders: d,
        });
      });
    },
    777778: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("843762");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("266491"),
        r = n("274870"),
        u = n("42203"),
        o = n("336376"),
        d = n("945956"),
        c = n("543785");
      function f() {
        (0, s.useStateFromStores)([u.default], () =>
          u.default.getPrivateChannelsVersion()
        );
        let e = u.default.getMutablePrivateChannels(),
          t = (0, s.useStateFromStoresArray)([o.default], () =>
            o.default.getUnreadPrivateChannelIds()
          ),
          { selectedVoiceGuildId: n, selectedVoiceChannelId: f } = (0,
          s.useStateFromStoresObject)([d.default], () => ({
            selectedVoiceGuildId: d.default.getGuildId(),
            selectedVoiceChannelId: d.default.getChannelId(),
          })),
          h = t.map(t => {
            let n = e[t];
            return null == n || n.id === f || n.isBroadcastChannel()
              ? null
              : (0, l.jsx)(c.default, { channel: n }, n.id);
          }),
          C = null == n && null != f ? e[f] : null,
          p = (0, r.useIsBroadcastingGDM)(null == C ? void 0 : C.id);
        return (
          null != C &&
            !p &&
            h.unshift((0, l.jsx)(c.default, { channel: C }, C.id)),
          (0, l.jsx)(i.TransitionGroup, { component: a.Fragment, children: h })
        );
      }
    },
    648647: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("195812"),
        i = n("966270"),
        r = n("782340");
      let u = "DOWNLOAD_APPS";
      function o() {
        let e = (0, a.useModalsStore)(e => (0, a.hasModalOpenSelector)(e, u));
        return (0, l.jsx)(i.default, {
          id: "app-download-button",
          onClick: () => {
            (0, a.openModalLazy)(
              async () => {
                let { default: e } = await n
                  .el("649486")
                  .then(n.bind(n, "649486"));
                return t => (0, l.jsx)(e, { source: "Guilds", ...t });
              },
              { modalKey: u }
            );
          },
          selected: e,
          tooltip: r.default.Messages.DOWNLOAD_APPS,
          icon: s.default,
        });
      }
    },
    982360: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("987317"),
        r = n("9759"),
        u = n("42203"),
        o = n("660478"),
        d = n("18494"),
        c = n("697218"),
        f = n("476765"),
        h = n("774223"),
        C = n("158998"),
        p = n("966270"),
        m = n("255991"),
        E = n("782340");
      function g() {
        var e;
        let t = (0, f.useUID)(),
          [n, g] = (0, a.useStateFromStoresArray)(
            [d.default, u.default],
            () => [
              u.default.getChannel(d.default.getVoiceChannelId()),
              d.default.getCurrentlySelectedChannelId(null),
            ]
          ),
          I = (0, a.useStateFromStores)([o.default], () =>
            null != n ? o.default.getMentionCount(n.id) : 0
          ),
          _ = (0, a.useStateFromStores)([c.default], () =>
            c.default.getUser(null == n ? void 0 : n.ownerId)
          ),
          S =
            null !== (e = C.default.getGlobalName(_)) && void 0 !== e
              ? e
              : C.default.getUserTag(_),
          { canViewBroadcasts: N } = r.default.useExperiment(
            { location: "broadcast_button_guilds_bar_no_track" },
            { autoTrackExposure: !1 }
          ),
          T = null == n ? void 0 : n.isBroadcastChannel(),
          A = T && g === (null == n ? void 0 : n.id);
        return T && N
          ? (0, l.jsx)(p.default, {
              id: t,
              onClick: () => {
                T && null != n && i.default.selectPrivateChannel(n.id);
              },
              icon: h.default,
              tooltip:
                null != S
                  ? E.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                      name: S,
                    })
                  : void 0,
              selected: A,
              upperBadge: (0, l.jsx)(s.Avatar, {
                size: s.AvatarSizes.SIZE_16,
                src: null == _ ? void 0 : _.getAvatarURL(null, 16),
                "aria-label": S,
              }),
              lowerBadge: I > 0 ? (0, m.renderMentionBadge)(I) : null,
            })
          : null;
      }
    },
    966270: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("974667"),
        u = n("77078"),
        o = n("15738"),
        d = n("610898"),
        c = n("829562"),
        f = n("25998");
      let h = a.forwardRef(function (e, t) {
        let {
            id: n,
            onClick: s,
            onContextMenu: h,
            icon: C,
            selected: p,
            tooltip: m,
            upperBadge: E,
            lowerBadge: g,
            lowerBadgeWidth: I,
            showPill: _ = !0,
            className: S,
            "aria-label": N,
            children: T,
            onMouseEnter: A,
            onMouseLeave: L,
            onMouseDown: v,
          } = e,
          x = (0, r.useTreeItem)(n),
          [R, M] = a.useState(!1),
          O = "string" == typeof m && null == N ? m : N;
        return (0, l.jsxs)(d.ListItem, {
          children: [
            _
              ? (0, l.jsx)("div", {
                  className: f.pill,
                  children: (0, l.jsx)(o.default, { hovered: R, selected: p }),
                })
              : null,
            (0, l.jsx)(c.default, {
              text: m,
              selected: p,
              children: (0, l.jsx)(u.BlobMask, {
                className: f.circleButtonMask,
                selected: p || R,
                upperBadge: E,
                lowerBadge: g,
                lowerBadgeWidth: I,
                children: (0, l.jsx)(u.Clickable, {
                  innerRef: t,
                  onMouseEnter: () => {
                    null == A || A(), M(!0);
                  },
                  onMouseLeave: () => {
                    null == L || L(), M(!1);
                  },
                  onMouseDown: v,
                  className: i(f.circleIconButton, S, { [f.selected]: p || R }),
                  onClick: s,
                  "aria-label": O,
                  onContextMenu: h,
                  focusProps: { enabled: !1 },
                  ...x,
                  children:
                    null != C &&
                    (0, l.jsx)(C, {
                      className: f.circleIcon,
                      color: "currentColor",
                    }),
                }),
              }),
            }),
            T,
          ],
        });
      });
      var C = h;
    },
    628570: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("375022"),
        r = n("77078"),
        u = n("272030"),
        o = n("685665"),
        d = n("616265"),
        c = n("141254"),
        f = n("116616"),
        h = n("12896"),
        C = n("305961"),
        p = n("697218"),
        m = n("151185"),
        E = n("472942"),
        g = n("966270"),
        I = n("49111"),
        _ = n("243338"),
        S = n("782340"),
        N = n("853708");
      let T = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function A(e) {
        (0, u.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("946661").then(n.bind(n, "946661"));
          return t => (0, l.jsx)(e, { ...t });
        });
      }
      function L(e) {
        let { disableTooltip: t, lastTargetNode: n } = e,
          u = (0, s.useStateFromStores)([C.default], () =>
            C.default.getGuilds()
          ),
          L = a.useMemo(() => Object.values(u), [u]),
          v = (0, s.useStateFromStores)([p.default], () =>
            p.default.getCurrentUser()
          ),
          x = a.useMemo(() => L.some(e => e.isOwner(v)), [L, v]),
          R = (0, r.useModalsStore)(e =>
            (0, r.hasModalOpenSelector)(e, _.CREATE_GUILD_MODAL_KEY)
          ),
          { analyticsLocations: M } = (0, o.default)(),
          O = (0, r.useRedesignIconContext)().enabled,
          y = (0, l.jsx)(g.default, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
              (0, c.isAtGuildCapAndNonPremium)()
                ? (0, f.default)({
                    analyticsSource: {
                      page: I.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL,
                    },
                    analyticsLocation: {
                      page: I.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL,
                      section: I.AnalyticsSections.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: M,
                  })
                : d.default.openCreateGuildModal({ location: "Guild List" });
            },
            selected: R,
            onContextMenu: A,
            tooltip: S.default.Messages.ADD_A_SERVER,
            icon: O ? i.PlusMediumIcon : m.default,
          });
        return t
          ? y
          : (0, l.jsx)("div", {
              className: N.tutorialContainer,
              children: (0, l.jsxs)(h.default, {
                tutorialId: x ? "create-more-servers" : "create-first-server",
                inlineSpecs: T,
                position: "right",
                children: [
                  y,
                  null != n &&
                    (0, l.jsx)(E.default, {
                      name: S.default.Messages.DND_END_OF_LIST,
                      targetNode: n,
                      below: !0,
                      noCombine: !0,
                    }),
                ],
              }),
            });
      }
    },
    797438: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("476042"),
        u = n("146606"),
        o = n("974667"),
        d = n("769846"),
        c = n("452804"),
        f = n("677099"),
        h = n("15738"),
        C = n("159885"),
        p = n("674644"),
        m = n("363887"),
        E = n("472942"),
        g = n("492950"),
        I = n("610898"),
        _ = n("829562"),
        S = n("782340"),
        N = n("849831"),
        T = n("99725");
      let A = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
        L = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE),
        v = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_MARGIN);
      function x(e) {
        let {
            folderNode: t,
            setNodeRef: n,
            selected: s,
            expanded: d,
            mediaState: C,
            mentionCount: x = 0,
            unread: R = !1,
            defaultFolderName: M,
            useCircleMask: O = !1,
            draggable: y = !1,
            sorting: D = !1,
            onDragStart: b,
            onDragEnd: j,
            onExpandCollapse: G,
            onContextMenu: U,
            renderChildNode: P,
            folderIconContent: w,
          } = e,
          { id: F, name: B, children: V } = t,
          [H, k] = a.useState(!1),
          [Y, K] = a.useState(!1),
          W = H || Y;
        a.useEffect(() => {
          D && k(!1);
        }, [D]);
        let [{ dragging: Z }, z] = (0, r.useDrag)({
            type: p.GuildsNodeType.FOLDER,
            item: () => (
              null == b || b(), { type: p.GuildsNodeType.FOLDER, nodeId: t.id }
            ),
            end() {
              null == j || j(),
                (0, c.saveGuildFolders)(f.default.getCompatibleGuildFolders());
            },
            collect: e => ({ dragging: e.isDragging() }),
          }),
          X = a.useCallback(e => {
            K(e);
          }, []),
          Q = a.useCallback(
            e => {
              (("ArrowRight" === e.key && !d) ||
                ("ArrowLeft" === e.key && d)) &&
                G();
            },
            [G, d]
          ),
          J =
            null != B && "" !== B
              ? B
              : null != M && "" !== M
                ? M
                : S.default.Messages.SERVER_FOLDER_PLACEHOLDER,
          q = (0, o.useTreeItem)("".concat(F)),
          $ = "folder-items-".concat(F),
          ee = V.length * (L + v),
          et = (0, u.useTransition)(!Z && d, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: A },
          }),
          en = a.useCallback(e => (null == n ? void 0 : n(F, e)), [n, F]),
          el = (0, l.jsxs)(I.ListItem, {
            children: [
              (0, l.jsx)(h.default, {
                disabled: Z || d,
                hovered: H,
                selected: s,
                unread: R,
                className: T.pill,
              }),
              (0, l.jsx)(_.default, {
                text: J,
                disabled: D,
                selected: s,
                disableWrapper: !0,
                children: (0, l.jsx)("div", {
                  ref: y ? z : void 0,
                  className: i({ [T.wobble]: !Z && Y && !d }),
                  "data-dnd-name": J,
                  children: Z
                    ? (0, l.jsx)(g.default, {})
                    : (0, l.jsx)(m.default, {
                        folderNode: t,
                        expanded: d,
                        forceCircular: O,
                        sorting: D,
                        mediaState: C,
                        mentionCount: x,
                        tooltipName: J,
                        folderGroupId: $,
                        onClick: G,
                        onContextMenu: U,
                        onHoverChange: k,
                        onKeyDown: Q,
                        treeItemProps: q,
                        folderIconContent: w,
                      }),
                }),
              }),
              y
                ? (0, l.jsx)(E.default, {
                    name: J,
                    targetNode: t,
                    onDragOverChanged: X,
                  })
                : null,
            ],
          });
        return (0, l.jsxs)("div", {
          ref: en,
          className: N.wrapper,
          children: [
            !Z &&
              (0, l.jsx)("span", {
                className: i(N.expandedFolderBackground, {
                  [N.collapsed]: !d,
                  [N.hover]: W,
                }),
              }),
            el,
            et((e, t, n) => {
              let { key: a } = n;
              return (
                t &&
                (0, l.jsx)(
                  u.animated.ul,
                  {
                    id: $,
                    style: { height: e.height.to(e => e * ee) },
                    className: N.expandedGuilds,
                    role: "group",
                    children: V.map(P),
                  },
                  a
                )
              );
            }),
            y && d
              ? (0, l.jsx)(E.FolderEndDropTarget, { name: J, targetNode: t })
              : null,
          ],
        });
      }
    },
    283294: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("104359"),
        r = n("956089"),
        u = n("108189"),
        o = n("315102"),
        d = n("610898"),
        c = n("829562"),
        f = n("991674");
      function h(e) {
        let [t, h] = a.useState(!1);
        return (0, l.jsx)(d.ListItem, {
          children: (0, l.jsx)(c.default, {
            text: e.name,
            children: (0, l.jsx)(s.BlobMask, {
              className: f.circleIconButton,
              selected: t,
              lowerBadge: (0, l.jsx)(r.IconBadge, {
                icon: i.default,
                disableColor: !0,
                className: f.geoRestrictedBadge,
              }),
              children: (0, l.jsx)(u.default, {
                name: e.name,
                onMouseEnter: () => {
                  h(!0);
                },
                onMouseLeave: () => {
                  h(!1);
                },
                onClick: () => {
                  (0, s.openModalLazy)(async () => {
                    let { default: t } = await n
                      .el("757973")
                      .then(n.bind(n, "757973"));
                    return n =>
                      (0, l.jsx)(t, { name: e.name, guildId: e.id, ...n });
                  });
                },
                icon:
                  null != e.icon
                    ? o.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        canAnimate: !1,
                        size: 42,
                      })
                    : null,
              }),
            }),
          }),
        });
      }
    },
    822485: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("340626"),
        i = n("393414"),
        r = n("627490"),
        u = n("966270"),
        o = n("49111"),
        d = n("447621"),
        c = n("782340");
      function f() {
        let e = window.location.pathname.startsWith(o.Routes.GUILD_DISCOVERY);
        e &&
          ((0, s.clearSearch)(),
          (0, s.selectCategory)(d.DISCOVERY_ALL_CATEGORIES_ID, !0));
        let t = (0, i.getHistory)(),
          n = t.location.search;
        (0, i.transitionTo)(o.Routes.GUILD_DISCOVERY, { search: n });
      }
      let h = a.forwardRef(function (e, t) {
        let { selected: n, tooltip: a } = e;
        return (0, l.jsx)(u.default, {
          id: "guild-discover-button",
          ref: t,
          onClick: f,
          selected: n,
          tooltip: null != a ? a : c.default.Messages.GUILD_DISCOVERY_TOOLTIP,
          icon: r.default,
        });
      });
      var C = h;
    },
    198442: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("476042"),
        u = n("974667"),
        o = n("65597"),
        d = n("862337"),
        c = n("77078"),
        f = n("450911"),
        h = n("272030"),
        C = n("452804"),
        p = n("393414"),
        m = n("239380"),
        E = n("26989"),
        g = n("677099"),
        I = n("15738"),
        _ = n("956089"),
        S = n("108189"),
        N = n("674644"),
        T = n("945317"),
        A = n("472942"),
        L = n("423080"),
        v = n("492950"),
        x = n("610898"),
        R = n("255991"),
        M = n("49111"),
        O = n("782340"),
        y = n("99725");
      let D = {
        analyticsSource: {
          page: M.AnalyticsPages.GUILD_CHANNEL,
          section: M.AnalyticsSections.CHANNEL_LIST,
          object: M.AnalyticsObjects.CHANNEL,
        },
      };
      function b(e, t) {
        (0, h.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("374705").then(n.bind(n, "374705"));
          return n => (0, l.jsx)(e, { ...n, guild: t });
        });
      }
      var j = a.memo(function (e) {
        var t, n, s, h, j;
        let {
            guildNode: G,
            setRef: U,
            onDragStart: P,
            onDragEnd: w,
            route: F,
            guild: B,
            animatable: V,
            selected: H = !1,
            unread: k = !1,
            mediaState: Y,
            unavailable: K = !1,
            badge: W = 0,
            contextMenu: Z = b,
            draggable: z = !1,
            sorting: X = !1,
            preloadOnClick: Q = !0,
            guildJoinRequestStatus: J,
          } = e,
          { id: q, parentId: $ } = G,
          ee =
            null !== (t = e.upperBadge) && void 0 !== t
              ? t
              : K
                ? (0, R.renderUnavailableBadge)()
                : null != Y
                  ? (0, R.renderMediaBadge)(Y)
                  : void 0,
          et = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
        null == et && W > 0
          ? (et =
              null !== (s = (0, R.renderMentionBadge)(W)) && void 0 !== s
                ? s
                : void 0)
          : null == et &&
            null != J &&
            (et =
              null !==
                (h = (0, R.renderGuildJoinRequestBadge)({
                  guildJoinRequestStatus: J,
                })) && void 0 !== h
                ? h
                : void 0);
        let en =
            null !== (j = e.lowerBadgeWidth) && void 0 !== j
              ? j
              : (0, _.getBadgeWidthForValue)(W),
          [{ dragging: el }, ea] = (0, r.useDrag)({
            type: N.GuildsNodeType.GUILD,
            item: () => (
              requestAnimationFrame(() => {
                null == P || P();
              }),
              { type: G.type, nodeId: G.id }
            ),
            end() {
              null == w || w(),
                (0, C.saveGuildFolders)(g.default.getCompatibleGuildFolders());
            },
            collect: e => ({ dragging: e.isDragging() }),
          }),
          es = (0, u.useTreeItem)(null != q ? q : M.EMPTY_STRING_SNOWFLAKE_ID),
          [ei, er] = a.useState(!1),
          eu = !X && ei,
          [eo, ed] = a.useState(!1),
          [ec, ef] = a.useState(!1),
          [eh] = a.useState(() => new d.DelayedCall(70, () => ef(!0)));
        a.useEffect(() => () => eh.cancel(), [eh]);
        let eC = a.useCallback(() => {
            if (null != F) {
              (0, p.transitionTo)(F, { state: D });
              return;
            }
            (0, m.transitionToGuild)(q, { state: D });
          }, [q, F]),
          ep = a.useCallback(() => {
            if (null != F || null == B || K || !Q) return;
            let e = (0, m.getChannelIdForGuildTransition)(B.id);
            null != e && f.default.preload(B.id, e);
          }, [F, B, K, Q]),
          em = (0, o.default)([E.default], () =>
            E.default.isCurrentUserGuest(q)
          ),
          eE = a.useCallback(
            e => {
              null != B && !em && Z(e, B);
            },
            [B, Z, em]
          ),
          eg = a.useCallback(
            e => {
              if ("ArrowLeft" === e.key && null != $) {
                var t;
                null ===
                  (t = document.querySelector(
                    "[aria-owns=folder-items-".concat($, "]")
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [$]
          ),
          eI = a.useCallback(
            e => {
              if (e) {
                eh.delay();
                return;
              }
              eh.cancel(), ef(!1);
            },
            [eh]
          ),
          e_ = a.useCallback(
            e => {
              null == U || U(q, e);
            },
            [q, U]
          );
        if (null == B) return null;
        let eS =
            ec || eo
              ? (0, l.jsx)(T.default, {
                  guild: B,
                  show: ec,
                  active: H,
                  onAnimationStart: function () {
                    ed(ec);
                  },
                  onAnimationRest: function () {
                    ec || ed(!1);
                  },
                })
              : (0, l.jsx)(S.default, {
                  ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format(
                    { guildName: B.toString(), mentions: W }
                  ),
                  name: B.toString(),
                  onClick: eC,
                  onMouseEnter: function () {
                    X || er(!0);
                  },
                  onMouseLeave: function () {
                    X || er(!1);
                  },
                  onMouseDown: ep,
                  onContextMenu: eE,
                  onKeyDown: eg,
                  icon: B.getIconURL(96, eu && V),
                  selected: H || eu,
                  ...es,
                  role: "treeitem",
                }),
          eN = el
            ? (0, l.jsx)(A.PlaceholderDropTarget, {
                children: (0, l.jsx)(v.default, {}),
              })
            : (0, l.jsx)("div", {
                ref: z ? ea : void 0,
                "data-dnd-name": B.toString(),
                className: i(y.blobContainer, {
                  [y.sorting]: X,
                  [y.wobble]: ec,
                  [y.selected]: ec || H,
                }),
                children: (0, l.jsx)(c.BlobMask, {
                  selected: ec || H || eu,
                  upperBadge: ee,
                  lowerBadge: et,
                  lowerBadgeWidth: en,
                  children: eS,
                }),
              });
        return (0, l.jsxs)(x.ListItem, {
          ref: e_,
          children: [
            (0, l.jsx)(I.default, {
              hovered: !el && eu,
              selected: !el && H,
              unread: !el && k,
              className: y.pill,
            }),
            (0, l.jsx)(L.default, { guild: B, disabled: X, children: eN }),
            z
              ? (0, l.jsx)(A.default, {
                  name: B.name,
                  targetNode: G,
                  onDragOverChanged: eI,
                })
              : null,
          ],
        });
      });
    },
    798573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HomeButton: function () {
            return Y;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("974667"),
        i = n("446674"),
        r = n("95410"),
        u = n("77078"),
        o = n("524110"),
        d = n("805199"),
        c = n("951039"),
        f = n("713726"),
        h = n("9759"),
        C = n("194051"),
        p = n("651896"),
        m = n("520480"),
        E = n("813531"),
        g = n("749387"),
        I = n("260488"),
        _ = n("12896"),
        S = n("27618"),
        N = n("18494"),
        T = n("697218"),
        A = n("340412"),
        L = n("330338"),
        v = n("535974"),
        x = n("352326"),
        R = n("774223"),
        M = n("15738"),
        O = n("956089"),
        y = n("108189"),
        D = n("964889"),
        b = n("709681"),
        j = n("957833"),
        G = n("610898"),
        U = n("829562"),
        P = n("255991"),
        w = n("49111"),
        F = n("646718"),
        B = n("782340"),
        V = n("204391");
      let H = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function k(e) {
        let {
            selected: t,
            user: n,
            badge: f,
            link: C,
            showProgressBadge: p,
          } = e,
          I = (0, i.useStateFromStores)(
            [d.default],
            () => d.default.isEditorOpen
          ),
          [S, N] = a.useState(!1),
          [T, A] = a.useState(!1),
          [L, v] = a.useState(null),
          [x, D] = a.useState(0),
          [j, F] = a.useState(!1),
          { canViewBroadcasts: k } = h.default.useExperiment(
            { location: "home_button_no_track" },
            { autoTrackExposure: !1 }
          ),
          Y = (0, E.default)(),
          K = Y.length > 0 && k;
        (0, m.useTrackNewBroadcastDetected)();
        let W = (0, s.useTreeItem)("home"),
          Z = () => {
            v(null), D(0), clearTimeout(L);
          };
        if (null == n) return null;
        let z = B.default.Messages.DIRECT_MESSAGES;
        T &&
          (z = r.default.get(w.DISCODO_STORAGE_KEY)
            ? B.default.Messages.DISCODO_ENABLED
            : B.default.Messages.DISCODO_DISABLED),
          Y.length > 0 && h.default.trackExposure({ location: "home_button" });
        let X = null;
        !t && p
          ? (X = (0, l.jsx)(o.default, {
              className: V.downloadProgress,
              determineOwnVisibility: !1,
            }))
          : K && (X = (0, l.jsx)(R.default, { className: V.broadcastBadge }));
        let Q = t || S || I,
          J = (0, l.jsx)(u.BlobMask, {
            highlight: K,
            selected: Q,
            lowerBadge: f > 0 ? (0, P.renderMentionBadge)(f) : null,
            upperBadge: X,
            lowerBadgeWidth: (0, O.getBadgeWidthForValue)(f),
            children: (0, l.jsx)(y.default, {
              onMouseEnter: () => N(!0),
              onMouseLeave: () => N(!1),
              onClick: () => {
                if (
                  !__OVERLAY__ &&
                  (null != L && clearTimeout(L),
                  v(setTimeout(Z, 500)),
                  D(x + 1),
                  15 === x)
                ) {
                  Z();
                  let e = !r.default.get(w.DISCODO_STORAGE_KEY);
                  r.default.set(w.DISCODO_STORAGE_KEY, e),
                    e
                      ? (0, b.playSound)("discodo")
                      : (0, b.playSound)("user_leave"),
                    A(!0),
                    setTimeout(() => {
                      A(!1);
                    }, 1e3);
                }
              },
              selected: Q,
              ariaLabel: B.default.Messages.DIRECT_MESSAGES,
              ...W,
              to: {
                pathname: C,
                state: {
                  analyticsSource: {
                    page: w.AnalyticsPages.GUILD_CHANNEL,
                    section: w.AnalyticsSections.NAVIGATION,
                    object: w.AnalyticsObjects.BUTTON_HOME,
                  },
                },
              },
              children: (0, l.jsx)(c.default, {}),
            }),
          }),
          q = K
            ? (0, l.jsx)(u.Popout, {
                position: "right",
                renderPopout: e => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(g.default, { closePopout: t });
                },
                onRequestClose: () => {
                  F(!1);
                },
                spacing: 8,
                shouldShow: j,
                children: () => J,
              })
            : null;
        return (0, l.jsx)("div", {
          className: V.tutorialContainer,
          onMouseEnter: () => {
            F(!0);
          },
          onMouseLeave: () => {
            setTimeout(() => {
              F(!1);
            }, 250);
          },
          children: (0, l.jsx)(_.default, {
            inlineSpecs: H,
            tutorialId: "friends-list",
            position: "right",
            children: (0, l.jsxs)(G.ListItem, {
              children: [
                (0, l.jsx)(M.default, {
                  selected: t,
                  hovered: S,
                  className: V.pill,
                }),
                null != q
                  ? q
                  : (0, l.jsx)(U.default, {
                      color: u.Tooltip.Colors.PRIMARY,
                      hideOnClick: !0,
                      text: z,
                      selected: t,
                      children: J,
                    }),
              ],
            }),
          }),
        });
      }
      function Y() {
        let e = (0, j.useIsHomeSelected)(),
          t = (0, i.useStateFromStores)([x.default, v.default], () => {
            let e = (0, o.getDispatchApplicationStates)(
                x.default.activeItems,
                v.default
              ),
              { total: t, progress: n } = D.getCombinedProgress(e),
              l = D.calculateProgressPercentage(n, t);
            return l > 0 && l < 100;
          }),
          n = (0, i.useStateFromStores)([C.default], () =>
            C.default.getUserIdsToValidate()
          ),
          s = (0, i.useStateFromStores)([S.default], () =>
            S.default.getPendingCount()
          ),
          r = Object.keys(F.SubscriptionTrials),
          { unviewedTrialCount: u, unviewedDiscountCount: d } = (0,
          i.useStateFromStoresObject)([A.default], () => ({
            unviewedTrialCount: A.default.getUnacknowledgedOffers(r).length,
            unviewedDiscountCount:
              A.default.getUnacknowledgedDiscountOffers().length,
          })),
          c = u + d,
          h = (0, i.useStateFromStores)([T.default], () =>
            T.default.getCurrentUser()
          ),
          m = (0, I.useMessageRequestsCount)(),
          E = s + c + m,
          g = E === c && c > 0 && s + m === 0;
        a.useEffect(() => {
          n.length > 0 && (0, f.fetchBroadcasterBuckets)();
        }, [n]),
          (0, p.default)();
        let _ = L.default.getHomeLink();
        return (
          g && (_ = w.Routes.APPLICATION_STORE),
          (0, l.jsx)(k, {
            selected: e,
            user: h,
            selectedChannelId: N.default.getChannelId(w.ME),
            badge: E,
            link: _,
            showProgressBadge: t,
          })
        );
      }
    },
    795853: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("803182"),
        s = n("446674"),
        i = n("813006"),
        r = n("337543"),
        u = n("745633"),
        o = n("775755"),
        d = n("966270"),
        c = n("49111"),
        f = n("782340");
      function h(e) {
        var t;
        let { isOnHubVerificationRoute: n } = e,
          h = (0, a.matchPath)(
            null !== (t = window.location.pathname) && void 0 !== t ? t : "",
            {
              path: c.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                ":guildId",
                ":inviteCode"
              ),
            }
          ),
          C = (0, s.useStateFromStores)([r.default], () => {
            if (null == h) return null;
            let { inviteCode: e } = h.params;
            return null != e ? r.default.getInvite(e) : null;
          }),
          p =
            (null == C ? void 0 : C.guild) != null
              ? new i.default(null == C ? void 0 : C.guild)
              : null;
        return n
          ? null != p && null != C
            ? (0, l.jsx)(o.default, { guild: p, invite: C })
            : (0, l.jsx)(d.default, {
                tooltip: f.default.Messages.HUB_DISCORD_HUBS,
                id: "guild-hub-button",
                icon: u.default,
              })
          : null;
      }
    },
    610898: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ListItem: function () {
            return i;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("853708");
      let i = a.forwardRef((e, t) => {
        let { children: n } = e;
        return (0, l.jsx)("div", {
          className: s.listItem,
          ref: t,
          children: n,
        });
      });
      i.displayName = "ListItem";
    },
    829562: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("793422");
      function o(e) {
        let {
          children: t,
          text: n,
          color: s,
          disableWrapper: o = !1,
          disabled: d = !1,
          hideOnClick: c = !0,
          shouldShow: f,
          forceOpen: h,
          selected: C = !1,
          tooltipClass: p,
        } = e;
        return (0, l.jsx)(r.Tooltip, {
          shouldShow: f,
          forceOpen: h,
          spacing: 20,
          hideOnClick: c,
          text: d ? null : n,
          position: "right",
          color: s,
          "aria-label": !1,
          tooltipClassName: i(u.listItemTooltip, p),
          children: e =>
            o
              ? a.cloneElement(a.Children.only(t), { ...e })
              : (0, l.jsx)("div", {
                  className: i(u.listItemWrapper, { [u.selected]: C }),
                  ...e,
                  children: t,
                }),
        });
      }
    },
    357762: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("610898"),
        s = n("692389");
      function i() {
        return (0, l.jsx)(a.ListItem, {
          children: (0, l.jsx)("div", { className: s.guildSeparator }),
        });
      }
    },
    504957: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("15649"),
        r = n("341542"),
        u = n("305961"),
        o = n("610898"),
        d = n("829562"),
        c = n("49111"),
        f = n("782340"),
        h = n("92979");
      function C() {
        let e = (0, a.useStateFromStores)(
          [r.default, u.default],
          () =>
            r.default.unavailableGuilds.filter(
              e => null == u.default.getGuild(e)
            ).length
        );
        return e <= 0
          ? null
          : (0, l.jsx)(o.ListItem, {
              children: (0, l.jsx)(d.default, {
                text: f.default.Messages.PARTIAL_OUTAGE.format({ count: e }),
                color: s.Tooltip.Colors.RED,
                children: (0, l.jsx)(s.Anchor, {
                  href: (0, i.default)(c.LocalizedLinks.TWITTER),
                  target: "_blank",
                  className: h.guildsError,
                  "aria-label": f.default.Messages.PARTIAL_OUTAGE_A11Y.format({
                    count: e,
                  }),
                  children: (0, l.jsx)("span", {
                    "aria-hidden": !0,
                    className: h.errorInner,
                    children: "!",
                  }),
                }),
              }),
            });
      }
    },
    255991: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderMentionBadge: function () {
            return A;
          },
          renderUnavailableBadge: function () {
            return L;
          },
          renderMediaBadge: function () {
            return v;
          },
          renderGuildJoinRequestBadge: function () {
            return x;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("449918"),
        r = n("567054"),
        u = n("104359"),
        o = n("943232"),
        d = n("437825"),
        c = n("36694"),
        f = n("945330"),
        h = n("351368"),
        C = n("841811"),
        p = n("267675"),
        m = n("987772"),
        E = n("82636"),
        g = n("368121"),
        I = n("228427"),
        _ = n("956089"),
        S = n("471374"),
        N = n("49111"),
        T = n("853708");
      function A(e, t) {
        return (0, l.jsx)(_.NumberBadge, { count: e, color: t });
      }
      function L() {
        return (0, l.jsx)(_.IconBadge, {
          icon: u.default,
          disableColor: !0,
          className: T.unavailableBadge,
        });
      }
      function v(e) {
        let t,
          {
            audio: n,
            video: l,
            screenshare: a,
            isCurrentUserConnected: s,
            liveStage: i,
            activeEvent: r,
            activity: u,
            gaming: c,
          } = e,
          f = (0, S.isGamingVoiceActivityEnabled)("Guild Icon", !1);
        if (
          (!r &&
            !i &&
            !u &&
            !a &&
            !l &&
            c &&
            S.default.trackExposure({ location: "Guild Icon" }),
          r)
        )
          t = o.default;
        else if (i) t = I.default;
        else if (u) t = E.default;
        else if (a) t = p.default;
        else if (l) t = d.default;
        else if (c && f) t = h.default;
        else {
          if (!n) return null;
          t = g.default;
        }
        return R({ icon: t, isCurrentUserConnected: s });
      }
      function x(e) {
        let { guildJoinRequestStatus: t } = e,
          [n, l] = (function (e) {
            switch (e) {
              case r.GuildJoinRequestApplicationStatuses.SUBMITTED:
                return [void 0, C.default];
              case r.GuildJoinRequestApplicationStatuses.REJECTED:
                return [N.Color.RED_400, f.default];
              case r.GuildJoinRequestApplicationStatuses.APPROVED:
                return [N.Color.GREEN_360, c.default];
              default:
                return [void 0, m.default];
            }
          })(t);
        return R({ icon: l, color: n });
      }
      function R(e) {
        let { icon: t, color: n, isCurrentUserConnected: a } = e,
          r = null == n ? { disableColor: !0 } : { color: (0, i.getColor)(n) };
        return (0, l.jsx)(_.IconBadge, {
          icon: t,
          className: s(T.iconBadge, { [T.isCurrentUserConnected]: a }),
          ...r,
        });
      }
    },
    199218: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("424973"),
        n("222007"),
        n("808653");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("272030"),
        r = n("851387"),
        u = n("393027"),
        o = n("383173"),
        d = n("952451"),
        c = n("305961"),
        f = n("449008"),
        h = n("797438"),
        C = n("653357"),
        p = n("49111"),
        m = a.memo(function (e) {
          let { folderNode: t, ...m } = e,
            { id: E, name: g, color: I, children: _ } = t,
            S = _.map(e => e.id),
            N = (0, u.default)(e => e.guildId),
            T = (0, s.useStateFromStores)([o.default], () =>
              o.default.isFolderExpanded(E)
            ),
            A = (function (e) {
              let t = e.children
                  .map(e => {
                    let t = e.id,
                      n = c.default.getGuild(t);
                    return null != n ? n.name : null;
                  })
                  .filter(f.isNotNullish),
                n = 2 * p.MAX_GUILD_FOLDER_NAME_LENGTH,
                l = [];
              for (let e of t)
                (e.length < n || 0 === l.length) &&
                  (l.push(e), (n -= e.length));
              return ""
                .concat(l.join(", "))
                .concat(l.length < t.length ? ", ..." : "");
            })(t),
            L = (0, C.default)(t),
            { mentionCount: v, unread: x } = (0, s.useStateFromStoresObject)(
              [d.default],
              () => ({
                mentionCount: S.map(e => d.default.getMentionCount(e)).reduce(
                  (e, t) => e + t,
                  0
                ),
                unread: S.some(e => d.default.hasUnread(e)),
              })
            ),
            R = a.useCallback(() => {
              r.default.toggleGuildFolderExpand(E);
            }, [E]),
            M = a.useCallback(
              e => {
                (0, i.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("896982")
                    .then(n.bind(n, "896982"));
                  return t =>
                    (0, l.jsx)(e, {
                      ...t,
                      folderId: E,
                      folderName: g,
                      folderColor: I,
                      unread: x || v > 0,
                    });
                });
              },
              [E, g, I, x, v]
            );
          return (0, l.jsx)(h.default, {
            ...m,
            folderNode: t,
            expanded: T,
            selected: null != N && S.includes(N),
            mentionCount: v,
            unread: x,
            mediaState: L,
            defaultFolderName: A,
            onExpandCollapse: R,
            onContextMenu: M,
          });
        });
    },
    624531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("5367"),
        r = n("100835"),
        u = n("393027"),
        o = n("341542"),
        d = n("952451"),
        c = n("305961"),
        f = n("471671"),
        h = n("480381"),
        C = n("21841"),
        p = n("198442"),
        m = n("28949"),
        E = a.memo(function (e) {
          let { guildNode: t, lowerBadge: n } = e,
            E = t.id,
            g = (0, s.useStateFromStores)([c.default], () =>
              c.default.getGuild(E)
            ),
            I = (0, i.useCurrentUserGuildBadgeStatus)(E),
            _ = (0, s.useStateFromStores)([f.default], () =>
              f.default.isFocused()
            ),
            S = (0, s.useStateFromStores)([o.default], () =>
              o.default.isUnavailable(E)
            ),
            N = (0, u.default)(e => e.guildId),
            T = (0, C.default)(E),
            { badge: A, unread: L } = (0, s.useStateFromStoresObject)(
              [d.default],
              () => ({
                badge: d.default.getMentionCount(E),
                unread: d.default.hasUnread(E),
              })
            ),
            v = (0, r.useShouldShowInvitesDisabledNotif)(g) && 0 === A,
            x = a.useMemo(
              () =>
                null != n
                  ? n
                  : v
                    ? (0, l.jsx)("div", {
                        className: m.pauseBackground,
                        children: (0, l.jsx)(h.default, {
                          className: m.pause,
                          width: 10,
                          height: 10,
                        }),
                      })
                    : null,
              [n, v]
            );
          return (0, l.jsx)(p.default, {
            ...e,
            guild: g,
            unavailable: S,
            animatable: _,
            selected: N === E,
            badge: A,
            lowerBadge: x,
            unread: L,
            mediaState: T,
            guildJoinRequestStatus: I,
          });
        });
    },
    775755: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("471671"),
        r = n("674644"),
        u = n("198442"),
        o = n("49111");
      function d(e) {
        let { guild: t, invite: n } = e,
          d = a.useMemo(() => (0, r.createGuildNode)(t.id), [t.id]),
          c = (0, s.useStateFromStores)([i.default], () =>
            i.default.isFocused()
          );
        return null == t
          ? null
          : (0, l.jsx)(u.default, {
              guildNode: d,
              guild: t,
              animatable: c,
              draggable: !1,
              contextMenu: () => {},
              selected: !0,
              route: o.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code),
            });
      }
    },
    83751: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("272030"),
        i = n("982527"),
        r = n("5367"),
        u = n("162771"),
        o = n("471671"),
        d = n("198442"),
        c = n("255991"),
        f = n("49111");
      function h(e, t) {
        (0, s.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("51707").then(n.bind(n, "51707"));
          return n => (0, l.jsx)(e, { ...n, guild: t });
        });
      }
      function C(e) {
        let { guildNode: t } = e,
          n = t.id,
          s = (0, r.useCurrentUserGuildBadgeStatus)(n),
          C = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.getJoinRequestGuild(n),
            [n]
          ),
          p = (0, a.useStateFromStores)([o.default], () =>
            o.default.isFocused()
          ),
          m = (0, a.useStateFromStores)([u.default], () =>
            u.default.getGuildId()
          );
        return null == C
          ? null
          : (0, l.jsx)(d.default, {
              guildNode: t,
              guild: C,
              animatable: p,
              draggable: !1,
              selected: n === m,
              preloadOnClick: !1,
              contextMenu: h,
              lowerBadge:
                null != s
                  ? (0, c.renderGuildJoinRequestBadge)({
                      guildJoinRequestStatus: s,
                    })
                  : void 0,
              route: f.Routes.GUILD_MEMBER_VERIFICATION(n),
            });
      }
    },
    785343: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("549103"),
        r = n("982527"),
        u = n("162771"),
        o = n("665382"),
        d = n("509223"),
        c = n("674644"),
        f = n("512812"),
        h = n("797438"),
        C = n("83751"),
        p = n("782340"),
        m = n("545909");
      function E() {
        let [e, t] = a.useState(!1),
          n = (0, s.useStateFromStores)([u.default], () =>
            u.default.getGuildId()
          ),
          E = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.hasFetchedRequestToJoinGuilds
          ),
          g = (0, f.default)(),
          I = a.useMemo(() => {
            let t = (0, c.createFolderNode)({
              folderId: d.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
              folderName: p.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
              expanded: e,
              guildIds: [],
            });
            for (let e of g) t.children.push((0, c.createGuildNode)(e, t.id));
            return t;
          }, [g, e]);
        if (
          (a.useEffect(() => {
            e && !E && i.default.fetchRequestToJoinGuilds();
          }, [e, E]),
          0 === g.length)
        )
          return null;
        let _ = null != n && g.includes(n);
        return (0, l.jsx)(h.default, {
          folderNode: I,
          expanded: e,
          useCircleMask: !e && !_,
          selected: _,
          draggable: !1,
          sorting: !1,
          onExpandCollapse: () => t(!e),
          folderIconContent: (0, l.jsx)("div", {
            className: m.expandedFolderIconWrapper,
            children: (0, l.jsx)(o.default, {
              width: 24,
              height: 24,
              className: m.pendingIcon,
            }),
          }),
          renderChildNode: function (e) {
            return e.type !== c.GuildsNodeType.GUILD
              ? null
              : (0, l.jsx)(C.default, { guildNode: e });
          },
        });
      }
    },
    22567: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("393027"),
        r = n("305961"),
        u = n("471671"),
        o = n("674644"),
        d = n("21841"),
        c = n("198442");
      function f(e) {
        let { guildId: t } = e,
          n = a.useMemo(() => (0, o.createGuildNode)(t), [t]),
          f = (0, s.useStateFromStores)([r.default], () =>
            r.default.getGuild(t)
          ),
          h = (0, s.useStateFromStores)([u.default], () =>
            u.default.isFocused()
          ),
          C =
            t ===
            (0, i.default)(e => {
              let { guildId: t } = e;
              return t;
            }),
          p = (0, d.default)(t);
        return null == f
          ? null
          : (0, l.jsx)(c.default, {
              guildNode: n,
              guild: f,
              animatable: h,
              selected: C,
              draggable: !1,
              mediaState: p,
            });
      }
    },
    653357: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        s = n("130563"),
        i = n("373469"),
        r = n("945956"),
        u = n("800762");
      function o(e) {
        var t;
        let n = (0, a.useStateFromStores)([r.default], () =>
            r.default.getGuildId()
          ),
          o = e.children.map(e => e.id),
          d = null != n && o.includes(n),
          c = !1,
          f = !1,
          h = !1,
          C = (0, a.useStateFromStores)([r.default], () =>
            r.default.getChannelId()
          ),
          p =
            null === (t = (0, s.default)()) || void 0 === t
              ? void 0
              : t.guild_id,
          m = null != p && o.includes(p),
          E = (0, a.useStateFromStores)(
            [u.default],
            () => null != C && u.default.hasVideo(C),
            [C]
          ),
          g = (0, a.useStateFromStores)([i.default], () =>
            i.default.getCurrentUserActiveStream()
          );
        return (
          d &&
            ((c = !E),
            (f = E),
            (h = null != g && null != g.guildId && o.includes(g.guildId))),
          l.useMemo(
            () => ({
              audio: c,
              video: f,
              screenshare: h,
              liveStage: m,
              isCurrentUserConnected: d,
            }),
            [c, f, h, m, d]
          )
        );
      }
    },
    698652: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderMentionBadge: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691"), n("104359");
      var a = n("956089");
      function s(e) {
        return (0, l.jsx)(a.NumberBadge, { count: e });
      }
      n("716175");
    },
    238055: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          HubEmailConnectionSteps: function () {
            return l;
          },
          INVITE_ROUTING_HUB_GUILD_ID: function () {
            return s;
          },
        }),
        ((a = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let s = "884924873015689226";
    },
    64657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useHubUnreadCount: function () {
            return u;
          },
        });
      var l = n("446674"),
        a = n("209397"),
        s = n("513688"),
        i = n("660478"),
        r = n("299039");
      function u(e) {
        return (0, l.useStateFromStores)(
          [a.default, i.default],
          () => {
            var t;
            if (null == e) return 0;
            let n = i.default.ackMessageId(e.id);
            if (null == n) return 0;
            let l = Object.values(
              null !== (t = a.default.getDirectoryEntries(e.id)) && void 0 !== t
                ? t
                : {}
            ).filter(e => {
              let t = r.default.fromTimestamp(new Date(e.createdAt).getTime());
              return (0, s.hasMinimumMemberCount)(e) && t > n;
            });
            return Math.min(s.MAX_CATEGORY_SERVERS, l.length);
          },
          [e]
        );
      }
    },
    922770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("305961"),
        s = n("49111");
      function i(e) {
        return (0, l.useStateFromStores)(
          [a.default],
          () => {
            var t;
            if (null == e) return !1;
            let n = a.default.getGuild(e);
            return (
              null !==
                (t = null == n ? void 0 : n.hasFeature(s.GuildFeatures.HUB)) &&
              void 0 !== t &&
              t
            );
          },
          [e]
        );
      }
    },
    240239: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("534222"),
        u = n("698652"),
        o = n("393414"),
        d = n("18494"),
        c = n("943232"),
        f = n("627490"),
        h = n("76539"),
        C = n("151185"),
        p = n("11056"),
        m = n("27978"),
        E = n("64657"),
        g = n("49111"),
        I = n("782340"),
        _ = n("377960");
      let S = [
        {
          icon: (0, l.jsx)(c.default, { className: _.icon }),
          key: "EVENTS",
          getName: e => {
            let { numEvents: t } = e;
            return t > 0
              ? I.default.Messages.GUILD_EVENTS_PLURAL.format({ number: t })
              : I.default.Messages.GUILD_EVENTS;
          },
          handler: e =>
            (0, i.openModalLazy)(async () => {
              let { default: t } = await n
                .el("659707")
                .then(n.bind(n, "659707"));
              return n => (0, l.jsx)(t, { ...n, guildId: e.id });
            }),
        },
        {
          icon: (0, l.jsx)(f.default, { className: _.icon }),
          key: "JOIN_SERVERS",
          getName: () => I.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
          handler: (e, t) => (0, o.transitionToGuild)(e.id, t.id),
        },
        {
          icon: (0, l.jsx)(C.default, { className: _.icon }),
          key: "ADD_SERVERS",
          getName: () => I.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
          handler: (e, t) =>
            (0, i.openModalLazy)(async () => {
              let { default: a } = await n
                .el("467085")
                .then(n.bind(n, "467085"));
              return n =>
                (0, l.jsx)(a, {
                  ...n,
                  directoryGuildName: e.name,
                  directoryGuildId: e.id,
                  directoryChannelId: t.id,
                });
            }),
        },
        {
          icon: (0, l.jsx)(h.default, { className: _.icon }),
          key: "INVITE_MEMBERS",
          getName: () => I.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
          handler: (e, t) =>
            (0, i.openModalLazy)(async () => {
              let { default: a } = await n
                .el("310688")
                .then(n.bind(n, "310688"));
              return n =>
                (0, l.jsx)(a, {
                  ...n,
                  guild: e,
                  channel: t,
                  source: g.InstantInviteSources.HUB_SIDEBAR,
                });
            }),
        },
      ];
      var N = e => {
        let { guild: t, channel: n } = e,
          i = (0, r.default)(t.id);
        a.useEffect(() => {
          m.default.trackExposure({ guildId: t.id, location: "543af8_1" });
        }, [t.id]);
        let { showHubEventsList: o } = m.default.useExperiment(
            { guildId: t.id, location: "543af8_2" },
            { autoTrackExposure: !1 }
          ),
          c = (0, s.useStateFromStores)(
            [d.default],
            () => null != n && d.default.getChannelId() === n.id
          ),
          f = a.useMemo(() => ({ numEvents: i.length }), [i.length]),
          h = e => {
            if (null != n) {
              let l = S.find(t => t.key === e);
              null == l || l.handler(t, n);
            }
          },
          C = (0, E.useHubUnreadCount)(n);
        return (0, l.jsx)("div", {
          children: S.map(e => {
            if (!o && "EVENTS" === e.key) return null;
            let t = c && "JOIN_SERVERS" === e.key;
            return (0, l.jsx)(
              p.default,
              {
                avatar: e.icon,
                name: e.getName(f),
                focusProps: { offset: { right: 4, top: 1, bottom: 1 } },
                onClick: () => h(e.key),
                selected: t,
                className: _.optionItem,
                selectedClassName: _.selected,
                innerClassName: _.itemInner,
                avatarClassName: _.avatar,
                children:
                  "JOIN_SERVERS" === e.key && C > 0
                    ? (0, u.renderMentionBadge)(C)
                    : null,
              },
              e.key
            );
          }),
        });
      };
    },
    817252: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("222007"),
        n("424973");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("627445"),
        d = n.n(o),
        c = n("917351"),
        f = n.n(c),
        h = n("458960"),
        C = n("446674"),
        p = n("266491"),
        m = n("77078"),
        E = n("493765"),
        g = n("175980"),
        I = n("485328"),
        _ = n("206230"),
        S = n("659500"),
        N = n("709681"),
        T = n("828184"),
        A = n("49111"),
        L = n("782340"),
        v = n("383059");
      ((a = l || (l = {})).UP = "UP"),
        (a.DOWN = "DOWN"),
        (a.LEFT = "LEFT"),
        (a.RIGHT = "RIGHT");
      let x = {
          UP: f.throttle(() => (0, N.playSound)("ddr-up"), 100),
          DOWN: f.throttle(() => (0, N.playSound)("ddr-down"), 100),
          LEFT: f.throttle(() => (0, N.playSound)("ddr-left"), 100),
          RIGHT: f.throttle(() => (0, N.playSound)("ddr-right"), 100),
        },
        R = f((0, E.getDefaultLayoutContent)())
          .groupBy(e => e.group)
          .value();
      function M(e) {
        switch (e.keyCode) {
          case A.KeyboardKeys.ARROW_UP:
            return "UP";
          case A.KeyboardKeys.ARROW_DOWN:
            return "DOWN";
          case A.KeyboardKeys.ARROW_LEFT:
            return "LEFT";
          case A.KeyboardKeys.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let O = 1e3 / 60;
      function y() {
        let e = [
          E.KeybindGroup.MESSAGE,
          E.KeybindGroup.NAVIGATION,
          E.KeybindGroup.VOICE_AND_VIDEO,
          E.KeybindGroup.CHAT,
          E.KeybindGroup.MISCELLANEOUS,
        ];
        return (0, s.jsx)("div", {
          className: v.keyboardShortcutList,
          children: e.map((t, n) => {
            let l = n === e.length - 1,
              a = R[t],
              i = (0, E.getNameForKeybindGroup)(t),
              r = (0, E.getDescriptionForKeybindGroup)(t);
            return (0, s.jsxs)(
              "div",
              {
                className: u(v.keyboardShortcutListGroup, {
                  [v.firstGroup]: 0 === n,
                }),
                children: [
                  (0, s.jsxs)(
                    "div",
                    {
                      className: u(v.keybindGroup),
                      children: [
                        (0, s.jsx)(m.Heading, {
                          variant: "heading-md/semibold",
                          children: i,
                        }),
                        null != r &&
                          (0, s.jsx)(m.Text, {
                            className: v.keybindGroupDescription,
                            variant: "text-sm/normal",
                            children: r,
                          }),
                      ],
                    },
                    t
                  ),
                  a.map((e, t) => {
                    var n;
                    return (null === (n = e.predicate) || void 0 === n
                      ? void 0
                      : n.call(e)) === !1
                      ? null
                      : (0, s.jsxs)(
                          "div",
                          {
                            className: u(v.keybindGroup),
                            children: [
                              (0, s.jsx)("div", {
                                className: v.keybindDescription,
                                children: e.description,
                              }),
                              (0, s.jsx)("div", {
                                className: "keybind-shortcuts",
                                children: e.binds.map(e =>
                                  (0, s.jsx)(
                                    m.KeyCombo,
                                    { className: v.keybindKey, shortcut: e },
                                    e
                                  )
                                ),
                              }),
                            ],
                          },
                          t
                        );
                  }),
                  !l &&
                    (0, s.jsx)(m.FormDivider, {
                      className: v.keybindGroupDivider,
                    }),
                ],
              },
              t
            );
          }),
        });
      }
      class D extends i.PureComponent {
        componentDidMount() {
          (this.lastInputedKeys = []),
            S.ComponentDispatch.subscribe(
              A.ComponentActions.SCROLL_PAGE_UP,
              this.scrollPageUp
            ),
            S.ComponentDispatch.subscribe(
              A.ComponentActions.SCROLL_PAGE_DOWN,
              this.scrollPageDown
            ),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          S.ComponentDispatch.unsubscribe(
            A.ComponentActions.SCROLL_PAGE_UP,
            this.scrollPageUp
          ),
            S.ComponentDispatch.unsubscribe(
              A.ComponentActions.SCROLL_PAGE_DOWN,
              this.scrollPageDown
            ),
            window.removeEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.removeEventListener("keyup", this.handleKeyUp, {
              capture: !0,
            });
        }
        render() {
          let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
          return (0, s.jsxs)(h.default.div, {
            className: v.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
              (0, s.jsxs)(m.H, {
                className: v.modalTitle,
                children: [
                  (0, s.jsx)("div", {
                    className: v.content,
                    children:
                      L.default.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE,
                  }),
                  (0, s.jsx)(m.KeyCombo, { shortcut: "mod+/" }),
                ],
              }),
              (0, s.jsx)("div", {
                className: v.modalSubtitle,
                children: L.default.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE,
              }),
              (0, s.jsxs)("div", {
                className: v.ddrArrows,
                children: [
                  (0, s.jsx)(b, {
                    arrow: "LEFT",
                    isActive: n,
                    className: v.left,
                    children: "left",
                  }),
                  (0, s.jsx)(b, {
                    arrow: "DOWN",
                    isActive: t,
                    className: v.down,
                    children: "down",
                  }),
                  (0, s.jsx)(b, {
                    arrow: "UP",
                    isActive: e,
                    className: v.up,
                    children: "up",
                  }),
                  (0, s.jsx)(b, {
                    arrow: "RIGHT",
                    isActive: l,
                    className: v.right,
                    children: "right",
                  }),
                ],
              }),
              (0, s.jsx)(m.AdvancedScrollerAuto, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, s.jsx)(m.HeadingLevel, {
                  children: (0, s.jsx)(y, {}),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              UP: !1,
              DOWN: !1,
              LEFT: !1,
              RIGHT: !1,
              opacity: new h.default.Value(1),
              scaleX: new h.default.Value(1),
              scaleY: new h.default.Value(0),
              animating: !1,
            }),
            (this.scrollerRef = i.createRef()),
            (this.lastInputedKeys = []),
            (this.scrollPageUp = () => {
              let e = this.scrollerRef.current;
              d(null != e, "Scroller is pagedUp when not mounted"),
                e.scrollPageUp({ animate: !0 });
            }),
            (this.scrollPageDown = () => {
              let e = this.scrollerRef.current;
              d(null != e, "Scroller is pagedDown when not mounted"),
                e.scrollPageDown({ animate: !0 });
            }),
            (this.arrowUp = e => {
              let { direction: t } = e;
              this.setState({ [t]: !1 });
            }),
            (this.arrowDown = e => {
              let { direction: t } = e;
              x[t](), this.setState({ [t]: !0 });
            }),
            (this.componentWillLeave = e => {
              this.setState({ animating: !0 }),
                this.state.opacity.setValue(1),
                this.state.scaleX.setValue(0.5),
                this.state.scaleY.setValue(1),
                h.default
                  .sequence([
                    h.default.timing(this.state.opacity, {
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      delay: 300,
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 0.7,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.opacity, {
                      toValue: 1,
                      duration: 2 * O,
                    }),
                    h.default.timing(this.state.scaleY, {
                      delay: 100,
                      toValue: 0.005,
                      duration: 8 * O,
                      easing: h.default.Easing.in(h.default.Easing.ease),
                    }),
                    h.default.parallel([
                      h.default.timing(this.state.scaleX, {
                        toValue: 1,
                        duration: 10 * O,
                        easing: h.default.Easing.out(h.default.Easing.ease),
                      }),
                      h.default.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 12 * O,
                      }),
                    ]),
                  ])
                  .start(e);
            }),
            (this.toggleOpacity = () => {
              1 === this.state.opacity._value
                ? this.state.opacity.setValue(0)
                : this.state.opacity.setValue(1);
            }),
            (this.getStyles = () => ({
              opacity: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  scaleX: this.state.scaleX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 2],
                  }),
                },
                {
                  scaleY: this.state.scaleY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            })),
            (this.handleKeyDown = e => {
              if (
                (this.lastInputedKeys.push(e.keyCode),
                (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                this.lastInputedKeys[0] === A.KeyboardKeys.H &&
                  this.lastInputedKeys[1] === A.KeyboardKeys.H &&
                  this.lastInputedKeys[2] === A.KeyboardKeys.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === A.KeyboardKeys.N &&
                  this.lastInputedKeys[4] === A.KeyboardKeys.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = M(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            (this.handleKeyUp = e => {
              if (this.props.keyboardModeEnabled) return;
              let t = M(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowUp({ direction: t }));
            }),
            (this.onArrowClick = e => {
              this.arrowDown({ direction: e });
            });
        }
      }
      function b(e) {
        let { isActive: t, arrow: n, className: l, children: a } = e,
          [r, o] = i.useState(t),
          d = i.useCallback(() => {
            x[n](), o(!0);
          }, [n]);
        return (
          i.useEffect(() => {
            if (r) {
              let e = setTimeout(() => o(!1), 500);
              return () => clearTimeout(e);
            }
          }, [r]),
          (0, s.jsx)(m.Clickable, {
            onClick: d,
            className: u(v.arrow, l, { [v.active]: t || r }),
            children: a,
          })
        );
      }
      function j(e) {
        let { transitionState: t, onClose: n } = e,
          [l, a] = i.useState(!1),
          r = i.useMemo(
            () =>
              __OVERLAY__
                ? (0, g.getOverlayLayoutContent)()
                : (0, E.getDefaultLayoutContent)(),
            []
          ),
          o = (0, C.useStateFromStores)(
            [_.default],
            () => _.default.keyboardModeEnabled
          );
        return (0, s.jsx)(m.ModalRoot, {
          className: u(v.noBackground, { [v.noShadow]: l }),
          size: m.ModalSize.DYNAMIC,
          "aria-label": L.default.Messages.KEYBINDS,
          transitionState: t,
          children: (0, s.jsx)(p.TransitionGroup, {
            component: "div",
            children: l
              ? (0, s.jsx)(T.default, { onClose: n }, "raging-demo")
              : (0, s.jsx)(
                  D,
                  {
                    content: r,
                    keyboardModeEnabled: o,
                    activateRagingDemon: function () {
                      I.default.disable(), a(!0);
                    },
                  },
                  "modal"
                ),
          }),
        });
      }
    },
    831773: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("913144"),
        i = n("316272"),
        r = n("817252"),
        u = n("386867");
      class o extends i.default {
        _initialize() {
          s.default.subscribe(
            "SHOW_KEYBOARD_SHORTCUTS",
            this.showKeyboardShortcuts
          ),
            s.default.subscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts
            );
        }
        _terminate() {
          s.default.unsubscribe(
            "SHOW_KEYBOARD_SHORTCUTS",
            this.showKeyboardShortcuts
          ),
            s.default.unsubscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts
            );
        }
        showKeyboardShortcuts() {
          (0, a.openModal)(e => (0, l.jsx)(r.default, { ...e }), {
            modalKey: u.KEYBOARD_SHORTCUT_MODAL_KEY,
          });
        }
        hideKeyboardShortcuts() {
          (0, a.closeModal)(u.KEYBOARD_SHORTCUT_MODAL_KEY);
        }
      }
      var d = new o();
    },
    828184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("424973"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("917351"),
        u = n.n(r),
        o = n("485328"),
        d = n("659500"),
        c = n("49111"),
        f = n("184143");
      let h = { PRIMARY: () => !0, SECONDARY: () => !0 },
        Symbol = () =>
          (0, l.jsxs)(
            "div",
            {
              className: f.symbol,
              children: [
                (0, l.jsx)("div", { className: f.symbolBackground }),
                (0, l.jsx)("img", { alt: "", src: n("287112") }),
              ],
            },
            "symbol"
          );
      class C extends a.PureComponent {
        componentDidMount() {
          this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
              this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3)),
            h.PRIMARY();
        }
        componentDidUpdate(e, t) {
          this.state.renderSecondary && !t.renderSecondary && h.SECONDARY();
        }
        componentWillUnmount() {
          clearTimeout(this._renderSecondaryTimeout),
            clearTimeout(this._doneTimeout);
        }
        renderPrimary() {
          return (0, l.jsxs)(
            "div",
            {
              className: f.primaryExplosion,
              children: [
                (0, l.jsx)("img", {
                  alt: "",
                  className: f.circleInner,
                  src: n("672453"),
                  width: 70,
                  height: 69,
                }),
                (0, l.jsx)("img", {
                  alt: "",
                  className: f.circleOuter,
                  src: n("110209"),
                  width: 96,
                  height: 95,
                }),
                (0, l.jsx)("img", {
                  alt: "",
                  className: f.linesSecondary,
                  src: n("923699"),
                  width: 183,
                  height: 104,
                }),
                (0, l.jsx)("img", {
                  alt: "",
                  className: f.linesMain,
                  src: n("210318"),
                  width: 69,
                  height: 180,
                }),
              ],
            },
            "primary-explosion"
          );
        }
        renderSecondary(e, t) {
          return (0, l.jsxs)(
            "div",
            {
              className: f.secondaryExplosion,
              style: { top: t, left: e },
              children: [
                (0, l.jsx)(
                  "img",
                  {
                    alt: "",
                    className: f.circleInner,
                    src: n("856081"),
                    width: 61,
                    height: 58,
                  },
                  "circle-inner"
                ),
                (0, l.jsx)(
                  "img",
                  {
                    alt: "",
                    className: f.circleOuter,
                    src: n("203450"),
                    width: 85,
                    height: 85,
                  },
                  "circle-outer"
                ),
                (0, l.jsx)(
                  "img",
                  {
                    alt: "",
                    className: f.linesSecondary,
                    src: n("16759"),
                    width: 162,
                    height: 173,
                  },
                  "lines-secondary"
                ),
                (0, l.jsx)(
                  "img",
                  {
                    alt: "",
                    className: f.linesMain,
                    src: n("842397"),
                    width: 156,
                    height: 306,
                  },
                  "lines-main"
                ),
              ],
            },
            "secondary-explosion"
          );
        }
        render() {
          let {
              renderSecondary: e,
              offsetX: t,
              offsetY: n,
              animating: a,
              scale: s,
            } = this.state,
            r = [this.renderPrimary()];
          return (
            e && r.push(this.renderSecondary(t, n)),
            (0, l.jsx)("div", {
              className: i(f.container, { [f.animate]: a }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(s, ")"),
              },
              children: r,
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this._renderSecondaryTimeout = null),
            (this._doneTimeout = null),
            (this.state = {
              animating: !1,
              renderSecondary: !1,
              scale: u.random(0.6, 1, !0),
              offsetX: u.random(0, 140, !1) - 70,
              offsetY: u.random(0, 140, !1) - 70,
            }),
            (this.done = () => {
              this.props.onAnimationComplete(this.props.componentId);
            });
        }
      }
      let p = 240;
      class m extends a.PureComponent {
        componentDidMount() {
          this.setTimeout(() => {
            this.setState({ visible: !0 }),
              d.ComponentDispatch.dispatch(c.ComponentActions.SHAKE_APP, {
                duration: 2400,
              });
          }, 1800),
            this.setTimeout(this.createExplosion, 1800);
        }
        componentWillUnmount() {
          for (let e of (o.default.enable(),
          (this.children.length = 0),
          this._timeouts))
            clearTimeout(e);
        }
        render() {
          return (0, l.jsx)("div", {
            className: i(f.ragingDemon, { [f.visible]: this.state.visible }),
            children: this.children,
          });
        }
        constructor(...e) {
          super(...e),
            (this._timeouts = []),
            (this.children = []),
            (this.state = { explosions: 0, visible: !1 }),
            (this.setTimeout = (e, t) => {
              let n = setTimeout(e, t);
              return this._timeouts.push(n), n;
            }),
            (this.removeExplosion = e => {
              let t = this.children,
                n = t.findIndex(t => {
                  if (t.type !== C) return !1;
                  let n = t.props;
                  return null != n.componentId && n.componentId === e;
                });
              n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            (this.createExplosion = () => {
              let e = this.children,
                t = (window.innerWidth / 2) >> 0,
                n = (window.innerHeight / 2) >> 0;
              if (this.state.explosions < 8) {
                let a = "expl-".concat(this.state.explosions);
                e.push(
                  (0, l.jsx)(
                    C,
                    {
                      componentId: a,
                      top: u.random(n - 100, n + 100, !1),
                      left: u.random(t - 200, t + 200, !1),
                      onAnimationComplete: this.removeExplosion,
                    },
                    a
                  )
                ),
                  this.setTimeout(this.createExplosion, p),
                  this.setState({ explosions: this.state.explosions + 1 });
              } else this.setTimeout(this.addSymbol, 750);
            }),
            (this.addSymbol = () => {
              (this.children = [(0, l.jsx)(Symbol, {}, "symbol")]),
                this.forceUpdate(),
                this.setTimeout(this.delayedClose, 3e3);
            }),
            (this.delayedClose = () => {
              this.props.onClose();
            });
        }
      }
      var E = m;
    },
    260488: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRequestsCount: function () {
            return s;
          },
        });
      var l = n("446674"),
        a = n("288518");
      function s() {
        return (0, l.useStateFromStores)([a.default], () =>
          a.default.getMessageRequestsCount()
        );
      }
    },
    636174: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ICON_SIZE: function () {
            return l;
          },
          NOW_PLAYING_MINIMUM_WIDTH: function () {
            return a;
          },
        });
      let l = 64,
        a = 1200;
    },
    67139: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          createHeader: function () {
            return u;
          },
          createBody: function () {
            return o;
          },
          shouldShowActivity: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("885590"),
        s = n("837979"),
        i = n("211757");
      let r = {
        [s.STAGE_APPLICATION_ID]: new a.StageChannelNowPlayingDelegate(),
      };
      function u(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let l = r[n];
        if (
          null != l &&
          (null === (t = l.shouldShow) || void 0 === t
            ? void 0
            : t.call(l, e)) !== !1
        )
          return l.createHeader(e);
      }
      function o(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let a = r[n];
        if (
          (null == a ? void 0 : a.body) != null &&
          (null === (t = a.shouldShow) || void 0 === t
            ? void 0
            : t.call(a, e)) !== !1
        ) {
          let t = a.body;
          return (0, l.jsx)(
            "section",
            { className: i.section, children: (0, l.jsx)(t, { activity: e }) },
            "delegate-".concat(n)
          );
        }
      }
      function d(e) {
        var t;
        let n = e.application_id;
        if (null == n) return !0;
        let l = r[n];
        return (
          null == l ||
          (null === (t = l.shouldShow) || void 0 === t
            ? void 0
            : t.call(l, e)) !== !1
        );
      }
    },
    389817: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useNowPlayingVisible: function () {
            return u;
          },
          getNowPlayingVisible: function () {
            return o;
          },
        });
      var l = n("446674"),
        a = n("350522"),
        s = n("471671"),
        i = n("636174"),
        r = n("49111");
      function u() {
        let e = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.windowSize().width
          ),
          t = (0, l.useStateFromStores)([a.default], () =>
            a.default.hasConsented(r.Consents.PERSONALIZATION)
          );
        return d(e, t);
      }
      function o() {
        let e = s.default.windowSize().width,
          t = a.default.hasConsented(r.Consents.PERSONALIZATION);
        return d(e, t);
      }
      function d(e, t) {
        return e > i.NOW_PLAYING_MINIMUM_WIDTH && t;
      }
    },
    934743: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ev;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        u = n.n(r),
        o = n("446674"),
        d = n("151426"),
        c = n("669491"),
        f = n("77078"),
        h = n("636974"),
        C = n("255397"),
        p = n("406189"),
        m = n("990766"),
        E = n("832627"),
        g = n("86621"),
        I = n("206230"),
        _ = n("550766"),
        S = n("191225"),
        N = n("871388"),
        T = n("442939"),
        A = n("713726"),
        L = n("705565"),
        v = n("858944"),
        x = n("679653"),
        R = n("228854"),
        M = n("243632"),
        O = n("180273"),
        y = n("579565"),
        D = n("917973"),
        b = n("48683"),
        j = n("161454"),
        G = n("374014"),
        U = n("223913"),
        P = n("479788"),
        w = n("560367"),
        F = n("293383"),
        B = n("375202"),
        V = n("16916"),
        H = n("233069"),
        k = n("373469"),
        Y = n("271938"),
        K = n("42203"),
        W = n("923959"),
        Z = n("305961"),
        z = n("42887"),
        X = n("957255"),
        Q = n("824563"),
        J = n("27618"),
        q = n("18494"),
        $ = n("101125"),
        ee = n("697218"),
        et = n("703370"),
        en = n("953109"),
        el = n("37785"),
        ea = n("491605"),
        es = n("437825"),
        ei = n("893011"),
        er = n("76539"),
        eu = n("985622"),
        eo = n("619911"),
        ed = n("962541"),
        ec = n("762489"),
        ef = n("329858"),
        eh = n("956089"),
        eC = n("980423"),
        ep = n("599110"),
        em = n("773336"),
        eE = n("974165"),
        eg = n("733335"),
        eI = n("49111"),
        e_ = n("272505"),
        eS = n("411511"),
        eN = n("782340"),
        eT = n("588432");
      let eA = (0, E.default)(function (e) {
        let { message: t } = e;
        return (0, l.jsx)(ec.default, { children: t });
      });
      class eL extends a.PureComponent {
        componentDidUpdate(e) {
          !e.dropsActivityPanelExperienceBlocked &&
            this.props.dropsActivityPanelExperienceBlocked &&
            this.setState({ isDropsActivityPanelTooltipOpen: !1 });
        }
        isJoinableActivity() {
          let { application: e, activity: t, embeddedActivity: n } = this.props;
          return (
            null != e &&
            (null != n
              ? n.applicationId === e.id
              : null != t &&
                t.application_id === e.id &&
                t.type === eI.ActivityTypes.PLAYING &&
                (0, N.default)(t, eI.ActivityFlags.JOIN))
          );
        }
        renderGoLiveButton() {
          let e, t, n, a;
          let {
            canGoLive: s,
            guildId: i,
            isStreaming: r,
            channel: u,
            canStream: o,
            runningGame: d,
            embeddedActivity: c,
          } = this.props;
          return (null != d || null == c) && (r || (s && null != d))
            ? (r
                ? ((e = !1),
                  (t = this.handleClickStopStreamingButton),
                  (n = eu.default),
                  (a = eN.default.Messages.STOP_STREAMING))
                : o
                  ? ((e = !1),
                    (t = this.handleClickGoLiveButton),
                    (n = eo.default),
                    (a =
                      null != d
                        ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format(
                            { game: d.name }
                          )
                        : eN.default.Messages.ACTIVITY_PANEL_GO_LIVE))
                  : ((e = !0),
                    (t = null),
                    (n = eo.default),
                    (a =
                      null != u && (0, H.isVoiceChannel)(u.type)
                        ? eN.default.Messages
                            .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE
                        : null != i
                          ? eN.default.Messages
                              .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD
                          : eN.default.Messages
                              .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
              (0, l.jsx)("div", {
                className: eT.panelButtonContainer,
                children: (0, l.jsx)(ed.default, {
                  tooltipText: a,
                  disabled: e,
                  onClick: t,
                  icon: n,
                  iconForeground: eT.actionIcon,
                }),
              }))
            : null;
        }
        renderInviteButton() {
          let { embeddedActivity: e } = this.props;
          return this.isJoinableActivity() && null == e
            ? (0, l.jsx)(ed.default, {
                tooltipText: eN.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                onClick: this.handleClickInviteButton,
                icon: er.default,
                iconForeground: eT.actionIcon,
              })
            : null;
        }
        renderDropsButton() {
          let { dropsTooltipAction: e, dropsPartnerGame: t } = this.props;
          if (null == t) return null;
          let n = this.state.isDropsActivityPanelTooltipOpen,
            a = () => this.setState({ isDropsActivityPanelTooltipOpen: !1 });
          return (0, l.jsx)(f.Popout, {
            shouldShow: n,
            position: "top",
            align: "center",
            onRequestClose: a,
            renderPopout: () =>
              (0, l.jsx)(b.default, {
                partnerGame: t,
                tooltipAction: e,
                onClose: a,
              }),
            children: () =>
              (0, l.jsxs)(l.Fragment, {
                children: [
                  this.state.showDropsSparkles && this.renderSparkles(),
                  (0, l.jsx)(ed.default, {
                    "aria-label": eN.default.Messages.DROPS_ENABLED,
                    tooltipText: n ? null : eN.default.Messages.DROPS_ENABLED,
                    onClick: this.handleClickDropsButton,
                    icon: D.default,
                  }),
                ],
              }),
          });
        }
        renderLeaveEmbeddedActivityButton() {
          let { embeddedActivity: e, channel: t } = this.props;
          return null == e || null == t
            ? null
            : (0, l.jsx)(ed.default, {
                tooltipText:
                  eN.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                onClick: this.handleClickLeaveEmbeddedActivityButton(
                  e.applicationId,
                  t
                ),
                icon: ei.default,
                iconForeground: eT.actionIcon,
              });
        }
        renderBroadcastButton() {
          let { channel: e } = this.props;
          return null != e && (0, H.isVoiceChannel)(e.type)
            ? null
            : (0, l.jsx)(eE.default, {});
        }
        renderBroadcastSettingsButton() {
          let { broadcast: e } = this.props;
          return null == e ? null : (0, l.jsx)(eg.default, {});
        }
        renderSparkles() {
          let { useReducedMotion: e } = this.props;
          async function t() {
            let { default: e } = await n
              .el("922510")
              .then(n.t.bind(n, "922510", 19));
            return e;
          }
          return (0, l.jsx)("div", {
            className: eT.sparkleContainer,
            children: (0, l.jsx)(ea.default, {
              importData: t,
              shouldAnimate: !e,
              className: eT.sparkles,
            }),
          });
        }
        renderActions() {
          let e = this.renderGoLiveButton(),
            t = this.renderDropsButton(),
            n = this.renderInviteButton(),
            a = this.renderLeaveEmbeddedActivityButton(),
            s = this.renderClipsButton(),
            i = this.renderBroadcastButton(),
            r = this.renderBroadcastSettingsButton();
          return null == e && null == n && null == a
            ? null
            : (0, l.jsxs)("div", {
                className: eT.actions,
                children: [i, e, r, n, null == e ? a : s, t],
              });
        }
        getGameName() {
          let { runningGame: e, application: t } = this.props;
          return null != t
            ? t.name
            : null != e
              ? e.name
              : eN.default.Messages.STATUS_UNKNOWN;
        }
        renderGame() {
          let {
              isStreaming: e,
              dropsPartnerGame: t,
              application: n,
              runningGame: a,
            } = this.props,
            s = this.getGameName();
          return (0, l.jsxs)("div", {
            className: i(eT.gameWrapper, {
              [eT.clickableGameWrapper]: null != n,
            }),
            children: [
              (0, l.jsxs)("div", {
                className: eT.gameIconWrapper,
                children: [
                  (0, l.jsx)(en.default, {
                    className: eT.gameIcon,
                    game: n,
                    pid: null == a ? void 0 : a.pid,
                  }),
                  e
                    ? (0, l.jsx)(es.default, { className: eT.liveBadge })
                    : null,
                ],
              }),
              (0, l.jsx)("div", {
                className: i(eT.info, { [eT.infoWithDrops]: null != t }),
                children:
                  null != s
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(ef.default, { children: s }),
                          null != t &&
                            (0, l.jsx)("div", {
                              className: eT.dropsBadgeWrapper,
                              children: (0, l.jsx)(eh.TextBadge, {
                                text: eN.default.Messages.DROPS_AVAILABLE,
                                color: c.default.unsafe_rawColors.BRAND_500.css,
                                className: eT.dropsBadge,
                              }),
                            }),
                        ],
                      })
                    : null,
              }),
            ],
          });
        }
        renderScreenshare() {
          let {
              isStreaming: e,
              dropsPartnerGame: t,
              streamMetadata: n,
            } = this.props,
            { title: a, sanitizedTitle: s } = (0, w.default)(n);
          return (0, l.jsxs)("div", {
            className: eT.gameWrapper,
            children: [
              e
                ? (0, l.jsx)(F.default, { title: s })
                : (0, l.jsx)(eC.default, {
                    look: eC.default.Looks.GRAY,
                    size: eC.default.Sizes.SMALL,
                    className: eT.liveIndicator,
                  }),
              (0, l.jsxs)("div", {
                className: i(eT.info, { [eT.infoWithDrops]: null != t }),
                children: [
                  (0, l.jsx)(ef.default, { children: a }),
                  null != t &&
                    (0, l.jsx)("div", {
                      className: eT.dropsBadgeWrapper,
                      children: (0, l.jsx)(eh.TextBadge, {
                        text: eN.default.Messages.DROPS_AVAILABLE,
                        color: c.default.unsafe_rawColors.BRAND_500.css,
                        className: eT.dropsBadge,
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        renderEmbeddedActivity() {
          let e;
          let {
            application: t,
            embeddedActivity: n,
            channel: a,
            channelName: s,
            guild: i,
          } = this.props;
          if (null == n || null == a || null == t) return null;
          let r = { start: n.connectedSince },
            u = s;
          null != i
            ? ((e = eI.Routes.CHANNEL(i.id, a.id)),
              (u = "".concat(u, " / ").concat(i.name)))
            : (e = eI.Routes.CHANNEL(eI.ME, a.id));
          let o = (0, l.jsx)(el.default, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, l.jsx)(ec.default, {
              className: eT.channel,
              children: u,
            }),
          });
          return (0, l.jsxs)("div", {
            className: eT.gameWrapper,
            children: [
              (0, l.jsx)(en.default, { className: eT.gameIcon, game: t }),
              (0, l.jsxs)("div", {
                className: eT.info,
                children: [
                  (0, l.jsx)(el.default, {
                    href: e,
                    onClick: this.handleApplicationLinkClick,
                    children: (0, l.jsx)(ef.default, {
                      className: eT.activityName,
                      children: t.name,
                    }),
                  }),
                  (0, H.isTextChannel)(a.type)
                    ? o
                    : (0, l.jsx)(eA, { timestamps: r }),
                ],
              }),
            ],
          });
        }
        render() {
          let {
            canGoLive: e,
            embeddedActivity: t,
            runningGame: n,
            isStreaming: a,
            streamMetadata: s,
            className: r,
          } = this.props;
          return a ||
            ((this.isJoinableActivity() || e) && (null != n || null != t))
            ? (0, l.jsx)("div", {
                className: i(eT.panel, r),
                children: (0, l.jsxs)("div", {
                  className: eT.body,
                  children: [
                    (() =>
                      null == n || (a && (null == s ? void 0 : s.pid) == null)
                        ? null != t
                          ? this.renderEmbeddedActivity()
                          : this.renderScreenshare()
                        : this.renderGame())(),
                    this.renderActions(),
                  ],
                }),
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              isDropsActivityPanelTooltipOpen: !1,
              showDropsSparkles: this.props.showDropsSparkles,
            }),
            (this.startBroadcast = () => {
              let { stream: e, channel: t, runningGame: n } = this.props,
                l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
              null != l &&
                null != n &&
                (null == e
                  ? (0, m.createBroadcastChannelOrStartStream)({
                      channelId: l.id,
                      pid: n.pid,
                    })
                  : (0, A.startBroadcastForStream)(
                      (0, G.encodeStreamKey)(e),
                      n.pid
                    ));
            }),
            (this.handleClickGoLiveButton = () => {
              let { guildId: e, channel: t, canStartBroadcast: a } = this.props,
                s = null != t && (0, H.isVoiceChannel)(t.type) ? t : null,
                i = null != s ? s.getGuildId() : e;
              if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
                (0, v.openStartBroadcastConfirmModal)(this.startBroadcast);
                return;
              }
              (0, f.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("451863")
                  .then(n.bind(n, "451863"));
                return t =>
                  (0, l.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: i,
                    analyticsLocation: eI.AnalyticsLocations.ACTIVITY_PANEL,
                  });
              }).then(e => {
                null != e && (this.modalKey = e);
              });
            }),
            (this.handleClickStopStreamingButton = () => {
              let { stream: e, channel: t, userId: n } = this.props,
                l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
              if (
                (null == l ? void 0 : l.isBroadcastChannel()) &&
                (null == l ? void 0 : l.isOwner(n))
              ) {
                (0, v.openStopBroadcastConfirmModal)(() => (0, V.default)(e));
                return;
              }
              (0, V.default)(e);
            }),
            (this.handleClickInviteButton = () => {
              let { activity: e, analyticsContext: t } = this.props;
              u(null != e, "Received null activity"),
                ep.default.track(eI.AnalyticEvents.OPEN_MODAL, {
                  type: "Send Join Invite",
                  application_id: e.application_id,
                  location: t.location,
                }),
                (0, h.openModal)(e, !1);
            }),
            (this.handleClickDropsButton = () => {
              let {
                dropsPartnerGame: e,
                dropsTooltipAction: t,
                userId: n,
              } = this.props;
              if (null == e) return;
              let l = (0, y.getDrop)(e);
              null != l &&
                (ep.default.track(
                  eI.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK,
                  {
                    user_id: n,
                    drops_quest_id: l.dropsQuestId,
                    game_id: l.dropsGameId,
                    game_name: l.title.toLowerCase(),
                    show_sparkles: this.state.showDropsSparkles,
                    tooltip_action: t,
                  }
                ),
                this.setState({
                  isDropsActivityPanelTooltipOpen:
                    !this.state.isDropsActivityPanelTooltipOpen,
                  showDropsSparkles: !1,
                }));
            }),
            (this.handleClickLeaveEmbeddedActivityButton = (e, t) => () => {
              (0, _.stopEmbeddedActivity)({
                channelId: t.id,
                applicationId: e,
              });
            }),
            (this.renderClipsButton = () => {
              let { stream: e } = this.props;
              return null == e ? null : (0, l.jsx)(R.default, {});
            }),
            (this.handleApplicationLinkClick = () => {
              var e;
              let { channel: t, embeddedActivity: n } = this.props;
              u(null != t, "Channel is null during navigation click"),
                u(null != n, "Activity null during navigation click"),
                (0, H.isVoiceChannel)(t.type) &&
                  C.default.selectParticipant(t.id, n.applicationId),
                p.default.channelListScrollTo(
                  null !== (e = t.guild_id) && void 0 !== e ? e : eI.ME,
                  t.id
                ),
                (0, H.isTextChannel)(t.type) &&
                  (0, _.updateActivityPanelMode)(e_.ActivityPanelModes.PANEL);
            });
        }
      }
      var ev = (0, g.default)(function (e) {
        var t;
        let { guildId: n, ...a } = e,
          s = (0, o.useStateFromStores)([Y.default], () => Y.default.getId()),
          i = (0, o.useStateFromStores)([j.default, et.default], () =>
            (0, B.default)(j.default, et.default)
          ),
          r = (0, o.useStateFromStores)([q.default, K.default], () =>
            K.default.getChannel(q.default.getVoiceChannelId())
          ),
          u = (0, o.useStateFromStores)([S.default], () =>
            S.default.getConnectedActivityChannelId()
          ),
          c = (0, o.useStateFromStores)([K.default], () =>
            K.default.getChannel(u)
          ),
          [f, h] = (0, o.useStateFromStoresArray)([k.default], () => [
            k.default.getCurrentUserActiveStream(),
            k.default.getStreamerActiveStreamMetadata(),
          ]),
          C = (0, o.useStateFromStores)(
            [I.default],
            () => I.default.useReducedMotion
          ),
          p = (0, o.useStateFromStores)([O.default], () =>
            O.default.getActivityPanelTooltipAction()
          ),
          {
            partnerGame: m,
            dropsActivityPanelExperienceBlocked: E,
            showDropsSparkles: g,
          } = (0, M.useActivityPanelDrop)(
            eS.PartnerGame.FORTNITE,
            i,
            d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP,
            d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP
          ),
          _ = (0, o.useStateFromStores)([S.default], () =>
            null != c ? S.default.getSelfEmbeddedActivityForChannel(c.id) : null
          ),
          N = (0, o.useStateFromStores)(
            [Z.default, X.default, W.default],
            () => {
              if (null != r)
                return U.canStreamInChannel(r, Z.default, X.default, !1);
              if (null != n) {
                let e = U.getStreamEligibleChannels(
                  W.default.getChannels(n),
                  Z.default,
                  X.default
                );
                return e.length > 0;
              }
              return !1;
            }
          ),
          [A] = (0, T.default)([
            null !==
              (t = (function () {
                if (null != h && null != h.id) return h.id;
                if (null != i && null != i.id) return i.id;
                if (null != _) return _.applicationId;
              })()) && void 0 !== t
              ? t
              : "",
          ]),
          v = (0, o.useStateFromStores)(
            [z.default],
            () => (0, P.default)(z.default) && (0, em.isWindows)()
          ),
          R = (0, o.useStateFromStores)([Q.default], () =>
            null != s
              ? Q.default.findActivity(
                  s,
                  e => e.type === eI.ActivityTypes.PLAYING
                )
              : null
          ),
          y =
            null != f &&
            f.ownerId === s &&
            f.state !== eI.ApplicationStreamStates.ENDED,
          D = (0, o.useStateFromStores)([$.default], () =>
            $.default.getBroadcast()
          ),
          b = (0, L.default)() && null != i,
          G = (0, o.useStateFromStores)([ee.default, J.default], () =>
            null != c
              ? (0, x.computeChannelName)(c, ee.default, J.default)
              : void 0
          ),
          w = (0, o.useStateFromStores)([Z.default], () =>
            Z.default.getGuild(n)
          );
        return (0, l.jsx)(eL, {
          ...a,
          guildId: n,
          canGoLive: v,
          activity: R,
          embeddedActivity: _,
          showDropsSparkles: g,
          dropsPartnerGame: m,
          dropsActivityPanelExperienceBlocked: E,
          userId: s,
          runningGame: i,
          application: A,
          useReducedMotion: C,
          isStreaming: y,
          channel: c,
          canStream: N,
          dropsTooltipAction: p,
          stream: f,
          streamMetadata: h,
          broadcast: D,
          canStartBroadcast: b,
          channelName: G,
          guild: w,
        });
      });
    },
    974165: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("424973");
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("151426"),
        i = n("77078"),
        r = n("990766"),
        u = n("716241"),
        o = n("713726"),
        d = n("9759"),
        c = n("705565"),
        f = n("44723"),
        h = n("503417"),
        C = n("162236"),
        p = n("384997"),
        m = n("161454"),
        E = n("374014"),
        g = n("375202"),
        I = n("373469"),
        _ = n("271938"),
        S = n("18494"),
        N = n("101125"),
        T = n("703370"),
        A = n("774223"),
        L = n("962541"),
        v = n("49111"),
        x = n("994428"),
        R = n("782340");
      function M() {
        let e = (0, a.useStateFromStores)([S.default], () =>
            S.default.getVoiceChannelId()
          ),
          t = (0, a.useStateFromStores)([_.default], () => _.default.getId()),
          n = (0, a.useStateFromStores)([m.default, T.default], () =>
            (0, g.default)(m.default, T.default)
          ),
          { canBroadcast: M } = d.default.useExperiment(
            { location: "broadcast_button_rtc_panel_no_track" },
            { autoTrackExposure: !1 }
          ),
          O = (0, c.default)() && null != n,
          y = (0, a.useStateFromStores)(
            [N.default],
            () => null != N.default.getBroadcast()
          ),
          D = (0, a.useStateFromStoresArray)([I.default], () =>
            I.default.getAllActiveStreams()
          );
        if (!O && !y) return null;
        if (
          (d.default.trackExposure({ location: "broadcast_button_rtc_panel" }),
          !M)
        )
          return null;
        let b = [];
        O && b.push(s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP);
        let j = () => {
            u.default.trackWithMetadata(
              v.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED,
              { game_id: null == n ? void 0 : n.id }
            );
          },
          G = () => {
            if (O) {
              let l = D.find(e => e.ownerId === t);
              null == l
                ? (0, C.openBroadcastingPrivacySettingsModal)(
                    R.default.Messages.START_BROADCASTING,
                    R.default.Messages.START_BROADCASTING_CTA,
                    () => {
                      (0, r.createBroadcastChannelOrStartStream)({
                        pid: null == n ? void 0 : n.pid,
                        channelId: e,
                      });
                    }
                  )
                : (0, o.startBroadcastForStream)(
                    (0, E.encodeStreamKey)(l),
                    null == n ? void 0 : n.pid
                  );
            } else (0, o.stopBroadcast)();
          },
          U = e =>
            (0, l.jsx)(L.default, {
              tooltipText: O
                ? R.default.Messages.START_BROADCASTING
                : R.default.Messages.STOP_BROADCASTING,
              onClick: () => {
                G(), null == e || e(x.ContentDismissActionType.UNKNOWN);
              },
              onMouseEnter: j,
              icon: O
                ? A.default
                : () => (0, l.jsx)(h.default, { width: 20, height: 20 }),
            }),
          P = e => (0, l.jsx)(f.default, { markAsDismissed: e });
        return (0, l.jsx)(p.default, {
          contentTypes: b,
          bypassAutoDismiss: !0,
          children: e => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP
              ? (0, l.jsx)(i.Popout, {
                  position: "top",
                  align: "center",
                  renderPopout: () => P(n),
                  shouldShow: !0,
                  children: () => U(n),
                })
              : U();
          },
        });
      }
    },
    733335: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("234755"),
        r = n("101125"),
        u = n("474571"),
        o = n("962541"),
        d = n("782340");
      function c() {
        let e = (0, a.useStateFromStores)([r.default], () =>
          r.default.getBroadcast()
        );
        return null == e
          ? null
          : (0, l.jsx)(s.Popout, {
              position: "top",
              renderPopout: e => {
                let { closePopout: t } = e;
                return (0, l.jsx)(i.default, { onClose: t });
              },
              animation: s.Popout.Animation.FADE,
              children: e =>
                (0, l.jsx)(o.default, {
                  ...e,
                  tooltipText: d.default.Messages.BROADCAST_SETTINGS,
                  icon: u.default,
                }),
            });
      }
    },
    567593: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("394846"),
        u = n("446674"),
        o = n("77078"),
        d = n("272030"),
        c = n("454286"),
        f = n("485328"),
        h = n("123225"),
        C = n("940365"),
        p = n("42203"),
        m = n("952451"),
        E = n("305961"),
        g = n("660478"),
        I = n("18494"),
        _ = n("316133"),
        S = n("822332"),
        N = n("409082"),
        T = n("476765"),
        A = n("659500"),
        L = n("701909"),
        v = n("104589"),
        x = n("116460"),
        R = n("139038"),
        M = n("49111"),
        O = n("782340"),
        y = n("649474");
      let D = { bottom: 10 },
        b = () =>
          (0, l.jsxs)("div", {
            className: y.emptyState,
            children: [
              (0, l.jsx)("div", {
                className: y.emptyStateNote,
                children: O.default.Messages.QUICKSWITCHER_EMPTY_TEXT,
              }),
              (0, l.jsx)("div", {
                className: y.emptyStateCTA,
                children: (0, l.jsx)(o.Anchor, {
                  href: L.default.getArticleURL(
                    M.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL
                  ),
                  children: O.default.Messages.QUICKSWITCHER_EMPTY_CTA,
                }),
              }),
            ],
          });
      class j extends a.Component {
        render() {
          let e = E.default.getGuild(this.props.channel.guild_id);
          return (0, l.jsx)(N.Channel, {
            ...this.props,
            children: (0, l.jsx)("div", {
              className: y.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      j.defaultProps = { unread: !1 };
      let G = u.default.connectStores([g.default, p.default], e => {
          let { channel: t } = e;
          return {
            unread: g.default.hasUnread(t.id),
            mentions: g.default.getMentionCount(t.id),
            category: p.default.getChannel(t.parent_id),
          };
        })(j),
        U = u.default.connectStores([_.default], e => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id..."
            );
          return { voiceStates: _.default.getVoiceStates(t.guild_id)[t.id] };
        })(j),
        P = u.default.connectStores([m.default], e => {
          let { guild: t } = e;
          return { unread: m.default.hasUnread(t.id) };
        })(N.Guild),
        w = u.default.connectStores([g.default], e => {
          let { channel: t } = e;
          return { mentions: g.default.getMentionCount(t.id) };
        })(N.GroupDM),
        F = u.default.connectStores([p.default, g.default], e => {
          let { user: t } = e,
            n = p.default.getDMFromUserId(t.id);
          return { mentions: null != n ? g.default.getMentionCount(n) : 0 };
        })(N.User);
      function B(e, t, n) {
        return (0, l.jsx)(
          o.Tooltip,
          {
            text: n,
            children: e =>
              (0, l.jsx)("span", {
                ...e,
                className: y.autocompleteQuerySymbol,
                children: t,
              }),
          },
          e
        );
      }
      class V extends a.PureComponent {
        componentDidMount() {
          f.default.disable(), f.default.enableTemp(c.SETTINGS_LAYERS_LAYOUT);
        }
        componentWillUnmount() {
          f.default.disableTemp(), f.default.enable();
        }
        componentDidUpdate(e, t) {
          let { mouseFocusDisabled: n, query: l } = this.state,
            { selectedIndex: a } = this.props,
            { current: s } = this.scrollerRef;
          null != s &&
            (l !== t.query
              ? s.scrollTo({ to: 0 })
              : n &&
                a >= 0 &&
                s.scrollToIndex({ section: 0, row: a, padding: 10 }));
        }
        close() {
          (0, v.hide)();
        }
        search(e) {
          this.setState({ query: e }), (0, v.search)(e);
        }
        renderInput() {
          let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            a = t.length > 0 && "" !== n;
          return (0, l.jsx)(o.FocusRing, {
            children: (0, l.jsx)("input", {
              className: y.input,
              "aria-label": O.default.Messages.QUICK_SWITCHER,
              ref: this.inputRef,
              type: "text",
              role: "combobox",
              "aria-controls": this._listId,
              "aria-expanded": a,
              "aria-activedescendant": a ? this.getRowId(e) : void 0,
              "aria-autocomplete": "list",
              placeholder: O.default.Messages.QUICKSWITCHER_PLACEHOLDER,
              onChange: this.handleInputChange,
              onKeyDown: this.handleKeyDown,
              value: this.state.query,
              spellCheck: !1,
              autoFocus: !0,
            }),
          });
        }
        renderSection() {
          return null;
        }
        renderResults() {
          let { query: e } = this.state,
            { results: t } = this.props;
          return 0 === t.length && e.length > 0
            ? (0, l.jsx)(b, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(o.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": O.default.Messages.QUICK_SWITCHER_RESULTS_LABEL,
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: D.bottom,
                  sections: [t.length],
                  className: y.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          A.ComponentDispatch.dispatch(
            M.ComponentActions.QUICKSWITCHER_RESULT_FOCUS,
            { node: e }
          );
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, l.jsx)(S.default, {
            className: i(y.protip, {
              [y.hasContent]: this.state.query.length > 0,
            }),
            type: S.default.Types.INLINE,
            children: O.default.Messages.QUICKSWITCHER_PROTIP.format({
              userSymbolHook: (e, t) =>
                B(
                  t,
                  h.AutocompleterQuerySymbols.USER,
                  O.default.Messages.QUICKSWITCHER_PROTIP_USERNAMES
                ),
              textChannelSymbolHook: (e, t) =>
                B(
                  t,
                  h.AutocompleterQuerySymbols.TEXT_CHANNEL,
                  O.default.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS
                ),
              voiceChannelSymbolHook: (e, t) =>
                B(
                  t,
                  h.AutocompleterQuerySymbols.VOICE_CHANNEL,
                  O.default.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS
                ),
              guildSymbolHook: (e, t) =>
                B(
                  t,
                  h.AutocompleterQuerySymbols.GUILD,
                  O.default.Messages.QUICKSWITCHER_PROTIP_GUILDS
                ),
              helpdeskArticle: L.default.getArticleURL(
                M.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL
              ),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
          return t
            ? null
            : (0, l.jsx)(R.default, { hasQuery: e.length > 0 && n.length > 0 });
        }
        render() {
          return (0, l.jsx)(o.ModalRoot, {
            "aria-label": O.default.Messages.QUICK_SWITCHER,
            size: o.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: i(y.container, r.isMobile && y.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)("div", {
              className: i(
                y.quickswitcher,
                r.isMobile && y.mobileQuickswitcher
              ),
              onMouseMove: this.handleMouseMove,
              children: [
                this.renderInput(),
                this.renderResults(),
                this.renderProtip(),
                this.renderTutorial(),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.scrollerRef = a.createRef()),
            (this.inputRef = a.createRef()),
            (this._listId = (0, T.uid)()),
            (this.state = { query: this.props.query, mouseFocusDisabled: !0 }),
            (this.handleInputChange = () => {
              let { current: e } = this.inputRef;
              null != e && this.search(e.value);
            }),
            (this.handleMouseMove = () => {
              let { mouseFocusDisabled: e } = this.state;
              !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            (this.focusResult = e => {
              !this.state.mouseFocusDisabled &&
                (0, v.selectResult)(this.props.results.indexOf(e));
            }),
            (this.selectResult = e => {
              (0, v.switchToResult)(
                e,
                this.props.queryMode === h.AutocompleterResultTypes.TEXT_CHANNEL
              );
            }),
            (this.handleContextMenu = e => {
              let t = this.props.results[this.props.selectedIndex];
              switch (t.type) {
                case h.AutocompleterResultTypes.GUILD:
                  return (0, d.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("374705")
                      .then(n.bind(n, "374705"));
                    return n =>
                      (0, l.jsx)(e, {
                        ...n,
                        guild: t.record,
                        onSelect: v.hide,
                        hideSettings: !0,
                      });
                  });
                case h.AutocompleterResultTypes.TEXT_CHANNEL:
                case h.AutocompleterResultTypes.VOICE_CHANNEL:
                  let a = t.record,
                    s = E.default.getGuild(a.getGuildId());
                  if (null == s) return;
                  switch (a.type) {
                    case M.ChannelTypes.GUILD_TEXT:
                    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case M.ChannelTypes.GUILD_FORUM:
                    case M.ChannelTypes.GUILD_MEDIA:
                      return (0, d.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("327241")
                          .then(n.bind(n, "327241"));
                        return t =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: a,
                            guild: s,
                            onSelect: v.hide,
                          });
                      });
                    case M.ChannelTypes.GUILD_VOICE:
                    case M.ChannelTypes.GUILD_STAGE_VOICE:
                      return (0, d.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("168003")
                          .then(n.bind(n, "168003"));
                        return t =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: a,
                            guild: s,
                            onSelect: v.hide,
                          });
                      });
                    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case M.ChannelTypes.PUBLIC_THREAD:
                    case M.ChannelTypes.PRIVATE_THREAD:
                      return (0, d.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("994827")
                          .then(n.bind(n, "994827"));
                        return t =>
                          (0, l.jsx)(e, { ...t, channel: a, onSelect: v.hide });
                      });
                    case M.ChannelTypes.GUILD_STORE:
                      return (0, d.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("599943")
                          .then(n.bind(n, "599943"));
                        return t =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: a,
                            guild: s,
                            onSelect: v.hide,
                          });
                      });
                    case M.ChannelTypes.GUILD_DIRECTORY:
                      return (0, d.openContextMenuLazy)(e, async () => {
                        let { default: e } = await n
                          .el("425630")
                          .then(n.bind(n, "425630"));
                        return t => (0, l.jsx)(e, { ...t, channel: a });
                      });
                  }
                  break;
                case h.AutocompleterResultTypes.GROUP_DM:
                  return (0, d.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("493015")
                      .then(n.bind(n, "493015"));
                    return n =>
                      (0, l.jsx)(e, {
                        ...n,
                        channel: t.record,
                        selected: I.default.getChannelId() === t.record.id,
                        onSelect: v.hide,
                      });
                  });
                case h.AutocompleterResultTypes.USER:
                  return (0, d.openContextMenuLazy)(e, async () => {
                    let { default: e } = await n
                      .el("406784")
                      .then(n.bind(n, "406784"));
                    return n =>
                      (0, l.jsx)(e, { ...n, user: t.record, onSelect: v.hide });
                  });
              }
            }),
            (this.handleKeyDown = e => {
              let { mouseFocusDisabled: t, query: n } = this.state,
                { results: l } = this.props;
              !1 === t && this.setState({ mouseFocusDisabled: !0 });
              let a = e.key.toLowerCase(),
                { selectedIndex: s } = this.props;
              switch (a) {
                case "escape":
                  e.preventDefault(),
                    e.stopPropagation(),
                    n.length > 0 ? this.search("") : (0, v.hide)();
                  return;
                case "k":
                  (!0 === e.ctrlKey || !0 === e.metaKey) &&
                    (e.preventDefault(), e.stopPropagation(), (0, v.hide)());
                  return;
                case "enter": {
                  if (-1 === s) return;
                  if ((e.preventDefault(), e.altKey))
                    return this.handleContextMenu(e);
                  let t = l[s];
                  null != t && this.selectResult(t);
                  return;
                }
                case "arrowup":
                  s = (0, h.findNextSelectedResult)(
                    h.FindResultDirections.UP,
                    s,
                    l
                  );
                  break;
                case "arrowdown":
                  s = (0, h.findNextSelectedResult)(
                    h.FindResultDirections.DOWN,
                    s,
                    l
                  );
                  break;
                case "n":
                  if (!e.ctrlKey) return;
                  s = (0, h.findNextSelectedResult)(
                    h.FindResultDirections.DOWN,
                    s,
                    l
                  );
                  break;
                case "p":
                  if (!e.ctrlKey) return;
                  s = (0, h.findNextSelectedResult)(
                    h.FindResultDirections.UP,
                    s,
                    l
                  );
                  break;
                default:
                  return;
              }
              e.preventDefault(), (0, v.selectResult)(s);
            }),
            (this.renderRow = e => {
              let { row: t } = e,
                n = this.props.results[t],
                { selectedIndex: a } = this.props,
                { showScores: s } = C.default.getCurrentConfig(
                  { location: "62f4be_1" },
                  { autoTrackExposure: !1 }
                );
              switch (n.type) {
                case h.AutocompleterResultTypes.HEADER:
                  return (0, l.jsx)(
                    N.Header,
                    { children: n.record.text },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.TEXT_CHANNEL:
                  return (0, l.jsx)(
                    G,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: s ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.VOICE_CHANNEL:
                  return (0, l.jsx)(
                    U,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: s ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.GUILD:
                  return (0, l.jsx)(
                    P,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      guild: n.record,
                      score: s ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.USER:
                  return (0, l.jsx)(
                    F,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      user: n.record,
                      comparator: n.comparator,
                      score: s ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.GROUP_DM:
                  return (0, l.jsx)(
                    w,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: s ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.APPLICATION:
                  return (0, l.jsx)(
                    N.Application,
                    {
                      id: this.getRowId(t),
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      application: n.record,
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                case h.AutocompleterResultTypes.LINK:
                  return (0, l.jsx)(
                    N.Link,
                    {
                      focused: a >= 0 && t === a,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      link: n.record,
                      score: s ? n.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(n.type, "-").concat(n.record.id)
                  );
                default:
                  return null;
              }
            });
        }
      }
      function H(e) {
        let t = (0, u.useStateFromStoresObject)([x.default], () =>
          x.default.getProps()
        );
        return (0, l.jsx)(V, { ...t, ...e });
      }
    },
    359477: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("913144"),
        i = n("316272"),
        r = n("104589"),
        u = n("116460"),
        o = n("567593");
      let d = "QUICK_SWITCHER_MODAL_KEY";
      class c extends i.default {
        _initialize() {
          s.default.subscribe("QUICKSWITCHER_SHOW", this.handleShow),
            s.default.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        _terminate() {
          s.default.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow),
            s.default.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        handleShow() {
          u.default.isOpen() &&
            !(0, a.hasModalOpen)(d) &&
            (0, a.openModal)(e => (0, l.jsx)(o.default, { ...e }), {
              modalKey: d,
              instant: !0,
              onCloseCallback: r.hide,
            });
        }
        handleHide() {
          (0, a.closeModal)(d);
        }
      }
      var f = new c();
    },
    139038: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("458960"),
        u = n("862337"),
        o = n("659500"),
        d = n("49111"),
        c = n("782340"),
        f = n("244959");
      let h = { friction: 15, tension: 100 };
      class C extends a.PureComponent {
        componentDidMount() {
          this.setState({ shown: !0 }),
            o.ComponentDispatch.subscribe(
              d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus
            );
        }
        componentWillUnmount() {
          this.focusTimeout.stop(),
            o.ComponentDispatch.unsubscribe(
              d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus
            );
        }
        componentDidUpdate() {
          let { hasQuery: e } = this.props;
          !e && this.springTo(0);
        }
        springTo(e) {
          r.default
            .spring(this.state.translateY, { toValue: Math.min(e, 250), ...h })
            .start();
        }
        renderArrowGroup(e) {
          return (0, l.jsxs)("div", {
            className: i(f.arrowGroup, e),
            children: [
              (0, l.jsx)(r.default.div, {
                className: i(f.arrowContainer, f.horizontal),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n("446963"),
                  className: f.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: i(f.arrowContainer, f.diag1),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n("423739"),
                  className: f.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: i(f.arrowContainer, f.diag2),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n("22079"),
                  className: f.arrowIcon,
                }),
              }),
            ],
          });
        }
        renderContent() {
          return (0, l.jsxs)("div", {
            className: f.tutorialMessages,
            children: [
              (0, l.jsx)("div", {
                className: f.searchMessage,
                children:
                  c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH,
              }),
              (0, l.jsx)("div", {
                className: f.selectMessage,
                children:
                  c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT,
              }),
            ],
          });
        }
        render() {
          let { hasQuery: e } = this.props,
            { shown: t } = this.state;
          return (0, l.jsxs)("div", {
            ref: this.rootRef,
            className: i(f.tutorial, { [f.shown]: t, [f.hasQuery]: e }),
            children: [
              this.renderContent(),
              this.renderArrowGroup(f.left),
              this.renderArrowGroup(f.right),
            ],
          });
        }
        getStyle() {
          return {
            transform: [
              {
                translateY: this.state.translateY.interpolate({
                  inputRange: [0, 250],
                  outputRange: ["0px", "".concat(250, "px")],
                }),
              },
              { translateZ: 0 },
            ],
          };
        }
        constructor(...e) {
          super(...e),
            (this.state = { shown: !1, translateY: new r.default.Value(0) }),
            (this.rootRef = a.createRef()),
            (this.focusTimeout = new u.Timeout()),
            (this.handleResultFocus = e => {
              let { node: t } = e;
              this.focusTimeout.start(1, () => {
                if (
                  this.props.hasQuery &&
                  null != t &&
                  null != this.rootRef.current
                ) {
                  let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: n } = t.getBoundingClientRect();
                  this.springTo(Math.abs(e - n) - 118 + 9);
                } else this.springTo(0);
              });
            });
        }
      }
      var p = C;
    },
    838857: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isValidGuildId: function () {
            return i;
          },
          isValidChannelId: function () {
            return r;
          },
        });
      var l = n("49111"),
        a = n("724210");
      let s = /^\d+$/;
      function i(e) {
        return (
          null != e &&
          (!!(
            e === l.ME ||
            e === l.FAVORITES ||
            e === l.EMPTY_NUX_SERVER ||
            s.test(e)
          ) ||
            !1)
        );
      }
      function r(e) {
        return (
          !!(null == e || s.test(e) || (0, a.isStaticChannelRoute)(e)) || !1
        );
      }
    },
    222871: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("64202"),
        i = n("669491"),
        r = n("77078");
      function u(e) {
        let t = (0, a.useRef)(null),
          [n, u] = (0, a.useState)(null),
          [o] = (0, a.useState)(() => new s.TimelineDataSeries()),
          d = (0, r.useToken)(i.default.colors.BACKGROUND_PRIMARY).hsl(),
          c = (0, r.useToken)(i.default.colors.TEXT_NORMAL).hsl(),
          f = (0, r.useToken)(i.default.colors.BACKGROUND_ACCENT).hsl(),
          h = (0, r.useToken)(i.default.unsafe_rawColors.BRAND_500).hsl();
        (0, a.useEffect)(() => {
          var e;
          let n = t.current;
          if (null == n) return;
          let l = new s.TimelineGraphView(
            n,
            null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1
          );
          (l.backgroundColor = d),
            (l.textColor = c),
            (l.gridColor = f),
            (l.timeOptions = { timeStyle: "short" }),
            (l.fontFamily = "gg sans"),
            (l.fontSize = 11),
            o.setColor(h),
            l.addDataSeries(o),
            l.updateEndDate(),
            u(l);
        }, [t, d, h, f, c, o]),
          o.setPoints(e.dataPoints),
          null == n || n.updateEndDate();
        let C = { width: e.width, height: e.height };
        return (0, l.jsx)(
          "canvas",
          { style: C, width: e.width, height: e.height, ref: t },
          "canvas"
        );
      }
    },
    679864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007"),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        s = n("917351"),
        i = n.n(s),
        r = n("77078"),
        u = n("224216"),
        o = n("782340"),
        d = n("685971");
      function c(e) {
        let { className: t } = e;
        return (0, l.jsxs)("svg", {
          className: t,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          children: [
            (0, l.jsx)("g", {
              filter: "url(#a)",
              children: (0, l.jsx)("path", {
                d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                fill: "currentColor",
              }),
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsxs)("filter", {
                id: "a",
                x: "0",
                y: "0",
                width: "48",
                height: "48",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, l.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, l.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, l.jsx)("feOffset", { dy: "8" }),
                  (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                  (0, l.jsx)("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                  }),
                  (0, l.jsx)("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_605_72103",
                  }),
                  (0, l.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_605_72103",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let f = [
          { x: 0.5, y: 0.05 },
          { x: 0.95, y: 0.2 },
          { x: 1, y: 0.5 },
          { x: 0.95, y: 0.8 },
          { x: 0.5, y: 0.95 },
          { x: 0.05, y: 0.8 },
          { x: 0, y: 0.5 },
          { x: 0.05, y: 0.2 },
        ],
        h = f.length;
      function C(e, t, n) {
        let l = e * t;
        return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
      }
      let p = (e, t) => {
        let n = Math.abs(t.x),
          l = Math.abs(t.y),
          a = Math.atan2(l, n) * (180 / Math.PI),
          s = e / 2 - 28.8;
        return {
          x: Math.max(s * Math.cos((2 * Math.PI * a) / 360), 0),
          y: Math.max(s * Math.sin((2 * Math.PI * a) / 360), 0),
        };
      };
      var m = a.memo(function (e) {
        let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: m,
            itemHeight: E,
            showDeadZoneIndicator: g,
            activeItem: I,
            onItemSelect: _,
            onItemAction: S,
            interactive: N = !0,
            children: T,
          } = e,
          A = a.useRef(null),
          L = a.useRef([]),
          v = a.useRef(!1),
          x = a.useRef(null),
          [R, M] = a.useState(0),
          [O, y] = a.useState({ x: 0, y: 0 }),
          D = Math.abs(O.x) + Math.abs(O.y) > 0,
          b = a.useMemo(() => i.chunk(T, h), [T]),
          j = a.useCallback(
            (e, t) => {
              null == L.current[R]
                ? (L.current[R] = [])
                : (L.current[R][t] = e);
            },
            [R]
          ),
          G = a.useCallback(
            (e, t) => {
              (x.current = t), _(h * e + t);
            },
            [_]
          ),
          U = a.useCallback(() => {
            (x.current = null), _(null);
          }, [_]),
          P = a.useCallback(
            e => {
              U(), (v.current = e);
            },
            [U]
          ),
          w = a.useCallback((e, t, n) => {
            if (v.current) {
              y({ x: 0, y: 0 });
              return;
            }
            let l = { x: e.x - t.x, y: e.y - t.y },
              a = l.x < 0,
              s = l.y < 0,
              i = p(n, l),
              r = a ? Math.max(l.x, -i.x) : Math.min(l.x, i.x),
              u = s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y);
            y({ x: r / 2, y: u / 2 });
          }, []),
          F = a.useCallback(
            e => {
              null != x.current &&
                (e.preventDefault(),
                e.stopPropagation(),
                null == S || S(h * R + x.current));
            },
            [S, R]
          ),
          B = a.useMemo(
            () =>
              (0, s.throttle)(e => {
                if (null == A.current) return;
                let l = A.current.getBoundingClientRect(),
                  a = l.left + l.width / 2,
                  s = l.top + l.height / 2,
                  i = { x: a, y: s },
                  r = { x: e.clientX, y: e.clientY };
                if ((w(r, i, Math.max(t, n)), v.current)) {
                  null != I && U();
                  return;
                }
                let o = (0, u.extendLineSegment)(i, r, Math.max(t, n));
                for (let e = 0; e < L.current[R].length; e++) {
                  let t = L.current[R][e];
                  if (null == t) continue;
                  let n = t.getBoundingClientRect();
                  if ((0, u.doesLineSegmentIntersectRectangle)(i, o, n)) {
                    G(R, e);
                    return;
                  }
                }
                U();
              }, 16),
            [I, w, U, G, R, n, t]
          ),
          V = a.useCallback(
            e => {
              if (!N) return;
              let t = e.deltaY > 0 ? 1 : -1,
                n = R + t;
              n >= 0 &&
                n < b.length &&
                (null != x.current &&
                  (b[n].length > x.current ? G(n, x.current) : U()),
                M(n));
            },
            [N, R, b, G, U]
          ),
          H = a.useMemo(
            () =>
              b[R].map((e, a) => {
                let s = f[a];
                if (null == s)
                  throw Error(
                    "Too many items supplied "
                      .concat(T.length, " expected max of ")
                      .concat(f.length)
                  );
                let i = C(s.x, t, m),
                  r = C(s.y, n, E);
                return (0, l.jsx)(
                  "div",
                  {
                    ref: e => j(e, a),
                    className: d.chatWheelItem,
                    style: { left: i, top: r, width: m, height: E },
                    children: e,
                  },
                  a
                );
              }),
            [b, R, t, m, n, E, T.length, j]
          );
        return (0, l.jsx)(r.Clickable, {
          className: d.chatWheelMouseInput,
          onMouseMove: B,
          onWheel: V,
          onClick: F,
          children: (0, l.jsxs)("div", {
            ref: A,
            className: d.chatWheel,
            style: { width: t, height: n },
            children: [
              (0, l.jsxs)("svg", {
                className: d.chatWheelBackground,
                viewBox: "0 0 288 288",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, l.jsxs)("filter", {
                    id: "soundboard-wheel-background-shadow",
                    x: "0",
                    y: "0",
                    width: "288",
                    height: "288",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, l.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, l.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, l.jsx)("feOffset", { dy: "8" }),
                      (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                      (0, l.jsx)("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      (0, l.jsx)("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_489_60382",
                      }),
                      (0, l.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_489_60382",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("g", {
                    filter: "url(#soundboard-wheel-background-shadow)",
                    children: [
                      (0, l.jsx)("circle", {
                        className: d.chatWheelBackground,
                        cx: "144",
                        cy: "144",
                        r: "103.68",
                        strokeWidth: "40.32",
                      }),
                      g &&
                        (0, l.jsx)("circle", {
                          className: d.chatWheelDeadZone,
                          onMouseEnter: () => P(!0),
                          onMouseLeave: () => P(!1),
                          cx: 144,
                          cy: 144,
                          r: 28.8,
                        }),
                      D &&
                        (0, l.jsx)("circle", {
                          className: d.chatWheelCenter,
                          cx: 144 + O.x,
                          cy: 144 + O.y,
                          r: 28.8,
                        }),
                    ],
                  }),
                  g &&
                    (0, l.jsx)("circle", {
                      className: d.chatWheelDeadZone,
                      onMouseEnter: () => P(!0),
                      onMouseLeave: () => P(!1),
                      cx: 144,
                      cy: 144,
                      r: 28.8,
                      stroke: "none",
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: d.innerContent,
                children: [
                  g && (0, l.jsx)(c, { className: d.chatWheelDeadZoneIcon }),
                  N && b.length > 1
                    ? (0, l.jsx)("div", {
                        className: d.paginationHint,
                        children: o.default.Messages.CHAT_WHEEL_PAGINATION_HINT,
                      })
                    : null,
                ],
              }),
              H,
            ],
          }),
        });
      });
    },
    570413: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openSoundboardInOverlay: function () {
            return r;
          },
          closeSoundboardInOverlay: function () {
            return u;
          },
        }),
        n("37983"),
        n("884691");
      var l = n("913144");
      n("292508"), n("383294"), n("42203"), n("945956");
      var a = n("860957");
      n("50885"), n("350501");
      var s = n("846325");
      n("49111"), n("782340");
      let i = {
        width: s.SoundboardWheelSize.width,
        height: s.SoundboardWheelSize.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
      };
      function r(e, t) {
        l.default.dispatch({
          type: "OVERLAY_SET_INPUT_LOCKED",
          locked: !1,
          pid: t,
        }),
          l.default.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
          });
      }
      function u(e) {
        l.default.dispatch({
          type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
          pid: e,
          enabled: !1,
        }),
          !a.default.isInputLocked(e) &&
            l.default.dispatch({
              type: "OVERLAY_SET_INPUT_LOCKED",
              locked: !0,
              pid: e,
            });
      }
      s.SoundboardWheelSize.padding, i.width, i.height;
    },
    350501: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("759843"),
        i = n("446674"),
        r = n("812204"),
        u = n("685665"),
        o = n("428958"),
        d = n("872173"),
        c = n("945956"),
        f = n("299039"),
        h = n("305122"),
        C = n("235004"),
        p = n("78581"),
        m = n("24156"),
        E = n("774473"),
        g = n("679864"),
        I = n("553372"),
        _ = n("846325"),
        S = n("711582");
      function N(e) {
        let {
            guildId: t,
            channel: n,
            width: N,
            height: T,
            keepOpen: A,
            interactive: L = !0,
            analyticsSource: v,
            onClose: x,
          } = e,
          R = (0, E.useSortedGuildIdsForSoundboard)(n, !0),
          M = (function (e) {
            let [t, n] = (0, i.useStateFromStoresArray)([C.default], () => [
              C.default.getSounds(),
              C.default.getFavorites(),
            ]);
            return a.useMemo(() => {
              let l = [],
                a = [...e, _.DEFAULT_SOUND_GUILD_ID],
                s = (e, a) => {
                  var s, i;
                  let r =
                    null !==
                      (i =
                        null === (s = t.get(e)) || void 0 === s
                          ? void 0
                          : s.sort((e, t) =>
                              f.default.compare(e.soundId, t.soundId)
                            )) && void 0 !== i
                      ? i
                      : [];
                  for (let e of r) {
                    let t = n.has(e.soundId),
                      s = (t && a) || (!t && !a);
                    s && l.push(e);
                  }
                };
              return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l;
            }, [t, n, e]);
          })(R),
          O = (0, m.useGuildIdsToFetchSoundsFor)(),
          y = a.useRef(null),
          [D, b] = a.useState(void 0),
          j = (0, i.useStateFromStores)([c.default], () =>
            c.default.getMediaSessionId()
          ),
          { analyticsLocations: G, AnalyticsLocationProvider: U } = (0,
          u.default)(r.default.SOUNDBOARD_WHEEL),
          P = a.useCallback(
            e => {
              (0, p.playSound)(e, n.id, G), x();
            },
            [G, n.id, x]
          );
        a.useEffect(() => {
          h.maybeFetchSoundboardSounds(),
            d.FrecencyUserSettingsActionCreators.loadIfNecessary();
        }, []),
          a.useEffect(() => {
            0 === M.length && 0 === O.length && x();
          }, [M.length, O, x]),
          a.useEffect(
            () => () => {
              let e = y.current;
              !A && null != e && P(e);
            },
            [A, P]
          ),
          (0, o.default)(
            {
              type: s.ImpressionTypes.POPOUT,
              name: s.ImpressionNames.SOUNDBOARD_POPOUT,
              properties: { source: v, guild_id: t, media_session_id: j },
            },
            { disableTrack: !L }
          );
        let w = a.useCallback(e => {
            (y.current = e), b(null == e ? void 0 : e.soundId);
          }, []),
          F = a.useCallback(
            e => {
              if (null == e) {
                w(null);
                return;
              }
              let t = M[e];
              null != t && w(t);
            },
            [w, M]
          ),
          B = a.useCallback(
            e => {
              if (null == e) return;
              let t = M[e];
              null != t && P(t);
            },
            [M, P]
          ),
          V = a.useMemo(
            () =>
              M.map(e =>
                (0, l.jsx)(
                  I.default,
                  {
                    interactive: L,
                    className: S.soundButton,
                    sound: e,
                    focused: D === e.soundId,
                    channel: n,
                  },
                  e.soundId
                )
              ),
            [D, n, L, M]
          );
        return 0 === M.length
          ? null
          : (0, l.jsx)(U, {
              children: (0, l.jsx)(g.default, {
                wheelWidth: N,
                wheelHeight: T,
                itemWidth: 96,
                itemHeight: 52,
                showDeadZoneIndicator: !A,
                activeItem: D,
                onItemSelect: F,
                onItemAction: B,
                interactive: L,
                children: V,
              }),
            });
      }
    },
    891415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("271938"),
        s = n("325861");
      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, l.useStateFromStoresObject)(
          [s.default, a.default],
          () => {
            let n = a.default.getId();
            return s.default.getPermissionsForUser(n, e, t);
          },
          [e, t]
        );
      }
    },
    886776: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l,
        a,
        s = n("891415"),
        i = n("58763");
      function r(e) {
        let t = (0, i.default)(e),
          n = (0, s.default)(e, !0).moderator;
        return !t && n ? 1 : 0;
      }
      ((l = a || (a = {}))[(l.NORMAL = 0)] = "NORMAL"),
        (l[(l.START_EVENT = 1)] = "START_EVENT");
    },
    721264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("446674"),
        a = n("379881"),
        s = n("42203"),
        i = n("316133"),
        r = n("449008"),
        u = n("334572"),
        o = n("299039"),
        d = n("488464"),
        c = n("998716"),
        f = n("49111");
      function h(e) {
        let { voiceState: t, userNick: n, user: l } = e,
          a = (0, i.getComparator)(t, n);
        return { user: l, voiceState: t, nick: n, comparator: a };
      }
      function C(e) {
        let [t] = (0, l.useStateFromStores)(
          [d.default, s.default, a.default],
          () => {
            let t;
            t =
              e === f.FAVORITES
                ? o.default
                    .keys(a.default.getFavoriteChannels())
                    .map(e => s.default.getChannel(e))
                    .filter(r.isNotNullish)
                    .filter(e => e.isGuildStageVoice())
                : d.default.getChannels(e);
            let n = t.reduce((e, t) => {
                let n = d.default.getMutableParticipants(
                  t.id,
                  c.StageChannelParticipantNamedIndex.SPEAKER
                );
                return (
                  (e[t.id] = n
                    .filter(
                      e => e.type === c.StageChannelParticipantTypes.VOICE
                    )
                    .map(h)),
                  e
                );
              }, {}),
              l = t.reduce((e, t) => {
                let { id: n } = t;
                return e + d.default.getParticipantsVersion(n);
              }, 0);
            return [n, l];
          },
          [e],
          u.isVersionEqual
        );
        return t;
      }
    },
    885590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageChannelNowPlayingDelegate: function () {
            return h;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("65597"),
        i = n("77078"),
        r = n("42203"),
        u = n("716214"),
        o = n("118033"),
        d = n("834052"),
        c = n("782340");
      function f(e) {
        var t, n;
        let { activity: f } = e,
          { channelId: h } =
            null !== (t = (0, o.unpackStageChannelParty)(f)) && void 0 !== t
              ? t
              : {},
          C = (0, s.default)(
            [d.default],
            () => d.default.getStageInstanceByChannel(h),
            [h]
          ),
          p = a.useRef(null),
          m = a.useCallback(() => {
            let e = r.default.getChannel(h);
            null != e && u.connectAndOpen(e);
          }, [h]),
          E =
            null !== (n = null == C ? void 0 : C.topic) && void 0 !== n
              ? n
              : f.name,
          g = c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({
            channel: E,
          });
        return (0, l.jsx)("div", {
          ref: p,
          children: (0, l.jsx)(i.Clickable, {
            onClick: m,
            focusProps: { ringTarget: p },
            children: (0, l.jsx)(i.Heading, {
              variant: "heading-sm/semibold",
              children: g,
            }),
          }),
        });
      }
      class h {
        shouldShow(e) {
          return (0, o.shouldShowActivity)(e);
        }
        createHeader(e) {
          return {
            subtitle: c.default.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
            icon: null,
          };
        }
        constructor() {
          this.body = f;
        }
      }
    },
    169602: function (e, t, n) {
      "use strict";
      let l, a;
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        u = n("913144"),
        o = n("628454");
      let d = Object.freeze({}),
        c = {};
      function f(e) {
        let { lobbyId: t } = e;
        delete c[t];
      }
      class h extends r.default.Store {
        getAllVoiceStates() {
          return c;
        }
        getVoiceStates(e) {
          var t;
          return null !== (t = c[e]) && void 0 !== t ? t : d;
        }
        getVoiceState(e, t) {
          return this.getVoiceStates(e)[t];
        }
        getLobbyIdsForUser(e) {
          return Object.keys(c).filter(t => null != c[t][e]);
        }
      }
      h.displayName = "LobbyVoiceStateStore";
      var C = new h(u.default, {
        CONNECTION_OPEN: function (e) {
          let { user: t, sessionId: n } = e;
          (c = {}), (l = t.id), (a = n);
        },
        OVERLAY_INITIALIZE: function (e) {
          let { lobbyVoiceStates: t, user: n, sessionId: s } = e;
          (c = {}),
            i.each(t, (e, t) => {
              (c[t] = {}),
                i.each(e, (e, n) => {
                  c[t][n] = new o.default(e);
                });
            }),
            (l = n.id),
            (a = s);
        },
        LOBBY_VOICE_STATE_UPDATE: function (e) {
          var t;
          let n,
            {
              sessionId: s,
              userId: i,
              lobbyId: r,
              channelId: u,
              mute: d,
              deaf: f,
              selfMute: h,
              selfDeaf: C,
            } = e,
            p = i === l && s !== a,
            m = null !== (t = c[r]) && void 0 !== t ? t : {},
            E = m[i];
          if (
            (null != u &&
              !p &&
              (n =
                null == E
                  ? new o.default({
                      userId: i,
                      sessionId: s,
                      channelId: u,
                      mute: d,
                      deaf: f,
                      selfMute: h,
                      selfDeaf: C,
                    })
                  : E.merge({
                      userId: i,
                      sessionId: s,
                      channelId: u,
                      mute: d,
                      deaf: f,
                      selfMute: h,
                      selfDeaf: C,
                    })),
            E === n)
          )
            return !1;
          null == n ? ((m = { ...m }), delete m[i]) : (m = { ...m, [i]: n }),
            (c[r] = m);
        },
        LOBBY_DELETE: f,
        LOBBY_DISCONNECT: f,
      });
    },
    336376: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var l = n("446674"),
        a = n("913144"),
        s = n("233069"),
        i = n("117362"),
        r = n("42203"),
        u = n("660478"),
        o = n("18494"),
        d = n("287850");
      let c = [];
      function f() {
        let e = d.default
          .getPrivateChannelIds()
          .filter(e => u.default.getMentionCount(e) > 0);
        return (
          e.length > 20 && (e.length = 20),
          !(0, i.areArraysShallowlyEqual)(e, c) && ((c = e), !0)
        );
      }
      function h() {
        return f();
      }
      function C(e) {
        let { channelId: t } = e,
          n = r.default.getChannel(t);
        return !!(null != n && (0, s.isPrivate)(n.type)) && f();
      }
      class p extends l.default.Store {
        initialize() {
          this.waitFor(d.default, r.default, o.default, u.default);
        }
        getUnreadPrivateChannelIds() {
          return c;
        }
      }
      p.displayName = "PrivateChannelReadStateStore";
      var m = new p(a.default, {
        CONNECTION_OPEN: h,
        OVERLAY_INITIALIZE: h,
        MESSAGE_CREATE: C,
        MESSAGE_ACK: C,
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e,
            n = r.default.getChannel(t);
          return !!(null != n && (0, s.isPrivate)(n.type)) && f();
        },
        CHANNEL_DELETE: function (e) {
          let {
              channel: { id: t },
            } = e,
            n = r.default.getChannel(t);
          return !!(null != n && (0, s.isPrivate)(n.type)) && f();
        },
        WINDOW_FOCUS: function () {
          let e = r.default.getChannel(o.default.getChannelId());
          return !!(null != e && (0, s.isPrivate)(e.type)) && f();
        },
        CHANNEL_CREATE: function (e) {
          let {
              channel: { id: t },
            } = e,
            n = r.default.getChannel(t);
          return !!(null != n && (0, s.isPrivate)(n.type)) && f();
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let { id: e } of t) {
            let t = r.default.getChannel(e);
            null != t && (0, s.isPrivate)(t.type) && (n = !0);
          }
          return !!n && f();
        },
      });
    },
    402088: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("446674"),
        a = n("913144");
      let s = {};
      class i extends l.default.PersistedStore {
        initialize(e) {
          null != e &&
            Object.keys(e).forEach(t => {
              "number" == typeof e[t] && (s[t] = e[t]);
            });
        }
        getState() {
          return s;
        }
        hasViewed(e) {
          return null != s[e];
        }
      }
      (i.displayName = "ViewHistoryStore"), (i.persistKey = "ViewHistoryStore");
      var r = new i(a.default, {
        VIEW_HISTORY_MARK_VIEW: function (e) {
          let { key: t } = e;
          s[t] = Date.now();
        },
      });
    },
    552067: function (e, t, n) {
      "use strict";
      let l, a;
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("77078"),
        r = n("913144"),
        u = n("427495"),
        o = n("49111");
      let d = null;
      function c(e) {
        null != l && e ? l() : null != a && a(), (l = null), (a = null);
      }
      var f = {
        init() {
          r.default.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
            if (
              (c(!1),
              (d = e.context),
              (l = e.resolve),
              (a = e.reject),
              o.CURRENT_APP_CONTEXT === e.context)
            ) {
              let e;
              (e = !1),
                (0, i.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .el("999391")
                      .then(n.bind(n, "999391"));
                    return n => {
                      let { onClose: l, ...a } = n;
                      return (0, s.jsx)(t, {
                        ...a,
                        onClose: t => {
                          (e = t), l();
                        },
                      });
                    };
                  },
                  {
                    onCloseCallback: () => {
                      (0, u.closeModal)(e);
                    },
                  }
                );
            }
          }),
            r.default.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
              let { shouldContinue: t } = e;
              (d = null), c(t);
            }),
            r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
              let { locked: t } = e;
              t && null != d && ((d = null), c(!1));
            });
        },
      };
    },
    866681: function (e, t, n) {
      "use strict";
      let l, a;
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("37983");
      n("884691");
      var i = n("77078"),
        r = n("913144"),
        u = n("73961"),
        o = n("49111");
      let d = null,
        c = null;
      function f(e) {
        null != l && null != d ? l(d) : null != a && a(e),
          (l = null),
          (a = null);
      }
      var h = {
        init() {
          r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_OPEN", e => {
            if (
              (f(),
              (c = e.context),
              (d = e.entitlements),
              (l = e.resolve),
              (a = e.reject),
              o.CURRENT_APP_CONTEXT === e.context)
            ) {
              var t, r, h, C;
              let l;
              (t = e.context),
                (r = e.applicationId),
                (h = e.skuId),
                (C = e.analyticsSource),
                (l = null),
                (0, i.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("380140")
                      .then(n.bind(n, "380140"));
                    return n => {
                      let { onClose: a, ...i } = n;
                      return (0, s.jsx)(e, {
                        ...i,
                        onClose: function () {
                          let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : null;
                          (l = e), a();
                        },
                        applicationId: r,
                        skuId: h,
                        analyticsSource: C,
                        isIAP: t === o.AppContext.OVERLAY,
                      });
                    };
                  },
                  {
                    onCloseCallback: () => {
                      (0, u.closePurchaseConfirmationModal)(l);
                    },
                  }
                );
            }
          }),
            r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_CLOSE", e => {
              let { error: t } = e;
              (c = null), f(t);
            }),
            r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
              let { locked: t } = e;
              t && null != c && ((c = null), f());
            });
        },
      };
    },
    392453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return el;
          },
        }),
        n("222007"),
        n("424973"),
        n("808653");
      var l = n("917351"),
        a = n.n(l),
        s = n("446674"),
        i = n("913144"),
        r = n("126939"),
        u = n("501260"),
        o = n("152311"),
        d = n("429928"),
        c = n("36539"),
        f = n("502651"),
        h = n("651057"),
        C = n("299285"),
        p = n("605250"),
        m = n("619443"),
        E = n("177589"),
        g = n("67139"),
        I = n("671071"),
        _ = n("322631"),
        S = n("947297"),
        N = n("373469"),
        T = n("42203"),
        A = n("350522"),
        L = n("925758"),
        v = n("305961"),
        x = n("957255"),
        R = n("824563"),
        M = n("27618"),
        O = n("843823"),
        y = n("697218"),
        D = n("800762"),
        b = n("449008"),
        j = n("49111");
      let G = !1,
        U = !1,
        P = [],
        w = [],
        F = {},
        B = {},
        V = new Set(),
        H = new Set();
      function k() {
        let e = M.default.getFriendIDs();
        return A.default.hasConsented(j.Consents.PERSONALIZATION)
          ? new Set([...O.default.getUserAffinitiesUserIds(), ...e])
          : new Set(e);
      }
      function Y(e) {
        return R.default.findActivity(
          e,
          e => e.type !== j.ActivityTypes.CUSTOM_STATUS
        );
      }
      function K(e) {
        let t = F[e];
        return (
          null == t && (F = { ...F, [e]: new S.default({ name: e }) }), F[e]
        );
      }
      function W(e) {
        let t = B[e];
        return (
          null == t && (B = { ...B, [e]: new _.default({ url: e }) }), B[e]
        );
      }
      function Z(e) {
        !H.has(e) && V.add(e);
      }
      function z(e) {
        if ((0, d.default)(e)) return I.SpotifyApplication;
        let t =
          null != e.application_id
            ? C.default.getApplication(e.application_id)
            : null;
        return null != t
          ? t
          : (0, c.default)(e)
            ? K(e.name)
            : (0, f.default)(e) && null != e.url
              ? W(e.url)
              : (null != e.application_id && Z(e.application_id), t);
      }
      function X(e) {
        let t = D.default.getVoiceStateForUser(e);
        return (null == t ? void 0 : t.channelId) != null &&
          x.default.canWithPartialContext(j.Permissions.VIEW_CHANNEL, {
            channelId: t.channelId,
          })
          ? t.channelId
          : null;
      }
      function Q(e) {
        return M.default.isFriend(e.id);
      }
      function J(e, t, n) {
        var l, s, i, d, c;
        let f;
        let h = y.default.getCurrentUser(),
          m = t.map(e => e.id),
          A = t.filter(t => e.has(t.id)),
          M = !1,
          O = [],
          j = new Set(),
          G = !1,
          U = [];
        for (let e of t) {
          let n = N.default.getAnyStreamForUser(e.id),
            d = Y(e.id);
          if (
            (null != n && U.push({ stream: n, streamUser: e, activity: d }),
            null == d)
          )
            continue;
          let c = (0, E.default)(d);
          if (null == c) continue;
          G = c === I.SPOTIFY_APPLICATION_ID;
          let f = (function (e) {
              let t = C.default.getApplication(e);
              return null != t
                ? t
                : "string" != typeof e
                  ? (new (0, p.default)("NowPlayingViewStore").error(
                      "Unknown type for applicationId: "
                        .concat(typeof e, ", value: ")
                        .concat(e),
                      { tags: { source: "ACTIVITIES" } }
                    ),
                    null)
                  : e === I.SPOTIFY_APPLICATION_ID
                    ? I.SpotifyApplication
                    : e.startsWith(S.XBOX_APPLICATION_ID_PREFIX)
                      ? K(e.slice(S.XBOX_APPLICATION_ID_PREFIX.length))
                      : e.startsWith(_.TWITCH_APPLICATION_ID_PREFIX)
                        ? W(e.slice(_.TWITCH_APPLICATION_ID_PREFIX.length))
                        : (Z(e), null);
            })(c),
            m = null === (l = d.timestamps) || void 0 === l ? void 0 : l.start;
          if ((0, o.default)(d)) {
            let t = (0, r.getIsActivitiesEnabledForCurrentPlatform)(),
              n =
                (0, u.default)({
                  activity: d,
                  userId: e.id,
                  application: f,
                  channelId:
                    null === (s = D.default.getVoiceStateForUser(e.id)) ||
                    void 0 === s
                      ? void 0
                      : s.channelId,
                  currentUser: h,
                  isActivitiesEnabledForCurrentPlatform: t,
                  ChannelStore: T.default,
                  VoiceStateStore: D.default,
                  PermissionStore: x.default,
                  GuildStore: v.default,
                }) !== u.EmbeddedActivityJoinability.CAN_JOIN;
            if (n) continue;
          } else if (null == m) continue;
          if (!g.shouldShowActivity(d) || null == f || j.has(f.id)) continue;
          let A = null != d ? z(d) : null;
          (null == A || A.id !== f.id) && (d = null);
          let R = [];
          if (null != d && null != d.party && null != d.party.id) {
            let e =
              null !== (i = L.default.getParty(d.party.id)) && void 0 !== i
                ? i
                : [];
            R = Array.from(e).reduce((e, t) => {
              let n = y.default.getUser(t);
              return null != n && e.push(n), e;
            }, []);
          } else
            R = t.filter(e => {
              let t = Y(e.id),
                n = null != t ? z(t) : null;
              return null != n && n.id === f.id;
            });
          (R = a.orderBy(R, [Q], ["desc"])).length !== t.length && (M = !0),
            j.add(f.id),
            O.push({
              game: f,
              activity: d,
              activityUser: e,
              startedPlayingTime: m,
              playingMembers: R,
            });
        }
        let P = 1 === A.length,
          w = [],
          F = new Set(),
          B = new Set();
        for (let e of t) {
          let n = X(e.id),
            l = T.default.getChannel(n),
            s = null != l ? l.getGuildId() : null,
            i = v.default.getGuild(s);
          if (
            (B.has(s) && F.has(n)) ||
            null == l ||
            null == i ||
            l.id === i.afkChannelId
          )
            null == l && ((f = null), (P = !0));
          else {
            let e = a(D.default.getVoiceStatesForChannel(l.id))
              .map(e => {
                let { userId: t } = e;
                return y.default.getUser(t);
              })
              .filter(b.isNotNullish)
              .orderBy([Q], ["desc"])
              .value();
            e.filter(e => !m.includes(e.id)).forEach(e => t.push(e)),
              P ? !B.has(s) && (f = null) : ((f = i), (P = !0)),
              B.add(s),
              F.add(n),
              w.push({ channel: l, guild: i, members: e });
          }
        }
        return {
          id: n,
          voiceChannels: w,
          isSpotifyActivity: G,
          priorityMembers: A.map(e => ({
            user: e,
            status: R.default.getStatus(e.id),
          })),
          partiedMembers: t,
          showPlayingMembers: M,
          guildContext: f,
          currentActivities: ((d = O),
          (c = e => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
          }),
          a(d).orderBy([c, e => e.game.name], ["desc", "asc"])).value(),
          applicationStreams: U,
        };
      }
      function q() {
        return G && m.default.isConnected();
      }
      let $ = a.throttle(() => {
        !(function () {
          if (!q()) return;
          V.clear();
          let e = Array.from(k()).reduce((e, t) => {
              let n = y.default.getUser(t);
              return null != n && !n.bot && e.push(n), e;
            }, []),
            t = a(e).groupBy(e => {
              var t;
              let n = X(e.id),
                l = Y(e.id);
              return null != n
                ? "".concat("channel-", "-").concat(n)
                : (null == l
                      ? void 0
                      : null === (t = l.party) || void 0 === t
                        ? void 0
                        : t.id) != null
                  ? "".concat("party-", "-").concat(l.party.id)
                  : "".concat("user-", "-").concat(e.id);
            }),
            n = (function (e) {
              let t = k(),
                n = J.bind(null, t);
              return a(e).mapValues(n);
            })(t),
            l = n
              .values()
              .orderBy(
                [
                  e => e.partiedMembers.length > 1,
                  e => e.applicationStreams.length > 0,
                  e => e.voiceChannels.length > 0,
                  e => e.currentActivities.length > 0,
                  e => e.isSpotifyActivity,
                  e =>
                    e.priorityMembers
                      .map(e => e.user.username.toLowerCase())
                      .join(" "),
                ],
                ["desc", "desc", "desc", "desc", "asc", "asc"]
              )
              .value();
          (w = (P = l.filter(
            e =>
              e.voiceChannels.length >= 1 ||
              e.currentActivities.length > 0 ||
              e.applicationStreams.length > 0
          )).map(e => ({ type: j.ActivityCardTypes.USER, party: e }))),
            !(function () {
              if (V.size > 0) {
                let e = Array.from(V);
                h.default.fetchApplications(e),
                  e.forEach(e => H.add(e)),
                  V.clear();
              }
            })(),
            (U = !0);
        })(),
          en.emitChange();
      }, 1e3);
      function ee() {
        return !!q() && ($(), !1);
      }
      class et extends s.default.Store {
        initialize() {
          this.syncWith(
            [
              y.default,
              C.default,
              R.default,
              L.default,
              D.default,
              N.default,
              M.default,
              A.default,
              O.default,
            ],
            ee
          ),
            this.waitFor(m.default, v.default, C.default, y.default, O.default);
        }
        get currentActivityParties() {
          return P;
        }
        get nowPlayingCards() {
          return w;
        }
        get isMounted() {
          return G;
        }
        get loaded() {
          return U;
        }
      }
      et.displayName = "NowPlayingViewStore";
      let en = new et(i.default, {
        LOGOUT: function () {
          (G = !1), (P = []), (w = []), V.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
          (G = !0), $();
        },
        NOW_PLAYING_UNMOUNTED: function () {
          G = !1;
        },
      });
      var el = en;
    },
    189857: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MESSAGE_SOUND: function () {
            return H;
          },
          MESSAGE_SOUND_VOLUME: function () {
            return k;
          },
        }),
        n("424973");
      var l = n("316693"),
        a = n("446674"),
        s = n("95410"),
        i = n("913144"),
        r = n("450911"),
        u = n("255397"),
        o = n("851387"),
        d = n("193990"),
        c = n("987317"),
        f = n("679653"),
        h = n("680986"),
        C = n("374021"),
        p = n("288518"),
        m = n("637929"),
        E = n("393414"),
        g = n("144491"),
        I = n("716214"),
        _ = n("834052"),
        S = n("967241"),
        N = n("845579"),
        T = n("42203"),
        A = n("305961"),
        L = n("385649"),
        v = n("957255"),
        x = n("27618"),
        R = n("18494"),
        M = n("101125"),
        O = n("102985"),
        y = n("697218"),
        D = n("800762"),
        b = n("387111"),
        j = n("189771"),
        G = n("566673"),
        U = n("773336"),
        P = n("709681"),
        w = n("158998"),
        F = n("49111"),
        B = n("745049"),
        V = n("782340");
      let H = "message1",
        k = 0.4,
        Y = "discord_dismissed_notification_shown",
        K = document.hasFocus(),
        W = null,
        Z = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        z = new (class {
          track(e, t) {
            let n = this._channels[e];
            for (
              null == n && ((n = []), (this._channels[e] = n)), n.push(t);
              n.length > 1;

            ) {
              let e = n.shift();
              null != e && null != e.close && e.close();
            }
          }
          clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach(e => e.close()));
          }
          constructor() {
            this._channels = {};
          }
        })();
      function X() {
        return (
          !!(
            L.default.getDesktopType() === F.DesktopNotificationTypes.NEVER ||
            M.default.getStatus() === F.StatusTypes.DND ||
            N.FocusMode.getSetting()
          ) || !1
        );
      }
      function Q(e) {
        let t = D.default.getVoiceStateForChannel(e);
        return null != t;
      }
      class J extends a.default.Store {
        initialize() {
          this.waitFor(
            y.default,
            T.default,
            L.default,
            A.default,
            _.default,
            x.default,
            v.default,
            D.default,
            p.default
          );
        }
      }
      (J.displayName = "NotificationStore"),
        new J(
          i.default,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t === F.NotificationPermissionTypes.ENABLED &&
                    !U.isPlatformEmbedded &&
                    G.default.showNotification(
                      n("348044"),
                      V.default.Messages.NOTIFICATION_TITLE_DISCORD,
                      V.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                      { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                      {
                        omitViewTracking: !0,
                        sound: H,
                        volume: k,
                        tag: "hello",
                        onClick: () => {
                          window.focus();
                        },
                      }
                    );
                },
                NOTIFICATION_CREATE: function (e) {
                  let {
                    icon: t,
                    title: n,
                    body: l,
                    trackingProps: a,
                    options: s,
                  } = e;
                  return (
                    !X() && (G.default.showNotification(t, n, l, a, s), !1)
                  );
                },
                WINDOW_FOCUS: function (e) {
                  if ((K = e.focused)) {
                    let e = R.default.getChannelId();
                    null != e && z.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, l;
                  let { channelId: a, message: s, optimistic: r } = e;
                  if (r) return !1;
                  let o = T.default.getChannel(a),
                    c = y.default.getUser(
                      null === (t = s.author) || void 0 === t ? void 0 : t.id
                    );
                  if (null == o || null == c || o.isBroadcastChannel())
                    return !1;
                  let f = (0, j.shouldNotify)(s, a, !K),
                    h = L.default.getNotifyMessagesInSelectedChannel(),
                    C = h && (0, j.shouldNotifyForSelectedChannel)(s, a);
                  if (!f && !C) return !1;
                  let p = !L.default.isSoundDisabled(H);
                  if ((C && (p && P.playSound("message3", 0.4), !K)) || !f)
                    return !1;
                  let E = n("860957").default,
                    I = n("901165").default;
                  if (
                    null != E.getFocusedPID() &&
                    I.getTextChatNotificationMode() ===
                      F.OverlayNotificationTextChatTypes.ENABLED &&
                    !O.default.disableNotifications
                  )
                    return !1;
                  let {
                    icon: _,
                    title: S,
                    body: N,
                  } = (0, j.makeTextChatNotification)(o, s, c);
                  if (
                    (i.default.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: o.id,
                      message: s,
                      icon: _,
                      title: S,
                      body: N,
                    }),
                    (0, m.trackMessageNotificationTimestamps)(s, o.guild_id),
                    L.default.getDesktopType() ===
                      F.DesktopNotificationTypes.NEVER)
                  )
                    return p && P.playSound(H, k), !1;
                  let A = G.default.showNotification(
                    _,
                    S,
                    N,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (l = s.author) || void 0 === l ? void 0 : l.id,
                      message_id: s.id,
                      message_type: s.type,
                      channel_id: o.id,
                      channel_type: o.type,
                      guild_id: o.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: s.id,
                      sound: p ? H : void 0,
                      volume: k,
                      onClick() {
                        (0, g.transitionToChannel)(o.id),
                          (o.type === F.ChannelTypes.GUILD_VOICE ||
                            o.type === F.ChannelTypes.GUILD_STAGE_VOICE) &&
                            u.default.updateChatOpen(o.id, !0),
                          d.default.clickedNotification();
                      },
                    }
                  );
                  null != A && z.track(o.id, A);
                },
                CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && z.clearChannel(t), !1;
                },
                MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return z.clearChannel(t), !1;
                },
                ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (X()) return !1;
                  if (n.type === F.ActivityTypes.PLAYING) {
                    let e = y.default.getUser(t);
                    if (null == e) return !1;
                    let l = w.default.getName(e),
                      a = n.name,
                      s = e.getAvatarURL(void 0, 128),
                      i = V.default.Messages.NOTIFICATION_TITLE_START_GAME,
                      u =
                        V.default.Messages.NOTIFICATION_BODY_START_GAME.format({
                          username: l,
                          gameName: a,
                        });
                    return (
                      G.default.showNotification(
                        s,
                        i,
                        u,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: F.ActivityTypes.PLAYING,
                          notif_user_id: t,
                          activity_name: a,
                        },
                        {
                          sound: "message2",
                          playSoundIfDisabled: !1,
                          volume: 0.4,
                          onClick() {
                            r.default.openPrivateChannel(t);
                          },
                        }
                      ),
                      !1
                    );
                  }
                  return !1;
                },
                VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  if (X()) return;
                  let n = y.default.getCurrentUser();
                  if (null == n) return;
                  let l = t.find(e => e.userId === n.id);
                  if (null == l) return;
                  let {
                    channelId: a,
                    guildId: s,
                    suppress: i,
                    requestToSpeakTimestamp: r,
                  } = l;
                  if (null == a || null == s || !(!i && null != r)) return;
                  let u = A.default.getGuild(s),
                    o = T.default.getChannel(a),
                    d = _.default.getStageInstanceByChannel(a);
                  null != u &&
                    null != o &&
                    null != d &&
                    G.default.showNotification(
                      u.getIconURL(128),
                      o.name,
                      V.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format(
                        {
                          channelName: (0, f.computeChannelName)(
                            o,
                            y.default,
                            x.default
                          ),
                          channelTopic: null == d ? void 0 : d.topic,
                        }
                      ),
                      { notif_type: "Stage Speak Invite" },
                      {}
                    );
                },
                STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (X() || !t.send_start_notification || Q(t.channel_id))
                    return !1;
                  let n = y.default.getCurrentUser(),
                    a = A.default.getGuild(t.guild_id),
                    s = T.default.getChannel(t.channel_id),
                    i = y.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == s ||
                    null == a ||
                    null == i ||
                    !(0, j.shouldNotifyBase)(n, i, s) ||
                    !v.default.can(
                      l.combine(
                        F.Permissions.CONNECT,
                        F.Permissions.VIEW_CHANNEL
                      ),
                      s
                    )
                  )
                    return !1;
                  G.default.showNotification(
                    a.getIconURL(128),
                    V.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format(
                      { guildName: a.name }
                    ),
                    V.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format(
                      {
                        username: b.default.getName(a.id, s.id, i),
                        topic: t.topic,
                      }
                    ),
                    {
                      notif_type: "STAGE_INSTANCE_CREATE",
                      guild_id: a.id,
                      channel_id: s.id,
                    },
                    {
                      onClick() {
                        (0, I.connectAndOpen)(s);
                      },
                    }
                  );
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (X() || null == t.notification_type) return !1;
                  t.notification_type ===
                    B.GuildScheduledEventNotificationTypes.EVENT_START &&
                    (t.entity_type ===
                      B.GuildScheduledEventEntityTypes.STAGE_INSTANCE ||
                    t.entity_type === B.GuildScheduledEventEntityTypes.VOICE
                      ? !(function (e) {
                          if (X()) return !1;
                          let t = e.channel_id;
                          if (null == t || Q(t)) return !1;
                          let n = y.default.getCurrentUser(),
                            a = A.default.getGuild(e.guild_id),
                            s = T.default.getChannel(e.channel_id),
                            i = y.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == s ||
                            null == a ||
                            null == i ||
                            !v.default.can(
                              l.combine(
                                F.Permissions.CONNECT,
                                F.Permissions.VIEW_CHANNEL
                              ),
                              s
                            )
                          )
                            return !1;
                          G.default.showNotification(
                            a.getIconURL(128),
                            V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: a.name }
                            ),
                            V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
                              {
                                topic: e.name,
                                username: b.default.getName(a.id, s.id, i),
                              }
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: a.id,
                              channel_id: s.id,
                            },
                            {
                              onClick() {
                                e.entity_type ===
                                  B.GuildScheduledEventEntityTypes
                                    .STAGE_INSTANCE && (0, I.connectAndOpen)(s),
                                  e.entity_type ===
                                    B.GuildScheduledEventEntityTypes.VOICE &&
                                    c.default.selectVoiceChannel(s.id);
                              },
                            }
                          );
                        })(t)
                      : t.entity_type ===
                          B.GuildScheduledEventEntityTypes.EXTERNAL &&
                        !(function (e) {
                          if (X()) return !1;
                          let t = y.default.getCurrentUser(),
                            n = A.default.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          G.default.showNotification(
                            n.getIconURL(128),
                            V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: n.name }
                            ),
                            V.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format(
                              { topic: e.name }
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: n.id,
                            },
                            {
                              onClick() {
                                o.default.transitionToGuildSync(e.guild_id),
                                  (0, C.openGuildEventDetails)({
                                    eventId: e.id,
                                  });
                              },
                            }
                          );
                        })(t));
                },
                THREAD_CREATE: function (e) {
                  var t;
                  let { channel: n, isNewlyCreated: l } = e;
                  if (X()) return !1;
                  let a = T.default.getChannel(n.parent_id);
                  if (
                    null == a ||
                    !F.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) ||
                    !l ||
                    !(0, j.shouldNotifyForForumThreadCreation)(n, a, !K)
                  )
                    return !1;
                  let { author: s, user: i } = (0, h.getForumPostAuthor)(n);
                  if (null == i) return !1;
                  let r = A.default.getGuild(a.guild_id);
                  if (null == r) return !1;
                  let u =
                      V.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: a.name, guildName: r.name }
                      ),
                    o =
                      V.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format(
                        {
                          channelName: n.name,
                          userUsername:
                            null !== (t = null == s ? void 0 : s.nick) &&
                            void 0 !== t
                              ? t
                              : null == i
                                ? void 0
                                : i.username,
                        }
                      ),
                    d = i.getAvatarURL(void 0, 128);
                  G.default.showNotification(
                    d,
                    u,
                    o,
                    { notif_type: "THREAD_CREATE", notif_user_id: i.id },
                    {
                      onClick() {
                        (0, S.openThreadSidebarForViewing)(n);
                      },
                    }
                  );
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let {
                    icon: t,
                    title: n,
                    body: l,
                    route: a,
                    trackingType: s,
                    tag: i,
                  } = e;
                  return (
                    !X() &&
                    null != n &&
                    null != l &&
                    null != s &&
                    (G.default.showNotification(
                      t,
                      n,
                      l,
                      { notif_type: s },
                      {
                        onClick() {
                          null != a && (0, E.transitionTo)(a);
                        },
                        tag: i,
                      }
                    ),
                    !1)
                  );
                },
                WINDOW_HIDDEN: function () {
                  let e = (0, U.isWindows)(),
                    t = (0, U.isLinux)(),
                    l = s.default.get(Y, !1),
                    a = !l && U.isPlatformEmbedded && (e || t);
                  if (!a) return !1;
                  let i = !1;
                  return (
                    null != W && (i = Z.includes(W)),
                    !!i &&
                      (G.default.showNotification(
                        n("599964"),
                        V.default.Messages.NOTIFICATION_TITLE_DISCORD,
                        V.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, E.transitionTo)(
                              F.Routes.SETTINGS(e ? "windows" : "linux")
                            );
                          },
                          onShown: () => {
                            s.default.set(Y, !0);
                          },
                        }
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return s.default.remove(Y), !1;
                },
                CONNECTION_OPEN: function (e) {
                  let { countryCode: t } = e;
                  W = t;
                },
              }
        );
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return C;
          },
        });
      var l,
        a,
        s = n("37983");
      n("884691");
      var i = n("414456"),
        r = n.n(i),
        u = n("77078"),
        o = n("36694"),
        d = n("381546"),
        c = n("68238"),
        f = n("423487"),
        h = n("950038");
      ((l = a || (a = {}))[(l.WARNING = 0)] = "WARNING"),
        (l[(l.INFO = 1)] = "INFO"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.POSITIVE = 3)] = "POSITIVE");
      var C = function (e) {
        let {
            children: t,
            messageType: n,
            className: l,
            textColor: a = "text-normal",
            textVariant: i = "text-sm/medium",
          } = e,
          C = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return c.default;
              case 2:
                return d.default;
              case 3:
                return o.default;
            }
          })(n),
          p = (function (e) {
            switch (e) {
              case 0:
                return h.warning;
              case 1:
                return h.info;
              case 2:
                return h.error;
              case 3:
                return h.positive;
            }
          })(n);
        return (0, s.jsxs)("div", {
          className: r(h.container, p, l),
          children: [
            (0, s.jsx)("div", {
              className: h.iconDiv,
              children: (0, s.jsx)(C, { className: h.icon }),
            }),
            (0, s.jsx)(u.Text, {
              className: h.text,
              color: a,
              variant: i,
              children: t,
            }),
          ],
        });
      };
    },
    409082: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Guild: function () {
            return L;
          },
          Channel: function () {
            return v;
          },
          GroupDM: function () {
            return x;
          },
          User: function () {
            return R;
          },
          Application: function () {
            return M;
          },
          Header: function () {
            return O;
          },
          Link: function () {
            return y;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("843962"),
        r = n("679653"),
        u = n("419830"),
        o = n("222481"),
        d = n("361572"),
        c = n("305961"),
        f = n("27618"),
        h = n("697218"),
        C = n("158998"),
        p = n("220677"),
        m = n("953109"),
        E = n("476263"),
        g = n("533403"),
        I = n("20837"),
        _ = n("83900"),
        S = n("45029"),
        N = n("782340"),
        T = n("229649");
      class A extends a.PureComponent {
        componentDidMount() {
          let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
          e && null != n && t(n);
        }
        componentDidUpdate(e) {
          let { focused: t, onFocus: n } = this.props,
            { node: l } = this;
          null != l && t && !e.focused && n(l);
        }
        render() {
          let {
            focused: e,
            children: t,
            score: n,
            onContextMenu: a,
            id: i,
            "aria-label": r,
          } = this.props;
          return (0, l.jsxs)(s.Clickable, {
            role: "option",
            id: i,
            "aria-label": r,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: T.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: a,
            children: [
              t,
              null != n
                ? (0, l.jsx)("div", { className: T.score, children: n >> 0 })
                : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleClick = e => {
              e.preventDefault();
              let { onClick: t } = this.props,
                { node: n } = this;
              null != n && t(e, n);
            }),
            (this.handleMouseEnter = e => {
              let { onMouseEnter: t } = this.props,
                { node: n } = this;
              null != n && t(e, n);
            }),
            (this.setRef = e => {
              this.node = e;
            });
        }
      }
      class L extends a.Component {
        renderIcon() {
          let { guild: e } = this.props;
          return (0, l.jsx)("div", {
            className: T.guildIconContainer,
            children: (0, l.jsx)(E.default, {
              tabIndex: -1,
              guild: e,
              size: E.default.Sizes.MINI,
              className: T.guildIcon,
            }),
          });
        }
        renderName() {
          let { guild: e } = this.props;
          return (0, l.jsx)("div", {
            className: T.name,
            children: (0, l.jsx)("span", {
              className: T.match,
              children: e.name,
            }),
          });
        }
        renderContent() {
          let { unread: e, children: t } = this.props;
          return (0, l.jsxs)("div", {
            className: e ? T.contentUnread : T.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, l.jsx)("div", { className: T.misc, children: t }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { guild: e } = this.props;
          return N.default.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
            name: e.name,
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            id: r,
          } = this.props;
          return (0, l.jsx)(A, {
            id: r,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            children: this.renderContent(),
          });
        }
      }
      class v extends a.Component {
        renderIcon() {
          var e;
          let { channel: t } = this.props,
            n = (0, u.getChannelIconComponent)(t);
          if (null == n) return null;
          let a = null !== (e = (0, o.default)(t)) && void 0 !== e ? e : "";
          return (0, l.jsx)("div", {
            className: T.iconContainer,
            role: "img",
            "aria-label": a,
            children: (0, l.jsx)(n, {
              className: T.icon,
              width: 16,
              height: 16,
            }),
          });
        }
        renderName() {
          let e, t;
          let { mentions: n, category: a, channel: s } = this.props;
          return (
            null != n &&
              n > 0 &&
              (e = (0, l.jsx)(p.default, { className: T.badge, value: n })),
            null != a &&
              (t = (0, l.jsx)("span", {
                className: T.note,
                children: (0, r.computeChannelName)(a, h.default, f.default),
              })),
            (0, l.jsxs)("div", {
              className: T.name,
              children: [
                (0, l.jsx)("span", {
                  className: T.match,
                  children: (0, r.computeChannelName)(s, h.default, f.default),
                }),
                e,
                this.renderVoiceStates(),
                t,
              ],
            })
          );
        }
        renderVoiceStates() {
          let { voiceStates: e, channel: t } = this.props;
          return null == e
            ? null
            : (0, l.jsx)(g.default, {
                className: T.voiceSummaryContainer,
                guildId: t.guild_id,
                users: e.map(e => {
                  let { user: t } = e;
                  return { user: t };
                }),
                max: 4,
              });
        }
        renderContent() {
          let { unread: e, mentions: t, children: n } = this.props;
          return (0, l.jsxs)("div", {
            "aria-hidden": !0,
            className:
              e || (null != t && t > 0) ? T.contentUnread : T.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, l.jsx)("div", { className: T.misc, children: n }),
            ],
          });
        }
        getAccessibilityLabel() {
          var e;
          let { channel: t } = this.props,
            n =
              null === (e = c.default.getGuild(this.props.channel.guild_id)) ||
              void 0 === e
                ? void 0
                : e.name,
            l = (0, r.computeChannelName)(t, h.default, f.default),
            a = (0, o.default)(t);
          return N.default.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format(
            { name: l, type: a, guild: n }
          );
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            id: r,
          } = this.props;
          return (0, l.jsx)(A, {
            id: r,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            children: this.renderContent(),
          });
        }
      }
      v.defaultProps = { unread: !1 };
      class x extends a.Component {
        renderIcon() {
          let { channel: e } = this.props;
          return (0, l.jsx)("div", {
            className: T.dmIconContainer,
            children: (0, l.jsx)(s.Avatar, {
              src: (0, i.getChannelIconURL)(e),
              size: s.AvatarSizes.SIZE_20,
              "aria-hidden": !0,
            }),
          });
        }
        renderName() {
          let e;
          let { mentions: t, channel: n } = this.props;
          return (
            null != t &&
              t > 0 &&
              (e = (0, l.jsx)(p.default, { className: T.badge, value: t })),
            (0, l.jsxs)("div", {
              className: T.name,
              children: [
                (0, l.jsx)("span", {
                  className: T.match,
                  children: (0, r.computeChannelName)(n, h.default, f.default),
                }),
                e,
              ],
            })
          );
        }
        renderContent() {
          let { mentions: e, children: t } = this.props;
          return (0, l.jsxs)("div", {
            className: null != e && e > 0 ? T.contentUnread : T.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, l.jsx)("div", { className: T.misc, children: t }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { channel: e, mentions: t } = this.props,
            n = (0, r.computeChannelName)(e, h.default, f.default);
          return null != t && t > 0
            ? N.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format(
                { name: n, mentions: t }
              )
            : N.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
                name: n,
              });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            id: r,
          } = this.props;
          return (0, l.jsx)(A, {
            id: r,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            children: this.renderContent(),
          });
        }
      }
      class R extends a.Component {
        renderIcon() {
          let { user: e } = this.props;
          return (0, l.jsx)("div", {
            className: T.iconContainer,
            children: (0, l.jsx)(s.Avatar, {
              src: e.getAvatarURL(void 0, 20),
              "aria-hidden": !0,
              size: s.AvatarSizes.SIZE_20,
            }),
          });
        }
        getDisplayNickname() {
          let e;
          let { user: t, comparator: n } = this.props,
            l = f.default.getNickname(t.id);
          return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) ===
              t.username ||
              e === t.id) &&
              (e = null != l ? l : C.default.getName(t)),
            e
          );
        }
        renderName() {
          let e;
          let { user: t, mentions: n } = this.props,
            a = this.getDisplayNickname();
          return (
            null != n &&
              n > 0 &&
              (e = (0, l.jsx)(p.default, { className: T.badge, value: n })),
            (0, l.jsxs)("div", {
              className: T.name,
              children: [
                (0, l.jsx)("span", { className: T.match, children: a }),
                e,
                (0, l.jsx)("span", {
                  className: T.username,
                  children: C.default.getUserTag(t),
                }),
              ],
            })
          );
        }
        renderContent() {
          let { children: e, mentions: t } = this.props;
          return (0, l.jsxs)("div", {
            className: null != t && t > 0 ? T.contentUnread : T.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, l.jsx)("div", { className: T.misc, children: e }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            l = C.default.getUserTag(t);
          return null != e && e > 0
            ? N.default.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format(
                { name: n, id: l, mentions: e }
              )
            : N.default.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
                name: n,
                id: l,
              });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            id: r,
          } = this.props;
          return (0, l.jsx)(A, {
            id: r,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            children: this.renderContent(),
          });
        }
      }
      class M extends a.Component {
        renderContent() {
          let { children: e, application: t } = this.props;
          return (0, l.jsxs)("div", {
            className: T.contentDefault,
            children: [
              (0, l.jsx)("div", {
                className: T.iconContainer,
                children: (0, l.jsx)(m.default, {
                  tabIndex: -1,
                  className: T.gameIcon,
                  game: t,
                  size: T.gameIconSize,
                }),
              }),
              t.name,
              (0, l.jsx)("div", { className: T.misc, children: e }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: a,
            id: s,
          } = this.props;
          return (0, l.jsx)(A, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: a,
            children: this.renderContent(),
          });
        }
      }
      class O extends a.Component {
        render() {
          return (0, l.jsx)("div", {
            className: T.resultDefault,
            children: (0, l.jsx)("div", {
              className: T.contentDefault,
              children: (0, l.jsx)("div", {
                className: T.header,
                children: this.props.children,
              }),
            }),
          });
        }
      }
      class y extends a.Component {
        renderContent() {
          let e, t;
          let { link: n, children: a } = this.props,
            s = (0, d.tryParseChannelPath)(n.path);
          return (
            null == s || void 0 === s.messageId
              ? ((e = N.default.Messages.QUICKSWITCHER_LINK_UNKNOWN),
                (t = (0, l.jsx)(_.default, { width: 16, height: 16 })))
              : (0, d.isAccessibleChannelPath)(s)
                ? ((e = N.default.Messages.QUICKSWITCHER_LINK_MESSAGE),
                  (t = (0, l.jsx)(I.default, { width: 16, height: 16 })))
                : ((e = N.default.Messages.QUICKSWITCHER_LINK_NO_ACCESS),
                  (t = (0, l.jsx)(S.default, { width: 16, height: 16 }))),
            (0, l.jsxs)("div", {
              className: T.contentDefault,
              children: [
                (0, l.jsx)("div", { className: T.iconContainer, children: t }),
                e,
                (0, l.jsx)("div", { className: T.misc, children: a }),
              ],
            })
          );
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            id: r,
          } = this.props;
          return (0, l.jsx)(A, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: a,
            focused: s,
            score: i,
            children: this.renderContent(),
          });
        }
      }
    },
    357007: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("483366"),
        u = n.n(r),
        o = n("458960"),
        d = n("233736"),
        c = n("77078"),
        f = n("662721");
      let h = { friction: 10, tension: 300 };
      class C extends a.Component {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.default)(this.props, e, ["animate"]) ||
            !(0, d.default)(this.state, t)
          );
        }
        componentDidMount() {
          let { hide: e } = this.props;
          e
            ? this.state.translateY.setValue(1)
            : this.state.translateY.setValue(0);
        }
        componentDidUpdate(e) {
          let { hide: t } = e,
            { hide: n } = this.props;
          n && !t ? this.animateOut() : !n && t && this.animateIn();
        }
        componentWillUnmount() {
          null != this._timeout && clearTimeout(this._timeout);
        }
        animateIn() {
          let { translateY: e } = this.state;
          if (
            (null != this._timeout && clearTimeout(this._timeout),
            !this.props.animate)
          ) {
            e.setValue(0);
            return;
          }
          this._timeout = setTimeout(() => {
            o.default.spring(e, { toValue: 0, ...h }).start();
          }, 100);
        }
        animateOut() {
          let { translateY: e } = this.state;
          if (
            (null != this._timeout && clearTimeout(this._timeout),
            !this.props.animate)
          ) {
            e.setValue(1);
            return;
          }
          o.default.spring(e, { toValue: 1, ...h }).start();
        }
        render() {
          let { className: e, text: t, hide: n, onClick: a } = this.props;
          return (0, l.jsx)(o.default.div, {
            className: i(f.bar, e),
            onClick: a,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, l.jsx)("span", { className: f.text, children: t }),
          });
        }
        getAnimatedStyle() {
          let { translateY: e } = this.state,
            { reverse: t } = this.props;
          return {
            transform: [
              {
                translateY: e.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", t ? "180%" : "-180%"],
                }),
              },
            ],
          };
        }
        constructor(e) {
          super(e),
            (this.state = {
              translateY: new o.default.Value(),
              reduceMotion: !1,
            });
        }
      }
      class p extends a.PureComponent {
        componentDidMount() {
          this.calculateState();
        }
        componentDidUpdate() {
          this.calculateState();
        }
        componentWillUnmount() {
          this.calculateState.cancel();
        }
        render() {
          let { unread: e, mention: t } = this.state,
            {
              textMention: n,
              textUnread: a,
              reverse: s,
              className: r,
              barClassName: u,
              hide: o,
              animate: d,
            } = this.props,
            { reducedMotion: c } = this.context;
          return (0, l.jsx)("div", {
            className: null != r ? r : void 0,
            children: (0, l.jsx)(C, {
              hide: !0 === o || (null == e && null == t),
              className: i(u, null != t ? f.mention : f.unread),
              text: null != t ? n : a,
              reverse: s,
              animate: d && !c.enabled,
              onClick: this.handleClick,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { unread: null, mention: null }),
            (this.calculateState = u(() => {
              let {
                  items: e,
                  expandedFolders: t,
                  isVisible: n,
                  isUnread: l,
                  isMentioned: a,
                  reverse: s,
                  onCalculate: i,
                } = this.props,
                r = null,
                u = null,
                o = [];
              e.forEach(e => {
                "string" == typeof e
                  ? o.push(e)
                  : "object" == typeof e && null != e.folderId
                    ? null != t && t.has(e.folderId)
                      ? (o.push("folder:".concat(e.folderId)),
                        e.guildIds.forEach(e => o.push(e)))
                      : o.push(e.guildIds)
                    : o.push(e.guildIds[0]);
              });
              let d = e => {
                  null == r && a(e, s, o) && (r = e),
                    null == u && l(e, s, o) && (u = e);
                },
                c = s ? o.length - 1 : 0,
                f = o[c];
              for (; null != f; ) {
                if ("string" == typeof f) {
                  if (n(f, s, o)) break;
                  d(f);
                } else {
                  let e = !1;
                  for (let t of f) {
                    if (n(t, s, o)) {
                      e = !0;
                      break;
                    }
                    d(t);
                  }
                  if (e) break;
                }
                (c += s ? -1 : 1), (f = o[c]);
              }
              null != i && i(r, u, s), this.setState({ mention: r, unread: u });
            }, 200)),
            (this.handleClick = e => {
              e.preventDefault(), e.stopPropagation();
              let { unread: t, mention: n } = this.state,
                { onJumpTo: l } = this.props,
                a = null != n ? n : t;
              null != a && l(a, [n, t]);
            });
        }
      }
      (p.contextType = c.AccessibilityPreferencesContext),
        (p.defaultProps = {
          className: f.container,
          reverse: !1,
          hide: !1,
          animate: !0,
        });
      var m = p;
    },
    376069: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("542203");
      function r(e) {
        let {
          selected: t,
          muted: n = !1,
          highlighted: a = !1,
          wrapContent: r = !1,
          avatar: u,
          decorators: o,
          name: d,
          subText: c,
          avatarClassName: f,
          innerClassName: h,
        } = e;
        return (0, l.jsxs)("div", {
          className: s(h, i.layout, {
            [i.muted]: !t && n,
            [i.highlighted]: a,
            [i.wrappedLayout]: r,
          }),
          children: [
            (0, l.jsx)("div", { className: s(i.avatar, f), children: u }),
            (0, l.jsxs)("div", {
              className: i.content,
              children: [
                (0, l.jsxs)("div", {
                  className: i.nameAndDecorators,
                  children: [
                    (0, l.jsx)("div", {
                      className: s(i.name, { [i.wrappedName]: r }),
                      children: d,
                    }),
                    o,
                  ],
                }),
                null != c
                  ? (0, l.jsx)("div", { className: i.subText, children: c })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    379793: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("333417");
      let o = a.forwardRef(function (e, t) {
        let { className: n, focusProps: a, ...s } = e;
        return (0, l.jsx)(r.FocusRing, {
          ...a,
          children: (0, l.jsx)("li", {
            className: i(n, u.container),
            ...s,
            ref: t,
          }),
        });
      });
      var d = o;
    },
    104359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, l.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: s }),
            (0, l.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: s,
            }),
          ],
        });
      }
    },
    922577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M20.414 2.58599C21.195 3.36699 21.195 4.63299 20.414 5.41399L14.051 11.779L11.222 8.94999L17.586 2.58599C18.367 1.80499 19.633 1.80499 20.414 2.58599Z",
              className: i,
              fill: s,
            }),
            (0, l.jsx)("path", {
              d: "M13.622 15.035L6.552 16.449L7.966 9.378L13.344 4H4C2.897 4 2 4.898 2 6V20C2 21.103 2.897 22 4 22H18C19.103 22 20 21.103 20 20V8.656L13.622 15.035Z",
              className: i,
              fill: s,
            }),
            (0, l.jsx)("path", {
              d: "M9.80801 10.365L12.636 13.192L9.10101 13.899L9.80801 10.365Z",
              className: i,
              fill: s,
            }),
          ],
        });
      }
    },
    20837: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("332565"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "m4 3.33325h6.9167c-.0834.25-.0834.58334-.0834.83334 0 3.25 2.5834 5.83333 5.8334 5.83333.25 0 .5833 0 .8333-.08334v3.91672c0 .8333-.6667 1.5-1.5 1.5h-6.75l-3 3v-3h-2.25c-.83333 0-1.5-.6667-1.5-1.5v-9.00005c0-.83333.66667-1.5 1.5-1.5z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "m20.0002 4.08325-3.5-3.499998-1 1.083338 1.6666 1.66666h-3.8333v1.5h3.8333l-1.6666 1.66667 1.0833 1.08333z",
                }),
              ],
            });
          },
          s.ChatArrowRightIcon,
          void 0,
          { size: 24 }
        );
    },
    480381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("828516"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 48,
              height: n = 48,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              fill: a,
              viewBox: "0 0 48 48",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  d: "M19 6H13C11.9 6 11 6.9 11 8V40C11 41.1 11.9 42 13 42H19C20.1 42 21 41.1 21 40V8C21 6.9 20.1 6 19 6Z",
                  fill: "white",
                }),
                (0, l.jsx)("path", {
                  d: "M35 6H29C27.9 6 27 6.9 27 8V40C27 41.1 27.9 42 29 42H35C36.1 42 37 41.1 37 40V8C37 6.9 36.1 6 35 6Z",
                  fill: "white",
                }),
              ],
            });
          },
          s.PauseIcon,
          void 0,
          { size: 48 }
        );
    },
    665382: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("857248"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                d: "M7 1C6.73479 1.00003 6.48045 1.10539 6.29292 1.29292C6.10539 1.48045 6.00003 1.73479 6 2V6C6.00009 6.23417 6.08234 6.46088 6.23242 6.64062L10.6992 12L6.23242 17.3594C6.08234 17.5391 6.00009 17.7658 6 18V22C6.00003 22.2652 6.10539 22.5195 6.29292 22.7071C6.48045 22.8946 6.73479 23 7 23H17C17.2652 23 17.5195 22.8946 17.7071 22.7071C17.8946 22.5195 18 22.2652 18 22V18C17.9999 17.7658 17.9177 17.5391 17.7676 17.3594L13.3008 12L17.7676 6.64062C17.9177 6.46088 17.9999 6.23417 18 6V2C18 1.73479 17.8946 1.48045 17.7071 1.29292C17.5195 1.10539 17.2652 1.00003 17 1H7ZM12 13.5625L16 18.3613V21H8V18.3613L12 13.5625Z",
              }),
            });
          },
          s.HourglassIcon,
          void 0,
          { size: 16 }
        );
    },
    704926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z",
              fill: s,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z",
              fill: s,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z",
              fill: s,
              className: i,
            }),
          ],
        });
      }
    },
    962541: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("587974"),
        o = n("653609");
      function d(e) {
        let {
            tooltipText: t,
            children: n,
            onContextMenu: s,
            onClick: d,
            disabled: c,
            icon: f,
            iconForeground: h,
            innerClassName: C,
            tooltipClassName: p,
            onMouseEnter: m,
            onMouseLeave: E,
            "aria-label": g,
            "aria-checked": I,
            role: _,
            tooltipColor: S,
            tooltipForceOpen: N,
          } = e,
          T = a.isValidElement(f)
            ? f
            : (0, l.jsx)(f, {
                width: 20,
                height: 20,
                size: "custom",
                foreground: h,
              });
        return (0, l.jsx)(r.Tooltip, {
          tooltipClassName: p,
          text: t,
          "aria-label": g,
          color: S,
          forceOpen: N,
          children: e => {
            let { onClick: t, onMouseEnter: a, onMouseLeave: f, ...h } = e;
            return (0, l.jsxs)(r.Button, {
              ...h,
              look: r.Button.Looks.BLANK,
              size: r.Button.Sizes.NONE,
              disabled: c,
              innerClassName: C,
              wrapperClassName: o.button,
              className: i(o.button, { [o.disabled]: c, [o.enabled]: !c }),
              onClick: e => {
                null != t && t(), null != d && d(e);
              },
              onMouseEnter: () => {
                null == a || a(), null == m || m();
              },
              onMouseLeave: () => {
                null == f || f(), null == E || E();
              },
              onContextMenu: s,
              role: _,
              "aria-checked": I,
              children: [
                null != n
                  ? (0, l.jsx)(u.default, {
                      width: 20,
                      height: 20,
                      mask: u.default.Masks.PANEL_BUTTON,
                      children: T,
                    })
                  : T,
                n,
              ],
            });
          },
        });
      }
    },
    762489: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("408174");
      function u(e) {
        let { children: t, className: n } = e;
        return (0, l.jsx)(i.Text, {
          color: "none",
          className: s(r.subtext, n),
          variant: "text-xs/normal",
          children: t,
        });
      }
    },
    329858: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("718497");
      function u(e) {
        let { children: t, className: n } = e;
        return (0, l.jsx)(i.Text, {
          color: "none",
          className: s(r.title, n),
          variant: "text-sm/normal",
          children: t,
        });
      }
    },
    108189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("424973");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("90915"),
        u = n("77078"),
        o = n("159885"),
        d = n("939692");
      let c = [18, 18, 16, 16, 14, 12, 10];
      var f = e => {
        let t,
          n,
          {
            children: s,
            icon: f,
            name: h,
            ariaLabel: C,
            className: p,
            style: m,
            to: E,
            onClick: g,
            selected: I = !1,
            ..._
          } = e,
          S = (0, r.useHistory)();
        if (null == f && null != h) {
          var N;
          n =
            null !== (N = c[(t = (0, o.getAcronym)(h)).length - 1]) &&
            void 0 !== N
              ? N
              : c[c.length - 1];
        }
        let T = a.useCallback(
          e => {
            if (null == E);
            else if ("string" == typeof E) S.push(E);
            else {
              let { pathname: e = "", state: t } = E;
              S.push(e, t);
            }
            null != g && g(e);
          },
          [S, E, g]
        );
        return (0, l.jsxs)(u.Clickable, {
          ..._,
          onClick: T,
          className: i(p, d.wrapper, { [d.selected]: I }),
          "aria-label": null != C && "" !== C ? C : null != h ? h : "",
          style: { ...m, fontSize: n },
          focusProps: { enabled: !1 },
          children: [
            null != t
              ? (0, l.jsx)("div", {
                  className: i(d.childWrapper, d.acronym),
                  "aria-hidden": !0,
                  children: t,
                })
              : null,
            null != f
              ? (0, l.jsx)("img", {
                  className: d.icon,
                  src: f,
                  alt: " ",
                  width: 48,
                  height: 48,
                  "aria-hidden": !0,
                })
              : null,
            null != s
              ? (0, l.jsx)("div", { className: d.childWrapper, children: s })
              : null,
          ],
        });
      };
    },
    230674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          areTypesInSameSection: function () {
            return r;
          },
          getDropData: function () {
            return c;
          },
          getDnDUpdates: function () {
            return f;
          },
        }),
        n("222007"),
        n("843762"),
        n("424973");
      var l = n("320954"),
        a = n("233069"),
        s = n("746574"),
        i = n("49111");
      function r(e, t) {
        return (
          null != e &&
          null != t &&
          (e === t ||
            ((0, a.isGuildSelectableChannelType)(e) &&
              (0, a.isGuildSelectableChannelType)(t)) ||
            ((0, a.isGuildVocalChannelType)(e) &&
              (0, a.isGuildVocalChannelType)(t)))
        );
      }
      function u(e, t, n, l) {
        let a = -1;
        if (
          (l.find((e, n) => {
            let { channel: l } = e;
            return l.id === t && ((a = n), !0);
          }),
          a < 0)
        )
          return null;
        for (let t = a; t >= 0 && t < l.length; t += e) {
          let e = l[t];
          if (r(e.channel.type, n)) return e;
        }
        return null;
      }
      function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return 0;
        let l = null;
        return (
          t
            .filter(t => {
              let {
                channel: { type: l },
              } = t;
              return null != e && (n || r(e.type, l));
            })
            .find((t, n) => {
              let {
                channel: { id: a },
              } = t;
              return null != e && a === e.id && ((l = n), !0);
            }),
          l
        );
      }
      function d(e) {
        return { referenceId: e.id, parentId: e.parent_id };
      }
      function c(e, t, n, l, s) {
        if (null == e || null == n) return null;
        let { GUILD_CATEGORY: c } = i.ChannelTypes;
        if (e.type === c)
          return l === t || (l < t && e.type === n.type)
            ? d(n)
            : l > t
              ? (function (e, t, n) {
                  var l;
                  let { GUILD_CATEGORY: a } = i.ChannelTypes,
                    s =
                      n[
                        (null !== (l = o(t, n, !0)) && void 0 !== l ? l : 0) + 1
                      ],
                    r = u(-1, t.id, e.type, n);
                  return null == r || r.channel.id === e.id
                    ? null
                    : null == s || s.channel.type === a
                      ? { referenceId: r.channel.id, parentId: null }
                      : null;
                })(e, n, s)
              : null;
        if (r(e.type, n.type)) return d(n);
        if (l < t)
          return n.type === c
            ? (function (e, t, n) {
                var l;
                let s =
                    n[(null !== (l = o(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                  i = u(1, t.id, e.type, n);
                if (null == s) return { referenceId: null, parentId: null };
                if (null != i) {
                  if (
                    r(s.channel.type, e.type) ||
                    (e.isGuildVocal() &&
                      (0, a.isGuildSelectableChannelType)(s.channel.type))
                  )
                    return {
                      referenceId: i.channel.id,
                      parentId: s.channel.parent_id,
                    };
                  if (s.channel.isCategory())
                    return {
                      referenceId: i.channel.id,
                      parentId: s.channel.id,
                    };
                }
                return null;
              })(e, n, s)
            : (function (e, t, n) {
                var l;
                let s =
                    n[(null !== (l = o(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                  i = u(1, t.id, e.type, n);
                return null != s || e.isGuildVocal()
                  ? (0, a.isGuildSelectableChannelType)(e.type) &&
                    null != i &&
                    ((0, a.isGuildSelectableChannelType)(s.channel.type) ||
                      s.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: t.parent_id }
                    : null
                  : {
                      referenceId: null != i ? i.channel.id : null,
                      parentId: null,
                    };
              })(e, n, s);
        return n.type === c
          ? (function (e, t, n) {
              var l;
              let s =
                  n[(null !== (l = o(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                i = u(-1, t.id, e.type, n);
              if (null != i) {
                if (null == s)
                  return { referenceId: i.channel.id, parentId: t.id };
                if (
                  r(s.channel.type, e.type) ||
                  ((0, a.isGuildSelectableChannelType)(e.type) &&
                    s.channel.isGuildVocal())
                )
                  return {
                    referenceId: i.channel.id,
                    parentId: s.channel.parent_id,
                  };
                if (s.channel.isCategory())
                  return { referenceId: i.channel.id, parentId: t.id };
              }
              return null;
            })(e, n, s)
          : (function (e, t, n) {
              var l;
              let a =
                  n[(null !== (l = o(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                s = u(-1, t.id, e.type, n);
              if (null == s) return null;
              if (e.isGuildVocal()) {
                if (null == a || a.channel.isCategory())
                  return { referenceId: s.channel.id, parentId: t.parent_id };
                if (a.channel.isGuildVocal())
                  return {
                    referenceId: s.channel.id,
                    parentId: a.channel.parent_id,
                  };
              }
              return e.isCategory() && (null == a || a.channel.isCategory())
                ? { referenceId: s.channel.id, parentId: null }
                : null;
            })(e, n, s);
      }
      function f(e, t, n, i) {
        let r,
          u,
          d = [],
          c = [],
          f = i._categories,
          h = t => {
            var n, l, a, i;
            let o;
            if (
              null == r ||
              null == u ||
              ((n = e),
              (l = r),
              (a = u),
              (i = t),
              null != l &&
              null != a &&
              null != i[l] &&
              i[l].channel === n &&
              null != i[a]
                ? 0
                : 1)
            )
              o = [...t];
            else o = s.default.moveItemFromTo(t, r, u);
            return (
              (d = d.concat(
                s.default.calculatePositionDeltas({
                  oldOrdering: t,
                  newOrdering: o,
                  idGetter: e => {
                    let { channel: t } = e;
                    return t.id;
                  },
                  existingPositionGetter: e => {
                    let { channel: t } = e;
                    return t.position;
                  },
                })
              )),
              o
            );
          };
        if (e.isCategory()) {
          let n = [...f].slice(1);
          (r = o(e, n)), (u = o(t, n)), (c = h(n)).unshift(f[0]);
        }
        if ((0, a.isGuildSelectableChannelType)(e.type) || e.isCategory()) {
          let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
            let {
              channel: { type: t },
            } = e;
            return (0, a.isGuildSelectableChannelType)(t);
          });
          (r = o(e, n)), (u = o(t, n)), h(n);
        }
        if (e.isGuildVocal() || e.isCategory()) {
          let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
            let { channel: t } = e;
            return t.isGuildVocal();
          });
          (r = o(e, n)), (u = o(t, n)), h(n);
        }
        if (e.parent_id !== n) {
          let t = !1;
          d.find(l => l.id === e.id && ((l.parent_id = n), (t = !0))),
            !t && d.push({ id: e.id, parent_id: n });
        }
        return d;
      }
    },
    224216: function (e, t, n) {
      "use strict";
      function l(e, t, n) {
        return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
      }
      function a(e, t, n, a) {
        return l(e, n, a) !== l(t, n, a) && l(e, t, n) !== l(e, t, a);
      }
      function s(e, t, n) {
        let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        return {
          x: t.x + ((t.x - e.x) / l) * n,
          y: t.y + ((t.y - e.y) / l) * n,
        };
      }
      function i(e, t, n) {
        let l = { x: n.x, y: n.y },
          s = { x: n.x + n.width, y: n.y },
          i = { x: n.x, y: n.y + n.height },
          r = { x: n.x + n.width, y: n.y + n.height };
        return a(e, t, l, s) || a(e, t, s, r) || a(e, t, r, i) || a(e, t, i, l);
      }
      n.r(t),
        n.d(t, {
          extendLineSegment: function () {
            return s;
          },
          doesLineSegmentIntersectRectangle: function () {
            return i;
          },
        });
    },
    189771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          shouldNotifyBase: function () {
            return y;
          },
          shouldNotify: function () {
            return D;
          },
          shouldNotifyForSelectedChannel: function () {
            return b;
          },
          shouldNotifyForForumThreadCreation: function () {
            return j;
          },
          makeTextChatNotification: function () {
            return P;
          },
        }),
        n("702976"),
        n("70102");
      var l = n("679653"),
        a = n("605250"),
        s = n("267567"),
        i = n("288518"),
        r = n("884351"),
        u = n("406297"),
        o = n("913491");
      n("726778");
      var d = n("755624"),
        c = n("414833"),
        f = n("845579"),
        h = n("233069"),
        C = n("982108"),
        p = n("42203"),
        m = n("305961"),
        E = n("945956"),
        g = n("27618"),
        I = n("18494"),
        _ = n("162771"),
        S = n("101125"),
        N = n("282109"),
        T = n("697218"),
        A = n("568734"),
        L = n("387111"),
        v = n("700097"),
        x = n("158998"),
        R = n("49111"),
        M = n("648564"),
        O = n("782340");
      function y(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (t.hasFlag(R.UserFlags.SPAMMER) || n.isManaged()) return !1;
        let i = n.getGuildId();
        return (
          !(
            (null != i && s.default.isLurking(i)) ||
            t.id === e.id ||
            g.default.isBlocked(t.id) ||
            (!l && S.default.getStatus() === R.StatusTypes.DND) ||
            f.FocusMode.getSetting() ||
            (!a && N.default.allowNoMessages(n))
          ) && !0
        );
      }
      function D(e, t) {
        var n;
        let l =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (
          null != e.flags &&
          (0, A.hasFlag)(e.flags, R.MessageFlags.SUPPRESS_NOTIFICATIONS)
        )
          return !1;
        let s = p.default.getChannel(t);
        e.type === R.MessageTypes.THREAD_STARTER_MESSAGE &&
          (s = p.default.getChannel(null == s ? void 0 : s.parent_id));
        let r = T.default.getCurrentUser(),
          o = T.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id
          );
        if (
          null == s ||
          null == r ||
          null == o ||
          (s.type === R.ChannelTypes.GROUP_DM &&
            e.type === R.MessageTypes.RECIPIENT_REMOVE) ||
          !y(r, o, s, a) ||
          i.default.isMessageRequest(t)
        )
          return !1;
        if (!l) {
          let e = I.default.getChannelId(_.default.getGuildId());
          if (e === s.id || C.default.getCurrentSidebarChannelId(e) === s.id)
            return !1;
        }
        if (
          void 0 !== e.activity_instance &&
          null != e.interaction &&
          e.interaction.user.id === r.id
        )
          return !1;
        if (h.THREAD_CHANNEL_TYPES.has(s.type)) {
          if (d.default.isMuted(s.id)) return !1;
          let t = (0, c.computeThreadNotificationSetting)(s);
          return (
            t !== M.ThreadMemberFlags.NO_MESSAGES &&
            (t === M.ThreadMemberFlags.ALL_MESSAGES ||
              (0, u.isRawMessageMentioned)({
                rawMessage: e,
                userId: r.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t =
            !h.GUILD_VOCAL_CHANNEL_TYPES.has(s.type) ||
            E.default.getChannelId() === s.id;
          if (N.default.allowAllMessages(s) && t) return !0;
          let n = N.default.isSuppressEveryoneEnabled(s.getGuildId()),
            l = N.default.isSuppressRolesEnabled(s.getGuildId());
          return (0, u.isRawMessageMentioned)({
            rawMessage: e,
            userId: r.id,
            suppressEveryone: n,
            suppressRoles: l,
          });
        }
      }
      function b(e, t) {
        var n;
        let l = I.default.getChannelId(_.default.getGuildId());
        if (l !== t) return !1;
        let a = p.default.getChannel(t);
        e.type === R.MessageTypes.THREAD_STARTER_MESSAGE &&
          (a = p.default.getChannel(null == a ? void 0 : a.parent_id));
        let s = T.default.getCurrentUser(),
          i = T.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id
          );
        return (
          !(
            null == a ||
            null == s ||
            null == i ||
            a.isManaged() ||
            i.hasFlag(R.UserFlags.SPAMMER) ||
            g.default.isBlocked(i.id) ||
            i.id === s.id ||
            S.default.getStatus() === R.StatusTypes.DND ||
            f.FocusMode.getSetting() ||
            N.default.allowNoMessages(a)
          ) && !0
        );
      }
      function j(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = T.default.getCurrentUser(),
          s = T.default.getUser(e.ownerId);
        if (
          null == t ||
          null == a ||
          null == s ||
          !y(a, s, t, l, !0) ||
          N.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        )
          return !1;
        if (!n) {
          let e = I.default.getChannelId(_.default.getGuildId());
          if (e === t.id) return !1;
        }
        return N.default.getNewForumThreadsCreated(t);
      }
      let G = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, l.computeChannelName)(t, T.default, g.default, !0))
          .concat(
            null != n
              ? ", ".concat((0, l.computeChannelName)(n, T.default, g.default))
              : "",
            ")"
          );
      function U(e, t, n, l) {
        switch (e.type) {
          case R.ChannelTypes.GUILD_ANNOUNCEMENT:
          case R.ChannelTypes.GUILD_TEXT:
            return t;
          case R.ChannelTypes.GROUP_DM:
            return n;
          case R.ChannelTypes.DM:
          default:
            return l;
        }
      }
      function P(e, t, n) {
        var s;
        let i;
        let u = L.default.getName(e.getGuildId(), e.id, n),
          d = u;
        switch (e.type) {
          case R.ChannelTypes.GUILD_ANNOUNCEMENT:
          case R.ChannelTypes.GUILD_TEXT:
          case R.ChannelTypes.GUILD_VOICE:
          case R.ChannelTypes.ANNOUNCEMENT_THREAD:
          case R.ChannelTypes.PUBLIC_THREAD:
          case R.ChannelTypes.PRIVATE_THREAD:
            let c = p.default.getChannel(e.parent_id);
            if (t.type === R.MessageTypes.THREAD_STARTER_MESSAGE && null != c)
              d = G(d, c, p.default.getChannel(c.parent_id));
            else if ((0, o.default)(t)) {
              let t = m.default.getGuild(e.getGuildId());
              null != t && (d = G(d, e, c));
            } else d = G(d, e, c);
            break;
          case R.ChannelTypes.GROUP_DM:
            let f =
              e.isManaged() &&
              n.bot &&
              d === (0, l.computeChannelName)(e, T.default, g.default);
            !f &&
              (d = ""
                .concat(d, " (")
                .concat(
                  (0, l.computeChannelName)(e, T.default, g.default, !0),
                  ")"
                ));
        }
        let h = t.content;
        if ((0, o.default)(t) && null == (h = v.default.stringify(t, e)))
          throw (
            (new (0, a.default)("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t
            ),
            Error("failed to stringify system message"))
          );
        let C = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
        if (null != t.activity && null != t.application)
          i =
            t.activity.type === R.ActivityActionTypes.JOIN
              ? U(
                  e,
                  O.default.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  O.default.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  O.default.Messages
                    .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN
                ).format({ user: u, game: t.application.name })
              : t.activity.type === R.ActivityActionTypes.JOIN_REQUEST
                ? U(
                    e,
                    O.default.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    O.default.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    O.default.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST
                  ).format({ user: u, game: t.application.name })
                : "";
        else if (
          null != t.activity &&
          t.activity.type === R.ActivityActionTypes.LISTEN
        ) {
          let t = U(
            e,
            O.default.Messages
              .NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            O.default.Messages
              .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN
          );
          i = t.format({ user: u });
        } else
          i =
            null != C && C.length > 0
              ? O.default.Messages.STICKER_NOTIFICATION_BODY.format({
                  stickerName: C[0].name,
                })
              : t.type === R.MessageTypes.PREMIUM_REFERRAL
                ? O.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format(
                    { username: x.default.getName(n) }
                  )
                : null != t.poll
                  ? O.default.Messages.POLL_SENT_NOTIFICATION.format({
                      question: t.poll.question.text,
                    })
                  : r.default.unparse(h, e.id, !0);
        0 === i.length &&
          (i = (function (e) {
            var t;
            if (void 0 !== e.embeds && e.embeds.length > 0) {
              let t = e.embeds[0];
              if (null != t.description)
                return null != t.title
                  ? "".concat(t.title, " ").concat(t.description)
                  : t.description;
              if (null != t.title) return t.title;
              if (null != t.fields) {
                let e = t.fields[0];
                return "".concat(e.name, " ").concat(e.value);
              }
            }
            if (
              (0, A.hasFlag)(
                null !== (t = e.flags) && void 0 !== t ? t : 0,
                R.MessageFlags.IS_VOICE_MESSAGE
              )
            )
              return O.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
            if (void 0 !== e.attachments && e.attachments.length > 0) {
              let t = e.attachments[0].filename;
              return O.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
                filename: t,
              });
            }
            return "";
          })(t));
        let E = n.getAvatarURL(e.guild_id, 128);
        return { icon: E, title: d, body: i };
      }
    },
    566673: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("799895");
      var l = n("799895").default;
    },
    687609: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("49111"),
        a = n("782340"),
        s = {
          getStatus: function (e) {
            let t,
              n,
              s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (e) {
              case l.RTCConnectionStates.CONNECTING:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_CONNECTING);
                break;
              case l.RTCConnectionStates.AUTHENTICATING:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_AUTHENTICATING);
                break;
              case l.RTCConnectionStates.AWAITING_ENDPOINT:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT);
                break;
              case l.RTCConnectionStates.RTC_CONNECTED:
                (t = l.ConnectionStatus.CONNECTED),
                  (n = s
                    ? a.default.Messages.CONNECTION_STATUS_VIDEO_CONNECTED
                    : a.default.Messages.CONNECTION_STATUS_VOICE_CONNECTED);
                break;
              case l.RTCConnectionStates.RTC_CONNECTING:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_RTC_CONNECTING);
                break;
              case l.RTCConnectionStates.ICE_CHECKING:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_ICE_CHECKING);
                break;
              case l.RTCConnectionStates.DTLS_CONNECTING:
                (t = l.ConnectionStatus.CONNECTING),
                  (n = a.default.Messages.CONNECTION_STATUS_DTLS_CONNECTING);
                break;
              case l.RTCConnectionStates.NO_ROUTE:
                (t = l.ConnectionStatus.ERROR),
                  (n = a.default.Messages.CONNECTION_STATUS_NO_ROUTE);
                break;
              case l.RTCConnectionStates.RTC_DISCONNECTED:
                (t = l.ConnectionStatus.ERROR),
                  (n = a.default.Messages.CONNECTION_STATUS_RTC_DISCONNECTED);
                break;
              case l.RTCConnectionStates.DISCONNECTED:
              default:
                (t = l.ConnectionStatus.ERROR),
                  (n = a.default.Messages.CONNECTION_STATUS_DISCONNECTED);
            }
            return { connectionStatus: t, connectionStatusText: n };
          },
          getShortHostname: function (e) {
            return null == e ? "" : e.split(".")[0];
          },
        };
    },
    732226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatArrowRightIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M12.2 22c.5-.01.66-.84.37-1.24A3 3 0 0 1 15 16h.46c.35 0 .6-.34.56-.69a3 3 0 0 1 5.1-2.43l.06.06c.29.28.77.12.8-.28L22 12a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22h10Z",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
            (0, l.jsx)("path", {
              d: "M19.7 14.3a1 1 0 0 0-1.4 1.4l.29.3 2 2H15a1 1 0 1 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-2.57-2.58-1.43-1.43Z",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
          ],
        });
      };
    },
    723366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConnectionAverageIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.STATUS_WARNING,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 7a1 1 0 0 0 0 2 12 12 0 0 1 12 12 1 1 0 1 0 2 0A14 14 0 0 0 3 7Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: r,
            }),
          ],
        });
      };
    },
    912876: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConnectionBadIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.STATUS_DANGER,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
            className: r,
          }),
        });
      };
    },
    571044: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConnectionFineIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.STATUS_POSITIVE,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M2 3a1 1 0 0 1 1-1 19 19 0 0 1 19 19 1 1 0 1 1-2 0A17 17 0 0 0 3 4a1 1 0 0 1-1-1Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M2 8a1 1 0 0 1 1-1 14 14 0 0 1 14 14 1 1 0 1 1-2 0A12 12 0 0 0 3 9a1 1 0 0 1-1-1Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: r,
            }),
          ],
        });
      };
    },
    767624: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConnectionUnknownIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M2 3a1 1 0 0 1 1-1c6.92 0 12.97 3.7 16.3 9.22.22.37-.15.86-.6.9-.2.02-.4.06-.6.12a.58.58 0 0 1-.67-.22C14.43 7.2 9.1 4 3 4a1 1 0 0 1-1-1ZM15.48 15.15a.5.5 0 0 0 .02-.47A14 14 0 0 0 3 7a1 1 0 0 0 0 2 12 12 0 0 1 10.95 7.09c.18.39.74.44.96.07l.57-1.01ZM2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    73261: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HourglassIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M9.1 8.85A.5.5 0 0 1 9.45 8h5.1a.5.5 0 0 1 .35.85l-.84.85a3.25 3.25 0 0 0 0 4.6l2.06 2.06A3 3 0 0 1 17 18.5v1.01a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.01a3 3 0 0 1 .88-2.13l2.06-2.06a3.25 3.25 0 0 0 0-4.6l-.84-.85Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M7 1a3 3 0 0 0-3 3v1.51a6 6 0 0 0 1.76 4.25l2.06 2.06c.1.1.1.26 0 .36l-2.06 2.06A6 6 0 0 0 4 18.5V20a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.51a6 6 0 0 0-1.76-4.25l-2.06-2.06a.25.25 0 0 1 0-.36l2.06-2.06A6 6 0 0 0 20 5.5V4a3 3 0 0 0-3-3H7ZM6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.51a4 4 0 0 1-1.17 2.83l-2.07 2.07c-.88.88-.88 2.3 0 3.18l2.07 2.07A4 4 0 0 1 18 18.49V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.51a4 4 0 0 1 1.17-2.83l2.07-2.07c.88-.88.88-2.3 0-3.18L7.17 8.34A4 4 0 0 1 6 5.51V4Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    816001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusMediumIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=05807858a085025d6978.js.map
