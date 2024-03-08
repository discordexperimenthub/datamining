(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93695"],
  {
    7115: function (e, t, a) {
      "use strict";
      e.exports = a.p + "939a6d418697a2811ab8.png";
    },
    532210: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("626301"),
        i = a("789946"),
        l = a("646718"),
        c = a("49111"),
        o = a("782340");
      function u(e) {
        var t;
        let { channel: u, onClose: r, ...E } = e,
          L =
            o.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
              onLearnMore: function () {
                r(), (0, s.navigateToPremiumMarketingPage)(!0);
              },
            });
        return (0, n.jsx)(i.default, {
          artURL: a("7115"),
          type: l.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
          title: o.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
          body: L,
          glowUp: L,
          analyticsSource: {
            page:
              (null == (t = u) ? void 0 : t.getGuildId()) != null
                ? c.AnalyticsPages.GUILD_CHANNEL
                : (null == t ? void 0 : t.isGroupDM()) ||
                    (null == t ? void 0 : t.isPrivate())
                  ? c.AnalyticsPages.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: c.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
            object: c.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: r,
          ...E,
        });
      }
    },
  },
]);
//# sourceMappingURL=c294bbae3ae66b8b830c.js.map
