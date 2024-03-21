(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38969"],
  {
    837648: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOnboardingDropdownExperiment: function () {
            return s;
          },
          getOnboardingDropdownExperiment: function () {
            return i;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "guild",
        id: "2023-02_onboardingdropdowns",
        label: "Enables dropdown selections from onboarding prompts",
        defaultConfig: { dropdownsAllowed: !1 },
        treatments: [{ id: 1, label: "On", config: { dropdownsAllowed: !0 } }],
      });
      function s(e) {
        return l.useExperiment(
          { guildId: e, location: "a12ce7_1" },
          { autoTrackExposure: !1 }
        );
      }
      function i(e) {
        return l.getCurrentConfig({ guildId: e, location: "a12ce7_2" });
      }
    },
    75061: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
          TestimonialHero: function () {
            return O;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("146606"),
        d = n("446674"),
        o = n("77078"),
        u = n("206230"),
        N = n("246053"),
        c = n("782340"),
        _ = n("148143");
      function I(e) {
        let {
          message: t,
          adminTitle: n,
          profilePic: l,
          emphasisColor: s = "interactive-normal",
          arrowPosition: r,
          className: d,
        } = e;
        return (0, a.jsxs)("div", {
          className: i(_.testimonialContainer, d),
          children: [
            (0, a.jsx)(E, {
              testimonial: {
                message: t,
                adminTitle: n,
                profilePic: l,
                emphasisColor: s,
              },
            }),
            (0, a.jsx)(o.Text, {
              variant: "text-lg/bold",
              className: _.quotes,
              children: "“",
            }),
            (0, a.jsx)("div", {
              className: i(_.arrow, {
                [_.arrowRight]: "right" === r,
                [_.arrowLeft]: "left" === r,
              }),
              children: (0, a.jsx)(f, {}),
            }),
          ],
        });
      }
      function E(e) {
        let { testimonial: t, className: n } = e,
          {
            message: l,
            profilePic: s,
            adminTitle: i,
            emphasisColor: r = "interactive-normal",
          } = t;
        return (0, a.jsxs)("div", {
          className: n,
          children: [
            (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: l.format({
                testimonialHook: (e, t) =>
                  (0, a.jsx)(
                    o.Text,
                    {
                      tag: "span",
                      variant: "text-sm/bold",
                      color: r,
                      children: e,
                    },
                    t
                  ),
              }),
            }),
            (0, a.jsxs)("div", {
              className: _.userContainer,
              children: [
                (0, a.jsx)(o.Avatar, {
                  src: s,
                  size: o.AvatarSizes.SIZE_16,
                  "aria-hidden": !0,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: i,
                }),
              ],
            }),
          ],
        });
      }
      function f() {
        return (0, a.jsx)("svg", {
          width: "12",
          height: "20",
          viewBox: "0 0 12 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
            fill: "#2B2D31",
          }),
        });
      }
      function O(e) {
        let { testimonials: t } = e,
          [[n, s], i] = l.useState([0, "right"]),
          r = l.useCallback(() => {
            i(e => {
              let [n] = e;
              return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
          }, [i, t.length]),
          d = l.useCallback(() => {
            i(e => {
              let [n] = e;
              return [(n + 1) % t.length, "right"];
            });
          }, [i, t.length]),
          u = t[n],
          I = l.useCallback(
            (e, t, n, l) =>
              (0, a.jsx)(S, { item: t, state: n, cleanup: l, direction: s }, e),
            [s]
          );
        return (0, a.jsxs)("div", {
          className: _.testimonialHeroContainer,
          children: [
            (0, a.jsx)("div", {
              className: _.animatedContainer,
              children: (0, a.jsx)(o.TransitionGroup, {
                items: [u],
                renderItem: I,
                getItemKey: e => e.adminTitle,
              }),
            }),
            (0, a.jsx)(o.Text, {
              variant: "text-lg/bold",
              className: _.heroQuotes,
              children: "“",
            }),
            (0, a.jsxs)("div", {
              className: _.testimonialsControls,
              children: [
                (0, a.jsxs)(o.Button, {
                  className: _.testimonialControl,
                  innerClassName: _.testimonialControlInner,
                  onClick: r,
                  size: o.Button.Sizes.MIN,
                  color: o.Button.Colors.PRIMARY,
                  children: [
                    (0, a.jsx)(N.default, {
                      className: _.testimonialControlIcon,
                      direction: N.default.Directions.LEFT,
                    }),
                    (0, a.jsx)(o.HiddenVisually, {
                      children: c.default.Messages.BACK,
                    }),
                  ],
                }),
                (0, a.jsxs)(o.Button, {
                  className: _.testimonialControl,
                  innerClassName: _.testimonialControlInner,
                  onClick: d,
                  size: o.Button.Sizes.MIN,
                  color: o.Button.Colors.PRIMARY,
                  children: [
                    (0, a.jsx)(N.default, {
                      className: _.testimonialControlIcon,
                      direction: N.default.Directions.RIGHT,
                    }),
                    (0, a.jsx)(o.HiddenVisually, {
                      children: c.default.Messages.NEXT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        let { item: t, state: n, cleanup: l, direction: s } = e,
          i = (0, d.useStateFromStores)(
            [u.default],
            () => u.default.useReducedMotion
          ),
          [N] = (0, r.useSpring)(() => {
            switch (n) {
              case o.TransitionStates.ENTERED:
                return {
                  from: {
                    transform:
                      "right" === s ? "translateX(150%)" : "translate(-150%)",
                  },
                  to: { transform: "translateX(0%)" },
                  immediate: i,
                };
              case o.TransitionStates.YEETED:
                return {
                  from: { transform: "translateX(0%)" },
                  to: {
                    transform:
                      "right" === s ? "translateX(-150%)" : "translate(150%)",
                  },
                  immediate: i,
                  onRest: l,
                };
              default:
                return {};
            }
          }, [n]);
        return (0, a.jsx)(r.animated.div, {
          style: N,
          children: (0, a.jsx)(E, { className: _.testimonial, testimonial: t }),
        });
      }
    },
    749623: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NewMemberAction: function () {
            return R;
          },
          default: function () {
            return P;
          },
        }),
        n("702976");
      var a = n("37983"),
        l = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("679653"),
        d = n("419830"),
        o = n("42203"),
        u = n("26989"),
        N = n("305961"),
        c = n("957255"),
        _ = n("593195"),
        I = n("578706"),
        E = n("904276"),
        f = n("641892"),
        O = n("315102"),
        S = n("568734"),
        T = n("347895"),
        m = n("698882"),
        D = n("675305"),
        A = n("205454"),
        g = n("49111"),
        G = n("657944"),
        h = n("782340"),
        L = n("918648");
      function R(e) {
        let {
            title: t,
            emojiId: n,
            emojiName: l,
            icon: s,
            completed: r,
            Icon: d,
            ...o
          } = e,
          u = "channel" === o.variant ? o.channelId : null,
          N = "static" === o.variant ? o.subtitle : o.channelName,
          c =
            null != u
              ? O.default.getNewMemberActionIconURL({ channelId: u, icon: s })
              : null;
        return (0, a.jsxs)("div", {
          className: L.action,
          children: [
            null != c
              ? (0, a.jsx)("img", {
                  src: c,
                  className: L.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, a.jsx)(A.default, {
                  emojiId: n,
                  emojiName: l,
                  size: A.CTAEmojiSize.LARGE,
                  defaultComponent: (0, a.jsx)("div", {
                    className: L.channelIconContainer,
                    children: (0, a.jsx)(d, { className: L.channelIcon }),
                  }),
                }),
            (0, a.jsxs)("div", {
              className: L.actionInfo,
              children: [
                (0, a.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t,
                }),
                null != N
                  ? (0, a.jsx)(i.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: N,
                    })
                  : null,
              ],
            }),
            r
              ? (0, a.jsx)(I.default, {
                  backgroundColor: "#fff",
                  className: L.checkCircleCompleted,
                  width: 24,
                  height: 24,
                })
              : (0, a.jsx)(E.default, {
                  className: L.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function p(e) {
        var t;
        let { action: n, completed: u } = e,
          { channelId: N, title: I, emoji: E, icon: f } = n,
          { id: O, name: S } = null != E ? E : {},
          m = (0, s.useStateFromStores)([o.default], () =>
            o.default.getChannel(N)
          ),
          D = (0, r.default)(m, !0),
          A = (0, s.useStateFromStores)([c.default], () =>
            c.default.can(g.Permissions.VIEW_CHANNEL, m)
          ),
          G = l.useCallback(() => {
            if (null == m) return null;
            (0, T.selectNewMemberActionChannel)(m.guild_id, m.id);
          }, [m]);
        if (null == m || !A) return null;
        let h =
          null !== (t = (0, d.getChannelIconComponent)(m)) && void 0 !== t
            ? t
            : _.default;
        return (0, a.jsx)(i.Clickable, {
          className: L.clickableAction,
          onClick: G,
          children: (0, a.jsx)(R, {
            variant: "channel",
            channelId: N,
            title: I,
            channelName: D,
            emojiId: O,
            emojiName: S,
            icon: f,
            completed: u,
            Icon: h,
          }),
        });
      }
      function P(e) {
        let { guildId: t } = e,
          n = (0, s.useStateFromStores)(
            [m.default],
            () => m.default.getNewMemberActions(t),
            [t]
          ),
          r = (0, s.useStateFromStores)([D.default], () =>
            D.default.getCompletedActions(t)
          ),
          d = (0, s.useStateFromStores)([u.default], () =>
            u.default.getSelfMember(t)
          ),
          o = (0, s.useStateFromStores)([N.default], () =>
            N.default.getGuild(t)
          );
        l.useEffect(() => {
          var e;
          null == r &&
            (null == d ? void 0 : d.flags) != null &&
            (0, S.hasFlag)(
              null !== (e = d.flags) && void 0 !== e ? e : 0,
              G.GuildMemberFlags.STARTED_HOME_ACTIONS
            ) &&
            (0, T.fetchNewMemberActions)(t);
        }, [r, t, null == d ? void 0 : d.flags]);
        let c = l.useCallback(() => {
          null != o &&
            null != o.rulesChannelId &&
            (0, T.selectNewMemberActionChannel)(o.id, o.rulesChannelId);
        }, [o]);
        return null == d || null == n || 0 === n.length
          ? null
          : (0, a.jsxs)("div", {
              className: L.container,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: h.default.Messages.GET_STARTED,
                }),
                n.map(e =>
                  (0, a.jsx)(
                    p,
                    {
                      action: e,
                      completed: (null == r ? void 0 : r[e.channelId]) === !0,
                      guildId: t,
                    },
                    e.channelId
                  )
                ),
                (null == o ? void 0 : o.rulesChannelId) != null &&
                  (0, a.jsxs)(i.Clickable, {
                    className: L.action,
                    onClick: c,
                    children: [
                      (0, a.jsx)("div", {
                        className: L.rulesIconContainer,
                        children: (0, a.jsx)(f.default, {
                          className: L.rulesIcon,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: L.actionInfo,
                        children: (0, a.jsx)(i.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children:
                            h.default.Messages
                              .GUILD_SETTINGS_ONBOARDING_RULES_ACTION,
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    768596: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("509043"),
        d = n("65597"),
        o = n("77078"),
        u = n("851387"),
        N = n("841098"),
        c = n("206230"),
        _ = n("388491"),
        I = n("506885"),
        E = n("217513"),
        f = n("528438"),
        O = n("430312"),
        S = n("305961"),
        T = n("697218"),
        m = n("928201"),
        D = n("387111"),
        A = n("158998"),
        g = n("590456"),
        G = n("345696");
      function h(e) {
        var t;
        let { guildId: n, welcomeMessage: s, className: h } = e,
          L = (0, N.default)(),
          R = (0, d.default)([S.default], () => S.default.getGuild(n)),
          p = (0, d.default)(
            [c.default],
            () => c.default.syncProfileThemeWithUserTheme
          ),
          P = (0, d.default)([c.default], () => c.default.useReducedMotion),
          x = (0, d.default)([T.default], () =>
            T.default.getUser(null == s ? void 0 : s.authorIds[0])
          ),
          M = (0, d.default)([T.default], () => T.default.getCurrentUser()),
          U = (0, E.default)(null == x ? void 0 : x.id, n),
          [v] = (0, f.default)(x, U),
          C = p
            ? L
            : null !== (t = (0, _.getProfileTheme)(v)) && void 0 !== t
              ? t
              : L,
          B = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, C).hex(),
          j = l.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [s]);
        l.useEffect(() => {
          u.default.requestMembersById(n, j);
        }, [n, j]),
          l.useEffect(() => {
            null != x &&
              (0, I.default)(x.id, x.getAvatarURL(n, 48), { guildId: n });
          }, [x, n]);
        let b = (0, A.useName)(M);
        if (null == x || null == M || null == s) return null;
        let w = null != R && R.ownerId === x.id;
        return (0, a.jsx)("div", {
          className: i(G.welcomeMessageContainer, h),
          children: (0, a.jsxs)(O.default, {
            className: G.welcomeMessageProfileContainer,
            user: x,
            guildId: n,
            profileType: g.UserProfileTypes.CARD,
            forceShowPremium: !0,
            useDefaultClientTheme: !0,
            children: [
              (0, a.jsx)("div", { className: G.avatarBackground }),
              P
                ? (0, a.jsx)(o.Avatar, {
                    src: x.getAvatarURL(n, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: G.avatar,
                    "aria-label": x.username,
                  })
                : (0, a.jsx)(o.AnimatedAvatar, {
                    src: x.getAvatarURL(n, 48),
                    size: o.AvatarSizes.SIZE_48,
                    className: G.avatar,
                    "aria-label": x.username,
                  }),
              (0, a.jsx)("div", {
                className: G.avatarBorder,
                style: {
                  backgroundColor: null != v ? (0, r.int2rgba)(v, 1) : B,
                },
              }),
              (0, a.jsxs)("div", {
                className: G.welcomeMessageContent,
                children: [
                  (0, a.jsxs)("div", {
                    className: G.adminUsernameContainer,
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: D.default.getName(n, null, x),
                      }),
                      w
                        ? (0, a.jsx)(m.default, { className: G.ownerIcon })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: (function (e, t) {
                      let n = e.split(/\[@username\]/g);
                      return (0, a.jsx)("span", {
                        children: n.map((e, l) =>
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              e,
                              l < n.length - 1
                                ? (0, a.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    children: "@".concat(t),
                                  })
                                : null,
                            ],
                          })
                        ),
                      });
                    })(
                      null == s ? void 0 : s.message,
                      null != b ? b : M.username
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    653274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("917351"),
        l = n.n(a),
        s = n("446674"),
        i = n("913144"),
        r = n("863636"),
        d = n("900938"),
        o = n("49111");
      let u = !1,
        N = null,
        c = new Set();
      function _() {
        (function () {
          (u = !1), (N = null);
        })(),
          null != (N = d.default.getGuildId()) &&
            d.default.getSection() === o.GuildSettingsSections.ONBOARDING &&
            (c = new Set(r.default.getDefaultChannelIds(N)));
      }
      class I extends s.default.Store {
        initialize() {
          this.waitFor(d.default, r.default);
        }
        hasChanges() {
          if (null == N) return !1;
          let e = r.default.getDefaultChannelIds(N).sort(),
            t = Array.from(c).sort();
          return !l.isEqual(e, t);
        }
        get guildId() {
          return N;
        }
        get submitting() {
          return u;
        }
        get editedDefaultChannelIds() {
          return c;
        }
      }
      I.displayName = "GuildSettingsDefaultChannelsStore";
      var E = new I(i.default, {
        GUILD_SETTINGS_INIT: _,
        GUILD_SETTINGS_SET_SECTION: _,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
        GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: _,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: _,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
          u = !1;
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
          let { channelId: t } = e;
          (c = new Set(c)).has(t) ? c.delete(t) : c.add(t);
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
          u = !0;
        },
      });
    },
    131835: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setOnboardingStep: function () {
            return g;
          },
          dismissEducationUpsell: function () {
            return G;
          },
          toggleAdvancedSettings: function () {
            return h;
          },
          goToNextOnboardingStep: function () {
            return L;
          },
          goToPrevOnboardingStep: function () {
            return R;
          },
          startPreview: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("913144"),
        l = n("404118"),
        s = n("599417"),
        i = n("863636"),
        r = n("471706"),
        d = n("380710"),
        o = n("937692"),
        u = n("233706"),
        N = n("479756"),
        c = n("507950"),
        _ = n("42203"),
        I = n("305961"),
        E = n("449008"),
        f = n("592407"),
        O = n("653274"),
        S = n("330724"),
        T = n("259483"),
        m = n("724210"),
        D = n("653138"),
        A = n("782340");
      function g(e) {
        a.default.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: e });
      }
      function G(e) {
        null != e &&
          a.default.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
            upsellType: e,
          });
      }
      async function h(e, t) {
        let n = i.default.getEnabled(e),
          r = Array.from(O.default.editedDefaultChannelIds).filter(
            e => null != _.default.getChannel(e)
          ),
          [o, u] = (0, d.getChattableDefaultChannels)(e, [...r]);
        if (
          n &&
          t === D.GuildOnboardingMode.ONBOARDING_DEFAULT &&
          (u.length < D.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING ||
            o.length < D.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN)
        ) {
          l.default.show({
            title: A.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: A.default.Messages
              .DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS,
          });
          return;
        }
        try {
          await (0, S.editOnboarding)(e, { mode: t });
        } catch (n) {
          var N;
          let { fieldName: e, error: t } =
            null !== (N = new (0, s.default)(n).getAnyErrorMessageAndField()) &&
            void 0 !== N
              ? N
              : {};
          l.default.show({
            title: A.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: [e, t].filter(E.isNotNullish).join(": "),
          });
        }
        a.default.dispatch({
          type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
          guildId: e,
          mode: t,
        });
      }
      function L(e, t) {
        let { homeSettingsEnabled: n } = (0,
          u.getOnboardingHomeAdminExperiment)(e),
          a = T.ONBOARDING_STEPS.findIndex(e => e === t);
        if (-1 !== a && a !== T.ONBOARDING_STEPS.length - 1) {
          if (
            !n &&
            T.ONBOARDING_STEPS[a + 1] ===
              T.GuildSettingsOnboardingPage.HOME_SETTINGS
          ) {
            g(T.ONBOARDING_STEPS[a + 2]);
            return;
          }
          g(T.ONBOARDING_STEPS[a + 1]);
        }
      }
      function R(e, t) {
        let { homeSettingsEnabled: n } = (0,
          u.getOnboardingHomeAdminExperiment)(e),
          a = T.ONBOARDING_STEPS.findIndex(e => e === t);
        if (-1 !== a && 0 !== a) {
          if (
            !n &&
            T.ONBOARDING_STEPS[a - 1] ===
              T.GuildSettingsOnboardingPage.HOME_SETTINGS
          ) {
            g(T.ONBOARDING_STEPS[a - 2]);
            return;
          }
          g(T.ONBOARDING_STEPS[a - 1]);
        }
      }
      async function p(e) {
        let t = I.default.getGuild(e);
        null != t &&
          (f.default.close(),
          (0, N.startImpersonating)(t.id, {
            type: c.ImpersonateType.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: { isPending: t.hasVerificationGate(), flags: 0 },
          }),
          r.default.resetOnboardingStatus(t.id),
          (0, o.discardOnboardingPromise)(t.id),
          await (0, o.default)({
            guildId: t.id,
            isPreview: !0,
            returnChannelId: m.StaticChannelRoute.GUILD_HOME,
          }));
      }
    },
    330724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          resetGuildOnboardingPrompts: function () {
            return f;
          },
          editGuildOnboardingPrompt: function () {
            return O;
          },
          deleteGuildOnboardingPrompt: function () {
            return S;
          },
          editGuildOnboardingPrompts: function () {
            return T;
          },
          saveGuildOnboardingPrompts: function () {
            return m;
          },
          enableGuildOnboarding: function () {
            return D;
          },
          editOnboarding: function () {
            return A;
          },
          validateOptionRoles: function () {
            return G;
          },
        }),
        n("70102"),
        n("222007");
      var a = n("872717"),
        l = n("913144"),
        s = n("404118"),
        i = n("448993"),
        r = n("385976"),
        d = n("837648"),
        o = n("42203"),
        u = n("305961"),
        N = n("449008"),
        c = n("136278"),
        _ = n("49111"),
        I = n("653138"),
        E = n("782340");
      function f() {
        l.default.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
      }
      function O(e, t, n) {
        T(
          e,
          c.default.editedOnboardingPrompts.map(e =>
            e.id === t ? { ...e, ...n } : e
          )
        );
      }
      function S(e, t) {
        T(
          e,
          c.default.editedOnboardingPrompts.filter(e => e.id !== t)
        );
      }
      function T(e, t) {
        let n =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
          (l.default.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
            prompts: t,
          }),
          n)
        ) {
          let n = t.map(n => g(e, t, n));
          l.default.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
            errors: n,
          });
        }
      }
      async function m(e, t) {
        let { dropdownsAllowed: n } = (0, d.getOnboardingDropdownExperiment)(
          e.id
        );
        if (!c.default.hasChanges()) return;
        let a = c.default.editedOnboardingPrompts;
        null != t &&
          t.ignoreDefaultPrompt &&
          1 === a.length &&
          (0, I.isDefaultPrompt)(a[0]) &&
          (a = []);
        let _ = a.map(t => {
            let a = t.options.map(t => {
              var n;
              let a =
                  null == t.roleIds
                    ? t.roleIds
                    : t.roleIds.filter(t => null != u.default.getRole(e.id, t)),
                l =
                  null == t.channelIds
                    ? t.channelIds
                    : t.channelIds.filter(e => null != o.default.getChannel(e)),
                s =
                  (null == t
                    ? void 0
                    : null === (n = t.emoji) || void 0 === n
                      ? void 0
                      : n.id) == null ||
                  null == r.default.getCustomEmojiById(t.emoji.id)
                    ? void 0
                    : t.emoji.id;
              return { ...t, roleIds: a, channelIds: l, emojiId: s };
            });
            return {
              ...t,
              options: a,
              type:
                a.length >= I.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD && n
                  ? I.OnboardingPromptType.DROPDOWN
                  : I.OnboardingPromptType.MULTIPLE_CHOICE,
            };
          }),
          f = _.filter(e => e.inOnboarding),
          O = _.filter(e => !0 !== e.inOnboarding),
          S = _.map(t => g(e, _, t));
        if (S.filter(N.isNotNullish).length > 0)
          throw (
            (l.default.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: S,
            }),
            Error("failed to locally validate prompts"))
          );
        if (f.length > I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING)
          throw (
            (s.default.show({
              title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
              body: E.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format(
                {
                  numQuestions:
                    I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING,
                }
              ),
            }),
            l.default.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: S,
            }),
            Error("too many prompts in onboarding"))
          );
        let T = [...f, ...O];
        l.default.dispatch({
          type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT",
        });
        try {
          await A(e.id, { prompts: T.map(I.clientPromptToServerPrompt) }),
            l.default.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
              guildId: e.id,
              updates: { prompts: T },
            });
        } catch (n) {
          var m;
          let { fieldName: e, error: t } =
            null !==
              (m = new (0, i.APIError)(n).getAnyErrorMessageAndField()) &&
            void 0 !== m
              ? m
              : {};
          throw (
            (s.default.show({
              title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
              body: [e, t].filter(N.isNotNullish).join(": "),
            }),
            l.default.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
            }),
            Error("failed to save prompts"))
          );
        }
      }
      async function D(e, t) {
        l.default.dispatch({
          type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
          guildId: e,
          updates: { enabled: t },
        });
        try {
          await A(e, { enabled: t });
        } catch (a) {
          var n;
          let { fieldName: e, error: t } =
            null !==
              (n = new (0, i.APIError)(a).getAnyErrorMessageAndField()) &&
            void 0 !== n
              ? n
              : {};
          s.default.show({
            title: E.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: [e, t].filter(N.isNotNullish).join(": "),
          });
        }
      }
      async function A(e, t) {
        await a.HTTP.put({ url: _.Endpoints.GUILD_ONBOARDING(e), body: t });
      }
      function g(e, t, n) {
        let a = { optionErrors: [] },
          l = !1;
        return (
          n.title.length <= 0 &&
            ((a.title = E.default.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED),
            (l = !0)),
          n.options.length <= 0 &&
            ((a.options = E.default.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED),
            (l = !0)),
          n.inOnboarding &&
            t.filter(e => e.inOnboarding).length >
              I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING &&
            ((a.config =
              E.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format(
                {
                  numQuestions:
                    I.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING,
                }
              )),
            (l = !0)),
          (a.optionErrors = n.options.map(a => G(e, t, n, a))),
          (l = l || a.optionErrors.some(e => null != e)) ? a : null
        );
      }
      function G(e, t, n, a) {
        var l, s, i;
        if (n.singleSelect) {
          let e = new Set(null !== (l = a.roleIds) && void 0 !== l ? l : []);
          for (let a of t)
            if (a.id !== n.id) {
              for (let t of a.options)
                if (null != t.roleIds && t.roleIds.some(t => e.has(t)))
                  return E.default.Messages
                    .ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES;
            }
        }
        let r = (null !== (s = a.roleIds) && void 0 !== s ? s : []).filter(
            t => null != u.default.getRole(e.id, t)
          ),
          d = (null !== (i = a.channelIds) && void 0 !== i ? i : []).filter(
            e => null != o.default.getChannel(e)
          );
        return 0 === r.length && 0 === d.length
          ? E.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED
          : null;
      }
    },
    136278: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var a = n("917351"),
        l = n.n(a),
        s = n("446674"),
        i = n("913144"),
        r = n("863636"),
        d = n("900938"),
        o = n("49111"),
        u = n("653138");
      let N = !1,
        c = null,
        _ = [],
        I = !1,
        E = [];
      function f() {
        (function () {
          (N = !1), (c = null), (E = []), (I = !1);
        })(),
          null != (c = d.default.getGuildId()) &&
            d.default.getSection() === o.GuildSettingsSections.ONBOARDING &&
            ((_ = r.default.getOnboardingPrompts(c)),
            (I = r.default.isAdvancedMode(c)));
      }
      class O extends s.default.Store {
        initialize() {
          this.waitFor(d.default, r.default);
        }
        hasChanges() {
          return null != c && !l.isEqual(r.default.getOnboardingPrompts(c), _);
        }
        get guildId() {
          return c;
        }
        get submitting() {
          return N;
        }
        get errors() {
          return E;
        }
        get editedOnboardingPrompts() {
          return _;
        }
        get advancedMode() {
          return I;
        }
      }
      O.displayName = "GuildSettingsOnboardingPromptsStore";
      var S = new O(i.default, {
        GUILD_SETTINGS_INIT: f,
        GUILD_SETTINGS_SET_SECTION: f,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: f,
        GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: f,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: f,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
          var t;
          (E = null !== (t = e.errors) && void 0 !== t ? t : []), (N = !1);
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
          let { prompts: t } = e;
          _ = t;
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
          (N = !0), (E = []);
        },
        GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
          var t;
          E = null !== (t = e.errors) && void 0 !== t ? t : [];
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
          let { mode: t } = e;
          I = t === u.GuildOnboardingMode.ONBOARDING_ADVANCED;
        },
      });
    },
    259483: function (e, t, n) {
      "use strict";
      var a, l, s, i;
      n.r(t),
        n.d(t, {
          GuildSettingsOnboardingPage: function () {
            return a;
          },
          ONBOARDING_STEPS: function () {
            return r;
          },
          GuildSettingsCTAs: function () {
            return l;
          },
          COMPLETABLE_ONBOARDING_STEPS: function () {
            return d;
          },
          pageToEducationUpsellType: function () {
            return o;
          },
        }),
        ((s = a || (a = {}))[(s.LANDING = 0)] = "LANDING"),
        (s[(s.SAFETY_CHECK = 1)] = "SAFETY_CHECK"),
        (s[(s.DEFAULT_CHANNELS = 2)] = "DEFAULT_CHANNELS"),
        (s[(s.WELCOME_CARD = 3)] = "WELCOME_CARD"),
        (s[(s.CUSTOMIZATION_QUESTIONS = 4)] = "CUSTOMIZATION_QUESTIONS"),
        (s[(s.REVIEW = 5)] = "REVIEW"),
        (s[(s.HOME_SETTINGS = 6)] = "HOME_SETTINGS");
      let r = [0, 1, 2, 4, 6, 5];
      ((i = l || (l = {}))[(i.TOGGLE_ENABLED = 0)] = "TOGGLE_ENABLED"),
        (i[(i.TOGGLE_DISABLED = 1)] = "TOGGLE_DISABLED"),
        (i[(i.PREVIEW = 2)] = "PREVIEW"),
        (i[(i.EDIT_DEFAULT_CHANNELS = 3)] = "EDIT_DEFAULT_CHANNELS"),
        (i[(i.EDIT_CUSTOMIZATION_QUESTIONS = 4)] =
          "EDIT_CUSTOMIZATION_QUESTIONS"),
        (i[(i.EDIT_HOME_SETTINGS = 5)] = "EDIT_HOME_SETTINGS");
      let d = r.filter(e => 0 !== e);
      function o(e) {
        switch (e) {
          case 1:
            return "Safety Check";
          case 2:
            return "Default Channels";
          case 4:
            return "Customization Questions";
          case 6:
            return "Home Settings";
          default:
            return null;
        }
      }
    },
    584027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OnboardingPreview: function () {
            return P;
          },
          default: function () {
            return M;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("446674"),
        r = n("77078"),
        d = n("716241"),
        o = n("798796"),
        u = n("75061"),
        N = n("233706"),
        c = n("749623"),
        _ = n("768596"),
        I = n("305961"),
        E = n("697218"),
        f = n("593195"),
        O = n("36694"),
        S = n("991497"),
        T = n("733160"),
        m = n("599110"),
        D = n("900938"),
        A = n("131835"),
        g = n("259483"),
        G = n("49111"),
        h = n("782340"),
        L = n("374025");
      let R = () => [
          {
            emoji: "\uD83E\uDDD9",
            emojiDescription:
              h.default.Messages
                .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
            title:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
            selected: !0,
          },
          {
            emoji: "\uD83C\uDFA4",
            emojiDescription:
              h.default.Messages
                .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
            title:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
            selected: !1,
          },
          {
            emoji: "\uD83D\uDC40",
            emojiDescription:
              h.default.Messages
                .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
            title:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
            selected: !1,
          },
        ],
        p = () => [
          {
            channelIcon: () =>
              (0, a.jsx)(T.default, { className: L.channelIcon }),
            channel:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, a.jsx)(f.default, { className: L.channelIcon }),
            channel:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, a.jsx)(f.default, { className: L.channelIcon }),
            channel:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
            selected: !1,
          },
          {
            channelIcon: () =>
              (0, a.jsx)(S.default, { className: L.channelIcon }),
            channel:
              h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
            selected: !0,
          },
        ];
      function P(e) {
        let { isTooltip: t = !1 } = e,
          n = R();
        t && n.pop();
        let l = t
            ? (0, a.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children:
                  h.default.Messages
                    .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP,
              })
            : (0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                children:
                  h.default.Messages
                    .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE,
              }),
          i = t
            ? (0, a.jsx)(r.Text, {
                variant: "text-xxs/normal",
                children:
                  h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format(),
              })
            : (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                children:
                  h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format(),
              });
        return (0, a.jsxs)("div", {
          className: s(L.upsellPreview, L.spacingLarge, { [L.tooltip]: t }),
          children: [
            l,
            (0, a.jsx)("div", {
              className: L.spacingSmall,
              children: n.map((e, t) => {
                let {
                  emoji: n,
                  emojiDescription: l,
                  title: i,
                  selected: d,
                } = e;
                return (0, a.jsxs)(
                  "div",
                  {
                    className: s(L.previewListItem, { [L.selected]: d }),
                    children: [
                      (0, a.jsx)("span", {
                        role: "img",
                        "aria-label": l,
                        children: n,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: i,
                      }),
                      d &&
                        (0, a.jsx)("div", {
                          className: L.checkboxCircle,
                          children: (0, a.jsx)(O.default, {
                            className: L.checkmark,
                          }),
                        }),
                    ],
                  },
                  t
                );
              }),
            }),
            i,
          ],
        });
      }
      function x() {
        let e = [
          {
            message:
              h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
            profilePic:
              "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle:
              h.default.Messages
                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER,
          },
          {
            message:
              h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
            profilePic:
              "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle:
              h.default.Messages
                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
          },
          {
            message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
            profilePic:
              "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle:
              h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
          },
          {
            message:
              h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
            profilePic:
              "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle:
              h.default.Messages
                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES,
          },
        ];
        return (0, a.jsx)(u.TestimonialHero, { testimonials: e });
      }
      function M() {
        let e = (0, i.useStateFromStores)([D.default], () =>
            D.default.getGuildId()
          ),
          t = (0, i.useStateFromStores)([I.default], () =>
            I.default.getGuild(e)
          ),
          n = (0, i.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          { homeSettingsEnabled: l } = (0, N.useOnboardingHomeAdminExperiment)(
            null != e ? e : G.EMPTY_STRING_SNOWFLAKE_ID
          );
        return null == e || null == t || null == n
          ? null
          : (0, a.jsxs)("div", {
              className: L.upsellContainer,
              children: [
                (0, a.jsxs)("div", {
                  className: L.upsellHeader,
                  children: [
                    (0, a.jsxs)("div", {
                      className: L.islands,
                      children: [
                        (0, a.jsx)(o.LeftIslands, {}),
                        (0, a.jsx)(o.MainIsland, {
                          guild: t,
                          mainIslandClassName: L.mainIsland,
                          balloonDogClassName: L.balloonDog,
                        }),
                        (0, a.jsx)(o.RightIslands, {}),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: L.upsellHeaderText,
                      children: [
                        (0, a.jsx)(r.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            h.default.Messages
                              .GUILD_ONBOARDING_SETUP_LANDING_TITLE,
                        }),
                        (0, a.jsx)(r.Text, {
                          variant: "text-md/normal",
                          children:
                            h.default.Messages
                              .GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: L.upsellButtons,
                      children: (0, a.jsx)(r.Button, {
                        onClick: function () {
                          null != e &&
                            (m.default.track(
                              G.AnalyticEvents
                                .GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                              {
                                ...(0, d.collectGuildAnalyticsMetadata)(e),
                                step: g.GuildSettingsOnboardingPage[
                                  g.GuildSettingsOnboardingPage.LANDING
                                ],
                                back: !1,
                                skip: !1,
                              }
                            ),
                            (0, A.goToNextOnboardingStep)(
                              e,
                              g.GuildSettingsOnboardingPage.LANDING
                            ));
                        },
                        color: r.Button.Colors.BRAND,
                        disabled: !1,
                        children: h.default.Messages.CHECK_IT_OUT,
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(r.FormDivider, {}),
                (0, a.jsx)(x, {}),
                (0, a.jsx)(r.FormDivider, {}),
                (0, a.jsxs)("div", {
                  className: L.valuesContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      className: L.valueContainer,
                      children: [
                        (0, a.jsx)(P, {}),
                        (0, a.jsxs)("div", {
                          className: L.valueText,
                          children: [
                            (0, a.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              children:
                                h.default.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE,
                            }),
                            (0, a.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children:
                                h.default.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE,
                            }),
                          ],
                        }),
                      ],
                    }),
                    l &&
                      (0, a.jsxs)("div", {
                        className: L.valueContainer,
                        children: [
                          (0, a.jsxs)("div", {
                            className: L.valueText,
                            children: [
                              (0, a.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                children:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE,
                              }),
                              (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: s(L.upsellPreview, L.spacingLarge),
                            children: [
                              (0, a.jsx)(_.default, {
                                guildId: e,
                                welcomeMessage: {
                                  authorIds: [n.id],
                                  message:
                                    h.default.Messages
                                      .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE,
                                },
                              }),
                              (0, a.jsx)(c.NewMemberAction, {
                                title:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                subtitle:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                completed: !0,
                                Icon: f.default,
                                variant: "static",
                              }),
                              (0, a.jsx)(c.NewMemberAction, {
                                title:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                subtitle:
                                  h.default.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                completed: !0,
                                Icon: f.default,
                                variant: "static",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, a.jsxs)("div", {
                      className: L.valueContainer,
                      children: [
                        (0, a.jsx)("div", {
                          className: s(L.upsellPreview, L.spacingLarge),
                          children: p().map((e, t) => {
                            let { channelIcon: n, channel: l, selected: i } = e;
                            return (0, a.jsxs)(
                              "div",
                              {
                                className: s(
                                  L.previewListItem,
                                  L.spaceBetween,
                                  { [L.selected]: i }
                                ),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: L.channel,
                                    children: [
                                      n(),
                                      (0, a.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: s(L.checkbox, {
                                      [L.selected]: i,
                                    }),
                                    children:
                                      i &&
                                      (0, a.jsx)(O.default, {
                                        className: L.checkmark,
                                      }),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: L.valueText,
                          children: [
                            (0, a.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              children:
                                h.default.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE,
                            }),
                            (0, a.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children:
                                h.default.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE,
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
  },
]);
//# sourceMappingURL=2d7e087cfb7595d619ea.js.map
