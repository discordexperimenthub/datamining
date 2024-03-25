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
        l = a("151426"),
        n = a("913144"),
        i = a("10641"),
        r = a("599110"),
        o = a("49111");
      function c(e) {
        let { targetKey: t, data: a, completed: c } = e;
        !(0, s.isEmpty)(a) &&
          (!(0, i.isDismissibleContentDismissed)(
            l.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ) &&
            r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
              target_key: t,
              selected_option_key: a.selectedOptionKey,
              email: a.email,
              completed: c,
            }),
          (0, i.markDismissibleContentAsDismissed)(
            l.DismissibleContent.GAME_ONE_USER_SIGNUPS
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
            return O;
          },
        }),
        a("222007");
      var s,
        l,
        n = a("37983"),
        i = a("884691"),
        r = a("414456"),
        o = a.n(r),
        c = a("146606"),
        d = a("772279"),
        u = a("823527"),
        m = a("77078"),
        x = a("446674"),
        p = a("206230"),
        h = a("476765"),
        y = a("824326"),
        j = a("599110"),
        S = a("439932"),
        C = a("199132"),
        f = a("124150"),
        k = a("49111"),
        E = a("782340"),
        g = a("804763");
      let v = (0, S.getThemeClass)(k.ThemeTypes.DARK);
      function N(e) {
        let { selectedOption: t, targetKey: a, data: s } = e,
          [l, r] = i.useState(""),
          [o, c] = i.useState(null),
          d = i.useCallback(
            e => {
              null != s.current && ((s.current.email = e), r(e), c(null));
            },
            [s, c]
          ),
          u = i.useCallback(() => {
            if (null != t && null != s.current) {
              if (l.length < 3 || -1 === l.indexOf("@")) {
                c(E.default.Messages.SIGNUP_EMAIL_ERROR);
                return;
              }
              (0, C.completeSignUp)({
                targetKey: a,
                data: s.current,
                completed: !0,
              });
            }
          }, [a, l, t, c, s]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, n.jsxs)("div", {
                className: g.emailContainer,
                children: [
                  (0, n.jsx)(m.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: E.default.Messages.SIGNUP_EMAIL_PROMPT,
                  }),
                  (0, n.jsxs)("div", {
                    className: g.emailForm,
                    children: [
                      (0, n.jsx)(m.TextInput, {
                        className: g.emailInput,
                        value: l,
                        onChange: d,
                        placeholder:
                          E.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                        error: o,
                      }),
                      (0, n.jsx)(m.Button, {
                        onClick: u,
                        children: (0, n.jsx)(m.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: E.default.Messages.SIGNUP_COMPLETE_CTA,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, n.jsx)("div", {});
      }
      function T(e) {
        let { iconName: t } = e,
          a = null;
        switch (t) {
          case "compass":
            a = (0, n.jsx)(d.CompassIcon, { className: g.icon });
            break;
          case "gamepad":
            a = (0, n.jsx)(y.default, { className: g.icon });
            break;
          case "controller":
            a = (0, n.jsx)(u.GameControllerIcon, { className: g.icon });
            break;
          default:
            a = null;
        }
        return (0, n.jsx)("div", { className: g.iconContainer, children: a });
      }
      function I(e) {
        let { option: t, selectedOption: a, setSelectedOption: s } = e,
          l = i.useCallback(() => {
            s(t);
          }, [s, t]),
          [r, c] = i.useState(!1),
          d = t.key === (null == a ? void 0 : a.key),
          u = (0, m.useToken)(m.tokens.colors.BACKGROUND_TERTIARY),
          x = u.hsl({ opacity: r && !d ? 0.9 : 0.8 });
        return (0, n.jsxs)(m.Clickable, {
          className: o(g.option, { [g.selectedOption]: d }),
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          style: { backgroundColor: x },
          onClick: l,
          children: [
            (0, n.jsx)(T, { iconName: t.icon }),
            (0, n.jsxs)("div", {
              className: g.optionContent,
              children: [
                (0, n.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t.description,
                }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let {
            target: t,
            selectedOption: a,
            handleSetSelectedOption: s,
            data: l,
          } = e,
          r = (0, x.useStateFromStores)(
            [p.default],
            () => p.default.useReducedMotion
          ),
          [{ state: o }, d] = (0, c.useSpring)(() => ({ state: 0 }), []),
          u = o.to({ range: [0, 1], output: [1, 0] }),
          h = o.to({ range: [0, 1], output: [0, 1] }),
          y = o.to({ range: [0, 1], output: [0, -150] }),
          j = i.useCallback(
            e => {
              s(e), d({ state: 1, immediate: r });
            },
            [s, d, r]
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(c.animated.div, {
              className: g.header,
              style: { opacity: u },
              children: [
                (0, n.jsx)(m.Heading, {
                  variant: "heading-xxl/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-md/normal",
                  color: "always-white",
                  children: t.subtitle,
                }),
              ],
            }),
            (0, n.jsxs)(c.animated.div, {
              className: g.question,
              style: { transform: y.to(e => "translateY(".concat(e, "px)")) },
              children: [
                (0, n.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.question,
                }),
                (0, n.jsx)("div", {
                  className: g.options,
                  children: t.options.map(e =>
                    (0, n.jsx)(
                      I,
                      { option: e, selectedOption: a, setSelectedOption: j },
                      e.key
                    )
                  ),
                }),
              ],
            }),
            (0, n.jsx)(c.animated.div, {
              style: {
                transform: y.to(e => "translateY(".concat(e, "px)")),
                opacity: h,
              },
              children: (0, n.jsx)(N, {
                selectedOption: a,
                targetKey: t.key,
                data: l,
              }),
            }),
          ],
        });
      }
      function O(e) {
        let { target: t, transitionState: a, onClose: s } = e,
          l = (0, h.useUID)(),
          r = i.useRef({}),
          [c, d] = i.useState(null),
          u = (0, x.useStateFromStores)([f.default], () =>
            f.default.hasCompletedTarget(t.key)
          ),
          p = u ? 1 : 0;
        i.useEffect(() => {
          j.default.track(k.AnalyticEvents.SIGNUP_VIEWED, {
            target_key: t.key,
          });
          let e = r.current;
          return () => {
            (0, C.completeSignUp)({ targetKey: t.key, data: e, completed: !1 });
          };
        }, [t.key, r]);
        let y = i.useCallback(
            e => {
              null != r.current &&
                ((r.current.selectedOptionKey = e.key), d(e));
            },
            [d, r]
          ),
          S = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat"
          ),
          N = null;
        switch (p) {
          case 0:
            N = (0, n.jsx)(_, {
              target: t,
              selectedOption: c,
              handleSetSelectedOption: y,
              data: r,
            });
            break;
          case 1:
            N = (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                className: g.completedContainer,
                children: [
                  (0, n.jsx)(m.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: E.default.Messages.SIGNUP_COMPLETED_TITLE,
                  }),
                  (0, n.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: E.default.Messages.SIGNUP_COMPLETED_DESCRIPTION,
                  }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)(m.Button, {
                      onClick: s,
                      children: (0, n.jsx)(m.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: E.default.Messages.DISMISS,
                      }),
                    }),
                  }),
                ],
              }),
            });
        }
        return (0, n.jsx)(m.ThemeContextProvider, {
          theme: k.ThemeTypes.DARK,
          children: (0, n.jsxs)(m.ModalRoot, {
            transitionState: a,
            "aria-labelledby": l,
            size: m.ModalSize.LARGE,
            className: o(g.modal, v),
            children: [
              (0, n.jsxs)(m.Scroller, {
                className: g.content,
                children: [
                  (0, n.jsx)("div", {
                    style: {
                      background: S,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: -1,
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: g.contentInner,
                    children: (0, n.jsx)(m.Sequencer, {
                      animationMotionType: "lift",
                      fillParent: !0,
                      step: p,
                      steps: [0, 1],
                      children: N,
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: g.closeButtonContainer,
                children: (0, n.jsx)(m.ModalCloseButton, { onClick: s }),
              }),
            ],
          }),
        });
      }
      ((l = s || (s = {}))[(l.OPTIONS = 0)] = "OPTIONS"),
        (l[(l.COMPLETED = 1)] = "COMPLETED");
    },
  },
]);
//# sourceMappingURL=42053e79a4d198bcdf4b.js.map
