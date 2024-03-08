(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64471"],
  {
    696475: function (t, e, n) {
      "use strict";
      t.exports = n.p + "5ab9c3b362fa70cadcc4.png";
    },
    414242: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("626301"),
        i = n("789946"),
        o = n("646718"),
        c = n("49111"),
        r = n("782340");
      function u(t) {
        let { onClose: e, source: u, ..._ } = t,
          L = r.default.Messages.GUILD_IDENTITY_UPSELL_MODAL_BODY.format({
            onAndMore: function () {
              e(), (0, a.navigateToPremiumMarketingPage)(!0);
            },
          });
        return (0, s.jsx)(i.default, {
          artURL: n("696475"),
          type: o.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL,
          title: r.default.Messages.GUILD_IDENTITY_UPSELL_MODAL_TITLE,
          body: L,
          glowUp: L,
          analyticsSource: u,
          analyticsLocation: {
            section:
              c.AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: c.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: e,
          ..._,
        });
      }
    },
  },
]);
//# sourceMappingURL=f420fcb351e0db5b232a.js.map
