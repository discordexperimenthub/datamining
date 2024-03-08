(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42273"],
  {
    510676: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f0cba42b6a6d3b2de4fd.svg";
    },
    737444: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0a3ae0a6213e605457af.svg";
    },
    899917: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var n = s("37983");
      s("884691");
      var o = s("446674"),
        i = s("77078"),
        a = s("387225"),
        l = s("697218"),
        r = s("145131"),
        d = s("782340"),
        u = s("253230");
      function c(e) {
        let { onClose: t } = e,
          r = (0, o.useStateFromStores)([l.default], () =>
            l.default.getCurrentUser()
          );
        function u() {
          null == t || t();
        }
        function c() {
          u(),
            (0, i.openModalLazy)(async () => {
              let { default: e } = await s
                .el("867693")
                .then(s.bind(s, "867693"));
              return t => (0, n.jsx)(e, { ...t });
            });
        }
        return (null == r ? void 0 : r.email) == null
          ? (0, n.jsx)(i.Button, {
              onClick: c,
              color: i.Button.Colors.BRAND,
              look: i.Button.Looks.FILLED,
              children: d.default.Messages.ADD_EMAIL_SHORT,
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(i.Button, {
                  onClick: c,
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.LINK,
                  children: d.default.Messages.CHANGE_EMAIL_SHORT,
                }),
                (0, n.jsx)(a.default, {
                  color: i.Button.Colors.BRAND,
                  onClick: u,
                }),
              ],
            });
      }
      var f = function (e) {
        let { onClose: t, transitionState: s } = e;
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: s,
          children: [
            (0, n.jsx)(i.ModalHeader, {
              children: (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H4,
                children: d.default.Messages.PREMIUM_NOT_VERIFIED,
              }),
            }),
            (0, n.jsxs)(i.ModalContent, {
              children: [
                (0, n.jsx)("div", { className: u.imageUnverified }),
                (0, n.jsx)(i.Text, {
                  variant: "text-md/normal",
                  className: u.message,
                  children: d.default.Messages.PREMIUM_NOT_VERIFIED_BODY,
                }),
              ],
            }),
            (0, n.jsx)(i.ModalFooter, {
              children: (0, n.jsx)(r.default, {
                justify: r.default.Justify.END,
                children: (0, n.jsx)(c, { onClose: t }),
              }),
            }),
          ],
        });
      };
    },
    387225: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var n = s("37983"),
        o = s("884691"),
        i = s("627445"),
        a = s.n(i),
        l = s("446674"),
        r = s("77078"),
        d = s("437822"),
        u = s("135230"),
        c = s("697218"),
        f = s("782340");
      class I extends o.Component {
        render() {
          let { color: e, look: t, size: s } = this.props;
          return (0, n.jsx)(r.Button, {
            look: t,
            size: s,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: f.default.Messages.RESEND_VERIFICATION_EMAIL,
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { isSendingVerificationEmail: !1 }),
            (this.handleResendVerification = () => {
              let { currentUser: e, onClick: t } = this.props;
              null == t || t(),
                this.setState({ isSendingVerificationEmail: !0 }, () => {
                  d.default
                    .verifyResend()
                    .then(() =>
                      (0, r.openModal)(t =>
                        (0, n.jsx)(r.ConfirmModal, {
                          header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
                          confirmText: f.default.Messages.OKAY,
                          confirmButtonColor: r.Button.Colors.BRAND,
                          ...t,
                          children: (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children:
                              f.default.Messages.VERIFICATION_EMAIL_BODY.format(
                                { email: e.email }
                              ),
                          }),
                        })
                      )
                    )
                    .catch(e => {
                      let { body: t } = e,
                        s = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                      null != t && t.email && (s = t.email),
                        (0, r.openModal)(e =>
                          (0, n.jsx)(u.default, {
                            title:
                              f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                            body: s,
                            ...e,
                          })
                        );
                    })
                    .then(() =>
                      this.setState({ isSendingVerificationEmail: !1 })
                    );
                });
            });
        }
      }
      I.defaultProps = {
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
      };
      var h = l.default.connectStores([c.default], () => {
        let e = c.default.getCurrentUser();
        return (
          a(
            null != e,
            "ResendEmailVerificationButton: currentUser cannot be undefined"
          ),
          { currentUser: e }
        );
      })(I);
    },
  },
]);
//# sourceMappingURL=c601ad19fb20ee95ee45.js.map
