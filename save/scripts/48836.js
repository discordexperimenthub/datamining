(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48836"],
  {
    986686: function (e, t, a) {
      "use strict";
      e.exports = a.p + "26421523fdfaf469e28e.svg";
    },
    731109: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          submitDateOfBirth: function () {
            return u;
          },
          preventUnderageRegistration: function () {
            return c;
          },
          logoutUnderageNewUser: function () {
            return d;
          },
        });
      var n = a("872717"),
        l = a("913144"),
        r = a("395724"),
        o = a("599110"),
        s = a("586391"),
        i = a("49111");
      function u(e, t) {
        return (
          (0, r.default)(e, t),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: s.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
          }),
          n.HTTP.patch({
            url: i.Endpoints.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
          }).then(e => {
            let a = e.body;
            l.default.dispatch({ type: "CURRENT_USER_UPDATE", user: a }),
              o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                source: t,
                action: s.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
              });
          })
        );
      }
      function c(e) {
        l.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              s.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        l.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action: s.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    208266: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        }),
        a("222007"),
        a("424973");
      var n = a("37983"),
        l = a("884691"),
        r = a("414456"),
        o = a.n(r),
        s = a("866227"),
        i = a.n(s),
        u = a("77078"),
        c = a("414943"),
        d = a("782340"),
        f = a("283764");
      let E = i().localeData().months(),
        A = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        h = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: E[e],
        })),
        p = /[a-zA-Z0-9]/;
      function _(e) {
        let { options: t, selectOption: a, children: r } = e,
          [o, s] = l.useState("");
        l.useEffect(() => {
          if ("" !== o) {
            let e = setTimeout(() => s(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [o, s]);
        let i = l.useCallback(
          e => {
            if (p.test(e.key)) {
              let n = "".concat(o).concat(e.key.toLowerCase()),
                l = t.find(e => e.label.toLowerCase().startsWith(n));
              null != l && a(l.value), s(n);
            }
          },
          [a, s, o, t]
        );
        return (0, n.jsx)("div", { onKeyDown: i, children: r });
      }
      function m() {
        let e = i().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          a = e.indexOf("M"),
          n = e.indexOf("Y");
        return (
          (-1 === t || -1 === a || -1 === n) && ((t = 0), (a = 1), (n = 2)),
          [
            { index: t, type: "day" },
            { index: a, type: "month" },
            { index: n, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let g = l.forwardRef(function (e, t) {
        let {
            value: a,
            wrapperClassName: r,
            onChange: s,
            onPopulated: E,
            error: p,
            autoFocus: g,
            required: v,
          } = e,
          {
            day: T,
            setDay: G,
            month: b,
            setMonth: y,
            year: M,
            setYear: x,
          } = (function (e) {
            let t = null,
              a = null,
              n = null;
            null != e && ((t = e.date()), (a = e.month() + 1), (n = e.year()));
            let [r, o] = l.useState(t),
              [s, i] = l.useState(a),
              [u, c] = l.useState(n);
            return {
              day: r,
              setDay: o,
              month: s,
              setMonth: i,
              year: u,
              setYear: c,
            };
          })(a),
          R = l.useMemo(
            () =>
              null != T && null != b && null != M
                ? i("".concat(T, "/").concat(b, "/").concat(M), "DD/MM/YYYY")
                : null,
            [T, b, M]
          );
        l.useEffect(() => {
          s((null == R ? void 0 : R.isValid()) ? R : null);
        }, [R, s]);
        let C = p;
        null != R &&
          !R.isValid() &&
          (C = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let O = (function () {
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
          [S, N] = l.useState(g ? 0 : -1),
          k = l.useRef(null),
          D = l.useRef(null),
          I = l.useRef(null),
          B = l.useMemo(m, []),
          j = l.useCallback(() => {
            var e, t, a, n;
            switch (null === (e = B[S]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = k.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (a = D.current) || void 0 === a || a.focus();
                break;
              case "year":
                null === (n = I.current) || void 0 === n || n.focus();
            }
          }, [S, k, D, I, B]);
        l.useEffect(() => {
          setTimeout(j, 500);
        }, []),
          l.useEffect(() => {
            if (S >= B.length) {
              null == E || E();
              return;
            }
            j();
          }, [S, j]);
        let F = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = B[e];
          switch (t) {
            case "day":
              F.push({
                key: "day",
                input: (0, n.jsx)(_, {
                  options: A,
                  selectOption: G,
                  children: (0, n.jsx)(c.default, {
                    ref: k,
                    className: f.inputDay,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: A,
                    value: T,
                    onChange: t => {
                      let { value: a } = t;
                      G(a), N(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              F.push({
                key: "month",
                input: (0, n.jsx)(_, {
                  options: h,
                  selectOption: y,
                  children: (0, n.jsx)(c.default, {
                    ref: D,
                    className: f.inputMonth,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: h,
                    value: b,
                    onChange: t => {
                      let { value: a } = t;
                      y(a), N(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              F.push({
                key: "year",
                input: (0, n.jsx)(_, {
                  options: O,
                  selectOption: x,
                  children: (0, n.jsx)(c.default, {
                    ref: I,
                    className: f.inputYear,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: O,
                    value: M,
                    onChange: t => {
                      let { value: a } = t;
                      x(a), N(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, n.jsxs)("fieldset", {
          className: o(f.container, r),
          children: [
            (0, n.jsx)(u.FormTitle, {
              tag: "legend",
              required: v,
              error: C,
              children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, n.jsx)("div", {
              className: f.inputs,
              children: F.map((e, t) => {
                let { key: a, input: l } = e;
                return (0, n.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[a], children: l },
                  a
                );
              }),
            }),
          ],
        });
      });
      var v = g;
    },
    673187: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a("222007");
      var n,
        l,
        r = a("37983"),
        o = a("884691"),
        s = a("627445"),
        i = a.n(s),
        u = a("866227"),
        c = a.n(u),
        d = a("446674"),
        f = a("77078"),
        E = a("851387"),
        A = a("42203"),
        h = a("18494"),
        p = a("697218"),
        _ = a("145131"),
        m = a("476765"),
        g = a("599110"),
        v = a("701909"),
        T = a("731109"),
        G = a("669499"),
        b = a("208266"),
        y = a("586391"),
        M = a("49111"),
        x = a("782340"),
        R = a("249422");
      function C(e) {
        let { transitionState: t, source: n } = e,
          l = (0, d.useStateFromStores)([p.default], () =>
            p.default.getCurrentUser()
          ),
          s = (0, d.useStateFromStores)([h.default, A.default], () =>
            A.default.getChannel(h.default.getChannelId())
          ),
          [u, C] = o.useState(null),
          [O, S] = o.useState(null),
          [N, k] = o.useState(!1),
          [D, I] = o.useState(0),
          B = o.createRef(),
          j = o.createRef(),
          F = (0, m.useUID)(),
          L = null != u ? c().diff(u, "years") : null;
        function U() {
          let e = null == s ? void 0 : s.getGuildId();
          E.default.nsfwReturnToSafety(e), (0, G.closeAgeGateModal)(n);
        }
        async function w() {
          i(null != u, "Cannot submit null birthday.");
          try {
            return S(null), k(!0), await (0, T.submitDateOfBirth)(u, n);
          } catch (t) {
            if (null != t.body && null != t.body.date_of_birth)
              (0, G.openFailureAgeGateModal)(n, t.body.date_of_birth);
            else {
              var e;
              (null == t
                ? void 0
                : null === (e = t.body) || void 0 === e
                  ? void 0
                  : e.username) != null
                ? S(x.default.Messages.USER_SETTINGS_UPDATE_FAILURE)
                : S(null == t ? void 0 : t.body.message),
                k(!1);
            }
          }
        }
        async function Y() {
          if (
            (i(
              null != L,
              "Cannot submit if we haven't been able to calculate age."
            ),
            L < 18)
          ) {
            I(1);
            return;
          }
          await w();
        }
        async function P(e) {
          e.preventDefault(), !N && null != u && (await Y());
        }
        async function H() {
          let e = await w();
          null == e && I(0);
        }
        o.useEffect(() => {
          null != l &&
            null != l.nsfwAllowed &&
            (0, G.openSuccessAgeGateModal)(n);
        }),
          o.useEffect(() => {
            g.default.track(M.AnalyticEvents.AGE_GATE_ACTION, {
              source: n,
              action: y.AgeGateAnalyticAction.AGE_GATE_OPEN,
            });
          }, [n]);
        let z = o.useCallback(
            e => {
              C(e);
            },
            [C]
          ),
          K = o.useCallback(() => {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
          }, [j]);
        return 0 === D
          ? (function () {
              let e = (() => {
                  if (n === y.AgeGateSource.FAMILY_CENTER)
                    return x.default.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                  return x.default.Messages.AGE_GATE_EXISTING_HEADER;
                })(),
                l = (() => {
                  switch (n) {
                    case y.AgeGateSource.FAMILY_CENTER:
                      return x.default.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                    case y.AgeGateSource.DEEP_LINK_PROMPT:
                      return x.default.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                        helpURL: v.default.getArticleURL(
                          M.HelpdeskArticles.AGE_GATE
                        ),
                      });
                    default:
                      return x.default.Messages.AGE_GATE_NSFW_BODY.format({
                        helpURL: v.default.getArticleURL(
                          M.HelpdeskArticles.AGE_GATE
                        ),
                      });
                  }
                })();
              return (0, r.jsxs)(f.ModalRoot, {
                transitionState: t,
                size: f.ModalSize.SMALL,
                "aria-labelledby": F,
                children: [
                  (0, r.jsxs)(f.ModalContent, {
                    children: [
                      (0, r.jsxs)("div", {
                        className: R.container,
                        children: [
                          (0, r.jsx)("img", {
                            alt: "",
                            src: a("986686"),
                            className: R.img,
                          }),
                          (0, r.jsx)(f.Heading, {
                            variant: "heading-xl/semibold",
                            className: R.title,
                            id: F,
                            children: e,
                          }),
                          (0, r.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l,
                          }),
                        ],
                      }),
                      (0, r.jsx)("form", {
                        onSubmit: P,
                        children: (0, r.jsx)(b.default, {
                          label: x.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                          wrapperClassName: R.birthday,
                          name: "date_of_birth",
                          onChange: z,
                          onPopulated: K,
                          error: O,
                          value: u,
                          ref: B,
                          autoFocus: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(f.ModalFooter, {
                    justify: _.default.Justify.BETWEEN,
                    children: [
                      (0, r.jsx)(f.Button, {
                        buttonRef: j,
                        submitting: N,
                        disabled: null == u,
                        size: f.ButtonSizes.SMALL,
                        onClick: Y,
                        children: x.default.Messages.AGE_GATE_SUBMIT,
                      }),
                      (0, r.jsx)(f.Button, {
                        look: f.Button.Looks.LINK,
                        size: f.Button.Sizes.NONE,
                        color: f.Button.Colors.PRIMARY,
                        onClick: U,
                        children: x.default.Messages.AGE_GATE_GO_BACK,
                      }),
                    ],
                  }),
                ],
              });
            })()
          : (0, r.jsxs)(f.ModalRoot, {
              transitionState: f.ModalTransitionState.ENTERED,
              size: f.ModalSize.SMALL,
              "aria-labelledby": F,
              children: [
                (0, r.jsx)(f.ModalContent, {
                  children: (0, r.jsxs)("div", {
                    className: R.confirmContainer,
                    children: [
                      (0, r.jsx)(f.Heading, {
                        variant: "heading-xl/semibold",
                        className: R.confirmTitle,
                        id: F,
                        children:
                          x.default.Messages.AGE_GATE_CONFIRM_HEADER.format({
                            age: L,
                          }),
                      }),
                      (0, r.jsx)(f.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: x.default.Messages.AGE_GATE_NSFW_BODY.format({
                          helpURL: v.default.getArticleURL(
                            M.HelpdeskArticles.AGE_GATE
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(f.ModalFooter, {
                  className: R.confirmFooter,
                  children: [
                    (0, r.jsx)(f.Button, {
                      look: f.Button.Looks.LINK,
                      size: f.Button.Sizes.NONE,
                      color: f.Button.Colors.PRIMARY,
                      onClick: () => I(0),
                      children: x.default.Messages.AGE_GATE_CONFIRM_GO_BACK,
                    }),
                    (0, r.jsx)(f.Button, {
                      color: f.Button.Colors.BRAND,
                      onClick: H,
                      children: x.default.Messages.AGE_GATE_CONFIRM_BUTTON,
                    }),
                  ],
                }),
              ],
            });
      }
      ((l = n || (n = {}))[(l.AGE_GATE_FORM = 0)] = "AGE_GATE_FORM"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
    },
    395724: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var n = a("866227"),
        l = a.n(n),
        r = a("599110"),
        o = a("49111");
      function s(e, t) {
        r.default.track(o.AnalyticEvents.AGE_GATE_SUBMITTED, {
          dob: 18 > l().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    414943: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DEFAULT_SELECT_STYLES: function () {
            return p;
          },
          default: function () {
            return r;
          },
        }),
        a("222007");
      var n,
        l,
        r,
        o,
        s = a("37983"),
        i = a("884691"),
        u = a("414456"),
        c = a.n(u),
        d = a("773392"),
        f = a("77078"),
        E = a("49111"),
        A = a("782340"),
        h = a("852968");
      ((o = l || (l = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let p = {
        container: (e, t) => {
          let { isDisabled: a } = t;
          return {
            ...e,
            cursor: a ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: a, menuIsOpen: n } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: a ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: n ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: a ? "not-allowed" : void 0,
            pointerEvents: a ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: a } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: a ? 0.5 : 1,
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
          let { isDisabled: a } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: a ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: e => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: a } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: a ? void 0 : "pointer",
            opacity: a ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: a ? 0.3 : 1,
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
          let { isSelected: a, isFocused: n } = t;
          return {
            ...e,
            ...(a
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : n
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
      ((n = class extends i.Component {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: a,
              error: n,
              valueRenderer: l,
              optionRenderer: r,
              multiValueRenderer: o,
              options: i,
              value: u,
              autofocus: E,
              disabled: _,
              clearable: m,
              searchable: g,
              styleOverrides: v,
              isMulti: T,
              placeholder: G,
              filterOption: b,
              closeMenuOnSelect: y = !0,
              ...M
            } = this.props,
            x = { ...M };
          null != E && (x.autoFocus = E),
            null != _ && (x.isDisabled = _),
            null != m && (x.isClearable = m),
            null != g && (x.isSearchable = g);
          let R = { IndicatorSeparator: () => null };
          null != r &&
            (R.Option = e =>
              (0, s.jsx)(d.components.Option, { ...e, children: r(e.data) })),
            null != l &&
              (R.SingleValue = e =>
                (0, s.jsx)(d.components.SingleValue, {
                  ...e,
                  children: l(e.data),
                })),
            null != o && (R.MultiValue = e => o(e.data));
          let C = null != v ? v : p;
          if (T && Array.isArray(u)) {
            let t = {};
            i.forEach(e => {
              t[String(e.value)] = e;
            }),
              (e = u.map(e => t[String(e)]));
          } else e = null != u ? i.find(e => e.value === u) : null;
          return (0, s.jsx)(f.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)("div", {
              className: c(h.select, t, { [h.error]: null != n }),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(d.default, {
                  ...x,
                  className: a,
                  ref: this._selectRef,
                  isMulti: T,
                  components: R,
                  options: i,
                  styles: C,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: y,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != G ? G : A.default.Messages.SELECT,
                  noOptionsMessage: () => A.default.Messages.NO_RESULTS_FOUND,
                  filterOption: b,
                }),
                null != n
                  ? (0, s.jsx)("div", {
                      className: h.errorMessage,
                      children: n,
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
              var t, a;
              this.setState({ isFocused: !0 }),
                null === (t = (a = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(a, e);
            }),
            (this.handleBlur = e => {
              var t, a;
              this.setState({ isFocused: !1 }),
                null === (t = (a = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(a, e);
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
        (r = n);
    },
  },
]);
//# sourceMappingURL=b0b5df9c4b315e74c6d2.js.map
