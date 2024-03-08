(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65937"],
  {
    70919: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchRoleConnectionsConfiguration: function () {
            return i;
          },
          putRoleConnectionsConfigurations: function () {
            return c;
          },
          fetchUserApplicationRoleConnections: function () {
            return r;
          },
        });
      var l = n("872717"),
        a = n("913144"),
        o = n("895026"),
        s = n("49111");
      function i(e, t) {
        l.default
          .get({ url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t) })
          .then(e => {
            let n = [];
            e.body.length > 0 &&
              (n = e.body.map(e =>
                e.map(e => ({
                  connectionType: e.connection_type,
                  connectionMetadataField: e.connection_metadata_field,
                  applicationId: e.application_id,
                  operator: e.operator,
                  value: e.value,
                }))
              )),
              a.default.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: t,
                roleConnectionConfigurations: n,
              });
          })
          .catch(() => {});
      }
      async function c(e, t, n) {
        let i = n.map(e =>
            e.map(e => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            }))
          ),
          c = await l.default
            .put({
              url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
              body: 0 === i.length ? [] : i,
              oldFormErrors: !0,
            })
            .then(e => {
              let t = [];
              return (
                e.body.length > 0 &&
                  (t = e.body.map(e =>
                    e.map(e => ({
                      connectionType: e.connection_type,
                      connectionMetadataField: e.connection_metadata_field,
                      applicationId: e.application_id,
                      operator: e.operator,
                      value: e.value,
                    }))
                  )),
                t
              );
            }),
          r = await (0, o.requestMembersForRole)(e, t, !1);
        null != r &&
          a.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: t,
            count: r,
          }),
          a.default.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: c,
          });
      }
      async function r() {
        let e = await l.default.get({
          url: s.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS,
        });
        return e.body;
      }
    },
    572579: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return et;
          },
        }),
        n("222007"),
        n("834022");
      var l,
        a,
        o = n("37983"),
        s = n("884691"),
        i = n("414456"),
        c = n.n(i),
        r = n("627445"),
        d = n.n(r),
        u = n("917351"),
        C = n.n(u),
        N = n("446674"),
        _ = n("669491"),
        T = n("819855"),
        O = n("77078"),
        E = n("619340"),
        f = n("851387"),
        h = n("79112"),
        S = n("308289"),
        m = n("841098"),
        p = n("376556"),
        A = n("716241"),
        x = n("98309"),
        I = n("419830"),
        M = n("824140"),
        v = n("915639"),
        L = n("766274"),
        g = n("271938"),
        j = n("42203"),
        y = n("47319"),
        R = n("26989"),
        U = n("957255"),
        D = n("79798"),
        P = n("461380"),
        G = n("36694"),
        k = n("925877"),
        b = n("68238"),
        F = n("599110"),
        w = n("70919"),
        B = n("535013"),
        H = n("526190"),
        V = n("602658"),
        Y = n("926994"),
        K = n("685058"),
        z = n("214509"),
        Q = n("49111"),
        X = n("782340"),
        Z = n("92007");
      function q(e) {
        let { platformType: t, className: n } = e,
          l = (0, m.default)(),
          a = p.default.get(t);
        return (0, o.jsx)("img", {
          src: (0, T.isThemeLight)(l) ? a.icon.lightSVG : a.icon.darkSVG,
          alt: "",
          className: c(Z.platformIcon, n),
        });
      }
      function W(e) {
        let { channel: t, className: n } = e,
          l = (0, I.getChannelIconComponent)(t);
        return (0, o.jsxs)("div", {
          className: c(Z.channelName, n),
          children: [
            null != l ? (0, o.jsx)(l, { className: Z.channelNameIcon }) : null,
            (0, o.jsx)(O.Heading, {
              variant: "heading-lg/semibold",
              color: "text-normal",
              className: Z.channelNameText,
              children: t.name,
            }),
          ],
        });
      }
      function J(e) {
        let t,
          {
            connectionType: n,
            connectionMetadataField: l,
            operator: a,
            value: s,
            result: i,
            description: c,
          } = e,
          r = null;
        if (null != c)
          switch (a) {
            case z.OperatorTypes.LESS_THAN:
              r = X.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: c,
                count: Math.max(0, Number(s) - 1),
              });
              break;
            case z.OperatorTypes.GREATER_THAN:
              r = X.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                description: c,
                count: Math.max(0, Number(s) + 1),
              });
              break;
            default:
              r = c;
          }
        else {
          let e;
          switch (a) {
            case z.OperatorTypes.EQUAL:
              (e =
                X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE),
                n === Q.PlatformTypes.PAYPAL &&
                  l === z.MetadataFields.PAYPAL_VERIFIED &&
                  (e =
                    X.default.Messages
                      .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
              break;
            case z.OperatorTypes.NOT_EQUAL:
              e =
                X.default.Messages
                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
              break;
            case z.OperatorTypes.LESS_THAN:
              e =
                X.default.Messages
                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
              break;
            case z.OperatorTypes.GREATER_THAN:
              e =
                X.default.Messages
                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
              break;
            case void 0:
            case null:
              return null;
          }
          if (
            null ==
            (r = (0, B.getConnectionsCheckText)({
              connectionType: n,
              connectionMetadataField: l,
              operator: a,
              operatorText: e,
              value: s,
            }))
          )
            return null;
        }
        return (
          (t = i ? "header-secondary" : "text-danger"),
          (0, o.jsx)(O.Text, {
            variant: "text-xs/normal",
            color: t,
            className: Z.connectionsCheck,
            children: r,
          })
        );
      }
      function $(e) {
        let {
            eligibilityStatesGroups: t,
            onPlatformConnect: n,
            onPlatformConnected: l,
          } = e,
          [a, i] = s.useState({}),
          [r, u] = s.useState(0),
          [N, T] = s.useState(null),
          [E, f] = s.useState(null),
          h = s.useMemo(() => C.flatten(t), [t]),
          m = s.useMemo(
            () =>
              C.groupBy(h, e =>
                ""
                  .concat(e.connection_type)
                  .concat(
                    null != e.application_id ? ":".concat(e.application_id) : ""
                  )
              ),
            [h]
          );
        s.useEffect(() => u(Date.now()), [h]),
          s.useEffect(() => {
            if (null == N) return;
            let e = m["".concat(N).concat(null != E ? ":".concat(E.id) : "")];
            if (null == e) return;
            let t = e.every(e => e.result);
            t && l(N, E);
          }, [m, N, E, l]);
        let A = (0, O.useToken)(_.default.unsafe_rawColors.GREEN_330).hex();
        return (0, o.jsx)(o.Fragment, {
          children: Object.keys(m)
            .sort((e, t) => {
              let n = m[e].every(e => e.result),
                l = m[t].every(e => e.result);
              return !0 === n && !1 === l ? 1 : !1 === n && !0 === l ? -1 : 0;
            })
            .map(e => {
              var t, l, s;
              let u, C, N;
              let _ = m[e],
                E = _.find(e => null == e.operator),
                h = _.filter(e => null != e.operator),
                x = (null == E || E.result) && h.every(e => e.result),
                I = _.find(e => null != e.application),
                M = p.default.get(e),
                v = null == I ? void 0 : I.application,
                g =
                  (null == v ? void 0 : v.bot) != null
                    ? new L.default(v.bot)
                    : null,
                j = B.officialApplicationIds.includes(
                  null !== (t = null == v ? void 0 : v.id) && void 0 !== t
                    ? t
                    : ""
                );
              j
                ? (u = (0, o.jsx)(H.default, {
                    className: Z.botTag,
                    color: A,
                    size: 16,
                  }))
                : null != g &&
                  (u = (0, o.jsx)(D.default, {
                    className: Z.botTag,
                    verified: g.isVerifiedBot(),
                  }));
              let y =
                  a[
                    null !== (l = null == M ? void 0 : M.type) && void 0 !== l
                      ? l
                      : z.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE
                  ],
                R = !x && null != y && y <= r;
              return (
                (C = x
                  ? (0, o.jsx)(G.default, {
                      className: Z.connectionsChecksGroupCheckmark,
                    })
                  : R
                    ? (0, o.jsx)(O.Button, {
                        size: O.Button.Sizes.TINY,
                        look: O.Button.Looks.LINK,
                        color: O.Button.Colors.LINK,
                        className: Z.connectionsChecksGroupRetryButton,
                        children: X.default.Messages.RETRY,
                      })
                    : (0, o.jsx)(P.default, {
                        direction: P.default.Directions.RIGHT,
                        className: Z.connectionsChecksGroupCaret,
                      })),
                (null == M ? void 0 : M.type) === Q.PlatformTypes.STEAM &&
                  (N = X.default.Messages.CONNECTIONS_STEAM_TOOLTIP),
                (0, o.jsxs)(
                  O.Clickable,
                  {
                    className: c(
                      Z.connectionsChecksGroup,
                      x ? Z.connectionsChecksGroupPassed : null
                    ),
                    onClick: x
                      ? void 0
                      : () => {
                          var e, t, l;
                          return (
                            (t =
                              null !== (e = null == M ? void 0 : M.type) &&
                              void 0 !== e
                                ? e
                                : z.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE),
                            (l = v),
                            void ((0, Y.default)(
                              t,
                              "Verified Roles Connect Accounts Modal",
                              null == l
                                ? void 0
                                : l.role_connections_verification_url
                            ),
                            i({ ...a, [t]: Date.now() }),
                            T(t),
                            f(null != l ? l : null),
                            n())
                          );
                        },
                    children: [
                      !x && R
                        ? (0, o.jsx)("div", {
                            className:
                              Z.connectionsChecksGroupRequirementsNotMet,
                            children: (0, o.jsx)(O.Text, {
                              variant: "text-xs/normal",
                              color: "always-white",
                              children:
                                X.default.Messages
                                  .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET,
                            }),
                          })
                        : null,
                      null != M
                        ? (0, o.jsx)(q, { platformType: M.type })
                        : null,
                      null != g ? (0, o.jsx)(S.default, { user: g }) : null,
                      (0, o.jsxs)("div", {
                        className: Z.connectionsChecksGroupTextContainer,
                        children: [
                          (0, o.jsxs)("div", {
                            className:
                              Z.connectionsChecksGroupTextNameContainer,
                            children: [
                              (0, o.jsx)(O.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children:
                                  null !== (s = null == M ? void 0 : M.name) &&
                                  void 0 !== s
                                    ? s
                                    : null == v
                                      ? void 0
                                      : v.name,
                              }),
                              u,
                              null != N
                                ? (0, o.jsx)(O.Tooltip, {
                                    text: N,
                                    children: e =>
                                      (0, o.jsx)(k.default, {
                                        ...e,
                                        className:
                                          Z.connectionsChecksGroupTextNameInfoIcon,
                                      }),
                                  })
                                : null,
                            ],
                          }),
                          h.map(e => {
                            let {
                              connection_type: t,
                              connection_metadata_field: n,
                              operator: l,
                              value: a,
                              result: s,
                              description: i,
                            } = e;
                            return (
                              d(null != n, "connectionMetadataField is null"),
                              d(null != l, "operator is null"),
                              d(null != a, "value is null"),
                              (0, o.jsx)(
                                J,
                                {
                                  connectionType: t,
                                  connectionMetadataField: n,
                                  operator: l,
                                  value: a,
                                  result: s,
                                  description: i,
                                },
                                n
                              )
                            );
                          }),
                        ],
                      }),
                      C,
                    ],
                  },
                  e
                )
              );
            }),
        });
      }
      function ee(e) {
        let t,
          n,
          l,
          {
            account: a,
            setShowPreviewInvisibleIcon: i,
            setShowPreviewMetadata: c,
          } = e,
          [r, d] = s.useState(a.friendSync),
          [u, C] = s.useState(a.showActivity),
          [N, _] = s.useState(1 === a.metadataVisibility),
          [T, f] = s.useState(1 === a.visibility);
        s.useEffect(() => {
          i(!T), c(N);
        }, []);
        let h = p.default.get(a.type);
        return (
          Q.FRIEND_SYNC_PLATFORM_TYPES.has(a.type) &&
            (t = (0, o.jsx)(O.FormSwitch, {
              className: Z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: r,
              onChange: e => {
                d(e), E.default.setFriendSync(a.type, a.id, e);
              },
              children: (0, o.jsx)(O.Text, {
                variant: "text-sm/semibold",
                children: X.default.Messages.SYNC_FRIENDS,
              }),
            })),
          Q.ACTIVITY_PLATFORM_TYPES.has(a.type) &&
            (n = (0, o.jsx)(O.FormSwitch, {
              className: Z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: u,
              onChange: e => {
                C(e), E.default.setShowActivity(a.type, a.id, e);
              },
              children: (0, o.jsx)(O.Text, {
                variant: "text-sm/semibold",
                children: X.default.Messages.DISPLAY_ACTIVITY.format({
                  platform: h.name,
                }),
              }),
            })),
          !0 === h.hasMetadata &&
            (l = (0, o.jsx)(O.FormSwitch, {
              className: Z.accountConnectedPrivacyOptionsSwitchItem,
              hideBorder: !0,
              value: N,
              disabled: !T,
              onChange: e => {
                c(e),
                  _(e),
                  E.default.setMetadataVisibility(a.type, a.id, e ? 1 : 0);
              },
              children: (0, o.jsx)(O.Text, {
                variant: "text-sm/semibold",
                children: X.default.Messages.DISPLAY_DETAILS_ON_PROFILE,
              }),
            })),
          (0, o.jsxs)("div", {
            className: Z.accountConnectedPrivacyOptionsContainer,
            children: [
              (0, o.jsx)(O.FormSwitch, {
                className: Z.accountConnectedPrivacyOptionsSwitchItem,
                hideBorder: !0,
                value: T,
                onChange: e => {
                  i(!e), f(e), E.default.setVisibility(a.type, a.id, e ? 1 : 0);
                },
                children: (0, o.jsx)(O.Text, {
                  variant: "text-sm/semibold",
                  children: X.default.Messages.DISPLAY_ON_PROFILE,
                }),
              }),
              l,
              n,
              t,
            ],
          })
        );
      }
      function et(e) {
        let { transitionState: t, onClose: n, guildId: l, role: a } = e,
          [i, c] = s.useState(0),
          [r, u] = s.useState(null),
          [C, _] = s.useState(!1),
          [T, E] = s.useState(!0),
          [S, I] = s.useState(!1),
          [L, D] = s.useState(!0),
          [P, G] = s.useState(!1),
          k = (0, N.useStateFromStores)([y.default], () =>
            y.default.getAccounts()
          ),
          B = (0, N.useStateFromStores)([g.default], () => g.default.getId()),
          [H, Y] = s.useState(null),
          [z, q] = s.useState(null),
          [J, et] = s.useState(null),
          en = (0, m.default)(),
          el = (0, N.useStateFromStores)([v.default], () => v.default.locale),
          ea = (0, N.useStateFromStores)([R.default], () =>
            R.default.getMember(l, B)
          ),
          eo = (0, N.useStateFromStores)([j.default], () =>
            j.default.getMutableGuildChannelsForGuild(l)
          ),
          es = Object.values(eo).filter(
            e =>
              U.default.can(Q.Permissions.VIEW_CHANNEL, e) &&
              U.default.can(Q.Permissions.SEND_MESSAGES, e) &&
              (0, x.default)(e).includes(a)
          );
        function ei() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          null == n || n(),
            e && (0, O.closeModal)(K.MODAL_KEY, O.DEFAULT_MODAL_CONTEXT);
        }
        function ec() {
          ei(!0), h.default.open(Q.UserSettingsSections.AUTHORIZED_APPS);
        }
        function er() {
          ei(!0), h.default.open(Q.UserSettingsSections.CONNECTIONS);
        }
        async function ed() {
          I(!0), await f.default.assignGuildRoleConnection(l, a.id);
        }
        function eu() {
          F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_STARTED, {
            role_id: a.id,
            ...(0, A.collectGuildAnalyticsMetadata)(l),
          });
        }
        function eC(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          Y(e),
            q(t),
            c(1),
            null != t &&
              (0, w.fetchUserApplicationRoleConnections)()
                .then(e => {
                  et(e);
                })
                .catch(() => {});
        }
        return (
          s.useEffect(() => {
            f.default.fetchGuildRoleConnectionsEligibility(l, a.id).then(e => {
              u(e), _(e.some(e => e.every(e => e.result))), E(!1);
            });
          }, [l, a.id, k]),
          s.useEffect(() => {
            F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_VIEWED, {
              role_id: a.id,
              ...(0, A.collectGuildAnalyticsMetadata)(l),
            });
          }, [l, a.id]),
          s.useEffect(() => {
            S &&
              null != ea &&
              ea.roles.includes(a.id) &&
              (I(!1),
              es.length > 0 ? c(2) : null == n || n(),
              F.default.track(Q.AnalyticEvents.PASSPORT_CHALLENGE_FINISHED, {
                role_id: a.id,
                ...(0, A.collectGuildAnalyticsMetadata)(l),
              }));
          }, [S, es.length, ea, l, a.id, n]),
          (0, o.jsxs)(O.ModalRoot, {
            size: O.ModalSize.MEDIUM,
            transitionState: t,
            "aria-label": X.default.Messages.CONNECT_ACCOUNT_TITLE,
            className: Z.modalRoot,
            children: [
              (function () {
                switch (i) {
                  case 0:
                    return (0, o.jsxs)(O.ModalHeader, {
                      className: Z.header,
                      separator: !1,
                      children: [
                        (0, o.jsx)("div", {
                          className: Z.headerText,
                          children: (0, o.jsx)(O.Heading, {
                            variant: "heading-xl/extrabold",
                            children: X.default.Messages.CONNECT_ACCOUNT_TITLE,
                          }),
                        }),
                        (0, o.jsx)(O.ModalCloseButton, { onClick: () => ei() }),
                      ],
                    });
                  case 1: {
                    var e, t;
                    d(null != H, "lastPlatformConnected is null");
                    let n =
                      null !== (t = null == z ? void 0 : z.name) && void 0 !== t
                        ? t
                        : null === (e = p.default.get(H)) || void 0 === e
                          ? void 0
                          : e.name;
                    return (0, o.jsxs)(O.ModalHeader, {
                      className: Z.header,
                      separator: !1,
                      children: [
                        (0, o.jsx)(O.Heading, {
                          variant: "heading-xl/extrabold",
                          className: Z.headerText,
                          children:
                            X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format(
                              { platformName: n }
                            ),
                        }),
                        (0, o.jsx)(O.ModalCloseButton, { onClick: () => ei() }),
                      ],
                    });
                  }
                  case 2:
                    return (0, o.jsxs)(O.ModalHeader, {
                      className: Z.header,
                      separator: !1,
                      children: [
                        (0, o.jsx)(O.Heading, {
                          variant: "heading-xl/extrabold",
                          className: Z.headerText,
                          children:
                            X.default.Messages
                              .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED,
                        }),
                        (0, o.jsx)(O.ModalCloseButton, {
                          onClick: () => ei(!0),
                        }),
                      ],
                    });
                  default:
                    return null;
                }
              })(),
              (0, o.jsx)(O.Sequencer, {
                step: i,
                steps: [0, 1, 2],
                children: (function () {
                  switch (i) {
                    case 0: {
                      let e = null != r && r.length > 1;
                      return (0, o.jsx)(O.ModalContent, {
                        children:
                          T || null == r
                            ? (0, o.jsx)(O.Spinner, {
                                className: Z.connectionsChecksGroups,
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)(O.Text, {
                                    variant: "text-md/medium",
                                    color: "header-secondary",
                                    children: e
                                      ? X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format()
                                      : X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format(),
                                  }),
                                  (0, o.jsx)(O.ScrollerThin, {
                                    className: Z.connectionsChecksGroups,
                                    children: (0, o.jsx)($, {
                                      eligibilityStatesGroups: r,
                                      onPlatformConnect: eu,
                                      onPlatformConnected: eC,
                                    }),
                                  }),
                                  (0, o.jsx)(O.Text, {
                                    variant: "text-xs/normal",
                                    className: Z.footerText,
                                    color: "header-secondary",
                                    children:
                                      X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format(
                                        {
                                          privacyPolicyUrl:
                                            Q.MarketingURLs.PRIVACY,
                                          onAuthorizedApplicationsClick: () =>
                                            ec(),
                                          onConnectionsClick: () => er(),
                                        }
                                      ),
                                  }),
                                ],
                              }),
                      });
                    }
                    case 1: {
                      d(null != H, "lastPlatformConnected is null");
                      let e = k.find(e => {
                          let { type: t } = e;
                          return H === t;
                        }),
                        t =
                          null == J
                            ? void 0
                            : J.find(e => {
                                let { application: t } = e;
                                return t.id === (null == z ? void 0 : z.id);
                              });
                      return (0, o.jsxs)(O.ModalContent, {
                        children: [
                          (0, o.jsx)(O.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children:
                              X.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format(
                                {
                                  privacyPolicyUrl: Q.MarketingURLs.PRIVACY,
                                  onAuthorizedApplicationsClick: () => ec(),
                                  onConnectionsClick: () => er(),
                                }
                              ),
                          }),
                          (0, o.jsx)("div", {
                            className: Z.accountConnectedContainer,
                            children:
                              null == e && null == t
                                ? (0, o.jsx)(O.Spinner, {
                                    className: Z.accountConnectedLoading,
                                  })
                                : (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      null != e
                                        ? (0, o.jsxs)(o.Fragment, {
                                            children: [
                                              (0, o.jsxs)("div", {
                                                className:
                                                  Z.accountConnectedContainerChild,
                                                children: [
                                                  (0, o.jsx)(O.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      X.default.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW,
                                                  }),
                                                  (0, o.jsx)(
                                                    M.ConnectedUserAccount,
                                                    {
                                                      connectedAccount: e,
                                                      userId: B,
                                                      theme: en,
                                                      locale: el,
                                                      className:
                                                        Z.accountConnectedPreviewConnectedUserAccount,
                                                      showMetadata: L,
                                                      showInvisibleIcon: P,
                                                    }
                                                  ),
                                                ],
                                              }),
                                              (0, o.jsxs)("div", {
                                                className:
                                                  Z.accountConnectedContainerChild,
                                                children: [
                                                  (0, o.jsx)(O.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      X.default.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY,
                                                  }),
                                                  (0, o.jsx)(ee, {
                                                    account: e,
                                                    setShowPreviewInvisibleIcon:
                                                      G,
                                                    setShowPreviewMetadata: D,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : null,
                                      null != t
                                        ? (0, o.jsxs)("div", {
                                            className:
                                              Z.accountConnectedContainerChild,
                                            children: [
                                              (0, o.jsxs)("div", {
                                                className:
                                                  Z.accountConnectedHeader,
                                                children: [
                                                  (0, o.jsx)(O.Text, {
                                                    variant: "eyebrow",
                                                    color: "header-secondary",
                                                    children:
                                                      X.default.Messages
                                                        .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW,
                                                  }),
                                                  (0, o.jsx)(O.Tooltip, {
                                                    text: X.default.Messages
                                                      .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                    children: e =>
                                                      (0, o.jsx)(b.default, {
                                                        ...e,
                                                      }),
                                                  }),
                                                ],
                                              }),
                                              (0, o.jsx)(
                                                M.ConnectedApplicationUserRoleAccount,
                                                {
                                                  applicationRoleConnection: t,
                                                  className:
                                                    Z.accountConnectedPreviewConnectedUserAccount,
                                                  locale: el,
                                                }
                                              ),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                          }),
                        ],
                      });
                    }
                    case 2:
                      return (0, o.jsxs)(O.ModalContent, {
                        children: [
                          (0, o.jsxs)("div", {
                            className: Z.roleGranted,
                            children: [
                              (0, o.jsx)(V.default, {
                                guildId: l,
                                className: Z.verifiedIcon,
                                role: a,
                                size: 24,
                              }),
                              (0, o.jsx)(O.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: Z.roleGrantedName,
                                children: a.name,
                              }),
                            ],
                          }),
                          (0, o.jsx)(O.ScrollerThin, {
                            className: Z.channelsGranted,
                            children: es.map(e =>
                              (0, o.jsx)(W, { channel: e }, e.id)
                            ),
                          }),
                        ],
                      });
                    default:
                      return null;
                  }
                })(),
              }),
              (function () {
                var e;
                let t =
                  null !==
                    (e =
                      null == r
                        ? void 0
                        : r.flat().some(e => null == e.application_id)) &&
                  void 0 !== e &&
                  e;
                switch (i) {
                  case 0:
                    return (0, o.jsxs)(O.ModalFooter, {
                      children: [
                        (0, o.jsx)(O.Button, {
                          color: O.ButtonColors.BRAND,
                          onClick: () => ed(),
                          disabled: T || !C || S,
                          children: X.default.Messages.FINISH,
                        }),
                        t
                          ? (0, o.jsx)("div", {
                              className: Z.manageConnectionsFooterButton,
                              children: (0, o.jsx)(O.Button, {
                                look: O.ButtonLooks.LINK,
                                color: O.ButtonColors.LINK,
                                onClick: er,
                                children:
                                  X.default.Messages
                                    .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS,
                              }),
                            })
                          : null,
                      ],
                    });
                  case 1:
                    return (0, o.jsx)(O.ModalFooter, {
                      children: (0, o.jsx)(O.Button, {
                        color: O.ButtonColors.BRAND,
                        onClick: () => c(0),
                        children: X.default.Messages.DONE,
                      }),
                    });
                  default:
                    return (0, o.jsxs)(O.ModalFooter, {
                      children: [
                        (0, o.jsx)(O.Button, {
                          color: O.ButtonColors.BRAND,
                          onClick: () => ei(!0),
                          children: X.default.Messages.CLOSE,
                        }),
                        t
                          ? (0, o.jsx)("div", {
                              className: Z.manageConnectionsFooterButton,
                              children: (0, o.jsx)(O.Button, {
                                look: O.ButtonLooks.LINK,
                                color: O.ButtonColors.LINK,
                                onClick: er,
                                children:
                                  X.default.Messages
                                    .CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS,
                              }),
                            })
                          : null,
                      ],
                    });
                }
              })(),
            ],
          })
        );
      }
      ((a = l || (l = {}))[(a.CHECKS_REQUIRED = 0)] = "CHECKS_REQUIRED"),
        (a[(a.ACCOUNT_CONNECTED = 1)] = "ACCOUNT_CONNECTED"),
        (a[(a.ROLE_GRANTED = 2)] = "ROLE_GRANTED");
    },
    685058: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MODAL_KEY: function () {
            return c;
          },
          openGuildRoleConnectionsModal: function () {
            return r;
          },
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        o = n("83900"),
        s = n("535013"),
        i = n("782340");
      let c = "guild-connection-roles";
      function r(e) {
        (0, a.openModalLazy)(
          async () => {
            let { default: t } = await n.el("918771").then(n.bind(n, "918771"));
            return n => (0, l.jsx)(t, { ...n, guildId: e });
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
      function d(e) {
        let t = (0, s.isVerifiedRolesChannelVisible)(e);
        return t
          ? (0, l.jsx)(a.MenuItem, {
              id: "guild-connection-roles",
              label: i.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
              icon: o.default,
              action: () => r(e.id),
            })
          : null;
      }
    },
    925877: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        o = n("225389"),
        s = n("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: o,
              ...i
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, s.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, l.jsx)("rect", { width: "24", height: "24" }),
                  (0, l.jsx)("path", {
                    fill: a,
                    className: o,
                    d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                    transform: "translate(2 2)",
                  }),
                ],
              }),
            });
          },
          o.CircleInformationIcon,
          void 0,
          { size: 16 }
        );
    },
  },
]);
//# sourceMappingURL=20b33f8c1dec51ce9e00.js.map
