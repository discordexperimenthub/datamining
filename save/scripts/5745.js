(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5745"],
  {
    158534: function (e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, {
          default: function () {
            return u;
          },
        });
      var t = a("37983");
      a("884691");
      var s = a("685665");
      function u(e, n) {
        return function (a) {
          let { AnalyticsLocationProvider: u } = (0, s.default)(n);
          return (0, t.jsx)(u, { children: (0, t.jsx)(e, { ...a }) });
        };
      }
    },
    425630: function (e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, {
          default: function () {
            return o;
          },
        });
      var t = a("37983");
      a("884691");
      var s = a("77078"),
        u = a("272030"),
        l = a("158534"),
        r = a("812204"),
        c = a("861370"),
        d = a("47006"),
        i = a("782340"),
        o = (0, l.default)(
          function (e) {
            let { channel: n, onSelect: a } = e,
              l = (0, d.default)(n),
              r = (0, c.default)({
                id: n.id,
                label: i.default.Messages.COPY_ID_CHANNEL,
              });
            return (0, t.jsxs)(s.Menu, {
              navId: "channel-context",
              onClose: u.closeContextMenu,
              "aria-label": i.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: a,
              children: [
                (0, t.jsx)(s.MenuGroup, { children: l }),
                (0, t.jsx)(s.MenuGroup, { children: r }),
              ],
            });
          },
          [
            r.default.CONTEXT_MENU,
            r.default.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU,
          ]
        );
    },
    47006: function (e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, {
          default: function () {
            return i;
          },
        });
      var t = a("37983");
      a("884691");
      var s = a("446674"),
        u = a("77078"),
        l = a("18054"),
        r = a("957255"),
        c = a("49111"),
        d = a("782340");
      function i(e) {
        let {
          canManageChannels: n,
          canManageRoles: a,
          canManageWebhooks: i,
          canAccessChannel: o,
        } = (0, s.useStateFromStoresObject)(
          [r.default],
          () => ({
            canManageChannels: r.default.can(c.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: r.default.can(c.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: r.default.can(c.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: r.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && o && (n || a || i)
          ? (0, t.jsx)(u.MenuItem, {
              id: "edit-channel",
              label:
                e.type === c.ChannelTypes.GUILD_CATEGORY
                  ? d.default.Messages.EDIT_CATEGORY
                  : d.default.Messages.EDIT_CHANNEL,
              action: () => l.default.open(e.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=e3929342149aac007d47.js.map
