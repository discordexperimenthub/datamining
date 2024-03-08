(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47971"],
  {
    336811: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r("37983");
      r("884691");
      var a = r("77078"),
        s = r("701909"),
        c = r("153160"),
        o = r("49111"),
        l = r("782340"),
        i = e => {
          let { modalProps: t, onConfirm: r, onCancel: i, newInvoice: d } = e,
            u = {
              newCurrencyAndPrice: (0, c.formatPrice)(d.total, d.currency),
              helpCenterLink: s.default.getArticleURL(
                o.HelpdeskArticles.LOCALIZED_PRICING
              ),
            };
          return (0, n.jsx)(a.ConfirmModal, {
            header: l.default.Messages.BILLING_CONFIRM_PRICE_CHANGE_TITLE,
            confirmText: l.default.Messages.YES_TEXT,
            cancelText: l.default.Messages.NO_TEXT,
            onConfirm: r,
            onCancel: i,
            confirmButtonColor: a.Button.Colors.BRAND,
            ...t,
            children: (0, n.jsx)(a.Text, {
              variant: "text-md/normal",
              children:
                l.default.Messages.LOCALIZED_PRICING_ON_CHANGE_PAYMENT_METHOD.format(
                  u
                ),
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=4d90006e631b72080b1f.js.map
