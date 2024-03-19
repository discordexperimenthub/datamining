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
        o = s("782340"),
        r = s("105608");
      function n(e) {
        let { content: t, heading: s } = e;
        return (0, a.jsxs)("div", {
          className: r.row,
          children: [
            null != s
              ? (0, a.jsx)(l.Heading, {
                  className: r.heading,
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
            hasGuildPresences: c,
            hasGuildMembers: d,
          } = (0, i.useBotDataAccess)({ flags: t });
        if (null == t) return null;
        let f = [];
        return (
          u &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  o.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                content:
                  o.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              })
            ),
          c &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  o.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                content:
                  o.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              })
            ),
          d &&
            f.push(
              (0, a.jsx)(n, {
                heading:
                  o.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                content: o.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              })
            ),
          f.length > 0 &&
            f.push(
              (0, a.jsx)("div", {
                className: r.divider,
                children: (0, a.jsx)(l.FormDivider, {}),
              })
            ),
          f.push(
            (0, a.jsx)(n, {
              content: o.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
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
            return p;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        o = s("77078"),
        r = s("463848"),
        n = s("373469"),
        u = s("824563"),
        c = s("756507"),
        d = s("4462"),
        f = s("765698"),
        S = s("453649"),
        m = s("49111"),
        E = s("251300"),
        T = s("155502");
      function p(e) {
        let { user: t } = e,
          s = (0, i.useStateFromStores)(
            [n.default],
            () => null != n.default.getAnyStreamForUser(t.id)
          ),
          p = (0, i.useStateFromStores)([u.default], () =>
            u.default.getActivities(t.id)
          ),
          N = l.useMemo(
            () => p.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS),
            [p]
          ),
          _ = p.some(e => e.type === m.ActivityTypes.HANG_STATUS),
          A = l.useMemo(
            () => (s ? N.find(e => e.type === m.ActivityTypes.PLAYING) : null),
            [N, s]
          ),
          I = l.useMemo(() => N.filter(e => e !== A), [A, N]),
          v = (0, S.useGetVoiceChannelInfoForVoiceActivitySection)(t.id),
          x = null != v && !s && !_,
          { showVoiceActivityInProfile: U } =
            f.VoiceActivityProfileExperiment.useExperiment(
              { location: "user profile modal" },
              { autoTrackExposure: x }
            ),
          { trackUserProfileAction: h, ...C } = (0,
          c.useUserProfileAnalyticsContext)(),
          y = {
            location: {
              page: m.AnalyticsPages.USER_PROFILE,
              section: m.AnalyticsSections.PROFILE_MODAL,
            },
          };
        return (0, a.jsxs)(o.ScrollerThin, {
          className: T.listScroller,
          fade: !0,
          children: [
            U && x
              ? (0, a.jsx)("div", {
                  className: E.voiceActivity,
                  children: (0, a.jsx)(S.default, {
                    ...v,
                    color: E.actionColor,
                  }),
                })
              : null,
            s
              ? (0, a.jsx)(r.default, {
                  type: r.UserActivityTypes.PROFILE_V2,
                  user: t,
                  source: "Profile Modal",
                  className: E.userProfileActivity,
                  activity: A,
                  actionColor: E.actionColor,
                  analyticsParams: y,
                  onAction: () => {
                    h({ action: "JOIN_ACTIVITY" }),
                      (0, d.trackUserProfileActivityJoined)({
                        activityType: null == A ? void 0 : A.type,
                        applicationId: null == A ? void 0 : A.application_id,
                        ...C,
                      });
                  },
                })
              : null,
            I.map(e =>
              (0, a.jsx)(
                r.default,
                {
                  type: r.UserActivityTypes.PROFILE_V2,
                  activity: e,
                  user: t,
                  useStoreStream: !1,
                  source: "Profile Modal",
                  className: E.userProfileActivity,
                  actionColor: E.actionColor,
                  analyticsParams: y,
                  onAction: () => {
                    h({ action: "JOIN_ACTIVITY" }),
                      (0, d.trackUserProfileActivityJoined)({
                        activityType: e.type,
                        applicationId: e.application_id,
                        ...C,
                      });
                  },
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
        o = s("713135"),
        r = s("155502");
      function n(e) {
        var t;
        let { user: s } = e,
          n =
            null ===
              (t = (0, l.useStateFromStores)([o.default], () =>
                o.default.getUserProfile(s.id)
              )) || void 0 === t
              ? void 0
              : t.application;
        return (0, a.jsx)(i.default, {
          flags: null == n ? void 0 : n.flags,
          listScrollerStyle: r.listScroller,
        });
      }
    },
    717226: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        i = s.n(l),
        o = s("77078"),
        r = s("49111"),
        n = s("782340"),
        u = s("124085");
      function c(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(o.Button, {
          ...s,
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.SMALL,
          className: i(u.actionButton, t),
        });
      }
      function d(e) {
        let {
          isCurrentUser: t,
          user: s,
          relationshipType: l,
          onAddFriend: i,
          onIgnoreFriend: d,
          onSendMessage: f,
        } = e;
        return t || l === r.RelationshipTypes.BLOCKED
          ? null
          : l === r.RelationshipTypes.FRIEND || s.bot
            ? (0, a.jsx)(c, {
                color: o.Button.Colors.GREEN,
                onClick: f,
                children: n.default.Messages.SEND_MESSAGE,
              })
            : l === r.RelationshipTypes.PENDING_OUTGOING
              ? (0, a.jsx)(c, {
                  color: o.Button.Colors.GREEN,
                  disabled: !0,
                  children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER,
                })
              : l === r.RelationshipTypes.PENDING_INCOMING
                ? (0, a.jsxs)("div", {
                    className: u.pendingIncoming,
                    children: [
                      (0, a.jsx)(c, {
                        color: o.Button.Colors.GREEN,
                        onClick: i,
                        children: n.default.Messages.FRIEND_REQUEST_ACCEPT,
                      }),
                      (0, a.jsx)(c, {
                        color: o.Button.Colors.PRIMARY,
                        onClick: d,
                        className: u.actionRightButton,
                        children: n.default.Messages.FRIEND_REQUEST_IGNORE,
                      }),
                    ],
                  })
                : (0, a.jsx)(c, {
                    color: o.Button.Colors.GREEN,
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
            return I;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        o = s("77078"),
        r = s("910330"),
        n = s("376556"),
        u = s("572943"),
        c = s("915639"),
        d = s("102985"),
        f = s("756507"),
        S = s("713135"),
        m = s("906889"),
        E = s("485422"),
        T = s("880114"),
        p = s("824140"),
        N = s("751906"),
        _ = s("782340"),
        A = s("591572");
      function I(e) {
        var t;
        let {
            user: s,
            displayProfile: I,
            autoFocusNote: v = !1,
            scrollToConnections: x = !1,
          } = e,
          { trackUserProfileAction: U } = (0,
          f.useUserProfileAnalyticsContext)(),
          h = (0, u.usePlatformAllowed)({ forUserProfile: !0 }),
          C = (0, i.useStateFromStores)([S.default], () => {
            var e, t;
            return null !==
              (t =
                null === (e = S.default.getUserProfile(s.id)) || void 0 === e
                  ? void 0
                  : e.connectedAccounts) && void 0 !== t
              ? t
              : [];
          }),
          y = (0, i.useStateFromStores)(
            [d.default],
            () => d.default.hidePersonalInformation
          ),
          { profileTheme: j } = (0, m.default)(s, I),
          R = (0, i.useStateFromStores)([c.default], () => c.default.locale),
          M = l.useMemo(
            () =>
              C.filter(e => {
                let t = n.default.get(e.type);
                return null != t && h(t);
              }),
            [C, h]
          ),
          P = l.useRef(null);
        return (l.useLayoutEffect(() => {
          if (x) {
            var e;
            null == P ||
              null === (e = P.current) ||
              void 0 === e ||
              e.scrollIntoView();
          }
        }, [x]),
        y)
          ? (0, a.jsx)(N.default, {})
          : (0, a.jsxs)(o.ScrollerThin, {
              fade: !0,
              className: A.infoScroller,
              children: [
                (0, a.jsxs)("div", {
                  className: A.userInfoSection,
                  children: [
                    (null == I ? void 0 : I.bio) != null &&
                      (null == I ? void 0 : I.bio) !== "" &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(o.Heading, {
                            variant: "eyebrow",
                            className: A.userInfoSectionHeader,
                            children: _.default.Messages.USER_PROFILE_ABOUT_ME,
                          }),
                          (0, a.jsx)(E.default, {
                            className: A.userInfoText,
                            userBio:
                              null !== (t = null == I ? void 0 : I.bio) &&
                              void 0 !== t
                                ? t
                                : "",
                          }),
                        ],
                      }),
                    (0, a.jsx)(T.default, {
                      userId: s.id,
                      headingClassName: A.userInfoSectionHeader,
                      textClassName: A.userInfoText,
                    }),
                    (0, a.jsx)(o.Heading, {
                      variant: "eyebrow",
                      className: A.userInfoSectionHeader,
                      children: _.default.Messages.NOTE,
                    }),
                    (0, a.jsx)(r.default, {
                      userId: s.id,
                      autoFocus: v,
                      className: A.note,
                      onUpdate: () => U({ action: "SET_NOTE" }),
                    }),
                  ],
                }),
                (0, a.jsx)(p.ConnectedUserAccounts, {
                  ref: P,
                  connectedAccounts: M,
                  theme: j,
                  locale: R,
                  className: A.userInfoSection,
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
        o = s("77078"),
        r = s("901582"),
        n = s("252744"),
        u = s("750560"),
        c = s("502651"),
        d = s("812204"),
        f = s("635471"),
        S = s("373469"),
        m = s("271938"),
        E = s("824563"),
        T = s("697218"),
        p = s("337487"),
        N = s("756507"),
        _ = s("713135"),
        A = s("765698"),
        I = s("217513"),
        v = s("228424"),
        x = s("641055"),
        U = s("430312"),
        h = s("453649"),
        C = s("481923"),
        y = s("759210"),
        j = s("347550"),
        R = s("590456"),
        M = s("49111"),
        P = s("782340"),
        O = s("593240");
      function g(e) {
        let {
            user: t,
            isCurrentUser: s,
            section: r,
            setSection: n,
            hasActivity: u,
          } = e,
          c = (0, i.useStateFromStores)([_.default], () => {
            var e, s;
            return (
              (null === (s = _.default.getUserProfile(t.id)) || void 0 === s
                ? void 0
                : null === (e = s.application) || void 0 === e
                  ? void 0
                  : e.id) != null
            );
          }),
          [f, S] = (0, v.useMutualFriends)(t),
          m = (0, i.useStateFromStores)([_.default], () =>
            _.default.getMutualGuilds(t.id)
          ),
          E = t.bot || s,
          { enabled: T } = (0, p.useProfileMutualsExperiment)({
            autoTrackExposure: !0,
            location: d.default.PROFILE_MODAL,
            disable: E,
          }),
          N = l.useMemo(() => {
            if (T) {
              var e;
              return P.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
                count: "".concat(
                  null !== (e = null == S ? void 0 : S.length) && void 0 !== e
                    ? e
                    : 0
                ),
              });
            }
            return P.default.Messages.MUTUAL_FRIENDS;
          }, [T, S]),
          A = l.useMemo(() => {
            if (T) {
              var e;
              return P.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
                count: "".concat(
                  null !== (e = null == m ? void 0 : m.length) && void 0 !== e
                    ? e
                    : 0
                ),
              });
            }
            return P.default.Messages.MUTUAL_GUILDS;
          }, [T, m]);
        return (0, a.jsx)("div", {
          className: O.tabBarContainer,
          children: (0, a.jsxs)(o.TabBar, {
            selectedItem: r,
            type: "top",
            onItemSelect: n,
            className: O.tabBar,
            children: [
              !t.isNonUserBot() || t.isClyde()
                ? (0, a.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: R.UserProfileSections.USER_INFO,
                    children: P.default.Messages.USER_INFO,
                  })
                : null,
              !t.bot && u
                ? (0, a.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: R.UserProfileSections.ACTIVITY,
                    children: P.default.Messages.USER_PROFILE_ACTIVITY,
                  })
                : null,
              t.bot || s
                ? null
                : (0, a.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: R.UserProfileSections.MUTUAL_FRIENDS,
                    children: N,
                  }),
              s || t.isClyde()
                ? null
                : (0, a.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: R.UserProfileSections.MUTUAL_GUILDS,
                    children: A,
                  }),
              t.bot && c
                ? (0, a.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: R.UserProfileSections.BOT_DATA_ACCESS,
                    children: P.default.Messages.BOTS_DATA_ACCESS_TAB,
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
            guildId: _,
            channelId: v,
            friendToken: F,
            autoFocusNote: D,
            initialSection: B = R.UserProfileSections.USER_INFO,
            transitionState: L,
            onClose: b,
          } = e,
          G =
            null !==
              (t = (0, i.useStateFromStores)([T.default], () =>
                T.default.getUser(p.id)
              )) && void 0 !== t
              ? t
              : p,
          k = (0, I.default)(
            null !== (s = null == G ? void 0 : G.id) && void 0 !== s ? s : ""
          );
        (0, u.useSubscribeGuildMembers)({ [_]: [G.id] });
        let V = (0, i.useStateFromStores)(
            [S.default],
            () => null != S.default.getAnyStreamForUser(G.id)
          ),
          H = (0, i.useStateFromStores)([E.default], () =>
            E.default.findActivity(
              G.id,
              e => e.type !== M.ActivityTypes.CUSTOM_STATUS
            )
          ),
          w = (0, h.useGetVoiceChannelInfoForVoiceActivitySection)(G.id, _),
          [Y, z] = l.useState(!1),
          [J, K] = l.useState(
            G.isNonUserBot() && !G.isClyde()
              ? R.UserProfileSections.MUTUAL_GUILDS
              : B
          ),
          Q = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.getId() === G.id
          ),
          { showVoiceActivityInProfile: W } =
            A.VoiceActivityProfileExperiment.useExperiment(
              { location: "user profile modal container" },
              { autoTrackExposure: !1 }
            ),
          { UserProfileAnalyticsProvider: Z, trackUserProfileAction: q } = (0,
          N.useUserProfileAnalyticsProvider)({
            layout: "MODAL",
            analyticsLocations: [d.default.PROFILE_MODAL],
            userId: G.id,
            guildId: _,
            channelId: v,
          }),
          X = null != H || V || (null != w && W),
          $ = !Q || X,
          ee = l.createRef(),
          et = (0, n.default)(ee);
        !X &&
          J === R.UserProfileSections.ACTIVITY &&
          K(R.UserProfileSections.USER_INFO);
        let es = l.useCallback(
            e => {
              q({ action: "PRESS_SECTION", section: e }), z(!0), K(e);
            },
            [q]
          ),
          ea = null == k ? void 0 : k.profileEffectId;
        return (0, a.jsx)(Z, {
          children: (0, a.jsx)(r.default, {
            section: M.AnalyticsSections.PROFILE_MODAL,
            children: (0, a.jsxs)(o.ModalRoot, {
              transitionState: L,
              className: O.root,
              "aria-label": P.default.Messages.USER_PROFILE_MODAL,
              children: [
                (0, a.jsx)("div", {
                  ref: ee,
                  children: (0, a.jsxs)(U.default, {
                    user: G,
                    profileType: R.UserProfileTypes.MODAL,
                    children: [
                      (0, a.jsx)("div", {
                        className: O.topSection,
                        children: (0, a.jsx)(y.default, {
                          displayProfile: k,
                          user: G,
                          friendToken: F,
                          onClose: b,
                          isStreaming: (0, c.default)(H),
                          guildId: _,
                          channelId: v,
                          hasProfileEffect: null != ea,
                        }),
                      }),
                      (0, a.jsxs)(U.default.Inner, {
                        children: [
                          L === o.ModalTransitionState.ENTERED &&
                            (0, a.jsx)(x.default, { onTooltipClose: b }),
                          (0, a.jsxs)("div", {
                            className: O.body,
                            children: [
                              (0, a.jsx)(j.default, {
                                user: G,
                                displayProfile: k,
                              }),
                              $
                                ? (0, a.jsx)(g, {
                                    user: G,
                                    section:
                                      J ===
                                      R.UserProfileSections
                                        .USER_INFO_CONNECTIONS
                                        ? R.UserProfileSections.USER_INFO
                                        : J,
                                    setSection: es,
                                    hasActivity: X,
                                    isCurrentUser: Q,
                                  })
                                : (0, a.jsx)("div", { className: O.divider }),
                              (0, a.jsx)(C.default, {
                                displayProfile: k,
                                user: G,
                                autoFocusNote: D && !Y,
                                selectedSection: J,
                                onClose: b,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                null != ea &&
                  (0, a.jsx)(f.default, {
                    profileEffectId: ea,
                    bannerAdjustment: 0,
                    isHovering: et,
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
            return c;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("656416"),
        i = s("821721"),
        o = s("869250"),
        r = s("69682"),
        n = s("446509"),
        u = s("590456");
      function c(e) {
        let {
          displayProfile: t,
          user: s,
          selectedSection: c,
          autoFocusNote: d,
          onClose: f,
        } = e;
        switch (c) {
          case u.UserProfileSections.ACTIVITY:
            return (0, a.jsx)(l.default, { user: s });
          case u.UserProfileSections.MUTUAL_GUILDS:
            return (0, a.jsx)(n.default, { user: s, onClose: f });
          case u.UserProfileSections.MUTUAL_FRIENDS:
            return (0, a.jsx)(r.default, { user: s, onClose: f });
          case u.UserProfileSections.BOT_DATA_ACCESS:
            return (0, a.jsx)(i.default, { user: s });
          case u.UserProfileSections.USER_INFO_CONNECTIONS:
          case u.UserProfileSections.USER_INFO:
          default:
            return (0, a.jsx)(o.default, {
              displayProfile: t,
              autoFocusNote: d,
              user: s,
              scrollToConnections:
                c === u.UserProfileSections.USER_INFO_CONNECTIONS,
            });
        }
      }
    },
    759210: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return D;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        i = s("446674"),
        o = s("669491"),
        r = s("77078"),
        n = s("450911"),
        u = s("272030"),
        c = s("54239"),
        d = s("736964"),
        f = s("377114"),
        S = s("824794"),
        m = s("271938"),
        E = s("824563"),
        T = s("27618"),
        p = s("663745"),
        N = s("423487"),
        _ = s("50885"),
        A = s("756507"),
        I = s("713135"),
        v = s("106435"),
        x = s("906889"),
        U = s("289918"),
        h = s("609734"),
        C = s("590006"),
        y = s("717226"),
        j = s("590456"),
        R = s("49111"),
        M = s("843455"),
        P = s("782340"),
        O = s("431517");
      let g = r.AvatarSizes.SIZE_120,
        F = _.default.getEnableHardwareAcceleration()
          ? r.AnimatedAvatar
          : r.Avatar;
      function D(e) {
        let {
            displayProfile: t,
            user: _,
            guildId: D,
            channelId: B,
            friendToken: L,
            isStreaming: b,
            hasProfileEffect: G,
            onClose: k,
          } = e,
          V = (0, i.useStateFromStores)([T.default], () =>
            T.default.getRelationshipType(_.id)
          ),
          H = (0, i.useStateFromStores)([E.default], () =>
            E.default.isMobileOnline(_.id)
          ),
          w = (0, i.useStateFromStores)([E.default], () =>
            E.default.getStatus(_.id)
          ),
          Y = (0, i.useStateFromStores)([I.default], () =>
            I.default.getUserProfile(_.id)
          ),
          z = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.getId() === _.id
          ),
          { profileTheme: J } = (0, x.default)(_, t),
          { trackUserProfileAction: K } = (0,
          A.useUserProfileAnalyticsContext)(),
          {
            avatarSrc: Q,
            eventHandlers: W,
            avatarDecorationSrc: Z,
          } = (0, v.default)({ user: _, size: g }),
          q = l.useMemo(
            () => (0, S.shouldDisableUserPresenceInChannel)(_, B),
            [_, B]
          );
        function X() {
          k(), (0, c.popLayer)();
        }
        function $() {
          K({ action: "REMOVE_FRIEND" }),
            d.default.removeFriend(_.id, { location: "User Profile" });
        }
        function ee(e) {
          K({ action: "SEND_MESSAGE" }),
            n.default.openPrivateChannel(_.id, !1, !1, e),
            X();
        }
        function et() {
          try {
            K({ action: "BLOCK" }),
              d.default.addRelationship({
                userId: _.id,
                context: { location: "User Profile" },
                type: R.RelationshipTypes.BLOCKED,
              });
          } catch (e) {
            X();
          }
        }
        function es() {
          let e = "@me" === D ? void 0 : D;
          K({ action: "REPORT" }), (0, f.showReportModalForUser)(_, e);
        }
        return (0, a.jsxs)("header", {
          children: [
            (0, a.jsx)(U.default, {
              displayProfile: t,
              onClose: X,
              user: _,
              profileType: j.UserProfileTypes.MODAL,
              hasProfileEffect: G,
            }),
            (0, a.jsxs)("div", {
              className: O.header,
              children: [
                (0, a.jsx)("div", {
                  ...W,
                  children: (0, a.jsx)(F, {
                    src: Q,
                    avatarDecoration: Z,
                    size: g,
                    className: O.avatar,
                    status: q
                      ? M.StatusTypes.UNKNOWN
                      : b
                        ? M.StatusTypes.STREAMING
                        : w,
                    statusBackdropColor: (0, r.getStatusBackdropColor)(J),
                    isMobile: H,
                    statusTooltip: !0,
                    "aria-label": _.username,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: O.headerTop,
                  children: [
                    (null == Y ? void 0 : Y.profileFetchFailed) && !_.isClyde()
                      ? (0, a.jsx)(r.Tooltip, {
                          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
                          spacing: 20,
                          children: e =>
                            (0, a.jsx)(N.default, {
                              ...e,
                              className: O.warningCircleIcon,
                              color: o.default.unsafe_rawColors.YELLOW_300.css,
                            }),
                        })
                      : (0, a.jsx)(C.default, {
                          user: _,
                          className: O.badgeList,
                          guildId: D,
                          size: C.BadgeSizes.SIZE_24,
                          shrinkAtCount: 8,
                          shrinkToSize: C.BadgeSizes.SIZE_18,
                        }),
                    (0, a.jsxs)("div", {
                      className: O.relationshipButtons,
                      children: [
                        (0, a.jsx)(h.default, {
                          className: O.applicationInstallButton,
                          application: null == Y ? void 0 : Y.application,
                        }),
                        (0, a.jsx)(y.default, {
                          user: _,
                          isCurrentUser: z,
                          relationshipType: V,
                          onAddFriend: function () {
                            try {
                              K({ action: "SEND_FRIEND_REQUEST" }),
                                d.default.addRelationship({
                                  userId: _.id,
                                  context: { location: "User Profile" },
                                  type: void 0,
                                  friendToken: L,
                                });
                            } catch (e) {
                              X();
                            }
                          },
                          onIgnoreFriend: function () {
                            K({ action: "CANCEL_FRIEND_REQUEST" }),
                              d.default.cancelFriendRequest(_.id, {
                                location: "User Profile",
                              });
                          },
                          onSendMessage: () =>
                            ee("User Profile Modal - Send Message Button"),
                        }),
                        z || _.isNonUserBot()
                          ? null
                          : (0, a.jsx)(r.Clickable, {
                              focusProps: { offset: { left: 8 } },
                              onClick: function (e) {
                                K({ action: "PRESS_OPTIONS" }),
                                  (0, u.openContextMenuLazy)(e, async () => {
                                    let { default: e } = await s
                                      .el("487956")
                                      .then(s.bind(s, "487956"));
                                    return t =>
                                      (0, a.jsx)(e, {
                                        ...t,
                                        relationshipType: V,
                                        onRemoveFriend: $,
                                        onBlock: et,
                                        onReport: es,
                                        onCopyId: () =>
                                          K({ action: "COPY_USER_ID" }),
                                        onMessage: () =>
                                          ee(
                                            "User Profile Modal - Context Menu"
                                          ),
                                        user: _,
                                      });
                                  });
                              },
                              children: (0, a.jsx)(p.default, {
                                className: O.additionalActionsIcon,
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
        o = s("446674"),
        r = s("77078"),
        n = s("145079"),
        u = s("775377"),
        c = s("824563"),
        d = s("158998"),
        f = s("49111"),
        S = s("782340"),
        m = s("473899");
      function E(e) {
        let { user: t, displayProfile: s } = e,
          l = (0, o.useStateFromStores)([c.default], () =>
            c.default.findActivity(
              t.id,
              e => e.type === f.ActivityTypes.CUSTOM_STATUS
            )
          ),
          E = d.default.getName(t);
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
                  (0, a.jsx)(r.Text, {
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
              (0, a.jsx)(r.Tooltip, {
                text: S.default.Messages.USER_PROFILE_PRONOUNS,
                children: e =>
                  (0, a.jsx)(r.Text, {
                    ...e,
                    variant: "text-sm/normal",
                    className: i(m.pronouns, m.nameTagSmall),
                    children: s.pronouns,
                  }),
              }),
            null != l
              ? (0, a.jsx)("div", {
                  className: m.customStatusActivity,
                  children: (0, a.jsx)(r.Text, {
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
            return o;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("782340"),
        i = s("155502");
      function o() {
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
//# sourceMappingURL=fe0f9f0c327ecbe3737b.js.map
