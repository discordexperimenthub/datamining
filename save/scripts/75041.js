(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75041"],
  {
    45299: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("37983"),
        s = n("884691"),
        a = n("146606"),
        i = n("669491"),
        u = n("77078"),
        r = n("659500"),
        o = n("49111"),
        d = n("782340"),
        c = n("645780"),
        f = function (e) {
          var t;
          let {
              message: n,
              errorMessage: f,
              submitting: h,
              onReset: m,
              onSave: S,
              onSaveText: g,
              onResetText: x,
              onSaveButtonColor: E,
              disabled: T,
              saveButtonTooltip: p,
            } = e,
            C = s.useRef(null),
            [{ spring: I }, M] = (0, a.useSpring)(() => ({ spring: 0 }));
          s.useEffect(() => {
            function e() {
              M({ spring: 1, config: a.config.gentle }),
                M({ spring: 0, config: a.config.gentle, delay: 1e3 });
            }
            return (
              r.ComponentDispatch.subscribe(
                o.ComponentActions.EMPHASIZE_NOTICE,
                e
              ),
              () => {
                r.ComponentDispatch.unsubscribe(
                  o.ComponentActions.EMPHASIZE_NOTICE,
                  e
                );
              }
            );
          }, [M]);
          let A = I.to({
              range: [0, 1],
              output: [
                (0, u.useToken)(i.default.colors.TEXT_NORMAL).hex(),
                (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            }),
            N = I.to({
              range: [0, 1],
              output: [
                (0, u.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(),
                (0, u.useToken)(i.default.colors.STATUS_DANGER).hex(),
              ],
            }),
            b = I.to({
              range: [0, 1],
              output: [
                (0, u.useToken)(i.default.colors.TEXT_DANGER).hex(),
                (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            });
          return (0, l.jsx)(a.animated.div, {
            className: c.container,
            style: { backgroundColor: N },
            children: (0, l.jsx)("div", {
              className: c.flexContainer,
              ref: C,
              children: (0, l.jsxs)(u.FocusRingScope, {
                containerRef: C,
                children: [
                  (0, l.jsx)("div", {
                    className: c.shrinkingContainer,
                    children: (0, l.jsx)(a.animated.div, {
                      className: c.message,
                      style: { color: null != f ? b : A },
                      children:
                        null !== (t = null != f ? f : n) && void 0 !== t
                          ? t
                          : d.default.Messages.SETTINGS_NOTICE_MESSAGE,
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: c.actions,
                    children: [
                      null != m &&
                        (0, l.jsx)(u.Button, {
                          className: c.resetButton,
                          size: u.Button.Sizes.SMALL,
                          color: u.Button.Colors.PRIMARY,
                          look: u.Button.Looks.LINK,
                          onClick: m,
                          children: (0, l.jsx)(a.animated.span, {
                            style: { color: A },
                            children: null != x ? x : d.default.Messages.RESET,
                          }),
                        }),
                      null != S
                        ? (0, l.jsx)(u.Tooltip, {
                            text: p,
                            children: e =>
                              (0, l.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                color: null != E ? E : u.Button.Colors.GREEN,
                                submitting: h,
                                disabled: T,
                                onClick: S,
                                ...e,
                                children:
                                  null != g
                                    ? g
                                    : d.default.Messages.SAVE_CHANGES,
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    485810: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSubscribeToGuildMemberUpdates: function () {
            return a;
          },
        });
      var l = n("884691"),
        s = n("666020");
      function a(e) {
        l.useEffect(
          () => (
            s.subscribeToMemberUpdates(e),
            () => {
              s.unsubscribeFromMemberUpdates(e);
            }
          ),
          [e]
        );
      }
    },
    714247: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("446674"),
        i = n("812204"),
        u = n("685665"),
        r = n("744568"),
        o = n("208021"),
        d = n("982108"),
        c = n("305961"),
        f = n("49111"),
        h = n("847234");
      function m(e) {
        let { guildId: t } = e,
          n = (0, a.useStateFromStores)([c.default], () =>
            c.default.getGuild(t)
          ),
          { AnalyticsLocationProvider: m } = (0, u.default)(
            i.default.MEMBER_SAFETY_PAGE
          ),
          S = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getGuildSidebarState(t),
            [t]
          ),
          g = s.useCallback(() => {
            o.default.closeGuildSidebar(t);
          }, [t]);
        return null != n && null != S && null != S
          ? (0, l.jsx)(m, {
              children: (0, l.jsx)("div", {
                className: h.sidebarContainer,
                style: { width: f.DEFAULT_CHAT_SIDEBAR_WIDTH },
                children: (0, l.jsx)(r.default, {
                  userId: S.details.userId,
                  guildId: S.details.guildId,
                  onClose: g,
                }),
              }),
            })
          : null;
      }
    },
    112265: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("446674"),
        r = n("77078"),
        o = n("812204"),
        d = n("685665"),
        c = n("69927"),
        f = n("994906"),
        h = n("459824"),
        m = n("41594"),
        S = n("539938"),
        g = n("393414"),
        x = n("401642"),
        E = n("982108"),
        T = n("42203"),
        p = n("923959"),
        C = n("305961"),
        I = n("18494"),
        M = n("98292"),
        A = n("155207"),
        N = n("466818"),
        b = n("485810"),
        j = n("914985"),
        _ = n("714247"),
        v = n("565556"),
        R = n("891222"),
        k = n("49111"),
        B = n("724210"),
        G = n("789150"),
        L = n("782340"),
        F = n("847234"),
        y = n("250455");
      function P(e) {
        let { guild: t, previousChannel: n } = e,
          a = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
          i = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
        return (
          (0, c.usePageTitle)({ location: t.name, subsection: a }),
          (0, l.jsxs)(S.default, {
            className: F.header,
            innerClassname: F.innerHeader,
            channelId: B.StaticChannelRoute.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
              null != n
                ? (0, l.jsx)(r.Button, {
                    className: F.returnButton,
                    size: r.Button.Sizes.SMALL,
                    look: r.Button.Looks.OUTLINED,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != n && (0, g.transitionToGuild)(t.id, n.id);
                    },
                    children: (0, l.jsx)(r.Text, {
                      className: F.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: L.default.Messages.RETURN_TO_CHANNEL.format({
                        channelNameHook: () =>
                          null == n
                            ? null
                            : (0, l.jsxs)(
                                s.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(m.ChannelItemIcon, {
                                      className: F.returnIcon,
                                      guild: t,
                                      channel: n,
                                    }),
                                    (0, l.jsx)(M.default, {
                                      children: (0, l.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        color: "none",
                                        children: n.name,
                                      }),
                                    }),
                                  ],
                                },
                                n.id
                              ),
                      }),
                    }),
                  })
                : (0, l.jsx)("div", {}),
            children: [
              (0, l.jsx)(S.default.Icon, {
                icon: A.default,
                "aria-hidden": !0,
              }),
              (0, l.jsx)(S.default.Title, { children: i }),
            ],
          })
        );
      }
      function w(e) {
        let { guildId: t } = e,
          n = (0, u.useStateFromStores)([C.default], () =>
            C.default.getGuild(t)
          ),
          { AnalyticsLocationProvider: a, analyticsLocations: c } = (0,
          d.default)(o.default.MEMBER_SAFETY_PAGE),
          m = (0, N.useCanAccessMemberSafetyPage)(t),
          S = (0, h.useCanAccessGuildMemberModView)(t, m),
          M = (0, u.useStateFromStores)([I.default], () =>
            I.default.getLastSelectedChannelId(t)
          ),
          A = (0, u.useStateFromStores)([T.default], () =>
            T.default.getChannel(M)
          ),
          L = s.useRef(null);
        (0, b.useSubscribeToGuildMemberUpdates)(t),
          s.useEffect(() => {
            if (!m && null != n) {
              var e;
              let t =
                null === (e = p.default.getDefaultChannel(n.id)) || void 0 === e
                  ? void 0
                  : e.id;
              (0, g.transitionToGuild)(n.id, t);
            }
          }, [n, m]);
        let w = (0, u.useStateFromStores)(
            [E.default],
            () => null != E.default.getGuildSidebarState(t),
            [t]
          ),
          H = s.useCallback(
            e => {
              let t = (0, h.canAccessGuildMemberModViewWithExperiment)(
                e.guildId,
                !0
              );
              t
                ? (0, f.openGuildMemberModViewSidebar)(
                    e.guildId,
                    e.userId,
                    B.StaticChannelRoute.MEMBER_SAFETY,
                    { modViewPanel: G.ModViewPanel.INFO }
                  )
                : (0, x.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: c,
                    analyticsLocation: {
                      section: k.AnalyticsSections.MEMBER_SAFETY_PAGE,
                    },
                  });
            },
            [c]
          );
        return null != n && m
          ? (0, l.jsxs)(a, {
              children: [
                (0, l.jsxs)("div", {
                  className: i(y.chat, F.page, { [y.threadSidebarOpen]: w }),
                  children: [
                    (0, l.jsx)(P, { guild: n, previousChannel: A }),
                    (0, l.jsx)(r.AdvancedScroller, {
                      className: i(F.scroller),
                      ref: L,
                      orientation: "vertical",
                      children: (0, l.jsxs)("div", {
                        className: i(y.content, F.container),
                        children: [
                          (0, l.jsx)(j.default, { guild: n }),
                          (0, l.jsx)(R.default, {
                            guild: n,
                            onMemberSelect: H,
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(v.default, { guildId: n.id }),
                  ],
                }),
                S && (0, l.jsx)(_.default, { guildId: n.id }),
              ],
            })
          : null;
      }
    },
    891222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("146606"),
        r = n("65597"),
        o = n("77078"),
        d = n("804160"),
        c = n("178406"),
        f = n("553275"),
        h = n("691307"),
        m = n("314143"),
        S = n("721302"),
        g = n("194112");
      function x(e) {
        let { guild: t } = e,
          n = (0, d.useIsMakingRequest)(t.id),
          s = (0, u.useSpring)({ height: n ? 3 : 0, config: u.config.stiff });
        return (0, l.jsx)("div", {
          className: g.loaderContainer,
          children: (0, l.jsx)(u.animated.div, {
            className: g.loaderBar,
            style: s,
          }),
        });
      }
      function E(e) {
        let { guild: t, className: n, onPageChange: a, onMemberSelect: u } = e,
          E = t.id,
          T = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getEstimatedMemberSearchCountByGuildId(E),
            [E]
          ),
          p = (0, d.useIsMakingRequest)(E),
          C = (0, d.useIsStillIndexing)(E),
          I = s.useCallback(
            e => {
              null != e && (null == u || u(e));
            },
            [u]
          ),
          M = (0, f.getSearchState)(C, p, T),
          A = s.useRef(null),
          N = s.useRef(null),
          b = s.useCallback(() => {
            var e;
            null === (e = A.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: i(g.mainTableContainer, n),
          children: (0, l.jsxs)(o.AdvancedScroller, {
            className: i(g.horizatonalScroller),
            ref: N,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(S.default, { guild: t, ref: A }),
              (0, l.jsx)(x, { guild: t }),
              (0, l.jsx)(h.default, {
                guild: t,
                onSelectRow: I,
                searchState: M,
                onResetForNewMembers: b,
              }),
              M !== f.SearchState.SUCCESS_STILL_INDEXING &&
                (0, l.jsx)(m.default, { guildId: t.id, onPageChange: a }),
            ],
          }),
        });
      }
    },
    965397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("458960"),
        r = n("77078"),
        o = n("899284");
      let d = { friction: 7, tension: 60 };
      class c extends s.Component {
        componentWillAppear(e) {
          this.animateTo(1).start(e);
        }
        componentWillEnter(e) {
          this.animateTo(1).start(e);
        }
        componentWillLeave(e) {
          let { reducedMotion: t } = this.context;
          t.enabled
            ? this.animateTo(0).start(e)
            : u.default
                .stagger(250, [this.animateTo(1.3), this.animateTo(0)])
                .start(e);
        }
        animateTo(e) {
          return u.default.spring(this.animation, { ...d, toValue: e });
        }
        getAnimatedStyle() {
          let { reducedMotion: e } = this.context;
          return u.default.accelerate({
            opacity: this.animation,
            transform: e.enabled
              ? void 0
              : [
                  {
                    translateY: this.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["150%", "0%"],
                    }),
                  },
                ],
          });
        }
        render() {
          let { className: e, children: t } = this.props;
          return (0, l.jsx)(u.default.div, {
            className: i(e, o.slider),
            style: this.getAnimatedStyle(),
            children: t,
          });
        }
        constructor(...e) {
          super(...e), (this.animation = new u.default.Value(0));
        }
      }
      c.contextType = r.AccessibilityPreferencesContext;
      var f = c;
    },
  },
]);
//# sourceMappingURL=5c5737b9b85b7e23e436.js.map
