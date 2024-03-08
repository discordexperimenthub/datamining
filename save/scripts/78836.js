(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78836"],
  {
    583227: function (s, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        }),
        t("222007"),
        t("506083");
      var a = t("37983"),
        n = t("884691"),
        r = t("77078"),
        o = t("782340"),
        l = t("495650");
      class i extends n.PureComponent {
        render() {
          let {
              title: s,
              actionText: e,
              children: t,
              transitionState: i,
            } = this.props,
            { error: d, isLoading: h, value: u } = this.state,
            c =
              n.Children.count(t) > 0
                ? (0, a.jsx)(r.Card, {
                    type: r.Card.Types.WARNING,
                    className: l.card,
                    children: (0, a.jsx)(r.Text, {
                      className: l.warning,
                      variant: "text-md/normal",
                      children: t,
                    }),
                  })
                : null;
          return (0, a.jsx)(r.ModalRoot, {
            transitionState: i,
            children: (0, a.jsxs)("form", {
              onSubmit: this.handleSubmit,
              children: [
                (0, a.jsx)(r.ModalHeader, {
                  separator: !1,
                  children: (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: s,
                  }),
                }),
                (0, a.jsxs)(r.ModalContent, {
                  children: [
                    c,
                    (0, a.jsxs)(r.FormItem, {
                      title: o.default.Messages.FORM_LABEL_PASSWORD,
                      className: l.spacing,
                      children: [
                        (0, a.jsx)(r.TextInput, {
                          type: "password",
                          autoComplete: "off",
                          autoFocus: !0,
                          value: u,
                          onChange: this.handlePasswordChange,
                        }),
                        null != d && "" !== d
                          ? (0, a.jsxs)(r.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              className: l.error,
                              children: [" ", d, " "],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(r.ModalFooter, {
                  children: [
                    (0, a.jsx)(r.Button, {
                      type: "submit",
                      disabled: h || 0 === u.length,
                      children: null != e ? e : o.default.Messages.CONFIRM,
                    }),
                    (0, a.jsx)(r.Button, {
                      onClick: this.handleCancel,
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      children: o.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...s) {
          super(...s),
            (this.state = { value: "", error: null, isLoading: !1 }),
            (this.handleSubmit = s => {
              s.preventDefault();
              let { value: e } = this.state,
                { handleSubmit: t, onClose: a, onError: n } = this.props;
              this.setState({ isLoading: !0 }),
                t(e)
                  .then(
                    s => a(null != s ? s : void 0),
                    s => {
                      if (null != s.body)
                        null == n || n(s.body),
                          !this.shouldSkipErrorMsgRender(s.body) &&
                            (s.body.password
                              ? this.setState({
                                  error: s.body.password,
                                  isLoading: !1,
                                })
                              : s.body.message &&
                                this.setState({
                                  error: s.body.message,
                                  isLoading: !1,
                                }));
                    }
                  )
                  .finally(() => this.setState({ isLoading: !1 }));
            }),
            (this.shouldSkipErrorMsgRender = s => {
              let { skipErrorMsgAbortCode: e } = this.props;
              return null != e && (null == s ? void 0 : s.code) === e;
            }),
            (this.handleCancel = () => {
              let { onClose: s } = this.props;
              s();
            }),
            (this.handlePasswordChange = s => {
              let { onPasswordChange: e } = this.props;
              null == e || e(s), this.setState({ value: s });
            });
        }
      }
      i.key = () => "password-confirm-modal";
      var d = i;
    },
  },
]);
//# sourceMappingURL=ce0cd628a02ae2e8fdef.js.map
