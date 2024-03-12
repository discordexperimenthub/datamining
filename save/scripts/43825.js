(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43825"],
  {
    526257: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("850068"),
        o = n("927078"),
        i = n("393414"),
        d = n("162771"),
        s = n("642906"),
        a = n("385179"),
        r = n("49111");
      function c(t) {
        let { onClose: e, onComplete: n, forcesTransitionToGuild: c, ...p } = t,
          { subscriptionMetadataRequest: f } = (0, s.usePaymentContext)();
        return (0, u.jsx)(a.PaymentModal, {
          ...p,
          onComplete: n,
          onClose: t => {
            e(t);
            let u = null == f ? void 0 : f.guild_id;
            t &&
              null != u &&
              (l.fetchSubscriptions(),
              (0, o.fetchEntitlementsForGuild)(u),
              null == n || n(),
              null != u &&
                (c || d.default.getGuildId() !== u) &&
                (0, i.transitionTo)(r.Routes.CHANNEL(u)));
          },
          forceNewPaymentModal: !0,
        });
      }
    },
  },
]);
//# sourceMappingURL=d456fbbac1420dbdc490.js.map
