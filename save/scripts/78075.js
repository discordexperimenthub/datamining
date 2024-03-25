(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78075"],
  {
    158534: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983");
      l("884691");
      var u = l("685665");
      function i(e, t) {
        return function (l) {
          let { analyticsLocations: i } = (0, u.default)(t);
          return (0, n.jsx)(u.AnalyticsLocationProvider, {
            value: i,
            children: (0, n.jsx)(e, { ...l }),
          });
        };
      }
    },
    471085: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var n = l("37983");
      l("884691");
      var u = l("77078"),
        i = l("272030"),
        o = l("901582"),
        r = l("158534"),
        a = l("812204"),
        d = l("861370"),
        s = l("421602"),
        c = l("806179"),
        f = l("97508"),
        M = l("49111"),
        O = l("782340"),
        h = (0, r.default)(
          function (e) {
            let { user: t, guildId: l, analyticsContext: r, onSelect: a } = e,
              h = (0, c.default)(t.id),
              E = (0, f.default)(t.id, l),
              R = (0, d.default)({
                id: t.id,
                label: O.default.Messages.COPY_ID_USER,
              }),
              p = (0, s.default)(t.id),
              v = t.isNonUserBot();
            return (0, n.jsx)(o.default, {
              context: r,
              object: M.AnalyticsObjects.CONTEXT_MENU,
              children: (0, n.jsxs)(u.Menu, {
                navId: "user-context",
                onClose: i.closeContextMenu,
                "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: a,
                children: [
                  (0, n.jsxs)(u.MenuGroup, { children: [!v && h, !v && p] }),
                  (0, n.jsx)(u.MenuGroup, { children: !v && E }),
                  (0, n.jsx)(u.MenuGroup, { children: R }),
                ],
              }),
            });
          },
          [a.default.CONTEXT_MENU, a.default.AUDIT_LOG_USER_MENU]
        );
    },
    421602: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var u = l("77078"),
        i = l("450911"),
        o = l("54239"),
        r = l("271938"),
        a = l("49111"),
        d = l("782340");
      function s(e, t) {
        let l = r.default.getId(),
          s = t === a.AppContext.POPOUT;
        return l === e || s
          ? null
          : (0, n.jsx)(u.MenuItem, {
              id: "message-user",
              label: d.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                i.default.openPrivateChannel(e), (0, o.popLayer)();
              },
            });
      }
    },
    806179: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983"),
        u = l("884691"),
        i = l("77078"),
        o = l("244201"),
        r = l("685665"),
        a = l("401642"),
        d = l("599110"),
        s = l("49111"),
        c = l("782340");
      function f(e, t, l) {
        let f = u.useContext(d.AnalyticsContext),
          { analyticsLocations: M } = (0, r.default)(),
          O = (0, o.useWindowDispatch)();
        return (0, n.jsx)(i.MenuItem, {
          id: "user-profile",
          label: c.default.Messages.PROFILE,
          action: () => {
            (0, a.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != l ? l : void 0,
              sourceAnalyticsLocations: M,
              analyticsLocation: f.location,
            }),
              O.dispatch(s.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
    97508: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        });
      var n = l("37983");
      l("884691");
      var u = l("509043"),
        i = l("446674"),
        o = l("77078"),
        r = l("206230"),
        a = l("454273"),
        d = l("130037"),
        s = l("592407"),
        c = l("26989"),
        f = l("305961"),
        M = l("957255"),
        O = l("449008"),
        h = l("49111"),
        E = l("782340"),
        R = l("235324");
      function p(e, t) {
        var l, i;
        return (0, n.jsxs)("div", {
          className: R.roleRow,
          children: [
            "dot" === t
              ? (0, n.jsx)(o.RoleDot, {
                  className: R.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
                  background: !1,
                  tooltip: !1,
                })
              : (0, n.jsx)(o.RoleCircle, {
                  className: R.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
                }),
            (0, n.jsx)("div", { children: e.name }),
          ],
        });
      }
      function v(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          R = (0, i.useStateFromStores)([f.default], () =>
            f.default.getGuild(t)
          ),
          v = (0, i.useStateFromStores)([f.default], () =>
            f.default.getRoles(t)
          ),
          x = (0, i.useStateFromStores)([r.default], () => r.default.roleStyle),
          _ = (0, d.useTrackModerationAction)(t, {
            location: u,
            targetUserId: e,
          }),
          {
            userRoles: m,
            isGuildMember: g,
            canManageRoles: S,
          } = (0, i.useStateFromStoresObject)(
            [c.default, M.default],
            () => {
              let l = c.default.getMember(t, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles:
                  null != R && M.default.can(h.Permissions.MANAGE_ROLES, R),
              };
            },
            [e, t, R]
          );
        if (__OVERLAY__ || null == m || null == R || !g) return null;
        let L = M.default.getHighestRole(R),
          b = Object.values(v).filter(
            e => !(0, a.isEveryoneRoleId)(R.id, e.id)
          ),
          j = S
            ? b.map(l => {
                let u = l.managed || !M.default.isRoleHigher(R, L, l),
                  i = -1 !== m.indexOf(l.id);
                return u && !i
                  ? null
                  : (0, n.jsx)(
                      o.MenuCheckboxItem,
                      {
                        id: l.id,
                        label: () => p(l, x),
                        disabled: u,
                        action: () => {
                          var n;
                          return (
                            (n = l),
                            void (m.includes(n.id)
                              ? (s.default.updateMemberRoles(
                                  t,
                                  e,
                                  m.filter(e => e !== n.id),
                                  [],
                                  [n.id]
                                ),
                                _(d.ModerationActionType.REMOVE_ROLE))
                              : (s.default.updateMemberRoles(
                                  t,
                                  e,
                                  m.concat([n.id]),
                                  [n.id],
                                  []
                                ),
                                _(d.ModerationActionType.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      l.id
                    );
              })
            : b
                .filter(e => -1 !== m.indexOf(e.id))
                .map(e =>
                  (0, a.isEveryoneRoleId)(R.id, e.id)
                    ? null
                    : (0, n.jsx)(
                        o.MenuItem,
                        { id: e.id, label: () => p(e, x) },
                        e.id
                      )
                );
        return 0 === j.filter(O.isNotNullish).length
          ? null
          : l
            ? j
            : (0, n.jsx)(o.MenuItem, {
                id: "roles",
                label: E.default.Messages.ROLES_LIST.format({
                  numRoles: j.length,
                }),
                children: j,
              });
      }
    },
  },
]);
//# sourceMappingURL=f025a110de093640e2ad.js.map
