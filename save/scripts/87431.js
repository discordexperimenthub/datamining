(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87431"],
  {
    746227: function (e, a, t) {
      "use strict";
      e.exports = t.p + "50ec60647b0f528aecf9.png";
    },
    341334: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return U;
          },
        });
      var s = t("37983");
      t("884691");
      var _ = t("669491"),
        n = t("77078"),
        L = t("685665"),
        r = t("956089"),
        o = t("626301"),
        l = t("789946"),
        u = t("646718"),
        i = t("49111"),
        c = t("782340"),
        d = t("421090"),
        A = t("758542"),
        M = t("746227");
      function f(e, a) {
        return (0, s.jsx)(
          r.TextBadge,
          {
            text: e,
            className: A.newBadge,
            color: _.default.unsafe_rawColors.BRAND_500.css,
          },
          a
        );
      }
      function U(e) {
        var a;
        let { guildCount: t, onClose: _, analyticsLocations: r, ...A } = e;
        let U =
            ((a = _),
            function (e, t) {
              return (0, s.jsx)(
                n.Clickable,
                {
                  className: d.learnMoreLink,
                  tag: "span",
                  onClick: () => {
                    a(), (0, o.navigateToPremiumMarketingPage)();
                  },
                  children: e,
                },
                t
              );
            }),
          { analyticsLocations: D } = (0, L.default)(r);
        return (0, s.jsx)(L.AnalyticsLocationProvider, {
          value: D,
          children: (0, s.jsx)(l.default, {
            artURL: M,
            onClose: _,
            type: u.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL,
            title: c.default.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
            body:
              t < i.MAX_USER_GUILDS
                ? c.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format(
                    { guildCount: t, onAndMore: U, newBadgeHook: f }
                  )
                : c.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format(
                    { onAndMore: U, newBadgeHook: f }
                  ),
            context:
              t < i.MAX_USER_GUILDS
                ? c.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format(
                    { guildCount: t }
                  )
                : c.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
            glowUp: c.default.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
              onAndMore: U,
            }),
            ...A,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=fadd24dc4f3a49f2d144.js.map
