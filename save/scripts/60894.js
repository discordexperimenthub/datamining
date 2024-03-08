(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60894"],
  {
    343600: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return R;
          },
        }),
        a("424973");
      var t = a("37983"),
        i = a("884691"),
        l = a("316693"),
        n = a("77078"),
        r = a("978970"),
        o = a("315102"),
        d = a("991170"),
        c = a("766419"),
        m = a("49111"),
        u = a("69741"),
        x = a("782340"),
        E = a("231805");
      function S(e) {
        let { guild: s } = e,
          a = o.default.getGuildIconURL({ id: s.id, icon: s.icon, size: 120 });
        return (0, t.jsxs)(n.ModalHeader, {
          className: E.header,
          children: [
            (0, t.jsx)("div", {
              className: E.headerIconContainer,
              children:
                null != a
                  ? (0, t.jsx)(n.Avatar, {
                      src: a,
                      "aria-label": s.name,
                      size: n.AvatarSizes.SIZE_120,
                      className: E.guildIcon,
                    })
                  : (0, t.jsx)("div", {
                      className: E.acronym,
                      children: s.acronym,
                    }),
            }),
            (0, t.jsxs)("div", {
              className: E.headerText,
              children: [
                (0, t.jsx)(n.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children:
                    x.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_TITLE,
                }),
                (0, t.jsx)(n.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children:
                    x.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_SUBTITLE,
                }),
              ],
            }),
          ],
        });
      }
      let N = e => {
        if (e.toString() === m.Permissions.MENTION_EVERYONE.toString())
          return x.default.Messages
            .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
        return (0, r.getPermissionName)(e);
      };
      function I(e) {
        let { permissions: s } = e;
        return (0, t.jsxs)("div", {
          className: E.tableContainer,
          children: [
            (0, t.jsx)(n.Text, {
              className: E.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                x.default.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS,
            }),
            (0, t.jsx)("div", {
              className: E.permissionsTable,
              children: s.map((e, s) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: E.permissionRow,
                    children: [
                      (0, t.jsx)("div", { className: E.bulletWarning }),
                      (0, t.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: N(e),
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
      function _(e) {
        let { permissions: s } = e;
        return (0, t.jsxs)("div", {
          className: E.tableContainer,
          children: [
            (0, t.jsx)(n.Text, {
              className: E.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                x.default.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS,
            }),
            (0, t.jsx)("div", {
              className: E.permissionsTable,
              children: s.map((e, s) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: E.permissionRow,
                    children: [
                      (0, t.jsx)("div", { className: E.bullet }),
                      (0, t.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: N(e),
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
        let { permissions: s } = e,
          { enabledPermissions: a, disabledPermissions: i } = s;
        return (0, t.jsx)(n.ModalContent, {
          children: (0, t.jsxs)("div", {
            className: E.table,
            children: [
              (0, t.jsx)(I, { permissions: a }),
              (0, t.jsx)(_, { permissions: i }),
            ],
          }),
        });
      }
      function h(e) {
        let { onConfirm: s, onDismiss: a } = e;
        return (0, t.jsxs)(n.ModalFooter, {
          className: E.footer,
          children: [
            (0, t.jsx)(n.Button, {
              onClick: s,
              children:
                x.default.Messages
                  .UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION,
            }),
            (0, t.jsx)(n.Button, {
              look: n.Button.Looks.LINK,
              onClick: a,
              color: n.Button.Colors.PRIMARY,
              children: (0, t.jsx)(n.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children:
                  x.default.Messages
                    .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS,
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { guild: s, transitionState: a, onClose: r } = e,
          o = i.useMemo(() => {
            let e = [],
              a = [];
            return (
              u.MODERATOR_PERMISSIONS.map(t => {
                let i = d.default.canEveryone(t, s);
                i ? e.push(t) : a.push(t);
              }),
              { enabledPermissions: e, disabledPermissions: a }
            );
          }, [s]);
        if (null == s) return null;
        let m = async () => {
          let e = null == s ? void 0 : s.getRole(s.getEveryoneRoleId());
          if (null == e) return;
          let a = l.default.remove(e.permissions, u.MODERATOR_PERMISSIONS_FLAG);
          await (0, c.saveRoleSettings)(s.id, [{ ...e, permissions: a }]), r();
        };
        return (0, t.jsxs)(n.ModalRoot, {
          transitionState: a,
          size: n.ModalSize.SMALL,
          className: E.modal,
          children: [
            (0, t.jsx)(S, { guild: s }),
            (0, t.jsx)(M, { permissions: o }),
            (0, t.jsx)(h, {
              onConfirm: m,
              onDismiss: () => {
                r();
              },
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=2bc5ba54bebb1b33ea18.js.map
