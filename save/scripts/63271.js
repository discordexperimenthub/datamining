(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63271"],
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
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return r;
          },
          updateCardInfo: function () {
            return l;
          },
          clearCardInfo: function () {
            return s;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return u;
          },
        });
      var i = n("913144");
      function r(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function l(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function s() {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function a(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function u() {
        i.default.wait(() =>
          i.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return r;
          },
        });
      var i = n("913144");
      function r() {
        i.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    145079: function (e, t, n) {
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
        s = n("446674"),
        a = n("77078"),
        u = n("102985"),
        o = n("79798"),
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
      let E = e => {
        let {
          primary: t,
          secondary: n,
          botType: r,
          botVerified: s,
          discriminatorClass: u,
          className: c,
          usernameClass: d,
          color: v,
          botClass: E,
          showStreamerModeTooltip: m,
        } = e;
        return (0, i.jsxs)("div", {
          className: l(h.info, c),
          children: [
            (0, i.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: m,
              "aria-label": !!m && void 0,
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
              (0, i.jsx)(o.default, {
                type: r,
                className: l(h.infoSpacing, E),
                verified: s,
              }),
          ],
        });
      };
      var m = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: l,
            showAccountIdentifier: a,
            overrideDiscriminator: o,
            forcePomelo: f,
            ...h
          } = e,
          m = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          C = m || t || n.isNonUserBot(),
          S = n.toString(),
          p = d.default.getName(n),
          _ = l ? S : null != r ? r : p,
          g = n.isPomelo() || f;
        if (g || _ !== S) {
          let e =
              _ === S && g && l
                ? d.default.getUserTag(n, { forcePomelo: f })
                : _,
            t = a && e !== "@".concat(S) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(E, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: v(n),
            showStreamerModeTooltip: m && e !== p,
            ...h,
          });
        }
        return (0, i.jsx)(c.default, {
          name: _,
          botType: v(n),
          botVerified: n.isVerifiedBot(),
          discriminator: C || _ !== S ? null : null != o ? o : n.discriminator,
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
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("430143");
      n.es(i, t);
    },
    304983: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("541742");
      n.es(i, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("632874");
      n.es(i, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("782542");
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
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var i = n("884691");
      function r(e) {
        let [t, n] = (0, i.useState)(!1),
          r = (0, i.useRef)(e.current);
        return (
          (0, i.useEffect)(() => {
            r.current = e.current;
          }, [e]),
          (0, i.useEffect)(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => n(!0),
              i = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", i),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", i);
              }
            );
          }, [r]),
          t
        );
      }
    },
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return a;
          },
        }),
        n("222007");
      var i = n("697218"),
        r = n("315102"),
        l = n("449008"),
        s = n("49111");
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case s.ChannelTypes.DM:
            let [a] = e.recipients
              .map(i.default.getUser)
              .filter(l.isNotNullish);
            if (null == a) return null;
            return a.getAvatarURL(void 0, t, n);
          case s.ChannelTypes.GROUP_DM:
            return r.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
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
            return E;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
        l = n("315102"),
        s = n("773336"),
        a = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
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
            : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        v = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(o, "/roles")) && e.includes("/icons/")),
        E = (e, t) => {
          var n;
          let i =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return i || e.features.has(a.GuildFeatures.ROLE_ICONS);
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
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var i = n("316693"),
        r = n("923510"),
        l = n("49111");
      let s = l.Permissions.VIEW_CHANNEL,
        a = i.default.combine(s, l.Permissions.CONNECT),
        u = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    821393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("808653"),
        n("222007"),
        n("424973");
      var i = n("884691"),
        r = n("446674"),
        l = n("398604"),
        s = n("745049");
      function a(e, t) {
        let n = (0, r.useStateFromStoresArray)(
            [l.default],
            () => Object.values(l.default.getUsersForGuildEvent(e, null)),
            [e]
          ),
          a = (0, r.useStateFromStoresArray)(
            [l.default],
            () => Object.values(l.default.getUsersForGuildEvent(e, t)),
            [e, t]
          ),
          u = (0, i.useMemo)(() => {
            let e = a.reduce((e, t) => ((e[t.user_id] = t), e), {}),
              t = n.filter(t => {
                let n = e[t.user_id];
                return (
                  null == n ||
                  n.response === s.GuildScheduledEventUserResponses.INTERESTED
                );
              }),
              i = a.filter(
                e =>
                  e.response === s.GuildScheduledEventUserResponses.INTERESTED
              ),
              r = new Set(),
              l = [],
              u = e => {
                !r.has(e.user_id) && (l.push(e), r.add(e.user_id));
              };
            return t.forEach(u), i.forEach(u), l;
          }, [n, a]);
        return u;
      }
    },
    833843: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        l = n("446674"),
        s = n("77078"),
        a = n("922770"),
        u = n("267567"),
        o = n("42203"),
        c = n("476765"),
        d = n("599110"),
        f = n("686904"),
        h = n("933326"),
        v = n("398604"),
        E = n("152475"),
        m = n("598639"),
        C = n("18284"),
        S = n("821393"),
        p = n("613767"),
        _ = n("822516"),
        g = n("93550"),
        N = n("707916"),
        I = n("255050"),
        T = n("644189"),
        x = n("965353"),
        A = n("360538"),
        R = n("403901"),
        M = n("369404"),
        j = n("745049"),
        L = n("49111"),
        y = n("536430");
      function b(e) {
        let {
            guildEvent: t,
            guild: n,
            channel: r,
            onActionTaken: s,
            isHub: a,
            isMember: o,
            recurrenceId: c,
          } = e,
          d = (0, v.isGuildScheduledEventActive)(t),
          f = (0, l.useStateFromStores)(
            [v.default],
            () => v.default.isInterestedInEventRecurrence(t.id, c),
            [c, t]
          ),
          h = (0, E.default)(t),
          m = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.isLurking(n.id),
            [n.id]
          ),
          C = (0, p.useIsChannelPublic)(null == r ? void 0 : r.id, t.id),
          S = (0, M.default)({
            guild: n,
            channel: r,
            guildScheduledEvent: t,
            isActive: d,
            recurrenceId: c,
            onActionTaken: s,
          }),
          { entity_type: _ } = t;
        return a
          ? (0, i.jsx)(T.default, {
              isActive: d,
              isUserLurking: m,
              rsvped: f,
              isMember: o,
              isDetailsView: !0,
              guildName: null == n ? void 0 : n.name,
              isChannelPublic: C,
              canInvite: h,
              ...S,
            })
          : (0, i.jsx)(N.default, {
              isActive: d,
              isUserLurking: m,
              rsvped: f,
              isChannelPublic: C,
              canInvite: h,
              entityType: _,
              ...S,
            });
      }
      var w = e => {
        let {
            guildScheduledEventId: t,
            parentGuildId: n,
            transitionState: u,
            initialRecurrenceId: E,
            onClose: p,
          } = e,
          [N, T] = r.useState(E),
          M = (0, l.useStateFromStores)(
            [v.default],
            () => v.default.getGuildScheduledEvent(t),
            [t]
          ),
          w = null == M ? void 0 : M.id,
          P = null == M ? void 0 : M.guild_id,
          { guild: V, isMember: D } = (0, m.default)(P, w),
          O = (0, a.default)(n),
          U = null == M ? void 0 : M.channel_id,
          H = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.getChannel(U),
            [U]
          ),
          G = (0, c.useUID)(),
          [F, k] = r.useState(j.EventDetailSections.EVENT_INFO),
          B = (0, S.default)(w, N),
          Z = (0, C.default)(P, w, N),
          [z, { loading: W, error: Y }] = (0, f.default)(() =>
            h.default.getGuildEventUsers(null == M ? void 0 : M.id, N, P)
          );
        r.useEffect(() => {
          null == M
            ? p()
            : d.default.track(L.AnalyticEvents.OPEN_MODAL, {
                type: j.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                guild_id: M.guild_id,
              });
        }, [M, p]);
        let X = r.useRef(null),
          [K, q] = r.useState(0);
        if (
          (r.useLayoutEffect(() => {
            var e, t;
            let n = (null == M ? void 0 : M.recurrence_rule) != null ? 16 : 0;
            q(
              (null !==
                (t =
                  null == X
                    ? void 0
                    : null === (e = X.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) && void 0 !== t
                ? t
                : 0) + n
            );
          }, [X, null == M ? void 0 : M.recurrence_rule]),
          null == M || null == V || (!D && !O))
        )
          return null;
        let J = e => {
            e !== F && (e === j.EventDetailSections.RSVP_LIST && z(), k(e));
          },
          Q = null != N ? N : (0, _.getNextRecurrenceIdInEvent)(M);
        return (0, i.jsxs)(s.ModalRoot, {
          size: s.ModalSize.MEDIUM,
          transitionState: u,
          "aria-labelledby": G,
          className: y.root,
          children: [
            (null == M ? void 0 : M.image) != null &&
              (0, i.jsx)(I.default, {
                source: (0, g.default)(M),
                className: y.banner,
              }),
            (0, i.jsx)(x.default, {
              onClose: p,
              selectedTab: F,
              onTabSelected: J,
              userCount: Z,
              hasBanner: (null == M ? void 0 : M.image) != null,
              isHub: O,
            }),
            (0, i.jsx)("div", {
              className: y.container,
              children: (0, i.jsx)(s.ModalContent, {
                className: y.contentContainer,
                style: { height: K },
                children: (0, i.jsxs)(s.Slides, {
                  activeSlide: F,
                  width: 600,
                  centered: !1,
                  children: [
                    (0, i.jsx)(s.Slide, {
                      id: j.EventDetailSections.EVENT_INFO,
                      children: (0, i.jsx)(A.default, {
                        guildEvent: M,
                        guild: V,
                        channel: H,
                        headerId: G,
                        onClose: p,
                        onClickInterestedCount: () =>
                          J(j.EventDetailSections.RSVP_LIST),
                        isHub: O,
                        containerRef: X,
                        recurrenceId: Q,
                        setRecurrenceId: T,
                      }),
                    }),
                    (0, i.jsx)(s.Slide, {
                      id: j.EventDetailSections.RSVP_LIST,
                      children: (0, i.jsx)(R.default, {
                        guildEvent: M,
                        recurrenceId: Q,
                        eventUsers: B,
                        loading: W,
                        containerHeight: K,
                        error: Y,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, i.jsx)(s.ModalFooter, {
              className: y.footer,
              children: (0, i.jsx)(b, {
                guildEvent: M,
                isHub: O,
                isMember: D,
                guild: V,
                channel: H,
                onActionTaken: p,
                recurrenceId: Q,
              }),
            }),
          ],
        });
      };
    },
    965353: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("424973");
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        a = n("77078"),
        u = n("945330"),
        o = n("745049"),
        c = n("782340"),
        d = n("689560");
      function f(e) {
        let {
            onClose: t,
            selectedTab: n,
            onTabSelected: l,
            userCount: f,
            hasBanner: h,
            isHub: v = !1,
          } = e,
          E = r.useRef(null);
        r.useEffect(() => {
          var e, t, n;
          return null === (n = E.current) || void 0 === n
            ? void 0
            : null === (t = n.ref) || void 0 === t
              ? void 0
              : null === (e = t.blur) || void 0 === e
                ? void 0
                : e.call(t);
        }, []);
        let m =
            c.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
              userCount: f,
            }),
          C = [
            (0, i.jsx)(
              a.TabBar.Item,
              {
                className: d.tabBarItem,
                id: o.EventDetailSections.EVENT_INFO,
                children: c.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
              },
              "event-details"
            ),
          ];
        return (
          !v &&
            C.push(
              (0, i.jsx)(
                a.TabBar.Item,
                {
                  className: d.tabBarItem,
                  id: o.EventDetailSections.RSVP_LIST,
                  children: m,
                },
                "is-hub"
              )
            ),
          (0, i.jsxs)("div", {
            className: d.container,
            children: [
              (0, i.jsx)(a.Clickable, {
                ref: E,
                onClick: t,
                className: d.closeButton,
                "aria-label": c.default.Messages.CLOSE,
                children: (0, i.jsx)(u.default, {
                  className: s(d.closeIcon, h && d.closeIconBanner),
                }),
              }),
              (0, i.jsx)(a.TabBar, {
                className: d.tabBar,
                "aria-label": c.default.Messages.OPTIONS,
                selectedItem: n,
                type: "top",
                onItemSelect: l,
                children: C,
              }),
            ],
          })
        );
      }
    },
    360538: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        l = n("414456"),
        s = n.n(l),
        a = n("446674"),
        u = n("77078"),
        o = n("970728"),
        c = n("401642"),
        d = n("26989"),
        f = n("305961"),
        h = n("580357"),
        v = n("476263"),
        E = n("155207"),
        m = n("158998"),
        C = n("933326"),
        S = n("882550"),
        p = n("466148"),
        _ = n("18284"),
        g = n("189443"),
        N = n("909151"),
        I = n("427554"),
        T = n("393745"),
        x = n("586403"),
        A = n("49111"),
        R = n("782340"),
        M = n("409295");
      function j(e) {
        var t;
        let { creator: n, guildId: r } = e,
          l = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getMember(r, n.id),
            [n, r]
          );
        return (0, i.jsxs)("div", {
          className: M.row,
          children: [
            (0, i.jsx)(u.Avatar, {
              size: u.AvatarSizes.SIZE_20,
              src: n.getAvatarURL(r, 20),
              "aria-label":
                null !== (t = null == l ? void 0 : l.nick) && void 0 !== t
                  ? t
                  : m.default.getName(n),
              className: M.icon,
            }),
            (0, i.jsx)(u.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: R.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                usernameHook: function () {
                  var e, t;
                  return (0, i.jsx)(
                    u.Clickable,
                    {
                      onClick: () =>
                        (0, c.openUserProfileModal)({
                          userId: n.id,
                          guildId: r,
                          analyticsLocation: {
                            section:
                              A.AnalyticsSections
                                .SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG,
                          },
                        }),
                      className: M.creator,
                      tag: "span",
                      role: "link",
                      children: (0, i.jsx)(u.NameWithRole, {
                        name:
                          null !== (e = null == l ? void 0 : l.nick) &&
                          void 0 !== e
                            ? e
                            : m.default.getName(n),
                        color:
                          null !== (t = null == l ? void 0 : l.colorString) &&
                          void 0 !== t
                            ? t
                            : void 0,
                      }),
                    },
                    "open-user-profile"
                  );
                },
              }),
            }),
          ],
        });
      }
      function L(e) {
        let { guild: t, onClick: n, onClose: l } = e,
          a = r.useCallback(
            e => {
              null == n || n(e), null != n && (null == l || l(e));
            },
            [n, l]
          ),
          o = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(v.default, {
                guild: t,
                size: v.default.Sizes.MINI,
                active: !0,
                className: s(M.guildIcon, M.icon),
              }),
              (0, i.jsx)(h.default, {
                guild: t,
                tooltipPosition: "top",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                size: 16,
                className: M.guildBadge,
              }),
              (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: M.linkText,
                children: t.name,
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: M.row,
          children:
            null != n
              ? (0, i.jsx)(u.Clickable, {
                  onClick: a,
                  className: M.clickable,
                  role: "link",
                  children: o,
                })
              : o,
        });
      }
      function y(e) {
        let { userCount: t, onClick: n } = e;
        return (0, i.jsxs)("div", {
          className: M.row,
          children: [
            (0, i.jsx)(E.default, { width: 20, height: 20, className: M.icon }),
            (0, i.jsx)(u.Clickable, {
              onClick: n,
              className: M.interestedCount,
              children: (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children:
                  R.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: t,
                  }),
              }),
            }),
          ],
        });
      }
      function b(e) {
        let {
            guildEvent: t,
            guild: n,
            channel: l,
            headerId: s,
            onClose: c,
            onClickInterestedCount: d,
            isHub: h = !1,
            containerRef: v,
            recurrenceId: E,
            setRecurrenceId: m,
          } = e,
          A = (0, a.useStateFromStores)(
            [f.default],
            () => null != f.default.getGuild(n.id),
            [n.id]
          ),
          { startTime: R, endTime: b } = (0, p.default)(t.id, E),
          w = (0, _.default)(t.guild_id, t.id, E),
          P = r.useCallback(
            e => {
              e.stopPropagation(),
                null != t && (0, o.transitionToGuildFromEventInvite)(t);
            },
            [t]
          ),
          V = (0, S.default)(t);
        r.useEffect(() => {
          C.default.getGuildEventUserCounts(n.id, t.id, null != E ? [E] : []),
            C.default.getGuildEventsForCurrentUser(n.id);
        }, [n.id, t.id, E]);
        let D = (0, g.recurrenceRuleFromServer)(t.recurrence_rule);
        return (0, i.jsxs)("div", {
          ref: v,
          children: [
            (0, i.jsxs)("div", {
              className: M.header,
              children: [
                (0, i.jsx)(T.GuildEventTimeStatus, {
                  startTime: R.toISOString(),
                  endTime: null == b ? void 0 : b.toISOString(),
                  status: t.status,
                  eventType: t.entity_type,
                  guildEventId: t.id,
                  recurrenceId: E,
                }),
                (0, i.jsx)(u.Heading, {
                  id: s,
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  className: M.title,
                  children: t.name,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: M.body,
              children: [
                (0, i.jsx)(L, {
                  guild: n,
                  onClick: A ? P : void 0,
                  onClose: c,
                }),
                (0, i.jsx)(x.default, {
                  guildScheduledEvent: t,
                  channel: l,
                  onClose: c,
                }),
                null != w && (0, i.jsx)(y, { userCount: w, onClick: d }),
                !h &&
                  null != V &&
                  (0, i.jsx)(j, { creator: V, guildId: n.id }, V.id),
                null != t.description &&
                  (0, i.jsx)("div", {
                    className: M.description,
                    children: (0, i.jsx)(N.default, {
                      description: t.description,
                      truncate: !1,
                      guildId: n.id,
                    }),
                  }),
              ],
            }),
            null != D && (0, i.jsx)("hr", { className: M.divider }),
            null != D &&
              (0, i.jsx)(I.default, {
                guildId: n.id,
                recurrenceRule: D,
                guildEventId: t.id,
                onRecurrenceClick: m,
                hideScroller: !0,
                activeRecurrenceId: E,
              }),
          ],
        });
      }
    },
    586403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        l = n("77078"),
        s = n("1339"),
        a = n("914169"),
        u = n("931874"),
        o = n("745049"),
        c = n("409295");
      function d(e) {
        let { guildScheduledEvent: t, channel: n, onClose: d } = e,
          f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL,
          h = r.useCallback(
            e => (0, a.createEventLocationClickHandler)(t, d)(e),
            [t, d]
          ),
          v = (0, u.getLocationDataForEvent)(t, n);
        if (null == v) return null;
        let { IconComponent: E, locationName: m } = v,
          C = (0, i.jsxs)(i.Fragment, {
            children: [
              null != E &&
                (0, i.jsx)(E, {
                  width: 20,
                  height: 20,
                  className: c.channelIcon,
                }),
              (0, i.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: c.locationText,
                children: (0, s.guildEventDetailsParser)(m, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: c.row,
          children:
            null != h
              ? (0, i.jsx)(l.Clickable, {
                  className: f ? c.externalLocation : c.channelLocation,
                  onClick: h,
                  children: C,
                })
              : C,
        });
      }
    },
    403901: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("446674"),
        a = n("77078"),
        u = n("272030"),
        o = n("145079"),
        c = n("119184"),
        d = n("506885"),
        f = n("981601"),
        h = n("271938"),
        v = n("824563"),
        E = n("101125"),
        m = n("697218"),
        C = n("155207"),
        S = n("18284"),
        p = n("745049"),
        _ = n("782340"),
        g = n("519951");
      function N(e) {
        let { children: t } = e;
        return (0, i.jsxs)("div", {
          className: g.emptyContainer,
          children: [
            (0, i.jsx)(c.default, {
              children: (0, i.jsx)("div", {
                className: g.circle,
                children: (0, i.jsx)(C.default, {
                  height: 40,
                  width: 40,
                  className: g.icon,
                }),
              }),
            }),
            t,
          ],
        });
      }
      function I() {
        return (0, i.jsx)(N, {
          children: (0, i.jsx)(a.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: g.title,
            children:
              _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE,
          }),
        });
      }
      function T() {
        return (0, i.jsx)(N, {
          children: (0, i.jsx)(a.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: g.errorTitle,
            children:
              _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR,
          }),
        });
      }
      function x(e) {
        let { count: t } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: g.listRow,
            children: [
              (0, i.jsx)("div", {
                className: l(g.listRowCircle, g.listAvatar),
                children: (0, i.jsx)(C.default, {
                  height: 14,
                  width: 14,
                  className: g.icon,
                }),
              }),
              (0, i.jsx)(a.Text, {
                color: "text-normal",
                variant: "text-md/normal",
                children:
                  _.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format(
                    { userRemainCount: t }
                  ),
              }),
            ],
          }),
        });
      }
      function A(e) {
        var t;
        let { eventUser: n, onContextMenu: r } = e,
          u = (0, s.useStateFromStores)([m.default], () =>
            m.default.getUser(n.user_id)
          ),
          c = null === (t = n.member) || void 0 === t ? void 0 : t.guildId,
          C = (0, s.useStateFromStores)(
            [E.default, v.default, h.default],
            () =>
              n.user_id === h.default.getId()
                ? E.default.getStatus()
                : v.default.getStatus(n.user_id, c),
            [n.user_id, c]
          );
        return null == u
          ? null
          : (0, i.jsx)(a.Popout, {
              preload: () =>
                (0, d.default)(u.id, u.getAvatarURL(c, 80), { guildId: c }),
              renderPopout: e =>
                (0, i.jsx)(f.default, { ...e, userId: n.user_id, guildId: c }),
              position: "left",
              spacing: 16,
              children: (e, t) => {
                var s, c;
                let { isShown: d } = t;
                return (0, i.jsxs)(a.Clickable, {
                  className: l(g.listRow, g.interactiveRow, {
                    [g.selected]: d,
                  }),
                  onContextMenu: e => r(e, u),
                  ...e,
                  children: [
                    (0, i.jsx)(a.Avatar, {
                      src: u.getAvatarURL(
                        null === (s = n.member) || void 0 === s
                          ? void 0
                          : s.guildId,
                        24
                      ),
                      "aria-label": u.username,
                      size: a.AvatarSizes.SIZE_24,
                      className: g.listAvatar,
                      status: C,
                    }),
                    (0, i.jsx)(o.default, {
                      user: u,
                      className: g.listName,
                      discriminatorClass: g.listDiscriminator,
                      nick:
                        null === (c = n.member) || void 0 === c
                          ? void 0
                          : c.nick,
                    }),
                  ],
                });
              },
            });
      }
      function R(e) {
        let { eventUsers: t, usersNotShownCount: n = 0, onContextMenu: r } = e;
        return (0, i.jsxs)(a.ScrollerThin, {
          className: g.listScroller,
          children: [
            t.map(e =>
              (0, i.jsx)(A, { eventUser: e, onContextMenu: r }, e.user_id)
            ),
            n > 0 && (0, i.jsx)(x, { count: n }),
          ],
        });
      }
      function M(e) {
        let { children: t, style: n } = e;
        return (0, i.jsx)("div", {
          className: g.container,
          style: null != n ? n : {},
          children: t,
        });
      }
      function j(e) {
        let { children: t, height: n } = e;
        return (0, i.jsx)(M, { style: { height: n }, children: t });
      }
      function L(e) {
        let {
            guildEvent: t,
            recurrenceId: r,
            eventUsers: l,
            loading: s,
            error: o,
            containerHeight: c,
          } = e,
          d = (0, S.default)(t.guild_id, t.id, r);
        if (s && 0 === l.length)
          return (0, i.jsx)(j, {
            height: c,
            children: (0, i.jsx)(a.Spinner, {
              type: a.Spinner.Type.SPINNING_CIRCLE,
              className: g.spinner,
            }),
          });
        if (null != o && 0 === l.length)
          return (0, i.jsx)(j, { height: c, children: (0, i.jsx)(T, {}) });
        let f = 0;
        return (
          l.length >= p.MAX_RSVP_USER_DISPLAY_COUNT &&
            d > p.MAX_RSVP_USER_DISPLAY_COUNT &&
            (f = Math.max(d - l.length, 0)),
          0 === l.length
            ? (0, i.jsx)(j, { height: c, children: (0, i.jsx)(I, {}) })
            : (0, i.jsx)(M, {
                children: (0, i.jsx)(R, {
                  eventUsers: l,
                  onContextMenu: function (e, t) {
                    (0, u.openContextMenuLazy)(e, async () => {
                      let { default: e } = await n
                        .el("406784")
                        .then(n.bind(n, "406784"));
                      return n => (0, i.jsx)(e, { ...n, user: t });
                    });
                  },
                  usersNotShownCount: f,
                }),
              })
        );
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("748820"),
        l = n("77078"),
        s = n("112679"),
        a = n("55689"),
        u = n("676379"),
        o = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        v = n("646718");
      function E(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: E,
            onClose: m,
            onComplete: C,
            onSubscriptionConfirmation: S,
            analyticsLocations: p,
            analyticsObject: _,
            analyticsLocation: g,
            analyticsSourceLocation: N,
            isGift: I = !1,
            giftMessage: T,
            subscriptionTier: x,
            trialId: A,
            postSuccessGuild: R,
            openInvoiceId: M,
            applicationId: j,
            referralTrialOfferId: L,
            giftRecipient: y,
            returnRef: b,
            subscription: w,
          } = null != e ? e : {},
          P = !1,
          V = (0, r.v4)(),
          D = o.default.getCurrentUser(),
          O = (0, f.isPremiumExactly)(D, v.PremiumTypes.TIER_2);
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...l } = n;
              return (0, i.jsx)(e, {
                ...l,
                loadId: V,
                subscriptionTier: x,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(x),
                isGift: I,
                giftMessage: T,
                giftRecipient: y,
                initialPlanId: t,
                followupSKUInfo: E,
                onClose: (e, t) => {
                  r(),
                    null == m || m(e),
                    e &&
                      (null == S || S(),
                      !I &&
                        null != t &&
                        t === v.PremiumSubscriptionSKUs.TIER_2 &&
                        !O &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (P = !0),
                    null == C || C(),
                    !I && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: S,
                analyticsLocations: p,
                analyticsObject: _,
                analyticsLocation: g,
                analyticsSourceLocation: N,
                trialId: A,
                postSuccessGuild: R,
                planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: M,
                applicationId: j,
                referralTrialOfferId: L,
                returnRef: b,
                subscription: w,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !P &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: V,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != g ? g : _,
                  source: N,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: I,
                  eligible_for_trial: null != A,
                  application_id: j,
                  location_stack: p,
                }),
                (0, s.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == m || m(P),
                P && (null == S || S());
            },
          }
        );
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
            return E;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
        l = n("446674"),
        s = n("813006");
      n("923959");
      var a = n("957255"),
        u = n("697218");
      n("991170");
      var o = n("270161"),
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
          let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              r.default.combine(t, c.Permissions.CREATE_EVENTS),
              r.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        v = e => {
          let [t, n] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [r, o, v, E] = (0, l.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            m = (0, l.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            C = i.useCallback(e => f(e, m, o, r), [r, o, m]),
            S = i.useCallback(e => f(e, m, E, v), [E, v, m]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: v,
                canManageAllExpressions: o,
                canManageAllEvents: E,
                canManageGuildExpression: C,
                canManageGuildEvent: S,
              };
        },
        E = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [i, r] =
              e instanceof s.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            v = t.can(i, e),
            E = t.can(r, e),
            m = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: v,
                canManageAllExpressions: o,
                canManageAllEvents: E,
                canManageGuildExpression: e => f(e, m, o, l),
                canManageGuildEvent: e => f(e, m, E, v),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return r;
          },
        });
      var i = n("913144");
      let r = e => {
        i.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("884691"),
        r = n("79112"),
        l = n("685665"),
        s = n("929423");
      n("424562");
      var a = n("49111"),
        u = n("397336");
      function o(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: o,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, l.default)(),
          h = (0, i.useCallback)(() => {
            null != t && (0, s.initGuildIdentitySettings)(t, null != c ? c : f),
              r.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? u.ProfileCustomizationSubsection.GUILD
                  : u.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: o,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, o, c, d, f]);
        return h;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return C;
          },
          useCanStartPublicThread: function () {
            return S;
          },
          computeCanStartPublicThread: function () {
            return p;
          },
          useCanStartPrivateThread: function () {
            return _;
          },
          useCanStartThread: function () {
            return g;
          },
          useCanViewThreadForMessage: function () {
            return I;
          },
          useHasActiveThreads: function () {
            return T;
          },
          useCanManageThread: function () {
            return x;
          },
          useCanUnarchiveThread: function () {
            return M;
          },
          canUnarchiveThread: function () {
            return j;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return L;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          computeIsReadOnlyThread: function () {
            return b;
          },
          useIsThreadModerator: function () {
            return P;
          },
          useCanJoinThreadVoice: function () {
            return V;
          },
          useIsNonModInLockedThread: function () {
            return D;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        l = n("316693"),
        s = n("446674"),
        a = n("296892"),
        u = n("889014"),
        o = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        v = n("299039"),
        E = n("401690"),
        m = n("49111");
      let C = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function S(e, t) {
        let n = (0, s.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? m.Permissions.SEND_MESSAGES
              : l.default.combine(
                  m.Permissions.CREATE_PUBLIC_THREADS,
                  m.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return N(n, e, t);
      }
      function p(e, t) {
        let n = e.isForumLikeChannel()
            ? m.Permissions.SEND_MESSAGES
            : l.default.combine(
                m.Permissions.CREATE_PUBLIC_THREADS,
                m.Permissions.READ_MESSAGE_HISTORY
              ),
          i = h.default.can(n, e);
        return N(i, e, t);
      }
      function _(e) {
        let t = (0, s.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              l.default.combine(m.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === m.ChannelTypes.GUILD_TEXT && N(t, e);
      }
      function g(e) {
        let t = S(e),
          n = _(e);
        return t || n;
      }
      function N(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(m.MessageFlags.HAS_THREAD) || (0, o.default)(n)))
          ) && !0
        );
      }
      function I(e) {
        let t = (0, s.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(v.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => h.default.can(m.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(m.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function T(e) {
        return (0, s.useStateFromStoresObject)([E.default, h.default], () => {
          let t = E.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = E.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = E.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            l = r(n).some(e =>
              h.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = r(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = r(i).some(e => h.default.can(m.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: l || s || a,
            hasMoreActiveThreads: a || s,
          };
        });
      }
      function x(e) {
        let t = (0, s.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, s.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(m.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, s.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function A(e, t) {
        return null != e && t.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function R(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function M(e) {
        let t = (0, s.useStateFromStores)([h.default], () => A(e, h.default)),
          n = P(e);
        return R(e, t, n);
      }
      function j(e) {
        let t = A(e, h.default),
          n = (function (e) {
            return w(e, h.default);
          })(e);
        return R(e, t, n);
      }
      function L(e) {
        var t;
        let n = (0, s.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
              h.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = h.default.can(m.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function w(e, t) {
        return null != e && t.can(m.Permissions.MANAGE_THREADS, e);
      }
      function P(e) {
        return (0, s.useStateFromStores)([h.default], () => w(e, h.default));
      }
      function V(e) {
        let t = (0, u.default)(),
          n = (0, s.useStateFromStores)([h.default], () =>
            h.default.can(m.Permissions.CONNECT, e)
          ),
          i = L(e),
          r = C.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function D(e) {
        let t = P(e);
        return e.isLockedThread() && !t;
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
        a = n("77078"),
        u = n("760607"),
        o = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = r.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(o.flowerStarContainer, l),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(u.default, { ...d, className: s(c, o.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(o.childContainer, {
                [o.redesignIconChildContainer]: h,
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
            return a.BotTagTypes;
          },
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("79798"),
        a = n("988268"),
        u = n("293005"),
        o = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: a,
            className: o,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: h,
            botVerified: v = !1,
            style: E,
            useRemSizes: m = !1,
            usernameIcon: C,
          } = e;
          return (0, i.jsxs)("div", {
            className: l(o, u.nameTag),
            style: E,
            children: [
              (0, i.jsxs)("span", {
                className: l(u.username, d),
                style: null != a ? { color: a } : void 0,
                children: [C, t],
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
                    useRemSizes: m,
                  })
                : null,
            ],
          });
        };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return r;
          },
          Shine: function () {
            return m;
          },
          default: function () {
            return S;
          },
        });
      var i,
        r,
        l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        u = n.n(a),
        o = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((i = r || (r = {})).DEFAULT = "default"), (i.SMALL = "small");
      let v = { default: h.shineDefault, small: h.shineSmall },
        E = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class m extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, l.jsx)(o.default.div, {
            ...i,
            className: u(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, l.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: v[t],
              children: (0, l.jsx)("div", { className: E[t] }),
            }),
          });
        }
      }
      m.defaultProps = { shineSize: "default" };
      let C = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: r,
            pauseAnimation: a,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: v,
            onlyShineOnHover: E,
            ...C
          } = e,
          S = s.createRef(),
          p = (0, d.default)(S),
          _ = !i && !r && !0 !== a && (!E || p);
        return (0, l.jsxs)(c.Button, {
          buttonRef: S,
          ...C,
          className: u(h.shinyButton, n),
          disabled: i,
          submitting: r,
          children: [
            t,
            _
              ? (0, l.jsx)(m, {
                  shinePaused: f,
                  className: u(
                    h.buttonShine,
                    E ? h.onlyShineOnHover : void 0,
                    v
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      C.ShineSizes = r;
      var S = C;
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
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return u;
          },
        });
      var i = n("995008"),
        r = n.n(i),
        l = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        a = () => (0, l.useLazyValue)(() => s()),
        u = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        l = n.n(r),
        s = n("384737"),
        a = n("448052"),
        u = n("748802"),
        o = n("260792"),
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
              transition: E = f.transition,
              className: m,
              foreground: C,
              expanded: S,
              ...p
            } = e,
            { enabled: _ } = (0, c.useRedesignIconContext)(),
            g = t;
          if ((!0 === S ? (g = h.DOWN) : !1 === S && (g = h.RIGHT), _)) {
            let e = {
              [h.UP]: o.ChevronSmallUpIcon,
              [h.DOWN]: s.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: u.ChevronSmallRightIcon,
            }[g];
            return (0, i.jsx)(e, {
              ...p,
              className: m,
              width: n,
              height: r,
              color: v,
              colorClass: C,
            });
          }
          return (0, i.jsx)("svg", {
            className: l(m, E, g),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(p),
            children: (0, i.jsx)("path", {
              className: C,
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
      var E = v;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("733154"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
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
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("505088"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              backgroundColor: a,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
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
        a = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foregroundColor: s = r.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(c),
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
                  className: o,
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
            ...a
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, r.default)(a),
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
    433487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("304983"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          l.MoreHorizontalIcon,
          void 0,
          { size: 24 }
        );
    },
    155207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("811513"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  className: l,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          l.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("424823"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
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
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("390300"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
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
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("287083"),
        s = n("75196"),
        a = (0, r.replaceIcon)(
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
            return a;
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
      function a(e) {
        return (
          !!s && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    686904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("448993");
      function l(e, t) {
        let [n, l] = i.useState(!1),
          [s, a] = i.useState(null),
          u = async () => {
            l(!0), a(null);
            try {
              let t = await e();
              return l(!1), a(null), t;
            } catch (n) {
              let e = new r.APIError(n);
              return null == t || t(e), a(e), l(!1), null;
            }
          };
        return [u, { loading: n, error: s }];
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
          colorClass: a = "",
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
          secondaryColorClass: a = "",
          color: u = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
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
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: o,
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
          colorClass: a = "",
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
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
            }),
          ],
        });
      };
    },
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
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
          colorClass: a = "",
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
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: a,
          }),
        });
      };
    },
    541742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MoreHorizontalIcon: function () {
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
          colorClass: a = "",
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
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: a,
          }),
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
          colorClass: a = "",
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
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
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
          colorClass: a = "",
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
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
            }),
          ],
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
          colorClass: a = "",
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
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
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
          colorClass: a = "",
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
          colorClass: a = "",
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
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
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
            return i;
          },
        }),
        n("222007");
      var i,
        r = n("817736"),
        l = n("118810");
      let s = { root: null, rootMargin: "0px", threshold: 0.5 };
      i = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, r.findDOMNode)(e);
          (0, l.isElement)(n, HTMLElement) &&
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
        constructor(e = s) {
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
      var i = n("884691"),
        r = n("748820"),
        l = n("157590");
      let s = (0, r.v4)(),
        a = new Map(),
        u = new Map();
      class o extends i.Component {
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
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, r.v4)())
            : (this.elementId = s);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(o, new l.default({ root: t, rootMargin: n, threshold: i }));
        }
      }
      o.defaultProps = {
        active: !0,
        children: i.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var c = o;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return i.default;
          },
          VisibilitySensor: function () {
            return r.default;
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
//# sourceMappingURL=150aa48e480cf59bb879.js.map
