(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46364"],
  {
    21572: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var o = s("77078"),
        a = s("794538"),
        l = s("145131"),
        r = s("124969"),
        i = s("782340"),
        u = s("619667"),
        c = s("890957");
      function d(e) {
        let { title: t, subtitle: s, error: d, onSubmit: h, onCancel: C } = e;
        return (0, n.jsxs)(l.default, {
          direction: l.default.Direction.VERTICAL,
          children: [
            (0, n.jsx)(r.Title, { className: c.marginBottom8, children: t }),
            (0, n.jsx)(r.SubTitle, { className: u.subTitle, children: s }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(a.default, {
                  inputClassName: u.codeInput,
                  onSubmit: h,
                }),
                null != d
                  ? (0, n.jsx)(o.Text, {
                      className: u.error,
                      variant: "text-sm/normal",
                      children: d,
                    })
                  : null,
              ],
            }),
            null != C &&
              (0, n.jsx)(o.Button, {
                className: u.button,
                onClick: C,
                color: o.Button.Colors.PRIMARY,
                children: i.default.Messages.CANCEL,
              }),
          ],
        });
      }
    },
    851460: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MultiAccountActionType: function () {
            return n;
          },
          default: function () {
            return I;
          },
        }),
        s("506083");
      var n,
        o,
        a = s("37983"),
        l = s("884691"),
        r = s("414456"),
        i = s.n(r),
        u = s("446674"),
        c = s("77078"),
        d = s("437822"),
        h = s("272030"),
        C = s("766274"),
        f = s("271938"),
        m = s("102985"),
        p = s("697218"),
        x = s("433487"),
        N = s("599110"),
        v = s("158998"),
        A = s("694787"),
        g = s("770032"),
        y = s("927101"),
        j = s("49111"),
        T = s("782340"),
        S = s("279983");
      function E(e) {
        let { actionText: t, user: s, onAction: n } = e,
          {
            currentUser: o,
            hidePrivateData: l,
            isAuthenticated: r,
          } = (0, u.useStateFromStoresObject)(
            [p.default, m.default, f.default],
            () => ({
              currentUser: p.default.getCurrentUser(),
              hidePrivateData: m.default.hidePersonalInformation,
              isAuthenticated: f.default.isAuthenticated(),
            })
          ),
          y = new C.default(s),
          E = r && (null == o ? void 0 : o.id) === y.id,
          I = s.tokenStatus === g.MultiAccountTokenStatus.INVALID,
          M = l || y.isPomelo() ? null : "#".concat(y.discriminator),
          _ = null;
        return (
          E
            ? (_ = (0, a.jsx)(c.Text, {
                variant: "text-sm/semibold",
                className: S.hintText,
                color: "text-positive",
                children: T.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT,
              }))
            : I &&
              (_ = (0, a.jsx)(c.Text, {
                variant: "text-sm/semibold",
                className: S.hintText,
                color: "text-danger",
                children: T.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN,
              })),
          (0, a.jsx)("div", {
            className: S.accountCard,
            children: (0, a.jsxs)("div", {
              className: S.userDetails,
              children: [
                (0, a.jsx)(c.Avatar, {
                  src: y.getAvatarURL(void 0, 40),
                  size: c.AvatarSizes.SIZE_40,
                  "aria-label": s.username,
                }),
                (0, a.jsxs)("div", {
                  className: i(S.usernameSection, {
                    [S.hasActionMaxWidth]: !E,
                  }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: S.username,
                      children: [
                        (0, a.jsx)(c.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          className: S.textOverflow,
                          children: v.default.getUserTag(y, {
                            mode: "username",
                            identifiable: l ? "never" : "always",
                          }),
                        }),
                        (0, a.jsx)(c.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: M,
                        }),
                      ],
                    }),
                    _,
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: S.userActions,
                  children: [
                    !E &&
                      (0, a.jsx)(c.Button, {
                        onClick: function () {
                          if (I) {
                            n(0, s.id);
                            return;
                          }
                          N.default.track(
                            j.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT,
                            {
                              location: {
                                section:
                                  j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL,
                              },
                            }
                          ),
                            A.switchAccount(s.id),
                            n(1, s.id);
                        },
                        color: c.Button.Colors.PRIMARY,
                        children: I
                          ? T.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN
                          : t,
                      }),
                    (0, a.jsx)(c.Button, {
                      className: S.userActionMenu,
                      onClick: function (e) {
                        (0, h.openContextMenu)(e, e => {
                          let { onSelect: t } = e;
                          return (0, a.jsx)(c.Menu, {
                            "aria-label":
                              T.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                            navId: "manage-multi-account",
                            onClose: h.closeContextMenu,
                            onSelect: t,
                            children: (0, a.jsx)(c.MenuItem, {
                              id: "remove-account",
                              label:
                                T.default.Messages
                                  .SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                              action: () => {
                                !(function () {
                                  d.default.logout(null, s.id).finally(() => {
                                    A.removeAccount(s.id);
                                  });
                                  let e = {};
                                  null != o
                                    ? (e.section =
                                        j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL)
                                    : (e.page = j.PageAnalyticsLocations.LOGIN),
                                    N.default.track(
                                      j.AnalyticEvents
                                        .MULTI_ACCOUNT_ACCOUNT_REMOVE,
                                      { location: e }
                                    ),
                                    n(2, s.id);
                                })(),
                                  null != t && t();
                              },
                              color: "danger",
                            }),
                          });
                        });
                      },
                      size: c.Button.Sizes.ICON,
                      look: c.Button.Looks.BLANK,
                      color: c.Button.Colors.WHITE,
                      "aria-label": T.default.Messages.MORE_OPTIONS,
                      children: (0, a.jsx)(x.default, {
                        className: S.overflowMenuIcon,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function I(e) {
        let { actionText: t, onAction: s } = e,
          { isLoading: n, multiAccountUsers: o } = (0,
          y.useMultiAccountUsers)();
        return (0, a.jsx)("div", {
          className: S.list,
          children: n
            ? (0, a.jsx)(c.Spinner, {})
            : o.map((e, n) =>
                (0, a.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      (0, a.jsx)(
                        E,
                        { user: e, actionText: t, onAction: s },
                        e.id
                      ),
                      o.length - 1 !== n &&
                        (0, a.jsx)("div", {
                          role: "separator",
                          className: S.separator,
                        }),
                    ],
                  },
                  e.id
                )
              ),
        });
      }
      ((o = n || (n = {}))[(o.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (o[(o.SWITCHED = 1)] = "SWITCHED"),
        (o[(o.REMOVED = 2)] = "REMOVED");
    },
    345327: function (e, t, s) {
      "use strict";
      var n, o;
      s.r(t),
        s.d(t, {
          PhoneOrEmailSelectorForceMode: function () {
            return n;
          },
          shouldShowCountryCodeSelector: function () {
            return r;
          },
        }),
        ((o = n || (n = {})).PHONE = "phone"),
        (o.EMAIL = "email");
      let a = /^[-() \d]+$/,
        l = e => e.startsWith("+");
      function r(e, t) {
        return "phone" === e
          ? !l(t)
          : "email" !== e && !(t.length < 3) && a.test(t);
      }
    },
    467413: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("222007");
      var n = s("37983"),
        o = s("884691"),
        a = s("414456"),
        l = s.n(a),
        r = s("907002"),
        i = s("446674"),
        u = s("77078"),
        c = s("206230"),
        d = s("878720"),
        h = s("189613"),
        C = s("765702");
      function f(e) {
        let { show: t, alpha2: s, countryCode: a } = e,
          f = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          m = o.useRef(null),
          [p, x] = o.useState(0),
          [N, v] = o.useState(!1);
        o.useEffect(() => {
          function e() {
            var e, s;
            x(
              t &&
                null !==
                  (s =
                    null === (e = m.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect().width) &&
                void 0 !== s
                ? s
                : 0
            );
          }
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [t, s, a]);
        let A = (0, r.useSpring)({
            width: "".concat(p, "px"),
            immediate: f,
            onStart: () => {
              v(!0);
            },
            onRest: () => {
              v(!1);
            },
          }),
          g = e => {
            d.default.setCountryCode(e);
          };
        return (0, n.jsx)(u.Popout, {
          position: "top",
          renderPopout: e =>
            (0, n.jsx)(h.default, {
              className: C.popout,
              onClick: t => {
                g(t), e.closePopout();
              },
            }),
          children: e =>
            (0, n.jsx)("div", {
              className: l(C.outerContainer, { [C.hidden]: !(t || N) }),
              children: (0, n.jsx)(r.animated.div, {
                className: C.container,
                style: A,
                children: (0, n.jsxs)("div", {
                  className: C.innerContainer,
                  ref: m,
                  children: [
                    (0, n.jsxs)(u.Clickable, {
                      ...e,
                      className: C.countryCode,
                      children: [s, " ", a],
                    }),
                    (0, n.jsx)("div", { className: C.separator }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    189613: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("881410");
      var n,
        o = s("37983"),
        a = s("884691"),
        l = s("414456"),
        r = s.n(l),
        i = s("448105"),
        u = s.n(i),
        c = s("917351"),
        d = s.n(c),
        h = s("592861"),
        C = s("77078"),
        f = s("988415"),
        m = s("145131"),
        p = s("782340"),
        x = s("442363"),
        N = s("678016");
      n = class extends a.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = h.default.flatMap((e, t) => {
              let { alpha2: s, phoneCountryCodes: n, name: a } = e,
                l = (0, f.getI18NCountryName)(s);
              return n.map(e => ({
                key: "".concat(t, "-").concat(e),
                name: a,
                translatedName: l,
                countryData: { name: a, alpha2: s, code: e },
                children: (0, o.jsxs)(m.default, {
                  className: x.countryItem,
                  justify: m.default.Justify.CENTER,
                  align: m.default.Align.CENTER,
                  children: [
                    (0, o.jsx)(m.default.Child, {
                      className: x.countryName,
                      children: l,
                    }),
                    (0, o.jsx)(m.default.Child, {
                      className: x.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            s = d(t)
              .filter(
                t =>
                  0 === e.length ||
                  u(e.toLowerCase(), t.name.toLowerCase()) ||
                  u(e.toLowerCase(), t.translatedName.toLowerCase())
              )
              .map(e =>
                (0, a.createElement)(C.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                })
              )
              .value();
          return 0 === s.length
            ? (0, o.jsx)(C.PopoutList.Empty, {
                children: p.default.Messages.NONE,
              })
            : (0, o.jsx)(C.ScrollerAuto, {
                className: x.phoneFieldScroller,
                children: s,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, o.jsxs)(C.PopoutList, {
            className: r(x.phoneFieldPopout, N.elevationBorderLow, e),
            children: [
              (0, o.jsx)(C.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: p.default.Messages.SEARCH_COUNTRY,
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, o.jsx)(C.PopoutList.Divider, {}),
              this.renderItems(),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.onChangeQuery = e => {
              this.setState({ query: e });
            }),
            (this.onClearQuery = () => {
              this.setState({ query: "" });
            }),
            (this.onClick = e => {
              var t, s;
              null === (t = (s = this.props).onClick) ||
                void 0 === t ||
                t.call(s, e);
            }),
            (this.state = { query: "" });
        }
      };
    },
    589252: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        }),
        s("222007");
      var n = s("37983"),
        o = s("884691"),
        a = s("414456"),
        l = s.n(a),
        r = s("77078"),
        i = s("476765"),
        u = s("345327"),
        c = s("467413"),
        d = s("494823"),
        h = s("182893");
      function C(e) {
        let {
            alpha2: t,
            countryCode: s,
            forceMode: a,
            label: C,
            error: f,
            className: m,
            required: p,
            value: x,
            setRef: N,
            placeholder: v,
            autoFocus: A,
            maxLength: g,
            spellCheck: y,
            autoComplete: j,
            autoCapitalize: T,
            autoCorrect: S,
            onChange: E,
            inputClassName: I,
          } = e,
          M = (0, i.useUID)(),
          [_, O] = o.useState(!1),
          k = (0, u.shouldShowCountryCodeSelector)(a, x);
        return (0, n.jsx)(r.FormItem, {
          title: C,
          error: f,
          className: m,
          required: p,
          tag: "label",
          htmlFor: M,
          children: (0, n.jsxs)("div", {
            className: l(h.input, d.input, I, {
              [h.error]: null != f,
              [h.focused]: _,
            }),
            children: [
              (0, n.jsx)(c.default, { show: k, alpha2: t, countryCode: s }),
              (0, n.jsx)(r.TextInput, {
                id: M,
                name: "email",
                type:
                  a === u.PhoneOrEmailSelectorForceMode.EMAIL
                    ? "email"
                    : "text",
                value: x,
                inputRef: N,
                placeholder: v,
                "aria-label": C,
                required: p,
                onChange: function (e) {
                  let t = (0, u.shouldShowCountryCodeSelector)(a, e) ? s : "";
                  E(e, t);
                },
                autoComplete: j,
                autoCapitalize: T,
                autoCorrect: S,
                autoFocus: A,
                maxLength: g,
                spellCheck: y,
                className: d.inputWrapper,
                inputClassName: d.inputField,
                onFocus: () => O(!0),
                onBlur: () => O(!1),
              }),
            ],
          }),
        });
      }
    },
    794538: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s("222007"),
        s("424973");
      var n = s("37983"),
        o = s("884691"),
        a = s("414456"),
        l = s.n(a),
        r = s("145131"),
        i = s("454169");
      class u extends o.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, n.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: l(i.input, e),
            maxLength: 1,
            value: null != this.props.code ? this.props.code : void 0,
            autoFocus: this.props.autoFocus,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
          });
        }
        focus() {
          var e;
          null === (e = this._codeBlockRef) || void 0 === e || e.focus();
        }
        blur() {
          var e;
          null === (e = this._codeBlockRef) || void 0 === e || e.blur();
        }
        constructor(...e) {
          super(...e),
            (this.setCodeBlockRef = e => {
              this._codeBlockRef = e;
            }),
            (this.handleKeyDown = e => {
              let t = 8 === e.which || 37 === e.which || 39 === e.which,
                s =
                  (e.which >= 48 && e.which <= 57) ||
                  (e.keyCode >= 96 && e.keyCode <= 105);
              !t && !s && e.preventDefault();
              let { onKeyDown: n } = this.props;
              null == n || n(e);
            }),
            (this.handleChange = e => {
              let { onChange: t } = this.props;
              null == t || t(e.currentTarget.value);
            });
        }
      }
      u.defaultProps = { autoFocus: !1 };
      class c extends o.PureComponent {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            o = [];
          for (let e = 0; e < s.length; e++)
            e === s.length / 2 &&
              o.push((0, n.jsx)("div", { className: i.spacer }, "spacer")),
              o.push(
                (0, n.jsx)(
                  u,
                  {
                    ref: t => this.setCodeBlockRef(e, t),
                    code: s[e],
                    autoFocus: 0 === e,
                    onChange: t => this.handleChange(e, t),
                    onKeyDown: t => this.handleKeyDown(e, t),
                    className: t,
                  },
                  e
                )
              );
          return (0, n.jsx)(r.default, {
            align: r.default.Align.CENTER,
            justify: r.default.Justify.CENTER,
            className: e,
            children: o,
          });
        }
        setCodeBlockRef(e, t) {
          this._codeBlockRefs[e] = t;
        }
        handleChange(e, t) {
          this.state.codes[e] = t;
          let s = this.getCodeOrFirstEmptyIndex();
          if ("string" == typeof s) this.submit(s);
          else {
            let e = this._codeBlockRefs[s];
            null == e || e.focus();
          }
        }
        handleKeyDown(e, t) {
          let { codes: s } = this.state;
          if (8 === t.which && e > 0 && (null == s[e] || 0 === s[e].length)) {
            let t = e - 1;
            s[t] = "";
            let n = this._codeBlockRefs[t];
            null == n || n.focus();
          }
        }
        getCodeOrFirstEmptyIndex() {
          let { codes: e } = this.state,
            t = "";
          for (let s = 0; s < e.length; s++) {
            if (isNaN(parseInt(e[s]))) return s;
            t += e[s];
          }
          return t;
        }
        submit(e) {
          let { onSubmit: t } = this.props;
          null == t || t(e);
        }
        constructor(e) {
          super(e),
            (this._codeBlockRefs = Array(this.props.count)),
            (this.state = { codes: Array(e.count) });
        }
      }
      c.defaultProps = { count: 6 };
      var d = c;
    },
  },
]);
//# sourceMappingURL=46364.f3b81ab59beb0a0faabd.js.map
