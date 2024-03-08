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
        L = t("77078"),
        n = t("685665"),
        r = t("956089"),
        o = t("626301"),
        u = t("789946"),
        l = t("646718"),
        d = t("49111"),
        A = t("782340"),
        M = t("421090"),
        c = t("758542"),
        f = t("746227");
      function i(e, a) {
        return (0, s.jsx)(
          r.TextBadge,
          {
            text: e,
            className: c.newBadge,
            color: _.default.unsafe_rawColors.BRAND_500.css,
          },
          a
        );
      }
      function U(e) {
        var a;
        let { guildCount: t, onClose: _, analyticsLocations: r, ...c } = e;
        let U =
            ((a = _),
            function (e, t) {
              return (0, s.jsx)(
                L.Clickable,
                {
                  className: M.learnMoreLink,
                  tag: "span",
                  onClick: () => {
                    a(), (0, o.navigateToPremiumMarketingPage)();
                  },
                  children: e,
                },
                t
              );
            }),
          { AnalyticsLocationProvider: D } = (0, n.default)(r);
        return (0, s.jsx)(D, {
          children: (0, s.jsx)(u.default, {
            artURL: f,
            onClose: _,
            type: l.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL,
            title: A.default.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
            body:
              t < d.MAX_USER_GUILDS
                ? A.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format(
                    { guildCount: t, onAndMore: U, newBadgeHook: i }
                  )
                : A.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format(
                    { onAndMore: U, newBadgeHook: i }
                  ),
            context:
              t < d.MAX_USER_GUILDS
                ? A.default.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format(
                    { guildCount: t }
                  )
                : A.default.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
            glowUp: A.default.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
              onAndMore: U,
            }),
            ...c,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=28dde8ad0f719185f324.js.map
