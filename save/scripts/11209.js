(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11209"],
  {
    315025: function (e, t, s) {
      "use strict";
      e.exports = s.p + "73e10d7b642efec0fe24.svg";
    },
    92882: function (e, t, s) {
      "use strict";
      e.exports = s.p + "8d1438d2eaf2795dc7e6.svg";
    },
    482563: function (e, t, s) {
      "use strict";
      e.exports = s.p + "1246f861d8aeee1e85a8.svg";
    },
    154442: function (e, t, s) {
      "use strict";
      e.exports = s.p + "6d28f7661b620cdfab26.svg";
    },
    135713: function (e, t, s) {
      "use strict";
      e.exports = s.p + "82f441e4f49e9006c565.svg";
    },
    821809: function (e, t, s) {
      "use strict";
      e.exports = s.p + "89d8bc2c681742561531.svg";
    },
    535910: function (e, t, s) {
      "use strict";
      e.exports = s.p + "063e4561fe6d167bca65.svg";
    },
    504935: function (e, t, s) {
      "use strict";
      e.exports = s.p + "14bf64abfa233414038b.svg";
    },
    970293: function (e, t, s) {
      "use strict";
      e.exports = s.p + "64b69804d8bc22d3b09e.svg";
    },
    559154: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7258babc2ae473e95a4d.svg";
    },
    459991: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f6b723db9e3e036cda63.svg";
    },
    495826: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0fd896f78677ce6048db.svg";
    },
    731109: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          submitDateOfBirth: function () {
            return c;
          },
          preventUnderageRegistration: function () {
            return u;
          },
          logoutUnderageNewUser: function () {
            return d;
          },
        });
      var a = s("872717"),
        l = s("913144"),
        n = s("395724"),
        r = s("599110"),
        o = s("586391"),
        i = s("49111");
      function c(e, t) {
        return (
          (0, n.default)(e, t),
          r.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: o.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
          }),
          a.default
            .patch({
              url: i.Endpoints.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then(e => {
              let s = e.body;
              l.default.dispatch({ type: "CURRENT_USER_UPDATE", user: s }),
                r.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                  source: t,
                  action: o.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function u(e) {
        l.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          r.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              o.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        l.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          r.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action: o.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    208266: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s("222007"),
        s("424973");
      var a = s("37983"),
        l = s("884691"),
        n = s("414456"),
        r = s.n(n),
        o = s("866227"),
        i = s.n(o),
        c = s("77078"),
        u = s("414943"),
        d = s("782340"),
        f = s("283764");
      let E = i().localeData().months(),
        p = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        h = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: E[e],
        })),
        m = /[a-zA-Z0-9]/;
      function N(e) {
        let { options: t, selectOption: s, children: n } = e,
          [r, o] = l.useState("");
        l.useEffect(() => {
          if ("" !== r) {
            let e = setTimeout(() => o(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [r, o]);
        let i = l.useCallback(
          e => {
            if (m.test(e.key)) {
              let a = "".concat(r).concat(e.key.toLowerCase()),
                l = t.find(e => e.label.toLowerCase().startsWith(a));
              null != l && s(l.value), o(a);
            }
          },
          [s, o, r, t]
        );
        return (0, a.jsx)("div", { onKeyDown: i, children: n });
      }
      function _() {
        let e = i().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          s = e.indexOf("M"),
          a = e.indexOf("Y");
        return (
          (-1 === t || -1 === s || -1 === a) && ((t = 0), (s = 1), (a = 2)),
          [
            { index: t, type: "day" },
            { index: s, type: "month" },
            { index: a, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let T = l.forwardRef(function (e, t) {
        let {
            value: s,
            wrapperClassName: n,
            onChange: o,
            onPopulated: E,
            error: m,
            autoFocus: T,
            required: A,
          } = e,
          {
            day: v,
            setDay: S,
            month: x,
            setMonth: I,
            year: g,
            setYear: C,
          } = (function (e) {
            let t = null,
              s = null,
              a = null;
            null != e && ((t = e.date()), (s = e.month() + 1), (a = e.year()));
            let [n, r] = l.useState(t),
              [o, i] = l.useState(s),
              [c, u] = l.useState(a);
            return {
              day: n,
              setDay: r,
              month: o,
              setMonth: i,
              year: c,
              setYear: u,
            };
          })(s),
          O = l.useMemo(
            () =>
              null != v && null != x && null != g
                ? i("".concat(v, "/").concat(x, "/").concat(g), "DD/MM/YYYY")
                : null,
            [v, x, g]
          );
        l.useEffect(() => {
          o((null == O ? void 0 : O.isValid()) ? O : null);
        }, [O, o]);
        let b = m;
        null != O &&
          !O.isValid() &&
          (b = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let U = (function () {
            let e = new Date().getFullYear(),
              t = l.useRef(
                Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }))
              );
            return (
              l.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [M, G] = l.useState(T ? 0 : -1),
          R = l.useRef(null),
          y = l.useRef(null),
          j = l.useRef(null),
          D = l.useMemo(_, []),
          F = l.useCallback(() => {
            var e, t, s, a;
            switch (null === (e = D[M]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = R.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (s = y.current) || void 0 === s || s.focus();
                break;
              case "year":
                null === (a = j.current) || void 0 === a || a.focus();
            }
          }, [M, R, y, j, D]);
        l.useEffect(() => {
          setTimeout(F, 500);
        }, []),
          l.useEffect(() => {
            if (M >= D.length) {
              null == E || E();
              return;
            }
            F();
          }, [M, F]);
        let L = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = D[e];
          switch (t) {
            case "day":
              L.push({
                key: "day",
                input: (0, a.jsx)(N, {
                  options: p,
                  selectOption: S,
                  children: (0, a.jsx)(u.default, {
                    ref: R,
                    className: f.inputDay,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: u.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: p,
                    value: v,
                    onChange: t => {
                      let { value: s } = t;
                      S(s), G(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              L.push({
                key: "month",
                input: (0, a.jsx)(N, {
                  options: h,
                  selectOption: I,
                  children: (0, a.jsx)(u.default, {
                    ref: y,
                    className: f.inputMonth,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: u.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: h,
                    value: x,
                    onChange: t => {
                      let { value: s } = t;
                      I(s), G(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              L.push({
                key: "year",
                input: (0, a.jsx)(N, {
                  options: U,
                  selectOption: C,
                  children: (0, a.jsx)(u.default, {
                    ref: j,
                    className: f.inputYear,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: u.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: U,
                    value: g,
                    onChange: t => {
                      let { value: s } = t;
                      C(s), G(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, a.jsxs)("fieldset", {
          className: r(f.container, n),
          children: [
            (0, a.jsx)(c.FormTitle, {
              tag: "legend",
              required: A,
              error: b,
              children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, a.jsx)("div", {
              className: f.inputs,
              children: L.map((e, t) => {
                let { key: s, input: l } = e;
                return (0, a.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[s], children: l },
                  s
                );
              }),
            }),
          ],
        });
      });
      var A = T;
    },
    395724: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s("866227"),
        l = s.n(a),
        n = s("599110"),
        r = s("49111");
      function o(e, t) {
        n.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
          dob: 18 > l().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    207354: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("627445"),
        r = s.n(n),
        o = s("446674"),
        i = s("669491"),
        c = s("77078"),
        u = s("731109"),
        d = s("208266"),
        f = s("697218"),
        E = s("153769"),
        p = s("701909"),
        h = s("49111"),
        m = s("586391"),
        N = s("782340"),
        _ = s("354988");
      function T(e) {
        let { onComplete: t, onClose: s } = e,
          [n, T] = l.useState(null),
          [A, v] = l.useState(null),
          [S, x] = l.useState(!1),
          I = (0, o.useStateFromStores)([f.default], () =>
            f.default.getCurrentUser()
          ),
          g = l.createRef();
        async function C(e) {
          e.preventDefault(),
            r(null != n, "Cannot submit null birthday."),
            x(!0);
          try {
            await u.submitDateOfBirth(n, m.AgeGateSource.NEW_USER_FLOW), t();
          } catch (e) {
            if (null != e.body && null != e.body.date_of_birth)
              u.preventUnderageRegistration(m.AgeGateSource.NEW_USER_FLOW),
                u.logoutUnderageNewUser(m.AgeGateSource.NEW_USER_FLOW),
                s();
            else {
              var a;
              (null == e
                ? void 0
                : null === (a = e.body) || void 0 === a
                  ? void 0
                  : a.username) != null
                ? v(N.default.Messages.USER_SETTINGS_UPDATE_FAILURE)
                : v(null == e ? void 0 : e.body.message);
            }
          }
          x(!1);
        }
        l.useEffect(() => {
          null != I && null != I.nsfwAllowed && t();
        }, [I, t]);
        let O = l.useCallback(
            e => {
              T(e);
            },
            [T]
          ),
          b = l.useCallback(() => {
            var e;
            null === (e = g.current) || void 0 === e || e.focus();
          }, [g]);
        return null == I
          ? null
          : (0, a.jsxs)("form", {
              className: _.content,
              onSubmit: C,
              children: [
                (0, a.jsx)(E.default, {
                  width: 56,
                  height: 40,
                  className: _.logo,
                  color: i.default.unsafe_rawColors.BRAND_500.css,
                }),
                (0, a.jsx)(c.Heading, {
                  className: _.title,
                  variant: "heading-xl/semibold",
                  children: N.default.Messages.NUF_JOIN_SERVER_TITLE_2,
                }),
                (0, a.jsx)(c.Text, {
                  color: "text-normal",
                  className: _.description,
                  variant: "text-md/normal",
                  children: N.default.Messages.NUF_AGE_GATE_BODY.format({
                    helpURL: p.default.getArticleURL(
                      h.HelpdeskArticles.AGE_GATE
                    ),
                  }),
                }),
                (0, a.jsx)(c.ThemeContextProvider, {
                  theme: h.ThemeTypes.LIGHT,
                  children: (0, a.jsx)(d.default, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: _.formItem,
                    label: N.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    name: "birthday",
                    onChange: O,
                    onPopulated: b,
                    error: A,
                    value: n,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: _.footer,
                  children: (0, a.jsx)("div", {
                    className: _.buttonWrapper,
                    children: (0, a.jsx)(c.Button, {
                      buttonRef: g,
                      type: "submit",
                      size: c.Button.Sizes.LARGE,
                      submitting: S,
                      disabled: null == n,
                      fullWidth: !0,
                      children: N.default.Messages.NEXT,
                    }),
                  }),
                }),
              ],
            });
      }
    },
    377052: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        n = s.n(l),
        r = s("77078"),
        o = s("258078"),
        i = s("782340"),
        c = s("497173");
      function u(e) {
        let { onComplete: t } = e;
        return (0, a.jsxs)(r.Clickable, {
          className: c.container,
          onClick: t,
          children: [
            (0, a.jsx)(o.default, {
              size: o.default.Sizes.SIZE_24,
              className: c.title,
              children: i.default.Messages.NUF_COMPLETE_TITLE,
            }),
            (0, a.jsx)(o.default, {
              size: o.default.Sizes.SIZE_24,
              className: n(c.title, c.subtitle),
              children: i.default.Messages.NUF_COMPLETE_SUBTITLE,
            }),
            (0, a.jsx)(r.Button, {
              color: r.Button.Colors.WHITE,
              onClick: t,
              children: i.default.Messages.NUF_COMPLETE_CTA,
            }),
          ],
        });
      }
    },
    344491: function (e, t, s) {
      "use strict";
      let a, l;
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        o = s("414456"),
        i = s.n(o),
        c = s("77078"),
        u = s("970728"),
        d = s("79112"),
        f = s("448993"),
        E = s("145131"),
        p = s("258078"),
        h = s("883029"),
        m = s("49111"),
        N = s("782340"),
        _ = s("94079");
      let T =
        ((a = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == a && ((a = location.host), (l = m.Routes.INVITE(""))),
        "".concat(location.protocol, "//").concat(a).concat(l, "/"));
      function A(e) {
        let { onBack: t, onComplete: s, onConnect: a, isSlideReady: l } = e,
          [o, A] = r.useState(""),
          [v, S] = r.useState(!1),
          [x, I] = r.useState(null),
          g = r.useRef(null);
        r.useEffect(() => {
          var e;
          l && (null === (e = g.current) || void 0 === e || e.focus());
        }, [l]);
        let C = r.useCallback(
            e => {
              e.preventDefault();
              let t = o.trim();
              if ("" === t) {
                I(N.default.Messages.INVALID_INVITE_LINK_ERROR);
                return;
              }
              I(null), S(!0);
              let a = t.split("/"),
                l = a[a.length - 1];
              u.default.resolveInvite(l, "Join Guild", { inputValue: t }).then(
                e => {
                  let { invite: t } = e;
                  if ((S(!1), null == t)) {
                    I(N.default.Messages.INSTANT_INVITE_EXPIRED);
                    return;
                  }
                  if (null != t.channel) {
                    let e = u.default.getInviteContext("Join Guild", t);
                    u.default
                      .acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: e => {
                          s(), u.default.transitionToInvite(e);
                        },
                      })
                      .catch(e => {
                        if (
                          e instanceof f.V6OrEarlierAPIError ||
                          e instanceof f.APIError
                        ) {
                          let t = (0, h.getInviteError)(e.code);
                          I(t);
                        } else I(N.default.Messages.INVITE_MODAL_ERROR_DEFAULT);
                      });
                  }
                },
                e => {
                  S(!1);
                  let t = new f.V6OrEarlierAPIError(e),
                    s = (0, h.getInviteError)(t.code);
                  I(s);
                }
              );
            },
            [o, S, I, s]
          ),
          O = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                className: _.header,
                direction: E.default.Direction.VERTICAL,
                separator: !1,
                children: [
                  (0, n.jsx)(p.default, {
                    className: _.title,
                    size: p.default.Sizes.SIZE_24,
                    color: p.default.Colors.HEADER_PRIMARY,
                    children: N.default.Messages.JOIN_SERVER_TITLE,
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: N.default.Messages.JOIN_SERVER_DESCRIPTION_NUF,
                  }),
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                children: [
                  (0, n.jsx)("form", {
                    onSubmit: C,
                    className: _.inputForm,
                    children: (0, n.jsx)(c.FormItem, {
                      title: N.default.Messages.FORM_LABEL_INVITE_LINK,
                      error: x,
                      titleClassName: i(_.formTitle, { [_.error]: null != x }),
                      children: (0, n.jsx)(c.TextInput, {
                        value: o,
                        onChange: A,
                        className: _.input,
                        inputClassName: _.inputInner,
                        inputRef: g,
                      }),
                    }),
                  }),
                  (0, n.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: N.default.Messages.JOIN_SERVER_EXAMPLES.format({
                      examples: ""
                        .concat(T)
                        .concat("cool-people", ", ")
                        .concat("hTKzmak"),
                    }),
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: _.connectCTA,
                    children: N.default.Messages.JOIN_GUILD_CONNECT.format({
                      onClick: () => {
                        a(), d.default.open(m.UserSettingsSections.CONNECTIONS);
                      },
                    }),
                  }),
                ],
              }),
            ],
          }),
          b = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                onClick: C,
                disabled: 0 === o.length,
                submitting: v,
                children: N.default.Messages.JOIN,
              }),
              (0, n.jsx)(c.Button, {
                className: _.skipButton,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.MIN,
                onClick: t,
                children: N.default.Messages.BACK,
              }),
            ],
          });
        return { content: O, footer: b };
      }
    },
    439431: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return G;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("414456"),
        r = s.n(n),
        o = s("759843"),
        i = s("446674"),
        c = s("77078"),
        u = s("731898"),
        d = s("818351"),
        f = s("21214"),
        E = s("622210"),
        p = s("72405"),
        h = s("697218"),
        m = s("145131"),
        N = s("476765"),
        _ = s("599110"),
        T = s("439932"),
        A = s("527441"),
        v = s("207354"),
        S = s("377052"),
        x = s("344491"),
        I = s("134760"),
        g = s("56235"),
        C = s("218971"),
        O = s("49111"),
        b = s("47212"),
        U = s("782340"),
        M = s("102166");
      function G(e) {
        let t;
        let s = (0, N.useUID)(),
          { onSlideChange: n, ...G } = e,
          { onClose: R } = G,
          [y, j] = l.useState(!1),
          D = (0, i.useStateFromStores)([h.default], () =>
            h.default.getCurrentUser()
          ),
          F = null != D && null == D.nsfwAllowed,
          [L, k] = l.useState(
            F ? C.NUFSlides.AGE_GATE : C.NUFSlides.CHOOSE_TEMPLATE
          ),
          [P, w] = l.useState(null);
        l.useEffect(() => {
          n(y ? C.NUFSlides.COMPLETE : L);
        }, [n, L, y]);
        let [B, H] = l.useState(null),
          [V, Y] = l.useState(null),
          [z, J] = l.useState(!1),
          W = (0, i.useStateFromStores)(
            [A.default],
            () => A.default.getType() === g.NewUserTypes.INVITE_UNCLAIMED
          ),
          K = l.useCallback(
            e => {
              Y(e),
                k(C.NUFSlides.CREATION_INTENT),
                _.default.track(O.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                  template_name: e.label,
                  template_code: e.code,
                });
            },
            [Y, k]
          ),
          { content: Z, footer: X } = (0, f.useCreationIntentSlide)({
            hasFooter: !1,
            onBack: () => {
              Y(null), k(C.NUFSlides.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: e => {
              J(e), k(C.NUFSlides.CUSTOMIZE_GUILD);
            },
          }),
          { content: q, footer: Q } = (0, E.useCustomizeGuildSlide)({
            guildTemplate: V,
            titleClassName: M.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: e => {
              H(e),
                (null == V ? void 0 : V.id) === b.GuildTemplateId.CREATE
                  ? k(C.NUFSlides.CHANNEL_PROMPT)
                  : j(!0);
            },
            onBack: () => {
              k(C.NUFSlides.CREATION_INTENT);
            },
            isSlideReady: P === C.NUFSlides.CUSTOMIZE_GUILD,
            isCommunity: z,
          }),
          { content: $, footer: ee } = (0, d.useChannelPromptSlide)({
            createdGuildId: B,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
              j(!0);
            },
            isSlideReady: P === C.NUFSlides.CHANNEL_PROMPT,
          }),
          { content: et, footer: es } = (0, x.default)({
            onBack: () => k(C.NUFSlides.CHOOSE_TEMPLATE),
            onComplete: () => {
              R();
            },
            onConnect: R,
            isSlideReady: P === C.NUFSlides.JOIN_GUILD,
          });
        switch (L) {
          case C.NUFSlides.CUSTOMIZE_GUILD:
            t = Q;
            break;
          case C.NUFSlides.CHANNEL_PROMPT:
            t = ee;
            break;
          case C.NUFSlides.JOIN_GUILD:
            t = es;
            break;
          case C.NUFSlides.CREATION_INTENT:
            t = X;
        }
        let { ref: ea, width: el } = (0, u.default)();
        if (y)
          return (0, a.jsx)(c.ModalRoot, {
            ...G,
            size: c.ModalSize.MEDIUM,
            className: r(M.modal, M.completed),
            "aria-labelledby": s,
            children: (0, a.jsx)(S.default, { onComplete: R }),
          });
        let en = { impression_group: o.ImpressionGroups.GUILD_ADD_NUF };
        return (0, a.jsxs)(c.ModalRoot, {
          ...G,
          size: c.ModalSize.MEDIUM,
          className: M.modal,
          "aria-labelledby": s,
          children: [
            (0, a.jsx)("div", {
              className: M.sidebar,
              children: (0, a.jsx)(I.default, { step: L }),
            }),
            (0, a.jsxs)("div", {
              className: r(M.content, (0, T.getThemeClass)(O.ThemeTypes.LIGHT)),
              ref: ea,
              children: [
                (0, a.jsx)("div", {
                  className: M.slidesContainer,
                  children: (0, a.jsxs)(c.Slides, {
                    activeSlide: L,
                    onSlideReady: e => w(e),
                    centered: !1,
                    width: el,
                    children: [
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.AGE_GATE,
                        children: (0, a.jsx)("div", {
                          className: M.container,
                          children: (0, a.jsx)(v.default, {
                            onComplete: () => {
                              W ? R() : k(C.NUFSlides.CHOOSE_TEMPLATE);
                            },
                            onClose: R,
                          }),
                        }),
                      }),
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.CHOOSE_TEMPLATE,
                        impressionName: o.ImpressionNames.GUILD_ADD_LANDING,
                        impressionProperties: en,
                        children: (0, a.jsx)("div", {
                          className: r(M.container, M.shortFooter),
                          children: (0, a.jsx)(p.default, {
                            className: M.templates,
                            onChooseTemplate: K,
                            isNewUser: !0,
                          }),
                        }),
                      }),
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.CREATION_INTENT,
                        impressionName:
                          o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                        impressionProperties: en,
                        children: (0, a.jsx)("div", {
                          className: r(M.container, M.standardFooter),
                          children: Z,
                        }),
                      }),
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.CUSTOMIZE_GUILD,
                        impressionName: o.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                        impressionProperties: en,
                        children: (0, a.jsx)("div", {
                          className: r(M.container, M.standardFooter),
                          children: q,
                        }),
                      }),
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.CHANNEL_PROMPT,
                        impressionName:
                          o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                        impressionProperties: en,
                        children: (0, a.jsx)("div", {
                          className: r(M.container, M.standardFooter),
                          children: $,
                        }),
                      }),
                      (0, a.jsx)(c.Slide, {
                        id: C.NUFSlides.JOIN_GUILD,
                        impressionName: o.ImpressionNames.GUILD_ADD_JOIN,
                        impressionProperties: en,
                        children: (0, a.jsx)("div", {
                          className: r(M.container, M.standardFooter),
                          children: et,
                        }),
                      }),
                    ],
                  }),
                }),
                L !== C.NUFSlides.AGE_GATE
                  ? (0, a.jsx)(c.ModalCloseButton, {
                      onClick: R,
                      className: M.closeButton,
                    })
                  : null,
                L === C.NUFSlides.CHOOSE_TEMPLATE
                  ? (0, a.jsx)(c.ModalFooter, {
                      justify: m.default.Justify.BETWEEN,
                      className: r(M.footer, M.join),
                      children: (0, a.jsx)(c.Anchor, {
                        className: M.joinCTA,
                        onClick: () => {
                          k(C.NUFSlides.JOIN_GUILD);
                        },
                        children: (0, a.jsxs)(c.Text, {
                          variant: "text-sm/medium",
                          className: M.joinCTA,
                          children: [
                            U.default.Messages.NUF_HAVE_AN_INVITE_ALREADY,
                            " ",
                            U.default.Messages.JOIN_SERVER_BUTTON_CTA,
                          ],
                        }),
                      }),
                    })
                  : null,
                null != t
                  ? (0, a.jsx)(c.ModalFooter, {
                      justify: m.default.Justify.BETWEEN,
                      className: M.footer,
                      children: t,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    134760: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("414456"),
        n = s.n(l),
        r = s("218971"),
        o = s("694996");
      function i(e) {
        let { step: t } = e,
          s = t === r.NUFSlides.AGE_GATE,
          l =
            t === r.NUFSlides.CHOOSE_TEMPLATE ||
            t === r.NUFSlides.CREATION_INTENT,
          i = t === r.NUFSlides.CUSTOMIZE_GUILD,
          c = t === r.NUFSlides.CHANNEL_PROMPT || t === r.NUFSlides.JOIN_GUILD,
          u = i || c,
          d = l || u;
        return (0, a.jsxs)("div", {
          className: o.sidebar,
          children: [
            (0, a.jsx)("div", { className: n(o.step1, { [o.show]: s }) }),
            (0, a.jsx)("div", {
              className: n(o.step24Clouds, { [o.show]: d }),
            }),
            (0, a.jsx)("div", { className: n(o.step34Flag, { [o.show]: u }) }),
            (0, a.jsx)("div", { className: n(o.step24Base, { [o.show]: d }) }),
            (0, a.jsx)("div", {
              className: n(o.step24Ground, { [o.show]: d }),
            }),
            (0, a.jsx)("div", { className: n(o.step2Base, { [o.show]: l }) }),
            (0, a.jsx)("div", {
              className: n(o.step2Character, { [o.show]: l }),
            }),
            (0, a.jsx)("div", { className: n(o.step34Base, { [o.show]: u }) }),
            (0, a.jsx)("div", {
              className: n(o.step3Character, { [o.show]: i }),
            }),
            (0, a.jsx)("div", {
              className: n(o.step4Character, { [o.show]: c }),
            }),
            (0, a.jsx)("div", {
              className: n(o.step24Foreground, { [o.show]: d }),
            }),
          ],
        });
      }
    },
    414943: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DEFAULT_SELECT_STYLES: function () {
            return m;
          },
          default: function () {
            return n;
          },
        }),
        s("222007");
      var a,
        l,
        n,
        r,
        o = s("37983"),
        i = s("884691"),
        c = s("414456"),
        u = s.n(c),
        d = s("773392"),
        f = s("77078"),
        E = s("49111"),
        p = s("782340"),
        h = s("852968");
      ((r = l || (l = {})).TOP = "top"), (r.BOTTOM = "bottom");
      let m = {
        container: (e, t) => {
          let { isDisabled: s } = t;
          return {
            ...e,
            cursor: s ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: s, menuIsOpen: a } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: s ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: a ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: s ? "not-allowed" : void 0,
            pointerEvents: s ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: s } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: s ? 0.5 : 1,
          };
        },
        input: e => ({ ...e, color: "var(--interactive-normal)" }),
        menu: e => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: s } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: s ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: e => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: s } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: s ? void 0 : "pointer",
            opacity: s ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: s ? 0.3 : 1,
            },
          };
        },
        menuList: e => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: s, isFocused: a } = t;
          return {
            ...e,
            ...(s
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : a
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: e => ({ ...e, color: "var(--text-muted)" }),
      };
      ((a = class extends i.Component {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: s,
              error: a,
              valueRenderer: l,
              optionRenderer: n,
              multiValueRenderer: r,
              options: i,
              value: c,
              autofocus: E,
              disabled: N,
              clearable: _,
              searchable: T,
              styleOverrides: A,
              isMulti: v,
              placeholder: S,
              filterOption: x,
              closeMenuOnSelect: I = !0,
              ...g
            } = this.props,
            C = { ...g };
          null != E && (C.autoFocus = E),
            null != N && (C.isDisabled = N),
            null != _ && (C.isClearable = _),
            null != T && (C.isSearchable = T);
          let O = { IndicatorSeparator: () => null };
          null != n &&
            (O.Option = e =>
              (0, o.jsx)(d.components.Option, { ...e, children: n(e.data) })),
            null != l &&
              (O.SingleValue = e =>
                (0, o.jsx)(d.components.SingleValue, {
                  ...e,
                  children: l(e.data),
                })),
            null != r && (O.MultiValue = e => r(e.data));
          let b = null != A ? A : m;
          if (v && Array.isArray(c)) {
            let t = {};
            i.forEach(e => {
              t[String(e.value)] = e;
            }),
              (e = c.map(e => t[String(e)]));
          } else e = null != c ? i.find(e => e.value === c) : null;
          return (0, o.jsx)(f.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: u(h.select, t, { [h.error]: null != a }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(d.default, {
                  ...C,
                  className: s,
                  ref: this._selectRef,
                  isMulti: v,
                  components: O,
                  options: i,
                  styles: b,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: I,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : p.default.Messages.SELECT,
                  noOptionsMessage: () => p.default.Messages.NO_RESULTS_FOUND,
                  filterOption: x,
                }),
                null != a
                  ? (0, o.jsx)("div", {
                      className: h.errorMessage,
                      children: a,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._selectRef = i.createRef()),
            (this._containerRef = i.createRef()),
            (this.state = { isFocused: !1, isOpen: !1 }),
            (this.handleFocus = e => {
              var t, s;
              this.setState({ isFocused: !0 }),
                null === (t = (s = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(s, e);
            }),
            (this.handleBlur = e => {
              var t, s;
              this.setState({ isFocused: !1 }),
                null === (t = (s = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(s, e);
            }),
            (this.handleKeyDown = e => {
              e.which === E.KeyboardKeys.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            (this.handleMenuOpen = () => {
              this.setState({ isOpen: !0 });
            }),
            (this.handleMenuClose = () => {
              this.setState({ isOpen: !1 });
            });
        }
      }).MenuPlacements = l),
        (n = a);
    },
  },
]);
//# sourceMappingURL=f8233e8956e485de5463.js.map
