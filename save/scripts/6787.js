(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6787"],
  {
    562353: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("77078"),
        u = a("272030"),
        o = a("539405"),
        r = a("819068"),
        l = a("782340");
      function i(e) {
        let { onSelect: t } = e;
        return (0, n.jsx)(s.Menu, {
          navId: "overlay",
          onClose: u.closeContextMenu,
          "aria-label": l.default.Messages.OVERLAY_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: (0, n.jsx)(s.MenuItem, {
            id: "reset",
            label: l.default.Messages.OVERLAY_RESET_DEFAULT_LAYOUT,
            action: e => {
              e.stopPropagation(),
                o.default.resetDefaultLayout(r.OVERLAY_LAYOUT_ID);
            },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=da391db0b15c809a0663.js.map
