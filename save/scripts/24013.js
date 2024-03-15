(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24013"],
  {
    648661: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          showInvalidUsernameToast: function () {
            return i;
          },
        });
      var n = s("77078"),
        a = s("782340");
      function i() {
        (0, n.showToast)(
          (0, n.createToast)(
            a.default.Messages.USER_SETTINGS_UPDATE_FAILURE,
            n.ToastType.FAILURE
          )
        );
      }
    },
    126667: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return p;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("627445"),
        l = s.n(i),
        o = s("446674"),
        r = s("437822"),
        d = s("152584"),
        h = s("648661"),
        u = s("330387"),
        m = s("790618"),
        c = s("697218"),
        f = s("67211"),
        g = s("892313"),
        E = s("49111"),
        p = e => {
          let { transitionState: t, onClose: s } = e,
            i = (0, o.useStateFromStores)([m.default], () =>
              m.default.getErrors()
            ),
            p = (0, o.useStateFromStores)([m.default], () =>
              m.default.getFormState()
            ),
            C = (0, o.useStateFromStores)([c.default], () => {
              let e = c.default.getCurrentUser();
              return (
                l(
                  null != e,
                  "EmailVerificationModal: user cannot be undefined"
                ),
                e
              );
            }),
            I = (0, o.useStateFromStores)([u.default], () =>
              u.default.getAction()
            ),
            _ = !g.default.isEmailReverification(I),
            R = null != C.email,
            [v, M] = a.useState(!0),
            S = p === E.FormStates.SUBMITTING;
          function A(e) {
            var t, s;
            return null !==
              (s =
                null == i
                  ? void 0
                  : null === (t = i[e]) || void 0 === t
                    ? void 0
                    : t[0]) && void 0 !== s
              ? s
              : "";
          }
          let N = A("email"),
            B = A("password");
          return (0, n.jsx)(f.default, {
            transitionState: t,
            email: C.email,
            emailError: N,
            passwordError: B,
            submitting: S,
            canResend: v && !S && R && 0 === N.length && 0 === B.length,
            canChange: _,
            onChangeEmailClick: function () {
              M(!1);
            },
            onVerify: function (e, t) {
              (0, d.saveAccountChanges)({ email: e, password: t }).then(e => {
                var t;
                !(null == e ? void 0 : e.ok) &&
                  (null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.username) != null &&
                  (0, h.showInvalidUsernameToast)();
              }),
                M(!0);
            },
            onResend: function () {
              r.default.verifyResend();
            },
            onClose: s,
          });
        };
    },
    67211: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        l = s.n(i),
        o = s("748820"),
        r = s("862337"),
        d = s("77078"),
        h = s("49111"),
        u = s("782340"),
        m = s("908492"),
        c = s("125047"),
        f = s("890957");
      class g extends a.PureComponent {
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            s.el("280201").then(s.t.bind(s, "280201", 19)),
            s.el("865981").then(s.t.bind(s, "865981", 23)),
          ]);
          null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
              container: this._lottieRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: e,
            }));
        }
        componentWillUnmount() {
          this._timeout.stop(),
            null != this._animItem &&
              (this._animItem.destroy(), (this._animItem = void 0));
        }
        renderInputs() {
          let { emailError: e, passwordError: t, submitting: s } = this.props,
            { email: a, password: i } = this.state;
          return (0, n.jsxs)("div", {
            className: m.container,
            children: [
              (0, n.jsx)(d.FormItem, {
                title: u.default.Messages.FORM_LABEL_EMAIL,
                className: f.marginBottom20,
                children: (0, n.jsx)(d.TextInput, {
                  value: a,
                  error: e,
                  onChange: this.handleEmailChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
              }),
              (0, n.jsx)(d.FormItem, {
                title: u.default.Messages.FORM_LABEL_PASSWORD,
                className: f.marginBottom40,
                children: (0, n.jsx)(d.TextInput, {
                  type: "password",
                  value: i,
                  error: t,
                  onChange: this.handlePasswordChange,
                  onKeyPress: this.handleKeyPress,
                }),
              }),
              (0, n.jsx)(d.Button, {
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                onClick: this.handleVerify,
                submitting: s,
                disabled: 0 === a.length || 0 === i.length,
                children: u.default.Messages.VERIFY_ACCOUNT,
              }),
            ],
          });
        }
        renderActions() {
          let { canChange: e } = this.props;
          return (0, n.jsxs)("div", {
            className: m.container,
            children: [
              (0, n.jsx)(d.Button, {
                className: f.marginTop20,
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                look: d.ButtonLooks.INVERTED,
                color: d.ButtonColors.PRIMARY,
                onClick: this.handleResendEmail,
                children: u.default.Messages.RESEND_EMAIL,
              }),
              e &&
                (0, n.jsx)(d.Button, {
                  className: f.marginTop20,
                  fullWidth: !0,
                  size: d.Button.Sizes.MEDIUM,
                  look: d.ButtonLooks.LINK,
                  color: d.ButtonColors.PRIMARY,
                  onClick: this.handleChangeEmailClick,
                  children: u.default.Messages.CHANGE_EMAIL,
                }),
            ],
          });
        }
        render() {
          let e;
          let { resent: t } = this.state,
            { email: s, canResend: a, transitionState: i } = this.props;
          return (
            (e =
              t && null != s
                ? u.default.Messages.VERIFY_EMAIL_BODY_RESENT.format({
                    email: s,
                  })
                : a
                  ? u.default.Messages.VERIFY_EMAIL_BODY
                  : u.default.Messages.ENTER_EMAIL_BODY),
            (0, n.jsxs)(d.ModalRoot, {
              transitionState: i,
              "aria-labelledby": this._headerId,
              className: l(
                m.emailVerificationModal,
                c.vertical,
                c.alignCenter,
                c.justifyCenter,
                f.marginTop60
              ),
              children: [
                (0, n.jsx)("div", {
                  className: m.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, n.jsx)("div", {
                  id: this._headerId,
                  className: l(m.title, f.marginBottom8),
                  children: u.default.Messages.VERIFY_BY_EMAIL,
                }),
                (0, n.jsx)("div", {
                  className: l(m.body, f.marginBottom20),
                  children: e,
                }),
                a ? this.renderActions() : this.renderInputs(),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this._animItem = null),
            (this._timeout = new r.Timeout()),
            (this._headerId = (0, o.v4)()),
            (this.state = {
              resent: !1,
              shouldClose: !1,
              email: "",
              password: "",
            }),
            (this.setLottieRef = e => {
              this._lottieRef = e;
            }),
            (this.handleVerify = () => {
              let { onVerify: e } = this.props;
              e(this.state.email, this.state.password);
            }),
            (this.handleResendEmail = () => {
              let { onResend: e, onClose: t } = this.props;
              e(),
                !this.state.resent &&
                  (this.setState({ resent: !0, shouldClose: !0 }),
                  this._timeout.start(3e3, () => {
                    this.state.shouldClose && t();
                  }));
            }),
            (this.handleChangeEmailClick = () => {
              let { onChangeEmailClick: e } = this.props;
              this.setState({ resent: !1, shouldClose: !1 }), e();
            }),
            (this.handleEmailChange = e => {
              this.setState({ email: e });
            }),
            (this.handlePasswordChange = e => {
              this.setState({ password: e });
            }),
            (this.handleKeyPress = e => {
              let { email: t, password: s } = this.state;
              13 === e.which &&
                t.length > 0 &&
                s.length > 0 &&
                (e.preventDefault(), this.handleVerify());
            });
        }
      }
      g.defaultProps = {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: h.NOOP,
        onVerify: (e, t) => {},
        onResend: h.NOOP,
        onClose: h.NOOP,
      };
      var E = g;
    },
  },
]);
//# sourceMappingURL=87c05453f1a52f50285f.js.map
