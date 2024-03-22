(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71879"],
  {
    144141: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        });
      var s = l("862205");
      let n = (0, s.createExperiment)({
        kind: "user",
        id: "2023-01_guild_onboarding_includes_rules",
        label: "Guild Onboarding includes rules experience",
        defaultConfig: { includeRules: !1 },
        treatments: [
          {
            id: 1,
            label: "Last page of onboarding is rules",
            config: { includeRules: !0 },
          },
        ],
      });
      var a = n;
    },
    413896: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return D;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("414456"),
        r = l.n(a),
        i = l("146606"),
        o = l("446674"),
        d = l("77078"),
        u = l("851387"),
        c = l("528502"),
        m = l("731898"),
        f = l("206230"),
        g = l("895026"),
        h = l("38654"),
        x = l("393414"),
        p = l("305961"),
        N = l("313609"),
        E = l("315102"),
        I = l("284679"),
        v = l("103603"),
        O = l("921031"),
        j = l("863636"),
        R = l("471706"),
        b = l("798796"),
        S = l("686692"),
        C = l("547840"),
        T = l("49111"),
        _ = l("782340"),
        M = l("280627");
      async function B(e) {
        let t = await new Promise((t, l) => {
          let s = new Image();
          (s.crossOrigin = "Anonymous"),
            (s.onerror = e => {
              l(e), (s.onerror = s.onload = null), (s = null);
            }),
            (s.onload = () => {
              t((0, v.getPalette)(s, 2, 10)),
                (s.onerror = s.onload = null),
                (s = null);
            }),
            (s.src = e);
        });
        return null == t
          ? void 0
          : t.map(e => {
              let [t, l, s] = e;
              return (0, I.rgbToHex)(t, l, s);
            });
      }
      function D(e) {
        let { guildId: t } = e,
          l = (0, o.useStateFromStores)(
            [f.default],
            () => f.default.useReducedMotion
          ),
          { ref: a, width: v, height: D } = (0, m.default)(),
          [A, k] = n.useState(),
          P = (0, o.useStateFromStoresArray)([j.default], () =>
            j.default.getOnboardingPromptsForOnboarding(t)
          ),
          L = (0, o.useStateFromStores)([j.default], () =>
            j.default.getEnabled(t)
          ),
          y = n.useCallback(
            (e, l, s) => {
              O.default.selectOption(t, e, l, s);
            },
            [t]
          ),
          F = n.useCallback(() => {
            O.default.completeOnboarding(t, P);
          }, [t, P]),
          G = (0, o.useStateFromStores)([p.default], () =>
            p.default.getGuild(t)
          ),
          U = n.useMemo(
            () =>
              null == G
                ? null
                : E.default.getGuildSplashURL({ id: G.id, splash: G.splash }),
            [G]
          ),
          w = (0, o.useStateFromStores)([R.default], () =>
            R.default.getCurrentOnboardingStep(t)
          ),
          [q, H] = n.useState(null != U ? null : "cover");
        null != U &&
          null == A &&
          B(U).then(e => {
            k(e[0]);
          });
        let z = n.useCallback(
            e => {
              H(w), O.default.setUserOnboardingStep(t, e);
            },
            [t, w]
          ),
          V = (0, o.useStateFromStores)([h.default], () =>
            h.default.isFullServerPreview(t)
          ),
          Q = (0, o.useStateFromStores)([R.default], () =>
            R.default.getOnboardingStatus(t)
          ),
          Y = null != P && P.length > 0,
          K = n.useCallback(() => {
            (0, R.isOnboarding)(Q) && L && Y ? z(0) : F();
          }, [Q, L, Y, z, F]);
        n.useEffect(() => {
          if (!R.default.shouldShowOnboarding(t))
            return u.default.escapeToDefaultChannel(t);
          (0, g.fetchMemberCounts)(t);
        }, [t]);
        let W = (0, i.useTransition)(w, {
            config: i.config.default,
            from: { scale: 0.8, opacity: 0 },
            enter: { scale: 1, opacity: 1 },
            immediate: l || ("cover" !== q && null !== q),
          }),
          X = R.default.shouldShowOnboarding(t),
          J = null == G;
        if (
          (n.useEffect(() => {
            if (!X || J) {
              let e = setTimeout(() => {
                (0, x.transitionTo)(T.Routes.CHANNEL(t));
              }, 1e3);
              return () => clearTimeout(e);
            }
          }, [X, J, t]),
          !R.default.shouldShowOnboarding(t) || null == G)
        )
          return null;
        let Z = () => {
          switch (w) {
            case "cover":
              return (0, s.jsx)(b.default, {
                guild: G,
                onboardingStatus: R.GuildOnboardingStatus.READY,
                onStart: K,
                disableTracking: V,
              });
            case "rules":
              return (0, s.jsx)(C.default, {
                setCurrentStep: z,
                previousPromptIndex: P.length - 1,
                guild: G,
                prompts: P,
                completeOnboarding: F,
                disableTracking: V,
              });
            case null:
              return null;
            default:
              return (0, s.jsx)(S.default, {
                guild: G,
                prompts: P,
                step: w,
                selectOption: y,
                completeOnboarding: F,
                setCurrentStep: z,
                disableTracking: V,
              });
          }
        };
        return (0, s.jsxs)("div", {
          className: M.main,
          ref: a,
          children: [
            null != U
              ? (0, s.jsx)(N.default, {
                  className: r(M.artwork),
                  src: U,
                  width: v,
                  height: D,
                  imageClassName: M.cover,
                })
              : (0, s.jsx)(c.default, {
                  className: M.artwork,
                  preserveAspectRatio: "xMinYMin slice",
                }),
            null != A &&
              (0, s.jsx)("div", {
                className: M.gradient,
                style: {
                  background: "linear-gradient(180deg, "
                    .concat((0, I.hexOpacityToRgba)(A, 0.16), " 0%, ")
                    .concat((0, I.hexOpacityToRgba)(A, 1), " 100%)"),
                },
              }),
            (0, s.jsx)("div", { className: M.gradient }),
            W((e, t, l) => {
              let { key: n } = l;
              return (0, s.jsx)(i.animated.div, { style: e, children: Z() }, n);
            }),
            "cover" === w &&
              (0, s.jsx)("div", {
                className: M.bottomCenterContent,
                children: (0, s.jsx)(d.Heading, {
                  variant: "heading-sm/normal",
                  color: "header-secondary",
                  children:
                    _.default.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
                      privacyLink: T.MarketingURLs.PRIVACY,
                    }),
                }),
              }),
          ],
        });
      }
    },
    686692: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        });
      var s = l("37983"),
        n = l("884691"),
        a = l("65597"),
        r = l("77078"),
        i = l("716241"),
        o = l("50926"),
        d = l("526253"),
        u = l("795228"),
        c = l("137215"),
        m = l("599110"),
        f = l("449008"),
        g = l("144141"),
        h = l("863636"),
        x = l("380710"),
        p = l("126623"),
        N = l("667712"),
        E = l("469242"),
        I = l("653138"),
        v = l("49111"),
        O = l("782340"),
        j = l("423789");
      function R(e, t) {
        return (0, s.jsx)(
          "span",
          { className: j.helpTextItem, children: e },
          t
        );
      }
      function b(e) {
        return (
          null != e &&
          g.default.getCurrentConfig(
            { location: "ba216b_1" },
            { autoTrackExposure: !0 }
          ).includeRules
        );
      }
      function S(e) {
        let {
            headerId: t,
            guild: l,
            step: n,
            lastPrompt: i,
            questionCount: o,
            currentPrompt: d,
            selectOption: m,
            gotoPrevPrompt: f,
            gotoNextPrompt: g,
            completeOnboarding: N,
          } = e,
          I = (0, a.useStateFromStoresArray)([h.default], () =>
            h.default.getOnboardingResponsesForPrompt(l.id, d.id)
          ),
          v = 0 === I.length && (null == d ? void 0 : d.required),
          b = null == d ? void 0 : d.options.filter(e => I.includes(e.id)),
          S = (0, x.getSelectedRoleIds)(b),
          C = (0, x.getSelectedChannelIds)(b),
          T = 0 === I.length,
          { helpText: _, helpTextAdditional: M } = (0, p.default)({
            guild: l,
            prompt: d,
            selectedRoleIds: S,
            selectedChannelIds: C,
            itemHook: R,
          }),
          B = (0, u.default)(l.id, 1e3),
          D = d.options.map(e => ({ value: e.id, ...e })),
          A = d.options.filter(e => I.includes(e.id)).map(e => e.id);
        return (0, s.jsx)("div", {
          className: j.prompt,
          children: (0, s.jsxs)("div", {
            className: j.promptContent,
            children: [
              (0, s.jsxs)(r.ScrollerThin, {
                className: j.scrollerContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: j.questionHeader,
                    children: [
                      (0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                          O.default.Messages.ONBOARDING_QUESTION_COUNT.format({
                            currentQuestion: n + 1,
                            questionCount: o,
                          }),
                      }),
                      d.required
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                className: j.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, s.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children:
                                  O.default.Messages
                                    .ONBOARDING_PROMPT_REQUIRED_LABEL,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)(r.Heading, {
                    className: j.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, s.jsx)(E.default, {
                    options: D,
                    value: A,
                    onChange: e => {
                      let t = e.find(e => !I.includes(e.id)),
                        l = e.map(e => e.id);
                      if (null != t) m(d.id, t.id, !0);
                      else {
                        let e = I.filter(e => !l.includes(e)),
                          t = d.options.filter(t => e.includes(t.id));
                        t.forEach(e => {
                          m(d.id, e.id, !1);
                        });
                      }
                    },
                    memberCounts: B,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: j.navButtons,
                children: [
                  (0, s.jsx)("div", {
                    className: j.leftButtons,
                    children:
                      n > 0 &&
                      (0, s.jsxs)(r.Button, {
                        className: j.button,
                        innerClassName: j.buttonInner,
                        onClick: () => f(I.length),
                        size: r.Button.Sizes.MEDIUM,
                        look: r.Button.Looks.OUTLINED,
                        grow: !1,
                        color: r.Button.Colors.PRIMARY,
                        children: [
                          (0, s.jsx)(c.default, {
                            className: j.arrow,
                            direction: c.default.Directions.LEFT,
                          }),
                          O.default.Messages.BACK,
                        ],
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: j.rightButtons,
                    children: [
                      (0, s.jsxs)(r.Text, {
                        className: j.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [_, " ", M],
                      }),
                      (0, s.jsx)(r.Tooltip, {
                        text: v
                          ? O.default.Messages.ONBOARDING_REQUIRED_QUESTION
                          : null,
                        children: e => {
                          let { onMouseEnter: t, onMouseLeave: l } = e;
                          return (0, s.jsx)(r.Button, {
                            className: j.button,
                            innerClassName: j.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            onClick: () => (i ? N() : g(I.length)),
                            disabled: v,
                            size: r.Button.Sizes.MEDIUM,
                            look: r.Button.Looks.FILLED,
                            grow: !1,
                            color: T
                              ? r.Button.Colors.PRIMARY
                              : r.Button.Colors.BRAND,
                            children: i
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    O.default.Messages.FINISH,
                                    (0, s.jsx)("span", {
                                      className: j.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    T
                                      ? O.default.Messages.SKIP
                                      : O.default.Messages.NEXT,
                                    (0, s.jsx)(c.default, {
                                      className: j.arrow,
                                      direction: c.default.Directions.RIGHT,
                                    }),
                                  ],
                                }),
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function C(e) {
        let {
            headerId: t,
            guild: l,
            step: n,
            lastPrompt: i,
            questionCount: o,
            currentPrompt: d,
            selectOption: u,
            gotoPrevPrompt: m,
            gotoNextPrompt: f,
            completeOnboarding: g,
          } = e,
          E = (0, a.useStateFromStoresArray)([h.default], () =>
            h.default.getOnboardingResponsesForPrompt(l.id, d.id)
          ),
          I = 0 === E.length && (null == d ? void 0 : d.required),
          v = null == d ? void 0 : d.options.filter(e => E.includes(e.id)),
          b = (0, x.getSelectedRoleIds)(v),
          S = (0, x.getSelectedChannelIds)(v),
          C = 0 === E.length,
          { helpText: T, helpTextAdditional: _ } = (0, p.default)({
            guild: l,
            prompt: d,
            selectedRoleIds: b,
            selectedChannelIds: S,
            itemHook: R,
          });
        return (0, s.jsx)("div", {
          className: j.prompt,
          children: (0, s.jsxs)("div", {
            className: j.promptContent,
            children: [
              (0, s.jsxs)(r.ScrollerThin, {
                className: j.scrollerContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: j.questionHeader,
                    children: [
                      (0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                          O.default.Messages.ONBOARDING_QUESTION_COUNT.format({
                            currentQuestion: n + 1,
                            questionCount: o,
                          }),
                      }),
                      d.required
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                className: j.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, s.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children:
                                  O.default.Messages
                                    .ONBOARDING_PROMPT_REQUIRED_LABEL,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)(r.Heading, {
                    className: j.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, s.jsx)("div", {
                    className: j.promptOptions,
                    children: d.options.map(e =>
                      (0, s.jsx)(
                        N.default,
                        {
                          guildId: l.id,
                          option: e,
                          onSelect: t => u(d.id, e.id, null != t && t),
                          selected: E.includes(e.id),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: j.navButtons,
                children: [
                  (0, s.jsx)("div", {
                    className: j.leftButtons,
                    children:
                      n > 0 &&
                      (0, s.jsxs)(r.Button, {
                        className: j.button,
                        innerClassName: j.buttonInner,
                        onClick: () => m(E.length),
                        size: r.Button.Sizes.MEDIUM,
                        look: r.Button.Looks.OUTLINED,
                        grow: !1,
                        color: r.Button.Colors.PRIMARY,
                        children: [
                          (0, s.jsx)(c.default, {
                            className: j.arrow,
                            direction: c.default.Directions.LEFT,
                          }),
                          O.default.Messages.BACK,
                        ],
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: j.rightButtons,
                    children: [
                      (0, s.jsxs)(r.Text, {
                        className: j.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [T, " ", _],
                      }),
                      (0, s.jsx)(r.Tooltip, {
                        text: I
                          ? O.default.Messages.ONBOARDING_REQUIRED_QUESTION
                          : null,
                        children: e => {
                          let { onMouseEnter: t, onMouseLeave: l } = e;
                          return (0, s.jsx)(r.Button, {
                            className: j.button,
                            innerClassName: j.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            onClick: () => (i ? g() : f(E.length)),
                            disabled: I,
                            size: r.Button.Sizes.MEDIUM,
                            look: r.Button.Looks.FILLED,
                            grow: !1,
                            color: C
                              ? r.Button.Colors.PRIMARY
                              : r.Button.Colors.BRAND,
                            children: i
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    O.default.Messages.FINISH,
                                    (0, s.jsx)("span", {
                                      className: j.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    C
                                      ? O.default.Messages.SKIP
                                      : O.default.Messages.NEXT,
                                    (0, s.jsx)(c.default, {
                                      className: j.arrow,
                                      direction: c.default.Directions.RIGHT,
                                    }),
                                  ],
                                }),
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function T(e) {
        let {
            guild: t,
            prompts: l,
            step: r,
            selectOption: u,
            completeOnboarding: c,
            setCurrentStep: g,
            headerId: h,
            disableTracking: x,
          } = e,
          p = (0, a.useStateFromStores)([d.default], () =>
            d.default.getRulesPrompt(t.id)
          );
        n.useEffect(() => {
          o.default.fetchVerificationForm(t.id);
        }, [t.id]);
        let N = l[r],
          E = r + 1 >= l.length && !b(p),
          O = l[0].required;
        n.useEffect(() => {
          !x &&
            m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
              ...(0, i.collectGuildAnalyticsMetadata)(t.id),
              step: 0,
              required: O,
            });
        }, [t.id, O, x]);
        let j = e => {
            !x &&
              (m.default.track(
                v.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED,
                {
                  ...(0, i.collectGuildAnalyticsMetadata)(t.id),
                  step: r,
                  options_selected: e,
                  skipped: 0 === e,
                  back: !1,
                  in_onboarding: !0,
                  is_final_step: !1,
                }
              ),
              r < l.length - 1 &&
                m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.collectGuildAnalyticsMetadata)(t.id),
                  step: r,
                  required: l[r + 1].required,
                })),
              r + 1 < l.length ? g(r + 1) : b(p) && g("rules");
          },
          R = e => {
            !x &&
              (m.default.track(
                v.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED,
                {
                  ...(0, i.collectGuildAnalyticsMetadata)(t.id),
                  step: r,
                  skipped: !1,
                  back: !0,
                  options_selected: e,
                  in_onboarding: !0,
                  is_final_step: !1,
                }
              ),
              r > 0 &&
                m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.collectGuildAnalyticsMetadata)(t.id),
                  step: r - 1,
                  required: l[r - 1].required,
                })),
              g(Math.max(0, r - 1));
          };
        if (null == N) return null;
        switch (N.type) {
          case I.OnboardingPromptType.MULTIPLE_CHOICE:
            return (0, s.jsx)(C, {
              guild: t,
              headerId: h,
              step: r,
              questionCount: l.length,
              currentPrompt: N,
              lastPrompt: E,
              selectOption: u,
              gotoPrevPrompt: R,
              gotoNextPrompt: j,
              completeOnboarding: c,
            });
          case I.OnboardingPromptType.DROPDOWN:
            return (0, s.jsx)(S, {
              guild: t,
              headerId: h,
              step: r,
              questionCount: l.length,
              currentPrompt: N,
              lastPrompt: E,
              selectOption: u,
              gotoPrevPrompt: R,
              gotoNextPrompt: j,
              completeOnboarding: c,
            });
          default:
            (0, f.assertNever)(N.type);
        }
      }
    },
    547840: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("65597"),
        r = l("819855"),
        i = l("77078"),
        o = l("841098"),
        d = l("716241"),
        u = l("50926"),
        c = l("526253"),
        m = l("367376"),
        f = l("137215"),
        g = l("599110"),
        h = l("49111"),
        x = l("782340"),
        p = l("423789");
      function N(e) {
        var t;
        let {
            guild: l,
            prompts: N,
            completeOnboarding: E,
            setCurrentStep: I,
            disableTracking: v,
            previousPromptIndex: O,
          } = e,
          j = n.useRef(null),
          R = (0, a.useStateFromStores)([c.default], () =>
            c.default.getRulesPrompt(l.id)
          ),
          [b, S] = n.useState(
            null !== (t = null == R ? void 0 : R.response) && void 0 !== t && t
          ),
          C = (0, a.useStateFromStores)([c.default], () => c.default.get(l.id)),
          T = (0, o.default)(),
          _ = n.useRef(null),
          M = n.useRef(null),
          B = (0, r.isThemeDark)(T)
            ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))"
            : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))",
          D = n.useCallback(async () => {
            if (null != C && null != R) {
              try {
                await u.default.submitVerificationForm(l.id, {
                  ...C,
                  formFields: [{ ...R, response: b }],
                });
              } catch {}
              E();
            }
          }, [l.id, C, R, b, E]);
        function A(e) {
          let [t] = e;
          t.isIntersecting && S(!0);
        }
        return (n.useEffect(() => {
          let e = new IntersectionObserver(A, {
              root: _.current,
              rootMargin: "0px",
              threshold: 0,
            }),
            t = M.current;
          return (
            null != t &&
              null != t.lastElementChild &&
              e.observe(t.lastElementChild),
            () => {
              null != t &&
                null != t.lastElementChild &&
                e.unobserve(t.lastElementChild);
            }
          );
        }, [M, _]),
        null == R)
          ? null
          : (0, s.jsx)("div", {
              className: p.prompt,
              children: (0, s.jsxs)("div", {
                className: p.promptContent,
                ref: _,
                children: [
                  (0, s.jsxs)(i.AdvancedScrollerThin, {
                    className: p.scrollerContent,
                    ref: j,
                    children: [
                      (0, s.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: x.default.Messages.ONBOARDING_RULES_STEP,
                      }),
                      (0, s.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.default.Messages.ONBOARDING_RULES_TITLE,
                      }),
                      (0, s.jsx)("div", {
                        className: p.termsFieldBody,
                        ref: M,
                        children: R.values.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: p.termsRow,
                              children: [
                                (0, s.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: "".concat(t + 1, "."),
                                }),
                                (0, s.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  className: p.termsRowContent,
                                  children:
                                    m.default.parseGuildVerificationFormRule(
                                      e,
                                      !0,
                                      { channelId: l.rulesChannelId }
                                    ),
                                }),
                              ],
                            },
                            "term-".concat(t)
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: p.overlay,
                    style: { background: B },
                  }),
                  (0, s.jsxs)("div", {
                    className: p.navButtons,
                    children: [
                      (0, s.jsx)("div", {
                        className: p.leftButtons,
                        children:
                          -1 !== O &&
                          (0, s.jsxs)(i.Button, {
                            innerClassName: p.buttonInner,
                            onClick: () => {
                              !v &&
                                (g.default.track(
                                  h.AnalyticEvents
                                    .GUILD_ONBOARDING_STEP_COMPLETED,
                                  {
                                    ...(0, d.collectGuildAnalyticsMetadata)(
                                      l.id
                                    ),
                                    step: -1,
                                    skipped: !1,
                                    back: !0,
                                    options_selected: 0,
                                    in_onboarding: !0,
                                    is_final_step: !1,
                                  }
                                ),
                                O >= 0 &&
                                  g.default.track(
                                    h.AnalyticEvents
                                      .GUILD_ONBOARDING_STEP_VIEWED,
                                    {
                                      ...(0, d.collectGuildAnalyticsMetadata)(
                                        l.id
                                      ),
                                      step: O,
                                      required: N[O].required,
                                    }
                                  )),
                                I(O);
                            },
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.OUTLINED,
                            grow: !1,
                            color: i.Button.Colors.PRIMARY,
                            children: [
                              (0, s.jsx)(f.default, {
                                className: p.arrow,
                                direction: f.default.Directions.LEFT,
                              }),
                              x.default.Messages.BACK,
                            ],
                          }),
                      }),
                      (0, s.jsxs)("div", {
                        className: p.rightButtons,
                        children: [
                          (0, s.jsx)(i.Text, {
                            className: p.helpText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: b
                              ? x.default.Messages
                                  .MEMBER_VERIFICATION_READ_AGREE_RULES
                              : x.default.Messages
                                  .MEMBER_VERIFICATION_MUST_READ_RULES,
                          }),
                          (0, s.jsxs)(i.Button, {
                            innerClassName: p.buttonInner,
                            onClick: D,
                            disabled: !b,
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.FILLED,
                            grow: !1,
                            color: i.Button.Colors.BRAND,
                            children: [
                              x.default.Messages.FINISH,
                              (0, s.jsx)("span", {
                                className: p.finishEmoji,
                                role: "img",
                                "aria-hidden": !0,
                                children: "\uD83C\uDF89",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
    },
  },
]);
//# sourceMappingURL=95763dc3a0ec625a1a14.js.map
