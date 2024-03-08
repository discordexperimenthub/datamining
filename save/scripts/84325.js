(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84325"],
  {
    604972: function (t, e, s) {
      "use strict";
      t.exports = s.p + "5fc4852a2acb3abf0a64.svg";
    },
    993133: function (t, e, s) {
      "use strict";
      t.exports = s.p + "98626af1abdc5a1e486c.svg";
    },
    574072: function (t, e, s) {
      "use strict";
      t.exports = s.p + "ac36a2fad758d64ffbfb.svg";
    },
    47313: function (t, e, s) {
      "use strict";
      t.exports = s.p + "4bc279fff08f99f2f712.svg";
    },
    516486: function (t, e, s) {
      "use strict";
      t.exports = s.p + "22a55a08151860da8500.svg";
    },
    133848: function (t, e, s) {
      "use strict";
      t.exports = s.p + "dc2b34cbeee1f6097d9f.svg";
    },
    905692: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return p;
          },
        }),
        s("222007");
      var a,
        n,
        i = s("37983"),
        c = s("884691"),
        o = s("446674"),
        r = s("77078"),
        l = s("850068"),
        u = s("758764"),
        d = s("599110"),
        A = s("153160"),
        T = s("520713"),
        h = s("49111"),
        N = s("782340"),
        M = s("187657");
      ((n = a || (a = {}))[(n.START = 0)] = "START"),
        (n[(n.FAIL = 1)] = "FAIL"),
        (n[(n.SUCCESS = 2)] = "SUCCESS"),
        (n[(n.CANCELED = 3)] = "CANCELED");
      class E extends c.Component {
        componentDidMount() {
          d.default.track(h.AnalyticEvents.OPEN_MODAL, {
            type: h.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL,
          });
        }
        componentWillUnmount() {
          d.default.track(h.AnalyticEvents.MODAL_DISMISSED, {
            type: h.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL,
          });
        }
        getTitle() {
          let { step: t } = this.state;
          switch (t) {
            case 0:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE;
            case 2:
              return N.default.Messages
                .PAYMENT_AUTHENTICATION_MODAL_TITLE_SUCCESS;
            case 3:
              return N.default.Messages
                .PAYMENT_AUTHENTICATION_MODAL_TITLE_CANCELED;
            default:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_FAIL;
          }
        }
        getImageStyle() {
          let { step: t } = this.state;
          switch (t) {
            case 0:
              return M.authenticationRequiredImage;
            case 2:
              return M.authenticationSuccessImage;
            default:
              return M.authenticationFailImage;
          }
        }
        getMessage() {
          let { step: t } = this.state,
            { pendingPayment: e } = this.props;
          switch (t) {
            case 0:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_START.format(
                {
                  price: (0, A.formatPrice)(e.amount, e.currency),
                  item: e.description,
                }
              );
            case 2:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_SUCCESS;
            case 3:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_CANCELED.format(
                { item: e.description }
              );
            default:
              return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_FAIL;
          }
        }
        renderButtons() {
          let { step: t } = this.state,
            { disableAuthentication: e } = this.props;
          if (0 === t)
            return (0, i.jsxs)(c.Fragment, {
              children: [
                (0, i.jsx)(r.Button, {
                  color: r.ButtonColors.BRAND,
                  disabled: e,
                  onClick: this.handleAuthenticate,
                  children:
                    N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON,
                }),
                (0, i.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.NONE,
                  color: r.Button.Colors.PRIMARY,
                  onClick: this.cancelPayment,
                  className: M.cancelButton,
                  children:
                    N.default.Messages
                      .PAYMENT_AUTHENTICATION_MODAL_BUTTON_CANCEL_PAYMENT,
                }),
              ],
            });
          return (0, i.jsx)(r.Button, {
            color: r.ButtonColors.BRAND,
            onClick: this.close,
            children: N.default.Messages.CLOSE,
          });
        }
        render() {
          let { transitionState: t } = this.props;
          return (0, i.jsxs)(r.ModalRoot, {
            transitionState: t,
            className: M.modal,
            size: r.ModalSize.SMALL,
            "aria-label": this.getTitle(),
            children: [
              (0, i.jsxs)(r.ModalHeader, {
                children: [
                  (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: (0, i.jsx)("span", {
                      className: M.modalTitle,
                      children: this.getTitle(),
                    }),
                  }),
                  (0, i.jsx)(r.ModalCloseButton, {
                    className: M.closeIcon,
                    onClick: this.close,
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalContent, {
                className: M.content,
                children: [
                  (0, i.jsx)("div", { className: this.getImageStyle() }),
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: this.getMessage(),
                  }),
                ],
              }),
              (0, i.jsx)(r.ModalFooter, {
                className: M.footer,
                children: this.renderButtons(),
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            (this.state = { step: 0 }),
            (this.close = async () => {
              let { step: t } = this.state,
                { onClose: e, pendingPayment: s } = this.props;
              0 === t && (await (0, l.voidPendingPayment)(s.id)), e();
            }),
            (this.cancelPayment = async () => {
              let { pendingPayment: t } = this.props;
              try {
                await (0, l.voidPendingPayment)(t.id);
              } catch (t) {
                throw (this.setState({ step: 3 }), t);
              }
              this.setState({ step: 3 });
            }),
            (this.handleAuthenticate = async () => {
              let { pendingPayment: t } = this.props,
                { error: e } = await (0,
                T.authenticatePaymentIntentForPaymentId)(t.id);
              null != e
                ? this.setState({ step: 1 })
                : this.setState({ step: 2 });
            });
        }
      }
      var p = o.default.connectStores([u.default], () => ({
        disableAuthentication: u.default.isAwaitingAuthentication,
      }))(E);
    },
  },
]);
//# sourceMappingURL=5f20129e3a1b552790b3.js.map
