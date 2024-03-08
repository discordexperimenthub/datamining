(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51572"],
  {
    609516: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return r;
          },
        });
      var n = t("37983");
      t("884691");
      var s = t("77078"),
        u = t("272030"),
        c = t("782340"),
        r = e => {
          let { changeAvatarAction: a, changeDecorationAction: t } = e;
          return (0, n.jsxs)(s.Menu, {
            onClose: u.closeContextMenu,
            onSelect: u.closeContextMenu,
            navId: "user-settings-change-avatar",
            "aria-label": c.default.Messages.USER_SETTINGS_CHANGE_AVATAR,
            children: [
              (0, n.jsx)(s.MenuItem, {
                action: a,
                id: "change-avatar",
                label: c.default.Messages.USER_SETTINGS_CHANGE_AVATAR,
              }),
              (0, n.jsx)(s.MenuItem, {
                action: t,
                id: "change-avatar-decoration",
                label:
                  c.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=191bc232050ff3c27c2d.js.map
