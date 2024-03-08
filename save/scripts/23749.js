(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23749"],
  {
    73947: function (n, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var e = i("37983");
      i("884691");
      var a = i("850068"),
        l = i("927078"),
        u = i("393414"),
        o = i("162771"),
        s = i("642906"),
        d = i("385179"),
        c = i("49111");
      function r(n) {
        let {
            onClose: t,
            initialPlanId: i,
            analyticsObject: r,
            analyticsLocation: p,
            analyticsLocations: f,
            analyticsSubscriptionType: y,
            renderHeader: h,
            planGroup: b,
            reviewWarningMessage: g,
            applicationId: k,
            guildId: C,
            onComplete: I,
            forcesTransitionToGuild: m,
            skuId: v,
            ...w
          } = n,
          { subscriptionMetadataRequest: P } = (0, s.usePaymentContext)();
        return (0, e.jsx)(d.PaymentModal, {
          ...w,
          initialPlanId: i,
          skuId: v,
          onClose: n => {
            t();
            let i = null == P ? void 0 : P.guild_id;
            n &&
              null != i &&
              (a.fetchSubscriptions(),
              (0, l.fetchEntitlementsForGuild)(i),
              null == I || I(),
              null != i &&
                (m || o.default.getGuildId() !== i) &&
                (0, u.transitionTo)(c.Routes.CHANNEL(i)));
          },
          analyticsLocations: f,
          analyticsObject: r,
          analyticsLocation: p,
          analyticsSubscriptionType: y,
          renderHeader: h,
          planGroup: b,
          reviewWarningMessage: g,
          applicationId: k,
          guildId: C,
          forceNewPaymentModal: !0,
        });
      }
    },
  },
]);
//# sourceMappingURL=cb0f003c6e597e185bbd.js.map
