(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54742"],
  {
    199132: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          completeSignUp: function () {
            return c;
          },
        });
      var s = a("917351"),
        n = a("151426"),
        l = a("913144"),
        i = a("10641"),
        r = a("599110"),
        o = a("49111");
      function c(e) {
        let { targetKey: t, data: a, completed: c } = e;
        !(0, s.isEmpty)(a) &&
          (!(0, i.isDismissibleContentDismissed)(
            n.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ) &&
            r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
              target_key: t,
              selected_option_key: a.selectedOptionKey,
              email: a.email,
              completed: c,
            }),
          (0, i.markDismissibleContentAsDismissed)(
            n.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ),
          l.default.dispatch({
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
            return b;
          },
        }),
        a("222007");
      var s,
        n,
        l = a("37983"),
        i = a("884691"),
        r = a("414456"),
        o = a.n(r),
        c = a("210696"),
        d = a.n(c),
        u = a("146606"),
        m = a("772279"),
        x = a("823527"),
        p = a("77078"),
        h = a("446674"),
        y = a("206230"),
        S = a("697218"),
        j = a("476765"),
        f = a("824326"),
        k = a("599110"),
        C = a("439932"),
        E = a("199132"),
        g = a("124150"),
        v = a("49111"),
        N = a("782340"),
        T = a("804763");
      let I = (0, C.getThemeClass)(v.ThemeTypes.DARK);
      function _(e) {
        let { selectedOption: t, targetKey: a, data: s } = e,
          [n, r] = i.useState(""),
          [o, c] = i.useState(null),
          d = i.useCallback(
            e => {
              null != s.current && ((s.current.email = e), r(e), c(null));
            },
            [s, c]
          ),
          u = i.useCallback(() => {
            if (null != t && null != s.current) {
              if (n.length < 3 || -1 === n.indexOf("@")) {
                c(N.default.Messages.SIGNUP_EMAIL_ERROR);
                return;
              }
              (0, E.completeSignUp)({
                targetKey: a,
                data: s.current,
                completed: !0,
              });
            }
          }, [a, n, t, c, s]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, l.jsxs)("div", {
                className: T.emailContainer,
                children: [
                  (0, l.jsx)(p.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: N.default.Messages.SIGNUP_EMAIL_PROMPT,
                  }),
                  (0, l.jsxs)("div", {
                    className: T.emailForm,
                    children: [
                      (0, l.jsx)(p.TextInput, {
                        className: T.emailInput,
                        value: n,
                        onChange: d,
                        placeholder:
                          N.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                        error: o,
                      }),
                      (0, l.jsx)(p.Button, {
                        onClick: u,
                        children: (0, l.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: N.default.Messages.SIGNUP_COMPLETE_CTA,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, l.jsx)("div", {});
      }
      function O(e) {
        let { iconName: t } = e,
          a = null;
        switch (t) {
          case "compass":
            a = (0, l.jsx)(m.CompassIcon, { className: T.icon });
            break;
          case "gamepad":
            a = (0, l.jsx)(f.default, { className: T.icon });
            break;
          case "controller":
            a = (0, l.jsx)(x.GameControllerIcon, { className: T.icon });
            break;
          default:
            a = null;
        }
        return (0, l.jsx)("div", { className: T.iconContainer, children: a });
      }
      function M(e) {
        let { option: t, selectedOption: a, setSelectedOption: s } = e,
          n = i.useCallback(() => {
            s(t);
          }, [s, t]),
          [r, c] = i.useState(!1),
          d = t.key === (null == a ? void 0 : a.key),
          u = (0, p.useToken)(p.tokens.colors.BACKGROUND_TERTIARY),
          m = u.hsl({ opacity: r && !d ? 0.9 : 0.8 });
        return (0, l.jsxs)(p.Clickable, {
          className: o(T.option, { [T.selectedOption]: d }),
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          style: { backgroundColor: m },
          onClick: n,
          children: [
            (0, l.jsx)(O, { iconName: t.icon }),
            (0, l.jsxs)("div", {
              className: T.optionContent,
              children: [
                (0, l.jsx)(p.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, l.jsx)(p.Text, {
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
        let {
            target: t,
            selectedOption: a,
            handleSetSelectedOption: s,
            data: n,
          } = e,
          r = (0, h.useStateFromStores)(
            [y.default],
            () => y.default.useReducedMotion
          ),
          [{ state: o }, c] = (0, u.useSpring)(() => ({ state: 0 }), []),
          m = (0, h.useStateFromStores)([S.default], () =>
            S.default.getCurrentUser()
          ),
          x = o.to({ range: [0, 1], output: [1, 0] }),
          j = o.to({ range: [0, 1], output: [0, 1] }),
          f = o.to({ range: [0, 1], output: [0, -150] }),
          k = i.useCallback(
            e => {
              s(e), c({ state: 1, immediate: r });
            },
            [s, c, r]
          );
        return null == m
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)(u.animated.div, {
                  className: T.header,
                  style: { opacity: x },
                  children: [
                    (0, l.jsx)(p.Heading, {
                      variant: "heading-xxl/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    (0, l.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children: t.subtitle,
                    }),
                  ],
                }),
                (0, l.jsxs)(u.animated.div, {
                  className: T.question,
                  style: {
                    transform: f.to(e => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, l.jsx)(p.Text, {
                      variant: "text-lg/medium",
                      color: "header-primary",
                      children: t.question,
                    }),
                    (0, l.jsx)("div", {
                      className: T.options,
                      children: (function (e, t) {
                        let a = e.slice();
                        return (
                          a.sort((e, a) => {
                            let s = d.v3("".concat(e.key).concat(t)),
                              n = d.v3("".concat(a.key).concat(t));
                            return s - n;
                          }),
                          a
                        );
                      })(t.options, m.id).map(e =>
                        (0, l.jsx)(
                          M,
                          {
                            option: e,
                            selectedOption: a,
                            setSelectedOption: k,
                          },
                          e.key
                        )
                      ),
                    }),
                  ],
                }),
                (0, l.jsx)(u.animated.div, {
                  style: {
                    transform: f.to(e => "translateY(".concat(e, "px)")),
                    opacity: j,
                  },
                  children: (0, l.jsx)(_, {
                    selectedOption: a,
                    targetKey: t.key,
                    data: n,
                  }),
                }),
              ],
            });
      }
      function b(e) {
        let { target: t, transitionState: a, onClose: s } = e,
          n = (0, j.useUID)(),
          r = i.useRef({}),
          [c, d] = i.useState(null),
          u = (0, h.useStateFromStores)([g.default], () =>
            g.default.hasCompletedTarget(t.key)
          ),
          m = u ? 1 : 0;
        i.useEffect(() => {
          k.default.track(v.AnalyticEvents.SIGNUP_VIEWED, {
            target_key: t.key,
          });
          let e = r.current;
          return () => {
            (0, E.completeSignUp)({ targetKey: t.key, data: e, completed: !1 });
          };
        }, [t.key, r]);
        let x = i.useCallback(
            e => {
              null != r.current &&
                ((r.current.selectedOptionKey = e.key), d(e));
            },
            [d, r]
          ),
          y = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat"
          ),
          S = null;
        switch (m) {
          case 0:
            S = (0, l.jsx)(P, {
              target: t,
              selectedOption: c,
              handleSetSelectedOption: x,
              data: r,
            });
            break;
          case 1:
            S = (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)("div", {
                className: T.completedContainer,
                children: [
                  (0, l.jsx)(p.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: N.default.Messages.SIGNUP_COMPLETED_TITLE,
                  }),
                  (0, l.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: N.default.Messages.SIGNUP_COMPLETED_DESCRIPTION,
                  }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(p.Button, {
                      onClick: s,
                      children: (0, l.jsx)(p.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: N.default.Messages.DISMISS,
                      }),
                    }),
                  }),
                ],
              }),
            });
        }
        return (0, l.jsx)(p.ThemeContextProvider, {
          theme: v.ThemeTypes.DARK,
          children: (0, l.jsxs)(p.ModalRoot, {
            transitionState: a,
            "aria-labelledby": n,
            size: p.ModalSize.LARGE,
            className: o(T.modal, I),
            children: [
              (0, l.jsxs)(p.Scroller, {
                className: T.content,
                children: [
                  (0, l.jsx)("div", {
                    style: {
                      background: y,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: -1,
                    },
                  }),
                  (0, l.jsx)("div", {
                    className: T.contentInner,
                    children: (0, l.jsx)(p.Sequencer, {
                      animationMotionType: "lift",
                      fillParent: !0,
                      step: m,
                      steps: [0, 1],
                      children: S,
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: T.closeButtonContainer,
                children: (0, l.jsx)(p.ModalCloseButton, { onClick: s }),
              }),
            ],
          }),
        });
      }
      ((n = s || (s = {}))[(n.OPTIONS = 0)] = "OPTIONS"),
        (n[(n.COMPLETED = 1)] = "COMPLETED");
    },
  },
]);
//# sourceMappingURL=f9cce56f2390c83f7a93.js.map
