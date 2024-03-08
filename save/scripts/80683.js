(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80683"],
  {
    245288: function (e, t, s) {
      "use strict";
      e.exports = s.p + "41d28dc5d2c29dc4b122.svg";
    },
    314837: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c54752c825291a698843.svg";
    },
    152434: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return _;
          },
        }),
        s("781738");
      var a = s("37983"),
        r = s("884691"),
        n = s("414456"),
        o = s.n(n),
        l = s("730290"),
        i = s("394846"),
        d = s("446674"),
        u = s("913144"),
        h = s("437822"),
        c = s("457108"),
        f = s("724038"),
        p = s("24287"),
        g = s("970366"),
        m = s("271938"),
        S = s("124969"),
        T = s("659500"),
        C = s("49111"),
        A = s("782340"),
        E = s("890957");
      d.default.initialize();
      class N extends r.PureComponent {
        componentDidMount() {
          (0, g.trackAppUIViewed)("reset_password");
        }
        renderPasswordReset() {
          let { password: e, error: t, hasCancel: r } = this.state,
            n = this.isSubmitting(),
            o = null != t ? t : this.renderError("password");
          return (0, a.jsxs)(S.default, {
            onSubmit: this.handleSubmit,
            tag: "form",
            children: [
              (0, a.jsx)("img", {
                alt: "",
                src: null == o ? s("245288") : s("314837"),
                className: E.marginBottom20,
              }),
              (0, a.jsx)(S.Title, {
                children: A.default.Messages.RESET_PASSWORD_TITLE,
              }),
              (0, a.jsxs)(S.Block, {
                className: E.marginTop20,
                children: [
                  (0, a.jsx)(S.Input, {
                    label: A.default.Messages.FORM_LABEL_NEW_PASSWORD,
                    className: E.marginBottom20,
                    name: "password",
                    value: e,
                    onChange: e => this.setState({ password: e }),
                    error: o,
                    type: "password",
                  }),
                  (0, a.jsx)(S.Button, {
                    type: "submit",
                    submitting: n,
                    children: A.default.Messages.CHANGE_PASSWORD,
                  }),
                  r
                    ? (0, a.jsx)(S.Button, {
                        className: E.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: n,
                        color: S.Button.Colors.PRIMARY,
                        children: A.default.Messages.CANCEL,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, a.jsx)(S.default, {
            style: { padding: 0 },
            children: (0, a.jsx)(p.MFASlides, {
              mfaFinish: e => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
              },
              request: e,
              onEarlyClose: () => {
                u.default.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderSucceeded() {
          return (0, a.jsxs)(S.default, {
            children: [
              (0, a.jsx)("img", {
                alt: "",
                src: s("245288"),
                className: o(E.marginBottom20, i.isMobile ? E.marginTop20 : ""),
              }),
              (0, a.jsx)(S.Title, {
                className: E.marginBottom40,
                children: A.default.Messages.RESET_PASSWORD_SUCCESS_TITLE,
              }),
              (0, a.jsx)(S.Button, {
                onClick: this.handleOpenApp,
                children: A.default.Messages.VERIFICATION_OPEN_DISCORD,
              }),
            ],
          });
        }
        render() {
          return this.state.success
            ? this.renderSucceeded()
            : null != this.props.mfaTicket && "" !== this.props.mfaTicket
              ? this.renderMFA()
              : this.renderPasswordReset();
        }
        constructor(e) {
          var t;
          super(e),
            (this.handleSubmit = async e => {
              let {
                  location: t,
                  onLoginSuccess: s,
                  source: a,
                  resetToken: r,
                } = this.props,
                { password: n, error: o } = this.state;
              if ((null != e && e.preventDefault(), 0 === n.length)) {
                this.setState({ error: A.default.Messages.PASSWORD_REQUIRED }),
                  T.ComponentDispatch.dispatch(
                    C.ComponentActions.WAVE_EMPHASIZE
                  );
                return;
              }
              null != o && this.setState({ error: null });
              let l = r;
              if ((null != t && (l = (0, c.default)(t)), null != l)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: o,
                    token: i,
                    totp: d,
                    backup: c,
                  } = await h.default.resetPassword(l, n, a);
                  e === h.PasswordResetResult.MFA
                    ? u.default.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: o,
                        sms: t,
                        webauthn: r,
                        totp: d,
                        backup: c,
                      })
                    : null != s
                      ? s(i)
                      : (u.default.dispatch({
                          type: "LOGIN_SUCCESS",
                          token: i,
                        }),
                        this.handlePasswordChangeSuccess());
                } catch (e) {}
                this.setState({ working: !1 });
              }
            }),
            (this.handleTokenSubmitMFAv2 = (e, t) => {
              let {
                  location: s,
                  mfaTicket: a,
                  onLoginSuccess: r,
                  resetToken: n,
                  source: o,
                } = this.props,
                { password: l } = this.state;
              if (0 === l.length)
                return (
                  u.default.dispatch({ type: "LOGIN_RESET" }), Promise.reject()
                );
              let i = n;
              return (null != s && (i = (0, c.default)(s)), null == i)
                ? (u.default.dispatch({ type: "LOGIN_RESET" }),
                  Promise.reject())
                : h.default
                    .resetPasswordMFAv2({
                      method: e,
                      code: t,
                      ticket: a,
                      password: l,
                      token: i,
                      source: o,
                    })
                    .then(e => {
                      null != r
                        ? r(e)
                        : (u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e,
                          }),
                          this.handlePasswordChangeSuccess());
                    });
            }),
            (this.handlePasswordChangeSuccess = () => {
              let { replaceWith: e } = this.props;
              if (i.isTablet || i.isMobile) {
                this.setState({ success: !0 });
                return;
              }
              e(C.Routes.APP);
            }),
            (this.handleGoToLogin = () => {
              let { transitionTo: e } = this.props;
              h.default.loginReset(), e(C.Routes.LOGIN);
            }),
            (this.isSubmitting = () => {
              let { loginStatus: e } = this.props,
                { working: t } = this.state;
              return t || e === C.LoginStates.LOGGING_IN_MFA;
            }),
            (this.handleOpenApp = () => {
              (0, f.default)("password_reset");
            }),
            (this.hasError = e =>
              null != this.props.errors[e] || null != this.state.error),
            (this.renderError = e => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            });
          let s =
            (null === (t = this.props.location) || void 0 === t
              ? void 0
              : t.search) != null && "" !== this.props.location.search
              ? (0, l.parse)(this.props.location.search)
              : null;
          this.state = {
            method: "",
            password: "",
            code: "",
            error: null,
            hasCancel: null != s && null != s.from_login,
            working: !1,
            success: !1,
          };
        }
      }
      N.defaultProps = {
        transitionTo: e => s.g.location.assign(e),
        replaceWith: e => s.g.location.replace(e),
      };
      var _ = function (e) {
        let t = (0, d.useStateFromStoresObject)([m.default], () => ({
          loginStatus: m.default.getLoginStatus(),
          mfaTicket: m.default.getMFATicket(),
          errors: m.default.getErrors(),
          mfaMethods: m.default.getMFAMethods(),
        }));
        return (0, a.jsx)(N, { ...e, ...t });
      };
    },
    457108: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s("730290");
      function r(e) {
        let t = null != e.hash && "" !== e.hash ? (0, a.parse)(e.hash) : null;
        if ((null == t ? void 0 : t.token) != null) return t.token;
        let s =
          null != e.search && "" !== e.search ? (0, a.parse)(e.search) : null;
        return (null == s ? void 0 : s.token) != null ? s.token : null;
      }
    },
    479287: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        }),
        s("781738");
      var a = s("37983"),
        r = s("884691"),
        n = s("414456"),
        o = s.n(n),
        l = s("446674"),
        i = s("77078"),
        d = s("437822"),
        u = s("152434"),
        h = s("21572"),
        c = s("24287"),
        f = s("878720"),
        p = s("25033"),
        g = s("589252"),
        m = s("161778"),
        S = s("271938"),
        T = s("476108"),
        C = s("124969"),
        A = s("659500"),
        E = s("439932"),
        N = s("49111"),
        _ = s("782340"),
        M = s("994613"),
        R = s("890957");
      class O extends r.PureComponent {
        componentDidMount() {
          window.addEventListener("keydown", this.handleTabOrEnter);
        }
        componentDidUpdate(e) {
          let { authenticated: t, transitionTo: s } = this.props;
          if (
            (t && !e.authenticated && s(N.Routes.APP),
            e.errors !== this.props.errors)
          ) {
            var a, r, n;
            this.hasError("password")
              ? null === (a = this.passwordRef) || void 0 === a || a.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (r = this.loginRef) || void 0 === r || r.focus()
                : this.hasError("code") &&
                  (null === (n = this.codeRef) || void 0 === n || n.focus());
          }
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleTabOrEnter);
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderDefaultForm() {
          var e;
          let { country: t } = this.props,
            s = !this.hasError("email") && this.hasError("password"),
            n = (0, a.jsxs)(r.Fragment, {
              children: [
                (0, a.jsx)(
                  C.Title,
                  {
                    className: o(R.marginBottom8, M.title),
                    children: _.default.Messages.MULTI_ACCOUNT_LOGIN_TITLE,
                  },
                  "title"
                ),
                (0, a.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: M.subtitle,
                  children: _.default.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE,
                }),
              ],
            });
          return (0, a.jsxs)("div", {
            className: M.mainLoginContainer,
            children: [
              n,
              (0, a.jsxs)(C.Block, {
                className: M.loginForm,
                children: [
                  (0, a.jsx)(g.default, {
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    className: R.marginBottom20,
                    label: _.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                    error:
                      null !== (e = this.renderError("login")) && void 0 !== e
                        ? e
                        : this.renderError("email"),
                    onChange: (e, t) =>
                      this.setState({ login: e, loginPrefix: t }),
                    setRef: this.setLoginRef,
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    value: this.state.login,
                    autoFocus: !s,
                    required: !0,
                  }),
                  (0, a.jsx)(C.Input, {
                    label: _.default.Messages.FORM_LABEL_PASSWORD,
                    error: this.renderError("password"),
                    onChange: e => this.setState({ password: e }),
                    name: "password",
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    autoFocus: s,
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, a.jsx)(C.Button, {
                    onClick: this.handleForgotPassword,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.LINK,
                    className: o(R.marginTop4),
                    children: _.default.Messages.FORGOT_PASSWORD,
                  }),
                ],
              }),
            ],
          });
        }
        renderDefault() {
          let {
            authBoxClassName: e,
            loginStatus: t,
            closeLogin: s,
            theme: r,
          } = this.props;
          return (0, a.jsxs)("div", {
            className: M.pageContainer,
            children: [
              (0, a.jsx)(C.default, {
                tag: "form",
                className: e,
                expanded: !0,
                theme: r,
                children: this.renderDefaultForm(),
              }),
              (0, a.jsxs)("div", {
                "data-theme": r,
                className: o((0, E.getThemeClass)(r), M.navRow),
                children: [
                  (0, a.jsx)(i.Button, {
                    type: "button",
                    look: i.Button.Looks.LINK,
                    "aria-label": "back",
                    onClick: s,
                    size: i.Button.Sizes.SMALL,
                    className: o((0, E.getThemeClass)(r), M.backButton),
                    children: _.default.Messages.BACK,
                  }),
                  (0, a.jsx)(i.Button, {
                    "aria-label": "continue",
                    submitting: t === N.LoginStates.LOGGING_IN,
                    color: i.Button.Colors.BRAND,
                    onClick: this.handleLogin,
                    className: M.continueButton,
                    children: _.default.Messages.CONTINUE,
                  }),
                ],
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, a.jsx)(C.default, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, a.jsx)(c.MFASlides, {
              mfaFinish: this.handleTokenSubmitMFA,
              request: e,
              onEarlyClose: () => {
                this.handleReset();
              },
              width: 480,
            }),
          });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e, theme: t } = this.props,
            s = this.props.loginStatus === N.LoginStates.ACCOUNT_DISABLED,
            r = s
              ? _.default.Messages.ACCOUNT_DISABLED_TITLE
              : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            n = s
              ? _.default.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, a.jsxs)(C.default, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
              (0, a.jsx)(C.Title, { className: R.marginBottom8, children: r }),
              (0, a.jsx)(C.SubTitle, {
                className: R.marginBottom20,
                children: n,
              }),
              (0, a.jsxs)(C.Block, {
                children: [
                  (0, a.jsx)(i.Button, {
                    color: i.Button.Colors.BRAND,
                    type: "submit",
                    fullWidth: !0,
                    children: _.default.Messages._RETURN_TO_LOGIN,
                  }),
                  (0, a.jsx)("div", {
                    className: o(R.marginTop8, M.needAccount),
                    children:
                      _.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format(
                        { onClick: this.handleCancelAccountDeletion }
                      ),
                  }),
                ],
              }),
            ],
          });
        }
        renderResetPhonePassword() {
          let { resetPasswordPhoneToken: e } = this.state;
          return (0, a.jsx)(u.default, {
            resetToken: e,
            onLoginSuccess: e => {
              d.default.switchAccountToken(e);
            },
            ...this.props,
          });
        }
        renderPhonePasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, a.jsx)(C.default, {
            tag: "form",
            className: e,
            children: (0, a.jsx)("div", {
              className: R.marginTop20,
              children: (0, a.jsx)(h.default, {
                title: _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                subtitle:
                  _.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format(
                    { onResendClick: this.handleResendCode }
                  ),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0,
              }),
            }),
          });
        }
        render() {
          let { loginStatus: e } = this.props;
          if (null != this.state.resetPasswordPhoneToken)
            return this.renderResetPhonePassword();
          switch (e) {
            case N.LoginStates.LOGGING_IN_MFA_SMS:
            case N.LoginStates.MFA_SMS_STEP:
            case N.LoginStates.LOGGING_IN_MFA:
            case N.LoginStates.MFA_STEP:
              return this.renderMFA();
            case N.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
            case N.LoginStates.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case N.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPhonePasswordRecovery();
            case N.LoginStates.LOGGING_IN:
            case N.LoginStates.NONE:
            default:
              return this.renderDefault();
          }
        }
        constructor(e) {
          super(e),
            (this.handleAuthToken = async e => {
              await d.default.loginToken(e, !1);
            }),
            (this.handleTabOrEnter = e => {
              if (
                "Tab" === e.key &&
                !e.shiftKey &&
                e.target === this.loginRef
              ) {
                var t;
                null === (t = this.passwordRef) || void 0 === t || t.focus(),
                  e.stopPropagation(),
                  e.preventDefault();
              }
              "Enter" === e.key &&
                (e.target === this.loginRef || e.target === this.passwordRef) &&
                (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            (this.setLoginRef = e => {
              this.loginRef = e;
            }),
            (this.setPasswordRef = e => {
              this.passwordRef = e;
            }),
            (this.setCodeRef = e => {
              this.codeRef = e;
            }),
            (this.getFullLogin = () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            (this.renderError = e => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            }),
            (this.handleForgotPassword = async e => {
              var t;
              null == e || e.preventDefault(),
                null === (t = this.loginRef) || void 0 === t || t.focus();
              let s = this.getFullLogin();
              try {
                A.ComponentDispatch.dispatch(N.ComponentActions.WAVE_EMPHASIZE),
                  await d.default.forgotPassword(s),
                  (0, i.openModal)(e =>
                    (0, a.jsx)(i.ConfirmModal, {
                      header:
                        _.default.Messages
                          .EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: _.default.Messages.OKAY,
                      confirmButtonColor: i.Button.Colors.BRAND,
                      ...e,
                      children: (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children:
                          _.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format(
                            { email: s }
                          ),
                      }),
                    })
                  );
              } catch {}
            }),
            (this.handleLogin = e => {
              let { password: t, undelete: s } = this.state;
              null != e && e.preventDefault(),
                d.default.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: s,
                  isMultiAccount: !0,
                });
            }),
            (this.handlePasswordReset = async e => {
              this.setState({ phoneVerifyError: null });
              try {
                let { token: t } = await f.default.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1,
                  !0
                );
                this.setState({ resetPasswordPhoneToken: t });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            (this.handleTokenSubmitMFA = e => {
              let { mfaType: t, data: s, ticket: a } = e;
              return d.default.loginMFAv2({
                code: s,
                ticket: a,
                mfaType: t,
                isMultiAccount: !0,
              });
            }),
            (this.handleResendCode = () => {
              f.default.resendCode(this.getFullLogin());
            }),
            (this.handleReset = e => {
              null != e && e.preventDefault(),
                d.default.loginReset(!0),
                this.setState({
                  password: "",
                  loginPrefix: "",
                  login: "",
                  code: "",
                  smsCode: "",
                  undelete: !1,
                  resetPasswordPhoneToken: null,
                });
            }),
            (this.handleCancelAccountDeletion = () => {
              this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.state = {
              loginPrefix: "",
              login: "",
              password: "",
              code: "",
              smsCode: "",
              phoneVerifyError: null,
              resetPasswordPhoneToken: null,
              undelete: !1,
            });
        }
      }
      O.defaultProps = {
        transitionTo: e => s.g.location.assign(e),
        replaceWith: e => s.g.location.replace(e),
      };
      var I = function (e) {
        let t = (0, l.useStateFromStoresObject)(
          [T.default, S.default, p.default, m.default],
          () => ({
            authenticated: S.default.isAuthenticated(),
            loginStatus: S.default.getLoginStatus(),
            mfaTicket: S.default.getMFATicket(),
            mfaSMS: S.default.getMFASMS(),
            maskedPhone: S.default.getMaskedPhone(),
            mfaMethods: S.default.getMFAMethods(),
            errors: S.default.getErrors(),
            defaultRoute: T.default.defaultRoute,
            country: p.default.getCountryCode(),
            theme: m.default.theme,
          })
        );
        return (0, a.jsx)(O, { ...e, ...t });
      };
    },
    350218: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s("37983");
      s("884691");
      var r = s("393414"),
        n = s("479287"),
        o = s("668332"),
        l = e => {
          let { onClose: t } = e;
          return (0, a.jsx)(n.default, {
            transitionTo: e => {
              (0, r.transitionTo)(e);
            },
            replaceWith: e => {
              (0, r.replaceWith)(e);
            },
            authBoxClassName: o.card,
            closeLogin: t,
          });
        };
    },
    685807: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        }),
        s("222007");
      var a,
        r,
        n = s("37983"),
        o = s("884691"),
        l = s("759843"),
        i = s("446674"),
        d = s("77078"),
        u = s("913144"),
        h = s("428958"),
        c = s("697218"),
        f = s("555158"),
        p = s("770032"),
        g = s("350218"),
        m = s("851460"),
        S = s("583374"),
        T = s("49111"),
        C = s("782340"),
        A = s("699764");
      ((r = a || (a = {}))[(r.MANAGE_ACCOUNTS = 0)] = "MANAGE_ACCOUNTS"),
        (r[(r.LOGIN = 1)] = "LOGIN");
      let E = { 0: d.ModalSize.SMALL, 1: d.ModalSize.DYNAMIC };
      function N(e) {
        let { transitionState: t, onClose: s } = e,
          [a, r] = o.useState(0),
          { currentUser: N, multiAccountUsers: _ } = (0,
          i.useStateFromStoresObject)([c.default, p.default], () => ({
            currentUser: c.default.getCurrentUser(),
            multiAccountUsers: p.default.getUsers(),
          })),
          [M, R] = o.useState(!1),
          [O, I] = o.useState(T.EMPTY_STRING_SNOWFLAKE_ID),
          [L, x] = o.useState(null);
        o.useEffect(() => {
          if (M)
            x(
              (0, n.jsx)(f.default, {
                messageType: f.HelpMessageTypes.ERROR,
                className: A.infoMessage,
                children:
                  C.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
                    maxNumAccounts: S.MAX_ACCOUNTS,
                  }),
              })
            ),
              I(T.EMPTY_STRING_SNOWFLAKE_ID);
          else if (null != O) {
            let e = c.default.getUser(O);
            null != e &&
              x(
                (0, n.jsx)(f.default, {
                  messageType: f.HelpMessageTypes.POSITIVE,
                  className: A.infoMessage,
                  children: C.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
                    username: e.username,
                  }),
                })
              ),
              R(!1);
          }
        }, [O, M]),
          o.useEffect(() => {
            _.length < S.MAX_ACCOUNTS && R(!1);
          }, [_]),
          (0, h.default)({
            type: l.ImpressionTypes.MODAL,
            name:
              0 === a
                ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                : l.ImpressionNames.USER_LOGIN,
          });
        let P = null;
        return (
          0 === a
            ? (P = (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, n.jsxs)("div", {
                      className: A.header,
                      children: [
                        (0, n.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          color: "header-primary",
                          children:
                            C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                        }),
                        (0, n.jsx)(d.Text, {
                          className: A.subheaderText,
                          color: "header-secondary",
                          variant: "text-md/normal",
                          children:
                            C.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER,
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(d.ModalContent, {
                    children: [
                      L,
                      (0, n.jsx)(m.default, {
                        actionText:
                          C.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
                        onAction: (e, t) => {
                          switch (e) {
                            case m.MultiAccountActionType.LOGIN_REQUIRED:
                              r(1);
                              break;
                            case m.MultiAccountActionType.SWITCHED:
                              s();
                              break;
                            case m.MultiAccountActionType.REMOVED:
                              t === (null == N ? void 0 : N.id) && s(), I(t);
                          }
                        },
                      }),
                      (0, n.jsx)("div", {
                        className: A.actions,
                        children: (0, n.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                            if (_.length >= S.MAX_ACCOUNTS) {
                              R(!0);
                              return;
                            }
                            r(1);
                          },
                          size: d.Button.Sizes.MEDIUM,
                          children: (0, n.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            children:
                              C.default.Messages
                                .SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }))
            : 1 === a &&
              (P = (0, n.jsx)(g.default, {
                onClose: () => {
                  u.default.dispatch({ type: "CLEAR_AUTHENTICATION_ERRORS" }),
                    r(0);
                },
              })),
          (0, n.jsx)(d.ModalRoot, {
            className: A.modal,
            transitionState: t,
            size: E[a],
            "aria-label": C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
            children: (0, n.jsx)(d.Sequencer, {
              step: a,
              steps: [0, 1],
              children: P,
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=62b557a0720538400c6a.js.map
