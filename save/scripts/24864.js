(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24864"],
  {
    840489: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return _;
          },
        }),
        a("222007"),
        a("424973"),
        a("808653");
      var s = a("37983"),
        t = a("884691"),
        o = a("414456"),
        r = a.n(o),
        i = a("316693"),
        n = a("446674"),
        d = a("77078"),
        u = a("318738"),
        c = a("798609"),
        N = a("454273"),
        O = a("305961"),
        v = a("991170"),
        R = a("713955"),
        f = a("782340"),
        m = a("623929");
      function h(e) {
        return l => null != l && !(0, N.isEveryoneRoleId)(e, l);
      }
      let E = (e, l, a) => {
          let s = v.default.canEveryoneRole(a, l),
            [o, r] = t.useState(s);
          return { shouldEveryonePost: o, setShouldEveryonePost: r };
        },
        S = e => {
          let { rolesRow: l } = e;
          return (0, s.jsx)("div", {
            "aria-hidden": !0,
            className: m.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString },
          });
        };
      var _ = e => {
        let {
            guild: l,
            channel: a,
            permission: o,
            onClose: _,
            transitionState: M,
            currentSelectedRoles: p = [],
          } = e,
          { shouldEveryonePost: I, setShouldEveryonePost: x } = E(l, a, o),
          A = t.useRef(null),
          L = (function (e) {
            let l = (0, n.useStateFromStores)([O.default], () =>
              O.default.getRoles(e.id)
            );
            return t.useMemo(
              () => (0, R.getAllRolesRows)(e, l).filter(l => h(e.id)(l.id)),
              [e, l]
            );
          })(l),
          C = L.reduce((e, l) => (e.set(l.id, l), e), new Map()),
          g = L.map(e => ({ key: e.key, label: e.name, value: e.id })),
          [w, j] = t.useState(p.map(e => e.id).filter(h(l.id))),
          [y, D] = t.useState(!1),
          [B, P] = t.useState(!1),
          b = w.length > 0 || I,
          T = (function (e, l) {
            let a = (0, n.useStateFromStores)([O.default], () =>
              O.default.getRoles(e.id)
            );
            return t.useCallback(
              (s, t) => {
                let o = (0, R.getAllRolesRows)(e, a),
                  r = new Set(t),
                  n = { ...l.permissionOverwrites },
                  d = [],
                  O = [];
                return (
                  o.forEach(l => {
                    var a, t, o, u, R, f, m, h, E, S;
                    let _ = l.id,
                      M = r.has(_);
                    M
                      ? d.push({
                          id: _,
                          type: c.PermissionOverwriteType.ROLE,
                          allow: M
                            ? i.default.add(
                                null !==
                                  (u =
                                    null === (a = n[_]) || void 0 === a
                                      ? void 0
                                      : a.allow) && void 0 !== u
                                  ? u
                                  : v.default.NONE,
                                s
                              )
                            : i.default.remove(
                                null !==
                                  (R =
                                    null === (t = n[_]) || void 0 === t
                                      ? void 0
                                      : t.allow) && void 0 !== R
                                  ? R
                                  : v.default.NONE,
                                s
                              ),
                          deny: i.default.remove(
                            null !==
                              (f =
                                null === (o = n[_]) || void 0 === o
                                  ? void 0
                                  : o.deny) && void 0 !== f
                              ? f
                              : v.default.NONE,
                            s
                          ),
                        })
                      : (0, N.isEveryoneRoleId)(e.id, _)
                        ? d.push({
                            id: _,
                            type: c.PermissionOverwriteType.ROLE,
                            allow: i.default.remove(
                              null !==
                                (E =
                                  null === (m = n[_]) || void 0 === m
                                    ? void 0
                                    : m.allow) && void 0 !== E
                                ? E
                                : v.default.NONE,
                              s
                            ),
                            deny: i.default.add(
                              null !==
                                (S =
                                  null === (h = n[_]) || void 0 === h
                                    ? void 0
                                    : h.deny) && void 0 !== S
                                ? S
                                : v.default.NONE,
                              s
                            ),
                          })
                        : _ in n && O.push(_);
                  }, []),
                  (0, u.saveAndClearPermissionUpdates)(l.id, d, O)
                );
              },
              [e, a, l]
            );
          })(l, a),
          F = async () => {
            if (!b) return;
            D(!0), P(!1);
            let e = [...w];
            if (I) {
              let a = l.getEveryoneRoleId();
              e.push(a);
            }
            try {
              await T(o, e), _();
            } catch (e) {
              P(!0);
            } finally {
              D(!1);
            }
          };
        return y
          ? (0, s.jsx)(d.Spinner, {})
          : (0, s.jsxs)(d.ModalRoot, {
              transitionState: M,
              "aria-label": f.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
              children: [
                (0, s.jsx)(d.ModalHeader, {
                  separator: !1,
                  className: m.modalHeader,
                  children: (0, s.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    className: m.header,
                    children:
                      f.default.Messages
                        .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_TITLE,
                  }),
                }),
                (0, s.jsx)(d.ModalContent, {
                  children: (0, s.jsxs)("div", {
                    className: m.container,
                    children: [
                      (0, s.jsx)("div", {
                        className: m.row,
                        children: (0, s.jsx)("div", {
                          ref: A,
                          className: m.roleSelectorContainer,
                          children: (0, s.jsx)(d.FocusRingScope, {
                            containerRef: A,
                            children: (0, s.jsx)(d.SearchableSelect, {
                              closeOnSelect: !1,
                              className: m.roleSelector,
                              maxVisibleItems: 5,
                              placeholder:
                                f.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_ROLE_INPUT_PLACEHOLDER,
                              multi: !0,
                              value: w,
                              options: g,
                              onChange: e => {
                                j(e);
                              },
                              renderOptionPrefix: e =>
                                null != e
                                  ? (0, s.jsx)(S, { rolesRow: C.get(e.value) })
                                  : null,
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: m.row,
                        children: [
                          (0, s.jsx)(d.FormSwitch, {
                            value: I,
                            hideBorder: !0,
                            onChange: x,
                            className: m.switchGroup,
                            children:
                              f.default.Messages
                                .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODAL_LET_EVERYONE_POST,
                          }),
                          (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children:
                              f.default.Messages.FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_DESCRIPTION.format(),
                          }),
                        ],
                      }),
                      B
                        ? (0, s.jsx)("div", {
                            className: m.row,
                            children: (0, s.jsx)(d.Text, {
                              className: r(m.row, m.error),
                              variant: "text-sm/normal",
                              children:
                                f.default.Messages
                                  .FORUM_CHANNEL_ONBOARDING_PERMISSION_MODEL_ERROR,
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, s.jsxs)(d.ModalFooter, {
                  className: m.footer,
                  children: [
                    (0, s.jsx)(d.Button, {
                      type: "submit",
                      color: d.Button.Colors.BRAND_NEW,
                      size: d.Button.Sizes.SMALL,
                      className: m.button,
                      onClick: F,
                      disabled: !b,
                      autoFocus: !0,
                      children: f.default.Messages.SAVE,
                    }),
                    (0, s.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      size: d.Button.Sizes.SMALL,
                      className: m.button,
                      onClick: _,
                      children: f.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=a9de58e773265b6a3bd9.js.map
