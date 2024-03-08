(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36449"],
  {
    824527: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var t = l("446674"),
        s = l("77078"),
        d = l("272030"),
        u = l("59811"),
        o = l("782340"),
        i = e => {
          var a;
          let {
              guildId: i,
              welcomeChannel: _,
              onEdit: E,
              onChannelReorder: c,
              setShowConfirmModal: r,
              index: I,
              onSelect: M,
            } = e,
            L = (0, t.useStateFromStores)([u.default], () => u.default.get(i)),
            C =
              null !== (a = null == L ? void 0 : L.welcome_channels) &&
              void 0 !== a
                ? a
                : [],
            N = C.length - 1,
            S = e => {
              c(_, e, !0);
            };
          return (0, n.jsxs)(s.Menu, {
            navId: "welcome-settings-context",
            "aria-label": o.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: d.closeContextMenu,
            onSelect: M,
            children: [
              (0, n.jsxs)(s.MenuGroup, {
                children: [
                  (0, n.jsx)(s.MenuItem, {
                    id: "move-up",
                    label:
                      o.default.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_UP,
                    disabled: I <= 0,
                    action: () => S(I - 1),
                  }),
                  (0, n.jsx)(s.MenuItem, {
                    id: "move-down",
                    label:
                      o.default.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_DOWN,
                    disabled: I > N,
                    action: () => S(I + 1),
                  }),
                ],
              }),
              (0, n.jsxs)(s.MenuGroup, {
                children: [
                  (0, n.jsx)(s.MenuItem, {
                    id: "edit",
                    label:
                      o.default.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_EDIT,
                    action: () =>
                      (0, s.openModalLazy)(async () => {
                        let { default: e } = await l
                          .el("277432")
                          .then(l.bind(l, "277432"));
                        return a =>
                          (0, n.jsx)(e, {
                            ...a,
                            welcomeChannel: _,
                            guildId: i,
                            onSave: E,
                          });
                      }),
                  }),
                  (0, n.jsx)(s.MenuItem, {
                    id: "delete",
                    label:
                      o.default.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DELETE,
                    action: () => r(!0),
                    color: "danger",
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=7b90c3ca5efe824f3378.js.map
