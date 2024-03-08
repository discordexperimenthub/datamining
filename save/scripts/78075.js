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
          let { AnalyticsLocationProvider: i } = (0, u.default)(t);
          return (0, n.jsx)(i, { children: (0, n.jsx)(e, { ...l }) });
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
        r = l("901582"),
        o = l("158534"),
        d = l("812204"),
        a = l("861370"),
        s = l("421602"),
        c = l("806179"),
        f = l("97508"),
        M = l("49111"),
        O = l("782340"),
        h = (0, o.default)(
          function (e) {
            let { user: t, guildId: l, analyticsContext: o, onSelect: d } = e,
              h = (0, c.default)(t.id),
              E = (0, f.default)(t.id, l),
              p = (0, a.default)({
                id: t.id,
                label: O.default.Messages.COPY_ID_USER,
              }),
              x = (0, s.default)(t.id),
              R = t.isNonUserBot();
            return (0, n.jsx)(r.default, {
              context: o,
              object: M.AnalyticsObjects.CONTEXT_MENU,
              children: (0, n.jsxs)(u.Menu, {
                navId: "user-context",
                onClose: i.closeContextMenu,
                "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: d,
                children: [
                  (0, n.jsxs)(u.MenuGroup, { children: [!R && h, !R && x] }),
                  (0, n.jsx)(u.MenuGroup, { children: !R && E }),
                  (0, n.jsx)(u.MenuGroup, { children: p }),
                ],
              }),
            });
          },
          [d.default.CONTEXT_MENU, d.default.AUDIT_LOG_USER_MENU]
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
        r = l("54239"),
        o = l("271938"),
        d = l("49111"),
        a = l("782340");
      function s(e, t) {
        let l = o.default.getId(),
          s = t === d.AppContext.POPOUT;
        return l === e || s
          ? null
          : (0, n.jsx)(u.MenuItem, {
              id: "message-user",
              label: a.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                i.default.openPrivateChannel(e), (0, r.popLayer)();
              },
            });
      }
    },
    806179: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l("37983"),
        u = l("884691"),
        i = l("77078"),
        r = l("244201"),
        o = l("401642"),
        d = l("599110"),
        a = l("49111"),
        s = l("782340");
      function c(e, t, l) {
        let c = u.useContext(d.AnalyticsContext),
          f = (0, r.useWindowDispatch)();
        return (0, n.jsx)(i.MenuItem, {
          id: "user-profile",
          label: s.default.Messages.PROFILE,
          action: () => {
            (0, o.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != l ? l : void 0,
              analyticsLocation: c.location,
            }),
              f.dispatch(a.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
    97508: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return R;
          },
        });
      var n = l("37983");
      l("884691");
      var u = l("509043"),
        i = l("446674"),
        r = l("77078"),
        o = l("206230"),
        d = l("454273"),
        a = l("130037"),
        s = l("592407"),
        c = l("26989"),
        f = l("305961"),
        M = l("957255"),
        O = l("449008"),
        h = l("49111"),
        E = l("782340"),
        p = l("235324");
      function x(e, t) {
        var l, i;
        return (0, n.jsxs)("div", {
          className: p.roleRow,
          children: [
            "dot" === t
              ? (0, n.jsx)(r.RoleDot, {
                  className: p.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
                  background: !1,
                  tooltip: !1,
                })
              : (0, n.jsx)(r.RoleCircle, {
                  className: p.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
                }),
            (0, n.jsx)("div", { children: e.name }),
          ],
        });
      }
      function R(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          p = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(t),
            [t]
          ),
          R = (0, i.useStateFromStores)([o.default], () => o.default.roleStyle),
          _ = (0, a.useTrackModerationAction)(t, {
            location: u,
            targetUserId: e,
          }),
          {
            userRoles: v,
            isGuildMember: m,
            canManageRoles: g,
          } = (0, i.useStateFromStoresObject)(
            [c.default, M.default],
            () => {
              let l = c.default.getMember(t, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles:
                  null != p && M.default.can(h.Permissions.MANAGE_ROLES, p),
              };
            },
            [e, t, p]
          );
        if (__OVERLAY__ || null == v || null == p || !m) return null;
        let S = M.default.getHighestRole(p),
          b = Object.values(p.roles).filter(
            e => !(0, d.isEveryoneRoleId)(p.id, e.id)
          ),
          j = g
            ? b.map(l => {
                let u = l.managed || !M.default.isRoleHigher(p, S, l),
                  i = -1 !== v.indexOf(l.id);
                return u && !i
                  ? null
                  : (0, n.jsx)(
                      r.MenuCheckboxItem,
                      {
                        id: l.id,
                        label: () => x(l, R),
                        disabled: u,
                        action: () => {
                          var n;
                          return (
                            (n = l),
                            void (v.includes(n.id)
                              ? (s.default.updateMemberRoles(
                                  t,
                                  e,
                                  v.filter(e => e !== n.id),
                                  [],
                                  [n.id]
                                ),
                                _(a.ModerationActionType.REMOVE_ROLE))
                              : (s.default.updateMemberRoles(
                                  t,
                                  e,
                                  v.concat([n.id]),
                                  [n.id],
                                  []
                                ),
                                _(a.ModerationActionType.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      l.id
                    );
              })
            : b
                .filter(e => -1 !== v.indexOf(e.id))
                .map(e =>
                  (0, d.isEveryoneRoleId)(p.id, e.id)
                    ? null
                    : (0, n.jsx)(
                        r.MenuItem,
                        { id: e.id, label: () => x(e, R) },
                        e.id
                      )
                );
        return 0 === j.filter(O.isNotNullish).length
          ? null
          : l
            ? j
            : (0, n.jsx)(r.MenuItem, {
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
//# sourceMappingURL=d371ff4e942a9cceadbd.js.map
