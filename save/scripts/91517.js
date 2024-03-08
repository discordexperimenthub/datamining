(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91517"],
  {
    824859: function (e, t, n) {
      "use strict";
      e.exports = n.p + "21e8fbccab4a4553fc99.svg";
    },
    70919: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchRoleConnectionsConfiguration: function () {
            return l;
          },
          putRoleConnectionsConfigurations: function () {
            return r;
          },
          fetchUserApplicationRoleConnections: function () {
            return c;
          },
        });
      var s = n("872717"),
        a = n("913144"),
        i = n("895026"),
        o = n("49111");
      function l(e, t) {
        s.default
          .get({ url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t) })
          .then(e => {
            let n = [];
            e.body.length > 0 &&
              (n = e.body.map(e =>
                e.map(e => ({
                  connectionType: e.connection_type,
                  connectionMetadataField: e.connection_metadata_field,
                  applicationId: e.application_id,
                  operator: e.operator,
                  value: e.value,
                }))
              )),
              a.default.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: t,
                roleConnectionConfigurations: n,
              });
          })
          .catch(() => {});
      }
      async function r(e, t, n) {
        let l = n.map(e =>
            e.map(e => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            }))
          ),
          r = await s.default
            .put({
              url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
              body: 0 === l.length ? [] : l,
              oldFormErrors: !0,
            })
            .then(e => {
              let t = [];
              return (
                e.body.length > 0 &&
                  (t = e.body.map(e =>
                    e.map(e => ({
                      connectionType: e.connection_type,
                      connectionMetadataField: e.connection_metadata_field,
                      applicationId: e.application_id,
                      operator: e.operator,
                      value: e.value,
                    }))
                  )),
                t
              );
            }),
          c = await (0, i.requestMembersForRole)(e, t, !1);
        null != c &&
          a.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: t,
            count: c,
          }),
          a.default.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: r,
          });
      }
      async function c() {
        let e = await s.default.get({
          url: o.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS,
        });
        return e.body;
      }
    },
    675454: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007"),
        n("424973");
      var s,
        a,
        i = n("37983"),
        o = n("884691"),
        l = n("316693"),
        r = n("446674"),
        c = n("151426"),
        d = n("669491"),
        u = n("77078"),
        _ = n("592407"),
        E = n("766419"),
        I = n("978970"),
        S = n("305961"),
        N = n("124969"),
        T = n("578706"),
        O = n("68238"),
        f = n("315102"),
        p = n("991170"),
        m = n("580362"),
        A = n("49111"),
        R = n("994428"),
        M = n("69741"),
        C = n("782340"),
        L = n("793243");
      function D(e) {
        let { guild: t, headerText: s, headerSubtext: a, step: o } = e,
          l = f.default.getGuildIconURL({ id: t.id, icon: t.icon, size: 120 });
        return (0, i.jsxs)(u.ModalHeader, {
          className: L.header,
          children: [
            (0, i.jsxs)("div", {
              className: L.headerIconContainer,
              children: [
                null != l
                  ? (0, i.jsx)(u.Avatar, {
                      src: l,
                      "aria-label": t.name,
                      size: u.AvatarSizes.SIZE_120,
                      className: L.guildIcon,
                    })
                  : (0, i.jsx)("div", {
                      className: L.acronym,
                      children: t.acronym,
                    }),
                2 === o
                  ? (0, i.jsx)(T.default, {
                      className: L.greenPing,
                      color: d.default.unsafe_rawColors.GREEN_360.css,
                      backgroundColor: d.default.unsafe_rawColors.WHITE_100.css,
                    })
                  : (0, i.jsx)(N.Image, {
                      src: n("824859"),
                      className: L.redPing,
                    }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: L.headerText,
              children: [
                (0, i.jsx)(u.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children: s,
                }),
                (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        let { guild: t } = e,
          n = (0, r.useStateFromStores)([S.default], () =>
            S.default.getRole(t.id, t.getEveryoneRoleId())
          );
        if (null == n) return null;
        let { name: s, color: a } = n;
        return (0, i.jsxs)("span", {
          className: L.roleRow,
          children: [
            (0, i.jsx)(u.RoleDot, {
              className: L.roleDot,
              color: a.toString(),
              background: !1,
              tooltip: !1,
            }),
            (0, i.jsx)(u.Text, {
              className: L.roleName,
              variant: "text-sm/medium",
              color: "interactive-active",
              children: s,
            }),
          ],
        });
      }
      ((a = s || (s = {}))[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.SUBMITTING = 1)] = "SUBMITTING"),
        (a[(a.SUBMITTED = 2)] = "SUBMITTED");
      let h = e => {
        if (e.toString() === A.Permissions.MENTION_EVERYONE.toString())
          return C.default.Messages
            .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
        return (0, I.getPermissionName)(e);
      };
      function x(e) {
        let { permissions: t, step: n } = e;
        return 2 === n
          ? null
          : (0, i.jsxs)("div", {
              className: L.tableContainer,
              children: [
                (0, i.jsx)(u.Text, {
                  className: L.tableHeader,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children:
                    0 === n
                      ? C.default.Messages
                          .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS
                      : C.default.Messages
                          .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS,
                }),
                (0, i.jsx)("div", {
                  className: L.permissionsTable,
                  children: t.map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: L.permissionRow,
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              0 === n ? L.bulletPositive : L.bulletWarning,
                          }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: h(e),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            });
      }
      function g(e) {
        let { permissions: t, step: n } = e;
        return 0 === t.length && 2 !== n
          ? null
          : (2 === n && (t = M.MODERATOR_PERMISSIONS),
            (0, i.jsxs)("div", {
              className: L.tableContainer,
              children: [
                (0, i.jsx)(u.Text, {
                  className: L.tableHeader,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children:
                    2 === n
                      ? C.default.Messages
                          .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED
                      : C.default.Messages
                          .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS,
                }),
                (0, i.jsx)("div", {
                  className: L.permissionsTable,
                  children: t.map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: L.permissionRow,
                        children: [
                          (0, i.jsx)("div", { className: L.bullet }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: h(e),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }));
      }
      function v(e) {
        let { permissions: t, step: n } = e,
          { enabledPermissions: s, disabledPermissions: a } = t;
        return 0 === s.length && 2 !== n
          ? null
          : (0, i.jsxs)("div", {
              className: L.table,
              children: [
                2 !== n ? (0, i.jsx)(x, { permissions: s, step: n }) : null,
                (0, i.jsx)(g, { permissions: a, step: n }),
              ],
            });
      }
      function F(e) {
        let {
          guild: t,
          permissions: n,
          step: s,
          canEveryoneModerate: a,
          isDefaultNotificationsAllMessages: o,
        } = e;
        return (0, i.jsx)(u.ModalContent, {
          children: (0, i.jsxs)("div", {
            className: L.updatedForm,
            children: [
              o
                ? (0, i.jsxs)("div", {
                    className: L.checklistRow,
                    children: [
                      (0, i.jsx)(T.default, {
                        className: L.checklistIcon,
                        color: d.default.unsafe_rawColors.GREEN_360.css,
                        backgroundColor:
                          d.default.unsafe_rawColors.WHITE_100.css,
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children:
                          C.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format(
                            {
                              infoHook: () =>
                                (0, i.jsx)(u.Tooltip, {
                                  text: C.default.Messages
                                    .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                  "aria-label":
                                    C.default.Messages
                                      .ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                  children: e =>
                                    (0, i.jsx)(O.default, {
                                      className: L.icon,
                                      ...e,
                                    }),
                                }),
                            }
                          ),
                      }),
                    ],
                  })
                : null,
              a
                ? (0, i.jsxs)("div", {
                    className: L.checklistRow,
                    children: [
                      (0, i.jsx)(T.default, {
                        className: L.checklistIcon,
                        color: d.default.unsafe_rawColors.GREEN_360.css,
                        backgroundColor:
                          d.default.unsafe_rawColors.WHITE_100.css,
                      }),
                      (0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children:
                          C.default.Messages
                            .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED,
                      }),
                      (0, i.jsx)(U, { guild: t }),
                    ],
                  })
                : null,
              (0, i.jsx)(v, { permissions: n, step: s }),
            ],
          }),
        });
      }
      function j(e) {
        let { onConfirm: t, onDismiss: n, canEveryoneModerate: s, step: a } = e;
        return (0, i.jsxs)(u.ModalFooter, {
          className: L.footer,
          children: [
            (0, i.jsx)(u.Button, {
              onClick: t,
              submitting: 1 === a,
              children:
                0 === a
                  ? s
                    ? C.default.Messages
                        .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION
                    : C.default.Messages
                        .UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION
                  : C.default.Messages
                      .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE,
            }),
            0 === a
              ? (0, i.jsx)(u.Button, {
                  look: u.Button.Looks.LINK,
                  onClick: n,
                  color: u.Button.Colors.PRIMARY,
                  children: (0, i.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children:
                      C.default.Messages
                        .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS,
                  }),
                })
              : null,
          ],
        });
      }
      function G(e) {
        let {
            guild: t,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: s,
            transitionState: a,
            onClose: r,
          } = e,
          [d, I] = o.useState(0),
          N = o.useMemo(() => {
            let e = [],
              n = [];
            return (
              M.MODERATOR_PERMISSIONS.map(s => {
                let a = p.default.canEveryone(s, t);
                a ? e.push(s) : n.push(s);
              }),
              { enabledPermissions: e, disabledPermissions: n }
            );
          }, [t]);
        if (null == t) return null;
        let T = () => {
            let e = S.default.getRole(t.id, t.getEveryoneRoleId());
            if (null == e) return;
            let n = l.default.remove(
              e.permissions,
              M.MODERATOR_PERMISSIONS_FLAG
            );
            (0, E.saveRoleSettings)(t.id, [{ ...e, permissions: n }]);
          },
          O = () => {
            _.default.updateGuild({
              defaultMessageNotifications:
                A.UserNotificationSettings.ONLY_MENTIONS,
            }),
              _.default.saveGuild(t.id, {
                defaultMessageNotifications:
                  A.UserNotificationSettings.ONLY_MENTIONS,
              });
          },
          f = () => {
            n && T(), s && O();
          };
        return (0, i.jsxs)(u.ModalRoot, {
          transitionState: a,
          size: u.ModalSize.SMALL,
          className: L.modal,
          children: [
            (0, i.jsx)(D, {
              guild: t,
              headerText: n
                ? C.default.Messages
                    .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER
                : C.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
              headerSubtext: n
                ? C.default.Messages
                    .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER
                : C.default.Messages
                    .UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
              step: d,
            }),
            (0, i.jsx)(F, {
              guild: t,
              permissions: N,
              step: d,
              canEveryoneModerate: n,
              isDefaultNotificationsAllMessages: s,
            }),
            (0, i.jsx)(j, {
              onConfirm: () => {
                var e, s;
                !n &&
                  (f(),
                  r(),
                  (0, m.markContentAsDismissed)(
                    c.DismissibleGuildContent
                      .DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                    null !== (e = null == t ? void 0 : t.id) && void 0 !== e
                      ? e
                      : "",
                    !0,
                    R.ContentDismissActionType.PRIMARY
                  )),
                  0 === d
                    ? (I(1), setTimeout(() => I(2), 3e3))
                    : 2 === d &&
                      (f(),
                      r(),
                      (0, m.markContentAsDismissed)(
                        c.DismissibleGuildContent
                          .DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                        null !== (s = null == t ? void 0 : t.id) && void 0 !== s
                          ? s
                          : "",
                        !0,
                        R.ContentDismissActionType.PRIMARY
                      ));
              },
              onDismiss: () => {
                r(),
                  (0, m.markContentAsDismissed)(
                    c.DismissibleGuildContent
                      .DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                    t.id,
                    !0,
                    R.ContentDismissActionType.DISMISS
                  );
              },
              step: d,
              canEveryoneModerate: n,
            }),
          ],
        });
      }
    },
    766419: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateRoleSort: function () {
            return o;
          },
          init: function () {
            return l;
          },
          updateRolePermissions: function () {
            return r;
          },
          clearRolePermissions: function () {
            return c;
          },
          updateRoleName: function () {
            return d;
          },
          updateRoleColor: function () {
            return u;
          },
          toggleRoleSettings: function () {
            return _;
          },
          updateRoleIcon: function () {
            return E;
          },
          updateRoleConnectionConfigurations: function () {
            return I;
          },
          saveRoleSettings: function () {
            return S;
          },
        }),
        n("222007");
      var s = n("913144"),
        a = n("851387"),
        i = n("70919");
      function o(e) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
          roles: e,
        });
      }
      function l() {
        s.default.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
      }
      function r(e, t, n) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
          id: e,
          flag: t,
          allow: n,
        });
      }
      function c(e) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
          id: e,
        });
      }
      function d(e, t) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
          id: e,
          name: t,
        });
      }
      function u(e, t) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
          id: e,
          color: t,
        });
      }
      function _(e, t, n) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
          id: e,
          hoist: t,
          mentionable: n,
        });
      }
      function E(e, t, n) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
          id: e,
          icon: t,
          unicodeEmoji: n,
        });
      }
      function I(e, t) {
        s.default.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
          roleId: e,
          roleConnectionConfigurations: t,
        });
      }
      async function S(e, t, n, o, l) {
        s.default.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
        try {
          let s = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || "" === n.name) return s();
            await a.default
              .updateRole(e, n.id, {
                name: n.name,
                description: n.description,
                permissions: n.permissions,
                color: n.color,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji,
              })
              .then(s, s);
          };
          if (
            (null != n && n.length > 0
              ? await a.default.batchRoleUpdate(e, n).then(s, s)
              : await s(),
            null != l && null != o)
          )
            for await (let t of o) {
              let n = l.get(t);
              await (0, i.putRoleConnectionsConfigurations)(
                e,
                t,
                null != n ? n : []
              );
            }
        } catch (e) {
          var r, c;
          s.default.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
            message:
              null !==
                (c =
                  null === (r = e.body) || void 0 === r ? void 0 : r.message) &&
              void 0 !== c
                ? c
                : Object.values(e.body)[0],
          });
          return;
        }
        s.default.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
      }
    },
  },
]);
//# sourceMappingURL=abc59f3e125b60896ab3.js.map
