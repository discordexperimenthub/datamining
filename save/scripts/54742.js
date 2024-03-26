(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54742"],
  {
    199132: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          completeSignUp: function () {
            return d;
          },
        });
      var l = a("917351"),
        s = a("151426"),
        n = a("913144"),
        i = a("10641"),
        r = a("599110"),
        c = a("874595"),
        o = a("49111");
      function d(e) {
        let { targetKey: t, data: a, completed: d } = e;
        !(0, l.isEmpty)(a) &&
          (!(0, i.isDismissibleContentDismissed)(
            s.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ) &&
            r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
              target_key: t,
              selected_option_key: a.selectedOptionKey,
              email: a.email,
              guild_id: a.guildId,
              metadata: (0, c.extractMetadata)(a),
              completed: d,
            }),
          (0, i.markDismissibleContentAsDismissed)(
            s.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ),
          n.default.dispatch({
            type: "COMPLETE_USER_SIGN_UP",
            email: a.email,
            targetKey: t,
            selectedOptionKey: a.selectedOptionKey,
          }));
      }
    },
    597245: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return U;
          },
        }),
        a("222007");
      var l,
        s,
        n = a("37983"),
        i = a("884691"),
        r = a("414456"),
        c = a.n(r),
        o = a("210696"),
        d = a.n(o),
        u = a("146606"),
        m = a("772279"),
        x = a("823527"),
        p = a("77078"),
        h = a("446674"),
        j = a("206230"),
        v = a("697218"),
        y = a("476765"),
        k = a("824326"),
        C = a("599110"),
        S = a("439932"),
        f = a("199132"),
        g = a("124150"),
        N = a("874595"),
        T = a("49111"),
        E = a("782340"),
        b = a("804763");
      let I = (0, S.getThemeClass)(T.ThemeTypes.DARK);
      function O(e) {
        let {
            selectedOption: t,
            targetKey: a,
            data: l,
            handleGoToNextFormGroup: s,
          } = e,
          [r, c] = i.useState(""),
          [o, d] = i.useState(null),
          [u, m] = i.useState(null),
          [x, h] = i.useState(!1),
          [j, v] = i.useState(!1),
          y = i.useCallback(
            e => {
              let { value: t } = e;
              null != l.current && ((l.current.playstyle = t), m(t), s(6));
            },
            [l, m, s]
          ),
          k = i.useCallback(() => {
            if (null != l.current) {
              let e = !x;
              h(e), (l.current.acknowledgeCap = e), e && j && s(8);
            }
          }, [j, x, h, l, s]),
          C = i.useCallback(() => {
            if (null != l.current) {
              let e = !j;
              v(e), (l.current.acknowledgeScreen = e), e && x && s(8);
            }
          }, [x, j, v, l, s]),
          S = i.useCallback(
            e => {
              null != l.current && ((l.current.email = e), c(e), d(null));
            },
            [l, d]
          ),
          g = i.useCallback(() => {
            if (null != t && null != l.current) {
              if (r.length < 3 || -1 === r.indexOf("@")) {
                d(E.default.Messages.SIGNUP_EMAIL_ERROR);
                return;
              }
              (0, f.completeSignUp)({
                targetKey: a,
                data: l.current,
                completed: !0,
              });
            }
          }, [a, r, t, d, l]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, n.jsxs)("div", {
                className: b.emailContainer,
                children: [
                  (0, n.jsx)(p.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: E.default.Messages.SIGNUP_EMAIL_PROMPT,
                  }),
                  (0, n.jsxs)("div", {
                    className: b.emailForm,
                    children: [
                      (0, n.jsx)(p.TextInput, {
                        className: b.emailInput,
                        value: r,
                        onChange: S,
                        placeholder:
                          E.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                        error: o,
                      }),
                      (0, n.jsx)(p.Button, {
                        onClick: g,
                        children: (0, n.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: E.default.Messages.SIGNUP_COMPLETE_CTA,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : "clan" === t.type
              ? (0, n.jsxs)("div", {
                  className: b.form,
                  children: [
                    (0, n.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(p.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children: "What's your server's playstyle?",
                            }),
                            (0, n.jsx)(p.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children:
                                "Let potential members know what kind of gaming you do.",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: b.options,
                          children: (0, N.getClanOptions)(E.default).map(e =>
                            (0, n.jsx)(
                              M,
                              {
                                option: e,
                                isSelected: e.value === u,
                                onOptionSelected: y,
                              },
                              e.value
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(p.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children:
                                "Here are some additional information about Clans.",
                            }),
                            (0, n.jsx)(p.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children:
                                "Select all the checkbox to acknowledge and continue.",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: b.acknowledgements,
                          children: [
                            (0, n.jsxs)(p.Clickable, {
                              className: b.acknowledgement,
                              onClick: k,
                              children: [
                                (0, n.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children:
                                    "Clans are capped to 200 members max.",
                                }),
                                (0, n.jsx)("div", {
                                  className: b.checkboxWrapper,
                                  children: (0, n.jsx)(p.Checkbox, {
                                    displayOnly: !0,
                                    type: p.Checkbox.Types.INVERTED,
                                    value: x,
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)(p.Clickable, {
                              className: b.acknowledgement,
                              onClick: C,
                              children: [
                                (0, n.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children:
                                    "New members must be approved by you in order to join.",
                                }),
                                (0, n.jsx)("div", {
                                  className: b.checkboxWrapper,
                                  children: (0, n.jsx)(p.Checkbox, {
                                    displayOnly: !0,
                                    type: p.Checkbox.Types.INVERTED,
                                    value: j,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, n.jsx)(p.Text, {
                          variant: "text-lg/medium",
                          color: "header-primary",
                          children: E.default.Messages.SIGNUP_EMAIL_PROMPT,
                        }),
                        (0, n.jsxs)("div", {
                          className: b.emailForm,
                          children: [
                            (0, n.jsx)(p.TextInput, {
                              className: b.emailInput,
                              value: r,
                              onChange: S,
                              placeholder:
                                E.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                              error: o,
                            }),
                            (0, n.jsx)(p.Button, {
                              onClick: g,
                              children: (0, n.jsx)(p.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-active",
                                children:
                                  E.default.Messages.SIGNUP_COMPLETE_CTA,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsx)("div", {});
      }
      function _(e) {
        let { iconName: t } = e,
          a = null;
        switch (t) {
          case "compass":
            a = (0, n.jsx)(m.CompassIcon, { className: b.icon });
            break;
          case "gamepad":
            a = (0, n.jsx)(k.default, { className: b.icon });
            break;
          case "controller":
            a = (0, n.jsx)(x.GameControllerIcon, { className: b.icon });
            break;
          default:
            a = null;
        }
        return (0, n.jsx)("div", { className: b.iconContainer, children: a });
      }
      function M(e) {
        let { option: t, icon: a, isSelected: l, onOptionSelected: s } = e,
          [r, o] = i.useState(!1),
          d = (0, p.useToken)(p.tokens.colors.BACKGROUND_TERTIARY),
          u = d.hsl({ opacity: r && !l ? 0.9 : 0.8 }),
          m = i.useCallback(() => {
            s(t);
          }, [s, t]);
        return (0, n.jsxs)(p.Clickable, {
          className: c(b.option, { [b.selectedOption]: l }),
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          style: { backgroundColor: u },
          onClick: m,
          children: [
            a,
            (0, n.jsxs)("div", {
              className: b.optionContent,
              children: [
                (0, n.jsx)(p.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, n.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t.description,
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { option: t, selectedOption: a, setSelectedOption: l } = e,
          s = t.key === (null == a ? void 0 : a.key);
        return (0, n.jsx)(M, {
          option: t,
          icon: (0, n.jsx)(_, { iconName: t.icon }),
          isSelected: s,
          onOptionSelected: l,
        });
      }
      function G(e) {
        let {
            target: t,
            selectedOption: a,
            handleSetSelectedOption: l,
            data: s,
          } = e,
          r = (0, h.useStateFromStores)(
            [j.default],
            () => j.default.useReducedMotion
          ),
          [{ state: c }, o] = (0, u.useSpring)(() => ({ state: 0 }), []),
          m = (0, h.useStateFromStores)([v.default], () =>
            v.default.getCurrentUser()
          ),
          x = c.to({ range: [0, 1], output: [1, 0] }),
          y = c.to({ range: [0, 1], output: [0, 1] }),
          k = c.to({ range: [0, 10], output: [0, -700] }),
          C = i.useCallback(
            e => {
              l(e);
              let t = "email" === e.type ? 2 : 3;
              o({ state: t, immediate: r });
            },
            [l, o, r]
          ),
          S = i.useCallback(
            e => {
              o({ state: e, immediate: r });
            },
            [o, r]
          );
        return null == m
          ? null
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)(u.animated.div, {
                  className: b.header,
                  style: { opacity: x },
                  children: [
                    (0, n.jsx)(p.Heading, {
                      variant: "heading-xxl/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    (0, n.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children: t.subtitle,
                    }),
                  ],
                }),
                (0, n.jsxs)(u.animated.div, {
                  className: b.question,
                  style: {
                    transform: k.to(e => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, n.jsx)(p.Text, {
                      variant: "text-lg/medium",
                      color: "header-primary",
                      children: t.question,
                    }),
                    (0, n.jsx)("div", {
                      className: b.options,
                      children: (function (e, t) {
                        let a = e.slice();
                        return (
                          a.sort((e, a) => {
                            let l = d.v3("".concat(e.key).concat(t)),
                              s = d.v3("".concat(a.key).concat(t));
                            return l - s;
                          }),
                          a
                        );
                      })(t.options, m.id).map(e =>
                        (0, n.jsx)(
                          P,
                          {
                            option: e,
                            selectedOption: a,
                            setSelectedOption: C,
                          },
                          e.key
                        )
                      ),
                    }),
                  ],
                }),
                (0, n.jsx)(u.animated.div, {
                  style: {
                    transform: k.to(e => "translateY(".concat(e, "px)")),
                    opacity: y,
                  },
                  children: (0, n.jsx)(O, {
                    selectedOption: a,
                    targetKey: t.key,
                    data: s,
                    handleGoToNextFormGroup: S,
                  }),
                }),
              ],
            });
      }
      function U(e) {
        let { target: t, guildId: a, transitionState: l, onClose: s } = e,
          r = (0, y.useUID)(),
          o = i.useRef({ guildId: a }),
          [d, u] = i.useState(null),
          m = (0, h.useStateFromStores)([g.default], () =>
            g.default.hasCompletedTarget(t.key)
          ),
          x = m ? 1 : 0;
        i.useEffect(() => {
          C.default.track(T.AnalyticEvents.SIGNUP_VIEWED, {
            target_key: t.key,
          });
          let e = o.current;
          return () => {
            (0, f.completeSignUp)({ targetKey: t.key, data: e, completed: !1 });
          };
        }, [t.key, o]);
        let j = i.useCallback(
            e => {
              null != o.current &&
                ((o.current.selectedOptionKey = e.key), u(e));
            },
            [u, o]
          ),
          v = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat"
          ),
          k = null;
        switch (x) {
          case 0:
            k = (0, n.jsx)(G, {
              target: t,
              selectedOption: d,
              handleSetSelectedOption: j,
              data: o,
            });
            break;
          case 1:
            k = (0, n.jsxs)("div", {
              className: b.completedContainer,
              children: [
                (0, n.jsx)(p.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: E.default.Messages.SIGNUP_COMPLETED_TITLE,
                }),
                (0, n.jsx)(p.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: E.default.Messages.SIGNUP_COMPLETED_DESCRIPTION,
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(p.Button, {
                    onClick: s,
                    children: (0, n.jsx)(p.Text, {
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: E.default.Messages.DISMISS,
                    }),
                  }),
                }),
              ],
            });
        }
        return (0, n.jsx)(p.ThemeContextProvider, {
          theme: T.ThemeTypes.DARK,
          children: (0, n.jsxs)(p.ModalRoot, {
            transitionState: l,
            "aria-labelledby": r,
            size: p.ModalSize.LARGE,
            className: c(b.modal, I),
            children: [
              (0, n.jsxs)(p.Scroller, {
                className: b.content,
                children: [
                  (0, n.jsx)("div", {
                    style: {
                      background: v,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: -1,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: b.contentInner,
                    children: (0, n.jsx)(p.Sequencer, {
                      animationMotionType: "lift",
                      fillParent: !0,
                      step: x,
                      steps: [0, 1],
                      children: k,
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: b.closeButtonContainer,
                children: (0, n.jsx)(p.ModalCloseButton, { onClick: s }),
              }),
            ],
          }),
        });
      }
      ((s = l || (l = {}))[(s.OPTIONS = 0)] = "OPTIONS"),
        (s[(s.COMPLETED = 1)] = "COMPLETED");
    },
  },
]);
//# sourceMappingURL=8b709932a0b0c9c41250.js.map
