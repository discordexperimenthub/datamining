(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91918"],
  {
    51707: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return c;
          },
        });
      var n = t("37983");
      t("884691");
      var s = t("77078"),
        d = t("272030"),
        l = t("861370"),
        u = t("549103"),
        o = t("393414"),
        i = t("162771"),
        r = t("49111"),
        E = t("782340");
      function c(e) {
        let { guild: a, onSelect: t } = e,
          c = a.id,
          f = (0, l.default)({
            id: a.id,
            label: E.default.Messages.COPY_ID_GUILD,
          }),
          M = () => {
            u.default.removeGuildJoinRequest(c),
              i.default.getGuildId() === c && (0, o.transitionTo)(r.Routes.ME);
          };
        return (0, n.jsxs)(s.Menu, {
          navId: "join-request-guild-context",
          onClose: d.closeContextMenu,
          "aria-label": E.default.Messages.GUILD_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, n.jsx)(s.MenuItem, {
              id: "leave-guild",
              label: E.default.Messages.LEAVE_SERVER,
              action: () => {
                (0, s.openModal)(e =>
                  (0, n.jsx)(s.ConfirmModal, {
                    header: E.default.Messages.LEAVE_SERVER_TITLE.format({
                      name: a.name,
                    }),
                    confirmText: E.default.Messages.LEAVE_SERVER,
                    cancelText: E.default.Messages.CANCEL,
                    onConfirm: M,
                    ...e,
                    children: (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: E.default.Messages.LEAVE_SERVER_BODY.format({
                        name: a.name,
                      }),
                    }),
                  })
                );
              },
              color: "danger",
            }),
            (0, n.jsx)(s.MenuGroup, { children: f }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=608a2943124eb7595306.js.map
