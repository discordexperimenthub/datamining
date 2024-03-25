(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54742"],
  {
    199132: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          completeSignUp: function () {
            return c;
          },
        });
      var s = l("917351"),
        a = l("151426"),
        n = l("913144"),
        i = l("10641"),
        o = l("599110"),
        r = l("49111");
      function c(e) {
        let { targetKey: t, data: l, completed: c } = e;
        !(0, s.isEmpty)(l) &&
          (!(0, i.isDismissibleContentDismissed)(
            a.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ) &&
            o.default.track(r.AnalyticEvents.SIGNUP_COMPLETED, {
              target_key: t,
              selected_option_key: l.selectedOptionKey,
              email: l.email,
              completed: c,
            }),
          (0, i.markDismissibleContentAsDismissed)(
            a.DismissibleContent.GAME_ONE_USER_SIGNUPS
          ),
          n.default.dispatch({
            type: "COMPLETE_USER_SIGN_UP",
            email: l.email,
            targetKey: t,
            selectedOptionKey: l.selectedOptionKey,
          }));
      }
    },
    597245: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        }),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        n = l("414456"),
        i = l.n(n),
        o = l("146606"),
        r = l("772279"),
        c = l("823527"),
        d = l("77078"),
        u = l("446674"),
        m = l("206230"),
        x = l("476765"),
        p = l("824326"),
        h = l("599110"),
        v = l("439932"),
        y = l("199132"),
        f = l("124150"),
        j = l("49111"),
        k = l("782340"),
        C = l("804763");
      let S = (0, v.getThemeClass)(j.ThemeTypes.DARK);
      function E(e) {
        let { selectedOption: t, targetKey: l, data: n } = e,
          [i, o] = a.useState(""),
          [r, c] = a.useState(null),
          u = a.useCallback(
            e => {
              null != n.current && ((n.current.email = e), o(e), c(null));
            },
            [n, c]
          ),
          m = a.useCallback(() => {
            if (null != t && null != n.current) {
              if (i.length < 3 || -1 === i.indexOf("@")) {
                c(k.default.Messages.SIGNUP_EMAIL_ERROR);
                return;
              }
              (0, y.completeSignUp)({
                targetKey: l,
                data: n.current,
                completed: !0,
              });
            }
          }, [l, i, t, c, n]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, s.jsxs)("div", {
                className: C.emailContainer,
                children: [
                  (0, s.jsx)(d.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: k.default.Messages.SIGNUP_EMAIL_PROMPT,
                  }),
                  (0, s.jsxs)("div", {
                    className: C.emailForm,
                    children: [
                      (0, s.jsx)(d.TextInput, {
                        className: C.emailInput,
                        value: i,
                        onChange: u,
                        placeholder:
                          k.default.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                        error: r,
                      }),
                      (0, s.jsx)(d.Button, {
                        onClick: m,
                        children: (0, s.jsx)(d.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: k.default.Messages.SIGNUP_COMPLETE_CTA,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, s.jsx)("div", {});
      }
      function N(e) {
        let { iconName: t } = e,
          l = null;
        switch (t) {
          case "compass":
            l = (0, s.jsx)(r.CompassIcon, { className: C.icon });
            break;
          case "gamepad":
            l = (0, s.jsx)(p.default, { className: C.icon });
            break;
          case "controller":
            l = (0, s.jsx)(c.GameControllerIcon, { className: C.icon });
            break;
          default:
            l = null;
        }
        return (0, s.jsx)("div", { className: C.iconContainer, children: l });
      }
      function T(e) {
        let { option: t, selectedOption: l, setSelectedOption: n } = e,
          o = a.useCallback(() => {
            n(t);
          }, [n, t]),
          [r, c] = a.useState(!1),
          u = t.key === (null == l ? void 0 : l.key),
          m = (0, d.useToken)(d.tokens.colors.BACKGROUND_TERTIARY),
          x = m.hsl({ opacity: r && !u ? 0.9 : 0.8 });
        return (0, s.jsxs)(d.Clickable, {
          className: i(C.option, { [C.selectedOption]: u }),
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          style: { backgroundColor: x },
          onClick: o,
          children: [
            (0, s.jsx)(N, { iconName: t.icon }),
            (0, s.jsxs)("div", {
              className: C.optionContent,
              children: [
                (0, s.jsx)(d.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, s.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t.description,
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { target: t, transitionState: l, onClose: n } = e,
          r = (0, x.useUID)(),
          c = a.useRef({}),
          [p, v] = a.useState(null),
          N = (0, u.useStateFromStores)([f.default], () =>
            f.default.hasCompletedTarget(t.key)
          ),
          g = a.useRef(null),
          _ = (0, u.useStateFromStores)(
            [m.default],
            () => m.default.useReducedMotion
          ),
          I = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat"
          ),
          b = (0, o.useSpring)({
            from: { opacity: 1 },
            to: { opacity: null == p ? 1 : 0 },
            immediate: _,
          });
        a.useEffect(() => {
          h.default.track(j.AnalyticEvents.SIGNUP_VIEWED, {
            target_key: t.key,
          });
          let e = c.current;
          return () => {
            (0, y.completeSignUp)({ targetKey: t.key, data: e, completed: !1 });
          };
        }, [t.key, c]);
        let M = a.useCallback(
            e => {
              null != c.current &&
                ((c.current.selectedOptionKey = e.key),
                v(e),
                setTimeout(() => {
                  var e, t, l;
                  let s =
                    null !==
                      (l =
                        null === (e = g.current) || void 0 === e
                          ? void 0
                          : e.scrollTop) && void 0 !== l
                      ? l
                      : 0;
                  !(s >= 100) &&
                    (null === (t = g.current) ||
                      void 0 === t ||
                      t.scrollTo({
                        top: 100,
                        behavior: _ ? "auto" : "smooth",
                      }));
                }, 0));
            },
            [v, g, _, c]
          ),
          O = null;
        if (N)
          O = (0, s.jsxs)("div", {
            className: C.content,
            children: [
              (0, s.jsx)("div", {
                style: {
                  background: I,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
              }),
              (0, s.jsxs)("div", {
                className: C.completedContainer,
                children: [
                  (0, s.jsx)(d.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: k.default.Messages.SIGNUP_COMPLETED_TITLE,
                  }),
                  (0, s.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: k.default.Messages.SIGNUP_COMPLETED_DESCRIPTION,
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(d.Button, {
                      onClick: n,
                      children: (0, s.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: k.default.Messages.DISMISS,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        else {
          let e = (0, s.jsxs)(o.animated.div, {
            className: C.header,
            style: b,
            children: [
              (0, s.jsx)(d.Heading, {
                variant: "heading-xxl/medium",
                color: "header-primary",
                children: t.title,
              }),
              (0, s.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: t.subtitle,
              }),
            ],
          });
          O = (0, s.jsxs)(d.Scroller, {
            ref: g,
            className: C.content,
            children: [
              (0, s.jsx)("div", {
                style: {
                  background: I,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
              }),
              e,
              (0, s.jsxs)("div", {
                className: C.question,
                children: [
                  (0, s.jsx)(d.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: t.question,
                  }),
                  (0, s.jsx)("div", {
                    className: C.options,
                    children: t.options.map(e =>
                      (0, s.jsx)(
                        T,
                        { option: e, selectedOption: p, setSelectedOption: M },
                        e.key
                      )
                    ),
                  }),
                ],
              }),
              (0, s.jsx)(E, { selectedOption: p, targetKey: t.key, data: c }),
            ],
          });
        }
        return (0, s.jsx)(d.ThemeContextProvider, {
          theme: j.ThemeTypes.DARK,
          children: (0, s.jsxs)(d.ModalRoot, {
            transitionState: l,
            "aria-labelledby": r,
            size: d.ModalSize.LARGE,
            className: i(C.modal, S),
            children: [
              O,
              (0, s.jsx)("div", {
                className: C.closeButtonContainer,
                children: (0, s.jsx)(d.ModalCloseButton, { onClick: n }),
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=fdf709923110bb5aff67.js.map
