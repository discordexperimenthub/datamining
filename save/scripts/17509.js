(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17509"],
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
            return s;
          },
          clearCardInfo: function () {
            return l;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return o;
          },
        });
      var i = n("913144");
      function r(e) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function s(e, t) {
        i.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function l() {
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
      function o() {
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
        s = n.n(r),
        l = n("446674"),
        a = n("77078"),
        o = n("102985"),
        u = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        h = n("168540");
      function E(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let v = e => {
        let {
          primary: t,
          secondary: n,
          botType: r,
          botVerified: l,
          discriminatorClass: o,
          className: c,
          usernameClass: d,
          color: E,
          botClass: v,
          showStreamerModeTooltip: m,
        } = e;
        return (0, i.jsxs)("div", {
          className: s(h.info, c),
          children: [
            (0, i.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: m,
              "aria-label": !!m && void 0,
              children: e =>
                (0, i.jsx)("span", {
                  ...e,
                  className: s(h.username, d),
                  style: null != E ? { color: E } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, i.jsx)("span", {
                  className: s(h.infoSpacing, o),
                  children: n,
                })
              : void 0,
            null != r &&
              (0, i.jsx)(u.default, {
                type: r,
                className: s(h.infoSpacing, v),
                verified: l,
              }),
          ],
        });
      };
      var m = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: r,
            forceUsername: s,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...h
          } = e,
          m = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.hidePersonalInformation
          ),
          p = m || t || n.isNonUserBot(),
          C = n.toString(),
          _ = d.default.getName(n),
          S = s ? C : null != r ? r : _,
          N = n.isPomelo() || f;
        if (N || S !== C) {
          let e =
              S === C && N && s
                ? d.default.getUserTag(n, { forcePomelo: f })
                : S,
            t = a && e !== "@".concat(C) ? d.default.getUserTag(n) : void 0;
          return (0, i.jsx)(v, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: E(n),
            showStreamerModeTooltip: m && e !== _,
            ...h,
          });
        }
        return (0, i.jsx)(c.default, {
          name: S,
          botType: E(n),
          botVerified: n.isVerifiedBot(),
          discriminator: p || S !== C ? null : null != u ? u : n.discriminator,
          ...h,
        });
      };
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
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("28289");
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
    918771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007"),
        n("834022");
      var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("446674"),
        o = n("819855"),
        u = n("77078"),
        c = n("272030"),
        d = n("851387"),
        f = n("841098"),
        h = n("376556"),
        E = n("716241"),
        v = n("766274"),
        m = n("271938"),
        p = n("26989"),
        C = n("305961"),
        _ = n("476765"),
        S = n("486952"),
        N = n("811305"),
        T = n("599110"),
        A = n("701909"),
        I = n("339023"),
        g = n("602658"),
        R = n("49111"),
        L = n("782340"),
        P = n("431480"),
        x = n("856614"),
        b = function (e) {
          let { guildId: t, transitionState: s, onClose: b } = e,
            y = (0, a.useStateFromStores)([C.default], () =>
              C.default.getRoles(t)
            ),
            M = (0, a.useStateFromStores)([m.default], () => m.default.getId()),
            O = (0, a.useStateFromStores)([p.default], () =>
              p.default.getMember(t, M)
            ),
            [D, V] = r.useState([]),
            j = (0, f.default)(),
            w = (0, _.useUID)();
          if (
            (r.useEffect(() => {
              0 !== D.length &&
                T.default.track(R.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
                  role_ids: D.map(e => {
                    let { role_id: t } = e;
                    return t;
                  }),
                  ...(0, E.collectGuildAnalyticsMetadata)(t),
                });
            }, [t, D]),
            r.useEffect(() => {
              d.default
                .getGuildRoleConnectionsConfigurations(t)
                .then(e => V(e));
            }, [t]),
            null == O)
          )
            return null;
          let U = Object.values(y).filter(e => {
            var t;
            return (
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
            );
          });
          return (0, i.jsxs)(u.ModalRoot, {
            transitionState: s,
            "aria-labelledby": w,
            className: P.modal,
            children: [
              (0, i.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(I.default, { className: P.headerIcon, size: 24 }),
                  (0, i.jsx)(u.Heading, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                  }),
                  (0, i.jsx)(u.ModalCloseButton, {
                    className: P.modalCloseButton,
                    onClick: b,
                  }),
                ],
              }),
              (0, i.jsxs)(u.ModalContent, {
                className: P.container,
                children: [
                  (0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    children:
                      L.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format(
                        {
                          helpdeskArticleUrl: A.default.getArticleURL(
                            R.HelpdeskArticles.CONNECTION_DETAILS
                          ),
                        }
                      ),
                  }),
                  (0, i.jsx)("div", {
                    className: P.verifiedRoles,
                    children: U.map(e => {
                      let s = O.roles.includes(e.id),
                        a = (function (e) {
                          let n = D.find(t => {
                            let { role_id: n } = t;
                            return n === e;
                          });
                          if (null == n) return [];
                          let r = {};
                          for (let e of n.rules.flat()) {
                            let a;
                            if (null != e.application_id) {
                              var s;
                              let r =
                                null === (s = n.applications) || void 0 === s
                                  ? void 0
                                  : s[e.application_id];
                              a =
                                (null == r ? void 0 : r.bot) != null
                                  ? (0, i.jsx)("img", {
                                      src: new (0, v.default)(
                                        r.bot
                                      ).getAvatarURL(t, 24),
                                      alt: "",
                                      className: l(P.botAvatar, x.avatar),
                                    })
                                  : null;
                            } else {
                              let t = h.default.get(e.connection_type);
                              a = (0, i.jsx)("img", {
                                src: (0, o.isThemeLight)(j)
                                  ? t.icon.lightSVG
                                  : t.icon.darkSVG,
                                alt: "",
                                className: x.avatar,
                              });
                            }
                            null != a &&
                              (r[
                                ""
                                  .concat(e.connection_type, ":")
                                  .concat(e.application_id)
                              ] = a);
                          }
                          return Object.values(r);
                        })(e.id);
                      return (0, i.jsxs)(
                        u.Clickable,
                        {
                          className: l(
                            P.verifiedRole,
                            s ? P.verifiedRoleHasRole : null
                          ),
                          onClick: s
                            ? void 0
                            : () => {
                                var r, s;
                                return (
                                  (r = e),
                                  (s = t),
                                  void (0, u.openModalLazy)(async () => {
                                    let { default: e } = await n
                                      .el("572579")
                                      .then(n.bind(n, "572579"));
                                    return t =>
                                      (0, i.jsx)(e, {
                                        role: r,
                                        guildId: s,
                                        ...t,
                                      });
                                  })
                                );
                              },
                          onContextMenu: s
                            ? r => {
                                var s, l, a;
                                return (
                                  (s = t),
                                  (l = e.id),
                                  (a = r),
                                  void (0, c.openContextMenuLazy)(
                                    a,
                                    async () => {
                                      let { default: e } = await n
                                        .el("232006")
                                        .then(n.bind(n, "232006"));
                                      return t =>
                                        (0, i.jsx)(e, {
                                          ...t,
                                          roleId: l,
                                          onLeaveRole: () =>
                                            d.default.unassignGuildRoleConnection(
                                              s,
                                              l
                                            ),
                                        });
                                    }
                                  )
                                );
                              }
                            : void 0,
                          children: [
                            s
                              ? (0, i.jsx)("div", {
                                  className: P.roleCheckmark,
                                  children: (0, i.jsx)(S.default, {}),
                                })
                              : null,
                            (0, i.jsx)(g.default, {
                              guildId: t,
                              role: e,
                              size: 24,
                            }),
                            (0, i.jsxs)("div", {
                              className: P.verifiedRoleNameDescriptionContainer,
                              children: [
                                (0, i.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  color: "header-primary",
                                  className: P.verifiedRoleName,
                                  children: e.name,
                                }),
                                void 0 !== e.description
                                  ? (0, i.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      className: P.verifiedRoleDescription,
                                      children: e.description,
                                    })
                                  : null,
                              ],
                            }),
                            (0, i.jsx)(N.default, {
                              showUserPopout: !1,
                              guildId: t,
                              users: a.map(() => null),
                              renderUser: (e, t, n) =>
                                (0, i.jsx)(r.Fragment, { children: a[n] }, n),
                              max: 3,
                            }),
                          ],
                        },
                        e.id
                      );
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    602658: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("509043"),
        s = n("405645"),
        l = n("483093"),
        a = n("339023"),
        o = n("49111");
      function u(e) {
        var t;
        let { guildId: n, role: u, size: c, className: d } = e,
          f = (0, s.useRoleIcon)({ guildId: n, roleId: u.id, size: c });
        return null != f
          ? (0, i.jsx)(l.default, { className: d, ...f })
          : (0, i.jsx)(a.default, {
              color:
                null !== (t = u.colorString) && void 0 !== t
                  ? t
                  : (0, r.int2hex)(o.DEFAULT_ROLE_COLOR),
              className: d,
              size: c,
            });
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("446674"),
        r = n("76393");
      function s() {
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
            return s;
          },
        });
      var i = n("884691");
      let r = i.createContext(void 0);
      var s = r;
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
            return v;
          },
        }),
        n("781738");
      var i = n("867805"),
        r = n("407063"),
        s = n("315102"),
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
          let l = s.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(i, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d);
        },
        E = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        v = (e, t) => {
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
            return l;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var i = n("316693"),
        r = n("923510"),
        s = n("49111");
      let l = s.Permissions.VIEW_CHANNEL,
        a = i.default.combine(l, s.Permissions.CONNECT),
        o = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("748820"),
        s = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");
      function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: m,
            onComplete: p,
            onSubscriptionConfirmation: C,
            analyticsLocations: _,
            analyticsObject: S,
            analyticsLocation: N,
            analyticsSourceLocation: T,
            isGift: A = !1,
            giftMessage: I,
            subscriptionTier: g,
            trialId: R,
            postSuccessGuild: L,
            openInvoiceId: P,
            applicationId: x,
            referralTrialOfferId: b,
            giftRecipient: y,
            returnRef: M,
            subscription: O,
          } = null != e ? e : {},
          D = !1,
          V = (0, r.v4)(),
          j = u.default.getCurrentUser(),
          w = (0, f.isPremiumExactly)(j, E.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: r, ...s } = n;
              return (0, i.jsx)(e, {
                ...s,
                loadId: V,
                subscriptionTier: g,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(g),
                isGift: A,
                giftMessage: I,
                giftRecipient: y,
                initialPlanId: t,
                followupSKUInfo: v,
                onClose: (e, t) => {
                  r(),
                    null == m || m(e),
                    e &&
                      (null == C || C(),
                      !A &&
                        null != t &&
                        t === E.PremiumSubscriptionSKUs.TIER_2 &&
                        !w &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (D = !0),
                    null == p || p(),
                    !A && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: C,
                analyticsLocations: _,
                analyticsObject: S,
                analyticsLocation: N,
                analyticsSourceLocation: T,
                trialId: R,
                postSuccessGuild: L,
                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: P,
                applicationId: x,
                referralTrialOfferId: b,
                returnRef: M,
                subscription: O,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !D &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: V,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != N ? N : S,
                  source: T,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: A,
                  eligible_for_trial: null != R,
                  application_id: x,
                  location_stack: _,
                }),
                (0, l.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == m || m(D),
                D && (null == C || C());
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
            return E;
          },
          getManageResourcePermissions: function () {
            return v;
          },
        }),
        n("222007");
      var i = n("884691"),
        r = n("316693"),
        s = n("446674"),
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
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              r.default.combine(t, c.Permissions.CREATE_EVENTS),
              r.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        E = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [r, u, E, v] = (0, s.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            m = (0, s.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            p = i.useCallback(e => f(e, m, u, r), [r, u, m]),
            C = i.useCallback(e => f(e, m, v, E), [v, E, m]);
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: v,
                canManageGuildExpression: p,
                canManageGuildEvent: C,
              };
        },
        v = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [i, r] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            s = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            E = t.can(i, e),
            v = t.can(r, e),
            m = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: v,
                canManageGuildExpression: e => f(e, m, u, s),
                canManageGuildEvent: e => f(e, m, v, E),
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
            return u;
          },
        });
      var i = n("884691"),
        r = n("79112"),
        s = n("685665"),
        l = n("929423");
      n("424562");
      var a = n("49111"),
        o = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, s.default)(),
          h = (0, i.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f),
              r.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: u,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, u, c, d, f]);
        return h;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return p;
          },
          useCanStartPublicThread: function () {
            return C;
          },
          computeCanStartPublicThread: function () {
            return _;
          },
          useCanStartPrivateThread: function () {
            return S;
          },
          useCanStartThread: function () {
            return N;
          },
          useCanViewThreadForMessage: function () {
            return A;
          },
          useHasActiveThreads: function () {
            return I;
          },
          useCanManageThread: function () {
            return g;
          },
          useCanUnarchiveThread: function () {
            return P;
          },
          canUnarchiveThread: function () {
            return x;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return b;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          computeIsReadOnlyThread: function () {
            return M;
          },
          useIsThreadModerator: function () {
            return D;
          },
          useCanJoinThreadVoice: function () {
            return V;
          },
          useIsNonModInLockedThread: function () {
            return j;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        s = n("316693"),
        l = n("446674"),
        a = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        v = n("401690"),
        m = n("49111");
      let p = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function C(e, t) {
        let n = (0, l.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? m.Permissions.SEND_MESSAGES
              : s.default.combine(
                  m.Permissions.CREATE_PUBLIC_THREADS,
                  m.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function _(e, t) {
        let n = e.isForumLikeChannel()
            ? m.Permissions.SEND_MESSAGES
            : s.default.combine(
                m.Permissions.CREATE_PUBLIC_THREADS,
                m.Permissions.READ_MESSAGE_HISTORY
              ),
          i = h.default.can(n, e);
        return T(i, e, t);
      }
      function S(e) {
        let t = (0, l.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              s.default.combine(m.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === m.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function N(e) {
        let t = C(e),
          n = S(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(m.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
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
            () => h.default.can(m.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(m.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function I(e) {
        return (0, l.useStateFromStoresObject)([v.default, h.default], () => {
          let t = v.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = v.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            i = v.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = r(n).some(e =>
              h.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = r(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = r(i).some(e => h.default.can(m.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: s || l || a,
            hasMoreActiveThreads: a || l,
          };
        });
      }
      function g(e) {
        let t = (0, l.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(m.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          i = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === i || !1)))
        );
      }
      function R(e, t) {
        return null != e && t.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function L(e, t, n) {
        var i;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked)
            ? n
            : t)
        );
      }
      function P(e) {
        let t = (0, l.useStateFromStores)([h.default], () => R(e, h.default)),
          n = D(e);
        return L(e, t, n);
      }
      function x(e) {
        let t = R(e, h.default),
          n = (function (e) {
            return O(e, h.default);
          })(e);
        return L(e, t, n);
      }
      function b(e) {
        var t;
        let n = (0, l.useStateFromStores)(
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
      function M(e) {
        let t = h.default.can(m.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function O(e, t) {
        return null != e && t.can(m.Permissions.MANAGE_THREADS, e);
      }
      function D(e) {
        return (0, l.useStateFromStores)([h.default], () => O(e, h.default));
      }
      function V(e) {
        let t = (0, o.default)(),
          n = (0, l.useStateFromStores)([h.default], () =>
            h.default.can(m.Permissions.CONNECT, e)
          ),
          i = b(e),
          r = p.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && r && n && i;
      }
      function j(e) {
        let t = D(e);
        return e.isLockedThread() && !t;
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
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        s = n.n(r),
        l = n("79798"),
        a = n("988268"),
        o = n("293005"),
        u = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: a,
            className: u,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: h,
            botVerified: E = !1,
            style: v,
            useRemSizes: m = !1,
            usernameIcon: p,
          } = e;
          return (0, i.jsxs)("div", {
            className: s(u, o.nameTag),
            style: v,
            children: [
              (0, i.jsxs)("span", {
                className: s(o.username, d),
                style: null != a ? { color: a } : void 0,
                children: [p, t],
              }),
              null != n
                ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, i.jsx)(l.default, {
                    type: c,
                    invertColor: r,
                    className: s(h, o.bot),
                    verified: E,
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
            return C;
          },
        });
      var i,
        r,
        s = n("37983"),
        l = n("884691"),
        a = n("414456"),
        o = n.n(a),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((i = r || (r = {})).DEFAULT = "default"), (i.SMALL = "small");
      let E = { default: h.shineDefault, small: h.shineSmall },
        v = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class m extends l.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
          return (0, s.jsx)(u.default.div, {
            ...i,
            className: o(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, s.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: E[t],
              children: (0, s.jsx)("div", { className: v[t] }),
            }),
          });
        }
      }
      m.defaultProps = { shineSize: "default" };
      let p = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: r,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: E,
            onlyShineOnHover: v,
            ...p
          } = e,
          C = l.createRef(),
          _ = (0, d.default)(C),
          S = !i && !r && !0 !== a && (!v || _);
        return (0, s.jsxs)(c.Button, {
          buttonRef: C,
          ...p,
          className: o(h.shinyButton, n),
          disabled: i,
          submitting: r,
          children: [
            t,
            S
              ? (0, s.jsx)(m, {
                  shinePaused: f,
                  className: o(
                    h.buttonShine,
                    v ? h.onlyShineOnHover : void 0,
                    E
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      p.ShineSizes = r;
      var C = p;
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
          s = n ? 1 : t;
        return (0, i.jsx)("span", {
          style: {
            display: "block",
            width: r,
            minWidth: r,
            height: s,
            minHeight: s,
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
            return l;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return o;
          },
        });
      var i = n("995008"),
        r = n.n(i),
        s = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        a = () => (0, s.useLazyValue)(() => l()),
        o = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("414456"),
        s = n.n(r),
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
              height: r = 24,
              color: E = "currentColor",
              transition: v = f.transition,
              className: m,
              foreground: p,
              expanded: C,
              ..._
            } = e,
            { enabled: S } = (0, c.useRedesignIconContext)(),
            N = t;
          if ((!0 === C ? (N = h.DOWN) : !1 === C && (N = h.RIGHT), S)) {
            let e = {
              [h.UP]: u.ChevronSmallUpIcon,
              [h.DOWN]: l.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: o.ChevronSmallRightIcon,
            }[N];
            return (0, i.jsx)(e, {
              ..._,
              className: m,
              width: n,
              height: r,
              color: E,
              colorClass: p,
            });
          }
          return (0, i.jsx)("svg", {
            className: s(m, v, N),
            width: n,
            height: r,
            viewBox: "0 0 24 24",
            ...(0, d.default)(_),
            children: (0, i.jsx)("path", {
              className: p,
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
      var v = E;
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
        s = n("505088"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              backgroundColor: a,
              ...o
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, i.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, i.jsx)("path", {
                  fill: r,
                  className: s,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          s.CircleXIcon,
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("469563"),
        l = n("163725"),
        a = n("75196"),
        o = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foregroundColor: l = r.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("rect", {
                  fill: l,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, i.jsx)("path", {
                  fill: s,
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
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("75196");
      function s(e) {
        let { width: t = 104, height: n = 80, ...s } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.default)(s),
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
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        s = n("424823"),
        l = n("75196"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 24 }
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
      var i = n("281071"),
        r = n("773336"),
        s = n("50885");
      let l = (() => {
        if (r.isPlatformEmbedded) return null != s.default.copy;
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
          !!l && (r.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
        );
      }
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: a = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(c),
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
              fill: "string" == typeof l ? l : l.css,
              className: a,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, i.jsx)("path", {
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
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
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
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
        s = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      i = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, r.findDOMNode)(e);
          (0, s.isElement)(n, HTMLElement) &&
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
      var i = n("884691"),
        r = n("748820"),
        s = n("157590");
      let l = (0, r.v4)(),
        a = new Map(),
        o = new Map();
      class u extends i.Component {
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
          return i.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: i } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, r.v4)())
            : (this.elementId = l);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(u, new s.default({ root: t, rootMargin: n, threshold: i }));
        }
      }
      u.defaultProps = {
        active: !0,
        children: i.createElement("span"),
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
    265586: function (e, t, n) {
      "use strict";
      var i, r;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return i;
          },
        }),
        ((r = i || (i = {}))[(r.NONE = 100)] = "NONE"),
        (r[(r.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (r[(r.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
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
        let s = document.execCommand("copy");
        return t.removeChild(r), s;
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
//# sourceMappingURL=eff299494555f26648f4.js.map
