(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15128"],
  {
    232006: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, {
          default: function () {
            return c;
          },
        });
      var t = o("37983");
      o("884691");
      var l = o("77078"),
        s = o("272030"),
        a = o("782340");
      function c(e) {
        let { roleId: n, onLeaveRole: o, onSelect: c } = e;
        return (0, t.jsx)(
          l.Menu,
          {
            navId: "guild-role-connections-context",
            "aria-label":
              a.default.Messages.CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
            onClose: s.closeContextMenu,
            onSelect: c,
            children: (0, t.jsx)(l.MenuGroup, {
              children: (0, t.jsx)(
                l.MenuItem,
                {
                  id: "guild-role-connections-leave-role",
                  label:
                    a.default.Messages
                      .CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
                  action: o,
                  color: "danger",
                },
                n
              ),
            }),
          },
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=a1661db937921bad2edc.js.map
