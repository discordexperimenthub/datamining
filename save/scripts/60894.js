(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60894"],
  {
    343600: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return j;
          },
        }),
        a("424973");
      var t = a("37983"),
        i = a("884691"),
        n = a("316693"),
        r = a("77078"),
        l = a("978970"),
        o = a("305961"),
        d = a("315102"),
        c = a("991170"),
        m = a("766419"),
        u = a("49111"),
        x = a("69741"),
        E = a("782340"),
        S = a("231805");
      function N(e) {
        let { guild: s } = e,
          a = d.default.getGuildIconURL({ id: s.id, icon: s.icon, size: 120 });
        return (0, t.jsxs)(r.ModalHeader, {
          className: S.header,
          children: [
            (0, t.jsx)("div", {
              className: S.headerIconContainer,
              children:
                null != a
                  ? (0, t.jsx)(r.Avatar, {
                      src: a,
                      "aria-label": s.name,
                      size: r.AvatarSizes.SIZE_120,
                      className: S.guildIcon,
                    })
                  : (0, t.jsx)("div", {
                      className: S.acronym,
                      children: s.acronym,
                    }),
            }),
            (0, t.jsxs)("div", {
              className: S.headerText,
              children: [
                (0, t.jsx)(r.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children:
                    E.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_TITLE,
                }),
                (0, t.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children:
                    E.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_SUBTITLE,
                }),
              ],
            }),
          ],
        });
      }
      let I = e => {
        if (e.toString() === u.Permissions.MENTION_EVERYONE.toString())
          return E.default.Messages
            .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
        return (0, l.getPermissionName)(e);
      };
      function _(e) {
        let { permissions: s } = e;
        return (0, t.jsxs)("div", {
          className: S.tableContainer,
          children: [
            (0, t.jsx)(r.Text, {
              className: S.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                E.default.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS,
            }),
            (0, t.jsx)("div", {
              className: S.permissionsTable,
              children: s.map((e, s) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: S.permissionRow,
                    children: [
                      (0, t.jsx)("div", { className: S.bulletWarning }),
                      (0, t.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: I(e),
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          ],
        });
      }
      function M(e) {
        let { permissions: s } = e;
        return (0, t.jsxs)("div", {
          className: S.tableContainer,
          children: [
            (0, t.jsx)(r.Text, {
              className: S.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                E.default.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS,
            }),
            (0, t.jsx)("div", {
              className: S.permissionsTable,
              children: s.map((e, s) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: S.permissionRow,
                    children: [
                      (0, t.jsx)("div", { className: S.bullet }),
                      (0, t.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I(e),
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          ],
        });
      }
      function h(e) {
        let { permissions: s } = e,
          { enabledPermissions: a, disabledPermissions: i } = s;
        return (0, t.jsx)(r.ModalContent, {
          children: (0, t.jsxs)("div", {
            className: S.table,
            children: [
              (0, t.jsx)(_, { permissions: a }),
              (0, t.jsx)(M, { permissions: i }),
            ],
          }),
        });
      }
      function R(e) {
        let { onConfirm: s, onDismiss: a } = e;
        return (0, t.jsxs)(r.ModalFooter, {
          className: S.footer,
          children: [
            (0, t.jsx)(r.Button, {
              onClick: s,
              children:
                E.default.Messages
                  .UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION,
            }),
            (0, t.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              onClick: a,
              color: r.Button.Colors.PRIMARY,
              children: (0, t.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children:
                  E.default.Messages
                    .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS,
              }),
            }),
          ],
        });
      }
      function j(e) {
        let { guild: s, transitionState: a, onClose: l } = e,
          d = i.useMemo(() => {
            let e = [],
              a = [];
            return (
              x.MODERATOR_PERMISSIONS.map(t => {
                let i = c.canEveryone(t, s);
                i ? e.push(t) : a.push(t);
              }),
              { enabledPermissions: e, disabledPermissions: a }
            );
          }, [s]);
        if (null == s) return null;
        let u = async () => {
          let e =
            null != s ? o.default.getRole(s.id, s.getEveryoneRoleId()) : void 0;
          if (null == e) return;
          let a = n.remove(e.permissions, x.MODERATOR_PERMISSIONS_FLAG);
          await (0, m.saveRoleSettings)(s.id, [{ ...e, permissions: a }]), l();
        };
        return (0, t.jsxs)(r.ModalRoot, {
          transitionState: a,
          size: r.ModalSize.SMALL,
          className: S.modal,
          children: [
            (0, t.jsx)(N, { guild: s }),
            (0, t.jsx)(h, { permissions: d }),
            (0, t.jsx)(R, {
              onConfirm: u,
              onDismiss: () => {
                l();
              },
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=6b6f3e1f798fcf68b71c.js.map
