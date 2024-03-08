(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36826"],
  {
    754559: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("77078"),
        i = a("559317"),
        l = a("701909"),
        u = a("49111"),
        d = a("782340");
      function r(e) {
        let { listing: t, transitionState: a, onClose: r, ...o } = e;
        return (0, n.jsx)(i.default, {
          sku_id: t.id,
          sku_name: t.name,
          guild_id: t.guild_id,
          header: d.default.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({
            listingName: t.name,
          }),
          transitionState: a,
          onClose: r,
          ...o,
          children: (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            children: d.default.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
              listingName: t.name,
              monetizationTermsUrl: l.default.getArticleURL(
                u.HelpdeskArticles.CREATOR_TERMS
              ),
              communityGuidelinesUrl: u.MarketingURLs.GUIDELINES,
            }),
          }),
        });
      }
    },
    559317: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("65597"),
        i = a("77078"),
        l = a("404118"),
        u = a("697218"),
        d = a("599110"),
        r = a("49111"),
        o = a("782340");
      function f(e) {
        let {
            header: t,
            children: a,
            sku_id: f,
            sku_name: _,
            guild_id: c,
            cancelLabel: R,
            confirmLabel: m,
            transitionState: E,
            onClose: O,
            ...T
          } = e,
          g = (0, s.default)([u.default], () => u.default.getCurrentUser());
        return (0, n.jsx)(i.ConfirmModal, {
          header: null != t ? t : o.default.Messages.REPORT,
          cancelText: null != R ? R : o.default.Messages.CANCEL,
          confirmText: null != m ? m : o.default.Messages.REPORT,
          onConfirm: () => {
            d.default.track(r.AnalyticEvents.TNS_SKU_REPORT_SUBMITTED, {
              sku_id: f,
              guild_id: c,
              user_id: null == g ? void 0 : g.id,
            }),
              l.default.show({
                title: o.default.Messages.SKU_REPORT_CONFIRMATION_HEADER,
                body: o.default.Messages.SKU_REPORT_CONFIRMATION_BODY.format({
                  skuName: _,
                }),
              });
          },
          transitionState: E,
          onClose: O,
          ...T,
          children: a,
        });
      }
    },
  },
]);
//# sourceMappingURL=e2518edc327f2e72b89a.js.map
