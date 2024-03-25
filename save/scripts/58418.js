(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58418"],
  {
    809764: function (t, e, i) {
      "use strict";
      t.exports = i.p + "2c5a06a01ee8c97f890d.svg";
    },
    352674: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return r;
          },
        });
      var l = i("913144"),
        r = {
          startTyping(t) {
            l.default.dispatch({ type: "TYPING_START_LOCAL", channelId: t });
          },
          stopTyping(t) {
            l.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: t });
          },
        };
    },
    447060: function (t, e, i) {
      "use strict";
      i.r(e);
      var l = i("902768");
      i.es(l, e);
    },
    698210: function (t, e, i) {
      "use strict";
      i.r(e);
      var l = i("220654");
      i.es(l, e);
    },
    114770: function (t, e, i) {
      "use strict";
      i.r(e);
      var l = i("720167");
      i.es(l, e);
    },
    562368: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        }),
        i("222007");
      var l = i("446674"),
        r = i("913144");
      let a = new Map();
      class n extends l.default.Store {
        getGuildRoleConnectionEligibility(t) {
          return null != t ? a.get(t) : void 0;
        }
      }
      n.displayName = "GuildRoleConnectionEligibilityStore";
      var s = new n(r.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: t => {
          let { roleId: e, roleConnectionEligibility: i } = t;
          a.set(e, i);
        },
      });
    },
    793621: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return k;
          },
        }),
        i("834022"),
        i("222007");
      var l = i("37983"),
        r = i("884691"),
        a = i("627445"),
        n = i.n(a),
        s = i("917351"),
        o = i.n(s),
        d = i("446674"),
        c = i("669491"),
        h = i("819855"),
        u = i("77078"),
        f = i("851387"),
        x = i("308289"),
        m = i("841098"),
        g = i("376556"),
        j = i("716241"),
        w = i("685665"),
        p = i("401642"),
        v = i("766274"),
        C = i("26989"),
        N = i("79798"),
        y = i("36694"),
        T = i("599110"),
        I = i("535013"),
        E = i("562368"),
        _ = i("216049"),
        O = i("339023"),
        M = i("526190"),
        S = i("685058"),
        A = i("214509"),
        R = i("49111"),
        P = i("590456"),
        b = i("782340"),
        L = i("48639");
      function B(t) {
        let e,
          {
            connectionType: i,
            connectionMetadataField: r,
            operator: a,
            value: n,
            description: s,
          } = t;
        if (null != s)
          switch (a) {
            case A.OperatorTypes.LESS_THAN:
              e = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: s,
                count: Math.max(0, Number(n) - 1),
              });
              break;
            case A.OperatorTypes.GREATER_THAN:
              e = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: s,
                count: Math.max(0, Number(n) + 1),
              });
              break;
            default:
              e = s;
          }
        else
          e = (0, I.getConnectionsCheckText)({
            connectionType: i,
            connectionMetadataField: r,
            operator: a,
            value: n,
          });
        return null == e
          ? null
          : (0, l.jsxs)("div", {
              className: L.popoutCheck,
              children: [
                (0, l.jsx)(y.default, { className: L.popoutCheckIcon }),
                (0, l.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                }),
              ],
            });
      }
      function D(t) {
        let { eligibilityStates: e } = t,
          i = (0, m.default)(),
          r = (0, u.useToken)(c.default.unsafe_rawColors.GREEN_330).hex(),
          a = o.groupBy(e, t =>
            ""
              .concat(t.connection_type)
              .concat(
                null != t.application_id ? ":".concat(t.application_id) : ""
              )
          );
        return (0, l.jsx)(l.Fragment, {
          children: Object.keys(a).map(t => {
            var e, s;
            let o;
            let d = a[t],
              c = d.filter(t => null != t.operator),
              f = d.find(t => null != t.application),
              m = g.default.get(t),
              j = null == f ? void 0 : f.application,
              w =
                (null == j ? void 0 : j.bot) != null
                  ? new v.default(j.bot)
                  : null,
              p = I.officialApplicationIds.includes(
                null !== (e = null == j ? void 0 : j.id) && void 0 !== e
                  ? e
                  : ""
              );
            return (
              p
                ? (o = (0, l.jsx)(M.default, {
                    className: L.botTag,
                    color: r,
                    size: 16,
                  }))
                : null != w &&
                  (o = (0, l.jsx)(N.default, {
                    className: L.botTag,
                    verified: w.isVerifiedBot(),
                  })),
              (0, l.jsxs)(
                "div",
                {
                  className: L.popoutChecksGroup,
                  children: [
                    (0, l.jsxs)("div", {
                      className: L.popoutCheckGroupName,
                      children: [
                        null != m
                          ? (0, l.jsx)("img", {
                              src: (0, h.isThemeDark)(i)
                                ? m.icon.darkSVG
                                : m.icon.lightSVG,
                              alt: "",
                              className: L.popoutCheckGroupPlatformIcon,
                            })
                          : null,
                        null != w
                          ? (0, l.jsx)(x.default, {
                              user: w,
                              size: u.AvatarSizes.SIZE_20,
                              className: L.popoutCheckGroupPlatformIcon,
                            })
                          : null,
                        (0, l.jsx)(u.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children:
                            null !== (s = null == m ? void 0 : m.name) &&
                            void 0 !== s
                              ? s
                              : null == j
                                ? void 0
                                : j.name,
                        }),
                        o,
                      ],
                    }),
                    c.map(t => {
                      let {
                        connection_type: e,
                        connection_metadata_field: i,
                        operator: r,
                        value: a,
                        description: s,
                      } = t;
                      return (
                        n(null != i, "connectionMetadataField is null"),
                        n(null != r, "operator is null"),
                        n(null != a, "value is null"),
                        (0, l.jsx)(
                          B,
                          {
                            connectionType: e,
                            connectionMetadataField: i,
                            operator: r,
                            value: a,
                            description: s,
                          },
                          ""
                            .concat(e, ":")
                            .concat(i, ":")
                            .concat(r, ":")
                            .concat(a)
                        )
                      );
                    }),
                  ],
                },
                t
              )
            );
          }),
        });
      }
      function U(t) {
        let e,
          {
            onGetRolesClicked: i,
            onOpenProfile: a,
            eligibilityStates: n,
            userId: s,
            roleId: o,
            channelId: c,
            guildId: h,
          } = t;
        r.useEffect(() => {
          T.default.track(R.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: s,
            role_id: o,
            ...(0, j.collectChannelAnalyticsMetadataFromId)(c),
            ...(0, j.collectGuildAnalyticsMetadata)(h),
          });
        }, [s, o, c, h]);
        let f = (0, d.useStateFromStores)(
          [C.default],
          () => {
            var t, e;
            return (
              null !==
                (e =
                  null === (t = C.default.getSelfMember(h)) || void 0 === t
                    ? void 0
                    : t.roles.includes(o)) &&
              void 0 !== e &&
              e
            );
          },
          [h, o]
        );
        return (
          (e =
            1 === n.length && 1 === n[0].length
              ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE
              : 1 === n.length
                ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format()
                : b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format()),
          (0, l.jsxs)("div", {
            className: L.popout,
            children: [
              (0, l.jsx)("div", {
                className: L.popoutHeaderContainer,
                children: (0, l.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "text-normal",
                  className: L.popoutHeaderText,
                  children: e,
                }),
              }),
              (0, l.jsx)("div", {
                className: L.popoutChecks,
                children: (0, l.jsx)(D, { eligibilityStates: n.flat() }),
              }),
              (0, l.jsxs)("div", {
                className: L.buttonContainer,
                children: [
                  f
                    ? null
                    : (0, l.jsx)(u.Button, {
                        className: L.getRolesButton,
                        onClick: i,
                        children:
                          b.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES,
                      }),
                  (0, l.jsx)(u.Button, {
                    className: L.viewConnectionsButton,
                    color: u.Button.Colors.PRIMARY,
                    onClick: a,
                    children:
                      b.default.Messages
                        .CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function k(t) {
        let { userId: e, messageId: i, guild: a, channel: s } = t,
          { analyticsLocations: o } = (0, w.default)(),
          c = (0, _.default)(a, e, s.id, !0),
          h = (0, d.useStateFromStores)([E.default], () =>
            E.default.getGuildRoleConnectionEligibility(
              null == c ? void 0 : c.id
            )
          ),
          [x, m] = r.useState(null == h);
        if (null == c) return null;
        async function g() {
          n(null != c, "visibleConnectionsRole is null"),
            x &&
              null == h &&
              (await f.default.fetchGuildRoleConnectionsEligibility(a.id, c.id),
              m(!1));
        }
        return (0, l.jsx)(u.LazyPopout, {
          onRequestOpen: g,
          renderPopout: function () {
            return Promise.resolve(t => {
              let { closePopout: r } = t;
              return null == h
                ? (0, l.jsx)(l.Fragment, {})
                : (n(null != c, "visibleConnectionsRole is null"),
                  (0, l.jsx)(U, {
                    eligibilityStates: h,
                    userId: e,
                    roleId: c.id,
                    channelId: s.id,
                    guildId: a.id,
                    onGetRolesClicked: () => {
                      (0, S.openGuildRoleConnectionsModal)(a.id);
                    },
                    onOpenProfile: () => {
                      (0, p.openUserProfileModal)({
                        userId: e,
                        messageId: i,
                        guildId: a.id,
                        channelId: s.id,
                        roleId: c.id,
                        section: P.UserProfileSections.USER_INFO_CONNECTIONS,
                        sourceAnalyticsLocations: o,
                        analyticsLocation: {
                          section: R.AnalyticsSections.CHANNEL,
                        },
                      }),
                        r();
                    },
                  }));
            });
          },
          align: "top",
          nudgeAlignIntoViewport: !0,
          children: t =>
            (0, l.jsx)(u.Tooltip, {
              text: b.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
              children: e =>
                (0, l.jsxs)("div", {
                  className: L.badge,
                  ...e,
                  ...t,
                  children: [
                    (0, l.jsx)(O.default, {
                      className: L.badgeVerifiedIcon,
                      size: 16,
                      color: c.colorString,
                    }),
                    (0, l.jsx)(u.Text, {
                      variant: "text-xs/bold",
                      color: "header-primary",
                      className: L.roleName,
                      children: c.name,
                    }),
                  ],
                }),
            }),
        });
      }
    },
    685058: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          MODAL_KEY: function () {
            return c;
          },
          openGuildRoleConnectionsModal: function () {
            return h;
          },
          default: function () {
            return u;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("446674"),
        a = i("77078"),
        n = i("305961"),
        s = i("83900"),
        o = i("535013"),
        d = i("782340");
      let c = "guild-connection-roles";
      function h(t) {
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await i.el("918771").then(i.bind(i, "918771"));
            return i => (0, l.jsx)(e, { ...i, guildId: t });
          },
          {
            modalKey: c,
            contextKey: a.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: () => {
              (0, a.closeModal)(c, a.DEFAULT_MODAL_CONTEXT);
            },
          }
        );
      }
      function u(t) {
        let e = (0, r.useStateFromStores)(
          [n.default],
          () =>
            (0, o.isVerifiedRolesChannelVisible)(t, n.default.getRoles(t.id)),
          [t]
        );
        return e
          ? (0, l.jsx)(a.MenuItem, {
              id: "guild-connection-roles",
              label: d.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
              icon: s.default,
              action: () => h(t.id),
            })
          : null;
      }
    },
    967003: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          useNewMemberBadge: function () {
            return d;
          },
        }),
        i("702976");
      var l = i("446674"),
        r = i("26989"),
        a = i("305961"),
        n = i("697218"),
        s = i("568734"),
        o = i("657944");
      let d = (t, e) => {
        var i, d, c;
        let h = (0, l.useStateFromStores)([r.default], () => {
            var i, l;
            return (0, s.hasFlag)(
              null !==
                (l =
                  null === (i = r.default.getMember(t, e)) || void 0 === i
                    ? void 0
                    : i.flags) && void 0 !== l
                ? l
                : 0,
              o.GuildMemberFlags.DID_REJOIN
            );
          }),
          u = (0, l.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getGuild(t)) || void 0 === e
              ? void 0
              : e.isNew();
          }),
          f = (0, l.useStateFromStores)([n.default], () => {
            var t;
            return null === (t = n.default.getUser(e)) || void 0 === t
              ? void 0
              : t.bot;
          });
        let x =
          ((i = t),
          (d = { maxDaysOld: 7 }),
          (c = e),
          (0, l.useStateFromStores)(
            [],
            () =>
              (function (t, e, i) {
                let { maxDaysOld: l, minDaysOld: n = 0 } = e,
                  s = a.default.getGuild(t),
                  o = null == s ? void 0 : s.joinedAt;
                if (null != i) {
                  let e = r.default.getMember(t, i);
                  o =
                    (null == e ? void 0 : e.joinedAt) == null
                      ? null
                      : new Date(e.joinedAt);
                }
                if (null == o) return !1;
                let d = Date.now() - o.getTime();
                return (null == l || d <= 864e5 * l) && d >= 864e5 * n;
              })(i, d, c),
            [d, i, c]
          ) &&
            !u &&
            !f &&
            !h);
        return x;
      };
    },
    28913: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return c;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("77078"),
        a = i("35006"),
        n = i("967003"),
        s = i("989750"),
        o = i("782340"),
        d = i("626793");
      function c(t) {
        let { guild: e, message: i } = t,
          c = (0, n.useNewMemberBadge)(e.id, i.author.id);
        return c
          ? (0, l.jsx)(r.Popout, {
              animation: r.Popout.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: t => {
                let { closePopout: r } = t;
                return (0, l.jsx)(s.default, {
                  guild: e,
                  message: i,
                  onClose: r,
                });
              },
              children: t => {
                let { onClick: e } = t;
                return (0, l.jsx)(r.Clickable, {
                  onClick: e,
                  tag: "span",
                  children: (0, l.jsx)(r.Tooltip, {
                    text: o.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                    children: t =>
                      (0, l.jsx)("div", {
                        className: d.newMemberBadge,
                        ...t,
                        children: (0, l.jsx)(a.default, {
                          width: 20,
                          height: 20,
                        }),
                      }),
                  }),
                });
              },
            })
          : null;
      }
    },
    989750: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return g;
          },
        });
      var l = i("37983"),
        r = i("884691"),
        a = i("77078"),
        n = i("716241"),
        s = i("933629"),
        o = i("383161"),
        d = i("42203"),
        c = i("18494"),
        h = i("35006"),
        u = i("599110"),
        f = i("49111"),
        x = i("782340"),
        m = i("729521"),
        g = function (t) {
          let { guild: e, message: i, onClose: g } = t,
            j = d.default.getChannel(c.default.getChannelId(e.id));
          return (r.useEffect(() => {
            u.default.track(f.AnalyticEvents.OPEN_POPOUT, {
              type: "New Member Badge Popout",
              guild_id: e.id,
              channel_id: null == j ? void 0 : j.id,
            });
          }, []),
          null == j)
            ? null
            : (0, l.jsx)(s.MessagePopoutContent, {
                children: (0, l.jsxs)("div", {
                  className: m.popoutContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: m.mainContent,
                      children: [
                        (0, l.jsx)("div", {
                          className: m.iconContainer,
                          children: (0, l.jsx)(h.default, {
                            width: 40,
                            height: 40,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              className: m.header,
                              children:
                                x.default.Messages
                                  .NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                            }),
                            (0, l.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              children:
                                x.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(a.Button, {
                      size: a.Button.Sizes.SMALL,
                      color: a.Button.Colors.BRAND,
                      className: m.ctaButton,
                      innerClassName: m.ctaButtonContent,
                      fullWidth: !0,
                      onClick: () => {
                        n.default.trackWithMetadata(
                          f.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED,
                          { target_user_id: i.author.id }
                        ),
                          g(),
                          (0, o.mentionUser)(i.author, j.id);
                      },
                      children: x.default.Messages.MENTION_USER.format({
                        username: i.author.username,
                      }),
                    }),
                  ],
                }),
              });
        };
    },
    321905: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          shouldShowNitroBadge: function () {
            return a;
          },
        });
      var l = i("862205");
      let r = (0, l.createExperiment)({
        kind: "user",
        id: "2023-10_social_proofing_message_nitro_badge",
        label: "Social Proofing Message Nitro Badge",
        defaultConfig: { enabled: !1, hideNitroBadgeWhenRoleBadgePresent: !1 },
        treatments: [
          {
            id: 1,
            label: "Prefer BOTH nitro badge AND role icon(s)",
            config: { enabled: !0, hideNitroBadgeWhenRoleBadgePresent: !1 },
          },
          {
            id: 2,
            label: "Prefer role icon(s) over nitro badge if both are present",
            config: { enabled: !0, hideNitroBadgeWhenRoleBadgePresent: !0 },
          },
        ],
      });
      function a(t, e) {
        let i = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
        return (
          i.enabled &&
          (!i.hideNitroBadgeWhenRoleBadgePresent ||
            (i.hideNitroBadgeWhenRoleBadgePresent && !t))
        );
      }
    },
    253299: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return T;
          },
        });
      var l = i("37983"),
        r = i("884691"),
        a = i("446674"),
        n = i("77078"),
        s = i("716241"),
        o = i("689226"),
        d = i("95039"),
        c = i("828674"),
        h = i("393414"),
        u = i("42203"),
        f = i("305961"),
        x = i("18494"),
        m = i("98292"),
        g = i("118503"),
        j = i("483093"),
        w = i("599110"),
        p = i("933629"),
        v = i("49111"),
        C = i("724210"),
        N = i("782340"),
        y = i("805435"),
        T = t => {
          let { roleIcon: e, guild: i } = t,
            { name: T } = e;
          r.useEffect(() => {
            w.default.track(v.AnalyticEvents.OPEN_POPOUT, {
              type: "Role Icon Popout",
              guild_id: i.id,
              ...(0, s.collectChannelAnalyticsMetadata)(
                u.default.getChannel(x.default.getChannelId(i.id))
              ),
            });
          }, []);
          let I = (0, a.useStateFromStores)([f.default], () =>
              null != e.roleId ? f.default.getRole(i.id, e.roleId) : void 0
            ),
            E = (0, c.isSubscriptionRole)(I),
            _ = E
              ? N.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format(
                  { name: T }
                )
              : N.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                  name: T,
                }),
            O = {
              ...e,
              src:
                null == e.src
                  ? e.src
                  : (0, o.replaceRoleIconSourceSize)(e.src, 40),
              size: 40,
            };
          return (0, l.jsx)(n.Dialog, {
            children: (0, l.jsx)(p.MessagePopoutContent, {
              children: (0, l.jsxs)("div", {
                className: y.popoutContainer,
                children: [
                  (0, l.jsxs)("div", {
                    className: y.mainContent,
                    children: [
                      (0, l.jsx)("div", {
                        className: y.roleIconContainer,
                        children: (0, l.jsx)(j.default, {
                          ...O,
                          enableTooltip: !1,
                          className: y.roleIcon,
                          enableHeight: !1,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: y.truncatingText,
                        children: [
                          (0, l.jsx)(n.Heading, {
                            variant: "heading-md/semibold",
                            className: y.roleName,
                            children: (0, l.jsx)(m.default, { children: T }),
                          }),
                          (0, l.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)(n.Button, {
                    size: n.Button.Sizes.SMALL,
                    color: n.Button.Colors.PRIMARY,
                    className: y.ctaButton,
                    innerClassName: y.ctaButtonContent,
                    fullWidth: !0,
                    onClick: E
                      ? () => {
                          (0, h.transitionTo)(
                            v.Routes.CHANNEL(
                              i.id,
                              C.StaticChannelRoute.ROLE_SUBSCRIPTIONS
                            )
                          );
                        }
                      : () => {
                          (0, d.openGuildBoostingMarketingModal)({
                            guildId: i.id,
                            location: {
                              section: v.AnalyticsSections.ROLE_ICON_POPOUT,
                            },
                          });
                        },
                    autoFocus: !0,
                    children: [
                      (0, l.jsx)(g.default, {
                        width: 14,
                        height: 14,
                        className: y.boosterBadge,
                      }),
                      N.default.Messages.ROLE_ICON_POPOUT_CTA,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    39331: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        });
      var l = i("884691"),
        r = i("95045"),
        a = i("227698"),
        n = i("49111");
      function s(t, e) {
        let {
          hideSimpleEmbedContent: i,
          formatInline: s = !1,
          noStyleAndInteraction: o = !1,
          isInteracting: d = !1,
          allowHeading: c = !1,
          allowList: h = !1,
          allowLinks: u = !1,
          previewLinkTarget: f = !1,
        } = e;
        return l.useMemo(
          () =>
            null != t.customRenderedContent
              ? t.customRenderedContent
              : (t.isCommandType() && 0 === t.content.length) ||
                  t.hasFlag(n.MessageFlags.LOADING)
                ? (0, a.default)(t)
                : (0, r.default)(t, {
                    hideSimpleEmbedContent: i,
                    formatInline: s,
                    noStyleAndInteraction: o,
                    isInteracting: d,
                    allowHeading: c,
                    allowList: h,
                    allowLinks: u,
                    previewLinkTarget: f,
                  }),
          [
            t.content,
            t.customRenderedContent,
            t.embeds,
            t.interaction,
            t.state,
            t.type,
            i,
            s,
            o,
            d,
            c,
            h,
            u,
            f,
          ]
        );
      }
    },
    227698: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return a;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("602428");
      function a(t) {
        return {
          content: (0, l.jsx)(r.default, { message: t }),
          hasSpoilerEmbeds: !1,
        };
      }
    },
    436595: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return o;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("77078"),
        a = i("188554"),
        n = i("782340"),
        s = i("640054");
      function o() {
        return (0, l.jsx)(r.Tooltip, {
          text: n.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
          children: t =>
            (0, l.jsx)("div", {
              className: s.badge,
              ...t,
              children: (0, l.jsx)(a.default, {
                width: "1rem",
                height: "1rem",
              }),
            }),
        });
      }
    },
    383161: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          mentionUser: function () {
            return x;
          },
          default: function () {
            return m;
          },
        }),
        i("222007");
      var l = i("37983");
      i("884691");
      var r = i("446674"),
        a = i("77078"),
        n = i("352674"),
        s = i("42203"),
        o = i("957255"),
        d = i("18494"),
        c = i("659500"),
        h = i("158998"),
        u = i("49111"),
        f = i("782340");
      function x(t, e) {
        let { id: i } = t,
          l = "@".concat(h.default.getUserTag(t, { decoration: "never" }));
        c.ComponentDispatch.dispatchToLastSubscribed(
          u.ComponentActions.INSERT_TEXT,
          { plainText: l, rawText: "<@".concat(i, ">") }
        ),
          null != e && n.default.startTyping(e);
      }
      function m(t, e, i) {
        let [n, c] = (0, r.useStateFromStoresArray)(
            [d.default, s.default, o.default],
            () => {
              let t = d.default.getChannelId(e),
                i = s.default.getChannel(t),
                l =
                  null != i &&
                  (i.isMultiUserDM() ||
                    o.default.can(u.Permissions.SEND_MESSAGES, i));
              return [t, l];
            },
            [e]
          ),
          h = i === u.AppContext.POPOUT;
        return !c || h
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "mention",
              label: f.default.Messages.MENTION,
              action: function () {
                x(t, n);
              },
            });
      }
    },
    188554: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("469563"),
        a = i("447060"),
        n = i("75196"),
        s = (0, r.replaceIcon)(
          function (t) {
            let {
              width: e = 24,
              height: i = 24,
              color: r = "currentColor",
              foreground: a,
              ...s
            } = t;
            return (0, l.jsxs)("svg", {
              ...(0, n.default)(s),
              width: e,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: a,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 10.7101C15.1085 9.84957 13 7.17102 13 4C13 3.69264 13.0198 3.3899 13.0582 3.093C12.7147 3.03189 12.3611 3 12 3C8.686 3 6 5.686 6 9V14C6 15.657 4.656 17 3 17V18H21V17C19.344 17 18 15.657 18 14V10.7101ZM8.55493 19C9.24793 20.19 10.5239 21 11.9999 21C13.4759 21 14.7519 20.19 15.4449 19H8.55493Z",
                }),
                (0, l.jsx)("path", {
                  d: "M18.2624 5.50209L21 2.5V1H16.0349V2.49791H18.476L16 5.61088V7H21V5.50209H18.2624Z",
                  fill: r,
                }),
              ],
            });
          },
          a.BellZIcon,
          void 0,
          { size: 24 }
        );
    },
    491401: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("469563"),
        a = i("698210"),
        n = i("75196"),
        s = (0, r.replaceIcon)(
          function (t) {
            let {
              color: e = "currentColor",
              height: i = 24,
              width: r = 24,
              ...a
            } = t;
            return (0, l.jsxs)("svg", {
              ...(0, n.default)(a),
              width: r,
              height: i,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                  fill: e,
                }),
                (0, l.jsx)("path", {
                  d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                  fill: e,
                }),
              ],
            });
          },
          a.ClockWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    35006: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("469563"),
        a = i("114770"),
        n = i("75196"),
        s = (0, r.replaceIcon)(
          function (t) {
            let {
              width: e = 24,
              height: i = 24,
              color: r = "currentColor",
              ...a
            } = t;
            return (0, l.jsxs)("svg", {
              ...(0, n.default)(a),
              width: e,
              height: i,
              viewBox: "0 0 64 64",
              fill: "none",
              children: [
                (0, l.jsx)("rect", { width: "8", height: "8", fill: r }),
                (0, l.jsx)("rect", {
                  x: "56",
                  y: "56",
                  width: "8",
                  height: "8",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "21.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6667",
                  y: "21.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "18.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.3335",
                  y: "18.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6667",
                  y: "18.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "16.3119",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.3335",
                  y: "16.3119",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.6667",
                  y: "16.3119",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6667",
                  y: "16.3119",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "13.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.3335",
                  y: "13.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.6667",
                  y: "13.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6667",
                  y: "13.6453",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "10.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.3335",
                  y: "10.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.6667",
                  y: "10.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  opacity: "0.2",
                  x: "30.6667",
                  y: "10.9785",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28",
                  y: "8.31189",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.3335",
                  y: "8.31189",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 21.6453)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 18.9785)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.6667 18.9785)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 16.3119)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.6667 16.3119)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.3335 16.3119)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 13.6453)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.6667 13.6453)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.3335 13.6453)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 10.9785)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.6667 10.9785)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.3335 10.9785)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 36 8.31189)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.6667 8.31189)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6667",
                  y: "24.3119",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6394",
                  y: "47.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6394",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28.0273",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28.0273",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28.0273",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "29.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28.0273",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "26.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.4155",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9675",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.4155",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9675",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.4155",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9675",
                  y: "29.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.4155",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9675",
                  y: "26.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.8035",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.3555",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.8035",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.3555",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.8035",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.3555",
                  y: "29.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.8035",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.3555",
                  y: "26.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "20.1914",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "9.74365",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "20.1914",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "9.74365",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "20.1914",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "9.74365",
                  y: "29.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "20.1914",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "9.74365",
                  y: "26.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "45.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "7.13159",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "7.13159",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9128",
                  y: "42.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.9128",
                  y: "31.6882",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 22.9128 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "7.13159",
                  y: "29.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9128",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.9128",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 22.9128 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.2461",
                  y: "39.6882",
                  width: "2.66667",
                  height: "2.66666",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.5796",
                  y: "34.3549",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 25.5796 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "17.5796",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "7.13159",
                  y: "26.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "14.9128",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "22.9128",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 22.9128 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "12.2461",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "25.5796",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 25.5796 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "9.57959",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "28.2461",
                  y: "37.0215",
                  width: "2.66667",
                  height: "2.66667",
                  transform: "rotate(-180 28.2461 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 35.9727 45.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 35.9727 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 35.9727 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 29.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 35.9727 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 26.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.5847 45.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0327 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.5847 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0327 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 38.5847 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0327 29.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 38.5847 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0327 26.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.1968 45.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 51.6445 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.1968 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 51.6445 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 41.1968 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 51.6445 29.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 41.1968 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 51.6445 26.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 43.8086 45.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 54.2566 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 43.8086 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 54.2566 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 43.8086 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 54.2566 29.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 43.8086 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 54.2566 26.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 45.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 56.8687 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 56.8687 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0874 42.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 41.0874 31.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 46.4207 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 56.8687 29.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 49.0874 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 41.0874 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66666",
                  transform: "matrix(-1 0 0 1 51.7539 39.6882)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 38.4207 34.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 46.4207 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 56.8687 26.3549)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 49.0874 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 41.0874 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 51.7539 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66666",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 38.4207 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(-1 0 0 1 54.4207 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  width: "2.66667",
                  height: "2.66667",
                  transform: "matrix(1 0 0 -1 35.7539 37.0215)",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6394",
                  y: "50.3549",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
                (0, l.jsx)("rect", {
                  x: "30.6394",
                  y: "53.0215",
                  width: "2.66667",
                  height: "2.66667",
                  fill: r,
                }),
              ],
            });
          },
          a.NewUserIcon,
          void 0,
          { size: 24 }
        );
    },
    780571: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return o;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("414456"),
        a = i.n(r),
        n = i("77078"),
        s = i("356296"),
        o = function (t) {
          let {
              className: e,
              compact: i = !1,
              contentOnly: r = !1,
              zalgo: o = !0,
              disableInteraction: d = !1,
              childrenRepliedMessage: c,
              childrenExecutedCommand: h,
              childrenHeader: u,
              childrenSystemMessage: f,
              childrenButtons: x,
              childrenMessageContent: m,
              childrenAccessories: g,
              messageRef: j,
              focusProps: w = { offset: { left: 4, right: 4 } },
              hasThread: p,
              isSystemMessage: v,
              hasReply: C,
              ...N
            } = t,
            y = (0, l.jsx)(n.FocusRing, {
              ...w,
              children: (0, l.jsxs)("div", {
                className: a(e, {
                  [s.wrapper]: !0,
                  [s.contentOnly]: r,
                  [s.compact]: i,
                  [s.cozy]: !i,
                  [s.zalgo]: o,
                  [s.hasThread]: p,
                  [s.isSystemMessage]: v,
                  [s.hasReply]: C,
                }),
                ref: j,
                ...N,
                role: "article",
                children: [
                  c,
                  h,
                  (0, l.jsxs)("div", {
                    className: s.contents,
                    children: [f, u, null == f && m],
                  }),
                  g,
                  null != x
                    ? (0, l.jsx)("div", {
                        className: s.buttonContainer,
                        children: x,
                      })
                    : null,
                ],
              }),
            });
          return d ? (0, l.jsx)(n.FocusBlock, { children: y }) : y;
        };
    },
    93332: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          useUsername: function () {
            return H;
          },
          useAvatar: function () {
            return Z;
          },
          BaseMessageHeader: function () {
            return z;
          },
          default: function () {
            return Y;
          },
        }),
        i("222007"),
        i("424973"),
        i("702976");
      var l = i("37983"),
        r = i("884691"),
        a = i("414456"),
        n = i.n(a),
        s = i("394846"),
        o = i("446674"),
        d = i("77078"),
        c = i("812204"),
        h = i("685665"),
        u = i("793621"),
        f = i("406043"),
        x = i("28913"),
        m = i("321905"),
        g = i("865343"),
        j = i("253299"),
        w = i("119001"),
        p = i("626301"),
        v = i("256572"),
        C = i("436595"),
        N = i("713135"),
        y = i("506885"),
        T = i("106435"),
        I = i("168973"),
        E = i("305961"),
        _ = i("957255"),
        O = i("697218"),
        M = i("491401"),
        S = i("483093"),
        A = i("315102"),
        R = i("659500"),
        P = i("568734"),
        b = i("719923"),
        L = i("587904"),
        B = i("473374"),
        D = i("195483"),
        U = i("49111"),
        k = i("782340"),
        G = i("356296"),
        F = i("809764");
      function V(t) {
        let {
          avatarSrc: e,
          avatarDecorationSrc: i,
          compact: r,
          onClick: a,
          onContextMenu: s,
          onMouseDown: o,
          onMouseEnter: d,
          onMouseLeave: c,
          onKeyDown: h,
          showCommunicationDisabledStyles: u = !1,
          className: f,
        } = t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("img", {
              onClick: a,
              onContextMenu: s,
              onMouseDown: o,
              onKeyDown: h,
              onMouseEnter: d,
              onMouseLeave: c,
              src: e,
              "aria-hidden": !0,
              className: n(f, G.avatar, {
                [G.compact]: r,
                [G.clickable]: null != a,
                [G.communicationDisabledOpacity]: u,
              }),
              alt: " ",
            }),
            null == i || r
              ? null
              : (0, l.jsx)("img", {
                  className: G.avatarDecoration,
                  src: i,
                  alt: " ",
                  "aria-hidden": !0,
                }),
          ],
        });
      }
      function H(t, e, i) {
        let {
          message: r,
          channel: a,
          author: n,
          compact: s = !1,
          onContextMenu: o,
          showUsernamePopout: d,
          roleIcon: c,
          onClickUsername: h,
          onPopoutRequestClose: u,
        } = t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(D.default, {
              message: r,
              channel: a,
              author: n,
              compact: s,
              roleIcon: c,
              showPopout: d,
              renderPopout: e,
              onClick: h,
              onContextMenu: o,
              onPopoutRequestClose: u,
              decorations: i,
              renderRemixTag: !0,
            }),
            s &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("i", { className: G.separator, children: ":" }),
                  " ",
                ],
              }),
          ],
        });
      }
      function Z(t) {
        var e, i;
        let {
            props: a,
            guildId: n,
            handleRenderPopout: u,
            showCommunicationDisabledStyles: f = !1,
            className: x,
          } = t,
          {
            message: m,
            author: g,
            compact: j = !1,
            subscribeToGroupId: w,
            animate: p = !0,
            onContextMenu: v,
            onClickAvatar: C,
            onPopoutRequestClose: N,
            showAvatarPopout: E,
          } = a,
          [_, O] = r.useState(!1),
          { analyticsLocations: M } = (0, h.default)(c.default.AVATAR),
          S = (0, o.useStateFromStores)([I.default], () => {
            var t;
            return null !== (t = a.displayCompactAvatars) && void 0 !== t
              ? t
              : I.default.displayCompactAvatars;
          }),
          P = null != m.messageReference && null != m.webhookId,
          b = m.author,
          { id: L } = b,
          B = j ? 32 : 80,
          {
            avatarSrc: D,
            avatarDecorationSrc: k,
            eventHandlers: G,
          } = (0, T.default)({
            user: b,
            guildId: n,
            size: B,
            animateOnHover: null != w ? !_ : !p,
            showPending: !0,
          }),
          F = m.isInteractionPlaceholder(),
          H = r.useMemo(() => {
            var t, e;
            return F &&
              null == b.avatar &&
              (null === (t = m.application) || void 0 === t
                ? void 0
                : t.icon) != null
              ? null !==
                  (e = A.default.getApplicationIconURL({
                    id: m.application.id,
                    icon: m.application.icon,
                    size: B,
                    fallbackAvatar: !1,
                  })) && void 0 !== e
                ? e
                : D
              : D;
          }, [
            F,
            null === (e = m.application) || void 0 === e ? void 0 : e.icon,
            null === (i = m.application) || void 0 === i ? void 0 : i.id,
            b.avatar,
            B,
            D,
          ]);
        if (
          (r.useEffect(() => {
            if (null != w)
              return (
                R.ComponentDispatch.subscribeKeyed(
                  U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR,
                  "".concat(w, ":").concat(L),
                  O
                ),
                () =>
                  void R.ComponentDispatch.unsubscribeKeyed(
                    U.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR,
                    "".concat(w, ":").concat(L),
                    O
                  )
              );
          }, [L, w]),
          !j || S)
        )
          return null != u && null != E
            ? (0, l.jsx)(h.AnalyticsLocationProvider, {
                value: M,
                children: (0, l.jsx)(d.Popout, {
                  preload: P
                    ? void 0
                    : function () {
                        return (0, y.default)(
                          m.author.id,
                          null != g.guildMemberAvatar && null != n
                            ? A.default.getGuildMemberAvatarURLSimple({
                                guildId: n,
                                userId: m.author.id,
                                avatar: g.guildMemberAvatar,
                                size: 80,
                              })
                            : m.author.getAvatarURL(void 0, 80, !1),
                          { guildId: n, channelId: m.channel_id }
                        );
                      },
                  renderPopout: u,
                  shouldShow: E,
                  position: s.isMobile ? "window_center" : "right",
                  onRequestClose: N,
                  children: t =>
                    V({
                      ...G,
                      avatarSrc: H,
                      avatarDecorationSrc: k,
                      compact: j,
                      onClick: C,
                      onContextMenu: v,
                      onMouseDown: t.onMouseDown,
                      onKeyDown: t.onKeyDown,
                      showCommunicationDisabledStyles: f,
                      className: x,
                    }),
                }),
              })
            : (0, l.jsx)(h.AnalyticsLocationProvider, {
                value: M,
                children: V({
                  ...G,
                  avatarSrc: H,
                  avatarDecorationSrc: k,
                  compact: j,
                  onClick: C,
                  onContextMenu: v,
                  onMouseDown: void 0,
                  onKeyDown: void 0,
                  showCommunicationDisabledStyles: f,
                  className: x,
                }),
              });
      }
      function z(t) {
        let {
          message: e,
          avatar: i,
          username: r,
          usernameSpanId: a,
          usernameClassName: s,
          compact: o,
          showTimestamp: c,
          showTimestampOnHover: h,
          ariaLabelledBy: u,
          ariaDescribedBy: f,
          className: x,
          messageClassname: m,
          badges: j,
        } = t;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            !o && i,
            (0, l.jsxs)(d.H, {
              className: n(G.header, x),
              "aria-describedby": f,
              "aria-labelledby": u,
              children: [
                c &&
                  o &&
                  (0, l.jsx)(L.default, {
                    id: (0, g.getMessageTimestampId)(e),
                    compact: !0,
                    timestamp: e.timestamp,
                    isVisibleOnlyOnHover: h,
                    className: m,
                    isInline: !1,
                  }),
                o && i,
                (0, l.jsx)("span", { id: a, className: s, children: r }),
                c &&
                  !o &&
                  (0, l.jsx)(L.default, {
                    id: (0, g.getMessageTimestampId)(e),
                    timestamp: e.timestamp,
                    className: m,
                  }),
                null != j && j.length > 0
                  ? (0, l.jsx)("div", {
                      className: G.badgesContainer,
                      children: j,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      let W = t => {
        !t && (0, p.navigateToPremiumMarketingPage)();
      };
      function K(t) {
        let { currentUserIsPremium: e, author: i } = t,
          r = (0, o.useStateFromStores)([N.default], () => {
            var t;
            return null === (t = N.default.getUserProfile(i.id)) || void 0 === t
              ? void 0
              : t.premiumSince;
          });
        return (0, l.jsx)(d.Tooltip, {
          tooltipClassName: G.nitroAuthorBadgeTootip,
          shouldShow: null != r,
          text: k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: r }),
          onTooltipShow: () => (0, y.default)(i.id),
          children: t =>
            (0, l.jsx)(d.Clickable, {
              className: G.nitroAuthorBadgeContainer,
              onClick: () => W(e),
              "aria-label": k.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: r,
              }),
              children: (0, l.jsx)("img", {
                alt: "",
                className: G.nitroBadgeSvg,
                src: F,
                ...t,
              }),
            }),
        });
      }
      function Y(t) {
        let {
            message: e,
            repliedMessage: i,
            compact: a = !1,
            renderPopout: s,
            showTimestampOnHover: c,
            roleIcon: h,
            subscribeToGroupId: p,
            hideTimestamp: N,
            className: y,
            channel: T,
          } = t,
          A = r.useMemo(() => (null != s ? t => s(t, e) : void 0), [s, e]),
          [, R] = (0, f.default)(e.author.id, t.guildId),
          L = (0, o.useStateFromStores)(
            [E.default],
            () => E.default.getGuild(t.guildId),
            [t.guildId]
          ),
          F =
            null != e.author &&
            null != L &&
            _.default.canManageUser(
              U.Permissions.MODERATE_MEMBERS,
              e.author,
              L
            ),
          V = R && F,
          W = Z({
            props: t,
            guildId: t.guildId,
            handleRenderPopout: A,
            showCommunicationDisabledStyles: V,
          }),
          Y = (0, o.useStateFromStores)([I.default], () => {
            var e;
            return null !== (e = t.displayCompactAvatars) && void 0 !== e
              ? e
              : I.default.displayCompactAvatars;
          }),
          X =
            (!a || Y) && null != h && null != L
              ? (0, l.jsx)(
                  d.Popout,
                  {
                    animation: d.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: () =>
                      (0, l.jsx)(j.default, { roleIcon: h, guild: L }),
                    children: t => {
                      let { onClick: e } = t;
                      return (0, l.jsx)(S.default, {
                        ...h,
                        className: G.roleIcon,
                        onClick: e,
                      });
                    },
                  },
                  "role-icon-children"
                )
              : (!a || Y) && null != h
                ? (0, l.jsx)(
                    S.default,
                    { ...h, className: G.roleIcon },
                    "role-icon-children"
                  )
                : null,
          q = (0, B.renderSystemTag)({
            message: e,
            channel: T,
            user: null == e ? void 0 : e.author,
            compact: a,
            isRepliedMessage: !1,
          }),
          J = [],
          Q = O.default.getCurrentUser(),
          $ = b.default.isPremium(e.author),
          tt = b.default.isPremium(Q),
          te = null == T ? void 0 : T.isPrivate();
        (0, m.shouldShowNitroBadge)(null != h, "Message Username") &&
          $ &&
          !a &&
          !te &&
          J.push(
            (0, l.jsx)(
              K,
              { currentUserIsPremium: tt, author: e.author },
              "nitro-author"
            )
          ),
          null != X && J.push(X),
          null != L &&
            J.push(
              (0, l.jsx)(x.default, { guild: L, message: e }, "new-member")
            ),
          null != T &&
            null != L &&
            J.push(
              (0, l.jsx)(
                u.default,
                { guild: L, channel: T, userId: e.author.id, messageId: e.id },
                "connections"
              )
            );
        let ti = [];
        (0, P.hasFlag)(e.flags, U.MessageFlags.SUPPRESS_NOTIFICATIONS) &&
          ti.push((0, l.jsx)(C.default, {}, "suppress-notifications")),
          e.isPoll() &&
            ti.push(
              (0, l.jsx)(w.default, { className: G.pollBadgeDefault }, "poll")
            );
        let tl = {};
        (tl[D.UsernameDecorationTypes.SYSTEM_TAG] = q),
          (tl[D.UsernameDecorationTypes.BADGES] = J);
        let tr = H(t, A, tl),
          ta = (0, g.getMessageUsernameId)(e, p),
          tn = (0, g.getMessageTimestampId)(e),
          ts = N ? "".concat(ta) : "".concat(ta, " ").concat(tn),
          to =
            (null == i ? void 0 : i.state) === v.ReferencedMessageState.LOADED
              ? (0, g.getMessageReplyId)(e)
              : void 0;
        return (0, l.jsx)(z, {
          message: e,
          avatar: W,
          username: (0, l.jsxs)(l.Fragment, {
            children: [
              V &&
                (0, l.jsx)(d.Tooltip, {
                  text: k.default.Messages
                    .GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                  children: t =>
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(M.default, {
                          ...t,
                          width: 12,
                          height: 12,
                          className: a
                            ? G.compactCommunicationDisabled
                            : G.communicationDisabled,
                        }),
                        (0, l.jsx)(d.HiddenVisually, {
                          children:
                            k.default.Messages
                              .GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE,
                        }),
                      ],
                    }),
                }),
              tr,
            ],
          }),
          usernameSpanId: (0, g.getMessageUsernameId)(e, p),
          usernameClassName: n(G.headerText, {
            [G.hasRoleIcon]: null != X,
            [G.hasBadges]: null != q || ti.length > 0,
          }),
          compact: a,
          showTimestamp: !0 !== N,
          showTimestampOnHover: c,
          ariaLabelledBy: ts,
          ariaDescribedBy: to,
          className: y,
          badges: ti,
        });
      }
    },
    902768: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          BellZIcon: function () {
            return n;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("669491"),
        a = i("82169");
      let n = t => {
        let {
          width: e = 24,
          height: i = 24,
          color: n = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...o
        } = t;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M22.07 3.29 18.68 7h2.82c.28 0 .5.23.5.5v1a.5.5 0 0 1-.5.5h-5.33a.5.5 0 0 1-.5-.5v-1a1 1 0 0 1 .21-.63l1.1-1.38 1.99-2.5H16.5a.5.5 0 0 1-.5-.5V1.5c0-.28.22-.5.5-.5h5.33c.28 0 .5.22.5.5v1.11a1 1 0 0 1-.26.68Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M19 11.5a.5.5 0 0 0-.5-.5h-2.33a2.5 2.5 0 0 1-2.5-2.5v-1a3 3 0 0 1 .65-1.87l.48-.6c.18-.23.12-.57-.08-.78a2.5 2.5 0 0 1-.7-1.49.94.94 0 0 0-.07-.24 2 2 0 0 0-3.87-.07.62.62 0 0 1-.39.44A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .67.34 1.29.95 1.56 1.31.6 4 1.51 8.05 1.51 4.05 0 6.74-.91 8.05-1.5.61-.28.95-.9.95-1.57v-.28a3 3 0 0 0-.77-2l-1.1-1.23a.5.5 0 0 1-.13-.33v-.09ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z",
              className: s,
            }),
          ],
        });
      };
    },
    220654: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          ClockWarningIcon: function () {
            return n;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("669491"),
        a = i("82169");
      let n = t => {
        let {
          width: e = 24,
          height: i = 24,
          color: n = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...o
        } = t;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M12 23c.08 0 .14-.08.11-.16a2.88 2.88 0 0 1 .29-2.31l2.2-3.85c.18-.3-.06-.73-.3-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l2.56 2.56c.08.08.22.08.28-.02l.36-.64a3.06 3.06 0 0 1 5.3 0l.3.54c.22.38.78.31.86-.12A11 11 0 1 0 12 23Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: s,
            }),
          ],
        });
      };
    },
    720167: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          NewUserIcon: function () {
            return n;
          },
        });
      var l = i("37983");
      i("884691");
      var r = i("669491"),
        a = i("82169");
      let n = t => {
        let {
          width: e = 24,
          height: i = 24,
          color: n = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...o
        } = t;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M11.55 14.4c.28.17.62.17.9 0 1.6-.96 6.88-4.46 6.88-8.57A3.83 3.83 0 0 0 15.5 2c-1.56 0-2.58.6-3.5 1.5A4.66 4.66 0 0 0 8.5 2a3.83 3.83 0 0 0-3.83 3.83c0 4.1 5.29 7.61 6.88 8.57Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M3.11 14.86a1 1 0 0 0-.83 1.24l.23.89a6 6 0 0 0 6.46 4.45l2.03-.22V22a1 1 0 1 0 2 0v-.78l2.03.22A6 6 0 0 0 21.5 17l.23-.89a1 1 0 0 0-.83-1.24l-2.05-.29a6 6 0 0 0-6.1 3.07L12 19l-.74-1.36a6 6 0 0 0-6.1-3.07l-2.05.29ZM2.93 9.4a.6.6 0 0 1 1.14 0l.1.25a2 2 0 0 0 1.18 1.19l.25.1a.6.6 0 0 1 0 1.13l-.25.1a2 2 0 0 0-1.19 1.18l-.1.25a.6.6 0 0 1-1.13 0l-.1-.25a2 2 0 0 0-1.18-1.19l-.25-.1a.6.6 0 0 1 0-1.13l.25-.1a2 2 0 0 0 1.19-1.18l.1-.25ZM21.46 9.82a.49.49 0 0 0-.92 0v.03a2 2 0 0 1-1.19 1.18l-.03.01a.49.49 0 0 0 0 .92h.03a2 2 0 0 1 1.18 1.19l.01.03c.16.43.76.43.92 0v-.03a2 2 0 0 1 1.19-1.18l.03-.01a.49.49 0 0 0 0-.92h-.03a2 2 0 0 1-1.18-1.19l-.01-.03Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=34db373037396b7c2c36.js.map
