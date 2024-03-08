(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24489"],
  {
    367289: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var a = t("37983");
      t("884691");
      var i = t("281071"),
        l = t("65597"),
        o = t("77078"),
        s = t("272030"),
        c = t("716241"),
        u = t("957255"),
        d = t("599110"),
        r = t("404008"),
        _ = t("500307"),
        p = t("49111"),
        C = t("724210"),
        I = t("782340");
      function h(e) {
        let { guild: n, onSelect: t } = e,
          h = (0, l.default)(
            [u.default],
            () => null != n && u.default.can(p.Permissions.ADMINISTRATOR, n)
          );
        return (0, a.jsx)(o.Menu, {
          navId: "guild-shop-context",
          "aria-label":
            I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
          onClose: s.closeContextMenu,
          onSelect: t,
          children: (0, a.jsx)(o.MenuGroup, {
            children: (0, a.jsx)(o.MenuItem, {
              id: "role-subscription-copy-link",
              label: I.default.Messages.COPY_LINK,
              action: () => {
                d.default.track(p.AnalyticEvents.GUILD_SHOP_COPY_LINK, {
                  ...(0, c.collectGuildAnalyticsMetadata)(n.id),
                  is_admin_or_owner: h,
                  copy_location:
                    _.GuildShopCopyLinkLocations.CHANNEL_ROW_CONTEXT_MENU,
                }),
                  (0, i.copy)(
                    (0, r.getChannelPermalink)(
                      n.id,
                      C.StaticChannelRoute.GUILD_SHOP
                    )
                  );
              },
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=769ab258b114bf3f4448.js.map
