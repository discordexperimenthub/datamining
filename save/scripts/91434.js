(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91434"],
  {
    2760: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        }),
        s("702976"),
        s("424973");
      var a = s("37983");
      s("884691");
      var l = s("77078"),
        i = s("291373"),
        r = s("782340"),
        o = s("105608");
      function n(e) {
        let { content: t, heading: s } = e;
        return (0, a.jsxs)("div", {
          className: o.row,
          children: [
            null != s
              ? (0, a.jsx)(l.Heading, {
                  className: o.heading,
                  variant: "text-sm/normal",
                  children: s,
                })
              : null,
            (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              children: t,
            }),
          ],
        });
      }
      function u(e) {
        let { flags: t, listScrollerStyle: s } = e,
          {
            hasMessageContent: u,
            hasGuildPresences: d,
            hasGuildMembers: c,
          } = (0, i.useBotDataAccess)({ flags: t });
        if (null == t) return null;
        let f = [];
        return (
          u &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  r.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                content:
                  r.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              })
            ),
          d &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  r.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                content:
                  r.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              })
            ),
          c &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  r.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                content: r.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              })
            ),
          f.length > 0 &&
            f.push(
              (0, a.jsx)("div", {
                className: o.divider,
                children: (0, a.jsx)(l.FormDivider, {}),
              })
            ),
          f.push(
            (0, a.jsx)(n, {
              content: r.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                helpCenterUrl:
                  "https://support.discord.com/hc/articles/7933951485975",
              }),
            })
          ),
          (0, a.jsx)(l.ScrollerThin, { className: s, children: f })
        );
      }
    },
    656416: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        r = s("77078"),
        o = s("463848"),
        n = s("373469"),
        u = s("824563"),
        d = s("765698"),
        c = s("453649"),
        f = s("49111"),
        S = s("251300"),
        m = s("155502");
      function E(e) {
        let { user: t } = e,
          s = (0, i.useStateFromStores)(
            [n.default],
            () => null != n.default.getAnyStreamForUser(t.id)
          ),
          E = (0, i.useStateFromStores)([u.default], () =>
            u.default.getActivities(t.id)
          ),
          T = l.useMemo(
            () => E.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS),
            [E]
          ),
          N = E.some(e => e.type === f.ActivityTypes.HANG_STATUS),
          p = l.useMemo(
            () => (s ? T.find(e => e.type === f.ActivityTypes.PLAYING) : null),
            [T, s]
          ),
          x = l.useMemo(() => T.filter(e => e !== p), [p, T]),
          v = (0, c.useGetVoiceChannelInfoForVoiceActivitySection)(t.id),
          A = null != v && !s && !N,
          { showVoiceActivityInProfile: _ } =
            d.VoiceActivityProfileExperiment.useExperiment(
              { location: "user profile modal" },
              { autoTrackExposure: A }
            ),
          h = {
            location: {
              page: f.AnalyticsPages.USER_PROFILE,
              section: f.AnalyticsSections.PROFILE_MODAL,
            },
          };
        return (0, a.jsxs)(r.ScrollerThin, {
          className: m.listScroller,
          fade: !0,
          children: [
            _ && A
              ? (0, a.jsx)("div", {
                  className: S.voiceActivity,
                  children: (0, a.jsx)(c.default, {
                    ...v,
                    color: S.actionColor,
                  }),
                })
              : null,
            s
              ? (0, a.jsx)(o.default, {
                  type: o.UserActivityTypes.PROFILE_V2,
                  user: t,
                  source: "Profile Modal",
                  className: S.userProfileActivity,
                  activity: p,
                  actionColor: S.actionColor,
                  analyticsParams: h,
                })
              : null,
            x.map(e =>
              (0, a.jsx)(
                o.default,
                {
                  type: o.UserActivityTypes.PROFILE_V2,
                  activity: e,
                  user: t,
                  useStoreStream: !1,
                  source: "Profile Modal",
                  className: S.userProfileActivity,
                  actionColor: S.actionColor,
                  analyticsParams: h,
                },
                ""
                  .concat(e.application_id, "-")
                  .concat(e.session_id, "-")
                  .concat(e.name)
              )
            ),
          ],
        });
      }
    },
    821721: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("702976");
      var a = s("37983");
      s("884691");
      var l = s("446674"),
        i = s("2760"),
        r = s("713135"),
        o = s("155502");
      function n(e) {
        var t;
        let { user: s } = e,
          n =
            null ===
              (t = (0, l.useStateFromStores)([r.default], () =>
                r.default.getUserProfile(s.id)
              )) || void 0 === t
              ? void 0
              : t.application;
        return (0, a.jsx)(i.default, {
          flags: null == n ? void 0 : n.flags,
          listScrollerStyle: o.listScroller,
        });
      }
    },
    717226: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        i = s.n(l),
        r = s("77078"),
        o = s("49111"),
        n = s("782340"),
        u = s("124085");
      function d(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(r.Button, {
          ...s,
          look: r.Button.Looks.FILLED,
          size: r.Button.Sizes.SMALL,
          className: i(u.actionButton, t),
        });
      }
      function c(e) {
        let {
          isCurrentUser: t,
          user: s,
          relationshipType: l,
          onAddFriend: i,
          onIgnoreFriend: c,
          onSendMessage: f,
        } = e;
        return t || l === o.RelationshipTypes.BLOCKED
          ? null
          : l === o.RelationshipTypes.FRIEND || s.bot
            ? (0, a.jsx)(d, {
                color: r.Button.Colors.GREEN,
                onClick: f,
                children: n.default.Messages.SEND_MESSAGE,
              })
            : l === o.RelationshipTypes.PENDING_OUTGOING
              ? (0, a.jsx)(d, {
                  color: r.Button.Colors.GREEN,
                  disabled: !0,
                  children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER,
                })
              : l === o.RelationshipTypes.PENDING_INCOMING
                ? (0, a.jsxs)("div", {
                    className: u.pendingIncoming,
                    children: [
                      (0, a.jsx)(d, {
                        color: r.Button.Colors.GREEN,
                        onClick: i,
                        children: n.default.Messages.FRIEND_REQUEST_ACCEPT,
                      }),
                      (0, a.jsx)(d, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: c,
                        className: u.actionRightButton,
                        children: n.default.Messages.FRIEND_REQUEST_IGNORE,
                      }),
                    ],
                  })
                : (0, a.jsx)(d, {
                    color: r.Button.Colors.GREEN,
                    onClick: i,
                    children: n.default.Messages.ADD_FRIEND_BUTTON,
                  });
      }
    },
    869250: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return v;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        r = s("77078"),
        o = s("910330"),
        n = s("376556"),
        u = s("572943"),
        d = s("915639"),
        c = s("102985"),
        f = s("713135"),
        S = s("906889"),
        m = s("485422"),
        E = s("880114"),
        T = s("824140"),
        N = s("751906"),
        p = s("782340"),
        x = s("591572");
      function v(e) {
        var t;
        let {
            user: s,
            displayProfile: v,
            autoFocusNote: A = !1,
            scrollToConnections: _ = !1,
          } = e,
          h = (0, u.usePlatformAllowed)({ forUserProfile: !0 }),
          I = (0, i.useStateFromStores)([f.default], () => {
            var e, t;
            return null !==
              (t =
                null === (e = f.default.getUserProfile(s.id)) || void 0 === e
                  ? void 0
                  : e.connectedAccounts) && void 0 !== t
              ? t
              : [];
          }),
          U = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.hidePersonalInformation
          ),
          { profileTheme: C } = (0, S.default)(s, v),
          j = (0, i.useStateFromStores)([d.default], () => d.default.locale),
          y = l.useMemo(
            () =>
              I.filter(e => {
                let t = n.default.get(e.type);
                return null != t && h(t);
              }),
            [I, h]
          ),
          M = l.useRef(null);
        return (l.useLayoutEffect(() => {
          if (_) {
            var e;
            null == M ||
              null === (e = M.current) ||
              void 0 === e ||
              e.scrollIntoView();
          }
        }, [_]),
        U)
          ? (0, a.jsx)(N.default, {})
          : (0, a.jsxs)(r.ScrollerThin, {
              fade: !0,
              className: x.infoScroller,
              children: [
                (0, a.jsxs)("div", {
                  className: x.userInfoSection,
                  children: [
                    (null == v ? void 0 : v.bio) != null &&
                      (null == v ? void 0 : v.bio) !== "" &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(r.Heading, {
                            variant: "eyebrow",
                            className: x.userInfoSectionHeader,
                            children: p.default.Messages.USER_PROFILE_ABOUT_ME,
                          }),
                          (0, a.jsx)(m.default, {
                            className: x.userInfoText,
                            userBio:
                              null !== (t = null == v ? void 0 : v.bio) &&
                              void 0 !== t
                                ? t
                                : "",
                          }),
                        ],
                      }),
                    (0, a.jsx)(E.default, {
                      userId: s.id,
                      headingClassName: x.userInfoSectionHeader,
                      textClassName: x.userInfoText,
                    }),
                    (0, a.jsx)(r.Heading, {
                      variant: "eyebrow",
                      className: x.userInfoSectionHeader,
                      children: p.default.Messages.NOTE,
                    }),
                    (0, a.jsx)(o.default, {
                      userId: s.id,
                      autoFocus: A,
                      className: x.note,
                    }),
                  ],
                }),
                (0, a.jsx)(T.ConnectedUserAccounts, {
                  ref: M,
                  connectedAccounts: y,
                  theme: C,
                  locale: j,
                  className: x.userInfoSection,
                  userId: s.id,
                }),
              ],
            });
      }
    },
    279286: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return F;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        r = s("77078"),
        o = s("901582"),
        n = s("252744"),
        u = s("750560"),
        d = s("502651"),
        c = s("812204"),
        f = s("685665"),
        S = s("635471"),
        m = s("373469"),
        E = s("271938"),
        T = s("824563"),
        N = s("697218"),
        p = s("337487"),
        x = s("713135"),
        v = s("765698"),
        A = s("217513"),
        _ = s("228424"),
        h = s("641055"),
        I = s("430312"),
        U = s("453649"),
        C = s("481923"),
        j = s("759210"),
        y = s("347550"),
        M = s("590456"),
        g = s("49111"),
        R = s("782340"),
        P = s("593240");
      function O(e) {
        let {
            user: t,
            isCurrentUser: s,
            section: o,
            setSection: n,
            hasActivity: u,
          } = e,
          d = (0, i.useStateFromStores)([x.default], () => {
            var e, s;
            return (
              (null === (s = x.default.getUserProfile(t.id)) || void 0 === s
                ? void 0
                : null === (e = s.application) || void 0 === e
                  ? void 0
                  : e.id) != null
            );
          }),
          [f, S] = (0, _.useMutualFriends)(t),
          m = (0, i.useStateFromStores)([x.default], () =>
            x.default.getMutualGuilds(t.id)
          ),
          E = t.bot || s,
          { enabled: T } = (0, p.useProfileMutualsExperiment)({
            autoTrackExposure: !0,
            location: c.default.PROFILE_MODAL,
            disable: E,
          }),
          N = l.useMemo(() => {
            if (T) {
              var e;
              return R.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
                count: "".concat(
                  null !== (e = null == S ? void 0 : S.length) && void 0 !== e
                    ? e
                    : 0
                ),
              });
            }
            return R.default.Messages.MUTUAL_FRIENDS;
          }, [T, S]),
          v = l.useMemo(() => {
            if (T) {
              var e;
              return R.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
                count: "".concat(
                  null !== (e = null == m ? void 0 : m.length) && void 0 !== e
                    ? e
                    : 0
                ),
              });
            }
            return R.default.Messages.MUTUAL_GUILDS;
          }, [T, m]);
        return (0, a.jsx)("div", {
          className: P.tabBarContainer,
          children: (0, a.jsxs)(r.TabBar, {
            selectedItem: o,
            type: "top",
            onItemSelect: n,
            className: P.tabBar,
            children: [
              !t.isNonUserBot() || t.isClyde()
                ? (0, a.jsx)(r.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.UserProfileSections.USER_INFO,
                    children: R.default.Messages.USER_INFO,
                  })
                : null,
              !t.bot && u
                ? (0, a.jsx)(r.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.UserProfileSections.ACTIVITY,
                    children: R.default.Messages.USER_PROFILE_ACTIVITY,
                  })
                : null,
              t.bot || s
                ? null
                : (0, a.jsx)(r.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.UserProfileSections.MUTUAL_FRIENDS,
                    children: N,
                  }),
              s || t.isClyde()
                ? null
                : (0, a.jsx)(r.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.UserProfileSections.MUTUAL_GUILDS,
                    children: v,
                  }),
              t.bot && d
                ? (0, a.jsx)(r.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.UserProfileSections.BOT_DATA_ACCESS,
                    children: R.default.Messages.BOTS_DATA_ACCESS_TAB,
                  })
                : null,
            ],
          }),
        });
      }
      function F(e) {
        var t, s;
        let {
            user: p,
            guildId: x,
            channelId: _,
            friendToken: F,
            autoFocusNote: D,
            initialSection: B = M.UserProfileSections.USER_INFO,
            transitionState: L,
            onClose: b,
          } = e,
          { AnalyticsLocationProvider: G } = (0, f.default)(
            c.default.PROFILE_MODAL
          ),
          k =
            null !==
              (t = (0, i.useStateFromStores)([N.default], () =>
                N.default.getUser(p.id)
              )) && void 0 !== t
              ? t
              : p,
          H = (0, A.default)(
            null !== (s = null == k ? void 0 : k.id) && void 0 !== s ? s : ""
          );
        (0, u.useSubscribeGuildMembers)({ [x]: [k.id] });
        let w = (0, i.useStateFromStores)(
            [m.default],
            () => null != m.default.getAnyStreamForUser(k.id)
          ),
          V = (0, i.useStateFromStores)([T.default], () =>
            T.default.findActivity(
              k.id,
              e => e.type !== g.ActivityTypes.CUSTOM_STATUS
            )
          ),
          z = (0, U.useGetVoiceChannelInfoForVoiceActivitySection)(k.id, x),
          [Y, W] = l.useState(!1),
          [K, Z] = l.useState(
            k.isNonUserBot() && !k.isClyde()
              ? M.UserProfileSections.MUTUAL_GUILDS
              : B
          ),
          Q = (0, i.useStateFromStores)(
            [E.default],
            () => E.default.getId() === k.id
          ),
          { showVoiceActivityInProfile: q } =
            v.VoiceActivityProfileExperiment.useExperiment(
              { location: "user profile modal container" },
              { autoTrackExposure: !1 }
            ),
          J = null != V || w || (null != z && q),
          X = !Q || J,
          $ = l.createRef(),
          ee = (0, n.default)($);
        !J &&
          K === M.UserProfileSections.ACTIVITY &&
          Z(M.UserProfileSections.USER_INFO);
        let et = l.useCallback(e => {
            W(!0), Z(e);
          }, []),
          es = null == H ? void 0 : H.profileEffectId;
        return (0, a.jsx)(G, {
          children: (0, a.jsx)(o.default, {
            section: g.AnalyticsSections.PROFILE_MODAL,
            children: (0, a.jsxs)(r.ModalRoot, {
              transitionState: L,
              className: P.root,
              "aria-label": R.default.Messages.USER_PROFILE_MODAL,
              children: [
                (0, a.jsx)("div", {
                  ref: $,
                  children: (0, a.jsxs)(I.default, {
                    user: k,
                    profileType: M.UserProfileTypes.MODAL,
                    children: [
                      (0, a.jsx)("div", {
                        className: P.topSection,
                        children: (0, a.jsx)(j.default, {
                          displayProfile: H,
                          user: k,
                          friendToken: F,
                          onClose: b,
                          isStreaming: (0, d.default)(V),
                          guildId: x,
                          channelId: _,
                          hasProfileEffect: null != es,
                        }),
                      }),
                      (0, a.jsxs)(I.default.Inner, {
                        children: [
                          L === r.ModalTransitionState.ENTERED &&
                            (0, a.jsx)(h.default, { onTooltipClose: b }),
                          (0, a.jsxs)("div", {
                            className: P.body,
                            children: [
                              (0, a.jsx)(y.default, {
                                user: k,
                                displayProfile: H,
                              }),
                              X
                                ? (0, a.jsx)(O, {
                                    user: k,
                                    section:
                                      K ===
                                      M.UserProfileSections
                                        .USER_INFO_CONNECTIONS
                                        ? M.UserProfileSections.USER_INFO
                                        : K,
                                    setSection: et,
                                    hasActivity: J,
                                    isCurrentUser: Q,
                                  })
                                : (0, a.jsx)("div", { className: P.divider }),
                              (0, a.jsx)(C.default, {
                                displayProfile: H,
                                user: k,
                                autoFocusNote: D && !Y,
                                selectedSection: K,
                                onClose: b,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                null != es &&
                  (0, a.jsx)(S.default, {
                    profileEffectId: es,
                    bannerAdjustment: 0,
                    isHovering: ee,
                  }),
              ],
            }),
          }),
        });
      }
    },
    481923: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("656416"),
        i = s("821721"),
        r = s("869250"),
        o = s("69682"),
        n = s("446509"),
        u = s("590456");
      function d(e) {
        let {
          displayProfile: t,
          user: s,
          selectedSection: d,
          autoFocusNote: c,
          onClose: f,
        } = e;
        switch (d) {
          case u.UserProfileSections.ACTIVITY:
            return (0, a.jsx)(l.default, { user: s });
          case u.UserProfileSections.MUTUAL_GUILDS:
            return (0, a.jsx)(n.default, { user: s, onClose: f });
          case u.UserProfileSections.MUTUAL_FRIENDS:
            return (0, a.jsx)(o.default, { user: s, onClose: f });
          case u.UserProfileSections.BOT_DATA_ACCESS:
            return (0, a.jsx)(i.default, { user: s });
          case u.UserProfileSections.USER_INFO_CONNECTIONS:
          case u.UserProfileSections.USER_INFO:
          default:
            return (0, a.jsx)(r.default, {
              displayProfile: t,
              autoFocusNote: c,
              user: s,
              scrollToConnections:
                d === u.UserProfileSections.USER_INFO_CONNECTIONS,
            });
        }
      }
    },
    759210: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return F;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        r = s("669491"),
        o = s("77078"),
        n = s("450911"),
        u = s("272030"),
        d = s("54239"),
        c = s("736964"),
        f = s("377114"),
        S = s("824794"),
        m = s("271938"),
        E = s("824563"),
        T = s("27618"),
        N = s("663745"),
        p = s("423487"),
        x = s("50885"),
        v = s("713135"),
        A = s("106435"),
        _ = s("906889"),
        h = s("289918"),
        I = s("609734"),
        U = s("590006"),
        C = s("717226"),
        j = s("590456"),
        y = s("49111"),
        M = s("843455"),
        g = s("782340"),
        R = s("431517");
      let P = o.AvatarSizes.SIZE_120,
        O = x.default.getEnableHardwareAcceleration()
          ? o.AnimatedAvatar
          : o.Avatar;
      function F(e) {
        let {
            displayProfile: t,
            user: x,
            guildId: F,
            channelId: D,
            friendToken: B,
            isStreaming: L,
            hasProfileEffect: b,
            onClose: G,
          } = e,
          k = (0, i.useStateFromStores)([T.default], () =>
            T.default.getRelationshipType(x.id)
          ),
          H = (0, i.useStateFromStores)([E.default], () =>
            E.default.isMobileOnline(x.id)
          ),
          w = (0, i.useStateFromStores)([E.default], () =>
            E.default.getStatus(x.id)
          ),
          V = (0, i.useStateFromStores)([v.default], () =>
            v.default.getUserProfile(x.id)
          ),
          z = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.getId() === x.id
          ),
          { profileTheme: Y } = (0, _.default)(x, t),
          {
            avatarSrc: W,
            eventHandlers: K,
            avatarDecorationSrc: Z,
          } = (0, A.default)({ user: x, size: P }),
          Q = l.useMemo(
            () => (0, S.shouldDisableUserPresenceInChannel)(x, D),
            [x, D]
          );
        function q() {
          G(), (0, d.popLayer)();
        }
        function J() {
          c.default.removeFriend(x.id, { location: "User Profile" });
        }
        function X(e) {
          n.default.openPrivateChannel(x.id, !1, !1, e), q();
        }
        function $() {
          try {
            c.default.addRelationship({
              userId: x.id,
              context: { location: "User Profile" },
              type: y.RelationshipTypes.BLOCKED,
            });
          } catch (e) {
            q();
          }
        }
        function ee() {
          let e = "@me" === F ? void 0 : F;
          (0, f.showReportModalForUser)(x, e);
        }
        return (0, a.jsxs)("header", {
          children: [
            (0, a.jsx)(h.default, {
              displayProfile: t,
              onClose: q,
              user: x,
              profileType: j.UserProfileTypes.MODAL,
              hasProfileEffect: b,
            }),
            (0, a.jsxs)("div", {
              className: R.header,
              children: [
                (0, a.jsx)("div", {
                  ...K,
                  children: (0, a.jsx)(O, {
                    src: W,
                    avatarDecoration: Z,
                    size: P,
                    className: R.avatar,
                    status: Q
                      ? M.StatusTypes.UNKNOWN
                      : L
                        ? M.StatusTypes.STREAMING
                        : w,
                    statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
                    isMobile: H,
                    statusTooltip: !0,
                    "aria-label": x.username,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: R.headerTop,
                  children: [
                    (null == V ? void 0 : V.profileFetchFailed) && !x.isClyde()
                      ? (0, a.jsx)(o.Tooltip, {
                          text: g.default.Messages.USER_PROFILE_LOAD_ERROR,
                          spacing: 20,
                          children: e =>
                            (0, a.jsx)(p.default, {
                              ...e,
                              className: R.warningCircleIcon,
                              color: r.default.unsafe_rawColors.YELLOW_300.css,
                            }),
                        })
                      : (0, a.jsx)(U.default, {
                          user: x,
                          className: R.badgeList,
                          guildId: F,
                          size: U.BadgeSizes.SIZE_24,
                          shrinkAtCount: 8,
                          shrinkToSize: U.BadgeSizes.SIZE_18,
                        }),
                    (0, a.jsxs)("div", {
                      className: R.relationshipButtons,
                      children: [
                        (0, a.jsx)(I.default, {
                          className: R.applicationInstallButton,
                          application: null == V ? void 0 : V.application,
                        }),
                        (0, a.jsx)(C.default, {
                          user: x,
                          isCurrentUser: z,
                          relationshipType: k,
                          onAddFriend: function () {
                            try {
                              c.default.addRelationship({
                                userId: x.id,
                                context: { location: "User Profile" },
                                type: void 0,
                                friendToken: B,
                              });
                            } catch (e) {
                              q();
                            }
                          },
                          onIgnoreFriend: function () {
                            c.default.cancelFriendRequest(x.id, {
                              location: "User Profile",
                            });
                          },
                          onSendMessage: () =>
                            X("User Profile Modal - Send Message Button"),
                        }),
                        z || x.isNonUserBot()
                          ? null
                          : (0, a.jsx)(o.Clickable, {
                              focusProps: { offset: { left: 8 } },
                              onClick: function (e) {
                                (0, u.openContextMenuLazy)(e, async () => {
                                  let { default: e } = await s
                                    .el("487956")
                                    .then(s.bind(s, "487956"));
                                  return t =>
                                    (0, a.jsx)(e, {
                                      ...t,
                                      relationshipType: k,
                                      onRemoveFriend: J,
                                      onBlock: $,
                                      onReport: ee,
                                      onMessage: () =>
                                        X("User Profile Modal - Context Menu"),
                                      user: x,
                                    });
                                });
                              },
                              children: (0, a.jsx)(N.default, {
                                className: R.additionalActionsIcon,
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    347550: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        i = s.n(l),
        r = s("446674"),
        o = s("77078"),
        n = s("145079"),
        u = s("775377"),
        d = s("824563"),
        c = s("158998"),
        f = s("49111"),
        S = s("782340"),
        m = s("473899");
      function E(e) {
        let { user: t, displayProfile: s } = e,
          l = (0, r.useStateFromStores)([d.default], () =>
            d.default.findActivity(
              t.id,
              e => e.type === f.ActivityTypes.CUSTOM_STATUS
            )
          ),
          E = c.default.getName(t);
        return (0, a.jsxs)("div", {
          className: m.container,
          children: [
            null == E &&
              (0, a.jsx)(n.default, {
                user: t,
                className: m.nameTag,
                usernameClass: m.username,
                discriminatorClass: m.discriminator,
              }),
            null != E &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(o.Text, {
                    variant: "text-lg/semibold",
                    style: { marginRight: "12px" },
                    children: E,
                  }),
                  (0, a.jsx)(n.default, {
                    user: t,
                    forceUsername: !0,
                    usernameClass: m.discriminator,
                    discriminatorClass: m.discriminator,
                    className: i(m.nameTag, m.nameTagSmall),
                  }),
                ],
              }),
            (null == s ? void 0 : s.pronouns) != null &&
              (null == s ? void 0 : s.pronouns) !== "" &&
              (0, a.jsx)(o.Tooltip, {
                text: S.default.Messages.USER_PROFILE_PRONOUNS,
                children: e =>
                  (0, a.jsx)(o.Text, {
                    ...e,
                    variant: "text-sm/normal",
                    className: i(m.pronouns, m.nameTagSmall),
                    children: s.pronouns,
                  }),
              }),
            null != l
              ? (0, a.jsx)("div", {
                  className: m.customStatusActivity,
                  children: (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: m.customStatusText,
                    children: (0, a.jsx)(u.default, {
                      activity: l,
                      className: m.customStatus,
                      emojiClassName: m.customStatusEmoji,
                      soloEmojiClassName: m.customStatusSoloEmoji,
                    }),
                  }),
                })
              : null,
          ],
        });
      }
    },
    751906: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("782340"),
        i = s("155502");
      function r() {
        return (0, a.jsxs)("div", {
          className: i.empty,
          children: [
            (0, a.jsx)("div", { className: i.emptyIconStreamerMode }),
            (0, a.jsx)("div", {
              className: i.emptyText,
              children: l.default.Messages.STREAMER_MODE_ENABLED,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=96ddb6ee30d6495f88b1.js.map
