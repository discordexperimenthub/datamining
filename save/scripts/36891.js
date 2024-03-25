(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36891"],
  {
    346577: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bd30e564dd0d308bae97.svg";
    },
    731109: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
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
      var a = n("872717"),
        r = n("913144"),
        l = n("395724"),
        o = n("599110"),
        s = n("586391"),
        i = n("49111");
      function u(e, t) {
        return (
          (0, l.default)(e, t),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: s.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
          }),
          a.HTTP.patch({
            url: i.Endpoints.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
          }).then(e => {
            let n = e.body;
            r.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
              o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                source: t,
                action: s.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
              });
          })
        );
      }
      function c(e) {
        r.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              s.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        r.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action: s.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    208266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        r = n("884691"),
        l = n("414456"),
        o = n.n(l),
        s = n("866227"),
        i = n.n(s),
        u = n("77078"),
        c = n("414943"),
        d = n("782340"),
        f = n("283764");
      let p = i().localeData().months(),
        A = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        E = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: p[e],
        })),
        _ = /[a-zA-Z0-9]/;
      function m(e) {
        let { options: t, selectOption: n, children: l } = e,
          [o, s] = r.useState("");
        r.useEffect(() => {
          if ("" !== o) {
            let e = setTimeout(() => s(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [o, s]);
        let i = r.useCallback(
          e => {
            if (_.test(e.key)) {
              let a = "".concat(o).concat(e.key.toLowerCase()),
                r = t.find(e => e.label.toLowerCase().startsWith(a));
              null != r && n(r.value), s(a);
            }
          },
          [n, s, o, t]
        );
        return (0, a.jsx)("div", { onKeyDown: i, children: l });
      }
      function h() {
        let e = i().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          a = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === a) && ((t = 0), (n = 1), (a = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: a, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let g = r.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: l,
            onChange: s,
            onPopulated: p,
            error: _,
            autoFocus: g,
            required: v,
          } = e,
          {
            day: T,
            setDay: y,
            month: S,
            setMonth: G,
            year: b,
            setYear: N,
          } = (function (e) {
            let t = null,
              n = null,
              a = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (a = e.year()));
            let [l, o] = r.useState(t),
              [s, i] = r.useState(n),
              [u, c] = r.useState(a);
            return {
              day: l,
              setDay: o,
              month: s,
              setMonth: i,
              year: u,
              setYear: c,
            };
          })(n),
          C = r.useMemo(
            () =>
              null != T && null != S && null != b
                ? i("".concat(T, "/").concat(S, "/").concat(b), "DD/MM/YYYY")
                : null,
            [T, S, b]
          );
        r.useEffect(() => {
          s((null == C ? void 0 : C.isValid()) ? C : null);
        }, [C, s]);
        let O = _;
        null != C &&
          !C.isValid() &&
          (O = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let M = (function () {
            let e = new Date().getFullYear(),
              t = r.useRef(
                Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }))
              );
            return (
              r.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [R, x] = r.useState(g ? 0 : -1),
          w = r.useRef(null),
          D = r.useRef(null),
          U = r.useRef(null),
          k = r.useMemo(h, []),
          I = r.useCallback(() => {
            var e, t, n, a;
            switch (null === (e = k[R]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = w.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = D.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (a = U.current) || void 0 === a || a.focus();
            }
          }, [R, w, D, U, k]);
        r.useEffect(() => {
          setTimeout(I, 500);
        }, []),
          r.useEffect(() => {
            if (R >= k.length) {
              null == p || p();
              return;
            }
            I();
          }, [R, I]);
        let F = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = k[e];
          switch (t) {
            case "day":
              F.push({
                key: "day",
                input: (0, a.jsx)(m, {
                  options: A,
                  selectOption: y,
                  children: (0, a.jsx)(c.default, {
                    ref: w,
                    className: f.inputDay,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: A,
                    value: T,
                    onChange: t => {
                      let { value: n } = t;
                      y(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              F.push({
                key: "month",
                input: (0, a.jsx)(m, {
                  options: E,
                  selectOption: G,
                  children: (0, a.jsx)(c.default, {
                    ref: D,
                    className: f.inputMonth,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: E,
                    value: S,
                    onChange: t => {
                      let { value: n } = t;
                      G(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              F.push({
                key: "year",
                input: (0, a.jsx)(m, {
                  options: M,
                  selectOption: N,
                  children: (0, a.jsx)(c.default, {
                    ref: U,
                    className: f.inputYear,
                    "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: c.default.MenuPlacements.TOP,
                    placeholder: (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: M,
                    value: b,
                    onChange: t => {
                      let { value: n } = t;
                      N(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, a.jsxs)("fieldset", {
          className: o(f.container, l),
          children: [
            (0, a.jsx)(u.FormTitle, {
              tag: "legend",
              required: v,
              error: O,
              children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, a.jsx)("div", {
              className: f.inputs,
              children: F.map((e, t) => {
                let { key: n, input: r } = e;
                return (0, a.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[n], children: r },
                  n
                );
              }),
            }),
          ],
        });
      });
      var v = g;
    },
    377531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("37983"),
        r = n("884691"),
        l = n("759843"),
        o = n("446674"),
        s = n("77078"),
        i = n("42963"),
        u = n("697218"),
        c = n("599110"),
        d = n("701909"),
        f = n("731109"),
        p = n("208266"),
        A = n("586391"),
        E = n("49111"),
        _ = n("149806"),
        m = n("782340"),
        h = n("868469");
      function g(e) {
        let { transitionState: t, onClose: n } = e,
          [g, v] = r.useState(null),
          [T, y] = r.useState(null),
          [S, G] = r.useState(!1),
          b = r.createRef(),
          N = (0, o.useStateFromStores)([u.default], () =>
            u.default.getCurrentUser()
          ),
          C = r.createRef();
        r.useEffect(() => {
          i.default.flowStep(_.FlowType.ANY, _.AgeGateSteps.AGE_GATE),
            c.default.track(E.AnalyticEvents.OPEN_MODAL, {
              type: "Claim Age Gate",
            });
        }, []),
          r.useEffect(() => {
            (null == N ? void 0 : N.nsfwAllowed) != null && n();
          }, [N, n]);
        let O = async e => {
            if ((e.preventDefault(), null != g)) {
              G(!0);
              try {
                await f.submitDateOfBirth(
                  g,
                  E.AnalyticsSections.CLAIM_ACCOUNT_MODAL
                );
              } catch (e) {
                if (null != e.body && null != e.body.date_of_birth)
                  i.default.flowStep(
                    _.FlowType.ANY,
                    _.AgeGateSteps.AGE_GATE_UNDERAGE
                  ),
                    f.preventUnderageRegistration(
                      A.AgeGateSource.CLAIM_ACCOUNT
                    ),
                    f.logoutUnderageNewUser(A.AgeGateSource.CLAIM_ACCOUNT),
                    n();
                else {
                  var t;
                  (null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.username) != null
                    ? y(m.default.Messages.USER_SETTINGS_UPDATE_FAILURE)
                    : y(null == e ? void 0 : e.body.message);
                }
              }
              G(!1);
            }
          },
          M = r.useCallback(() => {
            var e;
            null === (e = C.current) || void 0 === e || e.focus();
          }, [C]);
        return (0, a.jsx)(s.ModalRoot, {
          transitionState: t,
          size: s.ModalSize.DYNAMIC,
          "aria-label": m.default.Messages.AGE_GATE_HEADER,
          className: h.modal,
          impression: {
            impressionName: l.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 },
          },
          children: (0, a.jsxs)(s.ModalContent, {
            className: h.content,
            children: [
              (0, a.jsx)("div", { className: h.image }),
              (0, a.jsxs)("form", {
                onSubmit: O,
                children: [
                  (0, a.jsx)(s.Heading, {
                    className: h.title,
                    variant: "heading-xl/semibold",
                    children: m.default.Messages.AGE_GATE_HEADER,
                  }),
                  (0, a.jsx)(s.Text, {
                    color: "header-secondary",
                    className: h.description,
                    variant: "text-md/normal",
                    children: m.default.Messages.AGE_GATE_BODY.format({
                      helpURL: d.default.getArticleURL(
                        E.HelpdeskArticles.AGE_GATE
                      ),
                    }),
                  }),
                  (0, a.jsx)(p.default, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: h.formItem,
                    label: m.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    name: "birthday",
                    onChange: e => v(e),
                    onPopulated: M,
                    error: T,
                    value: g,
                    ref: b,
                  }),
                  (0, a.jsx)(s.Button, {
                    buttonRef: C,
                    type: "submit",
                    size: s.Button.Sizes.LARGE,
                    submitting: S,
                    disabled: null == g,
                    fullWidth: !0,
                    children: m.default.Messages.DONE,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    395724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("866227"),
        r = n.n(a),
        l = n("599110"),
        o = n("49111");
      function s(e, t) {
        l.default.track(o.AnalyticEvents.AGE_GATE_SUBMITTED, {
          dob: 18 > r().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    149806: function (e, t, n) {
      "use strict";
      var a, r, l, o, s, i, u, c, d, f;
      n.r(t),
        n.d(t, {
          FlowType: function () {
            return a;
          },
          AgeGateSteps: function () {
            return r;
          },
          ClaimAccountSteps: function () {
            return l;
          },
          CreateGuildSteps: function () {
            return o;
          },
          RegistrationSteps: function () {
            return s;
          },
        }),
        ((i = a || (a = {})).UNKNOWN = "unknown"),
        (i.ANY = "any"),
        (i.INVITE = "invite"),
        (i.ORGANIC = "organic_registration"),
        (i.ORGANIC_MARKETING = "organic_marketing"),
        (i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (i.CREATE_GUILD = "create_guild"),
        ((u = r || (r = {})).AGE_GATE = "age_gate"),
        (u.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = l || (l = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = o || (o = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((f = s || (s = {})).NUF_STARTED = "nuf_started"),
        (f.AGE_GATE = "age_gate"),
        (f.NUF_COMPLETE = "nuf_complete"),
        (f.HUB_CONNECTION = "hub_connection");
    },
    42963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("308503"),
        r = n("95410"),
        l = n("605250"),
        o = n("599110"),
        s = n("149806"),
        i = n("49111");
      let u = "UserFlowAnalyticsStore_current",
        c = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === s.FlowType.UNKNOWN) return null;
        let t = r.Storage.get("".concat(c, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...a } = t;
        return 1 !== n ? null : a;
      }
      new l.default("UserFlowAnalytics");
      let f = (0, a.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e
              ? e
              : r.Storage.get(u);
          if (null == n) return null;
          let { [n]: a } = t().flows,
            l = null != a ? a : d(n);
          return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
      }));
      function p(e, t) {
        let { [e]: n, ...a } = f.getState().flows,
          r = null != n ? n : d(e);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
          f.setState({
            flows: {
              ...a,
              [e]: {
                type: e,
                lastStep: null,
                lastTimestamp: null,
                currentStep: t,
                currentTimestamp: new Date(),
                skipped: !1,
              },
            },
            currentFlow: e,
          });
      }
      function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = e;
        if (e === s.FlowType.ANY) {
          var r;
          a =
            null !== (r = f.getState().activeFlow()) && void 0 !== r
              ? r
              : s.FlowType.UNKNOWN;
        }
        let { [a]: l, ...o } = f.getState().flows,
          i = null != l ? l : d(a);
        if (null != i && null != i.currentStep)
          i.currentStep !== t &&
            f.setState({
              flows: {
                ...o,
                [a]: {
                  ...i,
                  lastStep: i.currentStep,
                  lastTimestamp: i.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: a,
            });
      }
      f.subscribe(
        e => {
          var t;
          if (
            null != e &&
            (!(function (e) {
              if (e.type === s.FlowType.UNKNOWN) return;
              let t = "".concat(c, "-").concat(e.type);
              e.ended
                ? (r.Storage.remove(t), r.Storage.remove(u))
                : (r.Storage.set("".concat(c, "-").concat(e.type), {
                    ...e,
                    version: 1,
                  }),
                  r.Storage.set(u, e.type));
            })(e),
            o.default.track(
              i.AnalyticEvents.NUO_TRANSITION,
              {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step:
                  "function" !=
                  typeof (null === (t = e.lastTimestamp) || void 0 === t
                    ? void 0
                    : t.getTime)
                    ? 0
                    : (e.currentTimestamp.getTime() -
                        e.lastTimestamp.getTime()) /
                      1e3,
              },
              { flush: !0 }
            ),
            e.ended)
          ) {
            let t = { ...f.getState().flows };
            delete t[e.type], f.setState({ flows: t, currentFlow: null });
          }
        },
        e => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
      );
      function E() {
        return null != f.getState().activeFlow();
      }
      var _ = {
        flowStart: p,
        flowStepOrStart: function (e, t) {
          E() ? A(e, t) : p(e, t);
        },
        flowStep: A,
        hasActiveFlow: E,
      };
    },
    414943: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DEFAULT_SELECT_STYLES: function () {
            return _;
          },
          default: function () {
            return l;
          },
        }),
        n("222007");
      var a,
        r,
        l,
        o,
        s = n("37983"),
        i = n("884691"),
        u = n("414456"),
        c = n.n(u),
        d = n("773392"),
        f = n("77078"),
        p = n("49111"),
        A = n("782340"),
        E = n("852968");
      ((o = r || (r = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let _ = {
        container: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: a } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: a ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: n ? 0.5 : 1,
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
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: e => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: n ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: n ? 0.3 : 1,
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
          let { isSelected: n, isFocused: a } = t;
          return {
            ...e,
            ...(n
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
              selectClassName: n,
              error: a,
              valueRenderer: r,
              optionRenderer: l,
              multiValueRenderer: o,
              options: i,
              value: u,
              autofocus: p,
              disabled: m,
              clearable: h,
              searchable: g,
              styleOverrides: v,
              isMulti: T,
              placeholder: y,
              filterOption: S,
              closeMenuOnSelect: G = !0,
              ...b
            } = this.props,
            N = { ...b };
          null != p && (N.autoFocus = p),
            null != m && (N.isDisabled = m),
            null != h && (N.isClearable = h),
            null != g && (N.isSearchable = g);
          let C = { IndicatorSeparator: () => null };
          null != l &&
            (C.Option = e =>
              (0, s.jsx)(d.components.Option, { ...e, children: l(e.data) })),
            null != r &&
              (C.SingleValue = e =>
                (0, s.jsx)(d.components.SingleValue, {
                  ...e,
                  children: r(e.data),
                })),
            null != o && (C.MultiValue = e => o(e.data));
          let O = null != v ? v : _;
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
              className: c(E.select, t, { [E.error]: null != a }),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(d.default, {
                  ...N,
                  className: n,
                  ref: this._selectRef,
                  isMulti: T,
                  components: C,
                  options: i,
                  styles: O,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: G,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != y ? y : A.default.Messages.SELECT,
                  noOptionsMessage: () => A.default.Messages.NO_RESULTS_FOUND,
                  filterOption: S,
                }),
                null != a
                  ? (0, s.jsx)("div", {
                      className: E.errorMessage,
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
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            (this.handleBlur = e => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            (this.handleKeyDown = e => {
              e.which === p.KeyboardKeys.ESCAPE &&
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
      }).MenuPlacements = r),
        (l = a);
    },
  },
]);
//# sourceMappingURL=4384c4b379fe1ae798aa.js.map
