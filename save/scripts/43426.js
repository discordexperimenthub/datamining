(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43426"],
  {
    583227: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s("222007"),
        s("506083");
      var n = s("37983"),
        a = s("884691"),
        l = s("77078"),
        o = s("782340"),
        i = s("495650");
      class r extends a.PureComponent {
        render() {
          let {
              title: e,
              actionText: t,
              children: s,
              transitionState: r,
            } = this.props,
            { error: d, isLoading: u, value: h } = this.state,
            c =
              a.Children.count(s) > 0
                ? (0, n.jsx)(l.Card, {
                    type: l.Card.Types.WARNING,
                    className: i.card,
                    children: (0, n.jsx)(l.Text, {
                      className: i.warning,
                      variant: "text-md/normal",
                      children: s,
                    }),
                  })
                : null;
          return (0, n.jsx)(l.ModalRoot, {
            transitionState: r,
            children: (0, n.jsxs)("form", {
              onSubmit: this.handleSubmit,
              children: [
                (0, n.jsx)(l.ModalHeader, {
                  separator: !1,
                  children: (0, n.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, n.jsxs)(l.ModalContent, {
                  children: [
                    c,
                    (0, n.jsxs)(l.FormItem, {
                      title: o.default.Messages.FORM_LABEL_PASSWORD,
                      className: i.spacing,
                      children: [
                        (0, n.jsx)(l.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: h,
                          onChange: this.handlePasswordChange,
                        }),
                        null != d && "" !== d
                          ? (0, n.jsxs)(l.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              className: i.error,
                              children: [" ", d, " "],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(l.ModalFooter, {
                  children: [
                    (0, n.jsx)(l.Button, {
                      type: "submit",
                      disabled: u || 0 === h.length,
                      children: null != t ? t : o.default.Messages.CONFIRM,
                    }),
                    (0, n.jsx)(l.Button, {
                      onClick: this.handleCancel,
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.PRIMARY,
                      children: o.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { value: "", error: null, isLoading: !1 }),
            (this.handleSubmit = e => {
              e.preventDefault();
              let { value: t } = this.state,
                { handleSubmit: s, onClose: n, onError: a } = this.props;
              this.setState({ isLoading: !0 }),
                s(t)
                  .then(
                    e => n(null != e ? e : void 0),
                    e => {
                      if (null != e.body)
                        null == a || a(e.body),
                          !this.shouldSkipErrorMsgRender(e.body) &&
                            (e.body.password
                              ? this.setState({
                                  error: e.body.password,
                                  isLoading: !1,
                                })
                              : e.body.message &&
                                this.setState({
                                  error: e.body.message,
                                  isLoading: !1,
                                }));
                    }
                  )
                  .finally(() => this.setState({ isLoading: !1 }));
            }),
            (this.shouldSkipErrorMsgRender = e => {
              let { skipErrorMsgAbortCode: t } = this.props;
              return null != t && (null == e ? void 0 : e.code) === t;
            }),
            (this.handleCancel = () => {
              let { onClose: e } = this.props;
              e();
            }),
            (this.handlePasswordChange = e => {
              let { onPasswordChange: t } = this.props;
              null == t || t(e), this.setState({ value: e });
            });
        }
      }
      r.key = () => "password-confirm-modal";
      var d = r;
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
        a = s("37983"),
        l = s("884691"),
        o = s("414456"),
        i = s.n(o),
        r = s("448105"),
        d = s.n(r),
        u = s("917351"),
        h = s.n(u),
        c = s("592861"),
        p = s("77078"),
        f = s("988415"),
        m = s("145131"),
        C = s("782340"),
        g = s("442363"),
        y = s("678016");
      n = class extends l.PureComponent {
        renderItems() {
          let { query: e } = this.state,
            t = c.default.flatMap((e, t) => {
              let { alpha2: s, phoneCountryCodes: n, name: l } = e,
                o = (0, f.getI18NCountryName)(s);
              return n.map(e => ({
                key: "".concat(t, "-").concat(e),
                name: l,
                translatedName: o,
                countryData: { name: l, alpha2: s, code: e },
                children: (0, a.jsxs)(m.default, {
                  className: g.countryItem,
                  justify: m.default.Justify.CENTER,
                  align: m.default.Align.CENTER,
                  children: [
                    (0, a.jsx)(m.default.Child, {
                      className: g.countryName,
                      children: o,
                    }),
                    (0, a.jsx)(m.default.Child, {
                      className: g.countryCode,
                      grow: 0,
                      shrink: 0,
                      children: e,
                    }),
                  ],
                }),
              }));
            }),
            s = h(t)
              .filter(
                t =>
                  0 === e.length ||
                  d(e.toLowerCase(), t.name.toLowerCase()) ||
                  d(e.toLowerCase(), t.translatedName.toLowerCase())
              )
              .map(e =>
                (0, l.createElement)(p.PopoutList.Item, {
                  ...e,
                  key: e.key,
                  onClick: () => this.onClick(e.countryData),
                })
              )
              .value();
          return 0 === s.length
            ? (0, a.jsx)(p.PopoutList.Empty, {
                children: C.default.Messages.NONE,
              })
            : (0, a.jsx)(p.ScrollerAuto, {
                className: g.phoneFieldScroller,
                children: s,
              });
        }
        render() {
          let { className: e } = this.props;
          return (0, a.jsxs)(p.PopoutList, {
            className: i(g.phoneFieldPopout, y.elevationBorderLow, e),
            children: [
              (0, a.jsx)(p.PopoutList.SearchBar, {
                query: this.state.query,
                placeholder: C.default.Messages.SEARCH_COUNTRY,
                onChange: this.onChangeQuery,
                onClear: this.onClearQuery,
                autoComplete: "off",
              }),
              (0, a.jsx)(p.PopoutList.Divider, {}),
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
    601745: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("446674"),
        o = s("583227"),
        i = s("599417"),
        r = s("878720"),
        d = s("330387"),
        u = s("697218"),
        h = s("419522"),
        c = s("892313"),
        p = s("782340"),
        f = a.forwardRef(function (e, t) {
          let {
              onAddedPhone: s,
              onClose: f,
              transitionState: m,
              reason: C,
            } = e,
            g = (0, l.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            y = (0, l.useStateFromStores)([d.default], () =>
              d.default.getAction()
            ),
            [N, x] = a.useState(null),
            [E, S] = a.useState(null),
            [R, v] = a.useState(null),
            [P, j] = a.useState(!1),
            I = a.useCallback(
              async e => {
                j(!0);
                try {
                  c.default.isPhoneReverification(g, y)
                    ? await r.default.beginReverifyPhone(e, C)
                    : await r.default.beginAddPhone(e, C),
                    v(null),
                    x(e);
                } catch (e) {
                  v(new i.default(e));
                }
                j(!1);
              },
              [g, C, y]
            ),
            k = a.useCallback(
              async e => {
                if (null != N && null != g) {
                  j(!0);
                  try {
                    let { token: t } = await r.default.verifyPhone(N, e);
                    v(null), S(t);
                  } catch (e) {
                    v(new i.default(e));
                  }
                  j(!1);
                }
              },
              [g, N]
            ),
            _ = a.useCallback(
              async e => {
                null != E &&
                  (c.default.isPhoneReverification(g, y)
                    ? await r.default.reverifyPhone(E, e, C)
                    : await r.default.addPhone(E, e, C),
                  null == s || s(),
                  f());
              },
              [s, f, E, C, g, y]
            );
          return null != E
            ? (0, n.jsx)(o.default, {
                onClose: f,
                transitionState: m,
                title:
                  p.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
                handleSubmit: _,
              })
            : (0, n.jsx)(h.default, {
                onClose: f,
                transitionState: m,
                error: null == R ? void 0 : R.getAnyErrorMessage(),
                working: P,
                validPhone: null != N,
                onAddPhone: I,
                onVerifyPhone: k,
              });
        });
    },
    794538: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007"),
        s("424973");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        o = s.n(l),
        i = s("145131"),
        r = s("454169");
      class d extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, n.jsx)("input", {
            ref: this.setCodeBlockRef,
            className: o(r.input, e),
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
      d.defaultProps = { autoFocus: !1 };
      class u extends a.PureComponent {
        render() {
          let { className: e, inputClassName: t } = this.props,
            { codes: s } = this.state,
            a = [];
          for (let e = 0; e < s.length; e++)
            e === s.length / 2 &&
              a.push((0, n.jsx)("div", { className: r.spacer }, "spacer")),
              a.push(
                (0, n.jsx)(
                  d,
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
          return (0, n.jsx)(i.default, {
            align: i.default.Align.CENTER,
            justify: i.default.Justify.CENTER,
            className: e,
            children: a,
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
      u.defaultProps = { count: 6 };
      var h = u;
    },
    794851: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        o = s.n(l),
        i = s("592861"),
        r = s("77078"),
        d = s("189613"),
        u = s("145131"),
        h = s("461380"),
        c = s("782340"),
        p = s("91581"),
        f = s("678016"),
        m = s("890957");
      class C extends a.PureComponent {
        render() {
          let { countryCode: e, phone: t, open: s } = this.state,
            { className: a, submitting: l } = this.props,
            [, i] = e.split("+");
          return (0, n.jsxs)(u.default, {
            className: o(p.phoneField, f.elevationLow, a),
            align: u.default.Align.CENTER,
            grow: 0,
            children: [
              (0, n.jsxs)(r.Button, {
                size: r.ButtonSizes.SMALL,
                className: p.countryButton,
                color: r.ButtonColors.PRIMARY,
                innerClassName: p.countryButtonInner,
                onClick: this.handleTogglePopout,
                children: [
                  (0, n.jsxs)(u.default, {
                    className: o(p.countryCodeContainer, m.marginReset),
                    justify: u.default.Justify.CENTER,
                    children: [
                      (0, n.jsx)("div", {
                        className: p.plusSign,
                        children: "+",
                      }),
                      (0, n.jsx)("div", {
                        className: p.countryCode,
                        children: i,
                      }),
                    ],
                  }),
                  (0, n.jsx)(h.default, {
                    foreground: p.phoneFieldExpand,
                    expanded: s,
                    width: 16,
                    height: 16,
                  }),
                ],
              }),
              (0, n.jsx)("input", {
                "aria-label": c.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                className: p.inputField,
                value: t,
                onChange: this.handleChange,
                onKeyPress: this.handleKeyPress,
                autoFocus: !0,
              }),
              (0, n.jsx)(r.Button, {
                className: p.sendButton,
                size: r.ButtonSizes.SMALL,
                submitting: l,
                onClick: this.handleSubmit,
                children: c.default.Messages.SEND,
              }),
              s ? (0, n.jsx)(d.default, { onClick: this.handleClick }) : null,
            ],
          });
        }
        closePopout() {
          this.state.open && this.setState({ open: !1 });
        }
        constructor(e) {
          super(e),
            (this.handleChange = e => {
              this.closePopout(),
                this.setState({ phone: e.currentTarget.value });
            }),
            (this.handleKeyPress = e => {
              this.closePopout(),
                13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            (this.handleSubmit = () => {
              let { onSubmit: e, submitting: t } = this.props,
                { countryCode: s, phone: n } = this.state;
              !t && (null == e || e("".concat(s).concat(n)));
            }),
            (this.handleTogglePopout = () => {
              this.setState({ open: !this.state.open });
            }),
            (this.handleClick = e => {
              let [t, s] = e.code.split(" ");
              this.setState({
                open: !1,
                countryCode: t,
                phone: null != s ? s : "",
              });
            });
          let t = i.default.find(e => "United States" === e.name),
            [s, n] = t.phoneCountryCode.split(" ");
          this.state = { countryCode: s, phone: null != n ? n : "", open: !1 };
        }
      }
      var g = C;
    },
    419522: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        l = s("414456"),
        o = s.n(l),
        i = s("748820"),
        r = s("759843"),
        d = s("77078"),
        u = s("794538"),
        h = s("145131"),
        c = s("794851"),
        p = s("782340"),
        f = s("51237"),
        m = s("125047"),
        C = s("890957");
      class g extends a.PureComponent {
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            s.el("432201").then(s.t.bind(s, "432201", 19)),
            s.el("865981").then(s.t.bind(s, "865981", 23)),
          ]);
          this._animItem = t.loadAnimation({
            container: this._lottieRef,
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            animationData: e,
          });
        }
        componentWillUnmount() {
          null != this._animItem &&
            (this._animItem.destroy(), (this._animItem = void 0));
        }
        render() {
          let e, t, s;
          let {
            error: a,
            working: l,
            transitionState: i,
            validPhone: g,
          } = this.props;
          return (
            (e =
              null != a && "" !== a
                ? (0, n.jsx)("div", {
                    className: o(f.description, f.error, C.marginBottom20),
                    children: a,
                  })
                : g
                  ? (0, n.jsx)("div", {
                      className: o(f.description, C.marginBottom20),
                      children:
                        p.default.Messages.VERIFICATION_PHONE_DESCRIPTION,
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: o(f.description, C.marginBottom20),
                          children: p.default.Messages.ENTER_PHONE_DESCRIPTION,
                        }),
                        (0, n.jsx)("div", {
                          className: o(f.description, C.marginBottom20),
                          children:
                            p.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format(),
                        }),
                      ],
                    })),
            (t = g
              ? (0, n.jsxs)(h.default, {
                  className: f.field,
                  direction: h.default.Direction.VERTICAL,
                  align: h.default.Align.CENTER,
                  children: [
                    (0, n.jsx)(u.default, { onSubmit: this.handleVerifyPhone }),
                    (0, n.jsx)(d.Button, {
                      className: C.marginTop8,
                      size: d.ButtonSizes.SMALL,
                      look: d.ButtonLooks.LINK,
                      color: d.ButtonColors.PRIMARY,
                      onClick: this.handleResendCode,
                      children: p.default.Messages.RESEND_CODE,
                    }),
                  ],
                })
              : (0, n.jsx)(c.default, {
                  className: f.field,
                  onSubmit: this.handleAddPhone,
                  submitting: l,
                })),
            (s = g
              ? p.default.Messages.VERIFICATION_PHONE_TITLE
              : p.default.Messages.ENTER_PHONE_TITLE),
            (0, n.jsxs)(d.ModalRoot, {
              impression: {
                impressionName: r.ImpressionNames.USER_VERIFY_PHONE,
              },
              transitionState: i,
              className: o(
                f.phoneVerificationModal,
                m.vertical,
                m.alignCenter,
                m.justifyCenter,
                C.marginTop60
              ),
              "aria-labelledby": this.headerId,
              children: [
                (0, n.jsx)("div", {
                  className: f.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, n.jsx)("div", {
                  className: o(f.title, C.marginBottom8),
                  id: this.headerId,
                  children: s,
                }),
                e,
                t,
              ],
            })
          );
        }
        constructor(e) {
          super(e),
            (this._animItem = null),
            (this.headerId = (0, i.v4)()),
            (this.setLottieRef = e => {
              this._lottieRef = e;
            }),
            (this.handleAddPhone = e => {
              this.state.animated || null == this._animItem
                ? this.setState({ phone: e })
                : (this._animItem.play(),
                  this.setState({ animated: !0, phone: e }));
              let { onAddPhone: t } = this.props;
              null == t || t(e);
            }),
            (this.handleVerifyPhone = e => {
              let { onVerifyPhone: t } = this.props;
              null == t || t(e);
            }),
            (this.handleResendCode = () => {
              let { onAddPhone: e } = this.props;
              null == e || e(this.state.phone);
            }),
            (this.state = { animated: !1, phone: "" });
        }
      }
      var y = g;
    },
  },
]);
//# sourceMappingURL=9e4e3cc7e208c663685b.js.map
