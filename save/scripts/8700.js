(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8700"],
  {
    652720: function (e, t, l) {
      "use strict";
      e.exports = l.p + "d2231aa1ae2abe2df3bc.svg";
    },
    462998: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return D;
          },
        }),
        l("424973");
      var n = l("37983"),
        a = l("884691"),
        s = l("446674"),
        i = l("272030"),
        r = l("264732"),
        d = l("738073"),
        o = l("716241"),
        u = l("918105"),
        c = l("850391"),
        h = l("347895"),
        f = l("698882"),
        m = l("934288"),
        C = l("353054"),
        N = l("557809"),
        x = l("267567"),
        g = l("393414"),
        p = l("208021"),
        S = l("42203"),
        E = l("474643"),
        I = l("247013"),
        _ = l("305961"),
        T = l("377253"),
        v = l("697218"),
        A = l("945330"),
        O = l("664336"),
        R = l("679653"),
        j = l("176347"),
        b = l("49111"),
        L = l("782340"),
        M = l("264594");
      function D(e) {
        let {
            channelId: t,
            baseChannelId: D,
            channelViewSource: y = "Split View",
            isResourceChannelView: B,
          } = e,
          w = (0, s.useStateFromStores)([S.default], () =>
            S.default.getChannel(t)
          ),
          H = (0, s.useStateFromStores)([_.default], () =>
            _.default.getGuild(null == w ? void 0 : w.getGuildId())
          ),
          F = (0, s.useStateFromStores)([v.default], () =>
            v.default.getCurrentUser()
          ),
          U = (0, s.useStateFromStores)([I.default], () =>
            I.default.didAgree(null == w ? void 0 : w.guild_id)
          ),
          k = (null == F ? void 0 : F.nsfwAllowed) === !0,
          P = (0, R.default)(w),
          G = (0, s.useStateFromStores)(
            [x.default],
            () =>
              (null == H ? void 0 : H.id) != null && x.default.isLurking(H.id),
            [H]
          ),
          W = (0, m.default)(t),
          z = (0, s.useStateFromStores)([f.default], () => {
            var e;
            return null ===
              (e = f.default.getResourceForChannel(
                null == H ? void 0 : H.id,
                t
              )) || void 0 === e
              ? void 0
              : e.title;
          }),
          V = a.useRef(!1);
        if (
          (a.useEffect(() => {
            null != w &&
              !V.current &&
              ((V.current = !0),
              (0, o.trackWithMetadata)(b.AnalyticEvents.CHANNEL_OPENED, {
                ...(0, o.getChannelOpenedMetadata)(w.id),
                channel_view: y,
              }),
              (0, u.trackClickstream)(
                b.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM,
                { channelId: w.id }
              ));
          }, [w, y]),
          null == w || null == H)
        )
          return null;
        let Y = [];
        return (!G &&
          Y.push((0, n.jsx)(C.default, { channel: w }, "notifications")),
        Y.push(
          (0, n.jsx)(
            O.default.Icon,
            {
              icon: A.default,
              tooltip: L.default.Messages.CLOSE,
              onClick: () => p.default.closeChannelSidebar(D),
            },
            "close"
          )
        ),
        !w.isNSFW() || (k && U))
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(r.default, {
                  channel: w,
                  draftType: E.DraftType.ChannelMessage,
                }),
                (0, n.jsx)(O.default, {
                  toolbar: Y,
                  "aria-label":
                    L.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                  children: (0, N.renderTitle)({
                    channel: w,
                    channelName: W ? z : P,
                    guild: H,
                    inSidebar: !0,
                    handleContextMenu: e => {
                      (0, i.openContextMenuLazy)(e, async () => {
                        let { default: e } = await l
                          .el("229233")
                          .then(l.bind(l, "229233"));
                        return t =>
                          (0, n.jsx)(e, { ...t, channel: w, guild: H });
                      });
                    },
                    handleClick: () => {
                      let e = T.default.getMessages(w.id);
                      if (B) {
                        (0, g.transitionTo)(b.Routes.CHANNEL(w.guild_id, w.id)),
                          (0, h.selectHomeResourceChannel)(w.guild_id, null);
                        return;
                      }
                      (0, g.transitionToGuild)(
                        w.guild_id,
                        w.id,
                        e.jumpTargetId
                      );
                    },
                  }),
                }),
                (0, n.jsx)("div", {
                  className: M.chat,
                  children: (0, n.jsx)(
                    j.default,
                    {
                      channel: w,
                      guild: H,
                      chatInputType: c.ChatInputTypes.SIDEBAR,
                    },
                    t
                  ),
                }),
              ],
            })
          : (0, n.jsx)(d.default, { guild: H });
      }
    },
    469421: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        }),
        l("834022"),
        l("424973"),
        l("222007"),
        l("808653");
      var n = l("884691"),
        a = l("917351"),
        s = l.n(a),
        i = l("446674"),
        r = l("913144"),
        d = l("986003"),
        o = l("282109"),
        u = l("568734"),
        c = l("449008"),
        h = l("921031"),
        f = l("863636"),
        m = l("397336");
      function C(e) {
        r.default.dispatch({
          type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
          guildId: e,
        });
      }
      let N = {};
      function x(e) {
        let t = (0, i.useStateFromStores)(
          [f.default],
          () => {
            var t;
            return null !== (t = f.default.getPendingResponseOptions(e)) &&
              void 0 !== t
              ? t
              : N;
          },
          [e]
        );
        n.useEffect(() => (C(e), () => C(e)), [e]),
          n.useEffect(() => {
            null != t &&
              0 !== Object.keys(t).length &&
              h.default.updateOnboardingResponses(e);
          }, [e, t]);
        let l = n.useCallback(
          (t, l, n) => {
            let a = f.default.getOnboardingResponses(e),
              { addedRoleIds: i, removedRoleIds: C } = (function (e, t, l, n) {
                var a, i, r, d, o;
                let u = [],
                  h = [];
                if (e.singleSelect && l) {
                  let l = e.options.find(e => n.includes(e.id));
                  (u = s.difference(
                    null !== (a = t.roleIds) && void 0 !== a ? a : [],
                    null !== (i = null == l ? void 0 : l.roleIds) &&
                      void 0 !== i
                      ? i
                      : []
                  )),
                    (h = s.difference(
                      null !== (r = null == l ? void 0 : l.roleIds) &&
                        void 0 !== r
                        ? r
                        : [],
                      null !== (d = t.roleIds) && void 0 !== d ? d : []
                    ));
                } else if (l)
                  (u = null !== (o = t.roleIds) && void 0 !== o ? o : []),
                    (h = []);
                else {
                  let l = e.options.filter(e => n.includes(e.id)),
                    a = l.filter(e => t.id !== e.id),
                    i = l
                      .map(e => e.roleIds)
                      .flat()
                      .filter(c.isNotNullish),
                    r = a
                      .map(e => e.roleIds)
                      .flat()
                      .filter(c.isNotNullish);
                  (u = []), (h = s.difference(i, r));
                }
                return { addedRoleIds: u, removedRoleIds: h };
              })(t, l, n, a),
              { addedChannelIds: N, removedChannelIds: x } = (function (e) {
                var t, l, n, a, i;
                let {
                    guildId: r,
                    prompt: o,
                    option: u,
                    selected: h,
                    responses: m,
                  } = e,
                  C = [],
                  N = [];
                if (o.singleSelect && h) {
                  let e = o.options.find(e => m.includes(e.id));
                  (C = s.difference(
                    null !== (t = u.channelIds) && void 0 !== t ? t : [],
                    null !== (l = null == e ? void 0 : e.channelIds) &&
                      void 0 !== l
                      ? l
                      : []
                  )),
                    (N = s.difference(
                      null !== (n = null == e ? void 0 : e.channelIds) &&
                        void 0 !== n
                        ? n
                        : [],
                      null !== (a = u.channelIds) && void 0 !== a ? a : []
                    ));
                } else if (h)
                  (C = null !== (i = u.channelIds) && void 0 !== i ? i : []),
                    (N = []);
                else {
                  let e = o.options.filter(e => m.includes(e.id)),
                    t = e.filter(e => u.id !== e.id),
                    l = e
                      .map(e => e.channelIds)
                      .flat()
                      .filter(c.isNotNullish),
                    n = t
                      .map(e => e.channelIds)
                      .flat()
                      .filter(c.isNotNullish);
                  (C = []), (N = s.difference(l, n));
                }
                return (
                  (0, d.hasNotSetUpChannelOptIn)(r) &&
                    C.push(...f.default.getDefaultChannelIds(r)),
                  { addedChannelIds: C, removedChannelIds: N }
                );
              })({
                guildId: e,
                prompt: t,
                option: l,
                selected: n,
                responses: a,
              }),
              g = N.reduce((t, l) => {
                let n = o.default.getChannelIdFlags(e, l);
                return (
                  (t[l] = {
                    flags: (0, u.setFlag)(
                      n,
                      m.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
                      !0
                    ),
                  }),
                  t
                );
              }, {}),
              p = x.reduce((t, l) => {
                let n = o.default.getChannelIdFlags(e, l);
                return (
                  (t[l] = {
                    flags: (0, u.setFlag)(
                      n,
                      m.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
                      !1
                    ),
                  }),
                  t
                );
              }, {}),
              S = { ...g, ...p };
            h.default.selectOption(e, t.id, l.id, n),
              r.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: S,
              }),
              h.default.updateRolesLocal(e, i, C);
          },
          [e]
        );
        return { handleSelectOption: l };
      }
    },
    15015: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        }),
        l("424973");
      var n = l("884691"),
        a = l("65597"),
        s = l("863636");
      function i(e) {
        let t = (0, a.useStateFromStoresArray)([s.default], () =>
          s.default.getEnabledOnboardingPrompts(e)
        );
        return n.useMemo(() => {
          let e = 0,
            l = [],
            n = [],
            a = [],
            s = [];
          for (var i = 0; i < t.length; i++) {
            let r = t[i];
            r.isNew
              ? l.push(r)
              : r.hasNewAnswers
                ? (n.push(r), (e += r.options.filter(e => e.isUnseen).length))
                : r.inOnboarding
                  ? s.push(r)
                  : a.push(r);
          }
          return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: l,
            onboardingPromptsWithNewAnswers: n,
            newAnswersCount: e,
            onboardingPrompts: a.concat(s),
          };
        }, [t]);
      }
    },
    534702: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return B;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("446674"),
        d = l("151426"),
        o = l("669491"),
        u = l("77078"),
        c = l("69927"),
        h = l("10641"),
        f = l("41594"),
        m = l("539938"),
        C = l("676143"),
        N = l("5973"),
        x = l("15684"),
        g = l("393414"),
        p = l("982108"),
        S = l("42203"),
        E = l("305961"),
        I = l("18494"),
        _ = l("98292"),
        T = l("446685"),
        v = l("956089"),
        A = l("361776"),
        O = l("961727"),
        R = l("653138"),
        j = l("724210"),
        b = l("994428"),
        L = l("782340"),
        M = l("530506"),
        D = l("250455");
      function y(e) {
        let { guild: t, previousChannel: l } = e,
          s = (0, A.default)(t);
        a.useEffect(() => {
          (0, h.markDismissibleContentAsDismissed)(
            d.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
            { dismissAction: b.ContentDismissActionType.DISMISS }
          );
        });
        let i = s
            ? L.default.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
                guildName: t.name,
              })
            : L.default.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
                guildName: t.name,
              }),
          r = s
            ? L.default.Messages.CHANNELS_AND_ROLES
            : L.default.Messages.CHANNEL_BROWSER_TITLE;
        return (
          (0, c.usePageTitle)({ location: i }),
          (0, n.jsxs)(m.default, {
            className: M.header,
            innerClassname: M.innerHeader,
            hideSearch: !0,
            channelId: j.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            toolbar:
              null != l
                ? (0, n.jsx)(u.Button, {
                    className: M.returnButton,
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.OUTLINED,
                    color: u.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != l && (0, g.transitionToGuild)(t.id, l.id);
                    },
                    children: (0, n.jsx)(u.Text, {
                      className: M.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: L.default.Messages.RETURN_TO_CHANNEL.format({
                        channelNameHook: () =>
                          null == l
                            ? null
                            : (0, n.jsxs)(
                                a.Fragment,
                                {
                                  children: [
                                    (0, n.jsx)(f.ChannelItemIcon, {
                                      className: M.returnIcon,
                                      guild: t,
                                      channel: l,
                                    }),
                                    (0, n.jsx)(_.default, {
                                      children: (0, n.jsx)(u.Text, {
                                        variant: "text-xs/medium",
                                        color: "none",
                                        children: l.name,
                                      }),
                                    }),
                                  ],
                                },
                                l.id
                              ),
                      }),
                    }),
                  })
                : [],
            children: [
              (0, n.jsx)(m.default.Icon, {
                icon: T.default,
                "aria-hidden": !0,
              }),
              (0, n.jsx)(m.default.Title, { children: r }),
            ],
          })
        );
      }
      function B(e) {
        let { guildId: t, selectedSection: l } = e,
          s = (0, r.useStateFromStores)([E.default], () =>
            E.default.getGuild(t)
          ),
          d = (0, A.default)(s),
          [c, h] = a.useState(null != l ? l : R.GuildOnboardingTab.CUSTOMIZE);
        a.useEffect(() => {
          null != l && h(l);
        }, [l]);
        let f = (0, r.useStateFromStores)([I.default], () =>
            I.default.getLastSelectedChannelId(t)
          ),
          m = (0, r.useStateFromStores)([p.default], () =>
            p.default.getCurrentSidebarChannelId(
              j.StaticChannelRoute.CHANNEL_BROWSER
            )
          ),
          g = null != m && c === R.GuildOnboardingTab.BROWSE,
          _ = (0, r.useStateFromStores)([S.default], () =>
            S.default.getChannel(f)
          ),
          T = (0, r.useStateFromStores)(
            [x.default],
            () => x.default.getNewChannelIds(t).size > 0
          ),
          b = (0, C.useChannelBrowserChannelCount)(t);
        return null == s
          ? null
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("div", {
                  className: i(D.chat, { [D.threadSidebarOpen]: g }),
                  children: [
                    (0, n.jsx)(y, { guild: s, previousChannel: _ }),
                    (0, n.jsxs)("div", {
                      className: i(D.content, M.container),
                      children: [
                        d &&
                          (0, n.jsxs)(u.TabBar, {
                            className: M.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: e => h(e),
                            children: [
                              (0, n.jsx)(
                                u.TabBar.Item,
                                {
                                  className: M.tabBarItem,
                                  id: R.GuildOnboardingTab.CUSTOMIZE,
                                  children:
                                    L.default.Messages.OPT_IN_GUILD_NOTICE_CTA,
                                },
                                R.GuildOnboardingTab.CUSTOMIZE
                              ),
                              (0, n.jsxs)(
                                u.TabBar.Item,
                                {
                                  className: M.tabBarItem,
                                  id: R.GuildOnboardingTab.BROWSE,
                                  "aria-label":
                                    L.default.Messages.CHANNEL_BROWSER_TITLE,
                                  children: [
                                    L.default.Messages.CHANNEL_BROWSER_TITLE,
                                    (0, n.jsx)(v.TextBadge, {
                                      text: T
                                        ? L.default.Messages.CHANNEL_TYPE_NEW
                                        : b,
                                      color: T
                                        ? o.default.unsafe_rawColors.BRAND_260
                                            .css
                                        : o.default.colors.BACKGROUND_ACCENT
                                            .css,
                                      className: i({ [M.newBadge]: T }),
                                    }),
                                  ],
                                },
                                R.GuildOnboardingTab.BROWSE
                              ),
                            ],
                          }),
                        (() => {
                          switch (c) {
                            case R.GuildOnboardingTab.CUSTOMIZE:
                              return (0, n.jsx)(O.default, {
                                guildId: t,
                                onBrowseChannels: () =>
                                  h(R.GuildOnboardingTab.BROWSE),
                              });
                            case R.GuildOnboardingTab.BROWSE:
                            default:
                              return (0, n.jsx)(N.default, { guildId: t });
                          }
                        })(),
                      ],
                    }),
                  ],
                }),
                g && (0, n.jsx)(N.ChannelBrowserSidebar, { channelId: m }),
              ],
            });
      }
    },
    961727: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return ea;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("917351"),
        d = l.n(r),
        o = l("146606"),
        u = l("509043"),
        c = l("446674"),
        h = l("669491"),
        f = l("819855"),
        m = l("77078"),
        C = l("267363"),
        N = l("834897"),
        x = l("841098"),
        g = l("606292"),
        p = l("688318"),
        S = l("449918"),
        E = l("38654"),
        I = l("368639"),
        _ = l("393414"),
        T = l("506885"),
        v = l("217513"),
        A = l("19287"),
        O = l("26989"),
        R = l("305961"),
        j = l("660478"),
        b = l("697218"),
        L = l("956089"),
        M = l("449008"),
        D = l("158998"),
        y = l("50885"),
        B = l("921031"),
        w = l("685829"),
        H = l("863636"),
        F = l("380710"),
        U = l("469421"),
        k = l("126623"),
        P = l("15015"),
        G = l("771311"),
        W = l("667712"),
        z = l("469242"),
        V = l("653138"),
        Y = l("49111"),
        Z = l("724210"),
        X = l("133335"),
        q = l("782340"),
        K = l("4767"),
        Q = l("250455"),
        J = l("919163");
      let $ = m.AvatarSizes.SIZE_80,
        ee = "required";
      function et(e) {
        var t;
        let { guild: l, user: s } = e,
          {
            avatarSrc: r,
            eventHandlers: o,
            isAvatarAnimating: h,
          } = (0, A.useAnimatedAvatarSrc)({
            user: s,
            guildId: l.id,
            size: 120,
          }),
          { avatarDecorationSrc: f } = (0, p.default)({
            user: s,
            size: (0, g.getDecorationSizeForAvatarSize)($),
            animateOnHover: !h,
          }),
          C = (0, c.useStateFromStores)([O.default], () =>
            O.default.getSelfMember(l.id)
          ),
          N = (0, c.useStateFromStoresArray)([O.default], () =>
            O.default.getMemberRoleWithPendingUpdates(l.id, s.id)
          ),
          x = (0, c.useStateFromStores)([R.default], () =>
            R.default.getRoles(l.id)
          ),
          S = d(N)
            .filter(e => x.hasOwnProperty(e))
            .map(e => x[e])
            .orderBy("position", "desc")
            .value(),
          E = (0, v.default)(s.id, l.id);
        a.useEffect(() => {
          (0, T.default)(s.id, s.getAvatarURL(l.id, (0, m.getAvatarSize)($)), {
            guildId: l.id,
          });
        }, []);
        let _ = (0, I.parseBioReact)(null == E ? void 0 : E.bio),
          j = y.default.getEnableHardwareAcceleration()
            ? m.AnimatedAvatar
            : m.Avatar;
        return (0, n.jsxs)("div", {
          className: K.profile,
          children: [
            (0, n.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE,
            }),
            (0, n.jsx)(m.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children:
                q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION,
            }),
            (0, n.jsxs)("div", {
              className: K.profileCard,
              children: [
                (0, n.jsx)("div", {
                  ...o,
                  children: (0, n.jsx)(j, {
                    src: r,
                    avatarDecoration: f,
                    size: $,
                    "aria-label": s.username,
                  }),
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  className: K.username,
                  children:
                    null !== (t = null == C ? void 0 : C.nick) && void 0 !== t
                      ? t
                      : D.default.getName(s),
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: i(J.markup, K.bio),
                  children: _,
                }),
                null != S &&
                  S.length > 0 &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("hr", { className: K.separator }),
                      (0, n.jsx)(m.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        className: K.title,
                        children: q.default.Messages.ROLES,
                      }),
                      (0, n.jsx)("div", {
                        className: K.roles,
                        children:
                          null == S
                            ? void 0
                            : S.map(e => {
                                var t;
                                return (0, n.jsxs)(
                                  "div",
                                  {
                                    className: K.role,
                                    children: [
                                      (0, n.jsx)(m.RoleCircle, {
                                        color:
                                          null !== (t = e.colorString) &&
                                          void 0 !== t
                                            ? t
                                            : (0, u.int2hex)(
                                                Y.DEFAULT_ROLE_COLOR
                                              ),
                                        className: K.roleDot,
                                      }),
                                      (0, n.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-primary",
                                        children: e.name,
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
            }),
          ],
        });
      }
      function el(e) {
        var t;
        let { prompt: l, guild: s } = e,
          [r, d] = a.useState(null),
          [u, f] = a.useState(new Set()),
          C =
            null == l
              ? void 0
              : null === (t = l.options) || void 0 === t
                ? void 0
                : t.filter(e => u.has(e.id)),
          N = (0, F.getSelectedRoleIds)(C),
          x = (0, F.getSelectedChannelIds)(C),
          g = (0, c.useStateFromStoresArray)([H.default], () =>
            H.default.getOnboardingResponsesForPrompt(s.id, l.id)
          ),
          { helpText: p, helpTextAdditional: E } = (0,
          k.useCustomizeCommunityPromptHelpText)({
            guild: s,
            prompt: l,
            selectedRoleIds: N,
            selectedChannelIds: x,
            itemHook: (e, t) =>
              (0, n.jsx)(
                m.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                t
              ),
          }),
          { handleSelectOption: I } = (0, U.default)(s.id),
          _ = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500),
          T = (0, o.useSpring)({
            from: {
              color: l.isNew ? _.hex({ opacity: 1 }) : _.hex({ opacity: 0 }),
            },
            color: _.hex({ opacity: 0 }),
            config: { duration: 300 },
            delay: 500,
          }),
          v = l.options.map(e => ({ value: e.id, ...e })),
          A = l.options.filter(e => g.includes(e.id)).map(e => e.id);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.animated.div, {
            className: K.prompt,
            style: { borderColor: T.color },
            children: [
              l.isNew &&
                (0, n.jsx)(L.TextBadge, {
                  color: (0, S.getColor)(Y.Color.BRAND_260),
                  text: q.default.Messages.NEW,
                  className: K.newBadge,
                }),
              (0, n.jsxs)(m.Heading, {
                className: K.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  l.title,
                  l.required
                    ? (0, n.jsx)("span", {
                        className: i(K.required, {
                          [K.error]: (null == r ? void 0 : r.type) === ee,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, n.jsx)(z.default, {
                options: v,
                value: A,
                onChange: e => {
                  let t = e.find(e => !g.includes(e.id)),
                    n = e.map(e => e.id),
                    a = null != t;
                  if (a)
                    I(l, t, !0),
                      l.singleSelect && l.options.forEach(e => u.delete(e.id)),
                      u.add(t.id);
                  else {
                    let e = g.filter(e => !n.includes(e)),
                      t = l.options.filter(t => e.includes(t.id));
                    if (g.length <= t.length && l.required) {
                      d({ type: ee });
                      return;
                    }
                    t.forEach(e => {
                      I(l, e, !1), u.delete(e.id);
                    });
                  }
                  f(new Set(u)), d(null);
                },
                canBeNew: !l.isNew,
              }),
              (0, n.jsxs)(m.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: K.helpText,
                children: [p, " ", E],
              }),
            ],
          }),
        });
      }
      function en(e) {
        var t;
        let { prompt: l, guild: s } = e,
          [r, d] = a.useState(null),
          [u, f] = a.useState(new Set()),
          C =
            null == l
              ? void 0
              : null === (t = l.options) || void 0 === t
                ? void 0
                : t.filter(e => u.has(e.id)),
          N = (0, F.getSelectedRoleIds)(C),
          x = (0, F.getSelectedChannelIds)(C),
          g = (0, c.useStateFromStoresArray)([H.default], () =>
            H.default.getOnboardingResponsesForPrompt(s.id, l.id)
          ),
          { helpText: p, helpTextAdditional: E } = (0,
          k.useCustomizeCommunityPromptHelpText)({
            guild: s,
            prompt: l,
            selectedRoleIds: N,
            selectedChannelIds: x,
            itemHook: (e, t) =>
              (0, n.jsx)(
                m.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                t
              ),
          }),
          { handleSelectOption: I } = (0, U.default)(s.id),
          _ = (e, t) => {
            if (!t && 1 === g.length && l.required) {
              d({ type: ee });
              return;
            }
            I(l, e, null != t && t),
              l.singleSelect && t && l.options.forEach(e => u.delete(e.id)),
              t ? u.add(e.id) : u.delete(e.id),
              f(new Set(u)),
              d(null);
          },
          T = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500),
          v = (0, o.useSpring)({
            from: {
              color: l.isNew ? T.hex({ opacity: 1 }) : T.hex({ opacity: 0 }),
            },
            color: T.hex({ opacity: 0 }),
            config: { duration: 300 },
            delay: 500,
          });
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.animated.div, {
            className: K.prompt,
            style: { borderColor: v.color },
            children: [
              l.isNew &&
                (0, n.jsx)(L.TextBadge, {
                  color: (0, S.getColor)(Y.Color.BRAND_260),
                  text: q.default.Messages.NEW,
                  className: K.newBadge,
                }),
              (0, n.jsxs)(m.Heading, {
                className: K.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  l.title,
                  l.required
                    ? (0, n.jsx)("span", {
                        className: i(K.required, {
                          [K.error]: (null == r ? void 0 : r.type) === ee,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, n.jsx)("div", {
                className: K.promptOptions,
                children: l.options.map(e =>
                  (0, n.jsx)(
                    W.default,
                    {
                      hideMemberCount: !0,
                      guildId: s.id,
                      option: e,
                      onSelect: t => _(e, t),
                      selected: g.includes(e.id),
                      canBeNew: !l.isNew,
                    },
                    e.id
                  )
                ),
              }),
              (0, n.jsxs)(m.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: K.helpText,
                children: [p, " ", E],
              }),
            ],
          }),
        });
      }
      function ea(e) {
        let { guildId: t, onBrowseChannels: l } = e,
          s = (0, f.isThemeDark)((0, x.default)()),
          r = (0, c.useStateFromStores)([R.default], () =>
            R.default.getGuild(t)
          ),
          d = (0, c.useStateFromStores)([b.default], () =>
            b.default.getCurrentUser()
          ),
          o = (0, N.default)("(min-width: 1344px)") && null != d,
          u = a.useCallback(() => {
            (0, _.transitionTo)(
              Y.Routes.CHANNEL(t, Z.StaticChannelRoute.CHANNEL_BROWSER)
            ),
              null == l || l();
          }, [t, l]),
          h = (0, c.useStateFromStores)([j.default], () =>
            j.default.hasUnread(t, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION)
          ),
          {
            onboardingPromptsRaw: g,
            newOnboardingPrompts: p,
            onboardingPromptsWithNewAnswers: I,
            newAnswersCount: T,
            onboardingPrompts: v,
          } = (0, P.default)(t);
        a.useEffect(() => {
          if ((null == r ? void 0 : r.id) != null)
            !E.default.isFullServerPreview(r.id) &&
              (H.default.shouldFetchPrompts(r.id) || h) &&
              (0, w.fetchOnboardingPrompts)(r.id);
        }, [null == r ? void 0 : r.id, h]),
          a.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null) {
              if (!E.default.isFullServerPreview(r.id))
                return () => {
                  (0, C.ackGuildFeature)(
                    r.id,
                    X.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                    H.default.ackIdForGuild(r.id)
                  ),
                    B.default.updateOnboardingResponses(r.id);
                };
            }
          }, [null == r ? void 0 : r.id]);
        let A = a.useCallback(
          e => {
            if (null == r) return null;
            switch (e.type) {
              case V.OnboardingPromptType.MULTIPLE_CHOICE:
                return (0, n.jsx)(en, { prompt: e, guild: r }, e.id);
              case V.OnboardingPromptType.DROPDOWN:
                return (0, n.jsx)(el, { prompt: e, guild: r }, e.id);
              default:
                (0, M.assertNever)(e.type);
            }
          },
          [r]
        );
        if (null == r) return null;
        if (0 === g.length) {
          let e = (0, S.getColor)(
              s ? Y.Color.PRIMARY_300 : Y.Color.PRIMARY_500
            ),
            t = (0, S.getColor)(s ? Y.Color.PRIMARY_700 : Y.Color.PRIMARY_230);
          return (0, n.jsx)("div", {
            className: Q.chat,
            children: (0, n.jsx)("div", {
              className: i(Q.content, K.emptyPage),
              children: (0, n.jsxs)("div", {
                className: K.emptyContainer,
                children: [
                  (0, n.jsx)(G.default, {
                    className: K.emptyIcon,
                    foregroundColor: e,
                    backgroundColor: t,
                  }),
                  (0, n.jsx)(m.Heading, {
                    className: K.emptyHeader,
                    variant: "heading-md/semibold",
                    children:
                      q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER,
                  }),
                  (0, n.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    children:
                      q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format(
                        { onBrowseChannels: u }
                      ),
                  }),
                ],
              }),
            }),
          });
        }
        return (0, n.jsx)("div", {
          className: i(Q.chat, K.scrollerContainer),
          children: (0, n.jsxs)(m.AdvancedScroller, {
            className: K.scroller,
            fade: !0,
            children: [
              (0, n.jsxs)("div", {
                className: K.pageBody,
                children: [
                  (p.length > 0 || I.length > 0) &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, n.jsx)(m.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children:
                              q.default.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format(
                                { count: p.length + T }
                              ),
                          }),
                        }),
                        p.map(A),
                        I.map(A),
                        (0, n.jsx)("div", { className: K.sectionSeparator }),
                      ],
                    }),
                  v.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(m.Heading, {
                              variant: "heading-md/semibold",
                              color: "header-primary",
                              children:
                                q.default.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format(
                                  { count: v.length }
                                ),
                            }),
                            (0, n.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children:
                                q.default.Messages
                                  .ONBOARDING_PROMPT_MEMBER_DESCRIPTION,
                            }),
                          ],
                        }),
                        v.map(A),
                      ],
                    }),
                ],
              }),
              o && (0, n.jsx)(et, { guild: r, user: d }),
            ],
          }),
        });
      }
    },
    771311: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("75196");
      function s(e) {
        let {
          width: t = 120,
          height: l = 80,
          backgroundColor: s,
          foregroundColor: i,
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 120 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("circle", { cx: "60", cy: "40", r: "32", fill: s }),
            (0, n.jsx)("path", {
              d: "M75.0832 29.8546L75.0835 29.8548C75.1362 29.884 75.1683 29.9391 75.1683 29.9983C75.1683 30.5369 75.1197 37.4409 73.0784 44.1629C71.005 50.9907 67.1615 56.8317 60.0016 56.8317C52.8418 56.8317 48.9982 50.9907 46.9248 44.1629C44.8836 37.4409 44.835 30.5369 44.835 29.9983C44.835 29.9391 44.8671 29.884 44.9197 29.8548L44.9201 29.8546L59.919 21.5218C59.9191 21.5218 59.9193 21.5217 59.9194 21.5216C59.9718 21.4928 60.0316 21.4928 60.0839 21.5217C60.084 21.5217 60.0842 21.5218 60.0843 21.5218L75.0832 29.8546ZM52.2516 46.6667V48.1667H53.7516H66.2516H67.7516V46.6667C67.7516 44.43 67.0409 42.4584 65.6254 41.0429C64.7687 40.1861 63.7082 39.5876 62.5086 39.2485C64.3809 38.3237 65.6683 36.3949 65.6683 34.165C65.6683 31.0349 63.1317 28.4983 60.0016 28.4983C56.8715 28.4983 54.335 31.0349 54.335 34.165C54.335 36.3949 55.6224 38.3237 57.4947 39.2485C56.295 39.5876 55.2346 40.1861 54.3778 41.0429C52.9623 42.4584 52.2516 44.43 52.2516 46.6667Z",
              fill: i,
              stroke: i,
              strokeWidth: "3",
            }),
            (0, n.jsx)("path", {
              d: "M103.67 1.80634C103.67 0.808724 102.862 0 101.864 0C100.866 0 100.058 0.808724 100.058 1.80634V3.64278C100.058 4.64039 100.866 5.44911 101.864 5.44911C102.862 5.44911 103.67 4.64039 103.67 3.64278V1.80634Z",
              fill: "#58F287",
            }),
            (0, n.jsx)("path", {
              d: "M103.67 16.3574C103.67 15.3597 102.862 14.551 101.864 14.551C100.866 14.551 100.058 15.3597 100.058 16.3574V18.1938C100.058 19.1914 100.866 20.0001 101.864 20.0001C102.862 20.0001 103.67 19.1914 103.67 18.1938V16.3574Z",
              fill: "#58F287",
            }),
            (0, n.jsx)("path", {
              d: "M110.194 11.8412C111.191 11.8412 112 11.0325 112 10.0349C112 9.03724 111.191 8.22852 110.194 8.22852H108.357C107.36 8.22852 106.551 9.03724 106.551 10.0349C106.551 11.0325 107.36 11.8412 108.357 11.8412H110.194Z",
              fill: "#58F287",
            }),
            (0, n.jsx)("path", {
              d: "M95.6429 11.7413C96.6405 11.7413 97.4492 10.9326 97.4492 9.935C97.4492 8.93739 96.6405 8.12866 95.6429 8.12866H93.8064C92.8088 8.12866 92.0001 8.93739 92.0001 9.935C92.0001 10.9326 92.8088 11.7413 93.8064 11.7413H95.6429Z",
              fill: "#58F287",
            }),
            (0, n.jsx)("path", {
              d: "M19.1501 74.4573L23.3147 73.0684C23.5192 72.9747 23.6925 72.8241 23.814 72.6347C23.9354 72.4454 24 72.225 24 72C24 71.775 23.9354 71.5546 23.814 71.3653C23.6925 71.1759 23.5192 71.0253 23.3147 70.9316L19.1501 69.5427C18.8657 69.4142 18.6378 69.1862 18.5094 68.9016L17.0145 64.7348C16.9442 64.521 16.8083 64.3349 16.6262 64.203C16.444 64.071 16.2249 64 16 64C15.7751 64 15.556 64.071 15.3738 64.203C15.1917 64.3349 15.0558 64.521 14.9855 64.7348L13.4906 68.9016C13.3622 69.1862 13.1343 69.4142 12.8499 69.5427L8.68528 70.9316C8.4808 71.0253 8.30752 71.1759 8.18604 71.3653C8.06457 71.5546 8 71.775 8 72C8 72.225 8.06457 72.4454 8.18604 72.6347C8.30752 72.8241 8.4808 72.9747 8.68528 73.0684L12.8499 74.4573C13.0011 74.5032 13.1387 74.5858 13.2505 74.6976C13.3622 74.8094 13.4447 74.9471 13.4906 75.0984L14.9855 79.2652C15.0558 79.479 15.1917 79.6651 15.3738 79.797C15.556 79.929 15.7751 80 16 80C16.2249 80 16.444 79.929 16.6262 79.797C16.8083 79.6651 16.9442 79.479 17.0145 79.2652L18.5094 75.0984C18.5553 74.9471 18.6378 74.8094 18.7495 74.6976C18.8613 74.5858 18.9989 74.5032 19.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    986003: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          hasNotSetUpChannelOptIn: function () {
            return c;
          },
          toggleShowAllChannels: function () {
            return h;
          },
          optIntoAllChannelsForExistingMember: function () {
            return f;
          },
        }),
        l("702976"),
        l("222007"),
        l("424973"),
        l("151426");
      var n = l("921031");
      l("374363");
      var a = l("923959"),
        s = l("26989"),
        i = l("282109"),
        r = l("568734"),
        d = l("629220"),
        o = l("512395"),
        u = l("657944");
      function c(e) {
        var t, l;
        let n = (0, o.isOptInEnabledForGuild)(e),
          a =
            null !==
              (l =
                null === (t = s.default.getSelfMember(e)) || void 0 === t
                  ? void 0
                  : t.flags) && void 0 !== l
              ? l
              : 0,
          d = (0, r.hasFlag)(a, u.GuildMemberFlags.COMPLETED_ONBOARDING),
          c = i.default.getOptedInChannels(e).size > 0;
        return !n && !d && !c;
      }
      function h(e) {
        if (c(e)) {
          f(e);
          return;
        }
        {
          let t = (0, o.isOptInEnabledForGuild)(e);
          (0, d.setGuildOptIn)(e, !t);
        }
      }
      function f(e) {
        let { include: t = new Set(), exclude: l = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = a.default.getChannels(e),
          i = [
            ...s[(0, a.GUILD_SELECTABLE_CHANNELS_KEY)],
            ...s[(0, a.GUILD_VOCAL_CHANNELS_KEY)],
          ]
            .filter(e => {
              let { channel: t } = e;
              return !t.isThread() && !l.has(t.id);
            })
            .map(e => {
              let { channel: t } = e;
              return t.id;
            });
        t.forEach(e => i.push(e)),
          n.default.onboardExistingMember(e, new Set(i));
      }
    },
    61845: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        }),
        l("222007");
      var n = l("884691"),
        a = l("446674"),
        s = l("913144"),
        i = l("820542"),
        r = l("870691"),
        d = l("282109"),
        o = l("629220"),
        u = l("986003"),
        c = l("49111");
      function h(e) {
        s.default.dispatch({
          type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
          guildId: e,
        });
      }
      function f(e) {
        let t = (0, a.useStateFromStores)([d.default], () =>
          d.default.getPendingChannelUpdates(e)
        );
        n.useEffect(() => (h(e), () => h(e)), [e]),
          n.useEffect(() => {
            null != t && (0, o.updateOptInChannelsBatched)(e, t);
          }, [e, t]);
        let l = n.useCallback((e, t, l) => {
          let n = d.default.isChannelOptedIn(e, t),
            a = t === l;
          !n &&
            r.default.isCollapsed(l) &&
            null != l &&
            (0, i.categoryExpand)(l),
            (0, u.hasNotSetUpChannelOptIn)(e)
              ? a
                ? (0, u.optIntoAllChannelsForExistingMember)(e, {
                    include: new Set([t]),
                  })
                : (0, u.optIntoAllChannelsForExistingMember)(e, {
                    exclude: new Set([t]),
                  })
              : (0, o.updateOptInChannelsImmediate)(e, t, !n, {
                  section: c.AnalyticsSections.CHANNEL_BROWSER,
                });
        }, []);
        return { onChannelClick: l };
      }
    },
    5973: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ChannelBrowserSidebar: function () {
            return A;
          },
          default: function () {
            return O;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("446674"),
        d = l("77078"),
        o = l("665182"),
        u = l("462998"),
        c = l("982108"),
        h = l("245997"),
        f = l("923959"),
        m = l("305961"),
        C = l("957255"),
        N = l("810567"),
        x = l("689476"),
        g = l("599110"),
        p = l("676143"),
        S = l("724268"),
        E = l("49111"),
        I = l("724210"),
        _ = l("782340"),
        T = l("225894"),
        v = l("250455");
      function A(e) {
        let { channelId: t } = e;
        return (0, n.jsx)(o.default, {
          sidebarType: o.ChatSidebarType.ThreadSidebar,
          maxWidth: 600,
          children: (0, n.jsx)(u.default, {
            channelId: t,
            baseChannelId: I.StaticChannelRoute.CHANNEL_BROWSER,
          }),
        });
      }
      function O(e) {
        let { guildId: t } = e,
          [s, o] = a.useState(""),
          u = (0, r.useStateFromStores)([m.default], () =>
            m.default.getGuild(t)
          ),
          A = (0, r.useStateFromStores)([f.default], () =>
            f.default.getChannels(t)
          ),
          O = (0, r.useStateFromStores)([h.default], () =>
            h.default.getCategories(t)
          ),
          R = (0, p.useFilterCategoriesByQuery)(t, O, A, s),
          j = (0, r.useStateFromStores)([C.default], () =>
            C.default.canWithPartialContext(E.Permissions.MANAGE_CHANNELS, {
              guildId: t,
            })
          ),
          b = (0, r.useStateFromStores)(
            [c.default],
            () =>
              null !=
              c.default.getCurrentSidebarChannelId(
                I.StaticChannelRoute.CHANNEL_BROWSER
              )
          ),
          L = a.useCallback(() => o(""), [o]),
          M = a.useCallback(() => {
            (0, d.openModalLazy)(async () => {
              let { default: e } = await l
                .el("581354")
                .then(l.bind(l, "581354"));
              return l =>
                (0, n.jsx)(e, { ...l, channelType: null, guildId: t });
            });
          }, [t]);
        return null == u
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("div", {
                className: i(v.chat, T.container),
                children: (0, n.jsxs)("div", {
                  className: i(T.pageBody),
                  children: [
                    (0, n.jsxs)("div", {
                      className: T.header,
                      children: [
                        (0, n.jsx)(N.default, {
                          className: T.search,
                          size: N.default.Sizes.MEDIUM,
                          query: s,
                          onChange: e => {
                            "" === s &&
                              "" !== e &&
                              g.default.track(E.AnalyticEvents.SEARCH_STARTED, {
                                search_type: "channel browser",
                              }),
                              o(e.toLowerCase());
                          },
                          onClear: L,
                          placeholder:
                            _.default.Messages
                              .CHANNEL_BROWSER_SEARCH_PLACEHOLDER,
                        }),
                        j
                          ? (0, n.jsxs)(d.Button, {
                              className: T.createButton,
                              innerClassName: T.createButtonInner,
                              onClick: M,
                              children: [
                                (0, n.jsx)(x.default, {
                                  className: T.createIcon,
                                }),
                                _.default.Messages.CREATE,
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, n.jsx)(S.default, {
                      className: T.browser,
                      channels: A,
                      categories: R,
                      guild: u,
                      hasSidebar: b,
                    }),
                  ],
                }),
              }),
            });
      }
    },
    341258: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useIsChecked: function () {
            return r;
          },
          useIsDisabled: function () {
            return d;
          },
          useDisabledTooltip: function () {
            return o;
          },
        });
      var n = l("446674"),
        a = l("282109"),
        s = l("986003"),
        i = l("782340");
      function r(e, t, l) {
        return (0, n.useStateFromStores)([a.default], () => {
          var n, i, r;
          if (t === l) return a.default.isChannelOptedIn(e, t, !0);
          return (
            (n = e),
            (i = t),
            (r = a.default),
            !!(0, s.hasNotSetUpChannelOptIn)(n) ||
              r.isChannelOptedIn(n, i, !0) ||
              (null != l && a.default.isChannelOptedIn(e, l, !0))
          );
        });
      }
      function d(e, t, l) {
        return (0, n.useStateFromStores)(
          [a.default],
          () => t !== l && null != l && a.default.isChannelOptedIn(e, l, !0)
        );
      }
      function o(e, t) {
        return (0, n.useStateFromStores)([a.default], () => {
          if (null != t && a.default.isChannelOptedIn(e, t, !0))
            return i.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY;
        });
      }
    },
    724268: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return F;
          },
        }),
        l("222007"),
        l("424973"),
        l("834022");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        r = l("446674"),
        d = l("151426"),
        o = l("669491"),
        u = l("77078"),
        c = l("272030"),
        h = l("10641"),
        f = l("848848"),
        m = l("915675"),
        C = l("41594"),
        N = l("367376"),
        x = l("15684"),
        g = l("393414"),
        p = l("208021"),
        S = l("716214"),
        E = l("401690"),
        I = l("98292"),
        _ = l("956089"),
        T = l("676143"),
        v = l("61845"),
        A = l("341258"),
        O = l("9108"),
        R = l("49111"),
        j = l("724210"),
        b = l("782340"),
        L = l("88056");
      let M = new Set([R.ChannelTypes.GUILD_FORUM, R.ChannelTypes.GUILD_MEDIA]),
        D = new Set([
          R.ChannelTypes.GUILD_VOICE,
          R.ChannelTypes.GUILD_STAGE_VOICE,
        ]);
      function y(e) {
        let { guild: t, channel: a, onCategoryClick: s } = e,
          r = (0, A.useIsChecked)(t.id, a.id, a.id),
          d = (0, A.useIsDisabled)(t.id, a.id, a.id);
        return (0, n.jsxs)("div", {
          className: i(L.categoryRow, { [L.uncategorized]: "null" === a.id }),
          onContextMenu: e => {
            (0, c.openContextMenuLazy)(e, async () => {
              let { default: e } = await l
                .el("142047")
                .then(l.bind(l, "142047"));
              return l => (0, n.jsx)(e, { ...l, channel: a, guild: t });
            });
          },
          children: [
            (0, n.jsx)(u.Text, {
              className: L.categoryText,
              color: "text-muted",
              variant: "text-xs/semibold",
              lineClamp: 1,
              children: a.name,
            }),
            "null" !== a.id &&
              !d &&
              (0, n.jsxs)(u.Clickable, {
                className: L.selectAll,
                onClick: () => {
                  !d && s(t.id, a.id, a.id);
                },
                children: [
                  (0, n.jsx)(u.Checkbox, {
                    className: L.selectAllCheckbox,
                    size: 14,
                    shape: u.Checkbox.Shapes.SMALL_BOX,
                    value: r,
                    type: u.Checkbox.Types.INVERTED,
                    displayOnly: !0,
                  }),
                  (0, n.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: b.default.Messages.CHANNEL_BROWSER_SELECT_ALL,
                  }),
                ],
              }),
          ],
        });
      }
      let B = a.memo(function () {
          return (0, n.jsx)("div", { className: L.separator });
        }),
        w = a.memo(function (e) {
          let { index: t } = e;
          return (0, n.jsx)(
            u.Text,
            {
              variant: "text-xs/normal",
              className: L.subtitleSeparator,
              children: "\xb7",
            },
            "separator-".concat(t)
          );
        }),
        H = a.memo(function (e) {
          let {
              channel: t,
              category: a,
              guild: s,
              isFirstChannel: d,
              isLastChannel: h,
              onChannelClick: v,
              tooltipDirection: O = "right",
            } = e,
            { isSubscriptionGated: y } = (0, f.default)(t.id),
            H = (0, A.useIsChecked)(s.id, t.id, a.id),
            F = (0, A.useIsDisabled)(s.id, t.id, a.id),
            U = (0, A.useDisabledTooltip)(s.id, a.id),
            k = (0, r.useStateFromStores)([E.default], () =>
              E.default.getActiveThreadCount(s.id, t.id)
            ),
            P = (0, r.useStateFromStores)([x.default], () =>
              x.default.shouldIndicateNewChannel(s.id, t.id)
            ),
            G = e => {
              if (!F) return e.stopPropagation(), v(s.id, t.id, a.id), !0;
            },
            W = e => {
              t.isGuildVocal()
                ? (0, c.openContextMenuLazy)(e, async () => {
                    let { default: e } = await l
                      .el("168003")
                      .then(l.bind(l, "168003"));
                    return l => (0, n.jsx)(e, { ...l, channel: t, guild: s });
                  })
                : (0, c.openContextMenuLazy)(e, async () => {
                    let { default: e } = await l
                      .el("327241")
                      .then(l.bind(l, "327241"));
                    return l => (0, n.jsx)(e, { ...l, channel: t, guild: s });
                  });
            },
            z = (function (e, t) {
              let l = [];
              return (
                R.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.type) &&
                  t >= 1 &&
                  l.push(
                    (0, n.jsx)(
                      u.Text,
                      {
                        variant: "text-xs/normal",
                        className: L.channelSubtitle,
                        children:
                          b.default.Messages.ACTIVE_FORUM_POST_COUNT.format({
                            count: t,
                          }),
                      },
                      "thread-count"
                    )
                  ),
                !D.has(e.type) &&
                  l.push(
                    (0, n.jsx)(
                      u.Text,
                      {
                        variant: "text-xs/normal",
                        className: L.channelSubtitle,
                        children: (0, T.getActiveAgoTimestamp)(e.id),
                      },
                      "active"
                    )
                  ),
                null != e.topic &&
                  e.topic.length > 0 &&
                  l.push(
                    (0, n.jsx)(
                      I.default,
                      {
                        children: (0, n.jsx)(u.Text, {
                          className: L.topic,
                          variant: "text-xs/normal",
                          children: N.default.parseTopic(e.topic, !0, {
                            channelId: e.id,
                          }),
                        }),
                      },
                      "topic"
                    )
                  ),
                [
                  l.map((e, t) => [
                    e,
                    (0, n.jsx)(
                      w,
                      { index: t },
                      "subtitle-separator-".concat(t)
                    ),
                  ]),
                ]
                  .flat(2)
                  .slice(0, -1)
              );
            })(t, k),
            V = e =>
              (e.stopPropagation(), M.has(t.type) || e.shiftKey)
                ? ((0, g.transitionToGuild)(s.id, t.id), !0)
                : t.isGuildStageVoice() || t.isGuildVoice()
                  ? ((0, S.connectAndOpen)(t), !0)
                  : (p.default.openChannelAsSidebar({
                      guildId: t.guild_id,
                      channelId: t.id,
                      baseChannelId: j.StaticChannelRoute.CHANNEL_BROWSER,
                    }),
                    !0),
            Y = b.default.Messages.CHANNEL_BROWSER_VIEW;
          t.isGuildStageVoice() || t.isGuildVoice()
            ? (Y = b.default.Messages.JOIN)
            : t.isForumLikeChannel() && (Y = b.default.Messages.OPEN);
          let Z = F ? "text-muted" : "text-normal",
            X = (0, u.useToken)(
              F ? o.default.colors.TEXT_MUTED : o.default.colors.TEXT_NORMAL
            ).hex();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(u.Tooltip, {
                text: U,
                delay: 500,
                position: O,
                children: e =>
                  (0, n.jsxs)(u.Clickable, {
                    className: i(L.channelRow, {
                      [L.firstChannel]: d,
                      [L.lastChannel]: h,
                      [L.disabled]: F,
                    }),
                    ...e,
                    onClick: G,
                    onContextMenu: W,
                    children: [
                      (0, n.jsxs)("div", {
                        className: L.channelInfo,
                        children: [
                          (0, n.jsxs)("div", {
                            className: L.channelName,
                            children: [
                              (0, n.jsx)(C.ChannelItemIcon, {
                                channel: t,
                                guild: s,
                              }),
                              (0, n.jsx)(I.default, {
                                className: L.name,
                                children: (0, n.jsx)(u.Text, {
                                  className: L.channelText,
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  color: Z,
                                  children: t.name,
                                }),
                              }),
                              y
                                ? (0, n.jsx)(m.default, {
                                    color: X,
                                    className: L.premiumIcon,
                                  })
                                : null,
                              P
                                ? (0, n.jsx)(_.TextBadge, {
                                    text: b.default.Messages.NEW,
                                    color:
                                      o.default.unsafe_rawColors.BRAND_260.css,
                                    className: L.titleBadge,
                                  })
                                : null,
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: L.channelSubtitles,
                            children: z,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: L.channelActions,
                        children: [
                          (0, n.jsx)(u.Button, {
                            look: u.ButtonLooks.OUTLINED,
                            color: u.ButtonColors.PRIMARY,
                            size: u.ButtonSizes.SMALL,
                            className: L.viewChannelButton,
                            onClick: V,
                            children: Y,
                          }),
                          (0, n.jsx)(u.Checkbox, {
                            "aria-checked": H,
                            value: H,
                            type: u.Checkbox.Types.INVERTED,
                            disabled: F,
                            innerClassName: L.checkboxInner,
                            displayOnly: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              !h && (0, n.jsx)(B, {}),
            ],
          });
        });
      function F(e) {
        let {
            categories: t,
            guild: l,
            className: s,
            innerClassName: r,
            hasSidebar: o,
          } = e,
          { onChannelClick: c } = (0, v.default)(l.id),
          f = (0, h.useIsDismissibleContentDismissed)(
            d.DismissibleContent.CHANNEL_BROWSER_NUX
          ),
          m = f ? 0 : -1,
          C = a.useCallback(
            e => {
              let { section: a } = e;
              if (0 === a && -1 === m) return null;
              let s = t._categories[a + m];
              return (0, n.jsx)(
                y,
                { channel: s.channel, guild: l, onCategoryClick: c },
                s.channel.id
              );
            },
            [t, l, m, c]
          ),
          N = a.useCallback(
            e => {
              let { section: a, row: s } = e;
              if (0 === a && -1 === m)
                return (0, n.jsx)(O.default, { guild: l });
              let i = t._categories[a + m],
                r = t[i.channel.id][s];
              return null == r
                ? null
                : (0, n.jsx)(
                    H,
                    {
                      category: i.channel,
                      channel: r.channel,
                      guild: l,
                      isFirstChannel: 0 === s,
                      isLastChannel: t[i.channel.id].length - 1 === s,
                      tooltipDirection: o ? "right" : "top",
                      onChannelClick: c,
                    },
                    r.channel.id
                  );
            },
            [t, l, m, o, c]
          ),
          x = (0, O.useNuxCardHeight)(l.id),
          g = (0, T.useChannelBrowserSections)(l.id, t, 64, x);
        return (0, n.jsx)(
          u.ListAuto,
          {
            className: s,
            innerClassName: i(r, L.scrollerInner),
            sectionHeight: 48,
            rowHeight: e => g[e].rowHeight,
            renderSection: C,
            renderRow: N,
            sections: g.map(e => e.rowCount),
          },
          "channel-browser-list"
        );
      }
    },
    9108: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useNuxCardHeight: function () {
            return g;
          },
          default: function () {
            return p;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("414456"),
        s = l.n(a),
        i = l("151426"),
        r = l("77078"),
        d = l("10641"),
        o = l("592407"),
        u = l("584027"),
        c = l("945330"),
        h = l("512395"),
        f = l("49111"),
        m = l("994428"),
        C = l("782340"),
        N = l("873404"),
        x = l("652720");
      function g(e) {
        let t = (0, h.useShouldShowOnboardingAdminUpsellForGuild)(e);
        return t ? 250 : 152;
      }
      function p(e) {
        let { guild: t } = e,
          l = (0, h.useShouldShowOnboardingAdminUpsellForGuild)(t.id),
          a = (0, d.useIsDismissibleContentDismissed)(
            i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL
          ),
          g =
            l && !a
              ? i.DismissibleContent
                  .GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL
              : i.DismissibleContent.CHANNEL_BROWSER_NUX;
        (0, d.requestMarkDismissibleContentAsShown)(g);
        let p = l
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(r.Heading, {
                      className: N.heading,
                      color: "always-white",
                      variant: "heading-lg/semibold",
                      children:
                        C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children:
                        C.default.Messages
                          .CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION,
                    }),
                    (0, n.jsx)(r.Button, {
                      className: N.checkItOut,
                      onClick: () => {
                        o.default.open(
                          t.id,
                          f.GuildSettingsSections.ONBOARDING
                        ),
                          (0, d.markDismissibleContentAsDismissed)(g, {
                            dismissAction: m.ContentDismissActionType.PRIMARY,
                          });
                      },
                      look: r.Button.Looks.INVERTED,
                      children: (0, n.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "none",
                        children:
                          C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(u.OnboardingPreview, { isTooltip: !0 }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: N.nuxContent,
              children: [
                (0, n.jsx)("img", {
                  width: 180,
                  className: N.image,
                  src: x,
                  alt: "",
                  "aria-hidden": !0,
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(r.Heading, {
                      className: N.heading,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: C.default.Messages.CHANNEL_BROWSER_NUX_TITLE,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION,
                    }),
                    (0, n.jsx)(r.Text, {
                      className: N.tip,
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format(),
                    }),
                  ],
                }),
              ],
            });
        return (0, n.jsxs)("div", {
          className: s(N.container, { [N.adminUpsell]: l }),
          children: [
            (0, n.jsx)(r.Clickable, {
              className: N.closeButton,
              onClick: () => {
                (0, d.markDismissibleContentAsDismissed)(g, {
                  dismissAction: m.ContentDismissActionType.DISMISS,
                });
              },
              children: (0, n.jsx)(c.default, {}),
            }),
            p,
          ],
        });
      }
    },
    641892: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("797350"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: a = "currentColor",
              className: s,
              foreground: i,
            } = e;
            return (0, n.jsx)("svg", {
              className: s,
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                className: i,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.5 17.2916V3.74996H17.5V18.3333H4.5C3.3955 18.3333 2.5 17.4005 2.5 16.25V3.74996C2.5 2.59944 3.3955 1.66663 4.5 1.66663H15.5V15.2083H4.5C3.94775 15.2083 3.5 15.6742 3.5 16.25C3.5 16.8257 3.94775 17.2916 4.5 17.2916H16.5ZM11.9859 4.99996L7.94446 8.9957L6.35432 7.42204L5 8.75288L7.94427 11.6666L13.3333 6.33344L11.9859 4.99996Z",
              }),
            });
          },
          s.BookCheckIcon,
          void 0,
          { size: 16 }
        );
    },
  },
]);
//# sourceMappingURL=a0bbecd8baaafcd0d3a8.js.map