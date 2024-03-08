(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51146"],
  {
    838446: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r("37983");
      r("884691");
      var u = r("901582");
      function c(e, t) {
        return function (r) {
          return (0, n.jsx)(u.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, n.jsx)(e, { ...r }),
          });
        };
      }
    },
    95086: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r("37983");
      r("884691");
      var u = r("446674"),
        c = r("77078"),
        a = r("272030"),
        o = r("838446"),
        s = r("379881"),
        i = r("200008"),
        d = r("49111"),
        l = r("782340"),
        f = (0, o.default)(
          function (e) {
            let { onSelect: t } = e,
              r = (0, u.useStateFromStores)(
                [s.default],
                () => s.default.favoriteServerMuted
              );
            return (0, n.jsx)(c.Menu, {
              navId: "favorite-server-context",
              onClose: a.closeContextMenu,
              "aria-label": l.default.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: t,
              children: (0, n.jsx)(c.MenuGroup, {
                children: (0, n.jsx)(c.MenuCheckboxItem, {
                  id: "mute-server",
                  label: l.default.Messages.MUTE_SERVER,
                  action: () => (0, i.toggleFavoriteServerMuted)(),
                  checked: r,
                }),
              }),
            });
          },
          { object: d.AnalyticsObjects.CONTEXT_MENU }
        );
    },
  },
]);
//# sourceMappingURL=8fb89efbdecd7b54ce58.js.map
