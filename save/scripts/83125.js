(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83125"],
  {
    560785: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return r;
          },
        }),
        a("222007");
      var R = a("37983"),
        t = a("884691"),
        n = a("77078"),
        l = a("850068"),
        _ = a("89553"),
        E = a("782340"),
        N = a("708368");
      let u = {
        [_.RefundReason.GIFTING_REFUND]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_GIFTING_REFUND,
        [_.RefundReason.BUYERS_REMORSE]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_BUYERS_REMORSE,
        [_.RefundReason.WRONG_PURCHASE]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_WRONG_PURCHASE,
        [_.RefundReason.FORGOT_TO_CANCEL]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_FORGOT_TO_CANCEL,
        [_.RefundReason.SERVER_BOOSTING_COOLDOWN]: () =>
          E.default.Messages
            .BILLING_REFUND_USER_REASON_SERVER_BOOSTING_COOLDOWN,
        [_.RefundReason.USER_CONFUSION]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_USER_CONFUSION,
        [_.RefundReason.WANT_TO_SWITCH_TIERS]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_WANT_TO_SWITCH_TIERS,
        [_.RefundReason.DONT_NEED]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_DONT_NEED,
        [_.RefundReason.OTHER]: () =>
          E.default.Messages.BILLING_REFUND_USER_REASON_OTHER,
      };
      function r(e) {
        let s,
          { payment: a, reportProblemUrl: r, onClose: o, ...d } = e,
          [i, O] = t.useState(null),
          [I, S] = t.useState(!1),
          [f, L] = t.useState(null);
        s = I
          ? (0, R.jsx)(n.Spinner, {})
          : null != f
            ? (0, R.jsxs)("div", {
                children: [
                  (0, R.jsx)(n.Text, {
                    variant: "text-md/normal",
                    className: N.refundErrorTitle,
                    children: E.default.Messages.BILLING_REFUND_ERROR.format({
                      error: f,
                    }),
                  }),
                  (0, R.jsx)(n.Text, {
                    className: N.refundErrorSupport,
                    variant: "text-sm/normal",
                    children:
                      E.default.Messages.BILLING_REFUND_ERROR_CONTACT_SUPPORT.format(
                        { supportUrl: r }
                      ),
                  }),
                ],
              })
            : (0, R.jsxs)("div", {
                className: N.body,
                children: [
                  (0, R.jsx)(n.SingleSelect, {
                    options: Object.entries(u)
                      .sort((e, s) => {
                        let [a] = e,
                          [R] = s;
                        return Number(a) === _.RefundReason.OTHER
                          ? 1
                          : Number(R) === _.RefundReason.OTHER
                            ? -1
                            : 0;
                      })
                      .map(e => {
                        let [s, a] = e;
                        return { value: parseInt(s), label: a() };
                      }),
                    onChange: e => O(e),
                    value: i,
                    placeholder:
                      E.default.Messages.BILLING_REFUND_SELECT_REASON,
                  }),
                  (0, R.jsxs)(n.Text, {
                    className: N.notice,
                    variant: "text-sm/normal",
                    children: [
                      E.default.Messages.BILLING_REFUND_REVOCATION_NOTICE,
                      " ",
                      a.isPremiumSubscription ||
                      a.isPremiumGuildSubscription ||
                      a.isPremiumGift
                        ? E.default.Messages
                            .BILLING_REFUND_ONE_TIME_REFUND_NOTICE
                        : null,
                    ],
                  }),
                ],
              });
        let U = null == i || I || null != f;
        return (0, R.jsxs)(n.ModalRoot, {
          ...d,
          children: [
            (0, R.jsx)(n.ModalHeader, {
              separator: !1,
              children: (0, R.jsx)(n.Heading, {
                variant: "heading-lg/semibold",
                children:
                  null != f
                    ? E.default.Messages.BILLING_REFUND_MODAL_HEADER_ERROR
                    : E.default.Messages.BILLING_REFUND_MODAL_HEADER,
              }),
            }),
            (0, R.jsx)(n.ModalContent, { children: s }),
            (0, R.jsxs)(n.ModalFooter, {
              children: [
                (0, R.jsx)(n.Button, {
                  type: "submit",
                  color: n.Button.Colors.RED,
                  onClick: async () => {
                    if (!U && null != i) {
                      S(!0), L(null);
                      try {
                        await (0, l.refundPayment)(a.id, i), o();
                      } catch (e) {
                        L(e.body.message);
                      } finally {
                        S(!1);
                      }
                    }
                  },
                  disabled: U,
                  autoFocus: !0,
                  children: E.default.Messages.SUBMIT,
                }),
                (0, R.jsx)(n.Button, {
                  type: "button",
                  look: n.Button.Looks.LINK,
                  color: n.Button.Colors.PRIMARY,
                  onClick: () => {
                    o();
                  },
                  children: E.default.Messages.NEVERMIND,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=6e46c62bad665cf006ee.js.map
