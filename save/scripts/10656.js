(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10656"],
  {
    555022: function (e, i, s) {
      "use strict";
      s.r(i),
        s.d(i, {
          default: function () {
            return M;
          },
        }),
        s("222007");
      var o = s("37983"),
        n = s("884691"),
        t = s("917351"),
        a = s.n(t),
        l = s("77078"),
        d = s("713841"),
        r = s("599417"),
        c = s("524768"),
        m = s("389153"),
        u = s("315102"),
        p = s("482391"),
        h = s("892692"),
        C = s("859728"),
        f = s("29106"),
        x = s("782340"),
        y = s("719039");
      function M(e) {
        let {
            applicationIcon: i,
            applicationId: s,
            applicationName: t,
            command: u,
            guildId: M,
            onClose: A,
            transitionState: E,
          } = e,
          [I, j] = n.useState(null),
          [N, P] = n.useState(!1),
          {
            originalApplicationPermissions: k,
            originalCommandPermissions: S,
            editedTargetPermissions: g,
            hasChanges: b,
            selectedPermissionCount: R,
          } = (0, C.default)(M, s, u.id),
          O = n.useCallback(async () => {
            var e, i, o, n, t;
            if (!b) {
              A();
              return;
            }
            let l = a.difference(
                Object.keys(
                  null !== (o = u.permissions) && void 0 !== o ? o : {}
                ),
                Object.keys(g)
              ),
              d = a.omit({ ...g }, l),
              C = (0, m.allChannelsSentinel)(M),
              f = (0, h.toPermissionKey)(
                M,
                c.ApplicationCommandPermissionType.ROLE
              ),
              x = (0, h.toPermissionKey)(
                C,
                c.ApplicationCommandPermissionType.CHANNEL
              ),
              y =
                null ===
                  (n =
                    null === (e = k[f]) || void 0 === e
                      ? void 0
                      : e.permission) ||
                void 0 === n ||
                n,
              v =
                null ===
                  (t =
                    null === (i = k[x]) || void 0 === i
                      ? void 0
                      : i.permission) ||
                void 0 === t ||
                t,
              E = Object.values(d).map(e => ({
                id: e.id,
                permission: e.permission,
                type: e.type,
              }));
            j(null), P(!0);
            try {
              await p.updateApplicationCommandPermissions({
                defaultEveryoneValue: y,
                defaultEverywhereValue: v,
                applicationId: s,
                commandId: u.id,
                guildId: M,
                permissions: E,
              }),
                P(!1),
                A();
            } catch (e) {
              j(new r.default(e));
            }
            P(!1);
          }, [s, k, u.id, u.permissions, M, b, A, g, j, P]);
        n.useEffect(
          () => () => {
            p.resetPermissions(u.id),
              d.default.stopEditingCommandPermissions(u.id);
          },
          [u.id]
        );
        let B = (0, h.commandName)(u.type, u.displayName);
        return (0, o.jsxs)(l.ModalRoot, {
          "aria-label":
            x.default.Messages
              .INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
          size: l.ModalSize.MEDIUM,
          transitionState: E,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              separator: !1,
              className: y.modalHeader,
              children: [
                (0, o.jsx)(v, { icon: i, id: s, name: t }),
                (0, o.jsxs)("div", {
                  className: y.headerDescription,
                  children: [
                    (0, o.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      children: B,
                    }),
                    (0, o.jsx)(l.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: u.displayDescription,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(l.ModalContent, {
              className: y.modalBody,
              children: [
                null == I || I.hasFieldErrors()
                  ? null
                  : (0, o.jsx)(l.FormErrorBlock, {
                      children: I.getAnyErrorMessage(),
                    }),
                (0, o.jsx)(f.default, {
                  applicationId: s,
                  commandId: u.id,
                  guildId: M,
                  inModal: !0,
                  originalApplicationPermissions: k,
                  originalCommandPermissions: S,
                  editedTargetPermissions: g,
                  selectedPermissionCount: R,
                }),
              ],
            }),
            (0, o.jsxs)(l.ModalFooter, {
              className: y.modalFooter,
              children: [
                (0, o.jsx)(l.Button, {
                  type: "submit",
                  disabled: N,
                  onClick: O,
                  color:
                    !0 === b ? l.Button.Colors.GREEN : l.Button.Colors.PRIMARY,
                  children: x.default.Messages.SAVE,
                }),
                (0, o.jsx)(l.Button, {
                  onClick: A,
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  children: x.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { icon: i, id: s } = e,
          n = u.default.getApplicationIconURL({ id: s, icon: i, size: 40 });
        return (0, o.jsx)(l.Avatar, {
          src: n,
          size: l.AvatarSizes.SIZE_40,
          "aria-hidden": !0,
        });
      }
    },
  },
]);
//# sourceMappingURL=f47be6f466efaaba944c.js.map
