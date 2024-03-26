(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42717"],
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
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return l;
          },
          updateCardInfo: function () {
            return r;
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
      function l(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function r(e, t) {
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
            return l;
          },
        });
      var i = n("913144");
      function l() {
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
      var l = n("414456"),
        r = n.n(l),
        s = n("446674"),
        a = n("77078"),
        u = n("102985"),
        o = n("79798"),
        d = n("754474"),
        c = n("158998"),
        f = n("782340"),
        v = n("168540");
      function h(e) {
        if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return d.BotTypes.AI;
        if (e.bot) return d.BotTypes.BOT;
        return null;
      }
      let E = e => {
        let {
          primary: t,
          secondary: n,
          botType: l,
          botVerified: s,
          discriminatorClass: u,
          className: d,
          usernameClass: c,
          color: h,
          botClass: E,
          showStreamerModeTooltip: m,
        } = e;
        return (0, i.jsxs)("div", {
          className: r(v.info, d),
          children: [
            (0, i.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: m,
              "aria-label": !!m && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: r(v.username, c),
                  style: null != h ? { color: h } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: r(v.infoSpacing, u),
                  children: n,
                })
              : void 0,
            null != l &&
              (0, i.jsx)(o.default, {
                type: l,
                className: r(v.infoSpacing, E),
                verified: s,
              }),
          ],
        });
      };
      var m = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: l,
            forceUsername: r,
            showAccountIdentifier: a,
            overrideDiscriminator: o,
            forcePomelo: f,
            ...v
          } = e,
          m = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.hidePersonalInformation
          ),
          C = m || t || n.isNonUserBot(),
          _ = n.toString(),
          p = c.default.getName(n),
          S = r ? _ : null != l ? l : p,
          g = n.isPomelo() || f;
        if (g || S !== _) {
          let e =
              S === _ && g && r
                ? c.default.getUserTag(n, { forcePomelo: f })
                : S,
            t = a && e !== "@".concat(_) ? c.default.getUserTag(n) : void 0;
          return (0, i.jsx)(E, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: h(n),
            showStreamerModeTooltip: m && e !== p,
            ...v,
          });
        }
        return (0, i.jsx)(d.default, {
          name: S,
          botType: h(n),
          botVerified: n.isVerifiedBot(),
          discriminator: C || S !== _ ? null : null != o ? o : n.discriminator,
          ...v,
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
            return l;
          },
        }),
        n("222007");
      var i = n("884691");
      function l(e) {
        let [t, n] = (0, i.useState)(!1),
          l = (0, i.useRef)(e.current);
        return (
          (0, i.useEffect)(() => {
            l.current = e.current;
          }, [e]),
          (0, i.useEffect)(() => {
            let e = l.current;
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
          }, [l]),
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
        l = n("315102"),
        r = n("449008"),
        s = n("49111");
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case s.ChannelTypes.DM:
            let [a] = e.recipients
              .map(i.default.getUser)
              .filter(r.isNotNullish);
            if (null == a) return null;
            return a.getAvatarURL(void 0, t, n);
          case s.ChannelTypes.GROUP_DM:
            return l.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
      }
    },
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("917351"),
        l = n.n(i),
        r = n("446674"),
        s = n("913144"),
        a = n("398604"),
        u = n("813006"),
        o = n("730647");
      let d = !1,
        c = {},
        f = {},
        v = {},
        h = e => (
          (v[e.guild_scheduled_event.id] = new u.default(
            e.guild_scheduled_event.guild
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: o.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class E extends r.default.Store {
        isFetching() {
          return d;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return c[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = v[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
      }
      E.displayName = "EventDirectoryStore";
      var m = new E(s.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          d = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          d = !1;
          let i = l.sortBy(
              [...n],
              [
                function (e) {
                  return (0, a.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            r = l.map(i, h);
          c[t] = r;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          d = !1;
        },
      });
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("446674"),
        l = n("76393");
      function r() {
        return (0, i.useStateFromStores)(
          [l.default],
          () =>
            null != l.default.getRemoteSessionId() ||
            null != l.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("884691");
      let l = i.createContext(void 0);
      var r = l;
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return c;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return h;
          },
          canGuildUseRoleIcons: function () {
            return E;
          },
        }),
        n("781738");
      var i = n("867805"),
        l = n("407063"),
        r = n("315102"),
        s = n("773336"),
        a = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        d = (0, s.isAndroid)(),
        c = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? i.default.getByName(
                  i.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: v(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())
            )
          ),
        v = (e, t) => {
          let { id: n, icon: i } = e;
          if (null == i) return;
          if (i.startsWith("data:")) return i;
          let s = r.SUPPORTS_WEBP ? "webp" : "png",
            c = "",
            f = "quality=lossless";
          return (null != t &&
            ((c =
              "size=" +
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())),
            (f = d ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(s, "?")
                .concat(c)
                .concat(f)
            : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(c);
        },
        h = e =>
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
        l = n("923510"),
        r = n("49111");
      let s = r.Permissions.VIEW_CHANNEL,
        a = i.combine(s, r.Permissions.CONNECT),
        u = i.combine(s, l.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    152475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canEveryoneRoleViewEvent: function () {
            return h;
          },
          isGuildEventInvitable: function () {
            return E;
          },
          default: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("446674"),
        l = n("242757"),
        r = n("834052"),
        s = n("42203"),
        a = n("923959"),
        u = n("305961"),
        o = n("957255"),
        d = n("991170"),
        c = n("398604"),
        f = n("745049"),
        v = n("49111");
      function h(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [s.default];
        let { entityType: i, channelId: l } =
            "entity_type" in (t = e)
              ? { entityType: t.entity_type, channelId: t.channel_id }
              : t,
          r = i === f.GuildScheduledEventEntityTypes.EXTERNAL;
        if (r) return !0;
        let a = n.getChannel(l);
        return null != a && d.canEveryoneRole(v.Permissions.VIEW_CHANNEL, a);
      }
      function E(e) {
        let [t, n, i, d] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [a.default, s.default, u.default, r.default];
        if ((0, c.isGuildEventEnded)(e)) return !1;
        let { guild_id: v, channel_id: E } = e,
          m = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL,
          C = m ? t.getDefaultChannel(e.guild_id) : n.getChannel(E),
          _ = i.getGuild(v),
          p = d.getStageInstanceByChannel(E);
        return (
          !!(0, l.canViewInviteModal)(o.default, _, C, p) &&
          null != C &&
          h(e, [n])
        );
      }
      function m(e) {
        return (0, i.useStateFromStores)(
          [a.default, s.default, u.default, r.default],
          () => E(e, [a.default, s.default, u.default, r.default]),
          [e]
        );
      }
    },
    598639: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("446674"),
        l = n("962199"),
        r = n("305961");
      function s(e, t) {
        return (0, i.useStateFromStoresObject)(
          [r.default, l.default],
          () => {
            let n = r.default.getGuild(e),
              i = null != n;
            return (
              null == n &&
                null != t &&
                (n = l.default.getCachedGuildByEventId(t)),
              { isMember: i, guild: n }
            );
          },
          [e, t]
        );
      }
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
        l = n("446674"),
        r = n("398604"),
        s = n("745049");
      function a(e, t) {
        let n = (0, l.useStateFromStoresArray)(
            [r.default],
            () => Object.values(r.default.getUsersForGuildEvent(e, null)),
            [e]
          ),
          a = (0, l.useStateFromStoresArray)(
            [r.default],
            () => Object.values(r.default.getUsersForGuildEvent(e, t)),
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
              l = new Set(),
              r = [],
              u = e => {
                !l.has(e.user_id) && (r.push(e), l.add(e.user_id));
              };
            return t.forEach(u), i.forEach(u), r;
          }, [n, a]);
        return u;
      }
    },
    669195: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SHARE_EVENT_DETAILS_LINK: function () {
            return i;
          },
        });
      let i = e => {
        let { guildId: t, guildEventId: n } = e;
        return "https://discord.com/events/".concat(t, "/").concat(n);
      };
    },
    833843: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return V;
          },
        }),
        n("222007");
      var i = n("37983"),
        l = n("884691"),
        r = n("446674"),
        s = n("77078"),
        a = n("812204"),
        u = n("685665"),
        o = n("922770"),
        d = n("267567"),
        c = n("42203"),
        f = n("476765"),
        v = n("599110"),
        h = n("686904"),
        E = n("933326"),
        m = n("398604"),
        C = n("152475"),
        _ = n("598639"),
        p = n("18284"),
        S = n("821393"),
        g = n("613767"),
        I = n("822516"),
        N = n("93550"),
        T = n("707916"),
        x = n("255050"),
        R = n("644189"),
        A = n("965353"),
        y = n("360538"),
        M = n("403901"),
        L = n("369404"),
        j = n("745049"),
        b = n("49111"),
        P = n("536430");
      function w(e) {
        let {
            guildEvent: t,
            guild: n,
            channel: l,
            onActionTaken: s,
            isHub: a,
            isMember: u,
            recurrenceId: o,
          } = e,
          c = (0, m.isGuildScheduledEventActive)(t),
          f = (0, r.useStateFromStores)(
            [m.default],
            () => m.default.isInterestedInEventRecurrence(t.id, o),
            [o, t]
          ),
          v = (0, C.default)(t),
          h = (0, r.useStateFromStores)(
            [d.default],
            () => d.default.isLurking(n.id),
            [n.id]
          ),
          E = (0, g.useIsChannelPublic)(null == l ? void 0 : l.id, t.id),
          _ = (0, L.default)({
            guild: n,
            channel: l,
            guildScheduledEvent: t,
            isActive: c,
            recurrenceId: o,
            onActionTaken: s,
          }),
          { entity_type: p } = t;
        return a
          ? (0, i.jsx)(R.default, {
              isActive: c,
              isUserLurking: h,
              rsvped: f,
              isMember: u,
              isDetailsView: !0,
              guildName: null == n ? void 0 : n.name,
              isChannelPublic: E,
              canInvite: v,
              ..._,
            })
          : (0, i.jsx)(T.default, {
              isActive: c,
              isUserLurking: h,
              rsvped: f,
              isChannelPublic: E,
              canInvite: v,
              entityType: p,
              ..._,
            });
      }
      var V = e => {
        let {
            guildScheduledEventId: t,
            parentGuildId: n,
            transitionState: d,
            initialRecurrenceId: C,
            onClose: g,
          } = e,
          { analyticsLocations: T } = (0, u.default)(
            a.default.GUILD_EVENT_MODAL
          ),
          [R, L] = l.useState(C),
          V = (0, r.useStateFromStores)(
            [m.default],
            () => m.default.getGuildScheduledEvent(t),
            [t]
          ),
          D = null == V ? void 0 : V.id,
          O = null == V ? void 0 : V.guild_id,
          { guild: U, isMember: G } = (0, _.default)(O, D),
          F = (0, o.default)(n),
          H = null == V ? void 0 : V.channel_id,
          k = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(H),
            [H]
          ),
          B = (0, f.useUID)(),
          [Z, z] = l.useState(j.EventDetailSections.EVENT_INFO),
          W = (0, S.default)(D, R),
          Y = (0, p.default)(O, D, R),
          [X, { loading: K, error: J }] = (0, h.default)(() =>
            E.default.getGuildEventUsers(null == V ? void 0 : V.id, R, O)
          );
        l.useEffect(() => {
          null == V
            ? g()
            : v.default.track(b.AnalyticEvents.OPEN_MODAL, {
                type: j.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                guild_id: V.guild_id,
              });
        }, [V, g]);
        let q = l.useRef(null),
          [Q, $] = l.useState(0);
        if (
          (l.useLayoutEffect(() => {
            var e, t;
            let n = (null == V ? void 0 : V.recurrence_rule) != null ? 16 : 0;
            $(
              (null !==
                (t =
                  null == q
                    ? void 0
                    : null === (e = q.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) && void 0 !== t
                ? t
                : 0) + n
            );
          }, [q, null == V ? void 0 : V.recurrence_rule]),
          null == V || null == U || (!G && !F))
        )
          return null;
        let ee = e => {
            e !== Z && (e === j.EventDetailSections.RSVP_LIST && X(), z(e));
          },
          et = null != R ? R : (0, I.getNextRecurrenceIdInEvent)(V);
        return (0, i.jsx)(u.AnalyticsLocationProvider, {
          value: T,
          children: (0, i.jsxs)(s.ModalRoot, {
            size: s.ModalSize.MEDIUM,
            transitionState: d,
            "aria-labelledby": B,
            className: P.root,
            children: [
              (null == V ? void 0 : V.image) != null &&
                (0, i.jsx)(x.default, {
                  source: (0, N.default)(V),
                  className: P.banner,
                }),
              (0, i.jsx)(A.default, {
                onClose: g,
                selectedTab: Z,
                onTabSelected: ee,
                userCount: Y,
                hasBanner: (null == V ? void 0 : V.image) != null,
                isHub: F,
              }),
              (0, i.jsx)("div", {
                className: P.container,
                children: (0, i.jsx)(s.ModalContent, {
                  className: P.contentContainer,
                  style: { height: Q },
                  children: (0, i.jsxs)(s.Slides, {
                    activeSlide: Z,
                    width: 600,
                    centered: !1,
                    children: [
                      (0, i.jsx)(s.Slide, {
                        id: j.EventDetailSections.EVENT_INFO,
                        children: (0, i.jsx)(y.default, {
                          guildEvent: V,
                          guild: U,
                          channel: k,
                          headerId: B,
                          onClose: g,
                          onClickInterestedCount: () =>
                            ee(j.EventDetailSections.RSVP_LIST),
                          isHub: F,
                          containerRef: q,
                          recurrenceId: et,
                          setRecurrenceId: L,
                        }),
                      }),
                      (0, i.jsx)(s.Slide, {
                        id: j.EventDetailSections.RSVP_LIST,
                        children: (0, i.jsx)(M.default, {
                          guildEvent: V,
                          recurrenceId: et,
                          eventUsers: W,
                          loading: K,
                          containerHeight: Q,
                          error: J,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(s.ModalFooter, {
                className: P.footer,
                children: (0, i.jsx)(w, {
                  guildEvent: V,
                  isHub: F,
                  isMember: G,
                  guild: U,
                  channel: k,
                  onActionTaken: g,
                  recurrenceId: et,
                }),
              }),
            ],
          }),
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
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        a = n("77078"),
        u = n("945330"),
        o = n("745049"),
        d = n("782340"),
        c = n("689560");
      function f(e) {
        let {
            onClose: t,
            selectedTab: n,
            onTabSelected: r,
            userCount: f,
            hasBanner: v,
            isHub: h = !1,
          } = e,
          E = l.useRef(null);
        l.useEffect(() => {
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
            d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
              userCount: f,
            }),
          C = [
            (0, i.jsx)(
              a.TabBar.Item,
              {
                className: c.tabBarItem,
                id: o.EventDetailSections.EVENT_INFO,
                children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
              },
              "event-details"
            ),
          ];
        return (
          !h &&
            C.push(
              (0, i.jsx)(
                a.TabBar.Item,
                {
                  className: c.tabBarItem,
                  id: o.EventDetailSections.RSVP_LIST,
                  children: m,
                },
                "is-hub"
              )
            ),
          (0, i.jsxs)("div", {
            className: c.container,
            children: [
              (0, i.jsx)(a.Clickable, {
                ref: E,
                onClick: t,
                className: c.closeButton,
                "aria-label": d.default.Messages.CLOSE,
                children: (0, i.jsx)(u.default, {
                  className: s(c.closeIcon, v && c.closeIconBanner),
                }),
              }),
              (0, i.jsx)(a.TabBar, {
                className: c.tabBar,
                "aria-label": d.default.Messages.OPTIONS,
                selectedItem: n,
                type: "top",
                onItemSelect: r,
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
            return V;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        a = n("446674"),
        u = n("77078"),
        o = n("970728"),
        d = n("685665"),
        c = n("401642"),
        f = n("26989"),
        v = n("305961"),
        h = n("580357"),
        E = n("476263"),
        m = n("155207"),
        C = n("158998"),
        _ = n("933326"),
        p = n("882550"),
        S = n("397680"),
        g = n("466148"),
        I = n("18284"),
        N = n("189443"),
        T = n("822516"),
        x = n("909151"),
        R = n("427554"),
        A = n("393745"),
        y = n("586403"),
        M = n("49111"),
        L = n("782340"),
        j = n("409295");
      function b(e) {
        var t;
        let { creator: n, guildId: l, channelId: r } = e,
          { analyticsLocations: s } = (0, d.default)(),
          o = (0, a.useStateFromStores)(
            [f.default],
            () => f.default.getMember(l, n.id),
            [n, l]
          );
        return (0, i.jsxs)("div", {
          className: j.row,
          children: [
            (0, i.jsx)(u.Avatar, {
              size: u.AvatarSizes.SIZE_20,
              src: n.getAvatarURL(l, 20),
              "aria-label":
                null !== (t = null == o ? void 0 : o.nick) && void 0 !== t
                  ? t
                  : C.default.getName(n),
              className: j.icon,
            }),
            (0, i.jsx)(u.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: L.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                usernameHook: function () {
                  var e, t;
                  return (0, i.jsx)(
                    u.Clickable,
                    {
                      onClick: () =>
                        (0, c.openUserProfileModal)({
                          guildId: l,
                          channelId: r,
                          userId: n.id,
                          roleId: null == o ? void 0 : o.colorRoleId,
                          sourceAnalyticsLocations: s,
                          analyticsLocation: {
                            section:
                              M.AnalyticsSections
                                .SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG,
                          },
                        }),
                      className: j.creator,
                      tag: "span",
                      role: "link",
                      children: (0, i.jsx)(u.NameWithRole, {
                        name:
                          null !== (e = null == o ? void 0 : o.nick) &&
                          void 0 !== e
                            ? e
                            : C.default.getName(n),
                        color:
                          null !== (t = null == o ? void 0 : o.colorString) &&
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
      function P(e) {
        let { guild: t, onClick: n, onClose: r } = e,
          a = l.useCallback(
            e => {
              null == n || n(e), null != n && (null == r || r(e));
            },
            [n, r]
          ),
          o = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(E.default, {
                guild: t,
                size: E.default.Sizes.MINI,
                active: !0,
                className: s(j.guildIcon, j.icon),
              }),
              (0, i.jsx)(h.default, {
                guild: t,
                tooltipPosition: "top",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                size: 16,
                className: j.guildBadge,
              }),
              (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: j.linkText,
                children: t.name,
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: j.row,
          children:
            null != n
              ? (0, i.jsx)(u.Clickable, {
                  onClick: a,
                  className: j.clickable,
                  role: "link",
                  children: o,
                })
              : o,
        });
      }
      function w(e) {
        let { userCount: t, onClick: n } = e;
        return (0, i.jsxs)("div", {
          className: j.row,
          children: [
            (0, i.jsx)(m.default, { width: 20, height: 20, className: j.icon }),
            (0, i.jsx)(u.Clickable, {
              onClick: n,
              className: j.interestedCount,
              children: (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children:
                  L.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: t,
                  }),
              }),
            }),
          ],
        });
      }
      function V(e) {
        let {
            guildEvent: t,
            guild: n,
            channel: r,
            headerId: s,
            onClose: d,
            onClickInterestedCount: c,
            isHub: f = !1,
            containerRef: h,
            recurrenceId: E,
            setRecurrenceId: m,
          } = e,
          C = (0, a.useStateFromStores)(
            [v.default],
            () => null != v.default.getGuild(n.id),
            [n.id]
          ),
          { startTime: M, endTime: L } = (0, g.default)(t.id, E),
          V = (0, I.default)(t.guild_id, t.id, E),
          D = l.useCallback(
            e => {
              e.stopPropagation(),
                null != t && (0, o.transitionToGuildFromEventInvite)(t);
            },
            [t]
          ),
          O = (0, S.default)(E, t.id),
          U = (0, p.default)(t);
        l.useEffect(() => {
          _.default.getGuildEventUserCounts(n.id, t.id, null != E ? [E] : []),
            _.default.getGuildEventsForCurrentUser(n.id);
        }, [n.id, t.id, E]);
        let G = (0, N.recurrenceRuleFromServer)(t.recurrence_rule),
          F =
            (null == t ? void 0 : t.scheduled_start_time) != null
              ? (0, T.getRecurrenceStatus)(
                  O,
                  M,
                  new Date(null == t ? void 0 : t.scheduled_start_time)
                )
              : null;
        return (0, i.jsxs)("div", {
          ref: h,
          children: [
            (0, i.jsxs)("div", {
              className: j.header,
              children: [
                (0, i.jsx)(A.GuildEventTimeStatus, {
                  startTime: M.toISOString(),
                  endTime: null == L ? void 0 : L.toISOString(),
                  status: null != F ? F : t.status,
                  eventType: t.entity_type,
                  guildEventId: t.id,
                  recurrenceId: E,
                }),
                (0, i.jsx)(u.Heading, {
                  id: s,
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  className: j.title,
                  children: t.name,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: j.body,
              children: [
                (0, i.jsx)(P, {
                  guild: n,
                  onClick: C ? D : void 0,
                  onClose: d,
                }),
                (0, i.jsx)(y.default, {
                  guildScheduledEvent: t,
                  channel: r,
                  onClose: d,
                }),
                null != V && (0, i.jsx)(w, { userCount: V, onClick: c }),
                !f &&
                  null != U &&
                  (0, i.jsx)(
                    b,
                    {
                      creator: U,
                      guildId: n.id,
                      channelId: null == r ? void 0 : r.id,
                    },
                    U.id
                  ),
                null != t.description &&
                  (0, i.jsx)("div", {
                    className: j.description,
                    children: (0, i.jsx)(x.default, {
                      description: t.description,
                      truncate: !1,
                      guildId: n.id,
                    }),
                  }),
              ],
            }),
            null != G && (0, i.jsx)("hr", { className: j.divider }),
            null != G &&
              (0, i.jsx)(R.default, {
                guildId: n.id,
                recurrenceRule: G,
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
            return c;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("1339"),
        a = n("914169"),
        u = n("931874"),
        o = n("745049"),
        d = n("409295");
      function c(e) {
        let { guildScheduledEvent: t, channel: n, onClose: c } = e,
          f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL,
          v = l.useCallback(
            e => (0, a.createEventLocationClickHandler)(t, c)(e),
            [t, c]
          ),
          h = (0, u.getLocationDataForEvent)(t, n);
        if (null == h) return null;
        let { IconComponent: E, locationName: m } = h,
          C = (0, i.jsxs)(i.Fragment, {
            children: [
              null != E &&
                (0, i.jsx)(E, {
                  width: 20,
                  height: 20,
                  className: d.channelIcon,
                }),
              (0, i.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, s.guildEventDetailsParser)(m, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: d.row,
          children:
            null != v
              ? (0, i.jsx)(r.Clickable, {
                  className: f ? d.externalLocation : d.channelLocation,
                  onClick: v,
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
      var l = n("414456"),
        r = n.n(l),
        s = n("446674"),
        a = n("77078"),
        u = n("272030"),
        o = n("145079"),
        d = n("119184"),
        c = n("506885"),
        f = n("340906"),
        v = n("271938"),
        h = n("824563"),
        E = n("101125"),
        m = n("697218"),
        C = n("155207"),
        _ = n("18284"),
        p = n("745049"),
        S = n("782340"),
        g = n("519951");
      function I(e) {
        let { children: t } = e;
        return (0, i.jsxs)("div", {
          className: g.emptyContainer,
          children: [
            (0, i.jsx)(d.default, {
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
      function N() {
        return (0, i.jsx)(I, {
          children: (0, i.jsx)(a.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: g.title,
            children:
              S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE,
          }),
        });
      }
      function T() {
        return (0, i.jsx)(I, {
          children: (0, i.jsx)(a.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: g.errorTitle,
            children:
              S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR,
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
                className: r(g.listRowCircle, g.listAvatar),
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
                  S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format(
                    { userRemainCount: t }
                  ),
              }),
            ],
          }),
        });
      }
      function R(e) {
        var t;
        let { eventUser: n, onContextMenu: l } = e,
          u = (0, s.useStateFromStores)([m.default], () =>
            m.default.getUser(n.user_id)
          ),
          d = null === (t = n.member) || void 0 === t ? void 0 : t.guildId,
          C = (0, s.useStateFromStores)(
            [E.default, h.default, v.default],
            () =>
              n.user_id === v.default.getId()
                ? E.default.getStatus()
                : h.default.getStatus(n.user_id, d),
            [n.user_id, d]
          );
        return null == u
          ? null
          : (0, i.jsx)(a.Popout, {
              preload: () =>
                (0, c.default)(u.id, u.getAvatarURL(d, 80), { guildId: d }),
              renderPopout: e =>
                (0, i.jsx)(f.default, {
                  ...e,
                  location: "EventDetailRsvpTab",
                  userId: n.user_id,
                  guildId: d,
                }),
              position: "left",
              spacing: 16,
              children: (e, t) => {
                var s, d;
                let { isShown: c } = t;
                return (0, i.jsxs)(a.Clickable, {
                  className: r(g.listRow, g.interactiveRow, {
                    [g.selected]: c,
                  }),
                  onContextMenu: e => l(e, u),
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
                        null === (d = n.member) || void 0 === d
                          ? void 0
                          : d.nick,
                    }),
                  ],
                });
              },
            });
      }
      function A(e) {
        let { eventUsers: t, usersNotShownCount: n = 0, onContextMenu: l } = e;
        return (0, i.jsxs)(a.ScrollerThin, {
          className: g.listScroller,
          children: [
            t.map(e =>
              (0, i.jsx)(R, { eventUser: e, onContextMenu: l }, e.user_id)
            ),
            n > 0 && (0, i.jsx)(x, { count: n }),
          ],
        });
      }
      function y(e) {
        let { children: t, style: n } = e;
        return (0, i.jsx)("div", {
          className: g.container,
          style: null != n ? n : {},
          children: t,
        });
      }
      function M(e) {
        let { children: t, height: n } = e;
        return (0, i.jsx)(y, { style: { height: n }, children: t });
      }
      function L(e) {
        let {
            guildEvent: t,
            recurrenceId: l,
            eventUsers: r,
            loading: s,
            error: o,
            containerHeight: d,
          } = e,
          c = (0, _.default)(t.guild_id, t.id, l);
        if (s && 0 === r.length)
          return (0, i.jsx)(M, {
            height: d,
            children: (0, i.jsx)(a.Spinner, {
              type: a.Spinner.Type.SPINNING_CIRCLE,
              className: g.spinner,
            }),
          });
        if (null != o && 0 === r.length)
          return (0, i.jsx)(M, { height: d, children: (0, i.jsx)(T, {}) });
        let f = 0;
        return (
          r.length >= p.MAX_RSVP_USER_DISPLAY_COUNT &&
            c > p.MAX_RSVP_USER_DISPLAY_COUNT &&
            (f = Math.max(c - r.length, 0)),
          0 === r.length
            ? (0, i.jsx)(M, { height: d, children: (0, i.jsx)(N, {}) })
            : (0, i.jsx)(y, {
                children: (0, i.jsx)(A, {
                  eventUsers: r,
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
    369404: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        s = n("272030"),
        a = n("851387"),
        u = n("233322"),
        o = n("157186"),
        d = n("817963"),
        c = n("393414"),
        f = n("716214"),
        v = n("923959"),
        h = n("305961"),
        E = n("957255"),
        m = n("599110"),
        C = n("306160"),
        _ = n("322224"),
        p = n("152475"),
        S = n("397680"),
        g = n("613767"),
        I = n("822516"),
        N = n("669195"),
        T = n("936965"),
        x = n("745049"),
        R = n("49111"),
        A = n("782340");
      function y(e) {
        let {
            guild: t,
            channel: y,
            guildScheduledEvent: M,
            isActive: L,
            recurrenceId: j,
            onActionTaken: b,
          } = e,
          { scheduled_start_time: P, id: w, entity_type: V, guild_id: D } = M,
          { canManageGuildEvent: O } = (0, d.useManageResourcePermissions)(
            null != y ? y : t
          ),
          U = O(M),
          G = (0, p.default)(M),
          F = (0, g.useIsChannelPublic)(null == y ? void 0 : y.id, M.id),
          { withinStartWindow: H } = (0, I.getEventTimeData)(P),
          k = (0, l.useStateFromStores)(
            [E.default],
            () =>
              (null == y ? !void 0 : !y.isGuildVocal()) ||
              E.default.can(R.Permissions.CONNECT, y),
            [y]
          ),
          B = (0, o.useShowMemberVerificationGate)(D),
          Z = (0, S.default)(j, w);
        function z(e) {
          e.stopPropagation(), (0, T.default)(w, j, D);
        }
        async function W(e) {
          e.stopPropagation(),
            await a.default.joinGuild(D),
            h.default.addConditionalChangeListener(() => {
              let t = h.default.getGuild(D);
              return null == t || (!L && z(e), Y(e), !1);
            });
        }
        function Y(e) {
          e.stopPropagation();
          let t = v.default.getDefaultChannel(D);
          (0, r.closeAllModals)(),
            (0, c.transitionToGuild)(D, null == t ? void 0 : t.id);
        }
        return {
          onDeleteClick: U
            ? function (e) {
                e.stopPropagation(),
                  U &&
                    !L &&
                    (0, r.openModal)(e =>
                      (0, i.jsx)(r.ConfirmModal, {
                        ...e,
                        header:
                          A.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                        confirmText: A.default.Messages.DELETE,
                        cancelText: A.default.Messages.CANCEL,
                        onConfirm: () => _.default.deleteGuildEvent(w, D),
                        children: (0, i.jsx)(r.Text, {
                          variant: "text-md/normal",
                          children:
                            A.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                        }),
                      })
                    );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != t &&
                (0, s.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("110374")
                    .then(n.bind(n, "110374"));
                  return n =>
                    (0, i.jsx)(e, {
                      guildEventId: w,
                      recurrenceId: j,
                      channel: y,
                      guild: t,
                      ...n,
                    });
                });
          },
          onJoinClick:
            k || B
              ? function (e) {
                  if ((e.stopPropagation(), B)) {
                    null == b || b(), (0, u.openMemberVerificationModal)(D);
                    return;
                  }
                  (null == y ? void 0 : y.isGuildStageVoice())
                    ? ((0, f.connectAndOpen)(y), null == b || b())
                    : (null == y ? void 0 : y.isGuildVoice()) &&
                      (_.default.joinVoiceEvent(y.guild_id, y.id),
                      null == b || b());
                }
              : void 0,
          onRsvpClick: z,
          onStartClick:
            U && H && !(null == Z ? void 0 : Z.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await n
                        .el("298843")
                        .then(n.bind(n, "298843"));
                      return t =>
                        (0, i.jsx)(e, { ...t, event: M, onSuccess: b });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
              if (!G || !F) {
                let e = (0, N.SHARE_EVENT_DETAILS_LINK)({
                  guildId: D,
                  guildEventId: w,
                });
                (0, C.copy)(e),
                  m.default.track(
                    R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED,
                    { guild_id: D, guild_scheduled_event_id: w }
                  );
                return;
              }
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, i.jsx)(e, {
                    ...n,
                    guild: t,
                    channel: y,
                    guildScheduledEvent: M,
                    source: R.InstantInviteSources.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            U && V === x.GuildScheduledEventEntityTypes.EXTERNAL && L
              ? function (e) {
                  if ((e.stopPropagation(), !U)) return;
                  let t = () => {
                    _.default.endEvent(w, D), (0, r.closeAllModals)();
                  };
                  (0, r.openModal)(e =>
                    (0, i.jsx)(r.ConfirmModal, {
                      ...e,
                      header: A.default.Messages.END_EVENT,
                      confirmText:
                        A.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: A.default.Messages.CANCEL,
                      onConfirm: t,
                      children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children:
                          A.default.Messages
                            .GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    })
                  );
                }
              : void 0,
          onJoinGuildClick: W,
          onGoToGuildClick: Y,
        };
      }
    },
    922770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("446674"),
        l = n("305961"),
        r = n("49111");
      function s(e) {
        return (0, i.useStateFromStores)(
          [l.default],
          () => {
            var t;
            if (null == e) return !1;
            let n = l.default.getGuild(e);
            return (
              null !==
                (t = null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) &&
              void 0 !== t &&
              t
            );
          },
          [e]
        );
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return l;
          },
        });
      var i = n("49111");
      function l(e, t, n, l) {
        let r = null != n ? n : t,
          s = null != r && e.can(i.Permissions.CREATE_INSTANT_INVITE, r);
        return (
          s ||
          (null != t && null != t.vanityURLCode) ||
          (null == l ? void 0 : l.invite_code) != null
        );
      }
    },
    650484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
          PaymentPortalBody: function () {
            return E;
          },
          PaymentPortalFooter: function () {
            return m;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        a = n("627445"),
        u = n.n(a),
        o = n("817736"),
        d = n.n(o),
        c = n("77078"),
        f = n("642906"),
        v = n("304006");
      function h(e) {
        var t, n, r, a, o, d;
        let {
            header: h,
            isLargeModal: E,
            stepProps: m,
          } = (function (e) {
            let { header: t, isLargeModal: n, ...i } = e;
            return { header: t, isLargeModal: n, stepProps: i };
          })(e),
          {
            step: C,
            stepConfigs: _,
            setBodyNode: p,
            setFooterNode: S,
            setModalOverlayNode: g,
            setReadySlideId: I,
          } = (0, f.usePaymentContext)(),
          N = _.find(e => e.key === C);
        l.useEffect(() => {
          g(null);
        }, [C, g]),
          u(null != N, "Unknown step for current payment flow.");
        let T =
            null !==
              (o =
                null == N
                  ? void 0
                  : null === (t = N.options) || void 0 === t
                    ? void 0
                    : t.hideSlider) &&
            void 0 !== o &&
            o,
          x =
            null == N
              ? void 0
              : null === (n = N.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          R =
            void 0 !== E && E
              ? v.sliderBodyLarge
              : null == N
                ? void 0
                : null === (r = N.options) || void 0 === r
                  ? void 0
                  : r.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null ===
              (d =
                null == N
                  ? void 0
                  : null === (a = N.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === d ||
            d
              ? h
              : null,
            N.renderStep(m),
            null == C || T
              ? null
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(c.ModalContent, {
                      className: s(v.body, x),
                      children: (0, i.jsx)(c.Slides, {
                        activeSlide: C,
                        centered: !1,
                        onSlideReady: e => I(e),
                        children: _.filter(e => null != e.key).map(e =>
                          (0, i.jsx)(
                            c.Slide,
                            {
                              id: e.key,
                              children: (0, i.jsx)("form", {
                                className: s(v.sliderBody, R),
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
                    (0, i.jsx)("div", { ref: e => g(e) }),
                  ],
                }),
          ],
        });
      }
      function E(e) {
        let { children: t } = e,
          { bodyNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
      }
      function m(e) {
        let { children: t } = e,
          { footerNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
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
      var l = n("748820"),
        r = n("77078"),
        s = n("112679"),
        a = n("55689"),
        u = n("676379"),
        o = n("697218"),
        d = n("599110"),
        c = n("659500"),
        f = n("719923"),
        v = n("49111"),
        h = n("646718");
      function E(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: E,
            onClose: m,
            onComplete: C,
            onSubscriptionConfirmation: _,
            analyticsLocations: p,
            analyticsObject: S,
            analyticsLocation: g,
            analyticsSourceLocation: I,
            isGift: N = !1,
            giftMessage: T,
            subscriptionTier: x,
            trialId: R,
            postSuccessGuild: A,
            openInvoiceId: y,
            applicationId: M,
            referralTrialOfferId: L,
            giftRecipient: j,
            returnRef: b,
            subscription: P,
          } = null != e ? e : {},
          w = !1,
          V = (0, l.v4)(),
          D = o.default.getCurrentUser(),
          O = (0, f.isPremiumExactly)(D, h.PremiumTypes.TIER_2);
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: l, ...r } = n;
              return (0, i.jsx)(e, {
                ...r,
                loadId: V,
                subscriptionTier: x,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(x),
                isGift: N,
                giftMessage: T,
                giftRecipient: j,
                initialPlanId: t,
                followupSKUInfo: E,
                onClose: (e, t) => {
                  l(),
                    null == m || m(e),
                    e &&
                      (null == _ || _(),
                      !N &&
                        null != t &&
                        t === h.PremiumSubscriptionSKUs.TIER_2 &&
                        !O &&
                        c.ComponentDispatch.dispatch(
                          v.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (w = !0),
                    null == C || C(),
                    !N && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: _,
                analyticsLocations: p,
                analyticsObject: S,
                analyticsLocation: g,
                analyticsSourceLocation: I,
                trialId: R,
                postSuccessGuild: A,
                planGroup: h.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: y,
                applicationId: M,
                referralTrialOfferId: L,
                returnRef: b,
                subscription: P,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !w &&
                d.default.track(v.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: V,
                  payment_type:
                    v.PurchaseTypeToAnalyticsPaymentType[
                      v.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != g ? g : S,
                  source: I,
                  subscription_type: v.SubscriptionTypes.PREMIUM,
                  is_gift: N,
                  eligible_for_trial: null != R,
                  application_id: M,
                  location_stack: p,
                }),
                (0, s.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == m || m(w),
                w && (null == _ || _());
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
            return h;
          },
          getManageResourcePermissions: function () {
            return E;
          },
        }),
        n("222007");
      var i = n("884691"),
        l = n("316693"),
        r = n("446674"),
        s = n("813006");
      n("923959");
      var a = n("957255"),
        u = n("697218");
      n("991170");
      var o = n("270161"),
        d = n("843455");
      let c = {
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
            var l;
            return (
              i &&
              null != t &&
              (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
            );
          }
          return !1;
        },
        v = e => {
          if (null == e)
            return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
          let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              l.combine(t, d.Permissions.CREATE_EVENTS),
              l.combine(t, d.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        h = e => {
          let [t, n] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : v(e),
            [l, o, h, E] = (0, r.useStateFromStoresArray)([a.default], () => [
              a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            m = (0, r.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            C = i.useCallback(e => f(e, m, o, l), [l, o, m]),
            _ = i.useCallback(e => f(e, m, E, h), [E, h, m]);
          return null == e
            ? c
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: h,
                canManageAllExpressions: o,
                canManageAllEvents: E,
                canManageGuildExpression: C,
                canManageGuildEvent: _,
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
            [i, l] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : v(e),
            r = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            h = t.can(i, e),
            E = t.can(l, e),
            m = n.getCurrentUser();
          return null == e
            ? c
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: h,
                canManageAllExpressions: o,
                canManageAllEvents: E,
                canManageGuildExpression: e => f(e, m, o, r),
                canManageGuildEvent: e => f(e, m, E, h),
              };
        };
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return l;
          },
        });
      var i = n("913144");
      let l = e => {
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
        l = n("79112"),
        r = n("685665"),
        s = n("929423");
      n("424562");
      var a = n("49111"),
        u = n("397336");
      function o(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: o,
            analyticsLocations: d,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, r.default)(),
          v = (0, i.useCallback)(() => {
            null != t && (0, s.initGuildIdentitySettings)(t, null != d ? d : f),
              l.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? u.ProfileCustomizationSubsection.GUILD
                  : u.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: o,
                  analyticsLocations: d,
                  openWithoutBackstack: c,
                }
              );
          }, [t, n, o, d, c, f]);
        return v;
      }
    },
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("414456"),
        r = n.n(l),
        s = n("782340"),
        a = n("662190"),
        u = n("284434"),
        o = n("315956");
      function d(e) {
        let { className: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: r(a.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: r(a.sparkleIcon, a.sparkleBottom),
            }),
            n,
            (0, i.jsx)("img", {
              alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: u,
              className: r(a.sparkleIcon, a.sparkleTop),
            }),
          ],
        });
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
            return _;
          },
          computeCanStartPublicThread: function () {
            return p;
          },
          useCanStartPrivateThread: function () {
            return S;
          },
          useCanStartThread: function () {
            return g;
          },
          useCanViewThreadForMessage: function () {
            return N;
          },
          useHasActiveThreads: function () {
            return T;
          },
          useCanManageThread: function () {
            return x;
          },
          useCanUnarchiveThread: function () {
            return y;
          },
          canUnarchiveThread: function () {
            return M;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return L;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return j;
          },
          computeIsReadOnlyThread: function () {
            return b;
          },
          useIsThreadModerator: function () {
            return w;
          },
          useCanJoinThreadVoice: function () {
            return V;
          },
          useIsNonModInLockedThread: function () {
            return D;
          },
        });
      var i = n("917351"),
        l = n.n(i),
        r = n("316693"),
        s = n("446674"),
        a = n("296892"),
        u = n("889014"),
        o = n("913491"),
        d = n("233069"),
        c = n("271938"),
        f = n("42203"),
        v = n("957255"),
        h = n("299039"),
        E = n("401690"),
        m = n("49111");
      let C = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function _(e, t) {
        let n = (0, s.useStateFromStores)(
          [v.default],
          () => {
            let t = e.isForumLikeChannel()
              ? m.Permissions.SEND_MESSAGES
              : r.combine(
                  m.Permissions.CREATE_PUBLIC_THREADS,
                  m.Permissions.READ_MESSAGE_HISTORY
                );
            return v.default.can(t, e);
          },
          [e]
        );
        return I(n, e, t);
      }
      function p(e, t) {
        let n = e.isForumLikeChannel()
            ? m.Permissions.SEND_MESSAGES
            : r.combine(
                m.Permissions.CREATE_PUBLIC_THREADS,
                m.Permissions.READ_MESSAGE_HISTORY
              ),
          i = v.default.can(n, e);
        return I(i, e, t);
      }
      function S(e) {
        let t = (0, s.useStateFromStores)(
          [v.default],
          () =>
            v.default.can(r.combine(m.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === m.ChannelTypes.GUILD_TEXT && I(t, e);
      }
      function g(e) {
        let t = _(e),
          n = S(e);
        return t || n;
      }
      function I(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !d.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(m.MessageFlags.HAS_THREAD) || (0, o.default)(n)))
          ) && !0
        );
      }
      function N(e) {
        let t = (0, s.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(h.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, s.useStateFromStores)(
            [v.default],
            () => v.default.can(m.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(m.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function T(e) {
        return (0, s.useStateFromStoresObject)([E.default, v.default], () => {
          let t = E.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = E.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = E.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            r = l(n).some(e =>
              v.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            s = l(t).some(
              e =>
                !(e.channel.id in n) &&
                v.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = l(i).some(e => v.default.can(m.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: r || s || a,
            hasMoreActiveThreads: a || s,
          };
        });
      }
      function x(e) {
        let t = (0, s.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, s.useStateFromStores)(
            [v.default],
            () => null != t && v.default.can(m.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, s.useStateFromStores)([c.default], () => c.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function R(e, t) {
        return null != e && t.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function A(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function y(e) {
        let t = (0, s.useStateFromStores)([v.default], () => R(e, v.default)),
          n = w(e);
        return A(e, t, n);
      }
      function M(e) {
        let t = R(e, v.default),
          n = (function (e) {
            return P(e, v.default);
          })(e);
        return A(e, t, n);
      }
      function L(e) {
        var t;
        let n = (0, s.useStateFromStores)(
          [v.default],
          () =>
            null != e &&
            v.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function j(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              v.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = v.default.can(m.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function P(e, t) {
        return null != e && t.can(m.Permissions.MANAGE_THREADS, e);
      }
      function w(e) {
        return (0, s.useStateFromStores)([v.default], () => P(e, v.default));
      }
      function V(e) {
        let t = (0, u.default)(),
          n = (0, s.useStateFromStores)([v.default], () =>
            v.default.can(m.Permissions.CONNECT, e)
          ),
          i = L(e),
          l = C.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && l && n && i;
      }
      function D(e) {
        let t = w(e);
        return e.isLockedThread() && !t;
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        r = n("414456"),
        s = n.n(r),
        a = n("77078"),
        u = n("760607"),
        o = n("684133");
      function d(e) {
        let {
            children: t,
            size: n = 16,
            className: r,
            flowerStarClassName: d,
            ...c
          } = e,
          f = l.Children.only(t),
          v = (0, a.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
          className: s(o.flowerStarContainer, r),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(u.default, { ...c, className: s(d, o.flowerStar) }),
            (0, i.jsx)("div", {
              className: s(o.childContainer, {
                [o.redesignIconChildContainer]: v,
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
      var l = n("414456"),
        r = n.n(l),
        s = n("79798"),
        a = n("988268"),
        u = n("293005"),
        o = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: l,
            nameColor: a,
            className: o,
            botType: d,
            usernameClass: c,
            discriminatorClass: f,
            botClass: v,
            botVerified: h = !1,
            style: E,
            useRemSizes: m = !1,
            usernameIcon: C,
          } = e;
          return (0, i.jsxs)("div", {
            className: r(o, u.nameTag),
            style: E,
            children: [
              (0, i.jsxs)("span", {
                className: r(u.username, c),
                style: null != a ? { color: a } : void 0,
                children: [C, t],
              }),
              null != n
                ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != d
                ? (0, i.jsx)(s.default, {
                    type: d,
                    invertColor: l,
                    className: r(v, u.bot),
                    verified: h,
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
            return l;
          },
          Shine: function () {
            return m;
          },
          default: function () {
            return _;
          },
        });
      var i,
        l,
        r = n("37983"),
        s = n("884691"),
        a = n("414456"),
        u = n.n(a),
        o = n("458960"),
        d = n("77078"),
        c = n("252744"),
        f = n("145131"),
        v = n("61435");
      ((i = l || (l = {})).DEFAULT = "default"), (i.SMALL = "small");
      let h = { default: v.shineDefault, small: v.shineSmall },
        E = { default: v.shineInnerDefault, small: v.shineInnerSmall };
      class m extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, r.jsx)(o.default.div, {
            ...i,
            className: u(v.shineContainer, e, { [v.shinePaused]: n }),
            children: (0, r.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: h[t],
              children: (0, r.jsx)("div", { className: E[t] }),
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
            submitting: l,
            pauseAnimation: a,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: h,
            onlyShineOnHover: E,
            ...C
          } = e,
          _ = s.createRef(),
          p = (0, c.default)(_),
          S = !i && !l && !0 !== a && (!E || p);
        return (0, r.jsxs)(d.Button, {
          buttonRef: _,
          ...C,
          className: u(v.shinyButton, n),
          disabled: i,
          submitting: l,
          children: [
            t,
            S
              ? (0, r.jsx)(m, {
                  shinePaused: f,
                  className: u(
                    v.buttonShine,
                    E ? v.onlyShineOnHover : void 0,
                    h
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      C.ShineSizes = l;
      var _ = C;
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      function l(e) {
        let { size: t, horizontal: n = !1 } = e,
          l = n ? t : 1,
          r = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: l,
            minWidth: l,
            height: r,
            minHeight: r,
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
        l = n.n(i),
        r = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        a = () => (0, r.useLazyValue)(() => s()),
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
      var l = n("414456"),
        r = n.n(l),
        s = n("384737"),
        a = n("448052"),
        u = n("748802"),
        o = n("260792"),
        d = n("77078"),
        c = n("75196"),
        f = n("366842");
      let v = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        h = e => {
          let {
              direction: t = v.DOWN,
              width: n = 24,
              height: l = 24,
              color: h = "currentColor",
              transition: E = f.transition,
              className: m,
              foreground: C,
              expanded: _,
              ...p
            } = e,
            { enabled: S } = (0, d.useRedesignIconContext)(),
            g = t;
          if ((!0 === _ ? (g = v.DOWN) : !1 === _ && (g = v.RIGHT), S)) {
            let e = {
              [v.UP]: o.ChevronSmallUpIcon,
              [v.DOWN]: s.ChevronSmallDownIcon,
              [v.LEFT]: a.ChevronSmallLeftIcon,
              [v.RIGHT]: u.ChevronSmallRightIcon,
            }[g];
            return (0, i.jsx)(e, {
              ...p,
              className: m,
              width: n,
              height: l,
              color: h,
              colorClass: C,
            });
          }
          return (0, i.jsx)("svg", {
            className: r(m, E, g),
            width: n,
            height: l,
            viewBox: "0 0 24 24",
            ...(0, c.default)(p),
            children: (0, i.jsx)("path", {
              className: C,
              fill: "none",
              stroke: h,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      h.Directions = v;
      var E = h;
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
      var l = n("469563"),
        r = n("733154"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: r,
                fill: l,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          r.ChatIcon,
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
      var l = n("469563"),
        r = n("505088"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
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
                  fill: l,
                  className: r,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          r.CircleXIcon,
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
      var l = n("669491"),
        r = n("469563"),
        s = n("163725"),
        a = n("75196"),
        u = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foregroundColor: s = l.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: o,
              ...d
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(d),
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
                  fill: r,
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
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("75196"),
        r = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            foreground: s,
            ...a
          } = e;
          return (0, i.jsx)("svg", {
            ...(0, l.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, i.jsx)("path", {
              className: s,
              fill: r,
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
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("75196");
      function r(e) {
        let { width: t = 104, height: n = 80, ...r } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(r),
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
      var l = n("469563"),
        r = n("304983"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: l,
                className: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          r.MoreHorizontalIcon,
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
      var l = n("469563"),
        r = n("811513"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  className: r,
                  fill: l,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: r,
                  fill: l,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: r,
                  fill: l,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, i.jsx)("path", {
                  className: r,
                  fill: l,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          r.GroupIcon,
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
      var l = n("469563"),
        r = n("424823"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: l,
                className: r,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          r.PlusSmallIcon,
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
      var l = n("469563"),
        r = n("390300"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: r,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          r.VoiceNormalIcon,
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
      var l = n("469563"),
        r = n("287083"),
        s = n("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: l = "currentColor",
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: l,
              }),
            });
          },
          r.StageIcon,
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
        l = n("773336"),
        r = n("50885");
      let s = (() => {
        if (l.isPlatformEmbedded) return null != r.default.copy;
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
          !!s && (l.isPlatformEmbedded ? (r.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    686904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var i = n("884691"),
        l = n("448993");
      function r(e, t) {
        let [n, r] = i.useState(!1),
          [s, a] = i.useState(null),
          u = async () => {
            r(!0), a(null);
            try {
              let t = await e();
              return r(!1), a(null), t;
            } catch (n) {
              let e = new l.APIError(n);
              return null == t || t(e), a(e), r(!1), null;
            }
          };
        return [u, { loading: n, error: s }];
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
      var i = n("884691"),
        l = n("446674"),
        r = n("244201"),
        s = n("471671");
      function a() {
        let { windowId: e } = i.useContext(r.default);
        return (0, l.useStateFromStores)(
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: a = "",
          color: u = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...d
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(d),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.default)(u),
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
      var l = n("669491"),
        r = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(u),
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
          VisibilityObserver: function () {
            return s;
          },
        }),
        n("222007");
      var i = n("817736"),
        l = n("118810");
      let r = { root: null, rootMargin: "0px", threshold: 0.5 };
      class s {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, i.findDOMNode)(e);
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
        constructor(e = r) {
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
            return o;
          },
        }),
        n("222007"),
        n("70102");
      var i = n("884691"),
        l = n("748820"),
        r = n("157590");
      let s = (0, l.v4)(),
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
              : a.set(t, (0, l.v4)())
            : (this.elementId = s);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(
              o,
              new r.VisibilityObserver({ root: t, rootMargin: n, threshold: i })
            );
        }
      }
      o.defaultProps = {
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
            return l.VisibilitySensor;
          },
        }),
        n("6268");
      var i = n("157590"),
        l = n("235855");
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
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          n.selectNodeContents(l),
          null == i || i.removeAllRanges(),
          null == i || i.addRange(n),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let r = document.execCommand("copy");
        return t.removeChild(l), r;
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
//# sourceMappingURL=8641cd00c0539879738f.js.map
