(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59308"],
  {
    277531: function (e, t, a) {
      "use strict";
      e.exports = a.p + "194e2a857dca1aba6e15.png";
    },
    920067: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("446674"),
        o = a("771325"),
        r = a("697218"),
        u = a("719923"),
        c = a("626301"),
        i = a("789946"),
        l = a("646718"),
        _ = a("49111"),
        d = a("75015"),
        U = a("782340");
      function T(e) {
        let { onClose: t, source: T, ...E } = e,
          O = (0, n.useStateFromStores)([r.default], () =>
            r.default.getCurrentUser()
          ),
          p = u.default.isPremium(O)
            ? U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPGRADE_BODY
            : U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_BODY,
          I = p.format({
            onLearnMore: function () {
              t(), (0, c.navigateToPremiumMarketingPage)(!0);
            },
          });
        return (0, s.jsx)(i.default, {
          artURL: a("277531"),
          type: l.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL,
          title: U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_HEADER,
          body: I,
          glowUp: I,
          onSecondaryClick: () => {
            t(), (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER);
          },
          secondaryCTA: U.default.Messages.USER_SETTINGS_TRY_IT_OUT,
          analyticsSource: T,
          analyticsLocation: {
            section: _.AnalyticsSections.USER_PROFILE,
            object: _.AnalyticsObjects.BUTTON_CTA,
          },
          onClose: t,
          ...E,
        });
      }
    },
  },
]);
//# sourceMappingURL=b216c39766e45b779269.js.map
