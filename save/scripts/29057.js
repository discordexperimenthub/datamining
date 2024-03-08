(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29057"],
  {
    867195: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var u = t("37983");
      t("884691");
      var i = t("77078"),
        s = t("272030"),
        r = t("633188"),
        a = t("351653"),
        l = t("782340");
      function o(e) {
        let { guild: n, onSelect: t } = e,
          o = (0, a.default)(n),
          c = (0, r.default)(n.id);
        return (0, u.jsx)(i.Menu, {
          navId: "role-subscription-context",
          "aria-label":
            l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
          onClose: s.closeContextMenu,
          onSelect: t,
          children: (0, u.jsxs)(i.MenuGroup, { children: [o, c] }),
        });
      }
    },
    633188: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var u = t("37983");
      t("884691");
      var i = t("281071"),
        s = t("77078"),
        r = t("404008"),
        a = t("724210"),
        l = t("782340");
      function o(e) {
        return (0, u.jsx)(s.MenuItem, {
          id: "role-subscription-copy-link",
          label: l.default.Messages.COPY_LINK,
          action: () => {
            (0, i.copy)(
              (0, r.getChannelPermalink)(
                e,
                a.StaticChannelRoute.ROLE_SUBSCRIPTIONS
              )
            );
          },
        });
      }
    },
    351653: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var u = t("37983");
      t("884691");
      var i = t("77078"),
        s = t("592407"),
        r = t("65722"),
        a = t("49111"),
        l = t("782340");
      function o(e) {
        let n = (0, r.useCanManageGuildRoleSubscriptions)(e);
        return n
          ? (0, u.jsx)(i.MenuItem, {
              id: "role-subscription-settings",
              label: l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_EDIT_SETTINGS,
              action: () => {
                s.default.open(
                  e.id,
                  a.GuildSettingsSections.ROLE_SUBSCRIPTIONS
                );
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=c744217bcd9ddfbf8dfb.js.map
